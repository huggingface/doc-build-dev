import{S as va,i as wa,s as qa,e as o,k as c,w,t as i,M as ka,c as n,d as s,m as u,a,x as q,h as r,b as m,F as t,g as p,y as k,q as z,o as j,B as y,v as za}from"../chunks/vendor-4918fc3c.js";import{T as ja}from"../chunks/Tip-3d800dd6.js";import{I as te}from"../chunks/IconCopyLink-21d338b1.js";import{C as ye}from"../chunks/CodeBlock-99419108.js";function ya(Et){let d,U,h,$,F;return{c(){d=o("p"),U=i("You can also use the "),h=o("a"),$=i("pipeline()"),F=i(" function from Transformers and provide your Optimum model class."),this.h()},l(O){d=n(O,"P",{});var M=a(d);U=r(M,"You can also use the "),h=n(M,"A",{href:!0,rel:!0});var W=a(h);$=r(W,"pipeline()"),W.forEach(s),F=r(M," function from Transformers and provide your Optimum model class."),M.forEach(s),this.h()},h(){m(h,"href","https://huggingface.co/docs/transformers/main/en/main_classes/pipelines#pipelines"),m(h,"rel","nofollow")},m(O,M){p(O,d,M),t(d,U),t(d,h),t(h,$),t(d,F)},d(O){O&&s(d)}}}function xa(Et){let d,U,h,$,F,O,M,W,hs,bt,T,fs,Pe,gs,_s,se,vs,ws,Fe,qs,ks,At,X,Rt,xe,zs,Mt,Oe,Ne,js,Ct,f,Qe,Se,ys,xs,De,Ie,Os,$s,He,Le,Ts,Es,Ue,We,bs,As,Xe,Be,Rs,Ms,Ye,Ge,Cs,Pt,N,B,Je,oe,Ps,Ve,Fs,Ft,C,Ns,Ke,Qs,Ss,Ze,Ds,Is,Nt,$e,ne,Hs,et,Ls,Us,Qt,ae,St,ie,re,Ws,tt,Xs,Bs,Dt,le,It,Te,pe,Ys,st,Gs,Js,Ht,Q,Y,ot,me,Vs,nt,Ks,Lt,g,Zs,at,eo,to,ce,so,oo,it,no,ao,rt,io,ro,Ee,lo,po,Ut,ue,Wt,S,G,lt,de,mo,pt,co,Xt,x,uo,mt,ho,fo,he,go,_o,ct,vo,wo,ut,qo,ko,Bt,fe,Yt,D,J,dt,ge,zo,ht,jo,Gt,_,yo,ft,xo,Oo,gt,$o,To,_t,Eo,bo,be,Ao,Ro,Ae,Mo,Co,Jt,I,V,vt,_e,Po,Re,Fo,wt,No,Vt,ve,Kt,H,K,qt,we,Qo,Me,So,kt,Do,Zt,qe,es,L,Z,zt,ke,Io,jt,Ho,ts,v,Lo,yt,Uo,Wo,xt,Xo,Bo,Ot,Yo,Go,$t,Jo,Vo,Tt,Ko,Zo,ss,ze,os;return O=new te({}),X=new ja({props:{$$slots:{default:[ya]},$$scope:{ctx:Et}}}),oe=new te({}),ae=new ye({props:{code:`from optimum.pipelines import pipeline

classifier = pipeline(task="text-classification", accelerator="ort")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(task=<span class="hljs-string">&quot;text-classification&quot;</span>, accelerator=<span class="hljs-string">&quot;ort&quot;</span>)
`}}),le=new ye({props:{code:'classifier("I like you. I love you.")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>classifier(<span class="hljs-string">&quot;I like you. I love you.&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9998838901519775</span>}]`}}),me=new te({}),ue=new ye({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),de=new te({}),fe=new ye({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),ge=new te({}),_e=new te({}),ve=new ye({props:{code:`from pathlib import Path
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
                  )`}}),we=new te({}),qe=new ye({props:{code:`from pathlib import Path
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
                  use_auth_token=<span class="hljs-literal">True</span>)`}}),ke=new te({}),ze=new ye({props:{code:`from transformers import AutoTokenizer, pipeline
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
pred = onnx_qa(question, context)`}}),{c(){d=o("meta"),U=c(),h=o("h1"),$=o("a"),F=o("span"),w(O.$$.fragment),M=c(),W=o("span"),hs=i("Optimum pipelines for inference"),bt=c(),T=o("p"),fs=i("The "),Pe=o("code"),gs=i("pipeline()"),_s=i(" function makes it simple to use models from the "),se=o("a"),vs=i("Model Hub"),ws=i(` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Fe=o("code"),qs=i("pipeline()"),ks=i(" function!"),At=c(),w(X.$$.fragment),Rt=c(),xe=o("p"),zs=i("Currenlty supported tasks are:"),Mt=c(),Oe=o("p"),Ne=o("strong"),js=i("Onnx Runtime"),Ct=c(),f=o("ul"),Qe=o("li"),Se=o("code"),ys=i("feature-extraction"),xs=c(),De=o("li"),Ie=o("code"),Os=i("text-classification"),$s=c(),He=o("li"),Le=o("code"),Ts=i("token-classification"),Es=c(),Ue=o("li"),We=o("code"),bs=i("question-answering"),As=c(),Xe=o("li"),Be=o("code"),Rs=i("zero-shot-classification"),Ms=c(),Ye=o("li"),Ge=o("code"),Cs=i("text-generation"),Pt=c(),N=o("h2"),B=o("a"),Je=o("span"),w(oe.$$.fragment),Ps=c(),Ve=o("span"),Fs=i("Optimum pipeline usage"),Ft=c(),C=o("p"),Ns=i("While each task has an associated pipeline class, it is simpler to use the general "),Ke=o("code"),Qs=i("pipeline()"),Ss=i(` function which wraps all the task-specific pipelines in one object.
The `),Ze=o("code"),Ds=i("pipeline()"),Is=i(" function automatically loads a default model and tokenizer capable of inference for your task."),Nt=c(),$e=o("ol"),ne=o("li"),Hs=i("Start by creating a "),et=o("code"),Ls=i("pipeline()"),Us=i(" and specify an inference task:"),Qt=c(),w(ae.$$.fragment),St=c(),ie=o("ol"),re=o("li"),Ws=i("Pass your input text to the "),tt=o("code"),Xs=i("pipeline()"),Bs=i(":"),Dt=c(),w(le.$$.fragment),It=c(),Te=o("p"),pe=o("em"),Ys=i("Note: The default models used in the "),st=o("code"),Gs=i("pipeline()"),Js=i(" function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),Ht=c(),Q=o("h3"),Y=o("a"),ot=o("span"),w(me.$$.fragment),Vs=c(),nt=o("span"),Ks=i("Using vanilla Transformers model and converting to ONNX"),Lt=c(),g=o("p"),Zs=i("The "),at=o("code"),eo=i("pipeline()"),to=i(" accepts any supported model from the "),ce=o("a"),so=i("Model Hub"),oo=i(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),it=o("code"),no=i('from_pretrained("{model_id}",from_transformers=True)'),ao=i(" method associated with the "),rt=o("code"),io=i("ORTModelFor*"),ro=i("\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),Ee=o("a"),lo=i("ORTModelForQuestionAnswering"),po=i(" class for question answering:"),Ut=c(),w(ue.$$.fragment),Wt=c(),S=o("h3"),G=o("a"),lt=o("span"),w(de.$$.fragment),mo=c(),pt=o("span"),co=i("Using Optimum models"),Xt=c(),x=o("p"),uo=i("The "),mt=o("code"),ho=i("pipeline()"),fo=i(" function is tightly integrated with "),he=o("a"),go=i("Model Hub"),_o=i(` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ct=o("code"),vo=i("from_pretrained()"),wo=i(" method associated with the corresponding "),ut=o("code"),qo=i("ORTModelFor*"),ko=i("\nand `AutoTokenizer\u2019 class. For example, here\u2019s how you can load an optimized model for question answering:"),Bt=c(),w(fe.$$.fragment),Yt=c(),D=o("h3"),J=o("a"),dt=o("span"),w(ge.$$.fragment),zo=c(),ht=o("span"),jo=i("Optimizing and quantizing in pipelines"),Gt=c(),_=o("p"),yo=i("The "),ft=o("code"),xo=i("pipeline()"),Oo=i(" function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),gt=o("code"),$o=i("ORTQuantizer"),To=i(" and "),_t=o("code"),Eo=i("ORTOptimizer"),bo=i(`.
Below you can find two examples on how you could `),be=o("a"),Ao=i("ORTOptimizer"),Ro=i(" and "),Ae=o("a"),Mo=i("ORTQuantizer"),Co=i(" to optimize/quantize your model and use it for inference afterwards."),Jt=c(),I=o("h3"),V=o("a"),vt=o("span"),w(_e.$$.fragment),Po=c(),Re=o("span"),Fo=i("Quantizing with "),wt=o("code"),No=i("ORTQuantizer"),Vt=c(),w(ve.$$.fragment),Kt=c(),H=o("h3"),K=o("a"),qt=o("span"),w(we.$$.fragment),Qo=c(),Me=o("span"),So=i("Optimizing with "),kt=o("code"),Do=i("ORTOptimizer"),Zt=c(),w(qe.$$.fragment),es=c(),L=o("h2"),Z=o("a"),zt=o("span"),w(ke.$$.fragment),Io=c(),jt=o("span"),Ho=i("Transformers pipeline usage"),ts=c(),v=o("p"),Lo=i("The "),yt=o("code"),Uo=i("pipeline()"),Wo=i(" function is just a light wrapper around the "),xt=o("code"),Xo=i("transformers.pipeline"),Bo=i(` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),Ot=o("code"),Yo=i("transformers.pipeline"),Go=i(" and just replace your "),$t=o("code"),Jo=i("AutoFor*"),Vo=i(` with the optimum
`),Tt=o("code"),Ko=i("ORTModelFor*"),Zo=i(" class."),ss=c(),w(ze.$$.fragment),this.h()},l(e){const l=ka('[data-svelte="svelte-1phssyn"]',document.head);d=n(l,"META",{name:!0,content:!0}),l.forEach(s),U=u(e),h=n(e,"H1",{class:!0});var je=a(h);$=n(je,"A",{id:!0,class:!0,href:!0});var sn=a($);F=n(sn,"SPAN",{});var on=a(F);q(O.$$.fragment,on),on.forEach(s),sn.forEach(s),M=u(je),W=n(je,"SPAN",{});var nn=a(W);hs=r(nn,"Optimum pipelines for inference"),nn.forEach(s),je.forEach(s),bt=u(e),T=n(e,"P",{});var ee=a(T);fs=r(ee,"The "),Pe=n(ee,"CODE",{});var an=a(Pe);gs=r(an,"pipeline()"),an.forEach(s),_s=r(ee," function makes it simple to use models from the "),se=n(ee,"A",{href:!0,rel:!0});var rn=a(se);vs=r(rn,"Model Hub"),rn.forEach(s),ws=r(ee,` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Fe=n(ee,"CODE",{});var ln=a(Fe);qs=r(ln,"pipeline()"),ln.forEach(s),ks=r(ee," function!"),ee.forEach(s),At=u(e),q(X.$$.fragment,e),Rt=u(e),xe=n(e,"P",{});var pn=a(xe);zs=r(pn,"Currenlty supported tasks are:"),pn.forEach(s),Mt=u(e),Oe=n(e,"P",{});var mn=a(Oe);Ne=n(mn,"STRONG",{});var cn=a(Ne);js=r(cn,"Onnx Runtime"),cn.forEach(s),mn.forEach(s),Ct=u(e),f=n(e,"UL",{});var E=a(f);Qe=n(E,"LI",{});var un=a(Qe);Se=n(un,"CODE",{});var dn=a(Se);ys=r(dn,"feature-extraction"),dn.forEach(s),un.forEach(s),xs=u(E),De=n(E,"LI",{});var hn=a(De);Ie=n(hn,"CODE",{});var fn=a(Ie);Os=r(fn,"text-classification"),fn.forEach(s),hn.forEach(s),$s=u(E),He=n(E,"LI",{});var gn=a(He);Le=n(gn,"CODE",{});var _n=a(Le);Ts=r(_n,"token-classification"),_n.forEach(s),gn.forEach(s),Es=u(E),Ue=n(E,"LI",{});var vn=a(Ue);We=n(vn,"CODE",{});var wn=a(We);bs=r(wn,"question-answering"),wn.forEach(s),vn.forEach(s),As=u(E),Xe=n(E,"LI",{});var qn=a(Xe);Be=n(qn,"CODE",{});var kn=a(Be);Rs=r(kn,"zero-shot-classification"),kn.forEach(s),qn.forEach(s),Ms=u(E),Ye=n(E,"LI",{});var zn=a(Ye);Ge=n(zn,"CODE",{});var jn=a(Ge);Cs=r(jn,"text-generation"),jn.forEach(s),zn.forEach(s),E.forEach(s),Pt=u(e),N=n(e,"H2",{class:!0});var ns=a(N);B=n(ns,"A",{id:!0,class:!0,href:!0});var yn=a(B);Je=n(yn,"SPAN",{});var xn=a(Je);q(oe.$$.fragment,xn),xn.forEach(s),yn.forEach(s),Ps=u(ns),Ve=n(ns,"SPAN",{});var On=a(Ve);Fs=r(On,"Optimum pipeline usage"),On.forEach(s),ns.forEach(s),Ft=u(e),C=n(e,"P",{});var Ce=a(C);Ns=r(Ce,"While each task has an associated pipeline class, it is simpler to use the general "),Ke=n(Ce,"CODE",{});var $n=a(Ke);Qs=r($n,"pipeline()"),$n.forEach(s),Ss=r(Ce,` function which wraps all the task-specific pipelines in one object.
The `),Ze=n(Ce,"CODE",{});var Tn=a(Ze);Ds=r(Tn,"pipeline()"),Tn.forEach(s),Is=r(Ce," function automatically loads a default model and tokenizer capable of inference for your task."),Ce.forEach(s),Nt=u(e),$e=n(e,"OL",{});var En=a($e);ne=n(En,"LI",{});var as=a(ne);Hs=r(as,"Start by creating a "),et=n(as,"CODE",{});var bn=a(et);Ls=r(bn,"pipeline()"),bn.forEach(s),Us=r(as," and specify an inference task:"),as.forEach(s),En.forEach(s),Qt=u(e),q(ae.$$.fragment,e),St=u(e),ie=n(e,"OL",{start:!0});var An=a(ie);re=n(An,"LI",{});var is=a(re);Ws=r(is,"Pass your input text to the "),tt=n(is,"CODE",{});var Rn=a(tt);Xs=r(Rn,"pipeline()"),Rn.forEach(s),Bs=r(is,":"),is.forEach(s),An.forEach(s),Dt=u(e),q(le.$$.fragment,e),It=u(e),Te=n(e,"P",{});var Mn=a(Te);pe=n(Mn,"EM",{});var rs=a(pe);Ys=r(rs,"Note: The default models used in the "),st=n(rs,"CODE",{});var Cn=a(st);Gs=r(Cn,"pipeline()"),Cn.forEach(s),Js=r(rs," function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),rs.forEach(s),Mn.forEach(s),Ht=u(e),Q=n(e,"H3",{class:!0});var ls=a(Q);Y=n(ls,"A",{id:!0,class:!0,href:!0});var Pn=a(Y);ot=n(Pn,"SPAN",{});var Fn=a(ot);q(me.$$.fragment,Fn),Fn.forEach(s),Pn.forEach(s),Vs=u(ls),nt=n(ls,"SPAN",{});var Nn=a(nt);Ks=r(Nn,"Using vanilla Transformers model and converting to ONNX"),Nn.forEach(s),ls.forEach(s),Lt=u(e),g=n(e,"P",{});var b=a(g);Zs=r(b,"The "),at=n(b,"CODE",{});var Qn=a(at);eo=r(Qn,"pipeline()"),Qn.forEach(s),to=r(b," accepts any supported model from the "),ce=n(b,"A",{href:!0,rel:!0});var Sn=a(ce);so=r(Sn,"Model Hub"),Sn.forEach(s),oo=r(b,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),it=n(b,"CODE",{});var Dn=a(it);no=r(Dn,'from_pretrained("{model_id}",from_transformers=True)'),Dn.forEach(s),ao=r(b," method associated with the "),rt=n(b,"CODE",{});var In=a(rt);io=r(In,"ORTModelFor*"),In.forEach(s),ro=r(b,"\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),Ee=n(b,"A",{href:!0});var Hn=a(Ee);lo=r(Hn,"ORTModelForQuestionAnswering"),Hn.forEach(s),po=r(b," class for question answering:"),b.forEach(s),Ut=u(e),q(ue.$$.fragment,e),Wt=u(e),S=n(e,"H3",{class:!0});var ps=a(S);G=n(ps,"A",{id:!0,class:!0,href:!0});var Ln=a(G);lt=n(Ln,"SPAN",{});var Un=a(lt);q(de.$$.fragment,Un),Un.forEach(s),Ln.forEach(s),mo=u(ps),pt=n(ps,"SPAN",{});var Wn=a(pt);co=r(Wn,"Using Optimum models"),Wn.forEach(s),ps.forEach(s),Xt=u(e),x=n(e,"P",{});var P=a(x);uo=r(P,"The "),mt=n(P,"CODE",{});var Xn=a(mt);ho=r(Xn,"pipeline()"),Xn.forEach(s),fo=r(P," function is tightly integrated with "),he=n(P,"A",{href:!0,rel:!0});var Bn=a(he);go=r(Bn,"Model Hub"),Bn.forEach(s),_o=r(P,` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ct=n(P,"CODE",{});var Yn=a(ct);vo=r(Yn,"from_pretrained()"),Yn.forEach(s),wo=r(P," method associated with the corresponding "),ut=n(P,"CODE",{});var Gn=a(ut);qo=r(Gn,"ORTModelFor*"),Gn.forEach(s),ko=r(P,"\nand `AutoTokenizer\u2019 class. For example, here\u2019s how you can load an optimized model for question answering:"),P.forEach(s),Bt=u(e),q(fe.$$.fragment,e),Yt=u(e),D=n(e,"H3",{class:!0});var ms=a(D);J=n(ms,"A",{id:!0,class:!0,href:!0});var Jn=a(J);dt=n(Jn,"SPAN",{});var Vn=a(dt);q(ge.$$.fragment,Vn),Vn.forEach(s),Jn.forEach(s),zo=u(ms),ht=n(ms,"SPAN",{});var Kn=a(ht);jo=r(Kn,"Optimizing and quantizing in pipelines"),Kn.forEach(s),ms.forEach(s),Gt=u(e),_=n(e,"P",{});var A=a(_);yo=r(A,"The "),ft=n(A,"CODE",{});var Zn=a(ft);xo=r(Zn,"pipeline()"),Zn.forEach(s),Oo=r(A," function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),gt=n(A,"CODE",{});var ea=a(gt);$o=r(ea,"ORTQuantizer"),ea.forEach(s),To=r(A," and "),_t=n(A,"CODE",{});var ta=a(_t);Eo=r(ta,"ORTOptimizer"),ta.forEach(s),bo=r(A,`.
Below you can find two examples on how you could `),be=n(A,"A",{href:!0});var sa=a(be);Ao=r(sa,"ORTOptimizer"),sa.forEach(s),Ro=r(A," and "),Ae=n(A,"A",{href:!0});var oa=a(Ae);Mo=r(oa,"ORTQuantizer"),oa.forEach(s),Co=r(A," to optimize/quantize your model and use it for inference afterwards."),A.forEach(s),Jt=u(e),I=n(e,"H3",{class:!0});var cs=a(I);V=n(cs,"A",{id:!0,class:!0,href:!0});var na=a(V);vt=n(na,"SPAN",{});var aa=a(vt);q(_e.$$.fragment,aa),aa.forEach(s),na.forEach(s),Po=u(cs),Re=n(cs,"SPAN",{});var en=a(Re);Fo=r(en,"Quantizing with "),wt=n(en,"CODE",{});var ia=a(wt);No=r(ia,"ORTQuantizer"),ia.forEach(s),en.forEach(s),cs.forEach(s),Vt=u(e),q(ve.$$.fragment,e),Kt=u(e),H=n(e,"H3",{class:!0});var us=a(H);K=n(us,"A",{id:!0,class:!0,href:!0});var ra=a(K);qt=n(ra,"SPAN",{});var la=a(qt);q(we.$$.fragment,la),la.forEach(s),ra.forEach(s),Qo=u(us),Me=n(us,"SPAN",{});var tn=a(Me);So=r(tn,"Optimizing with "),kt=n(tn,"CODE",{});var pa=a(kt);Do=r(pa,"ORTOptimizer"),pa.forEach(s),tn.forEach(s),us.forEach(s),Zt=u(e),q(qe.$$.fragment,e),es=u(e),L=n(e,"H2",{class:!0});var ds=a(L);Z=n(ds,"A",{id:!0,class:!0,href:!0});var ma=a(Z);zt=n(ma,"SPAN",{});var ca=a(zt);q(ke.$$.fragment,ca),ca.forEach(s),ma.forEach(s),Io=u(ds),jt=n(ds,"SPAN",{});var ua=a(jt);Ho=r(ua,"Transformers pipeline usage"),ua.forEach(s),ds.forEach(s),ts=u(e),v=n(e,"P",{});var R=a(v);Lo=r(R,"The "),yt=n(R,"CODE",{});var da=a(yt);Uo=r(da,"pipeline()"),da.forEach(s),Wo=r(R," function is just a light wrapper around the "),xt=n(R,"CODE",{});var ha=a(xt);Xo=r(ha,"transformers.pipeline"),ha.forEach(s),Bo=r(R,` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),Ot=n(R,"CODE",{});var fa=a(Ot);Yo=r(fa,"transformers.pipeline"),fa.forEach(s),Go=r(R," and just replace your "),$t=n(R,"CODE",{});var ga=a($t);Jo=r(ga,"AutoFor*"),ga.forEach(s),Vo=r(R,` with the optimum
`),Tt=n(R,"CODE",{});var _a=a(Tt);Ko=r(_a,"ORTModelFor*"),_a.forEach(s),Zo=r(R," class."),R.forEach(s),ss=u(e),q(ze.$$.fragment,e),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(Oa)),m($,"id","optimum-pipelines-for-inference"),m($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($,"href","#optimum-pipelines-for-inference"),m(h,"class","relative group"),m(se,"href","https://huggingface.co/models"),m(se,"rel","nofollow"),m(B,"id","optimum-pipeline-usage"),m(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(B,"href","#optimum-pipeline-usage"),m(N,"class","relative group"),m(ie,"start","2"),m(Y,"id","using-vanilla-transformers-model-and-converting-to-onnx"),m(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Y,"href","#using-vanilla-transformers-model-and-converting-to-onnx"),m(Q,"class","relative group"),m(ce,"href","https://huggingface.co/models"),m(ce,"rel","nofollow"),m(Ee,"href","/docs/optimum/pr_170/en/onnxruntime/modeling_ort#optimum.onnxruntime.ORTModelForQuestionAnswering"),m(G,"id","using-optimum-models"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#using-optimum-models"),m(S,"class","relative group"),m(he,"href","https://huggingface.co/models"),m(he,"rel","nofollow"),m(J,"id","optimizing-and-quantizing-in-pipelines"),m(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(J,"href","#optimizing-and-quantizing-in-pipelines"),m(D,"class","relative group"),m(be,"href","/docs/optimum/pr_170/en/onnxruntime/optimization#optimum.onnxruntime.ORTOptimizer"),m(Ae,"href","/docs/optimum/pr_170/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer"),m(V,"id","quantizing-with-ortquantizer"),m(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(V,"href","#quantizing-with-ortquantizer"),m(I,"class","relative group"),m(K,"id","optimizing-with-ortoptimizer"),m(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(K,"href","#optimizing-with-ortoptimizer"),m(H,"class","relative group"),m(Z,"id","transformers-pipeline-usage"),m(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Z,"href","#transformers-pipeline-usage"),m(L,"class","relative group")},m(e,l){t(document.head,d),p(e,U,l),p(e,h,l),t(h,$),t($,F),k(O,F,null),t(h,M),t(h,W),t(W,hs),p(e,bt,l),p(e,T,l),t(T,fs),t(T,Pe),t(Pe,gs),t(T,_s),t(T,se),t(se,vs),t(T,ws),t(T,Fe),t(Fe,qs),t(T,ks),p(e,At,l),k(X,e,l),p(e,Rt,l),p(e,xe,l),t(xe,zs),p(e,Mt,l),p(e,Oe,l),t(Oe,Ne),t(Ne,js),p(e,Ct,l),p(e,f,l),t(f,Qe),t(Qe,Se),t(Se,ys),t(f,xs),t(f,De),t(De,Ie),t(Ie,Os),t(f,$s),t(f,He),t(He,Le),t(Le,Ts),t(f,Es),t(f,Ue),t(Ue,We),t(We,bs),t(f,As),t(f,Xe),t(Xe,Be),t(Be,Rs),t(f,Ms),t(f,Ye),t(Ye,Ge),t(Ge,Cs),p(e,Pt,l),p(e,N,l),t(N,B),t(B,Je),k(oe,Je,null),t(N,Ps),t(N,Ve),t(Ve,Fs),p(e,Ft,l),p(e,C,l),t(C,Ns),t(C,Ke),t(Ke,Qs),t(C,Ss),t(C,Ze),t(Ze,Ds),t(C,Is),p(e,Nt,l),p(e,$e,l),t($e,ne),t(ne,Hs),t(ne,et),t(et,Ls),t(ne,Us),p(e,Qt,l),k(ae,e,l),p(e,St,l),p(e,ie,l),t(ie,re),t(re,Ws),t(re,tt),t(tt,Xs),t(re,Bs),p(e,Dt,l),k(le,e,l),p(e,It,l),p(e,Te,l),t(Te,pe),t(pe,Ys),t(pe,st),t(st,Gs),t(pe,Js),p(e,Ht,l),p(e,Q,l),t(Q,Y),t(Y,ot),k(me,ot,null),t(Q,Vs),t(Q,nt),t(nt,Ks),p(e,Lt,l),p(e,g,l),t(g,Zs),t(g,at),t(at,eo),t(g,to),t(g,ce),t(ce,so),t(g,oo),t(g,it),t(it,no),t(g,ao),t(g,rt),t(rt,io),t(g,ro),t(g,Ee),t(Ee,lo),t(g,po),p(e,Ut,l),k(ue,e,l),p(e,Wt,l),p(e,S,l),t(S,G),t(G,lt),k(de,lt,null),t(S,mo),t(S,pt),t(pt,co),p(e,Xt,l),p(e,x,l),t(x,uo),t(x,mt),t(mt,ho),t(x,fo),t(x,he),t(he,go),t(x,_o),t(x,ct),t(ct,vo),t(x,wo),t(x,ut),t(ut,qo),t(x,ko),p(e,Bt,l),k(fe,e,l),p(e,Yt,l),p(e,D,l),t(D,J),t(J,dt),k(ge,dt,null),t(D,zo),t(D,ht),t(ht,jo),p(e,Gt,l),p(e,_,l),t(_,yo),t(_,ft),t(ft,xo),t(_,Oo),t(_,gt),t(gt,$o),t(_,To),t(_,_t),t(_t,Eo),t(_,bo),t(_,be),t(be,Ao),t(_,Ro),t(_,Ae),t(Ae,Mo),t(_,Co),p(e,Jt,l),p(e,I,l),t(I,V),t(V,vt),k(_e,vt,null),t(I,Po),t(I,Re),t(Re,Fo),t(Re,wt),t(wt,No),p(e,Vt,l),k(ve,e,l),p(e,Kt,l),p(e,H,l),t(H,K),t(K,qt),k(we,qt,null),t(H,Qo),t(H,Me),t(Me,So),t(Me,kt),t(kt,Do),p(e,Zt,l),k(qe,e,l),p(e,es,l),p(e,L,l),t(L,Z),t(Z,zt),k(ke,zt,null),t(L,Io),t(L,jt),t(jt,Ho),p(e,ts,l),p(e,v,l),t(v,Lo),t(v,yt),t(yt,Uo),t(v,Wo),t(v,xt),t(xt,Xo),t(v,Bo),t(v,Ot),t(Ot,Yo),t(v,Go),t(v,$t),t($t,Jo),t(v,Vo),t(v,Tt),t(Tt,Ko),t(v,Zo),p(e,ss,l),k(ze,e,l),os=!0},p(e,[l]){const je={};l&2&&(je.$$scope={dirty:l,ctx:e}),X.$set(je)},i(e){os||(z(O.$$.fragment,e),z(X.$$.fragment,e),z(oe.$$.fragment,e),z(ae.$$.fragment,e),z(le.$$.fragment,e),z(me.$$.fragment,e),z(ue.$$.fragment,e),z(de.$$.fragment,e),z(fe.$$.fragment,e),z(ge.$$.fragment,e),z(_e.$$.fragment,e),z(ve.$$.fragment,e),z(we.$$.fragment,e),z(qe.$$.fragment,e),z(ke.$$.fragment,e),z(ze.$$.fragment,e),os=!0)},o(e){j(O.$$.fragment,e),j(X.$$.fragment,e),j(oe.$$.fragment,e),j(ae.$$.fragment,e),j(le.$$.fragment,e),j(me.$$.fragment,e),j(ue.$$.fragment,e),j(de.$$.fragment,e),j(fe.$$.fragment,e),j(ge.$$.fragment,e),j(_e.$$.fragment,e),j(ve.$$.fragment,e),j(we.$$.fragment,e),j(qe.$$.fragment,e),j(ke.$$.fragment,e),j(ze.$$.fragment,e),os=!1},d(e){s(d),e&&s(U),e&&s(h),y(O),e&&s(bt),e&&s(T),e&&s(At),y(X,e),e&&s(Rt),e&&s(xe),e&&s(Mt),e&&s(Oe),e&&s(Ct),e&&s(f),e&&s(Pt),e&&s(N),y(oe),e&&s(Ft),e&&s(C),e&&s(Nt),e&&s($e),e&&s(Qt),y(ae,e),e&&s(St),e&&s(ie),e&&s(Dt),y(le,e),e&&s(It),e&&s(Te),e&&s(Ht),e&&s(Q),y(me),e&&s(Lt),e&&s(g),e&&s(Ut),y(ue,e),e&&s(Wt),e&&s(S),y(de),e&&s(Xt),e&&s(x),e&&s(Bt),y(fe,e),e&&s(Yt),e&&s(D),y(ge),e&&s(Gt),e&&s(_),e&&s(Jt),e&&s(I),y(_e),e&&s(Vt),y(ve,e),e&&s(Kt),e&&s(H),y(we),e&&s(Zt),y(qe,e),e&&s(es),e&&s(L),y(ke),e&&s(ts),e&&s(v),e&&s(ss),y(ze,e)}}}const Oa={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"using-vanilla-transformers-model-and-converting-to-onnx",title:"Using vanilla Transformers model and converting to ONNX"},{local:"using-optimum-models",title:"Using Optimum models"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and quantizing in pipelines"},{local:"quantizing-with-ortquantizer",title:"Quantizing with `ORTQuantizer`"},{local:"optimizing-with-ortoptimizer",title:"Optimizing with `ORTOptimizer`"}],title:"Optimum pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum pipelines for inference"};function $a(Et){return za(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ra extends va{constructor(d){super();wa(this,d,$a,xa,qa,{})}}export{Ra as default,Oa as metadata};
