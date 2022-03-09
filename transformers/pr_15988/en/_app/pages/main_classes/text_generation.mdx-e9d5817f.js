import{S as xg,i as kg,s as vg,e as s,k as l,w as g,t,M as yg,c as a,d as o,m as d,a as r,x as _,h as n,b as c,F as e,g as L,y as u,L as jg,q as h,o as f,B as b}from"../../chunks/vendor-4833417e.js";import{D as ie}from"../../chunks/Docstring-4f315ed9.js";import{C as ge}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as Is}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function Mg(Ws){let _e,Bt,F,le,jn,Je,Bs,Mn,Hs,gs,y,Rs,Ht,Us,Vs,Rt,Ks,Zs,Ut,Xs,Js,Vt,Qs,Ys,Kt,ea,ta,Zt,na,oa,_s,w,sa,Ln,aa,ra,wn,ia,la,Xt,da,ca,Jt,pa,ma,Qt,ga,_a,us,he,Ne,Tn,Qe,ua,En,ha,hs,m,Ye,fa,et,ba,Yt,xa,ka,va,tt,ya,en,ja,Ma,La,T,$,On,wa,Ta,tn,Ea,Oa,qn,qa,Ga,Gn,Sa,Fa,$a,A,Sn,Aa,za,nn,Pa,Da,Fn,Na,Ca,$n,Ia,Wa,Ba,z,An,Ha,Ra,on,Ua,Va,zn,Ka,Za,Pn,Xa,Ja,Qa,P,Dn,Ya,er,sn,tr,nr,Nn,or,sr,Cn,ar,rr,ir,D,In,lr,dr,an,cr,pr,Wn,mr,gr,Bn,_r,ur,hr,N,Hn,fr,br,rn,xr,kr,Rn,vr,yr,Un,jr,Mr,Lr,p,nt,wr,Vn,Tr,Er,E,C,Kn,Or,qr,ln,Gr,Sr,Zn,Fr,$r,Xn,Ar,zr,Pr,I,Jn,Dr,Nr,dn,Cr,Ir,Qn,Wr,Br,Yn,Hr,Rr,Ur,W,eo,Vr,Kr,cn,Zr,Xr,to,Jr,Qr,no,Yr,ei,ti,B,oo,ni,oi,pn,si,ai,so,ri,ii,ao,li,di,ci,H,ro,pi,mi,mn,gi,_i,io,ui,hi,lo,fi,bi,xi,R,co,ki,vi,gn,yi,ji,po,Mi,Li,mo,wi,Ti,Ei,de,Oi,go,qi,Gi,_o,Si,Fi,_n,$i,Ai,zi,ot,Pi,st,Di,Ni,Ci,uo,Ii,Wi,ho,Bi,Hi,at,Ri,fo,Ui,Vi,rt,Ki,bo,Zi,Xi,it,Ji,U,lt,Qi,dt,Yi,xo,el,tl,nl,ko,ol,sl,ct,al,V,pt,rl,mt,il,vo,ll,dl,cl,yo,pl,ml,gt,gl,K,_t,_l,ut,ul,jo,hl,fl,bl,Mo,xl,kl,ht,vl,Z,ft,yl,bt,jl,Lo,Ml,Ll,wl,wo,Tl,El,xt,Ol,X,kt,ql,vt,Gl,To,Sl,Fl,$l,Eo,Al,zl,yt,Pl,J,jt,Dl,Mt,Nl,Oo,Cl,Il,Wl,qo,Bl,Hl,Lt,fs,fe,Ce,Go,wt,Rl,So,Ul,bs,ce,Tt,Vl,Et,Kl,un,Zl,Xl,Jl,j,Ot,Ql,Fo,Yl,ed,qt,td,Gt,nd,od,sd,pe,ad,$o,rd,id,Ao,ld,dd,hn,cd,pd,md,St,gd,Ft,_d,ud,hd,zo,fd,bd,$t,xs,be,Ie,Po,At,xd,Do,kd,ks,O,zt,vd,Pt,yd,fn,jd,Md,Ld,Dt,wd,bn,Td,Ed,Od,xe,Q,No,qd,Gd,Co,Sd,Fd,Io,$d,Ad,Wo,zd,Pd,Dd,Y,Bo,Nd,Cd,Ho,Id,Wd,Ro,Bd,Hd,Uo,Rd,Ud,Vd,ee,Vo,Kd,Zd,Ko,Xd,Jd,Zo,Qd,Yd,Xo,ec,tc,nc,M,Nt,oc,Jo,sc,ac,ke,te,Qo,rc,ic,Yo,lc,dc,es,cc,pc,ts,mc,gc,_c,ne,ns,uc,hc,os,fc,bc,ss,xc,kc,as,vc,yc,jc,oe,rs,Mc,Lc,is,wc,Tc,ls,Ec,Oc,ds,qc,Gc,Sc,me,Fc,cs,$c,Ac,ps,zc,Pc,xn,Dc,Nc,Cc,Ct,Ic,It,Wc,Bc,Hc,ms,Rc,Uc,Wt,vs;return Je=new Is({}),Qe=new Is({}),Ye=new ie({props:{name:"class transformers.generation_utils.GenerationMixin",anchor:"transformers.generation_utils.GenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L378"}}),nt=new ie({props:{name:"generate",anchor:"transformers.generation_utils.GenerationMixin.generate",parameters:[{name:"inputs",val:": typing.Optional[torch.Tensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"typical_p",val:": typing.Optional[float] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.Iterable[int]] = None"},{name:"force_words_ids",val:": typing.Union[typing.Iterable[int], typing.Iterable[typing.Iterable[int]], NoneType] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"max_time",val:": typing.Optional[float] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Union[typing.Callable[[int, torch.Tensor], typing.List[int]], NoneType] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = []"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = []"},{name:"constraints",val:": typing.Optional[typing.List[transformers.generation_beam_constraints.Constraint]] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L820",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.generate.inputs",description:`<strong>inputs</strong> (<code>torch.Tensor</code> of varying shape depending on the modality, <em>optional</em>) &#x2014;
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
`}}),at=new ge({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

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
[<span class="hljs-string">&#x27;Today I believe we can finally get to the point where we can make a difference in the lives of the people of the United States of America.\\n&#x27;</span>]`}}),rt=new ge({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM
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
[<span class="hljs-string">&#x27;Today I believe we can finally get rid of discrimination,&quot; said Rep. Mark Pocan (D-Wis.).\\n\\n&quot;Just look at the&#x27;</span>]`}}),it=new ge({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

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
[<span class="hljs-string">&#x27;Paris ist eines der dichtesten besiedelten Gebiete Europas.&#x27;</span>]`}}),lt=new ie({props:{name:"greedy_search",anchor:"transformers.generation_utils.GenerationMixin.greedy_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L1463",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ct=new ge({props:{code:`from transformers import (
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
[<span class="hljs-string">&quot;It might be possible to get a better understanding of the nature of the problem, but it&#x27;s not&quot;</span>]`}}),pt=new ie({props:{name:"sample",anchor:"transformers.generation_utils.GenerationMixin.sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L1695",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),gt=new ge({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Today is a beautiful day, and a wonderful day.\\n\\nI was lucky enough to meet the&#x27;</span>]`}}),_t=new ie({props:{name:"beam_search",anchor:"transformers.generation_utils.GenerationMixin.beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L1951",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ht=new ge({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),ft=new ie({props:{name:"beam_sample",anchor:"transformers.generation_utils.GenerationMixin.beam_sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L2263",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),xt=new ge({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),kt=new ie({props:{name:"group_beam_search",anchor:"transformers.generation_utils.GenerationMixin.group_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L2585",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),yt=new ge({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),jt=new ie({props:{name:"constrained_beam_search",anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"constrained_beam_scorer",val:": ConstrainedBeamSearchScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_utils.py#L2950",parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Lt=new ge({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt sind Sie?&#x27;</span>]`}}),wt=new Is({}),Tt=new ie({props:{name:"class transformers.generation_tf_utils.TFGenerationMixin",anchor:"transformers.generation_tf_utils.TFGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_tf_utils.py#L342"}}),Ot=new ie({props:{name:"generate",anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate",parameters:[{name:"input_ids",val:" = None"},{name:"max_length",val:" = None"},{name:"min_length",val:" = None"},{name:"do_sample",val:" = None"},{name:"early_stopping",val:" = None"},{name:"num_beams",val:" = None"},{name:"temperature",val:" = None"},{name:"top_k",val:" = None"},{name:"top_p",val:" = None"},{name:"repetition_penalty",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"forced_bos_token_id",val:" = None"},{name:"forced_eos_token_id",val:" = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_tf_utils.py#L362",parametersDescription:[{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.input_ids",description:"<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, `(batch_size, sequence_length, &#x2014;",name:"input_ids"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.feature_dim)`",description:`<strong>feature_dim)\`</strong> or <code>(batch_size, num_channels, height, width)</code>, <em>optional</em>) &#x2014;
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
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"forced_eos_token_id"}]}}),$t=new ge({props:{code:`tokenizer = AutoTokenizer.from_pretrained("distilgpt2")  # Initialize tokenizer
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
)  <span class="hljs-comment"># generate sequences without allowing bad_words to be generated</span>`}}),At=new Is({}),zt=new ie({props:{name:"class transformers.generation_flax_utils.FlaxGenerationMixin",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_flax_utils.py#L119"}}),Nt=new ie({props:{name:"generate",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate",parameters:[{name:"input_ids",val:": ndarray"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"prng_key",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"trace",val:": bool = True"},{name:"params",val:": typing.Union[typing.Dict[str, jax._src.numpy.lax_numpy.ndarray], NoneType] = None"},{name:"**model_kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_15988/src/transformers/generation_flax_utils.py#L163",parametersDescription:[{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Wt=new ge({props:{code:`from transformers import AutoTokenizer, FlaxAutoModelForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){_e=s("meta"),Bt=l(),F=s("h1"),le=s("a"),jn=s("span"),g(Je.$$.fragment),Bs=l(),Mn=s("span"),Hs=t("Generation"),gs=l(),y=s("p"),Rs=t("The methods for auto-regressive text generation, namely "),Ht=s("a"),Us=t("generate()"),Vs=t(" (for the PyTorch models), "),Rt=s("a"),Ks=t("generate()"),Zs=t(" (for the TensorFlow models) and "),Ut=s("a"),Xs=t("generate()"),Js=t(" (for the Flax/JAX models), are implemented in "),Vt=s("a"),Qs=t("GenerationMixin"),Ys=t(", "),Kt=s("a"),ea=t("TFGenerationMixin"),ta=t(" and "),Zt=s("a"),na=t("FlaxGenerationMixin"),oa=t(" respectively."),_s=l(),w=s("p"),sa=t("The "),Ln=s("code"),aa=t("GenerationMixin"),ra=t(" classes are inherited by the corresponding base model classes, "),wn=s("em"),ia=t("e.g."),la=l(),Xt=s("a"),da=t("PreTrainedModel"),ca=t(", "),Jt=s("a"),pa=t("TFPreTrainedModel"),ma=t(", and "),Qt=s("a"),ga=t("FlaxPreTrainedModel"),_a=t(` respectively, therefore exposing all
methods for auto-regressive text generation to every model class.`),us=l(),he=s("h2"),Ne=s("a"),Tn=s("span"),g(Qe.$$.fragment),ua=l(),En=s("span"),ha=t("GenerationMixn"),hs=l(),m=s("div"),g(Ye.$$.fragment),fa=l(),et=s("p"),ba=t("A class containing all functions for auto-regressive text generation, to be used as a mixin in "),Yt=s("a"),xa=t("PreTrainedModel"),ka=t("."),va=l(),tt=s("p"),ya=t("The class exposes "),en=s("a"),ja=t("generate()"),Ma=t(", which can be used for:"),La=l(),T=s("ul"),$=s("li"),On=s("em"),wa=t("greedy decoding"),Ta=t(" by calling "),tn=s("a"),Ea=t("greedy_search()"),Oa=t(" if "),qn=s("code"),qa=t("num_beams=1"),Ga=t(` and
`),Gn=s("code"),Sa=t("do_sample=False"),Fa=t("."),$a=l(),A=s("li"),Sn=s("em"),Aa=t("multinomial sampling"),za=t(" by calling "),nn=s("a"),Pa=t("sample()"),Da=t(" if "),Fn=s("code"),Na=t("num_beams=1"),Ca=t(` and
`),$n=s("code"),Ia=t("do_sample=True"),Wa=t("."),Ba=l(),z=s("li"),An=s("em"),Ha=t("beam-search decoding"),Ra=t(" by calling "),on=s("a"),Ua=t("beam_search()"),Va=t(" if "),zn=s("code"),Ka=t("num_beams>1"),Za=t(` and
`),Pn=s("code"),Xa=t("do_sample=False"),Ja=t("."),Qa=l(),P=s("li"),Dn=s("em"),Ya=t("beam-search multinomial sampling"),er=t(" by calling "),sn=s("a"),tr=t("beam_sample()"),nr=t(` if
`),Nn=s("code"),or=t("num_beams>1"),sr=t(" and "),Cn=s("code"),ar=t("do_sample=True"),rr=t("."),ir=l(),D=s("li"),In=s("em"),lr=t("diverse beam-search decoding"),dr=t(" by calling "),an=s("a"),cr=t("group_beam_search()"),pr=t(`, if
`),Wn=s("code"),mr=t("num_beams>1"),gr=t(" and "),Bn=s("code"),_r=t("num_beam_groups>1"),ur=t("."),hr=l(),N=s("li"),Hn=s("em"),fr=t("constrained beam-search decoding"),br=t(" by calling "),rn=s("a"),xr=t("constrained_beam_search()"),kr=t(`,
if `),Rn=s("code"),vr=t("constraints!=None"),yr=t(" or "),Un=s("code"),jr=t("force_words_ids!=None"),Mr=t("."),Lr=l(),p=s("div"),g(nt.$$.fragment),wr=l(),Vn=s("p"),Tr=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Er=l(),E=s("ul"),C=s("li"),Kn=s("em"),Or=t("greedy decoding"),qr=t(" by calling "),ln=s("a"),Gr=t("greedy_search()"),Sr=t(" if "),Zn=s("code"),Fr=t("num_beams=1"),$r=t(` and
`),Xn=s("code"),Ar=t("do_sample=False"),zr=t("."),Pr=l(),I=s("li"),Jn=s("em"),Dr=t("multinomial sampling"),Nr=t(" by calling "),dn=s("a"),Cr=t("sample()"),Ir=t(" if "),Qn=s("code"),Wr=t("num_beams=1"),Br=t(` and
`),Yn=s("code"),Hr=t("do_sample=True"),Rr=t("."),Ur=l(),W=s("li"),eo=s("em"),Vr=t("beam-search decoding"),Kr=t(" by calling "),cn=s("a"),Zr=t("beam_search()"),Xr=t(" if "),to=s("code"),Jr=t("num_beams>1"),Qr=t(` and
`),no=s("code"),Yr=t("do_sample=False"),ei=t("."),ti=l(),B=s("li"),oo=s("em"),ni=t("beam-search multinomial sampling"),oi=t(" by calling "),pn=s("a"),si=t("beam_sample()"),ai=t(` if
`),so=s("code"),ri=t("num_beams>1"),ii=t(" and "),ao=s("code"),li=t("do_sample=True"),di=t("."),ci=l(),H=s("li"),ro=s("em"),pi=t("diverse beam-search decoding"),mi=t(" by calling "),mn=s("a"),gi=t("group_beam_search()"),_i=t(`, if
`),io=s("code"),ui=t("num_beams>1"),hi=t(" and "),lo=s("code"),fi=t("num_beam_groups>1"),bi=t("."),xi=l(),R=s("li"),co=s("em"),ki=t("constrained beam-search decoding"),vi=t(` by calling
`),gn=s("a"),yi=t("constrained_beam_search()"),ji=t(", if "),po=s("code"),Mi=t("constraints!=None"),Li=t(` or
`),mo=s("code"),wi=t("force_words_ids!=None"),Ti=t("."),Ei=l(),de=s("p"),Oi=t("Apart from "),go=s("code"),qi=t("inputs"),Gi=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),_o=s("code"),Si=t("config.json"),Fi=t(`) which in turn defaults to the
`),_n=s("a"),$i=t("PretrainedConfig"),Ai=t(" of the model."),zi=l(),ot=s("p"),Pi=t("Most of these parameters are explained in more detail in "),st=s("a"),Di=t(`this blog
post`),Ni=t("."),Ci=l(),uo=s("p"),Ii=t("Examples:"),Wi=l(),ho=s("p"),Bi=t("Greedy Decoding:"),Hi=l(),g(at.$$.fragment),Ri=l(),fo=s("p"),Ui=t("Multinomial Sampling:"),Vi=l(),g(rt.$$.fragment),Ki=l(),bo=s("p"),Zi=t("Beam-search decoding:"),Xi=l(),g(it.$$.fragment),Ji=l(),U=s("div"),g(lt.$$.fragment),Qi=l(),dt=s("p"),Yi=t("Generates sequences of token ids for models with a language modeling head using "),xo=s("strong"),el=t("greedy decoding"),tl=t(` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),nl=l(),ko=s("p"),ol=t("Examples:"),sl=l(),g(ct.$$.fragment),al=l(),V=s("div"),g(pt.$$.fragment),rl=l(),mt=s("p"),il=t("Generates sequences of token ids for models with a language modeling head using "),vo=s("strong"),ll=t("multinomial sampling"),dl=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),cl=l(),yo=s("p"),pl=t("Examples:"),ml=l(),g(gt.$$.fragment),gl=l(),K=s("div"),g(_t.$$.fragment),_l=l(),ut=s("p"),ul=t("Generates sequences of token ids for models with a language modeling head using "),jo=s("strong"),hl=t("beam search decoding"),fl=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),bl=l(),Mo=s("p"),xl=t("Examples:"),kl=l(),g(ht.$$.fragment),vl=l(),Z=s("div"),g(ft.$$.fragment),yl=l(),bt=s("p"),jl=t("Generates sequences of token ids for models with a language modeling head using "),Lo=s("strong"),Ml=t(`beam search multinomial
sampling`),Ll=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),wl=l(),wo=s("p"),Tl=t("Examples:"),El=l(),g(xt.$$.fragment),Ol=l(),X=s("div"),g(kt.$$.fragment),ql=l(),vt=s("p"),Gl=t("Generates sequences of token ids for models with a language modeling head using "),To=s("strong"),Sl=t(`diverse beam search
decoding`),Fl=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),$l=l(),Eo=s("p"),Al=t("Examples:"),zl=l(),g(yt.$$.fragment),Pl=l(),J=s("div"),g(jt.$$.fragment),Dl=l(),Mt=s("p"),Nl=t("Generates sequences of token ids for models with a language modeling head using "),Oo=s("strong"),Cl=t(`constrained beam search
decoding`),Il=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Wl=l(),qo=s("p"),Bl=t("Examples:"),Hl=l(),g(Lt.$$.fragment),fs=l(),fe=s("h2"),Ce=s("a"),Go=s("span"),g(wt.$$.fragment),Rl=l(),So=s("span"),Ul=t("TFGenerationMixn"),bs=l(),ce=s("div"),g(Tt.$$.fragment),Vl=l(),Et=s("p"),Kl=t("A class containing all of the functions supporting generation, to be used as a mixin in "),un=s("a"),Zl=t("TFPreTrainedModel"),Xl=t("."),Jl=l(),j=s("div"),g(Ot.$$.fragment),Ql=l(),Fo=s("p"),Yl=t(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),ed=l(),qt=s("p"),td=t("Adapted in part from "),Gt=s("a"),nd=t(`Facebook\u2019s XLM beam search
code`),od=t("."),sd=l(),pe=s("p"),ad=t("Apart from "),$o=s("code"),rd=t("input_ids"),id=t(" and "),Ao=s("code"),ld=t("attention_mask"),dd=t(`, all the arguments below will default to the value of the attribute
of the same name inside the `),hn=s("a"),cd=t("PretrainedConfig"),pd=t(` of the model. The default values indicated are the default
values of those config.`),md=l(),St=s("p"),gd=t("Most of these parameters are explained in more detail in "),Ft=s("a"),_d=t(`this blog
post`),ud=t("."),hd=l(),zo=s("p"),fd=t("Examples:"),bd=l(),g($t.$$.fragment),xs=l(),be=s("h2"),Ie=s("a"),Po=s("span"),g(At.$$.fragment),xd=l(),Do=s("span"),kd=t("FlaxGenerationMixn"),ks=l(),O=s("div"),g(zt.$$.fragment),vd=l(),Pt=s("p"),yd=t(`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),fn=s("a"),jd=t("FlaxPreTrainedModel"),Md=t("."),Ld=l(),Dt=s("p"),wd=t("The class exposes "),bn=s("a"),Td=t("generate()"),Ed=t(", which can be used for:"),Od=l(),xe=s("ul"),Q=s("li"),No=s("em"),qd=t("greedy decoding"),Gd=t(" by calling "),Co=s("code"),Sd=t("_greedy_search()"),Fd=t(`if
`),Io=s("code"),$d=t("num_beams=1"),Ad=t(" and "),Wo=s("code"),zd=t("do_sample=False"),Pd=t("."),Dd=l(),Y=s("li"),Bo=s("em"),Nd=t("multinomial sampling"),Cd=t(" by calling "),Ho=s("code"),Id=t("_sample()"),Wd=t("if "),Ro=s("code"),Bd=t("num_beams=1"),Hd=t(`
and `),Uo=s("code"),Rd=t("do_sample=True"),Ud=t("."),Vd=l(),ee=s("li"),Vo=s("em"),Kd=t("beam-search decoding"),Zd=t(" by calling "),Ko=s("code"),Xd=t("_beam_search"),Jd=t(" if "),Zo=s("code"),Qd=t("num_beams>1"),Yd=t(`
and `),Xo=s("code"),ec=t("do_sample=False"),tc=t("."),nc=l(),M=s("div"),g(Nt.$$.fragment),oc=l(),Jo=s("p"),sc=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),ac=l(),ke=s("ul"),te=s("li"),Qo=s("em"),rc=t("greedy decoding"),ic=t(" by calling "),Yo=s("code"),lc=t("_greedy_search()"),dc=t(`if
`),es=s("code"),cc=t("num_beams=1"),pc=t(" and "),ts=s("code"),mc=t("do_sample=False"),gc=t("."),_c=l(),ne=s("li"),ns=s("em"),uc=t("multinomial sampling"),hc=t(" by calling "),os=s("code"),fc=t("_sample()"),bc=t("if "),ss=s("code"),xc=t("num_beams=1"),kc=t(`
and `),as=s("code"),vc=t("do_sample=True"),yc=t("."),jc=l(),oe=s("li"),rs=s("em"),Mc=t("beam-search decoding"),Lc=t(" by calling "),is=s("code"),wc=t("_beam_search"),Tc=t(" if "),ls=s("code"),Ec=t("num_beams>1"),Oc=t(`
and `),ds=s("code"),qc=t("do_sample=False"),Gc=t("."),Sc=l(),me=s("p"),Fc=t("Apart from "),cs=s("code"),$c=t("inputs"),Ac=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),ps=s("code"),zc=t("config.json"),Pc=t(`) which in turn defaults to the
`),xn=s("a"),Dc=t("PretrainedConfig"),Nc=t(" of the model."),Cc=l(),Ct=s("p"),Ic=t("Most of these parameters are explained in more detail in "),It=s("a"),Wc=t(`this blog
post`),Bc=t("."),Hc=l(),ms=s("p"),Rc=t("Examples:"),Uc=l(),g(Wt.$$.fragment),this.h()},l(i){const v=yg('[data-svelte="svelte-1phssyn"]',document.head);_e=a(v,"META",{name:!0,content:!0}),v.forEach(o),Bt=d(i),F=a(i,"H1",{class:!0});var ys=r(F);le=a(ys,"A",{id:!0,class:!0,href:!0});var Vc=r(le);jn=a(Vc,"SPAN",{});var Kc=r(jn);_(Je.$$.fragment,Kc),Kc.forEach(o),Vc.forEach(o),Bs=d(ys),Mn=a(ys,"SPAN",{});var Zc=r(Mn);Hs=n(Zc,"Generation"),Zc.forEach(o),ys.forEach(o),gs=d(i),y=a(i,"P",{});var q=r(y);Rs=n(q,"The methods for auto-regressive text generation, namely "),Ht=a(q,"A",{href:!0});var Xc=r(Ht);Us=n(Xc,"generate()"),Xc.forEach(o),Vs=n(q," (for the PyTorch models), "),Rt=a(q,"A",{href:!0});var Jc=r(Rt);Ks=n(Jc,"generate()"),Jc.forEach(o),Zs=n(q," (for the TensorFlow models) and "),Ut=a(q,"A",{href:!0});var Qc=r(Ut);Xs=n(Qc,"generate()"),Qc.forEach(o),Js=n(q," (for the Flax/JAX models), are implemented in "),Vt=a(q,"A",{href:!0});var Yc=r(Vt);Qs=n(Yc,"GenerationMixin"),Yc.forEach(o),Ys=n(q,", "),Kt=a(q,"A",{href:!0});var ep=r(Kt);ea=n(ep,"TFGenerationMixin"),ep.forEach(o),ta=n(q," and "),Zt=a(q,"A",{href:!0});var tp=r(Zt);na=n(tp,"FlaxGenerationMixin"),tp.forEach(o),oa=n(q," respectively."),q.forEach(o),_s=d(i),w=a(i,"P",{});var se=r(w);sa=n(se,"The "),Ln=a(se,"CODE",{});var np=r(Ln);aa=n(np,"GenerationMixin"),np.forEach(o),ra=n(se," classes are inherited by the corresponding base model classes, "),wn=a(se,"EM",{});var op=r(wn);ia=n(op,"e.g."),op.forEach(o),la=d(se),Xt=a(se,"A",{href:!0});var sp=r(Xt);da=n(sp,"PreTrainedModel"),sp.forEach(o),ca=n(se,", "),Jt=a(se,"A",{href:!0});var ap=r(Jt);pa=n(ap,"TFPreTrainedModel"),ap.forEach(o),ma=n(se,", and "),Qt=a(se,"A",{href:!0});var rp=r(Qt);ga=n(rp,"FlaxPreTrainedModel"),rp.forEach(o),_a=n(se,` respectively, therefore exposing all
methods for auto-regressive text generation to every model class.`),se.forEach(o),us=d(i),he=a(i,"H2",{class:!0});var js=r(he);Ne=a(js,"A",{id:!0,class:!0,href:!0});var ip=r(Ne);Tn=a(ip,"SPAN",{});var lp=r(Tn);_(Qe.$$.fragment,lp),lp.forEach(o),ip.forEach(o),ua=d(js),En=a(js,"SPAN",{});var dp=r(En);ha=n(dp,"GenerationMixn"),dp.forEach(o),js.forEach(o),hs=d(i),m=a(i,"DIV",{class:!0});var k=r(m);_(Ye.$$.fragment,k),fa=d(k),et=a(k,"P",{});var Ms=r(et);ba=n(Ms,"A class containing all functions for auto-regressive text generation, to be used as a mixin in "),Yt=a(Ms,"A",{href:!0});var cp=r(Yt);xa=n(cp,"PreTrainedModel"),cp.forEach(o),ka=n(Ms,"."),Ms.forEach(o),va=d(k),tt=a(k,"P",{});var Ls=r(tt);ya=n(Ls,"The class exposes "),en=a(Ls,"A",{href:!0});var pp=r(en);ja=n(pp,"generate()"),pp.forEach(o),Ma=n(Ls,", which can be used for:"),Ls.forEach(o),La=d(k),T=a(k,"UL",{});var ae=r(T);$=a(ae,"LI",{});var ve=r($);On=a(ve,"EM",{});var mp=r(On);wa=n(mp,"greedy decoding"),mp.forEach(o),Ta=n(ve," by calling "),tn=a(ve,"A",{href:!0});var gp=r(tn);Ea=n(gp,"greedy_search()"),gp.forEach(o),Oa=n(ve," if "),qn=a(ve,"CODE",{});var _p=r(qn);qa=n(_p,"num_beams=1"),_p.forEach(o),Ga=n(ve,` and
`),Gn=a(ve,"CODE",{});var up=r(Gn);Sa=n(up,"do_sample=False"),up.forEach(o),Fa=n(ve,"."),ve.forEach(o),$a=d(ae),A=a(ae,"LI",{});var ye=r(A);Sn=a(ye,"EM",{});var hp=r(Sn);Aa=n(hp,"multinomial sampling"),hp.forEach(o),za=n(ye," by calling "),nn=a(ye,"A",{href:!0});var fp=r(nn);Pa=n(fp,"sample()"),fp.forEach(o),Da=n(ye," if "),Fn=a(ye,"CODE",{});var bp=r(Fn);Na=n(bp,"num_beams=1"),bp.forEach(o),Ca=n(ye,` and
`),$n=a(ye,"CODE",{});var xp=r($n);Ia=n(xp,"do_sample=True"),xp.forEach(o),Wa=n(ye,"."),ye.forEach(o),Ba=d(ae),z=a(ae,"LI",{});var je=r(z);An=a(je,"EM",{});var kp=r(An);Ha=n(kp,"beam-search decoding"),kp.forEach(o),Ra=n(je," by calling "),on=a(je,"A",{href:!0});var vp=r(on);Ua=n(vp,"beam_search()"),vp.forEach(o),Va=n(je," if "),zn=a(je,"CODE",{});var yp=r(zn);Ka=n(yp,"num_beams>1"),yp.forEach(o),Za=n(je,` and
`),Pn=a(je,"CODE",{});var jp=r(Pn);Xa=n(jp,"do_sample=False"),jp.forEach(o),Ja=n(je,"."),je.forEach(o),Qa=d(ae),P=a(ae,"LI",{});var Me=r(P);Dn=a(Me,"EM",{});var Mp=r(Dn);Ya=n(Mp,"beam-search multinomial sampling"),Mp.forEach(o),er=n(Me," by calling "),sn=a(Me,"A",{href:!0});var Lp=r(sn);tr=n(Lp,"beam_sample()"),Lp.forEach(o),nr=n(Me,` if
`),Nn=a(Me,"CODE",{});var wp=r(Nn);or=n(wp,"num_beams>1"),wp.forEach(o),sr=n(Me," and "),Cn=a(Me,"CODE",{});var Tp=r(Cn);ar=n(Tp,"do_sample=True"),Tp.forEach(o),rr=n(Me,"."),Me.forEach(o),ir=d(ae),D=a(ae,"LI",{});var Le=r(D);In=a(Le,"EM",{});var Ep=r(In);lr=n(Ep,"diverse beam-search decoding"),Ep.forEach(o),dr=n(Le," by calling "),an=a(Le,"A",{href:!0});var Op=r(an);cr=n(Op,"group_beam_search()"),Op.forEach(o),pr=n(Le,`, if
`),Wn=a(Le,"CODE",{});var qp=r(Wn);mr=n(qp,"num_beams>1"),qp.forEach(o),gr=n(Le," and "),Bn=a(Le,"CODE",{});var Gp=r(Bn);_r=n(Gp,"num_beam_groups>1"),Gp.forEach(o),ur=n(Le,"."),Le.forEach(o),hr=d(ae),N=a(ae,"LI",{});var we=r(N);Hn=a(we,"EM",{});var Sp=r(Hn);fr=n(Sp,"constrained beam-search decoding"),Sp.forEach(o),br=n(we," by calling "),rn=a(we,"A",{href:!0});var Fp=r(rn);xr=n(Fp,"constrained_beam_search()"),Fp.forEach(o),kr=n(we,`,
if `),Rn=a(we,"CODE",{});var $p=r(Rn);vr=n($p,"constraints!=None"),$p.forEach(o),yr=n(we," or "),Un=a(we,"CODE",{});var Ap=r(Un);jr=n(Ap,"force_words_ids!=None"),Ap.forEach(o),Mr=n(we,"."),we.forEach(o),ae.forEach(o),Lr=d(k),p=a(k,"DIV",{class:!0});var x=r(p);_(nt.$$.fragment,x),wr=d(x),Vn=a(x,"P",{});var zp=r(Vn);Tr=n(zp,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),zp.forEach(o),Er=d(x),E=a(x,"UL",{});var re=r(E);C=a(re,"LI",{});var Te=r(C);Kn=a(Te,"EM",{});var Pp=r(Kn);Or=n(Pp,"greedy decoding"),Pp.forEach(o),qr=n(Te," by calling "),ln=a(Te,"A",{href:!0});var Dp=r(ln);Gr=n(Dp,"greedy_search()"),Dp.forEach(o),Sr=n(Te," if "),Zn=a(Te,"CODE",{});var Np=r(Zn);Fr=n(Np,"num_beams=1"),Np.forEach(o),$r=n(Te,` and
`),Xn=a(Te,"CODE",{});var Cp=r(Xn);Ar=n(Cp,"do_sample=False"),Cp.forEach(o),zr=n(Te,"."),Te.forEach(o),Pr=d(re),I=a(re,"LI",{});var Ee=r(I);Jn=a(Ee,"EM",{});var Ip=r(Jn);Dr=n(Ip,"multinomial sampling"),Ip.forEach(o),Nr=n(Ee," by calling "),dn=a(Ee,"A",{href:!0});var Wp=r(dn);Cr=n(Wp,"sample()"),Wp.forEach(o),Ir=n(Ee," if "),Qn=a(Ee,"CODE",{});var Bp=r(Qn);Wr=n(Bp,"num_beams=1"),Bp.forEach(o),Br=n(Ee,` and
`),Yn=a(Ee,"CODE",{});var Hp=r(Yn);Hr=n(Hp,"do_sample=True"),Hp.forEach(o),Rr=n(Ee,"."),Ee.forEach(o),Ur=d(re),W=a(re,"LI",{});var Oe=r(W);eo=a(Oe,"EM",{});var Rp=r(eo);Vr=n(Rp,"beam-search decoding"),Rp.forEach(o),Kr=n(Oe," by calling "),cn=a(Oe,"A",{href:!0});var Up=r(cn);Zr=n(Up,"beam_search()"),Up.forEach(o),Xr=n(Oe," if "),to=a(Oe,"CODE",{});var Vp=r(to);Jr=n(Vp,"num_beams>1"),Vp.forEach(o),Qr=n(Oe,` and
`),no=a(Oe,"CODE",{});var Kp=r(no);Yr=n(Kp,"do_sample=False"),Kp.forEach(o),ei=n(Oe,"."),Oe.forEach(o),ti=d(re),B=a(re,"LI",{});var qe=r(B);oo=a(qe,"EM",{});var Zp=r(oo);ni=n(Zp,"beam-search multinomial sampling"),Zp.forEach(o),oi=n(qe," by calling "),pn=a(qe,"A",{href:!0});var Xp=r(pn);si=n(Xp,"beam_sample()"),Xp.forEach(o),ai=n(qe,` if
`),so=a(qe,"CODE",{});var Jp=r(so);ri=n(Jp,"num_beams>1"),Jp.forEach(o),ii=n(qe," and "),ao=a(qe,"CODE",{});var Qp=r(ao);li=n(Qp,"do_sample=True"),Qp.forEach(o),di=n(qe,"."),qe.forEach(o),ci=d(re),H=a(re,"LI",{});var Ge=r(H);ro=a(Ge,"EM",{});var Yp=r(ro);pi=n(Yp,"diverse beam-search decoding"),Yp.forEach(o),mi=n(Ge," by calling "),mn=a(Ge,"A",{href:!0});var em=r(mn);gi=n(em,"group_beam_search()"),em.forEach(o),_i=n(Ge,`, if
`),io=a(Ge,"CODE",{});var tm=r(io);ui=n(tm,"num_beams>1"),tm.forEach(o),hi=n(Ge," and "),lo=a(Ge,"CODE",{});var nm=r(lo);fi=n(nm,"num_beam_groups>1"),nm.forEach(o),bi=n(Ge,"."),Ge.forEach(o),xi=d(re),R=a(re,"LI",{});var Se=r(R);co=a(Se,"EM",{});var om=r(co);ki=n(om,"constrained beam-search decoding"),om.forEach(o),vi=n(Se,` by calling
`),gn=a(Se,"A",{href:!0});var sm=r(gn);yi=n(sm,"constrained_beam_search()"),sm.forEach(o),ji=n(Se,", if "),po=a(Se,"CODE",{});var am=r(po);Mi=n(am,"constraints!=None"),am.forEach(o),Li=n(Se,` or
`),mo=a(Se,"CODE",{});var rm=r(mo);wi=n(rm,"force_words_ids!=None"),rm.forEach(o),Ti=n(Se,"."),Se.forEach(o),re.forEach(o),Ei=d(x),de=a(x,"P",{});var We=r(de);Oi=n(We,"Apart from "),go=a(We,"CODE",{});var im=r(go);qi=n(im,"inputs"),im.forEach(o),Gi=n(We,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),_o=a(We,"CODE",{});var lm=r(_o);Si=n(lm,"config.json"),lm.forEach(o),Fi=n(We,`) which in turn defaults to the
`),_n=a(We,"A",{href:!0});var dm=r(_n);$i=n(dm,"PretrainedConfig"),dm.forEach(o),Ai=n(We," of the model."),We.forEach(o),zi=d(x),ot=a(x,"P",{});var ws=r(ot);Pi=n(ws,"Most of these parameters are explained in more detail in "),st=a(ws,"A",{href:!0,rel:!0});var cm=r(st);Di=n(cm,`this blog
post`),cm.forEach(o),Ni=n(ws,"."),ws.forEach(o),Ci=d(x),uo=a(x,"P",{});var pm=r(uo);Ii=n(pm,"Examples:"),pm.forEach(o),Wi=d(x),ho=a(x,"P",{});var mm=r(ho);Bi=n(mm,"Greedy Decoding:"),mm.forEach(o),Hi=d(x),_(at.$$.fragment,x),Ri=d(x),fo=a(x,"P",{});var gm=r(fo);Ui=n(gm,"Multinomial Sampling:"),gm.forEach(o),Vi=d(x),_(rt.$$.fragment,x),Ki=d(x),bo=a(x,"P",{});var _m=r(bo);Zi=n(_m,"Beam-search decoding:"),_m.forEach(o),Xi=d(x),_(it.$$.fragment,x),x.forEach(o),Ji=d(k),U=a(k,"DIV",{class:!0});var Be=r(U);_(lt.$$.fragment,Be),Qi=d(Be),dt=a(Be,"P",{});var Ts=r(dt);Yi=n(Ts,"Generates sequences of token ids for models with a language modeling head using "),xo=a(Ts,"STRONG",{});var um=r(xo);el=n(um,"greedy decoding"),um.forEach(o),tl=n(Ts,` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Ts.forEach(o),nl=d(Be),ko=a(Be,"P",{});var hm=r(ko);ol=n(hm,"Examples:"),hm.forEach(o),sl=d(Be),_(ct.$$.fragment,Be),Be.forEach(o),al=d(k),V=a(k,"DIV",{class:!0});var He=r(V);_(pt.$$.fragment,He),rl=d(He),mt=a(He,"P",{});var Es=r(mt);il=n(Es,"Generates sequences of token ids for models with a language modeling head using "),vo=a(Es,"STRONG",{});var fm=r(vo);ll=n(fm,"multinomial sampling"),fm.forEach(o),dl=n(Es,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Es.forEach(o),cl=d(He),yo=a(He,"P",{});var bm=r(yo);pl=n(bm,"Examples:"),bm.forEach(o),ml=d(He),_(gt.$$.fragment,He),He.forEach(o),gl=d(k),K=a(k,"DIV",{class:!0});var Re=r(K);_(_t.$$.fragment,Re),_l=d(Re),ut=a(Re,"P",{});var Os=r(ut);ul=n(Os,"Generates sequences of token ids for models with a language modeling head using "),jo=a(Os,"STRONG",{});var xm=r(jo);hl=n(xm,"beam search decoding"),xm.forEach(o),fl=n(Os,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Os.forEach(o),bl=d(Re),Mo=a(Re,"P",{});var km=r(Mo);xl=n(km,"Examples:"),km.forEach(o),kl=d(Re),_(ht.$$.fragment,Re),Re.forEach(o),vl=d(k),Z=a(k,"DIV",{class:!0});var Ue=r(Z);_(ft.$$.fragment,Ue),yl=d(Ue),bt=a(Ue,"P",{});var qs=r(bt);jl=n(qs,"Generates sequences of token ids for models with a language modeling head using "),Lo=a(qs,"STRONG",{});var vm=r(Lo);Ml=n(vm,`beam search multinomial
sampling`),vm.forEach(o),Ll=n(qs," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),qs.forEach(o),wl=d(Ue),wo=a(Ue,"P",{});var ym=r(wo);Tl=n(ym,"Examples:"),ym.forEach(o),El=d(Ue),_(xt.$$.fragment,Ue),Ue.forEach(o),Ol=d(k),X=a(k,"DIV",{class:!0});var Ve=r(X);_(kt.$$.fragment,Ve),ql=d(Ve),vt=a(Ve,"P",{});var Gs=r(vt);Gl=n(Gs,"Generates sequences of token ids for models with a language modeling head using "),To=a(Gs,"STRONG",{});var jm=r(To);Sl=n(jm,`diverse beam search
decoding`),jm.forEach(o),Fl=n(Gs," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Gs.forEach(o),$l=d(Ve),Eo=a(Ve,"P",{});var Mm=r(Eo);Al=n(Mm,"Examples:"),Mm.forEach(o),zl=d(Ve),_(yt.$$.fragment,Ve),Ve.forEach(o),Pl=d(k),J=a(k,"DIV",{class:!0});var Ke=r(J);_(jt.$$.fragment,Ke),Dl=d(Ke),Mt=a(Ke,"P",{});var Ss=r(Mt);Nl=n(Ss,"Generates sequences of token ids for models with a language modeling head using "),Oo=a(Ss,"STRONG",{});var Lm=r(Oo);Cl=n(Lm,`constrained beam search
decoding`),Lm.forEach(o),Il=n(Ss," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Ss.forEach(o),Wl=d(Ke),qo=a(Ke,"P",{});var wm=r(qo);Bl=n(wm,"Examples:"),wm.forEach(o),Hl=d(Ke),_(Lt.$$.fragment,Ke),Ke.forEach(o),k.forEach(o),fs=d(i),fe=a(i,"H2",{class:!0});var Fs=r(fe);Ce=a(Fs,"A",{id:!0,class:!0,href:!0});var Tm=r(Ce);Go=a(Tm,"SPAN",{});var Em=r(Go);_(wt.$$.fragment,Em),Em.forEach(o),Tm.forEach(o),Rl=d(Fs),So=a(Fs,"SPAN",{});var Om=r(So);Ul=n(Om,"TFGenerationMixn"),Om.forEach(o),Fs.forEach(o),bs=d(i),ce=a(i,"DIV",{class:!0});var kn=r(ce);_(Tt.$$.fragment,kn),Vl=d(kn),Et=a(kn,"P",{});var $s=r(Et);Kl=n($s,"A class containing all of the functions supporting generation, to be used as a mixin in "),un=a($s,"A",{href:!0});var qm=r(un);Zl=n(qm,"TFPreTrainedModel"),qm.forEach(o),Xl=n($s,"."),$s.forEach(o),Jl=d(kn),j=a(kn,"DIV",{class:!0});var G=r(j);_(Ot.$$.fragment,G),Ql=d(G),Fo=a(G,"P",{});var Gm=r(Fo);Yl=n(Gm,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),Gm.forEach(o),ed=d(G),qt=a(G,"P",{});var As=r(qt);td=n(As,"Adapted in part from "),Gt=a(As,"A",{href:!0,rel:!0});var Sm=r(Gt);nd=n(Sm,`Facebook\u2019s XLM beam search
code`),Sm.forEach(o),od=n(As,"."),As.forEach(o),sd=d(G),pe=a(G,"P",{});var Ze=r(pe);ad=n(Ze,"Apart from "),$o=a(Ze,"CODE",{});var Fm=r($o);rd=n(Fm,"input_ids"),Fm.forEach(o),id=n(Ze," and "),Ao=a(Ze,"CODE",{});var $m=r(Ao);ld=n($m,"attention_mask"),$m.forEach(o),dd=n(Ze,`, all the arguments below will default to the value of the attribute
of the same name inside the `),hn=a(Ze,"A",{href:!0});var Am=r(hn);cd=n(Am,"PretrainedConfig"),Am.forEach(o),pd=n(Ze,` of the model. The default values indicated are the default
values of those config.`),Ze.forEach(o),md=d(G),St=a(G,"P",{});var zs=r(St);gd=n(zs,"Most of these parameters are explained in more detail in "),Ft=a(zs,"A",{href:!0,rel:!0});var zm=r(Ft);_d=n(zm,`this blog
post`),zm.forEach(o),ud=n(zs,"."),zs.forEach(o),hd=d(G),zo=a(G,"P",{});var Pm=r(zo);fd=n(Pm,"Examples:"),Pm.forEach(o),bd=d(G),_($t.$$.fragment,G),G.forEach(o),kn.forEach(o),xs=d(i),be=a(i,"H2",{class:!0});var Ps=r(be);Ie=a(Ps,"A",{id:!0,class:!0,href:!0});var Dm=r(Ie);Po=a(Dm,"SPAN",{});var Nm=r(Po);_(At.$$.fragment,Nm),Nm.forEach(o),Dm.forEach(o),xd=d(Ps),Do=a(Ps,"SPAN",{});var Cm=r(Do);kd=n(Cm,"FlaxGenerationMixn"),Cm.forEach(o),Ps.forEach(o),ks=d(i),O=a(i,"DIV",{class:!0});var ue=r(O);_(zt.$$.fragment,ue),vd=d(ue),Pt=a(ue,"P",{});var Ds=r(Pt);yd=n(Ds,`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),fn=a(Ds,"A",{href:!0});var Im=r(fn);jd=n(Im,"FlaxPreTrainedModel"),Im.forEach(o),Md=n(Ds,"."),Ds.forEach(o),Ld=d(ue),Dt=a(ue,"P",{});var Ns=r(Dt);wd=n(Ns,"The class exposes "),bn=a(Ns,"A",{href:!0});var Wm=r(bn);Td=n(Wm,"generate()"),Wm.forEach(o),Ed=n(Ns,", which can be used for:"),Ns.forEach(o),Od=d(ue),xe=a(ue,"UL",{});var vn=r(xe);Q=a(vn,"LI",{});var Fe=r(Q);No=a(Fe,"EM",{});var Bm=r(No);qd=n(Bm,"greedy decoding"),Bm.forEach(o),Gd=n(Fe," by calling "),Co=a(Fe,"CODE",{});var Hm=r(Co);Sd=n(Hm,"_greedy_search()"),Hm.forEach(o),Fd=n(Fe,`if
`),Io=a(Fe,"CODE",{});var Rm=r(Io);$d=n(Rm,"num_beams=1"),Rm.forEach(o),Ad=n(Fe," and "),Wo=a(Fe,"CODE",{});var Um=r(Wo);zd=n(Um,"do_sample=False"),Um.forEach(o),Pd=n(Fe,"."),Fe.forEach(o),Dd=d(vn),Y=a(vn,"LI",{});var $e=r(Y);Bo=a($e,"EM",{});var Vm=r(Bo);Nd=n(Vm,"multinomial sampling"),Vm.forEach(o),Cd=n($e," by calling "),Ho=a($e,"CODE",{});var Km=r(Ho);Id=n(Km,"_sample()"),Km.forEach(o),Wd=n($e,"if "),Ro=a($e,"CODE",{});var Zm=r(Ro);Bd=n(Zm,"num_beams=1"),Zm.forEach(o),Hd=n($e,`
and `),Uo=a($e,"CODE",{});var Xm=r(Uo);Rd=n(Xm,"do_sample=True"),Xm.forEach(o),Ud=n($e,"."),$e.forEach(o),Vd=d(vn),ee=a(vn,"LI",{});var Ae=r(ee);Vo=a(Ae,"EM",{});var Jm=r(Vo);Kd=n(Jm,"beam-search decoding"),Jm.forEach(o),Zd=n(Ae," by calling "),Ko=a(Ae,"CODE",{});var Qm=r(Ko);Xd=n(Qm,"_beam_search"),Qm.forEach(o),Jd=n(Ae," if "),Zo=a(Ae,"CODE",{});var Ym=r(Zo);Qd=n(Ym,"num_beams>1"),Ym.forEach(o),Yd=n(Ae,`
and `),Xo=a(Ae,"CODE",{});var eg=r(Xo);ec=n(eg,"do_sample=False"),eg.forEach(o),tc=n(Ae,"."),Ae.forEach(o),vn.forEach(o),nc=d(ue),M=a(ue,"DIV",{class:!0});var S=r(M);_(Nt.$$.fragment,S),oc=d(S),Jo=a(S,"P",{});var tg=r(Jo);sc=n(tg,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),tg.forEach(o),ac=d(S),ke=a(S,"UL",{});var yn=r(ke);te=a(yn,"LI",{});var ze=r(te);Qo=a(ze,"EM",{});var ng=r(Qo);rc=n(ng,"greedy decoding"),ng.forEach(o),ic=n(ze," by calling "),Yo=a(ze,"CODE",{});var og=r(Yo);lc=n(og,"_greedy_search()"),og.forEach(o),dc=n(ze,`if
`),es=a(ze,"CODE",{});var sg=r(es);cc=n(sg,"num_beams=1"),sg.forEach(o),pc=n(ze," and "),ts=a(ze,"CODE",{});var ag=r(ts);mc=n(ag,"do_sample=False"),ag.forEach(o),gc=n(ze,"."),ze.forEach(o),_c=d(yn),ne=a(yn,"LI",{});var Pe=r(ne);ns=a(Pe,"EM",{});var rg=r(ns);uc=n(rg,"multinomial sampling"),rg.forEach(o),hc=n(Pe," by calling "),os=a(Pe,"CODE",{});var ig=r(os);fc=n(ig,"_sample()"),ig.forEach(o),bc=n(Pe,"if "),ss=a(Pe,"CODE",{});var lg=r(ss);xc=n(lg,"num_beams=1"),lg.forEach(o),kc=n(Pe,`
and `),as=a(Pe,"CODE",{});var dg=r(as);vc=n(dg,"do_sample=True"),dg.forEach(o),yc=n(Pe,"."),Pe.forEach(o),jc=d(yn),oe=a(yn,"LI",{});var De=r(oe);rs=a(De,"EM",{});var cg=r(rs);Mc=n(cg,"beam-search decoding"),cg.forEach(o),Lc=n(De," by calling "),is=a(De,"CODE",{});var pg=r(is);wc=n(pg,"_beam_search"),pg.forEach(o),Tc=n(De," if "),ls=a(De,"CODE",{});var mg=r(ls);Ec=n(mg,"num_beams>1"),mg.forEach(o),Oc=n(De,`
and `),ds=a(De,"CODE",{});var gg=r(ds);qc=n(gg,"do_sample=False"),gg.forEach(o),Gc=n(De,"."),De.forEach(o),yn.forEach(o),Sc=d(S),me=a(S,"P",{});var Xe=r(me);Fc=n(Xe,"Apart from "),cs=a(Xe,"CODE",{});var _g=r(cs);$c=n(_g,"inputs"),_g.forEach(o),Ac=n(Xe,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),ps=a(Xe,"CODE",{});var ug=r(ps);zc=n(ug,"config.json"),ug.forEach(o),Pc=n(Xe,`) which in turn defaults to the
`),xn=a(Xe,"A",{href:!0});var hg=r(xn);Dc=n(hg,"PretrainedConfig"),hg.forEach(o),Nc=n(Xe," of the model."),Xe.forEach(o),Cc=d(S),Ct=a(S,"P",{});var Cs=r(Ct);Ic=n(Cs,"Most of these parameters are explained in more detail in "),It=a(Cs,"A",{href:!0,rel:!0});var fg=r(It);Wc=n(fg,`this blog
post`),fg.forEach(o),Bc=n(Cs,"."),Cs.forEach(o),Hc=d(S),ms=a(S,"P",{});var bg=r(ms);Rc=n(bg,"Examples:"),bg.forEach(o),Uc=d(S),_(Wt.$$.fragment,S),S.forEach(o),ue.forEach(o),this.h()},h(){c(_e,"name","hf:doc:metadata"),c(_e,"content",JSON.stringify(Lg)),c(le,"id","generation"),c(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(le,"href","#generation"),c(F,"class","relative group"),c(Ht,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(Rt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin.generate"),c(Ut,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),c(Vt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin"),c(Kt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin"),c(Zt,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin"),c(Xt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.PreTrainedModel"),c(Jt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.TFPreTrainedModel"),c(Qt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Ne,"id","transformers.generation_utils.GenerationMixin"),c(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ne,"href","#transformers.generation_utils.GenerationMixin"),c(he,"class","relative group"),c(Yt,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.PreTrainedModel"),c(en,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(tn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),c(nn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),c(on,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),c(sn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),c(an,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),c(rn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.constrained_beam_search"),c(ln,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),c(dn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),c(cn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),c(pn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),c(mn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),c(gn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.constrained_beam_search"),c(_n,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),c(st,"href","https://huggingface.co/blog/how-to-generate"),c(st,"rel","nofollow"),c(p,"class","docstring"),c(U,"class","docstring"),c(V,"class","docstring"),c(K,"class","docstring"),c(Z,"class","docstring"),c(X,"class","docstring"),c(J,"class","docstring"),c(m,"class","docstring"),c(Ce,"id","transformers.generation_tf_utils.TFGenerationMixin"),c(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ce,"href","#transformers.generation_tf_utils.TFGenerationMixin"),c(fe,"class","relative group"),c(un,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.TFPreTrainedModel"),c(Gt,"href","https://github.com/facebookresearch/XLM/blob/9e6f6814d17be4fe5b15f2e6c43eb2b2d76daeb4/src/model/transformer.py#L529"),c(Gt,"rel","nofollow"),c(hn,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ft,"href","https://huggingface.co/blog/how-to-generate"),c(Ft,"rel","nofollow"),c(j,"class","docstring"),c(ce,"class","docstring"),c(Ie,"id","transformers.generation_flax_utils.FlaxGenerationMixin"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.generation_flax_utils.FlaxGenerationMixin"),c(be,"class","relative group"),c(fn,"href","/docs/transformers/pr_15988/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(bn,"href","/docs/transformers/pr_15988/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),c(xn,"href","/docs/transformers/pr_15988/en/main_classes/configuration#transformers.PretrainedConfig"),c(It,"href","https://huggingface.co/blog/how-to-generate"),c(It,"rel","nofollow"),c(M,"class","docstring"),c(O,"class","docstring")},m(i,v){e(document.head,_e),L(i,Bt,v),L(i,F,v),e(F,le),e(le,jn),u(Je,jn,null),e(F,Bs),e(F,Mn),e(Mn,Hs),L(i,gs,v),L(i,y,v),e(y,Rs),e(y,Ht),e(Ht,Us),e(y,Vs),e(y,Rt),e(Rt,Ks),e(y,Zs),e(y,Ut),e(Ut,Xs),e(y,Js),e(y,Vt),e(Vt,Qs),e(y,Ys),e(y,Kt),e(Kt,ea),e(y,ta),e(y,Zt),e(Zt,na),e(y,oa),L(i,_s,v),L(i,w,v),e(w,sa),e(w,Ln),e(Ln,aa),e(w,ra),e(w,wn),e(wn,ia),e(w,la),e(w,Xt),e(Xt,da),e(w,ca),e(w,Jt),e(Jt,pa),e(w,ma),e(w,Qt),e(Qt,ga),e(w,_a),L(i,us,v),L(i,he,v),e(he,Ne),e(Ne,Tn),u(Qe,Tn,null),e(he,ua),e(he,En),e(En,ha),L(i,hs,v),L(i,m,v),u(Ye,m,null),e(m,fa),e(m,et),e(et,ba),e(et,Yt),e(Yt,xa),e(et,ka),e(m,va),e(m,tt),e(tt,ya),e(tt,en),e(en,ja),e(tt,Ma),e(m,La),e(m,T),e(T,$),e($,On),e(On,wa),e($,Ta),e($,tn),e(tn,Ea),e($,Oa),e($,qn),e(qn,qa),e($,Ga),e($,Gn),e(Gn,Sa),e($,Fa),e(T,$a),e(T,A),e(A,Sn),e(Sn,Aa),e(A,za),e(A,nn),e(nn,Pa),e(A,Da),e(A,Fn),e(Fn,Na),e(A,Ca),e(A,$n),e($n,Ia),e(A,Wa),e(T,Ba),e(T,z),e(z,An),e(An,Ha),e(z,Ra),e(z,on),e(on,Ua),e(z,Va),e(z,zn),e(zn,Ka),e(z,Za),e(z,Pn),e(Pn,Xa),e(z,Ja),e(T,Qa),e(T,P),e(P,Dn),e(Dn,Ya),e(P,er),e(P,sn),e(sn,tr),e(P,nr),e(P,Nn),e(Nn,or),e(P,sr),e(P,Cn),e(Cn,ar),e(P,rr),e(T,ir),e(T,D),e(D,In),e(In,lr),e(D,dr),e(D,an),e(an,cr),e(D,pr),e(D,Wn),e(Wn,mr),e(D,gr),e(D,Bn),e(Bn,_r),e(D,ur),e(T,hr),e(T,N),e(N,Hn),e(Hn,fr),e(N,br),e(N,rn),e(rn,xr),e(N,kr),e(N,Rn),e(Rn,vr),e(N,yr),e(N,Un),e(Un,jr),e(N,Mr),e(m,Lr),e(m,p),u(nt,p,null),e(p,wr),e(p,Vn),e(Vn,Tr),e(p,Er),e(p,E),e(E,C),e(C,Kn),e(Kn,Or),e(C,qr),e(C,ln),e(ln,Gr),e(C,Sr),e(C,Zn),e(Zn,Fr),e(C,$r),e(C,Xn),e(Xn,Ar),e(C,zr),e(E,Pr),e(E,I),e(I,Jn),e(Jn,Dr),e(I,Nr),e(I,dn),e(dn,Cr),e(I,Ir),e(I,Qn),e(Qn,Wr),e(I,Br),e(I,Yn),e(Yn,Hr),e(I,Rr),e(E,Ur),e(E,W),e(W,eo),e(eo,Vr),e(W,Kr),e(W,cn),e(cn,Zr),e(W,Xr),e(W,to),e(to,Jr),e(W,Qr),e(W,no),e(no,Yr),e(W,ei),e(E,ti),e(E,B),e(B,oo),e(oo,ni),e(B,oi),e(B,pn),e(pn,si),e(B,ai),e(B,so),e(so,ri),e(B,ii),e(B,ao),e(ao,li),e(B,di),e(E,ci),e(E,H),e(H,ro),e(ro,pi),e(H,mi),e(H,mn),e(mn,gi),e(H,_i),e(H,io),e(io,ui),e(H,hi),e(H,lo),e(lo,fi),e(H,bi),e(E,xi),e(E,R),e(R,co),e(co,ki),e(R,vi),e(R,gn),e(gn,yi),e(R,ji),e(R,po),e(po,Mi),e(R,Li),e(R,mo),e(mo,wi),e(R,Ti),e(p,Ei),e(p,de),e(de,Oi),e(de,go),e(go,qi),e(de,Gi),e(de,_o),e(_o,Si),e(de,Fi),e(de,_n),e(_n,$i),e(de,Ai),e(p,zi),e(p,ot),e(ot,Pi),e(ot,st),e(st,Di),e(ot,Ni),e(p,Ci),e(p,uo),e(uo,Ii),e(p,Wi),e(p,ho),e(ho,Bi),e(p,Hi),u(at,p,null),e(p,Ri),e(p,fo),e(fo,Ui),e(p,Vi),u(rt,p,null),e(p,Ki),e(p,bo),e(bo,Zi),e(p,Xi),u(it,p,null),e(m,Ji),e(m,U),u(lt,U,null),e(U,Qi),e(U,dt),e(dt,Yi),e(dt,xo),e(xo,el),e(dt,tl),e(U,nl),e(U,ko),e(ko,ol),e(U,sl),u(ct,U,null),e(m,al),e(m,V),u(pt,V,null),e(V,rl),e(V,mt),e(mt,il),e(mt,vo),e(vo,ll),e(mt,dl),e(V,cl),e(V,yo),e(yo,pl),e(V,ml),u(gt,V,null),e(m,gl),e(m,K),u(_t,K,null),e(K,_l),e(K,ut),e(ut,ul),e(ut,jo),e(jo,hl),e(ut,fl),e(K,bl),e(K,Mo),e(Mo,xl),e(K,kl),u(ht,K,null),e(m,vl),e(m,Z),u(ft,Z,null),e(Z,yl),e(Z,bt),e(bt,jl),e(bt,Lo),e(Lo,Ml),e(bt,Ll),e(Z,wl),e(Z,wo),e(wo,Tl),e(Z,El),u(xt,Z,null),e(m,Ol),e(m,X),u(kt,X,null),e(X,ql),e(X,vt),e(vt,Gl),e(vt,To),e(To,Sl),e(vt,Fl),e(X,$l),e(X,Eo),e(Eo,Al),e(X,zl),u(yt,X,null),e(m,Pl),e(m,J),u(jt,J,null),e(J,Dl),e(J,Mt),e(Mt,Nl),e(Mt,Oo),e(Oo,Cl),e(Mt,Il),e(J,Wl),e(J,qo),e(qo,Bl),e(J,Hl),u(Lt,J,null),L(i,fs,v),L(i,fe,v),e(fe,Ce),e(Ce,Go),u(wt,Go,null),e(fe,Rl),e(fe,So),e(So,Ul),L(i,bs,v),L(i,ce,v),u(Tt,ce,null),e(ce,Vl),e(ce,Et),e(Et,Kl),e(Et,un),e(un,Zl),e(Et,Xl),e(ce,Jl),e(ce,j),u(Ot,j,null),e(j,Ql),e(j,Fo),e(Fo,Yl),e(j,ed),e(j,qt),e(qt,td),e(qt,Gt),e(Gt,nd),e(qt,od),e(j,sd),e(j,pe),e(pe,ad),e(pe,$o),e($o,rd),e(pe,id),e(pe,Ao),e(Ao,ld),e(pe,dd),e(pe,hn),e(hn,cd),e(pe,pd),e(j,md),e(j,St),e(St,gd),e(St,Ft),e(Ft,_d),e(St,ud),e(j,hd),e(j,zo),e(zo,fd),e(j,bd),u($t,j,null),L(i,xs,v),L(i,be,v),e(be,Ie),e(Ie,Po),u(At,Po,null),e(be,xd),e(be,Do),e(Do,kd),L(i,ks,v),L(i,O,v),u(zt,O,null),e(O,vd),e(O,Pt),e(Pt,yd),e(Pt,fn),e(fn,jd),e(Pt,Md),e(O,Ld),e(O,Dt),e(Dt,wd),e(Dt,bn),e(bn,Td),e(Dt,Ed),e(O,Od),e(O,xe),e(xe,Q),e(Q,No),e(No,qd),e(Q,Gd),e(Q,Co),e(Co,Sd),e(Q,Fd),e(Q,Io),e(Io,$d),e(Q,Ad),e(Q,Wo),e(Wo,zd),e(Q,Pd),e(xe,Dd),e(xe,Y),e(Y,Bo),e(Bo,Nd),e(Y,Cd),e(Y,Ho),e(Ho,Id),e(Y,Wd),e(Y,Ro),e(Ro,Bd),e(Y,Hd),e(Y,Uo),e(Uo,Rd),e(Y,Ud),e(xe,Vd),e(xe,ee),e(ee,Vo),e(Vo,Kd),e(ee,Zd),e(ee,Ko),e(Ko,Xd),e(ee,Jd),e(ee,Zo),e(Zo,Qd),e(ee,Yd),e(ee,Xo),e(Xo,ec),e(ee,tc),e(O,nc),e(O,M),u(Nt,M,null),e(M,oc),e(M,Jo),e(Jo,sc),e(M,ac),e(M,ke),e(ke,te),e(te,Qo),e(Qo,rc),e(te,ic),e(te,Yo),e(Yo,lc),e(te,dc),e(te,es),e(es,cc),e(te,pc),e(te,ts),e(ts,mc),e(te,gc),e(ke,_c),e(ke,ne),e(ne,ns),e(ns,uc),e(ne,hc),e(ne,os),e(os,fc),e(ne,bc),e(ne,ss),e(ss,xc),e(ne,kc),e(ne,as),e(as,vc),e(ne,yc),e(ke,jc),e(ke,oe),e(oe,rs),e(rs,Mc),e(oe,Lc),e(oe,is),e(is,wc),e(oe,Tc),e(oe,ls),e(ls,Ec),e(oe,Oc),e(oe,ds),e(ds,qc),e(oe,Gc),e(M,Sc),e(M,me),e(me,Fc),e(me,cs),e(cs,$c),e(me,Ac),e(me,ps),e(ps,zc),e(me,Pc),e(me,xn),e(xn,Dc),e(me,Nc),e(M,Cc),e(M,Ct),e(Ct,Ic),e(Ct,It),e(It,Wc),e(Ct,Bc),e(M,Hc),e(M,ms),e(ms,Rc),e(M,Uc),u(Wt,M,null),vs=!0},p:jg,i(i){vs||(h(Je.$$.fragment,i),h(Qe.$$.fragment,i),h(Ye.$$.fragment,i),h(nt.$$.fragment,i),h(at.$$.fragment,i),h(rt.$$.fragment,i),h(it.$$.fragment,i),h(lt.$$.fragment,i),h(ct.$$.fragment,i),h(pt.$$.fragment,i),h(gt.$$.fragment,i),h(_t.$$.fragment,i),h(ht.$$.fragment,i),h(ft.$$.fragment,i),h(xt.$$.fragment,i),h(kt.$$.fragment,i),h(yt.$$.fragment,i),h(jt.$$.fragment,i),h(Lt.$$.fragment,i),h(wt.$$.fragment,i),h(Tt.$$.fragment,i),h(Ot.$$.fragment,i),h($t.$$.fragment,i),h(At.$$.fragment,i),h(zt.$$.fragment,i),h(Nt.$$.fragment,i),h(Wt.$$.fragment,i),vs=!0)},o(i){f(Je.$$.fragment,i),f(Qe.$$.fragment,i),f(Ye.$$.fragment,i),f(nt.$$.fragment,i),f(at.$$.fragment,i),f(rt.$$.fragment,i),f(it.$$.fragment,i),f(lt.$$.fragment,i),f(ct.$$.fragment,i),f(pt.$$.fragment,i),f(gt.$$.fragment,i),f(_t.$$.fragment,i),f(ht.$$.fragment,i),f(ft.$$.fragment,i),f(xt.$$.fragment,i),f(kt.$$.fragment,i),f(yt.$$.fragment,i),f(jt.$$.fragment,i),f(Lt.$$.fragment,i),f(wt.$$.fragment,i),f(Tt.$$.fragment,i),f(Ot.$$.fragment,i),f($t.$$.fragment,i),f(At.$$.fragment,i),f(zt.$$.fragment,i),f(Nt.$$.fragment,i),f(Wt.$$.fragment,i),vs=!1},d(i){o(_e),i&&o(Bt),i&&o(F),b(Je),i&&o(gs),i&&o(y),i&&o(_s),i&&o(w),i&&o(us),i&&o(he),b(Qe),i&&o(hs),i&&o(m),b(Ye),b(nt),b(at),b(rt),b(it),b(lt),b(ct),b(pt),b(gt),b(_t),b(ht),b(ft),b(xt),b(kt),b(yt),b(jt),b(Lt),i&&o(fs),i&&o(fe),b(wt),i&&o(bs),i&&o(ce),b(Tt),b(Ot),b($t),i&&o(xs),i&&o(be),b(At),i&&o(ks),i&&o(O),b(zt),b(Nt),b(Wt)}}}const Lg={local:"generation",sections:[{local:"transformers.generation_utils.GenerationMixin",title:"GenerationMixn"},{local:"transformers.generation_tf_utils.TFGenerationMixin",title:"TFGenerationMixn"},{local:"transformers.generation_flax_utils.FlaxGenerationMixin",title:"FlaxGenerationMixn"}],title:"Generation"};function wg(Ws,_e,Bt){let{fw:F}=_e;return Ws.$$set=le=>{"fw"in le&&Bt(0,F=le.fw)},[F]}class Sg extends xg{constructor(_e){super();kg(this,_e,wg,Mg,vg,{fw:0})}}export{Sg as default,Lg as metadata};
