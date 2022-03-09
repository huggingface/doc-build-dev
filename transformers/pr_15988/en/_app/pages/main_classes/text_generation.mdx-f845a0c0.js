import{S as gc,i as uc,s as _c,e as s,k as l,w as g,t,M as hc,c as a,d as o,m as d,a as r,x as u,h as n,b as c,F as e,g as M,y as _,L as fc,q as h,o as f,B as b}from"../../chunks/vendor-4833417e.js";import{D as X}from"../../chunks/Docstring-4f315ed9.js";import{C as ne}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Do}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function bc(Co){let oe,yt,E,J,Qt,Ee,Bo,Yt,Wo,mo,y,Io,jt,Ho,Ro,Mt,Uo,Vo,Lt,Ko,Zo,wt,Xo,Jo,Tt,Qo,Yo,qt,es,ts,go,L,ns,en,os,ss,tn,as,rs,Ot,is,ls,Gt,ds,cs,Et,ps,ms,uo,re,ke,nn,Se,gs,on,us,_o,m,Fe,_s,$e,hs,St,fs,bs,xs,Ae,ks,Ft,vs,ys,js,O,S,sn,Ms,Ls,$t,ws,Ts,an,qs,Os,rn,Gs,Es,Ss,F,ln,Fs,$s,At,As,zs,dn,Ps,Ns,cn,Ds,Cs,Bs,$,pn,Ws,Is,zt,Hs,Rs,mn,Us,Vs,gn,Ks,Zs,Xs,A,un,Js,Qs,Pt,Ys,ea,_n,ta,na,hn,oa,sa,aa,z,fn,ra,ia,Nt,la,da,bn,ca,pa,xn,ma,ga,ua,p,ze,_a,kn,ha,fa,G,P,vn,ba,xa,Dt,ka,va,yn,ya,ja,jn,Ma,La,wa,N,Mn,Ta,qa,Ct,Oa,Ga,Ln,Ea,Sa,wn,Fa,$a,Aa,D,Tn,za,Pa,Bt,Na,Da,qn,Ca,Ba,On,Wa,Ia,Ha,C,Gn,Ra,Ua,Wt,Va,Ka,En,Za,Xa,Sn,Ja,Qa,Ya,B,Fn,er,tr,It,nr,or,$n,sr,ar,An,rr,ir,lr,Q,dr,zn,cr,pr,Pn,mr,gr,Ht,ur,_r,hr,Pe,fr,Ne,br,xr,kr,Nn,vr,yr,Dn,jr,Mr,De,Lr,Cn,wr,Tr,Ce,qr,Bn,Or,Gr,Be,Er,W,We,Sr,Ie,Fr,Wn,$r,Ar,zr,In,Pr,Nr,He,Dr,I,Re,Cr,Ue,Br,Hn,Wr,Ir,Hr,Rn,Rr,Ur,Ve,Vr,H,Ke,Kr,Ze,Zr,Un,Xr,Jr,Qr,Vn,Yr,ei,Xe,ti,R,Je,ni,Qe,oi,Kn,si,ai,ri,Zn,ii,li,Ye,di,U,et,ci,tt,pi,Xn,mi,gi,ui,Jn,_i,hi,nt,fi,V,ot,bi,st,xi,Qn,ki,vi,yi,Yn,ji,Mi,at,ho,ie,ve,eo,rt,Li,to,wi,fo,Y,it,Ti,lt,qi,Rt,Oi,Gi,Ei,j,dt,Si,no,Fi,$i,ct,Ai,pt,zi,Pi,Ni,ee,Di,oo,Ci,Bi,so,Wi,Ii,Ut,Hi,Ri,Ui,mt,Vi,gt,Ki,Zi,Xi,ao,Ji,Qi,ut,bo,le,ye,ro,_t,Yi,io,el,xo,te,ht,tl,ft,nl,Vt,ol,sl,al,w,bt,rl,lo,il,ll,de,dl,co,cl,pl,Kt,ml,gl,ul,xt,_l,kt,hl,fl,bl,po,xl,kl,vt,ko;return Ee=new Do({}),Se=new Do({}),Fe=new X({props:{name:"class transformers.generation_utils.GenerationMixin",anchor:"transformers.generation_utils.GenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L378"}}),ze=new X({props:{name:"generate",anchor:"transformers.generation_utils.GenerationMixin.generate",parameters:[{name:"inputs",val:": typing.Optional[torch.Tensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"typical_p",val:": typing.Optional[float] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.Iterable[int]] = None"},{name:"force_words_ids",val:": typing.Union[typing.Iterable[int], typing.Iterable[typing.Iterable[int]], NoneType] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"max_time",val:": typing.Optional[float] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Union[typing.Callable[[int, torch.Tensor], typing.List[int]], NoneType] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = []"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = []"},{name:"constraints",val:": typing.Optional[typing.List[transformers.generation_beam_constraints.Constraint]] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L813",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.generate.inputs",description:`<strong>inputs</strong> (<code>torch.Tensor</code> of varying shape depending on the modality, <em>optional</em>) &#x2014;
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
`}}),De=new ne({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

prompt = "Today I believe we can finally"
input_ids = tokenizer(prompt, return_tensors="pt").input_ids

# generate up to 30 tokens
outputs = model.generate(input_ids, do_sample=False, max_length=30)
tokenizer.batch_decode(outputs, skip_special_tokens=True)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Today I believe we can finally&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generate up to 30 tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids, do_sample=<span class="hljs-literal">False</span>, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
`}}),Ce=new ne({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

prompt = "Today I believe we can finally"
input_ids = tokenizer(prompt, return_tensors="pt").input_ids

torch.manual_seed(0)
outputs = model.generate(input_ids)
tokenizer.batch_decode(outputs, skip_special_tokens=True)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Today I believe we can finally&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
`}}),Be=new ne({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

tokenizer = AutoTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = AutoModelForSeq2SeqLM.from_pretrained("Helsinki-NLP/opus-mt-en-de")

sentence = "Paris is one of the densest populated areas in Europe."
input_ids = tokenizer(sentence, return_tensors="pt").input_ids

outputs = model.generate(input_ids)
tokenizer.batch_decode(outputs, skip_special_tokens=True)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sentence = <span class="hljs-string">&quot;Paris is one of the densest populated areas in Europe.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
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
`}}),He=new ne({props:{code:`from transformers import (
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

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),Re=new X({props:{name:"sample",anchor:"transformers.generation_utils.GenerationMixin.sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L1670",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ve=new ne({props:{code:`from transformers import (
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

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),Ke=new X({props:{name:"beam_search",anchor:"transformers.generation_utils.GenerationMixin.beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L1913",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Xe=new ne({props:{code:`from transformers import (
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

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),Je=new X({props:{name:"beam_sample",anchor:"transformers.generation_utils.GenerationMixin.beam_sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L2223",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ye=new ne({props:{code:`from transformers import (
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

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),et=new X({props:{name:"group_beam_search",anchor:"transformers.generation_utils.GenerationMixin.group_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L2544",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),nt=new ne({props:{code:`from transformers import (
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

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),ot=new X({props:{name:"constrained_beam_search",anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"constrained_beam_scorer",val:": ConstrainedBeamSearchScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L2907",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),at=new ne({props:{code:`from transformers import (
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

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Wie alt sind Sie?&#x27;</span>]`}}),rt=new Do({}),it=new X({props:{name:"class transformers.generation_tf_utils.TFGenerationMixin",anchor:"transformers.generation_tf_utils.TFGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_tf_utils.py#L342"}}),dt=new X({props:{name:"generate",anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate",parameters:[{name:"input_ids",val:" = None"},{name:"max_length",val:" = None"},{name:"min_length",val:" = None"},{name:"do_sample",val:" = None"},{name:"early_stopping",val:" = None"},{name:"num_beams",val:" = None"},{name:"temperature",val:" = None"},{name:"top_k",val:" = None"},{name:"top_p",val:" = None"},{name:"repetition_penalty",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"forced_bos_token_id",val:" = None"},{name:"forced_eos_token_id",val:" = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_tf_utils.py#L362",parametersDescription:[{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.input_ids",description:"<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, `(batch_size, sequence_length, &#x2014;",name:"input_ids"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.feature_dim)`",description:`<strong>feature_dim)\`</strong> or <code>(batch_size, num_channels, height, width)</code>, <em>optional</em>) &#x2014;
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
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"forced_eos_token_id"}]}}),ut=new ne({props:{code:`tokenizer = AutoTokenizer.from_pretrained("distilgpt2")  # Initialize tokenizer
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
)  <span class="hljs-comment"># generate sequences without allowing bad_words to be generated</span>`}}),_t=new Do({}),ht=new X({props:{name:"class transformers.generation_flax_utils.FlaxGenerationMixin",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_flax_utils.py#L119"}}),bt=new X({props:{name:"generate",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate",parameters:[{name:"input_ids",val:": ndarray"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"prng_key",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"trace",val:": bool = True"},{name:"params",val:": typing.Union[typing.Dict[str, jax._src.numpy.lax_numpy.ndarray], NoneType] = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_flax_utils.py#L154",parametersDescription:[{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),vt=new ne({props:{code:`from transformers import AutoTokenizer, FlaxAutoModelForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Generated:&quot;</span>, tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>))`}}),{c(){oe=s("meta"),yt=l(),E=s("h1"),J=s("a"),Qt=s("span"),g(Ee.$$.fragment),Bo=l(),Yt=s("span"),Wo=t("Generation"),mo=l(),y=s("p"),Io=t("The methods for auto-regressive text generation, namely "),jt=s("a"),Ho=t("generate()"),Ro=t(" (for the PyTorch models), "),Mt=s("a"),Uo=t("generate()"),Vo=t(" (for the TensorFlow models) and "),Lt=s("a"),Ko=t("generate()"),Zo=t(" (for the Flax/JAX models), are implemented in "),wt=s("a"),Xo=t("GenerationMixin"),Jo=t(", "),Tt=s("a"),Qo=t("TFGenerationMixin"),Yo=t(" and "),qt=s("a"),es=t("FlaxGenerationMixin"),ts=t(" respectively."),go=l(),L=s("p"),ns=t("The "),en=s("code"),os=t("GenerationMixin"),ss=t(" classes are inherited by the corresponding base model classes, "),tn=s("em"),as=t("e.g."),rs=l(),Ot=s("a"),is=t("PreTrainedModel"),ls=t(", "),Gt=s("a"),ds=t("TFPreTrainedModel"),cs=t(", and "),Et=s("a"),ps=t("FlaxPreTrainedModel"),ms=t(` respectively, therefore exposing all
methods for auto-regressive text generation to every model class.`),uo=l(),re=s("h2"),ke=s("a"),nn=s("span"),g(Se.$$.fragment),gs=l(),on=s("span"),us=t("GenerationMixn"),_o=l(),m=s("div"),g(Fe.$$.fragment),_s=l(),$e=s("p"),hs=t("A class containing all functions for auto-regressive text generation, to be used as a mixin in "),St=s("a"),fs=t("PreTrainedModel"),bs=t("."),xs=l(),Ae=s("p"),ks=t("The class exposes the "),Ft=s("a"),vs=t("generate()"),ys=t(", which can be used for:"),js=l(),O=s("ul"),S=s("li"),sn=s("em"),Ms=t("greedy decoding"),Ls=t(" by calling "),$t=s("a"),ws=t("greedy_search()"),Ts=t(" if "),an=s("code"),qs=t("num_beams=1"),Os=t(" and "),rn=s("code"),Gs=t("do_sample=False"),Es=t("."),Ss=l(),F=s("li"),ln=s("em"),Fs=t("multinomial sampling"),$s=t(" by calling "),At=s("a"),As=t("sample()"),zs=t(" if "),dn=s("code"),Ps=t("num_beams=1"),Ns=t(" and "),cn=s("code"),Ds=t("do_sample=True"),Cs=t("."),Bs=l(),$=s("li"),pn=s("em"),Ws=t("beam-search decoding"),Is=t(" by calling "),zt=s("a"),Hs=t("beam_search()"),Rs=t(" if "),mn=s("code"),Us=t("num_beams>1"),Vs=t(" and "),gn=s("code"),Ks=t("do_sample=False"),Zs=t("."),Xs=l(),A=s("li"),un=s("em"),Js=t("beam-search multinomial sampling"),Qs=t(" by calling "),Pt=s("a"),Ys=t("beam_sample()"),ea=t(" if "),_n=s("code"),ta=t("num_beams>1"),na=t(" and "),hn=s("code"),oa=t("do_sample=True"),sa=t("."),aa=l(),z=s("li"),fn=s("em"),ra=t("diverse beam-search decoding"),ia=t(" by calling "),Nt=s("a"),la=t("group_beam_search()"),da=t(", if "),bn=s("code"),ca=t("num_beams>1"),pa=t(" and "),xn=s("code"),ma=t("num_beam_groups>1"),ga=t("."),ua=l(),p=s("div"),g(ze.$$.fragment),_a=l(),kn=s("p"),ha=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),fa=l(),G=s("ul"),P=s("li"),vn=s("em"),ba=t("greedy decoding"),xa=t(" by calling "),Dt=s("a"),ka=t("greedy_search()"),va=t(" if "),yn=s("code"),ya=t("num_beams=1"),ja=t(" and "),jn=s("code"),Ma=t("do_sample=False"),La=t("."),wa=l(),N=s("li"),Mn=s("em"),Ta=t("multinomial sampling"),qa=t(" by calling "),Ct=s("a"),Oa=t("sample()"),Ga=t(" if "),Ln=s("code"),Ea=t("num_beams=1"),Sa=t(" and "),wn=s("code"),Fa=t("do_sample=True"),$a=t("."),Aa=l(),D=s("li"),Tn=s("em"),za=t("beam-search decoding"),Pa=t(" by calling "),Bt=s("a"),Na=t("beam_search()"),Da=t(" if "),qn=s("code"),Ca=t("num_beams>1"),Ba=t(" and "),On=s("code"),Wa=t("do_sample=False"),Ia=t("."),Ha=l(),C=s("li"),Gn=s("em"),Ra=t("beam-search multinomial sampling"),Ua=t(" by calling "),Wt=s("a"),Va=t("beam_sample()"),Ka=t(" if "),En=s("code"),Za=t("num_beams>1"),Xa=t(" and "),Sn=s("code"),Ja=t("do_sample=True"),Qa=t("."),Ya=l(),B=s("li"),Fn=s("em"),er=t("diverse beam-search decoding"),tr=t(" by calling "),It=s("a"),nr=t("group_beam_search()"),or=t(", if "),$n=s("code"),sr=t("num_beams>1"),ar=t(" and "),An=s("code"),rr=t("num_beam_groups>1"),ir=t("."),lr=l(),Q=s("p"),dr=t("Apart from "),zn=s("code"),cr=t("inputs"),pr=t(`, all the arguments below will default to the value of the attribute of the same name
as defined in the model\u2019s config (`),Pn=s("code"),mr=t("config.json"),gr=t(") which in turn defaults to the "),Ht=s("a"),ur=t("PretrainedConfig"),_r=t(" of the model."),hr=l(),Pe=s("p"),fr=t("Most of these parameters are explained in more detail in "),Ne=s("a"),br=t("this blog post"),xr=t("."),kr=l(),Nn=s("p"),vr=t("Examples:"),yr=l(),Dn=s("p"),jr=t("Greedy Decoding:"),Mr=l(),g(De.$$.fragment),Lr=l(),Cn=s("p"),wr=t("Multinomial Sampling:"),Tr=l(),g(Ce.$$.fragment),qr=l(),Bn=s("p"),Or=t("Beam-search decoding:"),Gr=l(),g(Be.$$.fragment),Er=l(),W=s("div"),g(We.$$.fragment),Sr=l(),Ie=s("p"),Fr=t("Generates sequences of token ids for models with a language modeling head using "),Wn=s("strong"),$r=t("greedy decoding"),Ar=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),zr=l(),In=s("p"),Pr=t("Examples:"),Nr=l(),g(He.$$.fragment),Dr=l(),I=s("div"),g(Re.$$.fragment),Cr=l(),Ue=s("p"),Br=t("Generates sequences of token ids for models with a language modeling head using "),Hn=s("strong"),Wr=t("multinomial sampling"),Ir=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Hr=l(),Rn=s("p"),Rr=t("Examples:"),Ur=l(),g(Ve.$$.fragment),Vr=l(),H=s("div"),g(Ke.$$.fragment),Kr=l(),Ze=s("p"),Zr=t("Generates sequences of token ids for models with a language modeling head using "),Un=s("strong"),Xr=t("beam search decoding"),Jr=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Qr=l(),Vn=s("p"),Yr=t("Examples:"),ei=l(),g(Xe.$$.fragment),ti=l(),R=s("div"),g(Je.$$.fragment),ni=l(),Qe=s("p"),oi=t("Generates sequences of token ids for models with a language modeling head using "),Kn=s("strong"),si=t("beam search multinomial sampling"),ai=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),ri=l(),Zn=s("p"),ii=t("Examples:"),li=l(),g(Ye.$$.fragment),di=l(),U=s("div"),g(et.$$.fragment),ci=l(),tt=s("p"),pi=t("Generates sequences of token ids for models with a language modeling head using "),Xn=s("strong"),mi=t("diverse beam search decoding"),gi=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),ui=l(),Jn=s("p"),_i=t("Examples:"),hi=l(),g(nt.$$.fragment),fi=l(),V=s("div"),g(ot.$$.fragment),bi=l(),st=s("p"),xi=t("Generates sequences of token ids for models with a language modeling head using "),Qn=s("strong"),ki=t("constrained beam search decoding"),vi=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),yi=l(),Yn=s("p"),ji=t("Examples:"),Mi=l(),g(at.$$.fragment),ho=l(),ie=s("h2"),ve=s("a"),eo=s("span"),g(rt.$$.fragment),Li=l(),to=s("span"),wi=t("TFGenerationMixn"),fo=l(),Y=s("div"),g(it.$$.fragment),Ti=l(),lt=s("p"),qi=t("A class containing all of the functions supporting generation, to be used as a mixin in "),Rt=s("a"),Oi=t("TFPreTrainedModel"),Gi=t("."),Ei=l(),j=s("div"),g(dt.$$.fragment),Si=l(),no=s("p"),Fi=t(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),$i=l(),ct=s("p"),Ai=t("Adapted in part from "),pt=s("a"),zi=t(`Facebook\u2019s XLM beam search
code`),Pi=t("."),Ni=l(),ee=s("p"),Di=t("Apart from "),oo=s("code"),Ci=t("input_ids"),Bi=t(" and "),so=s("code"),Wi=t("attention_mask"),Ii=t(`, all the arguments below will default to the value of the attribute
of the same name inside the `),Ut=s("a"),Hi=t("PretrainedConfig"),Ri=t(` of the model. The default values indicated are the default
values of those config.`),Ui=l(),mt=s("p"),Vi=t("Most of these parameters are explained in more detail in "),gt=s("a"),Ki=t(`this blog
post`),Zi=t("."),Xi=l(),ao=s("p"),Ji=t("Examples:"),Qi=l(),g(ut.$$.fragment),bo=l(),le=s("h2"),ye=s("a"),ro=s("span"),g(_t.$$.fragment),Yi=l(),io=s("span"),el=t("FlaxGenerationMixn"),xo=l(),te=s("div"),g(ht.$$.fragment),tl=l(),ft=s("p"),nl=t("A class containing all of the functions supporting generation, to be used as a mixin in "),Vt=s("a"),ol=t("FlaxPreTrainedModel"),sl=t("."),al=l(),w=s("div"),g(bt.$$.fragment),rl=l(),lo=s("p"),il=t(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
and, multinomial sampling.`),ll=l(),de=s("p"),dl=t("Apart from "),co=s("code"),cl=t("input_ids"),pl=t(`, all the arguments below will default to the value of the attribute of the same name
inside the `),Kt=s("a"),ml=t("PretrainedConfig"),gl=t(` of the model. The default values indicated are the default values of those
config.`),ul=l(),xt=s("p"),_l=t("Most of these parameters are explained in more detail in "),kt=s("a"),hl=t(`this blog
post`),fl=t("."),bl=l(),po=s("p"),xl=t("Examples:"),kl=l(),g(vt.$$.fragment),this.h()},l(i){const v=hc('[data-svelte="svelte-1phssyn"]',document.head);oe=a(v,"META",{name:!0,content:!0}),v.forEach(o),yt=d(i),E=a(i,"H1",{class:!0});var vo=r(E);J=a(vo,"A",{id:!0,class:!0,href:!0});var vl=r(J);Qt=a(vl,"SPAN",{});var yl=r(Qt);u(Ee.$$.fragment,yl),yl.forEach(o),vl.forEach(o),Bo=d(vo),Yt=a(vo,"SPAN",{});var jl=r(Yt);Wo=n(jl,"Generation"),jl.forEach(o),vo.forEach(o),mo=d(i),y=a(i,"P",{});var T=r(y);Io=n(T,"The methods for auto-regressive text generation, namely "),jt=a(T,"A",{href:!0});var Ml=r(jt);Ho=n(Ml,"generate()"),Ml.forEach(o),Ro=n(T," (for the PyTorch models), "),Mt=a(T,"A",{href:!0});var Ll=r(Mt);Uo=n(Ll,"generate()"),Ll.forEach(o),Vo=n(T," (for the TensorFlow models) and "),Lt=a(T,"A",{href:!0});var wl=r(Lt);Ko=n(wl,"generate()"),wl.forEach(o),Zo=n(T," (for the Flax/JAX models), are implemented in "),wt=a(T,"A",{href:!0});var Tl=r(wt);Xo=n(Tl,"GenerationMixin"),Tl.forEach(o),Jo=n(T,", "),Tt=a(T,"A",{href:!0});var ql=r(Tt);Qo=n(ql,"TFGenerationMixin"),ql.forEach(o),Yo=n(T," and "),qt=a(T,"A",{href:!0});var Ol=r(qt);es=n(Ol,"FlaxGenerationMixin"),Ol.forEach(o),ts=n(T," respectively."),T.forEach(o),go=d(i),L=a(i,"P",{});var K=r(L);ns=n(K,"The "),en=a(K,"CODE",{});var Gl=r(en);os=n(Gl,"GenerationMixin"),Gl.forEach(o),ss=n(K," classes are inherited by the corresponding base model classes, "),tn=a(K,"EM",{});var El=r(tn);as=n(El,"e.g."),El.forEach(o),rs=d(K),Ot=a(K,"A",{href:!0});var Sl=r(Ot);is=n(Sl,"PreTrainedModel"),Sl.forEach(o),ls=n(K,", "),Gt=a(K,"A",{href:!0});var Fl=r(Gt);ds=n(Fl,"TFPreTrainedModel"),Fl.forEach(o),cs=n(K,", and "),Et=a(K,"A",{href:!0});var $l=r(Et);ps=n($l,"FlaxPreTrainedModel"),$l.forEach(o),ms=n(K,` respectively, therefore exposing all
methods for auto-regressive text generation to every model class.`),K.forEach(o),uo=d(i),re=a(i,"H2",{class:!0});var yo=r(re);ke=a(yo,"A",{id:!0,class:!0,href:!0});var Al=r(ke);nn=a(Al,"SPAN",{});var zl=r(nn);u(Se.$$.fragment,zl),zl.forEach(o),Al.forEach(o),gs=d(yo),on=a(yo,"SPAN",{});var Pl=r(on);us=n(Pl,"GenerationMixn"),Pl.forEach(o),yo.forEach(o),_o=d(i),m=a(i,"DIV",{class:!0});var k=r(m);u(Fe.$$.fragment,k),_s=d(k),$e=a(k,"P",{});var jo=r($e);hs=n(jo,"A class containing all functions for auto-regressive text generation, to be used as a mixin in "),St=a(jo,"A",{href:!0});var Nl=r(St);fs=n(Nl,"PreTrainedModel"),Nl.forEach(o),bs=n(jo,"."),jo.forEach(o),xs=d(k),Ae=a(k,"P",{});var Mo=r(Ae);ks=n(Mo,"The class exposes the "),Ft=a(Mo,"A",{href:!0});var Dl=r(Ft);vs=n(Dl,"generate()"),Dl.forEach(o),ys=n(Mo,", which can be used for:"),Mo.forEach(o),js=d(k),O=a(k,"UL",{});var se=r(O);S=a(se,"LI",{});var ce=r(S);sn=a(ce,"EM",{});var Cl=r(sn);Ms=n(Cl,"greedy decoding"),Cl.forEach(o),Ls=n(ce," by calling "),$t=a(ce,"A",{href:!0});var Bl=r($t);ws=n(Bl,"greedy_search()"),Bl.forEach(o),Ts=n(ce," if "),an=a(ce,"CODE",{});var Wl=r(an);qs=n(Wl,"num_beams=1"),Wl.forEach(o),Os=n(ce," and "),rn=a(ce,"CODE",{});var Il=r(rn);Gs=n(Il,"do_sample=False"),Il.forEach(o),Es=n(ce,"."),ce.forEach(o),Ss=d(se),F=a(se,"LI",{});var pe=r(F);ln=a(pe,"EM",{});var Hl=r(ln);Fs=n(Hl,"multinomial sampling"),Hl.forEach(o),$s=n(pe," by calling "),At=a(pe,"A",{href:!0});var Rl=r(At);As=n(Rl,"sample()"),Rl.forEach(o),zs=n(pe," if "),dn=a(pe,"CODE",{});var Ul=r(dn);Ps=n(Ul,"num_beams=1"),Ul.forEach(o),Ns=n(pe," and "),cn=a(pe,"CODE",{});var Vl=r(cn);Ds=n(Vl,"do_sample=True"),Vl.forEach(o),Cs=n(pe,"."),pe.forEach(o),Bs=d(se),$=a(se,"LI",{});var me=r($);pn=a(me,"EM",{});var Kl=r(pn);Ws=n(Kl,"beam-search decoding"),Kl.forEach(o),Is=n(me," by calling "),zt=a(me,"A",{href:!0});var Zl=r(zt);Hs=n(Zl,"beam_search()"),Zl.forEach(o),Rs=n(me," if "),mn=a(me,"CODE",{});var Xl=r(mn);Us=n(Xl,"num_beams>1"),Xl.forEach(o),Vs=n(me," and "),gn=a(me,"CODE",{});var Jl=r(gn);Ks=n(Jl,"do_sample=False"),Jl.forEach(o),Zs=n(me,"."),me.forEach(o),Xs=d(se),A=a(se,"LI",{});var ge=r(A);un=a(ge,"EM",{});var Ql=r(un);Js=n(Ql,"beam-search multinomial sampling"),Ql.forEach(o),Qs=n(ge," by calling "),Pt=a(ge,"A",{href:!0});var Yl=r(Pt);Ys=n(Yl,"beam_sample()"),Yl.forEach(o),ea=n(ge," if "),_n=a(ge,"CODE",{});var ed=r(_n);ta=n(ed,"num_beams>1"),ed.forEach(o),na=n(ge," and "),hn=a(ge,"CODE",{});var td=r(hn);oa=n(td,"do_sample=True"),td.forEach(o),sa=n(ge,"."),ge.forEach(o),aa=d(se),z=a(se,"LI",{});var ue=r(z);fn=a(ue,"EM",{});var nd=r(fn);ra=n(nd,"diverse beam-search decoding"),nd.forEach(o),ia=n(ue," by calling "),Nt=a(ue,"A",{href:!0});var od=r(Nt);la=n(od,"group_beam_search()"),od.forEach(o),da=n(ue,", if "),bn=a(ue,"CODE",{});var sd=r(bn);ca=n(sd,"num_beams>1"),sd.forEach(o),pa=n(ue," and "),xn=a(ue,"CODE",{});var ad=r(xn);ma=n(ad,"num_beam_groups>1"),ad.forEach(o),ga=n(ue,"."),ue.forEach(o),se.forEach(o),ua=d(k),p=a(k,"DIV",{class:!0});var x=r(p);u(ze.$$.fragment,x),_a=d(x),kn=a(x,"P",{});var rd=r(kn);ha=n(rd,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),rd.forEach(o),fa=d(x),G=a(x,"UL",{});var ae=r(G);P=a(ae,"LI",{});var _e=r(P);vn=a(_e,"EM",{});var id=r(vn);ba=n(id,"greedy decoding"),id.forEach(o),xa=n(_e," by calling "),Dt=a(_e,"A",{href:!0});var ld=r(Dt);ka=n(ld,"greedy_search()"),ld.forEach(o),va=n(_e," if "),yn=a(_e,"CODE",{});var dd=r(yn);ya=n(dd,"num_beams=1"),dd.forEach(o),ja=n(_e," and "),jn=a(_e,"CODE",{});var cd=r(jn);Ma=n(cd,"do_sample=False"),cd.forEach(o),La=n(_e,"."),_e.forEach(o),wa=d(ae),N=a(ae,"LI",{});var he=r(N);Mn=a(he,"EM",{});var pd=r(Mn);Ta=n(pd,"multinomial sampling"),pd.forEach(o),qa=n(he," by calling "),Ct=a(he,"A",{href:!0});var md=r(Ct);Oa=n(md,"sample()"),md.forEach(o),Ga=n(he," if "),Ln=a(he,"CODE",{});var gd=r(Ln);Ea=n(gd,"num_beams=1"),gd.forEach(o),Sa=n(he," and "),wn=a(he,"CODE",{});var ud=r(wn);Fa=n(ud,"do_sample=True"),ud.forEach(o),$a=n(he,"."),he.forEach(o),Aa=d(ae),D=a(ae,"LI",{});var fe=r(D);Tn=a(fe,"EM",{});var _d=r(Tn);za=n(_d,"beam-search decoding"),_d.forEach(o),Pa=n(fe," by calling "),Bt=a(fe,"A",{href:!0});var hd=r(Bt);Na=n(hd,"beam_search()"),hd.forEach(o),Da=n(fe," if "),qn=a(fe,"CODE",{});var fd=r(qn);Ca=n(fd,"num_beams>1"),fd.forEach(o),Ba=n(fe," and "),On=a(fe,"CODE",{});var bd=r(On);Wa=n(bd,"do_sample=False"),bd.forEach(o),Ia=n(fe,"."),fe.forEach(o),Ha=d(ae),C=a(ae,"LI",{});var be=r(C);Gn=a(be,"EM",{});var xd=r(Gn);Ra=n(xd,"beam-search multinomial sampling"),xd.forEach(o),Ua=n(be," by calling "),Wt=a(be,"A",{href:!0});var kd=r(Wt);Va=n(kd,"beam_sample()"),kd.forEach(o),Ka=n(be," if "),En=a(be,"CODE",{});var vd=r(En);Za=n(vd,"num_beams>1"),vd.forEach(o),Xa=n(be," and "),Sn=a(be,"CODE",{});var yd=r(Sn);Ja=n(yd,"do_sample=True"),yd.forEach(o),Qa=n(be,"."),be.forEach(o),Ya=d(ae),B=a(ae,"LI",{});var xe=r(B);Fn=a(xe,"EM",{});var jd=r(Fn);er=n(jd,"diverse beam-search decoding"),jd.forEach(o),tr=n(xe," by calling "),It=a(xe,"A",{href:!0});var Md=r(It);nr=n(Md,"group_beam_search()"),Md.forEach(o),or=n(xe,", if "),$n=a(xe,"CODE",{});var Ld=r($n);sr=n(Ld,"num_beams>1"),Ld.forEach(o),ar=n(xe," and "),An=a(xe,"CODE",{});var wd=r(An);rr=n(wd,"num_beam_groups>1"),wd.forEach(o),ir=n(xe,"."),xe.forEach(o),ae.forEach(o),lr=d(x),Q=a(x,"P",{});var je=r(Q);dr=n(je,"Apart from "),zn=a(je,"CODE",{});var Td=r(zn);cr=n(Td,"inputs"),Td.forEach(o),pr=n(je,`, all the arguments below will default to the value of the attribute of the same name
as defined in the model\u2019s config (`),Pn=a(je,"CODE",{});var qd=r(Pn);mr=n(qd,"config.json"),qd.forEach(o),gr=n(je,") which in turn defaults to the "),Ht=a(je,"A",{href:!0});var Od=r(Ht);ur=n(Od,"PretrainedConfig"),Od.forEach(o),_r=n(je," of the model."),je.forEach(o),hr=d(x),Pe=a(x,"P",{});var Lo=r(Pe);fr=n(Lo,"Most of these parameters are explained in more detail in "),Ne=a(Lo,"A",{href:!0,rel:!0});var Gd=r(Ne);br=n(Gd,"this blog post"),Gd.forEach(o),xr=n(Lo,"."),Lo.forEach(o),kr=d(x),Nn=a(x,"P",{});var Ed=r(Nn);vr=n(Ed,"Examples:"),Ed.forEach(o),yr=d(x),Dn=a(x,"P",{});var Sd=r(Dn);jr=n(Sd,"Greedy Decoding:"),Sd.forEach(o),Mr=d(x),u(De.$$.fragment,x),Lr=d(x),Cn=a(x,"P",{});var Fd=r(Cn);wr=n(Fd,"Multinomial Sampling:"),Fd.forEach(o),Tr=d(x),u(Ce.$$.fragment,x),qr=d(x),Bn=a(x,"P",{});var $d=r(Bn);Or=n($d,"Beam-search decoding:"),$d.forEach(o),Gr=d(x),u(Be.$$.fragment,x),x.forEach(o),Er=d(k),W=a(k,"DIV",{class:!0});var Me=r(W);u(We.$$.fragment,Me),Sr=d(Me),Ie=a(Me,"P",{});var wo=r(Ie);Fr=n(wo,"Generates sequences of token ids for models with a language modeling head using "),Wn=a(wo,"STRONG",{});var Ad=r(Wn);$r=n(Ad,"greedy decoding"),Ad.forEach(o),Ar=n(wo," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),wo.forEach(o),zr=d(Me),In=a(Me,"P",{});var zd=r(In);Pr=n(zd,"Examples:"),zd.forEach(o),Nr=d(Me),u(He.$$.fragment,Me),Me.forEach(o),Dr=d(k),I=a(k,"DIV",{class:!0});var Le=r(I);u(Re.$$.fragment,Le),Cr=d(Le),Ue=a(Le,"P",{});var To=r(Ue);Br=n(To,"Generates sequences of token ids for models with a language modeling head using "),Hn=a(To,"STRONG",{});var Pd=r(Hn);Wr=n(Pd,"multinomial sampling"),Pd.forEach(o),Ir=n(To," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),To.forEach(o),Hr=d(Le),Rn=a(Le,"P",{});var Nd=r(Rn);Rr=n(Nd,"Examples:"),Nd.forEach(o),Ur=d(Le),u(Ve.$$.fragment,Le),Le.forEach(o),Vr=d(k),H=a(k,"DIV",{class:!0});var we=r(H);u(Ke.$$.fragment,we),Kr=d(we),Ze=a(we,"P",{});var qo=r(Ze);Zr=n(qo,"Generates sequences of token ids for models with a language modeling head using "),Un=a(qo,"STRONG",{});var Dd=r(Un);Xr=n(Dd,"beam search decoding"),Dd.forEach(o),Jr=n(qo," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),qo.forEach(o),Qr=d(we),Vn=a(we,"P",{});var Cd=r(Vn);Yr=n(Cd,"Examples:"),Cd.forEach(o),ei=d(we),u(Xe.$$.fragment,we),we.forEach(o),ti=d(k),R=a(k,"DIV",{class:!0});var Te=r(R);u(Je.$$.fragment,Te),ni=d(Te),Qe=a(Te,"P",{});var Oo=r(Qe);oi=n(Oo,"Generates sequences of token ids for models with a language modeling head using "),Kn=a(Oo,"STRONG",{});var Bd=r(Kn);si=n(Bd,"beam search multinomial sampling"),Bd.forEach(o),ai=n(Oo," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Oo.forEach(o),ri=d(Te),Zn=a(Te,"P",{});var Wd=r(Zn);ii=n(Wd,"Examples:"),Wd.forEach(o),li=d(Te),u(Ye.$$.fragment,Te),Te.forEach(o),di=d(k),U=a(k,"DIV",{class:!0});var qe=r(U);u(et.$$.fragment,qe),ci=d(qe),tt=a(qe,"P",{});var Go=r(tt);pi=n(Go,"Generates sequences of token ids for models with a language modeling head using "),Xn=a(Go,"STRONG",{});var Id=r(Xn);mi=n(Id,"diverse beam search decoding"),Id.forEach(o),gi=n(Go," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Go.forEach(o),ui=d(qe),Jn=a(qe,"P",{});var Hd=r(Jn);_i=n(Hd,"Examples:"),Hd.forEach(o),hi=d(qe),u(nt.$$.fragment,qe),qe.forEach(o),fi=d(k),V=a(k,"DIV",{class:!0});var Oe=r(V);u(ot.$$.fragment,Oe),bi=d(Oe),st=a(Oe,"P",{});var Eo=r(st);xi=n(Eo,"Generates sequences of token ids for models with a language modeling head using "),Qn=a(Eo,"STRONG",{});var Rd=r(Qn);ki=n(Rd,"constrained beam search decoding"),Rd.forEach(o),vi=n(Eo," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Eo.forEach(o),yi=d(Oe),Yn=a(Oe,"P",{});var Ud=r(Yn);ji=n(Ud,"Examples:"),Ud.forEach(o),Mi=d(Oe),u(at.$$.fragment,Oe),Oe.forEach(o),k.forEach(o),ho=d(i),ie=a(i,"H2",{class:!0});var So=r(ie);ve=a(So,"A",{id:!0,class:!0,href:!0});var Vd=r(ve);eo=a(Vd,"SPAN",{});var Kd=r(eo);u(rt.$$.fragment,Kd),Kd.forEach(o),Vd.forEach(o),Li=d(So),to=a(So,"SPAN",{});var Zd=r(to);wi=n(Zd,"TFGenerationMixn"),Zd.forEach(o),So.forEach(o),fo=d(i),Y=a(i,"DIV",{class:!0});var Zt=r(Y);u(it.$$.fragment,Zt),Ti=d(Zt),lt=a(Zt,"P",{});var Fo=r(lt);qi=n(Fo,"A class containing all of the functions supporting generation, to be used as a mixin in "),Rt=a(Fo,"A",{href:!0});var Xd=r(Rt);Oi=n(Xd,"TFPreTrainedModel"),Xd.forEach(o),Gi=n(Fo,"."),Fo.forEach(o),Ei=d(Zt),j=a(Zt,"DIV",{class:!0});var q=r(j);u(dt.$$.fragment,q),Si=d(q),no=a(q,"P",{});var Jd=r(no);Fi=n(Jd,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),Jd.forEach(o),$i=d(q),ct=a(q,"P",{});var $o=r(ct);Ai=n($o,"Adapted in part from "),pt=a($o,"A",{href:!0,rel:!0});var Qd=r(pt);zi=n(Qd,`Facebook\u2019s XLM beam search
code`),Qd.forEach(o),Pi=n($o,"."),$o.forEach(o),Ni=d(q),ee=a(q,"P",{});var Ge=r(ee);Di=n(Ge,"Apart from "),oo=a(Ge,"CODE",{});var Yd=r(oo);Ci=n(Yd,"input_ids"),Yd.forEach(o),Bi=n(Ge," and "),so=a(Ge,"CODE",{});var ec=r(so);Wi=n(ec,"attention_mask"),ec.forEach(o),Ii=n(Ge,`, all the arguments below will default to the value of the attribute
of the same name inside the `),Ut=a(Ge,"A",{href:!0});var tc=r(Ut);Hi=n(tc,"PretrainedConfig"),tc.forEach(o),Ri=n(Ge,` of the model. The default values indicated are the default
values of those config.`),Ge.forEach(o),Ui=d(q),mt=a(q,"P",{});var Ao=r(mt);Vi=n(Ao,"Most of these parameters are explained in more detail in "),gt=a(Ao,"A",{href:!0,rel:!0});var nc=r(gt);Ki=n(nc,`this blog
post`),nc.forEach(o),Zi=n(Ao,"."),Ao.forEach(o),Xi=d(q),ao=a(q,"P",{});var oc=r(ao);Ji=n(oc,"Examples:"),oc.forEach(o),Qi=d(q),u(ut.$$.fragment,q),q.forEach(o),Zt.forEach(o),bo=d(i),le=a(i,"H2",{class:!0});var zo=r(le);ye=a(zo,"A",{id:!0,class:!0,href:!0});var sc=r(ye);ro=a(sc,"SPAN",{});var ac=r(ro);u(_t.$$.fragment,ac),ac.forEach(o),sc.forEach(o),Yi=d(zo),io=a(zo,"SPAN",{});var rc=r(io);el=n(rc,"FlaxGenerationMixn"),rc.forEach(o),zo.forEach(o),xo=d(i),te=a(i,"DIV",{class:!0});var Xt=r(te);u(ht.$$.fragment,Xt),tl=d(Xt),ft=a(Xt,"P",{});var Po=r(ft);nl=n(Po,"A class containing all of the functions supporting generation, to be used as a mixin in "),Vt=a(Po,"A",{href:!0});var ic=r(Vt);ol=n(ic,"FlaxPreTrainedModel"),ic.forEach(o),sl=n(Po,"."),Po.forEach(o),al=d(Xt),w=a(Xt,"DIV",{class:!0});var Z=r(w);u(bt.$$.fragment,Z),rl=d(Z),lo=a(Z,"P",{});var lc=r(lo);il=n(lc,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
and, multinomial sampling.`),lc.forEach(o),ll=d(Z),de=a(Z,"P",{});var Jt=r(de);dl=n(Jt,"Apart from "),co=a(Jt,"CODE",{});var dc=r(co);cl=n(dc,"input_ids"),dc.forEach(o),pl=n(Jt,`, all the arguments below will default to the value of the attribute of the same name
inside the `),Kt=a(Jt,"A",{href:!0});var cc=r(Kt);ml=n(cc,"PretrainedConfig"),cc.forEach(o),gl=n(Jt,` of the model. The default values indicated are the default values of those
config.`),Jt.forEach(o),ul=d(Z),xt=a(Z,"P",{});var No=r(xt);_l=n(No,"Most of these parameters are explained in more detail in "),kt=a(No,"A",{href:!0,rel:!0});var pc=r(kt);hl=n(pc,`this blog
post`),pc.forEach(o),fl=n(No,"."),No.forEach(o),bl=d(Z),po=a(Z,"P",{});var mc=r(po);xl=n(mc,"Examples:"),mc.forEach(o),kl=d(Z),u(vt.$$.fragment,Z),Z.forEach(o),Xt.forEach(o),this.h()},h(){c(oe,"name","hf:doc:metadata"),c(oe,"content",JSON.stringify(xc)),c(J,"id","generation"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#generation"),c(E,"class","relative group"),c(jt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(Mt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin.generate"),c(Lt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),c(wt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin"),c(Tt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin"),c(qt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin"),c(Ot,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.PreTrainedModel"),c(Gt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.TFPreTrainedModel"),c(Et,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ke,"id","transformers.generation_utils.GenerationMixin"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#transformers.generation_utils.GenerationMixin"),c(re,"class","relative group"),c(St,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.PreTrainedModel"),c(Ft,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c($t,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),c(At,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),c(zt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),c(Pt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),c(Nt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),c(Dt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),c(Ct,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),c(Bt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),c(Wt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),c(It,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),c(Ht,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ne,"href","https://huggingface.co/blog/how-to-generate"),c(Ne,"rel","nofollow"),c(p,"class","docstring"),c(W,"class","docstring"),c(I,"class","docstring"),c(H,"class","docstring"),c(R,"class","docstring"),c(U,"class","docstring"),c(V,"class","docstring"),c(m,"class","docstring"),c(ve,"id","transformers.generation_tf_utils.TFGenerationMixin"),c(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ve,"href","#transformers.generation_tf_utils.TFGenerationMixin"),c(ie,"class","relative group"),c(Rt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.TFPreTrainedModel"),c(pt,"href","https://github.com/facebookresearch/XLM/blob/9e6f6814d17be4fe5b15f2e6c43eb2b2d76daeb4/src/model/transformer.py#L529"),c(pt,"rel","nofollow"),c(Ut,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),c(gt,"href","https://huggingface.co/blog/how-to-generate"),c(gt,"rel","nofollow"),c(j,"class","docstring"),c(Y,"class","docstring"),c(ye,"id","transformers.generation_flax_utils.FlaxGenerationMixin"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.generation_flax_utils.FlaxGenerationMixin"),c(le,"class","relative group"),c(Vt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Kt,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),c(kt,"href","https://huggingface.co/blog/how-to-generate"),c(kt,"rel","nofollow"),c(w,"class","docstring"),c(te,"class","docstring")},m(i,v){e(document.head,oe),M(i,yt,v),M(i,E,v),e(E,J),e(J,Qt),_(Ee,Qt,null),e(E,Bo),e(E,Yt),e(Yt,Wo),M(i,mo,v),M(i,y,v),e(y,Io),e(y,jt),e(jt,Ho),e(y,Ro),e(y,Mt),e(Mt,Uo),e(y,Vo),e(y,Lt),e(Lt,Ko),e(y,Zo),e(y,wt),e(wt,Xo),e(y,Jo),e(y,Tt),e(Tt,Qo),e(y,Yo),e(y,qt),e(qt,es),e(y,ts),M(i,go,v),M(i,L,v),e(L,ns),e(L,en),e(en,os),e(L,ss),e(L,tn),e(tn,as),e(L,rs),e(L,Ot),e(Ot,is),e(L,ls),e(L,Gt),e(Gt,ds),e(L,cs),e(L,Et),e(Et,ps),e(L,ms),M(i,uo,v),M(i,re,v),e(re,ke),e(ke,nn),_(Se,nn,null),e(re,gs),e(re,on),e(on,us),M(i,_o,v),M(i,m,v),_(Fe,m,null),e(m,_s),e(m,$e),e($e,hs),e($e,St),e(St,fs),e($e,bs),e(m,xs),e(m,Ae),e(Ae,ks),e(Ae,Ft),e(Ft,vs),e(Ae,ys),e(m,js),e(m,O),e(O,S),e(S,sn),e(sn,Ms),e(S,Ls),e(S,$t),e($t,ws),e(S,Ts),e(S,an),e(an,qs),e(S,Os),e(S,rn),e(rn,Gs),e(S,Es),e(O,Ss),e(O,F),e(F,ln),e(ln,Fs),e(F,$s),e(F,At),e(At,As),e(F,zs),e(F,dn),e(dn,Ps),e(F,Ns),e(F,cn),e(cn,Ds),e(F,Cs),e(O,Bs),e(O,$),e($,pn),e(pn,Ws),e($,Is),e($,zt),e(zt,Hs),e($,Rs),e($,mn),e(mn,Us),e($,Vs),e($,gn),e(gn,Ks),e($,Zs),e(O,Xs),e(O,A),e(A,un),e(un,Js),e(A,Qs),e(A,Pt),e(Pt,Ys),e(A,ea),e(A,_n),e(_n,ta),e(A,na),e(A,hn),e(hn,oa),e(A,sa),e(O,aa),e(O,z),e(z,fn),e(fn,ra),e(z,ia),e(z,Nt),e(Nt,la),e(z,da),e(z,bn),e(bn,ca),e(z,pa),e(z,xn),e(xn,ma),e(z,ga),e(m,ua),e(m,p),_(ze,p,null),e(p,_a),e(p,kn),e(kn,ha),e(p,fa),e(p,G),e(G,P),e(P,vn),e(vn,ba),e(P,xa),e(P,Dt),e(Dt,ka),e(P,va),e(P,yn),e(yn,ya),e(P,ja),e(P,jn),e(jn,Ma),e(P,La),e(G,wa),e(G,N),e(N,Mn),e(Mn,Ta),e(N,qa),e(N,Ct),e(Ct,Oa),e(N,Ga),e(N,Ln),e(Ln,Ea),e(N,Sa),e(N,wn),e(wn,Fa),e(N,$a),e(G,Aa),e(G,D),e(D,Tn),e(Tn,za),e(D,Pa),e(D,Bt),e(Bt,Na),e(D,Da),e(D,qn),e(qn,Ca),e(D,Ba),e(D,On),e(On,Wa),e(D,Ia),e(G,Ha),e(G,C),e(C,Gn),e(Gn,Ra),e(C,Ua),e(C,Wt),e(Wt,Va),e(C,Ka),e(C,En),e(En,Za),e(C,Xa),e(C,Sn),e(Sn,Ja),e(C,Qa),e(G,Ya),e(G,B),e(B,Fn),e(Fn,er),e(B,tr),e(B,It),e(It,nr),e(B,or),e(B,$n),e($n,sr),e(B,ar),e(B,An),e(An,rr),e(B,ir),e(p,lr),e(p,Q),e(Q,dr),e(Q,zn),e(zn,cr),e(Q,pr),e(Q,Pn),e(Pn,mr),e(Q,gr),e(Q,Ht),e(Ht,ur),e(Q,_r),e(p,hr),e(p,Pe),e(Pe,fr),e(Pe,Ne),e(Ne,br),e(Pe,xr),e(p,kr),e(p,Nn),e(Nn,vr),e(p,yr),e(p,Dn),e(Dn,jr),e(p,Mr),_(De,p,null),e(p,Lr),e(p,Cn),e(Cn,wr),e(p,Tr),_(Ce,p,null),e(p,qr),e(p,Bn),e(Bn,Or),e(p,Gr),_(Be,p,null),e(m,Er),e(m,W),_(We,W,null),e(W,Sr),e(W,Ie),e(Ie,Fr),e(Ie,Wn),e(Wn,$r),e(Ie,Ar),e(W,zr),e(W,In),e(In,Pr),e(W,Nr),_(He,W,null),e(m,Dr),e(m,I),_(Re,I,null),e(I,Cr),e(I,Ue),e(Ue,Br),e(Ue,Hn),e(Hn,Wr),e(Ue,Ir),e(I,Hr),e(I,Rn),e(Rn,Rr),e(I,Ur),_(Ve,I,null),e(m,Vr),e(m,H),_(Ke,H,null),e(H,Kr),e(H,Ze),e(Ze,Zr),e(Ze,Un),e(Un,Xr),e(Ze,Jr),e(H,Qr),e(H,Vn),e(Vn,Yr),e(H,ei),_(Xe,H,null),e(m,ti),e(m,R),_(Je,R,null),e(R,ni),e(R,Qe),e(Qe,oi),e(Qe,Kn),e(Kn,si),e(Qe,ai),e(R,ri),e(R,Zn),e(Zn,ii),e(R,li),_(Ye,R,null),e(m,di),e(m,U),_(et,U,null),e(U,ci),e(U,tt),e(tt,pi),e(tt,Xn),e(Xn,mi),e(tt,gi),e(U,ui),e(U,Jn),e(Jn,_i),e(U,hi),_(nt,U,null),e(m,fi),e(m,V),_(ot,V,null),e(V,bi),e(V,st),e(st,xi),e(st,Qn),e(Qn,ki),e(st,vi),e(V,yi),e(V,Yn),e(Yn,ji),e(V,Mi),_(at,V,null),M(i,ho,v),M(i,ie,v),e(ie,ve),e(ve,eo),_(rt,eo,null),e(ie,Li),e(ie,to),e(to,wi),M(i,fo,v),M(i,Y,v),_(it,Y,null),e(Y,Ti),e(Y,lt),e(lt,qi),e(lt,Rt),e(Rt,Oi),e(lt,Gi),e(Y,Ei),e(Y,j),_(dt,j,null),e(j,Si),e(j,no),e(no,Fi),e(j,$i),e(j,ct),e(ct,Ai),e(ct,pt),e(pt,zi),e(ct,Pi),e(j,Ni),e(j,ee),e(ee,Di),e(ee,oo),e(oo,Ci),e(ee,Bi),e(ee,so),e(so,Wi),e(ee,Ii),e(ee,Ut),e(Ut,Hi),e(ee,Ri),e(j,Ui),e(j,mt),e(mt,Vi),e(mt,gt),e(gt,Ki),e(mt,Zi),e(j,Xi),e(j,ao),e(ao,Ji),e(j,Qi),_(ut,j,null),M(i,bo,v),M(i,le,v),e(le,ye),e(ye,ro),_(_t,ro,null),e(le,Yi),e(le,io),e(io,el),M(i,xo,v),M(i,te,v),_(ht,te,null),e(te,tl),e(te,ft),e(ft,nl),e(ft,Vt),e(Vt,ol),e(ft,sl),e(te,al),e(te,w),_(bt,w,null),e(w,rl),e(w,lo),e(lo,il),e(w,ll),e(w,de),e(de,dl),e(de,co),e(co,cl),e(de,pl),e(de,Kt),e(Kt,ml),e(de,gl),e(w,ul),e(w,xt),e(xt,_l),e(xt,kt),e(kt,hl),e(xt,fl),e(w,bl),e(w,po),e(po,xl),e(w,kl),_(vt,w,null),ko=!0},p:fc,i(i){ko||(h(Ee.$$.fragment,i),h(Se.$$.fragment,i),h(Fe.$$.fragment,i),h(ze.$$.fragment,i),h(De.$$.fragment,i),h(Ce.$$.fragment,i),h(Be.$$.fragment,i),h(We.$$.fragment,i),h(He.$$.fragment,i),h(Re.$$.fragment,i),h(Ve.$$.fragment,i),h(Ke.$$.fragment,i),h(Xe.$$.fragment,i),h(Je.$$.fragment,i),h(Ye.$$.fragment,i),h(et.$$.fragment,i),h(nt.$$.fragment,i),h(ot.$$.fragment,i),h(at.$$.fragment,i),h(rt.$$.fragment,i),h(it.$$.fragment,i),h(dt.$$.fragment,i),h(ut.$$.fragment,i),h(_t.$$.fragment,i),h(ht.$$.fragment,i),h(bt.$$.fragment,i),h(vt.$$.fragment,i),ko=!0)},o(i){f(Ee.$$.fragment,i),f(Se.$$.fragment,i),f(Fe.$$.fragment,i),f(ze.$$.fragment,i),f(De.$$.fragment,i),f(Ce.$$.fragment,i),f(Be.$$.fragment,i),f(We.$$.fragment,i),f(He.$$.fragment,i),f(Re.$$.fragment,i),f(Ve.$$.fragment,i),f(Ke.$$.fragment,i),f(Xe.$$.fragment,i),f(Je.$$.fragment,i),f(Ye.$$.fragment,i),f(et.$$.fragment,i),f(nt.$$.fragment,i),f(ot.$$.fragment,i),f(at.$$.fragment,i),f(rt.$$.fragment,i),f(it.$$.fragment,i),f(dt.$$.fragment,i),f(ut.$$.fragment,i),f(_t.$$.fragment,i),f(ht.$$.fragment,i),f(bt.$$.fragment,i),f(vt.$$.fragment,i),ko=!1},d(i){o(oe),i&&o(yt),i&&o(E),b(Ee),i&&o(mo),i&&o(y),i&&o(go),i&&o(L),i&&o(uo),i&&o(re),b(Se),i&&o(_o),i&&o(m),b(Fe),b(ze),b(De),b(Ce),b(Be),b(We),b(He),b(Re),b(Ve),b(Ke),b(Xe),b(Je),b(Ye),b(et),b(nt),b(ot),b(at),i&&o(ho),i&&o(ie),b(rt),i&&o(fo),i&&o(Y),b(it),b(dt),b(ut),i&&o(bo),i&&o(le),b(_t),i&&o(xo),i&&o(te),b(ht),b(bt),b(vt)}}}const xc={local:"generation",sections:[{local:"transformers.generation_utils.GenerationMixin",title:"GenerationMixn"},{local:"transformers.generation_tf_utils.TFGenerationMixin",title:"TFGenerationMixn"},{local:"transformers.generation_flax_utils.FlaxGenerationMixin",title:"FlaxGenerationMixn"}],title:"Generation"};function kc(Co,oe,yt){let{fw:E}=oe;return Co.$$set=J=>{"fw"in J&&yt(0,E=J.fw)},[E]}class wc extends gc{constructor(oe){super();uc(this,oe,kc,bc,_c,{fw:0})}}export{wc as default,xc as metadata};
