import{S as Gn,i as Qn,s as Zn,H as er,e as r,c as a,a as o,d as t,b as u,g as N,I as tr,J as nr,K as rr,q as y,o as T,k as d,w,t as i,M as ar,m as c,x as O,h as s,F as e,y as k,B as E,v as or}from"../../chunks/vendor-4918fc3c.js";import{D}from"../../chunks/Docstring-0ab167e9.js";import{I as wn}from"../../chunks/IconCopyLink-21d338b1.js";function ir(_){let m,f;const h=_[3].default,l=er(h,_,_[2],null);return{c(){m=r("div"),l&&l.c(),this.h()},l(p){m=a(p,"DIV",{class:!0});var v=o(m);l&&l.l(v),v.forEach(t),this.h()},h(){u(m,"class","course-tip "+(_[0]==="orange"?"course-tip-orange":"")+" bg-gradient-to-br dark:bg-gradient-to-r before:border-"+_[0]+"-500 dark:before:border-"+_[0]+"-800 from-"+_[0]+"-50 dark:from-gray-900 to-white dark:to-gray-950 border border-"+_[0]+"-50 text-"+_[0]+"-700 dark:text-gray-400")},m(p,v){N(p,m,v),l&&l.m(m,null),f=!0},p(p,[v]){l&&l.p&&(!f||v&4)&&tr(l,h,p,p[2],f?rr(h,p[2],v,null):nr(p[2]),null)},i(p){f||(y(l,p),f=!0)},o(p){T(l,p),f=!1},d(p){p&&t(m),l&&l.d(p)}}}function sr(_,m,f){let{$$slots:h={},$$scope:l}=m,{warning:p=!1}=m;const v=p?"orange":"green";return _.$$set=V=>{"warning"in V&&f(1,p=V.warning),"$$scope"in V&&f(2,l=V.$$scope)},[v,p,l,h]}class lr extends Gn{constructor(m){super();Qn(this,m,sr,ir,Zn,{warning:1})}}function mr(_){let m,f;return{c(){m=r("p"),f=i(`If your predictions or labels have different sequence lengths (for instance because you\u2019re doing dynamic
padding in a token classification task) the predictions will be padded (on the right) to allow for
concatenation into one array. The padding index is -100.`)},l(h){m=a(h,"P",{});var l=o(m);f=s(l,`If your predictions or labels have different sequence lengths (for instance because you\u2019re doing dynamic
padding in a token classification task) the predictions will be padded (on the right) to allow for
concatenation into one array. The padding index is -100.`),l.forEach(t)},m(h,l){N(h,m,l),e(m,f)},d(h){h&&t(m)}}}function dr(_){let m,f,h,l,p,v,V,$e,mt,We,S,U,xe,G,dt,we,ct,Xe,g,Q,pt,F,Z,ut,Oe,ht,gt,H,ee,ft,te,_t,ke,vt,bt,yt,W,ne,Tt,P,$t,Ee,xt,wt,Ne,Ot,kt,Et,X,re,Nt,ae,qt,qe,Rt,Dt,St,B,oe,Pt,L,Lt,Re,It,Ct,De,At,Mt,zt,j,ie,Vt,Se,Ut,Be,I,J,Pe,se,Ft,Le,Ht,je,q,le,Wt,Y,me,Xt,de,Bt,Ie,jt,Jt,Yt,$,ce,Kt,pe,Gt,Ce,Qt,Zt,en,K,tn,ue,nn,Ae,rn,an,on,C,A,sn,Me,ln,mn,ze,dn,cn,pn,M,un,Ve,hn,gn,Ue,fn,_n,vn,z,bn,Fe,yn,Tn,He,$n,xn,Je;return v=new wn({}),G=new wn({}),Q=new D({props:{name:"class optimum.onnxruntime.ORTTrainer",anchor:"optimum.onnxruntime.ORTTrainer",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, torch.nn.modules.module.Module] = None"},{name:"tokenizer",val:": typing.Optional[transformers.tokenization_utils_base.PreTrainedTokenizerBase] = None"},{name:"feature",val:": str = 'default'"},{name:"args",val:": TrainingArguments = None"},{name:"data_collator",val:": typing.Optional[DataCollator] = None"},{name:"train_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"eval_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"model_init",val:": typing.Callable[[], transformers.modeling_utils.PreTrainedModel] = None"},{name:"compute_metrics",val:": typing.Union[typing.Callable[[transformers.trainer_utils.EvalPrediction], typing.Dict], NoneType] = None"},{name:"callbacks",val:": typing.Optional[typing.List[transformers.trainer_callback.TrainerCallback]] = None"},{name:"optimizers",val:": typing.Tuple[torch.optim.optimizer.Optimizer, torch.optim.lr_scheduler.LambdaLR] = (None, None)"},{name:"onnx_model_path",val:": typing.Union[str, os.PathLike] = None"}],source:"https://github.com/huggingface/optimum/blob/pr_149/src/optimum/onnxruntime/trainer.py#L123"}}),Z=new D({props:{name:"compute_loss_ort",anchor:"optimum.onnxruntime.ORTTrainer.compute_loss_ort",parameters:[{name:"model",val:""},{name:"inputs",val:""},{name:"input_names",val:""},{name:"output_names",val:""},{name:"return_outputs",val:" = False"}],source:"https://github.com/huggingface/optimum/blob/pr_149/src/optimum/onnxruntime/trainer.py#L1222"}}),ee=new D({props:{name:"evaluate",anchor:"optimum.onnxruntime.ORTTrainer.evaluate",parameters:[{name:"eval_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"ignore_keys",val:": typing.Optional[typing.List[str]] = None"},{name:"metric_key_prefix",val:": str = 'eval'"},{name:"inference_with_ort",val:": bool = False"}],source:"https://github.com/huggingface/optimum/blob/pr_149/src/optimum/onnxruntime/trainer.py#L646"}}),ne=new D({props:{name:"evaluation_loop_ort",anchor:"optimum.onnxruntime.ORTTrainer.evaluation_loop_ort",parameters:[{name:"dataloader",val:": DataLoader"},{name:"description",val:": str"},{name:"prediction_loss_only",val:": typing.Optional[bool] = None"},{name:"ignore_keys",val:": typing.Optional[typing.List[str]] = None"},{name:"metric_key_prefix",val:": str = 'eval'"}],source:"https://github.com/huggingface/optimum/blob/pr_149/src/optimum/onnxruntime/trainer.py#L774"}}),re=new D({props:{name:"predict",anchor:"optimum.onnxruntime.ORTTrainer.predict",parameters:[{name:"test_dataset",val:": Dataset"},{name:"ignore_keys",val:": typing.Optional[typing.List[str]] = None"},{name:"metric_key_prefix",val:": str = 'test'"},{name:"inference_with_ort",val:": bool = False"}],source:"https://github.com/huggingface/optimum/blob/pr_149/src/optimum/onnxruntime/trainer.py#L718"}}),oe=new D({props:{name:"prediction_loop_ort",anchor:"optimum.onnxruntime.ORTTrainer.prediction_loop_ort",parameters:[{name:"dataloader",val:": DataLoader"},{name:"description",val:": str"},{name:"prediction_loss_only",val:": typing.Optional[bool] = None"},{name:"ignore_keys",val:": typing.Optional[typing.List[str]] = None"},{name:"metric_key_prefix",val:": str = 'eval'"}],source:"https://github.com/huggingface/optimum/blob/pr_149/src/optimum/onnxruntime/trainer.py#L977"}}),ie=new D({props:{name:"train",anchor:"optimum.onnxruntime.ORTTrainer.train",parameters:[{name:"resume_from_checkpoint",val:": typing.Union[str, bool, NoneType] = None"},{name:"trial",val:": typing.Union[ForwardRef('optuna.Trial'), typing.Dict[str, typing.Any]] = None"},{name:"ignore_keys_for_eval",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTTrainer.train.resume_from_checkpoint",description:`<strong>resume_from_checkpoint</strong> (<code>str</code> or <code>bool</code>, <em>optional</em>) &#x2014;
If a <code>str</code>, local path to a saved checkpoint as saved by a previous instance of <code>Trainer</code>. If a
<code>bool</code> and equals <code>True</code>, load the last checkpoint in <em>args.output_dir</em> as saved by a previous instance
of <code>Trainer</code>. If present, training will resume from the model/optimizer/scheduler states loaded here.`,name:"resume_from_checkpoint"},{anchor:"optimum.onnxruntime.ORTTrainer.train.trial",description:`<strong>trial</strong> (<code>optuna.Trial</code> or <code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The trial run or the hyperparameter dictionary for hyperparameter search.`,name:"trial"},{anchor:"optimum.onnxruntime.ORTTrainer.train.ignore_keys_for_eval",description:`<strong>ignore_keys_for_eval</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
A list of keys in the output of your model (if it is a dictionary) that should be ignored when
gathering predictions for evaluation during the training.
kwargs &#x2014;
Additional keyword arguments used to hide deprecated arguments`,name:"ignore_keys_for_eval"}],source:"https://github.com/huggingface/optimum/blob/pr_149/src/optimum/onnxruntime/trainer.py#L160"}}),se=new wn({}),le=new D({props:{name:"class optimum.onnxruntime.ORTSeq2SeqTrainer",anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, torch.nn.modules.module.Module] = None"},{name:"tokenizer",val:": typing.Optional[transformers.tokenization_utils_base.PreTrainedTokenizerBase] = None"},{name:"feature",val:": str = 'default'"},{name:"args",val:": TrainingArguments = None"},{name:"data_collator",val:": typing.Optional[DataCollator] = None"},{name:"train_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"eval_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"model_init",val:": typing.Callable[[], transformers.modeling_utils.PreTrainedModel] = None"},{name:"compute_metrics",val:": typing.Union[typing.Callable[[transformers.trainer_utils.EvalPrediction], typing.Dict], NoneType] = None"},{name:"callbacks",val:": typing.Optional[typing.List[transformers.trainer_callback.TrainerCallback]] = None"},{name:"optimizers",val:": typing.Tuple[torch.optim.optimizer.Optimizer, torch.optim.lr_scheduler.LambdaLR] = (None, None)"},{name:"onnx_model_path",val:": typing.Union[str, os.PathLike] = None"}],source:"https://github.com/huggingface/optimum/blob/pr_149/src/optimum/onnxruntime/trainer_seq2seq.py#L40"}}),me=new D({props:{name:"evaluate",anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate",parameters:[{name:"eval_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"ignore_keys",val:": typing.Optional[typing.List[str]] = None"},{name:"metric_key_prefix",val:": str = 'eval'"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"inference_with_ort",val:": bool = False"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate.eval_dataset",description:`<strong>eval_dataset</strong> (<code>Dataset</code>, <em>optional</em>) &#x2014;
Pass a dataset if you wish to override <code>self.eval_dataset</code>. If it is an <code>datasets.Dataset</code>,
columns not accepted by the <code>model.forward()</code> method are automatically removed. It must implement the
<code>__len__</code> method.`,name:"eval_dataset"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate.ignore_keys",description:`<strong>ignore_keys</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
A list of keys in the output of your model (if it is a dictionary) that should be ignored when
gathering predictions.`,name:"ignore_keys"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate.metric_key_prefix",description:`<strong>metric_key_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;eval&quot;</code>) &#x2014;
An optional prefix to be used as the metrics key prefix. For example the metrics &#x201C;bleu&#x201D; will be named
&#x201C;eval_bleu&#x201D; if the prefix is <code>&quot;eval&quot;</code> (default)`,name:"metric_key_prefix"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum target length to use when predicting with the generate method.`,name:"max_length"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of beams for beam search that will be used when predicting with the generate method. 1 means no
beam search.`,name:"num_beams"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.evaluate.inference_with_ort",description:`<strong>inference_with_ort</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether enable inference within ONNX Runtime backend. The inference will be done within PyTorch by default.`,name:"inference_with_ort"}],source:"https://github.com/huggingface/optimum/blob/pr_149/src/optimum/onnxruntime/trainer_seq2seq.py#L41",returnDescription:`
<p>A dictionary containing the evaluation loss(only within PyTorch) and the potential metrics computed from the predictions. The
dictionary also contains the epoch number which comes from the training state.</p>
`}}),ce=new D({props:{name:"predict",anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict",parameters:[{name:"test_dataset",val:": Dataset"},{name:"ignore_keys",val:": typing.Optional[typing.List[str]] = None"},{name:"metric_key_prefix",val:": str = 'eval'"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"inference_with_ort",val:": bool = False"}],parametersDescription:[{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict.test_dataset",description:`<strong>test_dataset</strong> (<code>Dataset</code>) &#x2014;
Dataset to run the predictions on. If it is an <code>datasets.Dataset</code>, columns not accepted by the
<code>model.forward()</code> method are automatically removed. Has to implement the method <code>__len__</code>`,name:"test_dataset"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict.ignore_keys",description:`<strong>ignore_keys</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
A list of keys in the output of your model (if it is a dictionary) that should be ignored when
gathering predictions.`,name:"ignore_keys"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict.metric_key_prefix",description:`<strong>metric_key_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;eval&quot;</code>) &#x2014;
An optional prefix to be used as the metrics key prefix. For example the metrics &#x201C;bleu&#x201D; will be named
&#x201C;eval_bleu&#x201D; if the prefix is <code>&quot;eval&quot;</code> (default)`,name:"metric_key_prefix"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum target length to use when predicting with the generate method.`,name:"max_length"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of beams for beam search that will be used when predicting with the generate method. 1 means no
beam search.`,name:"num_beams"},{anchor:"optimum.onnxruntime.ORTSeq2SeqTrainer.predict.inference_with_ort",description:`<strong>inference_with_ort</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether enable inference within ONNX Runtime backend. The inference will be done within PyTorch by default.`,name:"inference_with_ort"}],source:"https://github.com/huggingface/optimum/blob/pr_149/src/optimum/onnxruntime/trainer_seq2seq.py#L90"}}),K=new lr({props:{$$slots:{default:[mr]},$$scope:{ctx:_}}}),{c(){m=r("meta"),f=d(),h=r("h1"),l=r("a"),p=r("span"),w(v.$$.fragment),V=d(),$e=r("span"),mt=i("Trainer"),We=d(),S=r("h2"),U=r("a"),xe=r("span"),w(G.$$.fragment),dt=d(),we=r("span"),ct=i("ORTTrainer"),Xe=d(),g=r("div"),w(Q.$$.fragment),pt=d(),F=r("div"),w(Z.$$.fragment),ut=d(),Oe=r("p"),ht=i(`How the loss is computed by Trainer. By default, all models return the loss in the first element.
Subclass and override for custom behavior.`),gt=d(),H=r("div"),w(ee.$$.fragment),ft=d(),te=r("p"),_t=i("Run evaluation within ONNX Runtime or PyTorch backend and returns metrics.(Overriden from "),ke=r("code"),vt=i("Trainer.evaluate()"),bt=i(")"),yt=d(),W=r("div"),w(ne.$$.fragment),Tt=d(),P=r("p"),$t=i("Prediction/evaluation loop, shared by "),Ee=r("code"),xt=i("ORTTrainer.evaluate()"),wt=i(" and "),Ne=r("code"),Ot=i("ORTTrainer.predict()"),kt=i(`.
Works both with or without labels.`),Et=d(),X=r("div"),w(re.$$.fragment),Nt=d(),ae=r("p"),qt=i(`Run prediction within ONNX Runtime or PyTorch backend and returns predictions and potential metrics.
(Overriden from `),qe=r("code"),Rt=i("Trainer.predict()"),Dt=i(")"),St=d(),B=r("div"),w(oe.$$.fragment),Pt=d(),L=r("p"),Lt=i("Prediction/evaluation loop, shared by "),Re=r("code"),It=i("Trainer.evaluate()"),Ct=i(" and "),De=r("code"),At=i("Trainer.predict()"),Mt=i(`.
Works both with or without labels.`),zt=d(),j=r("div"),w(ie.$$.fragment),Vt=d(),Se=r("p"),Ut=i("Main onnxruntime training entry point."),Be=d(),I=r("h2"),J=r("a"),Pe=r("span"),w(se.$$.fragment),Ft=d(),Le=r("span"),Ht=i("ORTSeq2SeqTrainer"),je=d(),q=r("div"),w(le.$$.fragment),Wt=d(),Y=r("div"),w(me.$$.fragment),Xt=d(),de=r("p"),Bt=i(`Run evaluation and returns metrics.
The calling script will be responsible for providing a method to compute metrics, as they are task-dependent
(pass it to the init `),Ie=r("code"),jt=i("compute_metrics"),Jt=i(` argument).
You can also subclass and override this method to inject custom behavior.`),Yt=d(),$=r("div"),w(ce.$$.fragment),Kt=d(),pe=r("p"),Gt=i(`Run prediction and returns predictions and potential metrics.
Depending on the dataset and your use case, your test dataset may contain labels. In that case, this method
will also return metrics, like in `),Ce=r("code"),Qt=i("evaluate()"),Zt=i("."),en=d(),w(K.$$.fragment),tn=d(),ue=r("p"),nn=i("Returns: "),Ae=r("em"),rn=i("NamedTuple"),an=i(" A namedtuple with the following keys:"),on=d(),C=r("ul"),A=r("li"),sn=i("predictions ("),Me=r("code"),ln=i("np.ndarray"),mn=i("): The predictions on "),ze=r("code"),dn=i("test_dataset"),cn=i("."),pn=d(),M=r("li"),un=i("label_ids ("),Ve=r("code"),hn=i("np.ndarray"),gn=i(", "),Ue=r("em"),fn=i("optional"),_n=i("): The labels (if the dataset contained some)."),vn=d(),z=r("li"),bn=i("metrics ("),Fe=r("code"),yn=i("Dict[str, float]"),Tn=i(", "),He=r("em"),$n=i("optional"),xn=i(`): The potential dictionary of metrics (if the dataset
contained labels).`),this.h()},l(n){const b=ar('[data-svelte="svelte-1phssyn"]',document.head);m=a(b,"META",{name:!0,content:!0}),b.forEach(t),f=c(n),h=a(n,"H1",{class:!0});var he=o(h);l=a(he,"A",{id:!0,class:!0,href:!0});var On=o(l);p=a(On,"SPAN",{});var kn=o(p);O(v.$$.fragment,kn),kn.forEach(t),On.forEach(t),V=c(he),$e=a(he,"SPAN",{});var En=o($e);mt=s(En,"Trainer"),En.forEach(t),he.forEach(t),We=c(n),S=a(n,"H2",{class:!0});var Ye=o(S);U=a(Ye,"A",{id:!0,class:!0,href:!0});var Nn=o(U);xe=a(Nn,"SPAN",{});var qn=o(xe);O(G.$$.fragment,qn),qn.forEach(t),Nn.forEach(t),dt=c(Ye),we=a(Ye,"SPAN",{});var Rn=o(we);ct=s(Rn,"ORTTrainer"),Rn.forEach(t),Ye.forEach(t),Xe=c(n),g=a(n,"DIV",{class:!0});var x=o(g);O(Q.$$.fragment,x),pt=c(x),F=a(x,"DIV",{class:!0});var Ke=o(F);O(Z.$$.fragment,Ke),ut=c(Ke),Oe=a(Ke,"P",{});var Dn=o(Oe);ht=s(Dn,`How the loss is computed by Trainer. By default, all models return the loss in the first element.
Subclass and override for custom behavior.`),Dn.forEach(t),Ke.forEach(t),gt=c(x),H=a(x,"DIV",{class:!0});var Ge=o(H);O(ee.$$.fragment,Ge),ft=c(Ge),te=a(Ge,"P",{});var Qe=o(te);_t=s(Qe,"Run evaluation within ONNX Runtime or PyTorch backend and returns metrics.(Overriden from "),ke=a(Qe,"CODE",{});var Sn=o(ke);vt=s(Sn,"Trainer.evaluate()"),Sn.forEach(t),bt=s(Qe,")"),Qe.forEach(t),Ge.forEach(t),yt=c(x),W=a(x,"DIV",{class:!0});var Ze=o(W);O(ne.$$.fragment,Ze),Tt=c(Ze),P=a(Ze,"P",{});var ge=o(P);$t=s(ge,"Prediction/evaluation loop, shared by "),Ee=a(ge,"CODE",{});var Pn=o(Ee);xt=s(Pn,"ORTTrainer.evaluate()"),Pn.forEach(t),wt=s(ge," and "),Ne=a(ge,"CODE",{});var Ln=o(Ne);Ot=s(Ln,"ORTTrainer.predict()"),Ln.forEach(t),kt=s(ge,`.
Works both with or without labels.`),ge.forEach(t),Ze.forEach(t),Et=c(x),X=a(x,"DIV",{class:!0});var et=o(X);O(re.$$.fragment,et),Nt=c(et),ae=a(et,"P",{});var tt=o(ae);qt=s(tt,`Run prediction within ONNX Runtime or PyTorch backend and returns predictions and potential metrics.
(Overriden from `),qe=a(tt,"CODE",{});var In=o(qe);Rt=s(In,"Trainer.predict()"),In.forEach(t),Dt=s(tt,")"),tt.forEach(t),et.forEach(t),St=c(x),B=a(x,"DIV",{class:!0});var nt=o(B);O(oe.$$.fragment,nt),Pt=c(nt),L=a(nt,"P",{});var fe=o(L);Lt=s(fe,"Prediction/evaluation loop, shared by "),Re=a(fe,"CODE",{});var Cn=o(Re);It=s(Cn,"Trainer.evaluate()"),Cn.forEach(t),Ct=s(fe," and "),De=a(fe,"CODE",{});var An=o(De);At=s(An,"Trainer.predict()"),An.forEach(t),Mt=s(fe,`.
Works both with or without labels.`),fe.forEach(t),nt.forEach(t),zt=c(x),j=a(x,"DIV",{class:!0});var rt=o(j);O(ie.$$.fragment,rt),Vt=c(rt),Se=a(rt,"P",{});var Mn=o(Se);Ut=s(Mn,"Main onnxruntime training entry point."),Mn.forEach(t),rt.forEach(t),x.forEach(t),Be=c(n),I=a(n,"H2",{class:!0});var at=o(I);J=a(at,"A",{id:!0,class:!0,href:!0});var zn=o(J);Pe=a(zn,"SPAN",{});var Vn=o(Pe);O(se.$$.fragment,Vn),Vn.forEach(t),zn.forEach(t),Ft=c(at),Le=a(at,"SPAN",{});var Un=o(Le);Ht=s(Un,"ORTSeq2SeqTrainer"),Un.forEach(t),at.forEach(t),je=c(n),q=a(n,"DIV",{class:!0});var _e=o(q);O(le.$$.fragment,_e),Wt=c(_e),Y=a(_e,"DIV",{class:!0});var ot=o(Y);O(me.$$.fragment,ot),Xt=c(ot),de=a(ot,"P",{});var it=o(de);Bt=s(it,`Run evaluation and returns metrics.
The calling script will be responsible for providing a method to compute metrics, as they are task-dependent
(pass it to the init `),Ie=a(it,"CODE",{});var Fn=o(Ie);jt=s(Fn,"compute_metrics"),Fn.forEach(t),Jt=s(it,` argument).
You can also subclass and override this method to inject custom behavior.`),it.forEach(t),ot.forEach(t),Yt=c(_e),$=a(_e,"DIV",{class:!0});var R=o($);O(ce.$$.fragment,R),Kt=c(R),pe=a(R,"P",{});var st=o(pe);Gt=s(st,`Run prediction and returns predictions and potential metrics.
Depending on the dataset and your use case, your test dataset may contain labels. In that case, this method
will also return metrics, like in `),Ce=a(st,"CODE",{});var Hn=o(Ce);Qt=s(Hn,"evaluate()"),Hn.forEach(t),Zt=s(st,"."),st.forEach(t),en=c(R),O(K.$$.fragment,R),tn=c(R),ue=a(R,"P",{});var lt=o(ue);nn=s(lt,"Returns: "),Ae=a(lt,"EM",{});var Wn=o(Ae);rn=s(Wn,"NamedTuple"),Wn.forEach(t),an=s(lt," A namedtuple with the following keys:"),lt.forEach(t),on=c(R),C=a(R,"UL",{});var ve=o(C);A=a(ve,"LI",{});var be=o(A);sn=s(be,"predictions ("),Me=a(be,"CODE",{});var Xn=o(Me);ln=s(Xn,"np.ndarray"),Xn.forEach(t),mn=s(be,"): The predictions on "),ze=a(be,"CODE",{});var Bn=o(ze);dn=s(Bn,"test_dataset"),Bn.forEach(t),cn=s(be,"."),be.forEach(t),pn=c(ve),M=a(ve,"LI",{});var ye=o(M);un=s(ye,"label_ids ("),Ve=a(ye,"CODE",{});var jn=o(Ve);hn=s(jn,"np.ndarray"),jn.forEach(t),gn=s(ye,", "),Ue=a(ye,"EM",{});var Jn=o(Ue);fn=s(Jn,"optional"),Jn.forEach(t),_n=s(ye,"): The labels (if the dataset contained some)."),ye.forEach(t),vn=c(ve),z=a(ve,"LI",{});var Te=o(z);bn=s(Te,"metrics ("),Fe=a(Te,"CODE",{});var Yn=o(Fe);yn=s(Yn,"Dict[str, float]"),Yn.forEach(t),Tn=s(Te,", "),He=a(Te,"EM",{});var Kn=o(He);$n=s(Kn,"optional"),Kn.forEach(t),xn=s(Te,`): The potential dictionary of metrics (if the dataset
contained labels).`),Te.forEach(t),ve.forEach(t),R.forEach(t),_e.forEach(t),this.h()},h(){u(m,"name","hf:doc:metadata"),u(m,"content",JSON.stringify(cr)),u(l,"id","trainer"),u(l,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(l,"href","#trainer"),u(h,"class","relative group"),u(U,"id","optimum.onnxruntime.ORTTrainer"),u(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(U,"href","#optimum.onnxruntime.ORTTrainer"),u(S,"class","relative group"),u(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(g,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(J,"id","optimum.onnxruntime.ORTSeq2SeqTrainer"),u(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(J,"href","#optimum.onnxruntime.ORTSeq2SeqTrainer"),u(I,"class","relative group"),u(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,b){e(document.head,m),N(n,f,b),N(n,h,b),e(h,l),e(l,p),k(v,p,null),e(h,V),e(h,$e),e($e,mt),N(n,We,b),N(n,S,b),e(S,U),e(U,xe),k(G,xe,null),e(S,dt),e(S,we),e(we,ct),N(n,Xe,b),N(n,g,b),k(Q,g,null),e(g,pt),e(g,F),k(Z,F,null),e(F,ut),e(F,Oe),e(Oe,ht),e(g,gt),e(g,H),k(ee,H,null),e(H,ft),e(H,te),e(te,_t),e(te,ke),e(ke,vt),e(te,bt),e(g,yt),e(g,W),k(ne,W,null),e(W,Tt),e(W,P),e(P,$t),e(P,Ee),e(Ee,xt),e(P,wt),e(P,Ne),e(Ne,Ot),e(P,kt),e(g,Et),e(g,X),k(re,X,null),e(X,Nt),e(X,ae),e(ae,qt),e(ae,qe),e(qe,Rt),e(ae,Dt),e(g,St),e(g,B),k(oe,B,null),e(B,Pt),e(B,L),e(L,Lt),e(L,Re),e(Re,It),e(L,Ct),e(L,De),e(De,At),e(L,Mt),e(g,zt),e(g,j),k(ie,j,null),e(j,Vt),e(j,Se),e(Se,Ut),N(n,Be,b),N(n,I,b),e(I,J),e(J,Pe),k(se,Pe,null),e(I,Ft),e(I,Le),e(Le,Ht),N(n,je,b),N(n,q,b),k(le,q,null),e(q,Wt),e(q,Y),k(me,Y,null),e(Y,Xt),e(Y,de),e(de,Bt),e(de,Ie),e(Ie,jt),e(de,Jt),e(q,Yt),e(q,$),k(ce,$,null),e($,Kt),e($,pe),e(pe,Gt),e(pe,Ce),e(Ce,Qt),e(pe,Zt),e($,en),k(K,$,null),e($,tn),e($,ue),e(ue,nn),e(ue,Ae),e(Ae,rn),e(ue,an),e($,on),e($,C),e(C,A),e(A,sn),e(A,Me),e(Me,ln),e(A,mn),e(A,ze),e(ze,dn),e(A,cn),e(C,pn),e(C,M),e(M,un),e(M,Ve),e(Ve,hn),e(M,gn),e(M,Ue),e(Ue,fn),e(M,_n),e(C,vn),e(C,z),e(z,bn),e(z,Fe),e(Fe,yn),e(z,Tn),e(z,He),e(He,$n),e(z,xn),Je=!0},p(n,[b]){const he={};b&2&&(he.$$scope={dirty:b,ctx:n}),K.$set(he)},i(n){Je||(y(v.$$.fragment,n),y(G.$$.fragment,n),y(Q.$$.fragment,n),y(Z.$$.fragment,n),y(ee.$$.fragment,n),y(ne.$$.fragment,n),y(re.$$.fragment,n),y(oe.$$.fragment,n),y(ie.$$.fragment,n),y(se.$$.fragment,n),y(le.$$.fragment,n),y(me.$$.fragment,n),y(ce.$$.fragment,n),y(K.$$.fragment,n),Je=!0)},o(n){T(v.$$.fragment,n),T(G.$$.fragment,n),T(Q.$$.fragment,n),T(Z.$$.fragment,n),T(ee.$$.fragment,n),T(ne.$$.fragment,n),T(re.$$.fragment,n),T(oe.$$.fragment,n),T(ie.$$.fragment,n),T(se.$$.fragment,n),T(le.$$.fragment,n),T(me.$$.fragment,n),T(ce.$$.fragment,n),T(K.$$.fragment,n),Je=!1},d(n){t(m),n&&t(f),n&&t(h),E(v),n&&t(We),n&&t(S),E(G),n&&t(Xe),n&&t(g),E(Q),E(Z),E(ee),E(ne),E(re),E(oe),E(ie),n&&t(Be),n&&t(I),E(se),n&&t(je),n&&t(q),E(le),E(me),E(ce),E(K)}}}const cr={local:"trainer",sections:[{local:"optimum.onnxruntime.ORTTrainer",title:"ORTTrainer"},{local:"optimum.onnxruntime.ORTSeq2SeqTrainer",title:"ORTSeq2SeqTrainer"}],title:"Trainer"};function pr(_){return or(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fr extends Gn{constructor(m){super();Qn(this,m,pr,dr,Zn,{})}}export{fr as default,cr as metadata};
