import{S as pk,i as dk,s as ck,e as o,k as c,w as y,t as s,M as hk,c as n,d as t,m as h,a as r,x as q,h as a,b as g,N as uk,F as e,g as m,y as j,q as $,o as E,B as F,v as mk,L as ut}from"../../chunks/vendor-6b77c823.js";import{T as Ps}from"../../chunks/Tip-39098574.js";import{D as He}from"../../chunks/Docstring-1088f2fb.js";import{C as Ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Rt}from"../../chunks/IconCopyLink-7a11ce68.js";import{F as Cc,M as Tn}from"../../chunks/Markdown-9acf6d91.js";import{E as _o}from"../../chunks/ExampleCodeBlock-5212b321.js";function gk(P){let l,b,p,u,T,d,f,A,k,N,x,U,B,V,R,K,re,W,L;return f=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base")

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig("google-base-finetuned-wikisql-supervised")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&quot;google-base-finetuned-wikisql-supervised&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),W=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=o("p"),b=s(`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),p=o("a"),u=s("torch-scatter"),T=s(" dependency:"),d=c(),y(f.$$.fragment),A=c(),k=o("p"),N=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),x=o("a"),U=s("TapasConfig"),B=s(", and then create a "),V=o("a"),R=s("TapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=c(),y(W.$$.fragment),this.h()},l(w){l=n(w,"P",{});var M=r(l);b=a(M,`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),p=n(M,"A",{href:!0,rel:!0});var G=r(p);u=a(G,"torch-scatter"),G.forEach(t),T=a(M," dependency:"),M.forEach(t),d=h(w),q(f.$$.fragment,w),A=h(w),k=n(w,"P",{});var C=r(k);N=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),x=n(C,"A",{href:!0});var O=r(x);U=a(O,"TapasConfig"),O.forEach(t),B=a(C,", and then create a "),V=n(C,"A",{href:!0});var ee=r(V);R=a(ee,"TapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=h(w),q(W.$$.fragment,w),this.h()},h(){g(p,"href","https://github.com/rusty1s/pytorch_scatter"),g(p,"rel","nofollow"),g(x,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig"),g(V,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(w,M){m(w,l,M),e(l,b),e(l,p),e(p,u),e(l,T),m(w,d,M),j(f,w,M),m(w,A,M),m(w,k,M),e(k,N),e(k,x),e(x,U),e(k,B),e(k,V),e(V,R),e(k,K),m(w,re,M),j(W,w,M),L=!0},p:ut,i(w){L||($(f.$$.fragment,w),$(W.$$.fragment,w),L=!0)},o(w){E(f.$$.fragment,w),E(W.$$.fragment,w),L=!1},d(w){w&&t(l),w&&t(d),F(f,w),w&&t(A),w&&t(k),w&&t(re),F(W,w)}}}function fk(P){let l,b;return l=new Tn({props:{$$slots:{default:[gk]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(p){q(l.$$.fragment,p)},m(p,u){j(l,p,u),b=!0},p(p,u){const T={};u&2&&(T.$$scope={dirty:u,ctx:p}),l.$set(T)},i(p){b||($(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){F(l,p)}}}function _k(P){let l,b,p,u,T,d,f,A,k,N,x,U,B,V,R,K,re,W,L;return f=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base")

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained("google/tapas-base-finetuned-wtq")
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig("google-base-finetuned-wikisql-supervised")
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&quot;google-base-finetuned-wikisql-supervised&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),W=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=o("p"),b=s("Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),p=o("a"),u=s("tensorflow_probability"),T=s(" dependency:"),d=c(),y(f.$$.fragment),A=c(),k=o("p"),N=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),x=o("a"),U=s("TapasConfig"),B=s(", and then create a "),V=o("a"),R=s("TFTapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=c(),y(W.$$.fragment),this.h()},l(w){l=n(w,"P",{});var M=r(l);b=a(M,"Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),p=n(M,"A",{href:!0,rel:!0});var G=r(p);u=a(G,"tensorflow_probability"),G.forEach(t),T=a(M," dependency:"),M.forEach(t),d=h(w),q(f.$$.fragment,w),A=h(w),k=n(w,"P",{});var C=r(k);N=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),x=n(C,"A",{href:!0});var O=r(x);U=a(O,"TapasConfig"),O.forEach(t),B=a(C,", and then create a "),V=n(C,"A",{href:!0});var ee=r(V);R=a(ee,"TFTapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=h(w),q(W.$$.fragment,w),this.h()},h(){g(p,"href","https://github.com/tensorflow/probability"),g(p,"rel","nofollow"),g(x,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig"),g(V,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(w,M){m(w,l,M),e(l,b),e(l,p),e(p,u),e(l,T),m(w,d,M),j(f,w,M),m(w,A,M),m(w,k,M),e(k,N),e(k,x),e(x,U),e(k,B),e(k,V),e(V,R),e(k,K),m(w,re,M),j(W,w,M),L=!0},p:ut,i(w){L||($(f.$$.fragment,w),$(W.$$.fragment,w),L=!0)},o(w){E(f.$$.fragment,w),E(W.$$.fragment,w),L=!1},d(w){w&&t(l),w&&t(d),F(f,w),w&&t(A),w&&t(k),w&&t(re),F(W,w)}}}function Tk(P){let l,b;return l=new Tn({props:{$$slots:{default:[_k]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(p){q(l.$$.fragment,p)},m(p,u){j(l,p,u),b=!0},p(p,u){const T={};u&2&&(T.$$scope={dirty:u,ctx:p}),l.$set(T)},i(p){b||($(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){F(l,p)}}}function bk(P){let l,b,p,u,T,d,f,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,fe,ue,_e,me,ne,qe,ie,ve,v,D,be,xe,we,le,ze,Me,Z,pe,de,De,je,Te,Ne,ke,Ae,Oe,Ze,Ss,Ds,mt,gt,ha,ft,_t,Ns,tt,Os,Ls,Ke,Pe,Qs,kt,ye,yt,qt,Is,jt,$t,Ws,Et,hs,Gt,Ft,us,Ye,$e,Hs,At,ae,ot,Bt,Us,xt,Yt,Rs,zt,Ct,Gs,Mt,Jt,Bs,Pt,Xt,Vs,St,Ks,Le,Dt,Zt,Ys,Nt,es,Js,ts,Ue,ss,Ee,as,nt,Xs,Ot,Lt,Zs,ea,Re,ta,os,ns,et,Qt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = "google/tapas-base"
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(
    table=table,
    queries=queries,
    answer_coordinates=answer_coordinates,
    answer_text=answer_text,
    padding="max_length",
    return_tensors="pt",
)
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table,
<span class="hljs-meta">... </span>    queries=queries,
<span class="hljs-meta">... </span>    answer_coordinates=answer_coordinates,
<span class="hljs-meta">... </span>    answer_text=answer_text,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}),et=new Ve({props:{code:`import torch
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"


class TableDataset(torch.utils.data.Dataset):
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer

    def __getitem__(self, idx):
        item = data.iloc[idx]
        table = pd.read_csv(table_csv_path + item.table_file).astype(
            str
        )  # be sure to make your table data text only
        encoding = self.tokenizer(
            table=table,
            queries=item.question,
            answer_coordinates=item.answer_coordinates,
            answer_text=item.answer_text,
            truncation=True,
            padding="max_length",
            return_tensors="pt",
        )
        # remove the batch dimension which the tokenizer adds by default
        encoding = {key: val.squeeze(0) for key, val in encoding.items()}
        # add the float_answer which is also required (weak supervision for aggregation case)
        encoding["float_answer"] = torch.tensor(item.float_answer)
        return encoding

    def __len__(self):
        return len(self.data)


data = pd.read_csv(tsv_path, sep="\\t")
train_dataset = TableDataset(data, tokenizer)
train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>(torch.utils.data.Dataset):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__getitem__</span>(<span class="hljs-params">self, idx</span>):
<span class="hljs-meta">... </span>        item = data.iloc[idx]
<span class="hljs-meta">... </span>        table = pd.read_csv(table_csv_path + item.table_file).astype(
<span class="hljs-meta">... </span>            <span class="hljs-built_in">str</span>
<span class="hljs-meta">... </span>        )  <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>        encoding = self.tokenizer(
<span class="hljs-meta">... </span>            table=table,
<span class="hljs-meta">... </span>            queries=item.question,
<span class="hljs-meta">... </span>            answer_coordinates=item.answer_coordinates,
<span class="hljs-meta">... </span>            answer_text=item.answer_text,
<span class="hljs-meta">... </span>            truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>            padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>            return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>        encoding = {key: val.squeeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>        <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>        encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = torch.tensor(item.float_answer)
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> encoding

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)


<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&quot;\\t&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=<span class="hljs-number">32</span>)`}}),{c(){l=o("p"),b=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),p=o("a"),u=s("TapasTokenizer"),T=s(" to convert table-question pairs into "),d=o("code"),f=s("input_ids"),A=s(", "),k=o("code"),N=s("attention_mask"),x=s(", "),U=o("code"),B=s("token_type_ids"),V=s(" and so on. Again, based on which of the three cases you picked above, "),R=o("a"),K=s("TapasForQuestionAnswering"),re=s(` requires different
inputs to be fine-tuned:`),W=c(),L=o("table"),w=o("thead"),M=o("tr"),G=o("th"),C=o("strong"),O=s("Task"),ee=c(),te=o("th"),ce=o("strong"),oe=s("Required inputs"),se=c(),S=o("tbody"),Q=o("tr"),H=o("td"),X=s("Conversational"),I=c(),Y=o("td"),fe=o("code"),ue=s("input_ids"),_e=s(", "),me=o("code"),ne=s("attention_mask"),qe=s(", "),ie=o("code"),ve=s("token_type_ids"),v=s(", "),D=o("code"),be=s("labels"),xe=c(),we=o("tr"),le=o("td"),ze=s("Weak supervision for aggregation"),Me=c(),Z=o("td"),pe=o("code"),de=s("input_ids"),De=s(", "),je=o("code"),Te=s("attention_mask"),Ne=s(", "),ke=o("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=o("code"),Ss=s("labels"),Ds=s(", "),mt=o("code"),gt=s("numeric_values"),ha=s(", "),ft=o("code"),_t=s("numeric_values_scale"),Ns=s(", "),tt=o("code"),Os=s("float_answer"),Ls=c(),Ke=o("tr"),Pe=o("td"),Qs=s("Strong supervision for aggregation"),kt=c(),ye=o("td"),yt=o("code"),qt=s("input ids"),Is=s(", "),jt=o("code"),$t=s("attention mask"),Ws=s(", "),Et=o("code"),hs=s("token type ids"),Gt=s(", "),Ft=o("code"),us=s("labels"),Ye=s(", "),$e=o("code"),Hs=s("aggregation_labels"),At=c(),ae=o("p"),ot=o("a"),Bt=s("TapasTokenizer"),Us=s(" creates the "),xt=o("code"),Yt=s("labels"),Rs=s(", "),zt=o("code"),Ct=s("numeric_values"),Gs=s(" and "),Mt=o("code"),Jt=s("numeric_values_scale"),Bs=s(" based on the "),Pt=o("code"),Xt=s("answer_coordinates"),Vs=s(" and "),St=o("code"),Ks=s("answer_text"),Le=s(" columns of the TSV file. The "),Dt=o("code"),Zt=s("float_answer"),Ys=s(" and "),Nt=o("code"),es=s("aggregation_labels"),Js=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ts=c(),y(Ue.$$.fragment),ss=c(),Ee=o("p"),as=s("Note that "),nt=o("a"),Xs=s("TapasTokenizer"),Ot=s(" expects the data of the table to be "),Lt=o("strong"),Zs=s("text-only"),ea=s(". You can use "),Re=o("code"),ta=s(".astype(str)"),os=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ns=c(),y(et.$$.fragment),this.h()},l(z){l=n(z,"P",{});var J=r(l);b=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),p=n(J,"A",{href:!0});var qa=r(p);u=a(qa,"TapasTokenizer"),qa.forEach(t),T=a(J," to convert table-question pairs into "),d=n(J,"CODE",{});var sa=r(d);f=a(sa,"input_ids"),sa.forEach(t),A=a(J,", "),k=n(J,"CODE",{});var ja=r(k);N=a(ja,"attention_mask"),ja.forEach(t),x=a(J,", "),U=n(J,"CODE",{});var ua=r(U);B=a(ua,"token_type_ids"),ua.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),R=n(J,"A",{href:!0});var It=r(R);K=a(It,"TapasForQuestionAnswering"),It.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),W=h(z),L=n(z,"TABLE",{});var st=r(L);w=n(st,"THEAD",{});var aa=r(w);M=n(aa,"TR",{});var rt=r(M);G=n(rt,"TH",{});var $a=r(G);C=n($a,"STRONG",{});var oa=r(C);O=a(oa,"Task"),oa.forEach(t),$a.forEach(t),ee=h(rt),te=n(rt,"TH",{});var Ea=r(te);ce=n(Ea,"STRONG",{});var ma=r(ce);oe=a(ma,"Required inputs"),ma.forEach(t),Ea.forEach(t),rt.forEach(t),aa.forEach(t),se=h(st),S=n(st,"TBODY",{});var Ie=r(S);Q=n(Ie,"TR",{});var rs=r(Q);H=n(rs,"TD",{});var ms=r(H);X=a(ms,"Conversational"),ms.forEach(t),I=h(rs),Y=n(rs,"TD",{});var Ge=r(Y);fe=n(Ge,"CODE",{});var Fa=r(fe);ue=a(Fa,"input_ids"),Fa.forEach(t),_e=a(Ge,", "),me=n(Ge,"CODE",{});var ga=r(me);ne=a(ga,"attention_mask"),ga.forEach(t),qe=a(Ge,", "),ie=n(Ge,"CODE",{});var gs=r(ie);ve=a(gs,"token_type_ids"),gs.forEach(t),v=a(Ge,", "),D=n(Ge,"CODE",{});var na=r(D);be=a(na,"labels"),na.forEach(t),Ge.forEach(t),rs.forEach(t),xe=h(Ie),we=n(Ie,"TR",{});var is=r(we);le=n(is,"TD",{});var fa=r(le);ze=a(fa,"Weak supervision for aggregation"),fa.forEach(t),Me=h(is),Z=n(is,"TD",{});var ge=r(Z);pe=n(ge,"CODE",{});var Aa=r(pe);de=a(Aa,"input_ids"),Aa.forEach(t),De=a(ge,", "),je=n(ge,"CODE",{});var fs=r(je);Te=a(fs,"attention_mask"),fs.forEach(t),Ne=a(ge,", "),ke=n(ge,"CODE",{});var xa=r(ke);Ae=a(xa,"token_type_ids"),xa.forEach(t),Oe=a(ge,", "),Ze=n(ge,"CODE",{});var za=r(Ze);Ss=a(za,"labels"),za.forEach(t),Ds=a(ge,", "),mt=n(ge,"CODE",{});var _a=r(mt);gt=a(_a,"numeric_values"),_a.forEach(t),ha=a(ge,", "),ft=n(ge,"CODE",{});var Tt=r(ft);_t=a(Tt,"numeric_values_scale"),Tt.forEach(t),Ns=a(ge,", "),tt=n(ge,"CODE",{});var ra=r(tt);Os=a(ra,"float_answer"),ra.forEach(t),ge.forEach(t),is.forEach(t),Ls=h(Ie),Ke=n(Ie,"TR",{});var ls=r(Ke);Pe=n(ls,"TD",{});var Ca=r(Pe);Qs=a(Ca,"Strong supervision for aggregation"),Ca.forEach(t),kt=h(ls),ye=n(ls,"TD",{});var Fe=r(ye);yt=n(Fe,"CODE",{});var Ma=r(yt);qt=a(Ma,"input ids"),Ma.forEach(t),Is=a(Fe,", "),jt=n(Fe,"CODE",{});var ia=r(jt);$t=a(ia,"attention mask"),ia.forEach(t),Ws=a(Fe,", "),Et=n(Fe,"CODE",{});var Pa=r(Et);hs=a(Pa,"token type ids"),Pa.forEach(t),Gt=a(Fe,", "),Ft=n(Fe,"CODE",{});var Sa=r(Ft);us=a(Sa,"labels"),Sa.forEach(t),Ye=a(Fe,", "),$e=n(Fe,"CODE",{});var Da=r($e);Hs=a(Da,"aggregation_labels"),Da.forEach(t),Fe.forEach(t),ls.forEach(t),Ie.forEach(t),st.forEach(t),At=h(z),ae=n(z,"P",{});var he=r(ae);ot=n(he,"A",{href:!0});var Na=r(ot);Bt=a(Na,"TapasTokenizer"),Na.forEach(t),Us=a(he," creates the "),xt=n(he,"CODE",{});var la=r(xt);Yt=a(la,"labels"),la.forEach(t),Rs=a(he,", "),zt=n(he,"CODE",{});var Oa=r(zt);Ct=a(Oa,"numeric_values"),Oa.forEach(t),Gs=a(he," and "),Mt=n(he,"CODE",{});var La=r(Mt);Jt=a(La,"numeric_values_scale"),La.forEach(t),Bs=a(he," based on the "),Pt=n(he,"CODE",{});var Ta=r(Pt);Xt=a(Ta,"answer_coordinates"),Ta.forEach(t),Vs=a(he," and "),St=n(he,"CODE",{});var _s=r(St);Ks=a(_s,"answer_text"),_s.forEach(t),Le=a(he," columns of the TSV file. The "),Dt=n(he,"CODE",{});var Qa=r(Dt);Zt=a(Qa,"float_answer"),Qa.forEach(t),Ys=a(he," and "),Nt=n(he,"CODE",{});var ba=r(Nt);es=a(ba,"aggregation_labels"),ba.forEach(t),Js=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ts=h(z),q(Ue.$$.fragment,z),ss=h(z),Ee=n(z,"P",{});var Ce=r(Ee);as=a(Ce,"Note that "),nt=n(Ce,"A",{href:!0});var pa=r(nt);Xs=a(pa,"TapasTokenizer"),pa.forEach(t),Ot=a(Ce," expects the data of the table to be "),Lt=n(Ce,"STRONG",{});var Wt=r(Lt);Zs=a(Wt,"text-only"),Wt.forEach(t),ea=a(Ce,". You can use "),Re=n(Ce,"CODE",{});var da=r(Re);ta=a(da,".astype(str)"),da.forEach(t),os=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),ns=h(z),q(et.$$.fragment,z),this.h()},h(){g(p,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer"),g(R,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),g(ot,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer"),g(nt,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer")},m(z,J){m(z,l,J),e(l,b),e(l,p),e(p,u),e(l,T),e(l,d),e(d,f),e(l,A),e(l,k),e(k,N),e(l,x),e(l,U),e(U,B),e(l,V),e(l,R),e(R,K),e(l,re),m(z,W,J),m(z,L,J),e(L,w),e(w,M),e(M,G),e(G,C),e(C,O),e(M,ee),e(M,te),e(te,ce),e(ce,oe),e(L,se),e(L,S),e(S,Q),e(Q,H),e(H,X),e(Q,I),e(Q,Y),e(Y,fe),e(fe,ue),e(Y,_e),e(Y,me),e(me,ne),e(Y,qe),e(Y,ie),e(ie,ve),e(Y,v),e(Y,D),e(D,be),e(S,xe),e(S,we),e(we,le),e(le,ze),e(we,Me),e(we,Z),e(Z,pe),e(pe,de),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ke),e(ke,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ss),e(Z,Ds),e(Z,mt),e(mt,gt),e(Z,ha),e(Z,ft),e(ft,_t),e(Z,Ns),e(Z,tt),e(tt,Os),e(S,Ls),e(S,Ke),e(Ke,Pe),e(Pe,Qs),e(Ke,kt),e(Ke,ye),e(ye,yt),e(yt,qt),e(ye,Is),e(ye,jt),e(jt,$t),e(ye,Ws),e(ye,Et),e(Et,hs),e(ye,Gt),e(ye,Ft),e(Ft,us),e(ye,Ye),e(ye,$e),e($e,Hs),m(z,At,J),m(z,ae,J),e(ae,ot),e(ot,Bt),e(ae,Us),e(ae,xt),e(xt,Yt),e(ae,Rs),e(ae,zt),e(zt,Ct),e(ae,Gs),e(ae,Mt),e(Mt,Jt),e(ae,Bs),e(ae,Pt),e(Pt,Xt),e(ae,Vs),e(ae,St),e(St,Ks),e(ae,Le),e(ae,Dt),e(Dt,Zt),e(ae,Ys),e(ae,Nt),e(Nt,es),e(ae,Js),m(z,ts,J),j(Ue,z,J),m(z,ss,J),m(z,Ee,J),e(Ee,as),e(Ee,nt),e(nt,Xs),e(Ee,Ot),e(Ee,Lt),e(Lt,Zs),e(Ee,ea),e(Ee,Re),e(Re,ta),e(Ee,os),m(z,ns,J),j(et,z,J),Qt=!0},p:ut,i(z){Qt||($(Ue.$$.fragment,z),$(et.$$.fragment,z),Qt=!0)},o(z){E(Ue.$$.fragment,z),E(et.$$.fragment,z),Qt=!1},d(z){z&&t(l),z&&t(W),z&&t(L),z&&t(At),z&&t(ae),z&&t(ts),F(Ue,z),z&&t(ss),z&&t(Ee),z&&t(ns),F(et,z)}}}function vk(P){let l,b;return l=new Tn({props:{$$slots:{default:[bk]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(p){q(l.$$.fragment,p)},m(p,u){j(l,p,u),b=!0},p(p,u){const T={};u&2&&(T.$$scope={dirty:u,ctx:p}),l.$set(T)},i(p){b||($(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){F(l,p)}}}function wk(P){let l,b,p,u,T,d,f,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,fe,ue,_e,me,ne,qe,ie,ve,v,D,be,xe,we,le,ze,Me,Z,pe,de,De,je,Te,Ne,ke,Ae,Oe,Ze,Ss,Ds,mt,gt,ha,ft,_t,Ns,tt,Os,Ls,Ke,Pe,Qs,kt,ye,yt,qt,Is,jt,$t,Ws,Et,hs,Gt,Ft,us,Ye,$e,Hs,At,ae,ot,Bt,Us,xt,Yt,Rs,zt,Ct,Gs,Mt,Jt,Bs,Pt,Xt,Vs,St,Ks,Le,Dt,Zt,Ys,Nt,es,Js,ts,Ue,ss,Ee,as,nt,Xs,Ot,Lt,Zs,ea,Re,ta,os,ns,et,Qt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = "google/tapas-base"
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(
    table=table,
    queries=queries,
    answer_coordinates=answer_coordinates,
    answer_text=answer_text,
    padding="max_length",
    return_tensors="tf",
)
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table,
<span class="hljs-meta">... </span>    queries=queries,
<span class="hljs-meta">... </span>    answer_coordinates=answer_coordinates,
<span class="hljs-meta">... </span>    answer_text=answer_text,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}),et=new Ve({props:{code:`import tensorflow as tf
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"


class TableDataset:
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer

    def __iter__(self):
        for idx in range(self.__len__()):
            item = self.data.iloc[idx]
            table = pd.read_csv(table_csv_path + item.table_file).astype(
                str
            )  # be sure to make your table data text only
            encoding = self.tokenizer(
                table=table,
                queries=item.question,
                answer_coordinates=item.answer_coordinates,
                answer_text=item.answer_text,
                truncation=True,
                padding="max_length",
                return_tensors="tf",
            )
            # remove the batch dimension which the tokenizer adds by default
            encoding = {key: tf.squeeze(val, 0) for key, val in encoding.items()}
            # add the float_answer which is also required (weak supervision for aggregation case)
            encoding["float_answer"] = tf.convert_to_tensor(item.float_answer, dtype=tf.float32)
            yield encoding["input_ids"], encoding["attention_mask"], encoding["numeric_values"], encoding[
                "numeric_values_scale"
            ], encoding["token_type_ids"], encoding["labels"], encoding["float_answer"]

    def __len__(self):
        return len(self.data)


data = pd.read_csv(tsv_path, sep="\\t")
train_dataset = TableDataset(data, tokenizer)
output_signature = (
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
    tf.TensorSpec(shape=(512, 7), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
)
train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__iter__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> idx <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(self.__len__()):
<span class="hljs-meta">... </span>            item = self.data.iloc[idx]
<span class="hljs-meta">... </span>            table = pd.read_csv(table_csv_path + item.table_file).astype(
<span class="hljs-meta">... </span>                <span class="hljs-built_in">str</span>
<span class="hljs-meta">... </span>            )  <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>            encoding = self.tokenizer(
<span class="hljs-meta">... </span>                table=table,
<span class="hljs-meta">... </span>                queries=item.question,
<span class="hljs-meta">... </span>                answer_coordinates=item.answer_coordinates,
<span class="hljs-meta">... </span>                answer_text=item.answer_text,
<span class="hljs-meta">... </span>                truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>                padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>                return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>            )
<span class="hljs-meta">... </span>            <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>            encoding = {key: tf.squeeze(val, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>            <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>            encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = tf.convert_to_tensor(item.float_answer, dtype=tf.float32)
<span class="hljs-meta">... </span>            <span class="hljs-keyword">yield</span> encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>], encoding[<span class="hljs-string">&quot;numeric_values&quot;</span>], encoding[
<span class="hljs-meta">... </span>                <span class="hljs-string">&quot;numeric_values_scale&quot;</span>
<span class="hljs-meta">... </span>            ], encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>], encoding[<span class="hljs-string">&quot;labels&quot;</span>], encoding[<span class="hljs-string">&quot;float_answer&quot;</span>]

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)


<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&quot;\\t&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>output_signature = (
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>, <span class="hljs-number">7</span>), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)`}}),{c(){l=o("p"),b=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),p=o("a"),u=s("TapasTokenizer"),T=s(" to convert table-question pairs into "),d=o("code"),f=s("input_ids"),A=s(", "),k=o("code"),N=s("attention_mask"),x=s(", "),U=o("code"),B=s("token_type_ids"),V=s(" and so on. Again, based on which of the three cases you picked above, "),R=o("a"),K=s("TFTapasForQuestionAnswering"),re=s(` requires different
inputs to be fine-tuned:`),W=c(),L=o("table"),w=o("thead"),M=o("tr"),G=o("th"),C=o("strong"),O=s("Task"),ee=c(),te=o("th"),ce=o("strong"),oe=s("Required inputs"),se=c(),S=o("tbody"),Q=o("tr"),H=o("td"),X=s("Conversational"),I=c(),Y=o("td"),fe=o("code"),ue=s("input_ids"),_e=s(", "),me=o("code"),ne=s("attention_mask"),qe=s(", "),ie=o("code"),ve=s("token_type_ids"),v=s(", "),D=o("code"),be=s("labels"),xe=c(),we=o("tr"),le=o("td"),ze=s("Weak supervision for aggregation"),Me=c(),Z=o("td"),pe=o("code"),de=s("input_ids"),De=s(", "),je=o("code"),Te=s("attention_mask"),Ne=s(", "),ke=o("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=o("code"),Ss=s("labels"),Ds=s(", "),mt=o("code"),gt=s("numeric_values"),ha=s(", "),ft=o("code"),_t=s("numeric_values_scale"),Ns=s(", "),tt=o("code"),Os=s("float_answer"),Ls=c(),Ke=o("tr"),Pe=o("td"),Qs=s("Strong supervision for aggregation"),kt=c(),ye=o("td"),yt=o("code"),qt=s("input ids"),Is=s(", "),jt=o("code"),$t=s("attention mask"),Ws=s(", "),Et=o("code"),hs=s("token type ids"),Gt=s(", "),Ft=o("code"),us=s("labels"),Ye=s(", "),$e=o("code"),Hs=s("aggregation_labels"),At=c(),ae=o("p"),ot=o("a"),Bt=s("TapasTokenizer"),Us=s(" creates the "),xt=o("code"),Yt=s("labels"),Rs=s(", "),zt=o("code"),Ct=s("numeric_values"),Gs=s(" and "),Mt=o("code"),Jt=s("numeric_values_scale"),Bs=s(" based on the "),Pt=o("code"),Xt=s("answer_coordinates"),Vs=s(" and "),St=o("code"),Ks=s("answer_text"),Le=s(" columns of the TSV file. The "),Dt=o("code"),Zt=s("float_answer"),Ys=s(" and "),Nt=o("code"),es=s("aggregation_labels"),Js=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ts=c(),y(Ue.$$.fragment),ss=c(),Ee=o("p"),as=s("Note that "),nt=o("a"),Xs=s("TapasTokenizer"),Ot=s(" expects the data of the table to be "),Lt=o("strong"),Zs=s("text-only"),ea=s(". You can use "),Re=o("code"),ta=s(".astype(str)"),os=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ns=c(),y(et.$$.fragment),this.h()},l(z){l=n(z,"P",{});var J=r(l);b=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),p=n(J,"A",{href:!0});var qa=r(p);u=a(qa,"TapasTokenizer"),qa.forEach(t),T=a(J," to convert table-question pairs into "),d=n(J,"CODE",{});var sa=r(d);f=a(sa,"input_ids"),sa.forEach(t),A=a(J,", "),k=n(J,"CODE",{});var ja=r(k);N=a(ja,"attention_mask"),ja.forEach(t),x=a(J,", "),U=n(J,"CODE",{});var ua=r(U);B=a(ua,"token_type_ids"),ua.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),R=n(J,"A",{href:!0});var It=r(R);K=a(It,"TFTapasForQuestionAnswering"),It.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),W=h(z),L=n(z,"TABLE",{});var st=r(L);w=n(st,"THEAD",{});var aa=r(w);M=n(aa,"TR",{});var rt=r(M);G=n(rt,"TH",{});var $a=r(G);C=n($a,"STRONG",{});var oa=r(C);O=a(oa,"Task"),oa.forEach(t),$a.forEach(t),ee=h(rt),te=n(rt,"TH",{});var Ea=r(te);ce=n(Ea,"STRONG",{});var ma=r(ce);oe=a(ma,"Required inputs"),ma.forEach(t),Ea.forEach(t),rt.forEach(t),aa.forEach(t),se=h(st),S=n(st,"TBODY",{});var Ie=r(S);Q=n(Ie,"TR",{});var rs=r(Q);H=n(rs,"TD",{});var ms=r(H);X=a(ms,"Conversational"),ms.forEach(t),I=h(rs),Y=n(rs,"TD",{});var Ge=r(Y);fe=n(Ge,"CODE",{});var Fa=r(fe);ue=a(Fa,"input_ids"),Fa.forEach(t),_e=a(Ge,", "),me=n(Ge,"CODE",{});var ga=r(me);ne=a(ga,"attention_mask"),ga.forEach(t),qe=a(Ge,", "),ie=n(Ge,"CODE",{});var gs=r(ie);ve=a(gs,"token_type_ids"),gs.forEach(t),v=a(Ge,", "),D=n(Ge,"CODE",{});var na=r(D);be=a(na,"labels"),na.forEach(t),Ge.forEach(t),rs.forEach(t),xe=h(Ie),we=n(Ie,"TR",{});var is=r(we);le=n(is,"TD",{});var fa=r(le);ze=a(fa,"Weak supervision for aggregation"),fa.forEach(t),Me=h(is),Z=n(is,"TD",{});var ge=r(Z);pe=n(ge,"CODE",{});var Aa=r(pe);de=a(Aa,"input_ids"),Aa.forEach(t),De=a(ge,", "),je=n(ge,"CODE",{});var fs=r(je);Te=a(fs,"attention_mask"),fs.forEach(t),Ne=a(ge,", "),ke=n(ge,"CODE",{});var xa=r(ke);Ae=a(xa,"token_type_ids"),xa.forEach(t),Oe=a(ge,", "),Ze=n(ge,"CODE",{});var za=r(Ze);Ss=a(za,"labels"),za.forEach(t),Ds=a(ge,", "),mt=n(ge,"CODE",{});var _a=r(mt);gt=a(_a,"numeric_values"),_a.forEach(t),ha=a(ge,", "),ft=n(ge,"CODE",{});var Tt=r(ft);_t=a(Tt,"numeric_values_scale"),Tt.forEach(t),Ns=a(ge,", "),tt=n(ge,"CODE",{});var ra=r(tt);Os=a(ra,"float_answer"),ra.forEach(t),ge.forEach(t),is.forEach(t),Ls=h(Ie),Ke=n(Ie,"TR",{});var ls=r(Ke);Pe=n(ls,"TD",{});var Ca=r(Pe);Qs=a(Ca,"Strong supervision for aggregation"),Ca.forEach(t),kt=h(ls),ye=n(ls,"TD",{});var Fe=r(ye);yt=n(Fe,"CODE",{});var Ma=r(yt);qt=a(Ma,"input ids"),Ma.forEach(t),Is=a(Fe,", "),jt=n(Fe,"CODE",{});var ia=r(jt);$t=a(ia,"attention mask"),ia.forEach(t),Ws=a(Fe,", "),Et=n(Fe,"CODE",{});var Pa=r(Et);hs=a(Pa,"token type ids"),Pa.forEach(t),Gt=a(Fe,", "),Ft=n(Fe,"CODE",{});var Sa=r(Ft);us=a(Sa,"labels"),Sa.forEach(t),Ye=a(Fe,", "),$e=n(Fe,"CODE",{});var Da=r($e);Hs=a(Da,"aggregation_labels"),Da.forEach(t),Fe.forEach(t),ls.forEach(t),Ie.forEach(t),st.forEach(t),At=h(z),ae=n(z,"P",{});var he=r(ae);ot=n(he,"A",{href:!0});var Na=r(ot);Bt=a(Na,"TapasTokenizer"),Na.forEach(t),Us=a(he," creates the "),xt=n(he,"CODE",{});var la=r(xt);Yt=a(la,"labels"),la.forEach(t),Rs=a(he,", "),zt=n(he,"CODE",{});var Oa=r(zt);Ct=a(Oa,"numeric_values"),Oa.forEach(t),Gs=a(he," and "),Mt=n(he,"CODE",{});var La=r(Mt);Jt=a(La,"numeric_values_scale"),La.forEach(t),Bs=a(he," based on the "),Pt=n(he,"CODE",{});var Ta=r(Pt);Xt=a(Ta,"answer_coordinates"),Ta.forEach(t),Vs=a(he," and "),St=n(he,"CODE",{});var _s=r(St);Ks=a(_s,"answer_text"),_s.forEach(t),Le=a(he," columns of the TSV file. The "),Dt=n(he,"CODE",{});var Qa=r(Dt);Zt=a(Qa,"float_answer"),Qa.forEach(t),Ys=a(he," and "),Nt=n(he,"CODE",{});var ba=r(Nt);es=a(ba,"aggregation_labels"),ba.forEach(t),Js=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ts=h(z),q(Ue.$$.fragment,z),ss=h(z),Ee=n(z,"P",{});var Ce=r(Ee);as=a(Ce,"Note that "),nt=n(Ce,"A",{href:!0});var pa=r(nt);Xs=a(pa,"TapasTokenizer"),pa.forEach(t),Ot=a(Ce," expects the data of the table to be "),Lt=n(Ce,"STRONG",{});var Wt=r(Lt);Zs=a(Wt,"text-only"),Wt.forEach(t),ea=a(Ce,". You can use "),Re=n(Ce,"CODE",{});var da=r(Re);ta=a(da,".astype(str)"),da.forEach(t),os=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),ns=h(z),q(et.$$.fragment,z),this.h()},h(){g(p,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer"),g(R,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),g(ot,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer"),g(nt,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer")},m(z,J){m(z,l,J),e(l,b),e(l,p),e(p,u),e(l,T),e(l,d),e(d,f),e(l,A),e(l,k),e(k,N),e(l,x),e(l,U),e(U,B),e(l,V),e(l,R),e(R,K),e(l,re),m(z,W,J),m(z,L,J),e(L,w),e(w,M),e(M,G),e(G,C),e(C,O),e(M,ee),e(M,te),e(te,ce),e(ce,oe),e(L,se),e(L,S),e(S,Q),e(Q,H),e(H,X),e(Q,I),e(Q,Y),e(Y,fe),e(fe,ue),e(Y,_e),e(Y,me),e(me,ne),e(Y,qe),e(Y,ie),e(ie,ve),e(Y,v),e(Y,D),e(D,be),e(S,xe),e(S,we),e(we,le),e(le,ze),e(we,Me),e(we,Z),e(Z,pe),e(pe,de),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ke),e(ke,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ss),e(Z,Ds),e(Z,mt),e(mt,gt),e(Z,ha),e(Z,ft),e(ft,_t),e(Z,Ns),e(Z,tt),e(tt,Os),e(S,Ls),e(S,Ke),e(Ke,Pe),e(Pe,Qs),e(Ke,kt),e(Ke,ye),e(ye,yt),e(yt,qt),e(ye,Is),e(ye,jt),e(jt,$t),e(ye,Ws),e(ye,Et),e(Et,hs),e(ye,Gt),e(ye,Ft),e(Ft,us),e(ye,Ye),e(ye,$e),e($e,Hs),m(z,At,J),m(z,ae,J),e(ae,ot),e(ot,Bt),e(ae,Us),e(ae,xt),e(xt,Yt),e(ae,Rs),e(ae,zt),e(zt,Ct),e(ae,Gs),e(ae,Mt),e(Mt,Jt),e(ae,Bs),e(ae,Pt),e(Pt,Xt),e(ae,Vs),e(ae,St),e(St,Ks),e(ae,Le),e(ae,Dt),e(Dt,Zt),e(ae,Ys),e(ae,Nt),e(Nt,es),e(ae,Js),m(z,ts,J),j(Ue,z,J),m(z,ss,J),m(z,Ee,J),e(Ee,as),e(Ee,nt),e(nt,Xs),e(Ee,Ot),e(Ee,Lt),e(Lt,Zs),e(Ee,ea),e(Ee,Re),e(Re,ta),e(Ee,os),m(z,ns,J),j(et,z,J),Qt=!0},p:ut,i(z){Qt||($(Ue.$$.fragment,z),$(et.$$.fragment,z),Qt=!0)},o(z){E(Ue.$$.fragment,z),E(et.$$.fragment,z),Qt=!1},d(z){z&&t(l),z&&t(W),z&&t(L),z&&t(At),z&&t(ae),z&&t(ts),F(Ue,z),z&&t(ss),z&&t(Ee),z&&t(ns),F(et,z)}}}function kk(P){let l,b;return l=new Tn({props:{$$slots:{default:[wk]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(p){q(l.$$.fragment,p)},m(p,u){j(l,p,u),b=!0},p(p,u){const T={};u&2&&(T.$$scope={dirty:u,ctx:p}),l.$set(T)},i(p){b||($(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){F(l,p)}}}function yk(P){let l,b,p,u,T,d,f,A;return f=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

# this is the default WTQ configuration
config = TapasConfig(
    num_aggregation_labels=4,
    use_answer_as_supervision=True,
    answer_loss_cutoff=0.664694,
    cell_selection_preference=0.207951,
    huber_loss_delta=0.121194,
    init_cell_selection_weights_to_zero=True,
    select_one_column=True,
    allow_empty_column_selection=False,
    temperature=0.0352513,
)
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

optimizer = AdamW(model.parameters(), lr=5e-5)

model.train()
for epoch in range(2):  # loop over the dataset multiple times
    for batch in train_dataloader:
        # get the inputs;
        input_ids = batch["input_ids"]
        attention_mask = batch["attention_mask"]
        token_type_ids = batch["token_type_ids"]
        labels = batch["labels"]
        numeric_values = batch["numeric_values"]
        numeric_values_scale = batch["numeric_values_scale"]
        float_answer = batch["float_answer"]

        # zero the parameter gradients
        optimizer.zero_grad()

        # forward + backward + optimize
        outputs = model(
            input_ids=input_ids,
            attention_mask=attention_mask,
            token_type_ids=token_type_ids,
            labels=labels,
            numeric_values=numeric_values,
            numeric_values_scale=numeric_values_scale,
            float_answer=float_answer,
        )
        loss = outputs.loss
        loss.backward()
        optimizer.step()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering, AdamW

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>    num_aggregation_labels=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    use_answer_as_supervision=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    answer_loss_cutoff=<span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>    cell_selection_preference=<span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>    huber_loss_delta=<span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>    init_cell_selection_weights_to_zero=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    select_one_column=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    allow_empty_column_selection=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.train()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs;</span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">... </span>        labels = batch[<span class="hljs-string">&quot;labels&quot;</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-string">&quot;numeric_values&quot;</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-string">&quot;numeric_values_scale&quot;</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-string">&quot;float_answer&quot;</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># zero the parameter gradients</span>
<span class="hljs-meta">... </span>        optimizer.zero_grad()

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        outputs = model(
<span class="hljs-meta">... </span>            input_ids=input_ids,
<span class="hljs-meta">... </span>            attention_mask=attention_mask,
<span class="hljs-meta">... </span>            token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>            labels=labels,
<span class="hljs-meta">... </span>            numeric_values=numeric_values,
<span class="hljs-meta">... </span>            numeric_values_scale=numeric_values_scale,
<span class="hljs-meta">... </span>            float_answer=float_answer,
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        loss = outputs.loss
<span class="hljs-meta">... </span>        loss.backward()
<span class="hljs-meta">... </span>        optimizer.step()`}}),{c(){l=o("p"),b=s("You can then fine-tune "),p=o("a"),u=s("TapasForQuestionAnswering"),T=s(" as follows (shown here for the weak supervision for aggregation case):"),d=c(),y(f.$$.fragment),this.h()},l(k){l=n(k,"P",{});var N=r(l);b=a(N,"You can then fine-tune "),p=n(N,"A",{href:!0});var x=r(p);u=a(x,"TapasForQuestionAnswering"),x.forEach(t),T=a(N," as follows (shown here for the weak supervision for aggregation case):"),N.forEach(t),d=h(k),q(f.$$.fragment,k),this.h()},h(){g(p,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(k,N){m(k,l,N),e(l,b),e(l,p),e(p,u),e(l,T),m(k,d,N),j(f,k,N),A=!0},p:ut,i(k){A||($(f.$$.fragment,k),A=!0)},o(k){E(f.$$.fragment,k),A=!1},d(k){k&&t(l),k&&t(d),F(f,k)}}}function qk(P){let l,b;return l=new Tn({props:{$$slots:{default:[yk]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(p){q(l.$$.fragment,p)},m(p,u){j(l,p,u),b=!0},p(p,u){const T={};u&2&&(T.$$scope={dirty:u,ctx:p}),l.$set(T)},i(p){b||($(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){F(l,p)}}}function jk(P){let l,b,p,u,T,d,f,A;return f=new Ve({props:{code:`import tensorflow as tf
from transformers import TapasConfig, TFTapasForQuestionAnswering

# this is the default WTQ configuration
config = TapasConfig(
    num_aggregation_labels=4,
    use_answer_as_supervision=True,
    answer_loss_cutoff=0.664694,
    cell_selection_preference=0.207951,
    huber_loss_delta=0.121194,
    init_cell_selection_weights_to_zero=True,
    select_one_column=True,
    allow_empty_column_selection=False,
    temperature=0.0352513,
)
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

optimizer = tf.keras.optimizers.Adam(learning_rate=5e-5)

for epoch in range(2):  # loop over the dataset multiple times
    for batch in train_dataloader:
        # get the inputs;
        input_ids = batch[0]
        attention_mask = batch[1]
        token_type_ids = batch[4]
        labels = batch[-1]
        numeric_values = batch[2]
        numeric_values_scale = batch[3]
        float_answer = batch[6]

        # forward + backward + optimize
        with tf.GradientTape() as tape:
            outputs = model(
                input_ids=input_ids,
                attention_mask=attention_mask,
                token_type_ids=token_type_ids,
                labels=labels,
                numeric_values=numeric_values,
                numeric_values_scale=numeric_values_scale,
                float_answer=float_answer,
            )
        grads = tape.gradient(outputs.loss, model.trainable_weights)
        optimizer.apply_gradients(zip(grads, model.trainable_weights))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>    num_aggregation_labels=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    use_answer_as_supervision=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    answer_loss_cutoff=<span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>    cell_selection_preference=<span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>    huber_loss_delta=<span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>    init_cell_selection_weights_to_zero=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    select_one_column=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    allow_empty_column_selection=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = tf.keras.optimizers.Adam(learning_rate=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs;</span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-number">4</span>]
<span class="hljs-meta">... </span>        labels = batch[-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-number">2</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-number">3</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-number">6</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">with</span> tf.GradientTape() <span class="hljs-keyword">as</span> tape:
<span class="hljs-meta">... </span>            outputs = model(
<span class="hljs-meta">... </span>                input_ids=input_ids,
<span class="hljs-meta">... </span>                attention_mask=attention_mask,
<span class="hljs-meta">... </span>                token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>                labels=labels,
<span class="hljs-meta">... </span>                numeric_values=numeric_values,
<span class="hljs-meta">... </span>                numeric_values_scale=numeric_values_scale,
<span class="hljs-meta">... </span>                float_answer=float_answer,
<span class="hljs-meta">... </span>            )
<span class="hljs-meta">... </span>        grads = tape.gradient(outputs.loss, model.trainable_weights)
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}),{c(){l=o("p"),b=s("You can then fine-tune "),p=o("a"),u=s("TFTapasForQuestionAnswering"),T=s(" as follows (shown here for the weak supervision for aggregation case):"),d=c(),y(f.$$.fragment),this.h()},l(k){l=n(k,"P",{});var N=r(l);b=a(N,"You can then fine-tune "),p=n(N,"A",{href:!0});var x=r(p);u=a(x,"TFTapasForQuestionAnswering"),x.forEach(t),T=a(N," as follows (shown here for the weak supervision for aggregation case):"),N.forEach(t),d=h(k),q(f.$$.fragment,k),this.h()},h(){g(p,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(k,N){m(k,l,N),e(l,b),e(l,p),e(p,u),e(l,T),m(k,d,N),j(f,k,N),A=!0},p:ut,i(k){A||($(f.$$.fragment,k),A=!0)},o(k){E(f.$$.fragment,k),A=!1},d(k){k&&t(l),k&&t(d),F(f,k)}}}function $k(P){let l,b;return l=new Tn({props:{$$slots:{default:[jk]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(p){q(l.$$.fragment,p)},m(p,u){j(l,p,u),b=!0},p(p,u){const T={};u&2&&(T.$$scope={dirty:u,ctx:p}),l.$set(T)},i(p){b||($(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){F(l,p)}}}function Ek(P){let l,b,p,u,T,d,f,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H;return Q=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

model_name = "google/tapas-base-finetuned-wtq"
model = TapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
    inputs, outputs.logits.detach(), outputs.logits_aggregation.detach()
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3: "COUNT"}
aggregation_predictions_string = [id2aggregation[x] for x in predicted_aggregation_indices]

answers = []
for coordinates in predicted_answer_coordinates:
    if len(coordinates) == 1:
        # only a single cell:
        answers.append(table.iat[coordinates[0]])
    else:
        # multiple cells
        cell_values = []
        for coordinate in coordinates:
            cell_values.append(table.iat[coordinate])
        answers.append(", ".join(cell_values))

display(table)
print("")
for query, answer, predicted_agg in zip(queries, answers, aggregation_predictions_string):
    print(query)
    if predicted_agg == "NONE":
        print("Predicted answer: " + answer)
    else:
        print("Predicted answer: " + predicted_agg + " > " + answer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>    inputs, outputs.logits.detach(), outputs.logits_aggregation.detach()
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>: <span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>        answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>        cell_values = []
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>            cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>        answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=o("p"),b=s("Here we explain how you can use "),p=o("a"),u=s("TapasForQuestionAnswering"),T=s(" or "),d=o("a"),f=s("TFTapasForQuestionAnswering"),A=s(" for inference (i.e. making predictions on new data). For inference, only "),k=o("code"),N=s("input_ids"),x=s(", "),U=o("code"),B=s("attention_mask"),V=s(" and "),R=o("code"),K=s("token_type_ids"),re=s(" (which you can obtain using "),W=o("a"),L=s("TapasTokenizer"),w=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=o("code"),G=s("convert_logits_to_predictions"),C=s(" method to convert these into predicted coordinates and optional aggregation indices."),O=c(),ee=o("p"),te=s("However, note that inference is "),ce=o("strong"),oe=s("different"),se=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),S=c(),y(Q.$$.fragment),this.h()},l(X){l=n(X,"P",{});var I=r(l);b=a(I,"Here we explain how you can use "),p=n(I,"A",{href:!0});var Y=r(p);u=a(Y,"TapasForQuestionAnswering"),Y.forEach(t),T=a(I," or "),d=n(I,"A",{href:!0});var fe=r(d);f=a(fe,"TFTapasForQuestionAnswering"),fe.forEach(t),A=a(I," for inference (i.e. making predictions on new data). For inference, only "),k=n(I,"CODE",{});var ue=r(k);N=a(ue,"input_ids"),ue.forEach(t),x=a(I,", "),U=n(I,"CODE",{});var _e=r(U);B=a(_e,"attention_mask"),_e.forEach(t),V=a(I," and "),R=n(I,"CODE",{});var me=r(R);K=a(me,"token_type_ids"),me.forEach(t),re=a(I," (which you can obtain using "),W=n(I,"A",{href:!0});var ne=r(W);L=a(ne,"TapasTokenizer"),ne.forEach(t),w=a(I,") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=n(I,"CODE",{});var qe=r(M);G=a(qe,"convert_logits_to_predictions"),qe.forEach(t),C=a(I," method to convert these into predicted coordinates and optional aggregation indices."),I.forEach(t),O=h(X),ee=n(X,"P",{});var ie=r(ee);te=a(ie,"However, note that inference is "),ce=n(ie,"STRONG",{});var ve=r(ce);oe=a(ve,"different"),ve.forEach(t),se=a(ie," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ie.forEach(t),S=h(X),q(Q.$$.fragment,X),this.h()},h(){g(p,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),g(d,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),g(W,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer")},m(X,I){m(X,l,I),e(l,b),e(l,p),e(p,u),e(l,T),e(l,d),e(d,f),e(l,A),e(l,k),e(k,N),e(l,x),e(l,U),e(U,B),e(l,V),e(l,R),e(R,K),e(l,re),e(l,W),e(W,L),e(l,w),e(l,M),e(M,G),e(l,C),m(X,O,I),m(X,ee,I),e(ee,te),e(ee,ce),e(ce,oe),e(ee,se),m(X,S,I),j(Q,X,I),H=!0},p:ut,i(X){H||($(Q.$$.fragment,X),H=!0)},o(X){E(Q.$$.fragment,X),H=!1},d(X){X&&t(l),X&&t(O),X&&t(ee),X&&t(S),F(Q,X)}}}function Fk(P){let l,b;return l=new Tn({props:{$$slots:{default:[Ek]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(p){q(l.$$.fragment,p)},m(p,u){j(l,p,u),b=!0},p(p,u){const T={};u&2&&(T.$$scope={dirty:u,ctx:p}),l.$set(T)},i(p){b||($(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){F(l,p)}}}function Ak(P){let l,b,p,u,T,d,f,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se;return oe=new Ve({props:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
import pandas as pd

model_name = "google/tapas-base-finetuned-wtq"
model = TFTapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
    inputs, outputs.logits, outputs.logits_aggregation
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3: "COUNT"}
aggregation_predictions_string = [id2aggregation[x] for x in predicted_aggregation_indices]

answers = []
for coordinates in predicted_answer_coordinates:
    if len(coordinates) == 1:
        # only a single cell:
        answers.append(table.iat[coordinates[0]])
    else:
        # multiple cells
        cell_values = []
        for coordinate in coordinates:
            cell_values.append(table.iat[coordinate])
        answers.append(", ".join(cell_values))

display(table)
print("")
for query, answer, predicted_agg in zip(queries, answers, aggregation_predictions_string):
    print(query)
    if predicted_agg == "NONE":
        print("Predicted answer: " + answer)
    else:
        print("Predicted answer: " + predicted_agg + " > " + answer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>    inputs, outputs.logits, outputs.logits_aggregation
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>: <span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>        answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>        cell_values = []
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>            cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>        answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=o("p"),b=s("Here we explain how you can use "),p=o("a"),u=s("TFTapasForQuestionAnswering"),T=s(" for inference (i.e. making predictions on new data). For inference, only "),d=o("code"),f=s("input_ids"),A=s(", "),k=o("code"),N=s("attention_mask"),x=s(" and "),U=o("code"),B=s("token_type_ids"),V=s(" (which you can obtain using "),R=o("a"),K=s("TapasTokenizer"),re=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),W=o("code"),L=s("convert_logits_to_predictions"),w=s(" method to convert these into predicted coordinates and optional aggregation indices."),M=c(),G=o("p"),C=s("However, note that inference is "),O=o("strong"),ee=s("different"),te=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ce=c(),y(oe.$$.fragment),this.h()},l(S){l=n(S,"P",{});var Q=r(l);b=a(Q,"Here we explain how you can use "),p=n(Q,"A",{href:!0});var H=r(p);u=a(H,"TFTapasForQuestionAnswering"),H.forEach(t),T=a(Q," for inference (i.e. making predictions on new data). For inference, only "),d=n(Q,"CODE",{});var X=r(d);f=a(X,"input_ids"),X.forEach(t),A=a(Q,", "),k=n(Q,"CODE",{});var I=r(k);N=a(I,"attention_mask"),I.forEach(t),x=a(Q," and "),U=n(Q,"CODE",{});var Y=r(U);B=a(Y,"token_type_ids"),Y.forEach(t),V=a(Q," (which you can obtain using "),R=n(Q,"A",{href:!0});var fe=r(R);K=a(fe,"TapasTokenizer"),fe.forEach(t),re=a(Q,") have to be provided to the model to obtain the logits. Next, you can use the handy "),W=n(Q,"CODE",{});var ue=r(W);L=a(ue,"convert_logits_to_predictions"),ue.forEach(t),w=a(Q," method to convert these into predicted coordinates and optional aggregation indices."),Q.forEach(t),M=h(S),G=n(S,"P",{});var _e=r(G);C=a(_e,"However, note that inference is "),O=n(_e,"STRONG",{});var me=r(O);ee=a(me,"different"),me.forEach(t),te=a(_e," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),_e.forEach(t),ce=h(S),q(oe.$$.fragment,S),this.h()},h(){g(p,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),g(R,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer")},m(S,Q){m(S,l,Q),e(l,b),e(l,p),e(p,u),e(l,T),e(l,d),e(d,f),e(l,A),e(l,k),e(k,N),e(l,x),e(l,U),e(U,B),e(l,V),e(l,R),e(R,K),e(l,re),e(l,W),e(W,L),e(l,w),m(S,M,Q),m(S,G,Q),e(G,C),e(G,O),e(O,ee),e(G,te),m(S,ce,Q),j(oe,S,Q),se=!0},p:ut,i(S){se||($(oe.$$.fragment,S),se=!0)},o(S){E(oe.$$.fragment,S),se=!1},d(S){S&&t(l),S&&t(M),S&&t(G),S&&t(ce),F(oe,S)}}}function xk(P){let l,b;return l=new Tn({props:{$$slots:{default:[Ak]},$$scope:{ctx:P}}}),{c(){y(l.$$.fragment)},l(p){q(l.$$.fragment,p)},m(p,u){j(l,p,u),b=!0},p(p,u){const T={};u&2&&(T.$$scope={dirty:u,ctx:p}),l.$set(T)},i(p){b||($(l.$$.fragment,p),b=!0)},o(p){E(l.$$.fragment,p),b=!1},d(p){F(l,p)}}}function zk(P){let l,b,p,u,T;return u=new Ve({props:{code:`from transformers import TapasModel, TapasConfig

# Initializing a default (SQA) Tapas configuration
configuration = TapasConfig()
# Initializing a model from the configuration
model = TapasModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasModel, TapasConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a default (SQA) Tapas configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TapasConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=o("p"),b=s("Example:"),p=c(),y(u.$$.fragment)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Example:"),f.forEach(t),p=h(d),q(u.$$.fragment,d)},m(d,f){m(d,l,f),e(l,b),m(d,p,f),j(u,d,f),T=!0},p:ut,i(d){T||($(u.$$.fragment,d),T=!0)},o(d){E(u.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(p),F(u,d)}}}function Ck(P){let l,b,p,u,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=o("code"),u=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(f,"CODE",{});var A=r(p);u=a(A,"Module"),A.forEach(t),T=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(d){d&&t(l)}}}function Mk(P){let l,b,p,u,T;return u=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasModel.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=o("p"),b=s("Examples:"),p=c(),y(u.$$.fragment)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Examples:"),f.forEach(t),p=h(d),q(u.$$.fragment,d)},m(d,f){m(d,l,f),e(l,b),m(d,p,f),j(u,d,f),T=!0},p:ut,i(d){T||($(u.$$.fragment,d),T=!0)},o(d){E(u.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(p),F(u,d)}}}function Pk(P){let l,b,p,u,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=o("code"),u=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(f,"CODE",{});var A=r(p);u=a(A,"Module"),A.forEach(t),T=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(d){d&&t(l)}}}function Sk(P){let l,b,p,u,T;return u=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasForMaskedLM.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)

inputs = tokenizer(
    table=table, queries="How many [MASK] has George [MASK] played in?", return_tensors="pt"
)
labels = tokenizer(
    table=table, queries="How many movies has George Clooney played in?", return_tensors="pt"
)["input_ids"]

outputs = model(**inputs, labels=labels)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many [MASK] has George [MASK] played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=o("p"),b=s("Examples:"),p=c(),y(u.$$.fragment)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Examples:"),f.forEach(t),p=h(d),q(u.$$.fragment,d)},m(d,f){m(d,l,f),e(l,b),m(d,p,f),j(u,d,f),T=!0},p:ut,i(d){T||($(u.$$.fragment,d),T=!0)},o(d){E(u.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(p),F(u,d)}}}function Dk(P){let l,b,p,u,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=o("code"),u=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(f,"CODE",{});var A=r(p);u=a(A,"Module"),A.forEach(t),T=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(d){d&&t(l)}}}function Nk(P){let l,b,p,u,T;return u=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
import torch
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-tabfact")
model = TapasForSequenceClassification.from_pretrained("google/tapas-base-finetuned-tabfact")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = [
    "There is only one actor who is 45 years old",
    "There are 3 actors which played in more than 60 movies",
]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
labels = torch.tensor([1, 0])  # 1 means entailed, 0 means refuted

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There is only one actor who is 45 years old&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There are 3 actors which played in more than 60 movies&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>])  <span class="hljs-comment"># 1 means entailed, 0 means refuted</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=o("p"),b=s("Examples:"),p=c(),y(u.$$.fragment)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Examples:"),f.forEach(t),p=h(d),q(u.$$.fragment,d)},m(d,f){m(d,l,f),e(l,b),m(d,p,f),j(u,d,f),T=!0},p:ut,i(d){T||($(u.$$.fragment,d),T=!0)},o(d){E(u.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(p),F(u,d)}}}function Ok(P){let l,b,p,u,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=o("code"),u=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(f,"CODE",{});var A=r(p);u=a(A,"Module"),A.forEach(t),T=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(d){d&&t(l)}}}function Lk(P){let l,b,p,u,T;return u=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base-finetuned-wtq")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
logits_aggregation = outputs.logits_aggregation`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){l=o("p"),b=s("Examples:"),p=c(),y(u.$$.fragment)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Examples:"),f.forEach(t),p=h(d),q(u.$$.fragment,d)},m(d,f){m(d,l,f),e(l,b),m(d,p,f),j(u,d,f),T=!0},p:ut,i(d){T||($(u.$$.fragment,d),T=!0)},o(d){E(u.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(p),F(u,d)}}}function Qk(P){let l,b,p,u,T,d,f,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,fe,ue,_e,me,ne,qe,ie,ve;return{c(){l=o("p"),b=s("TF 2.0 models accepts two formats as inputs:"),p=c(),u=o("ul"),T=o("li"),d=s("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),A=o("li"),k=s("having all inputs as a list, tuple or dict in the first positional arguments."),N=c(),x=o("p"),U=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),W=s("."),L=c(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),C=o("ul"),O=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),S=s("model(inputs_ids)"),Q=c(),H=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),Y=s("model([input_ids, attention_mask])"),fe=s(" or "),ue=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=c(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=n(v,"P",{});var D=r(l);b=a(D,"TF 2.0 models accepts two formats as inputs:"),D.forEach(t),p=h(v),u=n(v,"UL",{});var be=r(u);T=n(be,"LI",{});var xe=r(T);d=a(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),f=h(be),A=n(be,"LI",{});var we=r(A);k=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),N=h(v),x=n(v,"P",{});var le=r(x);U=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var ze=r(B);V=a(ze,"tf.keras.Model.fit"),ze.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),W=a(le,"."),le.forEach(t),L=h(v),w=n(v,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=h(v),C=n(v,"UL",{});var pe=r(C);O=n(pe,"LI",{});var de=r(O);ee=a(de,"a single Tensor with "),te=n(de,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(de," only and nothing else: "),se=n(de,"CODE",{});var je=r(se);S=a(je,"model(inputs_ids)"),je.forEach(t),de.forEach(t),Q=h(pe),H=n(pe,"LI",{});var Te=r(H);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Te,"CODE",{});var Ne=r(I);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe=a(Te," or "),ue=n(Te,"CODE",{});var ke=r(ue);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Te.forEach(t),me=h(pe),ne=n(pe,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),pe.forEach(t)},m(v,D){m(v,l,D),e(l,b),m(v,p,D),m(v,u,D),e(u,T),e(T,d),e(u,f),e(u,A),e(A,k),m(v,N,D),m(v,x,D),e(x,U),e(x,B),e(B,V),e(x,R),e(x,K),e(K,re),e(x,W),m(v,L,D),m(v,w,D),e(w,M),m(v,G,D),m(v,C,D),e(C,O),e(O,ee),e(O,te),e(te,ce),e(O,oe),e(O,se),e(se,S),e(C,Q),e(C,H),e(H,X),e(H,I),e(I,Y),e(H,fe),e(H,ue),e(ue,_e),e(C,me),e(C,ne),e(ne,qe),e(ne,ie),e(ie,ve)},d(v){v&&t(l),v&&t(p),v&&t(u),v&&t(N),v&&t(x),v&&t(L),v&&t(w),v&&t(G),v&&t(C)}}}function Ik(P){let l,b,p,u,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=o("code"),u=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(f,"CODE",{});var A=r(p);u=a(A,"Module"),A.forEach(t),T=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(d){d&&t(l)}}}function Wk(P){let l,b,p,u,T;return u=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasModel.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=o("p"),b=s("Examples:"),p=c(),y(u.$$.fragment)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Examples:"),f.forEach(t),p=h(d),q(u.$$.fragment,d)},m(d,f){m(d,l,f),e(l,b),m(d,p,f),j(u,d,f),T=!0},p:ut,i(d){T||($(u.$$.fragment,d),T=!0)},o(d){E(u.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(p),F(u,d)}}}function Hk(P){let l,b,p,u,T,d,f,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,fe,ue,_e,me,ne,qe,ie,ve;return{c(){l=o("p"),b=s("TF 2.0 models accepts two formats as inputs:"),p=c(),u=o("ul"),T=o("li"),d=s("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),A=o("li"),k=s("having all inputs as a list, tuple or dict in the first positional arguments."),N=c(),x=o("p"),U=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),W=s("."),L=c(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),C=o("ul"),O=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),S=s("model(inputs_ids)"),Q=c(),H=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),Y=s("model([input_ids, attention_mask])"),fe=s(" or "),ue=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=c(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=n(v,"P",{});var D=r(l);b=a(D,"TF 2.0 models accepts two formats as inputs:"),D.forEach(t),p=h(v),u=n(v,"UL",{});var be=r(u);T=n(be,"LI",{});var xe=r(T);d=a(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),f=h(be),A=n(be,"LI",{});var we=r(A);k=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),N=h(v),x=n(v,"P",{});var le=r(x);U=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var ze=r(B);V=a(ze,"tf.keras.Model.fit"),ze.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),W=a(le,"."),le.forEach(t),L=h(v),w=n(v,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=h(v),C=n(v,"UL",{});var pe=r(C);O=n(pe,"LI",{});var de=r(O);ee=a(de,"a single Tensor with "),te=n(de,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(de," only and nothing else: "),se=n(de,"CODE",{});var je=r(se);S=a(je,"model(inputs_ids)"),je.forEach(t),de.forEach(t),Q=h(pe),H=n(pe,"LI",{});var Te=r(H);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Te,"CODE",{});var Ne=r(I);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe=a(Te," or "),ue=n(Te,"CODE",{});var ke=r(ue);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Te.forEach(t),me=h(pe),ne=n(pe,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),pe.forEach(t)},m(v,D){m(v,l,D),e(l,b),m(v,p,D),m(v,u,D),e(u,T),e(T,d),e(u,f),e(u,A),e(A,k),m(v,N,D),m(v,x,D),e(x,U),e(x,B),e(B,V),e(x,R),e(x,K),e(K,re),e(x,W),m(v,L,D),m(v,w,D),e(w,M),m(v,G,D),m(v,C,D),e(C,O),e(O,ee),e(O,te),e(te,ce),e(O,oe),e(O,se),e(se,S),e(C,Q),e(C,H),e(H,X),e(H,I),e(I,Y),e(H,fe),e(H,ue),e(ue,_e),e(C,me),e(C,ne),e(ne,qe),e(ne,ie),e(ie,ve)},d(v){v&&t(l),v&&t(p),v&&t(u),v&&t(N),v&&t(x),v&&t(L),v&&t(w),v&&t(G),v&&t(C)}}}function Uk(P){let l,b,p,u,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=o("code"),u=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(f,"CODE",{});var A=r(p);u=a(A,"Module"),A.forEach(t),T=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(d){d&&t(l)}}}function Rk(P){let l,b,p,u,T;return u=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasForMaskedLM.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)

inputs = tokenizer(
    table=table, queries="How many [MASK] has George [MASK] played in?", return_tensors="tf"
)
labels = tokenizer(
    table=table, queries="How many movies has George Clooney played in?", return_tensors="tf"
)["input_ids"]

outputs = model(**inputs, labels=labels)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many [MASK] has George [MASK] played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=o("p"),b=s("Examples:"),p=c(),y(u.$$.fragment)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Examples:"),f.forEach(t),p=h(d),q(u.$$.fragment,d)},m(d,f){m(d,l,f),e(l,b),m(d,p,f),j(u,d,f),T=!0},p:ut,i(d){T||($(u.$$.fragment,d),T=!0)},o(d){E(u.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(p),F(u,d)}}}function Gk(P){let l,b,p,u,T,d,f,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,fe,ue,_e,me,ne,qe,ie,ve;return{c(){l=o("p"),b=s("TF 2.0 models accepts two formats as inputs:"),p=c(),u=o("ul"),T=o("li"),d=s("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),A=o("li"),k=s("having all inputs as a list, tuple or dict in the first positional arguments."),N=c(),x=o("p"),U=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),W=s("."),L=c(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),C=o("ul"),O=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),S=s("model(inputs_ids)"),Q=c(),H=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),Y=s("model([input_ids, attention_mask])"),fe=s(" or "),ue=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=c(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=n(v,"P",{});var D=r(l);b=a(D,"TF 2.0 models accepts two formats as inputs:"),D.forEach(t),p=h(v),u=n(v,"UL",{});var be=r(u);T=n(be,"LI",{});var xe=r(T);d=a(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),f=h(be),A=n(be,"LI",{});var we=r(A);k=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),N=h(v),x=n(v,"P",{});var le=r(x);U=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var ze=r(B);V=a(ze,"tf.keras.Model.fit"),ze.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),W=a(le,"."),le.forEach(t),L=h(v),w=n(v,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=h(v),C=n(v,"UL",{});var pe=r(C);O=n(pe,"LI",{});var de=r(O);ee=a(de,"a single Tensor with "),te=n(de,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(de," only and nothing else: "),se=n(de,"CODE",{});var je=r(se);S=a(je,"model(inputs_ids)"),je.forEach(t),de.forEach(t),Q=h(pe),H=n(pe,"LI",{});var Te=r(H);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Te,"CODE",{});var Ne=r(I);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe=a(Te," or "),ue=n(Te,"CODE",{});var ke=r(ue);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Te.forEach(t),me=h(pe),ne=n(pe,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),pe.forEach(t)},m(v,D){m(v,l,D),e(l,b),m(v,p,D),m(v,u,D),e(u,T),e(T,d),e(u,f),e(u,A),e(A,k),m(v,N,D),m(v,x,D),e(x,U),e(x,B),e(B,V),e(x,R),e(x,K),e(K,re),e(x,W),m(v,L,D),m(v,w,D),e(w,M),m(v,G,D),m(v,C,D),e(C,O),e(O,ee),e(O,te),e(te,ce),e(O,oe),e(O,se),e(se,S),e(C,Q),e(C,H),e(H,X),e(H,I),e(I,Y),e(H,fe),e(H,ue),e(ue,_e),e(C,me),e(C,ne),e(ne,qe),e(ne,ie),e(ie,ve)},d(v){v&&t(l),v&&t(p),v&&t(u),v&&t(N),v&&t(x),v&&t(L),v&&t(w),v&&t(G),v&&t(C)}}}function Bk(P){let l,b,p,u,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=o("code"),u=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(f,"CODE",{});var A=r(p);u=a(A,"Module"),A.forEach(t),T=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(d){d&&t(l)}}}function Vk(P){let l,b,p,u,T;return u=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
import tensorflow as tf
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-tabfact")
model = TapasForSequenceClassification.from_pretrained("google/tapas-base-finetuned-tabfact")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = [
    "There is only one actor who is 45 years old",
    "There are 3 actors which played in more than 60 movies",
]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
labels = tf.convert_to_tensor([1, 0])  # 1 means entailed, 0 means refuted

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There is only one actor who is 45 years old&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There are 3 actors which played in more than 60 movies&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.convert_to_tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>])  <span class="hljs-comment"># 1 means entailed, 0 means refuted</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=o("p"),b=s("Examples:"),p=c(),y(u.$$.fragment)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Examples:"),f.forEach(t),p=h(d),q(u.$$.fragment,d)},m(d,f){m(d,l,f),e(l,b),m(d,p,f),j(u,d,f),T=!0},p:ut,i(d){T||($(u.$$.fragment,d),T=!0)},o(d){E(u.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(p),F(u,d)}}}function Kk(P){let l,b,p,u,T,d,f,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,fe,ue,_e,me,ne,qe,ie,ve;return{c(){l=o("p"),b=s("TF 2.0 models accepts two formats as inputs:"),p=c(),u=o("ul"),T=o("li"),d=s("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),A=o("li"),k=s("having all inputs as a list, tuple or dict in the first positional arguments."),N=c(),x=o("p"),U=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),W=s("."),L=c(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=c(),C=o("ul"),O=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),S=s("model(inputs_ids)"),Q=c(),H=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=o("code"),Y=s("model([input_ids, attention_mask])"),fe=s(" or "),ue=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=c(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){l=n(v,"P",{});var D=r(l);b=a(D,"TF 2.0 models accepts two formats as inputs:"),D.forEach(t),p=h(v),u=n(v,"UL",{});var be=r(u);T=n(be,"LI",{});var xe=r(T);d=a(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),f=h(be),A=n(be,"LI",{});var we=r(A);k=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),N=h(v),x=n(v,"P",{});var le=r(x);U=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var ze=r(B);V=a(ze,"tf.keras.Model.fit"),ze.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),W=a(le,"."),le.forEach(t),L=h(v),w=n(v,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=h(v),C=n(v,"UL",{});var pe=r(C);O=n(pe,"LI",{});var de=r(O);ee=a(de,"a single Tensor with "),te=n(de,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(de," only and nothing else: "),se=n(de,"CODE",{});var je=r(se);S=a(je,"model(inputs_ids)"),je.forEach(t),de.forEach(t),Q=h(pe),H=n(pe,"LI",{});var Te=r(H);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=n(Te,"CODE",{});var Ne=r(I);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe=a(Te," or "),ue=n(Te,"CODE",{});var ke=r(ue);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Te.forEach(t),me=h(pe),ne=n(pe,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),pe.forEach(t)},m(v,D){m(v,l,D),e(l,b),m(v,p,D),m(v,u,D),e(u,T),e(T,d),e(u,f),e(u,A),e(A,k),m(v,N,D),m(v,x,D),e(x,U),e(x,B),e(B,V),e(x,R),e(x,K),e(K,re),e(x,W),m(v,L,D),m(v,w,D),e(w,M),m(v,G,D),m(v,C,D),e(C,O),e(O,ee),e(O,te),e(te,ce),e(O,oe),e(O,se),e(se,S),e(C,Q),e(C,H),e(H,X),e(H,I),e(I,Y),e(H,fe),e(H,ue),e(ue,_e),e(C,me),e(C,ne),e(ne,qe),e(ne,ie),e(ie,ve)},d(v){v&&t(l),v&&t(p),v&&t(u),v&&t(N),v&&t(x),v&&t(L),v&&t(w),v&&t(G),v&&t(C)}}}function Yk(P){let l,b,p,u,T;return{c(){l=o("p"),b=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=o("code"),u=s("Module"),T=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n(f,"CODE",{});var A=r(p);u=a(A,"Module"),A.forEach(t),T=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){m(d,l,f),e(l,b),e(l,p),e(p,u),e(l,T)},d(d){d&&t(l)}}}function Jk(P){let l,b,p,u,T;return u=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base-finetuned-wtq")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)

