import{S as Kn,i as Vn,s as Wn,e as l,k as c,w as _,t as a,M as Zn,c as n,d as t,m as d,a as i,x as w,h as o,b as u,G as s,g as p,y,L as ei,q as k,o as g,B as E,v as si}from"../chunks/vendor-hf-doc-builder.js";import{I as Xt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as R}from"../chunks/CodeBlock-hf-doc-builder.js";function ti(Dl){let N,Qs,M,G,Oe,pe,Jt,Ie,Bt,Ks,C,Qt,Se,Kt,Vt,Ae,Wt,Zt,Vs,b,ea,Re,sa,ta,Ne,aa,oa,Me,la,na,Ws,h,ia,Fe,ra,pa,Le,ca,da,ze,ua,ha,Ye,fa,ma,He,_a,wa,Zs,ce,et,qe,ya,st,F,Ge,ka,ga,Ue,Ea,ba,tt,P,Xe,va,ja,Je,qa,$a,Be,Pa,Ta,at,L,Qe,Ca,xa,Ke,Da,Oa,ot,T,Ve,Ia,Sa,We,Aa,Ra,Ze,Na,Ma,lt,f,Fa,es,La,za,ss,Ya,Ha,ts,Ga,Ua,as,Xa,Ja,nt,U,Ba,os,Qa,Ka,it,de,rt,v,Va,ls,Wa,Za,ns,eo,so,is,to,ao,pt,ue,ct,$e,oo,dt,z,X,rs,he,lo,ps,no,ut,x,io,cs,ro,po,ds,co,uo,ht,fe,ft,J,ho,us,fo,mo,mt,me,_t,Y,B,hs,_e,_o,fs,wo,wt,Q,yo,ms,ko,go,yt,we,kt,K,Eo,_s,bo,vo,gt,ye,Et,V,jo,ws,qo,$o,bt,ke,vt,D,Po,ys,To,Co,ks,xo,Do,jt,ge,qt,m,Oo,gs,Io,So,Es,Ao,Ro,bs,No,Mo,vs,Fo,Lo,$t,Ee,Pt,H,W,js,be,zo,qs,Yo,Tt,O,Ho,$s,Go,Uo,Ps,Xo,Jo,Ct,Z,Bo,Ts,Qo,Ko,xt,j,Vo,Cs,Wo,Zo,xs,el,sl,Ds,tl,al,Dt,I,ol,Os,ll,nl,Is,il,rl,Ot,ee,pl,Ss,cl,dl,It,q,se,As,ul,hl,Rs,fl,ml,_l,te,Ns,wl,yl,Ms,kl,gl,El,ae,Fs,bl,vl,Ls,jl,ql,$l,oe,zs,Pl,Tl,Ys,Cl,xl,St;return pe=new Xt({}),ce=new R({props:{code:`from transformers import Pipeline


class MyPipeline(Pipeline):
    def _sanitize_parameters(self, **kwargs):
        preprocess_kwargs = {}
        if "maybe_arg" in kwargs:
            preprocess_kwargs["maybe_arg"] = kwargs["maybe_arg"]
        return preprocess_kwargs, {}, {}

    def preprocess(self, inputs, maybe_arg=2):
        model_input = Tensor(inputs["input_ids"])
        return {"model_input": model_input}

    def _forward(self, model_inputs):
        # model_inputs == {"model_input": model_input}
        outputs = self.model(**model_inputs)
        # Maybe {"logits": Tensor(...)}
        return outputs

    def postprocess(self, model_outputs):
        best_class = model_outputs["logits"].softmax(-1)
        return best_class`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Pipeline


<span class="hljs-keyword">class</span> <span class="hljs-title class_">MyPipeline</span>(<span class="hljs-title class_ inherited__">Pipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
        preprocess_kwargs = {}
        <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;maybe_arg&quot;</span> <span class="hljs-keyword">in</span> kwargs:
            preprocess_kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>] = kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>]
        <span class="hljs-keyword">return</span> preprocess_kwargs, {}, {}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess</span>(<span class="hljs-params">self, inputs, maybe_arg=<span class="hljs-number">2</span></span>):
        model_input = Tensor(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;model_input&quot;</span>: model_input}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_forward</span>(<span class="hljs-params">self, model_inputs</span>):
        <span class="hljs-comment"># model_inputs == {&quot;model_input&quot;: model_input}</span>
        outputs = self.model(**model_inputs)
        <span class="hljs-comment"># Maybe {&quot;logits&quot;: Tensor(...)}</span>
        <span class="hljs-keyword">return</span> outputs

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs</span>):
        best_class = model_outputs[<span class="hljs-string">&quot;logits&quot;</span>].softmax(-<span class="hljs-number">1</span>)
        <span class="hljs-keyword">return</span> best_class`}}),de=new R({props:{code:`pipe = pipeline("my-new-task")
pipe("This is a test")

pipe("This is a test", top_k=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>pipe = pipeline(<span class="hljs-string">&quot;my-new-task&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;3-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.05</span>}
{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;4-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;5-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}]

<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>, top_k=<span class="hljs-number">2</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}]`}}),ue=new R({props:{code:`def postprocess(self, model_outputs, top_k=5):
    best_class = model_outputs["logits"].softmax(-1)
    # Add logic to handle top_k
    return best_class


