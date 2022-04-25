import{S as Va,i as Xa,s as Za,e as a,k as i,w as Wa,t as l,M as er,c as r,d as t,m as d,a as s,x as Da,h as n,b as h,F as e,g as f,y as Ra,L as tr,q as Ga,o as Ya,B as Ja,v as or}from"../chunks/vendor-6b77c823.js";import{I as Qa}from"../chunks/IconCopyLink-7a11ce68.js";function ar(Qo){let _,De,b,L,ue,O,vt,pe,gt,Re,Q,yt,Ge,g,me,wt,_t,ve,bt,Et,ge,kt,Ye,V,Pt,Je,T,B,ye,Lt,Tt,p,m,It,X,At,zt,Z,Mt,xt,ee,$t,St,Nt,E,qt,we,Ot,Bt,C,Ct,Ut,Ft,v,jt,te,Ht,Kt,oe,Wt,Dt,_e,Rt,Gt,Yt,be,Jt,Qt,U,Ee,Vt,Xt,F,ke,Zt,eo,j,to,Pe,oo,ao,Qe,ae,ro,Ve,y,H,Le,so,lo,K,Te,no,io,Ie,co,ho,W,Ae,fo,uo,D,ze,po,mo,Me,vo,go,xe,$e,yo,Xe,k,I,Se,R,wo,Ne,_o,Ze,re,bo,et,w,u,qe,Eo,ko,se,Po,Lo,G,To,Io,Y,Ao,zo,Mo,A,Oe,xo,$o,le,So,No,qo,z,Be,Oo,Bo,ne,Co,Uo,tt,ie,Fo,ot,M,x,Ce,jo,Ho,J,Ko,Wo,Do,$,Ue,Ro,Go,Fe,Yo,Jo,at;return O=new Qa({}),R=new Qa({}),{c(){_=a("meta"),De=i(),b=a("h1"),L=a("a"),ue=a("span"),Wa(O.$$.fragment),vt=i(),pe=a("span"),gt=l("Philosophy"),Re=i(),Q=a("p"),yt=l("\u{1F917} Transformers is an opinionated library built for:"),Ge=i(),g=a("ul"),me=a("li"),wt=l("NLP researchers and educators seeking to use/study/extend large-scale transformers models"),_t=i(),ve=a("li"),bt=l("hands-on practitioners who want to fine-tune those models and/or serve them in production"),Et=i(),ge=a("li"),kt=l("engineers who just want to download a pretrained model and use it to solve a given NLP task."),Ye=i(),V=a("p"),Pt=l("The library was designed with two strong goals in mind:"),Je=i(),T=a("ul"),B=a("li"),ye=a("p"),Lt=l("Be as easy and fast to use as possible:"),Tt=i(),p=a("ul"),m=a("li"),It=l(`We strongly limited the number of user-facing abstractions to learn, in fact, there are almost no abstractions,
just three standard classes required to use each model: `),X=a("a"),At=l("configuration"),zt=l(`,
`),Z=a("a"),Mt=l("models"),xt=l(" and "),ee=a("a"),$t=l("tokenizer"),St=l("."),Nt=i(),E=a("li"),qt=l(`All of these classes can be initialized in a simple and unified way from pretrained instances by using a common
`),we=a("code"),Ot=l("from_pretrained()"),Bt=l(` instantiation method which will take care of downloading (if needed), caching and
loading the related class instance and associated data (configurations\u2019 hyper-parameters, tokenizers\u2019 vocabulary,
and models\u2019 weights) from a pretrained checkpoint provided on `),C=a("a"),Ct=l("Hugging Face Hub"),Ut=l(" or your own saved checkpoint."),Ft=i(),v=a("li"),jt=l("On top of those three base classes, the library provides two APIs: "),te=a("a"),Ht=l("pipeline()"),Kt=l(` for quickly
using a model (plus its associated tokenizer and configuration) on a given task and
`),oe=a("a"),Wt=l("Trainer"),Dt=l("/"),_e=a("code"),Rt=l("Keras.fit"),Gt=l(" to quickly train or fine-tune a given model."),Yt=i(),be=a("li"),Jt=l(`As a consequence, this library is NOT a modular toolbox of building blocks for neural nets. If you want to
extend/build-upon the library, just use regular Python/PyTorch/TensorFlow/Keras modules and inherit from the base
classes of the library to reuse functionalities like model loading/saving.`),Qt=i(),U=a("li"),Ee=a("p"),Vt=l("Provide state-of-the-art models with performances as close as possible to the original models:"),Xt=i(),F=a("ul"),ke=a("li"),Zt=l(`We provide at least one example for each architecture which reproduces a result provided by the official authors
of said architecture.`),eo=i(),j=a("li"),to=l(`The code is usually as close to the original code base as possible which means some PyTorch code may be not as
`),Pe=a("em"),oo=l("pytorchic"),ao=l(" as it could be as a result of being converted TensorFlow code and vice versa."),Qe=i(),ae=a("p"),ro=l("A few other goals:"),Ve=i(),y=a("ul"),H=a("li"),Le=a("p"),so=l("Expose the models\u2019 internals as consistently as possible:"),lo=i(),K=a("ul"),Te=a("li"),no=l("We give access, using a single API, to the full hidden-states and attention weights."),io=i(),Ie=a("li"),co=l("Tokenizer and base model\u2019s API are standardized to easily switch between models."),ho=i(),W=a("li"),Ae=a("p"),fo=l("Incorporate a subjective selection of promising tools for fine-tuning/investigating these models:"),uo=i(),D=a("ul"),ze=a("li"),po=l("A simple/consistent way to add new tokens to the vocabulary and embeddings for fine-tuning."),mo=i(),Me=a("li"),vo=l("Simple ways to mask and prune transformer heads."),go=i(),xe=a("li"),$e=a("p"),yo=l("Switch easily between PyTorch and TensorFlow 2.0, allowing training using one framework and inference using another."),Xe=i(),k=a("h2"),I=a("a"),Se=a("span"),Wa(R.$$.fragment),wo=i(),Ne=a("span"),_o=l("Main concepts"),Ze=i(),re=a("p"),bo=l("The library is built around three types of classes for each model:"),et=i(),w=a("ul"),u=a("li"),qe=a("strong"),Eo=l("Model classes"),ko=l(" such as "),se=a("a"),Po=l("BertModel"),Lo=l(", which are 30+ PyTorch models ("),G=a("a"),To=l("torch.nn.Module"),Io=l(") or Keras models ("),Y=a("a"),Ao=l("tf.keras.Model"),zo=l(`) that work with the pretrained weights provided in the
library.`),Mo=i(),A=a("li"),Oe=a("strong"),xo=l("Configuration classes"),$o=l(" such as "),le=a("a"),So=l("BertConfig"),No=l(`, which store all the parameters required to build
a model. You don\u2019t always need to instantiate these yourself. In particular, if you are using a pretrained model
without any modification, creating the model will automatically take care of instantiating the configuration (which
is part of the model).`),qo=i(),z=a("li"),Be=a("strong"),Oo=l("Tokenizer classes"),Bo=l(" such as "),ne=a("a"),Co=l("BertTokenizer"),Uo=l(`, which store the vocabulary for each model and
provide methods for encoding/decoding strings in a list of token embeddings indices to be fed to a model.`),tt=i(),ie=a("p"),Fo=l("All these classes can be instantiated from pretrained instances and saved locally using two methods:"),ot=i(),M=a("ul"),x=a("li"),Ce=a("code"),jo=l("from_pretrained()"),Ho=l(` lets you instantiate a model/configuration/tokenizer from a pretrained version either
provided by the library itself (the supported models can be found on the `),J=a("a"),Ko=l("Model Hub"),Wo=l(`) or
stored locally (or on a server) by the user,`),Do=i(),$=a("li"),Ue=a("code"),Ro=l("save_pretrained()"),Go=l(` lets you save a model/configuration/tokenizer locally so that it can be reloaded using
`),Fe=a("code"),Yo=l("from_pretrained()"),Jo=l("."),this.h()},l(o){const c=er('[data-svelte="svelte-1phssyn"]',document.head);_=r(c,"META",{name:!0,content:!0}),c.forEach(t),De=d(o),b=r(o,"H1",{class:!0});var rt=s(b);L=r(rt,"A",{id:!0,class:!0,href:!0});var Vo=s(L);ue=r(Vo,"SPAN",{});var Xo=s(ue);Da(O.$$.fragment,Xo),Xo.forEach(t),Vo.forEach(t),vt=d(rt),pe=r(rt,"SPAN",{});var Zo=s(pe);gt=n(Zo,"Philosophy"),Zo.forEach(t),rt.forEach(t),Re=d(o),Q=r(o,"P",{});var ea=s(Q);yt=n(ea,"\u{1F917} Transformers is an opinionated library built for:"),ea.forEach(t),Ge=d(o),g=r(o,"UL",{});var de=s(g);me=r(de,"LI",{});var ta=s(me);wt=n(ta,"NLP researchers and educators seeking to use/study/extend large-scale transformers models"),ta.forEach(t),_t=d(de),ve=r(de,"LI",{});var oa=s(ve);bt=n(oa,"hands-on practitioners who want to fine-tune those models and/or serve them in production"),oa.forEach(t),Et=d(de),ge=r(de,"LI",{});var aa=s(ge);kt=n(aa,"engineers who just want to download a pretrained model and use it to solve a given NLP task."),aa.forEach(t),de.forEach(t),Ye=d(o),V=r(o,"P",{});var ra=s(V);Pt=n(ra,"The library was designed with two strong goals in mind:"),ra.forEach(t),Je=d(o),T=r(o,"UL",{});var st=s(T);B=r(st,"LI",{});var lt=s(B);ye=r(lt,"P",{});var sa=s(ye);Lt=n(sa,"Be as easy and fast to use as possible:"),sa.forEach(t),Tt=d(lt),p=r(lt,"UL",{});var S=s(p);m=r(S,"LI",{});var N=s(m);It=n(N,`We strongly limited the number of user-facing abstractions to learn, in fact, there are almost no abstractions,
just three standard classes required to use each model: `),X=r(N,"A",{href:!0});var la=s(X);At=n(la,"configuration"),la.forEach(t),zt=n(N,`,
`),Z=r(N,"A",{href:!0});var na=s(Z);Mt=n(na,"models"),na.forEach(t),xt=n(N," and "),ee=r(N,"A",{href:!0});var ia=s(ee);$t=n(ia,"tokenizer"),ia.forEach(t),St=n(N,"."),N.forEach(t),Nt=d(S),E=r(S,"LI",{});var ce=s(E);qt=n(ce,`All of these classes can be initialized in a simple and unified way from pretrained instances by using a common
`),we=r(ce,"CODE",{});var da=s(we);Ot=n(da,"from_pretrained()"),da.forEach(t),Bt=n(ce,` instantiation method which will take care of downloading (if needed), caching and
loading the related class instance and associated data (configurations\u2019 hyper-parameters, tokenizers\u2019 vocabulary,
and models\u2019 weights) from a pretrained checkpoint provided on `),C=r(ce,"A",{href:!0,rel:!0});var ca=s(C);Ct=n(ca,"Hugging Face Hub"),ca.forEach(t),Ut=n(ce," or your own saved checkpoint."),ce.forEach(t),Ft=d(S),v=r(S,"LI",{});var q=s(v);jt=n(q,"On top of those three base classes, the library provides two APIs: "),te=r(q,"A",{href:!0});var ha=s(te);Ht=n(ha,"pipeline()"),ha.forEach(t),Kt=n(q,` for quickly
using a model (plus its associated tokenizer and configuration) on a given task and
`),oe=r(q,"A",{href:!0});var fa=s(oe);Wt=n(fa,"Trainer"),fa.forEach(t),Dt=n(q,"/"),_e=r(q,"CODE",{});var ua=s(_e);Rt=n(ua,"Keras.fit"),ua.forEach(t),Gt=n(q," to quickly train or fine-tune a given model."),q.forEach(t),Yt=d(S),be=r(S,"LI",{});var pa=s(be);Jt=n(pa,`As a consequence, this library is NOT a modular toolbox of building blocks for neural nets. If you want to
extend/build-upon the library, just use regular Python/PyTorch/TensorFlow/Keras modules and inherit from the base
classes of the library to reuse functionalities like model loading/saving.`),pa.forEach(t),S.forEach(t),lt.forEach(t),Qt=d(st),U=r(st,"LI",{});var nt=s(U);Ee=r(nt,"P",{});var ma=s(Ee);Vt=n(ma,"Provide state-of-the-art models with performances as close as possible to the original models:"),ma.forEach(t),Xt=d(nt),F=r(nt,"UL",{});var it=s(F);ke=r(it,"LI",{});var va=s(ke);Zt=n(va,`We provide at least one example for each architecture which reproduces a result provided by the official authors
of said architecture.`),va.forEach(t),eo=d(it),j=r(it,"LI",{});var dt=s(j);to=n(dt,`The code is usually as close to the original code base as possible which means some PyTorch code may be not as
`),Pe=r(dt,"EM",{});var ga=s(Pe);oo=n(ga,"pytorchic"),ga.forEach(t),ao=n(dt," as it could be as a result of being converted TensorFlow code and vice versa."),dt.forEach(t),it.forEach(t),nt.forEach(t),st.forEach(t),Qe=d(o),ae=r(o,"P",{});var ya=s(ae);ro=n(ya,"A few other goals:"),ya.forEach(t),Ve=d(o),y=r(o,"UL",{});var he=s(y);H=r(he,"LI",{});var ct=s(H);Le=r(ct,"P",{});var wa=s(Le);so=n(wa,"Expose the models\u2019 internals as consistently as possible:"),wa.forEach(t),lo=d(ct),K=r(ct,"UL",{});var ht=s(K);Te=r(ht,"LI",{});var _a=s(Te);no=n(_a,"We give access, using a single API, to the full hidden-states and attention weights."),_a.forEach(t),io=d(ht),Ie=r(ht,"LI",{});var ba=s(Ie);co=n(ba,"Tokenizer and base model\u2019s API are standardized to easily switch between models."),ba.forEach(t),ht.forEach(t),ct.forEach(t),ho=d(he),W=r(he,"LI",{});var ft=s(W);Ae=r(ft,"P",{});var Ea=s(Ae);fo=n(Ea,"Incorporate a subjective selection of promising tools for fine-tuning/investigating these models:"),Ea.forEach(t),uo=d(ft),D=r(ft,"UL",{});var ut=s(D);ze=r(ut,"LI",{});var ka=s(ze);po=n(ka,"A simple/consistent way to add new tokens to the vocabulary and embeddings for fine-tuning."),ka.forEach(t),mo=d(ut),Me=r(ut,"LI",{});var Pa=s(Me);vo=n(Pa,"Simple ways to mask and prune transformer heads."),Pa.forEach(t),ut.forEach(t),ft.forEach(t),go=d(he),xe=r(he,"LI",{});var La=s(xe);$e=r(La,"P",{});var Ta=s($e);yo=n(Ta,"Switch easily between PyTorch and TensorFlow 2.0, allowing training using one framework and inference using another."),Ta.forEach(t),La.forEach(t),he.forEach(t),Xe=d(o),k=r(o,"H2",{class:!0});var pt=s(k);I=r(pt,"A",{id:!0,class:!0,href:!0});var Ia=s(I);Se=r(Ia,"SPAN",{});var Aa=s(Se);Da(R.$$.fragment,Aa),Aa.forEach(t),Ia.forEach(t),wo=d(pt),Ne=r(pt,"SPAN",{});var za=s(Ne);_o=n(za,"Main concepts"),za.forEach(t),pt.forEach(t),Ze=d(o),re=r(o,"P",{});var Ma=s(re);bo=n(Ma,"The library is built around three types of classes for each model:"),Ma.forEach(t),et=d(o),w=r(o,"UL",{});var fe=s(w);u=r(fe,"LI",{});var P=s(u);qe=r(P,"STRONG",{});var xa=s(qe);Eo=n(xa,"Model classes"),xa.forEach(t),ko=n(P," such as "),se=r(P,"A",{href:!0});var $a=s(se);Po=n($a,"BertModel"),$a.forEach(t),Lo=n(P,", which are 30+ PyTorch models ("),G=r(P,"A",{href:!0,rel:!0});var Sa=s(G);To=n(Sa,"torch.nn.Module"),Sa.forEach(t),Io=n(P,") or Keras models ("),Y=r(P,"A",{href:!0,rel:!0});var Na=s(Y);Ao=n(Na,"tf.keras.Model"),Na.forEach(t),zo=n(P,`) that work with the pretrained weights provided in the
library.`),P.forEach(t),Mo=d(fe),A=r(fe,"LI",{});var je=s(A);Oe=r(je,"STRONG",{});var qa=s(Oe);xo=n(qa,"Configuration classes"),qa.forEach(t),$o=n(je," such as "),le=r(je,"A",{href:!0});var Oa=s(le);So=n(Oa,"BertConfig"),Oa.forEach(t),No=n(je,`, which store all the parameters required to build
a model. You don\u2019t always need to instantiate these yourself. In particular, if you are using a pretrained model
without any modification, creating the model will automatically take care of instantiating the configuration (which
is part of the model).`),je.forEach(t),qo=d(fe),z=r(fe,"LI",{});var He=s(z);Be=r(He,"STRONG",{});var Ba=s(Be);Oo=n(Ba,"Tokenizer classes"),Ba.forEach(t),Bo=n(He," such as "),ne=r(He,"A",{href:!0});var Ca=s(ne);Co=n(Ca,"BertTokenizer"),Ca.forEach(t),Uo=n(He,`, which store the vocabulary for each model and
provide methods for encoding/decoding strings in a list of token embeddings indices to be fed to a model.`),He.forEach(t),fe.forEach(t),tt=d(o),ie=r(o,"P",{});var Ua=s(ie);Fo=n(Ua,"All these classes can be instantiated from pretrained instances and saved locally using two methods:"),Ua.forEach(t),ot=d(o),M=r(o,"UL",{});var mt=s(M);x=r(mt,"LI",{});var Ke=s(x);Ce=r(Ke,"CODE",{});var Fa=s(Ce);jo=n(Fa,"from_pretrained()"),Fa.forEach(t),Ho=n(Ke,` lets you instantiate a model/configuration/tokenizer from a pretrained version either
provided by the library itself (the supported models can be found on the `),J=r(Ke,"A",{href:!0,rel:!0});var ja=s(J);Ko=n(ja,"Model Hub"),ja.forEach(t),Wo=n(Ke,`) or
stored locally (or on a server) by the user,`),Ke.forEach(t),Do=d(mt),$=r(mt,"LI",{});var We=s($);Ue=r(We,"CODE",{});var Ha=s(Ue);Ro=n(Ha,"save_pretrained()"),Ha.forEach(t),Go=n(We,` lets you save a model/configuration/tokenizer locally so that it can be reloaded using
`),Fe=r(We,"CODE",{});var Ka=s(Fe);Yo=n(Ka,"from_pretrained()"),Ka.forEach(t),Jo=n(We,"."),We.forEach(t),mt.forEach(t),this.h()},h(){h(_,"name","hf:doc:metadata"),h(_,"content",JSON.stringify(rr)),h(L,"id","philosophy"),h(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(L,"href","#philosophy"),h(b,"class","relative group"),h(X,"href","main_classes/configuration"),h(Z,"href","main_classes/model"),h(ee,"href","main_classes/tokenizer"),h(C,"href","https://huggingface.co/models"),h(C,"rel","nofollow"),h(te,"href","/docs/transformers/pr_highlight/en/main_classes/pipelines#transformers.pipeline"),h(oe,"href","/docs/transformers/pr_highlight/en/main_classes/trainer#transformers.Trainer"),h(I,"id","main-concepts"),h(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(I,"href","#main-concepts"),h(k,"class","relative group"),h(se,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertModel"),h(G,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(G,"rel","nofollow"),h(Y,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Y,"rel","nofollow"),h(le,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertConfig"),h(ne,"href","/docs/transformers/pr_highlight/en/model_doc/bert#transformers.BertTokenizer"),h(J,"href","https://huggingface.co/models"),h(J,"rel","nofollow")},m(o,c){e(document.head,_),f(o,De,c),f(o,b,c),e(b,L),e(L,ue),Ra(O,ue,null),e(b,vt),e(b,pe),e(pe,gt),f(o,Re,c),f(o,Q,c),e(Q,yt),f(o,Ge,c),f(o,g,c),e(g,me),e(me,wt),e(g,_t),e(g,ve),e(ve,bt),e(g,Et),e(g,ge),e(ge,kt),f(o,Ye,c),f(o,V,c),e(V,Pt),f(o,Je,c),f(o,T,c),e(T,B),e(B,ye),e(ye,Lt),e(B,Tt),e(B,p),e(p,m),e(m,It),e(m,X),e(X,At),e(m,zt),e(m,Z),e(Z,Mt),e(m,xt),e(m,ee),e(ee,$t),e(m,St),e(p,Nt),e(p,E),e(E,qt),e(E,we),e(we,Ot),e(E,Bt),e(E,C),e(C,Ct),e(E,Ut),e(p,Ft),e(p,v),e(v,jt),e(v,te),e(te,Ht),e(v,Kt),e(v,oe),e(oe,Wt),e(v,Dt),e(v,_e),e(_e,Rt),e(v,Gt),e(p,Yt),e(p,be),e(be,Jt),e(T,Qt),e(T,U),e(U,Ee),e(Ee,Vt),e(U,Xt),e(U,F),e(F,ke),e(ke,Zt),e(F,eo),e(F,j),e(j,to),e(j,Pe),e(Pe,oo),e(j,ao),f(o,Qe,c),f(o,ae,c),e(ae,ro),f(o,Ve,c),f(o,y,c),e(y,H),e(H,Le),e(Le,so),e(H,lo),e(H,K),e(K,Te),e(Te,no),e(K,io),e(K,Ie),e(Ie,co),e(y,ho),e(y,W),e(W,Ae),e(Ae,fo),e(W,uo),e(W,D),e(D,ze),e(ze,po),e(D,mo),e(D,Me),e(Me,vo),e(y,go),e(y,xe),e(xe,$e),e($e,yo),f(o,Xe,c),f(o,k,c),e(k,I),e(I,Se),Ra(R,Se,null),e(k,wo),e(k,Ne),e(Ne,_o),f(o,Ze,c),f(o,re,c),e(re,bo),f(o,et,c),f(o,w,c),e(w,u),e(u,qe),e(qe,Eo),e(u,ko),e(u,se),e(se,Po),e(u,Lo),e(u,G),e(G,To),e(u,Io),e(u,Y),e(Y,Ao),e(u,zo),e(w,Mo),e(w,A),e(A,Oe),e(Oe,xo),e(A,$o),e(A,le),e(le,So),e(A,No),e(w,qo),e(w,z),e(z,Be),e(Be,Oo),e(z,Bo),e(z,ne),e(ne,Co),e(z,Uo),f(o,tt,c),f(o,ie,c),e(ie,Fo),f(o,ot,c),f(o,M,c),e(M,x),e(x,Ce),e(Ce,jo),e(x,Ho),e(x,J),e(J,Ko),e(x,Wo),e(M,Do),e(M,$),e($,Ue),e(Ue,Ro),e($,Go),e($,Fe),e(Fe,Yo),e($,Jo),at=!0},p:tr,i(o){at||(Ga(O.$$.fragment,o),Ga(R.$$.fragment,o),at=!0)},o(o){Ya(O.$$.fragment,o),Ya(R.$$.fragment,o),at=!1},d(o){t(_),o&&t(De),o&&t(b),Ja(O),o&&t(Re),o&&t(Q),o&&t(Ge),o&&t(g),o&&t(Ye),o&&t(V),o&&t(Je),o&&t(T),o&&t(Qe),o&&t(ae),o&&t(Ve),o&&t(y),o&&t(Xe),o&&t(k),Ja(R),o&&t(Ze),o&&t(re),o&&t(et),o&&t(w),o&&t(tt),o&&t(ie),o&&t(ot),o&&t(M)}}}const rr={local:"philosophy",sections:[{local:"main-concepts",title:"Main concepts"}],title:"Philosophy"};function sr(Qo){return or(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ir extends Va{constructor(_){super();Xa(this,_,sr,ar,Za,{})}}export{ir as default,rr as metadata};
