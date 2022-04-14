import{S as en,i as tn,s as nn,e as n,k as p,w as f,t as r,M as an,c as a,d as t,m as c,a as o,x as g,h as l,b as h,F as e,g as d,y as _,L as on,q as b,o as k,B as y,v as rn}from"../../chunks/vendor-6b77c823.js";import{D as Cs}from"../../chunks/Docstring-90e3aa51.js";import{C as yt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as me}from"../../chunks/IconCopyLink-7a11ce68.js";function ln(jt){let T,Ds,x,B,_s,I,ue,bs,fe,Ss,q,E,ks,M,ge,ys,_e,Fs,L,be,O,ke,ye,Ns,ns,je,Is,as,js,ve,Ms,j,we,R,Te,xe,G,qe,$e,Os,A,ze,os,Be,Ee,Rs,rs,Le,Gs,$,P,vs,U,Ae,ws,Pe,Us,ls,Ce,Hs,H,Ws,is,De,Vs,W,Xs,v,Se,ps,Fe,Ne,Ts,Ie,Me,Ks,V,Js,z,C,xs,X,Oe,qs,Re,Qs,m,K,Ge,$s,Ue,He,J,We,cs,Ve,Xe,Ke,w,Q,Je,zs,Qe,Ye,Y,hs,Ze,Bs,st,et,ds,tt,Es,nt,at,D,Z,ot,Ls,rt,lt,S,ss,it,As,pt,ct,F,es,ht,ts,dt,Ps,mt,ut,Ys,N,ft,ms,gt,_t,Zs;return I=new me({}),M=new me({}),U=new me({}),H=new yt({props:{code:`from transformers import T5ForConditionalGeneration
import torch

model = T5ForConditionalGeneration.from_pretrained("google/byt5-small")

num_special_tokens = 3
# Model has 3 special tokens which take up the input ids 0,1,2 of ByT5.
# => Need to shift utf-8 character encodings by 3 before passing ids to model.

input_ids = torch.tensor([list("Life is like a box of chocolates.".encode("utf-8"))]) + num_special_tokens

labels = torch.tensor([list("La vie est comme une bo\xEEte de chocolat.".encode("utf-8"))]) + num_special_tokens

loss = model(input_ids, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_special_tokens = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Model has 3 special tokens which take up the input ids 0,1,2 of ByT5.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># =&gt; Need to shift utf-8 character encodings by 3 before passing ids to model.</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([<span class="hljs-built_in">list</span>(<span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>.encode(<span class="hljs-string">&quot;utf-8&quot;</span>))]) + num_special_tokens

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-built_in">list</span>(<span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>.encode(<span class="hljs-string">&quot;utf-8&quot;</span>))]) + num_special_tokens

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">2.66</span>`}}),W=new yt({props:{code:`from transformers import T5ForConditionalGeneration, AutoTokenizer

model = T5ForConditionalGeneration.from_pretrained("google/byt5-small")
tokenizer = AutoTokenizer.from_pretrained("google/byt5-small")

model_inputs = tokenizer(
    ["Life is like a box of chocolates.", "Today is Monday."], padding="longest", return_tensors="pt"
)
labels_dict = tokenizer(
    ["La vie est comme une bo\xEEte de chocolat.", "Aujourd'hui c'est lundi."], padding="longest", return_tensors="pt"
)
labels = labels_dict.input_ids

loss = model(**model_inputs, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(
<span class="hljs-meta">... </span>    [<span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>, <span class="hljs-string">&quot;Today is Monday.&quot;</span>], padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels_dict = tokenizer(
<span class="hljs-meta">... </span>    [<span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>, <span class="hljs-string">&quot;Aujourd&#x27;hui c&#x27;est lundi.&quot;</span>], padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = labels_dict.input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**model_inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">17.9</span>`}}),V=new yt({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

tokenizer = AutoTokenizer.from_pretrained("google/byt5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("google/byt5-base")

input_ids_prompt = "The dog chases a ball in the park."
input_ids = tokenizer(input_ids_prompt).input_ids

# Note that we cannot add "{extra_id_...}" to the string directly
# as the Byte tokenizer would incorrectly merge the tokens
# For ByT5, we need to work directly on the character level
# Contrary to T5, ByT5 does not use sentinel tokens for masking, but instead
# uses final utf character ids.
# UTF-8 is represented by 8 bits and ByT5 has 3 special tokens.
# => There are 2**8+2 = 259 input ids and mask tokens count down from index 258.
# => mask to "The dog [258]a ball [257]park."

input_ids = torch.tensor([input_ids[:8] + [258] + input_ids[14:21] + [257] + input_ids[28:]])
input_ids

# ByT5 produces only one char at a time so we need to produce many more output characters here -> set \`max_length=100\`.
output_ids = model.generate(input_ids, max_length=100)[0].tolist()
output_ids

# ^- Note how 258 descends to 257, 256, 255

# Now we need to split on the sentinel tokens, let's write a short loop for this
output_ids_list = []
start_token = 0
sentinel_token = 258
while sentinel_token in output_ids:
    split_idx = output_ids.index(sentinel_token)
    output_ids_list.append(output_ids[start_token:split_idx])
    start_token = split_idx
    sentinel_token -= 1

output_ids_list.append(output_ids[start_token:])
output_string = tokenizer.batch_decode(output_ids_list)
output_string`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSeq2SeqLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/byt5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;google/byt5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids_prompt = <span class="hljs-string">&quot;The dog chases a ball in the park.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_ids_prompt).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that we cannot add &quot;{extra_id_...}&quot; to the string directly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># as the Byte tokenizer would incorrectly merge the tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For ByT5, we need to work directly on the character level</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Contrary to T5, ByT5 does not use sentinel tokens for masking, but instead</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># uses final utf character ids.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># UTF-8 is represented by 8 bits and ByT5 has 3 special tokens.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># =&gt; There are 2**8+2 = 259 input ids and mask tokens count down from index 258.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># =&gt; mask to &quot;The dog [258]a ball [257]park.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([input_ids[:<span class="hljs-number">8</span>] + [<span class="hljs-number">258</span>] + input_ids[<span class="hljs-number">14</span>:<span class="hljs-number">21</span>] + [<span class="hljs-number">257</span>] + input_ids[<span class="hljs-number">28</span>:]])
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids
tensor([[ <span class="hljs-number">87</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">114</span>, <span class="hljs-number">106</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">258</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">100</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">101</span>, <span class="hljs-number">100</span>, <span class="hljs-number">111</span>, <span class="hljs-number">111</span>, <span class="hljs-number">257</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">115</span>, <span class="hljs-number">100</span>, <span class="hljs-number">117</span>, <span class="hljs-number">110</span>,  <span class="hljs-number">49</span>,   <span class="hljs-number">1</span>]])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># ByT5 produces only one char at a time so we need to produce many more output characters here -&gt; set \`max_length=100\`.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_ids = model.generate(input_ids, max_length=<span class="hljs-number">100</span>)[<span class="hljs-number">0</span>].tolist()
<span class="hljs-meta">&gt;&gt;&gt; </span>output_ids
[<span class="hljs-number">0</span>, <span class="hljs-number">258</span>, <span class="hljs-number">108</span>, <span class="hljs-number">118</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">114</span>, <span class="hljs-number">113</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">122</span>, <span class="hljs-number">107</span>, <span class="hljs-number">114</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">114</span>, <span class="hljs-number">104</span>, <span class="hljs-number">118</span>, <span class="hljs-number">257</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">108</span>, <span class="hljs-number">113</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">108</span>, <span class="hljs-number">118</span>, <span class="hljs-number">102</span>, <span class="hljs-number">114</span>, <span class="hljs-number">256</span>, <span class="hljs-number">108</span>, <span class="hljs-number">113</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>, <span class="hljs-number">35</span>, <span class="hljs-number">115</span>, <span class="hljs-number">100</span>, <span class="hljs-number">117</span>, <span class="hljs-number">110</span>,  <span class="hljs-number">49</span>,  <span class="hljs-number">35</span>,  <span class="hljs-number">87</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">114</span>, <span class="hljs-number">106</span>, <span class="hljs-number">35</span>, <span class="hljs-number">108</span>, <span class="hljs-number">118</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">114</span>, <span class="hljs-number">113</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">122</span>, <span class="hljs-number">107</span>, <span class="hljs-number">114</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">114</span>, <span class="hljs-number">104</span>, <span class="hljs-number">118</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">100</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">101</span>, <span class="hljs-number">100</span>, <span class="hljs-number">111</span>, <span class="hljs-number">111</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">108</span>, <span class="hljs-number">113</span>, <span class="hljs-number">255</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">108</span>, <span class="hljs-number">113</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">115</span>, <span class="hljs-number">100</span>, <span class="hljs-number">117</span>, <span class="hljs-number">110</span>,  <span class="hljs-number">49</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># ^- Note how 258 descends to 257, 256, 255</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Now we need to split on the sentinel tokens, let&#x27;s write a short loop for this</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_ids_list = []
<span class="hljs-meta">&gt;&gt;&gt; </span>start_token = <span class="hljs-number">0</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sentinel_token = <span class="hljs-number">258</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">while</span> sentinel_token <span class="hljs-keyword">in</span> output_ids:
<span class="hljs-meta">... </span>    split_idx = output_ids.index(sentinel_token)
<span class="hljs-meta">... </span>    output_ids_list.append(output_ids[start_token:split_idx])
<span class="hljs-meta">... </span>    start_token = split_idx
<span class="hljs-meta">... </span>    sentinel_token -= <span class="hljs-number">1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>output_ids_list.append(output_ids[start_token:])
<span class="hljs-meta">&gt;&gt;&gt; </span>output_string = tokenizer.batch_decode(output_ids_list)
<span class="hljs-meta">&gt;&gt;&gt; </span>output_string
[<span class="hljs-string">&#x27;&lt;pad&gt;&#x27;</span>, <span class="hljs-string">&#x27;is the one who does&#x27;</span>, <span class="hljs-string">&#x27; in the disco&#x27;</span>, <span class="hljs-string">&#x27;in the park. The dog is the one who does a ball in&#x27;</span>, <span class="hljs-string">&#x27; in the park.&#x27;</span>]`}}),X=new me({}),K=new Cs({props:{name:"class transformers.ByT5Tokenizer",anchor:"transformers.ByT5Tokenizer",parameters:[{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 125"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ByT5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.ByT5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.ByT5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.ByT5Tokenizer.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in ByT5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.ByT5Tokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16783/src/transformers/models/byt5/tokenization_byt5.py#L28"}}),Q=new Cs({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16783/src/transformers/models/byt5/tokenization_byt5.py#L177",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Z=new Cs({props:{name:"convert_tokens_to_string",anchor:"transformers.ByT5Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16783/src/transformers/models/byt5/tokenization_byt5.py#L228"}}),ss=new Cs({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/pr_16783/src/transformers/models/byt5/tokenization_byt5.py#L155",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),es=new Cs({props:{name:"get_special_tokens_mask",anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/pr_16783/src/transformers/models/byt5/tokenization_byt5.py#L117",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){T=n("meta"),Ds=p(),x=n("h1"),B=n("a"),_s=n("span"),f(I.$$.fragment),ue=p(),bs=n("span"),fe=r("ByT5"),Ss=p(),q=n("h2"),E=n("a"),ks=n("span"),f(M.$$.fragment),ge=p(),ys=n("span"),_e=r("Overview"),Fs=p(),L=n("p"),be=r("The ByT5 model was presented in "),O=n("a"),ke=r("ByT5: Towards a token-free future with pre-trained byte-to-byte models"),ye=r(` by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir
Kale, Adam Roberts, Colin Raffel.`),Ns=p(),ns=n("p"),je=r("The abstract from the paper is the following:"),Is=p(),as=n("p"),js=n("em"),ve=r(`Most widely-used pre-trained language models operate on sequences of tokens corresponding to word or subword units.
Encoding text as a sequence of tokens requires a tokenizer, which is typically created as an independent artifact from
the model. Token-free models that instead operate directly on raw text (bytes or characters) have many benefits: they
can process text in any language out of the box, they are more robust to noise, and they minimize technical debt by
removing complex and error-prone text preprocessing pipelines. Since byte or character sequences are longer than token
sequences, past work on token-free models has often introduced new model architectures designed to amortize the cost of
operating directly on raw text. In this paper, we show that a standard Transformer architecture can be used with
minimal modifications to process byte sequences. We carefully characterize the trade-offs in terms of parameter count,
training FLOPs, and inference speed, and show that byte-level models are competitive with their token-level
counterparts. We also demonstrate that byte-level models are significantly more robust to noise and perform better on
tasks that are sensitive to spelling and pronunciation. As part of our contribution, we release a new set of
pre-trained byte-level Transformer models based on the T5 architecture, as well as all code and data used in our
experiments.`),Ms=p(),j=n("p"),we=r("This model was contributed by "),R=n("a"),Te=r("patrickvonplaten"),xe=r(`. The original code can be
found `),G=n("a"),qe=r("here"),$e=r("."),Os=p(),A=n("p"),ze=r("ByT5\u2019s architecture is based on the T5v1.1 model, so one can refer to "),os=n("a"),Be=r("T5v1.1\u2019s documentation page"),Ee=r(`. They
only differ in how inputs should be prepared for the model, see the code examples below.`),Rs=p(),rs=n("p"),Le=r(`Since ByT5 was pre-trained unsupervisedly, there\u2019s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`),Gs=p(),$=n("h3"),P=n("a"),vs=n("span"),f(U.$$.fragment),Ae=p(),ws=n("span"),Pe=r("Example"),Us=p(),ls=n("p"),Ce=r("ByT5 works on raw UTF-8 bytes, so it can be used without a tokenizer:"),Hs=p(),f(H.$$.fragment),Ws=p(),is=n("p"),De=r("For batched inference and training it is however recommended to make use of the tokenizer:"),Vs=p(),f(W.$$.fragment),Xs=p(),v=n("p"),Se=r("Similar to "),ps=n("a"),Fe=r("T5"),Ne=r(`, ByT5 was trained on the span-mask denoising task. However,
since the model works directly on characters, the pretraining task is a bit
different. Let\u2019s corrupt some characters of the
input sentence `),Ts=n("code"),Ie=r('"The dog chases a ball in the park."'),Me=r(` and ask ByT5 to predict them
for us.`),Ks=p(),f(V.$$.fragment),Js=p(),z=n("h2"),C=n("a"),xs=n("span"),f(X.$$.fragment),Oe=p(),qs=n("span"),Re=r("ByT5Tokenizer"),Qs=p(),m=n("div"),f(K.$$.fragment),Ge=p(),$s=n("p"),Ue=r("Construct a ByT5 tokenizer. ByT5 simply uses raw bytes utf-8 encoding."),He=p(),J=n("p"),We=r("This tokenizer inherits from "),cs=n("a"),Ve=r("PreTrainedTokenizer"),Xe=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ke=p(),w=n("div"),f(Q.$$.fragment),Je=p(),zs=n("p"),Qe=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Ye=p(),Y=n("ul"),hs=n("li"),Ze=r("single sequence: "),Bs=n("code"),st=r("X </s>"),et=p(),ds=n("li"),tt=r("pair of sequences: "),Es=n("code"),nt=r("A </s> B </s>"),at=p(),D=n("div"),f(Z.$$.fragment),ot=p(),Ls=n("p"),rt=r("Converts a sequence of tokens (string) in a single string."),lt=p(),S=n("div"),f(ss.$$.fragment),it=p(),As=n("p"),pt=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. ByT5 does not
make use of token type ids, therefore a list of zeros is returned.`),ct=p(),F=n("div"),f(es.$$.fragment),ht=p(),ts=n("p"),dt=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ps=n("code"),mt=r("prepare_for_model"),ut=r(" method."),Ys=p(),N=n("p"),ft=r("See "),ms=n("a"),gt=r("ByT5Tokenizer"),_t=r(" for all details."),this.h()},l(s){const i=an('[data-svelte="svelte-1phssyn"]',document.head);T=a(i,"META",{name:!0,content:!0}),i.forEach(t),Ds=c(s),x=a(s,"H1",{class:!0});var se=o(x);B=a(se,"A",{id:!0,class:!0,href:!0});var vt=o(B);_s=a(vt,"SPAN",{});var wt=o(_s);g(I.$$.fragment,wt),wt.forEach(t),vt.forEach(t),ue=c(se),bs=a(se,"SPAN",{});var Tt=o(bs);fe=l(Tt,"ByT5"),Tt.forEach(t),se.forEach(t),Ss=c(s),q=a(s,"H2",{class:!0});var ee=o(q);E=a(ee,"A",{id:!0,class:!0,href:!0});var xt=o(E);ks=a(xt,"SPAN",{});var qt=o(ks);g(M.$$.fragment,qt),qt.forEach(t),xt.forEach(t),ge=c(ee),ys=a(ee,"SPAN",{});var $t=o(ys);_e=l($t,"Overview"),$t.forEach(t),ee.forEach(t),Fs=c(s),L=a(s,"P",{});var te=o(L);be=l(te,"The ByT5 model was presented in "),O=a(te,"A",{href:!0,rel:!0});var zt=o(O);ke=l(zt,"ByT5: Towards a token-free future with pre-trained byte-to-byte models"),zt.forEach(t),ye=l(te,` by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir
Kale, Adam Roberts, Colin Raffel.`),te.forEach(t),Ns=c(s),ns=a(s,"P",{});var Bt=o(ns);je=l(Bt,"The abstract from the paper is the following:"),Bt.forEach(t),Is=c(s),as=a(s,"P",{});var Et=o(as);js=a(Et,"EM",{});var Lt=o(js);ve=l(Lt,`Most widely-used pre-trained language models operate on sequences of tokens corresponding to word or subword units.
Encoding text as a sequence of tokens requires a tokenizer, which is typically created as an independent artifact from
the model. Token-free models that instead operate directly on raw text (bytes or characters) have many benefits: they
can process text in any language out of the box, they are more robust to noise, and they minimize technical debt by
removing complex and error-prone text preprocessing pipelines. Since byte or character sequences are longer than token
sequences, past work on token-free models has often introduced new model architectures designed to amortize the cost of
operating directly on raw text. In this paper, we show that a standard Transformer architecture can be used with
minimal modifications to process byte sequences. We carefully characterize the trade-offs in terms of parameter count,
training FLOPs, and inference speed, and show that byte-level models are competitive with their token-level
counterparts. We also demonstrate that byte-level models are significantly more robust to noise and perform better on
tasks that are sensitive to spelling and pronunciation. As part of our contribution, we release a new set of
pre-trained byte-level Transformer models based on the T5 architecture, as well as all code and data used in our
experiments.`),Lt.forEach(t),Et.forEach(t),Ms=c(s),j=a(s,"P",{});var us=o(j);we=l(us,"This model was contributed by "),R=a(us,"A",{href:!0,rel:!0});var At=o(R);Te=l(At,"patrickvonplaten"),At.forEach(t),xe=l(us,`. The original code can be
found `),G=a(us,"A",{href:!0,rel:!0});var Pt=o(G);qe=l(Pt,"here"),Pt.forEach(t),$e=l(us,"."),us.forEach(t),Os=c(s),A=a(s,"P",{});var ne=o(A);ze=l(ne,"ByT5\u2019s architecture is based on the T5v1.1 model, so one can refer to "),os=a(ne,"A",{href:!0});var Ct=o(os);Be=l(Ct,"T5v1.1\u2019s documentation page"),Ct.forEach(t),Ee=l(ne,`. They
only differ in how inputs should be prepared for the model, see the code examples below.`),ne.forEach(t),Rs=c(s),rs=a(s,"P",{});var Dt=o(rs);Le=l(Dt,`Since ByT5 was pre-trained unsupervisedly, there\u2019s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`),Dt.forEach(t),Gs=c(s),$=a(s,"H3",{class:!0});var ae=o($);P=a(ae,"A",{id:!0,class:!0,href:!0});var St=o(P);vs=a(St,"SPAN",{});var Ft=o(vs);g(U.$$.fragment,Ft),Ft.forEach(t),St.forEach(t),Ae=c(ae),ws=a(ae,"SPAN",{});var Nt=o(ws);Pe=l(Nt,"Example"),Nt.forEach(t),ae.forEach(t),Us=c(s),ls=a(s,"P",{});var It=o(ls);Ce=l(It,"ByT5 works on raw UTF-8 bytes, so it can be used without a tokenizer:"),It.forEach(t),Hs=c(s),g(H.$$.fragment,s),Ws=c(s),is=a(s,"P",{});var Mt=o(is);De=l(Mt,"For batched inference and training it is however recommended to make use of the tokenizer:"),Mt.forEach(t),Vs=c(s),g(W.$$.fragment,s),Xs=c(s),v=a(s,"P",{});var fs=o(v);Se=l(fs,"Similar to "),ps=a(fs,"A",{href:!0});var Ot=o(ps);Fe=l(Ot,"T5"),Ot.forEach(t),Ne=l(fs,`, ByT5 was trained on the span-mask denoising task. However,
since the model works directly on characters, the pretraining task is a bit
different. Let\u2019s corrupt some characters of the
input sentence `),Ts=a(fs,"CODE",{});var Rt=o(Ts);Ie=l(Rt,'"The dog chases a ball in the park."'),Rt.forEach(t),Me=l(fs,` and ask ByT5 to predict them
for us.`),fs.forEach(t),Ks=c(s),g(V.$$.fragment,s),Js=c(s),z=a(s,"H2",{class:!0});var oe=o(z);C=a(oe,"A",{id:!0,class:!0,href:!0});var Gt=o(C);xs=a(Gt,"SPAN",{});var Ut=o(xs);g(X.$$.fragment,Ut),Ut.forEach(t),Gt.forEach(t),Oe=c(oe),qs=a(oe,"SPAN",{});var Ht=o(qs);Re=l(Ht,"ByT5Tokenizer"),Ht.forEach(t),oe.forEach(t),Qs=c(s),m=a(s,"DIV",{class:!0});var u=o(m);g(K.$$.fragment,u),Ge=c(u),$s=a(u,"P",{});var Wt=o($s);Ue=l(Wt,"Construct a ByT5 tokenizer. ByT5 simply uses raw bytes utf-8 encoding."),Wt.forEach(t),He=c(u),J=a(u,"P",{});var re=o(J);We=l(re,"This tokenizer inherits from "),cs=a(re,"A",{href:!0});var Vt=o(cs);Ve=l(Vt,"PreTrainedTokenizer"),Vt.forEach(t),Xe=l(re,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),re.forEach(t),Ke=c(u),w=a(u,"DIV",{class:!0});var gs=o(w);g(Q.$$.fragment,gs),Je=c(gs),zs=a(gs,"P",{});var Xt=o(zs);Qe=l(Xt,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Xt.forEach(t),Ye=c(gs),Y=a(gs,"UL",{});var le=o(Y);hs=a(le,"LI",{});var bt=o(hs);Ze=l(bt,"single sequence: "),Bs=a(bt,"CODE",{});var Kt=o(Bs);st=l(Kt,"X </s>"),Kt.forEach(t),bt.forEach(t),et=c(le),ds=a(le,"LI",{});var kt=o(ds);tt=l(kt,"pair of sequences: "),Es=a(kt,"CODE",{});var Jt=o(Es);nt=l(Jt,"A </s> B </s>"),Jt.forEach(t),kt.forEach(t),le.forEach(t),gs.forEach(t),at=c(u),D=a(u,"DIV",{class:!0});var ie=o(D);g(Z.$$.fragment,ie),ot=c(ie),Ls=a(ie,"P",{});var Qt=o(Ls);rt=l(Qt,"Converts a sequence of tokens (string) in a single string."),Qt.forEach(t),ie.forEach(t),lt=c(u),S=a(u,"DIV",{class:!0});var pe=o(S);g(ss.$$.fragment,pe),it=c(pe),As=a(pe,"P",{});var Yt=o(As);pt=l(Yt,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. ByT5 does not
make use of token type ids, therefore a list of zeros is returned.`),Yt.forEach(t),pe.forEach(t),ct=c(u),F=a(u,"DIV",{class:!0});var ce=o(F);g(es.$$.fragment,ce),ht=c(ce),ts=a(ce,"P",{});var he=o(ts);dt=l(he,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ps=a(he,"CODE",{});var Zt=o(Ps);mt=l(Zt,"prepare_for_model"),Zt.forEach(t),ut=l(he," method."),he.forEach(t),ce.forEach(t),u.forEach(t),Ys=c(s),N=a(s,"P",{});var de=o(N);ft=l(de,"See "),ms=a(de,"A",{href:!0});var sn=o(ms);gt=l(sn,"ByT5Tokenizer"),sn.forEach(t),_t=l(de," for all details."),de.forEach(t),this.h()},h(){h(T,"name","hf:doc:metadata"),h(T,"content",JSON.stringify(pn)),h(B,"id","byt5"),h(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(B,"href","#byt5"),h(x,"class","relative group"),h(E,"id","overview"),h(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(E,"href","#overview"),h(q,"class","relative group"),h(O,"href","https://arxiv.org/abs/2105.13626"),h(O,"rel","nofollow"),h(R,"href","https://huggingface.co/patrickvonplaten"),h(R,"rel","nofollow"),h(G,"href","https://github.com/google-research/byt5"),h(G,"rel","nofollow"),h(os,"href","t5v1.1"),h(P,"id","example"),h(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(P,"href","#example"),h($,"class","relative group"),h(ps,"href","t5"),h(C,"id","transformers.ByT5Tokenizer"),h(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(C,"href","#transformers.ByT5Tokenizer"),h(z,"class","relative group"),h(cs,"href","/docs/transformers/pr_16783/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(w,"class","docstring"),h(D,"class","docstring"),h(S,"class","docstring"),h(F,"class","docstring"),h(m,"class","docstring"),h(ms,"href","/docs/transformers/pr_16783/en/model_doc/byt5#transformers.ByT5Tokenizer")},m(s,i){e(document.head,T),d(s,Ds,i),d(s,x,i),e(x,B),e(B,_s),_(I,_s,null),e(x,ue),e(x,bs),e(bs,fe),d(s,Ss,i),d(s,q,i),e(q,E),e(E,ks),_(M,ks,null),e(q,ge),e(q,ys),e(ys,_e),d(s,Fs,i),d(s,L,i),e(L,be),e(L,O),e(O,ke),e(L,ye),d(s,Ns,i),d(s,ns,i),e(ns,je),d(s,Is,i),d(s,as,i),e(as,js),e(js,ve),d(s,Ms,i),d(s,j,i),e(j,we),e(j,R),e(R,Te),e(j,xe),e(j,G),e(G,qe),e(j,$e),d(s,Os,i),d(s,A,i),e(A,ze),e(A,os),e(os,Be),e(A,Ee),d(s,Rs,i),d(s,rs,i),e(rs,Le),d(s,Gs,i),d(s,$,i),e($,P),e(P,vs),_(U,vs,null),e($,Ae),e($,ws),e(ws,Pe),d(s,Us,i),d(s,ls,i),e(ls,Ce),d(s,Hs,i),_(H,s,i),d(s,Ws,i),d(s,is,i),e(is,De),d(s,Vs,i),_(W,s,i),d(s,Xs,i),d(s,v,i),e(v,Se),e(v,ps),e(ps,Fe),e(v,Ne),e(v,Ts),e(Ts,Ie),e(v,Me),d(s,Ks,i),_(V,s,i),d(s,Js,i),d(s,z,i),e(z,C),e(C,xs),_(X,xs,null),e(z,Oe),e(z,qs),e(qs,Re),d(s,Qs,i),d(s,m,i),_(K,m,null),e(m,Ge),e(m,$s),e($s,Ue),e(m,He),e(m,J),e(J,We),e(J,cs),e(cs,Ve),e(J,Xe),e(m,Ke),e(m,w),_(Q,w,null),e(w,Je),e(w,zs),e(zs,Qe),e(w,Ye),e(w,Y),e(Y,hs),e(hs,Ze),e(hs,Bs),e(Bs,st),e(Y,et),e(Y,ds),e(ds,tt),e(ds,Es),e(Es,nt),e(m,at),e(m,D),_(Z,D,null),e(D,ot),e(D,Ls),e(Ls,rt),e(m,lt),e(m,S),_(ss,S,null),e(S,it),e(S,As),e(As,pt),e(m,ct),e(m,F),_(es,F,null),e(F,ht),e(F,ts),e(ts,dt),e(ts,Ps),e(Ps,mt),e(ts,ut),d(s,Ys,i),d(s,N,i),e(N,ft),e(N,ms),e(ms,gt),e(N,_t),Zs=!0},p:on,i(s){Zs||(b(I.$$.fragment,s),b(M.$$.fragment,s),b(U.$$.fragment,s),b(H.$$.fragment,s),b(W.$$.fragment,s),b(V.$$.fragment,s),b(X.$$.fragment,s),b(K.$$.fragment,s),b(Q.$$.fragment,s),b(Z.$$.fragment,s),b(ss.$$.fragment,s),b(es.$$.fragment,s),Zs=!0)},o(s){k(I.$$.fragment,s),k(M.$$.fragment,s),k(U.$$.fragment,s),k(H.$$.fragment,s),k(W.$$.fragment,s),k(V.$$.fragment,s),k(X.$$.fragment,s),k(K.$$.fragment,s),k(Q.$$.fragment,s),k(Z.$$.fragment,s),k(ss.$$.fragment,s),k(es.$$.fragment,s),Zs=!1},d(s){t(T),s&&t(Ds),s&&t(x),y(I),s&&t(Ss),s&&t(q),y(M),s&&t(Fs),s&&t(L),s&&t(Ns),s&&t(ns),s&&t(Is),s&&t(as),s&&t(Ms),s&&t(j),s&&t(Os),s&&t(A),s&&t(Rs),s&&t(rs),s&&t(Gs),s&&t($),y(U),s&&t(Us),s&&t(ls),s&&t(Hs),y(H,s),s&&t(Ws),s&&t(is),s&&t(Vs),y(W,s),s&&t(Xs),s&&t(v),s&&t(Ks),y(V,s),s&&t(Js),s&&t(z),y(X),s&&t(Qs),s&&t(m),y(K),y(Q),y(Z),y(ss),y(es),s&&t(Ys),s&&t(N)}}}const pn={local:"byt5",sections:[{local:"overview",sections:[{local:"example",title:"Example"}],title:"Overview"},{local:"transformers.ByT5Tokenizer",title:"ByT5Tokenizer"}],title:"ByT5"};function cn(jt){return rn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fn extends en{constructor(T){super();tn(this,T,cn,ln,nn,{})}}export{fn as default,pn as metadata};
