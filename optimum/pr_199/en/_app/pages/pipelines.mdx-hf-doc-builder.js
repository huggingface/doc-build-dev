import{S as Ra,i as Ca,s as Ma,e as o,k as c,w as q,t as i,M as Pa,c as n,d as s,m as u,a,x as k,h as r,b as m,G as t,g as p,y as z,q as j,o as y,B as x,v as Na}from"../chunks/vendor-hf-doc-builder.js";import{T as Fa}from"../chunks/Tip-hf-doc-builder.js";import{I as te}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as je}from"../chunks/CodeBlock-hf-doc-builder.js";function Qa(Mt){let h,X,g,E,N;return{c(){h=o("p"),X=i("You can also use the "),g=o("a"),E=i("pipeline()"),N=i(" function from Transformers and provide your Optimum model class."),this.h()},l($){h=n($,"P",{});var C=a(h);X=r(C,"You can also use the "),g=n(C,"A",{href:!0,rel:!0});var U=a(g);E=r(U,"pipeline()"),U.forEach(s),N=r(C," function from Transformers and provide your Optimum model class."),C.forEach(s),this.h()},h(){m(g,"href","https://huggingface.co/docs/transformers/main/en/main_classes/pipelines#pipelines"),m(g,"rel","nofollow")},m($,C){p($,h,C),t(h,X),t(h,g),t(g,E),t(h,N)},d($){$&&s(h)}}}function Sa(Mt){let h,X,g,E,N,$,C,U,vs,Pt,T,ws,Me,qs,ks,se,zs,js,Pe,ys,xs,Nt,W,Ft,ye,Os,Qt,xe,Ne,$s,St,d,Fe,Qe,Es,Ts,Se,De,bs,As,Ie,He,Rs,Cs,Le,Xe,Ms,Ps,Ue,We,Ns,Fs,Be,Ge,Qs,Ss,Ye,Je,Ds,Is,Ve,Ke,Hs,Ls,Ze,et,Xs,Dt,F,B,tt,oe,Us,st,Ws,It,M,Bs,ot,Gs,Ys,nt,Js,Vs,Ht,Oe,at,Ks,Lt,ne,Xt,ae,ie,Zs,it,eo,to,Ut,re,Wt,$e,le,so,rt,oo,no,Bt,Q,G,lt,pe,ao,pt,io,Gt,_,ro,mt,lo,po,me,mo,co,ct,uo,ho,ut,fo,go,Ee,_o,vo,Yt,ce,Jt,S,Y,dt,ue,wo,ht,qo,Vt,O,ko,ft,zo,jo,de,yo,xo,gt,Oo,$o,_t,Eo,To,Kt,he,Zt,D,J,vt,fe,bo,wt,Ao,es,v,Ro,qt,Co,Mo,kt,Po,No,zt,Fo,Qo,Te,So,Do,be,Io,Ho,ts,I,V,jt,ge,Lo,Ae,Xo,yt,Uo,ss,_e,os,H,K,xt,ve,Wo,Re,Bo,Ot,Go,ns,we,as,L,Z,$t,qe,Yo,Et,Jo,is,w,Vo,Tt,Ko,Zo,bt,en,tn,At,sn,on,Rt,nn,an,Ct,rn,ln,rs,ke,ls;return $=new te({}),W=new Fa({props:{$$slots:{default:[Qa]},$$scope:{ctx:Mt}}}),oe=new te({}),ne=new je({props:{code:`from optimum.pipelines import pipeline

classifier = pipeline(task="text-classification", accelerator="ort")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(task=<span class="hljs-string">&quot;text-classification&quot;</span>, accelerator=<span class="hljs-string">&quot;ort&quot;</span>)
`}}),re=new je({props:{code:'classifier("I like you. I love you.")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>classifier(<span class="hljs-string">&quot;I like you. I love you.&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9998838901519775</span>}]`}}),pe=new te({}),ce=new je({props:{code:`from transformers import AutoTokenizer
from optimum.onnxruntime import ORTModelForQuestionAnswering
from optimum.pipelines import pipeline

tokenizer = AutoTokenizer.from_pretrained("deepset/roberta-base-squad2")
# loading the pytorch checkpoint and converting to ORT format by providing the from_transformers=True parameter
model = ORTModelForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2",from_transformers=True)

onnx_qa = pipeline("question-answering", model=model, tokenizer=tokenizer)
question = "What's my name?"
context = "My name is Philipp and I live in Nuremberg."

pred = onnx_qa(question=question, context=context)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading the pytorch checkpoint and converting to ORT format by providing the from_transformers=True parameter</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>,from_transformers=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_qa = pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;What&#x27;s my name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">&quot;My name is Philipp and I live in Nuremberg.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),ue=new te({}),he=new je({props:{code:`from transformers import AutoTokenizer
from optimum.onnxruntime import ORTModelForQuestionAnswering
from optimum.pipelines import pipeline

tokenizer = AutoTokenizer.from_pretrained("optimum/roberta-base-squad2")
# loading already converted and optimized ORT checkpoint for inference
model = ORTModelForQuestionAnswering.from_pretrained("optimum/roberta-base-squad2")

onnx_qa = pipeline("question-answering", model=model, tokenizer=tokenizer)
question = "What's my name?"
context = "My name is Philipp and I live in Nuremberg."

pred = onnx_qa(question=question, context=context)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;optimum/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading already converted and optimized ORT checkpoint for inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;optimum/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_qa = pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;What&#x27;s my name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">&quot;My name is Philipp and I live in Nuremberg.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),fe=new te({}),ge=new te({}),_e=new je({props:{code:`from pathlib import Path
from optimum.onnxruntime import ORTModelForSequenceClassification, ORTQuantizer
from optimum.onnxruntime.configuration import AutoQuantizationConfig
from optimum.pipelines import pipeline
from transformers import AutoTokenizer

model_id = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(model_id)
save_path = Path("optimum_model")
save_path.mkdir(exist_ok=True)

quantizer = ORTQuantizer.from_pretrained(model_id, feature="sequence-classification")
qconfig = AutoQuantizationConfig.avx512_vnni(is_static=False, per_channel=True)

quantizer.export(
quantizer.model.config.save_pretrained(save_path) # saves config.json 

model = ORTModelForSequenceClassification.from_pretrained(save_path,file_name="model-quantized.onnx")

onnx_clx = pipeline("text-classification", model=model, tokenizer=tokenizer)
text = "I like the new ORT pipeline"
pred = onnx_clx(text)
print(pred)

tokenizer.save_pretrained("new_path_for_directory")
model.save_pretrained("new_path_for_directory")
model.push_to_hub("new_path_for_directory",`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pathlib <span class="hljs-keyword">import</span> Path
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification, ORTQuantizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> AutoQuantizationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-comment"># define model_id and load tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_id)
<span class="hljs-meta">&gt;&gt;&gt; </span>save_path = Path(<span class="hljs-string">&quot;optimum_model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>save_path.mkdir(exist_ok=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># use ORTQuantizer to export the model and define quantization configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer = ORTQuantizer.from_pretrained(model_id, feature=<span class="hljs-string">&quot;sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>qconfig = AutoQuantizationConfig.avx512_vnni(is_static=<span class="hljs-literal">False</span>, per_channel=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># apply the quantization configuration to the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.export(
    onnx_model_path=save_path / <span class="hljs-string">&quot;model.onnx&quot;</span>,
    onnx_quantized_model_output_path=save_path / <span class="hljs-string">&quot;model-quantized.onnx&quot;</span>,
    quantization_config=qconfig,
    )
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.model.config.save_pretrained(save_path) <span class="hljs-comment"># saves config.json </span>

<span class="hljs-comment"># load optimized model from local path or repository</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(save_path,file_name=<span class="hljs-string">&quot;model-quantized.onnx&quot;</span>)

<span class="hljs-comment"># create transformers pipeline</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_clx = pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;I like the new ORT pipeline&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_clx(text)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(pred)

<span class="hljs-comment"># save model &amp; push model to the hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.push_to_hub(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>,
                  repository_id=<span class="hljs-string">&quot;my-onnx-repo&quot;</span>,
                  use_auth_token=<span class="hljs-literal">True</span>
                  )`}}),ve=new te({}),we=new je({props:{code:`from pathlib import Path
from optimum.onnxruntime import ORTModelForSequenceClassification, ORTOptimizer
from optimum.onnxruntime.configuration import OptimizationConfig
from optimum.pipelines import pipeline

model_id = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(model_id)
save_path = Path("optimum_model")
save_path.mkdir(exist_ok=True)

optimizer = ORTOptimizer.from_pretrained(model_id, feature="sequence-classification")
optimization_config = OptimizationConfig(optimization_level=2)

optimizer.export(
optimizer.model.config.save_pretrained(save_path) # saves config.json 

model = ORTModelForSequenceClassification.from_pretrained(save_path,file_name="model-optimized.onnx")

onnx_clx = pipeline("text-classification", model=model, tokenizer=tokenizer)
text = "I like the new ORT pipeline"
pred = onnx_clx(text)
print(pred)

tokenizer.save_pretrained("new_path_for_directory")
model.save_pretrained("new_path_for_directory")
model.push_to_hub("new_path_for_directory",`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pathlib <span class="hljs-keyword">import</span> Path
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification, ORTOptimizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> OptimizationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-comment"># define model_id and load tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_id)
<span class="hljs-meta">&gt;&gt;&gt; </span>save_path = Path(<span class="hljs-string">&quot;optimum_model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>save_path.mkdir(exist_ok=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># use ORTOptimizer to export the model and define quantization configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(model_id, feature=<span class="hljs-string">&quot;sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>optimization_config = OptimizationConfig(optimization_level=<span class="hljs-number">2</span>)

<span class="hljs-comment"># apply the optimization configuration to the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.export(
    onnx_model_path=save_path / <span class="hljs-string">&quot;model.onnx&quot;</span>,
    onnx_optimized_model_output_path=save_path / <span class="hljs-string">&quot;model-optimized.onnx&quot;</span>,
    optimization_config=optimization_config,
)
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.model.config.save_pretrained(save_path) <span class="hljs-comment"># saves config.json </span>

<span class="hljs-comment"># load optimized model from local path or repository</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(save_path,file_name=<span class="hljs-string">&quot;model-optimized.onnx&quot;</span>)

<span class="hljs-comment"># create transformers pipeline</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_clx = pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;I like the new ORT pipeline&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_clx(text)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(pred)

<span class="hljs-comment"># save model &amp; push model to the hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.push_to_hub(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>,
                  repository_id=<span class="hljs-string">&quot;my-onnx-repo&quot;</span>,
                  use_auth_token=<span class="hljs-literal">True</span>)`}}),qe=new te({}),ke=new je({props:{code:`

`,highlighted:`from transformers import AutoTokenizer, pipeline
<span class="hljs-deletion">-from transformers import AutoModelForQuestionAnswering</span>
<span class="hljs-addition">+from optimum.onnxruntime import ORTModelForQuestionAnswering</span>

<span class="hljs-deletion">-model = AutoModelForQuestionAnswering.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)</span>
<span class="hljs-addition">+model = ORTModelForQuestionAnswering.from_transformers(&quot;optimum/roberta-base-squad2&quot;)</span>
tokenizer = AutoTokenizer.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)

onnx_qa = pipeline(&quot;question-answering&quot;,model=model,tokenizer=tokenizer)

question = &quot;What&#x27;s my name?&quot;
context = &quot;My name is Philipp and I live in Nuremberg.&quot;
pred = onnx_qa(question, context)`}}),{c(){h=o("meta"),X=c(),g=o("h1"),E=o("a"),N=o("span"),q($.$$.fragment),C=c(),U=o("span"),vs=i("Optimum pipelines for inference"),Pt=c(),T=o("p"),ws=i("The "),Me=o("code"),qs=i("pipeline()"),ks=i(" function makes it simple to use models from the "),se=o("a"),zs=i("Model Hub"),js=i(` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Pe=o("code"),ys=i("pipeline()"),xs=i(" function!"),Nt=c(),q(W.$$.fragment),Ft=c(),ye=o("p"),Os=i("Currenlty supported tasks are:"),Qt=c(),xe=o("p"),Ne=o("strong"),$s=i("ONNX Runtime"),St=c(),d=o("ul"),Fe=o("li"),Qe=o("code"),Es=i("feature-extraction"),Ts=c(),Se=o("li"),De=o("code"),bs=i("text-classification"),As=c(),Ie=o("li"),He=o("code"),Rs=i("token-classification"),Cs=c(),Le=o("li"),Xe=o("code"),Ms=i("question-answering"),Ps=c(),Ue=o("li"),We=o("code"),Ns=i("zero-shot-classification"),Fs=c(),Be=o("li"),Ge=o("code"),Qs=i("text-generation"),Ss=c(),Ye=o("li"),Je=o("code"),Ds=i("text2text-generation"),Is=c(),Ve=o("li"),Ke=o("code"),Hs=i("summarization"),Ls=c(),Ze=o("li"),et=o("code"),Xs=i("translation"),Dt=c(),F=o("h2"),B=o("a"),tt=o("span"),q(oe.$$.fragment),Us=c(),st=o("span"),Ws=i("Optimum pipeline usage"),It=c(),M=o("p"),Bs=i("While each task has an associated pipeline class, it is simpler to use the general "),ot=o("code"),Gs=i("pipeline()"),Ys=i(` function which wraps all the task-specific pipelines in one object.
The `),nt=o("code"),Js=i("pipeline()"),Vs=i(" function automatically loads a default model and tokenizer capable of inference for your task."),Ht=c(),Oe=o("ol"),at=o("li"),Ks=i("Start by creating a pipeline by specifying an inference task:"),Lt=c(),q(ne.$$.fragment),Xt=c(),ae=o("ol"),ie=o("li"),Zs=i("Pass your input text to the "),it=o("code"),eo=i("pipeline()"),to=i(" function:"),Ut=c(),q(re.$$.fragment),Wt=c(),$e=o("p"),le=o("em"),so=i("Note: The default models used in the "),rt=o("code"),oo=i("pipeline()"),no=i(" function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),Bt=c(),Q=o("h3"),G=o("a"),lt=o("span"),q(pe.$$.fragment),ao=c(),pt=o("span"),io=i("Using vanilla Transformers model and converting to ONNX"),Gt=c(),_=o("p"),ro=i("The "),mt=o("code"),lo=i("pipeline()"),po=i(" function accepts any supported model from the "),me=o("a"),mo=i("Model Hub"),co=i(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ct=o("code"),uo=i('from_pretrained("{model_id}",from_transformers=True)'),ho=i(" method associated with the "),ut=o("code"),fo=i("ORTModelFor*"),go=i("\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),Ee=o("a"),_o=i("ORTModelForQuestionAnswering"),vo=i(" class for question answering:"),Yt=c(),q(ce.$$.fragment),Jt=c(),S=o("h3"),Y=o("a"),dt=o("span"),q(ue.$$.fragment),wo=c(),ht=o("span"),qo=i("Using Optimum models"),Vt=c(),O=o("p"),ko=i("The "),ft=o("code"),zo=i("pipeline()"),jo=i(" function is tightly integrated with "),de=o("a"),yo=i("Model Hub"),xo=i(` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),gt=o("code"),Oo=i("from_pretrained()"),$o=i(" method associated with the corresponding "),_t=o("code"),Eo=i("ORTModelFor*"),To=i("\nand `AutoTokenizer\u2019 class. For example, here\u2019s how you can load an optimized model for question answering:"),Kt=c(),q(he.$$.fragment),Zt=c(),D=o("h3"),J=o("a"),vt=o("span"),q(fe.$$.fragment),bo=c(),wt=o("span"),Ao=i("Optimizing and quantizing in pipelines"),es=c(),v=o("p"),Ro=i("The "),qt=o("code"),Co=i("pipeline()"),Mo=i(" function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),kt=o("code"),Po=i("ORTQuantizer"),No=i(" and "),zt=o("code"),Fo=i("ORTOptimizer"),Qo=i(`.
Below you can find two examples on how you could `),Te=o("a"),So=i("ORTOptimizer"),Do=i(" and "),be=o("a"),Io=i("ORTQuantizer"),Ho=i(" to optimize/quantize your model and use it for inference afterwards."),ts=c(),I=o("h3"),V=o("a"),jt=o("span"),q(ge.$$.fragment),Lo=c(),Ae=o("span"),Xo=i("Quantizing with "),yt=o("code"),Uo=i("ORTQuantizer"),ss=c(),q(_e.$$.fragment),os=c(),H=o("h3"),K=o("a"),xt=o("span"),q(ve.$$.fragment),Wo=c(),Re=o("span"),Bo=i("Optimizing with "),Ot=o("code"),Go=i("ORTOptimizer"),ns=c(),q(we.$$.fragment),as=c(),L=o("h2"),Z=o("a"),$t=o("span"),q(qe.$$.fragment),Yo=c(),Et=o("span"),Jo=i("Transformers pipeline usage"),is=c(),w=o("p"),Vo=i("The "),Tt=o("code"),Ko=i("pipeline()"),Zo=i(" function is just a light wrapper around the "),bt=o("code"),en=i("transformers.pipeline"),tn=i(` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),At=o("code"),sn=i("transformers.pipeline"),on=i(" and just replace your "),Rt=o("code"),nn=i("AutoFor*"),an=i(` with the optimum
`),Ct=o("code"),rn=i("ORTModelFor*"),ln=i(" class."),rs=c(),q(ke.$$.fragment),this.h()},l(e){const l=Pa('[data-svelte="svelte-1phssyn"]',document.head);h=n(l,"META",{name:!0,content:!0}),l.forEach(s),X=u(e),g=n(e,"H1",{class:!0});var ze=a(g);E=n(ze,"A",{id:!0,class:!0,href:!0});var cn=a(E);N=n(cn,"SPAN",{});var un=a(N);k($.$$.fragment,un),un.forEach(s),cn.forEach(s),C=u(ze),U=n(ze,"SPAN",{});var dn=a(U);vs=r(dn,"Optimum pipelines for inference"),dn.forEach(s),ze.forEach(s),Pt=u(e),T=n(e,"P",{});var ee=a(T);ws=r(ee,"The "),Me=n(ee,"CODE",{});var hn=a(Me);qs=r(hn,"pipeline()"),hn.forEach(s),ks=r(ee," function makes it simple to use models from the "),se=n(ee,"A",{href:!0,rel:!0});var fn=a(se);zs=r(fn,"Model Hub"),fn.forEach(s),js=r(ee,` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Pe=n(ee,"CODE",{});var gn=a(Pe);ys=r(gn,"pipeline()"),gn.forEach(s),xs=r(ee," function!"),ee.forEach(s),Nt=u(e),k(W.$$.fragment,e),Ft=u(e),ye=n(e,"P",{});var _n=a(ye);Os=r(_n,"Currenlty supported tasks are:"),_n.forEach(s),Qt=u(e),xe=n(e,"P",{});var vn=a(xe);Ne=n(vn,"STRONG",{});var wn=a(Ne);$s=r(wn,"ONNX Runtime"),wn.forEach(s),vn.forEach(s),St=u(e),d=n(e,"UL",{});var f=a(d);Fe=n(f,"LI",{});var qn=a(Fe);Qe=n(qn,"CODE",{});var kn=a(Qe);Es=r(kn,"feature-extraction"),kn.forEach(s),qn.forEach(s),Ts=u(f),Se=n(f,"LI",{});var zn=a(Se);De=n(zn,"CODE",{});var jn=a(De);bs=r(jn,"text-classification"),jn.forEach(s),zn.forEach(s),As=u(f),Ie=n(f,"LI",{});var yn=a(Ie);He=n(yn,"CODE",{});var xn=a(He);Rs=r(xn,"token-classification"),xn.forEach(s),yn.forEach(s),Cs=u(f),Le=n(f,"LI",{});var On=a(Le);Xe=n(On,"CODE",{});var $n=a(Xe);Ms=r($n,"question-answering"),$n.forEach(s),On.forEach(s),Ps=u(f),Ue=n(f,"LI",{});var En=a(Ue);We=n(En,"CODE",{});var Tn=a(We);Ns=r(Tn,"zero-shot-classification"),Tn.forEach(s),En.forEach(s),Fs=u(f),Be=n(f,"LI",{});var bn=a(Be);Ge=n(bn,"CODE",{});var An=a(Ge);Qs=r(An,"text-generation"),An.forEach(s),bn.forEach(s),Ss=u(f),Ye=n(f,"LI",{});var Rn=a(Ye);Je=n(Rn,"CODE",{});var Cn=a(Je);Ds=r(Cn,"text2text-generation"),Cn.forEach(s),Rn.forEach(s),Is=u(f),Ve=n(f,"LI",{});var Mn=a(Ve);Ke=n(Mn,"CODE",{});var Pn=a(Ke);Hs=r(Pn,"summarization"),Pn.forEach(s),Mn.forEach(s),Ls=u(f),Ze=n(f,"LI",{});var Nn=a(Ze);et=n(Nn,"CODE",{});var Fn=a(et);Xs=r(Fn,"translation"),Fn.forEach(s),Nn.forEach(s),f.forEach(s),Dt=u(e),F=n(e,"H2",{class:!0});var ps=a(F);B=n(ps,"A",{id:!0,class:!0,href:!0});var Qn=a(B);tt=n(Qn,"SPAN",{});var Sn=a(tt);k(oe.$$.fragment,Sn),Sn.forEach(s),Qn.forEach(s),Us=u(ps),st=n(ps,"SPAN",{});var Dn=a(st);Ws=r(Dn,"Optimum pipeline usage"),Dn.forEach(s),ps.forEach(s),It=u(e),M=n(e,"P",{});var Ce=a(M);Bs=r(Ce,"While each task has an associated pipeline class, it is simpler to use the general "),ot=n(Ce,"CODE",{});var In=a(ot);Gs=r(In,"pipeline()"),In.forEach(s),Ys=r(Ce,` function which wraps all the task-specific pipelines in one object.
The `),nt=n(Ce,"CODE",{});var Hn=a(nt);Js=r(Hn,"pipeline()"),Hn.forEach(s),Vs=r(Ce," function automatically loads a default model and tokenizer capable of inference for your task."),Ce.forEach(s),Ht=u(e),Oe=n(e,"OL",{});var Ln=a(Oe);at=n(Ln,"LI",{});var Xn=a(at);Ks=r(Xn,"Start by creating a pipeline by specifying an inference task:"),Xn.forEach(s),Ln.forEach(s),Lt=u(e),k(ne.$$.fragment,e),Xt=u(e),ae=n(e,"OL",{start:!0});var Un=a(ae);ie=n(Un,"LI",{});var ms=a(ie);Zs=r(ms,"Pass your input text to the "),it=n(ms,"CODE",{});var Wn=a(it);eo=r(Wn,"pipeline()"),Wn.forEach(s),to=r(ms," function:"),ms.forEach(s),Un.forEach(s),Ut=u(e),k(re.$$.fragment,e),Wt=u(e),$e=n(e,"P",{});var Bn=a($e);le=n(Bn,"EM",{});var cs=a(le);so=r(cs,"Note: The default models used in the "),rt=n(cs,"CODE",{});var Gn=a(rt);oo=r(Gn,"pipeline()"),Gn.forEach(s),no=r(cs," function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),cs.forEach(s),Bn.forEach(s),Bt=u(e),Q=n(e,"H3",{class:!0});var us=a(Q);G=n(us,"A",{id:!0,class:!0,href:!0});var Yn=a(G);lt=n(Yn,"SPAN",{});var Jn=a(lt);k(pe.$$.fragment,Jn),Jn.forEach(s),Yn.forEach(s),ao=u(us),pt=n(us,"SPAN",{});var Vn=a(pt);io=r(Vn,"Using vanilla Transformers model and converting to ONNX"),Vn.forEach(s),us.forEach(s),Gt=u(e),_=n(e,"P",{});var b=a(_);ro=r(b,"The "),mt=n(b,"CODE",{});var Kn=a(mt);lo=r(Kn,"pipeline()"),Kn.forEach(s),po=r(b," function accepts any supported model from the "),me=n(b,"A",{href:!0,rel:!0});var Zn=a(me);mo=r(Zn,"Model Hub"),Zn.forEach(s),co=r(b,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ct=n(b,"CODE",{});var ea=a(ct);uo=r(ea,'from_pretrained("{model_id}",from_transformers=True)'),ea.forEach(s),ho=r(b," method associated with the "),ut=n(b,"CODE",{});var ta=a(ut);fo=r(ta,"ORTModelFor*"),ta.forEach(s),go=r(b,"\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),Ee=n(b,"A",{href:!0});var sa=a(Ee);_o=r(sa,"ORTModelForQuestionAnswering"),sa.forEach(s),vo=r(b," class for question answering:"),b.forEach(s),Yt=u(e),k(ce.$$.fragment,e),Jt=u(e),S=n(e,"H3",{class:!0});var ds=a(S);Y=n(ds,"A",{id:!0,class:!0,href:!0});var oa=a(Y);dt=n(oa,"SPAN",{});var na=a(dt);k(ue.$$.fragment,na),na.forEach(s),oa.forEach(s),wo=u(ds),ht=n(ds,"SPAN",{});var aa=a(ht);qo=r(aa,"Using Optimum models"),aa.forEach(s),ds.forEach(s),Vt=u(e),O=n(e,"P",{});var P=a(O);ko=r(P,"The "),ft=n(P,"CODE",{});var ia=a(ft);zo=r(ia,"pipeline()"),ia.forEach(s),jo=r(P," function is tightly integrated with "),de=n(P,"A",{href:!0,rel:!0});var ra=a(de);yo=r(ra,"Model Hub"),ra.forEach(s),xo=r(P,` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),gt=n(P,"CODE",{});var la=a(gt);Oo=r(la,"from_pretrained()"),la.forEach(s),$o=r(P," method associated with the corresponding "),_t=n(P,"CODE",{});var pa=a(_t);Eo=r(pa,"ORTModelFor*"),pa.forEach(s),To=r(P,"\nand `AutoTokenizer\u2019 class. For example, here\u2019s how you can load an optimized model for question answering:"),P.forEach(s),Kt=u(e),k(he.$$.fragment,e),Zt=u(e),D=n(e,"H3",{class:!0});var hs=a(D);J=n(hs,"A",{id:!0,class:!0,href:!0});var ma=a(J);vt=n(ma,"SPAN",{});var ca=a(vt);k(fe.$$.fragment,ca),ca.forEach(s),ma.forEach(s),bo=u(hs),wt=n(hs,"SPAN",{});var ua=a(wt);Ao=r(ua,"Optimizing and quantizing in pipelines"),ua.forEach(s),hs.forEach(s),es=u(e),v=n(e,"P",{});var A=a(v);Ro=r(A,"The "),qt=n(A,"CODE",{});var da=a(qt);Co=r(da,"pipeline()"),da.forEach(s),Mo=r(A," function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),kt=n(A,"CODE",{});var ha=a(kt);Po=r(ha,"ORTQuantizer"),ha.forEach(s),No=r(A," and "),zt=n(A,"CODE",{});var fa=a(zt);Fo=r(fa,"ORTOptimizer"),fa.forEach(s),Qo=r(A,`.
Below you can find two examples on how you could `),Te=n(A,"A",{href:!0});var ga=a(Te);So=r(ga,"ORTOptimizer"),ga.forEach(s),Do=r(A," and "),be=n(A,"A",{href:!0});var _a=a(be);Io=r(_a,"ORTQuantizer"),_a.forEach(s),Ho=r(A," to optimize/quantize your model and use it for inference afterwards."),A.forEach(s),ts=u(e),I=n(e,"H3",{class:!0});var fs=a(I);V=n(fs,"A",{id:!0,class:!0,href:!0});var va=a(V);jt=n(va,"SPAN",{});var wa=a(jt);k(ge.$$.fragment,wa),wa.forEach(s),va.forEach(s),Lo=u(fs),Ae=n(fs,"SPAN",{});var pn=a(Ae);Xo=r(pn,"Quantizing with "),yt=n(pn,"CODE",{});var qa=a(yt);Uo=r(qa,"ORTQuantizer"),qa.forEach(s),pn.forEach(s),fs.forEach(s),ss=u(e),k(_e.$$.fragment,e),os=u(e),H=n(e,"H3",{class:!0});var gs=a(H);K=n(gs,"A",{id:!0,class:!0,href:!0});var ka=a(K);xt=n(ka,"SPAN",{});var za=a(xt);k(ve.$$.fragment,za),za.forEach(s),ka.forEach(s),Wo=u(gs),Re=n(gs,"SPAN",{});var mn=a(Re);Bo=r(mn,"Optimizing with "),Ot=n(mn,"CODE",{});var ja=a(Ot);Go=r(ja,"ORTOptimizer"),ja.forEach(s),mn.forEach(s),gs.forEach(s),ns=u(e),k(we.$$.fragment,e),as=u(e),L=n(e,"H2",{class:!0});var _s=a(L);Z=n(_s,"A",{id:!0,class:!0,href:!0});var ya=a(Z);$t=n(ya,"SPAN",{});var xa=a($t);k(qe.$$.fragment,xa),xa.forEach(s),ya.forEach(s),Yo=u(_s),Et=n(_s,"SPAN",{});var Oa=a(Et);Jo=r(Oa,"Transformers pipeline usage"),Oa.forEach(s),_s.forEach(s),is=u(e),w=n(e,"P",{});var R=a(w);Vo=r(R,"The "),Tt=n(R,"CODE",{});var $a=a(Tt);Ko=r($a,"pipeline()"),$a.forEach(s),Zo=r(R," function is just a light wrapper around the "),bt=n(R,"CODE",{});var Ea=a(bt);en=r(Ea,"transformers.pipeline"),Ea.forEach(s),tn=r(R,` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),At=n(R,"CODE",{});var Ta=a(At);sn=r(Ta,"transformers.pipeline"),Ta.forEach(s),on=r(R," and just replace your "),Rt=n(R,"CODE",{});var ba=a(Rt);nn=r(ba,"AutoFor*"),ba.forEach(s),an=r(R,` with the optimum
`),Ct=n(R,"CODE",{});var Aa=a(Ct);rn=r(Aa,"ORTModelFor*"),Aa.forEach(s),ln=r(R," class."),R.forEach(s),rs=u(e),k(ke.$$.fragment,e),this.h()},h(){m(h,"name","hf:doc:metadata"),m(h,"content",JSON.stringify(Da)),m(E,"id","optimum-pipelines-for-inference"),m(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(E,"href","#optimum-pipelines-for-inference"),m(g,"class","relative group"),m(se,"href","https://huggingface.co/models"),m(se,"rel","nofollow"),m(B,"id","optimum-pipeline-usage"),m(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(B,"href","#optimum-pipeline-usage"),m(F,"class","relative group"),m(ae,"start","2"),m(G,"id","using-vanilla-transformers-model-and-converting-to-onnx"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#using-vanilla-transformers-model-and-converting-to-onnx"),m(Q,"class","relative group"),m(me,"href","https://huggingface.co/models"),m(me,"rel","nofollow"),m(Ee,"href","/docs/optimum/pr_199/en/onnxruntime/modeling_ort#optimum.onnxruntime.ORTModelForQuestionAnswering"),m(Y,"id","using-optimum-models"),m(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Y,"href","#using-optimum-models"),m(S,"class","relative group"),m(de,"href","https://huggingface.co/models"),m(de,"rel","nofollow"),m(J,"id","optimizing-and-quantizing-in-pipelines"),m(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(J,"href","#optimizing-and-quantizing-in-pipelines"),m(D,"class","relative group"),m(Te,"href","/docs/optimum/pr_199/en/onnxruntime/optimization#optimum.onnxruntime.ORTOptimizer"),m(be,"href","/docs/optimum/pr_199/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer"),m(V,"id","quantizing-with-ortquantizer"),m(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(V,"href","#quantizing-with-ortquantizer"),m(I,"class","relative group"),m(K,"id","optimizing-with-ortoptimizer"),m(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(K,"href","#optimizing-with-ortoptimizer"),m(H,"class","relative group"),m(Z,"id","transformers-pipeline-usage"),m(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Z,"href","#transformers-pipeline-usage"),m(L,"class","relative group")},m(e,l){t(document.head,h),p(e,X,l),p(e,g,l),t(g,E),t(E,N),z($,N,null),t(g,C),t(g,U),t(U,vs),p(e,Pt,l),p(e,T,l),t(T,ws),t(T,Me),t(Me,qs),t(T,ks),t(T,se),t(se,zs),t(T,js),t(T,Pe),t(Pe,ys),t(T,xs),p(e,Nt,l),z(W,e,l),p(e,Ft,l),p(e,ye,l),t(ye,Os),p(e,Qt,l),p(e,xe,l),t(xe,Ne),t(Ne,$s),p(e,St,l),p(e,d,l),t(d,Fe),t(Fe,Qe),t(Qe,Es),t(d,Ts),t(d,Se),t(Se,De),t(De,bs),t(d,As),t(d,Ie),t(Ie,He),t(He,Rs),t(d,Cs),t(d,Le),t(Le,Xe),t(Xe,Ms),t(d,Ps),t(d,Ue),t(Ue,We),t(We,Ns),t(d,Fs),t(d,Be),t(Be,Ge),t(Ge,Qs),t(d,Ss),t(d,Ye),t(Ye,Je),t(Je,Ds),t(d,Is),t(d,Ve),t(Ve,Ke),t(Ke,Hs),t(d,Ls),t(d,Ze),t(Ze,et),t(et,Xs),p(e,Dt,l),p(e,F,l),t(F,B),t(B,tt),z(oe,tt,null),t(F,Us),t(F,st),t(st,Ws),p(e,It,l),p(e,M,l),t(M,Bs),t(M,ot),t(ot,Gs),t(M,Ys),t(M,nt),t(nt,Js),t(M,Vs),p(e,Ht,l),p(e,Oe,l),t(Oe,at),t(at,Ks),p(e,Lt,l),z(ne,e,l),p(e,Xt,l),p(e,ae,l),t(ae,ie),t(ie,Zs),t(ie,it),t(it,eo),t(ie,to),p(e,Ut,l),z(re,e,l),p(e,Wt,l),p(e,$e,l),t($e,le),t(le,so),t(le,rt),t(rt,oo),t(le,no),p(e,Bt,l),p(e,Q,l),t(Q,G),t(G,lt),z(pe,lt,null),t(Q,ao),t(Q,pt),t(pt,io),p(e,Gt,l),p(e,_,l),t(_,ro),t(_,mt),t(mt,lo),t(_,po),t(_,me),t(me,mo),t(_,co),t(_,ct),t(ct,uo),t(_,ho),t(_,ut),t(ut,fo),t(_,go),t(_,Ee),t(Ee,_o),t(_,vo),p(e,Yt,l),z(ce,e,l),p(e,Jt,l),p(e,S,l),t(S,Y),t(Y,dt),z(ue,dt,null),t(S,wo),t(S,ht),t(ht,qo),p(e,Vt,l),p(e,O,l),t(O,ko),t(O,ft),t(ft,zo),t(O,jo),t(O,de),t(de,yo),t(O,xo),t(O,gt),t(gt,Oo),t(O,$o),t(O,_t),t(_t,Eo),t(O,To),p(e,Kt,l),z(he,e,l),p(e,Zt,l),p(e,D,l),t(D,J),t(J,vt),z(fe,vt,null),t(D,bo),t(D,wt),t(wt,Ao),p(e,es,l),p(e,v,l),t(v,Ro),t(v,qt),t(qt,Co),t(v,Mo),t(v,kt),t(kt,Po),t(v,No),t(v,zt),t(zt,Fo),t(v,Qo),t(v,Te),t(Te,So),t(v,Do),t(v,be),t(be,Io),t(v,Ho),p(e,ts,l),p(e,I,l),t(I,V),t(V,jt),z(ge,jt,null),t(I,Lo),t(I,Ae),t(Ae,Xo),t(Ae,yt),t(yt,Uo),p(e,ss,l),z(_e,e,l),p(e,os,l),p(e,H,l),t(H,K),t(K,xt),z(ve,xt,null),t(H,Wo),t(H,Re),t(Re,Bo),t(Re,Ot),t(Ot,Go),p(e,ns,l),z(we,e,l),p(e,as,l),p(e,L,l),t(L,Z),t(Z,$t),z(qe,$t,null),t(L,Yo),t(L,Et),t(Et,Jo),p(e,is,l),p(e,w,l),t(w,Vo),t(w,Tt),t(Tt,Ko),t(w,Zo),t(w,bt),t(bt,en),t(w,tn),t(w,At),t(At,sn),t(w,on),t(w,Rt),t(Rt,nn),t(w,an),t(w,Ct),t(Ct,rn),t(w,ln),p(e,rs,l),z(ke,e,l),ls=!0},p(e,[l]){const ze={};l&2&&(ze.$$scope={dirty:l,ctx:e}),W.$set(ze)},i(e){ls||(j($.$$.fragment,e),j(W.$$.fragment,e),j(oe.$$.fragment,e),j(ne.$$.fragment,e),j(re.$$.fragment,e),j(pe.$$.fragment,e),j(ce.$$.fragment,e),j(ue.$$.fragment,e),j(he.$$.fragment,e),j(fe.$$.fragment,e),j(ge.$$.fragment,e),j(_e.$$.fragment,e),j(ve.$$.fragment,e),j(we.$$.fragment,e),j(qe.$$.fragment,e),j(ke.$$.fragment,e),ls=!0)},o(e){y($.$$.fragment,e),y(W.$$.fragment,e),y(oe.$$.fragment,e),y(ne.$$.fragment,e),y(re.$$.fragment,e),y(pe.$$.fragment,e),y(ce.$$.fragment,e),y(ue.$$.fragment,e),y(he.$$.fragment,e),y(fe.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(ve.$$.fragment,e),y(we.$$.fragment,e),y(qe.$$.fragment,e),y(ke.$$.fragment,e),ls=!1},d(e){s(h),e&&s(X),e&&s(g),x($),e&&s(Pt),e&&s(T),e&&s(Nt),x(W,e),e&&s(Ft),e&&s(ye),e&&s(Qt),e&&s(xe),e&&s(St),e&&s(d),e&&s(Dt),e&&s(F),x(oe),e&&s(It),e&&s(M),e&&s(Ht),e&&s(Oe),e&&s(Lt),x(ne,e),e&&s(Xt),e&&s(ae),e&&s(Ut),x(re,e),e&&s(Wt),e&&s($e),e&&s(Bt),e&&s(Q),x(pe),e&&s(Gt),e&&s(_),e&&s(Yt),x(ce,e),e&&s(Jt),e&&s(S),x(ue),e&&s(Vt),e&&s(O),e&&s(Kt),x(he,e),e&&s(Zt),e&&s(D),x(fe),e&&s(es),e&&s(v),e&&s(ts),e&&s(I),x(ge),e&&s(ss),x(_e,e),e&&s(os),e&&s(H),x(ve),e&&s(ns),x(we,e),e&&s(as),e&&s(L),x(qe),e&&s(is),e&&s(w),e&&s(rs),x(ke,e)}}}const Da={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"using-vanilla-transformers-model-and-converting-to-onnx",title:"Using vanilla Transformers model and converting to ONNX"},{local:"using-optimum-models",title:"Using Optimum models"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and quantizing in pipelines"},{local:"quantizing-with-ortquantizer",title:"Quantizing with `ORTQuantizer`"},{local:"optimizing-with-ortoptimizer",title:"Optimizing with `ORTOptimizer`"}],title:"Optimum pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum pipelines for inference"};function Ia(Mt){return Na(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Wa extends Ra{constructor(h){super();Ca(this,h,Ia,Sa,Ma,{})}}export{Wa as default,Da as metadata};
