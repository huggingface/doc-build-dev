import{S as Mt,i as Ot,s as Nt,e as r,k as h,w as k,t as s,M as Rt,c as o,d as a,m,a as i,x as y,h as l,b as d,F as t,g as f,y as E,q as x,o as A,B as T,v as Ut}from"../../chunks/vendor-6b77c823.js";import{T as rt}from"../../chunks/Tip-39098574.js";import{Y as Bt}from"../../chunks/Youtube-5c6e11e6.js";import{I as ya}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as pe}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as Wt,M as Vt}from"../../chunks/Markdown-4489c441.js";function Yt(M){let p,b,u,g,v;return{c(){p=r("p"),b=s("See the audio classification "),u=r("a"),g=s("task page"),v=s(" for more information about its associated models, datasets, and metrics."),this.h()},l(_){p=o(_,"P",{});var $=i(p);b=l($,"See the audio classification "),u=o($,"A",{href:!0,rel:!0});var j=i(u);g=l(j,"task page"),j.forEach(a),v=l($," for more information about its associated models, datasets, and metrics."),$.forEach(a),this.h()},h(){d(u,"href","https://huggingface.co/tasks/audio-classification"),d(u,"rel","nofollow")},m(_,$){f(_,p,$),t(p,b),t(p,u),t(u,g),t(p,v)},d(_){_&&a(p)}}}function zt(M){let p,b,u,g,v,_,$,j;return{c(){p=r("p"),b=s("If you aren\u2019t familiar with fine-tuning a model with the "),u=r("a"),g=s("Trainer"),v=s(", take a look at the basic tutorial "),_=r("a"),$=s("here"),j=s("!"),this.h()},l(P){p=o(P,"P",{});var q=i(p);b=l(q,"If you aren\u2019t familiar with fine-tuning a model with the "),u=o(q,"A",{href:!0});var C=i(u);g=l(C,"Trainer"),C.forEach(a),v=l(q,", take a look at the basic tutorial "),_=o(q,"A",{href:!0});var W=i(_);$=l(W,"here"),W.forEach(a),j=l(q,"!"),q.forEach(a),this.h()},h(){d(u,"href","/docs/transformers/pr_16368/en/main_classes/trainer#transformers.Trainer"),d(_,"href","../training#finetune-with-trainer")},m(P,q){f(P,p,q),t(p,b),t(p,u),t(u,g),t(p,v),t(p,_),t(_,$),t(p,j)},d(P){P&&a(p)}}}function Ht(M){let p,b,u,g,v,_,$,j,P,q,C,W,V,F,O,I,J,Y,$e,be,L,ve,Q,ce,N,fe,S,R,U,z,we,X,H,le;return $=new pe({props:{code:`from transformers import AutoModelForAudioClassification, TrainingArguments, Trainer

num_labels = len(id2label)
model = AutoModelForAudioClassification.from_pretrained(
    "facebook/wav2vec2-base", num_labels=num_labels, label2id=label2id, id2label=id2label
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForAudioClassification, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForAudioClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>, num_labels=num_labels, label2id=label2id, id2label=id2label
<span class="hljs-meta">... </span>)`}}),P=new rt({props:{$$slots:{default:[zt]},$$scope:{ctx:M}}}),H=new pe({props:{code:`training_args = TrainingArguments(
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

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){p=r("p"),b=s("Load Wav2Vec2 with "),u=r("a"),g=s("AutoModelForAudioClassification"),v=s(". Specify the number of labels, and pass the model the mapping between label number and label class:"),_=h(),k($.$$.fragment),j=h(),k(P.$$.fragment),q=h(),C=r("p"),W=s("At this point, only three steps remain:"),V=h(),F=r("ol"),O=r("li"),I=s("Define your training hyperparameters in "),J=r("a"),Y=s("TrainingArguments"),$e=s("."),be=h(),L=r("li"),ve=s("Pass the training arguments to "),Q=r("a"),ce=s("Trainer"),N=s(" along with the model, datasets, and feature extractor."),fe=h(),S=r("li"),R=s("Call "),U=r("a"),z=s("train()"),we=s(" to fine-tune your model."),X=h(),k(H.$$.fragment),this.h()},l(c){p=o(c,"P",{});var w=i(p);b=l(w,"Load Wav2Vec2 with "),u=o(w,"A",{href:!0});var Z=i(u);g=l(Z,"AutoModelForAudioClassification"),Z.forEach(a),v=l(w,". Specify the number of labels, and pass the model the mapping between label number and label class:"),w.forEach(a),_=m(c),y($.$$.fragment,c),j=m(c),y(P.$$.fragment,c),q=m(c),C=o(c,"P",{});var ee=i(C);W=l(ee,"At this point, only three steps remain:"),ee.forEach(a),V=m(c),F=o(c,"OL",{});var K=i(F);O=o(K,"LI",{});var G=i(O);I=l(G,"Define your training hyperparameters in "),J=o(G,"A",{href:!0});var Le=i(J);Y=l(Le,"TrainingArguments"),Le.forEach(a),$e=l(G,"."),G.forEach(a),be=m(K),L=o(K,"LI",{});var ne=i(L);ve=l(ne,"Pass the training arguments to "),Q=o(ne,"A",{href:!0});var ae=i(Q);ce=l(ae,"Trainer"),ae.forEach(a),N=l(ne," along with the model, datasets, and feature extractor."),ne.forEach(a),fe=m(K),S=o(K,"LI",{});var re=i(S);R=l(re,"Call "),U=o(re,"A",{href:!0});var D=i(U);z=l(D,"train()"),D.forEach(a),we=l(re," to fine-tune your model."),re.forEach(a),K.forEach(a),X=m(c),y(H.$$.fragment,c),this.h()},h(){d(u,"href","/docs/transformers/pr_16368/en/model_doc/auto#transformers.AutoModelForAudioClassification"),d(J,"href","/docs/transformers/pr_16368/en/main_classes/trainer#transformers.TrainingArguments"),d(Q,"href","/docs/transformers/pr_16368/en/main_classes/trainer#transformers.Trainer"),d(U,"href","/docs/transformers/pr_16368/en/main_classes/trainer#transformers.Trainer.train")},m(c,w){f(c,p,w),t(p,b),t(p,u),t(u,g),t(p,v),f(c,_,w),E($,c,w),f(c,j,w),E(P,c,w),f(c,q,w),f(c,C,w),t(C,W),f(c,V,w),f(c,F,w),t(F,O),t(O,I),t(O,J),t(J,Y),t(O,$e),t(F,be),t(F,L),t(L,ve),t(L,Q),t(Q,ce),t(L,N),t(F,fe),t(F,S),t(S,R),t(S,U),t(U,z),t(S,we),f(c,X,w),E(H,c,w),le=!0},p(c,w){const Z={};w&2&&(Z.$$scope={dirty:w,ctx:c}),P.$set(Z)},i(c){le||(x($.$$.fragment,c),x(P.$$.fragment,c),x(H.$$.fragment,c),le=!0)},o(c){A($.$$.fragment,c),A(P.$$.fragment,c),A(H.$$.fragment,c),le=!1},d(c){c&&a(p),c&&a(_),T($,c),c&&a(j),T(P,c),c&&a(q),c&&a(C),c&&a(V),c&&a(F),c&&a(X),T(H,c)}}}function Kt(M){let p,b;return p=new Vt({props:{$$slots:{default:[Ht]},$$scope:{ctx:M}}}),{c(){k(p.$$.fragment)},l(u){y(p.$$.fragment,u)},m(u,g){E(p,u,g),b=!0},p(u,g){const v={};g&2&&(v.$$scope={dirty:g,ctx:u}),p.$set(v)},i(u){b||(x(p.$$.fragment,u),b=!0)},o(u){A(p.$$.fragment,u),b=!1},d(u){T(p,u)}}}function Gt(M){let p,b,u,g,v;return{c(){p=r("p"),b=s("For a more in-depth example of how to fine-tune a model for audio classification, take a look at the corresponding "),u=r("a"),g=s("PyTorch notebook"),v=s("."),this.h()},l(_){p=o(_,"P",{});var $=i(p);b=l($,"For a more in-depth example of how to fine-tune a model for audio classification, take a look at the corresponding "),u=o($,"A",{href:!0,rel:!0});var j=i(u);g=l(j,"PyTorch notebook"),j.forEach(a),v=l($,"."),$.forEach(a),this.h()},h(){d(u,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/master/examples/audio_classification.ipynb"),d(u,"rel","nofollow")},m(_,$){f(_,p,$),t(p,b),t(p,u),t(u,g),t(p,v)},d(_){_&&a(p)}}}function Jt(M){let p,b,u,g,v,_,$,j,P,q,C,W,V,F,O,I,J,Y,$e,be,L,ve,Q,ce,N,fe,S,R,U,z,we,X,H,le,c,w,Z,ee,K,G,Le,ne,ae,re,D,Ea,Ue,xa,Aa,Be,Ta,Pa,We,qa,Ca,sa,je,la,De,Sa,na,ke,ra,te,La,Ve,Da,Fa,Ye,Ia,Ma,oa,oe,ue,ze,ye,Oa,He,Na,ia,Fe,Ra,pa,Ee,ca,Ie,Ua,fa,se,xe,Ba,Ke,Wa,Va,Ya,Ae,za,Me,Ha,Ka,Ga,Ge,Ja,ua,Te,ha,B,Qa,Pe,Je,Xa,Za,Qe,et,at,Xe,tt,st,ma,qe,da,ie,he,Ze,Ce,lt,ea,nt,_a,me,ga,de,$a;return _=new ya({}),C=new Bt({props:{id:"KWwzcmG98Ds"}}),N=new rt({props:{$$slots:{default:[Yt]},$$scope:{ctx:M}}}),z=new ya({}),ee=new pe({props:{code:`from datasets import load_dataset

ks = load_dataset("superb", "ks")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>ks = load_dataset(<span class="hljs-string">&quot;superb&quot;</span>, <span class="hljs-string">&quot;ks&quot;</span>)`}}),ae=new pe({props:{code:'ks["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>ks[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;audio&#x27;</span>: {<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.</span> , <span class="hljs-number">0.</span> , <span class="hljs-number">0.</span> , ..., -<span class="hljs-number">0.00592041</span>, -<span class="hljs-number">0.00405884</span>, -<span class="hljs-number">0.00253296</span>], dtype=float32), <span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/05734a36d88019a09725c20cc024e1c4e7982e37d7d55c0c1ca1742ea1cdd47f/_background_noise_/doing_the_dishes.wav&#x27;</span>, <span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">16000</span>}, <span class="hljs-string">&#x27;file&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/05734a36d88019a09725c20cc024e1c4e7982e37d7d55c0c1ca1742ea1cdd47f/_background_noise_/doing_the_dishes.wav&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">10</span>}`}}),je=new pe({props:{code:`labels = ks["train"].features["label"].names
label2id, id2label = dict(), dict()
for i, label in enumerate(labels):
    label2id[label] = str(i)
    id2label[str(i)] = label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = ks[<span class="hljs-string">&quot;train&quot;</span>].features[<span class="hljs-string">&quot;label&quot;</span>].names
<span class="hljs-meta">&gt;&gt;&gt; </span>label2id, id2label = <span class="hljs-built_in">dict</span>(), <span class="hljs-built_in">dict</span>()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i, label <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(labels):
<span class="hljs-meta">... </span>    label2id[label] = <span class="hljs-built_in">str</span>(i)
<span class="hljs-meta">... </span>    id2label[<span class="hljs-built_in">str</span>(i)] = label`}}),ke=new pe({props:{code:"id2label[str(10)]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>id2label[<span class="hljs-built_in">str</span>(<span class="hljs-number">10</span>)]
<span class="hljs-string">&#x27;_silence_&#x27;</span>`}}),ye=new ya({}),Ee=new pe({props:{code:`from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained("facebook/wav2vec2-base")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base&quot;</span>)`}}),Te=new pe({props:{code:`def preprocess_function(examples):
    audio_arrays = [x["array"] for x in examples["audio"]]
    inputs = feature_extractor(
        audio_arrays, sampling_rate=feature_extractor.sampling_rate, max_length=16000, truncation=True
    )
    return inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    audio_arrays = [x[<span class="hljs-string">&quot;array&quot;</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;audio&quot;</span>]]
<span class="hljs-meta">... </span>    inputs = feature_extractor(
<span class="hljs-meta">... </span>        audio_arrays, sampling_rate=feature_extractor.sampling_rate, max_length=<span class="hljs-number">16000</span>, truncation=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> inputs`}}),qe=new pe({props:{code:'encoded_ks = ks.map(preprocess_function, remove_columns=["audio", "file"], batched=True)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_ks = ks.<span class="hljs-built_in">map</span>(preprocess_function, remove_columns=[<span class="hljs-string">&quot;audio&quot;</span>, <span class="hljs-string">&quot;file&quot;</span>], batched=<span class="hljs-literal">True</span>)'}}),Ce=new ya({}),me=new Wt({props:{pytorch:!0,tensorflow:!1,jax:!1,$$slots:{pytorch:[Kt]},$$scope:{ctx:M}}}),de=new rt({props:{$$slots:{default:[Gt]},$$scope:{ctx:M}}}),{c(){p=r("meta"),b=h(),u=r("h1"),g=r("a"),v=r("span"),k(_.$$.fragment),$=h(),j=r("span"),P=s("Audio classification"),q=h(),k(C.$$.fragment),W=h(),V=r("p"),F=s("Audio classification assigns a label or class to audio data. It is similar to text classification, except an audio input is continuous and must be discretized, whereas text can be split into tokens. Some practical applications of audio classification include identifying intent, speakers, and even animal species by their sounds."),O=h(),I=r("p"),J=s("This guide will show you how to fine-tune "),Y=r("a"),$e=s("Wav2Vec2"),be=s(" on the Keyword Spotting subset of the "),L=r("a"),ve=s("SUPERB"),Q=s(" benchmark to classify utterances."),ce=h(),k(N.$$.fragment),fe=h(),S=r("h2"),R=r("a"),U=r("span"),k(z.$$.fragment),we=h(),X=r("span"),H=s("Load SUPERB dataset"),le=h(),c=r("p"),w=s("Load the SUPERB dataset from the \u{1F917} Datasets library:"),Z=h(),k(ee.$$.fragment),K=h(),G=r("p"),Le=s("Then take a look at an example:"),ne=h(),k(ae.$$.fragment),re=h(),D=r("p"),Ea=s("The "),Ue=r("code"),xa=s("audio"),Aa=s(" column contains a 1-dimensional "),Be=r("code"),Ta=s("array"),Pa=s(" of the speech signal that must be called to load and resample the audio file. The "),We=r("code"),qa=s("label"),Ca=s(" column is an integer that represents the utterance class. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),sa=h(),k(je.$$.fragment),la=h(),De=r("p"),Sa=s("Now you can convert the label number to a label name for more information:"),na=h(),k(ke.$$.fragment),ra=h(),te=r("p"),La=s("Each keyword - or label - corresponds to a number; "),Ve=r("code"),Da=s("10"),Fa=s(" indicates "),Ye=r("code"),Ia=s("silence"),Ma=s(" in the example above."),oa=h(),oe=r("h2"),ue=r("a"),ze=r("span"),k(ye.$$.fragment),Oa=h(),He=r("span"),Na=s("Preprocess"),ia=h(),Fe=r("p"),Ra=s("Load the Wav2Vec2 feature extractor to process the audio signal:"),pa=h(),k(Ee.$$.fragment),ca=h(),Ie=r("p"),Ua=s("The preprocessing function needs to:"),fa=h(),se=r("ol"),xe=r("li"),Ba=s("Call the "),Ke=r("code"),Wa=s("audio"),Va=s(" column to load and if necessary resample the audio file."),Ya=h(),Ae=r("li"),za=s("Check the sampling rate of the audio file matches the sampling rate of the audio data a model was pretrained with. You can find this information on the Wav2Vec2 "),Me=r("a"),Ha=s("model card"),Ka=s("."),Ga=h(),Ge=r("li"),Ja=s("Set a maximum input length so longer inputs are batched without being truncated."),ua=h(),k(Te.$$.fragment),ha=h(),B=r("p"),Qa=s("Use \u{1F917} Datasets "),Pe=r("a"),Je=r("code"),Xa=s("map"),Za=s(" function to apply the preprocessing function over the entire dataset. You can speed up the "),Qe=r("code"),et=s("map"),at=s(" function by setting "),Xe=r("code"),tt=s("batched=True"),st=s(" to process multiple elements of the dataset at once. Remove the columns you don\u2019t need:"),ma=h(),k(qe.$$.fragment),da=h(),ie=r("h2"),he=r("a"),Ze=r("span"),k(Ce.$$.fragment),lt=h(),ea=r("span"),nt=s("Train"),_a=h(),k(me.$$.fragment),ga=h(),k(de.$$.fragment),this.h()},l(e){const n=Rt('[data-svelte="svelte-1phssyn"]',document.head);p=o(n,"META",{name:!0,content:!0}),n.forEach(a),b=m(e),u=o(e,"H1",{class:!0});var Se=i(u);g=o(Se,"A",{id:!0,class:!0,href:!0});var aa=i(g);v=o(aa,"SPAN",{});var ta=i(v);y(_.$$.fragment,ta),ta.forEach(a),aa.forEach(a),$=m(Se),j=o(Se,"SPAN",{});var ot=i(j);P=l(ot,"Audio classification"),ot.forEach(a),Se.forEach(a),q=m(e),y(C.$$.fragment,e),W=m(e),V=o(e,"P",{});var it=i(V);F=l(it,"Audio classification assigns a label or class to audio data. It is similar to text classification, except an audio input is continuous and must be discretized, whereas text can be split into tokens. Some practical applications of audio classification include identifying intent, speakers, and even animal species by their sounds."),it.forEach(a),O=m(e),I=o(e,"P",{});var Oe=i(I);J=l(Oe,"This guide will show you how to fine-tune "),Y=o(Oe,"A",{href:!0,rel:!0});var pt=i(Y);$e=l(pt,"Wav2Vec2"),pt.forEach(a),be=l(Oe," on the Keyword Spotting subset of the "),L=o(Oe,"A",{href:!0,rel:!0});var ct=i(L);ve=l(ct,"SUPERB"),ct.forEach(a),Q=l(Oe," benchmark to classify utterances."),Oe.forEach(a),ce=m(e),y(N.$$.fragment,e),fe=m(e),S=o(e,"H2",{class:!0});var ba=i(S);R=o(ba,"A",{id:!0,class:!0,href:!0});var ft=i(R);U=o(ft,"SPAN",{});var ut=i(U);y(z.$$.fragment,ut),ut.forEach(a),ft.forEach(a),we=m(ba),X=o(ba,"SPAN",{});var ht=i(X);H=l(ht,"Load SUPERB dataset"),ht.forEach(a),ba.forEach(a),le=m(e),c=o(e,"P",{});var mt=i(c);w=l(mt,"Load the SUPERB dataset from the \u{1F917} Datasets library:"),mt.forEach(a),Z=m(e),y(ee.$$.fragment,e),K=m(e),G=o(e,"P",{});var dt=i(G);Le=l(dt,"Then take a look at an example:"),dt.forEach(a),ne=m(e),y(ae.$$.fragment,e),re=m(e),D=o(e,"P",{});var _e=i(D);Ea=l(_e,"The "),Ue=o(_e,"CODE",{});var _t=i(Ue);xa=l(_t,"audio"),_t.forEach(a),Aa=l(_e," column contains a 1-dimensional "),Be=o(_e,"CODE",{});var gt=i(Be);Ta=l(gt,"array"),gt.forEach(a),Pa=l(_e," of the speech signal that must be called to load and resample the audio file. The "),We=o(_e,"CODE",{});var $t=i(We);qa=l($t,"label"),$t.forEach(a),Ca=l(_e," column is an integer that represents the utterance class. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),_e.forEach(a),sa=m(e),y(je.$$.fragment,e),la=m(e),De=o(e,"P",{});var bt=i(De);Sa=l(bt,"Now you can convert the label number to a label name for more information:"),bt.forEach(a),na=m(e),y(ke.$$.fragment,e),ra=m(e),te=o(e,"P",{});var Ne=i(te);La=l(Ne,"Each keyword - or label - corresponds to a number; "),Ve=o(Ne,"CODE",{});var vt=i(Ve);Da=l(vt,"10"),vt.forEach(a),Fa=l(Ne," indicates "),Ye=o(Ne,"CODE",{});var wt=i(Ye);Ia=l(wt,"silence"),wt.forEach(a),Ma=l(Ne," in the example above."),Ne.forEach(a),oa=m(e),oe=o(e,"H2",{class:!0});var va=i(oe);ue=o(va,"A",{id:!0,class:!0,href:!0});var jt=i(ue);ze=o(jt,"SPAN",{});var kt=i(ze);y(ye.$$.fragment,kt),kt.forEach(a),jt.forEach(a),Oa=m(va),He=o(va,"SPAN",{});var yt=i(He);Na=l(yt,"Preprocess"),yt.forEach(a),va.forEach(a),ia=m(e),Fe=o(e,"P",{});var Et=i(Fe);Ra=l(Et,"Load the Wav2Vec2 feature extractor to process the audio signal:"),Et.forEach(a),pa=m(e),y(Ee.$$.fragment,e),ca=m(e),Ie=o(e,"P",{});var xt=i(Ie);Ua=l(xt,"The preprocessing function needs to:"),xt.forEach(a),fa=m(e),se=o(e,"OL",{});var Re=i(se);xe=o(Re,"LI",{});var wa=i(xe);Ba=l(wa,"Call the "),Ke=o(wa,"CODE",{});var At=i(Ke);Wa=l(At,"audio"),At.forEach(a),Va=l(wa," column to load and if necessary resample the audio file."),wa.forEach(a),Ya=m(Re),Ae=o(Re,"LI",{});var ja=i(Ae);za=l(ja,"Check the sampling rate of the audio file matches the sampling rate of the audio data a model was pretrained with. You can find this information on the Wav2Vec2 "),Me=o(ja,"A",{href:!0});var Tt=i(Me);Ha=l(Tt,"model card"),Tt.forEach(a),Ka=l(ja,"."),ja.forEach(a),Ga=m(Re),Ge=o(Re,"LI",{});var Pt=i(Ge);Ja=l(Pt,"Set a maximum input length so longer inputs are batched without being truncated."),Pt.forEach(a),Re.forEach(a),ua=m(e),y(Te.$$.fragment,e),ha=m(e),B=o(e,"P",{});var ge=i(B);Qa=l(ge,"Use \u{1F917} Datasets "),Pe=o(ge,"A",{href:!0,rel:!0});var qt=i(Pe);Je=o(qt,"CODE",{});var Ct=i(Je);Xa=l(Ct,"map"),Ct.forEach(a),qt.forEach(a),Za=l(ge," function to apply the preprocessing function over the entire dataset. You can speed up the "),Qe=o(ge,"CODE",{});var St=i(Qe);et=l(St,"map"),St.forEach(a),at=l(ge," function by setting "),Xe=o(ge,"CODE",{});var Lt=i(Xe);tt=l(Lt,"batched=True"),Lt.forEach(a),st=l(ge," to process multiple elements of the dataset at once. Remove the columns you don\u2019t need:"),ge.forEach(a),ma=m(e),y(qe.$$.fragment,e),da=m(e),ie=o(e,"H2",{class:!0});var ka=i(ie);he=o(ka,"A",{id:!0,class:!0,href:!0});var Dt=i(he);Ze=o(Dt,"SPAN",{});var Ft=i(Ze);y(Ce.$$.fragment,Ft),Ft.forEach(a),Dt.forEach(a),lt=m(ka),ea=o(ka,"SPAN",{});var It=i(ea);nt=l(It,"Train"),It.forEach(a),ka.forEach(a),_a=m(e),y(me.$$.fragment,e),ga=m(e),y(de.$$.fragment,e),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify(Qt)),d(g,"id","audio-classification"),d(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(g,"href","#audio-classification"),d(u,"class","relative group"),d(Y,"href","https://huggingface.co/facebook/wav2vec2-base"),d(Y,"rel","nofollow"),d(L,"href","https://huggingface.co/datasets/superb"),d(L,"rel","nofollow"),d(R,"id","load-superb-dataset"),d(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(R,"href","#load-superb-dataset"),d(S,"class","relative group"),d(ue,"id","preprocess"),d(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ue,"href","#preprocess"),d(oe,"class","relative group"),d(Me,"href","(https://huggingface.co/facebook/wav2vec2-base)"),d(Pe,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),d(Pe,"rel","nofollow"),d(he,"id","train"),d(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(he,"href","#train"),d(ie,"class","relative group")},m(e,n){t(document.head,p),f(e,b,n),f(e,u,n),t(u,g),t(g,v),E(_,v,null),t(u,$),t(u,j),t(j,P),f(e,q,n),E(C,e,n),f(e,W,n),f(e,V,n),t(V,F),f(e,O,n),f(e,I,n),t(I,J),t(I,Y),t(Y,$e),t(I,be),t(I,L),t(L,ve),t(I,Q),f(e,ce,n),E(N,e,n),f(e,fe,n),f(e,S,n),t(S,R),t(R,U),E(z,U,null),t(S,we),t(S,X),t(X,H),f(e,le,n),f(e,c,n),t(c,w),f(e,Z,n),E(ee,e,n),f(e,K,n),f(e,G,n),t(G,Le),f(e,ne,n),E(ae,e,n),f(e,re,n),f(e,D,n),t(D,Ea),t(D,Ue),t(Ue,xa),t(D,Aa),t(D,Be),t(Be,Ta),t(D,Pa),t(D,We),t(We,qa),t(D,Ca),f(e,sa,n),E(je,e,n),f(e,la,n),f(e,De,n),t(De,Sa),f(e,na,n),E(ke,e,n),f(e,ra,n),f(e,te,n),t(te,La),t(te,Ve),t(Ve,Da),t(te,Fa),t(te,Ye),t(Ye,Ia),t(te,Ma),f(e,oa,n),f(e,oe,n),t(oe,ue),t(ue,ze),E(ye,ze,null),t(oe,Oa),t(oe,He),t(He,Na),f(e,ia,n),f(e,Fe,n),t(Fe,Ra),f(e,pa,n),E(Ee,e,n),f(e,ca,n),f(e,Ie,n),t(Ie,Ua),f(e,fa,n),f(e,se,n),t(se,xe),t(xe,Ba),t(xe,Ke),t(Ke,Wa),t(xe,Va),t(se,Ya),t(se,Ae),t(Ae,za),t(Ae,Me),t(Me,Ha),t(Ae,Ka),t(se,Ga),t(se,Ge),t(Ge,Ja),f(e,ua,n),E(Te,e,n),f(e,ha,n),f(e,B,n),t(B,Qa),t(B,Pe),t(Pe,Je),t(Je,Xa),t(B,Za),t(B,Qe),t(Qe,et),t(B,at),t(B,Xe),t(Xe,tt),t(B,st),f(e,ma,n),E(qe,e,n),f(e,da,n),f(e,ie,n),t(ie,he),t(he,Ze),E(Ce,Ze,null),t(ie,lt),t(ie,ea),t(ea,nt),f(e,_a,n),E(me,e,n),f(e,ga,n),E(de,e,n),$a=!0},p(e,[n]){const Se={};n&2&&(Se.$$scope={dirty:n,ctx:e}),N.$set(Se);const aa={};n&2&&(aa.$$scope={dirty:n,ctx:e}),me.$set(aa);const ta={};n&2&&(ta.$$scope={dirty:n,ctx:e}),de.$set(ta)},i(e){$a||(x(_.$$.fragment,e),x(C.$$.fragment,e),x(N.$$.fragment,e),x(z.$$.fragment,e),x(ee.$$.fragment,e),x(ae.$$.fragment,e),x(je.$$.fragment,e),x(ke.$$.fragment,e),x(ye.$$.fragment,e),x(Ee.$$.fragment,e),x(Te.$$.fragment,e),x(qe.$$.fragment,e),x(Ce.$$.fragment,e),x(me.$$.fragment,e),x(de.$$.fragment,e),$a=!0)},o(e){A(_.$$.fragment,e),A(C.$$.fragment,e),A(N.$$.fragment,e),A(z.$$.fragment,e),A(ee.$$.fragment,e),A(ae.$$.fragment,e),A(je.$$.fragment,e),A(ke.$$.fragment,e),A(ye.$$.fragment,e),A(Ee.$$.fragment,e),A(Te.$$.fragment,e),A(qe.$$.fragment,e),A(Ce.$$.fragment,e),A(me.$$.fragment,e),A(de.$$.fragment,e),$a=!1},d(e){a(p),e&&a(b),e&&a(u),T(_),e&&a(q),T(C,e),e&&a(W),e&&a(V),e&&a(O),e&&a(I),e&&a(ce),T(N,e),e&&a(fe),e&&a(S),T(z),e&&a(le),e&&a(c),e&&a(Z),T(ee,e),e&&a(K),e&&a(G),e&&a(ne),T(ae,e),e&&a(re),e&&a(D),e&&a(sa),T(je,e),e&&a(la),e&&a(De),e&&a(na),T(ke,e),e&&a(ra),e&&a(te),e&&a(oa),e&&a(oe),T(ye),e&&a(ia),e&&a(Fe),e&&a(pa),T(Ee,e),e&&a(ca),e&&a(Ie),e&&a(fa),e&&a(se),e&&a(ua),T(Te,e),e&&a(ha),e&&a(B),e&&a(ma),T(qe,e),e&&a(da),e&&a(ie),T(Ce),e&&a(_a),T(me,e),e&&a(ga),T(de,e)}}}const Qt={local:"audio-classification",sections:[{local:"load-superb-dataset",title:"Load SUPERB dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Audio classification"};function Xt(M){return Ut(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ns extends Mt{constructor(p){super();Ot(this,p,Xt,Jt,Nt,{})}}export{ns as default,Qt as metadata};
