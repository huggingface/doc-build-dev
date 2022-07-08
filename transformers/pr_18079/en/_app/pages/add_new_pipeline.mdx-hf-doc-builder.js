import{S as Xn,i as Jn,s as Bn,e as l,k as c,w as _,t as a,M as Qn,c as n,d as t,m as d,a as i,x as w,h as o,b as u,G as s,g as p,y,L as Kn,q as k,o as g,B as E,v as Vn}from"../chunks/vendor-hf-doc-builder.js";import{I as Gt}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as R}from"../chunks/CodeBlock-hf-doc-builder.js";function Wn(Pl){let N,Bs,M,G,Oe,re,Ut,Ie,Xt,Qs,C,Jt,Se,Bt,Qt,Ae,Kt,Vt,Ks,b,Wt,Re,Zt,ea,Ne,sa,ta,Me,aa,oa,Vs,h,la,Fe,na,ia,Le,ra,pa,ze,ca,da,Ye,ua,ha,He,fa,ma,Ws,pe,Zs,je,_a,et,F,Ge,wa,ya,Ue,ka,ga,st,P,Xe,Ea,ba,Je,va,ja,Be,qa,$a,tt,L,Qe,Pa,Ta,Ke,Ca,xa,at,T,Ve,Da,Oa,We,Ia,Sa,Ze,Aa,Ra,ot,f,Na,es,Ma,Fa,ss,La,za,ts,Ya,Ha,as,Ga,Ua,lt,U,Xa,os,Ja,Ba,nt,ce,it,v,Qa,ls,Ka,Va,ns,Wa,Za,is,eo,so,rt,de,pt,qe,to,ct,z,X,rs,ue,ao,ps,oo,dt,x,lo,cs,no,io,ds,ro,po,ut,he,ht,$e,co,ft,fe,mt,Y,J,us,me,uo,hs,ho,_t,B,fo,fs,mo,_o,wt,_e,yt,Q,wo,ms,yo,ko,kt,we,gt,K,go,_s,Eo,bo,Et,ye,bt,D,vo,ws,jo,qo,ys,$o,Po,vt,ke,jt,m,To,ks,Co,xo,gs,Do,Oo,Es,Io,So,bs,Ao,Ro,qt,ge,$t,H,V,vs,Ee,No,js,Mo,Pt,O,Fo,qs,Lo,zo,$s,Yo,Ho,Tt,W,Go,Ps,Uo,Xo,Ct,j,Jo,Ts,Bo,Qo,Cs,Ko,Vo,xs,Wo,Zo,xt,I,el,Ds,sl,tl,Os,al,ol,Dt,Z,ll,Is,nl,il,Ot,q,ee,Ss,rl,pl,As,cl,dl,ul,se,Rs,hl,fl,Ns,ml,_l,wl,te,Ms,yl,kl,Fs,gl,El,bl,ae,Ls,vl,jl,zs,ql,$l,It;return re=new Gt({}),pe=new R({props:{code:`from transformers import Pipeline


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
        <span class="hljs-keyword">return</span> best_class`}}),ce=new R({props:{code:`pipe = pipeline("my-new-task")
pipe("This is a test")

pipe("This is a test", top_k=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>pipe = pipeline(<span class="hljs-string">&quot;my-new-task&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;3-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.05</span>}
{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;4-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;5-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}]

<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>, top_k=<span class="hljs-number">2</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}]`}}),de=new R({props:{code:`def postprocess(self, model_outputs, top_k=5):
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
    <span class="hljs-keyword">return</span> preprocess_kwargs, {}, postprocess_kwargs`}}),ue=new Gt({}),he=new R({props:{code:`from transformers.pipelines import PIPELINE_REGISTRY

PIPELINE_REGISTRY.register_pipeline(
    "new-task",
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
)`,highlighted:`<span class="hljs-keyword">from</span> transformers.pipelines <span class="hljs-keyword">import</span> PIPELINE_REGISTRY

PIPELINE_REGISTRY.register_pipeline(
    <span class="hljs-string">&quot;new-task&quot;</span>,
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
)`}}),fe=new R({props:{code:`PIPELINE_REGISTRY.register_pipeline(
    "new-task",
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
    "default"={"pt": "user/awesome_model"},
    "type"="text",  # current support type: text, audio, image, multimodal
)`,highlighted:`PIPELINE_REGISTRY.register_pipeline(
    <span class="hljs-string">&quot;new-task&quot;</span>,
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
    <span class="hljs-string">&quot;default&quot;</span>={<span class="hljs-string">&quot;pt&quot;</span>: <span class="hljs-string">&quot;user/awesome_model&quot;</span>},
    <span class="hljs-string">&quot;type&quot;</span>=<span class="hljs-string">&quot;text&quot;</span>,  <span class="hljs-comment"># current support type: text, audio, image, multimodal</span>
)`}}),me=new Gt({}),_e=new R({props:{code:`import numpy as np

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
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;label&quot;</span>: label, <span class="hljs-string">&quot;score&quot;</span>: score, <span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),we=new R({props:{code:`from pair_classification import PairClassificationPipeline
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
)`}}),ye=new R({props:{code:`from transformers import pipeline

classifier = pipeline("pair-classification", model="sgugger/finetuned-bert-mrpc")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(<span class="hljs-string">&quot;pair-classification&quot;</span>, model=<span class="hljs-string">&quot;sgugger/finetuned-bert-mrpc&quot;</span>)`}}),ke=new R({props:{code:`from huggingface_hub import Repository

repo = Repository("test-dynamic-pipeline", clone_from="{your_username}/test-dynamic-pipeline")
classifier.save_pretrained("test-dynamic-pipeline")
repo.push_to_hub()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository

repo = Repository(<span class="hljs-string">&quot;test-dynamic-pipeline&quot;</span>, clone_from=<span class="hljs-string">&quot;{your_username}/test-dynamic-pipeline&quot;</span>)
classifier.save_pretrained(<span class="hljs-string">&quot;test-dynamic-pipeline&quot;</span>)
repo.push_to_hub()`}}),ge=new R({props:{code:`from transformers import pipeline

classifier = pipeline(model="{your_username}/test-dynamic-pipeline", trust_remote_code=True)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(model=<span class="hljs-string">&quot;{your_username}/test-dynamic-pipeline&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),Ee=new Gt({}),{c(){N=l("meta"),Bs=c(),M=l("h1"),G=l("a"),Oe=l("span"),_(re.$$.fragment),Ut=c(),Ie=l("span"),Xt=a("How to create a custom pipeline?"),Qs=c(),C=l("p"),Jt=a(`First and foremost, you need to decide the raw entries the pipeline will be able to take. It can be strings, raw bytes,
dictionaries or whatever seems to be the most likely desired input. Try to keep these inputs as pure Python as possible
as it makes compatibility easier (even through other languages via JSON). Those will be the `),Se=l("code"),Bt=a("inputs"),Qt=a(` of the
pipeline (`),Ae=l("code"),Kt=a("preprocess"),Vt=a(")."),Ks=c(),b=l("p"),Wt=a("Then define the "),Re=l("code"),Zt=a("outputs"),ea=a(". Same policy as the "),Ne=l("code"),sa=a("inputs"),ta=a(`. The simpler, the better. Those will be the outputs of
`),Me=l("code"),aa=a("postprocess"),oa=a(" method."),Vs=c(),h=l("p"),la=a("Start by inheriting the base class "),Fe=l("code"),na=a("Pipeline"),ia=a(". with the 4 methods needed to implement "),Le=l("code"),ra=a("preprocess"),pa=a(`,
`),ze=l("code"),ca=a("_forward"),da=a(", "),Ye=l("code"),ua=a("postprocess"),ha=a(" and "),He=l("code"),fa=a("_sanitize_parameters"),ma=a("."),Ws=c(),_(pe.$$.fragment),Zs=c(),je=l("p"),_a=a(`The structure of this breakdown is to support relatively seamless support for CPU/GPU, while supporting doing
pre/postprocessing on the CPU on different threads`),et=c(),F=l("p"),Ge=l("code"),wa=a("preprocess"),ya=a(` will take the originally defined inputs, and turn them into something feedable to the model. It might
contain more information and is usually a `),Ue=l("code"),ka=a("Dict"),ga=a("."),st=c(),P=l("p"),Xe=l("code"),Ea=a("_forward"),ba=a(" is the implementation detail and is not meant to be called directly. "),Je=l("code"),va=a("forward"),ja=a(` is the preferred
called method as it contains safeguards to make sure everything is working on the expected device. If anything is
linked to a real model it belongs in the `),Be=l("code"),qa=a("_forward"),$a=a(" method, anything else is in the preprocess/postprocess."),tt=c(),L=l("p"),Qe=l("code"),Pa=a("postprocess"),Ta=a(" methods will take the output of "),Ke=l("code"),Ca=a("_forward"),xa=a(` and turn it into the final output that were decided
earlier.`),at=c(),T=l("p"),Ve=l("code"),Da=a("_sanitize_parameters"),Oa=a(` exists to allow users to pass any parameters whenever they wish, be it at initialization
time `),We=l("code"),Ia=a("pipeline(...., maybe_arg=4)"),Sa=a(" or at call time "),Ze=l("code"),Aa=a("pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),Ra=a("."),ot=c(),f=l("p"),Na=a("The returns of "),es=l("code"),Ma=a("_sanitize_parameters"),Fa=a(" are the 3 dicts of kwargs that will be passed directly to "),ss=l("code"),La=a("preprocess"),za=a(`,
`),ts=l("code"),Ya=a("_forward"),Ha=a(" and "),as=l("code"),Ga=a("postprocess"),Ua=a(`. Don\u2019t fill anything if the caller didn\u2019t call with any extra parameter. That
allows to keep the default arguments in the function definition which is always more \u201Cnatural\u201D.`),lt=c(),U=l("p"),Xa=a("A classic example would be a "),os=l("code"),Ja=a("top_k"),Ba=a(" argument in the post processing in classification tasks."),nt=c(),_(ce.$$.fragment),it=c(),v=l("p"),Qa=a("In order to achieve that, we\u2019ll update our "),ls=l("code"),Ka=a("postprocess"),Va=a(" method with a default parameter to "),ns=l("code"),Wa=a("5"),Za=a(`. and edit
`),is=l("code"),eo=a("_sanitize_parameters"),so=a(" to allow this new parameter."),rt=c(),_(de.$$.fragment),pt=c(),qe=l("p"),to=a(`Try to keep the inputs/outputs very simple and ideally JSON-serializable as it makes the pipeline usage very easy
without requiring users to understand new kind of objects. It\u2019s also relatively common to support many different types
of arguments for ease of use (audio files, can be filenames, URLs or pure bytes)`),ct=c(),z=l("h2"),X=l("a"),rs=l("span"),_(ue.$$.fragment),ao=c(),ps=l("span"),oo=a("Adding it to the list of supported tasks"),dt=c(),x=l("p"),lo=a("To register your "),cs=l("code"),no=a("new-task"),io=a(" to the list of supported tasks, you have to add it to the "),ds=l("code"),ro=a("PIPELINE_REGISTRY"),po=a(":"),ut=c(),_(he.$$.fragment),ht=c(),$e=l("p"),co=a("You can specify a default model if you want, as well was the type:"),ft=c(),_(fe.$$.fragment),mt=c(),Y=l("h2"),J=l("a"),us=l("span"),_(me.$$.fragment),uo=c(),hs=l("span"),ho=a("Share your pipeline on the Hub"),_t=c(),B=l("p"),fo=a("To share your custom pipeline on the Hub, you just have to save the custom code of your "),fs=l("code"),mo=a("Pipeline"),_o=a(` subclass in a
python file. For instance, let\u2019s say we want to use a custom pipeline for sentence pair classification like this:`),wt=c(),_(_e.$$.fragment),yt=c(),Q=l("p"),wo=a(`The implementation is framework agnostic, and will work for PyTorch and TensorFlow models. If we have saved this in
a file named `),ms=l("code"),yo=a("pair_classification.py"),ko=a(", we can then import it and register it like this:"),kt=c(),_(we.$$.fragment),gt=c(),K=l("p"),go=a("Once this is done, we can use it with a pretrained model. For instance "),_s=l("code"),Eo=a("sgugger/finetuned-bert-mrpc"),bo=a(` has been
fine-tuned on the MRPC dataset, which classifies pairs of sentences as paraphrases or not.`),Et=c(),_(ye.$$.fragment),bt=c(),D=l("p"),vo=a("Then we can share it on the Hub by using the "),ws=l("code"),jo=a("save_pretrained"),qo=a(" method in a "),ys=l("code"),$o=a("Repository"),Po=a(":"),vt=c(),_(ke.$$.fragment),jt=c(),m=l("p"),To=a("This will copy the file where you defined "),ks=l("code"),Co=a("PairClassificationPipeline"),xo=a(" inside the folder "),gs=l("code"),Do=a('"test-dynamic-pipeline"'),Oo=a(`,
along with saving the model and tokenizer of the pipeline, before pushing everything in the repository
`),Es=l("code"),Io=a("{your_username}/test-dynamic-pipeline"),So=a(`. After that anyone can use it as long as they provide the option
`),bs=l("code"),Ao=a("trust_remote_code=True"),Ro=a(":"),qt=c(),_(ge.$$.fragment),$t=c(),H=l("h2"),V=l("a"),vs=l("span"),_(Ee.$$.fragment),No=c(),js=l("span"),Mo=a("Add the pipeline to Transformers"),Pt=c(),O=l("p"),Fo=a("If you want to contribute your pipeline to Transformers, you will need to add a new module in the "),qs=l("code"),Lo=a("pipelines"),zo=a(` submodule
with the code of your pipeline, then add it in the list of tasks defined in `),$s=l("code"),Yo=a("pipelines/__init__.py"),Ho=a("."),Tt=c(),W=l("p"),Go=a("Then you will need to add tests. Create a new file "),Ps=l("code"),Uo=a("tests/test_pipelines_MY_PIPELINE.py"),Xo=a(" with example with the other tests."),Ct=c(),j=l("p"),Jo=a("The "),Ts=l("code"),Bo=a("run_pipeline_test"),Qo=a(` function will be very generic and run on small random models on every possible
architecture as defined by `),Cs=l("code"),Ko=a("model_mapping"),Vo=a(" and "),xs=l("code"),Wo=a("tf_model_mapping"),Zo=a("."),xt=c(),I=l("p"),el=a(`This is very important to test future compatibility, meaning if someone adds a new model for
`),Ds=l("code"),sl=a("XXXForQuestionAnswering"),tl=a(` then the pipeline test will attempt to run on it. Because the models are random it\u2019s
impossible to check for actual values, that\u2019s why There is a helper `),Os=l("code"),al=a("ANY"),ol=a(` that will simply attempt to match the
output of the pipeline TYPE.`),Dt=c(),Z=l("p"),ll=a("You also "),Is=l("em"),nl=a("need"),il=a(" to implement 2 (ideally 4) tests."),Ot=c(),q=l("ul"),ee=l("li"),Ss=l("code"),rl=a("test_small_model_pt"),pl=a(` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),As=l("code"),cl=a("test_small_model_tf"),dl=a("."),ul=c(),se=l("li"),Rs=l("code"),hl=a("test_small_model_tf"),fl=a(` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),Ns=l("code"),ml=a("test_small_model_pt"),_l=a("."),wl=c(),te=l("li"),Ms=l("code"),yl=a("test_large_model_pt"),kl=a(" ("),Fs=l("code"),gl=a("optional"),El=a(`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),bl=c(),ae=l("li"),Ls=l("code"),vl=a("test_large_model_tf"),jl=a(" ("),zs=l("code"),ql=a("optional"),$l=a(`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),this.h()},l(e){const r=Qn('[data-svelte="svelte-1phssyn"]',document.head);N=n(r,"META",{name:!0,content:!0}),r.forEach(t),Bs=d(e),M=n(e,"H1",{class:!0});var St=i(M);G=n(St,"A",{id:!0,class:!0,href:!0});var Tl=i(G);Oe=n(Tl,"SPAN",{});var Cl=i(Oe);w(re.$$.fragment,Cl),Cl.forEach(t),Tl.forEach(t),Ut=d(St),Ie=n(St,"SPAN",{});var xl=i(Ie);Xt=o(xl,"How to create a custom pipeline?"),xl.forEach(t),St.forEach(t),Qs=d(e),C=n(e,"P",{});var Pe=i(C);Jt=o(Pe,`First and foremost, you need to decide the raw entries the pipeline will be able to take. It can be strings, raw bytes,
dictionaries or whatever seems to be the most likely desired input. Try to keep these inputs as pure Python as possible
as it makes compatibility easier (even through other languages via JSON). Those will be the `),Se=n(Pe,"CODE",{});var Dl=i(Se);Bt=o(Dl,"inputs"),Dl.forEach(t),Qt=o(Pe,` of the
pipeline (`),Ae=n(Pe,"CODE",{});var Ol=i(Ae);Kt=o(Ol,"preprocess"),Ol.forEach(t),Vt=o(Pe,")."),Pe.forEach(t),Ks=d(e),b=n(e,"P",{});var oe=i(b);Wt=o(oe,"Then define the "),Re=n(oe,"CODE",{});var Il=i(Re);Zt=o(Il,"outputs"),Il.forEach(t),ea=o(oe,". Same policy as the "),Ne=n(oe,"CODE",{});var Sl=i(Ne);sa=o(Sl,"inputs"),Sl.forEach(t),ta=o(oe,`. The simpler, the better. Those will be the outputs of
`),Me=n(oe,"CODE",{});var Al=i(Me);aa=o(Al,"postprocess"),Al.forEach(t),oa=o(oe," method."),oe.forEach(t),Vs=d(e),h=n(e,"P",{});var $=i(h);la=o($,"Start by inheriting the base class "),Fe=n($,"CODE",{});var Rl=i(Fe);na=o(Rl,"Pipeline"),Rl.forEach(t),ia=o($,". with the 4 methods needed to implement "),Le=n($,"CODE",{});var Nl=i(Le);ra=o(Nl,"preprocess"),Nl.forEach(t),pa=o($,`,
`),ze=n($,"CODE",{});var Ml=i(ze);ca=o(Ml,"_forward"),Ml.forEach(t),da=o($,", "),Ye=n($,"CODE",{});var Fl=i(Ye);ua=o(Fl,"postprocess"),Fl.forEach(t),ha=o($," and "),He=n($,"CODE",{});var Ll=i(He);fa=o(Ll,"_sanitize_parameters"),Ll.forEach(t),ma=o($,"."),$.forEach(t),Ws=d(e),w(pe.$$.fragment,e),Zs=d(e),je=n(e,"P",{});var zl=i(je);_a=o(zl,`The structure of this breakdown is to support relatively seamless support for CPU/GPU, while supporting doing
pre/postprocessing on the CPU on different threads`),zl.forEach(t),et=d(e),F=n(e,"P",{});var Ys=i(F);Ge=n(Ys,"CODE",{});var Yl=i(Ge);wa=o(Yl,"preprocess"),Yl.forEach(t),ya=o(Ys,` will take the originally defined inputs, and turn them into something feedable to the model. It might
contain more information and is usually a `),Ue=n(Ys,"CODE",{});var Hl=i(Ue);ka=o(Hl,"Dict"),Hl.forEach(t),ga=o(Ys,"."),Ys.forEach(t),st=d(e),P=n(e,"P",{});var be=i(P);Xe=n(be,"CODE",{});var Gl=i(Xe);Ea=o(Gl,"_forward"),Gl.forEach(t),ba=o(be," is the implementation detail and is not meant to be called directly. "),Je=n(be,"CODE",{});var Ul=i(Je);va=o(Ul,"forward"),Ul.forEach(t),ja=o(be,` is the preferred
called method as it contains safeguards to make sure everything is working on the expected device. If anything is
linked to a real model it belongs in the `),Be=n(be,"CODE",{});var Xl=i(Be);qa=o(Xl,"_forward"),Xl.forEach(t),$a=o(be," method, anything else is in the preprocess/postprocess."),be.forEach(t),tt=d(e),L=n(e,"P",{});var Hs=i(L);Qe=n(Hs,"CODE",{});var Jl=i(Qe);Pa=o(Jl,"postprocess"),Jl.forEach(t),Ta=o(Hs," methods will take the output of "),Ke=n(Hs,"CODE",{});var Bl=i(Ke);Ca=o(Bl,"_forward"),Bl.forEach(t),xa=o(Hs,` and turn it into the final output that were decided
earlier.`),Hs.forEach(t),at=d(e),T=n(e,"P",{});var ve=i(T);Ve=n(ve,"CODE",{});var Ql=i(Ve);Da=o(Ql,"_sanitize_parameters"),Ql.forEach(t),Oa=o(ve,` exists to allow users to pass any parameters whenever they wish, be it at initialization
time `),We=n(ve,"CODE",{});var Kl=i(We);Ia=o(Kl,"pipeline(...., maybe_arg=4)"),Kl.forEach(t),Sa=o(ve," or at call time "),Ze=n(ve,"CODE",{});var Vl=i(Ze);Aa=o(Vl,"pipe = pipeline(...); output = pipe(...., maybe_arg=4)"),Vl.forEach(t),Ra=o(ve,"."),ve.forEach(t),ot=d(e),f=n(e,"P",{});var S=i(f);Na=o(S,"The returns of "),es=n(S,"CODE",{});var Wl=i(es);Ma=o(Wl,"_sanitize_parameters"),Wl.forEach(t),Fa=o(S," are the 3 dicts of kwargs that will be passed directly to "),ss=n(S,"CODE",{});var Zl=i(ss);La=o(Zl,"preprocess"),Zl.forEach(t),za=o(S,`,
`),ts=n(S,"CODE",{});var en=i(ts);Ya=o(en,"_forward"),en.forEach(t),Ha=o(S," and "),as=n(S,"CODE",{});var sn=i(as);Ga=o(sn,"postprocess"),sn.forEach(t),Ua=o(S,`. Don\u2019t fill anything if the caller didn\u2019t call with any extra parameter. That
allows to keep the default arguments in the function definition which is always more \u201Cnatural\u201D.`),S.forEach(t),lt=d(e),U=n(e,"P",{});var At=i(U);Xa=o(At,"A classic example would be a "),os=n(At,"CODE",{});var tn=i(os);Ja=o(tn,"top_k"),tn.forEach(t),Ba=o(At," argument in the post processing in classification tasks."),At.forEach(t),nt=d(e),w(ce.$$.fragment,e),it=d(e),v=n(e,"P",{});var le=i(v);Qa=o(le,"In order to achieve that, we\u2019ll update our "),ls=n(le,"CODE",{});var an=i(ls);Ka=o(an,"postprocess"),an.forEach(t),Va=o(le," method with a default parameter to "),ns=n(le,"CODE",{});var on=i(ns);Wa=o(on,"5"),on.forEach(t),Za=o(le,`. and edit
`),is=n(le,"CODE",{});var ln=i(is);eo=o(ln,"_sanitize_parameters"),ln.forEach(t),so=o(le," to allow this new parameter."),le.forEach(t),rt=d(e),w(de.$$.fragment,e),pt=d(e),qe=n(e,"P",{});var nn=i(qe);to=o(nn,`Try to keep the inputs/outputs very simple and ideally JSON-serializable as it makes the pipeline usage very easy
without requiring users to understand new kind of objects. It\u2019s also relatively common to support many different types
of arguments for ease of use (audio files, can be filenames, URLs or pure bytes)`),nn.forEach(t),ct=d(e),z=n(e,"H2",{class:!0});var Rt=i(z);X=n(Rt,"A",{id:!0,class:!0,href:!0});var rn=i(X);rs=n(rn,"SPAN",{});var pn=i(rs);w(ue.$$.fragment,pn),pn.forEach(t),rn.forEach(t),ao=d(Rt),ps=n(Rt,"SPAN",{});var cn=i(ps);oo=o(cn,"Adding it to the list of supported tasks"),cn.forEach(t),Rt.forEach(t),dt=d(e),x=n(e,"P",{});var Te=i(x);lo=o(Te,"To register your "),cs=n(Te,"CODE",{});var dn=i(cs);no=o(dn,"new-task"),dn.forEach(t),io=o(Te," to the list of supported tasks, you have to add it to the "),ds=n(Te,"CODE",{});var un=i(ds);ro=o(un,"PIPELINE_REGISTRY"),un.forEach(t),po=o(Te,":"),Te.forEach(t),ut=d(e),w(he.$$.fragment,e),ht=d(e),$e=n(e,"P",{});var hn=i($e);co=o(hn,"You can specify a default model if you want, as well was the type:"),hn.forEach(t),ft=d(e),w(fe.$$.fragment,e),mt=d(e),Y=n(e,"H2",{class:!0});var Nt=i(Y);J=n(Nt,"A",{id:!0,class:!0,href:!0});var fn=i(J);us=n(fn,"SPAN",{});var mn=i(us);w(me.$$.fragment,mn),mn.forEach(t),fn.forEach(t),uo=d(Nt),hs=n(Nt,"SPAN",{});var _n=i(hs);ho=o(_n,"Share your pipeline on the Hub"),_n.forEach(t),Nt.forEach(t),_t=d(e),B=n(e,"P",{});var Mt=i(B);fo=o(Mt,"To share your custom pipeline on the Hub, you just have to save the custom code of your "),fs=n(Mt,"CODE",{});var wn=i(fs);mo=o(wn,"Pipeline"),wn.forEach(t),_o=o(Mt,` subclass in a
python file. For instance, let\u2019s say we want to use a custom pipeline for sentence pair classification like this:`),Mt.forEach(t),wt=d(e),w(_e.$$.fragment,e),yt=d(e),Q=n(e,"P",{});var Ft=i(Q);wo=o(Ft,`The implementation is framework agnostic, and will work for PyTorch and TensorFlow models. If we have saved this in
a file named `),ms=n(Ft,"CODE",{});var yn=i(ms);yo=o(yn,"pair_classification.py"),yn.forEach(t),ko=o(Ft,", we can then import it and register it like this:"),Ft.forEach(t),kt=d(e),w(we.$$.fragment,e),gt=d(e),K=n(e,"P",{});var Lt=i(K);go=o(Lt,"Once this is done, we can use it with a pretrained model. For instance "),_s=n(Lt,"CODE",{});var kn=i(_s);Eo=o(kn,"sgugger/finetuned-bert-mrpc"),kn.forEach(t),bo=o(Lt,` has been
fine-tuned on the MRPC dataset, which classifies pairs of sentences as paraphrases or not.`),Lt.forEach(t),Et=d(e),w(ye.$$.fragment,e),bt=d(e),D=n(e,"P",{});var Ce=i(D);vo=o(Ce,"Then we can share it on the Hub by using the "),ws=n(Ce,"CODE",{});var gn=i(ws);jo=o(gn,"save_pretrained"),gn.forEach(t),qo=o(Ce," method in a "),ys=n(Ce,"CODE",{});var En=i(ys);$o=o(En,"Repository"),En.forEach(t),Po=o(Ce,":"),Ce.forEach(t),vt=d(e),w(ke.$$.fragment,e),jt=d(e),m=n(e,"P",{});var A=i(m);To=o(A,"This will copy the file where you defined "),ks=n(A,"CODE",{});var bn=i(ks);Co=o(bn,"PairClassificationPipeline"),bn.forEach(t),xo=o(A," inside the folder "),gs=n(A,"CODE",{});var vn=i(gs);Do=o(vn,'"test-dynamic-pipeline"'),vn.forEach(t),Oo=o(A,`,
along with saving the model and tokenizer of the pipeline, before pushing everything in the repository
`),Es=n(A,"CODE",{});var jn=i(Es);Io=o(jn,"{your_username}/test-dynamic-pipeline"),jn.forEach(t),So=o(A,`. After that anyone can use it as long as they provide the option
`),bs=n(A,"CODE",{});var qn=i(bs);Ao=o(qn,"trust_remote_code=True"),qn.forEach(t),Ro=o(A,":"),A.forEach(t),qt=d(e),w(ge.$$.fragment,e),$t=d(e),H=n(e,"H2",{class:!0});var zt=i(H);V=n(zt,"A",{id:!0,class:!0,href:!0});var $n=i(V);vs=n($n,"SPAN",{});var Pn=i(vs);w(Ee.$$.fragment,Pn),Pn.forEach(t),$n.forEach(t),No=d(zt),js=n(zt,"SPAN",{});var Tn=i(js);Mo=o(Tn,"Add the pipeline to Transformers"),Tn.forEach(t),zt.forEach(t),Pt=d(e),O=n(e,"P",{});var xe=i(O);Fo=o(xe,"If you want to contribute your pipeline to Transformers, you will need to add a new module in the "),qs=n(xe,"CODE",{});var Cn=i(qs);Lo=o(Cn,"pipelines"),Cn.forEach(t),zo=o(xe,` submodule
with the code of your pipeline, then add it in the list of tasks defined in `),$s=n(xe,"CODE",{});var xn=i($s);Yo=o(xn,"pipelines/__init__.py"),xn.forEach(t),Ho=o(xe,"."),xe.forEach(t),Tt=d(e),W=n(e,"P",{});var Yt=i(W);Go=o(Yt,"Then you will need to add tests. Create a new file "),Ps=n(Yt,"CODE",{});var Dn=i(Ps);Uo=o(Dn,"tests/test_pipelines_MY_PIPELINE.py"),Dn.forEach(t),Xo=o(Yt," with example with the other tests."),Yt.forEach(t),Ct=d(e),j=n(e,"P",{});var ne=i(j);Jo=o(ne,"The "),Ts=n(ne,"CODE",{});var On=i(Ts);Bo=o(On,"run_pipeline_test"),On.forEach(t),Qo=o(ne,` function will be very generic and run on small random models on every possible
architecture as defined by `),Cs=n(ne,"CODE",{});var In=i(Cs);Ko=o(In,"model_mapping"),In.forEach(t),Vo=o(ne," and "),xs=n(ne,"CODE",{});var Sn=i(xs);Wo=o(Sn,"tf_model_mapping"),Sn.forEach(t),Zo=o(ne,"."),ne.forEach(t),xt=d(e),I=n(e,"P",{});var De=i(I);el=o(De,`This is very important to test future compatibility, meaning if someone adds a new model for
`),Ds=n(De,"CODE",{});var An=i(Ds);sl=o(An,"XXXForQuestionAnswering"),An.forEach(t),tl=o(De,` then the pipeline test will attempt to run on it. Because the models are random it\u2019s
impossible to check for actual values, that\u2019s why There is a helper `),Os=n(De,"CODE",{});var Rn=i(Os);al=o(Rn,"ANY"),Rn.forEach(t),ol=o(De,` that will simply attempt to match the
output of the pipeline TYPE.`),De.forEach(t),Dt=d(e),Z=n(e,"P",{});var Ht=i(Z);ll=o(Ht,"You also "),Is=n(Ht,"EM",{});var Nn=i(Is);nl=o(Nn,"need"),Nn.forEach(t),il=o(Ht," to implement 2 (ideally 4) tests."),Ht.forEach(t),Ot=d(e),q=n(e,"UL",{});var ie=i(q);ee=n(ie,"LI",{});var Gs=i(ee);Ss=n(Gs,"CODE",{});var Mn=i(Ss);rl=o(Mn,"test_small_model_pt"),Mn.forEach(t),pl=o(Gs,` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),As=n(Gs,"CODE",{});var Fn=i(As);cl=o(Fn,"test_small_model_tf"),Fn.forEach(t),dl=o(Gs,"."),Gs.forEach(t),ul=d(ie),se=n(ie,"LI",{});var Us=i(se);Rs=n(Us,"CODE",{});var Ln=i(Rs);hl=o(Ln,"test_small_model_tf"),Ln.forEach(t),fl=o(Us,` : Define 1 small model for this pipeline (doesn\u2019t matter if the results don\u2019t make sense)
and test the pipeline outputs. The results should be the same as `),Ns=n(Us,"CODE",{});var zn=i(Ns);ml=o(zn,"test_small_model_pt"),zn.forEach(t),_l=o(Us,"."),Us.forEach(t),wl=d(ie),te=n(ie,"LI",{});var Xs=i(te);Ms=n(Xs,"CODE",{});var Yn=i(Ms);yl=o(Yn,"test_large_model_pt"),Yn.forEach(t),kl=o(Xs," ("),Fs=n(Xs,"CODE",{});var Hn=i(Fs);gl=o(Hn,"optional"),Hn.forEach(t),El=o(Xs,`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),Xs.forEach(t),bl=d(ie),ae=n(ie,"LI",{});var Js=i(ae);Ls=n(Js,"CODE",{});var Gn=i(Ls);vl=o(Gn,"test_large_model_tf"),Gn.forEach(t),jl=o(Js," ("),zs=n(Js,"CODE",{});var Un=i(zs);ql=o(Un,"optional"),Un.forEach(t),$l=o(Js,`): Tests the pipeline on a real pipeline where the results are supposed to
make sense. These tests are slow and should be marked as such. Here the goal is to showcase the pipeline and to make
sure there is no drift in future releases`),Js.forEach(t),ie.forEach(t),this.h()},h(){u(N,"name","hf:doc:metadata"),u(N,"content",JSON.stringify(Zn)),u(G,"id","how-to-create-a-custom-pipeline"),u(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(G,"href","#how-to-create-a-custom-pipeline"),u(M,"class","relative group"),u(X,"id","adding-it-to-the-list-of-supported-tasks"),u(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(X,"href","#adding-it-to-the-list-of-supported-tasks"),u(z,"class","relative group"),u(J,"id","share-your-pipeline-on-the-hub"),u(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(J,"href","#share-your-pipeline-on-the-hub"),u(Y,"class","relative group"),u(V,"id","add-the-pipeline-to-transformers"),u(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(V,"href","#add-the-pipeline-to-transformers"),u(H,"class","relative group")},m(e,r){s(document.head,N),p(e,Bs,r),p(e,M,r),s(M,G),s(G,Oe),y(re,Oe,null),s(M,Ut),s(M,Ie),s(Ie,Xt),p(e,Qs,r),p(e,C,r),s(C,Jt),s(C,Se),s(Se,Bt),s(C,Qt),s(C,Ae),s(Ae,Kt),s(C,Vt),p(e,Ks,r),p(e,b,r),s(b,Wt),s(b,Re),s(Re,Zt),s(b,ea),s(b,Ne),s(Ne,sa),s(b,ta),s(b,Me),s(Me,aa),s(b,oa),p(e,Vs,r),p(e,h,r),s(h,la),s(h,Fe),s(Fe,na),s(h,ia),s(h,Le),s(Le,ra),s(h,pa),s(h,ze),s(ze,ca),s(h,da),s(h,Ye),s(Ye,ua),s(h,ha),s(h,He),s(He,fa),s(h,ma),p(e,Ws,r),y(pe,e,r),p(e,Zs,r),p(e,je,r),s(je,_a),p(e,et,r),p(e,F,r),s(F,Ge),s(Ge,wa),s(F,ya),s(F,Ue),s(Ue,ka),s(F,ga),p(e,st,r),p(e,P,r),s(P,Xe),s(Xe,Ea),s(P,ba),s(P,Je),s(Je,va),s(P,ja),s(P,Be),s(Be,qa),s(P,$a),p(e,tt,r),p(e,L,r),s(L,Qe),s(Qe,Pa),s(L,Ta),s(L,Ke),s(Ke,Ca),s(L,xa),p(e,at,r),p(e,T,r),s(T,Ve),s(Ve,Da),s(T,Oa),s(T,We),s(We,Ia),s(T,Sa),s(T,Ze),s(Ze,Aa),s(T,Ra),p(e,ot,r),p(e,f,r),s(f,Na),s(f,es),s(es,Ma),s(f,Fa),s(f,ss),s(ss,La),s(f,za),s(f,ts),s(ts,Ya),s(f,Ha),s(f,as),s(as,Ga),s(f,Ua),p(e,lt,r),p(e,U,r),s(U,Xa),s(U,os),s(os,Ja),s(U,Ba),p(e,nt,r),y(ce,e,r),p(e,it,r),p(e,v,r),s(v,Qa),s(v,ls),s(ls,Ka),s(v,Va),s(v,ns),s(ns,Wa),s(v,Za),s(v,is),s(is,eo),s(v,so),p(e,rt,r),y(de,e,r),p(e,pt,r),p(e,qe,r),s(qe,to),p(e,ct,r),p(e,z,r),s(z,X),s(X,rs),y(ue,rs,null),s(z,ao),s(z,ps),s(ps,oo),p(e,dt,r),p(e,x,r),s(x,lo),s(x,cs),s(cs,no),s(x,io),s(x,ds),s(ds,ro),s(x,po),p(e,ut,r),y(he,e,r),p(e,ht,r),p(e,$e,r),s($e,co),p(e,ft,r),y(fe,e,r),p(e,mt,r),p(e,Y,r),s(Y,J),s(J,us),y(me,us,null),s(Y,uo),s(Y,hs),s(hs,ho),p(e,_t,r),p(e,B,r),s(B,fo),s(B,fs),s(fs,mo),s(B,_o),p(e,wt,r),y(_e,e,r),p(e,yt,r),p(e,Q,r),s(Q,wo),s(Q,ms),s(ms,yo),s(Q,ko),p(e,kt,r),y(we,e,r),p(e,gt,r),p(e,K,r),s(K,go),s(K,_s),s(_s,Eo),s(K,bo),p(e,Et,r),y(ye,e,r),p(e,bt,r),p(e,D,r),s(D,vo),s(D,ws),s(ws,jo),s(D,qo),s(D,ys),s(ys,$o),s(D,Po),p(e,vt,r),y(ke,e,r),p(e,jt,r),p(e,m,r),s(m,To),s(m,ks),s(ks,Co),s(m,xo),s(m,gs),s(gs,Do),s(m,Oo),s(m,Es),s(Es,Io),s(m,So),s(m,bs),s(bs,Ao),s(m,Ro),p(e,qt,r),y(ge,e,r),p(e,$t,r),p(e,H,r),s(H,V),s(V,vs),y(Ee,vs,null),s(H,No),s(H,js),s(js,Mo),p(e,Pt,r),p(e,O,r),s(O,Fo),s(O,qs),s(qs,Lo),s(O,zo),s(O,$s),s($s,Yo),s(O,Ho),p(e,Tt,r),p(e,W,r),s(W,Go),s(W,Ps),s(Ps,Uo),s(W,Xo),p(e,Ct,r),p(e,j,r),s(j,Jo),s(j,Ts),s(Ts,Bo),s(j,Qo),s(j,Cs),s(Cs,Ko),s(j,Vo),s(j,xs),s(xs,Wo),s(j,Zo),p(e,xt,r),p(e,I,r),s(I,el),s(I,Ds),s(Ds,sl),s(I,tl),s(I,Os),s(Os,al),s(I,ol),p(e,Dt,r),p(e,Z,r),s(Z,ll),s(Z,Is),s(Is,nl),s(Z,il),p(e,Ot,r),p(e,q,r),s(q,ee),s(ee,Ss),s(Ss,rl),s(ee,pl),s(ee,As),s(As,cl),s(ee,dl),s(q,ul),s(q,se),s(se,Rs),s(Rs,hl),s(se,fl),s(se,Ns),s(Ns,ml),s(se,_l),s(q,wl),s(q,te),s(te,Ms),s(Ms,yl),s(te,kl),s(te,Fs),s(Fs,gl),s(te,El),s(q,bl),s(q,ae),s(ae,Ls),s(Ls,vl),s(ae,jl),s(ae,zs),s(zs,ql),s(ae,$l),It=!0},p:Kn,i(e){It||(k(re.$$.fragment,e),k(pe.$$.fragment,e),k(ce.$$.fragment,e),k(de.$$.fragment,e),k(ue.$$.fragment,e),k(he.$$.fragment,e),k(fe.$$.fragment,e),k(me.$$.fragment,e),k(_e.$$.fragment,e),k(we.$$.fragment,e),k(ye.$$.fragment,e),k(ke.$$.fragment,e),k(ge.$$.fragment,e),k(Ee.$$.fragment,e),It=!0)},o(e){g(re.$$.fragment,e),g(pe.$$.fragment,e),g(ce.$$.fragment,e),g(de.$$.fragment,e),g(ue.$$.fragment,e),g(he.$$.fragment,e),g(fe.$$.fragment,e),g(me.$$.fragment,e),g(_e.$$.fragment,e),g(we.$$.fragment,e),g(ye.$$.fragment,e),g(ke.$$.fragment,e),g(ge.$$.fragment,e),g(Ee.$$.fragment,e),It=!1},d(e){t(N),e&&t(Bs),e&&t(M),E(re),e&&t(Qs),e&&t(C),e&&t(Ks),e&&t(b),e&&t(Vs),e&&t(h),e&&t(Ws),E(pe,e),e&&t(Zs),e&&t(je),e&&t(et),e&&t(F),e&&t(st),e&&t(P),e&&t(tt),e&&t(L),e&&t(at),e&&t(T),e&&t(ot),e&&t(f),e&&t(lt),e&&t(U),e&&t(nt),E(ce,e),e&&t(it),e&&t(v),e&&t(rt),E(de,e),e&&t(pt),e&&t(qe),e&&t(ct),e&&t(z),E(ue),e&&t(dt),e&&t(x),e&&t(ut),E(he,e),e&&t(ht),e&&t($e),e&&t(ft),E(fe,e),e&&t(mt),e&&t(Y),E(me),e&&t(_t),e&&t(B),e&&t(wt),E(_e,e),e&&t(yt),e&&t(Q),e&&t(kt),E(we,e),e&&t(gt),e&&t(K),e&&t(Et),E(ye,e),e&&t(bt),e&&t(D),e&&t(vt),E(ke,e),e&&t(jt),e&&t(m),e&&t(qt),E(ge,e),e&&t($t),e&&t(H),E(Ee),e&&t(Pt),e&&t(O),e&&t(Tt),e&&t(W),e&&t(Ct),e&&t(j),e&&t(xt),e&&t(I),e&&t(Dt),e&&t(Z),e&&t(Ot),e&&t(q)}}}const Zn={local:"how-to-create-a-custom-pipeline",sections:[{local:"adding-it-to-the-list-of-supported-tasks",title:"Adding it to the list of supported tasks"},{local:"share-your-pipeline-on-the-hub",title:"Share your pipeline on the Hub"},{local:"add-the-pipeline-to-transformers",title:"Add the pipeline to Transformers"}],title:"How to create a custom pipeline?"};function ei(Pl){return Vn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class oi extends Xn{constructor(N){super();Jn(this,N,ei,Wn,Bn,{})}}export{oi as default,Zn as metadata};
