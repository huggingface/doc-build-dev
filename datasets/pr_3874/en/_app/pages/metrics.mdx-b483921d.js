import{S as Yt,i as Jt,s as Kt,e as r,k as m,w as _,t as c,M as Qt,c as n,d as t,m as u,a as i,x as v,h as p,b as o,F as e,g as l,y as x,L as Vt,q as j,o as $,B as w}from"../chunks/vendor-e67aec41.js";import{I as hs}from"../chunks/IconCopyLink-ffd7f84e.js";import{C as fs}from"../chunks/CodeBlock-e2bcf023.js";function Wt(zs){let d,J,h,f,ts,H,Bs,es,Ts,ds,q,Ys,D,Js,Ks,gs,P,Qs,K,Vs,Ws,_s,F,vs,b,A,as,G,Xs,rs,Zs,xs,M,st,Q,tt,et,js,O,$s,V,at,ws,y,S,ns,R,rt,is,nt,bs,W,it,ys,U,Es,E,C,ls,z,lt,os,ot,ks,g,ct,X,pt,mt,cs,ut,ht,qs,B,Ps,N,ft,Z,dt,gt,As,k,L,ps,T,_t,ms,vt,Ms,I,xt,us,jt,$t,Ss,Y,Cs;return H=new hs({}),F=new fs({props:{code:`from datasets import list_metrics
metrics_list = list_metrics()
len(metrics_list)
print(metrics_list)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> list_metrics
<span class="hljs-meta">&gt;&gt;&gt; </span>metrics_list = list_metrics()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">len</span>(metrics_list)
<span class="hljs-number">28</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(metrics_list)
[<span class="hljs-string">&#x27;accuracy&#x27;</span>, <span class="hljs-string">&#x27;bertscore&#x27;</span>, <span class="hljs-string">&#x27;bleu&#x27;</span>, <span class="hljs-string">&#x27;bleurt&#x27;</span>, <span class="hljs-string">&#x27;cer&#x27;</span>, <span class="hljs-string">&#x27;comet&#x27;</span>, <span class="hljs-string">&#x27;coval&#x27;</span>, <span class="hljs-string">&#x27;cuad&#x27;</span>, <span class="hljs-string">&#x27;f1&#x27;</span>, <span class="hljs-string">&#x27;gleu&#x27;</span>, <span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;indic_glue&#x27;</span>, <span class="hljs-string">&#x27;matthews_correlation&#x27;</span>, <span class="hljs-string">&#x27;meteor&#x27;</span>, <span class="hljs-string">&#x27;pearsonr&#x27;</span>, <span class="hljs-string">&#x27;precision&#x27;</span>, <span class="hljs-string">&#x27;recall&#x27;</span>, <span class="hljs-string">&#x27;rouge&#x27;</span>, <span class="hljs-string">&#x27;sacrebleu&#x27;</span>, <span class="hljs-string">&#x27;sari&#x27;</span>, <span class="hljs-string">&#x27;seqeval&#x27;</span>, <span class="hljs-string">&#x27;spearmanr&#x27;</span>, <span class="hljs-string">&#x27;squad&#x27;</span>, <span class="hljs-string">&#x27;squad_v2&#x27;</span>, <span class="hljs-string">&#x27;super_glue&#x27;</span>, <span class="hljs-string">&#x27;wer&#x27;</span>, <span class="hljs-string">&#x27;wiki_split&#x27;</span>, <span class="hljs-string">&#x27;xnli&#x27;</span>]`}}),G=new hs({}),O=new fs({props:{code:`from datasets import load_metric
metric = load_metric('glue', 'mrpc')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric
<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)`}}),R=new hs({}),U=new fs({props:{code:"metric = load_metric('glue', 'mrpc')",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>)'}}),z=new hs({}),B=new fs({props:{code:"print(metric.inputs_description)",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(metric.inputs_description)
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
    ...`}}),T=new hs({}),Y=new fs({props:{code:`model_predictions = model(model_inputs)
final_score = metric.compute(predictions=model_predictions, references=gold_references)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model_predictions = model(model_inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>final_score = metric.compute(predictions=model_predictions, references=gold_references)`}}),{c(){d=r("meta"),J=m(),h=r("h1"),f=r("a"),ts=r("span"),_(H.$$.fragment),Bs=m(),es=r("span"),Ts=c("Evaluate predictions"),ds=m(),q=r("p"),Ys=c("\u{1F917} Datasets provides various common and NLP-specific "),D=r("a"),Js=c("metrics"),Ks=c(" for you to measure your models performance. In this section of the tutorials, you will load a metric and use it to evaluate your models predictions."),gs=m(),P=r("p"),Qs=c("You can see what metrics are available with "),K=r("a"),Vs=c("datasets.list_metrics()"),Ws=c(":"),_s=m(),_(F.$$.fragment),vs=m(),b=r("h2"),A=r("a"),as=r("span"),_(G.$$.fragment),Xs=m(),rs=r("span"),Zs=c("Load metric"),xs=m(),M=r("p"),st=c("It is very easy to load a metric with \u{1F917} Datasets. In fact, you will notice that it is very similar to loading a dataset! Load a metric from the Hub with "),Q=r("a"),tt=c("datasets.load_metric()"),et=c(":"),js=m(),_(O.$$.fragment),$s=m(),V=r("p"),at=c("This will load the metric associated with the MRPC dataset from the GLUE benchmark."),ws=m(),y=r("h2"),S=r("a"),ns=r("span"),_(R.$$.fragment),rt=m(),is=r("span"),nt=c("Select a configuration"),bs=m(),W=r("p"),it=c("If you are using a benchmark dataset, you need to select a metric that is associated with the configuration you are using. Select a metric configuration by providing the configuration name:"),ys=m(),_(U.$$.fragment),Es=m(),E=r("h2"),C=r("a"),ls=r("span"),_(z.$$.fragment),lt=m(),os=r("span"),ot=c("Metrics object"),ks=m(),g=r("p"),ct=c("Before you begin using a "),X=r("a"),pt=c("datasets.Metric"),mt=c(" object, you should get to know it a little better. As with a dataset, you can return some basic information about a metric. For example, use "),cs=r("code"),ut=c("datasets.Metric.inputs_descriptions"),ht=c(" to get more information about a metrics expected input format and some usage examples:"),qs=m(),_(B.$$.fragment),Ps=m(),N=r("p"),ft=c("Notice for the MRPC configuration, the metric expects the input format to be zero or one. For a complete list of attributes you can return with your metric, take a look at "),Z=r("a"),dt=c("datasets.MetricInfo"),gt=c("."),As=m(),k=r("h2"),L=r("a"),ps=r("span"),_(T.$$.fragment),_t=m(),ms=r("span"),vt=c("Compute metric"),Ms=m(),I=r("p"),xt=c("Once you have loaded a metric, you are ready to use it to evaluate a models predictions. Provide the model predictions and references to "),us=r("code"),jt=c("datasets.Metric.compute"),$t=c(":"),Ss=m(),_(Y.$$.fragment),this.h()},l(s){const a=Qt('[data-svelte="svelte-1phssyn"]',document.head);d=n(a,"META",{name:!0,content:!0}),a.forEach(t),J=u(s),h=n(s,"H1",{class:!0});var Ns=i(h);f=n(Ns,"A",{id:!0,class:!0,href:!0});var wt=i(f);ts=n(wt,"SPAN",{});var bt=i(ts);v(H.$$.fragment,bt),bt.forEach(t),wt.forEach(t),Bs=u(Ns),es=n(Ns,"SPAN",{});var yt=i(es);Ts=p(yt,"Evaluate predictions"),yt.forEach(t),Ns.forEach(t),ds=u(s),q=n(s,"P",{});var Ls=i(q);Ys=p(Ls,"\u{1F917} Datasets provides various common and NLP-specific "),D=n(Ls,"A",{href:!0,rel:!0});var Et=i(D);Js=p(Et,"metrics"),Et.forEach(t),Ks=p(Ls," for you to measure your models performance. In this section of the tutorials, you will load a metric and use it to evaluate your models predictions."),Ls.forEach(t),gs=u(s),P=n(s,"P",{});var Is=i(P);Qs=p(Is,"You can see what metrics are available with "),K=n(Is,"A",{href:!0});var kt=i(K);Vs=p(kt,"datasets.list_metrics()"),kt.forEach(t),Ws=p(Is,":"),Is.forEach(t),_s=u(s),v(F.$$.fragment,s),vs=u(s),b=n(s,"H2",{class:!0});var Hs=i(b);A=n(Hs,"A",{id:!0,class:!0,href:!0});var qt=i(A);as=n(qt,"SPAN",{});var Pt=i(as);v(G.$$.fragment,Pt),Pt.forEach(t),qt.forEach(t),Xs=u(Hs),rs=n(Hs,"SPAN",{});var At=i(rs);Zs=p(At,"Load metric"),At.forEach(t),Hs.forEach(t),xs=u(s),M=n(s,"P",{});var Ds=i(M);st=p(Ds,"It is very easy to load a metric with \u{1F917} Datasets. In fact, you will notice that it is very similar to loading a dataset! Load a metric from the Hub with "),Q=n(Ds,"A",{href:!0});var Mt=i(Q);tt=p(Mt,"datasets.load_metric()"),Mt.forEach(t),et=p(Ds,":"),Ds.forEach(t),js=u(s),v(O.$$.fragment,s),$s=u(s),V=n(s,"P",{});var St=i(V);at=p(St,"This will load the metric associated with the MRPC dataset from the GLUE benchmark."),St.forEach(t),ws=u(s),y=n(s,"H2",{class:!0});var Fs=i(y);S=n(Fs,"A",{id:!0,class:!0,href:!0});var Ct=i(S);ns=n(Ct,"SPAN",{});var Nt=i(ns);v(R.$$.fragment,Nt),Nt.forEach(t),Ct.forEach(t),rt=u(Fs),is=n(Fs,"SPAN",{});var Lt=i(is);nt=p(Lt,"Select a configuration"),Lt.forEach(t),Fs.forEach(t),bs=u(s),W=n(s,"P",{});var It=i(W);it=p(It,"If you are using a benchmark dataset, you need to select a metric that is associated with the configuration you are using. Select a metric configuration by providing the configuration name:"),It.forEach(t),ys=u(s),v(U.$$.fragment,s),Es=u(s),E=n(s,"H2",{class:!0});var Gs=i(E);C=n(Gs,"A",{id:!0,class:!0,href:!0});var Ht=i(C);ls=n(Ht,"SPAN",{});var Dt=i(ls);v(z.$$.fragment,Dt),Dt.forEach(t),Ht.forEach(t),lt=u(Gs),os=n(Gs,"SPAN",{});var Ft=i(os);ot=p(Ft,"Metrics object"),Ft.forEach(t),Gs.forEach(t),ks=u(s),g=n(s,"P",{});var ss=i(g);ct=p(ss,"Before you begin using a "),X=n(ss,"A",{href:!0});var Gt=i(X);pt=p(Gt,"datasets.Metric"),Gt.forEach(t),mt=p(ss," object, you should get to know it a little better. As with a dataset, you can return some basic information about a metric. For example, use "),cs=n(ss,"CODE",{});var Ot=i(cs);ut=p(Ot,"datasets.Metric.inputs_descriptions"),Ot.forEach(t),ht=p(ss," to get more information about a metrics expected input format and some usage examples:"),ss.forEach(t),qs=u(s),v(B.$$.fragment,s),Ps=u(s),N=n(s,"P",{});var Os=i(N);ft=p(Os,"Notice for the MRPC configuration, the metric expects the input format to be zero or one. For a complete list of attributes you can return with your metric, take a look at "),Z=n(Os,"A",{href:!0});var Rt=i(Z);dt=p(Rt,"datasets.MetricInfo"),Rt.forEach(t),gt=p(Os,"."),Os.forEach(t),As=u(s),k=n(s,"H2",{class:!0});var Rs=i(k);L=n(Rs,"A",{id:!0,class:!0,href:!0});var Ut=i(L);ps=n(Ut,"SPAN",{});var zt=i(ps);v(T.$$.fragment,zt),zt.forEach(t),Ut.forEach(t),_t=u(Rs),ms=n(Rs,"SPAN",{});var Bt=i(ms);vt=p(Bt,"Compute metric"),Bt.forEach(t),Rs.forEach(t),Ms=u(s),I=n(s,"P",{});var Us=i(I);xt=p(Us,"Once you have loaded a metric, you are ready to use it to evaluate a models predictions. Provide the model predictions and references to "),us=n(Us,"CODE",{});var Tt=i(us);jt=p(Tt,"datasets.Metric.compute"),Tt.forEach(t),$t=p(Us,":"),Us.forEach(t),Ss=u(s),v(Y.$$.fragment,s),this.h()},h(){o(d,"name","hf:doc:metadata"),o(d,"content",JSON.stringify(Xt)),o(f,"id","evaluate-predictions"),o(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(f,"href","#evaluate-predictions"),o(h,"class","relative group"),o(D,"href","https://huggingface.co/metrics"),o(D,"rel","nofollow"),o(K,"href","/docs/datasets/pr_3874/en/package_reference/loading_methods#datasets.list_metrics"),o(A,"id","load-metric"),o(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(A,"href","#load-metric"),o(b,"class","relative group"),o(Q,"href","/docs/datasets/pr_3874/en/package_reference/loading_methods#datasets.load_metric"),o(S,"id","select-a-configuration"),o(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(S,"href","#select-a-configuration"),o(y,"class","relative group"),o(C,"id","metrics-object"),o(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(C,"href","#metrics-object"),o(E,"class","relative group"),o(X,"href","/docs/datasets/pr_3874/en/package_reference/main_classes#datasets.Metric"),o(Z,"href","/docs/datasets/pr_3874/en/package_reference/main_classes#datasets.MetricInfo"),o(L,"id","compute-metric"),o(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(L,"href","#compute-metric"),o(k,"class","relative group")},m(s,a){e(document.head,d),l(s,J,a),l(s,h,a),e(h,f),e(f,ts),x(H,ts,null),e(h,Bs),e(h,es),e(es,Ts),l(s,ds,a),l(s,q,a),e(q,Ys),e(q,D),e(D,Js),e(q,Ks),l(s,gs,a),l(s,P,a),e(P,Qs),e(P,K),e(K,Vs),e(P,Ws),l(s,_s,a),x(F,s,a),l(s,vs,a),l(s,b,a),e(b,A),e(A,as),x(G,as,null),e(b,Xs),e(b,rs),e(rs,Zs),l(s,xs,a),l(s,M,a),e(M,st),e(M,Q),e(Q,tt),e(M,et),l(s,js,a),x(O,s,a),l(s,$s,a),l(s,V,a),e(V,at),l(s,ws,a),l(s,y,a),e(y,S),e(S,ns),x(R,ns,null),e(y,rt),e(y,is),e(is,nt),l(s,bs,a),l(s,W,a),e(W,it),l(s,ys,a),x(U,s,a),l(s,Es,a),l(s,E,a),e(E,C),e(C,ls),x(z,ls,null),e(E,lt),e(E,os),e(os,ot),l(s,ks,a),l(s,g,a),e(g,ct),e(g,X),e(X,pt),e(g,mt),e(g,cs),e(cs,ut),e(g,ht),l(s,qs,a),x(B,s,a),l(s,Ps,a),l(s,N,a),e(N,ft),e(N,Z),e(Z,dt),e(N,gt),l(s,As,a),l(s,k,a),e(k,L),e(L,ps),x(T,ps,null),e(k,_t),e(k,ms),e(ms,vt),l(s,Ms,a),l(s,I,a),e(I,xt),e(I,us),e(us,jt),e(I,$t),l(s,Ss,a),x(Y,s,a),Cs=!0},p:Vt,i(s){Cs||(j(H.$$.fragment,s),j(F.$$.fragment,s),j(G.$$.fragment,s),j(O.$$.fragment,s),j(R.$$.fragment,s),j(U.$$.fragment,s),j(z.$$.fragment,s),j(B.$$.fragment,s),j(T.$$.fragment,s),j(Y.$$.fragment,s),Cs=!0)},o(s){$(H.$$.fragment,s),$(F.$$.fragment,s),$(G.$$.fragment,s),$(O.$$.fragment,s),$(R.$$.fragment,s),$(U.$$.fragment,s),$(z.$$.fragment,s),$(B.$$.fragment,s),$(T.$$.fragment,s),$(Y.$$.fragment,s),Cs=!1},d(s){t(d),s&&t(J),s&&t(h),w(H),s&&t(ds),s&&t(q),s&&t(gs),s&&t(P),s&&t(_s),w(F,s),s&&t(vs),s&&t(b),w(G),s&&t(xs),s&&t(M),s&&t(js),w(O,s),s&&t($s),s&&t(V),s&&t(ws),s&&t(y),w(R),s&&t(bs),s&&t(W),s&&t(ys),w(U,s),s&&t(Es),s&&t(E),w(z),s&&t(ks),s&&t(g),s&&t(qs),w(B,s),s&&t(Ps),s&&t(N),s&&t(As),s&&t(k),w(T),s&&t(Ms),s&&t(I),s&&t(Ss),w(Y,s)}}}const Xt={local:"evaluate-predictions",sections:[{local:"load-metric",title:"Load metric"},{local:"select-a-configuration",title:"Select a configuration"},{local:"metrics-object",title:"Metrics object"},{local:"compute-metric",title:"Compute metric"}],title:"Evaluate predictions"};function Zt(zs,d,J){let{fw:h}=d;return zs.$$set=f=>{"fw"in f&&J(0,h=f.fw)},[h]}class ae extends Yt{constructor(d){super();Jt(this,d,Zt,Wt,Kt,{fw:0})}}export{ae as default,Xt as metadata};
