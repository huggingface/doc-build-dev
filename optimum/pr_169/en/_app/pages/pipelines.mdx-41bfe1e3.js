import{S as qa,i as za,s as ka,e as o,k as c,w as v,t as i,M as ja,c as n,d as s,m as u,a,x as w,h as r,b as m,F as t,g as p,y as q,q as z,o as k,B as j,v as ya}from"../chunks/vendor-4918fc3c.js";import{T as xa}from"../chunks/Tip-3d800dd6.js";import{I as oe}from"../chunks/IconCopyLink-21d338b1.js";import{C as Te}from"../chunks/CodeBlock-99419108.js";function Oa(Rt){let d,B,y,E,Q,$,ne,F;return{c(){d=o("p"),B=i("You can also use the "),y=o("code"),E=i("pipeline()"),Q=i(" function from Transformers and provide your "),$=o("code"),ne=i("OptimumModel"),F=i(".")},l(D){d=n(D,"P",{});var T=a(d);B=r(T,"You can also use the "),y=n(T,"CODE",{});var x=a(y);E=r(x,"pipeline()"),x.forEach(s),Q=r(T," function from Transformers and provide your "),$=n(T,"CODE",{});var Ee=a($);ne=r(Ee,"OptimumModel"),Ee.forEach(s),F=r(T,"."),T.forEach(s)},m(D,T){p(D,d,T),t(d,B),t(d,y),t(y,E),t(d,Q),t(d,$),t($,ne),t(d,F)},d(D){D&&s(d)}}}function $a(Rt){let d,B,y,E,Q,$,ne,F,D,T,x,Ee,Pe,_s,vs,ae,ws,qs,Qe,zs,ks,Ct,X,Mt,be,js,Pt,Ae,Fe,ys,Qt,h,De,Ne,xs,Os,Se,Ie,$s,Ts,He,Le,Es,bs,Ue,We,As,Rs,Be,Xe,Cs,Ms,Ye,Ge,Ps,Ft,N,Y,Je,ie,Qs,Ve,Fs,Dt,b,Ds,Ke,Ns,Ss,Ze,Is,Hs,et,Ls,Us,Nt,Re,re,Ws,tt,Bs,Xs,St,le,It,pe,me,Ys,st,Gs,Js,Ht,ce,Lt,Ce,ue,Vs,ot,Ks,Zs,Ut,S,G,nt,de,eo,at,to,Wt,f,so,it,oo,no,he,ao,io,rt,ro,lo,lt,po,mo,pt,co,uo,Bt,fe,Xt,I,J,mt,ge,ho,ct,fo,Yt,O,go,ut,_o,vo,_e,wo,qo,dt,zo,ko,ht,jo,yo,Gt,ve,Jt,H,V,ft,we,xo,gt,Oo,Vt,g,$o,_t,To,Eo,vt,bo,Ao,wt,Ro,Co,qt,Mo,Po,Me,Qo,Fo,Kt,L,K,zt,qe,Do,kt,No,Zt,ze,es,U,Z,jt,ke,So,je,Io,yt,Ho,Lo,ts,ye,ss,W,ee,xt,xe,Uo,Ot,Wo,os,_,Bo,$t,Xo,Yo,Tt,Go,Jo,Et,Vo,Ko,bt,Zo,en,At,tn,sn,ns,Oe,as;return $=new oe({}),X=new xa({props:{$$slots:{default:[Oa]},$$scope:{ctx:Rt}}}),ie=new oe({}),le=new Te({props:{code:`from optimum.pipelines import pipeline

classifier = pipeline(task="text-classification", accelerator="ort")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(task=<span class="hljs-string">&quot;text-classification&quot;</span>, accelerator=<span class="hljs-string">&quot;ort&quot;</span>)
`}}),ce=new Te({props:{code:'classifier("I like you. I love you.")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>classifier(<span class="hljs-string">&quot;I like you. I love you.&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9998838901519775</span>}]`}}),de=new oe({}),fe=new Te({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),ge=new oe({}),ve=new Te({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),we=new oe({}),qe=new oe({}),ze=new Te({props:{code:`from pathlib import Path
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
                  )`}}),ke=new oe({}),ye=new Te({props:{code:`from pathlib import Path
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
                  use_auth_token=<span class="hljs-literal">True</span>)`}}),xe=new oe({}),Oe=new Te({props:{code:`from transformers import AutoTokenizer, pipeline
-from transformers import AutoModelForQuestionAnswering
+from optimum.onnxruntime import ORTModelForQuestionAnswering

-model = AutoModelForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2")
+model = ORTModelForQuestionAnswering.from_transformers("optimum/roberta-base-squad2")
tokenizer = AutoTokenizer.from_pretrained("deepset/roberta-base-squad2")

onnx_qa = pipeline("question-answering",model=model,tokenizer=tokenizer)

question = "What's my name?"
context = "My name is Philipp and I live in Nuremberg."
pred = onnx_qa(question, context)`,highlighted:`from transformers import AutoTokenizer, pipeline
<span class="hljs-deletion">-from transformers import AutoModelForQuestionAnswering</span>
<span class="hljs-addition">+from optimum.onnxruntime import ORTModelForQuestionAnswering</span>

<span class="hljs-deletion">-model = AutoModelForQuestionAnswering.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)</span>
<span class="hljs-addition">+model = ORTModelForQuestionAnswering.from_transformers(&quot;optimum/roberta-base-squad2&quot;)</span>
tokenizer = AutoTokenizer.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)

