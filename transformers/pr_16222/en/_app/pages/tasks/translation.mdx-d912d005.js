import{S as Gn,i as Qn,s as Vn,e as i,k as m,w as $,t as n,M as er,c as p,d as t,m as u,a as f,x as k,h as r,b as c,F as s,g as h,y as w,q as v,o as b,B as q,L as Rn}from"../../chunks/vendor-6b77c823.js";import{T as xs}from"../../chunks/Tip-39098574.js";import{Y as Kn}from"../../chunks/Youtube-5c6e11e6.js";import{I as yt}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as z}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as tr,M as Xn}from"../../chunks/Markdown-4489c441.js";function sr(T){let l,d,o,_,j;return{c(){l=i("p"),d=n("See the translation "),o=i("a"),_=n("task page"),j=n(" for more information about its associated models, datasets, and metrics."),this.h()},l(g){l=p(g,"P",{});var E=f(l);d=r(E,"See the translation "),o=p(E,"A",{href:!0,rel:!0});var S=f(o);_=r(S,"task page"),S.forEach(t),j=r(E," for more information about its associated models, datasets, and metrics."),E.forEach(t),this.h()},h(){c(o,"href","https://huggingface.co/tasks/translation"),c(o,"rel","nofollow")},m(g,E){h(g,l,E),s(l,d),s(l,o),s(o,_),s(l,j)},d(g){g&&t(l)}}}function ar(T){let l,d;return l=new z({props:{code:`from transformers import DataCollatorForSeq2Seq

data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForSeq2Seq

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model)`}}),{c(){$(l.$$.fragment)},l(o){k(l.$$.fragment,o)},m(o,_){w(l,o,_),d=!0},p:Rn,i(o){d||(v(l.$$.fragment,o),d=!0)},o(o){b(l.$$.fragment,o),d=!1},d(o){q(l,o)}}}function nr(T){let l,d;return l=new Xn({props:{$$slots:{default:[ar]},$$scope:{ctx:T}}}),{c(){$(l.$$.fragment)},l(o){k(l.$$.fragment,o)},m(o,_){w(l,o,_),d=!0},p(o,_){const j={};_&2&&(j.$$scope={dirty:_,ctx:o}),l.$set(j)},i(o){d||(v(l.$$.fragment,o),d=!0)},o(o){b(l.$$.fragment,o),d=!1},d(o){q(l,o)}}}function rr(T){let l,d;return l=new z({props:{code:`from transformers import DataCollatorForSeq2Seq

data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model, return_tensors="tf")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForSeq2Seq

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){$(l.$$.fragment)},l(o){k(l.$$.fragment,o)},m(o,_){w(l,o,_),d=!0},p:Rn,i(o){d||(v(l.$$.fragment,o),d=!0)},o(o){b(l.$$.fragment,o),d=!1},d(o){q(l,o)}}}function or(T){let l,d;return l=new Xn({props:{$$slots:{default:[rr]},$$scope:{ctx:T}}}),{c(){$(l.$$.fragment)},l(o){k(l.$$.fragment,o)},m(o,_){w(l,o,_),d=!0},p(o,_){const j={};_&2&&(j.$$scope={dirty:_,ctx:o}),l.$set(j)},i(o){d||(v(l.$$.fragment,o),d=!0)},o(o){b(l.$$.fragment,o),d=!1},d(o){q(l,o)}}}function lr(T){let l,d,o,_,j,g,E,S;return{c(){l=i("p"),d=n("If you aren\u2019t familiar with fine-tuning a model with the "),o=i("a"),_=n("Trainer"),j=n(", take a look at the basic tutorial "),g=i("a"),E=n("here"),S=n("!"),this.h()},l(x){l=p(x,"P",{});var y=f(l);d=r(y,"If you aren\u2019t familiar with fine-tuning a model with the "),o=p(y,"A",{href:!0});var F=f(o);_=r(F,"Trainer"),F.forEach(t),j=r(y,", take a look at the basic tutorial "),g=p(y,"A",{href:!0});var L=f(g);E=r(L,"here"),L.forEach(t),S=r(y,"!"),y.forEach(t),this.h()},h(){c(o,"href","/docs/transformers/pr_16222/en/main_classes/trainer#transformers.Trainer"),c(g,"href","training#finetune-with-trainer")},m(x,y){h(x,l,y),s(l,d),s(l,o),s(o,_),s(l,j),s(l,g),s(g,E),s(l,S)},d(x){x&&t(l)}}}function ir(T){let l,d,o,_,j;return{c(){l=i("p"),d=n("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),o=i("a"),_=n("here"),j=n("!"),this.h()},l(g){l=p(g,"P",{});var E=f(l);d=r(E,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),o=p(E,"A",{href:!0});var S=f(o);_=r(S,"here"),S.forEach(t),j=r(E,"!"),E.forEach(t),this.h()},h(){c(o,"href","training#finetune-with-keras")},m(g,E){h(g,l,E),s(l,d),s(l,o),s(o,_),s(l,j)},d(g){g&&t(l)}}}function pr(T){let l,d,o,_,j,g,E,S;return{c(){l=i("p"),d=n(`For a more in-depth example of how to fine-tune a model for translation, take a look at the corresponding
`),o=i("a"),_=n("PyTorch notebook"),j=n(`
or `),g=i("a"),E=n("TensorFlow notebook"),S=n("."),this.h()},l(x){l=p(x,"P",{});var y=f(l);d=r(y,`For a more in-depth example of how to fine-tune a model for translation, take a look at the corresponding
`),o=p(y,"A",{href:!0,rel:!0});var F=f(o);_=r(F,"PyTorch notebook"),F.forEach(t),j=r(y,`
or `),g=p(y,"A",{href:!0,rel:!0});var L=f(g);E=r(L,"TensorFlow notebook"),L.forEach(t),S=r(y,"."),y.forEach(t),this.h()},h(){c(o,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/master/examples/translation.ipynb"),c(o,"rel","nofollow"),c(g,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/master/examples/translation-tf.ipynb"),c(g,"rel","nofollow")},m(x,y){h(x,l,y),s(l,d),s(l,o),s(o,_),s(l,j),s(l,g),s(g,E),s(l,S)},d(x){x&&t(l)}}}function fr(T){let l,d,o,_,j,g,E,S,x,y,F,L,Le,zs,St,C,As,oe,Fs,Ps,le,Ds,Ls,Tt,Y,xt,N,H,Ve,ie,Cs,et,Ms,zt,Ce,Os,At,pe,Ft,Me,Is,Pt,fe,Dt,Oe,Ns,Lt,he,Ct,Z,Us,tt,Bs,Ws,Mt,U,J,st,me,Ys,at,Hs,Ot,ue,It,Ie,Zs,Nt,ce,Ut,Ne,Js,Bt,M,nt,Ks,Rs,rt,Xs,Gs,de,Qs,ot,Vs,ea,Wt,_e,Yt,P,ta,ge,lt,sa,aa,it,na,ra,pt,oa,la,Ht,$e,Zt,A,ia,Ue,pa,fa,ft,ha,ma,ht,ua,ca,mt,da,_a,Jt,K,Kt,B,R,ut,ke,ga,ct,$a,Rt,X,ka,Be,wa,va,Xt,we,Gt,G,Qt,We,ba,Vt,O,ve,qa,Ye,ja,Ea,ya,be,Sa,He,Ta,xa,za,qe,Aa,Ze,Fa,Pa,es,je,ts,W,Q,dt,Ee,Da,_t,La,ss,Je,Ca,as,V,ns,D,Ma,gt,Oa,Ia,ye,$t,Na,Ua,kt,Ba,Wa,rs,Se,os,Ke,Ya,ls,Te,is,ee,Ha,Re,Za,Ja,ps,xe,fs,te,Ka,ze,wt,Ra,Xa,hs,Ae,ms,se,Ga,Fe,vt,Qa,Va,us,Pe,cs,ae,ds;return g=new yt({}),F=new Kn({props:{id:"1JvfrvZgi6c"}}),Y=new xs({props:{$$slots:{default:[sr]},$$scope:{ctx:T}}}),ie=new yt({}),pe=new z({props:{code:`from datasets import load_dataset

books = load_dataset("opus_books", "en-fr")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>books = load_dataset(<span class="hljs-string">&quot;opus_books&quot;</span>, <span class="hljs-string">&quot;en-fr&quot;</span>)`}}),fe=new z({props:{code:'books = books["train"].train_test_split(test_size=0.2)',highlighted:'books = books[<span class="hljs-string">&quot;train&quot;</span>].train_test_split(test_size=<span class="hljs-number">0.2</span>)'}}),he=new z({props:{code:'books["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>books[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;90560&#x27;</span>,
 <span class="hljs-string">&#x27;translation&#x27;</span>: {<span class="hljs-string">&#x27;en&#x27;</span>: <span class="hljs-string">&#x27;But this lofty plateau measured only a few fathoms, and soon we reentered Our Element.&#x27;</span>,
  <span class="hljs-string">&#x27;fr&#x27;</span>: <span class="hljs-string">&#x27;Mais ce plateau \xE9lev\xE9 ne mesurait que quelques toises, et bient\xF4t nous f\xFBmes rentr\xE9s dans notre \xE9l\xE9ment.&#x27;</span>}}`}}),me=new yt({}),ue=new Kn({props:{id:"XAR8jnZZuUs"}}),ce=new z({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("t5-small")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)`}}),_e=new z({props:{code:`source_lang = "en"
target_lang = "fr"
prefix = "translate English to French: "


def preprocess_function(examples):
    inputs = [prefix + example[source_lang] for example in examples["translation"]]
    targets = [example[target_lang] for example in examples["translation"]]
    model_inputs = tokenizer(inputs, max_length=128, truncation=True)

    with tokenizer.as_target_tokenizer():
        labels = tokenizer(targets, max_length=128, truncation=True)

    model_inputs["labels"] = labels["input_ids"]
    return model_inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>source_lang = <span class="hljs-string">&quot;en&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_lang = <span class="hljs-string">&quot;fr&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prefix = <span class="hljs-string">&quot;translate English to French: &quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    inputs = [prefix + example[source_lang] <span class="hljs-keyword">for</span> example <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;translation&quot;</span>]]
<span class="hljs-meta">... </span>    targets = [example[target_lang] <span class="hljs-keyword">for</span> example <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;translation&quot;</span>]]
<span class="hljs-meta">... </span>    model_inputs = tokenizer(inputs, max_length=<span class="hljs-number">128</span>, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> tokenizer.as_target_tokenizer():
<span class="hljs-meta">... </span>        labels = tokenizer(targets, max_length=<span class="hljs-number">128</span>, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-meta">... </span>    model_inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> model_inputs`}}),$e=new z({props:{code:"tokenized_books = books.map(preprocess_function, batched=True)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_books = books.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)'}}),K=new tr({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[or],pytorch:[nr]},$$scope:{ctx:T}}}),ke=new yt({}),we=new z({props:{code:`from transformers import AutoModelForSeq2SeqLM, Seq2SeqTrainingArguments, Seq2SeqTrainer

model = AutoModelForSeq2SeqLM.from_pretrained("t5-small")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSeq2SeqLM, Seq2SeqTrainingArguments, Seq2SeqTrainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)`}}),G=new xs({props:{$$slots:{default:[lr]},$$scope:{ctx:T}}}),je=new z({props:{code:`training_args = Seq2SeqTrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
    weight_decay=0.01,
    save_total_limit=3,
    num_train_epochs=1,
    fp16=True,
)

