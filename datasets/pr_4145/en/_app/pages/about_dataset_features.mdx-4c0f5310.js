import{S as st,i as at,s as tt,e as l,k as d,w as W,t,M as nt,c as r,d as a,m as u,a as o,x as Y,h as n,b as h,F as s,g as p,y as B,q as G,o as Q,B as H,v as lt}from"../chunks/vendor-8138ceec.js";import{T as et}from"../chunks/Tip-12722dfc.js";import{I as rt}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as es}from"../chunks/CodeBlock-fc89709f.js";function ot(J){let c,$,f,g,x;return{c(){c=l("p"),$=t("Refer to "),f=l("a"),g=t("Value"),x=t(" for a full list of supported data types."),this.h()},l(m){c=r(m,"P",{});var y=o(c);$=n(y,"Refer to "),f=r(y,"A",{href:!0});var D=o(f);g=n(D,"Value"),D.forEach(a),x=n(y," for a full list of supported data types."),y.forEach(a),this.h()},h(){h(f,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.Value")},m(m,y){p(m,c,y),s(c,$),s(c,f),s(f,g),s(c,x)},d(m){m&&a(c)}}}function it(J){let c,$,f,g,x;return{c(){c=l("p"),$=t("See the "),f=l("a"),g=t("flatten"),x=t(" section to learn how you can extract the nested subfields as their own independent columns."),this.h()},l(m){c=r(m,"P",{});var y=o(c);$=n(y,"See the "),f=r(y,"A",{href:!0});var D=o(f);g=n(D,"flatten"),D.forEach(a),x=n(y," section to learn how you can extract the nested subfields as their own independent columns."),y.forEach(a),this.h()},h(){h(f,"href","./process#flatten")},m(m,y){p(m,c,y),s(c,$),s(c,f),s(f,g),s(c,x)},d(m){m&&a(c)}}}function pt(J){let c,$,f,g,x,m,y,D,ss,Pe,E,K,as,ts,X,ns,ls,Z,rs,os,ee,is,ps,Oe,C,cs,se,fs,hs,me,ds,us,Fe,ae,ms,Ne,I,Se,q,_s,te,vs,ys,Ve,P,T,gs,_e,js,bs,ve,xs,Es,$s,k,ws,ye,Ds,ks,ge,Cs,As,je,Ts,Ls,Ie,w,qs,be,Ps,Os,xe,Fs,Ns,Ee,Ss,Vs,Re,O,Me,_,Is,ne,Rs,Ms,$e,zs,Us,we,Ws,Ys,De,Bs,Gs,le,Qs,Hs,re,Js,Ks,ze,F,Xs,oe,Zs,ea,Ue,R,We,v,sa,ke,aa,ta,ie,na,la,Ce,ra,oa,Ae,ia,pa,Te,ca,fa,Le,ha,da,Ye,N,Be,A,ua,pe,ma,_a,ce,va,ya,Ge,M,Qe,fe,ga,He,z,Je;return m=new rt({}),I=new es({props:{code:`from datasets import load_dataset
dataset = load_dataset('glue', 'mrpc', split='train')
dataset.features`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features
{<span class="hljs-string">&#x27;idx&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;label&#x27;</span>: ClassLabel(num_classes=<span class="hljs-number">2</span>, names=[<span class="hljs-string">&#x27;not_equivalent&#x27;</span>, <span class="hljs-string">&#x27;equivalent&#x27;</span>], names_file=<span class="hljs-literal">None</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;sentence1&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
 <span class="hljs-string">&#x27;sentence2&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
}`}}),O=new et({props:{$$slots:{default:[ot]},$$scope:{ctx:J}}}),R=new es({props:{code:`from datasets import load_dataset
dataset = load_dataset('squad', split='train')
dataset.features`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, split=<span class="hljs-string">&#x27;train&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.features
{<span class="hljs-string">&#x27;answers&#x27;</span>: <span class="hljs-type">Sequence</span>(feature={<span class="hljs-string">&#x27;text&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>), <span class="hljs-string">&#x27;answer_start&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;int32&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}, length=-<span class="hljs-number">1</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;context&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;id&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;question&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>),
<span class="hljs-string">&#x27;title&#x27;</span>: Value(dtype=<span class="hljs-string">&#x27;string&#x27;</span>, <span class="hljs-built_in">id</span>=<span class="hljs-literal">None</span>)}`}}),N=new et({props:{$$slots:{default:[it]},$$scope:{ctx:J}}}),M=new es({props:{code:"features = Features({'a': Array2D(shape=(1, 3), dtype='int32'))",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>features = Features({<span class="hljs-string">&#x27;a&#x27;</span>: Array2D(shape=(<span class="hljs-number">1</span>, <span class="hljs-number">3</span>), dtype=<span class="hljs-string">&#x27;int32&#x27;</span>))'}}),z=new es({props:{code:"features = Features({'a': Array3D(shape=(None, 5, 2), dtype='int32')})",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>features = Features({<span class="hljs-string">&#x27;a&#x27;</span>: Array3D(shape=(<span class="hljs-literal">None</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>), dtype=<span class="hljs-string">&#x27;int32&#x27;</span>)})'}}),{c(){c=l("meta"),$=d(),f=l("h1"),g=l("a"),x=l("span"),W(m.$$.fragment),y=d(),D=l("span"),ss=t("Dataset features"),Pe=d(),E=l("p"),K=l("a"),as=t("Features"),ts=t(" defines the internal structure of a dataset. It is used to specify the underlying serialization format. What\u2019s more interesting to you though is that "),X=l("a"),ns=t("Features"),ls=t(" contains high-level information about everything from the column names and types, to the "),Z=l("a"),rs=t("ClassLabel"),os=t(". You can think of "),ee=l("a"),is=t("Features"),ps=t(" as the backbone of a dataset."),Oe=d(),C=l("p"),cs=t("The "),se=l("a"),fs=t("Features"),hs=t(" format is simple: "),me=l("code"),ds=t("dict[column_name, column_type]"),us=t(". It is a dictionary of column name and column type pairs. The column type provides a wide range of options for describing the type of data you have."),Fe=d(),ae=l("p"),ms=t("Let\u2019s have a look at the features of the MRPC dataset from the GLUE benchmark:"),Ne=d(),W(I.$$.fragment),Se=d(),q=l("p"),_s=t("The "),te=l("a"),vs=t("Value"),ys=t(" feature tells \u{1F917} Datasets:"),Ve=d(),P=l("ul"),T=l("li"),gs=t("The "),_e=l("code"),js=t("idx"),bs=t(" data type is "),ve=l("code"),xs=t("int32"),Es=t("."),$s=d(),k=l("li"),ws=t("The "),ye=l("code"),Ds=t("sentence1"),ks=t(" and "),ge=l("code"),Cs=t("sentence2"),As=t(" data types are "),je=l("code"),Ts=t("string"),Ls=t("."),Ie=d(),w=l("p"),qs=t("\u{1F917} Datasets supports many other data types such as "),be=l("code"),Ps=t("bool"),Os=t(", "),xe=l("code"),Fs=t("float32"),Ns=t(" and "),Ee=l("code"),Ss=t("binary"),Vs=t(" to name just a few."),Re=d(),W(O.$$.fragment),Me=d(),_=l("p"),Is=t("The "),ne=l("a"),Rs=t("ClassLabel"),Ms=t(" feature informs \u{1F917} Datasets the "),$e=l("code"),zs=t("label"),Us=t(" column contains two classes. The classes are labeled "),we=l("code"),Ws=t("not_equivalent"),Ys=t(" and "),De=l("code"),Bs=t("equivalent"),Gs=t(". Labels are stored as integers in the dataset. When you retrieve the labels, "),le=l("a"),Qs=t("ClassLabel.int2str()"),Hs=t(" and "),re=l("a"),Js=t("ClassLabel.str2int()"),Ks=t(" carries out the conversion from integer value to label name, and vice versa."),ze=d(),F=l("p"),Xs=t("If your data type contains a list of objects, then you want to use the "),oe=l("a"),Zs=t("Sequence"),ea=t(" feature. Remember the SQuAD dataset?"),Ue=d(),W(R.$$.fragment),We=d(),v=l("p"),sa=t("The "),ke=l("code"),aa=t("answers"),ta=t(" field is constructed using the "),ie=l("a"),na=t("Sequence"),la=t(" feature because it contains two subfields, "),Ce=l("code"),ra=t("text"),oa=t(" and "),Ae=l("code"),ia=t("answer_start"),pa=t(", which are lists of "),Te=l("code"),ca=t("string"),fa=t(" and "),Le=l("code"),ha=t("int32"),da=t(", respectively."),Ye=d(),W(N.$$.fragment),Be=d(),A=l("p"),ua=t("The array feature type is useful for creating arrays of various sizes. You can create arrays with two dimensions using "),pe=l("a"),ma=t("Array2D"),_a=t(", and even arrays with five dimensions using "),ce=l("a"),va=t("Array5D"),ya=t("."),Ge=d(),W(M.$$.fragment),Qe=d(),fe=l("p"),ga=t("The array type also allows the first dimension of the array to be dynamic. This is useful for handling sequences with variable lengths such as sentences, without having to pad or truncate the input to a uniform shape."),He=d(),W(z.$$.fragment),this.h()},l(e){const i=nt('[data-svelte="svelte-1phssyn"]',document.head);c=r(i,"META",{name:!0,content:!0}),i.forEach(a),$=u(e),f=r(e,"H1",{class:!0});var U=o(f);g=r(U,"A",{id:!0,class:!0,href:!0});var qe=o(g);x=r(qe,"SPAN",{});var ja=o(x);Y(m.$$.fragment,ja),ja.forEach(a),qe.forEach(a),y=u(U),D=r(U,"SPAN",{});var ba=o(D);ss=n(ba,"Dataset features"),ba.forEach(a),U.forEach(a),Pe=u(e),E=r(e,"P",{});var L=o(E);K=r(L,"A",{href:!0});var xa=o(K);as=n(xa,"Features"),xa.forEach(a),ts=n(L," defines the internal structure of a dataset. It is used to specify the underlying serialization format. What\u2019s more interesting to you though is that "),X=r(L,"A",{href:!0});var Ea=o(X);ns=n(Ea,"Features"),Ea.forEach(a),ls=n(L," contains high-level information about everything from the column names and types, to the "),Z=r(L,"A",{href:!0});var $a=o(Z);rs=n($a,"ClassLabel"),$a.forEach(a),os=n(L,". You can think of "),ee=r(L,"A",{href:!0});var wa=o(ee);is=n(wa,"Features"),wa.forEach(a),ps=n(L," as the backbone of a dataset."),L.forEach(a),Oe=u(e),C=r(e,"P",{});var he=o(C);cs=n(he,"The "),se=r(he,"A",{href:!0});var Da=o(se);fs=n(Da,"Features"),Da.forEach(a),hs=n(he," format is simple: "),me=r(he,"CODE",{});var ka=o(me);ds=n(ka,"dict[column_name, column_type]"),ka.forEach(a),us=n(he,". It is a dictionary of column name and column type pairs. The column type provides a wide range of options for describing the type of data you have."),he.forEach(a),Fe=u(e),ae=r(e,"P",{});var Ca=o(ae);ms=n(Ca,"Let\u2019s have a look at the features of the MRPC dataset from the GLUE benchmark:"),Ca.forEach(a),Ne=u(e),Y(I.$$.fragment,e),Se=u(e),q=r(e,"P",{});var Ke=o(q);_s=n(Ke,"The "),te=r(Ke,"A",{href:!0});var Aa=o(te);vs=n(Aa,"Value"),Aa.forEach(a),ys=n(Ke," feature tells \u{1F917} Datasets:"),Ke.forEach(a),Ve=u(e),P=r(e,"UL",{});var Xe=o(P);T=r(Xe,"LI",{});var de=o(T);gs=n(de,"The "),_e=r(de,"CODE",{});var Ta=o(_e);js=n(Ta,"idx"),Ta.forEach(a),bs=n(de," data type is "),ve=r(de,"CODE",{});var La=o(ve);xs=n(La,"int32"),La.forEach(a),Es=n(de,"."),de.forEach(a),$s=u(Xe),k=r(Xe,"LI",{});var S=o(k);ws=n(S,"The "),ye=r(S,"CODE",{});var qa=o(ye);Ds=n(qa,"sentence1"),qa.forEach(a),ks=n(S," and "),ge=r(S,"CODE",{});var Pa=o(ge);Cs=n(Pa,"sentence2"),Pa.forEach(a),As=n(S," data types are "),je=r(S,"CODE",{});var Oa=o(je);Ts=n(Oa,"string"),Oa.forEach(a),Ls=n(S,"."),S.forEach(a),Xe.forEach(a),Ie=u(e),w=r(e,"P",{});var V=o(w);qs=n(V,"\u{1F917} Datasets supports many other data types such as "),be=r(V,"CODE",{});var Fa=o(be);Ps=n(Fa,"bool"),Fa.forEach(a),Os=n(V,", "),xe=r(V,"CODE",{});var Na=o(xe);Fs=n(Na,"float32"),Na.forEach(a),Ns=n(V," and "),Ee=r(V,"CODE",{});var Sa=o(Ee);Ss=n(Sa,"binary"),Sa.forEach(a),Vs=n(V," to name just a few."),V.forEach(a),Re=u(e),Y(O.$$.fragment,e),Me=u(e),_=r(e,"P",{});var j=o(_);Is=n(j,"The "),ne=r(j,"A",{href:!0});var Va=o(ne);Rs=n(Va,"ClassLabel"),Va.forEach(a),Ms=n(j," feature informs \u{1F917} Datasets the "),$e=r(j,"CODE",{});var Ia=o($e);zs=n(Ia,"label"),Ia.forEach(a),Us=n(j," column contains two classes. The classes are labeled "),we=r(j,"CODE",{});var Ra=o(we);Ws=n(Ra,"not_equivalent"),Ra.forEach(a),Ys=n(j," and "),De=r(j,"CODE",{});var Ma=o(De);Bs=n(Ma,"equivalent"),Ma.forEach(a),Gs=n(j,". Labels are stored as integers in the dataset. When you retrieve the labels, "),le=r(j,"A",{href:!0});var za=o(le);Qs=n(za,"ClassLabel.int2str()"),za.forEach(a),Hs=n(j," and "),re=r(j,"A",{href:!0});var Ua=o(re);Js=n(Ua,"ClassLabel.str2int()"),Ua.forEach(a),Ks=n(j," carries out the conversion from integer value to label name, and vice versa."),j.forEach(a),ze=u(e),F=r(e,"P",{});var Ze=o(F);Xs=n(Ze,"If your data type contains a list of objects, then you want to use the "),oe=r(Ze,"A",{href:!0});var Wa=o(oe);Zs=n(Wa,"Sequence"),Wa.forEach(a),ea=n(Ze," feature. Remember the SQuAD dataset?"),Ze.forEach(a),Ue=u(e),Y(R.$$.fragment,e),We=u(e),v=r(e,"P",{});var b=o(v);sa=n(b,"The "),ke=r(b,"CODE",{});var Ya=o(ke);aa=n(Ya,"answers"),Ya.forEach(a),ta=n(b," field is constructed using the "),ie=r(b,"A",{href:!0});var Ba=o(ie);na=n(Ba,"Sequence"),Ba.forEach(a),la=n(b," feature because it contains two subfields, "),Ce=r(b,"CODE",{});var Ga=o(Ce);ra=n(Ga,"text"),Ga.forEach(a),oa=n(b," and "),Ae=r(b,"CODE",{});var Qa=o(Ae);ia=n(Qa,"answer_start"),Qa.forEach(a),pa=n(b,", which are lists of "),Te=r(b,"CODE",{});var Ha=o(Te);ca=n(Ha,"string"),Ha.forEach(a),fa=n(b," and "),Le=r(b,"CODE",{});var Ja=o(Le);ha=n(Ja,"int32"),Ja.forEach(a),da=n(b,", respectively."),b.forEach(a),Ye=u(e),Y(N.$$.fragment,e),Be=u(e),A=r(e,"P",{});var ue=o(A);ua=n(ue,"The array feature type is useful for creating arrays of various sizes. You can create arrays with two dimensions using "),pe=r(ue,"A",{href:!0});var Ka=o(pe);ma=n(Ka,"Array2D"),Ka.forEach(a),_a=n(ue,", and even arrays with five dimensions using "),ce=r(ue,"A",{href:!0});var Xa=o(ce);va=n(Xa,"Array5D"),Xa.forEach(a),ya=n(ue,"."),ue.forEach(a),Ge=u(e),Y(M.$$.fragment,e),Qe=u(e),fe=r(e,"P",{});var Za=o(fe);ga=n(Za,"The array type also allows the first dimension of the array to be dynamic. This is useful for handling sequences with variable lengths such as sentences, without having to pad or truncate the input to a uniform shape."),Za.forEach(a),He=u(e),Y(z.$$.fragment,e),this.h()},h(){h(c,"name","hf:doc:metadata"),h(c,"content",JSON.stringify(ct)),h(g,"id","dataset-features"),h(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(g,"href","#dataset-features"),h(f,"class","relative group"),h(K,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.Features"),h(X,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.Features"),h(Z,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.ClassLabel"),h(ee,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.Features"),h(se,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.Features"),h(te,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.Value"),h(ne,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.ClassLabel"),h(le,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.ClassLabel.int2str"),h(re,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.ClassLabel.str2int"),h(oe,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.Sequence"),h(ie,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.Sequence"),h(pe,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.Array2D"),h(ce,"href","/docs/datasets/pr_4145/en/package_reference/main_classes#datasets.Array5D")},m(e,i){s(document.head,c),p(e,$,i),p(e,f,i),s(f,g),s(g,x),B(m,x,null),s(f,y),s(f,D),s(D,ss),p(e,Pe,i),p(e,E,i),s(E,K),s(K,as),s(E,ts),s(E,X),s(X,ns),s(E,ls),s(E,Z),s(Z,rs),s(E,os),s(E,ee),s(ee,is),s(E,ps),p(e,Oe,i),p(e,C,i),s(C,cs),s(C,se),s(se,fs),s(C,hs),s(C,me),s(me,ds),s(C,us),p(e,Fe,i),p(e,ae,i),s(ae,ms),p(e,Ne,i),B(I,e,i),p(e,Se,i),p(e,q,i),s(q,_s),s(q,te),s(te,vs),s(q,ys),p(e,Ve,i),p(e,P,i),s(P,T),s(T,gs),s(T,_e),s(_e,js),s(T,bs),s(T,ve),s(ve,xs),s(T,Es),s(P,$s),s(P,k),s(k,ws),s(k,ye),s(ye,Ds),s(k,ks),s(k,ge),s(ge,Cs),s(k,As),s(k,je),s(je,Ts),s(k,Ls),p(e,Ie,i),p(e,w,i),s(w,qs),s(w,be),s(be,Ps),s(w,Os),s(w,xe),s(xe,Fs),s(w,Ns),s(w,Ee),s(Ee,Ss),s(w,Vs),p(e,Re,i),B(O,e,i),p(e,Me,i),p(e,_,i),s(_,Is),s(_,ne),s(ne,Rs),s(_,Ms),s(_,$e),s($e,zs),s(_,Us),s(_,we),s(we,Ws),s(_,Ys),s(_,De),s(De,Bs),s(_,Gs),s(_,le),s(le,Qs),s(_,Hs),s(_,re),s(re,Js),s(_,Ks),p(e,ze,i),p(e,F,i),s(F,Xs),s(F,oe),s(oe,Zs),s(F,ea),p(e,Ue,i),B(R,e,i),p(e,We,i),p(e,v,i),s(v,sa),s(v,ke),s(ke,aa),s(v,ta),s(v,ie),s(ie,na),s(v,la),s(v,Ce),s(Ce,ra),s(v,oa),s(v,Ae),s(Ae,ia),s(v,pa),s(v,Te),s(Te,ca),s(v,fa),s(v,Le),s(Le,ha),s(v,da),p(e,Ye,i),B(N,e,i),p(e,Be,i),p(e,A,i),s(A,ua),s(A,pe),s(pe,ma),s(A,_a),s(A,ce),s(ce,va),s(A,ya),p(e,Ge,i),B(M,e,i),p(e,Qe,i),p(e,fe,i),s(fe,ga),p(e,He,i),B(z,e,i),Je=!0},p(e,[i]){const U={};i&2&&(U.$$scope={dirty:i,ctx:e}),O.$set(U);const qe={};i&2&&(qe.$$scope={dirty:i,ctx:e}),N.$set(qe)},i(e){Je||(G(m.$$.fragment,e),G(I.$$.fragment,e),G(O.$$.fragment,e),G(R.$$.fragment,e),G(N.$$.fragment,e),G(M.$$.fragment,e),G(z.$$.fragment,e),Je=!0)},o(e){Q(m.$$.fragment,e),Q(I.$$.fragment,e),Q(O.$$.fragment,e),Q(R.$$.fragment,e),Q(N.$$.fragment,e),Q(M.$$.fragment,e),Q(z.$$.fragment,e),Je=!1},d(e){a(c),e&&a($),e&&a(f),H(m),e&&a(Pe),e&&a(E),e&&a(Oe),e&&a(C),e&&a(Fe),e&&a(ae),e&&a(Ne),H(I,e),e&&a(Se),e&&a(q),e&&a(Ve),e&&a(P),e&&a(Ie),e&&a(w),e&&a(Re),H(O,e),e&&a(Me),e&&a(_),e&&a(ze),e&&a(F),e&&a(Ue),H(R,e),e&&a(We),e&&a(v),e&&a(Ye),H(N,e),e&&a(Be),e&&a(A),e&&a(Ge),H(M,e),e&&a(Qe),e&&a(fe),e&&a(He),H(z,e)}}}const ct={local:"dataset-features",title:"Dataset features"};function ft(J){return lt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _t extends st{constructor(c){super();at(this,c,ft,pt,tt,{})}}export{_t as default,ct as metadata};