def _sanitize_parameters(self, **kwargs):
    preprocess_kwargs = {}
    if "maybe_arg" in kwargs:
        preprocess_kwargs["maybe_arg"] = kwargs["maybe_arg"]

    postprocess_kwargs = {}
    if "top_k" in kwargs:
        preprocess_kwargs["top_k"] = kwargs["top_k"]
    return preprocess_kwargs, {}, postprocess_kwargs`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs, top_k=<span class="hljs-number">5</span></span>):
    best_class = model_outputs[<span class="hljs-string">&quot;logits&quot;</span>].softmax(-<span class="hljs-number">1</span>)
    <span class="hljs-comment"># Add logic to handle top_k</span>
    <span class="hljs-keyword">return</span> best_class


<span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
    preprocess_kwargs = {}
    <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;maybe_arg&quot;</span> <span class="hljs-keyword">in</span> kwargs:
        preprocess_kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>] = kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>]

    postprocess_kwargs = {}
    <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;top_k&quot;</span> <span class="hljs-keyword">in</span> kwargs:
        preprocess_kwargs[<span class="hljs-string">&quot;top_k&quot;</span>] = kwargs[<span class="hljs-string">&quot;top_k&quot;</span>]
    <span class="hljs-keyword">return</span> preprocess_kwargs, {}, postprocess_kwargs`}}),he=new Xt({}),fe=new R({props:{code:`from transformers.pipelines import PIPELINE_REGISTRY

PIPELINE_REGISTRY.register_pipeline(
    "new-task",
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
)`,highlighted:`<span class="hljs-keyword">from</span> transformers.pipelines <span class="hljs-keyword">import</span> PIPELINE_REGISTRY

PIPELINE_REGISTRY.register_pipeline(
    <span class="hljs-string">&quot;new-task&quot;</span>,
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
)`}}),me=new R({props:{code:`PIPELINE_REGISTRY.register_pipeline(
    "new-task",
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
    default={"pt": ("user/awesome_model", "abcdef")},
    type="text",  # current support type: text, audio, image, multimodal
)`,highlighted:`PIPELINE_REGISTRY.register_pipeline(
    <span class="hljs-string">&quot;new-task&quot;</span>,
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
    default={<span class="hljs-string">&quot;pt&quot;</span>: (<span class="hljs-string">&quot;user/awesome_model&quot;</span>, <span class="hljs-string">&quot;abcdef&quot;</span>)},
    <span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;text&quot;</span>,  <span class="hljs-comment"># current support type: text, audio, image, multimodal</span>
)`}}),_e=new Xt({}),we=new R({props:{code:`import numpy as np

from transformers import Pipeline


def softmax(outputs):
    maxes = np.max(outputs, axis=-1, keepdims=True)
    shifted_exp = np.exp(outputs - maxes)
    return shifted_exp / shifted_exp.sum(axis=-1, keepdims=True)


class PairClassificationPipeline(Pipeline):
    def _sanitize_parameters(self, **kwargs):
        preprocess_kwargs = {}
        if "second_text" in kwargs:
            preprocess_kwargs["second_text"] = kwargs["second_text"]
        return preprocess_kwargs, {}, {}

    def preprocess(self, text, second_text=None):
        return self.tokenizer(text, text_pair=second_text, return_tensors=self.framework)

    def _forward(self, model_inputs):
        return self.model(**model_inputs)

    def postprocess(self, model_outputs):
        logits = model_outputs.logits[0].numpy()
        probabilities = softmax(logits)

        best_class = np.argmax(probabilities)
        label = self.model.config.id2label[best_class]
        score = probabilities[best_class].item()
        logits = logits.tolist()
        return {"label": label, "score": score, "logits": logits}`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Pipeline


<span class="hljs-keyword">def</span> <span class="hljs-title function_">softmax</span>(<span class="hljs-params">outputs</span>):
    maxes = np.<span class="hljs-built_in">max</span>(outputs, axis=-<span class="hljs-number">1</span>, keepdims=<span class="hljs-literal">True</span>)
    shifted_exp = np.exp(outputs - maxes)
    <span class="hljs-keyword">return</span> shifted_exp / shifted_exp.<span class="hljs-built_in">sum</span>(axis=-<span class="hljs-number">1</span>, keepdims=<span class="hljs-literal">True</span>)


<span class="hljs-keyword">class</span> <span class="hljs-title class_">PairClassificationPipeline</span>(<span class="hljs-title class_ inherited__">Pipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
        preprocess_kwargs = {}
        <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;second_text&quot;</span> <span class="hljs-keyword">in</span> kwargs:
            preprocess_kwargs[<span class="hljs-string">&quot;second_text&quot;</span>] = kwargs[<span class="hljs-string">&quot;second_text&quot;</span>]
        <span class="hljs-keyword">return</span> preprocess_kwargs, {}, {}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess</span>(<span class="hljs-params">self, text, second_text=<span class="hljs-literal">None</span></span>):
        <span class="hljs-keyword">return</span> self.tokenizer(text, text_pair=second_text, return_tensors=self.framework)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_forward</span>(<span class="hljs-params">self, model_inputs</span>):
        <span class="hljs-keyword">return</span> self.model(**model_inputs)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs</span>):
        logits = model_outputs.logits[<span class="hljs-number">0</span>].numpy()
        probabilities = softmax(logits)

        best_class = np.argmax(probabilities)
        label = self.model.config.id2label[best_class]
        score = probabilities[best_class].item()
        logits = logits.tolist()
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;label&quot;</span>: label, <span class="hljs-string">&quot;score&quot;</span>: score, <span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),ye=new R({props:{code:`from pair_classification import PairClassificationPipeline
from transformers.pipelines import PIPELINE_REGISTRY
from transformers import AutoModelForSequenceClassification, TFAutoModelForSequenceClassification

PIPELINE_REGISTRY.register_pipeline(
    "pair-classification",
    pipeline_class=PairClassificationPipeline,
    pt_model=AutoModelForSequenceClassification,
    tf_model=TFAutoModelForSequenceClassification,
)`,highlighted:`<span class="hljs-keyword">from</span> pair_classification <span class="hljs-keyword">import</span> PairClassificationPipeline
<span class="hljs-keyword">from</span> transformers.pipelines <span class="hljs-keyword">import</span> PIPELINE_REGISTRY
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification, TFAutoModelForSequenceClassification

PIPELINE_REGISTRY.register_pipeline(
    <span class="hljs-string">&quot;pair-classification&quot;</span>,
    pipeline_class=PairClassificationPipeline,
    pt_model=AutoModelForSequenceClassification,
    tf_model=TFAutoModelForSequenceClassification,
)`}}),ke=new R({props:{code:`from transformers import pipeline

classifier = pipeline("pair-classification", model="sgugger/finetuned-bert-mrpc")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(<span class="hljs-string">&quot;pair-classification&quot;</span>, model=<span class="hljs-string">&quot;sgugger/finetuned-bert-mrpc&quot;</span>)`}}),ge=new R({props:{code:`from huggingface_hub import Repository

repo = Repository("test-dynamic-pipeline", clone_from="{your_username}/test-dynamic-pipeline")
classifier.save_pretrained("test-dynamic-pipeline")
repo.push_to_hub()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository

repo = Repository(<span class="hljs-string">&quot;test-dynamic-pipeline&quot;</span>, clone_from=<span class="hljs-string">&quot;{your_username}/test-dynamic-pipeline&quot;</span>)
classifier.save_pretrained(<span class="hljs-string">&quot;test-dynamic-pipeline&quot;</span>)
repo.push_to_hub()`}}),Ee=new R({props:{code:`from transformers import pipeline

classifier = pipeline(model="{your_username}/test-dynamic-pipeline", trust_remote_code=True)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(model=<span class="hljs-string">&quot;{your_username}/test-dynamic-pipeline&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),be=new Xt({}),{c(){N=l("meta"),Qs=c(),M=l("h1"),G=l("a"),Oe=l("span"),_(pe.$$.fragment),Jt=c(),Ie=l("span"),Bt=a("How to create a custom pipeline?"),Ks=c(),C=l("p"),Qt=a(`First and foremost, you need to decide the raw entries the pipeline will be able to take. It can be strings, raw bytes,
dictionaries or whatever seems to be the most likely desired input. Try to keep these inputs as pure Python as possible
as it makes compatibility easier (even through other languages via JSON). Those will be the `),Se=l("code"),Kt=a("inputs"),Vt=a(` of the
pipeline (`),Ae=l("code"),Wt=a("preprocess"),Zt=a(")."),Vs=c(),b=l("p"),ea=a("Then define the "),Re=l("code"),sa=a("outputs"),ta=a(". Same policy as the "),Ne=l("code"),aa=a("inputs"),oa=a(`. The simpler, the better. Those will be the outputs of
`),Me=l("code"),la=a("postprocess"),na=a(" method."),Ws=c(),h=l("p"),ia=a("Start by inheriting the base class "),Fe=l("code"),ra=a("Pipeline"),pa=a(". with the 4 methods needed to implement "),Le=l("code"),ca=a("preprocess"),da=a(`,
`),ze=l("code"),ua=a("_forward"),ha=a(", "),Ye=l("code"),fa=a("postprocess"),ma=a(" and "),He=l("code"),_a=a("_sanitize_parameters"),wa=a("."),Zs=c(),_(ce.$$.fragment),et=c(),qe=l("p"),ya=a(`The structure of this breakdown is to support relatively seamless support for CPU/GPU, while supporting doing
pre/postprocessing on the CPU on different threads`),st=c(),F=l("p"),Ge=l("code"),ka=a("preprocess"),ga=a(` will take the originally defined inputs, and turn them into something feedable to the model. It might
contain more information and is usually a `),Ue=l("code"),Ea=a("Dict"),ba=a("."),tt=c(),P=l("p"),Xe=l("code"),va=a("_forward"),ja=a(" is the implementation detail and is not meant to be called directly. "),Je=l("code"),qa=a("forward"),$a=a(` is the preferred
called method as it contains safeguards to make sure everything is working on the expected device. If anything is
linked to a real model it belongs in the `),Be=l("code"),Pa=a("_forward"),Ta=a(" method, anything else is in the preprocess/postprocess."),at=c(),L=l("p"),Qe=l("code"),Ca=a("postprocess"),xa=a(" methods will take the output of "),Ke=l("code"),Da=a("_forward"),Oa=a(` and turn it into the final output that were decided
earlier.`),ot=c(),T=l("p"),Ve=l("code"),Ia=a("_sanitize_parameters"),Sa=a(` exists to allow users to pass any parameters whenever they wish, be it at initialization
time `),We=l("code"),Aa=a("pipeline(...., maybe_arg=4)"),Ra=a(" or at call time "),Ze=l("code"),Na=a("pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),Ma=a("."),lt=c(),f=l("p"),Fa=a("The returns of "),es=l("code"),La=a("_sanitize_parameters"),za=a(" are the 3 dicts of kwargs that will be passed directly to "),ss=l("code"),Ya=a("preprocess"),Ha=a(`,
`),ts=l("code"),Ga=a("_forward"),Ua=a(" and "),as=l("code"),Xa=a("postprocess"),Ja=a(`. Don\u2019t fill anything if the caller didn\u2019t call with any extra parameter. That
allows to keep the default arguments in the function definition which is always more \u201Cnatural\u201D.`),nt=c(),U=l("p"),Ba=a("A classic example would be a "),os=l("code"),Qa=a("top_k"),Ka=a(" argument in the post processing in classification tasks."),it=c(),_(de.$$.fragment),rt=c(),v=l("p"),Va=a("In order to achieve that, we\u2019ll update our "),ls=l("code"),Wa=a("postprocess"),Za=a(" method with a default parameter to "),ns=l("code"),eo=a("5"),so=a(`. and edit
`),is=l("code"),to=a("_sanitize_parameters"),ao=a(" to allow this new parameter."),pt=c(),_(ue.$$.fragment),ct=c(),$e=l("p"),oo=a(`Try to keep the inputs/outputs very simple and ideally JSON-serializable as it makes the pipeline usage very easy
without requiring users to understand new kind of objects. It\u2019s also relatively common to support many different types
of arguments for ease of use (audio files, can be filenames, URLs or pure bytes)`),dt=c(),z=l("h2"),X=l("a"),rs=l("span"),_(he.$$.fragment),lo=c(),ps=l("span"),no=a("Adding it to the list of supported tasks"),ut=c(),x=l("p"),io=a("To register your "),cs=l("code"),ro=a("new-task"),po=a(" to the list of supported tasks, you have to add it to the "),ds=l("code"),co=a("PIPELINE_REGISTRY"),uo=a(":"),ht=c(),_(fe.$$.fragment),ft=c(),J=l("p"),ho=a("You can specify a default model if you want, in which case it should come with a specific revision (which can be the name of a branch or a commit hash, here we took "),us=l("code"),fo=a('"abcdef"'),mo=a(") as well was the type:"),mt=c(),_(me.$$.fragment),_t=c(),Y=l("h2"),B=l("a"),hs=l("span"),_(_e.$$.fragment),_o=c(),fs=l("span"),wo=a("Share your pipeline on the Hub"),wt=c(),Q=l("p"),yo=a("To share your custom pipeline on the Hub, you just have to save the custom code of your "),ms=l("code"),ko=a("Pipeline"),go=a(` subclass in a
python file. For instance, let\u2019s say we want to use a custom pipeline for sentence pair classification like this:`),yt=c(),_(we.$$.fragment),kt=c(),K=l("p"),Eo=a(`The implementation is framework agnostic, and will work for PyTorch and TensorFlow models. If we have saved this in
a file named `),_s=l("code"),bo=a("pair_classification.py"),vo=a(", we can then import it and register it like this:"),gt=c(),_(ye.$$.fragment),Et=c(),V=l("p"),jo=a("Once this is done, we can use it with a pretrained model. For instance "),ws=l("code"),qo=a("sgugger/finetuned-bert-mrpc"),$o=a(` has been
fine-tuned on the MRPC dataset, which classifies pairs of sentences as paraphrases or not.`),bt=c(),_(ke.$$.fragment),vt=c(),D=l("p"),Po=a("Then we can share it on the Hub by using the "),ys=l("code"),To=a("save_pretrained"),Co=a(" method in a "),ks=l("code"),xo=a("Repository"),Do=a(":"),jt=c(),_(ge.$$.fragment),qt=c(),m=l("p"),Oo=a("This will copy the file where you defined "),gs=l("code"),Io=a("PairClassificationPipeline"),So=a(" inside the folder "),Es=l("code"),Ao=a('"test-dynamic-pipeline"'),Ro=a(`,
along with saving the model and tokenizer of the pipeline, before pushing everything in the repository
`),bs=l("code"),No=a("{your_username}/test-dynamic-pipeline"),Mo=a(`. After that anyone can use it as long as they provide the option
`),vs=l("code"),Fo=a("trust_remote_code=True"),Lo=a(":"),$t=c(),_(Ee.$$.fragment),Pt=c(),H=l("h2"),W=l("a"),js=l("span"),_(be.$$.fragment),zo=c(),qs=l("span"),Yo=a("Add the pipeline to Transformers"),Tt=c(),O=l("p"),Ho=a("If you want to contribute your pipeline to Transformers, you will need to add a new module in the "),$s=l("code"),Go=a("pipelines"),Uo=a(` submodule
with the code of your pipeline, then add it in the list of tasks defined in `),Ps=l("code"),Xo=a("pipelines/__init__.py"),Jo=a("."),Ct=c(),Z=l("p"),Bo=a("Then you will need to add tests. Create a new file "),Ts=l("code"),Qo=a("tests/test_pipelines_MY_PIPELINE.py"),Ko=a(" with example with the other tests."),xt=c(),j=l("p"),Vo=a("The "),Cs=l("code"),Wo=a("run_pipeline_test"),Zo=a(` function will be very generic and run on small random models on every possible
architecture as defined by `),xs=l("code"),el=a("model_mapping"),sl=a(" and "),Ds=l("code"),tl=a("tf_model_mapping"),al=a("."),Dt=c(),I=l("p"),ol=a(`This is very important to test future compatibility, meaning if someone adds a new model for
`),Os=l("code"),ll=a("XXXForQuestionAnswering"),nl=a(` then the pipeline test will attempt to run on it. Because the models are random it\u2019s
impossible to check for actual values, that\u2019s why There is a helper `),Is=l("code"),il=a("ANY"),rl=a(` that will simply attempt to match the
output of the pipeline TYPE.`),Ot=c(),ee=l("p"),pl=a("You also "),Ss=l("em"),cl=a("need"),dl=a(" to implement 2 (ideally 4) tests."),It=c(),q=l("ul"),se=l("li"),As=l("code"),ul=a("test_small_model_pt"),hl=a(` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),Rs=l("code"),fl=a("test_small_model_tf"),ml=a("."),_l=c(),te=l("li"),Ns=l("code"),wl=a("test_small_model_tf"),yl=a(` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),Ms=l("code"),kl=a("test_small_model_pt"),gl=a("."),El=c(),ae=l("li"),Fs=l("code"),bl=a("test_large_model_pt"),vl=a(" ("),Ls=l("code"),jl=a("optional"),ql=a(`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),$l=c(),oe=l("li"),zs=l("code"),Pl=a("test_large_model_tf"),Tl=a(" ("),Ys=l("code"),Cl=a("optional"),xl=a(`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),this.h()},l(e){const r=Zn('[data-svelte="svelte-1phssyn"]',document.head);N=n(r,"META",{name:!0,content:!0}),r.forEach(t),Qs=d(e),M=n(e,"H1",{class:!0});var At=i(M);G=n(At,"A",{id:!0,class:!0,href:!0});var Ol=i(G);Oe=n(Ol,"SPAN",{});var Il=i(Oe);w(pe.$$.fragment,Il),Il.forEach(t),Ol.forEach(t),Jt=d(At),Ie=n(At,"SPAN",{});var Sl=i(Ie);Bt=o(Sl,"How to create a custom pipeline?"),Sl.forEach(t),At.forEach(t),Ks=d(e),C=n(e,"P",{});var Pe=i(C);Qt=o(Pe,`First and foremost, you need to decide the raw entries the pipeline will be able to take. It can be strings, raw bytes,
dictionaries or whatever seems to be the most likely desired input. Try to keep these inputs as pure Python as possible
as it makes compatibility easier (even through other languages via JSON). Those will be the `),Se=n(Pe,"CODE",{});var Al=i(Se);Kt=o(Al,"inputs"),Al.forEach(t),Vt=o(Pe,` of the
pipeline (`),Ae=n(Pe,"CODE",{});var Rl=i(Ae);Wt=o(Rl,"preprocess"),Rl.forEach(t),Zt=o(Pe,")."),Pe.forEach(t),Vs=d(e),b=n(e,"P",{});var le=i(b);ea=o(le,"Then define the "),Re=n(le,"CODE",{});var Nl=i(Re);sa=o(Nl,"outputs"),Nl.forEach(t),ta=o(le,". Same policy as the "),Ne=n(le,"CODE",{});var Ml=i(Ne);aa=o(Ml,"inputs"),Ml.forEach(t),oa=o(le,`. The simpler, the better. Those will be the outputs of
`),Me=n(le,"CODE",{});var Fl=i(Me);la=o(Fl,"postprocess"),Fl.forEach(t),na=o(le," method."),le.forEach(t),Ws=d(e),h=n(e,"P",{});var $=i(h);ia=o($,"Start by inheriting the base class "),Fe=n($,"CODE",{});var Ll=i(Fe);ra=o(Ll,"Pipeline"),Ll.forEach(t),pa=o($,". with the 4 methods needed to implement "),Le=n($,"CODE",{});var zl=i(Le);ca=o(zl,"preprocess"),zl.forEach(t),da=o($,`,
`),ze=n($,"CODE",{});var Yl=i(ze);ua=o(Yl,"_forward"),Yl.forEach(t),ha=o($,", "),Ye=n($,"CODE",{});var Hl=i(Ye);fa=o(Hl,"postprocess"),Hl.forEach(t),ma=o($," and "),He=n($,"CODE",{});var Gl=i(He);_a=o(Gl,"_sanitize_parameters"),Gl.forEach(t),wa=o($,"."),$.forEach(t),Zs=d(e),w(ce.$$.fragment,e),et=d(e),qe=n(e,"P",{});var Ul=i(qe);ya=o(Ul,`The structure of this breakdown is to support relatively seamless support for CPU/GPU, while supporting doing
pre/postprocessing on the CPU on different threads`),Ul.forEach(t),st=d(e),F=n(e,"P",{});var Hs=i(F);Ge=n(Hs,"CODE",{});var Xl=i(Ge);ka=o(Xl,"preprocess"),Xl.forEach(t),ga=o(Hs,` will take the originally defined inputs, and turn them into something feedable to the model. It might
contain more information and is usually a `),Ue=n(Hs,"CODE",{});var Jl=i(Ue);Ea=o(Jl,"Dict"),Jl.forEach(t),ba=o(Hs,"."),Hs.forEach(t),tt=d(e),P=n(e,"P",{});var ve=i(P);Xe=n(ve,"CODE",{});var Bl=i(Xe);va=o(Bl,"_forward"),Bl.forEach(t),ja=o(ve," is the implementation detail and is not meant to be called directly. "),Je=n(ve,"CODE",{});var Ql=i(Je);qa=o(Ql,"forward"),Ql.forEach(t),$a=o(ve,` is the preferred
called method as it contains safeguards to make sure everything is working on the expected device. If anything is
linked to a real model it belongs in the `),Be=n(ve,"CODE",{});var Kl=i(Be);Pa=o(Kl,"_forward"),Kl.forEach(t),Ta=o(ve," method, anything else is in the preprocess/postprocess."),ve.forEach(t),at=d(e),L=n(e,"P",{});var Gs=i(L);Qe=n(Gs,"CODE",{});var Vl=i(Qe);Ca=o(Vl,"postprocess"),Vl.forEach(t),xa=o(Gs," methods will take the output of "),Ke=n(Gs,"CODE",{});var Wl=i(Ke);Da=o(Wl,"_forward"),Wl.forEach(t),Oa=o(Gs,` and turn it into the final output that were decided
earlier.`),Gs.forEach(t),ot=d(e),T=n(e,"P",{});var je=i(T);Ve=n(je,"CODE",{});var Zl=i(Ve);Ia=o(Zl,"_sanitize_parameters"),Zl.forEach(t),Sa=o(je,` exists to allow users to pass any parameters whenever they wish, be it at initialization
time `),We=n(je,"CODE",{});var en=i(We);Aa=o(en,"pipeline(...., maybe_arg=4)"),en.forEach(t),Ra=o(je," or at call time "),Ze=n(je,"CODE",{});var sn=i(Ze);Na=o(sn,"pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),sn.forEach(t),Ma=o(je,"."),je.forEach(t),lt=d(e),f=n(e,"P",{});var S=i(f);Fa=o(S,"The returns of "),es=n(S,"CODE",{});var tn=i(es);La=o(tn,"_sanitize_parameters"),tn.forEach(t),za=o(S," are the 3 dicts of kwargs that will be passed directly to "),ss=n(S,"CODE",{});var an=i(ss);Ya=o(an,"preprocess"),an.forEach(t),Ha=o(S,`,
`),ts=n(S,"CODE",{});var on=i(ts);Ga=o(on,"_forward"),on.forEach(t),Ua=o(S," and "),as=n(S,"CODE",{});var ln=i(as);Xa=o(ln,"postprocess"),ln.forEach(t),Ja=o(S,`. Don\u2019t fill anything if the caller didn\u2019t call with any extra parameter. That
allows to keep the default arguments in the function definition which is always more \u201Cnatural\u201D.`),S.forEach(t),nt=d(e),U=n(e,"P",{});var Rt=i(U);Ba=o(Rt,"A classic example would be a "),os=n(Rt,"CODE",{});var nn=i(os);Qa=o(nn,"top_k"),nn.forEach(t),Ka=o(Rt," argument in the post processing in classification tasks."),Rt.forEach(t),it=d(e),w(de.$$.fragment,e),rt=d(e),v=n(e,"P",{});var ne=i(v);Va=o(ne,"In order to achieve that, we\u2019ll update our "),ls=n(ne,"CODE",{});var rn=i(ls);Wa=o(rn,"postprocess"),rn.forEach(t),Za=o(ne," method with a default parameter to "),ns=n(ne,"CODE",{});var pn=i(ns);eo=o(pn,"5"),pn.forEach(t),so=o(ne,`. and edit
`),is=n(ne,"CODE",{});var cn=i(is);to=o(cn,"_sanitize_parameters"),cn.forEach(t),ao=o(ne," to allow this new parameter."),ne.forEach(t),pt=d(e),w(ue.$$.fragment,e),ct=d(e),$e=n(e,"P",{});var dn=i($e);oo=o(dn,`Try to keep the inputs/outputs very simple and ideally JSON-serializable as it makes the pipeline usage very easy
without requiring users to understand new kind of objects. It\u2019s also relatively common to support many different types
of arguments for ease of use (audio files, can be filenames, URLs or pure bytes)`),dn.forEach(t),dt=d(e),z=n(e,"H2",{class:!0});var Nt=i(z);X=n(Nt,"A",{id:!0,class:!0,href:!0});var un=i(X);rs=n(un,"SPAN",{});var hn=i(rs);w(he.$$.fragment,hn),hn.forEach(t),un.forEach(t),lo=d(Nt),ps=n(Nt,"SPAN",{});var fn=i(ps);no=o(fn,"Adding it to the list of supported tasks"),fn.forEach(t),Nt.forEach(t),ut=d(e),x=n(e,"P",{});var Te=i(x);io=o(Te,"To register your "),cs=n(Te,"CODE",{});var mn=i(cs);ro=o(mn,"new-task"),mn.forEach(t),po=o(Te," to the list of supported tasks, you have to add it to the "),ds=n(Te,"CODE",{});var _n=i(ds);co=o(_n,"PIPELINE_REGISTRY"),_n.forEach(t),uo=o(Te,":"),Te.forEach(t),ht=d(e),w(fe.$$.fragment,e),ft=d(e),J=n(e,"P",{});var Mt=i(J);ho=o(Mt,"You can specify a default model if you want, in which case it should come with a specific revision (which can be the name of a branch or a commit hash, here we took "),us=n(Mt,"CODE",{});var wn=i(us);fo=o(wn,'"abcdef"'),wn.forEach(t),mo=o(Mt,") as well was the type:"),Mt.forEach(t),mt=d(e),w(me.$$.fragment,e),_t=d(e),Y=n(e,"H2",{class:!0});var Ft=i(Y);B=n(Ft,"A",{id:!0,class:!0,href:!0});var yn=i(B);hs=n(yn,"SPAN",{});var kn=i(hs);w(_e.$$.fragment,kn),kn.forEach(t),yn.forEach(t),_o=d(Ft),fs=n(Ft,"SPAN",{});var gn=i(fs);wo=o(gn,"Share your pipeline on the Hub"),gn.forEach(t),Ft.forEach(t),wt=d(e),Q=n(e,"P",{});var Lt=i(Q);yo=o(Lt,"To share your custom pipeline on the Hub, you just have to save the custom code of your "),ms=n(Lt,"CODE",{});var En=i(ms);ko=o(En,"Pipeline"),En.forEach(t),go=o(Lt,` subclass in a
python file. For instance, let\u2019s say we want to use a custom pipeline for sentence pair classification like this:`),Lt.forEach(t),yt=d(e),w(we.$$.fragment,e),kt=d(e),K=n(e,"P",{});var zt=i(K);Eo=o(zt,`The implementation is framework agnostic, and will work for PyTorch and TensorFlow models. If we have saved this in
a file named `),_s=n(zt,"CODE",{});var bn=i(_s);bo=o(bn,"pair_classification.py"),bn.forEach(t),vo=o(zt,", we can then import it and register it like this:"),zt.forEach(t),gt=d(e),w(ye.$$.fragment,e),Et=d(e),V=n(e,"P",{});var Yt=i(V);jo=o(Yt,"Once this is done, we can use it with a pretrained model. For instance "),ws=n(Yt,"CODE",{});var vn=i(ws);qo=o(vn,"sgugger/finetuned-bert-mrpc"),vn.forEach(t),$o=o(Yt,` has been
fine-tuned on the MRPC dataset, which classifies pairs of sentences as paraphrases or not.`),Yt.forEach(t),bt=d(e),w(ke.$$.fragment,e),vt=d(e),D=n(e,"P",{});var Ce=i(D);Po=o(Ce,"Then we can share it on the Hub by using the "),ys=n(Ce,"CODE",{});var jn=i(ys);To=o(jn,"save_pretrained"),jn.forEach(t),Co=o(Ce," method in a "),ks=n(Ce,"CODE",{});var qn=i(ks);xo=o(qn,"Repository"),qn.forEach(t),Do=o(Ce,":"),Ce.forEach(t),jt=d(e),w(ge.$$.fragment,e),qt=d(e),m=n(e,"P",{});var A=i(m);Oo=o(A,"This will copy the file where you defined "),gs=n(A,"CODE",{});var $n=i(gs);Io=o($n,"PairClassificationPipeline"),$n.forEach(t),So=o(A," inside the folder "),Es=n(A,"CODE",{});var Pn=i(Es);Ao=o(Pn,'"test-dynamic-pipeline"'),Pn.forEach(t),Ro=o(A,`,
along with saving the model and tokenizer of the pipeline, before pushing everything in the repository
`),bs=n(A,"CODE",{});var Tn=i(bs);No=o(Tn,"{your_username}/test-dynamic-pipeline"),Tn.forEach(t),Mo=o(A,`. After that anyone can use it as long as they provide the option
`),vs=n(A,"CODE",{});var Cn=i(vs);Fo=o(Cn,"trust_remote_code=True"),Cn.forEach(t),Lo=o(A,":"),A.forEach(t),$t=d(e),w(Ee.$$.fragment,e),Pt=d(e),H=n(e,"H2",{class:!0});var Ht=i(H);W=n(Ht,"A",{id:!0,class:!0,href:!0});var xn=i(W);js=n(xn,"SPAN",{});var Dn=i(js);w(be.$$.fragment,Dn),Dn.forEach(t),xn.forEach(t),zo=d(Ht),qs=n(Ht,"SPAN",{});var On=i(qs);Yo=o(On,"Add the pipeline to Transformers"),On.forEach(t),Ht.forEach(t),Tt=d(e),O=n(e,"P",{});var xe=i(O);Ho=o(xe,"If you want to contribute your pipeline to Transformers, you will need to add a new module in the "),$s=n(xe,"CODE",{});var In=i($s);Go=o(In,"pipelines"),In.forEach(t),Uo=o(xe,` submodule
with the code of your pipeline, then add it in the list of tasks defined in `),Ps=n(xe,"CODE",{});var Sn=i(Ps);Xo=o(Sn,"pipelines/__init__.py"),Sn.forEach(t),Jo=o(xe,"."),xe.forEach(t),Ct=d(e),Z=n(e,"P",{});var Gt=i(Z);Bo=o(Gt,"Then you will need to add tests. Create a new file "),Ts=n(Gt,"CODE",{});var An=i(Ts);Qo=o(An,"tests/test_pipelines_MY_PIPELINE.py"),An.forEach(t),Ko=o(Gt," with example with the other tests."),Gt.forEach(t),xt=d(e),j=n(e,"P",{});var ie=i(j);Vo=o(ie,"The "),Cs=n(ie,"CODE",{});var Rn=i(Cs);Wo=o(Rn,"run_pipeline_test"),Rn.forEach(t),Zo=o(ie,` function will be very generic and run on small random models on every possible
architecture as defined by `),xs=n(ie,"CODE",{});var Nn=i(xs);el=o(Nn,"model_mapping"),Nn.forEach(t),sl=o(ie," and "),Ds=n(ie,"CODE",{});var Mn=i(Ds);tl=o(Mn,"tf_model_mapping"),Mn.forEach(t),al=o(ie,"."),ie.forEach(t),Dt=d(e),I=n(e,"P",{});var De=i(I);ol=o(De,`This is very important to test future compatibility, meaning if someone adds a new model for
`),Os=n(De,"CODE",{});var Fn=i(Os);ll=o(Fn,"XXXForQuestionAnswering"),Fn.forEach(t),nl=o(De,` then the pipeline test will attempt to run on it. Because the models are random it\u2019s
impossible to check for actual values, that\u2019s why There is a helper `),Is=n(De,"CODE",{});var Ln=i(Is);il=o(Ln,"ANY"),Ln.forEach(t),rl=o(De,` that will simply attempt to match the
output of the pipeline TYPE.`),De.forEach(t),Ot=d(e),ee=n(e,"P",{});var Ut=i(ee);pl=o(Ut,"You also "),Ss=n(Ut,"EM",{});var zn=i(Ss);cl=o(zn,"need"),zn.forEach(t),dl=o(Ut," to implement 2 (ideally 4) tests."),Ut.forEach(t),It=d(e),q=n(e,"UL",{});var re=i(q);se=n(re,"LI",{});var Us=i(se);As=n(Us,"CODE",{});var Yn=i(As);ul=o(Yn,"test_small_model_pt"),Yn.forEach(t),hl=o(Us,` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),Rs=n(Us,"CODE",{});var Hn=i(Rs);fl=o(Hn,"test_small_model_tf"),Hn.forEach(t),ml=o(Us,"."),Us.forEach(t),_l=d(re),te=n(re,"LI",{});var Xs=i(te);Ns=n(Xs,"CODE",{});var Gn=i(Ns);wl=o(Gn,"test_small_model_tf"),Gn.forEach(t),yl=o(Xs,` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),Ms=n(Xs,"CODE",{});var Un=i(Ms);kl=o(Un,"test_small_model_pt"),Un.forEach(t),gl=o(Xs,"."),Xs.forEach(t),El=d(re),ae=n(re,"LI",{});var Js=i(ae);Fs=n(Js,"CODE",{});var Xn=i(Fs);bl=o(Xn,"test_large_model_pt"),Xn.forEach(t),vl=o(Js," ("),Ls=n(Js,"CODE",{});var Jn=i(Ls);jl=o(Jn,"optional"),Jn.forEach(t),ql=o(Js,`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),Js.forEach(t),$l=d(re),oe=n(re,"LI",{});var Bs=i(oe);zs=n(Bs,"CODE",{});var Bn=i(zs);Pl=o(Bn,"test_large_model_tf"),Bn.forEach(t),Tl=o(Bs," ("),Ys=n(Bs,"CODE",{});var Qn=i(Ys);Cl=o(Qn,"optional"),Qn.forEach(t),xl=o(Bs,`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),Bs.forEach(t),re.forEach(t),this.h()},h(){u(N,"name","hf:doc:metadata"),u(N,"content",JSON.stringify(ai)),u(G,"id","how-to-create-a-custom-pipeline"),u(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(G,"href","#how-to-create-a-custom-pipeline"),u(M,"class","relative group"),u(X,"id","adding-it-to-the-list-of-supported-tasks"),u(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(X,"href","#adding-it-to-the-list-of-supported-tasks"),u(z,"class","relative group"),u(B,"id","share-your-pipeline-on-the-hub"),u(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(B,"href","#share-your-pipeline-on-the-hub"),u(Y,"class","relative group"),u(W,"id","add-the-pipeline-to-transformers"),u(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(W,"href","#add-the-pipeline-to-transformers"),u(H,"class","relative group")},m(e,r){s(document.head,N),p(e,Qs,r),p(e,M,r),s(M,G),s(G,Oe),y(pe,Oe,null),s(M,Jt),s(M,Ie),s(Ie,Bt),p(e,Ks,r),p(e,C,r),s(C,Qt),s(C,Se),s(Se,Kt),s(C,Vt),s(C,Ae),s(Ae,Wt),s(C,Zt),p(e,Vs,r),p(e,b,r),s(b,ea),s(b,Re),s(Re,sa),s(b,ta),s(b,Ne),s(Ne,aa),s(b,oa),s(b,Me),s(Me,la),s(b,na),p(e,Ws,r),p(e,h,r),s(h,ia),s(h,Fe),s(Fe,ra),s(h,pa),s(h,Le),s(Le,ca),s(h,da),s(h,ze),s(ze,ua),s(h,ha),s(h,Ye),s(Ye,fa),s(h,ma),s(h,He),s(He,_a),s(h,wa),p(e,Zs,r),y(ce,e,r),p(e,et,r),p(e,qe,r),s(qe,ya),p(e,st,r),p(e,F,r),s(F,Ge),s(Ge,ka),s(F,ga),s(F,Ue),s(Ue,Ea),s(F,ba),p(e,tt,r),p(e,P,r),s(P,Xe),s(Xe,va),s(P,ja),s(P,Je),s(Je,qa),s(P,$a),s(P,Be),s(Be,Pa),s(P,Ta),p(e,at,r),p(e,L,r),s(L,Qe),s(Qe,Ca),s(L,xa),s(L,Ke),s(Ke,Da),s(L,Oa),p(e,ot,r),p(e,T,r),s(T,Ve),s(Ve,Ia),s(T,Sa),s(T,We),s(We,Aa),s(T,Ra),s(T,Ze),s(Ze,Na),s(T,Ma),p(e,lt,r),p(e,f,r),s(f,Fa),s(f,es),s(es,La),s(f,za),s(f,ss),s(ss,Ya),s(f,Ha),s(f,ts),s(ts,Ga),s(f,Ua),s(f,as),s(as,Xa),s(f,Ja),p(e,nt,r),p(e,U,r),s(U,Ba),s(U,os),s(os,Qa),s(U,Ka),p(e,it,r),y(de,e,r),p(e,rt,r),p(e,v,r),s(v,Va),s(v,ls),s(ls,Wa),s(v,Za),s(v,ns),s(ns,eo),s(v,so),s(v,is),s(is,to),s(v,ao),p(e,pt,r),y(ue,e,r),p(e,ct,r),p(e,$e,r),s($e,oo),p(e,dt,r),p(e,z,r),s(z,X),s(X,rs),y(he,rs,null),s(z,lo),s(z,ps),s(ps,no),p(e,ut,r),p(e,x,r),s(x,io),s(x,cs),s(cs,ro),s(x,po),s(x,ds),s(ds,co),s(x,uo),p(e,ht,r),y(fe,e,r),p(e,ft,r),p(e,J,r),s(J,ho),s(J,us),s(us,fo),s(J,mo),p(e,mt,r),y(me,e,r),p(e,_t,r),p(e,Y,r),s(Y,B),s(B,hs),y(_e,hs,null),s(Y,_o),s(Y,fs),s(fs,wo),p(e,wt,r),p(e,Q,r),s(Q,yo),s(Q,ms),s(ms,ko),s(Q,go),p(e,yt,r),y(we,e,r),p(e,kt,r),p(e,K,r),s(K,Eo),s(K,_s),s(_s,bo),s(K,vo),p(e,gt,r),y(ye,e,r),p(e,Et,r),p(e,V,r),s(V,jo),s(V,ws),s(ws,qo),s(V,$o),p(e,bt,r),y(ke,e,r),p(e,vt,r),p(e,D,r),s(D,Po),s(D,ys),s(ys,To),s(D,Co),s(D,ks),s(ks,xo),s(D,Do),p(e,jt,r),y(ge,e,r),p(e,qt,r),p(e,m,r),s(m,Oo),s(m,gs),s(gs,Io),s(m,So),s(m,Es),s(Es,Ao),s(m,Ro),s(m,bs),s(bs,No),s(m,Mo),s(m,vs),s(vs,Fo),s(m,Lo),p(e,$t,r),y(Ee,e,r),p(e,Pt,r),p(e,H,r),s(H,W),s(W,js),y(be,js,null),s(H,zo),s(H,qs),s(qs,Yo),p(e,Tt,r),p(e,O,r),s(O,Ho),s(O,$s),s($s,Go),s(O,Uo),s(O,Ps),s(Ps,Xo),s(O,Jo),p(e,Ct,r),p(e,Z,r),s(Z,Bo),s(Z,Ts),s(Ts,Qo),s(Z,Ko),p(e,xt,r),p(e,j,r),s(j,Vo),s(j,Cs),s(Cs,Wo),s(j,Zo),s(j,xs),s(xs,el),s(j,sl),s(j,Ds),s(Ds,tl),s(j,al),p(e,Dt,r),p(e,I,r),s(I,ol),s(I,Os),s(Os,ll),s(I,nl),s(I,Is),s(Is,il),s(I,rl),p(e,Ot,r),p(e,ee,r),s(ee,pl),s(ee,Ss),s(Ss,cl),s(ee,dl),p(e,It,r),p(e,q,r),s(q,se),s(se,As),s(As,ul),s(se,hl),s(se,Rs),s(Rs,fl),s(se,ml),s(q,_l),s(q,te),s(te,Ns),s(Ns,wl),s(te,yl),s(te,Ms),s(Ms,kl),s(te,gl),s(q,El),s(q,ae),s(ae,Fs),s(Fs,bl),s(ae,vl),s(ae,Ls),s(Ls,jl),s(ae,ql),s(q,$l),s(q,oe),s(oe,zs),s(zs,Pl),s(oe,Tl),s(oe,Ys),s(Ys,Cl),s(oe,xl),St=!0},p:ei,i(e){St||(k(pe.$$.fragment,e),k(ce.$$.fragment,e),k(de.$$.fragment,e),k(ue.$$.fragment,e),k(he.$$.fragment,e),k(fe.$$.fragment,e),k(me.$$.fragment,e),k(_e.$$.fragment,e),k(we.$$.fragment,e),k(ye.$$.fragment,e),k(ke.$$.fragment,e),k(ge.$$.fragment,e),k(Ee.$$.fragment,e),k(be.$$.fragment,e),St=!0)},o(e){g(pe.$$.fragment,e),g(ce.$$.fragment,e),g(de.$$.fragment,e),g(ue.$$.fragment,e),g(he.$$.fragment,e),g(fe.$$.fragment,e),g(me.$$.fragment,e),g(_e.$$.fragment,e),g(we.$$.fragment,e),g(ye.$$.fragment,e),g(ke.$$.fragment,e),g(ge.$$.fragment,e),g(Ee.$$.fragment,e),g(be.$$.fragment,e),St=!1},d(e){t(N),e&&t(Qs),e&&t(M),E(pe),e&&t(Ks),e&&t(C),e&&t(Vs),e&&t(b),e&&t(Ws),e&&t(h),e&&t(Zs),E(ce,e),e&&t(et),e&&t(qe),e&&t(st),e&&t(F),e&&t(tt),e&&t(P),e&&t(at),e&&t(L),e&&t(ot),e&&t(T),e&&t(lt),e&&t(f),e&&t(nt),e&&t(U),e&&t(it),E(de,e),e&&t(rt),e&&t(v),e&&t(pt),E(ue,e),e&&t(ct),e&&t($e),e&&t(dt),e&&t(z),E(he),e&&t(ut),e&&t(x),e&&t(ht),E(fe,e),e&&t(ft),e&&t(J),e&&t(mt),E(me,e),e&&t(_t),e&&t(Y),E(_e),e&&t(wt),e&&t(Q),e&&t(yt),E(we,e),e&&t(kt),e&&t(K),e&&t(gt),E(ye,e),e&&t(Et),e&&t(V),e&&t(bt),E(ke,e),e&&t(vt),e&&t(D),e&&t(jt),E(ge,e),e&&t(qt),e&&t(m),e&&t($t),E(Ee,e),e&&t(Pt),e&&t(H),E(be),e&&t(Tt),e&&t(O),e&&t(Ct),e&&t(Z),e&&t(xt),e&&t(j),e&&t(Dt),e&&t(I),e&&t(Ot),e&&t(ee),e&&t(It),e&&t(q)}}}const ai={local:"how-to-create-a-custom-pipeline",sections:[{local:"adding-it-to-the-list-of-supported-tasks",title:"Adding it to the list of supported tasks"},{local:"share-your-pipeline-on-the-hub",title:"Share your pipeline on the Hub"},{local:"add-the-pipeline-to-transformers",title:"Add the pipeline to Transformers"}],title:"How to create a custom pipeline?"};function oi(Dl){return si(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ri extends Kn{constructor(N){super();Vn(this,N,oi,ti,Wn,{})}}export{ri as default,ai as metadata};
