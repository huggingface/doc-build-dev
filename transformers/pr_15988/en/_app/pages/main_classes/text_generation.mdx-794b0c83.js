import{S as ia,i as la,s as da,e as s,k as d,w as k,t as o,M as pa,c as r,d as t,m as p,a as i,x as v,h as a,b as l,F as e,g,y,L as ca,q as w,o as j,B as T}from"../../chunks/vendor-4833417e.js";import{D as Le}from"../../chunks/Docstring-7b52c3d4.js";import{C as fo}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as wt}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function ma(jt){let E,_e,M,z,Pe,U,Tt,Ie,Mt,ot,m,qt,he,Gt,Ft,fe,zt,At,xe,$t,Nt,be,Ot,Et,ke,Lt,Pt,ve,It,Dt,at,_,St,De,Ct,Wt,Se,Ht,Bt,ye,Ut,Vt,we,Xt,Rt,je,Jt,Zt,st,L,C,Ce,V,Kt,We,Qt,rt,A,X,Yt,R,en,Te,tn,nn,on,h,J,an,He,sn,rn,P,ln,Be,dn,pn,Me,cn,mn,un,Z,gn,K,_n,hn,fn,Ue,xn,bn,Q,it,I,W,Ve,Y,kn,Xe,vn,lt,$,ee,yn,te,wn,qe,jn,Tn,Mn,u,ne,qn,Re,Gn,Fn,oe,zn,ae,An,$n,Nn,N,On,Je,En,Ln,Ze,Pn,In,Ge,Dn,Sn,Cn,se,Wn,re,Hn,Bn,Un,Ke,Vn,Xn,ie,dt,D,H,Qe,le,Rn,Ye,Jn,pt,O,de,Zn,pe,Kn,Fe,Qn,Yn,eo,f,ce,to,et,no,oo,S,ao,tt,so,ro,ze,io,lo,po,me,co,ue,mo,uo,go,nt,_o,ho,ge,ct;return U=new wt({}),V=new wt({}),X=new Le({props:{name:"class transformers.generation_utils.GenerationMixin",anchor:"transformers.generation_utils.GenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L378"}}),J=new Le({props:{name:"generate",anchor:"transformers.generation_utils.GenerationMixin.generate",parameters:[{name:"inputs",val:": typing.Optional[torch.Tensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"typical_p",val:": typing.Optional[float] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.Iterable[int]] = None"},{name:"force_words_ids",val:": typing.Union[typing.Iterable[int], typing.Iterable[typing.Iterable[int]], NoneType] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"max_time",val:": typing.Optional[float] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Union[typing.Callable[[int, torch.Tensor], typing.List[int]], NoneType] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = []"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = []"},{name:"constraints",val:": typing.Optional[typing.List[transformers.generation_beam_constraints.Constraint]] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L806",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.generate.inputs",description:"<strong>inputs</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, `(batch_size, sequence_length, &#x2014;",name:"inputs"},{anchor:"transformers.generation_utils.GenerationMixin.generate.feature_dim)`",description:`<strong>feature_dim)\`</strong> or <code>(batch_size, num_channels, height, width)</code>, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation or as model inputs to the encoder. If <code>None</code> the
method initializes it with <code>bos_token_id</code> and a batch size of 1. For decoder-only models <code>inputs</code>
should of in the format of <code>input_ids</code>. For encoder-decoder models <em>inputs</em> can represent any of
<code>input_ids</code>, <code>input_values</code>, <code>input_features</code>, or <code>pixel_values</code>.`,name:"feature_dim)`"},{anchor:"transformers.generation_utils.GenerationMixin.generate.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.max_length</code>) &#x2014;
The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.generate.max_new_tokens",description:`<strong>max_new_tokens</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
The maximum numbers of tokens to generate, ignore the current number of tokens. Use either
<code>max_new_tokens</code> or <code>max_length</code> but not both, they serve the same purpose.`,name:"max_new_tokens"},{anchor:"transformers.generation_utils.GenerationMixin.generate.min_length",description:`<strong>min_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
The minimum length of the sequence to be generated.`,name:"min_length"},{anchor:"transformers.generation_utils.GenerationMixin.generate.do_sample",description:`<strong>do_sample</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use sampling ; use greedy decoding otherwise.`,name:"do_sample"},{anchor:"transformers.generation_utils.GenerationMixin.generate.early_stopping",description:`<strong>early_stopping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to stop the beam search when at least <code>num_beams</code> sentences are finished per batch or not.`,name:"early_stopping"},{anchor:"transformers.generation_utils.GenerationMixin.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.generation_utils.GenerationMixin.generate.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The value used to module the next token probabilities.`,name:"temperature"},{anchor:"transformers.generation_utils.GenerationMixin.generate.top_k",description:`<strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of highest probability vocabulary tokens to keep for top-k-filtering.`,name:"top_k"},{anchor:"transformers.generation_utils.GenerationMixin.generate.top_p",description:`<strong>top_p</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
If set to float &lt; 1, only the most probable tokens with probabilities that add up to <code>top_p</code> or higher
are kept for generation.`,name:"top_p"},{anchor:"transformers.generation_utils.GenerationMixin.generate.repetition_penalty",description:`<strong>repetition_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The parameter for repetition penalty. 1.0 means no penalty. See <a href="https://arxiv.org/pdf/1909.05858.pdf" rel="nofollow">this
paper</a> for more details.`,name:"repetition_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>beginning-of-sequence</em> token.`,name:"bos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.length_penalty",description:`<strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Exponential penalty to the length. 1.0 means no penalty. Set to values &lt; 1.0 in order to encourage the
model to generate shorter sequences, to a value &gt; 1.0 in order to encourage the model to produce longer
sequences.`,name:"length_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.no_repeat_ngram_size",description:`<strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to int &gt; 0, all ngrams of that size can only occur once.`,name:"no_repeat_ngram_size"},{anchor:"transformers.generation_utils.GenerationMixin.generate.encoder_no_repeat_ngram_size",description:`<strong>encoder_no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to int &gt; 0, all ngrams of that size that occur in the <code>encoder_input_ids</code> cannot occur in the
<code>decoder_input_ids</code>.`,name:"encoder_no_repeat_ngram_size"},{anchor:"transformers.generation_utils.GenerationMixin.generate.bad_words_ids(List[List[int]],",description:`<strong>bad_words_ids(<code>List[List[int]]</code>,</strong> <em>optional</em>) &#x2014;
List of token ids that are not allowed to be generated. In order to get the token ids of the words that
should not appear in the generated text, use <code>tokenizer(bad_words, add_prefix_space=True, add_special_tokens=False).input_ids</code>.`,name:"bad_words_ids(List[List[int]],"},{anchor:"transformers.generation_utils.GenerationMixin.generate.force_words_ids(List[List[int]]",description:`<strong>force_words_ids(<code>List[List[int]]</code></strong> or <code>List[List[List[int]]]</code>, <em>optional</em>) &#x2014;
List of token ids that must be generated. If given a <code>List[List[int]]</code>, this is treated as a simple
list of words that must be included, the opposite to <code>bad_words_ids</code>. If given <code>List[List[List[int]]]</code>,
this triggers a <a href="https://github.com/huggingface/transformers/issues/14081" rel="nofollow">disjunctive constraint</a>,
where one can allow different forms of each word.`,name:"force_words_ids(List[List[int]]"},{anchor:"transformers.generation_utils.GenerationMixin.generate.num_return_sequences(int,",description:`<strong>num_return_sequences(<code>int</code>,</strong> <em>optional</em>, defaults to 1) &#x2014;
The number of independently computed returned sequences for each element in the batch.`,name:"num_return_sequences(int,"},{anchor:"transformers.generation_utils.GenerationMixin.generate.max_time(float,",description:`<strong>max_time(<code>float</code>,</strong> <em>optional</em>, defaults to None) &#x2014;
The maximum amount of time you allow the computation to run for in seconds. generation will still
finish the current pass after allocated time has been passed.`,name:"max_time(float,"},{anchor:"transformers.generation_utils.GenerationMixin.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values are in <code>[0, 1]</code>, 1 for tokens
that are not masked, and 0 for masked tokens. If not provided, will default to a tensor the same shape
as <code>input_ids</code> that masks the pad token. <a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.generation_utils.GenerationMixin.generate.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If an encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.
use_cache &#x2014; (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):
Whether or not the model should use the past last key/values attentions (if applicable to the model) to
speed up decoding.`,name:"decoder_start_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.num_beam_groups",description:`<strong>num_beam_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of groups to divide <code>num_beams</code> into in order to ensure diversity among different groups of
beams. <a href="https://arxiv.org/pdf/1610.02424.pdf" rel="nofollow">this paper</a> for more details.`,name:"num_beam_groups"},{anchor:"transformers.generation_utils.GenerationMixin.generate.diversity_penalty",description:`<strong>diversity_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
This value is subtracted from a beam&#x2019;s score if it generates a token same as any beam from other group
at a particular time. Note that <code>diversity_penalty</code> is only effective if <code>group beam search</code> is
enabled.
prefix_allowed_tokens_fn &#x2014; (<code>Callable[[int, torch.Tensor], List[int]]</code>, <em>optional</em>):
If provided, this function constraints the beam search to allowed tokens only at each step. If not
provided no constraint is applied. This function takes 2 arguments: the batch ID <code>batch_id</code> and
<code>input_ids</code>. It has to return a list with the allowed tokens for the next generation step conditioned
on the batch ID <code>batch_id</code> and the previously generated tokens <code>inputs_ids</code>. This argument is useful
for constrained generation conditioned on the prefix, as described in <a href="https://arxiv.org/abs/2010.00904" rel="nofollow">Autoregressive Entity
Retrieval</a>.`,name:"diversity_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
Custom logits processors that complement the default logits processors built from arguments and a
model&#x2019;s config. If a logit processor is passed that is already created with the arguments or a model&#x2019;s
config an error is thrown. This feature is intended for advanced users.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.generate.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
Custom stopping criteria that complement the default stopping criteria built from arguments and a
model&#x2019;s config. If a stopping criteria is passed that is already created with the arguments or a
model&#x2019;s config an error is thrown. This feature is intended for advanced users.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.generate.constraints",description:`<strong>constraints</strong> (<code>List[Constraint]</code>, <em>optional</em>) &#x2014;
Custom constraints that can be added to the generation to ensure that the output will contain the use
of certain tokens as defined by <code>Constraint</code> objects, in the most sensible way possible.`,name:"constraints"},{anchor:"transformers.generation_utils.GenerationMixin.generate.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.generate.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.generate.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.generate.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15988/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.generate.forced_bos_token_id",description:`<strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful
for multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be
the target language token.`,name:"forced_bos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached.`,name:"forced_eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.remove_invalid_values",description:`<strong>remove_invalid_values</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to remove possible <em>nan</em> and <em>inf</em> outputs of the model to prevent the generation method to
crash. Note that using <code>remove_invalid_values</code> can slow down generation.`,name:"remove_invalid_values"},{anchor:"transformers.generation_utils.GenerationMixin.generate.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max<em>length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If the model
is an encoder-decoder model, encoder specific kwargs should not be prefixed and decoder specific kwargs
should be prefixed with *decoder</em>*.`,name:"synced_gpus"}],returnDescription:`
<p>A <a
  href="/docs/transformers/pr_15988/en/main_classes/output#transformers.file_utils.ModelOutput"
>ModelOutput</a> (if
<code>return_dict_in_generate=True</code> or when <code>config.return_dict_in_generate=True</code>) or a <code>torch.FloatTensor</code>.</p>
<p>If the model is <em>not</em> an encoder-decoder model (<code>model.config.is_encoder_decoder=False</code>), the possible
<a
  href="/docs/transformers/pr_15988/en/main_classes/output#transformers.file_utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a></li>
</ul>
<p>If the model is an encoder-decoder model (<code>model.config.is_encoder_decoder=True</code>), the possible
<a
  href="/docs/transformers/pr_15988/en/main_classes/output#transformers.file_utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a></li>
</ul>
`}}),Q=new fo({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM, AutoModelForSeq2SeqLM

tokenizer = AutoTokenizer.from_pretrained("distilgpt2")
model = AutoModelForCausalLM.from_pretrained("distilgpt2")
# do greedy decoding without providing a prompt
outputs = model.generate(max_length=40)
print("Generated:", tokenizer.decode(outputs[0], skip_special_tokens=True))

tokenizer = AutoTokenizer.from_pretrained("t5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")
document = (
    "at least two people were killed in a suspected bomb attack on a passenger bus "
    "in the strife-torn southern philippines on monday , the military said."
)
# encode input context
input_ids = tokenizer(document, return_tensors="pt").input_ids
# generate 3 independent sequences using beam search decoding (5 beams)
# with T5 encoder-decoder model conditioned on short news article.
outputs = model.generate(input_ids=input_ids, num_beams=5, num_return_sequences=3)
print("Generated:", tokenizer.batch_decode(outputs, skip_special_tokens=True))

tokenizer = AutoTokenizer.from_pretrained("distilgpt2")
model = AutoModelForCausalLM.from_pretrained("distilgpt2")
input_context = "The dog"
# encode input context
input_ids = tokenizer(input_context, return_tensors="pt").input_ids
# generate 3 candidates using sampling
outputs = model.generate(input_ids=input_ids, max_length=20, num_return_sequences=3, do_sample=True)
print("Generated:", tokenizer.batch_decode(outputs, skip_special_tokens=True))

tokenizer = AutoTokenizer.from_pretrained("ctrl")
model = AutoModelForCausalLM.from_pretrained("ctrl")
# "Legal" is one of the control codes for ctrl
input_context = "Legal My neighbor is"
# encode input context
input_ids = tokenizer(input_context, return_tensors="pt").input_ids
outputs = model.generate(input_ids=input_ids, max_length=20, repetition_penalty=1.2)
print("Generated:", tokenizer.decode(outputs[0], skip_special_tokens=True))

tokenizer = AutoTokenizer.from_pretrained("gpt2", use_fast=False)
model = AutoModelForCausalLM.from_pretrained("gpt2")
input_context = "My cute dog"
# get tokens of words that should not be generated
bad_words_ids = tokenizer(
    ["idiot", "stupid", "shut up"], add_prefix_space=True, add_special_tokens=False
).input_ids
# get tokens of words that we want generated
force_words_ids = tokenizer(["runs", "loves"], add_prefix_space=True, add_special_tokens=False).input_ids
# encode input context
input_ids = tokenizer(input_context, return_tensors="pt").input_ids
# generate sequences without allowing bad_words to be generated
outputs = model.generate(
    input_ids=input_ids,
    max_length=20,
    do_sample=True,
    bad_words_ids=bad_words_ids,
    force_words_ids=force_words_ids,
)
print("Generated:", tokenizer.decode(outputs[0], skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM, AutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># do greedy decoding without providing a prompt</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(max_length=<span class="hljs-number">40</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>document = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;at least two people were killed in a suspected bomb attack on a passenger bus &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;in the strife-torn southern philippines on monday , the military said.&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode input context</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(document, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generate 3 independent sequences using beam search decoding (5 beams)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># with T5 encoder-decoder model conditioned on short news article.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids=input_ids, num_beams=<span class="hljs-number">5</span>, num_return_sequences=<span class="hljs-number">3</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_context = <span class="hljs-string">&quot;The dog&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode input context</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_context, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generate 3 candidates using sampling</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids=input_ids, max_length=<span class="hljs-number">20</span>, num_return_sequences=<span class="hljs-number">3</span>, do_sample=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># &quot;Legal&quot; is one of the control codes for ctrl</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_context = <span class="hljs-string">&quot;Legal My neighbor is&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode input context</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_context, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids=input_ids, max_length=<span class="hljs-number">20</span>, repetition_penalty=<span class="hljs-number">1.2</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>, use_fast=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_context = <span class="hljs-string">&quot;My cute dog&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># get tokens of words that should not be generated</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bad_words_ids = tokenizer(
<span class="hljs-meta">... </span>    [<span class="hljs-string">&quot;idiot&quot;</span>, <span class="hljs-string">&quot;stupid&quot;</span>, <span class="hljs-string">&quot;shut up&quot;</span>], add_prefix_space=<span class="hljs-literal">True</span>, add_special_tokens=<span class="hljs-literal">False</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># get tokens of words that we want generated</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>force_words_ids = tokenizer([<span class="hljs-string">&quot;runs&quot;</span>, <span class="hljs-string">&quot;loves&quot;</span>], add_prefix_space=<span class="hljs-literal">True</span>, add_special_tokens=<span class="hljs-literal">False</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode input context</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_context, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generate sequences without allowing bad_words to be generated</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">20</span>,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    bad_words_ids=bad_words_ids,
<span class="hljs-meta">... </span>    force_words_ids=force_words_ids,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))`}}),Y=new wt({}),ee=new Le({props:{name:"class transformers.generation_tf_utils.TFGenerationMixin",anchor:"transformers.generation_tf_utils.TFGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_tf_utils.py#L342"}}),ne=new Le({props:{name:"generate",anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate",parameters:[{name:"input_ids",val:" = None"},{name:"max_length",val:" = None"},{name:"min_length",val:" = None"},{name:"do_sample",val:" = None"},{name:"early_stopping",val:" = None"},{name:"num_beams",val:" = None"},{name:"temperature",val:" = None"},{name:"top_k",val:" = None"},{name:"top_p",val:" = None"},{name:"repetition_penalty",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"forced_bos_token_id",val:" = None"},{name:"forced_eos_token_id",val:" = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_tf_utils.py#L362",parametersDescription:[{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.input_ids",description:"<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, `(batch_size, sequence_length, &#x2014;",name:"input_ids"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.feature_dim)`",description:`<strong>feature_dim)\`</strong> or <code>(batch_size, num_channels, height, width)</code>, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation or as model inputs to the encoder. If <code>None</code> the
method initializes it with <code>bos_token_id</code> and a batch size of 1. For decoder-only models <code>inputs</code>
should of in the format of <code>input_ids</code>. For encoder-decoder models <em>inputs</em> can represent any of
<code>input_ids</code>, <code>input_values</code>, <code>input_features</code>, or <code>pixel_values</code>.`,name:"feature_dim)`"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.min_length",description:`<strong>min_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
The minimum length of the sequence to be generated.`,name:"min_length"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.do_sample",description:`<strong>do_sample</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use sampling ; use greedy decoding otherwise.`,name:"do_sample"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.early_stopping",description:`<strong>early_stopping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to stop the beam search when at least <code>num_beams</code> sentences are finished per batch or not.`,name:"early_stopping"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The value used to module the next token probabilities.`,name:"temperature"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.top_k",description:`<strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of highest probability vocabulary tokens to keep for top-k-filtering.`,name:"top_k"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.top_p",description:`<strong>top_p</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
If set to float &lt; 1, only the most probable tokens with probabilities that add up to <code>top_p</code> or higher
are kept for generation.`,name:"top_p"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.repetition_penalty",description:`<strong>repetition_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The parameter for repetition penalty. 1.0 means no penalty. See <a href="https://arxiv.org/pdf/1909.05858.pdf" rel="nofollow">this
paper</a> for more details.`,name:"repetition_penalty"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>beginning-of-sequence</em> token.`,name:"bos_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.length_penalty",description:`<strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Exponential penalty to the length. 1.0 means no penalty.</p>
<p>Set to values &lt; 1.0 in order to encourage the model to generate shorter sequences, to a value &gt; 1.0 in
order to encourage the model to produce longer sequences.`,name:"length_penalty"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.no_repeat_ngram_size",description:`<strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to int &gt; 0, all ngrams of that size can only occur once.`,name:"no_repeat_ngram_size"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.bad_words_ids(List[int],",description:`<strong>bad_words_ids(<code>List[int]</code>,</strong> <em>optional</em>) &#x2014;
List of token ids that are not allowed to be generated. In order to get the tokens of the words that
should not appear in the generated text, use <code>tokenizer.encode(bad_word, add_prefix_space=True)</code>.`,name:"bad_words_ids(List[int],"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.num_return_sequences(int,",description:`<strong>num_return_sequences(<code>int</code>,</strong> <em>optional</em>, defaults to 1) &#x2014;
The number of independently computed returned sequences for each element in the batch.`,name:"num_return_sequences(int,"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of <code>dtype=tf.int32</code> and shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values are in <code>[0, 1]</code>, 1 for tokens
that are not masked, and 0 for masked tokens.</p>
<p>If not provided, will default to a tensor the same shape as <code>input_ids</code> that masks the pad token.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If an encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.
use_cache &#x2014; (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):
Whether or not the model should use the past last key/values attentions (if applicable to the model) to
speed up decoding.`,name:"decoder_start_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15988/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.forced_bos_token_id",description:`<strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful
for multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be
the target language token.`,name:"forced_bos_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached.
model_specific_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"forced_eos_token_id"}]}}),ie=new fo({props:{code:`tokenizer = AutoTokenizer.from_pretrained("distilgpt2")  # Initialize tokenizer
model = TFAutoModelWithLMHead.from_pretrained(
    "distilgpt2"
)  # Download model and configuration from huggingface.co and cache.
outputs = model.generate(max_length=40)  # do greedy decoding
print(f"Generated: {tokenizer.decode(outputs[0], skip_special_tokens=True)}")

tokenizer = AutoTokenizer.from_pretrained("openai-gpt")  # Initialize tokenizer
model = TFAutoModelWithLMHead.from_pretrained(
    "openai-gpt"
)  # Download model and configuration from huggingface.co and cache.
input_context = "The dog"
input_ids = tokenizer.encode(input_context, return_tensors="tf")  # encode input context
outputs = model.generate(
    input_ids=input_ids, num_beams=5, num_return_sequences=3, temperature=1.5
)  # generate 3 independent sequences using beam search decoding (5 beams) with sampling from initial context 'The dog'
for i in range(3):  #  3 output sequences were generated
    print(f"Generated {i}: {tokenizer.decode(outputs[i], skip_special_tokens=True)}")

tokenizer = AutoTokenizer.from_pretrained("distilgpt2")  # Initialize tokenizer
model = TFAutoModelWithLMHead.from_pretrained(
    "distilgpt2"
)  # Download model and configuration from huggingface.co and cache.
input_context = "The dog"
input_ids = tokenizer.encode(input_context, return_tensors="tf")  # encode input context
outputs = model.generate(
    input_ids=input_ids, max_length=40, temperature=0.7, num_return_sequences=3, do_sample=True
)  # generate 3 candidates using sampling
for i in range(3):  #  3 output sequences were generated
    print(f"Generated {i}: {tokenizer.decode(outputs[i], skip_special_tokens=True)}")

tokenizer = AutoTokenizer.from_pretrained("ctrl")  # Initialize tokenizer
model = TFAutoModelWithLMHead.from_pretrained(
    "ctrl"
)  # Download model and configuration from huggingface.co and cache.
input_context = "Legal My neighbor is"  # "Legal" is one of the control codes for ctrl
input_ids = tokenizer.encode(input_context, return_tensors="tf")  # encode input context
outputs = model.generate(
    input_ids=input_ids, max_length=50, temperature=0.7, repetition_penalty=1.2
)  # generate sequences
print(f"Generated: {tokenizer.decode(outputs[0], skip_special_tokens=True)}")

tokenizer = AutoTokenizer.from_pretrained("gpt2")  # Initialize tokenizer
model = TFAutoModelWithLMHead.from_pretrained(
    "gpt2"
)  # Download model and configuration from huggingface.co and cache.
input_context = "My cute dog"
bad_words_ids = [
    tokenizer.encode(bad_word, add_prefix_space=True) for bad_word in ["idiot", "stupid", "shut up"]
]
input_ids = tokenizer.encode(input_context, return_tensors="tf")  # encode input context
outputs = model.generate(
    input_ids=input_ids, max_length=100, do_sample=True, bad_words_ids=bad_words_ids
)  # generate sequences without allowing bad_words to be generated`,highlighted:`tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)  <span class="hljs-comment"># Initialize tokenizer</span>
model = TFAutoModelWithLMHead.from_pretrained(
    <span class="hljs-string">&quot;distilgpt2&quot;</span>
)  <span class="hljs-comment"># Download model and configuration from huggingface.co and cache.</span>
outputs = model.generate(max_length=<span class="hljs-number">40</span>)  <span class="hljs-comment"># do greedy decoding</span>
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Generated: <span class="hljs-subst">{tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>)}</span>&quot;</span>)

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)  <span class="hljs-comment"># Initialize tokenizer</span>
model = TFAutoModelWithLMHead.from_pretrained(
    <span class="hljs-string">&quot;openai-gpt&quot;</span>
)  <span class="hljs-comment"># Download model and configuration from huggingface.co and cache.</span>
input_context = <span class="hljs-string">&quot;The dog&quot;</span>
input_ids = tokenizer.encode(input_context, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)  <span class="hljs-comment"># encode input context</span>
outputs = model.generate(
    input_ids=input_ids, num_beams=<span class="hljs-number">5</span>, num_return_sequences=<span class="hljs-number">3</span>, temperature=<span class="hljs-number">1.5</span>
)  <span class="hljs-comment"># generate 3 independent sequences using beam search decoding (5 beams) with sampling from initial context &#x27;The dog&#x27;</span>
<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">3</span>):  <span class="hljs-comment">#  3 output sequences were generated</span>
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Generated <span class="hljs-subst">{i}</span>: <span class="hljs-subst">{tokenizer.decode(outputs[i], skip_special_tokens=<span class="hljs-literal">True</span>)}</span>&quot;</span>)

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)  <span class="hljs-comment"># Initialize tokenizer</span>
model = TFAutoModelWithLMHead.from_pretrained(
    <span class="hljs-string">&quot;distilgpt2&quot;</span>
)  <span class="hljs-comment"># Download model and configuration from huggingface.co and cache.</span>
input_context = <span class="hljs-string">&quot;The dog&quot;</span>
input_ids = tokenizer.encode(input_context, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)  <span class="hljs-comment"># encode input context</span>
outputs = model.generate(
    input_ids=input_ids, max_length=<span class="hljs-number">40</span>, temperature=<span class="hljs-number">0.7</span>, num_return_sequences=<span class="hljs-number">3</span>, do_sample=<span class="hljs-literal">True</span>
)  <span class="hljs-comment"># generate 3 candidates using sampling</span>
<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">3</span>):  <span class="hljs-comment">#  3 output sequences were generated</span>
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Generated <span class="hljs-subst">{i}</span>: <span class="hljs-subst">{tokenizer.decode(outputs[i], skip_special_tokens=<span class="hljs-literal">True</span>)}</span>&quot;</span>)

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ctrl&quot;</span>)  <span class="hljs-comment"># Initialize tokenizer</span>
model = TFAutoModelWithLMHead.from_pretrained(
    <span class="hljs-string">&quot;ctrl&quot;</span>
)  <span class="hljs-comment"># Download model and configuration from huggingface.co and cache.</span>
input_context = <span class="hljs-string">&quot;Legal My neighbor is&quot;</span>  <span class="hljs-comment"># &quot;Legal&quot; is one of the control codes for ctrl</span>
input_ids = tokenizer.encode(input_context, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)  <span class="hljs-comment"># encode input context</span>
outputs = model.generate(
    input_ids=input_ids, max_length=<span class="hljs-number">50</span>, temperature=<span class="hljs-number">0.7</span>, repetition_penalty=<span class="hljs-number">1.2</span>
)  <span class="hljs-comment"># generate sequences</span>
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Generated: <span class="hljs-subst">{tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>)}</span>&quot;</span>)

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)  <span class="hljs-comment"># Initialize tokenizer</span>
model = TFAutoModelWithLMHead.from_pretrained(
    <span class="hljs-string">&quot;gpt2&quot;</span>
)  <span class="hljs-comment"># Download model and configuration from huggingface.co and cache.</span>
input_context = <span class="hljs-string">&quot;My cute dog&quot;</span>
bad_words_ids = [
    tokenizer.encode(bad_word, add_prefix_space=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> bad_word <span class="hljs-keyword">in</span> [<span class="hljs-string">&quot;idiot&quot;</span>, <span class="hljs-string">&quot;stupid&quot;</span>, <span class="hljs-string">&quot;shut up&quot;</span>]
]
input_ids = tokenizer.encode(input_context, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)  <span class="hljs-comment"># encode input context</span>
outputs = model.generate(
    input_ids=input_ids, max_length=<span class="hljs-number">100</span>, do_sample=<span class="hljs-literal">True</span>, bad_words_ids=bad_words_ids
)  <span class="hljs-comment"># generate sequences without allowing bad_words to be generated</span>`}}),le=new wt({}),de=new Le({props:{name:"class transformers.generation_flax_utils.FlaxGenerationMixin",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_flax_utils.py#L119"}}),ce=new Le({props:{name:"generate",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate",parameters:[{name:"input_ids",val:": ndarray"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"prng_key",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"trace",val:": bool = True"},{name:"params",val:": typing.Union[typing.Dict[str, jax._src.numpy.lax_numpy.ndarray], NoneType] = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_flax_utils.py#L154",parametersDescription:[{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.do_sample",description:`<strong>do_sample</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use sampling ; use greedy decoding otherwise.`,name:"do_sample"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The value used to module the next token probabilities.`,name:"temperature"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.top_k",description:`<strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of highest probability vocabulary tokens to keep for top-k-filtering.`,name:"top_k"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.top_p",description:`<strong>top_p</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
If set to float &lt; 1, only the most probable tokens with probabilities that add up to <code>top_p</code> or higher
are kept for generation.`,name:"top_p"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>beginning-of-sequence</em> token.`,name:"bos_token_id"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If an encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token.`,name:"decoder_start_token_id"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.trace",description:`<strong>trace</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to trace generation. Setting <code>trace=False</code> should only be used for debugging and will lead to a
considerably slower runtime.`,name:"trace"},{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.params",description:`<strong>params</strong> (<code>Dict[str, jnp.ndarray]</code>, <em>optional</em>) &#x2014;
Optionally the model parameters can be passed. Can be useful for parallelized generation.
model<em>kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If the model
is an encoder-decoder model, encoder specific kwargs should not be prefixed and decoder specific kwargs
should be prefixed with *decoder</em>*. Also accepts <code>encoder_outputs</code> to skip encoder part.`,name:"params"}],returnDescription:`
<p><a
  href="/docs/transformers/pr_15988/en/main_classes/output#transformers.file_utils.ModelOutput"
>ModelOutput</a>.</p>
`}}),ge=new fo({props:{code:`from transformers import AutoTokenizer, FlaxAutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("distilgpt2")
model = FlaxAutoModelForCausalLM.from_pretrained("distilgpt2")
input_context = "The dog"
# encode input context
input_ids = tokenizer(input_context, return_tensors="np").input_ids
# generate candidates using sampling
outputs = model.generate(input_ids=input_ids, max_length=20, top_k=30, do_sample=True)
print("Generated:", tokenizer.batch_decode(outputs, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAutoModelForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_context = <span class="hljs-string">&quot;The dog&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode input context</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_context, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generate candidates using sampling</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids=input_ids, max_length=<span class="hljs-number">20</span>, top_k=<span class="hljs-number">30</span>, do_sample=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){E=s("meta"),_e=d(),M=s("h1"),z=s("a"),Pe=s("span"),k(U.$$.fragment),Tt=d(),Ie=s("span"),Mt=o("Generation"),ot=d(),m=s("p"),qt=o("The methods for auto-regressive text generation, namely "),he=s("a"),Gt=o("generate()"),Ft=o(" (for the PyTorch models), "),fe=s("a"),zt=o("generate()"),At=o(" (for the TensorFlow models) and "),xe=s("a"),$t=o("generate()"),Nt=o(" (for the Flax/JAX models), are implemented in "),be=s("a"),Ot=o("GenerationMixin"),Et=o(", "),ke=s("a"),Lt=o("TFGenerationMixin"),Pt=o(" and "),ve=s("a"),It=o("FlaxGenerationMixin"),Dt=o(" respectively."),at=d(),_=s("p"),St=o("The "),De=s("code"),Ct=o("GenerationMixin"),Wt=o(" classes are inherited by the corresponding base model classes, "),Se=s("em"),Ht=o("e.g."),Bt=d(),ye=s("a"),Ut=o("PreTrainedModel"),Vt=o(", "),we=s("a"),Xt=o("TFPreTrainedModel"),Rt=o(", and "),je=s("a"),Jt=o("FlaxPreTrainedModel"),Zt=o(` respectively, therefore exposing all
methods for auto-regressive text generation to every model class.`),st=d(),L=s("h2"),C=s("a"),Ce=s("span"),k(V.$$.fragment),Kt=d(),We=s("span"),Qt=o("GenerationMixn"),rt=d(),A=s("div"),k(X.$$.fragment),Yt=d(),R=s("p"),en=o("A class containing all of the functions supporting generation, to be used as a mixin in "),Te=s("a"),tn=o("PreTrainedModel"),nn=o("."),on=d(),h=s("div"),k(J.$$.fragment),an=d(),He=s("p"),sn=o(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
multinomial sampling, beam-search decoding, and beam-search multinomial sampling.`),rn=d(),P=s("p"),ln=o("Apart from "),Be=s("code"),dn=o("inputs"),pn=o(`, all the arguments below will default to the value of the attribute of the same name inside
the `),Me=s("a"),cn=o("PretrainedConfig"),mn=o(" of the model. The default values indicated are the default values of those config."),un=d(),Z=s("p"),gn=o("Most of these parameters are explained in more detail in "),K=s("a"),_n=o(`this blog
post`),hn=o("."),fn=d(),Ue=s("p"),xn=o("Examples:"),bn=d(),k(Q.$$.fragment),it=d(),I=s("h2"),W=s("a"),Ve=s("span"),k(Y.$$.fragment),kn=d(),Xe=s("span"),vn=o("TFGenerationMixn"),lt=d(),$=s("div"),k(ee.$$.fragment),yn=d(),te=s("p"),wn=o("A class containing all of the functions supporting generation, to be used as a mixin in "),qe=s("a"),jn=o("TFPreTrainedModel"),Tn=o("."),Mn=d(),u=s("div"),k(ne.$$.fragment),qn=d(),Re=s("p"),Gn=o(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),Fn=d(),oe=s("p"),zn=o("Adapted in part from "),ae=s("a"),An=o(`Facebook\u2019s XLM beam search
code`),$n=o("."),Nn=d(),N=s("p"),On=o("Apart from "),Je=s("code"),En=o("input_ids"),Ln=o(" and "),Ze=s("code"),Pn=o("attention_mask"),In=o(`, all the arguments below will default to the value of the attribute
of the same name inside the `),Ge=s("a"),Dn=o("PretrainedConfig"),Sn=o(` of the model. The default values indicated are the default
values of those config.`),Cn=d(),se=s("p"),Wn=o("Most of these parameters are explained in more detail in "),re=s("a"),Hn=o(`this blog
post`),Bn=o("."),Un=d(),Ke=s("p"),Vn=o("Examples:"),Xn=d(),k(ie.$$.fragment),dt=d(),D=s("h2"),H=s("a"),Qe=s("span"),k(le.$$.fragment),Rn=d(),Ye=s("span"),Jn=o("FlaxGenerationMixn"),pt=d(),O=s("div"),k(de.$$.fragment),Zn=d(),pe=s("p"),Kn=o("A class containing all of the functions supporting generation, to be used as a mixin in "),Fe=s("a"),Qn=o("FlaxPreTrainedModel"),Yn=o("."),eo=d(),f=s("div"),k(ce.$$.fragment),to=d(),et=s("p"),no=o(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
and, multinomial sampling.`),oo=d(),S=s("p"),ao=o("Apart from "),tt=s("code"),so=o("input_ids"),ro=o(`, all the arguments below will default to the value of the attribute of the same name
inside the `),ze=s("a"),io=o("PretrainedConfig"),lo=o(` of the model. The default values indicated are the default values of those
config.`),po=d(),me=s("p"),co=o("Most of these parameters are explained in more detail in "),ue=s("a"),mo=o(`this blog
post`),uo=o("."),go=d(),nt=s("p"),_o=o("Examples:"),ho=d(),k(ge.$$.fragment),this.h()},l(n){const c=pa('[data-svelte="svelte-1phssyn"]',document.head);E=r(c,"META",{name:!0,content:!0}),c.forEach(t),_e=p(n),M=r(n,"H1",{class:!0});var mt=i(M);z=r(mt,"A",{id:!0,class:!0,href:!0});var xo=i(z);Pe=r(xo,"SPAN",{});var bo=i(Pe);v(U.$$.fragment,bo),bo.forEach(t),xo.forEach(t),Tt=p(mt),Ie=r(mt,"SPAN",{});var ko=i(Ie);Mt=a(ko,"Generation"),ko.forEach(t),mt.forEach(t),ot=p(n),m=r(n,"P",{});var x=i(m);qt=a(x,"The methods for auto-regressive text generation, namely "),he=r(x,"A",{href:!0});var vo=i(he);Gt=a(vo,"generate()"),vo.forEach(t),Ft=a(x," (for the PyTorch models), "),fe=r(x,"A",{href:!0});var yo=i(fe);zt=a(yo,"generate()"),yo.forEach(t),At=a(x," (for the TensorFlow models) and "),xe=r(x,"A",{href:!0});var wo=i(xe);$t=a(wo,"generate()"),wo.forEach(t),Nt=a(x," (for the Flax/JAX models), are implemented in "),be=r(x,"A",{href:!0});var jo=i(be);Ot=a(jo,"GenerationMixin"),jo.forEach(t),Et=a(x,", "),ke=r(x,"A",{href:!0});var To=i(ke);Lt=a(To,"TFGenerationMixin"),To.forEach(t),Pt=a(x," and "),ve=r(x,"A",{href:!0});var Mo=i(ve);It=a(Mo,"FlaxGenerationMixin"),Mo.forEach(t),Dt=a(x," respectively."),x.forEach(t),at=p(n),_=r(n,"P",{});var q=i(_);St=a(q,"The "),De=r(q,"CODE",{});var qo=i(De);Ct=a(qo,"GenerationMixin"),qo.forEach(t),Wt=a(q," classes are inherited by the corresponding base model classes, "),Se=r(q,"EM",{});var Go=i(Se);Ht=a(Go,"e.g."),Go.forEach(t),Bt=p(q),ye=r(q,"A",{href:!0});var Fo=i(ye);Ut=a(Fo,"PreTrainedModel"),Fo.forEach(t),Vt=a(q,", "),we=r(q,"A",{href:!0});var zo=i(we);Xt=a(zo,"TFPreTrainedModel"),zo.forEach(t),Rt=a(q,", and "),je=r(q,"A",{href:!0});var Ao=i(je);Jt=a(Ao,"FlaxPreTrainedModel"),Ao.forEach(t),Zt=a(q,` respectively, therefore exposing all
methods for auto-regressive text generation to every model class.`),q.forEach(t),st=p(n),L=r(n,"H2",{class:!0});var ut=i(L);C=r(ut,"A",{id:!0,class:!0,href:!0});var $o=i(C);Ce=r($o,"SPAN",{});var No=i(Ce);v(V.$$.fragment,No),No.forEach(t),$o.forEach(t),Kt=p(ut),We=r(ut,"SPAN",{});var Oo=i(We);Qt=a(Oo,"GenerationMixn"),Oo.forEach(t),ut.forEach(t),rt=p(n),A=r(n,"DIV",{class:!0});var Ae=i(A);v(X.$$.fragment,Ae),Yt=p(Ae),R=r(Ae,"P",{});var gt=i(R);en=a(gt,"A class containing all of the functions supporting generation, to be used as a mixin in "),Te=r(gt,"A",{href:!0});var Eo=i(Te);tn=a(Eo,"PreTrainedModel"),Eo.forEach(t),nn=a(gt,"."),gt.forEach(t),on=p(Ae),h=r(Ae,"DIV",{class:!0});var G=i(h);v(J.$$.fragment,G),an=p(G),He=r(G,"P",{});var Lo=i(He);sn=a(Lo,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
multinomial sampling, beam-search decoding, and beam-search multinomial sampling.`),Lo.forEach(t),rn=p(G),P=r(G,"P",{});var $e=i(P);ln=a($e,"Apart from "),Be=r($e,"CODE",{});var Po=i(Be);dn=a(Po,"inputs"),Po.forEach(t),pn=a($e,`, all the arguments below will default to the value of the attribute of the same name inside
the `),Me=r($e,"A",{href:!0});var Io=i(Me);cn=a(Io,"PretrainedConfig"),Io.forEach(t),mn=a($e," of the model. The default values indicated are the default values of those config."),$e.forEach(t),un=p(G),Z=r(G,"P",{});var _t=i(Z);gn=a(_t,"Most of these parameters are explained in more detail in "),K=r(_t,"A",{href:!0,rel:!0});var Do=i(K);_n=a(Do,`this blog
post`),Do.forEach(t),hn=a(_t,"."),_t.forEach(t),fn=p(G),Ue=r(G,"P",{});var So=i(Ue);xn=a(So,"Examples:"),So.forEach(t),bn=p(G),v(Q.$$.fragment,G),G.forEach(t),Ae.forEach(t),it=p(n),I=r(n,"H2",{class:!0});var ht=i(I);W=r(ht,"A",{id:!0,class:!0,href:!0});var Co=i(W);Ve=r(Co,"SPAN",{});var Wo=i(Ve);v(Y.$$.fragment,Wo),Wo.forEach(t),Co.forEach(t),kn=p(ht),Xe=r(ht,"SPAN",{});var Ho=i(Xe);vn=a(Ho,"TFGenerationMixn"),Ho.forEach(t),ht.forEach(t),lt=p(n),$=r(n,"DIV",{class:!0});var Ne=i($);v(ee.$$.fragment,Ne),yn=p(Ne),te=r(Ne,"P",{});var ft=i(te);wn=a(ft,"A class containing all of the functions supporting generation, to be used as a mixin in "),qe=r(ft,"A",{href:!0});var Bo=i(qe);jn=a(Bo,"TFPreTrainedModel"),Bo.forEach(t),Tn=a(ft,"."),ft.forEach(t),Mn=p(Ne),u=r(Ne,"DIV",{class:!0});var b=i(u);v(ne.$$.fragment,b),qn=p(b),Re=r(b,"P",{});var Uo=i(Re);Gn=a(Uo,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),Uo.forEach(t),Fn=p(b),oe=r(b,"P",{});var xt=i(oe);zn=a(xt,"Adapted in part from "),ae=r(xt,"A",{href:!0,rel:!0});var Vo=i(ae);An=a(Vo,`Facebook\u2019s XLM beam search
code`),Vo.forEach(t),$n=a(xt,"."),xt.forEach(t),Nn=p(b),N=r(b,"P",{});var B=i(N);On=a(B,"Apart from "),Je=r(B,"CODE",{});var Xo=i(Je);En=a(Xo,"input_ids"),Xo.forEach(t),Ln=a(B," and "),Ze=r(B,"CODE",{});var Ro=i(Ze);Pn=a(Ro,"attention_mask"),Ro.forEach(t),In=a(B,`, all the arguments below will default to the value of the attribute
of the same name inside the `),Ge=r(B,"A",{href:!0});var Jo=i(Ge);Dn=a(Jo,"PretrainedConfig"),Jo.forEach(t),Sn=a(B,` of the model. The default values indicated are the default
values of those config.`),B.forEach(t),Cn=p(b),se=r(b,"P",{});var bt=i(se);Wn=a(bt,"Most of these parameters are explained in more detail in "),re=r(bt,"A",{href:!0,rel:!0});var Zo=i(re);Hn=a(Zo,`this blog
post`),Zo.forEach(t),Bn=a(bt,"."),bt.forEach(t),Un=p(b),Ke=r(b,"P",{});var Ko=i(Ke);Vn=a(Ko,"Examples:"),Ko.forEach(t),Xn=p(b),v(ie.$$.fragment,b),b.forEach(t),Ne.forEach(t),dt=p(n),D=r(n,"H2",{class:!0});var kt=i(D);H=r(kt,"A",{id:!0,class:!0,href:!0});var Qo=i(H);Qe=r(Qo,"SPAN",{});var Yo=i(Qe);v(le.$$.fragment,Yo),Yo.forEach(t),Qo.forEach(t),Rn=p(kt),Ye=r(kt,"SPAN",{});var ea=i(Ye);Jn=a(ea,"FlaxGenerationMixn"),ea.forEach(t),kt.forEach(t),pt=p(n),O=r(n,"DIV",{class:!0});var Oe=i(O);v(de.$$.fragment,Oe),Zn=p(Oe),pe=r(Oe,"P",{});var vt=i(pe);Kn=a(vt,"A class containing all of the functions supporting generation, to be used as a mixin in "),Fe=r(vt,"A",{href:!0});var ta=i(Fe);Qn=a(ta,"FlaxPreTrainedModel"),ta.forEach(t),Yn=a(vt,"."),vt.forEach(t),eo=p(Oe),f=r(Oe,"DIV",{class:!0});var F=i(f);v(ce.$$.fragment,F),to=p(F),et=r(F,"P",{});var na=i(et);no=a(na,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
and, multinomial sampling.`),na.forEach(t),oo=p(F),S=r(F,"P",{});var Ee=i(S);ao=a(Ee,"Apart from "),tt=r(Ee,"CODE",{});var oa=i(tt);so=a(oa,"input_ids"),oa.forEach(t),ro=a(Ee,`, all the arguments below will default to the value of the attribute of the same name
inside the `),ze=r(Ee,"A",{href:!0});var aa=i(ze);io=a(aa,"PretrainedConfig"),aa.forEach(t),lo=a(Ee,` of the model. The default values indicated are the default values of those
config.`),Ee.forEach(t),po=p(F),me=r(F,"P",{});var yt=i(me);co=a(yt,"Most of these parameters are explained in more detail in "),ue=r(yt,"A",{href:!0,rel:!0});var sa=i(ue);mo=a(sa,`this blog
post`),sa.forEach(t),uo=a(yt,"."),yt.forEach(t),go=p(F),nt=r(F,"P",{});var ra=i(nt);_o=a(ra,"Examples:"),ra.forEach(t),ho=p(F),v(ge.$$.fragment,F),F.forEach(t),Oe.forEach(t),this.h()},h(){l(E,"name","hf:doc:metadata"),l(E,"content",JSON.stringify(ua)),l(z,"id","generation"),l(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(z,"href","#generation"),l(M,"class","relative group"),l(he,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),l(fe,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin.generate"),l(xe,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),l(be,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin"),l(ke,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin"),l(ve,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin"),l(ye,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.PreTrainedModel"),l(we,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.TFPreTrainedModel"),l(je,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(C,"id","transformers.generation_utils.GenerationMixin"),l(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(C,"href","#transformers.generation_utils.GenerationMixin"),l(L,"class","relative group"),l(Te,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.PreTrainedModel"),l(Me,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),l(K,"href","https://huggingface.co/blog/how-to-generate"),l(K,"rel","nofollow"),l(h,"class","docstring"),l(A,"class","docstring"),l(W,"id","transformers.generation_tf_utils.TFGenerationMixin"),l(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(W,"href","#transformers.generation_tf_utils.TFGenerationMixin"),l(I,"class","relative group"),l(qe,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.TFPreTrainedModel"),l(ae,"href","https://github.com/facebookresearch/XLM/blob/9e6f6814d17be4fe5b15f2e6c43eb2b2d76daeb4/src/model/transformer.py#L529"),l(ae,"rel","nofollow"),l(Ge,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),l(re,"href","https://huggingface.co/blog/how-to-generate"),l(re,"rel","nofollow"),l(u,"class","docstring"),l($,"class","docstring"),l(H,"id","transformers.generation_flax_utils.FlaxGenerationMixin"),l(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(H,"href","#transformers.generation_flax_utils.FlaxGenerationMixin"),l(D,"class","relative group"),l(Fe,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.FlaxPreTrainedModel"),l(ze,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),l(ue,"href","https://huggingface.co/blog/how-to-generate"),l(ue,"rel","nofollow"),l(f,"class","docstring"),l(O,"class","docstring")},m(n,c){e(document.head,E),g(n,_e,c),g(n,M,c),e(M,z),e(z,Pe),y(U,Pe,null),e(M,Tt),e(M,Ie),e(Ie,Mt),g(n,ot,c),g(n,m,c),e(m,qt),e(m,he),e(he,Gt),e(m,Ft),e(m,fe),e(fe,zt),e(m,At),e(m,xe),e(xe,$t),e(m,Nt),e(m,be),e(be,Ot),e(m,Et),e(m,ke),e(ke,Lt),e(m,Pt),e(m,ve),e(ve,It),e(m,Dt),g(n,at,c),g(n,_,c),e(_,St),e(_,De),e(De,Ct),e(_,Wt),e(_,Se),e(Se,Ht),e(_,Bt),e(_,ye),e(ye,Ut),e(_,Vt),e(_,we),e(we,Xt),e(_,Rt),e(_,je),e(je,Jt),e(_,Zt),g(n,st,c),g(n,L,c),e(L,C),e(C,Ce),y(V,Ce,null),e(L,Kt),e(L,We),e(We,Qt),g(n,rt,c),g(n,A,c),y(X,A,null),e(A,Yt),e(A,R),e(R,en),e(R,Te),e(Te,tn),e(R,nn),e(A,on),e(A,h),y(J,h,null),e(h,an),e(h,He),e(He,sn),e(h,rn),e(h,P),e(P,ln),e(P,Be),e(Be,dn),e(P,pn),e(P,Me),e(Me,cn),e(P,mn),e(h,un),e(h,Z),e(Z,gn),e(Z,K),e(K,_n),e(Z,hn),e(h,fn),e(h,Ue),e(Ue,xn),e(h,bn),y(Q,h,null),g(n,it,c),g(n,I,c),e(I,W),e(W,Ve),y(Y,Ve,null),e(I,kn),e(I,Xe),e(Xe,vn),g(n,lt,c),g(n,$,c),y(ee,$,null),e($,yn),e($,te),e(te,wn),e(te,qe),e(qe,jn),e(te,Tn),e($,Mn),e($,u),y(ne,u,null),e(u,qn),e(u,Re),e(Re,Gn),e(u,Fn),e(u,oe),e(oe,zn),e(oe,ae),e(ae,An),e(oe,$n),e(u,Nn),e(u,N),e(N,On),e(N,Je),e(Je,En),e(N,Ln),e(N,Ze),e(Ze,Pn),e(N,In),e(N,Ge),e(Ge,Dn),e(N,Sn),e(u,Cn),e(u,se),e(se,Wn),e(se,re),e(re,Hn),e(se,Bn),e(u,Un),e(u,Ke),e(Ke,Vn),e(u,Xn),y(ie,u,null),g(n,dt,c),g(n,D,c),e(D,H),e(H,Qe),y(le,Qe,null),e(D,Rn),e(D,Ye),e(Ye,Jn),g(n,pt,c),g(n,O,c),y(de,O,null),e(O,Zn),e(O,pe),e(pe,Kn),e(pe,Fe),e(Fe,Qn),e(pe,Yn),e(O,eo),e(O,f),y(ce,f,null),e(f,to),e(f,et),e(et,no),e(f,oo),e(f,S),e(S,ao),e(S,tt),e(tt,so),e(S,ro),e(S,ze),e(ze,io),e(S,lo),e(f,po),e(f,me),e(me,co),e(me,ue),e(ue,mo),e(me,uo),e(f,go),e(f,nt),e(nt,_o),e(f,ho),y(ge,f,null),ct=!0},p:ca,i(n){ct||(w(U.$$.fragment,n),w(V.$$.fragment,n),w(X.$$.fragment,n),w(J.$$.fragment,n),w(Q.$$.fragment,n),w(Y.$$.fragment,n),w(ee.$$.fragment,n),w(ne.$$.fragment,n),w(ie.$$.fragment,n),w(le.$$.fragment,n),w(de.$$.fragment,n),w(ce.$$.fragment,n),w(ge.$$.fragment,n),ct=!0)},o(n){j(U.$$.fragment,n),j(V.$$.fragment,n),j(X.$$.fragment,n),j(J.$$.fragment,n),j(Q.$$.fragment,n),j(Y.$$.fragment,n),j(ee.$$.fragment,n),j(ne.$$.fragment,n),j(ie.$$.fragment,n),j(le.$$.fragment,n),j(de.$$.fragment,n),j(ce.$$.fragment,n),j(ge.$$.fragment,n),ct=!1},d(n){t(E),n&&t(_e),n&&t(M),T(U),n&&t(ot),n&&t(m),n&&t(at),n&&t(_),n&&t(st),n&&t(L),T(V),n&&t(rt),n&&t(A),T(X),T(J),T(Q),n&&t(it),n&&t(I),T(Y),n&&t(lt),n&&t($),T(ee),T(ne),T(ie),n&&t(dt),n&&t(D),T(le),n&&t(pt),n&&t(O),T(de),T(ce),T(ge)}}}const ua={local:"generation",sections:[{local:"transformers.generation_utils.GenerationMixin",title:"GenerationMixn"},{local:"transformers.generation_tf_utils.TFGenerationMixin",title:"TFGenerationMixn"},{local:"transformers.generation_flax_utils.FlaxGenerationMixin",title:"FlaxGenerationMixn"}],title:"Generation"};function ga(jt,E,_e){let{fw:M}=E;return jt.$$set=z=>{"fw"in z&&_e(0,M=z.fw)},[M]}class ka extends ia{constructor(E){super();la(this,E,ga,ma,da,{fw:0})}}export{ka as default,ua as metadata};
