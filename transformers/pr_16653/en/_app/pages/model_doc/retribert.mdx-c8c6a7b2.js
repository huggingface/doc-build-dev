import{S as mo,i as fo,s as ho,e as o,k as d,w as g,t as i,M as po,c as n,d as r,m as c,a,x as v,h as l,b as s,F as e,g as f,y as b,L as uo,q as k,o as y,B,v as _o}from"../../chunks/vendor-6b77c823.js";import{D as Oe}from"../../chunks/Docstring-abef54e3.js";import{I as Te}from"../../chunks/IconCopyLink-7a11ce68.js";function go($r){let w,Ve,z,A,we,V,_t,ze,gt,Ue,$,q,$e,U,vt,Ee,bt,Ke,F,kt,K,yt,Bt,We,R,Rt,W,Tt,wt,Q,zt,$t,Qe,E,S,Pe,G,Et,xe,Pt,Ge,_,J,xt,X,Ct,me,Mt,At,qt,P,Ft,fe,St,Nt,he,Dt,It,Je,x,N,Ce,Y,Lt,Me,jt,Xe,p,Z,Ht,Ae,Ot,Vt,D,qe,Ut,Kt,pe,Wt,Qt,Gt,ee,Jt,ue,Xt,Yt,Ye,C,I,Fe,te,Zt,Se,er,Ze,u,re,tr,oe,rr,Ne,or,nr,ar,L,_e,sr,ir,ge,lr,dr,cr,ne,mr,ve,fr,hr,et,M,j,De,ae,pr,Ie,ur,tt,h,se,_r,Le,gr,vr,ie,br,be,kr,yr,Br,le,Rr,de,Tr,wr,zr,ke,ce,rt;return V=new Te({}),U=new Te({}),G=new Te({}),J=new Oe({props:{name:"class transformers.RetriBertConfig",anchor:"transformers.RetriBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 8"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"share_encoders",val:" = True"},{name:"projection_dim",val:" = 128"},{name:"pad_token_id",val:" = 0"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16653/src/transformers/models/retribert/configuration_retribert.py#L29",parametersDescription:[{anchor:"transformers.RetriBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the RetriBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/pr_16653/en/model_doc/retribert#transformers.RetriBertModel">RetriBertModel</a>`,name:"vocab_size"},{anchor:"transformers.RetriBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RetriBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RetriBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RetriBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RetriBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RetriBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RetriBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RetriBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.RetriBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <em>token_type_ids</em> passed into <a href="/docs/transformers/pr_16653/en/model_doc/bert#transformers.BertModel">BertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RetriBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RetriBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RetriBertConfig.share_encoders",description:`<strong>share_encoders</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use the same Bert-type encoder for the queries and document`,name:"share_encoders"},{anchor:"transformers.RetriBertConfig.projection_dim",description:`<strong>projection_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Final dimension of the query and document representation after projection`,name:"projection_dim"}]}}),Y=new Te({}),Z=new Oe({props:{name:"class transformers.RetriBertTokenizer",anchor:"transformers.RetriBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16653/src/transformers/models/retribert/tokenization_retribert.py#L41"}}),te=new Te({}),re=new Oe({props:{name:"class transformers.RetriBertTokenizerFast",anchor:"transformers.RetriBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16653/src/transformers/models/retribert/tokenization_retribert_fast.py#L45"}}),ae=new Te({}),se=new Oe({props:{name:"class transformers.RetriBertModel",anchor:"transformers.RetriBertModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16653/src/transformers/models/retribert/modeling_retribert.py#L87",parametersDescription:[{anchor:"transformers.RetriBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/pr_16653/en/model_doc/retribert#transformers.RetriBertConfig">RetriBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/pr_16653/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ce=new Oe({props:{name:"forward",anchor:"transformers.RetriBertModel.forward",parameters:[{name:"input_ids_query",val:""},{name:"attention_mask_query",val:""},{name:"input_ids_doc",val:""},{name:"attention_mask_doc",val:""},{name:"checkpoint_batch_size",val:" = -1"}],source:"https://github.com/huggingface/transformers/blob/pr_16653/src/transformers/models/retribert/modeling_retribert.py#L175",parametersDescription:[{anchor:"transformers.RetriBertModel.forward.input_ids_query",description:`<strong>input_ids_query</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary for the queries in a batch.</p>
<p>Indices can be obtained using <a href="/docs/transformers/pr_16653/en/model_doc/retribert#transformers.RetriBertTokenizer">RetriBertTokenizer</a>. See <a href="/docs/transformers/pr_16653/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/pr_16653/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids_query"},{anchor:"transformers.RetriBertModel.forward.attention_mask_query",description:`<strong>attention_mask_query</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask_query"},{anchor:"transformers.RetriBertModel.forward.input_ids_doc",description:`<strong>input_ids_doc</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary for the documents in a batch.`,name:"input_ids_doc"},{anchor:"transformers.RetriBertModel.forward.attention_mask_doc",description:`<strong>attention_mask_doc</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on documents padding token indices.`,name:"attention_mask_doc"},{anchor:"transformers.RetriBertModel.forward.checkpoint_batch_size",description:`<strong>checkpoint_batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to &#x201C;<code>-1</code>) &#x2014;
If greater than 0, uses gradient checkpointing to only compute sequence representation on
<code>checkpoint_batch_size</code> examples at a time on the GPU. All query representations are still compared to
all document representations in the batch.`,name:"checkpoint_batch_size"}],returnDescription:`
<p>The bidirectional cross-entropy loss obtained while trying to match each query to its
corresponding document and each document to its corresponding query in the batch</p>
`,returnType:`
<p>\`torch.FloatTensor\u201C</p>
`}}),{c(){w=o("meta"),Ve=d(),z=o("h1"),A=o("a"),we=o("span"),g(V.$$.fragment),_t=d(),ze=o("span"),gt=i("RetriBERT"),Ue=d(),$=o("h2"),q=o("a"),$e=o("span"),g(U.$$.fragment),vt=d(),Ee=o("span"),bt=i("Overview"),Ke=d(),F=o("p"),kt=i("The RetriBERT model was proposed in the blog post "),K=o("a"),yt=i(`Explain Anything Like I\u2019m Five: A Model for Open Domain Long Form
Question Answering`),Bt=i(`. RetriBERT is a small model that uses either a single or
pair of BERT encoders with lower-dimension projection for dense semantic indexing of text.`),We=d(),R=o("p"),Rt=i("This model was contributed by "),W=o("a"),Tt=i("yjernite"),wt=i(`. Code to train and use the model can be
found `),Q=o("a"),zt=i("here"),$t=i("."),Qe=d(),E=o("h2"),S=o("a"),Pe=o("span"),g(G.$$.fragment),Et=d(),xe=o("span"),Pt=i("RetriBertConfig"),Ge=d(),_=o("div"),g(J.$$.fragment),xt=d(),X=o("p"),Ct=i("This is the configuration class to store the configuration of a "),me=o("a"),Mt=i("RetriBertModel"),At=i(`. It is used to instantiate a
RetriBertModel model according to the specified arguments, defining the model architecture.`),qt=d(),P=o("p"),Ft=i("Configuration objects inherit from "),fe=o("a"),St=i("PretrainedConfig"),Nt=i(` and can be used to control the model outputs. Read the
documentation from `),he=o("a"),Dt=i("PretrainedConfig"),It=i(" for more information."),Je=d(),x=o("h2"),N=o("a"),Ce=o("span"),g(Y.$$.fragment),Lt=d(),Me=o("span"),jt=i("RetriBertTokenizer"),Xe=d(),p=o("div"),g(Z.$$.fragment),Ht=d(),Ae=o("p"),Ot=i("Constructs a RetriBERT tokenizer."),Vt=d(),D=o("p"),qe=o("code"),Ut=i("RetroBertTokenizer"),Kt=i(" is identical to "),pe=o("a"),Wt=i("BertTokenizer"),Qt=i(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Gt=d(),ee=o("p"),Jt=i("Refer to superclass "),ue=o("a"),Xt=i("BertTokenizer"),Yt=i(" for usage examples and documentation concerning parameters."),Ye=d(),C=o("h2"),I=o("a"),Fe=o("span"),g(te.$$.fragment),Zt=d(),Se=o("span"),er=i("RetriBertTokenizerFast"),Ze=d(),u=o("div"),g(re.$$.fragment),tr=d(),oe=o("p"),rr=i("Construct a \u201Cfast\u201D RetriBERT tokenizer (backed by HuggingFace\u2019s "),Ne=o("em"),or=i("tokenizers"),nr=i(" library)."),ar=d(),L=o("p"),_e=o("a"),sr=i("RetriBertTokenizerFast"),ir=i(" is identical to "),ge=o("a"),lr=i("BertTokenizerFast"),dr=i(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),cr=d(),ne=o("p"),mr=i("Refer to superclass "),ve=o("a"),fr=i("BertTokenizerFast"),hr=i(" for usage examples and documentation concerning parameters."),et=d(),M=o("h2"),j=o("a"),De=o("span"),g(ae.$$.fragment),pr=d(),Ie=o("span"),ur=i("RetriBertModel"),tt=d(),h=o("div"),g(se.$$.fragment),_r=d(),Le=o("p"),gr=i("Bert Based model to embed queries or document for document retrieval."),vr=d(),ie=o("p"),br=i("This model inherits from "),be=o("a"),kr=i("PreTrainedModel"),yr=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Br=d(),le=o("p"),Rr=i("This model is also a PyTorch "),de=o("a"),Tr=i("torch.nn.Module"),wr=i(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zr=d(),ke=o("div"),g(ce.$$.fragment),this.h()},l(t){const m=po('[data-svelte="svelte-1phssyn"]',document.head);w=n(m,"META",{name:!0,content:!0}),m.forEach(r),Ve=c(t),z=n(t,"H1",{class:!0});var ot=a(z);A=n(ot,"A",{id:!0,class:!0,href:!0});var Er=a(A);we=n(Er,"SPAN",{});var Pr=a(we);v(V.$$.fragment,Pr),Pr.forEach(r),Er.forEach(r),_t=c(ot),ze=n(ot,"SPAN",{});var xr=a(ze);gt=l(xr,"RetriBERT"),xr.forEach(r),ot.forEach(r),Ue=c(t),$=n(t,"H2",{class:!0});var nt=a($);q=n(nt,"A",{id:!0,class:!0,href:!0});var Cr=a(q);$e=n(Cr,"SPAN",{});var Mr=a($e);v(U.$$.fragment,Mr),Mr.forEach(r),Cr.forEach(r),vt=c(nt),Ee=n(nt,"SPAN",{});var Ar=a(Ee);bt=l(Ar,"Overview"),Ar.forEach(r),nt.forEach(r),Ke=c(t),F=n(t,"P",{});var at=a(F);kt=l(at,"The RetriBERT model was proposed in the blog post "),K=n(at,"A",{href:!0,rel:!0});var qr=a(K);yt=l(qr,`Explain Anything Like I\u2019m Five: A Model for Open Domain Long Form
Question Answering`),qr.forEach(r),Bt=l(at,`. RetriBERT is a small model that uses either a single or
pair of BERT encoders with lower-dimension projection for dense semantic indexing of text.`),at.forEach(r),We=c(t),R=n(t,"P",{});var ye=a(R);Rt=l(ye,"This model was contributed by "),W=n(ye,"A",{href:!0,rel:!0});var Fr=a(W);Tt=l(Fr,"yjernite"),Fr.forEach(r),wt=l(ye,`. Code to train and use the model can be
found `),Q=n(ye,"A",{href:!0,rel:!0});var Sr=a(Q);zt=l(Sr,"here"),Sr.forEach(r),$t=l(ye,"."),ye.forEach(r),Qe=c(t),E=n(t,"H2",{class:!0});var st=a(E);S=n(st,"A",{id:!0,class:!0,href:!0});var Nr=a(S);Pe=n(Nr,"SPAN",{});var Dr=a(Pe);v(G.$$.fragment,Dr),Dr.forEach(r),Nr.forEach(r),Et=c(st),xe=n(st,"SPAN",{});var Ir=a(xe);Pt=l(Ir,"RetriBertConfig"),Ir.forEach(r),st.forEach(r),Ge=c(t),_=n(t,"DIV",{class:!0});var Be=a(_);v(J.$$.fragment,Be),xt=c(Be),X=n(Be,"P",{});var it=a(X);Ct=l(it,"This is the configuration class to store the configuration of a "),me=n(it,"A",{href:!0});var Lr=a(me);Mt=l(Lr,"RetriBertModel"),Lr.forEach(r),At=l(it,`. It is used to instantiate a
RetriBertModel model according to the specified arguments, defining the model architecture.`),it.forEach(r),qt=c(Be),P=n(Be,"P",{});var Re=a(P);Ft=l(Re,"Configuration objects inherit from "),fe=n(Re,"A",{href:!0});var jr=a(fe);St=l(jr,"PretrainedConfig"),jr.forEach(r),Nt=l(Re,` and can be used to control the model outputs. Read the
documentation from `),he=n(Re,"A",{href:!0});var Hr=a(he);Dt=l(Hr,"PretrainedConfig"),Hr.forEach(r),It=l(Re," for more information."),Re.forEach(r),Be.forEach(r),Je=c(t),x=n(t,"H2",{class:!0});var lt=a(x);N=n(lt,"A",{id:!0,class:!0,href:!0});var Or=a(N);Ce=n(Or,"SPAN",{});var Vr=a(Ce);v(Y.$$.fragment,Vr),Vr.forEach(r),Or.forEach(r),Lt=c(lt),Me=n(lt,"SPAN",{});var Ur=a(Me);jt=l(Ur,"RetriBertTokenizer"),Ur.forEach(r),lt.forEach(r),Xe=c(t),p=n(t,"DIV",{class:!0});var H=a(p);v(Z.$$.fragment,H),Ht=c(H),Ae=n(H,"P",{});var Kr=a(Ae);Ot=l(Kr,"Constructs a RetriBERT tokenizer."),Kr.forEach(r),Vt=c(H),D=n(H,"P",{});var je=a(D);qe=n(je,"CODE",{});var Wr=a(qe);Ut=l(Wr,"RetroBertTokenizer"),Wr.forEach(r),Kt=l(je," is identical to "),pe=n(je,"A",{href:!0});var Qr=a(pe);Wt=l(Qr,"BertTokenizer"),Qr.forEach(r),Qt=l(je,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),je.forEach(r),Gt=c(H),ee=n(H,"P",{});var dt=a(ee);Jt=l(dt,"Refer to superclass "),ue=n(dt,"A",{href:!0});var Gr=a(ue);Xt=l(Gr,"BertTokenizer"),Gr.forEach(r),Yt=l(dt," for usage examples and documentation concerning parameters."),dt.forEach(r),H.forEach(r),Ye=c(t),C=n(t,"H2",{class:!0});var ct=a(C);I=n(ct,"A",{id:!0,class:!0,href:!0});var Jr=a(I);Fe=n(Jr,"SPAN",{});var Xr=a(Fe);v(te.$$.fragment,Xr),Xr.forEach(r),Jr.forEach(r),Zt=c(ct),Se=n(ct,"SPAN",{});var Yr=a(Se);er=l(Yr,"RetriBertTokenizerFast"),Yr.forEach(r),ct.forEach(r),Ze=c(t),u=n(t,"DIV",{class:!0});var O=a(u);v(re.$$.fragment,O),tr=c(O),oe=n(O,"P",{});var mt=a(oe);rr=l(mt,"Construct a \u201Cfast\u201D RetriBERT tokenizer (backed by HuggingFace\u2019s "),Ne=n(mt,"EM",{});var Zr=a(Ne);or=l(Zr,"tokenizers"),Zr.forEach(r),nr=l(mt," library)."),mt.forEach(r),ar=c(O),L=n(O,"P",{});var He=a(L);_e=n(He,"A",{href:!0});var eo=a(_e);sr=l(eo,"RetriBertTokenizerFast"),eo.forEach(r),ir=l(He," is identical to "),ge=n(He,"A",{href:!0});var to=a(ge);lr=l(to,"BertTokenizerFast"),to.forEach(r),dr=l(He,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),He.forEach(r),cr=c(O),ne=n(O,"P",{});var ft=a(ne);mr=l(ft,"Refer to superclass "),ve=n(ft,"A",{href:!0});var ro=a(ve);fr=l(ro,"BertTokenizerFast"),ro.forEach(r),hr=l(ft," for usage examples and documentation concerning parameters."),ft.forEach(r),O.forEach(r),et=c(t),M=n(t,"H2",{class:!0});var ht=a(M);j=n(ht,"A",{id:!0,class:!0,href:!0});var oo=a(j);De=n(oo,"SPAN",{});var no=a(De);v(ae.$$.fragment,no),no.forEach(r),oo.forEach(r),pr=c(ht),Ie=n(ht,"SPAN",{});var ao=a(Ie);ur=l(ao,"RetriBertModel"),ao.forEach(r),ht.forEach(r),tt=c(t),h=n(t,"DIV",{class:!0});var T=a(h);v(se.$$.fragment,T),_r=c(T),Le=n(T,"P",{});var so=a(Le);gr=l(so,"Bert Based model to embed queries or document for document retrieval."),so.forEach(r),vr=c(T),ie=n(T,"P",{});var pt=a(ie);br=l(pt,"This model inherits from "),be=n(pt,"A",{href:!0});var io=a(be);kr=l(io,"PreTrainedModel"),io.forEach(r),yr=l(pt,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pt.forEach(r),Br=c(T),le=n(T,"P",{});var ut=a(le);Rr=l(ut,"This model is also a PyTorch "),de=n(ut,"A",{href:!0,rel:!0});var lo=a(de);Tr=l(lo,"torch.nn.Module"),lo.forEach(r),wr=l(ut,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ut.forEach(r),zr=c(T),ke=n(T,"DIV",{class:!0});var co=a(ke);v(ce.$$.fragment,co),co.forEach(r),T.forEach(r),this.h()},h(){s(w,"name","hf:doc:metadata"),s(w,"content",JSON.stringify(vo)),s(A,"id","retribert"),s(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(A,"href","#retribert"),s(z,"class","relative group"),s(q,"id","overview"),s(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(q,"href","#overview"),s($,"class","relative group"),s(K,"href","https://yjernite.github.io/lfqa.html"),s(K,"rel","nofollow"),s(W,"href","https://huggingface.co/yjernite"),s(W,"rel","nofollow"),s(Q,"href","https://github.com/huggingface/transformers/tree/main/examples/research-projects/distillation"),s(Q,"rel","nofollow"),s(S,"id","transformers.RetriBertConfig"),s(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(S,"href","#transformers.RetriBertConfig"),s(E,"class","relative group"),s(me,"href","/docs/transformers/pr_16653/en/model_doc/retribert#transformers.RetriBertModel"),s(fe,"href","/docs/transformers/pr_16653/en/main_classes/configuration#transformers.PretrainedConfig"),s(he,"href","/docs/transformers/pr_16653/en/main_classes/configuration#transformers.PretrainedConfig"),s(_,"class","docstring"),s(N,"id","transformers.RetriBertTokenizer"),s(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(N,"href","#transformers.RetriBertTokenizer"),s(x,"class","relative group"),s(pe,"href","/docs/transformers/pr_16653/en/model_doc/bert#transformers.BertTokenizer"),s(ue,"href","/docs/transformers/pr_16653/en/model_doc/bert#transformers.BertTokenizer"),s(p,"class","docstring"),s(I,"id","transformers.RetriBertTokenizerFast"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#transformers.RetriBertTokenizerFast"),s(C,"class","relative group"),s(_e,"href","/docs/transformers/pr_16653/en/model_doc/retribert#transformers.RetriBertTokenizerFast"),s(ge,"href","/docs/transformers/pr_16653/en/model_doc/bert#transformers.BertTokenizerFast"),s(ve,"href","/docs/transformers/pr_16653/en/model_doc/bert#transformers.BertTokenizerFast"),s(u,"class","docstring"),s(j,"id","transformers.RetriBertModel"),s(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(j,"href","#transformers.RetriBertModel"),s(M,"class","relative group"),s(be,"href","/docs/transformers/pr_16653/en/main_classes/model#transformers.PreTrainedModel"),s(de,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),s(de,"rel","nofollow"),s(ke,"class","docstring"),s(h,"class","docstring")},m(t,m){e(document.head,w),f(t,Ve,m),f(t,z,m),e(z,A),e(A,we),b(V,we,null),e(z,_t),e(z,ze),e(ze,gt),f(t,Ue,m),f(t,$,m),e($,q),e(q,$e),b(U,$e,null),e($,vt),e($,Ee),e(Ee,bt),f(t,Ke,m),f(t,F,m),e(F,kt),e(F,K),e(K,yt),e(F,Bt),f(t,We,m),f(t,R,m),e(R,Rt),e(R,W),e(W,Tt),e(R,wt),e(R,Q),e(Q,zt),e(R,$t),f(t,Qe,m),f(t,E,m),e(E,S),e(S,Pe),b(G,Pe,null),e(E,Et),e(E,xe),e(xe,Pt),f(t,Ge,m),f(t,_,m),b(J,_,null),e(_,xt),e(_,X),e(X,Ct),e(X,me),e(me,Mt),e(X,At),e(_,qt),e(_,P),e(P,Ft),e(P,fe),e(fe,St),e(P,Nt),e(P,he),e(he,Dt),e(P,It),f(t,Je,m),f(t,x,m),e(x,N),e(N,Ce),b(Y,Ce,null),e(x,Lt),e(x,Me),e(Me,jt),f(t,Xe,m),f(t,p,m),b(Z,p,null),e(p,Ht),e(p,Ae),e(Ae,Ot),e(p,Vt),e(p,D),e(D,qe),e(qe,Ut),e(D,Kt),e(D,pe),e(pe,Wt),e(D,Qt),e(p,Gt),e(p,ee),e(ee,Jt),e(ee,ue),e(ue,Xt),e(ee,Yt),f(t,Ye,m),f(t,C,m),e(C,I),e(I,Fe),b(te,Fe,null),e(C,Zt),e(C,Se),e(Se,er),f(t,Ze,m),f(t,u,m),b(re,u,null),e(u,tr),e(u,oe),e(oe,rr),e(oe,Ne),e(Ne,or),e(oe,nr),e(u,ar),e(u,L),e(L,_e),e(_e,sr),e(L,ir),e(L,ge),e(ge,lr),e(L,dr),e(u,cr),e(u,ne),e(ne,mr),e(ne,ve),e(ve,fr),e(ne,hr),f(t,et,m),f(t,M,m),e(M,j),e(j,De),b(ae,De,null),e(M,pr),e(M,Ie),e(Ie,ur),f(t,tt,m),f(t,h,m),b(se,h,null),e(h,_r),e(h,Le),e(Le,gr),e(h,vr),e(h,ie),e(ie,br),e(ie,be),e(be,kr),e(ie,yr),e(h,Br),e(h,le),e(le,Rr),e(le,de),e(de,Tr),e(le,wr),e(h,zr),e(h,ke),b(ce,ke,null),rt=!0},p:uo,i(t){rt||(k(V.$$.fragment,t),k(U.$$.fragment,t),k(G.$$.fragment,t),k(J.$$.fragment,t),k(Y.$$.fragment,t),k(Z.$$.fragment,t),k(te.$$.fragment,t),k(re.$$.fragment,t),k(ae.$$.fragment,t),k(se.$$.fragment,t),k(ce.$$.fragment,t),rt=!0)},o(t){y(V.$$.fragment,t),y(U.$$.fragment,t),y(G.$$.fragment,t),y(J.$$.fragment,t),y(Y.$$.fragment,t),y(Z.$$.fragment,t),y(te.$$.fragment,t),y(re.$$.fragment,t),y(ae.$$.fragment,t),y(se.$$.fragment,t),y(ce.$$.fragment,t),rt=!1},d(t){r(w),t&&r(Ve),t&&r(z),B(V),t&&r(Ue),t&&r($),B(U),t&&r(Ke),t&&r(F),t&&r(We),t&&r(R),t&&r(Qe),t&&r(E),B(G),t&&r(Ge),t&&r(_),B(J),t&&r(Je),t&&r(x),B(Y),t&&r(Xe),t&&r(p),B(Z),t&&r(Ye),t&&r(C),B(te),t&&r(Ze),t&&r(u),B(re),t&&r(et),t&&r(M),B(ae),t&&r(tt),t&&r(h),B(se),B(ce)}}}const vo={local:"retribert",sections:[{local:"overview",title:"Overview"},{local:"transformers.RetriBertConfig",title:"RetriBertConfig"},{local:"transformers.RetriBertTokenizer",title:"RetriBertTokenizer"},{local:"transformers.RetriBertTokenizerFast",title:"RetriBertTokenizerFast"},{local:"transformers.RetriBertModel",title:"RetriBertModel"}],title:"RetriBERT"};function bo($r){return _o(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ro extends mo{constructor(w){super();fo(this,w,bo,go,ho,{})}}export{Ro as default,vo as metadata};
