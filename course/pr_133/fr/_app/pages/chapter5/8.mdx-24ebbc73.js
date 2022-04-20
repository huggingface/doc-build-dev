import{S as ua,i as pa,s as ca,e as a,k as u,w as m,t as c,M as da,c as r,d as t,m as p,a as o,x as h,h as d,b as i,F as s,g as l,y as f,L as ma,q as v,o as $,B as q,v as ha}from"../../chunks/vendor-1e8b365d.js";import{I as g}from"../../chunks/IconCopyLink-483c28ba.js";import{C as la}from"../../chunks/CodeBlock-e5764662.js";import{Q as x}from"../../chunks/Question-31426fe2.js";function fa(ys){let _,Je,w,D,ye,F,Ut,Ee,Ht,Ke,ge,Mt,We,xe,Qt,Xe,y,U,be,J,Rt,E,It,je,Tt,Ot,Ce,Gt,Vt,Ye,K,Ze,b,H,Pe,W,Bt,ze,Ft,et,X,tt,M,Jt,ke,Kt,Wt,st,Y,at,j,Q,Ae,Z,Xt,C,Yt,Se,Zt,es,Ne,ts,ss,rt,ee,nt,P,R,Le,te,as,se,rs,De,ns,os,ot,ae,it,z,I,Ue,re,is,ne,ls,He,us,ps,lt,oe,ut,k,T,Me,ie,cs,Qe,ds,pt,le,ct,ue,dt,A,O,Re,pe,ms,Ie,hs,mt,ce,ht,S,G,Te,de,fs,Oe,vs,ft,me,vt,N,V,Ge,he,$s,Ve,qs,$t,fe,qt,L,B,Be,ve,gs,$e,xs,Fe,_s,ws,gt,qe,xt;return F=new g({}),J=new g({}),K=new x({props:{choices:[{text:"Localement, par exemple depuis son ordinateur portable",explain:"Correct ! Vous pouvez passer les chemins des fichiers locaux \xE0 l'argument <code>data_files</code> de <code>load_dataset()</code> pour charger les jeux de donn\xE9es locaux.",correct:!0},{text:"Le <i>Hub></i> d\u2019Hugging Face",explain:"Correct ! Vous pouvez charger des jeux de donn\xE9es sur le <i>Hub></i>  en fournissant l'ID du jeu de donn\xE9es. Par exemple : <code>load_dataset('emotion')</code>.",correct:!0},{text:"Un serveur distant",explain:"Correct ! Vous pouvez passer des URLs \xE0 l'argument <code>data_files</code> de <code>load_dataset()</code> pour charger des fichiers distants.",correct:!0}]}}),W=new g({}),X=new la({props:{code:`from datasets import load_dataset

dataset = load_dataset("glue", "mrpc", split="train")`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

dataset = load_dataset(<span class="hljs-string">&quot;glue&quot;</span>, <span class="hljs-string">&quot;mrpc&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)`}}),Y=new x({props:{choices:[{text:"<code>dataset.sample(50)</code>",explain:"Ceci est incorrect, il n'y a pas de m\xE9thode <code>Dataset.sample()</code>."},{text:"<code>dataset.shuffle().select(range(50))</code>",explain:"Correct ! Comme vous l'avez vu dans ce chapitre, vous m\xE9langez d'abord le jeu de donn\xE9es puis s\xE9lectionnez les \xE9chantillons \xE0 partir de celui-ci.",correct:!0},{text:"<code>dataset.select(range(50)).shuffle()</code>",explain:"Ceci est incorrect. Bien que le code s'ex\xE9cute, il ne m\xE9lange que les 50 premiers \xE9l\xE9ments du jeu de donn\xE9es."}]}}),Z=new g({}),ee=new x({props:{choices:[{text:"<code>pets_dataset.filter(lambda x : x['name'].startswith('L'))</code>",explain:"Correct ! L'utilisation d'une fonction Python lambda pour ces filtres rapides est une excellente id\xE9e. Pouvez-vous penser \xE0 une autre solution ?",correct:!0},{text:"<code>pets_dataset.filter(lambda x['name'].startswith('L'))</code>",explain:"Ceci est incorrect. Une fonction lambda prend la forme g\xE9n\xE9rale <code>lambda *arguments* : *expression*</code>, vous devez donc fournir des arguments dans ce cas."},{text:"Cr\xE9er une fonction comme <code>def filter_names(x): return x['name'].startswith('L')</code> et ex\xE9cuter <code>pets_dataset.filter(filter_names)</code>.",explain:"Correct ! Tout comme avec <code>Dataset.map()</code>, vous pouvez passer des fonctions explicites \xE0 <code>Dataset.filter()</code>. Ceci est utile lorsque vous avez une logique complexe qui ne convient pas \xE0 une fonction lambda courte. Parmi les autres solutions, laquelle fonctionnerait ?",correct:!0}]}}),te=new g({}),ae=new x({props:{choices:[{text:"Un <i>mapping</i> entre la RAM CPU et GPU",explain:"Ce n'est pas \xE7a, r\xE9essayez !"},{text:"Un <i>mappaging</i> entre la RAM et le stockage du syst\xE8me de fichiers",explain:"Correct ! \u{1F917} <i>Datasets</i> traite chaque jeu de donn\xE9es comme un fichier mapp\xE9 en m\xE9moire. Cela permet \xE0 la biblioth\xE8que d'acc\xE9der et d'op\xE9rer sur des \xE9l\xE9ments du jeu de donn\xE9es sans avoir \xE0 le charger compl\xE8tement en m\xE9moire.",correct:!0},{text:"Un <i>mappaging</i> entre deux fichiers dans le cache \u{1F917} <i>Datasets</i>",explain:"Ce n'est pas correct, r\xE9essayez !"}]}}),re=new g({}),oe=new x({props:{choices:[{text:"L'acc\xE8s aux fichiers mapp\xE9s en m\xE9moire est plus rapide que la lecture ou l'\xE9criture sur le disque.",explain:"Correct ! Cela permet \xE0 \u{1F917} <i>Datasets</i> d'\xEAtre extr\xEAmement rapide. Ce n'est cependant pas le seul avantage.",correct:!0},{text:"Les applications peuvent acc\xE9der \xE0 des segments de donn\xE9es dans un fichier extr\xEAmement volumineux sans avoir \xE0 lire tout le fichier dans la RAM au pr\xE9alable.",explain:"Correct ! Cela permet \xE0 \u{1F917} <i>Datasets</i> de charger des jeux de donn\xE9es de plusieurs Go sur votre ordinateur portable sans faire exploser votre CPU. Quel autre avantage cette technique offre-t-elle ?",correct:!0},{text:"Cela consomme moins d'\xE9nergie, donc votre batterie dure plus longtemps.",explain:"Ce n'est pas correct, r\xE9essayez !"}]}}),ie=new g({}),le=new la({props:{code:`from datasets import load_dataset

dataset = load_dataset("allocine", streaming=True, split="train")
dataset[0]`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

dataset = load_dataset(<span class="hljs-string">&quot;allocine&quot;</span>, streaming=<span class="hljs-literal">True</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
dataset[<span class="hljs-number">0</span>]`}}),ue=new x({props:{choices:[{text:"Il essaie de streamer un jeu de donn\xE9es trop volumineux pour tenir dans la RAM.",explain:"Ce n'est pas correct : les jeux de donn\xE9es stream\xE9s sont d\xE9compress\xE9s \xE0 la vol\xE9e et vous pouvez en traiter de donn\xE9es de la taille d'un To avec tr\xE8s peu de RAM !"},{text:"Il essaie d'acc\xE9der \xE0 un <code>IterableDataset</code>.",explain:"Correct! Un <code>IterableDataset</code> est un g\xE9n\xE9rateur, pas un conteneur. Vous devez donc acc\xE9der \xE0 ses \xE9l\xE9ments en utilisant <code>next(iter(dataset))</code>.",correct:!0},{text:"Le jeu de donn\xE9es <code>allocine</code> n'a pas d\u2019\xE9chantillon <code>train</code>.",explain:"Ceci est incorrect. Consultez la [fiche d\u2019 <code>allocine</code>](https://huggingface.co/datasets/allocine) sur le <i>Hub</i> pour voir quels \xE9chantillons il contient."}]}}),pe=new g({}),ce=new x({props:{choices:[{text:"Elle fournit des informations sur l'utilisation pr\xE9vue ainsi que les t\xE2ches prises en charge de jeu de donn\xE9es. Le but est que d'autres membres de la communaut\xE9 puissent prendre une d\xE9cision \xE9clair\xE9e quant \xE0 son utilisation.",explain:"Correct ! Les jeux de donn\xE9es non document\xE9s peuvent \xEAtre utilis\xE9s pour entra\xEEner des mod\xE8les pouvant ne pas refl\xE9ter les intentions des cr\xE9ateurs du jeu de donn\xE9es ou peuvent produire des mod\xE8les dont le statut juridique est trouble s'ils sont entra\xEEn\xE9s sur des donn\xE9es qui violent la confidentialit\xE9 ou les restrictions de licence. Cependant ce n'est pas le seul avantage !",correct:!0},{text:"Elle permet d'attirer l'attention sur les biais pr\xE9sents dans un corpus.",explain:"Correct ! Presque tous les jeux de donn\xE9es pr\xE9sentent une forme de biais, ce qui peut avoir des cons\xE9quences n\xE9gatives en aval. En \xEAtre conscient aide les constructeurs de mod\xE8les \xE0 comprendre comment traiter les biais inh\xE9rents. \xC0 quoi d'autre les fiches sont-elles utiles ?",correct:!0},{text:"Cela augmente les chances que d'autres membres de la communaut\xE9 utilisent mon jeu de donn\xE9es.",explain:"Correct ! Une carte de jeu de donn\xE9es bien r\xE9dig\xE9e aura tendance \xE0 conduire \xE0 une utilisation accrue de votre jeu de donn\xE9es. Quels autres avantages offre-t-elle ?",correct:!0}]}}),de=new g({}),me=new x({props:{choices:[{text:"Un moyen de rechercher des correspondances exactes entre les mots d'une requ\xEAte et les documents d'un corpus",explain:"C'est incorrect. Ce type de recherche est appel\xE9 *recherche lexicale* et c'est ce que vous voyez g\xE9n\xE9ralement avec les moteurs de recherche traditionnels."},{text:"Un moyen de rechercher des documents correspondants en comprenant la signification contextuelle d'une requ\xEAte",explain:"Correct ! La recherche s\xE9mantique utilise des vecteurs d\u2019ench\xE2ssement pour repr\xE9senter les requ\xEAtes et les documents. Elle utilise ensuite une m\xE9trique de similarit\xE9 pour mesurer la quantit\xE9 de chevauchement entre eux. Comment la d\xE9crire autrement ?",correct:!0},{text:"Un moyen d'am\xE9liorer la pr\xE9cision de la recherche",explain:"Correct ! Les moteurs de recherche s\xE9mantique peuvent capturer l'intention d'une requ\xEAte bien mieux que la correspondance des mots cl\xE9s et r\xE9cup\xE8rent g\xE9n\xE9ralement les documents avec une plus grande pr\xE9cision. Mais ce n'est pas la seule bonne r\xE9ponse. Qu'est-ce que la recherche s\xE9mantique apporte d'autre ?",correct:!0}]}}),he=new g({}),fe=new x({props:{choices:[{text:"Une requ\xEAte courte et un paragraphe plus long qui r\xE9pond \xE0 la requ\xEAte",explain:"Correct !",correct:!0},{text:"Requ\xEAtes et paragraphes qui sont \xE0 peu pr\xE8s de la m\xEAme longueur",explain:"Il s'agit en fait d'un exemple de recherche s\xE9mantique sym\xE9trique. R\xE9essayez !"},{text:"Une longue requ\xEAte et un paragraphe plus court qui r\xE9pond \xE0 la requ\xEAte",explain:"Ceci est incorrect . R\xE9essayez !"}]}}),ve=new g({}),qe=new x({props:{choices:[{text:"Non",explain:"Ceci est incorrect. \u{1F917} <i>Datasets</i> prend actuellement en charge les donn\xE9es tabulaires, l'audio et la vision par ordinateur. Consultez le jeu de donn\xE9es<a href='https://huggingface.co/datasets/mnist'>MNIST</a> sur le <i>Hub</i> pour un exemple de vision par ordinateur."},{text:"Oui",explain:"Correct ! D\xE9couvrez les d\xE9veloppements passionnants concernant la parole et la vision dans la biblioth\xE8que \u{1F917} <i>Transformers</i> pour voir comment \u{1F917} <i>Datasets</i> est utilis\xE9 dans ces domaines.",correct:!0}]}}),{c(){_=a("meta"),Je=u(),w=a("h1"),D=a("a"),ye=a("span"),m(F.$$.fragment),Ut=u(),Ee=a("span"),Ht=c("Quiz de fin de chapitre"),Ke=u(),ge=a("p"),Mt=c("Ce chapitre a couvert beaucoup de terrain ! Ne vous inqui\xE9tez pas si vous n\u2019avez pas saisi tous les d\xE9tails, les chapitres suivants vous aideront \xE0 comprendre comment les choses fonctionnent sous le capot."),We=u(),xe=a("p"),Qt=c("Avant de poursuivre, testons ce que vous avez appris dans ce chapitre."),Xe=u(),y=a("h3"),U=a("a"),be=a("span"),m(J.$$.fragment),Rt=u(),E=a("span"),It=c("1. La fonction "),je=a("code"),Tt=c("load_dataset()"),Ot=c(" dans \u{1F917} "),Ce=a("em"),Gt=c("Datasets"),Vt=c(" vous permet de charger un jeu de donn\xE9es depuis lequel des emplacements suivants ?"),Ye=u(),m(K.$$.fragment),Ze=u(),b=a("h3"),H=a("a"),Pe=a("span"),m(W.$$.fragment),Bt=u(),ze=a("span"),Ft=c("2. Supposons que vous chargiez l\u2019une des t\xE2ches du jeu de donn\xE9es GLUE comme suit :"),et=u(),m(X.$$.fragment),tt=u(),M=a("p"),Jt=c("Laquelle des commandes suivantes produira un \xE9chantillon al\xE9atoire de 50 \xE9l\xE9ments \xE0 partir de "),ke=a("code"),Kt=c("dataset"),Wt=c(" ?"),st=u(),m(Y.$$.fragment),at=u(),j=a("h3"),Q=a("a"),Ae=a("span"),m(Z.$$.fragment),Xt=u(),C=a("span"),Yt=c("3. Supposons que vous disposiez d\u2019un jeu de donn\xE9es sur les animaux domestiques appel\xE9 "),Se=a("code"),Zt=c("pets_dataset"),es=c(" qui comporte une colonne "),Ne=a("code"),ts=c("name"),ss=c(" indiquant le nom de chaque animal. Parmi les approches suivantes, laquelle vous permettrait de filtrer le jeu de donn\xE9es pour tous les animaux dont le nom commence par la lettre \xAB L \xBB ?"),rt=u(),m(ee.$$.fragment),nt=u(),P=a("h3"),R=a("a"),Le=a("span"),m(te.$$.fragment),as=u(),se=a("span"),rs=c("4. Qu\u2019est-ce que le "),De=a("em"),ns=c("memory mapping"),os=c(" ?"),ot=u(),m(ae.$$.fragment),it=u(),z=a("h3"),I=a("a"),Ue=a("span"),m(re.$$.fragment),is=u(),ne=a("span"),ls=c("5. Parmi les \xE9l\xE9ments suivants, lesquels sont les principaux avantages du "),He=a("em"),us=c("memory mapping"),ps=c(" ?"),lt=u(),m(oe.$$.fragment),ut=u(),k=a("h3"),T=a("a"),Me=a("span"),m(ie.$$.fragment),cs=u(),Qe=a("span"),ds=c("6. Pourquoi le code suivant \xE9choue-t-il ?"),pt=u(),m(le.$$.fragment),ct=u(),m(ue.$$.fragment),dt=u(),A=a("h3"),O=a("a"),Re=a("span"),m(pe.$$.fragment),ms=u(),Ie=a("span"),hs=c("7. Parmi les avantages suivants, lesquels sont les principaux pour la cr\xE9ation d\u2019une fiche pour les jeux de donn\xE9es ?"),mt=u(),m(ce.$$.fragment),ht=u(),S=a("h3"),G=a("a"),Te=a("span"),m(de.$$.fragment),fs=u(),Oe=a("span"),vs=c("8. Qu\u2019est-ce que la recherche s\xE9mantique ?"),ft=u(),m(me.$$.fragment),vt=u(),N=a("h3"),V=a("a"),Ge=a("span"),m(he.$$.fragment),$s=u(),Ve=a("span"),qs=c("9. Pour la recherche s\xE9mantique asym\xE9trique, vous avez g\xE9n\xE9ralement :"),$t=u(),m(fe.$$.fragment),qt=u(),L=a("h3"),B=a("a"),Be=a("span"),m(ve.$$.fragment),gs=u(),$e=a("span"),xs=c("10. Puis-je utiliser \u{1F917} "),Fe=a("em"),_s=c("Datasets"),ws=c(" pour charger des donn\xE9es \xE0 utiliser dans d\u2019autres domaines, comme le traitement de la parole ?"),gt=u(),m(qe.$$.fragment),this.h()},l(e){const n=da('[data-svelte="svelte-1phssyn"]',document.head);_=r(n,"META",{name:!0,content:!0}),n.forEach(t),Je=p(e),w=r(e,"H1",{class:!0});var _t=o(w);D=r(_t,"A",{id:!0,class:!0,href:!0});var Es=o(D);ye=r(Es,"SPAN",{});var bs=o(ye);h(F.$$.fragment,bs),bs.forEach(t),Es.forEach(t),Ut=p(_t),Ee=r(_t,"SPAN",{});var js=o(Ee);Ht=d(js,"Quiz de fin de chapitre"),js.forEach(t),_t.forEach(t),Ke=p(e),ge=r(e,"P",{});var Cs=o(ge);Mt=d(Cs,"Ce chapitre a couvert beaucoup de terrain ! Ne vous inqui\xE9tez pas si vous n\u2019avez pas saisi tous les d\xE9tails, les chapitres suivants vous aideront \xE0 comprendre comment les choses fonctionnent sous le capot."),Cs.forEach(t),We=p(e),xe=r(e,"P",{});var Ps=o(xe);Qt=d(Ps,"Avant de poursuivre, testons ce que vous avez appris dans ce chapitre."),Ps.forEach(t),Xe=p(e),y=r(e,"H3",{class:!0});var wt=o(y);U=r(wt,"A",{id:!0,class:!0,href:!0});var zs=o(U);be=r(zs,"SPAN",{});var ks=o(be);h(J.$$.fragment,ks),ks.forEach(t),zs.forEach(t),Rt=p(wt),E=r(wt,"SPAN",{});var _e=o(E);It=d(_e,"1. La fonction "),je=r(_e,"CODE",{});var As=o(je);Tt=d(As,"load_dataset()"),As.forEach(t),Ot=d(_e," dans \u{1F917} "),Ce=r(_e,"EM",{});var Ss=o(Ce);Gt=d(Ss,"Datasets"),Ss.forEach(t),Vt=d(_e," vous permet de charger un jeu de donn\xE9es depuis lequel des emplacements suivants ?"),_e.forEach(t),wt.forEach(t),Ye=p(e),h(K.$$.fragment,e),Ze=p(e),b=r(e,"H3",{class:!0});var yt=o(b);H=r(yt,"A",{id:!0,class:!0,href:!0});var Ns=o(H);Pe=r(Ns,"SPAN",{});var Ls=o(Pe);h(W.$$.fragment,Ls),Ls.forEach(t),Ns.forEach(t),Bt=p(yt),ze=r(yt,"SPAN",{});var Ds=o(ze);Ft=d(Ds,"2. Supposons que vous chargiez l\u2019une des t\xE2ches du jeu de donn\xE9es GLUE comme suit :"),Ds.forEach(t),yt.forEach(t),et=p(e),h(X.$$.fragment,e),tt=p(e),M=r(e,"P",{});var Et=o(M);Jt=d(Et,"Laquelle des commandes suivantes produira un \xE9chantillon al\xE9atoire de 50 \xE9l\xE9ments \xE0 partir de "),ke=r(Et,"CODE",{});var Us=o(ke);Kt=d(Us,"dataset"),Us.forEach(t),Wt=d(Et," ?"),Et.forEach(t),st=p(e),h(Y.$$.fragment,e),at=p(e),j=r(e,"H3",{class:!0});var bt=o(j);Q=r(bt,"A",{id:!0,class:!0,href:!0});var Hs=o(Q);Ae=r(Hs,"SPAN",{});var Ms=o(Ae);h(Z.$$.fragment,Ms),Ms.forEach(t),Hs.forEach(t),Xt=p(bt),C=r(bt,"SPAN",{});var we=o(C);Yt=d(we,"3. Supposons que vous disposiez d\u2019un jeu de donn\xE9es sur les animaux domestiques appel\xE9 "),Se=r(we,"CODE",{});var Qs=o(Se);Zt=d(Qs,"pets_dataset"),Qs.forEach(t),es=d(we," qui comporte une colonne "),Ne=r(we,"CODE",{});var Rs=o(Ne);ts=d(Rs,"name"),Rs.forEach(t),ss=d(we," indiquant le nom de chaque animal. Parmi les approches suivantes, laquelle vous permettrait de filtrer le jeu de donn\xE9es pour tous les animaux dont le nom commence par la lettre \xAB L \xBB ?"),we.forEach(t),bt.forEach(t),rt=p(e),h(ee.$$.fragment,e),nt=p(e),P=r(e,"H3",{class:!0});var jt=o(P);R=r(jt,"A",{id:!0,class:!0,href:!0});var Is=o(R);Le=r(Is,"SPAN",{});var Ts=o(Le);h(te.$$.fragment,Ts),Ts.forEach(t),Is.forEach(t),as=p(jt),se=r(jt,"SPAN",{});var Ct=o(se);rs=d(Ct,"4. Qu\u2019est-ce que le "),De=r(Ct,"EM",{});var Os=o(De);ns=d(Os,"memory mapping"),Os.forEach(t),os=d(Ct," ?"),Ct.forEach(t),jt.forEach(t),ot=p(e),h(ae.$$.fragment,e),it=p(e),z=r(e,"H3",{class:!0});var Pt=o(z);I=r(Pt,"A",{id:!0,class:!0,href:!0});var Gs=o(I);Ue=r(Gs,"SPAN",{});var Vs=o(Ue);h(re.$$.fragment,Vs),Vs.forEach(t),Gs.forEach(t),is=p(Pt),ne=r(Pt,"SPAN",{});var zt=o(ne);ls=d(zt,"5. Parmi les \xE9l\xE9ments suivants, lesquels sont les principaux avantages du "),He=r(zt,"EM",{});var Bs=o(He);us=d(Bs,"memory mapping"),Bs.forEach(t),ps=d(zt," ?"),zt.forEach(t),Pt.forEach(t),lt=p(e),h(oe.$$.fragment,e),ut=p(e),k=r(e,"H3",{class:!0});var kt=o(k);T=r(kt,"A",{id:!0,class:!0,href:!0});var Fs=o(T);Me=r(Fs,"SPAN",{});var Js=o(Me);h(ie.$$.fragment,Js),Js.forEach(t),Fs.forEach(t),cs=p(kt),Qe=r(kt,"SPAN",{});var Ks=o(Qe);ds=d(Ks,"6. Pourquoi le code suivant \xE9choue-t-il ?"),Ks.forEach(t),kt.forEach(t),pt=p(e),h(le.$$.fragment,e),ct=p(e),h(ue.$$.fragment,e),dt=p(e),A=r(e,"H3",{class:!0});var At=o(A);O=r(At,"A",{id:!0,class:!0,href:!0});var Ws=o(O);Re=r(Ws,"SPAN",{});var Xs=o(Re);h(pe.$$.fragment,Xs),Xs.forEach(t),Ws.forEach(t),ms=p(At),Ie=r(At,"SPAN",{});var Ys=o(Ie);hs=d(Ys,"7. Parmi les avantages suivants, lesquels sont les principaux pour la cr\xE9ation d\u2019une fiche pour les jeux de donn\xE9es ?"),Ys.forEach(t),At.forEach(t),mt=p(e),h(ce.$$.fragment,e),ht=p(e),S=r(e,"H3",{class:!0});var St=o(S);G=r(St,"A",{id:!0,class:!0,href:!0});var Zs=o(G);Te=r(Zs,"SPAN",{});var ea=o(Te);h(de.$$.fragment,ea),ea.forEach(t),Zs.forEach(t),fs=p(St),Oe=r(St,"SPAN",{});var ta=o(Oe);vs=d(ta,"8. Qu\u2019est-ce que la recherche s\xE9mantique ?"),ta.forEach(t),St.forEach(t),ft=p(e),h(me.$$.fragment,e),vt=p(e),N=r(e,"H3",{class:!0});var Nt=o(N);V=r(Nt,"A",{id:!0,class:!0,href:!0});var sa=o(V);Ge=r(sa,"SPAN",{});var aa=o(Ge);h(he.$$.fragment,aa),aa.forEach(t),sa.forEach(t),$s=p(Nt),Ve=r(Nt,"SPAN",{});var ra=o(Ve);qs=d(ra,"9. Pour la recherche s\xE9mantique asym\xE9trique, vous avez g\xE9n\xE9ralement :"),ra.forEach(t),Nt.forEach(t),$t=p(e),h(fe.$$.fragment,e),qt=p(e),L=r(e,"H3",{class:!0});var Lt=o(L);B=r(Lt,"A",{id:!0,class:!0,href:!0});var na=o(B);Be=r(na,"SPAN",{});var oa=o(Be);h(ve.$$.fragment,oa),oa.forEach(t),na.forEach(t),gs=p(Lt),$e=r(Lt,"SPAN",{});var Dt=o($e);xs=d(Dt,"10. Puis-je utiliser \u{1F917} "),Fe=r(Dt,"EM",{});var ia=o(Fe);_s=d(ia,"Datasets"),ia.forEach(t),ws=d(Dt," pour charger des donn\xE9es \xE0 utiliser dans d\u2019autres domaines, comme le traitement de la parole ?"),Dt.forEach(t),Lt.forEach(t),gt=p(e),h(qe.$$.fragment,e),this.h()},h(){i(_,"name","hf:doc:metadata"),i(_,"content",JSON.stringify(va)),i(D,"id","quiz-de-fin-de-chapitre"),i(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(D,"href","#quiz-de-fin-de-chapitre"),i(w,"class","relative group"),i(U,"id","1.-la-fonction-<code>load_dataset()</code>-dans-\u{1F917}-<em>datasets</em>-vous-permet-de-charger-un-jeu-de-donn\xE9es-depuis-lequel-des-emplacements-suivants-?"),i(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(U,"href","#1.-la-fonction-<code>load_dataset()</code>-dans-\u{1F917}-<em>datasets</em>-vous-permet-de-charger-un-jeu-de-donn\xE9es-depuis-lequel-des-emplacements-suivants-?"),i(y,"class","relative group"),i(H,"id","2.-supposons-que-vous-chargiez-l\u2019une-des-t\xE2ches-du-jeu-de-donn\xE9es-glue-comme-suit-:"),i(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(H,"href","#2.-supposons-que-vous-chargiez-l\u2019une-des-t\xE2ches-du-jeu-de-donn\xE9es-glue-comme-suit-:"),i(b,"class","relative group"),i(Q,"id","3.-supposons-que-vous-disposiez-d\u2019un-jeu-de-donn\xE9es-sur-les-animaux-domestiques-appel\xE9-<code>pets_dataset</code>-qui-comporte-une-colonne-<code>name</code>-indiquant-le-nom-de-chaque-animal.-parmi-les-approches-suivantes,-laquelle-vous-permettrait-de-filtrer-le-jeu-de-donn\xE9es-pour-tous-les-animaux-dont-le-nom-commence-par-la-lettre-\xAB-l-\xBB-?"),i(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(Q,"href","#3.-supposons-que-vous-disposiez-d\u2019un-jeu-de-donn\xE9es-sur-les-animaux-domestiques-appel\xE9-<code>pets_dataset</code>-qui-comporte-une-colonne-<code>name</code>-indiquant-le-nom-de-chaque-animal.-parmi-les-approches-suivantes,-laquelle-vous-permettrait-de-filtrer-le-jeu-de-donn\xE9es-pour-tous-les-animaux-dont-le-nom-commence-par-la-lettre-\xAB-l-\xBB-?"),i(j,"class","relative group"),i(R,"id","4.-qu\u2019est-ce-que-le-<em>memory-mapping</em>-?"),i(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(R,"href","#4.-qu\u2019est-ce-que-le-<em>memory-mapping</em>-?"),i(P,"class","relative group"),i(I,"id","5.-parmi-les-\xE9l\xE9ments-suivants,-lesquels-sont-les-principaux-avantages-du-<em>memory-mapping</em>-?"),i(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(I,"href","#5.-parmi-les-\xE9l\xE9ments-suivants,-lesquels-sont-les-principaux-avantages-du-<em>memory-mapping</em>-?"),i(z,"class","relative group"),i(T,"id","6.-pourquoi-le-code-suivant-\xE9choue-t-il-?"),i(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(T,"href","#6.-pourquoi-le-code-suivant-\xE9choue-t-il-?"),i(k,"class","relative group"),i(O,"id","7.-parmi-les-avantages-suivants,-lesquels-sont-les-principaux-pour-la-cr\xE9ation-d\u2019une-fiche-pour-les-jeux-de-donn\xE9es-?"),i(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(O,"href","#7.-parmi-les-avantages-suivants,-lesquels-sont-les-principaux-pour-la-cr\xE9ation-d\u2019une-fiche-pour-les-jeux-de-donn\xE9es-?"),i(A,"class","relative group"),i(G,"id","8.-qu\u2019est-ce-que-la-recherche-s\xE9mantique-?"),i(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(G,"href","#8.-qu\u2019est-ce-que-la-recherche-s\xE9mantique-?"),i(S,"class","relative group"),i(V,"id","9.-pour-la-recherche-s\xE9mantique-asym\xE9trique,-vous-avez-g\xE9n\xE9ralement-:"),i(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(V,"href","#9.-pour-la-recherche-s\xE9mantique-asym\xE9trique,-vous-avez-g\xE9n\xE9ralement-:"),i(N,"class","relative group"),i(B,"id","10.-puis-je-utiliser-\u{1F917}-<em>datasets</em>-pour-charger-des-donn\xE9es-\xE0-utiliser-dans-d\u2019autres-domaines,-comme-le-traitement-de-la-parole-?"),i(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(B,"href","#10.-puis-je-utiliser-\u{1F917}-<em>datasets</em>-pour-charger-des-donn\xE9es-\xE0-utiliser-dans-d\u2019autres-domaines,-comme-le-traitement-de-la-parole-?"),i(L,"class","relative group")},m(e,n){s(document.head,_),l(e,Je,n),l(e,w,n),s(w,D),s(D,ye),f(F,ye,null),s(w,Ut),s(w,Ee),s(Ee,Ht),l(e,Ke,n),l(e,ge,n),s(ge,Mt),l(e,We,n),l(e,xe,n),s(xe,Qt),l(e,Xe,n),l(e,y,n),s(y,U),s(U,be),f(J,be,null),s(y,Rt),s(y,E),s(E,It),s(E,je),s(je,Tt),s(E,Ot),s(E,Ce),s(Ce,Gt),s(E,Vt),l(e,Ye,n),f(K,e,n),l(e,Ze,n),l(e,b,n),s(b,H),s(H,Pe),f(W,Pe,null),s(b,Bt),s(b,ze),s(ze,Ft),l(e,et,n),f(X,e,n),l(e,tt,n),l(e,M,n),s(M,Jt),s(M,ke),s(ke,Kt),s(M,Wt),l(e,st,n),f(Y,e,n),l(e,at,n),l(e,j,n),s(j,Q),s(Q,Ae),f(Z,Ae,null),s(j,Xt),s(j,C),s(C,Yt),s(C,Se),s(Se,Zt),s(C,es),s(C,Ne),s(Ne,ts),s(C,ss),l(e,rt,n),f(ee,e,n),l(e,nt,n),l(e,P,n),s(P,R),s(R,Le),f(te,Le,null),s(P,as),s(P,se),s(se,rs),s(se,De),s(De,ns),s(se,os),l(e,ot,n),f(ae,e,n),l(e,it,n),l(e,z,n),s(z,I),s(I,Ue),f(re,Ue,null),s(z,is),s(z,ne),s(ne,ls),s(ne,He),s(He,us),s(ne,ps),l(e,lt,n),f(oe,e,n),l(e,ut,n),l(e,k,n),s(k,T),s(T,Me),f(ie,Me,null),s(k,cs),s(k,Qe),s(Qe,ds),l(e,pt,n),f(le,e,n),l(e,ct,n),f(ue,e,n),l(e,dt,n),l(e,A,n),s(A,O),s(O,Re),f(pe,Re,null),s(A,ms),s(A,Ie),s(Ie,hs),l(e,mt,n),f(ce,e,n),l(e,ht,n),l(e,S,n),s(S,G),s(G,Te),f(de,Te,null),s(S,fs),s(S,Oe),s(Oe,vs),l(e,ft,n),f(me,e,n),l(e,vt,n),l(e,N,n),s(N,V),s(V,Ge),f(he,Ge,null),s(N,$s),s(N,Ve),s(Ve,qs),l(e,$t,n),f(fe,e,n),l(e,qt,n),l(e,L,n),s(L,B),s(B,Be),f(ve,Be,null),s(L,gs),s(L,$e),s($e,xs),s($e,Fe),s(Fe,_s),s($e,ws),l(e,gt,n),f(qe,e,n),xt=!0},p:ma,i(e){xt||(v(F.$$.fragment,e),v(J.$$.fragment,e),v(K.$$.fragment,e),v(W.$$.fragment,e),v(X.$$.fragment,e),v(Y.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(te.$$.fragment,e),v(ae.$$.fragment,e),v(re.$$.fragment,e),v(oe.$$.fragment,e),v(ie.$$.fragment,e),v(le.$$.fragment,e),v(ue.$$.fragment,e),v(pe.$$.fragment,e),v(ce.$$.fragment,e),v(de.$$.fragment,e),v(me.$$.fragment,e),v(he.$$.fragment,e),v(fe.$$.fragment,e),v(ve.$$.fragment,e),v(qe.$$.fragment,e),xt=!0)},o(e){$(F.$$.fragment,e),$(J.$$.fragment,e),$(K.$$.fragment,e),$(W.$$.fragment,e),$(X.$$.fragment,e),$(Y.$$.fragment,e),$(Z.$$.fragment,e),$(ee.$$.fragment,e),$(te.$$.fragment,e),$(ae.$$.fragment,e),$(re.$$.fragment,e),$(oe.$$.fragment,e),$(ie.$$.fragment,e),$(le.$$.fragment,e),$(ue.$$.fragment,e),$(pe.$$.fragment,e),$(ce.$$.fragment,e),$(de.$$.fragment,e),$(me.$$.fragment,e),$(he.$$.fragment,e),$(fe.$$.fragment,e),$(ve.$$.fragment,e),$(qe.$$.fragment,e),xt=!1},d(e){t(_),e&&t(Je),e&&t(w),q(F),e&&t(Ke),e&&t(ge),e&&t(We),e&&t(xe),e&&t(Xe),e&&t(y),q(J),e&&t(Ye),q(K,e),e&&t(Ze),e&&t(b),q(W),e&&t(et),q(X,e),e&&t(tt),e&&t(M),e&&t(st),q(Y,e),e&&t(at),e&&t(j),q(Z),e&&t(rt),q(ee,e),e&&t(nt),e&&t(P),q(te),e&&t(ot),q(ae,e),e&&t(it),e&&t(z),q(re),e&&t(lt),q(oe,e),e&&t(ut),e&&t(k),q(ie),e&&t(pt),q(le,e),e&&t(ct),q(ue,e),e&&t(dt),e&&t(A),q(pe),e&&t(mt),q(ce,e),e&&t(ht),e&&t(S),q(de),e&&t(ft),q(me,e),e&&t(vt),e&&t(N),q(he),e&&t($t),q(fe,e),e&&t(qt),e&&t(L),q(ve),e&&t(gt),q(qe,e)}}}const va={local:"quiz-de-fin-de-chapitre",title:"Quiz de fin de chapitre"};function $a(ys){return ha(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wa extends ua{constructor(_){super();pa(this,_,$a,fa,ca,{})}}export{wa as default,va as metadata};
