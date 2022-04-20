import{S as Jn,i as Kn,s as Qn,e as s,k as i,w as m,t as a,M as Xn,c as n,d as r,m as d,a as l,x as h,h as o,b as u,F as t,g as p,y as f,L as Yn,q as g,o as _,B as v,v as Zn}from"../chunks/vendor-4918fc3c.js";import{D as E}from"../chunks/Docstring-02f0cd65.js";import{C as V}from"../chunks/CodeBlock-99419108.js";import{I as da}from"../chunks/IconCopyLink-21d338b1.js";function el(Rs){let P,tr,O,W,it,ne,pa,dt,ua,rr,le,ma,Je,ha,ar,I,G,pt,ce,fa,ut,ga,or,R,_a,mt,va,ya,sr,b,ie,ba,q,ka,ht,$a,wa,ft,Ea,Ta,Aa,U,de,ja,pe,xa,gt,Ca,Da,La,H,ue,Pa,me,Oa,_t,Ia,qa,Ba,F,he,Sa,fe,za,vt,Na,Ma,nr,k,ge,Va,B,Wa,yt,Ga,Ra,bt,Ua,Ha,Fa,J,_e,Ja,ve,Ka,kt,Qa,Xa,Ya,K,ye,Za,be,eo,$t,to,ro,ao,Q,ke,oo,$e,so,wt,no,lo,lr,y,we,co,S,io,Et,po,uo,Tt,mo,ho,fo,At,go,_o,X,Ee,vo,Te,yo,jt,bo,ko,$o,Y,Ae,wo,je,Eo,xt,To,Ao,jo,Z,xe,xo,Ce,Co,Ct,Do,Lo,cr,T,Po,Dt,Oo,Io,Lt,qo,Bo,ir,De,dr,ee,So,Ke,zo,No,pr,Le,ur,A,Mo,Qe,Vo,Wo,Pt,Go,Ro,mr,Pe,hr,te,Uo,Xe,Ho,Fo,fr,Oe,gr,Ye,Jo,_r,Ie,vr,z,re,Ot,qe,Ko,It,Qo,yr,j,Xo,qt,Yo,Zo,Bt,es,ts,br,x,Be,St,rs,as,Se,ze,os,zt,ss,ns,ls,Ne,cs,Nt,is,ds,ps,Me,Mt,us,ms,Vt,Ve,hs,Wt,fs,gs,_s,We,Gt,vs,ys,Rt,N,bs,Ut,ks,$s,Ht,ws,Es,kr,Ze,Ts,$r,Ge,wr,$,As,Ft,js,xs,Jt,Cs,Ds,Kt,Ls,Ps,Er,Re,Tr,ae,Os,Qt,Is,qs,Ar,Ue,jr,M,oe,Xt,He,Bs,Yt,Ss,xr,C,zs,Zt,Ns,Ms,er,Vs,Ws,Cr,Fe,Dr;return ne=new da({}),ce=new da({}),ie=new E({props:{name:"class accelerate.tracking.TensorBoardTracker",anchor:"accelerate.tracking.TensorBoardTracker",parameters:[{name:"run_name",val:": str"},{name:"logging_dir",val:": typing.Union[str, os.PathLike, NoneType]"}],parametersDescription:[{anchor:"accelerate.tracking.TensorBoardTracker.run_name",description:`<strong>run_name</strong> (<code>str</code>) &#x2014;
The name of the experiment run`,name:"run_name"},{anchor:"accelerate.tracking.TensorBoardTracker.logging_dir",description:`<strong>logging_dir</strong> (<code>str</code>, <code>os.PathLike</code>) &#x2014;
Location for TensorBoard logs to be stored.`,name:"logging_dir"}],source:"https://github.com/huggingface/accelerate/blob/pr_320/src/accelerate/tracking.py#L99"}}),de=new E({props:{name:"finish",anchor:"accelerate.tracking.TensorBoardTracker.finish",parameters:[],source:"https://github.com/huggingface/accelerate/blob/pr_320/src/accelerate/tracking.py#L152"}}),ue=new E({props:{name:"log",anchor:"accelerate.tracking.TensorBoardTracker.log",parameters:[{name:"values",val:": dict"},{name:"step",val:": typing.Optional[int] = None"}],parametersDescription:[{anchor:"accelerate.tracking.TensorBoardTracker.log.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>str</code>, <code>float</code>, or <code>int</code>) &#x2014;
Values to be logged as key-value pairs. The values need to have type <code>str</code>, <code>float</code>, or <code>int</code>.`,name:"values"},{anchor:"accelerate.tracking.TensorBoardTracker.log.step",description:`<strong>step</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The run step. If included, the log will be affiliated with this step.`,name:"step"}],source:"https://github.com/huggingface/accelerate/blob/pr_320/src/accelerate/tracking.py#L134"}}),he=new E({props:{name:"store_init_configuration",anchor:"accelerate.tracking.TensorBoardTracker.store_init_configuration",parameters:[{name:"values",val:": dict"}],parametersDescription:[{anchor:"accelerate.tracking.TensorBoardTracker.store_init_configuration.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>bool</code>, <code>str</code>, <code>float</code> or <code>int</code>) &#x2014;
Values to be stored as initial hyperparameters as key-value pairs. The values need to have type <code>bool</code>,
<code>str</code>, <code>float</code>, <code>int</code>, or <code>None</code>.`,name:"values"}],source:"https://github.com/huggingface/accelerate/blob/pr_320/src/accelerate/tracking.py#L121"}}),ge=new E({props:{name:"class accelerate.tracking.WandBTracker",anchor:"accelerate.tracking.WandBTracker",parameters:[{name:"run_name",val:": str"}],parametersDescription:[{anchor:"accelerate.tracking.WandBTracker.run_name",description:`<strong>run_name</strong> (<code>str</code>) &#x2014;
The name of the experiment run.`,name:"run_name"}],source:"https://github.com/huggingface/accelerate/blob/pr_320/src/accelerate/tracking.py#L160"}}),_e=new E({props:{name:"finish",anchor:"accelerate.tracking.WandBTracker.finish",parameters:[],source:"https://github.com/huggingface/accelerate/blob/pr_320/src/accelerate/tracking.py#L204"}}),ye=new E({props:{name:"log",anchor:"accelerate.tracking.WandBTracker.log",parameters:[{name:"values",val:": dict"},{name:"step",val:": typing.Optional[int] = None"}],parametersDescription:[{anchor:"accelerate.tracking.WandBTracker.log.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>str</code>, <code>float</code>, or <code>int</code>) &#x2014;
Values to be logged as key-value pairs. The values need to have type <code>str</code>, <code>float</code>, or <code>int</code>.`,name:"values"},{anchor:"accelerate.tracking.WandBTracker.log.step",description:`<strong>step</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The run step. If included, the log will be affiliated with this step.`,name:"step"}],source:"https://github.com/huggingface/accelerate/blob/pr_320/src/accelerate/tracking.py#L191"}}),ke=new E({props:{name:"store_init_configuration",anchor:"accelerate.tracking.WandBTracker.store_init_configuration",parameters:[{name:"values",val:": dict"}],parametersDescription:[{anchor:"accelerate.tracking.WandBTracker.store_init_configuration.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>bool</code>, <code>str</code>, <code>float</code> or <code>int</code>) &#x2014;
Values to be stored as initial hyperparameters as key-value pairs. The values need to have type <code>bool</code>,
<code>str</code>, <code>float</code>, <code>int</code>, or <code>None</code>.`,name:"values"}],source:"https://github.com/huggingface/accelerate/blob/pr_320/src/accelerate/tracking.py#L179"}}),we=new E({props:{name:"class accelerate.tracking.CometMLTracker",anchor:"accelerate.tracking.CometMLTracker",parameters:[{name:"run_name",val:": str"}],parametersDescription:[{anchor:"accelerate.tracking.CometMLTracker.run_name",description:`<strong>run_name</strong> (<code>str</code>) &#x2014;
The name of the experiment run.`,name:"run_name"}],source:"https://github.com/huggingface/accelerate/blob/pr_320/src/accelerate/tracking.py#L212"}}),Ee=new E({props:{name:"finish",anchor:"accelerate.tracking.CometMLTracker.finish",parameters:[],source:"https://github.com/huggingface/accelerate/blob/pr_320/src/accelerate/tracking.py#L260"}}),Ae=new E({props:{name:"log",anchor:"accelerate.tracking.CometMLTracker.log",parameters:[{name:"values",val:": dict"},{name:"step",val:": typing.Optional[int] = None"}],parametersDescription:[{anchor:"accelerate.tracking.CometMLTracker.log.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>str</code>, <code>float</code>, or <code>int</code>) &#x2014;
Values to be logged as key-value pairs. The values need to have type <code>str</code>, <code>float</code>, or <code>int</code>.`,name:"values"},{anchor:"accelerate.tracking.CometMLTracker.log.step",description:`<strong>step</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The run step. If included, the log will be affiliated with this step.`,name:"step"}],source:"https://github.com/huggingface/accelerate/blob/pr_320/src/accelerate/tracking.py#L245"}}),xe=new E({props:{name:"store_init_configuration",anchor:"accelerate.tracking.CometMLTracker.store_init_configuration",parameters:[{name:"values",val:": dict"}],parametersDescription:[{anchor:"accelerate.tracking.CometMLTracker.store_init_configuration.values",description:`<strong>values</strong> (Dictionary <code>str</code> to <code>bool</code>, <code>str</code>, <code>float</code> or <code>int</code>) &#x2014;
Values to be stored as initial hyperparameters as key-value pairs. The values need to have type <code>bool</code>,
<code>str</code>, <code>float</code>, <code>int</code>, or <code>None</code>.`,name:"values"}],source:"https://github.com/huggingface/accelerate/blob/pr_320/src/accelerate/tracking.py#L233"}}),De=new V({props:{code:`from accelerate import Accelerator
from accelerate.utils import LoggerType

accelerator = Accelerator(log_with="all")  # For all available trackers in the environment
accelerator = Accelerator(log_with="wandb")
accelerator = Accelerator(log_with=["wandb", LoggerType.TENSORBOARD])`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator
<span class="hljs-keyword">from</span> accelerate.utils <span class="hljs-keyword">import</span> LoggerType

accelerator = Accelerator(log_with=<span class="hljs-string">&quot;all&quot;</span>)  <span class="hljs-comment"># For all available trackers in the environment</span>
accelerator = Accelerator(log_with=<span class="hljs-string">&quot;wandb&quot;</span>)
accelerator = Accelerator(log_with=[<span class="hljs-string">&quot;wandb&quot;</span>, LoggerType.TENSORBOARD])`}}),Le=new V({props:{code:`hps = {"num_iterations": 5, "learning_rate": 1e-2}
accelerator.init_trackers("my_project", config=hps)`,highlighted:`hps = {<span class="hljs-string">&quot;num_iterations&quot;</span>: <span class="hljs-number">5</span>, <span class="hljs-string">&quot;learning_rate&quot;</span>: <span class="hljs-number">1e-2</span>}
accelerator.init_trackers(<span class="hljs-string">&quot;my_project&quot;</span>, config=hps)`}}),Pe=new V({props:{code:'accelerator.log({"train_loss": 1.12, "valid_loss": 0.8}, step=1)',highlighted:'accelerator.log({<span class="hljs-string">&quot;train_loss&quot;</span>: <span class="hljs-number">1.12</span>, <span class="hljs-string">&quot;valid_loss&quot;</span>: <span class="hljs-number">0.8</span>}, step=<span class="hljs-number">1</span>)'}}),Oe=new V({props:{code:"accelerator.end_training()",highlighted:"accelerator.end_training()"}}),Ie=new V({props:{code:`from accelerate import Accelerator

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
        accelerator.log({"training_loss": loss}, step=step)
accelerator.end_training()`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

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
        accelerator.log({<span class="hljs-string">&quot;training_loss&quot;</span>: loss}, step=step)
accelerator.end_training()`}}),qe=new da({}),Ge=new V({props:{code:`from accelerate.tracking import GeneralTracker
from typing import Optional

import wandb


class MyCustomTracker(GeneralTracker):
    def __init__(self, run_name: str):
        self.run_name = run_name
        wandb.init(self.run_name)

    def store_init_configuration(self, values: dict):
        wandb.config(values)

    def log(self, values: dict, step: Optional[int] = None):
        wandb.log(values, step=step)`,highlighted:`<span class="hljs-keyword">from</span> accelerate.tracking <span class="hljs-keyword">import</span> GeneralTracker
<span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">Optional</span>

<span class="hljs-keyword">import</span> wandb


<span class="hljs-keyword">class</span> <span class="hljs-title class_">MyCustomTracker</span>(<span class="hljs-title class_ inherited__">GeneralTracker</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, run_name: <span class="hljs-built_in">str</span></span>):
        self.run_name = run_name
        wandb.init(self.run_name)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">store_init_configuration</span>(<span class="hljs-params">self, values: <span class="hljs-built_in">dict</span></span>):
        wandb.config(values)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">log</span>(<span class="hljs-params">self, values: <span class="hljs-built_in">dict</span>, step: <span class="hljs-type">Optional</span>[<span class="hljs-built_in">int</span>] = <span class="hljs-literal">None</span></span>):
        wandb.log(values, step=step)`}}),Re=new V({props:{code:`tracker = MyCustomTracker("some_run_name")
accelerator = Accelerator(log_with=tracker)`,highlighted:`tracker = MyCustomTracker(<span class="hljs-string">&quot;some_run_name&quot;</span>)
accelerator = Accelerator(log_with=tracker)`}}),Ue=new V({props:{code:`tracker = MyCustomTracker("some_run_name")
accelerator = Accelerator(log_with=[tracker, "all"])`,highlighted:`tracker = MyCustomTracker(<span class="hljs-string">&quot;some_run_name&quot;</span>)
accelerator = Accelerator(log_with=[tracker, <span class="hljs-string">&quot;all&quot;</span>])`}}),He=new da({}),Fe=new V({props:{code:`from accelerate import Accelerator
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
+           run["logs/training/batch/loss"].log(loss)`,highlighted:`from accelerate import Accelerator
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
<span class="hljs-addition">+           run[&quot;logs/training/batch/loss&quot;].log(loss)</span>`}}),{c(){P=s("meta"),tr=i(),O=s("h1"),W=s("a"),it=s("span"),m(ne.$$.fragment),pa=i(),dt=s("span"),ua=a("Tracking"),rr=i(),le=s("p"),ma=a(`There are a large number of experiment tracking API\u2019s available, however getting them all to work with in a multi-processing environment can oftentimes be complex.
Accelerate provides a general tracking API that can be used to log useful items during your script through `),Je=s("a"),ha=a("log()"),ar=i(),I=s("h2"),G=s("a"),pt=s("span"),m(ce.$$.fragment),fa=i(),ut=s("span"),ga=a("Integrated Trackers"),or=i(),R=s("p"),_a=a("Currently "),mt=s("code"),va=a("Accelerate"),ya=a(" supports three trackers out-of-the-box:"),sr=i(),b=s("div"),m(ie.$$.fragment),ba=i(),q=s("p"),ka=a("A "),ht=s("code"),$a=a("Tracker"),wa=a(" class that supports "),ft=s("code"),Ea=a("tensorboard"),Ta=a(". Should be initialized at the start of your script."),Aa=i(),U=s("div"),m(de.$$.fragment),ja=i(),pe=s("p"),xa=a("Closes "),gt=s("code"),Ca=a("TensorBoard"),Da=a(" writer"),La=i(),H=s("div"),m(ue.$$.fragment),Pa=i(),me=s("p"),Oa=a("Logs "),_t=s("code"),Ia=a("values"),qa=a(" to the current run."),Ba=i(),F=s("div"),m(he.$$.fragment),Sa=i(),fe=s("p"),za=a("Logs "),vt=s("code"),Na=a("values"),Ma=a(" as hyperparameters for the run. Should be run at the beginning of your experiment."),nr=i(),k=s("div"),m(ge.$$.fragment),Va=i(),B=s("p"),Wa=a("A "),yt=s("code"),Ga=a("Tracker"),Ra=a(" class that supports "),bt=s("code"),Ua=a("wandb"),Ha=a(". Should be initialized at the start of your script."),Fa=i(),J=s("div"),m(_e.$$.fragment),Ja=i(),ve=s("p"),Ka=a("Closes "),kt=s("code"),Qa=a("wandb"),Xa=a(" writer"),Ya=i(),K=s("div"),m(ye.$$.fragment),Za=i(),be=s("p"),eo=a("Logs "),$t=s("code"),to=a("values"),ro=a(" to the current run."),ao=i(),Q=s("div"),m(ke.$$.fragment),oo=i(),$e=s("p"),so=a("Logs "),wt=s("code"),no=a("values"),lo=a(" as hyperparameters for the run. Should be run at the beginning of your experiment."),lr=i(),y=s("div"),m(we.$$.fragment),co=i(),S=s("p"),io=a("A "),Et=s("code"),po=a("Tracker"),uo=a(" class that supports "),Tt=s("code"),mo=a("comet_ml"),ho=a(". Should be initialized at the start of your script."),fo=i(),At=s("p"),go=a("API keys must be stored in a Comet config file."),_o=i(),X=s("div"),m(Ee.$$.fragment),vo=i(),Te=s("p"),yo=a("Closes "),jt=s("code"),bo=a("comet-ml"),ko=a(" writer"),$o=i(),Y=s("div"),m(Ae.$$.fragment),wo=i(),je=s("p"),Eo=a("Logs "),xt=s("code"),To=a("values"),Ao=a(" to the current run."),jo=i(),Z=s("div"),m(xe.$$.fragment),xo=i(),Ce=s("p"),Co=a("Logs "),Ct=s("code"),Do=a("values"),Lo=a(" as hyperparameters for the run. Should be run at the beginning of your experiment."),cr=i(),T=s("p"),Po=a("To use any of them, pass in the selected type(s) to the "),Dt=s("code"),Oo=a("log_with"),Io=a(" parameter in "),Lt=s("code"),qo=a("Accelerate"),Bo=a(":"),ir=i(),m(De.$$.fragment),dr=i(),ee=s("p"),So=a("At the start of your experiment "),Ke=s("a"),zo=a("init_trackers()"),No=a(" should be used to setup your project, and potentially add any experiment hyperparameters to be logged:"),pr=i(),m(Le.$$.fragment),ur=i(),A=s("p"),Mo=a("When you are ready to log any data, "),Qe=s("a"),Vo=a("log()"),Wo=a(` should be used.
A `),Pt=s("code"),Go=a("step"),Ro=a(" can also be passed in to correlate the data with a particular step in the training loop."),mr=i(),m(Pe.$$.fragment),hr=i(),te=s("p"),Uo=a("Once you\u2019ve finished training, make sure to run "),Xe=s("a"),Ho=a("end_training()"),Fo=a(" so that all the trackers can run their finish functionalities if they have any."),fr=i(),m(Oe.$$.fragment),gr=i(),Ye=s("p"),Jo=a("A full example is below:"),_r=i(),m(Ie.$$.fragment),vr=i(),z=s("h2"),re=s("a"),Ot=s("span"),m(qe.$$.fragment),Ko=i(),It=s("span"),Qo=a("Implementing Custom Trackers"),yr=i(),j=s("p"),Xo=a("To implement a new tracker to be used in "),qt=s("code"),Yo=a("Accelerator"),Zo=a(", a new one can be made through implementing the "),Bt=s("code"),es=a("~GeneralTracker"),ts=a(` class.
Every tracker must implement three functions:`),br=i(),x=s("ul"),Be=s("li"),St=s("code"),rs=a("__init__"),as=a(": "),Se=s("ul"),ze=s("li"),os=a("Should store a "),zt=s("code"),ss=a("run_name"),ns=a(" and initialize the tracker API of the integrated library."),ls=i(),Ne=s("li"),cs=a("If a tracker stores their data locally (such as TensorBoard), a "),Nt=s("code"),is=a("logging_dir"),ds=a(" parameter can be added."),ps=i(),Me=s("li"),Mt=s("code"),us=a("store_init_configuration"),ms=a(": "),Vt=s("ul"),Ve=s("li"),hs=a("Should take in a "),Wt=s("code"),fs=a("values"),gs=a(" dictionary and store them as a one-time experiment configuration"),_s=i(),We=s("li"),Gt=s("code"),vs=a("log"),ys=a(": "),Rt=s("ul"),N=s("li"),bs=a("Should take in a "),Ut=s("code"),ks=a("values"),$s=a(" dictionary and a "),Ht=s("code"),ws=a("step"),Es=a(", and should log them to the run"),kr=i(),Ze=s("p"),Ts=a("A brief example can be seen below with an integration with Weights and Biases, containing only the relevent information:"),$r=i(),m(Ge.$$.fragment),wr=i(),$=s("p"),As=a("When you are ready to build your "),Ft=s("code"),js=a("Accelerator"),xs=a(" object, pass in an "),Jt=s("strong"),Cs=a("instance"),Ds=a(" of your tracker to "),Kt=s("code"),Ls=a("log_with"),Ps=a(` to have it automatically
be used with the API:`),Er=i(),m(Re.$$.fragment),Tr=i(),ae=s("p"),Os=a("These also can be mixed with existing trackers, including with "),Qt=s("code"),Is=a('"all"'),qs=a(":"),Ar=i(),m(Ue.$$.fragment),jr=i(),M=s("h2"),oe=s("a"),Xt=s("span"),m(He.$$.fragment),Bs=i(),Yt=s("span"),Ss=a("When a wrapper cannot work"),xr=i(),C=s("p"),zs=a("If a library has an API that does not follow a strict "),Zt=s("code"),Ns=a(".log"),Ms=a(" with an overall dictionary such as Neptune.AI, logging can be done manually under an "),er=s("code"),Vs=a("if accelerator.is_main_process"),Ws=a(" statement:"),Cr=i(),m(Fe.$$.fragment),this.h()},l(e){const c=Xn('[data-svelte="svelte-1phssyn"]',document.head);P=n(c,"META",{name:!0,content:!0}),c.forEach(r),tr=d(e),O=n(e,"H1",{class:!0});var Lr=l(O);W=n(Lr,"A",{id:!0,class:!0,href:!0});var Us=l(W);it=n(Us,"SPAN",{});var Hs=l(it);h(ne.$$.fragment,Hs),Hs.forEach(r),Us.forEach(r),pa=d(Lr),dt=n(Lr,"SPAN",{});var Fs=l(dt);ua=o(Fs,"Tracking"),Fs.forEach(r),Lr.forEach(r),rr=d(e),le=n(e,"P",{});var Gs=l(le);ma=o(Gs,`There are a large number of experiment tracking API\u2019s available, however getting them all to work with in a multi-processing environment can oftentimes be complex.
Accelerate provides a general tracking API that can be used to log useful items during your script through `),Je=n(Gs,"A",{href:!0});var Js=l(Je);ha=o(Js,"log()"),Js.forEach(r),Gs.forEach(r),ar=d(e),I=n(e,"H2",{class:!0});var Pr=l(I);G=n(Pr,"A",{id:!0,class:!0,href:!0});var Ks=l(G);pt=n(Ks,"SPAN",{});var Qs=l(pt);h(ce.$$.fragment,Qs),Qs.forEach(r),Ks.forEach(r),fa=d(Pr),ut=n(Pr,"SPAN",{});var Xs=l(ut);ga=o(Xs,"Integrated Trackers"),Xs.forEach(r),Pr.forEach(r),or=d(e),R=n(e,"P",{});var Or=l(R);_a=o(Or,"Currently "),mt=n(Or,"CODE",{});var Ys=l(mt);va=o(Ys,"Accelerate"),Ys.forEach(r),ya=o(Or," supports three trackers out-of-the-box:"),Or.forEach(r),sr=d(e),b=n(e,"DIV",{class:!0});var D=l(b);h(ie.$$.fragment,D),ba=d(D),q=n(D,"P",{});var et=l(q);ka=o(et,"A "),ht=n(et,"CODE",{});var Zs=l(ht);$a=o(Zs,"Tracker"),Zs.forEach(r),wa=o(et," class that supports "),ft=n(et,"CODE",{});var en=l(ft);Ea=o(en,"tensorboard"),en.forEach(r),Ta=o(et,". Should be initialized at the start of your script."),et.forEach(r),Aa=d(D),U=n(D,"DIV",{class:!0});var Ir=l(U);h(de.$$.fragment,Ir),ja=d(Ir),pe=n(Ir,"P",{});var qr=l(pe);xa=o(qr,"Closes "),gt=n(qr,"CODE",{});var tn=l(gt);Ca=o(tn,"TensorBoard"),tn.forEach(r),Da=o(qr," writer"),qr.forEach(r),Ir.forEach(r),La=d(D),H=n(D,"DIV",{class:!0});var Br=l(H);h(ue.$$.fragment,Br),Pa=d(Br),me=n(Br,"P",{});var Sr=l(me);Oa=o(Sr,"Logs "),_t=n(Sr,"CODE",{});var rn=l(_t);Ia=o(rn,"values"),rn.forEach(r),qa=o(Sr," to the current run."),Sr.forEach(r),Br.forEach(r),Ba=d(D),F=n(D,"DIV",{class:!0});var zr=l(F);h(he.$$.fragment,zr),Sa=d(zr),fe=n(zr,"P",{});var Nr=l(fe);za=o(Nr,"Logs "),vt=n(Nr,"CODE",{});var an=l(vt);Na=o(an,"values"),an.forEach(r),Ma=o(Nr," as hyperparameters for the run. Should be run at the beginning of your experiment."),Nr.forEach(r),zr.forEach(r),D.forEach(r),nr=d(e),k=n(e,"DIV",{class:!0});var L=l(k);h(ge.$$.fragment,L),Va=d(L),B=n(L,"P",{});var tt=l(B);Wa=o(tt,"A "),yt=n(tt,"CODE",{});var on=l(yt);Ga=o(on,"Tracker"),on.forEach(r),Ra=o(tt," class that supports "),bt=n(tt,"CODE",{});var sn=l(bt);Ua=o(sn,"wandb"),sn.forEach(r),Ha=o(tt,". Should be initialized at the start of your script."),tt.forEach(r),Fa=d(L),J=n(L,"DIV",{class:!0});var Mr=l(J);h(_e.$$.fragment,Mr),Ja=d(Mr),ve=n(Mr,"P",{});var Vr=l(ve);Ka=o(Vr,"Closes "),kt=n(Vr,"CODE",{});var nn=l(kt);Qa=o(nn,"wandb"),nn.forEach(r),Xa=o(Vr," writer"),Vr.forEach(r),Mr.forEach(r),Ya=d(L),K=n(L,"DIV",{class:!0});var Wr=l(K);h(ye.$$.fragment,Wr),Za=d(Wr),be=n(Wr,"P",{});var Gr=l(be);eo=o(Gr,"Logs "),$t=n(Gr,"CODE",{});var ln=l($t);to=o(ln,"values"),ln.forEach(r),ro=o(Gr," to the current run."),Gr.forEach(r),Wr.forEach(r),ao=d(L),Q=n(L,"DIV",{class:!0});var Rr=l(Q);h(ke.$$.fragment,Rr),oo=d(Rr),$e=n(Rr,"P",{});var Ur=l($e);so=o(Ur,"Logs "),wt=n(Ur,"CODE",{});var cn=l(wt);no=o(cn,"values"),cn.forEach(r),lo=o(Ur," as hyperparameters for the run. Should be run at the beginning of your experiment."),Ur.forEach(r),Rr.forEach(r),L.forEach(r),lr=d(e),y=n(e,"DIV",{class:!0});var w=l(y);h(we.$$.fragment,w),co=d(w),S=n(w,"P",{});var rt=l(S);io=o(rt,"A "),Et=n(rt,"CODE",{});var dn=l(Et);po=o(dn,"Tracker"),dn.forEach(r),uo=o(rt," class that supports "),Tt=n(rt,"CODE",{});var pn=l(Tt);mo=o(pn,"comet_ml"),pn.forEach(r),ho=o(rt,". Should be initialized at the start of your script."),rt.forEach(r),fo=d(w),At=n(w,"P",{});var un=l(At);go=o(un,"API keys must be stored in a Comet config file."),un.forEach(r),_o=d(w),X=n(w,"DIV",{class:!0});var Hr=l(X);h(Ee.$$.fragment,Hr),vo=d(Hr),Te=n(Hr,"P",{});var Fr=l(Te);yo=o(Fr,"Closes "),jt=n(Fr,"CODE",{});var mn=l(jt);bo=o(mn,"comet-ml"),mn.forEach(r),ko=o(Fr," writer"),Fr.forEach(r),Hr.forEach(r),$o=d(w),Y=n(w,"DIV",{class:!0});var Jr=l(Y);h(Ae.$$.fragment,Jr),wo=d(Jr),je=n(Jr,"P",{});var Kr=l(je);Eo=o(Kr,"Logs "),xt=n(Kr,"CODE",{});var hn=l(xt);To=o(hn,"values"),hn.forEach(r),Ao=o(Kr," to the current run."),Kr.forEach(r),Jr.forEach(r),jo=d(w),Z=n(w,"DIV",{class:!0});var Qr=l(Z);h(xe.$$.fragment,Qr),xo=d(Qr),Ce=n(Qr,"P",{});var Xr=l(Ce);Co=o(Xr,"Logs "),Ct=n(Xr,"CODE",{});var fn=l(Ct);Do=o(fn,"values"),fn.forEach(r),Lo=o(Xr," as hyperparameters for the run. Should be run at the beginning of your experiment."),Xr.forEach(r),Qr.forEach(r),w.forEach(r),cr=d(e),T=n(e,"P",{});var at=l(T);Po=o(at,"To use any of them, pass in the selected type(s) to the "),Dt=n(at,"CODE",{});var gn=l(Dt);Oo=o(gn,"log_with"),gn.forEach(r),Io=o(at," parameter in "),Lt=n(at,"CODE",{});var _n=l(Lt);qo=o(_n,"Accelerate"),_n.forEach(r),Bo=o(at,":"),at.forEach(r),ir=d(e),h(De.$$.fragment,e),dr=d(e),ee=n(e,"P",{});var Yr=l(ee);So=o(Yr,"At the start of your experiment "),Ke=n(Yr,"A",{href:!0});var vn=l(Ke);zo=o(vn,"init_trackers()"),vn.forEach(r),No=o(Yr," should be used to setup your project, and potentially add any experiment hyperparameters to be logged:"),Yr.forEach(r),pr=d(e),h(Le.$$.fragment,e),ur=d(e),A=n(e,"P",{});var ot=l(A);Mo=o(ot,"When you are ready to log any data, "),Qe=n(ot,"A",{href:!0});var yn=l(Qe);Vo=o(yn,"log()"),yn.forEach(r),Wo=o(ot,` should be used.
A `),Pt=n(ot,"CODE",{});var bn=l(Pt);Go=o(bn,"step"),bn.forEach(r),Ro=o(ot," can also be passed in to correlate the data with a particular step in the training loop."),ot.forEach(r),mr=d(e),h(Pe.$$.fragment,e),hr=d(e),te=n(e,"P",{});var Zr=l(te);Uo=o(Zr,"Once you\u2019ve finished training, make sure to run "),Xe=n(Zr,"A",{href:!0});var kn=l(Xe);Ho=o(kn,"end_training()"),kn.forEach(r),Fo=o(Zr," so that all the trackers can run their finish functionalities if they have any."),Zr.forEach(r),fr=d(e),h(Oe.$$.fragment,e),gr=d(e),Ye=n(e,"P",{});var $n=l(Ye);Jo=o($n,"A full example is below:"),$n.forEach(r),_r=d(e),h(Ie.$$.fragment,e),vr=d(e),z=n(e,"H2",{class:!0});var ea=l(z);re=n(ea,"A",{id:!0,class:!0,href:!0});var wn=l(re);Ot=n(wn,"SPAN",{});var En=l(Ot);h(qe.$$.fragment,En),En.forEach(r),wn.forEach(r),Ko=d(ea),It=n(ea,"SPAN",{});var Tn=l(It);Qo=o(Tn,"Implementing Custom Trackers"),Tn.forEach(r),ea.forEach(r),yr=d(e),j=n(e,"P",{});var st=l(j);Xo=o(st,"To implement a new tracker to be used in "),qt=n(st,"CODE",{});var An=l(qt);Yo=o(An,"Accelerator"),An.forEach(r),Zo=o(st,", a new one can be made through implementing the "),Bt=n(st,"CODE",{});var jn=l(Bt);es=o(jn,"~GeneralTracker"),jn.forEach(r),ts=o(st,` class.
Every tracker must implement three functions:`),st.forEach(r),br=d(e),x=n(e,"UL",{});var nt=l(x);Be=n(nt,"LI",{});var ta=l(Be);St=n(ta,"CODE",{});var xn=l(St);rs=o(xn,"__init__"),xn.forEach(r),as=o(ta,": "),Se=n(ta,"UL",{});var ra=l(Se);ze=n(ra,"LI",{});var aa=l(ze);os=o(aa,"Should store a "),zt=n(aa,"CODE",{});var Cn=l(zt);ss=o(Cn,"run_name"),Cn.forEach(r),ns=o(aa," and initialize the tracker API of the integrated library."),aa.forEach(r),ls=d(ra),Ne=n(ra,"LI",{});var oa=l(Ne);cs=o(oa,"If a tracker stores their data locally (such as TensorBoard), a "),Nt=n(oa,"CODE",{});var Dn=l(Nt);is=o(Dn,"logging_dir"),Dn.forEach(r),ds=o(oa," parameter can be added."),oa.forEach(r),ra.forEach(r),ta.forEach(r),ps=d(nt),Me=n(nt,"LI",{});var sa=l(Me);Mt=n(sa,"CODE",{});var Ln=l(Mt);us=o(Ln,"store_init_configuration"),Ln.forEach(r),ms=o(sa,": "),Vt=n(sa,"UL",{});var Pn=l(Vt);Ve=n(Pn,"LI",{});var na=l(Ve);hs=o(na,"Should take in a "),Wt=n(na,"CODE",{});var On=l(Wt);fs=o(On,"values"),On.forEach(r),gs=o(na," dictionary and store them as a one-time experiment configuration"),na.forEach(r),Pn.forEach(r),sa.forEach(r),_s=d(nt),We=n(nt,"LI",{});var la=l(We);Gt=n(la,"CODE",{});var In=l(Gt);vs=o(In,"log"),In.forEach(r),ys=o(la,": "),Rt=n(la,"UL",{});var qn=l(Rt);N=n(qn,"LI",{});var lt=l(N);bs=o(lt,"Should take in a "),Ut=n(lt,"CODE",{});var Bn=l(Ut);ks=o(Bn,"values"),Bn.forEach(r),$s=o(lt," dictionary and a "),Ht=n(lt,"CODE",{});var Sn=l(Ht);ws=o(Sn,"step"),Sn.forEach(r),Es=o(lt,", and should log them to the run"),lt.forEach(r),qn.forEach(r),la.forEach(r),nt.forEach(r),kr=d(e),Ze=n(e,"P",{});var zn=l(Ze);Ts=o(zn,"A brief example can be seen below with an integration with Weights and Biases, containing only the relevent information:"),zn.forEach(r),$r=d(e),h(Ge.$$.fragment,e),wr=d(e),$=n(e,"P",{});var se=l($);As=o(se,"When you are ready to build your "),Ft=n(se,"CODE",{});var Nn=l(Ft);js=o(Nn,"Accelerator"),Nn.forEach(r),xs=o(se," object, pass in an "),Jt=n(se,"STRONG",{});var Mn=l(Jt);Cs=o(Mn,"instance"),Mn.forEach(r),Ds=o(se," of your tracker to "),Kt=n(se,"CODE",{});var Vn=l(Kt);Ls=o(Vn,"log_with"),Vn.forEach(r),Ps=o(se,` to have it automatically
be used with the API:`),se.forEach(r),Er=d(e),h(Re.$$.fragment,e),Tr=d(e),ae=n(e,"P",{});var ca=l(ae);Os=o(ca,"These also can be mixed with existing trackers, including with "),Qt=n(ca,"CODE",{});var Wn=l(Qt);Is=o(Wn,'"all"'),Wn.forEach(r),qs=o(ca,":"),ca.forEach(r),Ar=d(e),h(Ue.$$.fragment,e),jr=d(e),M=n(e,"H2",{class:!0});var ia=l(M);oe=n(ia,"A",{id:!0,class:!0,href:!0});var Gn=l(oe);Xt=n(Gn,"SPAN",{});var Rn=l(Xt);h(He.$$.fragment,Rn),Rn.forEach(r),Gn.forEach(r),Bs=d(ia),Yt=n(ia,"SPAN",{});var Un=l(Yt);Ss=o(Un,"When a wrapper cannot work"),Un.forEach(r),ia.forEach(r),xr=d(e),C=n(e,"P",{});var ct=l(C);zs=o(ct,"If a library has an API that does not follow a strict "),Zt=n(ct,"CODE",{});var Hn=l(Zt);Ns=o(Hn,".log"),Hn.forEach(r),Ms=o(ct," with an overall dictionary such as Neptune.AI, logging can be done manually under an "),er=n(ct,"CODE",{});var Fn=l(er);Vs=o(Fn,"if accelerator.is_main_process"),Fn.forEach(r),Ws=o(ct," statement:"),ct.forEach(r),Cr=d(e),h(Fe.$$.fragment,e),this.h()},h(){u(P,"name","hf:doc:metadata"),u(P,"content",JSON.stringify(tl)),u(W,"id","tracking"),u(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(W,"href","#tracking"),u(O,"class","relative group"),u(Je,"href","/docs/accelerate/pr_320/en/accelerator#accelerate.Accelerator.log"),u(G,"id","accelerate.tracking.TensorBoardTracker"),u(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(G,"href","#accelerate.tracking.TensorBoardTracker"),u(I,"class","relative group"),u(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"href","/docs/accelerate/pr_320/en/accelerator#accelerate.Accelerator.init_trackers"),u(Qe,"href","/docs/accelerate/pr_320/en/accelerator#accelerate.Accelerator.log"),u(Xe,"href","/docs/accelerate/pr_320/en/accelerator#accelerate.Accelerator.end_training"),u(re,"id","implementing-custom-trackers"),u(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(re,"href","#implementing-custom-trackers"),u(z,"class","relative group"),u(oe,"id","when-a-wrapper-cannot-work"),u(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(oe,"href","#when-a-wrapper-cannot-work"),u(M,"class","relative group")},m(e,c){t(document.head,P),p(e,tr,c),p(e,O,c),t(O,W),t(W,it),f(ne,it,null),t(O,pa),t(O,dt),t(dt,ua),p(e,rr,c),p(e,le,c),t(le,ma),t(le,Je),t(Je,ha),p(e,ar,c),p(e,I,c),t(I,G),t(G,pt),f(ce,pt,null),t(I,fa),t(I,ut),t(ut,ga),p(e,or,c),p(e,R,c),t(R,_a),t(R,mt),t(mt,va),t(R,ya),p(e,sr,c),p(e,b,c),f(ie,b,null),t(b,ba),t(b,q),t(q,ka),t(q,ht),t(ht,$a),t(q,wa),t(q,ft),t(ft,Ea),t(q,Ta),t(b,Aa),t(b,U),f(de,U,null),t(U,ja),t(U,pe),t(pe,xa),t(pe,gt),t(gt,Ca),t(pe,Da),t(b,La),t(b,H),f(ue,H,null),t(H,Pa),t(H,me),t(me,Oa),t(me,_t),t(_t,Ia),t(me,qa),t(b,Ba),t(b,F),f(he,F,null),t(F,Sa),t(F,fe),t(fe,za),t(fe,vt),t(vt,Na),t(fe,Ma),p(e,nr,c),p(e,k,c),f(ge,k,null),t(k,Va),t(k,B),t(B,Wa),t(B,yt),t(yt,Ga),t(B,Ra),t(B,bt),t(bt,Ua),t(B,Ha),t(k,Fa),t(k,J),f(_e,J,null),t(J,Ja),t(J,ve),t(ve,Ka),t(ve,kt),t(kt,Qa),t(ve,Xa),t(k,Ya),t(k,K),f(ye,K,null),t(K,Za),t(K,be),t(be,eo),t(be,$t),t($t,to),t(be,ro),t(k,ao),t(k,Q),f(ke,Q,null),t(Q,oo),t(Q,$e),t($e,so),t($e,wt),t(wt,no),t($e,lo),p(e,lr,c),p(e,y,c),f(we,y,null),t(y,co),t(y,S),t(S,io),t(S,Et),t(Et,po),t(S,uo),t(S,Tt),t(Tt,mo),t(S,ho),t(y,fo),t(y,At),t(At,go),t(y,_o),t(y,X),f(Ee,X,null),t(X,vo),t(X,Te),t(Te,yo),t(Te,jt),t(jt,bo),t(Te,ko),t(y,$o),t(y,Y),f(Ae,Y,null),t(Y,wo),t(Y,je),t(je,Eo),t(je,xt),t(xt,To),t(je,Ao),t(y,jo),t(y,Z),f(xe,Z,null),t(Z,xo),t(Z,Ce),t(Ce,Co),t(Ce,Ct),t(Ct,Do),t(Ce,Lo),p(e,cr,c),p(e,T,c),t(T,Po),t(T,Dt),t(Dt,Oo),t(T,Io),t(T,Lt),t(Lt,qo),t(T,Bo),p(e,ir,c),f(De,e,c),p(e,dr,c),p(e,ee,c),t(ee,So),t(ee,Ke),t(Ke,zo),t(ee,No),p(e,pr,c),f(Le,e,c),p(e,ur,c),p(e,A,c),t(A,Mo),t(A,Qe),t(Qe,Vo),t(A,Wo),t(A,Pt),t(Pt,Go),t(A,Ro),p(e,mr,c),f(Pe,e,c),p(e,hr,c),p(e,te,c),t(te,Uo),t(te,Xe),t(Xe,Ho),t(te,Fo),p(e,fr,c),f(Oe,e,c),p(e,gr,c),p(e,Ye,c),t(Ye,Jo),p(e,_r,c),f(Ie,e,c),p(e,vr,c),p(e,z,c),t(z,re),t(re,Ot),f(qe,Ot,null),t(z,Ko),t(z,It),t(It,Qo),p(e,yr,c),p(e,j,c),t(j,Xo),t(j,qt),t(qt,Yo),t(j,Zo),t(j,Bt),t(Bt,es),t(j,ts),p(e,br,c),p(e,x,c),t(x,Be),t(Be,St),t(St,rs),t(Be,as),t(Be,Se),t(Se,ze),t(ze,os),t(ze,zt),t(zt,ss),t(ze,ns),t(Se,ls),t(Se,Ne),t(Ne,cs),t(Ne,Nt),t(Nt,is),t(Ne,ds),t(x,ps),t(x,Me),t(Me,Mt),t(Mt,us),t(Me,ms),t(Me,Vt),t(Vt,Ve),t(Ve,hs),t(Ve,Wt),t(Wt,fs),t(Ve,gs),t(x,_s),t(x,We),t(We,Gt),t(Gt,vs),t(We,ys),t(We,Rt),t(Rt,N),t(N,bs),t(N,Ut),t(Ut,ks),t(N,$s),t(N,Ht),t(Ht,ws),t(N,Es),p(e,kr,c),p(e,Ze,c),t(Ze,Ts),p(e,$r,c),f(Ge,e,c),p(e,wr,c),p(e,$,c),t($,As),t($,Ft),t(Ft,js),t($,xs),t($,Jt),t(Jt,Cs),t($,Ds),t($,Kt),t(Kt,Ls),t($,Ps),p(e,Er,c),f(Re,e,c),p(e,Tr,c),p(e,ae,c),t(ae,Os),t(ae,Qt),t(Qt,Is),t(ae,qs),p(e,Ar,c),f(Ue,e,c),p(e,jr,c),p(e,M,c),t(M,oe),t(oe,Xt),f(He,Xt,null),t(M,Bs),t(M,Yt),t(Yt,Ss),p(e,xr,c),p(e,C,c),t(C,zs),t(C,Zt),t(Zt,Ns),t(C,Ms),t(C,er),t(er,Vs),t(C,Ws),p(e,Cr,c),f(Fe,e,c),Dr=!0},p:Yn,i(e){Dr||(g(ne.$$.fragment,e),g(ce.$$.fragment,e),g(ie.$$.fragment,e),g(de.$$.fragment,e),g(ue.$$.fragment,e),g(he.$$.fragment,e),g(ge.$$.fragment,e),g(_e.$$.fragment,e),g(ye.$$.fragment,e),g(ke.$$.fragment,e),g(we.$$.fragment,e),g(Ee.$$.fragment,e),g(Ae.$$.fragment,e),g(xe.$$.fragment,e),g(De.$$.fragment,e),g(Le.$$.fragment,e),g(Pe.$$.fragment,e),g(Oe.$$.fragment,e),g(Ie.$$.fragment,e),g(qe.$$.fragment,e),g(Ge.$$.fragment,e),g(Re.$$.fragment,e),g(Ue.$$.fragment,e),g(He.$$.fragment,e),g(Fe.$$.fragment,e),Dr=!0)},o(e){_(ne.$$.fragment,e),_(ce.$$.fragment,e),_(ie.$$.fragment,e),_(de.$$.fragment,e),_(ue.$$.fragment,e),_(he.$$.fragment,e),_(ge.$$.fragment,e),_(_e.$$.fragment,e),_(ye.$$.fragment,e),_(ke.$$.fragment,e),_(we.$$.fragment,e),_(Ee.$$.fragment,e),_(Ae.$$.fragment,e),_(xe.$$.fragment,e),_(De.$$.fragment,e),_(Le.$$.fragment,e),_(Pe.$$.fragment,e),_(Oe.$$.fragment,e),_(Ie.$$.fragment,e),_(qe.$$.fragment,e),_(Ge.$$.fragment,e),_(Re.$$.fragment,e),_(Ue.$$.fragment,e),_(He.$$.fragment,e),_(Fe.$$.fragment,e),Dr=!1},d(e){r(P),e&&r(tr),e&&r(O),v(ne),e&&r(rr),e&&r(le),e&&r(ar),e&&r(I),v(ce),e&&r(or),e&&r(R),e&&r(sr),e&&r(b),v(ie),v(de),v(ue),v(he),e&&r(nr),e&&r(k),v(ge),v(_e),v(ye),v(ke),e&&r(lr),e&&r(y),v(we),v(Ee),v(Ae),v(xe),e&&r(cr),e&&r(T),e&&r(ir),v(De,e),e&&r(dr),e&&r(ee),e&&r(pr),v(Le,e),e&&r(ur),e&&r(A),e&&r(mr),v(Pe,e),e&&r(hr),e&&r(te),e&&r(fr),v(Oe,e),e&&r(gr),e&&r(Ye),e&&r(_r),v(Ie,e),e&&r(vr),e&&r(z),v(qe),e&&r(yr),e&&r(j),e&&r(br),e&&r(x),e&&r(kr),e&&r(Ze),e&&r($r),v(Ge,e),e&&r(wr),e&&r($),e&&r(Er),v(Re,e),e&&r(Tr),e&&r(ae),e&&r(Ar),v(Ue,e),e&&r(jr),e&&r(M),v(He),e&&r(xr),e&&r(C),e&&r(Cr),v(Fe,e)}}}const tl={local:"tracking",sections:[{local:"accelerate.tracking.TensorBoardTracker",title:"Integrated Trackers"},{local:"implementing-custom-trackers",title:"Implementing Custom Trackers"},{local:"when-a-wrapper-cannot-work",title:"When a wrapper cannot work"}],title:"Tracking"};function rl(Rs){return Zn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ll extends Jn{constructor(P){super();Kn(this,P,rl,el,Qn,{})}}export{ll as default,tl as metadata};
