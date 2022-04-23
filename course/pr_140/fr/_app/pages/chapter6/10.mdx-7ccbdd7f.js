import{S as is,i as as,s as os,e as s,k as u,w as d,t as m,M as ls,c as r,d as t,m as p,a as i,x as f,h as c,b as o,F as n,g as l,y as h,L as us,q as v,o as $,B as x,v as ps}from"../../chunks/vendor-1e8b365d.js";import{I as g}from"../../chunks/IconCopyLink-483c28ba.js";import{Q as q}from"../../chunks/Question-31426fe2.js";function ms(zn){let k,Ve,w,L,we,V,Qt,ze,Lt,Re,qe,Ut,Fe,z,U,_e,R,It,F,Ht,Ee,Mt,Bt,Ge,G,Je,_,I,ye,J,Wt,K,jt,be,Dt,Ot,Ke,X,Xe,E,H,Pe,Y,Tt,Z,Vt,Ce,Rt,Ft,Ye,ee,Ze,y,M,Ne,te,Gt,b,Jt,Ae,Kt,Xt,Se,Yt,Zt,et,ne,tt,P,B,Qe,se,en,re,tn,Le,nn,sn,nt,ie,st,C,W,Ue,ae,rn,Ie,an,rt,oe,it,N,j,He,le,on,ue,ln,Me,un,pn,at,pe,ot,A,D,Be,me,mn,ce,cn,We,dn,fn,lt,de,ut,S,O,je,fe,hn,he,vn,De,$n,xn,pt,ve,mt,Q,T,Oe,$e,gn,xe,qn,Te,kn,wn,ct,ge,dt;return V=new g({}),R=new g({}),G=new q({props:{choices:[{text:"Lorsque votre jeu de donn\xE9es est similaire \xE0 celui utilis\xE9 par un mod\xE8le pr\xE9-entra\xEEn\xE9 existant, et que vous voulez pr\xE9-entra\xEEner un nouveau mod\xE8le",explain:"Dans ce cas, pour \xE9conomiser du temps et des ressources de calcul, il serait pr\xE9f\xE9rable d'utiliser le m\xEAme <i>tokenizer</i> que le mod\xE8le pr\xE9-entra\xEEn\xE9 et de <i>finetuner</i> ce mod\xE8le \xE0 la place."},{text:"Lorsque votre jeu de donn\xE9es est similaire \xE0 celui utilis\xE9 par un mod\xE8le pr\xE9-entra\xEEn\xE9 existant et que vous souhaitez <i>finetuner</i> un nouveau mod\xE8le en utilisant ce mod\xE8le pr\xE9-entra\xEEn\xE9.",explain:"Pour <i>finetuner</i> un mod\xE8le \xE0 partir d'un mod\xE8le pr\xE9-entra\xEEn\xE9, vous devez toujours utiliser le m\xEAme <i>tokenizer</i>."},{text:"Lorsque votre jeu de donn\xE9es est diff\xE9rent de celui utilis\xE9 par un mod\xE8le pr\xE9-entra\xEEn\xE9 existant, et que vous souhaitez pr\xE9-entra\xEEner un nouveau mod\xE8le.",explain:"C'est exact ! Dans ce cas, il n'y a aucun avantage \xE0 utiliser le m\xEAme <i>tokenizer</i>.",correct:!0},{text:"Lorsque votre jeu de donn\xE9es est diff\xE9rent de celui utilis\xE9 par un mod\xE8le pr\xE9-entra\xEEn\xE9 existant, mais que vous souhaitez <i>finetuner</i> un nouveau mod\xE8le en utilisant ce mod\xE8le pr\xE9-entra\xEEn\xE9.",explain:"Pour <i>finetuner</i> un mod\xE8le \xE0 partir d'un mod\xE8le pr\xE9-entra\xEEn\xE9, vous devez toujours utiliser le m\xEAme <i>tokenizer</i>."}]}}),J=new g({}),X=new q({props:{choices:[{text:"C'est le seul type que la m\xE9thode <code>train_new_from_iterator()</code> accepte.",explain:"Une liste de listes de textes est un type particulier de g\xE9n\xE9rateur de listes de textes, la m\xE9thode l'acceptera donc aussi. Essayez \xE0 nouveau !"},{text:"Vous \xE9viterez de charger l'ensemble des donn\xE9es en m\xE9moire en une seule fois.",explain:"Exact ! Chaque batch de textes sera lib\xE9r\xE9 de la m\xE9moire lorsque vous it\xE9rerez, et le gain sera particuli\xE8rement visible si vous utilisez des \u{1F917} <i>Datasets</i> pour stocker vos textes.",correct:!0},{text:"Cela permettra \xE0 la biblioth\xE8que \u{1F917} <i>Tokenizers</i> d'utiliser le multitraitement.",explain:"Non, il utilisera le multiprocesseur dans tous les cas."},{text:"Le <i>tokenizer</i> que vous entra\xEEnez g\xE9n\xE9rera de meilleurs textes.",explain:"Le <i>tokenizer</i> ne g\xE9n\xE8re pas de texte. Vous le confondez avec un mod\xE8le de langage ?"}]}}),Y=new g({}),ee=new q({props:{choices:[{text:"Il peut traiter les entr\xE9es plus rapidement qu'un <i>tokenizer</i> lent lorsque vous faites des batchs d'entr\xE9es.",explain:"Correct ! Gr\xE2ce au parall\xE9lisme impl\xE9ment\xE9 dans Rust, il sera plus rapide sur les batchs d'entr\xE9es. Quel autre avantage pouvez-vous imaginer ?",correct:!0},{text:"Les *tokenizers* rapides sont toujours plus rapides que leurs homologues lents.",explain:"Un <i>tokenizer</i> rapide peut en fait \xEAtre plus lent si vous ne lui donnez qu'un seul ou tr\xE8s peu de textes, car il ne peut pas utiliser le parall\xE9lisme."},{text:"Il peut appliquer le *padding* et la troncature.",explain:"C'est vrai, mais les *tokenizers* lents le font aussi."},{text:"Il poss\xE8de des fonctionnalit\xE9s suppl\xE9mentaires qui vous permettent d'associer les <i>tokens</i> \xE0 l'extrait de texte qui les a cr\xE9\xE9s.",explain:"En effet, c'est ce qu'on appelle des mappages de d\xE9calage. Ce n'est pas le seul avantage, cependant.",correct:!0}]}}),te=new g({}),ne=new q({props:{choices:[{text:"Les entit\xE9s ayant la m\xEAme \xE9tiquette sont fusionn\xE9es en une seule entit\xE9.",explain:"C'est un peu trop simplifier les choses. Essayez encore !"},{text:"Il existe une \xE9tiquette pour le d\xE9but d'une entit\xE9 et une \xE9tiquette pour la suite d'une entit\xE9.",explain:"Correct !",correct:!0},{text:"Dans un mot donn\xE9, tant que le premier <i>token</i> porte l'\xE9tiquette de l'entit\xE9, le mot entier est consid\xE9r\xE9 comme \xE9tiquet\xE9 avec cette entit\xE9.",explain:"C'est une strat\xE9gie pour g\xE9rer les entit\xE9s. Quelles autres r\xE9ponses s'appliquent ici ?",correct:!0},{text:"Lorsqu'un <i>token</i> a l'\xE9tiquette d'une entit\xE9 donn\xE9e, tout autre <i>token</i> suivant ayant la m\xEAme \xE9tiquette est consid\xE9r\xE9 comme faisant partie de la m\xEAme entit\xE9, \xE0 moins qu'il ne soit \xE9tiquet\xE9 comme le d\xE9but d'une nouvelle entit\xE9.",explain:"C'est la fa\xE7on la plus courante de regrouper des entit\xE9s, mais ce n'est pas la seule bonne r\xE9ponse.",correct:!0}]}}),se=new g({}),ie=new q({props:{choices:[{text:"Ce n'est pas vraiment le cas, car il tronque le contexte long \xE0 la longueur maximale accept\xE9e par le mod\xE8le.",explain:"Il existe un truc que vous pouvez utiliser pour g\xE9rer les contextes longs. Vous en souvenez-vous ?"},{text:"Il divise le contexte en plusieurs parties et fait la moyenne des r\xE9sultats obtenus.",explain:"Non, cela n'aurait pas de sens de faire la moyenne des r\xE9sultats, car certaines parties du contexte n'incluront pas la r\xE9ponse."},{text:"Il divise le contexte en plusieurs parties (avec chevauchement) et trouve le score maximum pour une r\xE9ponse dans chaque partie.",explain:"C'est la bonne r\xE9ponse !",correct:!0},{text:"Il divise le contexte en plusieurs parties (sans chevauchement, par souci d'efficacit\xE9) et trouve le score maximum pour une r\xE9ponse dans chaque partie.",explain:"Non, il comprend un certain chevauchement entre les parties pour \xE9viter une situation o\xF9 la r\xE9ponse serait divis\xE9e en deux parties."}]}}),ae=new g({}),oe=new q({props:{choices:[{text:"C'est le nettoyage que le *tokenizer* effectue sur les textes lors des \xE9tapes initiales.",explain:"C'est exact. Par exemple, il peut s'agir de supprimer les accents ou les espaces, ou de mettre les entr\xE9es en minuscules.",correct:!0},{text:"Il s'agit d'une technique d'augmentation des donn\xE9es qui consiste \xE0 rendre le texte plus normal en supprimant les mots rares.",explain:"C'est incorrect ! Essayez encore."},{text:"C'est l'\xE9tape finale du post-traitement o\xF9 le *tokenizer* ajoute les *tokens* sp\xE9ciaux.",explain:"Cette \xE9tape est simplement appel\xE9e post-traitement."},{text:"C'est lorsque les incorporations sont faites avec une moyenne de 0 et un \xE9cart-type de 1, en soustrayant la moyenne et en divisant par l'\xE9cart-type.",explain:"Ce processus est commun\xE9ment appel\xE9 normalisation lorsqu'il est appliqu\xE9 aux valeurs des pixels en vision par ordinateur, mais ce n'est pas ce que signifie la normalisation en NLP."}]}}),le=new g({}),pe=new q({props:{choices:[{text:"C'est l'\xE9tape qui pr\xE9c\xE8de la tok\xE9nisation, o\xF9 l'augmentation des donn\xE9es (comme le masquage al\xE9atoire) est appliqu\xE9e.",explain:"Non, cette \xE9tape fait partie du pr\xE9traitement."},{text:"C'est l'\xE9tape avant la tok\xE9nisation, o\xF9 les op\xE9rations de nettoyage souhait\xE9es sont appliqu\xE9es au texte.",explain:"Non, c'est l'\xE9tape de normalisation."},{text:"C'est l'\xE9tape qui pr\xE9c\xE8de l'application du mod\xE8le *tokenizer*, pour diviser l'entr\xE9e en mots.",explain:"C'est la bonne r\xE9ponse !",correct:!0},{text:"Il s'agit de l'\xE9tape pr\xE9c\xE9dant l'application du mod\xE8le *tokenizer*, qui divise l'entr\xE9e en *tokens*.",explain:"Non, la division en *tokens* est le travail du mod\xE8le *tokenizer*."}]}}),me=new g({}),de=new q({props:{choices:[{text:"BPE est un algorithme de tok\xE9nisation de sous-mots qui part d'un petit vocabulaire et apprend des r\xE8gles de fusion.",explain:"C'est le cas en effet !",correct:!0},{text:"BPE est un algorithme de tok\xE9nisation des sous-mots qui part d'un grand vocabulaire et en retire progressivement les <i>tokens</i>.",explain:"Non, c'est l'approche adopt\xE9e par un algorithme de tok\xE9nisation diff\xE9rent."},{text:"Un <i>tokenizer</i> BPE apprend les r\xE8gles de fusion en fusionnant la paire de <i>tokens</i> la plus fr\xE9quente.",explain:"C'est exact !",correct:!0},{text:"Un <i>tokenizer</i> BPE apprend une r\xE8gle de fusion en fusionnant la paire de <i>tokens</i> qui maximise un score qui privil\xE9gie les paires fr\xE9quentes avec des parties individuelles moins fr\xE9quentes.",explain:"Non, c'est la strat\xE9gie appliqu\xE9e par un autre algorithme de tokenization."},{text:"BPE tokenise les mots en sous-mots en les divisant en caract\xE8res, puis en appliquant les r\xE8gles de fusion.",explain:"C'est exact !",correct:!0},{text:"BPE tokenise les mots en sous-mots en trouvant le plus long sous-mot du vocabulaire en commen\xE7ant par le d\xE9but, puis en r\xE9p\xE9tant le processus pour le reste du texte.",explain:"Non, c'est la fa\xE7on de faire d'un autre algorithme de tokenization."}]}}),fe=new g({}),ve=new q({props:{choices:[{text:"WordPiece est un algorithme de tok\xE9nisation des sous-mots qui part d'un petit vocabulaire et apprend des r\xE8gles de fusion.",explain:"C'est le cas en effet !",correct:!0},{text:"WordPiece est un algorithme de tok\xE9nisation des sous-mots qui part d'un grand vocabulaire et en retire progressivement les <i>tokens</i>.",explain:"Non, c'est l'approche adopt\xE9e par un algorithme de tok\xE9nisation diff\xE9rent."},{text:"WordPiece Les <i>tokenizer</i> apprennent les r\xE8gles de fusion en fusionnant la paire de <i>tokens</i> la plus fr\xE9quente.",explain:"Non, c'est la strat\xE9gie appliqu\xE9e par un autre algorithme de tokenization."},{text:"Un <i>tokenizer</i> WordPiece apprend une r\xE8gle de fusion en fusionnant la paire de <i>tokens</i> qui maximise un score qui privil\xE9gie les paires fr\xE9quentes avec des parties individuelles moins fr\xE9quentes.",explain:"C'est exact !",correct:!0},{text:"WordPiece tokenise les mots en sous-mots en trouvant la segmentation en <i>tokens</i> la plus probable, selon le mod\xE8le.",explain:"Non, c'est le fonctionnement d'un autre algorithme de tokenization."},{text:"WordPiece tokenise les mots en sous-mots en trouvant le plus long sous-mot du vocabulaire en commen\xE7ant par le d\xE9but, puis en r\xE9p\xE9tant le processus pour le reste du texte.",explain:"Oui, c'est ainsi que WordPiece proc\xE8de pour l'encodage.",correct:!0}]}}),$e=new g({}),ge=new q({props:{choices:[{text:"Unigram est un algorithme de tok\xE9nisation des sous-mots qui part d'un petit vocabulaire et apprend des r\xE8gles de fusion.",explain:"Non, c'est l'approche adopt\xE9e par un algorithme de tok\xE9nisation diff\xE9rent."},{text:"Unigram est un algorithme de tok\xE9nisation des sous-mots qui part d'un grand vocabulaire et en retire progressivement les <i>tokens</i>.",explain:"C'est exact !",correct:!0},{text:"Unigram adapte son vocabulaire en minimisant une perte calcul\xE9e sur l'ensemble du corpus.",explain:"C'est exact !",correct:!0},{text:"Unigram adapte son vocabulaire en conservant les sous-mots les plus fr\xE9quents.",explain:"Non, cet incorrect."},{text:"Unigram segmente les mots en sous-mots en trouvant la segmentation la plus probable en <i>tokens</i>, selon le mod\xE8le.",explain:"C'est exact !",correct:!0},{text:"Unigram d\xE9compose les mots en sous-mots en les divisant en caract\xE8res puis en appliquant les r\xE8gles de fusion.",explain:"Non, c'est le fonctionnement d'un autre algorithme de tokenization."}]}}),{c(){k=s("meta"),Ve=u(),w=s("h1"),L=s("a"),we=s("span"),d(V.$$.fragment),Qt=u(),ze=s("span"),Lt=m("Quiz de fin de chapitre"),Re=u(),qe=s("p"),Ut=m("Testons ce que vous avez appris dans ce chapitre !"),Fe=u(),z=s("h3"),U=s("a"),_e=s("span"),d(R.$$.fragment),It=u(),F=s("span"),Ht=m("1. Quand devez-vous entra\xEEner un nouveau "),Ee=s("em"),Mt=m("tokenizer"),Bt=m(" ?"),Ge=u(),d(G.$$.fragment),Je=u(),_=s("h3"),I=s("a"),ye=s("span"),d(J.$$.fragment),Wt=u(),K=s("span"),jt=m("2. Quel est l\u2019avantage d\u2019utiliser un g\xE9n\xE9rateur de listes de textes par rapport \xE0 une liste de listes de textes lors de l\u2019utilisation de "),be=s("code"),Dt=m("train_new_from_iterator()"),Ot=m(" ?"),Ke=u(),d(X.$$.fragment),Xe=u(),E=s("h3"),H=s("a"),Pe=s("span"),d(Y.$$.fragment),Tt=u(),Z=s("span"),Vt=m("3. Quels sont les avantages d\u2019utiliser un "),Ce=s("em"),Rt=m("tokenizer"),Ft=m(" \xAB rapide \xBB ?"),Ye=u(),d(ee.$$.fragment),Ze=u(),y=s("h3"),M=s("a"),Ne=s("span"),d(te.$$.fragment),Gt=u(),b=s("span"),Jt=m("4. Comment le pipeline "),Ae=s("code"),Kt=m("token-classification"),Xt=m(" g\xE8re-t-il les entit\xE9s qui s\u2019\xE9tendent sur plusieurs "),Se=s("em"),Yt=m("tokens"),Zt=m(" ?"),et=u(),d(ne.$$.fragment),tt=u(),P=s("h3"),B=s("a"),Qe=s("span"),d(se.$$.fragment),en=u(),re=s("span"),tn=m("5. Comment le pipeline "),Le=s("code"),nn=m("question-answering"),sn=m(" g\xE8re-t-il les contextes longs ?"),nt=u(),d(ie.$$.fragment),st=u(),C=s("h3"),W=s("a"),Ue=s("span"),d(ae.$$.fragment),rn=u(),Ie=s("span"),an=m("6. Qu\u2019est-ce que la normalisation ?"),rt=u(),d(oe.$$.fragment),it=u(),N=s("h3"),j=s("a"),He=s("span"),d(le.$$.fragment),on=u(),ue=s("span"),ln=m("7. Qu\u2019est-ce que la pr\xE9-tok\xE9nisation pour un "),Me=s("em"),un=m("tokenizer"),pn=m(" en sous-mots ?"),at=u(),d(pe.$$.fragment),ot=u(),A=s("h3"),D=s("a"),Be=s("span"),d(me.$$.fragment),mn=u(),ce=s("span"),cn=m("8. S\xE9lectionnez les phrases qui s\u2019appliquent au "),We=s("em"),dn=m("tokenizer"),fn=m(" BPE."),lt=u(),d(de.$$.fragment),ut=u(),S=s("h3"),O=s("a"),je=s("span"),d(fe.$$.fragment),hn=u(),he=s("span"),vn=m("9. S\xE9lectionnez les phrases qui s\u2019appliquent au "),De=s("em"),$n=m("tokenizer"),xn=m(" WordPiece."),pt=u(),d(ve.$$.fragment),mt=u(),Q=s("h3"),T=s("a"),Oe=s("span"),d($e.$$.fragment),gn=u(),xe=s("span"),qn=m("10. S\xE9lectionnez les phrases qui s\u2019appliquent au "),Te=s("em"),kn=m("tokenizer"),wn=m(" Unigram."),ct=u(),d(ge.$$.fragment),this.h()},l(e){const a=ls('[data-svelte="svelte-1phssyn"]',document.head);k=r(a,"META",{name:!0,content:!0}),a.forEach(t),Ve=p(e),w=r(e,"H1",{class:!0});var ft=i(w);L=r(ft,"A",{id:!0,class:!0,href:!0});var _n=i(L);we=r(_n,"SPAN",{});var En=i(we);f(V.$$.fragment,En),En.forEach(t),_n.forEach(t),Qt=p(ft),ze=r(ft,"SPAN",{});var yn=i(ze);Lt=c(yn,"Quiz de fin de chapitre"),yn.forEach(t),ft.forEach(t),Re=p(e),qe=r(e,"P",{});var bn=i(qe);Ut=c(bn,"Testons ce que vous avez appris dans ce chapitre !"),bn.forEach(t),Fe=p(e),z=r(e,"H3",{class:!0});var ht=i(z);U=r(ht,"A",{id:!0,class:!0,href:!0});var Pn=i(U);_e=r(Pn,"SPAN",{});var Cn=i(_e);f(R.$$.fragment,Cn),Cn.forEach(t),Pn.forEach(t),It=p(ht),F=r(ht,"SPAN",{});var vt=i(F);Ht=c(vt,"1. Quand devez-vous entra\xEEner un nouveau "),Ee=r(vt,"EM",{});var Nn=i(Ee);Mt=c(Nn,"tokenizer"),Nn.forEach(t),Bt=c(vt," ?"),vt.forEach(t),ht.forEach(t),Ge=p(e),f(G.$$.fragment,e),Je=p(e),_=r(e,"H3",{class:!0});var $t=i(_);I=r($t,"A",{id:!0,class:!0,href:!0});var An=i(I);ye=r(An,"SPAN",{});var Sn=i(ye);f(J.$$.fragment,Sn),Sn.forEach(t),An.forEach(t),Wt=p($t),K=r($t,"SPAN",{});var xt=i(K);jt=c(xt,"2. Quel est l\u2019avantage d\u2019utiliser un g\xE9n\xE9rateur de listes de textes par rapport \xE0 une liste de listes de textes lors de l\u2019utilisation de "),be=r(xt,"CODE",{});var Qn=i(be);Dt=c(Qn,"train_new_from_iterator()"),Qn.forEach(t),Ot=c(xt," ?"),xt.forEach(t),$t.forEach(t),Ke=p(e),f(X.$$.fragment,e),Xe=p(e),E=r(e,"H3",{class:!0});var gt=i(E);H=r(gt,"A",{id:!0,class:!0,href:!0});var Ln=i(H);Pe=r(Ln,"SPAN",{});var Un=i(Pe);f(Y.$$.fragment,Un),Un.forEach(t),Ln.forEach(t),Tt=p(gt),Z=r(gt,"SPAN",{});var qt=i(Z);Vt=c(qt,"3. Quels sont les avantages d\u2019utiliser un "),Ce=r(qt,"EM",{});var In=i(Ce);Rt=c(In,"tokenizer"),In.forEach(t),Ft=c(qt," \xAB rapide \xBB ?"),qt.forEach(t),gt.forEach(t),Ye=p(e),f(ee.$$.fragment,e),Ze=p(e),y=r(e,"H3",{class:!0});var kt=i(y);M=r(kt,"A",{id:!0,class:!0,href:!0});var Hn=i(M);Ne=r(Hn,"SPAN",{});var Mn=i(Ne);f(te.$$.fragment,Mn),Mn.forEach(t),Hn.forEach(t),Gt=p(kt),b=r(kt,"SPAN",{});var ke=i(b);Jt=c(ke,"4. Comment le pipeline "),Ae=r(ke,"CODE",{});var Bn=i(Ae);Kt=c(Bn,"token-classification"),Bn.forEach(t),Xt=c(ke," g\xE8re-t-il les entit\xE9s qui s\u2019\xE9tendent sur plusieurs "),Se=r(ke,"EM",{});var Wn=i(Se);Yt=c(Wn,"tokens"),Wn.forEach(t),Zt=c(ke," ?"),ke.forEach(t),kt.forEach(t),et=p(e),f(ne.$$.fragment,e),tt=p(e),P=r(e,"H3",{class:!0});var wt=i(P);B=r(wt,"A",{id:!0,class:!0,href:!0});var jn=i(B);Qe=r(jn,"SPAN",{});var Dn=i(Qe);f(se.$$.fragment,Dn),Dn.forEach(t),jn.forEach(t),en=p(wt),re=r(wt,"SPAN",{});var zt=i(re);tn=c(zt,"5. Comment le pipeline "),Le=r(zt,"CODE",{});var On=i(Le);nn=c(On,"question-answering"),On.forEach(t),sn=c(zt," g\xE8re-t-il les contextes longs ?"),zt.forEach(t),wt.forEach(t),nt=p(e),f(ie.$$.fragment,e),st=p(e),C=r(e,"H3",{class:!0});var _t=i(C);W=r(_t,"A",{id:!0,class:!0,href:!0});var Tn=i(W);Ue=r(Tn,"SPAN",{});var Vn=i(Ue);f(ae.$$.fragment,Vn),Vn.forEach(t),Tn.forEach(t),rn=p(_t),Ie=r(_t,"SPAN",{});var Rn=i(Ie);an=c(Rn,"6. Qu\u2019est-ce que la normalisation ?"),Rn.forEach(t),_t.forEach(t),rt=p(e),f(oe.$$.fragment,e),it=p(e),N=r(e,"H3",{class:!0});var Et=i(N);j=r(Et,"A",{id:!0,class:!0,href:!0});var Fn=i(j);He=r(Fn,"SPAN",{});var Gn=i(He);f(le.$$.fragment,Gn),Gn.forEach(t),Fn.forEach(t),on=p(Et),ue=r(Et,"SPAN",{});var yt=i(ue);ln=c(yt,"7. Qu\u2019est-ce que la pr\xE9-tok\xE9nisation pour un "),Me=r(yt,"EM",{});var Jn=i(Me);un=c(Jn,"tokenizer"),Jn.forEach(t),pn=c(yt," en sous-mots ?"),yt.forEach(t),Et.forEach(t),at=p(e),f(pe.$$.fragment,e),ot=p(e),A=r(e,"H3",{class:!0});var bt=i(A);D=r(bt,"A",{id:!0,class:!0,href:!0});var Kn=i(D);Be=r(Kn,"SPAN",{});var Xn=i(Be);f(me.$$.fragment,Xn),Xn.forEach(t),Kn.forEach(t),mn=p(bt),ce=r(bt,"SPAN",{});var Pt=i(ce);cn=c(Pt,"8. S\xE9lectionnez les phrases qui s\u2019appliquent au "),We=r(Pt,"EM",{});var Yn=i(We);dn=c(Yn,"tokenizer"),Yn.forEach(t),fn=c(Pt," BPE."),Pt.forEach(t),bt.forEach(t),lt=p(e),f(de.$$.fragment,e),ut=p(e),S=r(e,"H3",{class:!0});var Ct=i(S);O=r(Ct,"A",{id:!0,class:!0,href:!0});var Zn=i(O);je=r(Zn,"SPAN",{});var es=i(je);f(fe.$$.fragment,es),es.forEach(t),Zn.forEach(t),hn=p(Ct),he=r(Ct,"SPAN",{});var Nt=i(he);vn=c(Nt,"9. S\xE9lectionnez les phrases qui s\u2019appliquent au "),De=r(Nt,"EM",{});var ts=i(De);$n=c(ts,"tokenizer"),ts.forEach(t),xn=c(Nt," WordPiece."),Nt.forEach(t),Ct.forEach(t),pt=p(e),f(ve.$$.fragment,e),mt=p(e),Q=r(e,"H3",{class:!0});var At=i(Q);T=r(At,"A",{id:!0,class:!0,href:!0});var ns=i(T);Oe=r(ns,"SPAN",{});var ss=i(Oe);f($e.$$.fragment,ss),ss.forEach(t),ns.forEach(t),gn=p(At),xe=r(At,"SPAN",{});var St=i(xe);qn=c(St,"10. S\xE9lectionnez les phrases qui s\u2019appliquent au "),Te=r(St,"EM",{});var rs=i(Te);kn=c(rs,"tokenizer"),rs.forEach(t),wn=c(St," Unigram."),St.forEach(t),At.forEach(t),ct=p(e),f(ge.$$.fragment,e),this.h()},h(){o(k,"name","hf:doc:metadata"),o(k,"content",JSON.stringify(cs)),o(L,"id","quiz-de-fin-de-chapitre"),o(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(L,"href","#quiz-de-fin-de-chapitre"),o(w,"class","relative group"),o(U,"id","1.-quand-devez-vous-entra\xEEner-un-nouveau-<em>tokenizer</em>-?"),o(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(U,"href","#1.-quand-devez-vous-entra\xEEner-un-nouveau-<em>tokenizer</em>-?"),o(z,"class","relative group"),o(I,"id","2.-quel-est-l\u2019avantage-d\u2019utiliser-un-g\xE9n\xE9rateur-de-listes-de-textes-par-rapport-\xE0-une-liste-de-listes-de-textes-lors-de-l\u2019utilisation-de-<code>train_new_from_iterator()</code>-?"),o(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(I,"href","#2.-quel-est-l\u2019avantage-d\u2019utiliser-un-g\xE9n\xE9rateur-de-listes-de-textes-par-rapport-\xE0-une-liste-de-listes-de-textes-lors-de-l\u2019utilisation-de-<code>train_new_from_iterator()</code>-?"),o(_,"class","relative group"),o(H,"id","3.-quels-sont-les-avantages-d\u2019utiliser-un-<em>tokenizer</em>-\xAB-rapide-\xBB-?"),o(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(H,"href","#3.-quels-sont-les-avantages-d\u2019utiliser-un-<em>tokenizer</em>-\xAB-rapide-\xBB-?"),o(E,"class","relative group"),o(M,"id","4.-comment-le-pipeline-<code>token-classification</code>-g\xE8re-t-il-les-entit\xE9s-qui-s\u2019\xE9tendent-sur-plusieurs-<em>tokens</em>-?"),o(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(M,"href","#4.-comment-le-pipeline-<code>token-classification</code>-g\xE8re-t-il-les-entit\xE9s-qui-s\u2019\xE9tendent-sur-plusieurs-<em>tokens</em>-?"),o(y,"class","relative group"),o(B,"id","5.-comment-le-pipeline-<code>question-answering</code>-g\xE8re-t-il-les-contextes-longs-?"),o(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(B,"href","#5.-comment-le-pipeline-<code>question-answering</code>-g\xE8re-t-il-les-contextes-longs-?"),o(P,"class","relative group"),o(W,"id","6.-qu\u2019est-ce-que-la-normalisation-?"),o(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(W,"href","#6.-qu\u2019est-ce-que-la-normalisation-?"),o(C,"class","relative group"),o(j,"id","7.-qu\u2019est-ce-que-la-pr\xE9-tok\xE9nisation-pour-un-<em>tokenizer</em>-en-sous-mots-?"),o(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(j,"href","#7.-qu\u2019est-ce-que-la-pr\xE9-tok\xE9nisation-pour-un-<em>tokenizer</em>-en-sous-mots-?"),o(N,"class","relative group"),o(D,"id","8.-s\xE9lectionnez-les-phrases-qui-s\u2019appliquent-au-<em>tokenizer</em>-bpe."),o(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(D,"href","#8.-s\xE9lectionnez-les-phrases-qui-s\u2019appliquent-au-<em>tokenizer</em>-bpe."),o(A,"class","relative group"),o(O,"id","9.-s\xE9lectionnez-les-phrases-qui-s\u2019appliquent-au-<em>tokenizer</em>-wordpiece."),o(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(O,"href","#9.-s\xE9lectionnez-les-phrases-qui-s\u2019appliquent-au-<em>tokenizer</em>-wordpiece."),o(S,"class","relative group"),o(T,"id","10.-s\xE9lectionnez-les-phrases-qui-s\u2019appliquent-au-<em>tokenizer</em>-unigram."),o(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),o(T,"href","#10.-s\xE9lectionnez-les-phrases-qui-s\u2019appliquent-au-<em>tokenizer</em>-unigram."),o(Q,"class","relative group")},m(e,a){n(document.head,k),l(e,Ve,a),l(e,w,a),n(w,L),n(L,we),h(V,we,null),n(w,Qt),n(w,ze),n(ze,Lt),l(e,Re,a),l(e,qe,a),n(qe,Ut),l(e,Fe,a),l(e,z,a),n(z,U),n(U,_e),h(R,_e,null),n(z,It),n(z,F),n(F,Ht),n(F,Ee),n(Ee,Mt),n(F,Bt),l(e,Ge,a),h(G,e,a),l(e,Je,a),l(e,_,a),n(_,I),n(I,ye),h(J,ye,null),n(_,Wt),n(_,K),n(K,jt),n(K,be),n(be,Dt),n(K,Ot),l(e,Ke,a),h(X,e,a),l(e,Xe,a),l(e,E,a),n(E,H),n(H,Pe),h(Y,Pe,null),n(E,Tt),n(E,Z),n(Z,Vt),n(Z,Ce),n(Ce,Rt),n(Z,Ft),l(e,Ye,a),h(ee,e,a),l(e,Ze,a),l(e,y,a),n(y,M),n(M,Ne),h(te,Ne,null),n(y,Gt),n(y,b),n(b,Jt),n(b,Ae),n(Ae,Kt),n(b,Xt),n(b,Se),n(Se,Yt),n(b,Zt),l(e,et,a),h(ne,e,a),l(e,tt,a),l(e,P,a),n(P,B),n(B,Qe),h(se,Qe,null),n(P,en),n(P,re),n(re,tn),n(re,Le),n(Le,nn),n(re,sn),l(e,nt,a),h(ie,e,a),l(e,st,a),l(e,C,a),n(C,W),n(W,Ue),h(ae,Ue,null),n(C,rn),n(C,Ie),n(Ie,an),l(e,rt,a),h(oe,e,a),l(e,it,a),l(e,N,a),n(N,j),n(j,He),h(le,He,null),n(N,on),n(N,ue),n(ue,ln),n(ue,Me),n(Me,un),n(ue,pn),l(e,at,a),h(pe,e,a),l(e,ot,a),l(e,A,a),n(A,D),n(D,Be),h(me,Be,null),n(A,mn),n(A,ce),n(ce,cn),n(ce,We),n(We,dn),n(ce,fn),l(e,lt,a),h(de,e,a),l(e,ut,a),l(e,S,a),n(S,O),n(O,je),h(fe,je,null),n(S,hn),n(S,he),n(he,vn),n(he,De),n(De,$n),n(he,xn),l(e,pt,a),h(ve,e,a),l(e,mt,a),l(e,Q,a),n(Q,T),n(T,Oe),h($e,Oe,null),n(Q,gn),n(Q,xe),n(xe,qn),n(xe,Te),n(Te,kn),n(xe,wn),l(e,ct,a),h(ge,e,a),dt=!0},p:us,i(e){dt||(v(V.$$.fragment,e),v(R.$$.fragment,e),v(G.$$.fragment,e),v(J.$$.fragment,e),v(X.$$.fragment,e),v(Y.$$.fragment,e),v(ee.$$.fragment,e),v(te.$$.fragment,e),v(ne.$$.fragment,e),v(se.$$.fragment,e),v(ie.$$.fragment,e),v(ae.$$.fragment,e),v(oe.$$.fragment,e),v(le.$$.fragment,e),v(pe.$$.fragment,e),v(me.$$.fragment,e),v(de.$$.fragment,e),v(fe.$$.fragment,e),v(ve.$$.fragment,e),v($e.$$.fragment,e),v(ge.$$.fragment,e),dt=!0)},o(e){$(V.$$.fragment,e),$(R.$$.fragment,e),$(G.$$.fragment,e),$(J.$$.fragment,e),$(X.$$.fragment,e),$(Y.$$.fragment,e),$(ee.$$.fragment,e),$(te.$$.fragment,e),$(ne.$$.fragment,e),$(se.$$.fragment,e),$(ie.$$.fragment,e),$(ae.$$.fragment,e),$(oe.$$.fragment,e),$(le.$$.fragment,e),$(pe.$$.fragment,e),$(me.$$.fragment,e),$(de.$$.fragment,e),$(fe.$$.fragment,e),$(ve.$$.fragment,e),$($e.$$.fragment,e),$(ge.$$.fragment,e),dt=!1},d(e){t(k),e&&t(Ve),e&&t(w),x(V),e&&t(Re),e&&t(qe),e&&t(Fe),e&&t(z),x(R),e&&t(Ge),x(G,e),e&&t(Je),e&&t(_),x(J),e&&t(Ke),x(X,e),e&&t(Xe),e&&t(E),x(Y),e&&t(Ye),x(ee,e),e&&t(Ze),e&&t(y),x(te),e&&t(et),x(ne,e),e&&t(tt),e&&t(P),x(se),e&&t(nt),x(ie,e),e&&t(st),e&&t(C),x(ae),e&&t(rt),x(oe,e),e&&t(it),e&&t(N),x(le),e&&t(at),x(pe,e),e&&t(ot),e&&t(A),x(me),e&&t(lt),x(de,e),e&&t(ut),e&&t(S),x(fe),e&&t(pt),x(ve,e),e&&t(mt),e&&t(Q),x($e),e&&t(ct),x(ge,e)}}}const cs={local:"quiz-de-fin-de-chapitre",title:"Quiz de fin de chapitre"};function ds(zn){return ps(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $s extends is{constructor(k){super();as(this,k,ds,ms,os,{})}}export{$s as default,cs as metadata};
