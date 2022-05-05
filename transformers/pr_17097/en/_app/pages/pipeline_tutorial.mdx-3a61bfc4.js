import{S as yn,i as xn,s as wn,e as r,k as h,w as u,t,M as En,c as o,d as a,m as c,a as i,x as d,h as n,b as f,N as bn,F as s,g as p,y as g,q as _,o as v,B as k,v as qn}from"../chunks/vendor-6b77c823.js";import{T as An}from"../chunks/Tip-39098574.js";import{I as os}from"../chunks/IconCopyLink-7a11ce68.js";import{C as q}from"../chunks/CodeBlock-3a8b25a8.js";function Pn(is){let m,D,$,w,z;return{c(){m=r("p"),D=t("Take a look at the "),$=r("a"),w=t("pipeline()"),z=t(" documentation for a complete list of supported taska."),this.h()},l(x){m=o(x,"P",{});var A=i(m);D=n(A,"Take a look at the "),$=o(A,"A",{href:!0});var N=i($);w=n(N,"pipeline()"),N.forEach(a),z=n(A," documentation for a complete list of supported taska."),A.forEach(a),this.h()},h(){f($,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline")},m(x,A){p(x,m,A),s(m,D),s(m,$),s($,w),s(m,z)},d(x){x&&a(m)}}}function Sn(is){let m,D,$,w,z,x,A,N,aa,ps,E,ta,ye,na,la,Y,ra,oa,xe,ia,pa,fs,P,Z,fa,we,ha,ca,ma,Je,ua,da,ee,ga,Ee,_a,va,hs,H,cs,F,R,Qe,se,ka,Xe,$a,ms,b,ja,be,ya,xa,qe,wa,Ea,Ae,ba,qa,us,Pe,ae,Aa,Se,Pa,Sa,ds,te,gs,ne,le,Ta,Te,Ma,za,_s,re,vs,Me,Fa,ks,oe,$s,j,La,ze,Ca,Ia,Ye,Da,Na,Fe,Ha,Ra,Ze,Oa,Ka,js,ie,ys,L,O,es,pe,Ua,ss,Va,xs,y,Ba,Le,Ga,Wa,fe,Ja,Qa,as,Xa,Ya,Ce,Za,et,ws,he,Es,K,st,Ie,at,tt,bs,ce,qs,U,nt,De,lt,rt,As,me,Ps,C,V,ts,ue,ot,ns,it,Ss,B,pt,Ne,ft,ht,Ts,He,ct,Ms,de,zs,S,mt,ge,ut,dt,Re,gt,_t,Fs,_e,Ls,G,vt,Oe,kt,$t,Cs,ve,Is,I,W,ls,ke,jt,rs,yt,Ds,J,xt,Ke,wt,Et,Ns,Ue,bt,Hs,Ve,Be,qt,Rs,$e,Os;return x=new os({}),H=new An({props:{$$slots:{default:[Pn]},$$scope:{ctx:is}}}),se=new os({}),te=new q({props:{code:`from transformers import pipeline

generator = pipeline(task="text-generation")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = pipeline(task=<span class="hljs-string">&quot;text-generation&quot;</span>)`}}),re=new q({props:{code:`generator(
    "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone"
)  # doctest: +SKIP`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># doctest: +SKIP</span>
[{<span class="hljs-string">&#x27;generated_text&#x27;</span>: <span class="hljs-string">&#x27;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Seven for the Iron-priests at the door to the east, and thirteen for the Lord Kings at the end of the mountain&#x27;</span>}]`}}),oe=new q({props:{code:`generator(
    [
        "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone",
        "Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne",
    ]
)  # doctest: +SKIP`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne&quot;</span>,
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># doctest: +SKIP</span>`}}),ie=new q({props:{code:`generator(
    "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone",
    num_return_sequences=2,
)  # doctest: +SKIP`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>,
<span class="hljs-meta">... </span>    num_return_sequences=<span class="hljs-number">2</span>,
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># doctest: +SKIP</span>`}}),pe=new os({}),he=new q({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("distilgpt2")
model = AutoModelForCausalLM.from_pretrained("distilgpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)`}}),ce=new q({props:{code:`from transformers import pipeline

generator = pipeline(task="text-generation", model=model, tokenizer=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = pipeline(task=<span class="hljs-string">&quot;text-generation&quot;</span>, model=model, tokenizer=tokenizer)`}}),me=new q({props:{code:`generator(
    "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone"
)  # doctest: +SKIP`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># doctest: +SKIP</span>
[{<span class="hljs-string">&#x27;generated_text&#x27;</span>: <span class="hljs-string">&#x27;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Seven for the Dragon-lords (for them to rule in a world ruled by their rulers, and all who live within the realm&#x27;</span>}]`}}),ue=new os({}),de=new q({props:{code:`from datasets import load_dataset
import torch

torch.manual_seed(42)
ds = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
audio_file = ds[0]["audio"]["path"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">42</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>audio_file = ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;path&quot;</span>]`}}),_e=new q({props:{code:`from transformers import pipeline

audio_classifier = pipeline(
    task="audio-classification", model="ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>audio_classifier = pipeline(
<span class="hljs-meta">... </span>    task=<span class="hljs-string">&quot;audio-classification&quot;</span>, model=<span class="hljs-string">&quot;ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition&quot;</span>
<span class="hljs-meta">... </span>)`}}),ve=new q({props:{code:`preds = audio_classifier(audio_file)
preds = [{"score": round(pred["score"], 4), "label": pred["label"]} for pred in preds]
preds`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>preds = audio_classifier(audio_file)
<span class="hljs-meta">&gt;&gt;&gt; </span>preds = [{<span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-built_in">round</span>(pred[<span class="hljs-string">&quot;score&quot;</span>], <span class="hljs-number">4</span>), <span class="hljs-string">&quot;label&quot;</span>: pred[<span class="hljs-string">&quot;label&quot;</span>]} <span class="hljs-keyword">for</span> pred <span class="hljs-keyword">in</span> preds]
<span class="hljs-meta">&gt;&gt;&gt; </span>preds
[{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1315</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;calm&#x27;</span>}, {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1307</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;neutral&#x27;</span>}, {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1274</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;sad&#x27;</span>}, {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1261</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;fearful&#x27;</span>}, {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.1242</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;happy&#x27;</span>}]`}}),ke=new os({}),$e=new q({props:{code:`from transformers import pipeline

vision_classifier = pipeline(task="image-classification")
preds = vision_classifier(
    images="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg"
)
preds = [{"score": round(pred["score"], 4), "label": pred["label"]} for pred in preds]
preds`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>vision_classifier = pipeline(task=<span class="hljs-string">&quot;image-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>preds = vision_classifier(
<span class="hljs-meta">... </span>    images=<span class="hljs-string">&quot;https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>preds = [{<span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-built_in">round</span>(pred[<span class="hljs-string">&quot;score&quot;</span>], <span class="hljs-number">4</span>), <span class="hljs-string">&quot;label&quot;</span>: pred[<span class="hljs-string">&quot;label&quot;</span>]} <span class="hljs-keyword">for</span> pred <span class="hljs-keyword">in</span> preds]
<span class="hljs-meta">&gt;&gt;&gt; </span>preds
[{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.4335</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;lynx, catamount&#x27;</span>}, {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0348</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;cougar, puma, catamount, mountain lion, painter, panther, Felis concolor&#x27;</span>}, {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0324</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;snow leopard, ounce, Panthera uncia&#x27;</span>}, {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0239</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;Egyptian cat&#x27;</span>}, {<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.0229</span>, <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;tiger cat&#x27;</span>}]`}}),{c(){m=r("meta"),D=h(),$=r("h1"),w=r("a"),z=r("span"),u(x.$$.fragment),A=h(),N=r("span"),aa=t("Pipelines for inference"),ps=h(),E=r("p"),ta=t("The "),ye=r("a"),na=t("pipeline()"),la=t(" makes it simple to use any model from the "),Y=r("a"),ra=t("Model Hub"),oa=t(" for inference on a variety of tasks such as text generation, image segmentation and audio classification. Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the "),xe=r("a"),ia=t("pipeline()"),pa=t("! This tutorial will teach you to:"),fs=h(),P=r("ul"),Z=r("li"),fa=t("Use a "),we=r("a"),ha=t("pipeline()"),ca=t(" for inference."),ma=h(),Je=r("li"),ua=t("Use a specific tokenizer or model."),da=h(),ee=r("li"),ga=t("Use a "),Ee=r("a"),_a=t("pipeline()"),va=t(" for audio and vision tasks."),hs=h(),u(H.$$.fragment),cs=h(),F=r("h2"),R=r("a"),Qe=r("span"),u(se.$$.fragment),ka=h(),Xe=r("span"),$a=t("Pipeline usage"),ms=h(),b=r("p"),ja=t("While each task has an associated "),be=r("a"),ya=t("pipeline()"),xa=t(", it is simpler to use the general "),qe=r("a"),wa=t("pipeline()"),Ea=t(" abstraction which contains all the specific task pipelines. The "),Ae=r("a"),ba=t("pipeline()"),qa=t(" automatically loads a default model and tokenizer capable of inference for your task."),us=h(),Pe=r("ol"),ae=r("li"),Aa=t("Start by creating a "),Se=r("a"),Pa=t("pipeline()"),Sa=t(" and specify an inference task:"),ds=h(),u(te.$$.fragment),gs=h(),ne=r("ol"),le=r("li"),Ta=t("Pass your input text to the "),Te=r("a"),Ma=t("pipeline()"),za=t(":"),_s=h(),u(re.$$.fragment),vs=h(),Me=r("p"),Fa=t("If you have more than one input, pass your input as a list:"),ks=h(),u(oe.$$.fragment),$s=h(),j=r("p"),La=t("Any additional parameters for your task can also be included in the "),ze=r("a"),Ca=t("pipeline()"),Ia=t(". The "),Ye=r("code"),Da=t("text-generation"),Na=t(" task has a "),Fe=r("a"),Ha=t("generate()"),Ra=t(" method with several parameters for controlling the output. For example, if you want to generate more than one output, set the "),Ze=r("code"),Oa=t("num_return_sequences"),Ka=t(" parameter:"),js=h(),u(ie.$$.fragment),ys=h(),L=r("h3"),O=r("a"),es=r("span"),u(pe.$$.fragment),Ua=h(),ss=r("span"),Va=t("Choose a model and tokenizer"),xs=h(),y=r("p"),Ba=t("The "),Le=r("a"),Ga=t("pipeline()"),Wa=t(" accepts any model from the "),fe=r("a"),Ja=t("Model Hub"),Qa=t(". There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task. Once you\u2019ve picked an appropriate model, load it with the corresponding "),as=r("code"),Xa=t("AutoModelFor"),Ya=t(" and [`AutoTokenizer\u2019] class. For example, load the "),Ce=r("a"),Za=t("AutoModelForCausalLM"),et=t(" class for a causal language modeling task:"),ws=h(),u(he.$$.fragment),Es=h(),K=r("p"),st=t("Create a "),Ie=r("a"),at=t("pipeline()"),tt=t(" for your task, and specify the model and tokenizer you\u2019ve loaded:"),bs=h(),u(ce.$$.fragment),qs=h(),U=r("p"),nt=t("Pass your input text to the "),De=r("a"),lt=t("pipeline()"),rt=t(" to generate some text:"),As=h(),u(me.$$.fragment),Ps=h(),C=r("h2"),V=r("a"),ts=r("span"),u(ue.$$.fragment),ot=h(),ns=r("span"),it=t("Audio pipeline"),Ss=h(),B=r("p"),pt=t("The flexibility of the "),Ne=r("a"),ft=t("pipeline()"),ht=t(" means it can also be extended to audio tasks."),Ts=h(),He=r("p"),ct=t("For example, let\u2019s classify the emotion in this audio clip:"),Ms=h(),u(de.$$.fragment),zs=h(),S=r("p"),mt=t("Find an "),ge=r("a"),ut=t("audio classification"),dt=t(" model on the Model Hub for emotion recognition and load it in the "),Re=r("a"),gt=t("pipeline()"),_t=t(":"),Fs=h(),u(_e.$$.fragment),Ls=h(),G=r("p"),vt=t("Pass the audio file to the "),Oe=r("a"),kt=t("pipeline()"),$t=t(":"),Cs=h(),u(ve.$$.fragment),Is=h(),I=r("h2"),W=r("a"),ls=r("span"),u(ke.$$.fragment),jt=h(),rs=r("span"),yt=t("Vision pipeline"),Ds=h(),J=r("p"),xt=t("Finally, using a "),Ke=r("a"),wt=t("pipeline()"),Et=t(" for vision tasks is practically identical."),Ns=h(),Ue=r("p"),bt=t("Specify your vision task and pass your image to the classifier. The imaage can be a link or a local path to the image. For example, what species of cat is shown below?"),Hs=h(),Ve=r("p"),Be=r("img"),Rs=h(),u($e.$$.fragment),this.h()},l(e){const l=En('[data-svelte="svelte-1phssyn"]',document.head);m=o(l,"META",{name:!0,content:!0}),l.forEach(a),D=c(e),$=o(e,"H1",{class:!0});var je=i($);w=o(je,"A",{id:!0,class:!0,href:!0});var At=i(w);z=o(At,"SPAN",{});var Pt=i(z);d(x.$$.fragment,Pt),Pt.forEach(a),At.forEach(a),A=c(je),N=o(je,"SPAN",{});var St=i(N);aa=n(St,"Pipelines for inference"),St.forEach(a),je.forEach(a),ps=c(e),E=o(e,"P",{});var Q=i(E);ta=n(Q,"The "),ye=o(Q,"A",{href:!0});var Tt=i(ye);na=n(Tt,"pipeline()"),Tt.forEach(a),la=n(Q," makes it simple to use any model from the "),Y=o(Q,"A",{href:!0,rel:!0});var Mt=i(Y);ra=n(Mt,"Model Hub"),Mt.forEach(a),oa=n(Q," for inference on a variety of tasks such as text generation, image segmentation and audio classification. Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the "),xe=o(Q,"A",{href:!0});var zt=i(xe);ia=n(zt,"pipeline()"),zt.forEach(a),pa=n(Q,"! This tutorial will teach you to:"),Q.forEach(a),fs=c(e),P=o(e,"UL",{});var Ge=i(P);Z=o(Ge,"LI",{});var Ks=i(Z);fa=n(Ks,"Use a "),we=o(Ks,"A",{href:!0});var Ft=i(we);ha=n(Ft,"pipeline()"),Ft.forEach(a),ca=n(Ks," for inference."),Ks.forEach(a),ma=c(Ge),Je=o(Ge,"LI",{});var Lt=i(Je);ua=n(Lt,"Use a specific tokenizer or model."),Lt.forEach(a),da=c(Ge),ee=o(Ge,"LI",{});var Us=i(ee);ga=n(Us,"Use a "),Ee=o(Us,"A",{href:!0});var Ct=i(Ee);_a=n(Ct,"pipeline()"),Ct.forEach(a),va=n(Us," for audio and vision tasks."),Us.forEach(a),Ge.forEach(a),hs=c(e),d(H.$$.fragment,e),cs=c(e),F=o(e,"H2",{class:!0});var Vs=i(F);R=o(Vs,"A",{id:!0,class:!0,href:!0});var It=i(R);Qe=o(It,"SPAN",{});var Dt=i(Qe);d(se.$$.fragment,Dt),Dt.forEach(a),It.forEach(a),ka=c(Vs),Xe=o(Vs,"SPAN",{});var Nt=i(Xe);$a=n(Nt,"Pipeline usage"),Nt.forEach(a),Vs.forEach(a),ms=c(e),b=o(e,"P",{});var X=i(b);ja=n(X,"While each task has an associated "),be=o(X,"A",{href:!0});var Ht=i(be);ya=n(Ht,"pipeline()"),Ht.forEach(a),xa=n(X,", it is simpler to use the general "),qe=o(X,"A",{href:!0});var Rt=i(qe);wa=n(Rt,"pipeline()"),Rt.forEach(a),Ea=n(X," abstraction which contains all the specific task pipelines. The "),Ae=o(X,"A",{href:!0});var Ot=i(Ae);ba=n(Ot,"pipeline()"),Ot.forEach(a),qa=n(X," automatically loads a default model and tokenizer capable of inference for your task."),X.forEach(a),us=c(e),Pe=o(e,"OL",{});var Kt=i(Pe);ae=o(Kt,"LI",{});var Bs=i(ae);Aa=n(Bs,"Start by creating a "),Se=o(Bs,"A",{href:!0});var Ut=i(Se);Pa=n(Ut,"pipeline()"),Ut.forEach(a),Sa=n(Bs," and specify an inference task:"),Bs.forEach(a),Kt.forEach(a),ds=c(e),d(te.$$.fragment,e),gs=c(e),ne=o(e,"OL",{start:!0});var Vt=i(ne);le=o(Vt,"LI",{});var Gs=i(le);Ta=n(Gs,"Pass your input text to the "),Te=o(Gs,"A",{href:!0});var Bt=i(Te);Ma=n(Bt,"pipeline()"),Bt.forEach(a),za=n(Gs,":"),Gs.forEach(a),Vt.forEach(a),_s=c(e),d(re.$$.fragment,e),vs=c(e),Me=o(e,"P",{});var Gt=i(Me);Fa=n(Gt,"If you have more than one input, pass your input as a list:"),Gt.forEach(a),ks=c(e),d(oe.$$.fragment,e),$s=c(e),j=o(e,"P",{});var T=i(j);La=n(T,"Any additional parameters for your task can also be included in the "),ze=o(T,"A",{href:!0});var Wt=i(ze);Ca=n(Wt,"pipeline()"),Wt.forEach(a),Ia=n(T,". The "),Ye=o(T,"CODE",{});var Jt=i(Ye);Da=n(Jt,"text-generation"),Jt.forEach(a),Na=n(T," task has a "),Fe=o(T,"A",{href:!0});var Qt=i(Fe);Ha=n(Qt,"generate()"),Qt.forEach(a),Ra=n(T," method with several parameters for controlling the output. For example, if you want to generate more than one output, set the "),Ze=o(T,"CODE",{});var Xt=i(Ze);Oa=n(Xt,"num_return_sequences"),Xt.forEach(a),Ka=n(T," parameter:"),T.forEach(a),js=c(e),d(ie.$$.fragment,e),ys=c(e),L=o(e,"H3",{class:!0});var Ws=i(L);O=o(Ws,"A",{id:!0,class:!0,href:!0});var Yt=i(O);es=o(Yt,"SPAN",{});var Zt=i(es);d(pe.$$.fragment,Zt),Zt.forEach(a),Yt.forEach(a),Ua=c(Ws),ss=o(Ws,"SPAN",{});var en=i(ss);Va=n(en,"Choose a model and tokenizer"),en.forEach(a),Ws.forEach(a),xs=c(e),y=o(e,"P",{});var M=i(y);Ba=n(M,"The "),Le=o(M,"A",{href:!0});var sn=i(Le);Ga=n(sn,"pipeline()"),sn.forEach(a),Wa=n(M," accepts any model from the "),fe=o(M,"A",{href:!0,rel:!0});var an=i(fe);Ja=n(an,"Model Hub"),an.forEach(a),Qa=n(M,". There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task. Once you\u2019ve picked an appropriate model, load it with the corresponding "),as=o(M,"CODE",{});var tn=i(as);Xa=n(tn,"AutoModelFor"),tn.forEach(a),Ya=n(M," and [`AutoTokenizer\u2019] class. For example, load the "),Ce=o(M,"A",{href:!0});var nn=i(Ce);Za=n(nn,"AutoModelForCausalLM"),nn.forEach(a),et=n(M," class for a causal language modeling task:"),M.forEach(a),ws=c(e),d(he.$$.fragment,e),Es=c(e),K=o(e,"P",{});var Js=i(K);st=n(Js,"Create a "),Ie=o(Js,"A",{href:!0});var ln=i(Ie);at=n(ln,"pipeline()"),ln.forEach(a),tt=n(Js," for your task, and specify the model and tokenizer you\u2019ve loaded:"),Js.forEach(a),bs=c(e),d(ce.$$.fragment,e),qs=c(e),U=o(e,"P",{});var Qs=i(U);nt=n(Qs,"Pass your input text to the "),De=o(Qs,"A",{href:!0});var rn=i(De);lt=n(rn,"pipeline()"),rn.forEach(a),rt=n(Qs," to generate some text:"),Qs.forEach(a),As=c(e),d(me.$$.fragment,e),Ps=c(e),C=o(e,"H2",{class:!0});var Xs=i(C);V=o(Xs,"A",{id:!0,class:!0,href:!0});var on=i(V);ts=o(on,"SPAN",{});var pn=i(ts);d(ue.$$.fragment,pn),pn.forEach(a),on.forEach(a),ot=c(Xs),ns=o(Xs,"SPAN",{});var fn=i(ns);it=n(fn,"Audio pipeline"),fn.forEach(a),Xs.forEach(a),Ss=c(e),B=o(e,"P",{});var Ys=i(B);pt=n(Ys,"The flexibility of the "),Ne=o(Ys,"A",{href:!0});var hn=i(Ne);ft=n(hn,"pipeline()"),hn.forEach(a),ht=n(Ys," means it can also be extended to audio tasks."),Ys.forEach(a),Ts=c(e),He=o(e,"P",{});var cn=i(He);ct=n(cn,"For example, let\u2019s classify the emotion in this audio clip:"),cn.forEach(a),Ms=c(e),d(de.$$.fragment,e),zs=c(e),S=o(e,"P",{});var We=i(S);mt=n(We,"Find an "),ge=o(We,"A",{href:!0,rel:!0});var mn=i(ge);ut=n(mn,"audio classification"),mn.forEach(a),dt=n(We," model on the Model Hub for emotion recognition and load it in the "),Re=o(We,"A",{href:!0});var un=i(Re);gt=n(un,"pipeline()"),un.forEach(a),_t=n(We,":"),We.forEach(a),Fs=c(e),d(_e.$$.fragment,e),Ls=c(e),G=o(e,"P",{});var Zs=i(G);vt=n(Zs,"Pass the audio file to the "),Oe=o(Zs,"A",{href:!0});var dn=i(Oe);kt=n(dn,"pipeline()"),dn.forEach(a),$t=n(Zs,":"),Zs.forEach(a),Cs=c(e),d(ve.$$.fragment,e),Is=c(e),I=o(e,"H2",{class:!0});var ea=i(I);W=o(ea,"A",{id:!0,class:!0,href:!0});var gn=i(W);ls=o(gn,"SPAN",{});var _n=i(ls);d(ke.$$.fragment,_n),_n.forEach(a),gn.forEach(a),jt=c(ea),rs=o(ea,"SPAN",{});var vn=i(rs);yt=n(vn,"Vision pipeline"),vn.forEach(a),ea.forEach(a),Ds=c(e),J=o(e,"P",{});var sa=i(J);xt=n(sa,"Finally, using a "),Ke=o(sa,"A",{href:!0});var kn=i(Ke);wt=n(kn,"pipeline()"),kn.forEach(a),Et=n(sa," for vision tasks is practically identical."),sa.forEach(a),Ns=c(e),Ue=o(e,"P",{});var $n=i(Ue);bt=n($n,"Specify your vision task and pass your image to the classifier. The imaage can be a link or a local path to the image. For example, what species of cat is shown below?"),$n.forEach(a),Hs=c(e),Ve=o(e,"P",{});var jn=i(Ve);Be=o(jn,"IMG",{src:!0,alt:!0}),jn.forEach(a),Rs=c(e),d($e.$$.fragment,e),this.h()},h(){f(m,"name","hf:doc:metadata"),f(m,"content",JSON.stringify(Tn)),f(w,"id","pipelines-for-inference"),f(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(w,"href","#pipelines-for-inference"),f($,"class","relative group"),f(ye,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(Y,"href","https://huggingface.co/models"),f(Y,"rel","nofollow"),f(xe,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(we,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(Ee,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(R,"id","pipeline-usage"),f(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(R,"href","#pipeline-usage"),f(F,"class","relative group"),f(be,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(qe,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(Ae,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(Se,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(Te,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(ne,"start","2"),f(ze,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(Fe,"href","/docs/transformers/pr_17097/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),f(O,"id","choose-a-model-and-tokenizer"),f(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(O,"href","#choose-a-model-and-tokenizer"),f(L,"class","relative group"),f(Le,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(fe,"href","https://huggingface.co/models"),f(fe,"rel","nofollow"),f(Ce,"href","/docs/transformers/pr_17097/en/model_doc/auto#transformers.AutoModelForCausalLM"),f(Ie,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(De,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(V,"id","audio-pipeline"),f(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(V,"href","#audio-pipeline"),f(C,"class","relative group"),f(Ne,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(ge,"href","https://huggingface.co/models?pipeline_tag=audio-classification"),f(ge,"rel","nofollow"),f(Re,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(Oe,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),f(W,"id","vision-pipeline"),f(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(W,"href","#vision-pipeline"),f(I,"class","relative group"),f(Ke,"href","/docs/transformers/pr_17097/en/main_classes/pipelines#transformers.pipeline"),bn(Be.src,qt="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg")||f(Be,"src",qt),f(Be,"alt","pipeline-cat-chonk")},m(e,l){s(document.head,m),p(e,D,l),p(e,$,l),s($,w),s(w,z),g(x,z,null),s($,A),s($,N),s(N,aa),p(e,ps,l),p(e,E,l),s(E,ta),s(E,ye),s(ye,na),s(E,la),s(E,Y),s(Y,ra),s(E,oa),s(E,xe),s(xe,ia),s(E,pa),p(e,fs,l),p(e,P,l),s(P,Z),s(Z,fa),s(Z,we),s(we,ha),s(Z,ca),s(P,ma),s(P,Je),s(Je,ua),s(P,da),s(P,ee),s(ee,ga),s(ee,Ee),s(Ee,_a),s(ee,va),p(e,hs,l),g(H,e,l),p(e,cs,l),p(e,F,l),s(F,R),s(R,Qe),g(se,Qe,null),s(F,ka),s(F,Xe),s(Xe,$a),p(e,ms,l),p(e,b,l),s(b,ja),s(b,be),s(be,ya),s(b,xa),s(b,qe),s(qe,wa),s(b,Ea),s(b,Ae),s(Ae,ba),s(b,qa),p(e,us,l),p(e,Pe,l),s(Pe,ae),s(ae,Aa),s(ae,Se),s(Se,Pa),s(ae,Sa),p(e,ds,l),g(te,e,l),p(e,gs,l),p(e,ne,l),s(ne,le),s(le,Ta),s(le,Te),s(Te,Ma),s(le,za),p(e,_s,l),g(re,e,l),p(e,vs,l),p(e,Me,l),s(Me,Fa),p(e,ks,l),g(oe,e,l),p(e,$s,l),p(e,j,l),s(j,La),s(j,ze),s(ze,Ca),s(j,Ia),s(j,Ye),s(Ye,Da),s(j,Na),s(j,Fe),s(Fe,Ha),s(j,Ra),s(j,Ze),s(Ze,Oa),s(j,Ka),p(e,js,l),g(ie,e,l),p(e,ys,l),p(e,L,l),s(L,O),s(O,es),g(pe,es,null),s(L,Ua),s(L,ss),s(ss,Va),p(e,xs,l),p(e,y,l),s(y,Ba),s(y,Le),s(Le,Ga),s(y,Wa),s(y,fe),s(fe,Ja),s(y,Qa),s(y,as),s(as,Xa),s(y,Ya),s(y,Ce),s(Ce,Za),s(y,et),p(e,ws,l),g(he,e,l),p(e,Es,l),p(e,K,l),s(K,st),s(K,Ie),s(Ie,at),s(K,tt),p(e,bs,l),g(ce,e,l),p(e,qs,l),p(e,U,l),s(U,nt),s(U,De),s(De,lt),s(U,rt),p(e,As,l),g(me,e,l),p(e,Ps,l),p(e,C,l),s(C,V),s(V,ts),g(ue,ts,null),s(C,ot),s(C,ns),s(ns,it),p(e,Ss,l),p(e,B,l),s(B,pt),s(B,Ne),s(Ne,ft),s(B,ht),p(e,Ts,l),p(e,He,l),s(He,ct),p(e,Ms,l),g(de,e,l),p(e,zs,l),p(e,S,l),s(S,mt),s(S,ge),s(ge,ut),s(S,dt),s(S,Re),s(Re,gt),s(S,_t),p(e,Fs,l),g(_e,e,l),p(e,Ls,l),p(e,G,l),s(G,vt),s(G,Oe),s(Oe,kt),s(G,$t),p(e,Cs,l),g(ve,e,l),p(e,Is,l),p(e,I,l),s(I,W),s(W,ls),g(ke,ls,null),s(I,jt),s(I,rs),s(rs,yt),p(e,Ds,l),p(e,J,l),s(J,xt),s(J,Ke),s(Ke,wt),s(J,Et),p(e,Ns,l),p(e,Ue,l),s(Ue,bt),p(e,Hs,l),p(e,Ve,l),s(Ve,Be),p(e,Rs,l),g($e,e,l),Os=!0},p(e,[l]){const je={};l&2&&(je.$$scope={dirty:l,ctx:e}),H.$set(je)},i(e){Os||(_(x.$$.fragment,e),_(H.$$.fragment,e),_(se.$$.fragment,e),_(te.$$.fragment,e),_(re.$$.fragment,e),_(oe.$$.fragment,e),_(ie.$$.fragment,e),_(pe.$$.fragment,e),_(he.$$.fragment,e),_(ce.$$.fragment,e),_(me.$$.fragment,e),_(ue.$$.fragment,e),_(de.$$.fragment,e),_(_e.$$.fragment,e),_(ve.$$.fragment,e),_(ke.$$.fragment,e),_($e.$$.fragment,e),Os=!0)},o(e){v(x.$$.fragment,e),v(H.$$.fragment,e),v(se.$$.fragment,e),v(te.$$.fragment,e),v(re.$$.fragment,e),v(oe.$$.fragment,e),v(ie.$$.fragment,e),v(pe.$$.fragment,e),v(he.$$.fragment,e),v(ce.$$.fragment,e),v(me.$$.fragment,e),v(ue.$$.fragment,e),v(de.$$.fragment,e),v(_e.$$.fragment,e),v(ve.$$.fragment,e),v(ke.$$.fragment,e),v($e.$$.fragment,e),Os=!1},d(e){a(m),e&&a(D),e&&a($),k(x),e&&a(ps),e&&a(E),e&&a(fs),e&&a(P),e&&a(hs),k(H,e),e&&a(cs),e&&a(F),k(se),e&&a(ms),e&&a(b),e&&a(us),e&&a(Pe),e&&a(ds),k(te,e),e&&a(gs),e&&a(ne),e&&a(_s),k(re,e),e&&a(vs),e&&a(Me),e&&a(ks),k(oe,e),e&&a($s),e&&a(j),e&&a(js),k(ie,e),e&&a(ys),e&&a(L),k(pe),e&&a(xs),e&&a(y),e&&a(ws),k(he,e),e&&a(Es),e&&a(K),e&&a(bs),k(ce,e),e&&a(qs),e&&a(U),e&&a(As),k(me,e),e&&a(Ps),e&&a(C),k(ue),e&&a(Ss),e&&a(B),e&&a(Ts),e&&a(He),e&&a(Ms),k(de,e),e&&a(zs),e&&a(S),e&&a(Fs),k(_e,e),e&&a(Ls),e&&a(G),e&&a(Cs),k(ve,e),e&&a(Is),e&&a(I),k(ke),e&&a(Ds),e&&a(J),e&&a(Ns),e&&a(Ue),e&&a(Hs),e&&a(Ve),e&&a(Rs),k($e,e)}}}const Tn={local:"pipelines-for-inference",sections:[{local:"pipeline-usage",sections:[{local:"choose-a-model-and-tokenizer",title:"Choose a model and tokenizer"}],title:"Pipeline usage"},{local:"audio-pipeline",title:"Audio pipeline"},{local:"vision-pipeline",title:"Vision pipeline"}],title:"Pipelines for inference"};function Mn(is){return qn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class In extends yn{constructor(m){super();xn(this,m,Mn,Sn,wn,{})}}export{In as default,Tn as metadata};
