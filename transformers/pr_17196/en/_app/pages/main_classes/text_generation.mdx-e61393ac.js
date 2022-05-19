import{S as fm,i as bm,s as xm,e as s,k as m,w as k,t,M as km,c as a,d as o,m as g,a as r,x as v,h as n,b as h,F as e,g as x,y,q as j,o as M,B as L,v as vm,L as _e}from"../../chunks/vendor-6b77c823.js";import{T as hm}from"../../chunks/Tip-39098574.js";import{D as pe}from"../../chunks/Docstring-1088f2fb.js";import{C as he}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Us}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ue}from"../../chunks/ExampleCodeBlock-5212b321.js";function ym(w){let d,f,u,c,_,i,p,I,q,B,F;return{c(){d=s("p"),f=t("Apart from "),u=s("code"),c=t("inputs"),_=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),i=s("code"),p=t("config.json"),I=t(`) which in turn defaults to the
`),q=s("a"),B=t("PretrainedConfig"),F=t(" of the model."),this.h()},l(P){d=a(P,"P",{});var $=r(d);f=n($,"Apart from "),u=a($,"CODE",{});var we=r(u);c=n(we,"inputs"),we.forEach(o),_=n($,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),i=a($,"CODE",{});var $e=r(i);p=n($e,"config.json"),$e.forEach(o),I=n($,`) which in turn defaults to the
`),q=a($,"A",{href:!0});var fe=r(q);B=n(fe,"PretrainedConfig"),fe.forEach(o),F=n($," of the model."),$.forEach(o),this.h()},h(){h(q,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig")},m(P,$){x(P,d,$),e(d,f),e(d,u),e(u,c),e(d,_),e(d,i),e(i,p),e(d,I),e(d,q),e(q,B),e(d,F)},d(P){P&&o(d)}}}function jm(w){let d,f,u,c,_;return c=new he({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

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
[<span class="hljs-string">&#x27;Today I believe we can finally get to the point where we can make a difference in the lives of the people of the United States of America.\\n&#x27;</span>]`}}),{c(){d=s("p"),f=t("Greedy Decoding:"),u=m(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var p=r(d);f=n(p,"Greedy Decoding:"),p.forEach(o),u=g(i),v(c.$$.fragment,i)},m(i,p){x(i,d,p),e(d,f),x(i,u,p),y(c,i,p),_=!0},p:_e,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){M(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),L(c,i)}}}function Mm(w){let d,f,u,c,_;return c=new he({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM
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
[<span class="hljs-string">&#x27;Today I believe we can finally get rid of discrimination,&quot; said Rep. Mark Pocan (D-Wis.).\\n\\n&quot;Just look at the&#x27;</span>]`}}),{c(){d=s("p"),f=t("Multinomial Sampling:"),u=m(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var p=r(d);f=n(p,"Multinomial Sampling:"),p.forEach(o),u=g(i),v(c.$$.fragment,i)},m(i,p){x(i,d,p),e(d,f),x(i,u,p),y(c,i,p),_=!0},p:_e,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){M(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),L(c,i)}}}function Lm(w){let d,f,u,c,_;return c=new he({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

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
[<span class="hljs-string">&#x27;Paris ist eines der dichtesten besiedelten Gebiete Europas.&#x27;</span>]`}}),{c(){d=s("p"),f=t("Beam-search decoding:"),u=m(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var p=r(d);f=n(p,"Beam-search decoding:"),p.forEach(o),u=g(i),v(c.$$.fragment,i)},m(i,p){x(i,d,p),e(d,f),x(i,u,p),y(c,i,p),_=!0},p:_e,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){M(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),L(c,i)}}}function wm(w){let d,f,u,c,_;return c=new he({props:{code:`from transformers import (
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
[<span class="hljs-string">&quot;It might be possible to get a better understanding of the nature of the problem, but it&#x27;s not&quot;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var p=r(d);f=n(p,"Examples:"),p.forEach(o),u=g(i),v(c.$$.fragment,i)},m(i,p){x(i,d,p),e(d,f),x(i,u,p),y(c,i,p),_=!0},p:_e,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){M(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),L(c,i)}}}function $m(w){let d,f,u,c,_;return c=new he({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Today is a beautiful day, and a wonderful day.\\n\\nI was lucky enough to meet the&#x27;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var p=r(d);f=n(p,"Examples:"),p.forEach(o),u=g(i),v(c.$$.fragment,i)},m(i,p){x(i,d,p),e(d,f),x(i,u,p),y(c,i,p),_=!0},p:_e,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){M(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),L(c,i)}}}function Tm(w){let d,f,u,c,_;return c=new he({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var p=r(d);f=n(p,"Examples:"),p.forEach(o),u=g(i),v(c.$$.fragment,i)},m(i,p){x(i,d,p),e(d,f),x(i,u,p),y(c,i,p),_=!0},p:_e,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){M(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),L(c,i)}}}function Em(w){let d,f,u,c,_;return c=new he({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var p=r(d);f=n(p,"Examples:"),p.forEach(o),u=g(i),v(c.$$.fragment,i)},m(i,p){x(i,d,p),e(d,f),x(i,u,p),y(c,i,p),_=!0},p:_e,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){M(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),L(c,i)}}}function Om(w){let d,f,u,c,_;return c=new he({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var p=r(d);f=n(p,"Examples:"),p.forEach(o),u=g(i),v(c.$$.fragment,i)},m(i,p){x(i,d,p),e(d,f),x(i,u,p),y(c,i,p),_=!0},p:_e,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){M(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),L(c,i)}}}function Gm(w){let d,f,u,c,_;return c=new he({props:{code:`from transformers import (
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

constraint_str = "Sie"
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

<span class="hljs-meta">&gt;&gt;&gt; </span>constraint_str = <span class="hljs-string">&quot;Sie&quot;</span>
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
[<span class="hljs-string">&#x27;Wie alt sind Sie?&#x27;</span>]`}}),{c(){d=s("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var p=r(d);f=n(p,"Examples:"),p.forEach(o),u=g(i),v(c.$$.fragment,i)},m(i,p){x(i,d,p),e(d,f),x(i,u,p),y(c,i,p),_=!0},p:_e,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){M(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),L(c,i)}}}function qm(w){let d,f,u,c,_;return c=new he({props:{code:`tokenizer = AutoTokenizer.from_pretrained("distilgpt2")  # Initialize tokenizer
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
)  <span class="hljs-comment"># generate sequences without allowing bad_words to be generated</span>`}}),{c(){d=s("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var p=r(d);f=n(p,"Examples:"),p.forEach(o),u=g(i),v(c.$$.fragment,i)},m(i,p){x(i,d,p),e(d,f),x(i,u,p),y(c,i,p),_=!0},p:_e,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){M(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),L(c,i)}}}function Sm(w){let d,f,u,c,_,i,p,I,q,B,F;return{c(){d=s("p"),f=t("Apart from "),u=s("code"),c=t("inputs"),_=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),i=s("code"),p=t("config.json"),I=t(`) which in turn defaults to the
`),q=s("a"),B=t("PretrainedConfig"),F=t(" of the model."),this.h()},l(P){d=a(P,"P",{});var $=r(d);f=n($,"Apart from "),u=a($,"CODE",{});var we=r(u);c=n(we,"inputs"),we.forEach(o),_=n($,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),i=a($,"CODE",{});var $e=r(i);p=n($e,"config.json"),$e.forEach(o),I=n($,`) which in turn defaults to the
`),q=a($,"A",{href:!0});var fe=r(q);B=n(fe,"PretrainedConfig"),fe.forEach(o),F=n($," of the model."),$.forEach(o),this.h()},h(){h(q,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig")},m(P,$){x(P,d,$),e(d,f),e(d,u),e(u,c),e(d,_),e(d,i),e(i,p),e(d,I),e(d,q),e(q,B),e(d,F)},d(P){P&&o(d)}}}function Fm(w){let d,f,u,c,_;return c=new he({props:{code:`from transformers import AutoTokenizer, FlaxAutoModelForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){d=s("p"),f=t("Examples:"),u=m(),k(c.$$.fragment)},l(i){d=a(i,"P",{});var p=r(d);f=n(p,"Examples:"),p.forEach(o),u=g(i),v(c.$$.fragment,i)},m(i,p){x(i,d,p),e(d,f),x(i,u,p),y(c,i,p),_=!0},p:_e,i(i){_||(j(c.$$.fragment,i),_=!0)},o(i){M(c.$$.fragment,i),_=!1},d(i){i&&o(d),i&&o(u),L(c,i)}}}function zm(w){let d,f,u,c,_,i,p,I,q,B,F,P,$,we,$e,fe,be,Te,Vs,on,Ks,Zs,sn,Xs,Js,Qs,Ee,Ys,an,ea,ta,rn,na,oa,sa,Oe,aa,ln,ra,ia,dn,la,da,vs,Ge,st,Nn,vt,ca,Cn,pa,ys,T,yt,ma,jt,ga,cn,ua,_a,ha,Mt,fa,pn,ba,xa,ka,S,W,In,va,ya,mn,ja,Ma,Bn,La,wa,Wn,$a,Ta,Ea,H,Hn,Oa,Ga,gn,qa,Sa,Rn,Fa,za,Un,Aa,Pa,Da,R,Vn,Na,Ca,un,Ia,Ba,Kn,Wa,Ha,Zn,Ra,Ua,Va,U,Xn,Ka,Za,_n,Xa,Ja,Jn,Qa,Ya,Qn,er,tr,nr,V,Yn,or,sr,hn,ar,rr,eo,ir,lr,to,dr,cr,pr,K,no,mr,gr,fn,ur,_r,oo,hr,fr,so,br,xr,kr,Z,ao,vr,yr,bn,jr,Mr,ro,Lr,wr,io,$r,Tr,Er,E,Lt,Or,lo,Gr,qr,D,X,co,Sr,Fr,xn,zr,Ar,po,Pr,Dr,mo,Nr,Cr,Ir,J,go,Br,Wr,kn,Hr,Rr,uo,Ur,Vr,_o,Kr,Zr,Xr,Q,ho,Jr,Qr,vn,Yr,ei,fo,ti,ni,bo,oi,si,ai,Y,xo,ri,ii,yn,li,di,ko,ci,pi,vo,mi,gi,ui,ee,yo,_i,hi,jn,fi,bi,jo,xi,ki,Mo,vi,yi,ji,te,Lo,Mi,Li,Mn,wi,$i,wo,Ti,Ei,$o,Oi,Gi,qi,at,Si,wt,Fi,$t,zi,Ai,Pi,To,Di,Ni,rt,Ci,it,Ii,lt,Bi,xe,Tt,Wi,Et,Hi,Eo,Ri,Ui,Vi,dt,Ki,ke,Ot,Zi,Gt,Xi,Oo,Ji,Qi,Yi,ct,el,ve,qt,tl,St,nl,Go,ol,sl,al,pt,rl,ye,Ft,il,zt,ll,qo,dl,cl,pl,mt,ml,je,At,gl,Pt,ul,So,_l,hl,fl,gt,bl,Me,Dt,xl,Nt,kl,Fo,vl,yl,jl,ut,js,qe,_t,zo,Ct,Ml,Ao,Ll,Ms,me,It,wl,Bt,$l,Ln,Tl,El,Ol,z,Wt,Gl,Po,ql,Sl,Ht,Fl,Rt,zl,Al,Pl,ge,Dl,Do,Nl,Cl,No,Il,Bl,wn,Wl,Hl,Rl,Ut,Ul,Vt,Vl,Kl,Zl,ht,Ls,Se,ft,Co,Kt,Xl,Io,Jl,ws,N,Zt,Ql,Xt,Yl,$n,ed,td,nd,Jt,od,Tn,sd,ad,rd,Fe,ne,Bo,id,ld,Wo,dd,cd,Ho,pd,md,Ro,gd,ud,_d,oe,Uo,hd,fd,Vo,bd,xd,Ko,kd,vd,Zo,yd,jd,Md,se,Xo,Ld,wd,Jo,$d,Td,Qo,Ed,Od,Yo,Gd,qd,Sd,A,Qt,Fd,es,zd,Ad,ze,ae,ts,Pd,Dd,ns,Nd,Cd,os,Id,Bd,ss,Wd,Hd,Rd,re,as,Ud,Vd,rs,Kd,Zd,is,Xd,Jd,ls,Qd,Yd,ec,ie,ds,tc,nc,cs,oc,sc,ps,ac,rc,ms,ic,lc,dc,bt,cc,Yt,pc,en,mc,gc,uc,xt,$s;return i=new Us({}),vt=new Us({}),yt=new pe({props:{name:"class transformers.generation_utils.GenerationMixin",anchor:"transformers.generation_utils.GenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/generation_utils.py#L379"}}),Lt=new pe({props:{name:"generate",anchor:"transformers.generation_utils.GenerationMixin.generate",parameters:[{name:"inputs",val:": typing.Optional[torch.Tensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"typical_p",val:": typing.Optional[float] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.Iterable[int]] = None"},{name:"force_words_ids",val:": typing.Union[typing.Iterable[int], typing.Iterable[typing.Iterable[int]], NoneType] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"max_time",val:": typing.Optional[float] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Union[typing.Callable[[int, torch.Tensor], typing.List[int]], NoneType] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = []"},{name:"renormalize_logits",val:": typing.Optional[bool] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = []"},{name:"constraints",val:": typing.Optional[typing.List[transformers.generation_beam_constraints.Constraint]] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"exponential_decay_length_penalty",val:": typing.Union[typing.Tuple[typing.Union[int, float]], NoneType] = None"},{name:"log_decoder",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.generate.inputs",description:`<strong>inputs</strong> (<code>torch.Tensor</code> of varying shape depending on the modality, <em>optional</em>) &#x2014;
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
are kept for generation.`,name:"top_p"},{anchor:"transformers.generation_utils.GenerationMixin.generate.typical_p",description:`<strong>typical_p</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The amount of probability mass from the original distribution to be considered in typical decoding. If
set to 1.0 it takes no effect. See <a href="https://arxiv.org/pdf/2202.00666.pdf" rel="nofollow">this paper</a> for more details.`,name:"typical_p"},{anchor:"transformers.generation_utils.GenerationMixin.generate.repetition_penalty",description:`<strong>repetition_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The parameter for repetition penalty. 1.0 means no penalty. See <a href="https://arxiv.org/pdf/1909.05858.pdf" rel="nofollow">this
paper</a> for more details.`,name:"repetition_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>beginning-of-sequence</em> token.`,name:"bos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token.`,name:"eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.length_penalty",description:`<strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Exponential penalty to the length. 1.0 means that the beam score is penalized by the sequence length.
0.0 means no penalty. Set to values &lt; 0.0 in order to encourage the model to generate longer
sequences, to a value &gt; 0.0 in order to encourage the model to produce shorter sequences.`,name:"length_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.no_repeat_ngram_size",description:`<strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
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
enabled.`,name:"diversity_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.prefix_allowed_tokens_fn",description:`<strong>prefix_allowed_tokens_fn</strong> (<code>Callable[[int, torch.Tensor], List[int]]</code>, <em>optional</em>) &#x2014;
If provided, this function constraints the beam search to allowed tokens only at each step. If not
provided no constraint is applied. This function takes 2 arguments: the batch ID <code>batch_id</code> and
<code>input_ids</code>. It has to return a list with the allowed tokens for the next generation step conditioned
on the batch ID <code>batch_id</code> and the previously generated tokens <code>inputs_ids</code>. This argument is useful
for constrained generation conditioned on the prefix, as described in <a href="https://arxiv.org/abs/2010.00904" rel="nofollow">Autoregressive Entity
Retrieval</a>.`,name:"prefix_allowed_tokens_fn"},{anchor:"transformers.generation_utils.GenerationMixin.generate.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
Custom logits processors that complement the default logits processors built from arguments and a
model&#x2019;s config. If a logit processor is passed that is already created with the arguments or a model&#x2019;s
config an error is thrown. This feature is intended for advanced users.
renormalize_logits &#x2014; (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>):
Whether to renormalize the logits after applying all the logits processors or warpers (including the
custom ones). It&#x2019;s highly recommended to set this flag to <code>True</code> as the search algorithms suppose the
score logits are normalized but some logit processors or warpers break the normalization.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.generate.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.generate.forced_bos_token_id",description:`<strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful
for multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be
the target language token.`,name:"forced_bos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached.`,name:"forced_eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.remove_invalid_values",description:`<strong>remove_invalid_values</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to remove possible <em>nan</em> and <em>inf</em> outputs of the model to prevent the generation method to
crash. Note that using <code>remove_invalid_values</code> can slow down generation.`,name:"remove_invalid_values"},{anchor:"transformers.generation_utils.GenerationMixin.generate.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)`,name:"synced_gpus"},{anchor:"transformers.generation_utils.GenerationMixin.generate.exponential_decay_length_penalty",description:`<strong>exponential_decay_length_penalty</strong> (<code>tuple(int, float)</code>, <em>optional</em>) &#x2014;
This Tuple adds an exponentially increasing length penalty, after a certain amount of tokens have been
generated. The tuple shall consist of: <code>(start_index, decay_factor)</code> where <code>start_index</code> indicates
where penalty starts and <code>decay_factor</code> represents the factor of exponential decay`,name:"exponential_decay_length_penalty"},{anchor:"transformers.generation_utils.GenerationMixin.generate.log_decoder",description:`<strong>log_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to log which decoders are selected by this call.</p>
<p>model<em>kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If the model
is an encoder-decoder model, encoder specific kwargs should not be prefixed and decoder specific kwargs
should be prefixed with *decoder</em>*.`,name:"log_decoder"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/generation_utils.py#L856",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> (if <code>return_dict_in_generate=True</code>
or when <code>config.return_dict_in_generate=True</code>) or a <code>torch.FloatTensor</code>.</p>
<p>If the model is <em>not</em> an encoder-decoder model (<code>model.config.is_encoder_decoder=False</code>), the possible
<a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a></li>
</ul>
<p>If the model is an encoder-decoder model (<code>model.config.is_encoder_decoder=True</code>), the possible
<a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a></li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> or <code>torch.LongTensor</code></p>
`}}),at=new hm({props:{warning:!0,$$slots:{default:[ym]},$$scope:{ctx:w}}}),rt=new ue({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example",$$slots:{default:[jm]},$$scope:{ctx:w}}}),it=new ue({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example-2",$$slots:{default:[Mm]},$$scope:{ctx:w}}}),lt=new ue({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example-3",$$slots:{default:[Lm]},$$scope:{ctx:w}}}),Tt=new pe({props:{name:"greedy_search",anchor:"transformers.generation_utils.GenerationMixin.greedy_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific keyword arguments will be forwarded to the <code>forward</code> function of the model.
If model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/generation_utils.py#L1565",returnDescription:`
<p><a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a>, <a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a>
or <code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),dt=new ue({props:{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.example",$$slots:{default:[wm]},$$scope:{ctx:w}}}),Ot=new pe({props:{name:"sample",anchor:"transformers.generation_utils.GenerationMixin.sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.sample.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.sample.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.sample.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.sample.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/generation_utils.py#L1798",returnDescription:`
<p><a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a>, <a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),ct=new ue({props:{anchor:"transformers.generation_utils.GenerationMixin.sample.example",$$slots:{default:[$m]},$$scope:{ctx:w}}}),qt=new pe({props:{name:"beam_search",anchor:"transformers.generation_utils.GenerationMixin.beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
An derived instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/generation_utils.py#L2055",returnDescription:`
<p><code>generation_utilsBeamSearchDecoderOnlyOutput</code>, <a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),pt=new ue({props:{anchor:"transformers.generation_utils.GenerationMixin.beam_search.example",$$slots:{default:[Tm]},$$scope:{ctx:w}}}),Ft=new pe({props:{name:"beam_sample",anchor:"transformers.generation_utils.GenerationMixin.beam_sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
A derived instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/generation_utils.py#L2368",returnDescription:`
<p><a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a>, <a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),mt=new ue({props:{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.example",$$slots:{default:[Em]},$$scope:{ctx:w}}}),At=new pe({props:{name:"group_beam_search",anchor:"transformers.generation_utils.GenerationMixin.group_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
An derived instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)</p>
<p>model_kwargs &#x2014;
Additional model specific kwargs that will be forwarded to the <code>forward</code> function of the model. If
model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/generation_utils.py#L2691",returnDescription:`
<p><a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a>, <a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if
<code>model.config.is_encoder_decoder=False</code> and <code>return_dict_in_generate=True</code> or a
<a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if <code>model.config.is_encoder_decoder=True</code>.</p>
`}}),gt=new ue({props:{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.example",$$slots:{default:[Om]},$$scope:{ctx:w}}}),Dt=new pe({props:{name:"constrained_beam_search",anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"constrained_beam_scorer",val:": ConstrainedBeamSearchScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.constrained_beam_scorer",description:`<strong>constrained_beam_scorer</strong> (<code>ConstrainedBeamSearchScorer</code>) &#x2014;
A derived instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation, while satisfying a list of positive constraints. For more information, the
documentation of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.ConstrainedBeamSearchScorer">ConstrainedBeamSearchScorer</a> should be read.`,name:"constrained_beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/generation_utils.py#L3057",returnDescription:`
<p><code>generation_utilsBeamSearchDecoderOnlyOutput</code>, <a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_17196/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),ut=new ue({props:{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.example",$$slots:{default:[Gm]},$$scope:{ctx:w}}}),Ct=new Us({}),It=new pe({props:{name:"class transformers.generation_tf_utils.TFGenerationMixin",anchor:"transformers.generation_tf_utils.TFGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/generation_tf_utils.py#L344"}}),Wt=new pe({props:{name:"generate",anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate",parameters:[{name:"input_ids",val:" = None"},{name:"max_length",val:" = None"},{name:"min_length",val:" = None"},{name:"do_sample",val:" = None"},{name:"early_stopping",val:" = None"},{name:"num_beams",val:" = None"},{name:"temperature",val:" = None"},{name:"top_k",val:" = None"},{name:"top_p",val:" = None"},{name:"repetition_penalty",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"forced_bos_token_id",val:" = None"},{name:"forced_eos_token_id",val:" = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.input_ids",description:"<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, `(batch_size, sequence_length, &#x2014;",name:"input_ids"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.feature_dim)`",description:`<strong>feature_dim)\`</strong> or <code>(batch_size, num_channels, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.forced_bos_token_id",description:`<strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful
for multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be
the target language token.`,name:"forced_bos_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached.
model_specific_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/generation_tf_utils.py#L366",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> (if <code>return_dict_in_generate=True</code> or when
<code>config.return_dict_in_generate=True</code>) or a <code>tf.Tensor</code>.</p>
<p>If the model is <em>not</em> an encoder-decoder model (<code>model.config.is_encoder_decoder=False</code>), the possible
<a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><code>TFGreedySearchDecoderOnlyOutput</code>,</li>
<li><code>TFSampleDecoderOnlyOutput</code>,</li>
<li><code>TFBeamSearchDecoderOnlyOutput</code>,</li>
<li><code>TFBeamSampleDecoderOnlyOutput</code></li>
</ul>
<p>If the model is an encoder-decoder model (<code>model.config.is_encoder_decoder=True</code>), the possible
<a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><code>TFGreedySearchEncoderDecoderOutput</code>,</li>
<li><code>TFSampleEncoderDecoderOutput</code>,</li>
<li><code>TFBeamSearchEncoderDecoderOutput</code>,</li>
<li><code>TFBeamSampleEncoderDecoderOutput</code></li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> or <code>tf.Tensor</code></p>
`}}),ht=new ue({props:{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.example",$$slots:{default:[qm]},$$scope:{ctx:w}}}),Kt=new Us({}),Zt=new pe({props:{name:"class transformers.generation_flax_utils.FlaxGenerationMixin",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/generation_flax_utils.py#L118"}}),Qt=new pe({props:{name:"generate",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate",parameters:[{name:"input_ids",val:": ndarray"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"prng_key",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"trace",val:": bool = True"},{name:"params",val:": typing.Union[typing.Dict[str, jax._src.numpy.ndarray.ndarray], NoneType] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
should be prefixed with *decoder</em>*. Also accepts <code>encoder_outputs</code> to skip encoder part.`,name:"params"}],source:"https://github.com/huggingface/transformers/blob/vr_17196/src/transformers/generation_flax_utils.py#L162",returnDescription:`
<p><a
  href="/docs/transformers/pr_17196/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a>.</p>
`}}),bt=new hm({props:{warning:!0,$$slots:{default:[Sm]},$$scope:{ctx:w}}}),xt=new ue({props:{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.example",$$slots:{default:[Fm]},$$scope:{ctx:w}}}),{c(){d=s("meta"),f=m(),u=s("h1"),c=s("a"),_=s("span"),k(i.$$.fragment),p=m(),I=s("span"),q=t("Generation"),B=m(),F=s("p"),P=t("Each framework has a generate method for auto-regressive text generation implemented in their respective "),$=s("code"),we=t("GenerationMixin"),$e=t(" class:"),fe=m(),be=s("ul"),Te=s("li"),Vs=t("PyTorch "),on=s("a"),Ks=t("generate()"),Zs=t(" is implemented in "),sn=s("a"),Xs=t("GenerationMixin"),Js=t("."),Qs=m(),Ee=s("li"),Ys=t("TensorFlow "),an=s("a"),ea=t("generate()"),ta=t(" is implemented in "),rn=s("a"),na=t("TFGenerationMixin"),oa=t("."),sa=m(),Oe=s("li"),aa=t("Flax/JAX "),ln=s("a"),ra=t("generate()"),ia=t(" is implemented in "),dn=s("a"),la=t("FlaxGenerationMixin"),da=t("."),vs=m(),Ge=s("h2"),st=s("a"),Nn=s("span"),k(vt.$$.fragment),ca=m(),Cn=s("span"),pa=t("GenerationMixin"),ys=m(),T=s("div"),k(yt.$$.fragment),ma=m(),jt=s("p"),ga=t("A class containing all functions for auto-regressive text generation, to be used as a mixin in "),cn=s("a"),ua=t("PreTrainedModel"),_a=t("."),ha=m(),Mt=s("p"),fa=t("The class exposes "),pn=s("a"),ba=t("generate()"),xa=t(", which can be used for:"),ka=m(),S=s("ul"),W=s("li"),In=s("em"),va=t("greedy decoding"),ya=t(" by calling "),mn=s("a"),ja=t("greedy_search()"),Ma=t(" if "),Bn=s("code"),La=t("num_beams=1"),wa=t(` and
`),Wn=s("code"),$a=t("do_sample=False"),Ta=t("."),Ea=m(),H=s("li"),Hn=s("em"),Oa=t("multinomial sampling"),Ga=t(" by calling "),gn=s("a"),qa=t("sample()"),Sa=t(" if "),Rn=s("code"),Fa=t("num_beams=1"),za=t(` and
`),Un=s("code"),Aa=t("do_sample=True"),Pa=t("."),Da=m(),R=s("li"),Vn=s("em"),Na=t("typical decoding"),Ca=t(" by calling "),un=s("a"),Ia=t("sample()"),Ba=t(" if "),Kn=s("code"),Wa=t("typical_p < 1.0"),Ha=t(` and
`),Zn=s("code"),Ra=t("do_sample=True"),Ua=t("."),Va=m(),U=s("li"),Xn=s("em"),Ka=t("beam-search decoding"),Za=t(" by calling "),_n=s("a"),Xa=t("beam_search()"),Ja=t(" if "),Jn=s("code"),Qa=t("num_beams>1"),Ya=t(` and
`),Qn=s("code"),er=t("do_sample=False"),tr=t("."),nr=m(),V=s("li"),Yn=s("em"),or=t("beam-search multinomial sampling"),sr=t(" by calling "),hn=s("a"),ar=t("beam_sample()"),rr=t(` if
`),eo=s("code"),ir=t("num_beams>1"),lr=t(" and "),to=s("code"),dr=t("do_sample=True"),cr=t("."),pr=m(),K=s("li"),no=s("em"),mr=t("diverse beam-search decoding"),gr=t(" by calling "),fn=s("a"),ur=t("group_beam_search()"),_r=t(`, if
`),oo=s("code"),hr=t("num_beams>1"),fr=t(" and "),so=s("code"),br=t("num_beam_groups>1"),xr=t("."),kr=m(),Z=s("li"),ao=s("em"),vr=t("constrained beam-search decoding"),yr=t(" by calling "),bn=s("a"),jr=t("constrained_beam_search()"),Mr=t(`,
if `),ro=s("code"),Lr=t("constraints!=None"),wr=t(" or "),io=s("code"),$r=t("force_words_ids!=None"),Tr=t("."),Er=m(),E=s("div"),k(Lt.$$.fragment),Or=m(),lo=s("p"),Gr=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),qr=m(),D=s("ul"),X=s("li"),co=s("em"),Sr=t("greedy decoding"),Fr=t(" by calling "),xn=s("a"),zr=t("greedy_search()"),Ar=t(" if "),po=s("code"),Pr=t("num_beams=1"),Dr=t(` and
`),mo=s("code"),Nr=t("do_sample=False"),Cr=t("."),Ir=m(),J=s("li"),go=s("em"),Br=t("multinomial sampling"),Wr=t(" by calling "),kn=s("a"),Hr=t("sample()"),Rr=t(" if "),uo=s("code"),Ur=t("num_beams=1"),Vr=t(` and
`),_o=s("code"),Kr=t("do_sample=True"),Zr=t("."),Xr=m(),Q=s("li"),ho=s("em"),Jr=t("beam-search decoding"),Qr=t(" by calling "),vn=s("a"),Yr=t("beam_search()"),ei=t(" if "),fo=s("code"),ti=t("num_beams>1"),ni=t(` and
`),bo=s("code"),oi=t("do_sample=False"),si=t("."),ai=m(),Y=s("li"),xo=s("em"),ri=t("beam-search multinomial sampling"),ii=t(" by calling "),yn=s("a"),li=t("beam_sample()"),di=t(` if
`),ko=s("code"),ci=t("num_beams>1"),pi=t(" and "),vo=s("code"),mi=t("do_sample=True"),gi=t("."),ui=m(),ee=s("li"),yo=s("em"),_i=t("diverse beam-search decoding"),hi=t(" by calling "),jn=s("a"),fi=t("group_beam_search()"),bi=t(`, if
`),jo=s("code"),xi=t("num_beams>1"),ki=t(" and "),Mo=s("code"),vi=t("num_beam_groups>1"),yi=t("."),ji=m(),te=s("li"),Lo=s("em"),Mi=t("constrained beam-search decoding"),Li=t(` by calling
`),Mn=s("a"),wi=t("constrained_beam_search()"),$i=t(", if "),wo=s("code"),Ti=t("constraints!=None"),Ei=t(` or
`),$o=s("code"),Oi=t("force_words_ids!=None"),Gi=t("."),qi=m(),k(at.$$.fragment),Si=m(),wt=s("p"),Fi=t("Most of these parameters are explained in more detail in "),$t=s("a"),zi=t(`this blog
post`),Ai=t("."),Pi=m(),To=s("p"),Di=t("Examples:"),Ni=m(),k(rt.$$.fragment),Ci=m(),k(it.$$.fragment),Ii=m(),k(lt.$$.fragment),Bi=m(),xe=s("div"),k(Tt.$$.fragment),Wi=m(),Et=s("p"),Hi=t("Generates sequences of token ids for models with a language modeling head using "),Eo=s("strong"),Ri=t("greedy decoding"),Ui=t(` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Vi=m(),k(dt.$$.fragment),Ki=m(),ke=s("div"),k(Ot.$$.fragment),Zi=m(),Gt=s("p"),Xi=t("Generates sequences of token ids for models with a language modeling head using "),Oo=s("strong"),Ji=t("multinomial sampling"),Qi=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Yi=m(),k(ct.$$.fragment),el=m(),ve=s("div"),k(qt.$$.fragment),tl=m(),St=s("p"),nl=t("Generates sequences of token ids for models with a language modeling head using "),Go=s("strong"),ol=t("beam search decoding"),sl=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),al=m(),k(pt.$$.fragment),rl=m(),ye=s("div"),k(Ft.$$.fragment),il=m(),zt=s("p"),ll=t("Generates sequences of token ids for models with a language modeling head using "),qo=s("strong"),dl=t(`beam search multinomial
sampling`),cl=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),pl=m(),k(mt.$$.fragment),ml=m(),je=s("div"),k(At.$$.fragment),gl=m(),Pt=s("p"),ul=t("Generates sequences of token ids for models with a language modeling head using "),So=s("strong"),_l=t(`diverse beam search
decoding`),hl=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),fl=m(),k(gt.$$.fragment),bl=m(),Me=s("div"),k(Dt.$$.fragment),xl=m(),Nt=s("p"),kl=t("Generates sequences of token ids for models with a language modeling head using "),Fo=s("strong"),vl=t(`constrained beam search
decoding`),yl=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),jl=m(),k(ut.$$.fragment),js=m(),qe=s("h2"),_t=s("a"),zo=s("span"),k(Ct.$$.fragment),Ml=m(),Ao=s("span"),Ll=t("TFGenerationMixin"),Ms=m(),me=s("div"),k(It.$$.fragment),wl=m(),Bt=s("p"),$l=t("A class containing all of the functions supporting generation, to be used as a mixin in "),Ln=s("a"),Tl=t("TFPreTrainedModel"),El=t("."),Ol=m(),z=s("div"),k(Wt.$$.fragment),Gl=m(),Po=s("p"),ql=t(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),Sl=m(),Ht=s("p"),Fl=t("Adapted in part from "),Rt=s("a"),zl=t(`Facebook\u2019s XLM beam search
code`),Al=t("."),Pl=m(),ge=s("p"),Dl=t("Apart from "),Do=s("code"),Nl=t("input_ids"),Cl=t(" and "),No=s("code"),Il=t("attention_mask"),Bl=t(`, all the arguments below will default to the value of the attribute
of the same name inside the `),wn=s("a"),Wl=t("PretrainedConfig"),Hl=t(` of the model. The default values indicated are the default
values of those config.`),Rl=m(),Ut=s("p"),Ul=t("Most of these parameters are explained in more detail in "),Vt=s("a"),Vl=t(`this blog
post`),Kl=t("."),Zl=m(),k(ht.$$.fragment),Ls=m(),Se=s("h2"),ft=s("a"),Co=s("span"),k(Kt.$$.fragment),Xl=m(),Io=s("span"),Jl=t("FlaxGenerationMixin"),ws=m(),N=s("div"),k(Zt.$$.fragment),Ql=m(),Xt=s("p"),Yl=t(`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),$n=s("a"),ed=t("FlaxPreTrainedModel"),td=t("."),nd=m(),Jt=s("p"),od=t("The class exposes "),Tn=s("a"),sd=t("generate()"),ad=t(", which can be used for:"),rd=m(),Fe=s("ul"),ne=s("li"),Bo=s("em"),id=t("greedy decoding"),ld=t(" by calling "),Wo=s("code"),dd=t("_greedy_search()"),cd=t(` if
`),Ho=s("code"),pd=t("num_beams=1"),md=t(" and "),Ro=s("code"),gd=t("do_sample=False"),ud=t("."),_d=m(),oe=s("li"),Uo=s("em"),hd=t("multinomial sampling"),fd=t(" by calling "),Vo=s("code"),bd=t("_sample()"),xd=t(" if "),Ko=s("code"),kd=t("num_beams=1"),vd=t(`
and `),Zo=s("code"),yd=t("do_sample=True"),jd=t("."),Md=m(),se=s("li"),Xo=s("em"),Ld=t("beam-search decoding"),wd=t(" by calling "),Jo=s("code"),$d=t("_beam_search"),Td=t(" if "),Qo=s("code"),Ed=t("num_beams>1"),Od=t(`
and `),Yo=s("code"),Gd=t("do_sample=False"),qd=t("."),Sd=m(),A=s("div"),k(Qt.$$.fragment),Fd=m(),es=s("p"),zd=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Ad=m(),ze=s("ul"),ae=s("li"),ts=s("em"),Pd=t("greedy decoding"),Dd=t(" by calling "),ns=s("code"),Nd=t("_greedy_search()"),Cd=t(` if
`),os=s("code"),Id=t("num_beams=1"),Bd=t(" and "),ss=s("code"),Wd=t("do_sample=False"),Hd=t("."),Rd=m(),re=s("li"),as=s("em"),Ud=t("multinomial sampling"),Vd=t(" by calling "),rs=s("code"),Kd=t("_sample()"),Zd=t(" if "),is=s("code"),Xd=t("num_beams=1"),Jd=t(`
and `),ls=s("code"),Qd=t("do_sample=True"),Yd=t("."),ec=m(),ie=s("li"),ds=s("em"),tc=t("beam-search decoding"),nc=t(" by calling "),cs=s("code"),oc=t("_beam_search"),sc=t(" if "),ps=s("code"),ac=t("num_beams>1"),rc=t(`
and `),ms=s("code"),ic=t("do_sample=False"),lc=t("."),dc=m(),k(bt.$$.fragment),cc=m(),Yt=s("p"),pc=t("Most of these parameters are explained in more detail in "),en=s("a"),mc=t(`this blog
post`),gc=t("."),uc=m(),k(xt.$$.fragment),this.h()},l(l){const b=km('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(o),f=g(l),u=a(l,"H1",{class:!0});var tn=r(u);c=a(tn,"A",{id:!0,class:!0,href:!0});var gs=r(c);_=a(gs,"SPAN",{});var us=r(_);v(i.$$.fragment,us),us.forEach(o),gs.forEach(o),p=g(tn),I=a(tn,"SPAN",{});var _s=r(I);q=n(_s,"Generation"),_s.forEach(o),tn.forEach(o),B=g(l),F=a(l,"P",{});var nn=r(F);P=n(nn,"Each framework has a generate method for auto-regressive text generation implemented in their respective "),$=a(nn,"CODE",{});var hs=r($);we=n(hs,"GenerationMixin"),hs.forEach(o),$e=n(nn," class:"),nn.forEach(o),fe=g(l),be=a(l,"UL",{});var Ae=r(be);Te=a(Ae,"LI",{});var Pe=r(Te);Vs=n(Pe,"PyTorch "),on=a(Pe,"A",{href:!0});var fs=r(on);Ks=n(fs,"generate()"),fs.forEach(o),Zs=n(Pe," is implemented in "),sn=a(Pe,"A",{href:!0});var bs=r(sn);Xs=n(bs,"GenerationMixin"),bs.forEach(o),Js=n(Pe,"."),Pe.forEach(o),Qs=g(Ae),Ee=a(Ae,"LI",{});var De=r(Ee);Ys=n(De,"TensorFlow "),an=a(De,"A",{href:!0});var xs=r(an);ea=n(xs,"generate()"),xs.forEach(o),ta=n(De," is implemented in "),rn=a(De,"A",{href:!0});var ks=r(rn);na=n(ks,"TFGenerationMixin"),ks.forEach(o),oa=n(De,"."),De.forEach(o),sa=g(Ae),Oe=a(Ae,"LI",{});var En=r(Oe);aa=n(En,"Flax/JAX "),ln=a(En,"A",{href:!0});var _c=r(ln);ra=n(_c,"generate()"),_c.forEach(o),ia=n(En," is implemented in "),dn=a(En,"A",{href:!0});var hc=r(dn);la=n(hc,"FlaxGenerationMixin"),hc.forEach(o),da=n(En,"."),En.forEach(o),Ae.forEach(o),vs=g(l),Ge=a(l,"H2",{class:!0});var Ts=r(Ge);st=a(Ts,"A",{id:!0,class:!0,href:!0});var fc=r(st);Nn=a(fc,"SPAN",{});var bc=r(Nn);v(vt.$$.fragment,bc),bc.forEach(o),fc.forEach(o),ca=g(Ts),Cn=a(Ts,"SPAN",{});var xc=r(Cn);pa=n(xc,"GenerationMixin"),xc.forEach(o),Ts.forEach(o),ys=g(l),T=a(l,"DIV",{class:!0});var O=r(T);v(yt.$$.fragment,O),ma=g(O),jt=a(O,"P",{});var Es=r(jt);ga=n(Es,"A class containing all functions for auto-regressive text generation, to be used as a mixin in "),cn=a(Es,"A",{href:!0});var kc=r(cn);ua=n(kc,"PreTrainedModel"),kc.forEach(o),_a=n(Es,"."),Es.forEach(o),ha=g(O),Mt=a(O,"P",{});var Os=r(Mt);fa=n(Os,"The class exposes "),pn=a(Os,"A",{href:!0});var vc=r(pn);ba=n(vc,"generate()"),vc.forEach(o),xa=n(Os,", which can be used for:"),Os.forEach(o),ka=g(O),S=a(O,"UL",{});var C=r(S);W=a(C,"LI",{});var Ne=r(W);In=a(Ne,"EM",{});var yc=r(In);va=n(yc,"greedy decoding"),yc.forEach(o),ya=n(Ne," by calling "),mn=a(Ne,"A",{href:!0});var jc=r(mn);ja=n(jc,"greedy_search()"),jc.forEach(o),Ma=n(Ne," if "),Bn=a(Ne,"CODE",{});var Mc=r(Bn);La=n(Mc,"num_beams=1"),Mc.forEach(o),wa=n(Ne,` and
`),Wn=a(Ne,"CODE",{});var Lc=r(Wn);$a=n(Lc,"do_sample=False"),Lc.forEach(o),Ta=n(Ne,"."),Ne.forEach(o),Ea=g(C),H=a(C,"LI",{});var Ce=r(H);Hn=a(Ce,"EM",{});var wc=r(Hn);Oa=n(wc,"multinomial sampling"),wc.forEach(o),Ga=n(Ce," by calling "),gn=a(Ce,"A",{href:!0});var $c=r(gn);qa=n($c,"sample()"),$c.forEach(o),Sa=n(Ce," if "),Rn=a(Ce,"CODE",{});var Tc=r(Rn);Fa=n(Tc,"num_beams=1"),Tc.forEach(o),za=n(Ce,` and
`),Un=a(Ce,"CODE",{});var Ec=r(Un);Aa=n(Ec,"do_sample=True"),Ec.forEach(o),Pa=n(Ce,"."),Ce.forEach(o),Da=g(C),R=a(C,"LI",{});var Ie=r(R);Vn=a(Ie,"EM",{});var Oc=r(Vn);Na=n(Oc,"typical decoding"),Oc.forEach(o),Ca=n(Ie," by calling "),un=a(Ie,"A",{href:!0});var Gc=r(un);Ia=n(Gc,"sample()"),Gc.forEach(o),Ba=n(Ie," if "),Kn=a(Ie,"CODE",{});var qc=r(Kn);Wa=n(qc,"typical_p < 1.0"),qc.forEach(o),Ha=n(Ie,` and
`),Zn=a(Ie,"CODE",{});var Sc=r(Zn);Ra=n(Sc,"do_sample=True"),Sc.forEach(o),Ua=n(Ie,"."),Ie.forEach(o),Va=g(C),U=a(C,"LI",{});var Be=r(U);Xn=a(Be,"EM",{});var Fc=r(Xn);Ka=n(Fc,"beam-search decoding"),Fc.forEach(o),Za=n(Be," by calling "),_n=a(Be,"A",{href:!0});var zc=r(_n);Xa=n(zc,"beam_search()"),zc.forEach(o),Ja=n(Be," if "),Jn=a(Be,"CODE",{});var Ac=r(Jn);Qa=n(Ac,"num_beams>1"),Ac.forEach(o),Ya=n(Be,` and
`),Qn=a(Be,"CODE",{});var Pc=r(Qn);er=n(Pc,"do_sample=False"),Pc.forEach(o),tr=n(Be,"."),Be.forEach(o),nr=g(C),V=a(C,"LI",{});var We=r(V);Yn=a(We,"EM",{});var Dc=r(Yn);or=n(Dc,"beam-search multinomial sampling"),Dc.forEach(o),sr=n(We," by calling "),hn=a(We,"A",{href:!0});var Nc=r(hn);ar=n(Nc,"beam_sample()"),Nc.forEach(o),rr=n(We,` if
`),eo=a(We,"CODE",{});var Cc=r(eo);ir=n(Cc,"num_beams>1"),Cc.forEach(o),lr=n(We," and "),to=a(We,"CODE",{});var Ic=r(to);dr=n(Ic,"do_sample=True"),Ic.forEach(o),cr=n(We,"."),We.forEach(o),pr=g(C),K=a(C,"LI",{});var He=r(K);no=a(He,"EM",{});var Bc=r(no);mr=n(Bc,"diverse beam-search decoding"),Bc.forEach(o),gr=n(He," by calling "),fn=a(He,"A",{href:!0});var Wc=r(fn);ur=n(Wc,"group_beam_search()"),Wc.forEach(o),_r=n(He,`, if
`),oo=a(He,"CODE",{});var Hc=r(oo);hr=n(Hc,"num_beams>1"),Hc.forEach(o),fr=n(He," and "),so=a(He,"CODE",{});var Rc=r(so);br=n(Rc,"num_beam_groups>1"),Rc.forEach(o),xr=n(He,"."),He.forEach(o),kr=g(C),Z=a(C,"LI",{});var Re=r(Z);ao=a(Re,"EM",{});var Uc=r(ao);vr=n(Uc,"constrained beam-search decoding"),Uc.forEach(o),yr=n(Re," by calling "),bn=a(Re,"A",{href:!0});var Vc=r(bn);jr=n(Vc,"constrained_beam_search()"),Vc.forEach(o),Mr=n(Re,`,
if `),ro=a(Re,"CODE",{});var Kc=r(ro);Lr=n(Kc,"constraints!=None"),Kc.forEach(o),wr=n(Re," or "),io=a(Re,"CODE",{});var Zc=r(io);$r=n(Zc,"force_words_ids!=None"),Zc.forEach(o),Tr=n(Re,"."),Re.forEach(o),C.forEach(o),Er=g(O),E=a(O,"DIV",{class:!0});var G=r(E);v(Lt.$$.fragment,G),Or=g(G),lo=a(G,"P",{});var Xc=r(lo);Gr=n(Xc,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Xc.forEach(o),qr=g(G),D=a(G,"UL",{});var le=r(D);X=a(le,"LI",{});var Ue=r(X);co=a(Ue,"EM",{});var Jc=r(co);Sr=n(Jc,"greedy decoding"),Jc.forEach(o),Fr=n(Ue," by calling "),xn=a(Ue,"A",{href:!0});var Qc=r(xn);zr=n(Qc,"greedy_search()"),Qc.forEach(o),Ar=n(Ue," if "),po=a(Ue,"CODE",{});var Yc=r(po);Pr=n(Yc,"num_beams=1"),Yc.forEach(o),Dr=n(Ue,` and
`),mo=a(Ue,"CODE",{});var ep=r(mo);Nr=n(ep,"do_sample=False"),ep.forEach(o),Cr=n(Ue,"."),Ue.forEach(o),Ir=g(le),J=a(le,"LI",{});var Ve=r(J);go=a(Ve,"EM",{});var tp=r(go);Br=n(tp,"multinomial sampling"),tp.forEach(o),Wr=n(Ve," by calling "),kn=a(Ve,"A",{href:!0});var np=r(kn);Hr=n(np,"sample()"),np.forEach(o),Rr=n(Ve," if "),uo=a(Ve,"CODE",{});var op=r(uo);Ur=n(op,"num_beams=1"),op.forEach(o),Vr=n(Ve,` and
`),_o=a(Ve,"CODE",{});var sp=r(_o);Kr=n(sp,"do_sample=True"),sp.forEach(o),Zr=n(Ve,"."),Ve.forEach(o),Xr=g(le),Q=a(le,"LI",{});var Ke=r(Q);ho=a(Ke,"EM",{});var ap=r(ho);Jr=n(ap,"beam-search decoding"),ap.forEach(o),Qr=n(Ke," by calling "),vn=a(Ke,"A",{href:!0});var rp=r(vn);Yr=n(rp,"beam_search()"),rp.forEach(o),ei=n(Ke," if "),fo=a(Ke,"CODE",{});var ip=r(fo);ti=n(ip,"num_beams>1"),ip.forEach(o),ni=n(Ke,` and
`),bo=a(Ke,"CODE",{});var lp=r(bo);oi=n(lp,"do_sample=False"),lp.forEach(o),si=n(Ke,"."),Ke.forEach(o),ai=g(le),Y=a(le,"LI",{});var Ze=r(Y);xo=a(Ze,"EM",{});var dp=r(xo);ri=n(dp,"beam-search multinomial sampling"),dp.forEach(o),ii=n(Ze," by calling "),yn=a(Ze,"A",{href:!0});var cp=r(yn);li=n(cp,"beam_sample()"),cp.forEach(o),di=n(Ze,` if
`),ko=a(Ze,"CODE",{});var pp=r(ko);ci=n(pp,"num_beams>1"),pp.forEach(o),pi=n(Ze," and "),vo=a(Ze,"CODE",{});var mp=r(vo);mi=n(mp,"do_sample=True"),mp.forEach(o),gi=n(Ze,"."),Ze.forEach(o),ui=g(le),ee=a(le,"LI",{});var Xe=r(ee);yo=a(Xe,"EM",{});var gp=r(yo);_i=n(gp,"diverse beam-search decoding"),gp.forEach(o),hi=n(Xe," by calling "),jn=a(Xe,"A",{href:!0});var up=r(jn);fi=n(up,"group_beam_search()"),up.forEach(o),bi=n(Xe,`, if
`),jo=a(Xe,"CODE",{});var _p=r(jo);xi=n(_p,"num_beams>1"),_p.forEach(o),ki=n(Xe," and "),Mo=a(Xe,"CODE",{});var hp=r(Mo);vi=n(hp,"num_beam_groups>1"),hp.forEach(o),yi=n(Xe,"."),Xe.forEach(o),ji=g(le),te=a(le,"LI",{});var Je=r(te);Lo=a(Je,"EM",{});var fp=r(Lo);Mi=n(fp,"constrained beam-search decoding"),fp.forEach(o),Li=n(Je,` by calling
`),Mn=a(Je,"A",{href:!0});var bp=r(Mn);wi=n(bp,"constrained_beam_search()"),bp.forEach(o),$i=n(Je,", if "),wo=a(Je,"CODE",{});var xp=r(wo);Ti=n(xp,"constraints!=None"),xp.forEach(o),Ei=n(Je,` or
`),$o=a(Je,"CODE",{});var kp=r($o);Oi=n(kp,"force_words_ids!=None"),kp.forEach(o),Gi=n(Je,"."),Je.forEach(o),le.forEach(o),qi=g(G),v(at.$$.fragment,G),Si=g(G),wt=a(G,"P",{});var Gs=r(wt);Fi=n(Gs,"Most of these parameters are explained in more detail in "),$t=a(Gs,"A",{href:!0,rel:!0});var vp=r($t);zi=n(vp,`this blog
post`),vp.forEach(o),Ai=n(Gs,"."),Gs.forEach(o),Pi=g(G),To=a(G,"P",{});var yp=r(To);Di=n(yp,"Examples:"),yp.forEach(o),Ni=g(G),v(rt.$$.fragment,G),Ci=g(G),v(it.$$.fragment,G),Ii=g(G),v(lt.$$.fragment,G),G.forEach(o),Bi=g(O),xe=a(O,"DIV",{class:!0});var On=r(xe);v(Tt.$$.fragment,On),Wi=g(On),Et=a(On,"P",{});var qs=r(Et);Hi=n(qs,"Generates sequences of token ids for models with a language modeling head using "),Eo=a(qs,"STRONG",{});var jp=r(Eo);Ri=n(jp,"greedy decoding"),jp.forEach(o),Ui=n(qs,` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),qs.forEach(o),Vi=g(On),v(dt.$$.fragment,On),On.forEach(o),Ki=g(O),ke=a(O,"DIV",{class:!0});var Gn=r(ke);v(Ot.$$.fragment,Gn),Zi=g(Gn),Gt=a(Gn,"P",{});var Ss=r(Gt);Xi=n(Ss,"Generates sequences of token ids for models with a language modeling head using "),Oo=a(Ss,"STRONG",{});var Mp=r(Oo);Ji=n(Mp,"multinomial sampling"),Mp.forEach(o),Qi=n(Ss,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Ss.forEach(o),Yi=g(Gn),v(ct.$$.fragment,Gn),Gn.forEach(o),el=g(O),ve=a(O,"DIV",{class:!0});var qn=r(ve);v(qt.$$.fragment,qn),tl=g(qn),St=a(qn,"P",{});var Fs=r(St);nl=n(Fs,"Generates sequences of token ids for models with a language modeling head using "),Go=a(Fs,"STRONG",{});var Lp=r(Go);ol=n(Lp,"beam search decoding"),Lp.forEach(o),sl=n(Fs,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Fs.forEach(o),al=g(qn),v(pt.$$.fragment,qn),qn.forEach(o),rl=g(O),ye=a(O,"DIV",{class:!0});var Sn=r(ye);v(Ft.$$.fragment,Sn),il=g(Sn),zt=a(Sn,"P",{});var zs=r(zt);ll=n(zs,"Generates sequences of token ids for models with a language modeling head using "),qo=a(zs,"STRONG",{});var wp=r(qo);dl=n(wp,`beam search multinomial
sampling`),wp.forEach(o),cl=n(zs," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),zs.forEach(o),pl=g(Sn),v(mt.$$.fragment,Sn),Sn.forEach(o),ml=g(O),je=a(O,"DIV",{class:!0});var Fn=r(je);v(At.$$.fragment,Fn),gl=g(Fn),Pt=a(Fn,"P",{});var As=r(Pt);ul=n(As,"Generates sequences of token ids for models with a language modeling head using "),So=a(As,"STRONG",{});var $p=r(So);_l=n($p,`diverse beam search
decoding`),$p.forEach(o),hl=n(As," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),As.forEach(o),fl=g(Fn),v(gt.$$.fragment,Fn),Fn.forEach(o),bl=g(O),Me=a(O,"DIV",{class:!0});var zn=r(Me);v(Dt.$$.fragment,zn),xl=g(zn),Nt=a(zn,"P",{});var Ps=r(Nt);kl=n(Ps,"Generates sequences of token ids for models with a language modeling head using "),Fo=a(Ps,"STRONG",{});var Tp=r(Fo);vl=n(Tp,`constrained beam search
decoding`),Tp.forEach(o),yl=n(Ps," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Ps.forEach(o),jl=g(zn),v(ut.$$.fragment,zn),zn.forEach(o),O.forEach(o),js=g(l),qe=a(l,"H2",{class:!0});var Ds=r(qe);_t=a(Ds,"A",{id:!0,class:!0,href:!0});var Ep=r(_t);zo=a(Ep,"SPAN",{});var Op=r(zo);v(Ct.$$.fragment,Op),Op.forEach(o),Ep.forEach(o),Ml=g(Ds),Ao=a(Ds,"SPAN",{});var Gp=r(Ao);Ll=n(Gp,"TFGenerationMixin"),Gp.forEach(o),Ds.forEach(o),Ms=g(l),me=a(l,"DIV",{class:!0});var An=r(me);v(It.$$.fragment,An),wl=g(An),Bt=a(An,"P",{});var Ns=r(Bt);$l=n(Ns,"A class containing all of the functions supporting generation, to be used as a mixin in "),Ln=a(Ns,"A",{href:!0});var qp=r(Ln);Tl=n(qp,"TFPreTrainedModel"),qp.forEach(o),El=n(Ns,"."),Ns.forEach(o),Ol=g(An),z=a(An,"DIV",{class:!0});var de=r(z);v(Wt.$$.fragment,de),Gl=g(de),Po=a(de,"P",{});var Sp=r(Po);ql=n(Sp,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),Sp.forEach(o),Sl=g(de),Ht=a(de,"P",{});var Cs=r(Ht);Fl=n(Cs,"Adapted in part from "),Rt=a(Cs,"A",{href:!0,rel:!0});var Fp=r(Rt);zl=n(Fp,`Facebook\u2019s XLM beam search
code`),Fp.forEach(o),Al=n(Cs,"."),Cs.forEach(o),Pl=g(de),ge=a(de,"P",{});var kt=r(ge);Dl=n(kt,"Apart from "),Do=a(kt,"CODE",{});var zp=r(Do);Nl=n(zp,"input_ids"),zp.forEach(o),Cl=n(kt," and "),No=a(kt,"CODE",{});var Ap=r(No);Il=n(Ap,"attention_mask"),Ap.forEach(o),Bl=n(kt,`, all the arguments below will default to the value of the attribute
of the same name inside the `),wn=a(kt,"A",{href:!0});var Pp=r(wn);Wl=n(Pp,"PretrainedConfig"),Pp.forEach(o),Hl=n(kt,` of the model. The default values indicated are the default
values of those config.`),kt.forEach(o),Rl=g(de),Ut=a(de,"P",{});var Is=r(Ut);Ul=n(Is,"Most of these parameters are explained in more detail in "),Vt=a(Is,"A",{href:!0,rel:!0});var Dp=r(Vt);Vl=n(Dp,`this blog
post`),Dp.forEach(o),Kl=n(Is,"."),Is.forEach(o),Zl=g(de),v(ht.$$.fragment,de),de.forEach(o),An.forEach(o),Ls=g(l),Se=a(l,"H2",{class:!0});var Bs=r(Se);ft=a(Bs,"A",{id:!0,class:!0,href:!0});var Np=r(ft);Co=a(Np,"SPAN",{});var Cp=r(Co);v(Kt.$$.fragment,Cp),Cp.forEach(o),Np.forEach(o),Xl=g(Bs),Io=a(Bs,"SPAN",{});var Ip=r(Io);Jl=n(Ip,"FlaxGenerationMixin"),Ip.forEach(o),Bs.forEach(o),ws=g(l),N=a(l,"DIV",{class:!0});var Le=r(N);v(Zt.$$.fragment,Le),Ql=g(Le),Xt=a(Le,"P",{});var Ws=r(Xt);Yl=n(Ws,`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),$n=a(Ws,"A",{href:!0});var Bp=r($n);ed=n(Bp,"FlaxPreTrainedModel"),Bp.forEach(o),td=n(Ws,"."),Ws.forEach(o),nd=g(Le),Jt=a(Le,"P",{});var Hs=r(Jt);od=n(Hs,"The class exposes "),Tn=a(Hs,"A",{href:!0});var Wp=r(Tn);sd=n(Wp,"generate()"),Wp.forEach(o),ad=n(Hs,", which can be used for:"),Hs.forEach(o),rd=g(Le),Fe=a(Le,"UL",{});var Pn=r(Fe);ne=a(Pn,"LI",{});var Qe=r(ne);Bo=a(Qe,"EM",{});var Hp=r(Bo);id=n(Hp,"greedy decoding"),Hp.forEach(o),ld=n(Qe," by calling "),Wo=a(Qe,"CODE",{});var Rp=r(Wo);dd=n(Rp,"_greedy_search()"),Rp.forEach(o),cd=n(Qe,` if
`),Ho=a(Qe,"CODE",{});var Up=r(Ho);pd=n(Up,"num_beams=1"),Up.forEach(o),md=n(Qe," and "),Ro=a(Qe,"CODE",{});var Vp=r(Ro);gd=n(Vp,"do_sample=False"),Vp.forEach(o),ud=n(Qe,"."),Qe.forEach(o),_d=g(Pn),oe=a(Pn,"LI",{});var Ye=r(oe);Uo=a(Ye,"EM",{});var Kp=r(Uo);hd=n(Kp,"multinomial sampling"),Kp.forEach(o),fd=n(Ye," by calling "),Vo=a(Ye,"CODE",{});var Zp=r(Vo);bd=n(Zp,"_sample()"),Zp.forEach(o),xd=n(Ye," if "),Ko=a(Ye,"CODE",{});var Xp=r(Ko);kd=n(Xp,"num_beams=1"),Xp.forEach(o),vd=n(Ye,`
and `),Zo=a(Ye,"CODE",{});var Jp=r(Zo);yd=n(Jp,"do_sample=True"),Jp.forEach(o),jd=n(Ye,"."),Ye.forEach(o),Md=g(Pn),se=a(Pn,"LI",{});var et=r(se);Xo=a(et,"EM",{});var Qp=r(Xo);Ld=n(Qp,"beam-search decoding"),Qp.forEach(o),wd=n(et," by calling "),Jo=a(et,"CODE",{});var Yp=r(Jo);$d=n(Yp,"_beam_search"),Yp.forEach(o),Td=n(et," if "),Qo=a(et,"CODE",{});var em=r(Qo);Ed=n(em,"num_beams>1"),em.forEach(o),Od=n(et,`
and `),Yo=a(et,"CODE",{});var tm=r(Yo);Gd=n(tm,"do_sample=False"),tm.forEach(o),qd=n(et,"."),et.forEach(o),Pn.forEach(o),Sd=g(Le),A=a(Le,"DIV",{class:!0});var ce=r(A);v(Qt.$$.fragment,ce),Fd=g(ce),es=a(ce,"P",{});var nm=r(es);zd=n(nm,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),nm.forEach(o),Ad=g(ce),ze=a(ce,"UL",{});var Dn=r(ze);ae=a(Dn,"LI",{});var tt=r(ae);ts=a(tt,"EM",{});var om=r(ts);Pd=n(om,"greedy decoding"),om.forEach(o),Dd=n(tt," by calling "),ns=a(tt,"CODE",{});var sm=r(ns);Nd=n(sm,"_greedy_search()"),sm.forEach(o),Cd=n(tt,` if
`),os=a(tt,"CODE",{});var am=r(os);Id=n(am,"num_beams=1"),am.forEach(o),Bd=n(tt," and "),ss=a(tt,"CODE",{});var rm=r(ss);Wd=n(rm,"do_sample=False"),rm.forEach(o),Hd=n(tt,"."),tt.forEach(o),Rd=g(Dn),re=a(Dn,"LI",{});var nt=r(re);as=a(nt,"EM",{});var im=r(as);Ud=n(im,"multinomial sampling"),im.forEach(o),Vd=n(nt," by calling "),rs=a(nt,"CODE",{});var lm=r(rs);Kd=n(lm,"_sample()"),lm.forEach(o),Zd=n(nt," if "),is=a(nt,"CODE",{});var dm=r(is);Xd=n(dm,"num_beams=1"),dm.forEach(o),Jd=n(nt,`
and `),ls=a(nt,"CODE",{});var cm=r(ls);Qd=n(cm,"do_sample=True"),cm.forEach(o),Yd=n(nt,"."),nt.forEach(o),ec=g(Dn),ie=a(Dn,"LI",{});var ot=r(ie);ds=a(ot,"EM",{});var pm=r(ds);tc=n(pm,"beam-search decoding"),pm.forEach(o),nc=n(ot," by calling "),cs=a(ot,"CODE",{});var mm=r(cs);oc=n(mm,"_beam_search"),mm.forEach(o),sc=n(ot," if "),ps=a(ot,"CODE",{});var gm=r(ps);ac=n(gm,"num_beams>1"),gm.forEach(o),rc=n(ot,`
and `),ms=a(ot,"CODE",{});var um=r(ms);ic=n(um,"do_sample=False"),um.forEach(o),lc=n(ot,"."),ot.forEach(o),Dn.forEach(o),dc=g(ce),v(bt.$$.fragment,ce),cc=g(ce),Yt=a(ce,"P",{});var Rs=r(Yt);pc=n(Rs,"Most of these parameters are explained in more detail in "),en=a(Rs,"A",{href:!0,rel:!0});var _m=r(en);mc=n(_m,`this blog
post`),_m.forEach(o),gc=n(Rs,"."),Rs.forEach(o),uc=g(ce),v(xt.$$.fragment,ce),ce.forEach(o),Le.forEach(o),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Am)),h(c,"id","generation"),h(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(c,"href","#generation"),h(u,"class","relative group"),h(on,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(sn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin"),h(an,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin.generate"),h(rn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin"),h(ln,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),h(dn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin"),h(st,"id","transformers.generation_utils.GenerationMixin"),h(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(st,"href","#transformers.generation_utils.GenerationMixin"),h(Ge,"class","relative group"),h(cn,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.PreTrainedModel"),h(pn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(mn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),h(gn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),h(un,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),h(_n,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),h(hn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),h(fn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),h(bn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.constrained_beam_search"),h(xn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),h(kn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),h(vn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),h(yn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),h(jn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),h(Mn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.constrained_beam_search"),h($t,"href","https://huggingface.co/blog/how-to-generate"),h($t,"rel","nofollow"),h(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_t,"id","transformers.generation_tf_utils.TFGenerationMixin"),h(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_t,"href","#transformers.generation_tf_utils.TFGenerationMixin"),h(qe,"class","relative group"),h(Ln,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.TFPreTrainedModel"),h(Rt,"href","https://github.com/facebookresearch/XLM/blob/9e6f6814d17be4fe5b15f2e6c43eb2b2d76daeb4/src/model/transformer.py#L529"),h(Rt,"rel","nofollow"),h(wn,"href","/docs/transformers/pr_17196/en/main_classes/configuration#transformers.PretrainedConfig"),h(Vt,"href","https://huggingface.co/blog/how-to-generate"),h(Vt,"rel","nofollow"),h(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ft,"id","transformers.generation_flax_utils.FlaxGenerationMixin"),h(ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ft,"href","#transformers.generation_flax_utils.FlaxGenerationMixin"),h(Se,"class","relative group"),h($n,"href","/docs/transformers/pr_17196/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Tn,"href","/docs/transformers/pr_17196/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),h(en,"href","https://huggingface.co/blog/how-to-generate"),h(en,"rel","nofollow"),h(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(l,b){e(document.head,d),x(l,f,b),x(l,u,b),e(u,c),e(c,_),y(i,_,null),e(u,p),e(u,I),e(I,q),x(l,B,b),x(l,F,b),e(F,P),e(F,$),e($,we),e(F,$e),x(l,fe,b),x(l,be,b),e(be,Te),e(Te,Vs),e(Te,on),e(on,Ks),e(Te,Zs),e(Te,sn),e(sn,Xs),e(Te,Js),e(be,Qs),e(be,Ee),e(Ee,Ys),e(Ee,an),e(an,ea),e(Ee,ta),e(Ee,rn),e(rn,na),e(Ee,oa),e(be,sa),e(be,Oe),e(Oe,aa),e(Oe,ln),e(ln,ra),e(Oe,ia),e(Oe,dn),e(dn,la),e(Oe,da),x(l,vs,b),x(l,Ge,b),e(Ge,st),e(st,Nn),y(vt,Nn,null),e(Ge,ca),e(Ge,Cn),e(Cn,pa),x(l,ys,b),x(l,T,b),y(yt,T,null),e(T,ma),e(T,jt),e(jt,ga),e(jt,cn),e(cn,ua),e(jt,_a),e(T,ha),e(T,Mt),e(Mt,fa),e(Mt,pn),e(pn,ba),e(Mt,xa),e(T,ka),e(T,S),e(S,W),e(W,In),e(In,va),e(W,ya),e(W,mn),e(mn,ja),e(W,Ma),e(W,Bn),e(Bn,La),e(W,wa),e(W,Wn),e(Wn,$a),e(W,Ta),e(S,Ea),e(S,H),e(H,Hn),e(Hn,Oa),e(H,Ga),e(H,gn),e(gn,qa),e(H,Sa),e(H,Rn),e(Rn,Fa),e(H,za),e(H,Un),e(Un,Aa),e(H,Pa),e(S,Da),e(S,R),e(R,Vn),e(Vn,Na),e(R,Ca),e(R,un),e(un,Ia),e(R,Ba),e(R,Kn),e(Kn,Wa),e(R,Ha),e(R,Zn),e(Zn,Ra),e(R,Ua),e(S,Va),e(S,U),e(U,Xn),e(Xn,Ka),e(U,Za),e(U,_n),e(_n,Xa),e(U,Ja),e(U,Jn),e(Jn,Qa),e(U,Ya),e(U,Qn),e(Qn,er),e(U,tr),e(S,nr),e(S,V),e(V,Yn),e(Yn,or),e(V,sr),e(V,hn),e(hn,ar),e(V,rr),e(V,eo),e(eo,ir),e(V,lr),e(V,to),e(to,dr),e(V,cr),e(S,pr),e(S,K),e(K,no),e(no,mr),e(K,gr),e(K,fn),e(fn,ur),e(K,_r),e(K,oo),e(oo,hr),e(K,fr),e(K,so),e(so,br),e(K,xr),e(S,kr),e(S,Z),e(Z,ao),e(ao,vr),e(Z,yr),e(Z,bn),e(bn,jr),e(Z,Mr),e(Z,ro),e(ro,Lr),e(Z,wr),e(Z,io),e(io,$r),e(Z,Tr),e(T,Er),e(T,E),y(Lt,E,null),e(E,Or),e(E,lo),e(lo,Gr),e(E,qr),e(E,D),e(D,X),e(X,co),e(co,Sr),e(X,Fr),e(X,xn),e(xn,zr),e(X,Ar),e(X,po),e(po,Pr),e(X,Dr),e(X,mo),e(mo,Nr),e(X,Cr),e(D,Ir),e(D,J),e(J,go),e(go,Br),e(J,Wr),e(J,kn),e(kn,Hr),e(J,Rr),e(J,uo),e(uo,Ur),e(J,Vr),e(J,_o),e(_o,Kr),e(J,Zr),e(D,Xr),e(D,Q),e(Q,ho),e(ho,Jr),e(Q,Qr),e(Q,vn),e(vn,Yr),e(Q,ei),e(Q,fo),e(fo,ti),e(Q,ni),e(Q,bo),e(bo,oi),e(Q,si),e(D,ai),e(D,Y),e(Y,xo),e(xo,ri),e(Y,ii),e(Y,yn),e(yn,li),e(Y,di),e(Y,ko),e(ko,ci),e(Y,pi),e(Y,vo),e(vo,mi),e(Y,gi),e(D,ui),e(D,ee),e(ee,yo),e(yo,_i),e(ee,hi),e(ee,jn),e(jn,fi),e(ee,bi),e(ee,jo),e(jo,xi),e(ee,ki),e(ee,Mo),e(Mo,vi),e(ee,yi),e(D,ji),e(D,te),e(te,Lo),e(Lo,Mi),e(te,Li),e(te,Mn),e(Mn,wi),e(te,$i),e(te,wo),e(wo,Ti),e(te,Ei),e(te,$o),e($o,Oi),e(te,Gi),e(E,qi),y(at,E,null),e(E,Si),e(E,wt),e(wt,Fi),e(wt,$t),e($t,zi),e(wt,Ai),e(E,Pi),e(E,To),e(To,Di),e(E,Ni),y(rt,E,null),e(E,Ci),y(it,E,null),e(E,Ii),y(lt,E,null),e(T,Bi),e(T,xe),y(Tt,xe,null),e(xe,Wi),e(xe,Et),e(Et,Hi),e(Et,Eo),e(Eo,Ri),e(Et,Ui),e(xe,Vi),y(dt,xe,null),e(T,Ki),e(T,ke),y(Ot,ke,null),e(ke,Zi),e(ke,Gt),e(Gt,Xi),e(Gt,Oo),e(Oo,Ji),e(Gt,Qi),e(ke,Yi),y(ct,ke,null),e(T,el),e(T,ve),y(qt,ve,null),e(ve,tl),e(ve,St),e(St,nl),e(St,Go),e(Go,ol),e(St,sl),e(ve,al),y(pt,ve,null),e(T,rl),e(T,ye),y(Ft,ye,null),e(ye,il),e(ye,zt),e(zt,ll),e(zt,qo),e(qo,dl),e(zt,cl),e(ye,pl),y(mt,ye,null),e(T,ml),e(T,je),y(At,je,null),e(je,gl),e(je,Pt),e(Pt,ul),e(Pt,So),e(So,_l),e(Pt,hl),e(je,fl),y(gt,je,null),e(T,bl),e(T,Me),y(Dt,Me,null),e(Me,xl),e(Me,Nt),e(Nt,kl),e(Nt,Fo),e(Fo,vl),e(Nt,yl),e(Me,jl),y(ut,Me,null),x(l,js,b),x(l,qe,b),e(qe,_t),e(_t,zo),y(Ct,zo,null),e(qe,Ml),e(qe,Ao),e(Ao,Ll),x(l,Ms,b),x(l,me,b),y(It,me,null),e(me,wl),e(me,Bt),e(Bt,$l),e(Bt,Ln),e(Ln,Tl),e(Bt,El),e(me,Ol),e(me,z),y(Wt,z,null),e(z,Gl),e(z,Po),e(Po,ql),e(z,Sl),e(z,Ht),e(Ht,Fl),e(Ht,Rt),e(Rt,zl),e(Ht,Al),e(z,Pl),e(z,ge),e(ge,Dl),e(ge,Do),e(Do,Nl),e(ge,Cl),e(ge,No),e(No,Il),e(ge,Bl),e(ge,wn),e(wn,Wl),e(ge,Hl),e(z,Rl),e(z,Ut),e(Ut,Ul),e(Ut,Vt),e(Vt,Vl),e(Ut,Kl),e(z,Zl),y(ht,z,null),x(l,Ls,b),x(l,Se,b),e(Se,ft),e(ft,Co),y(Kt,Co,null),e(Se,Xl),e(Se,Io),e(Io,Jl),x(l,ws,b),x(l,N,b),y(Zt,N,null),e(N,Ql),e(N,Xt),e(Xt,Yl),e(Xt,$n),e($n,ed),e(Xt,td),e(N,nd),e(N,Jt),e(Jt,od),e(Jt,Tn),e(Tn,sd),e(Jt,ad),e(N,rd),e(N,Fe),e(Fe,ne),e(ne,Bo),e(Bo,id),e(ne,ld),e(ne,Wo),e(Wo,dd),e(ne,cd),e(ne,Ho),e(Ho,pd),e(ne,md),e(ne,Ro),e(Ro,gd),e(ne,ud),e(Fe,_d),e(Fe,oe),e(oe,Uo),e(Uo,hd),e(oe,fd),e(oe,Vo),e(Vo,bd),e(oe,xd),e(oe,Ko),e(Ko,kd),e(oe,vd),e(oe,Zo),e(Zo,yd),e(oe,jd),e(Fe,Md),e(Fe,se),e(se,Xo),e(Xo,Ld),e(se,wd),e(se,Jo),e(Jo,$d),e(se,Td),e(se,Qo),e(Qo,Ed),e(se,Od),e(se,Yo),e(Yo,Gd),e(se,qd),e(N,Sd),e(N,A),y(Qt,A,null),e(A,Fd),e(A,es),e(es,zd),e(A,Ad),e(A,ze),e(ze,ae),e(ae,ts),e(ts,Pd),e(ae,Dd),e(ae,ns),e(ns,Nd),e(ae,Cd),e(ae,os),e(os,Id),e(ae,Bd),e(ae,ss),e(ss,Wd),e(ae,Hd),e(ze,Rd),e(ze,re),e(re,as),e(as,Ud),e(re,Vd),e(re,rs),e(rs,Kd),e(re,Zd),e(re,is),e(is,Xd),e(re,Jd),e(re,ls),e(ls,Qd),e(re,Yd),e(ze,ec),e(ze,ie),e(ie,ds),e(ds,tc),e(ie,nc),e(ie,cs),e(cs,oc),e(ie,sc),e(ie,ps),e(ps,ac),e(ie,rc),e(ie,ms),e(ms,ic),e(ie,lc),e(A,dc),y(bt,A,null),e(A,cc),e(A,Yt),e(Yt,pc),e(Yt,en),e(en,mc),e(Yt,gc),e(A,uc),y(xt,A,null),$s=!0},p(l,[b]){const tn={};b&2&&(tn.$$scope={dirty:b,ctx:l}),at.$set(tn);const gs={};b&2&&(gs.$$scope={dirty:b,ctx:l}),rt.$set(gs);const us={};b&2&&(us.$$scope={dirty:b,ctx:l}),it.$set(us);const _s={};b&2&&(_s.$$scope={dirty:b,ctx:l}),lt.$set(_s);const nn={};b&2&&(nn.$$scope={dirty:b,ctx:l}),dt.$set(nn);const hs={};b&2&&(hs.$$scope={dirty:b,ctx:l}),ct.$set(hs);const Ae={};b&2&&(Ae.$$scope={dirty:b,ctx:l}),pt.$set(Ae);const Pe={};b&2&&(Pe.$$scope={dirty:b,ctx:l}),mt.$set(Pe);const fs={};b&2&&(fs.$$scope={dirty:b,ctx:l}),gt.$set(fs);const bs={};b&2&&(bs.$$scope={dirty:b,ctx:l}),ut.$set(bs);const De={};b&2&&(De.$$scope={dirty:b,ctx:l}),ht.$set(De);const xs={};b&2&&(xs.$$scope={dirty:b,ctx:l}),bt.$set(xs);const ks={};b&2&&(ks.$$scope={dirty:b,ctx:l}),xt.$set(ks)},i(l){$s||(j(i.$$.fragment,l),j(vt.$$.fragment,l),j(yt.$$.fragment,l),j(Lt.$$.fragment,l),j(at.$$.fragment,l),j(rt.$$.fragment,l),j(it.$$.fragment,l),j(lt.$$.fragment,l),j(Tt.$$.fragment,l),j(dt.$$.fragment,l),j(Ot.$$.fragment,l),j(ct.$$.fragment,l),j(qt.$$.fragment,l),j(pt.$$.fragment,l),j(Ft.$$.fragment,l),j(mt.$$.fragment,l),j(At.$$.fragment,l),j(gt.$$.fragment,l),j(Dt.$$.fragment,l),j(ut.$$.fragment,l),j(Ct.$$.fragment,l),j(It.$$.fragment,l),j(Wt.$$.fragment,l),j(ht.$$.fragment,l),j(Kt.$$.fragment,l),j(Zt.$$.fragment,l),j(Qt.$$.fragment,l),j(bt.$$.fragment,l),j(xt.$$.fragment,l),$s=!0)},o(l){M(i.$$.fragment,l),M(vt.$$.fragment,l),M(yt.$$.fragment,l),M(Lt.$$.fragment,l),M(at.$$.fragment,l),M(rt.$$.fragment,l),M(it.$$.fragment,l),M(lt.$$.fragment,l),M(Tt.$$.fragment,l),M(dt.$$.fragment,l),M(Ot.$$.fragment,l),M(ct.$$.fragment,l),M(qt.$$.fragment,l),M(pt.$$.fragment,l),M(Ft.$$.fragment,l),M(mt.$$.fragment,l),M(At.$$.fragment,l),M(gt.$$.fragment,l),M(Dt.$$.fragment,l),M(ut.$$.fragment,l),M(Ct.$$.fragment,l),M(It.$$.fragment,l),M(Wt.$$.fragment,l),M(ht.$$.fragment,l),M(Kt.$$.fragment,l),M(Zt.$$.fragment,l),M(Qt.$$.fragment,l),M(bt.$$.fragment,l),M(xt.$$.fragment,l),$s=!1},d(l){o(d),l&&o(f),l&&o(u),L(i),l&&o(B),l&&o(F),l&&o(fe),l&&o(be),l&&o(vs),l&&o(Ge),L(vt),l&&o(ys),l&&o(T),L(yt),L(Lt),L(at),L(rt),L(it),L(lt),L(Tt),L(dt),L(Ot),L(ct),L(qt),L(pt),L(Ft),L(mt),L(At),L(gt),L(Dt),L(ut),l&&o(js),l&&o(qe),L(Ct),l&&o(Ms),l&&o(me),L(It),L(Wt),L(ht),l&&o(Ls),l&&o(Se),L(Kt),l&&o(ws),l&&o(N),L(Zt),L(Qt),L(bt),L(xt)}}}const Am={local:"generation",sections:[{local:"transformers.generation_utils.GenerationMixin",title:"GenerationMixin"},{local:"transformers.generation_tf_utils.TFGenerationMixin",title:"TFGenerationMixin"},{local:"transformers.generation_flax_utils.FlaxGenerationMixin",title:"FlaxGenerationMixin"}],title:"Generation"};function Pm(w){return vm(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Hm extends fm{constructor(d){super();bm(this,d,Pm,zm,xm,{})}}export{Hm as default,Am as metadata};
