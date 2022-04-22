import{S as gr,i as qr,s as xr,e as s,k as f,w as b,t as N,l as $r,M as _r,c as o,d as t,m as h,x as w,a,h as L,b as l,F as r,g as d,y as A,o as g,p as vr,q,B as y,v as br,n as kr}from"../../chunks/vendor-1e8b365d.js";import{I as C}from"../../chunks/IconCopyLink-483c28ba.js";import{C as Ft}from"../../chunks/CodeBlock-e5764662.js";import{Q as H}from"../../chunks/Question-31426fe2.js";import{F as wr}from"../../chunks/FrameworkSwitchCourse-7f8f0f31.js";function Ar(T){let c,p,v,m,E,x,S,z,k,P;return m=new C({}),k=new H({props:{choices:[{text:"Un mod\xE8le qui s'entra\xEEne automatiquement sur vos donn\xE9es",explain:"Incorrect. Vous confondez cela avec notre produit <a href='https://huggingface.co/autotrain>AutoTrain</a>"},{text:"Un objet qui renvoie la bonne architecture bas\xE9e sur le <i>checkpoint</i> .",explain:"Exactement : <code>AutoModel</code> a seulement besoin de conna\xEEtre le <i>checkpoint</i> \xE0 partir duquel il doit s'initialiser pour retourner \xE0 la bonne architecture.",correct:!0},{text:"Un mod\xE8le qui d\xE9tecte automatiquement la langue utilis\xE9e pour ses entr\xE9es afin de charger les bonnes pond\xE9rations.",explain:"Incorrect. Bien que certains <i>checkpoints</i> et mod\xE8les soient capables de g\xE9rer plusieurs langues, il n'existe pas d'outils int\xE9gr\xE9s pour la s\xE9lection automatique des <i>checkpoints</i> en fonction de la langue. Vous devez vous rendre sur le <a href='https://huggingface.co/models'>Hub des mod\xE8les</a> pour trouver le meilleur <i>checkpoint</i> pour votre t\xE2che !"}]}}),{c(){c=s("h3"),p=s("a"),v=s("span"),b(m.$$.fragment),E=f(),x=s("span"),S=N("5. What is an AutoModel?"),z=f(),b(k.$$.fragment),this.h()},l(i){c=o(i,"H3",{class:!0});var _=a(c);p=o(_,"A",{id:!0,class:!0,href:!0});var n=a(p);v=o(n,"SPAN",{});var $=a(v);w(m.$$.fragment,$),$.forEach(t),n.forEach(t),E=h(_),x=o(_,"SPAN",{});var M=a(x);S=L(M,"5. What is an AutoModel?"),M.forEach(t),_.forEach(t),z=h(i),w(k.$$.fragment,i),this.h()},h(){l(p,"id","5.-what-is-an-automodel?"),l(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(p,"href","#5.-what-is-an-automodel?"),l(c,"class","relative group")},m(i,_){d(i,c,_),r(c,p),r(p,v),A(m,v,null),r(c,E),r(c,x),r(x,S),d(i,z,_),A(k,i,_),P=!0},i(i){P||(q(m.$$.fragment,i),q(k.$$.fragment,i),P=!0)},o(i){g(m.$$.fragment,i),g(k.$$.fragment,i),P=!1},d(i){i&&t(c),y(m),i&&t(z),y(k,i)}}}function yr(T){let c,p,v,m,E,x,S,z,k,P;return m=new C({}),k=new H({props:{choices:[{text:"A model that automatically trains on your data",explain:"Incorrect. Are you mistaking this with our <a href='https://huggingface.co/autonlp'>AutoNLP</a> product?"},{text:"An object that returns the correct architecture based on the checkpoint",explain:"Exactly: the <code>AutoModel</code> only needs to know the checkpoint from which to initialize to return the correct architecture.",correct:!0},{text:"A model that automatically detects the language used for its inputs to load the correct weights",explain:"Incorrect; while some checkpoints and models are capable of handling multiple languages, there are no built-in tools for automatic checkpoint selection according to language. You should head over to the <a href='https://huggingface.co/models'>Model Hub</a> to find the best checkpoint for your task!"}]}}),{c(){c=s("h3"),p=s("a"),v=s("span"),b(m.$$.fragment),E=f(),x=s("span"),S=N("5. Qu\u2019est-ce qu\u2019un AutoModel?"),z=f(),b(k.$$.fragment),this.h()},l(i){c=o(i,"H3",{class:!0});var _=a(c);p=o(_,"A",{id:!0,class:!0,href:!0});var n=a(p);v=o(n,"SPAN",{});var $=a(v);w(m.$$.fragment,$),$.forEach(t),n.forEach(t),E=h(_),x=o(_,"SPAN",{});var M=a(x);S=L(M,"5. Qu\u2019est-ce qu\u2019un AutoModel?"),M.forEach(t),_.forEach(t),z=h(i),w(k.$$.fragment,i),this.h()},h(){l(p,"id","5.-qu\u2019est-ce-qu\u2019un-automodel?"),l(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(p,"href","#5.-qu\u2019est-ce-qu\u2019un-automodel?"),l(c,"class","relative group")},m(i,_){d(i,c,_),r(c,p),r(p,v),A(m,v,null),r(c,E),r(c,x),r(x,S),d(i,z,_),A(k,i,_),P=!0},i(i){P||(q(m.$$.fragment,i),q(k.$$.fragment,i),P=!0)},o(i){g(m.$$.fragment,i),g(k.$$.fragment,i),P=!1},d(i){i&&t(c),y(m),i&&t(z),y(k,i)}}}function zr(T){let c,p,v,m,E,x,S,z,k,P,i,_;return m=new C({}),k=new Ft({props:{code:`from transformers import AutoTokenizer, TFAutoModel

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
model = TFAutoModel.from_pretrained("gpt2")

encoded = tokenizer("Hey!", return_tensors="pt")
result = model(**encoded)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModel

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
model = TFAutoModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

encoded = tokenizer(<span class="hljs-string">&quot;Hey!&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
result = model(**encoded)`}}),i=new H({props:{choices:[{text:"Non, \xE7a semble correct.",explain:"Malheureusement, coupler un mod\xE8le avec un <i>tokenizer</i> qui a \xE9t\xE9 entra\xEEn\xE9 avec un <i>checkpoint</i> diff\xE9rent est rarement une bonne id\xE9e. Le mod\xE8le n'a pas \xE9t\xE9 entra\xEEn\xE9 pour donner du sens \xE0 la sortie de ce <i>tokenizer</i> donc la sortie du mod\xE8le (s'il peut m\xEAme fonctionner !) n'aura aucun sens."},{text:" Le <i>tokenizer</i> et le mod\xE8le doivent toujours provenir du m\xEAme <i>checkpoint</i>.",explain:"C\u2019est juste !",correct:!0},{text:" C'est une bonne pratique de faire du <i>padding</i> et de troncage avec le <i>tokenizer</i> car chaque entr\xE9e est un batch.",explain:"Il est vrai que chaque entr\xE9e de mod\xE8le doit \xEAtre un batch. Cependant, tronquer ou compl\xE9ter cette s\xE9quence n'aurait pas n\xE9cessairement de sens puisqu'il n'y en a qu'une seule. Il s'agit l\xE0 de techniques permettant de mettre en batch une liste de phrases."}]}}),{c(){c=s("h3"),p=s("a"),v=s("span"),b(m.$$.fragment),E=f(),x=s("span"),S=N("10. Y a-t-il un probl\xE8me avec le code suivant ?"),z=f(),b(k.$$.fragment),P=f(),b(i.$$.fragment),this.h()},l(n){c=o(n,"H3",{class:!0});var $=a(c);p=o($,"A",{id:!0,class:!0,href:!0});var M=a(p);v=o(M,"SPAN",{});var j=a(v);w(m.$$.fragment,j),j.forEach(t),M.forEach(t),E=h($),x=o($,"SPAN",{});var O=a(x);S=L(O,"10. Y a-t-il un probl\xE8me avec le code suivant ?"),O.forEach(t),$.forEach(t),z=h(n),w(k.$$.fragment,n),P=h(n),w(i.$$.fragment,n),this.h()},h(){l(p,"id","10.-y-a-t-il-un-probl\xE8me-avec-le-code-suivant-?"),l(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(p,"href","#10.-y-a-t-il-un-probl\xE8me-avec-le-code-suivant-?"),l(c,"class","relative group")},m(n,$){d(n,c,$),r(c,p),r(p,v),A(m,v,null),r(c,E),r(c,x),r(x,S),d(n,z,$),A(k,n,$),d(n,P,$),A(i,n,$),_=!0},i(n){_||(q(m.$$.fragment,n),q(k.$$.fragment,n),q(i.$$.fragment,n),_=!0)},o(n){g(m.$$.fragment,n),g(k.$$.fragment,n),g(i.$$.fragment,n),_=!1},d(n){n&&t(c),y(m),n&&t(z),y(k,n),n&&t(P),y(i,n)}}}function Er(T){let c,p,v,m,E,x,S,z,k,P,i,_;return m=new C({}),k=new Ft({props:{code:`from transformers import AutoTokenizer, AutoModel

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
model = AutoModel.from_pretrained("gpt2")

encoded = tokenizer("Hey!", return_tensors="pt")
result = model(**encoded)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModel

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
model = AutoModel.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)

encoded = tokenizer(<span class="hljs-string">&quot;Hey!&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
result = model(**encoded)`}}),i=new H({props:{choices:[{text:"Non, \xE7a semble correct.",explain:"Malheureusement, coupler un mod\xE8le avec un <i>tokenizer</i> qui a \xE9t\xE9 entra\xEEn\xE9 avec un <i>checkpoint</i> diff\xE9rent est rarement une bonne id\xE9e. Le mod\xE8le n'a pas \xE9t\xE9 entra\xEEn\xE9 pour donner du sens \xE0 la sortie de ce <i>tokenizer</i> donc la sortie du mod\xE8le (s'il peut m\xEAme fonctionner !) n'aura aucun sens."},{text:" Le <i>tokenizer</i> et le mod\xE8le doivent toujours provenir du m\xEAme <i>checkpoint</i>.",explain:"C\u2019est juste !",correct:!0},{text:" C'est une bonne pratique de faire du <i>padding</i> et de troncage avec le <i>tokenizer</i> car chaque entr\xE9e est un batch.",explain:"Il est vrai que chaque entr\xE9e de mod\xE8le doit \xEAtre un batch. Cependant, tronquer ou compl\xE9ter cette s\xE9quence n'aurait pas n\xE9cessairement de sens puisqu'il n'y en a qu'une seule. Il s'agit l\xE0 de techniques permettant de mettre en batch une liste de phrases."}]}}),{c(){c=s("h3"),p=s("a"),v=s("span"),b(m.$$.fragment),E=f(),x=s("span"),S=N("10. Y a-t-il un probl\xE8me avec le code suivant ?"),z=f(),b(k.$$.fragment),P=f(),b(i.$$.fragment),this.h()},l(n){c=o(n,"H3",{class:!0});var $=a(c);p=o($,"A",{id:!0,class:!0,href:!0});var M=a(p);v=o(M,"SPAN",{});var j=a(v);w(m.$$.fragment,j),j.forEach(t),M.forEach(t),E=h($),x=o($,"SPAN",{});var O=a(x);S=L(O,"10. Y a-t-il un probl\xE8me avec le code suivant ?"),O.forEach(t),$.forEach(t),z=h(n),w(k.$$.fragment,n),P=h(n),w(i.$$.fragment,n),this.h()},h(){l(p,"id","10.-y-a-t-il-un-probl\xE8me-avec-le-code-suivant-?"),l(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(p,"href","#10.-y-a-t-il-un-probl\xE8me-avec-le-code-suivant-?"),l(c,"class","relative group")},m(n,$){d(n,c,$),r(c,p),r(p,v),A(m,v,null),r(c,E),r(c,x),r(x,S),d(n,z,$),A(k,n,$),d(n,P,$),A(i,n,$),_=!0},i(n){_||(q(m.$$.fragment,n),q(k.$$.fragment,n),q(i.$$.fragment,n),_=!0)},o(n){g(m.$$.fragment,n),g(k.$$.fragment,n),g(i.$$.fragment,n),_=!1},d(n){n&&t(c),y(m),n&&t(z),y(k,n),n&&t(P),y(i,n)}}}function Pr(T){let c,p,v,m,E,x,S,z,k,P,i,_,n,$,M,j,O,Pe,gt,Ye,ne,We,B,G,Se,se,qt,oe,xt,Ne,_t,bt,De,ie,Re,Y,K,Le,ae,wt,Me,At,Ve,le,Je,W,X,je,ue,yt,Ce,zt,Ge,ce,Ke,I,Q,Ae,D,Z,He,pe,Et,Te,Pt,Xe,de,Ze,R,ee,Ie,fe,St,Qe,Nt,et,he,tt,V,te,Fe,me,Lt,$e,Mt,Ue,jt,Ct,rt,ve,nt,J,re,Oe,ke,Ht,ge,Tt,Be,It,Qt,st,qe,ot,xe,it,F,U,ye,at;v=new wr({props:{fw:T[0]}}),z=new C({}),j=new C({}),ne=new H({props:{choices:[{text:" Tout d'abord, le mod\xE8le, qui traite le texte et renvoie des pr\xE9dictions brutes. Puis le <i>tokenizer</i> donne un sens \xE0 ces pr\xE9dictions et les reconvertit en texte si n\xE9cessaire.",explain:" Le mod\xE8le ne peut pas comprendre le texte ! Le <i>tokenizer</i> doit d'abord tokeniser le texte et le convertir en identifiants afin qu'il soit compr\xE9hensible par le mod\xE8le."},{text:" Tout d'abord, le <i>tokenizer</i>, qui traite le texte et renvoie des identifiants. Puis le mod\xE8le traite ces identifiants et produit une pr\xE9diction, qui peut \xEAtre du texte.",explain:" La pr\xE9diction du mod\xE8le ne peut pas \xEAtre du texte imm\xE9diatement. Le <i>tokenizer</i> doit \xEAtre utilis\xE9 afin de reconvertir la pr\xE9diction en texte !"},{text:" Le <i>tokenizer</i> traite le texte et renvoie des identifiants. Le mod\xE8le traite ces identifiants et produit une pr\xE9diction. Le <i>tokenizer</i> peut alors \xEAtre utilis\xE9 \xE0 nouveau pour reconvertir ces pr\xE9dictions en texte.",explain:" C\u2019est correct ! Le <i>tokenizer</i> peut \xEAtre utilis\xE9 \xE0 la fois pour la tokenisation et la d\xE9-tok\xE9nisation.",correct:!0}]}}),se=new C({}),ie=new H({props:{choices:[{text:"2: la longueur de la s\xE9quence et la taille du batch",explain:"Faux ! Le tenseur produit par le mod\xE8le poss\xE8de une troisi\xE8me dimension : la taille cach\xE9e."},{text:"2: la longueur de la s\xE9quence et la taille cach\xE9e",explain:"Faux ! Tous les <i>transformers</i>  g\xE8rent les batchs, m\xEAme avec une seule s\xE9quence ce serait une taille de batch de 1 !"},{text:"3: la longueur de la s\xE9quence, la taille du batch et la taille cach\xE9e.",explain:"C\u2019est correct !",correct:!0}]}}),ae=new C({}),le=new H({props:{choices:[{text:"WordPiece",explain:"Oui, c'est un exemple de tokenisation en sous-mots !",correct:!0},{text:"La tokenization bas\xE9e sur les caract\xE8res",explain:"La tokenization bas\xE9e sur les caract\xE8res n\u2019est pas un type de tokenisation en sous-mots."},{text:"D\xE9coupage sur les espaces et la ponctuation",explain:"C\u2019est une tokenisation bas\xE9e sur les mots !"},{text:"BPE",explain:"Oui, c'est un exemple de tokenisation en sous-mots !",correct:!0},{text:"Unigram",explain:"Oui, c'est un exemple de tokenisation en sous-mots !",correct:!0},{text:"Aucune des propositions ci-dessus",explain:"Incorrect!"}]}}),ue=new C({}),ce=new H({props:{choices:[{text:" Un composant du <i>transformer</i>  de base qui redirige les tenseurs vers leurs couches correctes.",explain:"Incorrect ! Il n'y a pas de tel composant."},{text:"\xC9galement connu sous le nom de m\xE9canisme d'auto-attention, il adapte la repr\xE9sentation d'un <i>token</i>  en fonction des autres <i>tokens</i>  de la s\xE9quence.",explain:"Incorrect ! La couche d'auto-attention contient des t\xEAtes d'attention mais ce ne sont pas des t\xEAtes d'adaptation."},{text:"Un composant suppl\xE9mentaire, g\xE9n\xE9ralement constitu\xE9 d'une ou plusieurs couches, pour convertir les pr\xE9dictions du <i>transformer</i>  en une sortie sp\xE9cifique \xE0 la t\xE2che.",explain:"C'est exact. Les t\xEAtes d'adaptation, aussi appel\xE9es simplement t\xEAtes, se pr\xE9sentent sous diff\xE9rentes formes : t\xEAtes de mod\xE9lisation du langage, t\xEAtes de r\xE9ponse aux questions, t\xEAtes de classification des s\xE9quences, etc.",correct:!0}]}});const Ut=[yr,Ar],_e=[];function Ot(e,u){return e[0]==="pt"?0:1}I=Ot(T),Q=_e[I]=Ut[I](T),pe=new C({}),de=new H({props:{choices:[{text:"La troncature",explain:" Oui, la troncature est une fa\xE7on correcte d'\xE9galiser les s\xE9quences pour qu'elles s'inscrivent dans une forme rectangulaire. Mais est-ce la seule ?",correct:!0},{text:"Retourner les tenseurs",explain:"Alors que les autres techniques vous permettent de renvoyer des tenseurs rectangulaires, retourner les tenseurs n'est pas utile lorsque vous mettez en batch des s\xE9quences."},{text:"Le <i>padding</i>",explain:"Oui, le <i>padding</i> est une fa\xE7on correcte d'\xE9galiser les s\xE9quences pour qu'elles tiennent dans une forme rectangulaire. Mais est-ce le seul moyen ?",correct:!0},{text:"Les masques d'attention ",explain:"Absolument ! Les masques d'attention sont d'une importance capitale lorsqu'on manipule des s\xE9quences de longueurs diff\xE9rentes. Ce n'est cependant pas la seule technique \xE0 laquelle il faut faire attention.",correct:!0}]}}),fe=new C({}),he=new H({props:{choices:[{text:"Elle adoucit les logits pour qu'ils soient plus fiables.",explain:"Non, la fonction SoftMax n'affecte pas la fiabilit\xE9 des r\xE9sultats."},{text:"Elle applique une limite inf\xE9rieure et sup\xE9rieure pour qu'ils soient compr\xE9hensibles.",explain:"C'est exact ! Les valeurs r\xE9sultantes sont comprises entre 0 et 1. Ce n'est cependant pas la seule raison pour laquelle nous utilisons une fonction SoftMax.",correct:!0},{text:"La somme totale des sorties est alors \xE9gale \xE0 1, ce qui permet une interpr\xE9tation probabiliste.",explain:"C'est exact ! Mais ce n'est pas la seule raison pour laquelle nous utilisons une fonction SoftMax.",correct:!0}]}}),me=new C({}),ve=new H({props:{choices:[{text:"<code>encode</code>, car elle peut encoder du texte en identifiants et des identifiants en pr\xE9dictions.",explain:"Faux ! Bien que la m\xE9thode <code>encode</code> existe sur les *tokenizers*, elle n'existe pas sur les mod\xE8les."},{text:"Appeler directement l'objet tokenizer",explain:" Exactement ! La m\xE9thode <code>__call__</code> du <i>tokenizer</i> est une m\xE9thode tr\xE8s puissante qui peut traiter \xE0 peu pr\xE8s tout. C'est \xE9galement la m\xE9thode utilis\xE9e pour r\xE9cup\xE9rer les pr\xE9dictions d'un mod\xE8le.",correct:!0},{text:"<code>pad</code>",explain:"C'est faux ! Le <i>padding</i> est tr\xE8s utile mais ce n'est qu'une partie de l'API <i>tokenizer</i>."},{text:"<code>tokenize</code>",explain:"La m\xE9thode <code>tokenize</code> est est sans doute l'une des m\xE9thodes les plus utiles, mais elle ne constitue pas le c\u0153ur de l'API <i>tokenizer</i>."}]}}),ke=new C({}),qe=new Ft({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
result = tokenizer.tokenize("Hello!")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
result = tokenizer.tokenize(<span class="hljs-string">&quot;Hello!&quot;</span>)`}}),xe=new H({props:{choices:[{text:"Une liste de cha\xEEnes de caract\xE8res, chaque cha\xEEne \xE9tant un <i>token</i>.",explain:" Absolument ! Convertissez cela en identifiants, et donnez-les \xE0 un mod\xE8le !",correct:!0},{text:"Une liste d'identifiants",explain:"C'est faux, c'est \xE0 cela que la m\xE9thode <code>__call__</code> ou la m\xE9thode <code>convert_tokens_to_ids</code> sert !"},{text:"Une cha\xEEne contenant tous les <i>tokens</i>",explain:"Ce serait sous-optimal car le but est de diviser la cha\xEEne de caract\xE8res en plusieurs \xE9l\xE9ments."}]}});const Bt=[Er,zr],be=[];function Yt(e,u){return e[0]==="pt"?0:1}return F=Yt(T),U=be[F]=Bt[F](T),{c(){c=s("meta"),p=f(),b(v.$$.fragment),m=f(),E=s("h1"),x=s("a"),S=s("span"),b(z.$$.fragment),k=f(),P=s("span"),i=N("Quiz de fin de chapitre"),_=f(),n=s("h3"),$=s("a"),M=s("span"),b(j.$$.fragment),O=f(),Pe=s("span"),gt=N("1. Quel est l\u2019ordre du pipeline de mod\xE9lisation du langage ?"),Ye=f(),b(ne.$$.fragment),We=f(),B=s("h3"),G=s("a"),Se=s("span"),b(se.$$.fragment),qt=f(),oe=s("span"),xt=N("2. Combien de dimensions le tenseur produit par le "),Ne=s("i"),_t=N("transformer"),bt=N(" de base poss\xE8de-t-il et quelles sont-elles ?"),De=f(),b(ie.$$.fragment),Re=f(),Y=s("h3"),K=s("a"),Le=s("span"),b(ae.$$.fragment),wt=f(),Me=s("span"),At=N("3. Lequel des \xE9l\xE9ments suivants est un exemple de tokenisation en sous-mots ?"),Ve=f(),b(le.$$.fragment),Je=f(),W=s("h3"),X=s("a"),je=s("span"),b(ue.$$.fragment),yt=f(),Ce=s("span"),zt=N("4. Qu\u2019est-ce qu\u2019une t\xEAte de mod\xE8le ?"),Ge=f(),b(ce.$$.fragment),Ke=f(),Q.c(),Ae=f(),D=s("h3"),Z=s("a"),He=s("span"),b(pe.$$.fragment),Et=f(),Te=s("span"),Pt=N("6. Quelles sont les techniques \xE0 conna\xEEtre lors de la mise en batch de s\xE9quences de longueurs diff\xE9rentes ?"),Xe=f(),b(de.$$.fragment),Ze=f(),R=s("h3"),ee=s("a"),Ie=s("span"),b(fe.$$.fragment),St=f(),Qe=s("span"),Nt=N("7. Quel est l\u2019int\xE9r\xEAt d\u2019appliquer une fonction SoftMax aux logits produits par un mod\xE8le de classification de s\xE9quences ?"),et=f(),b(he.$$.fragment),tt=f(),V=s("h3"),te=s("a"),Fe=s("span"),b(me.$$.fragment),Lt=f(),$e=s("span"),Mt=N("8. Autour de quelle m\xE9thode s\u2019articule la majeure partie de l\u2019API "),Ue=s("i"),jt=N("tokenizer"),Ct=N(" ?"),rt=f(),b(ve.$$.fragment),nt=f(),J=s("h3"),re=s("a"),Oe=s("span"),b(ke.$$.fragment),Ht=f(),ge=s("span"),Tt=N("9. Que contient la variable "),Be=s("code"),It=N("result"),Qt=N(" dans cet exemple de code ?"),st=f(),b(qe.$$.fragment),ot=f(),b(xe.$$.fragment),it=f(),U.c(),ye=$r(),this.h()},l(e){const u=_r('[data-svelte="svelte-1phssyn"]',document.head);c=o(u,"META",{name:!0,content:!0}),u.forEach(t),p=h(e),w(v.$$.fragment,e),m=h(e),E=o(e,"H1",{class:!0});var we=a(E);x=o(we,"A",{id:!0,class:!0,href:!0});var ze=a(x);S=o(ze,"SPAN",{});var Ee=a(S);w(z.$$.fragment,Ee),Ee.forEach(t),ze.forEach(t),k=h(we),P=o(we,"SPAN",{});var Wt=a(P);i=L(Wt,"Quiz de fin de chapitre"),Wt.forEach(t),we.forEach(t),_=h(e),n=o(e,"H3",{class:!0});var lt=a(n);$=o(lt,"A",{id:!0,class:!0,href:!0});var Dt=a($);M=o(Dt,"SPAN",{});var Rt=a(M);w(j.$$.fragment,Rt),Rt.forEach(t),Dt.forEach(t),O=h(lt),Pe=o(lt,"SPAN",{});var Vt=a(Pe);gt=L(Vt,"1. Quel est l\u2019ordre du pipeline de mod\xE9lisation du langage ?"),Vt.forEach(t),lt.forEach(t),Ye=h(e),w(ne.$$.fragment,e),We=h(e),B=o(e,"H3",{class:!0});var ut=a(B);G=o(ut,"A",{id:!0,class:!0,href:!0});var Jt=a(G);Se=o(Jt,"SPAN",{});var Gt=a(Se);w(se.$$.fragment,Gt),Gt.forEach(t),Jt.forEach(t),qt=h(ut),oe=o(ut,"SPAN",{});var ct=a(oe);xt=L(ct,"2. Combien de dimensions le tenseur produit par le "),Ne=o(ct,"I",{});var Kt=a(Ne);_t=L(Kt,"transformer"),Kt.forEach(t),bt=L(ct," de base poss\xE8de-t-il et quelles sont-elles ?"),ct.forEach(t),ut.forEach(t),De=h(e),w(ie.$$.fragment,e),Re=h(e),Y=o(e,"H3",{class:!0});var pt=a(Y);K=o(pt,"A",{id:!0,class:!0,href:!0});var Xt=a(K);Le=o(Xt,"SPAN",{});var Zt=a(Le);w(ae.$$.fragment,Zt),Zt.forEach(t),Xt.forEach(t),wt=h(pt),Me=o(pt,"SPAN",{});var er=a(Me);At=L(er,"3. Lequel des \xE9l\xE9ments suivants est un exemple de tokenisation en sous-mots ?"),er.forEach(t),pt.forEach(t),Ve=h(e),w(le.$$.fragment,e),Je=h(e),W=o(e,"H3",{class:!0});var dt=a(W);X=o(dt,"A",{id:!0,class:!0,href:!0});var tr=a(X);je=o(tr,"SPAN",{});var rr=a(je);w(ue.$$.fragment,rr),rr.forEach(t),tr.forEach(t),yt=h(dt),Ce=o(dt,"SPAN",{});var nr=a(Ce);zt=L(nr,"4. Qu\u2019est-ce qu\u2019une t\xEAte de mod\xE8le ?"),nr.forEach(t),dt.forEach(t),Ge=h(e),w(ce.$$.fragment,e),Ke=h(e),Q.l(e),Ae=h(e),D=o(e,"H3",{class:!0});var ft=a(D);Z=o(ft,"A",{id:!0,class:!0,href:!0});var sr=a(Z);He=o(sr,"SPAN",{});var or=a(He);w(pe.$$.fragment,or),or.forEach(t),sr.forEach(t),Et=h(ft),Te=o(ft,"SPAN",{});var ir=a(Te);Pt=L(ir,"6. Quelles sont les techniques \xE0 conna\xEEtre lors de la mise en batch de s\xE9quences de longueurs diff\xE9rentes ?"),ir.forEach(t),ft.forEach(t),Xe=h(e),w(de.$$.fragment,e),Ze=h(e),R=o(e,"H3",{class:!0});var ht=a(R);ee=o(ht,"A",{id:!0,class:!0,href:!0});var ar=a(ee);Ie=o(ar,"SPAN",{});var lr=a(Ie);w(fe.$$.fragment,lr),lr.forEach(t),ar.forEach(t),St=h(ht),Qe=o(ht,"SPAN",{});var ur=a(Qe);Nt=L(ur,"7. Quel est l\u2019int\xE9r\xEAt d\u2019appliquer une fonction SoftMax aux logits produits par un mod\xE8le de classification de s\xE9quences ?"),ur.forEach(t),ht.forEach(t),et=h(e),w(he.$$.fragment,e),tt=h(e),V=o(e,"H3",{class:!0});var mt=a(V);te=o(mt,"A",{id:!0,class:!0,href:!0});var cr=a(te);Fe=o(cr,"SPAN",{});var pr=a(Fe);w(me.$$.fragment,pr),pr.forEach(t),cr.forEach(t),Lt=h(mt),$e=o(mt,"SPAN",{});var $t=a($e);Mt=L($t,"8. Autour de quelle m\xE9thode s\u2019articule la majeure partie de l\u2019API "),Ue=o($t,"I",{});var dr=a(Ue);jt=L(dr,"tokenizer"),dr.forEach(t),Ct=L($t," ?"),$t.forEach(t),mt.forEach(t),rt=h(e),w(ve.$$.fragment,e),nt=h(e),J=o(e,"H3",{class:!0});var vt=a(J);re=o(vt,"A",{id:!0,class:!0,href:!0});var fr=a(re);Oe=o(fr,"SPAN",{});var hr=a(Oe);w(ke.$$.fragment,hr),hr.forEach(t),fr.forEach(t),Ht=h(vt),ge=o(vt,"SPAN",{});var kt=a(ge);Tt=L(kt,"9. Que contient la variable "),Be=o(kt,"CODE",{});var mr=a(Be);It=L(mr,"result"),mr.forEach(t),Qt=L(kt," dans cet exemple de code ?"),kt.forEach(t),vt.forEach(t),st=h(e),w(qe.$$.fragment,e),ot=h(e),w(xe.$$.fragment,e),it=h(e),U.l(e),ye=$r(),this.h()},h(){l(c,"name","hf:doc:metadata"),l(c,"content",JSON.stringify(Sr)),l(x,"id","quiz-de-fin-de-chapitre"),l(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(x,"href","#quiz-de-fin-de-chapitre"),l(E,"class","relative group"),l($,"id","1.-quel-est-l\u2019ordre-du-pipeline-de-mod\xE9lisation-du-langage-?"),l($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l($,"href","#1.-quel-est-l\u2019ordre-du-pipeline-de-mod\xE9lisation-du-langage-?"),l(n,"class","relative group"),l(G,"id","2.-combien-de-dimensions-le-tenseur-produit-par-le-<i>transformer</i>-de-base-poss\xE8de-t-il-et-quelles-sont-elles-?"),l(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(G,"href","#2.-combien-de-dimensions-le-tenseur-produit-par-le-<i>transformer</i>-de-base-poss\xE8de-t-il-et-quelles-sont-elles-?"),l(B,"class","relative group"),l(K,"id","3.-lequel-des-\xE9l\xE9ments-suivants-est-un-exemple-de-tokenisation-en-sous-mots-?"),l(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(K,"href","#3.-lequel-des-\xE9l\xE9ments-suivants-est-un-exemple-de-tokenisation-en-sous-mots-?"),l(Y,"class","relative group"),l(X,"id","4.-qu\u2019est-ce-qu\u2019une-t\xEAte-de-mod\xE8le-?"),l(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(X,"href","#4.-qu\u2019est-ce-qu\u2019une-t\xEAte-de-mod\xE8le-?"),l(W,"class","relative group"),l(Z,"id","6.-quelles-sont-les-techniques-\xE0-conna\xEEtre-lors-de-la-mise-en-batch-de-s\xE9quences-de-longueurs-diff\xE9rentes-?"),l(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Z,"href","#6.-quelles-sont-les-techniques-\xE0-conna\xEEtre-lors-de-la-mise-en-batch-de-s\xE9quences-de-longueurs-diff\xE9rentes-?"),l(D,"class","relative group"),l(ee,"id","7.-quel-est-l\u2019int\xE9r\xEAt-d\u2019appliquer-une-fonction-softmax-aux-logits-produits-par-un-mod\xE8le-de-classification-de-s\xE9quences-?"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#7.-quel-est-l\u2019int\xE9r\xEAt-d\u2019appliquer-une-fonction-softmax-aux-logits-produits-par-un-mod\xE8le-de-classification-de-s\xE9quences-?"),l(R,"class","relative group"),l(te,"id","8.-autour-de-quelle-m\xE9thode-s\u2019articule-la-majeure-partie-de-l\u2019api-<i>tokenizer</i>-?"),l(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(te,"href","#8.-autour-de-quelle-m\xE9thode-s\u2019articule-la-majeure-partie-de-l\u2019api-<i>tokenizer</i>-?"),l(V,"class","relative group"),l(re,"id","9.-que-contient-la-variable-<code>result</code>-dans-cet-exemple-de-code-?"),l(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(re,"href","#9.-que-contient-la-variable-<code>result</code>-dans-cet-exemple-de-code-?"),l(J,"class","relative group")},m(e,u){r(document.head,c),d(e,p,u),A(v,e,u),d(e,m,u),d(e,E,u),r(E,x),r(x,S),A(z,S,null),r(E,k),r(E,P),r(P,i),d(e,_,u),d(e,n,u),r(n,$),r($,M),A(j,M,null),r(n,O),r(n,Pe),r(Pe,gt),d(e,Ye,u),A(ne,e,u),d(e,We,u),d(e,B,u),r(B,G),r(G,Se),A(se,Se,null),r(B,qt),r(B,oe),r(oe,xt),r(oe,Ne),r(Ne,_t),r(oe,bt),d(e,De,u),A(ie,e,u),d(e,Re,u),d(e,Y,u),r(Y,K),r(K,Le),A(ae,Le,null),r(Y,wt),r(Y,Me),r(Me,At),d(e,Ve,u),A(le,e,u),d(e,Je,u),d(e,W,u),r(W,X),r(X,je),A(ue,je,null),r(W,yt),r(W,Ce),r(Ce,zt),d(e,Ge,u),A(ce,e,u),d(e,Ke,u),_e[I].m(e,u),d(e,Ae,u),d(e,D,u),r(D,Z),r(Z,He),A(pe,He,null),r(D,Et),r(D,Te),r(Te,Pt),d(e,Xe,u),A(de,e,u),d(e,Ze,u),d(e,R,u),r(R,ee),r(ee,Ie),A(fe,Ie,null),r(R,St),r(R,Qe),r(Qe,Nt),d(e,et,u),A(he,e,u),d(e,tt,u),d(e,V,u),r(V,te),r(te,Fe),A(me,Fe,null),r(V,Lt),r(V,$e),r($e,Mt),r($e,Ue),r(Ue,jt),r($e,Ct),d(e,rt,u),A(ve,e,u),d(e,nt,u),d(e,J,u),r(J,re),r(re,Oe),A(ke,Oe,null),r(J,Ht),r(J,ge),r(ge,Tt),r(ge,Be),r(Be,It),r(ge,Qt),d(e,st,u),A(qe,e,u),d(e,ot,u),A(xe,e,u),d(e,it,u),be[F].m(e,u),d(e,ye,u),at=!0},p(e,[u]){const we={};u&1&&(we.fw=e[0]),v.$set(we);let ze=I;I=Ot(e),I!==ze&&(kr(),g(_e[ze],1,1,()=>{_e[ze]=null}),vr(),Q=_e[I],Q||(Q=_e[I]=Ut[I](e),Q.c()),q(Q,1),Q.m(Ae.parentNode,Ae));let Ee=F;F=Yt(e),F!==Ee&&(kr(),g(be[Ee],1,1,()=>{be[Ee]=null}),vr(),U=be[F],U||(U=be[F]=Bt[F](e),U.c()),q(U,1),U.m(ye.parentNode,ye))},i(e){at||(q(v.$$.fragment,e),q(z.$$.fragment,e),q(j.$$.fragment,e),q(ne.$$.fragment,e),q(se.$$.fragment,e),q(ie.$$.fragment,e),q(ae.$$.fragment,e),q(le.$$.fragment,e),q(ue.$$.fragment,e),q(ce.$$.fragment,e),q(Q),q(pe.$$.fragment,e),q(de.$$.fragment,e),q(fe.$$.fragment,e),q(he.$$.fragment,e),q(me.$$.fragment,e),q(ve.$$.fragment,e),q(ke.$$.fragment,e),q(qe.$$.fragment,e),q(xe.$$.fragment,e),q(U),at=!0)},o(e){g(v.$$.fragment,e),g(z.$$.fragment,e),g(j.$$.fragment,e),g(ne.$$.fragment,e),g(se.$$.fragment,e),g(ie.$$.fragment,e),g(ae.$$.fragment,e),g(le.$$.fragment,e),g(ue.$$.fragment,e),g(ce.$$.fragment,e),g(Q),g(pe.$$.fragment,e),g(de.$$.fragment,e),g(fe.$$.fragment,e),g(he.$$.fragment,e),g(me.$$.fragment,e),g(ve.$$.fragment,e),g(ke.$$.fragment,e),g(qe.$$.fragment,e),g(xe.$$.fragment,e),g(U),at=!1},d(e){t(c),e&&t(p),y(v,e),e&&t(m),e&&t(E),y(z),e&&t(_),e&&t(n),y(j),e&&t(Ye),y(ne,e),e&&t(We),e&&t(B),y(se),e&&t(De),y(ie,e),e&&t(Re),e&&t(Y),y(ae),e&&t(Ve),y(le,e),e&&t(Je),e&&t(W),y(ue),e&&t(Ge),y(ce,e),e&&t(Ke),_e[I].d(e),e&&t(Ae),e&&t(D),y(pe),e&&t(Xe),y(de,e),e&&t(Ze),e&&t(R),y(fe),e&&t(et),y(he,e),e&&t(tt),e&&t(V),y(me),e&&t(rt),y(ve,e),e&&t(nt),e&&t(J),y(ke),e&&t(st),y(qe,e),e&&t(ot),y(xe,e),e&&t(it),be[F].d(e),e&&t(ye)}}}const Sr={local:"quiz-de-fin-de-chapitre",title:"Quiz de fin de chapitre"};function Nr(T,c,p){let v="pt";return br(()=>{const m=new URLSearchParams(window.location.search);p(0,v=m.get("fw")||"pt")}),[v]}class Tr extends gr{constructor(c){super();qr(this,c,Nr,Pr,xr,{})}}export{Tr as default,Sr as metadata};
