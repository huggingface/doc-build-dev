import{S as Bn,i as Gn,s as Yn,e as i,k as c,w,t as n,M as Jn,c as r,d as t,m as h,a as s,x as k,h as a,b as g,F as e,g as p,y as x,q as $,o as M,B as E,v as Qn}from"../../chunks/vendor-7b1da053.js";import{T as Rn}from"../../chunks/Tip-41a95816.js";import{D as Q}from"../../chunks/Docstring-f1352b16.js";import{I as Mo}from"../../chunks/IconCopyLink-d24e9a6f.js";function Xn(pe){let u,z,_,v,T;return{c(){u=i("p"),z=n("Passing "),_=i("code"),v=n("use_auth_token=True"),T=n(` is required when you want to use a
private model.`)},l(f){u=r(f,"P",{});var b=s(u);z=a(b,"Passing "),_=r(b,"CODE",{});var H=s(_);v=a(H,"use_auth_token=True"),H.forEach(t),T=a(b,` is required when you want to use a
private model.`),b.forEach(t)},m(f,b){p(f,u,b),e(u,z),e(u,_),e(_,v),e(u,T)},d(f){f&&t(u)}}}function Zn(pe){let u,z,_,v,T;return{c(){u=i("p"),z=n("Passing "),_=i("code"),v=n("use_auth_token=True"),T=n(` is required when you want to use a private
model.`)},l(f){u=r(f,"P",{});var b=s(u);z=a(b,"Passing "),_=r(b,"CODE",{});var H=s(_);v=a(H,"use_auth_token=True"),H.forEach(t),T=a(b,` is required when you want to use a private
model.`),b.forEach(t)},m(f,b){p(f,u,b),e(u,z),e(u,_),e(_,v),e(u,T)},d(f){f&&t(u)}}}function ea(pe){let u,z,_,v,T,f,b,H,Eo,ao,C,K,ke,X,To,xe,zo,io,W,Ho,$e,Oo,Do,ro,I,U,Me,Z,Po,Ee,No,so,y,ee,So,O,Ao,Te,Co,Io,ze,qo,Lo,He,Fo,Ko,Wo,S,oe,Uo,q,jo,Oe,Vo,Ro,De,Bo,Go,Yo,j,Jo,V,te,Qo,ne,Xo,Pe,Zo,et,ot,R,ae,tt,Ne,nt,lo,L,B,Se,ie,at,Ae,it,co,D,re,rt,Ce,st,lt,G,ho,F,se,dt,le,ct,Ie,ht,gt,go,P,de,mt,qe,ut,pt,l,_t,Le,ft,bt,Fe,vt,yt,Ke,wt,kt,We,xt,$t,Ue,Mt,Et,je,Tt,zt,Ve,Ht,Ot,ce,Dt,Pt,Re,Nt,St,Be,At,Ct,he,It,qt,Ge,Lt,Ft,Ye,Kt,Wt,Je,Ut,jt,Qe,Vt,Rt,mo,N,ge,Bt,Xe,Gt,Yt,me,_e,Ze,Jt,Qt,Xt,Y,eo,Zt,en,oo,on,tn,uo;return f=new Mo({}),X=new Mo({}),Z=new Mo({}),ee=new Q({props:{name:"class huggingface_hub.ModelHubMixin",anchor:"huggingface_hub.ModelHubMixin",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/pr_806/src/huggingface_hub/hub_mixin.py#L22"}}),oe=new Q({props:{name:"from_pretrained",anchor:"huggingface_hub.ModelHubMixin.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": str"},{name:"force_download",val:": bool = False"},{name:"resume_download",val:": bool = False"},{name:"proxies",val:": typing.Dict = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"},{name:"cache_dir",val:": typing.Optional[str] = None"},{name:"local_files_only",val:": bool = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_806/src/huggingface_hub/hub_mixin.py#L73",parametersDescription:[{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Can be either:<ul>
<li>A string, the <code>model id</code> of a pretrained model
hosted inside a model repo on huggingface.co.
Valid model ids can be located at the root-level,
like <code>bert-base-uncased</code>, or namespaced under a
user or organization name, like
<code>dbmdz/bert-base-german-cased</code>.</li>
<li>You can add <code>revision</code> by appending <code>@</code> at the end
of model_id simply like this:
<code>dbmdz/bert-base-german-cased@main</code> Revision is
the specific model version to use. It can be a
branch name, a tag name, or a commit id, since we
use a git-based system for storing models and
other artifacts on huggingface.co, so <code>revision</code>
can be any identifier allowed by git.</li>
<li>A path to a <code>directory</code> containing model weights
saved using
<code>save_pretrained</code>,
e.g., <code>./my_model_directory/</code>.</li>
<li><code>None</code> if you are both providing the configuration
and state dictionary (resp. with keyword arguments
<code>config</code> and <code>state_dict</code>).</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to force the (re-)download of the model weights
and configuration files, overriding the cached versions
if they exist.`,name:"force_download"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to delete incompletely received files. Will
attempt to resume the download if such a file exists.`,name:"resume_download"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or
endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}</code>. The proxies are
used on each request.`,name:"proxies"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <code>bool</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote
files. If <code>True</code>, will use the token generated when
running <code>transformers-cli login</code> (stored in
<code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.cache_dir",description:`<strong>cache_dir</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained
model configuration should be cached if the standard
cache should not be used.`,name:"cache_dir"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.local_files_only(bool,",description:`<strong>local_files_only(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to only look at local files (i.e., do not try to
download the model).`,name:"local_files_only(bool,"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.model_kwargs",description:`<strong>model_kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
model_kwargs will be passed to the model during
initialization`,name:"model_kwargs"}]}}),j=new Rn({props:{$$slots:{default:[Xn]},$$scope:{ctx:pe}}}),te=new Q({props:{name:"push_to_hub",anchor:"huggingface_hub.ModelHubMixin.push_to_hub",parameters:[{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = 'Add model'"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"api_endpoint",val:": typing.Optional[str] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"},{name:"git_user",val:": typing.Optional[str] = None"},{name:"git_email",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[dict] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_806/src/huggingface_hub/hub_mixin.py#L211",parametersDescription:[{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Can either be a repository name for your model or tokenizer in
the Hub or a path to a local folder (in which case the
repository will have the name of that local folder). If not
specified, will default to the name given by <code>repo_url</code> and a
local directory with that name will be created.`,name:"repo_path_or_name"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.repo_url",description:`<strong>repo_url</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Specify this in case you want to push to an existing repository
in the hub. If unspecified, a new repository will be created in
your namespace (unless you specify an <code>organization</code>) with
<code>repo_name</code>.`,name:"repo_url"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Message to commit while pushing. Will default to <code>&quot;add config&quot;</code>,
<code>&quot;add tokenizer&quot;</code> or <code>&quot;add model&quot;</code> depending on the type of the
class.`,name:"commit_message"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Organization in which you want to push your model or tokenizer
(you must be a member of this organization).`,name:"organization"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether the repository created should be private.`,name:"private"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.api_endpoint",description:`<strong>api_endpoint</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The API endpoint to use when pushing the model to the hub.`,name:"api_endpoint"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files.
If <code>True</code>, will use the token generated when running
<code>transformers-cli login</code> (stored in <code>~/.huggingface</code>). Will
default to <code>True</code> if <code>repo_url</code> is not specified.`,name:"use_auth_token"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.git_user",description:`<strong>git_user</strong> (<code>str</code>, <em>optional</em>) &#x2014;
will override the <code>git config user.name</code> for committing and
pushing files to the hub.`,name:"git_user"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.git_email",description:`<strong>git_email</strong> (<code>str</code>, <em>optional</em>) &#x2014;
will override the <code>git config user.email</code> for committing and
pushing files to the hub.`,name:"git_email"},{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Configuration object to be saved alongside the model weights.`,name:"config"}],returnDescription:`
<p>The url of the commit of your model in the given repository.</p>
`}}),ae=new Q({props:{name:"save_pretrained",anchor:"huggingface_hub.ModelHubMixin.save_pretrained",parameters:[{name:"save_directory",val:": str"},{name:"config",val:": typing.Optional[dict] = None"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_806/src/huggingface_hub/hub_mixin.py#L30",parametersDescription:[{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code>) &#x2014;
Specify directory in which you want to save weights.`,name:"save_directory"},{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
specify config (must be dict) in case you want to save
it.`,name:"config"},{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set it to <code>True</code> in case you want to push your weights
to huggingface_hub`,name:"push_to_hub"},{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
kwargs will be passed to <code>push_to_hub</code>`,name:"kwargs"}]}}),ie=new Mo({}),re=new Q({props:{name:"huggingface_hub.from_pretrained_keras",anchor:"huggingface_hub.from_pretrained_keras",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_806/src/huggingface_hub/keras_mixin.py#L219",parametersDescription:[{anchor:"huggingface_hub.from_pretrained_keras.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Can be either:<ul>
<li>A string, the <code>model id</code> of a pretrained model hosted inside a
model repo on huggingface.co. Valid model ids can be located
at the root-level, like <code>bert-base-uncased</code>, or namespaced
under a user or organization name, like
<code>dbmdz/bert-base-german-cased</code>.</li>
<li>You can add <code>revision</code> by appending <code>@</code> at the end of model_id
simply like this: <code>dbmdz/bert-base-german-cased@main</code> Revision
is the specific model version to use. It can be a branch name,
a tag name, or a commit id, since we use a git-based system
for storing models and other artifacts on huggingface.co, so
<code>revision</code> can be any identifier allowed by git.</li>
<li>A path to a <code>directory</code> containing model weights saved using
<code>save_pretrained</code>, e.g.,
<code>./my_model_directory/</code>.</li>
<li><code>None</code> if you are both providing the configuration and state
dictionary (resp. with keyword arguments <code>config</code> and
<code>state_dict</code>).</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"huggingface_hub.from_pretrained_keras.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to force the (re-)download of the model weights and
configuration files, overriding the cached versions if they exist.`,name:"force_download"},{anchor:"huggingface_hub.from_pretrained_keras.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to delete incompletely received files. Will attempt to
resume the download if such a file exists.`,name:"resume_download"},{anchor:"huggingface_hub.from_pretrained_keras.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g.,
<code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}</code>. The
proxies are used on each request.`,name:"proxies"},{anchor:"huggingface_hub.from_pretrained_keras.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <code>bool</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If
<code>True</code>, will use the token generated when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"huggingface_hub.from_pretrained_keras.cache_dir",description:`<strong>cache_dir</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained model
configuration should be cached if the standard cache should not be
used.`,name:"cache_dir"},{anchor:"huggingface_hub.from_pretrained_keras.local_files_only(bool,",description:`<strong>local_files_only(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to only look at local files (i.e., do not try to download
the model).`,name:"local_files_only(bool,"},{anchor:"huggingface_hub.from_pretrained_keras.model_kwargs",description:`<strong>model_kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
model_kwargs will be passed to the model during initialization`,name:"model_kwargs"}]}}),G=new Rn({props:{$$slots:{default:[Zn]},$$scope:{ctx:pe}}}),se=new Q({props:{name:"huggingface_hub.push_to_hub_keras",anchor:"huggingface_hub.push_to_hub_keras",parameters:[{name:"model",val:""},{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"log_dir",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = 'Add model'"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"api_endpoint",val:": typing.Optional[str] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = True"},{name:"git_user",val:": typing.Optional[str] = None"},{name:"git_email",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[dict] = None"},{name:"include_optimizer",val:": typing.Optional[bool] = False"},{name:"tags",val:": typing.Union[list, str, NoneType] = None"},{name:"task_name",val:": typing.Optional[str] = None"},{name:"plot_model",val:": typing.Optional[bool] = True"},{name:"**model_save_kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_806/src/huggingface_hub/keras_mixin.py#L278",parametersDescription:[{anchor:"huggingface_hub.push_to_hub_keras.model",description:`<strong>model</strong> (<em>Keras.Model</em>) &#x2014;
The <a href="*https://www.tensorflow.org/api_docs/python/tf/keras/Model*">Keras
model</a>
you&#x2019;d like to push to the Hub. The model must be compiled and built.`,name:"model"},{anchor:"huggingface_hub.push_to_hub_keras.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<em>str</em>, <em>optional</em>) &#x2014;
Can either be a repository name for your model or tokenizer in the
Hub or a path to a local folder (in which case the repository will
have the name of that local folder). If not specified, will default
to the name given by <em>repo_url</em> and a local directory with that name
will be created.`,name:"repo_path_or_name"},{anchor:"huggingface_hub.push_to_hub_keras.repo_url",description:`<strong>repo_url</strong> (<em>str</em>, <em>optional</em>) &#x2014;
Specify this in case you want to push to an existing repository in
the Hub. If unspecified, a new repository will be created in your
namespace (unless you specify an <em>organization</em>) with <em>repo_name</em>.`,name:"repo_url"},{anchor:"huggingface_hub.push_to_hub_keras.log_dir",description:`<strong>log_dir</strong> (<em>str</em>, <em>optional</em>) &#x2014;
TensorBoard logging directory to be pushed. The Hub automatically
hosts and displays a TensorBoard instance if log files are included
in the repository.`,name:"log_dir"},{anchor:"huggingface_hub.push_to_hub_keras.commit_message",description:`<strong>commit_message</strong> (<em>str</em>, <em>optional</em>, defaults to &#x201C;Add message&#x201D;) &#x2014;
Message to commit while pushing.`,name:"commit_message"},{anchor:"huggingface_hub.push_to_hub_keras.organization",description:`<strong>organization</strong> (<em>str</em>, <em>optional</em>) &#x2014;
Organization in which you want to push your model or tokenizer (you
must be a member of this organization).`,name:"organization"},{anchor:"huggingface_hub.push_to_hub_keras.private",description:`<strong>private</strong> (<em>bool</em>, <em>optional</em>) &#x2014;
Whether the repository created should be private.`,name:"private"},{anchor:"huggingface_hub.push_to_hub_keras.api_endpoint",description:`<strong>api_endpoint</strong> (<em>str</em>, <em>optional</em>) &#x2014;
The API endpoint to use when pushing the model to the hub.`,name:"api_endpoint"},{anchor:"huggingface_hub.push_to_hub_keras.use_auth_token",description:`<strong>use_auth_token</strong> (<em>bool</em> or <em>str</em>, <em>optional</em>, defaults to <em>True</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If
<em>True</em>, will use the token generated when running <em>transformers-cli
login</em> (stored in <em>~/.huggingface</em>). Will default to <em>True</em>.`,name:"use_auth_token"},{anchor:"huggingface_hub.push_to_hub_keras.git_user",description:`<strong>git_user</strong> (<em>str</em>, <em>optional</em>) &#x2014;
will override the <em>git config user.name</em> for committing and pushing
files to the Hub.`,name:"git_user"},{anchor:"huggingface_hub.push_to_hub_keras.git_email",description:`<strong>git_email</strong> (<em>str</em>, <em>optional</em>) &#x2014;
will override the <em>git config user.email</em> for committing and pushing
files to the Hub.`,name:"git_email"},{anchor:"huggingface_hub.push_to_hub_keras.config",description:`<strong>config</strong> (<em>dict</em>, <em>optional</em>) &#x2014;
Configuration object to be saved alongside the model weights.`,name:"config"},{anchor:"huggingface_hub.push_to_hub_keras.include_optimizer",description:`<strong>include_optimizer</strong> (<em>bool</em>, <em>optional</em>, defaults to <em>False</em>) &#x2014;
Whether or not to include optimizer during serialization.`,name:"include_optimizer"},{anchor:"huggingface_hub.push_to_hub_keras.tags",description:`<strong>tags</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
List of tags that are related to model or string of a single tag. See example tags at <a href="https://github.com/huggingface/hub-docs/blame/main/modelcard.md" rel="nofollow">https://github.com/huggingface/hub-docs/blame/main/modelcard.md</a>.`,name:"tags"},{anchor:"huggingface_hub.push_to_hub_keras.task_name",description:`<strong>task_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Name of the task the model was trained on. See the available tasks at <a href="https://github.com/huggingface/huggingface_hub/blob/main/js/src/lib/interfaces/Types.ts" rel="nofollow">https://github.com/huggingface/huggingface_hub/blob/main/js/src/lib/interfaces/Types.ts</a>.`,name:"task_name"},{anchor:"huggingface_hub.push_to_hub_keras.plot_model",description:`<strong>plot_model</strong> (<code>bool</code>) &#x2014;
Setting this to <em>True</em> will plot the model and put it in the model card. Requires graphviz and pydot to be installed.`,name:"plot_model"},{anchor:"huggingface_hub.push_to_hub_keras.model_save_kwargs(dict,",description:`<strong>model_save_kwargs(<code>dict</code>,</strong> <em>optional</em>) &#x2014;
model_save_kwargs will be passed to tf.keras.models.save_model().`,name:"model_save_kwargs(dict,"}],returnDescription:`
<p>The url of the commit of your model in the given repository.</p>
`}}),de=new Q({props:{name:"huggingface_hub.save_pretrained_keras",anchor:"huggingface_hub.save_pretrained_keras",parameters:[{name:"model",val:""},{name:"save_directory",val:": str"},{name:"config",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"include_optimizer",val:": typing.Optional[bool] = False"},{name:"plot_model",val:": typing.Optional[bool] = True"},{name:"tags",val:": typing.Union[list, str, NoneType] = None"},{name:"task_name",val:": typing.Optional[str] = None"},{name:"**model_save_kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_806/src/huggingface_hub/keras_mixin.py#L156"}}),ge=new Q({props:{name:"class huggingface_hub.KerasModelHubMixin",anchor:"huggingface_hub.KerasModelHubMixin",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_806/src/huggingface_hub/keras_mixin.py#L420"}}),{c(){u=i("meta"),z=c(),_=i("h1"),v=i("a"),T=i("span"),w(f.$$.fragment),b=c(),H=i("span"),Eo=n("Mixins & serialization methods"),ao=c(),C=i("h2"),K=i("a"),ke=i("span"),w(X.$$.fragment),To=c(),xe=i("span"),zo=n("Mixins"),io=c(),W=i("p"),Ho=n("The "),$e=i("code"),Oo=n("huggingface_hub"),Do=n(` library offers a range of mixins that can be used as a parent class for your
objects, in order to provide simple uploading and downloading functions.`),ro=c(),I=i("h3"),U=i("a"),Me=i("span"),w(Z.$$.fragment),Po=c(),Ee=i("span"),No=n("PyTorch"),so=c(),y=i("div"),w(ee.$$.fragment),So=c(),O=i("p"),Ao=n(`A Generic Base Model Hub Mixin. Define your own mixin for anything by
inheriting from this class and overwriting `),Te=i("code"),Co=n("_from_pretrained"),Io=n(` and
`),ze=i("code"),qo=n("_save_pretrained"),Lo=n(` to define custom logic for saving/loading your classes.
See `),He=i("code"),Fo=n("huggingface_hub.PyTorchModelHubMixin"),Ko=n(" for an example."),Wo=c(),S=i("div"),w(oe.$$.fragment),Uo=c(),q=i("p"),jo=n(`Instantiate a pretrained PyTorch model from a pre-trained model
configuration from huggingface-hub. The model is set in
evaluation mode by default using `),Oe=i("code"),Vo=n("model.eval()"),Ro=n(` (Dropout modules
are deactivated). To train the model, you should first set it
back in training mode with `),De=i("code"),Bo=n("model.train()"),Go=n("."),Yo=c(),w(j.$$.fragment),Jo=c(),V=i("div"),w(te.$$.fragment),Qo=c(),ne=i("p"),Xo=n(`Upload model checkpoint or tokenizer files to the Hub while
synchronizing a local clone of the repo in `),Pe=i("code"),Zo=n("repo_path_or_name"),et=n("."),ot=c(),R=i("div"),w(ae.$$.fragment),tt=c(),Ne=i("p"),nt=n("Save weights in local directory."),lo=c(),L=i("h3"),B=i("a"),Se=i("span"),w(ie.$$.fragment),at=c(),Ae=i("span"),it=n("Keras"),co=c(),D=i("div"),w(re.$$.fragment),rt=c(),Ce=i("p"),st=n("Instantiate a pretrained Keras model from a pre-trained model from the Hub.\nThe model is expected to be in SavedModel format.```"),lt=c(),w(G.$$.fragment),ho=c(),F=i("div"),w(se.$$.fragment),dt=c(),le=i("p"),ct=n(`Upload model checkpoint or tokenizer files to the Hub while synchronizing a
local clone of the repo in `),Ie=i("em"),ht=n("repo_path_or_name"),gt=n("."),go=c(),P=i("div"),w(de.$$.fragment),mt=c(),qe=i("p"),ut=n("Saves a Keras model to save_directory in SavedModel format. Use this if you\u2019re using the Functional or Sequential APIs."),pt=c(),l=i("p"),_t=n(`model:
The Keras model you\u2019d like to save. The model must be compiled and built.
save_directory (`),Le=i("code"),ft=n("str"),bt=n(`):
Specify directory in which you want to save the Keras model.
config (`),Fe=i("code"),vt=n("dict"),yt=n(", "),Ke=i("em"),wt=n("optional"),kt=n(`):
Configuration object to be saved alongside the model weights.
include_optimizer(`),We=i("code"),xt=n("bool"),$t=n(", "),Ue=i("em"),Mt=n("optional"),Et=n(`):
Whether or not to include optimizer in serialization.
tags (`),je=i("code"),Tt=n("dict"),zt=n(", "),Ve=i("em"),Ht=n("optional"),Ot=n(`):
List of tags that are related to model or string of a single tag. See example tags at `),ce=i("a"),Dt=n("https://github.com/huggingface/hub-docs/blame/main/modelcard.md"),Pt=n(`.
task_name (`),Re=i("code"),Nt=n("str"),St=n(", "),Be=i("em"),At=n("optional"),Ct=n(`):
Name of the task the model was trained on. See the available tasks at `),he=i("a"),It=n("https://github.com/huggingface/huggingface_hub/blob/main/js/src/lib/interfaces/Types.ts"),qt=n(`.
plot_model (`),Ge=i("code"),Lt=n("bool"),Ft=n(`):
Setting this to `),Ye=i("em"),Kt=n("True"),Wt=n(` will plot the model and put it in the model card. Requires graphviz and pydot to be installed.
model_save_kwargs(`),Je=i("code"),Ut=n("dict"),jt=n(", "),Qe=i("em"),Vt=n("optional"),Rt=n(`):
model_save_kwargs will be passed to tf.keras.models.save_model().`),mo=c(),N=i("div"),w(ge.$$.fragment),Bt=c(),Xe=i("p"),Gt=n(`Mixin to provide model Hub upload/download capabilities to Keras models.
Override this class to obtain the following internal methods:`),Yt=c(),me=i("ul"),_e=i("li"),Ze=i("code"),Jt=n("_from_pretrained"),Qt=n(", to load a model from the Hub or from local files."),Xt=c(),Y=i("li"),eo=i("code"),Zt=n("_save_pretrained"),en=n(", to save a model in the "),oo=i("code"),on=n("SavedModel"),tn=n(" format."),this.h()},l(o){const m=Jn('[data-svelte="svelte-1phssyn"]',document.head);u=r(m,"META",{name:!0,content:!0}),m.forEach(t),z=h(o),_=r(o,"H1",{class:!0});var ue=s(_);v=r(ue,"A",{id:!0,class:!0,href:!0});var to=s(v);T=r(to,"SPAN",{});var an=s(T);k(f.$$.fragment,an),an.forEach(t),to.forEach(t),b=h(ue),H=r(ue,"SPAN",{});var rn=s(H);Eo=a(rn,"Mixins & serialization methods"),rn.forEach(t),ue.forEach(t),ao=h(o),C=r(o,"H2",{class:!0});var po=s(C);K=r(po,"A",{id:!0,class:!0,href:!0});var sn=s(K);ke=r(sn,"SPAN",{});var ln=s(ke);k(X.$$.fragment,ln),ln.forEach(t),sn.forEach(t),To=h(po),xe=r(po,"SPAN",{});var dn=s(xe);zo=a(dn,"Mixins"),dn.forEach(t),po.forEach(t),io=h(o),W=r(o,"P",{});var _o=s(W);Ho=a(_o,"The "),$e=r(_o,"CODE",{});var cn=s($e);Oo=a(cn,"huggingface_hub"),cn.forEach(t),Do=a(_o,` library offers a range of mixins that can be used as a parent class for your
objects, in order to provide simple uploading and downloading functions.`),_o.forEach(t),ro=h(o),I=r(o,"H3",{class:!0});var fo=s(I);U=r(fo,"A",{id:!0,class:!0,href:!0});var hn=s(U);Me=r(hn,"SPAN",{});var gn=s(Me);k(Z.$$.fragment,gn),gn.forEach(t),hn.forEach(t),Po=h(fo),Ee=r(fo,"SPAN",{});var mn=s(Ee);No=a(mn,"PyTorch"),mn.forEach(t),fo.forEach(t),so=h(o),y=r(o,"DIV",{class:!0});var A=s(y);k(ee.$$.fragment,A),So=h(A),O=r(A,"P",{});var J=s(O);Ao=a(J,`A Generic Base Model Hub Mixin. Define your own mixin for anything by
inheriting from this class and overwriting `),Te=r(J,"CODE",{});var un=s(Te);Co=a(un,"_from_pretrained"),un.forEach(t),Io=a(J,` and
`),ze=r(J,"CODE",{});var pn=s(ze);qo=a(pn,"_save_pretrained"),pn.forEach(t),Lo=a(J,` to define custom logic for saving/loading your classes.
See `),He=r(J,"CODE",{});var _n=s(He);Fo=a(_n,"huggingface_hub.PyTorchModelHubMixin"),_n.forEach(t),Ko=a(J," for an example."),J.forEach(t),Wo=h(A),S=r(A,"DIV",{class:!0});var fe=s(S);k(oe.$$.fragment,fe),Uo=h(fe),q=r(fe,"P",{});var be=s(q);jo=a(be,`Instantiate a pretrained PyTorch model from a pre-trained model
configuration from huggingface-hub. The model is set in
evaluation mode by default using `),Oe=r(be,"CODE",{});var fn=s(Oe);Vo=a(fn,"model.eval()"),fn.forEach(t),Ro=a(be,` (Dropout modules
are deactivated). To train the model, you should first set it
back in training mode with `),De=r(be,"CODE",{});var bn=s(De);Bo=a(bn,"model.train()"),bn.forEach(t),Go=a(be,"."),be.forEach(t),Yo=h(fe),k(j.$$.fragment,fe),fe.forEach(t),Jo=h(A),V=r(A,"DIV",{class:!0});var bo=s(V);k(te.$$.fragment,bo),Qo=h(bo),ne=r(bo,"P",{});var vo=s(ne);Xo=a(vo,`Upload model checkpoint or tokenizer files to the Hub while
synchronizing a local clone of the repo in `),Pe=r(vo,"CODE",{});var vn=s(Pe);Zo=a(vn,"repo_path_or_name"),vn.forEach(t),et=a(vo,"."),vo.forEach(t),bo.forEach(t),ot=h(A),R=r(A,"DIV",{class:!0});var yo=s(R);k(ae.$$.fragment,yo),tt=h(yo),Ne=r(yo,"P",{});var yn=s(Ne);nt=a(yn,"Save weights in local directory."),yn.forEach(t),yo.forEach(t),A.forEach(t),lo=h(o),L=r(o,"H3",{class:!0});var wo=s(L);B=r(wo,"A",{id:!0,class:!0,href:!0});var wn=s(B);Se=r(wn,"SPAN",{});var kn=s(Se);k(ie.$$.fragment,kn),kn.forEach(t),wn.forEach(t),at=h(wo),Ae=r(wo,"SPAN",{});var xn=s(Ae);it=a(xn,"Keras"),xn.forEach(t),wo.forEach(t),co=h(o),D=r(o,"DIV",{class:!0});var ve=s(D);k(re.$$.fragment,ve),rt=h(ve),Ce=r(ve,"P",{});var $n=s(Ce);st=a($n,"Instantiate a pretrained Keras model from a pre-trained model from the Hub.\nThe model is expected to be in SavedModel format.```"),$n.forEach(t),lt=h(ve),k(G.$$.fragment,ve),ve.forEach(t),ho=h(o),F=r(o,"DIV",{class:!0});var ko=s(F);k(se.$$.fragment,ko),dt=h(ko),le=r(ko,"P",{});var xo=s(le);ct=a(xo,`Upload model checkpoint or tokenizer files to the Hub while synchronizing a
local clone of the repo in `),Ie=r(xo,"EM",{});var Mn=s(Ie);ht=a(Mn,"repo_path_or_name"),Mn.forEach(t),gt=a(xo,"."),xo.forEach(t),ko.forEach(t),go=h(o),P=r(o,"DIV",{class:!0});var ye=s(P);k(de.$$.fragment,ye),mt=h(ye),qe=r(ye,"P",{});var En=s(qe);ut=a(En,"Saves a Keras model to save_directory in SavedModel format. Use this if you\u2019re using the Functional or Sequential APIs."),En.forEach(t),pt=h(ye),l=r(ye,"P",{});var d=s(l);_t=a(d,`model:
The Keras model you\u2019d like to save. The model must be compiled and built.
save_directory (`),Le=r(d,"CODE",{});var Tn=s(Le);ft=a(Tn,"str"),Tn.forEach(t),bt=a(d,`):
Specify directory in which you want to save the Keras model.
config (`),Fe=r(d,"CODE",{});var zn=s(Fe);vt=a(zn,"dict"),zn.forEach(t),yt=a(d,", "),Ke=r(d,"EM",{});var Hn=s(Ke);wt=a(Hn,"optional"),Hn.forEach(t),kt=a(d,`):
Configuration object to be saved alongside the model weights.
include_optimizer(`),We=r(d,"CODE",{});var On=s(We);xt=a(On,"bool"),On.forEach(t),$t=a(d,", "),Ue=r(d,"EM",{});var Dn=s(Ue);Mt=a(Dn,"optional"),Dn.forEach(t),Et=a(d,`):
Whether or not to include optimizer in serialization.
tags (`),je=r(d,"CODE",{});var Pn=s(je);Tt=a(Pn,"dict"),Pn.forEach(t),zt=a(d,", "),Ve=r(d,"EM",{});var Nn=s(Ve);Ht=a(Nn,"optional"),Nn.forEach(t),Ot=a(d,`):
List of tags that are related to model or string of a single tag. See example tags at `),ce=r(d,"A",{href:!0,rel:!0});var Sn=s(ce);Dt=a(Sn,"https://github.com/huggingface/hub-docs/blame/main/modelcard.md"),Sn.forEach(t),Pt=a(d,`.
task_name (`),Re=r(d,"CODE",{});var An=s(Re);Nt=a(An,"str"),An.forEach(t),St=a(d,", "),Be=r(d,"EM",{});var Cn=s(Be);At=a(Cn,"optional"),Cn.forEach(t),Ct=a(d,`):
Name of the task the model was trained on. See the available tasks at `),he=r(d,"A",{href:!0,rel:!0});var In=s(he);It=a(In,"https://github.com/huggingface/huggingface_hub/blob/main/js/src/lib/interfaces/Types.ts"),In.forEach(t),qt=a(d,`.
plot_model (`),Ge=r(d,"CODE",{});var qn=s(Ge);Lt=a(qn,"bool"),qn.forEach(t),Ft=a(d,`):
Setting this to `),Ye=r(d,"EM",{});var Ln=s(Ye);Kt=a(Ln,"True"),Ln.forEach(t),Wt=a(d,` will plot the model and put it in the model card. Requires graphviz and pydot to be installed.
model_save_kwargs(`),Je=r(d,"CODE",{});var Fn=s(Je);Ut=a(Fn,"dict"),Fn.forEach(t),jt=a(d,", "),Qe=r(d,"EM",{});var Kn=s(Qe);Vt=a(Kn,"optional"),Kn.forEach(t),Rt=a(d,`):
model_save_kwargs will be passed to tf.keras.models.save_model().`),d.forEach(t),ye.forEach(t),mo=h(o),N=r(o,"DIV",{class:!0});var we=s(N);k(ge.$$.fragment,we),Bt=h(we),Xe=r(we,"P",{});var Wn=s(Xe);Gt=a(Wn,`Mixin to provide model Hub upload/download capabilities to Keras models.
Override this class to obtain the following internal methods:`),Wn.forEach(t),Yt=h(we),me=r(we,"UL",{});var $o=s(me);_e=r($o,"LI",{});var nn=s(_e);Ze=r(nn,"CODE",{});var Un=s(Ze);Jt=a(Un,"_from_pretrained"),Un.forEach(t),Qt=a(nn,", to load a model from the Hub or from local files."),nn.forEach(t),Xt=h($o),Y=r($o,"LI",{});var no=s(Y);eo=r(no,"CODE",{});var jn=s(eo);Zt=a(jn,"_save_pretrained"),jn.forEach(t),en=a(no,", to save a model in the "),oo=r(no,"CODE",{});var Vn=s(oo);on=a(Vn,"SavedModel"),Vn.forEach(t),tn=a(no," format."),no.forEach(t),$o.forEach(t),we.forEach(t),this.h()},h(){g(u,"name","hf:doc:metadata"),g(u,"content",JSON.stringify(oa)),g(v,"id","mixins-serialization-methods"),g(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(v,"href","#mixins-serialization-methods"),g(_,"class","relative group"),g(K,"id","mixins"),g(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(K,"href","#mixins"),g(C,"class","relative group"),g(U,"id","huggingface_hub.ModelHubMixin"),g(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(U,"href","#huggingface_hub.ModelHubMixin"),g(I,"class","relative group"),g(S,"class","docstring"),g(V,"class","docstring"),g(R,"class","docstring"),g(y,"class","docstring"),g(B,"id","huggingface_hub.from_pretrained_keras"),g(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(B,"href","#huggingface_hub.from_pretrained_keras"),g(L,"class","relative group"),g(D,"class","docstring"),g(F,"class","docstring"),g(ce,"href","https://github.com/huggingface/hub-docs/blame/main/modelcard.md"),g(ce,"rel","nofollow"),g(he,"href","https://github.com/huggingface/huggingface_hub/blob/main/js/src/lib/interfaces/Types.ts"),g(he,"rel","nofollow"),g(P,"class","docstring"),g(N,"class","docstring")},m(o,m){e(document.head,u),p(o,z,m),p(o,_,m),e(_,v),e(v,T),x(f,T,null),e(_,b),e(_,H),e(H,Eo),p(o,ao,m),p(o,C,m),e(C,K),e(K,ke),x(X,ke,null),e(C,To),e(C,xe),e(xe,zo),p(o,io,m),p(o,W,m),e(W,Ho),e(W,$e),e($e,Oo),e(W,Do),p(o,ro,m),p(o,I,m),e(I,U),e(U,Me),x(Z,Me,null),e(I,Po),e(I,Ee),e(Ee,No),p(o,so,m),p(o,y,m),x(ee,y,null),e(y,So),e(y,O),e(O,Ao),e(O,Te),e(Te,Co),e(O,Io),e(O,ze),e(ze,qo),e(O,Lo),e(O,He),e(He,Fo),e(O,Ko),e(y,Wo),e(y,S),x(oe,S,null),e(S,Uo),e(S,q),e(q,jo),e(q,Oe),e(Oe,Vo),e(q,Ro),e(q,De),e(De,Bo),e(q,Go),e(S,Yo),x(j,S,null),e(y,Jo),e(y,V),x(te,V,null),e(V,Qo),e(V,ne),e(ne,Xo),e(ne,Pe),e(Pe,Zo),e(ne,et),e(y,ot),e(y,R),x(ae,R,null),e(R,tt),e(R,Ne),e(Ne,nt),p(o,lo,m),p(o,L,m),e(L,B),e(B,Se),x(ie,Se,null),e(L,at),e(L,Ae),e(Ae,it),p(o,co,m),p(o,D,m),x(re,D,null),e(D,rt),e(D,Ce),e(Ce,st),e(D,lt),x(G,D,null),p(o,ho,m),p(o,F,m),x(se,F,null),e(F,dt),e(F,le),e(le,ct),e(le,Ie),e(Ie,ht),e(le,gt),p(o,go,m),p(o,P,m),x(de,P,null),e(P,mt),e(P,qe),e(qe,ut),e(P,pt),e(P,l),e(l,_t),e(l,Le),e(Le,ft),e(l,bt),e(l,Fe),e(Fe,vt),e(l,yt),e(l,Ke),e(Ke,wt),e(l,kt),e(l,We),e(We,xt),e(l,$t),e(l,Ue),e(Ue,Mt),e(l,Et),e(l,je),e(je,Tt),e(l,zt),e(l,Ve),e(Ve,Ht),e(l,Ot),e(l,ce),e(ce,Dt),e(l,Pt),e(l,Re),e(Re,Nt),e(l,St),e(l,Be),e(Be,At),e(l,Ct),e(l,he),e(he,It),e(l,qt),e(l,Ge),e(Ge,Lt),e(l,Ft),e(l,Ye),e(Ye,Kt),e(l,Wt),e(l,Je),e(Je,Ut),e(l,jt),e(l,Qe),e(Qe,Vt),e(l,Rt),p(o,mo,m),p(o,N,m),x(ge,N,null),e(N,Bt),e(N,Xe),e(Xe,Gt),e(N,Yt),e(N,me),e(me,_e),e(_e,Ze),e(Ze,Jt),e(_e,Qt),e(me,Xt),e(me,Y),e(Y,eo),e(eo,Zt),e(Y,en),e(Y,oo),e(oo,on),e(Y,tn),uo=!0},p(o,[m]){const ue={};m&2&&(ue.$$scope={dirty:m,ctx:o}),j.$set(ue);const to={};m&2&&(to.$$scope={dirty:m,ctx:o}),G.$set(to)},i(o){uo||($(f.$$.fragment,o),$(X.$$.fragment,o),$(Z.$$.fragment,o),$(ee.$$.fragment,o),$(oe.$$.fragment,o),$(j.$$.fragment,o),$(te.$$.fragment,o),$(ae.$$.fragment,o),$(ie.$$.fragment,o),$(re.$$.fragment,o),$(G.$$.fragment,o),$(se.$$.fragment,o),$(de.$$.fragment,o),$(ge.$$.fragment,o),uo=!0)},o(o){M(f.$$.fragment,o),M(X.$$.fragment,o),M(Z.$$.fragment,o),M(ee.$$.fragment,o),M(oe.$$.fragment,o),M(j.$$.fragment,o),M(te.$$.fragment,o),M(ae.$$.fragment,o),M(ie.$$.fragment,o),M(re.$$.fragment,o),M(G.$$.fragment,o),M(se.$$.fragment,o),M(de.$$.fragment,o),M(ge.$$.fragment,o),uo=!1},d(o){t(u),o&&t(z),o&&t(_),E(f),o&&t(ao),o&&t(C),E(X),o&&t(io),o&&t(W),o&&t(ro),o&&t(I),E(Z),o&&t(so),o&&t(y),E(ee),E(oe),E(j),E(te),E(ae),o&&t(lo),o&&t(L),E(ie),o&&t(co),o&&t(D),E(re),E(G),o&&t(ho),o&&t(F),E(se),o&&t(go),o&&t(P),E(de),o&&t(mo),o&&t(N),E(ge)}}}const oa={local:"mixins-serialization-methods",sections:[{local:"mixins",sections:[{local:"huggingface_hub.ModelHubMixin",title:"PyTorch"},{local:"huggingface_hub.from_pretrained_keras",title:"Keras"}],title:"Mixins"}],title:"Mixins & serialization methods"};function ta(pe){return Qn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sa extends Bn{constructor(u){super();Gn(this,u,ta,ea,Yn,{})}}export{sa as default,oa as metadata};
