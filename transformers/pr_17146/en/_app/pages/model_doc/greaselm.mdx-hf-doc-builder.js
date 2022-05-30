import{S as xi,i as Li,s as ki,e as a,k as h,w,t as n,M as qi,c as s,d as o,m,a as i,x as y,h as r,b as c,G as e,g as f,y as M,q as x,o as L,B as k,v as Ei,L as Gi}from"../../chunks/vendor-hf-doc-builder.js";import{T as $i}from"../../chunks/Tip-hf-doc-builder.js";import{D as V}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Mi}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ie}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ti}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ci(Se){let g,P,v,b,A;return b=new Mi({props:{code:`from transformers import GreaseLMConfig, GreaseLMModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){g=a("p"),P=n("Examples:"),v=h(),w(b.$$.fragment)},l(u){g=s(u,"P",{});var q=i(g);P=r(q,"Examples:"),q.forEach(o),v=m(u),y(b.$$.fragment,u)},m(u,q){f(u,g,q),e(g,P),f(u,v,q),M(b,u,q),A=!0},p:Gi,i(u){A||(x(b.$$.fragment,u),A=!0)},o(u){L(b.$$.fragment,u),A=!1},d(u){u&&o(g),u&&o(v),k(b,u)}}}function Ai(Se){let g,P,v,b,A;return{c(){g=a("p"),P=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),v=a("code"),b=n("Module"),A=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(u){g=s(u,"P",{});var q=i(g);P=r(q,"Although the recipe for forward pass needs to be defined within this function, one should call the "),v=s(q,"CODE",{});var J=i(v);b=r(J,"Module"),J.forEach(o),A=r(q,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),q.forEach(o)},m(u,q){f(u,g,q),e(g,P),e(g,v),e(v,b),e(g,A)},d(u){u&&o(g)}}}function Pi(Se){let g,P,v,b,A,u,q,J,Ut,dt,I,Y,ho,de,Rt,mo,Ht,ht,Z,Kt,he,Wt,Xt,mt,Qe,Vt,pt,Be,Jt,ft,Ue,Yt,ut,me,gt,z,Zt,pe,en,on,fe,tn,nn,_t,S,ee,po,ue,rn,fo,an,vt,G,ge,sn,Q,ln,Re,cn,dn,_e,hn,mn,pn,B,fn,He,un,gn,Ke,_n,vn,bn,U,wn,We,yn,Mn,Xe,xn,Ln,kn,oe,bt,R,te,uo,ve,qn,go,En,wt,$,be,Gn,_o,$n,Tn,we,Cn,Ve,An,Pn,zn,vo,jn,Dn,ne,ye,Fn,bo,On,yt,H,re,wo,Me,Nn,yo,In,Mt,T,xe,Sn,Le,Qn,Je,Bn,Un,Rn,Ye,Ze,Hn,Kn,Wn,Mo,Xn,Vn,ae,ke,Jn,xo,Yn,xt,K,se,Lo,qe,Zn,ko,er,Lt,_,Ee,or,qo,tr,nr,Ge,rr,eo,ar,sr,ir,$e,lr,Te,cr,dr,hr,Eo,mr,pr,Go,fr,ur,oo,gr,Ce,_r,vr,j,Ae,br,W,wr,to,yr,Mr,$o,xr,Lr,kr,ie,kt,X,le,To,Pe,qr,Co,Er,qt,C,ze,Gr,Ao,$r,Tr,je,Cr,no,Ar,Pr,zr,De,jr,Fe,Dr,Fr,Or,ce,Oe,Nr,l,Ir,Po,Sr,Qr,zo,Br,Ur,jo,Rr,Hr,Do,Kr,Wr,Fo,Xr,Vr,Oo,Jr,Yr,No,Zr,ea,Io,oa,ta,So,na,ra,Qo,aa,sa,Bo,ia,la,Uo,ca,da,Ro,ha,ma,Ho,pa,fa,Ko,ua,ga,Wo,_a,va,Xo,ba,wa,Vo,ya,Ma,Jo,xa,La,Yo,ka,qa,Zo,Ea,Ga,et,$a,Ta,ot,Ca,Aa,tt,Pa,za,nt,ja,Da,rt,Fa,Oa,at,Na,Ia,st,Sa,Qa,it,Ba,Ua,lt,Ra,Ha,Et;return u=new Ie({}),de=new Ie({}),me=new Mi({props:{code:`import torch
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
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;For the question <span class="hljs-subst">{idx}</span>, model answered incorrectly, answer is not <span class="hljs-subst">{model_answer}</span> but <span class="hljs-subst">{correct_answer}</span>&quot;</span>)`}}),ue=new Ie({}),ge=new V({props:{name:"class transformers.GreaseLMConfig",anchor:"transformers.GreaseLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"num_gnn_layers",val:" = 5"},{name:"num_node_types",val:" = 4"},{name:"num_edge_types",val:" = 38"},{name:"concept_dim",val:" = 200"},{name:"gnn_hidden_size",val:" = 200"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
Hidden size of the Graph Neural Network (GNN).`,name:"gnn_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/configuration_greaselm.py#L31"}}),oe=new Ti({props:{anchor:"transformers.GreaseLMConfig.example",$$slots:{default:[Ci]},$$scope:{ctx:Se}}}),ve=new Ie({}),be=new V({props:{name:"class transformers.GreaseLMFeatureExtractor",anchor:"transformers.GreaseLMFeatureExtractor",parameters:[{name:"cpnet_vocab_path",val:": typing.Union[pathlib.Path, str] = 'concept.txt'"},{name:"pattern_path",val:": typing.Union[pathlib.Path, str] = 'matcher_patterns.json'"},{name:"pruned_graph_path",val:": typing.Union[pathlib.Path, str] = 'conceptnet_en_pruned.pickle.gz'"},{name:"score_model",val:": typing.Union[pathlib.Path, str] = 'roberta-large'"},{name:"device",val:": str = 'cuda'"},{name:"cxt_node_connects_all",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMFeatureExtractor.cpnet_vocab_path",description:`<strong>cpnet_vocab_path</strong> (<code>Union[Path, str]</code>,  <em>optional</em>, defaults to <code>&quot;concept.txt&quot;</code>) &#x2014;
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
`}}),Me=new Ie({}),xe=new V({props:{name:"class transformers.GreaseLMProcessor",anchor:"transformers.GreaseLMProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""},{name:"max_seq_length",val:" = 128"}],parametersDescription:[{anchor:"transformers.GreaseLMProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMFeatureExtractor">GreaseLMFeatureExtractor</a>) &#x2014;
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
`}}),qe=new Ie({}),Ee=new V({props:{name:"class transformers.GreaseLMModel",anchor:"transformers.GreaseLMModel",parameters:[{name:"config",val:""},{name:"pretrained_concept_emb_file",val:" = None"},{name:"freeze_ent_emb",val:" = True"},{name:"add_pooling_layer",val:" = True"},{name:"dropout",val:" = 0.2"}],parametersDescription:[{anchor:"transformers.GreaseLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig">GreaseLMConfig</a>) &#x2014; Model configuration class with all the parameters of the
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
more detail.`,name:"output_hidden_states"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2237"}}),ie=new $i({props:{$$slots:{default:[Ai]},$$scope:{ctx:Se}}}),Pe=new Ie({}),ze=new V({props:{name:"class transformers.GreaseLMForMultipleChoice",anchor:"transformers.GreaseLMForMultipleChoice",parameters:[{name:"config",val:""},{name:"pretrained_concept_emb_file",val:" = None"}],parametersDescription:[{anchor:"transformers.GreaseLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig">GreaseLMConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2479"}}),Oe=new V({props:{name:"forward",anchor:"transformers.GreaseLMForMultipleChoice.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:""},{name:"token_type_ids",val:""},{name:"special_tokens_mask",val:""},{name:"concept_ids",val:""},{name:"node_type_ids",val:""},{name:"node_scores",val:""},{name:"adj_lengths",val:""},{name:"special_nodes_mask",val:""},{name:"edge_index",val:""},{name:"edge_type",val:""},{name:"labels",val:" = None"},{name:"emb_data",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2513"}}),{c(){g=a("meta"),P=h(),v=a("h1"),b=a("a"),A=a("span"),w(u.$$.fragment),q=h(),J=a("span"),Ut=n("GreaseLM"),dt=h(),I=a("h2"),Y=a("a"),ho=a("span"),w(de.$$.fragment),Rt=h(),mo=a("span"),Ht=n("Overview"),ht=h(),Z=a("p"),Kt=n("The GreaseLM model was proposed in "),he=a("a"),Wt=n("GreaseLM: Graph REASoning Enhanced Language Models for Question Answering"),Xt=n(` by Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec.
GreaseLM enables the fusion and exchange of information from the language model and the knowledge graph (KG) in multiple
layers of its architecture. GreaseLM takes as input the natural language context and a graph neural network that reasons
over the KG, ultimately demonstrating superior results in commonsense reasoning.`),mt=h(),Qe=a("p"),Vt=n("The abstract from the paper is the following:"),pt=h(),Be=a("p"),Jt=n(`Answering complex questions about textual narratives requires reasoning over both stated context and the world
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
models 8x larger.`),ft=h(),Ue=a("p"),Yt=n("Tips:"),ut=h(),w(me.$$.fragment),gt=h(),z=a("p"),Zt=n("This model was contributed by "),pe=a("a"),en=n("vblagoje"),on=n(`.
The original code can be found `),fe=a("a"),tn=n("here"),nn=n("."),_t=h(),S=a("h2"),ee=a("a"),po=a("span"),w(ue.$$.fragment),rn=h(),fo=a("span"),an=n("GreaseLMConfig"),vt=h(),G=a("div"),w(ge.$$.fragment),sn=h(),Q=a("p"),ln=n("This is the configuration class to store the configuration of a "),Re=a("a"),cn=n("GreaseLMModel"),dn=n(`. It is used to instantiate a
GreaseLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GreaseLM
`),_e=a("a"),hn=n("Xikun/greaselm-csqa"),mn=n(" architecture."),pn=h(),B=a("p"),fn=n("Configuration objects inherit from "),He=a("a"),un=n("PretrainedConfig"),gn=n(` and can be used to control the model outputs. Read the
documentation from `),Ke=a("a"),_n=n("PretrainedConfig"),vn=n(" for more information."),bn=h(),U=a("p"),wn=n("The "),We=a("a"),yn=n("GreaseLMConfig"),Mn=n(" class is identical to "),Xe=a("a"),xn=n("BertConfig"),Ln=n(" with a few additional attributes."),kn=h(),w(oe.$$.fragment),bt=h(),R=a("h2"),te=a("a"),uo=a("span"),w(ve.$$.fragment),qn=h(),go=a("span"),En=n("GreaseLMFeatureExtractor"),wt=h(),$=a("div"),w(be.$$.fragment),Gn=h(),_o=a("p"),$n=n("Constructs a GreaseLM feature extractor."),Tn=h(),we=a("p"),Cn=n("This feature extractor inherits from "),Ve=a("a"),An=n("FeatureExtractionMixin"),Pn=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),zn=h(),vo=a("p"),jn=n(`[\u2018GreaseLMFeatureExtractor\u2019] converts CommonSenseQA or OpenBookQA question-answer example(s) into a batch of graph
encodings.`),Dn=h(),ne=a("div"),w(ye.$$.fragment),Fn=h(),bo=a("p"),On=n("Main method to encode a question-answer example(s) into a graph representation ready for model input."),yt=h(),H=a("h2"),re=a("a"),wo=a("span"),w(Me.$$.fragment),Nn=h(),yo=a("span"),In=n("GreaseLMProcessor"),Mt=h(),T=a("div"),w(xe.$$.fragment),Sn=h(),Le=a("p"),Qn=n("Constructs a GreaseLM processor which wraps a "),Je=a("a"),Bn=n("GreaseLMFeatureExtractor"),Un=n(" and a [\u2018RobertaTokenizer`] into a single\nprocessor."),Rn=h(),Ye=a("p"),Ze=a("a"),Hn=n("GreaseLMProcessor"),Kn=n(" offers all the functionalities you need to prepare data for the model."),Wn=h(),Mo=a("p"),Xn=n(`It uses [\u2018GreaseLMFeatureExtractor\u2019] to convert CommonSenseQA or OpenBookQA question-answer example(s) into a batch
of graph encodings and then encodes examples into a batch of language model encodings, finally combining graph and
language model encodings into a model ready input.`),Vn=h(),ae=a("div"),w(ke.$$.fragment),Jn=h(),xo=a("p"),Yn=n(`Main method that takes question-answer example(s) and encodes them into a batch of language model encodings and
a batch of graph encodings combining the two encodings ready for GreaseLM model input`),xt=h(),K=a("h2"),se=a("a"),Lo=a("span"),w(qe.$$.fragment),Zn=h(),ko=a("span"),er=n("GreaseLMModel"),Lt=h(),_=a("div"),w(Ee.$$.fragment),or=h(),qo=a("p"),tr=n("The bare greaselm Model transformer outputting raw hidden-states without any specific head on top."),nr=h(),Ge=a("p"),rr=n("This model inherits from "),eo=a("a"),ar=n("PreTrainedModel"),sr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ir=h(),$e=a("p"),lr=n("This model is also a PyTorch "),Te=a("a"),cr=n("torch.nn.Module"),dr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hr=h(),Eo=a("p"),mr=n(`Answering complex questions about textual narratives requires reasoning over both stated context and the world
knowledge that underlies it. However, pretrained language models (LM), the foundation of most modern QA systems, do
not robustly represent latent relationships between concepts, which is necessary for reasoning. While knowledge
graphs (KG) are often used to augment LMs with structured representations of world knowledge, it remains an open
question how to effectively fuse and reason over the KG representations and the language context, which provides
situational constraints and nuances. In this work, we propose GreaseLM, a new model that fuses encoded
representations from pretrained LMs and graph neural networks over multiple layers of modality interaction
operations. Information from both modalities propagates to the other, allowing language context representations to
be grounded by structured world knowledge, and allowing linguistic nuances (e.g., negation, hedging) in the context
to inform the graph representations of knowledge.`),pr=h(),Go=a("p"),fr=n("Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec"),ur=h(),oo=a("p"),gr=n("For more details see: "),Ce=a("a"),_r=n("https://arxiv.org/abs/2201.08860"),vr=h(),j=a("div"),w(Ae.$$.fragment),br=h(),W=a("p"),wr=n("The "),to=a("a"),yr=n("GreaseLMModel"),Mr=n(" forward method, overrides the "),$o=a("code"),xr=n("__call__"),Lr=n(" special method."),kr=h(),w(ie.$$.fragment),kt=h(),X=a("h2"),le=a("a"),To=a("span"),w(Pe.$$.fragment),qr=h(),Co=a("span"),Er=n("GreaseLMForMultipleChoice"),qt=h(),C=a("div"),w(ze.$$.fragment),Gr=h(),Ao=a("p"),$r=n("GreaseLM Model with a multiple choice classification head on top for CommonsSenseQA and OpenBookQA tasks."),Tr=h(),je=a("p"),Cr=n("This model inherits from "),no=a("a"),Ar=n("PreTrainedModel"),Pr=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zr=h(),De=a("p"),jr=n("This model is also a PyTorch "),Fe=a("a"),Dr=n("torch.nn.Module"),Fr=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Or=h(),ce=a("div"),w(Oe.$$.fragment),Nr=h(),l=a("p"),Ir=n(`:param input_ids:
(`),Po=a("code"),Sr=n("torch.LongTensor"),Qr=n(" of shape "),zo=a("code"),Br=n("(batch_size, number_of_choices, seq_len)"),Ur=n(`):
Input ids for the language model.
:param attention_mask:
(`),jo=a("code"),Rr=n("torch.LongTensor"),Hr=n(" of shape "),Do=a("code"),Kr=n("(batch_size, number_of_choices, seq_len)"),Wr=n(`):
Attention mask for the language model.
:param token_type_ids:
(`),Fo=a("code"),Xr=n("torch.LongTensor"),Vr=n(" of shape "),Oo=a("code"),Jr=n("(batch_size, number_of_choices, seq_len)"),Yr=n(`):
Token type ids for the language model.
:param special_tokens_mask:
(`),No=a("code"),Zr=n("torch.LongTensor"),ea=n(" of shape "),Io=a("code"),oa=n("(batch_size, number_of_choices, seq_len)"),ta=n(`):
Output mask for the language model.
:param concept_ids:
(`),So=a("code"),na=n("torch.LongTensor"),ra=n(" of shape "),Qo=a("code"),aa=n("(batch_size, number_of_choices, max_node_num)"),sa=n(`):
Resolved conceptnet ids.
:param node_type_ids:
(`),Bo=a("code"),ia=n("torch.LongTensor"),la=n(" of shape "),Uo=a("code"),ca=n("(batch_size, number_of_choices, max_node_num)"),da=n(`):
Conceptnet id types where 0 == question entity; 1 == answer choice entity; 2 == other node; 3 ==
context node
:param node_scores:
(`),Ro=a("code"),ha=n("torch.FloatTensor"),ma=n(" of shape "),Ho=a("code"),pa=n("(batch_size, number_of_choices, max_node_num, 1)"),fa=n(`):
LM relevancy scores for each resolved conceptnet id.
:param adj_lengths:
(`),Ko=a("code"),ua=n("torch.LongTensor"),ga=n(" of shape "),Wo=a("code"),_a=n("(batch_size, number_of_choices)"),va=n(`):
Adjacency matrix lengths for each batch sample.
:param special_nodes_mask:
(`),Xo=a("code"),ba=n("torch.BoolTensor"),wa=n(" of shape "),Vo=a("code"),ya=n("(batch_size, number_of_choices, max_node_num)"),Ma=n(`):
Mask identifying special nodes in the graph (interaction node in the GreaseLM paper).
:param edge_index:
(`),Jo=a("code"),xa=n("torch.LongTensor"),La=n(" of shape "),Yo=a("code"),ka=n("(2, E)"),qa=n(`):
Edge index for the input graph, where E is the total number of edges in the particular graph.
:param edge_type:
(`),Zo=a("code"),Ea=n("torch.LongTensor"),Ga=n(" of shape "),et=a("code"),$a=n("(E,)"),Ta=n(`):
Edge types for the input graph, where E is the total number of edges in the particular graph.
:param labels:
(`),ot=a("code"),Ca=n("torch.LongTensor"),Aa=n(" of shape "),tt=a("code"),Pa=n("(batch_size,)"),za=n(", "),nt=a("em"),ja=n("optional"),Da=n(", defaults to "),rt=a("code"),Fa=n("None"),Oa=n(`):
Labels for computing the multiple choice classification loss. Indices should be in [0, \u2026,
num_choices-1]
:param emb_data:
(`),at=a("code"),Na=n("torch.LongTensor"),Ia=n(" of shape "),st=a("code"),Sa=n("(batch_size, number_of_choices, max_node_num, emb_dim)"),Qa=n(", "),it=a("em"),Ba=n("optional"),Ua=n(`,
defaults to `),lt=a("code"),Ra=n("None"),Ha=n(`):
Contextualized embedding concept data`),this.h()},l(t){const p=qi('[data-svelte="svelte-1phssyn"]',document.head);g=s(p,"META",{name:!0,content:!0}),p.forEach(o),P=m(t),v=s(t,"H1",{class:!0});var Ne=i(v);b=s(Ne,"A",{id:!0,class:!0,href:!0});var ct=i(b);A=s(ct,"SPAN",{});var Xa=i(A);y(u.$$.fragment,Xa),Xa.forEach(o),ct.forEach(o),q=m(Ne),J=s(Ne,"SPAN",{});var Va=i(J);Ut=r(Va,"GreaseLM"),Va.forEach(o),Ne.forEach(o),dt=m(t),I=s(t,"H2",{class:!0});var Gt=i(I);Y=s(Gt,"A",{id:!0,class:!0,href:!0});var Ja=i(Y);ho=s(Ja,"SPAN",{});var Ya=i(ho);y(de.$$.fragment,Ya),Ya.forEach(o),Ja.forEach(o),Rt=m(Gt),mo=s(Gt,"SPAN",{});var Za=i(mo);Ht=r(Za,"Overview"),Za.forEach(o),Gt.forEach(o),ht=m(t),Z=s(t,"P",{});var $t=i(Z);Kt=r($t,"The GreaseLM model was proposed in "),he=s($t,"A",{href:!0,rel:!0});var es=i(he);Wt=r(es,"GreaseLM: Graph REASoning Enhanced Language Models for Question Answering"),es.forEach(o),Xt=r($t,` by Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec.
GreaseLM enables the fusion and exchange of information from the language model and the knowledge graph (KG) in multiple
layers of its architecture. GreaseLM takes as input the natural language context and a graph neural network that reasons
over the KG, ultimately demonstrating superior results in commonsense reasoning.`),$t.forEach(o),mt=m(t),Qe=s(t,"P",{});var os=i(Qe);Vt=r(os,"The abstract from the paper is the following:"),os.forEach(o),pt=m(t),Be=s(t,"P",{});var ts=i(Be);Jt=r(ts,`Answering complex questions about textual narratives requires reasoning over both stated context and the world
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
models 8x larger.`),ts.forEach(o),ft=m(t),Ue=s(t,"P",{});var ns=i(Ue);Yt=r(ns,"Tips:"),ns.forEach(o),ut=m(t),y(me.$$.fragment,t),gt=m(t),z=s(t,"P",{});var ro=i(z);Zt=r(ro,"This model was contributed by "),pe=s(ro,"A",{href:!0,rel:!0});var rs=i(pe);en=r(rs,"vblagoje"),rs.forEach(o),on=r(ro,`.
The original code can be found `),fe=s(ro,"A",{href:!0,rel:!0});var as=i(fe);tn=r(as,"here"),as.forEach(o),nn=r(ro,"."),ro.forEach(o),_t=m(t),S=s(t,"H2",{class:!0});var Tt=i(S);ee=s(Tt,"A",{id:!0,class:!0,href:!0});var ss=i(ee);po=s(ss,"SPAN",{});var is=i(po);y(ue.$$.fragment,is),is.forEach(o),ss.forEach(o),rn=m(Tt),fo=s(Tt,"SPAN",{});var ls=i(fo);an=r(ls,"GreaseLMConfig"),ls.forEach(o),Tt.forEach(o),vt=m(t),G=s(t,"DIV",{class:!0});var D=i(G);y(ge.$$.fragment,D),sn=m(D),Q=s(D,"P",{});var ao=i(Q);ln=r(ao,"This is the configuration class to store the configuration of a "),Re=s(ao,"A",{href:!0});var cs=i(Re);cn=r(cs,"GreaseLMModel"),cs.forEach(o),dn=r(ao,`. It is used to instantiate a
GreaseLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GreaseLM
`),_e=s(ao,"A",{href:!0,rel:!0});var ds=i(_e);hn=r(ds,"Xikun/greaselm-csqa"),ds.forEach(o),mn=r(ao," architecture."),ao.forEach(o),pn=m(D),B=s(D,"P",{});var so=i(B);fn=r(so,"Configuration objects inherit from "),He=s(so,"A",{href:!0});var hs=i(He);un=r(hs,"PretrainedConfig"),hs.forEach(o),gn=r(so,` and can be used to control the model outputs. Read the
documentation from `),Ke=s(so,"A",{href:!0});var ms=i(Ke);_n=r(ms,"PretrainedConfig"),ms.forEach(o),vn=r(so," for more information."),so.forEach(o),bn=m(D),U=s(D,"P",{});var io=i(U);wn=r(io,"The "),We=s(io,"A",{href:!0});var ps=i(We);yn=r(ps,"GreaseLMConfig"),ps.forEach(o),Mn=r(io," class is identical to "),Xe=s(io,"A",{href:!0});var fs=i(Xe);xn=r(fs,"BertConfig"),fs.forEach(o),Ln=r(io," with a few additional attributes."),io.forEach(o),kn=m(D),y(oe.$$.fragment,D),D.forEach(o),bt=m(t),R=s(t,"H2",{class:!0});var Ct=i(R);te=s(Ct,"A",{id:!0,class:!0,href:!0});var us=i(te);uo=s(us,"SPAN",{});var gs=i(uo);y(ve.$$.fragment,gs),gs.forEach(o),us.forEach(o),qn=m(Ct),go=s(Ct,"SPAN",{});var _s=i(go);En=r(_s,"GreaseLMFeatureExtractor"),_s.forEach(o),Ct.forEach(o),wt=m(t),$=s(t,"DIV",{class:!0});var F=i($);y(be.$$.fragment,F),Gn=m(F),_o=s(F,"P",{});var vs=i(_o);$n=r(vs,"Constructs a GreaseLM feature extractor."),vs.forEach(o),Tn=m(F),we=s(F,"P",{});var At=i(we);Cn=r(At,"This feature extractor inherits from "),Ve=s(At,"A",{href:!0});var bs=i(Ve);An=r(bs,"FeatureExtractionMixin"),bs.forEach(o),Pn=r(At,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),At.forEach(o),zn=m(F),vo=s(F,"P",{});var ws=i(vo);jn=r(ws,`[\u2018GreaseLMFeatureExtractor\u2019] converts CommonSenseQA or OpenBookQA question-answer example(s) into a batch of graph
encodings.`),ws.forEach(o),Dn=m(F),ne=s(F,"DIV",{class:!0});var Pt=i(ne);y(ye.$$.fragment,Pt),Fn=m(Pt),bo=s(Pt,"P",{});var ys=i(bo);On=r(ys,"Main method to encode a question-answer example(s) into a graph representation ready for model input."),ys.forEach(o),Pt.forEach(o),F.forEach(o),yt=m(t),H=s(t,"H2",{class:!0});var zt=i(H);re=s(zt,"A",{id:!0,class:!0,href:!0});var Ms=i(re);wo=s(Ms,"SPAN",{});var xs=i(wo);y(Me.$$.fragment,xs),xs.forEach(o),Ms.forEach(o),Nn=m(zt),yo=s(zt,"SPAN",{});var Ls=i(yo);In=r(Ls,"GreaseLMProcessor"),Ls.forEach(o),zt.forEach(o),Mt=m(t),T=s(t,"DIV",{class:!0});var O=i(T);y(xe.$$.fragment,O),Sn=m(O),Le=s(O,"P",{});var jt=i(Le);Qn=r(jt,"Constructs a GreaseLM processor which wraps a "),Je=s(jt,"A",{href:!0});var ks=i(Je);Bn=r(ks,"GreaseLMFeatureExtractor"),ks.forEach(o),Un=r(jt," and a [\u2018RobertaTokenizer`] into a single\nprocessor."),jt.forEach(o),Rn=m(O),Ye=s(O,"P",{});var Ka=i(Ye);Ze=s(Ka,"A",{href:!0});var qs=i(Ze);Hn=r(qs,"GreaseLMProcessor"),qs.forEach(o),Kn=r(Ka," offers all the functionalities you need to prepare data for the model."),Ka.forEach(o),Wn=m(O),Mo=s(O,"P",{});var Es=i(Mo);Xn=r(Es,`It uses [\u2018GreaseLMFeatureExtractor\u2019] to convert CommonSenseQA or OpenBookQA question-answer example(s) into a batch
of graph encodings and then encodes examples into a batch of language model encodings, finally combining graph and
language model encodings into a model ready input.`),Es.forEach(o),Vn=m(O),ae=s(O,"DIV",{class:!0});var Dt=i(ae);y(ke.$$.fragment,Dt),Jn=m(Dt),xo=s(Dt,"P",{});var Gs=i(xo);Yn=r(Gs,`Main method that takes question-answer example(s) and encodes them into a batch of language model encodings and
a batch of graph encodings combining the two encodings ready for GreaseLM model input`),Gs.forEach(o),Dt.forEach(o),O.forEach(o),xt=m(t),K=s(t,"H2",{class:!0});var Ft=i(K);se=s(Ft,"A",{id:!0,class:!0,href:!0});var $s=i(se);Lo=s($s,"SPAN",{});var Ts=i(Lo);y(qe.$$.fragment,Ts),Ts.forEach(o),$s.forEach(o),Zn=m(Ft),ko=s(Ft,"SPAN",{});var Cs=i(ko);er=r(Cs,"GreaseLMModel"),Cs.forEach(o),Ft.forEach(o),Lt=m(t),_=s(t,"DIV",{class:!0});var E=i(_);y(Ee.$$.fragment,E),or=m(E),qo=s(E,"P",{});var As=i(qo);tr=r(As,"The bare greaselm Model transformer outputting raw hidden-states without any specific head on top."),As.forEach(o),nr=m(E),Ge=s(E,"P",{});var Ot=i(Ge);rr=r(Ot,"This model inherits from "),eo=s(Ot,"A",{href:!0});var Ps=i(eo);ar=r(Ps,"PreTrainedModel"),Ps.forEach(o),sr=r(Ot,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ot.forEach(o),ir=m(E),$e=s(E,"P",{});var Nt=i($e);lr=r(Nt,"This model is also a PyTorch "),Te=s(Nt,"A",{href:!0,rel:!0});var zs=i(Te);cr=r(zs,"torch.nn.Module"),zs.forEach(o),dr=r(Nt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nt.forEach(o),hr=m(E),Eo=s(E,"P",{});var js=i(Eo);mr=r(js,`Answering complex questions about textual narratives requires reasoning over both stated context and the world
knowledge that underlies it. However, pretrained language models (LM), the foundation of most modern QA systems, do
not robustly represent latent relationships between concepts, which is necessary for reasoning. While knowledge
graphs (KG) are often used to augment LMs with structured representations of world knowledge, it remains an open
question how to effectively fuse and reason over the KG representations and the language context, which provides
situational constraints and nuances. In this work, we propose GreaseLM, a new model that fuses encoded
representations from pretrained LMs and graph neural networks over multiple layers of modality interaction
operations. Information from both modalities propagates to the other, allowing language context representations to
be grounded by structured world knowledge, and allowing linguistic nuances (e.g., negation, hedging) in the context
to inform the graph representations of knowledge.`),js.forEach(o),pr=m(E),Go=s(E,"P",{});var Ds=i(Go);fr=r(Ds,"Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec"),Ds.forEach(o),ur=m(E),oo=s(E,"P",{});var Wa=i(oo);gr=r(Wa,"For more details see: "),Ce=s(Wa,"A",{href:!0,rel:!0});var Fs=i(Ce);_r=r(Fs,"https://arxiv.org/abs/2201.08860"),Fs.forEach(o),Wa.forEach(o),vr=m(E),j=s(E,"DIV",{class:!0});var lo=i(j);y(Ae.$$.fragment,lo),br=m(lo),W=s(lo,"P",{});var co=i(W);wr=r(co,"The "),to=s(co,"A",{href:!0});var Os=i(to);yr=r(Os,"GreaseLMModel"),Os.forEach(o),Mr=r(co," forward method, overrides the "),$o=s(co,"CODE",{});var Ns=i($o);xr=r(Ns,"__call__"),Ns.forEach(o),Lr=r(co," special method."),co.forEach(o),kr=m(lo),y(ie.$$.fragment,lo),lo.forEach(o),E.forEach(o),kt=m(t),X=s(t,"H2",{class:!0});var It=i(X);le=s(It,"A",{id:!0,class:!0,href:!0});var Is=i(le);To=s(Is,"SPAN",{});var Ss=i(To);y(Pe.$$.fragment,Ss),Ss.forEach(o),Is.forEach(o),qr=m(It),Co=s(It,"SPAN",{});var Qs=i(Co);Er=r(Qs,"GreaseLMForMultipleChoice"),Qs.forEach(o),It.forEach(o),qt=m(t),C=s(t,"DIV",{class:!0});var N=i(C);y(ze.$$.fragment,N),Gr=m(N),Ao=s(N,"P",{});var Bs=i(Ao);$r=r(Bs,"GreaseLM Model with a multiple choice classification head on top for CommonsSenseQA and OpenBookQA tasks."),Bs.forEach(o),Tr=m(N),je=s(N,"P",{});var St=i(je);Cr=r(St,"This model inherits from "),no=s(St,"A",{href:!0});var Us=i(no);Ar=r(Us,"PreTrainedModel"),Us.forEach(o),Pr=r(St,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),St.forEach(o),zr=m(N),De=s(N,"P",{});var Qt=i(De);jr=r(Qt,"This model is also a PyTorch "),Fe=s(Qt,"A",{href:!0,rel:!0});var Rs=i(Fe);Dr=r(Rs,"torch.nn.Module"),Rs.forEach(o),Fr=r(Qt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qt.forEach(o),Or=m(N),ce=s(N,"DIV",{class:!0});var Bt=i(ce);y(Oe.$$.fragment,Bt),Nr=m(Bt),l=s(Bt,"P",{});var d=i(l);Ir=r(d,`:param input_ids:
(`),Po=s(d,"CODE",{});var Hs=i(Po);Sr=r(Hs,"torch.LongTensor"),Hs.forEach(o),Qr=r(d," of shape "),zo=s(d,"CODE",{});var Ks=i(zo);Br=r(Ks,"(batch_size, number_of_choices, seq_len)"),Ks.forEach(o),Ur=r(d,`):
Input ids for the language model.
:param attention_mask:
(`),jo=s(d,"CODE",{});var Ws=i(jo);Rr=r(Ws,"torch.LongTensor"),Ws.forEach(o),Hr=r(d," of shape "),Do=s(d,"CODE",{});var Xs=i(Do);Kr=r(Xs,"(batch_size, number_of_choices, seq_len)"),Xs.forEach(o),Wr=r(d,`):
Attention mask for the language model.
:param token_type_ids:
(`),Fo=s(d,"CODE",{});var Vs=i(Fo);Xr=r(Vs,"torch.LongTensor"),Vs.forEach(o),Vr=r(d," of shape "),Oo=s(d,"CODE",{});var Js=i(Oo);Jr=r(Js,"(batch_size, number_of_choices, seq_len)"),Js.forEach(o),Yr=r(d,`):
Token type ids for the language model.
:param special_tokens_mask:
(`),No=s(d,"CODE",{});var Ys=i(No);Zr=r(Ys,"torch.LongTensor"),Ys.forEach(o),ea=r(d," of shape "),Io=s(d,"CODE",{});var Zs=i(Io);oa=r(Zs,"(batch_size, number_of_choices, seq_len)"),Zs.forEach(o),ta=r(d,`):
Output mask for the language model.
:param concept_ids:
(`),So=s(d,"CODE",{});var ei=i(So);na=r(ei,"torch.LongTensor"),ei.forEach(o),ra=r(d," of shape "),Qo=s(d,"CODE",{});var oi=i(Qo);aa=r(oi,"(batch_size, number_of_choices, max_node_num)"),oi.forEach(o),sa=r(d,`):
Resolved conceptnet ids.
:param node_type_ids:
(`),Bo=s(d,"CODE",{});var ti=i(Bo);ia=r(ti,"torch.LongTensor"),ti.forEach(o),la=r(d," of shape "),Uo=s(d,"CODE",{});var ni=i(Uo);ca=r(ni,"(batch_size, number_of_choices, max_node_num)"),ni.forEach(o),da=r(d,`):
Conceptnet id types where 0 == question entity; 1 == answer choice entity; 2 == other node; 3 ==
context node
:param node_scores:
(`),Ro=s(d,"CODE",{});var ri=i(Ro);ha=r(ri,"torch.FloatTensor"),ri.forEach(o),ma=r(d," of shape "),Ho=s(d,"CODE",{});var ai=i(Ho);pa=r(ai,"(batch_size, number_of_choices, max_node_num, 1)"),ai.forEach(o),fa=r(d,`):
LM relevancy scores for each resolved conceptnet id.
:param adj_lengths:
(`),Ko=s(d,"CODE",{});var si=i(Ko);ua=r(si,"torch.LongTensor"),si.forEach(o),ga=r(d," of shape "),Wo=s(d,"CODE",{});var ii=i(Wo);_a=r(ii,"(batch_size, number_of_choices)"),ii.forEach(o),va=r(d,`):
Adjacency matrix lengths for each batch sample.
:param special_nodes_mask:
(`),Xo=s(d,"CODE",{});var li=i(Xo);ba=r(li,"torch.BoolTensor"),li.forEach(o),wa=r(d," of shape "),Vo=s(d,"CODE",{});var ci=i(Vo);ya=r(ci,"(batch_size, number_of_choices, max_node_num)"),ci.forEach(o),Ma=r(d,`):
Mask identifying special nodes in the graph (interaction node in the GreaseLM paper).
:param edge_index:
(`),Jo=s(d,"CODE",{});var di=i(Jo);xa=r(di,"torch.LongTensor"),di.forEach(o),La=r(d," of shape "),Yo=s(d,"CODE",{});var hi=i(Yo);ka=r(hi,"(2, E)"),hi.forEach(o),qa=r(d,`):
Edge index for the input graph, where E is the total number of edges in the particular graph.
:param edge_type:
(`),Zo=s(d,"CODE",{});var mi=i(Zo);Ea=r(mi,"torch.LongTensor"),mi.forEach(o),Ga=r(d," of shape "),et=s(d,"CODE",{});var pi=i(et);$a=r(pi,"(E,)"),pi.forEach(o),Ta=r(d,`):
Edge types for the input graph, where E is the total number of edges in the particular graph.
:param labels:
(`),ot=s(d,"CODE",{});var fi=i(ot);Ca=r(fi,"torch.LongTensor"),fi.forEach(o),Aa=r(d," of shape "),tt=s(d,"CODE",{});var ui=i(tt);Pa=r(ui,"(batch_size,)"),ui.forEach(o),za=r(d,", "),nt=s(d,"EM",{});var gi=i(nt);ja=r(gi,"optional"),gi.forEach(o),Da=r(d,", defaults to "),rt=s(d,"CODE",{});var _i=i(rt);Fa=r(_i,"None"),_i.forEach(o),Oa=r(d,`):
Labels for computing the multiple choice classification loss. Indices should be in [0, \u2026,
num_choices-1]
:param emb_data:
(`),at=s(d,"CODE",{});var vi=i(at);Na=r(vi,"torch.LongTensor"),vi.forEach(o),Ia=r(d," of shape "),st=s(d,"CODE",{});var bi=i(st);Sa=r(bi,"(batch_size, number_of_choices, max_node_num, emb_dim)"),bi.forEach(o),Qa=r(d,", "),it=s(d,"EM",{});var wi=i(it);Ba=r(wi,"optional"),wi.forEach(o),Ua=r(d,`,
defaults to `),lt=s(d,"CODE",{});var yi=i(lt);Ra=r(yi,"None"),yi.forEach(o),Ha=r(d,`):
Contextualized embedding concept data`),d.forEach(o),Bt.forEach(o),N.forEach(o),this.h()},h(){c(g,"name","hf:doc:metadata"),c(g,"content",JSON.stringify(zi)),c(b,"id","greaselm"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#greaselm"),c(v,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(I,"class","relative group"),c(he,"href","https://arxiv.org/abs/2201.08860"),c(he,"rel","nofollow"),c(pe,"href","https://huggingface.co/vblagoje"),c(pe,"rel","nofollow"),c(fe,"href","https://github.com/snap-stanford/GreaseLM"),c(fe,"rel","nofollow"),c(ee,"id","transformers.GreaseLMConfig"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#transformers.GreaseLMConfig"),c(S,"class","relative group"),c(Re,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel"),c(_e,"href","https://huggingface.co/Xikun/greaselm-csqa"),c(_e,"rel","nofollow"),c(He,"href","/docs/transformers/pr_17146/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ke,"href","/docs/transformers/pr_17146/en/main_classes/configuration#transformers.PretrainedConfig"),c(We,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig"),c(Xe,"href","/docs/transformers/pr_17146/en/model_doc/bert#transformers.BertConfig"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(te,"id","transformers.GreaseLMFeatureExtractor"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#transformers.GreaseLMFeatureExtractor"),c(R,"class","relative group"),c(Ve,"href","/docs/transformers/pr_17146/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),c(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(re,"id","transformers.GreaseLMProcessor"),c(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(re,"href","#transformers.GreaseLMProcessor"),c(H,"class","relative group"),c(Je,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMFeatureExtractor"),c(Ze,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMProcessor"),c(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(se,"id","transformers.GreaseLMModel"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#transformers.GreaseLMModel"),c(K,"class","relative group"),c(eo,"href","/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel"),c(Te,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Te,"rel","nofollow"),c(Ce,"href","https://arxiv.org/abs/2201.08860"),c(Ce,"rel","nofollow"),c(to,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(le,"id","transformers.GreaseLMForMultipleChoice"),c(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(le,"href","#transformers.GreaseLMForMultipleChoice"),c(X,"class","relative group"),c(no,"href","/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel"),c(Fe,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Fe,"rel","nofollow"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,g),f(t,P,p),f(t,v,p),e(v,b),e(b,A),M(u,A,null),e(v,q),e(v,J),e(J,Ut),f(t,dt,p),f(t,I,p),e(I,Y),e(Y,ho),M(de,ho,null),e(I,Rt),e(I,mo),e(mo,Ht),f(t,ht,p),f(t,Z,p),e(Z,Kt),e(Z,he),e(he,Wt),e(Z,Xt),f(t,mt,p),f(t,Qe,p),e(Qe,Vt),f(t,pt,p),f(t,Be,p),e(Be,Jt),f(t,ft,p),f(t,Ue,p),e(Ue,Yt),f(t,ut,p),M(me,t,p),f(t,gt,p),f(t,z,p),e(z,Zt),e(z,pe),e(pe,en),e(z,on),e(z,fe),e(fe,tn),e(z,nn),f(t,_t,p),f(t,S,p),e(S,ee),e(ee,po),M(ue,po,null),e(S,rn),e(S,fo),e(fo,an),f(t,vt,p),f(t,G,p),M(ge,G,null),e(G,sn),e(G,Q),e(Q,ln),e(Q,Re),e(Re,cn),e(Q,dn),e(Q,_e),e(_e,hn),e(Q,mn),e(G,pn),e(G,B),e(B,fn),e(B,He),e(He,un),e(B,gn),e(B,Ke),e(Ke,_n),e(B,vn),e(G,bn),e(G,U),e(U,wn),e(U,We),e(We,yn),e(U,Mn),e(U,Xe),e(Xe,xn),e(U,Ln),e(G,kn),M(oe,G,null),f(t,bt,p),f(t,R,p),e(R,te),e(te,uo),M(ve,uo,null),e(R,qn),e(R,go),e(go,En),f(t,wt,p),f(t,$,p),M(be,$,null),e($,Gn),e($,_o),e(_o,$n),e($,Tn),e($,we),e(we,Cn),e(we,Ve),e(Ve,An),e(we,Pn),e($,zn),e($,vo),e(vo,jn),e($,Dn),e($,ne),M(ye,ne,null),e(ne,Fn),e(ne,bo),e(bo,On),f(t,yt,p),f(t,H,p),e(H,re),e(re,wo),M(Me,wo,null),e(H,Nn),e(H,yo),e(yo,In),f(t,Mt,p),f(t,T,p),M(xe,T,null),e(T,Sn),e(T,Le),e(Le,Qn),e(Le,Je),e(Je,Bn),e(Le,Un),e(T,Rn),e(T,Ye),e(Ye,Ze),e(Ze,Hn),e(Ye,Kn),e(T,Wn),e(T,Mo),e(Mo,Xn),e(T,Vn),e(T,ae),M(ke,ae,null),e(ae,Jn),e(ae,xo),e(xo,Yn),f(t,xt,p),f(t,K,p),e(K,se),e(se,Lo),M(qe,Lo,null),e(K,Zn),e(K,ko),e(ko,er),f(t,Lt,p),f(t,_,p),M(Ee,_,null),e(_,or),e(_,qo),e(qo,tr),e(_,nr),e(_,Ge),e(Ge,rr),e(Ge,eo),e(eo,ar),e(Ge,sr),e(_,ir),e(_,$e),e($e,lr),e($e,Te),e(Te,cr),e($e,dr),e(_,hr),e(_,Eo),e(Eo,mr),e(_,pr),e(_,Go),e(Go,fr),e(_,ur),e(_,oo),e(oo,gr),e(oo,Ce),e(Ce,_r),e(_,vr),e(_,j),M(Ae,j,null),e(j,br),e(j,W),e(W,wr),e(W,to),e(to,yr),e(W,Mr),e(W,$o),e($o,xr),e(W,Lr),e(j,kr),M(ie,j,null),f(t,kt,p),f(t,X,p),e(X,le),e(le,To),M(Pe,To,null),e(X,qr),e(X,Co),e(Co,Er),f(t,qt,p),f(t,C,p),M(ze,C,null),e(C,Gr),e(C,Ao),e(Ao,$r),e(C,Tr),e(C,je),e(je,Cr),e(je,no),e(no,Ar),e(je,Pr),e(C,zr),e(C,De),e(De,jr),e(De,Fe),e(Fe,Dr),e(De,Fr),e(C,Or),e(C,ce),M(Oe,ce,null),e(ce,Nr),e(ce,l),e(l,Ir),e(l,Po),e(Po,Sr),e(l,Qr),e(l,zo),e(zo,Br),e(l,Ur),e(l,jo),e(jo,Rr),e(l,Hr),e(l,Do),e(Do,Kr),e(l,Wr),e(l,Fo),e(Fo,Xr),e(l,Vr),e(l,Oo),e(Oo,Jr),e(l,Yr),e(l,No),e(No,Zr),e(l,ea),e(l,Io),e(Io,oa),e(l,ta),e(l,So),e(So,na),e(l,ra),e(l,Qo),e(Qo,aa),e(l,sa),e(l,Bo),e(Bo,ia),e(l,la),e(l,Uo),e(Uo,ca),e(l,da),e(l,Ro),e(Ro,ha),e(l,ma),e(l,Ho),e(Ho,pa),e(l,fa),e(l,Ko),e(Ko,ua),e(l,ga),e(l,Wo),e(Wo,_a),e(l,va),e(l,Xo),e(Xo,ba),e(l,wa),e(l,Vo),e(Vo,ya),e(l,Ma),e(l,Jo),e(Jo,xa),e(l,La),e(l,Yo),e(Yo,ka),e(l,qa),e(l,Zo),e(Zo,Ea),e(l,Ga),e(l,et),e(et,$a),e(l,Ta),e(l,ot),e(ot,Ca),e(l,Aa),e(l,tt),e(tt,Pa),e(l,za),e(l,nt),e(nt,ja),e(l,Da),e(l,rt),e(rt,Fa),e(l,Oa),e(l,at),e(at,Na),e(l,Ia),e(l,st),e(st,Sa),e(l,Qa),e(l,it),e(it,Ba),e(l,Ua),e(l,lt),e(lt,Ra),e(l,Ha),Et=!0},p(t,[p]){const Ne={};p&2&&(Ne.$$scope={dirty:p,ctx:t}),oe.$set(Ne);const ct={};p&2&&(ct.$$scope={dirty:p,ctx:t}),ie.$set(ct)},i(t){Et||(x(u.$$.fragment,t),x(de.$$.fragment,t),x(me.$$.fragment,t),x(ue.$$.fragment,t),x(ge.$$.fragment,t),x(oe.$$.fragment,t),x(ve.$$.fragment,t),x(be.$$.fragment,t),x(ye.$$.fragment,t),x(Me.$$.fragment,t),x(xe.$$.fragment,t),x(ke.$$.fragment,t),x(qe.$$.fragment,t),x(Ee.$$.fragment,t),x(Ae.$$.fragment,t),x(ie.$$.fragment,t),x(Pe.$$.fragment,t),x(ze.$$.fragment,t),x(Oe.$$.fragment,t),Et=!0)},o(t){L(u.$$.fragment,t),L(de.$$.fragment,t),L(me.$$.fragment,t),L(ue.$$.fragment,t),L(ge.$$.fragment,t),L(oe.$$.fragment,t),L(ve.$$.fragment,t),L(be.$$.fragment,t),L(ye.$$.fragment,t),L(Me.$$.fragment,t),L(xe.$$.fragment,t),L(ke.$$.fragment,t),L(qe.$$.fragment,t),L(Ee.$$.fragment,t),L(Ae.$$.fragment,t),L(ie.$$.fragment,t),L(Pe.$$.fragment,t),L(ze.$$.fragment,t),L(Oe.$$.fragment,t),Et=!1},d(t){o(g),t&&o(P),t&&o(v),k(u),t&&o(dt),t&&o(I),k(de),t&&o(ht),t&&o(Z),t&&o(mt),t&&o(Qe),t&&o(pt),t&&o(Be),t&&o(ft),t&&o(Ue),t&&o(ut),k(me,t),t&&o(gt),t&&o(z),t&&o(_t),t&&o(S),k(ue),t&&o(vt),t&&o(G),k(ge),k(oe),t&&o(bt),t&&o(R),k(ve),t&&o(wt),t&&o($),k(be),k(ye),t&&o(yt),t&&o(H),k(Me),t&&o(Mt),t&&o(T),k(xe),k(ke),t&&o(xt),t&&o(K),k(qe),t&&o(Lt),t&&o(_),k(Ee),k(Ae),k(ie),t&&o(kt),t&&o(X),k(Pe),t&&o(qt),t&&o(C),k(ze),k(Oe)}}}const zi={local:"greaselm",sections:[{local:"overview",title:"Overview"},{local:"transformers.GreaseLMConfig",title:"GreaseLMConfig"},{local:"transformers.GreaseLMFeatureExtractor",title:"GreaseLMFeatureExtractor"},{local:"transformers.GreaseLMProcessor",title:"GreaseLMProcessor"},{local:"transformers.GreaseLMModel",title:"GreaseLMModel"},{local:"transformers.GreaseLMForMultipleChoice",title:"GreaseLMForMultipleChoice"}],title:"GreaseLM"};function ji(Se){return Ei(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qi extends xi{constructor(g){super();Li(this,g,ji,Pi,ki,{})}}export{Qi as default,zi as metadata};