logits = outputs.logits
logits_aggregation = outputs.logits_aggregation`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){l=o("p"),b=s("Examples:"),p=c(),y(u.$$.fragment)},l(d){l=n(d,"P",{});var f=r(l);b=a(f,"Examples:"),f.forEach(t),p=h(d),q(u.$$.fragment,d)},m(d,f){m(d,l,f),e(l,b),m(d,p,f),j(u,d,f),T=!0},p:ut,i(d){T||($(u.$$.fragment,d),T=!0)},o(d){E(u.$$.fragment,d),T=!1},d(d){d&&t(l),d&&t(p),F(u,d)}}}function Xk(P){let l,b,p,u,T,d,f,A,k,N,x,U,B,V,R,K,re,W,L,w,M,G,C,O,ee,te,ce,oe,se,S,Q,H,X,I,Y,fe,ue,_e,me,ne,qe,ie,ve,v,D,be,xe,we,le,ze,Me,Z,pe,de,De,je,Te,Ne,ke,Ae,Oe,Ze,Ss,Ds,mt,gt,ha,ft,_t,Ns,tt,Os,Ls,Ke,Pe,Qs,kt,ye,yt,qt,Is,jt,$t,Ws,Et,hs,Gt,Ft,us,Ye,$e,Hs,At,ae,ot,Bt,Us,xt,Yt,Rs,zt,Ct,Gs,Mt,Jt,Bs,Pt,Xt,Vs,St,Ks,Le,Dt,Zt,Ys,Nt,es,Js,ts,Ue,ss,Ee,as,nt,Xs,Ot,Lt,Zs,ea,Re,ta,os,ns,et,Qt,z,J,qa,sa,ja,ua,It,st,aa,rt,$a,oa,Ea,ma,Ie,rs,ms,Ge,Fa,ga,gs,na,is,fa,ge,Aa,fs,xa,za,_a,Tt,ra,ls,Ca,Fe,Ma,ia,Pa,Sa,Da,he,Na,la,Oa,La,Ta,_s,Qa,ba,Ce,pa,Wt,da,Ji,Mc,Pc,Xi,Zi,Sc,Dc,el,tl,Nc,Oc,Ia,Wa,sl,Lc,Qc,al,Ic,Wc,ol,Hc,Uc,Ha,nl,Rc,Gc,rl,Bc,Vc,il,Kc,Yc,Ua,ll,Jc,Xc,pl,Zc,eh,dl,th,sd,To,ad,bo,sh,bn,ah,oh,od,vo,nh,vn,rh,ih,nd,Ur,cl,lh,rd,wo,ph,wn,dh,ch,id,We,Rr,hl,hh,uh,mh,Gr,ul,gh,fh,_h,Br,ml,Th,bh,vh,Vr,gl,wh,kh,yh,Kr,fl,qh,jh,$h,Yr,_l,Eh,Fh,Ah,Jr,Tl,xh,zh,Ch,Xr,bl,Mh,Ph,Sh,Zr,vl,Dh,Nh,ld,bt,Oh,kn,Lh,Qh,yn,Ih,Wh,wl,Hh,Uh,kl,Rh,Gh,yl,Bh,Vh,pd,ei,ql,Kh,dd,ko,cd,Se,Yh,jl,Jh,Xh,$l,Zh,eu,El,tu,su,Fl,au,ou,Al,nu,ru,xl,iu,lu,ti,pu,du,qn,cu,hu,jn,uu,mu,hd,si,gu,ud,yo,md,Ra,qo,zl,$n,fu,Cl,_u,gd,jo,fd,vt,Tu,Ml,bu,vu,Pl,wu,ku,Sl,yu,qu,En,ju,$u,Fn,Eu,Fu,_d,Ga,$o,Dl,An,Au,Nl,xu,Td,Ba,xn,zu,zn,Cu,ai,Mu,Pu,bd,Va,Eo,Ol,Cn,Su,Ll,Du,vd,ps,Mn,Nu,ds,Ou,oi,Lu,Qu,Ql,Iu,Wu,Il,Hu,Uu,ni,Ru,Gu,Bu,Pn,Vu,Sn,Ku,Yu,Ju,Fo,wd,Ka,Ao,Wl,Dn,Xu,Hl,Zu,kd,Be,Nn,em,Ul,tm,sm,Qe,am,ri,om,nm,ii,rm,im,Rl,lm,pm,Gl,dm,cm,Bl,hm,um,Vl,mm,gm,Kl,fm,_m,Yl,Tm,bm,Jl,vm,wm,km,it,Xl,ym,qm,Zl,jm,$m,ep,Em,Fm,tp,Am,xm,sp,zm,Cm,ap,Mm,Pm,op,Sm,Dm,li,pi,Nm,Om,Lm,xo,On,Qm,np,Im,Wm,va,Ln,Hm,Qn,Um,di,Rm,Gm,Bm,In,Vm,Wn,Km,Ym,Jm,ci,Hn,yd,Ya,zo,rp,Un,Xm,ip,Zm,qd,lt,Rn,eg,Gn,tg,hi,sg,ag,og,Bn,ng,Vn,rg,ig,lg,Kn,pg,ui,dg,cg,hg,Yn,ug,Jn,mg,gg,fg,Ts,Xn,_g,Ja,Tg,mi,bg,vg,lp,wg,kg,yg,Co,qg,Mo,jd,Xa,Po,pp,Zn,jg,dp,$g,$d,cs,er,Eg,Za,Fg,cp,Ag,xg,gi,zg,Cg,Mg,tr,Pg,sr,Sg,Dg,Ng,bs,ar,Og,eo,Lg,fi,Qg,Ig,hp,Wg,Hg,Ug,So,Rg,Do,Ed,to,No,up,or,Gg,mp,Bg,Fd,Ht,nr,Vg,gp,Kg,Yg,rr,Jg,_i,Xg,Zg,ef,ir,tf,lr,sf,af,of,vs,pr,nf,so,rf,Ti,lf,pf,fp,df,cf,hf,Oo,uf,Lo,Ad,ao,Qo,_p,dr,mf,Tp,gf,xd,Ut,cr,ff,oo,_f,bp,Tf,bf,vp,vf,wf,kf,hr,yf,bi,qf,jf,$f,ur,Ef,mr,Ff,Af,xf,ws,gr,zf,no,Cf,vi,Mf,Pf,wp,Sf,Df,Nf,Io,Of,Wo,zd,ro,Ho,kp,fr,Lf,yp,Qf,Cd,pt,_r,If,qp,Wf,Hf,Tr,Uf,wi,Rf,Gf,Bf,br,Vf,vr,Kf,Yf,Jf,Uo,Xf,ks,wr,Zf,io,e_,ki,t_,s_,jp,a_,o_,n_,Ro,r_,Go,Md,lo,Bo,$p,kr,i_,Ep,l_,Pd,dt,yr,p_,qr,d_,Fp,c_,h_,u_,jr,m_,yi,g_,f_,__,$r,T_,Er,b_,v_,w_,Vo,k_,ys,Fr,y_,po,q_,qi,j_,$_,Ap,E_,F_,A_,Ko,x_,Yo,Sd,co,Jo,xp,Ar,z_,zp,C_,Dd,ct,xr,M_,Cp,P_,S_,zr,D_,ji,N_,O_,L_,Cr,Q_,Mr,I_,W_,H_,Xo,U_,qs,Pr,R_,ho,G_,$i,B_,V_,Mp,K_,Y_,J_,Zo,X_,en,Nd,uo,tn,Pp,Sr,Z_,Sp,eT,Od,ht,Dr,tT,mo,sT,Dp,aT,oT,Np,nT,rT,iT,Nr,lT,Ei,pT,dT,cT,Or,hT,Lr,uT,mT,gT,sn,fT,js,Qr,_T,go,TT,Fi,bT,vT,Op,wT,kT,yT,an,qT,on,Ld;return d=new Rt({}),V=new Rt({}),rt=new Rt({}),To=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Tk],pytorch:[fk]},$$scope:{ctx:P}}}),ko=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[kk],pytorch:[vk]},$$scope:{ctx:P}}}),yo=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[$k],pytorch:[qk]},$$scope:{ctx:P}}}),$n=new Rt({}),jo=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[xk],pytorch:[Fk]},$$scope:{ctx:P}}}),An=new Rt({}),xn=new He({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tapas.py#L106"}}),Cn=new Rt({}),Mn=new He({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the TAPAS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"vocab_size"},{anchor:"transformers.TapasConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.TapasConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.TapasConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.TapasConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.TapasConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;swish&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.TapasConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.TapasConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.TapasConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.TapasConfig.type_vocab_sizes",description:`<strong>type_vocab_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 256, 256, 2, 256, 256, 10]</code>) &#x2014;
The vocabulary sizes of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"type_vocab_sizes"},{anchor:"transformers.TapasConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.TapasConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.TapasConfig.positive_label_weight",description:`<strong>positive_label_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 10.0) &#x2014;
Weight for positive labels.`,name:"positive_label_weight"},{anchor:"transformers.TapasConfig.num_aggregation_labels",description:`<strong>num_aggregation_labels</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of aggregation operators to predict.`,name:"num_aggregation_labels"},{anchor:"transformers.TapasConfig.aggregation_loss_weight",description:`<strong>aggregation_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Importance weight for the aggregation loss.`,name:"aggregation_loss_weight"},{anchor:"transformers.TapasConfig.use_answer_as_supervision",description:`<strong>use_answer_as_supervision</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to use the answer as the only supervision for aggregation examples.`,name:"use_answer_as_supervision"},{anchor:"transformers.TapasConfig.answer_loss_importance",description:`<strong>answer_loss_importance</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Importance weight for the regression loss.`,name:"answer_loss_importance"},{anchor:"transformers.TapasConfig.use_normalized_answer_loss",description:`<strong>use_normalized_answer_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to normalize the answer loss by the maximum of the predicted and expected value.`,name:"use_normalized_answer_loss"},{anchor:"transformers.TapasConfig.huber_loss_delta",description:`<strong>huber_loss_delta</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Delta parameter used to calculate the regression loss.`,name:"huber_loss_delta"},{anchor:"transformers.TapasConfig.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Value used to control (OR change) the skewness of cell logits probabilities.`,name:"temperature"},{anchor:"transformers.TapasConfig.aggregation_temperature",description:`<strong>aggregation_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Scales aggregation logits to control the skewness of probabilities.`,name:"aggregation_temperature"},{anchor:"transformers.TapasConfig.use_gumbel_for_cells",description:`<strong>use_gumbel_for_cells</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply Gumbel-Softmax to cell selection.`,name:"use_gumbel_for_cells"},{anchor:"transformers.TapasConfig.use_gumbel_for_aggregation",description:`<strong>use_gumbel_for_aggregation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply Gumbel-Softmax to aggregation selection.`,name:"use_gumbel_for_aggregation"},{anchor:"transformers.TapasConfig.average_approximation_function",description:`<strong>average_approximation_function</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;ratio&quot;</code>) &#x2014;
Method to calculate the expected average of cells in the weak supervision case. One of <code>&quot;ratio&quot;</code>,
<code>&quot;first_order&quot;</code> or <code>&quot;second_order&quot;</code>.`,name:"average_approximation_function"},{anchor:"transformers.TapasConfig.cell_selection_preference",description:`<strong>cell_selection_preference</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Preference for cell selection in ambiguous cases. Only applicable in case of weak supervision for
aggregation (WTQ, WikiSQL). If the total mass of the aggregation probabilities (excluding the &#x201C;NONE&#x201D;
operator) is higher than this hyperparameter, then aggregation is predicted for an example.`,name:"cell_selection_preference"},{anchor:"transformers.TapasConfig.answer_loss_cutoff",description:`<strong>answer_loss_cutoff</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Ignore examples with answer loss larger than cutoff.`,name:"answer_loss_cutoff"},{anchor:"transformers.TapasConfig.max_num_rows",description:`<strong>max_num_rows</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Maximum number of rows.`,name:"max_num_rows"},{anchor:"transformers.TapasConfig.max_num_columns",description:`<strong>max_num_columns</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Maximum number of columns.`,name:"max_num_columns"},{anchor:"transformers.TapasConfig.average_logits_per_cell",description:`<strong>average_logits_per_cell</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to average logits per cell.`,name:"average_logits_per_cell"},{anchor:"transformers.TapasConfig.select_one_column",description:`<strong>select_one_column</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to constrain the model to only select cells from a single column.`,name:"select_one_column"},{anchor:"transformers.TapasConfig.allow_empty_column_selection",description:`<strong>allow_empty_column_selection</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to allow not to select any column.`,name:"allow_empty_column_selection"},{anchor:"transformers.TapasConfig.init_cell_selection_weights_to_zero",description:`<strong>init_cell_selection_weights_to_zero</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to initialize cell selection weights to 0 so that the initial probabilities are 50%.`,name:"init_cell_selection_weights_to_zero"},{anchor:"transformers.TapasConfig.reset_position_index_per_cell",description:`<strong>reset_position_index_per_cell</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to restart position indexes at every cell (i.e. use relative position embeddings).`,name:"reset_position_index_per_cell"},{anchor:"transformers.TapasConfig.disable_per_token_loss",description:`<strong>disable_per_token_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to disable any (strong or weak) supervision on cells.`,name:"disable_per_token_loss"},{anchor:"transformers.TapasConfig.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>Dict[int, label]</code>, <em>optional</em>) &#x2014;
The aggregation labels used to aggregate the results. For example, the WTQ models have the following
aggregation labels: <code>{0: &quot;NONE&quot;, 1: &quot;SUM&quot;, 2: &quot;AVERAGE&quot;, 3: &quot;COUNT&quot;}</code>`,name:"aggregation_labels"},{anchor:"transformers.TapasConfig.no_aggregation_label_index",description:`<strong>no_aggregation_label_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If the aggregation labels are defined and one of these labels represents &#x201C;No aggregation&#x201D;, this should be
set to its index. For example, the WTQ models have the &#x201C;NONE&#x201D; aggregation label at index 0, so that value
should be set to 0 for these models.`,name:"no_aggregation_label_index"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/configuration_tapas.py#L37"}}),Fo=new _o({props:{anchor:"transformers.TapasConfig.example",$$slots:{default:[zk]},$$scope:{ctx:P}}}),Dn=new Rt({}),Nn=new He({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.TapasTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.TapasTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.TapasTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.TapasTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.TapasTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.TapasTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.TapasTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.TapasTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.TapasTokenizer.empty_token",description:`<strong>empty_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[EMPTY]&quot;</code>) &#x2014;
The token used for empty cell values in a table. Empty cell values include &quot;&quot;, &#x201C;n/a&#x201D;, &#x201C;nan&#x201D; and &#x201D;?&#x201C;.`,name:"empty_token"},{anchor:"transformers.TapasTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"},{anchor:"transformers.TapasTokenizer.cell_trim_length",description:`<strong>cell_trim_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
If &gt; 0: Trim cells so that the length is &lt;= this value. Also disables further cell trimming, should thus be
used with <code>truncation</code> set to <code>True</code>.`,name:"cell_trim_length"},{anchor:"transformers.TapasTokenizer.max_column_id",description:`<strong>max_column_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max column id to extract.`,name:"max_column_id"},{anchor:"transformers.TapasTokenizer.max_row_id",description:`<strong>max_row_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max row id to extract.`,name:"max_row_id"},{anchor:"transformers.TapasTokenizer.strip_column_names",description:`<strong>strip_column_names</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to add empty strings instead of column names.`,name:"strip_column_names"},{anchor:"transformers.TapasTokenizer.update_answer_coordinates",description:`<strong>update_answer_coordinates</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to recompute the answer coordinates from the answer text.`,name:"update_answer_coordinates"},{anchor:"transformers.TapasTokenizer.min_question_length",description:`<strong>min_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Minimum length of each question in terms of tokens (will be skipped otherwise).`,name:"min_question_length"},{anchor:"transformers.TapasTokenizer.max_question_length",description:`<strong>max_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/tokenization_tapas.py#L188"}}),On=new He({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
Table containing tabular data. Note that all cell values must be text. Use <em>.astype(str)</em> on a Pandas
dataframe to convert it to string.`,name:"table"},{anchor:"transformers.TapasTokenizer.__call__.queries",description:`<strong>queries</strong> (<code>str</code> or <code>List[str]</code>) &#x2014;
Question or batch of questions related to a table to be encoded. Note that in case of a batch, all
questions must refer to the <strong>same</strong> table.`,name:"queries"},{anchor:"transformers.TapasTokenizer.__call__.answer_coordinates",description:`<strong>answer_coordinates</strong> (<code>List[Tuple]</code> or <code>List[List[Tuple]]</code>, <em>optional</em>) &#x2014;
Answer coordinates of each table-question pair in the batch. In case only a single table-question pair
is provided, then the answer_coordinates must be a single list of one or more tuples. Each tuple must
be a (row_index, column_index) pair. The first data row (not the column header row) has index 0. The
first column has index 0. In case a batch of table-question pairs is provided, then the
answer_coordinates must be a list of lists of tuples (each list corresponding to a single
table-question pair).`,name:"answer_coordinates"},{anchor:"transformers.TapasTokenizer.__call__.answer_text",description:`<strong>answer_text</strong> (<code>List[str]</code> or <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
Answer text of each table-question pair in the batch. In case only a single table-question pair is
provided, then the answer_text must be a single list of one or more strings. Each string must be the
answer text of a corresponding answer coordinate. In case a batch of table-question pairs is provided,
then the answer_coordinates must be a list of lists of strings (each list corresponding to a single
table-question pair).`,name:"answer_text"},{anchor:"transformers.TapasTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapasTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.TapasTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <code>TapasTruncationStrategy</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;drop_rows_to_fit&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code>
or to the maximum acceptable input length for the model if that argument is not provided. This will
truncate row by row, removing rows from the table.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.TapasTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.TapasTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.TapasTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapasTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_highlight/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/tokenization_tapas.py#L528"}}),Ln=new He({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
Dictionary mapping features to actual values. Should be created using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.`,name:"data"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits",description:`<strong>logits</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Tensor containing the logits at the token level.`,name:"logits"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits_agg",description:`<strong>logits_agg</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_aggregation_labels)</code>, <em>optional</em>) &#x2014;
Tensor containing the aggregation logits.`,name:"logits_agg"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.cell_classification_threshold",description:`<strong>cell_classification_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to be used for cell selection. All table cells for which their probability is larger than
this threshold will be selected.`,name:"cell_classification_threshold"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/tokenization_tapas.py#L1890",returnDescription:`
<ul>
<li>predicted_answer_coordinates (<code>List[List[[tuple]]</code> of length <code>batch_size</code>): Predicted answer coordinates
as a list of lists of tuples. Each element in the list contains the predicted answer coordinates of a
single example in the batch, as a list of tuples. Each tuple is a cell, i.e. (row index, column index).</li>
<li>predicted_aggregation_indices (<code>List[int]</code>of length <code>batch_size</code>, <em>optional</em>, returned when
<code>logits_aggregation</code> is provided): Predicted aggregation operator indices of the aggregation head.</li>
</ul>
`,returnType:`
<p><code>tuple</code> comprising various elements depending on the inputs</p>
`}}),Hn=new He({props:{name:"save_vocabulary",anchor:"transformers.TapasTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/tokenization_tapas.py#L396"}}),Un=new Rt({}),Rn=new He({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tapas.py#L856"}}),Xn=new He({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tapas.py#L894",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new Ps({props:{$$slots:{default:[Ck]},$$scope:{ctx:P}}}),Mo=new _o({props:{anchor:"transformers.TapasModel.forward.example",$$slots:{default:[Mk]},$$scope:{ctx:P}}}),Zn=new Rt({}),er=new He({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tapas.py#L1009"}}),ar=new He({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tapas.py#L1028",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new Ps({props:{$$slots:{default:[Pk]},$$scope:{ctx:P}}}),Do=new _o({props:{anchor:"transformers.TapasForMaskedLM.forward.example",$$slots:{default:[Sk]},$$scope:{ctx:P}}}),or=new Rt({}),nr=new He({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tapas.py#L1468"}}),pr=new He({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tapas.py#L1480",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new Ps({props:{$$slots:{default:[Dk]},$$scope:{ctx:P}}}),Lo=new _o({props:{anchor:"transformers.TapasForSequenceClassification.forward.example",$$slots:{default:[Nk]},$$scope:{ctx:P}}}),dr=new Rt({}),cr=new He({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tapas.py#L1124"}}),gr=new He({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForQuestionAnswering.forward.table_mask",description:`<strong>table_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong supervision for
aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.float_answer",description:`<strong>float_answer</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values",description:`<strong>numeric_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tapas.py#L1159",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new Ps({props:{$$slots:{default:[Ok]},$$scope:{ctx:P}}}),Wo=new _o({props:{anchor:"transformers.TapasForQuestionAnswering.forward.example",$$slots:{default:[Lk]},$$scope:{ctx:P}}}),fr=new Rt({}),_r=new He({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tf_tapas.py#L962"}}),Uo=new Ps({props:{$$slots:{default:[Qk]},$$scope:{ctx:P}}}),wr=new He({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tf_tapas.py#L968",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ro=new Ps({props:{$$slots:{default:[Ik]},$$scope:{ctx:P}}}),Go=new _o({props:{anchor:"transformers.TFTapasModel.call.example",$$slots:{default:[Wk]},$$scope:{ctx:P}}}),kr=new Rt({}),yr=new He({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tf_tapas.py#L1038"}}),Vo=new Ps({props:{$$slots:{default:[Hk]},$$scope:{ctx:P}}}),Fr=new He({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tf_tapas.py#L1054",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ko=new Ps({props:{$$slots:{default:[Uk]},$$scope:{ctx:P}}}),Yo=new _o({props:{anchor:"transformers.TFTapasForMaskedLM.call.example",$$slots:{default:[Rk]},$$scope:{ctx:P}}}),Ar=new Rt({}),xr=new He({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tf_tapas.py#L1578"}}),Xo=new Ps({props:{$$slots:{default:[Gk]},$$scope:{ctx:P}}}),Pr=new He({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tf_tapas.py#L1589",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zo=new Ps({props:{$$slots:{default:[Bk]},$$scope:{ctx:P}}}),en=new _o({props:{anchor:"transformers.TFTapasForSequenceClassification.call.example",$$slots:{default:[Vk]},$$scope:{ctx:P}}}),Sr=new Rt({}),Dr=new He({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tf_tapas.py#L1245"}}),sn=new Ps({props:{$$slots:{default:[Kk]},$$scope:{ctx:P}}}),Qr=new He({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForQuestionAnswering.call.table_mask",description:`<strong>table_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong supervision for
aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.float_answer",description:`<strong>float_answer</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values",description:`<strong>numeric_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/models/tapas/modeling_tf_tapas.py#L1267",returnDescription:`
<p>A <code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>tf.Tensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),an=new Ps({props:{$$slots:{default:[Yk]},$$scope:{ctx:P}}}),on=new _o({props:{anchor:"transformers.TFTapasForQuestionAnswering.call.example",$$slots:{default:[Jk]},$$scope:{ctx:P}}}),{c(){l=o("meta"),b=c(),p=o("h1"),u=o("a"),T=o("span"),y(d.$$.fragment),f=c(),A=o("span"),k=s("TAPAS"),N=c(),x=o("h2"),U=o("a"),B=o("span"),y(V.$$.fragment),R=c(),K=o("span"),re=s("Overview"),W=c(),L=o("p"),w=s("The TAPAS model was proposed in "),M=o("a"),G=s("TAPAS: Weakly Supervised Table Parsing via Pre-training"),C=s(`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),O=c(),ee=o("p"),te=s("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),ce=c(),oe=o("ul"),se=o("li"),S=o("a"),Q=s("SQA"),H=s(" (Sequential Question Answering by Microsoft)"),X=c(),I=o("li"),Y=o("a"),fe=s("WTQ"),ue=s(" (Wiki Table Questions by Stanford University)"),_e=c(),me=o("li"),ne=o("a"),qe=s("WikiSQL"),ie=s(" (by Salesforce)."),ve=c(),v=o("p"),D=s("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),be=c(),xe=o("p"),we=s("The abstract from the paper is the following:"),le=c(),ze=o("p"),Me=o("em"),Z=s("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),pe=c(),de=o("p"),De=s("In addition, the authors have further pre-trained TAPAS to recognize "),je=o("strong"),Te=s("table entailment"),Ne=s(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ke=o("a"),Ae=s("TabFact"),Oe=s(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=o("a"),Ss=s("Understanding tables with intermediate pre-training"),Ds=s(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),mt=c(),gt=o("img"),ft=c(),_t=o("small"),Ns=s("TAPAS architecture. Taken from the "),tt=o("a"),Os=s("original blog post"),Ls=s("."),Ke=c(),Pe=o("p"),Qs=s("This model was contributed by "),kt=o("a"),ye=s("nielsr"),yt=s(". The Tensorflow version of this model was contributed by "),qt=o("a"),Is=s("kamalkraj"),jt=s(". The original code can be found "),$t=o("a"),Ws=s("here"),Et=s("."),hs=c(),Gt=o("p"),Ft=s("Tips:"),us=c(),Ye=o("ul"),$e=o("li"),Hs=s("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),At=o("code"),ae=s("reset_position_index_per_cell"),ot=s(" parameter of "),Bt=o("a"),Us=s("TapasConfig"),xt=s(", which is set to "),Yt=o("code"),Rs=s("True"),zt=s(" by default. The default versions of the models available on the "),Ct=o("a"),Gs=s("hub"),Mt=s(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),Jt=o("code"),Bs=s('revision="no_reset"'),Pt=s(" when calling the "),Xt=o("code"),Vs=s("from_pretrained()"),St=s(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Ks=c(),Le=o("li"),Dt=s("TAPAS is based on BERT, so "),Zt=o("code"),Ys=s("TAPAS-base"),Nt=s(" for example corresponds to a "),es=o("code"),Js=s("BERT-base"),ts=s(" architecture. Of course, "),Ue=o("code"),ss=s("TAPAS-large"),Ee=s(" will result in the best performance (the results reported in the paper are from "),as=o("code"),nt=s("TAPAS-large"),Xs=s("). Results of the various sized models are shown on the "),Ot=o("a"),Lt=s("original Github repository"),Zs=s("."),ea=c(),Re=o("li"),ta=s("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),os=o("code"),ns=s("prev_labels"),et=s(" token type ids can be overwritten by the predicted "),Qt=o("code"),z=s("labels"),J=s(" of the model to the previous question. See \u201CUsage\u201D section for more info."),qa=c(),sa=o("li"),ja=s("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),ua=c(),It=o("h2"),st=o("a"),aa=o("span"),y(rt.$$.fragment),$a=c(),oa=o("span"),Ea=s("Usage: fine-tuning"),ma=c(),Ie=o("p"),rs=s("Here we explain how you can fine-tune "),ms=o("a"),Ge=s("TapasForQuestionAnswering"),Fa=s(" on your own dataset."),ga=c(),gs=o("p"),na=o("strong"),is=s("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),fa=c(),ge=o("p"),Aa=s("Basically, there are 3 different ways in which one can fine-tune "),fs=o("a"),xa=s("TapasForQuestionAnswering"),za=s(", corresponding to the different datasets on which Tapas was fine-tuned:"),_a=c(),Tt=o("ol"),ra=o("li"),ls=s("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),Ca=c(),Fe=o("li"),Ma=s("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ia=o("strong"),Pa=s("weak supervision"),Sa=s(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Da=c(),he=o("li"),Na=s("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),la=o("strong"),Oa=s("strong supervision"),La=s(". Here, learning the appropriate aggregation operator is much easier."),Ta=c(),_s=o("p"),Qa=s("To summarize:"),ba=c(),Ce=o("table"),pa=o("thead"),Wt=o("tr"),da=o("th"),Ji=o("strong"),Mc=s("Task"),Pc=c(),Xi=o("th"),Zi=o("strong"),Sc=s("Example dataset"),Dc=c(),el=o("th"),tl=o("strong"),Nc=s("Description"),Oc=c(),Ia=o("tbody"),Wa=o("tr"),sl=o("td"),Lc=s("Conversational"),Qc=c(),al=o("td"),Ic=s("SQA"),Wc=c(),ol=o("td"),Hc=s("Conversational, only cell selection questions"),Uc=c(),Ha=o("tr"),nl=o("td"),Rc=s("Weak supervision for aggregation"),Gc=c(),rl=o("td"),Bc=s("WTQ"),Vc=c(),il=o("td"),Kc=s("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Yc=c(),Ua=o("tr"),ll=o("td"),Jc=s("Strong supervision for aggregation"),Xc=c(),pl=o("td"),Zc=s("WikiSQL-supervised"),eh=c(),dl=o("td"),th=s("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),sd=c(),y(To.$$.fragment),ad=c(),bo=o("p"),sh=s("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),bn=o("a"),ah=s("here"),oh=s(" for more info."),od=c(),vo=o("p"),nh=s("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),vn=o("a"),rh=s("here"),ih=s("."),nd=c(),Ur=o("p"),cl=o("strong"),lh=s("STEP 2: Prepare your data in the SQA format"),rd=c(),wo=o("p"),ph=s("Second, no matter what you picked above, you should prepare your dataset in the "),wn=o("a"),dh=s("SQA"),ch=s(" format. This format is a TSV/CSV file with the following columns:"),id=c(),We=o("ul"),Rr=o("li"),hl=o("code"),hh=s("id"),uh=s(": optional, id of the table-question pair, for bookkeeping purposes."),mh=c(),Gr=o("li"),ul=o("code"),gh=s("annotator"),fh=s(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),_h=c(),Br=o("li"),ml=o("code"),Th=s("position"),bh=s(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),vh=c(),Vr=o("li"),gl=o("code"),wh=s("question"),kh=s(": string"),yh=c(),Kr=o("li"),fl=o("code"),qh=s("table_file"),jh=s(": string, name of a csv file containing the tabular data"),$h=c(),Yr=o("li"),_l=o("code"),Eh=s("answer_coordinates"),Fh=s(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),Ah=c(),Jr=o("li"),Tl=o("code"),xh=s("answer_text"),zh=s(": list of one or more strings (each string being a cell value that is part of the answer)"),Ch=c(),Xr=o("li"),bl=o("code"),Mh=s("aggregation_label"),Ph=s(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Sh=c(),Zr=o("li"),vl=o("code"),Dh=s("float_answer"),Nh=s(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),ld=c(),bt=o("p"),Oh=s("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),kn=o("a"),Lh=s("here"),Qh=s(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),yn=o("a"),Ih=s("here"),Wh=s(". Interestingly, these conversion scripts are not perfect (the "),wl=o("code"),Hh=s("answer_coordinates"),Uh=s(" and "),kl=o("code"),Rh=s("float_answer"),Gh=s(" fields are populated based on the "),yl=o("code"),Bh=s("answer_text"),Vh=s("), meaning that WTQ and WikiSQL results could actually be improved."),pd=c(),ei=o("p"),ql=o("strong"),Kh=s("STEP 3: Convert your data into tensors using TapasTokenizer"),dd=c(),y(ko.$$.fragment),cd=c(),Se=o("p"),Yh=s("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),jl=o("strong"),Jh=s("not conversational"),Xh=s(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),$l=o("code"),Zh=s("queries"),eu=s(", "),El=o("code"),tu=s("answer_coordinates"),su=s(" and "),Fl=o("code"),au=s("answer_text"),ou=s(" per table (in the order of their "),Al=o("code"),nu=s("position"),ru=s(`
index) and batch encode each table with its questions. This will make sure that the `),xl=o("code"),iu=s("prev_labels"),lu=s(" token types (see docs of "),ti=o("a"),pu=s("TapasTokenizer"),du=s(") are set correctly. See "),qn=o("a"),cu=s("this notebook"),hu=s(" for more info. See "),jn=o("a"),uu=s("this notebook"),mu=s(" for more info regarding using the TensorFlow model."),hd=c(),si=o("p"),gu=s("**STEP 4: Train (fine-tune) the model"),ud=c(),y(yo.$$.fragment),md=c(),Ra=o("h2"),qo=o("a"),zl=o("span"),y($n.$$.fragment),fu=c(),Cl=o("span"),_u=s("Usage: inference"),gd=c(),y(jo.$$.fragment),fd=c(),vt=o("p"),Tu=s("In case of a conversational set-up, then each table-question pair must be provided "),Ml=o("strong"),bu=s("sequentially"),vu=s(" to the model, such that the "),Pl=o("code"),wu=s("prev_labels"),ku=s(" token types can be overwritten by the predicted "),Sl=o("code"),yu=s("labels"),qu=s(" of the previous table-question pair. Again, more info can be found in "),En=o("a"),ju=s("this notebook"),$u=s(" (for PyTorch) and "),Fn=o("a"),Eu=s("this notebook"),Fu=s(" (for TensorFlow)."),_d=c(),Ga=o("h2"),$o=o("a"),Dl=o("span"),y(An.$$.fragment),Au=c(),Nl=o("span"),xu=s("TAPAS specific outputs"),Td=c(),Ba=o("div"),y(xn.$$.fragment),zu=c(),zn=o("p"),Cu=s("Output type of "),ai=o("a"),Mu=s("TapasForQuestionAnswering"),Pu=s("."),bd=c(),Va=o("h2"),Eo=o("a"),Ol=o("span"),y(Cn.$$.fragment),Su=c(),Ll=o("span"),Du=s("TapasConfig"),vd=c(),ps=o("div"),y(Mn.$$.fragment),Nu=c(),ds=o("p"),Ou=s("This is the configuration class to store the configuration of a "),oi=o("a"),Lu=s("TapasModel"),Qu=s(`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Ql=o("em"),Iu=s("tapas-base-finetuned-sqa"),Wu=s(` architecture.
Configuration objects inherit from `),Il=o("code"),Hu=s("PreTrainedConfig"),Uu=s(` and can be used to control the model outputs. Read the
documentation from `),ni=o("a"),Ru=s("PretrainedConfig"),Gu=s(" for more information."),Bu=c(),Pn=o("p"),Vu=s(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Sn=o("a"),Ku=s("https://github.com/google-research/tapas/tree/master"),Yu=s("."),Ju=c(),y(Fo.$$.fragment),wd=c(),Ka=o("h2"),Ao=o("a"),Wl=o("span"),y(Dn.$$.fragment),Xu=c(),Hl=o("span"),Zu=s("TapasTokenizer"),kd=c(),Be=o("div"),y(Nn.$$.fragment),em=c(),Ul=o("p"),tm=s(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),sm=c(),Qe=o("p"),am=s("This tokenizer inherits from "),ri=o("a"),om=s("PreTrainedTokenizer"),nm=s(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ii=o("a"),rm=s("TapasTokenizer"),im=s(` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Rl=o("code"),lm=s("segment_ids"),pm=s(`,
`),Gl=o("code"),dm=s("column_ids"),cm=s(", "),Bl=o("code"),hm=s("row_ids"),um=s(", "),Vl=o("code"),mm=s("prev_labels"),gm=s(", "),Kl=o("code"),fm=s("column_ranks"),_m=s(", "),Yl=o("code"),Tm=s("inv_column_ranks"),bm=s(" and "),Jl=o("code"),vm=s("numeric_relations"),wm=s(":"),km=c(),it=o("ul"),Xl=o("li"),ym=s(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),qm=c(),Zl=o("li"),jm=s(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),$m=c(),ep=o("li"),Em=s(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),Fm=c(),tp=o("li"),Am=s(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),xm=c(),sp=o("li"),zm=s(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Cm=c(),ap=o("li"),Mm=s(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Pm=c(),op=o("li"),Sm=s(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Dm=c(),li=o("p"),pi=o("a"),Nm=s("TapasTokenizer"),Om=s(` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),Lm=c(),xo=o("div"),y(On.$$.fragment),Qm=c(),np=o("p"),Im=s("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Wm=c(),va=o("div"),y(Ln.$$.fragment),Hm=c(),Qn=o("p"),Um=s("Converts logits of "),di=o("a"),Rm=s("TapasForQuestionAnswering"),Gm=s(` to actual predicted answer coordinates and optional
aggregation indices.`),Bm=c(),In=o("p"),Vm=s(`The original implementation, on which this function is based, can be found
`),Wn=o("a"),Km=s("here"),Ym=s("."),Jm=c(),ci=o("div"),y(Hn.$$.fragment),yd=c(),Ya=o("h2"),zo=o("a"),rp=o("span"),y(Un.$$.fragment),Xm=c(),ip=o("span"),Zm=s("TapasModel"),qd=c(),lt=o("div"),y(Rn.$$.fragment),eg=c(),Gn=o("p"),tg=s(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),hi=o("a"),sg=s("PreTrainedModel"),ag=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),og=c(),Bn=o("p"),ng=s("This model is also a PyTorch "),Vn=o("a"),rg=s("torch.nn.Module"),ig=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lg=c(),Kn=o("p"),pg=s("This class is a small change compared to "),ui=o("a"),dg=s("BertModel"),cg=s(", taking into account the additional token type ids."),hg=c(),Yn=o("p"),ug=s(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Jn=o("a"),mg=s(`Attention is
all you need`),gg=s(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),fg=c(),Ts=o("div"),y(Xn.$$.fragment),_g=c(),Ja=o("p"),Tg=s("The "),mi=o("a"),bg=s("TapasModel"),vg=s(" forward method, overrides the "),lp=o("code"),wg=s("__call__"),kg=s(" special method."),yg=c(),y(Co.$$.fragment),qg=c(),y(Mo.$$.fragment),jd=c(),Xa=o("h2"),Po=o("a"),pp=o("span"),y(Zn.$$.fragment),jg=c(),dp=o("span"),$g=s("TapasForMaskedLM"),$d=c(),cs=o("div"),y(er.$$.fragment),Eg=c(),Za=o("p"),Fg=s("Tapas Model with a "),cp=o("code"),Ag=s("language modeling"),xg=s(` head on top.
This model inherits from `),gi=o("a"),zg=s("PreTrainedModel"),Cg=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mg=c(),tr=o("p"),Pg=s("This model is also a PyTorch "),sr=o("a"),Sg=s("torch.nn.Module"),Dg=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ng=c(),bs=o("div"),y(ar.$$.fragment),Og=c(),eo=o("p"),Lg=s("The "),fi=o("a"),Qg=s("TapasForMaskedLM"),Ig=s(" forward method, overrides the "),hp=o("code"),Wg=s("__call__"),Hg=s(" special method."),Ug=c(),y(So.$$.fragment),Rg=c(),y(Do.$$.fragment),Ed=c(),to=o("h2"),No=o("a"),up=o("span"),y(or.$$.fragment),Gg=c(),mp=o("span"),Bg=s("TapasForSequenceClassification"),Fd=c(),Ht=o("div"),y(nr.$$.fragment),Vg=c(),gp=o("p"),Kg=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Yg=c(),rr=o("p"),Jg=s("This model inherits from "),_i=o("a"),Xg=s("PreTrainedModel"),Zg=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ef=c(),ir=o("p"),tf=s("This model is also a PyTorch "),lr=o("a"),sf=s("torch.nn.Module"),af=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),of=c(),vs=o("div"),y(pr.$$.fragment),nf=c(),so=o("p"),rf=s("The "),Ti=o("a"),lf=s("TapasForSequenceClassification"),pf=s(" forward method, overrides the "),fp=o("code"),df=s("__call__"),cf=s(" special method."),hf=c(),y(Oo.$$.fragment),uf=c(),y(Lo.$$.fragment),Ad=c(),ao=o("h2"),Qo=o("a"),_p=o("span"),y(dr.$$.fragment),mf=c(),Tp=o("span"),gf=s("TapasForQuestionAnswering"),xd=c(),Ut=o("div"),y(cr.$$.fragment),ff=c(),oo=o("p"),_f=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),bp=o("code"),Tf=s("logits"),bf=s(" and optional "),vp=o("code"),vf=s("logits_aggregation"),wf=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),kf=c(),hr=o("p"),yf=s("This model inherits from "),bi=o("a"),qf=s("PreTrainedModel"),jf=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$f=c(),ur=o("p"),Ef=s("This model is also a PyTorch "),mr=o("a"),Ff=s("torch.nn.Module"),Af=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xf=c(),ws=o("div"),y(gr.$$.fragment),zf=c(),no=o("p"),Cf=s("The "),vi=o("a"),Mf=s("TapasForQuestionAnswering"),Pf=s(" forward method, overrides the "),wp=o("code"),Sf=s("__call__"),Df=s(" special method."),Nf=c(),y(Io.$$.fragment),Of=c(),y(Wo.$$.fragment),zd=c(),ro=o("h2"),Ho=o("a"),kp=o("span"),y(fr.$$.fragment),Lf=c(),yp=o("span"),Qf=s("TFTapasModel"),Cd=c(),pt=o("div"),y(_r.$$.fragment),If=c(),qp=o("p"),Wf=s("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Hf=c(),Tr=o("p"),Uf=s("This model inherits from "),wi=o("a"),Rf=s("TFPreTrainedModel"),Gf=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bf=c(),br=o("p"),Vf=s("This model is also a "),vr=o("a"),Kf=s("tf.keras.Model"),Yf=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jf=c(),y(Uo.$$.fragment),Xf=c(),ks=o("div"),y(wr.$$.fragment),Zf=c(),io=o("p"),e_=s("The "),ki=o("a"),t_=s("TFTapasModel"),s_=s(" forward method, overrides the "),jp=o("code"),a_=s("__call__"),o_=s(" special method."),n_=c(),y(Ro.$$.fragment),r_=c(),y(Go.$$.fragment),Md=c(),lo=o("h2"),Bo=o("a"),$p=o("span"),y(kr.$$.fragment),i_=c(),Ep=o("span"),l_=s("TFTapasForMaskedLM"),Pd=c(),dt=o("div"),y(yr.$$.fragment),p_=c(),qr=o("p"),d_=s("Tapas Model with a "),Fp=o("code"),c_=s("language modeling"),h_=s(" head on top."),u_=c(),jr=o("p"),m_=s("This model inherits from "),yi=o("a"),g_=s("TFPreTrainedModel"),f_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),__=c(),$r=o("p"),T_=s("This model is also a "),Er=o("a"),b_=s("tf.keras.Model"),v_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),w_=c(),y(Vo.$$.fragment),k_=c(),ys=o("div"),y(Fr.$$.fragment),y_=c(),po=o("p"),q_=s("The "),qi=o("a"),j_=s("TFTapasForMaskedLM"),$_=s(" forward method, overrides the "),Ap=o("code"),E_=s("__call__"),F_=s(" special method."),A_=c(),y(Ko.$$.fragment),x_=c(),y(Yo.$$.fragment),Sd=c(),co=o("h2"),Jo=o("a"),xp=o("span"),y(Ar.$$.fragment),z_=c(),zp=o("span"),C_=s("TFTapasForSequenceClassification"),Dd=c(),ct=o("div"),y(xr.$$.fragment),M_=c(),Cp=o("p"),P_=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),S_=c(),zr=o("p"),D_=s("This model inherits from "),ji=o("a"),N_=s("TFPreTrainedModel"),O_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),L_=c(),Cr=o("p"),Q_=s("This model is also a "),Mr=o("a"),I_=s("tf.keras.Model"),W_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),H_=c(),y(Xo.$$.fragment),U_=c(),qs=o("div"),y(Pr.$$.fragment),R_=c(),ho=o("p"),G_=s("The "),$i=o("a"),B_=s("TFTapasForSequenceClassification"),V_=s(" forward method, overrides the "),Mp=o("code"),K_=s("__call__"),Y_=s(" special method."),J_=c(),y(Zo.$$.fragment),X_=c(),y(en.$$.fragment),Nd=c(),uo=o("h2"),tn=o("a"),Pp=o("span"),y(Sr.$$.fragment),Z_=c(),Sp=o("span"),eT=s("TFTapasForQuestionAnswering"),Od=c(),ht=o("div"),y(Dr.$$.fragment),tT=c(),mo=o("p"),sT=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Dp=o("code"),aT=s("logits"),oT=s(" and optional "),Np=o("code"),nT=s("logits_aggregation"),rT=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),iT=c(),Nr=o("p"),lT=s("This model inherits from "),Ei=o("a"),pT=s("TFPreTrainedModel"),dT=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cT=c(),Or=o("p"),hT=s("This model is also a "),Lr=o("a"),uT=s("tf.keras.Model"),mT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gT=c(),y(sn.$$.fragment),fT=c(),js=o("div"),y(Qr.$$.fragment),_T=c(),go=o("p"),TT=s("The "),Fi=o("a"),bT=s("TFTapasForQuestionAnswering"),vT=s(" forward method, overrides the "),Op=o("code"),wT=s("__call__"),kT=s(" special method."),yT=c(),y(an.$$.fragment),qT=c(),y(on.$$.fragment),this.h()},l(i){const _=hk('[data-svelte="svelte-1phssyn"]',document.head);l=n(_,"META",{name:!0,content:!0}),_.forEach(t),b=h(i),p=n(i,"H1",{class:!0});var Ir=r(p);u=n(Ir,"A",{id:!0,class:!0,href:!0});var Lp=r(u);T=n(Lp,"SPAN",{});var Qp=r(T);q(d.$$.fragment,Qp),Qp.forEach(t),Lp.forEach(t),f=h(Ir),A=n(Ir,"SPAN",{});var Ip=r(A);k=a(Ip,"TAPAS"),Ip.forEach(t),Ir.forEach(t),N=h(i),x=n(i,"H2",{class:!0});var Wr=r(x);U=n(Wr,"A",{id:!0,class:!0,href:!0});var Wp=r(U);B=n(Wp,"SPAN",{});var Hp=r(B);q(V.$$.fragment,Hp),Hp.forEach(t),Wp.forEach(t),R=h(Wr),K=n(Wr,"SPAN",{});var Up=r(K);re=a(Up,"Overview"),Up.forEach(t),Wr.forEach(t),W=h(i),L=n(i,"P",{});var Hr=r(L);w=a(Hr,"The TAPAS model was proposed in "),M=n(Hr,"A",{href:!0,rel:!0});var Rp=r(M);G=a(Rp,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),Rp.forEach(t),C=a(Hr,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),Hr.forEach(t),O=h(i),ee=n(i,"P",{});var Gp=r(ee);te=a(Gp,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),Gp.forEach(t),ce=h(i),oe=n(i,"UL",{});var fo=r(oe);se=n(fo,"LI",{});var Ai=r(se);S=n(Ai,"A",{href:!0,rel:!0});var Bp=r(S);Q=a(Bp,"SQA"),Bp.forEach(t),H=a(Ai," (Sequential Question Answering by Microsoft)"),Ai.forEach(t),X=h(fo),I=n(fo,"LI",{});var xi=r(I);Y=n(xi,"A",{href:!0,rel:!0});var Vp=r(Y);fe=a(Vp,"WTQ"),Vp.forEach(t),ue=a(xi," (Wiki Table Questions by Stanford University)"),xi.forEach(t),_e=h(fo),me=n(fo,"LI",{});var zi=r(me);ne=n(zi,"A",{href:!0,rel:!0});var Kp=r(ne);qe=a(Kp,"WikiSQL"),Kp.forEach(t),ie=a(zi," (by Salesforce)."),zi.forEach(t),fo.forEach(t),ve=h(i),v=n(i,"P",{});var Yp=r(v);D=a(Yp,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),Yp.forEach(t),be=h(i),xe=n(i,"P",{});var Jp=r(xe);we=a(Jp,"The abstract from the paper is the following:"),Jp.forEach(t),le=h(i),ze=n(i,"P",{});var Xp=r(ze);Me=n(Xp,"EM",{});var Zp=r(Me);Z=a(Zp,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),Zp.forEach(t),Xp.forEach(t),pe=h(i),de=n(i,"P",{});var ca=r(de);De=a(ca,"In addition, the authors have further pre-trained TAPAS to recognize "),je=n(ca,"STRONG",{});var ed=r(je);Te=a(ed,"table entailment"),ed.forEach(t),Ne=a(ca,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ke=n(ca,"A",{href:!0,rel:!0});var td=r(ke);Ae=a(td,"TabFact"),td.forEach(t),Oe=a(ca,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=n(ca,"A",{href:!0,rel:!0});var ST=r(Ze);Ss=a(ST,"Understanding tables with intermediate pre-training"),ST.forEach(t),Ds=a(ca," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),ca.forEach(t),mt=h(i),gt=n(i,"IMG",{src:!0,alt:!0,width:!0}),ft=h(i),_t=n(i,"SMALL",{});var Qd=r(_t);Ns=a(Qd,"TAPAS architecture. Taken from the "),tt=n(Qd,"A",{href:!0});var DT=r(tt);Os=a(DT,"original blog post"),DT.forEach(t),Ls=a(Qd,"."),Qd.forEach(t),Ke=h(i),Pe=n(i,"P",{});var nn=r(Pe);Qs=a(nn,"This model was contributed by "),kt=n(nn,"A",{href:!0,rel:!0});var NT=r(kt);ye=a(NT,"nielsr"),NT.forEach(t),yt=a(nn,". The Tensorflow version of this model was contributed by "),qt=n(nn,"A",{href:!0,rel:!0});var OT=r(qt);Is=a(OT,"kamalkraj"),OT.forEach(t),jt=a(nn,". The original code can be found "),$t=n(nn,"A",{href:!0,rel:!0});var LT=r($t);Ws=a(LT,"here"),LT.forEach(t),Et=a(nn,"."),nn.forEach(t),hs=h(i),Gt=n(i,"P",{});var QT=r(Gt);Ft=a(QT,"Tips:"),QT.forEach(t),us=h(i),Ye=n(i,"UL",{});var rn=r(Ye);$e=n(rn,"LI",{});var Vt=r($e);Hs=a(Vt,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),At=n(Vt,"CODE",{});var IT=r(At);ae=a(IT,"reset_position_index_per_cell"),IT.forEach(t),ot=a(Vt," parameter of "),Bt=n(Vt,"A",{href:!0});var WT=r(Bt);Us=a(WT,"TapasConfig"),WT.forEach(t),xt=a(Vt,", which is set to "),Yt=n(Vt,"CODE",{});var HT=r(Yt);Rs=a(HT,"True"),HT.forEach(t),zt=a(Vt," by default. The default versions of the models available on the "),Ct=n(Vt,"A",{href:!0,rel:!0});var UT=r(Ct);Gs=a(UT,"hub"),UT.forEach(t),Mt=a(Vt," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),Jt=n(Vt,"CODE",{});var RT=r(Jt);Bs=a(RT,'revision="no_reset"'),RT.forEach(t),Pt=a(Vt," when calling the "),Xt=n(Vt,"CODE",{});var GT=r(Xt);Vs=a(GT,"from_pretrained()"),GT.forEach(t),St=a(Vt," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Vt.forEach(t),Ks=h(rn),Le=n(rn,"LI",{});var $s=r(Le);Dt=a($s,"TAPAS is based on BERT, so "),Zt=n($s,"CODE",{});var BT=r(Zt);Ys=a(BT,"TAPAS-base"),BT.forEach(t),Nt=a($s," for example corresponds to a "),es=n($s,"CODE",{});var VT=r(es);Js=a(VT,"BERT-base"),VT.forEach(t),ts=a($s," architecture. Of course, "),Ue=n($s,"CODE",{});var KT=r(Ue);ss=a(KT,"TAPAS-large"),KT.forEach(t),Ee=a($s," will result in the best performance (the results reported in the paper are from "),as=n($s,"CODE",{});var YT=r(as);nt=a(YT,"TAPAS-large"),YT.forEach(t),Xs=a($s,"). Results of the various sized models are shown on the "),Ot=n($s,"A",{href:!0,rel:!0});var JT=r(Ot);Lt=a(JT,"original Github repository"),JT.forEach(t),Zs=a($s,"."),$s.forEach(t),ea=h(rn),Re=n(rn,"LI",{});var Ci=r(Re);ta=a(Ci,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),os=n(Ci,"CODE",{});var XT=r(os);ns=a(XT,"prev_labels"),XT.forEach(t),et=a(Ci," token type ids can be overwritten by the predicted "),Qt=n(Ci,"CODE",{});var ZT=r(Qt);z=a(ZT,"labels"),ZT.forEach(t),J=a(Ci," of the model to the previous question. See \u201CUsage\u201D section for more info."),Ci.forEach(t),qa=h(rn),sa=n(rn,"LI",{});var eb=r(sa);ja=a(eb,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),eb.forEach(t),rn.forEach(t),ua=h(i),It=n(i,"H2",{class:!0});var Id=r(It);st=n(Id,"A",{id:!0,class:!0,href:!0});var tb=r(st);aa=n(tb,"SPAN",{});var sb=r(aa);q(rt.$$.fragment,sb),sb.forEach(t),tb.forEach(t),$a=h(Id),oa=n(Id,"SPAN",{});var ab=r(oa);Ea=a(ab,"Usage: fine-tuning"),ab.forEach(t),Id.forEach(t),ma=h(i),Ie=n(i,"P",{});var Wd=r(Ie);rs=a(Wd,"Here we explain how you can fine-tune "),ms=n(Wd,"A",{href:!0});var ob=r(ms);Ge=a(ob,"TapasForQuestionAnswering"),ob.forEach(t),Fa=a(Wd," on your own dataset."),Wd.forEach(t),ga=h(i),gs=n(i,"P",{});var nb=r(gs);na=n(nb,"STRONG",{});var rb=r(na);is=a(rb,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),rb.forEach(t),nb.forEach(t),fa=h(i),ge=n(i,"P",{});var Hd=r(ge);Aa=a(Hd,"Basically, there are 3 different ways in which one can fine-tune "),fs=n(Hd,"A",{href:!0});var ib=r(fs);xa=a(ib,"TapasForQuestionAnswering"),ib.forEach(t),za=a(Hd,", corresponding to the different datasets on which Tapas was fine-tuned:"),Hd.forEach(t),_a=h(i),Tt=n(i,"OL",{});var Mi=r(Tt);ra=n(Mi,"LI",{});var lb=r(ra);ls=a(lb,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),lb.forEach(t),Ca=h(Mi),Fe=n(Mi,"LI",{});var Ud=r(Fe);Ma=a(Ud,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ia=n(Ud,"STRONG",{});var pb=r(ia);Pa=a(pb,"weak supervision"),pb.forEach(t),Sa=a(Ud,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Ud.forEach(t),Da=h(Mi),he=n(Mi,"LI",{});var Rd=r(he);Na=a(Rd,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),la=n(Rd,"STRONG",{});var db=r(la);Oa=a(db,"strong supervision"),db.forEach(t),La=a(Rd,". Here, learning the appropriate aggregation operator is much easier."),Rd.forEach(t),Mi.forEach(t),Ta=h(i),_s=n(i,"P",{});var cb=r(_s);Qa=a(cb,"To summarize:"),cb.forEach(t),ba=h(i),Ce=n(i,"TABLE",{});var Gd=r(Ce);pa=n(Gd,"THEAD",{});var hb=r(pa);Wt=n(hb,"TR",{});var Pi=r(Wt);da=n(Pi,"TH",{});var ub=r(da);Ji=n(ub,"STRONG",{});var mb=r(Ji);Mc=a(mb,"Task"),mb.forEach(t),ub.forEach(t),Pc=h(Pi),Xi=n(Pi,"TH",{});var gb=r(Xi);Zi=n(gb,"STRONG",{});var fb=r(Zi);Sc=a(fb,"Example dataset"),fb.forEach(t),gb.forEach(t),Dc=h(Pi),el=n(Pi,"TH",{});var _b=r(el);tl=n(_b,"STRONG",{});var Tb=r(tl);Nc=a(Tb,"Description"),Tb.forEach(t),_b.forEach(t),Pi.forEach(t),hb.forEach(t),Oc=h(Gd),Ia=n(Gd,"TBODY",{});var Si=r(Ia);Wa=n(Si,"TR",{});var Di=r(Wa);sl=n(Di,"TD",{});var bb=r(sl);Lc=a(bb,"Conversational"),bb.forEach(t),Qc=h(Di),al=n(Di,"TD",{});var vb=r(al);Ic=a(vb,"SQA"),vb.forEach(t),Wc=h(Di),ol=n(Di,"TD",{});var wb=r(ol);Hc=a(wb,"Conversational, only cell selection questions"),wb.forEach(t),Di.forEach(t),Uc=h(Si),Ha=n(Si,"TR",{});var Ni=r(Ha);nl=n(Ni,"TD",{});var kb=r(nl);Rc=a(kb,"Weak supervision for aggregation"),kb.forEach(t),Gc=h(Ni),rl=n(Ni,"TD",{});var yb=r(rl);Bc=a(yb,"WTQ"),yb.forEach(t),Vc=h(Ni),il=n(Ni,"TD",{});var qb=r(il);Kc=a(qb,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),qb.forEach(t),Ni.forEach(t),Yc=h(Si),Ua=n(Si,"TR",{});var Oi=r(Ua);ll=n(Oi,"TD",{});var jb=r(ll);Jc=a(jb,"Strong supervision for aggregation"),jb.forEach(t),Xc=h(Oi),pl=n(Oi,"TD",{});var $b=r(pl);Zc=a($b,"WikiSQL-supervised"),$b.forEach(t),eh=h(Oi),dl=n(Oi,"TD",{});var Eb=r(dl);th=a(Eb,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),Eb.forEach(t),Oi.forEach(t),Si.forEach(t),Gd.forEach(t),sd=h(i),q(To.$$.fragment,i),ad=h(i),bo=n(i,"P",{});var Bd=r(bo);sh=a(Bd,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),bn=n(Bd,"A",{href:!0,rel:!0});var Fb=r(bn);ah=a(Fb,"here"),Fb.forEach(t),oh=a(Bd," for more info."),Bd.forEach(t),od=h(i),vo=n(i,"P",{});var Vd=r(vo);nh=a(Vd,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),vn=n(Vd,"A",{href:!0,rel:!0});var Ab=r(vn);rh=a(Ab,"here"),Ab.forEach(t),ih=a(Vd,"."),Vd.forEach(t),nd=h(i),Ur=n(i,"P",{});var xb=r(Ur);cl=n(xb,"STRONG",{});var zb=r(cl);lh=a(zb,"STEP 2: Prepare your data in the SQA format"),zb.forEach(t),xb.forEach(t),rd=h(i),wo=n(i,"P",{});var Kd=r(wo);ph=a(Kd,"Second, no matter what you picked above, you should prepare your dataset in the "),wn=n(Kd,"A",{href:!0,rel:!0});var Cb=r(wn);dh=a(Cb,"SQA"),Cb.forEach(t),ch=a(Kd," format. This format is a TSV/CSV file with the following columns:"),Kd.forEach(t),id=h(i),We=n(i,"UL",{});var at=r(We);Rr=n(at,"LI",{});var jT=r(Rr);hl=n(jT,"CODE",{});var Mb=r(hl);hh=a(Mb,"id"),Mb.forEach(t),uh=a(jT,": optional, id of the table-question pair, for bookkeeping purposes."),jT.forEach(t),mh=h(at),Gr=n(at,"LI",{});var $T=r(Gr);ul=n($T,"CODE",{});var Pb=r(ul);gh=a(Pb,"annotator"),Pb.forEach(t),fh=a($T,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),$T.forEach(t),_h=h(at),Br=n(at,"LI",{});var ET=r(Br);ml=n(ET,"CODE",{});var Sb=r(ml);Th=a(Sb,"position"),Sb.forEach(t),bh=a(ET,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),ET.forEach(t),vh=h(at),Vr=n(at,"LI",{});var FT=r(Vr);gl=n(FT,"CODE",{});var Db=r(gl);wh=a(Db,"question"),Db.forEach(t),kh=a(FT,": string"),FT.forEach(t),yh=h(at),Kr=n(at,"LI",{});var AT=r(Kr);fl=n(AT,"CODE",{});var Nb=r(fl);qh=a(Nb,"table_file"),Nb.forEach(t),jh=a(AT,": string, name of a csv file containing the tabular data"),AT.forEach(t),$h=h(at),Yr=n(at,"LI",{});var xT=r(Yr);_l=n(xT,"CODE",{});var Ob=r(_l);Eh=a(Ob,"answer_coordinates"),Ob.forEach(t),Fh=a(xT,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),xT.forEach(t),Ah=h(at),Jr=n(at,"LI",{});var zT=r(Jr);Tl=n(zT,"CODE",{});var Lb=r(Tl);xh=a(Lb,"answer_text"),Lb.forEach(t),zh=a(zT,": list of one or more strings (each string being a cell value that is part of the answer)"),zT.forEach(t),Ch=h(at),Xr=n(at,"LI",{});var CT=r(Xr);bl=n(CT,"CODE",{});var Qb=r(bl);Mh=a(Qb,"aggregation_label"),Qb.forEach(t),Ph=a(CT,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),CT.forEach(t),Sh=h(at),Zr=n(at,"LI",{});var MT=r(Zr);vl=n(MT,"CODE",{});var Ib=r(vl);Dh=a(Ib,"float_answer"),Ib.forEach(t),Nh=a(MT,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),MT.forEach(t),at.forEach(t),ld=h(i),bt=n(i,"P",{});var Es=r(bt);Oh=a(Es,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),kn=n(Es,"A",{href:!0,rel:!0});var Wb=r(kn);Lh=a(Wb,"here"),Wb.forEach(t),Qh=a(Es,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),yn=n(Es,"A",{href:!0,rel:!0});var Hb=r(yn);Ih=a(Hb,"here"),Hb.forEach(t),Wh=a(Es,". Interestingly, these conversion scripts are not perfect (the "),wl=n(Es,"CODE",{});var Ub=r(wl);Hh=a(Ub,"answer_coordinates"),Ub.forEach(t),Uh=a(Es," and "),kl=n(Es,"CODE",{});var Rb=r(kl);Rh=a(Rb,"float_answer"),Rb.forEach(t),Gh=a(Es," fields are populated based on the "),yl=n(Es,"CODE",{});var Gb=r(yl);Bh=a(Gb,"answer_text"),Gb.forEach(t),Vh=a(Es,"), meaning that WTQ and WikiSQL results could actually be improved."),Es.forEach(t),pd=h(i),ei=n(i,"P",{});var Bb=r(ei);ql=n(Bb,"STRONG",{});var Vb=r(ql);Kh=a(Vb,"STEP 3: Convert your data into tensors using TapasTokenizer"),Vb.forEach(t),Bb.forEach(t),dd=h(i),q(ko.$$.fragment,i),cd=h(i),Se=n(i,"P",{});var Je=r(Se);Yh=a(Je,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),jl=n(Je,"STRONG",{});var Kb=r(jl);Jh=a(Kb,"not conversational"),Kb.forEach(t),Xh=a(Je,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),$l=n(Je,"CODE",{});var Yb=r($l);Zh=a(Yb,"queries"),Yb.forEach(t),eu=a(Je,", "),El=n(Je,"CODE",{});var Jb=r(El);tu=a(Jb,"answer_coordinates"),Jb.forEach(t),su=a(Je," and "),Fl=n(Je,"CODE",{});var Xb=r(Fl);au=a(Xb,"answer_text"),Xb.forEach(t),ou=a(Je," per table (in the order of their "),Al=n(Je,"CODE",{});var Zb=r(Al);nu=a(Zb,"position"),Zb.forEach(t),ru=a(Je,`
index) and batch encode each table with its questions. This will make sure that the `),xl=n(Je,"CODE",{});var ev=r(xl);iu=a(ev,"prev_labels"),ev.forEach(t),lu=a(Je," token types (see docs of "),ti=n(Je,"A",{href:!0});var tv=r(ti);pu=a(tv,"TapasTokenizer"),tv.forEach(t),du=a(Je,") are set correctly. See "),qn=n(Je,"A",{href:!0,rel:!0});var sv=r(qn);cu=a(sv,"this notebook"),sv.forEach(t),hu=a(Je," for more info. See "),jn=n(Je,"A",{href:!0,rel:!0});var av=r(jn);uu=a(av,"this notebook"),av.forEach(t),mu=a(Je," for more info regarding using the TensorFlow model."),Je.forEach(t),hd=h(i),si=n(i,"P",{});var ov=r(si);gu=a(ov,"**STEP 4: Train (fine-tune) the model"),ov.forEach(t),ud=h(i),q(yo.$$.fragment,i),md=h(i),Ra=n(i,"H2",{class:!0});var Yd=r(Ra);qo=n(Yd,"A",{id:!0,class:!0,href:!0});var nv=r(qo);zl=n(nv,"SPAN",{});var rv=r(zl);q($n.$$.fragment,rv),rv.forEach(t),nv.forEach(t),fu=h(Yd),Cl=n(Yd,"SPAN",{});var iv=r(Cl);_u=a(iv,"Usage: inference"),iv.forEach(t),Yd.forEach(t),gd=h(i),q(jo.$$.fragment,i),fd=h(i),vt=n(i,"P",{});var Fs=r(vt);Tu=a(Fs,"In case of a conversational set-up, then each table-question pair must be provided "),Ml=n(Fs,"STRONG",{});var lv=r(Ml);bu=a(lv,"sequentially"),lv.forEach(t),vu=a(Fs," to the model, such that the "),Pl=n(Fs,"CODE",{});var pv=r(Pl);wu=a(pv,"prev_labels"),pv.forEach(t),ku=a(Fs," token types can be overwritten by the predicted "),Sl=n(Fs,"CODE",{});var dv=r(Sl);yu=a(dv,"labels"),dv.forEach(t),qu=a(Fs," of the previous table-question pair. Again, more info can be found in "),En=n(Fs,"A",{href:!0,rel:!0});var cv=r(En);ju=a(cv,"this notebook"),cv.forEach(t),$u=a(Fs," (for PyTorch) and "),Fn=n(Fs,"A",{href:!0,rel:!0});var hv=r(Fn);Eu=a(hv,"this notebook"),hv.forEach(t),Fu=a(Fs," (for TensorFlow)."),Fs.forEach(t),_d=h(i),Ga=n(i,"H2",{class:!0});var Jd=r(Ga);$o=n(Jd,"A",{id:!0,class:!0,href:!0});var uv=r($o);Dl=n(uv,"SPAN",{});var mv=r(Dl);q(An.$$.fragment,mv),mv.forEach(t),uv.forEach(t),Au=h(Jd),Nl=n(Jd,"SPAN",{});var gv=r(Nl);xu=a(gv,"TAPAS specific outputs"),gv.forEach(t),Jd.forEach(t),Td=h(i),Ba=n(i,"DIV",{class:!0});var Xd=r(Ba);q(xn.$$.fragment,Xd),zu=h(Xd),zn=n(Xd,"P",{});var Zd=r(zn);Cu=a(Zd,"Output type of "),ai=n(Zd,"A",{href:!0});var fv=r(ai);Mu=a(fv,"TapasForQuestionAnswering"),fv.forEach(t),Pu=a(Zd,"."),Zd.forEach(t),Xd.forEach(t),bd=h(i),Va=n(i,"H2",{class:!0});var ec=r(Va);Eo=n(ec,"A",{id:!0,class:!0,href:!0});var _v=r(Eo);Ol=n(_v,"SPAN",{});var Tv=r(Ol);q(Cn.$$.fragment,Tv),Tv.forEach(t),_v.forEach(t),Su=h(ec),Ll=n(ec,"SPAN",{});var bv=r(Ll);Du=a(bv,"TapasConfig"),bv.forEach(t),ec.forEach(t),vd=h(i),ps=n(i,"DIV",{class:!0});var ln=r(ps);q(Mn.$$.fragment,ln),Nu=h(ln),ds=n(ln,"P",{});var wa=r(ds);Ou=a(wa,"This is the configuration class to store the configuration of a "),oi=n(wa,"A",{href:!0});var vv=r(oi);Lu=a(vv,"TapasModel"),vv.forEach(t),Qu=a(wa,`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Ql=n(wa,"EM",{});var wv=r(Ql);Iu=a(wv,"tapas-base-finetuned-sqa"),wv.forEach(t),Wu=a(wa,` architecture.
Configuration objects inherit from `),Il=n(wa,"CODE",{});var kv=r(Il);Hu=a(kv,"PreTrainedConfig"),kv.forEach(t),Uu=a(wa,` and can be used to control the model outputs. Read the
documentation from `),ni=n(wa,"A",{href:!0});var yv=r(ni);Ru=a(yv,"PretrainedConfig"),yv.forEach(t),Gu=a(wa," for more information."),wa.forEach(t),Bu=h(ln),Pn=n(ln,"P",{});var tc=r(Pn);Vu=a(tc,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Sn=n(tc,"A",{href:!0,rel:!0});var qv=r(Sn);Ku=a(qv,"https://github.com/google-research/tapas/tree/master"),qv.forEach(t),Yu=a(tc,"."),tc.forEach(t),Ju=h(ln),q(Fo.$$.fragment,ln),ln.forEach(t),wd=h(i),Ka=n(i,"H2",{class:!0});var sc=r(Ka);Ao=n(sc,"A",{id:!0,class:!0,href:!0});var jv=r(Ao);Wl=n(jv,"SPAN",{});var $v=r(Wl);q(Dn.$$.fragment,$v),$v.forEach(t),jv.forEach(t),Xu=h(sc),Hl=n(sc,"SPAN",{});var Ev=r(Hl);Zu=a(Ev,"TapasTokenizer"),Ev.forEach(t),sc.forEach(t),kd=h(i),Be=n(i,"DIV",{class:!0});var wt=r(Be);q(Nn.$$.fragment,wt),em=h(wt),Ul=n(wt,"P",{});var Fv=r(Ul);tm=a(Fv,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),Fv.forEach(t),sm=h(wt),Qe=n(wt,"P",{});var Xe=r(Qe);am=a(Xe,"This tokenizer inherits from "),ri=n(Xe,"A",{href:!0});var Av=r(ri);om=a(Av,"PreTrainedTokenizer"),Av.forEach(t),nm=a(Xe,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ii=n(Xe,"A",{href:!0});var xv=r(ii);rm=a(xv,"TapasTokenizer"),xv.forEach(t),im=a(Xe,` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Rl=n(Xe,"CODE",{});var zv=r(Rl);lm=a(zv,"segment_ids"),zv.forEach(t),pm=a(Xe,`,
`),Gl=n(Xe,"CODE",{});var Cv=r(Gl);dm=a(Cv,"column_ids"),Cv.forEach(t),cm=a(Xe,", "),Bl=n(Xe,"CODE",{});var Mv=r(Bl);hm=a(Mv,"row_ids"),Mv.forEach(t),um=a(Xe,", "),Vl=n(Xe,"CODE",{});var Pv=r(Vl);mm=a(Pv,"prev_labels"),Pv.forEach(t),gm=a(Xe,", "),Kl=n(Xe,"CODE",{});var Sv=r(Kl);fm=a(Sv,"column_ranks"),Sv.forEach(t),_m=a(Xe,", "),Yl=n(Xe,"CODE",{});var Dv=r(Yl);Tm=a(Dv,"inv_column_ranks"),Dv.forEach(t),bm=a(Xe," and "),Jl=n(Xe,"CODE",{});var Nv=r(Jl);vm=a(Nv,"numeric_relations"),Nv.forEach(t),wm=a(Xe,":"),Xe.forEach(t),km=h(wt),it=n(wt,"UL",{});var Kt=r(it);Xl=n(Kt,"LI",{});var Ov=r(Xl);ym=a(Ov,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),Ov.forEach(t),qm=h(Kt),Zl=n(Kt,"LI",{});var Lv=r(Zl);jm=a(Lv,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),Lv.forEach(t),$m=h(Kt),ep=n(Kt,"LI",{});var Qv=r(ep);Em=a(Qv,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),Qv.forEach(t),Fm=h(Kt),tp=n(Kt,"LI",{});var Iv=r(tp);Am=a(Iv,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Iv.forEach(t),xm=h(Kt),sp=n(Kt,"LI",{});var Wv=r(sp);zm=a(Wv,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Wv.forEach(t),Cm=h(Kt),ap=n(Kt,"LI",{});var Hv=r(ap);Mm=a(Hv,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Hv.forEach(t),Pm=h(Kt),op=n(Kt,"LI",{});var Uv=r(op);Sm=a(Uv,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Uv.forEach(t),Kt.forEach(t),Dm=h(wt),li=n(wt,"P",{});var PT=r(li);pi=n(PT,"A",{href:!0});var Rv=r(pi);Nm=a(Rv,"TapasTokenizer"),Rv.forEach(t),Om=a(PT,` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),PT.forEach(t),Lm=h(wt),xo=n(wt,"DIV",{class:!0});var ac=r(xo);q(On.$$.fragment,ac),Qm=h(ac),np=n(ac,"P",{});var Gv=r(np);Im=a(Gv,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Gv.forEach(t),ac.forEach(t),Wm=h(wt),va=n(wt,"DIV",{class:!0});var Li=r(va);q(Ln.$$.fragment,Li),Hm=h(Li),Qn=n(Li,"P",{});var oc=r(Qn);Um=a(oc,"Converts logits of "),di=n(oc,"A",{href:!0});var Bv=r(di);Rm=a(Bv,"TapasForQuestionAnswering"),Bv.forEach(t),Gm=a(oc,` to actual predicted answer coordinates and optional
aggregation indices.`),oc.forEach(t),Bm=h(Li),In=n(Li,"P",{});var nc=r(In);Vm=a(nc,`The original implementation, on which this function is based, can be found
`),Wn=n(nc,"A",{href:!0,rel:!0});var Vv=r(Wn);Km=a(Vv,"here"),Vv.forEach(t),Ym=a(nc,"."),nc.forEach(t),Li.forEach(t),Jm=h(wt),ci=n(wt,"DIV",{class:!0});var Kv=r(ci);q(Hn.$$.fragment,Kv),Kv.forEach(t),wt.forEach(t),yd=h(i),Ya=n(i,"H2",{class:!0});var rc=r(Ya);zo=n(rc,"A",{id:!0,class:!0,href:!0});var Yv=r(zo);rp=n(Yv,"SPAN",{});var Jv=r(rp);q(Un.$$.fragment,Jv),Jv.forEach(t),Yv.forEach(t),Xm=h(rc),ip=n(rc,"SPAN",{});var Xv=r(ip);Zm=a(Xv,"TapasModel"),Xv.forEach(t),rc.forEach(t),qd=h(i),lt=n(i,"DIV",{class:!0});var As=r(lt);q(Rn.$$.fragment,As),eg=h(As),Gn=n(As,"P",{});var ic=r(Gn);tg=a(ic,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),hi=n(ic,"A",{href:!0});var Zv=r(hi);sg=a(Zv,"PreTrainedModel"),Zv.forEach(t),ag=a(ic,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic.forEach(t),og=h(As),Bn=n(As,"P",{});var lc=r(Bn);ng=a(lc,"This model is also a PyTorch "),Vn=n(lc,"A",{href:!0,rel:!0});var ew=r(Vn);rg=a(ew,"torch.nn.Module"),ew.forEach(t),ig=a(lc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lc.forEach(t),lg=h(As),Kn=n(As,"P",{});var pc=r(Kn);pg=a(pc,"This class is a small change compared to "),ui=n(pc,"A",{href:!0});var tw=r(ui);dg=a(tw,"BertModel"),tw.forEach(t),cg=a(pc,", taking into account the additional token type ids."),pc.forEach(t),hg=h(As),Yn=n(As,"P",{});var dc=r(Yn);ug=a(dc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Jn=n(dc,"A",{href:!0,rel:!0});var sw=r(Jn);mg=a(sw,`Attention is
all you need`),sw.forEach(t),gg=a(dc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),dc.forEach(t),fg=h(As),Ts=n(As,"DIV",{class:!0});var pn=r(Ts);q(Xn.$$.fragment,pn),_g=h(pn),Ja=n(pn,"P",{});var Qi=r(Ja);Tg=a(Qi,"The "),mi=n(Qi,"A",{href:!0});var aw=r(mi);bg=a(aw,"TapasModel"),aw.forEach(t),vg=a(Qi," forward method, overrides the "),lp=n(Qi,"CODE",{});var ow=r(lp);wg=a(ow,"__call__"),ow.forEach(t),kg=a(Qi," special method."),Qi.forEach(t),yg=h(pn),q(Co.$$.fragment,pn),qg=h(pn),q(Mo.$$.fragment,pn),pn.forEach(t),As.forEach(t),jd=h(i),Xa=n(i,"H2",{class:!0});var cc=r(Xa);Po=n(cc,"A",{id:!0,class:!0,href:!0});var nw=r(Po);pp=n(nw,"SPAN",{});var rw=r(pp);q(Zn.$$.fragment,rw),rw.forEach(t),nw.forEach(t),jg=h(cc),dp=n(cc,"SPAN",{});var iw=r(dp);$g=a(iw,"TapasForMaskedLM"),iw.forEach(t),cc.forEach(t),$d=h(i),cs=n(i,"DIV",{class:!0});var dn=r(cs);q(er.$$.fragment,dn),Eg=h(dn),Za=n(dn,"P",{});var Ii=r(Za);Fg=a(Ii,"Tapas Model with a "),cp=n(Ii,"CODE",{});var lw=r(cp);Ag=a(lw,"language modeling"),lw.forEach(t),xg=a(Ii,` head on top.
This model inherits from `),gi=n(Ii,"A",{href:!0});var pw=r(gi);zg=a(pw,"PreTrainedModel"),pw.forEach(t),Cg=a(Ii,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ii.forEach(t),Mg=h(dn),tr=n(dn,"P",{});var hc=r(tr);Pg=a(hc,"This model is also a PyTorch "),sr=n(hc,"A",{href:!0,rel:!0});var dw=r(sr);Sg=a(dw,"torch.nn.Module"),dw.forEach(t),Dg=a(hc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hc.forEach(t),Ng=h(dn),bs=n(dn,"DIV",{class:!0});var cn=r(bs);q(ar.$$.fragment,cn),Og=h(cn),eo=n(cn,"P",{});var Wi=r(eo);Lg=a(Wi,"The "),fi=n(Wi,"A",{href:!0});var cw=r(fi);Qg=a(cw,"TapasForMaskedLM"),cw.forEach(t),Ig=a(Wi," forward method, overrides the "),hp=n(Wi,"CODE",{});var hw=r(hp);Wg=a(hw,"__call__"),hw.forEach(t),Hg=a(Wi," special method."),Wi.forEach(t),Ug=h(cn),q(So.$$.fragment,cn),Rg=h(cn),q(Do.$$.fragment,cn),cn.forEach(t),dn.forEach(t),Ed=h(i),to=n(i,"H2",{class:!0});var uc=r(to);No=n(uc,"A",{id:!0,class:!0,href:!0});var uw=r(No);up=n(uw,"SPAN",{});var mw=r(up);q(or.$$.fragment,mw),mw.forEach(t),uw.forEach(t),Gg=h(uc),mp=n(uc,"SPAN",{});var gw=r(mp);Bg=a(gw,"TapasForSequenceClassification"),gw.forEach(t),uc.forEach(t),Fd=h(i),Ht=n(i,"DIV",{class:!0});var ka=r(Ht);q(nr.$$.fragment,ka),Vg=h(ka),gp=n(ka,"P",{});var fw=r(gp);Kg=a(fw,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),fw.forEach(t),Yg=h(ka),rr=n(ka,"P",{});var mc=r(rr);Jg=a(mc,"This model inherits from "),_i=n(mc,"A",{href:!0});var _w=r(_i);Xg=a(_w,"PreTrainedModel"),_w.forEach(t),Zg=a(mc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mc.forEach(t),ef=h(ka),ir=n(ka,"P",{});var gc=r(ir);tf=a(gc,"This model is also a PyTorch "),lr=n(gc,"A",{href:!0,rel:!0});var Tw=r(lr);sf=a(Tw,"torch.nn.Module"),Tw.forEach(t),af=a(gc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gc.forEach(t),of=h(ka),vs=n(ka,"DIV",{class:!0});var hn=r(vs);q(pr.$$.fragment,hn),nf=h(hn),so=n(hn,"P",{});var Hi=r(so);rf=a(Hi,"The "),Ti=n(Hi,"A",{href:!0});var bw=r(Ti);lf=a(bw,"TapasForSequenceClassification"),bw.forEach(t),pf=a(Hi," forward method, overrides the "),fp=n(Hi,"CODE",{});var vw=r(fp);df=a(vw,"__call__"),vw.forEach(t),cf=a(Hi," special method."),Hi.forEach(t),hf=h(hn),q(Oo.$$.fragment,hn),uf=h(hn),q(Lo.$$.fragment,hn),hn.forEach(t),ka.forEach(t),Ad=h(i),ao=n(i,"H2",{class:!0});var fc=r(ao);Qo=n(fc,"A",{id:!0,class:!0,href:!0});var ww=r(Qo);_p=n(ww,"SPAN",{});var kw=r(_p);q(dr.$$.fragment,kw),kw.forEach(t),ww.forEach(t),mf=h(fc),Tp=n(fc,"SPAN",{});var yw=r(Tp);gf=a(yw,"TapasForQuestionAnswering"),yw.forEach(t),fc.forEach(t),xd=h(i),Ut=n(i,"DIV",{class:!0});var ya=r(Ut);q(cr.$$.fragment,ya),ff=h(ya),oo=n(ya,"P",{});var Ui=r(oo);_f=a(Ui,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),bp=n(Ui,"CODE",{});var qw=r(bp);Tf=a(qw,"logits"),qw.forEach(t),bf=a(Ui," and optional "),vp=n(Ui,"CODE",{});var jw=r(vp);vf=a(jw,"logits_aggregation"),jw.forEach(t),wf=a(Ui,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Ui.forEach(t),kf=h(ya),hr=n(ya,"P",{});var _c=r(hr);yf=a(_c,"This model inherits from "),bi=n(_c,"A",{href:!0});var $w=r(bi);qf=a($w,"PreTrainedModel"),$w.forEach(t),jf=a(_c,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c.forEach(t),$f=h(ya),ur=n(ya,"P",{});var Tc=r(ur);Ef=a(Tc,"This model is also a PyTorch "),mr=n(Tc,"A",{href:!0,rel:!0});var Ew=r(mr);Ff=a(Ew,"torch.nn.Module"),Ew.forEach(t),Af=a(Tc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc.forEach(t),xf=h(ya),ws=n(ya,"DIV",{class:!0});var un=r(ws);q(gr.$$.fragment,un),zf=h(un),no=n(un,"P",{});var Ri=r(no);Cf=a(Ri,"The "),vi=n(Ri,"A",{href:!0});var Fw=r(vi);Mf=a(Fw,"TapasForQuestionAnswering"),Fw.forEach(t),Pf=a(Ri," forward method, overrides the "),wp=n(Ri,"CODE",{});var Aw=r(wp);Sf=a(Aw,"__call__"),Aw.forEach(t),Df=a(Ri," special method."),Ri.forEach(t),Nf=h(un),q(Io.$$.fragment,un),Of=h(un),q(Wo.$$.fragment,un),un.forEach(t),ya.forEach(t),zd=h(i),ro=n(i,"H2",{class:!0});var bc=r(ro);Ho=n(bc,"A",{id:!0,class:!0,href:!0});var xw=r(Ho);kp=n(xw,"SPAN",{});var zw=r(kp);q(fr.$$.fragment,zw),zw.forEach(t),xw.forEach(t),Lf=h(bc),yp=n(bc,"SPAN",{});var Cw=r(yp);Qf=a(Cw,"TFTapasModel"),Cw.forEach(t),bc.forEach(t),Cd=h(i),pt=n(i,"DIV",{class:!0});var xs=r(pt);q(_r.$$.fragment,xs),If=h(xs),qp=n(xs,"P",{});var Mw=r(qp);Wf=a(Mw,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Mw.forEach(t),Hf=h(xs),Tr=n(xs,"P",{});var vc=r(Tr);Uf=a(vc,"This model inherits from "),wi=n(vc,"A",{href:!0});var Pw=r(wi);Rf=a(Pw,"TFPreTrainedModel"),Pw.forEach(t),Gf=a(vc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vc.forEach(t),Bf=h(xs),br=n(xs,"P",{});var wc=r(br);Vf=a(wc,"This model is also a "),vr=n(wc,"A",{href:!0,rel:!0});var Sw=r(vr);Kf=a(Sw,"tf.keras.Model"),Sw.forEach(t),Yf=a(wc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wc.forEach(t),Jf=h(xs),q(Uo.$$.fragment,xs),Xf=h(xs),ks=n(xs,"DIV",{class:!0});var mn=r(ks);q(wr.$$.fragment,mn),Zf=h(mn),io=n(mn,"P",{});var Gi=r(io);e_=a(Gi,"The "),ki=n(Gi,"A",{href:!0});var Dw=r(ki);t_=a(Dw,"TFTapasModel"),Dw.forEach(t),s_=a(Gi," forward method, overrides the "),jp=n(Gi,"CODE",{});var Nw=r(jp);a_=a(Nw,"__call__"),Nw.forEach(t),o_=a(Gi," special method."),Gi.forEach(t),n_=h(mn),q(Ro.$$.fragment,mn),r_=h(mn),q(Go.$$.fragment,mn),mn.forEach(t),xs.forEach(t),Md=h(i),lo=n(i,"H2",{class:!0});var kc=r(lo);Bo=n(kc,"A",{id:!0,class:!0,href:!0});var Ow=r(Bo);$p=n(Ow,"SPAN",{});var Lw=r($p);q(kr.$$.fragment,Lw),Lw.forEach(t),Ow.forEach(t),i_=h(kc),Ep=n(kc,"SPAN",{});var Qw=r(Ep);l_=a(Qw,"TFTapasForMaskedLM"),Qw.forEach(t),kc.forEach(t),Pd=h(i),dt=n(i,"DIV",{class:!0});var zs=r(dt);q(yr.$$.fragment,zs),p_=h(zs),qr=n(zs,"P",{});var yc=r(qr);d_=a(yc,"Tapas Model with a "),Fp=n(yc,"CODE",{});var Iw=r(Fp);c_=a(Iw,"language modeling"),Iw.forEach(t),h_=a(yc," head on top."),yc.forEach(t),u_=h(zs),jr=n(zs,"P",{});var qc=r(jr);m_=a(qc,"This model inherits from "),yi=n(qc,"A",{href:!0});var Ww=r(yi);g_=a(Ww,"TFPreTrainedModel"),Ww.forEach(t),f_=a(qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qc.forEach(t),__=h(zs),$r=n(zs,"P",{});var jc=r($r);T_=a(jc,"This model is also a "),Er=n(jc,"A",{href:!0,rel:!0});var Hw=r(Er);b_=a(Hw,"tf.keras.Model"),Hw.forEach(t),v_=a(jc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jc.forEach(t),w_=h(zs),q(Vo.$$.fragment,zs),k_=h(zs),ys=n(zs,"DIV",{class:!0});var gn=r(ys);q(Fr.$$.fragment,gn),y_=h(gn),po=n(gn,"P",{});var Bi=r(po);q_=a(Bi,"The "),qi=n(Bi,"A",{href:!0});var Uw=r(qi);j_=a(Uw,"TFTapasForMaskedLM"),Uw.forEach(t),$_=a(Bi," forward method, overrides the "),Ap=n(Bi,"CODE",{});var Rw=r(Ap);E_=a(Rw,"__call__"),Rw.forEach(t),F_=a(Bi," special method."),Bi.forEach(t),A_=h(gn),q(Ko.$$.fragment,gn),x_=h(gn),q(Yo.$$.fragment,gn),gn.forEach(t),zs.forEach(t),Sd=h(i),co=n(i,"H2",{class:!0});var $c=r(co);Jo=n($c,"A",{id:!0,class:!0,href:!0});var Gw=r(Jo);xp=n(Gw,"SPAN",{});var Bw=r(xp);q(Ar.$$.fragment,Bw),Bw.forEach(t),Gw.forEach(t),z_=h($c),zp=n($c,"SPAN",{});var Vw=r(zp);C_=a(Vw,"TFTapasForSequenceClassification"),Vw.forEach(t),$c.forEach(t),Dd=h(i),ct=n(i,"DIV",{class:!0});var Cs=r(ct);q(xr.$$.fragment,Cs),M_=h(Cs),Cp=n(Cs,"P",{});var Kw=r(Cp);P_=a(Kw,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Kw.forEach(t),S_=h(Cs),zr=n(Cs,"P",{});var Ec=r(zr);D_=a(Ec,"This model inherits from "),ji=n(Ec,"A",{href:!0});var Yw=r(ji);N_=a(Yw,"TFPreTrainedModel"),Yw.forEach(t),O_=a(Ec,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec.forEach(t),L_=h(Cs),Cr=n(Cs,"P",{});var Fc=r(Cr);Q_=a(Fc,"This model is also a "),Mr=n(Fc,"A",{href:!0,rel:!0});var Jw=r(Mr);I_=a(Jw,"tf.keras.Model"),Jw.forEach(t),W_=a(Fc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fc.forEach(t),H_=h(Cs),q(Xo.$$.fragment,Cs),U_=h(Cs),qs=n(Cs,"DIV",{class:!0});var fn=r(qs);q(Pr.$$.fragment,fn),R_=h(fn),ho=n(fn,"P",{});var Vi=r(ho);G_=a(Vi,"The "),$i=n(Vi,"A",{href:!0});var Xw=r($i);B_=a(Xw,"TFTapasForSequenceClassification"),Xw.forEach(t),V_=a(Vi," forward method, overrides the "),Mp=n(Vi,"CODE",{});var Zw=r(Mp);K_=a(Zw,"__call__"),Zw.forEach(t),Y_=a(Vi," special method."),Vi.forEach(t),J_=h(fn),q(Zo.$$.fragment,fn),X_=h(fn),q(en.$$.fragment,fn),fn.forEach(t),Cs.forEach(t),Nd=h(i),uo=n(i,"H2",{class:!0});var Ac=r(uo);tn=n(Ac,"A",{id:!0,class:!0,href:!0});var ek=r(tn);Pp=n(ek,"SPAN",{});var tk=r(Pp);q(Sr.$$.fragment,tk),tk.forEach(t),ek.forEach(t),Z_=h(Ac),Sp=n(Ac,"SPAN",{});var sk=r(Sp);eT=a(sk,"TFTapasForQuestionAnswering"),sk.forEach(t),Ac.forEach(t),Od=h(i),ht=n(i,"DIV",{class:!0});var Ms=r(ht);q(Dr.$$.fragment,Ms),tT=h(Ms),mo=n(Ms,"P",{});var Ki=r(mo);sT=a(Ki,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Dp=n(Ki,"CODE",{});var ak=r(Dp);aT=a(ak,"logits"),ak.forEach(t),oT=a(Ki," and optional "),Np=n(Ki,"CODE",{});var ok=r(Np);nT=a(ok,"logits_aggregation"),ok.forEach(t),rT=a(Ki,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Ki.forEach(t),iT=h(Ms),Nr=n(Ms,"P",{});var xc=r(Nr);lT=a(xc,"This model inherits from "),Ei=n(xc,"A",{href:!0});var nk=r(Ei);pT=a(nk,"TFPreTrainedModel"),nk.forEach(t),dT=a(xc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xc.forEach(t),cT=h(Ms),Or=n(Ms,"P",{});var zc=r(Or);hT=a(zc,"This model is also a "),Lr=n(zc,"A",{href:!0,rel:!0});var rk=r(Lr);uT=a(rk,"tf.keras.Model"),rk.forEach(t),mT=a(zc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zc.forEach(t),gT=h(Ms),q(sn.$$.fragment,Ms),fT=h(Ms),js=n(Ms,"DIV",{class:!0});var _n=r(js);q(Qr.$$.fragment,_n),_T=h(_n),go=n(_n,"P",{});var Yi=r(go);TT=a(Yi,"The "),Fi=n(Yi,"A",{href:!0});var ik=r(Fi);bT=a(ik,"TFTapasForQuestionAnswering"),ik.forEach(t),vT=a(Yi," forward method, overrides the "),Op=n(Yi,"CODE",{});var lk=r(Op);wT=a(lk,"__call__"),lk.forEach(t),kT=a(Yi," special method."),Yi.forEach(t),yT=h(_n),q(an.$$.fragment,_n),qT=h(_n),q(on.$$.fragment,_n),_n.forEach(t),Ms.forEach(t),this.h()},h(){g(l,"name","hf:doc:metadata"),g(l,"content",JSON.stringify(Zk)),g(u,"id","tapas"),g(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(u,"href","#tapas"),g(p,"class","relative group"),g(U,"id","overview"),g(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(U,"href","#overview"),g(x,"class","relative group"),g(M,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),g(M,"rel","nofollow"),g(S,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),g(S,"rel","nofollow"),g(Y,"href","https://github.com/ppasupat/WikiTableQuestions"),g(Y,"rel","nofollow"),g(ne,"href","https://github.com/salesforce/WikiSQL"),g(ne,"rel","nofollow"),g(ke,"href","https://github.com/wenhuchen/Table-Fact-Checking"),g(ke,"rel","nofollow"),g(Ze,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),g(Ze,"rel","nofollow"),uk(gt.src,ha="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||g(gt,"src",ha),g(gt,"alt","drawing"),g(gt,"width","600"),g(tt,"href","https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html"),g(kt,"href","https://huggingface.co/nielsr"),g(kt,"rel","nofollow"),g(qt,"href","https://huggingface.co/kamalkraj"),g(qt,"rel","nofollow"),g($t,"href","https://github.com/google-research/tapas"),g($t,"rel","nofollow"),g(Bt,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasConfig"),g(Ct,"href","https://huggingface.co/models?search=tapas"),g(Ct,"rel","nofollow"),g(Ot,"href","https://github.com/google-research/tapas%3E"),g(Ot,"rel","nofollow"),g(st,"id","usage-finetuning"),g(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(st,"href","#usage-finetuning"),g(It,"class","relative group"),g(ms,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),g(fs,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),g(bn,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),g(bn,"rel","nofollow"),g(vn,"href","https://huggingface.co/models?search=tapas"),g(vn,"rel","nofollow"),g(wn,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),g(wn,"rel","nofollow"),g(kn,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),g(kn,"rel","nofollow"),g(yn,"href","https://github.com/NielsRogge/tapas_utils"),g(yn,"rel","nofollow"),g(ti,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer"),g(qn,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),g(qn,"rel","nofollow"),g(jn,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),g(jn,"rel","nofollow"),g(qo,"id","usage-inference"),g(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(qo,"href","#usage-inference"),g(Ra,"class","relative group"),g(En,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),g(En,"rel","nofollow"),g(Fn,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),g(Fn,"rel","nofollow"),g($o,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),g($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g($o,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),g(Ga,"class","relative group"),g(ai,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),g(Ba,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Eo,"id","transformers.TapasConfig"),g(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Eo,"href","#transformers.TapasConfig"),g(Va,"class","relative group"),g(oi,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasModel"),g(ni,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),g(Sn,"href","https://github.com/google-research/tapas/tree/master"),g(Sn,"rel","nofollow"),g(ps,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ao,"id","transformers.TapasTokenizer"),g(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ao,"href","#transformers.TapasTokenizer"),g(Ka,"class","relative group"),g(ri,"href","/docs/transformers/pr_highlight/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),g(ii,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer"),g(pi,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasTokenizer"),g(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(di,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),g(Wn,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),g(Wn,"rel","nofollow"),g(va,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ci,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(zo,"id","transformers.TapasModel"),g(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(zo,"href","#transformers.TapasModel"),g(Ya,"class","relative group"),g(hi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),g(Vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Vn,"rel","nofollow"),g(ui,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertModel"),g(Jn,"href","https://arxiv.org/abs/1706.03762"),g(Jn,"rel","nofollow"),g(mi,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasModel"),g(Ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Po,"id","transformers.TapasForMaskedLM"),g(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Po,"href","#transformers.TapasForMaskedLM"),g(Xa,"class","relative group"),g(gi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),g(sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(sr,"rel","nofollow"),g(fi,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasForMaskedLM"),g(bs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(cs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(No,"id","transformers.TapasForSequenceClassification"),g(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(No,"href","#transformers.TapasForSequenceClassification"),g(to,"class","relative group"),g(_i,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),g(lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(lr,"rel","nofollow"),g(Ti,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasForSequenceClassification"),g(vs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Qo,"id","transformers.TapasForQuestionAnswering"),g(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Qo,"href","#transformers.TapasForQuestionAnswering"),g(ao,"class","relative group"),g(bi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),g(mr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(mr,"rel","nofollow"),g(vi,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),g(ws,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ho,"id","transformers.TFTapasModel"),g(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ho,"href","#transformers.TFTapasModel"),g(ro,"class","relative group"),g(wi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),g(vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(vr,"rel","nofollow"),g(ki,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TFTapasModel"),g(ks,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Bo,"id","transformers.TFTapasForMaskedLM"),g(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Bo,"href","#transformers.TFTapasForMaskedLM"),g(lo,"class","relative group"),g(yi,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),g(Er,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Er,"rel","nofollow"),g(qi,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),g(ys,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Jo,"id","transformers.TFTapasForSequenceClassification"),g(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Jo,"href","#transformers.TFTapasForSequenceClassification"),g(co,"class","relative group"),g(ji,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),g(Mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Mr,"rel","nofollow"),g($i,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),g(qs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(tn,"id","transformers.TFTapasForQuestionAnswering"),g(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(tn,"href","#transformers.TFTapasForQuestionAnswering"),g(uo,"class","relative group"),g(Ei,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),g(Lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Lr,"rel","nofollow"),g(Fi,"href","/docs/transformers/pr_highlight/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),g(js,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,_){e(document.head,l),m(i,b,_),m(i,p,_),e(p,u),e(u,T),j(d,T,null),e(p,f),e(p,A),e(A,k),m(i,N,_),m(i,x,_),e(x,U),e(U,B),j(V,B,null),e(x,R),e(x,K),e(K,re),m(i,W,_),m(i,L,_),e(L,w),e(L,M),e(M,G),e(L,C),m(i,O,_),m(i,ee,_),e(ee,te),m(i,ce,_),m(i,oe,_),e(oe,se),e(se,S),e(S,Q),e(se,H),e(oe,X),e(oe,I),e(I,Y),e(Y,fe),e(I,ue),e(oe,_e),e(oe,me),e(me,ne),e(ne,qe),e(me,ie),m(i,ve,_),m(i,v,_),e(v,D),m(i,be,_),m(i,xe,_),e(xe,we),m(i,le,_),m(i,ze,_),e(ze,Me),e(Me,Z),m(i,pe,_),m(i,de,_),e(de,De),e(de,je),e(je,Te),e(de,Ne),e(de,ke),e(ke,Ae),e(de,Oe),e(de,Ze),e(Ze,Ss),e(de,Ds),m(i,mt,_),m(i,gt,_),m(i,ft,_),m(i,_t,_),e(_t,Ns),e(_t,tt),e(tt,Os),e(_t,Ls),m(i,Ke,_),m(i,Pe,_),e(Pe,Qs),e(Pe,kt),e(kt,ye),e(Pe,yt),e(Pe,qt),e(qt,Is),e(Pe,jt),e(Pe,$t),e($t,Ws),e(Pe,Et),m(i,hs,_),m(i,Gt,_),e(Gt,Ft),m(i,us,_),m(i,Ye,_),e(Ye,$e),e($e,Hs),e($e,At),e(At,ae),e($e,ot),e($e,Bt),e(Bt,Us),e($e,xt),e($e,Yt),e(Yt,Rs),e($e,zt),e($e,Ct),e(Ct,Gs),e($e,Mt),e($e,Jt),e(Jt,Bs),e($e,Pt),e($e,Xt),e(Xt,Vs),e($e,St),e(Ye,Ks),e(Ye,Le),e(Le,Dt),e(Le,Zt),e(Zt,Ys),e(Le,Nt),e(Le,es),e(es,Js),e(Le,ts),e(Le,Ue),e(Ue,ss),e(Le,Ee),e(Le,as),e(as,nt),e(Le,Xs),e(Le,Ot),e(Ot,Lt),e(Le,Zs),e(Ye,ea),e(Ye,Re),e(Re,ta),e(Re,os),e(os,ns),e(Re,et),e(Re,Qt),e(Qt,z),e(Re,J),e(Ye,qa),e(Ye,sa),e(sa,ja),m(i,ua,_),m(i,It,_),e(It,st),e(st,aa),j(rt,aa,null),e(It,$a),e(It,oa),e(oa,Ea),m(i,ma,_),m(i,Ie,_),e(Ie,rs),e(Ie,ms),e(ms,Ge),e(Ie,Fa),m(i,ga,_),m(i,gs,_),e(gs,na),e(na,is),m(i,fa,_),m(i,ge,_),e(ge,Aa),e(ge,fs),e(fs,xa),e(ge,za),m(i,_a,_),m(i,Tt,_),e(Tt,ra),e(ra,ls),e(Tt,Ca),e(Tt,Fe),e(Fe,Ma),e(Fe,ia),e(ia,Pa),e(Fe,Sa),e(Tt,Da),e(Tt,he),e(he,Na),e(he,la),e(la,Oa),e(he,La),m(i,Ta,_),m(i,_s,_),e(_s,Qa),m(i,ba,_),m(i,Ce,_),e(Ce,pa),e(pa,Wt),e(Wt,da),e(da,Ji),e(Ji,Mc),e(Wt,Pc),e(Wt,Xi),e(Xi,Zi),e(Zi,Sc),e(Wt,Dc),e(Wt,el),e(el,tl),e(tl,Nc),e(Ce,Oc),e(Ce,Ia),e(Ia,Wa),e(Wa,sl),e(sl,Lc),e(Wa,Qc),e(Wa,al),e(al,Ic),e(Wa,Wc),e(Wa,ol),e(ol,Hc),e(Ia,Uc),e(Ia,Ha),e(Ha,nl),e(nl,Rc),e(Ha,Gc),e(Ha,rl),e(rl,Bc),e(Ha,Vc),e(Ha,il),e(il,Kc),e(Ia,Yc),e(Ia,Ua),e(Ua,ll),e(ll,Jc),e(Ua,Xc),e(Ua,pl),e(pl,Zc),e(Ua,eh),e(Ua,dl),e(dl,th),m(i,sd,_),j(To,i,_),m(i,ad,_),m(i,bo,_),e(bo,sh),e(bo,bn),e(bn,ah),e(bo,oh),m(i,od,_),m(i,vo,_),e(vo,nh),e(vo,vn),e(vn,rh),e(vo,ih),m(i,nd,_),m(i,Ur,_),e(Ur,cl),e(cl,lh),m(i,rd,_),m(i,wo,_),e(wo,ph),e(wo,wn),e(wn,dh),e(wo,ch),m(i,id,_),m(i,We,_),e(We,Rr),e(Rr,hl),e(hl,hh),e(Rr,uh),e(We,mh),e(We,Gr),e(Gr,ul),e(ul,gh),e(Gr,fh),e(We,_h),e(We,Br),e(Br,ml),e(ml,Th),e(Br,bh),e(We,vh),e(We,Vr),e(Vr,gl),e(gl,wh),e(Vr,kh),e(We,yh),e(We,Kr),e(Kr,fl),e(fl,qh),e(Kr,jh),e(We,$h),e(We,Yr),e(Yr,_l),e(_l,Eh),e(Yr,Fh),e(We,Ah),e(We,Jr),e(Jr,Tl),e(Tl,xh),e(Jr,zh),e(We,Ch),e(We,Xr),e(Xr,bl),e(bl,Mh),e(Xr,Ph),e(We,Sh),e(We,Zr),e(Zr,vl),e(vl,Dh),e(Zr,Nh),m(i,ld,_),m(i,bt,_),e(bt,Oh),e(bt,kn),e(kn,Lh),e(bt,Qh),e(bt,yn),e(yn,Ih),e(bt,Wh),e(bt,wl),e(wl,Hh),e(bt,Uh),e(bt,kl),e(kl,Rh),e(bt,Gh),e(bt,yl),e(yl,Bh),e(bt,Vh),m(i,pd,_),m(i,ei,_),e(ei,ql),e(ql,Kh),m(i,dd,_),j(ko,i,_),m(i,cd,_),m(i,Se,_),e(Se,Yh),e(Se,jl),e(jl,Jh),e(Se,Xh),e(Se,$l),e($l,Zh),e(Se,eu),e(Se,El),e(El,tu),e(Se,su),e(Se,Fl),e(Fl,au),e(Se,ou),e(Se,Al),e(Al,nu),e(Se,ru),e(Se,xl),e(xl,iu),e(Se,lu),e(Se,ti),e(ti,pu),e(Se,du),e(Se,qn),e(qn,cu),e(Se,hu),e(Se,jn),e(jn,uu),e(Se,mu),m(i,hd,_),m(i,si,_),e(si,gu),m(i,ud,_),j(yo,i,_),m(i,md,_),m(i,Ra,_),e(Ra,qo),e(qo,zl),j($n,zl,null),e(Ra,fu),e(Ra,Cl),e(Cl,_u),m(i,gd,_),j(jo,i,_),m(i,fd,_),m(i,vt,_),e(vt,Tu),e(vt,Ml),e(Ml,bu),e(vt,vu),e(vt,Pl),e(Pl,wu),e(vt,ku),e(vt,Sl),e(Sl,yu),e(vt,qu),e(vt,En),e(En,ju),e(vt,$u),e(vt,Fn),e(Fn,Eu),e(vt,Fu),m(i,_d,_),m(i,Ga,_),e(Ga,$o),e($o,Dl),j(An,Dl,null),e(Ga,Au),e(Ga,Nl),e(Nl,xu),m(i,Td,_),m(i,Ba,_),j(xn,Ba,null),e(Ba,zu),e(Ba,zn),e(zn,Cu),e(zn,ai),e(ai,Mu),e(zn,Pu),m(i,bd,_),m(i,Va,_),e(Va,Eo),e(Eo,Ol),j(Cn,Ol,null),e(Va,Su),e(Va,Ll),e(Ll,Du),m(i,vd,_),m(i,ps,_),j(Mn,ps,null),e(ps,Nu),e(ps,ds),e(ds,Ou),e(ds,oi),e(oi,Lu),e(ds,Qu),e(ds,Ql),e(Ql,Iu),e(ds,Wu),e(ds,Il),e(Il,Hu),e(ds,Uu),e(ds,ni),e(ni,Ru),e(ds,Gu),e(ps,Bu),e(ps,Pn),e(Pn,Vu),e(Pn,Sn),e(Sn,Ku),e(Pn,Yu),e(ps,Ju),j(Fo,ps,null),m(i,wd,_),m(i,Ka,_),e(Ka,Ao),e(Ao,Wl),j(Dn,Wl,null),e(Ka,Xu),e(Ka,Hl),e(Hl,Zu),m(i,kd,_),m(i,Be,_),j(Nn,Be,null),e(Be,em),e(Be,Ul),e(Ul,tm),e(Be,sm),e(Be,Qe),e(Qe,am),e(Qe,ri),e(ri,om),e(Qe,nm),e(Qe,ii),e(ii,rm),e(Qe,im),e(Qe,Rl),e(Rl,lm),e(Qe,pm),e(Qe,Gl),e(Gl,dm),e(Qe,cm),e(Qe,Bl),e(Bl,hm),e(Qe,um),e(Qe,Vl),e(Vl,mm),e(Qe,gm),e(Qe,Kl),e(Kl,fm),e(Qe,_m),e(Qe,Yl),e(Yl,Tm),e(Qe,bm),e(Qe,Jl),e(Jl,vm),e(Qe,wm),e(Be,km),e(Be,it),e(it,Xl),e(Xl,ym),e(it,qm),e(it,Zl),e(Zl,jm),e(it,$m),e(it,ep),e(ep,Em),e(it,Fm),e(it,tp),e(tp,Am),e(it,xm),e(it,sp),e(sp,zm),e(it,Cm),e(it,ap),e(ap,Mm),e(it,Pm),e(it,op),e(op,Sm),e(Be,Dm),e(Be,li),e(li,pi),e(pi,Nm),e(li,Om),e(Be,Lm),e(Be,xo),j(On,xo,null),e(xo,Qm),e(xo,np),e(np,Im),e(Be,Wm),e(Be,va),j(Ln,va,null),e(va,Hm),e(va,Qn),e(Qn,Um),e(Qn,di),e(di,Rm),e(Qn,Gm),e(va,Bm),e(va,In),e(In,Vm),e(In,Wn),e(Wn,Km),e(In,Ym),e(Be,Jm),e(Be,ci),j(Hn,ci,null),m(i,yd,_),m(i,Ya,_),e(Ya,zo),e(zo,rp),j(Un,rp,null),e(Ya,Xm),e(Ya,ip),e(ip,Zm),m(i,qd,_),m(i,lt,_),j(Rn,lt,null),e(lt,eg),e(lt,Gn),e(Gn,tg),e(Gn,hi),e(hi,sg),e(Gn,ag),e(lt,og),e(lt,Bn),e(Bn,ng),e(Bn,Vn),e(Vn,rg),e(Bn,ig),e(lt,lg),e(lt,Kn),e(Kn,pg),e(Kn,ui),e(ui,dg),e(Kn,cg),e(lt,hg),e(lt,Yn),e(Yn,ug),e(Yn,Jn),e(Jn,mg),e(Yn,gg),e(lt,fg),e(lt,Ts),j(Xn,Ts,null),e(Ts,_g),e(Ts,Ja),e(Ja,Tg),e(Ja,mi),e(mi,bg),e(Ja,vg),e(Ja,lp),e(lp,wg),e(Ja,kg),e(Ts,yg),j(Co,Ts,null),e(Ts,qg),j(Mo,Ts,null),m(i,jd,_),m(i,Xa,_),e(Xa,Po),e(Po,pp),j(Zn,pp,null),e(Xa,jg),e(Xa,dp),e(dp,$g),m(i,$d,_),m(i,cs,_),j(er,cs,null),e(cs,Eg),e(cs,Za),e(Za,Fg),e(Za,cp),e(cp,Ag),e(Za,xg),e(Za,gi),e(gi,zg),e(Za,Cg),e(cs,Mg),e(cs,tr),e(tr,Pg),e(tr,sr),e(sr,Sg),e(tr,Dg),e(cs,Ng),e(cs,bs),j(ar,bs,null),e(bs,Og),e(bs,eo),e(eo,Lg),e(eo,fi),e(fi,Qg),e(eo,Ig),e(eo,hp),e(hp,Wg),e(eo,Hg),e(bs,Ug),j(So,bs,null),e(bs,Rg),j(Do,bs,null),m(i,Ed,_),m(i,to,_),e(to,No),e(No,up),j(or,up,null),e(to,Gg),e(to,mp),e(mp,Bg),m(i,Fd,_),m(i,Ht,_),j(nr,Ht,null),e(Ht,Vg),e(Ht,gp),e(gp,Kg),e(Ht,Yg),e(Ht,rr),e(rr,Jg),e(rr,_i),e(_i,Xg),e(rr,Zg),e(Ht,ef),e(Ht,ir),e(ir,tf),e(ir,lr),e(lr,sf),e(ir,af),e(Ht,of),e(Ht,vs),j(pr,vs,null),e(vs,nf),e(vs,so),e(so,rf),e(so,Ti),e(Ti,lf),e(so,pf),e(so,fp),e(fp,df),e(so,cf),e(vs,hf),j(Oo,vs,null),e(vs,uf),j(Lo,vs,null),m(i,Ad,_),m(i,ao,_),e(ao,Qo),e(Qo,_p),j(dr,_p,null),e(ao,mf),e(ao,Tp),e(Tp,gf),m(i,xd,_),m(i,Ut,_),j(cr,Ut,null),e(Ut,ff),e(Ut,oo),e(oo,_f),e(oo,bp),e(bp,Tf),e(oo,bf),e(oo,vp),e(vp,vf),e(oo,wf),e(Ut,kf),e(Ut,hr),e(hr,yf),e(hr,bi),e(bi,qf),e(hr,jf),e(Ut,$f),e(Ut,ur),e(ur,Ef),e(ur,mr),e(mr,Ff),e(ur,Af),e(Ut,xf),e(Ut,ws),j(gr,ws,null),e(ws,zf),e(ws,no),e(no,Cf),e(no,vi),e(vi,Mf),e(no,Pf),e(no,wp),e(wp,Sf),e(no,Df),e(ws,Nf),j(Io,ws,null),e(ws,Of),j(Wo,ws,null),m(i,zd,_),m(i,ro,_),e(ro,Ho),e(Ho,kp),j(fr,kp,null),e(ro,Lf),e(ro,yp),e(yp,Qf),m(i,Cd,_),m(i,pt,_),j(_r,pt,null),e(pt,If),e(pt,qp),e(qp,Wf),e(pt,Hf),e(pt,Tr),e(Tr,Uf),e(Tr,wi),e(wi,Rf),e(Tr,Gf),e(pt,Bf),e(pt,br),e(br,Vf),e(br,vr),e(vr,Kf),e(br,Yf),e(pt,Jf),j(Uo,pt,null),e(pt,Xf),e(pt,ks),j(wr,ks,null),e(ks,Zf),e(ks,io),e(io,e_),e(io,ki),e(ki,t_),e(io,s_),e(io,jp),e(jp,a_),e(io,o_),e(ks,n_),j(Ro,ks,null),e(ks,r_),j(Go,ks,null),m(i,Md,_),m(i,lo,_),e(lo,Bo),e(Bo,$p),j(kr,$p,null),e(lo,i_),e(lo,Ep),e(Ep,l_),m(i,Pd,_),m(i,dt,_),j(yr,dt,null),e(dt,p_),e(dt,qr),e(qr,d_),e(qr,Fp),e(Fp,c_),e(qr,h_),e(dt,u_),e(dt,jr),e(jr,m_),e(jr,yi),e(yi,g_),e(jr,f_),e(dt,__),e(dt,$r),e($r,T_),e($r,Er),e(Er,b_),e($r,v_),e(dt,w_),j(Vo,dt,null),e(dt,k_),e(dt,ys),j(Fr,ys,null),e(ys,y_),e(ys,po),e(po,q_),e(po,qi),e(qi,j_),e(po,$_),e(po,Ap),e(Ap,E_),e(po,F_),e(ys,A_),j(Ko,ys,null),e(ys,x_),j(Yo,ys,null),m(i,Sd,_),m(i,co,_),e(co,Jo),e(Jo,xp),j(Ar,xp,null),e(co,z_),e(co,zp),e(zp,C_),m(i,Dd,_),m(i,ct,_),j(xr,ct,null),e(ct,M_),e(ct,Cp),e(Cp,P_),e(ct,S_),e(ct,zr),e(zr,D_),e(zr,ji),e(ji,N_),e(zr,O_),e(ct,L_),e(ct,Cr),e(Cr,Q_),e(Cr,Mr),e(Mr,I_),e(Cr,W_),e(ct,H_),j(Xo,ct,null),e(ct,U_),e(ct,qs),j(Pr,qs,null),e(qs,R_),e(qs,ho),e(ho,G_),e(ho,$i),e($i,B_),e(ho,V_),e(ho,Mp),e(Mp,K_),e(ho,Y_),e(qs,J_),j(Zo,qs,null),e(qs,X_),j(en,qs,null),m(i,Nd,_),m(i,uo,_),e(uo,tn),e(tn,Pp),j(Sr,Pp,null),e(uo,Z_),e(uo,Sp),e(Sp,eT),m(i,Od,_),m(i,ht,_),j(Dr,ht,null),e(ht,tT),e(ht,mo),e(mo,sT),e(mo,Dp),e(Dp,aT),e(mo,oT),e(mo,Np),e(Np,nT),e(mo,rT),e(ht,iT),e(ht,Nr),e(Nr,lT),e(Nr,Ei),e(Ei,pT),e(Nr,dT),e(ht,cT),e(ht,Or),e(Or,hT),e(Or,Lr),e(Lr,uT),e(Or,mT),e(ht,gT),j(sn,ht,null),e(ht,fT),e(ht,js),j(Qr,js,null),e(js,_T),e(js,go),e(go,TT),e(go,Fi),e(Fi,bT),e(go,vT),e(go,Op),e(Op,wT),e(go,kT),e(js,yT),j(an,js,null),e(js,qT),j(on,js,null),Ld=!0},p(i,[_]){const Ir={};_&2&&(Ir.$$scope={dirty:_,ctx:i}),To.$set(Ir);const Lp={};_&2&&(Lp.$$scope={dirty:_,ctx:i}),ko.$set(Lp);const Qp={};_&2&&(Qp.$$scope={dirty:_,ctx:i}),yo.$set(Qp);const Ip={};_&2&&(Ip.$$scope={dirty:_,ctx:i}),jo.$set(Ip);const Wr={};_&2&&(Wr.$$scope={dirty:_,ctx:i}),Fo.$set(Wr);const Wp={};_&2&&(Wp.$$scope={dirty:_,ctx:i}),Co.$set(Wp);const Hp={};_&2&&(Hp.$$scope={dirty:_,ctx:i}),Mo.$set(Hp);const Up={};_&2&&(Up.$$scope={dirty:_,ctx:i}),So.$set(Up);const Hr={};_&2&&(Hr.$$scope={dirty:_,ctx:i}),Do.$set(Hr);const Rp={};_&2&&(Rp.$$scope={dirty:_,ctx:i}),Oo.$set(Rp);const Gp={};_&2&&(Gp.$$scope={dirty:_,ctx:i}),Lo.$set(Gp);const fo={};_&2&&(fo.$$scope={dirty:_,ctx:i}),Io.$set(fo);const Ai={};_&2&&(Ai.$$scope={dirty:_,ctx:i}),Wo.$set(Ai);const Bp={};_&2&&(Bp.$$scope={dirty:_,ctx:i}),Uo.$set(Bp);const xi={};_&2&&(xi.$$scope={dirty:_,ctx:i}),Ro.$set(xi);const Vp={};_&2&&(Vp.$$scope={dirty:_,ctx:i}),Go.$set(Vp);const zi={};_&2&&(zi.$$scope={dirty:_,ctx:i}),Vo.$set(zi);const Kp={};_&2&&(Kp.$$scope={dirty:_,ctx:i}),Ko.$set(Kp);const Yp={};_&2&&(Yp.$$scope={dirty:_,ctx:i}),Yo.$set(Yp);const Jp={};_&2&&(Jp.$$scope={dirty:_,ctx:i}),Xo.$set(Jp);const Xp={};_&2&&(Xp.$$scope={dirty:_,ctx:i}),Zo.$set(Xp);const Zp={};_&2&&(Zp.$$scope={dirty:_,ctx:i}),en.$set(Zp);const ca={};_&2&&(ca.$$scope={dirty:_,ctx:i}),sn.$set(ca);const ed={};_&2&&(ed.$$scope={dirty:_,ctx:i}),an.$set(ed);const td={};_&2&&(td.$$scope={dirty:_,ctx:i}),on.$set(td)},i(i){Ld||($(d.$$.fragment,i),$(V.$$.fragment,i),$(rt.$$.fragment,i),$(To.$$.fragment,i),$(ko.$$.fragment,i),$(yo.$$.fragment,i),$($n.$$.fragment,i),$(jo.$$.fragment,i),$(An.$$.fragment,i),$(xn.$$.fragment,i),$(Cn.$$.fragment,i),$(Mn.$$.fragment,i),$(Fo.$$.fragment,i),$(Dn.$$.fragment,i),$(Nn.$$.fragment,i),$(On.$$.fragment,i),$(Ln.$$.fragment,i),$(Hn.$$.fragment,i),$(Un.$$.fragment,i),$(Rn.$$.fragment,i),$(Xn.$$.fragment,i),$(Co.$$.fragment,i),$(Mo.$$.fragment,i),$(Zn.$$.fragment,i),$(er.$$.fragment,i),$(ar.$$.fragment,i),$(So.$$.fragment,i),$(Do.$$.fragment,i),$(or.$$.fragment,i),$(nr.$$.fragment,i),$(pr.$$.fragment,i),$(Oo.$$.fragment,i),$(Lo.$$.fragment,i),$(dr.$$.fragment,i),$(cr.$$.fragment,i),$(gr.$$.fragment,i),$(Io.$$.fragment,i),$(Wo.$$.fragment,i),$(fr.$$.fragment,i),$(_r.$$.fragment,i),$(Uo.$$.fragment,i),$(wr.$$.fragment,i),$(Ro.$$.fragment,i),$(Go.$$.fragment,i),$(kr.$$.fragment,i),$(yr.$$.fragment,i),$(Vo.$$.fragment,i),$(Fr.$$.fragment,i),$(Ko.$$.fragment,i),$(Yo.$$.fragment,i),$(Ar.$$.fragment,i),$(xr.$$.fragment,i),$(Xo.$$.fragment,i),$(Pr.$$.fragment,i),$(Zo.$$.fragment,i),$(en.$$.fragment,i),$(Sr.$$.fragment,i),$(Dr.$$.fragment,i),$(sn.$$.fragment,i),$(Qr.$$.fragment,i),$(an.$$.fragment,i),$(on.$$.fragment,i),Ld=!0)},o(i){E(d.$$.fragment,i),E(V.$$.fragment,i),E(rt.$$.fragment,i),E(To.$$.fragment,i),E(ko.$$.fragment,i),E(yo.$$.fragment,i),E($n.$$.fragment,i),E(jo.$$.fragment,i),E(An.$$.fragment,i),E(xn.$$.fragment,i),E(Cn.$$.fragment,i),E(Mn.$$.fragment,i),E(Fo.$$.fragment,i),E(Dn.$$.fragment,i),E(Nn.$$.fragment,i),E(On.$$.fragment,i),E(Ln.$$.fragment,i),E(Hn.$$.fragment,i),E(Un.$$.fragment,i),E(Rn.$$.fragment,i),E(Xn.$$.fragment,i),E(Co.$$.fragment,i),E(Mo.$$.fragment,i),E(Zn.$$.fragment,i),E(er.$$.fragment,i),E(ar.$$.fragment,i),E(So.$$.fragment,i),E(Do.$$.fragment,i),E(or.$$.fragment,i),E(nr.$$.fragment,i),E(pr.$$.fragment,i),E(Oo.$$.fragment,i),E(Lo.$$.fragment,i),E(dr.$$.fragment,i),E(cr.$$.fragment,i),E(gr.$$.fragment,i),E(Io.$$.fragment,i),E(Wo.$$.fragment,i),E(fr.$$.fragment,i),E(_r.$$.fragment,i),E(Uo.$$.fragment,i),E(wr.$$.fragment,i),E(Ro.$$.fragment,i),E(Go.$$.fragment,i),E(kr.$$.fragment,i),E(yr.$$.fragment,i),E(Vo.$$.fragment,i),E(Fr.$$.fragment,i),E(Ko.$$.fragment,i),E(Yo.$$.fragment,i),E(Ar.$$.fragment,i),E(xr.$$.fragment,i),E(Xo.$$.fragment,i),E(Pr.$$.fragment,i),E(Zo.$$.fragment,i),E(en.$$.fragment,i),E(Sr.$$.fragment,i),E(Dr.$$.fragment,i),E(sn.$$.fragment,i),E(Qr.$$.fragment,i),E(an.$$.fragment,i),E(on.$$.fragment,i),Ld=!1},d(i){t(l),i&&t(b),i&&t(p),F(d),i&&t(N),i&&t(x),F(V),i&&t(W),i&&t(L),i&&t(O),i&&t(ee),i&&t(ce),i&&t(oe),i&&t(ve),i&&t(v),i&&t(be),i&&t(xe),i&&t(le),i&&t(ze),i&&t(pe),i&&t(de),i&&t(mt),i&&t(gt),i&&t(ft),i&&t(_t),i&&t(Ke),i&&t(Pe),i&&t(hs),i&&t(Gt),i&&t(us),i&&t(Ye),i&&t(ua),i&&t(It),F(rt),i&&t(ma),i&&t(Ie),i&&t(ga),i&&t(gs),i&&t(fa),i&&t(ge),i&&t(_a),i&&t(Tt),i&&t(Ta),i&&t(_s),i&&t(ba),i&&t(Ce),i&&t(sd),F(To,i),i&&t(ad),i&&t(bo),i&&t(od),i&&t(vo),i&&t(nd),i&&t(Ur),i&&t(rd),i&&t(wo),i&&t(id),i&&t(We),i&&t(ld),i&&t(bt),i&&t(pd),i&&t(ei),i&&t(dd),F(ko,i),i&&t(cd),i&&t(Se),i&&t(hd),i&&t(si),i&&t(ud),F(yo,i),i&&t(md),i&&t(Ra),F($n),i&&t(gd),F(jo,i),i&&t(fd),i&&t(vt),i&&t(_d),i&&t(Ga),F(An),i&&t(Td),i&&t(Ba),F(xn),i&&t(bd),i&&t(Va),F(Cn),i&&t(vd),i&&t(ps),F(Mn),F(Fo),i&&t(wd),i&&t(Ka),F(Dn),i&&t(kd),i&&t(Be),F(Nn),F(On),F(Ln),F(Hn),i&&t(yd),i&&t(Ya),F(Un),i&&t(qd),i&&t(lt),F(Rn),F(Xn),F(Co),F(Mo),i&&t(jd),i&&t(Xa),F(Zn),i&&t($d),i&&t(cs),F(er),F(ar),F(So),F(Do),i&&t(Ed),i&&t(to),F(or),i&&t(Fd),i&&t(Ht),F(nr),F(pr),F(Oo),F(Lo),i&&t(Ad),i&&t(ao),F(dr),i&&t(xd),i&&t(Ut),F(cr),F(gr),F(Io),F(Wo),i&&t(zd),i&&t(ro),F(fr),i&&t(Cd),i&&t(pt),F(_r),F(Uo),F(wr),F(Ro),F(Go),i&&t(Md),i&&t(lo),F(kr),i&&t(Pd),i&&t(dt),F(yr),F(Vo),F(Fr),F(Ko),F(Yo),i&&t(Sd),i&&t(co),F(Ar),i&&t(Dd),i&&t(ct),F(xr),F(Xo),F(Pr),F(Zo),F(en),i&&t(Nd),i&&t(uo),F(Sr),i&&t(Od),i&&t(ht),F(Dr),F(sn),F(Qr),F(an),F(on)}}}const Zk={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function ey(P){return mk(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ly extends pk{constructor(l){super();dk(this,l,ey,Xk,ck,{})}}export{ly as default,Zk as metadata};
