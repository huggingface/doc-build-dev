import{S as St,i as Nt,s as Ot,e as o,k as _,w as wt,t as r,M as Dt,c as l,d as s,m as q,a,x as yt,h as n,b as k,F as e,g as u,y as Lt,q as Tt,o as It,B as zt,v as Rt}from"../../chunks/vendor-1e8b365d.js";import{T as jt}from"../../chunks/Tip-62b14c6e.js";import{I as Ft}from"../../chunks/IconCopyLink-483c28ba.js";function Gt(se){let d,b,h,v;return{c(){d=r("\u26A0\uFE0F Afin de b\xE9n\xE9ficier de toutes les fonctionnalit\xE9s disponibles avec le Model Hub et le \u{1F917} *Transformers*, nous vous recommandons "),b=o("a"),h=r("de cr\xE9er un compte"),v=r("."),this.h()},l(c){d=n(c,"\u26A0\uFE0F Afin de b\xE9n\xE9ficier de toutes les fonctionnalit\xE9s disponibles avec le Model Hub et le \u{1F917} *Transformers*, nous vous recommandons "),b=l(c,"A",{href:!0});var m=a(b);h=n(m,"de cr\xE9er un compte"),m.forEach(s),v=n(c,"."),this.h()},h(){k(b,"href","https://huggingface.co/join")},m(c,m){u(c,d,m),u(c,b,m),e(b,h),u(c,v,m)},d(c){c&&s(d),c&&s(b),c&&s(v)}}}function Ht(se){let d,b,h,v,c,m,me,D,pe,re,g,fe,L,he,ve,R,be,Ee,ne,x,_e,j,qe,ge,F,xe,$e,oe,$,T,G,Pe,Ae,Me,E,H,ke,Ce,U,we,ye,B,Le,Te,J,Ie,ze,Se,I,K,Ne,Oe,le,C,De,Q,Re,je,ae,p,Fe,V,Ge,He,W,Ue,Be,z,Je,Ke,X,Qe,Ve,ie,f,We,Y,Xe,Ye,Z,Ze,et,ee,tt,st,te,rt,nt,ue,w,ce;return m=new Ft({}),w=new jt({props:{$$slots:{default:[Gt]},$$scope:{ctx:se}}}),{c(){d=o("meta"),b=_(),h=o("h1"),v=o("a"),c=o("span"),wt(m.$$.fragment),me=_(),D=o("span"),pe=r("Introduction"),re=_(),g=o("p"),fe=r("Comme vous l\u2019avez vu dans le "),L=o("a"),he=r("Chapitre 1"),ve=r(", les "),R=o("em"),be=r("transformers"),Ee=r(" sont g\xE9n\xE9ralement tr\xE8s grands. Pouvant aller de plusieurs millions \xE0 des dizaines de milliards de param\xE8tres, l\u2019entra\xEEnement et le d\xE9ploiement de ces mod\xE8les est une entreprise compliqu\xE9e. De plus, avec de nouveaux mod\xE8les publi\xE9s presque quotidiennement et ayant chacun sa propre impl\xE9mentation, les essayer tous n\u2019est pas une t\xE2che facile."),ne=_(),x=o("p"),_e=r("La biblioth\xE8que \u{1F917} "),j=o("em"),qe=r("Transformers"),ge=r(" a \xE9t\xE9 cr\xE9\xE9e pour r\xE9soudre ce probl\xE8me. Son objectif est de fournir une API unique \xE0 travers laquelle tout mod\xE8le de "),F=o("em"),xe=r("transformers"),$e=r(" peut \xEAtre charg\xE9, entra\xEEn\xE9 et sauvegard\xE9. Les principales caract\xE9ristiques de la biblioth\xE8que sont :"),oe=_(),$=o("ul"),T=o("li"),G=o("strong"),Pe=r("la facilit\xE9 d\u2019utilisation"),Ae=r(" : en seulement deux lignes de code il est possible de t\xE9l\xE9charger, charger et utiliser un mod\xE8le de NLP \xE0 l\u2019\xE9tat de l\u2019art pour faire de l\u2019inf\xE9rence,"),Me=_(),E=o("li"),H=o("strong"),ke=r("la flexibilit\xE9"),Ce=r(" : au fond, tous les mod\xE8les sont de simples classes PyTorch "),U=o("code"),we=r("nn.Module"),ye=r(" ou TensorFlow "),B=o("code"),Le=r("tf.keras.Model"),Te=r(" et peuvent \xEAtre manipul\xE9s comme n\u2019importe quel autre mod\xE8le dans leurs "),J=o("em"),Ie=r("frameworks"),ze=r(" d\u2019apprentissage automatique respectifs,"),Se=_(),I=o("li"),K=o("strong"),Ne=r("la simplicit\xE9"),Oe=r(" : pratiquement aucune abstraction n\u2019est faite dans la biblioth\xE8que. Avoir tout dans un fichier est un concept central : la passe avant d\u2019un mod\xE8le est enti\xE8rement d\xE9finie dans un seul fichier afin que le code lui-m\xEAme soit compr\xE9hensible et piratable."),le=_(),C=o("p"),De=r("Cette derni\xE8re caract\xE9ristique rend \u{1F917} "),Q=o("em"),Re=r("Transformers"),je=r(` tr\xE8s diff\xE9rent des autres biblioth\xE8ques d\u2019apprentissage automatique.
Les mod\xE8les ne sont pas construits sur des modules partag\xE9s entre plusieurs fichiers. Au lieu de cela, chaque mod\xE8le poss\xE8de ses propres couches.
En plus de rendre les mod\xE8les plus accessibles et compr\xE9hensibles, cela vous permet d\u2019exp\xE9rimenter des choses facilement sur un mod\xE8le sans affecter les autres.`),ae=_(),p=o("p"),Fe=r("Ce chapitre commence par un exemple de bout en bout o\xF9 nous utilisons un mod\xE8le et un "),V=o("em"),Ge=r("tokenizer"),He=r(" ensemble pour reproduire la fonction "),W=o("code"),Ue=r("pipeline()"),Be=r(" introduite dans le "),z=o("a"),Je=r("Chapitre 1"),Ke=r(`.
Ensuite, nous aborderons l\u2019API `),X=o("em"),Qe=r("model"),Ve=r(" : nous nous plongerons dans les classes de mod\xE8le et de configuration, nous verrons comment charger un mod\xE8le et enfin comment il traite les entr\xE9es num\xE9riques pour produire des pr\xE9dictions."),ie=_(),f=o("p"),We=r("Nous examinerons ensuite l\u2019API "),Y=o("em"),Xe=r("tokenizer"),Ye=r(" qui est l\u2019autre composant principal de la fonction "),Z=o("code"),Ze=r("pipeline()"),et=r(`.
Les `),ee=o("em"),tt=r("tokenizers"),st=r(` s\u2019occupent de la premi\xE8re et de la derni\xE8re \xE9tape du traitement en g\xE9rant la conversion du texte en entr\xE9es num\xE9riques pour le r\xE9seau neuronal et la reconversion en texte lorsqu\u2019elle est n\xE9cessaire.
Enfin, nous montrerons comment g\xE9rer l\u2019envoi de plusieurs phrases \xE0 travers un mod\xE8le dans un batch pr\xE9par\xE9 et nous conclurons le tout en examinant de plus pr\xE8s la fonction `),te=o("code"),rt=r("tokenizer()"),nt=r("."),ue=_(),wt(w.$$.fragment),this.h()},l(t){const i=Dt('[data-svelte="svelte-1phssyn"]',document.head);d=l(i,"META",{name:!0,content:!0}),i.forEach(s),b=q(t),h=l(t,"H1",{class:!0});var y=a(h);v=l(y,"A",{id:!0,class:!0,href:!0});var at=a(v);c=l(at,"SPAN",{});var it=a(c);yt(m.$$.fragment,it),it.forEach(s),at.forEach(s),me=q(y),D=l(y,"SPAN",{});var ut=a(D);pe=n(ut,"Introduction"),ut.forEach(s),y.forEach(s),re=q(t),g=l(t,"P",{});var S=a(g);fe=n(S,"Comme vous l\u2019avez vu dans le "),L=l(S,"A",{href:!0});var ct=a(L);he=n(ct,"Chapitre 1"),ct.forEach(s),ve=n(S,", les "),R=l(S,"EM",{});var dt=a(R);be=n(dt,"transformers"),dt.forEach(s),Ee=n(S," sont g\xE9n\xE9ralement tr\xE8s grands. Pouvant aller de plusieurs millions \xE0 des dizaines de milliards de param\xE8tres, l\u2019entra\xEEnement et le d\xE9ploiement de ces mod\xE8les est une entreprise compliqu\xE9e. De plus, avec de nouveaux mod\xE8les publi\xE9s presque quotidiennement et ayant chacun sa propre impl\xE9mentation, les essayer tous n\u2019est pas une t\xE2che facile."),S.forEach(s),ne=q(t),x=l(t,"P",{});var N=a(x);_e=n(N,"La biblioth\xE8que \u{1F917} "),j=l(N,"EM",{});var mt=a(j);qe=n(mt,"Transformers"),mt.forEach(s),ge=n(N," a \xE9t\xE9 cr\xE9\xE9e pour r\xE9soudre ce probl\xE8me. Son objectif est de fournir une API unique \xE0 travers laquelle tout mod\xE8le de "),F=l(N,"EM",{});var pt=a(F);xe=n(pt,"transformers"),pt.forEach(s),$e=n(N," peut \xEAtre charg\xE9, entra\xEEn\xE9 et sauvegard\xE9. Les principales caract\xE9ristiques de la biblioth\xE8que sont :"),N.forEach(s),oe=q(t),$=l(t,"UL",{});var O=a($);T=l(O,"LI",{});var ot=a(T);G=l(ot,"STRONG",{});var ft=a(G);Pe=n(ft,"la facilit\xE9 d\u2019utilisation"),ft.forEach(s),Ae=n(ot," : en seulement deux lignes de code il est possible de t\xE9l\xE9charger, charger et utiliser un mod\xE8le de NLP \xE0 l\u2019\xE9tat de l\u2019art pour faire de l\u2019inf\xE9rence,"),ot.forEach(s),Me=q(O),E=l(O,"LI",{});var M=a(E);H=l(M,"STRONG",{});var ht=a(H);ke=n(ht,"la flexibilit\xE9"),ht.forEach(s),Ce=n(M," : au fond, tous les mod\xE8les sont de simples classes PyTorch "),U=l(M,"CODE",{});var vt=a(U);we=n(vt,"nn.Module"),vt.forEach(s),ye=n(M," ou TensorFlow "),B=l(M,"CODE",{});var bt=a(B);Le=n(bt,"tf.keras.Model"),bt.forEach(s),Te=n(M," et peuvent \xEAtre manipul\xE9s comme n\u2019importe quel autre mod\xE8le dans leurs "),J=l(M,"EM",{});var Et=a(J);Ie=n(Et,"frameworks"),Et.forEach(s),ze=n(M," d\u2019apprentissage automatique respectifs,"),M.forEach(s),Se=q(O),I=l(O,"LI",{});var lt=a(I);K=l(lt,"STRONG",{});var _t=a(K);Ne=n(_t,"la simplicit\xE9"),_t.forEach(s),Oe=n(lt," : pratiquement aucune abstraction n\u2019est faite dans la biblioth\xE8que. Avoir tout dans un fichier est un concept central : la passe avant d\u2019un mod\xE8le est enti\xE8rement d\xE9finie dans un seul fichier afin que le code lui-m\xEAme soit compr\xE9hensible et piratable."),lt.forEach(s),O.forEach(s),le=q(t),C=l(t,"P",{});var de=a(C);De=n(de,"Cette derni\xE8re caract\xE9ristique rend \u{1F917} "),Q=l(de,"EM",{});var qt=a(Q);Re=n(qt,"Transformers"),qt.forEach(s),je=n(de,` tr\xE8s diff\xE9rent des autres biblioth\xE8ques d\u2019apprentissage automatique.
Les mod\xE8les ne sont pas construits sur des modules partag\xE9s entre plusieurs fichiers. Au lieu de cela, chaque mod\xE8le poss\xE8de ses propres couches.
En plus de rendre les mod\xE8les plus accessibles et compr\xE9hensibles, cela vous permet d\u2019exp\xE9rimenter des choses facilement sur un mod\xE8le sans affecter les autres.`),de.forEach(s),ae=q(t),p=l(t,"P",{});var P=a(p);Fe=n(P,"Ce chapitre commence par un exemple de bout en bout o\xF9 nous utilisons un mod\xE8le et un "),V=l(P,"EM",{});var gt=a(V);Ge=n(gt,"tokenizer"),gt.forEach(s),He=n(P," ensemble pour reproduire la fonction "),W=l(P,"CODE",{});var xt=a(W);Ue=n(xt,"pipeline()"),xt.forEach(s),Be=n(P," introduite dans le "),z=l(P,"A",{href:!0});var $t=a(z);Je=n($t,"Chapitre 1"),$t.forEach(s),Ke=n(P,`.
Ensuite, nous aborderons l\u2019API `),X=l(P,"EM",{});var Pt=a(X);Qe=n(Pt,"model"),Pt.forEach(s),Ve=n(P," : nous nous plongerons dans les classes de mod\xE8le et de configuration, nous verrons comment charger un mod\xE8le et enfin comment il traite les entr\xE9es num\xE9riques pour produire des pr\xE9dictions."),P.forEach(s),ie=q(t),f=l(t,"P",{});var A=a(f);We=n(A,"Nous examinerons ensuite l\u2019API "),Y=l(A,"EM",{});var At=a(Y);Xe=n(At,"tokenizer"),At.forEach(s),Ye=n(A," qui est l\u2019autre composant principal de la fonction "),Z=l(A,"CODE",{});var Mt=a(Z);Ze=n(Mt,"pipeline()"),Mt.forEach(s),et=n(A,`.
Les `),ee=l(A,"EM",{});var kt=a(ee);tt=n(kt,"tokenizers"),kt.forEach(s),st=n(A,` s\u2019occupent de la premi\xE8re et de la derni\xE8re \xE9tape du traitement en g\xE9rant la conversion du texte en entr\xE9es num\xE9riques pour le r\xE9seau neuronal et la reconversion en texte lorsqu\u2019elle est n\xE9cessaire.
Enfin, nous montrerons comment g\xE9rer l\u2019envoi de plusieurs phrases \xE0 travers un mod\xE8le dans un batch pr\xE9par\xE9 et nous conclurons le tout en examinant de plus pr\xE8s la fonction `),te=l(A,"CODE",{});var Ct=a(te);rt=n(Ct,"tokenizer()"),Ct.forEach(s),nt=n(A,"."),A.forEach(s),ue=q(t),yt(w.$$.fragment,t),this.h()},h(){k(d,"name","hf:doc:metadata"),k(d,"content",JSON.stringify(Ut)),k(v,"id","introduction"),k(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(v,"href","#introduction"),k(h,"class","relative group"),k(L,"href","/course/fr/chapter1"),k(z,"href","/course/chapter1")},m(t,i){e(document.head,d),u(t,b,i),u(t,h,i),e(h,v),e(v,c),Lt(m,c,null),e(h,me),e(h,D),e(D,pe),u(t,re,i),u(t,g,i),e(g,fe),e(g,L),e(L,he),e(g,ve),e(g,R),e(R,be),e(g,Ee),u(t,ne,i),u(t,x,i),e(x,_e),e(x,j),e(j,qe),e(x,ge),e(x,F),e(F,xe),e(x,$e),u(t,oe,i),u(t,$,i),e($,T),e(T,G),e(G,Pe),e(T,Ae),e($,Me),e($,E),e(E,H),e(H,ke),e(E,Ce),e(E,U),e(U,we),e(E,ye),e(E,B),e(B,Le),e(E,Te),e(E,J),e(J,Ie),e(E,ze),e($,Se),e($,I),e(I,K),e(K,Ne),e(I,Oe),u(t,le,i),u(t,C,i),e(C,De),e(C,Q),e(Q,Re),e(C,je),u(t,ae,i),u(t,p,i),e(p,Fe),e(p,V),e(V,Ge),e(p,He),e(p,W),e(W,Ue),e(p,Be),e(p,z),e(z,Je),e(p,Ke),e(p,X),e(X,Qe),e(p,Ve),u(t,ie,i),u(t,f,i),e(f,We),e(f,Y),e(Y,Xe),e(f,Ye),e(f,Z),e(Z,Ze),e(f,et),e(f,ee),e(ee,tt),e(f,st),e(f,te),e(te,rt),e(f,nt),u(t,ue,i),Lt(w,t,i),ce=!0},p(t,[i]){const y={};i&2&&(y.$$scope={dirty:i,ctx:t}),w.$set(y)},i(t){ce||(Tt(m.$$.fragment,t),Tt(w.$$.fragment,t),ce=!0)},o(t){It(m.$$.fragment,t),It(w.$$.fragment,t),ce=!1},d(t){s(d),t&&s(b),t&&s(h),zt(m),t&&s(re),t&&s(g),t&&s(ne),t&&s(x),t&&s(oe),t&&s($),t&&s(le),t&&s(C),t&&s(ae),t&&s(p),t&&s(ie),t&&s(f),t&&s(ue),zt(w,t)}}}const Ut={local:"introduction",title:"Introduction"};function Bt(se){return Rt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vt extends St{constructor(d){super();Nt(this,d,Bt,Ht,Ot,{})}}export{Vt as default,Ut as metadata};
