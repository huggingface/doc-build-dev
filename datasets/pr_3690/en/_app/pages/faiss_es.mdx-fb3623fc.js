import{S as ia,i as pa,s as da,e as n,k as d,w as u,t as i,M as ca,c as l,d as e,m as c,a as o,x as m,h as p,b as h,F as t,g as r,y as _,L as ha,q as f,o as g,B as x}from"../chunks/vendor-e67aec41.js";import{I as wt}from"../chunks/IconCopyLink-ffd7f84e.js";import{C as j}from"../chunks/CodeBlock-e2bcf023.js";function ua(be){let v,ps,q,w,js,I,ke,ws,De,Qs,y,A,Se,Pe,R,Le,Ie,Ns,ds,Ae,Bs,$,b,vs,C,Re,ys,Ce,Ms,k,Oe,O,ze,Fe,Hs,cs,$s,Te,Us,z,Ws,F,Es,Qe,Js,T,Gs,Q,N,Ne,hs,Be,Me,Ks,B,Vs,M,D,He,bs,Ue,We,ks,Je,Xs,H,Ys,U,us,Ge,Ds,Ke,Zs,W,se,J,ms,Ve,Ss,Xe,ee,G,te,E,S,Ps,K,Ye,Ls,Ze,ae,_s,st,ne,P,et,V,tt,at,le,fs,Is,nt,oe,X,re,Y,Z,lt,gs,ot,rt,ie,ss,pe,es,L,it,As,pt,dt,Rs,ct,de,ts,ce,as,ns,ht,Cs,ut,mt,he,ls,ue,os,xs,_t,Os,ft,me,rs,_e,qs,gt,fe,is,ge;return I=new wt({}),C=new wt({}),z=new j({props:{code:`from transformers import DPRContextEncoder, DPRContextEncoderTokenizer
import torch
torch.set_grad_enabled(False)
ctx_encoder = DPRContextEncoder.from_pretrained("facebook/dpr-ctx_encoder-single-nq-base")
ctx_tokenizer = DPRContextEncoderTokenizer.from_pretrained("facebook/dpr-ctx_encoder-single-nq-base"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPRContextEncoder, DPRContextEncoderTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span>torch.set_grad_enabled(<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ctx_encoder = DPRContextEncoder.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ctx_tokenizer = DPRContextEncoderTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>)`}}),T=new j({props:{code:`from datasets import load_dataset
ds = load_dataset('crime_and_punish', split='train[:100]')
ds_with_embeddings = ds.map(lambda example: {'embeddings': ctx_encoder(**ctx_tokenizer(example["line"], return_tensors="pt"))[0][0].numpy()}),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&#x27;crime_and_punish&#x27;</span>, split=<span class="hljs-string">&#x27;train[:100]&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds_with_embeddings = ds.<span class="hljs-built_in">map</span>(<span class="hljs-keyword">lambda</span> example: {<span class="hljs-string">&#x27;embeddings&#x27;</span>: ctx_encoder(**ctx_tokenizer(example[<span class="hljs-string">&quot;line&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>))[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>].numpy()})`}}),B=new j({props:{code:"ds_with_embeddings.add_faiss_index(column='embeddings'),",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>ds_with_embeddings.add_faiss_index(column=<span class="hljs-string">&#x27;embeddings&#x27;</span>)'}}),H=new j({props:{code:`from transformers import DPRQuestionEncoder, DPRQuestionEncoderTokenizer
q_encoder = DPRQuestionEncoder.from_pretrained("facebook/dpr-question_encoder-single-nq-base")
q_tokenizer = DPRQuestionEncoderTokenizer.from_pretrained("facebook/dpr-question_encoder-single-nq-base")

question = "Is it serious ?"
question_embedding = q_encoder(**q_tokenizer(question, return_tensors="pt"))[0][0].numpy()
scores, retrieved_examples = ds_with_embeddings.get_nearest_examples('embeddings', question_embedding, k=10)
retrieved_examples["line"][0],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPRQuestionEncoder, DPRQuestionEncoderTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>q_encoder = DPRQuestionEncoder.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-question_encoder-single-nq-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>q_tokenizer = DPRQuestionEncoderTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-question_encoder-single-nq-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;Is it serious ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>question_embedding = q_encoder(**q_tokenizer(question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>))[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>].numpy()
<span class="hljs-meta">&gt;&gt;&gt; </span>scores, retrieved_examples = ds_with_embeddings.get_nearest_examples(<span class="hljs-string">&#x27;embeddings&#x27;</span>, question_embedding, k=<span class="hljs-number">10</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retrieved_examples[<span class="hljs-string">&quot;line&quot;</span>][<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;_that_ serious? It is not serious at all. It\u2019s simply a fantasy to amuse\\r\\n&#x27;</span>`}}),W=new j({props:{code:"ds_with_embeddings.save_faiss_index('embeddings', 'my_index.faiss'),",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>ds_with_embeddings.save_faiss_index(<span class="hljs-string">&#x27;embeddings&#x27;</span>, <span class="hljs-string">&#x27;my_index.faiss&#x27;</span>)'}}),G=new j({props:{code:`ds = load_dataset('crime_and_punish', split='train[:100]')
ds.load_faiss_index('embeddings', 'my_index.faiss'),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&#x27;crime_and_punish&#x27;</span>, split=<span class="hljs-string">&#x27;train[:100]&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds.load_faiss_index(<span class="hljs-string">&#x27;embeddings&#x27;</span>, <span class="hljs-string">&#x27;my_index.faiss&#x27;</span>)`}}),K=new wt({}),X=new j({props:{code:`from datasets import load_dataset
squad = load_dataset('squad', split='validation'),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;validation&#x27;</span>)`}}),ss=new j({props:{code:'squad.add_elasticsearch_index("context", host="localhost", port="9200"),',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>squad.add_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, host=<span class="hljs-string">&quot;localhost&quot;</span>, port=<span class="hljs-string">&quot;9200&quot;</span>)'}}),ts=new j({props:{code:`query = "machine"
scores, retrieved_examples = squad.get_nearest_examples("context", query, k=10)
retrieved_examples["title"][0],`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>query = <span class="hljs-string">&quot;machine&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>scores, retrieved_examples = squad.get_nearest_examples(<span class="hljs-string">&quot;context&quot;</span>, query, k=<span class="hljs-number">10</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retrieved_examples[<span class="hljs-string">&quot;title&quot;</span>][<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;Computational_complexity_theory&#x27;</span>`}}),ls=new j({props:{code:`from datasets import load_dataset
squad = load_dataset('squad', split='validation')
squad.add_elasticsearch_index("context", host="localhost", port="9200", es_index_name="hf_squad_val_context")
squad.get_index("context").es_index_name,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;validation&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.add_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, host=<span class="hljs-string">&quot;localhost&quot;</span>, port=<span class="hljs-string">&quot;9200&quot;</span>, es_index_name=<span class="hljs-string">&quot;hf_squad_val_context&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.get_index(<span class="hljs-string">&quot;context&quot;</span>).es_index_name
hf_squad_val_context`}}),rs=new j({props:{code:`from datasets import load_dataset
squad = load_dataset('squad', split='validation')
squad.load_elasticsearch_index("context", host="localhost", port="9200", es_index_name="hf_squad_val_context")
query = "machine"
scores, retrieved_examples = squad.get_nearest_examples("context", query, k=10),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;validation&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.load_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, host=<span class="hljs-string">&quot;localhost&quot;</span>, port=<span class="hljs-string">&quot;9200&quot;</span>, es_index_name=<span class="hljs-string">&quot;hf_squad_val_context&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>query = <span class="hljs-string">&quot;machine&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>scores, retrieved_examples = squad.get_nearest_examples(<span class="hljs-string">&quot;context&quot;</span>, query, k=<span class="hljs-number">10</span>)`}}),is=new j({props:{code:`import elasticsearch as es
import elasticsearch.helpers
from elasticsearch import Elasticsearch
es_client = Elasticsearch([{"host": "localhost", "port": "9200"}])  # default client
es_config = {
    "settings": {
        "number_of_shards": 1,
        "analysis": {"analyzer": {"stop_standard": {"type": "standard", " stopwords": "_english_"}}},
    },
    "mappings": {"properties": {"text": {"type": "text", "analyzer": "standard", "similarity": "BM25"}}},
}  # default config
es_index_name = "hf_squad_context"  # name of the index in ElasticSearch
squad.add_elasticsearch_index("context", es_client=es_client, es_config=es_config, es_index_name=es_index_name),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> elasticsearch <span class="hljs-keyword">as</span> es
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> elasticsearch.helpers
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> elasticsearch <span class="hljs-keyword">import</span> Elasticsearch
<span class="hljs-meta">&gt;&gt;&gt; </span>es_client = Elasticsearch([{<span class="hljs-string">&quot;host&quot;</span>: <span class="hljs-string">&quot;localhost&quot;</span>, <span class="hljs-string">&quot;port&quot;</span>: <span class="hljs-string">&quot;9200&quot;</span>}])  <span class="hljs-comment"># default client</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>es_config = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;settings&quot;</span>: {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;number_of_shards&quot;</span>: <span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;analysis&quot;</span>: {<span class="hljs-string">&quot;analyzer&quot;</span>: {<span class="hljs-string">&quot;stop_standard&quot;</span>: {<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;standard&quot;</span>, <span class="hljs-string">&quot; stopwords&quot;</span>: <span class="hljs-string">&quot;_english_&quot;</span>}}},
<span class="hljs-meta">... </span>    },
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;mappings&quot;</span>: {<span class="hljs-string">&quot;properties&quot;</span>: {<span class="hljs-string">&quot;text&quot;</span>: {<span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;text&quot;</span>, <span class="hljs-string">&quot;analyzer&quot;</span>: <span class="hljs-string">&quot;standard&quot;</span>, <span class="hljs-string">&quot;similarity&quot;</span>: <span class="hljs-string">&quot;BM25&quot;</span>}}},
<span class="hljs-meta">... </span>}  <span class="hljs-comment"># default config</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>es_index_name = <span class="hljs-string">&quot;hf_squad_context&quot;</span>  <span class="hljs-comment"># name of the index in ElasticSearch</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>squad.add_elasticsearch_index(<span class="hljs-string">&quot;context&quot;</span>, es_client=es_client, es_config=es_config, es_index_name=es_index_name)`}}),{c(){v=n("meta"),ps=d(),q=n("h1"),w=n("a"),js=n("span"),u(I.$$.fragment),ke=d(),ws=n("span"),De=i("Search index"),Qs=d(),y=n("p"),A=n("a"),Se=i("FAISS"),Pe=i(" and "),R=n("a"),Le=i("ElasticSearch"),Ie=i(" enables searching for examples in a dataset. This can be useful when you want to retrieve specific examples from a dataset that are relevant to your NLP task. For example, if you are working on a Open Domain Question Answering task, you may want to only return examples that are relevant to answering your question."),Ns=d(),ds=n("p"),Ae=i("This guide will show you how to build an index for your dataset that will allow you to search it."),Bs=d(),$=n("h2"),b=n("a"),vs=n("span"),u(C.$$.fragment),Re=d(),ys=n("span"),Ce=i("FAISS"),Ms=d(),k=n("p"),Oe=i("FAISS retrieves documents based on the similarity of their vector representations. In this example, you will generate the vector representations with the "),O=n("a"),ze=i("DPR"),Fe=i(" model."),Hs=d(),cs=n("ol"),$s=n("li"),Te=i("Download the DPR model from \u{1F917} Transformers:"),Us=d(),u(z.$$.fragment),Ws=d(),F=n("ol"),Es=n("li"),Qe=i("Load your dataset and compute the vector representations:"),Js=d(),u(T.$$.fragment),Gs=d(),Q=n("ol"),N=n("li"),Ne=i("Create the index with "),hs=n("a"),Be=i("datasets.Dataset.add_faiss_index()"),Me=i(":"),Ks=d(),u(B.$$.fragment),Vs=d(),M=n("ol"),D=n("li"),He=i("Now you can query your dataset with the "),bs=n("code"),Ue=i("embeddings"),We=i(" index. Load the DPR Question Encoder, and search for a question with "),ks=n("code"),Je=i("datasets.Dataset.get_nearest_examples()"),Xs=d(),u(H.$$.fragment),Ys=d(),U=n("ol"),us=n("li"),Ge=i("When you are done querying, save the index on disk with "),Ds=n("code"),Ke=i("datasets.Dataset.save_faiss_index()"),Zs=d(),u(W.$$.fragment),se=d(),J=n("ol"),ms=n("li"),Ve=i("Reload it at a later time with "),Ss=n("code"),Xe=i("datasets.Dataset.load_faiss_index()"),ee=d(),u(G.$$.fragment),te=d(),E=n("h2"),S=n("a"),Ps=n("span"),u(K.$$.fragment),Ye=d(),Ls=n("span"),Ze=i("ElasticSearch"),ae=d(),_s=n("p"),st=i("Unlike FAISS, ElasticSearch retrieves documents based on exact matches."),ne=d(),P=n("p"),et=i("Start ElasticSearch on your machine, or see the "),V=n("a"),tt=i("ElasticSearch installation guide"),at=i(" if you don\u2019t already have it installed."),le=d(),fs=n("ol"),Is=n("li"),nt=i("Load the dataset you want to index:"),oe=d(),u(X.$$.fragment),re=d(),Y=n("ol"),Z=n("li"),lt=i("Build the index with "),gs=n("a"),ot=i("datasets.Dataset.add_elasticsearch_index()"),rt=i(":"),ie=d(),u(ss.$$.fragment),pe=d(),es=n("ol"),L=n("li"),it=i("Then you can query the "),As=n("code"),pt=i("context"),dt=i(" index with "),Rs=n("code"),ct=i("datasets.Dataset.get_nearest_examples()"),de=d(),u(ts.$$.fragment),ce=d(),as=n("ol"),ns=n("li"),ht=i("If you want to reuse the index, define the "),Cs=n("code"),ut=i("es_index_name"),mt=i(" parameter when you build the index:"),he=d(),u(ls.$$.fragment),ue=d(),os=n("ol"),xs=n("li"),_t=i("Reload it later with the index name when you call "),Os=n("code"),ft=i("datasets.Dataset.load_elasticsearch_index()"),me=d(),u(rs.$$.fragment),_e=d(),qs=n("p"),gt=i("For more advanced ElasticSearch usage, you can specify your own configuration with custom settings:"),fe=d(),u(is.$$.fragment),this.h()},l(s){const a=ca('[data-svelte="svelte-1phssyn"]',document.head);v=l(a,"META",{name:!0,content:!0}),a.forEach(e),ps=c(s),q=l(s,"H1",{class:!0});var xe=o(q);w=l(xe,"A",{id:!0,class:!0,href:!0});var vt=o(w);js=l(vt,"SPAN",{});var yt=o(js);m(I.$$.fragment,yt),yt.forEach(e),vt.forEach(e),ke=c(xe),ws=l(xe,"SPAN",{});var $t=o(ws);De=p($t,"Search index"),$t.forEach(e),xe.forEach(e),Qs=c(s),y=l(s,"P",{});var zs=o(y);A=l(zs,"A",{href:!0,rel:!0});var Et=o(A);Se=p(Et,"FAISS"),Et.forEach(e),Pe=p(zs," and "),R=l(zs,"A",{href:!0,rel:!0});var bt=o(R);Le=p(bt,"ElasticSearch"),bt.forEach(e),Ie=p(zs," enables searching for examples in a dataset. This can be useful when you want to retrieve specific examples from a dataset that are relevant to your NLP task. For example, if you are working on a Open Domain Question Answering task, you may want to only return examples that are relevant to answering your question."),zs.forEach(e),Ns=c(s),ds=l(s,"P",{});var kt=o(ds);Ae=p(kt,"This guide will show you how to build an index for your dataset that will allow you to search it."),kt.forEach(e),Bs=c(s),$=l(s,"H2",{class:!0});var qe=o($);b=l(qe,"A",{id:!0,class:!0,href:!0});var Dt=o(b);vs=l(Dt,"SPAN",{});var St=o(vs);m(C.$$.fragment,St),St.forEach(e),Dt.forEach(e),Re=c(qe),ys=l(qe,"SPAN",{});var Pt=o(ys);Ce=p(Pt,"FAISS"),Pt.forEach(e),qe.forEach(e),Ms=c(s),k=l(s,"P",{});var je=o(k);Oe=p(je,"FAISS retrieves documents based on the similarity of their vector representations. In this example, you will generate the vector representations with the "),O=l(je,"A",{href:!0,rel:!0});var Lt=o(O);ze=p(Lt,"DPR"),Lt.forEach(e),Fe=p(je," model."),je.forEach(e),Hs=c(s),cs=l(s,"OL",{});var It=o(cs);$s=l(It,"LI",{});var At=o($s);Te=p(At,"Download the DPR model from \u{1F917} Transformers:"),At.forEach(e),It.forEach(e),Us=c(s),m(z.$$.fragment,s),Ws=c(s),F=l(s,"OL",{start:!0});var Rt=o(F);Es=l(Rt,"LI",{});var Ct=o(Es);Qe=p(Ct,"Load your dataset and compute the vector representations:"),Ct.forEach(e),Rt.forEach(e),Js=c(s),m(T.$$.fragment,s),Gs=c(s),Q=l(s,"OL",{start:!0});var Ot=o(Q);N=l(Ot,"LI",{});var we=o(N);Ne=p(we,"Create the index with "),hs=l(we,"A",{href:!0});var zt=o(hs);Be=p(zt,"datasets.Dataset.add_faiss_index()"),zt.forEach(e),Me=p(we,":"),we.forEach(e),Ot.forEach(e),Ks=c(s),m(B.$$.fragment,s),Vs=c(s),M=l(s,"OL",{start:!0});var Ft=o(M);D=l(Ft,"LI",{});var Fs=o(D);He=p(Fs,"Now you can query your dataset with the "),bs=l(Fs,"CODE",{});var Tt=o(bs);Ue=p(Tt,"embeddings"),Tt.forEach(e),We=p(Fs," index. Load the DPR Question Encoder, and search for a question with "),ks=l(Fs,"CODE",{});var Qt=o(ks);Je=p(Qt,"datasets.Dataset.get_nearest_examples()"),Qt.forEach(e),Fs.forEach(e),Ft.forEach(e),Xs=c(s),m(H.$$.fragment,s),Ys=c(s),U=l(s,"OL",{start:!0});var Nt=o(U);us=l(Nt,"LI",{});var xt=o(us);Ge=p(xt,"When you are done querying, save the index on disk with "),Ds=l(xt,"CODE",{});var Bt=o(Ds);Ke=p(Bt,"datasets.Dataset.save_faiss_index()"),Bt.forEach(e),xt.forEach(e),Nt.forEach(e),Zs=c(s),m(W.$$.fragment,s),se=c(s),J=l(s,"OL",{start:!0});var Mt=o(J);ms=l(Mt,"LI",{});var qt=o(ms);Ve=p(qt,"Reload it at a later time with "),Ss=l(qt,"CODE",{});var Ht=o(Ss);Xe=p(Ht,"datasets.Dataset.load_faiss_index()"),Ht.forEach(e),qt.forEach(e),Mt.forEach(e),ee=c(s),m(G.$$.fragment,s),te=c(s),E=l(s,"H2",{class:!0});var ve=o(E);S=l(ve,"A",{id:!0,class:!0,href:!0});var Ut=o(S);Ps=l(Ut,"SPAN",{});var Wt=o(Ps);m(K.$$.fragment,Wt),Wt.forEach(e),Ut.forEach(e),Ye=c(ve),Ls=l(ve,"SPAN",{});var Jt=o(Ls);Ze=p(Jt,"ElasticSearch"),Jt.forEach(e),ve.forEach(e),ae=c(s),_s=l(s,"P",{});var Gt=o(_s);st=p(Gt,"Unlike FAISS, ElasticSearch retrieves documents based on exact matches."),Gt.forEach(e),ne=c(s),P=l(s,"P",{});var ye=o(P);et=p(ye,"Start ElasticSearch on your machine, or see the "),V=l(ye,"A",{href:!0,rel:!0});var Kt=o(V);tt=p(Kt,"ElasticSearch installation guide"),Kt.forEach(e),at=p(ye," if you don\u2019t already have it installed."),ye.forEach(e),le=c(s),fs=l(s,"OL",{});var Vt=o(fs);Is=l(Vt,"LI",{});var Xt=o(Is);nt=p(Xt,"Load the dataset you want to index:"),Xt.forEach(e),Vt.forEach(e),oe=c(s),m(X.$$.fragment,s),re=c(s),Y=l(s,"OL",{start:!0});var Yt=o(Y);Z=l(Yt,"LI",{});var $e=o(Z);lt=p($e,"Build the index with "),gs=l($e,"A",{href:!0});var Zt=o(gs);ot=p(Zt,"datasets.Dataset.add_elasticsearch_index()"),Zt.forEach(e),rt=p($e,":"),$e.forEach(e),Yt.forEach(e),ie=c(s),m(ss.$$.fragment,s),pe=c(s),es=l(s,"OL",{start:!0});var sa=o(es);L=l(sa,"LI",{});var Ts=o(L);it=p(Ts,"Then you can query the "),As=l(Ts,"CODE",{});var ea=o(As);pt=p(ea,"context"),ea.forEach(e),dt=p(Ts," index with "),Rs=l(Ts,"CODE",{});var ta=o(Rs);ct=p(ta,"datasets.Dataset.get_nearest_examples()"),ta.forEach(e),Ts.forEach(e),sa.forEach(e),de=c(s),m(ts.$$.fragment,s),ce=c(s),as=l(s,"OL",{start:!0});var aa=o(as);ns=l(aa,"LI",{});var Ee=o(ns);ht=p(Ee,"If you want to reuse the index, define the "),Cs=l(Ee,"CODE",{});var na=o(Cs);ut=p(na,"es_index_name"),na.forEach(e),mt=p(Ee," parameter when you build the index:"),Ee.forEach(e),aa.forEach(e),he=c(s),m(ls.$$.fragment,s),ue=c(s),os=l(s,"OL",{start:!0});var la=o(os);xs=l(la,"LI",{});var jt=o(xs);_t=p(jt,"Reload it later with the index name when you call "),Os=l(jt,"CODE",{});var oa=o(Os);ft=p(oa,"datasets.Dataset.load_elasticsearch_index()"),oa.forEach(e),jt.forEach(e),la.forEach(e),me=c(s),m(rs.$$.fragment,s),_e=c(s),qs=l(s,"P",{});var ra=o(qs);gt=p(ra,"For more advanced ElasticSearch usage, you can specify your own configuration with custom settings:"),ra.forEach(e),fe=c(s),m(is.$$.fragment,s),this.h()},h(){h(v,"name","hf:doc:metadata"),h(v,"content",JSON.stringify(ma)),h(w,"id","search-index"),h(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(w,"href","#search-index"),h(q,"class","relative group"),h(A,"href","https://github.com/facebookresearch/faiss"),h(A,"rel","nofollow"),h(R,"href","https://www.elastic.co/elasticsearch/"),h(R,"rel","nofollow"),h(b,"id","faiss"),h(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(b,"href","#faiss"),h($,"class","relative group"),h(O,"href","https://huggingface.co/transformers/model_doc/dpr.html"),h(O,"rel","nofollow"),h(F,"start","2"),h(hs,"href","/docs/datasets/pr_3690/en/package_reference/main_classes#datasets.Dataset.add_faiss_index"),h(Q,"start","3"),h(M,"start","4"),h(U,"start","5"),h(J,"start","6"),h(S,"id","elasticsearch"),h(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(S,"href","#elasticsearch"),h(E,"class","relative group"),h(V,"href","https://www.elastic.co/guide/en/elasticsearch/reference/current/setup.html"),h(V,"rel","nofollow"),h(gs,"href","/docs/datasets/pr_3690/en/package_reference/main_classes#datasets.Dataset.add_elasticsearch_index"),h(Y,"start","2"),h(es,"start","3"),h(as,"start","4"),h(os,"start","5")},m(s,a){t(document.head,v),r(s,ps,a),r(s,q,a),t(q,w),t(w,js),_(I,js,null),t(q,ke),t(q,ws),t(ws,De),r(s,Qs,a),r(s,y,a),t(y,A),t(A,Se),t(y,Pe),t(y,R),t(R,Le),t(y,Ie),r(s,Ns,a),r(s,ds,a),t(ds,Ae),r(s,Bs,a),r(s,$,a),t($,b),t(b,vs),_(C,vs,null),t($,Re),t($,ys),t(ys,Ce),r(s,Ms,a),r(s,k,a),t(k,Oe),t(k,O),t(O,ze),t(k,Fe),r(s,Hs,a),r(s,cs,a),t(cs,$s),t($s,Te),r(s,Us,a),_(z,s,a),r(s,Ws,a),r(s,F,a),t(F,Es),t(Es,Qe),r(s,Js,a),_(T,s,a),r(s,Gs,a),r(s,Q,a),t(Q,N),t(N,Ne),t(N,hs),t(hs,Be),t(N,Me),r(s,Ks,a),_(B,s,a),r(s,Vs,a),r(s,M,a),t(M,D),t(D,He),t(D,bs),t(bs,Ue),t(D,We),t(D,ks),t(ks,Je),r(s,Xs,a),_(H,s,a),r(s,Ys,a),r(s,U,a),t(U,us),t(us,Ge),t(us,Ds),t(Ds,Ke),r(s,Zs,a),_(W,s,a),r(s,se,a),r(s,J,a),t(J,ms),t(ms,Ve),t(ms,Ss),t(Ss,Xe),r(s,ee,a),_(G,s,a),r(s,te,a),r(s,E,a),t(E,S),t(S,Ps),_(K,Ps,null),t(E,Ye),t(E,Ls),t(Ls,Ze),r(s,ae,a),r(s,_s,a),t(_s,st),r(s,ne,a),r(s,P,a),t(P,et),t(P,V),t(V,tt),t(P,at),r(s,le,a),r(s,fs,a),t(fs,Is),t(Is,nt),r(s,oe,a),_(X,s,a),r(s,re,a),r(s,Y,a),t(Y,Z),t(Z,lt),t(Z,gs),t(gs,ot),t(Z,rt),r(s,ie,a),_(ss,s,a),r(s,pe,a),r(s,es,a),t(es,L),t(L,it),t(L,As),t(As,pt),t(L,dt),t(L,Rs),t(Rs,ct),r(s,de,a),_(ts,s,a),r(s,ce,a),r(s,as,a),t(as,ns),t(ns,ht),t(ns,Cs),t(Cs,ut),t(ns,mt),r(s,he,a),_(ls,s,a),r(s,ue,a),r(s,os,a),t(os,xs),t(xs,_t),t(xs,Os),t(Os,ft),r(s,me,a),_(rs,s,a),r(s,_e,a),r(s,qs,a),t(qs,gt),r(s,fe,a),_(is,s,a),ge=!0},p:ha,i(s){ge||(f(I.$$.fragment,s),f(C.$$.fragment,s),f(z.$$.fragment,s),f(T.$$.fragment,s),f(B.$$.fragment,s),f(H.$$.fragment,s),f(W.$$.fragment,s),f(G.$$.fragment,s),f(K.$$.fragment,s),f(X.$$.fragment,s),f(ss.$$.fragment,s),f(ts.$$.fragment,s),f(ls.$$.fragment,s),f(rs.$$.fragment,s),f(is.$$.fragment,s),ge=!0)},o(s){g(I.$$.fragment,s),g(C.$$.fragment,s),g(z.$$.fragment,s),g(T.$$.fragment,s),g(B.$$.fragment,s),g(H.$$.fragment,s),g(W.$$.fragment,s),g(G.$$.fragment,s),g(K.$$.fragment,s),g(X.$$.fragment,s),g(ss.$$.fragment,s),g(ts.$$.fragment,s),g(ls.$$.fragment,s),g(rs.$$.fragment,s),g(is.$$.fragment,s),ge=!1},d(s){e(v),s&&e(ps),s&&e(q),x(I),s&&e(Qs),s&&e(y),s&&e(Ns),s&&e(ds),s&&e(Bs),s&&e($),x(C),s&&e(Ms),s&&e(k),s&&e(Hs),s&&e(cs),s&&e(Us),x(z,s),s&&e(Ws),s&&e(F),s&&e(Js),x(T,s),s&&e(Gs),s&&e(Q),s&&e(Ks),x(B,s),s&&e(Vs),s&&e(M),s&&e(Xs),x(H,s),s&&e(Ys),s&&e(U),s&&e(Zs),x(W,s),s&&e(se),s&&e(J),s&&e(ee),x(G,s),s&&e(te),s&&e(E),x(K),s&&e(ae),s&&e(_s),s&&e(ne),s&&e(P),s&&e(le),s&&e(fs),s&&e(oe),x(X,s),s&&e(re),s&&e(Y),s&&e(ie),x(ss,s),s&&e(pe),s&&e(es),s&&e(de),x(ts,s),s&&e(ce),s&&e(as),s&&e(he),x(ls,s),s&&e(ue),s&&e(os),s&&e(me),x(rs,s),s&&e(_e),s&&e(qs),s&&e(fe),x(is,s)}}}const ma={local:"search-index",sections:[{local:"faiss",title:"FAISS"},{local:"elasticsearch",title:"ElasticSearch"}],title:"Search index"};function _a(be,v,ps){let{fw:q}=v;return be.$$set=w=>{"fw"in w&&ps(0,q=w.fw)},[q]}class qa extends ia{constructor(v){super();pa(this,v,_a,ua,da,{fw:0})}}export{qa as default,ma as metadata};
