import{S as $n,i as xn,s as yn,e as r,k as h,w as d,t,M as wn,c as l,d as a,m as c,a as i,x as g,h as n,b as f,N as jn,F as s,g as p,y as v,q as _,o as k,B as $,v as En}from"../chunks/vendor-6b77c823.js";import{T as bn}from"../chunks/Tip-39098574.js";import{I as ls}from"../chunks/IconCopyLink-7a11ce68.js";import{C as S}from"../chunks/CodeBlock-3a8b25a8.js";function An(os){let m,N,u,j,F;return{c(){m=r("p"),N=t("Take a look at the "),u=r("a"),j=t("pipeline()"),F=t(" documentation for a complete list of supported taska."),this.h()},l(w){m=l(w,"P",{});var P=i(m);N=n(P,"Take a look at the "),u=l(P,"A",{href:!0});var H=i(u);j=n(H,"pipeline()"),H.forEach(a),F=n(P," documentation for a complete list of supported taska."),P.forEach(a),this.h()},h(){f(u,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline")},m(w,P){p(w,m,P),s(m,N),s(m,u),s(u,j),s(m,F)},d(w){w&&a(m)}}}function Pn(os){let m,N,u,j,F,w,P,H,Zs,is,E,ea,we,sa,aa,Z,ta,na,je,ra,la,ps,T,ee,oa,Ee,ia,pa,fa,Be,ha,ca,se,ma,be,ua,da,fs,I,hs,z,R,Ge,ae,ga,Qe,va,cs,b,_a,Ae,ka,$a,Pe,xa,ya,Te,wa,ja,ms,qe,te,Ea,Me,ba,Aa,us,ne,ds,re,le,Pa,Se,Ta,qa,gs,oe,vs,Fe,Ma,_s,ie,ks,x,Sa,ze,Fa,za,Xe,La,Ca,Le,Da,Na,Ye,Ha,Ia,$s,pe,xs,L,O,Ze,fe,Ra,es,Oa,ys,y,Ua,Ce,Wa,Ja,he,Ka,Va,ss,Ba,Ga,De,Qa,Xa,ws,ce,js,U,Ya,Ne,Za,et,Es,me,bs,W,st,He,at,tt,As,ue,Ps,C,J,as,de,nt,ts,rt,Ts,K,lt,Ie,ot,it,qs,A,pt,ge,ft,ht,ve,ct,mt,Re,ut,dt,Ms,_e,Ss,V,gt,Oe,vt,_t,Fs,ke,zs,D,B,ns,$e,kt,rs,$t,Ls,G,xt,Ue,yt,wt,Cs,We,jt,Ds,Je,Ke,Et,Ns,xe,Hs;return w=new ls({}),I=new bn({props:{$$slots:{default:[An]},$$scope:{ctx:os}}}),ae=new ls({}),ne=new S({props:{code:`from transformers import pipeline

generator = pipeline(task="text-generation")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = pipeline(task=<span class="hljs-string">&quot;text-generation&quot;</span>)`}}),oe=new S({props:{code:'generator("Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(<span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>)
[{<span class="hljs-string">&#x27;generated_text&#x27;</span>: <span class="hljs-string">&#x27;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Seven for the Iron-priests at the door to the east, and thirteen for the Lord Kings at the end of the mountain&#x27;</span>}]`}}),ie=new S({props:{code:`generator(
    [
        "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone",
        "Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne",
    ]
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne&quot;</span>,
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)`}}),pe=new S({props:{code:`generator(
    "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone",
    num_return_sequences=2,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>,
<span class="hljs-meta">... </span>    num_return_sequences=<span class="hljs-number">2</span>,
<span class="hljs-meta">... </span>)`}}),fe=new ls({}),ce=new S({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("distilgpt2")
model = AutoModelForCausalLM.from_pretrained("distilgpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)`}}),me=new S({props:{code:`from transformers import pipeline

generator = pipeline(task="text-generation", model=model, tokenizer=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = pipeline(task=<span class="hljs-string">&quot;text-generation&quot;</span>, model=model, tokenizer=tokenizer)`}}),ue=new S({props:{code:'generator("Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(<span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>)
[{<span class="hljs-string">&#x27;generated_text&#x27;</span>: <span class="hljs-string">&#x27;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Seven for the Dragon-lords (for them to rule in a world ruled by their rulers, and all who live within the realm&#x27;</span>}]`}}),de=new ls({}),_e=new S({props:{code:`from transformers import pipeline

audio_classifier = pipeline(
    task="audio-classification", model="ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>audio_classifier = pipeline(
<span class="hljs-meta">... </span>    task=<span class="hljs-string">&quot;audio-classification&quot;</span>, model=<span class="hljs-string">&quot;ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition&quot;</span>
<span class="hljs-meta">... </span>)`}}),ke=new S({props:{code:'audio_classifier("jfk_moon_speech.wav")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>audio_classifier(<span class="hljs-string">&quot;jfk_moon_speech.wav&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;calm&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.13856211304664612</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;disgust&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.13148026168346405</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;happy&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12635163962841034</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;angry&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12439591437578201</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;fearful&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12404385954141617</span>}]`}}),$e=new ls({}),xe=new S({props:{code:`from transformers import pipeline

vision_classifier = pipeline(task="image-classification")
vision_classifier(
    images="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>vision_classifier = pipeline(task=<span class="hljs-string">&quot;image-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>vision_classifier(
<span class="hljs-meta">... </span>    images=<span class="hljs-string">&quot;https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg&quot;</span>
<span class="hljs-meta">... </span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;lynx, catamount&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.4403027892112732</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;cougar, puma, catamount, mountain lion, painter, panther, Felis concolor&#x27;</span>,
  <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03433405980467796</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;snow leopard, ounce, Panthera uncia&#x27;</span>,
  <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.032148055732250214</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;Egyptian cat&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.02353910356760025</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;tiger cat&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.023034192621707916</span>}]`}}),{c(){m=r("meta"),N=h(),u=r("h1"),j=r("a"),F=r("span"),d(w.$$.fragment),P=h(),H=r("span"),Zs=t("Pipelines for inference"),is=h(),E=r("p"),ea=t("The "),we=r("a"),sa=t("pipeline()"),aa=t(" makes it simple to use any model from the "),Z=r("a"),ta=t("Model Hub"),na=t(" for inference on a variety of tasks such as text generation, image segmentation and audio classification. Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the "),je=r("a"),ra=t("pipeline()"),la=t("! This tutorial will teach you to:"),ps=h(),T=r("ul"),ee=r("li"),oa=t("Use a "),Ee=r("a"),ia=t("pipeline()"),pa=t(" for inference."),fa=h(),Be=r("li"),ha=t("Use a specific tokenizer or model."),ca=h(),se=r("li"),ma=t("Use a "),be=r("a"),ua=t("pipeline()"),da=t(" for audio and vision tasks."),fs=h(),d(I.$$.fragment),hs=h(),z=r("h2"),R=r("a"),Ge=r("span"),d(ae.$$.fragment),ga=h(),Qe=r("span"),va=t("Pipeline usage"),cs=h(),b=r("p"),_a=t("While each task has an associated "),Ae=r("a"),ka=t("pipeline()"),$a=t(", it is simpler to use the general "),Pe=r("a"),xa=t("pipeline()"),ya=t(" abstraction which contains all the specific task pipelines. The "),Te=r("a"),wa=t("pipeline()"),ja=t(" automatically loads a default model and tokenizer capable of inference for your task."),ms=h(),qe=r("ol"),te=r("li"),Ea=t("Start by creating a "),Me=r("a"),ba=t("pipeline()"),Aa=t(" and specify an inference task:"),us=h(),d(ne.$$.fragment),ds=h(),re=r("ol"),le=r("li"),Pa=t("Pass your input text to the "),Se=r("a"),Ta=t("pipeline()"),qa=t(":"),gs=h(),d(oe.$$.fragment),vs=h(),Fe=r("p"),Ma=t("If you have more than one input, pass your input as a list:"),_s=h(),d(ie.$$.fragment),ks=h(),x=r("p"),Sa=t("Any additional parameters for your task can also be included in the "),ze=r("a"),Fa=t("pipeline()"),za=t(". The "),Xe=r("code"),La=t("text-generation"),Ca=t(" task has a "),Le=r("a"),Da=t("generate()"),Na=t(" method with several parameters for controlling the output. For example, if you want to generate more than one output, set the "),Ye=r("code"),Ha=t("num_return_sequences"),Ia=t(" parameter:"),$s=h(),d(pe.$$.fragment),xs=h(),L=r("h3"),O=r("a"),Ze=r("span"),d(fe.$$.fragment),Ra=h(),es=r("span"),Oa=t("Choose a model and tokenizer"),ys=h(),y=r("p"),Ua=t("The "),Ce=r("a"),Wa=t("pipeline()"),Ja=t(" accepts any model from the "),he=r("a"),Ka=t("Model Hub"),Va=t(". There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task. Once you\u2019ve picked an appropriate model, load it with the corresponding "),ss=r("code"),Ba=t("AutoModelFor"),Ga=t(" and [`AutoTokenizer\u2019] class. For example, load the "),De=r("a"),Qa=t("AutoModelForCausalLM"),Xa=t(" class for a causal language modeling task:"),ws=h(),d(ce.$$.fragment),js=h(),U=r("p"),Ya=t("Create a "),Ne=r("a"),Za=t("pipeline()"),et=t(" for your task, and specify the model and tokenizer you\u2019ve loaded:"),Es=h(),d(me.$$.fragment),bs=h(),W=r("p"),st=t("Pass your input text to the "),He=r("a"),at=t("pipeline()"),tt=t(" to generate some text:"),As=h(),d(ue.$$.fragment),Ps=h(),C=r("h2"),J=r("a"),as=r("span"),d(de.$$.fragment),nt=h(),ts=r("span"),rt=t("Audio pipeline"),Ts=h(),K=r("p"),lt=t("The flexibility of the "),Ie=r("a"),ot=t("pipeline()"),it=t(" means it can also be extended to audio tasks."),qs=h(),A=r("p"),pt=t("For example, let\u2019s classify the emotion from a short clip of John F. Kennedy\u2019s famous "),ge=r("a"),ft=t("\u201CWe choose to go to the Moon\u201D"),ht=t(" speech. Find an "),ve=r("a"),ct=t("audio classification"),mt=t(" model on the Model Hub for emotion recognition and load it in the "),Re=r("a"),ut=t("pipeline()"),dt=t(":"),Ms=h(),d(_e.$$.fragment),Ss=h(),V=r("p"),gt=t("Pass the audio file to the "),Oe=r("a"),vt=t("pipeline()"),_t=t(":"),Fs=h(),d(ke.$$.fragment),zs=h(),D=r("h2"),B=r("a"),ns=r("span"),d($e.$$.fragment),kt=h(),rs=r("span"),$t=t("Vision pipeline"),Ls=h(),G=r("p"),xt=t("Finally, using a "),Ue=r("a"),yt=t("pipeline()"),wt=t(" for vision tasks is practically identical."),Cs=h(),We=r("p"),jt=t("Specify your vision task and pass your image to the classifier. The imaage can be a link or a local path to the image. For example, what species of cat is shown below?"),Ds=h(),Je=r("p"),Ke=r("img"),Ns=h(),d(xe.$$.fragment),this.h()},l(e){const o=wn('[data-svelte="svelte-1phssyn"]',document.head);m=l(o,"META",{name:!0,content:!0}),o.forEach(a),N=c(e),u=l(e,"H1",{class:!0});var ye=i(u);j=l(ye,"A",{id:!0,class:!0,href:!0});var bt=i(j);F=l(bt,"SPAN",{});var At=i(F);g(w.$$.fragment,At),At.forEach(a),bt.forEach(a),P=c(ye),H=l(ye,"SPAN",{});var Pt=i(H);Zs=n(Pt,"Pipelines for inference"),Pt.forEach(a),ye.forEach(a),is=c(e),E=l(e,"P",{});var Q=i(E);ea=n(Q,"The "),we=l(Q,"A",{href:!0});var Tt=i(we);sa=n(Tt,"pipeline()"),Tt.forEach(a),aa=n(Q," makes it simple to use any model from the "),Z=l(Q,"A",{href:!0,rel:!0});var qt=i(Z);ta=n(qt,"Model Hub"),qt.forEach(a),na=n(Q," for inference on a variety of tasks such as text generation, image segmentation and audio classification. Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the "),je=l(Q,"A",{href:!0});var Mt=i(je);ra=n(Mt,"pipeline()"),Mt.forEach(a),la=n(Q,"! This tutorial will teach you to:"),Q.forEach(a),ps=c(e),T=l(e,"UL",{});var Ve=i(T);ee=l(Ve,"LI",{});var Is=i(ee);oa=n(Is,"Use a "),Ee=l(Is,"A",{href:!0});var St=i(Ee);ia=n(St,"pipeline()"),St.forEach(a),pa=n(Is," for inference."),Is.forEach(a),fa=c(Ve),Be=l(Ve,"LI",{});var Ft=i(Be);ha=n(Ft,"Use a specific tokenizer or model."),Ft.forEach(a),ca=c(Ve),se=l(Ve,"LI",{});var Rs=i(se);ma=n(Rs,"Use a "),be=l(Rs,"A",{href:!0});var zt=i(be);ua=n(zt,"pipeline()"),zt.forEach(a),da=n(Rs," for audio and vision tasks."),Rs.forEach(a),Ve.forEach(a),fs=c(e),g(I.$$.fragment,e),hs=c(e),z=l(e,"H2",{class:!0});var Os=i(z);R=l(Os,"A",{id:!0,class:!0,href:!0});var Lt=i(R);Ge=l(Lt,"SPAN",{});var Ct=i(Ge);g(ae.$$.fragment,Ct),Ct.forEach(a),Lt.forEach(a),ga=c(Os),Qe=l(Os,"SPAN",{});var Dt=i(Qe);va=n(Dt,"Pipeline usage"),Dt.forEach(a),Os.forEach(a),cs=c(e),b=l(e,"P",{});var X=i(b);_a=n(X,"While each task has an associated "),Ae=l(X,"A",{href:!0});var Nt=i(Ae);ka=n(Nt,"pipeline()"),Nt.forEach(a),$a=n(X,", it is simpler to use the general "),Pe=l(X,"A",{href:!0});var Ht=i(Pe);xa=n(Ht,"pipeline()"),Ht.forEach(a),ya=n(X," abstraction which contains all the specific task pipelines. The "),Te=l(X,"A",{href:!0});var It=i(Te);wa=n(It,"pipeline()"),It.forEach(a),ja=n(X," automatically loads a default model and tokenizer capable of inference for your task."),X.forEach(a),ms=c(e),qe=l(e,"OL",{});var Rt=i(qe);te=l(Rt,"LI",{});var Us=i(te);Ea=n(Us,"Start by creating a "),Me=l(Us,"A",{href:!0});var Ot=i(Me);ba=n(Ot,"pipeline()"),Ot.forEach(a),Aa=n(Us," and specify an inference task:"),Us.forEach(a),Rt.forEach(a),us=c(e),g(ne.$$.fragment,e),ds=c(e),re=l(e,"OL",{start:!0});var Ut=i(re);le=l(Ut,"LI",{});var Ws=i(le);Pa=n(Ws,"Pass your input text to the "),Se=l(Ws,"A",{href:!0});var Wt=i(Se);Ta=n(Wt,"pipeline()"),Wt.forEach(a),qa=n(Ws,":"),Ws.forEach(a),Ut.forEach(a),gs=c(e),g(oe.$$.fragment,e),vs=c(e),Fe=l(e,"P",{});var Jt=i(Fe);Ma=n(Jt,"If you have more than one input, pass your input as a list:"),Jt.forEach(a),_s=c(e),g(ie.$$.fragment,e),ks=c(e),x=l(e,"P",{});var q=i(x);Sa=n(q,"Any additional parameters for your task can also be included in the "),ze=l(q,"A",{href:!0});var Kt=i(ze);Fa=n(Kt,"pipeline()"),Kt.forEach(a),za=n(q,". The "),Xe=l(q,"CODE",{});var Vt=i(Xe);La=n(Vt,"text-generation"),Vt.forEach(a),Ca=n(q," task has a "),Le=l(q,"A",{href:!0});var Bt=i(Le);Da=n(Bt,"generate()"),Bt.forEach(a),Na=n(q," method with several parameters for controlling the output. For example, if you want to generate more than one output, set the "),Ye=l(q,"CODE",{});var Gt=i(Ye);Ha=n(Gt,"num_return_sequences"),Gt.forEach(a),Ia=n(q," parameter:"),q.forEach(a),$s=c(e),g(pe.$$.fragment,e),xs=c(e),L=l(e,"H3",{class:!0});var Js=i(L);O=l(Js,"A",{id:!0,class:!0,href:!0});var Qt=i(O);Ze=l(Qt,"SPAN",{});var Xt=i(Ze);g(fe.$$.fragment,Xt),Xt.forEach(a),Qt.forEach(a),Ra=c(Js),es=l(Js,"SPAN",{});var Yt=i(es);Oa=n(Yt,"Choose a model and tokenizer"),Yt.forEach(a),Js.forEach(a),ys=c(e),y=l(e,"P",{});var M=i(y);Ua=n(M,"The "),Ce=l(M,"A",{href:!0});var Zt=i(Ce);Wa=n(Zt,"pipeline()"),Zt.forEach(a),Ja=n(M," accepts any model from the "),he=l(M,"A",{href:!0,rel:!0});var en=i(he);Ka=n(en,"Model Hub"),en.forEach(a),Va=n(M,". There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task. Once you\u2019ve picked an appropriate model, load it with the corresponding "),ss=l(M,"CODE",{});var sn=i(ss);Ba=n(sn,"AutoModelFor"),sn.forEach(a),Ga=n(M," and [`AutoTokenizer\u2019] class. For example, load the "),De=l(M,"A",{href:!0});var an=i(De);Qa=n(an,"AutoModelForCausalLM"),an.forEach(a),Xa=n(M," class for a causal language modeling task:"),M.forEach(a),ws=c(e),g(ce.$$.fragment,e),js=c(e),U=l(e,"P",{});var Ks=i(U);Ya=n(Ks,"Create a "),Ne=l(Ks,"A",{href:!0});var tn=i(Ne);Za=n(tn,"pipeline()"),tn.forEach(a),et=n(Ks," for your task, and specify the model and tokenizer you\u2019ve loaded:"),Ks.forEach(a),Es=c(e),g(me.$$.fragment,e),bs=c(e),W=l(e,"P",{});var Vs=i(W);st=n(Vs,"Pass your input text to the "),He=l(Vs,"A",{href:!0});var nn=i(He);at=n(nn,"pipeline()"),nn.forEach(a),tt=n(Vs," to generate some text:"),Vs.forEach(a),As=c(e),g(ue.$$.fragment,e),Ps=c(e),C=l(e,"H2",{class:!0});var Bs=i(C);J=l(Bs,"A",{id:!0,class:!0,href:!0});var rn=i(J);as=l(rn,"SPAN",{});var ln=i(as);g(de.$$.fragment,ln),ln.forEach(a),rn.forEach(a),nt=c(Bs),ts=l(Bs,"SPAN",{});var on=i(ts);rt=n(on,"Audio pipeline"),on.forEach(a),Bs.forEach(a),Ts=c(e),K=l(e,"P",{});var Gs=i(K);lt=n(Gs,"The flexibility of the "),Ie=l(Gs,"A",{href:!0});var pn=i(Ie);ot=n(pn,"pipeline()"),pn.forEach(a),it=n(Gs," means it can also be extended to audio tasks."),Gs.forEach(a),qs=c(e),A=l(e,"P",{});var Y=i(A);pt=n(Y,"For example, let\u2019s classify the emotion from a short clip of John F. Kennedy\u2019s famous "),ge=l(Y,"A",{href:!0,rel:!0});var fn=i(ge);ft=n(fn,"\u201CWe choose to go to the Moon\u201D"),fn.forEach(a),ht=n(Y," speech. Find an "),ve=l(Y,"A",{href:!0,rel:!0});var hn=i(ve);ct=n(hn,"audio classification"),hn.forEach(a),mt=n(Y," model on the Model Hub for emotion recognition and load it in the "),Re=l(Y,"A",{href:!0});var cn=i(Re);ut=n(cn,"pipeline()"),cn.forEach(a),dt=n(Y,":"),Y.forEach(a),Ms=c(e),g(_e.$$.fragment,e),Ss=c(e),V=l(e,"P",{});var Qs=i(V);gt=n(Qs,"Pass the audio file to the "),Oe=l(Qs,"A",{href:!0});var mn=i(Oe);vt=n(mn,"pipeline()"),mn.forEach(a),_t=n(Qs,":"),Qs.forEach(a),Fs=c(e),g(ke.$$.fragment,e),zs=c(e),D=l(e,"H2",{class:!0});var Xs=i(D);B=l(Xs,"A",{id:!0,class:!0,href:!0});var un=i(B);ns=l(un,"SPAN",{});var dn=i(ns);g($e.$$.fragment,dn),dn.forEach(a),un.forEach(a),kt=c(Xs),rs=l(Xs,"SPAN",{});var gn=i(rs);$t=n(gn,"Vision pipeline"),gn.forEach(a),Xs.forEach(a),Ls=c(e),G=l(e,"P",{});var Ys=i(G);xt=n(Ys,"Finally, using a "),Ue=l(Ys,"A",{href:!0});var vn=i(Ue);yt=n(vn,"pipeline()"),vn.forEach(a),wt=n(Ys," for vision tasks is practically identical."),Ys.forEach(a),Cs=c(e),We=l(e,"P",{});var _n=i(We);jt=n(_n,"Specify your vision task and pass your image to the classifier. The imaage can be a link or a local path to the image. For example, what species of cat is shown below?"),_n.forEach(a),Ds=c(e),Je=l(e,"P",{});var kn=i(Je);Ke=l(kn,"IMG",{src:!0,alt:!0}),kn.forEach(a),Ns=c(e),g(xe.$$.fragment,e),this.h()},h(){f(m,"name","hf:doc:metadata"),f(m,"content",JSON.stringify(Tn)),f(j,"id","pipelines-for-inference"),f(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(j,"href","#pipelines-for-inference"),f(u,"class","relative group"),f(we,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(Z,"href","https://huggingface.co/models"),f(Z,"rel","nofollow"),f(je,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(Ee,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(be,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(R,"id","pipeline-usage"),f(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(R,"href","#pipeline-usage"),f(z,"class","relative group"),f(Ae,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(Pe,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(Te,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(Me,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(Se,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(re,"start","2"),f(ze,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(Le,"href","/docs/transformers/pr_16188/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),f(O,"id","choose-a-model-and-tokenizer"),f(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(O,"href","#choose-a-model-and-tokenizer"),f(L,"class","relative group"),f(Ce,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(he,"href","https://huggingface.co/models"),f(he,"rel","nofollow"),f(De,"href","/docs/transformers/pr_16188/en/model_doc/auto#transformers.AutoModelForCausalLM"),f(Ne,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(He,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(J,"id","audio-pipeline"),f(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(J,"href","#audio-pipeline"),f(C,"class","relative group"),f(Ie,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(ge,"href","https://en.wikipedia.org/wiki/We_choose_to_go_to_the_Moon"),f(ge,"rel","nofollow"),f(ve,"href","https://huggingface.co/models?pipeline_tag=audio-classification"),f(ve,"rel","nofollow"),f(Re,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(Oe,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),f(B,"id","vision-pipeline"),f(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(B,"href","#vision-pipeline"),f(D,"class","relative group"),f(Ue,"href","/docs/transformers/pr_16188/en/main_classes/pipelines#transformers.pipeline"),jn(Ke.src,Et="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg")||f(Ke,"src",Et),f(Ke,"alt","pipeline-cat-chonk")},m(e,o){s(document.head,m),p(e,N,o),p(e,u,o),s(u,j),s(j,F),v(w,F,null),s(u,P),s(u,H),s(H,Zs),p(e,is,o),p(e,E,o),s(E,ea),s(E,we),s(we,sa),s(E,aa),s(E,Z),s(Z,ta),s(E,na),s(E,je),s(je,ra),s(E,la),p(e,ps,o),p(e,T,o),s(T,ee),s(ee,oa),s(ee,Ee),s(Ee,ia),s(ee,pa),s(T,fa),s(T,Be),s(Be,ha),s(T,ca),s(T,se),s(se,ma),s(se,be),s(be,ua),s(se,da),p(e,fs,o),v(I,e,o),p(e,hs,o),p(e,z,o),s(z,R),s(R,Ge),v(ae,Ge,null),s(z,ga),s(z,Qe),s(Qe,va),p(e,cs,o),p(e,b,o),s(b,_a),s(b,Ae),s(Ae,ka),s(b,$a),s(b,Pe),s(Pe,xa),s(b,ya),s(b,Te),s(Te,wa),s(b,ja),p(e,ms,o),p(e,qe,o),s(qe,te),s(te,Ea),s(te,Me),s(Me,ba),s(te,Aa),p(e,us,o),v(ne,e,o),p(e,ds,o),p(e,re,o),s(re,le),s(le,Pa),s(le,Se),s(Se,Ta),s(le,qa),p(e,gs,o),v(oe,e,o),p(e,vs,o),p(e,Fe,o),s(Fe,Ma),p(e,_s,o),v(ie,e,o),p(e,ks,o),p(e,x,o),s(x,Sa),s(x,ze),s(ze,Fa),s(x,za),s(x,Xe),s(Xe,La),s(x,Ca),s(x,Le),s(Le,Da),s(x,Na),s(x,Ye),s(Ye,Ha),s(x,Ia),p(e,$s,o),v(pe,e,o),p(e,xs,o),p(e,L,o),s(L,O),s(O,Ze),v(fe,Ze,null),s(L,Ra),s(L,es),s(es,Oa),p(e,ys,o),p(e,y,o),s(y,Ua),s(y,Ce),s(Ce,Wa),s(y,Ja),s(y,he),s(he,Ka),s(y,Va),s(y,ss),s(ss,Ba),s(y,Ga),s(y,De),s(De,Qa),s(y,Xa),p(e,ws,o),v(ce,e,o),p(e,js,o),p(e,U,o),s(U,Ya),s(U,Ne),s(Ne,Za),s(U,et),p(e,Es,o),v(me,e,o),p(e,bs,o),p(e,W,o),s(W,st),s(W,He),s(He,at),s(W,tt),p(e,As,o),v(ue,e,o),p(e,Ps,o),p(e,C,o),s(C,J),s(J,as),v(de,as,null),s(C,nt),s(C,ts),s(ts,rt),p(e,Ts,o),p(e,K,o),s(K,lt),s(K,Ie),s(Ie,ot),s(K,it),p(e,qs,o),p(e,A,o),s(A,pt),s(A,ge),s(ge,ft),s(A,ht),s(A,ve),s(ve,ct),s(A,mt),s(A,Re),s(Re,ut),s(A,dt),p(e,Ms,o),v(_e,e,o),p(e,Ss,o),p(e,V,o),s(V,gt),s(V,Oe),s(Oe,vt),s(V,_t),p(e,Fs,o),v(ke,e,o),p(e,zs,o),p(e,D,o),s(D,B),s(B,ns),v($e,ns,null),s(D,kt),s(D,rs),s(rs,$t),p(e,Ls,o),p(e,G,o),s(G,xt),s(G,Ue),s(Ue,yt),s(G,wt),p(e,Cs,o),p(e,We,o),s(We,jt),p(e,Ds,o),p(e,Je,o),s(Je,Ke),p(e,Ns,o),v(xe,e,o),Hs=!0},p(e,[o]){const ye={};o&2&&(ye.$$scope={dirty:o,ctx:e}),I.$set(ye)},i(e){Hs||(_(w.$$.fragment,e),_(I.$$.fragment,e),_(ae.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_(ie.$$.fragment,e),_(pe.$$.fragment,e),_(fe.$$.fragment,e),_(ce.$$.fragment,e),_(me.$$.fragment,e),_(ue.$$.fragment,e),_(de.$$.fragment,e),_(_e.$$.fragment,e),_(ke.$$.fragment,e),_($e.$$.fragment,e),_(xe.$$.fragment,e),Hs=!0)},o(e){k(w.$$.fragment,e),k(I.$$.fragment,e),k(ae.$$.fragment,e),k(ne.$$.fragment,e),k(oe.$$.fragment,e),k(ie.$$.fragment,e),k(pe.$$.fragment,e),k(fe.$$.fragment,e),k(ce.$$.fragment,e),k(me.$$.fragment,e),k(ue.$$.fragment,e),k(de.$$.fragment,e),k(_e.$$.fragment,e),k(ke.$$.fragment,e),k($e.$$.fragment,e),k(xe.$$.fragment,e),Hs=!1},d(e){a(m),e&&a(N),e&&a(u),$(w),e&&a(is),e&&a(E),e&&a(ps),e&&a(T),e&&a(fs),$(I,e),e&&a(hs),e&&a(z),$(ae),e&&a(cs),e&&a(b),e&&a(ms),e&&a(qe),e&&a(us),$(ne,e),e&&a(ds),e&&a(re),e&&a(gs),$(oe,e),e&&a(vs),e&&a(Fe),e&&a(_s),$(ie,e),e&&a(ks),e&&a(x),e&&a($s),$(pe,e),e&&a(xs),e&&a(L),$(fe),e&&a(ys),e&&a(y),e&&a(ws),$(ce,e),e&&a(js),e&&a(U),e&&a(Es),$(me,e),e&&a(bs),e&&a(W),e&&a(As),$(ue,e),e&&a(Ps),e&&a(C),$(de),e&&a(Ts),e&&a(K),e&&a(qs),e&&a(A),e&&a(Ms),$(_e,e),e&&a(Ss),e&&a(V),e&&a(Fs),$(ke,e),e&&a(zs),e&&a(D),$($e),e&&a(Ls),e&&a(G),e&&a(Cs),e&&a(We),e&&a(Ds),e&&a(Je),e&&a(Ns),$(xe,e)}}}const Tn={local:"pipelines-for-inference",sections:[{local:"pipeline-usage",sections:[{local:"choose-a-model-and-tokenizer",title:"Choose a model and tokenizer"}],title:"Pipeline usage"},{local:"audio-pipeline",title:"Audio pipeline"},{local:"vision-pipeline",title:"Vision pipeline"}],title:"Pipelines for inference"};function qn(os){return En(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ln extends $n{constructor(m){super();xn(this,m,qn,Pn,yn,{})}}export{Ln as default,Tn as metadata};
