import{S as ha,i as fa,s as ga,e as n,k as c,w,t as i,M as _a,c as o,d as s,m as u,a,x as q,h as r,b as m,G as t,g as p,y as k,q as j,o as z,B as y,v as va}from"../chunks/vendor-hf-doc-builder.js";import{T as wa}from"../chunks/Tip-hf-doc-builder.js";import{I as te}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ze}from"../chunks/CodeBlock-hf-doc-builder.js";function qa(Tt){let d,U,h,$,N;return{c(){d=n("p"),U=i("You can also use the "),h=n("a"),$=i("pipeline()"),N=i(" function from Transformers and provide your Optimum model class."),this.h()},l(O){d=o(O,"P",{});var C=a(d);U=r(C,"You can also use the "),h=o(C,"A",{href:!0,rel:!0});var W=a(h);$=r(W,"pipeline()"),W.forEach(s),N=r(C," function from Transformers and provide your Optimum model class."),C.forEach(s),this.h()},h(){m(h,"href","https://huggingface.co/docs/transformers/main/en/main_classes/pipelines#pipelines"),m(h,"rel","nofollow")},m(O,C){p(O,d,C),t(d,U),t(d,h),t(h,$),t(d,N)},d(O){O&&s(d)}}}function ka(Tt){let d,U,h,$,N,O,C,W,us,Et,T,ds,Me,hs,fs,se,gs,_s,Pe,vs,ws,bt,X,At,ye,qs,Rt,xe,Ne,ks,Ct,f,Fe,Qe,js,zs,Se,De,ys,xs,Ie,He,Os,$s,Le,Ue,Ts,Es,We,Xe,bs,As,Be,Ge,Rs,Mt,F,B,Ye,ne,Cs,Je,Ms,Pt,M,Ps,Ve,Ns,Fs,Ke,Qs,Ss,Nt,Oe,Ze,Ds,Ft,oe,Qt,ae,ie,Is,et,Hs,Ls,St,re,Dt,$e,le,Us,tt,Ws,Xs,It,Q,G,st,pe,Bs,nt,Gs,Ht,g,Ys,ot,Js,Vs,me,Ks,Zs,at,en,tn,it,sn,nn,Te,on,an,Lt,ce,Ut,S,Y,rt,ue,rn,lt,ln,Wt,x,pn,pt,mn,cn,de,un,dn,mt,hn,fn,ct,gn,_n,Xt,he,Bt,D,J,ut,fe,vn,dt,wn,Gt,_,qn,ht,kn,jn,ft,zn,yn,gt,xn,On,Ee,$n,Tn,be,En,bn,Yt,I,V,_t,ge,An,Ae,Rn,vt,Cn,Jt,_e,Vt,H,K,wt,ve,Mn,Re,Pn,qt,Nn,Kt,we,Zt,L,Z,kt,qe,Fn,jt,Qn,es,v,Sn,zt,Dn,In,yt,Hn,Ln,xt,Un,Wn,Ot,Xn,Bn,$t,Gn,Yn,ts,ke,ss;return O=new te({}),X=new wa({props:{$$slots:{default:[qa]},$$scope:{ctx:Tt}}}),ne=new te({}),oe=new ze({props:{code:`from optimum.pipelines import pipeline

classifier = pipeline(task="text-classification", accelerator="ort")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(task=<span class="hljs-string">&quot;text-classification&quot;</span>, accelerator=<span class="hljs-string">&quot;ort&quot;</span>)
`}}),re=new ze({props:{code:'classifier("I like you. I love you.")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>classifier(<span class="hljs-string">&quot;I like you. I love you.&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9998838901519775</span>}]`}}),pe=new te({}),ce=new ze({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),ue=new te({}),he=new ze({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),fe=new te({}),ge=new te({}),_e=new ze({props:{code:`from pathlib import Path
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
                  )`}}),ve=new te({}),we=new ze({props:{code:`from pathlib import Path
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
                  use_auth_token=<span class="hljs-literal">True</span>)`}}),qe=new te({}),ke=new ze({props:{code:`

`,highlighted:`from transformers import AutoTokenizer, pipeline
<span class="hljs-deletion">-from transformers import AutoModelForQuestionAnswering</span>
<span class="hljs-addition">+from optimum.onnxruntime import ORTModelForQuestionAnswering</span>

<span class="hljs-deletion">-model = AutoModelForQuestionAnswering.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)</span>
<span class="hljs-addition">+model = ORTModelForQuestionAnswering.from_transformers(&quot;optimum/roberta-base-squad2&quot;)</span>
tokenizer = AutoTokenizer.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)

