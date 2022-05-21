import{S as Ea,i as ka,s as Ca,e as a,k as u,w as _,t as n,M as Ia,c as r,d as s,m as f,a as o,x as g,h as i,b as c,G as t,g as p,y as v,q as w,o as q,B as b,v as Pa}from"../chunks/vendor-1392b85b.js";import{T as ja,C as $e}from"../chunks/CodeBlock-8898b1b7.js";import{I as je}from"../chunks/IconCopyLink-667b25d9.js";function Sa(ue){let d,$,h,m,C;return{c(){d=a("p"),$=n("Get jump started with our metric loading script "),h=a("a"),m=n("template"),C=n("!"),this.h()},l(y){d=r(y,"P",{});var E=o(d);$=i(E,"Get jump started with our metric loading script "),h=r(E,"A",{href:!0,rel:!0});var L=o(h);m=i(L,"template"),L.forEach(s),C=i(E,"!"),E.forEach(s),this.h()},h(){c(h,"href","https://github.com/huggingface/datasets/blob/master/templates/new_metric_script.py"),c(h,"rel","nofollow")},m(y,E){p(y,d,E),t(d,$),t(d,h),t(h,m),t(d,C)},d(y){y&&s(d)}}}function xa(ue){let d,$;return{c(){d=a("p"),$=n("If the files are stored locally, provide a dictionary of path(s) instead of URLs.")},l(h){d=r(h,"P",{});var m=o(d);$=i(m,"If the files are stored locally, provide a dictionary of path(s) instead of URLs."),m.forEach(s)},m(h,m){p(h,d,m),t(d,$)},d(h){h&&s(d)}}}function Aa(ue){let d,$,h,m,C,y,E,L,Ls,Xe,I,O,Ee,Q,Os,ke,Ds,Ze,D,Ns,fe,Rs,Us,es,N,Ms,Y,Bs,Hs,ss,R,ts,P,U,Ce,G,Ks,Ie,zs,as,M,Vs,Pe,Qs,Ys,rs,j,Se,de,xe,Gs,Fs,Ws,Ae,he,Te,Js,Xs,Zs,Le,me,Oe,et,st,tt,De,_e,Ne,at,rt,os,ge,ot,ls,F,ns,S,B,Re,W,lt,Ue,nt,is,k,it,Me,pt,ct,J,ut,ft,ps,ve,Be,dt,cs,X,us,H,fs,Z,we,He,ht,mt,ds,ee,hs,x,K,Ke,se,_t,ze,gt,ms,A,Ve,vt,wt,te,qt,bt,_s,qe,ae,yt,Qe,$t,jt,gs,re,vs,oe,le,Et,Ye,kt,Ct,ws,ne,qs,T,z,Ge,ie,It,Fe,Pt,bs,be,St,ys,pe,$s;return y=new je({}),Q=new je({}),R=new ja({props:{$$slots:{default:[Sa]},$$scope:{ctx:ue}}}),G=new je({}),F=new $e({props:{code:`class Squad(evaluate.Metric):
    def _info(self):
        return evaluate.EvaluationModuleInfo(
            description=_DESCRIPTION,
            citation=_CITATION,
            inputs_description=_KWARGS_DESCRIPTION,
            features=datasets.Features(
                {
                    "predictions": {"id": datasets.Value("string"), "prediction_text": datasets.Value("string")},
                    "references": {
                        "id": datasets.Value("string"),
                        "answers": datasets.features.Sequence(
                            {
                                "text": datasets.Value("string"),
                                "answer_start": datasets.Value("int32"),
                            }
                        ),
                    },
                }
            ),
            codebase_urls=["https://rajpurkar.github.io/SQuAD-explorer/"],
            reference_urls=["https://rajpurkar.github.io/SQuAD-explorer/"],
        )`,highlighted:`<span class="hljs-keyword">class</span> <span class="hljs-title class_">Squad</span>(evaluate.Metric):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_info</span>(<span class="hljs-params">self</span>):
        <span class="hljs-keyword">return</span> evaluate.EvaluationModuleInfo(
            description=_DESCRIPTION,
            citation=_CITATION,
            inputs_description=_KWARGS_DESCRIPTION,
            features=datasets.Features(
                {
                    <span class="hljs-string">&quot;predictions&quot;</span>: {<span class="hljs-string">&quot;id&quot;</span>: datasets.Value(<span class="hljs-string">&quot;string&quot;</span>), <span class="hljs-string">&quot;prediction_text&quot;</span>: datasets.Value(<span class="hljs-string">&quot;string&quot;</span>)},
                    <span class="hljs-string">&quot;references&quot;</span>: {
                        <span class="hljs-string">&quot;id&quot;</span>: datasets.Value(<span class="hljs-string">&quot;string&quot;</span>),
                        <span class="hljs-string">&quot;answers&quot;</span>: datasets.features.<span class="hljs-type">Sequence</span>(
                            {
                                <span class="hljs-string">&quot;text&quot;</span>: datasets.Value(<span class="hljs-string">&quot;string&quot;</span>),
                                <span class="hljs-string">&quot;answer_start&quot;</span>: datasets.Value(<span class="hljs-string">&quot;int32&quot;</span>),
                            }
                        ),
                    },
                }
            ),
            codebase_urls=[<span class="hljs-string">&quot;https://rajpurkar.github.io/SQuAD-explorer/&quot;</span>],
            reference_urls=[<span class="hljs-string">&quot;https://rajpurkar.github.io/SQuAD-explorer/&quot;</span>],
        )`}}),W=new je({}),X=new $e({props:{code:`CHECKPOINT_URLS = {
    "bleurt-tiny-128": "https://storage.googleapis.com/bleurt-oss/bleurt-tiny-128.zip",
    "bleurt-tiny-512": "https://storage.googleapis.com/bleurt-oss/bleurt-tiny-512.zip",
    "bleurt-base-128": "https://storage.googleapis.com/bleurt-oss/bleurt-base-128.zip",
    "bleurt-base-512": "https://storage.googleapis.com/bleurt-oss/bleurt-base-512.zip",
    "bleurt-large-128": "https://storage.googleapis.com/bleurt-oss/bleurt-large-128.zip",
    "bleurt-large-512": "https://storage.googleapis.com/bleurt-oss/bleurt-large-512.zip",
}`,highlighted:`CHECKPOINT_URLS = {
    <span class="hljs-string">&quot;bleurt-tiny-128&quot;</span>: <span class="hljs-string">&quot;https://storage.googleapis.com/bleurt-oss/bleurt-tiny-128.zip&quot;</span>,
    <span class="hljs-string">&quot;bleurt-tiny-512&quot;</span>: <span class="hljs-string">&quot;https://storage.googleapis.com/bleurt-oss/bleurt-tiny-512.zip&quot;</span>,
    <span class="hljs-string">&quot;bleurt-base-128&quot;</span>: <span class="hljs-string">&quot;https://storage.googleapis.com/bleurt-oss/bleurt-base-128.zip&quot;</span>,
    <span class="hljs-string">&quot;bleurt-base-512&quot;</span>: <span class="hljs-string">&quot;https://storage.googleapis.com/bleurt-oss/bleurt-base-512.zip&quot;</span>,
    <span class="hljs-string">&quot;bleurt-large-128&quot;</span>: <span class="hljs-string">&quot;https://storage.googleapis.com/bleurt-oss/bleurt-large-128.zip&quot;</span>,
    <span class="hljs-string">&quot;bleurt-large-512&quot;</span>: <span class="hljs-string">&quot;https://storage.googleapis.com/bleurt-oss/bleurt-large-512.zip&quot;</span>,
}`}}),H=new ja({props:{$$slots:{default:[xa]},$$scope:{ctx:ue}}}),ee=new $e({props:{code:`def _download_and_prepare(self, dl_manager):

    # check that config name specifies a valid BLEURT model
    if self.config_name == "default":
        logger.warning(
            "Using default BLEURT-Base checkpoint for sequence maximum length 128. "
            "You can use a bigger model for better results with e.g.: evaluate.load('bleurt', 'bleurt-large-512')."
        )
        self.config_name = "bleurt-base-128"
    if self.config_name not in CHECKPOINT_URLS.keys():
        raise KeyError(
            f"{self.config_name} model not found. You should supply the name of a model checkpoint for bleurt in {CHECKPOINT_URLS.keys()}"
        )

    # download the model checkpoint specified by self.config_name and set up the scorer
    model_path = dl_manager.download_and_extract(CHECKPOINT_URLS[self.config_name])
    self.scorer = score.BleurtScorer(os.path.join(model_path, self.config_name))`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">_download_and_prepare</span>(<span class="hljs-params">self, dl_manager</span>):

    <span class="hljs-comment"># check that config name specifies a valid BLEURT model</span>
    <span class="hljs-keyword">if</span> self.config_name == <span class="hljs-string">&quot;default&quot;</span>:
        logger.warning(
            <span class="hljs-string">&quot;Using default BLEURT-Base checkpoint for sequence maximum length 128. &quot;</span>
            <span class="hljs-string">&quot;You can use a bigger model for better results with e.g.: evaluate.load(&#x27;bleurt&#x27;, &#x27;bleurt-large-512&#x27;).&quot;</span>
        )
        self.config_name = <span class="hljs-string">&quot;bleurt-base-128&quot;</span>
    <span class="hljs-keyword">if</span> self.config_name <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> CHECKPOINT_URLS.keys():
        <span class="hljs-keyword">raise</span> KeyError(
            <span class="hljs-string">f&quot;<span class="hljs-subst">{self.config_name}</span> model not found. You should supply the name of a model checkpoint for bleurt in <span class="hljs-subst">{CHECKPOINT_URLS.keys()}</span>&quot;</span>
        )

    <span class="hljs-comment"># download the model checkpoint specified by self.config_name and set up the scorer</span>
    model_path = dl_manager.download_and_extract(CHECKPOINT_URLS[self.config_name])
    self.scorer = score.BleurtScorer(os.path.join(model_path, self.config_name))`}}),se=new je({}),re=new $e({props:{code:`def simple_accuracy(preds, labels):
    return (preds == labels).mean().item()

def acc_and_f1(preds, labels):
    acc = simple_accuracy(preds, labels)
    f1 = f1_score(y_true=labels, y_pred=preds).item()
    return {
        "accuracy": acc,
        "f1": f1,
    }

def pearson_and_spearman(preds, labels):
    pearson_corr = pearsonr(preds, labels)[0].item()
    spearman_corr = spearmanr(preds, labels)[0].item()
    return {
        "pearson": pearson_corr,
        "spearmanr": spearman_corr,
    }`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">simple_accuracy</span>(<span class="hljs-params">preds, labels</span>):
    <span class="hljs-keyword">return</span> (preds == labels).mean().item()

<span class="hljs-keyword">def</span> <span class="hljs-title function_">acc_and_f1</span>(<span class="hljs-params">preds, labels</span>):
    acc = simple_accuracy(preds, labels)
    f1 = f1_score(y_true=labels, y_pred=preds).item()
    <span class="hljs-keyword">return</span> {
        <span class="hljs-string">&quot;accuracy&quot;</span>: acc,
        <span class="hljs-string">&quot;f1&quot;</span>: f1,
    }

<span class="hljs-keyword">def</span> <span class="hljs-title function_">pearson_and_spearman</span>(<span class="hljs-params">preds, labels</span>):
    pearson_corr = pearsonr(preds, labels)[<span class="hljs-number">0</span>].item()
    spearman_corr = spearmanr(preds, labels)[<span class="hljs-number">0</span>].item()
    <span class="hljs-keyword">return</span> {
        <span class="hljs-string">&quot;pearson&quot;</span>: pearson_corr,
        <span class="hljs-string">&quot;spearmanr&quot;</span>: spearman_corr,
    }`}}),ne=new $e({props:{code:`def _compute(self, predictions, references):
    if self.config_name == "cola":
        return {"matthews_correlation": matthews_corrcoef(references, predictions)}
    elif self.config_name == "stsb":
        return pearson_and_spearman(predictions, references)
    elif self.config_name in ["mrpc", "qqp"]:
        return acc_and_f1(predictions, references)
    elif self.config_name in ["sst2", "mnli", "mnli_mismatched", "mnli_matched", "qnli", "rte", "wnli", "hans"]:
        return {"accuracy": simple_accuracy(predictions, references)}
    else:
        raise KeyError(
            "You should supply a configuration name selected in "
            '["sst2", "mnli", "mnli_mismatched", "mnli_matched", '
            '"cola", "stsb", "mrpc", "qqp", "qnli", "rte", "wnli", "hans"]'
        )`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">_compute</span>(<span class="hljs-params">self, predictions, references</span>):
    <span class="hljs-keyword">if</span> self.config_name == <span class="hljs-string">&quot;cola&quot;</span>:
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;matthews_correlation&quot;</span>: matthews_corrcoef(references, predictions)}
    <span class="hljs-keyword">elif</span> self.config_name == <span class="hljs-string">&quot;stsb&quot;</span>:
        <span class="hljs-keyword">return</span> pearson_and_spearman(predictions, references)
    <span class="hljs-keyword">elif</span> self.config_name <span class="hljs-keyword">in</span> [<span class="hljs-string">&quot;mrpc&quot;</span>, <span class="hljs-string">&quot;qqp&quot;</span>]:
        <span class="hljs-keyword">return</span> acc_and_f1(predictions, references)
    <span class="hljs-keyword">elif</span> self.config_name <span class="hljs-keyword">in</span> [<span class="hljs-string">&quot;sst2&quot;</span>, <span class="hljs-string">&quot;mnli&quot;</span>, <span class="hljs-string">&quot;mnli_mismatched&quot;</span>, <span class="hljs-string">&quot;mnli_matched&quot;</span>, <span class="hljs-string">&quot;qnli&quot;</span>, <span class="hljs-string">&quot;rte&quot;</span>, <span class="hljs-string">&quot;wnli&quot;</span>, <span class="hljs-string">&quot;hans&quot;</span>]:
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;accuracy&quot;</span>: simple_accuracy(predictions, references)}
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">raise</span> KeyError(
            <span class="hljs-string">&quot;You should supply a configuration name selected in &quot;</span>
            <span class="hljs-string">&#x27;[&quot;sst2&quot;, &quot;mnli&quot;, &quot;mnli_mismatched&quot;, &quot;mnli_matched&quot;, &#x27;</span>
            <span class="hljs-string">&#x27;&quot;cola&quot;, &quot;stsb&quot;, &quot;mrpc&quot;, &quot;qqp&quot;, &quot;qnli&quot;, &quot;rte&quot;, &quot;wnli&quot;, &quot;hans&quot;]&#x27;</span>
        )`}}),ie=new je({}),pe=new $e({props:{code:`from evaluate import load
metric = load('PATH/TO/MY/SCRIPT.py')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> evaluate <span class="hljs-keyword">import</span> load
<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load(<span class="hljs-string">&#x27;PATH/TO/MY/SCRIPT.py&#x27;</span>)`}}),{c(){d=a("meta"),$=u(),h=a("h1"),m=a("a"),C=a("span"),_(y.$$.fragment),E=u(),L=a("span"),Ls=n("Creating and sharing a new evaluation"),Xe=u(),I=a("h2"),O=a("a"),Ee=a("span"),_(Q.$$.fragment),Os=u(),ke=a("span"),Ds=n("Custom metric loading script"),Ze=u(),D=a("p"),Ns=n("Write a metric loading script to use your own custom metric (or one that is not on the Hub). Then you can load it as usual with "),fe=a("a"),Rs=n("load()"),Us=n("."),es=u(),N=a("p"),Ms=n("To help you get started, open the "),Y=a("a"),Bs=n("SQuAD metric loading script"),Hs=n(" and follow along."),ss=u(),_(R.$$.fragment),ts=u(),P=a("h3"),U=a("a"),Ce=a("span"),_(G.$$.fragment),Ks=u(),Ie=a("span"),zs=n("Add metric attributes"),as=u(),M=a("p"),Vs=n("Start by adding some information about your metric in "),Pe=a("code"),Qs=n("Metric._info"),Ys=n(". The most important attributes you should specify are:"),rs=u(),j=a("ol"),Se=a("li"),de=a("p"),xe=a("code"),Gs=n("EvaluationModuleInfo.description"),Fs=n(" provides a brief description about your metric."),Ws=u(),Ae=a("li"),he=a("p"),Te=a("code"),Js=n("EvaluationModuleInfo.citation"),Xs=n(" contains a BibTex citation for the metric."),Zs=u(),Le=a("li"),me=a("p"),Oe=a("code"),et=n("EvaluationModuleInfo.inputs_description"),st=n(" describes the expected inputs and outputs. It may also provide an example usage of the metric."),tt=u(),De=a("li"),_e=a("p"),Ne=a("code"),at=n("EvaluationModuleInfo.features"),rt=n(" defines the name and type of the predictions and references."),os=u(),ge=a("p"),ot=n("After you\u2019ve filled out all these fields in the template, it should look like the following example from the SQuAD metric script:"),ls=u(),_(F.$$.fragment),ns=u(),S=a("h3"),B=a("a"),Re=a("span"),_(W.$$.fragment),lt=u(),Ue=a("span"),nt=n("Download metric files"),is=u(),k=a("p"),it=n("If your metric needs to download, or retrieve local files, you will need to use the "),Me=a("code"),pt=n("Metric._download_and_prepare"),ct=n(" method. For this example, let\u2019s examine the "),J=a("a"),ut=n("BLEURT metric loading script"),ft=n("."),ps=u(),ve=a("ol"),Be=a("li"),dt=n("Provide a dictionary of URLs that point to the metric files:"),cs=u(),_(X.$$.fragment),us=u(),_(H.$$.fragment),fs=u(),Z=a("ol"),we=a("li"),He=a("code"),ht=n("Metric._download_and_prepare"),mt=n(" will take the URLs and download the metric files specified:"),ds=u(),_(ee.$$.fragment),hs=u(),x=a("h3"),K=a("a"),Ke=a("span"),_(se.$$.fragment),_t=u(),ze=a("span"),gt=n("Compute score"),ms=u(),A=a("p"),Ve=a("code"),vt=n("DatasetBuilder._compute"),wt=n(" provides the actual instructions for how to compute a metric given the predictions and references. Now let\u2019s take a look at the "),te=a("a"),qt=n("GLUE metric loading script"),bt=n("."),_s=u(),qe=a("ol"),ae=a("li"),yt=n("Provide the functions for "),Qe=a("code"),$t=n("DatasetBuilder._compute"),jt=n(" to calculate your metric:"),gs=u(),_(re.$$.fragment),vs=u(),oe=a("ol"),le=a("li"),Et=n("Create "),Ye=a("code"),kt=n("DatasetBuilder._compute"),Ct=n(" with instructions for what metric to calculate for each configuration:"),ws=u(),_(ne.$$.fragment),qs=u(),T=a("h3"),z=a("a"),Ge=a("span"),_(ie.$$.fragment),It=u(),Fe=a("span"),Pt=n("Test"),bs=u(),be=a("p"),St=n("Once you\u2019re finished writing your metric loading script, try to load it locally:"),ys=u(),_(pe.$$.fragment),this.h()},l(e){const l=Ia('[data-svelte="svelte-1phssyn"]',document.head);d=r(l,"META",{name:!0,content:!0}),l.forEach(s),$=f(e),h=r(e,"H1",{class:!0});var ce=o(h);m=r(ce,"A",{id:!0,class:!0,href:!0});var We=o(m);C=r(We,"SPAN",{});var Dt=o(C);g(y.$$.fragment,Dt),Dt.forEach(s),We.forEach(s),E=f(ce),L=r(ce,"SPAN",{});var Nt=o(L);Ls=i(Nt,"Creating and sharing a new evaluation"),Nt.forEach(s),ce.forEach(s),Xe=f(e),I=r(e,"H2",{class:!0});var js=o(I);O=r(js,"A",{id:!0,class:!0,href:!0});var Rt=o(O);Ee=r(Rt,"SPAN",{});var Ut=o(Ee);g(Q.$$.fragment,Ut),Ut.forEach(s),Rt.forEach(s),Os=f(js),ke=r(js,"SPAN",{});var Mt=o(ke);Ds=i(Mt,"Custom metric loading script"),Mt.forEach(s),js.forEach(s),Ze=f(e),D=r(e,"P",{});var Es=o(D);Ns=i(Es,"Write a metric loading script to use your own custom metric (or one that is not on the Hub). Then you can load it as usual with "),fe=r(Es,"A",{href:!0});var Bt=o(fe);Rs=i(Bt,"load()"),Bt.forEach(s),Us=i(Es,"."),Es.forEach(s),es=f(e),N=r(e,"P",{});var ks=o(N);Ms=i(ks,"To help you get started, open the "),Y=r(ks,"A",{href:!0,rel:!0});var Ht=o(Y);Bs=i(Ht,"SQuAD metric loading script"),Ht.forEach(s),Hs=i(ks," and follow along."),ks.forEach(s),ss=f(e),g(R.$$.fragment,e),ts=f(e),P=r(e,"H3",{class:!0});var Cs=o(P);U=r(Cs,"A",{id:!0,class:!0,href:!0});var Kt=o(U);Ce=r(Kt,"SPAN",{});var zt=o(Ce);g(G.$$.fragment,zt),zt.forEach(s),Kt.forEach(s),Ks=f(Cs),Ie=r(Cs,"SPAN",{});var Vt=o(Ie);zs=i(Vt,"Add metric attributes"),Vt.forEach(s),Cs.forEach(s),as=f(e),M=r(e,"P",{});var Is=o(M);Vs=i(Is,"Start by adding some information about your metric in "),Pe=r(Is,"CODE",{});var Qt=o(Pe);Qs=i(Qt,"Metric._info"),Qt.forEach(s),Ys=i(Is,". The most important attributes you should specify are:"),Is.forEach(s),rs=f(e),j=r(e,"OL",{});var V=o(j);Se=r(V,"LI",{});var Yt=o(Se);de=r(Yt,"P",{});var xt=o(de);xe=r(xt,"CODE",{});var Gt=o(xe);Gs=i(Gt,"EvaluationModuleInfo.description"),Gt.forEach(s),Fs=i(xt," provides a brief description about your metric."),xt.forEach(s),Yt.forEach(s),Ws=f(V),Ae=r(V,"LI",{});var Ft=o(Ae);he=r(Ft,"P",{});var At=o(he);Te=r(At,"CODE",{});var Wt=o(Te);Js=i(Wt,"EvaluationModuleInfo.citation"),Wt.forEach(s),Xs=i(At," contains a BibTex citation for the metric."),At.forEach(s),Ft.forEach(s),Zs=f(V),Le=r(V,"LI",{});var Jt=o(Le);me=r(Jt,"P",{});var Tt=o(me);Oe=r(Tt,"CODE",{});var Xt=o(Oe);et=i(Xt,"EvaluationModuleInfo.inputs_description"),Xt.forEach(s),st=i(Tt," describes the expected inputs and outputs. It may also provide an example usage of the metric."),Tt.forEach(s),Jt.forEach(s),tt=f(V),De=r(V,"LI",{});var Zt=o(De);_e=r(Zt,"P",{});var Lt=o(_e);Ne=r(Lt,"CODE",{});var ea=o(Ne);at=i(ea,"EvaluationModuleInfo.features"),ea.forEach(s),rt=i(Lt," defines the name and type of the predictions and references."),Lt.forEach(s),Zt.forEach(s),V.forEach(s),os=f(e),ge=r(e,"P",{});var sa=o(ge);ot=i(sa,"After you\u2019ve filled out all these fields in the template, it should look like the following example from the SQuAD metric script:"),sa.forEach(s),ls=f(e),g(F.$$.fragment,e),ns=f(e),S=r(e,"H3",{class:!0});var Ps=o(S);B=r(Ps,"A",{id:!0,class:!0,href:!0});var ta=o(B);Re=r(ta,"SPAN",{});var aa=o(Re);g(W.$$.fragment,aa),aa.forEach(s),ta.forEach(s),lt=f(Ps),Ue=r(Ps,"SPAN",{});var ra=o(Ue);nt=i(ra,"Download metric files"),ra.forEach(s),Ps.forEach(s),is=f(e),k=r(e,"P",{});var ye=o(k);it=i(ye,"If your metric needs to download, or retrieve local files, you will need to use the "),Me=r(ye,"CODE",{});var oa=o(Me);pt=i(oa,"Metric._download_and_prepare"),oa.forEach(s),ct=i(ye," method. For this example, let\u2019s examine the "),J=r(ye,"A",{href:!0,rel:!0});var la=o(J);ut=i(la,"BLEURT metric loading script"),la.forEach(s),ft=i(ye,"."),ye.forEach(s),ps=f(e),ve=r(e,"OL",{});var na=o(ve);Be=r(na,"LI",{});var ia=o(Be);dt=i(ia,"Provide a dictionary of URLs that point to the metric files:"),ia.forEach(s),na.forEach(s),cs=f(e),g(X.$$.fragment,e),us=f(e),g(H.$$.fragment,e),fs=f(e),Z=r(e,"OL",{start:!0});var pa=o(Z);we=r(pa,"LI",{});var Ot=o(we);He=r(Ot,"CODE",{});var ca=o(He);ht=i(ca,"Metric._download_and_prepare"),ca.forEach(s),mt=i(Ot," will take the URLs and download the metric files specified:"),Ot.forEach(s),pa.forEach(s),ds=f(e),g(ee.$$.fragment,e),hs=f(e),x=r(e,"H3",{class:!0});var Ss=o(x);K=r(Ss,"A",{id:!0,class:!0,href:!0});var ua=o(K);Ke=r(ua,"SPAN",{});var fa=o(Ke);g(se.$$.fragment,fa),fa.forEach(s),ua.forEach(s),_t=f(Ss),ze=r(Ss,"SPAN",{});var da=o(ze);gt=i(da,"Compute score"),da.forEach(s),Ss.forEach(s),ms=f(e),A=r(e,"P",{});var Je=o(A);Ve=r(Je,"CODE",{});var ha=o(Ve);vt=i(ha,"DatasetBuilder._compute"),ha.forEach(s),wt=i(Je," provides the actual instructions for how to compute a metric given the predictions and references. Now let\u2019s take a look at the "),te=r(Je,"A",{href:!0,rel:!0});var ma=o(te);qt=i(ma,"GLUE metric loading script"),ma.forEach(s),bt=i(Je,"."),Je.forEach(s),_s=f(e),qe=r(e,"OL",{});var _a=o(qe);ae=r(_a,"LI",{});var xs=o(ae);yt=i(xs,"Provide the functions for "),Qe=r(xs,"CODE",{});var ga=o(Qe);$t=i(ga,"DatasetBuilder._compute"),ga.forEach(s),jt=i(xs," to calculate your metric:"),xs.forEach(s),_a.forEach(s),gs=f(e),g(re.$$.fragment,e),vs=f(e),oe=r(e,"OL",{start:!0});var va=o(oe);le=r(va,"LI",{});var As=o(le);Et=i(As,"Create "),Ye=r(As,"CODE",{});var wa=o(Ye);kt=i(wa,"DatasetBuilder._compute"),wa.forEach(s),Ct=i(As," with instructions for what metric to calculate for each configuration:"),As.forEach(s),va.forEach(s),ws=f(e),g(ne.$$.fragment,e),qs=f(e),T=r(e,"H3",{class:!0});var Ts=o(T);z=r(Ts,"A",{id:!0,class:!0,href:!0});var qa=o(z);Ge=r(qa,"SPAN",{});var ba=o(Ge);g(ie.$$.fragment,ba),ba.forEach(s),qa.forEach(s),It=f(Ts),Fe=r(Ts,"SPAN",{});var ya=o(Fe);Pt=i(ya,"Test"),ya.forEach(s),Ts.forEach(s),bs=f(e),be=r(e,"P",{});var $a=o(be);St=i($a,"Once you\u2019re finished writing your metric loading script, try to load it locally:"),$a.forEach(s),ys=f(e),g(pe.$$.fragment,e),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(Ta)),c(m,"id","creating-and-sharing-a-new-evaluation"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#creating-and-sharing-a-new-evaluation"),c(h,"class","relative group"),c(O,"id","custom-metric-loading-script"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#custom-metric-loading-script"),c(I,"class","relative group"),c(fe,"href","/docs/evaluate/pr_58/en/package_reference/loading_methods#evaluate.load"),c(Y,"href","https://github.com/huggingface/datasets/blob/master/metrics/squad/squad.py"),c(Y,"rel","nofollow"),c(U,"id","add-metric-attributes"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#add-metric-attributes"),c(P,"class","relative group"),c(B,"id","download-metric-files"),c(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(B,"href","#download-metric-files"),c(S,"class","relative group"),c(J,"href","https://github.com/huggingface/datasets/blob/master/metrics/bleurt/bleurt.py"),c(J,"rel","nofollow"),c(Z,"start","2"),c(K,"id","compute-score"),c(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(K,"href","#compute-score"),c(x,"class","relative group"),c(te,"href","https://github.com/huggingface/datasets/blob/master/metrics/glue/glue.py"),c(te,"rel","nofollow"),c(oe,"start","2"),c(z,"id","test"),c(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(z,"href","#test"),c(T,"class","relative group")},m(e,l){t(document.head,d),p(e,$,l),p(e,h,l),t(h,m),t(m,C),v(y,C,null),t(h,E),t(h,L),t(L,Ls),p(e,Xe,l),p(e,I,l),t(I,O),t(O,Ee),v(Q,Ee,null),t(I,Os),t(I,ke),t(ke,Ds),p(e,Ze,l),p(e,D,l),t(D,Ns),t(D,fe),t(fe,Rs),t(D,Us),p(e,es,l),p(e,N,l),t(N,Ms),t(N,Y),t(Y,Bs),t(N,Hs),p(e,ss,l),v(R,e,l),p(e,ts,l),p(e,P,l),t(P,U),t(U,Ce),v(G,Ce,null),t(P,Ks),t(P,Ie),t(Ie,zs),p(e,as,l),p(e,M,l),t(M,Vs),t(M,Pe),t(Pe,Qs),t(M,Ys),p(e,rs,l),p(e,j,l),t(j,Se),t(Se,de),t(de,xe),t(xe,Gs),t(de,Fs),t(j,Ws),t(j,Ae),t(Ae,he),t(he,Te),t(Te,Js),t(he,Xs),t(j,Zs),t(j,Le),t(Le,me),t(me,Oe),t(Oe,et),t(me,st),t(j,tt),t(j,De),t(De,_e),t(_e,Ne),t(Ne,at),t(_e,rt),p(e,os,l),p(e,ge,l),t(ge,ot),p(e,ls,l),v(F,e,l),p(e,ns,l),p(e,S,l),t(S,B),t(B,Re),v(W,Re,null),t(S,lt),t(S,Ue),t(Ue,nt),p(e,is,l),p(e,k,l),t(k,it),t(k,Me),t(Me,pt),t(k,ct),t(k,J),t(J,ut),t(k,ft),p(e,ps,l),p(e,ve,l),t(ve,Be),t(Be,dt),p(e,cs,l),v(X,e,l),p(e,us,l),v(H,e,l),p(e,fs,l),p(e,Z,l),t(Z,we),t(we,He),t(He,ht),t(we,mt),p(e,ds,l),v(ee,e,l),p(e,hs,l),p(e,x,l),t(x,K),t(K,Ke),v(se,Ke,null),t(x,_t),t(x,ze),t(ze,gt),p(e,ms,l),p(e,A,l),t(A,Ve),t(Ve,vt),t(A,wt),t(A,te),t(te,qt),t(A,bt),p(e,_s,l),p(e,qe,l),t(qe,ae),t(ae,yt),t(ae,Qe),t(Qe,$t),t(ae,jt),p(e,gs,l),v(re,e,l),p(e,vs,l),p(e,oe,l),t(oe,le),t(le,Et),t(le,Ye),t(Ye,kt),t(le,Ct),p(e,ws,l),v(ne,e,l),p(e,qs,l),p(e,T,l),t(T,z),t(z,Ge),v(ie,Ge,null),t(T,It),t(T,Fe),t(Fe,Pt),p(e,bs,l),p(e,be,l),t(be,St),p(e,ys,l),v(pe,e,l),$s=!0},p(e,[l]){const ce={};l&2&&(ce.$$scope={dirty:l,ctx:e}),R.$set(ce);const We={};l&2&&(We.$$scope={dirty:l,ctx:e}),H.$set(We)},i(e){$s||(w(y.$$.fragment,e),w(Q.$$.fragment,e),w(R.$$.fragment,e),w(G.$$.fragment,e),w(F.$$.fragment,e),w(W.$$.fragment,e),w(X.$$.fragment,e),w(H.$$.fragment,e),w(ee.$$.fragment,e),w(se.$$.fragment,e),w(re.$$.fragment,e),w(ne.$$.fragment,e),w(ie.$$.fragment,e),w(pe.$$.fragment,e),$s=!0)},o(e){q(y.$$.fragment,e),q(Q.$$.fragment,e),q(R.$$.fragment,e),q(G.$$.fragment,e),q(F.$$.fragment,e),q(W.$$.fragment,e),q(X.$$.fragment,e),q(H.$$.fragment,e),q(ee.$$.fragment,e),q(se.$$.fragment,e),q(re.$$.fragment,e),q(ne.$$.fragment,e),q(ie.$$.fragment,e),q(pe.$$.fragment,e),$s=!1},d(e){s(d),e&&s($),e&&s(h),b(y),e&&s(Xe),e&&s(I),b(Q),e&&s(Ze),e&&s(D),e&&s(es),e&&s(N),e&&s(ss),b(R,e),e&&s(ts),e&&s(P),b(G),e&&s(as),e&&s(M),e&&s(rs),e&&s(j),e&&s(os),e&&s(ge),e&&s(ls),b(F,e),e&&s(ns),e&&s(S),b(W),e&&s(is),e&&s(k),e&&s(ps),e&&s(ve),e&&s(cs),b(X,e),e&&s(us),b(H,e),e&&s(fs),e&&s(Z),e&&s(ds),b(ee,e),e&&s(hs),e&&s(x),b(se),e&&s(ms),e&&s(A),e&&s(_s),e&&s(qe),e&&s(gs),b(re,e),e&&s(vs),e&&s(oe),e&&s(ws),b(ne,e),e&&s(qs),e&&s(T),b(ie),e&&s(bs),e&&s(be),e&&s(ys),b(pe,e)}}}const Ta={local:"creating-and-sharing-a-new-evaluation",sections:[{local:"custom-metric-loading-script",sections:[{local:"add-metric-attributes",title:"Add metric attributes"},{local:"download-metric-files",title:"Download metric files"},{local:"compute-score",title:"Compute score"},{local:"test",title:"Test"}],title:"Custom metric loading script"}],title:"Creating and sharing a new evaluation"};function La(ue){return Pa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ra extends Ea{constructor(d){super();ka(this,d,La,Aa,Ca,{})}}export{Ra as default,Ta as metadata};
