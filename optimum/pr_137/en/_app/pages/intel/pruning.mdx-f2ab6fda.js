import{S as ve,i as be,s as ye,e as t,k as g,w as z,t as _,M as Pe,c as r,d as n,m as v,a,x as B,h as b,b as i,F as o,g as y,y as R,L as we,q as V,o as W,B as J,v as Ie}from"../../chunks/vendor-4918fc3c.js";import{D as ge}from"../../chunks/Docstring-02f0cd65.js";import{I as _e}from"../../chunks/IconCopyLink-21d338b1.js";function $e(ie){let l,D,m,d,C,P,G,k,K,O,s,Q,N,X,Y,w,Z,ee,j,u,f,A,I,ne,S,oe,L,p,$,te,h,x,re,T,ae,M;return P=new _e({}),I=new _e({}),$=new ge({props:{name:"class optimum.intel.IncPruner",anchor:"optimum.intel.IncPruner",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, torch.nn.modules.module.Module]"},{name:"config_path_or_obj",val:": typing.Union[str, optimum.intel.neural_compressor.configuration.IncPruningConfig]"},{name:"tokenizer",val:": typing.Optional[transformers.tokenization_utils_base.PreTrainedTokenizerBase] = None"},{name:"eval_func",val:": typing.Optional[typing.Callable] = None"},{name:"train_func",val:": typing.Optional[typing.Callable] = None"}],source:"https://github.com/huggingface/optimum/blob/pr_137/src/optimum/intel/neural_compressor/pruning.py#L40"}}),x=new ge({props:{name:"from_config",anchor:"optimum.intel.IncPruner.from_config",parameters:[{name:"model_name_or_path",val:": str"},{name:"inc_config",val:": typing.Union[optimum.intel.neural_compressor.configuration.IncPruningConfig, str, NoneType] = None"},{name:"config_name",val:": str = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"optimum.intel.IncPruner.from_config.model_name_or_path",description:`<strong>model_name_or_path</strong> (<code>str</code>) &#x2014;
Repository name in the Hugging Face Hub or path to a local directory hosting the model.`,name:"model_name_or_path"},{anchor:"optimum.intel.IncPruner.from_config.inc_config",description:`<strong>inc_config</strong> (<code>Union[IncPruningConfig, str]</code>, <em>optional</em>) &#x2014;
Configuration file containing all the information related to the pruning strategy.
Can be either:<ul>
<li>an instance of the class <code>IncPruningConfig</code>,</li>
<li>a string valid as input to <code>IncPruningConfig.from_pretrained</code>.</li>
</ul>`,name:"inc_config"},{anchor:"optimum.intel.IncPruner.from_config.config_name",description:`<strong>config_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Name of the configuration file.`,name:"config_name"},{anchor:"optimum.intel.IncPruner.from_config.cache_dir",description:`<strong>cache_dir</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded configuration should be cached if the standard cache should
not be used.`,name:"cache_dir"},{anchor:"optimum.intel.IncPruner.from_config.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force to (re-)download the configuration files and override the cached versions if
they exist.`,name:"force_download"},{anchor:"optimum.intel.IncPruner.from_config.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received file. Attempts to resume the download if such a file
exists.`,name:"resume_download"},{anchor:"optimum.intel.IncPruner.from_config.revision(str,",description:`<strong>revision(<code>str</code>,</strong> <em>optional</em>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision(str,"},{anchor:"optimum.intel.IncPruner.from_config.eval_func",description:`<strong>eval_func</strong> (<code>Callable</code>, <em>optional</em>) &#x2014;
Evaluation function to evaluate the tuning objective.`,name:"eval_func"},{anchor:"optimum.intel.IncPruner.from_config.train_func",description:`<strong>train_func</strong> (<code>Callable</code>, <em>optional</em>) &#x2014;
Training function which will be combined with pruning.`,name:"train_func"}],source:"https://github.com/huggingface/optimum/blob/pr_137/src/optimum/intel/neural_compressor/pruning.py#L111",returnDescription:`
<p>IncPruner object.</p>
`,returnType:`
<p>pruner</p>
`}}),{c(){l=t("meta"),D=g(),m=t("h1"),d=t("a"),C=t("span"),z(P.$$.fragment),G=g(),k=t("span"),K=_("Pruning"),O=g(),s=t("p"),Q=_("\u{1F917} Optimum provides an "),N=t("code"),X=_("optimum.intel.neural_compressor"),Y=_(" package that enables you to apply magnitude pruning on many model hosted on the \u{1F917} hub using the "),w=t("a"),Z=_("Intel Neural Compressor"),ee=_(" pruning API."),j=g(),u=t("h2"),f=t("a"),A=t("span"),z(I.$$.fragment),ne=g(),S=t("span"),oe=_("IncPruner"),L=g(),p=t("div"),z($.$$.fragment),te=g(),h=t("div"),z(x.$$.fragment),re=g(),T=t("p"),ae=_(`Instantiate an IncPruner object from a configuration file which can either be hosted on huggingface.co or
from a local directory path.`),this.h()},l(e){const c=Pe('[data-svelte="svelte-1phssyn"]',document.head);l=r(c,"META",{name:!0,content:!0}),c.forEach(n),D=v(e),m=r(e,"H1",{class:!0});var U=a(m);d=r(U,"A",{id:!0,class:!0,href:!0});var ce=a(d);C=r(ce,"SPAN",{});var se=a(C);B(P.$$.fragment,se),se.forEach(n),ce.forEach(n),G=v(U),k=r(U,"SPAN",{});var le=a(k);K=b(le,"Pruning"),le.forEach(n),U.forEach(n),O=v(e),s=r(e,"P",{});var E=a(s);Q=b(E,"\u{1F917} Optimum provides an "),N=r(E,"CODE",{});var me=a(N);X=b(me,"optimum.intel.neural_compressor"),me.forEach(n),Y=b(E," package that enables you to apply magnitude pruning on many model hosted on the \u{1F917} hub using the "),w=r(E,"A",{href:!0,rel:!0});var ue=a(w);Z=b(ue,"Intel Neural Compressor"),ue.forEach(n),ee=b(E," pruning API."),E.forEach(n),j=v(e),u=r(e,"H2",{class:!0});var F=a(u);f=r(F,"A",{id:!0,class:!0,href:!0});var pe=a(f);A=r(pe,"SPAN",{});var de=a(A);B(I.$$.fragment,de),de.forEach(n),pe.forEach(n),ne=v(F),S=r(F,"SPAN",{});var fe=a(S);oe=b(fe,"IncPruner"),fe.forEach(n),F.forEach(n),L=v(e),p=r(e,"DIV",{class:!0});var H=a(p);B($.$$.fragment,H),te=v(H),h=r(H,"DIV",{class:!0});var q=a(h);B(x.$$.fragment,q),re=v(q),T=r(q,"P",{});var he=a(T);ae=b(he,`Instantiate an IncPruner object from a configuration file which can either be hosted on huggingface.co or
from a local directory path.`),he.forEach(n),q.forEach(n),H.forEach(n),this.h()},h(){i(l,"name","hf:doc:metadata"),i(l,"content",JSON.stringify(xe)),i(d,"id","pruning"),i(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(d,"href","#pruning"),i(m,"class","relative group"),i(w,"href","https://github.com/intel/neural-compressor"),i(w,"rel","nofollow"),i(f,"id","optimum.intel.IncPruner"),i(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(f,"href","#optimum.intel.IncPruner"),i(u,"class","relative group"),i(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(p,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,c){o(document.head,l),y(e,D,c),y(e,m,c),o(m,d),o(d,C),R(P,C,null),o(m,G),o(m,k),o(k,K),y(e,O,c),y(e,s,c),o(s,Q),o(s,N),o(N,X),o(s,Y),o(s,w),o(w,Z),o(s,ee),y(e,j,c),y(e,u,c),o(u,f),o(f,A),R(I,A,null),o(u,ne),o(u,S),o(S,oe),y(e,L,c),y(e,p,c),R($,p,null),o(p,te),o(p,h),R(x,h,null),o(h,re),o(h,T),o(T,ae),M=!0},p:we,i(e){M||(V(P.$$.fragment,e),V(I.$$.fragment,e),V($.$$.fragment,e),V(x.$$.fragment,e),M=!0)},o(e){W(P.$$.fragment,e),W(I.$$.fragment,e),W($.$$.fragment,e),W(x.$$.fragment,e),M=!1},d(e){n(l),e&&n(D),e&&n(m),J(P),e&&n(O),e&&n(s),e&&n(j),e&&n(u),J(I),e&&n(L),e&&n(p),J($),J(x)}}}const xe={local:"pruning",sections:[{local:"optimum.intel.IncPruner",title:"IncPruner"}],title:"Pruning"};function Ee(ie){return Ie(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ae extends ve{constructor(l){super();be(this,l,Ee,$e,ye,{})}}export{Ae as default,xe as metadata};
