import{S as Ve,i as We,s as Xe,e as r,k as m,w as f,t as c,M as Ze,c as n,d as e,m as h,a as i,x as d,h as p,b as o,F as t,g as l,y as g,L as st,q as _,o as v,B as x,v as et}from"../chunks/vendor-8138ceec.js";import{I as us}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as fs}from"../chunks/CodeBlock-fc89709f.js";function tt(ye){let j,ds,$,E,ts,F,Os,as,Ts,gs,q,Ys,R,Js,Ks,_s,P,Qs,K,Vs,Ws,vs,U,xs,w,A,rs,D,Xs,ns,Zs,js,M,se,Q,ee,te,$s,G,ws,V,ae,bs,b,S,is,z,re,ls,ne,ys,W,ie,ks,B,Es,y,C,os,O,le,cs,oe,qs,u,ce,X,pe,me,ps,he,ue,Z,fe,de,Ps,T,As,I,ge,ss,_e,ve,Ms,k,L,ms,Y,xe,hs,je,Ss,N,$e,es,we,be,Cs,J,Is;return F=new us({}),U=new fs({props:{code:`from datasets import list_metrics
metrics_list = list_metrics()
len(metrics_list)
print(metrics_list)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> list_metrics
<span class="hljs-meta">&gt;&gt;&gt; </span>metrics_list = list_metrics()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">len</span>(metrics_list)
<span class="hljs-number">28</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(metrics_list)
[<span class="hljs-string">&#x27;accuracy&#x27;</span>, <span class="hljs-string">&#x27;bertscore&#x27;</span>, <span class="hljs-string">&#x27;bleu&#x27;</span>, <span class="hljs-string">&#x27;bleurt&#x27;</span>, <span class="hljs-string">&#x27;cer&#x27;</span>, <span class="hljs-string">&#x27;comet&#x27;</span>, <span class="hljs-string">&#x27;coval&#x27;</span>, <span class="hljs-string">&#x27;cuad&#x27;</span>, <span class="hljs-string">&#x27;f1&#x27;</span>, <span class="hljs-string">&#x27;gleu&#x27;</span>, <span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;indic_glue&#x27;</span>, <span class="hljs-string">&#x27;matthews_correlation&#x27;</span>, <span class="hljs-string">&#x27;meteor&#x27;</span>, <span class="hljs-string">&#x27;pearsonr&#x27;</span>, <span class="hljs-string">&#x27;precision&#x27;</span>, <span class="hljs-string">&#x27;recall&#x27;</span>, <span class="hljs-string">&#x27;rouge&#x27;</span>, <span class="hljs-string">&#x27;sacrebleu&#x27;</span>, <span class="hljs-string">&#x27;sari&#x27;</span>, <span class="hljs-string">&#x27;seqeval&#x27;</span>, <span class="hljs-string">&#x27;spearmanr&#x27;</span>, <span class="hljs-string">&#x27;squad&#x27;</span>, <span class="hljs-string">&#x27;squad_v2&#x27;</span>, <span class="hljs-string">&#x27;super_glue&#x27;</span>, <span class="hljs-string">&#x27;wer&#x27;</span>, <span class="hljs-string">&#x27;wiki_split&#x27;</span>, <span class="hljs-string">&#x27;xnli&#x27;</span>]`}}),D=new us({}),G=new fs({props:{code:`from datasets import load_metric
metric = load_metric('glue', 'mrpc')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric
<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)`}}),z=new us({}),B=new fs({props:{code:"metric = load_metric('glue', 'mrpc')",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)'}}),O=new us({}),T=new fs({props:{code:"print(metric.inputs_description)",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(metric.inputs_description)
Compute GLUE evaluation metric associated to each GLUE dataset.
Args:
    predictions: <span class="hljs-built_in">list</span> of predictions to score.
        Each translation should be tokenized into a <span class="hljs-built_in">list</span> of tokens.
    references: <span class="hljs-built_in">list</span> of lists of references <span class="hljs-keyword">for</span> each translation.
        Each reference should be tokenized into a <span class="hljs-built_in">list</span> of tokens.
Returns: depending on the GLUE subset, one <span class="hljs-keyword">or</span> several of:
    <span class="hljs-string">&quot;accuracy&quot;</span>: Accuracy
    <span class="hljs-string">&quot;f1&quot;</span>: F1 score
    <span class="hljs-string">&quot;pearson&quot;</span>: Pearson Correlation
    <span class="hljs-string">&quot;spearmanr&quot;</span>: Spearman Correlation
    <span class="hljs-string">&quot;matthews_correlation&quot;</span>: Matthew Correlation
Examples:
    &gt;&gt;&gt; glue_metric = datasets.load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;sst2&#x27;</span>)  <span class="hljs-comment"># &#x27;sst2&#x27; or any of [&quot;mnli&quot;, &quot;mnli_mismatched&quot;, &quot;mnli_matched&quot;, &quot;qnli&quot;, &quot;rte&quot;, &quot;wnli&quot;, &quot;hans&quot;]</span>
    &gt;&gt;&gt; references = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
    &gt;&gt;&gt; predictions = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
    &gt;&gt;&gt; results = glue_metric.compute(predictions=predictions, references=references)
    &gt;&gt;&gt; <span class="hljs-built_in">print</span>(results)
    {<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">1.0</span>}
    ...
    &gt;&gt;&gt; glue_metric = datasets.load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)  <span class="hljs-comment"># &#x27;mrpc&#x27; or &#x27;qqp&#x27;</span>
    &gt;&gt;&gt; references = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
    &gt;&gt;&gt; predictions = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
    &gt;&gt;&gt; results = glue_metric.compute(predictions=predictions, references=references)
    &gt;&gt;&gt; <span class="hljs-built_in">print</span>(results)
    {<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">1.0</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">1.0</span>}
    ...`}}),Y=new us({}),J=new fs({props:{code:`model_predictions = model(model_inputs)
final_score = metric.compute(predictions=model_predictions, references=gold_references)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model_predictions = model(model_inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>final_score = metric.compute(predictions=model_predictions, references=gold_references)`}}),{c(){j=r("meta"),ds=m(),$=r("h1"),E=r("a"),ts=r("span"),f(F.$$.fragment),Os=m(),as=r("span"),Ts=c("Evaluate predictions"),gs=m(),q=r("p"),Ys=c("\u{1F917} Datasets provides various common and NLP-specific "),R=r("a"),Js=c("metrics"),Ks=c(" for you to measure your models performance. In this section of the tutorials, you will load a metric and use it to evaluate your models predictions."),_s=m(),P=r("p"),Qs=c("You can see what metrics are available with "),K=r("a"),Vs=c("list_metrics()"),Ws=c(":"),vs=m(),f(U.$$.fragment),xs=m(),w=r("h2"),A=r("a"),rs=r("span"),f(D.$$.fragment),Xs=m(),ns=r("span"),Zs=c("Load metric"),js=m(),M=r("p"),se=c("It is very easy to load a metric with \u{1F917} Datasets. In fact, you will notice that it is very similar to loading a dataset! Load a metric from the Hub with "),Q=r("a"),ee=c("load_metric()"),te=c(":"),$s=m(),f(G.$$.fragment),ws=m(),V=r("p"),ae=c("This will load the metric associated with the MRPC dataset from the GLUE benchmark."),bs=m(),b=r("h2"),S=r("a"),is=r("span"),f(z.$$.fragment),re=m(),ls=r("span"),ne=c("Select a configuration"),ys=m(),W=r("p"),ie=c("If you are using a benchmark dataset, you need to select a metric that is associated with the configuration you are using. Select a metric configuration by providing the configuration name:"),ks=m(),f(B.$$.fragment),Es=m(),y=r("h2"),C=r("a"),os=r("span"),f(O.$$.fragment),le=m(),cs=r("span"),oe=c("Metrics object"),qs=m(),u=r("p"),ce=c("Before you begin using a "),X=r("a"),pe=c("Metric"),me=c(" object, you should get to know it a little better. As with a dataset, you can return some basic information about a metric. For example, access the "),ps=r("code"),he=c("inputs_description"),ue=c(" parameter in "),Z=r("a"),fe=c("datasets.MetricInfo"),de=c(" to get more information about a metrics expected input format and some usage examples:"),Ps=m(),f(T.$$.fragment),As=m(),I=r("p"),ge=c("Notice for the MRPC configuration, the metric expects the input format to be zero or one. For a complete list of attributes you can return with your metric, take a look at "),ss=r("a"),_e=c("MetricInfo"),ve=c("."),Ms=m(),k=r("h2"),L=r("a"),ms=r("span"),f(Y.$$.fragment),xe=m(),hs=r("span"),je=c("Compute metric"),Ss=m(),N=r("p"),$e=c("Once you have loaded a metric, you are ready to use it to evaluate a models predictions. Provide the model predictions and references to "),es=r("a"),we=c("compute()"),be=c(":"),Cs=m(),f(J.$$.fragment),this.h()},l(s){const a=Ze('[data-svelte="svelte-1phssyn"]',document.head);j=n(a,"META",{name:!0,content:!0}),a.forEach(e),ds=h(s),$=n(s,"H1",{class:!0});var Ls=i($);E=n(Ls,"A",{id:!0,class:!0,href:!0});var ke=i(E);ts=n(ke,"SPAN",{});var Ee=i(ts);d(F.$$.fragment,Ee),Ee.forEach(e),ke.forEach(e),Os=h(Ls),as=n(Ls,"SPAN",{});var qe=i(as);Ts=p(qe,"Evaluate predictions"),qe.forEach(e),Ls.forEach(e),gs=h(s),q=n(s,"P",{});var Ns=i(q);Ys=p(Ns,"\u{1F917} Datasets provides various common and NLP-specific "),R=n(Ns,"A",{href:!0,rel:!0});var Pe=i(R);Js=p(Pe,"metrics"),Pe.forEach(e),Ks=p(Ns," for you to measure your models performance. In this section of the tutorials, you will load a metric and use it to evaluate your models predictions."),Ns.forEach(e),_s=h(s),P=n(s,"P",{});var Hs=i(P);Qs=p(Hs,"You can see what metrics are available with "),K=n(Hs,"A",{href:!0});var Ae=i(K);Vs=p(Ae,"list_metrics()"),Ae.forEach(e),Ws=p(Hs,":"),Hs.forEach(e),vs=h(s),d(U.$$.fragment,s),xs=h(s),w=n(s,"H2",{class:!0});var Fs=i(w);A=n(Fs,"A",{id:!0,class:!0,href:!0});var Me=i(A);rs=n(Me,"SPAN",{});var Se=i(rs);d(D.$$.fragment,Se),Se.forEach(e),Me.forEach(e),Xs=h(Fs),ns=n(Fs,"SPAN",{});var Ce=i(ns);Zs=p(Ce,"Load metric"),Ce.forEach(e),Fs.forEach(e),js=h(s),M=n(s,"P",{});var Rs=i(M);se=p(Rs,"It is very easy to load a metric with \u{1F917} Datasets. In fact, you will notice that it is very similar to loading a dataset! Load a metric from the Hub with "),Q=n(Rs,"A",{href:!0});var Ie=i(Q);ee=p(Ie,"load_metric()"),Ie.forEach(e),te=p(Rs,":"),Rs.forEach(e),$s=h(s),d(G.$$.fragment,s),ws=h(s),V=n(s,"P",{});var Le=i(V);ae=p(Le,"This will load the metric associated with the MRPC dataset from the GLUE benchmark."),Le.forEach(e),bs=h(s),b=n(s,"H2",{class:!0});var Us=i(b);S=n(Us,"A",{id:!0,class:!0,href:!0});var Ne=i(S);is=n(Ne,"SPAN",{});var He=i(is);d(z.$$.fragment,He),He.forEach(e),Ne.forEach(e),re=h(Us),ls=n(Us,"SPAN",{});var Fe=i(ls);ne=p(Fe,"Select a configuration"),Fe.forEach(e),Us.forEach(e),ys=h(s),W=n(s,"P",{});var Re=i(W);ie=p(Re,"If you are using a benchmark dataset, you need to select a metric that is associated with the configuration you are using. Select a metric configuration by providing the configuration name:"),Re.forEach(e),ks=h(s),d(B.$$.fragment,s),Es=h(s),y=n(s,"H2",{class:!0});var Ds=i(y);C=n(Ds,"A",{id:!0,class:!0,href:!0});var Ue=i(C);os=n(Ue,"SPAN",{});var De=i(os);d(O.$$.fragment,De),De.forEach(e),Ue.forEach(e),le=h(Ds),cs=n(Ds,"SPAN",{});var Ge=i(cs);oe=p(Ge,"Metrics object"),Ge.forEach(e),Ds.forEach(e),qs=h(s),u=n(s,"P",{});var H=i(u);ce=p(H,"Before you begin using a "),X=n(H,"A",{href:!0});var ze=i(X);pe=p(ze,"Metric"),ze.forEach(e),me=p(H," object, you should get to know it a little better. As with a dataset, you can return some basic information about a metric. For example, access the "),ps=n(H,"CODE",{});var Be=i(ps);he=p(Be,"inputs_description"),Be.forEach(e),ue=p(H," parameter in "),Z=n(H,"A",{href:!0});var Oe=i(Z);fe=p(Oe,"datasets.MetricInfo"),Oe.forEach(e),de=p(H," to get more information about a metrics expected input format and some usage examples:"),H.forEach(e),Ps=h(s),d(T.$$.fragment,s),As=h(s),I=n(s,"P",{});var Gs=i(I);ge=p(Gs,"Notice for the MRPC configuration, the metric expects the input format to be zero or one. For a complete list of attributes you can return with your metric, take a look at "),ss=n(Gs,"A",{href:!0});var Te=i(ss);_e=p(Te,"MetricInfo"),Te.forEach(e),ve=p(Gs,"."),Gs.forEach(e),Ms=h(s),k=n(s,"H2",{class:!0});var zs=i(k);L=n(zs,"A",{id:!0,class:!0,href:!0});var Ye=i(L);ms=n(Ye,"SPAN",{});var Je=i(ms);d(Y.$$.fragment,Je),Je.forEach(e),Ye.forEach(e),xe=h(zs),hs=n(zs,"SPAN",{});var Ke=i(hs);je=p(Ke,"Compute metric"),Ke.forEach(e),zs.forEach(e),Ss=h(s),N=n(s,"P",{});var Bs=i(N);$e=p(Bs,"Once you have loaded a metric, you are ready to use it to evaluate a models predictions. Provide the model predictions and references to "),es=n(Bs,"A",{href:!0});var Qe=i(es);we=p(Qe,"compute()"),Qe.forEach(e),be=p(Bs,":"),Bs.forEach(e),Cs=h(s),d(J.$$.fragment,s),this.h()},h(){o(j,"name","hf:doc:metadata"),o(j,"content",JSON.stringify(at)),o(E,"id","evaluate-predictions"),o(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(E,"href","#evaluate-predictions"),o($,"class","relative group"),o(R,"href","https://huggingface.co/metrics"),o(R,"rel","nofollow"),o(K,"href","/docs/datasets/pr_4214/en/package_reference/loading_methods#datasets.list_metrics"),o(A,"id","load-metric"),o(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(A,"href","#load-metric"),o(w,"class","relative group"),o(Q,"href","/docs/datasets/pr_4214/en/package_reference/loading_methods#datasets.load_metric"),o(S,"id","select-a-configuration"),o(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(S,"href","#select-a-configuration"),o(b,"class","relative group"),o(C,"id","metrics-object"),o(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(C,"href","#metrics-object"),o(y,"class","relative group"),o(X,"href","/docs/datasets/pr_4214/en/package_reference/main_classes#datasets.Metric"),o(Z,"href","/docs/datasets/pr_4214/en/package_reference/main_classes#datasets.MetricInfo"),o(ss,"href","/docs/datasets/pr_4214/en/package_reference/main_classes#datasets.MetricInfo"),o(L,"id","compute-metric"),o(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(L,"href","#compute-metric"),o(k,"class","relative group"),o(es,"href","/docs/datasets/pr_4214/en/package_reference/main_classes#datasets.Metric.compute")},m(s,a){t(document.head,j),l(s,ds,a),l(s,$,a),t($,E),t(E,ts),g(F,ts,null),t($,Os),t($,as),t(as,Ts),l(s,gs,a),l(s,q,a),t(q,Ys),t(q,R),t(R,Js),t(q,Ks),l(s,_s,a),l(s,P,a),t(P,Qs),t(P,K),t(K,Vs),t(P,Ws),l(s,vs,a),g(U,s,a),l(s,xs,a),l(s,w,a),t(w,A),t(A,rs),g(D,rs,null),t(w,Xs),t(w,ns),t(ns,Zs),l(s,js,a),l(s,M,a),t(M,se),t(M,Q),t(Q,ee),t(M,te),l(s,$s,a),g(G,s,a),l(s,ws,a),l(s,V,a),t(V,ae),l(s,bs,a),l(s,b,a),t(b,S),t(S,is),g(z,is,null),t(b,re),t(b,ls),t(ls,ne),l(s,ys,a),l(s,W,a),t(W,ie),l(s,ks,a),g(B,s,a),l(s,Es,a),l(s,y,a),t(y,C),t(C,os),g(O,os,null),t(y,le),t(y,cs),t(cs,oe),l(s,qs,a),l(s,u,a),t(u,ce),t(u,X),t(X,pe),t(u,me),t(u,ps),t(ps,he),t(u,ue),t(u,Z),t(Z,fe),t(u,de),l(s,Ps,a),g(T,s,a),l(s,As,a),l(s,I,a),t(I,ge),t(I,ss),t(ss,_e),t(I,ve),l(s,Ms,a),l(s,k,a),t(k,L),t(L,ms),g(Y,ms,null),t(k,xe),t(k,hs),t(hs,je),l(s,Ss,a),l(s,N,a),t(N,$e),t(N,es),t(es,we),t(N,be),l(s,Cs,a),g(J,s,a),Is=!0},p:st,i(s){Is||(_(F.$$.fragment,s),_(U.$$.fragment,s),_(D.$$.fragment,s),_(G.$$.fragment,s),_(z.$$.fragment,s),_(B.$$.fragment,s),_(O.$$.fragment,s),_(T.$$.fragment,s),_(Y.$$.fragment,s),_(J.$$.fragment,s),Is=!0)},o(s){v(F.$$.fragment,s),v(U.$$.fragment,s),v(D.$$.fragment,s),v(G.$$.fragment,s),v(z.$$.fragment,s),v(B.$$.fragment,s),v(O.$$.fragment,s),v(T.$$.fragment,s),v(Y.$$.fragment,s),v(J.$$.fragment,s),Is=!1},d(s){e(j),s&&e(ds),s&&e($),x(F),s&&e(gs),s&&e(q),s&&e(_s),s&&e(P),s&&e(vs),x(U,s),s&&e(xs),s&&e(w),x(D),s&&e(js),s&&e(M),s&&e($s),x(G,s),s&&e(ws),s&&e(V),s&&e(bs),s&&e(b),x(z),s&&e(ys),s&&e(W),s&&e(ks),x(B,s),s&&e(Es),s&&e(y),x(O),s&&e(qs),s&&e(u),s&&e(Ps),x(T,s),s&&e(As),s&&e(I),s&&e(Ms),s&&e(k),x(Y),s&&e(Ss),s&&e(N),s&&e(Cs),x(J,s)}}}const at={local:"evaluate-predictions",sections:[{local:"load-metric",title:"Load metric"},{local:"select-a-configuration",title:"Select a configuration"},{local:"metrics-object",title:"Metrics object"},{local:"compute-metric",title:"Compute metric"}],title:"Evaluate predictions"};function rt(ye){return et(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ot extends Ve{constructor(j){super();We(this,j,rt,tt,Xe,{})}}export{ot as default,at as metadata};
