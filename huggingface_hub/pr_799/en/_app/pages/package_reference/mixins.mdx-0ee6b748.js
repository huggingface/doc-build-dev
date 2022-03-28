import{S as cn,i as ln,s as hn,e as t,k as l,w as y,t as r,M as gn,c as a,d as n,m as h,a as i,x as w,h as s,b as g,F as o,g as p,y as k,q as x,o as $,B as M,v as un}from"../../chunks/vendor-7b1da053.js";import{T as dn}from"../../chunks/Tip-41a95816.js";import{D as re}from"../../chunks/Docstring-f1352b16.js";import{I as Ye}from"../../chunks/IconCopyLink-d24e9a6f.js";function pn(se){let d,T,u,f,v;return{c(){d=t("p"),T=r("Passing "),u=t("code"),f=r("use_auth_token=True"),v=r(` is required when you want to use a private
model.`)},l(m){d=a(m,"P",{});var _=i(d);T=s(_,"Passing "),u=a(_,"CODE",{});var z=i(u);f=s(z,"use_auth_token=True"),z.forEach(n),v=s(_,` is required when you want to use a private
model.`),_.forEach(n)},m(m,_){p(m,d,_),o(d,T),o(d,u),o(u,f),o(d,v)},d(m){m&&n(d)}}}function mn(se){let d,T,u,f,v;return{c(){d=t("p"),T=r("Passing "),u=t("code"),f=r("use_auth_token=True"),v=r(` is required when you want to use a private
model.`)},l(m){d=a(m,"P",{});var _=i(d);T=s(_,"Passing "),u=a(_,"CODE",{});var z=i(u);f=s(z,"use_auth_token=True"),z.forEach(n),v=s(_,` is required when you want to use a private
model.`),_.forEach(n)},m(m,_){p(m,d,_),o(d,T),o(d,u),o(u,f),o(d,v)},d(m){m&&n(d)}}}function _n(se){let d,T,u,f,v,m,_,z,Je,He,D,q,ge,B,Qe,ue,Xe,Pe,F,Ze,pe,eo,oo,De,N,W,me,R,no,_e,to,Ne,b,G,ao,Y,io,fe,ro,so,co,H,J,lo,O,ho,be,go,uo,ve,po,mo,_o,L,fo,U,Q,bo,X,vo,ye,yo,wo,ko,K,Z,xo,we,$o,Oe,A,V,ke,ee,Mo,xe,To,Ae,E,oe,zo,S,Eo,$e,Ho,Po,Me,Do,No,Oo,j,Se,I,ne,Ao,te,So,Te,Io,Co,Ie,C,ae,qo,ze,Fo,Ce;return m=new Ye({}),B=new Ye({}),R=new Ye({}),G=new re({props:{name:"class huggingface_hub.ModelHubMixin",anchor:"huggingface_hub.ModelHubMixin",parameters:[],source:"https://github.com/huggingface/huggingface_hub/blob/pr_799/src/huggingface_hub/hub_mixin.py#L22"}}),J=new re({props:{name:"from_pretrained",anchor:"huggingface_hub.ModelHubMixin.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": str"},{name:"force_download",val:": bool = False"},{name:"resume_download",val:": bool = False"},{name:"proxies",val:": typing.Dict = None"},{name:"use_auth_token",val:": typing.Optional[str] = None"},{name:"cache_dir",val:": typing.Optional[str] = None"},{name:"local_files_only",val:": bool = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_799/src/huggingface_hub/hub_mixin.py#L72",parametersDescription:[{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Can be either:<ul>
<li>A string, the <code>model id</code> of a pretrained model hosted
inside a model repo on huggingface.co. Valid model ids can
be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like
<code>dbmdz/bert-base-german-cased</code>.</li>
<li>You can add <code>revision</code> by appending <code>@</code> at the end of
model_id simply like this:
<code>dbmdz/bert-base-german-cased@main</code> Revision is the
specific model version to use. It can be a branch name, a
tag name, or a commit id, since we use a git-based system
for storing models and other artifacts on huggingface.co,
so <code>revision</code> can be any identifier allowed by git.</li>
<li>A path to a <code>directory</code> containing model weights saved
using <code>save_pretrained</code>,
e.g., <code>./my_model_directory/</code>.</li>
<li><code>None</code> if you are both providing the configuration and
state dictionary (resp. with keyword arguments <code>config</code>
and <code>state_dict</code>).</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to force the (re-)download of the model weights and
configuration files, overriding the cached versions if they
exist.`,name:"force_download"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to delete incompletely received files. Will attempt to
resume the download if such a file exists.`,name:"resume_download"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint,
e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}</code>. The proxies are used on each request.`,name:"proxies"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <code>bool</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files.
If <code>True</code>, will use the token generated when running
<code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.cache_dir",description:`<strong>cache_dir</strong> (<code>Union[str, os.PathLike]</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained model
configuration should be cached if the standard cache should not
be used.`,name:"cache_dir"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.local_files_only(bool,",description:`<strong>local_files_only(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to only look at local files (i.e., do not try to
download the model).`,name:"local_files_only(bool,"},{anchor:"huggingface_hub.ModelHubMixin.from_pretrained.model_kwargs",description:`<strong>model_kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
model_kwargs will be passed to the model during initialization`,name:"model_kwargs"}]}}),L=new dn({props:{$$slots:{default:[pn]},$$scope:{ctx:se}}}),Q=new re({props:{name:"push_to_hub",anchor:"huggingface_hub.ModelHubMixin.push_to_hub",parameters:[{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = 'Add model'"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"api_endpoint",val:": typing.Optional[str] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"},{name:"git_user",val:": typing.Optional[str] = None"},{name:"git_email",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[dict] = None"}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_799/src/huggingface_hub/hub_mixin.py#L204",parametersDescription:[{anchor:"huggingface_hub.ModelHubMixin.push_to_hub.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
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
`}}),Z=new re({props:{name:"save_pretrained",anchor:"huggingface_hub.ModelHubMixin.save_pretrained",parameters:[{name:"save_directory",val:": str"},{name:"config",val:": typing.Optional[dict] = None"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_799/src/huggingface_hub/hub_mixin.py#L30",parametersDescription:[{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code>) &#x2014;
Specify directory in which you want to save weights.`,name:"save_directory"},{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
specify config (must be dict) in case you want to save it.`,name:"config"},{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set it to <code>True</code> in case you want to push your weights to
huggingface_hub`,name:"push_to_hub"},{anchor:"huggingface_hub.ModelHubMixin.save_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
kwargs will be passed to <code>push_to_hub</code>`,name:"kwargs"}]}}),ee=new Ye({}),oe=new re({props:{name:"huggingface_hub.from_pretrained_keras",anchor:"huggingface_hub.from_pretrained_keras",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_799/src/huggingface_hub/keras_mixin.py#L208",parametersDescription:[{anchor:"huggingface_hub.from_pretrained_keras.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
model_kwargs will be passed to the model during initialization`,name:"model_kwargs"}]}}),j=new dn({props:{$$slots:{default:[mn]},$$scope:{ctx:se}}}),ne=new re({props:{name:"huggingface_hub.push_to_hub_keras",anchor:"huggingface_hub.push_to_hub_keras",parameters:[{name:"model",val:""},{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"log_dir",val:": typing.Optional[str] = None"},{name:"commit_message",val:": typing.Optional[str] = 'Add model'"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"api_endpoint",val:": typing.Optional[str] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = True"},{name:"git_user",val:": typing.Optional[str] = None"},{name:"git_email",val:": typing.Optional[str] = None"},{name:"config",val:": typing.Optional[dict] = None"},{name:"include_optimizer",val:": typing.Optional[bool] = False"},{name:"task_name",val:": typing.Optional[str] = None"},{name:"plot_model",val:": typing.Optional[bool] = True"},{name:"**model_save_kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_799/src/huggingface_hub/keras_mixin.py#L269",parametersDescription:[{anchor:"huggingface_hub.push_to_hub_keras.model",description:`<strong>model</strong> (<code>Keras.Model</code>) &#x2014;
The <a href="%60https://www.tensorflow.org/api_docs/python/tf/keras/Model%60">Keras
model</a>
you&#x2019;d like to push to the hub. The model must be compiled and built.`,name:"model"},{anchor:"huggingface_hub.push_to_hub_keras.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Can either be a repository name for your model or tokenizer in the
Hub or a path to a local folder (in which case the repository will
have the name of that local folder). If not specified, will default
to the name given by <code>repo_url</code> and a local directory with that name
will be created.`,name:"repo_path_or_name"},{anchor:"huggingface_hub.push_to_hub_keras.repo_url",description:`<strong>repo_url</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Specify this in case you want to push to an existing repository in
the hub. If unspecified, a new repository will be created in your
namespace (unless you specify an <code>organization</code>) with <code>repo_name</code>.`,name:"repo_url"},{anchor:"huggingface_hub.push_to_hub_keras.log_dir",description:`<strong>log_dir</strong> (<code>str</code>, <em>optional</em>) &#x2014;
TensorBoard logging directory to be pushed. The Hub automatically
hosts and displays a TensorBoard instance if log files are included
in the repository.`,name:"log_dir"},{anchor:"huggingface_hub.push_to_hub_keras.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>, defaults to &#x201C;Add message&#x201D;) &#x2014;
Message to commit while pushing.`,name:"commit_message"},{anchor:"huggingface_hub.push_to_hub_keras.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Organization in which you want to push your model or tokenizer (you
must be a member of this organization).`,name:"organization"},{anchor:"huggingface_hub.push_to_hub_keras.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether the repository created should be private.`,name:"private"},{anchor:"huggingface_hub.push_to_hub_keras.api_endpoint",description:`<strong>api_endpoint</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The API endpoint to use when pushing the model to the hub.`,name:"api_endpoint"},{anchor:"huggingface_hub.push_to_hub_keras.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If
<code>True</code>, will use the token generated when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>). Will default to <code>True</code>.`,name:"use_auth_token"},{anchor:"huggingface_hub.push_to_hub_keras.git_user",description:`<strong>git_user</strong> (<code>str</code>, <em>optional</em>) &#x2014;
will override the <code>git config user.name</code> for committing and pushing
files to the hub.`,name:"git_user"},{anchor:"huggingface_hub.push_to_hub_keras.git_email",description:`<strong>git_email</strong> (<code>str</code>, <em>optional</em>) &#x2014;
will override the <code>git config user.email</code> for committing and pushing
files to the hub.`,name:"git_email"},{anchor:"huggingface_hub.push_to_hub_keras.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Configuration object to be saved alongside the model weights.`,name:"config"},{anchor:"huggingface_hub.push_to_hub_keras.include_optimizer",description:`<strong>include_optimizer</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to include optimizer during serialization.`,name:"include_optimizer"},{anchor:"huggingface_hub.push_to_hub_keras.task_name",description:`<strong>task_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Name of the task the model was trained on. Available tasks
<a href="https://github.com/huggingface/huggingface_hub/blob/main/js/src/lib/interfaces/Types.ts" rel="nofollow">here</a>.`,name:"task_name"},{anchor:"huggingface_hub.push_to_hub_keras.plot_model",description:`<strong>plot_model</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Setting this to <code>True</code> will plot the model and put it in the model
card. Requires graphviz and pydot to be installed.`,name:"plot_model"},{anchor:"huggingface_hub.push_to_hub_keras.model_save_kwargs(dict,",description:`<strong>model_save_kwargs(<code>dict</code>,</strong> <em>optional</em>) &#x2014;
model_save_kwargs will be passed to
<a href="https://www.tensorflow.org/api_docs/python/tf/keras/models/save_model" rel="nofollow"><code>tf.keras.models.save_model()</code></a>.`,name:"model_save_kwargs(dict,"}],returnDescription:`
<p>The url of the commit of your model in the given repository.</p>
`}}),ae=new re({props:{name:"huggingface_hub.save_pretrained_keras",anchor:"huggingface_hub.save_pretrained_keras",parameters:[{name:"model",val:""},{name:"save_directory",val:": str"},{name:"config",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"include_optimizer",val:": typing.Optional[bool] = False"},{name:"plot_model",val:": typing.Optional[bool] = True"},{name:"task_name",val:": typing.Optional[str] = None"},{name:"**model_save_kwargs",val:""}],source:"https://github.com/huggingface/huggingface_hub/blob/pr_799/src/huggingface_hub/keras_mixin.py#L146",parametersDescription:[{anchor:"huggingface_hub.save_pretrained_keras.model",description:`<strong>model</strong> (<code>Keras.Model</code>) &#x2014;
The <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">Keras
model</a>
you&#x2019;d like to save. The model must be compiled and built.`,name:"model"},{anchor:"huggingface_hub.save_pretrained_keras.save_directory",description:`<strong>save_directory</strong> (<code>str</code>) &#x2014;
Specify directory in which you want to save the Keras model.`,name:"save_directory"},{anchor:"huggingface_hub.save_pretrained_keras.config",description:`<strong>config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Configuration object to be saved alongside the model weights.`,name:"config"},{anchor:"huggingface_hub.save_pretrained_keras.include_optimizer(bool,",description:`<strong>include_optimizer(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to include optimizer in serialization.`,name:"include_optimizer(bool,"},{anchor:"huggingface_hub.save_pretrained_keras.plot_model",description:`<strong>plot_model</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Setting this to <code>True</code> will plot the model and put it in the model
card. Requires graphviz and pydot to be installed.`,name:"plot_model"},{anchor:"huggingface_hub.save_pretrained_keras.task_name",description:`<strong>task_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Name of the task the model was trained on. Available tasks
<a href="https://github.com/huggingface/hub-docs/blob/main/js/src/lib/interfaces/Types.ts" rel="nofollow">here</a>.`,name:"task_name"},{anchor:"huggingface_hub.save_pretrained_keras.model_save_kwargs(dict,",description:`<strong>model_save_kwargs(<code>dict</code>,</strong> <em>optional</em>) &#x2014;
model_save_kwargs will be passed to
<a href="https://www.tensorflow.org/api_docs/python/tf/keras/models/save_model" rel="nofollow"><code>tf.keras.models.save_model()</code></a>.`,name:"model_save_kwargs(dict,"}]}}),{c(){d=t("meta"),T=l(),u=t("h1"),f=t("a"),v=t("span"),y(m.$$.fragment),_=l(),z=t("span"),Je=r("Mixins & serialization methods"),He=l(),D=t("h2"),q=t("a"),ge=t("span"),y(B.$$.fragment),Qe=l(),ue=t("span"),Xe=r("Mixins"),Pe=l(),F=t("p"),Ze=r("The "),pe=t("code"),eo=r("huggingface_hub"),oo=r(` library offers a range of mixins that can be used as a parent class for your
objects, in order to provide simple uploading and downloading functions.`),De=l(),N=t("h3"),W=t("a"),me=t("span"),y(R.$$.fragment),no=l(),_e=t("span"),to=r("PyTorch"),Ne=l(),b=t("div"),y(G.$$.fragment),ao=l(),Y=t("p"),io=r(`A Generic Base Model Hub Mixin. Define your own mixin for anything by
inheriting from this class and overwriting _from_pretrained and
_save_pretrained to define custom logic for saving/loading your classes. See
`),fe=t("code"),ro=r("huggingface_hub.PyTorchModelHubMixin"),so=r(" for an example."),co=l(),H=t("div"),y(J.$$.fragment),lo=l(),O=t("p"),ho=r(`Instantiate a pretrained pytorch model from a pre-trained model
configuration from huggingface-hub. The model is set in evaluation mode
by default using `),be=t("code"),go=r("model.eval()"),uo=r(` (Dropout modules are deactivated). To
train the model, you should first set it back in training mode with
`),ve=t("code"),po=r("model.train()"),mo=r("."),_o=l(),y(L.$$.fragment),fo=l(),U=t("div"),y(Q.$$.fragment),bo=l(),X=t("p"),vo=r(`Upload model checkpoint or tokenizer files to the \u{1F917} Model Hub while
synchronizing a local clone of the repo in `),ye=t("code"),yo=r("repo_path_or_name"),wo=r("."),ko=l(),K=t("div"),y(Z.$$.fragment),xo=l(),we=t("p"),$o=r("Saving weights in local directory."),Oe=l(),A=t("h3"),V=t("a"),ke=t("span"),y(ee.$$.fragment),Mo=l(),xe=t("span"),To=r("Keras"),Ae=l(),E=t("div"),y(oe.$$.fragment),zo=l(),S=t("p"),Eo=r(`Instantiate a pretrained pytorch model from a pre-trained model
configuration from huggingface-hub. The model is set in evaluation mode by
default using `),$e=t("code"),Ho=r("model.eval()"),Po=r(` (Dropout modules are deactivated). To train the
model, you should first set it back in training mode with `),Me=t("code"),Do=r("model.train()"),No=r("."),Oo=l(),y(j.$$.fragment),Se=l(),I=t("div"),y(ne.$$.fragment),Ao=l(),te=t("p"),So=r(`Upload model checkpoint or tokenizer files to the \u{1F917} Model Hub while
synchronizing a local clone of the repo in `),Te=t("code"),Io=r("repo_path_or_name"),Co=r("."),Ie=l(),C=t("div"),y(ae.$$.fragment),qo=l(),ze=t("p"),Fo=r(`Saves a Keras model to save_directory in SavedModel format. Use this if
you\u2019re using the Functional or Sequential APIs.`),this.h()},l(e){const c=gn('[data-svelte="svelte-1phssyn"]',document.head);d=a(c,"META",{name:!0,content:!0}),c.forEach(n),T=h(e),u=a(e,"H1",{class:!0});var ie=i(u);f=a(ie,"A",{id:!0,class:!0,href:!0});var Ee=i(f);v=a(Ee,"SPAN",{});var Wo=i(v);w(m.$$.fragment,Wo),Wo.forEach(n),Ee.forEach(n),_=h(ie),z=a(ie,"SPAN",{});var Lo=i(z);Je=s(Lo,"Mixins & serialization methods"),Lo.forEach(n),ie.forEach(n),He=h(e),D=a(e,"H2",{class:!0});var qe=i(D);q=a(qe,"A",{id:!0,class:!0,href:!0});var Uo=i(q);ge=a(Uo,"SPAN",{});var Ko=i(ge);w(B.$$.fragment,Ko),Ko.forEach(n),Uo.forEach(n),Qe=h(qe),ue=a(qe,"SPAN",{});var Vo=i(ue);Xe=s(Vo,"Mixins"),Vo.forEach(n),qe.forEach(n),Pe=h(e),F=a(e,"P",{});var Fe=i(F);Ze=s(Fe,"The "),pe=a(Fe,"CODE",{});var jo=i(pe);eo=s(jo,"huggingface_hub"),jo.forEach(n),oo=s(Fe,` library offers a range of mixins that can be used as a parent class for your
objects, in order to provide simple uploading and downloading functions.`),Fe.forEach(n),De=h(e),N=a(e,"H3",{class:!0});var We=i(N);W=a(We,"A",{id:!0,class:!0,href:!0});var Bo=i(W);me=a(Bo,"SPAN",{});var Ro=i(me);w(R.$$.fragment,Ro),Ro.forEach(n),Bo.forEach(n),no=h(We),_e=a(We,"SPAN",{});var Go=i(_e);to=s(Go,"PyTorch"),Go.forEach(n),We.forEach(n),Ne=h(e),b=a(e,"DIV",{class:!0});var P=i(b);w(G.$$.fragment,P),ao=h(P),Y=a(P,"P",{});var Le=i(Y);io=s(Le,`A Generic Base Model Hub Mixin. Define your own mixin for anything by
inheriting from this class and overwriting _from_pretrained and
_save_pretrained to define custom logic for saving/loading your classes. See
`),fe=a(Le,"CODE",{});var Yo=i(fe);ro=s(Yo,"huggingface_hub.PyTorchModelHubMixin"),Yo.forEach(n),so=s(Le," for an example."),Le.forEach(n),co=h(P),H=a(P,"DIV",{class:!0});var de=i(H);w(J.$$.fragment,de),lo=h(de),O=a(de,"P",{});var ce=i(O);ho=s(ce,`Instantiate a pretrained pytorch model from a pre-trained model
configuration from huggingface-hub. The model is set in evaluation mode
by default using `),be=a(ce,"CODE",{});var Jo=i(be);go=s(Jo,"model.eval()"),Jo.forEach(n),uo=s(ce,` (Dropout modules are deactivated). To
train the model, you should first set it back in training mode with
`),ve=a(ce,"CODE",{});var Qo=i(ve);po=s(Qo,"model.train()"),Qo.forEach(n),mo=s(ce,"."),ce.forEach(n),_o=h(de),w(L.$$.fragment,de),de.forEach(n),fo=h(P),U=a(P,"DIV",{class:!0});var Ue=i(U);w(Q.$$.fragment,Ue),bo=h(Ue),X=a(Ue,"P",{});var Ke=i(X);vo=s(Ke,`Upload model checkpoint or tokenizer files to the \u{1F917} Model Hub while
synchronizing a local clone of the repo in `),ye=a(Ke,"CODE",{});var Xo=i(ye);yo=s(Xo,"repo_path_or_name"),Xo.forEach(n),wo=s(Ke,"."),Ke.forEach(n),Ue.forEach(n),ko=h(P),K=a(P,"DIV",{class:!0});var Ve=i(K);w(Z.$$.fragment,Ve),xo=h(Ve),we=a(Ve,"P",{});var Zo=i(we);$o=s(Zo,"Saving weights in local directory."),Zo.forEach(n),Ve.forEach(n),P.forEach(n),Oe=h(e),A=a(e,"H3",{class:!0});var je=i(A);V=a(je,"A",{id:!0,class:!0,href:!0});var en=i(V);ke=a(en,"SPAN",{});var on=i(ke);w(ee.$$.fragment,on),on.forEach(n),en.forEach(n),Mo=h(je),xe=a(je,"SPAN",{});var nn=i(xe);To=s(nn,"Keras"),nn.forEach(n),je.forEach(n),Ae=h(e),E=a(e,"DIV",{class:!0});var le=i(E);w(oe.$$.fragment,le),zo=h(le),S=a(le,"P",{});var he=i(S);Eo=s(he,`Instantiate a pretrained pytorch model from a pre-trained model
configuration from huggingface-hub. The model is set in evaluation mode by
default using `),$e=a(he,"CODE",{});var tn=i($e);Ho=s(tn,"model.eval()"),tn.forEach(n),Po=s(he,` (Dropout modules are deactivated). To train the
model, you should first set it back in training mode with `),Me=a(he,"CODE",{});var an=i(Me);Do=s(an,"model.train()"),an.forEach(n),No=s(he,"."),he.forEach(n),Oo=h(le),w(j.$$.fragment,le),le.forEach(n),Se=h(e),I=a(e,"DIV",{class:!0});var Be=i(I);w(ne.$$.fragment,Be),Ao=h(Be),te=a(Be,"P",{});var Re=i(te);So=s(Re,`Upload model checkpoint or tokenizer files to the \u{1F917} Model Hub while
synchronizing a local clone of the repo in `),Te=a(Re,"CODE",{});var rn=i(Te);Io=s(rn,"repo_path_or_name"),rn.forEach(n),Co=s(Re,"."),Re.forEach(n),Be.forEach(n),Ie=h(e),C=a(e,"DIV",{class:!0});var Ge=i(C);w(ae.$$.fragment,Ge),qo=h(Ge),ze=a(Ge,"P",{});var sn=i(ze);Fo=s(sn,`Saves a Keras model to save_directory in SavedModel format. Use this if
you\u2019re using the Functional or Sequential APIs.`),sn.forEach(n),Ge.forEach(n),this.h()},h(){g(d,"name","hf:doc:metadata"),g(d,"content",JSON.stringify(fn)),g(f,"id","mixins-serialization-methods"),g(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(f,"href","#mixins-serialization-methods"),g(u,"class","relative group"),g(q,"id","mixins"),g(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(q,"href","#mixins"),g(D,"class","relative group"),g(W,"id","huggingface_hub.ModelHubMixin"),g(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(W,"href","#huggingface_hub.ModelHubMixin"),g(N,"class","relative group"),g(H,"class","docstring"),g(U,"class","docstring"),g(K,"class","docstring"),g(b,"class","docstring"),g(V,"id","huggingface_hub.from_pretrained_keras"),g(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(V,"href","#huggingface_hub.from_pretrained_keras"),g(A,"class","relative group"),g(E,"class","docstring"),g(I,"class","docstring"),g(C,"class","docstring")},m(e,c){o(document.head,d),p(e,T,c),p(e,u,c),o(u,f),o(f,v),k(m,v,null),o(u,_),o(u,z),o(z,Je),p(e,He,c),p(e,D,c),o(D,q),o(q,ge),k(B,ge,null),o(D,Qe),o(D,ue),o(ue,Xe),p(e,Pe,c),p(e,F,c),o(F,Ze),o(F,pe),o(pe,eo),o(F,oo),p(e,De,c),p(e,N,c),o(N,W),o(W,me),k(R,me,null),o(N,no),o(N,_e),o(_e,to),p(e,Ne,c),p(e,b,c),k(G,b,null),o(b,ao),o(b,Y),o(Y,io),o(Y,fe),o(fe,ro),o(Y,so),o(b,co),o(b,H),k(J,H,null),o(H,lo),o(H,O),o(O,ho),o(O,be),o(be,go),o(O,uo),o(O,ve),o(ve,po),o(O,mo),o(H,_o),k(L,H,null),o(b,fo),o(b,U),k(Q,U,null),o(U,bo),o(U,X),o(X,vo),o(X,ye),o(ye,yo),o(X,wo),o(b,ko),o(b,K),k(Z,K,null),o(K,xo),o(K,we),o(we,$o),p(e,Oe,c),p(e,A,c),o(A,V),o(V,ke),k(ee,ke,null),o(A,Mo),o(A,xe),o(xe,To),p(e,Ae,c),p(e,E,c),k(oe,E,null),o(E,zo),o(E,S),o(S,Eo),o(S,$e),o($e,Ho),o(S,Po),o(S,Me),o(Me,Do),o(S,No),o(E,Oo),k(j,E,null),p(e,Se,c),p(e,I,c),k(ne,I,null),o(I,Ao),o(I,te),o(te,So),o(te,Te),o(Te,Io),o(te,Co),p(e,Ie,c),p(e,C,c),k(ae,C,null),o(C,qo),o(C,ze),o(ze,Fo),Ce=!0},p(e,[c]){const ie={};c&2&&(ie.$$scope={dirty:c,ctx:e}),L.$set(ie);const Ee={};c&2&&(Ee.$$scope={dirty:c,ctx:e}),j.$set(Ee)},i(e){Ce||(x(m.$$.fragment,e),x(B.$$.fragment,e),x(R.$$.fragment,e),x(G.$$.fragment,e),x(J.$$.fragment,e),x(L.$$.fragment,e),x(Q.$$.fragment,e),x(Z.$$.fragment,e),x(ee.$$.fragment,e),x(oe.$$.fragment,e),x(j.$$.fragment,e),x(ne.$$.fragment,e),x(ae.$$.fragment,e),Ce=!0)},o(e){$(m.$$.fragment,e),$(B.$$.fragment,e),$(R.$$.fragment,e),$(G.$$.fragment,e),$(J.$$.fragment,e),$(L.$$.fragment,e),$(Q.$$.fragment,e),$(Z.$$.fragment,e),$(ee.$$.fragment,e),$(oe.$$.fragment,e),$(j.$$.fragment,e),$(ne.$$.fragment,e),$(ae.$$.fragment,e),Ce=!1},d(e){n(d),e&&n(T),e&&n(u),M(m),e&&n(He),e&&n(D),M(B),e&&n(Pe),e&&n(F),e&&n(De),e&&n(N),M(R),e&&n(Ne),e&&n(b),M(G),M(J),M(L),M(Q),M(Z),e&&n(Oe),e&&n(A),M(ee),e&&n(Ae),e&&n(E),M(oe),M(j),e&&n(Se),e&&n(I),M(ne),e&&n(Ie),e&&n(C),M(ae)}}}const fn={local:"mixins-serialization-methods",sections:[{local:"mixins",sections:[{local:"huggingface_hub.ModelHubMixin",title:"PyTorch"},{local:"huggingface_hub.from_pretrained_keras",title:"Keras"}],title:"Mixins"}],title:"Mixins & serialization methods"};function bn(se){return un(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xn extends cn{constructor(d){super();ln(this,d,bn,_n,hn,{})}}export{xn as default,fn as metadata};
