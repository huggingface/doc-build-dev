import{S as Re,i as Oe,s as Qe,e as n,k as u,w as ne,t as h,M as Fe,c as r,d as a,m as c,a as i,x as re,h as p,b as s,F as t,g as l,y as ie,L as je,q as oe,o as se,B as le,v as Ke}from"../../chunks/vendor-6b77c823.js";import{D as Ue}from"../../chunks/Docstring-abef54e3.js";import{I as Te}from"../../chunks/IconCopyLink-7a11ce68.js";function Ve(Ee){let f,D,m,P,A,_,he,S,pe,W,g,C,H,k,ue,N,ce,X,y,fe,M,me,ge,B,z,de,R,G,Z,ve,O,d,we,$,Pe,Ce,T,ye,Q,x,be,F,v,b,J,E,_e,I,ke,j,w,L,Me,Y,$e,K;return _=new Te({}),k=new Te({}),E=new Te({}),L=new Ue({props:{name:"class transformers.CpmTokenizer",anchor:"transformers.CpmTokenizer",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/pr_33/src/transformers/models/cpm/tokenization_cpm.py#L31"}}),{c(){f=n("meta"),D=u(),m=n("h1"),P=n("a"),A=n("span"),ne(_.$$.fragment),he=u(),S=n("span"),pe=h("CPM"),W=u(),g=n("h2"),C=n("a"),H=n("span"),ne(k.$$.fragment),ue=u(),N=n("span"),ce=h("Overview"),X=u(),y=n("p"),fe=h("The CPM model was proposed in "),M=n("a"),me=h("CPM: A Large-scale Generative Chinese Pre-trained Language Model"),ge=h(` by Zhengyan Zhang, Xu Han, Hao Zhou, Pei Ke, Yuxian Gu, Deming Ye, Yujia Qin,
Yusheng Su, Haozhe Ji, Jian Guan, Fanchao Qi, Xiaozhi Wang, Yanan Zheng, Guoyang Zeng, Huanqi Cao, Shengqi Chen,
Daixuan Li, Zhenbo Sun, Zhiyuan Liu, Minlie Huang, Wentao Han, Jie Tang, Juanzi Li, Xiaoyan Zhu, Maosong Sun.`),B=u(),z=n("p"),de=h("The abstract from the paper is the following:"),R=u(),G=n("p"),Z=n("em"),ve=h(`Pre-trained Language Models (PLMs) have proven to be beneficial for various downstream NLP tasks. Recently, GPT-3,
with 175 billion parameters and 570GB training data, drew a lot of attention due to the capacity of few-shot (even
zero-shot) learning. However, applying GPT-3 to address Chinese NLP tasks is still challenging, as the training corpus
of GPT-3 is primarily English, and the parameters are not publicly available. In this technical report, we release the
Chinese Pre-trained Language Model (CPM) with generative pre-training on large-scale Chinese training data. To the best
of our knowledge, CPM, with 2.6 billion parameters and 100GB Chinese training data, is the largest Chinese pre-trained
language model, which could facilitate several downstream Chinese NLP tasks, such as conversation, essay generation,
cloze test, and language understanding. Extensive experiments demonstrate that CPM achieves strong performance on many
NLP tasks in the settings of few-shot (even zero-shot) learning.`),O=u(),d=n("p"),we=h("This model was contributed by "),$=n("a"),Pe=h("canwenxu"),Ce=h(`. The original implementation can be found
here: `),T=n("a"),ye=h("https://github.com/TsinghuaAI/CPM-Generate"),Q=u(),x=n("p"),be=h("Note: We only have a tokenizer here, since the model architecture is the same as GPT-2."),F=u(),v=n("h2"),b=n("a"),J=n("span"),ne(E.$$.fragment),_e=u(),I=n("span"),ke=h("CpmTokenizer"),j=u(),w=n("div"),ne(L.$$.fragment),Me=u(),Y=n("p"),$e=h("Runs pre-tokenization with Jieba segmentation tool. It is used in CPM models."),this.h()},l(e){const o=Fe('[data-svelte="svelte-1phssyn"]',document.head);f=r(o,"META",{name:!0,content:!0}),o.forEach(a),D=c(e),m=r(e,"H1",{class:!0});var U=i(m);P=r(U,"A",{id:!0,class:!0,href:!0});var Le=i(P);A=r(Le,"SPAN",{});var ze=i(A);re(_.$$.fragment,ze),ze.forEach(a),Le.forEach(a),he=c(U),S=r(U,"SPAN",{});var Ge=i(S);pe=p(Ge,"CPM"),Ge.forEach(a),U.forEach(a),W=c(e),g=r(e,"H2",{class:!0});var V=i(g);C=r(V,"A",{id:!0,class:!0,href:!0});var xe=i(C);H=r(xe,"SPAN",{});var Ae=i(H);re(k.$$.fragment,Ae),Ae.forEach(a),xe.forEach(a),ue=c(V),N=r(V,"SPAN",{});var Se=i(N);ce=p(Se,"Overview"),Se.forEach(a),V.forEach(a),X=c(e),y=r(e,"P",{});var ee=i(y);fe=p(ee,"The CPM model was proposed in "),M=r(ee,"A",{href:!0,rel:!0});var He=i(M);me=p(He,"CPM: A Large-scale Generative Chinese Pre-trained Language Model"),He.forEach(a),ge=p(ee,` by Zhengyan Zhang, Xu Han, Hao Zhou, Pei Ke, Yuxian Gu, Deming Ye, Yujia Qin,
Yusheng Su, Haozhe Ji, Jian Guan, Fanchao Qi, Xiaozhi Wang, Yanan Zheng, Guoyang Zeng, Huanqi Cao, Shengqi Chen,
Daixuan Li, Zhenbo Sun, Zhiyuan Liu, Minlie Huang, Wentao Han, Jie Tang, Juanzi Li, Xiaoyan Zhu, Maosong Sun.`),ee.forEach(a),B=c(e),z=r(e,"P",{});var Ne=i(z);de=p(Ne,"The abstract from the paper is the following:"),Ne.forEach(a),R=c(e),G=r(e,"P",{});var Ze=i(G);Z=r(Ze,"EM",{});var Je=i(Z);ve=p(Je,`Pre-trained Language Models (PLMs) have proven to be beneficial for various downstream NLP tasks. Recently, GPT-3,
with 175 billion parameters and 570GB training data, drew a lot of attention due to the capacity of few-shot (even
zero-shot) learning. However, applying GPT-3 to address Chinese NLP tasks is still challenging, as the training corpus
of GPT-3 is primarily English, and the parameters are not publicly available. In this technical report, we release the
Chinese Pre-trained Language Model (CPM) with generative pre-training on large-scale Chinese training data. To the best
of our knowledge, CPM, with 2.6 billion parameters and 100GB Chinese training data, is the largest Chinese pre-trained
language model, which could facilitate several downstream Chinese NLP tasks, such as conversation, essay generation,
cloze test, and language understanding. Extensive experiments demonstrate that CPM achieves strong performance on many
NLP tasks in the settings of few-shot (even zero-shot) learning.`),Je.forEach(a),Ze.forEach(a),O=c(e),d=r(e,"P",{});var q=i(d);we=p(q,"This model was contributed by "),$=r(q,"A",{href:!0,rel:!0});var Ie=i($);Pe=p(Ie,"canwenxu"),Ie.forEach(a),Ce=p(q,`. The original implementation can be found
here: `),T=r(q,"A",{href:!0,rel:!0});var Ye=i(T);ye=p(Ye,"https://github.com/TsinghuaAI/CPM-Generate"),Ye.forEach(a),q.forEach(a),Q=c(e),x=r(e,"P",{});var qe=i(x);be=p(qe,"Note: We only have a tokenizer here, since the model architecture is the same as GPT-2."),qe.forEach(a),F=c(e),v=r(e,"H2",{class:!0});var ae=i(v);b=r(ae,"A",{id:!0,class:!0,href:!0});var De=i(b);J=r(De,"SPAN",{});var We=i(J);re(E.$$.fragment,We),We.forEach(a),De.forEach(a),_e=c(ae),I=r(ae,"SPAN",{});var Xe=i(I);ke=p(Xe,"CpmTokenizer"),Xe.forEach(a),ae.forEach(a),j=c(e),w=r(e,"DIV",{class:!0});var te=i(w);re(L.$$.fragment,te),Me=c(te),Y=r(te,"P",{});var Be=i(Y);$e=p(Be,"Runs pre-tokenization with Jieba segmentation tool. It is used in CPM models."),Be.forEach(a),te.forEach(a),this.h()},h(){s(f,"name","hf:doc:metadata"),s(f,"content",JSON.stringify(ea)),s(P,"id","cpm"),s(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(P,"href","#cpm"),s(m,"class","relative group"),s(C,"id","overview"),s(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(C,"href","#overview"),s(g,"class","relative group"),s(M,"href","https://arxiv.org/abs/2012.00413"),s(M,"rel","nofollow"),s($,"href","https://huggingface.co/canwenxu"),s($,"rel","nofollow"),s(T,"href","https://github.com/TsinghuaAI/CPM-Generate"),s(T,"rel","nofollow"),s(b,"id","transformers.CpmTokenizer"),s(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(b,"href","#transformers.CpmTokenizer"),s(v,"class","relative group"),s(w,"class","docstring")},m(e,o){t(document.head,f),l(e,D,o),l(e,m,o),t(m,P),t(P,A),ie(_,A,null),t(m,he),t(m,S),t(S,pe),l(e,W,o),l(e,g,o),t(g,C),t(C,H),ie(k,H,null),t(g,ue),t(g,N),t(N,ce),l(e,X,o),l(e,y,o),t(y,fe),t(y,M),t(M,me),t(y,ge),l(e,B,o),l(e,z,o),t(z,de),l(e,R,o),l(e,G,o),t(G,Z),t(Z,ve),l(e,O,o),l(e,d,o),t(d,we),t(d,$),t($,Pe),t(d,Ce),t(d,T),t(T,ye),l(e,Q,o),l(e,x,o),t(x,be),l(e,F,o),l(e,v,o),t(v,b),t(b,J),ie(E,J,null),t(v,_e),t(v,I),t(I,ke),l(e,j,o),l(e,w,o),ie(L,w,null),t(w,Me),t(w,Y),t(Y,$e),K=!0},p:je,i(e){K||(oe(_.$$.fragment,e),oe(k.$$.fragment,e),oe(E.$$.fragment,e),oe(L.$$.fragment,e),K=!0)},o(e){se(_.$$.fragment,e),se(k.$$.fragment,e),se(E.$$.fragment,e),se(L.$$.fragment,e),K=!1},d(e){a(f),e&&a(D),e&&a(m),le(_),e&&a(W),e&&a(g),le(k),e&&a(X),e&&a(y),e&&a(B),e&&a(z),e&&a(R),e&&a(G),e&&a(O),e&&a(d),e&&a(Q),e&&a(x),e&&a(F),e&&a(v),le(E),e&&a(j),e&&a(w),le(L)}}}const ea={local:"cpm",sections:[{local:"overview",title:"Overview"},{local:"transformers.CpmTokenizer",title:"CpmTokenizer"}],title:"CPM"};function aa(Ee){return Ke(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ia extends Re{constructor(f){super();Oe(this,f,aa,Ve,Qe,{})}}export{ia as default,ea as metadata};
