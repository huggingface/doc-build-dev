import{S as Es,i as xs,s as Ts,e as n,k as d,w as v,t as o,M as Ds,c as a,d as t,m as l,a as s,x as w,h as r,b as g,F as e,g as x,y as $,q as k,o as P,B as C,v as js,L as Ps}from"../../chunks/vendor-6b77c823.js";import{T as $a}from"../../chunks/Tip-39098574.js";import{D as T}from"../../chunks/Docstring-1088f2fb.js";import{C as Cs}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as $s}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ks}from"../../chunks/ExampleCodeBlock-5212b321.js";function zs(z){let f,b,p,u,E;return{c(){f=n("p"),b=o(`A configuration file can be loaded and saved to disk. Loading the configuration file and using this file to
initialize a model does `),p=n("strong"),u=o("not"),E=o(" load the model weights. It only affects the model\u2019s configuration.")},l(c){f=a(c,"P",{});var _=s(f);b=r(_,`A configuration file can be loaded and saved to disk. Loading the configuration file and using this file to
initialize a model does `),p=a(_,"STRONG",{});var q=s(p);u=r(q,"not"),q.forEach(t),E=r(_," load the model weights. It only affects the model\u2019s configuration."),_.forEach(t)},m(c,_){x(c,f,_),e(f,b),e(f,p),e(p,u),e(f,E)},d(c){c&&t(f)}}}function As(z){let f,b,p,u,E;return u=new Cs({props:{code:`from transformers import AutoConfig

config = AutoConfig.from_pretrained("bert-base-cased")

# Push the config to your namespace with the name "my-finetuned-bert" and have a local clone in the
# *my-finetuned-bert* folder.
config.push_to_hub("my-finetuned-bert")

# Push the config to your namespace with the name "my-finetuned-bert" with no local clone.
config.push_to_hub("my-finetuned-bert", use_temp_dir=True)

# Push the config to an organization with the name "my-finetuned-bert" and have a local clone in the
# *my-finetuned-bert* folder.
config.push_to_hub("my-finetuned-bert", organization="huggingface")

# Make a change to an existing repo that has been cloned locally in *my-finetuned-bert*.
config.push_to_hub("my-finetuned-bert", repo_url="https://huggingface.co/sgugger/my-finetuned-bert")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig

config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-comment"># Push the config to your namespace with the name &quot;my-finetuned-bert&quot; and have a local clone in the</span>
<span class="hljs-comment"># *my-finetuned-bert* folder.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>)

<span class="hljs-comment"># Push the config to your namespace with the name &quot;my-finetuned-bert&quot; with no local clone.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, use_temp_dir=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Push the config to an organization with the name &quot;my-finetuned-bert&quot; and have a local clone in the</span>
<span class="hljs-comment"># *my-finetuned-bert* folder.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, organization=<span class="hljs-string">&quot;huggingface&quot;</span>)

<span class="hljs-comment"># Make a change to an existing repo that has been cloned locally in *my-finetuned-bert*.</span>
config.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>, repo_url=<span class="hljs-string">&quot;https://huggingface.co/sgugger/my-finetuned-bert&quot;</span>)`}}),{c(){f=n("p"),b=o("Examples:"),p=d(),v(u.$$.fragment)},l(c){f=a(c,"P",{});var _=s(f);b=r(_,"Examples:"),_.forEach(t),p=l(c),w(u.$$.fragment,c)},m(c,_){x(c,f,_),e(f,b),x(c,p,_),$(u,c,_),E=!0},p:Ps,i(c){E||(k(u.$$.fragment,c),E=!0)},o(c){P(u.$$.fragment,c),E=!1},d(c){c&&t(f),c&&t(p),C(u,c)}}}function Os(z){let f,b,p,u,E;return{c(){f=n("p"),b=o("Passing "),p=n("code"),u=o("use_auth_token=True"),E=o(" is required when you want to use a private model.")},l(c){f=a(c,"P",{});var _=s(f);b=r(_,"Passing "),p=a(_,"CODE",{});var q=s(p);u=r(q,"use_auth_token=True"),q.forEach(t),E=r(_," is required when you want to use a private model."),_.forEach(t)},m(c,_){x(c,f,_),e(f,b),e(f,p),e(p,u),e(f,E)},d(c){c&&t(f)}}}function qs(z){let f,b,p,u,E;return u=new Cs({props:{code:`# We can't instantiate directly the base class *PretrainedConfig* so let's show the examples on a
# derived class: BertConfig
config = BertConfig.from_pretrained(
    "bert-base-uncased"
)  # Download configuration from huggingface.co and cache.
config = BertConfig.from_pretrained(
    "./test/saved_model/"
)  # E.g. config (or model) was saved using *save_pretrained('./test/saved_model/')*
config = BertConfig.from_pretrained("./test/saved_model/my_configuration.json")
config = BertConfig.from_pretrained("bert-base-uncased", output_attentions=True, foo=False)
assert config.output_attentions == True
config, unused_kwargs = BertConfig.from_pretrained(
    "bert-base-uncased", output_attentions=True, foo=False, return_unused_kwargs=True
)
assert config.output_attentions == True
assert unused_kwargs == {"foo": False}`,highlighted:`<span class="hljs-comment"># We can&#x27;t instantiate directly the base class *PretrainedConfig* so let&#x27;s show the examples on a</span>
<span class="hljs-comment"># derived class: BertConfig</span>
config = BertConfig.from_pretrained(
    <span class="hljs-string">&quot;bert-base-uncased&quot;</span>
)  <span class="hljs-comment"># Download configuration from huggingface.co and cache.</span>
config = BertConfig.from_pretrained(
    <span class="hljs-string">&quot;./test/saved_model/&quot;</span>
)  <span class="hljs-comment"># E.g. config (or model) was saved using *save_pretrained(&#x27;./test/saved_model/&#x27;)*</span>
config = BertConfig.from_pretrained(<span class="hljs-string">&quot;./test/saved_model/my_configuration.json&quot;</span>)
config = BertConfig.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, output_attentions=<span class="hljs-literal">True</span>, foo=<span class="hljs-literal">False</span>)
<span class="hljs-keyword">assert</span> config.output_attentions == <span class="hljs-literal">True</span>
config, unused_kwargs = BertConfig.from_pretrained(
    <span class="hljs-string">&quot;bert-base-uncased&quot;</span>, output_attentions=<span class="hljs-literal">True</span>, foo=<span class="hljs-literal">False</span>, return_unused_kwargs=<span class="hljs-literal">True</span>
)
<span class="hljs-keyword">assert</span> config.output_attentions == <span class="hljs-literal">True</span>
<span class="hljs-keyword">assert</span> unused_kwargs == {<span class="hljs-string">&quot;foo&quot;</span>: <span class="hljs-literal">False</span>}`}}),{c(){f=n("p"),b=o("Examples:"),p=d(),v(u.$$.fragment)},l(c){f=a(c,"P",{});var _=s(f);b=r(_,"Examples:"),_.forEach(t),p=l(c),w(u.$$.fragment,c)},m(c,_){x(c,f,_),e(f,b),x(c,p,_),$(u,c,_),E=!0},p:Ps,i(c){E||(k(u.$$.fragment,c),E=!0)},o(c){P(u.$$.fragment,c),E=!1},d(c){c&&t(f),c&&t(p),C(u,c)}}}function Ss(z){let f,b;return{c(){f=n("p"),b=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(p){f=a(p,"P",{});var u=s(f);b=r(u,"This API is experimental and may have some slight breaking changes in the next releases."),u.forEach(t)},m(p,u){x(p,f,u),e(f,b)},d(p){p&&t(f)}}}function Fs(z){let f,b,p,u,E,c,_,q,Do,ao,H,jo,Ge,zo,Ao,so,D,Oo,dt,qo,So,lt,Fo,Io,ct,Lo,No,ft,Wo,Mo,io,R,G,mt,$e,Vo,ht,Bo,lo,m,ke,Ro,pt,Uo,Jo,X,Ho,ut,Go,Xo,S,W,gt,Ko,Qo,_t,Yo,Zo,Xe,er,tr,or,j,bt,rr,nr,yt,ar,sr,Ke,ir,dr,Qe,lr,cr,Ye,fr,mr,hr,K,vt,pr,ur,wt,gr,_r,br,Q,$t,yr,vr,kt,wr,$r,kr,Pt,Pr,Cr,F,Y,Ct,Er,xr,Et,Tr,Dr,jr,Z,xt,zr,Ar,Tt,Or,qr,Sr,ee,Dt,Fr,Ir,jt,Lr,Nr,Wr,te,zt,Mr,Vr,At,Br,Rr,Ur,M,Pe,Jr,Ce,Hr,Ot,Gr,Xr,Kr,oe,Qr,re,Ee,Yr,I,Zr,qt,en,tn,St,on,rn,Ft,nn,an,sn,ne,xe,dn,Te,ln,Ze,cn,fn,mn,ae,De,hn,je,pn,et,un,gn,_n,A,ze,bn,Ae,yn,tt,vn,wn,$n,se,kn,ie,Pn,de,Oe,Cn,L,En,It,xn,Tn,ot,Dn,jn,Lt,zn,An,On,V,qe,qn,Se,Sn,Nt,Fn,In,Ln,le,Nn,ce,Fe,Wn,U,Mn,Wt,Vn,Bn,rt,Rn,Un,Jn,fe,Ie,Hn,Mt,Gn,Xn,me,Le,Kn,Vt,Qn,Yn,he,Ne,Zn,Bt,ea,ta,pe,We,oa,Rt,ra,na,ue,Me,aa,Ve,sa,Ut,ia,da,la,O,Be,ca,Re,fa,Jt,ma,ha,pa,J,ua,Ht,ga,_a,Gt,ba,ya,va,Xt,wa,co;return c=new $s({}),$e=new $s({}),ke=new T({props:{name:"class transformers.PretrainedConfig",anchor:"transformers.PretrainedConfig",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PretrainedConfig.name_or_path",description:`<strong>name_or_path</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&quot;</code>) &#x2014;
Store the string that was passed to <a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">PreTrainedModel.from_pretrained()</a> or
<a href="/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">TFPreTrainedModel.from_pretrained()</a> as <code>pretrained_model_name_or_path</code> if the configuration was created
with such a method.`,name:"name_or_path"},{anchor:"transformers.PretrainedConfig.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should return all hidden-states.`,name:"output_hidden_states"},{anchor:"transformers.PretrainedConfig.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should returns all attentions.`,name:"output_attentions"},{anchor:"transformers.PretrainedConfig.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.PretrainedConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as an encoder/decoder or not.`,name:"is_encoder_decoder"},{anchor:"transformers.PretrainedConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as decoder or not (in which case it&#x2019;s used as an encoder).`,name:"is_decoder"},{anchor:"transformers.PretrainedConfig.cross_attention_hidden_size**",description:`<strong>cross_attention_hidden_size**</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
The hidden size of the cross-attention layer in case the model is used as a decoder in an encoder-decoder
setting and the cross-attention hidden dimension differs from <code>self.config.hidden_size</code>.`,name:"cross_attention_hidden_size**"},{anchor:"transformers.PretrainedConfig.add_cross_attention",description:`<strong>add_cross_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether cross-attention layers should be added to the model. Note, this option is only relevant for models
that can be used as decoder models within the <a href="/docs/transformers/pr_17196/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel">EncoderDecoderModel</a> class, which consists of all models
in <code>AUTO_MODELS_FOR_CAUSAL_LM</code>.`,name:"add_cross_attention"},{anchor:"transformers.PretrainedConfig.tie_encoder_decoder",description:`<strong>tie_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether all encoder weights should be tied to their equivalent decoder weights. This requires the encoder
and decoder model to have the exact same parameter names.`,name:"tie_encoder_decoder"},{anchor:"transformers.PretrainedConfig.prune_heads",description:`<strong>prune_heads</strong> (<code>Dict[int, List[int]]</code>, <em>optional</em>, defaults to <code>{}</code>) &#x2014;
Pruned heads of the model. The keys are the selected layer indices and the associated values, the list of
heads to prune in said layer.</p>
<p>For instance <code>{1: [0, 2], 2: [2, 3]}</code> will prune heads 0 and 2 on layer 1 and heads 2 and 3 on layer 2.`,name:"prune_heads"},{anchor:"transformers.PretrainedConfig.chunk_size_feed_forward",description:`<strong>chunk_size_feed_forward</strong> (<code>int</code>, <em>optional</em>, defaults to <code>0</code>) &#x2014;
The chunk size of all feed forward layers in the residual attention blocks. A chunk size of <code>0</code> means that
the feed forward layer is not chunked. A chunk size of n means that the feed forward layer processes <code>n</code> &lt;
sequence_length embeddings at a time. For more information on feed forward chunking, see <a href="../glossary.html#feed-forward-chunking">How does Feed
Forward Chunking work?</a>.`,name:"chunk_size_feed_forward"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L54",parameterGroups:[{title:"Parameters for sequence generation",parametersDescription:`
<ul>
<li><strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) \u2014
Maximum length that will be used by default in the <code>generate</code> method of the model.</li>
<li><strong>min_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) \u2014
Minimum length that will be used by default in the <code>generate</code> method of the model.</li>
<li><strong>do_sample</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Flag that will be used by default in the <code>generate</code> method of the model. Whether or not to use sampling ;
use greedy decoding otherwise.</li>
<li><strong>early_stopping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Flag that will be used by default in the <code>generate</code> method of the model. Whether to stop the beam search
when at least <code>num_beams</code> sentences are finished per batch or not.</li>
<li><strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) \u2014
Number of beams for beam search that will be used by default in the <code>generate</code> method of the model. 1 means
no beam search.</li>
<li><strong>num_beam_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) \u2014
Number of groups to divide <code>num_beams</code> into in order to ensure diversity among different groups of beams
that will be used by default in the <code>generate</code> method of the model. 1 means no group beam search.</li>
<li><strong>diversity_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) \u2014
Value to control diversity for group beam search. that will be used by default in the <code>generate</code> method of
the model. 0 means no diversity penalty. The higher the penalty, the more diverse are the outputs.</li>
<li><strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1) \u2014
The value used to module the next token probabilities that will be used by default in the <code>generate</code> method
of the model. Must be strictly positive.</li>
<li><strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to 50) \u2014
Number of highest probability vocabulary tokens to keep for top-k-filtering that will be used by default in
the <code>generate</code> method of the model.</li>
<li><strong>top_p</strong> (<code>float</code>, <em>optional</em>, defaults to 1) \u2014
Value that will be used by default in the <code>generate</code> method of the model for <code>top_p</code>. If set to float < 1,
only the most probable tokens with probabilities that add up to <code>top_p</code> or higher are kept for generation.</li>
<li><strong>repetition_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1) \u2014
Parameter for repetition penalty that will be used by default in the <code>generate</code> method of the model. 1.0
means no penalty.</li>
<li><strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1) \u2014
Exponential penalty to the length that will be used by default in the <code>generate</code> method of the model.</li>
<li><strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) \u2014 Value that will be used by default in the \u2014
<code>generate</code> method of the model for <code>no_repeat_ngram_size</code>. If set to int > 0, all ngrams of that size can
only occur once.</li>
<li><strong>encoder_no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) \u2014 Value that will be used by \u2014
default in the <code>generate</code> method of the model for <code>encoder_no_repeat_ngram_size</code>. If set to int > 0, all
ngrams of that size that occur in the <code>encoder_input_ids</code> cannot occur in the <code>decoder_input_ids</code>.</li>
<li><strong>bad_words_ids</strong> (<code>List[int]</code>, <em>optional</em>) \u2014
List of token ids that are not allowed to be generated that will be used by default in the <code>generate</code>
method of the model. In order to get the tokens of the words that should not appear in the generated text,
use <code>tokenizer.encode(bad_word, add_prefix_space=True)</code>.</li>
<li><strong>num_return_sequences</strong> (<code>int</code>, <em>optional</em>, defaults to 1) \u2014
Number of independently computed returned sequences for each element in the batch that will be used by
default in the <code>generate</code> method of the model.</li>
<li><strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether the model should return the logits when used for generation.</li>
<li><strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether the model should return a <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> instead of a <code>torch.LongTensor</code>.</li>
<li><strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful for
multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be the target
language token.</li>
<li><strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014
The id of the token to force as the last generated token when <code>max_length</code> is reached.</li>
<li><strong>remove_invalid_values</strong> (<code>bool</code>, <em>optional</em>) \u2014
Whether to remove possible <em>nan</em> and <em>inf</em> outputs of the model to prevent the generation method to crash.
Note that using <code>remove_invalid_values</code> can slow down generation.</li>
</ul>
`},{title:"Parameters for fine-tuning tasks",parametersDescription:`
<ul>
<li><strong>architectures</strong> (<code>List[str]</code>, <em>optional</em>) \u2014
Model architectures that can be used with the model pretrained weights.</li>
<li><strong>finetuning_task</strong> (<code>str</code>, <em>optional</em>) \u2014
Name of the task used to fine-tune the model. This can be used when converting from an original (TensorFlow
or PyTorch) checkpoint.</li>
<li><strong>id2label</strong> (<code>Dict[int, str]</code>, <em>optional</em>) \u2014
A map from index (for instance prediction index, or target index) to label.</li>
<li><strong>label2id</strong> (<code>Dict[str, int]</code>, <em>optional</em>) \u2014 A map from label to index for the model.</li>
<li><strong>num_labels</strong> (<code>int</code>, <em>optional</em>) \u2014
Number of labels to use in the last layer added to the model, typically for a classification task.</li>
<li><strong>task_specific_params</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) \u2014
Additional keyword arguments to store for the current task.</li>
<li><strong>problem_type</strong> (<code>str</code>, <em>optional</em>) \u2014
Problem type for <code>XxxForSequenceClassification</code> models. Can be one of <code>"regression"</code>,
<code>"single_label_classification"</code> or <code>"multi_label_classification"</code>.</li>
</ul>
`},{title:"Parameters linked to the tokenizer",parametersDescription:`
<ul>
<li><strong>tokenizer_class</strong> (<code>str</code>, <em>optional</em>) \u2014
The name of the associated tokenizer class to use (if none is set, will use the tokenizer associated to the
model by default).</li>
<li><strong>prefix</strong> (<code>str</code>, <em>optional</em>) \u2014
A specific prompt that should be added at the beginning of each text before calling the model.</li>
<li><strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014 The id of the <em>beginning-of-stream</em> token.</li>
<li><strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014 The id of the <em>padding</em> token.</li>
<li><strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014 The id of the <em>end-of-stream</em> token.</li>
<li><strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014
If an encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.</li>
<li><strong>sep_token_id</strong> (<code>int</code>, <em>optional</em>) \u2014 The id of the <em>separation</em> token.</li>
</ul>
`},{title:"PyTorch specific parameters",parametersDescription:`
<ul>
<li>
<p><strong>torchscript</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether or not the model should be used with Torchscript.</p>
</li>
<li>
<p><strong>tie_word_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) \u2014
Whether the model\u2019s input and output word embeddings should be tied. Note that this is only relevant if the
model has a output word embedding layer.</p>
</li>
<li>
<p><strong>torch_dtype</strong> (<code>str</code>, <em>optional</em>) \u2014
The <code>dtype</code> of the weights. This attribute can be used to initialize the model to a non-default <code>dtype</code>
(which is normally <code>float32</code>) and thus allow for optimal storage allocation. For example, if the saved
model is <code>float16</code>, ideally we want to load it back using the minimal amount of memory needed to load
<code>float16</code> weights. Since the config object is stored in plain text, this attribute contains just the
floating type string without the <code>torch.</code> prefix. For example, for <code>torch.float16</code> \`<code>torch_dtype</code> is the
<code>"float16"</code> string.</p>
<p>This attribute is currently not being used during model loading time, but this may change in the future
versions. But we can already start preparing for the future by saving the dtype with save_pretrained.</p>
</li>
</ul>
`},{title:"TensorFlow specific parameters",parametersDescription:`
<ul>
<li><strong>use_bfloat16</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) \u2014
Whether or not the model should use BFloat16 scalars (only used by some TensorFlow models).</li>
</ul>
`}]}}),X=new $a({props:{$$slots:{default:[zs]},$$scope:{ctx:z}}}),Pe=new T({props:{name:"push_to_hub",anchor:"transformers.PretrainedConfig.push_to_hub",parameters:[{name:"repo_path_or_name",val:": typing.Optional[str] = None"},{name:"repo_url",val:": typing.Optional[str] = None"},{name:"use_temp_dir",val:": bool = False"},{name:"commit_message",val:": typing.Optional[str] = None"},{name:"organization",val:": typing.Optional[str] = None"},{name:"private",val:": typing.Optional[bool] = None"},{name:"use_auth_token",val:": typing.Union[bool, str, NoneType] = None"},{name:"**model_card_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PretrainedConfig.push_to_hub.repo_path_or_name",description:`<strong>repo_path_or_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Can either be a repository name for your config in the Hub or a path to a local folder (in which case
the repository will have the name of that local folder). If not specified, will default to the name
given by <code>repo_url</code> and a local directory with that name will be created.`,name:"repo_path_or_name"},{anchor:"transformers.PretrainedConfig.push_to_hub.repo_url",description:`<strong>repo_url</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Specify this in case you want to push to an existing repository in the hub. If unspecified, a new
repository will be created in your namespace (unless you specify an <code>organization</code>) with <code>repo_name</code>.`,name:"repo_url"},{anchor:"transformers.PretrainedConfig.push_to_hub.use_temp_dir",description:`<strong>use_temp_dir</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to clone the distant repo in a temporary directory or in <code>repo_path_or_name</code> inside the
current working directory. This will slow things down if you are making changes in an existing repo
since you will need to clone the repo before every push.`,name:"use_temp_dir"},{anchor:"transformers.PretrainedConfig.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Message to commit while pushing. Will default to <code>&quot;add config&quot;</code>.`,name:"commit_message"},{anchor:"transformers.PretrainedConfig.push_to_hub.organization",description:`<strong>organization</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Organization in which you want to push your config (you must be a member of this organization).`,name:"organization"},{anchor:"transformers.PretrainedConfig.push_to_hub.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not the repository created should be private (requires a paying subscription).`,name:"private"},{anchor:"transformers.PretrainedConfig.push_to_hub.use_auth_token",description:`<strong>use_auth_token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>). Will default to <code>True</code> if
<code>repo_url</code> is not specified.`,name:"use_auth_token"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/utils/hub.py#L846",returnDescription:`
<p>The url of the commit of your config in the given repository.</p>
`,returnType:`
<p><code>str</code></p>
`}}),oe=new ks({props:{anchor:"transformers.PretrainedConfig.push_to_hub.example",$$slots:{default:[As]},$$scope:{ctx:z}}}),Ee=new T({props:{name:"dict_torch_dtype_to_str",anchor:"transformers.PretrainedConfig.dict_torch_dtype_to_str",parameters:[{name:"d",val:": typing.Dict[str, typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L874"}}),xe=new T({props:{name:"from_dict",anchor:"transformers.PretrainedConfig.from_dict",parameters:[{name:"config_dict",val:": typing.Dict[str, typing.Any]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PretrainedConfig.from_dict.config_dict",description:`<strong>config_dict</strong> (<code>Dict[str, Any]</code>) &#x2014;
Dictionary that will be used to instantiate the configuration object. Such a dictionary can be
retrieved from a pretrained checkpoint by leveraging the <a href="/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig.get_config_dict">get_config_dict()</a> method.`,name:"config_dict"},{anchor:"transformers.PretrainedConfig.from_dict.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>) &#x2014;
Additional parameters from which to initialize the configuration object.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L663",returnDescription:`
<p>The configuration object instantiated from those parameters.</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),De=new T({props:{name:"from_json_file",anchor:"transformers.PretrainedConfig.from_json_file",parameters:[{name:"json_file",val:": typing.Union[str, os.PathLike]"}],parametersDescription:[{anchor:"transformers.PretrainedConfig.from_json_file.json_file",description:`<strong>json_file</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file containing the parameters.`,name:"json_file"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L714",returnDescription:`
<p>The configuration object instantiated from that JSON file.</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),ze=new T({props:{name:"from_pretrained",anchor:"transformers.PretrainedConfig.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PretrainedConfig.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained model configuration hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a configuration file saved using the
<a href="/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved configuration JSON <em>file</em>, e.g., <code>./my_model_directory/configuration.json</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"},{anchor:"transformers.PretrainedConfig.from_pretrained.cache_dir",description:`<strong>cache_dir</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained model configuration should be cached if the
standard cache should not be used.`,name:"cache_dir"},{anchor:"transformers.PretrainedConfig.from_pretrained.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force to (re-)download the configuration files and override the cached versions if
they exist.`,name:"force_download"},{anchor:"transformers.PretrainedConfig.from_pretrained.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received file. Attempts to resume the download if such a file
exists.`,name:"resume_download"},{anchor:"transformers.PretrainedConfig.from_pretrained.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}.</code> The proxies are used on each request.`,name:"proxies"},{anchor:"transformers.PretrainedConfig.from_pretrained.use_auth_token",description:`<strong>use_auth_token</strong> (<code>str</code> or <em>bool</em>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>transformers-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"use_auth_token"},{anchor:"transformers.PretrainedConfig.from_pretrained.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;main&quot;</code>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.`,name:"revision"},{anchor:"transformers.PretrainedConfig.from_pretrained.return_unused_kwargs",description:`<strong>return_unused_kwargs</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>False</code>, then this function returns just the final configuration object.</p>
<p>If <code>True</code>, then this functions returns a <code>Tuple(config, unused_kwargs)</code> where <em>unused_kwargs</em> is a
dictionary consisting of the key/value pairs whose keys are not configuration attributes: i.e., the
part of <code>kwargs</code> which has not been used to update <code>config</code> and is otherwise ignored.`,name:"return_unused_kwargs"},{anchor:"transformers.PretrainedConfig.from_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The values in kwargs of any keys which are configuration attributes will be used to override the loaded
values. Behavior concerning key/value pairs whose keys are <em>not</em> configuration attributes is controlled
by the <code>return_unused_kwargs</code> keyword parameter.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L452",returnDescription:`
<p>The configuration object instantiated from this pretrained model.</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"
>PretrainedConfig</a></p>
`}}),se=new $a({props:{$$slots:{default:[Os]},$$scope:{ctx:z}}}),ie=new ks({props:{anchor:"transformers.PretrainedConfig.from_pretrained.example",$$slots:{default:[qs]},$$scope:{ctx:z}}}),Oe=new T({props:{name:"get_config_dict",anchor:"transformers.PretrainedConfig.get_config_dict",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PretrainedConfig.get_config_dict.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The identifier of the pre-trained checkpoint from which we want the dictionary of parameters.`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L535",returnDescription:`
<p>The dictionary(ies) that will be used to instantiate the configuration object.</p>
`,returnType:`
<p><code>Tuple[Dict, Dict]</code></p>
`}}),qe=new T({props:{name:"register_for_auto_class",anchor:"transformers.PretrainedConfig.register_for_auto_class",parameters:[{name:"auto_class",val:" = 'AutoConfig'"}],parametersDescription:[{anchor:"transformers.PretrainedConfig.register_for_auto_class.auto_class",description:`<strong>auto_class</strong> (<code>str</code> or <code>type</code>, <em>optional</em>, defaults to <code>&quot;AutoConfig&quot;</code>) &#x2014;
The auto class to register this new configuration with.`,name:"auto_class"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L886"}}),le=new $a({props:{warning:!0,$$slots:{default:[Ss]},$$scope:{ctx:z}}}),Fe=new T({props:{name:"save_pretrained",anchor:"transformers.PretrainedConfig.save_pretrained",parameters:[{name:"save_directory",val:": typing.Union[str, os.PathLike]"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PretrainedConfig.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the configuration JSON file will be saved (will be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.PretrainedConfig.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/pr_17196/en/main_classes/processors#transformers.ProcessorMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L406"}}),Ie=new T({props:{name:"to_dict",anchor:"transformers.PretrainedConfig.to_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L774",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance.</p>
`,returnType:`
<p><code>Dict[str, Any]</code></p>
`}}),Le=new T({props:{name:"to_diff_dict",anchor:"transformers.PretrainedConfig.to_diff_dict",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L742",returnDescription:`
<p>Dictionary of all the attributes that make up this configuration instance,</p>
`,returnType:`
<p><code>Dict[str, Any]</code></p>
`}}),Ne=new T({props:{name:"to_json_file",anchor:"transformers.PretrainedConfig.to_json_file",parameters:[{name:"json_file_path",val:": typing.Union[str, os.PathLike]"},{name:"use_diff",val:": bool = True"}],parametersDescription:[{anchor:"transformers.PretrainedConfig.to_json_file.json_file_path",description:`<strong>json_file_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Path to the JSON file in which this configuration instance&#x2019;s parameters will be saved.`,name:"json_file_path"},{anchor:"transformers.PretrainedConfig.to_json_file.use_diff",description:`<strong>use_diff</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, only the difference between the config instance and the default <code>PretrainedConfig()</code>
is serialized to JSON file.`,name:"use_diff"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L812"}}),We=new T({props:{name:"to_json_string",anchor:"transformers.PretrainedConfig.to_json_string",parameters:[{name:"use_diff",val:": bool = True"}],parametersDescription:[{anchor:"transformers.PretrainedConfig.to_json_string.use_diff",description:`<strong>use_diff</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, only the difference between the config instance and the default <code>PretrainedConfig()</code>
is serialized to JSON string.`,name:"use_diff"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L794",returnDescription:`
<p>String containing all the attributes that make up this configuration instance in JSON format.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Me=new T({props:{name:"update",anchor:"transformers.PretrainedConfig.update",parameters:[{name:"config_dict",val:": typing.Dict[str, typing.Any]"}],parametersDescription:[{anchor:"transformers.PretrainedConfig.update.config_dict",description:"<strong>config_dict</strong> (<code>Dict[str, Any]</code>) &#x2014; Dictionary of attributes that should be updated for this class.",name:"config_dict"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L826"}}),Be=new T({props:{name:"update_from_string",anchor:"transformers.PretrainedConfig.update_from_string",parameters:[{name:"update_str",val:": str"}],parametersDescription:[{anchor:"transformers.PretrainedConfig.update_from_string.update_str",description:"<strong>update_str</strong> (<code>str</code>) &#x2014; String with attributes that should be updated for this class.",name:"update_str"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/configuration_utils.py#L836"}}),{c(){f=n("meta"),b=d(),p=n("h1"),u=n("a"),E=n("span"),v(c.$$.fragment),_=d(),q=n("span"),Do=o("Configuration"),ao=d(),H=n("p"),jo=o("The base class "),Ge=n("a"),zo=o("PretrainedConfig"),Ao=o(` implements the common methods for loading/saving a configuration
either from a local file or directory, or from a pretrained model configuration provided by the library (downloaded
from HuggingFace\u2019s AWS S3 repository).`),so=d(),D=n("p"),Oo=o(`Each derived config class implements model specific attributes. Common attributes present in all config classes are:
`),dt=n("code"),qo=o("hidden_size"),So=o(", "),lt=n("code"),Fo=o("num_attention_heads"),Io=o(", and "),ct=n("code"),Lo=o("num_hidden_layers"),No=o(`. Text models further implement:
`),ft=n("code"),Wo=o("vocab_size"),Mo=o("."),io=d(),R=n("h2"),G=n("a"),mt=n("span"),v($e.$$.fragment),Vo=d(),ht=n("span"),Bo=o("PretrainedConfig"),lo=d(),m=n("div"),v(ke.$$.fragment),Ro=d(),pt=n("p"),Uo=o(`Base class for all configuration classes. Handles a few parameters common to all models\u2019 configurations as well as
methods for loading/downloading/saving configurations.`),Jo=d(),v(X.$$.fragment),Ho=d(),ut=n("p"),Go=o("Class attributes (overridden by derived classes):"),Xo=d(),S=n("ul"),W=n("li"),gt=n("strong"),Ko=o("model_type"),Qo=o(" ("),_t=n("code"),Yo=o("str"),Zo=o(`) \u2014 An identifier for the model type, serialized into the JSON file, and used to recreate
the correct object in `),Xe=n("a"),er=o("AutoConfig"),tr=o("."),or=d(),j=n("li"),bt=n("strong"),rr=o("is_composition"),nr=o(" ("),yt=n("code"),ar=o("bool"),sr=o(`) \u2014 Whether the config class is composed of multiple sub-configs. In this case the
config has to be initialized from two or more configs of type `),Ke=n("a"),ir=o("PretrainedConfig"),dr=o(` like:
`),Qe=n("a"),lr=o("EncoderDecoderConfig"),cr=o(" or "),Ye=n("a"),fr=o("~RagConfig"),mr=o("."),hr=d(),K=n("li"),vt=n("strong"),pr=o("keys_to_ignore_at_inference"),ur=o(" ("),wt=n("code"),gr=o("List[str]"),_r=o(`) \u2014 A list of keys to ignore by default when looking at dictionary
outputs of the model during inference.`),br=d(),Q=n("li"),$t=n("strong"),yr=o("attribute_map"),vr=o(" ("),kt=n("code"),wr=o("Dict[str, str]"),$r=o(`) \u2014 A dict that maps model specific attribute names to the standardized
naming of attributes.`),kr=d(),Pt=n("p"),Pr=o("Common attributes (present in all subclasses):"),Cr=d(),F=n("ul"),Y=n("li"),Ct=n("strong"),Er=o("vocab_size"),xr=o(" ("),Et=n("code"),Tr=o("int"),Dr=o(`) \u2014 The number of tokens in the vocabulary, which is also the first dimension of the
embeddings matrix (this attribute may be missing for models that don\u2019t have a text modality like ViT).`),jr=d(),Z=n("li"),xt=n("strong"),zr=o("hidden_size"),Ar=o(" ("),Tt=n("code"),Or=o("int"),qr=o(") \u2014 The hidden size of the model."),Sr=d(),ee=n("li"),Dt=n("strong"),Fr=o("num_attention_heads"),Ir=o(" ("),jt=n("code"),Lr=o("int"),Nr=o(`) \u2014 The number of attention heads used in the multi-head attention layers of the
model.`),Wr=d(),te=n("li"),zt=n("strong"),Mr=o("num_hidden_layers"),Vr=o(" ("),At=n("code"),Br=o("int"),Rr=o(") \u2014 The number of blocks in the model."),Ur=d(),M=n("div"),v(Pe.$$.fragment),Jr=d(),Ce=n("p"),Hr=o(`Upload the configuration file to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),Ot=n("code"),Gr=o("repo_path_or_name"),Xr=o("."),Kr=d(),v(oe.$$.fragment),Qr=d(),re=n("div"),v(Ee.$$.fragment),Yr=d(),I=n("p"),Zr=o("Checks whether the passed dictionary and its nested dicts have a "),qt=n("em"),en=o("torch_dtype"),tn=o(` key and if it\u2019s not None,
converts torch.dtype to a string of just the type. For example, `),St=n("code"),on=o("torch.float32"),rn=o(" get converted into "),Ft=n("em"),nn=o("\u201Cfloat32\u201D"),an=o(`
string, which can then be stored in the json format.`),sn=d(),ne=n("div"),v(xe.$$.fragment),dn=d(),Te=n("p"),ln=o("Instantiates a "),Ze=n("a"),cn=o("PretrainedConfig"),fn=o(" from a Python dictionary of parameters."),mn=d(),ae=n("div"),v(De.$$.fragment),hn=d(),je=n("p"),pn=o("Instantiates a "),et=n("a"),un=o("PretrainedConfig"),gn=o(" from the path to a JSON file of parameters."),_n=d(),A=n("div"),v(ze.$$.fragment),bn=d(),Ae=n("p"),yn=o("Instantiate a "),tt=n("a"),vn=o("PretrainedConfig"),wn=o(" (or a derived class) from a pretrained model configuration."),$n=d(),v(se.$$.fragment),kn=d(),v(ie.$$.fragment),Pn=d(),de=n("div"),v(Oe.$$.fragment),Cn=d(),L=n("p"),En=o("From a "),It=n("code"),xn=o("pretrained_model_name_or_path"),Tn=o(`, resolve to a dictionary of parameters, to be used for instantiating a
`),ot=n("a"),Dn=o("PretrainedConfig"),jn=o(" using "),Lt=n("code"),zn=o("from_dict"),An=o("."),On=d(),V=n("div"),v(qe.$$.fragment),qn=d(),Se=n("p"),Sn=o(`Register this class with a given auto class. This should only be used for custom configurations as the ones in
the library are already mapped with `),Nt=n("code"),Fn=o("AutoConfig"),In=o("."),Ln=d(),v(le.$$.fragment),Nn=d(),ce=n("div"),v(Fe.$$.fragment),Wn=d(),U=n("p"),Mn=o("Save a configuration object to the directory "),Wt=n("code"),Vn=o("save_directory"),Bn=o(`, so that it can be re-loaded using the
`),rt=n("a"),Rn=o("from_pretrained()"),Un=o(" class method."),Jn=d(),fe=n("div"),v(Ie.$$.fragment),Hn=d(),Mt=n("p"),Gn=o("Serializes this instance to a Python dictionary."),Xn=d(),me=n("div"),v(Le.$$.fragment),Kn=d(),Vt=n("p"),Qn=o(`Removes all attributes from config which correspond to the default config attributes for better readability and
serializes to a Python dictionary.`),Yn=d(),he=n("div"),v(Ne.$$.fragment),Zn=d(),Bt=n("p"),ea=o("Save this instance to a JSON file."),ta=d(),pe=n("div"),v(We.$$.fragment),oa=d(),Rt=n("p"),ra=o("Serializes this instance to a JSON string."),na=d(),ue=n("div"),v(Me.$$.fragment),aa=d(),Ve=n("p"),sa=o("Updates attributes of this class with attributes from "),Ut=n("code"),ia=o("config_dict"),da=o("."),la=d(),O=n("div"),v(Be.$$.fragment),ca=d(),Re=n("p"),fa=o("Updates attributes of this class with attributes from "),Jt=n("code"),ma=o("update_str"),ha=o("."),pa=d(),J=n("p"),ua=o("The expected format is ints, floats and strings as is, and for booleans use "),Ht=n("code"),ga=o("true"),_a=o(" or "),Gt=n("code"),ba=o("false"),ya=o(`. For example:
\u201Cn_embd=10,resid_pdrop=0.2,scale_attn_weights=false,summary_type=cls_index\u201D`),va=d(),Xt=n("p"),wa=o("The keys to change have to already exist in the config object."),this.h()},l(i){const y=Ds('[data-svelte="svelte-1phssyn"]',document.head);f=a(y,"META",{name:!0,content:!0}),y.forEach(t),b=l(i),p=a(i,"H1",{class:!0});var Ue=s(p);u=a(Ue,"A",{id:!0,class:!0,href:!0});var Kt=s(u);E=a(Kt,"SPAN",{});var Qt=s(E);w(c.$$.fragment,Qt),Qt.forEach(t),Kt.forEach(t),_=l(Ue),q=a(Ue,"SPAN",{});var Yt=s(q);Do=r(Yt,"Configuration"),Yt.forEach(t),Ue.forEach(t),ao=l(i),H=a(i,"P",{});var Je=s(H);jo=r(Je,"The base class "),Ge=a(Je,"A",{href:!0});var ka=s(Ge);zo=r(ka,"PretrainedConfig"),ka.forEach(t),Ao=r(Je,` implements the common methods for loading/saving a configuration
either from a local file or directory, or from a pretrained model configuration provided by the library (downloaded
from HuggingFace\u2019s AWS S3 repository).`),Je.forEach(t),so=l(i),D=a(i,"P",{});var B=s(D);Oo=r(B,`Each derived config class implements model specific attributes. Common attributes present in all config classes are:
`),dt=a(B,"CODE",{});var Pa=s(dt);qo=r(Pa,"hidden_size"),Pa.forEach(t),So=r(B,", "),lt=a(B,"CODE",{});var Ca=s(lt);Fo=r(Ca,"num_attention_heads"),Ca.forEach(t),Io=r(B,", and "),ct=a(B,"CODE",{});var Ea=s(ct);Lo=r(Ea,"num_hidden_layers"),Ea.forEach(t),No=r(B,`. Text models further implement:
`),ft=a(B,"CODE",{});var xa=s(ft);Wo=r(xa,"vocab_size"),xa.forEach(t),Mo=r(B,"."),B.forEach(t),io=l(i),R=a(i,"H2",{class:!0});var fo=s(R);G=a(fo,"A",{id:!0,class:!0,href:!0});var Ta=s(G);mt=a(Ta,"SPAN",{});var Da=s(mt);w($e.$$.fragment,Da),Da.forEach(t),Ta.forEach(t),Vo=l(fo),ht=a(fo,"SPAN",{});var ja=s(ht);Bo=r(ja,"PretrainedConfig"),ja.forEach(t),fo.forEach(t),lo=l(i),m=a(i,"DIV",{class:!0});var h=s(m);w(ke.$$.fragment,h),Ro=l(h),pt=a(h,"P",{});var za=s(pt);Uo=r(za,`Base class for all configuration classes. Handles a few parameters common to all models\u2019 configurations as well as
methods for loading/downloading/saving configurations.`),za.forEach(t),Jo=l(h),w(X.$$.fragment,h),Ho=l(h),ut=a(h,"P",{});var Aa=s(ut);Go=r(Aa,"Class attributes (overridden by derived classes):"),Aa.forEach(t),Xo=l(h),S=a(h,"UL",{});var ge=s(S);W=a(ge,"LI",{});var He=s(W);gt=a(He,"STRONG",{});var Oa=s(gt);Ko=r(Oa,"model_type"),Oa.forEach(t),Qo=r(He," ("),_t=a(He,"CODE",{});var qa=s(_t);Yo=r(qa,"str"),qa.forEach(t),Zo=r(He,`) \u2014 An identifier for the model type, serialized into the JSON file, and used to recreate
the correct object in `),Xe=a(He,"A",{href:!0});var Sa=s(Xe);er=r(Sa,"AutoConfig"),Sa.forEach(t),tr=r(He,"."),He.forEach(t),or=l(ge),j=a(ge,"LI",{});var N=s(j);bt=a(N,"STRONG",{});var Fa=s(bt);rr=r(Fa,"is_composition"),Fa.forEach(t),nr=r(N," ("),yt=a(N,"CODE",{});var Ia=s(yt);ar=r(Ia,"bool"),Ia.forEach(t),sr=r(N,`) \u2014 Whether the config class is composed of multiple sub-configs. In this case the
config has to be initialized from two or more configs of type `),Ke=a(N,"A",{href:!0});var La=s(Ke);ir=r(La,"PretrainedConfig"),La.forEach(t),dr=r(N,` like:
`),Qe=a(N,"A",{href:!0});var Na=s(Qe);lr=r(Na,"EncoderDecoderConfig"),Na.forEach(t),cr=r(N," or "),Ye=a(N,"A",{href:!0});var Wa=s(Ye);fr=r(Wa,"~RagConfig"),Wa.forEach(t),mr=r(N,"."),N.forEach(t),hr=l(ge),K=a(ge,"LI",{});var Zt=s(K);vt=a(Zt,"STRONG",{});var Ma=s(vt);pr=r(Ma,"keys_to_ignore_at_inference"),Ma.forEach(t),ur=r(Zt," ("),wt=a(Zt,"CODE",{});var Va=s(wt);gr=r(Va,"List[str]"),Va.forEach(t),_r=r(Zt,`) \u2014 A list of keys to ignore by default when looking at dictionary
outputs of the model during inference.`),Zt.forEach(t),br=l(ge),Q=a(ge,"LI",{});var eo=s(Q);$t=a(eo,"STRONG",{});var Ba=s($t);yr=r(Ba,"attribute_map"),Ba.forEach(t),vr=r(eo," ("),kt=a(eo,"CODE",{});var Ra=s(kt);wr=r(Ra,"Dict[str, str]"),Ra.forEach(t),$r=r(eo,`) \u2014 A dict that maps model specific attribute names to the standardized
naming of attributes.`),eo.forEach(t),ge.forEach(t),kr=l(h),Pt=a(h,"P",{});var Ua=s(Pt);Pr=r(Ua,"Common attributes (present in all subclasses):"),Ua.forEach(t),Cr=l(h),F=a(h,"UL",{});var _e=s(F);Y=a(_e,"LI",{});var to=s(Y);Ct=a(to,"STRONG",{});var Ja=s(Ct);Er=r(Ja,"vocab_size"),Ja.forEach(t),xr=r(to," ("),Et=a(to,"CODE",{});var Ha=s(Et);Tr=r(Ha,"int"),Ha.forEach(t),Dr=r(to,`) \u2014 The number of tokens in the vocabulary, which is also the first dimension of the
embeddings matrix (this attribute may be missing for models that don\u2019t have a text modality like ViT).`),to.forEach(t),jr=l(_e),Z=a(_e,"LI",{});var oo=s(Z);xt=a(oo,"STRONG",{});var Ga=s(xt);zr=r(Ga,"hidden_size"),Ga.forEach(t),Ar=r(oo," ("),Tt=a(oo,"CODE",{});var Xa=s(Tt);Or=r(Xa,"int"),Xa.forEach(t),qr=r(oo,") \u2014 The hidden size of the model."),oo.forEach(t),Sr=l(_e),ee=a(_e,"LI",{});var ro=s(ee);Dt=a(ro,"STRONG",{});var Ka=s(Dt);Fr=r(Ka,"num_attention_heads"),Ka.forEach(t),Ir=r(ro," ("),jt=a(ro,"CODE",{});var Qa=s(jt);Lr=r(Qa,"int"),Qa.forEach(t),Nr=r(ro,`) \u2014 The number of attention heads used in the multi-head attention layers of the
model.`),ro.forEach(t),Wr=l(_e),te=a(_e,"LI",{});var no=s(te);zt=a(no,"STRONG",{});var Ya=s(zt);Mr=r(Ya,"num_hidden_layers"),Ya.forEach(t),Vr=r(no," ("),At=a(no,"CODE",{});var Za=s(At);Br=r(Za,"int"),Za.forEach(t),Rr=r(no,") \u2014 The number of blocks in the model."),no.forEach(t),_e.forEach(t),Ur=l(h),M=a(h,"DIV",{class:!0});var nt=s(M);w(Pe.$$.fragment,nt),Jr=l(nt),Ce=a(nt,"P",{});var mo=s(Ce);Hr=r(mo,`Upload the configuration file to the \u{1F917} Model Hub while synchronizing a local clone of the repo in
`),Ot=a(mo,"CODE",{});var es=s(Ot);Gr=r(es,"repo_path_or_name"),es.forEach(t),Xr=r(mo,"."),mo.forEach(t),Kr=l(nt),w(oe.$$.fragment,nt),nt.forEach(t),Qr=l(h),re=a(h,"DIV",{class:!0});var ho=s(re);w(Ee.$$.fragment,ho),Yr=l(ho),I=a(ho,"P",{});var be=s(I);Zr=r(be,"Checks whether the passed dictionary and its nested dicts have a "),qt=a(be,"EM",{});var ts=s(qt);en=r(ts,"torch_dtype"),ts.forEach(t),tn=r(be,` key and if it\u2019s not None,
converts torch.dtype to a string of just the type. For example, `),St=a(be,"CODE",{});var os=s(St);on=r(os,"torch.float32"),os.forEach(t),rn=r(be," get converted into "),Ft=a(be,"EM",{});var rs=s(Ft);nn=r(rs,"\u201Cfloat32\u201D"),rs.forEach(t),an=r(be,`
string, which can then be stored in the json format.`),be.forEach(t),ho.forEach(t),sn=l(h),ne=a(h,"DIV",{class:!0});var po=s(ne);w(xe.$$.fragment,po),dn=l(po),Te=a(po,"P",{});var uo=s(Te);ln=r(uo,"Instantiates a "),Ze=a(uo,"A",{href:!0});var ns=s(Ze);cn=r(ns,"PretrainedConfig"),ns.forEach(t),fn=r(uo," from a Python dictionary of parameters."),uo.forEach(t),po.forEach(t),mn=l(h),ae=a(h,"DIV",{class:!0});var go=s(ae);w(De.$$.fragment,go),hn=l(go),je=a(go,"P",{});var _o=s(je);pn=r(_o,"Instantiates a "),et=a(_o,"A",{href:!0});var as=s(et);un=r(as,"PretrainedConfig"),as.forEach(t),gn=r(_o," from the path to a JSON file of parameters."),_o.forEach(t),go.forEach(t),_n=l(h),A=a(h,"DIV",{class:!0});var ye=s(A);w(ze.$$.fragment,ye),bn=l(ye),Ae=a(ye,"P",{});var bo=s(Ae);yn=r(bo,"Instantiate a "),tt=a(bo,"A",{href:!0});var ss=s(tt);vn=r(ss,"PretrainedConfig"),ss.forEach(t),wn=r(bo," (or a derived class) from a pretrained model configuration."),bo.forEach(t),$n=l(ye),w(se.$$.fragment,ye),kn=l(ye),w(ie.$$.fragment,ye),ye.forEach(t),Pn=l(h),de=a(h,"DIV",{class:!0});var yo=s(de);w(Oe.$$.fragment,yo),Cn=l(yo),L=a(yo,"P",{});var ve=s(L);En=r(ve,"From a "),It=a(ve,"CODE",{});var is=s(It);xn=r(is,"pretrained_model_name_or_path"),is.forEach(t),Tn=r(ve,`, resolve to a dictionary of parameters, to be used for instantiating a
`),ot=a(ve,"A",{href:!0});var ds=s(ot);Dn=r(ds,"PretrainedConfig"),ds.forEach(t),jn=r(ve," using "),Lt=a(ve,"CODE",{});var ls=s(Lt);zn=r(ls,"from_dict"),ls.forEach(t),An=r(ve,"."),ve.forEach(t),yo.forEach(t),On=l(h),V=a(h,"DIV",{class:!0});var at=s(V);w(qe.$$.fragment,at),qn=l(at),Se=a(at,"P",{});var vo=s(Se);Sn=r(vo,`Register this class with a given auto class. This should only be used for custom configurations as the ones in
the library are already mapped with `),Nt=a(vo,"CODE",{});var cs=s(Nt);Fn=r(cs,"AutoConfig"),cs.forEach(t),In=r(vo,"."),vo.forEach(t),Ln=l(at),w(le.$$.fragment,at),at.forEach(t),Nn=l(h),ce=a(h,"DIV",{class:!0});var wo=s(ce);w(Fe.$$.fragment,wo),Wn=l(wo),U=a(wo,"P",{});var st=s(U);Mn=r(st,"Save a configuration object to the directory "),Wt=a(st,"CODE",{});var fs=s(Wt);Vn=r(fs,"save_directory"),fs.forEach(t),Bn=r(st,`, so that it can be re-loaded using the
`),rt=a(st,"A",{href:!0});var ms=s(rt);Rn=r(ms,"from_pretrained()"),ms.forEach(t),Un=r(st," class method."),st.forEach(t),wo.forEach(t),Jn=l(h),fe=a(h,"DIV",{class:!0});var $o=s(fe);w(Ie.$$.fragment,$o),Hn=l($o),Mt=a($o,"P",{});var hs=s(Mt);Gn=r(hs,"Serializes this instance to a Python dictionary."),hs.forEach(t),$o.forEach(t),Xn=l(h),me=a(h,"DIV",{class:!0});var ko=s(me);w(Le.$$.fragment,ko),Kn=l(ko),Vt=a(ko,"P",{});var ps=s(Vt);Qn=r(ps,`Removes all attributes from config which correspond to the default config attributes for better readability and
serializes to a Python dictionary.`),ps.forEach(t),ko.forEach(t),Yn=l(h),he=a(h,"DIV",{class:!0});var Po=s(he);w(Ne.$$.fragment,Po),Zn=l(Po),Bt=a(Po,"P",{});var us=s(Bt);ea=r(us,"Save this instance to a JSON file."),us.forEach(t),Po.forEach(t),ta=l(h),pe=a(h,"DIV",{class:!0});var Co=s(pe);w(We.$$.fragment,Co),oa=l(Co),Rt=a(Co,"P",{});var gs=s(Rt);ra=r(gs,"Serializes this instance to a JSON string."),gs.forEach(t),Co.forEach(t),na=l(h),ue=a(h,"DIV",{class:!0});var Eo=s(ue);w(Me.$$.fragment,Eo),aa=l(Eo),Ve=a(Eo,"P",{});var xo=s(Ve);sa=r(xo,"Updates attributes of this class with attributes from "),Ut=a(xo,"CODE",{});var _s=s(Ut);ia=r(_s,"config_dict"),_s.forEach(t),da=r(xo,"."),xo.forEach(t),Eo.forEach(t),la=l(h),O=a(h,"DIV",{class:!0});var we=s(O);w(Be.$$.fragment,we),ca=l(we),Re=a(we,"P",{});var To=s(Re);fa=r(To,"Updates attributes of this class with attributes from "),Jt=a(To,"CODE",{});var bs=s(Jt);ma=r(bs,"update_str"),bs.forEach(t),ha=r(To,"."),To.forEach(t),pa=l(we),J=a(we,"P",{});var it=s(J);ua=r(it,"The expected format is ints, floats and strings as is, and for booleans use "),Ht=a(it,"CODE",{});var ys=s(Ht);ga=r(ys,"true"),ys.forEach(t),_a=r(it," or "),Gt=a(it,"CODE",{});var vs=s(Gt);ba=r(vs,"false"),vs.forEach(t),ya=r(it,`. For example:
\u201Cn_embd=10,resid_pdrop=0.2,scale_attn_weights=false,summary_type=cls_index\u201D`),it.forEach(t),va=l(we),Xt=a(we,"P",{});var ws=s(Xt);wa=r(ws,"The keys to change have to already exist in the config object."),ws.forEach(t),we.forEach(t),h.forEach(t),this.h()},h(){g(f,"name","hf:doc:metadata"),g(f,"content",JSON.stringify(Is)),g(u,"id","configuration"),g(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(u,"href","#configuration"),g(p,"class","relative group"),g(Ge,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),g(G,"id","transformers.PretrainedConfig"),g(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(G,"href","#transformers.PretrainedConfig"),g(R,"class","relative group"),g(Xe,"href","/docs/transformers/pr_17196/en/model_doc/auto#transformers.AutoConfig"),g(Ke,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),g(Qe,"href","/docs/transformers/pr_17196/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"),g(Ye,"href","/docs/transformers/pr_17196/en/model_doc/rag#transformers.RagConfig"),g(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ze,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),g(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(et,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),g(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(tt,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),g(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ot,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),g(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig.from_pretrained"),g(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(m,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,y){e(document.head,f),x(i,b,y),x(i,p,y),e(p,u),e(u,E),$(c,E,null),e(p,_),e(p,q),e(q,Do),x(i,ao,y),x(i,H,y),e(H,jo),e(H,Ge),e(Ge,zo),e(H,Ao),x(i,so,y),x(i,D,y),e(D,Oo),e(D,dt),e(dt,qo),e(D,So),e(D,lt),e(lt,Fo),e(D,Io),e(D,ct),e(ct,Lo),e(D,No),e(D,ft),e(ft,Wo),e(D,Mo),x(i,io,y),x(i,R,y),e(R,G),e(G,mt),$($e,mt,null),e(R,Vo),e(R,ht),e(ht,Bo),x(i,lo,y),x(i,m,y),$(ke,m,null),e(m,Ro),e(m,pt),e(pt,Uo),e(m,Jo),$(X,m,null),e(m,Ho),e(m,ut),e(ut,Go),e(m,Xo),e(m,S),e(S,W),e(W,gt),e(gt,Ko),e(W,Qo),e(W,_t),e(_t,Yo),e(W,Zo),e(W,Xe),e(Xe,er),e(W,tr),e(S,or),e(S,j),e(j,bt),e(bt,rr),e(j,nr),e(j,yt),e(yt,ar),e(j,sr),e(j,Ke),e(Ke,ir),e(j,dr),e(j,Qe),e(Qe,lr),e(j,cr),e(j,Ye),e(Ye,fr),e(j,mr),e(S,hr),e(S,K),e(K,vt),e(vt,pr),e(K,ur),e(K,wt),e(wt,gr),e(K,_r),e(S,br),e(S,Q),e(Q,$t),e($t,yr),e(Q,vr),e(Q,kt),e(kt,wr),e(Q,$r),e(m,kr),e(m,Pt),e(Pt,Pr),e(m,Cr),e(m,F),e(F,Y),e(Y,Ct),e(Ct,Er),e(Y,xr),e(Y,Et),e(Et,Tr),e(Y,Dr),e(F,jr),e(F,Z),e(Z,xt),e(xt,zr),e(Z,Ar),e(Z,Tt),e(Tt,Or),e(Z,qr),e(F,Sr),e(F,ee),e(ee,Dt),e(Dt,Fr),e(ee,Ir),e(ee,jt),e(jt,Lr),e(ee,Nr),e(F,Wr),e(F,te),e(te,zt),e(zt,Mr),e(te,Vr),e(te,At),e(At,Br),e(te,Rr),e(m,Ur),e(m,M),$(Pe,M,null),e(M,Jr),e(M,Ce),e(Ce,Hr),e(Ce,Ot),e(Ot,Gr),e(Ce,Xr),e(M,Kr),$(oe,M,null),e(m,Qr),e(m,re),$(Ee,re,null),e(re,Yr),e(re,I),e(I,Zr),e(I,qt),e(qt,en),e(I,tn),e(I,St),e(St,on),e(I,rn),e(I,Ft),e(Ft,nn),e(I,an),e(m,sn),e(m,ne),$(xe,ne,null),e(ne,dn),e(ne,Te),e(Te,ln),e(Te,Ze),e(Ze,cn),e(Te,fn),e(m,mn),e(m,ae),$(De,ae,null),e(ae,hn),e(ae,je),e(je,pn),e(je,et),e(et,un),e(je,gn),e(m,_n),e(m,A),$(ze,A,null),e(A,bn),e(A,Ae),e(Ae,yn),e(Ae,tt),e(tt,vn),e(Ae,wn),e(A,$n),$(se,A,null),e(A,kn),$(ie,A,null),e(m,Pn),e(m,de),$(Oe,de,null),e(de,Cn),e(de,L),e(L,En),e(L,It),e(It,xn),e(L,Tn),e(L,ot),e(ot,Dn),e(L,jn),e(L,Lt),e(Lt,zn),e(L,An),e(m,On),e(m,V),$(qe,V,null),e(V,qn),e(V,Se),e(Se,Sn),e(Se,Nt),e(Nt,Fn),e(Se,In),e(V,Ln),$(le,V,null),e(m,Nn),e(m,ce),$(Fe,ce,null),e(ce,Wn),e(ce,U),e(U,Mn),e(U,Wt),e(Wt,Vn),e(U,Bn),e(U,rt),e(rt,Rn),e(U,Un),e(m,Jn),e(m,fe),$(Ie,fe,null),e(fe,Hn),e(fe,Mt),e(Mt,Gn),e(m,Xn),e(m,me),$(Le,me,null),e(me,Kn),e(me,Vt),e(Vt,Qn),e(m,Yn),e(m,he),$(Ne,he,null),e(he,Zn),e(he,Bt),e(Bt,ea),e(m,ta),e(m,pe),$(We,pe,null),e(pe,oa),e(pe,Rt),e(Rt,ra),e(m,na),e(m,ue),$(Me,ue,null),e(ue,aa),e(ue,Ve),e(Ve,sa),e(Ve,Ut),e(Ut,ia),e(Ve,da),e(m,la),e(m,O),$(Be,O,null),e(O,ca),e(O,Re),e(Re,fa),e(Re,Jt),e(Jt,ma),e(Re,ha),e(O,pa),e(O,J),e(J,ua),e(J,Ht),e(Ht,ga),e(J,_a),e(J,Gt),e(Gt,ba),e(J,ya),e(O,va),e(O,Xt),e(Xt,wa),co=!0},p(i,[y]){const Ue={};y&2&&(Ue.$$scope={dirty:y,ctx:i}),X.$set(Ue);const Kt={};y&2&&(Kt.$$scope={dirty:y,ctx:i}),oe.$set(Kt);const Qt={};y&2&&(Qt.$$scope={dirty:y,ctx:i}),se.$set(Qt);const Yt={};y&2&&(Yt.$$scope={dirty:y,ctx:i}),ie.$set(Yt);const Je={};y&2&&(Je.$$scope={dirty:y,ctx:i}),le.$set(Je)},i(i){co||(k(c.$$.fragment,i),k($e.$$.fragment,i),k(ke.$$.fragment,i),k(X.$$.fragment,i),k(Pe.$$.fragment,i),k(oe.$$.fragment,i),k(Ee.$$.fragment,i),k(xe.$$.fragment,i),k(De.$$.fragment,i),k(ze.$$.fragment,i),k(se.$$.fragment,i),k(ie.$$.fragment,i),k(Oe.$$.fragment,i),k(qe.$$.fragment,i),k(le.$$.fragment,i),k(Fe.$$.fragment,i),k(Ie.$$.fragment,i),k(Le.$$.fragment,i),k(Ne.$$.fragment,i),k(We.$$.fragment,i),k(Me.$$.fragment,i),k(Be.$$.fragment,i),co=!0)},o(i){P(c.$$.fragment,i),P($e.$$.fragment,i),P(ke.$$.fragment,i),P(X.$$.fragment,i),P(Pe.$$.fragment,i),P(oe.$$.fragment,i),P(Ee.$$.fragment,i),P(xe.$$.fragment,i),P(De.$$.fragment,i),P(ze.$$.fragment,i),P(se.$$.fragment,i),P(ie.$$.fragment,i),P(Oe.$$.fragment,i),P(qe.$$.fragment,i),P(le.$$.fragment,i),P(Fe.$$.fragment,i),P(Ie.$$.fragment,i),P(Le.$$.fragment,i),P(Ne.$$.fragment,i),P(We.$$.fragment,i),P(Me.$$.fragment,i),P(Be.$$.fragment,i),co=!1},d(i){t(f),i&&t(b),i&&t(p),C(c),i&&t(ao),i&&t(H),i&&t(so),i&&t(D),i&&t(io),i&&t(R),C($e),i&&t(lo),i&&t(m),C(ke),C(X),C(Pe),C(oe),C(Ee),C(xe),C(De),C(ze),C(se),C(ie),C(Oe),C(qe),C(le),C(Fe),C(Ie),C(Le),C(Ne),C(We),C(Me),C(Be)}}}const Is={local:"configuration",sections:[{local:"transformers.PretrainedConfig",title:"PretrainedConfig"}],title:"Configuration"};function Ls(z){return js(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Us extends Es{constructor(f){super();xs(this,f,Ls,Fs,Ts,{})}}export{Us as default,Is as metadata};
