import{S as yn,i as On,s as $n,e as o,k as m,w,t as i,M as xn,c as a,d as s,m as u,a as n,x as k,h as r,b as d,F as t,g as p,y as q,q as z,o as j,B as y,v as En}from"../chunks/vendor-4918fc3c.js";import{T as Tn}from"../chunks/Tip-3d800dd6.js";import{I as oe}from"../chunks/IconCopyLink-21d338b1.js";import{C as Ee}from"../chunks/CodeBlock-99419108.js";function bn(Ct){let c,B,O,T,F,x,ae,Q;return{c(){c=o("p"),B=i("You can also use the "),O=o("code"),T=i("transformers.pipeline"),F=i(" and provide your "),x=o("code"),ae=i("OptimumModel"),Q=i(".")},l(D){c=a(D,"P",{});var E=n(c);B=r(E,"You can also use the "),O=a(E,"CODE",{});var $=n(O);T=r($,"transformers.pipeline"),$.forEach(s),F=r(E," and provide your "),x=a(E,"CODE",{});var Te=n(x);ae=r(Te,"OptimumModel"),Te.forEach(s),Q=r(E,"."),E.forEach(s)},m(D,E){p(D,c,E),t(c,B),t(c,O),t(O,T),t(c,F),t(c,x),t(x,ae),t(c,Q)},d(D){D&&s(c)}}}function An(Ct){let c,B,O,T,F,x,ae,Q,D,E,$,Te,Me,vs,ws,ne,ks,qs,Pe,zs,js,Mt,Y,Pt,be,ys,Ft,Ae,Fe,Os,Qt,h,Qe,De,$s,xs,Se,Ne,Es,Ts,Ie,He,bs,As,Le,Ue,Rs,Cs,We,Be,Ms,Ps,Ye,Ge,Fs,Dt,S,G,Je,ie,Qs,Ke,Ds,St,b,Ss,Ve,Ns,Is,Xe,Hs,Ls,Ze,Us,Ws,Nt,Re,re,Bs,et,Ys,Gs,It,le,Ht,pe,me,Js,tt,Ks,Vs,Lt,ue,Ut,N,J,st,de,Xs,ot,Zs,Wt,f,eo,at,to,so,ce,oo,ao,nt,no,io,it,ro,lo,rt,po,mo,Bt,he,Yt,I,K,lt,fe,uo,pt,co,Gt,g,ho,mt,fo,go,ge,_o,vo,ut,wo,ko,dt,qo,zo,ct,jo,yo,Jt,_e,Kt,H,V,ht,ve,Oo,ft,$o,Vt,Ce,gt,xo,Xt,_,Eo,_t,To,bo,vt,Ao,Ro,wt,Co,Mo,kt,Po,Fo,qt,Qo,Do,Zt,L,X,zt,we,So,ke,No,jt,Io,Ho,es,qe,ts,U,Z,yt,ze,Lo,je,Uo,Ot,Wo,Bo,ss,ye,os,W,ee,$t,Oe,Yo,xt,Go,as,v,Jo,Et,Ko,Vo,Tt,Xo,Zo,bt,ea,ta,At,sa,oa,Rt,aa,na,ns,$e,is;return x=new oe({}),Y=new Tn({props:{$$slots:{default:[bn]},$$scope:{ctx:Ct}}}),ie=new oe({}),le=new Ee({props:{code:`from optimum import optimum_pipeline

classifier = optimum_pipeline(task="text-classification", accelerator="ort")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum <span class="hljs-keyword">import</span> optimum_pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = optimum_pipeline(task=<span class="hljs-string">&quot;text-classification&quot;</span>, accelerator=<span class="hljs-string">&quot;ort&quot;</span>)
`}}),ue=new Ee({props:{code:'classifier("I like you. I love you.")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>classifier(<span class="hljs-string">&quot;I like you. I love you.&quot;</span>)'}}),de=new oe({}),he=new Ee({props:{code:`from transformers import AutoTokenizer
from optimum.onnxruntime import ORTModelForQuestionAnswering
from optimum import optimum_pipeline

tokenizer = AutoTokenizer.from_pretrained("deepset/roberta-base-squad2")
model = ORTModelForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2",from_transformers=True)

onnx_qa = optimum_pipeline("question-answering", model=model, tokenizer=tokenizer)
question = "Whats my name?"
context = "My Name is Philipp and I live in Nuremberg."

pred = onnx_qa(question=question, context=context)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum <span class="hljs-keyword">import</span> optimum_pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>,from_transformers=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_qa = optimum_pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;Whats my name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">&quot;My Name is Philipp and I live in Nuremberg.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),fe=new oe({}),_e=new Ee({props:{code:`from transformers import AutoTokenizer
from optimum.onnxruntime import ORTModelForQuestionAnswering
from optimum import optimum_pipeline

tokenizer = AutoTokenizer.from_pretrained("optimum/roberta-base-squad2")
model = ORTModelForQuestionAnswering.from_pretrained("optimum/roberta-base-squad2")

onnx_qa = optimum_pipeline("question-answering", model=model, tokenizer=tokenizer)
question = "Whats my name?"
context = "My Name is Philipp and I live in Nuremberg."

pred = onnx_qa(question=question, context=context)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum <span class="hljs-keyword">import</span> optimum_pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;optimum/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;optimum/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_qa = optimum_pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;Whats my name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">&quot;My Name is Philipp and I live in Nuremberg.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),ve=new oe({}),we=new oe({}),qe=new Ee({props:{code:`from pathlib import Path
from optimum.onnxruntime import ORTModelForSequenceClassification, ORTQuantizer
from optimum.onnxruntime.configuration import AutoQuantizationConfig
from optimum.pipelines import optimum_pipeline
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

onnx_clx = optimum_pipeline("text-classification", model=model, tokenizer=tokenizer)
text = "I like the new ORT pipeline"
pred = onnx_clx(text)
print(pred)

tokenizer.save_pretrained("new_path_for_directory")
model.save_pretrained("new_path_for_directory")
model.push_to_hub("new_path_for_directory",`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pathlib <span class="hljs-keyword">import</span> Path
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification, ORTQuantizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> AutoQuantizationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> optimum_pipeline
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
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_clx = optimum_pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;I like the new ORT pipeline&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_clx(text)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(pred)

<span class="hljs-comment"># save model &amp; push model to the hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.push_to_hub(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>,
                  repository_id=<span class="hljs-string">&quot;my-onnx-repo&quot;</span>,
                  use_auth_token=<span class="hljs-literal">True</span>
                  )`}}),ze=new oe({}),ye=new Ee({props:{code:`from pathlib import Path
from optimum.onnxruntime import ORTModelForSequenceClassification, ORTOptimizer
from optimum.onnxruntime.configuration import OptimizationConfig
from optimum.pipelines import optimum_pipeline

model_id = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(model_id)
save_path = Path("optimum_model")
save_path.mkdir(exist_ok=True)

optimizer = ORTOptimizer.from_pretrained(model_id, feature="sequence-classification")
optimization_config = OptimizationConfig(optimization_level=2)

optimizer.export(
optimizer.model.config.save_pretrained(save_path) # saves config.json 

model = ORTModelForSequenceClassification.from_pretrained(save_path,file_name="model-optimized.onnx")

onnx_clx = optimum_pipeline("text-classification", model=model, tokenizer=tokenizer)
text = "I like the new ORT pipeline"
pred = onnx_clx(text)
print(pred)

tokenizer.save_pretrained("new_path_for_directory")
model.save_pretrained("new_path_for_directory")
model.push_to_hub("new_path_for_directory",`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pathlib <span class="hljs-keyword">import</span> Path
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification, ORTOptimizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> OptimizationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> optimum_pipeline

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
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_clx = optimum_pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;I like the new ORT pipeline&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_clx(text)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(pred)

<span class="hljs-comment"># save model &amp; push model to the hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.push_to_hub(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>,
                  repository_id=<span class="hljs-string">&quot;my-onnx-repo&quot;</span>,
                  use_auth_token=<span class="hljs-literal">True</span>)`}}),Oe=new oe({}),$e=new Ee({props:{code:`from transformers import AutoTokenizer, pipeline
-from transformers import AutoModelForQuestionAnswering
+from optimum.onnxruntime import ORTModelForQuestionAnswering

-model = AutoModelForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2")
+model = ORTModelForQuestionAnswering.from_transformers("optimum/roberta-base-squad2")
tokenizer = AutoTokenizer.from_pretrained("deepset/roberta-base-squad2")

onnx_qa = pipeline("question-answering",model=model,tokenizer=tokenizer)

question = "Whats my name?"
context = "My Name is Philipp and I live in Nuremberg."
pred = onnx_qa(question, context)`,highlighted:`from transformers import AutoTokenizer, pipeline
<span class="hljs-deletion">-from transformers import AutoModelForQuestionAnswering</span>
<span class="hljs-addition">+from optimum.onnxruntime import ORTModelForQuestionAnswering</span>

<span class="hljs-deletion">-model = AutoModelForQuestionAnswering.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)</span>
<span class="hljs-addition">+model = ORTModelForQuestionAnswering.from_transformers(&quot;optimum/roberta-base-squad2&quot;)</span>
tokenizer = AutoTokenizer.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)

onnx_qa = pipeline(&quot;question-answering&quot;,model=model,tokenizer=tokenizer)

question = &quot;Whats my name?&quot;
context = &quot;My Name is Philipp and I live in Nuremberg.&quot;
pred = onnx_qa(question, context)`}}),{c(){c=o("meta"),B=m(),O=o("h1"),T=o("a"),F=o("span"),w(x.$$.fragment),ae=m(),Q=o("span"),D=i("Optimum pipelines for inference"),E=m(),$=o("p"),Te=i("The "),Me=o("code"),vs=i("optimum_pipeline"),ws=i(" makes it simple to use models from the "),ne=o("a"),ks=i("Model Hub"),qs=i(` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Pe=o("code"),zs=i("optimum_pipeline"),js=i("! This tutorial will teach you to:"),Mt=m(),w(Y.$$.fragment),Pt=m(),be=o("p"),ys=i("Currenlty supported tasks are:"),Ft=m(),Ae=o("p"),Fe=o("strong"),Os=i("Onnxruntime"),Qt=m(),h=o("ul"),Qe=o("li"),De=o("code"),$s=i("feature-extraction"),xs=m(),Se=o("li"),Ne=o("code"),Es=i("text-classification"),Ts=m(),Ie=o("li"),He=o("code"),bs=i("token-classification"),As=m(),Le=o("li"),Ue=o("code"),Rs=i("question-answering"),Cs=m(),We=o("li"),Be=o("code"),Ms=i("zero-shot-classification"),Ps=m(),Ye=o("li"),Ge=o("code"),Fs=i("text-generation"),Dt=m(),S=o("h2"),G=o("a"),Je=o("span"),w(ie.$$.fragment),Qs=m(),Ke=o("span"),Ds=i("Optimum pipeline usage"),St=m(),b=o("p"),Ss=i("While each task has an associated "),Ve=o("code"),Ns=i("optimum_pipeline"),Is=i(", it is simpler to use the general "),Xe=o("code"),Hs=i("pipeline"),Ls=i(` abstraction which contains all the specific task pipelines.
The `),Ze=o("code"),Us=i("optimum_pipeline"),Ws=i(" automatically loads a default model and tokenizer capable of inference for your task."),Nt=m(),Re=o("ol"),re=o("li"),Bs=i("Start by creating a "),et=o("code"),Ys=i("optimum_pipeline"),Gs=i(" and specify an inference task:"),It=m(),w(le.$$.fragment),Ht=m(),pe=o("ol"),me=o("li"),Js=i("Pass your input text to the "),tt=o("code"),Ks=i("optimum_pipeline"),Vs=i(":"),Lt=m(),w(ue.$$.fragment),Ut=m(),N=o("h3"),J=o("a"),st=o("span"),w(de.$$.fragment),Xs=m(),ot=o("span"),Zs=i("Use a vanilla transformers model and convert"),Wt=m(),f=o("p"),eo=i("The "),at=o("code"),to=i("optimum_pipeline"),so=i(" accepts supported model from the "),ce=o("a"),oo=i("Model Hub"),ao=i(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),nt=o("code"),no=i('from_pretrained("{model_id}",from_transformers=True)'),io=i(" method for corresponding "),it=o("code"),ro=i("ORTModelFor*"),lo=i("\nand [`AutoTokenizer\u2019] class. For example, load the "),rt=o("code"),po=i("ORTModelForQuestionAnswering"),mo=i(" class for a question answering modeling task:"),Bt=m(),w(he.$$.fragment),Yt=m(),I=o("h3"),K=o("a"),lt=o("span"),w(fe.$$.fragment),uo=m(),pt=o("span"),co=i("Use optimum model"),Gt=m(),g=o("p"),ho=i("The "),mt=o("code"),fo=i("optimum_pipeline"),go=i(" is tightly integrated with "),ge=o("a"),_o=i("Model Hub"),vo=i(` and can load optimized models directly, e.g. Onnxruntime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ut=o("code"),wo=i(".from_pretrained"),ko=i(" method for corresponding "),dt=o("code"),qo=i("ORTModelFor*"),zo=i("\nand [`AutoTokenizer\u2019] class. For example, load the "),ct=o("code"),jo=i("ORTModelForQuestionAnswering"),yo=i(" class for a question answering modeling task:"),Jt=m(),w(_e.$$.fragment),Kt=m(),H=o("h3"),V=o("a"),ht=o("span"),w(ve.$$.fragment),Oo=m(),ft=o("span"),$o=i("Optimizing and Quantizing in Pipelines"),Vt=m(),Ce=o("p"),gt=o("em"),xo=i("TODO: Rework this is not valid anymore"),Xt=m(),_=o("p"),Eo=i("The "),_t=o("code"),To=i("optimum_pipeline"),bo=i(" can not only run inference on vanilla Onnxruntime checkpoints you can also use checkpoints optimized with "),vt=o("code"),Ao=i("ORTQuantizer"),Ro=i(" and "),wt=o("code"),Co=i("ORTOptimizer"),Mo=i(`
Below you can find two examples on how you could [~`),kt=o("code"),Po=i("ORTOptimizer"),Fo=i("] and [~"),qt=o("code"),Qo=i("ORTQuantizer"),Do=i("] to optimize/quantize your model and use it for inference afterwards."),Zt=m(),L=o("h3"),X=o("a"),zt=o("span"),w(we.$$.fragment),So=m(),ke=o("span"),No=i("Quantizing with [~"),jt=o("code"),Io=i("ORTQuantizer"),Ho=i("]"),es=m(),w(qe.$$.fragment),ts=m(),U=o("h3"),Z=o("a"),yt=o("span"),w(ze.$$.fragment),Lo=m(),je=o("span"),Uo=i("Optimizing with [~"),Ot=o("code"),Wo=i("ORTOptimizer"),Bo=i("]"),ss=m(),w(ye.$$.fragment),os=m(),W=o("h2"),ee=o("a"),$t=o("span"),w(Oe.$$.fragment),Yo=m(),xt=o("span"),Go=i("Transformers pipeline usage"),as=m(),v=o("p"),Jo=i("The "),Et=o("code"),Ko=i("optimum_pipeline"),Vo=i(" is just a light wrapper around the "),Tt=o("code"),Xo=i("transformers.pipeline"),Zo=i(` to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),bt=o("code"),ea=i("transformers.pipeline"),ta=i(" and just replace your "),At=o("code"),sa=i("AutoFor*"),oa=i(` with the optimum
`),Rt=o("code"),aa=i("ORTModelFor*"),na=i(" class."),ns=m(),w($e.$$.fragment),this.h()},l(e){const l=xn('[data-svelte="svelte-1phssyn"]',document.head);c=a(l,"META",{name:!0,content:!0}),l.forEach(s),B=u(e),O=a(e,"H1",{class:!0});var xe=n(O);T=a(xe,"A",{id:!0,class:!0,href:!0});var ia=n(T);F=a(ia,"SPAN",{});var ra=n(F);k(x.$$.fragment,ra),ra.forEach(s),ia.forEach(s),ae=u(xe),Q=a(xe,"SPAN",{});var la=n(Q);D=r(la,"Optimum pipelines for inference"),la.forEach(s),xe.forEach(s),E=u(e),$=a(e,"P",{});var te=n($);Te=r(te,"The "),Me=a(te,"CODE",{});var pa=n(Me);vs=r(pa,"optimum_pipeline"),pa.forEach(s),ws=r(te," makes it simple to use models from the "),ne=a(te,"A",{href:!0,rel:!0});var ma=n(ne);ks=r(ma,"Model Hub"),ma.forEach(s),qs=r(te,` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Pe=a(te,"CODE",{});var ua=n(Pe);zs=r(ua,"optimum_pipeline"),ua.forEach(s),js=r(te,"! This tutorial will teach you to:"),te.forEach(s),Mt=u(e),k(Y.$$.fragment,e),Pt=u(e),be=a(e,"P",{});var da=n(be);ys=r(da,"Currenlty supported tasks are:"),da.forEach(s),Ft=u(e),Ae=a(e,"P",{});var ca=n(Ae);Fe=a(ca,"STRONG",{});var ha=n(Fe);Os=r(ha,"Onnxruntime"),ha.forEach(s),ca.forEach(s),Qt=u(e),h=a(e,"UL",{});var A=n(h);Qe=a(A,"LI",{});var fa=n(Qe);De=a(fa,"CODE",{});var ga=n(De);$s=r(ga,"feature-extraction"),ga.forEach(s),fa.forEach(s),xs=u(A),Se=a(A,"LI",{});var _a=n(Se);Ne=a(_a,"CODE",{});var va=n(Ne);Es=r(va,"text-classification"),va.forEach(s),_a.forEach(s),Ts=u(A),Ie=a(A,"LI",{});var wa=n(Ie);He=a(wa,"CODE",{});var ka=n(He);bs=r(ka,"token-classification"),ka.forEach(s),wa.forEach(s),As=u(A),Le=a(A,"LI",{});var qa=n(Le);Ue=a(qa,"CODE",{});var za=n(Ue);Rs=r(za,"question-answering"),za.forEach(s),qa.forEach(s),Cs=u(A),We=a(A,"LI",{});var ja=n(We);Be=a(ja,"CODE",{});var ya=n(Be);Ms=r(ya,"zero-shot-classification"),ya.forEach(s),ja.forEach(s),Ps=u(A),Ye=a(A,"LI",{});var Oa=n(Ye);Ge=a(Oa,"CODE",{});var $a=n(Ge);Fs=r($a,"text-generation"),$a.forEach(s),Oa.forEach(s),A.forEach(s),Dt=u(e),S=a(e,"H2",{class:!0});var rs=n(S);G=a(rs,"A",{id:!0,class:!0,href:!0});var xa=n(G);Je=a(xa,"SPAN",{});var Ea=n(Je);k(ie.$$.fragment,Ea),Ea.forEach(s),xa.forEach(s),Qs=u(rs),Ke=a(rs,"SPAN",{});var Ta=n(Ke);Ds=r(Ta,"Optimum pipeline usage"),Ta.forEach(s),rs.forEach(s),St=u(e),b=a(e,"P",{});var se=n(b);Ss=r(se,"While each task has an associated "),Ve=a(se,"CODE",{});var ba=n(Ve);Ns=r(ba,"optimum_pipeline"),ba.forEach(s),Is=r(se,", it is simpler to use the general "),Xe=a(se,"CODE",{});var Aa=n(Xe);Hs=r(Aa,"pipeline"),Aa.forEach(s),Ls=r(se,` abstraction which contains all the specific task pipelines.
The `),Ze=a(se,"CODE",{});var Ra=n(Ze);Us=r(Ra,"optimum_pipeline"),Ra.forEach(s),Ws=r(se," automatically loads a default model and tokenizer capable of inference for your task."),se.forEach(s),Nt=u(e),Re=a(e,"OL",{});var Ca=n(Re);re=a(Ca,"LI",{});var ls=n(re);Bs=r(ls,"Start by creating a "),et=a(ls,"CODE",{});var Ma=n(et);Ys=r(Ma,"optimum_pipeline"),Ma.forEach(s),Gs=r(ls," and specify an inference task:"),ls.forEach(s),Ca.forEach(s),It=u(e),k(le.$$.fragment,e),Ht=u(e),pe=a(e,"OL",{start:!0});var Pa=n(pe);me=a(Pa,"LI",{});var ps=n(me);Js=r(ps,"Pass your input text to the "),tt=a(ps,"CODE",{});var Fa=n(tt);Ks=r(Fa,"optimum_pipeline"),Fa.forEach(s),Vs=r(ps,":"),ps.forEach(s),Pa.forEach(s),Lt=u(e),k(ue.$$.fragment,e),Ut=u(e),N=a(e,"H3",{class:!0});var ms=n(N);J=a(ms,"A",{id:!0,class:!0,href:!0});var Qa=n(J);st=a(Qa,"SPAN",{});var Da=n(st);k(de.$$.fragment,Da),Da.forEach(s),Qa.forEach(s),Xs=u(ms),ot=a(ms,"SPAN",{});var Sa=n(ot);Zs=r(Sa,"Use a vanilla transformers model and convert"),Sa.forEach(s),ms.forEach(s),Wt=u(e),f=a(e,"P",{});var R=n(f);eo=r(R,"The "),at=a(R,"CODE",{});var Na=n(at);to=r(Na,"optimum_pipeline"),Na.forEach(s),so=r(R," accepts supported model from the "),ce=a(R,"A",{href:!0,rel:!0});var Ia=n(ce);oo=r(Ia,"Model Hub"),Ia.forEach(s),ao=r(R,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),nt=a(R,"CODE",{});var Ha=n(nt);no=r(Ha,'from_pretrained("{model_id}",from_transformers=True)'),Ha.forEach(s),io=r(R," method for corresponding "),it=a(R,"CODE",{});var La=n(it);ro=r(La,"ORTModelFor*"),La.forEach(s),lo=r(R,"\nand [`AutoTokenizer\u2019] class. For example, load the "),rt=a(R,"CODE",{});var Ua=n(rt);po=r(Ua,"ORTModelForQuestionAnswering"),Ua.forEach(s),mo=r(R," class for a question answering modeling task:"),R.forEach(s),Bt=u(e),k(he.$$.fragment,e),Yt=u(e),I=a(e,"H3",{class:!0});var us=n(I);K=a(us,"A",{id:!0,class:!0,href:!0});var Wa=n(K);lt=a(Wa,"SPAN",{});var Ba=n(lt);k(fe.$$.fragment,Ba),Ba.forEach(s),Wa.forEach(s),uo=u(us),pt=a(us,"SPAN",{});var Ya=n(pt);co=r(Ya,"Use optimum model"),Ya.forEach(s),us.forEach(s),Gt=u(e),g=a(e,"P",{});var C=n(g);ho=r(C,"The "),mt=a(C,"CODE",{});var Ga=n(mt);fo=r(Ga,"optimum_pipeline"),Ga.forEach(s),go=r(C," is tightly integrated with "),ge=a(C,"A",{href:!0,rel:!0});var Ja=n(ge);_o=r(Ja,"Model Hub"),Ja.forEach(s),vo=r(C,` and can load optimized models directly, e.g. Onnxruntime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ut=a(C,"CODE",{});var Ka=n(ut);wo=r(Ka,".from_pretrained"),Ka.forEach(s),ko=r(C," method for corresponding "),dt=a(C,"CODE",{});var Va=n(dt);qo=r(Va,"ORTModelFor*"),Va.forEach(s),zo=r(C,"\nand [`AutoTokenizer\u2019] class. For example, load the "),ct=a(C,"CODE",{});var Xa=n(ct);jo=r(Xa,"ORTModelForQuestionAnswering"),Xa.forEach(s),yo=r(C," class for a question answering modeling task:"),C.forEach(s),Jt=u(e),k(_e.$$.fragment,e),Kt=u(e),H=a(e,"H3",{class:!0});var ds=n(H);V=a(ds,"A",{id:!0,class:!0,href:!0});var Za=n(V);ht=a(Za,"SPAN",{});var en=n(ht);k(ve.$$.fragment,en),en.forEach(s),Za.forEach(s),Oo=u(ds),ft=a(ds,"SPAN",{});var tn=n(ft);$o=r(tn,"Optimizing and Quantizing in Pipelines"),tn.forEach(s),ds.forEach(s),Vt=u(e),Ce=a(e,"P",{});var sn=n(Ce);gt=a(sn,"EM",{});var on=n(gt);xo=r(on,"TODO: Rework this is not valid anymore"),on.forEach(s),sn.forEach(s),Xt=u(e),_=a(e,"P",{});var M=n(_);Eo=r(M,"The "),_t=a(M,"CODE",{});var an=n(_t);To=r(an,"optimum_pipeline"),an.forEach(s),bo=r(M," can not only run inference on vanilla Onnxruntime checkpoints you can also use checkpoints optimized with "),vt=a(M,"CODE",{});var nn=n(vt);Ao=r(nn,"ORTQuantizer"),nn.forEach(s),Ro=r(M," and "),wt=a(M,"CODE",{});var rn=n(wt);Co=r(rn,"ORTOptimizer"),rn.forEach(s),Mo=r(M,`
Below you can find two examples on how you could [~`),kt=a(M,"CODE",{});var ln=n(kt);Po=r(ln,"ORTOptimizer"),ln.forEach(s),Fo=r(M,"] and [~"),qt=a(M,"CODE",{});var pn=n(qt);Qo=r(pn,"ORTQuantizer"),pn.forEach(s),Do=r(M,"] to optimize/quantize your model and use it for inference afterwards."),M.forEach(s),Zt=u(e),L=a(e,"H3",{class:!0});var cs=n(L);X=a(cs,"A",{id:!0,class:!0,href:!0});var mn=n(X);zt=a(mn,"SPAN",{});var un=n(zt);k(we.$$.fragment,un),un.forEach(s),mn.forEach(s),So=u(cs),ke=a(cs,"SPAN",{});var hs=n(ke);No=r(hs,"Quantizing with [~"),jt=a(hs,"CODE",{});var dn=n(jt);Io=r(dn,"ORTQuantizer"),dn.forEach(s),Ho=r(hs,"]"),hs.forEach(s),cs.forEach(s),es=u(e),k(qe.$$.fragment,e),ts=u(e),U=a(e,"H3",{class:!0});var fs=n(U);Z=a(fs,"A",{id:!0,class:!0,href:!0});var cn=n(Z);yt=a(cn,"SPAN",{});var hn=n(yt);k(ze.$$.fragment,hn),hn.forEach(s),cn.forEach(s),Lo=u(fs),je=a(fs,"SPAN",{});var gs=n(je);Uo=r(gs,"Optimizing with [~"),Ot=a(gs,"CODE",{});var fn=n(Ot);Wo=r(fn,"ORTOptimizer"),fn.forEach(s),Bo=r(gs,"]"),gs.forEach(s),fs.forEach(s),ss=u(e),k(ye.$$.fragment,e),os=u(e),W=a(e,"H2",{class:!0});var _s=n(W);ee=a(_s,"A",{id:!0,class:!0,href:!0});var gn=n(ee);$t=a(gn,"SPAN",{});var _n=n($t);k(Oe.$$.fragment,_n),_n.forEach(s),gn.forEach(s),Yo=u(_s),xt=a(_s,"SPAN",{});var vn=n(xt);Go=r(vn,"Transformers pipeline usage"),vn.forEach(s),_s.forEach(s),as=u(e),v=a(e,"P",{});var P=n(v);Jo=r(P,"The "),Et=a(P,"CODE",{});var wn=n(Et);Ko=r(wn,"optimum_pipeline"),wn.forEach(s),Vo=r(P," is just a light wrapper around the "),Tt=a(P,"CODE",{});var kn=n(Tt);Xo=r(kn,"transformers.pipeline"),kn.forEach(s),Zo=r(P,` to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),bt=a(P,"CODE",{});var qn=n(bt);ea=r(qn,"transformers.pipeline"),qn.forEach(s),ta=r(P," and just replace your "),At=a(P,"CODE",{});var zn=n(At);sa=r(zn,"AutoFor*"),zn.forEach(s),oa=r(P,` with the optimum
`),Rt=a(P,"CODE",{});var jn=n(Rt);aa=r(jn,"ORTModelFor*"),jn.forEach(s),na=r(P," class."),P.forEach(s),ns=u(e),k($e.$$.fragment,e),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(Rn)),d(T,"id","optimum-pipelines-for-inference"),d(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(T,"href","#optimum-pipelines-for-inference"),d(O,"class","relative group"),d(ne,"href","https://huggingface.co/models"),d(ne,"rel","nofollow"),d(G,"id","optimum-pipeline-usage"),d(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(G,"href","#optimum-pipeline-usage"),d(S,"class","relative group"),d(pe,"start","2"),d(J,"id","use-a-vanilla-transformers-model-and-convert"),d(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(J,"href","#use-a-vanilla-transformers-model-and-convert"),d(N,"class","relative group"),d(ce,"href","https://huggingface.co/models"),d(ce,"rel","nofollow"),d(K,"id","use-optimum-model"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#use-optimum-model"),d(I,"class","relative group"),d(ge,"href","https://huggingface.co/models"),d(ge,"rel","nofollow"),d(V,"id","optimizing-and-quantizing-in-pipelines"),d(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(V,"href","#optimizing-and-quantizing-in-pipelines"),d(H,"class","relative group"),d(X,"id","quantizing-with-ortquantizer"),d(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(X,"href","#quantizing-with-ortquantizer"),d(L,"class","relative group"),d(Z,"id","optimizing-with-ortoptimizer"),d(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Z,"href","#optimizing-with-ortoptimizer"),d(U,"class","relative group"),d(ee,"id","transformers-pipeline-usage"),d(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ee,"href","#transformers-pipeline-usage"),d(W,"class","relative group")},m(e,l){t(document.head,c),p(e,B,l),p(e,O,l),t(O,T),t(T,F),q(x,F,null),t(O,ae),t(O,Q),t(Q,D),p(e,E,l),p(e,$,l),t($,Te),t($,Me),t(Me,vs),t($,ws),t($,ne),t(ne,ks),t($,qs),t($,Pe),t(Pe,zs),t($,js),p(e,Mt,l),q(Y,e,l),p(e,Pt,l),p(e,be,l),t(be,ys),p(e,Ft,l),p(e,Ae,l),t(Ae,Fe),t(Fe,Os),p(e,Qt,l),p(e,h,l),t(h,Qe),t(Qe,De),t(De,$s),t(h,xs),t(h,Se),t(Se,Ne),t(Ne,Es),t(h,Ts),t(h,Ie),t(Ie,He),t(He,bs),t(h,As),t(h,Le),t(Le,Ue),t(Ue,Rs),t(h,Cs),t(h,We),t(We,Be),t(Be,Ms),t(h,Ps),t(h,Ye),t(Ye,Ge),t(Ge,Fs),p(e,Dt,l),p(e,S,l),t(S,G),t(G,Je),q(ie,Je,null),t(S,Qs),t(S,Ke),t(Ke,Ds),p(e,St,l),p(e,b,l),t(b,Ss),t(b,Ve),t(Ve,Ns),t(b,Is),t(b,Xe),t(Xe,Hs),t(b,Ls),t(b,Ze),t(Ze,Us),t(b,Ws),p(e,Nt,l),p(e,Re,l),t(Re,re),t(re,Bs),t(re,et),t(et,Ys),t(re,Gs),p(e,It,l),q(le,e,l),p(e,Ht,l),p(e,pe,l),t(pe,me),t(me,Js),t(me,tt),t(tt,Ks),t(me,Vs),p(e,Lt,l),q(ue,e,l),p(e,Ut,l),p(e,N,l),t(N,J),t(J,st),q(de,st,null),t(N,Xs),t(N,ot),t(ot,Zs),p(e,Wt,l),p(e,f,l),t(f,eo),t(f,at),t(at,to),t(f,so),t(f,ce),t(ce,oo),t(f,ao),t(f,nt),t(nt,no),t(f,io),t(f,it),t(it,ro),t(f,lo),t(f,rt),t(rt,po),t(f,mo),p(e,Bt,l),q(he,e,l),p(e,Yt,l),p(e,I,l),t(I,K),t(K,lt),q(fe,lt,null),t(I,uo),t(I,pt),t(pt,co),p(e,Gt,l),p(e,g,l),t(g,ho),t(g,mt),t(mt,fo),t(g,go),t(g,ge),t(ge,_o),t(g,vo),t(g,ut),t(ut,wo),t(g,ko),t(g,dt),t(dt,qo),t(g,zo),t(g,ct),t(ct,jo),t(g,yo),p(e,Jt,l),q(_e,e,l),p(e,Kt,l),p(e,H,l),t(H,V),t(V,ht),q(ve,ht,null),t(H,Oo),t(H,ft),t(ft,$o),p(e,Vt,l),p(e,Ce,l),t(Ce,gt),t(gt,xo),p(e,Xt,l),p(e,_,l),t(_,Eo),t(_,_t),t(_t,To),t(_,bo),t(_,vt),t(vt,Ao),t(_,Ro),t(_,wt),t(wt,Co),t(_,Mo),t(_,kt),t(kt,Po),t(_,Fo),t(_,qt),t(qt,Qo),t(_,Do),p(e,Zt,l),p(e,L,l),t(L,X),t(X,zt),q(we,zt,null),t(L,So),t(L,ke),t(ke,No),t(ke,jt),t(jt,Io),t(ke,Ho),p(e,es,l),q(qe,e,l),p(e,ts,l),p(e,U,l),t(U,Z),t(Z,yt),q(ze,yt,null),t(U,Lo),t(U,je),t(je,Uo),t(je,Ot),t(Ot,Wo),t(je,Bo),p(e,ss,l),q(ye,e,l),p(e,os,l),p(e,W,l),t(W,ee),t(ee,$t),q(Oe,$t,null),t(W,Yo),t(W,xt),t(xt,Go),p(e,as,l),p(e,v,l),t(v,Jo),t(v,Et),t(Et,Ko),t(v,Vo),t(v,Tt),t(Tt,Xo),t(v,Zo),t(v,bt),t(bt,ea),t(v,ta),t(v,At),t(At,sa),t(v,oa),t(v,Rt),t(Rt,aa),t(v,na),p(e,ns,l),q($e,e,l),is=!0},p(e,[l]){const xe={};l&2&&(xe.$$scope={dirty:l,ctx:e}),Y.$set(xe)},i(e){is||(z(x.$$.fragment,e),z(Y.$$.fragment,e),z(ie.$$.fragment,e),z(le.$$.fragment,e),z(ue.$$.fragment,e),z(de.$$.fragment,e),z(he.$$.fragment,e),z(fe.$$.fragment,e),z(_e.$$.fragment,e),z(ve.$$.fragment,e),z(we.$$.fragment,e),z(qe.$$.fragment,e),z(ze.$$.fragment,e),z(ye.$$.fragment,e),z(Oe.$$.fragment,e),z($e.$$.fragment,e),is=!0)},o(e){j(x.$$.fragment,e),j(Y.$$.fragment,e),j(ie.$$.fragment,e),j(le.$$.fragment,e),j(ue.$$.fragment,e),j(de.$$.fragment,e),j(he.$$.fragment,e),j(fe.$$.fragment,e),j(_e.$$.fragment,e),j(ve.$$.fragment,e),j(we.$$.fragment,e),j(qe.$$.fragment,e),j(ze.$$.fragment,e),j(ye.$$.fragment,e),j(Oe.$$.fragment,e),j($e.$$.fragment,e),is=!1},d(e){s(c),e&&s(B),e&&s(O),y(x),e&&s(E),e&&s($),e&&s(Mt),y(Y,e),e&&s(Pt),e&&s(be),e&&s(Ft),e&&s(Ae),e&&s(Qt),e&&s(h),e&&s(Dt),e&&s(S),y(ie),e&&s(St),e&&s(b),e&&s(Nt),e&&s(Re),e&&s(It),y(le,e),e&&s(Ht),e&&s(pe),e&&s(Lt),y(ue,e),e&&s(Ut),e&&s(N),y(de),e&&s(Wt),e&&s(f),e&&s(Bt),y(he,e),e&&s(Yt),e&&s(I),y(fe),e&&s(Gt),e&&s(g),e&&s(Jt),y(_e,e),e&&s(Kt),e&&s(H),y(ve),e&&s(Vt),e&&s(Ce),e&&s(Xt),e&&s(_),e&&s(Zt),e&&s(L),y(we),e&&s(es),y(qe,e),e&&s(ts),e&&s(U),y(ze),e&&s(ss),y(ye,e),e&&s(os),e&&s(W),y(Oe),e&&s(as),e&&s(v),e&&s(ns),y($e,e)}}}const Rn={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"use-a-vanilla-transformers-model-and-convert",title:"Use a vanilla transformers model and convert"},{local:"use-optimum-model",title:"Use optimum model"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and Quantizing in Pipelines"},{local:"quantizing-with-ortquantizer",title:"Quantizing with [~`ORTQuantizer`]"},{local:"optimizing-with-ortoptimizer",title:"Optimizing with [~`ORTOptimizer`]"}],title:"Optimum pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum pipelines for inference"};function Cn(Ct){return En(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dn extends yn{constructor(c){super();On(this,c,Cn,An,$n,{})}}export{Dn as default,Rn as metadata};
