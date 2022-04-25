import{S as cm,i as pm,s as mm,e as s,k as m,w as x,t,M as gm,c as a,d as o,m as g,a as r,x as k,h as n,b as _,F as e,g as L,y as v,q as y,o as j,B as M,v as um,L as ue}from"../../chunks/vendor-6b77c823.js";import{T as dm}from"../../chunks/Tip-39098574.js";import{D as ce}from"../../chunks/Docstring-1088f2fb.js";import{C as _e}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ws}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ge}from"../../chunks/ExampleCodeBlock-5212b321.js";function _m($){let d,h,c,p,f,i,u,C,q,I,S;return{c(){d=s("p"),h=t("Apart from "),c=s("code"),p=t("inputs"),f=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),i=s("code"),u=t("config.json"),C=t(`) which in turn defaults to the
`),q=s("a"),I=t("PretrainedConfig"),S=t(" of the model."),this.h()},l(z){d=a(z,"P",{});var T=r(d);h=n(T,"Apart from "),c=a(T,"CODE",{});var Le=r(c);p=n(Le,"inputs"),Le.forEach(o),f=n(T,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),i=a(T,"CODE",{});var $e=r(i);u=n($e,"config.json"),$e.forEach(o),C=n(T,`) which in turn defaults to the
`),q=a(T,"A",{href:!0});var he=r(q);I=n(he,"PretrainedConfig"),he.forEach(o),S=n(T," of the model."),T.forEach(o),this.h()},h(){_(q,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig")},m(z,T){L(z,d,T),e(d,h),e(d,c),e(c,p),e(d,f),e(d,i),e(i,u),e(d,C),e(d,q),e(q,I),e(d,S)},d(z){z&&o(d)}}}function hm($){let d,h;return d=new _e({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

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
[<span class="hljs-string">&#x27;Today I believe we can finally get to the point where we can make a difference in the lives of the people of the United States of America.\\n&#x27;</span>]`}}),{c(){x(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,p){v(d,c,p),h=!0},p:ue,i(c){h||(y(d.$$.fragment,c),h=!0)},o(c){j(d.$$.fragment,c),h=!1},d(c){M(d,c)}}}function fm($){let d,h;return d=new _e({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM
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
[<span class="hljs-string">&#x27;Today I believe we can finally get rid of discrimination,&quot; said Rep. Mark Pocan (D-Wis.).\\n\\n&quot;Just look at the&#x27;</span>]`}}),{c(){x(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,p){v(d,c,p),h=!0},p:ue,i(c){h||(y(d.$$.fragment,c),h=!0)},o(c){j(d.$$.fragment,c),h=!1},d(c){M(d,c)}}}function bm($){let d,h;return d=new _e({props:{code:`from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

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
[<span class="hljs-string">&#x27;Paris ist eines der dichtesten besiedelten Gebiete Europas.&#x27;</span>]`}}),{c(){x(d.$$.fragment)},l(c){k(d.$$.fragment,c)},m(c,p){v(d,c,p),h=!0},p:ue,i(c){h||(y(d.$$.fragment,c),h=!0)},o(c){j(d.$$.fragment,c),h=!1},d(c){M(d,c)}}}function xm($){let d,h,c,p,f;return p=new _e({props:{code:`from transformers import (
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
[<span class="hljs-string">&quot;It might be possible to get a better understanding of the nature of the problem, but it&#x27;s not&quot;</span>]`}}),{c(){d=s("p"),h=t("Examples:"),c=m(),x(p.$$.fragment)},l(i){d=a(i,"P",{});var u=r(d);h=n(u,"Examples:"),u.forEach(o),c=g(i),k(p.$$.fragment,i)},m(i,u){L(i,d,u),e(d,h),L(i,c,u),v(p,i,u),f=!0},p:ue,i(i){f||(y(p.$$.fragment,i),f=!0)},o(i){j(p.$$.fragment,i),f=!1},d(i){i&&o(d),i&&o(c),M(p,i)}}}function km($){let d,h,c,p,f;return p=new _e({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Today is a beautiful day, and a wonderful day.\\n\\nI was lucky enough to meet the&#x27;</span>]`}}),{c(){d=s("p"),h=t("Examples:"),c=m(),x(p.$$.fragment)},l(i){d=a(i,"P",{});var u=r(d);h=n(u,"Examples:"),u.forEach(o),c=g(i),k(p.$$.fragment,i)},m(i,u){L(i,d,u),e(d,h),L(i,c,u),v(p,i,u),f=!0},p:ue,i(i){f||(y(p.$$.fragment,i),f=!0)},o(i){j(p.$$.fragment,i),f=!1},d(i){i&&o(d),i&&o(c),M(p,i)}}}function vm($){let d,h,c,p,f;return p=new _e({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=s("p"),h=t("Examples:"),c=m(),x(p.$$.fragment)},l(i){d=a(i,"P",{});var u=r(d);h=n(u,"Examples:"),u.forEach(o),c=g(i),k(p.$$.fragment,i)},m(i,u){L(i,d,u),e(d,h),L(i,c,u),v(p,i,u),f=!0},p:ue,i(i){f||(y(p.$$.fragment,i),f=!0)},o(i){j(p.$$.fragment,i),f=!1},d(i){i&&o(d),i&&o(c),M(p,i)}}}function ym($){let d,h,c,p,f;return p=new _e({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=s("p"),h=t("Examples:"),c=m(),x(p.$$.fragment)},l(i){d=a(i,"P",{});var u=r(d);h=n(u,"Examples:"),u.forEach(o),c=g(i),k(p.$$.fragment,i)},m(i,u){L(i,d,u),e(d,h),L(i,c,u),v(p,i,u),f=!0},p:ue,i(i){f||(y(p.$$.fragment,i),f=!0)},o(i){j(p.$$.fragment,i),f=!1},d(i){i&&o(d),i&&o(c),M(p,i)}}}function jm($){let d,h,c,p,f;return p=new _e({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`}}),{c(){d=s("p"),h=t("Examples:"),c=m(),x(p.$$.fragment)},l(i){d=a(i,"P",{});var u=r(d);h=n(u,"Examples:"),u.forEach(o),c=g(i),k(p.$$.fragment,i)},m(i,u){L(i,d,u),e(d,h),L(i,c,u),v(p,i,u),f=!0},p:ue,i(i){f||(y(p.$$.fragment,i),f=!0)},o(i){j(p.$$.fragment,i),f=!1},d(i){i&&o(d),i&&o(c),M(p,i)}}}function Mm($){let d,h,c,p,f;return p=new _e({props:{code:`from transformers import (
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
[<span class="hljs-string">&#x27;Wie alt sind Sie?&#x27;</span>]`}}),{c(){d=s("p"),h=t("Examples:"),c=m(),x(p.$$.fragment)},l(i){d=a(i,"P",{});var u=r(d);h=n(u,"Examples:"),u.forEach(o),c=g(i),k(p.$$.fragment,i)},m(i,u){L(i,d,u),e(d,h),L(i,c,u),v(p,i,u),f=!0},p:ue,i(i){f||(y(p.$$.fragment,i),f=!0)},o(i){j(p.$$.fragment,i),f=!1},d(i){i&&o(d),i&&o(c),M(p,i)}}}function Lm($){let d,h,c,p,f;return p=new _e({props:{code:`tokenizer = AutoTokenizer.from_pretrained("distilgpt2")  # Initialize tokenizer
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
)  <span class="hljs-comment"># generate sequences without allowing bad_words to be generated</span>`}}),{c(){d=s("p"),h=t("Examples:"),c=m(),x(p.$$.fragment)},l(i){d=a(i,"P",{});var u=r(d);h=n(u,"Examples:"),u.forEach(o),c=g(i),k(p.$$.fragment,i)},m(i,u){L(i,d,u),e(d,h),L(i,c,u),v(p,i,u),f=!0},p:ue,i(i){f||(y(p.$$.fragment,i),f=!0)},o(i){j(p.$$.fragment,i),f=!1},d(i){i&&o(d),i&&o(c),M(p,i)}}}function $m($){let d,h,c,p,f,i,u,C,q,I,S;return{c(){d=s("p"),h=t("Apart from "),c=s("code"),p=t("inputs"),f=t(`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),i=s("code"),u=t("config.json"),C=t(`) which in turn defaults to the
`),q=s("a"),I=t("PretrainedConfig"),S=t(" of the model."),this.h()},l(z){d=a(z,"P",{});var T=r(d);h=n(T,"Apart from "),c=a(T,"CODE",{});var Le=r(c);p=n(Le,"inputs"),Le.forEach(o),f=n(T,`, all the arguments below will default to the value of the attribute of the same name as
defined in the model\u2019s config (`),i=a(T,"CODE",{});var $e=r(i);u=n($e,"config.json"),$e.forEach(o),C=n(T,`) which in turn defaults to the
`),q=a(T,"A",{href:!0});var he=r(q);I=n(he,"PretrainedConfig"),he.forEach(o),S=n(T," of the model."),T.forEach(o),this.h()},h(){_(q,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig")},m(z,T){L(z,d,T),e(d,h),e(d,c),e(c,p),e(d,f),e(d,i),e(i,u),e(d,C),e(d,q),e(q,I),e(d,S)},d(z){z&&o(d)}}}function wm($){let d,h,c,p,f;return p=new _e({props:{code:`from transformers import AutoTokenizer, FlaxAutoModelForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)`}}),{c(){d=s("p"),h=t("Examples:"),c=m(),x(p.$$.fragment)},l(i){d=a(i,"P",{});var u=r(d);h=n(u,"Examples:"),u.forEach(o),c=g(i),k(p.$$.fragment,i)},m(i,u){L(i,d,u),e(d,h),L(i,c,u),v(p,i,u),f=!0},p:ue,i(i){f||(y(p.$$.fragment,i),f=!0)},o(i){j(p.$$.fragment,i),f=!1},d(i){i&&o(d),i&&o(c),M(p,i)}}}function Tm($){let d,h,c,p,f,i,u,C,q,I,S,z,T,Le,$e,he,fe,we,Hs,tn,Rs,Us,nn,Vs,Ks,Zs,Te,Xs,on,Js,Qs,sn,Ys,ea,ta,Ee,na,an,oa,sa,rn,aa,ra,bs,Oe,nt,zn,xt,ia,Pn,la,xs,E,kt,da,vt,ca,ln,pa,ma,ga,yt,ua,dn,_a,ha,fa,P,B,Dn,ba,xa,cn,ka,va,Nn,ya,ja,Cn,Ma,La,$a,W,In,wa,Ta,pn,Ea,Oa,Bn,Ga,qa,Wn,Sa,Fa,Aa,H,Hn,za,Pa,mn,Da,Na,Rn,Ca,Ia,Un,Ba,Wa,Ha,R,Vn,Ra,Ua,gn,Va,Ka,Kn,Za,Xa,Zn,Ja,Qa,Ya,U,Xn,er,tr,un,nr,or,Jn,sr,ar,Qn,rr,ir,lr,V,Yn,dr,cr,_n,pr,mr,eo,gr,ur,to,_r,hr,fr,w,jt,br,no,xr,kr,D,K,oo,vr,yr,hn,jr,Mr,so,Lr,$r,ao,wr,Tr,Er,Z,ro,Or,Gr,fn,qr,Sr,io,Fr,Ar,lo,zr,Pr,Dr,X,co,Nr,Cr,bn,Ir,Br,po,Wr,Hr,mo,Rr,Ur,Vr,J,go,Kr,Zr,xn,Xr,Jr,uo,Qr,Yr,_o,ei,ti,ni,Q,ho,oi,si,kn,ai,ri,fo,ii,li,bo,di,ci,pi,Y,xo,mi,gi,vn,ui,_i,ko,hi,fi,vo,bi,xi,ki,ot,vi,Mt,yi,Lt,ji,Mi,Li,yo,$i,wi,jo,Ti,Ei,st,Oi,Mo,Gi,qi,at,Si,Lo,Fi,Ai,rt,zi,be,$t,Pi,wt,Di,$o,Ni,Ci,Ii,it,Bi,xe,Tt,Wi,Et,Hi,wo,Ri,Ui,Vi,lt,Ki,ke,Ot,Zi,Gt,Xi,To,Ji,Qi,Yi,dt,el,ve,qt,tl,St,nl,Eo,ol,sl,al,ct,rl,ye,Ft,il,At,ll,Oo,dl,cl,pl,pt,ml,je,zt,gl,Pt,ul,Go,_l,hl,fl,mt,ks,Ge,gt,qo,Dt,bl,So,xl,vs,pe,Nt,kl,Ct,vl,yn,yl,jl,Ml,F,It,Ll,Fo,$l,wl,Bt,Tl,Wt,El,Ol,Gl,me,ql,Ao,Sl,Fl,zo,Al,zl,jn,Pl,Dl,Nl,Ht,Cl,Rt,Il,Bl,Wl,ut,ys,qe,_t,Po,Ut,Hl,Do,Rl,js,N,Vt,Ul,Kt,Vl,Mn,Kl,Zl,Xl,Zt,Jl,Ln,Ql,Yl,ed,Se,ee,No,td,nd,Co,od,sd,Io,ad,rd,Bo,id,ld,dd,te,Wo,cd,pd,Ho,md,gd,Ro,ud,_d,Uo,hd,fd,bd,ne,Vo,xd,kd,Ko,vd,yd,Zo,jd,Md,Xo,Ld,$d,wd,A,Xt,Td,Jo,Ed,Od,Fe,oe,Qo,Gd,qd,Yo,Sd,Fd,es,Ad,zd,ts,Pd,Dd,Nd,se,ns,Cd,Id,os,Bd,Wd,ss,Hd,Rd,as,Ud,Vd,Kd,ae,rs,Zd,Xd,is,Jd,Qd,ls,Yd,ec,ds,tc,nc,oc,ht,sc,Jt,ac,Qt,rc,ic,lc,ft,Ms;return i=new Ws({}),xt=new Ws({}),kt=new ce({props:{name:"class transformers.generation_utils.GenerationMixin",anchor:"transformers.generation_utils.GenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/generation_utils.py#L378"}}),jt=new ce({props:{name:"generate",anchor:"transformers.generation_utils.GenerationMixin.generate",parameters:[{name:"inputs",val:": typing.Optional[torch.Tensor] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"typical_p",val:": typing.Optional[float] = None"},{name:"repetition_penalty",val:": typing.Optional[float] = None"},{name:"bad_words_ids",val:": typing.Optional[typing.Iterable[int]] = None"},{name:"force_words_ids",val:": typing.Union[typing.Iterable[int], typing.Iterable[typing.Iterable[int]], NoneType] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"encoder_no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"num_return_sequences",val:": typing.Optional[int] = None"},{name:"max_time",val:": typing.Optional[float] = None"},{name:"max_new_tokens",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"num_beam_groups",val:": typing.Optional[int] = None"},{name:"diversity_penalty",val:": typing.Optional[float] = None"},{name:"prefix_allowed_tokens_fn",val:": typing.Union[typing.Callable[[int, torch.Tensor], typing.List[int]], NoneType] = None"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = []"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = []"},{name:"constraints",val:": typing.Optional[typing.List[transformers.generation_beam_constraints.Constraint]] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"remove_invalid_values",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"exponential_decay_length_penalty",val:": typing.Union[typing.Tuple[typing.Union[int, float]], NoneType] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.generate.inputs",description:`<strong>inputs</strong> (<code>torch.Tensor</code> of varying shape depending on the modality, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.generate.forced_bos_token_id",description:`<strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful
for multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be
the target language token.`,name:"forced_bos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached.`,name:"forced_eos_token_id"},{anchor:"transformers.generation_utils.GenerationMixin.generate.remove_invalid_values",description:`<strong>remove_invalid_values</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to remove possible <em>nan</em> and <em>inf</em> outputs of the model to prevent the generation method to
crash. Note that using <code>remove_invalid_values</code> can slow down generation.`,name:"remove_invalid_values"},{anchor:"transformers.generation_utils.GenerationMixin.generate.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)`,name:"synced_gpus"},{anchor:"transformers.generation_utils.GenerationMixin.generate.exponential_decay_length_penalty",description:`<strong>exponential_decay_length_penalty</strong> (<code>tuple(int, float)</code>, <em>optional</em>) &#x2014;
This Tuple adds an exponentially increasing length penalty, after a certain amount of tokens have been
generated. The tuple shall consist of: <code>(start_index, decay_factor)</code> where <code>start_index</code> indicates
where penalty starts and <code>decay_factor</code> represents the factor of exponential decay</p>
<p>model<em>kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If the model
is an encoder-decoder model, encoder specific kwargs should not be prefixed and decoder specific kwargs
should be prefixed with *decoder</em>*.`,name:"exponential_decay_length_penalty"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/generation_utils.py#L831",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> (if
<code>return_dict_in_generate=True</code> or when <code>config.return_dict_in_generate=True</code>) or a <code>torch.FloatTensor</code>.</p>
<p>If the model is <em>not</em> an encoder-decoder model (<code>model.config.is_encoder_decoder=False</code>), the possible
<a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a></li>
</ul>
<p>If the model is an encoder-decoder model (<code>model.config.is_encoder_decoder=True</code>), the possible
<a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a></li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> or <code>torch.LongTensor</code></p>
`}}),ot=new dm({props:{warning:!0,$$slots:{default:[_m]},$$scope:{ctx:$}}}),st=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example",$$slots:{default:[hm]},$$scope:{ctx:$}}}),at=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example-2",$$slots:{default:[fm]},$$scope:{ctx:$}}}),rt=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.generate.example-3",$$slots:{default:[bm]},$$scope:{ctx:$}}}),$t=new ce({props:{name:"greedy_search",anchor:"transformers.generation_utils.GenerationMixin.greedy_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific keyword arguments will be forwarded to the <code>forward</code> function of the model.
If model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/generation_utils.py#L1488",returnDescription:`
<p><a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a>, <a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a>
or <code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.GreedySearchDecoderOnlyOutput"
>GreedySearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.GreedySearchEncoderDecoderOutput"
>GreedySearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),it=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.greedy_search.example",$$slots:{default:[xm]},$$scope:{ctx:$}}}),Tt=new ce({props:{name:"sample",anchor:"transformers.generation_utils.GenerationMixin.sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.sample.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.sample.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.sample.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.sample.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/generation_utils.py#L1720",returnDescription:`
<p><a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a>, <a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.SampleDecoderOnlyOutput"
>SampleDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.SampleEncoderDecoderOutput"
>SampleEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),lt=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.sample.example",$$slots:{default:[km]},$$scope:{ctx:$}}}),Ot=new ce({props:{name:"beam_search",anchor:"transformers.generation_utils.GenerationMixin.beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
An derived instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/generation_utils.py#L1976",returnDescription:`
<p><code>generation_utilsBeamSearchDecoderOnlyOutput</code>, <a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),dt=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.beam_search.example",$$slots:{default:[vm]},$$scope:{ctx:$}}}),qt=new ce({props:{name:"beam_sample",anchor:"transformers.generation_utils.GenerationMixin.beam_sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"logits_warper",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
A derived instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/generation_utils.py#L2288",returnDescription:`
<p><a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a>, <a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSampleDecoderOnlyOutput"
>BeamSampleDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSampleEncoderDecoderOutput"
>BeamSampleEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),ct=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.beam_sample.example",$$slots:{default:[ym]},$$scope:{ctx:$}}}),Ft=new ce({props:{name:"group_beam_search",anchor:"transformers.generation_utils.GenerationMixin.group_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
An derived instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)</p>
<p>model_kwargs &#x2014;
Additional model specific kwargs that will be forwarded to the <code>forward</code> function of the model. If
model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/generation_utils.py#L2610",returnDescription:`
<p><a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a>, <a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if
<code>model.config.is_encoder_decoder=False</code> and <code>return_dict_in_generate=True</code> or a
<a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if <code>model.config.is_encoder_decoder=True</code>.</p>
`}}),pt=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.group_beam_search.example",$$slots:{default:[jm]},$$scope:{ctx:$}}}),zt=new ce({props:{name:"constrained_beam_search",anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"constrained_beam_scorer",val:": ConstrainedBeamSearchScorer"},{name:"logits_processor",val:": typing.Optional[transformers.generation_logits_process.LogitsProcessorList] = None"},{name:"stopping_criteria",val:": typing.Optional[transformers.generation_stopping_criteria.StoppingCriteriaList] = None"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_scores",val:": typing.Optional[bool] = None"},{name:"return_dict_in_generate",val:": typing.Optional[bool] = None"},{name:"synced_gpus",val:": typing.Optional[bool] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.constrained_beam_scorer",description:`<strong>constrained_beam_scorer</strong> (<code>ConstrainedBeamSearchScorer</code>) &#x2014;
A derived instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation, while satisfying a list of positive constraints. For more information, the
documentation of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.ConstrainedBeamSearchScorer">ConstrainedBeamSearchScorer</a> should be read.`,name:"constrained_beam_scorer"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/generation_utils.py#L2975",returnDescription:`
<p><code>generation_utilsBeamSearchDecoderOnlyOutput</code>, <a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchDecoderOnlyOutput"
>BeamSearchDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/pr_highlight/en/internal/generation_utils#transformers.generation_utils.BeamSearchEncoderDecoderOutput"
>BeamSearchEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),mt=new ge({props:{anchor:"transformers.generation_utils.GenerationMixin.constrained_beam_search.example",$$slots:{default:[Mm]},$$scope:{ctx:$}}}),Dt=new Ws({}),Nt=new ce({props:{name:"class transformers.generation_tf_utils.TFGenerationMixin",anchor:"transformers.generation_tf_utils.TFGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/generation_tf_utils.py#L341"}}),It=new ce({props:{name:"generate",anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate",parameters:[{name:"input_ids",val:" = None"},{name:"max_length",val:" = None"},{name:"min_length",val:" = None"},{name:"do_sample",val:" = None"},{name:"early_stopping",val:" = None"},{name:"num_beams",val:" = None"},{name:"temperature",val:" = None"},{name:"top_k",val:" = None"},{name:"top_p",val:" = None"},{name:"repetition_penalty",val:" = None"},{name:"bad_words_ids",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"length_penalty",val:" = None"},{name:"no_repeat_ngram_size",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_scores",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict_in_generate",val:" = None"},{name:"forced_bos_token_id",val:" = None"},{name:"forced_eos_token_id",val:" = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.input_ids",description:"<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, `(batch_size, sequence_length, &#x2014;",name:"input_ids"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.feature_dim)`",description:`<strong>feature_dim)\`</strong> or <code>(batch_size, num_channels, height, width)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.forced_bos_token_id",description:`<strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful
for multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be
the target language token.`,name:"forced_bos_token_id"},{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached.
model_specific_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model.`,name:"forced_eos_token_id"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/generation_tf_utils.py#L361",returnDescription:`
<p>A <a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> (if
<code>return_dict_in_generate=True</code> or when <code>config.return_dict_in_generate=True</code>) or a <code>tf.Tensor</code>.</p>
<p>If the model is <em>not</em> an encoder-decoder model (<code>model.config.is_encoder_decoder=False</code>), the possible
<a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><code>TFGreedySearchDecoderOnlyOutput</code>,</li>
<li><code>TFSampleDecoderOnlyOutput</code>,</li>
<li><code>TFBeamSearchDecoderOnlyOutput</code>,</li>
<li><code>TFBeamSampleDecoderOnlyOutput</code></li>
</ul>
<p>If the model is an encoder-decoder model (<code>model.config.is_encoder_decoder=True</code>), the possible
<a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><code>TFGreedySearchEncoderDecoderOutput</code>,</li>
<li><code>TFSampleEncoderDecoderOutput</code>,</li>
<li><code>TFBeamSearchEncoderDecoderOutput</code>,</li>
<li><code>TFBeamSampleEncoderDecoderOutput</code></li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> or <code>tf.Tensor</code></p>
`}}),ut=new ge({props:{anchor:"transformers.generation_tf_utils.TFGenerationMixin.generate.example",$$slots:{default:[Lm]},$$scope:{ctx:$}}}),Ut=new Ws({}),Vt=new ce({props:{name:"class transformers.generation_flax_utils.FlaxGenerationMixin",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/generation_flax_utils.py#L118"}}),Xt=new ce({props:{name:"generate",anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate",parameters:[{name:"input_ids",val:": ndarray"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_token_id",val:": typing.Optional[int] = None"},{name:"bos_token_id",val:": typing.Optional[int] = None"},{name:"eos_token_id",val:": typing.Optional[int] = None"},{name:"decoder_start_token_id",val:": typing.Optional[int] = None"},{name:"do_sample",val:": typing.Optional[bool] = None"},{name:"prng_key",val:": typing.Optional[jax._src.numpy.lax_numpy.ndarray] = None"},{name:"top_k",val:": typing.Optional[int] = None"},{name:"top_p",val:": typing.Optional[float] = None"},{name:"temperature",val:": typing.Optional[float] = None"},{name:"num_beams",val:": typing.Optional[int] = None"},{name:"no_repeat_ngram_size",val:": typing.Optional[int] = None"},{name:"min_length",val:": typing.Optional[int] = None"},{name:"forced_bos_token_id",val:": typing.Optional[int] = None"},{name:"forced_eos_token_id",val:": typing.Optional[int] = None"},{name:"length_penalty",val:": typing.Optional[float] = None"},{name:"early_stopping",val:": typing.Optional[bool] = None"},{name:"trace",val:": bool = True"},{name:"params",val:": typing.Union[typing.Dict[str, jax._src.numpy.lax_numpy.ndarray], NoneType] = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
should be prefixed with *decoder</em>*. Also accepts <code>encoder_outputs</code> to skip encoder part.`,name:"params"}],source:"https://github.com/huggingface/transformers/blob/pr_highlight/src/transformers/generation_flax_utils.py#L162",returnDescription:`
<p><a
  href="/docs/transformers/pr_highlight/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a>.</p>
`}}),ht=new dm({props:{warning:!0,$$slots:{default:[$m]},$$scope:{ctx:$}}}),ft=new ge({props:{anchor:"transformers.generation_flax_utils.FlaxGenerationMixin.generate.example",$$slots:{default:[wm]},$$scope:{ctx:$}}}),{c(){d=s("meta"),h=m(),c=s("h1"),p=s("a"),f=s("span"),x(i.$$.fragment),u=m(),C=s("span"),q=t("Generation"),I=m(),S=s("p"),z=t("Each framework has a generate method for auto-regressive text generation implemented in their respective "),T=s("code"),Le=t("GenerationMixin"),$e=t(" class:"),he=m(),fe=s("ul"),we=s("li"),Hs=t("PyTorch "),tn=s("a"),Rs=t("generate()"),Us=t(" is implemented in "),nn=s("a"),Vs=t("GenerationMixin"),Ks=t("."),Zs=m(),Te=s("li"),Xs=t("TensorFlow "),on=s("a"),Js=t("generate()"),Qs=t(" is implemented in "),sn=s("a"),Ys=t("TFGenerationMixin"),ea=t("."),ta=m(),Ee=s("li"),na=t("Flax/JAX "),an=s("a"),oa=t("generate()"),sa=t(" is implemented in "),rn=s("a"),aa=t("FlaxGenerationMixin"),ra=t("."),bs=m(),Oe=s("h2"),nt=s("a"),zn=s("span"),x(xt.$$.fragment),ia=m(),Pn=s("span"),la=t("GenerationMixin"),xs=m(),E=s("div"),x(kt.$$.fragment),da=m(),vt=s("p"),ca=t("A class containing all functions for auto-regressive text generation, to be used as a mixin in "),ln=s("a"),pa=t("PreTrainedModel"),ma=t("."),ga=m(),yt=s("p"),ua=t("The class exposes "),dn=s("a"),_a=t("generate()"),ha=t(", which can be used for:"),fa=m(),P=s("ul"),B=s("li"),Dn=s("em"),ba=t("greedy decoding"),xa=t(" by calling "),cn=s("a"),ka=t("greedy_search()"),va=t(" if "),Nn=s("code"),ya=t("num_beams=1"),ja=t(` and
`),Cn=s("code"),Ma=t("do_sample=False"),La=t("."),$a=m(),W=s("li"),In=s("em"),wa=t("multinomial sampling"),Ta=t(" by calling "),pn=s("a"),Ea=t("sample()"),Oa=t(" if "),Bn=s("code"),Ga=t("num_beams=1"),qa=t(` and
`),Wn=s("code"),Sa=t("do_sample=True"),Fa=t("."),Aa=m(),H=s("li"),Hn=s("em"),za=t("beam-search decoding"),Pa=t(" by calling "),mn=s("a"),Da=t("beam_search()"),Na=t(" if "),Rn=s("code"),Ca=t("num_beams>1"),Ia=t(` and
`),Un=s("code"),Ba=t("do_sample=False"),Wa=t("."),Ha=m(),R=s("li"),Vn=s("em"),Ra=t("beam-search multinomial sampling"),Ua=t(" by calling "),gn=s("a"),Va=t("beam_sample()"),Ka=t(` if
`),Kn=s("code"),Za=t("num_beams>1"),Xa=t(" and "),Zn=s("code"),Ja=t("do_sample=True"),Qa=t("."),Ya=m(),U=s("li"),Xn=s("em"),er=t("diverse beam-search decoding"),tr=t(" by calling "),un=s("a"),nr=t("group_beam_search()"),or=t(`, if
`),Jn=s("code"),sr=t("num_beams>1"),ar=t(" and "),Qn=s("code"),rr=t("num_beam_groups>1"),ir=t("."),lr=m(),V=s("li"),Yn=s("em"),dr=t("constrained beam-search decoding"),cr=t(" by calling "),_n=s("a"),pr=t("constrained_beam_search()"),mr=t(`,
if `),eo=s("code"),gr=t("constraints!=None"),ur=t(" or "),to=s("code"),_r=t("force_words_ids!=None"),hr=t("."),fr=m(),w=s("div"),x(jt.$$.fragment),br=m(),no=s("p"),xr=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),kr=m(),D=s("ul"),K=s("li"),oo=s("em"),vr=t("greedy decoding"),yr=t(" by calling "),hn=s("a"),jr=t("greedy_search()"),Mr=t(" if "),so=s("code"),Lr=t("num_beams=1"),$r=t(` and
`),ao=s("code"),wr=t("do_sample=False"),Tr=t("."),Er=m(),Z=s("li"),ro=s("em"),Or=t("multinomial sampling"),Gr=t(" by calling "),fn=s("a"),qr=t("sample()"),Sr=t(" if "),io=s("code"),Fr=t("num_beams=1"),Ar=t(` and
`),lo=s("code"),zr=t("do_sample=True"),Pr=t("."),Dr=m(),X=s("li"),co=s("em"),Nr=t("beam-search decoding"),Cr=t(" by calling "),bn=s("a"),Ir=t("beam_search()"),Br=t(" if "),po=s("code"),Wr=t("num_beams>1"),Hr=t(` and
`),mo=s("code"),Rr=t("do_sample=False"),Ur=t("."),Vr=m(),J=s("li"),go=s("em"),Kr=t("beam-search multinomial sampling"),Zr=t(" by calling "),xn=s("a"),Xr=t("beam_sample()"),Jr=t(` if
`),uo=s("code"),Qr=t("num_beams>1"),Yr=t(" and "),_o=s("code"),ei=t("do_sample=True"),ti=t("."),ni=m(),Q=s("li"),ho=s("em"),oi=t("diverse beam-search decoding"),si=t(" by calling "),kn=s("a"),ai=t("group_beam_search()"),ri=t(`, if
`),fo=s("code"),ii=t("num_beams>1"),li=t(" and "),bo=s("code"),di=t("num_beam_groups>1"),ci=t("."),pi=m(),Y=s("li"),xo=s("em"),mi=t("constrained beam-search decoding"),gi=t(` by calling
`),vn=s("a"),ui=t("constrained_beam_search()"),_i=t(", if "),ko=s("code"),hi=t("constraints!=None"),fi=t(` or
`),vo=s("code"),bi=t("force_words_ids!=None"),xi=t("."),ki=m(),x(ot.$$.fragment),vi=m(),Mt=s("p"),yi=t("Most of these parameters are explained in more detail in "),Lt=s("a"),ji=t(`this blog
post`),Mi=t("."),Li=m(),yo=s("p"),$i=t("Examples:"),wi=m(),jo=s("p"),Ti=t("Greedy Decoding:"),Ei=m(),x(st.$$.fragment),Oi=m(),Mo=s("p"),Gi=t("Multinomial Sampling:"),qi=m(),x(at.$$.fragment),Si=m(),Lo=s("p"),Fi=t("Beam-search decoding:"),Ai=m(),x(rt.$$.fragment),zi=m(),be=s("div"),x($t.$$.fragment),Pi=m(),wt=s("p"),Di=t("Generates sequences of token ids for models with a language modeling head using "),$o=s("strong"),Ni=t("greedy decoding"),Ci=t(` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Ii=m(),x(it.$$.fragment),Bi=m(),xe=s("div"),x(Tt.$$.fragment),Wi=m(),Et=s("p"),Hi=t("Generates sequences of token ids for models with a language modeling head using "),wo=s("strong"),Ri=t("multinomial sampling"),Ui=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Vi=m(),x(lt.$$.fragment),Ki=m(),ke=s("div"),x(Ot.$$.fragment),Zi=m(),Gt=s("p"),Xi=t("Generates sequences of token ids for models with a language modeling head using "),To=s("strong"),Ji=t("beam search decoding"),Qi=t(` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Yi=m(),x(dt.$$.fragment),el=m(),ve=s("div"),x(qt.$$.fragment),tl=m(),St=s("p"),nl=t("Generates sequences of token ids for models with a language modeling head using "),Eo=s("strong"),ol=t(`beam search multinomial
sampling`),sl=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),al=m(),x(ct.$$.fragment),rl=m(),ye=s("div"),x(Ft.$$.fragment),il=m(),At=s("p"),ll=t("Generates sequences of token ids for models with a language modeling head using "),Oo=s("strong"),dl=t(`diverse beam search
decoding`),cl=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),pl=m(),x(pt.$$.fragment),ml=m(),je=s("div"),x(zt.$$.fragment),gl=m(),Pt=s("p"),ul=t("Generates sequences of token ids for models with a language modeling head using "),Go=s("strong"),_l=t(`constrained beam search
decoding`),hl=t(" and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),fl=m(),x(mt.$$.fragment),ks=m(),Ge=s("h2"),gt=s("a"),qo=s("span"),x(Dt.$$.fragment),bl=m(),So=s("span"),xl=t("TFGenerationMixin"),vs=m(),pe=s("div"),x(Nt.$$.fragment),kl=m(),Ct=s("p"),vl=t("A class containing all of the functions supporting generation, to be used as a mixin in "),yn=s("a"),yl=t("TFPreTrainedModel"),jl=t("."),Ml=m(),F=s("div"),x(It.$$.fragment),Ll=m(),Fo=s("p"),$l=t(`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),wl=m(),Bt=s("p"),Tl=t("Adapted in part from "),Wt=s("a"),El=t(`Facebook\u2019s XLM beam search
code`),Ol=t("."),Gl=m(),me=s("p"),ql=t("Apart from "),Ao=s("code"),Sl=t("input_ids"),Fl=t(" and "),zo=s("code"),Al=t("attention_mask"),zl=t(`, all the arguments below will default to the value of the attribute
of the same name inside the `),jn=s("a"),Pl=t("PretrainedConfig"),Dl=t(` of the model. The default values indicated are the default
values of those config.`),Nl=m(),Ht=s("p"),Cl=t("Most of these parameters are explained in more detail in "),Rt=s("a"),Il=t(`this blog
post`),Bl=t("."),Wl=m(),x(ut.$$.fragment),ys=m(),qe=s("h2"),_t=s("a"),Po=s("span"),x(Ut.$$.fragment),Hl=m(),Do=s("span"),Rl=t("FlaxGenerationMixin"),js=m(),N=s("div"),x(Vt.$$.fragment),Ul=m(),Kt=s("p"),Vl=t(`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),Mn=s("a"),Kl=t("FlaxPreTrainedModel"),Zl=t("."),Xl=m(),Zt=s("p"),Jl=t("The class exposes "),Ln=s("a"),Ql=t("generate()"),Yl=t(", which can be used for:"),ed=m(),Se=s("ul"),ee=s("li"),No=s("em"),td=t("greedy decoding"),nd=t(" by calling "),Co=s("code"),od=t("_greedy_search()"),sd=t(` if
`),Io=s("code"),ad=t("num_beams=1"),rd=t(" and "),Bo=s("code"),id=t("do_sample=False"),ld=t("."),dd=m(),te=s("li"),Wo=s("em"),cd=t("multinomial sampling"),pd=t(" by calling "),Ho=s("code"),md=t("_sample()"),gd=t(" if "),Ro=s("code"),ud=t("num_beams=1"),_d=t(`
and `),Uo=s("code"),hd=t("do_sample=True"),fd=t("."),bd=m(),ne=s("li"),Vo=s("em"),xd=t("beam-search decoding"),kd=t(" by calling "),Ko=s("code"),vd=t("_beam_search"),yd=t(" if "),Zo=s("code"),jd=t("num_beams>1"),Md=t(`
and `),Xo=s("code"),Ld=t("do_sample=False"),$d=t("."),wd=m(),A=s("div"),x(Xt.$$.fragment),Td=m(),Jo=s("p"),Ed=t(`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Od=m(),Fe=s("ul"),oe=s("li"),Qo=s("em"),Gd=t("greedy decoding"),qd=t(" by calling "),Yo=s("code"),Sd=t("_greedy_search()"),Fd=t(` if
`),es=s("code"),Ad=t("num_beams=1"),zd=t(" and "),ts=s("code"),Pd=t("do_sample=False"),Dd=t("."),Nd=m(),se=s("li"),ns=s("em"),Cd=t("multinomial sampling"),Id=t(" by calling "),os=s("code"),Bd=t("_sample()"),Wd=t(" if "),ss=s("code"),Hd=t("num_beams=1"),Rd=t(`
and `),as=s("code"),Ud=t("do_sample=True"),Vd=t("."),Kd=m(),ae=s("li"),rs=s("em"),Zd=t("beam-search decoding"),Xd=t(" by calling "),is=s("code"),Jd=t("_beam_search"),Qd=t(" if "),ls=s("code"),Yd=t("num_beams>1"),ec=t(`
and `),ds=s("code"),tc=t("do_sample=False"),nc=t("."),oc=m(),x(ht.$$.fragment),sc=m(),Jt=s("p"),ac=t("Most of these parameters are explained in more detail in "),Qt=s("a"),rc=t(`this blog
post`),ic=t("."),lc=m(),x(ft.$$.fragment),this.h()},l(l){const b=gm('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(o),h=g(l),c=a(l,"H1",{class:!0});var Yt=r(c);p=a(Yt,"A",{id:!0,class:!0,href:!0});var cs=r(p);f=a(cs,"SPAN",{});var ps=r(f);k(i.$$.fragment,ps),ps.forEach(o),cs.forEach(o),u=g(Yt),C=a(Yt,"SPAN",{});var ms=r(C);q=n(ms,"Generation"),ms.forEach(o),Yt.forEach(o),I=g(l),S=a(l,"P",{});var en=r(S);z=n(en,"Each framework has a generate method for auto-regressive text generation implemented in their respective "),T=a(en,"CODE",{});var gs=r(T);Le=n(gs,"GenerationMixin"),gs.forEach(o),$e=n(en," class:"),en.forEach(o),he=g(l),fe=a(l,"UL",{});var Ae=r(fe);we=a(Ae,"LI",{});var ze=r(we);Hs=n(ze,"PyTorch "),tn=a(ze,"A",{href:!0});var us=r(tn);Rs=n(us,"generate()"),us.forEach(o),Us=n(ze," is implemented in "),nn=a(ze,"A",{href:!0});var _s=r(nn);Vs=n(_s,"GenerationMixin"),_s.forEach(o),Ks=n(ze,"."),ze.forEach(o),Zs=g(Ae),Te=a(Ae,"LI",{});var Pe=r(Te);Xs=n(Pe,"TensorFlow "),on=a(Pe,"A",{href:!0});var hs=r(on);Js=n(hs,"generate()"),hs.forEach(o),Qs=n(Pe," is implemented in "),sn=a(Pe,"A",{href:!0});var fs=r(sn);Ys=n(fs,"TFGenerationMixin"),fs.forEach(o),ea=n(Pe,"."),Pe.forEach(o),ta=g(Ae),Ee=a(Ae,"LI",{});var $n=r(Ee);na=n($n,"Flax/JAX "),an=a($n,"A",{href:!0});var dc=r(an);oa=n(dc,"generate()"),dc.forEach(o),sa=n($n," is implemented in "),rn=a($n,"A",{href:!0});var cc=r(rn);aa=n(cc,"FlaxGenerationMixin"),cc.forEach(o),ra=n($n,"."),$n.forEach(o),Ae.forEach(o),bs=g(l),Oe=a(l,"H2",{class:!0});var Ls=r(Oe);nt=a(Ls,"A",{id:!0,class:!0,href:!0});var pc=r(nt);zn=a(pc,"SPAN",{});var mc=r(zn);k(xt.$$.fragment,mc),mc.forEach(o),pc.forEach(o),ia=g(Ls),Pn=a(Ls,"SPAN",{});var gc=r(Pn);la=n(gc,"GenerationMixin"),gc.forEach(o),Ls.forEach(o),xs=g(l),E=a(l,"DIV",{class:!0});var G=r(E);k(kt.$$.fragment,G),da=g(G),vt=a(G,"P",{});var $s=r(vt);ca=n($s,"A class containing all functions for auto-regressive text generation, to be used as a mixin in "),ln=a($s,"A",{href:!0});var uc=r(ln);pa=n(uc,"PreTrainedModel"),uc.forEach(o),ma=n($s,"."),$s.forEach(o),ga=g(G),yt=a(G,"P",{});var ws=r(yt);ua=n(ws,"The class exposes "),dn=a(ws,"A",{href:!0});var _c=r(dn);_a=n(_c,"generate()"),_c.forEach(o),ha=n(ws,", which can be used for:"),ws.forEach(o),fa=g(G),P=a(G,"UL",{});var re=r(P);B=a(re,"LI",{});var De=r(B);Dn=a(De,"EM",{});var hc=r(Dn);ba=n(hc,"greedy decoding"),hc.forEach(o),xa=n(De," by calling "),cn=a(De,"A",{href:!0});var fc=r(cn);ka=n(fc,"greedy_search()"),fc.forEach(o),va=n(De," if "),Nn=a(De,"CODE",{});var bc=r(Nn);ya=n(bc,"num_beams=1"),bc.forEach(o),ja=n(De,` and
`),Cn=a(De,"CODE",{});var xc=r(Cn);Ma=n(xc,"do_sample=False"),xc.forEach(o),La=n(De,"."),De.forEach(o),$a=g(re),W=a(re,"LI",{});var Ne=r(W);In=a(Ne,"EM",{});var kc=r(In);wa=n(kc,"multinomial sampling"),kc.forEach(o),Ta=n(Ne," by calling "),pn=a(Ne,"A",{href:!0});var vc=r(pn);Ea=n(vc,"sample()"),vc.forEach(o),Oa=n(Ne," if "),Bn=a(Ne,"CODE",{});var yc=r(Bn);Ga=n(yc,"num_beams=1"),yc.forEach(o),qa=n(Ne,` and
`),Wn=a(Ne,"CODE",{});var jc=r(Wn);Sa=n(jc,"do_sample=True"),jc.forEach(o),Fa=n(Ne,"."),Ne.forEach(o),Aa=g(re),H=a(re,"LI",{});var Ce=r(H);Hn=a(Ce,"EM",{});var Mc=r(Hn);za=n(Mc,"beam-search decoding"),Mc.forEach(o),Pa=n(Ce," by calling "),mn=a(Ce,"A",{href:!0});var Lc=r(mn);Da=n(Lc,"beam_search()"),Lc.forEach(o),Na=n(Ce," if "),Rn=a(Ce,"CODE",{});var $c=r(Rn);Ca=n($c,"num_beams>1"),$c.forEach(o),Ia=n(Ce,` and
`),Un=a(Ce,"CODE",{});var wc=r(Un);Ba=n(wc,"do_sample=False"),wc.forEach(o),Wa=n(Ce,"."),Ce.forEach(o),Ha=g(re),R=a(re,"LI",{});var Ie=r(R);Vn=a(Ie,"EM",{});var Tc=r(Vn);Ra=n(Tc,"beam-search multinomial sampling"),Tc.forEach(o),Ua=n(Ie," by calling "),gn=a(Ie,"A",{href:!0});var Ec=r(gn);Va=n(Ec,"beam_sample()"),Ec.forEach(o),Ka=n(Ie,` if
`),Kn=a(Ie,"CODE",{});var Oc=r(Kn);Za=n(Oc,"num_beams>1"),Oc.forEach(o),Xa=n(Ie," and "),Zn=a(Ie,"CODE",{});var Gc=r(Zn);Ja=n(Gc,"do_sample=True"),Gc.forEach(o),Qa=n(Ie,"."),Ie.forEach(o),Ya=g(re),U=a(re,"LI",{});var Be=r(U);Xn=a(Be,"EM",{});var qc=r(Xn);er=n(qc,"diverse beam-search decoding"),qc.forEach(o),tr=n(Be," by calling "),un=a(Be,"A",{href:!0});var Sc=r(un);nr=n(Sc,"group_beam_search()"),Sc.forEach(o),or=n(Be,`, if
`),Jn=a(Be,"CODE",{});var Fc=r(Jn);sr=n(Fc,"num_beams>1"),Fc.forEach(o),ar=n(Be," and "),Qn=a(Be,"CODE",{});var Ac=r(Qn);rr=n(Ac,"num_beam_groups>1"),Ac.forEach(o),ir=n(Be,"."),Be.forEach(o),lr=g(re),V=a(re,"LI",{});var We=r(V);Yn=a(We,"EM",{});var zc=r(Yn);dr=n(zc,"constrained beam-search decoding"),zc.forEach(o),cr=n(We," by calling "),_n=a(We,"A",{href:!0});var Pc=r(_n);pr=n(Pc,"constrained_beam_search()"),Pc.forEach(o),mr=n(We,`,
if `),eo=a(We,"CODE",{});var Dc=r(eo);gr=n(Dc,"constraints!=None"),Dc.forEach(o),ur=n(We," or "),to=a(We,"CODE",{});var Nc=r(to);_r=n(Nc,"force_words_ids!=None"),Nc.forEach(o),hr=n(We,"."),We.forEach(o),re.forEach(o),fr=g(G),w=a(G,"DIV",{class:!0});var O=r(w);k(jt.$$.fragment,O),br=g(O),no=a(O,"P",{});var Cc=r(no);xr=n(Cc,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Cc.forEach(o),kr=g(O),D=a(O,"UL",{});var ie=r(D);K=a(ie,"LI",{});var He=r(K);oo=a(He,"EM",{});var Ic=r(oo);vr=n(Ic,"greedy decoding"),Ic.forEach(o),yr=n(He," by calling "),hn=a(He,"A",{href:!0});var Bc=r(hn);jr=n(Bc,"greedy_search()"),Bc.forEach(o),Mr=n(He," if "),so=a(He,"CODE",{});var Wc=r(so);Lr=n(Wc,"num_beams=1"),Wc.forEach(o),$r=n(He,` and
`),ao=a(He,"CODE",{});var Hc=r(ao);wr=n(Hc,"do_sample=False"),Hc.forEach(o),Tr=n(He,"."),He.forEach(o),Er=g(ie),Z=a(ie,"LI",{});var Re=r(Z);ro=a(Re,"EM",{});var Rc=r(ro);Or=n(Rc,"multinomial sampling"),Rc.forEach(o),Gr=n(Re," by calling "),fn=a(Re,"A",{href:!0});var Uc=r(fn);qr=n(Uc,"sample()"),Uc.forEach(o),Sr=n(Re," if "),io=a(Re,"CODE",{});var Vc=r(io);Fr=n(Vc,"num_beams=1"),Vc.forEach(o),Ar=n(Re,` and
`),lo=a(Re,"CODE",{});var Kc=r(lo);zr=n(Kc,"do_sample=True"),Kc.forEach(o),Pr=n(Re,"."),Re.forEach(o),Dr=g(ie),X=a(ie,"LI",{});var Ue=r(X);co=a(Ue,"EM",{});var Zc=r(co);Nr=n(Zc,"beam-search decoding"),Zc.forEach(o),Cr=n(Ue," by calling "),bn=a(Ue,"A",{href:!0});var Xc=r(bn);Ir=n(Xc,"beam_search()"),Xc.forEach(o),Br=n(Ue," if "),po=a(Ue,"CODE",{});var Jc=r(po);Wr=n(Jc,"num_beams>1"),Jc.forEach(o),Hr=n(Ue,` and
`),mo=a(Ue,"CODE",{});var Qc=r(mo);Rr=n(Qc,"do_sample=False"),Qc.forEach(o),Ur=n(Ue,"."),Ue.forEach(o),Vr=g(ie),J=a(ie,"LI",{});var Ve=r(J);go=a(Ve,"EM",{});var Yc=r(go);Kr=n(Yc,"beam-search multinomial sampling"),Yc.forEach(o),Zr=n(Ve," by calling "),xn=a(Ve,"A",{href:!0});var ep=r(xn);Xr=n(ep,"beam_sample()"),ep.forEach(o),Jr=n(Ve,` if
`),uo=a(Ve,"CODE",{});var tp=r(uo);Qr=n(tp,"num_beams>1"),tp.forEach(o),Yr=n(Ve," and "),_o=a(Ve,"CODE",{});var np=r(_o);ei=n(np,"do_sample=True"),np.forEach(o),ti=n(Ve,"."),Ve.forEach(o),ni=g(ie),Q=a(ie,"LI",{});var Ke=r(Q);ho=a(Ke,"EM",{});var op=r(ho);oi=n(op,"diverse beam-search decoding"),op.forEach(o),si=n(Ke," by calling "),kn=a(Ke,"A",{href:!0});var sp=r(kn);ai=n(sp,"group_beam_search()"),sp.forEach(o),ri=n(Ke,`, if
`),fo=a(Ke,"CODE",{});var ap=r(fo);ii=n(ap,"num_beams>1"),ap.forEach(o),li=n(Ke," and "),bo=a(Ke,"CODE",{});var rp=r(bo);di=n(rp,"num_beam_groups>1"),rp.forEach(o),ci=n(Ke,"."),Ke.forEach(o),pi=g(ie),Y=a(ie,"LI",{});var Ze=r(Y);xo=a(Ze,"EM",{});var ip=r(xo);mi=n(ip,"constrained beam-search decoding"),ip.forEach(o),gi=n(Ze,` by calling
`),vn=a(Ze,"A",{href:!0});var lp=r(vn);ui=n(lp,"constrained_beam_search()"),lp.forEach(o),_i=n(Ze,", if "),ko=a(Ze,"CODE",{});var dp=r(ko);hi=n(dp,"constraints!=None"),dp.forEach(o),fi=n(Ze,` or
`),vo=a(Ze,"CODE",{});var cp=r(vo);bi=n(cp,"force_words_ids!=None"),cp.forEach(o),xi=n(Ze,"."),Ze.forEach(o),ie.forEach(o),ki=g(O),k(ot.$$.fragment,O),vi=g(O),Mt=a(O,"P",{});var Ts=r(Mt);yi=n(Ts,"Most of these parameters are explained in more detail in "),Lt=a(Ts,"A",{href:!0,rel:!0});var pp=r(Lt);ji=n(pp,`this blog
post`),pp.forEach(o),Mi=n(Ts,"."),Ts.forEach(o),Li=g(O),yo=a(O,"P",{});var mp=r(yo);$i=n(mp,"Examples:"),mp.forEach(o),wi=g(O),jo=a(O,"P",{});var gp=r(jo);Ti=n(gp,"Greedy Decoding:"),gp.forEach(o),Ei=g(O),k(st.$$.fragment,O),Oi=g(O),Mo=a(O,"P",{});var up=r(Mo);Gi=n(up,"Multinomial Sampling:"),up.forEach(o),qi=g(O),k(at.$$.fragment,O),Si=g(O),Lo=a(O,"P",{});var _p=r(Lo);Fi=n(_p,"Beam-search decoding:"),_p.forEach(o),Ai=g(O),k(rt.$$.fragment,O),O.forEach(o),zi=g(G),be=a(G,"DIV",{class:!0});var wn=r(be);k($t.$$.fragment,wn),Pi=g(wn),wt=a(wn,"P",{});var Es=r(wt);Di=n(Es,"Generates sequences of token ids for models with a language modeling head using "),$o=a(Es,"STRONG",{});var hp=r($o);Ni=n(hp,"greedy decoding"),hp.forEach(o),Ci=n(Es,` and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Es.forEach(o),Ii=g(wn),k(it.$$.fragment,wn),wn.forEach(o),Bi=g(G),xe=a(G,"DIV",{class:!0});var Tn=r(xe);k(Tt.$$.fragment,Tn),Wi=g(Tn),Et=a(Tn,"P",{});var Os=r(Et);Hi=n(Os,"Generates sequences of token ids for models with a language modeling head using "),wo=a(Os,"STRONG",{});var fp=r(wo);Ri=n(fp,"multinomial sampling"),fp.forEach(o),Ui=n(Os,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Os.forEach(o),Vi=g(Tn),k(lt.$$.fragment,Tn),Tn.forEach(o),Ki=g(G),ke=a(G,"DIV",{class:!0});var En=r(ke);k(Ot.$$.fragment,En),Zi=g(En),Gt=a(En,"P",{});var Gs=r(Gt);Xi=n(Gs,"Generates sequences of token ids for models with a language modeling head using "),To=a(Gs,"STRONG",{});var bp=r(To);Ji=n(bp,"beam search decoding"),bp.forEach(o),Qi=n(Gs,` and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`),Gs.forEach(o),Yi=g(En),k(dt.$$.fragment,En),En.forEach(o),el=g(G),ve=a(G,"DIV",{class:!0});var On=r(ve);k(qt.$$.fragment,On),tl=g(On),St=a(On,"P",{});var qs=r(St);nl=n(qs,"Generates sequences of token ids for models with a language modeling head using "),Eo=a(qs,"STRONG",{});var xp=r(Eo);ol=n(xp,`beam search multinomial
sampling`),xp.forEach(o),sl=n(qs," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),qs.forEach(o),al=g(On),k(ct.$$.fragment,On),On.forEach(o),rl=g(G),ye=a(G,"DIV",{class:!0});var Gn=r(ye);k(Ft.$$.fragment,Gn),il=g(Gn),At=a(Gn,"P",{});var Ss=r(At);ll=n(Ss,"Generates sequences of token ids for models with a language modeling head using "),Oo=a(Ss,"STRONG",{});var kp=r(Oo);dl=n(kp,`diverse beam search
decoding`),kp.forEach(o),cl=n(Ss," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Ss.forEach(o),pl=g(Gn),k(pt.$$.fragment,Gn),Gn.forEach(o),ml=g(G),je=a(G,"DIV",{class:!0});var qn=r(je);k(zt.$$.fragment,qn),gl=g(qn),Pt=a(qn,"P",{});var Fs=r(Pt);ul=n(Fs,"Generates sequences of token ids for models with a language modeling head using "),Go=a(Fs,"STRONG",{});var vp=r(Go);_l=n(vp,`constrained beam search
decoding`),vp.forEach(o),hl=n(Fs," and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models."),Fs.forEach(o),fl=g(qn),k(mt.$$.fragment,qn),qn.forEach(o),G.forEach(o),ks=g(l),Ge=a(l,"H2",{class:!0});var As=r(Ge);gt=a(As,"A",{id:!0,class:!0,href:!0});var yp=r(gt);qo=a(yp,"SPAN",{});var jp=r(qo);k(Dt.$$.fragment,jp),jp.forEach(o),yp.forEach(o),bl=g(As),So=a(As,"SPAN",{});var Mp=r(So);xl=n(Mp,"TFGenerationMixin"),Mp.forEach(o),As.forEach(o),vs=g(l),pe=a(l,"DIV",{class:!0});var Sn=r(pe);k(Nt.$$.fragment,Sn),kl=g(Sn),Ct=a(Sn,"P",{});var zs=r(Ct);vl=n(zs,"A class containing all of the functions supporting generation, to be used as a mixin in "),yn=a(zs,"A",{href:!0});var Lp=r(yn);yl=n(Lp,"TFPreTrainedModel"),Lp.forEach(o),jl=n(zs,"."),zs.forEach(o),Ml=g(Sn),F=a(Sn,"DIV",{class:!0});var le=r(F);k(It.$$.fragment,le),Ll=g(le),Fo=a(le,"P",{});var $p=r(Fo);$l=n($p,`Generates sequences for models with a language modeling head. The method currently supports greedy decoding,
beam-search decoding, sampling with temperature, sampling with top-k or nucleus sampling.`),$p.forEach(o),wl=g(le),Bt=a(le,"P",{});var Ps=r(Bt);Tl=n(Ps,"Adapted in part from "),Wt=a(Ps,"A",{href:!0,rel:!0});var wp=r(Wt);El=n(wp,`Facebook\u2019s XLM beam search
code`),wp.forEach(o),Ol=n(Ps,"."),Ps.forEach(o),Gl=g(le),me=a(le,"P",{});var bt=r(me);ql=n(bt,"Apart from "),Ao=a(bt,"CODE",{});var Tp=r(Ao);Sl=n(Tp,"input_ids"),Tp.forEach(o),Fl=n(bt," and "),zo=a(bt,"CODE",{});var Ep=r(zo);Al=n(Ep,"attention_mask"),Ep.forEach(o),zl=n(bt,`, all the arguments below will default to the value of the attribute
of the same name inside the `),jn=a(bt,"A",{href:!0});var Op=r(jn);Pl=n(Op,"PretrainedConfig"),Op.forEach(o),Dl=n(bt,` of the model. The default values indicated are the default
values of those config.`),bt.forEach(o),Nl=g(le),Ht=a(le,"P",{});var Ds=r(Ht);Cl=n(Ds,"Most of these parameters are explained in more detail in "),Rt=a(Ds,"A",{href:!0,rel:!0});var Gp=r(Rt);Il=n(Gp,`this blog
post`),Gp.forEach(o),Bl=n(Ds,"."),Ds.forEach(o),Wl=g(le),k(ut.$$.fragment,le),le.forEach(o),Sn.forEach(o),ys=g(l),qe=a(l,"H2",{class:!0});var Ns=r(qe);_t=a(Ns,"A",{id:!0,class:!0,href:!0});var qp=r(_t);Po=a(qp,"SPAN",{});var Sp=r(Po);k(Ut.$$.fragment,Sp),Sp.forEach(o),qp.forEach(o),Hl=g(Ns),Do=a(Ns,"SPAN",{});var Fp=r(Do);Rl=n(Fp,"FlaxGenerationMixin"),Fp.forEach(o),Ns.forEach(o),js=g(l),N=a(l,"DIV",{class:!0});var Me=r(N);k(Vt.$$.fragment,Me),Ul=g(Me),Kt=a(Me,"P",{});var Cs=r(Kt);Vl=n(Cs,`A class containing all functions for auto-regressive text generation, to be used as a mixin in
`),Mn=a(Cs,"A",{href:!0});var Ap=r(Mn);Kl=n(Ap,"FlaxPreTrainedModel"),Ap.forEach(o),Zl=n(Cs,"."),Cs.forEach(o),Xl=g(Me),Zt=a(Me,"P",{});var Is=r(Zt);Jl=n(Is,"The class exposes "),Ln=a(Is,"A",{href:!0});var zp=r(Ln);Ql=n(zp,"generate()"),zp.forEach(o),Yl=n(Is,", which can be used for:"),Is.forEach(o),ed=g(Me),Se=a(Me,"UL",{});var Fn=r(Se);ee=a(Fn,"LI",{});var Xe=r(ee);No=a(Xe,"EM",{});var Pp=r(No);td=n(Pp,"greedy decoding"),Pp.forEach(o),nd=n(Xe," by calling "),Co=a(Xe,"CODE",{});var Dp=r(Co);od=n(Dp,"_greedy_search()"),Dp.forEach(o),sd=n(Xe,` if
`),Io=a(Xe,"CODE",{});var Np=r(Io);ad=n(Np,"num_beams=1"),Np.forEach(o),rd=n(Xe," and "),Bo=a(Xe,"CODE",{});var Cp=r(Bo);id=n(Cp,"do_sample=False"),Cp.forEach(o),ld=n(Xe,"."),Xe.forEach(o),dd=g(Fn),te=a(Fn,"LI",{});var Je=r(te);Wo=a(Je,"EM",{});var Ip=r(Wo);cd=n(Ip,"multinomial sampling"),Ip.forEach(o),pd=n(Je," by calling "),Ho=a(Je,"CODE",{});var Bp=r(Ho);md=n(Bp,"_sample()"),Bp.forEach(o),gd=n(Je," if "),Ro=a(Je,"CODE",{});var Wp=r(Ro);ud=n(Wp,"num_beams=1"),Wp.forEach(o),_d=n(Je,`
and `),Uo=a(Je,"CODE",{});var Hp=r(Uo);hd=n(Hp,"do_sample=True"),Hp.forEach(o),fd=n(Je,"."),Je.forEach(o),bd=g(Fn),ne=a(Fn,"LI",{});var Qe=r(ne);Vo=a(Qe,"EM",{});var Rp=r(Vo);xd=n(Rp,"beam-search decoding"),Rp.forEach(o),kd=n(Qe," by calling "),Ko=a(Qe,"CODE",{});var Up=r(Ko);vd=n(Up,"_beam_search"),Up.forEach(o),yd=n(Qe," if "),Zo=a(Qe,"CODE",{});var Vp=r(Zo);jd=n(Vp,"num_beams>1"),Vp.forEach(o),Md=n(Qe,`
and `),Xo=a(Qe,"CODE",{});var Kp=r(Xo);Ld=n(Kp,"do_sample=False"),Kp.forEach(o),$d=n(Qe,"."),Qe.forEach(o),Fn.forEach(o),wd=g(Me),A=a(Me,"DIV",{class:!0});var de=r(A);k(Xt.$$.fragment,de),Td=g(de),Jo=a(de,"P",{});var Zp=r(Jo);Ed=n(Zp,`Generates sequences of token ids for models with a language modeling head. The method supports the following
generation methods for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`),Zp.forEach(o),Od=g(de),Fe=a(de,"UL",{});var An=r(Fe);oe=a(An,"LI",{});var Ye=r(oe);Qo=a(Ye,"EM",{});var Xp=r(Qo);Gd=n(Xp,"greedy decoding"),Xp.forEach(o),qd=n(Ye," by calling "),Yo=a(Ye,"CODE",{});var Jp=r(Yo);Sd=n(Jp,"_greedy_search()"),Jp.forEach(o),Fd=n(Ye,` if
`),es=a(Ye,"CODE",{});var Qp=r(es);Ad=n(Qp,"num_beams=1"),Qp.forEach(o),zd=n(Ye," and "),ts=a(Ye,"CODE",{});var Yp=r(ts);Pd=n(Yp,"do_sample=False"),Yp.forEach(o),Dd=n(Ye,"."),Ye.forEach(o),Nd=g(An),se=a(An,"LI",{});var et=r(se);ns=a(et,"EM",{});var em=r(ns);Cd=n(em,"multinomial sampling"),em.forEach(o),Id=n(et," by calling "),os=a(et,"CODE",{});var tm=r(os);Bd=n(tm,"_sample()"),tm.forEach(o),Wd=n(et," if "),ss=a(et,"CODE",{});var nm=r(ss);Hd=n(nm,"num_beams=1"),nm.forEach(o),Rd=n(et,`
and `),as=a(et,"CODE",{});var om=r(as);Ud=n(om,"do_sample=True"),om.forEach(o),Vd=n(et,"."),et.forEach(o),Kd=g(An),ae=a(An,"LI",{});var tt=r(ae);rs=a(tt,"EM",{});var sm=r(rs);Zd=n(sm,"beam-search decoding"),sm.forEach(o),Xd=n(tt," by calling "),is=a(tt,"CODE",{});var am=r(is);Jd=n(am,"_beam_search"),am.forEach(o),Qd=n(tt," if "),ls=a(tt,"CODE",{});var rm=r(ls);Yd=n(rm,"num_beams>1"),rm.forEach(o),ec=n(tt,`
and `),ds=a(tt,"CODE",{});var im=r(ds);tc=n(im,"do_sample=False"),im.forEach(o),nc=n(tt,"."),tt.forEach(o),An.forEach(o),oc=g(de),k(ht.$$.fragment,de),sc=g(de),Jt=a(de,"P",{});var Bs=r(Jt);ac=n(Bs,"Most of these parameters are explained in more detail in "),Qt=a(Bs,"A",{href:!0,rel:!0});var lm=r(Qt);rc=n(lm,`this blog
post`),lm.forEach(o),ic=n(Bs,"."),Bs.forEach(o),lc=g(de),k(ft.$$.fragment,de),de.forEach(o),Me.forEach(o),this.h()},h(){_(d,"name","hf:doc:metadata"),_(d,"content",JSON.stringify(Em)),_(p,"id","generation"),_(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(p,"href","#generation"),_(c,"class","relative group"),_(tn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),_(nn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin"),_(on,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin.generate"),_(sn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_tf_utils.TFGenerationMixin"),_(an,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),_(rn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin"),_(nt,"id","transformers.generation_utils.GenerationMixin"),_(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(nt,"href","#transformers.generation_utils.GenerationMixin"),_(Oe,"class","relative group"),_(ln,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.PreTrainedModel"),_(dn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),_(cn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),_(pn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),_(mn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),_(gn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),_(un,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),_(_n,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.constrained_beam_search"),_(hn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.greedy_search"),_(fn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.sample"),_(bn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_search"),_(xn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.beam_sample"),_(kn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.group_beam_search"),_(vn,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.constrained_beam_search"),_(Lt,"href","https://huggingface.co/blog/how-to-generate"),_(Lt,"rel","nofollow"),_(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(gt,"id","transformers.generation_tf_utils.TFGenerationMixin"),_(gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(gt,"href","#transformers.generation_tf_utils.TFGenerationMixin"),_(Ge,"class","relative group"),_(yn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.TFPreTrainedModel"),_(Wt,"href","https://github.com/facebookresearch/XLM/blob/9e6f6814d17be4fe5b15f2e6c43eb2b2d76daeb4/src/model/transformer.py#L529"),_(Wt,"rel","nofollow"),_(jn,"href","/docs/transformers/pr_highlight/en/main_classes/configuration#transformers.PretrainedConfig"),_(Rt,"href","https://huggingface.co/blog/how-to-generate"),_(Rt,"rel","nofollow"),_(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_t,"id","transformers.generation_flax_utils.FlaxGenerationMixin"),_(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(_t,"href","#transformers.generation_flax_utils.FlaxGenerationMixin"),_(qe,"class","relative group"),_(Mn,"href","/docs/transformers/pr_highlight/en/main_classes/model#transformers.FlaxPreTrainedModel"),_(Ln,"href","/docs/transformers/pr_highlight/en/main_classes/text_generation#transformers.generation_flax_utils.FlaxGenerationMixin.generate"),_(Qt,"href","https://huggingface.co/blog/how-to-generate"),_(Qt,"rel","nofollow"),_(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(l,b){e(document.head,d),L(l,h,b),L(l,c,b),e(c,p),e(p,f),v(i,f,null),e(c,u),e(c,C),e(C,q),L(l,I,b),L(l,S,b),e(S,z),e(S,T),e(T,Le),e(S,$e),L(l,he,b),L(l,fe,b),e(fe,we),e(we,Hs),e(we,tn),e(tn,Rs),e(we,Us),e(we,nn),e(nn,Vs),e(we,Ks),e(fe,Zs),e(fe,Te),e(Te,Xs),e(Te,on),e(on,Js),e(Te,Qs),e(Te,sn),e(sn,Ys),e(Te,ea),e(fe,ta),e(fe,Ee),e(Ee,na),e(Ee,an),e(an,oa),e(Ee,sa),e(Ee,rn),e(rn,aa),e(Ee,ra),L(l,bs,b),L(l,Oe,b),e(Oe,nt),e(nt,zn),v(xt,zn,null),e(Oe,ia),e(Oe,Pn),e(Pn,la),L(l,xs,b),L(l,E,b),v(kt,E,null),e(E,da),e(E,vt),e(vt,ca),e(vt,ln),e(ln,pa),e(vt,ma),e(E,ga),e(E,yt),e(yt,ua),e(yt,dn),e(dn,_a),e(yt,ha),e(E,fa),e(E,P),e(P,B),e(B,Dn),e(Dn,ba),e(B,xa),e(B,cn),e(cn,ka),e(B,va),e(B,Nn),e(Nn,ya),e(B,ja),e(B,Cn),e(Cn,Ma),e(B,La),e(P,$a),e(P,W),e(W,In),e(In,wa),e(W,Ta),e(W,pn),e(pn,Ea),e(W,Oa),e(W,Bn),e(Bn,Ga),e(W,qa),e(W,Wn),e(Wn,Sa),e(W,Fa),e(P,Aa),e(P,H),e(H,Hn),e(Hn,za),e(H,Pa),e(H,mn),e(mn,Da),e(H,Na),e(H,Rn),e(Rn,Ca),e(H,Ia),e(H,Un),e(Un,Ba),e(H,Wa),e(P,Ha),e(P,R),e(R,Vn),e(Vn,Ra),e(R,Ua),e(R,gn),e(gn,Va),e(R,Ka),e(R,Kn),e(Kn,Za),e(R,Xa),e(R,Zn),e(Zn,Ja),e(R,Qa),e(P,Ya),e(P,U),e(U,Xn),e(Xn,er),e(U,tr),e(U,un),e(un,nr),e(U,or),e(U,Jn),e(Jn,sr),e(U,ar),e(U,Qn),e(Qn,rr),e(U,ir),e(P,lr),e(P,V),e(V,Yn),e(Yn,dr),e(V,cr),e(V,_n),e(_n,pr),e(V,mr),e(V,eo),e(eo,gr),e(V,ur),e(V,to),e(to,_r),e(V,hr),e(E,fr),e(E,w),v(jt,w,null),e(w,br),e(w,no),e(no,xr),e(w,kr),e(w,D),e(D,K),e(K,oo),e(oo,vr),e(K,yr),e(K,hn),e(hn,jr),e(K,Mr),e(K,so),e(so,Lr),e(K,$r),e(K,ao),e(ao,wr),e(K,Tr),e(D,Er),e(D,Z),e(Z,ro),e(ro,Or),e(Z,Gr),e(Z,fn),e(fn,qr),e(Z,Sr),e(Z,io),e(io,Fr),e(Z,Ar),e(Z,lo),e(lo,zr),e(Z,Pr),e(D,Dr),e(D,X),e(X,co),e(co,Nr),e(X,Cr),e(X,bn),e(bn,Ir),e(X,Br),e(X,po),e(po,Wr),e(X,Hr),e(X,mo),e(mo,Rr),e(X,Ur),e(D,Vr),e(D,J),e(J,go),e(go,Kr),e(J,Zr),e(J,xn),e(xn,Xr),e(J,Jr),e(J,uo),e(uo,Qr),e(J,Yr),e(J,_o),e(_o,ei),e(J,ti),e(D,ni),e(D,Q),e(Q,ho),e(ho,oi),e(Q,si),e(Q,kn),e(kn,ai),e(Q,ri),e(Q,fo),e(fo,ii),e(Q,li),e(Q,bo),e(bo,di),e(Q,ci),e(D,pi),e(D,Y),e(Y,xo),e(xo,mi),e(Y,gi),e(Y,vn),e(vn,ui),e(Y,_i),e(Y,ko),e(ko,hi),e(Y,fi),e(Y,vo),e(vo,bi),e(Y,xi),e(w,ki),v(ot,w,null),e(w,vi),e(w,Mt),e(Mt,yi),e(Mt,Lt),e(Lt,ji),e(Mt,Mi),e(w,Li),e(w,yo),e(yo,$i),e(w,wi),e(w,jo),e(jo,Ti),e(w,Ei),v(st,w,null),e(w,Oi),e(w,Mo),e(Mo,Gi),e(w,qi),v(at,w,null),e(w,Si),e(w,Lo),e(Lo,Fi),e(w,Ai),v(rt,w,null),e(E,zi),e(E,be),v($t,be,null),e(be,Pi),e(be,wt),e(wt,Di),e(wt,$o),e($o,Ni),e(wt,Ci),e(be,Ii),v(it,be,null),e(E,Bi),e(E,xe),v(Tt,xe,null),e(xe,Wi),e(xe,Et),e(Et,Hi),e(Et,wo),e(wo,Ri),e(Et,Ui),e(xe,Vi),v(lt,xe,null),e(E,Ki),e(E,ke),v(Ot,ke,null),e(ke,Zi),e(ke,Gt),e(Gt,Xi),e(Gt,To),e(To,Ji),e(Gt,Qi),e(ke,Yi),v(dt,ke,null),e(E,el),e(E,ve),v(qt,ve,null),e(ve,tl),e(ve,St),e(St,nl),e(St,Eo),e(Eo,ol),e(St,sl),e(ve,al),v(ct,ve,null),e(E,rl),e(E,ye),v(Ft,ye,null),e(ye,il),e(ye,At),e(At,ll),e(At,Oo),e(Oo,dl),e(At,cl),e(ye,pl),v(pt,ye,null),e(E,ml),e(E,je),v(zt,je,null),e(je,gl),e(je,Pt),e(Pt,ul),e(Pt,Go),e(Go,_l),e(Pt,hl),e(je,fl),v(mt,je,null),L(l,ks,b),L(l,Ge,b),e(Ge,gt),e(gt,qo),v(Dt,qo,null),e(Ge,bl),e(Ge,So),e(So,xl),L(l,vs,b),L(l,pe,b),v(Nt,pe,null),e(pe,kl),e(pe,Ct),e(Ct,vl),e(Ct,yn),e(yn,yl),e(Ct,jl),e(pe,Ml),e(pe,F),v(It,F,null),e(F,Ll),e(F,Fo),e(Fo,$l),e(F,wl),e(F,Bt),e(Bt,Tl),e(Bt,Wt),e(Wt,El),e(Bt,Ol),e(F,Gl),e(F,me),e(me,ql),e(me,Ao),e(Ao,Sl),e(me,Fl),e(me,zo),e(zo,Al),e(me,zl),e(me,jn),e(jn,Pl),e(me,Dl),e(F,Nl),e(F,Ht),e(Ht,Cl),e(Ht,Rt),e(Rt,Il),e(Ht,Bl),e(F,Wl),v(ut,F,null),L(l,ys,b),L(l,qe,b),e(qe,_t),e(_t,Po),v(Ut,Po,null),e(qe,Hl),e(qe,Do),e(Do,Rl),L(l,js,b),L(l,N,b),v(Vt,N,null),e(N,Ul),e(N,Kt),e(Kt,Vl),e(Kt,Mn),e(Mn,Kl),e(Kt,Zl),e(N,Xl),e(N,Zt),e(Zt,Jl),e(Zt,Ln),e(Ln,Ql),e(Zt,Yl),e(N,ed),e(N,Se),e(Se,ee),e(ee,No),e(No,td),e(ee,nd),e(ee,Co),e(Co,od),e(ee,sd),e(ee,Io),e(Io,ad),e(ee,rd),e(ee,Bo),e(Bo,id),e(ee,ld),e(Se,dd),e(Se,te),e(te,Wo),e(Wo,cd),e(te,pd),e(te,Ho),e(Ho,md),e(te,gd),e(te,Ro),e(Ro,ud),e(te,_d),e(te,Uo),e(Uo,hd),e(te,fd),e(Se,bd),e(Se,ne),e(ne,Vo),e(Vo,xd),e(ne,kd),e(ne,Ko),e(Ko,vd),e(ne,yd),e(ne,Zo),e(Zo,jd),e(ne,Md),e(ne,Xo),e(Xo,Ld),e(ne,$d),e(N,wd),e(N,A),v(Xt,A,null),e(A,Td),e(A,Jo),e(Jo,Ed),e(A,Od),e(A,Fe),e(Fe,oe),e(oe,Qo),e(Qo,Gd),e(oe,qd),e(oe,Yo),e(Yo,Sd),e(oe,Fd),e(oe,es),e(es,Ad),e(oe,zd),e(oe,ts),e(ts,Pd),e(oe,Dd),e(Fe,Nd),e(Fe,se),e(se,ns),e(ns,Cd),e(se,Id),e(se,os),e(os,Bd),e(se,Wd),e(se,ss),e(ss,Hd),e(se,Rd),e(se,as),e(as,Ud),e(se,Vd),e(Fe,Kd),e(Fe,ae),e(ae,rs),e(rs,Zd),e(ae,Xd),e(ae,is),e(is,Jd),e(ae,Qd),e(ae,ls),e(ls,Yd),e(ae,ec),e(ae,ds),e(ds,tc),e(ae,nc),e(A,oc),v(ht,A,null),e(A,sc),e(A,Jt),e(Jt,ac),e(Jt,Qt),e(Qt,rc),e(Jt,ic),e(A,lc),v(ft,A,null),Ms=!0},p(l,[b]){const Yt={};b&2&&(Yt.$$scope={dirty:b,ctx:l}),ot.$set(Yt);const cs={};b&2&&(cs.$$scope={dirty:b,ctx:l}),st.$set(cs);const ps={};b&2&&(ps.$$scope={dirty:b,ctx:l}),at.$set(ps);const ms={};b&2&&(ms.$$scope={dirty:b,ctx:l}),rt.$set(ms);const en={};b&2&&(en.$$scope={dirty:b,ctx:l}),it.$set(en);const gs={};b&2&&(gs.$$scope={dirty:b,ctx:l}),lt.$set(gs);const Ae={};b&2&&(Ae.$$scope={dirty:b,ctx:l}),dt.$set(Ae);const ze={};b&2&&(ze.$$scope={dirty:b,ctx:l}),ct.$set(ze);const us={};b&2&&(us.$$scope={dirty:b,ctx:l}),pt.$set(us);const _s={};b&2&&(_s.$$scope={dirty:b,ctx:l}),mt.$set(_s);const Pe={};b&2&&(Pe.$$scope={dirty:b,ctx:l}),ut.$set(Pe);const hs={};b&2&&(hs.$$scope={dirty:b,ctx:l}),ht.$set(hs);const fs={};b&2&&(fs.$$scope={dirty:b,ctx:l}),ft.$set(fs)},i(l){Ms||(y(i.$$.fragment,l),y(xt.$$.fragment,l),y(kt.$$.fragment,l),y(jt.$$.fragment,l),y(ot.$$.fragment,l),y(st.$$.fragment,l),y(at.$$.fragment,l),y(rt.$$.fragment,l),y($t.$$.fragment,l),y(it.$$.fragment,l),y(Tt.$$.fragment,l),y(lt.$$.fragment,l),y(Ot.$$.fragment,l),y(dt.$$.fragment,l),y(qt.$$.fragment,l),y(ct.$$.fragment,l),y(Ft.$$.fragment,l),y(pt.$$.fragment,l),y(zt.$$.fragment,l),y(mt.$$.fragment,l),y(Dt.$$.fragment,l),y(Nt.$$.fragment,l),y(It.$$.fragment,l),y(ut.$$.fragment,l),y(Ut.$$.fragment,l),y(Vt.$$.fragment,l),y(Xt.$$.fragment,l),y(ht.$$.fragment,l),y(ft.$$.fragment,l),Ms=!0)},o(l){j(i.$$.fragment,l),j(xt.$$.fragment,l),j(kt.$$.fragment,l),j(jt.$$.fragment,l),j(ot.$$.fragment,l),j(st.$$.fragment,l),j(at.$$.fragment,l),j(rt.$$.fragment,l),j($t.$$.fragment,l),j(it.$$.fragment,l),j(Tt.$$.fragment,l),j(lt.$$.fragment,l),j(Ot.$$.fragment,l),j(dt.$$.fragment,l),j(qt.$$.fragment,l),j(ct.$$.fragment,l),j(Ft.$$.fragment,l),j(pt.$$.fragment,l),j(zt.$$.fragment,l),j(mt.$$.fragment,l),j(Dt.$$.fragment,l),j(Nt.$$.fragment,l),j(It.$$.fragment,l),j(ut.$$.fragment,l),j(Ut.$$.fragment,l),j(Vt.$$.fragment,l),j(Xt.$$.fragment,l),j(ht.$$.fragment,l),j(ft.$$.fragment,l),Ms=!1},d(l){o(d),l&&o(h),l&&o(c),M(i),l&&o(I),l&&o(S),l&&o(he),l&&o(fe),l&&o(bs),l&&o(Oe),M(xt),l&&o(xs),l&&o(E),M(kt),M(jt),M(ot),M(st),M(at),M(rt),M($t),M(it),M(Tt),M(lt),M(Ot),M(dt),M(qt),M(ct),M(Ft),M(pt),M(zt),M(mt),l&&o(ks),l&&o(Ge),M(Dt),l&&o(vs),l&&o(pe),M(Nt),M(It),M(ut),l&&o(ys),l&&o(qe),M(Ut),l&&o(js),l&&o(N),M(Vt),M(Xt),M(ht),M(ft)}}}const Em={local:"generation",sections:[{local:"transformers.generation_utils.GenerationMixin",title:"GenerationMixin"},{local:"transformers.generation_tf_utils.TFGenerationMixin",title:"TFGenerationMixin"},{local:"transformers.generation_flax_utils.FlaxGenerationMixin",title:"FlaxGenerationMixin"}],title:"Generation"};function Om($){return um(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pm extends cm{constructor(d){super();pm(this,d,Om,Tm,mm,{})}}export{Pm as default,Em as metadata};
