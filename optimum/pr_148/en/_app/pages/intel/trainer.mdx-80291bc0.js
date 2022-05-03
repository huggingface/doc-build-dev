import{S as ie,i as se,s as le,e as n,k as y,w as S,t as K,M as ce,c as a,d as t,m as $,a as i,x as z,h as Q,b as o,F as r,g as b,y as C,L as me,q as U,o as q,B as R,v as pe}from"../../chunks/vendor-4918fc3c.js";import{D as ae}from"../../chunks/Docstring-02f0cd65.js";import{I as oe}from"../../chunks/IconCopyLink-21d338b1.js";function de(W){let s,x,l,d,T,g,B,k,F,P,c,u,w,f,H,N,V,E,m,v,j,h,_,J,I,G,A;return g=new oe({}),f=new oe({}),v=new ae({props:{name:"class optimum.intel.IncTrainer",anchor:"optimum.intel.IncTrainer",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, torch.nn.modules.module.Module] = None"},{name:"args",val:": TrainingArguments = None"},{name:"data_collator",val:": typing.Optional[DataCollator] = None"},{name:"train_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"eval_dataset",val:": typing.Optional[torch.utils.data.dataset.Dataset] = None"},{name:"tokenizer",val:": typing.Optional[transformers.tokenization_utils_base.PreTrainedTokenizerBase] = None"},{name:"model_init",val:": typing.Callable[[], transformers.modeling_utils.PreTrainedModel] = None"},{name:"compute_metrics",val:": typing.Union[typing.Callable[[transformers.trainer_utils.EvalPrediction], typing.Dict], NoneType] = None"},{name:"callbacks",val:": typing.Optional[typing.List[transformers.trainer_callback.TrainerCallback]] = None"},{name:"optimizers",val:": typing.Tuple[torch.optim.optimizer.Optimizer, torch.optim.lr_scheduler.LambdaLR] = (None, None)"}],source:"https://github.com/huggingface/optimum/blob/vr_148/src/optimum/intel/neural_compressor/trainer.py#L51"}}),_=new ae({props:{name:"train",anchor:"optimum.intel.IncTrainer.train",parameters:[{name:"pruner",val:": typing.Optional[neural_compressor.experimental.pruning.Pruning] = None"},{name:"resume_from_checkpoint",val:": typing.Union[str, bool, NoneType] = None"},{name:"trial",val:": typing.Union[ForwardRef('optuna.Trial'), typing.Dict[str, typing.Any]] = None"},{name:"ignore_keys_for_eval",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"optimum.intel.IncTrainer.train.pruner",description:`<strong>pruner</strong> (<code>Pruning</code>, <em>optional</em>) &#x2014;
Pruning object handling the pruning process.`,name:"pruner"},{anchor:"optimum.intel.IncTrainer.train.resume_from_checkpoint",description:`<strong>resume_from_checkpoint</strong> (<code>str</code> or <code>bool</code>, <em>optional</em>) &#x2014;
If a <code>str</code>, local path to a saved checkpoint as saved by a previous instance of
<code>Trainer</code>. If a <code>bool</code> and equals <em>True</em>, load the last checkpoint in
<em>args.output_dir</em> as saved by a previous instance of <code>Trainer</code>. If present,
training will resume from the model/optimizer/scheduler states loaded here.`,name:"resume_from_checkpoint"},{anchor:"optimum.intel.IncTrainer.train.trial",description:`<strong>trial</strong> (<code>optuna.Trial</code> or <code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The trial run or the hyperparameter dictionary for hyperparameter search.`,name:"trial"},{anchor:"optimum.intel.IncTrainer.train.ignore_keys_for_eval",description:`<strong>ignore_keys_for_eval</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
A list of keys in the output of your model (if it is a dictionary) that should be ignored when
gathering predictions for evaluation during the training.
kwargs &#x2014;
Additional keyword arguments used to hide deprecated arguments`,name:"ignore_keys_for_eval"}],source:"https://github.com/huggingface/optimum/blob/vr_148/src/optimum/intel/neural_compressor/trainer.py#L52"}}),{c(){s=n("meta"),x=y(),l=n("h1"),d=n("a"),T=n("span"),S(g.$$.fragment),B=y(),k=n("span"),F=K("Trainer"),P=y(),c=n("h2"),u=n("a"),w=n("span"),S(f.$$.fragment),H=y(),N=n("span"),V=K("IncTrainer"),E=y(),m=n("div"),S(v.$$.fragment),j=y(),h=n("div"),S(_.$$.fragment),J=y(),I=n("p"),G=K("Main training entry point."),this.h()},l(e){const p=ce('[data-svelte="svelte-1phssyn"]',document.head);s=a(p,"META",{name:!0,content:!0}),p.forEach(t),x=$(e),l=a(e,"H1",{class:!0});var D=i(l);d=a(D,"A",{id:!0,class:!0,href:!0});var X=i(d);T=a(X,"SPAN",{});var Y=i(T);z(g.$$.fragment,Y),Y.forEach(t),X.forEach(t),B=$(D),k=a(D,"SPAN",{});var Z=i(k);F=Q(Z,"Trainer"),Z.forEach(t),D.forEach(t),P=$(e),c=a(e,"H2",{class:!0});var L=i(c);u=a(L,"A",{id:!0,class:!0,href:!0});var ee=i(u);w=a(ee,"SPAN",{});var te=i(w);z(f.$$.fragment,te),te.forEach(t),ee.forEach(t),H=$(L),N=a(L,"SPAN",{});var re=i(N);V=Q(re,"IncTrainer"),re.forEach(t),L.forEach(t),E=$(e),m=a(e,"DIV",{class:!0});var O=i(m);z(v.$$.fragment,O),j=$(O),h=a(O,"DIV",{class:!0});var M=i(h);z(_.$$.fragment,M),J=$(M),I=a(M,"P",{});var ne=i(I);G=Q(ne,"Main training entry point."),ne.forEach(t),M.forEach(t),O.forEach(t),this.h()},h(){o(s,"name","hf:doc:metadata"),o(s,"content",JSON.stringify(ue)),o(d,"id","trainer"),o(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(d,"href","#trainer"),o(l,"class","relative group"),o(u,"id","optimum.intel.IncTrainer"),o(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(u,"href","#optimum.intel.IncTrainer"),o(c,"class","relative group"),o(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),o(m,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,p){r(document.head,s),b(e,x,p),b(e,l,p),r(l,d),r(d,T),C(g,T,null),r(l,B),r(l,k),r(k,F),b(e,P,p),b(e,c,p),r(c,u),r(u,w),C(f,w,null),r(c,H),r(c,N),r(N,V),b(e,E,p),b(e,m,p),C(v,m,null),r(m,j),r(m,h),C(_,h,null),r(h,J),r(h,I),r(I,G),A=!0},p:me,i(e){A||(U(g.$$.fragment,e),U(f.$$.fragment,e),U(v.$$.fragment,e),U(_.$$.fragment,e),A=!0)},o(e){q(g.$$.fragment,e),q(f.$$.fragment,e),q(v.$$.fragment,e),q(_.$$.fragment,e),A=!1},d(e){t(s),e&&t(x),e&&t(l),R(g),e&&t(P),e&&t(c),R(f),e&&t(E),e&&t(m),R(v),R(_)}}}const ue={local:"trainer",sections:[{local:"optimum.intel.IncTrainer",title:"IncTrainer"}],title:"Trainer"};function he(W){return pe(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _e extends ie{constructor(s){super();se(this,s,he,de,le,{})}}export{_e as default,ue as metadata};
