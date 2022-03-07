import{S as je,i as He,s as Je,e as r,k as f,w as ze,t as i,M as De,c as o,d as a,m as u,a as s,x as Be,h as l,b as h,F as t,g as c,y as Me,L as Ge,q as Ne,o as Ie,B as Fe}from"../../chunks/vendor-4833417e.js";import{I as Ue}from"../../chunks/IconCopyLink-4b81c553.js";function Ke(ae){let d,W,p,v,X,L,te,$,re,B,m,w,O,E,oe,P,se,M,g,ne,S,ie,le,N,k,ce,I,T,q,he,F,C,pe,U,_,z,fe,ue,A,ve,V,de,me,j,b,we,x,ge,_e,H,y,be,R,ye,Le,J;return L=new Ue({}),E=new Ue({}),{c(){d=r("meta"),W=f(),p=r("h1"),v=r("a"),X=r("span"),ze(L.$$.fragment),te=f(),$=r("span"),re=i("XLSR-Wav2Vec2"),B=f(),m=r("h2"),w=r("a"),O=r("span"),ze(E.$$.fragment),oe=f(),P=r("span"),se=i("Overview"),M=f(),g=r("p"),ne=i("The XLSR-Wav2Vec2 model was proposed in "),S=r("a"),ie=i("Unsupervised Cross-Lingual Representation Learning For Speech Recognition"),le=i(` by Alexis Conneau, Alexei Baevski, Ronan Collobert, Abdelrahman Mohamed, Michael
Auli.`),N=f(),k=r("p"),ce=i("The abstract from the paper is the following:"),I=f(),T=r("p"),q=r("em"),he=i(`This paper presents XLSR which learns cross-lingual speech representations by pretraining a single model from the raw
waveform of speech in multiple languages. We build on wav2vec 2.0 which is trained by solving a contrastive task over
masked latent speech representations and jointly learns a quantization of the latents shared across languages. The
resulting model is fine-tuned on labeled data and experiments show that cross-lingual pretraining significantly
outperforms monolingual pretraining. On the CommonVoice benchmark, XLSR shows a relative phoneme error rate reduction
of 72% compared to the best known results. On BABEL, our approach improves word error rate by 16% relative compared to
a comparable system. Our approach enables a single multilingual speech recognition model which is competitive to strong
individual models. Analysis shows that the latent discrete speech representations are shared across languages with
increased sharing for related languages. We hope to catalyze research in low-resource speech understanding by releasing
XLSR-53, a large model pretrained in 53 languages.`),F=f(),C=r("p"),pe=i("Tips:"),U=f(),_=r("ul"),z=r("li"),fe=i("XLSR-Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),ue=f(),A=r("li"),ve=i(`XLSR-Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be
decoded using `),V=r("a"),de=i("Wav2Vec2CTCTokenizer"),me=i("."),j=f(),b=r("p"),we=i("XLSR-Wav2Vec2\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),x=r("a"),ge=i("Wav2Vec2\u2019s documentation page"),_e=i("."),H=f(),y=r("p"),be=i("The original code can be found "),R=r("a"),ye=i("here"),Le=i("."),this.h()},l(e){const n=De('[data-svelte="svelte-1phssyn"]',document.head);d=o(n,"META",{name:!0,content:!0}),n.forEach(a),W=u(e),p=o(e,"H1",{class:!0});var D=s(p);v=o(D,"A",{id:!0,class:!0,href:!0});var Ee=s(v);X=o(Ee,"SPAN",{});var Se=s(X);Be(L.$$.fragment,Se),Se.forEach(a),Ee.forEach(a),te=u(D),$=o(D,"SPAN",{});var Ae=s($);re=l(Ae,"XLSR-Wav2Vec2"),Ae.forEach(a),D.forEach(a),B=u(e),m=o(e,"H2",{class:!0});var G=s(m);w=o(G,"A",{id:!0,class:!0,href:!0});var Re=s(w);O=o(Re,"SPAN",{});var We=s(O);Be(E.$$.fragment,We),We.forEach(a),Re.forEach(a),oe=u(G),P=o(G,"SPAN",{});var ke=s(P);se=l(ke,"Overview"),ke.forEach(a),G.forEach(a),M=u(e),g=o(e,"P",{});var K=s(g);ne=l(K,"The XLSR-Wav2Vec2 model was proposed in "),S=o(K,"A",{href:!0,rel:!0});var Te=s(S);ie=l(Te,"Unsupervised Cross-Lingual Representation Learning For Speech Recognition"),Te.forEach(a),le=l(K,` by Alexis Conneau, Alexei Baevski, Ronan Collobert, Abdelrahman Mohamed, Michael
Auli.`),K.forEach(a),N=u(e),k=o(e,"P",{});var Ce=s(k);ce=l(Ce,"The abstract from the paper is the following:"),Ce.forEach(a),I=u(e),T=o(e,"P",{});var Ve=s(T);q=o(Ve,"EM",{});var xe=s(q);he=l(xe,`This paper presents XLSR which learns cross-lingual speech representations by pretraining a single model from the raw
waveform of speech in multiple languages. We build on wav2vec 2.0 which is trained by solving a contrastive task over
masked latent speech representations and jointly learns a quantization of the latents shared across languages. The
resulting model is fine-tuned on labeled data and experiments show that cross-lingual pretraining significantly
outperforms monolingual pretraining. On the CommonVoice benchmark, XLSR shows a relative phoneme error rate reduction
of 72% compared to the best known results. On BABEL, our approach improves word error rate by 16% relative compared to
a comparable system. Our approach enables a single multilingual speech recognition model which is competitive to strong
individual models. Analysis shows that the latent discrete speech representations are shared across languages with
increased sharing for related languages. We hope to catalyze research in low-resource speech understanding by releasing
XLSR-53, a large model pretrained in 53 languages.`),xe.forEach(a),Ve.forEach(a),F=u(e),C=o(e,"P",{});var Xe=s(C);pe=l(Xe,"Tips:"),Xe.forEach(a),U=u(e),_=o(e,"UL",{});var Q=s(_);z=o(Q,"LI",{});var $e=s(z);fe=l($e,"XLSR-Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),$e.forEach(a),ue=u(Q),A=o(Q,"LI",{});var Y=s(A);ve=l(Y,`XLSR-Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be
decoded using `),V=o(Y,"A",{href:!0});var Oe=s(V);de=l(Oe,"Wav2Vec2CTCTokenizer"),Oe.forEach(a),me=l(Y,"."),Y.forEach(a),Q.forEach(a),j=u(e),b=o(e,"P",{});var Z=s(b);we=l(Z,"XLSR-Wav2Vec2\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),x=o(Z,"A",{href:!0});var Pe=s(x);ge=l(Pe,"Wav2Vec2\u2019s documentation page"),Pe.forEach(a),_e=l(Z,"."),Z.forEach(a),H=u(e),y=o(e,"P",{});var ee=s(y);be=l(ee,"The original code can be found "),R=o(ee,"A",{href:!0,rel:!0});var qe=s(R);ye=l(qe,"here"),qe.forEach(a),Le=l(ee,"."),ee.forEach(a),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Qe)),h(v,"id","xlsrwav2vec2"),h(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(v,"href","#xlsrwav2vec2"),h(p,"class","relative group"),h(w,"id","overview"),h(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(w,"href","#overview"),h(m,"class","relative group"),h(S,"href","https://arxiv.org/abs/2006.13979"),h(S,"rel","nofollow"),h(V,"href","/docs/transformers/pr_15972/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),h(x,"href","wav2vec2"),h(R,"href","https://github.com/pytorch/fairseq/tree/master/fairseq/models/wav2vec"),h(R,"rel","nofollow")},m(e,n){t(document.head,d),c(e,W,n),c(e,p,n),t(p,v),t(v,X),Me(L,X,null),t(p,te),t(p,$),t($,re),c(e,B,n),c(e,m,n),t(m,w),t(w,O),Me(E,O,null),t(m,oe),t(m,P),t(P,se),c(e,M,n),c(e,g,n),t(g,ne),t(g,S),t(S,ie),t(g,le),c(e,N,n),c(e,k,n),t(k,ce),c(e,I,n),c(e,T,n),t(T,q),t(q,he),c(e,F,n),c(e,C,n),t(C,pe),c(e,U,n),c(e,_,n),t(_,z),t(z,fe),t(_,ue),t(_,A),t(A,ve),t(A,V),t(V,de),t(A,me),c(e,j,n),c(e,b,n),t(b,we),t(b,x),t(x,ge),t(b,_e),c(e,H,n),c(e,y,n),t(y,be),t(y,R),t(R,ye),t(y,Le),J=!0},p:Ge,i(e){J||(Ne(L.$$.fragment,e),Ne(E.$$.fragment,e),J=!0)},o(e){Ie(L.$$.fragment,e),Ie(E.$$.fragment,e),J=!1},d(e){a(d),e&&a(W),e&&a(p),Fe(L),e&&a(B),e&&a(m),Fe(E),e&&a(M),e&&a(g),e&&a(N),e&&a(k),e&&a(I),e&&a(T),e&&a(F),e&&a(C),e&&a(U),e&&a(_),e&&a(j),e&&a(b),e&&a(H),e&&a(y)}}}const Qe={local:"xlsrwav2vec2",sections:[{local:"overview",title:"Overview"}],title:"XLSR-Wav2Vec2"};function Ye(ae,d,W){let{fw:p}=d;return ae.$$set=v=>{"fw"in v&&W(0,p=v.fw)},[p]}class aa extends je{constructor(d){super();He(this,d,Ye,Ke,Je,{fw:0})}}export{aa as default,Qe as metadata};
