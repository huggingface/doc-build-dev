import{S as hr,i as fr,s as _r,e as r,k as p,w as k,t as l,M as gr,c as s,d as a,m as d,a as o,x as b,h as n,b as m,F as t,g as c,y as E,L as yr,q as $,o as j,B as A,v as vr}from"../chunks/vendor-19e06bd2.js";import{I as _t}from"../chunks/IconCopyLink-3c713d38.js";import{C as ne}from"../chunks/CodeBlock-9dd1fdfb.js";function wr(Ta){let T,Me,q,I,ie,W,gt,ce,yt,Re,G,vt,X,wt,He,C,P,pe,M,kt,de,bt,Fe,D,Et,me,$t,jt,Ue,f,ue,he,At,Tt,fe,_e,qt,Ct,ge,ye,Ot,Je,_,xt,ve,It,Pt,we,Dt,zt,Ke,R,Qe,z,St,ke,Nt,Lt,Ve,H,Xe,g,Bt,Y,Wt,Gt,be,Mt,Rt,Ye,F,Ze,Z,Ht,et,U,tt,O,S,Ee,J,Ft,$e,Ut,at,y,Jt,je,Kt,Qt,Ae,Vt,Xt,rt,v,N,Te,Yt,Zt,qe,ea,ta,aa,L,Ce,ra,sa,Oe,oa,la,na,u,xe,ia,ca,Ie,pa,da,Pe,ma,ua,De,ha,fa,ze,_a,ga,st,ee,ya,ot,K,lt,x,B,Se,Q,va,Ne,wa,nt,w,ka,Le,ba,Ea,Be,$a,ja,it,V,ct;return W=new _t({}),M=new _t({}),R=new ne({props:{code:`from accelerate import Accelerate
from accelerate.utils import LoggerType

accelerator = Accelerate(log_with="all")  # For all available trackers in the environment
accelerator = Accelerate(log_with="wandb")
accelerator = Accelerate(log_with=["wandb", LoggerType.TENSORBOARD])`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerate
<span class="hljs-keyword">from</span> accelerate.utils <span class="hljs-keyword">import</span> LoggerType

accelerator = Accelerate(log_with=<span class="hljs-string">&quot;all&quot;</span>)  <span class="hljs-comment"># For all available trackers in the environment</span>
accelerator = Accelerate(log_with=<span class="hljs-string">&quot;wandb&quot;</span>)
accelerator = Accelerate(log_with=[<span class="hljs-string">&quot;wandb&quot;</span>, LoggerType.TENSORBOARD])`}}),H=new ne({props:{code:`hps = {"num_iterations": 5, "learning_rate": 1e-2}
accelerator.init_trackers("my_project", config=hps)`,highlighted:`hps = {<span class="hljs-string">&quot;num_iterations&quot;</span>: <span class="hljs-number">5</span>, <span class="hljs-string">&quot;learning_rate&quot;</span>: <span class="hljs-number">1e-2</span>}
accelerator.init_trackers(<span class="hljs-string">&quot;my_project&quot;</span>, config=hps)`}}),F=new ne({props:{code:'accelerator.log({"train_loss": 1.12, "valid_loss": 0.8}, step=1)',highlighted:'accelerator.log({<span class="hljs-string">&quot;train_loss&quot;</span>: <span class="hljs-number">1.12</span>, <span class="hljs-string">&quot;valid_loss&quot;</span>: <span class="hljs-number">0.8</span>}, step=<span class="hljs-number">1</span>)'}}),U=new ne({props:{code:`from accelerate import Accelerator

accelerator = Accelerator(log_with="all")
config = {
    "num_iterations": 5,
    "learning_rate": 1e-2,
    "loss_function": str(my_loss_function),
}

accelerator.init_trackers("example_project", config=config)

my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)
device = accelerator.device
my_model.to(device)

for iteration in config["num_iterations"]:
    for step, batch in my_training_dataloader:
        my_optimizer.zero_grad()
        inputs, targets = batch
        inputs = inputs.to(device)
        targets = targets.to(device)
        outputs = my_model(inputs)
        loss = my_loss_function(outputs, targets)
        accelerator.backward(loss)
        my_optimizer.step()
        accelerator.log({"training_loss": loss}, step=step)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator(log_with=<span class="hljs-string">&quot;all&quot;</span>)
config = {
    <span class="hljs-string">&quot;num_iterations&quot;</span>: <span class="hljs-number">5</span>,
    <span class="hljs-string">&quot;learning_rate&quot;</span>: <span class="hljs-number">1e-2</span>,
    <span class="hljs-string">&quot;loss_function&quot;</span>: <span class="hljs-built_in">str</span>(my_loss_function),
}

accelerator.init_trackers(<span class="hljs-string">&quot;example_project&quot;</span>, config=config)

my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)
device = accelerator.device
my_model.to(device)

<span class="hljs-keyword">for</span> iteration <span class="hljs-keyword">in</span> config[<span class="hljs-string">&quot;num_iterations&quot;</span>]:
    <span class="hljs-keyword">for</span> step, batch <span class="hljs-keyword">in</span> my_training_dataloader:
        my_optimizer.zero_grad()
        inputs, targets = batch
        inputs = inputs.to(device)
        targets = targets.to(device)
        outputs = my_model(inputs)
        loss = my_loss_function(outputs, targets)
        accelerator.backward(loss)
        my_optimizer.step()
        accelerator.log({<span class="hljs-string">&quot;training_loss&quot;</span>: loss}, step=step)`}}),J=new _t({}),K=new ne({props:{code:`from accelerate.tracking import GeneralTracker
from typing import Optional

import wandb


class WandBTracker(GeneralTracker):
    log_directory = None

    def __init__(self, run_name: str):
        self.run_name = run_name
        wandb.init(self.run_name)

    def store_init_configuration(self, values: dict):
        wandb.config(values)

    def log(self, values: dict, step: Optional[int] = None):
        wandb.log(values, step=step)`,highlighted:`<span class="hljs-keyword">from</span> accelerate.tracking <span class="hljs-keyword">import</span> GeneralTracker
<span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">Optional</span>

<span class="hljs-keyword">import</span> wandb


<span class="hljs-keyword">class</span> <span class="hljs-title class_">WandBTracker</span>(<span class="hljs-title class_ inherited__">GeneralTracker</span>):
    log_directory = <span class="hljs-literal">None</span>

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, run_name: <span class="hljs-built_in">str</span></span>):
        self.run_name = run_name
        wandb.init(self.run_name)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">store_init_configuration</span>(<span class="hljs-params">self, values: <span class="hljs-built_in">dict</span></span>):
        wandb.config(values)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">log</span>(<span class="hljs-params">self, values: <span class="hljs-built_in">dict</span>, step: <span class="hljs-type">Optional</span>[<span class="hljs-built_in">int</span>] = <span class="hljs-literal">None</span></span>):
        wandb.log(values, step=step)`}}),Q=new _t({}),V=new ne({props:{code:`from accelerate import Accelerator
+ import neptune.new as neptune

accelerator = Accelerator()
+ run = neptune.init(...)

my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)
device = accelerator.device
my_model.to(device)

