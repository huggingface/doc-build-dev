import{S as is,i as ls,s as cs,e as n,k as c,w as b,t as a,M as ds,c as r,d as t,m as d,a as s,x as v,h as i,b as l,G as e,g as h,y as w,q as M,o as y,B as x,v as ms,L as hs}from"../../chunks/vendor-hf-doc-builder.js";import{T as ps}from"../../chunks/Tip-hf-doc-builder.js";import{D as X}from"../../chunks/Docstring-hf-doc-builder.js";import{C as as}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as fs}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function us(Ne){let f,T,g,_,A;return _=new as({props:{code:`from transformers import GreaseLMConfig, GreaseLMModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){f=n("p"),T=a("Examples:"),g=c(),b(_.$$.fragment)},l(p){f=r(p,"P",{});var L=s(f);T=i(L,"Examples:"),L.forEach(t),g=d(p),v(_.$$.fragment,p)},m(p,L){h(p,f,L),e(f,T),h(p,g,L),w(_,p,L),A=!0},p:hs,i(p){A||(M(_.$$.fragment,p),A=!0)},o(p){y(_.$$.fragment,p),A=!1},d(p){p&&t(f),p&&t(g),x(_,p)}}}function gs(Ne){let f,T,g,_,A;return{c(){f=n("p"),T=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=n("code"),_=a("Module"),A=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){f=r(p,"P",{});var L=s(f);T=i(L,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(L,"CODE",{});var V=s(g);_=i(V,"Module"),V.forEach(t),A=i(L,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),L.forEach(t)},m(p,L){h(p,f,L),e(f,T),e(f,g),e(g,_),e(f,A)},d(p){p&&t(f)}}}function _s(Ne){let f,T,g,_,A,p,L,V,mt,Co,N,W,lo,ie,ht,co,pt,Po,J,ft,le,ut,gt,zo,Ie,_t,jo,Se,bt,Fo,Qe,vt,Do,ce,No,C,wt,de,Mt,yt,me,xt,Lt,Io,I,Y,mo,he,kt,ho,qt,So,q,pe,Gt,S,$t,Be,Et,At,fe,Tt,Ct,Pt,Q,zt,Oe,jt,Ft,Ue,Dt,Nt,It,B,St,Re,Qt,Bt,He,Ot,Ut,Rt,Z,Qo,O,ee,po,ue,Ht,fo,Kt,Bo,G,ge,Xt,uo,Vt,Wt,_e,Jt,Ke,Yt,Zt,en,go,on,tn,oe,be,nn,_o,rn,Oo,U,te,bo,ve,sn,vo,an,Uo,$,we,ln,Me,cn,Xe,dn,mn,hn,Ve,We,pn,fn,un,wo,gn,_n,ne,ye,bn,Mo,vn,Ro,R,re,yo,xe,wn,xo,Mn,Ho,u,Le,yn,Lo,xn,Ln,ke,kn,Je,qn,Gn,$n,qe,En,Ge,An,Tn,Cn,ko,Pn,zn,qo,jn,Fn,Ye,Dn,$e,Nn,In,P,Ee,Sn,H,Qn,Ze,Bn,On,Go,Un,Rn,Hn,se,Ko,K,ae,$o,Ae,Kn,Eo,Xn,Xo,E,Te,Vn,Ao,Wn,Jn,Ce,Yn,eo,Zn,er,or,Pe,tr,ze,nr,rr,sr,oo,je,Vo;return p=new De({}),ie=new De({}),ce=new as({props:{code:`import torch
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
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;For the question <span class="hljs-subst">{idx}</span>, model answered incorrectly, answer is not <span class="hljs-subst">{model_answer}</span> but <span class="hljs-subst">{correct_answer}</span>&quot;</span>)`}}),he=new De({}),pe=new X({props:{name:"class transformers.GreaseLMConfig",anchor:"transformers.GreaseLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"num_gnn_layers",val:" = 5"},{name:"num_node_types",val:" = 4"},{name:"num_edge_types",val:" = 38"},{name:"concept_dim",val:" = 200"},{name:"gnn_hidden_size",val:" = 200"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
Hidden size of the Graph Neural Network (GNN).`,name:"gnn_hidden_size"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/configuration_greaselm.py#L31"}}),Z=new fs({props:{anchor:"transformers.GreaseLMConfig.example",$$slots:{default:[us]},$$scope:{ctx:Ne}}}),ue=new De({}),ge=new X({props:{name:"class transformers.GreaseLMFeatureExtractor",anchor:"transformers.GreaseLMFeatureExtractor",parameters:[{name:"cpnet_vocab_path",val:": typing.Union[pathlib.Path, str] = 'concept.txt'"},{name:"pattern_path",val:": typing.Union[pathlib.Path, str] = 'matcher_patterns.json'"},{name:"pruned_graph_path",val:": typing.Union[pathlib.Path, str] = 'conceptnet_en_pruned.pickle.gz'"},{name:"score_model",val:": typing.Union[pathlib.Path, str] = 'roberta-large'"},{name:"device",val:": str = 'cuda'"},{name:"cxt_node_connects_all",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMFeatureExtractor.cpnet_vocab_path",description:`<strong>cpnet_vocab_path</strong> (<code>Union[Path, str]</code>,  <em>optional</em>, defaults to <code>&quot;concept.txt&quot;</code>) &#x2014;
Path to the conceptnet vocabulary file.`,name:"cpnet_vocab_path"},{anchor:"transformers.GreaseLMFeatureExtractor.patterns_path",description:`<strong>patterns_path</strong> (<code>Union[Path, str]</code>,  <em>optional</em>, defaults to <code>&quot;matcher_patterns.json&quot;</code>) &#x2014;
Path to the matcher patterns file.`,name:"patterns_path"},{anchor:"transformers.GreaseLMFeatureExtractor.pruned_graph_path",description:`<strong>pruned_graph_path</strong> (<code>Union[Path, str]</code>, <em>optional</em>, defaults to <code>&quot;conceptnet_en_pruned.pickle.gz&quot;</code>) &#x2014;
Path to the conceptnet graph file encoded as dict of dicts.`,name:"pruned_graph_path"},{anchor:"transformers.GreaseLMFeatureExtractor.score_model",description:`<strong>score_model</strong> (<code>Union[Path, str]</code>, <em>optional</em>, defaults to <code>&quot;roberta-large&quot;</code>) &#x2014;
Path to the pretrained model to use for concept scoring.`,name:"score_model"},{anchor:"transformers.GreaseLMFeatureExtractor.device",description:`<strong>device</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;cuda&quot;</code>) &#x2014;
Device to use for the score model.`,name:"device"},{anchor:"transformers.GreaseLMFeatureExtractor.ctx_node_connects_all",description:`<strong>ctx_node_connects_all</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to connect all nodes to the context node. False by default.`,name:"ctx_node_connects_all"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/feature_extraction_greaselm.py#L287"}}),be=new X({props:{name:"__call__",anchor:"transformers.GreaseLMFeatureExtractor.__call__",parameters:[{name:"question_answer_example",val:": typing.Union[typing.Dict[str, typing.Any], typing.List[typing.Dict[str, typing.Any]]]"},{name:"entailed_question_answer_example",val:": typing.Union[typing.Dict[str, typing.Any], typing.List[typing.Dict[str, typing.Any]]]"},{name:"num_choices",val:": int = 5"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = 'pt'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMFeatureExtractor.__call__.question_answer_example",description:`<strong>question_answer_example</strong> (<code>List[Dict[str, Any]]</code>) &#x2014;
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
`}}),ve=new De({}),we=new X({props:{name:"class transformers.GreaseLMProcessor",anchor:"transformers.GreaseLMProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""},{name:"max_seq_length",val:" = 128"}],parametersDescription:[{anchor:"transformers.GreaseLMProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMFeatureExtractor">GreaseLMFeatureExtractor</a>) &#x2014;
The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.GreaseLMProcessor.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/roberta#transformers.RobertaTokenizerFast">RobertaTokenizerFast</a>) &#x2014;
The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/processing_greaselm.py#L27"}}),ye=new X({props:{name:"__call__",anchor:"transformers.GreaseLMProcessor.__call__",parameters:[{name:"question_answer_example",val:": typing.Union[typing.Dict[str, typing.Any], typing.List[typing.Dict[str, typing.Any]]]"},{name:"question_answer_converter",val:": typing.Callable[[typing.Dict[str, typing.Any]], typing.Dict[str, typing.Any]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GreaseLMProcessor.__call__.question_answer_example",description:`<strong>question_answer_example</strong> (&#x2018;Union[Dict[str, Any], List[Dict[str, Any]]]&#x2019;) &#x2014;
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
`}}),xe=new De({}),Le=new X({props:{name:"class transformers.GreaseLMModel",anchor:"transformers.GreaseLMModel",parameters:[{name:"config",val:""},{name:"pretrained_concept_emb_file",val:" = None"},{name:"freeze_ent_emb",val:" = True"},{name:"add_pooling_layer",val:" = True"},{name:"dropout",val:" = 0.2"}],parametersDescription:[{anchor:"transformers.GreaseLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig">GreaseLMConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2120"}}),Ee=new X({props:{name:"forward",anchor:"transformers.GreaseLMModel.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:""},{name:"token_type_ids",val:""},{name:"special_tokens_mask",val:""},{name:"concept_ids",val:""},{name:"node_type_ids",val:""},{name:"node_scores",val:""},{name:"adj_lengths",val:""},{name:"special_nodes_mask",val:""},{name:"edge_index",val:""},{name:"edge_type",val:""},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"emb_data",val:" = None"},{name:"output_attentions",val:" = False"},{name:"output_hidden_states",val:" = True"}],parametersDescription:[{anchor:"transformers.GreaseLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, seq_len)</em>) &#x2014;
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
Indices of positions of each input sequence tokens in the position embeddings.`,name:"position_ids"},{anchor:"transformers.GreaseLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;</p>
<p>Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GreaseLMModel.forward.emb_data",description:`<strong>emb_data</strong> (<em>torch.tensor(batch_size, number_of_choices, max_node_num, emb_dim)</em>) &#x2014;
Contextualized embedding concept data`,name:"emb_data"},{anchor:"transformers.GreaseLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<em>bool</em>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <em>attentions</em> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GreaseLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<em>bool</em>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <em>hidden_states</em> under returned tensors for
more detail.`,name:"output_hidden_states"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2239"}}),se=new ps({props:{$$slots:{default:[gs]},$$scope:{ctx:Ne}}}),Ae=new De({}),Te=new X({props:{name:"class transformers.GreaseLMForMultipleChoice",anchor:"transformers.GreaseLMForMultipleChoice",parameters:[{name:"config",val:""},{name:"pretrained_concept_emb_file",val:" = None"}],parametersDescription:[{anchor:"transformers.GreaseLMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig">GreaseLMConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2424"}}),je=new X({props:{name:"forward",anchor:"transformers.GreaseLMForMultipleChoice.forward",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:""},{name:"token_type_ids",val:""},{name:"special_tokens_mask",val:""},{name:"concept_ids",val:""},{name:"node_type_ids",val:""},{name:"node_scores",val:""},{name:"adj_lengths",val:""},{name:"special_nodes_mask",val:""},{name:"edge_index",val:""},{name:"edge_type",val:""},{name:"labels",val:" = None"},{name:"emb_data",val:" = None"}],parametersDescription:[{anchor:"transformers.GreaseLMForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number_of_choices, seq_len)</code>) &#x2014;
Input ids for the language model.`,name:"input_ids"},{anchor:"transformers.GreaseLMForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number_of_choices, seq_len)</code>) &#x2014;
Attention mask for the language model.`,name:"attention_mask"},{anchor:"transformers.GreaseLMForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number_of_choices, seq_len)</code>) &#x2014;
Token type ids for the language model.`,name:"token_type_ids"},{anchor:"transformers.GreaseLMForMultipleChoice.forward.special_tokens_mask",description:`<strong>special_tokens_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number_of_choices, seq_len)</code>) &#x2014;
Output mask for the language model.`,name:"special_tokens_mask"},{anchor:"transformers.GreaseLMForMultipleChoice.forward.concept_ids",description:`<strong>concept_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number_of_choices, max_node_num)</code>) &#x2014;
Resolved conceptnet ids.`,name:"concept_ids"},{anchor:"transformers.GreaseLMForMultipleChoice.forward.node_type_ids",description:`<strong>node_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number_of_choices, max_node_num)</code>) &#x2014;
Conceptnet id types where 0 == question entity; 1 == answer choice entity; 2 == other node; 3 ==
context node`,name:"node_type_ids"},{anchor:"transformers.GreaseLMForMultipleChoice.forward.node_scores",description:`<strong>node_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, number_of_choices, max_node_num, 1)</code>) &#x2014;
LM relevancy scores for each resolved conceptnet id.`,name:"node_scores"},{anchor:"transformers.GreaseLMForMultipleChoice.forward.adj_lengths",description:`<strong>adj_lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number_of_choices)</code>) &#x2014;
Adjacency matrix lengths for each batch sample.`,name:"adj_lengths"},{anchor:"transformers.GreaseLMForMultipleChoice.forward.special_nodes_mask",description:`<strong>special_nodes_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, number_of_choices, max_node_num)</code>) &#x2014;
Mask identifying special nodes in the graph (interaction node in the GreaseLM paper).`,name:"special_nodes_mask"},{anchor:"transformers.GreaseLMForMultipleChoice.forward.edge_index",description:`<strong>edge_index</strong> (<code>torch.LongTensor</code> of shape <code>(2, E)</code>) &#x2014;
Edge index for the input graph, where E is the total number of edges in the particular graph.`,name:"edge_index"},{anchor:"transformers.GreaseLMForMultipleChoice.forward.edge_type",description:`<strong>edge_type</strong> (<code>torch.LongTensor</code> of shape <code>(E,)</code>) &#x2014;
Edge types for the input graph, where E is the total number of edges in the particular graph.`,name:"edge_type"},{anchor:"transformers.GreaseLMForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in [0, &#x2026;,
num_choices-1]`,name:"labels"},{anchor:"transformers.GreaseLMForMultipleChoice.forward.emb_data",description:`<strong>emb_data</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, number_of_choices, max_node_num, emb_dim)</code>, <em>optional</em>, &#x2014;
defaults to <code>None</code>):
Contextualized embedding concept data`,name:"emb_data"}],source:"https://github.com/huggingface/transformers/blob/vr_17146/src/transformers/models/greaselm/modeling_greaselm.py#L2458"}}),{c(){f=n("meta"),T=c(),g=n("h1"),_=n("a"),A=n("span"),b(p.$$.fragment),L=c(),V=n("span"),mt=a("GreaseLM"),Co=c(),N=n("h2"),W=n("a"),lo=n("span"),b(ie.$$.fragment),ht=c(),co=n("span"),pt=a("Overview"),Po=c(),J=n("p"),ft=a("The GreaseLM model was proposed in "),le=n("a"),ut=a("GreaseLM: Graph REASoning Enhanced Language Models for Question Answering"),gt=a(` by Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec.
GreaseLM enables the fusion and exchange of information from the language model and the knowledge graph (KG) in multiple
layers of its architecture. GreaseLM takes as input the natural language context and a graph neural network that reasons
over the KG, ultimately demonstrating superior results in commonsense reasoning.`),zo=c(),Ie=n("p"),_t=a("The abstract from the paper is the following:"),jo=c(),Se=n("p"),bt=a(`Answering complex questions about textual narratives requires reasoning over both stated context and the world
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
models 8x larger.`),Fo=c(),Qe=n("p"),vt=a("Tips:"),Do=c(),b(ce.$$.fragment),No=c(),C=n("p"),wt=a("This model was contributed by "),de=n("a"),Mt=a("vblagoje"),yt=a(`.
The original code can be found `),me=n("a"),xt=a("here"),Lt=a("."),Io=c(),I=n("h2"),Y=n("a"),mo=n("span"),b(he.$$.fragment),kt=c(),ho=n("span"),qt=a("GreaseLMConfig"),So=c(),q=n("div"),b(pe.$$.fragment),Gt=c(),S=n("p"),$t=a("This is the configuration class to store the configuration of a "),Be=n("a"),Et=a("GreaseLMModel"),At=a(`. It is used to instantiate a
GreaseLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GreaseLM
`),fe=n("a"),Tt=a("Xikun/greaselm-csqa"),Ct=a(" architecture."),Pt=c(),Q=n("p"),zt=a("Configuration objects inherit from "),Oe=n("a"),jt=a("PretrainedConfig"),Ft=a(` and can be used to control the model outputs. Read the
documentation from `),Ue=n("a"),Dt=a("PretrainedConfig"),Nt=a(" for more information."),It=c(),B=n("p"),St=a("The "),Re=n("a"),Qt=a("GreaseLMConfig"),Bt=a(" class is identical to "),He=n("a"),Ot=a("BertConfig"),Ut=a(" with a few additional attributes."),Rt=c(),b(Z.$$.fragment),Qo=c(),O=n("h2"),ee=n("a"),po=n("span"),b(ue.$$.fragment),Ht=c(),fo=n("span"),Kt=a("GreaseLMFeatureExtractor"),Bo=c(),G=n("div"),b(ge.$$.fragment),Xt=c(),uo=n("p"),Vt=a("Constructs a GreaseLM feature extractor."),Wt=c(),_e=n("p"),Jt=a("This feature extractor inherits from "),Ke=n("a"),Yt=a("FeatureExtractionMixin"),Zt=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),en=c(),go=n("p"),on=a(`[\u2018GreaseLMFeatureExtractor\u2019] converts CommonSenseQA or OpenBookQA question-answer example(s) into a batch of graph
encodings.`),tn=c(),oe=n("div"),b(be.$$.fragment),nn=c(),_o=n("p"),rn=a("Main method to encode a question-answer example(s) into a graph representation ready for model input."),Oo=c(),U=n("h2"),te=n("a"),bo=n("span"),b(ve.$$.fragment),sn=c(),vo=n("span"),an=a("GreaseLMProcessor"),Uo=c(),$=n("div"),b(we.$$.fragment),ln=c(),Me=n("p"),cn=a("Constructs a GreaseLM processor which wraps a "),Xe=n("a"),dn=a("GreaseLMFeatureExtractor"),mn=a(" and a [\u2018RobertaTokenizer`] into a single\nprocessor."),hn=c(),Ve=n("p"),We=n("a"),pn=a("GreaseLMProcessor"),fn=a(" offers all the functionalities you need to prepare data for the model."),un=c(),wo=n("p"),gn=a(`It uses [\u2018GreaseLMFeatureExtractor\u2019] to convert CommonSenseQA or OpenBookQA question-answer example(s) into a batch
of graph encodings and then encodes examples into a batch of language model encodings, finally combining graph and
language model encodings into a model ready input.`),_n=c(),ne=n("div"),b(ye.$$.fragment),bn=c(),Mo=n("p"),vn=a(`Main method that takes question-answer example(s) and encodes them into a batch of language model encodings and
a batch of graph encodings combining the two encodings ready for GreaseLM model input`),Ro=c(),R=n("h2"),re=n("a"),yo=n("span"),b(xe.$$.fragment),wn=c(),xo=n("span"),Mn=a("GreaseLMModel"),Ho=c(),u=n("div"),b(Le.$$.fragment),yn=c(),Lo=n("p"),xn=a("The bare greaselm Model transformer outputting raw hidden-states without any specific head on top."),Ln=c(),ke=n("p"),kn=a("This model inherits from "),Je=n("a"),qn=a("PreTrainedModel"),Gn=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$n=c(),qe=n("p"),En=a("This model is also a PyTorch "),Ge=n("a"),An=a("torch.nn.Module"),Tn=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cn=c(),ko=n("p"),Pn=a(`Answering complex questions about textual narratives requires reasoning over both stated context and the world
knowledge that underlies it. However, pretrained language models (LM), the foundation of most modern QA systems, do
not robustly represent latent relationships between concepts, which is necessary for reasoning. While knowledge
graphs (KG) are often used to augment LMs with structured representations of world knowledge, it remains an open
question how to effectively fuse and reason over the KG representations and the language context, which provides
situational constraints and nuances. In this work, we propose GreaseLM, a new model that fuses encoded
representations from pretrained LMs and graph neural networks over multiple layers of modality interaction
operations. Information from both modalities propagates to the other, allowing language context representations to
be grounded by structured world knowledge, and allowing linguistic nuances (e.g., negation, hedging) in the context
to inform the graph representations of knowledge.`),zn=c(),qo=n("p"),jn=a("Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec"),Fn=c(),Ye=n("p"),Dn=a("For more details see: "),$e=n("a"),Nn=a("https://arxiv.org/abs/2201.08860"),In=c(),P=n("div"),b(Ee.$$.fragment),Sn=c(),H=n("p"),Qn=a("The "),Ze=n("a"),Bn=a("GreaseLMModel"),On=a(" forward method, overrides the "),Go=n("code"),Un=a("__call__"),Rn=a(" special method."),Hn=c(),b(se.$$.fragment),Ko=c(),K=n("h2"),ae=n("a"),$o=n("span"),b(Ae.$$.fragment),Kn=c(),Eo=n("span"),Xn=a("GreaseLMForMultipleChoice"),Xo=c(),E=n("div"),b(Te.$$.fragment),Vn=c(),Ao=n("p"),Wn=a("GreaseLM Model with a multiple choice classification head on top for CommonsSenseQA and OpenBookQA tasks."),Jn=c(),Ce=n("p"),Yn=a("This model inherits from "),eo=n("a"),Zn=a("PreTrainedModel"),er=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),or=c(),Pe=n("p"),tr=a("This model is also a PyTorch "),ze=n("a"),nr=a("torch.nn.Module"),rr=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sr=c(),oo=n("div"),b(je.$$.fragment),this.h()},l(o){const m=ds('[data-svelte="svelte-1phssyn"]',document.head);f=r(m,"META",{name:!0,content:!0}),m.forEach(t),T=d(o),g=r(o,"H1",{class:!0});var Fe=s(g);_=r(Fe,"A",{id:!0,class:!0,href:!0});var To=s(_);A=r(To,"SPAN",{});var lr=s(A);v(p.$$.fragment,lr),lr.forEach(t),To.forEach(t),L=d(Fe),V=r(Fe,"SPAN",{});var cr=s(V);mt=i(cr,"GreaseLM"),cr.forEach(t),Fe.forEach(t),Co=d(o),N=r(o,"H2",{class:!0});var Wo=s(N);W=r(Wo,"A",{id:!0,class:!0,href:!0});var dr=s(W);lo=r(dr,"SPAN",{});var mr=s(lo);v(ie.$$.fragment,mr),mr.forEach(t),dr.forEach(t),ht=d(Wo),co=r(Wo,"SPAN",{});var hr=s(co);pt=i(hr,"Overview"),hr.forEach(t),Wo.forEach(t),Po=d(o),J=r(o,"P",{});var Jo=s(J);ft=i(Jo,"The GreaseLM model was proposed in "),le=r(Jo,"A",{href:!0,rel:!0});var pr=s(le);ut=i(pr,"GreaseLM: Graph REASoning Enhanced Language Models for Question Answering"),pr.forEach(t),gt=i(Jo,` by Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec.
GreaseLM enables the fusion and exchange of information from the language model and the knowledge graph (KG) in multiple
layers of its architecture. GreaseLM takes as input the natural language context and a graph neural network that reasons
over the KG, ultimately demonstrating superior results in commonsense reasoning.`),Jo.forEach(t),zo=d(o),Ie=r(o,"P",{});var fr=s(Ie);_t=i(fr,"The abstract from the paper is the following:"),fr.forEach(t),jo=d(o),Se=r(o,"P",{});var ur=s(Se);bt=i(ur,`Answering complex questions about textual narratives requires reasoning over both stated context and the world
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
models 8x larger.`),ur.forEach(t),Fo=d(o),Qe=r(o,"P",{});var gr=s(Qe);vt=i(gr,"Tips:"),gr.forEach(t),Do=d(o),v(ce.$$.fragment,o),No=d(o),C=r(o,"P",{});var to=s(C);wt=i(to,"This model was contributed by "),de=r(to,"A",{href:!0,rel:!0});var _r=s(de);Mt=i(_r,"vblagoje"),_r.forEach(t),yt=i(to,`.
The original code can be found `),me=r(to,"A",{href:!0,rel:!0});var br=s(me);xt=i(br,"here"),br.forEach(t),Lt=i(to,"."),to.forEach(t),Io=d(o),I=r(o,"H2",{class:!0});var Yo=s(I);Y=r(Yo,"A",{id:!0,class:!0,href:!0});var vr=s(Y);mo=r(vr,"SPAN",{});var wr=s(mo);v(he.$$.fragment,wr),wr.forEach(t),vr.forEach(t),kt=d(Yo),ho=r(Yo,"SPAN",{});var Mr=s(ho);qt=i(Mr,"GreaseLMConfig"),Mr.forEach(t),Yo.forEach(t),So=d(o),q=r(o,"DIV",{class:!0});var z=s(q);v(pe.$$.fragment,z),Gt=d(z),S=r(z,"P",{});var no=s(S);$t=i(no,"This is the configuration class to store the configuration of a "),Be=r(no,"A",{href:!0});var yr=s(Be);Et=i(yr,"GreaseLMModel"),yr.forEach(t),At=i(no,`. It is used to instantiate a
GreaseLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GreaseLM
`),fe=r(no,"A",{href:!0,rel:!0});var xr=s(fe);Tt=i(xr,"Xikun/greaselm-csqa"),xr.forEach(t),Ct=i(no," architecture."),no.forEach(t),Pt=d(z),Q=r(z,"P",{});var ro=s(Q);zt=i(ro,"Configuration objects inherit from "),Oe=r(ro,"A",{href:!0});var Lr=s(Oe);jt=i(Lr,"PretrainedConfig"),Lr.forEach(t),Ft=i(ro,` and can be used to control the model outputs. Read the
documentation from `),Ue=r(ro,"A",{href:!0});var kr=s(Ue);Dt=i(kr,"PretrainedConfig"),kr.forEach(t),Nt=i(ro," for more information."),ro.forEach(t),It=d(z),B=r(z,"P",{});var so=s(B);St=i(so,"The "),Re=r(so,"A",{href:!0});var qr=s(Re);Qt=i(qr,"GreaseLMConfig"),qr.forEach(t),Bt=i(so," class is identical to "),He=r(so,"A",{href:!0});var Gr=s(He);Ot=i(Gr,"BertConfig"),Gr.forEach(t),Ut=i(so," with a few additional attributes."),so.forEach(t),Rt=d(z),v(Z.$$.fragment,z),z.forEach(t),Qo=d(o),O=r(o,"H2",{class:!0});var Zo=s(O);ee=r(Zo,"A",{id:!0,class:!0,href:!0});var $r=s(ee);po=r($r,"SPAN",{});var Er=s(po);v(ue.$$.fragment,Er),Er.forEach(t),$r.forEach(t),Ht=d(Zo),fo=r(Zo,"SPAN",{});var Ar=s(fo);Kt=i(Ar,"GreaseLMFeatureExtractor"),Ar.forEach(t),Zo.forEach(t),Bo=d(o),G=r(o,"DIV",{class:!0});var j=s(G);v(ge.$$.fragment,j),Xt=d(j),uo=r(j,"P",{});var Tr=s(uo);Vt=i(Tr,"Constructs a GreaseLM feature extractor."),Tr.forEach(t),Wt=d(j),_e=r(j,"P",{});var et=s(_e);Jt=i(et,"This feature extractor inherits from "),Ke=r(et,"A",{href:!0});var Cr=s(Ke);Yt=i(Cr,"FeatureExtractionMixin"),Cr.forEach(t),Zt=i(et,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),et.forEach(t),en=d(j),go=r(j,"P",{});var Pr=s(go);on=i(Pr,`[\u2018GreaseLMFeatureExtractor\u2019] converts CommonSenseQA or OpenBookQA question-answer example(s) into a batch of graph
encodings.`),Pr.forEach(t),tn=d(j),oe=r(j,"DIV",{class:!0});var ot=s(oe);v(be.$$.fragment,ot),nn=d(ot),_o=r(ot,"P",{});var zr=s(_o);rn=i(zr,"Main method to encode a question-answer example(s) into a graph representation ready for model input."),zr.forEach(t),ot.forEach(t),j.forEach(t),Oo=d(o),U=r(o,"H2",{class:!0});var tt=s(U);te=r(tt,"A",{id:!0,class:!0,href:!0});var jr=s(te);bo=r(jr,"SPAN",{});var Fr=s(bo);v(ve.$$.fragment,Fr),Fr.forEach(t),jr.forEach(t),sn=d(tt),vo=r(tt,"SPAN",{});var Dr=s(vo);an=i(Dr,"GreaseLMProcessor"),Dr.forEach(t),tt.forEach(t),Uo=d(o),$=r(o,"DIV",{class:!0});var F=s($);v(we.$$.fragment,F),ln=d(F),Me=r(F,"P",{});var nt=s(Me);cn=i(nt,"Constructs a GreaseLM processor which wraps a "),Xe=r(nt,"A",{href:!0});var Nr=s(Xe);dn=i(Nr,"GreaseLMFeatureExtractor"),Nr.forEach(t),mn=i(nt," and a [\u2018RobertaTokenizer`] into a single\nprocessor."),nt.forEach(t),hn=d(F),Ve=r(F,"P",{});var ar=s(Ve);We=r(ar,"A",{href:!0});var Ir=s(We);pn=i(Ir,"GreaseLMProcessor"),Ir.forEach(t),fn=i(ar," offers all the functionalities you need to prepare data for the model."),ar.forEach(t),un=d(F),wo=r(F,"P",{});var Sr=s(wo);gn=i(Sr,`It uses [\u2018GreaseLMFeatureExtractor\u2019] to convert CommonSenseQA or OpenBookQA question-answer example(s) into a batch
of graph encodings and then encodes examples into a batch of language model encodings, finally combining graph and
language model encodings into a model ready input.`),Sr.forEach(t),_n=d(F),ne=r(F,"DIV",{class:!0});var rt=s(ne);v(ye.$$.fragment,rt),bn=d(rt),Mo=r(rt,"P",{});var Qr=s(Mo);vn=i(Qr,`Main method that takes question-answer example(s) and encodes them into a batch of language model encodings and
a batch of graph encodings combining the two encodings ready for GreaseLM model input`),Qr.forEach(t),rt.forEach(t),F.forEach(t),Ro=d(o),R=r(o,"H2",{class:!0});var st=s(R);re=r(st,"A",{id:!0,class:!0,href:!0});var Br=s(re);yo=r(Br,"SPAN",{});var Or=s(yo);v(xe.$$.fragment,Or),Or.forEach(t),Br.forEach(t),wn=d(st),xo=r(st,"SPAN",{});var Ur=s(xo);Mn=i(Ur,"GreaseLMModel"),Ur.forEach(t),st.forEach(t),Ho=d(o),u=r(o,"DIV",{class:!0});var k=s(u);v(Le.$$.fragment,k),yn=d(k),Lo=r(k,"P",{});var Rr=s(Lo);xn=i(Rr,"The bare greaselm Model transformer outputting raw hidden-states without any specific head on top."),Rr.forEach(t),Ln=d(k),ke=r(k,"P",{});var at=s(ke);kn=i(at,"This model inherits from "),Je=r(at,"A",{href:!0});var Hr=s(Je);qn=i(Hr,"PreTrainedModel"),Hr.forEach(t),Gn=i(at,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),at.forEach(t),$n=d(k),qe=r(k,"P",{});var it=s(qe);En=i(it,"This model is also a PyTorch "),Ge=r(it,"A",{href:!0,rel:!0});var Kr=s(Ge);An=i(Kr,"torch.nn.Module"),Kr.forEach(t),Tn=i(it,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),it.forEach(t),Cn=d(k),ko=r(k,"P",{});var Xr=s(ko);Pn=i(Xr,`Answering complex questions about textual narratives requires reasoning over both stated context and the world
knowledge that underlies it. However, pretrained language models (LM), the foundation of most modern QA systems, do
not robustly represent latent relationships between concepts, which is necessary for reasoning. While knowledge
graphs (KG) are often used to augment LMs with structured representations of world knowledge, it remains an open
question how to effectively fuse and reason over the KG representations and the language context, which provides
situational constraints and nuances. In this work, we propose GreaseLM, a new model that fuses encoded
representations from pretrained LMs and graph neural networks over multiple layers of modality interaction
operations. Information from both modalities propagates to the other, allowing language context representations to
be grounded by structured world knowledge, and allowing linguistic nuances (e.g., negation, hedging) in the context
to inform the graph representations of knowledge.`),Xr.forEach(t),zn=d(k),qo=r(k,"P",{});var Vr=s(qo);jn=i(Vr,"Xikun Zhang, Antoine Bosselut, Michihiro Yasunaga, Hongyu Ren, Percy Liang, Christopher D. Manning, Jure Leskovec"),Vr.forEach(t),Fn=d(k),Ye=r(k,"P",{});var ir=s(Ye);Dn=i(ir,"For more details see: "),$e=r(ir,"A",{href:!0,rel:!0});var Wr=s($e);Nn=i(Wr,"https://arxiv.org/abs/2201.08860"),Wr.forEach(t),ir.forEach(t),In=d(k),P=r(k,"DIV",{class:!0});var ao=s(P);v(Ee.$$.fragment,ao),Sn=d(ao),H=r(ao,"P",{});var io=s(H);Qn=i(io,"The "),Ze=r(io,"A",{href:!0});var Jr=s(Ze);Bn=i(Jr,"GreaseLMModel"),Jr.forEach(t),On=i(io," forward method, overrides the "),Go=r(io,"CODE",{});var Yr=s(Go);Un=i(Yr,"__call__"),Yr.forEach(t),Rn=i(io," special method."),io.forEach(t),Hn=d(ao),v(se.$$.fragment,ao),ao.forEach(t),k.forEach(t),Ko=d(o),K=r(o,"H2",{class:!0});var lt=s(K);ae=r(lt,"A",{id:!0,class:!0,href:!0});var Zr=s(ae);$o=r(Zr,"SPAN",{});var es=s($o);v(Ae.$$.fragment,es),es.forEach(t),Zr.forEach(t),Kn=d(lt),Eo=r(lt,"SPAN",{});var os=s(Eo);Xn=i(os,"GreaseLMForMultipleChoice"),os.forEach(t),lt.forEach(t),Xo=d(o),E=r(o,"DIV",{class:!0});var D=s(E);v(Te.$$.fragment,D),Vn=d(D),Ao=r(D,"P",{});var ts=s(Ao);Wn=i(ts,"GreaseLM Model with a multiple choice classification head on top for CommonsSenseQA and OpenBookQA tasks."),ts.forEach(t),Jn=d(D),Ce=r(D,"P",{});var ct=s(Ce);Yn=i(ct,"This model inherits from "),eo=r(ct,"A",{href:!0});var ns=s(eo);Zn=i(ns,"PreTrainedModel"),ns.forEach(t),er=i(ct,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ct.forEach(t),or=d(D),Pe=r(D,"P",{});var dt=s(Pe);tr=i(dt,"This model is also a PyTorch "),ze=r(dt,"A",{href:!0,rel:!0});var rs=s(ze);nr=i(rs,"torch.nn.Module"),rs.forEach(t),rr=i(dt,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dt.forEach(t),sr=d(D),oo=r(D,"DIV",{class:!0});var ss=s(oo);v(je.$$.fragment,ss),ss.forEach(t),D.forEach(t),this.h()},h(){l(f,"name","hf:doc:metadata"),l(f,"content",JSON.stringify(bs)),l(_,"id","greaselm"),l(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(_,"href","#greaselm"),l(g,"class","relative group"),l(W,"id","overview"),l(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(W,"href","#overview"),l(N,"class","relative group"),l(le,"href","https://arxiv.org/abs/2201.08860"),l(le,"rel","nofollow"),l(de,"href","https://huggingface.co/vblagoje"),l(de,"rel","nofollow"),l(me,"href","https://github.com/snap-stanford/GreaseLM"),l(me,"rel","nofollow"),l(Y,"id","transformers.GreaseLMConfig"),l(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Y,"href","#transformers.GreaseLMConfig"),l(I,"class","relative group"),l(Be,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel"),l(fe,"href","https://huggingface.co/Xikun/greaselm-csqa"),l(fe,"rel","nofollow"),l(Oe,"href","/docs/transformers/pr_17146/en/main_classes/configuration#transformers.PretrainedConfig"),l(Ue,"href","/docs/transformers/pr_17146/en/main_classes/configuration#transformers.PretrainedConfig"),l(Re,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMConfig"),l(He,"href","/docs/transformers/pr_17146/en/model_doc/bert#transformers.BertConfig"),l(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"id","transformers.GreaseLMFeatureExtractor"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#transformers.GreaseLMFeatureExtractor"),l(O,"class","relative group"),l(Ke,"href","/docs/transformers/pr_17146/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin"),l(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"id","transformers.GreaseLMProcessor"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#transformers.GreaseLMProcessor"),l(U,"class","relative group"),l(Xe,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMFeatureExtractor"),l(We,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMProcessor"),l(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(re,"id","transformers.GreaseLMModel"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#transformers.GreaseLMModel"),l(R,"class","relative group"),l(Je,"href","/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel"),l(Ge,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(Ge,"rel","nofollow"),l($e,"href","https://arxiv.org/abs/2201.08860"),l($e,"rel","nofollow"),l(Ze,"href","/docs/transformers/pr_17146/en/model_doc/greaselm#transformers.GreaseLMModel"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ae,"id","transformers.GreaseLMForMultipleChoice"),l(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ae,"href","#transformers.GreaseLMForMultipleChoice"),l(K,"class","relative group"),l(eo,"href","/docs/transformers/pr_17146/en/main_classes/model#transformers.PreTrainedModel"),l(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(ze,"rel","nofollow"),l(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,f),h(o,T,m),h(o,g,m),e(g,_),e(_,A),w(p,A,null),e(g,L),e(g,V),e(V,mt),h(o,Co,m),h(o,N,m),e(N,W),e(W,lo),w(ie,lo,null),e(N,ht),e(N,co),e(co,pt),h(o,Po,m),h(o,J,m),e(J,ft),e(J,le),e(le,ut),e(J,gt),h(o,zo,m),h(o,Ie,m),e(Ie,_t),h(o,jo,m),h(o,Se,m),e(Se,bt),h(o,Fo,m),h(o,Qe,m),e(Qe,vt),h(o,Do,m),w(ce,o,m),h(o,No,m),h(o,C,m),e(C,wt),e(C,de),e(de,Mt),e(C,yt),e(C,me),e(me,xt),e(C,Lt),h(o,Io,m),h(o,I,m),e(I,Y),e(Y,mo),w(he,mo,null),e(I,kt),e(I,ho),e(ho,qt),h(o,So,m),h(o,q,m),w(pe,q,null),e(q,Gt),e(q,S),e(S,$t),e(S,Be),e(Be,Et),e(S,At),e(S,fe),e(fe,Tt),e(S,Ct),e(q,Pt),e(q,Q),e(Q,zt),e(Q,Oe),e(Oe,jt),e(Q,Ft),e(Q,Ue),e(Ue,Dt),e(Q,Nt),e(q,It),e(q,B),e(B,St),e(B,Re),e(Re,Qt),e(B,Bt),e(B,He),e(He,Ot),e(B,Ut),e(q,Rt),w(Z,q,null),h(o,Qo,m),h(o,O,m),e(O,ee),e(ee,po),w(ue,po,null),e(O,Ht),e(O,fo),e(fo,Kt),h(o,Bo,m),h(o,G,m),w(ge,G,null),e(G,Xt),e(G,uo),e(uo,Vt),e(G,Wt),e(G,_e),e(_e,Jt),e(_e,Ke),e(Ke,Yt),e(_e,Zt),e(G,en),e(G,go),e(go,on),e(G,tn),e(G,oe),w(be,oe,null),e(oe,nn),e(oe,_o),e(_o,rn),h(o,Oo,m),h(o,U,m),e(U,te),e(te,bo),w(ve,bo,null),e(U,sn),e(U,vo),e(vo,an),h(o,Uo,m),h(o,$,m),w(we,$,null),e($,ln),e($,Me),e(Me,cn),e(Me,Xe),e(Xe,dn),e(Me,mn),e($,hn),e($,Ve),e(Ve,We),e(We,pn),e(Ve,fn),e($,un),e($,wo),e(wo,gn),e($,_n),e($,ne),w(ye,ne,null),e(ne,bn),e(ne,Mo),e(Mo,vn),h(o,Ro,m),h(o,R,m),e(R,re),e(re,yo),w(xe,yo,null),e(R,wn),e(R,xo),e(xo,Mn),h(o,Ho,m),h(o,u,m),w(Le,u,null),e(u,yn),e(u,Lo),e(Lo,xn),e(u,Ln),e(u,ke),e(ke,kn),e(ke,Je),e(Je,qn),e(ke,Gn),e(u,$n),e(u,qe),e(qe,En),e(qe,Ge),e(Ge,An),e(qe,Tn),e(u,Cn),e(u,ko),e(ko,Pn),e(u,zn),e(u,qo),e(qo,jn),e(u,Fn),e(u,Ye),e(Ye,Dn),e(Ye,$e),e($e,Nn),e(u,In),e(u,P),w(Ee,P,null),e(P,Sn),e(P,H),e(H,Qn),e(H,Ze),e(Ze,Bn),e(H,On),e(H,Go),e(Go,Un),e(H,Rn),e(P,Hn),w(se,P,null),h(o,Ko,m),h(o,K,m),e(K,ae),e(ae,$o),w(Ae,$o,null),e(K,Kn),e(K,Eo),e(Eo,Xn),h(o,Xo,m),h(o,E,m),w(Te,E,null),e(E,Vn),e(E,Ao),e(Ao,Wn),e(E,Jn),e(E,Ce),e(Ce,Yn),e(Ce,eo),e(eo,Zn),e(Ce,er),e(E,or),e(E,Pe),e(Pe,tr),e(Pe,ze),e(ze,nr),e(Pe,rr),e(E,sr),e(E,oo),w(je,oo,null),Vo=!0},p(o,[m]){const Fe={};m&2&&(Fe.$$scope={dirty:m,ctx:o}),Z.$set(Fe);const To={};m&2&&(To.$$scope={dirty:m,ctx:o}),se.$set(To)},i(o){Vo||(M(p.$$.fragment,o),M(ie.$$.fragment,o),M(ce.$$.fragment,o),M(he.$$.fragment,o),M(pe.$$.fragment,o),M(Z.$$.fragment,o),M(ue.$$.fragment,o),M(ge.$$.fragment,o),M(be.$$.fragment,o),M(ve.$$.fragment,o),M(we.$$.fragment,o),M(ye.$$.fragment,o),M(xe.$$.fragment,o),M(Le.$$.fragment,o),M(Ee.$$.fragment,o),M(se.$$.fragment,o),M(Ae.$$.fragment,o),M(Te.$$.fragment,o),M(je.$$.fragment,o),Vo=!0)},o(o){y(p.$$.fragment,o),y(ie.$$.fragment,o),y(ce.$$.fragment,o),y(he.$$.fragment,o),y(pe.$$.fragment,o),y(Z.$$.fragment,o),y(ue.$$.fragment,o),y(ge.$$.fragment,o),y(be.$$.fragment,o),y(ve.$$.fragment,o),y(we.$$.fragment,o),y(ye.$$.fragment,o),y(xe.$$.fragment,o),y(Le.$$.fragment,o),y(Ee.$$.fragment,o),y(se.$$.fragment,o),y(Ae.$$.fragment,o),y(Te.$$.fragment,o),y(je.$$.fragment,o),Vo=!1},d(o){t(f),o&&t(T),o&&t(g),x(p),o&&t(Co),o&&t(N),x(ie),o&&t(Po),o&&t(J),o&&t(zo),o&&t(Ie),o&&t(jo),o&&t(Se),o&&t(Fo),o&&t(Qe),o&&t(Do),x(ce,o),o&&t(No),o&&t(C),o&&t(Io),o&&t(I),x(he),o&&t(So),o&&t(q),x(pe),x(Z),o&&t(Qo),o&&t(O),x(ue),o&&t(Bo),o&&t(G),x(ge),x(be),o&&t(Oo),o&&t(U),x(ve),o&&t(Uo),o&&t($),x(we),x(ye),o&&t(Ro),o&&t(R),x(xe),o&&t(Ho),o&&t(u),x(Le),x(Ee),x(se),o&&t(Ko),o&&t(K),x(Ae),o&&t(Xo),o&&t(E),x(Te),x(je)}}}const bs={local:"greaselm",sections:[{local:"overview",title:"Overview"},{local:"transformers.GreaseLMConfig",title:"GreaseLMConfig"},{local:"transformers.GreaseLMFeatureExtractor",title:"GreaseLMFeatureExtractor"},{local:"transformers.GreaseLMProcessor",title:"GreaseLMProcessor"},{local:"transformers.GreaseLMModel",title:"GreaseLMModel"},{local:"transformers.GreaseLMForMultipleChoice",title:"GreaseLMForMultipleChoice"}],title:"GreaseLM"};function vs(Ne){return ms(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qs extends is{constructor(f){super();ls(this,f,vs,_s,cs,{})}}export{qs as default,bs as metadata};
