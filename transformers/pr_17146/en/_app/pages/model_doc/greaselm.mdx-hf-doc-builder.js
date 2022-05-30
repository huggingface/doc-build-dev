import{S as bi,i as wi,s as yi,e as a,k as h,w,t as n,M as Mi,c as s,d as o,m,a as i,x as y,h as r,b as l,G as e,g as f,y as M,q as x,o as L,B as k,v as xi,L as Li}from"../../chunks/vendor-hf-doc-builder.js";import{T as ki}from"../../chunks/Tip-hf-doc-builder.js";import{D as V}from"../../chunks/Docstring-hf-doc-builder.js";import{C as vi}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ne}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as qi}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ei(Se){let g,P,v,b,A;return b=new vi({props:{code:`from transformers import GreaseLMConfig, GreaseLMModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){g=a("p"),P=n("Examples:"),v=h(),w(b.$$.fragment)},l(u){g=s(u,"P",{});var q=i(g);P=r(q,"Examples:"),q.forEach(o),v=m(u),y(b.$$.fragment,u)},m(u,q){f(u,g,q),e(g,P),f(u,v,q),M(b,u,q),A=!0},p:Li,i(u){A||(x(b.$$.fragment,u),A=!0)},o(u){L(b.$$.fragment,u),A=!1},d(u){u&&o(g),u&&o(v),k(b,u)}}}function Gi(Se){let g,P,v,b,A;return{c(){g=a("p"),P=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a("code"),b=n("Module"),A=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){g=s(u,"P",{});var q=i(g);P=r(q,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(q,"CODE",{});var J=i(v);b=r(J,"Module"),J.forEach(o),A=r(q,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),q.forEach(o)},m(u,q){f(u,g,q),e(g,P),e(g,v),e(v,b),e(g,A)},d(u){u&&o(g)}}}function $i(Se){let g,P,v,b,A,u,q,J,Bt,ct,N,Y,ho,de,Ut,mo,Rt,dt,Z,Ht,he,Kt,Wt,ht,Qe,Xt,mt,Be,Vt,pt,Ue,Jt,ft,me,ut,z,Yt,pe,Zt,en,fe,on,tn,gt,S,ee,po,ue,nn,fo,rn,_t,G,ge,an,Q,sn,Re,ln,cn,_e,dn,hn,mn,B,pn,He,fn,un,Ke,gn,_n,vn,U,bn,We,wn,yn,Xe,Mn,xn,Ln,oe,vt,R,te,uo,ve,kn,go,qn,bt,$,be,En,_o,Gn,$n,we,Tn,Ve,Cn,An,Pn,vo,zn,jn,ne,ye,Dn,bo,Fn,wt,H,re,wo,Me,On,yo,In,yt,T,xe,Nn,Le,Sn,Je,Qn,Bn,Un,Ye,Ze,Rn,Hn,Kn,Mo,Wn,Xn,ae,ke,Vn,xo,Jn,Mt,K,se,Lo,qe,Yn,ko,Zn,xt,_,Ee,er,qo,or,tr,Ge,nr,eo,rr,ar,sr,$e,ir,Te,lr,cr,dr,Eo,hr,mr,Go,pr,fr,oo,ur,Ce,gr,_r,j,Ae,vr,W,br,to,wr,yr,$o,Mr,xr,Lr,ie,Lt,X,le,To,Pe,kr,Co,qr,kt,C,ze,Er,Ao,Gr,$r,je,Tr,no,Cr,Ar,Pr,De,zr,Fe,jr,Dr,Fr,ce,Oe,Or,c,Ir,Po,Nr,Sr,zo,Qr,Br,jo,Ur,Rr,Do,Hr,Kr,Fo,Wr,Xr,Oo,Vr,Jr,Io,Yr,Zr,No,ea,oa,So,ta,na,Qo,ra,aa,Bo,sa,ia,Uo,la,ca,Ro,da,ha,Ho,ma,pa,Ko,fa,ua,Wo,ga,_a,Xo,va,ba,Vo,wa,ya,Jo,Ma,xa,Yo,La,ka,Zo,qa,Ea,et,Ga,$a,ot,Ta,Ca,tt,Aa,Pa,nt,za,ja,rt,Da,Fa,at,Oa,Ia,st,Na,Sa,it,Qa,Ba,qt;return u=new Ne({}),de=new Ne({}),me=new vi({props:{code:`import torch
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
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;For the question <span class="hljs-subst">{idx}</span>, model answered incorrectly, answer is not <span class="hljs-subst">{model_answer}</span> but <span class="hljs-subst">{correct_answer}</span>&quot;</span>)`}}),ue=new Ne({}),ge=new V({props:{name:"class transformers.GreaseLMConfig",anchor:"transformers.GreaseLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"num_gnn_layers",val:" = 5"},{name:"num_node_types",val:" = 4"},{name:"num_edge_types",val:" = 38"},{name:"concept_dim",val:" = 200"},{name:"gnn_hidden_size",val:" = 200"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
Hidden size of the Graph Neural Network (GNN).`,name:"gnn_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/configuration_greaselm.py#L31"}}),oe=new qi({props:{anchor:"transformers.GreaseLMConfig.example",$$slots:{default:[Ei]},$$scope:{ctx:Se}}}),ve=new Ne({}),be=new V({props:{name:"class transformers.GreaseLMFeatureExtractor",anchor:"transformers.GreaseLMFeatureExtractor",parameters:[{name:"cpnet_vocab_path",val:": typing.Union[pathlib.Path, str] = 'concept.txt'"},{name:"pattern_path",val:": typing.Union[pathlib.Path, str] = 'matcher_patterns.json'"},{name:"pruned_graph_path",val:": typing.Union[pathlib.Path, str] = 'conceptnet_en_pruned.pickle.gz'"},{name:"score_model",val:": typing.Union[pathlib.Path, str] = 'roberta-large'"},{name:"device",val:": str = 'cuda'"},{name:"cxt_node_connects_all",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMFeatureExtractor.cpnet_vocab_path",description:`<strong>cpnet_vocab_path</strong> (<code>Union[Path, str]</code>,  <em>optional</em>, defaults to <code>&quot;concept.txt&quot;</code>) &#x2014;
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
`}}),Me=new Ne({}),xe=new V({props:{name:"class transformers.GreaseLMProcessor",anchor:"transformers.GreaseLMProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""},{name:"max_seq_length",val:" = 128"}],parametersDescription:[{anchor:"transformers.GreaseLMProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMFeatureExtractor">GreaseLMFeatureExtractor</a>) &#x2014;
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
`}}),qe=new Ne({}),Ee=new V({props:{name:"class transformers.GreaseLMModel",anchor:"transformers.GreaseLMModel",parameters:[{name:"config",val:""},{name:"pretrained_concept_emb_file",val:" = None"},{name:"freeze_ent_emb",val:" = True"},{name:"add_pooling_layer",val:" = True"},{name:"dropout",val:" = 0.2"}],parametersDescription:[{anchor:"transformers.GreaseLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig">GreaseLMConfig</a>) &#x2014; Model configuration class with all the parameters of the
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
more detail.`,name:"output_hidden_states"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2237"}}),ie=new ki({props:{$$slots:{default:[Gi]},$$scope:{ctx:Se}}}),Pe=new Ne({}),ze=new V({props:{name:"class transformers.GreaseLMForMultipleChoice",anchor:"transformers.GreaseLMForMultipleChoice",parameters:[{name:"config",val:""},{name:"pretrained_concept_emb_file",val:" = None"}],parametersDescription:[{anchor:"transformers.GreaseLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig">GreaseLMConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2479"}}),Oe=new V({props:{name:"forward",anchor:"transformers.GreaseLMForMultipleChoice.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:""},{name:"token_type_ids",val:""},{name:"special_tokens_mask",val:""},{name:"concept_ids",val:""},{name:"node_type_ids",val:""},{name:"node_scores",val:""},{name:"adj_lengths",val:""},{name:"special_nodes_mask",val:""},{name:"edge_index",val:""},{name:"edge_type",val:""},{name:"labels",val:" = None"},{name:"emb_data",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2513"}}),{c(){g=a("meta"),P=h(),v=a("h1"),b=a("a"),A=a("span"),w(u.$$.fragment),q=h(),J=a("span"),Bt=n("GreaseLM"),ct=h(),N=a("h2"),Y=a("a"),ho=a("span"),w(de.$$.fragment),Ut=h(),mo=a("span"),Rt=n("Overview"),dt=h(),Z=a("p"),Ht=n("The GreaseLM model was proposed in "),he=a("a"),Kt=n("GreaseLM: Graph REASoning Enhanced Language Models for Question Answering"),Wt=n(` by Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec.
GreaseLM enables the fusion and exchange of information from the language model and the knowledge graph (KG) in multiple
layers of its architecture. GreaseLM takes as input the natural language context and a graph neural network that reasons
over the KG, ultimately demonstrating superior results in commonsense reasoning.`),ht=h(),Qe=a("p"),Xt=n("The abstract from the paper is the following:"),mt=h(),Be=a("p"),Vt=n(`Answering complex questions about textual narratives requires reasoning over both stated context and the world
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
models 8x larger.`),pt=h(),Ue=a("p"),Jt=n("Tips:"),ft=h(),w(me.$$.fragment),ut=h(),z=a("p"),Yt=n("This model was contributed by "),pe=a("a"),Zt=n("vblagoje"),en=n(`.
The original code can be found `),fe=a("a"),on=n("here"),tn=n("."),gt=h(),S=a("h2"),ee=a("a"),po=a("span"),w(ue.$$.fragment),nn=h(),fo=a("span"),rn=n("GreaseLMConfig"),_t=h(),G=a("div"),w(ge.$$.fragment),an=h(),Q=a("p"),sn=n("This is the configuration class to store the configuration of a "),Re=a("a"),ln=n("GreaseLMModel"),cn=n(`. It is used to instantiate a
GreaseLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GreaseLM
`),_e=a("a"),dn=n("Xikun/greaselm-csqa"),hn=n(" architecture."),mn=h(),B=a("p"),pn=n("Configuration objects inherit from "),He=a("a"),fn=n("PretrainedConfig"),un=n(` and can be used to control the model outputs. Read the
documentation from `),Ke=a("a"),gn=n("PretrainedConfig"),_n=n(" for more information."),vn=h(),U=a("p"),bn=n("The "),We=a("a"),wn=n("GreaseLMConfig"),yn=n(" class is identical to "),Xe=a("a"),Mn=n("BertConfig"),xn=n(" with a few additional attributes."),Ln=h(),w(oe.$$.fragment),vt=h(),R=a("h2"),te=a("a"),uo=a("span"),w(ve.$$.fragment),kn=h(),go=a("span"),qn=n("GreaseLMFeatureExtractor"),bt=h(),$=a("div"),w(be.$$.fragment),En=h(),_o=a("p"),Gn=n("Constructs a GreaseLM feature extractor."),$n=h(),we=a("p"),Tn=n("This feature extractor inherits from "),Ve=a("a"),Cn=n("FeatureExtractionMixin"),An=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Pn=h(),vo=a("p"),zn=n(`[\u2018GreaseLMFeatureExtractor\u2019] converts CommonSenseQA or OpenBookQA question-answer example(s) into a batch of graph
encodings.`),jn=h(),ne=a("div"),w(ye.$$.fragment),Dn=h(),bo=a("p"),Fn=n("Main method to encode a question-answer example(s) into a graph representation ready for model input."),wt=h(),H=a("h2"),re=a("a"),wo=a("span"),w(Me.$$.fragment),On=h(),yo=a("span"),In=n("GreaseLMProcessor"),yt=h(),T=a("div"),w(xe.$$.fragment),Nn=h(),Le=a("p"),Sn=n("Constructs a GreaseLM processor which wraps a "),Je=a("a"),Qn=n("GreaseLMFeatureExtractor"),Bn=n(" and a [\u2018RobertaTokenizer`] into a single\nprocessor."),Un=h(),Ye=a("p"),Ze=a("a"),Rn=n("GreaseLMProcessor"),Hn=n(" offers all the functionalities you need to prepare data for the model."),Kn=h(),Mo=a("p"),Wn=n(`It uses [\u2018GreaseLMFeatureExtractor\u2019] to convert CommonSenseQA or OpenBookQA question-answer example(s) into a batch
of graph encodings and then encodes examples into a batch of language model encodings, finally combining graph and
language model encodings into a model ready input.`),Xn=h(),ae=a("div"),w(ke.$$.fragment),Vn=h(),xo=a("p"),Jn=n(`Main method that takes question-answer example(s) and encodes them into a batch of language model encodings and
a batch of graph encodings combining the two encodings ready for GreaseLM model input`),Mt=h(),K=a("h2"),se=a("a"),Lo=a("span"),w(qe.$$.fragment),Yn=h(),ko=a("span"),Zn=n("GreaseLMModel"),xt=h(),_=a("div"),w(Ee.$$.fragment),er=h(),qo=a("p"),or=n("The bare greaselm Model transformer outputting raw hidden-states without any specific head on top."),tr=h(),Ge=a("p"),nr=n("This model inherits from "),eo=a("a"),rr=n("PreTrainedModel"),ar=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sr=h(),$e=a("p"),ir=n("This model is also a PyTorch "),Te=a("a"),lr=n("torch.nn.Module"),cr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dr=h(),Eo=a("p"),hr=n(`Answering complex questions about textual narratives requires reasoning over both stated context and the world
knowledge that underlies it. However, pretrained language models (LM), the foundation of most modern QA systems, do
not robustly represent latent relationships between concepts, which is necessary for reasoning. While knowledge
graphs (KG) are often used to augment LMs with structured representations of world knowledge, it remains an open
question how to effectively fuse and reason over the KG representations and the language context, which provides
situational constraints and nuances. In this work, we propose GreaseLM, a new model that fuses encoded
representations from pretrained LMs and graph neural networks over multiple layers of modality interaction
operations. Information from both modalities propagates to the other, allowing language context representations to
be grounded by structured world knowledge, and allowing linguistic nuances (e.g., negation, hedging) in the context
to inform the graph representations of knowledge.`),mr=h(),Go=a("p"),pr=n("Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec"),fr=h(),oo=a("p"),ur=n("For more details see: "),Ce=a("a"),gr=n("https://arxiv.org/abs/2201.08860"),_r=h(),j=a("div"),w(Ae.$$.fragment),vr=h(),W=a("p"),br=n("The "),to=a("a"),wr=n("GreaseLMModel"),yr=n(" forward method, overrides the "),$o=a("code"),Mr=n("__call__"),xr=n(" special method."),Lr=h(),w(ie.$$.fragment),Lt=h(),X=a("h2"),le=a("a"),To=a("span"),w(Pe.$$.fragment),kr=h(),Co=a("span"),qr=n("GreaseLMForMultipleChoice"),kt=h(),C=a("div"),w(ze.$$.fragment),Er=h(),Ao=a("p"),Gr=n("GreaseLM Model with a multiple choice classification head on top for CommonsSenseQA and OpenBookQA tasks."),$r=h(),je=a("p"),Tr=n("This model inherits from "),no=a("a"),Cr=n("PreTrainedModel"),Ar=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pr=h(),De=a("p"),zr=n("This model is also a PyTorch "),Fe=a("a"),jr=n("torch.nn.Module"),Dr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fr=h(),ce=a("div"),w(Oe.$$.fragment),Or=h(),c=a("p"),Ir=n(`:param input_ids:
(`),Po=a("code"),Nr=n("torch.LongTensor"),Sr=n(" of shape "),zo=a("code"),Qr=n("(batch_size, number_of_choices, seq_len)"),Br=n(`):
Input ids for the language model.
:param attention_mask:
(`),jo=a("code"),Ur=n("torch.LongTensor"),Rr=n(" of shape "),Do=a("code"),Hr=n("(batch_size, number_of_choices, seq_len)"),Kr=n(`):
Attention mask for the language model.
:param token_type_ids:
(`),Fo=a("code"),Wr=n("torch.LongTensor"),Xr=n(" of shape "),Oo=a("code"),Vr=n("(batch_size, number_of_choices, seq_len)"),Jr=n(`):
Token type ids for the language model.
:param special_tokens_mask:
(`),Io=a("code"),Yr=n("torch.LongTensor"),Zr=n(" of shape "),No=a("code"),ea=n("(batch_size, number_of_choices, seq_len)"),oa=n(`):
Output mask for the language model.
:param concept_ids:
(`),So=a("code"),ta=n("torch.LongTensor"),na=n(" of shape "),Qo=a("code"),ra=n("(batch_size, number_of_choices, max_node_num)"),aa=n(`):
Resolved conceptnet ids.
:param node_type_ids:
(`),Bo=a("code"),sa=n("torch.LongTensor"),ia=n(" of shape "),Uo=a("code"),la=n("(batch_size, number_of_choices, max_node_num)"),ca=n(`):
Conceptnet id types where 0 == question entity; 1 == answer choice entity; 2 == other node; 3 ==
context node
:param node_scores:
(`),Ro=a("code"),da=n("torch.FloatTensor"),ha=n(" of shape "),Ho=a("code"),ma=n("(batch_size, number_of_choices, max_node_num, 1)"),pa=n(`):
LM relevancy scores for each resolved conceptnet id.
:param adj_lengths:
(`),Ko=a("code"),fa=n("torch.LongTensor"),ua=n(" of shape "),Wo=a("code"),ga=n("(batch_size, number_of_choices)"),_a=n(`):
Adjacency matrix lengths for each batch sample.
:param special_nodes_mask:
(`),Xo=a("code"),va=n("torch.BoolTensor"),ba=n(" of shape "),Vo=a("code"),wa=n("(batch_size, number_of_choices, max_node_num)"),ya=n(`):
Mask identifying special nodes in the graph (interaction node in the GreaseLM paper).
:param edge_index:
(`),Jo=a("code"),Ma=n("torch.LongTensor"),xa=n(" of shape "),Yo=a("code"),La=n("(2, E)"),ka=n(`):
Edge index for the input graph, where E is the total number of edges in the particular graph.
:param edge_type:
(`),Zo=a("code"),qa=n("torch.LongTensor"),Ea=n(" of shape "),et=a("code"),Ga=n("(E,)"),$a=n(`):
Edge types for the input graph, where E is the total number of edges in the particular graph.
:param labels:
(`),ot=a("code"),Ta=n("torch.LongTensor"),Ca=n(" of shape "),tt=a("code"),Aa=n("(batch_size,)"),Pa=n(", "),nt=a("em"),za=n("optional"),ja=n(`):
Labels for computing the multiple choice classification loss. Indices should be in [0, \u2026,
num_choices-1]
:param emb_data:
(`),rt=a("code"),Da=n("torch.LongTensor"),Fa=n(" of shape "),at=a("code"),Oa=n("(batch_size, number_of_choices, max_node_num, emb_dim)"),Ia=n(", "),st=a("em"),Na=n("optional"),Sa=n(`,
defaults to `),it=a("code"),Qa=n("None"),Ba=n(`):
Contextualized embedding concept data`),this.h()},l(t){const p=Mi('[data-svelte="svelte-1phssyn"]',document.head);g=s(p,"META",{name:!0,content:!0}),p.forEach(o),P=m(t),v=s(t,"H1",{class:!0});var Ie=i(v);b=s(Ie,"A",{id:!0,class:!0,href:!0});var lt=i(b);A=s(lt,"SPAN",{});var Ha=i(A);y(u.$$.fragment,Ha),Ha.forEach(o),lt.forEach(o),q=m(Ie),J=s(Ie,"SPAN",{});var Ka=i(J);Bt=r(Ka,"GreaseLM"),Ka.forEach(o),Ie.forEach(o),ct=m(t),N=s(t,"H2",{class:!0});var Et=i(N);Y=s(Et,"A",{id:!0,class:!0,href:!0});var Wa=i(Y);ho=s(Wa,"SPAN",{});var Xa=i(ho);y(de.$$.fragment,Xa),Xa.forEach(o),Wa.forEach(o),Ut=m(Et),mo=s(Et,"SPAN",{});var Va=i(mo);Rt=r(Va,"Overview"),Va.forEach(o),Et.forEach(o),dt=m(t),Z=s(t,"P",{});var Gt=i(Z);Ht=r(Gt,"The GreaseLM model was proposed in "),he=s(Gt,"A",{href:!0,rel:!0});var Ja=i(he);Kt=r(Ja,"GreaseLM: Graph REASoning Enhanced Language Models for Question Answering"),Ja.forEach(o),Wt=r(Gt,` by Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec.
GreaseLM enables the fusion and exchange of information from the language model and the knowledge graph (KG) in multiple
layers of its architecture. GreaseLM takes as input the natural language context and a graph neural network that reasons
over the KG, ultimately demonstrating superior results in commonsense reasoning.`),Gt.forEach(o),ht=m(t),Qe=s(t,"P",{});var Ya=i(Qe);Xt=r(Ya,"The abstract from the paper is the following:"),Ya.forEach(o),mt=m(t),Be=s(t,"P",{});var Za=i(Be);Vt=r(Za,`Answering complex questions about textual narratives requires reasoning over both stated context and the world
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
models 8x larger.`),Za.forEach(o),pt=m(t),Ue=s(t,"P",{});var es=i(Ue);Jt=r(es,"Tips:"),es.forEach(o),ft=m(t),y(me.$$.fragment,t),ut=m(t),z=s(t,"P",{});var ro=i(z);Yt=r(ro,"This model was contributed by "),pe=s(ro,"A",{href:!0,rel:!0});var os=i(pe);Zt=r(os,"vblagoje"),os.forEach(o),en=r(ro,`.
The original code can be found `),fe=s(ro,"A",{href:!0,rel:!0});var ts=i(fe);on=r(ts,"here"),ts.forEach(o),tn=r(ro,"."),ro.forEach(o),gt=m(t),S=s(t,"H2",{class:!0});var $t=i(S);ee=s($t,"A",{id:!0,class:!0,href:!0});var ns=i(ee);po=s(ns,"SPAN",{});var rs=i(po);y(ue.$$.fragment,rs),rs.forEach(o),ns.forEach(o),nn=m($t),fo=s($t,"SPAN",{});var as=i(fo);rn=r(as,"GreaseLMConfig"),as.forEach(o),$t.forEach(o),_t=m(t),G=s(t,"DIV",{class:!0});var D=i(G);y(ge.$$.fragment,D),an=m(D),Q=s(D,"P",{});var ao=i(Q);sn=r(ao,"This is the configuration class to store the configuration of a "),Re=s(ao,"A",{href:!0});var ss=i(Re);ln=r(ss,"GreaseLMModel"),ss.forEach(o),cn=r(ao,`. It is used to instantiate a
GreaseLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GreaseLM
`),_e=s(ao,"A",{href:!0,rel:!0});var is=i(_e);dn=r(is,"Xikun/greaselm-csqa"),is.forEach(o),hn=r(ao," architecture."),ao.forEach(o),mn=m(D),B=s(D,"P",{});var so=i(B);pn=r(so,"Configuration objects inherit from "),He=s(so,"A",{href:!0});var ls=i(He);fn=r(ls,"PretrainedConfig"),ls.forEach(o),un=r(so,` and can be used to control the model outputs. Read the
documentation from `),Ke=s(so,"A",{href:!0});var cs=i(Ke);gn=r(cs,"PretrainedConfig"),cs.forEach(o),_n=r(so," for more information."),so.forEach(o),vn=m(D),U=s(D,"P",{});var io=i(U);bn=r(io,"The "),We=s(io,"A",{href:!0});var ds=i(We);wn=r(ds,"GreaseLMConfig"),ds.forEach(o),yn=r(io," class is identical to "),Xe=s(io,"A",{href:!0});var hs=i(Xe);Mn=r(hs,"BertConfig"),hs.forEach(o),xn=r(io," with a few additional attributes."),io.forEach(o),Ln=m(D),y(oe.$$.fragment,D),D.forEach(o),vt=m(t),R=s(t,"H2",{class:!0});var Tt=i(R);te=s(Tt,"A",{id:!0,class:!0,href:!0});var ms=i(te);uo=s(ms,"SPAN",{});var ps=i(uo);y(ve.$$.fragment,ps),ps.forEach(o),ms.forEach(o),kn=m(Tt),go=s(Tt,"SPAN",{});var fs=i(go);qn=r(fs,"GreaseLMFeatureExtractor"),fs.forEach(o),Tt.forEach(o),bt=m(t),$=s(t,"DIV",{class:!0});var F=i($);y(be.$$.fragment,F),En=m(F),_o=s(F,"P",{});var us=i(_o);Gn=r(us,"Constructs a GreaseLM feature extractor."),us.forEach(o),$n=m(F),we=s(F,"P",{});var Ct=i(we);Tn=r(Ct,"This feature extractor inherits from "),Ve=s(Ct,"A",{href:!0});var gs=i(Ve);Cn=r(gs,"FeatureExtractionMixin"),gs.forEach(o),An=r(Ct,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ct.forEach(o),Pn=m(F),vo=s(F,"P",{});var _s=i(vo);zn=r(_s,`[\u2018GreaseLMFeatureExtractor\u2019] converts CommonSenseQA or OpenBookQA question-answer example(s) into a batch of graph
encodings.`),_s.forEach(o),jn=m(F),ne=s(F,"DIV",{class:!0});var At=i(ne);y(ye.$$.fragment,At),Dn=m(At),bo=s(At,"P",{});var vs=i(bo);Fn=r(vs,"Main method to encode a question-answer example(s) into a graph representation ready for model input."),vs.forEach(o),At.forEach(o),F.forEach(o),wt=m(t),H=s(t,"H2",{class:!0});var Pt=i(H);re=s(Pt,"A",{id:!0,class:!0,href:!0});var bs=i(re);wo=s(bs,"SPAN",{});var ws=i(wo);y(Me.$$.fragment,ws),ws.forEach(o),bs.forEach(o),On=m(Pt),yo=s(Pt,"SPAN",{});var ys=i(yo);In=r(ys,"GreaseLMProcessor"),ys.forEach(o),Pt.forEach(o),yt=m(t),T=s(t,"DIV",{class:!0});var O=i(T);y(xe.$$.fragment,O),Nn=m(O),Le=s(O,"P",{});var zt=i(Le);Sn=r(zt,"Constructs a GreaseLM processor which wraps a "),Je=s(zt,"A",{href:!0});var Ms=i(Je);Qn=r(Ms,"GreaseLMFeatureExtractor"),Ms.forEach(o),Bn=r(zt," and a [\u2018RobertaTokenizer`] into a single\nprocessor."),zt.forEach(o),Un=m(O),Ye=s(O,"P",{});var Ua=i(Ye);Ze=s(Ua,"A",{href:!0});var xs=i(Ze);Rn=r(xs,"GreaseLMProcessor"),xs.forEach(o),Hn=r(Ua," offers all the functionalities you need to prepare data for the model."),Ua.forEach(o),Kn=m(O),Mo=s(O,"P",{});var Ls=i(Mo);Wn=r(Ls,`It uses [\u2018GreaseLMFeatureExtractor\u2019] to convert CommonSenseQA or OpenBookQA question-answer example(s) into a batch
of graph encodings and then encodes examples into a batch of language model encodings, finally combining graph and
language model encodings into a model ready input.`),Ls.forEach(o),Xn=m(O),ae=s(O,"DIV",{class:!0});var jt=i(ae);y(ke.$$.fragment,jt),Vn=m(jt),xo=s(jt,"P",{});var ks=i(xo);Jn=r(ks,`Main method that takes question-answer example(s) and encodes them into a batch of language model encodings and
a batch of graph encodings combining the two encodings ready for GreaseLM model input`),ks.forEach(o),jt.forEach(o),O.forEach(o),Mt=m(t),K=s(t,"H2",{class:!0});var Dt=i(K);se=s(Dt,"A",{id:!0,class:!0,href:!0});var qs=i(se);Lo=s(qs,"SPAN",{});var Es=i(Lo);y(qe.$$.fragment,Es),Es.forEach(o),qs.forEach(o),Yn=m(Dt),ko=s(Dt,"SPAN",{});var Gs=i(ko);Zn=r(Gs,"GreaseLMModel"),Gs.forEach(o),Dt.forEach(o),xt=m(t),_=s(t,"DIV",{class:!0});var E=i(_);y(Ee.$$.fragment,E),er=m(E),qo=s(E,"P",{});var $s=i(qo);or=r($s,"The bare greaselm Model transformer outputting raw hidden-states without any specific head on top."),$s.forEach(o),tr=m(E),Ge=s(E,"P",{});var Ft=i(Ge);nr=r(Ft,"This model inherits from "),eo=s(Ft,"A",{href:!0});var Ts=i(eo);rr=r(Ts,"PreTrainedModel"),Ts.forEach(o),ar=r(Ft,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ft.forEach(o),sr=m(E),$e=s(E,"P",{});var Ot=i($e);ir=r(Ot,"This model is also a PyTorch "),Te=s(Ot,"A",{href:!0,rel:!0});var Cs=i(Te);lr=r(Cs,"torch.nn.Module"),Cs.forEach(o),cr=r(Ot,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ot.forEach(o),dr=m(E),Eo=s(E,"P",{});var As=i(Eo);hr=r(As,`Answering complex questions about textual narratives requires reasoning over both stated context and the world
knowledge that underlies it. However, pretrained language models (LM), the foundation of most modern QA systems, do
not robustly represent latent relationships between concepts, which is necessary for reasoning. While knowledge
graphs (KG) are often used to augment LMs with structured representations of world knowledge, it remains an open
question how to effectively fuse and reason over the KG representations and the language context, which provides
situational constraints and nuances. In this work, we propose GreaseLM, a new model that fuses encoded
representations from pretrained LMs and graph neural networks over multiple layers of modality interaction
operations. Information from both modalities propagates to the other, allowing language context representations to
be grounded by structured world knowledge, and allowing linguistic nuances (e.g., negation, hedging) in the context
to inform the graph representations of knowledge.`),As.forEach(o),mr=m(E),Go=s(E,"P",{});var Ps=i(Go);pr=r(Ps,"Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec"),Ps.forEach(o),fr=m(E),oo=s(E,"P",{});var Ra=i(oo);ur=r(Ra,"For more details see: "),Ce=s(Ra,"A",{href:!0,rel:!0});var zs=i(Ce);gr=r(zs,"https://arxiv.org/abs/2201.08860"),zs.forEach(o),Ra.forEach(o),_r=m(E),j=s(E,"DIV",{class:!0});var lo=i(j);y(Ae.$$.fragment,lo),vr=m(lo),W=s(lo,"P",{});var co=i(W);br=r(co,"The "),to=s(co,"A",{href:!0});var js=i(to);wr=r(js,"GreaseLMModel"),js.forEach(o),yr=r(co," forward method, overrides the "),$o=s(co,"CODE",{});var Ds=i($o);Mr=r(Ds,"__call__"),Ds.forEach(o),xr=r(co," special method."),co.forEach(o),Lr=m(lo),y(ie.$$.fragment,lo),lo.forEach(o),E.forEach(o),Lt=m(t),X=s(t,"H2",{class:!0});var It=i(X);le=s(It,"A",{id:!0,class:!0,href:!0});var Fs=i(le);To=s(Fs,"SPAN",{});var Os=i(To);y(Pe.$$.fragment,Os),Os.forEach(o),Fs.forEach(o),kr=m(It),Co=s(It,"SPAN",{});var Is=i(Co);qr=r(Is,"GreaseLMForMultipleChoice"),Is.forEach(o),It.forEach(o),kt=m(t),C=s(t,"DIV",{class:!0});var I=i(C);y(ze.$$.fragment,I),Er=m(I),Ao=s(I,"P",{});var Ns=i(Ao);Gr=r(Ns,"GreaseLM Model with a multiple choice classification head on top for CommonsSenseQA and OpenBookQA tasks."),Ns.forEach(o),$r=m(I),je=s(I,"P",{});var Nt=i(je);Tr=r(Nt,"This model inherits from "),no=s(Nt,"A",{href:!0});var Ss=i(no);Cr=r(Ss,"PreTrainedModel"),Ss.forEach(o),Ar=r(Nt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nt.forEach(o),Pr=m(I),De=s(I,"P",{});var St=i(De);zr=r(St,"This model is also a PyTorch "),Fe=s(St,"A",{href:!0,rel:!0});var Qs=i(Fe);jr=r(Qs,"torch.nn.Module"),Qs.forEach(o),Dr=r(St,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),St.forEach(o),Fr=m(I),ce=s(I,"DIV",{class:!0});var Qt=i(ce);y(Oe.$$.fragment,Qt),Or=m(Qt),c=s(Qt,"P",{});var d=i(c);Ir=r(d,`:param input_ids:
(`),Po=s(d,"CODE",{});var Bs=i(Po);Nr=r(Bs,"torch.LongTensor"),Bs.forEach(o),Sr=r(d," of shape "),zo=s(d,"CODE",{});var Us=i(zo);Qr=r(Us,"(batch_size, number_of_choices, seq_len)"),Us.forEach(o),Br=r(d,`):
Input ids for the language model.
:param attention_mask:
(`),jo=s(d,"CODE",{});var Rs=i(jo);Ur=r(Rs,"torch.LongTensor"),Rs.forEach(o),Rr=r(d," of shape "),Do=s(d,"CODE",{});var Hs=i(Do);Hr=r(Hs,"(batch_size, number_of_choices, seq_len)"),Hs.forEach(o),Kr=r(d,`):
Attention mask for the language model.
:param token_type_ids:
(`),Fo=s(d,"CODE",{});var Ks=i(Fo);Wr=r(Ks,"torch.LongTensor"),Ks.forEach(o),Xr=r(d," of shape "),Oo=s(d,"CODE",{});var Ws=i(Oo);Vr=r(Ws,"(batch_size, number_of_choices, seq_len)"),Ws.forEach(o),Jr=r(d,`):
Token type ids for the language model.
:param special_tokens_mask:
(`),Io=s(d,"CODE",{});var Xs=i(Io);Yr=r(Xs,"torch.LongTensor"),Xs.forEach(o),Zr=r(d," of shape "),No=s(d,"CODE",{});var Vs=i(No);ea=r(Vs,"(batch_size, number_of_choices, seq_len)"),Vs.forEach(o),oa=r(d,`):
Output mask for the language model.
:param concept_ids:
(`),So=s(d,"CODE",{});var Js=i(So);ta=r(Js,"torch.LongTensor"),Js.forEach(o),na=r(d," of shape "),Qo=s(d,"CODE",{});var Ys=i(Qo);ra=r(Ys,"(batch_size, number_of_choices, max_node_num)"),Ys.forEach(o),aa=r(d,`):
Resolved conceptnet ids.
:param node_type_ids:
(`),Bo=s(d,"CODE",{});var Zs=i(Bo);sa=r(Zs,"torch.LongTensor"),Zs.forEach(o),ia=r(d," of shape "),Uo=s(d,"CODE",{});var ei=i(Uo);la=r(ei,"(batch_size, number_of_choices, max_node_num)"),ei.forEach(o),ca=r(d,`):
Conceptnet id types where 0 == question entity; 1 == answer choice entity; 2 == other node; 3 ==
context node
:param node_scores:
(`),Ro=s(d,"CODE",{});var oi=i(Ro);da=r(oi,"torch.FloatTensor"),oi.forEach(o),ha=r(d," of shape "),Ho=s(d,"CODE",{});var ti=i(Ho);ma=r(ti,"(batch_size, number_of_choices, max_node_num, 1)"),ti.forEach(o),pa=r(d,`):
LM relevancy scores for each resolved conceptnet id.
:param adj_lengths:
(`),Ko=s(d,"CODE",{});var ni=i(Ko);fa=r(ni,"torch.LongTensor"),ni.forEach(o),ua=r(d," of shape "),Wo=s(d,"CODE",{});var ri=i(Wo);ga=r(ri,"(batch_size, number_of_choices)"),ri.forEach(o),_a=r(d,`):
Adjacency matrix lengths for each batch sample.
:param special_nodes_mask:
(`),Xo=s(d,"CODE",{});var ai=i(Xo);va=r(ai,"torch.BoolTensor"),ai.forEach(o),ba=r(d," of shape "),Vo=s(d,"CODE",{});var si=i(Vo);wa=r(si,"(batch_size, number_of_choices, max_node_num)"),si.forEach(o),ya=r(d,`):
Mask identifying special nodes in the graph (interaction node in the GreaseLM paper).
:param edge_index:
(`),Jo=s(d,"CODE",{});var ii=i(Jo);Ma=r(ii,"torch.LongTensor"),ii.forEach(o),xa=r(d," of shape "),Yo=s(d,"CODE",{});var li=i(Yo);La=r(li,"(2, E)"),li.forEach(o),ka=r(d,`):
Edge index for the input graph, where E is the total number of edges in the particular graph.
:param edge_type:
(`),Zo=s(d,"CODE",{});var ci=i(Zo);qa=r(ci,"torch.LongTensor"),ci.forEach(o),Ea=r(d," of shape "),et=s(d,"CODE",{});var di=i(et);Ga=r(di,"(E,)"),di.forEach(o),$a=r(d,`):
Edge types for the input graph, where E is the total number of edges in the particular graph.
:param labels:
(`),ot=s(d,"CODE",{});var hi=i(ot);Ta=r(hi,"torch.LongTensor"),hi.forEach(o),Ca=r(d," of shape "),tt=s(d,"CODE",{});var mi=i(tt);Aa=r(mi,"(batch_size,)"),mi.forEach(o),Pa=r(d,", "),nt=s(d,"EM",{});var pi=i(nt);za=r(pi,"optional"),pi.forEach(o),ja=r(d,`):
Labels for computing the multiple choice classification loss. Indices should be in [0, \u2026,
num_choices-1]
:param emb_data:
(`),rt=s(d,"CODE",{});var fi=i(rt);Da=r(fi,"torch.LongTensor"),fi.forEach(o),Fa=r(d," of shape "),at=s(d,"CODE",{});var ui=i(at);Oa=r(ui,"(batch_size, number_of_choices, max_node_num, emb_dim)"),ui.forEach(o),Ia=r(d,", "),st=s(d,"EM",{});var gi=i(st);Na=r(gi,"optional"),gi.forEach(o),Sa=r(d,`,
defaults to `),it=s(d,"CODE",{});var _i=i(it);Qa=r(_i,"None"),_i.forEach(o),Ba=r(d,`):
Contextualized embedding concept data`),d.forEach(o),Qt.forEach(o),I.forEach(o),this.h()},h(){l(g,"name","hf:doc:metadata"),l(g,"content",JSON.stringify(Ti)),l(b,"id","greaselm"),l(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(b,"href","#greaselm"),l(v,"class","relative group"),l(Y,"id","overview"),l(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Y,"href","#overview"),l(N,"class","relative group"),l(he,"href","https://arxiv.org/abs/2201.08860"),l(he,"rel","nofollow"),l(pe,"href","https://huggingface.co/vblagoje"),l(pe,"rel","nofollow"),l(fe,"href","https://github.com/snap-stanford/GreaseLM"),l(fe,"rel","nofollow"),l(ee,"id","transformers.GreaseLMConfig"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#transformers.GreaseLMConfig"),l(S,"class","relative group"),l(Re,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel"),l(_e,"href","https://huggingface.co/Xikun/greaselm-csqa"),l(_e,"rel","nofollow"),l(He,"href","/docs/transformers/pr_17146/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ke,"href","/docs/transformers/pr_17146/en/main_classes/configuration#transformers.PretrainedConfig"),l(We,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig"),l(Xe,"href","/docs/transformers/pr_17146/en/model_doc/bert#transformers.BertConfig"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"id","transformers.GreaseLMFeatureExtractor"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.GreaseLMFeatureExtractor"),l(R,"class","relative group"),l(Ve,"href","/docs/transformers/pr_17146/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(re,"id","transformers.GreaseLMProcessor"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.GreaseLMProcessor"),l(H,"class","relative group"),l(Je,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMFeatureExtractor"),l(Ze,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMProcessor"),l(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(se,"id","transformers.GreaseLMModel"),l(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(se,"href","#transformers.GreaseLMModel"),l(K,"class","relative group"),l(eo,"href","/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel"),l(Te,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Te,"rel","nofollow"),l(Ce,"href","https://arxiv.org/abs/2201.08860"),l(Ce,"rel","nofollow"),l(to,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel"),l(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(le,"id","transformers.GreaseLMForMultipleChoice"),l(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(le,"href","#transformers.GreaseLMForMultipleChoice"),l(X,"class","relative group"),l(no,"href","/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel"),l(Fe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Fe,"rel","nofollow"),l(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,g),f(t,P,p),f(t,v,p),e(v,b),e(b,A),M(u,A,null),e(v,q),e(v,J),e(J,Bt),f(t,ct,p),f(t,N,p),e(N,Y),e(Y,ho),M(de,ho,null),e(N,Ut),e(N,mo),e(mo,Rt),f(t,dt,p),f(t,Z,p),e(Z,Ht),e(Z,he),e(he,Kt),e(Z,Wt),f(t,ht,p),f(t,Qe,p),e(Qe,Xt),f(t,mt,p),f(t,Be,p),e(Be,Vt),f(t,pt,p),f(t,Ue,p),e(Ue,Jt),f(t,ft,p),M(me,t,p),f(t,ut,p),f(t,z,p),e(z,Yt),e(z,pe),e(pe,Zt),e(z,en),e(z,fe),e(fe,on),e(z,tn),f(t,gt,p),f(t,S,p),e(S,ee),e(ee,po),M(ue,po,null),e(S,nn),e(S,fo),e(fo,rn),f(t,_t,p),f(t,G,p),M(ge,G,null),e(G,an),e(G,Q),e(Q,sn),e(Q,Re),e(Re,ln),e(Q,cn),e(Q,_e),e(_e,dn),e(Q,hn),e(G,mn),e(G,B),e(B,pn),e(B,He),e(He,fn),e(B,un),e(B,Ke),e(Ke,gn),e(B,_n),e(G,vn),e(G,U),e(U,bn),e(U,We),e(We,wn),e(U,yn),e(U,Xe),e(Xe,Mn),e(U,xn),e(G,Ln),M(oe,G,null),f(t,vt,p),f(t,R,p),e(R,te),e(te,uo),M(ve,uo,null),e(R,kn),e(R,go),e(go,qn),f(t,bt,p),f(t,$,p),M(be,$,null),e($,En),e($,_o),e(_o,Gn),e($,$n),e($,we),e(we,Tn),e(we,Ve),e(Ve,Cn),e(we,An),e($,Pn),e($,vo),e(vo,zn),e($,jn),e($,ne),M(ye,ne,null),e(ne,Dn),e(ne,bo),e(bo,Fn),f(t,wt,p),f(t,H,p),e(H,re),e(re,wo),M(Me,wo,null),e(H,On),e(H,yo),e(yo,In),f(t,yt,p),f(t,T,p),M(xe,T,null),e(T,Nn),e(T,Le),e(Le,Sn),e(Le,Je),e(Je,Qn),e(Le,Bn),e(T,Un),e(T,Ye),e(Ye,Ze),e(Ze,Rn),e(Ye,Hn),e(T,Kn),e(T,Mo),e(Mo,Wn),e(T,Xn),e(T,ae),M(ke,ae,null),e(ae,Vn),e(ae,xo),e(xo,Jn),f(t,Mt,p),f(t,K,p),e(K,se),e(se,Lo),M(qe,Lo,null),e(K,Yn),e(K,ko),e(ko,Zn),f(t,xt,p),f(t,_,p),M(Ee,_,null),e(_,er),e(_,qo),e(qo,or),e(_,tr),e(_,Ge),e(Ge,nr),e(Ge,eo),e(eo,rr),e(Ge,ar),e(_,sr),e(_,$e),e($e,ir),e($e,Te),e(Te,lr),e($e,cr),e(_,dr),e(_,Eo),e(Eo,hr),e(_,mr),e(_,Go),e(Go,pr),e(_,fr),e(_,oo),e(oo,ur),e(oo,Ce),e(Ce,gr),e(_,_r),e(_,j),M(Ae,j,null),e(j,vr),e(j,W),e(W,br),e(W,to),e(to,wr),e(W,yr),e(W,$o),e($o,Mr),e(W,xr),e(j,Lr),M(ie,j,null),f(t,Lt,p),f(t,X,p),e(X,le),e(le,To),M(Pe,To,null),e(X,kr),e(X,Co),e(Co,qr),f(t,kt,p),f(t,C,p),M(ze,C,null),e(C,Er),e(C,Ao),e(Ao,Gr),e(C,$r),e(C,je),e(je,Tr),e(je,no),e(no,Cr),e(je,Ar),e(C,Pr),e(C,De),e(De,zr),e(De,Fe),e(Fe,jr),e(De,Dr),e(C,Fr),e(C,ce),M(Oe,ce,null),e(ce,Or),e(ce,c),e(c,Ir),e(c,Po),e(Po,Nr),e(c,Sr),e(c,zo),e(zo,Qr),e(c,Br),e(c,jo),e(jo,Ur),e(c,Rr),e(c,Do),e(Do,Hr),e(c,Kr),e(c,Fo),e(Fo,Wr),e(c,Xr),e(c,Oo),e(Oo,Vr),e(c,Jr),e(c,Io),e(Io,Yr),e(c,Zr),e(c,No),e(No,ea),e(c,oa),e(c,So),e(So,ta),e(c,na),e(c,Qo),e(Qo,ra),e(c,aa),e(c,Bo),e(Bo,sa),e(c,ia),e(c,Uo),e(Uo,la),e(c,ca),e(c,Ro),e(Ro,da),e(c,ha),e(c,Ho),e(Ho,ma),e(c,pa),e(c,Ko),e(Ko,fa),e(c,ua),e(c,Wo),e(Wo,ga),e(c,_a),e(c,Xo),e(Xo,va),e(c,ba),e(c,Vo),e(Vo,wa),e(c,ya),e(c,Jo),e(Jo,Ma),e(c,xa),e(c,Yo),e(Yo,La),e(c,ka),e(c,Zo),e(Zo,qa),e(c,Ea),e(c,et),e(et,Ga),e(c,$a),e(c,ot),e(ot,Ta),e(c,Ca),e(c,tt),e(tt,Aa),e(c,Pa),e(c,nt),e(nt,za),e(c,ja),e(c,rt),e(rt,Da),e(c,Fa),e(c,at),e(at,Oa),e(c,Ia),e(c,st),e(st,Na),e(c,Sa),e(c,it),e(it,Qa),e(c,Ba),qt=!0},p(t,[p]){const Ie={};p&2&&(Ie.$$scope={dirty:p,ctx:t}),oe.$set(Ie);const lt={};p&2&&(lt.$$scope={dirty:p,ctx:t}),ie.$set(lt)},i(t){qt||(x(u.$$.fragment,t),x(de.$$.fragment,t),x(me.$$.fragment,t),x(ue.$$.fragment,t),x(ge.$$.fragment,t),x(oe.$$.fragment,t),x(ve.$$.fragment,t),x(be.$$.fragment,t),x(ye.$$.fragment,t),x(Me.$$.fragment,t),x(xe.$$.fragment,t),x(ke.$$.fragment,t),x(qe.$$.fragment,t),x(Ee.$$.fragment,t),x(Ae.$$.fragment,t),x(ie.$$.fragment,t),x(Pe.$$.fragment,t),x(ze.$$.fragment,t),x(Oe.$$.fragment,t),qt=!0)},o(t){L(u.$$.fragment,t),L(de.$$.fragment,t),L(me.$$.fragment,t),L(ue.$$.fragment,t),L(ge.$$.fragment,t),L(oe.$$.fragment,t),L(ve.$$.fragment,t),L(be.$$.fragment,t),L(ye.$$.fragment,t),L(Me.$$.fragment,t),L(xe.$$.fragment,t),L(ke.$$.fragment,t),L(qe.$$.fragment,t),L(Ee.$$.fragment,t),L(Ae.$$.fragment,t),L(ie.$$.fragment,t),L(Pe.$$.fragment,t),L(ze.$$.fragment,t),L(Oe.$$.fragment,t),qt=!1},d(t){o(g),t&&o(P),t&&o(v),k(u),t&&o(ct),t&&o(N),k(de),t&&o(dt),t&&o(Z),t&&o(ht),t&&o(Qe),t&&o(mt),t&&o(Be),t&&o(pt),t&&o(Ue),t&&o(ft),k(me,t),t&&o(ut),t&&o(z),t&&o(gt),t&&o(S),k(ue),t&&o(_t),t&&o(G),k(ge),k(oe),t&&o(vt),t&&o(R),k(ve),t&&o(bt),t&&o($),k(be),k(ye),t&&o(wt),t&&o(H),k(Me),t&&o(yt),t&&o(T),k(xe),k(ke),t&&o(Mt),t&&o(K),k(qe),t&&o(xt),t&&o(_),k(Ee),k(Ae),k(ie),t&&o(Lt),t&&o(X),k(Pe),t&&o(kt),t&&o(C),k(ze),k(Oe)}}}const Ti={local:"greaselm",sections:[{local:"overview",title:"Overview"},{local:"transformers.GreaseLMConfig",title:"GreaseLMConfig"},{local:"transformers.GreaseLMFeatureExtractor",title:"GreaseLMFeatureExtractor"},{local:"transformers.GreaseLMProcessor",title:"GreaseLMProcessor"},{local:"transformers.GreaseLMModel",title:"GreaseLMModel"},{local:"transformers.GreaseLMForMultipleChoice",title:"GreaseLMForMultipleChoice"}],title:"GreaseLM"};function Ci(Se){return xi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Oi extends bi{constructor(g){super();wi(this,g,Ci,$i,yi,{})}}export{Oi as default,Ti as metadata};
