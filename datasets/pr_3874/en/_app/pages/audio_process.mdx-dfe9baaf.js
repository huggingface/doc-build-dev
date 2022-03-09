import{S as ul,i as fl,s as hl,e as l,k as d,w as _,t as s,M as ml,c as r,d as t,m as u,a as n,x as v,h as o,b as p,N as dl,F as a,g as c,y as g,q as b,o as w,B as $}from"../chunks/vendor-e67aec41.js";import{T as _l}from"../chunks/Tip-76459d1c.js";import{I as Sa}from"../chunks/IconCopyLink-ffd7f84e.js";import{C as D}from"../chunks/CodeBlock-e2bcf023.js";function vl(ia){let f,P,h,y,F,k,de,H,N,Y,j,V,z,ue;return{c(){f=l("p"),P=s("torchaudio\u2019s "),h=l("code"),y=s("sox_io"),F=d(),k=l("a"),de=s("backend"),H=s(" supports decoding "),N=l("code"),Y=s("mp3"),j=s(" files. Unfortunately, the "),V=l("code"),z=s("sox_io"),ue=s(" backend is only available on Linux/macOS, and is not supported by Windows."),this.h()},l(L){f=r(L,"P",{});var m=n(f);P=o(m,"torchaudio\u2019s "),h=r(m,"CODE",{});var E=n(h);y=o(E,"sox_io"),E.forEach(t),F=u(m),k=r(m,"A",{href:!0,rel:!0});var Q=n(k);de=o(Q,"backend"),Q.forEach(t),H=o(m," supports decoding "),N=r(m,"CODE",{});var Le=n(N);Y=o(Le,"mp3"),Le.forEach(t),j=o(m," files. Unfortunately, the "),V=r(m,"CODE",{});var We=n(V);z=o(We,"sox_io"),We.forEach(t),ue=o(m," backend is only available on Linux/macOS, and is not supported by Windows."),m.forEach(t),this.h()},h(){p(k,"href","https://pytorch.org/audio/stable/backend.html#"),p(k,"rel","nofollow")},m(L,m){c(L,f,m),a(f,P),a(f,h),a(h,y),a(f,F),a(f,k),a(k,de),a(f,H),a(f,N),a(N,Y),a(f,j),a(f,V),a(V,z),a(f,ue)},d(L){L&&t(f)}}}function gl(ia){let f,P,h,y,F,k,de,H,N,Y,j,V,z,ue,L,m,E,Q,Le,We,ca,xt,At,fe,qt,Me,Dt,Pt,Ia,W,Z,pa,he,zt,da,Tt,Fa,T,Ct,Ue,Ot,St,Re,It,Ft,Ha,me,Na,C,Ht,_e,Nt,Vt,ve,Lt,Wt,Va,ge,La,ee,Wa,ae,Mt,be,Ut,Rt,Ma,we,Ua,M,te,ua,$e,Gt,fa,Jt,Ra,x,Bt,ha,Kt,Xt,ma,Yt,Qt,_a,Zt,es,Ga,ye,va,as,ts,Ja,ke,Ba,A,ss,ga,os,ls,ba,rs,ns,wa,is,cs,Ka,U,$a,ps,ds,ya,us,fs,Xa,Ee,Ya,O,hs,ka,ms,_s,Ge,vs,gs,Qa,je,Za,R,se,Ea,xe,bs,ja,ws,et,S,$s,Ae,ys,ks,Je,Es,js,at,qe,tt,oe,xs,Be,As,qs,st,De,ot,G,Ke,uo,Ds,Xe,fo,lt,J,le,xa,Pe,Ps,Aa,zs,rt,q,Ts,Ye,Cs,Os,ze,Ss,Is,qa,Fs,Hs,nt,re,Da,B,Ns,Te,Vs,Ls,Pa,Ws,Ms,Us,Ce,K,Rs,Oe,Gs,Js,za,Bs,Ks,Xs,X,Ys,Se,Qs,Zs,Ie,eo,ao,it,Fe,ct,ne,to,Ta,so,oo,pt,He,dt,I,lo,Ca,ro,no,Qe,io,co,ut,Ne,ft;return k=new Sa({}),he=new Sa({}),me=new D({props:{code:"pip install datasets[audio]",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>pip install datasets[audio]'}}),ge=new D({props:{code:`pip install librosa
pip install torchaudio`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>pip install librosa
<span class="hljs-meta">&gt;&gt;&gt; </span>pip install torchaudio`}}),ee=new _l({props:{warning:"&lcub;true}",$$slots:{default:[vl]},$$scope:{ctx:ia}}}),we=new D({props:{code:`from datasets import load_dataset, load_metric, Audio
common_voice = load_dataset("common_voice", "tr", split="train")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, load_metric, Audio
<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice = load_dataset(<span class="hljs-string">&quot;common_voice&quot;</span>, <span class="hljs-string">&quot;tr&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)`}}),$e=new Sa({}),ke=new D({props:{code:'common_voice[0]["audio"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>]
{<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.0000000e+00</span>,  <span class="hljs-number">0.0000000e+00</span>,  <span class="hljs-number">0.0000000e+00</span>, ...,
    -<span class="hljs-number">8.8930130e-05</span>, -<span class="hljs-number">3.8027763e-05</span>, -<span class="hljs-number">2.9146671e-05</span>], dtype=float32),
<span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/05be0c29807a73c9b099873d2f5975dae6d05e9f7d577458a2466ecb9a2b0c6b/cv-corpus-6.1-2020-12-11/tr/clips/common_voice_tr_21921195.mp3&#x27;</span>,
<span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">48000</span>}`}}),Ee=new D({props:{code:'common_voice[0]["path"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;path&quot;</span>]
/root/.cache/huggingface/datasets/downloads/extracted/05be0c29807a73c9b099873d2f5975dae6d05e9f7d577458a2466ecb9a2b0c6b/cv-corpus-<span class="hljs-number">6.1</span>-<span class="hljs-number">2020</span>-<span class="hljs-number">12</span>-<span class="hljs-number">11</span>/tr/clips/common_voice_tr_21921195.mp3`}}),je=new D({props:{code:'my_audio_dataset = my_audio_dataset.cast_column("paths_to_my_audio_files", Audio())',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>my_audio_dataset = my_audio_dataset.cast_column(<span class="hljs-string">&quot;paths_to_my_audio_files&quot;</span>, Audio())'}}),xe=new Sa({}),qe=new D({props:{code:'common_voice = common_voice.cast_column("audio", Audio(sampling_rate=16_000))',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice = common_voice.cast_column(<span class="hljs-string">&quot;audio&quot;</span>, Audio(sampling_rate=<span class="hljs-number">16_000</span>))'}}),De=new D({props:{code:'common_voice_train[0]["audio"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice_train[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>]
{<span class="hljs-string">&#x27;array&#x27;</span>: array([ <span class="hljs-number">0.0000000e+00</span>,  <span class="hljs-number">0.0000000e+00</span>,  <span class="hljs-number">0.0000000e+00</span>, ...,
-<span class="hljs-number">7.4556941e-05</span>, -<span class="hljs-number">1.4621433e-05</span>, -<span class="hljs-number">5.7861507e-05</span>], dtype=float32),
<span class="hljs-string">&#x27;path&#x27;</span>: <span class="hljs-string">&#x27;/root/.cache/huggingface/datasets/downloads/extracted/05be0c29807a73c9b099873d2f5975dae6d05e9f7d577458a2466ecb9a2b0c6b/cv-corpus-6.1-2020-12-11/tr/clips/common_voice_tr_21921195.mp3&#x27;</span>,
<span class="hljs-string">&#x27;sampling_rate&#x27;</span>: <span class="hljs-number">16000</span>}`}}),Pe=new Sa({}),Fe=new D({props:{code:`from transformers import AutoTokenizer, AutoFeatureExtractor, Wav2Vec2Processor
model_checkpoint = "facebook/wav2vec2-large-xlsr-53"
# after defining a vocab.json file you can instantiate a tokenizer object:
tokenizer = AutoTokenizer("./vocab.json", unk_token="[UNK]", pad_token="[PAD]", word_delimiter_token="|")
feature_extractor = AutoFeatureExtractor.from_pretrained(model_checkpoint)
processor = Wav2Vec2Processor.from_pretrained(feature_extractor=feature_extractor, tokenizer=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoFeatureExtractor, Wav2Vec2Processor
<span class="hljs-meta">&gt;&gt;&gt; </span>model_checkpoint = <span class="hljs-string">&quot;facebook/wav2vec2-large-xlsr-53&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># after defining a vocab.json file you can instantiate a tokenizer object:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer(<span class="hljs-string">&quot;./vocab.json&quot;</span>, unk_token=<span class="hljs-string">&quot;[UNK]&quot;</span>, pad_token=<span class="hljs-string">&quot;[PAD]&quot;</span>, word_delimiter_token=<span class="hljs-string">&quot;|&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(model_checkpoint)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(feature_extractor=feature_extractor, tokenizer=tokenizer)`}}),He=new D({props:{code:`from transformers import Wav2Vec2Processor
processor = Wav2Vec2Processor.from_pretrained("facebook/wav2vec2-base-960h")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)`}}),Ne=new D({props:{code:`def prepare_dataset(batch):
    audio = batch["audio"]
    batch["input_values"] = processor(audio["array"], sampling_rate=audio["sampling_rate"]).input_values[0]
    batch["input_length"] = len(batch["input_values"])
    with processor.as_target_processor():
        batch["labels"] = processor(batch["sentence"]).input_ids
    return batch
common_voice_train = common_voice_train.map(prepare_dataset, remove_columns=common_voice_train.column_names)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">prepare_dataset</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    audio = batch[<span class="hljs-string">&quot;audio&quot;</span>]
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;input_values&quot;</span>] = processor(audio[<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=audio[<span class="hljs-string">&quot;sampling_rate&quot;</span>]).input_values[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;input_length&quot;</span>] = <span class="hljs-built_in">len</span>(batch[<span class="hljs-string">&quot;input_values&quot;</span>])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>        batch[<span class="hljs-string">&quot;labels&quot;</span>] = processor(batch[<span class="hljs-string">&quot;sentence&quot;</span>]).input_ids
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch
<span class="hljs-meta">&gt;&gt;&gt; </span>common_voice_train = common_voice_train.<span class="hljs-built_in">map</span>(prepare_dataset, remove_columns=common_voice_train.column_names)`}}),{c(){f=l("meta"),P=d(),h=l("h1"),y=l("a"),F=l("span"),_(k.$$.fragment),de=d(),H=l("span"),N=s("Process audio data"),Y=d(),j=l("p"),V=s("\u{1F917} Datasets supports an "),z=l("a"),ue=s("datasets.Audio"),L=s(" feature, enabling users to load and process raw audio files for training. This guide will show you how to:"),m=d(),E=l("ul"),Q=l("li"),Le=s("Load your own custom audio dataset."),We=d(),ca=l("li"),xt=s("Resample audio files."),At=d(),fe=l("li"),qt=s("Use "),Me=l("a"),Dt=s("datasets.Dataset.map()"),Pt=s(" with audio files."),Ia=d(),W=l("h2"),Z=l("a"),pa=l("span"),_(he.$$.fragment),zt=d(),da=l("span"),Tt=s("Installation"),Fa=d(),T=l("p"),Ct=s("The "),Ue=l("a"),Ot=s("datasets.Audio"),St=s(" feature is an experimental feature and should be installed as an extra dependency in \u{1F917} Datasets. Install the "),Re=l("a"),It=s("datasets.Audio"),Ft=s(" feature with pip:"),Ha=d(),_(me.$$.fragment),Na=d(),C=l("p"),Ht=s("Users should also install "),_e=l("a"),Nt=s("torchaudio"),Vt=s(" and "),ve=l("a"),Lt=s("librosa"),Wt=s(", two common libraries used by \u{1F917} Datasets for handling audio data."),Va=d(),_(ge.$$.fragment),La=d(),_(ee.$$.fragment),Wa=d(),ae=l("p"),Mt=s("Then you can load an audio dataset the same way you would load a text dataset. For example, load the "),be=l("a"),Ut=s("Common Voice"),Rt=s(" dataset with the Turkish configuration:"),Ma=d(),_(we.$$.fragment),Ua=d(),M=l("h2"),te=l("a"),ua=l("span"),_($e.$$.fragment),Gt=d(),fa=l("span"),Jt=s("Audio datasets"),Ra=d(),x=l("p"),Bt=s("Audio datasets commonly have an "),ha=l("code"),Kt=s("audio"),Xt=s(" and "),ma=l("code"),Yt=s("path"),Qt=s(" or "),_a=l("code"),Zt=s("file"),es=s(" column."),Ga=d(),ye=l("p"),va=l("code"),as=s("audio"),ts=s(" is the actual audio file that is loaded and resampled on-the-fly upon calling it."),Ja=d(),_(ke.$$.fragment),Ba=d(),A=l("p"),ss=s("When you access an audio file, it is automatically decoded and resampled. Generally, you should query an audio file like: "),ga=l("code"),os=s('common_voice[0]["audio"]'),ls=s(". If you query an audio file with "),ba=l("code"),rs=s('common_voice["audio"][0]'),ns=s(" instead, "),wa=l("strong"),is=s("all"),cs=s(" the audio files in your dataset will be decoded and resampled. This process can take a long time if you have a large dataset."),Ka=d(),U=l("p"),$a=l("code"),ps=s("path"),ds=s(" or "),ya=l("code"),us=s("file"),fs=s(" is an absolute path to an audio file."),Xa=d(),_(Ee.$$.fragment),Ya=d(),O=l("p"),hs=s("The "),ka=l("code"),ms=s("path"),_s=s(" is useful if you want to load your own audio dataset. In this case, provide a column of audio file paths to "),Ge=l("a"),vs=s("datasets.Dataset.cast_column()"),gs=s(":"),Qa=d(),_(je.$$.fragment),Za=d(),R=l("h2"),se=l("a"),Ea=l("span"),_(xe.$$.fragment),bs=d(),ja=l("span"),ws=s("Resample"),et=d(),S=l("p"),$s=s("Some models expect the audio data to have a certain sampling rate due to how the model was pretrained. For example, the "),Ae=l("a"),ys=s("XLSR-Wav2Vec2"),ks=s(" model expects the input to have a sampling rate of 16kHz, but an audio file from the Common Voice dataset has a sampling rate of 48kHz. You can use "),Je=l("a"),Es=s("datasets.Dataset.cast_column()"),js=s(" to downsample the sampling rate to 16kHz:"),at=d(),_(qe.$$.fragment),tt=d(),oe=l("p"),xs=s("The next time you load the audio file, the "),Be=l("a"),As=s("datasets.Audio"),qs=s(" feature will load and resample it to 16kHz:"),st=d(),_(De.$$.fragment),ot=d(),G=l("div"),Ke=l("img"),Ds=d(),Xe=l("img"),lt=d(),J=l("h2"),le=l("a"),xa=l("span"),_(Pe.$$.fragment),Ps=d(),Aa=l("span"),zs=s("Map"),rt=d(),q=l("p"),Ts=s("Just like text datasets, you can apply a preprocessing function over an entire dataset with "),Ye=l("a"),Cs=s("datasets.Dataset.map()"),Os=s(", which is useful for preprocessing all of your audio data at once. Start with a "),ze=l("a"),Ss=s("speech recognition model"),Is=s(" of your choice, and load a "),qa=l("code"),Fs=s("processor"),Hs=s(" object that contains:"),nt=d(),re=l("ol"),Da=l("li"),B=l("p"),Ns=s("A feature extractor to convert the speech signal to the model\u2019s input format. Every speech recognition model on the \u{1F917} "),Te=l("a"),Vs=s("Hub"),Ls=s(" contains a predefined feature extractor that can be easily loaded with "),Pa=l("code"),Ws=s("AutoFeatureExtractor.from_pretrained(...)"),Ms=s("."),Us=d(),Ce=l("li"),K=l("p"),Rs=s("A tokenizer to convert the model\u2019s output format to text. Fine-tuned speech recognition models, such as "),Oe=l("a"),Gs=s("facebook/wav2vec2-base-960h"),Js=s(", contain a predefined tokenizer that can be easily loaded with "),za=l("code"),Bs=s("AutoTokenizer.from_pretrained(...)"),Ks=s("."),Xs=d(),X=l("p"),Ys=s("For pretrained speech recognition models, such as "),Se=l("a"),Qs=s("facebook/wav2vec2-large-xlsr-53"),Zs=s(", a tokenizer needs to be created from the target text as explained "),Ie=l("a"),eo=s("here"),ao=s(". The following example demonstrates how to load a feature extractor, tokenizer and processor for a pretrained speech recognition model:"),it=d(),_(Fe.$$.fragment),ct=d(),ne=l("p"),to=s("For fine-tuned speech recognition models, you can simply load a predefined "),Ta=l("code"),so=s("processor"),oo=s(" object with:"),pt=d(),_(He.$$.fragment),dt=d(),I=l("p"),lo=s("Make sure to include the "),Ca=l("code"),ro=s("audio"),no=s(" key in your preprocessing function when you call "),Qe=l("a"),io=s("datasets.Dataset.map()"),co=s(" so that you are actually resampling the audio data:"),ut=d(),_(Ne.$$.fragment),this.h()},l(e){const i=ml('[data-svelte="svelte-1phssyn"]',document.head);f=r(i,"META",{name:!0,content:!0}),i.forEach(t),P=u(e),h=r(e,"H1",{class:!0});var Ve=n(h);y=r(Ve,"A",{id:!0,class:!0,href:!0});var ho=n(y);F=r(ho,"SPAN",{});var mo=n(F);v(k.$$.fragment,mo),mo.forEach(t),ho.forEach(t),de=u(Ve),H=r(Ve,"SPAN",{});var _o=n(H);N=o(_o,"Process audio data"),_o.forEach(t),Ve.forEach(t),Y=u(e),j=r(e,"P",{});var ht=n(j);V=o(ht,"\u{1F917} Datasets supports an "),z=r(ht,"A",{href:!0});var vo=n(z);ue=o(vo,"datasets.Audio"),vo.forEach(t),L=o(ht," feature, enabling users to load and process raw audio files for training. This guide will show you how to:"),ht.forEach(t),m=u(e),E=r(e,"UL",{});var Ze=n(E);Q=r(Ze,"LI",{});var go=n(Q);Le=o(go,"Load your own custom audio dataset."),go.forEach(t),We=u(Ze),ca=r(Ze,"LI",{});var bo=n(ca);xt=o(bo,"Resample audio files."),bo.forEach(t),At=u(Ze),fe=r(Ze,"LI",{});var mt=n(fe);qt=o(mt,"Use "),Me=r(mt,"A",{href:!0});var wo=n(Me);Dt=o(wo,"datasets.Dataset.map()"),wo.forEach(t),Pt=o(mt," with audio files."),mt.forEach(t),Ze.forEach(t),Ia=u(e),W=r(e,"H2",{class:!0});var _t=n(W);Z=r(_t,"A",{id:!0,class:!0,href:!0});var $o=n(Z);pa=r($o,"SPAN",{});var yo=n(pa);v(he.$$.fragment,yo),yo.forEach(t),$o.forEach(t),zt=u(_t),da=r(_t,"SPAN",{});var ko=n(da);Tt=o(ko,"Installation"),ko.forEach(t),_t.forEach(t),Fa=u(e),T=r(e,"P",{});var ea=n(T);Ct=o(ea,"The "),Ue=r(ea,"A",{href:!0});var Eo=n(Ue);Ot=o(Eo,"datasets.Audio"),Eo.forEach(t),St=o(ea," feature is an experimental feature and should be installed as an extra dependency in \u{1F917} Datasets. Install the "),Re=r(ea,"A",{href:!0});var jo=n(Re);It=o(jo,"datasets.Audio"),jo.forEach(t),Ft=o(ea," feature with pip:"),ea.forEach(t),Ha=u(e),v(me.$$.fragment,e),Na=u(e),C=r(e,"P",{});var aa=n(C);Ht=o(aa,"Users should also install "),_e=r(aa,"A",{href:!0,rel:!0});var xo=n(_e);Nt=o(xo,"torchaudio"),xo.forEach(t),Vt=o(aa," and "),ve=r(aa,"A",{href:!0,rel:!0});var Ao=n(ve);Lt=o(Ao,"librosa"),Ao.forEach(t),Wt=o(aa,", two common libraries used by \u{1F917} Datasets for handling audio data."),aa.forEach(t),Va=u(e),v(ge.$$.fragment,e),La=u(e),v(ee.$$.fragment,e),Wa=u(e),ae=r(e,"P",{});var vt=n(ae);Mt=o(vt,"Then you can load an audio dataset the same way you would load a text dataset. For example, load the "),be=r(vt,"A",{href:!0,rel:!0});var qo=n(be);Ut=o(qo,"Common Voice"),qo.forEach(t),Rt=o(vt," dataset with the Turkish configuration:"),vt.forEach(t),Ma=u(e),v(we.$$.fragment,e),Ua=u(e),M=r(e,"H2",{class:!0});var gt=n(M);te=r(gt,"A",{id:!0,class:!0,href:!0});var Do=n(te);ua=r(Do,"SPAN",{});var Po=n(ua);v($e.$$.fragment,Po),Po.forEach(t),Do.forEach(t),Gt=u(gt),fa=r(gt,"SPAN",{});var zo=n(fa);Jt=o(zo,"Audio datasets"),zo.forEach(t),gt.forEach(t),Ra=u(e),x=r(e,"P",{});var ie=n(x);Bt=o(ie,"Audio datasets commonly have an "),ha=r(ie,"CODE",{});var To=n(ha);Kt=o(To,"audio"),To.forEach(t),Xt=o(ie," and "),ma=r(ie,"CODE",{});var Co=n(ma);Yt=o(Co,"path"),Co.forEach(t),Qt=o(ie," or "),_a=r(ie,"CODE",{});var Oo=n(_a);Zt=o(Oo,"file"),Oo.forEach(t),es=o(ie," column."),ie.forEach(t),Ga=u(e),ye=r(e,"P",{});var po=n(ye);va=r(po,"CODE",{});var So=n(va);as=o(So,"audio"),So.forEach(t),ts=o(po," is the actual audio file that is loaded and resampled on-the-fly upon calling it."),po.forEach(t),Ja=u(e),v(ke.$$.fragment,e),Ba=u(e),A=r(e,"P",{});var ce=n(A);ss=o(ce,"When you access an audio file, it is automatically decoded and resampled. Generally, you should query an audio file like: "),ga=r(ce,"CODE",{});var Io=n(ga);os=o(Io,'common_voice[0]["audio"]'),Io.forEach(t),ls=o(ce,". If you query an audio file with "),ba=r(ce,"CODE",{});var Fo=n(ba);rs=o(Fo,'common_voice["audio"][0]'),Fo.forEach(t),ns=o(ce," instead, "),wa=r(ce,"STRONG",{});var Ho=n(wa);is=o(Ho,"all"),Ho.forEach(t),cs=o(ce," the audio files in your dataset will be decoded and resampled. This process can take a long time if you have a large dataset."),ce.forEach(t),Ka=u(e),U=r(e,"P",{});var Oa=n(U);$a=r(Oa,"CODE",{});var No=n($a);ps=o(No,"path"),No.forEach(t),ds=o(Oa," or "),ya=r(Oa,"CODE",{});var Vo=n(ya);us=o(Vo,"file"),Vo.forEach(t),fs=o(Oa," is an absolute path to an audio file."),Oa.forEach(t),Xa=u(e),v(Ee.$$.fragment,e),Ya=u(e),O=r(e,"P",{});var ta=n(O);hs=o(ta,"The "),ka=r(ta,"CODE",{});var Lo=n(ka);ms=o(Lo,"path"),Lo.forEach(t),_s=o(ta," is useful if you want to load your own audio dataset. In this case, provide a column of audio file paths to "),Ge=r(ta,"A",{href:!0});var Wo=n(Ge);vs=o(Wo,"datasets.Dataset.cast_column()"),Wo.forEach(t),gs=o(ta,":"),ta.forEach(t),Qa=u(e),v(je.$$.fragment,e),Za=u(e),R=r(e,"H2",{class:!0});var bt=n(R);se=r(bt,"A",{id:!0,class:!0,href:!0});var Mo=n(se);Ea=r(Mo,"SPAN",{});var Uo=n(Ea);v(xe.$$.fragment,Uo),Uo.forEach(t),Mo.forEach(t),bs=u(bt),ja=r(bt,"SPAN",{});var Ro=n(ja);ws=o(Ro,"Resample"),Ro.forEach(t),bt.forEach(t),et=u(e),S=r(e,"P",{});var sa=n(S);$s=o(sa,"Some models expect the audio data to have a certain sampling rate due to how the model was pretrained. For example, the "),Ae=r(sa,"A",{href:!0,rel:!0});var Go=n(Ae);ys=o(Go,"XLSR-Wav2Vec2"),Go.forEach(t),ks=o(sa," model expects the input to have a sampling rate of 16kHz, but an audio file from the Common Voice dataset has a sampling rate of 48kHz. You can use "),Je=r(sa,"A",{href:!0});var Jo=n(Je);Es=o(Jo,"datasets.Dataset.cast_column()"),Jo.forEach(t),js=o(sa," to downsample the sampling rate to 16kHz:"),sa.forEach(t),at=u(e),v(qe.$$.fragment,e),tt=u(e),oe=r(e,"P",{});var wt=n(oe);xs=o(wt,"The next time you load the audio file, the "),Be=r(wt,"A",{href:!0});var Bo=n(Be);As=o(Bo,"datasets.Audio"),Bo.forEach(t),qs=o(wt," feature will load and resample it to 16kHz:"),wt.forEach(t),st=u(e),v(De.$$.fragment,e),ot=u(e),G=r(e,"DIV",{class:!0});var $t=n(G);Ke=r($t,"IMG",{class:!0,src:!0}),Ds=u($t),Xe=r($t,"IMG",{class:!0,src:!0}),$t.forEach(t),lt=u(e),J=r(e,"H2",{class:!0});var yt=n(J);le=r(yt,"A",{id:!0,class:!0,href:!0});var Ko=n(le);xa=r(Ko,"SPAN",{});var Xo=n(xa);v(Pe.$$.fragment,Xo),Xo.forEach(t),Ko.forEach(t),Ps=u(yt),Aa=r(yt,"SPAN",{});var Yo=n(Aa);zs=o(Yo,"Map"),Yo.forEach(t),yt.forEach(t),rt=u(e),q=r(e,"P",{});var pe=n(q);Ts=o(pe,"Just like text datasets, you can apply a preprocessing function over an entire dataset with "),Ye=r(pe,"A",{href:!0});var Qo=n(Ye);Cs=o(Qo,"datasets.Dataset.map()"),Qo.forEach(t),Os=o(pe,", which is useful for preprocessing all of your audio data at once. Start with a "),ze=r(pe,"A",{href:!0,rel:!0});var Zo=n(ze);Ss=o(Zo,"speech recognition model"),Zo.forEach(t),Is=o(pe," of your choice, and load a "),qa=r(pe,"CODE",{});var el=n(qa);Fs=o(el,"processor"),el.forEach(t),Hs=o(pe," object that contains:"),pe.forEach(t),nt=u(e),re=r(e,"OL",{});var kt=n(re);Da=r(kt,"LI",{});var al=n(Da);B=r(al,"P",{});var oa=n(B);Ns=o(oa,"A feature extractor to convert the speech signal to the model\u2019s input format. Every speech recognition model on the \u{1F917} "),Te=r(oa,"A",{href:!0,rel:!0});var tl=n(Te);Vs=o(tl,"Hub"),tl.forEach(t),Ls=o(oa," contains a predefined feature extractor that can be easily loaded with "),Pa=r(oa,"CODE",{});var sl=n(Pa);Ws=o(sl,"AutoFeatureExtractor.from_pretrained(...)"),sl.forEach(t),Ms=o(oa,"."),oa.forEach(t),al.forEach(t),Us=u(kt),Ce=r(kt,"LI",{});var Et=n(Ce);K=r(Et,"P",{});var la=n(K);Rs=o(la,"A tokenizer to convert the model\u2019s output format to text. Fine-tuned speech recognition models, such as "),Oe=r(la,"A",{href:!0,rel:!0});var ol=n(Oe);Gs=o(ol,"facebook/wav2vec2-base-960h"),ol.forEach(t),Js=o(la,", contain a predefined tokenizer that can be easily loaded with "),za=r(la,"CODE",{});var ll=n(za);Bs=o(ll,"AutoTokenizer.from_pretrained(...)"),ll.forEach(t),Ks=o(la,"."),la.forEach(t),Xs=u(Et),X=r(Et,"P",{});var ra=n(X);Ys=o(ra,"For pretrained speech recognition models, such as "),Se=r(ra,"A",{href:!0,rel:!0});var rl=n(Se);Qs=o(rl,"facebook/wav2vec2-large-xlsr-53"),rl.forEach(t),Zs=o(ra,", a tokenizer needs to be created from the target text as explained "),Ie=r(ra,"A",{href:!0,rel:!0});var nl=n(Ie);eo=o(nl,"here"),nl.forEach(t),ao=o(ra,". The following example demonstrates how to load a feature extractor, tokenizer and processor for a pretrained speech recognition model:"),ra.forEach(t),Et.forEach(t),kt.forEach(t),it=u(e),v(Fe.$$.fragment,e),ct=u(e),ne=r(e,"P",{});var jt=n(ne);to=o(jt,"For fine-tuned speech recognition models, you can simply load a predefined "),Ta=r(jt,"CODE",{});var il=n(Ta);so=o(il,"processor"),il.forEach(t),oo=o(jt," object with:"),jt.forEach(t),pt=u(e),v(He.$$.fragment,e),dt=u(e),I=r(e,"P",{});var na=n(I);lo=o(na,"Make sure to include the "),Ca=r(na,"CODE",{});var cl=n(Ca);ro=o(cl,"audio"),cl.forEach(t),no=o(na," key in your preprocessing function when you call "),Qe=r(na,"A",{href:!0});var pl=n(Qe);io=o(pl,"datasets.Dataset.map()"),pl.forEach(t),co=o(na," so that you are actually resampling the audio data:"),na.forEach(t),ut=u(e),v(Ne.$$.fragment,e),this.h()},h(){p(f,"name","hf:doc:metadata"),p(f,"content",JSON.stringify(bl)),p(y,"id","process-audio-data"),p(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(y,"href","#process-audio-data"),p(h,"class","relative group"),p(z,"href","/docs/datasets/pr_3874/en/package_reference/main_classes#datasets.Audio"),p(Me,"href","/docs/datasets/pr_3874/en/package_reference/main_classes#datasets.Dataset.map"),p(Z,"id","installation"),p(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Z,"href","#installation"),p(W,"class","relative group"),p(Ue,"href","/docs/datasets/pr_3874/en/package_reference/main_classes#datasets.Audio"),p(Re,"href","/docs/datasets/pr_3874/en/package_reference/main_classes#datasets.Audio"),p(_e,"href","https://pytorch.org/audio/stable/index.html"),p(_e,"rel","nofollow"),p(ve,"href","https://librosa.org/doc/latest/index.html"),p(ve,"rel","nofollow"),p(be,"href","https://huggingface.co/datasets/common_voice"),p(be,"rel","nofollow"),p(te,"id","audio-datasets"),p(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(te,"href","#audio-datasets"),p(M,"class","relative group"),p(Ge,"href","/docs/datasets/pr_3874/en/package_reference/main_classes#datasets.Dataset.cast_column"),p(se,"id","resample"),p(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(se,"href","#resample"),p(R,"class","relative group"),p(Ae,"href","https://huggingface.co/facebook/wav2vec2-large-xlsr-53"),p(Ae,"rel","nofollow"),p(Je,"href","/docs/datasets/pr_3874/en/package_reference/main_classes#datasets.Dataset.cast_column"),p(Be,"href","/docs/datasets/pr_3874/en/package_reference/main_classes#datasets.Audio"),p(Ke,"class","block dark:hidden"),dl(Ke.src,uo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/resample.gif")||p(Ke,"src",uo),p(Xe,"class","hidden dark:block"),dl(Xe.src,fo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/datasets/resample-dark.gif")||p(Xe,"src",fo),p(G,"class","flex justify-center"),p(le,"id","map"),p(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(le,"href","#map"),p(J,"class","relative group"),p(Ye,"href","/docs/datasets/pr_3874/en/package_reference/main_classes#datasets.Dataset.map"),p(ze,"href","https://huggingface.co/models?pipeline_tag=automatic-speech-recognition&sort=downloads"),p(ze,"rel","nofollow"),p(Te,"href","https://huggingface.co/models?pipeline_tag=automatic-speech-recognition&sort=downloads"),p(Te,"rel","nofollow"),p(Oe,"href","https://huggingface.co/facebook/wav2vec2-base-960h"),p(Oe,"rel","nofollow"),p(Se,"href","https://huggingface.co/facebook/wav2vec2-large-xlsr-53"),p(Se,"rel","nofollow"),p(Ie,"href","https://huggingface.co/blog/fine-tune-wav2vec2-english"),p(Ie,"rel","nofollow"),p(Qe,"href","/docs/datasets/pr_3874/en/package_reference/main_classes#datasets.Dataset.map")},m(e,i){a(document.head,f),c(e,P,i),c(e,h,i),a(h,y),a(y,F),g(k,F,null),a(h,de),a(h,H),a(H,N),c(e,Y,i),c(e,j,i),a(j,V),a(j,z),a(z,ue),a(j,L),c(e,m,i),c(e,E,i),a(E,Q),a(Q,Le),a(E,We),a(E,ca),a(ca,xt),a(E,At),a(E,fe),a(fe,qt),a(fe,Me),a(Me,Dt),a(fe,Pt),c(e,Ia,i),c(e,W,i),a(W,Z),a(Z,pa),g(he,pa,null),a(W,zt),a(W,da),a(da,Tt),c(e,Fa,i),c(e,T,i),a(T,Ct),a(T,Ue),a(Ue,Ot),a(T,St),a(T,Re),a(Re,It),a(T,Ft),c(e,Ha,i),g(me,e,i),c(e,Na,i),c(e,C,i),a(C,Ht),a(C,_e),a(_e,Nt),a(C,Vt),a(C,ve),a(ve,Lt),a(C,Wt),c(e,Va,i),g(ge,e,i),c(e,La,i),g(ee,e,i),c(e,Wa,i),c(e,ae,i),a(ae,Mt),a(ae,be),a(be,Ut),a(ae,Rt),c(e,Ma,i),g(we,e,i),c(e,Ua,i),c(e,M,i),a(M,te),a(te,ua),g($e,ua,null),a(M,Gt),a(M,fa),a(fa,Jt),c(e,Ra,i),c(e,x,i),a(x,Bt),a(x,ha),a(ha,Kt),a(x,Xt),a(x,ma),a(ma,Yt),a(x,Qt),a(x,_a),a(_a,Zt),a(x,es),c(e,Ga,i),c(e,ye,i),a(ye,va),a(va,as),a(ye,ts),c(e,Ja,i),g(ke,e,i),c(e,Ba,i),c(e,A,i),a(A,ss),a(A,ga),a(ga,os),a(A,ls),a(A,ba),a(ba,rs),a(A,ns),a(A,wa),a(wa,is),a(A,cs),c(e,Ka,i),c(e,U,i),a(U,$a),a($a,ps),a(U,ds),a(U,ya),a(ya,us),a(U,fs),c(e,Xa,i),g(Ee,e,i),c(e,Ya,i),c(e,O,i),a(O,hs),a(O,ka),a(ka,ms),a(O,_s),a(O,Ge),a(Ge,vs),a(O,gs),c(e,Qa,i),g(je,e,i),c(e,Za,i),c(e,R,i),a(R,se),a(se,Ea),g(xe,Ea,null),a(R,bs),a(R,ja),a(ja,ws),c(e,et,i),c(e,S,i),a(S,$s),a(S,Ae),a(Ae,ys),a(S,ks),a(S,Je),a(Je,Es),a(S,js),c(e,at,i),g(qe,e,i),c(e,tt,i),c(e,oe,i),a(oe,xs),a(oe,Be),a(Be,As),a(oe,qs),c(e,st,i),g(De,e,i),c(e,ot,i),c(e,G,i),a(G,Ke),a(G,Ds),a(G,Xe),c(e,lt,i),c(e,J,i),a(J,le),a(le,xa),g(Pe,xa,null),a(J,Ps),a(J,Aa),a(Aa,zs),c(e,rt,i),c(e,q,i),a(q,Ts),a(q,Ye),a(Ye,Cs),a(q,Os),a(q,ze),a(ze,Ss),a(q,Is),a(q,qa),a(qa,Fs),a(q,Hs),c(e,nt,i),c(e,re,i),a(re,Da),a(Da,B),a(B,Ns),a(B,Te),a(Te,Vs),a(B,Ls),a(B,Pa),a(Pa,Ws),a(B,Ms),a(re,Us),a(re,Ce),a(Ce,K),a(K,Rs),a(K,Oe),a(Oe,Gs),a(K,Js),a(K,za),a(za,Bs),a(K,Ks),a(Ce,Xs),a(Ce,X),a(X,Ys),a(X,Se),a(Se,Qs),a(X,Zs),a(X,Ie),a(Ie,eo),a(X,ao),c(e,it,i),g(Fe,e,i),c(e,ct,i),c(e,ne,i),a(ne,to),a(ne,Ta),a(Ta,so),a(ne,oo),c(e,pt,i),g(He,e,i),c(e,dt,i),c(e,I,i),a(I,lo),a(I,Ca),a(Ca,ro),a(I,no),a(I,Qe),a(Qe,io),a(I,co),c(e,ut,i),g(Ne,e,i),ft=!0},p(e,[i]){const Ve={};i&2&&(Ve.$$scope={dirty:i,ctx:e}),ee.$set(Ve)},i(e){ft||(b(k.$$.fragment,e),b(he.$$.fragment,e),b(me.$$.fragment,e),b(ge.$$.fragment,e),b(ee.$$.fragment,e),b(we.$$.fragment,e),b($e.$$.fragment,e),b(ke.$$.fragment,e),b(Ee.$$.fragment,e),b(je.$$.fragment,e),b(xe.$$.fragment,e),b(qe.$$.fragment,e),b(De.$$.fragment,e),b(Pe.$$.fragment,e),b(Fe.$$.fragment,e),b(He.$$.fragment,e),b(Ne.$$.fragment,e),ft=!0)},o(e){w(k.$$.fragment,e),w(he.$$.fragment,e),w(me.$$.fragment,e),w(ge.$$.fragment,e),w(ee.$$.fragment,e),w(we.$$.fragment,e),w($e.$$.fragment,e),w(ke.$$.fragment,e),w(Ee.$$.fragment,e),w(je.$$.fragment,e),w(xe.$$.fragment,e),w(qe.$$.fragment,e),w(De.$$.fragment,e),w(Pe.$$.fragment,e),w(Fe.$$.fragment,e),w(He.$$.fragment,e),w(Ne.$$.fragment,e),ft=!1},d(e){t(f),e&&t(P),e&&t(h),$(k),e&&t(Y),e&&t(j),e&&t(m),e&&t(E),e&&t(Ia),e&&t(W),$(he),e&&t(Fa),e&&t(T),e&&t(Ha),$(me,e),e&&t(Na),e&&t(C),e&&t(Va),$(ge,e),e&&t(La),$(ee,e),e&&t(Wa),e&&t(ae),e&&t(Ma),$(we,e),e&&t(Ua),e&&t(M),$($e),e&&t(Ra),e&&t(x),e&&t(Ga),e&&t(ye),e&&t(Ja),$(ke,e),e&&t(Ba),e&&t(A),e&&t(Ka),e&&t(U),e&&t(Xa),$(Ee,e),e&&t(Ya),e&&t(O),e&&t(Qa),$(je,e),e&&t(Za),e&&t(R),$(xe),e&&t(et),e&&t(S),e&&t(at),$(qe,e),e&&t(tt),e&&t(oe),e&&t(st),$(De,e),e&&t(ot),e&&t(G),e&&t(lt),e&&t(J),$(Pe),e&&t(rt),e&&t(q),e&&t(nt),e&&t(re),e&&t(it),$(Fe,e),e&&t(ct),e&&t(ne),e&&t(pt),$(He,e),e&&t(dt),e&&t(I),e&&t(ut),$(Ne,e)}}}const bl={local:"process-audio-data",sections:[{local:"installation",title:"Installation"},{local:"audio-datasets",title:"Audio datasets"},{local:"resample",title:"Resample"},{local:"map",title:"Map"}],title:"Process audio data"};function wl(ia,f,P){let{fw:h}=f;return ia.$$set=y=>{"fw"in y&&P(0,h=y.fw)},[h]}class jl extends ul{constructor(f){super();fl(this,f,wl,gl,hl,{fw:0})}}export{jl as default,bl as metadata};
