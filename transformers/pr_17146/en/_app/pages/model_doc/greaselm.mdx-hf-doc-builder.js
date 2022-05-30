import{S as Ci,i as Ai,s as zi,e as a,k as h,w,t as n,M as Pi,c as s,d as o,m,a as i,x as y,h as r,b as d,G as e,g as f,y as M,q as x,o as L,B as k,v as ji,L as Di}from"../../chunks/vendor-hf-doc-builder.js";import{T as Fi}from"../../chunks/Tip-hf-doc-builder.js";import{D as V}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ti}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Se}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Oi}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ii(Ne){let g,z,v,b,A;return b=new Ti({props:{code:`from transformers import GreaseLMConfig, GreaseLMModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){g=a("p"),z=n("Examples:"),v=h(),w(b.$$.fragment)},l(u){g=s(u,"P",{});var q=i(g);z=r(q,"Examples:"),q.forEach(o),v=m(u),y(b.$$.fragment,u)},m(u,q){f(u,g,q),e(g,z),f(u,v,q),M(b,u,q),A=!0},p:Di,i(u){A||(x(b.$$.fragment,u),A=!0)},o(u){L(b.$$.fragment,u),A=!1},d(u){u&&o(g),u&&o(v),k(b,u)}}}function Si(Ne){let g,z,v,b,A;return{c(){g=a("p"),z=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a("code"),b=n("Module"),A=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){g=s(u,"P",{});var q=i(g);z=r(q,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(q,"CODE",{});var J=i(v);b=r(J,"Module"),J.forEach(o),A=r(q,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),q.forEach(o)},m(u,q){f(u,g,q),e(g,z),e(g,v),e(v,b),e(g,A)},d(u){u&&o(g)}}}function Ni(Ne){let g,z,v,b,A,u,q,J,Ht,mt,S,Y,ho,de,Kt,mo,Wt,pt,Z,Xt,he,Vt,Jt,ft,Qe,Yt,ut,Be,Zt,gt,Ue,en,_t,me,vt,P,on,pe,tn,nn,fe,rn,an,bt,N,ee,po,ue,sn,fo,ln,wt,G,ge,cn,Q,dn,Re,hn,mn,_e,pn,fn,un,B,gn,He,_n,vn,Ke,bn,wn,yn,U,Mn,We,xn,Ln,Xe,kn,qn,En,oe,yt,R,te,uo,ve,Gn,go,$n,Mt,$,be,Tn,_o,Cn,An,we,zn,Ve,Pn,jn,Dn,vo,Fn,On,ne,ye,In,bo,Sn,xt,H,re,wo,Me,Nn,yo,Qn,Lt,T,xe,Bn,Le,Un,Je,Rn,Hn,Kn,Ye,Ze,Wn,Xn,Vn,Mo,Jn,Yn,ae,ke,Zn,xo,er,kt,K,se,Lo,qe,or,ko,tr,qt,_,Ee,nr,qo,rr,ar,Ge,sr,eo,ir,lr,cr,$e,dr,Te,hr,mr,pr,Eo,fr,ur,Go,gr,_r,oo,vr,Ce,br,wr,j,Ae,yr,W,Mr,to,xr,Lr,$o,kr,qr,Er,ie,Et,X,le,To,ze,Gr,Co,$r,Gt,C,Pe,Tr,Ao,Cr,Ar,je,zr,no,Pr,jr,Dr,De,Fr,Fe,Or,Ir,Sr,ce,Oe,Nr,l,Qr,zo,Br,Ur,Po,Rr,Hr,jo,Kr,Wr,Do,Xr,Vr,Fo,Jr,Yr,Oo,Zr,ea,Io,oa,ta,So,na,ra,No,aa,sa,Qo,ia,la,Bo,ca,da,Uo,ha,ma,Ro,pa,fa,Ho,ua,ga,Ko,_a,va,Wo,ba,wa,Xo,ya,Ma,Vo,xa,La,Jo,ka,qa,Yo,Ea,Ga,Zo,$a,Ta,et,Ca,Aa,ot,za,Pa,tt,ja,Da,nt,Fa,Oa,rt,Ia,Sa,at,Na,Qa,st,Ba,Ua,it,Ra,Ha,lt,Ka,Wa,ct,Xa,Va,dt,Ja,Ya,$t;return u=new Se({}),de=new Se({}),me=new Ti({props:{code:`import torch
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
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;For the question <span class="hljs-subst">{idx}</span>, model answered incorrectly, answer is not <span class="hljs-subst">{model_answer}</span> but <span class="hljs-subst">{correct_answer}</span>&quot;</span>)`}}),ue=new Se({}),ge=new V({props:{name:"class transformers.GreaseLMConfig",anchor:"transformers.GreaseLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"num_gnn_layers",val:" = 5"},{name:"num_node_types",val:" = 4"},{name:"num_edge_types",val:" = 38"},{name:"concept_dim",val:" = 200"},{name:"gnn_hidden_size",val:" = 200"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the GreaseLM model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel">GreaseLMModel</a>`,name:"vocab_size"},{anchor:"transformers.GreaseLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GreaseLMConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.GreaseLMConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GreaseLMConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GreaseLMConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GreaseLMConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.GreaseLMConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.GreaseLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GreaseLMConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel">GreaseLMModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.GreaseLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GreaseLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GreaseLMConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.GreaseLMConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"},{anchor:"transformers.GreaseLMConfig.num_gnn_layers",description:`<strong>num_gnn_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Number of Graph Neural Network (GNN) layers.`,name:"num_gnn_layers"},{anchor:"transformers.GreaseLMConfig.num_node_types",description:`<strong>num_node_types</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of node types in the graph.`,name:"num_node_types"},{anchor:"transformers.GreaseLMConfig.num_edge_types",description:`<strong>num_edge_types</strong> (<code>int</code>, <em>optional</em>, defaults to 38) &#x2014;
Number of edge types in the graph.`,name:"num_edge_types"},{anchor:"transformers.GreaseLMConfig.concept_dim",description:`<strong>concept_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 200) &#x2014;
Dimension of the concept embeddings.`,name:"concept_dim"},{anchor:"transformers.GreaseLMConfig.gnn_hidden_size",description:`<strong>gnn_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 200) &#x2014;
Hidden size of the Graph Neural Network (GNN).`,name:"gnn_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/configuration_greaselm.py#L31"}}),oe=new Oi({props:{anchor:"transformers.GreaseLMConfig.example",$$slots:{default:[Ii]},$$scope:{ctx:Ne}}}),ve=new Se({}),be=new V({props:{name:"class transformers.GreaseLMFeatureExtractor",anchor:"transformers.GreaseLMFeatureExtractor",parameters:[{name:"cpnet_vocab_path",val:": typing.Union[pathlib.Path, str] = 'concept.txt'"},{name:"pattern_path",val:": typing.Union[pathlib.Path, str] = 'matcher_patterns.json'"},{name:"pruned_graph_path",val:": typing.Union[pathlib.Path, str] = 'conceptnet_en_pruned.pickle.gz'"},{name:"score_model",val:": typing.Union[pathlib.Path, str] = 'roberta-large'"},{name:"device",val:": str = 'cuda'"},{name:"cxt_node_connects_all",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMFeatureExtractor.cpnet_vocab_path",description:`<strong>cpnet_vocab_path</strong> (<code>Union[Path, str]</code>,  <em>optional</em>, defaults to <code>&quot;concept.txt&quot;</code>) &#x2014;
Path to the conceptnet vocabulary file.`,name:"cpnet_vocab_path"},{anchor:"transformers.GreaseLMFeatureExtractor.patterns_path",description:`<strong>patterns_path</strong> (<code>Union[Path, str]</code>,  <em>optional</em>, defaults to <code>&quot;matcher_patterns.json&quot;</code>) &#x2014;
Path to the matcher patterns file.`,name:"patterns_path"},{anchor:"transformers.GreaseLMFeatureExtractor.pruned_graph_path",description:`<strong>pruned_graph_path</strong> (<code>Union[Path, str]</code>, <em>optional</em>, defaults to <code>&quot;conceptnet_en_pruned.pickle.gz&quot;</code>) &#x2014;
Path to the conceptnet graph file encoded as dict of dicts.`,name:"pruned_graph_path"},{anchor:"transformers.GreaseLMFeatureExtractor.score_model",description:`<strong>score_model</strong> (<code>Union[Path, str]</code>, <em>optional</em>, defaults to <code>&quot;roberta-large&quot;</code>) &#x2014;
Path to the pretrained model to use for concept scoring.`,name:"score_model"},{anchor:"transformers.GreaseLMFeatureExtractor.device",description:`<strong>device</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;cuda&quot;</code>) &#x2014;
Device to use for the score model.`,name:"device"},{anchor:"transformers.GreaseLMFeatureExtractor.ctx_node_connects_all",description:`<strong>ctx_node_connects_all</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to connect all nodes to the context node. False by default.`,name:"ctx_node_connects_all"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/feature_extraction_greaselm.py#L287"}}),ye=new V({props:{name:"__call__",anchor:"transformers.GreaseLMFeatureExtractor.__call__",parameters:[{name:"question_answer_example",val:": typing.Union[typing.Dict[str, typing.Any], typing.List[typing.Dict[str, typing.Any]]]"},{name:"entailed_question_answer_example",val:": typing.Union[typing.Dict[str, typing.Any], typing.List[typing.Dict[str, typing.Any]]]"},{name:"num_choices",val:": int = 5"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = 'pt'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMFeatureExtractor.__call__.question_answer_example",description:`<strong>question_answer_example</strong> (<code>List[Dict[str, Any]]</code>) &#x2014;
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
`}}),Me=new Se({}),xe=new V({props:{name:"class transformers.GreaseLMProcessor",anchor:"transformers.GreaseLMProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""},{name:"max_seq_length",val:" = 128"}],parametersDescription:[{anchor:"transformers.GreaseLMProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMFeatureExtractor">GreaseLMFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.GreaseLMProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/roberta#transformers.RobertaTokenizerFast">RobertaTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/processing_greaselm.py#L27"}}),ke=new V({props:{name:"__call__",anchor:"transformers.GreaseLMProcessor.__call__",parameters:[{name:"question_answer_example",val:": typing.Union[typing.Dict[str, typing.Any], typing.List[typing.Dict[str, typing.Any]]]"},{name:"question_answer_converter",val:": typing.Callable[[typing.Dict[str, typing.Any]], typing.Dict[str, typing.Any]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMProcessor.__call__.question_answer_example",description:`<strong>question_answer_example</strong> (&#x2018;Union[Dict[str, Any], List[Dict[str, Any]]]&#x2019;) &#x2014;
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
`}}),qe=new Se({}),Ee=new V({props:{name:"class transformers.GreaseLMModel",anchor:"transformers.GreaseLMModel",parameters:[{name:"config",val:""},{name:"pretrained_concept_emb_file",val:" = None"},{name:"freeze_ent_emb",val:" = True"},{name:"add_pooling_layer",val:" = True"},{name:"dropout",val:" = 0.2"}],parametersDescription:[{anchor:"transformers.GreaseLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig">GreaseLMConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2118"}}),Ae=new V({props:{name:"forward",anchor:"transformers.GreaseLMModel.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:""},{name:"token_type_ids",val:""},{name:"special_tokens_mask",val:""},{name:"concept_ids",val:""},{name:"node_type_ids",val:""},{name:"node_scores",val:""},{name:"adj_lengths",val:""},{name:"special_nodes_mask",val:""},{name:"edge_index",val:""},{name:"edge_type",val:""},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"emb_data",val:" = None"},{name:"output_attentions",val:" = False"},{name:"output_hidden_states",val:" = True"}],parametersDescription:[{anchor:"transformers.GreaseLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, seq_len)</em>) &#x2014;
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
more detail.`,name:"output_hidden_states"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2237"}}),ie=new Fi({props:{$$slots:{default:[Si]},$$scope:{ctx:Ne}}}),ze=new Se({}),Pe=new V({props:{name:"class transformers.GreaseLMForMultipleChoice",anchor:"transformers.GreaseLMForMultipleChoice",parameters:[{name:"config",val:""},{name:"pretrained_concept_emb_file",val:" = None"}],parametersDescription:[{anchor:"transformers.GreaseLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig">GreaseLMConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2479"}}),Oe=new V({props:{name:"forward",anchor:"transformers.GreaseLMForMultipleChoice.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:""},{name:"token_type_ids",val:""},{name:"special_tokens_mask",val:""},{name:"concept_ids",val:""},{name:"node_type_ids",val:""},{name:"node_scores",val:""},{name:"adj_lengths",val:""},{name:"special_nodes_mask",val:""},{name:"edge_index",val:""},{name:"edge_type",val:""},{name:"labels",val:" = None"},{name:"emb_data",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2513"}}),{c(){g=a("meta"),z=h(),v=a("h1"),b=a("a"),A=a("span"),w(u.$$.fragment),q=h(),J=a("span"),Ht=n("GreaseLM"),mt=h(),S=a("h2"),Y=a("a"),ho=a("span"),w(de.$$.fragment),Kt=h(),mo=a("span"),Wt=n("Overview"),pt=h(),Z=a("p"),Xt=n("The GreaseLM model was proposed in "),he=a("a"),Vt=n("GreaseLM: Graph REASoning Enhanced Language Models for Question Answering"),Jt=n(` by Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec.
GreaseLM enables the fusion and exchange of information from the language model and the knowledge graph (KG) in multiple
layers of its architecture. GreaseLM takes as input the natural language context and a graph neural network that reasons
over the KG, ultimately demonstrating superior results in commonsense reasoning.`),ft=h(),Qe=a("p"),Yt=n("The abstract from the paper is the following:"),ut=h(),Be=a("p"),Zt=n(`Answering complex questions about textual narratives requires reasoning over both stated context and the world
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
models 8x larger.`),gt=h(),Ue=a("p"),en=n("Tips:"),_t=h(),w(me.$$.fragment),vt=h(),P=a("p"),on=n("This model was contributed by "),pe=a("a"),tn=n("vblagoje"),nn=n(`.
The original code can be found `),fe=a("a"),rn=n("here"),an=n("."),bt=h(),N=a("h2"),ee=a("a"),po=a("span"),w(ue.$$.fragment),sn=h(),fo=a("span"),ln=n("GreaseLMConfig"),wt=h(),G=a("div"),w(ge.$$.fragment),cn=h(),Q=a("p"),dn=n("This is the configuration class to store the configuration of a "),Re=a("a"),hn=n("GreaseLMModel"),mn=n(`. It is used to instantiate a
GreaseLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GreaseLM
`),_e=a("a"),pn=n("Xikun/greaselm-csqa"),fn=n(" architecture."),un=h(),B=a("p"),gn=n("Configuration objects inherit from "),He=a("a"),_n=n("PretrainedConfig"),vn=n(` and can be used to control the model outputs. Read the
documentation from `),Ke=a("a"),bn=n("PretrainedConfig"),wn=n(" for more information."),yn=h(),U=a("p"),Mn=n("The "),We=a("a"),xn=n("GreaseLMConfig"),Ln=n(" class is identical to "),Xe=a("a"),kn=n("BertConfig"),qn=n(" with a few additional attributes."),En=h(),w(oe.$$.fragment),yt=h(),R=a("h2"),te=a("a"),uo=a("span"),w(ve.$$.fragment),Gn=h(),go=a("span"),$n=n("GreaseLMFeatureExtractor"),Mt=h(),$=a("div"),w(be.$$.fragment),Tn=h(),_o=a("p"),Cn=n("Constructs a GreaseLM feature extractor."),An=h(),we=a("p"),zn=n("This feature extractor inherits from "),Ve=a("a"),Pn=n("FeatureExtractionMixin"),jn=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Dn=h(),vo=a("p"),Fn=n(`[\u2018GreaseLMFeatureExtractor\u2019] converts CommonSenseQA or OpenBookQA question-answer example(s) into a batch of graph
encodings.`),On=h(),ne=a("div"),w(ye.$$.fragment),In=h(),bo=a("p"),Sn=n("Main method to encode a question-answer example(s) into a graph representation ready for model input."),xt=h(),H=a("h2"),re=a("a"),wo=a("span"),w(Me.$$.fragment),Nn=h(),yo=a("span"),Qn=n("GreaseLMProcessor"),Lt=h(),T=a("div"),w(xe.$$.fragment),Bn=h(),Le=a("p"),Un=n("Constructs a GreaseLM processor which wraps a "),Je=a("a"),Rn=n("GreaseLMFeatureExtractor"),Hn=n(" and a [\u2018RobertaTokenizer`] into a single\nprocessor."),Kn=h(),Ye=a("p"),Ze=a("a"),Wn=n("GreaseLMProcessor"),Xn=n(" offers all the functionalities you need to prepare data for the model."),Vn=h(),Mo=a("p"),Jn=n(`It uses [\u2018GreaseLMFeatureExtractor\u2019] to convert CommonSenseQA or OpenBookQA question-answer example(s) into a batch
of graph encodings and then encodes examples into a batch of language model encodings, finally combining graph and
language model encodings into a model ready input.`),Yn=h(),ae=a("div"),w(ke.$$.fragment),Zn=h(),xo=a("p"),er=n(`Main method that takes question-answer example(s) and encodes them into a batch of language model encodings and
a batch of graph encodings combining the two encodings ready for GreaseLM model input`),kt=h(),K=a("h2"),se=a("a"),Lo=a("span"),w(qe.$$.fragment),or=h(),ko=a("span"),tr=n("GreaseLMModel"),qt=h(),_=a("div"),w(Ee.$$.fragment),nr=h(),qo=a("p"),rr=n("The bare greaselm Model transformer outputting raw hidden-states without any specific head on top."),ar=h(),Ge=a("p"),sr=n("This model inherits from "),eo=a("a"),ir=n("PreTrainedModel"),lr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cr=h(),$e=a("p"),dr=n("This model is also a PyTorch "),Te=a("a"),hr=n("torch.nn.Module"),mr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pr=h(),Eo=a("p"),fr=n(`Answering complex questions about textual narratives requires reasoning over both stated context and the world
knowledge that underlies it. However, pretrained language models (LM), the foundation of most modern QA systems, do
not robustly represent latent relationships between concepts, which is necessary for reasoning. While knowledge
graphs (KG) are often used to augment LMs with structured representations of world knowledge, it remains an open
question how to effectively fuse and reason over the KG representations and the language context, which provides
situational constraints and nuances. In this work, we propose GreaseLM, a new model that fuses encoded
representations from pretrained LMs and graph neural networks over multiple layers of modality interaction
operations. Information from both modalities propagates to the other, allowing language context representations to
be grounded by structured world knowledge, and allowing linguistic nuances (e.g., negation, hedging) in the context
to inform the graph representations of knowledge.`),ur=h(),Go=a("p"),gr=n("Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec"),_r=h(),oo=a("p"),vr=n("For more details see: "),Ce=a("a"),br=n("https://arxiv.org/abs/2201.08860"),wr=h(),j=a("div"),w(Ae.$$.fragment),yr=h(),W=a("p"),Mr=n("The "),to=a("a"),xr=n("GreaseLMModel"),Lr=n(" forward method, overrides the "),$o=a("code"),kr=n("__call__"),qr=n(" special method."),Er=h(),w(ie.$$.fragment),Et=h(),X=a("h2"),le=a("a"),To=a("span"),w(ze.$$.fragment),Gr=h(),Co=a("span"),$r=n("GreaseLMForMultipleChoice"),Gt=h(),C=a("div"),w(Pe.$$.fragment),Tr=h(),Ao=a("p"),Cr=n("GreaseLM Model with a multiple choice classification head on top for CommonsSenseQA and OpenBookQA tasks."),Ar=h(),je=a("p"),zr=n("This model inherits from "),no=a("a"),Pr=n("PreTrainedModel"),jr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dr=h(),De=a("p"),Fr=n("This model is also a PyTorch "),Fe=a("a"),Or=n("torch.nn.Module"),Ir=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sr=h(),ce=a("div"),w(Oe.$$.fragment),Nr=h(),l=a("p"),Qr=n(`:param input_ids:
(`),zo=a("code"),Br=n("torch.LongTensor"),Ur=n(" of shape "),Po=a("code"),Rr=n("(batch_size, number_of_choices, seq_len)"),Hr=n(`):
Input ids for the language model.
:param attention_mask:
(`),jo=a("code"),Kr=n("torch.LongTensor"),Wr=n(" of shape "),Do=a("code"),Xr=n("(batch_size, number_of_choices, seq_len)"),Vr=n(`):
Attention mask for the language model.
:param token_type_ids:
(`),Fo=a("code"),Jr=n("torch.LongTensor"),Yr=n(" of shape "),Oo=a("code"),Zr=n("(batch_size, number_of_choices, seq_len)"),ea=n(`):
Token type ids for the language model.
:param special_tokens_mask:
(`),Io=a("code"),oa=n("torch.LongTensor"),ta=n(" of shape "),So=a("code"),na=n("(batch_size, number_of_choices, seq_len)"),ra=n(`):
Output mask for the language model.
:param concept_ids:
(`),No=a("code"),aa=n("torch.LongTensor"),sa=n(" of shape "),Qo=a("code"),ia=n("(batch_size, number_of_choices, max_node_num)"),la=n(`):
Resolved conceptnet ids.
:param node_type_ids:
(`),Bo=a("code"),ca=n("torch.LongTensor"),da=n(" of shape "),Uo=a("code"),ha=n("(batch_size, number_of_choices, max_node_num)"),ma=n(`):
Conceptnet id types where 0 == question entity; 1 == answer choice entity; 2 == other node; 3 ==
context node
:param node_scores:
(`),Ro=a("code"),pa=n("torch.FloatTensor"),fa=n(" of shape "),Ho=a("code"),ua=n("(batch_size, number_of_choices, max_node_num, 1)"),ga=n(`):
LM relevancy scores for each resolved conceptnet id.
:param adj_lengths:
(`),Ko=a("code"),_a=n("torch.LongTensor"),va=n(" of shape "),Wo=a("code"),ba=n("(batch_size, number_of_choices)"),wa=n(`):
Adjacency matrix lengths for each batch sample.
:param special_nodes_mask:
(`),Xo=a("code"),ya=n("torch.BoolTensor"),Ma=n(" of shape "),Vo=a("code"),xa=n("(batch_size, number_of_choices, max_node_num)"),La=n(`):
Mask identifying special nodes in the graph (interaction node in the GreaseLM paper).
:param edge_index:
(`),Jo=a("code"),ka=n("torch.LongTensor"),qa=n(" of shape "),Yo=a("code"),Ea=n("(2, E)"),Ga=n(`):
Edge index for the input graph, where E is the total number of edges in the particular graph.
:param edge_type:
(`),Zo=a("code"),$a=n("torch.LongTensor"),Ta=n(" of shape "),et=a("code"),Ca=n("(E,)"),Aa=n(`):
Edge types for the input graph, where E is the total number of edges in the particular graph.
:param labels:
(`),ot=a("code"),za=n("torch.LongTensor"),Pa=n(" of shape "),tt=a("code"),ja=n("(batch_size,)"),Da=n(", "),nt=a("em"),Fa=n("optional"),Oa=n(`):
Labels for computing the multiple choice classification loss. Indices should be in `),rt=a("em"),Ia=n(`[0, \u2026,
num_choices-1]`),Sa=n(" where "),at=a("em"),Na=n("num_choices"),Qa=n(` is the size of the second dimension of the input tensors. (See
`),st=a("em"),Ba=n("input_ids"),Ua=n(` above)
:param emb_data:
(`),it=a("code"),Ra=n("torch.LongTensor"),Ha=n(" of shape "),lt=a("code"),Ka=n("(batch_size, number_of_choices, max_node_num, emb_dim)"),Wa=n(", "),ct=a("em"),Xa=n("optional"),Va=n(`,
defaults to `),dt=a("code"),Ja=n("None"),Ya=n(`):
Contextualized embedding concept data`),this.h()},l(t){const p=Pi('[data-svelte="svelte-1phssyn"]',document.head);g=s(p,"META",{name:!0,content:!0}),p.forEach(o),z=m(t),v=s(t,"H1",{class:!0});var Ie=i(v);b=s(Ie,"A",{id:!0,class:!0,href:!0});var ht=i(b);A=s(ht,"SPAN",{});var os=i(A);y(u.$$.fragment,os),os.forEach(o),ht.forEach(o),q=m(Ie),J=s(Ie,"SPAN",{});var ts=i(J);Ht=r(ts,"GreaseLM"),ts.forEach(o),Ie.forEach(o),mt=m(t),S=s(t,"H2",{class:!0});var Tt=i(S);Y=s(Tt,"A",{id:!0,class:!0,href:!0});var ns=i(Y);ho=s(ns,"SPAN",{});var rs=i(ho);y(de.$$.fragment,rs),rs.forEach(o),ns.forEach(o),Kt=m(Tt),mo=s(Tt,"SPAN",{});var as=i(mo);Wt=r(as,"Overview"),as.forEach(o),Tt.forEach(o),pt=m(t),Z=s(t,"P",{});var Ct=i(Z);Xt=r(Ct,"The GreaseLM model was proposed in "),he=s(Ct,"A",{href:!0,rel:!0});var ss=i(he);Vt=r(ss,"GreaseLM: Graph REASoning Enhanced Language Models for Question Answering"),ss.forEach(o),Jt=r(Ct,` by Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec.
GreaseLM enables the fusion and exchange of information from the language model and the knowledge graph (KG) in multiple
layers of its architecture. GreaseLM takes as input the natural language context and a graph neural network that reasons
over the KG, ultimately demonstrating superior results in commonsense reasoning.`),Ct.forEach(o),ft=m(t),Qe=s(t,"P",{});var is=i(Qe);Yt=r(is,"The abstract from the paper is the following:"),is.forEach(o),ut=m(t),Be=s(t,"P",{});var ls=i(Be);Zt=r(ls,`Answering complex questions about textual narratives requires reasoning over both stated context and the world
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
models 8x larger.`),ls.forEach(o),gt=m(t),Ue=s(t,"P",{});var cs=i(Ue);en=r(cs,"Tips:"),cs.forEach(o),_t=m(t),y(me.$$.fragment,t),vt=m(t),P=s(t,"P",{});var ro=i(P);on=r(ro,"This model was contributed by "),pe=s(ro,"A",{href:!0,rel:!0});var ds=i(pe);tn=r(ds,"vblagoje"),ds.forEach(o),nn=r(ro,`.
The original code can be found `),fe=s(ro,"A",{href:!0,rel:!0});var hs=i(fe);rn=r(hs,"here"),hs.forEach(o),an=r(ro,"."),ro.forEach(o),bt=m(t),N=s(t,"H2",{class:!0});var At=i(N);ee=s(At,"A",{id:!0,class:!0,href:!0});var ms=i(ee);po=s(ms,"SPAN",{});var ps=i(po);y(ue.$$.fragment,ps),ps.forEach(o),ms.forEach(o),sn=m(At),fo=s(At,"SPAN",{});var fs=i(fo);ln=r(fs,"GreaseLMConfig"),fs.forEach(o),At.forEach(o),wt=m(t),G=s(t,"DIV",{class:!0});var D=i(G);y(ge.$$.fragment,D),cn=m(D),Q=s(D,"P",{});var ao=i(Q);dn=r(ao,"This is the configuration class to store the configuration of a "),Re=s(ao,"A",{href:!0});var us=i(Re);hn=r(us,"GreaseLMModel"),us.forEach(o),mn=r(ao,`. It is used to instantiate a
GreaseLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GreaseLM
`),_e=s(ao,"A",{href:!0,rel:!0});var gs=i(_e);pn=r(gs,"Xikun/greaselm-csqa"),gs.forEach(o),fn=r(ao," architecture."),ao.forEach(o),un=m(D),B=s(D,"P",{});var so=i(B);gn=r(so,"Configuration objects inherit from "),He=s(so,"A",{href:!0});var _s=i(He);_n=r(_s,"PretrainedConfig"),_s.forEach(o),vn=r(so,` and can be used to control the model outputs. Read the
documentation from `),Ke=s(so,"A",{href:!0});var vs=i(Ke);bn=r(vs,"PretrainedConfig"),vs.forEach(o),wn=r(so," for more information."),so.forEach(o),yn=m(D),U=s(D,"P",{});var io=i(U);Mn=r(io,"The "),We=s(io,"A",{href:!0});var bs=i(We);xn=r(bs,"GreaseLMConfig"),bs.forEach(o),Ln=r(io," class is identical to "),Xe=s(io,"A",{href:!0});var ws=i(Xe);kn=r(ws,"BertConfig"),ws.forEach(o),qn=r(io," with a few additional attributes."),io.forEach(o),En=m(D),y(oe.$$.fragment,D),D.forEach(o),yt=m(t),R=s(t,"H2",{class:!0});var zt=i(R);te=s(zt,"A",{id:!0,class:!0,href:!0});var ys=i(te);uo=s(ys,"SPAN",{});var Ms=i(uo);y(ve.$$.fragment,Ms),Ms.forEach(o),ys.forEach(o),Gn=m(zt),go=s(zt,"SPAN",{});var xs=i(go);$n=r(xs,"GreaseLMFeatureExtractor"),xs.forEach(o),zt.forEach(o),Mt=m(t),$=s(t,"DIV",{class:!0});var F=i($);y(be.$$.fragment,F),Tn=m(F),_o=s(F,"P",{});var Ls=i(_o);Cn=r(Ls,"Constructs a GreaseLM feature extractor."),Ls.forEach(o),An=m(F),we=s(F,"P",{});var Pt=i(we);zn=r(Pt,"This feature extractor inherits from "),Ve=s(Pt,"A",{href:!0});var ks=i(Ve);Pn=r(ks,"FeatureExtractionMixin"),ks.forEach(o),jn=r(Pt,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Pt.forEach(o),Dn=m(F),vo=s(F,"P",{});var qs=i(vo);Fn=r(qs,`[\u2018GreaseLMFeatureExtractor\u2019] converts CommonSenseQA or OpenBookQA question-answer example(s) into a batch of graph
encodings.`),qs.forEach(o),On=m(F),ne=s(F,"DIV",{class:!0});var jt=i(ne);y(ye.$$.fragment,jt),In=m(jt),bo=s(jt,"P",{});var Es=i(bo);Sn=r(Es,"Main method to encode a question-answer example(s) into a graph representation ready for model input."),Es.forEach(o),jt.forEach(o),F.forEach(o),xt=m(t),H=s(t,"H2",{class:!0});var Dt=i(H);re=s(Dt,"A",{id:!0,class:!0,href:!0});var Gs=i(re);wo=s(Gs,"SPAN",{});var $s=i(wo);y(Me.$$.fragment,$s),$s.forEach(o),Gs.forEach(o),Nn=m(Dt),yo=s(Dt,"SPAN",{});var Ts=i(yo);Qn=r(Ts,"GreaseLMProcessor"),Ts.forEach(o),Dt.forEach(o),Lt=m(t),T=s(t,"DIV",{class:!0});var O=i(T);y(xe.$$.fragment,O),Bn=m(O),Le=s(O,"P",{});var Ft=i(Le);Un=r(Ft,"Constructs a GreaseLM processor which wraps a "),Je=s(Ft,"A",{href:!0});var Cs=i(Je);Rn=r(Cs,"GreaseLMFeatureExtractor"),Cs.forEach(o),Hn=r(Ft," and a [\u2018RobertaTokenizer`] into a single\nprocessor."),Ft.forEach(o),Kn=m(O),Ye=s(O,"P",{});var Za=i(Ye);Ze=s(Za,"A",{href:!0});var As=i(Ze);Wn=r(As,"GreaseLMProcessor"),As.forEach(o),Xn=r(Za," offers all the functionalities you need to prepare data for the model."),Za.forEach(o),Vn=m(O),Mo=s(O,"P",{});var zs=i(Mo);Jn=r(zs,`It uses [\u2018GreaseLMFeatureExtractor\u2019] to convert CommonSenseQA or OpenBookQA question-answer example(s) into a batch
of graph encodings and then encodes examples into a batch of language model encodings, finally combining graph and
language model encodings into a model ready input.`),zs.forEach(o),Yn=m(O),ae=s(O,"DIV",{class:!0});var Ot=i(ae);y(ke.$$.fragment,Ot),Zn=m(Ot),xo=s(Ot,"P",{});var Ps=i(xo);er=r(Ps,`Main method that takes question-answer example(s) and encodes them into a batch of language model encodings and
a batch of graph encodings combining the two encodings ready for GreaseLM model input`),Ps.forEach(o),Ot.forEach(o),O.forEach(o),kt=m(t),K=s(t,"H2",{class:!0});var It=i(K);se=s(It,"A",{id:!0,class:!0,href:!0});var js=i(se);Lo=s(js,"SPAN",{});var Ds=i(Lo);y(qe.$$.fragment,Ds),Ds.forEach(o),js.forEach(o),or=m(It),ko=s(It,"SPAN",{});var Fs=i(ko);tr=r(Fs,"GreaseLMModel"),Fs.forEach(o),It.forEach(o),qt=m(t),_=s(t,"DIV",{class:!0});var E=i(_);y(Ee.$$.fragment,E),nr=m(E),qo=s(E,"P",{});var Os=i(qo);rr=r(Os,"The bare greaselm Model transformer outputting raw hidden-states without any specific head on top."),Os.forEach(o),ar=m(E),Ge=s(E,"P",{});var St=i(Ge);sr=r(St,"This model inherits from "),eo=s(St,"A",{href:!0});var Is=i(eo);ir=r(Is,"PreTrainedModel"),Is.forEach(o),lr=r(St,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),St.forEach(o),cr=m(E),$e=s(E,"P",{});var Nt=i($e);dr=r(Nt,"This model is also a PyTorch "),Te=s(Nt,"A",{href:!0,rel:!0});var Ss=i(Te);hr=r(Ss,"torch.nn.Module"),Ss.forEach(o),mr=r(Nt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nt.forEach(o),pr=m(E),Eo=s(E,"P",{});var Ns=i(Eo);fr=r(Ns,`Answering complex questions about textual narratives requires reasoning over both stated context and the world
knowledge that underlies it. However, pretrained language models (LM), the foundation of most modern QA systems, do
not robustly represent latent relationships between concepts, which is necessary for reasoning. While knowledge
graphs (KG) are often used to augment LMs with structured representations of world knowledge, it remains an open
question how to effectively fuse and reason over the KG representations and the language context, which provides
situational constraints and nuances. In this work, we propose GreaseLM, a new model that fuses encoded
representations from pretrained LMs and graph neural networks over multiple layers of modality interaction
operations. Information from both modalities propagates to the other, allowing language context representations to
be grounded by structured world knowledge, and allowing linguistic nuances (e.g., negation, hedging) in the context
to inform the graph representations of knowledge.`),Ns.forEach(o),ur=m(E),Go=s(E,"P",{});var Qs=i(Go);gr=r(Qs,"Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec"),Qs.forEach(o),_r=m(E),oo=s(E,"P",{});var es=i(oo);vr=r(es,"For more details see: "),Ce=s(es,"A",{href:!0,rel:!0});var Bs=i(Ce);br=r(Bs,"https://arxiv.org/abs/2201.08860"),Bs.forEach(o),es.forEach(o),wr=m(E),j=s(E,"DIV",{class:!0});var lo=i(j);y(Ae.$$.fragment,lo),yr=m(lo),W=s(lo,"P",{});var co=i(W);Mr=r(co,"The "),to=s(co,"A",{href:!0});var Us=i(to);xr=r(Us,"GreaseLMModel"),Us.forEach(o),Lr=r(co," forward method, overrides the "),$o=s(co,"CODE",{});var Rs=i($o);kr=r(Rs,"__call__"),Rs.forEach(o),qr=r(co," special method."),co.forEach(o),Er=m(lo),y(ie.$$.fragment,lo),lo.forEach(o),E.forEach(o),Et=m(t),X=s(t,"H2",{class:!0});var Qt=i(X);le=s(Qt,"A",{id:!0,class:!0,href:!0});var Hs=i(le);To=s(Hs,"SPAN",{});var Ks=i(To);y(ze.$$.fragment,Ks),Ks.forEach(o),Hs.forEach(o),Gr=m(Qt),Co=s(Qt,"SPAN",{});var Ws=i(Co);$r=r(Ws,"GreaseLMForMultipleChoice"),Ws.forEach(o),Qt.forEach(o),Gt=m(t),C=s(t,"DIV",{class:!0});var I=i(C);y(Pe.$$.fragment,I),Tr=m(I),Ao=s(I,"P",{});var Xs=i(Ao);Cr=r(Xs,"GreaseLM Model with a multiple choice classification head on top for CommonsSenseQA and OpenBookQA tasks."),Xs.forEach(o),Ar=m(I),je=s(I,"P",{});var Bt=i(je);zr=r(Bt,"This model inherits from "),no=s(Bt,"A",{href:!0});var Vs=i(no);Pr=r(Vs,"PreTrainedModel"),Vs.forEach(o),jr=r(Bt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bt.forEach(o),Dr=m(I),De=s(I,"P",{});var Ut=i(De);Fr=r(Ut,"This model is also a PyTorch "),Fe=s(Ut,"A",{href:!0,rel:!0});var Js=i(Fe);Or=r(Js,"torch.nn.Module"),Js.forEach(o),Ir=r(Ut,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ut.forEach(o),Sr=m(I),ce=s(I,"DIV",{class:!0});var Rt=i(ce);y(Oe.$$.fragment,Rt),Nr=m(Rt),l=s(Rt,"P",{});var c=i(l);Qr=r(c,`:param input_ids:
(`),zo=s(c,"CODE",{});var Ys=i(zo);Br=r(Ys,"torch.LongTensor"),Ys.forEach(o),Ur=r(c," of shape "),Po=s(c,"CODE",{});var Zs=i(Po);Rr=r(Zs,"(batch_size, number_of_choices, seq_len)"),Zs.forEach(o),Hr=r(c,`):
Input ids for the language model.
:param attention_mask:
(`),jo=s(c,"CODE",{});var ei=i(jo);Kr=r(ei,"torch.LongTensor"),ei.forEach(o),Wr=r(c," of shape "),Do=s(c,"CODE",{});var oi=i(Do);Xr=r(oi,"(batch_size, number_of_choices, seq_len)"),oi.forEach(o),Vr=r(c,`):
Attention mask for the language model.
:param token_type_ids:
(`),Fo=s(c,"CODE",{});var ti=i(Fo);Jr=r(ti,"torch.LongTensor"),ti.forEach(o),Yr=r(c," of shape "),Oo=s(c,"CODE",{});var ni=i(Oo);Zr=r(ni,"(batch_size, number_of_choices, seq_len)"),ni.forEach(o),ea=r(c,`):
Token type ids for the language model.
:param special_tokens_mask:
(`),Io=s(c,"CODE",{});var ri=i(Io);oa=r(ri,"torch.LongTensor"),ri.forEach(o),ta=r(c," of shape "),So=s(c,"CODE",{});var ai=i(So);na=r(ai,"(batch_size, number_of_choices, seq_len)"),ai.forEach(o),ra=r(c,`):
Output mask for the language model.
:param concept_ids:
(`),No=s(c,"CODE",{});var si=i(No);aa=r(si,"torch.LongTensor"),si.forEach(o),sa=r(c," of shape "),Qo=s(c,"CODE",{});var ii=i(Qo);ia=r(ii,"(batch_size, number_of_choices, max_node_num)"),ii.forEach(o),la=r(c,`):
Resolved conceptnet ids.
:param node_type_ids:
(`),Bo=s(c,"CODE",{});var li=i(Bo);ca=r(li,"torch.LongTensor"),li.forEach(o),da=r(c," of shape "),Uo=s(c,"CODE",{});var ci=i(Uo);ha=r(ci,"(batch_size, number_of_choices, max_node_num)"),ci.forEach(o),ma=r(c,`):
Conceptnet id types where 0 == question entity; 1 == answer choice entity; 2 == other node; 3 ==
context node
:param node_scores:
(`),Ro=s(c,"CODE",{});var di=i(Ro);pa=r(di,"torch.FloatTensor"),di.forEach(o),fa=r(c," of shape "),Ho=s(c,"CODE",{});var hi=i(Ho);ua=r(hi,"(batch_size, number_of_choices, max_node_num, 1)"),hi.forEach(o),ga=r(c,`):
LM relevancy scores for each resolved conceptnet id.
:param adj_lengths:
(`),Ko=s(c,"CODE",{});var mi=i(Ko);_a=r(mi,"torch.LongTensor"),mi.forEach(o),va=r(c," of shape "),Wo=s(c,"CODE",{});var pi=i(Wo);ba=r(pi,"(batch_size, number_of_choices)"),pi.forEach(o),wa=r(c,`):
Adjacency matrix lengths for each batch sample.
:param special_nodes_mask:
(`),Xo=s(c,"CODE",{});var fi=i(Xo);ya=r(fi,"torch.BoolTensor"),fi.forEach(o),Ma=r(c," of shape "),Vo=s(c,"CODE",{});var ui=i(Vo);xa=r(ui,"(batch_size, number_of_choices, max_node_num)"),ui.forEach(o),La=r(c,`):
Mask identifying special nodes in the graph (interaction node in the GreaseLM paper).
:param edge_index:
(`),Jo=s(c,"CODE",{});var gi=i(Jo);ka=r(gi,"torch.LongTensor"),gi.forEach(o),qa=r(c," of shape "),Yo=s(c,"CODE",{});var _i=i(Yo);Ea=r(_i,"(2, E)"),_i.forEach(o),Ga=r(c,`):
Edge index for the input graph, where E is the total number of edges in the particular graph.
:param edge_type:
(`),Zo=s(c,"CODE",{});var vi=i(Zo);$a=r(vi,"torch.LongTensor"),vi.forEach(o),Ta=r(c," of shape "),et=s(c,"CODE",{});var bi=i(et);Ca=r(bi,"(E,)"),bi.forEach(o),Aa=r(c,`):
Edge types for the input graph, where E is the total number of edges in the particular graph.
:param labels:
(`),ot=s(c,"CODE",{});var wi=i(ot);za=r(wi,"torch.LongTensor"),wi.forEach(o),Pa=r(c," of shape "),tt=s(c,"CODE",{});var yi=i(tt);ja=r(yi,"(batch_size,)"),yi.forEach(o),Da=r(c,", "),nt=s(c,"EM",{});var Mi=i(nt);Fa=r(Mi,"optional"),Mi.forEach(o),Oa=r(c,`):
Labels for computing the multiple choice classification loss. Indices should be in `),rt=s(c,"EM",{});var xi=i(rt);Ia=r(xi,`[0, \u2026,
num_choices-1]`),xi.forEach(o),Sa=r(c," where "),at=s(c,"EM",{});var Li=i(at);Na=r(Li,"num_choices"),Li.forEach(o),Qa=r(c,` is the size of the second dimension of the input tensors. (See
`),st=s(c,"EM",{});var ki=i(st);Ba=r(ki,"input_ids"),ki.forEach(o),Ua=r(c,` above)
:param emb_data:
(`),it=s(c,"CODE",{});var qi=i(it);Ra=r(qi,"torch.LongTensor"),qi.forEach(o),Ha=r(c," of shape "),lt=s(c,"CODE",{});var Ei=i(lt);Ka=r(Ei,"(batch_size, number_of_choices, max_node_num, emb_dim)"),Ei.forEach(o),Wa=r(c,", "),ct=s(c,"EM",{});var Gi=i(ct);Xa=r(Gi,"optional"),Gi.forEach(o),Va=r(c,`,
defaults to `),dt=s(c,"CODE",{});var $i=i(dt);Ja=r($i,"None"),$i.forEach(o),Ya=r(c,`):
Contextualized embedding concept data`),c.forEach(o),Rt.forEach(o),I.forEach(o),this.h()},h(){d(g,"name","hf:doc:metadata"),d(g,"content",JSON.stringify(Qi)),d(b,"id","greaselm"),d(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(b,"href","#greaselm"),d(v,"class","relative group"),d(Y,"id","overview"),d(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Y,"href","#overview"),d(S,"class","relative group"),d(he,"href","https://arxiv.org/abs/2201.08860"),d(he,"rel","nofollow"),d(pe,"href","https://huggingface.co/vblagoje"),d(pe,"rel","nofollow"),d(fe,"href","https://github.com/snap-stanford/GreaseLM"),d(fe,"rel","nofollow"),d(ee,"id","transformers.GreaseLMConfig"),d(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ee,"href","#transformers.GreaseLMConfig"),d(N,"class","relative group"),d(Re,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel"),d(_e,"href","https://huggingface.co/Xikun/greaselm-csqa"),d(_e,"rel","nofollow"),d(He,"href","/docs/transformers/pr_17146/en/main_classes/configuration#transformers.PretrainedConfig"),d(Ke,"href","/docs/transformers/pr_17146/en/main_classes/configuration#transformers.PretrainedConfig"),d(We,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig"),d(Xe,"href","/docs/transformers/pr_17146/en/model_doc/bert#transformers.BertConfig"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(te,"id","transformers.GreaseLMFeatureExtractor"),d(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(te,"href","#transformers.GreaseLMFeatureExtractor"),d(R,"class","relative group"),d(Ve,"href","/docs/transformers/pr_17146/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),d(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(re,"id","transformers.GreaseLMProcessor"),d(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(re,"href","#transformers.GreaseLMProcessor"),d(H,"class","relative group"),d(Je,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMFeatureExtractor"),d(Ze,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMProcessor"),d(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(se,"id","transformers.GreaseLMModel"),d(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(se,"href","#transformers.GreaseLMModel"),d(K,"class","relative group"),d(eo,"href","/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel"),d(Te,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Te,"rel","nofollow"),d(Ce,"href","https://arxiv.org/abs/2201.08860"),d(Ce,"rel","nofollow"),d(to,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(le,"id","transformers.GreaseLMForMultipleChoice"),d(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(le,"href","#transformers.GreaseLMForMultipleChoice"),d(X,"class","relative group"),d(no,"href","/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel"),d(Fe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Fe,"rel","nofollow"),d(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,g),f(t,z,p),f(t,v,p),e(v,b),e(b,A),M(u,A,null),e(v,q),e(v,J),e(J,Ht),f(t,mt,p),f(t,S,p),e(S,Y),e(Y,ho),M(de,ho,null),e(S,Kt),e(S,mo),e(mo,Wt),f(t,pt,p),f(t,Z,p),e(Z,Xt),e(Z,he),e(he,Vt),e(Z,Jt),f(t,ft,p),f(t,Qe,p),e(Qe,Yt),f(t,ut,p),f(t,Be,p),e(Be,Zt),f(t,gt,p),f(t,Ue,p),e(Ue,en),f(t,_t,p),M(me,t,p),f(t,vt,p),f(t,P,p),e(P,on),e(P,pe),e(pe,tn),e(P,nn),e(P,fe),e(fe,rn),e(P,an),f(t,bt,p),f(t,N,p),e(N,ee),e(ee,po),M(ue,po,null),e(N,sn),e(N,fo),e(fo,ln),f(t,wt,p),f(t,G,p),M(ge,G,null),e(G,cn),e(G,Q),e(Q,dn),e(Q,Re),e(Re,hn),e(Q,mn),e(Q,_e),e(_e,pn),e(Q,fn),e(G,un),e(G,B),e(B,gn),e(B,He),e(He,_n),e(B,vn),e(B,Ke),e(Ke,bn),e(B,wn),e(G,yn),e(G,U),e(U,Mn),e(U,We),e(We,xn),e(U,Ln),e(U,Xe),e(Xe,kn),e(U,qn),e(G,En),M(oe,G,null),f(t,yt,p),f(t,R,p),e(R,te),e(te,uo),M(ve,uo,null),e(R,Gn),e(R,go),e(go,$n),f(t,Mt,p),f(t,$,p),M(be,$,null),e($,Tn),e($,_o),e(_o,Cn),e($,An),e($,we),e(we,zn),e(we,Ve),e(Ve,Pn),e(we,jn),e($,Dn),e($,vo),e(vo,Fn),e($,On),e($,ne),M(ye,ne,null),e(ne,In),e(ne,bo),e(bo,Sn),f(t,xt,p),f(t,H,p),e(H,re),e(re,wo),M(Me,wo,null),e(H,Nn),e(H,yo),e(yo,Qn),f(t,Lt,p),f(t,T,p),M(xe,T,null),e(T,Bn),e(T,Le),e(Le,Un),e(Le,Je),e(Je,Rn),e(Le,Hn),e(T,Kn),e(T,Ye),e(Ye,Ze),e(Ze,Wn),e(Ye,Xn),e(T,Vn),e(T,Mo),e(Mo,Jn),e(T,Yn),e(T,ae),M(ke,ae,null),e(ae,Zn),e(ae,xo),e(xo,er),f(t,kt,p),f(t,K,p),e(K,se),e(se,Lo),M(qe,Lo,null),e(K,or),e(K,ko),e(ko,tr),f(t,qt,p),f(t,_,p),M(Ee,_,null),e(_,nr),e(_,qo),e(qo,rr),e(_,ar),e(_,Ge),e(Ge,sr),e(Ge,eo),e(eo,ir),e(Ge,lr),e(_,cr),e(_,$e),e($e,dr),e($e,Te),e(Te,hr),e($e,mr),e(_,pr),e(_,Eo),e(Eo,fr),e(_,ur),e(_,Go),e(Go,gr),e(_,_r),e(_,oo),e(oo,vr),e(oo,Ce),e(Ce,br),e(_,wr),e(_,j),M(Ae,j,null),e(j,yr),e(j,W),e(W,Mr),e(W,to),e(to,xr),e(W,Lr),e(W,$o),e($o,kr),e(W,qr),e(j,Er),M(ie,j,null),f(t,Et,p),f(t,X,p),e(X,le),e(le,To),M(ze,To,null),e(X,Gr),e(X,Co),e(Co,$r),f(t,Gt,p),f(t,C,p),M(Pe,C,null),e(C,Tr),e(C,Ao),e(Ao,Cr),e(C,Ar),e(C,je),e(je,zr),e(je,no),e(no,Pr),e(je,jr),e(C,Dr),e(C,De),e(De,Fr),e(De,Fe),e(Fe,Or),e(De,Ir),e(C,Sr),e(C,ce),M(Oe,ce,null),e(ce,Nr),e(ce,l),e(l,Qr),e(l,zo),e(zo,Br),e(l,Ur),e(l,Po),e(Po,Rr),e(l,Hr),e(l,jo),e(jo,Kr),e(l,Wr),e(l,Do),e(Do,Xr),e(l,Vr),e(l,Fo),e(Fo,Jr),e(l,Yr),e(l,Oo),e(Oo,Zr),e(l,ea),e(l,Io),e(Io,oa),e(l,ta),e(l,So),e(So,na),e(l,ra),e(l,No),e(No,aa),e(l,sa),e(l,Qo),e(Qo,ia),e(l,la),e(l,Bo),e(Bo,ca),e(l,da),e(l,Uo),e(Uo,ha),e(l,ma),e(l,Ro),e(Ro,pa),e(l,fa),e(l,Ho),e(Ho,ua),e(l,ga),e(l,Ko),e(Ko,_a),e(l,va),e(l,Wo),e(Wo,ba),e(l,wa),e(l,Xo),e(Xo,ya),e(l,Ma),e(l,Vo),e(Vo,xa),e(l,La),e(l,Jo),e(Jo,ka),e(l,qa),e(l,Yo),e(Yo,Ea),e(l,Ga),e(l,Zo),e(Zo,$a),e(l,Ta),e(l,et),e(et,Ca),e(l,Aa),e(l,ot),e(ot,za),e(l,Pa),e(l,tt),e(tt,ja),e(l,Da),e(l,nt),e(nt,Fa),e(l,Oa),e(l,rt),e(rt,Ia),e(l,Sa),e(l,at),e(at,Na),e(l,Qa),e(l,st),e(st,Ba),e(l,Ua),e(l,it),e(it,Ra),e(l,Ha),e(l,lt),e(lt,Ka),e(l,Wa),e(l,ct),e(ct,Xa),e(l,Va),e(l,dt),e(dt,Ja),e(l,Ya),$t=!0},p(t,[p]){const Ie={};p&2&&(Ie.$$scope={dirty:p,ctx:t}),oe.$set(Ie);const ht={};p&2&&(ht.$$scope={dirty:p,ctx:t}),ie.$set(ht)},i(t){$t||(x(u.$$.fragment,t),x(de.$$.fragment,t),x(me.$$.fragment,t),x(ue.$$.fragment,t),x(ge.$$.fragment,t),x(oe.$$.fragment,t),x(ve.$$.fragment,t),x(be.$$.fragment,t),x(ye.$$.fragment,t),x(Me.$$.fragment,t),x(xe.$$.fragment,t),x(ke.$$.fragment,t),x(qe.$$.fragment,t),x(Ee.$$.fragment,t),x(Ae.$$.fragment,t),x(ie.$$.fragment,t),x(ze.$$.fragment,t),x(Pe.$$.fragment,t),x(Oe.$$.fragment,t),$t=!0)},o(t){L(u.$$.fragment,t),L(de.$$.fragment,t),L(me.$$.fragment,t),L(ue.$$.fragment,t),L(ge.$$.fragment,t),L(oe.$$.fragment,t),L(ve.$$.fragment,t),L(be.$$.fragment,t),L(ye.$$.fragment,t),L(Me.$$.fragment,t),L(xe.$$.fragment,t),L(ke.$$.fragment,t),L(qe.$$.fragment,t),L(Ee.$$.fragment,t),L(Ae.$$.fragment,t),L(ie.$$.fragment,t),L(ze.$$.fragment,t),L(Pe.$$.fragment,t),L(Oe.$$.fragment,t),$t=!1},d(t){o(g),t&&o(z),t&&o(v),k(u),t&&o(mt),t&&o(S),k(de),t&&o(pt),t&&o(Z),t&&o(ft),t&&o(Qe),t&&o(ut),t&&o(Be),t&&o(gt),t&&o(Ue),t&&o(_t),k(me,t),t&&o(vt),t&&o(P),t&&o(bt),t&&o(N),k(ue),t&&o(wt),t&&o(G),k(ge),k(oe),t&&o(yt),t&&o(R),k(ve),t&&o(Mt),t&&o($),k(be),k(ye),t&&o(xt),t&&o(H),k(Me),t&&o(Lt),t&&o(T),k(xe),k(ke),t&&o(kt),t&&o(K),k(qe),t&&o(qt),t&&o(_),k(Ee),k(Ae),k(ie),t&&o(Et),t&&o(X),k(ze),t&&o(Gt),t&&o(C),k(Pe),k(Oe)}}}const Qi={local:"greaselm",sections:[{local:"overview",title:"Overview"},{local:"transformers.GreaseLMConfig",title:"GreaseLMConfig"},{local:"transformers.GreaseLMFeatureExtractor",title:"GreaseLMFeatureExtractor"},{local:"transformers.GreaseLMProcessor",title:"GreaseLMProcessor"},{local:"transformers.GreaseLMModel",title:"GreaseLMModel"},{local:"transformers.GreaseLMForMultipleChoice",title:"GreaseLMForMultipleChoice"}],title:"GreaseLM"};function Bi(Ne){return ji(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vi extends Ci{constructor(g){super();Ai(this,g,Bi,Ni,zi,{})}}export{Vi as default,Qi as metadata};
