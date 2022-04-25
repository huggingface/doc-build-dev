import{S as Vy,i as Ky,s as Yy,e as o,k as d,w as $,t as s,M as Jy,c as n,d as t,m as p,a as r,x as E,h as a,b as h,N as Xy,F as e,g as u,y as F,q as A,o as z,B as x,v as Zy,L as rn}from"../../chunks/vendor-6b77c823.js";import{T as Ms}from"../../chunks/Tip-39098574.js";import{D as He}from"../../chunks/Docstring-1088f2fb.js";import{C as Ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Rt}from"../../chunks/IconCopyLink-7a11ce68.js";import{F as Pc,M as ln}from"../../chunks/Markdown-9acf6d91.js";function ek(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O;return T=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),I=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=o("p"),_=s(`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),c=o("a"),f=s("torch-scatter"),b=s(" dependency:"),v=d(),$(T.$$.fragment),k=d(),y=o("p"),D=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=o("a"),H=s("TapasConfig"),B=s(", and then create a "),V=o("a"),R=s("TapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=d(),$(I.$$.fragment),this.h()},l(w){l=n(w,"P",{});var M=r(l);_=a(M,`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),c=n(M,"A",{href:!0,rel:!0});var G=r(c);f=a(G,"torch-scatter"),G.forEach(t),b=a(M," dependency:"),M.forEach(t),v=p(w),E(T.$$.fragment,w),k=p(w),y=n(w,"P",{});var C=r(y);D=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=n(C,"A",{href:!0});var N=r(q);H=a(N,"TapasConfig"),N.forEach(t),B=a(C,", and then create a "),V=n(C,"A",{href:!0});var ee=r(V);R=a(ee,"TapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=p(w),E(I.$$.fragment,w),this.h()},h(){h(c,"href","https://github.com/rusty1s/pytorch_scatter"),h(c,"rel","nofollow"),h(q,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig"),h(V,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(w,M){u(w,l,M),e(l,_),e(l,c),e(c,f),e(l,b),u(w,v,M),F(T,w,M),u(w,k,M),u(w,y,M),e(y,D),e(y,q),e(q,H),e(y,B),e(y,V),e(V,R),e(y,K),u(w,re,M),F(I,w,M),O=!0},p:rn,i(w){O||(A(T.$$.fragment,w),A(I.$$.fragment,w),O=!0)},o(w){z(T.$$.fragment,w),z(I.$$.fragment,w),O=!1},d(w){w&&t(l),w&&t(v),x(T,w),w&&t(k),w&&t(y),w&&t(re),x(I,w)}}}function tk(U){let l,_;return l=new ln({props:{$$slots:{default:[ek]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function sk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O;return T=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),I=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=o("p"),_=s("Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),c=o("a"),f=s("tensorflow_probability"),b=s(" dependency:"),v=d(),$(T.$$.fragment),k=d(),y=o("p"),D=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=o("a"),H=s("TapasConfig"),B=s(", and then create a "),V=o("a"),R=s("TFTapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=d(),$(I.$$.fragment),this.h()},l(w){l=n(w,"P",{});var M=r(l);_=a(M,"Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),c=n(M,"A",{href:!0,rel:!0});var G=r(c);f=a(G,"tensorflow_probability"),G.forEach(t),b=a(M," dependency:"),M.forEach(t),v=p(w),E(T.$$.fragment,w),k=p(w),y=n(w,"P",{});var C=r(y);D=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=n(C,"A",{href:!0});var N=r(q);H=a(N,"TapasConfig"),N.forEach(t),B=a(C,", and then create a "),V=n(C,"A",{href:!0});var ee=r(V);R=a(ee,"TFTapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=p(w),E(I.$$.fragment,w),this.h()},h(){h(c,"href","https://github.com/tensorflow/probability"),h(c,"rel","nofollow"),h(q,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig"),h(V,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(w,M){u(w,l,M),e(l,_),e(l,c),e(c,f),e(l,b),u(w,v,M),F(T,w,M),u(w,k,M),u(w,y,M),e(y,D),e(y,q),e(q,H),e(y,B),e(y,V),e(V,R),e(y,K),u(w,re,M),F(I,w,M),O=!0},p:rn,i(w){O||(A(T.$$.fragment,w),A(I.$$.fragment,w),O=!0)},o(w){z(T.$$.fragment,w),z(I.$$.fragment,w),O=!1},d(w){w&&t(l),w&&t(v),x(T,w),w&&t(k),w&&t(y),w&&t(re),x(I,w)}}}function ak(U){let l,_;return l=new ln({props:{$$slots:{default:[sk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function ok(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,ve,g,S,be,ze,we,le,xe,Me,Z,de,pe,De,je,Te,Ne,ye,Ae,Oe,Ze,Ps,Ss,mt,ft,pa,gt,_t,Ds,tt,Ns,Os,Ke,Pe,Ls,yt,ke,kt,qt,Qs,jt,$t,Is,Et,Ts,Gt,Ft,bs,Ye,$e,Ws,At,ae,ot,Bt,Hs,zt,os,Us,xt,Ct,Rs,Mt,ns,Gs,Pt,rs,Bs,St,Vs,Le,Dt,is,Ks,Nt,ls,Ys,ds,Ue,ps,Ee,cs,nt,Js,Ot,Lt,Xs,Zs,Re,ea,hs,us,et,Qt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=<span class="hljs-number">32</span>)`}}),{c(){l=o("p"),_=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=o("a"),f=s("TapasTokenizer"),b=s(" to convert table-question pairs into "),v=o("code"),T=s("input_ids"),k=s(", "),y=o("code"),D=s("attention_mask"),q=s(", "),H=o("code"),B=s("token_type_ids"),V=s(" and so on. Again, based on which of the three cases you picked above, "),R=o("a"),K=s("TapasForQuestionAnswering"),re=s(` requires different
inputs to be fine-tuned:`),I=d(),O=o("table"),w=o("thead"),M=o("tr"),G=o("th"),C=o("strong"),N=s("Task"),ee=d(),te=o("th"),ce=o("strong"),oe=s("Required inputs"),se=d(),P=o("tbody"),L=o("tr"),W=o("td"),X=s("Conversational"),Q=d(),Y=o("td"),ge=o("code"),ue=s("input_ids"),_e=s(", "),me=o("code"),ne=s("attention_mask"),qe=s(", "),ie=o("code"),ve=s("token_type_ids"),g=s(", "),S=o("code"),be=s("labels"),ze=d(),we=o("tr"),le=o("td"),xe=s("Weak supervision for aggregation"),Me=d(),Z=o("td"),de=o("code"),pe=s("input_ids"),De=s(", "),je=o("code"),Te=s("attention_mask"),Ne=s(", "),ye=o("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=o("code"),Ps=s("labels"),Ss=s(", "),mt=o("code"),ft=s("numeric_values"),pa=s(", "),gt=o("code"),_t=s("numeric_values_scale"),Ds=s(", "),tt=o("code"),Ns=s("float_answer"),Os=d(),Ke=o("tr"),Pe=o("td"),Ls=s("Strong supervision for aggregation"),yt=d(),ke=o("td"),kt=o("code"),qt=s("input ids"),Qs=s(", "),jt=o("code"),$t=s("attention mask"),Is=s(", "),Et=o("code"),Ts=s("token type ids"),Gt=s(", "),Ft=o("code"),bs=s("labels"),Ye=s(", "),$e=o("code"),Ws=s("aggregation_labels"),At=d(),ae=o("p"),ot=o("a"),Bt=s("TapasTokenizer"),Hs=s(" creates the "),zt=o("code"),os=s("labels"),Us=s(", "),xt=o("code"),Ct=s("numeric_values"),Rs=s(" and "),Mt=o("code"),ns=s("numeric_values_scale"),Gs=s(" based on the "),Pt=o("code"),rs=s("answer_coordinates"),Bs=s(" and "),St=o("code"),Vs=s("answer_text"),Le=s(" columns of the TSV file. The "),Dt=o("code"),is=s("float_answer"),Ks=s(" and "),Nt=o("code"),ls=s("aggregation_labels"),Ys=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ds=d(),$(Ue.$$.fragment),ps=d(),Ee=o("p"),cs=s("Note that "),nt=o("a"),Js=s("TapasTokenizer"),Ot=s(" expects the data of the table to be "),Lt=o("strong"),Xs=s("text-only"),Zs=s(". You can use "),Re=o("code"),ea=s(".astype(str)"),hs=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),us=d(),$(et.$$.fragment),this.h()},l(j){l=n(j,"P",{});var J=r(l);_=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=n(J,"A",{href:!0});var Aa=r(c);f=a(Aa,"TapasTokenizer"),Aa.forEach(t),b=a(J," to convert table-question pairs into "),v=n(J,"CODE",{});var ta=r(v);T=a(ta,"input_ids"),ta.forEach(t),k=a(J,", "),y=n(J,"CODE",{});var za=r(y);D=a(za,"attention_mask"),za.forEach(t),q=a(J,", "),H=n(J,"CODE",{});var ca=r(H);B=a(ca,"token_type_ids"),ca.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),R=n(J,"A",{href:!0});var It=r(R);K=a(It,"TapasForQuestionAnswering"),It.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),I=p(j),O=n(j,"TABLE",{});var st=r(O);w=n(st,"THEAD",{});var sa=r(w);M=n(sa,"TR",{});var rt=r(M);G=n(rt,"TH",{});var xa=r(G);C=n(xa,"STRONG",{});var aa=r(C);N=a(aa,"Task"),aa.forEach(t),xa.forEach(t),ee=p(rt),te=n(rt,"TH",{});var Ca=r(te);ce=n(Ca,"STRONG",{});var ha=r(ce);oe=a(ha,"Required inputs"),ha.forEach(t),Ca.forEach(t),rt.forEach(t),sa.forEach(t),se=p(st),P=n(st,"TBODY",{});var Ie=r(P);L=n(Ie,"TR",{});var ms=r(L);W=n(ms,"TD",{});var vs=r(W);X=a(vs,"Conversational"),vs.forEach(t),Q=p(ms),Y=n(ms,"TD",{});var Ge=r(Y);ge=n(Ge,"CODE",{});var Ma=r(ge);ue=a(Ma,"input_ids"),Ma.forEach(t),_e=a(Ge,", "),me=n(Ge,"CODE",{});var ua=r(me);ne=a(ua,"attention_mask"),ua.forEach(t),qe=a(Ge,", "),ie=n(Ge,"CODE",{});var ws=r(ie);ve=a(ws,"token_type_ids"),ws.forEach(t),g=a(Ge,", "),S=n(Ge,"CODE",{});var oa=r(S);be=a(oa,"labels"),oa.forEach(t),Ge.forEach(t),ms.forEach(t),ze=p(Ie),we=n(Ie,"TR",{});var fs=r(we);le=n(fs,"TD",{});var ma=r(le);xe=a(ma,"Weak supervision for aggregation"),ma.forEach(t),Me=p(fs),Z=n(fs,"TD",{});var fe=r(Z);de=n(fe,"CODE",{});var Pa=r(de);pe=a(Pa,"input_ids"),Pa.forEach(t),De=a(fe,", "),je=n(fe,"CODE",{});var ys=r(je);Te=a(ys,"attention_mask"),ys.forEach(t),Ne=a(fe,", "),ye=n(fe,"CODE",{});var Sa=r(ye);Ae=a(Sa,"token_type_ids"),Sa.forEach(t),Oe=a(fe,", "),Ze=n(fe,"CODE",{});var Da=r(Ze);Ps=a(Da,"labels"),Da.forEach(t),Ss=a(fe,", "),mt=n(fe,"CODE",{});var fa=r(mt);ft=a(fa,"numeric_values"),fa.forEach(t),pa=a(fe,", "),gt=n(fe,"CODE",{});var Tt=r(gt);_t=a(Tt,"numeric_values_scale"),Tt.forEach(t),Ds=a(fe,", "),tt=n(fe,"CODE",{});var na=r(tt);Ns=a(na,"float_answer"),na.forEach(t),fe.forEach(t),fs.forEach(t),Os=p(Ie),Ke=n(Ie,"TR",{});var gs=r(Ke);Pe=n(gs,"TD",{});var Na=r(Pe);Ls=a(Na,"Strong supervision for aggregation"),Na.forEach(t),yt=p(gs),ke=n(gs,"TD",{});var Fe=r(ke);kt=n(Fe,"CODE",{});var Oa=r(kt);qt=a(Oa,"input ids"),Oa.forEach(t),Qs=a(Fe,", "),jt=n(Fe,"CODE",{});var ra=r(jt);$t=a(ra,"attention mask"),ra.forEach(t),Is=a(Fe,", "),Et=n(Fe,"CODE",{});var La=r(Et);Ts=a(La,"token type ids"),La.forEach(t),Gt=a(Fe,", "),Ft=n(Fe,"CODE",{});var Qa=r(Ft);bs=a(Qa,"labels"),Qa.forEach(t),Ye=a(Fe,", "),$e=n(Fe,"CODE",{});var Ia=r($e);Ws=a(Ia,"aggregation_labels"),Ia.forEach(t),Fe.forEach(t),gs.forEach(t),Ie.forEach(t),st.forEach(t),At=p(j),ae=n(j,"P",{});var he=r(ae);ot=n(he,"A",{href:!0});var Wa=r(ot);Bt=a(Wa,"TapasTokenizer"),Wa.forEach(t),Hs=a(he," creates the "),zt=n(he,"CODE",{});var ia=r(zt);os=a(ia,"labels"),ia.forEach(t),Us=a(he,", "),xt=n(he,"CODE",{});var Ha=r(xt);Ct=a(Ha,"numeric_values"),Ha.forEach(t),Rs=a(he," and "),Mt=n(he,"CODE",{});var Ua=r(Mt);ns=a(Ua,"numeric_values_scale"),Ua.forEach(t),Gs=a(he," based on the "),Pt=n(he,"CODE",{});var ga=r(Pt);rs=a(ga,"answer_coordinates"),ga.forEach(t),Bs=a(he," and "),St=n(he,"CODE",{});var ks=r(St);Vs=a(ks,"answer_text"),ks.forEach(t),Le=a(he," columns of the TSV file. The "),Dt=n(he,"CODE",{});var Ra=r(Dt);is=a(Ra,"float_answer"),Ra.forEach(t),Ks=a(he," and "),Nt=n(he,"CODE",{});var _a=r(Nt);ls=a(_a,"aggregation_labels"),_a.forEach(t),Ys=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ds=p(j),E(Ue.$$.fragment,j),ps=p(j),Ee=n(j,"P",{});var Ce=r(Ee);cs=a(Ce,"Note that "),nt=n(Ce,"A",{href:!0});var la=r(nt);Js=a(la,"TapasTokenizer"),la.forEach(t),Ot=a(Ce," expects the data of the table to be "),Lt=n(Ce,"STRONG",{});var Wt=r(Lt);Xs=a(Wt,"text-only"),Wt.forEach(t),Zs=a(Ce,". You can use "),Re=n(Ce,"CODE",{});var da=r(Re);ea=a(da,".astype(str)"),da.forEach(t),hs=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),us=p(j),E(et.$$.fragment,j),this.h()},h(){h(c,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer"),h(R,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(ot,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer"),h(nt,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer")},m(j,J){u(j,l,J),e(l,_),e(l,c),e(c,f),e(l,b),e(l,v),e(v,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),u(j,I,J),u(j,O,J),e(O,w),e(w,M),e(M,G),e(G,C),e(C,N),e(M,ee),e(M,te),e(te,ce),e(ce,oe),e(O,se),e(O,P),e(P,L),e(L,W),e(W,X),e(L,Q),e(L,Y),e(Y,ge),e(ge,ue),e(Y,_e),e(Y,me),e(me,ne),e(Y,qe),e(Y,ie),e(ie,ve),e(Y,g),e(Y,S),e(S,be),e(P,ze),e(P,we),e(we,le),e(le,xe),e(we,Me),e(we,Z),e(Z,de),e(de,pe),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ye),e(ye,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ps),e(Z,Ss),e(Z,mt),e(mt,ft),e(Z,pa),e(Z,gt),e(gt,_t),e(Z,Ds),e(Z,tt),e(tt,Ns),e(P,Os),e(P,Ke),e(Ke,Pe),e(Pe,Ls),e(Ke,yt),e(Ke,ke),e(ke,kt),e(kt,qt),e(ke,Qs),e(ke,jt),e(jt,$t),e(ke,Is),e(ke,Et),e(Et,Ts),e(ke,Gt),e(ke,Ft),e(Ft,bs),e(ke,Ye),e(ke,$e),e($e,Ws),u(j,At,J),u(j,ae,J),e(ae,ot),e(ot,Bt),e(ae,Hs),e(ae,zt),e(zt,os),e(ae,Us),e(ae,xt),e(xt,Ct),e(ae,Rs),e(ae,Mt),e(Mt,ns),e(ae,Gs),e(ae,Pt),e(Pt,rs),e(ae,Bs),e(ae,St),e(St,Vs),e(ae,Le),e(ae,Dt),e(Dt,is),e(ae,Ks),e(ae,Nt),e(Nt,ls),e(ae,Ys),u(j,ds,J),F(Ue,j,J),u(j,ps,J),u(j,Ee,J),e(Ee,cs),e(Ee,nt),e(nt,Js),e(Ee,Ot),e(Ee,Lt),e(Lt,Xs),e(Ee,Zs),e(Ee,Re),e(Re,ea),e(Ee,hs),u(j,us,J),F(et,j,J),Qt=!0},p:rn,i(j){Qt||(A(Ue.$$.fragment,j),A(et.$$.fragment,j),Qt=!0)},o(j){z(Ue.$$.fragment,j),z(et.$$.fragment,j),Qt=!1},d(j){j&&t(l),j&&t(I),j&&t(O),j&&t(At),j&&t(ae),j&&t(ds),x(Ue,j),j&&t(ps),j&&t(Ee),j&&t(us),x(et,j)}}}function nk(U){let l,_;return l=new ln({props:{$$slots:{default:[ok]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function rk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,ve,g,S,be,ze,we,le,xe,Me,Z,de,pe,De,je,Te,Ne,ye,Ae,Oe,Ze,Ps,Ss,mt,ft,pa,gt,_t,Ds,tt,Ns,Os,Ke,Pe,Ls,yt,ke,kt,qt,Qs,jt,$t,Is,Et,Ts,Gt,Ft,bs,Ye,$e,Ws,At,ae,ot,Bt,Hs,zt,os,Us,xt,Ct,Rs,Mt,ns,Gs,Pt,rs,Bs,St,Vs,Le,Dt,is,Ks,Nt,ls,Ys,ds,Ue,ps,Ee,cs,nt,Js,Ot,Lt,Xs,Zs,Re,ea,hs,us,et,Qt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)`}}),{c(){l=o("p"),_=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=o("a"),f=s("TapasTokenizer"),b=s(" to convert table-question pairs into "),v=o("code"),T=s("input_ids"),k=s(", "),y=o("code"),D=s("attention_mask"),q=s(", "),H=o("code"),B=s("token_type_ids"),V=s(" and so on. Again, based on which of the three cases you picked above, "),R=o("a"),K=s("TFTapasForQuestionAnswering"),re=s(` requires different
inputs to be fine-tuned:`),I=d(),O=o("table"),w=o("thead"),M=o("tr"),G=o("th"),C=o("strong"),N=s("Task"),ee=d(),te=o("th"),ce=o("strong"),oe=s("Required inputs"),se=d(),P=o("tbody"),L=o("tr"),W=o("td"),X=s("Conversational"),Q=d(),Y=o("td"),ge=o("code"),ue=s("input_ids"),_e=s(", "),me=o("code"),ne=s("attention_mask"),qe=s(", "),ie=o("code"),ve=s("token_type_ids"),g=s(", "),S=o("code"),be=s("labels"),ze=d(),we=o("tr"),le=o("td"),xe=s("Weak supervision for aggregation"),Me=d(),Z=o("td"),de=o("code"),pe=s("input_ids"),De=s(", "),je=o("code"),Te=s("attention_mask"),Ne=s(", "),ye=o("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=o("code"),Ps=s("labels"),Ss=s(", "),mt=o("code"),ft=s("numeric_values"),pa=s(", "),gt=o("code"),_t=s("numeric_values_scale"),Ds=s(", "),tt=o("code"),Ns=s("float_answer"),Os=d(),Ke=o("tr"),Pe=o("td"),Ls=s("Strong supervision for aggregation"),yt=d(),ke=o("td"),kt=o("code"),qt=s("input ids"),Qs=s(", "),jt=o("code"),$t=s("attention mask"),Is=s(", "),Et=o("code"),Ts=s("token type ids"),Gt=s(", "),Ft=o("code"),bs=s("labels"),Ye=s(", "),$e=o("code"),Ws=s("aggregation_labels"),At=d(),ae=o("p"),ot=o("a"),Bt=s("TapasTokenizer"),Hs=s(" creates the "),zt=o("code"),os=s("labels"),Us=s(", "),xt=o("code"),Ct=s("numeric_values"),Rs=s(" and "),Mt=o("code"),ns=s("numeric_values_scale"),Gs=s(" based on the "),Pt=o("code"),rs=s("answer_coordinates"),Bs=s(" and "),St=o("code"),Vs=s("answer_text"),Le=s(" columns of the TSV file. The "),Dt=o("code"),is=s("float_answer"),Ks=s(" and "),Nt=o("code"),ls=s("aggregation_labels"),Ys=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ds=d(),$(Ue.$$.fragment),ps=d(),Ee=o("p"),cs=s("Note that "),nt=o("a"),Js=s("TapasTokenizer"),Ot=s(" expects the data of the table to be "),Lt=o("strong"),Xs=s("text-only"),Zs=s(". You can use "),Re=o("code"),ea=s(".astype(str)"),hs=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),us=d(),$(et.$$.fragment),this.h()},l(j){l=n(j,"P",{});var J=r(l);_=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=n(J,"A",{href:!0});var Aa=r(c);f=a(Aa,"TapasTokenizer"),Aa.forEach(t),b=a(J," to convert table-question pairs into "),v=n(J,"CODE",{});var ta=r(v);T=a(ta,"input_ids"),ta.forEach(t),k=a(J,", "),y=n(J,"CODE",{});var za=r(y);D=a(za,"attention_mask"),za.forEach(t),q=a(J,", "),H=n(J,"CODE",{});var ca=r(H);B=a(ca,"token_type_ids"),ca.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),R=n(J,"A",{href:!0});var It=r(R);K=a(It,"TFTapasForQuestionAnswering"),It.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),I=p(j),O=n(j,"TABLE",{});var st=r(O);w=n(st,"THEAD",{});var sa=r(w);M=n(sa,"TR",{});var rt=r(M);G=n(rt,"TH",{});var xa=r(G);C=n(xa,"STRONG",{});var aa=r(C);N=a(aa,"Task"),aa.forEach(t),xa.forEach(t),ee=p(rt),te=n(rt,"TH",{});var Ca=r(te);ce=n(Ca,"STRONG",{});var ha=r(ce);oe=a(ha,"Required inputs"),ha.forEach(t),Ca.forEach(t),rt.forEach(t),sa.forEach(t),se=p(st),P=n(st,"TBODY",{});var Ie=r(P);L=n(Ie,"TR",{});var ms=r(L);W=n(ms,"TD",{});var vs=r(W);X=a(vs,"Conversational"),vs.forEach(t),Q=p(ms),Y=n(ms,"TD",{});var Ge=r(Y);ge=n(Ge,"CODE",{});var Ma=r(ge);ue=a(Ma,"input_ids"),Ma.forEach(t),_e=a(Ge,", "),me=n(Ge,"CODE",{});var ua=r(me);ne=a(ua,"attention_mask"),ua.forEach(t),qe=a(Ge,", "),ie=n(Ge,"CODE",{});var ws=r(ie);ve=a(ws,"token_type_ids"),ws.forEach(t),g=a(Ge,", "),S=n(Ge,"CODE",{});var oa=r(S);be=a(oa,"labels"),oa.forEach(t),Ge.forEach(t),ms.forEach(t),ze=p(Ie),we=n(Ie,"TR",{});var fs=r(we);le=n(fs,"TD",{});var ma=r(le);xe=a(ma,"Weak supervision for aggregation"),ma.forEach(t),Me=p(fs),Z=n(fs,"TD",{});var fe=r(Z);de=n(fe,"CODE",{});var Pa=r(de);pe=a(Pa,"input_ids"),Pa.forEach(t),De=a(fe,", "),je=n(fe,"CODE",{});var ys=r(je);Te=a(ys,"attention_mask"),ys.forEach(t),Ne=a(fe,", "),ye=n(fe,"CODE",{});var Sa=r(ye);Ae=a(Sa,"token_type_ids"),Sa.forEach(t),Oe=a(fe,", "),Ze=n(fe,"CODE",{});var Da=r(Ze);Ps=a(Da,"labels"),Da.forEach(t),Ss=a(fe,", "),mt=n(fe,"CODE",{});var fa=r(mt);ft=a(fa,"numeric_values"),fa.forEach(t),pa=a(fe,", "),gt=n(fe,"CODE",{});var Tt=r(gt);_t=a(Tt,"numeric_values_scale"),Tt.forEach(t),Ds=a(fe,", "),tt=n(fe,"CODE",{});var na=r(tt);Ns=a(na,"float_answer"),na.forEach(t),fe.forEach(t),fs.forEach(t),Os=p(Ie),Ke=n(Ie,"TR",{});var gs=r(Ke);Pe=n(gs,"TD",{});var Na=r(Pe);Ls=a(Na,"Strong supervision for aggregation"),Na.forEach(t),yt=p(gs),ke=n(gs,"TD",{});var Fe=r(ke);kt=n(Fe,"CODE",{});var Oa=r(kt);qt=a(Oa,"input ids"),Oa.forEach(t),Qs=a(Fe,", "),jt=n(Fe,"CODE",{});var ra=r(jt);$t=a(ra,"attention mask"),ra.forEach(t),Is=a(Fe,", "),Et=n(Fe,"CODE",{});var La=r(Et);Ts=a(La,"token type ids"),La.forEach(t),Gt=a(Fe,", "),Ft=n(Fe,"CODE",{});var Qa=r(Ft);bs=a(Qa,"labels"),Qa.forEach(t),Ye=a(Fe,", "),$e=n(Fe,"CODE",{});var Ia=r($e);Ws=a(Ia,"aggregation_labels"),Ia.forEach(t),Fe.forEach(t),gs.forEach(t),Ie.forEach(t),st.forEach(t),At=p(j),ae=n(j,"P",{});var he=r(ae);ot=n(he,"A",{href:!0});var Wa=r(ot);Bt=a(Wa,"TapasTokenizer"),Wa.forEach(t),Hs=a(he," creates the "),zt=n(he,"CODE",{});var ia=r(zt);os=a(ia,"labels"),ia.forEach(t),Us=a(he,", "),xt=n(he,"CODE",{});var Ha=r(xt);Ct=a(Ha,"numeric_values"),Ha.forEach(t),Rs=a(he," and "),Mt=n(he,"CODE",{});var Ua=r(Mt);ns=a(Ua,"numeric_values_scale"),Ua.forEach(t),Gs=a(he," based on the "),Pt=n(he,"CODE",{});var ga=r(Pt);rs=a(ga,"answer_coordinates"),ga.forEach(t),Bs=a(he," and "),St=n(he,"CODE",{});var ks=r(St);Vs=a(ks,"answer_text"),ks.forEach(t),Le=a(he," columns of the TSV file. The "),Dt=n(he,"CODE",{});var Ra=r(Dt);is=a(Ra,"float_answer"),Ra.forEach(t),Ks=a(he," and "),Nt=n(he,"CODE",{});var _a=r(Nt);ls=a(_a,"aggregation_labels"),_a.forEach(t),Ys=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ds=p(j),E(Ue.$$.fragment,j),ps=p(j),Ee=n(j,"P",{});var Ce=r(Ee);cs=a(Ce,"Note that "),nt=n(Ce,"A",{href:!0});var la=r(nt);Js=a(la,"TapasTokenizer"),la.forEach(t),Ot=a(Ce," expects the data of the table to be "),Lt=n(Ce,"STRONG",{});var Wt=r(Lt);Xs=a(Wt,"text-only"),Wt.forEach(t),Zs=a(Ce,". You can use "),Re=n(Ce,"CODE",{});var da=r(Re);ea=a(da,".astype(str)"),da.forEach(t),hs=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),us=p(j),E(et.$$.fragment,j),this.h()},h(){h(c,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer"),h(R,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(ot,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer"),h(nt,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer")},m(j,J){u(j,l,J),e(l,_),e(l,c),e(c,f),e(l,b),e(l,v),e(v,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),u(j,I,J),u(j,O,J),e(O,w),e(w,M),e(M,G),e(G,C),e(C,N),e(M,ee),e(M,te),e(te,ce),e(ce,oe),e(O,se),e(O,P),e(P,L),e(L,W),e(W,X),e(L,Q),e(L,Y),e(Y,ge),e(ge,ue),e(Y,_e),e(Y,me),e(me,ne),e(Y,qe),e(Y,ie),e(ie,ve),e(Y,g),e(Y,S),e(S,be),e(P,ze),e(P,we),e(we,le),e(le,xe),e(we,Me),e(we,Z),e(Z,de),e(de,pe),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ye),e(ye,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ps),e(Z,Ss),e(Z,mt),e(mt,ft),e(Z,pa),e(Z,gt),e(gt,_t),e(Z,Ds),e(Z,tt),e(tt,Ns),e(P,Os),e(P,Ke),e(Ke,Pe),e(Pe,Ls),e(Ke,yt),e(Ke,ke),e(ke,kt),e(kt,qt),e(ke,Qs),e(ke,jt),e(jt,$t),e(ke,Is),e(ke,Et),e(Et,Ts),e(ke,Gt),e(ke,Ft),e(Ft,bs),e(ke,Ye),e(ke,$e),e($e,Ws),u(j,At,J),u(j,ae,J),e(ae,ot),e(ot,Bt),e(ae,Hs),e(ae,zt),e(zt,os),e(ae,Us),e(ae,xt),e(xt,Ct),e(ae,Rs),e(ae,Mt),e(Mt,ns),e(ae,Gs),e(ae,Pt),e(Pt,rs),e(ae,Bs),e(ae,St),e(St,Vs),e(ae,Le),e(ae,Dt),e(Dt,is),e(ae,Ks),e(ae,Nt),e(Nt,ls),e(ae,Ys),u(j,ds,J),F(Ue,j,J),u(j,ps,J),u(j,Ee,J),e(Ee,cs),e(Ee,nt),e(nt,Js),e(Ee,Ot),e(Ee,Lt),e(Lt,Xs),e(Ee,Zs),e(Ee,Re),e(Re,ea),e(Ee,hs),u(j,us,J),F(et,j,J),Qt=!0},p:rn,i(j){Qt||(A(Ue.$$.fragment,j),A(et.$$.fragment,j),Qt=!0)},o(j){z(Ue.$$.fragment,j),z(et.$$.fragment,j),Qt=!1},d(j){j&&t(l),j&&t(I),j&&t(O),j&&t(At),j&&t(ae),j&&t(ds),x(Ue,j),j&&t(ps),j&&t(Ee),j&&t(us),x(et,j)}}}function ik(U){let l,_;return l=new ln({props:{$$slots:{default:[rk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function lk(U){let l,_,c,f,b,v,T,k;return T=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

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
<span class="hljs-meta">... </span>        optimizer.step()`}}),{c(){l=o("p"),_=s("You can then fine-tune "),c=o("a"),f=s("TapasForQuestionAnswering"),b=s(" as follows (shown here for the weak supervision for aggregation case):"),v=d(),$(T.$$.fragment),this.h()},l(y){l=n(y,"P",{});var D=r(l);_=a(D,"You can then fine-tune "),c=n(D,"A",{href:!0});var q=r(c);f=a(q,"TapasForQuestionAnswering"),q.forEach(t),b=a(D," as follows (shown here for the weak supervision for aggregation case):"),D.forEach(t),v=p(y),E(T.$$.fragment,y),this.h()},h(){h(c,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(y,D){u(y,l,D),e(l,_),e(l,c),e(c,f),e(l,b),u(y,v,D),F(T,y,D),k=!0},p:rn,i(y){k||(A(T.$$.fragment,y),k=!0)},o(y){z(T.$$.fragment,y),k=!1},d(y){y&&t(l),y&&t(v),x(T,y)}}}function dk(U){let l,_;return l=new ln({props:{$$slots:{default:[lk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function pk(U){let l,_,c,f,b,v,T,k;return T=new Ve({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}),{c(){l=o("p"),_=s("You can then fine-tune "),c=o("a"),f=s("TFTapasForQuestionAnswering"),b=s(" as follows (shown here for the weak supervision for aggregation case):"),v=d(),$(T.$$.fragment),this.h()},l(y){l=n(y,"P",{});var D=r(l);_=a(D,"You can then fine-tune "),c=n(D,"A",{href:!0});var q=r(c);f=a(q,"TFTapasForQuestionAnswering"),q.forEach(t),b=a(D," as follows (shown here for the weak supervision for aggregation case):"),D.forEach(t),v=p(y),E(T.$$.fragment,y),this.h()},h(){h(c,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(y,D){u(y,l,D),e(l,_),e(l,c),e(c,f),e(l,b),u(y,v,D),F(T,y,D),k=!0},p:rn,i(y){k||(A(T.$$.fragment,y),k=!0)},o(y){z(T.$$.fragment,y),k=!1},d(y){y&&t(l),y&&t(v),x(T,y)}}}function ck(U){let l,_;return l=new ln({props:{$$slots:{default:[pk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function hk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W;return L=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=o("p"),_=s("Here we explain how you can use "),c=o("a"),f=s("TapasForQuestionAnswering"),b=s(" or "),v=o("a"),T=s("TFTapasForQuestionAnswering"),k=s(" for inference (i.e. making predictions on new data). For inference, only "),y=o("code"),D=s("input_ids"),q=s(", "),H=o("code"),B=s("attention_mask"),V=s(" and "),R=o("code"),K=s("token_type_ids"),re=s(" (which you can obtain using "),I=o("a"),O=s("TapasTokenizer"),w=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=o("code"),G=s("convert_logits_to_predictions"),C=s(" method to convert these into predicted coordinates and optional aggregation indices."),N=d(),ee=o("p"),te=s("However, note that inference is "),ce=o("strong"),oe=s("different"),se=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),P=d(),$(L.$$.fragment),this.h()},l(X){l=n(X,"P",{});var Q=r(l);_=a(Q,"Here we explain how you can use "),c=n(Q,"A",{href:!0});var Y=r(c);f=a(Y,"TapasForQuestionAnswering"),Y.forEach(t),b=a(Q," or "),v=n(Q,"A",{href:!0});var ge=r(v);T=a(ge,"TFTapasForQuestionAnswering"),ge.forEach(t),k=a(Q," for inference (i.e. making predictions on new data). For inference, only "),y=n(Q,"CODE",{});var ue=r(y);D=a(ue,"input_ids"),ue.forEach(t),q=a(Q,", "),H=n(Q,"CODE",{});var _e=r(H);B=a(_e,"attention_mask"),_e.forEach(t),V=a(Q," and "),R=n(Q,"CODE",{});var me=r(R);K=a(me,"token_type_ids"),me.forEach(t),re=a(Q," (which you can obtain using "),I=n(Q,"A",{href:!0});var ne=r(I);O=a(ne,"TapasTokenizer"),ne.forEach(t),w=a(Q,") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=n(Q,"CODE",{});var qe=r(M);G=a(qe,"convert_logits_to_predictions"),qe.forEach(t),C=a(Q," method to convert these into predicted coordinates and optional aggregation indices."),Q.forEach(t),N=p(X),ee=n(X,"P",{});var ie=r(ee);te=a(ie,"However, note that inference is "),ce=n(ie,"STRONG",{});var ve=r(ce);oe=a(ve,"different"),ve.forEach(t),se=a(ie," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ie.forEach(t),P=p(X),E(L.$$.fragment,X),this.h()},h(){h(c,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(v,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(I,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer")},m(X,Q){u(X,l,Q),e(l,_),e(l,c),e(c,f),e(l,b),e(l,v),e(v,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),e(l,I),e(I,O),e(l,w),e(l,M),e(M,G),e(l,C),u(X,N,Q),u(X,ee,Q),e(ee,te),e(ee,ce),e(ce,oe),e(ee,se),u(X,P,Q),F(L,X,Q),W=!0},p:rn,i(X){W||(A(L.$$.fragment,X),W=!0)},o(X){z(L.$$.fragment,X),W=!1},d(X){X&&t(l),X&&t(N),X&&t(ee),X&&t(P),x(L,X)}}}function uk(U){let l,_;return l=new ln({props:{$$slots:{default:[hk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function mk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se;return oe=new Ve({props:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
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
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=o("p"),_=s("Here we explain how you can use "),c=o("a"),f=s("TFTapasForQuestionAnswering"),b=s(" for inference (i.e. making predictions on new data). For inference, only "),v=o("code"),T=s("input_ids"),k=s(", "),y=o("code"),D=s("attention_mask"),q=s(" and "),H=o("code"),B=s("token_type_ids"),V=s(" (which you can obtain using "),R=o("a"),K=s("TapasTokenizer"),re=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),I=o("code"),O=s("convert_logits_to_predictions"),w=s(" method to convert these into predicted coordinates and optional aggregation indices."),M=d(),G=o("p"),C=s("However, note that inference is "),N=o("strong"),ee=s("different"),te=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ce=d(),$(oe.$$.fragment),this.h()},l(P){l=n(P,"P",{});var L=r(l);_=a(L,"Here we explain how you can use "),c=n(L,"A",{href:!0});var W=r(c);f=a(W,"TFTapasForQuestionAnswering"),W.forEach(t),b=a(L," for inference (i.e. making predictions on new data). For inference, only "),v=n(L,"CODE",{});var X=r(v);T=a(X,"input_ids"),X.forEach(t),k=a(L,", "),y=n(L,"CODE",{});var Q=r(y);D=a(Q,"attention_mask"),Q.forEach(t),q=a(L," and "),H=n(L,"CODE",{});var Y=r(H);B=a(Y,"token_type_ids"),Y.forEach(t),V=a(L," (which you can obtain using "),R=n(L,"A",{href:!0});var ge=r(R);K=a(ge,"TapasTokenizer"),ge.forEach(t),re=a(L,") have to be provided to the model to obtain the logits. Next, you can use the handy "),I=n(L,"CODE",{});var ue=r(I);O=a(ue,"convert_logits_to_predictions"),ue.forEach(t),w=a(L," method to convert these into predicted coordinates and optional aggregation indices."),L.forEach(t),M=p(P),G=n(P,"P",{});var _e=r(G);C=a(_e,"However, note that inference is "),N=n(_e,"STRONG",{});var me=r(N);ee=a(me,"different"),me.forEach(t),te=a(_e," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),_e.forEach(t),ce=p(P),E(oe.$$.fragment,P),this.h()},h(){h(c,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(R,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer")},m(P,L){u(P,l,L),e(l,_),e(l,c),e(c,f),e(l,b),e(l,v),e(v,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),e(l,I),e(I,O),e(l,w),u(P,M,L),u(P,G,L),e(G,C),e(G,N),e(N,ee),e(G,te),u(P,ce,L),F(oe,P,L),se=!0},p:rn,i(P){se||(A(oe.$$.fragment,P),se=!0)},o(P){z(oe.$$.fragment,P),se=!1},d(P){P&&t(l),P&&t(M),P&&t(G),P&&t(ce),x(oe,P)}}}function fk(U){let l,_;return l=new ln({props:{$$slots:{default:[mk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function gk(U){let l,_,c,f,b;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=n(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){u(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function _k(U){let l,_,c,f,b;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=n(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){u(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function Tk(U){let l,_,c,f,b;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=n(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){u(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function bk(U){let l,_,c,f,b;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=n(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){u(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function vk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,ve;return{c(){l=o("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=o("ul"),b=o("li"),v=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=o("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=o("p"),H=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),I=s("."),O=d(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=o("ul"),N=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),P=s("model(inputs_ids)"),L=d(),W=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),ue=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=d(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=n(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=n(g,"UL",{});var be=r(f);b=n(be,"LI",{});var ze=r(b);v=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(be),k=n(be,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),D=p(g),q=n(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=n(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=n(g,"UL",{});var de=r(C);N=n(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=n(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(pe," only and nothing else: "),se=n(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=n(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),ue=n(Te,"CODE",{});var ye=r(ue);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),me=p(de),ne=n(de,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){u(g,l,S),e(l,_),u(g,c,S),u(g,f,S),e(f,b),e(b,v),e(f,T),e(f,k),e(k,y),u(g,D,S),u(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),u(g,O,S),u(g,w,S),e(w,M),u(g,G,S),u(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,oe),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,ne),e(ne,qe),e(ne,ie),e(ie,ve)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function wk(U){let l,_,c,f,b;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=n(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){u(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function yk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,ve;return{c(){l=o("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=o("ul"),b=o("li"),v=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=o("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=o("p"),H=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),I=s("."),O=d(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=o("ul"),N=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),P=s("model(inputs_ids)"),L=d(),W=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),ue=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=d(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=n(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=n(g,"UL",{});var be=r(f);b=n(be,"LI",{});var ze=r(b);v=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(be),k=n(be,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),D=p(g),q=n(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=n(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=n(g,"UL",{});var de=r(C);N=n(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=n(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(pe," only and nothing else: "),se=n(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=n(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),ue=n(Te,"CODE",{});var ye=r(ue);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),me=p(de),ne=n(de,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){u(g,l,S),e(l,_),u(g,c,S),u(g,f,S),e(f,b),e(b,v),e(f,T),e(f,k),e(k,y),u(g,D,S),u(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),u(g,O,S),u(g,w,S),e(w,M),u(g,G,S),u(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,oe),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,ne),e(ne,qe),e(ne,ie),e(ie,ve)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function kk(U){let l,_,c,f,b;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=n(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){u(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function qk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,ve;return{c(){l=o("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=o("ul"),b=o("li"),v=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=o("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=o("p"),H=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),I=s("."),O=d(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=o("ul"),N=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),P=s("model(inputs_ids)"),L=d(),W=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),ue=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=d(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=n(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=n(g,"UL",{});var be=r(f);b=n(be,"LI",{});var ze=r(b);v=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(be),k=n(be,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),D=p(g),q=n(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=n(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=n(g,"UL",{});var de=r(C);N=n(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=n(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(pe," only and nothing else: "),se=n(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=n(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),ue=n(Te,"CODE",{});var ye=r(ue);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),me=p(de),ne=n(de,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){u(g,l,S),e(l,_),u(g,c,S),u(g,f,S),e(f,b),e(b,v),e(f,T),e(f,k),e(k,y),u(g,D,S),u(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),u(g,O,S),u(g,w,S),e(w,M),u(g,G,S),u(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,oe),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,ne),e(ne,qe),e(ne,ie),e(ie,ve)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function jk(U){let l,_,c,f,b;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=n(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){u(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function $k(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,ve;return{c(){l=o("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=o("ul"),b=o("li"),v=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=o("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=o("p"),H=s("This second option is useful when using "),B=o("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o("code"),re=s("model(inputs)"),I=s("."),O=d(),w=o("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=o("ul"),N=o("li"),ee=s("a single Tensor with "),te=o("code"),ce=s("input_ids"),oe=s(" only and nothing else: "),se=o("code"),P=s("model(inputs_ids)"),L=d(),W=o("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),ue=o("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=d(),ne=o("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=n(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=n(g,"UL",{});var be=r(f);b=n(be,"LI",{});var ze=r(b);v=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(be),k=n(be,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),D=p(g),q=n(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=n(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=n(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=n(g,"UL",{});var de=r(C);N=n(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=n(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),oe=a(pe," only and nothing else: "),se=n(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=n(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),ue=n(Te,"CODE",{});var ye=r(ue);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),me=p(de),ne=n(de,"LI",{});var Ae=r(ne);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){u(g,l,S),e(l,_),u(g,c,S),u(g,f,S),e(f,b),e(b,v),e(f,T),e(f,k),e(k,y),u(g,D,S),u(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),u(g,O,S),u(g,w,S),e(w,M),u(g,G,S),u(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,oe),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,ne),e(ne,qe),e(ne,ie),e(ie,ve)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function Ek(U){let l,_,c,f,b;return{c(){l=o("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=n(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){u(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function Fk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,oe,se,P,L,W,X,Q,Y,ge,ue,_e,me,ne,qe,ie,ve,g,S,be,ze,we,le,xe,Me,Z,de,pe,De,je,Te,Ne,ye,Ae,Oe,Ze,Ps,Ss,mt,ft,pa,gt,_t,Ds,tt,Ns,Os,Ke,Pe,Ls,yt,ke,kt,qt,Qs,jt,$t,Is,Et,Ts,Gt,Ft,bs,Ye,$e,Ws,At,ae,ot,Bt,Hs,zt,os,Us,xt,Ct,Rs,Mt,ns,Gs,Pt,rs,Bs,St,Vs,Le,Dt,is,Ks,Nt,ls,Ys,ds,Ue,ps,Ee,cs,nt,Js,Ot,Lt,Xs,Zs,Re,ea,hs,us,et,Qt,j,J,Aa,ta,za,ca,It,st,sa,rt,xa,aa,Ca,ha,Ie,ms,vs,Ge,Ma,ua,ws,oa,fs,ma,fe,Pa,ys,Sa,Da,fa,Tt,na,gs,Na,Fe,Oa,ra,La,Qa,Ia,he,Wa,ia,Ha,Ua,ga,ks,Ra,_a,Ce,la,Wt,da,Xi,Sc,Dc,Zi,el,Nc,Oc,tl,sl,Lc,Qc,Ga,Ba,al,Ic,Wc,ol,Hc,Uc,nl,Rc,Gc,Va,rl,Bc,Vc,il,Kc,Yc,ll,Jc,Xc,Ka,dl,Zc,eh,pl,th,sh,cl,ah,op,qo,np,jo,oh,dn,nh,rh,rp,$o,ih,pn,lh,dh,ip,Ur,hl,ph,lp,Eo,ch,cn,hh,uh,dp,We,Rr,ul,mh,fh,gh,Gr,ml,_h,Th,bh,Br,fl,vh,wh,yh,Vr,gl,kh,qh,jh,Kr,_l,$h,Eh,Fh,Yr,Tl,Ah,zh,xh,Jr,bl,Ch,Mh,Ph,Xr,vl,Sh,Dh,Nh,Zr,wl,Oh,Lh,pp,bt,Qh,hn,Ih,Wh,un,Hh,Uh,yl,Rh,Gh,kl,Bh,Vh,ql,Kh,Yh,cp,ei,jl,Jh,hp,Fo,up,Se,Xh,$l,Zh,eu,El,tu,su,Fl,au,ou,Al,nu,ru,zl,iu,lu,xl,du,pu,ti,cu,hu,mn,uu,mu,fn,fu,gu,mp,si,_u,fp,Ao,gp,Ya,zo,Cl,gn,Tu,Ml,bu,_p,xo,Tp,vt,vu,Pl,wu,yu,Sl,ku,qu,Dl,ju,$u,_n,Eu,Fu,Tn,Au,zu,bp,Ja,Co,Nl,bn,xu,Ol,Cu,vp,Xa,vn,Mu,wn,Pu,ai,Su,Du,wp,Za,Mo,Ll,yn,Nu,Ql,Ou,yp,it,kn,Lu,eo,Qu,oi,Iu,Wu,qn,Hu,Uu,Ru,to,Gu,Il,Bu,Vu,ni,Ku,Yu,Ju,jn,Xu,$n,Zu,em,tm,Wl,sm,am,En,kp,so,Po,Hl,Fn,om,Ul,nm,qp,Be,An,rm,Rl,im,lm,Qe,dm,ri,pm,cm,ii,hm,um,Gl,mm,fm,Bl,gm,_m,Vl,Tm,bm,Kl,vm,wm,Yl,ym,km,Jl,qm,jm,Xl,$m,Em,Fm,lt,Zl,Am,zm,ed,xm,Cm,td,Mm,Pm,sd,Sm,Dm,ad,Nm,Om,od,Lm,Qm,nd,Im,Wm,li,di,Hm,Um,Rm,So,zn,Gm,rd,Bm,Vm,Ta,xn,Km,Cn,Ym,pi,Jm,Xm,Zm,Mn,ef,Pn,tf,sf,af,ci,Sn,jp,ao,Do,id,Dn,of,ld,nf,$p,dt,Nn,rf,On,lf,hi,df,pf,cf,Ln,hf,Qn,uf,mf,ff,In,gf,ui,_f,Tf,bf,Wn,vf,Hn,wf,yf,kf,Vt,Un,qf,oo,jf,mi,$f,Ef,dd,Ff,Af,zf,No,xf,pd,Cf,Mf,Rn,Ep,no,Oo,cd,Gn,Pf,hd,Sf,Fp,_s,Bn,Df,ro,Nf,ud,Of,Lf,fi,Qf,If,Wf,Vn,Hf,Kn,Uf,Rf,Gf,Kt,Yn,Bf,io,Vf,gi,Kf,Yf,md,Jf,Xf,Zf,Lo,eg,fd,tg,sg,Jn,Ap,lo,Qo,gd,Xn,ag,_d,og,zp,Ht,Zn,ng,Td,rg,ig,er,lg,_i,dg,pg,cg,tr,hg,sr,ug,mg,fg,Yt,ar,gg,po,_g,Ti,Tg,bg,bd,vg,wg,yg,Io,kg,vd,qg,jg,or,xp,co,Wo,wd,nr,$g,yd,Eg,Cp,Ut,rr,Fg,ho,Ag,kd,zg,xg,qd,Cg,Mg,Pg,ir,Sg,bi,Dg,Ng,Og,lr,Lg,dr,Qg,Ig,Wg,Jt,pr,Hg,uo,Ug,vi,Rg,Gg,jd,Bg,Vg,Kg,Ho,Yg,$d,Jg,Xg,cr,Mp,mo,Uo,Ed,hr,Zg,Fd,e_,Pp,pt,ur,t_,Ad,s_,a_,mr,o_,wi,n_,r_,i_,fr,l_,gr,d_,p_,c_,Ro,h_,Xt,_r,u_,fo,m_,yi,f_,g_,zd,__,T_,b_,Go,v_,xd,w_,y_,Tr,Sp,go,Bo,Cd,br,k_,Md,q_,Dp,ct,vr,j_,wr,$_,Pd,E_,F_,A_,yr,z_,ki,x_,C_,M_,kr,P_,qr,S_,D_,N_,Vo,O_,Zt,jr,L_,_o,Q_,qi,I_,W_,Sd,H_,U_,R_,Ko,G_,Dd,B_,V_,$r,Np,To,Yo,Nd,Er,K_,Od,Y_,Op,ht,Fr,J_,Ld,X_,Z_,Ar,eT,ji,tT,sT,aT,zr,oT,xr,nT,rT,iT,Jo,lT,es,Cr,dT,bo,pT,$i,cT,hT,Qd,uT,mT,fT,Xo,gT,Id,_T,TT,Mr,Lp,vo,Zo,Wd,Pr,bT,Hd,vT,Qp,ut,Sr,wT,wo,yT,Ud,kT,qT,Rd,jT,$T,ET,Dr,FT,Ei,AT,zT,xT,Nr,CT,Or,MT,PT,ST,en,DT,ts,Lr,NT,yo,OT,Fi,LT,QT,Gd,IT,WT,HT,tn,UT,Bd,RT,GT,Qr,Ip;return v=new Rt({}),V=new Rt({}),rt=new Rt({}),qo=new Pc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ak],pytorch:[tk]},$$scope:{ctx:U}}}),Fo=new Pc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ik],pytorch:[nk]},$$scope:{ctx:U}}}),Ao=new Pc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ck],pytorch:[dk]},$$scope:{ctx:U}}}),gn=new Rt({}),xo=new Pc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[fk],pytorch:[uk]},$$scope:{ctx:U}}}),bn=new Rt({}),vn=new He({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tapas.py#L102"}}),yn=new Rt({}),kn=new He({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the TAPAS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"vocab_size"},{anchor:"transformers.TapasConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary sizes of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"type_vocab_sizes"},{anchor:"transformers.TapasConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
should be set to 0 for these models.`,name:"no_aggregation_label_index"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/configuration_tapas.py#L37"}}),En=new Ve({props:{code:`from transformers import TapasModel, TapasConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Fn=new Rt({}),An=new He({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/tokenization_tapas.py#L188"}}),zn=new He({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
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
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapasTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_16937/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapasTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_16937/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/tokenization_tapas.py#L528"}}),xn=new He({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
Dictionary mapping features to actual values. Should be created using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.`,name:"data"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits",description:`<strong>logits</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Tensor containing the logits at the token level.`,name:"logits"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits_agg",description:`<strong>logits_agg</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_aggregation_labels)</code>, <em>optional</em>) &#x2014;
Tensor containing the aggregation logits.`,name:"logits_agg"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.cell_classification_threshold",description:`<strong>cell_classification_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to be used for cell selection. All table cells for which their probability is larger than
this threshold will be selected.`,name:"cell_classification_threshold"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/tokenization_tapas.py#L1890",returnDescription:`
<ul>
<li>predicted_answer_coordinates (<code>List[List[[tuple]]</code> of length <code>batch_size</code>): Predicted answer coordinates
as a list of lists of tuples. Each element in the list contains the predicted answer coordinates of a
single example in the batch, as a list of tuples. Each tuple is a cell, i.e. (row index, column index).</li>
<li>predicted_aggregation_indices (<code>List[int]</code>of length <code>batch_size</code>, <em>optional</em>, returned when
<code>logits_aggregation</code> is provided): Predicted aggregation operator indices of the aggregation head.</li>
</ul>
`,returnType:`
<p><code>tuple</code> comprising various elements depending on the inputs</p>
`}}),Sn=new He({props:{name:"save_vocabulary",anchor:"transformers.TapasTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/tokenization_tapas.py#L396"}}),Dn=new Rt({}),Nn=new He({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16937/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tapas.py#L852"}}),Un=new He({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_16937/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16937/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/pr_16937/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tapas.py#L890",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16937/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16937/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),No=new Ms({props:{$$slots:{default:[gk]},$$scope:{ctx:U}}}),Rn=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Gn=new Rt({}),Bn=new He({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16937/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tapas.py#L1005"}}),Yn=new He({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_16937/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16937/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/pr_16937/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tapas.py#L1024",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16937/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16937/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new Ms({props:{$$slots:{default:[_k]},$$scope:{ctx:U}}}),Jn=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Xn=new Rt({}),Zn=new He({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16937/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tapas.py#L1464"}}),ar=new He({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_16937/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16937/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/pr_16937/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tapas.py#L1476",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16937/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16937/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new Ms({props:{$$slots:{default:[Tk]},$$scope:{ctx:U}}}),or=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),nr=new Rt({}),rr=new He({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16937/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tapas.py#L1120"}}),pr=new He({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/pr_16937/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/pr_16937/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/pr_16937/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForQuestionAnswering.forward.table_mask",description:`<strong>table_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
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
<a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tapas.py#L1155",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new Ms({props:{$$slots:{default:[bk]},$$scope:{ctx:U}}}),cr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),hr=new Rt({}),ur=new He({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16937/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tf_tapas.py#L961"}}),Ro=new Ms({props:{$$slots:{default:[vk]},$$scope:{ctx:U}}}),_r=new He({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_16937/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16937/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/pr_16937/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tf_tapas.py#L967",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16937/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/pr_16937/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Go=new Ms({props:{$$slots:{default:[wk]},$$scope:{ctx:U}}}),Tr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),br=new Rt({}),vr=new He({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16937/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tf_tapas.py#L1036"}}),Vo=new Ms({props:{$$slots:{default:[yk]},$$scope:{ctx:U}}}),jr=new He({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_16937/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16937/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/pr_16937/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tf_tapas.py#L1052",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16937/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/pr_16937/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ko=new Ms({props:{$$slots:{default:[kk]},$$scope:{ctx:U}}}),$r=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Er=new Rt({}),Fr=new He({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16937/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tf_tapas.py#L1574"}}),Jo=new Ms({props:{$$slots:{default:[qk]},$$scope:{ctx:U}}}),Cr=new He({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_16937/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16937/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/pr_16937/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tf_tapas.py#L1585",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_16937/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/pr_16937/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xo=new Ms({props:{$$slots:{default:[jk]},$$scope:{ctx:U}}}),Mr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pr=new Rt({}),Sr=new He({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16937/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tf_tapas.py#L1242"}}),en=new Ms({props:{$$slots:{default:[$k]},$$scope:{ctx:U}}}),Lr=new He({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/pr_16937/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/pr_16937/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
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
Whether or not to return a <a href="/docs/transformers/pr_16937/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForQuestionAnswering.call.table_mask",description:`<strong>table_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
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
<a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],source:"https://github.com/huggingface/transformers/blob/pr_16937/src/transformers/models/tapas/modeling_tf_tapas.py#L1264",returnDescription:`
<p>A <code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig"
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
`}}),tn=new Ms({props:{$$slots:{default:[Ek]},$$scope:{ctx:U}}}),Qr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){l=o("meta"),_=d(),c=o("h1"),f=o("a"),b=o("span"),$(v.$$.fragment),T=d(),k=o("span"),y=s("TAPAS"),D=d(),q=o("h2"),H=o("a"),B=o("span"),$(V.$$.fragment),R=d(),K=o("span"),re=s("Overview"),I=d(),O=o("p"),w=s("The TAPAS model was proposed in "),M=o("a"),G=s("TAPAS: Weakly Supervised Table Parsing via Pre-training"),C=s(`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),N=d(),ee=o("p"),te=s("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),ce=d(),oe=o("ul"),se=o("li"),P=o("a"),L=s("SQA"),W=s(" (Sequential Question Answering by Microsoft)"),X=d(),Q=o("li"),Y=o("a"),ge=s("WTQ"),ue=s(" (Wiki Table Questions by Stanford University)"),_e=d(),me=o("li"),ne=o("a"),qe=s("WikiSQL"),ie=s(" (by Salesforce)."),ve=d(),g=o("p"),S=s("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),be=d(),ze=o("p"),we=s("The abstract from the paper is the following:"),le=d(),xe=o("p"),Me=o("em"),Z=s("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),de=d(),pe=o("p"),De=s("In addition, the authors have further pre-trained TAPAS to recognize "),je=o("strong"),Te=s("table entailment"),Ne=s(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ye=o("a"),Ae=s("TabFact"),Oe=s(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=o("a"),Ps=s("Understanding tables with intermediate pre-training"),Ss=s(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),mt=d(),ft=o("img"),gt=d(),_t=o("small"),Ds=s("TAPAS architecture. Taken from the "),tt=o("a"),Ns=s("original blog post"),Os=s("."),Ke=d(),Pe=o("p"),Ls=s("This model was contributed by "),yt=o("a"),ke=s("nielsr"),kt=s(". The Tensorflow version of this model was contributed by "),qt=o("a"),Qs=s("kamalkraj"),jt=s(". The original code can be found "),$t=o("a"),Is=s("here"),Et=s("."),Ts=d(),Gt=o("p"),Ft=s("Tips:"),bs=d(),Ye=o("ul"),$e=o("li"),Ws=s("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),At=o("code"),ae=s("reset_position_index_per_cell"),ot=s(" parameter of "),Bt=o("a"),Hs=s("TapasConfig"),zt=s(", which is set to "),os=o("code"),Us=s("True"),xt=s(" by default. The default versions of the models available on the "),Ct=o("a"),Rs=s("hub"),Mt=s(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),ns=o("code"),Gs=s('revision="no_reset"'),Pt=s(" when calling the "),rs=o("code"),Bs=s("from_pretrained()"),St=s(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Vs=d(),Le=o("li"),Dt=s("TAPAS is based on BERT, so "),is=o("code"),Ks=s("TAPAS-base"),Nt=s(" for example corresponds to a "),ls=o("code"),Ys=s("BERT-base"),ds=s(" architecture. Of course, "),Ue=o("code"),ps=s("TAPAS-large"),Ee=s(" will result in the best performance (the results reported in the paper are from "),cs=o("code"),nt=s("TAPAS-large"),Js=s("). Results of the various sized models are shown on the "),Ot=o("a"),Lt=s("original Github repository"),Xs=s("."),Zs=d(),Re=o("li"),ea=s("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),hs=o("code"),us=s("prev_labels"),et=s(" token type ids can be overwritten by the predicted "),Qt=o("code"),j=s("labels"),J=s(" of the model to the previous question. See \u201CUsage\u201D section for more info."),Aa=d(),ta=o("li"),za=s("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),ca=d(),It=o("h2"),st=o("a"),sa=o("span"),$(rt.$$.fragment),xa=d(),aa=o("span"),Ca=s("Usage: fine-tuning"),ha=d(),Ie=o("p"),ms=s("Here we explain how you can fine-tune "),vs=o("a"),Ge=s("TapasForQuestionAnswering"),Ma=s(" on your own dataset."),ua=d(),ws=o("p"),oa=o("strong"),fs=s("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),ma=d(),fe=o("p"),Pa=s("Basically, there are 3 different ways in which one can fine-tune "),ys=o("a"),Sa=s("TapasForQuestionAnswering"),Da=s(", corresponding to the different datasets on which Tapas was fine-tuned:"),fa=d(),Tt=o("ol"),na=o("li"),gs=s("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),Na=d(),Fe=o("li"),Oa=s("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=o("strong"),La=s("weak supervision"),Qa=s(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Ia=d(),he=o("li"),Wa=s("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=o("strong"),Ha=s("strong supervision"),Ua=s(". Here, learning the appropriate aggregation operator is much easier."),ga=d(),ks=o("p"),Ra=s("To summarize:"),_a=d(),Ce=o("table"),la=o("thead"),Wt=o("tr"),da=o("th"),Xi=o("strong"),Sc=s("Task"),Dc=d(),Zi=o("th"),el=o("strong"),Nc=s("Example dataset"),Oc=d(),tl=o("th"),sl=o("strong"),Lc=s("Description"),Qc=d(),Ga=o("tbody"),Ba=o("tr"),al=o("td"),Ic=s("Conversational"),Wc=d(),ol=o("td"),Hc=s("SQA"),Uc=d(),nl=o("td"),Rc=s("Conversational, only cell selection questions"),Gc=d(),Va=o("tr"),rl=o("td"),Bc=s("Weak supervision for aggregation"),Vc=d(),il=o("td"),Kc=s("WTQ"),Yc=d(),ll=o("td"),Jc=s("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Xc=d(),Ka=o("tr"),dl=o("td"),Zc=s("Strong supervision for aggregation"),eh=d(),pl=o("td"),th=s("WikiSQL-supervised"),sh=d(),cl=o("td"),ah=s("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),op=d(),$(qo.$$.fragment),np=d(),jo=o("p"),oh=s("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),dn=o("a"),nh=s("here"),rh=s(" for more info."),rp=d(),$o=o("p"),ih=s("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),pn=o("a"),lh=s("here"),dh=s("."),ip=d(),Ur=o("p"),hl=o("strong"),ph=s("STEP 2: Prepare your data in the SQA format"),lp=d(),Eo=o("p"),ch=s("Second, no matter what you picked above, you should prepare your dataset in the "),cn=o("a"),hh=s("SQA"),uh=s(" format. This format is a TSV/CSV file with the following columns:"),dp=d(),We=o("ul"),Rr=o("li"),ul=o("code"),mh=s("id"),fh=s(": optional, id of the table-question pair, for bookkeeping purposes."),gh=d(),Gr=o("li"),ml=o("code"),_h=s("annotator"),Th=s(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),bh=d(),Br=o("li"),fl=o("code"),vh=s("position"),wh=s(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),yh=d(),Vr=o("li"),gl=o("code"),kh=s("question"),qh=s(": string"),jh=d(),Kr=o("li"),_l=o("code"),$h=s("table_file"),Eh=s(": string, name of a csv file containing the tabular data"),Fh=d(),Yr=o("li"),Tl=o("code"),Ah=s("answer_coordinates"),zh=s(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),xh=d(),Jr=o("li"),bl=o("code"),Ch=s("answer_text"),Mh=s(": list of one or more strings (each string being a cell value that is part of the answer)"),Ph=d(),Xr=o("li"),vl=o("code"),Sh=s("aggregation_label"),Dh=s(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Nh=d(),Zr=o("li"),wl=o("code"),Oh=s("float_answer"),Lh=s(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),pp=d(),bt=o("p"),Qh=s("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),hn=o("a"),Ih=s("here"),Wh=s(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),un=o("a"),Hh=s("here"),Uh=s(". Interestingly, these conversion scripts are not perfect (the "),yl=o("code"),Rh=s("answer_coordinates"),Gh=s(" and "),kl=o("code"),Bh=s("float_answer"),Vh=s(" fields are populated based on the "),ql=o("code"),Kh=s("answer_text"),Yh=s("), meaning that WTQ and WikiSQL results could actually be improved."),cp=d(),ei=o("p"),jl=o("strong"),Jh=s("STEP 3: Convert your data into tensors using TapasTokenizer"),hp=d(),$(Fo.$$.fragment),up=d(),Se=o("p"),Xh=s("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),$l=o("strong"),Zh=s("not conversational"),eu=s(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),El=o("code"),tu=s("queries"),su=s(", "),Fl=o("code"),au=s("answer_coordinates"),ou=s(" and "),Al=o("code"),nu=s("answer_text"),ru=s(" per table (in the order of their "),zl=o("code"),iu=s("position"),lu=s(`
index) and batch encode each table with its questions. This will make sure that the `),xl=o("code"),du=s("prev_labels"),pu=s(" token types (see docs of "),ti=o("a"),cu=s("TapasTokenizer"),hu=s(") are set correctly. See "),mn=o("a"),uu=s("this notebook"),mu=s(" for more info. See "),fn=o("a"),fu=s("this notebook"),gu=s(" for more info regarding using the TensorFlow model."),mp=d(),si=o("p"),_u=s("**STEP 4: Train (fine-tune) the model"),fp=d(),$(Ao.$$.fragment),gp=d(),Ya=o("h2"),zo=o("a"),Cl=o("span"),$(gn.$$.fragment),Tu=d(),Ml=o("span"),bu=s("Usage: inference"),_p=d(),$(xo.$$.fragment),Tp=d(),vt=o("p"),vu=s("In case of a conversational set-up, then each table-question pair must be provided "),Pl=o("strong"),wu=s("sequentially"),yu=s(" to the model, such that the "),Sl=o("code"),ku=s("prev_labels"),qu=s(" token types can be overwritten by the predicted "),Dl=o("code"),ju=s("labels"),$u=s(" of the previous table-question pair. Again, more info can be found in "),_n=o("a"),Eu=s("this notebook"),Fu=s(" (for PyTorch) and "),Tn=o("a"),Au=s("this notebook"),zu=s(" (for TensorFlow)."),bp=d(),Ja=o("h2"),Co=o("a"),Nl=o("span"),$(bn.$$.fragment),xu=d(),Ol=o("span"),Cu=s("TAPAS specific outputs"),vp=d(),Xa=o("div"),$(vn.$$.fragment),Mu=d(),wn=o("p"),Pu=s("Output type of "),ai=o("a"),Su=s("TapasForQuestionAnswering"),Du=s("."),wp=d(),Za=o("h2"),Mo=o("a"),Ll=o("span"),$(yn.$$.fragment),Nu=d(),Ql=o("span"),Ou=s("TapasConfig"),yp=d(),it=o("div"),$(kn.$$.fragment),Lu=d(),eo=o("p"),Qu=s("This is the configuration class to store the configuration of a "),oi=o("a"),Iu=s("TapasModel"),Wu=s(`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS
`),qn=o("a"),Hu=s("google/tapas-base-finetuned-sqa"),Uu=s(" architecture."),Ru=d(),to=o("p"),Gu=s("Configuration objects inherit from "),Il=o("code"),Bu=s("PreTrainedConfig"),Vu=s(` and can be used to control the model outputs. Read the
documentation from `),ni=o("a"),Ku=s("PretrainedConfig"),Yu=s(" for more information."),Ju=d(),jn=o("p"),Xu=s(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),$n=o("a"),Zu=s("https://github.com/google-research/tapas/tree/master"),em=s("."),tm=d(),Wl=o("p"),sm=s("Example:"),am=d(),$(En.$$.fragment),kp=d(),so=o("h2"),Po=o("a"),Hl=o("span"),$(Fn.$$.fragment),om=d(),Ul=o("span"),nm=s("TapasTokenizer"),qp=d(),Be=o("div"),$(An.$$.fragment),rm=d(),Rl=o("p"),im=s(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),lm=d(),Qe=o("p"),dm=s("This tokenizer inherits from "),ri=o("a"),pm=s("PreTrainedTokenizer"),cm=s(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ii=o("a"),hm=s("TapasTokenizer"),um=s(` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Gl=o("code"),mm=s("segment_ids"),fm=s(`,
`),Bl=o("code"),gm=s("column_ids"),_m=s(", "),Vl=o("code"),Tm=s("row_ids"),bm=s(", "),Kl=o("code"),vm=s("prev_labels"),wm=s(", "),Yl=o("code"),ym=s("column_ranks"),km=s(", "),Jl=o("code"),qm=s("inv_column_ranks"),jm=s(" and "),Xl=o("code"),$m=s("numeric_relations"),Em=s(":"),Fm=d(),lt=o("ul"),Zl=o("li"),Am=s(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),zm=d(),ed=o("li"),xm=s(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),Cm=d(),td=o("li"),Mm=s(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),Pm=d(),sd=o("li"),Sm=s(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Dm=d(),ad=o("li"),Nm=s(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Om=d(),od=o("li"),Lm=s(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Qm=d(),nd=o("li"),Im=s(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Wm=d(),li=o("p"),di=o("a"),Hm=s("TapasTokenizer"),Um=s(` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),Rm=d(),So=o("div"),$(zn.$$.fragment),Gm=d(),rd=o("p"),Bm=s("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Vm=d(),Ta=o("div"),$(xn.$$.fragment),Km=d(),Cn=o("p"),Ym=s("Converts logits of "),pi=o("a"),Jm=s("TapasForQuestionAnswering"),Xm=s(` to actual predicted answer coordinates and optional
aggregation indices.`),Zm=d(),Mn=o("p"),ef=s(`The original implementation, on which this function is based, can be found
`),Pn=o("a"),tf=s("here"),sf=s("."),af=d(),ci=o("div"),$(Sn.$$.fragment),jp=d(),ao=o("h2"),Do=o("a"),id=o("span"),$(Dn.$$.fragment),of=d(),ld=o("span"),nf=s("TapasModel"),$p=d(),dt=o("div"),$(Nn.$$.fragment),rf=d(),On=o("p"),lf=s(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),hi=o("a"),df=s("PreTrainedModel"),pf=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cf=d(),Ln=o("p"),hf=s("This model is also a PyTorch "),Qn=o("a"),uf=s("torch.nn.Module"),mf=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ff=d(),In=o("p"),gf=s("This class is a small change compared to "),ui=o("a"),_f=s("BertModel"),Tf=s(", taking into account the additional token type ids."),bf=d(),Wn=o("p"),vf=s(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Hn=o("a"),wf=s(`Attention is
all you need`),yf=s(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),kf=d(),Vt=o("div"),$(Un.$$.fragment),qf=d(),oo=o("p"),jf=s("The "),mi=o("a"),$f=s("TapasModel"),Ef=s(" forward method, overrides the "),dd=o("code"),Ff=s("__call__"),Af=s(" special method."),zf=d(),$(No.$$.fragment),xf=d(),pd=o("p"),Cf=s("Examples:"),Mf=d(),$(Rn.$$.fragment),Ep=d(),no=o("h2"),Oo=o("a"),cd=o("span"),$(Gn.$$.fragment),Pf=d(),hd=o("span"),Sf=s("TapasForMaskedLM"),Fp=d(),_s=o("div"),$(Bn.$$.fragment),Df=d(),ro=o("p"),Nf=s("Tapas Model with a "),ud=o("code"),Of=s("language modeling"),Lf=s(` head on top.
This model inherits from `),fi=o("a"),Qf=s("PreTrainedModel"),If=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wf=d(),Vn=o("p"),Hf=s("This model is also a PyTorch "),Kn=o("a"),Uf=s("torch.nn.Module"),Rf=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gf=d(),Kt=o("div"),$(Yn.$$.fragment),Bf=d(),io=o("p"),Vf=s("The "),gi=o("a"),Kf=s("TapasForMaskedLM"),Yf=s(" forward method, overrides the "),md=o("code"),Jf=s("__call__"),Xf=s(" special method."),Zf=d(),$(Lo.$$.fragment),eg=d(),fd=o("p"),tg=s("Examples:"),sg=d(),$(Jn.$$.fragment),Ap=d(),lo=o("h2"),Qo=o("a"),gd=o("span"),$(Xn.$$.fragment),ag=d(),_d=o("span"),og=s("TapasForSequenceClassification"),zp=d(),Ht=o("div"),$(Zn.$$.fragment),ng=d(),Td=o("p"),rg=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),ig=d(),er=o("p"),lg=s("This model inherits from "),_i=o("a"),dg=s("PreTrainedModel"),pg=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cg=d(),tr=o("p"),hg=s("This model is also a PyTorch "),sr=o("a"),ug=s("torch.nn.Module"),mg=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fg=d(),Yt=o("div"),$(ar.$$.fragment),gg=d(),po=o("p"),_g=s("The "),Ti=o("a"),Tg=s("TapasForSequenceClassification"),bg=s(" forward method, overrides the "),bd=o("code"),vg=s("__call__"),wg=s(" special method."),yg=d(),$(Io.$$.fragment),kg=d(),vd=o("p"),qg=s("Examples:"),jg=d(),$(or.$$.fragment),xp=d(),co=o("h2"),Wo=o("a"),wd=o("span"),$(nr.$$.fragment),$g=d(),yd=o("span"),Eg=s("TapasForQuestionAnswering"),Cp=d(),Ut=o("div"),$(rr.$$.fragment),Fg=d(),ho=o("p"),Ag=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),kd=o("code"),zg=s("logits"),xg=s(" and optional "),qd=o("code"),Cg=s("logits_aggregation"),Mg=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Pg=d(),ir=o("p"),Sg=s("This model inherits from "),bi=o("a"),Dg=s("PreTrainedModel"),Ng=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Og=d(),lr=o("p"),Lg=s("This model is also a PyTorch "),dr=o("a"),Qg=s("torch.nn.Module"),Ig=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wg=d(),Jt=o("div"),$(pr.$$.fragment),Hg=d(),uo=o("p"),Ug=s("The "),vi=o("a"),Rg=s("TapasForQuestionAnswering"),Gg=s(" forward method, overrides the "),jd=o("code"),Bg=s("__call__"),Vg=s(" special method."),Kg=d(),$(Ho.$$.fragment),Yg=d(),$d=o("p"),Jg=s("Examples:"),Xg=d(),$(cr.$$.fragment),Mp=d(),mo=o("h2"),Uo=o("a"),Ed=o("span"),$(hr.$$.fragment),Zg=d(),Fd=o("span"),e_=s("TFTapasModel"),Pp=d(),pt=o("div"),$(ur.$$.fragment),t_=d(),Ad=o("p"),s_=s("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),a_=d(),mr=o("p"),o_=s("This model inherits from "),wi=o("a"),n_=s("TFPreTrainedModel"),r_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=d(),fr=o("p"),l_=s("This model is also a "),gr=o("a"),d_=s("tf.keras.Model"),p_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),c_=d(),$(Ro.$$.fragment),h_=d(),Xt=o("div"),$(_r.$$.fragment),u_=d(),fo=o("p"),m_=s("The "),yi=o("a"),f_=s("TFTapasModel"),g_=s(" forward method, overrides the "),zd=o("code"),__=s("__call__"),T_=s(" special method."),b_=d(),$(Go.$$.fragment),v_=d(),xd=o("p"),w_=s("Examples:"),y_=d(),$(Tr.$$.fragment),Sp=d(),go=o("h2"),Bo=o("a"),Cd=o("span"),$(br.$$.fragment),k_=d(),Md=o("span"),q_=s("TFTapasForMaskedLM"),Dp=d(),ct=o("div"),$(vr.$$.fragment),j_=d(),wr=o("p"),$_=s("Tapas Model with a "),Pd=o("code"),E_=s("language modeling"),F_=s(" head on top."),A_=d(),yr=o("p"),z_=s("This model inherits from "),ki=o("a"),x_=s("TFPreTrainedModel"),C_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),M_=d(),kr=o("p"),P_=s("This model is also a "),qr=o("a"),S_=s("tf.keras.Model"),D_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),N_=d(),$(Vo.$$.fragment),O_=d(),Zt=o("div"),$(jr.$$.fragment),L_=d(),_o=o("p"),Q_=s("The "),qi=o("a"),I_=s("TFTapasForMaskedLM"),W_=s(" forward method, overrides the "),Sd=o("code"),H_=s("__call__"),U_=s(" special method."),R_=d(),$(Ko.$$.fragment),G_=d(),Dd=o("p"),B_=s("Examples:"),V_=d(),$($r.$$.fragment),Np=d(),To=o("h2"),Yo=o("a"),Nd=o("span"),$(Er.$$.fragment),K_=d(),Od=o("span"),Y_=s("TFTapasForSequenceClassification"),Op=d(),ht=o("div"),$(Fr.$$.fragment),J_=d(),Ld=o("p"),X_=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Z_=d(),Ar=o("p"),eT=s("This model inherits from "),ji=o("a"),tT=s("TFPreTrainedModel"),sT=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aT=d(),zr=o("p"),oT=s("This model is also a "),xr=o("a"),nT=s("tf.keras.Model"),rT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),iT=d(),$(Jo.$$.fragment),lT=d(),es=o("div"),$(Cr.$$.fragment),dT=d(),bo=o("p"),pT=s("The "),$i=o("a"),cT=s("TFTapasForSequenceClassification"),hT=s(" forward method, overrides the "),Qd=o("code"),uT=s("__call__"),mT=s(" special method."),fT=d(),$(Xo.$$.fragment),gT=d(),Id=o("p"),_T=s("Examples:"),TT=d(),$(Mr.$$.fragment),Lp=d(),vo=o("h2"),Zo=o("a"),Wd=o("span"),$(Pr.$$.fragment),bT=d(),Hd=o("span"),vT=s("TFTapasForQuestionAnswering"),Qp=d(),ut=o("div"),$(Sr.$$.fragment),wT=d(),wo=o("p"),yT=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Ud=o("code"),kT=s("logits"),qT=s(" and optional "),Rd=o("code"),jT=s("logits_aggregation"),$T=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),ET=d(),Dr=o("p"),FT=s("This model inherits from "),Ei=o("a"),AT=s("TFPreTrainedModel"),zT=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xT=d(),Nr=o("p"),CT=s("This model is also a "),Or=o("a"),MT=s("tf.keras.Model"),PT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ST=d(),$(en.$$.fragment),DT=d(),ts=o("div"),$(Lr.$$.fragment),NT=d(),yo=o("p"),OT=s("The "),Fi=o("a"),LT=s("TFTapasForQuestionAnswering"),QT=s(" forward method, overrides the "),Gd=o("code"),IT=s("__call__"),WT=s(" special method."),HT=d(),$(tn.$$.fragment),UT=d(),Bd=o("p"),RT=s("Examples:"),GT=d(),$(Qr.$$.fragment),this.h()},l(i){const m=Jy('[data-svelte="svelte-1phssyn"]',document.head);l=n(m,"META",{name:!0,content:!0}),m.forEach(t),_=p(i),c=n(i,"H1",{class:!0});var Ir=r(c);f=n(Ir,"A",{id:!0,class:!0,href:!0});var Vd=r(f);b=n(Vd,"SPAN",{});var Kd=r(b);E(v.$$.fragment,Kd),Kd.forEach(t),Vd.forEach(t),T=p(Ir),k=n(Ir,"SPAN",{});var Yd=r(k);y=a(Yd,"TAPAS"),Yd.forEach(t),Ir.forEach(t),D=p(i),q=n(i,"H2",{class:!0});var Wr=r(q);H=n(Wr,"A",{id:!0,class:!0,href:!0});var Jd=r(H);B=n(Jd,"SPAN",{});var Xd=r(B);E(V.$$.fragment,Xd),Xd.forEach(t),Jd.forEach(t),R=p(Wr),K=n(Wr,"SPAN",{});var Zd=r(K);re=a(Zd,"Overview"),Zd.forEach(t),Wr.forEach(t),I=p(i),O=n(i,"P",{});var Hr=r(O);w=a(Hr,"The TAPAS model was proposed in "),M=n(Hr,"A",{href:!0,rel:!0});var ep=r(M);G=a(ep,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),ep.forEach(t),C=a(Hr,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),Hr.forEach(t),N=p(i),ee=n(i,"P",{});var tp=r(ee);te=a(tp,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),tp.forEach(t),ce=p(i),oe=n(i,"UL",{});var ko=r(oe);se=n(ko,"LI",{});var Ai=r(se);P=n(Ai,"A",{href:!0,rel:!0});var sp=r(P);L=a(sp,"SQA"),sp.forEach(t),W=a(Ai," (Sequential Question Answering by Microsoft)"),Ai.forEach(t),X=p(ko),Q=n(ko,"LI",{});var zi=r(Q);Y=n(zi,"A",{href:!0,rel:!0});var ap=r(Y);ge=a(ap,"WTQ"),ap.forEach(t),ue=a(zi," (Wiki Table Questions by Stanford University)"),zi.forEach(t),_e=p(ko),me=n(ko,"LI",{});var BT=r(me);ne=n(BT,"A",{href:!0,rel:!0});var ob=r(ne);qe=a(ob,"WikiSQL"),ob.forEach(t),ie=a(BT," (by Salesforce)."),BT.forEach(t),ko.forEach(t),ve=p(i),g=n(i,"P",{});var nb=r(g);S=a(nb,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),nb.forEach(t),be=p(i),ze=n(i,"P",{});var rb=r(ze);we=a(rb,"The abstract from the paper is the following:"),rb.forEach(t),le=p(i),xe=n(i,"P",{});var ib=r(xe);Me=n(ib,"EM",{});var lb=r(Me);Z=a(lb,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),lb.forEach(t),ib.forEach(t),de=p(i),pe=n(i,"P",{});var sn=r(pe);De=a(sn,"In addition, the authors have further pre-trained TAPAS to recognize "),je=n(sn,"STRONG",{});var db=r(je);Te=a(db,"table entailment"),db.forEach(t),Ne=a(sn,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ye=n(sn,"A",{href:!0,rel:!0});var pb=r(ye);Ae=a(pb,"TabFact"),pb.forEach(t),Oe=a(sn,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=n(sn,"A",{href:!0,rel:!0});var cb=r(Ze);Ps=a(cb,"Understanding tables with intermediate pre-training"),cb.forEach(t),Ss=a(sn," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),sn.forEach(t),mt=p(i),ft=n(i,"IMG",{src:!0,alt:!0,width:!0}),gt=p(i),_t=n(i,"SMALL",{});var Wp=r(_t);Ds=a(Wp,"TAPAS architecture. Taken from the "),tt=n(Wp,"A",{href:!0});var hb=r(tt);Ns=a(hb,"original blog post"),hb.forEach(t),Os=a(Wp,"."),Wp.forEach(t),Ke=p(i),Pe=n(i,"P",{});var an=r(Pe);Ls=a(an,"This model was contributed by "),yt=n(an,"A",{href:!0,rel:!0});var ub=r(yt);ke=a(ub,"nielsr"),ub.forEach(t),kt=a(an,". The Tensorflow version of this model was contributed by "),qt=n(an,"A",{href:!0,rel:!0});var mb=r(qt);Qs=a(mb,"kamalkraj"),mb.forEach(t),jt=a(an,". The original code can be found "),$t=n(an,"A",{href:!0,rel:!0});var fb=r($t);Is=a(fb,"here"),fb.forEach(t),Et=a(an,"."),an.forEach(t),Ts=p(i),Gt=n(i,"P",{});var gb=r(Gt);Ft=a(gb,"Tips:"),gb.forEach(t),bs=p(i),Ye=n(i,"UL",{});var on=r(Ye);$e=n(on,"LI",{});var ss=r($e);Ws=a(ss,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),At=n(ss,"CODE",{});var _b=r(At);ae=a(_b,"reset_position_index_per_cell"),_b.forEach(t),ot=a(ss," parameter of "),Bt=n(ss,"A",{href:!0});var Tb=r(Bt);Hs=a(Tb,"TapasConfig"),Tb.forEach(t),zt=a(ss,", which is set to "),os=n(ss,"CODE",{});var bb=r(os);Us=a(bb,"True"),bb.forEach(t),xt=a(ss," by default. The default versions of the models available on the "),Ct=n(ss,"A",{href:!0,rel:!0});var vb=r(Ct);Rs=a(vb,"hub"),vb.forEach(t),Mt=a(ss," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),ns=n(ss,"CODE",{});var wb=r(ns);Gs=a(wb,'revision="no_reset"'),wb.forEach(t),Pt=a(ss," when calling the "),rs=n(ss,"CODE",{});var yb=r(rs);Bs=a(yb,"from_pretrained()"),yb.forEach(t),St=a(ss," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),ss.forEach(t),Vs=p(on),Le=n(on,"LI",{});var qs=r(Le);Dt=a(qs,"TAPAS is based on BERT, so "),is=n(qs,"CODE",{});var kb=r(is);Ks=a(kb,"TAPAS-base"),kb.forEach(t),Nt=a(qs," for example corresponds to a "),ls=n(qs,"CODE",{});var qb=r(ls);Ys=a(qb,"BERT-base"),qb.forEach(t),ds=a(qs," architecture. Of course, "),Ue=n(qs,"CODE",{});var jb=r(Ue);ps=a(jb,"TAPAS-large"),jb.forEach(t),Ee=a(qs," will result in the best performance (the results reported in the paper are from "),cs=n(qs,"CODE",{});var $b=r(cs);nt=a($b,"TAPAS-large"),$b.forEach(t),Js=a(qs,"). Results of the various sized models are shown on the "),Ot=n(qs,"A",{href:!0,rel:!0});var Eb=r(Ot);Lt=a(Eb,"original Github repository"),Eb.forEach(t),Xs=a(qs,"."),qs.forEach(t),Zs=p(on),Re=n(on,"LI",{});var xi=r(Re);ea=a(xi,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),hs=n(xi,"CODE",{});var Fb=r(hs);us=a(Fb,"prev_labels"),Fb.forEach(t),et=a(xi," token type ids can be overwritten by the predicted "),Qt=n(xi,"CODE",{});var Ab=r(Qt);j=a(Ab,"labels"),Ab.forEach(t),J=a(xi," of the model to the previous question. See \u201CUsage\u201D section for more info."),xi.forEach(t),Aa=p(on),ta=n(on,"LI",{});var zb=r(ta);za=a(zb,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),zb.forEach(t),on.forEach(t),ca=p(i),It=n(i,"H2",{class:!0});var Hp=r(It);st=n(Hp,"A",{id:!0,class:!0,href:!0});var xb=r(st);sa=n(xb,"SPAN",{});var Cb=r(sa);E(rt.$$.fragment,Cb),Cb.forEach(t),xb.forEach(t),xa=p(Hp),aa=n(Hp,"SPAN",{});var Mb=r(aa);Ca=a(Mb,"Usage: fine-tuning"),Mb.forEach(t),Hp.forEach(t),ha=p(i),Ie=n(i,"P",{});var Up=r(Ie);ms=a(Up,"Here we explain how you can fine-tune "),vs=n(Up,"A",{href:!0});var Pb=r(vs);Ge=a(Pb,"TapasForQuestionAnswering"),Pb.forEach(t),Ma=a(Up," on your own dataset."),Up.forEach(t),ua=p(i),ws=n(i,"P",{});var Sb=r(ws);oa=n(Sb,"STRONG",{});var Db=r(oa);fs=a(Db,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),Db.forEach(t),Sb.forEach(t),ma=p(i),fe=n(i,"P",{});var Rp=r(fe);Pa=a(Rp,"Basically, there are 3 different ways in which one can fine-tune "),ys=n(Rp,"A",{href:!0});var Nb=r(ys);Sa=a(Nb,"TapasForQuestionAnswering"),Nb.forEach(t),Da=a(Rp,", corresponding to the different datasets on which Tapas was fine-tuned:"),Rp.forEach(t),fa=p(i),Tt=n(i,"OL",{});var Ci=r(Tt);na=n(Ci,"LI",{});var Ob=r(na);gs=a(Ob,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),Ob.forEach(t),Na=p(Ci),Fe=n(Ci,"LI",{});var Gp=r(Fe);Oa=a(Gp,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=n(Gp,"STRONG",{});var Lb=r(ra);La=a(Lb,"weak supervision"),Lb.forEach(t),Qa=a(Gp,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Gp.forEach(t),Ia=p(Ci),he=n(Ci,"LI",{});var Bp=r(he);Wa=a(Bp,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=n(Bp,"STRONG",{});var Qb=r(ia);Ha=a(Qb,"strong supervision"),Qb.forEach(t),Ua=a(Bp,". Here, learning the appropriate aggregation operator is much easier."),Bp.forEach(t),Ci.forEach(t),ga=p(i),ks=n(i,"P",{});var Ib=r(ks);Ra=a(Ib,"To summarize:"),Ib.forEach(t),_a=p(i),Ce=n(i,"TABLE",{});var Vp=r(Ce);la=n(Vp,"THEAD",{});var Wb=r(la);Wt=n(Wb,"TR",{});var Mi=r(Wt);da=n(Mi,"TH",{});var Hb=r(da);Xi=n(Hb,"STRONG",{});var Ub=r(Xi);Sc=a(Ub,"Task"),Ub.forEach(t),Hb.forEach(t),Dc=p(Mi),Zi=n(Mi,"TH",{});var Rb=r(Zi);el=n(Rb,"STRONG",{});var Gb=r(el);Nc=a(Gb,"Example dataset"),Gb.forEach(t),Rb.forEach(t),Oc=p(Mi),tl=n(Mi,"TH",{});var Bb=r(tl);sl=n(Bb,"STRONG",{});var Vb=r(sl);Lc=a(Vb,"Description"),Vb.forEach(t),Bb.forEach(t),Mi.forEach(t),Wb.forEach(t),Qc=p(Vp),Ga=n(Vp,"TBODY",{});var Pi=r(Ga);Ba=n(Pi,"TR",{});var Si=r(Ba);al=n(Si,"TD",{});var Kb=r(al);Ic=a(Kb,"Conversational"),Kb.forEach(t),Wc=p(Si),ol=n(Si,"TD",{});var Yb=r(ol);Hc=a(Yb,"SQA"),Yb.forEach(t),Uc=p(Si),nl=n(Si,"TD",{});var Jb=r(nl);Rc=a(Jb,"Conversational, only cell selection questions"),Jb.forEach(t),Si.forEach(t),Gc=p(Pi),Va=n(Pi,"TR",{});var Di=r(Va);rl=n(Di,"TD",{});var Xb=r(rl);Bc=a(Xb,"Weak supervision for aggregation"),Xb.forEach(t),Vc=p(Di),il=n(Di,"TD",{});var Zb=r(il);Kc=a(Zb,"WTQ"),Zb.forEach(t),Yc=p(Di),ll=n(Di,"TD",{});var ev=r(ll);Jc=a(ev,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),ev.forEach(t),Di.forEach(t),Xc=p(Pi),Ka=n(Pi,"TR",{});var Ni=r(Ka);dl=n(Ni,"TD",{});var tv=r(dl);Zc=a(tv,"Strong supervision for aggregation"),tv.forEach(t),eh=p(Ni),pl=n(Ni,"TD",{});var sv=r(pl);th=a(sv,"WikiSQL-supervised"),sv.forEach(t),sh=p(Ni),cl=n(Ni,"TD",{});var av=r(cl);ah=a(av,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),av.forEach(t),Ni.forEach(t),Pi.forEach(t),Vp.forEach(t),op=p(i),E(qo.$$.fragment,i),np=p(i),jo=n(i,"P",{});var Kp=r(jo);oh=a(Kp,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),dn=n(Kp,"A",{href:!0,rel:!0});var ov=r(dn);nh=a(ov,"here"),ov.forEach(t),rh=a(Kp," for more info."),Kp.forEach(t),rp=p(i),$o=n(i,"P",{});var Yp=r($o);ih=a(Yp,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),pn=n(Yp,"A",{href:!0,rel:!0});var nv=r(pn);lh=a(nv,"here"),nv.forEach(t),dh=a(Yp,"."),Yp.forEach(t),ip=p(i),Ur=n(i,"P",{});var rv=r(Ur);hl=n(rv,"STRONG",{});var iv=r(hl);ph=a(iv,"STEP 2: Prepare your data in the SQA format"),iv.forEach(t),rv.forEach(t),lp=p(i),Eo=n(i,"P",{});var Jp=r(Eo);ch=a(Jp,"Second, no matter what you picked above, you should prepare your dataset in the "),cn=n(Jp,"A",{href:!0,rel:!0});var lv=r(cn);hh=a(lv,"SQA"),lv.forEach(t),uh=a(Jp," format. This format is a TSV/CSV file with the following columns:"),Jp.forEach(t),dp=p(i),We=n(i,"UL",{});var at=r(We);Rr=n(at,"LI",{});var VT=r(Rr);ul=n(VT,"CODE",{});var dv=r(ul);mh=a(dv,"id"),dv.forEach(t),fh=a(VT,": optional, id of the table-question pair, for bookkeeping purposes."),VT.forEach(t),gh=p(at),Gr=n(at,"LI",{});var KT=r(Gr);ml=n(KT,"CODE",{});var pv=r(ml);_h=a(pv,"annotator"),pv.forEach(t),Th=a(KT,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),KT.forEach(t),bh=p(at),Br=n(at,"LI",{});var YT=r(Br);fl=n(YT,"CODE",{});var cv=r(fl);vh=a(cv,"position"),cv.forEach(t),wh=a(YT,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),YT.forEach(t),yh=p(at),Vr=n(at,"LI",{});var JT=r(Vr);gl=n(JT,"CODE",{});var hv=r(gl);kh=a(hv,"question"),hv.forEach(t),qh=a(JT,": string"),JT.forEach(t),jh=p(at),Kr=n(at,"LI",{});var XT=r(Kr);_l=n(XT,"CODE",{});var uv=r(_l);$h=a(uv,"table_file"),uv.forEach(t),Eh=a(XT,": string, name of a csv file containing the tabular data"),XT.forEach(t),Fh=p(at),Yr=n(at,"LI",{});var ZT=r(Yr);Tl=n(ZT,"CODE",{});var mv=r(Tl);Ah=a(mv,"answer_coordinates"),mv.forEach(t),zh=a(ZT,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),ZT.forEach(t),xh=p(at),Jr=n(at,"LI",{});var eb=r(Jr);bl=n(eb,"CODE",{});var fv=r(bl);Ch=a(fv,"answer_text"),fv.forEach(t),Mh=a(eb,": list of one or more strings (each string being a cell value that is part of the answer)"),eb.forEach(t),Ph=p(at),Xr=n(at,"LI",{});var tb=r(Xr);vl=n(tb,"CODE",{});var gv=r(vl);Sh=a(gv,"aggregation_label"),gv.forEach(t),Dh=a(tb,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),tb.forEach(t),Nh=p(at),Zr=n(at,"LI",{});var sb=r(Zr);wl=n(sb,"CODE",{});var _v=r(wl);Oh=a(_v,"float_answer"),_v.forEach(t),Lh=a(sb,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),sb.forEach(t),at.forEach(t),pp=p(i),bt=n(i,"P",{});var js=r(bt);Qh=a(js,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),hn=n(js,"A",{href:!0,rel:!0});var Tv=r(hn);Ih=a(Tv,"here"),Tv.forEach(t),Wh=a(js,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),un=n(js,"A",{href:!0,rel:!0});var bv=r(un);Hh=a(bv,"here"),bv.forEach(t),Uh=a(js,". Interestingly, these conversion scripts are not perfect (the "),yl=n(js,"CODE",{});var vv=r(yl);Rh=a(vv,"answer_coordinates"),vv.forEach(t),Gh=a(js," and "),kl=n(js,"CODE",{});var wv=r(kl);Bh=a(wv,"float_answer"),wv.forEach(t),Vh=a(js," fields are populated based on the "),ql=n(js,"CODE",{});var yv=r(ql);Kh=a(yv,"answer_text"),yv.forEach(t),Yh=a(js,"), meaning that WTQ and WikiSQL results could actually be improved."),js.forEach(t),cp=p(i),ei=n(i,"P",{});var kv=r(ei);jl=n(kv,"STRONG",{});var qv=r(jl);Jh=a(qv,"STEP 3: Convert your data into tensors using TapasTokenizer"),qv.forEach(t),kv.forEach(t),hp=p(i),E(Fo.$$.fragment,i),up=p(i),Se=n(i,"P",{});var Je=r(Se);Xh=a(Je,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),$l=n(Je,"STRONG",{});var jv=r($l);Zh=a(jv,"not conversational"),jv.forEach(t),eu=a(Je,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),El=n(Je,"CODE",{});var $v=r(El);tu=a($v,"queries"),$v.forEach(t),su=a(Je,", "),Fl=n(Je,"CODE",{});var Ev=r(Fl);au=a(Ev,"answer_coordinates"),Ev.forEach(t),ou=a(Je," and "),Al=n(Je,"CODE",{});var Fv=r(Al);nu=a(Fv,"answer_text"),Fv.forEach(t),ru=a(Je," per table (in the order of their "),zl=n(Je,"CODE",{});var Av=r(zl);iu=a(Av,"position"),Av.forEach(t),lu=a(Je,`
index) and batch encode each table with its questions. This will make sure that the `),xl=n(Je,"CODE",{});var zv=r(xl);du=a(zv,"prev_labels"),zv.forEach(t),pu=a(Je," token types (see docs of "),ti=n(Je,"A",{href:!0});var xv=r(ti);cu=a(xv,"TapasTokenizer"),xv.forEach(t),hu=a(Je,") are set correctly. See "),mn=n(Je,"A",{href:!0,rel:!0});var Cv=r(mn);uu=a(Cv,"this notebook"),Cv.forEach(t),mu=a(Je," for more info. See "),fn=n(Je,"A",{href:!0,rel:!0});var Mv=r(fn);fu=a(Mv,"this notebook"),Mv.forEach(t),gu=a(Je," for more info regarding using the TensorFlow model."),Je.forEach(t),mp=p(i),si=n(i,"P",{});var Pv=r(si);_u=a(Pv,"**STEP 4: Train (fine-tune) the model"),Pv.forEach(t),fp=p(i),E(Ao.$$.fragment,i),gp=p(i),Ya=n(i,"H2",{class:!0});var Xp=r(Ya);zo=n(Xp,"A",{id:!0,class:!0,href:!0});var Sv=r(zo);Cl=n(Sv,"SPAN",{});var Dv=r(Cl);E(gn.$$.fragment,Dv),Dv.forEach(t),Sv.forEach(t),Tu=p(Xp),Ml=n(Xp,"SPAN",{});var Nv=r(Ml);bu=a(Nv,"Usage: inference"),Nv.forEach(t),Xp.forEach(t),_p=p(i),E(xo.$$.fragment,i),Tp=p(i),vt=n(i,"P",{});var $s=r(vt);vu=a($s,"In case of a conversational set-up, then each table-question pair must be provided "),Pl=n($s,"STRONG",{});var Ov=r(Pl);wu=a(Ov,"sequentially"),Ov.forEach(t),yu=a($s," to the model, such that the "),Sl=n($s,"CODE",{});var Lv=r(Sl);ku=a(Lv,"prev_labels"),Lv.forEach(t),qu=a($s," token types can be overwritten by the predicted "),Dl=n($s,"CODE",{});var Qv=r(Dl);ju=a(Qv,"labels"),Qv.forEach(t),$u=a($s," of the previous table-question pair. Again, more info can be found in "),_n=n($s,"A",{href:!0,rel:!0});var Iv=r(_n);Eu=a(Iv,"this notebook"),Iv.forEach(t),Fu=a($s," (for PyTorch) and "),Tn=n($s,"A",{href:!0,rel:!0});var Wv=r(Tn);Au=a(Wv,"this notebook"),Wv.forEach(t),zu=a($s," (for TensorFlow)."),$s.forEach(t),bp=p(i),Ja=n(i,"H2",{class:!0});var Zp=r(Ja);Co=n(Zp,"A",{id:!0,class:!0,href:!0});var Hv=r(Co);Nl=n(Hv,"SPAN",{});var Uv=r(Nl);E(bn.$$.fragment,Uv),Uv.forEach(t),Hv.forEach(t),xu=p(Zp),Ol=n(Zp,"SPAN",{});var Rv=r(Ol);Cu=a(Rv,"TAPAS specific outputs"),Rv.forEach(t),Zp.forEach(t),vp=p(i),Xa=n(i,"DIV",{class:!0});var ec=r(Xa);E(vn.$$.fragment,ec),Mu=p(ec),wn=n(ec,"P",{});var tc=r(wn);Pu=a(tc,"Output type of "),ai=n(tc,"A",{href:!0});var Gv=r(ai);Su=a(Gv,"TapasForQuestionAnswering"),Gv.forEach(t),Du=a(tc,"."),tc.forEach(t),ec.forEach(t),wp=p(i),Za=n(i,"H2",{class:!0});var sc=r(Za);Mo=n(sc,"A",{id:!0,class:!0,href:!0});var Bv=r(Mo);Ll=n(Bv,"SPAN",{});var Vv=r(Ll);E(yn.$$.fragment,Vv),Vv.forEach(t),Bv.forEach(t),Nu=p(sc),Ql=n(sc,"SPAN",{});var Kv=r(Ql);Ou=a(Kv,"TapasConfig"),Kv.forEach(t),sc.forEach(t),yp=p(i),it=n(i,"DIV",{class:!0});var Es=r(it);E(kn.$$.fragment,Es),Lu=p(Es),eo=n(Es,"P",{});var Oi=r(eo);Qu=a(Oi,"This is the configuration class to store the configuration of a "),oi=n(Oi,"A",{href:!0});var Yv=r(oi);Iu=a(Yv,"TapasModel"),Yv.forEach(t),Wu=a(Oi,`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS
`),qn=n(Oi,"A",{href:!0,rel:!0});var Jv=r(qn);Hu=a(Jv,"google/tapas-base-finetuned-sqa"),Jv.forEach(t),Uu=a(Oi," architecture."),Oi.forEach(t),Ru=p(Es),to=n(Es,"P",{});var Li=r(to);Gu=a(Li,"Configuration objects inherit from "),Il=n(Li,"CODE",{});var Xv=r(Il);Bu=a(Xv,"PreTrainedConfig"),Xv.forEach(t),Vu=a(Li,` and can be used to control the model outputs. Read the
documentation from `),ni=n(Li,"A",{href:!0});var Zv=r(ni);Ku=a(Zv,"PretrainedConfig"),Zv.forEach(t),Yu=a(Li," for more information."),Li.forEach(t),Ju=p(Es),jn=n(Es,"P",{});var ac=r(jn);Xu=a(ac,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),$n=n(ac,"A",{href:!0,rel:!0});var ew=r($n);Zu=a(ew,"https://github.com/google-research/tapas/tree/master"),ew.forEach(t),em=a(ac,"."),ac.forEach(t),tm=p(Es),Wl=n(Es,"P",{});var tw=r(Wl);sm=a(tw,"Example:"),tw.forEach(t),am=p(Es),E(En.$$.fragment,Es),Es.forEach(t),kp=p(i),so=n(i,"H2",{class:!0});var oc=r(so);Po=n(oc,"A",{id:!0,class:!0,href:!0});var sw=r(Po);Hl=n(sw,"SPAN",{});var aw=r(Hl);E(Fn.$$.fragment,aw),aw.forEach(t),sw.forEach(t),om=p(oc),Ul=n(oc,"SPAN",{});var ow=r(Ul);nm=a(ow,"TapasTokenizer"),ow.forEach(t),oc.forEach(t),qp=p(i),Be=n(i,"DIV",{class:!0});var wt=r(Be);E(An.$$.fragment,wt),rm=p(wt),Rl=n(wt,"P",{});var nw=r(Rl);im=a(nw,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),nw.forEach(t),lm=p(wt),Qe=n(wt,"P",{});var Xe=r(Qe);dm=a(Xe,"This tokenizer inherits from "),ri=n(Xe,"A",{href:!0});var rw=r(ri);pm=a(rw,"PreTrainedTokenizer"),rw.forEach(t),cm=a(Xe,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ii=n(Xe,"A",{href:!0});var iw=r(ii);hm=a(iw,"TapasTokenizer"),iw.forEach(t),um=a(Xe,` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Gl=n(Xe,"CODE",{});var lw=r(Gl);mm=a(lw,"segment_ids"),lw.forEach(t),fm=a(Xe,`,
`),Bl=n(Xe,"CODE",{});var dw=r(Bl);gm=a(dw,"column_ids"),dw.forEach(t),_m=a(Xe,", "),Vl=n(Xe,"CODE",{});var pw=r(Vl);Tm=a(pw,"row_ids"),pw.forEach(t),bm=a(Xe,", "),Kl=n(Xe,"CODE",{});var cw=r(Kl);vm=a(cw,"prev_labels"),cw.forEach(t),wm=a(Xe,", "),Yl=n(Xe,"CODE",{});var hw=r(Yl);ym=a(hw,"column_ranks"),hw.forEach(t),km=a(Xe,", "),Jl=n(Xe,"CODE",{});var uw=r(Jl);qm=a(uw,"inv_column_ranks"),uw.forEach(t),jm=a(Xe," and "),Xl=n(Xe,"CODE",{});var mw=r(Xl);$m=a(mw,"numeric_relations"),mw.forEach(t),Em=a(Xe,":"),Xe.forEach(t),Fm=p(wt),lt=n(wt,"UL",{});var as=r(lt);Zl=n(as,"LI",{});var fw=r(Zl);Am=a(fw,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),fw.forEach(t),zm=p(as),ed=n(as,"LI",{});var gw=r(ed);xm=a(gw,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),gw.forEach(t),Cm=p(as),td=n(as,"LI",{});var _w=r(td);Mm=a(_w,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),_w.forEach(t),Pm=p(as),sd=n(as,"LI",{});var Tw=r(sd);Sm=a(Tw,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Tw.forEach(t),Dm=p(as),ad=n(as,"LI",{});var bw=r(ad);Nm=a(bw,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),bw.forEach(t),Om=p(as),od=n(as,"LI",{});var vw=r(od);Lm=a(vw,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),vw.forEach(t),Qm=p(as),nd=n(as,"LI",{});var ww=r(nd);Im=a(ww,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),ww.forEach(t),as.forEach(t),Wm=p(wt),li=n(wt,"P",{});var ab=r(li);di=n(ab,"A",{href:!0});var yw=r(di);Hm=a(yw,"TapasTokenizer"),yw.forEach(t),Um=a(ab,` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),ab.forEach(t),Rm=p(wt),So=n(wt,"DIV",{class:!0});var nc=r(So);E(zn.$$.fragment,nc),Gm=p(nc),rd=n(nc,"P",{});var kw=r(rd);Bm=a(kw,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),kw.forEach(t),nc.forEach(t),Vm=p(wt),Ta=n(wt,"DIV",{class:!0});var Qi=r(Ta);E(xn.$$.fragment,Qi),Km=p(Qi),Cn=n(Qi,"P",{});var rc=r(Cn);Ym=a(rc,"Converts logits of "),pi=n(rc,"A",{href:!0});var qw=r(pi);Jm=a(qw,"TapasForQuestionAnswering"),qw.forEach(t),Xm=a(rc,` to actual predicted answer coordinates and optional
aggregation indices.`),rc.forEach(t),Zm=p(Qi),Mn=n(Qi,"P",{});var ic=r(Mn);ef=a(ic,`The original implementation, on which this function is based, can be found
`),Pn=n(ic,"A",{href:!0,rel:!0});var jw=r(Pn);tf=a(jw,"here"),jw.forEach(t),sf=a(ic,"."),ic.forEach(t),Qi.forEach(t),af=p(wt),ci=n(wt,"DIV",{class:!0});var $w=r(ci);E(Sn.$$.fragment,$w),$w.forEach(t),wt.forEach(t),jp=p(i),ao=n(i,"H2",{class:!0});var lc=r(ao);Do=n(lc,"A",{id:!0,class:!0,href:!0});var Ew=r(Do);id=n(Ew,"SPAN",{});var Fw=r(id);E(Dn.$$.fragment,Fw),Fw.forEach(t),Ew.forEach(t),of=p(lc),ld=n(lc,"SPAN",{});var Aw=r(ld);nf=a(Aw,"TapasModel"),Aw.forEach(t),lc.forEach(t),$p=p(i),dt=n(i,"DIV",{class:!0});var Fs=r(dt);E(Nn.$$.fragment,Fs),rf=p(Fs),On=n(Fs,"P",{});var dc=r(On);lf=a(dc,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),hi=n(dc,"A",{href:!0});var zw=r(hi);df=a(zw,"PreTrainedModel"),zw.forEach(t),pf=a(dc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dc.forEach(t),cf=p(Fs),Ln=n(Fs,"P",{});var pc=r(Ln);hf=a(pc,"This model is also a PyTorch "),Qn=n(pc,"A",{href:!0,rel:!0});var xw=r(Qn);uf=a(xw,"torch.nn.Module"),xw.forEach(t),mf=a(pc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pc.forEach(t),ff=p(Fs),In=n(Fs,"P",{});var cc=r(In);gf=a(cc,"This class is a small change compared to "),ui=n(cc,"A",{href:!0});var Cw=r(ui);_f=a(Cw,"BertModel"),Cw.forEach(t),Tf=a(cc,", taking into account the additional token type ids."),cc.forEach(t),bf=p(Fs),Wn=n(Fs,"P",{});var hc=r(Wn);vf=a(hc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Hn=n(hc,"A",{href:!0,rel:!0});var Mw=r(Hn);wf=a(Mw,`Attention is
all you need`),Mw.forEach(t),yf=a(hc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),hc.forEach(t),kf=p(Fs),Vt=n(Fs,"DIV",{class:!0});var ba=r(Vt);E(Un.$$.fragment,ba),qf=p(ba),oo=n(ba,"P",{});var Ii=r(oo);jf=a(Ii,"The "),mi=n(Ii,"A",{href:!0});var Pw=r(mi);$f=a(Pw,"TapasModel"),Pw.forEach(t),Ef=a(Ii," forward method, overrides the "),dd=n(Ii,"CODE",{});var Sw=r(dd);Ff=a(Sw,"__call__"),Sw.forEach(t),Af=a(Ii," special method."),Ii.forEach(t),zf=p(ba),E(No.$$.fragment,ba),xf=p(ba),pd=n(ba,"P",{});var Dw=r(pd);Cf=a(Dw,"Examples:"),Dw.forEach(t),Mf=p(ba),E(Rn.$$.fragment,ba),ba.forEach(t),Fs.forEach(t),Ep=p(i),no=n(i,"H2",{class:!0});var uc=r(no);Oo=n(uc,"A",{id:!0,class:!0,href:!0});var Nw=r(Oo);cd=n(Nw,"SPAN",{});var Ow=r(cd);E(Gn.$$.fragment,Ow),Ow.forEach(t),Nw.forEach(t),Pf=p(uc),hd=n(uc,"SPAN",{});var Lw=r(hd);Sf=a(Lw,"TapasForMaskedLM"),Lw.forEach(t),uc.forEach(t),Fp=p(i),_s=n(i,"DIV",{class:!0});var nn=r(_s);E(Bn.$$.fragment,nn),Df=p(nn),ro=n(nn,"P",{});var Wi=r(ro);Nf=a(Wi,"Tapas Model with a "),ud=n(Wi,"CODE",{});var Qw=r(ud);Of=a(Qw,"language modeling"),Qw.forEach(t),Lf=a(Wi,` head on top.
This model inherits from `),fi=n(Wi,"A",{href:!0});var Iw=r(fi);Qf=a(Iw,"PreTrainedModel"),Iw.forEach(t),If=a(Wi,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wi.forEach(t),Wf=p(nn),Vn=n(nn,"P",{});var mc=r(Vn);Hf=a(mc,"This model is also a PyTorch "),Kn=n(mc,"A",{href:!0,rel:!0});var Ww=r(Kn);Uf=a(Ww,"torch.nn.Module"),Ww.forEach(t),Rf=a(mc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mc.forEach(t),Gf=p(nn),Kt=n(nn,"DIV",{class:!0});var va=r(Kt);E(Yn.$$.fragment,va),Bf=p(va),io=n(va,"P",{});var Hi=r(io);Vf=a(Hi,"The "),gi=n(Hi,"A",{href:!0});var Hw=r(gi);Kf=a(Hw,"TapasForMaskedLM"),Hw.forEach(t),Yf=a(Hi," forward method, overrides the "),md=n(Hi,"CODE",{});var Uw=r(md);Jf=a(Uw,"__call__"),Uw.forEach(t),Xf=a(Hi," special method."),Hi.forEach(t),Zf=p(va),E(Lo.$$.fragment,va),eg=p(va),fd=n(va,"P",{});var Rw=r(fd);tg=a(Rw,"Examples:"),Rw.forEach(t),sg=p(va),E(Jn.$$.fragment,va),va.forEach(t),nn.forEach(t),Ap=p(i),lo=n(i,"H2",{class:!0});var fc=r(lo);Qo=n(fc,"A",{id:!0,class:!0,href:!0});var Gw=r(Qo);gd=n(Gw,"SPAN",{});var Bw=r(gd);E(Xn.$$.fragment,Bw),Bw.forEach(t),Gw.forEach(t),ag=p(fc),_d=n(fc,"SPAN",{});var Vw=r(_d);og=a(Vw,"TapasForSequenceClassification"),Vw.forEach(t),fc.forEach(t),zp=p(i),Ht=n(i,"DIV",{class:!0});var wa=r(Ht);E(Zn.$$.fragment,wa),ng=p(wa),Td=n(wa,"P",{});var Kw=r(Td);rg=a(Kw,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Kw.forEach(t),ig=p(wa),er=n(wa,"P",{});var gc=r(er);lg=a(gc,"This model inherits from "),_i=n(gc,"A",{href:!0});var Yw=r(_i);dg=a(Yw,"PreTrainedModel"),Yw.forEach(t),pg=a(gc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc.forEach(t),cg=p(wa),tr=n(wa,"P",{});var _c=r(tr);hg=a(_c,"This model is also a PyTorch "),sr=n(_c,"A",{href:!0,rel:!0});var Jw=r(sr);ug=a(Jw,"torch.nn.Module"),Jw.forEach(t),mg=a(_c,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_c.forEach(t),fg=p(wa),Yt=n(wa,"DIV",{class:!0});var ya=r(Yt);E(ar.$$.fragment,ya),gg=p(ya),po=n(ya,"P",{});var Ui=r(po);_g=a(Ui,"The "),Ti=n(Ui,"A",{href:!0});var Xw=r(Ti);Tg=a(Xw,"TapasForSequenceClassification"),Xw.forEach(t),bg=a(Ui," forward method, overrides the "),bd=n(Ui,"CODE",{});var Zw=r(bd);vg=a(Zw,"__call__"),Zw.forEach(t),wg=a(Ui," special method."),Ui.forEach(t),yg=p(ya),E(Io.$$.fragment,ya),kg=p(ya),vd=n(ya,"P",{});var ey=r(vd);qg=a(ey,"Examples:"),ey.forEach(t),jg=p(ya),E(or.$$.fragment,ya),ya.forEach(t),wa.forEach(t),xp=p(i),co=n(i,"H2",{class:!0});var Tc=r(co);Wo=n(Tc,"A",{id:!0,class:!0,href:!0});var ty=r(Wo);wd=n(ty,"SPAN",{});var sy=r(wd);E(nr.$$.fragment,sy),sy.forEach(t),ty.forEach(t),$g=p(Tc),yd=n(Tc,"SPAN",{});var ay=r(yd);Eg=a(ay,"TapasForQuestionAnswering"),ay.forEach(t),Tc.forEach(t),Cp=p(i),Ut=n(i,"DIV",{class:!0});var ka=r(Ut);E(rr.$$.fragment,ka),Fg=p(ka),ho=n(ka,"P",{});var Ri=r(ho);Ag=a(Ri,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),kd=n(Ri,"CODE",{});var oy=r(kd);zg=a(oy,"logits"),oy.forEach(t),xg=a(Ri," and optional "),qd=n(Ri,"CODE",{});var ny=r(qd);Cg=a(ny,"logits_aggregation"),ny.forEach(t),Mg=a(Ri,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Ri.forEach(t),Pg=p(ka),ir=n(ka,"P",{});var bc=r(ir);Sg=a(bc,"This model inherits from "),bi=n(bc,"A",{href:!0});var ry=r(bi);Dg=a(ry,"PreTrainedModel"),ry.forEach(t),Ng=a(bc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bc.forEach(t),Og=p(ka),lr=n(ka,"P",{});var vc=r(lr);Lg=a(vc,"This model is also a PyTorch "),dr=n(vc,"A",{href:!0,rel:!0});var iy=r(dr);Qg=a(iy,"torch.nn.Module"),iy.forEach(t),Ig=a(vc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vc.forEach(t),Wg=p(ka),Jt=n(ka,"DIV",{class:!0});var qa=r(Jt);E(pr.$$.fragment,qa),Hg=p(qa),uo=n(qa,"P",{});var Gi=r(uo);Ug=a(Gi,"The "),vi=n(Gi,"A",{href:!0});var ly=r(vi);Rg=a(ly,"TapasForQuestionAnswering"),ly.forEach(t),Gg=a(Gi," forward method, overrides the "),jd=n(Gi,"CODE",{});var dy=r(jd);Bg=a(dy,"__call__"),dy.forEach(t),Vg=a(Gi," special method."),Gi.forEach(t),Kg=p(qa),E(Ho.$$.fragment,qa),Yg=p(qa),$d=n(qa,"P",{});var py=r($d);Jg=a(py,"Examples:"),py.forEach(t),Xg=p(qa),E(cr.$$.fragment,qa),qa.forEach(t),ka.forEach(t),Mp=p(i),mo=n(i,"H2",{class:!0});var wc=r(mo);Uo=n(wc,"A",{id:!0,class:!0,href:!0});var cy=r(Uo);Ed=n(cy,"SPAN",{});var hy=r(Ed);E(hr.$$.fragment,hy),hy.forEach(t),cy.forEach(t),Zg=p(wc),Fd=n(wc,"SPAN",{});var uy=r(Fd);e_=a(uy,"TFTapasModel"),uy.forEach(t),wc.forEach(t),Pp=p(i),pt=n(i,"DIV",{class:!0});var As=r(pt);E(ur.$$.fragment,As),t_=p(As),Ad=n(As,"P",{});var my=r(Ad);s_=a(my,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),my.forEach(t),a_=p(As),mr=n(As,"P",{});var yc=r(mr);o_=a(yc,"This model inherits from "),wi=n(yc,"A",{href:!0});var fy=r(wi);n_=a(fy,"TFPreTrainedModel"),fy.forEach(t),r_=a(yc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yc.forEach(t),i_=p(As),fr=n(As,"P",{});var kc=r(fr);l_=a(kc,"This model is also a "),gr=n(kc,"A",{href:!0,rel:!0});var gy=r(gr);d_=a(gy,"tf.keras.Model"),gy.forEach(t),p_=a(kc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kc.forEach(t),c_=p(As),E(Ro.$$.fragment,As),h_=p(As),Xt=n(As,"DIV",{class:!0});var ja=r(Xt);E(_r.$$.fragment,ja),u_=p(ja),fo=n(ja,"P",{});var Bi=r(fo);m_=a(Bi,"The "),yi=n(Bi,"A",{href:!0});var _y=r(yi);f_=a(_y,"TFTapasModel"),_y.forEach(t),g_=a(Bi," forward method, overrides the "),zd=n(Bi,"CODE",{});var Ty=r(zd);__=a(Ty,"__call__"),Ty.forEach(t),T_=a(Bi," special method."),Bi.forEach(t),b_=p(ja),E(Go.$$.fragment,ja),v_=p(ja),xd=n(ja,"P",{});var by=r(xd);w_=a(by,"Examples:"),by.forEach(t),y_=p(ja),E(Tr.$$.fragment,ja),ja.forEach(t),As.forEach(t),Sp=p(i),go=n(i,"H2",{class:!0});var qc=r(go);Bo=n(qc,"A",{id:!0,class:!0,href:!0});var vy=r(Bo);Cd=n(vy,"SPAN",{});var wy=r(Cd);E(br.$$.fragment,wy),wy.forEach(t),vy.forEach(t),k_=p(qc),Md=n(qc,"SPAN",{});var yy=r(Md);q_=a(yy,"TFTapasForMaskedLM"),yy.forEach(t),qc.forEach(t),Dp=p(i),ct=n(i,"DIV",{class:!0});var zs=r(ct);E(vr.$$.fragment,zs),j_=p(zs),wr=n(zs,"P",{});var jc=r(wr);$_=a(jc,"Tapas Model with a "),Pd=n(jc,"CODE",{});var ky=r(Pd);E_=a(ky,"language modeling"),ky.forEach(t),F_=a(jc," head on top."),jc.forEach(t),A_=p(zs),yr=n(zs,"P",{});var $c=r(yr);z_=a($c,"This model inherits from "),ki=n($c,"A",{href:!0});var qy=r(ki);x_=a(qy,"TFPreTrainedModel"),qy.forEach(t),C_=a($c,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$c.forEach(t),M_=p(zs),kr=n(zs,"P",{});var Ec=r(kr);P_=a(Ec,"This model is also a "),qr=n(Ec,"A",{href:!0,rel:!0});var jy=r(qr);S_=a(jy,"tf.keras.Model"),jy.forEach(t),D_=a(Ec,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ec.forEach(t),N_=p(zs),E(Vo.$$.fragment,zs),O_=p(zs),Zt=n(zs,"DIV",{class:!0});var $a=r(Zt);E(jr.$$.fragment,$a),L_=p($a),_o=n($a,"P",{});var Vi=r(_o);Q_=a(Vi,"The "),qi=n(Vi,"A",{href:!0});var $y=r(qi);I_=a($y,"TFTapasForMaskedLM"),$y.forEach(t),W_=a(Vi," forward method, overrides the "),Sd=n(Vi,"CODE",{});var Ey=r(Sd);H_=a(Ey,"__call__"),Ey.forEach(t),U_=a(Vi," special method."),Vi.forEach(t),R_=p($a),E(Ko.$$.fragment,$a),G_=p($a),Dd=n($a,"P",{});var Fy=r(Dd);B_=a(Fy,"Examples:"),Fy.forEach(t),V_=p($a),E($r.$$.fragment,$a),$a.forEach(t),zs.forEach(t),Np=p(i),To=n(i,"H2",{class:!0});var Fc=r(To);Yo=n(Fc,"A",{id:!0,class:!0,href:!0});var Ay=r(Yo);Nd=n(Ay,"SPAN",{});var zy=r(Nd);E(Er.$$.fragment,zy),zy.forEach(t),Ay.forEach(t),K_=p(Fc),Od=n(Fc,"SPAN",{});var xy=r(Od);Y_=a(xy,"TFTapasForSequenceClassification"),xy.forEach(t),Fc.forEach(t),Op=p(i),ht=n(i,"DIV",{class:!0});var xs=r(ht);E(Fr.$$.fragment,xs),J_=p(xs),Ld=n(xs,"P",{});var Cy=r(Ld);X_=a(Cy,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Cy.forEach(t),Z_=p(xs),Ar=n(xs,"P",{});var Ac=r(Ar);eT=a(Ac,"This model inherits from "),ji=n(Ac,"A",{href:!0});var My=r(ji);tT=a(My,"TFPreTrainedModel"),My.forEach(t),sT=a(Ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ac.forEach(t),aT=p(xs),zr=n(xs,"P",{});var zc=r(zr);oT=a(zc,"This model is also a "),xr=n(zc,"A",{href:!0,rel:!0});var Py=r(xr);nT=a(Py,"tf.keras.Model"),Py.forEach(t),rT=a(zc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zc.forEach(t),iT=p(xs),E(Jo.$$.fragment,xs),lT=p(xs),es=n(xs,"DIV",{class:!0});var Ea=r(es);E(Cr.$$.fragment,Ea),dT=p(Ea),bo=n(Ea,"P",{});var Ki=r(bo);pT=a(Ki,"The "),$i=n(Ki,"A",{href:!0});var Sy=r($i);cT=a(Sy,"TFTapasForSequenceClassification"),Sy.forEach(t),hT=a(Ki," forward method, overrides the "),Qd=n(Ki,"CODE",{});var Dy=r(Qd);uT=a(Dy,"__call__"),Dy.forEach(t),mT=a(Ki," special method."),Ki.forEach(t),fT=p(Ea),E(Xo.$$.fragment,Ea),gT=p(Ea),Id=n(Ea,"P",{});var Ny=r(Id);_T=a(Ny,"Examples:"),Ny.forEach(t),TT=p(Ea),E(Mr.$$.fragment,Ea),Ea.forEach(t),xs.forEach(t),Lp=p(i),vo=n(i,"H2",{class:!0});var xc=r(vo);Zo=n(xc,"A",{id:!0,class:!0,href:!0});var Oy=r(Zo);Wd=n(Oy,"SPAN",{});var Ly=r(Wd);E(Pr.$$.fragment,Ly),Ly.forEach(t),Oy.forEach(t),bT=p(xc),Hd=n(xc,"SPAN",{});var Qy=r(Hd);vT=a(Qy,"TFTapasForQuestionAnswering"),Qy.forEach(t),xc.forEach(t),Qp=p(i),ut=n(i,"DIV",{class:!0});var Cs=r(ut);E(Sr.$$.fragment,Cs),wT=p(Cs),wo=n(Cs,"P",{});var Yi=r(wo);yT=a(Yi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Ud=n(Yi,"CODE",{});var Iy=r(Ud);kT=a(Iy,"logits"),Iy.forEach(t),qT=a(Yi," and optional "),Rd=n(Yi,"CODE",{});var Wy=r(Rd);jT=a(Wy,"logits_aggregation"),Wy.forEach(t),$T=a(Yi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Yi.forEach(t),ET=p(Cs),Dr=n(Cs,"P",{});var Cc=r(Dr);FT=a(Cc,"This model inherits from "),Ei=n(Cc,"A",{href:!0});var Hy=r(Ei);AT=a(Hy,"TFPreTrainedModel"),Hy.forEach(t),zT=a(Cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cc.forEach(t),xT=p(Cs),Nr=n(Cs,"P",{});var Mc=r(Nr);CT=a(Mc,"This model is also a "),Or=n(Mc,"A",{href:!0,rel:!0});var Uy=r(Or);MT=a(Uy,"tf.keras.Model"),Uy.forEach(t),PT=a(Mc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mc.forEach(t),ST=p(Cs),E(en.$$.fragment,Cs),DT=p(Cs),ts=n(Cs,"DIV",{class:!0});var Fa=r(ts);E(Lr.$$.fragment,Fa),NT=p(Fa),yo=n(Fa,"P",{});var Ji=r(yo);OT=a(Ji,"The "),Fi=n(Ji,"A",{href:!0});var Ry=r(Fi);LT=a(Ry,"TFTapasForQuestionAnswering"),Ry.forEach(t),QT=a(Ji," forward method, overrides the "),Gd=n(Ji,"CODE",{});var Gy=r(Gd);IT=a(Gy,"__call__"),Gy.forEach(t),WT=a(Ji," special method."),Ji.forEach(t),HT=p(Fa),E(tn.$$.fragment,Fa),UT=p(Fa),Bd=n(Fa,"P",{});var By=r(Bd);RT=a(By,"Examples:"),By.forEach(t),GT=p(Fa),E(Qr.$$.fragment,Fa),Fa.forEach(t),Cs.forEach(t),this.h()},h(){h(l,"name","hf:doc:metadata"),h(l,"content",JSON.stringify(Ak)),h(f,"id","tapas"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#tapas"),h(c,"class","relative group"),h(H,"id","overview"),h(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(H,"href","#overview"),h(q,"class","relative group"),h(M,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),h(M,"rel","nofollow"),h(P,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),h(P,"rel","nofollow"),h(Y,"href","https://github.com/ppasupat/WikiTableQuestions"),h(Y,"rel","nofollow"),h(ne,"href","https://github.com/salesforce/WikiSQL"),h(ne,"rel","nofollow"),h(ye,"href","https://github.com/wenhuchen/Table-Fact-Checking"),h(ye,"rel","nofollow"),h(Ze,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),h(Ze,"rel","nofollow"),Xy(ft.src,pa="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||h(ft,"src",pa),h(ft,"alt","drawing"),h(ft,"width","600"),h(tt,"href","https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html"),h(yt,"href","https://huggingface.co/nielsr"),h(yt,"rel","nofollow"),h(qt,"href","https://huggingface.co/kamalkraj"),h(qt,"rel","nofollow"),h($t,"href","https://github.com/google-research/tapas"),h($t,"rel","nofollow"),h(Bt,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasConfig"),h(Ct,"href","https://huggingface.co/models?search=tapas"),h(Ct,"rel","nofollow"),h(Ot,"href","https://github.com/google-research/tapas%3E"),h(Ot,"rel","nofollow"),h(st,"id","usage-finetuning"),h(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(st,"href","#usage-finetuning"),h(It,"class","relative group"),h(vs,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(ys,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(dn,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),h(dn,"rel","nofollow"),h(pn,"href","https://huggingface.co/models?search=tapas"),h(pn,"rel","nofollow"),h(cn,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),h(cn,"rel","nofollow"),h(hn,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),h(hn,"rel","nofollow"),h(un,"href","https://github.com/NielsRogge/tapas_utils"),h(un,"rel","nofollow"),h(ti,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer"),h(mn,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(mn,"rel","nofollow"),h(fn,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(fn,"rel","nofollow"),h(zo,"id","usage-inference"),h(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zo,"href","#usage-inference"),h(Ya,"class","relative group"),h(_n,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(_n,"rel","nofollow"),h(Tn,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(Tn,"rel","nofollow"),h(Co,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),h(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Co,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),h(Ja,"class","relative group"),h(ai,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Xa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mo,"id","transformers.TapasConfig"),h(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Mo,"href","#transformers.TapasConfig"),h(Za,"class","relative group"),h(oi,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasModel"),h(qn,"href","https://huggingface.co/google/tapas-base-finetuned-sqa"),h(qn,"rel","nofollow"),h(ni,"href","/docs/transformers/pr_16937/en/main_classes/configuration#transformers.PretrainedConfig"),h($n,"href","https://github.com/google-research/tapas/tree/master"),h($n,"rel","nofollow"),h(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Po,"id","transformers.TapasTokenizer"),h(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Po,"href","#transformers.TapasTokenizer"),h(so,"class","relative group"),h(ri,"href","/docs/transformers/pr_16937/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(ii,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer"),h(di,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasTokenizer"),h(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pi,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Pn,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),h(Pn,"rel","nofollow"),h(Ta,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ci,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Do,"id","transformers.TapasModel"),h(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Do,"href","#transformers.TapasModel"),h(ao,"class","relative group"),h(hi,"href","/docs/transformers/pr_16937/en/main_classes/model#transformers.PreTrainedModel"),h(Qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Qn,"rel","nofollow"),h(ui,"href","/docs/transformers/pr_16937/en/model_doc/bert#transformers.BertModel"),h(Hn,"href","https://arxiv.org/abs/1706.03762"),h(Hn,"rel","nofollow"),h(mi,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasModel"),h(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Oo,"id","transformers.TapasForMaskedLM"),h(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Oo,"href","#transformers.TapasForMaskedLM"),h(no,"class","relative group"),h(fi,"href","/docs/transformers/pr_16937/en/main_classes/model#transformers.PreTrainedModel"),h(Kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Kn,"rel","nofollow"),h(gi,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasForMaskedLM"),h(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_s,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qo,"id","transformers.TapasForSequenceClassification"),h(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qo,"href","#transformers.TapasForSequenceClassification"),h(lo,"class","relative group"),h(_i,"href","/docs/transformers/pr_16937/en/main_classes/model#transformers.PreTrainedModel"),h(sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(sr,"rel","nofollow"),h(Ti,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasForSequenceClassification"),h(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Wo,"id","transformers.TapasForQuestionAnswering"),h(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wo,"href","#transformers.TapasForQuestionAnswering"),h(co,"class","relative group"),h(bi,"href","/docs/transformers/pr_16937/en/main_classes/model#transformers.PreTrainedModel"),h(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(dr,"rel","nofollow"),h(vi,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Uo,"id","transformers.TFTapasModel"),h(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Uo,"href","#transformers.TFTapasModel"),h(mo,"class","relative group"),h(wi,"href","/docs/transformers/pr_16937/en/main_classes/model#transformers.TFPreTrainedModel"),h(gr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(gr,"rel","nofollow"),h(yi,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TFTapasModel"),h(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bo,"id","transformers.TFTapasForMaskedLM"),h(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bo,"href","#transformers.TFTapasForMaskedLM"),h(go,"class","relative group"),h(ki,"href","/docs/transformers/pr_16937/en/main_classes/model#transformers.TFPreTrainedModel"),h(qr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(qr,"rel","nofollow"),h(qi,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yo,"id","transformers.TFTapasForSequenceClassification"),h(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yo,"href","#transformers.TFTapasForSequenceClassification"),h(To,"class","relative group"),h(ji,"href","/docs/transformers/pr_16937/en/main_classes/model#transformers.TFPreTrainedModel"),h(xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(xr,"rel","nofollow"),h($i,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),h(es,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zo,"id","transformers.TFTapasForQuestionAnswering"),h(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zo,"href","#transformers.TFTapasForQuestionAnswering"),h(vo,"class","relative group"),h(Ei,"href","/docs/transformers/pr_16937/en/main_classes/model#transformers.TFPreTrainedModel"),h(Or,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Or,"rel","nofollow"),h(Fi,"href","/docs/transformers/pr_16937/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,m){e(document.head,l),u(i,_,m),u(i,c,m),e(c,f),e(f,b),F(v,b,null),e(c,T),e(c,k),e(k,y),u(i,D,m),u(i,q,m),e(q,H),e(H,B),F(V,B,null),e(q,R),e(q,K),e(K,re),u(i,I,m),u(i,O,m),e(O,w),e(O,M),e(M,G),e(O,C),u(i,N,m),u(i,ee,m),e(ee,te),u(i,ce,m),u(i,oe,m),e(oe,se),e(se,P),e(P,L),e(se,W),e(oe,X),e(oe,Q),e(Q,Y),e(Y,ge),e(Q,ue),e(oe,_e),e(oe,me),e(me,ne),e(ne,qe),e(me,ie),u(i,ve,m),u(i,g,m),e(g,S),u(i,be,m),u(i,ze,m),e(ze,we),u(i,le,m),u(i,xe,m),e(xe,Me),e(Me,Z),u(i,de,m),u(i,pe,m),e(pe,De),e(pe,je),e(je,Te),e(pe,Ne),e(pe,ye),e(ye,Ae),e(pe,Oe),e(pe,Ze),e(Ze,Ps),e(pe,Ss),u(i,mt,m),u(i,ft,m),u(i,gt,m),u(i,_t,m),e(_t,Ds),e(_t,tt),e(tt,Ns),e(_t,Os),u(i,Ke,m),u(i,Pe,m),e(Pe,Ls),e(Pe,yt),e(yt,ke),e(Pe,kt),e(Pe,qt),e(qt,Qs),e(Pe,jt),e(Pe,$t),e($t,Is),e(Pe,Et),u(i,Ts,m),u(i,Gt,m),e(Gt,Ft),u(i,bs,m),u(i,Ye,m),e(Ye,$e),e($e,Ws),e($e,At),e(At,ae),e($e,ot),e($e,Bt),e(Bt,Hs),e($e,zt),e($e,os),e(os,Us),e($e,xt),e($e,Ct),e(Ct,Rs),e($e,Mt),e($e,ns),e(ns,Gs),e($e,Pt),e($e,rs),e(rs,Bs),e($e,St),e(Ye,Vs),e(Ye,Le),e(Le,Dt),e(Le,is),e(is,Ks),e(Le,Nt),e(Le,ls),e(ls,Ys),e(Le,ds),e(Le,Ue),e(Ue,ps),e(Le,Ee),e(Le,cs),e(cs,nt),e(Le,Js),e(Le,Ot),e(Ot,Lt),e(Le,Xs),e(Ye,Zs),e(Ye,Re),e(Re,ea),e(Re,hs),e(hs,us),e(Re,et),e(Re,Qt),e(Qt,j),e(Re,J),e(Ye,Aa),e(Ye,ta),e(ta,za),u(i,ca,m),u(i,It,m),e(It,st),e(st,sa),F(rt,sa,null),e(It,xa),e(It,aa),e(aa,Ca),u(i,ha,m),u(i,Ie,m),e(Ie,ms),e(Ie,vs),e(vs,Ge),e(Ie,Ma),u(i,ua,m),u(i,ws,m),e(ws,oa),e(oa,fs),u(i,ma,m),u(i,fe,m),e(fe,Pa),e(fe,ys),e(ys,Sa),e(fe,Da),u(i,fa,m),u(i,Tt,m),e(Tt,na),e(na,gs),e(Tt,Na),e(Tt,Fe),e(Fe,Oa),e(Fe,ra),e(ra,La),e(Fe,Qa),e(Tt,Ia),e(Tt,he),e(he,Wa),e(he,ia),e(ia,Ha),e(he,Ua),u(i,ga,m),u(i,ks,m),e(ks,Ra),u(i,_a,m),u(i,Ce,m),e(Ce,la),e(la,Wt),e(Wt,da),e(da,Xi),e(Xi,Sc),e(Wt,Dc),e(Wt,Zi),e(Zi,el),e(el,Nc),e(Wt,Oc),e(Wt,tl),e(tl,sl),e(sl,Lc),e(Ce,Qc),e(Ce,Ga),e(Ga,Ba),e(Ba,al),e(al,Ic),e(Ba,Wc),e(Ba,ol),e(ol,Hc),e(Ba,Uc),e(Ba,nl),e(nl,Rc),e(Ga,Gc),e(Ga,Va),e(Va,rl),e(rl,Bc),e(Va,Vc),e(Va,il),e(il,Kc),e(Va,Yc),e(Va,ll),e(ll,Jc),e(Ga,Xc),e(Ga,Ka),e(Ka,dl),e(dl,Zc),e(Ka,eh),e(Ka,pl),e(pl,th),e(Ka,sh),e(Ka,cl),e(cl,ah),u(i,op,m),F(qo,i,m),u(i,np,m),u(i,jo,m),e(jo,oh),e(jo,dn),e(dn,nh),e(jo,rh),u(i,rp,m),u(i,$o,m),e($o,ih),e($o,pn),e(pn,lh),e($o,dh),u(i,ip,m),u(i,Ur,m),e(Ur,hl),e(hl,ph),u(i,lp,m),u(i,Eo,m),e(Eo,ch),e(Eo,cn),e(cn,hh),e(Eo,uh),u(i,dp,m),u(i,We,m),e(We,Rr),e(Rr,ul),e(ul,mh),e(Rr,fh),e(We,gh),e(We,Gr),e(Gr,ml),e(ml,_h),e(Gr,Th),e(We,bh),e(We,Br),e(Br,fl),e(fl,vh),e(Br,wh),e(We,yh),e(We,Vr),e(Vr,gl),e(gl,kh),e(Vr,qh),e(We,jh),e(We,Kr),e(Kr,_l),e(_l,$h),e(Kr,Eh),e(We,Fh),e(We,Yr),e(Yr,Tl),e(Tl,Ah),e(Yr,zh),e(We,xh),e(We,Jr),e(Jr,bl),e(bl,Ch),e(Jr,Mh),e(We,Ph),e(We,Xr),e(Xr,vl),e(vl,Sh),e(Xr,Dh),e(We,Nh),e(We,Zr),e(Zr,wl),e(wl,Oh),e(Zr,Lh),u(i,pp,m),u(i,bt,m),e(bt,Qh),e(bt,hn),e(hn,Ih),e(bt,Wh),e(bt,un),e(un,Hh),e(bt,Uh),e(bt,yl),e(yl,Rh),e(bt,Gh),e(bt,kl),e(kl,Bh),e(bt,Vh),e(bt,ql),e(ql,Kh),e(bt,Yh),u(i,cp,m),u(i,ei,m),e(ei,jl),e(jl,Jh),u(i,hp,m),F(Fo,i,m),u(i,up,m),u(i,Se,m),e(Se,Xh),e(Se,$l),e($l,Zh),e(Se,eu),e(Se,El),e(El,tu),e(Se,su),e(Se,Fl),e(Fl,au),e(Se,ou),e(Se,Al),e(Al,nu),e(Se,ru),e(Se,zl),e(zl,iu),e(Se,lu),e(Se,xl),e(xl,du),e(Se,pu),e(Se,ti),e(ti,cu),e(Se,hu),e(Se,mn),e(mn,uu),e(Se,mu),e(Se,fn),e(fn,fu),e(Se,gu),u(i,mp,m),u(i,si,m),e(si,_u),u(i,fp,m),F(Ao,i,m),u(i,gp,m),u(i,Ya,m),e(Ya,zo),e(zo,Cl),F(gn,Cl,null),e(Ya,Tu),e(Ya,Ml),e(Ml,bu),u(i,_p,m),F(xo,i,m),u(i,Tp,m),u(i,vt,m),e(vt,vu),e(vt,Pl),e(Pl,wu),e(vt,yu),e(vt,Sl),e(Sl,ku),e(vt,qu),e(vt,Dl),e(Dl,ju),e(vt,$u),e(vt,_n),e(_n,Eu),e(vt,Fu),e(vt,Tn),e(Tn,Au),e(vt,zu),u(i,bp,m),u(i,Ja,m),e(Ja,Co),e(Co,Nl),F(bn,Nl,null),e(Ja,xu),e(Ja,Ol),e(Ol,Cu),u(i,vp,m),u(i,Xa,m),F(vn,Xa,null),e(Xa,Mu),e(Xa,wn),e(wn,Pu),e(wn,ai),e(ai,Su),e(wn,Du),u(i,wp,m),u(i,Za,m),e(Za,Mo),e(Mo,Ll),F(yn,Ll,null),e(Za,Nu),e(Za,Ql),e(Ql,Ou),u(i,yp,m),u(i,it,m),F(kn,it,null),e(it,Lu),e(it,eo),e(eo,Qu),e(eo,oi),e(oi,Iu),e(eo,Wu),e(eo,qn),e(qn,Hu),e(eo,Uu),e(it,Ru),e(it,to),e(to,Gu),e(to,Il),e(Il,Bu),e(to,Vu),e(to,ni),e(ni,Ku),e(to,Yu),e(it,Ju),e(it,jn),e(jn,Xu),e(jn,$n),e($n,Zu),e(jn,em),e(it,tm),e(it,Wl),e(Wl,sm),e(it,am),F(En,it,null),u(i,kp,m),u(i,so,m),e(so,Po),e(Po,Hl),F(Fn,Hl,null),e(so,om),e(so,Ul),e(Ul,nm),u(i,qp,m),u(i,Be,m),F(An,Be,null),e(Be,rm),e(Be,Rl),e(Rl,im),e(Be,lm),e(Be,Qe),e(Qe,dm),e(Qe,ri),e(ri,pm),e(Qe,cm),e(Qe,ii),e(ii,hm),e(Qe,um),e(Qe,Gl),e(Gl,mm),e(Qe,fm),e(Qe,Bl),e(Bl,gm),e(Qe,_m),e(Qe,Vl),e(Vl,Tm),e(Qe,bm),e(Qe,Kl),e(Kl,vm),e(Qe,wm),e(Qe,Yl),e(Yl,ym),e(Qe,km),e(Qe,Jl),e(Jl,qm),e(Qe,jm),e(Qe,Xl),e(Xl,$m),e(Qe,Em),e(Be,Fm),e(Be,lt),e(lt,Zl),e(Zl,Am),e(lt,zm),e(lt,ed),e(ed,xm),e(lt,Cm),e(lt,td),e(td,Mm),e(lt,Pm),e(lt,sd),e(sd,Sm),e(lt,Dm),e(lt,ad),e(ad,Nm),e(lt,Om),e(lt,od),e(od,Lm),e(lt,Qm),e(lt,nd),e(nd,Im),e(Be,Wm),e(Be,li),e(li,di),e(di,Hm),e(li,Um),e(Be,Rm),e(Be,So),F(zn,So,null),e(So,Gm),e(So,rd),e(rd,Bm),e(Be,Vm),e(Be,Ta),F(xn,Ta,null),e(Ta,Km),e(Ta,Cn),e(Cn,Ym),e(Cn,pi),e(pi,Jm),e(Cn,Xm),e(Ta,Zm),e(Ta,Mn),e(Mn,ef),e(Mn,Pn),e(Pn,tf),e(Mn,sf),e(Be,af),e(Be,ci),F(Sn,ci,null),u(i,jp,m),u(i,ao,m),e(ao,Do),e(Do,id),F(Dn,id,null),e(ao,of),e(ao,ld),e(ld,nf),u(i,$p,m),u(i,dt,m),F(Nn,dt,null),e(dt,rf),e(dt,On),e(On,lf),e(On,hi),e(hi,df),e(On,pf),e(dt,cf),e(dt,Ln),e(Ln,hf),e(Ln,Qn),e(Qn,uf),e(Ln,mf),e(dt,ff),e(dt,In),e(In,gf),e(In,ui),e(ui,_f),e(In,Tf),e(dt,bf),e(dt,Wn),e(Wn,vf),e(Wn,Hn),e(Hn,wf),e(Wn,yf),e(dt,kf),e(dt,Vt),F(Un,Vt,null),e(Vt,qf),e(Vt,oo),e(oo,jf),e(oo,mi),e(mi,$f),e(oo,Ef),e(oo,dd),e(dd,Ff),e(oo,Af),e(Vt,zf),F(No,Vt,null),e(Vt,xf),e(Vt,pd),e(pd,Cf),e(Vt,Mf),F(Rn,Vt,null),u(i,Ep,m),u(i,no,m),e(no,Oo),e(Oo,cd),F(Gn,cd,null),e(no,Pf),e(no,hd),e(hd,Sf),u(i,Fp,m),u(i,_s,m),F(Bn,_s,null),e(_s,Df),e(_s,ro),e(ro,Nf),e(ro,ud),e(ud,Of),e(ro,Lf),e(ro,fi),e(fi,Qf),e(ro,If),e(_s,Wf),e(_s,Vn),e(Vn,Hf),e(Vn,Kn),e(Kn,Uf),e(Vn,Rf),e(_s,Gf),e(_s,Kt),F(Yn,Kt,null),e(Kt,Bf),e(Kt,io),e(io,Vf),e(io,gi),e(gi,Kf),e(io,Yf),e(io,md),e(md,Jf),e(io,Xf),e(Kt,Zf),F(Lo,Kt,null),e(Kt,eg),e(Kt,fd),e(fd,tg),e(Kt,sg),F(Jn,Kt,null),u(i,Ap,m),u(i,lo,m),e(lo,Qo),e(Qo,gd),F(Xn,gd,null),e(lo,ag),e(lo,_d),e(_d,og),u(i,zp,m),u(i,Ht,m),F(Zn,Ht,null),e(Ht,ng),e(Ht,Td),e(Td,rg),e(Ht,ig),e(Ht,er),e(er,lg),e(er,_i),e(_i,dg),e(er,pg),e(Ht,cg),e(Ht,tr),e(tr,hg),e(tr,sr),e(sr,ug),e(tr,mg),e(Ht,fg),e(Ht,Yt),F(ar,Yt,null),e(Yt,gg),e(Yt,po),e(po,_g),e(po,Ti),e(Ti,Tg),e(po,bg),e(po,bd),e(bd,vg),e(po,wg),e(Yt,yg),F(Io,Yt,null),e(Yt,kg),e(Yt,vd),e(vd,qg),e(Yt,jg),F(or,Yt,null),u(i,xp,m),u(i,co,m),e(co,Wo),e(Wo,wd),F(nr,wd,null),e(co,$g),e(co,yd),e(yd,Eg),u(i,Cp,m),u(i,Ut,m),F(rr,Ut,null),e(Ut,Fg),e(Ut,ho),e(ho,Ag),e(ho,kd),e(kd,zg),e(ho,xg),e(ho,qd),e(qd,Cg),e(ho,Mg),e(Ut,Pg),e(Ut,ir),e(ir,Sg),e(ir,bi),e(bi,Dg),e(ir,Ng),e(Ut,Og),e(Ut,lr),e(lr,Lg),e(lr,dr),e(dr,Qg),e(lr,Ig),e(Ut,Wg),e(Ut,Jt),F(pr,Jt,null),e(Jt,Hg),e(Jt,uo),e(uo,Ug),e(uo,vi),e(vi,Rg),e(uo,Gg),e(uo,jd),e(jd,Bg),e(uo,Vg),e(Jt,Kg),F(Ho,Jt,null),e(Jt,Yg),e(Jt,$d),e($d,Jg),e(Jt,Xg),F(cr,Jt,null),u(i,Mp,m),u(i,mo,m),e(mo,Uo),e(Uo,Ed),F(hr,Ed,null),e(mo,Zg),e(mo,Fd),e(Fd,e_),u(i,Pp,m),u(i,pt,m),F(ur,pt,null),e(pt,t_),e(pt,Ad),e(Ad,s_),e(pt,a_),e(pt,mr),e(mr,o_),e(mr,wi),e(wi,n_),e(mr,r_),e(pt,i_),e(pt,fr),e(fr,l_),e(fr,gr),e(gr,d_),e(fr,p_),e(pt,c_),F(Ro,pt,null),e(pt,h_),e(pt,Xt),F(_r,Xt,null),e(Xt,u_),e(Xt,fo),e(fo,m_),e(fo,yi),e(yi,f_),e(fo,g_),e(fo,zd),e(zd,__),e(fo,T_),e(Xt,b_),F(Go,Xt,null),e(Xt,v_),e(Xt,xd),e(xd,w_),e(Xt,y_),F(Tr,Xt,null),u(i,Sp,m),u(i,go,m),e(go,Bo),e(Bo,Cd),F(br,Cd,null),e(go,k_),e(go,Md),e(Md,q_),u(i,Dp,m),u(i,ct,m),F(vr,ct,null),e(ct,j_),e(ct,wr),e(wr,$_),e(wr,Pd),e(Pd,E_),e(wr,F_),e(ct,A_),e(ct,yr),e(yr,z_),e(yr,ki),e(ki,x_),e(yr,C_),e(ct,M_),e(ct,kr),e(kr,P_),e(kr,qr),e(qr,S_),e(kr,D_),e(ct,N_),F(Vo,ct,null),e(ct,O_),e(ct,Zt),F(jr,Zt,null),e(Zt,L_),e(Zt,_o),e(_o,Q_),e(_o,qi),e(qi,I_),e(_o,W_),e(_o,Sd),e(Sd,H_),e(_o,U_),e(Zt,R_),F(Ko,Zt,null),e(Zt,G_),e(Zt,Dd),e(Dd,B_),e(Zt,V_),F($r,Zt,null),u(i,Np,m),u(i,To,m),e(To,Yo),e(Yo,Nd),F(Er,Nd,null),e(To,K_),e(To,Od),e(Od,Y_),u(i,Op,m),u(i,ht,m),F(Fr,ht,null),e(ht,J_),e(ht,Ld),e(Ld,X_),e(ht,Z_),e(ht,Ar),e(Ar,eT),e(Ar,ji),e(ji,tT),e(Ar,sT),e(ht,aT),e(ht,zr),e(zr,oT),e(zr,xr),e(xr,nT),e(zr,rT),e(ht,iT),F(Jo,ht,null),e(ht,lT),e(ht,es),F(Cr,es,null),e(es,dT),e(es,bo),e(bo,pT),e(bo,$i),e($i,cT),e(bo,hT),e(bo,Qd),e(Qd,uT),e(bo,mT),e(es,fT),F(Xo,es,null),e(es,gT),e(es,Id),e(Id,_T),e(es,TT),F(Mr,es,null),u(i,Lp,m),u(i,vo,m),e(vo,Zo),e(Zo,Wd),F(Pr,Wd,null),e(vo,bT),e(vo,Hd),e(Hd,vT),u(i,Qp,m),u(i,ut,m),F(Sr,ut,null),e(ut,wT),e(ut,wo),e(wo,yT),e(wo,Ud),e(Ud,kT),e(wo,qT),e(wo,Rd),e(Rd,jT),e(wo,$T),e(ut,ET),e(ut,Dr),e(Dr,FT),e(Dr,Ei),e(Ei,AT),e(Dr,zT),e(ut,xT),e(ut,Nr),e(Nr,CT),e(Nr,Or),e(Or,MT),e(Nr,PT),e(ut,ST),F(en,ut,null),e(ut,DT),e(ut,ts),F(Lr,ts,null),e(ts,NT),e(ts,yo),e(yo,OT),e(yo,Fi),e(Fi,LT),e(yo,QT),e(yo,Gd),e(Gd,IT),e(yo,WT),e(ts,HT),F(tn,ts,null),e(ts,UT),e(ts,Bd),e(Bd,RT),e(ts,GT),F(Qr,ts,null),Ip=!0},p(i,[m]){const Ir={};m&2&&(Ir.$$scope={dirty:m,ctx:i}),qo.$set(Ir);const Vd={};m&2&&(Vd.$$scope={dirty:m,ctx:i}),Fo.$set(Vd);const Kd={};m&2&&(Kd.$$scope={dirty:m,ctx:i}),Ao.$set(Kd);const Yd={};m&2&&(Yd.$$scope={dirty:m,ctx:i}),xo.$set(Yd);const Wr={};m&2&&(Wr.$$scope={dirty:m,ctx:i}),No.$set(Wr);const Jd={};m&2&&(Jd.$$scope={dirty:m,ctx:i}),Lo.$set(Jd);const Xd={};m&2&&(Xd.$$scope={dirty:m,ctx:i}),Io.$set(Xd);const Zd={};m&2&&(Zd.$$scope={dirty:m,ctx:i}),Ho.$set(Zd);const Hr={};m&2&&(Hr.$$scope={dirty:m,ctx:i}),Ro.$set(Hr);const ep={};m&2&&(ep.$$scope={dirty:m,ctx:i}),Go.$set(ep);const tp={};m&2&&(tp.$$scope={dirty:m,ctx:i}),Vo.$set(tp);const ko={};m&2&&(ko.$$scope={dirty:m,ctx:i}),Ko.$set(ko);const Ai={};m&2&&(Ai.$$scope={dirty:m,ctx:i}),Jo.$set(Ai);const sp={};m&2&&(sp.$$scope={dirty:m,ctx:i}),Xo.$set(sp);const zi={};m&2&&(zi.$$scope={dirty:m,ctx:i}),en.$set(zi);const ap={};m&2&&(ap.$$scope={dirty:m,ctx:i}),tn.$set(ap)},i(i){Ip||(A(v.$$.fragment,i),A(V.$$.fragment,i),A(rt.$$.fragment,i),A(qo.$$.fragment,i),A(Fo.$$.fragment,i),A(Ao.$$.fragment,i),A(gn.$$.fragment,i),A(xo.$$.fragment,i),A(bn.$$.fragment,i),A(vn.$$.fragment,i),A(yn.$$.fragment,i),A(kn.$$.fragment,i),A(En.$$.fragment,i),A(Fn.$$.fragment,i),A(An.$$.fragment,i),A(zn.$$.fragment,i),A(xn.$$.fragment,i),A(Sn.$$.fragment,i),A(Dn.$$.fragment,i),A(Nn.$$.fragment,i),A(Un.$$.fragment,i),A(No.$$.fragment,i),A(Rn.$$.fragment,i),A(Gn.$$.fragment,i),A(Bn.$$.fragment,i),A(Yn.$$.fragment,i),A(Lo.$$.fragment,i),A(Jn.$$.fragment,i),A(Xn.$$.fragment,i),A(Zn.$$.fragment,i),A(ar.$$.fragment,i),A(Io.$$.fragment,i),A(or.$$.fragment,i),A(nr.$$.fragment,i),A(rr.$$.fragment,i),A(pr.$$.fragment,i),A(Ho.$$.fragment,i),A(cr.$$.fragment,i),A(hr.$$.fragment,i),A(ur.$$.fragment,i),A(Ro.$$.fragment,i),A(_r.$$.fragment,i),A(Go.$$.fragment,i),A(Tr.$$.fragment,i),A(br.$$.fragment,i),A(vr.$$.fragment,i),A(Vo.$$.fragment,i),A(jr.$$.fragment,i),A(Ko.$$.fragment,i),A($r.$$.fragment,i),A(Er.$$.fragment,i),A(Fr.$$.fragment,i),A(Jo.$$.fragment,i),A(Cr.$$.fragment,i),A(Xo.$$.fragment,i),A(Mr.$$.fragment,i),A(Pr.$$.fragment,i),A(Sr.$$.fragment,i),A(en.$$.fragment,i),A(Lr.$$.fragment,i),A(tn.$$.fragment,i),A(Qr.$$.fragment,i),Ip=!0)},o(i){z(v.$$.fragment,i),z(V.$$.fragment,i),z(rt.$$.fragment,i),z(qo.$$.fragment,i),z(Fo.$$.fragment,i),z(Ao.$$.fragment,i),z(gn.$$.fragment,i),z(xo.$$.fragment,i),z(bn.$$.fragment,i),z(vn.$$.fragment,i),z(yn.$$.fragment,i),z(kn.$$.fragment,i),z(En.$$.fragment,i),z(Fn.$$.fragment,i),z(An.$$.fragment,i),z(zn.$$.fragment,i),z(xn.$$.fragment,i),z(Sn.$$.fragment,i),z(Dn.$$.fragment,i),z(Nn.$$.fragment,i),z(Un.$$.fragment,i),z(No.$$.fragment,i),z(Rn.$$.fragment,i),z(Gn.$$.fragment,i),z(Bn.$$.fragment,i),z(Yn.$$.fragment,i),z(Lo.$$.fragment,i),z(Jn.$$.fragment,i),z(Xn.$$.fragment,i),z(Zn.$$.fragment,i),z(ar.$$.fragment,i),z(Io.$$.fragment,i),z(or.$$.fragment,i),z(nr.$$.fragment,i),z(rr.$$.fragment,i),z(pr.$$.fragment,i),z(Ho.$$.fragment,i),z(cr.$$.fragment,i),z(hr.$$.fragment,i),z(ur.$$.fragment,i),z(Ro.$$.fragment,i),z(_r.$$.fragment,i),z(Go.$$.fragment,i),z(Tr.$$.fragment,i),z(br.$$.fragment,i),z(vr.$$.fragment,i),z(Vo.$$.fragment,i),z(jr.$$.fragment,i),z(Ko.$$.fragment,i),z($r.$$.fragment,i),z(Er.$$.fragment,i),z(Fr.$$.fragment,i),z(Jo.$$.fragment,i),z(Cr.$$.fragment,i),z(Xo.$$.fragment,i),z(Mr.$$.fragment,i),z(Pr.$$.fragment,i),z(Sr.$$.fragment,i),z(en.$$.fragment,i),z(Lr.$$.fragment,i),z(tn.$$.fragment,i),z(Qr.$$.fragment,i),Ip=!1},d(i){t(l),i&&t(_),i&&t(c),x(v),i&&t(D),i&&t(q),x(V),i&&t(I),i&&t(O),i&&t(N),i&&t(ee),i&&t(ce),i&&t(oe),i&&t(ve),i&&t(g),i&&t(be),i&&t(ze),i&&t(le),i&&t(xe),i&&t(de),i&&t(pe),i&&t(mt),i&&t(ft),i&&t(gt),i&&t(_t),i&&t(Ke),i&&t(Pe),i&&t(Ts),i&&t(Gt),i&&t(bs),i&&t(Ye),i&&t(ca),i&&t(It),x(rt),i&&t(ha),i&&t(Ie),i&&t(ua),i&&t(ws),i&&t(ma),i&&t(fe),i&&t(fa),i&&t(Tt),i&&t(ga),i&&t(ks),i&&t(_a),i&&t(Ce),i&&t(op),x(qo,i),i&&t(np),i&&t(jo),i&&t(rp),i&&t($o),i&&t(ip),i&&t(Ur),i&&t(lp),i&&t(Eo),i&&t(dp),i&&t(We),i&&t(pp),i&&t(bt),i&&t(cp),i&&t(ei),i&&t(hp),x(Fo,i),i&&t(up),i&&t(Se),i&&t(mp),i&&t(si),i&&t(fp),x(Ao,i),i&&t(gp),i&&t(Ya),x(gn),i&&t(_p),x(xo,i),i&&t(Tp),i&&t(vt),i&&t(bp),i&&t(Ja),x(bn),i&&t(vp),i&&t(Xa),x(vn),i&&t(wp),i&&t(Za),x(yn),i&&t(yp),i&&t(it),x(kn),x(En),i&&t(kp),i&&t(so),x(Fn),i&&t(qp),i&&t(Be),x(An),x(zn),x(xn),x(Sn),i&&t(jp),i&&t(ao),x(Dn),i&&t($p),i&&t(dt),x(Nn),x(Un),x(No),x(Rn),i&&t(Ep),i&&t(no),x(Gn),i&&t(Fp),i&&t(_s),x(Bn),x(Yn),x(Lo),x(Jn),i&&t(Ap),i&&t(lo),x(Xn),i&&t(zp),i&&t(Ht),x(Zn),x(ar),x(Io),x(or),i&&t(xp),i&&t(co),x(nr),i&&t(Cp),i&&t(Ut),x(rr),x(pr),x(Ho),x(cr),i&&t(Mp),i&&t(mo),x(hr),i&&t(Pp),i&&t(pt),x(ur),x(Ro),x(_r),x(Go),x(Tr),i&&t(Sp),i&&t(go),x(br),i&&t(Dp),i&&t(ct),x(vr),x(Vo),x(jr),x(Ko),x($r),i&&t(Np),i&&t(To),x(Er),i&&t(Op),i&&t(ht),x(Fr),x(Jo),x(Cr),x(Xo),x(Mr),i&&t(Lp),i&&t(vo),x(Pr),i&&t(Qp),i&&t(ut),x(Sr),x(en),x(Lr),x(tn),x(Qr)}}}const Ak={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function zk(U){return Zy(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nk extends Vy{constructor(l){super();Ky(this,l,zk,Fk,Yy,{})}}export{Nk as default,Ak as metadata};
