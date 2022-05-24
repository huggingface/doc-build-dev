import{S as ho,i as fo,s as go,e as n,k as u,w,t as i,M as _o,c as a,d as s,m as c,a as o,x as k,h as r,b as p,G as t,g as m,y as q,q as z,o as j,B as y,v as vo}from"../chunks/vendor-hf-doc-builder.js";import{T as wo}from"../chunks/Tip-hf-doc-builder.js";import{I as te}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as je}from"../chunks/CodeBlock-hf-doc-builder.js";function ko(Ot){let h,U,d,T,C;return{c(){h=n("p"),U=i("You can also use the "),d=n("a"),T=i("pipeline()"),C=i(" function from Transformers and provide your Optimum model class."),this.h()},l($){h=a($,"P",{});var M=o(h);U=r(M,"You can also use the "),d=a(M,"A",{href:!0,rel:!0});var W=o(d);T=r(W,"pipeline()"),W.forEach(s),C=r(M," function from Transformers and provide your Optimum model class."),M.forEach(s),this.h()},h(){p(d,"href","https://huggingface.co/docs/transformers/main/en/main_classes/pipelines#pipelines"),p(d,"rel","nofollow")},m($,M){m($,h,M),t(h,U),t(h,d),t(d,T),t(h,C)},d($){$&&s(h)}}}function qo(Ot){let h,U,d,T,C,$,M,W,cs,bt,O,hs,ye,ds,fs,se,gs,_s,xe,vs,ws,Et,X,At,$e,ks,Rt,Te,Ue,qs,Mt,f,We,Xe,zs,js,Be,Ge,ys,xs,Ye,Je,$s,Ts,Ve,Ke,Os,bs,Ze,et,Es,As,tt,st,Rs,Pt,N,B,nt,ne,Ms,at,Ps,Ft,P,Fs,Oe,Cs,Ns,be,Qs,Ss,Ct,Ee,ot,Is,Nt,ae,Qt,oe,ie,Ds,Ae,Hs,Ls,St,re,It,Re,le,Us,Me,Ws,Xs,Dt,Q,G,it,pe,Bs,rt,Gs,Ht,g,Ys,Pe,Js,Vs,me,Ks,Zs,lt,en,tn,pt,sn,nn,Fe,an,on,Lt,ue,Ut,S,Y,mt,ce,rn,ut,ln,Wt,x,pn,Ce,mn,un,he,cn,hn,ct,dn,fn,ht,gn,_n,Xt,de,Bt,I,J,dt,fe,vn,ft,wn,Gt,_,kn,Ne,qn,zn,gt,jn,yn,_t,xn,$n,Qe,Tn,On,Se,bn,En,Yt,D,V,vt,ge,An,Ie,Rn,wt,Mn,Jt,_e,Vt,H,K,kt,ve,Pn,De,Fn,qt,Cn,Kt,we,Zt,L,Z,zt,ke,Nn,jt,Qn,es,v,Sn,He,In,Dn,yt,Hn,Ln,xt,Un,Wn,$t,Xn,Bn,Tt,Gn,Yn,ts,qe,ss;return $=new te({}),X=new wo({props:{$$slots:{default:[ko]},$$scope:{ctx:Ot}}}),ne=new te({}),ae=new je({props:{code:`from optimum.pipelines import pipeline

classifier = pipeline(task="text-classification", accelerator="ort")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(task=<span class="hljs-string">&quot;text-classification&quot;</span>, accelerator=<span class="hljs-string">&quot;ort&quot;</span>)
`}}),re=new je({props:{code:'classifier("I like you. I love you.")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>classifier(<span class="hljs-string">&quot;I like you. I love you.&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9998838901519775</span>}]`}}),pe=new te({}),ue=new je({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),ce=new te({}),de=new je({props:{code:`from transformers import AutoTokenizer
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
                  use_auth_token=<span class="hljs-literal">True</span>)`}}),ke=new te({}),qe=new je({props:{code:`from transformers import AutoTokenizer, pipeline
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
pred = onnx_qa(question, context)`}}),{c(){h=n("meta"),U=u(),d=n("h1"),T=n("a"),C=n("span"),w($.$$.fragment),M=u(),W=n("span"),cs=i("Optimum pipelines for inference"),bt=u(),O=n("p"),hs=i("The "),ye=n("a"),ds=i("pipeline()"),fs=i(" function makes it simple to use models from the "),se=n("a"),gs=i("Model Hub"),_s=i(` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),xe=n("a"),vs=i("pipeline()"),ws=i(" function!"),Et=u(),w(X.$$.fragment),At=u(),$e=n("p"),ks=i("Currenlty supported tasks are:"),Rt=u(),Te=n("p"),Ue=n("strong"),qs=i("Onnx Runtime"),Mt=u(),f=n("ul"),We=n("li"),Xe=n("code"),zs=i("feature-extraction"),js=u(),Be=n("li"),Ge=n("code"),ys=i("text-classification"),xs=u(),Ye=n("li"),Je=n("code"),$s=i("token-classification"),Ts=u(),Ve=n("li"),Ke=n("code"),Os=i("question-answering"),bs=u(),Ze=n("li"),et=n("code"),Es=i("zero-shot-classification"),As=u(),tt=n("li"),st=n("code"),Rs=i("text-generation"),Pt=u(),N=n("h2"),B=n("a"),nt=n("span"),w(ne.$$.fragment),Ms=u(),at=n("span"),Ps=i("Optimum pipeline usage"),Ft=u(),P=n("p"),Fs=i("While each task has an associated pipeline class, it is simpler to use the general "),Oe=n("a"),Cs=i("pipeline()"),Ns=i(` function which wraps all the task-specific pipelines in one object.
The `),be=n("a"),Qs=i("pipeline()"),Ss=i(" function automatically loads a default model and tokenizer capable of inference for your task."),Ct=u(),Ee=n("ol"),ot=n("li"),Is=i("Start by creating a pipeline by specifying an inference task:"),Nt=u(),w(ae.$$.fragment),Qt=u(),oe=n("ol"),ie=n("li"),Ds=i("Pass your input text to the "),Ae=n("a"),Hs=i("pipeline()"),Ls=i(" function:"),St=u(),w(re.$$.fragment),It=u(),Re=n("p"),le=n("em"),Us=i("Note: The default models used in the "),Me=n("a"),Ws=i("pipeline()"),Xs=i(" function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),Dt=u(),Q=n("h3"),G=n("a"),it=n("span"),w(pe.$$.fragment),Bs=u(),rt=n("span"),Gs=i("Using vanilla Transformers model and converting to ONNX"),Ht=u(),g=n("p"),Ys=i("The "),Pe=n("a"),Js=i("pipeline()"),Vs=i(" function accepts any supported model from the "),me=n("a"),Ks=i("Model Hub"),Zs=i(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),lt=n("code"),en=i('from_pretrained("{model_id}",from_transformers=True)'),tn=i(" method associated with the "),pt=n("code"),sn=i("ORTModelFor*"),nn=i("\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),Fe=n("a"),an=i("ORTModelForQuestionAnswering"),on=i(" class for question answering:"),Lt=u(),w(ue.$$.fragment),Ut=u(),S=n("h3"),Y=n("a"),mt=n("span"),w(ce.$$.fragment),rn=u(),ut=n("span"),ln=i("Using Optimum models"),Wt=u(),x=n("p"),pn=i("The "),Ce=n("a"),mn=i("pipeline()"),un=i(" function is tightly integrated with "),he=n("a"),cn=i("Model Hub"),hn=i(` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ct=n("code"),dn=i("from_pretrained()"),fn=i(" method associated with the corresponding "),ht=n("code"),gn=i("ORTModelFor*"),_n=i("\nand `AutoTokenizer\u2019 class. For example, here\u2019s how you can load an optimized model for question answering:"),Xt=u(),w(de.$$.fragment),Bt=u(),I=n("h3"),J=n("a"),dt=n("span"),w(fe.$$.fragment),vn=u(),ft=n("span"),wn=i("Optimizing and quantizing in pipelines"),Gt=u(),_=n("p"),kn=i("The "),Ne=n("a"),qn=i("pipeline()"),zn=i(" function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),gt=n("code"),jn=i("ORTQuantizer"),yn=i(" and "),_t=n("code"),xn=i("ORTOptimizer"),$n=i(`.
Below you can find two examples on how you could `),Qe=n("a"),Tn=i("ORTOptimizer"),On=i(" and "),Se=n("a"),bn=i("ORTQuantizer"),En=i(" to optimize/quantize your model and use it for inference afterwards."),Yt=u(),D=n("h3"),V=n("a"),vt=n("span"),w(ge.$$.fragment),An=u(),Ie=n("span"),Rn=i("Quantizing with "),wt=n("code"),Mn=i("ORTQuantizer"),Jt=u(),w(_e.$$.fragment),Vt=u(),H=n("h3"),K=n("a"),kt=n("span"),w(ve.$$.fragment),Pn=u(),De=n("span"),Fn=i("Optimizing with "),qt=n("code"),Cn=i("ORTOptimizer"),Kt=u(),w(we.$$.fragment),Zt=u(),L=n("h2"),Z=n("a"),zt=n("span"),w(ke.$$.fragment),Nn=u(),jt=n("span"),Qn=i("Transformers pipeline usage"),es=u(),v=n("p"),Sn=i("The "),He=n("a"),In=i("pipeline()"),Dn=i(" function is just a light wrapper around the "),yt=n("code"),Hn=i("transformers.pipeline"),Ln=i(` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),xt=n("code"),Un=i("transformers.pipeline"),Wn=i(" and just replace your "),$t=n("code"),Xn=i("AutoFor*"),Bn=i(` with the optimum
`),Tt=n("code"),Gn=i("ORTModelFor*"),Yn=i(" class."),ts=u(),w(qe.$$.fragment),this.h()},l(e){const l=_o('[data-svelte="svelte-1phssyn"]',document.head);h=a(l,"META",{name:!0,content:!0}),l.forEach(s),U=c(e),d=a(e,"H1",{class:!0});var ze=o(d);T=a(ze,"A",{id:!0,class:!0,href:!0});var Kn=o(T);C=a(Kn,"SPAN",{});var Zn=o(C);k($.$$.fragment,Zn),Zn.forEach(s),Kn.forEach(s),M=c(ze),W=a(ze,"SPAN",{});var ea=o(W);cs=r(ea,"Optimum pipelines for inference"),ea.forEach(s),ze.forEach(s),bt=c(e),O=a(e,"P",{});var ee=o(O);hs=r(ee,"The "),ye=a(ee,"A",{href:!0});var ta=o(ye);ds=r(ta,"pipeline()"),ta.forEach(s),fs=r(ee," function makes it simple to use models from the "),se=a(ee,"A",{href:!0,rel:!0});var sa=o(se);gs=r(sa,"Model Hub"),sa.forEach(s),_s=r(ee,` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),xe=a(ee,"A",{href:!0});var na=o(xe);vs=r(na,"pipeline()"),na.forEach(s),ws=r(ee," function!"),ee.forEach(s),Et=c(e),k(X.$$.fragment,e),At=c(e),$e=a(e,"P",{});var aa=o($e);ks=r(aa,"Currenlty supported tasks are:"),aa.forEach(s),Rt=c(e),Te=a(e,"P",{});var oa=o(Te);Ue=a(oa,"STRONG",{});var ia=o(Ue);qs=r(ia,"Onnx Runtime"),ia.forEach(s),oa.forEach(s),Mt=c(e),f=a(e,"UL",{});var b=o(f);We=a(b,"LI",{});var ra=o(We);Xe=a(ra,"CODE",{});var la=o(Xe);zs=r(la,"feature-extraction"),la.forEach(s),ra.forEach(s),js=c(b),Be=a(b,"LI",{});var pa=o(Be);Ge=a(pa,"CODE",{});var ma=o(Ge);ys=r(ma,"text-classification"),ma.forEach(s),pa.forEach(s),xs=c(b),Ye=a(b,"LI",{});var ua=o(Ye);Je=a(ua,"CODE",{});var ca=o(Je);$s=r(ca,"token-classification"),ca.forEach(s),ua.forEach(s),Ts=c(b),Ve=a(b,"LI",{});var ha=o(Ve);Ke=a(ha,"CODE",{});var da=o(Ke);Os=r(da,"question-answering"),da.forEach(s),ha.forEach(s),bs=c(b),Ze=a(b,"LI",{});var fa=o(Ze);et=a(fa,"CODE",{});var ga=o(et);Es=r(ga,"zero-shot-classification"),ga.forEach(s),fa.forEach(s),As=c(b),tt=a(b,"LI",{});var _a=o(tt);st=a(_a,"CODE",{});var va=o(st);Rs=r(va,"text-generation"),va.forEach(s),_a.forEach(s),b.forEach(s),Pt=c(e),N=a(e,"H2",{class:!0});var ns=o(N);B=a(ns,"A",{id:!0,class:!0,href:!0});var wa=o(B);nt=a(wa,"SPAN",{});var ka=o(nt);k(ne.$$.fragment,ka),ka.forEach(s),wa.forEach(s),Ms=c(ns),at=a(ns,"SPAN",{});var qa=o(at);Ps=r(qa,"Optimum pipeline usage"),qa.forEach(s),ns.forEach(s),Ft=c(e),P=a(e,"P",{});var Le=o(P);Fs=r(Le,"While each task has an associated pipeline class, it is simpler to use the general "),Oe=a(Le,"A",{href:!0});var za=o(Oe);Cs=r(za,"pipeline()"),za.forEach(s),Ns=r(Le,` function which wraps all the task-specific pipelines in one object.
The `),be=a(Le,"A",{href:!0});var ja=o(be);Qs=r(ja,"pipeline()"),ja.forEach(s),Ss=r(Le," function automatically loads a default model and tokenizer capable of inference for your task."),Le.forEach(s),Ct=c(e),Ee=a(e,"OL",{});var ya=o(Ee);ot=a(ya,"LI",{});var xa=o(ot);Is=r(xa,"Start by creating a pipeline by specifying an inference task:"),xa.forEach(s),ya.forEach(s),Nt=c(e),k(ae.$$.fragment,e),Qt=c(e),oe=a(e,"OL",{start:!0});var $a=o(oe);ie=a($a,"LI",{});var as=o(ie);Ds=r(as,"Pass your input text to the "),Ae=a(as,"A",{href:!0});var Ta=o(Ae);Hs=r(Ta,"pipeline()"),Ta.forEach(s),Ls=r(as," function:"),as.forEach(s),$a.forEach(s),St=c(e),k(re.$$.fragment,e),It=c(e),Re=a(e,"P",{});var Oa=o(Re);le=a(Oa,"EM",{});var os=o(le);Us=r(os,"Note: The default models used in the "),Me=a(os,"A",{href:!0});var ba=o(Me);Ws=r(ba,"pipeline()"),ba.forEach(s),Xs=r(os," function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),os.forEach(s),Oa.forEach(s),Dt=c(e),Q=a(e,"H3",{class:!0});var is=o(Q);G=a(is,"A",{id:!0,class:!0,href:!0});var Ea=o(G);it=a(Ea,"SPAN",{});var Aa=o(it);k(pe.$$.fragment,Aa),Aa.forEach(s),Ea.forEach(s),Bs=c(is),rt=a(is,"SPAN",{});var Ra=o(rt);Gs=r(Ra,"Using vanilla Transformers model and converting to ONNX"),Ra.forEach(s),is.forEach(s),Ht=c(e),g=a(e,"P",{});var E=o(g);Ys=r(E,"The "),Pe=a(E,"A",{href:!0});var Ma=o(Pe);Js=r(Ma,"pipeline()"),Ma.forEach(s),Vs=r(E," function accepts any supported model from the "),me=a(E,"A",{href:!0,rel:!0});var Pa=o(me);Ks=r(Pa,"Model Hub"),Pa.forEach(s),Zs=r(E,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),lt=a(E,"CODE",{});var Fa=o(lt);en=r(Fa,'from_pretrained("{model_id}",from_transformers=True)'),Fa.forEach(s),tn=r(E," method associated with the "),pt=a(E,"CODE",{});var Ca=o(pt);sn=r(Ca,"ORTModelFor*"),Ca.forEach(s),nn=r(E,"\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),Fe=a(E,"A",{href:!0});var Na=o(Fe);an=r(Na,"ORTModelForQuestionAnswering"),Na.forEach(s),on=r(E," class for question answering:"),E.forEach(s),Lt=c(e),k(ue.$$.fragment,e),Ut=c(e),S=a(e,"H3",{class:!0});var rs=o(S);Y=a(rs,"A",{id:!0,class:!0,href:!0});var Qa=o(Y);mt=a(Qa,"SPAN",{});var Sa=o(mt);k(ce.$$.fragment,Sa),Sa.forEach(s),Qa.forEach(s),rn=c(rs),ut=a(rs,"SPAN",{});var Ia=o(ut);ln=r(Ia,"Using Optimum models"),Ia.forEach(s),rs.forEach(s),Wt=c(e),x=a(e,"P",{});var F=o(x);pn=r(F,"The "),Ce=a(F,"A",{href:!0});var Da=o(Ce);mn=r(Da,"pipeline()"),Da.forEach(s),un=r(F," function is tightly integrated with "),he=a(F,"A",{href:!0,rel:!0});var Ha=o(he);cn=r(Ha,"Model Hub"),Ha.forEach(s),hn=r(F,` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ct=a(F,"CODE",{});var La=o(ct);dn=r(La,"from_pretrained()"),La.forEach(s),fn=r(F," method associated with the corresponding "),ht=a(F,"CODE",{});var Ua=o(ht);gn=r(Ua,"ORTModelFor*"),Ua.forEach(s),_n=r(F,"\nand `AutoTokenizer\u2019 class. For example, here\u2019s how you can load an optimized model for question answering:"),F.forEach(s),Xt=c(e),k(de.$$.fragment,e),Bt=c(e),I=a(e,"H3",{class:!0});var ls=o(I);J=a(ls,"A",{id:!0,class:!0,href:!0});var Wa=o(J);dt=a(Wa,"SPAN",{});var Xa=o(dt);k(fe.$$.fragment,Xa),Xa.forEach(s),Wa.forEach(s),vn=c(ls),ft=a(ls,"SPAN",{});var Ba=o(ft);wn=r(Ba,"Optimizing and quantizing in pipelines"),Ba.forEach(s),ls.forEach(s),Gt=c(e),_=a(e,"P",{});var A=o(_);kn=r(A,"The "),Ne=a(A,"A",{href:!0});var Ga=o(Ne);qn=r(Ga,"pipeline()"),Ga.forEach(s),zn=r(A," function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),gt=a(A,"CODE",{});var Ya=o(gt);jn=r(Ya,"ORTQuantizer"),Ya.forEach(s),yn=r(A," and "),_t=a(A,"CODE",{});var Ja=o(_t);xn=r(Ja,"ORTOptimizer"),Ja.forEach(s),$n=r(A,`.
Below you can find two examples on how you could `),Qe=a(A,"A",{href:!0});var Va=o(Qe);Tn=r(Va,"ORTOptimizer"),Va.forEach(s),On=r(A," and "),Se=a(A,"A",{href:!0});var Ka=o(Se);bn=r(Ka,"ORTQuantizer"),Ka.forEach(s),En=r(A," to optimize/quantize your model and use it for inference afterwards."),A.forEach(s),Yt=c(e),D=a(e,"H3",{class:!0});var ps=o(D);V=a(ps,"A",{id:!0,class:!0,href:!0});var Za=o(V);vt=a(Za,"SPAN",{});var eo=o(vt);k(ge.$$.fragment,eo),eo.forEach(s),Za.forEach(s),An=c(ps),Ie=a(ps,"SPAN",{});var Jn=o(Ie);Rn=r(Jn,"Quantizing with "),wt=a(Jn,"CODE",{});var to=o(wt);Mn=r(to,"ORTQuantizer"),to.forEach(s),Jn.forEach(s),ps.forEach(s),Jt=c(e),k(_e.$$.fragment,e),Vt=c(e),H=a(e,"H3",{class:!0});var ms=o(H);K=a(ms,"A",{id:!0,class:!0,href:!0});var so=o(K);kt=a(so,"SPAN",{});var no=o(kt);k(ve.$$.fragment,no),no.forEach(s),so.forEach(s),Pn=c(ms),De=a(ms,"SPAN",{});var Vn=o(De);Fn=r(Vn,"Optimizing with "),qt=a(Vn,"CODE",{});var ao=o(qt);Cn=r(ao,"ORTOptimizer"),ao.forEach(s),Vn.forEach(s),ms.forEach(s),Kt=c(e),k(we.$$.fragment,e),Zt=c(e),L=a(e,"H2",{class:!0});var us=o(L);Z=a(us,"A",{id:!0,class:!0,href:!0});var oo=o(Z);zt=a(oo,"SPAN",{});var io=o(zt);k(ke.$$.fragment,io),io.forEach(s),oo.forEach(s),Nn=c(us),jt=a(us,"SPAN",{});var ro=o(jt);Qn=r(ro,"Transformers pipeline usage"),ro.forEach(s),us.forEach(s),es=c(e),v=a(e,"P",{});var R=o(v);Sn=r(R,"The "),He=a(R,"A",{href:!0});var lo=o(He);In=r(lo,"pipeline()"),lo.forEach(s),Dn=r(R," function is just a light wrapper around the "),yt=a(R,"CODE",{});var po=o(yt);Hn=r(po,"transformers.pipeline"),po.forEach(s),Ln=r(R,` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),xt=a(R,"CODE",{});var mo=o(xt);Un=r(mo,"transformers.pipeline"),mo.forEach(s),Wn=r(R," and just replace your "),$t=a(R,"CODE",{});var uo=o($t);Xn=r(uo,"AutoFor*"),uo.forEach(s),Bn=r(R,` with the optimum
`),Tt=a(R,"CODE",{});var co=o(Tt);Gn=r(co,"ORTModelFor*"),co.forEach(s),Yn=r(R," class."),R.forEach(s),ts=c(e),k(qe.$$.fragment,e),this.h()},h(){p(h,"name","hf:doc:metadata"),p(h,"content",JSON.stringify(zo)),p(T,"id","optimum-pipelines-for-inference"),p(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(T,"href","#optimum-pipelines-for-inference"),p(d,"class","relative group"),p(ye,"href","/docs/optimum/pr_194/en/benchmark#optimum.pipelines.pipeline"),p(se,"href","https://huggingface.co/models"),p(se,"rel","nofollow"),p(xe,"href","/docs/optimum/pr_194/en/benchmark#optimum.pipelines.pipeline"),p(B,"id","optimum-pipeline-usage"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#optimum-pipeline-usage"),p(N,"class","relative group"),p(Oe,"href","/docs/optimum/pr_194/en/benchmark#optimum.pipelines.pipeline"),p(be,"href","/docs/optimum/pr_194/en/benchmark#optimum.pipelines.pipeline"),p(Ae,"href","/docs/optimum/pr_194/en/benchmark#optimum.pipelines.pipeline"),p(oe,"start","2"),p(Me,"href","/docs/optimum/pr_194/en/benchmark#optimum.pipelines.pipeline"),p(G,"id","using-vanilla-transformers-model-and-converting-to-onnx"),p(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(G,"href","#using-vanilla-transformers-model-and-converting-to-onnx"),p(Q,"class","relative group"),p(Pe,"href","/docs/optimum/pr_194/en/benchmark#optimum.pipelines.pipeline"),p(me,"href","https://huggingface.co/models"),p(me,"rel","nofollow"),p(Fe,"href","/docs/optimum/pr_194/en/onnxruntime/modeling_ort#optimum.onnxruntime.ORTModelForQuestionAnswering"),p(Y,"id","using-optimum-models"),p(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Y,"href","#using-optimum-models"),p(S,"class","relative group"),p(Ce,"href","/docs/optimum/pr_194/en/benchmark#optimum.pipelines.pipeline"),p(he,"href","https://huggingface.co/models"),p(he,"rel","nofollow"),p(J,"id","optimizing-and-quantizing-in-pipelines"),p(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(J,"href","#optimizing-and-quantizing-in-pipelines"),p(I,"class","relative group"),p(Ne,"href","/docs/optimum/pr_194/en/benchmark#optimum.pipelines.pipeline"),p(Qe,"href","/docs/optimum/pr_194/en/onnxruntime/optimization#optimum.onnxruntime.ORTOptimizer"),p(Se,"href","/docs/optimum/pr_194/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer"),p(V,"id","quantizing-with-ortquantizer"),p(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(V,"href","#quantizing-with-ortquantizer"),p(D,"class","relative group"),p(K,"id","optimizing-with-ortoptimizer"),p(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(K,"href","#optimizing-with-ortoptimizer"),p(H,"class","relative group"),p(Z,"id","transformers-pipeline-usage"),p(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Z,"href","#transformers-pipeline-usage"),p(L,"class","relative group"),p(He,"href","/docs/optimum/pr_194/en/benchmark#optimum.pipelines.pipeline")},m(e,l){t(document.head,h),m(e,U,l),m(e,d,l),t(d,T),t(T,C),q($,C,null),t(d,M),t(d,W),t(W,cs),m(e,bt,l),m(e,O,l),t(O,hs),t(O,ye),t(ye,ds),t(O,fs),t(O,se),t(se,gs),t(O,_s),t(O,xe),t(xe,vs),t(O,ws),m(e,Et,l),q(X,e,l),m(e,At,l),m(e,$e,l),t($e,ks),m(e,Rt,l),m(e,Te,l),t(Te,Ue),t(Ue,qs),m(e,Mt,l),m(e,f,l),t(f,We),t(We,Xe),t(Xe,zs),t(f,js),t(f,Be),t(Be,Ge),t(Ge,ys),t(f,xs),t(f,Ye),t(Ye,Je),t(Je,$s),t(f,Ts),t(f,Ve),t(Ve,Ke),t(Ke,Os),t(f,bs),t(f,Ze),t(Ze,et),t(et,Es),t(f,As),t(f,tt),t(tt,st),t(st,Rs),m(e,Pt,l),m(e,N,l),t(N,B),t(B,nt),q(ne,nt,null),t(N,Ms),t(N,at),t(at,Ps),m(e,Ft,l),m(e,P,l),t(P,Fs),t(P,Oe),t(Oe,Cs),t(P,Ns),t(P,be),t(be,Qs),t(P,Ss),m(e,Ct,l),m(e,Ee,l),t(Ee,ot),t(ot,Is),m(e,Nt,l),q(ae,e,l),m(e,Qt,l),m(e,oe,l),t(oe,ie),t(ie,Ds),t(ie,Ae),t(Ae,Hs),t(ie,Ls),m(e,St,l),q(re,e,l),m(e,It,l),m(e,Re,l),t(Re,le),t(le,Us),t(le,Me),t(Me,Ws),t(le,Xs),m(e,Dt,l),m(e,Q,l),t(Q,G),t(G,it),q(pe,it,null),t(Q,Bs),t(Q,rt),t(rt,Gs),m(e,Ht,l),m(e,g,l),t(g,Ys),t(g,Pe),t(Pe,Js),t(g,Vs),t(g,me),t(me,Ks),t(g,Zs),t(g,lt),t(lt,en),t(g,tn),t(g,pt),t(pt,sn),t(g,nn),t(g,Fe),t(Fe,an),t(g,on),m(e,Lt,l),q(ue,e,l),m(e,Ut,l),m(e,S,l),t(S,Y),t(Y,mt),q(ce,mt,null),t(S,rn),t(S,ut),t(ut,ln),m(e,Wt,l),m(e,x,l),t(x,pn),t(x,Ce),t(Ce,mn),t(x,un),t(x,he),t(he,cn),t(x,hn),t(x,ct),t(ct,dn),t(x,fn),t(x,ht),t(ht,gn),t(x,_n),m(e,Xt,l),q(de,e,l),m(e,Bt,l),m(e,I,l),t(I,J),t(J,dt),q(fe,dt,null),t(I,vn),t(I,ft),t(ft,wn),m(e,Gt,l),m(e,_,l),t(_,kn),t(_,Ne),t(Ne,qn),t(_,zn),t(_,gt),t(gt,jn),t(_,yn),t(_,_t),t(_t,xn),t(_,$n),t(_,Qe),t(Qe,Tn),t(_,On),t(_,Se),t(Se,bn),t(_,En),m(e,Yt,l),m(e,D,l),t(D,V),t(V,vt),q(ge,vt,null),t(D,An),t(D,Ie),t(Ie,Rn),t(Ie,wt),t(wt,Mn),m(e,Jt,l),q(_e,e,l),m(e,Vt,l),m(e,H,l),t(H,K),t(K,kt),q(ve,kt,null),t(H,Pn),t(H,De),t(De,Fn),t(De,qt),t(qt,Cn),m(e,Kt,l),q(we,e,l),m(e,Zt,l),m(e,L,l),t(L,Z),t(Z,zt),q(ke,zt,null),t(L,Nn),t(L,jt),t(jt,Qn),m(e,es,l),m(e,v,l),t(v,Sn),t(v,He),t(He,In),t(v,Dn),t(v,yt),t(yt,Hn),t(v,Ln),t(v,xt),t(xt,Un),t(v,Wn),t(v,$t),t($t,Xn),t(v,Bn),t(v,Tt),t(Tt,Gn),t(v,Yn),m(e,ts,l),q(qe,e,l),ss=!0},p(e,[l]){const ze={};l&2&&(ze.$$scope={dirty:l,ctx:e}),X.$set(ze)},i(e){ss||(z($.$$.fragment,e),z(X.$$.fragment,e),z(ne.$$.fragment,e),z(ae.$$.fragment,e),z(re.$$.fragment,e),z(pe.$$.fragment,e),z(ue.$$.fragment,e),z(ce.$$.fragment,e),z(de.$$.fragment,e),z(fe.$$.fragment,e),z(ge.$$.fragment,e),z(_e.$$.fragment,e),z(ve.$$.fragment,e),z(we.$$.fragment,e),z(ke.$$.fragment,e),z(qe.$$.fragment,e),ss=!0)},o(e){j($.$$.fragment,e),j(X.$$.fragment,e),j(ne.$$.fragment,e),j(ae.$$.fragment,e),j(re.$$.fragment,e),j(pe.$$.fragment,e),j(ue.$$.fragment,e),j(ce.$$.fragment,e),j(de.$$.fragment,e),j(fe.$$.fragment,e),j(ge.$$.fragment,e),j(_e.$$.fragment,e),j(ve.$$.fragment,e),j(we.$$.fragment,e),j(ke.$$.fragment,e),j(qe.$$.fragment,e),ss=!1},d(e){s(h),e&&s(U),e&&s(d),y($),e&&s(bt),e&&s(O),e&&s(Et),y(X,e),e&&s(At),e&&s($e),e&&s(Rt),e&&s(Te),e&&s(Mt),e&&s(f),e&&s(Pt),e&&s(N),y(ne),e&&s(Ft),e&&s(P),e&&s(Ct),e&&s(Ee),e&&s(Nt),y(ae,e),e&&s(Qt),e&&s(oe),e&&s(St),y(re,e),e&&s(It),e&&s(Re),e&&s(Dt),e&&s(Q),y(pe),e&&s(Ht),e&&s(g),e&&s(Lt),y(ue,e),e&&s(Ut),e&&s(S),y(ce),e&&s(Wt),e&&s(x),e&&s(Xt),y(de,e),e&&s(Bt),e&&s(I),y(fe),e&&s(Gt),e&&s(_),e&&s(Yt),e&&s(D),y(ge),e&&s(Jt),y(_e,e),e&&s(Vt),e&&s(H),y(ve),e&&s(Kt),y(we,e),e&&s(Zt),e&&s(L),y(ke),e&&s(es),e&&s(v),e&&s(ts),y(qe,e)}}}const zo={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"using-vanilla-transformers-model-and-converting-to-onnx",title:"Using vanilla Transformers model and converting to ONNX"},{local:"using-optimum-models",title:"Using Optimum models"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and quantizing in pipelines"},{local:"quantizing-with-ortquantizer",title:"Quantizing with `ORTQuantizer`"},{local:"optimizing-with-ortoptimizer",title:"Optimizing with `ORTOptimizer`"}],title:"Optimum pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum pipelines for inference"};function jo(Ot){return vo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Oo extends ho{constructor(h){super();fo(this,h,jo,qo,go,{})}}export{Oo as default,zo as metadata};
