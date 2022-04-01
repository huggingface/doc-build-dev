import{S as At,i as Et,s as kt,e as i,k as m,w as Qe,t as r,M as Pt,c as s,d as a,m as u,a as n,x as Ye,h as o,b as c,F as t,g as d,y as Je,L as Tt,q as Ke,o as Ve,B as Xe,v as $t}from"../chunks/vendor-aa873a46.js";import{I as Ze}from"../chunks/IconCopyLink-d0ca3106.js";function xt(et){let _,K,b,g,F,T,me,H,ue,V,A,fe,D,pe,ve,X,y,E,j,$,_e,B,be,W,ye,Z,k,we,S,ge,Ae,ee,f,Ee,U,ke,Pe,L,Te,$e,te,w,P,q,x,xe,z,Me,ae,h,De,Q,Be,Se,Y,Ue,Le,M,Ce,Ge,J,Ne,Oe,ie,C,Ie,re,p,Re,G,Fe,He,N,je,We,se,O,qe,oe;return T=new Ze({}),$=new Ze({}),x=new Ze({}),{c(){_=i("meta"),K=m(),b=i("h1"),g=i("a"),F=i("span"),Qe(T.$$.fragment),me=m(),H=i("span"),ue=r("All about metrics"),V=m(),A=i("p"),fe=r("\u{1F917} Datasets provides access to a wide range of NLP metrics. You can load metrics associated with benchmark datasets like GLUE or SQuAD, and complex metrics like BLEURT or BERTScore, with a single command: "),D=i("a"),pe=r("load_metric()"),ve=r(". Once you\u2019ve loaded a metric, easily compute and evaluate a model\u2019s performance."),X=m(),y=i("h2"),E=i("a"),j=i("span"),Qe($.$$.fragment),_e=m(),B=i("span"),be=r("ELI5: "),W=i("code"),ye=r("load_metric"),Z=m(),k=i("p"),we=r("Loading a dataset and loading a metric share many similarities. This was an intentional design choice because we wanted to create a simple and unified experience. When you call "),S=i("a"),ge=r("load_metric()"),Ae=r(", the metric loading script is downloaded and imported from GitHub (if it hasn\u2019t already been downloaded before). It contains information about the metric such as it\u2019s citation, homepage, and description."),ee=m(),f=i("p"),Ee=r("The metric loading script will instantiate and return a "),U=i("a"),ke=r("Metric"),Pe=r(" object. This stores the predictions and references, which you need to compute the metric values. The "),L=i("a"),Te=r("Metric"),$e=r(" object is stored as an Apache Arrow table. As a result, the predictions and references are stored directly on disk with memory-mapping. This enables \u{1F917} Datasets to do a lazy computation of the metric, and makes it easier to gather all the predictions in a distributed setting."),te=m(),w=i("h2"),P=i("a"),q=i("span"),Qe(x.$$.fragment),xe=m(),z=i("span"),Me=r("Distributed evaluation"),ae=m(),h=i("p"),De=r("Computing metrics in a distributed environment can be tricky. Metric evaluation is executed in separate Python processes, or nodes, on different subsets of a dataset. Typically, when a metric score is additive ("),Q=i("code"),Be=r("f(AuB) = f(A) + f(B)"),Se=r("), you can use distributed reduce operations to gather the scores for each subset of the dataset. But when a metric is non-additive ("),Y=i("code"),Ue=r("f(AuB) \u2260 f(A) + f(B)"),Le=r("), it\u2019s not that simple. For example, you can\u2019t take the sum of the "),M=i("a"),Ce=r("F1"),Ge=r(" scores of each data subset as your "),J=i("strong"),Ne=r("final metric"),Oe=r("."),ie=m(),C=i("p"),Ie=r("A common way to overcome this issue is to fallback on single process evaluation. The metrics are evaluated on a single GPU, which becomes inefficient."),re=m(),p=i("p"),Re=r("\u{1F917} Datasets solves this issue by only computing the final metric on the first node. The predictions and references are computed and provided to the metric separately for each node. These are temporarily stored in an Apache Arrow table, avoiding cluttering the GPU or CPU memory. When you are ready to "),G=i("a"),Fe=r("Metric.compute()"),He=r(" the final metric, the first node is able to access the predictions and references stored on all the other nodes. Once it has gathered all the predictions and references, "),N=i("a"),je=r("Metric.compute()"),We=r(" will perform the final metric evaluation."),se=m(),O=i("p"),qe=r("This solution allows \u{1F917} Datasets to perform distributed predictions, which is important for evaluation speed in distributed settings. At the same time, you can also use complex non-additive metrics without wasting valuable GPU or CPU memory."),this.h()},l(e){const l=Pt('[data-svelte="svelte-1phssyn"]',document.head);_=s(l,"META",{name:!0,content:!0}),l.forEach(a),K=u(e),b=s(e,"H1",{class:!0});var ne=n(b);g=s(ne,"A",{id:!0,class:!0,href:!0});var tt=n(g);F=s(tt,"SPAN",{});var at=n(F);Ye(T.$$.fragment,at),at.forEach(a),tt.forEach(a),me=u(ne),H=s(ne,"SPAN",{});var it=n(H);ue=o(it,"All about metrics"),it.forEach(a),ne.forEach(a),V=u(e),A=s(e,"P",{});var le=n(A);fe=o(le,"\u{1F917} Datasets provides access to a wide range of NLP metrics. You can load metrics associated with benchmark datasets like GLUE or SQuAD, and complex metrics like BLEURT or BERTScore, with a single command: "),D=s(le,"A",{href:!0});var rt=n(D);pe=o(rt,"load_metric()"),rt.forEach(a),ve=o(le,". Once you\u2019ve loaded a metric, easily compute and evaluate a model\u2019s performance."),le.forEach(a),X=u(e),y=s(e,"H2",{class:!0});var ce=n(y);E=s(ce,"A",{id:!0,class:!0,href:!0});var st=n(E);j=s(st,"SPAN",{});var ot=n(j);Ye($.$$.fragment,ot),ot.forEach(a),st.forEach(a),_e=u(ce),B=s(ce,"SPAN",{});var ze=n(B);be=o(ze,"ELI5: "),W=s(ze,"CODE",{});var nt=n(W);ye=o(nt,"load_metric"),nt.forEach(a),ze.forEach(a),ce.forEach(a),Z=u(e),k=s(e,"P",{});var de=n(k);we=o(de,"Loading a dataset and loading a metric share many similarities. This was an intentional design choice because we wanted to create a simple and unified experience. When you call "),S=s(de,"A",{href:!0});var lt=n(S);ge=o(lt,"load_metric()"),lt.forEach(a),Ae=o(de,", the metric loading script is downloaded and imported from GitHub (if it hasn\u2019t already been downloaded before). It contains information about the metric such as it\u2019s citation, homepage, and description."),de.forEach(a),ee=u(e),f=s(e,"P",{});var I=n(f);Ee=o(I,"The metric loading script will instantiate and return a "),U=s(I,"A",{href:!0});var ct=n(U);ke=o(ct,"Metric"),ct.forEach(a),Pe=o(I," object. This stores the predictions and references, which you need to compute the metric values. The "),L=s(I,"A",{href:!0});var dt=n(L);Te=o(dt,"Metric"),dt.forEach(a),$e=o(I," object is stored as an Apache Arrow table. As a result, the predictions and references are stored directly on disk with memory-mapping. This enables \u{1F917} Datasets to do a lazy computation of the metric, and makes it easier to gather all the predictions in a distributed setting."),I.forEach(a),te=u(e),w=s(e,"H2",{class:!0});var he=n(w);P=s(he,"A",{id:!0,class:!0,href:!0});var ht=n(P);q=s(ht,"SPAN",{});var mt=n(q);Ye(x.$$.fragment,mt),mt.forEach(a),ht.forEach(a),xe=u(he),z=s(he,"SPAN",{});var ut=n(z);Me=o(ut,"Distributed evaluation"),ut.forEach(a),he.forEach(a),ae=u(e),h=s(e,"P",{});var v=n(h);De=o(v,"Computing metrics in a distributed environment can be tricky. Metric evaluation is executed in separate Python processes, or nodes, on different subsets of a dataset. Typically, when a metric score is additive ("),Q=s(v,"CODE",{});var ft=n(Q);Be=o(ft,"f(AuB) = f(A) + f(B)"),ft.forEach(a),Se=o(v,"), you can use distributed reduce operations to gather the scores for each subset of the dataset. But when a metric is non-additive ("),Y=s(v,"CODE",{});var pt=n(Y);Ue=o(pt,"f(AuB) \u2260 f(A) + f(B)"),pt.forEach(a),Le=o(v,"), it\u2019s not that simple. For example, you can\u2019t take the sum of the "),M=s(v,"A",{href:!0,rel:!0});var vt=n(M);Ce=o(vt,"F1"),vt.forEach(a),Ge=o(v," scores of each data subset as your "),J=s(v,"STRONG",{});var _t=n(J);Ne=o(_t,"final metric"),_t.forEach(a),Oe=o(v,"."),v.forEach(a),ie=u(e),C=s(e,"P",{});var bt=n(C);Ie=o(bt,"A common way to overcome this issue is to fallback on single process evaluation. The metrics are evaluated on a single GPU, which becomes inefficient."),bt.forEach(a),re=u(e),p=s(e,"P",{});var R=n(p);Re=o(R,"\u{1F917} Datasets solves this issue by only computing the final metric on the first node. The predictions and references are computed and provided to the metric separately for each node. These are temporarily stored in an Apache Arrow table, avoiding cluttering the GPU or CPU memory. When you are ready to "),G=s(R,"A",{href:!0});var yt=n(G);Fe=o(yt,"Metric.compute()"),yt.forEach(a),He=o(R," the final metric, the first node is able to access the predictions and references stored on all the other nodes. Once it has gathered all the predictions and references, "),N=s(R,"A",{href:!0});var wt=n(N);je=o(wt,"Metric.compute()"),wt.forEach(a),We=o(R," will perform the final metric evaluation."),R.forEach(a),se=u(e),O=s(e,"P",{});var gt=n(O);qe=o(gt,"This solution allows \u{1F917} Datasets to perform distributed predictions, which is important for evaluation speed in distributed settings. At the same time, you can also use complex non-additive metrics without wasting valuable GPU or CPU memory."),gt.forEach(a),this.h()},h(){c(_,"name","hf:doc:metadata"),c(_,"content",JSON.stringify(Mt)),c(g,"id","all-about-metrics"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#all-about-metrics"),c(b,"class","relative group"),c(D,"href","/docs/datasets/pr_4083/en/package_reference/loading_methods#datasets.load_metric"),c(E,"id","eli5-loadmetric"),c(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(E,"href","#eli5-loadmetric"),c(y,"class","relative group"),c(S,"href","/docs/datasets/pr_4083/en/package_reference/loading_methods#datasets.load_metric"),c(U,"href","/docs/datasets/pr_4083/en/package_reference/main_classes#datasets.Metric"),c(L,"href","/docs/datasets/pr_4083/en/package_reference/main_classes#datasets.Metric"),c(P,"id","distributed-evaluation"),c(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(P,"href","#distributed-evaluation"),c(w,"class","relative group"),c(M,"href","https://huggingface.co/metrics/f1"),c(M,"rel","nofollow"),c(G,"href","/docs/datasets/pr_4083/en/package_reference/main_classes#datasets.Metric.compute"),c(N,"href","/docs/datasets/pr_4083/en/package_reference/main_classes#datasets.Metric.compute")},m(e,l){t(document.head,_),d(e,K,l),d(e,b,l),t(b,g),t(g,F),Je(T,F,null),t(b,me),t(b,H),t(H,ue),d(e,V,l),d(e,A,l),t(A,fe),t(A,D),t(D,pe),t(A,ve),d(e,X,l),d(e,y,l),t(y,E),t(E,j),Je($,j,null),t(y,_e),t(y,B),t(B,be),t(B,W),t(W,ye),d(e,Z,l),d(e,k,l),t(k,we),t(k,S),t(S,ge),t(k,Ae),d(e,ee,l),d(e,f,l),t(f,Ee),t(f,U),t(U,ke),t(f,Pe),t(f,L),t(L,Te),t(f,$e),d(e,te,l),d(e,w,l),t(w,P),t(P,q),Je(x,q,null),t(w,xe),t(w,z),t(z,Me),d(e,ae,l),d(e,h,l),t(h,De),t(h,Q),t(Q,Be),t(h,Se),t(h,Y),t(Y,Ue),t(h,Le),t(h,M),t(M,Ce),t(h,Ge),t(h,J),t(J,Ne),t(h,Oe),d(e,ie,l),d(e,C,l),t(C,Ie),d(e,re,l),d(e,p,l),t(p,Re),t(p,G),t(G,Fe),t(p,He),t(p,N),t(N,je),t(p,We),d(e,se,l),d(e,O,l),t(O,qe),oe=!0},p:Tt,i(e){oe||(Ke(T.$$.fragment,e),Ke($.$$.fragment,e),Ke(x.$$.fragment,e),oe=!0)},o(e){Ve(T.$$.fragment,e),Ve($.$$.fragment,e),Ve(x.$$.fragment,e),oe=!1},d(e){a(_),e&&a(K),e&&a(b),Xe(T),e&&a(V),e&&a(A),e&&a(X),e&&a(y),Xe($),e&&a(Z),e&&a(k),e&&a(ee),e&&a(f),e&&a(te),e&&a(w),Xe(x),e&&a(ae),e&&a(h),e&&a(ie),e&&a(C),e&&a(re),e&&a(p),e&&a(se),e&&a(O)}}}const Mt={local:"all-about-metrics",sections:[{local:"eli5-loadmetric",title:"ELI5: `load_metric`"},{local:"distributed-evaluation",title:"Distributed evaluation"}],title:"All about metrics"};function Dt(et){return $t(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ut extends At{constructor(_){super();Et(this,_,Dt,xt,kt,{})}}export{Ut as default,Mt as metadata};