trainer = Seq2SeqTrainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_books["train"],
    eval_dataset=tokenized_books["test"],
    tokenizer=tokenizer,
    data_collator=data_collator,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = Seq2SeqTrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">2e-5</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    per_device_eval_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    weight_decay=<span class="hljs-number">0.01</span>,
<span class="hljs-meta">... </span>    save_total_limit=<span class="hljs-number">3</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    fp16=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Seq2SeqTrainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=tokenized_books[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=tokenized_books[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=tokenizer,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),Ee=new yt({}),V=new xs({props:{$$slots:{default:[ir]},$$scope:{ctx:T}}}),Se=new z({props:{code:`tf_train_set = tokenized_books["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "labels"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_test_set = tokenized_books["test"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "labels"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tf_train_set = tokenized_books[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tf_test_set = tokenized_books[<span class="hljs-string">&quot;test&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)`}}),Te=new z({props:{code:`from transformers import create_optimizer, AdamWeightDecay

optimizer = AdamWeightDecay(learning_rate=2e-5, weight_decay_rate=0.01)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer, AdamWeightDecay

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = AdamWeightDecay(learning_rate=<span class="hljs-number">2e-5</span>, weight_decay_rate=<span class="hljs-number">0.01</span>)`}}),xe=new z({props:{code:`from transformers import TFAutoModelForSeq2SeqLM

model = TFAutoModelForSeq2SeqLM.from_pretrained("t5-small")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)`}}),Ae=new z({props:{code:"model.compile(optimizer=optimizer)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)'}}),Pe=new z({props:{code:"model.fit(x=tf_train_set, validation_data=tf_test_set, epochs=3)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_test_set, epochs=<span class="hljs-number">3</span>)'}}),ae=new xs({props:{$$slots:{default:[pr]},$$scope:{ctx:T}}}),{c(){l=i("meta"),d=m(),o=i("h1"),_=i("a"),j=i("span"),$(g.$$.fragment),E=m(),S=i("span"),x=n("Translation"),y=m(),$(F.$$.fragment),L=m(),Le=i("p"),zs=n("Translation converts a sequence of text from one language to another. It is one of several tasks you can formulate as a sequence-to-sequence problem, a powerful framework that extends to vision and audio tasks."),St=m(),C=i("p"),As=n("This guide will show you how to fine-tune "),oe=i("a"),Fs=n("T5"),Ps=n(" on the English-French subset of the "),le=i("a"),Ds=n("OPUS Books"),Ls=n(" dataset to translate English text to French."),Tt=m(),$(Y.$$.fragment),xt=m(),N=i("h2"),H=i("a"),Ve=i("span"),$(ie.$$.fragment),Cs=m(),et=i("span"),Ms=n("Load OPUS Books dataset"),zt=m(),Ce=i("p"),Os=n("Load the OPUS Books dataset from the \u{1F917} Datasets library:"),At=m(),$(pe.$$.fragment),Ft=m(),Me=i("p"),Is=n("Split this dataset into a train and test set:"),Pt=m(),$(fe.$$.fragment),Dt=m(),Oe=i("p"),Ns=n("Then take a look at an example:"),Lt=m(),$(he.$$.fragment),Ct=m(),Z=i("p"),Us=n("The "),tt=i("code"),Bs=n("translation"),Ws=n(" field is a dictionary containing the English and French translations of the text."),Mt=m(),U=i("h2"),J=i("a"),st=i("span"),$(me.$$.fragment),Ys=m(),at=i("span"),Hs=n("Preprocess"),Ot=m(),$(ue.$$.fragment),It=m(),Ie=i("p"),Zs=n("Load the T5 tokenizer to process the language pairs:"),Nt=m(),$(ce.$$.fragment),Ut=m(),Ne=i("p"),Js=n("The preprocessing function needs to:"),Bt=m(),M=i("ol"),nt=i("li"),Ks=n("Prefix the input with a prompt so T5 knows this is a translation task. Some models capable of multiple NLP tasks require prompting for specific tasks."),Rs=m(),rt=i("li"),Xs=n("Tokenize the input (English) and target (French) separately. You can\u2019t tokenize French text with a tokenizer pretrained on an English vocabulary. A context manager will help set the tokenizer to French first before tokenizing it."),Gs=m(),de=i("li"),Qs=n("Truncate sequences to be no longer than the maximum length set by the "),ot=i("code"),Vs=n("max_length"),ea=n(" parameter."),Wt=m(),$(_e.$$.fragment),Yt=m(),P=i("p"),ta=n("Use \u{1F917} Datasets "),ge=i("a"),lt=i("code"),sa=n("map"),aa=n(" function to apply the preprocessing function over the entire dataset. You can speed up the "),it=i("code"),na=n("map"),ra=n(" function by setting "),pt=i("code"),oa=n("batched=True"),la=n(" to process multiple elements of the dataset at once:"),Ht=m(),$($e.$$.fragment),Zt=m(),A=i("p"),ia=n("Use "),Ue=i("a"),pa=n("DataCollatorForSeq2Seq"),fa=n(" to create a batch of examples. It will also "),ft=i("em"),ha=n("dynamically pad"),ma=n(" your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ht=i("code"),ua=n("tokenizer"),ca=n(" function by setting "),mt=i("code"),da=n("padding=True"),_a=n(", dynamic padding is more efficient."),Jt=m(),$(K.$$.fragment),Kt=m(),B=i("h2"),R=i("a"),ut=i("span"),$(ke.$$.fragment),ga=m(),ct=i("span"),$a=n("Fine-tune with Trainer"),Rt=m(),X=i("p"),ka=n("Load T5 with "),Be=i("a"),wa=n("AutoModelForSeq2SeqLM"),va=n(":"),Xt=m(),$(we.$$.fragment),Gt=m(),$(G.$$.fragment),Qt=m(),We=i("p"),ba=n("At this point, only three steps remain:"),Vt=m(),O=i("ol"),ve=i("li"),qa=n("Define your training hyperparameters in "),Ye=i("a"),ja=n("Seq2SeqTrainingArguments"),Ea=n("."),ya=m(),be=i("li"),Sa=n("Pass the training arguments to "),He=i("a"),Ta=n("Seq2SeqTrainer"),xa=n(" along with the model, dataset, tokenizer, and data collator."),za=m(),qe=i("li"),Aa=n("Call "),Ze=i("a"),Fa=n("train()"),Pa=n(" to fine-tune your model."),es=m(),$(je.$$.fragment),ts=m(),W=i("h2"),Q=i("a"),dt=i("span"),$(Ee.$$.fragment),Da=m(),_t=i("span"),La=n("Fine-tune with TensorFlow"),ss=m(),Je=i("p"),Ca=n("To fine-tune a model in TensorFlow is just as easy, with only a few differences."),as=m(),$(V.$$.fragment),ns=m(),D=i("p"),Ma=n("Convert your datasets to the "),gt=i("code"),Oa=n("tf.data.Dataset"),Ia=n(" format with "),ye=i("a"),$t=i("code"),Na=n("to_tf_dataset"),Ua=n(". Specify inputs and labels in "),kt=i("code"),Ba=n("columns"),Wa=n(", whether to shuffle the dataset order, batch size, and the data collator:"),rs=m(),$(Se.$$.fragment),os=m(),Ke=i("p"),Ya=n("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),ls=m(),$(Te.$$.fragment),is=m(),ee=i("p"),Ha=n("Load T5 with "),Re=i("a"),Za=n("TFAutoModelForSeq2SeqLM"),Ja=n(":"),ps=m(),$(xe.$$.fragment),fs=m(),te=i("p"),Ka=n("Configure the model for training with "),ze=i("a"),wt=i("code"),Ra=n("compile"),Xa=n(":"),hs=m(),$(Ae.$$.fragment),ms=m(),se=i("p"),Ga=n("Call "),Fe=i("a"),vt=i("code"),Qa=n("fit"),Va=n(" to fine-tune the model:"),us=m(),$(Pe.$$.fragment),cs=m(),$(ae.$$.fragment),this.h()},l(e){const a=er('[data-svelte="svelte-1phssyn"]',document.head);l=p(a,"META",{name:!0,content:!0}),a.forEach(t),d=u(e),o=p(e,"H1",{class:!0});var De=f(o);_=p(De,"A",{id:!0,class:!0,href:!0});var bt=f(_);j=p(bt,"SPAN",{});var qt=f(j);k(g.$$.fragment,qt),qt.forEach(t),bt.forEach(t),E=u(De),S=p(De,"SPAN",{});var jt=f(S);x=r(jt,"Translation"),jt.forEach(t),De.forEach(t),y=u(e),k(F.$$.fragment,e),L=u(e),Le=p(e,"P",{});var Et=f(Le);zs=r(Et,"Translation converts a sequence of text from one language to another. It is one of several tasks you can formulate as a sequence-to-sequence problem, a powerful framework that extends to vision and audio tasks."),Et.forEach(t),St=u(e),C=p(e,"P",{});var Xe=f(C);As=r(Xe,"This guide will show you how to fine-tune "),oe=p(Xe,"A",{href:!0,rel:!0});var en=f(oe);Fs=r(en,"T5"),en.forEach(t),Ps=r(Xe," on the English-French subset of the "),le=p(Xe,"A",{href:!0,rel:!0});var tn=f(le);Ds=r(tn,"OPUS Books"),tn.forEach(t),Ls=r(Xe," dataset to translate English text to French."),Xe.forEach(t),Tt=u(e),k(Y.$$.fragment,e),xt=u(e),N=p(e,"H2",{class:!0});var _s=f(N);H=p(_s,"A",{id:!0,class:!0,href:!0});var sn=f(H);Ve=p(sn,"SPAN",{});var an=f(Ve);k(ie.$$.fragment,an),an.forEach(t),sn.forEach(t),Cs=u(_s),et=p(_s,"SPAN",{});var nn=f(et);Ms=r(nn,"Load OPUS Books dataset"),nn.forEach(t),_s.forEach(t),zt=u(e),Ce=p(e,"P",{});var rn=f(Ce);Os=r(rn,"Load the OPUS Books dataset from the \u{1F917} Datasets library:"),rn.forEach(t),At=u(e),k(pe.$$.fragment,e),Ft=u(e),Me=p(e,"P",{});var on=f(Me);Is=r(on,"Split this dataset into a train and test set:"),on.forEach(t),Pt=u(e),k(fe.$$.fragment,e),Dt=u(e),Oe=p(e,"P",{});var ln=f(Oe);Ns=r(ln,"Then take a look at an example:"),ln.forEach(t),Lt=u(e),k(he.$$.fragment,e),Ct=u(e),Z=p(e,"P",{});var gs=f(Z);Us=r(gs,"The "),tt=p(gs,"CODE",{});var pn=f(tt);Bs=r(pn,"translation"),pn.forEach(t),Ws=r(gs," field is a dictionary containing the English and French translations of the text."),gs.forEach(t),Mt=u(e),U=p(e,"H2",{class:!0});var $s=f(U);J=p($s,"A",{id:!0,class:!0,href:!0});var fn=f(J);st=p(fn,"SPAN",{});var hn=f(st);k(me.$$.fragment,hn),hn.forEach(t),fn.forEach(t),Ys=u($s),at=p($s,"SPAN",{});var mn=f(at);Hs=r(mn,"Preprocess"),mn.forEach(t),$s.forEach(t),Ot=u(e),k(ue.$$.fragment,e),It=u(e),Ie=p(e,"P",{});var un=f(Ie);Zs=r(un,"Load the T5 tokenizer to process the language pairs:"),un.forEach(t),Nt=u(e),k(ce.$$.fragment,e),Ut=u(e),Ne=p(e,"P",{});var cn=f(Ne);Js=r(cn,"The preprocessing function needs to:"),cn.forEach(t),Bt=u(e),M=p(e,"OL",{});var Ge=f(M);nt=p(Ge,"LI",{});var dn=f(nt);Ks=r(dn,"Prefix the input with a prompt so T5 knows this is a translation task. Some models capable of multiple NLP tasks require prompting for specific tasks."),dn.forEach(t),Rs=u(Ge),rt=p(Ge,"LI",{});var _n=f(rt);Xs=r(_n,"Tokenize the input (English) and target (French) separately. You can\u2019t tokenize French text with a tokenizer pretrained on an English vocabulary. A context manager will help set the tokenizer to French first before tokenizing it."),_n.forEach(t),Gs=u(Ge),de=p(Ge,"LI",{});var ks=f(de);Qs=r(ks,"Truncate sequences to be no longer than the maximum length set by the "),ot=p(ks,"CODE",{});var gn=f(ot);Vs=r(gn,"max_length"),gn.forEach(t),ea=r(ks," parameter."),ks.forEach(t),Ge.forEach(t),Wt=u(e),k(_e.$$.fragment,e),Yt=u(e),P=p(e,"P",{});var ne=f(P);ta=r(ne,"Use \u{1F917} Datasets "),ge=p(ne,"A",{href:!0,rel:!0});var $n=f(ge);lt=p($n,"CODE",{});var kn=f(lt);sa=r(kn,"map"),kn.forEach(t),$n.forEach(t),aa=r(ne," function to apply the preprocessing function over the entire dataset. You can speed up the "),it=p(ne,"CODE",{});var wn=f(it);na=r(wn,"map"),wn.forEach(t),ra=r(ne," function by setting "),pt=p(ne,"CODE",{});var vn=f(pt);oa=r(vn,"batched=True"),vn.forEach(t),la=r(ne," to process multiple elements of the dataset at once:"),ne.forEach(t),Ht=u(e),k($e.$$.fragment,e),Zt=u(e),A=p(e,"P",{});var I=f(A);ia=r(I,"Use "),Ue=p(I,"A",{href:!0});var bn=f(Ue);pa=r(bn,"DataCollatorForSeq2Seq"),bn.forEach(t),fa=r(I," to create a batch of examples. It will also "),ft=p(I,"EM",{});var qn=f(ft);ha=r(qn,"dynamically pad"),qn.forEach(t),ma=r(I," your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ht=p(I,"CODE",{});var jn=f(ht);ua=r(jn,"tokenizer"),jn.forEach(t),ca=r(I," function by setting "),mt=p(I,"CODE",{});var En=f(mt);da=r(En,"padding=True"),En.forEach(t),_a=r(I,", dynamic padding is more efficient."),I.forEach(t),Jt=u(e),k(K.$$.fragment,e),Kt=u(e),B=p(e,"H2",{class:!0});var ws=f(B);R=p(ws,"A",{id:!0,class:!0,href:!0});var yn=f(R);ut=p(yn,"SPAN",{});var Sn=f(ut);k(ke.$$.fragment,Sn),Sn.forEach(t),yn.forEach(t),ga=u(ws),ct=p(ws,"SPAN",{});var Tn=f(ct);$a=r(Tn,"Fine-tune with Trainer"),Tn.forEach(t),ws.forEach(t),Rt=u(e),X=p(e,"P",{});var vs=f(X);ka=r(vs,"Load T5 with "),Be=p(vs,"A",{href:!0});var xn=f(Be);wa=r(xn,"AutoModelForSeq2SeqLM"),xn.forEach(t),va=r(vs,":"),vs.forEach(t),Xt=u(e),k(we.$$.fragment,e),Gt=u(e),k(G.$$.fragment,e),Qt=u(e),We=p(e,"P",{});var zn=f(We);ba=r(zn,"At this point, only three steps remain:"),zn.forEach(t),Vt=u(e),O=p(e,"OL",{});var Qe=f(O);ve=p(Qe,"LI",{});var bs=f(ve);qa=r(bs,"Define your training hyperparameters in "),Ye=p(bs,"A",{href:!0});var An=f(Ye);ja=r(An,"Seq2SeqTrainingArguments"),An.forEach(t),Ea=r(bs,"."),bs.forEach(t),ya=u(Qe),be=p(Qe,"LI",{});var qs=f(be);Sa=r(qs,"Pass the training arguments to "),He=p(qs,"A",{href:!0});var Fn=f(He);Ta=r(Fn,"Seq2SeqTrainer"),Fn.forEach(t),xa=r(qs," along with the model, dataset, tokenizer, and data collator."),qs.forEach(t),za=u(Qe),qe=p(Qe,"LI",{});var js=f(qe);Aa=r(js,"Call "),Ze=p(js,"A",{href:!0});var Pn=f(Ze);Fa=r(Pn,"train()"),Pn.forEach(t),Pa=r(js," to fine-tune your model."),js.forEach(t),Qe.forEach(t),es=u(e),k(je.$$.fragment,e),ts=u(e),W=p(e,"H2",{class:!0});var Es=f(W);Q=p(Es,"A",{id:!0,class:!0,href:!0});var Dn=f(Q);dt=p(Dn,"SPAN",{});var Ln=f(dt);k(Ee.$$.fragment,Ln),Ln.forEach(t),Dn.forEach(t),Da=u(Es),_t=p(Es,"SPAN",{});var Cn=f(_t);La=r(Cn,"Fine-tune with TensorFlow"),Cn.forEach(t),Es.forEach(t),ss=u(e),Je=p(e,"P",{});var Mn=f(Je);Ca=r(Mn,"To fine-tune a model in TensorFlow is just as easy, with only a few differences."),Mn.forEach(t),as=u(e),k(V.$$.fragment,e),ns=u(e),D=p(e,"P",{});var re=f(D);Ma=r(re,"Convert your datasets to the "),gt=p(re,"CODE",{});var On=f(gt);Oa=r(On,"tf.data.Dataset"),On.forEach(t),Ia=r(re," format with "),ye=p(re,"A",{href:!0,rel:!0});var In=f(ye);$t=p(In,"CODE",{});var Nn=f($t);Na=r(Nn,"to_tf_dataset"),Nn.forEach(t),In.forEach(t),Ua=r(re,". Specify inputs and labels in "),kt=p(re,"CODE",{});var Un=f(kt);Ba=r(Un,"columns"),Un.forEach(t),Wa=r(re,", whether to shuffle the dataset order, batch size, and the data collator:"),re.forEach(t),rs=u(e),k(Se.$$.fragment,e),os=u(e),Ke=p(e,"P",{});var Bn=f(Ke);Ya=r(Bn,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Bn.forEach(t),ls=u(e),k(Te.$$.fragment,e),is=u(e),ee=p(e,"P",{});var ys=f(ee);Ha=r(ys,"Load T5 with "),Re=p(ys,"A",{href:!0});var Wn=f(Re);Za=r(Wn,"TFAutoModelForSeq2SeqLM"),Wn.forEach(t),Ja=r(ys,":"),ys.forEach(t),ps=u(e),k(xe.$$.fragment,e),fs=u(e),te=p(e,"P",{});var Ss=f(te);Ka=r(Ss,"Configure the model for training with "),ze=p(Ss,"A",{href:!0,rel:!0});var Yn=f(ze);wt=p(Yn,"CODE",{});var Hn=f(wt);Ra=r(Hn,"compile"),Hn.forEach(t),Yn.forEach(t),Xa=r(Ss,":"),Ss.forEach(t),hs=u(e),k(Ae.$$.fragment,e),ms=u(e),se=p(e,"P",{});var Ts=f(se);Ga=r(Ts,"Call "),Fe=p(Ts,"A",{href:!0,rel:!0});var Zn=f(Fe);vt=p(Zn,"CODE",{});var Jn=f(vt);Qa=r(Jn,"fit"),Jn.forEach(t),Zn.forEach(t),Va=r(Ts," to fine-tune the model:"),Ts.forEach(t),us=u(e),k(Pe.$$.fragment,e),cs=u(e),k(ae.$$.fragment,e),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(hr)),c(_,"id","translation"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#translation"),c(o,"class","relative group"),c(oe,"href","https://huggingface.co/t5-small"),c(oe,"rel","nofollow"),c(le,"href","https://huggingface.co/datasets/opus_books"),c(le,"rel","nofollow"),c(H,"id","load-opus-books-dataset"),c(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(H,"href","#load-opus-books-dataset"),c(N,"class","relative group"),c(J,"id","preprocess"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#preprocess"),c(U,"class","relative group"),c(ge,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),c(ge,"rel","nofollow"),c(Ue,"href","/docs/transformers/pr_16222/en/main_classes/data_collator#transformers.DataCollatorForSeq2Seq"),c(R,"id","finetune-with-trainer"),c(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(R,"href","#finetune-with-trainer"),c(B,"class","relative group"),c(Be,"href","/docs/transformers/pr_16222/en/model_doc/auto#transformers.AutoModelForSeq2SeqLM"),c(Ye,"href","/docs/transformers/pr_16222/en/main_classes/trainer#transformers.Seq2SeqTrainingArguments"),c(He,"href","/docs/transformers/pr_16222/en/main_classes/trainer#transformers.Seq2SeqTrainer"),c(Ze,"href","/docs/transformers/pr_16222/en/main_classes/trainer#transformers.Trainer.train"),c(Q,"id","finetune-with-tensorflow"),c(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Q,"href","#finetune-with-tensorflow"),c(W,"class","relative group"),c(ye,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.to_tf_dataset"),c(ye,"rel","nofollow"),c(Re,"href","/docs/transformers/pr_16222/en/model_doc/auto#transformers.TFAutoModelForSeq2SeqLM"),c(ze,"href","https://keras.io/api/models/model_training_apis/#compile-method"),c(ze,"rel","nofollow"),c(Fe,"href","https://keras.io/api/models/model_training_apis/#fit-method"),c(Fe,"rel","nofollow")},m(e,a){s(document.head,l),h(e,d,a),h(e,o,a),s(o,_),s(_,j),w(g,j,null),s(o,E),s(o,S),s(S,x),h(e,y,a),w(F,e,a),h(e,L,a),h(e,Le,a),s(Le,zs),h(e,St,a),h(e,C,a),s(C,As),s(C,oe),s(oe,Fs),s(C,Ps),s(C,le),s(le,Ds),s(C,Ls),h(e,Tt,a),w(Y,e,a),h(e,xt,a),h(e,N,a),s(N,H),s(H,Ve),w(ie,Ve,null),s(N,Cs),s(N,et),s(et,Ms),h(e,zt,a),h(e,Ce,a),s(Ce,Os),h(e,At,a),w(pe,e,a),h(e,Ft,a),h(e,Me,a),s(Me,Is),h(e,Pt,a),w(fe,e,a),h(e,Dt,a),h(e,Oe,a),s(Oe,Ns),h(e,Lt,a),w(he,e,a),h(e,Ct,a),h(e,Z,a),s(Z,Us),s(Z,tt),s(tt,Bs),s(Z,Ws),h(e,Mt,a),h(e,U,a),s(U,J),s(J,st),w(me,st,null),s(U,Ys),s(U,at),s(at,Hs),h(e,Ot,a),w(ue,e,a),h(e,It,a),h(e,Ie,a),s(Ie,Zs),h(e,Nt,a),w(ce,e,a),h(e,Ut,a),h(e,Ne,a),s(Ne,Js),h(e,Bt,a),h(e,M,a),s(M,nt),s(nt,Ks),s(M,Rs),s(M,rt),s(rt,Xs),s(M,Gs),s(M,de),s(de,Qs),s(de,ot),s(ot,Vs),s(de,ea),h(e,Wt,a),w(_e,e,a),h(e,Yt,a),h(e,P,a),s(P,ta),s(P,ge),s(ge,lt),s(lt,sa),s(P,aa),s(P,it),s(it,na),s(P,ra),s(P,pt),s(pt,oa),s(P,la),h(e,Ht,a),w($e,e,a),h(e,Zt,a),h(e,A,a),s(A,ia),s(A,Ue),s(Ue,pa),s(A,fa),s(A,ft),s(ft,ha),s(A,ma),s(A,ht),s(ht,ua),s(A,ca),s(A,mt),s(mt,da),s(A,_a),h(e,Jt,a),w(K,e,a),h(e,Kt,a),h(e,B,a),s(B,R),s(R,ut),w(ke,ut,null),s(B,ga),s(B,ct),s(ct,$a),h(e,Rt,a),h(e,X,a),s(X,ka),s(X,Be),s(Be,wa),s(X,va),h(e,Xt,a),w(we,e,a),h(e,Gt,a),w(G,e,a),h(e,Qt,a),h(e,We,a),s(We,ba),h(e,Vt,a),h(e,O,a),s(O,ve),s(ve,qa),s(ve,Ye),s(Ye,ja),s(ve,Ea),s(O,ya),s(O,be),s(be,Sa),s(be,He),s(He,Ta),s(be,xa),s(O,za),s(O,qe),s(qe,Aa),s(qe,Ze),s(Ze,Fa),s(qe,Pa),h(e,es,a),w(je,e,a),h(e,ts,a),h(e,W,a),s(W,Q),s(Q,dt),w(Ee,dt,null),s(W,Da),s(W,_t),s(_t,La),h(e,ss,a),h(e,Je,a),s(Je,Ca),h(e,as,a),w(V,e,a),h(e,ns,a),h(e,D,a),s(D,Ma),s(D,gt),s(gt,Oa),s(D,Ia),s(D,ye),s(ye,$t),s($t,Na),s(D,Ua),s(D,kt),s(kt,Ba),s(D,Wa),h(e,rs,a),w(Se,e,a),h(e,os,a),h(e,Ke,a),s(Ke,Ya),h(e,ls,a),w(Te,e,a),h(e,is,a),h(e,ee,a),s(ee,Ha),s(ee,Re),s(Re,Za),s(ee,Ja),h(e,ps,a),w(xe,e,a),h(e,fs,a),h(e,te,a),s(te,Ka),s(te,ze),s(ze,wt),s(wt,Ra),s(te,Xa),h(e,hs,a),w(Ae,e,a),h(e,ms,a),h(e,se,a),s(se,Ga),s(se,Fe),s(Fe,vt),s(vt,Qa),s(se,Va),h(e,us,a),w(Pe,e,a),h(e,cs,a),w(ae,e,a),ds=!0},p(e,[a]){const De={};a&2&&(De.$$scope={dirty:a,ctx:e}),Y.$set(De);const bt={};a&2&&(bt.$$scope={dirty:a,ctx:e}),K.$set(bt);const qt={};a&2&&(qt.$$scope={dirty:a,ctx:e}),G.$set(qt);const jt={};a&2&&(jt.$$scope={dirty:a,ctx:e}),V.$set(jt);const Et={};a&2&&(Et.$$scope={dirty:a,ctx:e}),ae.$set(Et)},i(e){ds||(v(g.$$.fragment,e),v(F.$$.fragment,e),v(Y.$$.fragment,e),v(ie.$$.fragment,e),v(pe.$$.fragment,e),v(fe.$$.fragment,e),v(he.$$.fragment,e),v(me.$$.fragment,e),v(ue.$$.fragment,e),v(ce.$$.fragment,e),v(_e.$$.fragment,e),v($e.$$.fragment,e),v(K.$$.fragment,e),v(ke.$$.fragment,e),v(we.$$.fragment,e),v(G.$$.fragment,e),v(je.$$.fragment,e),v(Ee.$$.fragment,e),v(V.$$.fragment,e),v(Se.$$.fragment,e),v(Te.$$.fragment,e),v(xe.$$.fragment,e),v(Ae.$$.fragment,e),v(Pe.$$.fragment,e),v(ae.$$.fragment,e),ds=!0)},o(e){b(g.$$.fragment,e),b(F.$$.fragment,e),b(Y.$$.fragment,e),b(ie.$$.fragment,e),b(pe.$$.fragment,e),b(fe.$$.fragment,e),b(he.$$.fragment,e),b(me.$$.fragment,e),b(ue.$$.fragment,e),b(ce.$$.fragment,e),b(_e.$$.fragment,e),b($e.$$.fragment,e),b(K.$$.fragment,e),b(ke.$$.fragment,e),b(we.$$.fragment,e),b(G.$$.fragment,e),b(je.$$.fragment,e),b(Ee.$$.fragment,e),b(V.$$.fragment,e),b(Se.$$.fragment,e),b(Te.$$.fragment,e),b(xe.$$.fragment,e),b(Ae.$$.fragment,e),b(Pe.$$.fragment,e),b(ae.$$.fragment,e),ds=!1},d(e){t(l),e&&t(d),e&&t(o),q(g),e&&t(y),q(F,e),e&&t(L),e&&t(Le),e&&t(St),e&&t(C),e&&t(Tt),q(Y,e),e&&t(xt),e&&t(N),q(ie),e&&t(zt),e&&t(Ce),e&&t(At),q(pe,e),e&&t(Ft),e&&t(Me),e&&t(Pt),q(fe,e),e&&t(Dt),e&&t(Oe),e&&t(Lt),q(he,e),e&&t(Ct),e&&t(Z),e&&t(Mt),e&&t(U),q(me),e&&t(Ot),q(ue,e),e&&t(It),e&&t(Ie),e&&t(Nt),q(ce,e),e&&t(Ut),e&&t(Ne),e&&t(Bt),e&&t(M),e&&t(Wt),q(_e,e),e&&t(Yt),e&&t(P),e&&t(Ht),q($e,e),e&&t(Zt),e&&t(A),e&&t(Jt),q(K,e),e&&t(Kt),e&&t(B),q(ke),e&&t(Rt),e&&t(X),e&&t(Xt),q(we,e),e&&t(Gt),q(G,e),e&&t(Qt),e&&t(We),e&&t(Vt),e&&t(O),e&&t(es),q(je,e),e&&t(ts),e&&t(W),q(Ee),e&&t(ss),e&&t(Je),e&&t(as),q(V,e),e&&t(ns),e&&t(D),e&&t(rs),q(Se,e),e&&t(os),e&&t(Ke),e&&t(ls),q(Te,e),e&&t(is),e&&t(ee),e&&t(ps),q(xe,e),e&&t(fs),e&&t(te),e&&t(hs),q(Ae,e),e&&t(ms),e&&t(se),e&&t(us),q(Pe,e),e&&t(cs),q(ae,e)}}}const hr={local:"translation",sections:[{local:"load-opus-books-dataset",title:"Load OPUS Books dataset"},{local:"preprocess",title:"Preprocess"},{local:"finetune-with-trainer",title:"Fine-tune with Trainer"},{local:"finetune-with-tensorflow",title:"Fine-tune with TensorFlow"}],title:"Translation"};function mr(T,l,d){let{fw:o}=l;return T.$$set=_=>{"fw"in _&&d(0,o=_.fw)},[o]}class kr extends Gn{constructor(l){super();Qn(this,l,mr,fr,Vn,{fw:0})}}export{kr as default,hr as metadata};
