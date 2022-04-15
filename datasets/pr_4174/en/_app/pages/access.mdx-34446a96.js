import{S as rt,i as it,s as ot,e as r,k as c,w as m,t as n,M as pt,c as i,d as a,m as h,a as o,x as f,h as l,b as u,F as e,g as p,y as g,L as ct,q as x,o as b,B as j,v as ht}from"../chunks/vendor-8138ceec.js";import{I as _a}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as $}from"../chunks/CodeBlock-fc89709f.js";function ut(Ee){let k,Ss,E,q,bs,G,va,js,wa,Ts,I,ya,ts,$a,ka,Cs,L,Ea,ns,Aa,Da,zs,O,Rs,A,N,_s,M,Pa,vs,qa,Fs,v,Ia,ls,La,Na,rs,Sa,Ta,Gs,U,Os,d,Ca,ws,za,Ra,ys,Fa,Ga,$s,Oa,Ma,is,Ua,Ba,Ms,B,Us,D,S,ks,W,Wa,Es,Ya,Bs,os,Ha,Ws,Y,Ys,ps,Ja,Hs,H,Js,T,Va,cs,Qa,Ka,Vs,J,Qs,C,Xa,hs,Za,se,Ks,V,Xs,_,ae,us,ee,te,As,ne,le,Ds,re,ie,Zs,Q,sa,P,z,Ps,K,oe,qs,pe,aa,ds,ce,ea,X,ta,ms,he,na,Z,la,R,ue,fs,de,me,ra,w,ss,fe,Is,ge,xe,be,as,je,Ls,_e,ve,we,es,ye,Ns,$e,ke,ia;return G=new _a({}),O=new $({props:{code:`from datasets import load_dataset
dataset = load_dataset('glue', 'mrpc', split='train')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)`}}),M=new _a({}),U=new $({props:{code:"dataset.info",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.info
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
)`}}),B=new $({props:{code:`dataset.split
dataset.description
dataset.citation
dataset.homepage`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.split
NamedSplit(<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.description
<span class="hljs-string">&#x27;GLUE, the General Language Understanding Evaluation benchmark\\n(https://gluebenchmark.com/) is a collection of resources for training,\\nevaluating, and analyzing natural language understanding systems.\\n\\n&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.citation
<span class="hljs-string">&#x27;@inproceedings{dolan2005automatically,\\n  title={Automatically constructing a corpus of sentential paraphrases},\\n  author={Dolan, William B and Brockett, Chris},\\n  booktitle={Proceedings of the Third International Workshop on Paraphrasing (IWP2005)},\\n  year={2005}\\n}\\n@inproceedings{wang2019glue,\\n  title={{GLUE}: A Multi-Task Benchmark and Analysis Platform for Natural Language Understanding},\\n  author={Wang, Alex and Singh, Amanpreet and Michael, Julian and Hill, Felix and Levy, Omer and Bowman, Samuel R.},\\n  note={In the Proceedings of ICLR.},\\n  year={2019}\\n}\\n\\nNote that each GLUE dataset has its own citation. Please see the source to see\\nthe correct citation for each contained dataset.&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.homepage
<span class="hljs-string">&#x27;https://www.microsoft.com/en-us/download/details.aspx?id=52398&#x27;</span>`}}),W=new _a({}),Y=new $({props:{code:"dataset[0]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;idx&#x27;</span>: <span class="hljs-number">0</span>,
<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">1</span>,
<span class="hljs-string">&#x27;sentence1&#x27;</span>: <span class="hljs-string">&#x27;Amrozi accused his brother , whom he called &quot; the witness &quot; , of deliberately distorting his evidence .&#x27;</span>,
<span class="hljs-string">&#x27;sentence2&#x27;</span>: <span class="hljs-string">&#x27;Referring to him as only &quot; the witness &quot; , Amrozi accused his brother of deliberately distorting his evidence .&#x27;</span>}`}}),H=new $({props:{code:`dataset.shape
dataset.num_columns
dataset.num_rows
len(dataset)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.shape
(<span class="hljs-number">3668</span>, <span class="hljs-number">4</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.num_columns
<span class="hljs-number">4</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.num_rows
<span class="hljs-number">3668</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">len</span>(dataset)
<span class="hljs-number">3668</span>`}}),J=new $({props:{code:"dataset.column_names",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.column_names
[<span class="hljs-string">&#x27;idx&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>, <span class="hljs-string">&#x27;sentence1&#x27;</span>, <span class="hljs-string">&#x27;sentence2&#x27;</span>]`}}),V=new $({props:{code:"dataset.features",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features
{<span class="hljs-string">&#x27;idx&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
    <span class="hljs-string">&#x27;label&#x27;</span>: ClassLabel(num_classes=<span class="hljs-number">2</span>, names=[<span class="hljs-string">&#x27;not_equivalent&#x27;</span>, <span class="hljs-string">&#x27;equivalent&#x27;</span>], names_file=<span class="hljs-literal">None</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
    <span class="hljs-string">&#x27;sentence1&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
    <span class="hljs-string">&#x27;sentence2&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
}`}}),Q=new $({props:{code:`dataset.features['label'].num_classes
dataset.features['label'].names`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features[<span class="hljs-string">&#x27;label&#x27;</span>].num_classes
<span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features[<span class="hljs-string">&#x27;label&#x27;</span>].names
[<span class="hljs-string">&#x27;not_equivalent&#x27;</span>, <span class="hljs-string">&#x27;equivalent&#x27;</span>]`}}),K=new _a({}),X=new $({props:{code:`dataset[:3]
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
}`}}),Z=new $({props:{code:"dataset['sentence1'][:3]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-string">&#x27;sentence1&#x27;</span>][:<span class="hljs-number">3</span>]
[<span class="hljs-string">&#x27;Amrozi accused his brother , whom he called &quot; the witness &quot; , of deliberately distorting his evidence .&#x27;</span>, <span class="hljs-string">&quot;Yucaipa owned Dominick &#x27;s before selling the chain to Safeway in 1998 for $ 2.5 billion .&quot;</span>, <span class="hljs-string">&#x27;They had published an advertisement on the Internet on June 10 , offering the cargo for sale , he added .&#x27;</span>]`}}),{c(){k=r("meta"),Ss=c(),E=r("h1"),q=r("a"),bs=r("span"),m(G.$$.fragment),va=c(),js=r("span"),wa=n("The Dataset object"),Ts=c(),I=r("p"),ya=n("In the previous tutorial, you learned how to successfully load a dataset. This section will familiarize you with the "),ts=r("a"),$a=n("Dataset"),ka=n(" object. You will learn about the metadata stored inside a Dataset object, and the basics of querying a Dataset object to return rows and columns."),Cs=c(),L=r("p"),Ea=n("A "),ns=r("a"),Aa=n("Dataset"),Da=n(" object is returned when you load an instance of a dataset. This object behaves like a normal Python container."),zs=c(),m(O.$$.fragment),Rs=c(),A=r("h2"),N=r("a"),_s=r("span"),m(M.$$.fragment),Pa=c(),vs=r("span"),qa=n("Metadata"),Fs=c(),v=r("p"),Ia=n("The "),ls=r("a"),La=n("Dataset"),Na=n(" object contains a lot of useful information about your dataset. For example, access "),rs=r("a"),Sa=n("DatasetInfo"),Ta=n(" to return a short description of the dataset, the authors, and even the dataset size. This will give you a quick snapshot of the datasets most important attributes."),Gs=c(),m(U.$$.fragment),Os=c(),d=r("p"),Ca=n("You can request specific attributes of the dataset, like "),ws=r("code"),za=n("description"),Ra=n(", "),ys=r("code"),Fa=n("citation"),Ga=n(", and "),$s=r("code"),Oa=n("homepage"),Ma=n(", by calling them directly. Take a look at "),is=r("a"),Ua=n("DatasetInfo"),Ba=n(" for a complete list of attributes you can return."),Ms=c(),m(B.$$.fragment),Us=c(),D=r("h2"),S=r("a"),ks=r("span"),m(W.$$.fragment),Wa=c(),Es=r("span"),Ya=n("Features and columns"),Bs=c(),os=r("p"),Ha=n("A dataset is a table of rows and typed columns. Querying a dataset returns a Python dictionary where the keys correspond to column names, and the values correspond to column values:"),Ws=c(),m(Y.$$.fragment),Ys=c(),ps=r("p"),Ja=n("Return the number of rows and columns with the following standard attributes:"),Hs=c(),m(H.$$.fragment),Js=c(),T=r("p"),Va=n("List the columns names with "),cs=r("a"),Qa=n("Dataset.column_names()"),Ka=n(":"),Vs=c(),m(J.$$.fragment),Qs=c(),C=r("p"),Xa=n("Get detailed information about the columns with "),hs=r("a"),Za=n("Features"),se=n(":"),Ks=c(),m(V.$$.fragment),Xs=c(),_=r("p"),ae=n("Return even more specific information about a feature like "),us=r("a"),ee=n("ClassLabel"),te=n(", by calling its parameters "),As=r("code"),ne=n("num_classes"),le=n(" and "),Ds=r("code"),re=n("names"),ie=n(":"),Zs=c(),m(Q.$$.fragment),sa=c(),P=r("h2"),z=r("a"),Ps=r("span"),m(K.$$.fragment),oe=c(),qs=r("span"),pe=n("Rows, slices, batches, and columns"),aa=c(),ds=r("p"),ce=n("Get several rows of your dataset at a time with slice notation or a list of indices:"),ea=c(),m(X.$$.fragment),ta=c(),ms=r("p"),he=n("Querying by the column name will return its values. For example, if you want to only return the first three examples:"),na=c(),m(Z.$$.fragment),la=c(),R=r("p"),ue=n("Depending on how a "),fs=r("a"),de=n("Dataset"),me=n(" object is queried, the format returned will be different:"),ra=c(),w=r("ul"),ss=r("li"),fe=n("A single row like "),Is=r("code"),ge=n("dataset[0]"),xe=n(" returns a Python dictionary of values."),be=c(),as=r("li"),je=n("A batch like "),Ls=r("code"),_e=n("dataset[5:10]"),ve=n(" returns a Python dictionary of lists of values."),we=c(),es=r("li"),ye=n("A column like "),Ns=r("code"),$e=n("dataset['sentence1']"),ke=n(" returns a Python list of values."),this.h()},l(s){const t=pt('[data-svelte="svelte-1phssyn"]',document.head);k=i(t,"META",{name:!0,content:!0}),t.forEach(a),Ss=h(s),E=i(s,"H1",{class:!0});var oa=o(E);q=i(oa,"A",{id:!0,class:!0,href:!0});var Ae=o(q);bs=i(Ae,"SPAN",{});var De=o(bs);f(G.$$.fragment,De),De.forEach(a),Ae.forEach(a),va=h(oa),js=i(oa,"SPAN",{});var Pe=o(js);wa=l(Pe,"The Dataset object"),Pe.forEach(a),oa.forEach(a),Ts=h(s),I=i(s,"P",{});var pa=o(I);ya=l(pa,"In the previous tutorial, you learned how to successfully load a dataset. This section will familiarize you with the "),ts=i(pa,"A",{href:!0});var qe=o(ts);$a=l(qe,"Dataset"),qe.forEach(a),ka=l(pa," object. You will learn about the metadata stored inside a Dataset object, and the basics of querying a Dataset object to return rows and columns."),pa.forEach(a),Cs=h(s),L=i(s,"P",{});var ca=o(L);Ea=l(ca,"A "),ns=i(ca,"A",{href:!0});var Ie=o(ns);Aa=l(Ie,"Dataset"),Ie.forEach(a),Da=l(ca," object is returned when you load an instance of a dataset. This object behaves like a normal Python container."),ca.forEach(a),zs=h(s),f(O.$$.fragment,s),Rs=h(s),A=i(s,"H2",{class:!0});var ha=o(A);N=i(ha,"A",{id:!0,class:!0,href:!0});var Le=o(N);_s=i(Le,"SPAN",{});var Ne=o(_s);f(M.$$.fragment,Ne),Ne.forEach(a),Le.forEach(a),Pa=h(ha),vs=i(ha,"SPAN",{});var Se=o(vs);qa=l(Se,"Metadata"),Se.forEach(a),ha.forEach(a),Fs=h(s),v=i(s,"P",{});var gs=o(v);Ia=l(gs,"The "),ls=i(gs,"A",{href:!0});var Te=o(ls);La=l(Te,"Dataset"),Te.forEach(a),Na=l(gs," object contains a lot of useful information about your dataset. For example, access "),rs=i(gs,"A",{href:!0});var Ce=o(rs);Sa=l(Ce,"DatasetInfo"),Ce.forEach(a),Ta=l(gs," to return a short description of the dataset, the authors, and even the dataset size. This will give you a quick snapshot of the datasets most important attributes."),gs.forEach(a),Gs=h(s),f(U.$$.fragment,s),Os=h(s),d=i(s,"P",{});var y=o(d);Ca=l(y,"You can request specific attributes of the dataset, like "),ws=i(y,"CODE",{});var ze=o(ws);za=l(ze,"description"),ze.forEach(a),Ra=l(y,", "),ys=i(y,"CODE",{});var Re=o(ys);Fa=l(Re,"citation"),Re.forEach(a),Ga=l(y,", and "),$s=i(y,"CODE",{});var Fe=o($s);Oa=l(Fe,"homepage"),Fe.forEach(a),Ma=l(y,", by calling them directly. Take a look at "),is=i(y,"A",{href:!0});var Ge=o(is);Ua=l(Ge,"DatasetInfo"),Ge.forEach(a),Ba=l(y," for a complete list of attributes you can return."),y.forEach(a),Ms=h(s),f(B.$$.fragment,s),Us=h(s),D=i(s,"H2",{class:!0});var ua=o(D);S=i(ua,"A",{id:!0,class:!0,href:!0});var Oe=o(S);ks=i(Oe,"SPAN",{});var Me=o(ks);f(W.$$.fragment,Me),Me.forEach(a),Oe.forEach(a),Wa=h(ua),Es=i(ua,"SPAN",{});var Ue=o(Es);Ya=l(Ue,"Features and columns"),Ue.forEach(a),ua.forEach(a),Bs=h(s),os=i(s,"P",{});var Be=o(os);Ha=l(Be,"A dataset is a table of rows and typed columns. Querying a dataset returns a Python dictionary where the keys correspond to column names, and the values correspond to column values:"),Be.forEach(a),Ws=h(s),f(Y.$$.fragment,s),Ys=h(s),ps=i(s,"P",{});var We=o(ps);Ja=l(We,"Return the number of rows and columns with the following standard attributes:"),We.forEach(a),Hs=h(s),f(H.$$.fragment,s),Js=h(s),T=i(s,"P",{});var da=o(T);Va=l(da,"List the columns names with "),cs=i(da,"A",{href:!0});var Ye=o(cs);Qa=l(Ye,"Dataset.column_names()"),Ye.forEach(a),Ka=l(da,":"),da.forEach(a),Vs=h(s),f(J.$$.fragment,s),Qs=h(s),C=i(s,"P",{});var ma=o(C);Xa=l(ma,"Get detailed information about the columns with "),hs=i(ma,"A",{href:!0});var He=o(hs);Za=l(He,"Features"),He.forEach(a),se=l(ma,":"),ma.forEach(a),Ks=h(s),f(V.$$.fragment,s),Xs=h(s),_=i(s,"P",{});var F=o(_);ae=l(F,"Return even more specific information about a feature like "),us=i(F,"A",{href:!0});var Je=o(us);ee=l(Je,"ClassLabel"),Je.forEach(a),te=l(F,", by calling its parameters "),As=i(F,"CODE",{});var Ve=o(As);ne=l(Ve,"num_classes"),Ve.forEach(a),le=l(F," and "),Ds=i(F,"CODE",{});var Qe=o(Ds);re=l(Qe,"names"),Qe.forEach(a),ie=l(F,":"),F.forEach(a),Zs=h(s),f(Q.$$.fragment,s),sa=h(s),P=i(s,"H2",{class:!0});var fa=o(P);z=i(fa,"A",{id:!0,class:!0,href:!0});var Ke=o(z);Ps=i(Ke,"SPAN",{});var Xe=o(Ps);f(K.$$.fragment,Xe),Xe.forEach(a),Ke.forEach(a),oe=h(fa),qs=i(fa,"SPAN",{});var Ze=o(qs);pe=l(Ze,"Rows, slices, batches, and columns"),Ze.forEach(a),fa.forEach(a),aa=h(s),ds=i(s,"P",{});var st=o(ds);ce=l(st,"Get several rows of your dataset at a time with slice notation or a list of indices:"),st.forEach(a),ea=h(s),f(X.$$.fragment,s),ta=h(s),ms=i(s,"P",{});var at=o(ms);he=l(at,"Querying by the column name will return its values. For example, if you want to only return the first three examples:"),at.forEach(a),na=h(s),f(Z.$$.fragment,s),la=h(s),R=i(s,"P",{});var ga=o(R);ue=l(ga,"Depending on how a "),fs=i(ga,"A",{href:!0});var et=o(fs);de=l(et,"Dataset"),et.forEach(a),me=l(ga," object is queried, the format returned will be different:"),ga.forEach(a),ra=h(s),w=i(s,"UL",{});var xs=o(w);ss=i(xs,"LI",{});var xa=o(ss);fe=l(xa,"A single row like "),Is=i(xa,"CODE",{});var tt=o(Is);ge=l(tt,"dataset[0]"),tt.forEach(a),xe=l(xa," returns a Python dictionary of values."),xa.forEach(a),be=h(xs),as=i(xs,"LI",{});var ba=o(as);je=l(ba,"A batch like "),Ls=i(ba,"CODE",{});var nt=o(Ls);_e=l(nt,"dataset[5:10]"),nt.forEach(a),ve=l(ba," returns a Python dictionary of lists of values."),ba.forEach(a),we=h(xs),es=i(xs,"LI",{});var ja=o(es);ye=l(ja,"A column like "),Ns=i(ja,"CODE",{});var lt=o(Ns);$e=l(lt,"dataset['sentence1']"),lt.forEach(a),ke=l(ja," returns a Python list of values."),ja.forEach(a),xs.forEach(a),this.h()},h(){u(k,"name","hf:doc:metadata"),u(k,"content",JSON.stringify(dt)),u(q,"id","the-dataset-object"),u(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(q,"href","#the-dataset-object"),u(E,"class","relative group"),u(ts,"href","/docs/datasets/pr_4174/en/package_reference/main_classes#datasets.Dataset"),u(ns,"href","/docs/datasets/pr_4174/en/package_reference/main_classes#datasets.Dataset"),u(N,"id","metadata"),u(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(N,"href","#metadata"),u(A,"class","relative group"),u(ls,"href","/docs/datasets/pr_4174/en/package_reference/main_classes#datasets.Dataset"),u(rs,"href","/docs/datasets/pr_4174/en/package_reference/main_classes#datasets.DatasetInfo"),u(is,"href","/docs/datasets/pr_4174/en/package_reference/main_classes#datasets.DatasetInfo"),u(S,"id","features-and-columns"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#features-and-columns"),u(D,"class","relative group"),u(cs,"href","/docs/datasets/pr_4174/en/package_reference/main_classes#datasets.Dataset.column_names"),u(hs,"href","/docs/datasets/pr_4174/en/package_reference/main_classes#datasets.Features"),u(us,"href","/docs/datasets/pr_4174/en/package_reference/main_classes#datasets.ClassLabel"),u(z,"id","rows-slices-batches-and-columns"),u(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(z,"href","#rows-slices-batches-and-columns"),u(P,"class","relative group"),u(fs,"href","/docs/datasets/pr_4174/en/package_reference/main_classes#datasets.Dataset")},m(s,t){e(document.head,k),p(s,Ss,t),p(s,E,t),e(E,q),e(q,bs),g(G,bs,null),e(E,va),e(E,js),e(js,wa),p(s,Ts,t),p(s,I,t),e(I,ya),e(I,ts),e(ts,$a),e(I,ka),p(s,Cs,t),p(s,L,t),e(L,Ea),e(L,ns),e(ns,Aa),e(L,Da),p(s,zs,t),g(O,s,t),p(s,Rs,t),p(s,A,t),e(A,N),e(N,_s),g(M,_s,null),e(A,Pa),e(A,vs),e(vs,qa),p(s,Fs,t),p(s,v,t),e(v,Ia),e(v,ls),e(ls,La),e(v,Na),e(v,rs),e(rs,Sa),e(v,Ta),p(s,Gs,t),g(U,s,t),p(s,Os,t),p(s,d,t),e(d,Ca),e(d,ws),e(ws,za),e(d,Ra),e(d,ys),e(ys,Fa),e(d,Ga),e(d,$s),e($s,Oa),e(d,Ma),e(d,is),e(is,Ua),e(d,Ba),p(s,Ms,t),g(B,s,t),p(s,Us,t),p(s,D,t),e(D,S),e(S,ks),g(W,ks,null),e(D,Wa),e(D,Es),e(Es,Ya),p(s,Bs,t),p(s,os,t),e(os,Ha),p(s,Ws,t),g(Y,s,t),p(s,Ys,t),p(s,ps,t),e(ps,Ja),p(s,Hs,t),g(H,s,t),p(s,Js,t),p(s,T,t),e(T,Va),e(T,cs),e(cs,Qa),e(T,Ka),p(s,Vs,t),g(J,s,t),p(s,Qs,t),p(s,C,t),e(C,Xa),e(C,hs),e(hs,Za),e(C,se),p(s,Ks,t),g(V,s,t),p(s,Xs,t),p(s,_,t),e(_,ae),e(_,us),e(us,ee),e(_,te),e(_,As),e(As,ne),e(_,le),e(_,Ds),e(Ds,re),e(_,ie),p(s,Zs,t),g(Q,s,t),p(s,sa,t),p(s,P,t),e(P,z),e(z,Ps),g(K,Ps,null),e(P,oe),e(P,qs),e(qs,pe),p(s,aa,t),p(s,ds,t),e(ds,ce),p(s,ea,t),g(X,s,t),p(s,ta,t),p(s,ms,t),e(ms,he),p(s,na,t),g(Z,s,t),p(s,la,t),p(s,R,t),e(R,ue),e(R,fs),e(fs,de),e(R,me),p(s,ra,t),p(s,w,t),e(w,ss),e(ss,fe),e(ss,Is),e(Is,ge),e(ss,xe),e(w,be),e(w,as),e(as,je),e(as,Ls),e(Ls,_e),e(as,ve),e(w,we),e(w,es),e(es,ye),e(es,Ns),e(Ns,$e),e(es,ke),ia=!0},p:ct,i(s){ia||(x(G.$$.fragment,s),x(O.$$.fragment,s),x(M.$$.fragment,s),x(U.$$.fragment,s),x(B.$$.fragment,s),x(W.$$.fragment,s),x(Y.$$.fragment,s),x(H.$$.fragment,s),x(J.$$.fragment,s),x(V.$$.fragment,s),x(Q.$$.fragment,s),x(K.$$.fragment,s),x(X.$$.fragment,s),x(Z.$$.fragment,s),ia=!0)},o(s){b(G.$$.fragment,s),b(O.$$.fragment,s),b(M.$$.fragment,s),b(U.$$.fragment,s),b(B.$$.fragment,s),b(W.$$.fragment,s),b(Y.$$.fragment,s),b(H.$$.fragment,s),b(J.$$.fragment,s),b(V.$$.fragment,s),b(Q.$$.fragment,s),b(K.$$.fragment,s),b(X.$$.fragment,s),b(Z.$$.fragment,s),ia=!1},d(s){a(k),s&&a(Ss),s&&a(E),j(G),s&&a(Ts),s&&a(I),s&&a(Cs),s&&a(L),s&&a(zs),j(O,s),s&&a(Rs),s&&a(A),j(M),s&&a(Fs),s&&a(v),s&&a(Gs),j(U,s),s&&a(Os),s&&a(d),s&&a(Ms),j(B,s),s&&a(Us),s&&a(D),j(W),s&&a(Bs),s&&a(os),s&&a(Ws),j(Y,s),s&&a(Ys),s&&a(ps),s&&a(Hs),j(H,s),s&&a(Js),s&&a(T),s&&a(Vs),j(J,s),s&&a(Qs),s&&a(C),s&&a(Ks),j(V,s),s&&a(Xs),s&&a(_),s&&a(Zs),j(Q,s),s&&a(sa),s&&a(P),j(K),s&&a(aa),s&&a(ds),s&&a(ea),j(X,s),s&&a(ta),s&&a(ms),s&&a(na),j(Z,s),s&&a(la),s&&a(R),s&&a(ra),s&&a(w)}}}const dt={local:"the-dataset-object",sections:[{local:"metadata",title:"Metadata"},{local:"features-and-columns",title:"Features and columns"},{local:"rows-slices-batches-and-columns",title:"Rows, slices, batches, and columns"}],title:"The Dataset object"};function mt(Ee){return ht(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bt extends rt{constructor(k){super();it(this,k,mt,ut,ot,{})}}export{bt as default,dt as metadata};
