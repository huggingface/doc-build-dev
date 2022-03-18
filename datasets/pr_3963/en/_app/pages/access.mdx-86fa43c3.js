import{S as lt,i as rt,s as it,e as r,k as c,w as f,t as n,M as ot,c as i,d as a,m as h,a as o,x as m,h as l,b as u,F as e,g as p,y as g,L as pt,q as x,o as b,B as j}from"../chunks/vendor-aa873a46.js";import{I as ja}from"../chunks/IconCopyLink-d0ca3106.js";import{C as A}from"../chunks/CodeBlock-1f14baf3.js";function ct(_a){let y,ts,_,w,xs,R,va,bs,wa,Cs,L,ya,ns,$a,ka,Ts,N,Ea,ls,Aa,Da,zs,G,Os,D,I,js,B,qa,_s,Pa,Rs,$,La,rs,Na,Ia,vs,Sa,Ca,Gs,F,Bs,d,Ta,ws,za,Oa,ys,Ra,Ga,$s,Ba,Fa,is,Ma,Ua,Fs,M,Ms,q,S,ks,U,Wa,Es,Ya,Us,os,Ha,Ws,W,Ys,ps,Ja,Hs,Y,Js,C,Va,cs,Qa,Ka,Vs,H,Qs,J,Xa,As,Za,Ks,V,Xs,v,se,hs,ae,ee,Ds,te,ne,qs,le,re,Zs,Q,sa,P,T,Ps,K,ie,Ls,oe,aa,us,pe,ea,X,ta,ds,ce,na,Z,la,z,he,fs,ue,de,ra,k,ss,fe,Ns,me,ge,xe,as,be,Is,je,_e,ve,es,we,Ss,ye,$e,ia;return R=new ja({}),G=new A({props:{code:`from datasets import load_dataset
dataset = load_dataset('glue', 'mrpc', split='train')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)`}}),B=new ja({}),F=new A({props:{code:"dataset.info",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.info
DatasetInfo(
    description=<span class="hljs-string">&#x27;GLUE, the General Language Understanding Evaluation benchmark\\n(https://gluebenchmark.com/) is a collection of resources for training,\\nevaluating, and analyzing natural language understanding systems.\\n\\n&#x27;</span>, 
    citation=<span class="hljs-string">&#x27;@inproceedings{dolan2005automatically,\\n  title={Automatically constructing a corpus of sentential paraphrases},\\n  author={Dolan, William B and Brockett, Chris},\\n  booktitle={Proceedings of the Third International Workshop on Paraphrasing (IWP2005)},\\n  year={2005}\\n}\\n@inproceedings{wang2019glue,\\n  title={{GLUE}: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding},\\n  author={Wang, Alex and Singh, Amanpreet and Michael, Julian and Hill, Felix and Levy, Omer and Bowman, Samuel R.},\\n  note={In the Proceedings of ICLR.},\\n  year={2019}\\n}\\n&#x27;</span>, homepage=<span class="hljs-string">&#x27;https://www.microsoft.com/en-us/download/details.aspx?id=52398&#x27;</span>, 
    license=<span class="hljs-string">&#x27;&#x27;</span>, 
    features={<span class="hljs-string">&#x27;sentence1&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>), <span class="hljs-string">&#x27;sentence2&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>), <span class="hljs-string">&#x27;label&#x27;</span>: ClassLabel(num_classes=<span class="hljs-number">2</span>, names=[<span class="hljs-string">&#x27;not_equivalent&#x27;</span>, <span class="hljs-string">&#x27;equivalent&#x27;</span>], names_file=<span class="hljs-literal">None</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>), <span class="hljs-string">&#x27;idx&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}, post_processed=<span class="hljs-literal">None</span>, supervised_keys=<span class="hljs-literal">None</span>, builder_name=<span class="hljs-string">&#x27;glue&#x27;</span>, config_name=<span class="hljs-string">&#x27;mrpc&#x27;</span>, version=<span class="hljs-number">1.0</span><span class="hljs-number">.0</span>, splits={<span class="hljs-string">&#x27;train&#x27;</span>: SplitInfo(name=<span class="hljs-string">&#x27;train&#x27;</span>, num_bytes=<span class="hljs-number">943851</span>, num_examples=<span class="hljs-number">3668</span>, dataset_name=<span class="hljs-string">&#x27;glue&#x27;</span>), <span class="hljs-string">&#x27;validation&#x27;</span>: SplitInfo(name=<span class="hljs-string">&#x27;validation&#x27;</span>, num_bytes=<span class="hljs-number">105887</span>, num_examples=<span class="hljs-number">408</span>, dataset_name=<span class="hljs-string">&#x27;glue&#x27;</span>), <span class="hljs-string">&#x27;test&#x27;</span>: SplitInfo(name=<span class="hljs-string">&#x27;test&#x27;</span>, num_bytes=<span class="hljs-number">442418</span>, num_examples=<span class="hljs-number">1725</span>, dataset_name=<span class="hljs-string">&#x27;glue&#x27;</span>)}, 
    download_checksums={<span class="hljs-string">&#x27;https://dl.fbaipublicfiles.com/glue/data/mrpc_dev_ids.tsv&#x27;</span>: {<span class="hljs-string">&#x27;num_bytes&#x27;</span>: <span class="hljs-number">6222</span>, <span class="hljs-string">&#x27;checksum&#x27;</span>: <span class="hljs-string">&#x27;971d7767d81b997fd9060ade0ec23c4fc31cbb226a55d1bd4a1bac474eb81dc7&#x27;</span>}, <span class="hljs-string">&#x27;https://dl.fbaipublicfiles.com/senteval/senteval_data/msr_paraphrase_train.txt&#x27;</span>: {<span class="hljs-string">&#x27;num_bytes&#x27;</span>: <span class="hljs-number">1047044</span>, <span class="hljs-string">&#x27;checksum&#x27;</span>: <span class="hljs-string">&#x27;60a9b09084528f0673eedee2b69cb941920f0b8cd0eeccefc464a98768457f89&#x27;</span>}, <span class="hljs-string">&#x27;https://dl.fbaipublicfiles.com/senteval/senteval_data/msr_paraphrase_test.txt&#x27;</span>: {<span class="hljs-string">&#x27;num_bytes&#x27;</span>: <span class="hljs-number">441275</span>, <span class="hljs-string">&#x27;checksum&#x27;</span>: <span class="hljs-string">&#x27;a04e271090879aaba6423d65b94950c089298587d9c084bf9cd7439bd785f784&#x27;</span>}}, 
    download_size=<span class="hljs-number">1494541</span>, 
    post_processing_size=<span class="hljs-literal">None</span>, 
    dataset_size=<span class="hljs-number">1492156</span>, 
    size_in_bytes=<span class="hljs-number">2986697</span>
)`}}),M=new A({props:{code:`dataset.split
dataset.description
dataset.citation
dataset.homepage`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.split
NamedSplit(<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.description
<span class="hljs-string">&#x27;GLUE, the General Language Understanding Evaluation benchmark\\n(https://gluebenchmark.com/) is a collection of resources for training,\\nevaluating, and analyzing natural language understanding systems.\\n\\n&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.citation
<span class="hljs-string">&#x27;@inproceedings{dolan2005automatically,\\n  title={Automatically constructing a corpus of sentential paraphrases},\\n  author={Dolan, William B and Brockett, Chris},\\n  booktitle={Proceedings of the Third International Workshop on Paraphrasing (IWP2005)},\\n  year={2005}\\n}\\n@inproceedings{wang2019glue,\\n  title={{GLUE}: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding},\\n  author={Wang, Alex and Singh, Amanpreet and Michael, Julian and Hill, Felix and Levy, Omer and Bowman, Samuel R.},\\n  note={In the Proceedings of ICLR.},\\n  year={2019}\\n}\\n\\nNote that each GLUE dataset has its own citation. Please see the source to see\\nthe correct citation for each contained dataset.&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.homepage
<span class="hljs-string">&#x27;https://www.microsoft.com/en-us/download/details.aspx?id=52398&#x27;</span>`}}),U=new ja({}),W=new A({props:{code:"dataset[0]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;idx&#x27;</span>: <span class="hljs-number">0</span>,
<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">1</span>,
<span class="hljs-string">&#x27;sentence1&#x27;</span>: <span class="hljs-string">&#x27;Amrozi accused his brother , whom he called &quot; the witness &quot; , of deliberately distorting his evidence .&#x27;</span>,
<span class="hljs-string">&#x27;sentence2&#x27;</span>: <span class="hljs-string">&#x27;Referring to him as only &quot; the witness &quot; , Amrozi accused his brother of deliberately distorting his evidence .&#x27;</span>}`}}),Y=new A({props:{code:`dataset.shape
dataset.num_columns
dataset.num_rows
len(dataset)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.shape
(<span class="hljs-number">3668</span>, <span class="hljs-number">4</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.num_columns
<span class="hljs-number">4</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.num_rows
<span class="hljs-number">3668</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">len</span>(dataset)
<span class="hljs-number">3668</span>`}}),H=new A({props:{code:"dataset.column_names",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.column_names
[<span class="hljs-string">&#x27;idx&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>, <span class="hljs-string">&#x27;sentence1&#x27;</span>, <span class="hljs-string">&#x27;sentence2&#x27;</span>]`}}),V=new A({props:{code:"dataset.features",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features
{<span class="hljs-string">&#x27;idx&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
    <span class="hljs-string">&#x27;label&#x27;</span>: ClassLabel(num_classes=<span class="hljs-number">2</span>, names=[<span class="hljs-string">&#x27;not_equivalent&#x27;</span>, <span class="hljs-string">&#x27;equivalent&#x27;</span>], names_file=<span class="hljs-literal">None</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
    <span class="hljs-string">&#x27;sentence1&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
    <span class="hljs-string">&#x27;sentence2&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
}`}}),Q=new A({props:{code:`dataset.features['label'].num_classes
dataset.features['label'].names`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features[<span class="hljs-string">&#x27;label&#x27;</span>].num_classes
<span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features[<span class="hljs-string">&#x27;label&#x27;</span>].names
[<span class="hljs-string">&#x27;not_equivalent&#x27;</span>, <span class="hljs-string">&#x27;equivalent&#x27;</span>]`}}),K=new ja({}),X=new A({props:{code:`dataset[:3]
dataset[[1, 3, 5]]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[:<span class="hljs-number">3</span>]
{<span class="hljs-string">&#x27;idx&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-string">&#x27;label&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>],
    <span class="hljs-string">&#x27;sentence1&#x27;</span>: [<span class="hljs-string">&#x27;Amrozi accused his brother , whom he called &quot; the witness &quot; , of deliberately distorting his evidence .&#x27;</span>, <span class="hljs-string">&quot;Yucaipa owned Dominick &#x27;s before selling the chain to Safeway in 1998 for $ 2.5 billion .&quot;</span>, <span class="hljs-string">&#x27;They had published an advertisement on the Internet on June 10 , offering the cargo for sale , he added .&#x27;</span>],
    <span class="hljs-string">&#x27;sentence2&#x27;</span>: [<span class="hljs-string">&#x27;Referring to him as only &quot; the witness &quot; , Amrozi accused his brother of deliberately distorting his evidence .&#x27;</span>, <span class="hljs-string">&quot;Yucaipa bought Dominick &#x27;s in 1995 for $ 693 million and sold it to Safeway for $ 1.8 billion in 1998 .&quot;</span>, <span class="hljs-string">&quot;On June 10 , the ship &#x27;s owners had published an advertisement on the Internet , offering the explosives for sale .&quot;</span>]
}
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>]]
{<span class="hljs-string">&#x27;idx&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>],
    <span class="hljs-string">&#x27;label&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>], 
    <span class="hljs-string">&#x27;sentence1&#x27;</span>: [<span class="hljs-string">&quot;Yucaipa owned Dominick &#x27;s before selling the chain to Safeway in 1998 for $ 2.5 billion .&quot;</span>, <span class="hljs-string">&#x27;Around 0335 GMT , Tab shares were up 19 cents , or 4.4 % , at A $ 4.56 , having earlier set a record high of A $ 4.57 .&#x27;</span>, <span class="hljs-string">&#x27;Revenue in the first quarter of the year dropped 15 percent from the same period a year earlier .&#x27;</span>],
    <span class="hljs-string">&#x27;sentence2&#x27;</span>: [<span class="hljs-string">&quot;Yucaipa bought Dominick &#x27;s in 1995 for $ 693 million and sold it to Safeway for $ 1.8 billion in 1998 .&quot;</span>, <span class="hljs-string">&#x27;Tab shares jumped 20 cents , or 4.6 % , to set a record closing high at A $ 4.57 .&#x27;</span>, <span class="hljs-string">&quot;With the scandal hanging over Stewart &#x27;s company , revenue the first quarter of the year dropped 15 percent from the same period a year earlier .&quot;</span>]
}`}}),Z=new A({props:{code:"dataset['sentence1'][:3]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-string">&#x27;sentence1&#x27;</span>][:<span class="hljs-number">3</span>]
[<span class="hljs-string">&#x27;Amrozi accused his brother , whom he called &quot; the witness &quot; , of deliberately distorting his evidence .&#x27;</span>, <span class="hljs-string">&quot;Yucaipa owned Dominick &#x27;s before selling the chain to Safeway in 1998 for $ 2.5 billion .&quot;</span>, <span class="hljs-string">&#x27;They had published an advertisement on the Internet on June 10 , offering the cargo for sale , he added .&#x27;</span>]`}}),{c(){y=r("meta"),ts=c(),_=r("h1"),w=r("a"),xs=r("span"),f(R.$$.fragment),va=c(),bs=r("span"),wa=n("The Dataset object"),Cs=c(),L=r("p"),ya=n("In the previous tutorial, you learned how to successfully load a dataset. This section will familiarize you with the "),ns=r("a"),$a=n("Dataset"),ka=n(" object. You will learn about the metadata stored inside a Dataset object, and the basics of querying a Dataset object to return rows and columns."),Ts=c(),N=r("p"),Ea=n("A "),ls=r("a"),Aa=n("Dataset"),Da=n(" object is returned when you load an instance of a dataset. This object behaves like a normal Python container."),zs=c(),f(G.$$.fragment),Os=c(),D=r("h2"),I=r("a"),js=r("span"),f(B.$$.fragment),qa=c(),_s=r("span"),Pa=n("Metadata"),Rs=c(),$=r("p"),La=n("The "),rs=r("a"),Na=n("Dataset"),Ia=n(" object contains a lot of useful information about your dataset. For example, call "),vs=r("code"),Sa=n("dataset.info"),Ca=n(" to return a short description of the dataset, the authors, and even the dataset size. This will give you a quick snapshot of the datasets most important attributes."),Gs=c(),f(F.$$.fragment),Bs=c(),d=r("p"),Ta=n("You can request specific attributes of the dataset, like "),ws=r("code"),za=n("description"),Oa=n(", "),ys=r("code"),Ra=n("citation"),Ga=n(", and "),$s=r("code"),Ba=n("homepage"),Fa=n(", by calling them directly. Take a look at "),is=r("a"),Ma=n("datasets.DatasetInfo"),Ua=n(" for a complete list of attributes you can return."),Fs=c(),f(M.$$.fragment),Ms=c(),q=r("h2"),S=r("a"),ks=r("span"),f(U.$$.fragment),Wa=c(),Es=r("span"),Ya=n("Features and columns"),Us=c(),os=r("p"),Ha=n("A dataset is a table of rows and typed columns. Querying a dataset returns a Python dictionary where the keys correspond to column names, and the values correspond to column values:"),Ws=c(),f(W.$$.fragment),Ys=c(),ps=r("p"),Ja=n("Return the number of rows and columns with the following standard attributes:"),Hs=c(),f(Y.$$.fragment),Js=c(),C=r("p"),Va=n("List the columns names with "),cs=r("a"),Qa=n("datasets.Dataset.column_names()"),Ka=n(":"),Vs=c(),f(H.$$.fragment),Qs=c(),J=r("p"),Xa=n("Get detailed information about the columns with "),As=r("code"),Za=n("datasets.Dataset.features()"),Ks=c(),f(V.$$.fragment),Xs=c(),v=r("p"),se=n("Return even more specific information about a feature like "),hs=r("a"),ae=n("datasets.ClassLabel"),ee=n(", by calling its parameters "),Ds=r("code"),te=n("num_classes"),ne=n(" and "),qs=r("code"),le=n("names"),re=n(":"),Zs=c(),f(Q.$$.fragment),sa=c(),P=r("h2"),T=r("a"),Ps=r("span"),f(K.$$.fragment),ie=c(),Ls=r("span"),oe=n("Rows, slices, batches, and columns"),aa=c(),us=r("p"),pe=n("Get several rows of your dataset at a time with slice notation or a list of indices:"),ea=c(),f(X.$$.fragment),ta=c(),ds=r("p"),ce=n("Querying by the column name will return its values. For example, if you want to only return the first three examples:"),na=c(),f(Z.$$.fragment),la=c(),z=r("p"),he=n("Depending on how a "),fs=r("a"),ue=n("Dataset"),de=n(" object is queried, the format returned will be different:"),ra=c(),k=r("ul"),ss=r("li"),fe=n("A single row like "),Ns=r("code"),me=n("dataset[0]"),ge=n(" returns a Python dictionary of values."),xe=c(),as=r("li"),be=n("A batch like "),Is=r("code"),je=n("dataset[5:10]"),_e=n(" returns a Python dictionary of lists of values."),ve=c(),es=r("li"),we=n("A column like "),Ss=r("code"),ye=n("dataset['sentence1']"),$e=n(" returns a Python list of values."),this.h()},l(s){const t=ot('[data-svelte="svelte-1phssyn"]',document.head);y=i(t,"META",{name:!0,content:!0}),t.forEach(a),ts=h(s),_=i(s,"H1",{class:!0});var oa=o(_);w=i(oa,"A",{id:!0,class:!0,href:!0});var Ee=o(w);xs=i(Ee,"SPAN",{});var Ae=o(xs);m(R.$$.fragment,Ae),Ae.forEach(a),Ee.forEach(a),va=h(oa),bs=i(oa,"SPAN",{});var De=o(bs);wa=l(De,"The Dataset object"),De.forEach(a),oa.forEach(a),Cs=h(s),L=i(s,"P",{});var pa=o(L);ya=l(pa,"In the previous tutorial, you learned how to successfully load a dataset. This section will familiarize you with the "),ns=i(pa,"A",{href:!0});var qe=o(ns);$a=l(qe,"Dataset"),qe.forEach(a),ka=l(pa," object. You will learn about the metadata stored inside a Dataset object, and the basics of querying a Dataset object to return rows and columns."),pa.forEach(a),Ts=h(s),N=i(s,"P",{});var ca=o(N);Ea=l(ca,"A "),ls=i(ca,"A",{href:!0});var Pe=o(ls);Aa=l(Pe,"Dataset"),Pe.forEach(a),Da=l(ca," object is returned when you load an instance of a dataset. This object behaves like a normal Python container."),ca.forEach(a),zs=h(s),m(G.$$.fragment,s),Os=h(s),D=i(s,"H2",{class:!0});var ha=o(D);I=i(ha,"A",{id:!0,class:!0,href:!0});var Le=o(I);js=i(Le,"SPAN",{});var Ne=o(js);m(B.$$.fragment,Ne),Ne.forEach(a),Le.forEach(a),qa=h(ha),_s=i(ha,"SPAN",{});var Ie=o(_s);Pa=l(Ie,"Metadata"),Ie.forEach(a),ha.forEach(a),Rs=h(s),$=i(s,"P",{});var ms=o($);La=l(ms,"The "),rs=i(ms,"A",{href:!0});var Se=o(rs);Na=l(Se,"Dataset"),Se.forEach(a),Ia=l(ms," object contains a lot of useful information about your dataset. For example, call "),vs=i(ms,"CODE",{});var Ce=o(vs);Sa=l(Ce,"dataset.info"),Ce.forEach(a),Ca=l(ms," to return a short description of the dataset, the authors, and even the dataset size. This will give you a quick snapshot of the datasets most important attributes."),ms.forEach(a),Gs=h(s),m(F.$$.fragment,s),Bs=h(s),d=i(s,"P",{});var E=o(d);Ta=l(E,"You can request specific attributes of the dataset, like "),ws=i(E,"CODE",{});var Te=o(ws);za=l(Te,"description"),Te.forEach(a),Oa=l(E,", "),ys=i(E,"CODE",{});var ze=o(ys);Ra=l(ze,"citation"),ze.forEach(a),Ga=l(E,", and "),$s=i(E,"CODE",{});var Oe=o($s);Ba=l(Oe,"homepage"),Oe.forEach(a),Fa=l(E,", by calling them directly. Take a look at "),is=i(E,"A",{href:!0});var Re=o(is);Ma=l(Re,"datasets.DatasetInfo"),Re.forEach(a),Ua=l(E," for a complete list of attributes you can return."),E.forEach(a),Fs=h(s),m(M.$$.fragment,s),Ms=h(s),q=i(s,"H2",{class:!0});var ua=o(q);S=i(ua,"A",{id:!0,class:!0,href:!0});var Ge=o(S);ks=i(Ge,"SPAN",{});var Be=o(ks);m(U.$$.fragment,Be),Be.forEach(a),Ge.forEach(a),Wa=h(ua),Es=i(ua,"SPAN",{});var Fe=o(Es);Ya=l(Fe,"Features and columns"),Fe.forEach(a),ua.forEach(a),Us=h(s),os=i(s,"P",{});var Me=o(os);Ha=l(Me,"A dataset is a table of rows and typed columns. Querying a dataset returns a Python dictionary where the keys correspond to column names, and the values correspond to column values:"),Me.forEach(a),Ws=h(s),m(W.$$.fragment,s),Ys=h(s),ps=i(s,"P",{});var Ue=o(ps);Ja=l(Ue,"Return the number of rows and columns with the following standard attributes:"),Ue.forEach(a),Hs=h(s),m(Y.$$.fragment,s),Js=h(s),C=i(s,"P",{});var da=o(C);Va=l(da,"List the columns names with "),cs=i(da,"A",{href:!0});var We=o(cs);Qa=l(We,"datasets.Dataset.column_names()"),We.forEach(a),Ka=l(da,":"),da.forEach(a),Vs=h(s),m(H.$$.fragment,s),Qs=h(s),J=i(s,"P",{});var ke=o(J);Xa=l(ke,"Get detailed information about the columns with "),As=i(ke,"CODE",{});var Ye=o(As);Za=l(Ye,"datasets.Dataset.features()"),Ye.forEach(a),ke.forEach(a),Ks=h(s),m(V.$$.fragment,s),Xs=h(s),v=i(s,"P",{});var O=o(v);se=l(O,"Return even more specific information about a feature like "),hs=i(O,"A",{href:!0});var He=o(hs);ae=l(He,"datasets.ClassLabel"),He.forEach(a),ee=l(O,", by calling its parameters "),Ds=i(O,"CODE",{});var Je=o(Ds);te=l(Je,"num_classes"),Je.forEach(a),ne=l(O," and "),qs=i(O,"CODE",{});var Ve=o(qs);le=l(Ve,"names"),Ve.forEach(a),re=l(O,":"),O.forEach(a),Zs=h(s),m(Q.$$.fragment,s),sa=h(s),P=i(s,"H2",{class:!0});var fa=o(P);T=i(fa,"A",{id:!0,class:!0,href:!0});var Qe=o(T);Ps=i(Qe,"SPAN",{});var Ke=o(Ps);m(K.$$.fragment,Ke),Ke.forEach(a),Qe.forEach(a),ie=h(fa),Ls=i(fa,"SPAN",{});var Xe=o(Ls);oe=l(Xe,"Rows, slices, batches, and columns"),Xe.forEach(a),fa.forEach(a),aa=h(s),us=i(s,"P",{});var Ze=o(us);pe=l(Ze,"Get several rows of your dataset at a time with slice notation or a list of indices:"),Ze.forEach(a),ea=h(s),m(X.$$.fragment,s),ta=h(s),ds=i(s,"P",{});var st=o(ds);ce=l(st,"Querying by the column name will return its values. For example, if you want to only return the first three examples:"),st.forEach(a),na=h(s),m(Z.$$.fragment,s),la=h(s),z=i(s,"P",{});var ma=o(z);he=l(ma,"Depending on how a "),fs=i(ma,"A",{href:!0});var at=o(fs);ue=l(at,"Dataset"),at.forEach(a),de=l(ma," object is queried, the format returned will be different:"),ma.forEach(a),ra=h(s),k=i(s,"UL",{});var gs=o(k);ss=i(gs,"LI",{});var ga=o(ss);fe=l(ga,"A single row like "),Ns=i(ga,"CODE",{});var et=o(Ns);me=l(et,"dataset[0]"),et.forEach(a),ge=l(ga," returns a Python dictionary of values."),ga.forEach(a),xe=h(gs),as=i(gs,"LI",{});var xa=o(as);be=l(xa,"A batch like "),Is=i(xa,"CODE",{});var tt=o(Is);je=l(tt,"dataset[5:10]"),tt.forEach(a),_e=l(xa," returns a Python dictionary of lists of values."),xa.forEach(a),ve=h(gs),es=i(gs,"LI",{});var ba=o(es);we=l(ba,"A column like "),Ss=i(ba,"CODE",{});var nt=o(Ss);ye=l(nt,"dataset['sentence1']"),nt.forEach(a),$e=l(ba," returns a Python list of values."),ba.forEach(a),gs.forEach(a),this.h()},h(){u(y,"name","hf:doc:metadata"),u(y,"content",JSON.stringify(ht)),u(w,"id","the-dataset-object"),u(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(w,"href","#the-dataset-object"),u(_,"class","relative group"),u(ns,"href","/docs/datasets/pr_3963/en/package_reference/main_classes#datasets.Dataset"),u(ls,"href","/docs/datasets/pr_3963/en/package_reference/main_classes#datasets.Dataset"),u(I,"id","metadata"),u(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(I,"href","#metadata"),u(D,"class","relative group"),u(rs,"href","/docs/datasets/pr_3963/en/package_reference/main_classes#datasets.Dataset"),u(is,"href","/docs/datasets/pr_3963/en/package_reference/main_classes#datasets.DatasetInfo"),u(S,"id","features-and-columns"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#features-and-columns"),u(q,"class","relative group"),u(cs,"href","/docs/datasets/pr_3963/en/package_reference/main_classes#datasets.Dataset.column_names"),u(hs,"href","/docs/datasets/pr_3963/en/package_reference/main_classes#datasets.ClassLabel"),u(T,"id","rows-slices-batches-and-columns"),u(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(T,"href","#rows-slices-batches-and-columns"),u(P,"class","relative group"),u(fs,"href","/docs/datasets/pr_3963/en/package_reference/main_classes#datasets.Dataset")},m(s,t){e(document.head,y),p(s,ts,t),p(s,_,t),e(_,w),e(w,xs),g(R,xs,null),e(_,va),e(_,bs),e(bs,wa),p(s,Cs,t),p(s,L,t),e(L,ya),e(L,ns),e(ns,$a),e(L,ka),p(s,Ts,t),p(s,N,t),e(N,Ea),e(N,ls),e(ls,Aa),e(N,Da),p(s,zs,t),g(G,s,t),p(s,Os,t),p(s,D,t),e(D,I),e(I,js),g(B,js,null),e(D,qa),e(D,_s),e(_s,Pa),p(s,Rs,t),p(s,$,t),e($,La),e($,rs),e(rs,Na),e($,Ia),e($,vs),e(vs,Sa),e($,Ca),p(s,Gs,t),g(F,s,t),p(s,Bs,t),p(s,d,t),e(d,Ta),e(d,ws),e(ws,za),e(d,Oa),e(d,ys),e(ys,Ra),e(d,Ga),e(d,$s),e($s,Ba),e(d,Fa),e(d,is),e(is,Ma),e(d,Ua),p(s,Fs,t),g(M,s,t),p(s,Ms,t),p(s,q,t),e(q,S),e(S,ks),g(U,ks,null),e(q,Wa),e(q,Es),e(Es,Ya),p(s,Us,t),p(s,os,t),e(os,Ha),p(s,Ws,t),g(W,s,t),p(s,Ys,t),p(s,ps,t),e(ps,Ja),p(s,Hs,t),g(Y,s,t),p(s,Js,t),p(s,C,t),e(C,Va),e(C,cs),e(cs,Qa),e(C,Ka),p(s,Vs,t),g(H,s,t),p(s,Qs,t),p(s,J,t),e(J,Xa),e(J,As),e(As,Za),p(s,Ks,t),g(V,s,t),p(s,Xs,t),p(s,v,t),e(v,se),e(v,hs),e(hs,ae),e(v,ee),e(v,Ds),e(Ds,te),e(v,ne),e(v,qs),e(qs,le),e(v,re),p(s,Zs,t),g(Q,s,t),p(s,sa,t),p(s,P,t),e(P,T),e(T,Ps),g(K,Ps,null),e(P,ie),e(P,Ls),e(Ls,oe),p(s,aa,t),p(s,us,t),e(us,pe),p(s,ea,t),g(X,s,t),p(s,ta,t),p(s,ds,t),e(ds,ce),p(s,na,t),g(Z,s,t),p(s,la,t),p(s,z,t),e(z,he),e(z,fs),e(fs,ue),e(z,de),p(s,ra,t),p(s,k,t),e(k,ss),e(ss,fe),e(ss,Ns),e(Ns,me),e(ss,ge),e(k,xe),e(k,as),e(as,be),e(as,Is),e(Is,je),e(as,_e),e(k,ve),e(k,es),e(es,we),e(es,Ss),e(Ss,ye),e(es,$e),ia=!0},p:pt,i(s){ia||(x(R.$$.fragment,s),x(G.$$.fragment,s),x(B.$$.fragment,s),x(F.$$.fragment,s),x(M.$$.fragment,s),x(U.$$.fragment,s),x(W.$$.fragment,s),x(Y.$$.fragment,s),x(H.$$.fragment,s),x(V.$$.fragment,s),x(Q.$$.fragment,s),x(K.$$.fragment,s),x(X.$$.fragment,s),x(Z.$$.fragment,s),ia=!0)},o(s){b(R.$$.fragment,s),b(G.$$.fragment,s),b(B.$$.fragment,s),b(F.$$.fragment,s),b(M.$$.fragment,s),b(U.$$.fragment,s),b(W.$$.fragment,s),b(Y.$$.fragment,s),b(H.$$.fragment,s),b(V.$$.fragment,s),b(Q.$$.fragment,s),b(K.$$.fragment,s),b(X.$$.fragment,s),b(Z.$$.fragment,s),ia=!1},d(s){a(y),s&&a(ts),s&&a(_),j(R),s&&a(Cs),s&&a(L),s&&a(Ts),s&&a(N),s&&a(zs),j(G,s),s&&a(Os),s&&a(D),j(B),s&&a(Rs),s&&a($),s&&a(Gs),j(F,s),s&&a(Bs),s&&a(d),s&&a(Fs),j(M,s),s&&a(Ms),s&&a(q),j(U),s&&a(Us),s&&a(os),s&&a(Ws),j(W,s),s&&a(Ys),s&&a(ps),s&&a(Hs),j(Y,s),s&&a(Js),s&&a(C),s&&a(Vs),j(H,s),s&&a(Qs),s&&a(J),s&&a(Ks),j(V,s),s&&a(Xs),s&&a(v),s&&a(Zs),j(Q,s),s&&a(sa),s&&a(P),j(K),s&&a(aa),s&&a(us),s&&a(ea),j(X,s),s&&a(ta),s&&a(ds),s&&a(na),j(Z,s),s&&a(la),s&&a(z),s&&a(ra),s&&a(k)}}}const ht={local:"the-dataset-object",sections:[{local:"metadata",title:"Metadata"},{local:"features-and-columns",title:"Features and columns"},{local:"rows-slices-batches-and-columns",title:"Rows, slices, batches, and columns"}],title:"The Dataset object"};function ut(_a,y,ts){let{fw:_}=y;return _a.$$set=w=>{"fw"in w&&ts(0,_=w.fw)},[_]}class gt extends lt{constructor(y){super();rt(this,y,ut,ct,it,{fw:0})}}export{gt as default,ht as metadata};
