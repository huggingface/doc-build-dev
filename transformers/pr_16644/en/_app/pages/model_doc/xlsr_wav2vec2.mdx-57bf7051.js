import{S as je,i as He,s as Je,e as r,k as p,w as qe,t as i,M as De,c as o,d as a,m as u,a as s,x as ze,h as l,b as h,F as t,g as c,y as Be,L as Ge,q as Ne,o as Ie,B as Ue,v as Ke}from"../../chunks/vendor-6b77c823.js";import{I as Fe}from"../../chunks/IconCopyLink-7a11ce68.js";function Qe(Le){let f,q,m,d,x,L,ae,X,te,z,v,w,$,E,re,P,oe,B,g,se,S,ne,ie,N,W,le,I,k,O,ce,U,T,he,F,_,M,pe,ue,R,fe,C,me,ve,j,b,de,V,we,ge,H,y,_e,A,be,ye,J;return L=new Fe({}),E=new Fe({}),{c(){f=r("meta"),q=p(),m=r("h1"),d=r("a"),x=r("span"),qe(L.$$.fragment),ae=p(),X=r("span"),te=i("XLSR-Wav2Vec2"),z=p(),v=r("h2"),w=r("a"),$=r("span"),qe(E.$$.fragment),re=p(),P=r("span"),oe=i("Overview"),B=p(),g=r("p"),se=i("The XLSR-Wav2Vec2 model was proposed in "),S=r("a"),ne=i("Unsupervised Cross-Lingual Representation Learning For Speech Recognition"),ie=i(` by Alexis Conneau, Alexei Baevski, Ronan Collobert, Abdelrahman Mohamed, Michael
Auli.`),N=p(),W=r("p"),le=i("The abstract from the paper is the following:"),I=p(),k=r("p"),O=r("em"),ce=i(`This paper presents XLSR which learns cross-lingual speech representations by pretraining a single model from the raw
waveform of speech in multiple languages. We build on wav2vec 2.0 which is trained by solving a contrastive task over
masked latent speech representations and jointly learns a quantization of the latents shared across languages. The
resulting model is fine-tuned on labeled data and experiments show that cross-lingual pretraining significantly
outperforms monolingual pretraining. On the CommonVoice benchmark, XLSR shows a relative phoneme error rate reduction
of 72% compared to the best known results. On BABEL, our approach improves word error rate by 16% relative compared to
a comparable system. Our approach enables a single multilingual speech recognition model which is competitive to strong
individual models. Analysis shows that the latent discrete speech representations are shared across languages with
increased sharing for related languages. We hope to catalyze research in low-resource speech understanding by releasing
XLSR-53, a large model pretrained in 53 languages.`),U=p(),T=r("p"),he=i("Tips:"),F=p(),_=r("ul"),M=r("li"),pe=i("XLSR-Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),ue=p(),R=r("li"),fe=i(`XLSR-Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be
decoded using `),C=r("a"),me=i("Wav2Vec2CTCTokenizer"),ve=i("."),j=p(),b=r("p"),de=i("XLSR-Wav2Vec2\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),V=r("a"),we=i("Wav2Vec2\u2019s documentation page"),ge=i("."),H=p(),y=r("p"),_e=i("The original code can be found "),A=r("a"),be=i("here"),ye=i("."),this.h()},l(e){const n=De('[data-svelte="svelte-1phssyn"]',document.head);f=o(n,"META",{name:!0,content:!0}),n.forEach(a),q=u(e),m=o(e,"H1",{class:!0});var D=s(m);d=o(D,"A",{id:!0,class:!0,href:!0});var Ee=s(d);x=o(Ee,"SPAN",{});var Se=s(x);ze(L.$$.fragment,Se),Se.forEach(a),Ee.forEach(a),ae=u(D),X=o(D,"SPAN",{});var Re=s(X);te=l(Re,"XLSR-Wav2Vec2"),Re.forEach(a),D.forEach(a),z=u(e),v=o(e,"H2",{class:!0});var G=s(v);w=o(G,"A",{id:!0,class:!0,href:!0});var Ae=s(w);$=o(Ae,"SPAN",{});var We=s($);ze(E.$$.fragment,We),We.forEach(a),Ae.forEach(a),re=u(G),P=o(G,"SPAN",{});var ke=s(P);oe=l(ke,"Overview"),ke.forEach(a),G.forEach(a),B=u(e),g=o(e,"P",{});var K=s(g);se=l(K,"The XLSR-Wav2Vec2 model was proposed in "),S=o(K,"A",{href:!0,rel:!0});var Te=s(S);ne=l(Te,"Unsupervised Cross-Lingual Representation Learning For Speech Recognition"),Te.forEach(a),ie=l(K,` by Alexis Conneau, Alexei Baevski, Ronan Collobert, Abdelrahman Mohamed, Michael
Auli.`),K.forEach(a),N=u(e),W=o(e,"P",{});var Ce=s(W);le=l(Ce,"The abstract from the paper is the following:"),Ce.forEach(a),I=u(e),k=o(e,"P",{});var Ve=s(k);O=o(Ve,"EM",{});var xe=s(O);ce=l(xe,`This paper presents XLSR which learns cross-lingual speech representations by pretraining a single model from the raw
waveform of speech in multiple languages. We build on wav2vec 2.0 which is trained by solving a contrastive task over
masked latent speech representations and jointly learns a quantization of the latents shared across languages. The
resulting model is fine-tuned on labeled data and experiments show that cross-lingual pretraining significantly
outperforms monolingual pretraining. On the CommonVoice benchmark, XLSR shows a relative phoneme error rate reduction
of 72% compared to the best known results. On BABEL, our approach improves word error rate by 16% relative compared to
a comparable system. Our approach enables a single multilingual speech recognition model which is competitive to strong
individual models. Analysis shows that the latent discrete speech representations are shared across languages with
increased sharing for related languages. We hope to catalyze research in low-resource speech understanding by releasing
XLSR-53, a large model pretrained in 53 languages.`),xe.forEach(a),Ve.forEach(a),U=u(e),T=o(e,"P",{});var Xe=s(T);he=l(Xe,"Tips:"),Xe.forEach(a),F=u(e),_=o(e,"UL",{});var Q=s(_);M=o(Q,"LI",{});var $e=s(M);pe=l($e,"XLSR-Wav2Vec2 is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),$e.forEach(a),ue=u(Q),R=o(Q,"LI",{});var Y=s(R);fe=l(Y,`XLSR-Wav2Vec2 model was trained using connectionist temporal classification (CTC) so the model output has to be
decoded using `),C=o(Y,"A",{href:!0});var Pe=s(C);me=l(Pe,"Wav2Vec2CTCTokenizer"),Pe.forEach(a),ve=l(Y,"."),Y.forEach(a),Q.forEach(a),j=u(e),b=o(e,"P",{});var Z=s(b);de=l(Z,"XLSR-Wav2Vec2\u2019s architecture is based on the Wav2Vec2 model, so one can refer to "),V=o(Z,"A",{href:!0});var Oe=s(V);we=l(Oe,"Wav2Vec2\u2019s documentation page"),Oe.forEach(a),ge=l(Z,"."),Z.forEach(a),H=u(e),y=o(e,"P",{});var ee=s(y);_e=l(ee,"The original code can be found "),A=o(ee,"A",{href:!0,rel:!0});var Me=s(A);be=l(Me,"here"),Me.forEach(a),ye=l(ee,"."),ee.forEach(a),this.h()},h(){h(f,"name","hf:doc:metadata"),h(f,"content",JSON.stringify(Ye)),h(d,"id","xlsrwav2vec2"),h(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(d,"href","#xlsrwav2vec2"),h(m,"class","relative group"),h(w,"id","overview"),h(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(w,"href","#overview"),h(v,"class","relative group"),h(S,"href","https://arxiv.org/abs/2006.13979"),h(S,"rel","nofollow"),h(C,"href","/docs/transformers/pr_16644/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),h(V,"href","wav2vec2"),h(A,"href","https://github.com/pytorch/fairseq/tree/master/fairseq/models/wav2vec"),h(A,"rel","nofollow")},m(e,n){t(document.head,f),c(e,q,n),c(e,m,n),t(m,d),t(d,x),Be(L,x,null),t(m,ae),t(m,X),t(X,te),c(e,z,n),c(e,v,n),t(v,w),t(w,$),Be(E,$,null),t(v,re),t(v,P),t(P,oe),c(e,B,n),c(e,g,n),t(g,se),t(g,S),t(S,ne),t(g,ie),c(e,N,n),c(e,W,n),t(W,le),c(e,I,n),c(e,k,n),t(k,O),t(O,ce),c(e,U,n),c(e,T,n),t(T,he),c(e,F,n),c(e,_,n),t(_,M),t(M,pe),t(_,ue),t(_,R),t(R,fe),t(R,C),t(C,me),t(R,ve),c(e,j,n),c(e,b,n),t(b,de),t(b,V),t(V,we),t(b,ge),c(e,H,n),c(e,y,n),t(y,_e),t(y,A),t(A,be),t(y,ye),J=!0},p:Ge,i(e){J||(Ne(L.$$.fragment,e),Ne(E.$$.fragment,e),J=!0)},o(e){Ie(L.$$.fragment,e),Ie(E.$$.fragment,e),J=!1},d(e){a(f),e&&a(q),e&&a(m),Ue(L),e&&a(z),e&&a(v),Ue(E),e&&a(B),e&&a(g),e&&a(N),e&&a(W),e&&a(I),e&&a(k),e&&a(U),e&&a(T),e&&a(F),e&&a(_),e&&a(j),e&&a(b),e&&a(H),e&&a(y)}}}const Ye={local:"xlsrwav2vec2",sections:[{local:"overview",title:"Overview"}],title:"XLSR-Wav2Vec2"};function Ze(Le){return Ke(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ta extends je{constructor(f){super();He(this,f,Ze,Qe,Je,{})}}export{ta as default,Ye as metadata};