onnx_qa = pipeline(&quot;question-answering&quot;,model=model,tokenizer=tokenizer)

question = &quot;What&#x27;s my name?&quot;
context = &quot;My name is Philipp and I live in Nuremberg.&quot;
pred = onnx_qa(question, context)`}}),{c(){d=n("meta"),U=c(),h=n("h1"),$=n("a"),N=n("span"),w(O.$$.fragment),C=c(),W=n("span"),us=i("Optimum pipelines for inference"),Et=c(),T=n("p"),ds=i("The "),Me=n("code"),hs=i("pipeline()"),fs=i(" function makes it simple to use models from the "),se=n("a"),gs=i("Model Hub"),_s=i(` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Pe=n("code"),vs=i("pipeline()"),ws=i(" function!"),bt=c(),w(X.$$.fragment),At=c(),ye=n("p"),qs=i("Currenlty supported tasks are:"),Rt=c(),xe=n("p"),Ne=n("strong"),ks=i("Onnx Runtime"),Ct=c(),f=n("ul"),Fe=n("li"),Qe=n("code"),js=i("feature-extraction"),zs=c(),Se=n("li"),De=n("code"),ys=i("text-classification"),xs=c(),Ie=n("li"),He=n("code"),Os=i("token-classification"),$s=c(),Le=n("li"),Ue=n("code"),Ts=i("question-answering"),Es=c(),We=n("li"),Xe=n("code"),bs=i("zero-shot-classification"),As=c(),Be=n("li"),Ge=n("code"),Rs=i("text-generation"),Mt=c(),F=n("h2"),B=n("a"),Ye=n("span"),w(ne.$$.fragment),Cs=c(),Je=n("span"),Ms=i("Optimum pipeline usage"),Pt=c(),M=n("p"),Ps=i("While each task has an associated pipeline class, it is simpler to use the general "),Ve=n("code"),Ns=i("pipeline()"),Fs=i(` function which wraps all the task-specific pipelines in one object.
The `),Ke=n("code"),Qs=i("pipeline()"),Ss=i(" function automatically loads a default model and tokenizer capable of inference for your task."),Nt=c(),Oe=n("ol"),Ze=n("li"),Ds=i("Start by creating a pipeline by specifying an inference task:"),Ft=c(),w(oe.$$.fragment),Qt=c(),ae=n("ol"),ie=n("li"),Is=i("Pass your input text to the "),et=n("code"),Hs=i("pipeline()"),Ls=i(" function:"),St=c(),w(re.$$.fragment),Dt=c(),$e=n("p"),le=n("em"),Us=i("Note: The default models used in the "),tt=n("code"),Ws=i("pipeline()"),Xs=i(" function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),It=c(),Q=n("h3"),G=n("a"),st=n("span"),w(pe.$$.fragment),Bs=c(),nt=n("span"),Gs=i("Using vanilla Transformers model and converting to ONNX"),Ht=c(),g=n("p"),Ys=i("The "),ot=n("code"),Js=i("pipeline()"),Vs=i(" function accepts any supported model from the "),me=n("a"),Ks=i("Model Hub"),Zs=i(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),at=n("code"),en=i('from_pretrained("{model_id}",from_transformers=True)'),tn=i(" method associated with the "),it=n("code"),sn=i("ORTModelFor*"),nn=i("\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),Te=n("a"),on=i("ORTModelForQuestionAnswering"),an=i(" class for question answering:"),Lt=c(),w(ce.$$.fragment),Ut=c(),S=n("h3"),Y=n("a"),rt=n("span"),w(ue.$$.fragment),rn=c(),lt=n("span"),ln=i("Using Optimum models"),Wt=c(),x=n("p"),pn=i("The "),pt=n("code"),mn=i("pipeline()"),cn=i(" function is tightly integrated with "),de=n("a"),un=i("Model Hub"),dn=i(` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),mt=n("code"),hn=i("from_pretrained()"),fn=i(" method associated with the corresponding "),ct=n("code"),gn=i("ORTModelFor*"),_n=i("\nand `AutoTokenizer\u2019 class. For example, here\u2019s how you can load an optimized model for question answering:"),Xt=c(),w(he.$$.fragment),Bt=c(),D=n("h3"),J=n("a"),ut=n("span"),w(fe.$$.fragment),vn=c(),dt=n("span"),wn=i("Optimizing and quantizing in pipelines"),Gt=c(),_=n("p"),qn=i("The "),ht=n("code"),kn=i("pipeline()"),jn=i(" function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),ft=n("code"),zn=i("ORTQuantizer"),yn=i(" and "),gt=n("code"),xn=i("ORTOptimizer"),On=i(`.
Below you can find two examples on how you could `),Ee=n("a"),$n=i("ORTOptimizer"),Tn=i(" and "),be=n("a"),En=i("ORTQuantizer"),bn=i(" to optimize/quantize your model and use it for inference afterwards."),Yt=c(),I=n("h3"),V=n("a"),_t=n("span"),w(ge.$$.fragment),An=c(),Ae=n("span"),Rn=i("Quantizing with "),vt=n("code"),Cn=i("ORTQuantizer"),Jt=c(),w(_e.$$.fragment),Vt=c(),H=n("h3"),K=n("a"),wt=n("span"),w(ve.$$.fragment),Mn=c(),Re=n("span"),Pn=i("Optimizing with "),qt=n("code"),Nn=i("ORTOptimizer"),Kt=c(),w(we.$$.fragment),Zt=c(),L=n("h2"),Z=n("a"),kt=n("span"),w(qe.$$.fragment),Fn=c(),jt=n("span"),Qn=i("Transformers pipeline usage"),es=c(),v=n("p"),Sn=i("The "),zt=n("code"),Dn=i("pipeline()"),In=i(" function is just a light wrapper around the "),yt=n("code"),Hn=i("transformers.pipeline"),Ln=i(` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),xt=n("code"),Un=i("transformers.pipeline"),Wn=i(" and just replace your "),Ot=n("code"),Xn=i("AutoFor*"),Bn=i(` with the optimum
`),$t=n("code"),Gn=i("ORTModelFor*"),Yn=i(" class."),ts=c(),w(ke.$$.fragment),this.h()},l(e){const l=_a('[data-svelte="svelte-1phssyn"]',document.head);d=o(l,"META",{name:!0,content:!0}),l.forEach(s),U=u(e),h=o(e,"H1",{class:!0});var je=a(h);$=o(je,"A",{id:!0,class:!0,href:!0});var Kn=a($);N=o(Kn,"SPAN",{});var Zn=a(N);q(O.$$.fragment,Zn),Zn.forEach(s),Kn.forEach(s),C=u(je),W=o(je,"SPAN",{});var eo=a(W);us=r(eo,"Optimum pipelines for inference"),eo.forEach(s),je.forEach(s),Et=u(e),T=o(e,"P",{});var ee=a(T);ds=r(ee,"The "),Me=o(ee,"CODE",{});var to=a(Me);hs=r(to,"pipeline()"),to.forEach(s),fs=r(ee," function makes it simple to use models from the "),se=o(ee,"A",{href:!0,rel:!0});var so=a(se);gs=r(so,"Model Hub"),so.forEach(s),_s=r(ee,` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Pe=o(ee,"CODE",{});var no=a(Pe);vs=r(no,"pipeline()"),no.forEach(s),ws=r(ee," function!"),ee.forEach(s),bt=u(e),q(X.$$.fragment,e),At=u(e),ye=o(e,"P",{});var oo=a(ye);qs=r(oo,"Currenlty supported tasks are:"),oo.forEach(s),Rt=u(e),xe=o(e,"P",{});var ao=a(xe);Ne=o(ao,"STRONG",{});var io=a(Ne);ks=r(io,"Onnx Runtime"),io.forEach(s),ao.forEach(s),Ct=u(e),f=o(e,"UL",{});var E=a(f);Fe=o(E,"LI",{});var ro=a(Fe);Qe=o(ro,"CODE",{});var lo=a(Qe);js=r(lo,"feature-extraction"),lo.forEach(s),ro.forEach(s),zs=u(E),Se=o(E,"LI",{});var po=a(Se);De=o(po,"CODE",{});var mo=a(De);ys=r(mo,"text-classification"),mo.forEach(s),po.forEach(s),xs=u(E),Ie=o(E,"LI",{});var co=a(Ie);He=o(co,"CODE",{});var uo=a(He);Os=r(uo,"token-classification"),uo.forEach(s),co.forEach(s),$s=u(E),Le=o(E,"LI",{});var ho=a(Le);Ue=o(ho,"CODE",{});var fo=a(Ue);Ts=r(fo,"question-answering"),fo.forEach(s),ho.forEach(s),Es=u(E),We=o(E,"LI",{});var go=a(We);Xe=o(go,"CODE",{});var _o=a(Xe);bs=r(_o,"zero-shot-classification"),_o.forEach(s),go.forEach(s),As=u(E),Be=o(E,"LI",{});var vo=a(Be);Ge=o(vo,"CODE",{});var wo=a(Ge);Rs=r(wo,"text-generation"),wo.forEach(s),vo.forEach(s),E.forEach(s),Mt=u(e),F=o(e,"H2",{class:!0});var ns=a(F);B=o(ns,"A",{id:!0,class:!0,href:!0});var qo=a(B);Ye=o(qo,"SPAN",{});var ko=a(Ye);q(ne.$$.fragment,ko),ko.forEach(s),qo.forEach(s),Cs=u(ns),Je=o(ns,"SPAN",{});var jo=a(Je);Ms=r(jo,"Optimum pipeline usage"),jo.forEach(s),ns.forEach(s),Pt=u(e),M=o(e,"P",{});var Ce=a(M);Ps=r(Ce,"While each task has an associated pipeline class, it is simpler to use the general "),Ve=o(Ce,"CODE",{});var zo=a(Ve);Ns=r(zo,"pipeline()"),zo.forEach(s),Fs=r(Ce,` function which wraps all the task-specific pipelines in one object.
The `),Ke=o(Ce,"CODE",{});var yo=a(Ke);Qs=r(yo,"pipeline()"),yo.forEach(s),Ss=r(Ce," function automatically loads a default model and tokenizer capable of inference for your task."),Ce.forEach(s),Nt=u(e),Oe=o(e,"OL",{});var xo=a(Oe);Ze=o(xo,"LI",{});var Oo=a(Ze);Ds=r(Oo,"Start by creating a pipeline by specifying an inference task:"),Oo.forEach(s),xo.forEach(s),Ft=u(e),q(oe.$$.fragment,e),Qt=u(e),ae=o(e,"OL",{start:!0});var $o=a(ae);ie=o($o,"LI",{});var os=a(ie);Is=r(os,"Pass your input text to the "),et=o(os,"CODE",{});var To=a(et);Hs=r(To,"pipeline()"),To.forEach(s),Ls=r(os," function:"),os.forEach(s),$o.forEach(s),St=u(e),q(re.$$.fragment,e),Dt=u(e),$e=o(e,"P",{});var Eo=a($e);le=o(Eo,"EM",{});var as=a(le);Us=r(as,"Note: The default models used in the "),tt=o(as,"CODE",{});var bo=a(tt);Ws=r(bo,"pipeline()"),bo.forEach(s),Xs=r(as," function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),as.forEach(s),Eo.forEach(s),It=u(e),Q=o(e,"H3",{class:!0});var is=a(Q);G=o(is,"A",{id:!0,class:!0,href:!0});var Ao=a(G);st=o(Ao,"SPAN",{});var Ro=a(st);q(pe.$$.fragment,Ro),Ro.forEach(s),Ao.forEach(s),Bs=u(is),nt=o(is,"SPAN",{});var Co=a(nt);Gs=r(Co,"Using vanilla Transformers model and converting to ONNX"),Co.forEach(s),is.forEach(s),Ht=u(e),g=o(e,"P",{});var b=a(g);Ys=r(b,"The "),ot=o(b,"CODE",{});var Mo=a(ot);Js=r(Mo,"pipeline()"),Mo.forEach(s),Vs=r(b," function accepts any supported model from the "),me=o(b,"A",{href:!0,rel:!0});var Po=a(me);Ks=r(Po,"Model Hub"),Po.forEach(s),Zs=r(b,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),at=o(b,"CODE",{});var No=a(at);en=r(No,'from_pretrained("{model_id}",from_transformers=True)'),No.forEach(s),tn=r(b," method associated with the "),it=o(b,"CODE",{});var Fo=a(it);sn=r(Fo,"ORTModelFor*"),Fo.forEach(s),nn=r(b,"\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),Te=o(b,"A",{href:!0});var Qo=a(Te);on=r(Qo,"ORTModelForQuestionAnswering"),Qo.forEach(s),an=r(b," class for question answering:"),b.forEach(s),Lt=u(e),q(ce.$$.fragment,e),Ut=u(e),S=o(e,"H3",{class:!0});var rs=a(S);Y=o(rs,"A",{id:!0,class:!0,href:!0});var So=a(Y);rt=o(So,"SPAN",{});var Do=a(rt);q(ue.$$.fragment,Do),Do.forEach(s),So.forEach(s),rn=u(rs),lt=o(rs,"SPAN",{});var Io=a(lt);ln=r(Io,"Using Optimum models"),Io.forEach(s),rs.forEach(s),Wt=u(e),x=o(e,"P",{});var P=a(x);pn=r(P,"The "),pt=o(P,"CODE",{});var Ho=a(pt);mn=r(Ho,"pipeline()"),Ho.forEach(s),cn=r(P," function is tightly integrated with "),de=o(P,"A",{href:!0,rel:!0});var Lo=a(de);un=r(Lo,"Model Hub"),Lo.forEach(s),dn=r(P,` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),mt=o(P,"CODE",{});var Uo=a(mt);hn=r(Uo,"from_pretrained()"),Uo.forEach(s),fn=r(P," method associated with the corresponding "),ct=o(P,"CODE",{});var Wo=a(ct);gn=r(Wo,"ORTModelFor*"),Wo.forEach(s),_n=r(P,"\nand `AutoTokenizer\u2019 class. For example, here\u2019s how you can load an optimized model for question answering:"),P.forEach(s),Xt=u(e),q(he.$$.fragment,e),Bt=u(e),D=o(e,"H3",{class:!0});var ls=a(D);J=o(ls,"A",{id:!0,class:!0,href:!0});var Xo=a(J);ut=o(Xo,"SPAN",{});var Bo=a(ut);q(fe.$$.fragment,Bo),Bo.forEach(s),Xo.forEach(s),vn=u(ls),dt=o(ls,"SPAN",{});var Go=a(dt);wn=r(Go,"Optimizing and quantizing in pipelines"),Go.forEach(s),ls.forEach(s),Gt=u(e),_=o(e,"P",{});var A=a(_);qn=r(A,"The "),ht=o(A,"CODE",{});var Yo=a(ht);kn=r(Yo,"pipeline()"),Yo.forEach(s),jn=r(A," function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),ft=o(A,"CODE",{});var Jo=a(ft);zn=r(Jo,"ORTQuantizer"),Jo.forEach(s),yn=r(A," and "),gt=o(A,"CODE",{});var Vo=a(gt);xn=r(Vo,"ORTOptimizer"),Vo.forEach(s),On=r(A,`.
Below you can find two examples on how you could `),Ee=o(A,"A",{href:!0});var Ko=a(Ee);$n=r(Ko,"ORTOptimizer"),Ko.forEach(s),Tn=r(A," and "),be=o(A,"A",{href:!0});var Zo=a(be);En=r(Zo,"ORTQuantizer"),Zo.forEach(s),bn=r(A," to optimize/quantize your model and use it for inference afterwards."),A.forEach(s),Yt=u(e),I=o(e,"H3",{class:!0});var ps=a(I);V=o(ps,"A",{id:!0,class:!0,href:!0});var ea=a(V);_t=o(ea,"SPAN",{});var ta=a(_t);q(ge.$$.fragment,ta),ta.forEach(s),ea.forEach(s),An=u(ps),Ae=o(ps,"SPAN",{});var Jn=a(Ae);Rn=r(Jn,"Quantizing with "),vt=o(Jn,"CODE",{});var sa=a(vt);Cn=r(sa,"ORTQuantizer"),sa.forEach(s),Jn.forEach(s),ps.forEach(s),Jt=u(e),q(_e.$$.fragment,e),Vt=u(e),H=o(e,"H3",{class:!0});var ms=a(H);K=o(ms,"A",{id:!0,class:!0,href:!0});var na=a(K);wt=o(na,"SPAN",{});var oa=a(wt);q(ve.$$.fragment,oa),oa.forEach(s),na.forEach(s),Mn=u(ms),Re=o(ms,"SPAN",{});var Vn=a(Re);Pn=r(Vn,"Optimizing with "),qt=o(Vn,"CODE",{});var aa=a(qt);Nn=r(aa,"ORTOptimizer"),aa.forEach(s),Vn.forEach(s),ms.forEach(s),Kt=u(e),q(we.$$.fragment,e),Zt=u(e),L=o(e,"H2",{class:!0});var cs=a(L);Z=o(cs,"A",{id:!0,class:!0,href:!0});var ia=a(Z);kt=o(ia,"SPAN",{});var ra=a(kt);q(qe.$$.fragment,ra),ra.forEach(s),ia.forEach(s),Fn=u(cs),jt=o(cs,"SPAN",{});var la=a(jt);Qn=r(la,"Transformers pipeline usage"),la.forEach(s),cs.forEach(s),es=u(e),v=o(e,"P",{});var R=a(v);Sn=r(R,"The "),zt=o(R,"CODE",{});var pa=a(zt);Dn=r(pa,"pipeline()"),pa.forEach(s),In=r(R," function is just a light wrapper around the "),yt=o(R,"CODE",{});var ma=a(yt);Hn=r(ma,"transformers.pipeline"),ma.forEach(s),Ln=r(R,` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),xt=o(R,"CODE",{});var ca=a(xt);Un=r(ca,"transformers.pipeline"),ca.forEach(s),Wn=r(R," and just replace your "),Ot=o(R,"CODE",{});var ua=a(Ot);Xn=r(ua,"AutoFor*"),ua.forEach(s),Bn=r(R,` with the optimum
`),$t=o(R,"CODE",{});var da=a($t);Gn=r(da,"ORTModelFor*"),da.forEach(s),Yn=r(R," class."),R.forEach(s),ts=u(e),q(ke.$$.fragment,e),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(ja)),m($,"id","optimum-pipelines-for-inference"),m($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($,"href","#optimum-pipelines-for-inference"),m(h,"class","relative group"),m(se,"href","https://huggingface.co/models"),m(se,"rel","nofollow"),m(B,"id","optimum-pipeline-usage"),m(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(B,"href","#optimum-pipeline-usage"),m(F,"class","relative group"),m(ae,"start","2"),m(G,"id","using-vanilla-transformers-model-and-converting-to-onnx"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#using-vanilla-transformers-model-and-converting-to-onnx"),m(Q,"class","relative group"),m(me,"href","https://huggingface.co/models"),m(me,"rel","nofollow"),m(Te,"href","/docs/optimum/pr_221/en/onnxruntime/modeling_ort#optimum.onnxruntime.ORTModelForQuestionAnswering"),m(Y,"id","using-optimum-models"),m(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Y,"href","#using-optimum-models"),m(S,"class","relative group"),m(de,"href","https://huggingface.co/models"),m(de,"rel","nofollow"),m(J,"id","optimizing-and-quantizing-in-pipelines"),m(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(J,"href","#optimizing-and-quantizing-in-pipelines"),m(D,"class","relative group"),m(Ee,"href","/docs/optimum/pr_221/en/onnxruntime/optimization#optimum.onnxruntime.ORTOptimizer"),m(be,"href","/docs/optimum/pr_221/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer"),m(V,"id","quantizing-with-ortquantizer"),m(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(V,"href","#quantizing-with-ortquantizer"),m(I,"class","relative group"),m(K,"id","optimizing-with-ortoptimizer"),m(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(K,"href","#optimizing-with-ortoptimizer"),m(H,"class","relative group"),m(Z,"id","transformers-pipeline-usage"),m(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Z,"href","#transformers-pipeline-usage"),m(L,"class","relative group")},m(e,l){t(document.head,d),p(e,U,l),p(e,h,l),t(h,$),t($,N),k(O,N,null),t(h,C),t(h,W),t(W,us),p(e,Et,l),p(e,T,l),t(T,ds),t(T,Me),t(Me,hs),t(T,fs),t(T,se),t(se,gs),t(T,_s),t(T,Pe),t(Pe,vs),t(T,ws),p(e,bt,l),k(X,e,l),p(e,At,l),p(e,ye,l),t(ye,qs),p(e,Rt,l),p(e,xe,l),t(xe,Ne),t(Ne,ks),p(e,Ct,l),p(e,f,l),t(f,Fe),t(Fe,Qe),t(Qe,js),t(f,zs),t(f,Se),t(Se,De),t(De,ys),t(f,xs),t(f,Ie),t(Ie,He),t(He,Os),t(f,$s),t(f,Le),t(Le,Ue),t(Ue,Ts),t(f,Es),t(f,We),t(We,Xe),t(Xe,bs),t(f,As),t(f,Be),t(Be,Ge),t(Ge,Rs),p(e,Mt,l),p(e,F,l),t(F,B),t(B,Ye),k(ne,Ye,null),t(F,Cs),t(F,Je),t(Je,Ms),p(e,Pt,l),p(e,M,l),t(M,Ps),t(M,Ve),t(Ve,Ns),t(M,Fs),t(M,Ke),t(Ke,Qs),t(M,Ss),p(e,Nt,l),p(e,Oe,l),t(Oe,Ze),t(Ze,Ds),p(e,Ft,l),k(oe,e,l),p(e,Qt,l),p(e,ae,l),t(ae,ie),t(ie,Is),t(ie,et),t(et,Hs),t(ie,Ls),p(e,St,l),k(re,e,l),p(e,Dt,l),p(e,$e,l),t($e,le),t(le,Us),t(le,tt),t(tt,Ws),t(le,Xs),p(e,It,l),p(e,Q,l),t(Q,G),t(G,st),k(pe,st,null),t(Q,Bs),t(Q,nt),t(nt,Gs),p(e,Ht,l),p(e,g,l),t(g,Ys),t(g,ot),t(ot,Js),t(g,Vs),t(g,me),t(me,Ks),t(g,Zs),t(g,at),t(at,en),t(g,tn),t(g,it),t(it,sn),t(g,nn),t(g,Te),t(Te,on),t(g,an),p(e,Lt,l),k(ce,e,l),p(e,Ut,l),p(e,S,l),t(S,Y),t(Y,rt),k(ue,rt,null),t(S,rn),t(S,lt),t(lt,ln),p(e,Wt,l),p(e,x,l),t(x,pn),t(x,pt),t(pt,mn),t(x,cn),t(x,de),t(de,un),t(x,dn),t(x,mt),t(mt,hn),t(x,fn),t(x,ct),t(ct,gn),t(x,_n),p(e,Xt,l),k(he,e,l),p(e,Bt,l),p(e,D,l),t(D,J),t(J,ut),k(fe,ut,null),t(D,vn),t(D,dt),t(dt,wn),p(e,Gt,l),p(e,_,l),t(_,qn),t(_,ht),t(ht,kn),t(_,jn),t(_,ft),t(ft,zn),t(_,yn),t(_,gt),t(gt,xn),t(_,On),t(_,Ee),t(Ee,$n),t(_,Tn),t(_,be),t(be,En),t(_,bn),p(e,Yt,l),p(e,I,l),t(I,V),t(V,_t),k(ge,_t,null),t(I,An),t(I,Ae),t(Ae,Rn),t(Ae,vt),t(vt,Cn),p(e,Jt,l),k(_e,e,l),p(e,Vt,l),p(e,H,l),t(H,K),t(K,wt),k(ve,wt,null),t(H,Mn),t(H,Re),t(Re,Pn),t(Re,qt),t(qt,Nn),p(e,Kt,l),k(we,e,l),p(e,Zt,l),p(e,L,l),t(L,Z),t(Z,kt),k(qe,kt,null),t(L,Fn),t(L,jt),t(jt,Qn),p(e,es,l),p(e,v,l),t(v,Sn),t(v,zt),t(zt,Dn),t(v,In),t(v,yt),t(yt,Hn),t(v,Ln),t(v,xt),t(xt,Un),t(v,Wn),t(v,Ot),t(Ot,Xn),t(v,Bn),t(v,$t),t($t,Gn),t(v,Yn),p(e,ts,l),k(ke,e,l),ss=!0},p(e,[l]){const je={};l&2&&(je.$$scope={dirty:l,ctx:e}),X.$set(je)},i(e){ss||(j(O.$$.fragment,e),j(X.$$.fragment,e),j(ne.$$.fragment,e),j(oe.$$.fragment,e),j(re.$$.fragment,e),j(pe.$$.fragment,e),j(ce.$$.fragment,e),j(ue.$$.fragment,e),j(he.$$.fragment,e),j(fe.$$.fragment,e),j(ge.$$.fragment,e),j(_e.$$.fragment,e),j(ve.$$.fragment,e),j(we.$$.fragment,e),j(qe.$$.fragment,e),j(ke.$$.fragment,e),ss=!0)},o(e){z(O.$$.fragment,e),z(X.$$.fragment,e),z(ne.$$.fragment,e),z(oe.$$.fragment,e),z(re.$$.fragment,e),z(pe.$$.fragment,e),z(ce.$$.fragment,e),z(ue.$$.fragment,e),z(he.$$.fragment,e),z(fe.$$.fragment,e),z(ge.$$.fragment,e),z(_e.$$.fragment,e),z(ve.$$.fragment,e),z(we.$$.fragment,e),z(qe.$$.fragment,e),z(ke.$$.fragment,e),ss=!1},d(e){s(d),e&&s(U),e&&s(h),y(O),e&&s(Et),e&&s(T),e&&s(bt),y(X,e),e&&s(At),e&&s(ye),e&&s(Rt),e&&s(xe),e&&s(Ct),e&&s(f),e&&s(Mt),e&&s(F),y(ne),e&&s(Pt),e&&s(M),e&&s(Nt),e&&s(Oe),e&&s(Ft),y(oe,e),e&&s(Qt),e&&s(ae),e&&s(St),y(re,e),e&&s(Dt),e&&s($e),e&&s(It),e&&s(Q),y(pe),e&&s(Ht),e&&s(g),e&&s(Lt),y(ce,e),e&&s(Ut),e&&s(S),y(ue),e&&s(Wt),e&&s(x),e&&s(Xt),y(he,e),e&&s(Bt),e&&s(D),y(fe),e&&s(Gt),e&&s(_),e&&s(Yt),e&&s(I),y(ge),e&&s(Jt),y(_e,e),e&&s(Vt),e&&s(H),y(ve),e&&s(Kt),y(we,e),e&&s(Zt),e&&s(L),y(qe),e&&s(es),e&&s(v),e&&s(ts),y(ke,e)}}}const ja={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"using-vanilla-transformers-model-and-converting-to-onnx",title:"Using vanilla Transformers model and converting to ONNX"},{local:"using-optimum-models",title:"Using Optimum models"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and quantizing in pipelines"},{local:"quantizing-with-ortquantizer",title:"Quantizing with `ORTQuantizer`"},{local:"optimizing-with-ortoptimizer",title:"Optimizing with `ORTOptimizer`"}],title:"Optimum pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum pipelines for inference"};function za(Tt){return va(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ta extends ha{constructor(d){super();fa(this,d,za,ka,ga,{})}}export{Ta as default,ja as metadata};
