import{S as zn,i as jn,s as yn,e as o,k as c,w,t as i,M as xn,c as a,d as s,m as d,a as n,x as q,h as r,b as m,F as t,g as p,y as k,q as z,o as j,B as y,v as On}from"../chunks/vendor-4918fc3c.js";import{T as $n}from"../chunks/Tip-3d800dd6.js";import{I as oe}from"../chunks/IconCopyLink-21d338b1.js";import{C as $e}from"../chunks/CodeBlock-99419108.js";function Tn(Mt){let u,B,h,E,F,$,ae,Q;return{c(){u=o("p"),B=i("You can also use the "),h=o("a"),E=i("pipeline"),F=i(" function from Transformers and provide your "),$=o("code"),ae=i("OptimumModel"),Q=i("."),this.h()},l(N){u=a(N,"P",{});var T=n(u);B=r(T,"You can also use the "),h=a(T,"A",{href:!0,rel:!0});var x=n(h);E=r(x,"pipeline"),x.forEach(s),F=r(T," function from Transformers and provide your "),$=a(T,"CODE",{});var Te=n($);ae=r(Te,"OptimumModel"),Te.forEach(s),Q=r(T,"."),T.forEach(s),this.h()},h(){m(h,"href","https://huggingface.co/docs/transformers/main/en/main_classes/pipelines#pipelines"),m(h,"rel","nofollow")},m(N,T){p(N,u,T),t(u,B),t(u,h),t(h,E),t(u,F),t(u,$),t($,ae),t(u,Q)},d(N){N&&s(u)}}}function En(Mt){let u,B,h,E,F,$,ae,Q,N,T,x,Te,Ne,_s,vs,ne,ws,qs,Se,ks,zs,Ct,X,Pt,Ee,js,Ft,be,De,ys,Qt,f,Ie,He,xs,Os,Le,Ue,$s,Ts,We,Be,Es,bs,Xe,Ye,As,Rs,Ge,Je,Ms,Cs,Ve,Ke,Ps,Nt,S,Y,Ze,ie,Fs,et,Qs,St,b,Ns,tt,Ss,Ds,st,Is,Hs,ot,Ls,Us,Dt,Ae,re,Ws,at,Bs,Xs,It,le,Ht,pe,me,Ys,nt,Gs,Js,Lt,ce,Ut,Re,de,Vs,it,Ks,Zs,Wt,D,G,rt,ue,eo,lt,to,Bt,g,so,pt,oo,ao,he,no,io,mt,ro,lo,ct,po,mo,Me,co,uo,Xt,fe,Yt,I,J,dt,ge,ho,ut,fo,Gt,O,go,ht,_o,vo,_e,wo,qo,ft,ko,zo,gt,jo,yo,Jt,ve,Vt,H,V,_t,we,xo,vt,Oo,Kt,_,$o,wt,To,Eo,qt,bo,Ao,kt,Ro,Mo,Ce,Co,Po,Pe,Fo,Qo,Zt,L,K,zt,qe,No,Fe,So,jt,Do,es,ke,ts,U,Z,yt,ze,Io,Qe,Ho,xt,Lo,ss,je,os,W,ee,Ot,ye,Uo,$t,Wo,as,v,Bo,Tt,Xo,Yo,Et,Go,Jo,bt,Vo,Ko,At,Zo,ea,Rt,ta,sa,ns,xe,is;return $=new oe({}),X=new $n({props:{$$slots:{default:[Tn]},$$scope:{ctx:Mt}}}),ie=new oe({}),le=new $e({props:{code:`from optimum.pipelines import pipeline

classifier = pipeline(task="text-classification", accelerator="ort")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(task=<span class="hljs-string">&quot;text-classification&quot;</span>, accelerator=<span class="hljs-string">&quot;ort&quot;</span>)
`}}),ce=new $e({props:{code:'classifier("I like you. I love you.")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>classifier(<span class="hljs-string">&quot;I like you. I love you.&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9998838901519775</span>}]`}}),ue=new oe({}),fe=new $e({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),ge=new oe({}),ve=new $e({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),we=new oe({}),qe=new oe({}),ke=new $e({props:{code:`from pathlib import Path
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
                  )`}}),ze=new oe({}),je=new $e({props:{code:`from pathlib import Path
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
                  use_auth_token=<span class="hljs-literal">True</span>)`}}),ye=new oe({}),xe=new $e({props:{code:`from transformers import AutoTokenizer, pipeline
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
pred = onnx_qa(question, context)`}}),{c(){u=o("meta"),B=c(),h=o("h1"),E=o("a"),F=o("span"),w($.$$.fragment),ae=c(),Q=o("span"),N=i("Optimum pipelines for inference"),T=c(),x=o("p"),Te=i("The "),Ne=o("code"),_s=i("pipeline()"),vs=i(" makes it simple to use models from the "),ne=o("a"),ws=i("Model Hub"),qs=i(` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Se=o("code"),ks=i("pipeline()"),zs=i("! This tutorial will teach you to:"),Ct=c(),w(X.$$.fragment),Pt=c(),Ee=o("p"),js=i("Currenlty supported tasks are:"),Ft=c(),be=o("p"),De=o("strong"),ys=i("Onnx Runtime"),Qt=c(),f=o("ul"),Ie=o("li"),He=o("code"),xs=i("feature-extraction"),Os=c(),Le=o("li"),Ue=o("code"),$s=i("text-classification"),Ts=c(),We=o("li"),Be=o("code"),Es=i("token-classification"),bs=c(),Xe=o("li"),Ye=o("code"),As=i("question-answering"),Rs=c(),Ge=o("li"),Je=o("code"),Ms=i("zero-shot-classification"),Cs=c(),Ve=o("li"),Ke=o("code"),Ps=i("text-generation"),Nt=c(),S=o("h2"),Y=o("a"),Ze=o("span"),w(ie.$$.fragment),Fs=c(),et=o("span"),Qs=i("Optimum pipeline usage"),St=c(),b=o("p"),Ns=i("While each task has an associated "),tt=o("code"),Ss=i("pipeline()"),Ds=i(", which it is simpler to use the general "),st=o("code"),Is=i("pipeline()"),Hs=i(` abstraction which contains all the specific task pipelines.
The `),ot=o("code"),Ls=i("pipeline()"),Us=i(" automatically loads a default model and tokenizer capable of inference for your task."),Dt=c(),Ae=o("ol"),re=o("li"),Ws=i("Start by creating a "),at=o("code"),Bs=i("pipeline()"),Xs=i(" and specify an inference task:"),It=c(),w(le.$$.fragment),Ht=c(),pe=o("ol"),me=o("li"),Ys=i("Pass your input text to the "),nt=o("code"),Gs=i("pipeline()"),Js=i(":"),Lt=c(),w(ce.$$.fragment),Ut=c(),Re=o("p"),de=o("em"),Vs=i("Note: The default models used in the "),it=o("code"),Ks=i("pipeline()"),Zs=i(" are not optimized or quantized, there won\u2019t be an performance improvement compared to there pytorch counter parts."),Wt=c(),D=o("h3"),G=o("a"),rt=o("span"),w(ue.$$.fragment),eo=c(),lt=o("span"),to=i("Using vanilla Transformers model and converting to ONNX"),Bt=c(),g=o("p"),so=i("The "),pt=o("code"),oo=i("pipeline()"),ao=i(" accepts any supported model from the "),he=o("a"),no=i("Model Hub"),io=i(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),mt=o("code"),ro=i('from_pretrained("{model_id}",from_transformers=True)'),lo=i(" method associated with the "),ct=o("code"),po=i("ORTModelFor*"),mo=i("\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),Me=o("a"),co=i("ORTModelForQuestionAnswering"),uo=i(" class for question answering:"),Xt=c(),w(fe.$$.fragment),Yt=c(),I=o("h3"),J=o("a"),dt=o("span"),w(ge.$$.fragment),ho=c(),ut=o("span"),fo=i("Using Optimum models"),Gt=c(),O=o("p"),go=i("The "),ht=o("code"),_o=i("pipeline()"),vo=i(" is tightly integrated with "),_e=o("a"),wo=i("Model Hub"),qo=i(` and can load optimized models directly, e.g. those created with OnnxRuntime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ft=o("code"),ko=i("from_pretrained()"),zo=i(" method associated with the corresponding "),gt=o("code"),jo=i("ORTModelFor*"),yo=i("\nand `AutoTokenizer\u2019 class. For example, here\u2019s how you can load an optimized model for question answering:"),Jt=c(),w(ve.$$.fragment),Vt=c(),H=o("h3"),V=o("a"),_t=o("span"),w(we.$$.fragment),xo=c(),vt=o("span"),Oo=i("Optimizing and Quantizing in Pipelines"),Kt=c(),_=o("p"),$o=i("The "),wt=o("code"),To=i("pipeline()"),Eo=i(" can not only run inference on vanilla Onnxruntime checkpoints you can also use checkpoints optimized with "),qt=o("code"),bo=i("ORTQuantizer"),Ao=i(" and "),kt=o("code"),Ro=i("ORTOptimizer"),Mo=i(`
Below you can find two examples on how you could `),Ce=o("a"),Co=i("ORTOptimizer"),Po=i(" and "),Pe=o("a"),Fo=i("ORTQuantizer"),Qo=i(" to optimize/quantize your model and use it for inference afterwards."),Zt=c(),L=o("h3"),K=o("a"),zt=o("span"),w(qe.$$.fragment),No=c(),Fe=o("span"),So=i("Quantizing with "),jt=o("code"),Do=i("ORTQuantizer"),es=c(),w(ke.$$.fragment),ts=c(),U=o("h3"),Z=o("a"),yt=o("span"),w(ze.$$.fragment),Io=c(),Qe=o("span"),Ho=i("Optimizing with "),xt=o("code"),Lo=i("ORTOptimizer"),ss=c(),w(je.$$.fragment),os=c(),W=o("h2"),ee=o("a"),Ot=o("span"),w(ye.$$.fragment),Uo=c(),$t=o("span"),Wo=i("Transformers pipeline usage"),as=c(),v=o("p"),Bo=i("The "),Tt=o("code"),Xo=i("pipeline()"),Yo=i(" is just a light wrapper around the "),Et=o("code"),Go=i("transformers.pipeline"),Jo=i(` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),bt=o("code"),Vo=i("transformers.pipeline"),Ko=i(" and just replace your "),At=o("code"),Zo=i("AutoFor*"),ea=i(` with the optimum
`),Rt=o("code"),ta=i("ORTModelFor*"),sa=i(" class."),ns=c(),w(xe.$$.fragment),this.h()},l(e){const l=xn('[data-svelte="svelte-1phssyn"]',document.head);u=a(l,"META",{name:!0,content:!0}),l.forEach(s),B=d(e),h=a(e,"H1",{class:!0});var Oe=n(h);E=a(Oe,"A",{id:!0,class:!0,href:!0});var na=n(E);F=a(na,"SPAN",{});var ia=n(F);q($.$$.fragment,ia),ia.forEach(s),na.forEach(s),ae=d(Oe),Q=a(Oe,"SPAN",{});var ra=n(Q);N=r(ra,"Optimum pipelines for inference"),ra.forEach(s),Oe.forEach(s),T=d(e),x=a(e,"P",{});var te=n(x);Te=r(te,"The "),Ne=a(te,"CODE",{});var la=n(Ne);_s=r(la,"pipeline()"),la.forEach(s),vs=r(te," makes it simple to use models from the "),ne=a(te,"A",{href:!0,rel:!0});var pa=n(ne);ws=r(pa,"Model Hub"),pa.forEach(s),qs=r(te,` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Se=a(te,"CODE",{});var ma=n(Se);ks=r(ma,"pipeline()"),ma.forEach(s),zs=r(te,"! This tutorial will teach you to:"),te.forEach(s),Ct=d(e),q(X.$$.fragment,e),Pt=d(e),Ee=a(e,"P",{});var ca=n(Ee);js=r(ca,"Currenlty supported tasks are:"),ca.forEach(s),Ft=d(e),be=a(e,"P",{});var da=n(be);De=a(da,"STRONG",{});var ua=n(De);ys=r(ua,"Onnx Runtime"),ua.forEach(s),da.forEach(s),Qt=d(e),f=a(e,"UL",{});var A=n(f);Ie=a(A,"LI",{});var ha=n(Ie);He=a(ha,"CODE",{});var fa=n(He);xs=r(fa,"feature-extraction"),fa.forEach(s),ha.forEach(s),Os=d(A),Le=a(A,"LI",{});var ga=n(Le);Ue=a(ga,"CODE",{});var _a=n(Ue);$s=r(_a,"text-classification"),_a.forEach(s),ga.forEach(s),Ts=d(A),We=a(A,"LI",{});var va=n(We);Be=a(va,"CODE",{});var wa=n(Be);Es=r(wa,"token-classification"),wa.forEach(s),va.forEach(s),bs=d(A),Xe=a(A,"LI",{});var qa=n(Xe);Ye=a(qa,"CODE",{});var ka=n(Ye);As=r(ka,"question-answering"),ka.forEach(s),qa.forEach(s),Rs=d(A),Ge=a(A,"LI",{});var za=n(Ge);Je=a(za,"CODE",{});var ja=n(Je);Ms=r(ja,"zero-shot-classification"),ja.forEach(s),za.forEach(s),Cs=d(A),Ve=a(A,"LI",{});var ya=n(Ve);Ke=a(ya,"CODE",{});var xa=n(Ke);Ps=r(xa,"text-generation"),xa.forEach(s),ya.forEach(s),A.forEach(s),Nt=d(e),S=a(e,"H2",{class:!0});var rs=n(S);Y=a(rs,"A",{id:!0,class:!0,href:!0});var Oa=n(Y);Ze=a(Oa,"SPAN",{});var $a=n(Ze);q(ie.$$.fragment,$a),$a.forEach(s),Oa.forEach(s),Fs=d(rs),et=a(rs,"SPAN",{});var Ta=n(et);Qs=r(Ta,"Optimum pipeline usage"),Ta.forEach(s),rs.forEach(s),St=d(e),b=a(e,"P",{});var se=n(b);Ns=r(se,"While each task has an associated "),tt=a(se,"CODE",{});var Ea=n(tt);Ss=r(Ea,"pipeline()"),Ea.forEach(s),Ds=r(se,", which it is simpler to use the general "),st=a(se,"CODE",{});var ba=n(st);Is=r(ba,"pipeline()"),ba.forEach(s),Hs=r(se,` abstraction which contains all the specific task pipelines.
The `),ot=a(se,"CODE",{});var Aa=n(ot);Ls=r(Aa,"pipeline()"),Aa.forEach(s),Us=r(se," automatically loads a default model and tokenizer capable of inference for your task."),se.forEach(s),Dt=d(e),Ae=a(e,"OL",{});var Ra=n(Ae);re=a(Ra,"LI",{});var ls=n(re);Ws=r(ls,"Start by creating a "),at=a(ls,"CODE",{});var Ma=n(at);Bs=r(Ma,"pipeline()"),Ma.forEach(s),Xs=r(ls," and specify an inference task:"),ls.forEach(s),Ra.forEach(s),It=d(e),q(le.$$.fragment,e),Ht=d(e),pe=a(e,"OL",{start:!0});var Ca=n(pe);me=a(Ca,"LI",{});var ps=n(me);Ys=r(ps,"Pass your input text to the "),nt=a(ps,"CODE",{});var Pa=n(nt);Gs=r(Pa,"pipeline()"),Pa.forEach(s),Js=r(ps,":"),ps.forEach(s),Ca.forEach(s),Lt=d(e),q(ce.$$.fragment,e),Ut=d(e),Re=a(e,"P",{});var Fa=n(Re);de=a(Fa,"EM",{});var ms=n(de);Vs=r(ms,"Note: The default models used in the "),it=a(ms,"CODE",{});var Qa=n(it);Ks=r(Qa,"pipeline()"),Qa.forEach(s),Zs=r(ms," are not optimized or quantized, there won\u2019t be an performance improvement compared to there pytorch counter parts."),ms.forEach(s),Fa.forEach(s),Wt=d(e),D=a(e,"H3",{class:!0});var cs=n(D);G=a(cs,"A",{id:!0,class:!0,href:!0});var Na=n(G);rt=a(Na,"SPAN",{});var Sa=n(rt);q(ue.$$.fragment,Sa),Sa.forEach(s),Na.forEach(s),eo=d(cs),lt=a(cs,"SPAN",{});var Da=n(lt);to=r(Da,"Using vanilla Transformers model and converting to ONNX"),Da.forEach(s),cs.forEach(s),Bt=d(e),g=a(e,"P",{});var R=n(g);so=r(R,"The "),pt=a(R,"CODE",{});var Ia=n(pt);oo=r(Ia,"pipeline()"),Ia.forEach(s),ao=r(R," accepts any supported model from the "),he=a(R,"A",{href:!0,rel:!0});var Ha=n(he);no=r(Ha,"Model Hub"),Ha.forEach(s),io=r(R,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),mt=a(R,"CODE",{});var La=n(mt);ro=r(La,'from_pretrained("{model_id}",from_transformers=True)'),La.forEach(s),lo=r(R," method associated with the "),ct=a(R,"CODE",{});var Ua=n(ct);po=r(Ua,"ORTModelFor*"),Ua.forEach(s),mo=r(R,"\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),Me=a(R,"A",{href:!0});var Wa=n(Me);co=r(Wa,"ORTModelForQuestionAnswering"),Wa.forEach(s),uo=r(R," class for question answering:"),R.forEach(s),Xt=d(e),q(fe.$$.fragment,e),Yt=d(e),I=a(e,"H3",{class:!0});var ds=n(I);J=a(ds,"A",{id:!0,class:!0,href:!0});var Ba=n(J);dt=a(Ba,"SPAN",{});var Xa=n(dt);q(ge.$$.fragment,Xa),Xa.forEach(s),Ba.forEach(s),ho=d(ds),ut=a(ds,"SPAN",{});var Ya=n(ut);fo=r(Ya,"Using Optimum models"),Ya.forEach(s),ds.forEach(s),Gt=d(e),O=a(e,"P",{});var P=n(O);go=r(P,"The "),ht=a(P,"CODE",{});var Ga=n(ht);_o=r(Ga,"pipeline()"),Ga.forEach(s),vo=r(P," is tightly integrated with "),_e=a(P,"A",{href:!0,rel:!0});var Ja=n(_e);wo=r(Ja,"Model Hub"),Ja.forEach(s),qo=r(P,` and can load optimized models directly, e.g. those created with OnnxRuntime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ft=a(P,"CODE",{});var Va=n(ft);ko=r(Va,"from_pretrained()"),Va.forEach(s),zo=r(P," method associated with the corresponding "),gt=a(P,"CODE",{});var Ka=n(gt);jo=r(Ka,"ORTModelFor*"),Ka.forEach(s),yo=r(P,"\nand `AutoTokenizer\u2019 class. For example, here\u2019s how you can load an optimized model for question answering:"),P.forEach(s),Jt=d(e),q(ve.$$.fragment,e),Vt=d(e),H=a(e,"H3",{class:!0});var us=n(H);V=a(us,"A",{id:!0,class:!0,href:!0});var Za=n(V);_t=a(Za,"SPAN",{});var en=n(_t);q(we.$$.fragment,en),en.forEach(s),Za.forEach(s),xo=d(us),vt=a(us,"SPAN",{});var tn=n(vt);Oo=r(tn,"Optimizing and Quantizing in Pipelines"),tn.forEach(s),us.forEach(s),Kt=d(e),_=a(e,"P",{});var M=n(_);$o=r(M,"The "),wt=a(M,"CODE",{});var sn=n(wt);To=r(sn,"pipeline()"),sn.forEach(s),Eo=r(M," can not only run inference on vanilla Onnxruntime checkpoints you can also use checkpoints optimized with "),qt=a(M,"CODE",{});var on=n(qt);bo=r(on,"ORTQuantizer"),on.forEach(s),Ao=r(M," and "),kt=a(M,"CODE",{});var an=n(kt);Ro=r(an,"ORTOptimizer"),an.forEach(s),Mo=r(M,`
Below you can find two examples on how you could `),Ce=a(M,"A",{href:!0});var nn=n(Ce);Co=r(nn,"ORTOptimizer"),nn.forEach(s),Po=r(M," and "),Pe=a(M,"A",{href:!0});var rn=n(Pe);Fo=r(rn,"ORTQuantizer"),rn.forEach(s),Qo=r(M," to optimize/quantize your model and use it for inference afterwards."),M.forEach(s),Zt=d(e),L=a(e,"H3",{class:!0});var hs=n(L);K=a(hs,"A",{id:!0,class:!0,href:!0});var ln=n(K);zt=a(ln,"SPAN",{});var pn=n(zt);q(qe.$$.fragment,pn),pn.forEach(s),ln.forEach(s),No=d(hs),Fe=a(hs,"SPAN",{});var oa=n(Fe);So=r(oa,"Quantizing with "),jt=a(oa,"CODE",{});var mn=n(jt);Do=r(mn,"ORTQuantizer"),mn.forEach(s),oa.forEach(s),hs.forEach(s),es=d(e),q(ke.$$.fragment,e),ts=d(e),U=a(e,"H3",{class:!0});var fs=n(U);Z=a(fs,"A",{id:!0,class:!0,href:!0});var cn=n(Z);yt=a(cn,"SPAN",{});var dn=n(yt);q(ze.$$.fragment,dn),dn.forEach(s),cn.forEach(s),Io=d(fs),Qe=a(fs,"SPAN",{});var aa=n(Qe);Ho=r(aa,"Optimizing with "),xt=a(aa,"CODE",{});var un=n(xt);Lo=r(un,"ORTOptimizer"),un.forEach(s),aa.forEach(s),fs.forEach(s),ss=d(e),q(je.$$.fragment,e),os=d(e),W=a(e,"H2",{class:!0});var gs=n(W);ee=a(gs,"A",{id:!0,class:!0,href:!0});var hn=n(ee);Ot=a(hn,"SPAN",{});var fn=n(Ot);q(ye.$$.fragment,fn),fn.forEach(s),hn.forEach(s),Uo=d(gs),$t=a(gs,"SPAN",{});var gn=n($t);Wo=r(gn,"Transformers pipeline usage"),gn.forEach(s),gs.forEach(s),as=d(e),v=a(e,"P",{});var C=n(v);Bo=r(C,"The "),Tt=a(C,"CODE",{});var _n=n(Tt);Xo=r(_n,"pipeline()"),_n.forEach(s),Yo=r(C," is just a light wrapper around the "),Et=a(C,"CODE",{});var vn=n(Et);Go=r(vn,"transformers.pipeline"),vn.forEach(s),Jo=r(C,` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),bt=a(C,"CODE",{});var wn=n(bt);Vo=r(wn,"transformers.pipeline"),wn.forEach(s),Ko=r(C," and just replace your "),At=a(C,"CODE",{});var qn=n(At);Zo=r(qn,"AutoFor*"),qn.forEach(s),ea=r(C,` with the optimum
`),Rt=a(C,"CODE",{});var kn=n(Rt);ta=r(kn,"ORTModelFor*"),kn.forEach(s),sa=r(C," class."),C.forEach(s),ns=d(e),q(xe.$$.fragment,e),this.h()},h(){m(u,"name","hf:doc:metadata"),m(u,"content",JSON.stringify(bn)),m(E,"id","optimum-pipelines-for-inference"),m(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(E,"href","#optimum-pipelines-for-inference"),m(h,"class","relative group"),m(ne,"href","https://huggingface.co/models"),m(ne,"rel","nofollow"),m(Y,"id","optimum-pipeline-usage"),m(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Y,"href","#optimum-pipeline-usage"),m(S,"class","relative group"),m(pe,"start","2"),m(G,"id","using-vanilla-transformers-model-and-converting-to-onnx"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#using-vanilla-transformers-model-and-converting-to-onnx"),m(D,"class","relative group"),m(he,"href","https://huggingface.co/models"),m(he,"rel","nofollow"),m(Me,"href","/docs/optimum/pr_170/en/onnxruntime/modeling_ort#optimum.onnxruntime.ORTModelForQuestionAnswering"),m(J,"id","using-optimum-models"),m(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(J,"href","#using-optimum-models"),m(I,"class","relative group"),m(_e,"href","https://huggingface.co/models"),m(_e,"rel","nofollow"),m(V,"id","optimizing-and-quantizing-in-pipelines"),m(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(V,"href","#optimizing-and-quantizing-in-pipelines"),m(H,"class","relative group"),m(Ce,"href","/docs/optimum/pr_170/en/onnxruntime/optimization#optimum.onnxruntime.ORTOptimizer"),m(Pe,"href","/docs/optimum/pr_170/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer"),m(K,"id","quantizing-with-ortquantizer"),m(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(K,"href","#quantizing-with-ortquantizer"),m(L,"class","relative group"),m(Z,"id","optimizing-with-ortoptimizer"),m(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Z,"href","#optimizing-with-ortoptimizer"),m(U,"class","relative group"),m(ee,"id","transformers-pipeline-usage"),m(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ee,"href","#transformers-pipeline-usage"),m(W,"class","relative group")},m(e,l){t(document.head,u),p(e,B,l),p(e,h,l),t(h,E),t(E,F),k($,F,null),t(h,ae),t(h,Q),t(Q,N),p(e,T,l),p(e,x,l),t(x,Te),t(x,Ne),t(Ne,_s),t(x,vs),t(x,ne),t(ne,ws),t(x,qs),t(x,Se),t(Se,ks),t(x,zs),p(e,Ct,l),k(X,e,l),p(e,Pt,l),p(e,Ee,l),t(Ee,js),p(e,Ft,l),p(e,be,l),t(be,De),t(De,ys),p(e,Qt,l),p(e,f,l),t(f,Ie),t(Ie,He),t(He,xs),t(f,Os),t(f,Le),t(Le,Ue),t(Ue,$s),t(f,Ts),t(f,We),t(We,Be),t(Be,Es),t(f,bs),t(f,Xe),t(Xe,Ye),t(Ye,As),t(f,Rs),t(f,Ge),t(Ge,Je),t(Je,Ms),t(f,Cs),t(f,Ve),t(Ve,Ke),t(Ke,Ps),p(e,Nt,l),p(e,S,l),t(S,Y),t(Y,Ze),k(ie,Ze,null),t(S,Fs),t(S,et),t(et,Qs),p(e,St,l),p(e,b,l),t(b,Ns),t(b,tt),t(tt,Ss),t(b,Ds),t(b,st),t(st,Is),t(b,Hs),t(b,ot),t(ot,Ls),t(b,Us),p(e,Dt,l),p(e,Ae,l),t(Ae,re),t(re,Ws),t(re,at),t(at,Bs),t(re,Xs),p(e,It,l),k(le,e,l),p(e,Ht,l),p(e,pe,l),t(pe,me),t(me,Ys),t(me,nt),t(nt,Gs),t(me,Js),p(e,Lt,l),k(ce,e,l),p(e,Ut,l),p(e,Re,l),t(Re,de),t(de,Vs),t(de,it),t(it,Ks),t(de,Zs),p(e,Wt,l),p(e,D,l),t(D,G),t(G,rt),k(ue,rt,null),t(D,eo),t(D,lt),t(lt,to),p(e,Bt,l),p(e,g,l),t(g,so),t(g,pt),t(pt,oo),t(g,ao),t(g,he),t(he,no),t(g,io),t(g,mt),t(mt,ro),t(g,lo),t(g,ct),t(ct,po),t(g,mo),t(g,Me),t(Me,co),t(g,uo),p(e,Xt,l),k(fe,e,l),p(e,Yt,l),p(e,I,l),t(I,J),t(J,dt),k(ge,dt,null),t(I,ho),t(I,ut),t(ut,fo),p(e,Gt,l),p(e,O,l),t(O,go),t(O,ht),t(ht,_o),t(O,vo),t(O,_e),t(_e,wo),t(O,qo),t(O,ft),t(ft,ko),t(O,zo),t(O,gt),t(gt,jo),t(O,yo),p(e,Jt,l),k(ve,e,l),p(e,Vt,l),p(e,H,l),t(H,V),t(V,_t),k(we,_t,null),t(H,xo),t(H,vt),t(vt,Oo),p(e,Kt,l),p(e,_,l),t(_,$o),t(_,wt),t(wt,To),t(_,Eo),t(_,qt),t(qt,bo),t(_,Ao),t(_,kt),t(kt,Ro),t(_,Mo),t(_,Ce),t(Ce,Co),t(_,Po),t(_,Pe),t(Pe,Fo),t(_,Qo),p(e,Zt,l),p(e,L,l),t(L,K),t(K,zt),k(qe,zt,null),t(L,No),t(L,Fe),t(Fe,So),t(Fe,jt),t(jt,Do),p(e,es,l),k(ke,e,l),p(e,ts,l),p(e,U,l),t(U,Z),t(Z,yt),k(ze,yt,null),t(U,Io),t(U,Qe),t(Qe,Ho),t(Qe,xt),t(xt,Lo),p(e,ss,l),k(je,e,l),p(e,os,l),p(e,W,l),t(W,ee),t(ee,Ot),k(ye,Ot,null),t(W,Uo),t(W,$t),t($t,Wo),p(e,as,l),p(e,v,l),t(v,Bo),t(v,Tt),t(Tt,Xo),t(v,Yo),t(v,Et),t(Et,Go),t(v,Jo),t(v,bt),t(bt,Vo),t(v,Ko),t(v,At),t(At,Zo),t(v,ea),t(v,Rt),t(Rt,ta),t(v,sa),p(e,ns,l),k(xe,e,l),is=!0},p(e,[l]){const Oe={};l&2&&(Oe.$$scope={dirty:l,ctx:e}),X.$set(Oe)},i(e){is||(z($.$$.fragment,e),z(X.$$.fragment,e),z(ie.$$.fragment,e),z(le.$$.fragment,e),z(ce.$$.fragment,e),z(ue.$$.fragment,e),z(fe.$$.fragment,e),z(ge.$$.fragment,e),z(ve.$$.fragment,e),z(we.$$.fragment,e),z(qe.$$.fragment,e),z(ke.$$.fragment,e),z(ze.$$.fragment,e),z(je.$$.fragment,e),z(ye.$$.fragment,e),z(xe.$$.fragment,e),is=!0)},o(e){j($.$$.fragment,e),j(X.$$.fragment,e),j(ie.$$.fragment,e),j(le.$$.fragment,e),j(ce.$$.fragment,e),j(ue.$$.fragment,e),j(fe.$$.fragment,e),j(ge.$$.fragment,e),j(ve.$$.fragment,e),j(we.$$.fragment,e),j(qe.$$.fragment,e),j(ke.$$.fragment,e),j(ze.$$.fragment,e),j(je.$$.fragment,e),j(ye.$$.fragment,e),j(xe.$$.fragment,e),is=!1},d(e){s(u),e&&s(B),e&&s(h),y($),e&&s(T),e&&s(x),e&&s(Ct),y(X,e),e&&s(Pt),e&&s(Ee),e&&s(Ft),e&&s(be),e&&s(Qt),e&&s(f),e&&s(Nt),e&&s(S),y(ie),e&&s(St),e&&s(b),e&&s(Dt),e&&s(Ae),e&&s(It),y(le,e),e&&s(Ht),e&&s(pe),e&&s(Lt),y(ce,e),e&&s(Ut),e&&s(Re),e&&s(Wt),e&&s(D),y(ue),e&&s(Bt),e&&s(g),e&&s(Xt),y(fe,e),e&&s(Yt),e&&s(I),y(ge),e&&s(Gt),e&&s(O),e&&s(Jt),y(ve,e),e&&s(Vt),e&&s(H),y(we),e&&s(Kt),e&&s(_),e&&s(Zt),e&&s(L),y(qe),e&&s(es),y(ke,e),e&&s(ts),e&&s(U),y(ze),e&&s(ss),y(je,e),e&&s(os),e&&s(W),y(ye),e&&s(as),e&&s(v),e&&s(ns),y(xe,e)}}}const bn={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"using-vanilla-transformers-model-and-converting-to-onnx",title:"Using vanilla Transformers model and converting to ONNX"},{local:"using-optimum-models",title:"Using Optimum models"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and Quantizing in Pipelines"},{local:"quantizing-with-ortquantizer",title:"Quantizing with `ORTQuantizer`"},{local:"optimizing-with-ortoptimizer",title:"Optimizing with `ORTOptimizer`"}],title:"Optimum pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum pipelines for inference"};function An(Mt){return On(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Fn extends zn{constructor(u){super();jn(this,u,An,En,yn,{})}}export{Fn as default,bn as metadata};