onnx_qa = pipeline(&quot;question-answering&quot;,model=model,tokenizer=tokenizer)

question = &quot;What&#x27;s my name?&quot;
context = &quot;My name is Philipp and I live in Nuremberg.&quot;
pred = onnx_qa(question, context)`}}),{c(){d=o("meta"),B=c(),y=o("h1"),E=o("a"),Q=o("span"),v($.$$.fragment),ne=c(),F=o("span"),D=i("Optimum pipelines for inference"),T=c(),x=o("p"),Ee=i("The "),Pe=o("code"),_s=i("pipeline()"),vs=i(" makes it simple to use models from the "),ae=o("a"),ws=i("Model Hub"),qs=i(` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Qe=o("code"),zs=i("pipeline"),ks=i("! This tutorial will teach you to:"),Ct=c(),v(X.$$.fragment),Mt=c(),be=o("p"),js=i("Currenlty supported tasks are:"),Pt=c(),Ae=o("p"),Fe=o("strong"),ys=i("Onnx Runtime"),Qt=c(),h=o("ul"),De=o("li"),Ne=o("code"),xs=i("feature-extraction"),Os=c(),Se=o("li"),Ie=o("code"),$s=i("text-classification"),Ts=c(),He=o("li"),Le=o("code"),Es=i("token-classification"),bs=c(),Ue=o("li"),We=o("code"),As=i("question-answering"),Rs=c(),Be=o("li"),Xe=o("code"),Cs=i("zero-shot-classification"),Ms=c(),Ye=o("li"),Ge=o("code"),Ps=i("text-generation"),Ft=c(),N=o("h2"),Y=o("a"),Je=o("span"),v(ie.$$.fragment),Qs=c(),Ve=o("span"),Fs=i("Optimum pipeline usage"),Dt=c(),b=o("p"),Ds=i("While each task has an associated [~"),Ke=o("code"),Ns=i("pipeline"),Ss=i("], which it is simpler to use the general [~"),Ze=o("code"),Is=i("pipeline"),Hs=i(`] abstraction which contains all the specific task pipelines.
The [~`),et=o("code"),Ls=i("pipeline"),Us=i("] automatically loads a default model and tokenizer capable of inference for your task."),Nt=c(),Re=o("ol"),re=o("li"),Ws=i("Start by creating a [~"),tt=o("code"),Bs=i("pipeline"),Xs=i("] and specify an inference task:"),St=c(),v(le.$$.fragment),It=c(),pe=o("ol"),me=o("li"),Ys=i("Pass your input text to the [~"),st=o("code"),Gs=i("pipeline"),Js=i("]:"),Ht=c(),v(ce.$$.fragment),Lt=c(),Ce=o("p"),ue=o("em"),Vs=i("Note: The default models used in the [~"),ot=o("code"),Ks=i("pipeline"),Zs=i("] are not optimized or quantized, there won\u2019t be an performance improvement compared to there pytorch counter parts."),Ut=c(),S=o("h3"),G=o("a"),nt=o("span"),v(de.$$.fragment),eo=c(),at=o("span"),to=i("Using vanilla Transformers model and converting to ONNX"),Wt=c(),f=o("p"),so=i("The "),it=o("code"),oo=i("pipeline"),no=i(" accepts any supported model from the "),he=o("a"),ao=i("Model Hub"),io=i(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),rt=o("code"),ro=i('from_pretrained("{model_id}",from_transformers=True)'),lo=i(" method associated with the "),lt=o("code"),po=i("ORTModelFor*"),mo=i("\n[`AutoTokenizer\u2019] class. For example, here\u2019s how you can load the "),pt=o("code"),co=i("ORTModelForQuestionAnswering"),uo=i(" class for question answering:"),Bt=c(),v(fe.$$.fragment),Xt=c(),I=o("h3"),J=o("a"),mt=o("span"),v(ge.$$.fragment),ho=c(),ct=o("span"),fo=i("Using Optimum models"),Yt=c(),O=o("p"),go=i("The "),ut=o("code"),_o=i("pipeline"),vo=i(" is tightly integrated with "),_e=o("a"),wo=i("Model Hub"),qo=i(` and can load optimized models directly, e.g. those created with OnnxRuntime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),dt=o("code"),zo=i("from_pretrained()"),ko=i(" method associated with the corresponding "),ht=o("code"),jo=i("ORTModelFor*"),yo=i("\nand [`AutoTokenizer\u2019] class. For example, here\u2019s how you can load an optimized model for question answering:"),Gt=c(),v(ve.$$.fragment),Jt=c(),H=o("h3"),V=o("a"),ft=o("span"),v(we.$$.fragment),xo=c(),gt=o("span"),Oo=i("Optimizing and Quantizing in Pipelines"),Vt=c(),g=o("p"),$o=i("The "),_t=o("code"),To=i("pipeline"),Eo=i(" can not only run inference on vanilla Onnxruntime checkpoints you can also use checkpoints optimized with "),vt=o("code"),bo=i("ORTQuantizer"),Ao=i(" and "),wt=o("code"),Ro=i("ORTOptimizer"),Co=i(`
Below you can find two examples on how you could [~`),qt=o("code"),Mo=i("ORTOptimizer"),Po=i("] and "),Me=o("a"),Qo=i("ORTQuantizer"),Fo=i(" to optimize/quantize your model and use it for inference afterwards."),Kt=c(),L=o("h3"),K=o("a"),zt=o("span"),v(qe.$$.fragment),Do=c(),kt=o("span"),No=i("Quantizing with [ORTQuantizer](/docs/optimum/pr_169/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer)"),Zt=c(),v(ze.$$.fragment),es=c(),U=o("h3"),Z=o("a"),jt=o("span"),v(ke.$$.fragment),So=c(),je=o("span"),Io=i("Optimizing with [~"),yt=o("code"),Ho=i("ORTOptimizer"),Lo=i("]"),ts=c(),v(ye.$$.fragment),ss=c(),W=o("h2"),ee=o("a"),xt=o("span"),v(xe.$$.fragment),Uo=c(),Ot=o("span"),Wo=i("Transformers pipeline usage"),os=c(),_=o("p"),Bo=i("The "),$t=o("code"),Xo=i("pipeline"),Yo=i(" is just a light wrapper around the "),Tt=o("code"),Go=i("transformers.pipeline"),Jo=i(` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),Et=o("code"),Vo=i("transformers.pipeline"),Ko=i(" and just replace your "),bt=o("code"),Zo=i("AutoFor*"),en=i(` with the optimum
`),At=o("code"),tn=i("ORTModelFor*"),sn=i(" class."),ns=c(),v(Oe.$$.fragment),this.h()},l(e){const l=ja('[data-svelte="svelte-1phssyn"]',document.head);d=n(l,"META",{name:!0,content:!0}),l.forEach(s),B=u(e),y=n(e,"H1",{class:!0});var $e=a(y);E=n($e,"A",{id:!0,class:!0,href:!0});var on=a(E);Q=n(on,"SPAN",{});var nn=a(Q);w($.$$.fragment,nn),nn.forEach(s),on.forEach(s),ne=u($e),F=n($e,"SPAN",{});var an=a(F);D=r(an,"Optimum pipelines for inference"),an.forEach(s),$e.forEach(s),T=u(e),x=n(e,"P",{});var te=a(x);Ee=r(te,"The "),Pe=n(te,"CODE",{});var rn=a(Pe);_s=r(rn,"pipeline()"),rn.forEach(s),vs=r(te," makes it simple to use models from the "),ae=n(te,"A",{href:!0,rel:!0});var ln=a(ae);ws=r(ln,"Model Hub"),ln.forEach(s),qs=r(te,` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Qe=n(te,"CODE",{});var pn=a(Qe);zs=r(pn,"pipeline"),pn.forEach(s),ks=r(te,"! This tutorial will teach you to:"),te.forEach(s),Ct=u(e),w(X.$$.fragment,e),Mt=u(e),be=n(e,"P",{});var mn=a(be);js=r(mn,"Currenlty supported tasks are:"),mn.forEach(s),Pt=u(e),Ae=n(e,"P",{});var cn=a(Ae);Fe=n(cn,"STRONG",{});var un=a(Fe);ys=r(un,"Onnx Runtime"),un.forEach(s),cn.forEach(s),Qt=u(e),h=n(e,"UL",{});var A=a(h);De=n(A,"LI",{});var dn=a(De);Ne=n(dn,"CODE",{});var hn=a(Ne);xs=r(hn,"feature-extraction"),hn.forEach(s),dn.forEach(s),Os=u(A),Se=n(A,"LI",{});var fn=a(Se);Ie=n(fn,"CODE",{});var gn=a(Ie);$s=r(gn,"text-classification"),gn.forEach(s),fn.forEach(s),Ts=u(A),He=n(A,"LI",{});var _n=a(He);Le=n(_n,"CODE",{});var vn=a(Le);Es=r(vn,"token-classification"),vn.forEach(s),_n.forEach(s),bs=u(A),Ue=n(A,"LI",{});var wn=a(Ue);We=n(wn,"CODE",{});var qn=a(We);As=r(qn,"question-answering"),qn.forEach(s),wn.forEach(s),Rs=u(A),Be=n(A,"LI",{});var zn=a(Be);Xe=n(zn,"CODE",{});var kn=a(Xe);Cs=r(kn,"zero-shot-classification"),kn.forEach(s),zn.forEach(s),Ms=u(A),Ye=n(A,"LI",{});var jn=a(Ye);Ge=n(jn,"CODE",{});var yn=a(Ge);Ps=r(yn,"text-generation"),yn.forEach(s),jn.forEach(s),A.forEach(s),Ft=u(e),N=n(e,"H2",{class:!0});var is=a(N);Y=n(is,"A",{id:!0,class:!0,href:!0});var xn=a(Y);Je=n(xn,"SPAN",{});var On=a(Je);w(ie.$$.fragment,On),On.forEach(s),xn.forEach(s),Qs=u(is),Ve=n(is,"SPAN",{});var $n=a(Ve);Fs=r($n,"Optimum pipeline usage"),$n.forEach(s),is.forEach(s),Dt=u(e),b=n(e,"P",{});var se=a(b);Ds=r(se,"While each task has an associated [~"),Ke=n(se,"CODE",{});var Tn=a(Ke);Ns=r(Tn,"pipeline"),Tn.forEach(s),Ss=r(se,"], which it is simpler to use the general [~"),Ze=n(se,"CODE",{});var En=a(Ze);Is=r(En,"pipeline"),En.forEach(s),Hs=r(se,`] abstraction which contains all the specific task pipelines.
The [~`),et=n(se,"CODE",{});var bn=a(et);Ls=r(bn,"pipeline"),bn.forEach(s),Us=r(se,"] automatically loads a default model and tokenizer capable of inference for your task."),se.forEach(s),Nt=u(e),Re=n(e,"OL",{});var An=a(Re);re=n(An,"LI",{});var rs=a(re);Ws=r(rs,"Start by creating a [~"),tt=n(rs,"CODE",{});var Rn=a(tt);Bs=r(Rn,"pipeline"),Rn.forEach(s),Xs=r(rs,"] and specify an inference task:"),rs.forEach(s),An.forEach(s),St=u(e),w(le.$$.fragment,e),It=u(e),pe=n(e,"OL",{start:!0});var Cn=a(pe);me=n(Cn,"LI",{});var ls=a(me);Ys=r(ls,"Pass your input text to the [~"),st=n(ls,"CODE",{});var Mn=a(st);Gs=r(Mn,"pipeline"),Mn.forEach(s),Js=r(ls,"]:"),ls.forEach(s),Cn.forEach(s),Ht=u(e),w(ce.$$.fragment,e),Lt=u(e),Ce=n(e,"P",{});var Pn=a(Ce);ue=n(Pn,"EM",{});var ps=a(ue);Vs=r(ps,"Note: The default models used in the [~"),ot=n(ps,"CODE",{});var Qn=a(ot);Ks=r(Qn,"pipeline"),Qn.forEach(s),Zs=r(ps,"] are not optimized or quantized, there won\u2019t be an performance improvement compared to there pytorch counter parts."),ps.forEach(s),Pn.forEach(s),Ut=u(e),S=n(e,"H3",{class:!0});var ms=a(S);G=n(ms,"A",{id:!0,class:!0,href:!0});var Fn=a(G);nt=n(Fn,"SPAN",{});var Dn=a(nt);w(de.$$.fragment,Dn),Dn.forEach(s),Fn.forEach(s),eo=u(ms),at=n(ms,"SPAN",{});var Nn=a(at);to=r(Nn,"Using vanilla Transformers model and converting to ONNX"),Nn.forEach(s),ms.forEach(s),Wt=u(e),f=n(e,"P",{});var R=a(f);so=r(R,"The "),it=n(R,"CODE",{});var Sn=a(it);oo=r(Sn,"pipeline"),Sn.forEach(s),no=r(R," accepts any supported model from the "),he=n(R,"A",{href:!0,rel:!0});var In=a(he);ao=r(In,"Model Hub"),In.forEach(s),io=r(R,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),rt=n(R,"CODE",{});var Hn=a(rt);ro=r(Hn,'from_pretrained("{model_id}",from_transformers=True)'),Hn.forEach(s),lo=r(R," method associated with the "),lt=n(R,"CODE",{});var Ln=a(lt);po=r(Ln,"ORTModelFor*"),Ln.forEach(s),mo=r(R,"\n[`AutoTokenizer\u2019] class. For example, here\u2019s how you can load the "),pt=n(R,"CODE",{});var Un=a(pt);co=r(Un,"ORTModelForQuestionAnswering"),Un.forEach(s),uo=r(R," class for question answering:"),R.forEach(s),Bt=u(e),w(fe.$$.fragment,e),Xt=u(e),I=n(e,"H3",{class:!0});var cs=a(I);J=n(cs,"A",{id:!0,class:!0,href:!0});var Wn=a(J);mt=n(Wn,"SPAN",{});var Bn=a(mt);w(ge.$$.fragment,Bn),Bn.forEach(s),Wn.forEach(s),ho=u(cs),ct=n(cs,"SPAN",{});var Xn=a(ct);fo=r(Xn,"Using Optimum models"),Xn.forEach(s),cs.forEach(s),Yt=u(e),O=n(e,"P",{});var P=a(O);go=r(P,"The "),ut=n(P,"CODE",{});var Yn=a(ut);_o=r(Yn,"pipeline"),Yn.forEach(s),vo=r(P," is tightly integrated with "),_e=n(P,"A",{href:!0,rel:!0});var Gn=a(_e);wo=r(Gn,"Model Hub"),Gn.forEach(s),qo=r(P,` and can load optimized models directly, e.g. those created with OnnxRuntime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),dt=n(P,"CODE",{});var Jn=a(dt);zo=r(Jn,"from_pretrained()"),Jn.forEach(s),ko=r(P," method associated with the corresponding "),ht=n(P,"CODE",{});var Vn=a(ht);jo=r(Vn,"ORTModelFor*"),Vn.forEach(s),yo=r(P,"\nand [`AutoTokenizer\u2019] class. For example, here\u2019s how you can load an optimized model for question answering:"),P.forEach(s),Gt=u(e),w(ve.$$.fragment,e),Jt=u(e),H=n(e,"H3",{class:!0});var us=a(H);V=n(us,"A",{id:!0,class:!0,href:!0});var Kn=a(V);ft=n(Kn,"SPAN",{});var Zn=a(ft);w(we.$$.fragment,Zn),Zn.forEach(s),Kn.forEach(s),xo=u(us),gt=n(us,"SPAN",{});var ea=a(gt);Oo=r(ea,"Optimizing and Quantizing in Pipelines"),ea.forEach(s),us.forEach(s),Vt=u(e),g=n(e,"P",{});var C=a(g);$o=r(C,"The "),_t=n(C,"CODE",{});var ta=a(_t);To=r(ta,"pipeline"),ta.forEach(s),Eo=r(C," can not only run inference on vanilla Onnxruntime checkpoints you can also use checkpoints optimized with "),vt=n(C,"CODE",{});var sa=a(vt);bo=r(sa,"ORTQuantizer"),sa.forEach(s),Ao=r(C," and "),wt=n(C,"CODE",{});var oa=a(wt);Ro=r(oa,"ORTOptimizer"),oa.forEach(s),Co=r(C,`
Below you can find two examples on how you could [~`),qt=n(C,"CODE",{});var na=a(qt);Mo=r(na,"ORTOptimizer"),na.forEach(s),Po=r(C,"] and "),Me=n(C,"A",{href:!0});var aa=a(Me);Qo=r(aa,"ORTQuantizer"),aa.forEach(s),Fo=r(C," to optimize/quantize your model and use it for inference afterwards."),C.forEach(s),Kt=u(e),L=n(e,"H3",{class:!0});var ds=a(L);K=n(ds,"A",{id:!0,class:!0,href:!0});var ia=a(K);zt=n(ia,"SPAN",{});var ra=a(zt);w(qe.$$.fragment,ra),ra.forEach(s),ia.forEach(s),Do=u(ds),kt=n(ds,"SPAN",{});var la=a(kt);No=r(la,"Quantizing with [ORTQuantizer](/docs/optimum/pr_169/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer)"),la.forEach(s),ds.forEach(s),Zt=u(e),w(ze.$$.fragment,e),es=u(e),U=n(e,"H3",{class:!0});var hs=a(U);Z=n(hs,"A",{id:!0,class:!0,href:!0});var pa=a(Z);jt=n(pa,"SPAN",{});var ma=a(jt);w(ke.$$.fragment,ma),ma.forEach(s),pa.forEach(s),So=u(hs),je=n(hs,"SPAN",{});var fs=a(je);Io=r(fs,"Optimizing with [~"),yt=n(fs,"CODE",{});var ca=a(yt);Ho=r(ca,"ORTOptimizer"),ca.forEach(s),Lo=r(fs,"]"),fs.forEach(s),hs.forEach(s),ts=u(e),w(ye.$$.fragment,e),ss=u(e),W=n(e,"H2",{class:!0});var gs=a(W);ee=n(gs,"A",{id:!0,class:!0,href:!0});var ua=a(ee);xt=n(ua,"SPAN",{});var da=a(xt);w(xe.$$.fragment,da),da.forEach(s),ua.forEach(s),Uo=u(gs),Ot=n(gs,"SPAN",{});var ha=a(Ot);Wo=r(ha,"Transformers pipeline usage"),ha.forEach(s),gs.forEach(s),os=u(e),_=n(e,"P",{});var M=a(_);Bo=r(M,"The "),$t=n(M,"CODE",{});var fa=a($t);Xo=r(fa,"pipeline"),fa.forEach(s),Yo=r(M," is just a light wrapper around the "),Tt=n(M,"CODE",{});var ga=a(Tt);Go=r(ga,"transformers.pipeline"),ga.forEach(s),Jo=r(M,` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),Et=n(M,"CODE",{});var _a=a(Et);Vo=r(_a,"transformers.pipeline"),_a.forEach(s),Ko=r(M," and just replace your "),bt=n(M,"CODE",{});var va=a(bt);Zo=r(va,"AutoFor*"),va.forEach(s),en=r(M,` with the optimum
`),At=n(M,"CODE",{});var wa=a(At);tn=r(wa,"ORTModelFor*"),wa.forEach(s),sn=r(M," class."),M.forEach(s),ns=u(e),w(Oe.$$.fragment,e),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(Ta)),m(E,"id","optimum-pipelines-for-inference"),m(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(E,"href","#optimum-pipelines-for-inference"),m(y,"class","relative group"),m(ae,"href","https://huggingface.co/models"),m(ae,"rel","nofollow"),m(Y,"id","optimum-pipeline-usage"),m(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Y,"href","#optimum-pipeline-usage"),m(N,"class","relative group"),m(pe,"start","2"),m(G,"id","using-vanilla-transformers-model-and-converting-to-onnx"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#using-vanilla-transformers-model-and-converting-to-onnx"),m(S,"class","relative group"),m(he,"href","https://huggingface.co/models"),m(he,"rel","nofollow"),m(J,"id","using-optimum-models"),m(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(J,"href","#using-optimum-models"),m(I,"class","relative group"),m(_e,"href","https://huggingface.co/models"),m(_e,"rel","nofollow"),m(V,"id","optimizing-and-quantizing-in-pipelines"),m(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(V,"href","#optimizing-and-quantizing-in-pipelines"),m(H,"class","relative group"),m(Me,"href","/docs/optimum/pr_169/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer"),m(K,"id","quantizing-with-ortquantizerdocsoptimumpr169enonnxruntimequantizationoptimumonnxruntimeortquantizer"),m(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(K,"href","#quantizing-with-ortquantizerdocsoptimumpr169enonnxruntimequantizationoptimumonnxruntimeortquantizer"),m(L,"class","relative group"),m(Z,"id","optimizing-with-ortoptimizer"),m(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Z,"href","#optimizing-with-ortoptimizer"),m(U,"class","relative group"),m(ee,"id","transformers-pipeline-usage"),m(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ee,"href","#transformers-pipeline-usage"),m(W,"class","relative group")},m(e,l){t(document.head,d),p(e,B,l),p(e,y,l),t(y,E),t(E,Q),q($,Q,null),t(y,ne),t(y,F),t(F,D),p(e,T,l),p(e,x,l),t(x,Ee),t(x,Pe),t(Pe,_s),t(x,vs),t(x,ae),t(ae,ws),t(x,qs),t(x,Qe),t(Qe,zs),t(x,ks),p(e,Ct,l),q(X,e,l),p(e,Mt,l),p(e,be,l),t(be,js),p(e,Pt,l),p(e,Ae,l),t(Ae,Fe),t(Fe,ys),p(e,Qt,l),p(e,h,l),t(h,De),t(De,Ne),t(Ne,xs),t(h,Os),t(h,Se),t(Se,Ie),t(Ie,$s),t(h,Ts),t(h,He),t(He,Le),t(Le,Es),t(h,bs),t(h,Ue),t(Ue,We),t(We,As),t(h,Rs),t(h,Be),t(Be,Xe),t(Xe,Cs),t(h,Ms),t(h,Ye),t(Ye,Ge),t(Ge,Ps),p(e,Ft,l),p(e,N,l),t(N,Y),t(Y,Je),q(ie,Je,null),t(N,Qs),t(N,Ve),t(Ve,Fs),p(e,Dt,l),p(e,b,l),t(b,Ds),t(b,Ke),t(Ke,Ns),t(b,Ss),t(b,Ze),t(Ze,Is),t(b,Hs),t(b,et),t(et,Ls),t(b,Us),p(e,Nt,l),p(e,Re,l),t(Re,re),t(re,Ws),t(re,tt),t(tt,Bs),t(re,Xs),p(e,St,l),q(le,e,l),p(e,It,l),p(e,pe,l),t(pe,me),t(me,Ys),t(me,st),t(st,Gs),t(me,Js),p(e,Ht,l),q(ce,e,l),p(e,Lt,l),p(e,Ce,l),t(Ce,ue),t(ue,Vs),t(ue,ot),t(ot,Ks),t(ue,Zs),p(e,Ut,l),p(e,S,l),t(S,G),t(G,nt),q(de,nt,null),t(S,eo),t(S,at),t(at,to),p(e,Wt,l),p(e,f,l),t(f,so),t(f,it),t(it,oo),t(f,no),t(f,he),t(he,ao),t(f,io),t(f,rt),t(rt,ro),t(f,lo),t(f,lt),t(lt,po),t(f,mo),t(f,pt),t(pt,co),t(f,uo),p(e,Bt,l),q(fe,e,l),p(e,Xt,l),p(e,I,l),t(I,J),t(J,mt),q(ge,mt,null),t(I,ho),t(I,ct),t(ct,fo),p(e,Yt,l),p(e,O,l),t(O,go),t(O,ut),t(ut,_o),t(O,vo),t(O,_e),t(_e,wo),t(O,qo),t(O,dt),t(dt,zo),t(O,ko),t(O,ht),t(ht,jo),t(O,yo),p(e,Gt,l),q(ve,e,l),p(e,Jt,l),p(e,H,l),t(H,V),t(V,ft),q(we,ft,null),t(H,xo),t(H,gt),t(gt,Oo),p(e,Vt,l),p(e,g,l),t(g,$o),t(g,_t),t(_t,To),t(g,Eo),t(g,vt),t(vt,bo),t(g,Ao),t(g,wt),t(wt,Ro),t(g,Co),t(g,qt),t(qt,Mo),t(g,Po),t(g,Me),t(Me,Qo),t(g,Fo),p(e,Kt,l),p(e,L,l),t(L,K),t(K,zt),q(qe,zt,null),t(L,Do),t(L,kt),t(kt,No),p(e,Zt,l),q(ze,e,l),p(e,es,l),p(e,U,l),t(U,Z),t(Z,jt),q(ke,jt,null),t(U,So),t(U,je),t(je,Io),t(je,yt),t(yt,Ho),t(je,Lo),p(e,ts,l),q(ye,e,l),p(e,ss,l),p(e,W,l),t(W,ee),t(ee,xt),q(xe,xt,null),t(W,Uo),t(W,Ot),t(Ot,Wo),p(e,os,l),p(e,_,l),t(_,Bo),t(_,$t),t($t,Xo),t(_,Yo),t(_,Tt),t(Tt,Go),t(_,Jo),t(_,Et),t(Et,Vo),t(_,Ko),t(_,bt),t(bt,Zo),t(_,en),t(_,At),t(At,tn),t(_,sn),p(e,ns,l),q(Oe,e,l),as=!0},p(e,[l]){const $e={};l&2&&($e.$$scope={dirty:l,ctx:e}),X.$set($e)},i(e){as||(z($.$$.fragment,e),z(X.$$.fragment,e),z(ie.$$.fragment,e),z(le.$$.fragment,e),z(ce.$$.fragment,e),z(de.$$.fragment,e),z(fe.$$.fragment,e),z(ge.$$.fragment,e),z(ve.$$.fragment,e),z(we.$$.fragment,e),z(qe.$$.fragment,e),z(ze.$$.fragment,e),z(ke.$$.fragment,e),z(ye.$$.fragment,e),z(xe.$$.fragment,e),z(Oe.$$.fragment,e),as=!0)},o(e){k($.$$.fragment,e),k(X.$$.fragment,e),k(ie.$$.fragment,e),k(le.$$.fragment,e),k(ce.$$.fragment,e),k(de.$$.fragment,e),k(fe.$$.fragment,e),k(ge.$$.fragment,e),k(ve.$$.fragment,e),k(we.$$.fragment,e),k(qe.$$.fragment,e),k(ze.$$.fragment,e),k(ke.$$.fragment,e),k(ye.$$.fragment,e),k(xe.$$.fragment,e),k(Oe.$$.fragment,e),as=!1},d(e){s(d),e&&s(B),e&&s(y),j($),e&&s(T),e&&s(x),e&&s(Ct),j(X,e),e&&s(Mt),e&&s(be),e&&s(Pt),e&&s(Ae),e&&s(Qt),e&&s(h),e&&s(Ft),e&&s(N),j(ie),e&&s(Dt),e&&s(b),e&&s(Nt),e&&s(Re),e&&s(St),j(le,e),e&&s(It),e&&s(pe),e&&s(Ht),j(ce,e),e&&s(Lt),e&&s(Ce),e&&s(Ut),e&&s(S),j(de),e&&s(Wt),e&&s(f),e&&s(Bt),j(fe,e),e&&s(Xt),e&&s(I),j(ge),e&&s(Yt),e&&s(O),e&&s(Gt),j(ve,e),e&&s(Jt),e&&s(H),j(we),e&&s(Vt),e&&s(g),e&&s(Kt),e&&s(L),j(qe),e&&s(Zt),j(ze,e),e&&s(es),e&&s(U),j(ke),e&&s(ts),j(ye,e),e&&s(ss),e&&s(W),j(xe),e&&s(os),e&&s(_),e&&s(ns),j(Oe,e)}}}const Ta={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"using-vanilla-transformers-model-and-converting-to-onnx",title:"Using vanilla Transformers model and converting to ONNX"},{local:"using-optimum-models",title:"Using Optimum models"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and Quantizing in Pipelines"},{local:"quantizing-with-ortquantizerdocsoptimumpr169enonnxruntimequantizationoptimumonnxruntimeortquantizer",title:"Quantizing with [ORTQuantizer](/docs/optimum/pr_169/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer)"},{local:"optimizing-with-ortoptimizer",title:"Optimizing with [~`ORTOptimizer`]"}],title:"Optimum pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum pipelines for inference"};function Ea(Rt){return ya(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ma extends qa{constructor(d){super();za(this,d,Ea,$a,ka,{})}}export{Ma as default,Ta as metadata};
