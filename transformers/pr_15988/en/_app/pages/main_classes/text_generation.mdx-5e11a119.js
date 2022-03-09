import{S as Id,i as Hd,s as Rd,e as s,k as l,w as g,t,M as Ud,c as a,d as o,m as d,a as r,x as u,h as n,b as c,F as e,g as M,y as _,L as Vd,q as h,o as f,B as b}from"../../chunks/vendor-4833417e.js";import{D as X}from"../../chunks/Docstring-4f315ed9.js";import{C as ne}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as To}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Kd(qo){let oe,ht,E,J,Ut,Ee,Go,Vt,Oo,ao,y,Eo,ft,So,Fo,bt,$o,Ao,kt,zo,Po,xt,No,Do,vt,Co,Bo,yt,Wo,Io,ro,L,Ho,Kt,Ro,Uo,Zt,Vo,Ko,jt,Zo,Xo,Mt,Jo,Qo,Lt,Yo,es,io,re,xe,Xt,Se,ts,Jt,ns,lo,m,Fe,os,$e,ss,wt,as,rs,is,Ae,ls,Tt,ds,cs,ps,G,S,Qt,ms,gs,qt,us,_s,Yt,hs,fs,en,bs,ks,xs,F,tn,vs,ys,Gt,js,Ms,nn,Ls,ws,on,Ts,qs,Gs,$,sn,Os,Es,Ot,Ss,Fs,an,$s,As,rn,zs,Ps,Ns,A,ln,Ds,Cs,Et,Bs,Ws,dn,Is,Hs,cn,Rs,Us,Vs,z,pn,Ks,Zs,St,Xs,Js,mn,Qs,Ys,gn,ea,ta,na,p,ze,oa,un,sa,aa,O,P,_n,ra,ia,Ft,la,da,hn,ca,pa,fn,ma,ga,ua,N,bn,_a,ha,$t,fa,ba,kn,ka,xa,xn,va,ya,ja,D,vn,Ma,La,At,wa,Ta,yn,qa,Ga,jn,Oa,Ea,Sa,C,Mn,Fa,$a,zt,Aa,za,Ln,Pa,Na,wn,Da,Ca,Ba,B,Tn,Wa,Ia,Pt,Ha,Ra,qn,Ua,Va,Gn,Ka,Za,Xa,Q,Ja,On,Qa,Ya,En,er,tr,Nt,nr,or,sr,Pe,ar,Ne,rr,ir,lr,Sn,dr,cr,Fn,pr,mr,De,gr,$n,ur,_r,Ce,hr,An,fr,br,Be,kr,W,We,xr,zn,vr,yr,Pn,jr,Mr,Ie,Lr,I,He,wr,Nn,Tr,qr,Dn,Gr,Or,Re,Er,H,Ue,Sr,Cn,Fr,$r,Bn,Ar,zr,Ve,Pr,R,Ke,Nr,Wn,Dr,Cr,In,Br,Wr,Ze,Ir,U,Xe,Hr,Hn,Rr,Ur,Rn,Vr,Kr,Je,Zr,V,Qe,Xr,Un,Jr,Qr,Vn,Yr,ei,Ye,co,ie,ve,Kn,et,ti,Zn,ni,po,Y,tt,oi,nt,si,Dt,ai,ri,ii,j,ot,li,Xn,di,ci,st,pi,at,mi,gi,ui,ee,_i,Jn,hi,fi,Qn,bi,ki,Ct,xi,vi,yi,rt,ji,it,Mi,Li,wi,Yn,Ti,qi,lt,mo,le,ye,eo,dt,Gi,to,Oi,go,te,ct,Ei,pt,Si,Bt,Fi,$i,Ai,w,mt,zi,no,Pi,Ni,de,Di,oo,Ci,Bi,Wt,Wi,Ii,Hi,gt,Ri,ut,Ui,Vi,Ki,so,Zi,Xi,_t,uo;return Ee=new To({}),Se=new To({}),Fe=new X({props:{name:"class transformers.generation_utils.GenerationMixin",anchor:"transformers.generation_utils.GenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L378"}}),ze=new X({props:{name:"generate",anchor:"transformers.generation_utils.GenerationMixin.generate",parameters:[{name:"inputs",val:": typing.Optional[torch.Tensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"typical_p",val:": typing.Optional[float] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.Iterable[int]] = None"},{name:"force_words_ids",val:": typing.Union[typing.Iterable[int], typing.Iterable[typing.Iterable[int]], NoneType] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"max_time",val:": typing.Optional[float] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Union[typing.Callable[[int, torch.Tensor], typing.List[int]], NoneType] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = []"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = []"},{name:"constraints",val:": typing.Optional[typing.List[transformers.generation_beam_constraints.Constraint]] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L813",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.generate.inputs",description:`<strong>inputs</strong> (<code>torch.Tensor</code> of varying shape depending on the modality, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation or as model inputs to the encoder. If <code>None</code> the
method initializes it with <code>bos_token_id</code> and a batch size of 1. For decoder-only models <code>inputs</code>
should of in the format of <code>input_ids</code>. For encoder-decoder models <em>inputs</em> can represent any of
<code>input_ids</code>, <code>input_values</code>, <code>input_features</code>, or <code>pixel_values</code>.`,name:"inputs"},{anchor:"transformers.generation_utils.GenerationMixin.generate.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.max_length</code>) &#x2014;
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
`}}),De=new ne({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM,

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

prompt = "Today I believe we can finally"
input_ids = tokenizer(prompt, return_tensors="pt").input_ids

# generate up to 30 tokens
outputs = model.generate(input_ids, do_sample=False, max_length=30)
tokenizer.batch_decode(outputs, skip_special_tokens=True))
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM,

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Today I believe we can finally&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generate up to 30 tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids, do_sample=<span class="hljs-literal">False</span>, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))
`}}),Ce=new ne({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM,
import torch

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

prompt = "Today I believe we can finally"
input_ids = tokenizer(prompt, return_tensors="pt").input_ids

torch.manual_seed(0)
outputs = model.generate(input_ids)
tokenizer.batch_decode(outputs, skip_special_tokens=True))
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM,
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Today I believe we can finally&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))
`}}),Be=new ne({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

tokenizer = AutoTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = AutoModelForCausalLM.from_pretrained("Helsinki-NLP/opus-mt-en-de")

sentence = "Paris is one of the densest populated areas in Europe."
input_ids = tokenizer(sentence, return_tensors="pt").input_ids

outputs = model.generate(input_ids)
tokenizer.batch_decode(outputs, skip_special_tokens=True))
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sentence = <span class="hljs-string">&quot;Paris is one of the densest populated areas in Europe.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))
`}}),We=new X({props:{name:"greedy_search",anchor:"transformers.generation_utils.GenerationMixin.greedy_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L1445",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15988/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific keyword arguments will be forwarded to the <code>forward</code> function of the model.
If model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],returnDescription:`
<p><a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a>, <a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a>
A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),Ie=new ne({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
)

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

# set pad_token_id to eos_token_id because GPT2 does not have a EOS token
model.config.pad_token_id = model.config.eos_token_id

input_prompt = "Today is a beautiful day, and"
input_ids = tokenizer(input_prompt, return_tensors="pt").input_ids

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [
        MinLengthLogitsProcessor(15, eos_token_id=model.config.eos_token_id),
    ]
)

outputs = model.greedy_search(input_ids, logits_processor=logits_processor)

print("Generated:", tokenizer.batch_decode(outputs, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForCausalLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set pad_token_id to eos_token_id because GPT2 does not have a EOS token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>input_prompt = <span class="hljs-string">&quot;Today is a beautiful day, and&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">15</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.greedy_search(input_ids, logits_processor=logits_processor)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),He=new X({props:{name:"sample",anchor:"transformers.generation_utils.GenerationMixin.sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L1670",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.sample.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.sample.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.sample.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
to warp the prediction score distribution of the language modeling head applied before multinomial
sampling at each generation step.`,name:"logits_warper"},{anchor:"transformers.generation_utils.GenerationMixin.sample.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.sample.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.sample.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.sample.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.sample.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.sample.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.sample.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15988/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.sample.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],returnDescription:`
<p><a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a>, <a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a> or
A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),Re=new ne({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    TopKLogitsWarper,
    TemperatureLogitsWarper,
)

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

# set pad_token_id to eos_token_id because GPT2 does not have a EOS token
model.config.pad_token_id = model.config.eos_token_id

input_prompt = "Today is a beautiful day, and"
input_ids = tokenizer(input_prompt, return_tensors="pt").input_ids

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [
        MinLengthLogitsProcessor(15, eos_token_id=model.config.eos_token_id),
    ]
)
# instantiate logits processors
logits_warper = LogitsProcessorList(
    [
        TopKLogitsWarper(50),
        TemperatureLogitsWarper(0.7),
    ]
)

outputs = model.sample(input_ids, logits_processor=logits_processor, logits_warper=logits_warper)

print("Generated:", tokenizer.batch_decode(outputs, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForCausalLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    TopKLogitsWarper,
<span class="hljs-meta">... </span>    TemperatureLogitsWarper,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set pad_token_id to eos_token_id because GPT2 does not have a EOS token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>input_prompt = <span class="hljs-string">&quot;Today is a beautiful day, and&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">15</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_warper = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        TopKLogitsWarper(<span class="hljs-number">50</span>),
<span class="hljs-meta">... </span>        TemperatureLogitsWarper(<span class="hljs-number">0.7</span>),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.sample(input_ids, logits_processor=logits_processor, logits_warper=logits_warper)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),Ue=new X({props:{name:"beam_search",anchor:"transformers.generation_utils.GenerationMixin.beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L1913",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
An derived instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15988/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],returnDescription:`
<p><code>generation_utilsBeamSearchDecoderOnlyOutput</code>, <a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),Ve=new ne({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForSeq2SeqLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    BeamSearchScorer,
)
import torch

tokenizer = AutoTokenizer.from_pretrained("t5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")

encoder_input_str = "translate English to German: How old are you?"
encoder_input_ids = tokenizer(encoder_input_str, return_tensors="pt").input_ids


# lets run beam search using 3 beams
num_beams = 3
# define decoder start token ids
input_ids = torch.ones((num_beams, 1), device=model.device, dtype=torch.long)
input_ids = input_ids * model.config.decoder_start_token_id

# add encoder_outputs to model keyword arguments
model_kwargs = {
    "encoder_outputs": model.get_encoder()(
        encoder_input_ids.repeat_interleave(num_beams, dim=0), return_dict=True
    )
}

# instantiate beam scorer
beam_scorer = BeamSearchScorer(
    batch_size=1,
    num_beams=num_beams,
    device=model.device,
)

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [
        MinLengthLogitsProcessor(5, eos_token_id=model.config.eos_token_id),
    ]
)

outputs = model.beam_search(input_ids, beam_scorer, logits_processor=logits_processor, **model_kwargs)

print("Generated:", tokenizer.batch_decode(outputs, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForSeq2SeqLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    BeamSearchScorer,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_str = <span class="hljs-string">&quot;translate English to German: How old are you?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_ids = tokenizer(encoder_input_str, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lets run beam search using 3 beams</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_beams = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define decoder start token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.ones((num_beams, <span class="hljs-number">1</span>), device=model.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_ids * model.config.decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add encoder_outputs to model keyword arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_kwargs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;encoder_outputs&quot;</span>: model.get_encoder()(
<span class="hljs-meta">... </span>        encoder_input_ids.repeat_interleave(num_beams, dim=<span class="hljs-number">0</span>), return_dict=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate beam scorer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>beam_scorer = BeamSearchScorer(
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    num_beams=num_beams,
<span class="hljs-meta">... </span>    device=model.device,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">5</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.beam_search(input_ids, beam_scorer, logits_processor=logits_processor, **model_kwargs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),Ke=new X({props:{name:"beam_sample",anchor:"transformers.generation_utils.GenerationMixin.beam_sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L2223",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
A derived instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
to warp the prediction score distribution of the language modeling head applied before multinomial
sampling at each generation step.`,name:"logits_warper"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15988/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],returnDescription:`
<p><a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a>, <a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a> or
A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),Ze=new ne({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForSeq2SeqLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    TopKLogitsWarper,
    TemperatureLogitsWarper,
    BeamSearchScorer,
)
import torch

tokenizer = AutoTokenizer.from_pretrained("t5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")

encoder_input_str = "translate English to German: How old are you?"
encoder_input_ids = tokenizer(encoder_input_str, return_tensors="pt").input_ids

# lets run beam search using 3 beams
num_beams = 3
# define decoder start token ids
input_ids = torch.ones((num_beams, 1), device=model.device, dtype=torch.long)
input_ids = input_ids * model.config.decoder_start_token_id

# add encoder_outputs to model keyword arguments
model_kwargs = {
    "encoder_outputs": model.get_encoder()(
        encoder_input_ids.repeat_interleave(num_beams, dim=0), return_dict=True
    )
}

# instantiate beam scorer
beam_scorer = BeamSearchScorer(
    batch_size=1,
    max_length=model.config.max_length,
    num_beams=num_beams,
    device=model.device,
)

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [MinLengthLogitsProcessor(5, eos_token_id=model.config.eos_token_id)]
)
# instantiate logits processors
logits_warper = LogitsProcessorList(
    [
        TopKLogitsWarper(50),
        TemperatureLogitsWarper(0.7),
    ]
)

outputs = model.beam_sample(
    input_ids, beam_scorer, logits_processor=logits_processor, logits_warper=logits_warper, **model_kwargs
)

print("Generated:", tokenizer.batch_decode(outputs, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForSeq2SeqLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    TopKLogitsWarper,
<span class="hljs-meta">... </span>    TemperatureLogitsWarper,
<span class="hljs-meta">... </span>    BeamSearchScorer,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_str = <span class="hljs-string">&quot;translate English to German: How old are you?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_ids = tokenizer(encoder_input_str, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lets run beam search using 3 beams</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_beams = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define decoder start token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.ones((num_beams, <span class="hljs-number">1</span>), device=model.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_ids * model.config.decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add encoder_outputs to model keyword arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_kwargs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;encoder_outputs&quot;</span>: model.get_encoder()(
<span class="hljs-meta">... </span>        encoder_input_ids.repeat_interleave(num_beams, dim=<span class="hljs-number">0</span>), return_dict=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate beam scorer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>beam_scorer = BeamSearchScorer(
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    max_length=model.config.max_length,
<span class="hljs-meta">... </span>    num_beams=num_beams,
<span class="hljs-meta">... </span>    device=model.device,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [MinLengthLogitsProcessor(<span class="hljs-number">5</span>, eos_token_id=model.config.eos_token_id)]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_warper = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        TopKLogitsWarper(<span class="hljs-number">50</span>),
<span class="hljs-meta">... </span>        TemperatureLogitsWarper(<span class="hljs-number">0.7</span>),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.beam_sample(
<span class="hljs-meta">... </span>    input_ids, beam_scorer, logits_processor=logits_processor, logits_warper=logits_warper, **model_kwargs
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),Xe=new X({props:{name:"group_beam_search",anchor:"transformers.generation_utils.GenerationMixin.group_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L2543",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
An derived instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15988/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)</p>
<p>model_kwargs &#x2014;
Additional model specific kwargs that will be forwarded to the <code>forward</code> function of the model. If
model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],returnDescription:`
<p><a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a>, <a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if
<code>model.config.is_encoder_decoder=False</code> and <code>return_dict_in_generate=True</code> or a
<a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if <code>model.config.is_encoder_decoder=True</code>.</p>
`}}),Je=new ne({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForSeq2SeqLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    HammingDiversityLogitsProcessor,
    BeamSearchScorer,
)
import torch

tokenizer = AutoTokenizer.from_pretrained("t5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")

encoder_input_str = "translate English to German: How old are you?"
encoder_input_ids = tokenizer(encoder_input_str, return_tensors="pt").input_ids


# lets run diverse beam search using 6 beams
num_beams = 6
# define decoder start token ids
input_ids = torch.ones((num_beams, 1), device=model.device, dtype=torch.long)
input_ids = input_ids * model.config.decoder_start_token_id

# add encoder_outputs to model keyword arguments
model_kwargs = {
    "encoder_outputs": model.get_encoder()(
        encoder_input_ids.repeat_interleave(num_beams, dim=0), return_dict=True
    )
}

# instantiate beam scorer
beam_scorer = BeamSearchScorer(
    batch_size=1,
    max_length=model.config.max_length,
    num_beams=num_beams,
    device=model.device,
    num_beam_groups=3,
)

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [
        HammingDiversityLogitsProcessor(5.5, num_beams=6, num_beam_groups=3),
        MinLengthLogitsProcessor(5, eos_token_id=model.config.eos_token_id),
    ]
)

outputs = model.group_beam_search(
    input_ids, beam_scorer, logits_processor=logits_processor, **model_kwargs
)

print("Generated:", tokenizer.batch_decode(outputs, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForSeq2SeqLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    HammingDiversityLogitsProcessor,
<span class="hljs-meta">... </span>    BeamSearchScorer,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_str = <span class="hljs-string">&quot;translate English to German: How old are you?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_ids = tokenizer(encoder_input_str, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lets run diverse beam search using 6 beams</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_beams = <span class="hljs-number">6</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define decoder start token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.ones((num_beams, <span class="hljs-number">1</span>), device=model.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_ids * model.config.decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add encoder_outputs to model keyword arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_kwargs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;encoder_outputs&quot;</span>: model.get_encoder()(
<span class="hljs-meta">... </span>        encoder_input_ids.repeat_interleave(num_beams, dim=<span class="hljs-number">0</span>), return_dict=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate beam scorer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>beam_scorer = BeamSearchScorer(
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    max_length=model.config.max_length,
<span class="hljs-meta">... </span>    num_beams=num_beams,
<span class="hljs-meta">... </span>    device=model.device,
<span class="hljs-meta">... </span>    num_beam_groups=<span class="hljs-number">3</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        HammingDiversityLogitsProcessor(<span class="hljs-number">5.5</span>, num_beams=<span class="hljs-number">6</span>, num_beam_groups=<span class="hljs-number">3</span>),
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">5</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.group_beam_search(
<span class="hljs-meta">... </span>    input_ids, beam_scorer, logits_processor=logits_processor, **model_kwargs
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),Qe=new X({props:{name:"constrained_beam_search",anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"constrained_beam_scorer",val:": ConstrainedBeamSearchScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L2906",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.constrained_beam_scorer",description:`<strong>constrained_beam_scorer</strong> (<code>ConstrainedBeamSearchScorer</code>) &#x2014;
A derived instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation, while satisfying a list of positive constraints. For more information, the
documentation of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.ConstrainedBeamSearchScorer">ConstrainedBeamSearchScorer</a> should be read.`,name:"constrained_beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
to warp the prediction score distribution of the language modeling head applied before multinomial
sampling at each generation step.`,name:"logits_warper"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/pr_15988/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],returnDescription:`
<p><code>generation_utilsBeamSearchDecoderOnlyOutput</code>, <a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_15988/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),Ye=new ne({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForSeq2SeqLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    ConstrainedBeamSearchScorer,
    PhrasalConstraint,
)
import torch

tokenizer = AutoTokenizer.from_pretrained("t5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("t5-base")

encoder_input_str = "translate English to German: How old are you?"
encoder_input_ids = tokenizer(encoder_input_str, return_tensors="pt").input_ids


# lets run beam search using 3 beams
num_beams = 3
# define decoder start token ids
input_ids = torch.ones((num_beams, 1), device=model.device, dtype=torch.long)
input_ids = input_ids * model.config.decoder_start_token_id

# add encoder_outputs to model keyword arguments
model_kwargs = {
    "encoder_outputs": model.get_encoder()(
        encoder_input_ids.repeat_interleave(num_beams, dim=0), return_dict=True
    )
}

constraint_str = "sind"
constraint_token_ids = tokenizer.encode(constraint_str)[:-1]  # slice to remove eos token
constraints = [PhrasalConstraint(token_ids=constraint_token_ids)]


# instantiate beam scorer
beam_scorer = ConstrainedBeamSearchScorer(
    batch_size=1, num_beams=num_beams, device=model.device, constraints=constraints
)

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [
        MinLengthLogitsProcessor(5, eos_token_id=model.config.eos_token_id),
    ]
)

outputs = model.constrained_beam_search(
    input_ids, beam_scorer, constraints=constraints, logits_processor=logits_processor, **model_kwargs
)

print("Generated:", tokenizer.batch_decode(outputs, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForSeq2SeqLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    ConstrainedBeamSearchScorer,
<span class="hljs-meta">... </span>    PhrasalConstraint,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_str = <span class="hljs-string">&quot;translate English to German: How old are you?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_ids = tokenizer(encoder_input_str, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lets run beam search using 3 beams</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_beams = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define decoder start token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.ones((num_beams, <span class="hljs-number">1</span>), device=model.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_ids * model.config.decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add encoder_outputs to model keyword arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_kwargs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;encoder_outputs&quot;</span>: model.get_encoder()(
<span class="hljs-meta">... </span>        encoder_input_ids.repeat_interleave(num_beams, dim=<span class="hljs-number">0</span>), return_dict=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>}

<span class="hljs-meta">&gt;&gt;&gt; </span>constraint_str = <span class="hljs-string">&quot;sind&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>constraint_token_ids = tokenizer.encode(constraint_str)[:-<span class="hljs-number">1</span>]  <span class="hljs-comment"># slice to remove eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>constraints = [PhrasalConstraint(token_ids=constraint_token_ids)]


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate beam scorer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>beam_scorer = ConstrainedBeamSearchScorer(
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">1</span>, num_beams=num_beams, device=model.device, constraints=constraints
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">5</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.constrained_beam_search(
<span class="hljs-meta">... </span>    input_ids, beam_scorer, constraints=constraints, logits_processor=logits_processor, **model_kwargs
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-comment"># =&gt; [&#x27;Wie alter sind Sie?&#x27;]</span>`}}),et=new To({}),tt=new X({props:{name:"class transformers.generation_tf_utils.TFGenerationMixin",anchor:"transformers.generation_tf_utils.TFGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_tf_utils.py#L342"}}),ot=new X({props:{name:"generate",anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate",parameters:[{name:"input_ids",val:" = None"},{name:"max_length",val:" = None"},{name:"min_length",val:" = None"},{name:"do_sample",val:" = None"},{name:"early_stopping",val:" = None"},{name:"num_beams",val:" = None"},{name:"temperature",val:" = None"},{name:"top_k",val:" = None"},{name:"top_p",val:" = None"},{name:"repetition_penalty",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"forced_bos_token_id",val:" = None"},{name:"forced_eos_token_id",val:" = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_tf_utils.py#L362",parametersDescription:[{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.input_ids",description:"<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, `(batch_size, sequence_length, &#x2014;",name:"input_ids"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.feature_dim)`",description:`<strong>feature_dim)\`</strong> or <code>(batch_size, num_channels, height, width)</code>, <em>optional</em>) &#x2014;
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
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"forced_eos_token_id"}]}}),lt=new ne({props:{code:`tokenizer = AutoTokenizer.from_pretrained("distilgpt2")  # Initialize tokenizer
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
)  <span class="hljs-comment"># generate sequences without allowing bad_words to be generated</span>`}}),dt=new To({}),ct=new X({props:{name:"class transformers.generation_flax_utils.FlaxGenerationMixin",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_flax_utils.py#L119"}}),mt=new X({props:{name:"generate",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate",parameters:[{name:"input_ids",val:": ndarray"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"prng_key",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"trace",val:": bool = True"},{name:"params",val:": typing.Union[typing.Dict[str, jax._src.numpy.lax_numpy.ndarray], NoneType] = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_flax_utils.py#L154",parametersDescription:[{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),_t=new ne({props:{code:`from transformers import AutoTokenizer, FlaxAutoModelForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){oe=s("meta"),ht=l(),E=s("h1"),J=s("a"),Ut=s("span"),g(Ee.$$.fragment),Go=l(),Vt=s("span"),Oo=t("Generation"),ao=l(),y=s("p"),Eo=t("The methods for auto-regressive text generation, namely "),ft=s("a"),So=t("generate()"),Fo=t(" (for the PyTorch models), "),bt=s("a"),$o=t("generate()"),Ao=t(" (for the TensorFlow models) and "),kt=s("a"),zo=t("generate()"),Po=t(" (for the Flax/JAX models), are implemented in "),xt=s("a"),No=t("GenerationMixin"),Do=t(", "),vt=s("a"),Co=t("TFGenerationMixin"),Bo=t(" and "),yt=s("a"),Wo=t("FlaxGenerationMixin"),Io=t(" respectively."),ro=l(),L=s("p"),Ho=t("The "),Kt=s("code"),Ro=t("GenerationMixin"),Uo=t(" classes are inherited by the corresponding base model classes, "),Zt=s("em"),Vo=t("e.g."),Ko=l(),jt=s("a"),Zo=t("PreTrainedModel"),Xo=t(", "),Mt=s("a"),Jo=t("TFPreTrainedModel"),Qo=t(", and "),Lt=s("a"),Yo=t("FlaxPreTrainedModel"),es=t(` respectively, therefore exposing all
methods for auto-regressive text generation to every model class.`),io=l(),re=s("h2"),xe=s("a"),Xt=s("span"),g(Se.$$.fragment),ts=l(),Jt=s("span"),ns=t("GenerationMixn"),lo=l(),m=s("div"),g(Fe.$$.fragment),os=l(),$e=s("p"),ss=t("A class containing all functions for auto-regressive text generation, to be used as a mixin in "),wt=s("a"),as=t("PreTrainedModel"),rs=t("."),is=l(),Ae=s("p"),ls=t("The class exposes the "),Tt=s("a"),ds=t("generate()"),cs=t(", which can be used for:"),ps=l(),G=s("ul"),S=s("li"),Qt=s("em"),ms=t("greedy decoding"),gs=t(" by calling "),qt=s("a"),us=t("greedy_search()"),_s=t(" if "),Yt=s("code"),hs=t("num_beams=1"),fs=t(" and "),en=s("code"),bs=t("do_sample=False"),ks=t("."),xs=l(),F=s("li"),tn=s("em"),vs=t("multinomial sampling"),ys=t(" by calling "),Gt=s("a"),js=t("sample()"),Ms=t(" if "),nn=s("code"),Ls=t("num_beams=1"),ws=t(" and "),on=s("code"),Ts=t("do_sample=True"),qs=t("."),Gs=l(),$=s("li"),sn=s("em"),Os=t("beam-search decoding"),Es=t(" by calling "),Ot=s("a"),Ss=t("beam_search()"),Fs=t(" if "),an=s("code"),$s=t("num_beams>1"),As=t(" and "),rn=s("code"),zs=t("do_sample=False"),Ps=t("."),Ns=l(),A=s("li"),ln=s("em"),Ds=t("beam-search multinomial sampling"),Cs=t(" by calling "),Et=s("a"),Bs=t("beam_sample()"),Ws=t(" if "),dn=s("code"),Is=t("num_beams>1"),Hs=t(" and "),cn=s("code"),Rs=t("do_sample=True"),Us=t("."),Vs=l(),z=s("li"),pn=s("em"),Ks=t("diverse beam-search decoding"),Zs=t(" by calling "),St=s("a"),Xs=t("group_beam_search()"),Js=t(", if "),mn=s("code"),Qs=t("num_beams>1"),Ys=t(" and "),gn=s("code"),ea=t("num_beam_groups>1"),ta=t("."),na=l(),p=s("div"),g(ze.$$.fragment),oa=l(),un=s("p"),sa=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),aa=l(),O=s("ul"),P=s("li"),_n=s("em"),ra=t("greedy decoding"),ia=t(" by calling "),Ft=s("a"),la=t("greedy_search()"),da=t(" if "),hn=s("code"),ca=t("num_beams=1"),pa=t(" and "),fn=s("code"),ma=t("do_sample=False"),ga=t("."),ua=l(),N=s("li"),bn=s("em"),_a=t("multinomial sampling"),ha=t(" by calling "),$t=s("a"),fa=t("sample()"),ba=t(" if "),kn=s("code"),ka=t("num_beams=1"),xa=t(" and "),xn=s("code"),va=t("do_sample=True"),ya=t("."),ja=l(),D=s("li"),vn=s("em"),Ma=t("beam-search decoding"),La=t(" by calling "),At=s("a"),wa=t("beam_search()"),Ta=t(" if "),yn=s("code"),qa=t("num_beams>1"),Ga=t(" and "),jn=s("code"),Oa=t("do_sample=False"),Ea=t("."),Sa=l(),C=s("li"),Mn=s("em"),Fa=t("beam-search multinomial sampling"),$a=t(" by calling "),zt=s("a"),Aa=t("beam_sample()"),za=t(" if "),Ln=s("code"),Pa=t("num_beams>1"),Na=t(" and "),wn=s("code"),Da=t("do_sample=True"),Ca=t("."),Ba=l(),B=s("li"),Tn=s("em"),Wa=t("diverse beam-search decoding"),Ia=t(" by calling "),Pt=s("a"),Ha=t("group_beam_search()"),Ra=t(", if "),qn=s("code"),Ua=t("num_beams>1"),Va=t(" and "),Gn=s("code"),Ka=t("num_beam_groups>1"),Za=t("."),Xa=l(),Q=s("p"),Ja=t("Apart from "),On=s("code"),Qa=t("inputs"),Ya=t(`, all the arguments below will default to the value of the attribute of the same name
as defined in the model\u2019s config (`),En=s("code"),er=t("config.json"),tr=t(") which in turn defaults to the "),Nt=s("a"),nr=t("PretrainedConfig"),or=t(" of the model."),sr=l(),Pe=s("p"),ar=t("Most of these parameters are explained in more detail in "),Ne=s("a"),rr=t("this blog post"),ir=t("."),lr=l(),Sn=s("p"),dr=t("Examples:"),cr=l(),Fn=s("p"),pr=t("Greedy Decoding:"),mr=l(),g(De.$$.fragment),gr=l(),$n=s("p"),ur=t("Multinomial Sampling:"),_r=l(),g(Ce.$$.fragment),hr=l(),An=s("p"),fr=t("Beam-search decoding:"),br=l(),g(Be.$$.fragment),kr=l(),W=s("div"),g(We.$$.fragment),xr=l(),zn=s("p"),vr=t("Generates sequences for models with a language modeling head using greedy decoding."),yr=l(),Pn=s("p"),jr=t("Examples:"),Mr=l(),g(Ie.$$.fragment),Lr=l(),I=s("div"),g(He.$$.fragment),wr=l(),Nn=s("p"),Tr=t("Generates sequences for models with a language modeling head using multinomial sampling."),qr=l(),Dn=s("p"),Gr=t("Examples:"),Or=l(),g(Re.$$.fragment),Er=l(),H=s("div"),g(Ue.$$.fragment),Sr=l(),Cn=s("p"),Fr=t("Generates sequences for models with a language modeling head using beam search decoding."),$r=l(),Bn=s("p"),Ar=t("Examples:"),zr=l(),g(Ve.$$.fragment),Pr=l(),R=s("div"),g(Ke.$$.fragment),Nr=l(),Wn=s("p"),Dr=t("Generates sequences for models with a language modeling head using beam search with multinomial sampling."),Cr=l(),In=s("p"),Br=t("Examples:"),Wr=l(),g(Ze.$$.fragment),Ir=l(),U=s("div"),g(Xe.$$.fragment),Hr=l(),Hn=s("p"),Rr=t("Generates sequences for models with a language modeling head using beam search decoding."),Ur=l(),Rn=s("p"),Vr=t("Examples:"),Kr=l(),g(Je.$$.fragment),Zr=l(),V=s("div"),g(Qe.$$.fragment),Xr=l(),Un=s("p"),Jr=t("Generates sequences for models with a language modeling head using beam search decoding."),Qr=l(),Vn=s("p"),Yr=t("Examples:"),ei=l(),g(Ye.$$.fragment),co=l(),ie=s("h2"),ve=s("a"),Kn=s("span"),g(et.$$.fragment),ti=l(),Zn=s("span"),ni=t("TFGenerationMixn"),po=l(),Y=s("div"),g(tt.$$.fragment),oi=l(),nt=s("p"),si=t("A class containing all of the functions supporting generation, to be used as a mixin in "),Dt=s("a"),ai=t("TFPreTrainedModel"),ri=t("."),ii=l(),j=s("div"),g(ot.$$.fragment),li=l(),Xn=s("p"),di=t(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),ci=l(),st=s("p"),pi=t("Adapted in part from "),at=s("a"),mi=t(`Facebook\u2019s XLM beam search
code`),gi=t("."),ui=l(),ee=s("p"),_i=t("Apart from "),Jn=s("code"),hi=t("input_ids"),fi=t(" and "),Qn=s("code"),bi=t("attention_mask"),ki=t(`, all the arguments below will default to the value of the attribute
of the same name inside the `),Ct=s("a"),xi=t("PretrainedConfig"),vi=t(` of the model. The default values indicated are the default
values of those config.`),yi=l(),rt=s("p"),ji=t("Most of these parameters are explained in more detail in "),it=s("a"),Mi=t(`this blog
post`),Li=t("."),wi=l(),Yn=s("p"),Ti=t("Examples:"),qi=l(),g(lt.$$.fragment),mo=l(),le=s("h2"),ye=s("a"),eo=s("span"),g(dt.$$.fragment),Gi=l(),to=s("span"),Oi=t("FlaxGenerationMixn"),go=l(),te=s("div"),g(ct.$$.fragment),Ei=l(),pt=s("p"),Si=t("A class containing all of the functions supporting generation, to be used as a mixin in "),Bt=s("a"),Fi=t("FlaxPreTrainedModel"),$i=t("."),Ai=l(),w=s("div"),g(mt.$$.fragment),zi=l(),no=s("p"),Pi=t(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
and, multinomial sampling.`),Ni=l(),de=s("p"),Di=t("Apart from "),oo=s("code"),Ci=t("input_ids"),Bi=t(`, all the arguments below will default to the value of the attribute of the same name
inside the `),Wt=s("a"),Wi=t("PretrainedConfig"),Ii=t(` of the model. The default values indicated are the default values of those
config.`),Hi=l(),gt=s("p"),Ri=t("Most of these parameters are explained in more detail in "),ut=s("a"),Ui=t(`this blog
post`),Vi=t("."),Ki=l(),so=s("p"),Zi=t("Examples:"),Xi=l(),g(_t.$$.fragment),this.h()},l(i){const v=Ud('[data-svelte="svelte-1phssyn"]',document.head);oe=a(v,"META",{name:!0,content:!0}),v.forEach(o),ht=d(i),E=a(i,"H1",{class:!0});var _o=r(E);J=a(_o,"A",{id:!0,class:!0,href:!0});var Ji=r(J);Ut=a(Ji,"SPAN",{});var Qi=r(Ut);u(Ee.$$.fragment,Qi),Qi.forEach(o),Ji.forEach(o),Go=d(_o),Vt=a(_o,"SPAN",{});var Yi=r(Vt);Oo=n(Yi,"Generation"),Yi.forEach(o),_o.forEach(o),ao=d(i),y=a(i,"P",{});var T=r(y);Eo=n(T,"The methods for auto-regressive text generation, namely "),ft=a(T,"A",{href:!0});var el=r(ft);So=n(el,"generate()"),el.forEach(o),Fo=n(T," (for the PyTorch models), "),bt=a(T,"A",{href:!0});var tl=r(bt);$o=n(tl,"generate()"),tl.forEach(o),Ao=n(T," (for the TensorFlow models) and "),kt=a(T,"A",{href:!0});var nl=r(kt);zo=n(nl,"generate()"),nl.forEach(o),Po=n(T," (for the Flax/JAX models), are implemented in "),xt=a(T,"A",{href:!0});var ol=r(xt);No=n(ol,"GenerationMixin"),ol.forEach(o),Do=n(T,", "),vt=a(T,"A",{href:!0});var sl=r(vt);Co=n(sl,"TFGenerationMixin"),sl.forEach(o),Bo=n(T," and "),yt=a(T,"A",{href:!0});var al=r(yt);Wo=n(al,"FlaxGenerationMixin"),al.forEach(o),Io=n(T," respectively."),T.forEach(o),ro=d(i),L=a(i,"P",{});var K=r(L);Ho=n(K,"The "),Kt=a(K,"CODE",{});var rl=r(Kt);Ro=n(rl,"GenerationMixin"),rl.forEach(o),Uo=n(K," classes are inherited by the corresponding base model classes, "),Zt=a(K,"EM",{});var il=r(Zt);Vo=n(il,"e.g."),il.forEach(o),Ko=d(K),jt=a(K,"A",{href:!0});var ll=r(jt);Zo=n(ll,"PreTrainedModel"),ll.forEach(o),Xo=n(K,", "),Mt=a(K,"A",{href:!0});var dl=r(Mt);Jo=n(dl,"TFPreTrainedModel"),dl.forEach(o),Qo=n(K,", and "),Lt=a(K,"A",{href:!0});var cl=r(Lt);Yo=n(cl,"FlaxPreTrainedModel"),cl.forEach(o),es=n(K,` respectively, therefore exposing all
methods for auto-regressive text generation to every model class.`),K.forEach(o),io=d(i),re=a(i,"H2",{class:!0});var ho=r(re);xe=a(ho,"A",{id:!0,class:!0,href:!0});var pl=r(xe);Xt=a(pl,"SPAN",{});var ml=r(Xt);u(Se.$$.fragment,ml),ml.forEach(o),pl.forEach(o),ts=d(ho),Jt=a(ho,"SPAN",{});var gl=r(Jt);ns=n(gl,"GenerationMixn"),gl.forEach(o),ho.forEach(o),lo=d(i),m=a(i,"DIV",{class:!0});var x=r(m);u(Fe.$$.fragment,x),os=d(x),$e=a(x,"P",{});var fo=r($e);ss=n(fo,"A class containing all functions for auto-regressive text generation, to be used as a mixin in "),wt=a(fo,"A",{href:!0});var ul=r(wt);as=n(ul,"PreTrainedModel"),ul.forEach(o),rs=n(fo,"."),fo.forEach(o),is=d(x),Ae=a(x,"P",{});var bo=r(Ae);ls=n(bo,"The class exposes the "),Tt=a(bo,"A",{href:!0});var _l=r(Tt);ds=n(_l,"generate()"),_l.forEach(o),cs=n(bo,", which can be used for:"),bo.forEach(o),ps=d(x),G=a(x,"UL",{});var se=r(G);S=a(se,"LI",{});var ce=r(S);Qt=a(ce,"EM",{});var hl=r(Qt);ms=n(hl,"greedy decoding"),hl.forEach(o),gs=n(ce," by calling "),qt=a(ce,"A",{href:!0});var fl=r(qt);us=n(fl,"greedy_search()"),fl.forEach(o),_s=n(ce," if "),Yt=a(ce,"CODE",{});var bl=r(Yt);hs=n(bl,"num_beams=1"),bl.forEach(o),fs=n(ce," and "),en=a(ce,"CODE",{});var kl=r(en);bs=n(kl,"do_sample=False"),kl.forEach(o),ks=n(ce,"."),ce.forEach(o),xs=d(se),F=a(se,"LI",{});var pe=r(F);tn=a(pe,"EM",{});var xl=r(tn);vs=n(xl,"multinomial sampling"),xl.forEach(o),ys=n(pe," by calling "),Gt=a(pe,"A",{href:!0});var vl=r(Gt);js=n(vl,"sample()"),vl.forEach(o),Ms=n(pe," if "),nn=a(pe,"CODE",{});var yl=r(nn);Ls=n(yl,"num_beams=1"),yl.forEach(o),ws=n(pe," and "),on=a(pe,"CODE",{});var jl=r(on);Ts=n(jl,"do_sample=True"),jl.forEach(o),qs=n(pe,"."),pe.forEach(o),Gs=d(se),$=a(se,"LI",{});var me=r($);sn=a(me,"EM",{});var Ml=r(sn);Os=n(Ml,"beam-search decoding"),Ml.forEach(o),Es=n(me," by calling "),Ot=a(me,"A",{href:!0});var Ll=r(Ot);Ss=n(Ll,"beam_search()"),Ll.forEach(o),Fs=n(me," if "),an=a(me,"CODE",{});var wl=r(an);$s=n(wl,"num_beams>1"),wl.forEach(o),As=n(me," and "),rn=a(me,"CODE",{});var Tl=r(rn);zs=n(Tl,"do_sample=False"),Tl.forEach(o),Ps=n(me,"."),me.forEach(o),Ns=d(se),A=a(se,"LI",{});var ge=r(A);ln=a(ge,"EM",{});var ql=r(ln);Ds=n(ql,"beam-search multinomial sampling"),ql.forEach(o),Cs=n(ge," by calling "),Et=a(ge,"A",{href:!0});var Gl=r(Et);Bs=n(Gl,"beam_sample()"),Gl.forEach(o),Ws=n(ge," if "),dn=a(ge,"CODE",{});var Ol=r(dn);Is=n(Ol,"num_beams>1"),Ol.forEach(o),Hs=n(ge," and "),cn=a(ge,"CODE",{});var El=r(cn);Rs=n(El,"do_sample=True"),El.forEach(o),Us=n(ge,"."),ge.forEach(o),Vs=d(se),z=a(se,"LI",{});var ue=r(z);pn=a(ue,"EM",{});var Sl=r(pn);Ks=n(Sl,"diverse beam-search decoding"),Sl.forEach(o),Zs=n(ue," by calling "),St=a(ue,"A",{href:!0});var Fl=r(St);Xs=n(Fl,"group_beam_search()"),Fl.forEach(o),Js=n(ue,", if "),mn=a(ue,"CODE",{});var $l=r(mn);Qs=n($l,"num_beams>1"),$l.forEach(o),Ys=n(ue," and "),gn=a(ue,"CODE",{});var Al=r(gn);ea=n(Al,"num_beam_groups>1"),Al.forEach(o),ta=n(ue,"."),ue.forEach(o),se.forEach(o),na=d(x),p=a(x,"DIV",{class:!0});var k=r(p);u(ze.$$.fragment,k),oa=d(k),un=a(k,"P",{});var zl=r(un);sa=n(zl,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),zl.forEach(o),aa=d(k),O=a(k,"UL",{});var ae=r(O);P=a(ae,"LI",{});var _e=r(P);_n=a(_e,"EM",{});var Pl=r(_n);ra=n(Pl,"greedy decoding"),Pl.forEach(o),ia=n(_e," by calling "),Ft=a(_e,"A",{href:!0});var Nl=r(Ft);la=n(Nl,"greedy_search()"),Nl.forEach(o),da=n(_e," if "),hn=a(_e,"CODE",{});var Dl=r(hn);ca=n(Dl,"num_beams=1"),Dl.forEach(o),pa=n(_e," and "),fn=a(_e,"CODE",{});var Cl=r(fn);ma=n(Cl,"do_sample=False"),Cl.forEach(o),ga=n(_e,"."),_e.forEach(o),ua=d(ae),N=a(ae,"LI",{});var he=r(N);bn=a(he,"EM",{});var Bl=r(bn);_a=n(Bl,"multinomial sampling"),Bl.forEach(o),ha=n(he," by calling "),$t=a(he,"A",{href:!0});var Wl=r($t);fa=n(Wl,"sample()"),Wl.forEach(o),ba=n(he," if "),kn=a(he,"CODE",{});var Il=r(kn);ka=n(Il,"num_beams=1"),Il.forEach(o),xa=n(he," and "),xn=a(he,"CODE",{});var Hl=r(xn);va=n(Hl,"do_sample=True"),Hl.forEach(o),ya=n(he,"."),he.forEach(o),ja=d(ae),D=a(ae,"LI",{});var fe=r(D);vn=a(fe,"EM",{});var Rl=r(vn);Ma=n(Rl,"beam-search decoding"),Rl.forEach(o),La=n(fe," by calling "),At=a(fe,"A",{href:!0});var Ul=r(At);wa=n(Ul,"beam_search()"),Ul.forEach(o),Ta=n(fe," if "),yn=a(fe,"CODE",{});var Vl=r(yn);qa=n(Vl,"num_beams>1"),Vl.forEach(o),Ga=n(fe," and "),jn=a(fe,"CODE",{});var Kl=r(jn);Oa=n(Kl,"do_sample=False"),Kl.forEach(o),Ea=n(fe,"."),fe.forEach(o),Sa=d(ae),C=a(ae,"LI",{});var be=r(C);Mn=a(be,"EM",{});var Zl=r(Mn);Fa=n(Zl,"beam-search multinomial sampling"),Zl.forEach(o),$a=n(be," by calling "),zt=a(be,"A",{href:!0});var Xl=r(zt);Aa=n(Xl,"beam_sample()"),Xl.forEach(o),za=n(be," if "),Ln=a(be,"CODE",{});var Jl=r(Ln);Pa=n(Jl,"num_beams>1"),Jl.forEach(o),Na=n(be," and "),wn=a(be,"CODE",{});var Ql=r(wn);Da=n(Ql,"do_sample=True"),Ql.forEach(o),Ca=n(be,"."),be.forEach(o),Ba=d(ae),B=a(ae,"LI",{});var ke=r(B);Tn=a(ke,"EM",{});var Yl=r(Tn);Wa=n(Yl,"diverse beam-search decoding"),Yl.forEach(o),Ia=n(ke," by calling "),Pt=a(ke,"A",{href:!0});var ed=r(Pt);Ha=n(ed,"group_beam_search()"),ed.forEach(o),Ra=n(ke,", if "),qn=a(ke,"CODE",{});var td=r(qn);Ua=n(td,"num_beams>1"),td.forEach(o),Va=n(ke," and "),Gn=a(ke,"CODE",{});var nd=r(Gn);Ka=n(nd,"num_beam_groups>1"),nd.forEach(o),Za=n(ke,"."),ke.forEach(o),ae.forEach(o),Xa=d(k),Q=a(k,"P",{});var je=r(Q);Ja=n(je,"Apart from "),On=a(je,"CODE",{});var od=r(On);Qa=n(od,"inputs"),od.forEach(o),Ya=n(je,`, all the arguments below will default to the value of the attribute of the same name
as defined in the model\u2019s config (`),En=a(je,"CODE",{});var sd=r(En);er=n(sd,"config.json"),sd.forEach(o),tr=n(je,") which in turn defaults to the "),Nt=a(je,"A",{href:!0});var ad=r(Nt);nr=n(ad,"PretrainedConfig"),ad.forEach(o),or=n(je," of the model."),je.forEach(o),sr=d(k),Pe=a(k,"P",{});var ko=r(Pe);ar=n(ko,"Most of these parameters are explained in more detail in "),Ne=a(ko,"A",{href:!0,rel:!0});var rd=r(Ne);rr=n(rd,"this blog post"),rd.forEach(o),ir=n(ko,"."),ko.forEach(o),lr=d(k),Sn=a(k,"P",{});var id=r(Sn);dr=n(id,"Examples:"),id.forEach(o),cr=d(k),Fn=a(k,"P",{});var ld=r(Fn);pr=n(ld,"Greedy Decoding:"),ld.forEach(o),mr=d(k),u(De.$$.fragment,k),gr=d(k),$n=a(k,"P",{});var dd=r($n);ur=n(dd,"Multinomial Sampling:"),dd.forEach(o),_r=d(k),u(Ce.$$.fragment,k),hr=d(k),An=a(k,"P",{});var cd=r(An);fr=n(cd,"Beam-search decoding:"),cd.forEach(o),br=d(k),u(Be.$$.fragment,k),k.forEach(o),kr=d(x),W=a(x,"DIV",{class:!0});var Me=r(W);u(We.$$.fragment,Me),xr=d(Me),zn=a(Me,"P",{});var pd=r(zn);vr=n(pd,"Generates sequences for models with a language modeling head using greedy decoding."),pd.forEach(o),yr=d(Me),Pn=a(Me,"P",{});var md=r(Pn);jr=n(md,"Examples:"),md.forEach(o),Mr=d(Me),u(Ie.$$.fragment,Me),Me.forEach(o),Lr=d(x),I=a(x,"DIV",{class:!0});var Le=r(I);u(He.$$.fragment,Le),wr=d(Le),Nn=a(Le,"P",{});var gd=r(Nn);Tr=n(gd,"Generates sequences for models with a language modeling head using multinomial sampling."),gd.forEach(o),qr=d(Le),Dn=a(Le,"P",{});var ud=r(Dn);Gr=n(ud,"Examples:"),ud.forEach(o),Or=d(Le),u(Re.$$.fragment,Le),Le.forEach(o),Er=d(x),H=a(x,"DIV",{class:!0});var we=r(H);u(Ue.$$.fragment,we),Sr=d(we),Cn=a(we,"P",{});var _d=r(Cn);Fr=n(_d,"Generates sequences for models with a language modeling head using beam search decoding."),_d.forEach(o),$r=d(we),Bn=a(we,"P",{});var hd=r(Bn);Ar=n(hd,"Examples:"),hd.forEach(o),zr=d(we),u(Ve.$$.fragment,we),we.forEach(o),Pr=d(x),R=a(x,"DIV",{class:!0});var Te=r(R);u(Ke.$$.fragment,Te),Nr=d(Te),Wn=a(Te,"P",{});var fd=r(Wn);Dr=n(fd,"Generates sequences for models with a language modeling head using beam search with multinomial sampling."),fd.forEach(o),Cr=d(Te),In=a(Te,"P",{});var bd=r(In);Br=n(bd,"Examples:"),bd.forEach(o),Wr=d(Te),u(Ze.$$.fragment,Te),Te.forEach(o),Ir=d(x),U=a(x,"DIV",{class:!0});var qe=r(U);u(Xe.$$.fragment,qe),Hr=d(qe),Hn=a(qe,"P",{});var kd=r(Hn);Rr=n(kd,"Generates sequences for models with a language modeling head using beam search decoding."),kd.forEach(o),Ur=d(qe),Rn=a(qe,"P",{});var xd=r(Rn);Vr=n(xd,"Examples:"),xd.forEach(o),Kr=d(qe),u(Je.$$.fragment,qe),qe.forEach(o),Zr=d(x),V=a(x,"DIV",{class:!0});var Ge=r(V);u(Qe.$$.fragment,Ge),Xr=d(Ge),Un=a(Ge,"P",{});var vd=r(Un);Jr=n(vd,"Generates sequences for models with a language modeling head using beam search decoding."),vd.forEach(o),Qr=d(Ge),Vn=a(Ge,"P",{});var yd=r(Vn);Yr=n(yd,"Examples:"),yd.forEach(o),ei=d(Ge),u(Ye.$$.fragment,Ge),Ge.forEach(o),x.forEach(o),co=d(i),ie=a(i,"H2",{class:!0});var xo=r(ie);ve=a(xo,"A",{id:!0,class:!0,href:!0});var jd=r(ve);Kn=a(jd,"SPAN",{});var Md=r(Kn);u(et.$$.fragment,Md),Md.forEach(o),jd.forEach(o),ti=d(xo),Zn=a(xo,"SPAN",{});var Ld=r(Zn);ni=n(Ld,"TFGenerationMixn"),Ld.forEach(o),xo.forEach(o),po=d(i),Y=a(i,"DIV",{class:!0});var It=r(Y);u(tt.$$.fragment,It),oi=d(It),nt=a(It,"P",{});var vo=r(nt);si=n(vo,"A class containing all of the functions supporting generation, to be used as a mixin in "),Dt=a(vo,"A",{href:!0});var wd=r(Dt);ai=n(wd,"TFPreTrainedModel"),wd.forEach(o),ri=n(vo,"."),vo.forEach(o),ii=d(It),j=a(It,"DIV",{class:!0});var q=r(j);u(ot.$$.fragment,q),li=d(q),Xn=a(q,"P",{});var Td=r(Xn);di=n(Td,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),Td.forEach(o),ci=d(q),st=a(q,"P",{});var yo=r(st);pi=n(yo,"Adapted in part from "),at=a(yo,"A",{href:!0,rel:!0});var qd=r(at);mi=n(qd,`Facebook\u2019s XLM beam search
code`),qd.forEach(o),gi=n(yo,"."),yo.forEach(o),ui=d(q),ee=a(q,"P",{});var Oe=r(ee);_i=n(Oe,"Apart from "),Jn=a(Oe,"CODE",{});var Gd=r(Jn);hi=n(Gd,"input_ids"),Gd.forEach(o),fi=n(Oe," and "),Qn=a(Oe,"CODE",{});var Od=r(Qn);bi=n(Od,"attention_mask"),Od.forEach(o),ki=n(Oe,`, all the arguments below will default to the value of the attribute
of the same name inside the `),Ct=a(Oe,"A",{href:!0});var Ed=r(Ct);xi=n(Ed,"PretrainedConfig"),Ed.forEach(o),vi=n(Oe,` of the model. The default values indicated are the default
values of those config.`),Oe.forEach(o),yi=d(q),rt=a(q,"P",{});var jo=r(rt);ji=n(jo,"Most of these parameters are explained in more detail in "),it=a(jo,"A",{href:!0,rel:!0});var Sd=r(it);Mi=n(Sd,`this blog
post`),Sd.forEach(o),Li=n(jo,"."),jo.forEach(o),wi=d(q),Yn=a(q,"P",{});var Fd=r(Yn);Ti=n(Fd,"Examples:"),Fd.forEach(o),qi=d(q),u(lt.$$.fragment,q),q.forEach(o),It.forEach(o),mo=d(i),le=a(i,"H2",{class:!0});var Mo=r(le);ye=a(Mo,"A",{id:!0,class:!0,href:!0});var $d=r(ye);eo=a($d,"SPAN",{});var Ad=r(eo);u(dt.$$.fragment,Ad),Ad.forEach(o),$d.forEach(o),Gi=d(Mo),to=a(Mo,"SPAN",{});var zd=r(to);Oi=n(zd,"FlaxGenerationMixn"),zd.forEach(o),Mo.forEach(o),go=d(i),te=a(i,"DIV",{class:!0});var Ht=r(te);u(ct.$$.fragment,Ht),Ei=d(Ht),pt=a(Ht,"P",{});var Lo=r(pt);Si=n(Lo,"A class containing all of the functions supporting generation, to be used as a mixin in "),Bt=a(Lo,"A",{href:!0});var Pd=r(Bt);Fi=n(Pd,"FlaxPreTrainedModel"),Pd.forEach(o),$i=n(Lo,"."),Lo.forEach(o),Ai=d(Ht),w=a(Ht,"DIV",{class:!0});var Z=r(w);u(mt.$$.fragment,Z),zi=d(Z),no=a(Z,"P",{});var Nd=r(no);Pi=n(Nd,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
and, multinomial sampling.`),Nd.forEach(o),Ni=d(Z),de=a(Z,"P",{});var Rt=r(de);Di=n(Rt,"Apart from "),oo=a(Rt,"CODE",{});var Dd=r(oo);Ci=n(Dd,"input_ids"),Dd.forEach(o),Bi=n(Rt,`, all the arguments below will default to the value of the attribute of the same name
inside the `),Wt=a(Rt,"A",{href:!0});var Cd=r(Wt);Wi=n(Cd,"PretrainedConfig"),Cd.forEach(o),Ii=n(Rt,` of the model. The default values indicated are the default values of those
config.`),Rt.forEach(o),Hi=d(Z),gt=a(Z,"P",{});var wo=r(gt);Ri=n(wo,"Most of these parameters are explained in more detail in "),ut=a(wo,"A",{href:!0,rel:!0});var Bd=r(ut);Ui=n(Bd,`this blog
post`),Bd.forEach(o),Vi=n(wo,"."),wo.forEach(o),Ki=d(Z),so=a(Z,"P",{});var Wd=r(so);Zi=n(Wd,"Examples:"),Wd.forEach(o),Xi=d(Z),u(_t.$$.fragment,Z),Z.forEach(o),Ht.forEach(o),this.h()},h(){c(oe,"name","hf:doc:metadata"),c(oe,"content",JSON.stringify(Zd)),c(J,"id","generation"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#generation"),c(E,"class","relative group"),c(ft,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(bt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin.generate"),c(kt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),c(xt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin"),c(vt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin"),c(yt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin"),c(jt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.PreTrainedModel"),c(Mt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.TFPreTrainedModel"),c(Lt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xe,"id","transformers.generation_utils.GenerationMixin"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.generation_utils.GenerationMixin"),c(re,"class","relative group"),c(wt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.PreTrainedModel"),c(Tt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(qt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),c(Gt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),c(Ot,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),c(Et,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),c(St,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),c(Ft,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),c($t,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),c(At,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),c(zt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),c(Pt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),c(Nt,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ne,"href","https://huggingface.co/blog/how-to-generate"),c(Ne,"rel","nofollow"),c(p,"class","docstring"),c(W,"class","docstring"),c(I,"class","docstring"),c(H,"class","docstring"),c(R,"class","docstring"),c(U,"class","docstring"),c(V,"class","docstring"),c(m,"class","docstring"),c(ve,"id","transformers.generation_tf_utils.TFGenerationMixin"),c(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ve,"href","#transformers.generation_tf_utils.TFGenerationMixin"),c(ie,"class","relative group"),c(Dt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.TFPreTrainedModel"),c(at,"href","https://github.com/facebookresearch/XLM/blob/9e6f6814d17be4fe5b15f2e6c43eb2b2d76daeb4/src/model/transformer.py#L529"),c(at,"rel","nofollow"),c(Ct,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),c(it,"href","https://huggingface.co/blog/how-to-generate"),c(it,"rel","nofollow"),c(j,"class","docstring"),c(Y,"class","docstring"),c(ye,"id","transformers.generation_flax_utils.FlaxGenerationMixin"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.generation_flax_utils.FlaxGenerationMixin"),c(le,"class","relative group"),c(Bt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Wt,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),c(ut,"href","https://huggingface.co/blog/how-to-generate"),c(ut,"rel","nofollow"),c(w,"class","docstring"),c(te,"class","docstring")},m(i,v){e(document.head,oe),M(i,ht,v),M(i,E,v),e(E,J),e(J,Ut),_(Ee,Ut,null),e(E,Go),e(E,Vt),e(Vt,Oo),M(i,ao,v),M(i,y,v),e(y,Eo),e(y,ft),e(ft,So),e(y,Fo),e(y,bt),e(bt,$o),e(y,Ao),e(y,kt),e(kt,zo),e(y,Po),e(y,xt),e(xt,No),e(y,Do),e(y,vt),e(vt,Co),e(y,Bo),e(y,yt),e(yt,Wo),e(y,Io),M(i,ro,v),M(i,L,v),e(L,Ho),e(L,Kt),e(Kt,Ro),e(L,Uo),e(L,Zt),e(Zt,Vo),e(L,Ko),e(L,jt),e(jt,Zo),e(L,Xo),e(L,Mt),e(Mt,Jo),e(L,Qo),e(L,Lt),e(Lt,Yo),e(L,es),M(i,io,v),M(i,re,v),e(re,xe),e(xe,Xt),_(Se,Xt,null),e(re,ts),e(re,Jt),e(Jt,ns),M(i,lo,v),M(i,m,v),_(Fe,m,null),e(m,os),e(m,$e),e($e,ss),e($e,wt),e(wt,as),e($e,rs),e(m,is),e(m,Ae),e(Ae,ls),e(Ae,Tt),e(Tt,ds),e(Ae,cs),e(m,ps),e(m,G),e(G,S),e(S,Qt),e(Qt,ms),e(S,gs),e(S,qt),e(qt,us),e(S,_s),e(S,Yt),e(Yt,hs),e(S,fs),e(S,en),e(en,bs),e(S,ks),e(G,xs),e(G,F),e(F,tn),e(tn,vs),e(F,ys),e(F,Gt),e(Gt,js),e(F,Ms),e(F,nn),e(nn,Ls),e(F,ws),e(F,on),e(on,Ts),e(F,qs),e(G,Gs),e(G,$),e($,sn),e(sn,Os),e($,Es),e($,Ot),e(Ot,Ss),e($,Fs),e($,an),e(an,$s),e($,As),e($,rn),e(rn,zs),e($,Ps),e(G,Ns),e(G,A),e(A,ln),e(ln,Ds),e(A,Cs),e(A,Et),e(Et,Bs),e(A,Ws),e(A,dn),e(dn,Is),e(A,Hs),e(A,cn),e(cn,Rs),e(A,Us),e(G,Vs),e(G,z),e(z,pn),e(pn,Ks),e(z,Zs),e(z,St),e(St,Xs),e(z,Js),e(z,mn),e(mn,Qs),e(z,Ys),e(z,gn),e(gn,ea),e(z,ta),e(m,na),e(m,p),_(ze,p,null),e(p,oa),e(p,un),e(un,sa),e(p,aa),e(p,O),e(O,P),e(P,_n),e(_n,ra),e(P,ia),e(P,Ft),e(Ft,la),e(P,da),e(P,hn),e(hn,ca),e(P,pa),e(P,fn),e(fn,ma),e(P,ga),e(O,ua),e(O,N),e(N,bn),e(bn,_a),e(N,ha),e(N,$t),e($t,fa),e(N,ba),e(N,kn),e(kn,ka),e(N,xa),e(N,xn),e(xn,va),e(N,ya),e(O,ja),e(O,D),e(D,vn),e(vn,Ma),e(D,La),e(D,At),e(At,wa),e(D,Ta),e(D,yn),e(yn,qa),e(D,Ga),e(D,jn),e(jn,Oa),e(D,Ea),e(O,Sa),e(O,C),e(C,Mn),e(Mn,Fa),e(C,$a),e(C,zt),e(zt,Aa),e(C,za),e(C,Ln),e(Ln,Pa),e(C,Na),e(C,wn),e(wn,Da),e(C,Ca),e(O,Ba),e(O,B),e(B,Tn),e(Tn,Wa),e(B,Ia),e(B,Pt),e(Pt,Ha),e(B,Ra),e(B,qn),e(qn,Ua),e(B,Va),e(B,Gn),e(Gn,Ka),e(B,Za),e(p,Xa),e(p,Q),e(Q,Ja),e(Q,On),e(On,Qa),e(Q,Ya),e(Q,En),e(En,er),e(Q,tr),e(Q,Nt),e(Nt,nr),e(Q,or),e(p,sr),e(p,Pe),e(Pe,ar),e(Pe,Ne),e(Ne,rr),e(Pe,ir),e(p,lr),e(p,Sn),e(Sn,dr),e(p,cr),e(p,Fn),e(Fn,pr),e(p,mr),_(De,p,null),e(p,gr),e(p,$n),e($n,ur),e(p,_r),_(Ce,p,null),e(p,hr),e(p,An),e(An,fr),e(p,br),_(Be,p,null),e(m,kr),e(m,W),_(We,W,null),e(W,xr),e(W,zn),e(zn,vr),e(W,yr),e(W,Pn),e(Pn,jr),e(W,Mr),_(Ie,W,null),e(m,Lr),e(m,I),_(He,I,null),e(I,wr),e(I,Nn),e(Nn,Tr),e(I,qr),e(I,Dn),e(Dn,Gr),e(I,Or),_(Re,I,null),e(m,Er),e(m,H),_(Ue,H,null),e(H,Sr),e(H,Cn),e(Cn,Fr),e(H,$r),e(H,Bn),e(Bn,Ar),e(H,zr),_(Ve,H,null),e(m,Pr),e(m,R),_(Ke,R,null),e(R,Nr),e(R,Wn),e(Wn,Dr),e(R,Cr),e(R,In),e(In,Br),e(R,Wr),_(Ze,R,null),e(m,Ir),e(m,U),_(Xe,U,null),e(U,Hr),e(U,Hn),e(Hn,Rr),e(U,Ur),e(U,Rn),e(Rn,Vr),e(U,Kr),_(Je,U,null),e(m,Zr),e(m,V),_(Qe,V,null),e(V,Xr),e(V,Un),e(Un,Jr),e(V,Qr),e(V,Vn),e(Vn,Yr),e(V,ei),_(Ye,V,null),M(i,co,v),M(i,ie,v),e(ie,ve),e(ve,Kn),_(et,Kn,null),e(ie,ti),e(ie,Zn),e(Zn,ni),M(i,po,v),M(i,Y,v),_(tt,Y,null),e(Y,oi),e(Y,nt),e(nt,si),e(nt,Dt),e(Dt,ai),e(nt,ri),e(Y,ii),e(Y,j),_(ot,j,null),e(j,li),e(j,Xn),e(Xn,di),e(j,ci),e(j,st),e(st,pi),e(st,at),e(at,mi),e(st,gi),e(j,ui),e(j,ee),e(ee,_i),e(ee,Jn),e(Jn,hi),e(ee,fi),e(ee,Qn),e(Qn,bi),e(ee,ki),e(ee,Ct),e(Ct,xi),e(ee,vi),e(j,yi),e(j,rt),e(rt,ji),e(rt,it),e(it,Mi),e(rt,Li),e(j,wi),e(j,Yn),e(Yn,Ti),e(j,qi),_(lt,j,null),M(i,mo,v),M(i,le,v),e(le,ye),e(ye,eo),_(dt,eo,null),e(le,Gi),e(le,to),e(to,Oi),M(i,go,v),M(i,te,v),_(ct,te,null),e(te,Ei),e(te,pt),e(pt,Si),e(pt,Bt),e(Bt,Fi),e(pt,$i),e(te,Ai),e(te,w),_(mt,w,null),e(w,zi),e(w,no),e(no,Pi),e(w,Ni),e(w,de),e(de,Di),e(de,oo),e(oo,Ci),e(de,Bi),e(de,Wt),e(Wt,Wi),e(de,Ii),e(w,Hi),e(w,gt),e(gt,Ri),e(gt,ut),e(ut,Ui),e(gt,Vi),e(w,Ki),e(w,so),e(so,Zi),e(w,Xi),_(_t,w,null),uo=!0},p:Vd,i(i){uo||(h(Ee.$$.fragment,i),h(Se.$$.fragment,i),h(Fe.$$.fragment,i),h(ze.$$.fragment,i),h(De.$$.fragment,i),h(Ce.$$.fragment,i),h(Be.$$.fragment,i),h(We.$$.fragment,i),h(Ie.$$.fragment,i),h(He.$$.fragment,i),h(Re.$$.fragment,i),h(Ue.$$.fragment,i),h(Ve.$$.fragment,i),h(Ke.$$.fragment,i),h(Ze.$$.fragment,i),h(Xe.$$.fragment,i),h(Je.$$.fragment,i),h(Qe.$$.fragment,i),h(Ye.$$.fragment,i),h(et.$$.fragment,i),h(tt.$$.fragment,i),h(ot.$$.fragment,i),h(lt.$$.fragment,i),h(dt.$$.fragment,i),h(ct.$$.fragment,i),h(mt.$$.fragment,i),h(_t.$$.fragment,i),uo=!0)},o(i){f(Ee.$$.fragment,i),f(Se.$$.fragment,i),f(Fe.$$.fragment,i),f(ze.$$.fragment,i),f(De.$$.fragment,i),f(Ce.$$.fragment,i),f(Be.$$.fragment,i),f(We.$$.fragment,i),f(Ie.$$.fragment,i),f(He.$$.fragment,i),f(Re.$$.fragment,i),f(Ue.$$.fragment,i),f(Ve.$$.fragment,i),f(Ke.$$.fragment,i),f(Ze.$$.fragment,i),f(Xe.$$.fragment,i),f(Je.$$.fragment,i),f(Qe.$$.fragment,i),f(Ye.$$.fragment,i),f(et.$$.fragment,i),f(tt.$$.fragment,i),f(ot.$$.fragment,i),f(lt.$$.fragment,i),f(dt.$$.fragment,i),f(ct.$$.fragment,i),f(mt.$$.fragment,i),f(_t.$$.fragment,i),uo=!1},d(i){o(oe),i&&o(ht),i&&o(E),b(Ee),i&&o(ao),i&&o(y),i&&o(ro),i&&o(L),i&&o(io),i&&o(re),b(Se),i&&o(lo),i&&o(m),b(Fe),b(ze),b(De),b(Ce),b(Be),b(We),b(Ie),b(He),b(Re),b(Ue),b(Ve),b(Ke),b(Ze),b(Xe),b(Je),b(Qe),b(Ye),i&&o(co),i&&o(ie),b(et),i&&o(po),i&&o(Y),b(tt),b(ot),b(lt),i&&o(mo),i&&o(le),b(dt),i&&o(go),i&&o(te),b(ct),b(mt),b(_t)}}}const Zd={local:"generation",sections:[{local:"transformers.generation_utils.GenerationMixin",title:"GenerationMixn"},{local:"transformers.generation_tf_utils.TFGenerationMixin",title:"TFGenerationMixn"},{local:"transformers.generation_flax_utils.FlaxGenerationMixin",title:"FlaxGenerationMixn"}],title:"Generation"};function Xd(qo,oe,ht){let{fw:E}=oe;return qo.$$set=J=>{"fw"in J&&ht(0,E=J.fw)},[E]}class nc extends Id{constructor(oe){super();Hd(this,oe,Xd,Kd,Rd,{fw:0})}}export{nc as default,Zd as metadata};
