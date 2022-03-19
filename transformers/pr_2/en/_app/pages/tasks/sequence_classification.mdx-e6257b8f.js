import{S as er,i as tr,s as ar,e as i,k as h,w as b,t as o,M as sr,c as p,d as a,m,a as f,x as v,h as r,b as u,F as t,g as c,y as k,q as y,o as j,B as E,L as Xo}from"../../chunks/vendor-6b77c823.js";import{T as xt}from"../../chunks/Tip-39098574.js";import{Y as or}from"../../chunks/Youtube-5c6e11e6.js";import{I as zt}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as D}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as rr,M as Zo}from"../../chunks/Markdown-4489c441.js";function nr(q){let n,d,l,_,g;return{c(){n=i("p"),d=o("See the text classification "),l=i("a"),_=o("task page"),g=o(" for more information about other forms of text classification and their associated models, datasets, and metrics."),this.h()},l($){n=p($,"P",{});var w=f(n);d=r(w,"See the text classification "),l=p(w,"A",{href:!0,rel:!0});var T=f(l);_=r(T,"task page"),T.forEach(a),g=r(w," for more information about other forms of text classification and their associated models, datasets, and metrics."),w.forEach(a),this.h()},h(){u(l,"href","https://huggingface.co/tasks/text-classification"),u(l,"rel","nofollow")},m($,w){c($,n,w),t(n,d),t(n,l),t(l,_),t(n,g)},d($){$&&a(n)}}}function lr(q){let n,d;return n=new D({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorWithPadding(tokenizer=tokenizer)`}}),{c(){b(n.$$.fragment)},l(l){v(n.$$.fragment,l)},m(l,_){k(n,l,_),d=!0},p:Xo,i(l){d||(y(n.$$.fragment,l),d=!0)},o(l){j(n.$$.fragment,l),d=!1},d(l){E(n,l)}}}function ir(q){let n,d;return n=new Zo({props:{$$slots:{default:[lr]},$$scope:{ctx:q}}}),{c(){b(n.$$.fragment)},l(l){v(n.$$.fragment,l)},m(l,_){k(n,l,_),d=!0},p(l,_){const g={};_&2&&(g.$$scope={dirty:_,ctx:l}),n.$set(g)},i(l){d||(y(n.$$.fragment,l),d=!0)},o(l){j(n.$$.fragment,l),d=!1},d(l){E(n,l)}}}function pr(q){let n,d;return n=new D({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer=tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorWithPadding(tokenizer=tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){b(n.$$.fragment)},l(l){v(n.$$.fragment,l)},m(l,_){k(n,l,_),d=!0},p:Xo,i(l){d||(y(n.$$.fragment,l),d=!0)},o(l){j(n.$$.fragment,l),d=!1},d(l){E(n,l)}}}function fr(q){let n,d;return n=new Zo({props:{$$slots:{default:[pr]},$$scope:{ctx:q}}}),{c(){b(n.$$.fragment)},l(l){v(n.$$.fragment,l)},m(l,_){k(n,l,_),d=!0},p(l,_){const g={};_&2&&(g.$$scope={dirty:_,ctx:l}),n.$set(g)},i(l){d||(y(n.$$.fragment,l),d=!0)},o(l){j(n.$$.fragment,l),d=!1},d(l){E(n,l)}}}function cr(q){let n,d,l,_,g,$,w,T;return{c(){n=i("p"),d=o("If you aren\u2019t familiar with fine-tuning a model with the "),l=i("a"),_=o("Trainer"),g=o(", take a look at the basic tutorial "),$=i("a"),w=o("here"),T=o("!"),this.h()},l(z){n=p(z,"P",{});var x=f(n);d=r(x,"If you aren\u2019t familiar with fine-tuning a model with the "),l=p(x,"A",{href:!0});var A=f(l);_=r(A,"Trainer"),A.forEach(a),g=r(x,", take a look at the basic tutorial "),$=p(x,"A",{href:!0});var S=f($);w=r(S,"here"),S.forEach(a),T=r(x,"!"),x.forEach(a),this.h()},h(){u(l,"href","/docs/transformers/pr_2/en/main_classes/trainer#transformers.Trainer"),u($,"href","../training#finetune-with-trainer")},m(z,x){c(z,n,x),t(n,d),t(n,l),t(l,_),t(n,g),t(n,$),t($,w),t(n,T)},d(z){z&&a(n)}}}function hr(q){let n,d,l,_,g,$,w;return{c(){n=i("p"),d=i("a"),l=o("Trainer"),_=o(" will apply dynamic padding by default when you pass "),g=i("code"),$=o("tokenizer"),w=o(" to it. In this case, you don\u2019t need to specify a data collator explicitly."),this.h()},l(T){n=p(T,"P",{});var z=f(n);d=p(z,"A",{href:!0});var x=f(d);l=r(x,"Trainer"),x.forEach(a),_=r(z," will apply dynamic padding by default when you pass "),g=p(z,"CODE",{});var A=f(g);$=r(A,"tokenizer"),A.forEach(a),w=r(z," to it. In this case, you don\u2019t need to specify a data collator explicitly."),z.forEach(a),this.h()},h(){u(d,"href","/docs/transformers/pr_2/en/main_classes/trainer#transformers.Trainer")},m(T,z){c(T,n,z),t(n,d),t(d,l),t(n,_),t(n,g),t(g,$),t(n,w)},d(T){T&&a(n)}}}function mr(q){let n,d,l,_,g;return{c(){n=i("p"),d=o("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),l=i("a"),_=o("here"),g=o("!"),this.h()},l($){n=p($,"P",{});var w=f(n);d=r(w,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),l=p(w,"A",{href:!0});var T=f(l);_=r(T,"here"),T.forEach(a),g=r(w,"!"),w.forEach(a),this.h()},h(){u(l,"href","../training#finetune-with-keras")},m($,w){c($,n,w),t(n,d),t(n,l),t(l,_),t(n,g)},d($){$&&a(n)}}}function ur(q){let n,d,l,_,g,$,w,T;return{c(){n=i("p"),d=o(`For a more in-depth example of how to fine-tune a model for text classification, take a look at the corresponding
`),l=i("a"),_=o("PyTorch notebook"),g=o(`
or `),$=i("a"),w=o("TensorFlow notebook"),T=o("."),this.h()},l(z){n=p(z,"P",{});var x=f(n);d=r(x,`For a more in-depth example of how to fine-tune a model for text classification, take a look at the corresponding
`),l=p(x,"A",{href:!0,rel:!0});var A=f(l);_=r(A,"PyTorch notebook"),A.forEach(a),g=r(x,`
or `),$=p(x,"A",{href:!0,rel:!0});var S=f($);w=r(S,"TensorFlow notebook"),S.forEach(a),T=r(x,"."),x.forEach(a),this.h()},h(){u(l,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/master/examples/text_classification.ipynb"),u(l,"rel","nofollow"),u($,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/master/examples/text_classification-tf.ipynb"),u($,"rel","nofollow")},m(z,x){c(z,n,x),t(n,d),t(n,l),t(l,_),t(n,g),t(n,$),t($,w),t(n,T)},d(z){z&&a(n)}}}function dr(q){let n,d,l,_,g,$,w,T,z,x,A,S,Me,Aa,qt,I,Ca,fe,Da,Pa,ce,Fa,Sa,At,H,Ct,N,Y,Xe,he,Ia,Ze,Ma,Dt,Le,La,Pt,me,Ft,Oe,Oa,St,ue,It,Ne,Na,Mt,G,We,et,Wa,Ba,Ra,M,tt,Ua,Ha,at,Ya,Ga,st,Ka,Va,Lt,W,K,ot,de,Ja,rt,Qa,Ot,V,Xa,nt,Za,es,Nt,_e,Wt,J,ts,lt,as,ss,Bt,$e,Rt,P,os,ge,it,rs,ns,pt,ls,is,ft,ps,fs,Ut,we,Ht,C,cs,Be,hs,ms,ct,us,ds,ht,_s,$s,mt,gs,ws,Yt,Q,Gt,B,X,ut,be,bs,dt,vs,Kt,Z,ks,Re,ys,js,Vt,ve,Jt,ee,Qt,Ue,Es,Xt,L,ke,Ts,He,xs,zs,qs,ye,As,Ye,Cs,Ds,Ps,je,Fs,Ge,Ss,Is,Zt,Ee,ea,te,ta,R,ae,_t,Te,Ms,$t,Ls,aa,Ke,Os,sa,se,oa,F,Ns,gt,Ws,Bs,xe,wt,Rs,Us,bt,Hs,Ys,ra,ze,na,Ve,Gs,la,qe,ia,oe,Ks,Je,Vs,Js,pa,Ae,fa,re,Qs,Ce,vt,Xs,Zs,ca,De,ha,ne,eo,Pe,kt,to,ao,ma,Fe,ua,le,da;return $=new zt({}),A=new or({props:{id:"leNG9fN9FQU"}}),H=new xt({props:{$$slots:{default:[nr]},$$scope:{ctx:q}}}),he=new zt({}),me=new D({props:{code:`from datasets import load_dataset

imdb = load_dataset("imdb")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>imdb = load_dataset(<span class="hljs-string">&quot;imdb&quot;</span>)`}}),ue=new D({props:{code:'imdb["test"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>imdb[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-number">0</span>]
{
    <span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-number">0</span>,
    <span class="hljs-string">&quot;text&quot;</span>: <span class="hljs-string">&quot;I love sci-fi and am willing to put up with a lot. Sci-fi movies/TV are usually underfunded, under-appreciated and misunderstood. I tried to like this, I really did, but it is to good TV sci-fi as Babylon 5 is to Star Trek (the original). Silly prosthetics, cheap cardboard sets, stilted dialogues, CG that doesn&#x27;t match the background, and painfully one-dimensional characters cannot be overcome with a &#x27;sci-fi&#x27; setting. (I&#x27;m sure there are those of you out there who think Babylon 5 is good sci-fi TV. It&#x27;s not. It&#x27;s clich\xE9d and uninspiring.) While US viewers might like emotion and character development, sci-fi is a genre that does not take itself seriously (cf. Star Trek). It may treat important issues, yet not as a serious philosophy. It&#x27;s really difficult to care about the characters here as they are not simply foolish, just missing a spark of life. Their actions and reactions are wooden and predictable, often painful to watch. The makers of Earth KNOW it&#x27;s rubbish as they have to always say \\&quot;Gene Roddenberry&#x27;s Earth...\\&quot; otherwise people would not continue watching. Roddenberry&#x27;s ashes must be turning in their orbit as this dull, cheap, poorly edited (watching it without advert breaks really brings this home) trudging Trabant of a show lumbers into space. Spoiler. So, kill off a main character. And then bring him back as another actor. Jeeez! Dallas all over again.&quot;</span>,
}`}}),de=new zt({}),_e=new D({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),$e=new D({props:{code:`def preprocess_function(examples):
    return tokenizer(examples["text"], truncation=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> tokenizer(examples[<span class="hljs-string">&quot;text&quot;</span>], truncation=<span class="hljs-literal">True</span>)`}}),we=new D({props:{code:"tokenized_imdb = imdb.map(preprocess_function, batched=True)",highlighted:'tokenized_imdb = imdb.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)'}}),Q=new rr({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[fr],pytorch:[ir]},$$scope:{ctx:q}}}),be=new zt({}),ve=new D({props:{code:`from transformers import AutoModelForSequenceClassification, TrainingArguments, Trainer

model = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),ee=new xt({props:{$$slots:{default:[cr]},$$scope:{ctx:q}}}),Ee=new D({props:{code:`training_args = TrainingArguments(
    output_dir="./results",
    learning_rate=2e-5,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
    num_train_epochs=5,
    weight_decay=0.01,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_imdb["train"],
    eval_dataset=tokenized_imdb["test"],
    tokenizer=tokenizer,
    data_collator=data_collator,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">2e-5</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    per_device_eval_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">5</span>,
<span class="hljs-meta">... </span>    weight_decay=<span class="hljs-number">0.01</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=tokenized_imdb[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=tokenizer,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),te=new xt({props:{$$slots:{default:[hr]},$$scope:{ctx:q}}}),Te=new zt({}),se=new xt({props:{$$slots:{default:[mr]},$$scope:{ctx:q}}}),ze=new D({props:{code:`tf_train_set = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_set = tokenized_imdb["test"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tf_train_set = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tf_validation_set = tokenized_imdb[<span class="hljs-string">&quot;test&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)`}}),qe=new D({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">16</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_epochs = <span class="hljs-number">5</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
<span class="hljs-meta">&gt;&gt;&gt; </span>total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),Ae=new D({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),De=new D({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),Fe=new D({props:{code:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=3)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">3</span>)'}}),le=new xt({props:{$$slots:{default:[ur]},$$scope:{ctx:q}}}),{c(){n=i("meta"),d=h(),l=i("h1"),_=i("a"),g=i("span"),b($.$$.fragment),w=h(),T=i("span"),z=o("Text classification"),x=h(),b(A.$$.fragment),S=h(),Me=i("p"),Aa=o("Text classification is a common NLP task that assigns a label or class to text. There are many practical applications of text classification widely used in production by some of today\u2019s largest companies. One of the most popular forms of text classification is sentiment analysis, which assigns a label like positive, negative, or neutral to a sequence of text."),qt=h(),I=i("p"),Ca=o("This guide will show you how to fine-tune "),fe=i("a"),Da=o("DistilBERT"),Pa=o(" on the "),ce=i("a"),Fa=o("IMDb"),Sa=o(" dataset to determine whether a movie review is positive or negative."),At=h(),b(H.$$.fragment),Ct=h(),N=i("h2"),Y=i("a"),Xe=i("span"),b(he.$$.fragment),Ia=h(),Ze=i("span"),Ma=o("Load IMDb dataset"),Dt=h(),Le=i("p"),La=o("Load the IMDb dataset from the \u{1F917} Datasets library:"),Pt=h(),b(me.$$.fragment),Ft=h(),Oe=i("p"),Oa=o("Then take a look at an example:"),St=h(),b(ue.$$.fragment),It=h(),Ne=i("p"),Na=o("There are two fields in this dataset:"),Mt=h(),G=i("ul"),We=i("li"),et=i("code"),Wa=o("text"),Ba=o(": a string containing the text of the movie review."),Ra=h(),M=i("li"),tt=i("code"),Ua=o("label"),Ha=o(": a value that can either be "),at=i("code"),Ya=o("0"),Ga=o(" for a negative review or "),st=i("code"),Ka=o("1"),Va=o(" for a positive review."),Lt=h(),W=i("h2"),K=i("a"),ot=i("span"),b(de.$$.fragment),Ja=h(),rt=i("span"),Qa=o("Preprocess"),Ot=h(),V=i("p"),Xa=o("Load the DistilBERT tokenizer to process the "),nt=i("code"),Za=o("text"),es=o(" field:"),Nt=h(),b(_e.$$.fragment),Wt=h(),J=i("p"),ts=o("Create a preprocessing function to tokenize "),lt=i("code"),as=o("text"),ss=o(" and truncate sequences to be no longer than DistilBERT\u2019s maximum input length:"),Bt=h(),b($e.$$.fragment),Rt=h(),P=i("p"),os=o("Use \u{1F917} Datasets "),ge=i("a"),it=i("code"),rs=o("map"),ns=o(" function to apply the preprocessing function over the entire dataset. You can speed up the "),pt=i("code"),ls=o("map"),is=o(" function by setting "),ft=i("code"),ps=o("batched=True"),fs=o(" to process multiple elements of the dataset at once:"),Ut=h(),b(we.$$.fragment),Ht=h(),C=i("p"),cs=o("Use "),Be=i("a"),hs=o("DataCollatorWithPadding"),ms=o(" to create a batch of examples. It will also "),ct=i("em"),us=o("dynamically pad"),ds=o(" your text to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ht=i("code"),_s=o("tokenizer"),$s=o(" function by setting "),mt=i("code"),gs=o("padding=True"),ws=o(", dynamic padding is more efficient."),Yt=h(),b(Q.$$.fragment),Gt=h(),B=i("h2"),X=i("a"),ut=i("span"),b(be.$$.fragment),bs=h(),dt=i("span"),vs=o("Fine-tune with Trainer"),Kt=h(),Z=i("p"),ks=o("Load DistilBERT with "),Re=i("a"),ys=o("AutoModelForSequenceClassification"),js=o(" along with the number of expected labels:"),Vt=h(),b(ve.$$.fragment),Jt=h(),b(ee.$$.fragment),Qt=h(),Ue=i("p"),Es=o("At this point, only three steps remain:"),Xt=h(),L=i("ol"),ke=i("li"),Ts=o("Define your training hyperparameters in "),He=i("a"),xs=o("TrainingArguments"),zs=o("."),qs=h(),ye=i("li"),As=o("Pass the training arguments to "),Ye=i("a"),Cs=o("Trainer"),Ds=o(" along with the model, dataset, tokenizer, and data collator."),Ps=h(),je=i("li"),Fs=o("Call "),Ge=i("a"),Ss=o("train()"),Is=o(" to fine-tune your model."),Zt=h(),b(Ee.$$.fragment),ea=h(),b(te.$$.fragment),ta=h(),R=i("h2"),ae=i("a"),_t=i("span"),b(Te.$$.fragment),Ms=h(),$t=i("span"),Ls=o("Fine-tune with TensorFlow"),aa=h(),Ke=i("p"),Os=o("To fine-tune a model in TensorFlow is just as easy, with only a few differences."),sa=h(),b(se.$$.fragment),oa=h(),F=i("p"),Ns=o("Convert your datasets to the "),gt=i("code"),Ws=o("tf.data.Dataset"),Bs=o(" format with "),xe=i("a"),wt=i("code"),Rs=o("to_tf_dataset"),Us=o(". Specify inputs and labels in "),bt=i("code"),Hs=o("columns"),Ys=o(", whether to shuffle the dataset order, batch size, and the data collator:"),ra=h(),b(ze.$$.fragment),na=h(),Ve=i("p"),Gs=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),la=h(),b(qe.$$.fragment),ia=h(),oe=i("p"),Ks=o("Load DistilBERT with "),Je=i("a"),Vs=o("TFAutoModelForSequenceClassification"),Js=o(" along with the number of expected labels:"),pa=h(),b(Ae.$$.fragment),fa=h(),re=i("p"),Qs=o("Configure the model for training with "),Ce=i("a"),vt=i("code"),Xs=o("compile"),Zs=o(":"),ca=h(),b(De.$$.fragment),ha=h(),ne=i("p"),eo=o("Call "),Pe=i("a"),kt=i("code"),to=o("fit"),ao=o(" to fine-tune the model:"),ma=h(),b(Fe.$$.fragment),ua=h(),b(le.$$.fragment),this.h()},l(e){const s=sr('[data-svelte="svelte-1phssyn"]',document.head);n=p(s,"META",{name:!0,content:!0}),s.forEach(a),d=m(e),l=p(e,"H1",{class:!0});var Se=f(l);_=p(Se,"A",{id:!0,class:!0,href:!0});var yt=f(_);g=p(yt,"SPAN",{});var jt=f(g);v($.$$.fragment,jt),jt.forEach(a),yt.forEach(a),w=m(Se),T=p(Se,"SPAN",{});var Et=f(T);z=r(Et,"Text classification"),Et.forEach(a),Se.forEach(a),x=m(e),v(A.$$.fragment,e),S=m(e),Me=p(e,"P",{});var Tt=f(Me);Aa=r(Tt,"Text classification is a common NLP task that assigns a label or class to text. There are many practical applications of text classification widely used in production by some of today\u2019s largest companies. One of the most popular forms of text classification is sentiment analysis, which assigns a label like positive, negative, or neutral to a sequence of text."),Tt.forEach(a),qt=m(e),I=p(e,"P",{});var U=f(I);Ca=r(U,"This guide will show you how to fine-tune "),fe=p(U,"A",{href:!0,rel:!0});var oo=f(fe);Da=r(oo,"DistilBERT"),oo.forEach(a),Pa=r(U," on the "),ce=p(U,"A",{href:!0,rel:!0});var ro=f(ce);Fa=r(ro,"IMDb"),ro.forEach(a),Sa=r(U," dataset to determine whether a movie review is positive or negative."),U.forEach(a),At=m(e),v(H.$$.fragment,e),Ct=m(e),N=p(e,"H2",{class:!0});var _a=f(N);Y=p(_a,"A",{id:!0,class:!0,href:!0});var no=f(Y);Xe=p(no,"SPAN",{});var lo=f(Xe);v(he.$$.fragment,lo),lo.forEach(a),no.forEach(a),Ia=m(_a),Ze=p(_a,"SPAN",{});var io=f(Ze);Ma=r(io,"Load IMDb dataset"),io.forEach(a),_a.forEach(a),Dt=m(e),Le=p(e,"P",{});var po=f(Le);La=r(po,"Load the IMDb dataset from the \u{1F917} Datasets library:"),po.forEach(a),Pt=m(e),v(me.$$.fragment,e),Ft=m(e),Oe=p(e,"P",{});var fo=f(Oe);Oa=r(fo,"Then take a look at an example:"),fo.forEach(a),St=m(e),v(ue.$$.fragment,e),It=m(e),Ne=p(e,"P",{});var co=f(Ne);Na=r(co,"There are two fields in this dataset:"),co.forEach(a),Mt=m(e),G=p(e,"UL",{});var $a=f(G);We=p($a,"LI",{});var so=f(We);et=p(so,"CODE",{});var ho=f(et);Wa=r(ho,"text"),ho.forEach(a),Ba=r(so,": a string containing the text of the movie review."),so.forEach(a),Ra=m($a),M=p($a,"LI",{});var Ie=f(M);tt=p(Ie,"CODE",{});var mo=f(tt);Ua=r(mo,"label"),mo.forEach(a),Ha=r(Ie,": a value that can either be "),at=p(Ie,"CODE",{});var uo=f(at);Ya=r(uo,"0"),uo.forEach(a),Ga=r(Ie," for a negative review or "),st=p(Ie,"CODE",{});var _o=f(st);Ka=r(_o,"1"),_o.forEach(a),Va=r(Ie," for a positive review."),Ie.forEach(a),$a.forEach(a),Lt=m(e),W=p(e,"H2",{class:!0});var ga=f(W);K=p(ga,"A",{id:!0,class:!0,href:!0});var $o=f(K);ot=p($o,"SPAN",{});var go=f(ot);v(de.$$.fragment,go),go.forEach(a),$o.forEach(a),Ja=m(ga),rt=p(ga,"SPAN",{});var wo=f(rt);Qa=r(wo,"Preprocess"),wo.forEach(a),ga.forEach(a),Ot=m(e),V=p(e,"P",{});var wa=f(V);Xa=r(wa,"Load the DistilBERT tokenizer to process the "),nt=p(wa,"CODE",{});var bo=f(nt);Za=r(bo,"text"),bo.forEach(a),es=r(wa," field:"),wa.forEach(a),Nt=m(e),v(_e.$$.fragment,e),Wt=m(e),J=p(e,"P",{});var ba=f(J);ts=r(ba,"Create a preprocessing function to tokenize "),lt=p(ba,"CODE",{});var vo=f(lt);as=r(vo,"text"),vo.forEach(a),ss=r(ba," and truncate sequences to be no longer than DistilBERT\u2019s maximum input length:"),ba.forEach(a),Bt=m(e),v($e.$$.fragment,e),Rt=m(e),P=p(e,"P",{});var ie=f(P);os=r(ie,"Use \u{1F917} Datasets "),ge=p(ie,"A",{href:!0,rel:!0});var ko=f(ge);it=p(ko,"CODE",{});var yo=f(it);rs=r(yo,"map"),yo.forEach(a),ko.forEach(a),ns=r(ie," function to apply the preprocessing function over the entire dataset. You can speed up the "),pt=p(ie,"CODE",{});var jo=f(pt);ls=r(jo,"map"),jo.forEach(a),is=r(ie," function by setting "),ft=p(ie,"CODE",{});var Eo=f(ft);ps=r(Eo,"batched=True"),Eo.forEach(a),fs=r(ie," to process multiple elements of the dataset at once:"),ie.forEach(a),Ut=m(e),v(we.$$.fragment,e),Ht=m(e),C=p(e,"P",{});var O=f(C);cs=r(O,"Use "),Be=p(O,"A",{href:!0});var To=f(Be);hs=r(To,"DataCollatorWithPadding"),To.forEach(a),ms=r(O," to create a batch of examples. It will also "),ct=p(O,"EM",{});var xo=f(ct);us=r(xo,"dynamically pad"),xo.forEach(a),ds=r(O," your text to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ht=p(O,"CODE",{});var zo=f(ht);_s=r(zo,"tokenizer"),zo.forEach(a),$s=r(O," function by setting "),mt=p(O,"CODE",{});var qo=f(mt);gs=r(qo,"padding=True"),qo.forEach(a),ws=r(O,", dynamic padding is more efficient."),O.forEach(a),Yt=m(e),v(Q.$$.fragment,e),Gt=m(e),B=p(e,"H2",{class:!0});var va=f(B);X=p(va,"A",{id:!0,class:!0,href:!0});var Ao=f(X);ut=p(Ao,"SPAN",{});var Co=f(ut);v(be.$$.fragment,Co),Co.forEach(a),Ao.forEach(a),bs=m(va),dt=p(va,"SPAN",{});var Do=f(dt);vs=r(Do,"Fine-tune with Trainer"),Do.forEach(a),va.forEach(a),Kt=m(e),Z=p(e,"P",{});var ka=f(Z);ks=r(ka,"Load DistilBERT with "),Re=p(ka,"A",{href:!0});var Po=f(Re);ys=r(Po,"AutoModelForSequenceClassification"),Po.forEach(a),js=r(ka," along with the number of expected labels:"),ka.forEach(a),Vt=m(e),v(ve.$$.fragment,e),Jt=m(e),v(ee.$$.fragment,e),Qt=m(e),Ue=p(e,"P",{});var Fo=f(Ue);Es=r(Fo,"At this point, only three steps remain:"),Fo.forEach(a),Xt=m(e),L=p(e,"OL",{});var Qe=f(L);ke=p(Qe,"LI",{});var ya=f(ke);Ts=r(ya,"Define your training hyperparameters in "),He=p(ya,"A",{href:!0});var So=f(He);xs=r(So,"TrainingArguments"),So.forEach(a),zs=r(ya,"."),ya.forEach(a),qs=m(Qe),ye=p(Qe,"LI",{});var ja=f(ye);As=r(ja,"Pass the training arguments to "),Ye=p(ja,"A",{href:!0});var Io=f(Ye);Cs=r(Io,"Trainer"),Io.forEach(a),Ds=r(ja," along with the model, dataset, tokenizer, and data collator."),ja.forEach(a),Ps=m(Qe),je=p(Qe,"LI",{});var Ea=f(je);Fs=r(Ea,"Call "),Ge=p(Ea,"A",{href:!0});var Mo=f(Ge);Ss=r(Mo,"train()"),Mo.forEach(a),Is=r(Ea," to fine-tune your model."),Ea.forEach(a),Qe.forEach(a),Zt=m(e),v(Ee.$$.fragment,e),ea=m(e),v(te.$$.fragment,e),ta=m(e),R=p(e,"H2",{class:!0});var Ta=f(R);ae=p(Ta,"A",{id:!0,class:!0,href:!0});var Lo=f(ae);_t=p(Lo,"SPAN",{});var Oo=f(_t);v(Te.$$.fragment,Oo),Oo.forEach(a),Lo.forEach(a),Ms=m(Ta),$t=p(Ta,"SPAN",{});var No=f($t);Ls=r(No,"Fine-tune with TensorFlow"),No.forEach(a),Ta.forEach(a),aa=m(e),Ke=p(e,"P",{});var Wo=f(Ke);Os=r(Wo,"To fine-tune a model in TensorFlow is just as easy, with only a few differences."),Wo.forEach(a),sa=m(e),v(se.$$.fragment,e),oa=m(e),F=p(e,"P",{});var pe=f(F);Ns=r(pe,"Convert your datasets to the "),gt=p(pe,"CODE",{});var Bo=f(gt);Ws=r(Bo,"tf.data.Dataset"),Bo.forEach(a),Bs=r(pe," format with "),xe=p(pe,"A",{href:!0,rel:!0});var Ro=f(xe);wt=p(Ro,"CODE",{});var Uo=f(wt);Rs=r(Uo,"to_tf_dataset"),Uo.forEach(a),Ro.forEach(a),Us=r(pe,". Specify inputs and labels in "),bt=p(pe,"CODE",{});var Ho=f(bt);Hs=r(Ho,"columns"),Ho.forEach(a),Ys=r(pe,", whether to shuffle the dataset order, batch size, and the data collator:"),pe.forEach(a),ra=m(e),v(ze.$$.fragment,e),na=m(e),Ve=p(e,"P",{});var Yo=f(Ve);Gs=r(Yo,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Yo.forEach(a),la=m(e),v(qe.$$.fragment,e),ia=m(e),oe=p(e,"P",{});var xa=f(oe);Ks=r(xa,"Load DistilBERT with "),Je=p(xa,"A",{href:!0});var Go=f(Je);Vs=r(Go,"TFAutoModelForSequenceClassification"),Go.forEach(a),Js=r(xa," along with the number of expected labels:"),xa.forEach(a),pa=m(e),v(Ae.$$.fragment,e),fa=m(e),re=p(e,"P",{});var za=f(re);Qs=r(za,"Configure the model for training with "),Ce=p(za,"A",{href:!0,rel:!0});var Ko=f(Ce);vt=p(Ko,"CODE",{});var Vo=f(vt);Xs=r(Vo,"compile"),Vo.forEach(a),Ko.forEach(a),Zs=r(za,":"),za.forEach(a),ca=m(e),v(De.$$.fragment,e),ha=m(e),ne=p(e,"P",{});var qa=f(ne);eo=r(qa,"Call "),Pe=p(qa,"A",{href:!0,rel:!0});var Jo=f(Pe);kt=p(Jo,"CODE",{});var Qo=f(kt);to=r(Qo,"fit"),Qo.forEach(a),Jo.forEach(a),ao=r(qa," to fine-tune the model:"),qa.forEach(a),ma=m(e),v(Fe.$$.fragment,e),ua=m(e),v(le.$$.fragment,e),this.h()},h(){u(n,"name","hf:doc:metadata"),u(n,"content",JSON.stringify(_r)),u(_,"id","text-classification"),u(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_,"href","#text-classification"),u(l,"class","relative group"),u(fe,"href","https://huggingface.co/distilbert-base-uncased"),u(fe,"rel","nofollow"),u(ce,"href","https://huggingface.co/datasets/imdb"),u(ce,"rel","nofollow"),u(Y,"id","load-imdb-dataset"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#load-imdb-dataset"),u(N,"class","relative group"),u(K,"id","preprocess"),u(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(K,"href","#preprocess"),u(W,"class","relative group"),u(ge,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),u(ge,"rel","nofollow"),u(Be,"href","/docs/transformers/pr_2/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),u(X,"id","finetune-with-trainer"),u(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(X,"href","#finetune-with-trainer"),u(B,"class","relative group"),u(Re,"href","/docs/transformers/pr_2/en/model_doc/auto#transformers.AutoModelForSequenceClassification"),u(He,"href","/docs/transformers/pr_2/en/main_classes/trainer#transformers.TrainingArguments"),u(Ye,"href","/docs/transformers/pr_2/en/main_classes/trainer#transformers.Trainer"),u(Ge,"href","/docs/transformers/pr_2/en/main_classes/trainer#transformers.Trainer.train"),u(ae,"id","finetune-with-tensorflow"),u(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ae,"href","#finetune-with-tensorflow"),u(R,"class","relative group"),u(xe,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.to_tf_dataset"),u(xe,"rel","nofollow"),u(Je,"href","/docs/transformers/pr_2/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification"),u(Ce,"href","https://keras.io/api/models/model_training_apis/#compile-method"),u(Ce,"rel","nofollow"),u(Pe,"href","https://keras.io/api/models/model_training_apis/#fit-method"),u(Pe,"rel","nofollow")},m(e,s){t(document.head,n),c(e,d,s),c(e,l,s),t(l,_),t(_,g),k($,g,null),t(l,w),t(l,T),t(T,z),c(e,x,s),k(A,e,s),c(e,S,s),c(e,Me,s),t(Me,Aa),c(e,qt,s),c(e,I,s),t(I,Ca),t(I,fe),t(fe,Da),t(I,Pa),t(I,ce),t(ce,Fa),t(I,Sa),c(e,At,s),k(H,e,s),c(e,Ct,s),c(e,N,s),t(N,Y),t(Y,Xe),k(he,Xe,null),t(N,Ia),t(N,Ze),t(Ze,Ma),c(e,Dt,s),c(e,Le,s),t(Le,La),c(e,Pt,s),k(me,e,s),c(e,Ft,s),c(e,Oe,s),t(Oe,Oa),c(e,St,s),k(ue,e,s),c(e,It,s),c(e,Ne,s),t(Ne,Na),c(e,Mt,s),c(e,G,s),t(G,We),t(We,et),t(et,Wa),t(We,Ba),t(G,Ra),t(G,M),t(M,tt),t(tt,Ua),t(M,Ha),t(M,at),t(at,Ya),t(M,Ga),t(M,st),t(st,Ka),t(M,Va),c(e,Lt,s),c(e,W,s),t(W,K),t(K,ot),k(de,ot,null),t(W,Ja),t(W,rt),t(rt,Qa),c(e,Ot,s),c(e,V,s),t(V,Xa),t(V,nt),t(nt,Za),t(V,es),c(e,Nt,s),k(_e,e,s),c(e,Wt,s),c(e,J,s),t(J,ts),t(J,lt),t(lt,as),t(J,ss),c(e,Bt,s),k($e,e,s),c(e,Rt,s),c(e,P,s),t(P,os),t(P,ge),t(ge,it),t(it,rs),t(P,ns),t(P,pt),t(pt,ls),t(P,is),t(P,ft),t(ft,ps),t(P,fs),c(e,Ut,s),k(we,e,s),c(e,Ht,s),c(e,C,s),t(C,cs),t(C,Be),t(Be,hs),t(C,ms),t(C,ct),t(ct,us),t(C,ds),t(C,ht),t(ht,_s),t(C,$s),t(C,mt),t(mt,gs),t(C,ws),c(e,Yt,s),k(Q,e,s),c(e,Gt,s),c(e,B,s),t(B,X),t(X,ut),k(be,ut,null),t(B,bs),t(B,dt),t(dt,vs),c(e,Kt,s),c(e,Z,s),t(Z,ks),t(Z,Re),t(Re,ys),t(Z,js),c(e,Vt,s),k(ve,e,s),c(e,Jt,s),k(ee,e,s),c(e,Qt,s),c(e,Ue,s),t(Ue,Es),c(e,Xt,s),c(e,L,s),t(L,ke),t(ke,Ts),t(ke,He),t(He,xs),t(ke,zs),t(L,qs),t(L,ye),t(ye,As),t(ye,Ye),t(Ye,Cs),t(ye,Ds),t(L,Ps),t(L,je),t(je,Fs),t(je,Ge),t(Ge,Ss),t(je,Is),c(e,Zt,s),k(Ee,e,s),c(e,ea,s),k(te,e,s),c(e,ta,s),c(e,R,s),t(R,ae),t(ae,_t),k(Te,_t,null),t(R,Ms),t(R,$t),t($t,Ls),c(e,aa,s),c(e,Ke,s),t(Ke,Os),c(e,sa,s),k(se,e,s),c(e,oa,s),c(e,F,s),t(F,Ns),t(F,gt),t(gt,Ws),t(F,Bs),t(F,xe),t(xe,wt),t(wt,Rs),t(F,Us),t(F,bt),t(bt,Hs),t(F,Ys),c(e,ra,s),k(ze,e,s),c(e,na,s),c(e,Ve,s),t(Ve,Gs),c(e,la,s),k(qe,e,s),c(e,ia,s),c(e,oe,s),t(oe,Ks),t(oe,Je),t(Je,Vs),t(oe,Js),c(e,pa,s),k(Ae,e,s),c(e,fa,s),c(e,re,s),t(re,Qs),t(re,Ce),t(Ce,vt),t(vt,Xs),t(re,Zs),c(e,ca,s),k(De,e,s),c(e,ha,s),c(e,ne,s),t(ne,eo),t(ne,Pe),t(Pe,kt),t(kt,to),t(ne,ao),c(e,ma,s),k(Fe,e,s),c(e,ua,s),k(le,e,s),da=!0},p(e,[s]){const Se={};s&2&&(Se.$$scope={dirty:s,ctx:e}),H.$set(Se);const yt={};s&2&&(yt.$$scope={dirty:s,ctx:e}),Q.$set(yt);const jt={};s&2&&(jt.$$scope={dirty:s,ctx:e}),ee.$set(jt);const Et={};s&2&&(Et.$$scope={dirty:s,ctx:e}),te.$set(Et);const Tt={};s&2&&(Tt.$$scope={dirty:s,ctx:e}),se.$set(Tt);const U={};s&2&&(U.$$scope={dirty:s,ctx:e}),le.$set(U)},i(e){da||(y($.$$.fragment,e),y(A.$$.fragment,e),y(H.$$.fragment,e),y(he.$$.fragment,e),y(me.$$.fragment,e),y(ue.$$.fragment,e),y(de.$$.fragment,e),y(_e.$$.fragment,e),y($e.$$.fragment,e),y(we.$$.fragment,e),y(Q.$$.fragment,e),y(be.$$.fragment,e),y(ve.$$.fragment,e),y(ee.$$.fragment,e),y(Ee.$$.fragment,e),y(te.$$.fragment,e),y(Te.$$.fragment,e),y(se.$$.fragment,e),y(ze.$$.fragment,e),y(qe.$$.fragment,e),y(Ae.$$.fragment,e),y(De.$$.fragment,e),y(Fe.$$.fragment,e),y(le.$$.fragment,e),da=!0)},o(e){j($.$$.fragment,e),j(A.$$.fragment,e),j(H.$$.fragment,e),j(he.$$.fragment,e),j(me.$$.fragment,e),j(ue.$$.fragment,e),j(de.$$.fragment,e),j(_e.$$.fragment,e),j($e.$$.fragment,e),j(we.$$.fragment,e),j(Q.$$.fragment,e),j(be.$$.fragment,e),j(ve.$$.fragment,e),j(ee.$$.fragment,e),j(Ee.$$.fragment,e),j(te.$$.fragment,e),j(Te.$$.fragment,e),j(se.$$.fragment,e),j(ze.$$.fragment,e),j(qe.$$.fragment,e),j(Ae.$$.fragment,e),j(De.$$.fragment,e),j(Fe.$$.fragment,e),j(le.$$.fragment,e),da=!1},d(e){a(n),e&&a(d),e&&a(l),E($),e&&a(x),E(A,e),e&&a(S),e&&a(Me),e&&a(qt),e&&a(I),e&&a(At),E(H,e),e&&a(Ct),e&&a(N),E(he),e&&a(Dt),e&&a(Le),e&&a(Pt),E(me,e),e&&a(Ft),e&&a(Oe),e&&a(St),E(ue,e),e&&a(It),e&&a(Ne),e&&a(Mt),e&&a(G),e&&a(Lt),e&&a(W),E(de),e&&a(Ot),e&&a(V),e&&a(Nt),E(_e,e),e&&a(Wt),e&&a(J),e&&a(Bt),E($e,e),e&&a(Rt),e&&a(P),e&&a(Ut),E(we,e),e&&a(Ht),e&&a(C),e&&a(Yt),E(Q,e),e&&a(Gt),e&&a(B),E(be),e&&a(Kt),e&&a(Z),e&&a(Vt),E(ve,e),e&&a(Jt),E(ee,e),e&&a(Qt),e&&a(Ue),e&&a(Xt),e&&a(L),e&&a(Zt),E(Ee,e),e&&a(ea),E(te,e),e&&a(ta),e&&a(R),E(Te),e&&a(aa),e&&a(Ke),e&&a(sa),E(se,e),e&&a(oa),e&&a(F),e&&a(ra),E(ze,e),e&&a(na),e&&a(Ve),e&&a(la),E(qe,e),e&&a(ia),e&&a(oe),e&&a(pa),E(Ae,e),e&&a(fa),e&&a(re),e&&a(ca),E(De,e),e&&a(ha),e&&a(ne),e&&a(ma),E(Fe,e),e&&a(ua),E(le,e)}}}const _r={local:"text-classification",sections:[{local:"load-imdb-dataset",title:"Load IMDb dataset"},{local:"preprocess",title:"Preprocess"},{local:"finetune-with-trainer",title:"Fine-tune with Trainer"},{local:"finetune-with-tensorflow",title:"Fine-tune with TensorFlow"}],title:"Text classification"};function $r(q,n,d){let{fw:l}=n;return q.$$set=_=>{"fw"in _&&d(0,l=_.fw)},[l]}class jr extends er{constructor(n){super();tr(this,n,$r,dr,ar,{fw:0})}}export{jr as default,_r as metadata};
