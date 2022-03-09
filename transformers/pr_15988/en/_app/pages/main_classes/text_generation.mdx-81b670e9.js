import{S as Am,i as zm,s as Pm,e as s,k as l,w as g,t,M as Dm,c as a,d as o,m as d,a as r,x as _,h as n,b as c,F as e,g as L,y as u,L as Nm,q as h,o as f,B as b}from"../../chunks/vendor-4833417e.js";import{D as oe}from"../../chunks/Docstring-4f315ed9.js";import{C as de}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Os}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Cm(qs){let ce,Nt,F,se,fn,Ve,Gs,bn,Ss,ts,y,Fs,Ct,$s,As,It,zs,Ps,Wt,Ds,Ns,Bt,Cs,Is,Ht,Ws,Bs,Rt,Hs,Rs,ns,w,Us,xn,Vs,Ks,kn,Zs,Xs,Ut,Js,Qs,Vt,Ys,ea,Kt,ta,na,os,_e,Ae,vn,Ke,oa,yn,sa,ss,m,Ze,aa,Xe,ra,Zt,ia,la,da,Je,ca,Xt,pa,ma,ga,G,$,jn,_a,ua,Jt,ha,fa,Mn,ba,xa,Ln,ka,va,ya,A,wn,ja,Ma,Qt,La,wa,Tn,Ta,Ea,En,Oa,qa,Ga,z,On,Sa,Fa,Yt,$a,Aa,qn,za,Pa,Gn,Da,Na,Ca,P,Sn,Ia,Wa,en,Ba,Ha,Fn,Ra,Ua,$n,Va,Ka,Za,D,An,Xa,Ja,tn,Qa,Ya,zn,er,tr,Pn,nr,or,sr,p,Qe,ar,Dn,rr,ir,S,N,Nn,lr,dr,nn,cr,pr,Cn,mr,gr,In,_r,ur,hr,C,Wn,fr,br,on,xr,kr,Bn,vr,yr,Hn,jr,Mr,Lr,I,Rn,wr,Tr,sn,Er,Or,Un,qr,Gr,Vn,Sr,Fr,$r,W,Kn,Ar,zr,an,Pr,Dr,Zn,Nr,Cr,Xn,Ir,Wr,Br,B,Jn,Hr,Rr,rn,Ur,Vr,Qn,Kr,Zr,Yn,Xr,Jr,Qr,ae,Yr,eo,ei,ti,to,ni,oi,ln,si,ai,ri,Ye,ii,et,li,di,ci,no,pi,mi,oo,gi,_i,tt,ui,so,hi,fi,nt,bi,ao,xi,ki,ot,vi,H,st,yi,at,ji,ro,Mi,Li,wi,io,Ti,Ei,rt,Oi,R,it,qi,lt,Gi,lo,Si,Fi,$i,co,Ai,zi,dt,Pi,U,ct,Di,pt,Ni,po,Ci,Ii,Wi,mo,Bi,Hi,mt,Ri,V,gt,Ui,_t,Vi,go,Ki,Zi,Xi,_o,Ji,Qi,ut,Yi,K,ht,el,ft,tl,uo,nl,ol,sl,ho,al,rl,bt,il,Z,xt,ll,kt,dl,fo,cl,pl,ml,bo,gl,_l,vt,as,ue,ze,xo,yt,ul,ko,hl,rs,re,jt,fl,Mt,bl,dn,xl,kl,vl,j,Lt,yl,vo,jl,Ml,wt,Ll,Tt,wl,Tl,El,ie,Ol,yo,ql,Gl,jo,Sl,Fl,cn,$l,Al,zl,Et,Pl,Ot,Dl,Nl,Cl,Mo,Il,Wl,qt,is,he,Pe,Lo,Gt,Bl,wo,Hl,ls,T,St,Rl,Ft,Ul,pn,Vl,Kl,Zl,$t,Xl,mn,Jl,Ql,Yl,fe,X,To,ed,td,Eo,nd,od,Oo,sd,ad,qo,rd,id,ld,J,Go,dd,cd,So,pd,md,Fo,gd,_d,$o,ud,hd,fd,Q,Ao,bd,xd,zo,kd,vd,Po,yd,jd,Do,Md,Ld,wd,M,At,Td,No,Ed,Od,be,Y,Co,qd,Gd,Io,Sd,Fd,Wo,$d,Ad,Bo,zd,Pd,Dd,ee,Ho,Nd,Cd,Ro,Id,Wd,Uo,Bd,Hd,Vo,Rd,Ud,Vd,te,Ko,Kd,Zd,Zo,Xd,Jd,Xo,Qd,Yd,Jo,ec,tc,nc,le,oc,Qo,sc,ac,Yo,rc,ic,gn,lc,dc,cc,zt,pc,Pt,mc,gc,_c,es,uc,hc,Dt,ds;return Ve=new Os({}),Ke=new Os({}),Ze=new oe({props:{name:"class transformers.generation_utils.GenerationMixin",anchor:"transformers.generation_utils.GenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L378"}}),Qe=new oe({props:{name:"generate",anchor:"transformers.generation_utils.GenerationMixin.generate",parameters:[{name:"inputs",val:": typing.Optional[torch.Tensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"typical_p",val:": typing.Optional[float] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.Iterable[int]] = None"},{name:"force_words_ids",val:": typing.Union[typing.Iterable[int], typing.Iterable[typing.Iterable[int]], NoneType] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"max_time",val:": typing.Optional[float] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Union[typing.Callable[[int, torch.Tensor], typing.List[int]], NoneType] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = []"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = []"},{name:"constraints",val:": typing.Optional[typing.List[transformers.generation_beam_constraints.Constraint]] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L818",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.generate.inputs",description:`<strong>inputs</strong> (<code>torch.Tensor</code> of varying shape depending on the modality, <em>optional</em>) &#x2014;
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
`}}),tt=new de({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

prompt = "Today I believe we can finally"
input_ids = tokenizer(prompt, return_tensors="pt").input_ids

# generate up to 30 tokens
outputs = model.generate(input_ids, do_sample=False, max_length=30)
tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Today I believe we can finally&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generate up to 30 tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids, do_sample=<span class="hljs-literal">False</span>, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Today I believe we can finally get to the point where we can make a difference in the lives of the people of the United States of America.\\n&#x27;</span>]`}}),nt=new de({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

prompt = "Today I believe we can finally"
input_ids = tokenizer(prompt, return_tensors="pt").input_ids

# sample up to 30 tokens
torch.manual_seed(0)
outputs = model.generate(input_ids, do_sample=True, max_length=30)
tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Today I believe we can finally&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample up to 30 tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids, do_sample=<span class="hljs-literal">True</span>, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Today I believe we can finally get rid of discrimination,&quot; said Rep. Mark Pocan (D-Wis.).\\n\\n&quot;Just look at the&#x27;</span>]`}}),ot=new de({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

tokenizer = AutoTokenizer.from_pretrained("Helsinki-NLP/opus-mt-en-de")
model = AutoModelForSeq2SeqLM.from_pretrained("Helsinki-NLP/opus-mt-en-de")

sentence = "Paris is one of the densest populated areas in Europe."
input_ids = tokenizer(sentence, return_tensors="pt").input_ids

outputs = model.generate(input_ids)
tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>sentence = <span class="hljs-string">&quot;Paris is one of the densest populated areas in Europe.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Paris ist eines der dichtesten besiedelten Gebiete Europas.&#x27;</span>]`}}),st=new oe({props:{name:"greedy_search",anchor:"transformers.generation_utils.GenerationMixin.greedy_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L1458",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),rt=new de({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    StoppingCriteriaList,
    MaxLengthCriteria,
)

tokenizer = AutoTokenizer.from_pretrained("gpt2")
model = AutoModelForCausalLM.from_pretrained("gpt2")

# set pad_token_id to eos_token_id because GPT2 does not have a EOS token
model.config.pad_token_id = model.config.eos_token_id

input_prompt = "It might be possible to"
input_ids = tokenizer(input_prompt, return_tensors="pt").input_ids

# instantiate logits processors
logits_processor = LogitsProcessorList(
    [
        MinLengthLogitsProcessor(10, eos_token_id=model.config.eos_token_id),
    ]
)
stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=20)])

outputs = model.greedy_search(
    input_ids, logits_processor=logits_processor, stopping_criteria=stopping_criteria
)

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForCausalLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    StoppingCriteriaList,
<span class="hljs-meta">... </span>    MaxLengthCriteria,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set pad_token_id to eos_token_id because GPT2 does not have a EOS token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>input_prompt = <span class="hljs-string">&quot;It might be possible to&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">10</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=<span class="hljs-number">20</span>)])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.greedy_search(
<span class="hljs-meta">... </span>    input_ids, logits_processor=logits_processor, stopping_criteria=stopping_criteria
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&quot;It might be possible to get a better understanding of the nature of the problem, but it&#x27;s not&quot;</span>]`}}),it=new oe({props:{name:"sample",anchor:"transformers.generation_utils.GenerationMixin.sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L1690",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),dt=new de({props:{code:`from transformers import (
    AutoTokenizer,
    AutoModelForCausalLM,
    LogitsProcessorList,
    MinLengthLogitsProcessor,
    TopKLogitsWarper,
    TemperatureLogitsWarper,
    StoppingCriteriaList,
    MaxLengthCriteria,
)
import torch

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

stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=20)])

torch.manual_seed(0)
outputs = model.sample(
    input_ids,
    logits_processor=logits_processor,
    logits_warper=logits_warper,
    stopping_criteria=stopping_criteria,
)

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForCausalLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    TopKLogitsWarper,
<span class="hljs-meta">... </span>    TemperatureLogitsWarper,
<span class="hljs-meta">... </span>    StoppingCriteriaList,
<span class="hljs-meta">... </span>    MaxLengthCriteria,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

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

<span class="hljs-meta">&gt;&gt;&gt; </span>stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=<span class="hljs-number">20</span>)])

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.sample(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    logits_processor=logits_processor,
<span class="hljs-meta">... </span>    logits_warper=logits_warper,
<span class="hljs-meta">... </span>    stopping_criteria=stopping_criteria,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Today is a beautiful day, and a wonderful day.\\n\\nI was lucky enough to meet the&#x27;</span>]`}}),ct=new oe({props:{name:"beam_search",anchor:"transformers.generation_utils.GenerationMixin.beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L1946",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),mt=new de({props:{code:`from transformers import (
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

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),gt=new oe({props:{name:"beam_sample",anchor:"transformers.generation_utils.GenerationMixin.beam_sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L2258",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ut=new de({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),ht=new oe({props:{name:"group_beam_search",anchor:"transformers.generation_utils.GenerationMixin.group_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L2580",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),bt=new de({props:{code:`from transformers import (
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

tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
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

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),xt=new oe({props:{name:"constrained_beam_search",anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"constrained_beam_scorer",val:": ConstrainedBeamSearchScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L2945",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),vt=new de({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt sind Sie?&#x27;</span>]`}}),yt=new Os({}),jt=new oe({props:{name:"class transformers.generation_tf_utils.TFGenerationMixin",anchor:"transformers.generation_tf_utils.TFGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_tf_utils.py#L342"}}),Lt=new oe({props:{name:"generate",anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate",parameters:[{name:"input_ids",val:" = None"},{name:"max_length",val:" = None"},{name:"min_length",val:" = None"},{name:"do_sample",val:" = None"},{name:"early_stopping",val:" = None"},{name:"num_beams",val:" = None"},{name:"temperature",val:" = None"},{name:"top_k",val:" = None"},{name:"top_p",val:" = None"},{name:"repetition_penalty",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"forced_bos_token_id",val:" = None"},{name:"forced_eos_token_id",val:" = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_tf_utils.py#L362",parametersDescription:[{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.input_ids",description:"<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, `(batch_size, sequence_length, &#x2014;",name:"input_ids"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.feature_dim)`",description:`<strong>feature_dim)\`</strong> or <code>(batch_size, num_channels, height, width)</code>, <em>optional</em>) &#x2014;
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
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"forced_eos_token_id"}]}}),qt=new de({props:{code:`tokenizer = AutoTokenizer.from_pretrained("distilgpt2")  # Initialize tokenizer
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
)  <span class="hljs-comment"># generate sequences without allowing bad_words to be generated</span>`}}),Gt=new Os({}),St=new oe({props:{name:"class transformers.generation_flax_utils.FlaxGenerationMixin",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_flax_utils.py#L119"}}),At=new oe({props:{name:"generate",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate",parameters:[{name:"input_ids",val:": ndarray"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"prng_key",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"trace",val:": bool = True"},{name:"params",val:": typing.Union[typing.Dict[str, jax._src.numpy.lax_numpy.ndarray], NoneType] = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_flax_utils.py#L163",parametersDescription:[{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Dt=new de({props:{code:`from transformers import AutoTokenizer, FlaxAutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("distilgpt2")
model = FlaxAutoModelForCausalLM.from_pretrained("distilgpt2")
input_context = "The dog"
# encode input context
input_ids = tokenizer(input_context, return_tensors="np").input_ids
# generate candidates using sampling
outputs = model.generate(input_ids=input_ids, max_length=20, top_k=30, do_sample=True)
tokenizer.batch_decode(outputs, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxAutoModelForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxAutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_context = <span class="hljs-string">&quot;The dog&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode input context</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_context, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># generate candidates using sampling</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids=input_ids, max_length=<span class="hljs-number">20</span>, top_k=<span class="hljs-number">30</span>, do_sample=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){ce=s("meta"),Nt=l(),F=s("h1"),se=s("a"),fn=s("span"),g(Ve.$$.fragment),Gs=l(),bn=s("span"),Ss=t("Generation"),ts=l(),y=s("p"),Fs=t("The methods for auto-regressive text generation, namely "),Ct=s("a"),$s=t("generate()"),As=t(" (for the PyTorch models), "),It=s("a"),zs=t("generate()"),Ps=t(" (for the TensorFlow models) and "),Wt=s("a"),Ds=t("generate()"),Ns=t(" (for the Flax/JAX models), are implemented in "),Bt=s("a"),Cs=t("GenerationMixin"),Is=t(", "),Ht=s("a"),Ws=t("TFGenerationMixin"),Bs=t(" and "),Rt=s("a"),Hs=t("FlaxGenerationMixin"),Rs=t(" respectively."),ns=l(),w=s("p"),Us=t("The "),xn=s("code"),Vs=t("GenerationMixin"),Ks=t(" classes are inherited by the corresponding base model classes, "),kn=s("em"),Zs=t("e.g."),Xs=l(),Ut=s("a"),Js=t("PreTrainedModel"),Qs=t(", "),Vt=s("a"),Ys=t("TFPreTrainedModel"),ea=t(", and "),Kt=s("a"),ta=t("FlaxPreTrainedModel"),na=t(` respectively, therefore exposing all
methods for auto-regressive text generation to every model class.`),os=l(),_e=s("h2"),Ae=s("a"),vn=s("span"),g(Ke.$$.fragment),oa=l(),yn=s("span"),sa=t("GenerationMixn"),ss=l(),m=s("div"),g(Ze.$$.fragment),aa=l(),Xe=s("p"),ra=t("A class containing all functions for auto-regressive text generation, to be used as a mixin in "),Zt=s("a"),ia=t("PreTrainedModel"),la=t("."),da=l(),Je=s("p"),ca=t("The class exposes "),Xt=s("a"),pa=t("generate()"),ma=t(", which can be used for:"),ga=l(),G=s("ul"),$=s("li"),jn=s("em"),_a=t("greedy decoding"),ua=t(" by calling "),Jt=s("a"),ha=t("greedy_search()"),fa=t(" if "),Mn=s("code"),ba=t("num_beams=1"),xa=t(` and
`),Ln=s("code"),ka=t("do_sample=False"),va=t("."),ya=l(),A=s("li"),wn=s("em"),ja=t("multinomial sampling"),Ma=t(" by calling "),Qt=s("a"),La=t("sample()"),wa=t(" if "),Tn=s("code"),Ta=t("num_beams=1"),Ea=t(` and
`),En=s("code"),Oa=t("do_sample=True"),qa=t("."),Ga=l(),z=s("li"),On=s("em"),Sa=t("beam-search decoding"),Fa=t(" by calling "),Yt=s("a"),$a=t("beam_search()"),Aa=t(" if "),qn=s("code"),za=t("num_beams>1"),Pa=t(` and
`),Gn=s("code"),Da=t("do_sample=False"),Na=t("."),Ca=l(),P=s("li"),Sn=s("em"),Ia=t("beam-search multinomial sampling"),Wa=t(" by calling "),en=s("a"),Ba=t("beam_sample()"),Ha=t(` if
`),Fn=s("code"),Ra=t("num_beams>1"),Ua=t(" and "),$n=s("code"),Va=t("do_sample=True"),Ka=t("."),Za=l(),D=s("li"),An=s("em"),Xa=t("diverse beam-search decoding"),Ja=t(" by calling "),tn=s("a"),Qa=t("group_beam_search()"),Ya=t(`, if
`),zn=s("code"),er=t("num_beams>1"),tr=t(" and "),Pn=s("code"),nr=t("num_beam_groups>1"),or=t("."),sr=l(),p=s("div"),g(Qe.$$.fragment),ar=l(),Dn=s("p"),rr=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),ir=l(),S=s("ul"),N=s("li"),Nn=s("em"),lr=t("greedy decoding"),dr=t(" by calling "),nn=s("a"),cr=t("greedy_search()"),pr=t(" if "),Cn=s("code"),mr=t("num_beams=1"),gr=t(` and
`),In=s("code"),_r=t("do_sample=False"),ur=t("."),hr=l(),C=s("li"),Wn=s("em"),fr=t("multinomial sampling"),br=t(" by calling "),on=s("a"),xr=t("sample()"),kr=t(" if "),Bn=s("code"),vr=t("num_beams=1"),yr=t(` and
`),Hn=s("code"),jr=t("do_sample=True"),Mr=t("."),Lr=l(),I=s("li"),Rn=s("em"),wr=t("beam-search decoding"),Tr=t(" by calling "),sn=s("a"),Er=t("beam_search()"),Or=t(" if "),Un=s("code"),qr=t("num_beams>1"),Gr=t(` and
`),Vn=s("code"),Sr=t("do_sample=False"),Fr=t("."),$r=l(),W=s("li"),Kn=s("em"),Ar=t("beam-search multinomial sampling"),zr=t(" by calling "),an=s("a"),Pr=t("beam_sample()"),Dr=t(` if
`),Zn=s("code"),Nr=t("num_beams>1"),Cr=t(" and "),Xn=s("code"),Ir=t("do_sample=True"),Wr=t("."),Br=l(),B=s("li"),Jn=s("em"),Hr=t("diverse beam-search decoding"),Rr=t(" by calling "),rn=s("a"),Ur=t("group_beam_search()"),Vr=t(`, if
`),Qn=s("code"),Kr=t("num_beams>1"),Zr=t(" and "),Yn=s("code"),Xr=t("num_beam_groups>1"),Jr=t("."),Qr=l(),ae=s("p"),Yr=t("Apart from "),eo=s("code"),ei=t("inputs"),ti=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),to=s("code"),ni=t("config.json"),oi=t(`) which in turn defaults to the
`),ln=s("a"),si=t("PretrainedConfig"),ai=t(" of the model."),ri=l(),Ye=s("p"),ii=t("Most of these parameters are explained in more detail in "),et=s("a"),li=t(`this blog
post`),di=t("."),ci=l(),no=s("p"),pi=t("Examples:"),mi=l(),oo=s("p"),gi=t("Greedy Decoding:"),_i=l(),g(tt.$$.fragment),ui=l(),so=s("p"),hi=t("Multinomial Sampling:"),fi=l(),g(nt.$$.fragment),bi=l(),ao=s("p"),xi=t("Beam-search decoding:"),ki=l(),g(ot.$$.fragment),vi=l(),H=s("div"),g(st.$$.fragment),yi=l(),at=s("p"),ji=t("Generates sequences of token ids for models with a language modeling head using "),ro=s("strong"),Mi=t("greedy decoding"),Li=t(` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),wi=l(),io=s("p"),Ti=t("Examples:"),Ei=l(),g(rt.$$.fragment),Oi=l(),R=s("div"),g(it.$$.fragment),qi=l(),lt=s("p"),Gi=t("Generates sequences of token ids for models with a language modeling head using "),lo=s("strong"),Si=t("multinomial sampling"),Fi=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),$i=l(),co=s("p"),Ai=t("Examples:"),zi=l(),g(dt.$$.fragment),Pi=l(),U=s("div"),g(ct.$$.fragment),Di=l(),pt=s("p"),Ni=t("Generates sequences of token ids for models with a language modeling head using "),po=s("strong"),Ci=t("beam search decoding"),Ii=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Wi=l(),mo=s("p"),Bi=t("Examples:"),Hi=l(),g(mt.$$.fragment),Ri=l(),V=s("div"),g(gt.$$.fragment),Ui=l(),_t=s("p"),Vi=t("Generates sequences of token ids for models with a language modeling head using "),go=s("strong"),Ki=t(`beam search multinomial
sampling`),Zi=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Xi=l(),_o=s("p"),Ji=t("Examples:"),Qi=l(),g(ut.$$.fragment),Yi=l(),K=s("div"),g(ht.$$.fragment),el=l(),ft=s("p"),tl=t("Generates sequences of token ids for models with a language modeling head using "),uo=s("strong"),nl=t(`diverse beam search
decoding`),ol=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),sl=l(),ho=s("p"),al=t("Examples:"),rl=l(),g(bt.$$.fragment),il=l(),Z=s("div"),g(xt.$$.fragment),ll=l(),kt=s("p"),dl=t("Generates sequences of token ids for models with a language modeling head using "),fo=s("strong"),cl=t(`constrained beam search
decoding`),pl=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),ml=l(),bo=s("p"),gl=t("Examples:"),_l=l(),g(vt.$$.fragment),as=l(),ue=s("h2"),ze=s("a"),xo=s("span"),g(yt.$$.fragment),ul=l(),ko=s("span"),hl=t("TFGenerationMixn"),rs=l(),re=s("div"),g(jt.$$.fragment),fl=l(),Mt=s("p"),bl=t("A class containing all of the functions supporting generation, to be used as a mixin in "),dn=s("a"),xl=t("TFPreTrainedModel"),kl=t("."),vl=l(),j=s("div"),g(Lt.$$.fragment),yl=l(),vo=s("p"),jl=t(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),Ml=l(),wt=s("p"),Ll=t("Adapted in part from "),Tt=s("a"),wl=t(`Facebook\u2019s XLM beam search
code`),Tl=t("."),El=l(),ie=s("p"),Ol=t("Apart from "),yo=s("code"),ql=t("input_ids"),Gl=t(" and "),jo=s("code"),Sl=t("attention_mask"),Fl=t(`, all the arguments below will default to the value of the attribute
of the same name inside the `),cn=s("a"),$l=t("PretrainedConfig"),Al=t(` of the model. The default values indicated are the default
values of those config.`),zl=l(),Et=s("p"),Pl=t("Most of these parameters are explained in more detail in "),Ot=s("a"),Dl=t(`this blog
post`),Nl=t("."),Cl=l(),Mo=s("p"),Il=t("Examples:"),Wl=l(),g(qt.$$.fragment),is=l(),he=s("h2"),Pe=s("a"),Lo=s("span"),g(Gt.$$.fragment),Bl=l(),wo=s("span"),Hl=t("FlaxGenerationMixn"),ls=l(),T=s("div"),g(St.$$.fragment),Rl=l(),Ft=s("p"),Ul=t(`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),pn=s("a"),Vl=t("FlaxPreTrainedModel"),Kl=t("."),Zl=l(),$t=s("p"),Xl=t("The class exposes "),mn=s("a"),Jl=t("generate()"),Ql=t(", which can be used for:"),Yl=l(),fe=s("ul"),X=s("li"),To=s("em"),ed=t("greedy decoding"),td=t(" by calling "),Eo=s("code"),nd=t("_greedy_search()"),od=t(`if
`),Oo=s("code"),sd=t("num_beams=1"),ad=t(" and "),qo=s("code"),rd=t("do_sample=False"),id=t("."),ld=l(),J=s("li"),Go=s("em"),dd=t("multinomial sampling"),cd=t(" by calling "),So=s("code"),pd=t("_sample()"),md=t("if "),Fo=s("code"),gd=t("num_beams=1"),_d=t(`
and `),$o=s("code"),ud=t("do_sample=True"),hd=t("."),fd=l(),Q=s("li"),Ao=s("em"),bd=t("beam-search decoding"),xd=t(" by calling "),zo=s("code"),kd=t("_beam_search"),vd=t(" if "),Po=s("code"),yd=t("num_beams>1"),jd=t(`
and `),Do=s("code"),Md=t("do_sample=False"),Ld=t("."),wd=l(),M=s("div"),g(At.$$.fragment),Td=l(),No=s("p"),Ed=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Od=l(),be=s("ul"),Y=s("li"),Co=s("em"),qd=t("greedy decoding"),Gd=t(" by calling "),Io=s("code"),Sd=t("_greedy_search()"),Fd=t(`if
`),Wo=s("code"),$d=t("num_beams=1"),Ad=t(" and "),Bo=s("code"),zd=t("do_sample=False"),Pd=t("."),Dd=l(),ee=s("li"),Ho=s("em"),Nd=t("multinomial sampling"),Cd=t(" by calling "),Ro=s("code"),Id=t("_sample()"),Wd=t("if "),Uo=s("code"),Bd=t("num_beams=1"),Hd=t(`
and `),Vo=s("code"),Rd=t("do_sample=True"),Ud=t("."),Vd=l(),te=s("li"),Ko=s("em"),Kd=t("beam-search decoding"),Zd=t(" by calling "),Zo=s("code"),Xd=t("_beam_search"),Jd=t(" if "),Xo=s("code"),Qd=t("num_beams>1"),Yd=t(`
and `),Jo=s("code"),ec=t("do_sample=False"),tc=t("."),nc=l(),le=s("p"),oc=t("Apart from "),Qo=s("code"),sc=t("inputs"),ac=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),Yo=s("code"),rc=t("config.json"),ic=t(`) which in turn defaults to the
`),gn=s("a"),lc=t("PretrainedConfig"),dc=t(" of the model."),cc=l(),zt=s("p"),pc=t("Most of these parameters are explained in more detail in "),Pt=s("a"),mc=t(`this blog
post`),gc=t("."),_c=l(),es=s("p"),uc=t("Examples:"),hc=l(),g(Dt.$$.fragment),this.h()},l(i){const v=Dm('[data-svelte="svelte-1phssyn"]',document.head);ce=a(v,"META",{name:!0,content:!0}),v.forEach(o),Nt=d(i),F=a(i,"H1",{class:!0});var cs=r(F);se=a(cs,"A",{id:!0,class:!0,href:!0});var fc=r(se);fn=a(fc,"SPAN",{});var bc=r(fn);_(Ve.$$.fragment,bc),bc.forEach(o),fc.forEach(o),Gs=d(cs),bn=a(cs,"SPAN",{});var xc=r(bn);Ss=n(xc,"Generation"),xc.forEach(o),cs.forEach(o),ts=d(i),y=a(i,"P",{});var E=r(y);Fs=n(E,"The methods for auto-regressive text generation, namely "),Ct=a(E,"A",{href:!0});var kc=r(Ct);$s=n(kc,"generate()"),kc.forEach(o),As=n(E," (for the PyTorch models), "),It=a(E,"A",{href:!0});var vc=r(It);zs=n(vc,"generate()"),vc.forEach(o),Ps=n(E," (for the TensorFlow models) and "),Wt=a(E,"A",{href:!0});var yc=r(Wt);Ds=n(yc,"generate()"),yc.forEach(o),Ns=n(E," (for the Flax/JAX models), are implemented in "),Bt=a(E,"A",{href:!0});var jc=r(Bt);Cs=n(jc,"GenerationMixin"),jc.forEach(o),Is=n(E,", "),Ht=a(E,"A",{href:!0});var Mc=r(Ht);Ws=n(Mc,"TFGenerationMixin"),Mc.forEach(o),Bs=n(E," and "),Rt=a(E,"A",{href:!0});var Lc=r(Rt);Hs=n(Lc,"FlaxGenerationMixin"),Lc.forEach(o),Rs=n(E," respectively."),E.forEach(o),ns=d(i),w=a(i,"P",{});var ne=r(w);Us=n(ne,"The "),xn=a(ne,"CODE",{});var wc=r(xn);Vs=n(wc,"GenerationMixin"),wc.forEach(o),Ks=n(ne," classes are inherited by the corresponding base model classes, "),kn=a(ne,"EM",{});var Tc=r(kn);Zs=n(Tc,"e.g."),Tc.forEach(o),Xs=d(ne),Ut=a(ne,"A",{href:!0});var Ec=r(Ut);Js=n(Ec,"PreTrainedModel"),Ec.forEach(o),Qs=n(ne,", "),Vt=a(ne,"A",{href:!0});var Oc=r(Vt);Ys=n(Oc,"TFPreTrainedModel"),Oc.forEach(o),ea=n(ne,", and "),Kt=a(ne,"A",{href:!0});var qc=r(Kt);ta=n(qc,"FlaxPreTrainedModel"),qc.forEach(o),na=n(ne,` respectively, therefore exposing all
methods for auto-regressive text generation to every model class.`),ne.forEach(o),os=d(i),_e=a(i,"H2",{class:!0});var ps=r(_e);Ae=a(ps,"A",{id:!0,class:!0,href:!0});var Gc=r(Ae);vn=a(Gc,"SPAN",{});var Sc=r(vn);_(Ke.$$.fragment,Sc),Sc.forEach(o),Gc.forEach(o),oa=d(ps),yn=a(ps,"SPAN",{});var Fc=r(yn);sa=n(Fc,"GenerationMixn"),Fc.forEach(o),ps.forEach(o),ss=d(i),m=a(i,"DIV",{class:!0});var k=r(m);_(Ze.$$.fragment,k),aa=d(k),Xe=a(k,"P",{});var ms=r(Xe);ra=n(ms,"A class containing all functions for auto-regressive text generation, to be used as a mixin in "),Zt=a(ms,"A",{href:!0});var $c=r(Zt);ia=n($c,"PreTrainedModel"),$c.forEach(o),la=n(ms,"."),ms.forEach(o),da=d(k),Je=a(k,"P",{});var gs=r(Je);ca=n(gs,"The class exposes "),Xt=a(gs,"A",{href:!0});var Ac=r(Xt);pa=n(Ac,"generate()"),Ac.forEach(o),ma=n(gs,", which can be used for:"),gs.forEach(o),ga=d(k),G=a(k,"UL",{});var pe=r(G);$=a(pe,"LI",{});var xe=r($);jn=a(xe,"EM",{});var zc=r(jn);_a=n(zc,"greedy decoding"),zc.forEach(o),ua=n(xe," by calling "),Jt=a(xe,"A",{href:!0});var Pc=r(Jt);ha=n(Pc,"greedy_search()"),Pc.forEach(o),fa=n(xe," if "),Mn=a(xe,"CODE",{});var Dc=r(Mn);ba=n(Dc,"num_beams=1"),Dc.forEach(o),xa=n(xe,` and
`),Ln=a(xe,"CODE",{});var Nc=r(Ln);ka=n(Nc,"do_sample=False"),Nc.forEach(o),va=n(xe,"."),xe.forEach(o),ya=d(pe),A=a(pe,"LI",{});var ke=r(A);wn=a(ke,"EM",{});var Cc=r(wn);ja=n(Cc,"multinomial sampling"),Cc.forEach(o),Ma=n(ke," by calling "),Qt=a(ke,"A",{href:!0});var Ic=r(Qt);La=n(Ic,"sample()"),Ic.forEach(o),wa=n(ke," if "),Tn=a(ke,"CODE",{});var Wc=r(Tn);Ta=n(Wc,"num_beams=1"),Wc.forEach(o),Ea=n(ke,` and
`),En=a(ke,"CODE",{});var Bc=r(En);Oa=n(Bc,"do_sample=True"),Bc.forEach(o),qa=n(ke,"."),ke.forEach(o),Ga=d(pe),z=a(pe,"LI",{});var ve=r(z);On=a(ve,"EM",{});var Hc=r(On);Sa=n(Hc,"beam-search decoding"),Hc.forEach(o),Fa=n(ve," by calling "),Yt=a(ve,"A",{href:!0});var Rc=r(Yt);$a=n(Rc,"beam_search()"),Rc.forEach(o),Aa=n(ve," if "),qn=a(ve,"CODE",{});var Uc=r(qn);za=n(Uc,"num_beams>1"),Uc.forEach(o),Pa=n(ve,` and
`),Gn=a(ve,"CODE",{});var Vc=r(Gn);Da=n(Vc,"do_sample=False"),Vc.forEach(o),Na=n(ve,"."),ve.forEach(o),Ca=d(pe),P=a(pe,"LI",{});var ye=r(P);Sn=a(ye,"EM",{});var Kc=r(Sn);Ia=n(Kc,"beam-search multinomial sampling"),Kc.forEach(o),Wa=n(ye," by calling "),en=a(ye,"A",{href:!0});var Zc=r(en);Ba=n(Zc,"beam_sample()"),Zc.forEach(o),Ha=n(ye,` if
`),Fn=a(ye,"CODE",{});var Xc=r(Fn);Ra=n(Xc,"num_beams>1"),Xc.forEach(o),Ua=n(ye," and "),$n=a(ye,"CODE",{});var Jc=r($n);Va=n(Jc,"do_sample=True"),Jc.forEach(o),Ka=n(ye,"."),ye.forEach(o),Za=d(pe),D=a(pe,"LI",{});var je=r(D);An=a(je,"EM",{});var Qc=r(An);Xa=n(Qc,"diverse beam-search decoding"),Qc.forEach(o),Ja=n(je," by calling "),tn=a(je,"A",{href:!0});var Yc=r(tn);Qa=n(Yc,"group_beam_search()"),Yc.forEach(o),Ya=n(je,`, if
`),zn=a(je,"CODE",{});var ep=r(zn);er=n(ep,"num_beams>1"),ep.forEach(o),tr=n(je," and "),Pn=a(je,"CODE",{});var tp=r(Pn);nr=n(tp,"num_beam_groups>1"),tp.forEach(o),or=n(je,"."),je.forEach(o),pe.forEach(o),sr=d(k),p=a(k,"DIV",{class:!0});var x=r(p);_(Qe.$$.fragment,x),ar=d(x),Dn=a(x,"P",{});var np=r(Dn);rr=n(np,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),np.forEach(o),ir=d(x),S=a(x,"UL",{});var me=r(S);N=a(me,"LI",{});var Me=r(N);Nn=a(Me,"EM",{});var op=r(Nn);lr=n(op,"greedy decoding"),op.forEach(o),dr=n(Me," by calling "),nn=a(Me,"A",{href:!0});var sp=r(nn);cr=n(sp,"greedy_search()"),sp.forEach(o),pr=n(Me," if "),Cn=a(Me,"CODE",{});var ap=r(Cn);mr=n(ap,"num_beams=1"),ap.forEach(o),gr=n(Me,` and
`),In=a(Me,"CODE",{});var rp=r(In);_r=n(rp,"do_sample=False"),rp.forEach(o),ur=n(Me,"."),Me.forEach(o),hr=d(me),C=a(me,"LI",{});var Le=r(C);Wn=a(Le,"EM",{});var ip=r(Wn);fr=n(ip,"multinomial sampling"),ip.forEach(o),br=n(Le," by calling "),on=a(Le,"A",{href:!0});var lp=r(on);xr=n(lp,"sample()"),lp.forEach(o),kr=n(Le," if "),Bn=a(Le,"CODE",{});var dp=r(Bn);vr=n(dp,"num_beams=1"),dp.forEach(o),yr=n(Le,` and
`),Hn=a(Le,"CODE",{});var cp=r(Hn);jr=n(cp,"do_sample=True"),cp.forEach(o),Mr=n(Le,"."),Le.forEach(o),Lr=d(me),I=a(me,"LI",{});var we=r(I);Rn=a(we,"EM",{});var pp=r(Rn);wr=n(pp,"beam-search decoding"),pp.forEach(o),Tr=n(we," by calling "),sn=a(we,"A",{href:!0});var mp=r(sn);Er=n(mp,"beam_search()"),mp.forEach(o),Or=n(we," if "),Un=a(we,"CODE",{});var gp=r(Un);qr=n(gp,"num_beams>1"),gp.forEach(o),Gr=n(we,` and
`),Vn=a(we,"CODE",{});var _p=r(Vn);Sr=n(_p,"do_sample=False"),_p.forEach(o),Fr=n(we,"."),we.forEach(o),$r=d(me),W=a(me,"LI",{});var Te=r(W);Kn=a(Te,"EM",{});var up=r(Kn);Ar=n(up,"beam-search multinomial sampling"),up.forEach(o),zr=n(Te," by calling "),an=a(Te,"A",{href:!0});var hp=r(an);Pr=n(hp,"beam_sample()"),hp.forEach(o),Dr=n(Te,` if
`),Zn=a(Te,"CODE",{});var fp=r(Zn);Nr=n(fp,"num_beams>1"),fp.forEach(o),Cr=n(Te," and "),Xn=a(Te,"CODE",{});var bp=r(Xn);Ir=n(bp,"do_sample=True"),bp.forEach(o),Wr=n(Te,"."),Te.forEach(o),Br=d(me),B=a(me,"LI",{});var Ee=r(B);Jn=a(Ee,"EM",{});var xp=r(Jn);Hr=n(xp,"diverse beam-search decoding"),xp.forEach(o),Rr=n(Ee," by calling "),rn=a(Ee,"A",{href:!0});var kp=r(rn);Ur=n(kp,"group_beam_search()"),kp.forEach(o),Vr=n(Ee,`, if
`),Qn=a(Ee,"CODE",{});var vp=r(Qn);Kr=n(vp,"num_beams>1"),vp.forEach(o),Zr=n(Ee," and "),Yn=a(Ee,"CODE",{});var yp=r(Yn);Xr=n(yp,"num_beam_groups>1"),yp.forEach(o),Jr=n(Ee,"."),Ee.forEach(o),me.forEach(o),Qr=d(x),ae=a(x,"P",{});var De=r(ae);Yr=n(De,"Apart from "),eo=a(De,"CODE",{});var jp=r(eo);ei=n(jp,"inputs"),jp.forEach(o),ti=n(De,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),to=a(De,"CODE",{});var Mp=r(to);ni=n(Mp,"config.json"),Mp.forEach(o),oi=n(De,`) which in turn defaults to the
`),ln=a(De,"A",{href:!0});var Lp=r(ln);si=n(Lp,"PretrainedConfig"),Lp.forEach(o),ai=n(De," of the model."),De.forEach(o),ri=d(x),Ye=a(x,"P",{});var _s=r(Ye);ii=n(_s,"Most of these parameters are explained in more detail in "),et=a(_s,"A",{href:!0,rel:!0});var wp=r(et);li=n(wp,`this blog
post`),wp.forEach(o),di=n(_s,"."),_s.forEach(o),ci=d(x),no=a(x,"P",{});var Tp=r(no);pi=n(Tp,"Examples:"),Tp.forEach(o),mi=d(x),oo=a(x,"P",{});var Ep=r(oo);gi=n(Ep,"Greedy Decoding:"),Ep.forEach(o),_i=d(x),_(tt.$$.fragment,x),ui=d(x),so=a(x,"P",{});var Op=r(so);hi=n(Op,"Multinomial Sampling:"),Op.forEach(o),fi=d(x),_(nt.$$.fragment,x),bi=d(x),ao=a(x,"P",{});var qp=r(ao);xi=n(qp,"Beam-search decoding:"),qp.forEach(o),ki=d(x),_(ot.$$.fragment,x),x.forEach(o),vi=d(k),H=a(k,"DIV",{class:!0});var Ne=r(H);_(st.$$.fragment,Ne),yi=d(Ne),at=a(Ne,"P",{});var us=r(at);ji=n(us,"Generates sequences of token ids for models with a language modeling head using "),ro=a(us,"STRONG",{});var Gp=r(ro);Mi=n(Gp,"greedy decoding"),Gp.forEach(o),Li=n(us,` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),us.forEach(o),wi=d(Ne),io=a(Ne,"P",{});var Sp=r(io);Ti=n(Sp,"Examples:"),Sp.forEach(o),Ei=d(Ne),_(rt.$$.fragment,Ne),Ne.forEach(o),Oi=d(k),R=a(k,"DIV",{class:!0});var Ce=r(R);_(it.$$.fragment,Ce),qi=d(Ce),lt=a(Ce,"P",{});var hs=r(lt);Gi=n(hs,"Generates sequences of token ids for models with a language modeling head using "),lo=a(hs,"STRONG",{});var Fp=r(lo);Si=n(Fp,"multinomial sampling"),Fp.forEach(o),Fi=n(hs,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),hs.forEach(o),$i=d(Ce),co=a(Ce,"P",{});var $p=r(co);Ai=n($p,"Examples:"),$p.forEach(o),zi=d(Ce),_(dt.$$.fragment,Ce),Ce.forEach(o),Pi=d(k),U=a(k,"DIV",{class:!0});var Ie=r(U);_(ct.$$.fragment,Ie),Di=d(Ie),pt=a(Ie,"P",{});var fs=r(pt);Ni=n(fs,"Generates sequences of token ids for models with a language modeling head using "),po=a(fs,"STRONG",{});var Ap=r(po);Ci=n(Ap,"beam search decoding"),Ap.forEach(o),Ii=n(fs,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),fs.forEach(o),Wi=d(Ie),mo=a(Ie,"P",{});var zp=r(mo);Bi=n(zp,"Examples:"),zp.forEach(o),Hi=d(Ie),_(mt.$$.fragment,Ie),Ie.forEach(o),Ri=d(k),V=a(k,"DIV",{class:!0});var We=r(V);_(gt.$$.fragment,We),Ui=d(We),_t=a(We,"P",{});var bs=r(_t);Vi=n(bs,"Generates sequences of token ids for models with a language modeling head using "),go=a(bs,"STRONG",{});var Pp=r(go);Ki=n(Pp,`beam search multinomial
sampling`),Pp.forEach(o),Zi=n(bs," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),bs.forEach(o),Xi=d(We),_o=a(We,"P",{});var Dp=r(_o);Ji=n(Dp,"Examples:"),Dp.forEach(o),Qi=d(We),_(ut.$$.fragment,We),We.forEach(o),Yi=d(k),K=a(k,"DIV",{class:!0});var Be=r(K);_(ht.$$.fragment,Be),el=d(Be),ft=a(Be,"P",{});var xs=r(ft);tl=n(xs,"Generates sequences of token ids for models with a language modeling head using "),uo=a(xs,"STRONG",{});var Np=r(uo);nl=n(Np,`diverse beam search
decoding`),Np.forEach(o),ol=n(xs," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),xs.forEach(o),sl=d(Be),ho=a(Be,"P",{});var Cp=r(ho);al=n(Cp,"Examples:"),Cp.forEach(o),rl=d(Be),_(bt.$$.fragment,Be),Be.forEach(o),il=d(k),Z=a(k,"DIV",{class:!0});var He=r(Z);_(xt.$$.fragment,He),ll=d(He),kt=a(He,"P",{});var ks=r(kt);dl=n(ks,"Generates sequences of token ids for models with a language modeling head using "),fo=a(ks,"STRONG",{});var Ip=r(fo);cl=n(Ip,`constrained beam search
decoding`),Ip.forEach(o),pl=n(ks," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),ks.forEach(o),ml=d(He),bo=a(He,"P",{});var Wp=r(bo);gl=n(Wp,"Examples:"),Wp.forEach(o),_l=d(He),_(vt.$$.fragment,He),He.forEach(o),k.forEach(o),as=d(i),ue=a(i,"H2",{class:!0});var vs=r(ue);ze=a(vs,"A",{id:!0,class:!0,href:!0});var Bp=r(ze);xo=a(Bp,"SPAN",{});var Hp=r(xo);_(yt.$$.fragment,Hp),Hp.forEach(o),Bp.forEach(o),ul=d(vs),ko=a(vs,"SPAN",{});var Rp=r(ko);hl=n(Rp,"TFGenerationMixn"),Rp.forEach(o),vs.forEach(o),rs=d(i),re=a(i,"DIV",{class:!0});var _n=r(re);_(jt.$$.fragment,_n),fl=d(_n),Mt=a(_n,"P",{});var ys=r(Mt);bl=n(ys,"A class containing all of the functions supporting generation, to be used as a mixin in "),dn=a(ys,"A",{href:!0});var Up=r(dn);xl=n(Up,"TFPreTrainedModel"),Up.forEach(o),kl=n(ys,"."),ys.forEach(o),vl=d(_n),j=a(_n,"DIV",{class:!0});var O=r(j);_(Lt.$$.fragment,O),yl=d(O),vo=a(O,"P",{});var Vp=r(vo);jl=n(Vp,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),Vp.forEach(o),Ml=d(O),wt=a(O,"P",{});var js=r(wt);Ll=n(js,"Adapted in part from "),Tt=a(js,"A",{href:!0,rel:!0});var Kp=r(Tt);wl=n(Kp,`Facebook\u2019s XLM beam search
code`),Kp.forEach(o),Tl=n(js,"."),js.forEach(o),El=d(O),ie=a(O,"P",{});var Re=r(ie);Ol=n(Re,"Apart from "),yo=a(Re,"CODE",{});var Zp=r(yo);ql=n(Zp,"input_ids"),Zp.forEach(o),Gl=n(Re," and "),jo=a(Re,"CODE",{});var Xp=r(jo);Sl=n(Xp,"attention_mask"),Xp.forEach(o),Fl=n(Re,`, all the arguments below will default to the value of the attribute
of the same name inside the `),cn=a(Re,"A",{href:!0});var Jp=r(cn);$l=n(Jp,"PretrainedConfig"),Jp.forEach(o),Al=n(Re,` of the model. The default values indicated are the default
values of those config.`),Re.forEach(o),zl=d(O),Et=a(O,"P",{});var Ms=r(Et);Pl=n(Ms,"Most of these parameters are explained in more detail in "),Ot=a(Ms,"A",{href:!0,rel:!0});var Qp=r(Ot);Dl=n(Qp,`this blog
post`),Qp.forEach(o),Nl=n(Ms,"."),Ms.forEach(o),Cl=d(O),Mo=a(O,"P",{});var Yp=r(Mo);Il=n(Yp,"Examples:"),Yp.forEach(o),Wl=d(O),_(qt.$$.fragment,O),O.forEach(o),_n.forEach(o),is=d(i),he=a(i,"H2",{class:!0});var Ls=r(he);Pe=a(Ls,"A",{id:!0,class:!0,href:!0});var em=r(Pe);Lo=a(em,"SPAN",{});var tm=r(Lo);_(Gt.$$.fragment,tm),tm.forEach(o),em.forEach(o),Bl=d(Ls),wo=a(Ls,"SPAN",{});var nm=r(wo);Hl=n(nm,"FlaxGenerationMixn"),nm.forEach(o),Ls.forEach(o),ls=d(i),T=a(i,"DIV",{class:!0});var ge=r(T);_(St.$$.fragment,ge),Rl=d(ge),Ft=a(ge,"P",{});var ws=r(Ft);Ul=n(ws,`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),pn=a(ws,"A",{href:!0});var om=r(pn);Vl=n(om,"FlaxPreTrainedModel"),om.forEach(o),Kl=n(ws,"."),ws.forEach(o),Zl=d(ge),$t=a(ge,"P",{});var Ts=r($t);Xl=n(Ts,"The class exposes "),mn=a(Ts,"A",{href:!0});var sm=r(mn);Jl=n(sm,"generate()"),sm.forEach(o),Ql=n(Ts,", which can be used for:"),Ts.forEach(o),Yl=d(ge),fe=a(ge,"UL",{});var un=r(fe);X=a(un,"LI",{});var Oe=r(X);To=a(Oe,"EM",{});var am=r(To);ed=n(am,"greedy decoding"),am.forEach(o),td=n(Oe," by calling "),Eo=a(Oe,"CODE",{});var rm=r(Eo);nd=n(rm,"_greedy_search()"),rm.forEach(o),od=n(Oe,`if
`),Oo=a(Oe,"CODE",{});var im=r(Oo);sd=n(im,"num_beams=1"),im.forEach(o),ad=n(Oe," and "),qo=a(Oe,"CODE",{});var lm=r(qo);rd=n(lm,"do_sample=False"),lm.forEach(o),id=n(Oe,"."),Oe.forEach(o),ld=d(un),J=a(un,"LI",{});var qe=r(J);Go=a(qe,"EM",{});var dm=r(Go);dd=n(dm,"multinomial sampling"),dm.forEach(o),cd=n(qe," by calling "),So=a(qe,"CODE",{});var cm=r(So);pd=n(cm,"_sample()"),cm.forEach(o),md=n(qe,"if "),Fo=a(qe,"CODE",{});var pm=r(Fo);gd=n(pm,"num_beams=1"),pm.forEach(o),_d=n(qe,`
and `),$o=a(qe,"CODE",{});var mm=r($o);ud=n(mm,"do_sample=True"),mm.forEach(o),hd=n(qe,"."),qe.forEach(o),fd=d(un),Q=a(un,"LI",{});var Ge=r(Q);Ao=a(Ge,"EM",{});var gm=r(Ao);bd=n(gm,"beam-search decoding"),gm.forEach(o),xd=n(Ge," by calling "),zo=a(Ge,"CODE",{});var _m=r(zo);kd=n(_m,"_beam_search"),_m.forEach(o),vd=n(Ge," if "),Po=a(Ge,"CODE",{});var um=r(Po);yd=n(um,"num_beams>1"),um.forEach(o),jd=n(Ge,`
and `),Do=a(Ge,"CODE",{});var hm=r(Do);Md=n(hm,"do_sample=False"),hm.forEach(o),Ld=n(Ge,"."),Ge.forEach(o),un.forEach(o),wd=d(ge),M=a(ge,"DIV",{class:!0});var q=r(M);_(At.$$.fragment,q),Td=d(q),No=a(q,"P",{});var fm=r(No);Ed=n(fm,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),fm.forEach(o),Od=d(q),be=a(q,"UL",{});var hn=r(be);Y=a(hn,"LI",{});var Se=r(Y);Co=a(Se,"EM",{});var bm=r(Co);qd=n(bm,"greedy decoding"),bm.forEach(o),Gd=n(Se," by calling "),Io=a(Se,"CODE",{});var xm=r(Io);Sd=n(xm,"_greedy_search()"),xm.forEach(o),Fd=n(Se,`if
`),Wo=a(Se,"CODE",{});var km=r(Wo);$d=n(km,"num_beams=1"),km.forEach(o),Ad=n(Se," and "),Bo=a(Se,"CODE",{});var vm=r(Bo);zd=n(vm,"do_sample=False"),vm.forEach(o),Pd=n(Se,"."),Se.forEach(o),Dd=d(hn),ee=a(hn,"LI",{});var Fe=r(ee);Ho=a(Fe,"EM",{});var ym=r(Ho);Nd=n(ym,"multinomial sampling"),ym.forEach(o),Cd=n(Fe," by calling "),Ro=a(Fe,"CODE",{});var jm=r(Ro);Id=n(jm,"_sample()"),jm.forEach(o),Wd=n(Fe,"if "),Uo=a(Fe,"CODE",{});var Mm=r(Uo);Bd=n(Mm,"num_beams=1"),Mm.forEach(o),Hd=n(Fe,`
and `),Vo=a(Fe,"CODE",{});var Lm=r(Vo);Rd=n(Lm,"do_sample=True"),Lm.forEach(o),Ud=n(Fe,"."),Fe.forEach(o),Vd=d(hn),te=a(hn,"LI",{});var $e=r(te);Ko=a($e,"EM",{});var wm=r(Ko);Kd=n(wm,"beam-search decoding"),wm.forEach(o),Zd=n($e," by calling "),Zo=a($e,"CODE",{});var Tm=r(Zo);Xd=n(Tm,"_beam_search"),Tm.forEach(o),Jd=n($e," if "),Xo=a($e,"CODE",{});var Em=r(Xo);Qd=n(Em,"num_beams>1"),Em.forEach(o),Yd=n($e,`
and `),Jo=a($e,"CODE",{});var Om=r(Jo);ec=n(Om,"do_sample=False"),Om.forEach(o),tc=n($e,"."),$e.forEach(o),hn.forEach(o),nc=d(q),le=a(q,"P",{});var Ue=r(le);oc=n(Ue,"Apart from "),Qo=a(Ue,"CODE",{});var qm=r(Qo);sc=n(qm,"inputs"),qm.forEach(o),ac=n(Ue,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),Yo=a(Ue,"CODE",{});var Gm=r(Yo);rc=n(Gm,"config.json"),Gm.forEach(o),ic=n(Ue,`) which in turn defaults to the
`),gn=a(Ue,"A",{href:!0});var Sm=r(gn);lc=n(Sm,"PretrainedConfig"),Sm.forEach(o),dc=n(Ue," of the model."),Ue.forEach(o),cc=d(q),zt=a(q,"P",{});var Es=r(zt);pc=n(Es,"Most of these parameters are explained in more detail in "),Pt=a(Es,"A",{href:!0,rel:!0});var Fm=r(Pt);mc=n(Fm,`this blog
post`),Fm.forEach(o),gc=n(Es,"."),Es.forEach(o),_c=d(q),es=a(q,"P",{});var $m=r(es);uc=n($m,"Examples:"),$m.forEach(o),hc=d(q),_(Dt.$$.fragment,q),q.forEach(o),ge.forEach(o),this.h()},h(){c(ce,"name","hf:doc:metadata"),c(ce,"content",JSON.stringify(Im)),c(se,"id","generation"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#generation"),c(F,"class","relative group"),c(Ct,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(It,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin.generate"),c(Wt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),c(Bt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin"),c(Ht,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin"),c(Rt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin"),c(Ut,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.PreTrainedModel"),c(Vt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.TFPreTrainedModel"),c(Kt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ae,"id","transformers.generation_utils.GenerationMixin"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.generation_utils.GenerationMixin"),c(_e,"class","relative group"),c(Zt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.PreTrainedModel"),c(Xt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(Jt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),c(Qt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),c(Yt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),c(en,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),c(tn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),c(nn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),c(on,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),c(sn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),c(an,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),c(rn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),c(ln,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),c(et,"href","https://huggingface.co/blog/how-to-generate"),c(et,"rel","nofollow"),c(p,"class","docstring"),c(H,"class","docstring"),c(R,"class","docstring"),c(U,"class","docstring"),c(V,"class","docstring"),c(K,"class","docstring"),c(Z,"class","docstring"),c(m,"class","docstring"),c(ze,"id","transformers.generation_tf_utils.TFGenerationMixin"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#transformers.generation_tf_utils.TFGenerationMixin"),c(ue,"class","relative group"),c(dn,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.TFPreTrainedModel"),c(Tt,"href","https://github.com/facebookresearch/XLM/blob/9e6f6814d17be4fe5b15f2e6c43eb2b2d76daeb4/src/model/transformer.py#L529"),c(Tt,"rel","nofollow"),c(cn,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ot,"href","https://huggingface.co/blog/how-to-generate"),c(Ot,"rel","nofollow"),c(j,"class","docstring"),c(re,"class","docstring"),c(Pe,"id","transformers.generation_flax_utils.FlaxGenerationMixin"),c(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pe,"href","#transformers.generation_flax_utils.FlaxGenerationMixin"),c(he,"class","relative group"),c(pn,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(mn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),c(gn,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),c(Pt,"href","https://huggingface.co/blog/how-to-generate"),c(Pt,"rel","nofollow"),c(M,"class","docstring"),c(T,"class","docstring")},m(i,v){e(document.head,ce),L(i,Nt,v),L(i,F,v),e(F,se),e(se,fn),u(Ve,fn,null),e(F,Gs),e(F,bn),e(bn,Ss),L(i,ts,v),L(i,y,v),e(y,Fs),e(y,Ct),e(Ct,$s),e(y,As),e(y,It),e(It,zs),e(y,Ps),e(y,Wt),e(Wt,Ds),e(y,Ns),e(y,Bt),e(Bt,Cs),e(y,Is),e(y,Ht),e(Ht,Ws),e(y,Bs),e(y,Rt),e(Rt,Hs),e(y,Rs),L(i,ns,v),L(i,w,v),e(w,Us),e(w,xn),e(xn,Vs),e(w,Ks),e(w,kn),e(kn,Zs),e(w,Xs),e(w,Ut),e(Ut,Js),e(w,Qs),e(w,Vt),e(Vt,Ys),e(w,ea),e(w,Kt),e(Kt,ta),e(w,na),L(i,os,v),L(i,_e,v),e(_e,Ae),e(Ae,vn),u(Ke,vn,null),e(_e,oa),e(_e,yn),e(yn,sa),L(i,ss,v),L(i,m,v),u(Ze,m,null),e(m,aa),e(m,Xe),e(Xe,ra),e(Xe,Zt),e(Zt,ia),e(Xe,la),e(m,da),e(m,Je),e(Je,ca),e(Je,Xt),e(Xt,pa),e(Je,ma),e(m,ga),e(m,G),e(G,$),e($,jn),e(jn,_a),e($,ua),e($,Jt),e(Jt,ha),e($,fa),e($,Mn),e(Mn,ba),e($,xa),e($,Ln),e(Ln,ka),e($,va),e(G,ya),e(G,A),e(A,wn),e(wn,ja),e(A,Ma),e(A,Qt),e(Qt,La),e(A,wa),e(A,Tn),e(Tn,Ta),e(A,Ea),e(A,En),e(En,Oa),e(A,qa),e(G,Ga),e(G,z),e(z,On),e(On,Sa),e(z,Fa),e(z,Yt),e(Yt,$a),e(z,Aa),e(z,qn),e(qn,za),e(z,Pa),e(z,Gn),e(Gn,Da),e(z,Na),e(G,Ca),e(G,P),e(P,Sn),e(Sn,Ia),e(P,Wa),e(P,en),e(en,Ba),e(P,Ha),e(P,Fn),e(Fn,Ra),e(P,Ua),e(P,$n),e($n,Va),e(P,Ka),e(G,Za),e(G,D),e(D,An),e(An,Xa),e(D,Ja),e(D,tn),e(tn,Qa),e(D,Ya),e(D,zn),e(zn,er),e(D,tr),e(D,Pn),e(Pn,nr),e(D,or),e(m,sr),e(m,p),u(Qe,p,null),e(p,ar),e(p,Dn),e(Dn,rr),e(p,ir),e(p,S),e(S,N),e(N,Nn),e(Nn,lr),e(N,dr),e(N,nn),e(nn,cr),e(N,pr),e(N,Cn),e(Cn,mr),e(N,gr),e(N,In),e(In,_r),e(N,ur),e(S,hr),e(S,C),e(C,Wn),e(Wn,fr),e(C,br),e(C,on),e(on,xr),e(C,kr),e(C,Bn),e(Bn,vr),e(C,yr),e(C,Hn),e(Hn,jr),e(C,Mr),e(S,Lr),e(S,I),e(I,Rn),e(Rn,wr),e(I,Tr),e(I,sn),e(sn,Er),e(I,Or),e(I,Un),e(Un,qr),e(I,Gr),e(I,Vn),e(Vn,Sr),e(I,Fr),e(S,$r),e(S,W),e(W,Kn),e(Kn,Ar),e(W,zr),e(W,an),e(an,Pr),e(W,Dr),e(W,Zn),e(Zn,Nr),e(W,Cr),e(W,Xn),e(Xn,Ir),e(W,Wr),e(S,Br),e(S,B),e(B,Jn),e(Jn,Hr),e(B,Rr),e(B,rn),e(rn,Ur),e(B,Vr),e(B,Qn),e(Qn,Kr),e(B,Zr),e(B,Yn),e(Yn,Xr),e(B,Jr),e(p,Qr),e(p,ae),e(ae,Yr),e(ae,eo),e(eo,ei),e(ae,ti),e(ae,to),e(to,ni),e(ae,oi),e(ae,ln),e(ln,si),e(ae,ai),e(p,ri),e(p,Ye),e(Ye,ii),e(Ye,et),e(et,li),e(Ye,di),e(p,ci),e(p,no),e(no,pi),e(p,mi),e(p,oo),e(oo,gi),e(p,_i),u(tt,p,null),e(p,ui),e(p,so),e(so,hi),e(p,fi),u(nt,p,null),e(p,bi),e(p,ao),e(ao,xi),e(p,ki),u(ot,p,null),e(m,vi),e(m,H),u(st,H,null),e(H,yi),e(H,at),e(at,ji),e(at,ro),e(ro,Mi),e(at,Li),e(H,wi),e(H,io),e(io,Ti),e(H,Ei),u(rt,H,null),e(m,Oi),e(m,R),u(it,R,null),e(R,qi),e(R,lt),e(lt,Gi),e(lt,lo),e(lo,Si),e(lt,Fi),e(R,$i),e(R,co),e(co,Ai),e(R,zi),u(dt,R,null),e(m,Pi),e(m,U),u(ct,U,null),e(U,Di),e(U,pt),e(pt,Ni),e(pt,po),e(po,Ci),e(pt,Ii),e(U,Wi),e(U,mo),e(mo,Bi),e(U,Hi),u(mt,U,null),e(m,Ri),e(m,V),u(gt,V,null),e(V,Ui),e(V,_t),e(_t,Vi),e(_t,go),e(go,Ki),e(_t,Zi),e(V,Xi),e(V,_o),e(_o,Ji),e(V,Qi),u(ut,V,null),e(m,Yi),e(m,K),u(ht,K,null),e(K,el),e(K,ft),e(ft,tl),e(ft,uo),e(uo,nl),e(ft,ol),e(K,sl),e(K,ho),e(ho,al),e(K,rl),u(bt,K,null),e(m,il),e(m,Z),u(xt,Z,null),e(Z,ll),e(Z,kt),e(kt,dl),e(kt,fo),e(fo,cl),e(kt,pl),e(Z,ml),e(Z,bo),e(bo,gl),e(Z,_l),u(vt,Z,null),L(i,as,v),L(i,ue,v),e(ue,ze),e(ze,xo),u(yt,xo,null),e(ue,ul),e(ue,ko),e(ko,hl),L(i,rs,v),L(i,re,v),u(jt,re,null),e(re,fl),e(re,Mt),e(Mt,bl),e(Mt,dn),e(dn,xl),e(Mt,kl),e(re,vl),e(re,j),u(Lt,j,null),e(j,yl),e(j,vo),e(vo,jl),e(j,Ml),e(j,wt),e(wt,Ll),e(wt,Tt),e(Tt,wl),e(wt,Tl),e(j,El),e(j,ie),e(ie,Ol),e(ie,yo),e(yo,ql),e(ie,Gl),e(ie,jo),e(jo,Sl),e(ie,Fl),e(ie,cn),e(cn,$l),e(ie,Al),e(j,zl),e(j,Et),e(Et,Pl),e(Et,Ot),e(Ot,Dl),e(Et,Nl),e(j,Cl),e(j,Mo),e(Mo,Il),e(j,Wl),u(qt,j,null),L(i,is,v),L(i,he,v),e(he,Pe),e(Pe,Lo),u(Gt,Lo,null),e(he,Bl),e(he,wo),e(wo,Hl),L(i,ls,v),L(i,T,v),u(St,T,null),e(T,Rl),e(T,Ft),e(Ft,Ul),e(Ft,pn),e(pn,Vl),e(Ft,Kl),e(T,Zl),e(T,$t),e($t,Xl),e($t,mn),e(mn,Jl),e($t,Ql),e(T,Yl),e(T,fe),e(fe,X),e(X,To),e(To,ed),e(X,td),e(X,Eo),e(Eo,nd),e(X,od),e(X,Oo),e(Oo,sd),e(X,ad),e(X,qo),e(qo,rd),e(X,id),e(fe,ld),e(fe,J),e(J,Go),e(Go,dd),e(J,cd),e(J,So),e(So,pd),e(J,md),e(J,Fo),e(Fo,gd),e(J,_d),e(J,$o),e($o,ud),e(J,hd),e(fe,fd),e(fe,Q),e(Q,Ao),e(Ao,bd),e(Q,xd),e(Q,zo),e(zo,kd),e(Q,vd),e(Q,Po),e(Po,yd),e(Q,jd),e(Q,Do),e(Do,Md),e(Q,Ld),e(T,wd),e(T,M),u(At,M,null),e(M,Td),e(M,No),e(No,Ed),e(M,Od),e(M,be),e(be,Y),e(Y,Co),e(Co,qd),e(Y,Gd),e(Y,Io),e(Io,Sd),e(Y,Fd),e(Y,Wo),e(Wo,$d),e(Y,Ad),e(Y,Bo),e(Bo,zd),e(Y,Pd),e(be,Dd),e(be,ee),e(ee,Ho),e(Ho,Nd),e(ee,Cd),e(ee,Ro),e(Ro,Id),e(ee,Wd),e(ee,Uo),e(Uo,Bd),e(ee,Hd),e(ee,Vo),e(Vo,Rd),e(ee,Ud),e(be,Vd),e(be,te),e(te,Ko),e(Ko,Kd),e(te,Zd),e(te,Zo),e(Zo,Xd),e(te,Jd),e(te,Xo),e(Xo,Qd),e(te,Yd),e(te,Jo),e(Jo,ec),e(te,tc),e(M,nc),e(M,le),e(le,oc),e(le,Qo),e(Qo,sc),e(le,ac),e(le,Yo),e(Yo,rc),e(le,ic),e(le,gn),e(gn,lc),e(le,dc),e(M,cc),e(M,zt),e(zt,pc),e(zt,Pt),e(Pt,mc),e(zt,gc),e(M,_c),e(M,es),e(es,uc),e(M,hc),u(Dt,M,null),ds=!0},p:Nm,i(i){ds||(h(Ve.$$.fragment,i),h(Ke.$$.fragment,i),h(Ze.$$.fragment,i),h(Qe.$$.fragment,i),h(tt.$$.fragment,i),h(nt.$$.fragment,i),h(ot.$$.fragment,i),h(st.$$.fragment,i),h(rt.$$.fragment,i),h(it.$$.fragment,i),h(dt.$$.fragment,i),h(ct.$$.fragment,i),h(mt.$$.fragment,i),h(gt.$$.fragment,i),h(ut.$$.fragment,i),h(ht.$$.fragment,i),h(bt.$$.fragment,i),h(xt.$$.fragment,i),h(vt.$$.fragment,i),h(yt.$$.fragment,i),h(jt.$$.fragment,i),h(Lt.$$.fragment,i),h(qt.$$.fragment,i),h(Gt.$$.fragment,i),h(St.$$.fragment,i),h(At.$$.fragment,i),h(Dt.$$.fragment,i),ds=!0)},o(i){f(Ve.$$.fragment,i),f(Ke.$$.fragment,i),f(Ze.$$.fragment,i),f(Qe.$$.fragment,i),f(tt.$$.fragment,i),f(nt.$$.fragment,i),f(ot.$$.fragment,i),f(st.$$.fragment,i),f(rt.$$.fragment,i),f(it.$$.fragment,i),f(dt.$$.fragment,i),f(ct.$$.fragment,i),f(mt.$$.fragment,i),f(gt.$$.fragment,i),f(ut.$$.fragment,i),f(ht.$$.fragment,i),f(bt.$$.fragment,i),f(xt.$$.fragment,i),f(vt.$$.fragment,i),f(yt.$$.fragment,i),f(jt.$$.fragment,i),f(Lt.$$.fragment,i),f(qt.$$.fragment,i),f(Gt.$$.fragment,i),f(St.$$.fragment,i),f(At.$$.fragment,i),f(Dt.$$.fragment,i),ds=!1},d(i){o(ce),i&&o(Nt),i&&o(F),b(Ve),i&&o(ts),i&&o(y),i&&o(ns),i&&o(w),i&&o(os),i&&o(_e),b(Ke),i&&o(ss),i&&o(m),b(Ze),b(Qe),b(tt),b(nt),b(ot),b(st),b(rt),b(it),b(dt),b(ct),b(mt),b(gt),b(ut),b(ht),b(bt),b(xt),b(vt),i&&o(as),i&&o(ue),b(yt),i&&o(rs),i&&o(re),b(jt),b(Lt),b(qt),i&&o(is),i&&o(he),b(Gt),i&&o(ls),i&&o(T),b(St),b(At),b(Dt)}}}const Im={local:"generation",sections:[{local:"transformers.generation_utils.GenerationMixin",title:"GenerationMixn"},{local:"transformers.generation_tf_utils.TFGenerationMixin",title:"TFGenerationMixn"},{local:"transformers.generation_flax_utils.FlaxGenerationMixin",title:"FlaxGenerationMixn"}],title:"Generation"};function Wm(qs,ce,Nt){let{fw:F}=ce;return qs.$$set=se=>{"fw"in se&&Nt(0,F=se.fw)},[F]}class Km extends Am{constructor(ce){super();zm(this,ce,Wm,Cm,Pm,{fw:0})}}export{Km as default,Im as metadata};
