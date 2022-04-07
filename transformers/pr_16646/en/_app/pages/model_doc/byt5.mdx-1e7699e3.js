import{S as ut,i as ft,s as gt,e as t,k as c,w as f,t as r,M as _t,c as a,d as n,m as h,a as o,x as g,h as l,b as p,F as e,g as d,y as _,L as bt,q as b,o as k,B as j,v as kt}from"../../chunks/vendor-6b77c823.js";import{D as Is}from"../../chunks/Docstring-abef54e3.js";import{C as Bn}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ms}from"../../chunks/IconCopyLink-7a11ce68.js";function jt(An){let T,Os,x,B,js,O,ye,ys,ve,Rs,$,A,vs,R,we,ws,Te,Gs,L,xe,G,$e,qe,Ws,rs,ze,Hs,ls,Ts,Ee,Us,y,Be,W,Ae,Le,H,Pe,Se,Vs,P,De,is,Ce,Ne,Xs,ps,Fe,Ks,q,S,xs,U,Ie,$s,Me,Js,cs,Oe,Qs,V,Ys,hs,Re,Zs,X,se,v,Ge,ds,We,He,qs,Ue,Ve,ee,K,ne,z,D,zs,J,Xe,Es,Ke,te,E,C,Bs,Q,Je,As,Qe,ae,m,Y,Ye,Ls,Ze,sn,Z,en,ms,nn,tn,an,w,ss,on,Ps,rn,ln,es,us,pn,Ss,cn,hn,fs,dn,Ds,mn,un,N,ns,fn,Cs,gn,_n,F,ts,bn,Ns,kn,jn,I,as,yn,os,vn,Fs,wn,Tn,oe,M,xn,gs,$n,qn,re;return O=new Ms({}),R=new Ms({}),U=new Ms({}),V=new Bn({props:{code:`from transformers import T5ForConditionalGeneration
import torch

model = T5ForConditionalGeneration.from_pretrained("google/byt5-small")

input_ids = (
    torch.tensor([list("Life is like a box of chocolates.".encode("utf-8"))]) + 3
)  # add 3 for special tokens
labels = (
    torch.tensor([list("La vie est comme une bo\xEEte de chocolat.".encode("utf-8"))]) + 3
)  # add 3 for special tokens

loss = model(input_ids, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = (
<span class="hljs-meta">... </span>    torch.tensor([<span class="hljs-built_in">list</span>(<span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>.encode(<span class="hljs-string">&quot;utf-8&quot;</span>))]) + <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># add 3 for special tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = (
<span class="hljs-meta">... </span>    torch.tensor([<span class="hljs-built_in">list</span>(<span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>.encode(<span class="hljs-string">&quot;utf-8&quot;</span>))]) + <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># add 3 for special tokens</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">2.66</span>`}}),X=new Bn({props:{code:`from transformers import T5ForConditionalGeneration, AutoTokenizer

model = T5ForConditionalGeneration.from_pretrained("google/byt5-small")
tokenizer = AutoTokenizer.from_pretrained("google/byt5-small")

model_inputs = tokenizer(
    ["Life is like a box of chocolates.", "Today is Monday."], padding="longest", return_tensors="pt"
)
labels = tokenizer(
    ["La vie est comme une bo\xEEte de chocolat.", "Aujourd'hui c'est lundi."], padding="longest", return_tensors="pt"
).input_ids

loss = model(**model_inputs, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(
<span class="hljs-meta">... </span>    [<span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>, <span class="hljs-string">&quot;Today is Monday.&quot;</span>], padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    [<span class="hljs-string">&quot;La vie est comme une bo\xEEte de chocolat.&quot;</span>, <span class="hljs-string">&quot;Aujourd&#x27;hui c&#x27;est lundi.&quot;</span>], padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**model_inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">17.9</span>`}}),K=new Bn({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

tokenizer = AutoTokenizer.from_pretrained("google/byt5-base")
model = AutoModelForSeq2SeqLM.from_pretrained("google/byt5-base")

input_ids_prompt = "The dog chases a ball in the park."
input_ids = tokenizer(input_ids_prompt).input_ids

# Now Mask
# Note that we can add "{extra_id_...}" to the string directly
# as the Byte tokenizer would incorrectly merge the tokens
# We need to work on the character level directly here
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

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Now Mask</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that we can add &quot;{extra_id_...}&quot; to the string directly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># as the Byte tokenizer would incorrectly merge the tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We need to work on the character level directly here</span>
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
[<span class="hljs-string">&#x27;&lt;pad&gt;&#x27;</span>, <span class="hljs-string">&#x27;is the one who does&#x27;</span>, <span class="hljs-string">&#x27; in the disco&#x27;</span>, <span class="hljs-string">&#x27;in the park. The dog is the one who does a ball in&#x27;</span>, <span class="hljs-string">&#x27; in the park.&#x27;</span>]`}}),J=new Ms({}),Q=new Ms({}),Y=new Is({props:{name:"class transformers.ByT5Tokenizer",anchor:"transformers.ByT5Tokenizer",parameters:[{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 125"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16646/src/transformers/models/byt5/tokenization_byt5.py#L28",parametersDescription:[{anchor:"transformers.ByT5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}]}}),ss=new Is({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16646/src/transformers/models/byt5/tokenization_byt5.py#L177",parametersDescription:[{anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ns=new Is({props:{name:"convert_tokens_to_string",anchor:"transformers.ByT5Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_16646/src/transformers/models/byt5/tokenization_byt5.py#L228"}}),ts=new Is({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16646/src/transformers/models/byt5/tokenization_byt5.py#L155",parametersDescription:[{anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),as=new Is({props:{name:"get_special_tokens_mask",anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16646/src/transformers/models/byt5/tokenization_byt5.py#L117",parametersDescription:[{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),{c(){T=t("meta"),Os=c(),x=t("h1"),B=t("a"),js=t("span"),f(O.$$.fragment),ye=c(),ys=t("span"),ve=r("ByT5"),Rs=c(),$=t("h2"),A=t("a"),vs=t("span"),f(R.$$.fragment),we=c(),ws=t("span"),Te=r("Overview"),Gs=c(),L=t("p"),xe=r("The ByT5 model was presented in "),G=t("a"),$e=r("ByT5: Towards a token-free future with pre-trained byte-to-byte models"),qe=r(` by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir
Kale, Adam Roberts, Colin Raffel.`),Ws=c(),rs=t("p"),ze=r("The abstract from the paper is the following:"),Hs=c(),ls=t("p"),Ts=t("em"),Ee=r(`Most widely-used pre-trained language models operate on sequences of tokens corresponding to word or subword units.
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
experiments.`),Us=c(),y=t("p"),Be=r("This model was contributed by "),W=t("a"),Ae=r("patrickvonplaten"),Le=r(`. The original code can be
found `),H=t("a"),Pe=r("here"),Se=r("."),Vs=c(),P=t("p"),De=r("ByT5\u2019s architecture is based on the T5v1.1 model, so one can refer to "),is=t("a"),Ce=r("T5v1.1\u2019s documentation page"),Ne=r(`. They
only differ in how inputs should be prepared for the model, see the code examples below.`),Xs=c(),ps=t("p"),Fe=r(`Since ByT5 was pre-trained unsupervisedly, there\u2019s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`),Ks=c(),q=t("h3"),S=t("a"),xs=t("span"),f(U.$$.fragment),Ie=c(),$s=t("span"),Me=r("Example"),Js=c(),cs=t("p"),Oe=r("ByT5 works on raw UTF-8 bytes, so it can be used without a tokenizer:"),Qs=c(),f(V.$$.fragment),Ys=c(),hs=t("p"),Re=r("For batched inference and training it is however recommended to make use of the tokenizer:"),Zs=c(),f(X.$$.fragment),se=c(),v=t("p"),Ge=r("Similar to "),ds=t("a"),We=r("T5"),He=r(`, ByT5 was trained on the span-mask denoising task. However,
since the model works directly on characters, the pretraining task is a bit
different. Let\u2019s corrupt some characters of the
input sentence `),qs=t("code"),Ue=r('"The dog chases a ball in the park."'),Ve=r(` and ask ByT5 to predict them
for us.`),ee=c(),f(K.$$.fragment),ne=c(),z=t("h3"),D=t("a"),zs=t("span"),f(J.$$.fragment),Xe=c(),Es=t("span"),Ke=r("Training"),te=c(),E=t("h2"),C=t("a"),Bs=t("span"),f(Q.$$.fragment),Je=c(),As=t("span"),Qe=r("ByT5Tokenizer"),ae=c(),m=t("div"),f(Y.$$.fragment),Ye=c(),Ls=t("p"),Ze=r("Construct a ByT5 tokenizer. ByT5 simply uses raw bytes utf-8 encoding."),sn=c(),Z=t("p"),en=r("This tokenizer inherits from "),ms=t("a"),nn=r("PreTrainedTokenizer"),tn=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),an=c(),w=t("div"),f(ss.$$.fragment),on=c(),Ps=t("p"),rn=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),ln=c(),es=t("ul"),us=t("li"),pn=r("single sequence: "),Ss=t("code"),cn=r("X </s>"),hn=c(),fs=t("li"),dn=r("pair of sequences: "),Ds=t("code"),mn=r("A </s> B </s>"),un=c(),N=t("div"),f(ns.$$.fragment),fn=c(),Cs=t("p"),gn=r("Converts a sequence of tokens (string) in a single string."),_n=c(),F=t("div"),f(ts.$$.fragment),bn=c(),Ns=t("p"),kn=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. ByT5 does not
make use of token type ids, therefore a list of zeros is returned.`),jn=c(),I=t("div"),f(as.$$.fragment),yn=c(),os=t("p"),vn=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Fs=t("code"),wn=r("prepare_for_model"),Tn=r(" method."),oe=c(),M=t("p"),xn=r("See "),gs=t("a"),$n=r("ByT5Tokenizer"),qn=r(" for all details."),this.h()},l(s){const i=_t('[data-svelte="svelte-1phssyn"]',document.head);T=a(i,"META",{name:!0,content:!0}),i.forEach(n),Os=h(s),x=a(s,"H1",{class:!0});var le=o(x);B=a(le,"A",{id:!0,class:!0,href:!0});var Ln=o(B);js=a(Ln,"SPAN",{});var Pn=o(js);g(O.$$.fragment,Pn),Pn.forEach(n),Ln.forEach(n),ye=h(le),ys=a(le,"SPAN",{});var Sn=o(ys);ve=l(Sn,"ByT5"),Sn.forEach(n),le.forEach(n),Rs=h(s),$=a(s,"H2",{class:!0});var ie=o($);A=a(ie,"A",{id:!0,class:!0,href:!0});var Dn=o(A);vs=a(Dn,"SPAN",{});var Cn=o(vs);g(R.$$.fragment,Cn),Cn.forEach(n),Dn.forEach(n),we=h(ie),ws=a(ie,"SPAN",{});var Nn=o(ws);Te=l(Nn,"Overview"),Nn.forEach(n),ie.forEach(n),Gs=h(s),L=a(s,"P",{});var pe=o(L);xe=l(pe,"The ByT5 model was presented in "),G=a(pe,"A",{href:!0,rel:!0});var Fn=o(G);$e=l(Fn,"ByT5: Towards a token-free future with pre-trained byte-to-byte models"),Fn.forEach(n),qe=l(pe,` by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir
Kale, Adam Roberts, Colin Raffel.`),pe.forEach(n),Ws=h(s),rs=a(s,"P",{});var In=o(rs);ze=l(In,"The abstract from the paper is the following:"),In.forEach(n),Hs=h(s),ls=a(s,"P",{});var Mn=o(ls);Ts=a(Mn,"EM",{});var On=o(Ts);Ee=l(On,`Most widely-used pre-trained language models operate on sequences of tokens corresponding to word or subword units.
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
experiments.`),On.forEach(n),Mn.forEach(n),Us=h(s),y=a(s,"P",{});var _s=o(y);Be=l(_s,"This model was contributed by "),W=a(_s,"A",{href:!0,rel:!0});var Rn=o(W);Ae=l(Rn,"patrickvonplaten"),Rn.forEach(n),Le=l(_s,`. The original code can be
found `),H=a(_s,"A",{href:!0,rel:!0});var Gn=o(H);Pe=l(Gn,"here"),Gn.forEach(n),Se=l(_s,"."),_s.forEach(n),Vs=h(s),P=a(s,"P",{});var ce=o(P);De=l(ce,"ByT5\u2019s architecture is based on the T5v1.1 model, so one can refer to "),is=a(ce,"A",{href:!0});var Wn=o(is);Ce=l(Wn,"T5v1.1\u2019s documentation page"),Wn.forEach(n),Ne=l(ce,`. They
only differ in how inputs should be prepared for the model, see the code examples below.`),ce.forEach(n),Xs=h(s),ps=a(s,"P",{});var Hn=o(ps);Fe=l(Hn,`Since ByT5 was pre-trained unsupervisedly, there\u2019s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`),Hn.forEach(n),Ks=h(s),q=a(s,"H3",{class:!0});var he=o(q);S=a(he,"A",{id:!0,class:!0,href:!0});var Un=o(S);xs=a(Un,"SPAN",{});var Vn=o(xs);g(U.$$.fragment,Vn),Vn.forEach(n),Un.forEach(n),Ie=h(he),$s=a(he,"SPAN",{});var Xn=o($s);Me=l(Xn,"Example"),Xn.forEach(n),he.forEach(n),Js=h(s),cs=a(s,"P",{});var Kn=o(cs);Oe=l(Kn,"ByT5 works on raw UTF-8 bytes, so it can be used without a tokenizer:"),Kn.forEach(n),Qs=h(s),g(V.$$.fragment,s),Ys=h(s),hs=a(s,"P",{});var Jn=o(hs);Re=l(Jn,"For batched inference and training it is however recommended to make use of the tokenizer:"),Jn.forEach(n),Zs=h(s),g(X.$$.fragment,s),se=h(s),v=a(s,"P",{});var bs=o(v);Ge=l(bs,"Similar to "),ds=a(bs,"A",{href:!0});var Qn=o(ds);We=l(Qn,"T5"),Qn.forEach(n),He=l(bs,`, ByT5 was trained on the span-mask denoising task. However,
since the model works directly on characters, the pretraining task is a bit
different. Let\u2019s corrupt some characters of the
input sentence `),qs=a(bs,"CODE",{});var Yn=o(qs);Ue=l(Yn,'"The dog chases a ball in the park."'),Yn.forEach(n),Ve=l(bs,` and ask ByT5 to predict them
for us.`),bs.forEach(n),ee=h(s),g(K.$$.fragment,s),ne=h(s),z=a(s,"H3",{class:!0});var de=o(z);D=a(de,"A",{id:!0,class:!0,href:!0});var Zn=o(D);zs=a(Zn,"SPAN",{});var st=o(zs);g(J.$$.fragment,st),st.forEach(n),Zn.forEach(n),Xe=h(de),Es=a(de,"SPAN",{});var et=o(Es);Ke=l(et,"Training"),et.forEach(n),de.forEach(n),te=h(s),E=a(s,"H2",{class:!0});var me=o(E);C=a(me,"A",{id:!0,class:!0,href:!0});var nt=o(C);Bs=a(nt,"SPAN",{});var tt=o(Bs);g(Q.$$.fragment,tt),tt.forEach(n),nt.forEach(n),Je=h(me),As=a(me,"SPAN",{});var at=o(As);Qe=l(at,"ByT5Tokenizer"),at.forEach(n),me.forEach(n),ae=h(s),m=a(s,"DIV",{class:!0});var u=o(m);g(Y.$$.fragment,u),Ye=h(u),Ls=a(u,"P",{});var ot=o(Ls);Ze=l(ot,"Construct a ByT5 tokenizer. ByT5 simply uses raw bytes utf-8 encoding."),ot.forEach(n),sn=h(u),Z=a(u,"P",{});var ue=o(Z);en=l(ue,"This tokenizer inherits from "),ms=a(ue,"A",{href:!0});var rt=o(ms);nn=l(rt,"PreTrainedTokenizer"),rt.forEach(n),tn=l(ue,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ue.forEach(n),an=h(u),w=a(u,"DIV",{class:!0});var ks=o(w);g(ss.$$.fragment,ks),on=h(ks),Ps=a(ks,"P",{});var lt=o(Ps);rn=l(lt,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),lt.forEach(n),ln=h(ks),es=a(ks,"UL",{});var fe=o(es);us=a(fe,"LI",{});var zn=o(us);pn=l(zn,"single sequence: "),Ss=a(zn,"CODE",{});var it=o(Ss);cn=l(it,"X </s>"),it.forEach(n),zn.forEach(n),hn=h(fe),fs=a(fe,"LI",{});var En=o(fs);dn=l(En,"pair of sequences: "),Ds=a(En,"CODE",{});var pt=o(Ds);mn=l(pt,"A </s> B </s>"),pt.forEach(n),En.forEach(n),fe.forEach(n),ks.forEach(n),un=h(u),N=a(u,"DIV",{class:!0});var ge=o(N);g(ns.$$.fragment,ge),fn=h(ge),Cs=a(ge,"P",{});var ct=o(Cs);gn=l(ct,"Converts a sequence of tokens (string) in a single string."),ct.forEach(n),ge.forEach(n),_n=h(u),F=a(u,"DIV",{class:!0});var _e=o(F);g(ts.$$.fragment,_e),bn=h(_e),Ns=a(_e,"P",{});var ht=o(Ns);kn=l(ht,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. ByT5 does not
make use of token type ids, therefore a list of zeros is returned.`),ht.forEach(n),_e.forEach(n),jn=h(u),I=a(u,"DIV",{class:!0});var be=o(I);g(as.$$.fragment,be),yn=h(be),os=a(be,"P",{});var ke=o(os);vn=l(ke,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Fs=a(ke,"CODE",{});var dt=o(Fs);wn=l(dt,"prepare_for_model"),dt.forEach(n),Tn=l(ke," method."),ke.forEach(n),be.forEach(n),u.forEach(n),oe=h(s),M=a(s,"P",{});var je=o(M);xn=l(je,"See "),gs=a(je,"A",{href:!0});var mt=o(gs);$n=l(mt,"ByT5Tokenizer"),mt.forEach(n),qn=l(je," for all details."),je.forEach(n),this.h()},h(){p(T,"name","hf:doc:metadata"),p(T,"content",JSON.stringify(yt)),p(B,"id","byt5"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#byt5"),p(x,"class","relative group"),p(A,"id","overview"),p(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(A,"href","#overview"),p($,"class","relative group"),p(G,"href","https://arxiv.org/abs/2105.13626"),p(G,"rel","nofollow"),p(W,"href","https://huggingface.co/patrickvonplaten"),p(W,"rel","nofollow"),p(H,"href","https://github.com/google-research/byt5"),p(H,"rel","nofollow"),p(is,"href","t5v1.1"),p(S,"id","example"),p(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(S,"href","#example"),p(q,"class","relative group"),p(ds,"href","t5"),p(D,"id","training"),p(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(D,"href","#training"),p(z,"class","relative group"),p(C,"id","transformers.ByT5Tokenizer"),p(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(C,"href","#transformers.ByT5Tokenizer"),p(E,"class","relative group"),p(ms,"href","/docs/transformers/pr_16646/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(w,"class","docstring"),p(N,"class","docstring"),p(F,"class","docstring"),p(I,"class","docstring"),p(m,"class","docstring"),p(gs,"href","/docs/transformers/pr_16646/en/model_doc/byt5#transformers.ByT5Tokenizer")},m(s,i){e(document.head,T),d(s,Os,i),d(s,x,i),e(x,B),e(B,js),_(O,js,null),e(x,ye),e(x,ys),e(ys,ve),d(s,Rs,i),d(s,$,i),e($,A),e(A,vs),_(R,vs,null),e($,we),e($,ws),e(ws,Te),d(s,Gs,i),d(s,L,i),e(L,xe),e(L,G),e(G,$e),e(L,qe),d(s,Ws,i),d(s,rs,i),e(rs,ze),d(s,Hs,i),d(s,ls,i),e(ls,Ts),e(Ts,Ee),d(s,Us,i),d(s,y,i),e(y,Be),e(y,W),e(W,Ae),e(y,Le),e(y,H),e(H,Pe),e(y,Se),d(s,Vs,i),d(s,P,i),e(P,De),e(P,is),e(is,Ce),e(P,Ne),d(s,Xs,i),d(s,ps,i),e(ps,Fe),d(s,Ks,i),d(s,q,i),e(q,S),e(S,xs),_(U,xs,null),e(q,Ie),e(q,$s),e($s,Me),d(s,Js,i),d(s,cs,i),e(cs,Oe),d(s,Qs,i),_(V,s,i),d(s,Ys,i),d(s,hs,i),e(hs,Re),d(s,Zs,i),_(X,s,i),d(s,se,i),d(s,v,i),e(v,Ge),e(v,ds),e(ds,We),e(v,He),e(v,qs),e(qs,Ue),e(v,Ve),d(s,ee,i),_(K,s,i),d(s,ne,i),d(s,z,i),e(z,D),e(D,zs),_(J,zs,null),e(z,Xe),e(z,Es),e(Es,Ke),d(s,te,i),d(s,E,i),e(E,C),e(C,Bs),_(Q,Bs,null),e(E,Je),e(E,As),e(As,Qe),d(s,ae,i),d(s,m,i),_(Y,m,null),e(m,Ye),e(m,Ls),e(Ls,Ze),e(m,sn),e(m,Z),e(Z,en),e(Z,ms),e(ms,nn),e(Z,tn),e(m,an),e(m,w),_(ss,w,null),e(w,on),e(w,Ps),e(Ps,rn),e(w,ln),e(w,es),e(es,us),e(us,pn),e(us,Ss),e(Ss,cn),e(es,hn),e(es,fs),e(fs,dn),e(fs,Ds),e(Ds,mn),e(m,un),e(m,N),_(ns,N,null),e(N,fn),e(N,Cs),e(Cs,gn),e(m,_n),e(m,F),_(ts,F,null),e(F,bn),e(F,Ns),e(Ns,kn),e(m,jn),e(m,I),_(as,I,null),e(I,yn),e(I,os),e(os,vn),e(os,Fs),e(Fs,wn),e(os,Tn),d(s,oe,i),d(s,M,i),e(M,xn),e(M,gs),e(gs,$n),e(M,qn),re=!0},p:bt,i(s){re||(b(O.$$.fragment,s),b(R.$$.fragment,s),b(U.$$.fragment,s),b(V.$$.fragment,s),b(X.$$.fragment,s),b(K.$$.fragment,s),b(J.$$.fragment,s),b(Q.$$.fragment,s),b(Y.$$.fragment,s),b(ss.$$.fragment,s),b(ns.$$.fragment,s),b(ts.$$.fragment,s),b(as.$$.fragment,s),re=!0)},o(s){k(O.$$.fragment,s),k(R.$$.fragment,s),k(U.$$.fragment,s),k(V.$$.fragment,s),k(X.$$.fragment,s),k(K.$$.fragment,s),k(J.$$.fragment,s),k(Q.$$.fragment,s),k(Y.$$.fragment,s),k(ss.$$.fragment,s),k(ns.$$.fragment,s),k(ts.$$.fragment,s),k(as.$$.fragment,s),re=!1},d(s){n(T),s&&n(Os),s&&n(x),j(O),s&&n(Rs),s&&n($),j(R),s&&n(Gs),s&&n(L),s&&n(Ws),s&&n(rs),s&&n(Hs),s&&n(ls),s&&n(Us),s&&n(y),s&&n(Vs),s&&n(P),s&&n(Xs),s&&n(ps),s&&n(Ks),s&&n(q),j(U),s&&n(Js),s&&n(cs),s&&n(Qs),j(V,s),s&&n(Ys),s&&n(hs),s&&n(Zs),j(X,s),s&&n(se),s&&n(v),s&&n(ee),j(K,s),s&&n(ne),s&&n(z),j(J),s&&n(te),s&&n(E),j(Q),s&&n(ae),s&&n(m),j(Y),j(ss),j(ns),j(ts),j(as),s&&n(oe),s&&n(M)}}}const yt={local:"byt5",sections:[{local:"overview",sections:[{local:"example",title:"Example"},{local:"training",title:"Training"}],title:"Overview"},{local:"transformers.ByT5Tokenizer",title:"ByT5Tokenizer"}],title:"ByT5"};function vt(An){return kt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qt extends ut{constructor(T){super();ft(this,T,vt,jt,gt,{})}}export{qt as default,yt as metadata};
