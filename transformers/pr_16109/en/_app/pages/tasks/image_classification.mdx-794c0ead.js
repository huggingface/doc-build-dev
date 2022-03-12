import{S as zs,i as Ss,s as Ls,e as o,k as m,w as $,t as l,M as Ns,c as n,d as a,m as f,a as i,x as v,h as r,b as c,F as t,g as p,y as b,q as w,o as j,B as y}from"../../chunks/vendor-4833417e.js";import{T as Xt}from"../../chunks/Tip-fffd6df1.js";import{Y as Os}from"../../chunks/Youtube-27813aed.js";import{I as Va}from"../../chunks/IconCopyLink-4b81c553.js";import{C as P}from"../../chunks/CodeBlock-6a3d1b46.js";import"../../chunks/CopyButton-dacfbfaf.js";function Rs(z){let h,k,d,g,E;return{c(){h=o("p"),k=l("See the image classification "),d=o("a"),g=l("task page"),E=l(" for more information about its associated models, datasets, and metrics."),this.h()},l(u){h=n(u,"P",{});var _=i(h);k=r(_,"See the image classification "),d=n(_,"A",{href:!0,rel:!0});var x=i(d);g=r(x,"task page"),x.forEach(a),E=r(_," for more information about its associated models, datasets, and metrics."),_.forEach(a),this.h()},h(){c(d,"href","https://huggingface.co/tasks/audio-classification"),c(d,"rel","nofollow")},m(u,_){p(u,h,_),t(h,k),t(h,d),t(d,g),t(h,E)},d(u){u&&a(h)}}}function Ms(z){let h,k,d,g,E,u,_,x;return{c(){h=o("p"),k=l("If you aren\u2019t familiar with fine-tuning a model with the "),d=o("a"),g=l("Trainer"),E=l(", take a look at the basic tutorial "),u=o("a"),_=l("here"),x=l("!"),this.h()},l(S){h=n(S,"P",{});var A=i(h);k=r(A,"If you aren\u2019t familiar with fine-tuning a model with the "),d=n(A,"A",{href:!0});var D=i(d);g=r(D,"Trainer"),D.forEach(a),E=r(A,", take a look at the basic tutorial "),u=n(A,"A",{href:!0});var X=i(u);_=r(X,"here"),X.forEach(a),x=r(A,"!"),A.forEach(a),this.h()},h(){c(d,"href","/docs/transformers/pr_16109/en/main_classes/trainer#transformers.Trainer"),c(u,"href","training#finetune-with-trainer")},m(S,A){p(S,h,A),t(h,k),t(h,d),t(d,g),t(h,E),t(h,u),t(u,_),t(h,x)},d(S){S&&a(h)}}}function Us(z){let h,k,d,g,E;return{c(){h=o("p"),k=l("For a more in-depth example of how to fine-tune a model for image classification, take a look at the corresponding "),d=o("a"),g=l("PyTorch notebook"),E=l("."),this.h()},l(u){h=n(u,"P",{});var _=i(h);k=r(_,"For a more in-depth example of how to fine-tune a model for image classification, take a look at the corresponding "),d=n(_,"A",{href:!0,rel:!0});var x=i(d);g=r(x,"PyTorch notebook"),x.forEach(a),E=r(_,"."),_.forEach(a),this.h()},h(){c(d,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/master/examples/image_classification.ipynb"),c(d,"rel","nofollow")},m(u,_){p(u,h,_),t(h,k),t(h,d),t(d,g),t(h,E)},d(u){u&&a(h)}}}function Bs(z){let h,k,d,g,E,u,_,x,S,A,D,X,we,Ga,ea,q,Ja,Z,Ya,Wa,ee,Ka,Qa,aa,R,ta,L,M,Se,ae,Xa,Le,Za,sa,je,et,la,te,ra,ye,at,oa,se,na,ke,tt,ia,le,pa,F,st,Ne,lt,rt,Oe,ot,nt,ma,re,fa,Ee,it,ha,oe,ca,U,pt,Re,mt,ft,da,N,B,Me,ne,ht,Ue,ct,ua,xe,dt,ga,ie,_a,H,ut,pe,Be,gt,_t,$a,me,va,V,$t,He,vt,bt,ba,fe,wa,G,wt,he,Ve,jt,yt,ja,ce,ya,J,kt,Te,Et,xt,ka,de,Ea,O,Y,Ge,ue,Tt,Je,At,xa,W,Ct,Ae,Pt,Dt,Ta,ge,Aa,K,Ca,Ce,qt,Pa,I,T,Ft,Pe,It,zt,Ye,St,Lt,We,Nt,Ot,Ke,Rt,Mt,Qe,Ut,Bt,Ht,_e,Vt,De,Gt,Jt,Yt,$e,Wt,qe,Kt,Qt,Da,ve,qa,Q,Fa;return u=new Va({}),D=new Os({props:{id:"tjAIM7BOYhw"}}),R=new Xt({props:{$$slots:{default:[Rs]},$$scope:{ctx:z}}}),ae=new Va({}),te=new P({props:{code:`from datasets import load_dataset

food = load_dataset("food101", split="train[:5000]")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>food = load_dataset(<span class="hljs-string">&quot;food101&quot;</span>, split=<span class="hljs-string">&quot;train[:5000]&quot;</span>)`}}),se=new P({props:{code:"food = food.train_test_split(test_size=0.2)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>food = food.train_test_split(test_size=<span class="hljs-number">0.2</span>)'}}),le=new P({props:{code:'food["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>food[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;image&#x27;</span>: &lt;PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=512x512 at <span class="hljs-number">0x7F52AFC8AC50</span>&gt;,
 <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">79</span>}`}}),re=new P({props:{code:`labels = food["train"].features["label"].names
label2id, id2label = dict(), dict()
for i, label in enumerate(labels):
    label2id[label] = str(i)
    id2label[str(i)] = label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = food[<span class="hljs-string">&quot;train&quot;</span>].features[<span class="hljs-string">&quot;label&quot;</span>].names
<span class="hljs-meta">&gt;&gt;&gt; </span>label2id, id2label = <span class="hljs-built_in">dict</span>(), <span class="hljs-built_in">dict</span>()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i, label <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(labels):
<span class="hljs-meta">... </span>    label2id[label] = <span class="hljs-built_in">str</span>(i)
<span class="hljs-meta">... </span>    id2label[<span class="hljs-built_in">str</span>(i)] = label`}}),oe=new P({props:{code:"id2label[str(79)]",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>id2label[<span class="hljs-built_in">str</span>(<span class="hljs-number">79</span>)]
<span class="hljs-string">&#x27;prime_rib&#x27;</span>`}}),ne=new Va({}),ie=new P({props:{code:`from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained("google/vit-base-patch16-224-in21k")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>)`}}),me=new P({props:{code:`from torchvision.transforms import RandomResizedCrop, Compose, Normalize, ToTensor

normalize = Normalize(mean=feature_extractor.image_mean, std=feature_extractor.image_std)
_transforms = Compose([RandomResizedCrop(feature_extractor.size), ToTensor(), normalize])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.transforms <span class="hljs-keyword">import</span> RandomResizedCrop, Compose, Normalize, ToTensor

<span class="hljs-meta">&gt;&gt;&gt; </span>normalize = Normalize(mean=feature_extractor.image_mean, std=feature_extractor.image_std)
<span class="hljs-meta">&gt;&gt;&gt; </span>_transforms = Compose([RandomResizedCrop(feature_extractor.size), ToTensor(), normalize])`}}),fe=new P({props:{code:`def transforms(examples):
    examples["pixel_values"] = [_transforms(img.convert("RGB")) for img in examples["image"]]
    del examples["image"]
    return examples`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;pixel_values&quot;</span>] = [_transforms(img.convert(<span class="hljs-string">&quot;RGB&quot;</span>)) <span class="hljs-keyword">for</span> img <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;image&quot;</span>]]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">del</span> examples[<span class="hljs-string">&quot;image&quot;</span>]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> examples`}}),ce=new P({props:{code:"food = food.with_transform(transforms)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>food = food.with_transform(transforms)'}}),de=new P({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator()`}}),ue=new Va({}),ge=new P({props:{code:`from transformers import AutoModelForImageClassification, TrainingArguments, Trainer

model = AutoModelForImageClassification.from_pretrained(
    "google/vit-base-patch16-224-in21k",
    num_labels=len(labels),
    id2label=id2label,
    label2id=label2id,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForImageClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/vit-base-patch16-224-in21k&quot;</span>,
<span class="hljs-meta">... </span>    num_labels=<span class="hljs-built_in">len</span>(labels),
<span class="hljs-meta">... </span>    id2label=id2label,
<span class="hljs-meta">... </span>    label2id=label2id,
<span class="hljs-meta">... </span>)`}}),K=new Xt({props:{$$slots:{default:[Ms]},$$scope:{ctx:z}}}),ve=new P({props:{code:`training_args = TrainingArguments(
    output_dir="./results",
    per_device_train_batch_size=16,
    evaluation_strategy="steps",
    num_train_epochs=4,
    fp16=True,
    save_steps=100,
    eval_steps=100,
    logging_steps=10,
    learning_rate=2e-4,
    save_total_limit=2,
    remove_unused_columns=False,
)

trainer = Trainer(
    model=model,
    args=training_args,
    data_collator=data_collator,
    train_dataset=food["train"],
    eval_dataset=food["test"],
    tokenizer=feature_extractor,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;steps&quot;</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    fp16=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    save_steps=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>    eval_steps=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>    logging_steps=<span class="hljs-number">10</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">2e-4</span>,
<span class="hljs-meta">... </span>    save_total_limit=<span class="hljs-number">2</span>,
<span class="hljs-meta">... </span>    remove_unused_columns=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>    train_dataset=food[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=food[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=feature_extractor,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),Q=new Xt({props:{$$slots:{default:[Us]},$$scope:{ctx:z}}}),{c(){h=o("meta"),k=m(),d=o("h1"),g=o("a"),E=o("span"),$(u.$$.fragment),_=m(),x=o("span"),S=l("Image classification"),A=m(),$(D.$$.fragment),X=m(),we=o("p"),Ga=l("Image classification assigns a label or class to an image. Unlike text or audio classification, the inputs are the pixel values that represent an image. There are many uses for image classification, like detecting damage after a disaster, monitoring crop health, or helping screen medical images for signs of disease."),ea=m(),q=o("p"),Ja=l("This guide will show you how to fine-tune "),Z=o("a"),Ya=l("ViT"),Wa=l(" on the "),ee=o("a"),Ka=l("Food-101"),Qa=l(" dataset to classify a food item in an image."),aa=m(),$(R.$$.fragment),ta=m(),L=o("h2"),M=o("a"),Se=o("span"),$(ae.$$.fragment),Xa=m(),Le=o("span"),Za=l("Load Food-101 dataset"),sa=m(),je=o("p"),et=l("Load only the first 5000 images of the Food-101 dataset from the \u{1F917} Datasets library since it is pretty large:"),la=m(),$(te.$$.fragment),ra=m(),ye=o("p"),at=l("Split this dataset into a train and test set:"),oa=m(),$(se.$$.fragment),na=m(),ke=o("p"),tt=l("Then take a look at an example:"),ia=m(),$(le.$$.fragment),pa=m(),F=o("p"),st=l("The "),Ne=o("code"),lt=l("image"),rt=l(" field contains a PIL image, and each "),Oe=o("code"),ot=l("label"),nt=l(" is an integer that represents a class. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),ma=m(),$(re.$$.fragment),fa=m(),Ee=o("p"),it=l("Now you can convert the label number to a label name for more information:"),ha=m(),$(oe.$$.fragment),ca=m(),U=o("p"),pt=l("Each food class - or label - corresponds to a number; "),Re=o("code"),mt=l("79"),ft=l(" indicates a prime rib in the example above."),da=m(),N=o("h2"),B=o("a"),Me=o("span"),$(ne.$$.fragment),ht=m(),Ue=o("span"),ct=l("Preprocess"),ua=m(),xe=o("p"),dt=l("Load the ViT feature extractor to process the image into a tensor:"),ga=m(),$(ie.$$.fragment),_a=m(),H=o("p"),ut=l("Apply several image transformations to the dataset to make the model more robust against overfitting. Here you\u2019ll use torchvision\u2019s "),pe=o("a"),Be=o("code"),gt=l("transforms"),_t=l(" module. Crop a random part of the image, resize it, and normalize it with the image mean and standard deviation:"),$a=m(),$(me.$$.fragment),va=m(),V=o("p"),$t=l("Create a preprocessing function that will apply the transforms and return the "),He=o("code"),vt=l("pixel_values"),bt=l(" - the inputs to the model - of the image:"),ba=m(),$(fe.$$.fragment),wa=m(),G=o("p"),wt=l("Use \u{1F917} Dataset\u2019s "),he=o("a"),Ve=o("code"),jt=l("with_transform"),yt=l(" method to apply the transforms over the entire dataset. The transforms are applied on-the-fly when you load an element of the dataset:"),ja=m(),$(ce.$$.fragment),ya=m(),J=o("p"),kt=l("Use "),Te=o("a"),Et=l("DefaultDataCollator"),xt=l(" to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the DefaultDataCollator does not apply additional preprocessing such as padding."),ka=m(),$(de.$$.fragment),Ea=m(),O=o("h2"),Y=o("a"),Ge=o("span"),$(ue.$$.fragment),Tt=m(),Je=o("span"),At=l("Fine-tune with Trainer"),xa=m(),W=o("p"),Ct=l("Load ViT with "),Ae=o("a"),Pt=l("AutoModelForImageClassification"),Dt=l(". Specify the number of labels, and pass the model the mapping between label number and label class:"),Ta=m(),$(ge.$$.fragment),Aa=m(),$(K.$$.fragment),Ca=m(),Ce=o("p"),qt=l("At this point, only three steps remain:"),Pa=m(),I=o("ol"),T=o("li"),Ft=l("Define your training hyperparameters in "),Pe=o("a"),It=l("TrainingArguments"),zt=l(". It is important you don\u2019t remove unused columns because this will drop the "),Ye=o("code"),St=l("image"),Lt=l(" column. Without the "),We=o("code"),Nt=l("image"),Ot=l(" column, you can\u2019t create "),Ke=o("code"),Rt=l("pixel_values"),Mt=l(". Set "),Qe=o("code"),Ut=l("remove_unused_columns=False"),Bt=l(" to prevent this behavior!"),Ht=m(),_e=o("li"),Vt=l("Pass the training arguments to "),De=o("a"),Gt=l("Trainer"),Jt=l(" along with the model, datasets, tokenizer, and data collator."),Yt=m(),$e=o("li"),Wt=l("Call "),qe=o("a"),Kt=l("train()"),Qt=l(" to fine-tune your model."),Da=m(),$(ve.$$.fragment),qa=m(),$(Q.$$.fragment),this.h()},l(e){const s=Ns('[data-svelte="svelte-1phssyn"]',document.head);h=n(s,"META",{name:!0,content:!0}),s.forEach(a),k=f(e),d=n(e,"H1",{class:!0});var be=i(d);g=n(be,"A",{id:!0,class:!0,href:!0});var Xe=i(g);E=n(Xe,"SPAN",{});var Ze=i(E);v(u.$$.fragment,Ze),Ze.forEach(a),Xe.forEach(a),_=f(be),x=n(be,"SPAN",{});var Zt=i(x);S=r(Zt,"Image classification"),Zt.forEach(a),be.forEach(a),A=f(e),v(D.$$.fragment,e),X=f(e),we=n(e,"P",{});var es=i(we);Ga=r(es,"Image classification assigns a label or class to an image. Unlike text or audio classification, the inputs are the pixel values that represent an image. There are many uses for image classification, like detecting damage after a disaster, monitoring crop health, or helping screen medical images for signs of disease."),es.forEach(a),ea=f(e),q=n(e,"P",{});var Fe=i(q);Ja=r(Fe,"This guide will show you how to fine-tune "),Z=n(Fe,"A",{href:!0,rel:!0});var as=i(Z);Ya=r(as,"ViT"),as.forEach(a),Wa=r(Fe," on the "),ee=n(Fe,"A",{href:!0,rel:!0});var ts=i(ee);Ka=r(ts,"Food-101"),ts.forEach(a),Qa=r(Fe," dataset to classify a food item in an image."),Fe.forEach(a),aa=f(e),v(R.$$.fragment,e),ta=f(e),L=n(e,"H2",{class:!0});var Ia=i(L);M=n(Ia,"A",{id:!0,class:!0,href:!0});var ss=i(M);Se=n(ss,"SPAN",{});var ls=i(Se);v(ae.$$.fragment,ls),ls.forEach(a),ss.forEach(a),Xa=f(Ia),Le=n(Ia,"SPAN",{});var rs=i(Le);Za=r(rs,"Load Food-101 dataset"),rs.forEach(a),Ia.forEach(a),sa=f(e),je=n(e,"P",{});var os=i(je);et=r(os,"Load only the first 5000 images of the Food-101 dataset from the \u{1F917} Datasets library since it is pretty large:"),os.forEach(a),la=f(e),v(te.$$.fragment,e),ra=f(e),ye=n(e,"P",{});var ns=i(ye);at=r(ns,"Split this dataset into a train and test set:"),ns.forEach(a),oa=f(e),v(se.$$.fragment,e),na=f(e),ke=n(e,"P",{});var is=i(ke);tt=r(is,"Then take a look at an example:"),is.forEach(a),ia=f(e),v(le.$$.fragment,e),pa=f(e),F=n(e,"P",{});var Ie=i(F);st=r(Ie,"The "),Ne=n(Ie,"CODE",{});var ps=i(Ne);lt=r(ps,"image"),ps.forEach(a),rt=r(Ie," field contains a PIL image, and each "),Oe=n(Ie,"CODE",{});var ms=i(Oe);ot=r(ms,"label"),ms.forEach(a),nt=r(Ie," is an integer that represents a class. Create a dictionary that maps a label name to an integer and vice versa. The mapping will help the model recover the label name from the label number:"),Ie.forEach(a),ma=f(e),v(re.$$.fragment,e),fa=f(e),Ee=n(e,"P",{});var fs=i(Ee);it=r(fs,"Now you can convert the label number to a label name for more information:"),fs.forEach(a),ha=f(e),v(oe.$$.fragment,e),ca=f(e),U=n(e,"P",{});var za=i(U);pt=r(za,"Each food class - or label - corresponds to a number; "),Re=n(za,"CODE",{});var hs=i(Re);mt=r(hs,"79"),hs.forEach(a),ft=r(za," indicates a prime rib in the example above."),za.forEach(a),da=f(e),N=n(e,"H2",{class:!0});var Sa=i(N);B=n(Sa,"A",{id:!0,class:!0,href:!0});var cs=i(B);Me=n(cs,"SPAN",{});var ds=i(Me);v(ne.$$.fragment,ds),ds.forEach(a),cs.forEach(a),ht=f(Sa),Ue=n(Sa,"SPAN",{});var us=i(Ue);ct=r(us,"Preprocess"),us.forEach(a),Sa.forEach(a),ua=f(e),xe=n(e,"P",{});var gs=i(xe);dt=r(gs,"Load the ViT feature extractor to process the image into a tensor:"),gs.forEach(a),ga=f(e),v(ie.$$.fragment,e),_a=f(e),H=n(e,"P",{});var La=i(H);ut=r(La,"Apply several image transformations to the dataset to make the model more robust against overfitting. Here you\u2019ll use torchvision\u2019s "),pe=n(La,"A",{href:!0,rel:!0});var _s=i(pe);Be=n(_s,"CODE",{});var $s=i(Be);gt=r($s,"transforms"),$s.forEach(a),_s.forEach(a),_t=r(La," module. Crop a random part of the image, resize it, and normalize it with the image mean and standard deviation:"),La.forEach(a),$a=f(e),v(me.$$.fragment,e),va=f(e),V=n(e,"P",{});var Na=i(V);$t=r(Na,"Create a preprocessing function that will apply the transforms and return the "),He=n(Na,"CODE",{});var vs=i(He);vt=r(vs,"pixel_values"),vs.forEach(a),bt=r(Na," - the inputs to the model - of the image:"),Na.forEach(a),ba=f(e),v(fe.$$.fragment,e),wa=f(e),G=n(e,"P",{});var Oa=i(G);wt=r(Oa,"Use \u{1F917} Dataset\u2019s "),he=n(Oa,"A",{href:!0,rel:!0});var bs=i(he);Ve=n(bs,"CODE",{});var ws=i(Ve);jt=r(ws,"with_transform"),ws.forEach(a),bs.forEach(a),yt=r(Oa," method to apply the transforms over the entire dataset. The transforms are applied on-the-fly when you load an element of the dataset:"),Oa.forEach(a),ja=f(e),v(ce.$$.fragment,e),ya=f(e),J=n(e,"P",{});var Ra=i(J);kt=r(Ra,"Use "),Te=n(Ra,"A",{href:!0});var js=i(Te);Et=r(js,"DefaultDataCollator"),js.forEach(a),xt=r(Ra," to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the DefaultDataCollator does not apply additional preprocessing such as padding."),Ra.forEach(a),ka=f(e),v(de.$$.fragment,e),Ea=f(e),O=n(e,"H2",{class:!0});var Ma=i(O);Y=n(Ma,"A",{id:!0,class:!0,href:!0});var ys=i(Y);Ge=n(ys,"SPAN",{});var ks=i(Ge);v(ue.$$.fragment,ks),ks.forEach(a),ys.forEach(a),Tt=f(Ma),Je=n(Ma,"SPAN",{});var Es=i(Je);At=r(Es,"Fine-tune with Trainer"),Es.forEach(a),Ma.forEach(a),xa=f(e),W=n(e,"P",{});var Ua=i(W);Ct=r(Ua,"Load ViT with "),Ae=n(Ua,"A",{href:!0});var xs=i(Ae);Pt=r(xs,"AutoModelForImageClassification"),xs.forEach(a),Dt=r(Ua,". Specify the number of labels, and pass the model the mapping between label number and label class:"),Ua.forEach(a),Ta=f(e),v(ge.$$.fragment,e),Aa=f(e),v(K.$$.fragment,e),Ca=f(e),Ce=n(e,"P",{});var Ts=i(Ce);qt=r(Ts,"At this point, only three steps remain:"),Ts.forEach(a),Pa=f(e),I=n(e,"OL",{});var ze=i(I);T=n(ze,"LI",{});var C=i(T);Ft=r(C,"Define your training hyperparameters in "),Pe=n(C,"A",{href:!0});var As=i(Pe);It=r(As,"TrainingArguments"),As.forEach(a),zt=r(C,". It is important you don\u2019t remove unused columns because this will drop the "),Ye=n(C,"CODE",{});var Cs=i(Ye);St=r(Cs,"image"),Cs.forEach(a),Lt=r(C," column. Without the "),We=n(C,"CODE",{});var Ps=i(We);Nt=r(Ps,"image"),Ps.forEach(a),Ot=r(C," column, you can\u2019t create "),Ke=n(C,"CODE",{});var Ds=i(Ke);Rt=r(Ds,"pixel_values"),Ds.forEach(a),Mt=r(C,". Set "),Qe=n(C,"CODE",{});var qs=i(Qe);Ut=r(qs,"remove_unused_columns=False"),qs.forEach(a),Bt=r(C," to prevent this behavior!"),C.forEach(a),Ht=f(ze),_e=n(ze,"LI",{});var Ba=i(_e);Vt=r(Ba,"Pass the training arguments to "),De=n(Ba,"A",{href:!0});var Fs=i(De);Gt=r(Fs,"Trainer"),Fs.forEach(a),Jt=r(Ba," along with the model, datasets, tokenizer, and data collator."),Ba.forEach(a),Yt=f(ze),$e=n(ze,"LI",{});var Ha=i($e);Wt=r(Ha,"Call "),qe=n(Ha,"A",{href:!0});var Is=i(qe);Kt=r(Is,"train()"),Is.forEach(a),Qt=r(Ha," to fine-tune your model."),Ha.forEach(a),ze.forEach(a),Da=f(e),v(ve.$$.fragment,e),qa=f(e),v(Q.$$.fragment,e),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(Hs)),c(g,"id","image-classification"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#image-classification"),c(d,"class","relative group"),c(Z,"href","https://huggingface.co/docs/transformers/v4.16.2/en/model_doc/vit"),c(Z,"rel","nofollow"),c(ee,"href","https://huggingface.co/datasets/food101"),c(ee,"rel","nofollow"),c(M,"id","load-food101-dataset"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#load-food101-dataset"),c(L,"class","relative group"),c(B,"id","preprocess"),c(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(B,"href","#preprocess"),c(N,"class","relative group"),c(pe,"href","https://pytorch.org/vision/stable/transforms.html"),c(pe,"rel","nofollow"),c(he,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html?#datasets.Dataset.with_transform"),c(he,"rel","nofollow"),c(Te,"href","/docs/transformers/pr_16109/en/main_classes/data_collator#transformers.DefaultDataCollator"),c(Y,"id","finetune-with-trainer"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#finetune-with-trainer"),c(O,"class","relative group"),c(Ae,"href","/docs/transformers/pr_16109/en/model_doc/auto#transformers.AutoModelForImageClassification"),c(Pe,"href","/docs/transformers/pr_16109/en/main_classes/trainer#transformers.TrainingArguments"),c(De,"href","/docs/transformers/pr_16109/en/main_classes/trainer#transformers.Trainer"),c(qe,"href","/docs/transformers/pr_16109/en/main_classes/trainer#transformers.Trainer.train")},m(e,s){t(document.head,h),p(e,k,s),p(e,d,s),t(d,g),t(g,E),b(u,E,null),t(d,_),t(d,x),t(x,S),p(e,A,s),b(D,e,s),p(e,X,s),p(e,we,s),t(we,Ga),p(e,ea,s),p(e,q,s),t(q,Ja),t(q,Z),t(Z,Ya),t(q,Wa),t(q,ee),t(ee,Ka),t(q,Qa),p(e,aa,s),b(R,e,s),p(e,ta,s),p(e,L,s),t(L,M),t(M,Se),b(ae,Se,null),t(L,Xa),t(L,Le),t(Le,Za),p(e,sa,s),p(e,je,s),t(je,et),p(e,la,s),b(te,e,s),p(e,ra,s),p(e,ye,s),t(ye,at),p(e,oa,s),b(se,e,s),p(e,na,s),p(e,ke,s),t(ke,tt),p(e,ia,s),b(le,e,s),p(e,pa,s),p(e,F,s),t(F,st),t(F,Ne),t(Ne,lt),t(F,rt),t(F,Oe),t(Oe,ot),t(F,nt),p(e,ma,s),b(re,e,s),p(e,fa,s),p(e,Ee,s),t(Ee,it),p(e,ha,s),b(oe,e,s),p(e,ca,s),p(e,U,s),t(U,pt),t(U,Re),t(Re,mt),t(U,ft),p(e,da,s),p(e,N,s),t(N,B),t(B,Me),b(ne,Me,null),t(N,ht),t(N,Ue),t(Ue,ct),p(e,ua,s),p(e,xe,s),t(xe,dt),p(e,ga,s),b(ie,e,s),p(e,_a,s),p(e,H,s),t(H,ut),t(H,pe),t(pe,Be),t(Be,gt),t(H,_t),p(e,$a,s),b(me,e,s),p(e,va,s),p(e,V,s),t(V,$t),t(V,He),t(He,vt),t(V,bt),p(e,ba,s),b(fe,e,s),p(e,wa,s),p(e,G,s),t(G,wt),t(G,he),t(he,Ve),t(Ve,jt),t(G,yt),p(e,ja,s),b(ce,e,s),p(e,ya,s),p(e,J,s),t(J,kt),t(J,Te),t(Te,Et),t(J,xt),p(e,ka,s),b(de,e,s),p(e,Ea,s),p(e,O,s),t(O,Y),t(Y,Ge),b(ue,Ge,null),t(O,Tt),t(O,Je),t(Je,At),p(e,xa,s),p(e,W,s),t(W,Ct),t(W,Ae),t(Ae,Pt),t(W,Dt),p(e,Ta,s),b(ge,e,s),p(e,Aa,s),b(K,e,s),p(e,Ca,s),p(e,Ce,s),t(Ce,qt),p(e,Pa,s),p(e,I,s),t(I,T),t(T,Ft),t(T,Pe),t(Pe,It),t(T,zt),t(T,Ye),t(Ye,St),t(T,Lt),t(T,We),t(We,Nt),t(T,Ot),t(T,Ke),t(Ke,Rt),t(T,Mt),t(T,Qe),t(Qe,Ut),t(T,Bt),t(I,Ht),t(I,_e),t(_e,Vt),t(_e,De),t(De,Gt),t(_e,Jt),t(I,Yt),t(I,$e),t($e,Wt),t($e,qe),t(qe,Kt),t($e,Qt),p(e,Da,s),b(ve,e,s),p(e,qa,s),b(Q,e,s),Fa=!0},p(e,[s]){const be={};s&2&&(be.$$scope={dirty:s,ctx:e}),R.$set(be);const Xe={};s&2&&(Xe.$$scope={dirty:s,ctx:e}),K.$set(Xe);const Ze={};s&2&&(Ze.$$scope={dirty:s,ctx:e}),Q.$set(Ze)},i(e){Fa||(w(u.$$.fragment,e),w(D.$$.fragment,e),w(R.$$.fragment,e),w(ae.$$.fragment,e),w(te.$$.fragment,e),w(se.$$.fragment,e),w(le.$$.fragment,e),w(re.$$.fragment,e),w(oe.$$.fragment,e),w(ne.$$.fragment,e),w(ie.$$.fragment,e),w(me.$$.fragment,e),w(fe.$$.fragment,e),w(ce.$$.fragment,e),w(de.$$.fragment,e),w(ue.$$.fragment,e),w(ge.$$.fragment,e),w(K.$$.fragment,e),w(ve.$$.fragment,e),w(Q.$$.fragment,e),Fa=!0)},o(e){j(u.$$.fragment,e),j(D.$$.fragment,e),j(R.$$.fragment,e),j(ae.$$.fragment,e),j(te.$$.fragment,e),j(se.$$.fragment,e),j(le.$$.fragment,e),j(re.$$.fragment,e),j(oe.$$.fragment,e),j(ne.$$.fragment,e),j(ie.$$.fragment,e),j(me.$$.fragment,e),j(fe.$$.fragment,e),j(ce.$$.fragment,e),j(de.$$.fragment,e),j(ue.$$.fragment,e),j(ge.$$.fragment,e),j(K.$$.fragment,e),j(ve.$$.fragment,e),j(Q.$$.fragment,e),Fa=!1},d(e){a(h),e&&a(k),e&&a(d),y(u),e&&a(A),y(D,e),e&&a(X),e&&a(we),e&&a(ea),e&&a(q),e&&a(aa),y(R,e),e&&a(ta),e&&a(L),y(ae),e&&a(sa),e&&a(je),e&&a(la),y(te,e),e&&a(ra),e&&a(ye),e&&a(oa),y(se,e),e&&a(na),e&&a(ke),e&&a(ia),y(le,e),e&&a(pa),e&&a(F),e&&a(ma),y(re,e),e&&a(fa),e&&a(Ee),e&&a(ha),y(oe,e),e&&a(ca),e&&a(U),e&&a(da),e&&a(N),y(ne),e&&a(ua),e&&a(xe),e&&a(ga),y(ie,e),e&&a(_a),e&&a(H),e&&a($a),y(me,e),e&&a(va),e&&a(V),e&&a(ba),y(fe,e),e&&a(wa),e&&a(G),e&&a(ja),y(ce,e),e&&a(ya),e&&a(J),e&&a(ka),y(de,e),e&&a(Ea),e&&a(O),y(ue),e&&a(xa),e&&a(W),e&&a(Ta),y(ge,e),e&&a(Aa),y(K,e),e&&a(Ca),e&&a(Ce),e&&a(Pa),e&&a(I),e&&a(Da),y(ve,e),e&&a(qa),y(Q,e)}}}const Hs={local:"image-classification",sections:[{local:"load-food101-dataset",title:"Load Food-101 dataset"},{local:"preprocess",title:"Preprocess"},{local:"finetune-with-trainer",title:"Fine-tune with Trainer"}],title:"Image classification"};function Vs(z,h,k){let{fw:d}=h;return z.$$set=g=>{"fw"in g&&k(0,d=g.fw)},[d]}class Xs extends zs{constructor(h){super();Ss(this,h,Vs,Bs,Ls,{fw:0})}}export{Xs as default,Hs as metadata};
