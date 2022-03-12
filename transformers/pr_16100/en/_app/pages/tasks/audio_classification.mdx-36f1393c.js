import{S as Es,i as xs,s as As,e as r,k as f,w as v,t as l,M as Ts,c as o,d as a,m as h,a as i,x as w,h as n,b as m,F as t,g as p,y as j,q as k,o as y,B as E}from"../../chunks/vendor-4833417e.js";import{T as Wt}from"../../chunks/Tip-fffd6df1.js";import{Y as Ps}from"../../chunks/Youtube-27813aed.js";import{I as Ia}from"../../chunks/IconCopyLink-4b81c553.js";import{C as M}from"../../chunks/CodeBlock-6a3d1b46.js";import"../../chunks/CopyButton-dacfbfaf.js";function qs(F){let c,b,u,_,$;return{c(){c=r("p"),b=l("See the audio classification "),u=r("a"),_=l("task page"),$=l(" for more information about its associated models, datasets, and metrics."),this.h()},l(d){c=o(d,"P",{});var g=i(c);b=n(g,"See the audio classification "),u=o(g,"A",{href:!0,rel:!0});var x=i(u);_=n(x,"task page"),x.forEach(a),$=n(g," for more information about its associated models, datasets, and metrics."),g.forEach(a),this.h()},h(){m(u,"href","https://huggingface.co/tasks/audio-classification"),m(u,"rel","nofollow")},m(d,g){p(d,c,g),t(c,b),t(c,u),t(u,_),t(c,$)},d(d){d&&a(c)}}}function Cs(F){let c,b,u,_,$,d,g,x;return{c(){c=r("p"),b=l("If you aren\u2019t familiar with fine-tuning a model with the "),u=r("a"),_=l("Trainer"),$=l(", take a look at the basic tutorial "),d=r("a"),g=l("here"),x=l("!"),this.h()},l(I){c=o(I,"P",{});var A=i(c);b=n(A,"If you aren\u2019t familiar with fine-tuning a model with the "),u=o(A,"A",{href:!0});var q=i(u);_=n(q,"Trainer"),q.forEach(a),$=n(A,", take a look at the basic tutorial "),d=o(A,"A",{href:!0});var J=i(d);g=n(J,"here"),J.forEach(a),x=n(A,"!"),A.forEach(a),this.h()},h(){m(u,"href","/docs/transformers/pr_16100/en/main_classes/trainer#transformers.Trainer"),m(d,"href","training#finetune-with-trainer")},m(I,A){p(I,c,A),t(c,b),t(c,u),t(u,_),t(c,$),t(c,d),t(d,g),t(c,x)},d(I){I&&a(c)}}}function Ss(F){let c,b,u,_,$;return{c(){c=r("p"),b=l("For a more in-depth example of how to fine-tune a model for audio classification, take a look at the corresponding "),u=r("a"),_=l("PyTorch notebook"),$=l("."),this.h()},l(d){c=o(d,"P",{});var g=i(c);b=n(g,"For a more in-depth example of how to fine-tune a model for audio classification, take a look at the corresponding "),u=o(g,"A",{href:!0,rel:!0});var x=i(u);_=n(x,"PyTorch notebook"),x.forEach(a),$=n(g,"."),g.forEach(a),this.h()},h(){m(u,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/master/examples/audio_classification.ipynb"),m(u,"rel","nofollow")},m(d,g){p(d,c,g),t(c,b),t(c,u),t(u,_),t(c,$)},d(d){d&&a(c)}}}function Ls(F){let c,b,u,_,$,d,g,x,I,A,q,J,be,Oa,Xe,C,Na,Q,Ba,Ma,X,Ra,Ua,Ze,R,ea,O,U,De,Z,Wa,Fe,Va,aa,$e,Ya,ta,ee,sa,ve,za,la,ae,na,T,Ha,Ie,Ka,Ga,Oe,Ja,Qa,Ne,Xa,Za,ra,te,oa,we,et,ia,se,pa,S,at,Be,tt,st,Me,lt,nt,ca,N,W,Re,le,rt,Ue,ot,fa,je,it,ha,ne,ua,ke,pt,ma,L,re,ct,We,ft,ht,ut,oe,mt,ye,dt,_t,gt,Ve,bt,da,ie,_a,P,$t,pe,Ye,vt,wt,ze,jt,kt,He,yt,Et,ga,ce,ba,B,V,Ke,fe,xt,Ge,At,$a,Y,Tt,Ee,Pt,qt,va,he,wa,z,ja,xe,Ct,ka,D,ue,St,Ae,Lt,Dt,Ft,me,It,Te,Ot,Nt,Bt,de,Mt,Pe,Rt,Ut,ya,_e,Ea,H,xa;return d=new Ia({}),q=new Ps({props:{id:"KWwzcmG98Ds"}}),R=new Wt({props:{$$slots:{default:[qs]},$$scope:{ctx:F}}}),Z=new Ia({}),ee=new M({props:{code:`from datasets import load_dataset

ks = load_dataset("superb", "ks")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>ks = load_dataset(<span class="hljs-string">&quot;superb&quot;</span>, <span class="hljs-string">&quot;ks&quot;</span>)`}}),ae=new M({props:{code:'ks["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>ks[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.</span> , <span class="hljs-number">0.</span> , <span class="hljs-number">0.</span> , ..., -<span class="hljs-number">0.00592041</span>, -<span class="hljs-number">0.00405884</span>, -<span class="hljs-number">0.00253296</span>], dtype=float32), <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/05734a36d88019a09725c20cc024e1c4e7982e37d7d55c0c1ca1742ea1cdd47f/_background_noise_/doing_the_dishes.wav&#x27;</span>, <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">16000</span>}, <span class="hljs-string">&#x27;file&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/05734a36d88019a09725c20cc024e1c4e7982e37d7d55c0c1ca1742ea1cdd47f/_background_noise_/doing_the_dishes.wav&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">10</span>}`}}),te=new M({props:{code:`labels = ks["train"].features["label"].names
label2id, id2label = dict(), dict()
for i, label in enumerate(labels):
    label2id[label] = str(i)
    id2label[str(i)] = label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = ks[<span class="hljs-string">&quot;train&quot;</span>].features[<span class="hljs-string">&quot;label&quot;</span>].names
<span class="hljs-meta">&gt;&gt;&gt; </span>label2id, id2label = <span class="hljs-built_in">dict</span>(), <span class="hljs-built_in">dict</span>()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i, label <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(labels):
<span class="hljs-meta">... </span>    label2id[label] = <span class="hljs-built_in">str</span>(i)
<span class="hljs-meta">... </span>    id2label[<span class="hljs-built_in">str</span>(i)] = label`}}),se=new M({props:{code:"id2label[str(10)]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>id2label[<span class="hljs-built_in">str</span>(<span class="hljs-number">10</span>)]
<span class="hljs-string">&#x27;_silence_&#x27;</span>`}}),le=new Ia({}),ne=new M({props:{code:`from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/wav2vec2-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>)`}}),ie=new M({props:{code:`def preprocess_function(examples):
    audio_arrays = [x["array"] for x in examples["audio"]]
    inputs = feature_extractor(
        audio_arrays, sampling_rate=feature_extractor.sampling_rate, max_length=16000, truncation=True
    )
    return inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    audio_arrays = [x[<span class="hljs-string">&quot;array&quot;</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;audio&quot;</span>]]
<span class="hljs-meta">... </span>    inputs = feature_extractor(
<span class="hljs-meta">... </span>        audio_arrays, sampling_rate=feature_extractor.sampling_rate, max_length=<span class="hljs-number">16000</span>, truncation=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> inputs`}}),ce=new M({props:{code:'encoded_ks = ks.map(preprocess_function, remove_columns=["audio", "file"], batched=True)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_ks = ks.<span class="hljs-built_in">map</span>(preprocess_function, remove_columns=[<span class="hljs-string">&quot;audio&quot;</span>, <span class="hljs-string">&quot;file&quot;</span>], batched=<span class="hljs-literal">True</span>)'}}),fe=new Ia({}),he=new M({props:{code:`from transformers import AutoModelForAudioClassification, TrainingArguments, Trainer

num_labels = len(id2label)
model = AutoModelForAudioClassification.from_pretrained(
    "facebook/wav2vec2-base", num_labels=num_labels, label2id=label2id, id2label=id2label
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForAudioClassification, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForAudioClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>, num_labels=num_labels, label2id=label2id, id2label=id2label
<span class="hljs-meta">... </span>)`}}),z=new Wt({props:{$$slots:{default:[Cs]},$$scope:{ctx:F}}}),_e=new M({props:{code:`training_args = TrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    save_strategy="epoch",
    learning_rate=3e-5,
    num_train_epochs=5,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=encoded_ks["train"],
    eval_dataset=encoded_ks["validation"],
    tokenizer=feature_extractor,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    save_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">3e-5</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">5</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=encoded_ks[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=encoded_ks[<span class="hljs-string">&quot;validation&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=feature_extractor,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),H=new Wt({props:{$$slots:{default:[Ss]},$$scope:{ctx:F}}}),{c(){c=r("meta"),b=f(),u=r("h1"),_=r("a"),$=r("span"),v(d.$$.fragment),g=f(),x=r("span"),I=l("Audio classification"),A=f(),v(q.$$.fragment),J=f(),be=r("p"),Oa=l("Audio classification assigns a label or class to audio data. It is similar to text classification, except an audio input is continuous and must be discretized, whereas text can be split into tokens. Some practical applications of audio classification include identifying intent, speakers, and even animal species by their sounds."),Xe=f(),C=r("p"),Na=l("This guide will show you how to fine-tune "),Q=r("a"),Ba=l("Wav2Vec2"),Ma=l(" on the Keyword Spotting subset of the "),X=r("a"),Ra=l("SUPERB"),Ua=l(" benchmark to classify utterances."),Ze=f(),v(R.$$.fragment),ea=f(),O=r("h2"),U=r("a"),De=r("span"),v(Z.$$.fragment),Wa=f(),Fe=r("span"),Va=l("Load SUPERB dataset"),aa=f(),$e=r("p"),Ya=l("Load the SUPERB dataset from the \u{1F917} Datasets library:"),ta=f(),v(ee.$$.fragment),sa=f(),ve=r("p"),za=l("Then take a look at an example:"),la=f(),v(ae.$$.fragment),na=f(),T=r("p"),Ha=l("The "),Ie=r("code"),Ka=l("audio"),Ga=l(" column contains a 1-dimensional "),Oe=r("code"),Ja=l("array"),Qa=l(" of the speech signal that must be called to load and resample the audio file. The "),Ne=r("code"),Xa=l("label"),Za=l(" column is an integer that represents the utterance class. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),ra=f(),v(te.$$.fragment),oa=f(),we=r("p"),et=l("Now you can convert the label number to a label name for more information:"),ia=f(),v(se.$$.fragment),pa=f(),S=r("p"),at=l("Each keyword - or label - corresponds to a number; "),Be=r("code"),tt=l("10"),st=l(" indicates "),Me=r("code"),lt=l("silence"),nt=l(" in the example above."),ca=f(),N=r("h2"),W=r("a"),Re=r("span"),v(le.$$.fragment),rt=f(),Ue=r("span"),ot=l("Preprocess"),fa=f(),je=r("p"),it=l("Load the Wav2Vec2 feature extractor to process the audio signal:"),ha=f(),v(ne.$$.fragment),ua=f(),ke=r("p"),pt=l("The preprocessing function needs to:"),ma=f(),L=r("ol"),re=r("li"),ct=l("Call the "),We=r("code"),ft=l("audio"),ht=l(" column to load and if necessary resample the audio file."),ut=f(),oe=r("li"),mt=l("Check the sampling rate of the audio file matches the sampling rate of the audio data a model was pretrained with. You can find this information on the Wav2Vec2 "),ye=r("a"),dt=l("model card"),_t=l("."),gt=f(),Ve=r("li"),bt=l("Set a maximum input length so longer inputs are batched without being truncated."),da=f(),v(ie.$$.fragment),_a=f(),P=r("p"),$t=l("Use \u{1F917} Datasets "),pe=r("a"),Ye=r("code"),vt=l("map"),wt=l(" function to apply the preprocessing function over the entire dataset. You can speed up the "),ze=r("code"),jt=l("map"),kt=l(" function by setting "),He=r("code"),yt=l("batched=True"),Et=l(" to process multiple elements of the dataset at once. Remove the columns you don\u2019t need:"),ga=f(),v(ce.$$.fragment),ba=f(),B=r("h2"),V=r("a"),Ke=r("span"),v(fe.$$.fragment),xt=f(),Ge=r("span"),At=l("Fine-tune with Trainer"),$a=f(),Y=r("p"),Tt=l("Load Wav2Vec2 with "),Ee=r("a"),Pt=l("AutoModelForAudioClassification"),qt=l(". Specify the number of labels, and pass the model the mapping between label number and label class:"),va=f(),v(he.$$.fragment),wa=f(),v(z.$$.fragment),ja=f(),xe=r("p"),Ct=l("At this point, only three steps remain:"),ka=f(),D=r("ol"),ue=r("li"),St=l("Define your training hyperparameters in "),Ae=r("a"),Lt=l("TrainingArguments"),Dt=l("."),Ft=f(),me=r("li"),It=l("Pass the training arguments to "),Te=r("a"),Ot=l("Trainer"),Nt=l(" along with the model, datasets, and feature extractor."),Bt=f(),de=r("li"),Mt=l("Call "),Pe=r("a"),Rt=l("train()"),Ut=l(" to fine-tune your model."),ya=f(),v(_e.$$.fragment),Ea=f(),v(H.$$.fragment),this.h()},l(e){const s=Ts('[data-svelte="svelte-1phssyn"]',document.head);c=o(s,"META",{name:!0,content:!0}),s.forEach(a),b=h(e),u=o(e,"H1",{class:!0});var ge=i(u);_=o(ge,"A",{id:!0,class:!0,href:!0});var Je=i(_);$=o(Je,"SPAN",{});var Qe=i($);w(d.$$.fragment,Qe),Qe.forEach(a),Je.forEach(a),g=h(ge),x=o(ge,"SPAN",{});var Vt=i(x);I=n(Vt,"Audio classification"),Vt.forEach(a),ge.forEach(a),A=h(e),w(q.$$.fragment,e),J=h(e),be=o(e,"P",{});var Yt=i(be);Oa=n(Yt,"Audio classification assigns a label or class to audio data. It is similar to text classification, except an audio input is continuous and must be discretized, whereas text can be split into tokens. Some practical applications of audio classification include identifying intent, speakers, and even animal species by their sounds."),Yt.forEach(a),Xe=h(e),C=o(e,"P",{});var qe=i(C);Na=n(qe,"This guide will show you how to fine-tune "),Q=o(qe,"A",{href:!0,rel:!0});var zt=i(Q);Ba=n(zt,"Wav2Vec2"),zt.forEach(a),Ma=n(qe," on the Keyword Spotting subset of the "),X=o(qe,"A",{href:!0,rel:!0});var Ht=i(X);Ra=n(Ht,"SUPERB"),Ht.forEach(a),Ua=n(qe," benchmark to classify utterances."),qe.forEach(a),Ze=h(e),w(R.$$.fragment,e),ea=h(e),O=o(e,"H2",{class:!0});var Aa=i(O);U=o(Aa,"A",{id:!0,class:!0,href:!0});var Kt=i(U);De=o(Kt,"SPAN",{});var Gt=i(De);w(Z.$$.fragment,Gt),Gt.forEach(a),Kt.forEach(a),Wa=h(Aa),Fe=o(Aa,"SPAN",{});var Jt=i(Fe);Va=n(Jt,"Load SUPERB dataset"),Jt.forEach(a),Aa.forEach(a),aa=h(e),$e=o(e,"P",{});var Qt=i($e);Ya=n(Qt,"Load the SUPERB dataset from the \u{1F917} Datasets library:"),Qt.forEach(a),ta=h(e),w(ee.$$.fragment,e),sa=h(e),ve=o(e,"P",{});var Xt=i(ve);za=n(Xt,"Then take a look at an example:"),Xt.forEach(a),la=h(e),w(ae.$$.fragment,e),na=h(e),T=o(e,"P",{});var K=i(T);Ha=n(K,"The "),Ie=o(K,"CODE",{});var Zt=i(Ie);Ka=n(Zt,"audio"),Zt.forEach(a),Ga=n(K," column contains a 1-dimensional "),Oe=o(K,"CODE",{});var es=i(Oe);Ja=n(es,"array"),es.forEach(a),Qa=n(K," of the speech signal that must be called to load and resample the audio file. The "),Ne=o(K,"CODE",{});var as=i(Ne);Xa=n(as,"label"),as.forEach(a),Za=n(K," column is an integer that represents the utterance class. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),K.forEach(a),ra=h(e),w(te.$$.fragment,e),oa=h(e),we=o(e,"P",{});var ts=i(we);et=n(ts,"Now you can convert the label number to a label name for more information:"),ts.forEach(a),ia=h(e),w(se.$$.fragment,e),pa=h(e),S=o(e,"P",{});var Ce=i(S);at=n(Ce,"Each keyword - or label - corresponds to a number; "),Be=o(Ce,"CODE",{});var ss=i(Be);tt=n(ss,"10"),ss.forEach(a),st=n(Ce," indicates "),Me=o(Ce,"CODE",{});var ls=i(Me);lt=n(ls,"silence"),ls.forEach(a),nt=n(Ce," in the example above."),Ce.forEach(a),ca=h(e),N=o(e,"H2",{class:!0});var Ta=i(N);W=o(Ta,"A",{id:!0,class:!0,href:!0});var ns=i(W);Re=o(ns,"SPAN",{});var rs=i(Re);w(le.$$.fragment,rs),rs.forEach(a),ns.forEach(a),rt=h(Ta),Ue=o(Ta,"SPAN",{});var os=i(Ue);ot=n(os,"Preprocess"),os.forEach(a),Ta.forEach(a),fa=h(e),je=o(e,"P",{});var is=i(je);it=n(is,"Load the Wav2Vec2 feature extractor to process the audio signal:"),is.forEach(a),ha=h(e),w(ne.$$.fragment,e),ua=h(e),ke=o(e,"P",{});var ps=i(ke);pt=n(ps,"The preprocessing function needs to:"),ps.forEach(a),ma=h(e),L=o(e,"OL",{});var Se=i(L);re=o(Se,"LI",{});var Pa=i(re);ct=n(Pa,"Call the "),We=o(Pa,"CODE",{});var cs=i(We);ft=n(cs,"audio"),cs.forEach(a),ht=n(Pa," column to load and if necessary resample the audio file."),Pa.forEach(a),ut=h(Se),oe=o(Se,"LI",{});var qa=i(oe);mt=n(qa,"Check the sampling rate of the audio file matches the sampling rate of the audio data a model was pretrained with. You can find this information on the Wav2Vec2 "),ye=o(qa,"A",{href:!0});var fs=i(ye);dt=n(fs,"model card"),fs.forEach(a),_t=n(qa,"."),qa.forEach(a),gt=h(Se),Ve=o(Se,"LI",{});var hs=i(Ve);bt=n(hs,"Set a maximum input length so longer inputs are batched without being truncated."),hs.forEach(a),Se.forEach(a),da=h(e),w(ie.$$.fragment,e),_a=h(e),P=o(e,"P",{});var G=i(P);$t=n(G,"Use \u{1F917} Datasets "),pe=o(G,"A",{href:!0,rel:!0});var us=i(pe);Ye=o(us,"CODE",{});var ms=i(Ye);vt=n(ms,"map"),ms.forEach(a),us.forEach(a),wt=n(G," function to apply the preprocessing function over the entire dataset. You can speed up the "),ze=o(G,"CODE",{});var ds=i(ze);jt=n(ds,"map"),ds.forEach(a),kt=n(G," function by setting "),He=o(G,"CODE",{});var _s=i(He);yt=n(_s,"batched=True"),_s.forEach(a),Et=n(G," to process multiple elements of the dataset at once. Remove the columns you don\u2019t need:"),G.forEach(a),ga=h(e),w(ce.$$.fragment,e),ba=h(e),B=o(e,"H2",{class:!0});var Ca=i(B);V=o(Ca,"A",{id:!0,class:!0,href:!0});var gs=i(V);Ke=o(gs,"SPAN",{});var bs=i(Ke);w(fe.$$.fragment,bs),bs.forEach(a),gs.forEach(a),xt=h(Ca),Ge=o(Ca,"SPAN",{});var $s=i(Ge);At=n($s,"Fine-tune with Trainer"),$s.forEach(a),Ca.forEach(a),$a=h(e),Y=o(e,"P",{});var Sa=i(Y);Tt=n(Sa,"Load Wav2Vec2 with "),Ee=o(Sa,"A",{href:!0});var vs=i(Ee);Pt=n(vs,"AutoModelForAudioClassification"),vs.forEach(a),qt=n(Sa,". Specify the number of labels, and pass the model the mapping between label number and label class:"),Sa.forEach(a),va=h(e),w(he.$$.fragment,e),wa=h(e),w(z.$$.fragment,e),ja=h(e),xe=o(e,"P",{});var ws=i(xe);Ct=n(ws,"At this point, only three steps remain:"),ws.forEach(a),ka=h(e),D=o(e,"OL",{});var Le=i(D);ue=o(Le,"LI",{});var La=i(ue);St=n(La,"Define your training hyperparameters in "),Ae=o(La,"A",{href:!0});var js=i(Ae);Lt=n(js,"TrainingArguments"),js.forEach(a),Dt=n(La,"."),La.forEach(a),Ft=h(Le),me=o(Le,"LI",{});var Da=i(me);It=n(Da,"Pass the training arguments to "),Te=o(Da,"A",{href:!0});var ks=i(Te);Ot=n(ks,"Trainer"),ks.forEach(a),Nt=n(Da," along with the model, datasets, and feature extractor."),Da.forEach(a),Bt=h(Le),de=o(Le,"LI",{});var Fa=i(de);Mt=n(Fa,"Call "),Pe=o(Fa,"A",{href:!0});var ys=i(Pe);Rt=n(ys,"train()"),ys.forEach(a),Ut=n(Fa," to fine-tune your model."),Fa.forEach(a),Le.forEach(a),ya=h(e),w(_e.$$.fragment,e),Ea=h(e),w(H.$$.fragment,e),this.h()},h(){m(c,"name","hf:doc:metadata"),m(c,"content",JSON.stringify(Ds)),m(_,"id","audio-classification"),m(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_,"href","#audio-classification"),m(u,"class","relative group"),m(Q,"href","https://huggingface.co/facebook/wav2vec2-base"),m(Q,"rel","nofollow"),m(X,"href","https://huggingface.co/datasets/superb"),m(X,"rel","nofollow"),m(U,"id","load-superb-dataset"),m(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(U,"href","#load-superb-dataset"),m(O,"class","relative group"),m(W,"id","preprocess"),m(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(W,"href","#preprocess"),m(N,"class","relative group"),m(ye,"href","(https://huggingface.co/facebook/wav2vec2-base)"),m(pe,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),m(pe,"rel","nofollow"),m(V,"id","finetune-with-trainer"),m(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(V,"href","#finetune-with-trainer"),m(B,"class","relative group"),m(Ee,"href","/docs/transformers/pr_16100/en/model_doc/auto#transformers.AutoModelForAudioClassification"),m(Ae,"href","/docs/transformers/pr_16100/en/main_classes/trainer#transformers.TrainingArguments"),m(Te,"href","/docs/transformers/pr_16100/en/main_classes/trainer#transformers.Trainer"),m(Pe,"href","/docs/transformers/pr_16100/en/main_classes/trainer#transformers.Trainer.train")},m(e,s){t(document.head,c),p(e,b,s),p(e,u,s),t(u,_),t(_,$),j(d,$,null),t(u,g),t(u,x),t(x,I),p(e,A,s),j(q,e,s),p(e,J,s),p(e,be,s),t(be,Oa),p(e,Xe,s),p(e,C,s),t(C,Na),t(C,Q),t(Q,Ba),t(C,Ma),t(C,X),t(X,Ra),t(C,Ua),p(e,Ze,s),j(R,e,s),p(e,ea,s),p(e,O,s),t(O,U),t(U,De),j(Z,De,null),t(O,Wa),t(O,Fe),t(Fe,Va),p(e,aa,s),p(e,$e,s),t($e,Ya),p(e,ta,s),j(ee,e,s),p(e,sa,s),p(e,ve,s),t(ve,za),p(e,la,s),j(ae,e,s),p(e,na,s),p(e,T,s),t(T,Ha),t(T,Ie),t(Ie,Ka),t(T,Ga),t(T,Oe),t(Oe,Ja),t(T,Qa),t(T,Ne),t(Ne,Xa),t(T,Za),p(e,ra,s),j(te,e,s),p(e,oa,s),p(e,we,s),t(we,et),p(e,ia,s),j(se,e,s),p(e,pa,s),p(e,S,s),t(S,at),t(S,Be),t(Be,tt),t(S,st),t(S,Me),t(Me,lt),t(S,nt),p(e,ca,s),p(e,N,s),t(N,W),t(W,Re),j(le,Re,null),t(N,rt),t(N,Ue),t(Ue,ot),p(e,fa,s),p(e,je,s),t(je,it),p(e,ha,s),j(ne,e,s),p(e,ua,s),p(e,ke,s),t(ke,pt),p(e,ma,s),p(e,L,s),t(L,re),t(re,ct),t(re,We),t(We,ft),t(re,ht),t(L,ut),t(L,oe),t(oe,mt),t(oe,ye),t(ye,dt),t(oe,_t),t(L,gt),t(L,Ve),t(Ve,bt),p(e,da,s),j(ie,e,s),p(e,_a,s),p(e,P,s),t(P,$t),t(P,pe),t(pe,Ye),t(Ye,vt),t(P,wt),t(P,ze),t(ze,jt),t(P,kt),t(P,He),t(He,yt),t(P,Et),p(e,ga,s),j(ce,e,s),p(e,ba,s),p(e,B,s),t(B,V),t(V,Ke),j(fe,Ke,null),t(B,xt),t(B,Ge),t(Ge,At),p(e,$a,s),p(e,Y,s),t(Y,Tt),t(Y,Ee),t(Ee,Pt),t(Y,qt),p(e,va,s),j(he,e,s),p(e,wa,s),j(z,e,s),p(e,ja,s),p(e,xe,s),t(xe,Ct),p(e,ka,s),p(e,D,s),t(D,ue),t(ue,St),t(ue,Ae),t(Ae,Lt),t(ue,Dt),t(D,Ft),t(D,me),t(me,It),t(me,Te),t(Te,Ot),t(me,Nt),t(D,Bt),t(D,de),t(de,Mt),t(de,Pe),t(Pe,Rt),t(de,Ut),p(e,ya,s),j(_e,e,s),p(e,Ea,s),j(H,e,s),xa=!0},p(e,[s]){const ge={};s&2&&(ge.$$scope={dirty:s,ctx:e}),R.$set(ge);const Je={};s&2&&(Je.$$scope={dirty:s,ctx:e}),z.$set(Je);const Qe={};s&2&&(Qe.$$scope={dirty:s,ctx:e}),H.$set(Qe)},i(e){xa||(k(d.$$.fragment,e),k(q.$$.fragment,e),k(R.$$.fragment,e),k(Z.$$.fragment,e),k(ee.$$.fragment,e),k(ae.$$.fragment,e),k(te.$$.fragment,e),k(se.$$.fragment,e),k(le.$$.fragment,e),k(ne.$$.fragment,e),k(ie.$$.fragment,e),k(ce.$$.fragment,e),k(fe.$$.fragment,e),k(he.$$.fragment,e),k(z.$$.fragment,e),k(_e.$$.fragment,e),k(H.$$.fragment,e),xa=!0)},o(e){y(d.$$.fragment,e),y(q.$$.fragment,e),y(R.$$.fragment,e),y(Z.$$.fragment,e),y(ee.$$.fragment,e),y(ae.$$.fragment,e),y(te.$$.fragment,e),y(se.$$.fragment,e),y(le.$$.fragment,e),y(ne.$$.fragment,e),y(ie.$$.fragment,e),y(ce.$$.fragment,e),y(fe.$$.fragment,e),y(he.$$.fragment,e),y(z.$$.fragment,e),y(_e.$$.fragment,e),y(H.$$.fragment,e),xa=!1},d(e){a(c),e&&a(b),e&&a(u),E(d),e&&a(A),E(q,e),e&&a(J),e&&a(be),e&&a(Xe),e&&a(C),e&&a(Ze),E(R,e),e&&a(ea),e&&a(O),E(Z),e&&a(aa),e&&a($e),e&&a(ta),E(ee,e),e&&a(sa),e&&a(ve),e&&a(la),E(ae,e),e&&a(na),e&&a(T),e&&a(ra),E(te,e),e&&a(oa),e&&a(we),e&&a(ia),E(se,e),e&&a(pa),e&&a(S),e&&a(ca),e&&a(N),E(le),e&&a(fa),e&&a(je),e&&a(ha),E(ne,e),e&&a(ua),e&&a(ke),e&&a(ma),e&&a(L),e&&a(da),E(ie,e),e&&a(_a),e&&a(P),e&&a(ga),E(ce,e),e&&a(ba),e&&a(B),E(fe),e&&a($a),e&&a(Y),e&&a(va),E(he,e),e&&a(wa),E(z,e),e&&a(ja),e&&a(xe),e&&a(ka),e&&a(D),e&&a(ya),E(_e,e),e&&a(Ea),E(H,e)}}}const Ds={local:"audio-classification",sections:[{local:"load-superb-dataset",title:"Load SUPERB dataset"},{local:"preprocess",title:"Preprocess"},{local:"finetune-with-trainer",title:"Fine-tune with Trainer"}],title:"Audio classification"};function Fs(F,c,b){let{fw:u}=c;return F.$$set=_=>{"fw"in _&&b(0,u=_.fw)},[u]}class Us extends Es{constructor(c){super();xs(this,c,Fs,Ls,As,{fw:0})}}export{Us as default,Ds as metadata};
