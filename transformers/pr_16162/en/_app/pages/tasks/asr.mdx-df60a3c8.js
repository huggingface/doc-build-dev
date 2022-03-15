import{S as _n,i as gn,s as jn,e as o,k as c,w as j,t as e,M as $n,c as r,d as t,m as h,a as i,x as $,h as n,b as u,F as a,g as p,y as v,q as b,o as w,B as y}from"../../chunks/vendor-4833417e.js";import{T as Ee}from"../../chunks/Tip-fffd6df1.js";import{Y as vn}from"../../chunks/Youtube-27813aed.js";import{I as tt}from"../../chunks/IconCopyLink-4b81c553.js";import{C as P}from"../../chunks/CodeBlock-6a3d1b46.js";import"../../chunks/CopyButton-dacfbfaf.js";function bn(N){let f,x,d,_,E;return{c(){f=o("p"),x=e("See the automatic speech recognition "),d=o("a"),_=e("task page"),E=e(" for more information about its associated models, datasets, and metrics."),this.h()},l(m){f=r(m,"P",{});var k=i(f);x=n(k,"See the automatic speech recognition "),d=r(k,"A",{href:!0,rel:!0});var T=i(d);_=n(T,"task page"),T.forEach(t),E=n(k," for more information about its associated models, datasets, and metrics."),k.forEach(t),this.h()},h(){u(d,"href","https://huggingface.co/tasks/automatic-speech-recognition"),u(d,"rel","nofollow")},m(m,k){p(m,f,k),a(f,x),a(f,d),a(d,_),a(f,E)},d(m){m&&t(f)}}}function wn(N){let f,x,d,_,E,m,k,T;return{c(){f=o("p"),x=e("If you aren\u2019t familiar with fine-tuning a model with the "),d=o("a"),_=e("Trainer"),E=e(", take a look at the basic tutorial "),m=o("a"),k=e("here"),T=e("!"),this.h()},l(q){f=r(q,"P",{});var g=i(f);x=n(g,"If you aren\u2019t familiar with fine-tuning a model with the "),d=r(g,"A",{href:!0});var C=i(d);_=n(C,"Trainer"),C.forEach(t),E=n(g,", take a look at the basic tutorial "),m=r(g,"A",{href:!0});var I=i(m);k=n(I,"here"),I.forEach(t),T=n(g,"!"),g.forEach(t),this.h()},h(){u(d,"href","/docs/transformers/pr_16162/en/main_classes/trainer#transformers.Trainer"),u(m,"href","training#finetune-with-trainer")},m(q,g){p(q,f,g),a(f,x),a(f,d),a(d,_),a(f,E),a(f,m),a(m,k),a(f,T)},d(q){q&&t(f)}}}function yn(N){let f,x,d,_,E,m,k,T;return{c(){f=o("p"),x=e("For a more in-depth example of how to fine-tune a model for automatic speech recognition, take a look at this blog "),d=o("a"),_=e("post"),E=e(" for English ASR and this "),m=o("a"),k=e("post"),T=e(" for multilingual ASR."),this.h()},l(q){f=r(q,"P",{});var g=i(f);x=n(g,"For a more in-depth example of how to fine-tune a model for automatic speech recognition, take a look at this blog "),d=r(g,"A",{href:!0,rel:!0});var C=i(d);_=n(C,"post"),C.forEach(t),E=n(g," for English ASR and this "),m=r(g,"A",{href:!0,rel:!0});var I=i(m);k=n(I,"post"),I.forEach(t),T=n(g," for multilingual ASR."),g.forEach(t),this.h()},h(){u(d,"href","https://huggingface.co/blog/fine-tune-wav2vec2-english"),u(d,"rel","nofollow"),u(m,"href","https://huggingface.co/blog/fine-tune-xlsr-wav2vec2"),u(m,"rel","nofollow")},m(q,g){p(q,f,g),a(f,x),a(f,d),a(d,_),a(f,E),a(f,m),a(m,k),a(f,T)},d(q){q&&t(f)}}}function xn(N){let f,x,d,_,E,m,k,T,q,g,C,I,ys,et,ua,S,nt,ss,lt,ot,as,rt,it,da,H,ma,U,B,Ns,ts,pt,Us,ct,_a,xs,ht,ga,es,ja,ks,ft,$a,ns,va,A,ut,Vs,dt,mt,Ys,_t,gt,Hs,jt,$t,Bs,vt,bt,ba,ls,wa,Es,wt,ya,os,xa,L,yt,Js,xt,kt,Gs,Et,Tt,ka,V,J,Ks,rs,qt,Qs,At,Ea,Ts,Ct,Ta,is,qa,qs,Dt,Aa,M,ps,Pt,Xs,It,St,Lt,cs,Mt,Zs,Wt,Ot,Ft,sa,zt,Ca,hs,Da,W,Rt,fs,aa,Nt,Ut,ta,Vt,Yt,Pa,us,Ia,D,Ht,As,Bt,Jt,ea,Gt,Kt,na,Qt,Xt,Sa,O,Zt,la,se,ae,oa,te,ee,La,ds,Ma,G,ne,ra,le,oe,Wa,ms,Oa,Y,K,ia,_s,re,pa,ie,Fa,F,pe,Cs,ce,he,ca,fe,ue,za,gs,Ra,Q,Na,Ds,de,Ua,z,js,me,Ps,_e,ge,je,$s,$e,Is,ve,be,we,vs,ye,Ss,xe,ke,Va,bs,Ya,X,Ha;return m=new tt({}),C=new vn({props:{id:"TksaY_FDgnk"}}),H=new Ee({props:{$$slots:{default:[bn]},$$scope:{ctx:N}}}),ts=new tt({}),es=new P({props:{code:`from datasets import load_dataset

timit = load_dataset("timit_asr")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>timit = load_dataset(<span class="hljs-string">&quot;timit_asr&quot;</span>)`}}),ns=new P({props:{code:"timit",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>timit
DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;file&#x27;</span>, <span class="hljs-string">&#x27;audio&#x27;</span>, <span class="hljs-string">&#x27;text&#x27;</span>, <span class="hljs-string">&#x27;phonetic_detail&#x27;</span>, <span class="hljs-string">&#x27;word_detail&#x27;</span>, <span class="hljs-string">&#x27;dialect_region&#x27;</span>, <span class="hljs-string">&#x27;sentence_type&#x27;</span>, <span class="hljs-string">&#x27;speaker_id&#x27;</span>, <span class="hljs-string">&#x27;id&#x27;</span>],
        num_rows: <span class="hljs-number">4620</span>
    })
    test: Dataset({
        features: [<span class="hljs-string">&#x27;file&#x27;</span>, <span class="hljs-string">&#x27;audio&#x27;</span>, <span class="hljs-string">&#x27;text&#x27;</span>, <span class="hljs-string">&#x27;phonetic_detail&#x27;</span>, <span class="hljs-string">&#x27;word_detail&#x27;</span>, <span class="hljs-string">&#x27;dialect_region&#x27;</span>, <span class="hljs-string">&#x27;sentence_type&#x27;</span>, <span class="hljs-string">&#x27;speaker_id&#x27;</span>, <span class="hljs-string">&#x27;id&#x27;</span>],
        num_rows: <span class="hljs-number">1680</span>
    })
})`}}),ls=new P({props:{code:`timit = timit.remove_columns(
    ["phonetic_detail", "word_detail", "dialect_region", "id", "sentence_type", "speaker_id"]
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>timit = timit.remove_columns(
<span class="hljs-meta">... </span>    [<span class="hljs-string">&quot;phonetic_detail&quot;</span>, <span class="hljs-string">&quot;word_detail&quot;</span>, <span class="hljs-string">&quot;dialect_region&quot;</span>, <span class="hljs-string">&quot;id&quot;</span>, <span class="hljs-string">&quot;sentence_type&quot;</span>, <span class="hljs-string">&quot;speaker_id&quot;</span>]
<span class="hljs-meta">... </span>)`}}),os=new P({props:{code:'timit["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>timit[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;array&#x27;</span>: array([-<span class="hljs-number">2.1362305e-04</span>,  <span class="hljs-number">6.1035156e-05</span>,  <span class="hljs-number">3.0517578e-05</span>, ...,
         -<span class="hljs-number">3.0517578e-05</span>, -<span class="hljs-number">9.1552734e-05</span>, -<span class="hljs-number">6.1035156e-05</span>], dtype=float32),
  <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/404950a46da14eac65eb4e2a8317b1372fb3971d980d91d5d5b221275b1fd7e0/data/TRAIN/DR4/MMDM0/SI681.WAV&#x27;</span>,
  <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">16000</span>},
 <span class="hljs-string">&#x27;file&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/404950a46da14eac65eb4e2a8317b1372fb3971d980d91d5d5b221275b1fd7e0/data/TRAIN/DR4/MMDM0/SI681.WAV&#x27;</span>,
 <span class="hljs-string">&#x27;text&#x27;</span>: <span class="hljs-string">&#x27;Would such an act of refusal be useful?&#x27;</span>}`}}),rs=new tt({}),is=new P({props:{code:`from transformers import AutoProcessor

processor = AutoProcessor.from_pretrained("facebook/wav2vec2-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>)`}}),hs=new P({props:{code:`def prepare_dataset(batch):
    audio = batch["audio"]

    batch["input_values"] = processor(audio["array"], sampling_rate=audio["sampling_rate"]).input_values[0]
    batch["input_length"] = len(batch["input_values"])

    with processor.as_target_processor():
        batch["labels"] = processor(batch["text"]).input_ids
    return batch`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">prepare_dataset</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    audio = batch[<span class="hljs-string">&quot;audio&quot;</span>]

<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;input_values&quot;</span>] = processor(audio[<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=audio[<span class="hljs-string">&quot;sampling_rate&quot;</span>]).input_values[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;input_length&quot;</span>] = <span class="hljs-built_in">len</span>(batch[<span class="hljs-string">&quot;input_values&quot;</span>])

<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>        batch[<span class="hljs-string">&quot;labels&quot;</span>] = processor(batch[<span class="hljs-string">&quot;text&quot;</span>]).input_ids
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch`}}),us=new P({props:{code:'timit = timit.map(prepare_dataset, remove_columns=timit.column_names["train"], num_proc=4)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>timit = timit.<span class="hljs-built_in">map</span>(prepare_dataset, remove_columns=timit.column_names[<span class="hljs-string">&quot;train&quot;</span>], num_proc=<span class="hljs-number">4</span>)'}}),ds=new P({props:{code:`import torch

from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Union


@dataclass
class DataCollatorCTCWithPadding:

    processor: AutoProcessor
    padding: Union[bool, str] = True

    def __call__(self, features: List[Dict[str, Union[List[int], torch.Tensor]]]) -> Dict[str, torch.Tensor]:
        # split inputs and labels since they have to be of different lengths and need
        # different padding methods
        input_features = [{"input_values": feature["input_values"]} for feature in features]
        label_features = [{"input_ids": feature["labels"]} for feature in features]

        batch = self.processor.pad(
            input_features,
            padding=self.padding,
            return_tensors="pt",
        )
        with self.processor.as_target_processor():
            labels_batch = self.processor.pad(
                label_features,
                padding=self.padding,
                return_tensors="pt",
            )

        # replace padding with -100 to ignore loss correctly
        labels = labels_batch["input_ids"].masked_fill(labels_batch.attention_mask.ne(1), -100)

        batch["labels"] = labels

        return batch`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> dataclasses <span class="hljs-keyword">import</span> dataclass, field
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">Any</span>, <span class="hljs-type">Dict</span>, <span class="hljs-type">List</span>, <span class="hljs-type">Optional</span>, <span class="hljs-type">Union</span>


<span class="hljs-meta">&gt;&gt;&gt; </span>@dataclass
<span class="hljs-meta">... </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">DataCollatorCTCWithPadding</span>:

<span class="hljs-meta">... </span>    processor: AutoProcessor
<span class="hljs-meta">... </span>    padding: <span class="hljs-type">Union</span>[<span class="hljs-built_in">bool</span>, <span class="hljs-built_in">str</span>] = <span class="hljs-literal">True</span>

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__call__</span>(<span class="hljs-params">self, features: <span class="hljs-type">List</span>[<span class="hljs-type">Dict</span>[<span class="hljs-built_in">str</span>, <span class="hljs-type">Union</span>[<span class="hljs-type">List</span>[<span class="hljs-built_in">int</span>], torch.Tensor]]]</span>) -&gt; <span class="hljs-type">Dict</span>[<span class="hljs-built_in">str</span>, torch.Tensor]:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># split inputs and labels since they have to be of different lengths and need</span>
<span class="hljs-meta">... </span>        <span class="hljs-comment"># different padding methods</span>
<span class="hljs-meta">... </span>        input_features = [{<span class="hljs-string">&quot;input_values&quot;</span>: feature[<span class="hljs-string">&quot;input_values&quot;</span>]} <span class="hljs-keyword">for</span> feature <span class="hljs-keyword">in</span> features]
<span class="hljs-meta">... </span>        label_features = [{<span class="hljs-string">&quot;input_ids&quot;</span>: feature[<span class="hljs-string">&quot;labels&quot;</span>]} <span class="hljs-keyword">for</span> feature <span class="hljs-keyword">in</span> features]

<span class="hljs-meta">... </span>        batch = self.processor.pad(
<span class="hljs-meta">... </span>            input_features,
<span class="hljs-meta">... </span>            padding=self.padding,
<span class="hljs-meta">... </span>            return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        <span class="hljs-keyword">with</span> self.processor.as_target_processor():
<span class="hljs-meta">... </span>            labels_batch = self.processor.pad(
<span class="hljs-meta">... </span>                label_features,
<span class="hljs-meta">... </span>                padding=self.padding,
<span class="hljs-meta">... </span>                return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>            )

<span class="hljs-meta">... </span>        <span class="hljs-comment"># replace padding with -100 to ignore loss correctly</span>
<span class="hljs-meta">... </span>        labels = labels_batch[<span class="hljs-string">&quot;input_ids&quot;</span>].masked_fill(labels_batch.attention_mask.ne(<span class="hljs-number">1</span>), -<span class="hljs-number">100</span>)

<span class="hljs-meta">... </span>        batch[<span class="hljs-string">&quot;labels&quot;</span>] = labels

<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),ms=new P({props:{code:"data_collator = DataCollatorCTCWithPadding(processor=processor, padding=True)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorCTCWithPadding(processor=processor, padding=<span class="hljs-literal">True</span>)'}}),_s=new tt({}),gs=new P({props:{code:`from transformers import AutoModelForCTC, TrainingArguments, Trainer

model = AutoModelForCTC.from_pretrained(
    "facebook/wav2vec-base",
    ctc_loss_reduction="mean",
    pad_token_id=processor.tokenizer.pad_token_id,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCTC, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCTC.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec-base&quot;</span>,
<span class="hljs-meta">... </span>    ctc_loss_reduction=<span class="hljs-string">&quot;mean&quot;</span>,
<span class="hljs-meta">... </span>    pad_token_id=processor.tokenizer.pad_token_id,
<span class="hljs-meta">... </span>)`}}),Q=new Ee({props:{$$slots:{default:[wn]},$$scope:{ctx:N}}}),bs=new P({props:{code:`training_args = TrainingArguments(
    output_dir="./results",
    group_by_length=True,
    per_device_train_batch_size=16,
    evaluation_strategy="steps",
    num_train_epochs=3,
    fp16=True,
    gradient_checkpointing=True,
    learning_rate=1e-4,
    weight_decay=0.005,
    save_total_limit=2,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=timit["train"],
    eval_dataset=timit["test"],
    tokenizer=processor.feature_extractor,
    data_collator=data_collator,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    group_by_length=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;steps&quot;</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">3</span>,
<span class="hljs-meta">... </span>    fp16=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    gradient_checkpointing=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">1e-4</span>,
<span class="hljs-meta">... </span>    weight_decay=<span class="hljs-number">0.005</span>,
<span class="hljs-meta">... </span>    save_total_limit=<span class="hljs-number">2</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=timit[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=timit[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=processor.feature_extractor,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),X=new Ee({props:{$$slots:{default:[yn]},$$scope:{ctx:N}}}),{c(){f=o("meta"),x=c(),d=o("h1"),_=o("a"),E=o("span"),j(m.$$.fragment),k=c(),T=o("span"),q=e("Automatic speech recognition"),g=c(),j(C.$$.fragment),I=c(),ys=o("p"),et=e("Automatic speech recognition (ASR) converts a speech signal to text. It is an example of a sequence-to-sequence task, going from a sequence of audio inputs to textual outputs. Voice assistants like Siri and Alexa utilize ASR models to assist users."),ua=c(),S=o("p"),nt=e("This guide will show you how to fine-tune "),ss=o("a"),lt=e("Wav2Vec2"),ot=e(" on the "),as=o("a"),rt=e("TIMIT"),it=e(" dataset to transcribe audio to text."),da=c(),j(H.$$.fragment),ma=c(),U=o("h2"),B=o("a"),Ns=o("span"),j(ts.$$.fragment),pt=c(),Us=o("span"),ct=e("Load TIMIT dataset"),_a=c(),xs=o("p"),ht=e("Load the TIMIT dataset from the \u{1F917} Datasets library:"),ga=c(),j(es.$$.fragment),ja=c(),ks=o("p"),ft=e("Then take a look at an example:"),$a=c(),j(ns.$$.fragment),va=c(),A=o("p"),ut=e("While the dataset contains a lot of helpful information, like "),Vs=o("code"),dt=e("dialect_region"),mt=e(" and "),Ys=o("code"),_t=e("sentence_type"),gt=e(", you will focus on the "),Hs=o("code"),jt=e("audio"),$t=e(" and "),Bs=o("code"),vt=e("text"),bt=e(" fields in this guide. Remove the other columns:"),ba=c(),j(ls.$$.fragment),wa=c(),Es=o("p"),wt=e("Take a look at the example again:"),ya=c(),j(os.$$.fragment),xa=c(),L=o("p"),yt=e("The "),Js=o("code"),xt=e("audio"),kt=e(" column contains a 1-dimensional "),Gs=o("code"),Et=e("array"),Tt=e(" of the speech signal that must be called to load and resample the audio file."),ka=c(),V=o("h2"),J=o("a"),Ks=o("span"),j(rs.$$.fragment),qt=c(),Qs=o("span"),At=e("Preprocess"),Ea=c(),Ts=o("p"),Ct=e("Load the Wav2Vec2 processor to process the audio signal and transcribed text:"),Ta=c(),j(is.$$.fragment),qa=c(),qs=o("p"),Dt=e("The preprocessing function needs to:"),Aa=c(),M=o("ol"),ps=o("li"),Pt=e("Call the "),Xs=o("code"),It=e("audio"),St=e(" column to load and resample the audio file."),Lt=c(),cs=o("li"),Mt=e("Extract the "),Zs=o("code"),Wt=e("input_values"),Ot=e(" from the audio file."),Ft=c(),sa=o("li"),zt=e("Typically, when you call the processor, you call the feature extractor. Since you also want to tokenize text, instruct the processor to call the tokenizer instead with a context manager."),Ca=c(),j(hs.$$.fragment),Da=c(),W=o("p"),Rt=e("Use \u{1F917} Datasets "),fs=o("a"),aa=o("code"),Nt=e("map"),Ut=e(" function to apply the preprocessing function over the entire dataset. You can speed up the map function by increasing the number of processes with "),ta=o("code"),Vt=e("num_proc"),Yt=e(". Remove the columns you don\u2019t need:"),Pa=c(),j(us.$$.fragment),Ia=c(),D=o("p"),Ht=e("\u{1F917} Transformers doesn\u2019t have a data collator for automatic speech recognition, so you will need to create one. You can adapt the "),As=o("a"),Bt=e("DataCollatorWithPadding"),Jt=e(" to create a batch of examples for automatic speech recognition. It will also dynamically pad your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ea=o("code"),Gt=e("tokenizer"),Kt=e(" function by setting "),na=o("code"),Qt=e("padding=True"),Xt=e(", dynamic padding is more efficient."),Sa=c(),O=o("p"),Zt=e("Unlike other data collators, this specific data collator needs to apply a different padding method to "),la=o("code"),se=e("input_values"),ae=e(" and "),oa=o("code"),te=e("labels"),ee=e(". You can apply a different padding method with a context manager:"),La=c(),j(ds.$$.fragment),Ma=c(),G=o("p"),ne=e("Create a batch of examples and dynamically pad them with "),ra=o("code"),le=e("DataCollatorForCTCWithPadding"),oe=e(":"),Wa=c(),j(ms.$$.fragment),Oa=c(),Y=o("h2"),K=o("a"),ia=o("span"),j(_s.$$.fragment),re=c(),pa=o("span"),ie=e("Fine-tune with Trainer"),Fa=c(),F=o("p"),pe=e("Load Wav2Vec2 with "),Cs=o("a"),ce=e("AutoModelForCTC"),he=e(". For "),ca=o("code"),fe=e("ctc_loss_reduction"),ue=e(", it is often better to use the average instead of the default summation:"),za=c(),j(gs.$$.fragment),Ra=c(),j(Q.$$.fragment),Na=c(),Ds=o("p"),de=e("At this point, only three steps remain:"),Ua=c(),z=o("ol"),js=o("li"),me=e("Define your training hyperparameters in "),Ps=o("a"),_e=e("TrainingArguments"),ge=e("."),je=c(),$s=o("li"),$e=e("Pass the training arguments to "),Is=o("a"),ve=e("Trainer"),be=e(" along with the model, datasets, tokenizer, and data collator."),we=c(),vs=o("li"),ye=e("Call "),Ss=o("a"),xe=e("train()"),ke=e(" to fine-tune your model."),Va=c(),j(bs.$$.fragment),Ya=c(),j(X.$$.fragment),this.h()},l(s){const l=$n('[data-svelte="svelte-1phssyn"]',document.head);f=r(l,"META",{name:!0,content:!0}),l.forEach(t),x=h(s),d=r(s,"H1",{class:!0});var ws=i(d);_=r(ws,"A",{id:!0,class:!0,href:!0});var ha=i(_);E=r(ha,"SPAN",{});var fa=i(E);$(m.$$.fragment,fa),fa.forEach(t),ha.forEach(t),k=h(ws),T=r(ws,"SPAN",{});var Te=i(T);q=n(Te,"Automatic speech recognition"),Te.forEach(t),ws.forEach(t),g=h(s),$(C.$$.fragment,s),I=h(s),ys=r(s,"P",{});var qe=i(ys);et=n(qe,"Automatic speech recognition (ASR) converts a speech signal to text. It is an example of a sequence-to-sequence task, going from a sequence of audio inputs to textual outputs. Voice assistants like Siri and Alexa utilize ASR models to assist users."),qe.forEach(t),ua=h(s),S=r(s,"P",{});var Ls=i(S);nt=n(Ls,"This guide will show you how to fine-tune "),ss=r(Ls,"A",{href:!0,rel:!0});var Ae=i(ss);lt=n(Ae,"Wav2Vec2"),Ae.forEach(t),ot=n(Ls," on the "),as=r(Ls,"A",{href:!0,rel:!0});var Ce=i(as);rt=n(Ce,"TIMIT"),Ce.forEach(t),it=n(Ls," dataset to transcribe audio to text."),Ls.forEach(t),da=h(s),$(H.$$.fragment,s),ma=h(s),U=r(s,"H2",{class:!0});var Ba=i(U);B=r(Ba,"A",{id:!0,class:!0,href:!0});var De=i(B);Ns=r(De,"SPAN",{});var Pe=i(Ns);$(ts.$$.fragment,Pe),Pe.forEach(t),De.forEach(t),pt=h(Ba),Us=r(Ba,"SPAN",{});var Ie=i(Us);ct=n(Ie,"Load TIMIT dataset"),Ie.forEach(t),Ba.forEach(t),_a=h(s),xs=r(s,"P",{});var Se=i(xs);ht=n(Se,"Load the TIMIT dataset from the \u{1F917} Datasets library:"),Se.forEach(t),ga=h(s),$(es.$$.fragment,s),ja=h(s),ks=r(s,"P",{});var Le=i(ks);ft=n(Le,"Then take a look at an example:"),Le.forEach(t),$a=h(s),$(ns.$$.fragment,s),va=h(s),A=r(s,"P",{});var R=i(A);ut=n(R,"While the dataset contains a lot of helpful information, like "),Vs=r(R,"CODE",{});var Me=i(Vs);dt=n(Me,"dialect_region"),Me.forEach(t),mt=n(R," and "),Ys=r(R,"CODE",{});var We=i(Ys);_t=n(We,"sentence_type"),We.forEach(t),gt=n(R,", you will focus on the "),Hs=r(R,"CODE",{});var Oe=i(Hs);jt=n(Oe,"audio"),Oe.forEach(t),$t=n(R," and "),Bs=r(R,"CODE",{});var Fe=i(Bs);vt=n(Fe,"text"),Fe.forEach(t),bt=n(R," fields in this guide. Remove the other columns:"),R.forEach(t),ba=h(s),$(ls.$$.fragment,s),wa=h(s),Es=r(s,"P",{});var ze=i(Es);wt=n(ze,"Take a look at the example again:"),ze.forEach(t),ya=h(s),$(os.$$.fragment,s),xa=h(s),L=r(s,"P",{});var Ms=i(L);yt=n(Ms,"The "),Js=r(Ms,"CODE",{});var Re=i(Js);xt=n(Re,"audio"),Re.forEach(t),kt=n(Ms," column contains a 1-dimensional "),Gs=r(Ms,"CODE",{});var Ne=i(Gs);Et=n(Ne,"array"),Ne.forEach(t),Tt=n(Ms," of the speech signal that must be called to load and resample the audio file."),Ms.forEach(t),ka=h(s),V=r(s,"H2",{class:!0});var Ja=i(V);J=r(Ja,"A",{id:!0,class:!0,href:!0});var Ue=i(J);Ks=r(Ue,"SPAN",{});var Ve=i(Ks);$(rs.$$.fragment,Ve),Ve.forEach(t),Ue.forEach(t),qt=h(Ja),Qs=r(Ja,"SPAN",{});var Ye=i(Qs);At=n(Ye,"Preprocess"),Ye.forEach(t),Ja.forEach(t),Ea=h(s),Ts=r(s,"P",{});var He=i(Ts);Ct=n(He,"Load the Wav2Vec2 processor to process the audio signal and transcribed text:"),He.forEach(t),Ta=h(s),$(is.$$.fragment,s),qa=h(s),qs=r(s,"P",{});var Be=i(qs);Dt=n(Be,"The preprocessing function needs to:"),Be.forEach(t),Aa=h(s),M=r(s,"OL",{});var Ws=i(M);ps=r(Ws,"LI",{});var Ga=i(ps);Pt=n(Ga,"Call the "),Xs=r(Ga,"CODE",{});var Je=i(Xs);It=n(Je,"audio"),Je.forEach(t),St=n(Ga," column to load and resample the audio file."),Ga.forEach(t),Lt=h(Ws),cs=r(Ws,"LI",{});var Ka=i(cs);Mt=n(Ka,"Extract the "),Zs=r(Ka,"CODE",{});var Ge=i(Zs);Wt=n(Ge,"input_values"),Ge.forEach(t),Ot=n(Ka," from the audio file."),Ka.forEach(t),Ft=h(Ws),sa=r(Ws,"LI",{});var Ke=i(sa);zt=n(Ke,"Typically, when you call the processor, you call the feature extractor. Since you also want to tokenize text, instruct the processor to call the tokenizer instead with a context manager."),Ke.forEach(t),Ws.forEach(t),Ca=h(s),$(hs.$$.fragment,s),Da=h(s),W=r(s,"P",{});var Os=i(W);Rt=n(Os,"Use \u{1F917} Datasets "),fs=r(Os,"A",{href:!0,rel:!0});var Qe=i(fs);aa=r(Qe,"CODE",{});var Xe=i(aa);Nt=n(Xe,"map"),Xe.forEach(t),Qe.forEach(t),Ut=n(Os," function to apply the preprocessing function over the entire dataset. You can speed up the map function by increasing the number of processes with "),ta=r(Os,"CODE",{});var Ze=i(ta);Vt=n(Ze,"num_proc"),Ze.forEach(t),Yt=n(Os,". Remove the columns you don\u2019t need:"),Os.forEach(t),Pa=h(s),$(us.$$.fragment,s),Ia=h(s),D=r(s,"P",{});var Z=i(D);Ht=n(Z,"\u{1F917} Transformers doesn\u2019t have a data collator for automatic speech recognition, so you will need to create one. You can adapt the "),As=r(Z,"A",{href:!0});var sn=i(As);Bt=n(sn,"DataCollatorWithPadding"),sn.forEach(t),Jt=n(Z," to create a batch of examples for automatic speech recognition. It will also dynamically pad your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ea=r(Z,"CODE",{});var an=i(ea);Gt=n(an,"tokenizer"),an.forEach(t),Kt=n(Z," function by setting "),na=r(Z,"CODE",{});var tn=i(na);Qt=n(tn,"padding=True"),tn.forEach(t),Xt=n(Z,", dynamic padding is more efficient."),Z.forEach(t),Sa=h(s),O=r(s,"P",{});var Fs=i(O);Zt=n(Fs,"Unlike other data collators, this specific data collator needs to apply a different padding method to "),la=r(Fs,"CODE",{});var en=i(la);se=n(en,"input_values"),en.forEach(t),ae=n(Fs," and "),oa=r(Fs,"CODE",{});var nn=i(oa);te=n(nn,"labels"),nn.forEach(t),ee=n(Fs,". You can apply a different padding method with a context manager:"),Fs.forEach(t),La=h(s),$(ds.$$.fragment,s),Ma=h(s),G=r(s,"P",{});var Qa=i(G);ne=n(Qa,"Create a batch of examples and dynamically pad them with "),ra=r(Qa,"CODE",{});var ln=i(ra);le=n(ln,"DataCollatorForCTCWithPadding"),ln.forEach(t),oe=n(Qa,":"),Qa.forEach(t),Wa=h(s),$(ms.$$.fragment,s),Oa=h(s),Y=r(s,"H2",{class:!0});var Xa=i(Y);K=r(Xa,"A",{id:!0,class:!0,href:!0});var on=i(K);ia=r(on,"SPAN",{});var rn=i(ia);$(_s.$$.fragment,rn),rn.forEach(t),on.forEach(t),re=h(Xa),pa=r(Xa,"SPAN",{});var pn=i(pa);ie=n(pn,"Fine-tune with Trainer"),pn.forEach(t),Xa.forEach(t),Fa=h(s),F=r(s,"P",{});var zs=i(F);pe=n(zs,"Load Wav2Vec2 with "),Cs=r(zs,"A",{href:!0});var cn=i(Cs);ce=n(cn,"AutoModelForCTC"),cn.forEach(t),he=n(zs,". For "),ca=r(zs,"CODE",{});var hn=i(ca);fe=n(hn,"ctc_loss_reduction"),hn.forEach(t),ue=n(zs,", it is often better to use the average instead of the default summation:"),zs.forEach(t),za=h(s),$(gs.$$.fragment,s),Ra=h(s),$(Q.$$.fragment,s),Na=h(s),Ds=r(s,"P",{});var fn=i(Ds);de=n(fn,"At this point, only three steps remain:"),fn.forEach(t),Ua=h(s),z=r(s,"OL",{});var Rs=i(z);js=r(Rs,"LI",{});var Za=i(js);me=n(Za,"Define your training hyperparameters in "),Ps=r(Za,"A",{href:!0});var un=i(Ps);_e=n(un,"TrainingArguments"),un.forEach(t),ge=n(Za,"."),Za.forEach(t),je=h(Rs),$s=r(Rs,"LI",{});var st=i($s);$e=n(st,"Pass the training arguments to "),Is=r(st,"A",{href:!0});var dn=i(Is);ve=n(dn,"Trainer"),dn.forEach(t),be=n(st," along with the model, datasets, tokenizer, and data collator."),st.forEach(t),we=h(Rs),vs=r(Rs,"LI",{});var at=i(vs);ye=n(at,"Call "),Ss=r(at,"A",{href:!0});var mn=i(Ss);xe=n(mn,"train()"),mn.forEach(t),ke=n(at," to fine-tune your model."),at.forEach(t),Rs.forEach(t),Va=h(s),$(bs.$$.fragment,s),Ya=h(s),$(X.$$.fragment,s),this.h()},h(){u(f,"name","hf:doc:metadata"),u(f,"content",JSON.stringify(kn)),u(_,"id","automatic-speech-recognition"),u(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_,"href","#automatic-speech-recognition"),u(d,"class","relative group"),u(ss,"href","https://huggingface.co/facebook/wav2vec2-base"),u(ss,"rel","nofollow"),u(as,"href","https://huggingface.co/datasets/timit_asr"),u(as,"rel","nofollow"),u(B,"id","load-timit-dataset"),u(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(B,"href","#load-timit-dataset"),u(U,"class","relative group"),u(J,"id","preprocess"),u(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(J,"href","#preprocess"),u(V,"class","relative group"),u(fs,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),u(fs,"rel","nofollow"),u(As,"href","/docs/transformers/pr_16162/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),u(K,"id","finetune-with-trainer"),u(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(K,"href","#finetune-with-trainer"),u(Y,"class","relative group"),u(Cs,"href","/docs/transformers/pr_16162/en/model_doc/auto#transformers.AutoModelForCTC"),u(Ps,"href","/docs/transformers/pr_16162/en/main_classes/trainer#transformers.TrainingArguments"),u(Is,"href","/docs/transformers/pr_16162/en/main_classes/trainer#transformers.Trainer"),u(Ss,"href","/docs/transformers/pr_16162/en/main_classes/trainer#transformers.Trainer.train")},m(s,l){a(document.head,f),p(s,x,l),p(s,d,l),a(d,_),a(_,E),v(m,E,null),a(d,k),a(d,T),a(T,q),p(s,g,l),v(C,s,l),p(s,I,l),p(s,ys,l),a(ys,et),p(s,ua,l),p(s,S,l),a(S,nt),a(S,ss),a(ss,lt),a(S,ot),a(S,as),a(as,rt),a(S,it),p(s,da,l),v(H,s,l),p(s,ma,l),p(s,U,l),a(U,B),a(B,Ns),v(ts,Ns,null),a(U,pt),a(U,Us),a(Us,ct),p(s,_a,l),p(s,xs,l),a(xs,ht),p(s,ga,l),v(es,s,l),p(s,ja,l),p(s,ks,l),a(ks,ft),p(s,$a,l),v(ns,s,l),p(s,va,l),p(s,A,l),a(A,ut),a(A,Vs),a(Vs,dt),a(A,mt),a(A,Ys),a(Ys,_t),a(A,gt),a(A,Hs),a(Hs,jt),a(A,$t),a(A,Bs),a(Bs,vt),a(A,bt),p(s,ba,l),v(ls,s,l),p(s,wa,l),p(s,Es,l),a(Es,wt),p(s,ya,l),v(os,s,l),p(s,xa,l),p(s,L,l),a(L,yt),a(L,Js),a(Js,xt),a(L,kt),a(L,Gs),a(Gs,Et),a(L,Tt),p(s,ka,l),p(s,V,l),a(V,J),a(J,Ks),v(rs,Ks,null),a(V,qt),a(V,Qs),a(Qs,At),p(s,Ea,l),p(s,Ts,l),a(Ts,Ct),p(s,Ta,l),v(is,s,l),p(s,qa,l),p(s,qs,l),a(qs,Dt),p(s,Aa,l),p(s,M,l),a(M,ps),a(ps,Pt),a(ps,Xs),a(Xs,It),a(ps,St),a(M,Lt),a(M,cs),a(cs,Mt),a(cs,Zs),a(Zs,Wt),a(cs,Ot),a(M,Ft),a(M,sa),a(sa,zt),p(s,Ca,l),v(hs,s,l),p(s,Da,l),p(s,W,l),a(W,Rt),a(W,fs),a(fs,aa),a(aa,Nt),a(W,Ut),a(W,ta),a(ta,Vt),a(W,Yt),p(s,Pa,l),v(us,s,l),p(s,Ia,l),p(s,D,l),a(D,Ht),a(D,As),a(As,Bt),a(D,Jt),a(D,ea),a(ea,Gt),a(D,Kt),a(D,na),a(na,Qt),a(D,Xt),p(s,Sa,l),p(s,O,l),a(O,Zt),a(O,la),a(la,se),a(O,ae),a(O,oa),a(oa,te),a(O,ee),p(s,La,l),v(ds,s,l),p(s,Ma,l),p(s,G,l),a(G,ne),a(G,ra),a(ra,le),a(G,oe),p(s,Wa,l),v(ms,s,l),p(s,Oa,l),p(s,Y,l),a(Y,K),a(K,ia),v(_s,ia,null),a(Y,re),a(Y,pa),a(pa,ie),p(s,Fa,l),p(s,F,l),a(F,pe),a(F,Cs),a(Cs,ce),a(F,he),a(F,ca),a(ca,fe),a(F,ue),p(s,za,l),v(gs,s,l),p(s,Ra,l),v(Q,s,l),p(s,Na,l),p(s,Ds,l),a(Ds,de),p(s,Ua,l),p(s,z,l),a(z,js),a(js,me),a(js,Ps),a(Ps,_e),a(js,ge),a(z,je),a(z,$s),a($s,$e),a($s,Is),a(Is,ve),a($s,be),a(z,we),a(z,vs),a(vs,ye),a(vs,Ss),a(Ss,xe),a(vs,ke),p(s,Va,l),v(bs,s,l),p(s,Ya,l),v(X,s,l),Ha=!0},p(s,[l]){const ws={};l&2&&(ws.$$scope={dirty:l,ctx:s}),H.$set(ws);const ha={};l&2&&(ha.$$scope={dirty:l,ctx:s}),Q.$set(ha);const fa={};l&2&&(fa.$$scope={dirty:l,ctx:s}),X.$set(fa)},i(s){Ha||(b(m.$$.fragment,s),b(C.$$.fragment,s),b(H.$$.fragment,s),b(ts.$$.fragment,s),b(es.$$.fragment,s),b(ns.$$.fragment,s),b(ls.$$.fragment,s),b(os.$$.fragment,s),b(rs.$$.fragment,s),b(is.$$.fragment,s),b(hs.$$.fragment,s),b(us.$$.fragment,s),b(ds.$$.fragment,s),b(ms.$$.fragment,s),b(_s.$$.fragment,s),b(gs.$$.fragment,s),b(Q.$$.fragment,s),b(bs.$$.fragment,s),b(X.$$.fragment,s),Ha=!0)},o(s){w(m.$$.fragment,s),w(C.$$.fragment,s),w(H.$$.fragment,s),w(ts.$$.fragment,s),w(es.$$.fragment,s),w(ns.$$.fragment,s),w(ls.$$.fragment,s),w(os.$$.fragment,s),w(rs.$$.fragment,s),w(is.$$.fragment,s),w(hs.$$.fragment,s),w(us.$$.fragment,s),w(ds.$$.fragment,s),w(ms.$$.fragment,s),w(_s.$$.fragment,s),w(gs.$$.fragment,s),w(Q.$$.fragment,s),w(bs.$$.fragment,s),w(X.$$.fragment,s),Ha=!1},d(s){t(f),s&&t(x),s&&t(d),y(m),s&&t(g),y(C,s),s&&t(I),s&&t(ys),s&&t(ua),s&&t(S),s&&t(da),y(H,s),s&&t(ma),s&&t(U),y(ts),s&&t(_a),s&&t(xs),s&&t(ga),y(es,s),s&&t(ja),s&&t(ks),s&&t($a),y(ns,s),s&&t(va),s&&t(A),s&&t(ba),y(ls,s),s&&t(wa),s&&t(Es),s&&t(ya),y(os,s),s&&t(xa),s&&t(L),s&&t(ka),s&&t(V),y(rs),s&&t(Ea),s&&t(Ts),s&&t(Ta),y(is,s),s&&t(qa),s&&t(qs),s&&t(Aa),s&&t(M),s&&t(Ca),y(hs,s),s&&t(Da),s&&t(W),s&&t(Pa),y(us,s),s&&t(Ia),s&&t(D),s&&t(Sa),s&&t(O),s&&t(La),y(ds,s),s&&t(Ma),s&&t(G),s&&t(Wa),y(ms,s),s&&t(Oa),s&&t(Y),y(_s),s&&t(Fa),s&&t(F),s&&t(za),y(gs,s),s&&t(Ra),y(Q,s),s&&t(Na),s&&t(Ds),s&&t(Ua),s&&t(z),s&&t(Va),y(bs,s),s&&t(Ya),y(X,s)}}}const kn={local:"automatic-speech-recognition",sections:[{local:"load-timit-dataset",title:"Load TIMIT dataset"},{local:"preprocess",title:"Preprocess"},{local:"finetune-with-trainer",title:"Fine-tune with Trainer"}],title:"Automatic speech recognition"};function En(N,f,x){let{fw:d}=f;return N.$$set=_=>{"fw"in _&&x(0,d=_.fw)},[d]}class In extends _n{constructor(f){super();gn(this,f,En,xn,jn,{fw:0})}}export{In as default,kn as metadata};
