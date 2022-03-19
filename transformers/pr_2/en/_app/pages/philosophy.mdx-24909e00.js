import{S as Va,i as Xa,s as Za,e as a,k as i,w as Wa,t as l,M as er,c as r,d as t,m as d,a as s,x as Da,h as n,b as h,F as e,g as f,y as Ga,L as tr,q as Ra,o as Ya,B as Ja}from"../chunks/vendor-6b77c823.js";import{I as Qa}from"../chunks/IconCopyLink-7a11ce68.js";function or(vt){let g,Q,u,m,pe,O,yt,me,wt,Ge,V,gt,Re,_,ve,_t,bt,ye,Et,kt,we,Pt,Ye,X,Lt,Je,T,B,ge,Tt,It,v,y,At,Z,zt,Mt,ee,xt,$t,te,Nt,St,qt,k,Ot,_e,Bt,Ct,C,Ft,Ut,jt,w,Ht,oe,Kt,Wt,ae,Dt,Gt,be,Rt,Yt,Jt,Ee,Qt,Vt,F,ke,Xt,Zt,U,Pe,eo,to,j,oo,Le,ao,ro,Qe,re,so,Ve,b,H,Te,lo,no,K,Ie,io,co,Ae,ho,fo,W,ze,uo,po,D,Me,mo,vo,xe,yo,wo,$e,Ne,go,Xe,P,I,Se,G,_o,qe,bo,Ze,se,Eo,et,E,p,Oe,ko,Po,le,Lo,To,R,Io,Ao,Y,zo,Mo,xo,A,Be,$o,No,ne,So,qo,Oo,z,Ce,Bo,Co,ie,Fo,Uo,tt,de,jo,ot,M,x,Fe,Ho,Ko,J,Wo,Do,Go,$,Ue,Ro,Yo,je,Jo,Qo,at;return O=new Qa({}),G=new Qa({}),{c(){g=a("meta"),Q=i(),u=a("h1"),m=a("a"),pe=a("span"),Wa(O.$$.fragment),yt=i(),me=a("span"),wt=l("Philosophy"),Ge=i(),V=a("p"),gt=l("\u{1F917} Transformers is an opinionated library built for:"),Re=i(),_=a("ul"),ve=a("li"),_t=l("NLP researchers and educators seeking to use/study/extend large-scale transformers models"),bt=i(),ye=a("li"),Et=l("hands-on practitioners who want to fine-tune those models and/or serve them in production"),kt=i(),we=a("li"),Pt=l("engineers who just want to download a pretrained model and use it to solve a given NLP task."),Ye=i(),X=a("p"),Lt=l("The library was designed with two strong goals in mind:"),Je=i(),T=a("ul"),B=a("li"),ge=a("p"),Tt=l("Be as easy and fast to use as possible:"),It=i(),v=a("ul"),y=a("li"),At=l(`We strongly limited the number of user-facing abstractions to learn, in fact, there are almost no abstractions,
just three standard classes required to use each model: `),Z=a("a"),zt=l("configuration"),Mt=l(`,
`),ee=a("a"),xt=l("models"),$t=l(" and "),te=a("a"),Nt=l("tokenizer"),St=l("."),qt=i(),k=a("li"),Ot=l(`All of these classes can be initialized in a simple and unified way from pretrained instances by using a common
`),_e=a("code"),Bt=l("from_pretrained()"),Ct=l(` instantiation method which will take care of downloading (if needed), caching and
loading the related class instance and associated data (configurations\u2019 hyper-parameters, tokenizers\u2019 vocabulary,
and models\u2019 weights) from a pretrained checkpoint provided on `),C=a("a"),Ft=l("Hugging Face Hub"),Ut=l(" or your own saved checkpoint."),jt=i(),w=a("li"),Ht=l("On top of those three base classes, the library provides two APIs: "),oe=a("a"),Kt=l("pipeline()"),Wt=l(` for quickly
using a model (plus its associated tokenizer and configuration) on a given task and
`),ae=a("a"),Dt=l("Trainer"),Gt=l("/"),be=a("code"),Rt=l("Keras.fit"),Yt=l(" to quickly train or fine-tune a given model."),Jt=i(),Ee=a("li"),Qt=l(`As a consequence, this library is NOT a modular toolbox of building blocks for neural nets. If you want to
extend/build-upon the library, just use regular Python/PyTorch/TensorFlow/Keras modules and inherit from the base
classes of the library to reuse functionalities like model loading/saving.`),Vt=i(),F=a("li"),ke=a("p"),Xt=l("Provide state-of-the-art models with performances as close as possible to the original models:"),Zt=i(),U=a("ul"),Pe=a("li"),eo=l(`We provide at least one example for each architecture which reproduces a result provided by the official authors
of said architecture.`),to=i(),j=a("li"),oo=l(`The code is usually as close to the original code base as possible which means some PyTorch code may be not as
`),Le=a("em"),ao=l("pytorchic"),ro=l(" as it could be as a result of being converted TensorFlow code and vice versa."),Qe=i(),re=a("p"),so=l("A few other goals:"),Ve=i(),b=a("ul"),H=a("li"),Te=a("p"),lo=l("Expose the models\u2019 internals as consistently as possible:"),no=i(),K=a("ul"),Ie=a("li"),io=l("We give access, using a single API, to the full hidden-states and attention weights."),co=i(),Ae=a("li"),ho=l("Tokenizer and base model\u2019s API are standardized to easily switch between models."),fo=i(),W=a("li"),ze=a("p"),uo=l("Incorporate a subjective selection of promising tools for fine-tuning/investigating these models:"),po=i(),D=a("ul"),Me=a("li"),mo=l("A simple/consistent way to add new tokens to the vocabulary and embeddings for fine-tuning."),vo=i(),xe=a("li"),yo=l("Simple ways to mask and prune transformer heads."),wo=i(),$e=a("li"),Ne=a("p"),go=l("Switch easily between PyTorch and TensorFlow 2.0, allowing training using one framework and inference using another."),Xe=i(),P=a("h2"),I=a("a"),Se=a("span"),Wa(G.$$.fragment),_o=i(),qe=a("span"),bo=l("Main concepts"),Ze=i(),se=a("p"),Eo=l("The library is built around three types of classes for each model:"),et=i(),E=a("ul"),p=a("li"),Oe=a("strong"),ko=l("Model classes"),Po=l(" such as "),le=a("a"),Lo=l("BertModel"),To=l(", which are 30+ PyTorch models ("),R=a("a"),Io=l("torch.nn.Module"),Ao=l(") or Keras models ("),Y=a("a"),zo=l("tf.keras.Model"),Mo=l(`) that work with the pretrained weights provided in the
library.`),xo=i(),A=a("li"),Be=a("strong"),$o=l("Configuration classes"),No=l(" such as "),ne=a("a"),So=l("BertConfig"),qo=l(`, which store all the parameters required to build
a model. You don\u2019t always need to instantiate these yourself. In particular, if you are using a pretrained model
without any modification, creating the model will automatically take care of instantiating the configuration (which
is part of the model).`),Oo=i(),z=a("li"),Ce=a("strong"),Bo=l("Tokenizer classes"),Co=l(" such as "),ie=a("a"),Fo=l("BertTokenizer"),Uo=l(`, which store the vocabulary for each model and
provide methods for encoding/decoding strings in a list of token embeddings indices to be fed to a model.`),tt=i(),de=a("p"),jo=l("All these classes can be instantiated from pretrained instances and saved locally using two methods:"),ot=i(),M=a("ul"),x=a("li"),Fe=a("code"),Ho=l("from_pretrained()"),Ko=l(` lets you instantiate a model/configuration/tokenizer from a pretrained version either
provided by the library itself (the supported models can be found on the `),J=a("a"),Wo=l("Model Hub"),Do=l(`) or
stored locally (or on a server) by the user,`),Go=i(),$=a("li"),Ue=a("code"),Ro=l("save_pretrained()"),Yo=l(` lets you save a model/configuration/tokenizer locally so that it can be reloaded using
`),je=a("code"),Jo=l("from_pretrained()"),Qo=l("."),this.h()},l(o){const c=er('[data-svelte="svelte-1phssyn"]',document.head);g=r(c,"META",{name:!0,content:!0}),c.forEach(t),Q=d(o),u=r(o,"H1",{class:!0});var rt=s(u);m=r(rt,"A",{id:!0,class:!0,href:!0});var Vo=s(m);pe=r(Vo,"SPAN",{});var Xo=s(pe);Da(O.$$.fragment,Xo),Xo.forEach(t),Vo.forEach(t),yt=d(rt),me=r(rt,"SPAN",{});var Zo=s(me);wt=n(Zo,"Philosophy"),Zo.forEach(t),rt.forEach(t),Ge=d(o),V=r(o,"P",{});var ea=s(V);gt=n(ea,"\u{1F917} Transformers is an opinionated library built for:"),ea.forEach(t),Re=d(o),_=r(o,"UL",{});var ce=s(_);ve=r(ce,"LI",{});var ta=s(ve);_t=n(ta,"NLP researchers and educators seeking to use/study/extend large-scale transformers models"),ta.forEach(t),bt=d(ce),ye=r(ce,"LI",{});var oa=s(ye);Et=n(oa,"hands-on practitioners who want to fine-tune those models and/or serve them in production"),oa.forEach(t),kt=d(ce),we=r(ce,"LI",{});var aa=s(we);Pt=n(aa,"engineers who just want to download a pretrained model and use it to solve a given NLP task."),aa.forEach(t),ce.forEach(t),Ye=d(o),X=r(o,"P",{});var ra=s(X);Lt=n(ra,"The library was designed with two strong goals in mind:"),ra.forEach(t),Je=d(o),T=r(o,"UL",{});var st=s(T);B=r(st,"LI",{});var lt=s(B);ge=r(lt,"P",{});var sa=s(ge);Tt=n(sa,"Be as easy and fast to use as possible:"),sa.forEach(t),It=d(lt),v=r(lt,"UL",{});var N=s(v);y=r(N,"LI",{});var S=s(y);At=n(S,`We strongly limited the number of user-facing abstractions to learn, in fact, there are almost no abstractions,
just three standard classes required to use each model: `),Z=r(S,"A",{href:!0});var la=s(Z);zt=n(la,"configuration"),la.forEach(t),Mt=n(S,`,
`),ee=r(S,"A",{href:!0});var na=s(ee);xt=n(na,"models"),na.forEach(t),$t=n(S," and "),te=r(S,"A",{href:!0});var ia=s(te);Nt=n(ia,"tokenizer"),ia.forEach(t),St=n(S,"."),S.forEach(t),qt=d(N),k=r(N,"LI",{});var he=s(k);Ot=n(he,`All of these classes can be initialized in a simple and unified way from pretrained instances by using a common
`),_e=r(he,"CODE",{});var da=s(_e);Bt=n(da,"from_pretrained()"),da.forEach(t),Ct=n(he,` instantiation method which will take care of downloading (if needed), caching and
loading the related class instance and associated data (configurations\u2019 hyper-parameters, tokenizers\u2019 vocabulary,
and models\u2019 weights) from a pretrained checkpoint provided on `),C=r(he,"A",{href:!0,rel:!0});var ca=s(C);Ft=n(ca,"Hugging Face Hub"),ca.forEach(t),Ut=n(he," or your own saved checkpoint."),he.forEach(t),jt=d(N),w=r(N,"LI",{});var q=s(w);Ht=n(q,"On top of those three base classes, the library provides two APIs: "),oe=r(q,"A",{href:!0});var ha=s(oe);Kt=n(ha,"pipeline()"),ha.forEach(t),Wt=n(q,` for quickly
using a model (plus its associated tokenizer and configuration) on a given task and
`),ae=r(q,"A",{href:!0});var fa=s(ae);Dt=n(fa,"Trainer"),fa.forEach(t),Gt=n(q,"/"),be=r(q,"CODE",{});var ua=s(be);Rt=n(ua,"Keras.fit"),ua.forEach(t),Yt=n(q," to quickly train or fine-tune a given model."),q.forEach(t),Jt=d(N),Ee=r(N,"LI",{});var pa=s(Ee);Qt=n(pa,`As a consequence, this library is NOT a modular toolbox of building blocks for neural nets. If you want to
extend/build-upon the library, just use regular Python/PyTorch/TensorFlow/Keras modules and inherit from the base
classes of the library to reuse functionalities like model loading/saving.`),pa.forEach(t),N.forEach(t),lt.forEach(t),Vt=d(st),F=r(st,"LI",{});var nt=s(F);ke=r(nt,"P",{});var ma=s(ke);Xt=n(ma,"Provide state-of-the-art models with performances as close as possible to the original models:"),ma.forEach(t),Zt=d(nt),U=r(nt,"UL",{});var it=s(U);Pe=r(it,"LI",{});var va=s(Pe);eo=n(va,`We provide at least one example for each architecture which reproduces a result provided by the official authors
of said architecture.`),va.forEach(t),to=d(it),j=r(it,"LI",{});var dt=s(j);oo=n(dt,`The code is usually as close to the original code base as possible which means some PyTorch code may be not as
`),Le=r(dt,"EM",{});var ya=s(Le);ao=n(ya,"pytorchic"),ya.forEach(t),ro=n(dt," as it could be as a result of being converted TensorFlow code and vice versa."),dt.forEach(t),it.forEach(t),nt.forEach(t),st.forEach(t),Qe=d(o),re=r(o,"P",{});var wa=s(re);so=n(wa,"A few other goals:"),wa.forEach(t),Ve=d(o),b=r(o,"UL",{});var fe=s(b);H=r(fe,"LI",{});var ct=s(H);Te=r(ct,"P",{});var ga=s(Te);lo=n(ga,"Expose the models\u2019 internals as consistently as possible:"),ga.forEach(t),no=d(ct),K=r(ct,"UL",{});var ht=s(K);Ie=r(ht,"LI",{});var _a=s(Ie);io=n(_a,"We give access, using a single API, to the full hidden-states and attention weights."),_a.forEach(t),co=d(ht),Ae=r(ht,"LI",{});var ba=s(Ae);ho=n(ba,"Tokenizer and base model\u2019s API are standardized to easily switch between models."),ba.forEach(t),ht.forEach(t),ct.forEach(t),fo=d(fe),W=r(fe,"LI",{});var ft=s(W);ze=r(ft,"P",{});var Ea=s(ze);uo=n(Ea,"Incorporate a subjective selection of promising tools for fine-tuning/investigating these models:"),Ea.forEach(t),po=d(ft),D=r(ft,"UL",{});var ut=s(D);Me=r(ut,"LI",{});var ka=s(Me);mo=n(ka,"A simple/consistent way to add new tokens to the vocabulary and embeddings for fine-tuning."),ka.forEach(t),vo=d(ut),xe=r(ut,"LI",{});var Pa=s(xe);yo=n(Pa,"Simple ways to mask and prune transformer heads."),Pa.forEach(t),ut.forEach(t),ft.forEach(t),wo=d(fe),$e=r(fe,"LI",{});var La=s($e);Ne=r(La,"P",{});var Ta=s(Ne);go=n(Ta,"Switch easily between PyTorch and TensorFlow 2.0, allowing training using one framework and inference using another."),Ta.forEach(t),La.forEach(t),fe.forEach(t),Xe=d(o),P=r(o,"H2",{class:!0});var pt=s(P);I=r(pt,"A",{id:!0,class:!0,href:!0});var Ia=s(I);Se=r(Ia,"SPAN",{});var Aa=s(Se);Da(G.$$.fragment,Aa),Aa.forEach(t),Ia.forEach(t),_o=d(pt),qe=r(pt,"SPAN",{});var za=s(qe);bo=n(za,"Main concepts"),za.forEach(t),pt.forEach(t),Ze=d(o),se=r(o,"P",{});var Ma=s(se);Eo=n(Ma,"The library is built around three types of classes for each model:"),Ma.forEach(t),et=d(o),E=r(o,"UL",{});var ue=s(E);p=r(ue,"LI",{});var L=s(p);Oe=r(L,"STRONG",{});var xa=s(Oe);ko=n(xa,"Model classes"),xa.forEach(t),Po=n(L," such as "),le=r(L,"A",{href:!0});var $a=s(le);Lo=n($a,"BertModel"),$a.forEach(t),To=n(L,", which are 30+ PyTorch models ("),R=r(L,"A",{href:!0,rel:!0});var Na=s(R);Io=n(Na,"torch.nn.Module"),Na.forEach(t),Ao=n(L,") or Keras models ("),Y=r(L,"A",{href:!0,rel:!0});var Sa=s(Y);zo=n(Sa,"tf.keras.Model"),Sa.forEach(t),Mo=n(L,`) that work with the pretrained weights provided in the
library.`),L.forEach(t),xo=d(ue),A=r(ue,"LI",{});var He=s(A);Be=r(He,"STRONG",{});var qa=s(Be);$o=n(qa,"Configuration classes"),qa.forEach(t),No=n(He," such as "),ne=r(He,"A",{href:!0});var Oa=s(ne);So=n(Oa,"BertConfig"),Oa.forEach(t),qo=n(He,`, which store all the parameters required to build
a model. You don\u2019t always need to instantiate these yourself. In particular, if you are using a pretrained model
without any modification, creating the model will automatically take care of instantiating the configuration (which
is part of the model).`),He.forEach(t),Oo=d(ue),z=r(ue,"LI",{});var Ke=s(z);Ce=r(Ke,"STRONG",{});var Ba=s(Ce);Bo=n(Ba,"Tokenizer classes"),Ba.forEach(t),Co=n(Ke," such as "),ie=r(Ke,"A",{href:!0});var Ca=s(ie);Fo=n(Ca,"BertTokenizer"),Ca.forEach(t),Uo=n(Ke,`, which store the vocabulary for each model and
provide methods for encoding/decoding strings in a list of token embeddings indices to be fed to a model.`),Ke.forEach(t),ue.forEach(t),tt=d(o),de=r(o,"P",{});var Fa=s(de);jo=n(Fa,"All these classes can be instantiated from pretrained instances and saved locally using two methods:"),Fa.forEach(t),ot=d(o),M=r(o,"UL",{});var mt=s(M);x=r(mt,"LI",{});var We=s(x);Fe=r(We,"CODE",{});var Ua=s(Fe);Ho=n(Ua,"from_pretrained()"),Ua.forEach(t),Ko=n(We,` lets you instantiate a model/configuration/tokenizer from a pretrained version either
provided by the library itself (the supported models can be found on the `),J=r(We,"A",{href:!0,rel:!0});var ja=s(J);Wo=n(ja,"Model Hub"),ja.forEach(t),Do=n(We,`) or
stored locally (or on a server) by the user,`),We.forEach(t),Go=d(mt),$=r(mt,"LI",{});var De=s($);Ue=r(De,"CODE",{});var Ha=s(Ue);Ro=n(Ha,"save_pretrained()"),Ha.forEach(t),Yo=n(De,` lets you save a model/configuration/tokenizer locally so that it can be reloaded using
`),je=r(De,"CODE",{});var Ka=s(je);Jo=n(Ka,"from_pretrained()"),Ka.forEach(t),Qo=n(De,"."),De.forEach(t),mt.forEach(t),this.h()},h(){h(g,"name","hf:doc:metadata"),h(g,"content",JSON.stringify(ar)),h(m,"id","philosophy"),h(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(m,"href","#philosophy"),h(u,"class","relative group"),h(Z,"href","main_classes/configuration"),h(ee,"href","main_classes/model"),h(te,"href","main_classes/tokenizer"),h(C,"href","https://huggingface.co/models"),h(C,"rel","nofollow"),h(oe,"href","/docs/transformers/pr_2/en/main_classes/pipelines#transformers.pipeline"),h(ae,"href","/docs/transformers/pr_2/en/main_classes/trainer#transformers.Trainer"),h(I,"id","main-concepts"),h(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(I,"href","#main-concepts"),h(P,"class","relative group"),h(le,"href","/docs/transformers/pr_2/en/model_doc/bert#transformers.BertModel"),h(R,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(R,"rel","nofollow"),h(Y,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Y,"rel","nofollow"),h(ne,"href","/docs/transformers/pr_2/en/model_doc/bert#transformers.BertConfig"),h(ie,"href","/docs/transformers/pr_2/en/model_doc/bert#transformers.BertTokenizer"),h(J,"href","https://huggingface.co/models"),h(J,"rel","nofollow")},m(o,c){e(document.head,g),f(o,Q,c),f(o,u,c),e(u,m),e(m,pe),Ga(O,pe,null),e(u,yt),e(u,me),e(me,wt),f(o,Ge,c),f(o,V,c),e(V,gt),f(o,Re,c),f(o,_,c),e(_,ve),e(ve,_t),e(_,bt),e(_,ye),e(ye,Et),e(_,kt),e(_,we),e(we,Pt),f(o,Ye,c),f(o,X,c),e(X,Lt),f(o,Je,c),f(o,T,c),e(T,B),e(B,ge),e(ge,Tt),e(B,It),e(B,v),e(v,y),e(y,At),e(y,Z),e(Z,zt),e(y,Mt),e(y,ee),e(ee,xt),e(y,$t),e(y,te),e(te,Nt),e(y,St),e(v,qt),e(v,k),e(k,Ot),e(k,_e),e(_e,Bt),e(k,Ct),e(k,C),e(C,Ft),e(k,Ut),e(v,jt),e(v,w),e(w,Ht),e(w,oe),e(oe,Kt),e(w,Wt),e(w,ae),e(ae,Dt),e(w,Gt),e(w,be),e(be,Rt),e(w,Yt),e(v,Jt),e(v,Ee),e(Ee,Qt),e(T,Vt),e(T,F),e(F,ke),e(ke,Xt),e(F,Zt),e(F,U),e(U,Pe),e(Pe,eo),e(U,to),e(U,j),e(j,oo),e(j,Le),e(Le,ao),e(j,ro),f(o,Qe,c),f(o,re,c),e(re,so),f(o,Ve,c),f(o,b,c),e(b,H),e(H,Te),e(Te,lo),e(H,no),e(H,K),e(K,Ie),e(Ie,io),e(K,co),e(K,Ae),e(Ae,ho),e(b,fo),e(b,W),e(W,ze),e(ze,uo),e(W,po),e(W,D),e(D,Me),e(Me,mo),e(D,vo),e(D,xe),e(xe,yo),e(b,wo),e(b,$e),e($e,Ne),e(Ne,go),f(o,Xe,c),f(o,P,c),e(P,I),e(I,Se),Ga(G,Se,null),e(P,_o),e(P,qe),e(qe,bo),f(o,Ze,c),f(o,se,c),e(se,Eo),f(o,et,c),f(o,E,c),e(E,p),e(p,Oe),e(Oe,ko),e(p,Po),e(p,le),e(le,Lo),e(p,To),e(p,R),e(R,Io),e(p,Ao),e(p,Y),e(Y,zo),e(p,Mo),e(E,xo),e(E,A),e(A,Be),e(Be,$o),e(A,No),e(A,ne),e(ne,So),e(A,qo),e(E,Oo),e(E,z),e(z,Ce),e(Ce,Bo),e(z,Co),e(z,ie),e(ie,Fo),e(z,Uo),f(o,tt,c),f(o,de,c),e(de,jo),f(o,ot,c),f(o,M,c),e(M,x),e(x,Fe),e(Fe,Ho),e(x,Ko),e(x,J),e(J,Wo),e(x,Do),e(M,Go),e(M,$),e($,Ue),e(Ue,Ro),e($,Yo),e($,je),e(je,Jo),e($,Qo),at=!0},p:tr,i(o){at||(Ra(O.$$.fragment,o),Ra(G.$$.fragment,o),at=!0)},o(o){Ya(O.$$.fragment,o),Ya(G.$$.fragment,o),at=!1},d(o){t(g),o&&t(Q),o&&t(u),Ja(O),o&&t(Ge),o&&t(V),o&&t(Re),o&&t(_),o&&t(Ye),o&&t(X),o&&t(Je),o&&t(T),o&&t(Qe),o&&t(re),o&&t(Ve),o&&t(b),o&&t(Xe),o&&t(P),Ja(G),o&&t(Ze),o&&t(se),o&&t(et),o&&t(E),o&&t(tt),o&&t(de),o&&t(ot),o&&t(M)}}}const ar={local:"philosophy",sections:[{local:"main-concepts",title:"Main concepts"}],title:"Philosophy"};function rr(vt,g,Q){let{fw:u}=g;return vt.$$set=m=>{"fw"in m&&Q(0,u=m.fw)},[u]}class nr extends Va{constructor(g){super();Xa(this,g,rr,or,Za,{fw:0})}}export{nr as default,ar as metadata};
