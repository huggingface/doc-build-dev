import{S as Qs,i as Xs,s as Ys,e as r,k as c,w as $,t as l,M as Zs,c as o,d as t,m as f,a as n,x as g,h as i,b as u,F as s,g as p,y,q as A,o as j,B as E}from"../chunks/vendor-4833417e.js";import{T as ea}from"../chunks/Tip-fffd6df1.js";import{I as Ie}from"../chunks/IconCopyLink-4b81c553.js";import{C as kt}from"../chunks/CodeBlock-6a3d1b46.js";import{C as Ks}from"../chunks/CodeBlockFw-27a176a0.js";import"../chunks/CopyButton-dacfbfaf.js";function ta(_e){let h,F,m,d,T,v,J,q;return{c(){h=r("p"),F=l("Remember, architecture refers to the skeleton of the model and checkpoints are the weights for a given architecture. For example, "),m=r("a"),d=l("BERT"),T=l(" is an architecture, while "),v=r("code"),J=l("bert-base-uncased"),q=l(" is a checkpoint. Model is a general term that can mean either architecture or checkpoint."),this.h()},l(P){h=o(P,"P",{});var k=n(h);F=i(k,"Remember, architecture refers to the skeleton of the model and checkpoints are the weights for a given architecture. For example, "),m=o(k,"A",{href:!0,rel:!0});var b=n(m);d=i(b,"BERT"),b.forEach(t),T=i(k," is an architecture, while "),v=o(k,"CODE",{});var ne=n(v);J=i(ne,"bert-base-uncased"),ne.forEach(t),q=i(k," is a checkpoint. Model is a general term that can mean either architecture or checkpoint."),k.forEach(t),this.h()},h(){u(m,"href","https://huggingface.co/bert-base-uncased"),u(m,"rel","nofollow")},m(P,k){p(P,h,k),s(h,F),s(h,m),s(m,d),s(h,T),s(h,v),s(v,J),s(h,q)},d(P){P&&t(h)}}}function sa(_e){let h,F,m,d,T,v,J,q,P,k,b,ne,we,bt,_t,$e,wt,$t,Oe,S,De,le,gt,Be,_,ge,yt,At,ye,jt,Et,Ae,xt,Ft,je,Tt,He,C,N,Ee,U,qt,xe,Pt,Re,ie,Ct,Ge,I,zt,pe,Mt,Lt,Ve,K,We,ce,St,Je,Q,Ue,z,O,Fe,X,Nt,Te,It,Ke,fe,Ot,Qe,D,Dt,ue,Bt,Ht,Xe,Y,Ye,M,B,qe,Z,Rt,Pe,Gt,Ze,H,Vt,he,Wt,Jt,et,R,Ut,me,Kt,Qt,tt,ee,st,L,G,Ce,te,Xt,ze,Yt,at,x,Zt,Me,es,ts,de,ss,as,Le,rs,rt,se,ot,ve,os,nt,ae,lt,w,ns,Se,ls,is,Ne,ps,cs,ke,fs,us,it;return v=new Ie({}),S=new ea({props:{$$slots:{default:[ta]},$$scope:{ctx:_e}}}),U=new Ie({}),K=new kt({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),Q=new kt({props:{code:`sequence = "In a hole in the ground there lived a hobbit."
print(tokenizer(sequence))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>sequence = <span class="hljs-string">&quot;In a hole in the ground there lived a hobbit.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer(sequence))
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: [<span class="hljs-number">101</span>, <span class="hljs-number">1999</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">4920</span>, <span class="hljs-number">1999</span>, <span class="hljs-number">1996</span>, <span class="hljs-number">2598</span>, <span class="hljs-number">2045</span>, <span class="hljs-number">2973</span>, <span class="hljs-number">1037</span>, <span class="hljs-number">7570</span>, <span class="hljs-number">10322</span>, <span class="hljs-number">4183</span>, <span class="hljs-number">1012</span>, <span class="hljs-number">102</span>], 
 <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>], 
 <span class="hljs-string">&#x27;attention_mask&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]}`}}),X=new Ie({}),Y=new kt({props:{code:`from transformers import AutoFeatureExtractor

feature_extractor = AutoFeatureExtractor.from_pretrained(
    "ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition&quot;</span>
<span class="hljs-meta">... </span>)`}}),Z=new Ie({}),ee=new kt({props:{code:`from transformers import AutoProcessor

processor = AutoProcessor.from_pretrained("microsoft/layoutlmv2-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)`}}),te=new Ie({}),se=new Ks({props:{group1:{id:"pt",code:`from transformers import AutoModelForSequenceClassification

model = AutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`},group2:{id:"tf",code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}}),ae=new Ks({props:{group1:{id:"pt",code:`from transformers import AutoModelForTokenClassification

model = AutoModelForTokenClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`},group2:{id:"tf",code:`from transformers import TFAutoModelForTokenClassification

model = TFAutoModelForTokenClassification.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}}),{c(){h=r("meta"),F=c(),m=r("h1"),d=r("a"),T=r("span"),$(v.$$.fragment),J=c(),q=r("span"),P=l("Load pretrained instances with an AutoClass"),k=c(),b=r("p"),ne=l("With so many different Transformer architectures, it can be challenging to create one for your checkpoint. As a part of \u{1F917} Transformers core philosophy to make the library easy, simple and flexible to use, an "),we=r("code"),bt=l("AutoClass"),_t=l(" automatically infer and load the correct architecture from a given checkpoint. The "),$e=r("code"),wt=l("from_pretrained"),$t=l(" method lets you quickly load a pretrained model for any architecture so you don\u2019t have to devote time and resources to train a model from scratch. Producing this type of checkpoint-agnostic code means if your code works for one checkpoint, it will work with another checkpoint - as long as it was trained for a similar task - even if the architecture is different."),Oe=c(),$(S.$$.fragment),De=c(),le=r("p"),gt=l("In this tutorial, learn to:"),Be=c(),_=r("ul"),ge=r("li"),yt=l("Load a pretrained tokenizer."),At=c(),ye=r("li"),jt=l("Load a pretrained feature extractor."),Et=c(),Ae=r("li"),xt=l("Load a pretrained processor."),Ft=c(),je=r("li"),Tt=l("Load a pretrained model."),He=c(),C=r("h2"),N=r("a"),Ee=r("span"),$(U.$$.fragment),qt=c(),xe=r("span"),Pt=l("AutoTokenizer"),Re=c(),ie=r("p"),Ct=l("Nearly every NLP task begins with a tokenizer. A tokenizer converts your input into a format that can be processed by the model."),Ge=c(),I=r("p"),zt=l("Load a tokenizer with "),pe=r("a"),Mt=l("AutoTokenizer.from_pretrained()"),Lt=l(":"),Ve=c(),$(K.$$.fragment),We=c(),ce=r("p"),St=l("Then tokenize your input as shown below:"),Je=c(),$(Q.$$.fragment),Ue=c(),z=r("h2"),O=r("a"),Fe=r("span"),$(X.$$.fragment),Nt=c(),Te=r("span"),It=l("AutoFeatureExtractor"),Ke=c(),fe=r("p"),Ot=l("For audio and vision tasks, a feature extractor processes the audio signal or image into the correct input format."),Qe=c(),D=r("p"),Dt=l("Load a feature extractor with "),ue=r("a"),Bt=l("AutoFeatureExtractor.from_pretrained()"),Ht=l(":"),Xe=c(),$(Y.$$.fragment),Ye=c(),M=r("h2"),B=r("a"),qe=r("span"),$(Z.$$.fragment),Rt=c(),Pe=r("span"),Gt=l("AutoProcessor"),Ze=c(),H=r("p"),Vt=l("Multimodal tasks require a processor that combines two types of preprocessing tools. For example, the "),he=r("a"),Wt=l("LayoutLMV2"),Jt=l(" model requires a feature extractor to handle images and a tokenizer to handle text; a processor combines both of them."),et=c(),R=r("p"),Ut=l("Load a processor with "),me=r("a"),Kt=l("AutoProcessor.from_pretrained()"),Qt=l(":"),tt=c(),$(ee.$$.fragment),st=c(),L=r("h2"),G=r("a"),Ce=r("span"),$(te.$$.fragment),Xt=c(),ze=r("span"),Yt=l("AutoModel"),at=c(),x=r("p"),Zt=l("Finally, the "),Me=r("code"),es=l("AutoModelFor"),ts=l(" classes let you load a pretrained model for a given task (see "),de=r("a"),ss=l("here"),as=l(" for a complete list of available tasks). For example, load a model for sequence classification with "),Le=r("code"),rs=l("AutoModelForSequenceClassification.from_pretrained()"),rt=c(),$(se.$$.fragment),ot=c(),ve=r("p"),os=l("Easily reuse the same checkpoint to load an architecture for a different task:"),nt=c(),$(ae.$$.fragment),lt=c(),w=r("p"),ns=l("Generally, we recommend using the "),Se=r("code"),ls=l("AutoTokenizer"),is=l(" class and the "),Ne=r("code"),ps=l("AutoModelFor"),cs=l(" class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),ke=r("a"),fs=l("tutorial"),us=l(", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),this.h()},l(e){const a=Zs('[data-svelte="svelte-1phssyn"]',document.head);h=o(a,"META",{name:!0,content:!0}),a.forEach(t),F=f(e),m=o(e,"H1",{class:!0});var re=n(m);d=o(re,"A",{id:!0,class:!0,href:!0});var hs=n(d);T=o(hs,"SPAN",{});var ms=n(T);g(v.$$.fragment,ms),ms.forEach(t),hs.forEach(t),J=f(re),q=o(re,"SPAN",{});var ds=n(q);P=i(ds,"Load pretrained instances with an AutoClass"),ds.forEach(t),re.forEach(t),k=f(e),b=o(e,"P",{});var be=n(b);ne=i(be,"With so many different Transformer architectures, it can be challenging to create one for your checkpoint. As a part of \u{1F917} Transformers core philosophy to make the library easy, simple and flexible to use, an "),we=o(be,"CODE",{});var vs=n(we);bt=i(vs,"AutoClass"),vs.forEach(t),_t=i(be," automatically infer and load the correct architecture from a given checkpoint. The "),$e=o(be,"CODE",{});var ks=n($e);wt=i(ks,"from_pretrained"),ks.forEach(t),$t=i(be," method lets you quickly load a pretrained model for any architecture so you don\u2019t have to devote time and resources to train a model from scratch. Producing this type of checkpoint-agnostic code means if your code works for one checkpoint, it will work with another checkpoint - as long as it was trained for a similar task - even if the architecture is different."),be.forEach(t),Oe=f(e),g(S.$$.fragment,e),De=f(e),le=o(e,"P",{});var bs=n(le);gt=i(bs,"In this tutorial, learn to:"),bs.forEach(t),Be=f(e),_=o(e,"UL",{});var V=n(_);ge=o(V,"LI",{});var _s=n(ge);yt=i(_s,"Load a pretrained tokenizer."),_s.forEach(t),At=f(V),ye=o(V,"LI",{});var ws=n(ye);jt=i(ws,"Load a pretrained feature extractor."),ws.forEach(t),Et=f(V),Ae=o(V,"LI",{});var $s=n(Ae);xt=i($s,"Load a pretrained processor."),$s.forEach(t),Ft=f(V),je=o(V,"LI",{});var gs=n(je);Tt=i(gs,"Load a pretrained model."),gs.forEach(t),V.forEach(t),He=f(e),C=o(e,"H2",{class:!0});var pt=n(C);N=o(pt,"A",{id:!0,class:!0,href:!0});var ys=n(N);Ee=o(ys,"SPAN",{});var As=n(Ee);g(U.$$.fragment,As),As.forEach(t),ys.forEach(t),qt=f(pt),xe=o(pt,"SPAN",{});var js=n(xe);Pt=i(js,"AutoTokenizer"),js.forEach(t),pt.forEach(t),Re=f(e),ie=o(e,"P",{});var Es=n(ie);Ct=i(Es,"Nearly every NLP task begins with a tokenizer. A tokenizer converts your input into a format that can be processed by the model."),Es.forEach(t),Ge=f(e),I=o(e,"P",{});var ct=n(I);zt=i(ct,"Load a tokenizer with "),pe=o(ct,"A",{href:!0});var xs=n(pe);Mt=i(xs,"AutoTokenizer.from_pretrained()"),xs.forEach(t),Lt=i(ct,":"),ct.forEach(t),Ve=f(e),g(K.$$.fragment,e),We=f(e),ce=o(e,"P",{});var Fs=n(ce);St=i(Fs,"Then tokenize your input as shown below:"),Fs.forEach(t),Je=f(e),g(Q.$$.fragment,e),Ue=f(e),z=o(e,"H2",{class:!0});var ft=n(z);O=o(ft,"A",{id:!0,class:!0,href:!0});var Ts=n(O);Fe=o(Ts,"SPAN",{});var qs=n(Fe);g(X.$$.fragment,qs),qs.forEach(t),Ts.forEach(t),Nt=f(ft),Te=o(ft,"SPAN",{});var Ps=n(Te);It=i(Ps,"AutoFeatureExtractor"),Ps.forEach(t),ft.forEach(t),Ke=f(e),fe=o(e,"P",{});var Cs=n(fe);Ot=i(Cs,"For audio and vision tasks, a feature extractor processes the audio signal or image into the correct input format."),Cs.forEach(t),Qe=f(e),D=o(e,"P",{});var ut=n(D);Dt=i(ut,"Load a feature extractor with "),ue=o(ut,"A",{href:!0});var zs=n(ue);Bt=i(zs,"AutoFeatureExtractor.from_pretrained()"),zs.forEach(t),Ht=i(ut,":"),ut.forEach(t),Xe=f(e),g(Y.$$.fragment,e),Ye=f(e),M=o(e,"H2",{class:!0});var ht=n(M);B=o(ht,"A",{id:!0,class:!0,href:!0});var Ms=n(B);qe=o(Ms,"SPAN",{});var Ls=n(qe);g(Z.$$.fragment,Ls),Ls.forEach(t),Ms.forEach(t),Rt=f(ht),Pe=o(ht,"SPAN",{});var Ss=n(Pe);Gt=i(Ss,"AutoProcessor"),Ss.forEach(t),ht.forEach(t),Ze=f(e),H=o(e,"P",{});var mt=n(H);Vt=i(mt,"Multimodal tasks require a processor that combines two types of preprocessing tools. For example, the "),he=o(mt,"A",{href:!0});var Ns=n(he);Wt=i(Ns,"LayoutLMV2"),Ns.forEach(t),Jt=i(mt," model requires a feature extractor to handle images and a tokenizer to handle text; a processor combines both of them."),mt.forEach(t),et=f(e),R=o(e,"P",{});var dt=n(R);Ut=i(dt,"Load a processor with "),me=o(dt,"A",{href:!0});var Is=n(me);Kt=i(Is,"AutoProcessor.from_pretrained()"),Is.forEach(t),Qt=i(dt,":"),dt.forEach(t),tt=f(e),g(ee.$$.fragment,e),st=f(e),L=o(e,"H2",{class:!0});var vt=n(L);G=o(vt,"A",{id:!0,class:!0,href:!0});var Os=n(G);Ce=o(Os,"SPAN",{});var Ds=n(Ce);g(te.$$.fragment,Ds),Ds.forEach(t),Os.forEach(t),Xt=f(vt),ze=o(vt,"SPAN",{});var Bs=n(ze);Yt=i(Bs,"AutoModel"),Bs.forEach(t),vt.forEach(t),at=f(e),x=o(e,"P",{});var oe=n(x);Zt=i(oe,"Finally, the "),Me=o(oe,"CODE",{});var Hs=n(Me);es=i(Hs,"AutoModelFor"),Hs.forEach(t),ts=i(oe," classes let you load a pretrained model for a given task (see "),de=o(oe,"A",{href:!0});var Rs=n(de);ss=i(Rs,"here"),Rs.forEach(t),as=i(oe," for a complete list of available tasks). For example, load a model for sequence classification with "),Le=o(oe,"CODE",{});var Gs=n(Le);rs=i(Gs,"AutoModelForSequenceClassification.from_pretrained()"),Gs.forEach(t),oe.forEach(t),rt=f(e),g(se.$$.fragment,e),ot=f(e),ve=o(e,"P",{});var Vs=n(ve);os=i(Vs,"Easily reuse the same checkpoint to load an architecture for a different task:"),Vs.forEach(t),nt=f(e),g(ae.$$.fragment,e),lt=f(e),w=o(e,"P",{});var W=n(w);ns=i(W,"Generally, we recommend using the "),Se=o(W,"CODE",{});var Ws=n(Se);ls=i(Ws,"AutoTokenizer"),Ws.forEach(t),is=i(W," class and the "),Ne=o(W,"CODE",{});var Js=n(Ne);ps=i(Js,"AutoModelFor"),Js.forEach(t),cs=i(W," class to load pretrained instances of models. This will ensure you load the correct architecture every time. In the next "),ke=o(W,"A",{href:!0});var Us=n(ke);fs=i(Us,"tutorial"),Us.forEach(t),us=i(W,", learn how to use your newly loaded tokenizer, feature extractor and processor to preprocess a dataset for fine-tuning."),W.forEach(t),this.h()},h(){u(h,"name","hf:doc:metadata"),u(h,"content",JSON.stringify(aa)),u(d,"id","load-pretrained-instances-with-an-autoclass"),u(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(d,"href","#load-pretrained-instances-with-an-autoclass"),u(m,"class","relative group"),u(N,"id","autotokenizer"),u(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(N,"href","#autotokenizer"),u(C,"class","relative group"),u(pe,"href","/docs/transformers/pr_16105/en/model_doc/auto#transformers.AutoTokenizer.from_pretrained"),u(O,"id","autofeatureextractor"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#autofeatureextractor"),u(z,"class","relative group"),u(ue,"href","/docs/transformers/pr_16105/en/model_doc/auto#transformers.AutoFeatureExtractor.from_pretrained"),u(B,"id","autoprocessor"),u(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(B,"href","#autoprocessor"),u(M,"class","relative group"),u(he,"href","model_doc/layoutlmv2"),u(me,"href","/docs/transformers/pr_16105/en/model_doc/auto#transformers.AutoProcessor.from_pretrained"),u(G,"id","automodel"),u(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(G,"href","#automodel"),u(L,"class","relative group"),u(de,"href","model_doc/auto"),u(ke,"href","preprocessing")},m(e,a){s(document.head,h),p(e,F,a),p(e,m,a),s(m,d),s(d,T),y(v,T,null),s(m,J),s(m,q),s(q,P),p(e,k,a),p(e,b,a),s(b,ne),s(b,we),s(we,bt),s(b,_t),s(b,$e),s($e,wt),s(b,$t),p(e,Oe,a),y(S,e,a),p(e,De,a),p(e,le,a),s(le,gt),p(e,Be,a),p(e,_,a),s(_,ge),s(ge,yt),s(_,At),s(_,ye),s(ye,jt),s(_,Et),s(_,Ae),s(Ae,xt),s(_,Ft),s(_,je),s(je,Tt),p(e,He,a),p(e,C,a),s(C,N),s(N,Ee),y(U,Ee,null),s(C,qt),s(C,xe),s(xe,Pt),p(e,Re,a),p(e,ie,a),s(ie,Ct),p(e,Ge,a),p(e,I,a),s(I,zt),s(I,pe),s(pe,Mt),s(I,Lt),p(e,Ve,a),y(K,e,a),p(e,We,a),p(e,ce,a),s(ce,St),p(e,Je,a),y(Q,e,a),p(e,Ue,a),p(e,z,a),s(z,O),s(O,Fe),y(X,Fe,null),s(z,Nt),s(z,Te),s(Te,It),p(e,Ke,a),p(e,fe,a),s(fe,Ot),p(e,Qe,a),p(e,D,a),s(D,Dt),s(D,ue),s(ue,Bt),s(D,Ht),p(e,Xe,a),y(Y,e,a),p(e,Ye,a),p(e,M,a),s(M,B),s(B,qe),y(Z,qe,null),s(M,Rt),s(M,Pe),s(Pe,Gt),p(e,Ze,a),p(e,H,a),s(H,Vt),s(H,he),s(he,Wt),s(H,Jt),p(e,et,a),p(e,R,a),s(R,Ut),s(R,me),s(me,Kt),s(R,Qt),p(e,tt,a),y(ee,e,a),p(e,st,a),p(e,L,a),s(L,G),s(G,Ce),y(te,Ce,null),s(L,Xt),s(L,ze),s(ze,Yt),p(e,at,a),p(e,x,a),s(x,Zt),s(x,Me),s(Me,es),s(x,ts),s(x,de),s(de,ss),s(x,as),s(x,Le),s(Le,rs),p(e,rt,a),y(se,e,a),p(e,ot,a),p(e,ve,a),s(ve,os),p(e,nt,a),y(ae,e,a),p(e,lt,a),p(e,w,a),s(w,ns),s(w,Se),s(Se,ls),s(w,is),s(w,Ne),s(Ne,ps),s(w,cs),s(w,ke),s(ke,fs),s(w,us),it=!0},p(e,[a]){const re={};a&2&&(re.$$scope={dirty:a,ctx:e}),S.$set(re)},i(e){it||(A(v.$$.fragment,e),A(S.$$.fragment,e),A(U.$$.fragment,e),A(K.$$.fragment,e),A(Q.$$.fragment,e),A(X.$$.fragment,e),A(Y.$$.fragment,e),A(Z.$$.fragment,e),A(ee.$$.fragment,e),A(te.$$.fragment,e),A(se.$$.fragment,e),A(ae.$$.fragment,e),it=!0)},o(e){j(v.$$.fragment,e),j(S.$$.fragment,e),j(U.$$.fragment,e),j(K.$$.fragment,e),j(Q.$$.fragment,e),j(X.$$.fragment,e),j(Y.$$.fragment,e),j(Z.$$.fragment,e),j(ee.$$.fragment,e),j(te.$$.fragment,e),j(se.$$.fragment,e),j(ae.$$.fragment,e),it=!1},d(e){t(h),e&&t(F),e&&t(m),E(v),e&&t(k),e&&t(b),e&&t(Oe),E(S,e),e&&t(De),e&&t(le),e&&t(Be),e&&t(_),e&&t(He),e&&t(C),E(U),e&&t(Re),e&&t(ie),e&&t(Ge),e&&t(I),e&&t(Ve),E(K,e),e&&t(We),e&&t(ce),e&&t(Je),E(Q,e),e&&t(Ue),e&&t(z),E(X),e&&t(Ke),e&&t(fe),e&&t(Qe),e&&t(D),e&&t(Xe),E(Y,e),e&&t(Ye),e&&t(M),E(Z),e&&t(Ze),e&&t(H),e&&t(et),e&&t(R),e&&t(tt),E(ee,e),e&&t(st),e&&t(L),E(te),e&&t(at),e&&t(x),e&&t(rt),E(se,e),e&&t(ot),e&&t(ve),e&&t(nt),E(ae,e),e&&t(lt),e&&t(w)}}}const aa={local:"load-pretrained-instances-with-an-autoclass",sections:[{local:"autotokenizer",title:"AutoTokenizer"},{local:"autofeatureextractor",title:"AutoFeatureExtractor"},{local:"autoprocessor",title:"AutoProcessor"},{local:"automodel",title:"AutoModel"}],title:"Load pretrained instances with an AutoClass"};function ra(_e,h,F){let{fw:m}=h;return _e.$$set=d=>{"fw"in d&&F(0,m=d.fw)},[m]}class fa extends Qs{constructor(h){super();Xs(this,h,ra,sa,Ys,{fw:0})}}export{fa as default,aa as metadata};