for iteration in config["num_iterations"]:
    for batch in my_training_dataloader:
        my_optimizer.zero_grad()
        inputs, targets = batch
        inputs = inputs.to(device)
        targets = targets.to(device)
        outputs = my_model(inputs)
        loss = my_loss_function(outputs, targets)
        total_loss += loss
        accelerator.backward(loss)
        my_optimizer.step()
+       if accelerator.is_main_process:
+         run["logs/training/batch/loss"].log(loss)`,highlighted:`from accelerate import Accelerator
<span class="hljs-addition">+ import neptune.new as neptune</span>

accelerator = Accelerator()
<span class="hljs-addition">+ run = neptune.init(...)</span>

my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)
device = accelerator.device
my_model.to(device)

for iteration in config[&quot;num_iterations&quot;]:
    for batch in my_training_dataloader:
        my_optimizer.zero_grad()
        inputs, targets = batch
        inputs = inputs.to(device)
        targets = targets.to(device)
        outputs = my_model(inputs)
        loss = my_loss_function(outputs, targets)
        total_loss += loss
        accelerator.backward(loss)
        my_optimizer.step()
<span class="hljs-addition">+       if accelerator.is_main_process:</span>
<span class="hljs-addition">+         run[&quot;logs/training/batch/loss&quot;].log(loss)</span>`}}),{c(){T=r("meta"),Me=p(),q=r("h1"),I=r("a"),ie=r("span"),k(W.$$.fragment),gt=p(),ce=r("span"),yt=l("Tracking"),Re=p(),G=r("p"),vt=l(`There are a large number of experiment tracking API\u2019s available, however getting them all to work with in a multi-processing environment can oftentimes be complex.
Accelerate provides a general tracking API that can be used to log useful items during your script through `),X=r("a"),wt=l("log()"),He=p(),C=r("h2"),P=r("a"),pe=r("span"),k(M.$$.fragment),kt=p(),de=r("span"),bt=l("Integrated Trackers"),Fe=p(),D=r("p"),Et=l("Currently "),me=r("code"),$t=l("Accelerate"),jt=l(" supports three trackers out-of-the-box:"),Ue=p(),f=r("ul"),ue=r("li"),he=r("code"),At=l("~TensorBoardTracker"),Tt=p(),fe=r("li"),_e=r("code"),qt=l("~WandBTracker"),Ct=p(),ge=r("li"),ye=r("code"),Ot=l("~CometMLTracker"),Je=p(),_=r("p"),xt=l("To use any of them, pass in the selected type(s) to the "),ve=r("code"),It=l("log_with"),Pt=l(" parameter in "),we=r("code"),Dt=l("__init__"),zt=l(":"),Ke=p(),k(R.$$.fragment),Qe=p(),z=r("p"),St=l("At the start of your experiment "),ke=r("code"),Nt=l("init_tracker"),Lt=l(" should be used to setup your project, and potentially add any experiment hyperparameters to be logged:"),Ve=p(),k(H.$$.fragment),Xe=p(),g=r("p"),Bt=l("When you are ready to log any data, "),Y=r("a"),Wt=l("log()"),Gt=l(` should be used.
A `),be=r("code"),Mt=l("step"),Rt=l(" can also be passed in to correlate the data with a particular step in the training loop."),Ye=p(),k(F.$$.fragment),Ze=p(),Z=r("p"),Ht=l("A full example is below:"),et=p(),k(U.$$.fragment),tt=p(),O=r("h2"),S=r("a"),Ee=r("span"),k(J.$$.fragment),Ft=p(),$e=r("span"),Ut=l("Implementing Custom Trackers"),at=p(),y=r("p"),Jt=l("To implement a new tracker to be used in "),je=r("code"),Kt=l("Accelerator"),Qt=l(", a new one can be made through implementing the "),Ae=r("code"),Vt=l("~GeneralTracker"),Xt=l(` class.
Every tracker must implement three functions:`),rt=p(),v=r("ul"),N=r("li"),Te=r("code"),Yt=l("__init__"),Zt=l(": Should store a "),qe=r("code"),ea=l("run_name"),ta=l(" and initialize the tracker API of the integrated library"),aa=p(),L=r("li"),Ce=r("code"),ra=l("store_init_configuration"),sa=l(": Should take in a "),Oe=r("code"),oa=l("values"),la=l(" dictionary and store them as a one-time experiment configuration"),na=p(),u=r("li"),xe=r("code"),ia=l("log"),ca=l(": Should take in a "),Ie=r("code"),pa=l("values"),da=l(" dictionary and a "),Pe=r("code"),ma=l("step"),ua=l(`, and should log them to the run
As well as contain a `),De=r("code"),ha=l("log_directory"),fa=l(" attribute. If the integrated library does not store anything locally, should be set to "),ze=r("code"),_a=l("None"),ga=l("."),st=p(),ee=r("p"),ya=l("A brief example can be seen below with an integration with Weights and Biases, containing only the relevent information:"),ot=p(),k(K.$$.fragment),lt=p(),x=r("h2"),B=r("a"),Se=r("span"),k(Q.$$.fragment),va=p(),Ne=r("span"),wa=l("When a wrapper won't do"),nt=p(),w=r("p"),ka=l("If a library has an API that does not follow a strict "),Le=r("code"),ba=l(".log"),Ea=l(" with an overall dictionary such as Neptune.AI, logging can be done manually under an "),Be=r("code"),$a=l("if accelerator.is_main_process"),ja=l(" statement:"),it=p(),k(V.$$.fragment),this.h()},l(e){const i=gr('[data-svelte="svelte-1phssyn"]',document.head);T=s(i,"META",{name:!0,content:!0}),i.forEach(a),Me=d(e),q=s(e,"H1",{class:!0});var pt=o(q);I=s(pt,"A",{id:!0,class:!0,href:!0});var qa=o(I);ie=s(qa,"SPAN",{});var Ca=o(ie);b(W.$$.fragment,Ca),Ca.forEach(a),qa.forEach(a),gt=d(pt),ce=s(pt,"SPAN",{});var Oa=o(ce);yt=n(Oa,"Tracking"),Oa.forEach(a),pt.forEach(a),Re=d(e),G=s(e,"P",{});var Aa=o(G);vt=n(Aa,`There are a large number of experiment tracking API\u2019s available, however getting them all to work with in a multi-processing environment can oftentimes be complex.
Accelerate provides a general tracking API that can be used to log useful items during your script through `),X=s(Aa,"A",{href:!0});var xa=o(X);wt=n(xa,"log()"),xa.forEach(a),Aa.forEach(a),He=d(e),C=s(e,"H2",{class:!0});var dt=o(C);P=s(dt,"A",{id:!0,class:!0,href:!0});var Ia=o(P);pe=s(Ia,"SPAN",{});var Pa=o(pe);b(M.$$.fragment,Pa),Pa.forEach(a),Ia.forEach(a),kt=d(dt),de=s(dt,"SPAN",{});var Da=o(de);bt=n(Da,"Integrated Trackers"),Da.forEach(a),dt.forEach(a),Fe=d(e),D=s(e,"P",{});var mt=o(D);Et=n(mt,"Currently "),me=s(mt,"CODE",{});var za=o(me);$t=n(za,"Accelerate"),za.forEach(a),jt=n(mt," supports three trackers out-of-the-box:"),mt.forEach(a),Ue=d(e),f=s(e,"UL",{});var te=o(f);ue=s(te,"LI",{});var Sa=o(ue);he=s(Sa,"CODE",{});var Na=o(he);At=n(Na,"~TensorBoardTracker"),Na.forEach(a),Sa.forEach(a),Tt=d(te),fe=s(te,"LI",{});var La=o(fe);_e=s(La,"CODE",{});var Ba=o(_e);qt=n(Ba,"~WandBTracker"),Ba.forEach(a),La.forEach(a),Ct=d(te),ge=s(te,"LI",{});var Wa=o(ge);ye=s(Wa,"CODE",{});var Ga=o(ye);Ot=n(Ga,"~CometMLTracker"),Ga.forEach(a),Wa.forEach(a),te.forEach(a),Je=d(e),_=s(e,"P",{});var ae=o(_);xt=n(ae,"To use any of them, pass in the selected type(s) to the "),ve=s(ae,"CODE",{});var Ma=o(ve);It=n(Ma,"log_with"),Ma.forEach(a),Pt=n(ae," parameter in "),we=s(ae,"CODE",{});var Ra=o(we);Dt=n(Ra,"__init__"),Ra.forEach(a),zt=n(ae,":"),ae.forEach(a),Ke=d(e),b(R.$$.fragment,e),Qe=d(e),z=s(e,"P",{});var ut=o(z);St=n(ut,"At the start of your experiment "),ke=s(ut,"CODE",{});var Ha=o(ke);Nt=n(Ha,"init_tracker"),Ha.forEach(a),Lt=n(ut," should be used to setup your project, and potentially add any experiment hyperparameters to be logged:"),ut.forEach(a),Ve=d(e),b(H.$$.fragment,e),Xe=d(e),g=s(e,"P",{});var re=o(g);Bt=n(re,"When you are ready to log any data, "),Y=s(re,"A",{href:!0});var Fa=o(Y);Wt=n(Fa,"log()"),Fa.forEach(a),Gt=n(re,` should be used.
A `),be=s(re,"CODE",{});var Ua=o(be);Mt=n(Ua,"step"),Ua.forEach(a),Rt=n(re," can also be passed in to correlate the data with a particular step in the training loop."),re.forEach(a),Ye=d(e),b(F.$$.fragment,e),Ze=d(e),Z=s(e,"P",{});var Ja=o(Z);Ht=n(Ja,"A full example is below:"),Ja.forEach(a),et=d(e),b(U.$$.fragment,e),tt=d(e),O=s(e,"H2",{class:!0});var ht=o(O);S=s(ht,"A",{id:!0,class:!0,href:!0});var Ka=o(S);Ee=s(Ka,"SPAN",{});var Qa=o(Ee);b(J.$$.fragment,Qa),Qa.forEach(a),Ka.forEach(a),Ft=d(ht),$e=s(ht,"SPAN",{});var Va=o($e);Ut=n(Va,"Implementing Custom Trackers"),Va.forEach(a),ht.forEach(a),at=d(e),y=s(e,"P",{});var se=o(y);Jt=n(se,"To implement a new tracker to be used in "),je=s(se,"CODE",{});var Xa=o(je);Kt=n(Xa,"Accelerator"),Xa.forEach(a),Qt=n(se,", a new one can be made through implementing the "),Ae=s(se,"CODE",{});var Ya=o(Ae);Vt=n(Ya,"~GeneralTracker"),Ya.forEach(a),Xt=n(se,` class.
Every tracker must implement three functions:`),se.forEach(a),rt=d(e),v=s(e,"UL",{});var oe=o(v);N=s(oe,"LI",{});var We=o(N);Te=s(We,"CODE",{});var Za=o(Te);Yt=n(Za,"__init__"),Za.forEach(a),Zt=n(We,": Should store a "),qe=s(We,"CODE",{});var er=o(qe);ea=n(er,"run_name"),er.forEach(a),ta=n(We," and initialize the tracker API of the integrated library"),We.forEach(a),aa=d(oe),L=s(oe,"LI",{});var Ge=o(L);Ce=s(Ge,"CODE",{});var tr=o(Ce);ra=n(tr,"store_init_configuration"),tr.forEach(a),sa=n(Ge,": Should take in a "),Oe=s(Ge,"CODE",{});var ar=o(Oe);oa=n(ar,"values"),ar.forEach(a),la=n(Ge," dictionary and store them as a one-time experiment configuration"),Ge.forEach(a),na=d(oe),u=s(oe,"LI",{});var h=o(u);xe=s(h,"CODE",{});var rr=o(xe);ia=n(rr,"log"),rr.forEach(a),ca=n(h,": Should take in a "),Ie=s(h,"CODE",{});var sr=o(Ie);pa=n(sr,"values"),sr.forEach(a),da=n(h," dictionary and a "),Pe=s(h,"CODE",{});var or=o(Pe);ma=n(or,"step"),or.forEach(a),ua=n(h,`, and should log them to the run
As well as contain a `),De=s(h,"CODE",{});var lr=o(De);ha=n(lr,"log_directory"),lr.forEach(a),fa=n(h," attribute. If the integrated library does not store anything locally, should be set to "),ze=s(h,"CODE",{});var nr=o(ze);_a=n(nr,"None"),nr.forEach(a),ga=n(h,"."),h.forEach(a),oe.forEach(a),st=d(e),ee=s(e,"P",{});var ir=o(ee);ya=n(ir,"A brief example can be seen below with an integration with Weights and Biases, containing only the relevent information:"),ir.forEach(a),ot=d(e),b(K.$$.fragment,e),lt=d(e),x=s(e,"H2",{class:!0});var ft=o(x);B=s(ft,"A",{id:!0,class:!0,href:!0});var cr=o(B);Se=s(cr,"SPAN",{});var pr=o(Se);b(Q.$$.fragment,pr),pr.forEach(a),cr.forEach(a),va=d(ft),Ne=s(ft,"SPAN",{});var dr=o(Ne);wa=n(dr,"When a wrapper won't do"),dr.forEach(a),ft.forEach(a),nt=d(e),w=s(e,"P",{});var le=o(w);ka=n(le,"If a library has an API that does not follow a strict "),Le=s(le,"CODE",{});var mr=o(Le);ba=n(mr,".log"),mr.forEach(a),Ea=n(le," with an overall dictionary such as Neptune.AI, logging can be done manually under an "),Be=s(le,"CODE",{});var ur=o(Be);$a=n(ur,"if accelerator.is_main_process"),ur.forEach(a),ja=n(le," statement:"),le.forEach(a),it=d(e),b(V.$$.fragment,e),this.h()},h(){m(T,"name","hf:doc:metadata"),m(T,"content",JSON.stringify(kr)),m(I,"id","tracking"),m(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(I,"href","#tracking"),m(q,"class","relative group"),m(X,"href","/docs/accelerate/pr_293/en/accelerator#accelerate.Accelerator.log"),m(P,"id","integrated-trackers"),m(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(P,"href","#integrated-trackers"),m(C,"class","relative group"),m(Y,"href","/docs/accelerate/pr_293/en/accelerator#accelerate.Accelerator.log"),m(S,"id","implementing-custom-trackers"),m(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(S,"href","#implementing-custom-trackers"),m(O,"class","relative group"),m(B,"id","when-a-wrapper-wont-do"),m(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(B,"href","#when-a-wrapper-wont-do"),m(x,"class","relative group")},m(e,i){t(document.head,T),c(e,Me,i),c(e,q,i),t(q,I),t(I,ie),E(W,ie,null),t(q,gt),t(q,ce),t(ce,yt),c(e,Re,i),c(e,G,i),t(G,vt),t(G,X),t(X,wt),c(e,He,i),c(e,C,i),t(C,P),t(P,pe),E(M,pe,null),t(C,kt),t(C,de),t(de,bt),c(e,Fe,i),c(e,D,i),t(D,Et),t(D,me),t(me,$t),t(D,jt),c(e,Ue,i),c(e,f,i),t(f,ue),t(ue,he),t(he,At),t(f,Tt),t(f,fe),t(fe,_e),t(_e,qt),t(f,Ct),t(f,ge),t(ge,ye),t(ye,Ot),c(e,Je,i),c(e,_,i),t(_,xt),t(_,ve),t(ve,It),t(_,Pt),t(_,we),t(we,Dt),t(_,zt),c(e,Ke,i),E(R,e,i),c(e,Qe,i),c(e,z,i),t(z,St),t(z,ke),t(ke,Nt),t(z,Lt),c(e,Ve,i),E(H,e,i),c(e,Xe,i),c(e,g,i),t(g,Bt),t(g,Y),t(Y,Wt),t(g,Gt),t(g,be),t(be,Mt),t(g,Rt),c(e,Ye,i),E(F,e,i),c(e,Ze,i),c(e,Z,i),t(Z,Ht),c(e,et,i),E(U,e,i),c(e,tt,i),c(e,O,i),t(O,S),t(S,Ee),E(J,Ee,null),t(O,Ft),t(O,$e),t($e,Ut),c(e,at,i),c(e,y,i),t(y,Jt),t(y,je),t(je,Kt),t(y,Qt),t(y,Ae),t(Ae,Vt),t(y,Xt),c(e,rt,i),c(e,v,i),t(v,N),t(N,Te),t(Te,Yt),t(N,Zt),t(N,qe),t(qe,ea),t(N,ta),t(v,aa),t(v,L),t(L,Ce),t(Ce,ra),t(L,sa),t(L,Oe),t(Oe,oa),t(L,la),t(v,na),t(v,u),t(u,xe),t(xe,ia),t(u,ca),t(u,Ie),t(Ie,pa),t(u,da),t(u,Pe),t(Pe,ma),t(u,ua),t(u,De),t(De,ha),t(u,fa),t(u,ze),t(ze,_a),t(u,ga),c(e,st,i),c(e,ee,i),t(ee,ya),c(e,ot,i),E(K,e,i),c(e,lt,i),c(e,x,i),t(x,B),t(B,Se),E(Q,Se,null),t(x,va),t(x,Ne),t(Ne,wa),c(e,nt,i),c(e,w,i),t(w,ka),t(w,Le),t(Le,ba),t(w,Ea),t(w,Be),t(Be,$a),t(w,ja),c(e,it,i),E(V,e,i),ct=!0},p:yr,i(e){ct||($(W.$$.fragment,e),$(M.$$.fragment,e),$(R.$$.fragment,e),$(H.$$.fragment,e),$(F.$$.fragment,e),$(U.$$.fragment,e),$(J.$$.fragment,e),$(K.$$.fragment,e),$(Q.$$.fragment,e),$(V.$$.fragment,e),ct=!0)},o(e){j(W.$$.fragment,e),j(M.$$.fragment,e),j(R.$$.fragment,e),j(H.$$.fragment,e),j(F.$$.fragment,e),j(U.$$.fragment,e),j(J.$$.fragment,e),j(K.$$.fragment,e),j(Q.$$.fragment,e),j(V.$$.fragment,e),ct=!1},d(e){a(T),e&&a(Me),e&&a(q),A(W),e&&a(Re),e&&a(G),e&&a(He),e&&a(C),A(M),e&&a(Fe),e&&a(D),e&&a(Ue),e&&a(f),e&&a(Je),e&&a(_),e&&a(Ke),A(R,e),e&&a(Qe),e&&a(z),e&&a(Ve),A(H,e),e&&a(Xe),e&&a(g),e&&a(Ye),A(F,e),e&&a(Ze),e&&a(Z),e&&a(et),A(U,e),e&&a(tt),e&&a(O),A(J),e&&a(at),e&&a(y),e&&a(rt),e&&a(v),e&&a(st),e&&a(ee),e&&a(ot),A(K,e),e&&a(lt),e&&a(x),A(Q),e&&a(nt),e&&a(w),e&&a(it),A(V,e)}}}const kr={local:"tracking",sections:[{local:"integrated-trackers",title:"Integrated Trackers"},{local:"implementing-custom-trackers",title:"Implementing Custom Trackers"},{local:"when-a-wrapper-wont-do",title:"When a wrapper won't do"}],title:"Tracking"};function br(Ta){return vr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ar extends hr{constructor(T){super();fr(this,T,br,wr,_r,{})}}export{Ar as default,kr as metadata};
