import{S as nh,i as rh,s as ah,e as r,k as h,w as M,t,M as sh,c as a,d as n,m,a as s,x as E,h as o,b as d,G as e,g,y as x,q as L,o as k,B as q,v as ih,L as lh}from"../../chunks/vendor-hf-doc-builder.js";import{T as ch}from"../../chunks/Tip-hf-doc-builder.js";import{D as Y}from"../../chunks/Docstring-hf-doc-builder.js";import{C as oh}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Re}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as dh}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function hh(Ue){let v,D,w,y,z;return y=new oh({props:{code:`from transformers import GreaseLMConfig, GreaseLMModel

# Initializing a greaselm configuration
configuration = GreaseLMConfig()

# Initializing a model from the configuration
model = GreaseLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GreaseLMConfig, GreaseLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a greaselm configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GreaseLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GreaseLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){v=r("p"),D=t("Examples:"),w=h(),M(y.$$.fragment)},l(_){v=a(_,"P",{});var G=s(v);D=o(G,"Examples:"),G.forEach(n),w=m(_),E(y.$$.fragment,_)},m(_,G){g(_,v,G),e(v,D),g(_,w,G),x(y,_,G),z=!0},p:lh,i(_){z||(L(y.$$.fragment,_),z=!0)},o(_){k(y.$$.fragment,_),z=!1},d(_){_&&n(v),_&&n(w),q(y,_)}}}function mh(Ue){let v,D,w,y,z;return{c(){v=r("p"),D=t("Although the recipe for forward pass needs to be defined within this function, one should call the "),w=r("code"),y=t("Module"),z=t(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(_){v=a(_,"P",{});var G=s(v);D=o(G,"Although the recipe for forward pass needs to be defined within this function, one should call the "),w=a(G,"CODE",{});var Z=s(w);y=o(Z,"Module"),Z.forEach(n),z=o(G,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),G.forEach(n)},m(_,G){g(_,v,G),e(v,D),e(v,w),e(w,y),e(v,z)},d(_){_&&n(v)}}}function ph(Ue){let v,D,w,y,z,_,G,Z,Sn,sn,Q,ee,ut,me,Qn,gt,Bn,ln,te,Rn,pe,Un,Hn,cn,He,Kn,dn,Ke,Wn,hn,We,Xn,mn,fe,pn,O,Vn,ue,Jn,Yn,ge,Zn,er,fn,B,oe,_t,_e,tr,vt,or,un,$,ve,nr,R,rr,Xe,ar,sr,be,ir,lr,cr,U,dr,Ve,hr,mr,Je,pr,fr,ur,H,gr,Ye,_r,vr,Ze,br,wr,yr,l,Mr,bt,Er,xr,wt,Lr,kr,yt,qr,Gr,Mt,$r,Tr,Et,Cr,Ar,xt,Pr,zr,Lt,Dr,jr,kt,Or,Fr,qt,Nr,Ir,Gt,Sr,Qr,$t,Br,Rr,Tt,Ur,Hr,Ct,Kr,Wr,At,Xr,Vr,Pt,Jr,Yr,zt,Zr,ea,Dt,ta,oa,jt,na,ra,Ot,aa,sa,Ft,ia,la,Nt,ca,da,It,ha,ma,St,pa,fa,Qt,ua,ga,Bt,_a,va,et,ba,wa,Rt,ya,Ma,Ut,Ea,xa,Ht,La,ka,Kt,qa,Ga,Wt,$a,Ta,Xt,Ca,Aa,Vt,Pa,za,Jt,Da,ja,Yt,Oa,Fa,Zt,Na,Ia,eo,Sa,Qa,to,Ba,Ra,we,Ua,Ha,oo,Ka,Wa,no,Xa,Va,ye,Ja,Ya,ro,Za,es,ao,ts,os,so,ns,rs,io,as,ss,lo,is,ls,co,cs,ds,ho,hs,ms,mo,ps,fs,po,us,gs,fo,_s,vs,uo,bs,ws,go,ys,Ms,Es,ne,gn,K,re,_o,Me,xs,vo,Ls,_n,C,Ee,ks,bo,qs,Gs,xe,$s,tt,Ts,Cs,As,wo,Ps,zs,ae,Le,Ds,yo,js,vn,W,se,Mo,ke,Os,Eo,Fs,bn,A,qe,Ns,Ge,Is,ot,Ss,Qs,Bs,nt,rt,Rs,Us,Hs,xo,Ks,Ws,ie,$e,Xs,Lo,Vs,wn,X,le,ko,Te,Js,qo,Ys,yn,b,Ce,Zs,Go,ei,ti,Ae,oi,at,ni,ri,ai,Pe,si,ze,ii,li,ci,$o,di,hi,To,mi,pi,st,fi,De,ui,gi,F,je,_i,V,vi,it,bi,wi,Co,yi,Mi,Ei,ce,Mn,J,de,Ao,Oe,xi,Po,Li,En,P,Fe,ki,zo,qi,Gi,Ne,$i,lt,Ti,Ci,Ai,Ie,Pi,Se,zi,Di,ji,he,Qe,Oi,p,Fi,Do,Ni,Ii,jo,Si,Qi,Oo,Bi,Ri,Fo,Ui,Hi,No,Ki,Wi,Io,Xi,Vi,So,Ji,Yi,Qo,Zi,el,Bo,tl,ol,Ro,nl,rl,Uo,al,sl,Ho,il,ll,Ko,cl,dl,Wo,hl,ml,Xo,pl,fl,Vo,ul,gl,Jo,_l,vl,Yo,bl,wl,Zo,yl,Ml,en,El,xl,tn,Ll,kl,on,ql,Gl,nn,$l,Tl,rn,Cl,Al,xn;return _=new Re({}),me=new Re({}),fe=new oh({props:{code:`import torch
from transformers import GreaseLMProcessor, GreaseLMForMultipleChoice

device = "cuda" if torch.cuda.is_available() else "cpu"


def index_to_answer(index, choices=["A", "B", "C", "D", "E"]):
    return choices[index]


processor = GreaseLMProcessor.from_pretrained("Xikun/greaselm-csqa")

model = GreaseLMForMultipleChoice.from_pretrained("Xikun/greaselm-csqa")
model.to(device)

common_sense_qa_example = {
    "answerKey": "A",
    "id": "1afa02df02c908a558b4036e80242fac",
    "question": {
        "question_concept": "revolving door",
        "choices": [
            {"label": "A", "text": "bank"},
            {"label": "B", "text": "library"},
            {"label": "C", "text": "department store"},
            {"label": "D", "text": "mall"},
            {"label": "E", "text": "new york"},
        ],
        "stem": "A revolving door is convenient for two direction travel, but it also serves as a security measure at a what?",
    },
}

batch = processor(common_sense_qa_example)

output = model(**batch.to(device))
labels = batch["labels"]

results = output.logits.argmax(1) == labels
for idx, r in enumerate(results):
    model_answer = index_to_answer(output.logits.argmax(1)[idx].item())
    correct_answer = index_to_answer(labels[idx].item())
    if r:
        print(f"For the question {idx}, model answered correctly, answer is {model_answer}")
    else:
        print(f"For the question {idx}, model answered incorrectly, answer is not {model_answer} but {correct_answer}")`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GreaseLMProcessor, GreaseLMForMultipleChoice

device = <span class="hljs-string">&quot;cuda&quot;</span> <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;cpu&quot;</span>


<span class="hljs-keyword">def</span> <span class="hljs-title function_">index_to_answer</span>(<span class="hljs-params">index, choices=[<span class="hljs-string">&quot;A&quot;</span>, <span class="hljs-string">&quot;B&quot;</span>, <span class="hljs-string">&quot;C&quot;</span>, <span class="hljs-string">&quot;D&quot;</span>, <span class="hljs-string">&quot;E&quot;</span>]</span>):
    <span class="hljs-keyword">return</span> choices[index]


processor = GreaseLMProcessor.from_pretrained(<span class="hljs-string">&quot;Xikun/greaselm-csqa&quot;</span>)

model = GreaseLMForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;Xikun/greaselm-csqa&quot;</span>)
model.to(device)

common_sense_qa_example = {
    <span class="hljs-string">&quot;answerKey&quot;</span>: <span class="hljs-string">&quot;A&quot;</span>,
    <span class="hljs-string">&quot;id&quot;</span>: <span class="hljs-string">&quot;1afa02df02c908a558b4036e80242fac&quot;</span>,
    <span class="hljs-string">&quot;question&quot;</span>: {
        <span class="hljs-string">&quot;question_concept&quot;</span>: <span class="hljs-string">&quot;revolving door&quot;</span>,
        <span class="hljs-string">&quot;choices&quot;</span>: [
            {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;A&quot;</span>, <span class="hljs-string">&quot;text&quot;</span>: <span class="hljs-string">&quot;bank&quot;</span>},
            {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;B&quot;</span>, <span class="hljs-string">&quot;text&quot;</span>: <span class="hljs-string">&quot;library&quot;</span>},
            {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;C&quot;</span>, <span class="hljs-string">&quot;text&quot;</span>: <span class="hljs-string">&quot;department store&quot;</span>},
            {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;D&quot;</span>, <span class="hljs-string">&quot;text&quot;</span>: <span class="hljs-string">&quot;mall&quot;</span>},
            {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;E&quot;</span>, <span class="hljs-string">&quot;text&quot;</span>: <span class="hljs-string">&quot;new york&quot;</span>},
        ],
        <span class="hljs-string">&quot;stem&quot;</span>: <span class="hljs-string">&quot;A revolving door is convenient for two direction travel, but it also serves as a security measure at a what?&quot;</span>,
    },
}

batch = processor(common_sense_qa_example)

output = model(**batch.to(device))
labels = batch[<span class="hljs-string">&quot;labels&quot;</span>]

results = output.logits.argmax(<span class="hljs-number">1</span>) == labels
<span class="hljs-keyword">for</span> idx, r <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(results):
    model_answer = index_to_answer(output.logits.argmax(<span class="hljs-number">1</span>)[idx].item())
    correct_answer = index_to_answer(labels[idx].item())
    <span class="hljs-keyword">if</span> r:
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;For the question <span class="hljs-subst">{idx}</span>, model answered correctly, answer is <span class="hljs-subst">{model_answer}</span>&quot;</span>)
    <span class="hljs-keyword">else</span>:
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;For the question <span class="hljs-subst">{idx}</span>, model answered incorrectly, answer is not <span class="hljs-subst">{model_answer}</span> but <span class="hljs-subst">{correct_answer}</span>&quot;</span>)`}}),_e=new Re({}),ve=new Y({props:{name:"class transformers.GreaseLMConfig",anchor:"transformers.GreaseLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"num_gnn_layers",val:" = 5"},{name:"num_node_types",val:" = 4"},{name:"num_edge_types",val:" = 38"},{name:"concept_dim",val:" = 200"},{name:"gnn_hidden_size",val:" = 200"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the GreaseLM model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel">GreaseLMModel</a>`,name:"vocab_size"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/configuration_greaselm.py#L31"}}),ne=new dh({props:{anchor:"transformers.GreaseLMConfig.example",$$slots:{default:[hh]},$$scope:{ctx:Ue}}}),Me=new Re({}),Ee=new Y({props:{name:"class transformers.GreaseLMFeatureExtractor",anchor:"transformers.GreaseLMFeatureExtractor",parameters:[{name:"cpnet_vocab_path",val:": typing.Union[pathlib.Path, str] = 'concept.txt'"},{name:"pattern_path",val:": typing.Union[pathlib.Path, str] = 'matcher_patterns.json'"},{name:"pruned_graph_path",val:": typing.Union[pathlib.Path, str] = 'conceptnet_en_pruned.pickle.gz'"},{name:"score_model",val:": typing.Union[pathlib.Path, str] = 'roberta-large'"},{name:"device",val:": str = 'cuda'"},{name:"cxt_node_connects_all",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMFeatureExtractor.cpnet_vocab_path",description:`<strong>cpnet_vocab_path</strong> (<code>Union[Path, str]</code>,  <em>optional</em>, defaults to <code>&quot;concept.txt&quot;</code>) &#x2014;
Path to the conceptnet vocabulary file.`,name:"cpnet_vocab_path"},{anchor:"transformers.GreaseLMFeatureExtractor.patterns_path",description:`<strong>patterns_path</strong> (<code>Union[Path, str]</code>,  <em>optional</em>, defaults to <code>&quot;matcher_patterns.json&quot;</code>) &#x2014;
Path to the matcher patterns file.`,name:"patterns_path"},{anchor:"transformers.GreaseLMFeatureExtractor.pruned_graph_path",description:`<strong>pruned_graph_path</strong> (<code>Union[Path, str]</code>, <em>optional</em>, defaults to <code>&quot;conceptnet_en_pruned.pickle.gz&quot;</code>) &#x2014;
Path to the conceptnet graph file encoded as dict of dicts.`,name:"pruned_graph_path"},{anchor:"transformers.GreaseLMFeatureExtractor.score_model",description:`<strong>score_model</strong> (<code>Union[Path, str]</code>, <em>optional</em>, defaults to <code>&quot;roberta-large&quot;</code>) &#x2014;
Path to the pretrained model to use for concept scoring.`,name:"score_model"},{anchor:"transformers.GreaseLMFeatureExtractor.device",description:`<strong>device</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;cuda&quot;</code>) &#x2014;
Device to use for the score model.`,name:"device"},{anchor:"transformers.GreaseLMFeatureExtractor.ctx_node_connects_all",description:`<strong>ctx_node_connects_all</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to connect all nodes to the context node. False by default.`,name:"ctx_node_connects_all"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/feature_extraction_greaselm.py#L287"}}),Le=new Y({props:{name:"__call__",anchor:"transformers.GreaseLMFeatureExtractor.__call__",parameters:[{name:"question_answer_example",val:": typing.Union[typing.Dict[str, typing.Any], typing.List[typing.Dict[str, typing.Any]]]"},{name:"entailed_question_answer_example",val:": typing.Union[typing.Dict[str, typing.Any], typing.List[typing.Dict[str, typing.Any]]]"},{name:"num_choices",val:": int = 5"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = 'pt'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMFeatureExtractor.__call__.question_answer_example",description:`<strong>question_answer_example</strong> (<code>List[Dict[str, Any]]</code>) &#x2014;
A question-answer example or a batch of question-answer examples from CommonSenseQA or OpenBookQA
datasets.`,name:"question_answer_example"},{anchor:"transformers.GreaseLMFeatureExtractor.__call__.entailed_question_answer_example",description:`<strong>entailed_question_answer_example</strong> (<code>List[Dict[str, Any]]</code>) &#x2014;
An entailed question-answer example or a batch of question-answer examples from CommonSenseQA or
OpenBookQA datasets.`,name:"entailed_question_answer_example"},{anchor:"transformers.GreaseLMFeatureExtractor.__call__.num_choices",description:`<strong>num_choices</strong> (<code>int</code>, <em>optional</em>, defaults to <code>5</code>) &#x2014;
Number of choices to in the input example`,name:"num_choices"},{anchor:"transformers.GreaseLMFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_17146/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
Currently, only &#x201C;pt&#x201D; is supported.`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/feature_extraction_greaselm.py#L348",returnDescription:`
<p>A <code>dict</code> with the following fields:</p>
<ul>
<li><code>concept_ids</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, max_node_num)</code>):
A tensor containing concept ids for each answer choice.</li>
<li><code>node_type_ids</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, max_node_num)</code>):
A tensor containing node type ids for each answer choice.</li>
<li><code>node_scores</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, max_node_num, 1)</code>):
A tensor containing LM node scores for each answer choice.</li>
<li><code>adj_lengths</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>):
A tensor containing the graph adjacency lengths for each answer choice.</li>
<li><code>special_nodes_mask</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, max_node_num)</code>):
A tensor containing special node mask for each answer choice.</li>
<li><code>edge_index</code>: (<code>list</code> of size <code>(batch_size, num_choices)</code>):
A list of edge indices for each answer choice where each entry is tensor[2, E]</li>
<li><code>edge_type</code>: (<code>list</code> of size <code>(batch_size, num_choices)</code>):
A list of edge types for each answer choice where each entry is tensor[E,]</li>
</ul>
`,returnType:`
<p><code>dict</code></p>
`}}),ke=new Re({}),qe=new Y({props:{name:"class transformers.GreaseLMProcessor",anchor:"transformers.GreaseLMProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""},{name:"max_seq_length",val:" = 128"}],parametersDescription:[{anchor:"transformers.GreaseLMProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMFeatureExtractor">GreaseLMFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.GreaseLMProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/roberta#transformers.RobertaTokenizerFast">RobertaTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/processing_greaselm.py#L27"}}),$e=new Y({props:{name:"__call__",anchor:"transformers.GreaseLMProcessor.__call__",parameters:[{name:"question_answer_example",val:": typing.Union[typing.Dict[str, typing.Any], typing.List[typing.Dict[str, typing.Any]]]"},{name:"question_answer_converter",val:": typing.Callable[[typing.Dict[str, typing.Any]], typing.Dict[str, typing.Any]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMProcessor.__call__.question_answer_example",description:`<strong>question_answer_example</strong> (&#x2018;Union[Dict[str, Any], List[Dict[str, Any]]]&#x2019;) &#x2014;
The input question answer example. It can be a single example or a list of examples. See CommonSenseQA
and/or OpenBookQA examples for more information.</p>
<p>CommonSenseQA <a href="https://allenai.org/data/commonsenseqa" rel="nofollow">https://allenai.org/data/commonsenseqa</a> OpenBookQA <a href="https://allenai.org/data/open-book-qa" rel="nofollow">https://allenai.org/data/open-book-qa</a>`,name:"question_answer_example"},{anchor:"transformers.GreaseLMProcessor.__call__.question_answer_converter",description:`<strong>question_answer_converter</strong> (&#x2018;Callable[[Dict[str, Any]], Dict[str, Any]]&#x2019;) &#x2014;
The converter function that converts the question-answer example into an entailed format compatible with
the GreaseLMProcessor. See <code>convert_openbookqa_to_entailment</code> and <code>convert_commonsenseqa_to_entailment</code> in
<code>utils_greaselm.py</code> for more information.</p>
<p>Note: there is no need to use <code>question_answer_converter</code> converter for CommonSenseQA and OpenBookQA as the
GreaseLMProcessor supports these two formats.`,name:"question_answer_converter"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/processing_greaselm.py#L58",returnDescription:`
<p>A <code>dict</code> with the following fields:</p>
<ul>
<li><code>input_ids</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, seq_len)</code>): The token ids for the
input to the language model.</li>
<li><code>token_type_ids</code>: (<code>torch.LongTensor</code> of shape (<code>batch_size, num_choices, seq_len)</code>): Sequence token
types for the inputs.</li>
<li><code>attention_mask</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, seq_len)</code>: Mask to avoid
performing attention on padding token indices.</li>
<li><code>special_tokens_mask</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, seq_len)</code>): Mask to
avoid performing attention on padding token.</li>
<li><code>labels</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>): Labels for computing the cross-entropy
classification loss.</li>
<li><code>concept_ids</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, max_node_num)</code>): A tensor
containing concept ids for each answer choice.</li>
<li><code>node_type_ids</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, max_node_num)</code>): A tensor
containing node type ids for each answer choice.</li>
<li><code>node_scores</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, max_node_num, 1)</code>): A tensor
containing LM node scores for each answer choice.</li>
<li><code>adj_lengths</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>): A tensor containing the graph
adjacency lengths for each answer choice.</li>
<li><code>special_nodes_mask</code>: (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, max_node_num)</code>): A tensor
containing special node mask for each answer choice.</li>
<li><code>edge_index</code>: (<code>list</code> of size <code>(batch_size, num_choices)</code>): A list of edge indices for each answer
choice where each entry is tensor[2, E]</li>
<li><code>edge_type</code>: (<code>list</code> of size <code>(batch_size, num_choices)</code>): A list of edge types for each answer choice
where each entry is tensor[E,]</li>
</ul>
`,returnType:`
<p><code>dict</code></p>
`}}),Te=new Re({}),Ce=new Y({props:{name:"class transformers.GreaseLMModel",anchor:"transformers.GreaseLMModel",parameters:[{name:"config",val:""},{name:"pretrained_concept_emb_file",val:" = None"},{name:"freeze_ent_emb",val:" = True"},{name:"add_pooling_layer",val:" = True"},{name:"dropout",val:" = 0.2"}],parametersDescription:[{anchor:"transformers.GreaseLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig">GreaseLMConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2118"}}),je=new Y({props:{name:"forward",anchor:"transformers.GreaseLMModel.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:""},{name:"token_type_ids",val:""},{name:"special_tokens_mask",val:""},{name:"concept_ids",val:""},{name:"node_type_ids",val:""},{name:"node_scores",val:""},{name:"adj_lengths",val:""},{name:"special_nodes_mask",val:""},{name:"edge_index",val:""},{name:"edge_type",val:""},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"emb_data",val:" = None"},{name:"output_attentions",val:" = False"},{name:"output_hidden_states",val:" = True"}],parametersDescription:[{anchor:"transformers.GreaseLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, seq_len)</em>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using [<em>RobertaTokenizer</em>]. See [<em>PreTrainedTokenizer.encode</em>] and
[<em>PreTrainedTokenizer.<strong>call</strong></em>] for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GreaseLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<em>torch.FloatTensor</em> of shape <em>(batch_size, seq_len)</em>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <em>[0, 1]</em>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GreaseLMModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, seq_len)</em>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <em>[0,
1]</em>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GreaseLMModel.forward.special_tokens_mask",description:`<strong>special_tokens_mask</strong> (<em>torch.FloatTensor</em> of shape <em>(batch_size, seq_len)</em>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <em>[0, 1]</em>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"special_tokens_mask"},{anchor:"transformers.GreaseLMModel.forward.concept_ids",description:`<strong>concept_ids</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, number_of_choices, max_node_num)</em>) &#x2014;
Resolved conceptnet ids.`,name:"concept_ids"},{anchor:"transformers.GreaseLMModel.forward.node_type_ids",description:`<strong>node_type_ids</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, number_of_nodes)</em>) &#x2014;
0 == question entity; 1 == answer choice entity; 2 == other node; 3 == context node`,name:"node_type_ids"},{anchor:"transformers.GreaseLMModel.forward.node_scores",description:`<strong>node_scores</strong> (<em>torch.FloatTensor</em> of shape <em>(batch_size, number_of_choices, max_node_num, 1)</em>) &#x2014;
LM relevancy scores for each resolved conceptnet id`,name:"node_scores"},{anchor:"transformers.GreaseLMModel.forward.adj_lengths",description:`<strong>adj_lengths</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, number_of_choices)</em>) &#x2014;
Adjacency matrix lengths for each batch sample.`,name:"adj_lengths"},{anchor:"transformers.GreaseLMModel.forward.special_nodes_mask",description:`<strong>special_nodes_mask</strong> (<em>torch.BoolTensor</em> of shape <em>(batch_size, number_of_nodes)</em>) &#x2014;
Mask identifying special nodes in the graph (interaction node in the GreaseLM paper).`,name:"special_nodes_mask"},{anchor:"transformers.GreaseLMModel.forward.edge_index",description:`<strong>edge_index</strong> (<em>torch.tensor(2, E)</em>) &#x2014;
Adjacency list where E is the total number of edges in the particular graph.`,name:"edge_index"},{anchor:"transformers.GreaseLMModel.forward.edge_type",description:`<strong>edge_type</strong> (<em>torch.tensor(E)</em>) &#x2014;
Adjacency list types torch.tensor(E, ) where E is the total number of edges in the particular graph.`,name:"edge_type"},{anchor:"transformers.GreaseLMModel.forward.position_ids",description:`<strong>position_ids</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, seq_len)</em>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings.`,name:"position_ids"},{anchor:"transformers.GreaseLMModel.forward.head_mask",description:`<strong>head_mask</strong> (list of shape <em>(num_hidden_layers)</em>) &#x2014;
Head mask shape [num_hidden_layers]`,name:"head_mask"},{anchor:"transformers.GreaseLMModel.forward.emb_data",description:`<strong>emb_data</strong> (<em>torch.tensor(batch_size, number_of_choices, max_node_num, emb_dim)</em>) &#x2014;
Contextual embdeddings`,name:"emb_data"},{anchor:"transformers.GreaseLMModel.forward.cache_output(bool,",description:`<strong>cache_output(<em>bool</em>,</strong> <em>optional</em>, defaults to False) &#x2014;
Whether to cache the output of the language model.`,name:"cache_output(bool,"},{anchor:"transformers.GreaseLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<em>bool</em>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <em>attentions</em> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GreaseLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<em>bool</em>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <em>hidden_states</em> under returned tensors for
more detail.`,name:"output_hidden_states"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2237"}}),ce=new ch({props:{$$slots:{default:[mh]},$$scope:{ctx:Ue}}}),Oe=new Re({}),Fe=new Y({props:{name:"class transformers.GreaseLMForMultipleChoice",anchor:"transformers.GreaseLMForMultipleChoice",parameters:[{name:"config",val:""},{name:"pretrained_concept_emb_file",val:" = None"}],parametersDescription:[{anchor:"transformers.GreaseLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig">GreaseLMConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2467"}}),Qe=new Y({props:{name:"forward",anchor:"transformers.GreaseLMForMultipleChoice.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:""},{name:"token_type_ids",val:""},{name:"special_tokens_mask",val:""},{name:"concept_ids",val:""},{name:"node_type_ids",val:""},{name:"node_scores",val:""},{name:"adj_lengths",val:""},{name:"special_nodes_mask",val:""},{name:"edge_index",val:""},{name:"edge_type",val:""},{name:"labels",val:" = None"},{name:"emb_data",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2501"}}),{c(){v=r("meta"),D=h(),w=r("h1"),y=r("a"),z=r("span"),M(_.$$.fragment),G=h(),Z=r("span"),Sn=t("GreaseLM"),sn=h(),Q=r("h2"),ee=r("a"),ut=r("span"),M(me.$$.fragment),Qn=h(),gt=r("span"),Bn=t("Overview"),ln=h(),te=r("p"),Rn=t("The GreaseLM model was proposed in "),pe=r("a"),Un=t("GreaseLM: Graph REASoning Enhanced Language Models for Question Answering"),Hn=t(` by Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec.
GreaseLM enables the fusion and exchange of information from the language model and the knowledge graph (KG) in multiple
layers of its architecture. GreaseLM takes as input the natural language context and a graph neural network that reasons
over the KG, ultimately demonstrating superior results in commonsense reasoning.`),cn=h(),He=r("p"),Kn=t("The abstract from the paper is the following:"),dn=h(),Ke=r("p"),Wn=t(`Answering complex questions about textual narratives requires reasoning over both stated context and the world
knowledge that underlies it. However, pretrained language models (LM), the foundation of most modern QA systems,
do not robustly represent latent relationships between concepts, which is necessary for reasoning. While knowledge
graphs (KG) are often used to augment LMs with structured representations of world knowledge, it remains an open
question how to effectively fuse and reason over the KG representations and the language context, which provides
situational constraints and nuances. In this work, we propose GreaseLM, a new model that fuses encoded representations
from pretrained LMs and graph neural networks over multiple layers of modality interaction operations. Information
from both modalities propagates to the other, allowing language context representations to be grounded by structured
world knowledge, and allowing linguistic nuances (e.g., negation, hedging) in the context to inform the graph
representations of knowledge. Our results on three benchmarks in the commonsense reasoning (i.e., CommonsenseQA,
OpenbookQA) and medical question answering (i.e., MedQA-USMLE) domains demonstrate that GreaseLM can more reliably
answer questions that require reasoning over both situational constraints and structured knowledge, even outperforming
models 8x larger.`),hn=h(),We=r("p"),Xn=t("Tips:"),mn=h(),M(fe.$$.fragment),pn=h(),O=r("p"),Vn=t("This model was contributed by "),ue=r("a"),Jn=t("vblagoje"),Yn=t(`.
The original code can be found `),ge=r("a"),Zn=t("here"),er=t("."),fn=h(),B=r("h2"),oe=r("a"),_t=r("span"),M(_e.$$.fragment),tr=h(),vt=r("span"),or=t("GreaseLMConfig"),un=h(),$=r("div"),M(ve.$$.fragment),nr=h(),R=r("p"),rr=t("This is the configuration class to store the configuration of a "),Xe=r("a"),ar=t("GreaseLMModel"),sr=t(`. It is used to instantiate a
GreaseLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GreaseLM
`),be=r("a"),ir=t("Xikun/greaselm-csqa"),lr=t(" architecture."),cr=h(),U=r("p"),dr=t("Configuration objects inherit from "),Ve=r("a"),hr=t("PretrainedConfig"),mr=t(` and can be used to control the model outputs. Read the
documentation from `),Je=r("a"),pr=t("PretrainedConfig"),fr=t(" for more information."),ur=h(),H=r("p"),gr=t("The "),Ye=r("a"),_r=t("GreaseLMConfig"),vr=t(" class is identical to "),Ze=r("a"),br=t("BertConfig"),wr=t(" with a few additional attributes."),yr=h(),l=r("p"),Mr=t("hidden_size ("),bt=r("code"),Er=t("int"),xr=t(", "),wt=r("em"),Lr=t("optional"),kr=t(`, defaults to 768):
Dimensionality of the encoder layers and the pooler layer.
num_hidden_layers (`),yt=r("code"),qr=t("int"),Gr=t(", "),Mt=r("em"),$r=t("optional"),Tr=t(`, defaults to 12):
Number of hidden layers in the Transformer encoder.
num_attention_heads (`),Et=r("code"),Cr=t("int"),Ar=t(", "),xt=r("em"),Pr=t("optional"),zr=t(`, defaults to 12):
Number of attention heads for each attention layer in the Transformer encoder.
intermediate_size (`),Lt=r("code"),Dr=t("int"),jr=t(", "),kt=r("em"),Or=t("optional"),Fr=t(`, defaults to 3072):
Dimensionality of the \u201Cintermediate\u201D (often named feed-forward) layer in the Transformer encoder.
hidden_act (`),qt=r("code"),Nr=t("str"),Ir=t(" or "),Gt=r("code"),Sr=t("Callable"),Qr=t(", "),$t=r("em"),Br=t("optional"),Rr=t(", defaults to "),Tt=r("code"),Ur=t('"gelu"'),Hr=t(`):
The non-linear activation function (function or string) in the encoder and pooler. If string, `),Ct=r("code"),Kr=t('"gelu"'),Wr=t(`,
`),At=r("code"),Xr=t('"relu"'),Vr=t(", "),Pt=r("code"),Jr=t('"silu"'),Yr=t(" and "),zt=r("code"),Zr=t('"gelu_new"'),ea=t(` are supported.
hidden_dropout_prob (`),Dt=r("code"),ta=t("float"),oa=t(", "),jt=r("em"),na=t("optional"),ra=t(`, defaults to 0.1):
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.
attention_probs_dropout_prob (`),Ot=r("code"),aa=t("float"),sa=t(", "),Ft=r("em"),ia=t("optional"),la=t(`, defaults to 0.1):
The dropout ratio for the attention probabilities.
max_position_embeddings (`),Nt=r("code"),ca=t("int"),da=t(", "),It=r("em"),ha=t("optional"),ma=t(`, defaults to 512):
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).
type_vocab_size (`),St=r("code"),pa=t("int"),fa=t(", "),Qt=r("em"),ua=t("optional"),ga=t(`, defaults to 2):
The vocabulary size of the `),Bt=r("code"),_a=t("token_type_ids"),va=t(" passed when calling "),et=r("a"),ba=t("GreaseLMModel"),wa=t(`.
initializer_range (`),Rt=r("code"),ya=t("float"),Ma=t(", "),Ut=r("em"),Ea=t("optional"),xa=t(`, defaults to 0.02):
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
layer_norm_eps (`),Ht=r("code"),La=t("float"),ka=t(", "),Kt=r("em"),qa=t("optional"),Ga=t(`, defaults to 1e-12):
The epsilon used by the layer normalization layers.
position_embedding_type (`),Wt=r("code"),$a=t("str"),Ta=t(", "),Xt=r("em"),Ca=t("optional"),Aa=t(", defaults to "),Vt=r("code"),Pa=t('"absolute"'),za=t(`):
Type of position embedding. Choose one of `),Jt=r("code"),Da=t('"absolute"'),ja=t(", "),Yt=r("code"),Oa=t('"relative_key"'),Fa=t(", "),Zt=r("code"),Na=t('"relative_key_query"'),Ia=t(`. For
positional embeddings use `),eo=r("code"),Sa=t('"absolute"'),Qa=t(". For more information on "),to=r("code"),Ba=t('"relative_key"'),Ra=t(`, please refer to
`),we=r("a"),Ua=t("Self-Attention with Relative Position Representations (Shaw et al.)"),Ha=t(`.
For more information on `),oo=r("code"),Ka=t('"relative_key_query"'),Wa=t(", please refer to "),no=r("em"),Xa=t("Method 4"),Va=t(" in "),ye=r("a"),Ja=t(`Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)`),Ya=t(`.
classifier_dropout (`),ro=r("code"),Za=t("float"),es=t(", "),ao=r("em"),ts=t("optional"),os=t(`):
The dropout ratio for the classification head.
num_gnn_layers (`),so=r("code"),ns=t("int"),rs=t(", "),io=r("em"),as=t("optional"),ss=t(`, defaults to 5):
Number of Graph Neural Network (GNN) layers.
num_node_types (`),lo=r("code"),is=t("int"),ls=t(", "),co=r("em"),cs=t("optional"),ds=t(`, defaults to 4):
Number of node types in the graph.
num_edge_types (`),ho=r("code"),hs=t("int"),ms=t(", "),mo=r("em"),ps=t("optional"),fs=t(`, defaults to 38):
Number of edge types in the graph.
concept_dim (`),po=r("code"),us=t("int"),gs=t(", "),fo=r("em"),_s=t("optional"),vs=t(`, defaults to 200):
Dimension of the concept embeddings.
gnn_hidden_size (`),uo=r("code"),bs=t("int"),ws=t(", "),go=r("em"),ys=t("optional"),Ms=t(`, defaults to 200):
Hidden size of the Graph Neural Network (GNN).`),Es=h(),M(ne.$$.fragment),gn=h(),K=r("h2"),re=r("a"),_o=r("span"),M(Me.$$.fragment),xs=h(),vo=r("span"),Ls=t("GreaseLMFeatureExtractor"),_n=h(),C=r("div"),M(Ee.$$.fragment),ks=h(),bo=r("p"),qs=t("Constructs a GreaseLM feature extractor."),Gs=h(),xe=r("p"),$s=t("This feature extractor inherits from "),tt=r("a"),Ts=t("FeatureExtractionMixin"),Cs=t(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),As=h(),wo=r("p"),Ps=t(`[\u2018GreaseLMFeatureExtractor\u2019] converts CommonSenseQA or OpenBookQA question-answer example(s) into a batch of graph
encodings.`),zs=h(),ae=r("div"),M(Le.$$.fragment),Ds=h(),yo=r("p"),js=t("Main method to encode a question-answer example(s) into a graph representation ready for model input."),vn=h(),W=r("h2"),se=r("a"),Mo=r("span"),M(ke.$$.fragment),Os=h(),Eo=r("span"),Fs=t("GreaseLMProcessor"),bn=h(),A=r("div"),M(qe.$$.fragment),Ns=h(),Ge=r("p"),Is=t("Constructs a GreaseLM processor which wraps a "),ot=r("a"),Ss=t("GreaseLMFeatureExtractor"),Qs=t(" and a [\u2018RobertaTokenizer`] into a single\nprocessor."),Bs=h(),nt=r("p"),rt=r("a"),Rs=t("GreaseLMProcessor"),Us=t(" offers all the functionalities you need to prepare data for the model."),Hs=h(),xo=r("p"),Ks=t(`It uses [\u2018GreaseLMFeatureExtractor\u2019] to convert CommonSenseQA or OpenBookQA question-answer example(s) into a batch
of graph encodings and then encodes examples into a batch of language model encodings, finally combining graph and
language model encodings into a model ready input.`),Ws=h(),ie=r("div"),M($e.$$.fragment),Xs=h(),Lo=r("p"),Vs=t(`Main method that takes question-answer example(s) and encodes them into a batch of language model encodings and
a batch of graph encodings combining the two encodings ready for GreaseLM model input`),wn=h(),X=r("h2"),le=r("a"),ko=r("span"),M(Te.$$.fragment),Js=h(),qo=r("span"),Ys=t("GreaseLMModel"),yn=h(),b=r("div"),M(Ce.$$.fragment),Zs=h(),Go=r("p"),ei=t("The bare greaselm Model transformer outputting raw hidden-states without any specific head on top."),ti=h(),Ae=r("p"),oi=t("This model inherits from "),at=r("a"),ni=t("PreTrainedModel"),ri=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ai=h(),Pe=r("p"),si=t("This model is also a PyTorch "),ze=r("a"),ii=t("torch.nn.Module"),li=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ci=h(),$o=r("p"),di=t(`Answering complex questions about textual narratives requires reasoning over both stated context and the world
knowledge that underlies it. However, pretrained language models (LM), the foundation of most modern QA systems, do
not robustly represent latent relationships between concepts, which is necessary for reasoning. While knowledge
graphs (KG) are often used to augment LMs with structured representations of world knowledge, it remains an open
question how to effectively fuse and reason over the KG representations and the language context, which provides
situational constraints and nuances. In this work, we propose GreaseLM, a new model that fuses encoded
representations from pretrained LMs and graph neural networks over multiple layers of modality interaction
operations. Information from both modalities propagates to the other, allowing language context representations to
be grounded by structured world knowledge, and allowing linguistic nuances (e.g., negation, hedging) in the context
to inform the graph representations of knowledge.`),hi=h(),To=r("p"),mi=t("Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec"),pi=h(),st=r("p"),fi=t("For more details see: "),De=r("a"),ui=t("https://arxiv.org/abs/2201.08860"),gi=h(),F=r("div"),M(je.$$.fragment),_i=h(),V=r("p"),vi=t("The "),it=r("a"),bi=t("GreaseLMModel"),wi=t(" forward method, overrides the "),Co=r("code"),yi=t("__call__"),Mi=t(" special method."),Ei=h(),M(ce.$$.fragment),Mn=h(),J=r("h2"),de=r("a"),Ao=r("span"),M(Oe.$$.fragment),xi=h(),Po=r("span"),Li=t("GreaseLMForMultipleChoice"),En=h(),P=r("div"),M(Fe.$$.fragment),ki=h(),zo=r("p"),qi=t("GreaseLM Model with a multiple choice classification head on top for CommonsSenseQA and OpenBookQA tasks."),Gi=h(),Ne=r("p"),$i=t("This model inherits from "),lt=r("a"),Ti=t("PreTrainedModel"),Ci=t(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ai=h(),Ie=r("p"),Pi=t("This model is also a PyTorch "),Se=r("a"),zi=t("torch.nn.Module"),Di=t(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ji=h(),he=r("div"),M(Qe.$$.fragment),Oi=h(),p=r("p"),Fi=t(`:param input_ids:
(`),Do=r("code"),Ni=t("torch.LongTensor"),Ii=t(" of shape "),jo=r("code"),Si=t("(batch_size, number_of_choices, seq_len)"),Qi=t(`):
Input ids for the language model.
:param attention_mask:
(`),Oo=r("code"),Bi=t("torch.LongTensor"),Ri=t(" of shape "),Fo=r("code"),Ui=t("(batch_size, number_of_choices, seq_len)"),Hi=t(`):
Attention mask for the language model.
:param token_type_ids:
(`),No=r("code"),Ki=t("torch.LongTensor"),Wi=t(" of shape "),Io=r("code"),Xi=t("(batch_size, number_of_choices, seq_len)"),Vi=t(`):
Token type ids for the language model.
:param special_tokens_mask:
(`),So=r("code"),Ji=t("torch.LongTensor"),Yi=t(" of shape "),Qo=r("code"),Zi=t("(batch_size, number_of_choices, seq_len)"),el=t(`):
Output mask for the language model.
:param concept_ids:
(`),Bo=r("code"),tl=t("torch.LongTensor"),ol=t(" of shape "),Ro=r("code"),nl=t("(batch_size, number_of_choices, max_node_num)"),rl=t(`):
Resolved conceptnet ids.
:param node_type_ids:
(`),Uo=r("code"),al=t("torch.LongTensor"),sl=t(" of shape "),Ho=r("code"),il=t("(batch_size, number_of_choices, max_node_num)"),ll=t(`):
Conceptnet id types where 0 == question entity; 1 == answer choice entity; 2 == other node; 3 ==
context node
:param node_scores:
(`),Ko=r("code"),cl=t("torch.FloatTensor"),dl=t(" of shape "),Wo=r("code"),hl=t("(batch_size, number_of_choices, max_node_num, 1)"),ml=t(`):
LM relevancy scores for each resolved conceptnet id.
:param adj_lengths:
(`),Xo=r("code"),pl=t("torch.LongTensor"),fl=t(" of shape "),Vo=r("code"),ul=t("(batch_size, number_of_choices)"),gl=t(`):
Adjacency matrix lengths for each batch sample.
:param special_nodes_mask:
(`),Jo=r("code"),_l=t("torch.BoolTensor"),vl=t(" of shape "),Yo=r("code"),bl=t("(batch_size, number_of_choices, max_node_num)"),wl=t(`):
Mask identifying special nodes in the graph (interaction node in the GreaseLM paper).
:param edge_index:
torch.tensor(2, E)) where E is the total number of edges in the particular graph.
:param edge_type:
torch.tensor(E, ) where E is the total number of edges in the particular graph.
:param labels:
(`),Zo=r("em"),yl=t("torch.LongTensor"),Ml=t(" of shape "),en=r("em"),El=t("(batch_size,)"),xl=t(", "),tn=r("em"),Ll=t("optional"),kl=t(`):
Labels for computing the multiple choice classification loss. Indices should be in `),on=r("em"),ql=t(`[0, \u2026,
num_choices-1]`),Gl=t(" where "),nn=r("em"),$l=t("num_choices"),Tl=t(` is the size of the second dimension of the input tensors. (See
`),rn=r("em"),Cl=t("input_ids"),Al=t(` above)
:param emb_data:
torch.tensor(batch_size, number_of_choices, max_node_num, emb_dim) Contextualized embedding data.`),this.h()},l(i){const u=sh('[data-svelte="svelte-1phssyn"]',document.head);v=a(u,"META",{name:!0,content:!0}),u.forEach(n),D=m(i),w=a(i,"H1",{class:!0});var Be=s(w);y=a(Be,"A",{id:!0,class:!0,href:!0});var an=s(y);z=a(an,"SPAN",{});var Dl=s(z);E(_.$$.fragment,Dl),Dl.forEach(n),an.forEach(n),G=m(Be),Z=a(Be,"SPAN",{});var jl=s(Z);Sn=o(jl,"GreaseLM"),jl.forEach(n),Be.forEach(n),sn=m(i),Q=a(i,"H2",{class:!0});var Ln=s(Q);ee=a(Ln,"A",{id:!0,class:!0,href:!0});var Ol=s(ee);ut=a(Ol,"SPAN",{});var Fl=s(ut);E(me.$$.fragment,Fl),Fl.forEach(n),Ol.forEach(n),Qn=m(Ln),gt=a(Ln,"SPAN",{});var Nl=s(gt);Bn=o(Nl,"Overview"),Nl.forEach(n),Ln.forEach(n),ln=m(i),te=a(i,"P",{});var kn=s(te);Rn=o(kn,"The GreaseLM model was proposed in "),pe=a(kn,"A",{href:!0,rel:!0});var Il=s(pe);Un=o(Il,"GreaseLM: Graph REASoning Enhanced Language Models for Question Answering"),Il.forEach(n),Hn=o(kn,` by Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec.
GreaseLM enables the fusion and exchange of information from the language model and the knowledge graph (KG) in multiple
layers of its architecture. GreaseLM takes as input the natural language context and a graph neural network that reasons
over the KG, ultimately demonstrating superior results in commonsense reasoning.`),kn.forEach(n),cn=m(i),He=a(i,"P",{});var Sl=s(He);Kn=o(Sl,"The abstract from the paper is the following:"),Sl.forEach(n),dn=m(i),Ke=a(i,"P",{});var Ql=s(Ke);Wn=o(Ql,`Answering complex questions about textual narratives requires reasoning over both stated context and the world
knowledge that underlies it. However, pretrained language models (LM), the foundation of most modern QA systems,
do not robustly represent latent relationships between concepts, which is necessary for reasoning. While knowledge
graphs (KG) are often used to augment LMs with structured representations of world knowledge, it remains an open
question how to effectively fuse and reason over the KG representations and the language context, which provides
situational constraints and nuances. In this work, we propose GreaseLM, a new model that fuses encoded representations
from pretrained LMs and graph neural networks over multiple layers of modality interaction operations. Information
from both modalities propagates to the other, allowing language context representations to be grounded by structured
world knowledge, and allowing linguistic nuances (e.g., negation, hedging) in the context to inform the graph
representations of knowledge. Our results on three benchmarks in the commonsense reasoning (i.e., CommonsenseQA,
OpenbookQA) and medical question answering (i.e., MedQA-USMLE) domains demonstrate that GreaseLM can more reliably
answer questions that require reasoning over both situational constraints and structured knowledge, even outperforming
models 8x larger.`),Ql.forEach(n),hn=m(i),We=a(i,"P",{});var Bl=s(We);Xn=o(Bl,"Tips:"),Bl.forEach(n),mn=m(i),E(fe.$$.fragment,i),pn=m(i),O=a(i,"P",{});var ct=s(O);Vn=o(ct,"This model was contributed by "),ue=a(ct,"A",{href:!0,rel:!0});var Rl=s(ue);Jn=o(Rl,"vblagoje"),Rl.forEach(n),Yn=o(ct,`.
The original code can be found `),ge=a(ct,"A",{href:!0,rel:!0});var Ul=s(ge);Zn=o(Ul,"here"),Ul.forEach(n),er=o(ct,"."),ct.forEach(n),fn=m(i),B=a(i,"H2",{class:!0});var qn=s(B);oe=a(qn,"A",{id:!0,class:!0,href:!0});var Hl=s(oe);_t=a(Hl,"SPAN",{});var Kl=s(_t);E(_e.$$.fragment,Kl),Kl.forEach(n),Hl.forEach(n),tr=m(qn),vt=a(qn,"SPAN",{});var Wl=s(vt);or=o(Wl,"GreaseLMConfig"),Wl.forEach(n),qn.forEach(n),un=m(i),$=a(i,"DIV",{class:!0});var j=s($);E(ve.$$.fragment,j),nr=m(j),R=a(j,"P",{});var dt=s(R);rr=o(dt,"This is the configuration class to store the configuration of a "),Xe=a(dt,"A",{href:!0});var Xl=s(Xe);ar=o(Xl,"GreaseLMModel"),Xl.forEach(n),sr=o(dt,`. It is used to instantiate a
GreaseLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GreaseLM
`),be=a(dt,"A",{href:!0,rel:!0});var Vl=s(be);ir=o(Vl,"Xikun/greaselm-csqa"),Vl.forEach(n),lr=o(dt," architecture."),dt.forEach(n),cr=m(j),U=a(j,"P",{});var ht=s(U);dr=o(ht,"Configuration objects inherit from "),Ve=a(ht,"A",{href:!0});var Jl=s(Ve);hr=o(Jl,"PretrainedConfig"),Jl.forEach(n),mr=o(ht,` and can be used to control the model outputs. Read the
documentation from `),Je=a(ht,"A",{href:!0});var Yl=s(Je);pr=o(Yl,"PretrainedConfig"),Yl.forEach(n),fr=o(ht," for more information."),ht.forEach(n),ur=m(j),H=a(j,"P",{});var mt=s(H);gr=o(mt,"The "),Ye=a(mt,"A",{href:!0});var Zl=s(Ye);_r=o(Zl,"GreaseLMConfig"),Zl.forEach(n),vr=o(mt," class is identical to "),Ze=a(mt,"A",{href:!0});var ec=s(Ze);br=o(ec,"BertConfig"),ec.forEach(n),wr=o(mt," with a few additional attributes."),mt.forEach(n),yr=m(j),l=a(j,"P",{});var c=s(l);Mr=o(c,"hidden_size ("),bt=a(c,"CODE",{});var tc=s(bt);Er=o(tc,"int"),tc.forEach(n),xr=o(c,", "),wt=a(c,"EM",{});var oc=s(wt);Lr=o(oc,"optional"),oc.forEach(n),kr=o(c,`, defaults to 768):
Dimensionality of the encoder layers and the pooler layer.
num_hidden_layers (`),yt=a(c,"CODE",{});var nc=s(yt);qr=o(nc,"int"),nc.forEach(n),Gr=o(c,", "),Mt=a(c,"EM",{});var rc=s(Mt);$r=o(rc,"optional"),rc.forEach(n),Tr=o(c,`, defaults to 12):
Number of hidden layers in the Transformer encoder.
num_attention_heads (`),Et=a(c,"CODE",{});var ac=s(Et);Cr=o(ac,"int"),ac.forEach(n),Ar=o(c,", "),xt=a(c,"EM",{});var sc=s(xt);Pr=o(sc,"optional"),sc.forEach(n),zr=o(c,`, defaults to 12):
Number of attention heads for each attention layer in the Transformer encoder.
intermediate_size (`),Lt=a(c,"CODE",{});var ic=s(Lt);Dr=o(ic,"int"),ic.forEach(n),jr=o(c,", "),kt=a(c,"EM",{});var lc=s(kt);Or=o(lc,"optional"),lc.forEach(n),Fr=o(c,`, defaults to 3072):
Dimensionality of the \u201Cintermediate\u201D (often named feed-forward) layer in the Transformer encoder.
hidden_act (`),qt=a(c,"CODE",{});var cc=s(qt);Nr=o(cc,"str"),cc.forEach(n),Ir=o(c," or "),Gt=a(c,"CODE",{});var dc=s(Gt);Sr=o(dc,"Callable"),dc.forEach(n),Qr=o(c,", "),$t=a(c,"EM",{});var hc=s($t);Br=o(hc,"optional"),hc.forEach(n),Rr=o(c,", defaults to "),Tt=a(c,"CODE",{});var mc=s(Tt);Ur=o(mc,'"gelu"'),mc.forEach(n),Hr=o(c,`):
The non-linear activation function (function or string) in the encoder and pooler. If string, `),Ct=a(c,"CODE",{});var pc=s(Ct);Kr=o(pc,'"gelu"'),pc.forEach(n),Wr=o(c,`,
`),At=a(c,"CODE",{});var fc=s(At);Xr=o(fc,'"relu"'),fc.forEach(n),Vr=o(c,", "),Pt=a(c,"CODE",{});var uc=s(Pt);Jr=o(uc,'"silu"'),uc.forEach(n),Yr=o(c," and "),zt=a(c,"CODE",{});var gc=s(zt);Zr=o(gc,'"gelu_new"'),gc.forEach(n),ea=o(c,` are supported.
hidden_dropout_prob (`),Dt=a(c,"CODE",{});var _c=s(Dt);ta=o(_c,"float"),_c.forEach(n),oa=o(c,", "),jt=a(c,"EM",{});var vc=s(jt);na=o(vc,"optional"),vc.forEach(n),ra=o(c,`, defaults to 0.1):
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.
attention_probs_dropout_prob (`),Ot=a(c,"CODE",{});var bc=s(Ot);aa=o(bc,"float"),bc.forEach(n),sa=o(c,", "),Ft=a(c,"EM",{});var wc=s(Ft);ia=o(wc,"optional"),wc.forEach(n),la=o(c,`, defaults to 0.1):
The dropout ratio for the attention probabilities.
max_position_embeddings (`),Nt=a(c,"CODE",{});var yc=s(Nt);ca=o(yc,"int"),yc.forEach(n),da=o(c,", "),It=a(c,"EM",{});var Mc=s(It);ha=o(Mc,"optional"),Mc.forEach(n),ma=o(c,`, defaults to 512):
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).
type_vocab_size (`),St=a(c,"CODE",{});var Ec=s(St);pa=o(Ec,"int"),Ec.forEach(n),fa=o(c,", "),Qt=a(c,"EM",{});var xc=s(Qt);ua=o(xc,"optional"),xc.forEach(n),ga=o(c,`, defaults to 2):
The vocabulary size of the `),Bt=a(c,"CODE",{});var Lc=s(Bt);_a=o(Lc,"token_type_ids"),Lc.forEach(n),va=o(c," passed when calling "),et=a(c,"A",{href:!0});var kc=s(et);ba=o(kc,"GreaseLMModel"),kc.forEach(n),wa=o(c,`.
initializer_range (`),Rt=a(c,"CODE",{});var qc=s(Rt);ya=o(qc,"float"),qc.forEach(n),Ma=o(c,", "),Ut=a(c,"EM",{});var Gc=s(Ut);Ea=o(Gc,"optional"),Gc.forEach(n),xa=o(c,`, defaults to 0.02):
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
layer_norm_eps (`),Ht=a(c,"CODE",{});var $c=s(Ht);La=o($c,"float"),$c.forEach(n),ka=o(c,", "),Kt=a(c,"EM",{});var Tc=s(Kt);qa=o(Tc,"optional"),Tc.forEach(n),Ga=o(c,`, defaults to 1e-12):
The epsilon used by the layer normalization layers.
position_embedding_type (`),Wt=a(c,"CODE",{});var Cc=s(Wt);$a=o(Cc,"str"),Cc.forEach(n),Ta=o(c,", "),Xt=a(c,"EM",{});var Ac=s(Xt);Ca=o(Ac,"optional"),Ac.forEach(n),Aa=o(c,", defaults to "),Vt=a(c,"CODE",{});var Pc=s(Vt);Pa=o(Pc,'"absolute"'),Pc.forEach(n),za=o(c,`):
Type of position embedding. Choose one of `),Jt=a(c,"CODE",{});var zc=s(Jt);Da=o(zc,'"absolute"'),zc.forEach(n),ja=o(c,", "),Yt=a(c,"CODE",{});var Dc=s(Yt);Oa=o(Dc,'"relative_key"'),Dc.forEach(n),Fa=o(c,", "),Zt=a(c,"CODE",{});var jc=s(Zt);Na=o(jc,'"relative_key_query"'),jc.forEach(n),Ia=o(c,`. For
positional embeddings use `),eo=a(c,"CODE",{});var Oc=s(eo);Sa=o(Oc,'"absolute"'),Oc.forEach(n),Qa=o(c,". For more information on "),to=a(c,"CODE",{});var Fc=s(to);Ba=o(Fc,'"relative_key"'),Fc.forEach(n),Ra=o(c,`, please refer to
`),we=a(c,"A",{href:!0,rel:!0});var Nc=s(we);Ua=o(Nc,"Self-Attention with Relative Position Representations (Shaw et al.)"),Nc.forEach(n),Ha=o(c,`.
For more information on `),oo=a(c,"CODE",{});var Ic=s(oo);Ka=o(Ic,'"relative_key_query"'),Ic.forEach(n),Wa=o(c,", please refer to "),no=a(c,"EM",{});var Sc=s(no);Xa=o(Sc,"Method 4"),Sc.forEach(n),Va=o(c," in "),ye=a(c,"A",{href:!0,rel:!0});var Qc=s(ye);Ja=o(Qc,`Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)`),Qc.forEach(n),Ya=o(c,`.
classifier_dropout (`),ro=a(c,"CODE",{});var Bc=s(ro);Za=o(Bc,"float"),Bc.forEach(n),es=o(c,", "),ao=a(c,"EM",{});var Rc=s(ao);ts=o(Rc,"optional"),Rc.forEach(n),os=o(c,`):
The dropout ratio for the classification head.
num_gnn_layers (`),so=a(c,"CODE",{});var Uc=s(so);ns=o(Uc,"int"),Uc.forEach(n),rs=o(c,", "),io=a(c,"EM",{});var Hc=s(io);as=o(Hc,"optional"),Hc.forEach(n),ss=o(c,`, defaults to 5):
Number of Graph Neural Network (GNN) layers.
num_node_types (`),lo=a(c,"CODE",{});var Kc=s(lo);is=o(Kc,"int"),Kc.forEach(n),ls=o(c,", "),co=a(c,"EM",{});var Wc=s(co);cs=o(Wc,"optional"),Wc.forEach(n),ds=o(c,`, defaults to 4):
Number of node types in the graph.
num_edge_types (`),ho=a(c,"CODE",{});var Xc=s(ho);hs=o(Xc,"int"),Xc.forEach(n),ms=o(c,", "),mo=a(c,"EM",{});var Vc=s(mo);ps=o(Vc,"optional"),Vc.forEach(n),fs=o(c,`, defaults to 38):
Number of edge types in the graph.
concept_dim (`),po=a(c,"CODE",{});var Jc=s(po);us=o(Jc,"int"),Jc.forEach(n),gs=o(c,", "),fo=a(c,"EM",{});var Yc=s(fo);_s=o(Yc,"optional"),Yc.forEach(n),vs=o(c,`, defaults to 200):
Dimension of the concept embeddings.
gnn_hidden_size (`),uo=a(c,"CODE",{});var Zc=s(uo);bs=o(Zc,"int"),Zc.forEach(n),ws=o(c,", "),go=a(c,"EM",{});var ed=s(go);ys=o(ed,"optional"),ed.forEach(n),Ms=o(c,`, defaults to 200):
Hidden size of the Graph Neural Network (GNN).`),c.forEach(n),Es=m(j),E(ne.$$.fragment,j),j.forEach(n),gn=m(i),K=a(i,"H2",{class:!0});var Gn=s(K);re=a(Gn,"A",{id:!0,class:!0,href:!0});var td=s(re);_o=a(td,"SPAN",{});var od=s(_o);E(Me.$$.fragment,od),od.forEach(n),td.forEach(n),xs=m(Gn),vo=a(Gn,"SPAN",{});var nd=s(vo);Ls=o(nd,"GreaseLMFeatureExtractor"),nd.forEach(n),Gn.forEach(n),_n=m(i),C=a(i,"DIV",{class:!0});var N=s(C);E(Ee.$$.fragment,N),ks=m(N),bo=a(N,"P",{});var rd=s(bo);qs=o(rd,"Constructs a GreaseLM feature extractor."),rd.forEach(n),Gs=m(N),xe=a(N,"P",{});var $n=s(xe);$s=o($n,"This feature extractor inherits from "),tt=a($n,"A",{href:!0});var ad=s(tt);Ts=o(ad,"FeatureExtractionMixin"),ad.forEach(n),Cs=o($n,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),$n.forEach(n),As=m(N),wo=a(N,"P",{});var sd=s(wo);Ps=o(sd,`[\u2018GreaseLMFeatureExtractor\u2019] converts CommonSenseQA or OpenBookQA question-answer example(s) into a batch of graph
encodings.`),sd.forEach(n),zs=m(N),ae=a(N,"DIV",{class:!0});var Tn=s(ae);E(Le.$$.fragment,Tn),Ds=m(Tn),yo=a(Tn,"P",{});var id=s(yo);js=o(id,"Main method to encode a question-answer example(s) into a graph representation ready for model input."),id.forEach(n),Tn.forEach(n),N.forEach(n),vn=m(i),W=a(i,"H2",{class:!0});var Cn=s(W);se=a(Cn,"A",{id:!0,class:!0,href:!0});var ld=s(se);Mo=a(ld,"SPAN",{});var cd=s(Mo);E(ke.$$.fragment,cd),cd.forEach(n),ld.forEach(n),Os=m(Cn),Eo=a(Cn,"SPAN",{});var dd=s(Eo);Fs=o(dd,"GreaseLMProcessor"),dd.forEach(n),Cn.forEach(n),bn=m(i),A=a(i,"DIV",{class:!0});var I=s(A);E(qe.$$.fragment,I),Ns=m(I),Ge=a(I,"P",{});var An=s(Ge);Is=o(An,"Constructs a GreaseLM processor which wraps a "),ot=a(An,"A",{href:!0});var hd=s(ot);Ss=o(hd,"GreaseLMFeatureExtractor"),hd.forEach(n),Qs=o(An," and a [\u2018RobertaTokenizer`] into a single\nprocessor."),An.forEach(n),Bs=m(I),nt=a(I,"P",{});var Pl=s(nt);rt=a(Pl,"A",{href:!0});var md=s(rt);Rs=o(md,"GreaseLMProcessor"),md.forEach(n),Us=o(Pl," offers all the functionalities you need to prepare data for the model."),Pl.forEach(n),Hs=m(I),xo=a(I,"P",{});var pd=s(xo);Ks=o(pd,`It uses [\u2018GreaseLMFeatureExtractor\u2019] to convert CommonSenseQA or OpenBookQA question-answer example(s) into a batch
of graph encodings and then encodes examples into a batch of language model encodings, finally combining graph and
language model encodings into a model ready input.`),pd.forEach(n),Ws=m(I),ie=a(I,"DIV",{class:!0});var Pn=s(ie);E($e.$$.fragment,Pn),Xs=m(Pn),Lo=a(Pn,"P",{});var fd=s(Lo);Vs=o(fd,`Main method that takes question-answer example(s) and encodes them into a batch of language model encodings and
a batch of graph encodings combining the two encodings ready for GreaseLM model input`),fd.forEach(n),Pn.forEach(n),I.forEach(n),wn=m(i),X=a(i,"H2",{class:!0});var zn=s(X);le=a(zn,"A",{id:!0,class:!0,href:!0});var ud=s(le);ko=a(ud,"SPAN",{});var gd=s(ko);E(Te.$$.fragment,gd),gd.forEach(n),ud.forEach(n),Js=m(zn),qo=a(zn,"SPAN",{});var _d=s(qo);Ys=o(_d,"GreaseLMModel"),_d.forEach(n),zn.forEach(n),yn=m(i),b=a(i,"DIV",{class:!0});var T=s(b);E(Ce.$$.fragment,T),Zs=m(T),Go=a(T,"P",{});var vd=s(Go);ei=o(vd,"The bare greaselm Model transformer outputting raw hidden-states without any specific head on top."),vd.forEach(n),ti=m(T),Ae=a(T,"P",{});var Dn=s(Ae);oi=o(Dn,"This model inherits from "),at=a(Dn,"A",{href:!0});var bd=s(at);ni=o(bd,"PreTrainedModel"),bd.forEach(n),ri=o(Dn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dn.forEach(n),ai=m(T),Pe=a(T,"P",{});var jn=s(Pe);si=o(jn,"This model is also a PyTorch "),ze=a(jn,"A",{href:!0,rel:!0});var wd=s(ze);ii=o(wd,"torch.nn.Module"),wd.forEach(n),li=o(jn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jn.forEach(n),ci=m(T),$o=a(T,"P",{});var yd=s($o);di=o(yd,`Answering complex questions about textual narratives requires reasoning over both stated context and the world
knowledge that underlies it. However, pretrained language models (LM), the foundation of most modern QA systems, do
not robustly represent latent relationships between concepts, which is necessary for reasoning. While knowledge
graphs (KG) are often used to augment LMs with structured representations of world knowledge, it remains an open
question how to effectively fuse and reason over the KG representations and the language context, which provides
situational constraints and nuances. In this work, we propose GreaseLM, a new model that fuses encoded
representations from pretrained LMs and graph neural networks over multiple layers of modality interaction
operations. Information from both modalities propagates to the other, allowing language context representations to
be grounded by structured world knowledge, and allowing linguistic nuances (e.g., negation, hedging) in the context
to inform the graph representations of knowledge.`),yd.forEach(n),hi=m(T),To=a(T,"P",{});var Md=s(To);mi=o(Md,"Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec"),Md.forEach(n),pi=m(T),st=a(T,"P",{});var zl=s(st);fi=o(zl,"For more details see: "),De=a(zl,"A",{href:!0,rel:!0});var Ed=s(De);ui=o(Ed,"https://arxiv.org/abs/2201.08860"),Ed.forEach(n),zl.forEach(n),gi=m(T),F=a(T,"DIV",{class:!0});var pt=s(F);E(je.$$.fragment,pt),_i=m(pt),V=a(pt,"P",{});var ft=s(V);vi=o(ft,"The "),it=a(ft,"A",{href:!0});var xd=s(it);bi=o(xd,"GreaseLMModel"),xd.forEach(n),wi=o(ft," forward method, overrides the "),Co=a(ft,"CODE",{});var Ld=s(Co);yi=o(Ld,"__call__"),Ld.forEach(n),Mi=o(ft," special method."),ft.forEach(n),Ei=m(pt),E(ce.$$.fragment,pt),pt.forEach(n),T.forEach(n),Mn=m(i),J=a(i,"H2",{class:!0});var On=s(J);de=a(On,"A",{id:!0,class:!0,href:!0});var kd=s(de);Ao=a(kd,"SPAN",{});var qd=s(Ao);E(Oe.$$.fragment,qd),qd.forEach(n),kd.forEach(n),xi=m(On),Po=a(On,"SPAN",{});var Gd=s(Po);Li=o(Gd,"GreaseLMForMultipleChoice"),Gd.forEach(n),On.forEach(n),En=m(i),P=a(i,"DIV",{class:!0});var S=s(P);E(Fe.$$.fragment,S),ki=m(S),zo=a(S,"P",{});var $d=s(zo);qi=o($d,"GreaseLM Model with a multiple choice classification head on top for CommonsSenseQA and OpenBookQA tasks."),$d.forEach(n),Gi=m(S),Ne=a(S,"P",{});var Fn=s(Ne);$i=o(Fn,"This model inherits from "),lt=a(Fn,"A",{href:!0});var Td=s(lt);Ti=o(Td,"PreTrainedModel"),Td.forEach(n),Ci=o(Fn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fn.forEach(n),Ai=m(S),Ie=a(S,"P",{});var Nn=s(Ie);Pi=o(Nn,"This model is also a PyTorch "),Se=a(Nn,"A",{href:!0,rel:!0});var Cd=s(Se);zi=o(Cd,"torch.nn.Module"),Cd.forEach(n),Di=o(Nn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nn.forEach(n),ji=m(S),he=a(S,"DIV",{class:!0});var In=s(he);E(Qe.$$.fragment,In),Oi=m(In),p=a(In,"P",{});var f=s(p);Fi=o(f,`:param input_ids:
(`),Do=a(f,"CODE",{});var Ad=s(Do);Ni=o(Ad,"torch.LongTensor"),Ad.forEach(n),Ii=o(f," of shape "),jo=a(f,"CODE",{});var Pd=s(jo);Si=o(Pd,"(batch_size, number_of_choices, seq_len)"),Pd.forEach(n),Qi=o(f,`):
Input ids for the language model.
:param attention_mask:
(`),Oo=a(f,"CODE",{});var zd=s(Oo);Bi=o(zd,"torch.LongTensor"),zd.forEach(n),Ri=o(f," of shape "),Fo=a(f,"CODE",{});var Dd=s(Fo);Ui=o(Dd,"(batch_size, number_of_choices, seq_len)"),Dd.forEach(n),Hi=o(f,`):
Attention mask for the language model.
:param token_type_ids:
(`),No=a(f,"CODE",{});var jd=s(No);Ki=o(jd,"torch.LongTensor"),jd.forEach(n),Wi=o(f," of shape "),Io=a(f,"CODE",{});var Od=s(Io);Xi=o(Od,"(batch_size, number_of_choices, seq_len)"),Od.forEach(n),Vi=o(f,`):
Token type ids for the language model.
:param special_tokens_mask:
(`),So=a(f,"CODE",{});var Fd=s(So);Ji=o(Fd,"torch.LongTensor"),Fd.forEach(n),Yi=o(f," of shape "),Qo=a(f,"CODE",{});var Nd=s(Qo);Zi=o(Nd,"(batch_size, number_of_choices, seq_len)"),Nd.forEach(n),el=o(f,`):
Output mask for the language model.
:param concept_ids:
(`),Bo=a(f,"CODE",{});var Id=s(Bo);tl=o(Id,"torch.LongTensor"),Id.forEach(n),ol=o(f," of shape "),Ro=a(f,"CODE",{});var Sd=s(Ro);nl=o(Sd,"(batch_size, number_of_choices, max_node_num)"),Sd.forEach(n),rl=o(f,`):
Resolved conceptnet ids.
:param node_type_ids:
(`),Uo=a(f,"CODE",{});var Qd=s(Uo);al=o(Qd,"torch.LongTensor"),Qd.forEach(n),sl=o(f," of shape "),Ho=a(f,"CODE",{});var Bd=s(Ho);il=o(Bd,"(batch_size, number_of_choices, max_node_num)"),Bd.forEach(n),ll=o(f,`):
Conceptnet id types where 0 == question entity; 1 == answer choice entity; 2 == other node; 3 ==
context node
:param node_scores:
(`),Ko=a(f,"CODE",{});var Rd=s(Ko);cl=o(Rd,"torch.FloatTensor"),Rd.forEach(n),dl=o(f," of shape "),Wo=a(f,"CODE",{});var Ud=s(Wo);hl=o(Ud,"(batch_size, number_of_choices, max_node_num, 1)"),Ud.forEach(n),ml=o(f,`):
LM relevancy scores for each resolved conceptnet id.
:param adj_lengths:
(`),Xo=a(f,"CODE",{});var Hd=s(Xo);pl=o(Hd,"torch.LongTensor"),Hd.forEach(n),fl=o(f," of shape "),Vo=a(f,"CODE",{});var Kd=s(Vo);ul=o(Kd,"(batch_size, number_of_choices)"),Kd.forEach(n),gl=o(f,`):
Adjacency matrix lengths for each batch sample.
:param special_nodes_mask:
(`),Jo=a(f,"CODE",{});var Wd=s(Jo);_l=o(Wd,"torch.BoolTensor"),Wd.forEach(n),vl=o(f," of shape "),Yo=a(f,"CODE",{});var Xd=s(Yo);bl=o(Xd,"(batch_size, number_of_choices, max_node_num)"),Xd.forEach(n),wl=o(f,`):
Mask identifying special nodes in the graph (interaction node in the GreaseLM paper).
:param edge_index:
torch.tensor(2, E)) where E is the total number of edges in the particular graph.
:param edge_type:
torch.tensor(E, ) where E is the total number of edges in the particular graph.
:param labels:
(`),Zo=a(f,"EM",{});var Vd=s(Zo);yl=o(Vd,"torch.LongTensor"),Vd.forEach(n),Ml=o(f," of shape "),en=a(f,"EM",{});var Jd=s(en);El=o(Jd,"(batch_size,)"),Jd.forEach(n),xl=o(f,", "),tn=a(f,"EM",{});var Yd=s(tn);Ll=o(Yd,"optional"),Yd.forEach(n),kl=o(f,`):
Labels for computing the multiple choice classification loss. Indices should be in `),on=a(f,"EM",{});var Zd=s(on);ql=o(Zd,`[0, \u2026,
num_choices-1]`),Zd.forEach(n),Gl=o(f," where "),nn=a(f,"EM",{});var eh=s(nn);$l=o(eh,"num_choices"),eh.forEach(n),Tl=o(f,` is the size of the second dimension of the input tensors. (See
`),rn=a(f,"EM",{});var th=s(rn);Cl=o(th,"input_ids"),th.forEach(n),Al=o(f,` above)
:param emb_data:
torch.tensor(batch_size, number_of_choices, max_node_num, emb_dim) Contextualized embedding data.`),f.forEach(n),In.forEach(n),S.forEach(n),this.h()},h(){d(v,"name","hf:doc:metadata"),d(v,"content",JSON.stringify(fh)),d(y,"id","greaselm"),d(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(y,"href","#greaselm"),d(w,"class","relative group"),d(ee,"id","overview"),d(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ee,"href","#overview"),d(Q,"class","relative group"),d(pe,"href","https://arxiv.org/abs/2201.08860"),d(pe,"rel","nofollow"),d(ue,"href","https://huggingface.co/vblagoje"),d(ue,"rel","nofollow"),d(ge,"href","https://github.com/snap-stanford/GreaseLM"),d(ge,"rel","nofollow"),d(oe,"id","transformers.GreaseLMConfig"),d(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(oe,"href","#transformers.GreaseLMConfig"),d(B,"class","relative group"),d(Xe,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel"),d(be,"href","https://huggingface.co/Xikun/greaselm-csqa"),d(be,"rel","nofollow"),d(Ve,"href","/docs/transformers/pr_17146/en/main_classes/configuration#transformers.PretrainedConfig"),d(Je,"href","/docs/transformers/pr_17146/en/main_classes/configuration#transformers.PretrainedConfig"),d(Ye,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig"),d(Ze,"href","/docs/transformers/pr_17146/en/model_doc/bert#transformers.BertConfig"),d(et,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel"),d(we,"href","https://arxiv.org/abs/1803.02155"),d(we,"rel","nofollow"),d(ye,"href","https://arxiv.org/abs/2009.13658"),d(ye,"rel","nofollow"),d($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(re,"id","transformers.GreaseLMFeatureExtractor"),d(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(re,"href","#transformers.GreaseLMFeatureExtractor"),d(K,"class","relative group"),d(tt,"href","/docs/transformers/pr_17146/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(se,"id","transformers.GreaseLMProcessor"),d(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(se,"href","#transformers.GreaseLMProcessor"),d(W,"class","relative group"),d(ot,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMFeatureExtractor"),d(rt,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMProcessor"),d(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(le,"id","transformers.GreaseLMModel"),d(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(le,"href","#transformers.GreaseLMModel"),d(X,"class","relative group"),d(at,"href","/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel"),d(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ze,"rel","nofollow"),d(De,"href","https://arxiv.org/abs/2201.08860"),d(De,"rel","nofollow"),d(it,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(de,"id","transformers.GreaseLMForMultipleChoice"),d(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(de,"href","#transformers.GreaseLMForMultipleChoice"),d(J,"class","relative group"),d(lt,"href","/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel"),d(Se,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Se,"rel","nofollow"),d(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,u){e(document.head,v),g(i,D,u),g(i,w,u),e(w,y),e(y,z),x(_,z,null),e(w,G),e(w,Z),e(Z,Sn),g(i,sn,u),g(i,Q,u),e(Q,ee),e(ee,ut),x(me,ut,null),e(Q,Qn),e(Q,gt),e(gt,Bn),g(i,ln,u),g(i,te,u),e(te,Rn),e(te,pe),e(pe,Un),e(te,Hn),g(i,cn,u),g(i,He,u),e(He,Kn),g(i,dn,u),g(i,Ke,u),e(Ke,Wn),g(i,hn,u),g(i,We,u),e(We,Xn),g(i,mn,u),x(fe,i,u),g(i,pn,u),g(i,O,u),e(O,Vn),e(O,ue),e(ue,Jn),e(O,Yn),e(O,ge),e(ge,Zn),e(O,er),g(i,fn,u),g(i,B,u),e(B,oe),e(oe,_t),x(_e,_t,null),e(B,tr),e(B,vt),e(vt,or),g(i,un,u),g(i,$,u),x(ve,$,null),e($,nr),e($,R),e(R,rr),e(R,Xe),e(Xe,ar),e(R,sr),e(R,be),e(be,ir),e(R,lr),e($,cr),e($,U),e(U,dr),e(U,Ve),e(Ve,hr),e(U,mr),e(U,Je),e(Je,pr),e(U,fr),e($,ur),e($,H),e(H,gr),e(H,Ye),e(Ye,_r),e(H,vr),e(H,Ze),e(Ze,br),e(H,wr),e($,yr),e($,l),e(l,Mr),e(l,bt),e(bt,Er),e(l,xr),e(l,wt),e(wt,Lr),e(l,kr),e(l,yt),e(yt,qr),e(l,Gr),e(l,Mt),e(Mt,$r),e(l,Tr),e(l,Et),e(Et,Cr),e(l,Ar),e(l,xt),e(xt,Pr),e(l,zr),e(l,Lt),e(Lt,Dr),e(l,jr),e(l,kt),e(kt,Or),e(l,Fr),e(l,qt),e(qt,Nr),e(l,Ir),e(l,Gt),e(Gt,Sr),e(l,Qr),e(l,$t),e($t,Br),e(l,Rr),e(l,Tt),e(Tt,Ur),e(l,Hr),e(l,Ct),e(Ct,Kr),e(l,Wr),e(l,At),e(At,Xr),e(l,Vr),e(l,Pt),e(Pt,Jr),e(l,Yr),e(l,zt),e(zt,Zr),e(l,ea),e(l,Dt),e(Dt,ta),e(l,oa),e(l,jt),e(jt,na),e(l,ra),e(l,Ot),e(Ot,aa),e(l,sa),e(l,Ft),e(Ft,ia),e(l,la),e(l,Nt),e(Nt,ca),e(l,da),e(l,It),e(It,ha),e(l,ma),e(l,St),e(St,pa),e(l,fa),e(l,Qt),e(Qt,ua),e(l,ga),e(l,Bt),e(Bt,_a),e(l,va),e(l,et),e(et,ba),e(l,wa),e(l,Rt),e(Rt,ya),e(l,Ma),e(l,Ut),e(Ut,Ea),e(l,xa),e(l,Ht),e(Ht,La),e(l,ka),e(l,Kt),e(Kt,qa),e(l,Ga),e(l,Wt),e(Wt,$a),e(l,Ta),e(l,Xt),e(Xt,Ca),e(l,Aa),e(l,Vt),e(Vt,Pa),e(l,za),e(l,Jt),e(Jt,Da),e(l,ja),e(l,Yt),e(Yt,Oa),e(l,Fa),e(l,Zt),e(Zt,Na),e(l,Ia),e(l,eo),e(eo,Sa),e(l,Qa),e(l,to),e(to,Ba),e(l,Ra),e(l,we),e(we,Ua),e(l,Ha),e(l,oo),e(oo,Ka),e(l,Wa),e(l,no),e(no,Xa),e(l,Va),e(l,ye),e(ye,Ja),e(l,Ya),e(l,ro),e(ro,Za),e(l,es),e(l,ao),e(ao,ts),e(l,os),e(l,so),e(so,ns),e(l,rs),e(l,io),e(io,as),e(l,ss),e(l,lo),e(lo,is),e(l,ls),e(l,co),e(co,cs),e(l,ds),e(l,ho),e(ho,hs),e(l,ms),e(l,mo),e(mo,ps),e(l,fs),e(l,po),e(po,us),e(l,gs),e(l,fo),e(fo,_s),e(l,vs),e(l,uo),e(uo,bs),e(l,ws),e(l,go),e(go,ys),e(l,Ms),e($,Es),x(ne,$,null),g(i,gn,u),g(i,K,u),e(K,re),e(re,_o),x(Me,_o,null),e(K,xs),e(K,vo),e(vo,Ls),g(i,_n,u),g(i,C,u),x(Ee,C,null),e(C,ks),e(C,bo),e(bo,qs),e(C,Gs),e(C,xe),e(xe,$s),e(xe,tt),e(tt,Ts),e(xe,Cs),e(C,As),e(C,wo),e(wo,Ps),e(C,zs),e(C,ae),x(Le,ae,null),e(ae,Ds),e(ae,yo),e(yo,js),g(i,vn,u),g(i,W,u),e(W,se),e(se,Mo),x(ke,Mo,null),e(W,Os),e(W,Eo),e(Eo,Fs),g(i,bn,u),g(i,A,u),x(qe,A,null),e(A,Ns),e(A,Ge),e(Ge,Is),e(Ge,ot),e(ot,Ss),e(Ge,Qs),e(A,Bs),e(A,nt),e(nt,rt),e(rt,Rs),e(nt,Us),e(A,Hs),e(A,xo),e(xo,Ks),e(A,Ws),e(A,ie),x($e,ie,null),e(ie,Xs),e(ie,Lo),e(Lo,Vs),g(i,wn,u),g(i,X,u),e(X,le),e(le,ko),x(Te,ko,null),e(X,Js),e(X,qo),e(qo,Ys),g(i,yn,u),g(i,b,u),x(Ce,b,null),e(b,Zs),e(b,Go),e(Go,ei),e(b,ti),e(b,Ae),e(Ae,oi),e(Ae,at),e(at,ni),e(Ae,ri),e(b,ai),e(b,Pe),e(Pe,si),e(Pe,ze),e(ze,ii),e(Pe,li),e(b,ci),e(b,$o),e($o,di),e(b,hi),e(b,To),e(To,mi),e(b,pi),e(b,st),e(st,fi),e(st,De),e(De,ui),e(b,gi),e(b,F),x(je,F,null),e(F,_i),e(F,V),e(V,vi),e(V,it),e(it,bi),e(V,wi),e(V,Co),e(Co,yi),e(V,Mi),e(F,Ei),x(ce,F,null),g(i,Mn,u),g(i,J,u),e(J,de),e(de,Ao),x(Oe,Ao,null),e(J,xi),e(J,Po),e(Po,Li),g(i,En,u),g(i,P,u),x(Fe,P,null),e(P,ki),e(P,zo),e(zo,qi),e(P,Gi),e(P,Ne),e(Ne,$i),e(Ne,lt),e(lt,Ti),e(Ne,Ci),e(P,Ai),e(P,Ie),e(Ie,Pi),e(Ie,Se),e(Se,zi),e(Ie,Di),e(P,ji),e(P,he),x(Qe,he,null),e(he,Oi),e(he,p),e(p,Fi),e(p,Do),e(Do,Ni),e(p,Ii),e(p,jo),e(jo,Si),e(p,Qi),e(p,Oo),e(Oo,Bi),e(p,Ri),e(p,Fo),e(Fo,Ui),e(p,Hi),e(p,No),e(No,Ki),e(p,Wi),e(p,Io),e(Io,Xi),e(p,Vi),e(p,So),e(So,Ji),e(p,Yi),e(p,Qo),e(Qo,Zi),e(p,el),e(p,Bo),e(Bo,tl),e(p,ol),e(p,Ro),e(Ro,nl),e(p,rl),e(p,Uo),e(Uo,al),e(p,sl),e(p,Ho),e(Ho,il),e(p,ll),e(p,Ko),e(Ko,cl),e(p,dl),e(p,Wo),e(Wo,hl),e(p,ml),e(p,Xo),e(Xo,pl),e(p,fl),e(p,Vo),e(Vo,ul),e(p,gl),e(p,Jo),e(Jo,_l),e(p,vl),e(p,Yo),e(Yo,bl),e(p,wl),e(p,Zo),e(Zo,yl),e(p,Ml),e(p,en),e(en,El),e(p,xl),e(p,tn),e(tn,Ll),e(p,kl),e(p,on),e(on,ql),e(p,Gl),e(p,nn),e(nn,$l),e(p,Tl),e(p,rn),e(rn,Cl),e(p,Al),xn=!0},p(i,[u]){const Be={};u&2&&(Be.$$scope={dirty:u,ctx:i}),ne.$set(Be);const an={};u&2&&(an.$$scope={dirty:u,ctx:i}),ce.$set(an)},i(i){xn||(L(_.$$.fragment,i),L(me.$$.fragment,i),L(fe.$$.fragment,i),L(_e.$$.fragment,i),L(ve.$$.fragment,i),L(ne.$$.fragment,i),L(Me.$$.fragment,i),L(Ee.$$.fragment,i),L(Le.$$.fragment,i),L(ke.$$.fragment,i),L(qe.$$.fragment,i),L($e.$$.fragment,i),L(Te.$$.fragment,i),L(Ce.$$.fragment,i),L(je.$$.fragment,i),L(ce.$$.fragment,i),L(Oe.$$.fragment,i),L(Fe.$$.fragment,i),L(Qe.$$.fragment,i),xn=!0)},o(i){k(_.$$.fragment,i),k(me.$$.fragment,i),k(fe.$$.fragment,i),k(_e.$$.fragment,i),k(ve.$$.fragment,i),k(ne.$$.fragment,i),k(Me.$$.fragment,i),k(Ee.$$.fragment,i),k(Le.$$.fragment,i),k(ke.$$.fragment,i),k(qe.$$.fragment,i),k($e.$$.fragment,i),k(Te.$$.fragment,i),k(Ce.$$.fragment,i),k(je.$$.fragment,i),k(ce.$$.fragment,i),k(Oe.$$.fragment,i),k(Fe.$$.fragment,i),k(Qe.$$.fragment,i),xn=!1},d(i){n(v),i&&n(D),i&&n(w),q(_),i&&n(sn),i&&n(Q),q(me),i&&n(ln),i&&n(te),i&&n(cn),i&&n(He),i&&n(dn),i&&n(Ke),i&&n(hn),i&&n(We),i&&n(mn),q(fe,i),i&&n(pn),i&&n(O),i&&n(fn),i&&n(B),q(_e),i&&n(un),i&&n($),q(ve),q(ne),i&&n(gn),i&&n(K),q(Me),i&&n(_n),i&&n(C),q(Ee),q(Le),i&&n(vn),i&&n(W),q(ke),i&&n(bn),i&&n(A),q(qe),q($e),i&&n(wn),i&&n(X),q(Te),i&&n(yn),i&&n(b),q(Ce),q(je),q(ce),i&&n(Mn),i&&n(J),q(Oe),i&&n(En),i&&n(P),q(Fe),q(Qe)}}}const fh={local:"greaselm",sections:[{local:"overview",title:"Overview"},{local:"transformers.GreaseLMConfig",title:"GreaseLMConfig"},{local:"transformers.GreaseLMFeatureExtractor",title:"GreaseLMFeatureExtractor"},{local:"transformers.GreaseLMProcessor",title:"GreaseLMProcessor"},{local:"transformers.GreaseLMModel",title:"GreaseLMModel"},{local:"transformers.GreaseLMForMultipleChoice",title:"GreaseLMForMultipleChoice"}],title:"GreaseLM"};function uh(Ue){return ih(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Mh extends nh{constructor(v){super();rh(this,v,uh,ph,ah,{})}}export{Mh as default,fh as metadata};
