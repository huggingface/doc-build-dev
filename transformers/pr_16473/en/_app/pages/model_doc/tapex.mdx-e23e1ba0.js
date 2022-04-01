import{S as Xa,i as Ba,s as Da,e as a,k as c,w as v,t as s,M as Qa,c as n,d as o,m as d,a as r,x as k,h as i,b as p,F as t,g as u,y as T,L as Wa,q as w,o as y,B as x,v as Ra}from"../../chunks/vendor-6b77c823.js";import{D as Oo}from"../../chunks/Docstring-abef54e3.js";import{C as Go}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as vt}from"../../chunks/IconCopyLink-7a11ce68.js";function Ma(Ho){let q,Ue,A,L,xe,W,kt,qe,Tt,Oe,z,j,Ae,R,wt,ze,yt,Ge,F,xt,M,qt,At,He,ne,zt,Ve,f,re,U,Et,Pt,$t,se,O,St,Lt,jt,ie,G,Ft,Ct,Nt,le,H,It,Xt,Je,ce,Bt,Ze,de,Ee,Dt,Ke,pe,Qt,Ye,g,Pe,Wt,Rt,$e,Mt,Ut,E,Ot,Se,Gt,Ht,Le,Vt,Jt,Zt,P,Kt,je,Yt,eo,Fe,to,oo,et,$,C,Ce,V,ao,Ne,no,tt,_,ro,ue,so,io,he,lo,co,me,po,uo,ot,J,at,N,ho,fe,mo,fo,nt,Z,rt,b,go,ge,_o,bo,_e,vo,ko,st,K,it,be,To,lt,S,I,Ie,Y,wo,Xe,yo,ct,h,ee,xo,Be,qo,Ao,De,zo,Eo,Qe,Po,$o,We,So,Lo,Re,jo,Fo,te,Co,ve,No,Io,Xo,X,oe,Bo,Me,Do,Qo,ke,ae,dt;return W=new vt({}),R=new vt({}),V=new vt({}),J=new Go({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import pandas as pd

tokenizer = AutoTokenizer.from_pretrained("microsoft/tapex-large-finetuned-wtq")
model = AutoModelForSeq2SeqLM.from_pretrained("microsoft/tapex-large-finetuned-wtq")

# prepare table + question
data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
table = pd.DataFrame.from_dict(data)
question = "how many movies does Leonardo Di Caprio have?"

encoding = tokenizer(table, question, return_tensors="pt")

# let the model generate an answer autoregressively
outputs = model.generate(**encoding)

# decode back to text
tokenizer.batch_decode(outputs, skip_special_tokens=True)[0]
# should print '53'`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSeq2SeqLM
<span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/tapex-large-finetuned-wtq&quot;</span>)
model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;microsoft/tapex-large-finetuned-wtq&quot;</span>)

<span class="hljs-comment"># prepare table + question</span>
data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
table = pd.DataFrame.from_dict(data)
question = <span class="hljs-string">&quot;how many movies does Leonardo Di Caprio have?&quot;</span>

encoding = tokenizer(table, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-comment"># let the model generate an answer autoregressively</span>
outputs = model.generate(**encoding)

<span class="hljs-comment"># decode back to text</span>
tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-comment"># should print &#x27;53&#x27;</span>`}}),Z=new Go({props:{code:`# prepare table + question
data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
table = pd.DataFrame.from_dict(data)
questions = [
    "how many movies does Leonardo Di Caprio have?",
    "which actor has 69 movies?",
    "what's the first name of the actor who has 87 movies?",
]
encoding = tokenizer(table, questions, padding=True, return_tensors="pt")

# let the model generate an answer autoregressively
outputs = model.generate(**encoding)

# decode back to text
tokenizer.batch_decode(outputs, skip_special_tokens=True)
# should print '['53', 'george clooney', 'brad pitt']'`,highlighted:`<span class="hljs-comment"># prepare table + question</span>
data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
table = pd.DataFrame.from_dict(data)
questions = [
    <span class="hljs-string">&quot;how many movies does Leonardo Di Caprio have?&quot;</span>,
    <span class="hljs-string">&quot;which actor has 69 movies?&quot;</span>,
    <span class="hljs-string">&quot;what&#x27;s the first name of the actor who has 87 movies?&quot;</span>,
]
encoding = tokenizer(table, questions, padding=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-comment"># let the model generate an answer autoregressively</span>
outputs = model.generate(**encoding)

<span class="hljs-comment"># decode back to text</span>
tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># should print &#x27;[&#x27;53&#x27;, &#x27;george clooney&#x27;, &#x27;brad pitt&#x27;]&#x27;</span>`}}),K=new Go({props:{code:`from transformers import AutoTokenizer, AutoModelForSequenceClassification

tokenizer = AutoTokenizer.from_pretrained("microsoft/tapex-large-finetuned-tabfact")
model = AutoModelForSequenceClassification.from_pretrained("microsoft/tapex-large-finetuned-tabfact")

# prepare table + sentence
data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
table = pd.DataFrame.from_dict(data)
sentence = "George Clooney has 30 movies"

encoding = tokenizer(table, sentence, return_tensors="pt")

# forward pass
outputs = model(**encoding)

# print prediction
predicted_class_idx = outputs.logits[0].argmax(dim=0).item()
print(model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/tapex-large-finetuned-tabfact&quot;</span>)
model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/tapex-large-finetuned-tabfact&quot;</span>)

<span class="hljs-comment"># prepare table + sentence</span>
data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
table = pd.DataFrame.from_dict(data)
sentence = <span class="hljs-string">&quot;George Clooney has 30 movies&quot;</span>

encoding = tokenizer(table, sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-comment"># forward pass</span>
outputs = model(**encoding)

<span class="hljs-comment"># print prediction</span>
predicted_class_idx = outputs.logits[<span class="hljs-number">0</span>].argmax(dim=<span class="hljs-number">0</span>).item()
<span class="hljs-built_in">print</span>(model.config.id2label[predicted_class_idx])`}}),Y=new vt({}),ee=new Oo({props:{name:"class transformers.TapexTokenizer",anchor:"transformers.TapexTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"do_lower_case",val:" = True"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"max_cell_length",val:" = 15"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/tapex/tokenization_tapex.py#L201",parametersDescription:[{anchor:"transformers.TapexTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.TapexTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.TapexTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.TapexTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.TapexTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.TapexTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.TapexTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.TapexTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.TapexTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.TapexTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.TapexTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.TapexTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.TapexTokenizer.max_cell_length",description:`<strong>max_cell_length</strong> (<code>int</code>, <em>optional</em>, defaults to 15) &#x2014;
Maximum number of characters per cell when linearizing a table. If this number is exceeded, truncation
takes place.`,name:"max_cell_length"}]}}),oe=new Oo({props:{name:"__call__",anchor:"transformers.TapexTokenizer.__call__",parameters:[{name:"table",val:": typing.Union[ForwardRef('pd.DataFrame'), typing.List[ForwardRef('pd.DataFrame')]] = None"},{name:"query",val:": typing.Union[str, typing.List[str], NoneType] = None"},{name:"answer",val:": typing.Union[str, typing.List[str]] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/tapex/tokenization_tapex.py#L523",parametersDescription:[{anchor:"transformers.TapexTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>, <code>List[pd.DataFrame]</code>) &#x2014;
Table(s) containing tabular data.`,name:"table"},{anchor:"transformers.TapexTokenizer.__call__.query",description:`<strong>query</strong> (<code>str</code> or <code>List[str]</code>, <em>optional</em>) &#x2014;
Sentence or batch of sentences related to one or more table(s) to be encoded. Note that the number of
sentences must match the number of tables.`,name:"query"},{anchor:"transformers.TapexTokenizer.__call__.answer",description:`<strong>answer</strong> (<code>str</code> or <code>List[str]</code>, <em>optional</em>) &#x2014;
Optionally, the corresponding answer to the questions as supervision.`,name:"answer"},{anchor:"transformers.TapexTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapexTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_16473/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.TapexTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_16473/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.TapexTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.TapexTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.TapexTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.TapexTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapexTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_16473/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.TapexTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapexTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/pr_16473/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.TapexTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code>, <code>TapexTruncationStrategy</code> or <a href="/docs/transformers/pr_16473/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, &#x2014;
<em>optional</em>, defaults to <code>False</code>):</p>
<p>Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>&apos;drop_rows_to_fit&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will truncate
row by row, removing rows from the table.</li>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.TapexTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters. If left unset or set to
<code>None</code>, this will use the predefined model maximum length if a maximum length is required by one of the
truncation/padding parameters. If the model has no specific maximum input length (like XLNet)
truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.TapexTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.TapexTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapexTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/pr_16473/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}]}}),ae=new Oo({props:{name:"save_vocabulary",anchor:"transformers.TapexTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16473/src/transformers/models/tapex/tokenization_tapex.py#L494"}}),{c(){q=a("meta"),Ue=c(),A=a("h1"),L=a("a"),xe=a("span"),v(W.$$.fragment),kt=c(),qe=a("span"),Tt=s("TAPEX"),Oe=c(),z=a("h2"),j=a("a"),Ae=a("span"),v(R.$$.fragment),wt=c(),ze=a("span"),yt=s("Overview"),Ge=c(),F=a("p"),xt=s("The TAPEX model was proposed in "),M=a("a"),qt=s("TAPEX: Table Pre-training via Learning a Neural SQL Executor"),At=s(` by Qian Liu,
Bei Chen, Jiaqi Guo, Morteza Ziyadi, Zeqi Lin, Weizhu Chen, Jian-Guang Lou. TAPEX pre-trains a BART model to solve synthetic SQL queries, after
which it can be fine-tuned to answer natural language questions related to tabular data, as well as performing table fact checking.`),He=c(),ne=a("p"),zt=s("TAPEX has been fine-tuned on several datasets:"),Ve=c(),f=a("ul"),re=a("li"),U=a("a"),Et=s("SQA"),Pt=s(" (Sequential Question Answering by Microsoft)"),$t=c(),se=a("li"),O=a("a"),St=s("WTQ"),Lt=s(" (Wiki Table Questions by Stanford University)"),jt=c(),ie=a("li"),G=a("a"),Ft=s("WikiSQL"),Ct=s(" (by Salesforce)"),Nt=c(),le=a("li"),H=a("a"),It=s("TabFact"),Xt=s(" (by USCB NLP Lab)."),Je=c(),ce=a("p"),Bt=s("The abstract from the paper is the following:"),Ze=c(),de=a("p"),Ee=a("em"),Dt=s(`Recent progress in language model pre-training has achieved a great success via leveraging large-scale unstructured textual data. However, it is
still a challenge to apply pre-training on structured tabular data due to the absence of large-scale high-quality tabular data. In this paper, we
propose TAPEX to show that table pre-training can be achieved by learning a neural SQL executor over a synthetic corpus, which is obtained by automatically
synthesizing executable SQL queries and their execution outputs. TAPEX addresses the data scarcity challenge via guiding the language model to mimic a SQL
executor on the diverse, large-scale and high-quality synthetic corpus. We evaluate TAPEX on four benchmark datasets. Experimental results demonstrate that
TAPEX outperforms previous table pre-training approaches by a large margin and achieves new state-of-the-art results on all of them. This includes improvements
on the weakly-supervised WikiSQL denotation accuracy to 89.5% (+2.3%), the WikiTableQuestions denotation accuracy to 57.5% (+4.8%), the SQA denotation accuracy
to 74.5% (+3.5%), and the TabFact accuracy to 84.2% (+3.2%). To our knowledge, this is the first work to exploit table pre-training via synthetic executable programs
and to achieve new state-of-the-art results on various downstream tasks.`),Ke=c(),pe=a("p"),Qt=s("Tips:"),Ye=c(),g=a("ul"),Pe=a("li"),Wt=s("TAPEX is a generative (seq2seq) model. One can directly plug in the weights of TAPEX into a BART model."),Rt=c(),$e=a("li"),Mt=s("TAPEX has checkpoints on the hub that are either pre-trained only, or fine-tuned on WTQ, SQA, WikiSQL and TabFact."),Ut=c(),E=a("li"),Ot=s("Sentences + tables are presented to the model as "),Se=a("code"),Gt=s('sentence + " " + linearized table'),Ht=s(`. The linearized table has the following format:
`),Le=a("code"),Vt=s("col: col1 | col2 | col 3 row 1 : val1 | val2 | val3 row 2 : ..."),Jt=s("."),Zt=c(),P=a("li"),Kt=s(`TAPEX has its own tokenizer, that allows to prepare all data for the model easily. One can pass Pandas DataFrames and strings to the tokenizer,
and it will automatically create the `),je=a("code"),Yt=s("input_ids"),eo=s(" and "),Fe=a("code"),to=s("attention_mask"),oo=s(" (as shown in the usage examples below)."),et=c(),$=a("h2"),C=a("a"),Ce=a("span"),v(V.$$.fragment),ao=c(),Ne=a("span"),no=s("Usage: inference"),tt=c(),_=a("p"),ro=s(`Below, we illustrate how to use TAPEX for table question answering. As one can see, one can directly plug in the weights of TAPEX into a BART model.
We use the `),ue=a("a"),so=s("Auto API"),io=s(", which will automatically instantiate the appropriate tokenizer ("),he=a("a"),lo=s("TapexTokenizer"),co=s(") and model ("),me=a("a"),po=s("BartForConditionalGeneration"),uo=s(`) for us,
based on the configuration file of the checkpoint on the hub.`),ot=c(),v(J.$$.fragment),at=c(),N=a("p"),ho=s("Note that "),fe=a("a"),mo=s("TapexTokenizer"),fo=s(` also supports batched inference. Hence, one can provide a batch of different tables/questions, or a batch of a single table
and multiple questions, or a batch of a single query and multiple tables. Let\u2019s illustrate this:`),nt=c(),v(Z.$$.fragment),rt=c(),b=a("p"),go=s(`In case one wants to do table verification (i.e. the task of determining whether a given sentence is supported or refuted by the contents
of a table), one can instantiate a `),ge=a("a"),_o=s("BartForSequenceClassification"),bo=s(` model. TAPEX has checkpoints on the hub fine-tuned on TabFact, an important
benchmark for table fact checking (it achieves 84% accuracy). The code example below again leverages the `),_e=a("a"),vo=s("Auto API"),ko=s("."),st=c(),v(K.$$.fragment),it=c(),be=a("p"),To=s("Refused"),lt=c(),S=a("h2"),I=a("a"),Ie=a("span"),v(Y.$$.fragment),wo=c(),Xe=a("span"),yo=s("TapexTokenizer"),ct=c(),h=a("div"),v(ee.$$.fragment),xo=c(),Be=a("p"),qo=s("Construct a TAPEX tokenizer. Based on byte-level Byte-Pair-Encoding (BPE)."),Ao=c(),De=a("p"),zo=s(`This tokenizer can be used to flatten one or more table(s) and concatenate them with one or more related sentences
to be used by TAPEX models. The format that the TAPEX tokenizer creates is the following:`),Eo=c(),Qe=a("p"),Po=s("sentence col: col1 | col2 | col 3 row 1 : val1 | val2 | val3 row 2 : \u2026"),$o=c(),We=a("p"),So=s(`The tokenizer supports a single table + single query, a single table and multiple queries (in which case the table
will be duplicated for every query), a single query and multiple tables (in which case the query will be duplicated
for every table), and multiple tables and queries. In other words, you can provide a batch of tables + questions to
the tokenizer for instance to prepare them for the model.`),Lo=c(),Re=a("p"),jo=s("Tokenization itself is based on the BPE algorithm. It is identical to the one used by BART, RoBERTa and GPT-2."),Fo=c(),te=a("p"),Co=s("This tokenizer inherits from "),ve=a("a"),No=s("PreTrainedTokenizer"),Io=s(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xo=c(),X=a("div"),v(oe.$$.fragment),Bo=c(),Me=a("p"),Do=s("Main method to tokenize and prepare for the model one or several table-sequence pair(s)."),Qo=c(),ke=a("div"),v(ae.$$.fragment),this.h()},l(e){const l=Qa('[data-svelte="svelte-1phssyn"]',document.head);q=n(l,"META",{name:!0,content:!0}),l.forEach(o),Ue=d(e),A=n(e,"H1",{class:!0});var pt=r(A);L=n(pt,"A",{id:!0,class:!0,href:!0});var Vo=r(L);xe=n(Vo,"SPAN",{});var Jo=r(xe);k(W.$$.fragment,Jo),Jo.forEach(o),Vo.forEach(o),kt=d(pt),qe=n(pt,"SPAN",{});var Zo=r(qe);Tt=i(Zo,"TAPEX"),Zo.forEach(o),pt.forEach(o),Oe=d(e),z=n(e,"H2",{class:!0});var ut=r(z);j=n(ut,"A",{id:!0,class:!0,href:!0});var Ko=r(j);Ae=n(Ko,"SPAN",{});var Yo=r(Ae);k(R.$$.fragment,Yo),Yo.forEach(o),Ko.forEach(o),wt=d(ut),ze=n(ut,"SPAN",{});var ea=r(ze);yt=i(ea,"Overview"),ea.forEach(o),ut.forEach(o),Ge=d(e),F=n(e,"P",{});var ht=r(F);xt=i(ht,"The TAPEX model was proposed in "),M=n(ht,"A",{href:!0,rel:!0});var ta=r(M);qt=i(ta,"TAPEX: Table Pre-training via Learning a Neural SQL Executor"),ta.forEach(o),At=i(ht,` by Qian Liu,
Bei Chen, Jiaqi Guo, Morteza Ziyadi, Zeqi Lin, Weizhu Chen, Jian-Guang Lou. TAPEX pre-trains a BART model to solve synthetic SQL queries, after
which it can be fine-tuned to answer natural language questions related to tabular data, as well as performing table fact checking.`),ht.forEach(o),He=d(e),ne=n(e,"P",{});var oa=r(ne);zt=i(oa,"TAPEX has been fine-tuned on several datasets:"),oa.forEach(o),Ve=d(e),f=n(e,"UL",{});var B=r(f);re=n(B,"LI",{});var Wo=r(re);U=n(Wo,"A",{href:!0,rel:!0});var aa=r(U);Et=i(aa,"SQA"),aa.forEach(o),Pt=i(Wo," (Sequential Question Answering by Microsoft)"),Wo.forEach(o),$t=d(B),se=n(B,"LI",{});var Ro=r(se);O=n(Ro,"A",{href:!0,rel:!0});var na=r(O);St=i(na,"WTQ"),na.forEach(o),Lt=i(Ro," (Wiki Table Questions by Stanford University)"),Ro.forEach(o),jt=d(B),ie=n(B,"LI",{});var Mo=r(ie);G=n(Mo,"A",{href:!0,rel:!0});var ra=r(G);Ft=i(ra,"WikiSQL"),ra.forEach(o),Ct=i(Mo," (by Salesforce)"),Mo.forEach(o),Nt=d(B),le=n(B,"LI",{});var Uo=r(le);H=n(Uo,"A",{href:!0,rel:!0});var sa=r(H);It=i(sa,"TabFact"),sa.forEach(o),Xt=i(Uo," (by USCB NLP Lab)."),Uo.forEach(o),B.forEach(o),Je=d(e),ce=n(e,"P",{});var ia=r(ce);Bt=i(ia,"The abstract from the paper is the following:"),ia.forEach(o),Ze=d(e),de=n(e,"P",{});var la=r(de);Ee=n(la,"EM",{});var ca=r(Ee);Dt=i(ca,`Recent progress in language model pre-training has achieved a great success via leveraging large-scale unstructured textual data. However, it is
still a challenge to apply pre-training on structured tabular data due to the absence of large-scale high-quality tabular data. In this paper, we
propose TAPEX to show that table pre-training can be achieved by learning a neural SQL executor over a synthetic corpus, which is obtained by automatically
synthesizing executable SQL queries and their execution outputs. TAPEX addresses the data scarcity challenge via guiding the language model to mimic a SQL
executor on the diverse, large-scale and high-quality synthetic corpus. We evaluate TAPEX on four benchmark datasets. Experimental results demonstrate that
TAPEX outperforms previous table pre-training approaches by a large margin and achieves new state-of-the-art results on all of them. This includes improvements
on the weakly-supervised WikiSQL denotation accuracy to 89.5% (+2.3%), the WikiTableQuestions denotation accuracy to 57.5% (+4.8%), the SQA denotation accuracy
to 74.5% (+3.5%), and the TabFact accuracy to 84.2% (+3.2%). To our knowledge, this is the first work to exploit table pre-training via synthetic executable programs
and to achieve new state-of-the-art results on various downstream tasks.`),ca.forEach(o),la.forEach(o),Ke=d(e),pe=n(e,"P",{});var da=r(pe);Qt=i(da,"Tips:"),da.forEach(o),Ye=d(e),g=n(e,"UL",{});var D=r(g);Pe=n(D,"LI",{});var pa=r(Pe);Wt=i(pa,"TAPEX is a generative (seq2seq) model. One can directly plug in the weights of TAPEX into a BART model."),pa.forEach(o),Rt=d(D),$e=n(D,"LI",{});var ua=r($e);Mt=i(ua,"TAPEX has checkpoints on the hub that are either pre-trained only, or fine-tuned on WTQ, SQA, WikiSQL and TabFact."),ua.forEach(o),Ut=d(D),E=n(D,"LI",{});var Te=r(E);Ot=i(Te,"Sentences + tables are presented to the model as "),Se=n(Te,"CODE",{});var ha=r(Se);Gt=i(ha,'sentence + " " + linearized table'),ha.forEach(o),Ht=i(Te,`. The linearized table has the following format:
`),Le=n(Te,"CODE",{});var ma=r(Le);Vt=i(ma,"col: col1 | col2 | col 3 row 1 : val1 | val2 | val3 row 2 : ..."),ma.forEach(o),Jt=i(Te,"."),Te.forEach(o),Zt=d(D),P=n(D,"LI",{});var we=r(P);Kt=i(we,`TAPEX has its own tokenizer, that allows to prepare all data for the model easily. One can pass Pandas DataFrames and strings to the tokenizer,
and it will automatically create the `),je=n(we,"CODE",{});var fa=r(je);Yt=i(fa,"input_ids"),fa.forEach(o),eo=i(we," and "),Fe=n(we,"CODE",{});var ga=r(Fe);to=i(ga,"attention_mask"),ga.forEach(o),oo=i(we," (as shown in the usage examples below)."),we.forEach(o),D.forEach(o),et=d(e),$=n(e,"H2",{class:!0});var mt=r($);C=n(mt,"A",{id:!0,class:!0,href:!0});var _a=r(C);Ce=n(_a,"SPAN",{});var ba=r(Ce);k(V.$$.fragment,ba),ba.forEach(o),_a.forEach(o),ao=d(mt),Ne=n(mt,"SPAN",{});var va=r(Ne);no=i(va,"Usage: inference"),va.forEach(o),mt.forEach(o),tt=d(e),_=n(e,"P",{});var Q=r(_);ro=i(Q,`Below, we illustrate how to use TAPEX for table question answering. As one can see, one can directly plug in the weights of TAPEX into a BART model.
We use the `),ue=n(Q,"A",{href:!0});var ka=r(ue);so=i(ka,"Auto API"),ka.forEach(o),io=i(Q,", which will automatically instantiate the appropriate tokenizer ("),he=n(Q,"A",{href:!0});var Ta=r(he);lo=i(Ta,"TapexTokenizer"),Ta.forEach(o),co=i(Q,") and model ("),me=n(Q,"A",{href:!0});var wa=r(me);po=i(wa,"BartForConditionalGeneration"),wa.forEach(o),uo=i(Q,`) for us,
based on the configuration file of the checkpoint on the hub.`),Q.forEach(o),ot=d(e),k(J.$$.fragment,e),at=d(e),N=n(e,"P",{});var ft=r(N);ho=i(ft,"Note that "),fe=n(ft,"A",{href:!0});var ya=r(fe);mo=i(ya,"TapexTokenizer"),ya.forEach(o),fo=i(ft,` also supports batched inference. Hence, one can provide a batch of different tables/questions, or a batch of a single table
and multiple questions, or a batch of a single query and multiple tables. Let\u2019s illustrate this:`),ft.forEach(o),nt=d(e),k(Z.$$.fragment,e),rt=d(e),b=n(e,"P",{});var ye=r(b);go=i(ye,`In case one wants to do table verification (i.e. the task of determining whether a given sentence is supported or refuted by the contents
of a table), one can instantiate a `),ge=n(ye,"A",{href:!0});var xa=r(ge);_o=i(xa,"BartForSequenceClassification"),xa.forEach(o),bo=i(ye,` model. TAPEX has checkpoints on the hub fine-tuned on TabFact, an important
benchmark for table fact checking (it achieves 84% accuracy). The code example below again leverages the `),_e=n(ye,"A",{href:!0});var qa=r(_e);vo=i(qa,"Auto API"),qa.forEach(o),ko=i(ye,"."),ye.forEach(o),st=d(e),k(K.$$.fragment,e),it=d(e),be=n(e,"P",{});var Aa=r(be);To=i(Aa,"Refused"),Aa.forEach(o),lt=d(e),S=n(e,"H2",{class:!0});var gt=r(S);I=n(gt,"A",{id:!0,class:!0,href:!0});var za=r(I);Ie=n(za,"SPAN",{});var Ea=r(Ie);k(Y.$$.fragment,Ea),Ea.forEach(o),za.forEach(o),wo=d(gt),Xe=n(gt,"SPAN",{});var Pa=r(Xe);yo=i(Pa,"TapexTokenizer"),Pa.forEach(o),gt.forEach(o),ct=d(e),h=n(e,"DIV",{class:!0});var m=r(h);k(ee.$$.fragment,m),xo=d(m),Be=n(m,"P",{});var $a=r(Be);qo=i($a,"Construct a TAPEX tokenizer. Based on byte-level Byte-Pair-Encoding (BPE)."),$a.forEach(o),Ao=d(m),De=n(m,"P",{});var Sa=r(De);zo=i(Sa,`This tokenizer can be used to flatten one or more table(s) and concatenate them with one or more related sentences
to be used by TAPEX models. The format that the TAPEX tokenizer creates is the following:`),Sa.forEach(o),Eo=d(m),Qe=n(m,"P",{});var La=r(Qe);Po=i(La,"sentence col: col1 | col2 | col 3 row 1 : val1 | val2 | val3 row 2 : \u2026"),La.forEach(o),$o=d(m),We=n(m,"P",{});var ja=r(We);So=i(ja,`The tokenizer supports a single table + single query, a single table and multiple queries (in which case the table
will be duplicated for every query), a single query and multiple tables (in which case the query will be duplicated
for every table), and multiple tables and queries. In other words, you can provide a batch of tables + questions to
the tokenizer for instance to prepare them for the model.`),ja.forEach(o),Lo=d(m),Re=n(m,"P",{});var Fa=r(Re);jo=i(Fa,"Tokenization itself is based on the BPE algorithm. It is identical to the one used by BART, RoBERTa and GPT-2."),Fa.forEach(o),Fo=d(m),te=n(m,"P",{});var _t=r(te);Co=i(_t,"This tokenizer inherits from "),ve=n(_t,"A",{href:!0});var Ca=r(ve);No=i(Ca,"PreTrainedTokenizer"),Ca.forEach(o),Io=i(_t,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),_t.forEach(o),Xo=d(m),X=n(m,"DIV",{class:!0});var bt=r(X);k(oe.$$.fragment,bt),Bo=d(bt),Me=n(bt,"P",{});var Na=r(Me);Do=i(Na,"Main method to tokenize and prepare for the model one or several table-sequence pair(s)."),Na.forEach(o),bt.forEach(o),Qo=d(m),ke=n(m,"DIV",{class:!0});var Ia=r(ke);k(ae.$$.fragment,Ia),Ia.forEach(o),m.forEach(o),this.h()},h(){p(q,"name","hf:doc:metadata"),p(q,"content",JSON.stringify(Ua)),p(L,"id","tapex"),p(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(L,"href","#tapex"),p(A,"class","relative group"),p(j,"id","overview"),p(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(j,"href","#overview"),p(z,"class","relative group"),p(M,"href","https://arxiv.org/abs/2107.07653"),p(M,"rel","nofollow"),p(U,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),p(U,"rel","nofollow"),p(O,"href","https://github.com/ppasupat/WikiTableQuestions"),p(O,"rel","nofollow"),p(G,"href","https://github.com/salesforce/WikiSQL"),p(G,"rel","nofollow"),p(H,"href","https://tabfact.github.io/"),p(H,"rel","nofollow"),p(C,"id","usage-inference"),p(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(C,"href","#usage-inference"),p($,"class","relative group"),p(ue,"href","auto"),p(he,"href","/docs/transformers/pr_16473/en/model_doc/tapex#transformers.TapexTokenizer"),p(me,"href","/docs/transformers/pr_16473/en/model_doc/bart#transformers.BartForConditionalGeneration"),p(fe,"href","/docs/transformers/pr_16473/en/model_doc/tapex#transformers.TapexTokenizer"),p(ge,"href","/docs/transformers/pr_16473/en/model_doc/bart#transformers.BartForSequenceClassification"),p(_e,"href","auto"),p(I,"id","transformers.TapexTokenizer"),p(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(I,"href","#transformers.TapexTokenizer"),p(S,"class","relative group"),p(ve,"href","/docs/transformers/pr_16473/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(X,"class","docstring"),p(ke,"class","docstring"),p(h,"class","docstring")},m(e,l){t(document.head,q),u(e,Ue,l),u(e,A,l),t(A,L),t(L,xe),T(W,xe,null),t(A,kt),t(A,qe),t(qe,Tt),u(e,Oe,l),u(e,z,l),t(z,j),t(j,Ae),T(R,Ae,null),t(z,wt),t(z,ze),t(ze,yt),u(e,Ge,l),u(e,F,l),t(F,xt),t(F,M),t(M,qt),t(F,At),u(e,He,l),u(e,ne,l),t(ne,zt),u(e,Ve,l),u(e,f,l),t(f,re),t(re,U),t(U,Et),t(re,Pt),t(f,$t),t(f,se),t(se,O),t(O,St),t(se,Lt),t(f,jt),t(f,ie),t(ie,G),t(G,Ft),t(ie,Ct),t(f,Nt),t(f,le),t(le,H),t(H,It),t(le,Xt),u(e,Je,l),u(e,ce,l),t(ce,Bt),u(e,Ze,l),u(e,de,l),t(de,Ee),t(Ee,Dt),u(e,Ke,l),u(e,pe,l),t(pe,Qt),u(e,Ye,l),u(e,g,l),t(g,Pe),t(Pe,Wt),t(g,Rt),t(g,$e),t($e,Mt),t(g,Ut),t(g,E),t(E,Ot),t(E,Se),t(Se,Gt),t(E,Ht),t(E,Le),t(Le,Vt),t(E,Jt),t(g,Zt),t(g,P),t(P,Kt),t(P,je),t(je,Yt),t(P,eo),t(P,Fe),t(Fe,to),t(P,oo),u(e,et,l),u(e,$,l),t($,C),t(C,Ce),T(V,Ce,null),t($,ao),t($,Ne),t(Ne,no),u(e,tt,l),u(e,_,l),t(_,ro),t(_,ue),t(ue,so),t(_,io),t(_,he),t(he,lo),t(_,co),t(_,me),t(me,po),t(_,uo),u(e,ot,l),T(J,e,l),u(e,at,l),u(e,N,l),t(N,ho),t(N,fe),t(fe,mo),t(N,fo),u(e,nt,l),T(Z,e,l),u(e,rt,l),u(e,b,l),t(b,go),t(b,ge),t(ge,_o),t(b,bo),t(b,_e),t(_e,vo),t(b,ko),u(e,st,l),T(K,e,l),u(e,it,l),u(e,be,l),t(be,To),u(e,lt,l),u(e,S,l),t(S,I),t(I,Ie),T(Y,Ie,null),t(S,wo),t(S,Xe),t(Xe,yo),u(e,ct,l),u(e,h,l),T(ee,h,null),t(h,xo),t(h,Be),t(Be,qo),t(h,Ao),t(h,De),t(De,zo),t(h,Eo),t(h,Qe),t(Qe,Po),t(h,$o),t(h,We),t(We,So),t(h,Lo),t(h,Re),t(Re,jo),t(h,Fo),t(h,te),t(te,Co),t(te,ve),t(ve,No),t(te,Io),t(h,Xo),t(h,X),T(oe,X,null),t(X,Bo),t(X,Me),t(Me,Do),t(h,Qo),t(h,ke),T(ae,ke,null),dt=!0},p:Wa,i(e){dt||(w(W.$$.fragment,e),w(R.$$.fragment,e),w(V.$$.fragment,e),w(J.$$.fragment,e),w(Z.$$.fragment,e),w(K.$$.fragment,e),w(Y.$$.fragment,e),w(ee.$$.fragment,e),w(oe.$$.fragment,e),w(ae.$$.fragment,e),dt=!0)},o(e){y(W.$$.fragment,e),y(R.$$.fragment,e),y(V.$$.fragment,e),y(J.$$.fragment,e),y(Z.$$.fragment,e),y(K.$$.fragment,e),y(Y.$$.fragment,e),y(ee.$$.fragment,e),y(oe.$$.fragment,e),y(ae.$$.fragment,e),dt=!1},d(e){o(q),e&&o(Ue),e&&o(A),x(W),e&&o(Oe),e&&o(z),x(R),e&&o(Ge),e&&o(F),e&&o(He),e&&o(ne),e&&o(Ve),e&&o(f),e&&o(Je),e&&o(ce),e&&o(Ze),e&&o(de),e&&o(Ke),e&&o(pe),e&&o(Ye),e&&o(g),e&&o(et),e&&o($),x(V),e&&o(tt),e&&o(_),e&&o(ot),x(J,e),e&&o(at),e&&o(N),e&&o(nt),x(Z,e),e&&o(rt),e&&o(b),e&&o(st),x(K,e),e&&o(it),e&&o(be),e&&o(lt),e&&o(S),x(Y),e&&o(ct),e&&o(h),x(ee),x(oe),x(ae)}}}const Ua={local:"tapex",sections:[{local:"overview",title:"Overview"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.TapexTokenizer",title:"TapexTokenizer"}],title:"TAPEX"};function Oa(Ho){return Ra(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Za extends Xa{constructor(q){super();Ba(this,q,Oa,Ma,Da,{})}}export{Za as default,Ua as metadata};
