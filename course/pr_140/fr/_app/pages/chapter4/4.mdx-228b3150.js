import{S as pr,i as cr,s as mr,e as l,k as p,w as v,t as n,M as fr,c as i,d as t,m as c,a as r,x as h,h as u,b as d,F as s,g as o,y as b,L as vr,q as E,o as _,B as q,v as hr}from"../../chunks/vendor-1e8b365d.js";import{I as $}from"../../chunks/IconCopyLink-483c28ba.js";import{C as br}from"../../chunks/CodeBlock-e5764662.js";function Er(Jl){let P,$t,y,M,Se,te,$s,je,ws,wt,I,xs,De,Ps,ys,xt,qe,As,Pt,H,ks,Me,gs,zs,yt,R,Cs,se,Ls,Ns,At,$e,Ss,kt,m,Ie,js,Ds,He,Ms,Is,Re,Hs,Rs,Ve,Vs,Os,Oe,Us,Ts,Ue,Fs,Bs,Te,Gs,gt,we,Js,zt,A,V,Fe,le,Ks,Be,Qs,Ct,xe,Ws,Lt,k,O,Ge,ie,Xs,Je,Ys,Nt,Pe,Zs,St,g,U,Ke,re,el,Qe,tl,jt,w,sl,We,ll,il,Xe,rl,al,Dt,z,T,Ye,ae,ol,Ze,nl,Mt,ye,ul,It,C,F,et,oe,dl,tt,pl,Ht,Ae,cl,Rt,L,B,st,ne,ml,lt,fl,Vt,ke,vl,Ot,N,G,it,ue,hl,rt,bl,Ut,ge,El,Tt,S,J,at,de,_l,ot,ql,Ft,ze,$l,Bt,x,nt,pe,ut,wl,xl,dt,ce,pt,Pl,yl,ct,me,mt,Al,Gt,K,kl,fe,gl,zl,Jt,j,Q,ft,ve,Cl,vt,Ll,Kt,Ce,Nl,Qt,D,W,ht,he,Sl,bt,jl,Wt,X,Dl,Et,Ml,Il,Xt,Y,Hl,be,_t,Rl,Vl,Yt,Ee,Zt,Z,Ol,qt,Ul,Tl,es,ee,Fl,_e,Bl,Gl,ts;return te=new $({}),le=new $({}),ie=new $({}),re=new $({}),ae=new $({}),oe=new $({}),ne=new $({}),ue=new $({}),de=new $({}),ve=new $({}),he=new $({}),Ee=new br({props:{code:`---
language: fr
license: mit
datasets:
- oscar
---`,highlighted:`<span class="hljs-meta">---</span>
<span class="hljs-attr">language:</span> <span class="hljs-string">fr</span>
<span class="hljs-attr">license:</span> <span class="hljs-string">mit</span>
<span class="hljs-attr">datasets:</span>
<span class="hljs-bullet">-</span> <span class="hljs-string">oscar</span>
<span class="hljs-meta">---</span>`}}),{c(){P=l("meta"),$t=p(),y=l("h1"),M=l("a"),Se=l("span"),v(te.$$.fragment),$s=p(),je=l("span"),ws=n("Construire une carte de mod\xE8le"),wt=p(),I=l("p"),xs=n("La carte de mod\xE8le est un fichier qui est sans doute aussi important que les fichiers du mod\xE8le et du "),De=l("em"),Ps=n("tokenizer"),ys=n(" dans un d\xE9p\xF4t de mod\xE8les. Il s\u2019agit de la d\xE9finition centrale du mod\xE8le, qui garantit la r\xE9utilisation par les autres membres de la communaut\xE9, la reproductibilit\xE9 des r\xE9sultats, et une plateforme sur laquelle les autres membres peuvent construire leurs artefacts."),xt=p(),qe=l("p"),As=n("Documenter le processus d\u2019entra\xEEnement et d\u2019\xE9valuation aide les autres \xE0 comprendre ce qu\u2019ils peuvent attendre d\u2019un mod\xE8le. Fournir suffisamment d\u2019informations concernant les donn\xE9es utilis\xE9es, les pr\xE9traitements et post-traitements effectu\xE9s permet d\u2019identifier et de comprendre les limites, les biais et les contextes dans lesquels le mod\xE8le est ou n\u2019est pas utile."),Pt=p(),H=l("p"),ks=n("Par cons\xE9quent, la cr\xE9ation d\u2019une carte de mod\xE8le d\xE9finissant clairement votre mod\xE8le est une \xE9tape tr\xE8s importante. Nous vous donnons ici quelques conseils qui vous aideront \xE0 le faire. La cr\xE9ation de la fiche de mod\xE8le se fait par le biais du fichier "),Me=l("em"),gs=n("README.md"),zs=n(" que vous avez vu pr\xE9c\xE9demment, qui est un fichier Markdown."),yt=p(),R=l("p"),Cs=n("Le concept de carte de mod\xE8le provient d\u2019une direction de recherche de Google, partag\xE9e pour la premi\xE8re fois dans l\u2019article "),se=l("a"),Ls=n("\u201CModel Cards for Model Reporting\u201D"),Ns=n(" par Margaret Mitchell et al. De nombreuses informations contenues dans ce document sont bas\xE9es sur cet article et nous vous recommandons d\u2019y jeter un coup d\u2019\u0153il pour comprendre pourquoi les cartes de mod\xE8les sont si importantes dans un monde qui valorise la reproductibilit\xE9, la r\xE9utilisation et l\u2019\xE9quit\xE9."),At=p(),$e=l("p"),Ss=n("La carte de mod\xE8le commence g\xE9n\xE9ralement par une tr\xE8s br\xE8ve pr\xE9sentation de haut niveau de l\u2019objet du mod\xE8le, suivie de d\xE9tails suppl\xE9mentaires dans les sections suivantes :"),kt=p(),m=l("ul"),Ie=l("li"),js=n("description du mod\xE8le"),Ds=p(),He=l("li"),Ms=n("utilisations et limites pr\xE9vues"),Is=p(),Re=l("li"),Hs=n("comment utiliser le mod\xE8le"),Rs=p(),Ve=l("li"),Vs=n("limites et biais"),Os=p(),Oe=l("li"),Us=n("donn\xE9es d\u2019entra\xEEnement"),Ts=p(),Ue=l("li"),Fs=n("proc\xE9dure d\u2019entra\xEEnement"),Bs=p(),Te=l("li"),Gs=n("r\xE9sultats de l\u2019\xE9valuation"),gt=p(),we=l("p"),Js=n("Voyons ce que chacune de ces sections doit contenir."),zt=p(),A=l("h3"),V=l("a"),Fe=l("span"),v(le.$$.fragment),Ks=p(),Be=l("span"),Qs=n("Description du mod\xE8le"),Ct=p(),xe=l("p"),Ws=n("La description du mod\xE8le fournit des d\xE9tails de base sur le mod\xE8le. Cela inclut l\u2019architecture, la version, s\u2019il a \xE9t\xE9 pr\xE9sent\xE9 dans un article, si une impl\xE9mentation originale est disponible, l\u2019auteur et des informations g\xE9n\xE9rales sur le mod\xE8le. Tout droit d\u2019auteur doit \xEAtre attribu\xE9 ici. Des informations g\xE9n\xE9rales sur les proc\xE9dures d\u2019entra\xEEnement, les param\xE8tres et les avertissements importants peuvent \xE9galement \xEAtre mentionn\xE9s dans cette section."),Lt=p(),k=l("h3"),O=l("a"),Ge=l("span"),v(ie.$$.fragment),Xs=p(),Je=l("span"),Ys=n("Utilisations et limitations pr\xE9vues"),Nt=p(),Pe=l("p"),Zs=n("Vous d\xE9crivez ici les cas d\u2019utilisation auxquels le mod\xE8le est destin\xE9, y compris les langues, les domaines et les champs o\xF9 il peut \xEAtre appliqu\xE9. Cette section de la fiche de mod\xE8le peut \xE9galement documenter les domaines qui sont connus pour \xEAtre hors de port\xE9e du mod\xE8le, ou dans lesquels il est susceptible de fonctionner de mani\xE8re sous-optimale."),St=p(),g=l("h3"),U=l("a"),Ke=l("span"),v(re.$$.fragment),el=p(),Qe=l("span"),tl=n("Comment utiliser"),jt=p(),w=l("p"),sl=n("Cette section doit inclure des exemples d\u2019utilisation du mod\xE8le. Cela peut montrer l\u2019utilisation de la fonction "),We=l("code"),ll=n("pipeline()"),il=n(", l\u2019utilisation des classes du mod\xE8le et du "),Xe=l("em"),rl=n("tokenizer"),al=n(", et tout autre code que vous pensez \xEAtre utile."),Dt=p(),z=l("h3"),T=l("a"),Ye=l("span"),v(ae.$$.fragment),ol=p(),Ze=l("span"),nl=n("Donn\xE9es d'entra\xEEnement"),Mt=p(),ye=l("p"),ul=n("Cette partie doit indiquer sur quel(s) jeu(x) de donn\xE9es le mod\xE8le a \xE9t\xE9 entra\xEEn\xE9. Une br\xE8ve description du ou des jeux de donn\xE9es est \xE9galement la bienvenue."),It=p(),C=l("h3"),F=l("a"),et=l("span"),v(oe.$$.fragment),dl=p(),tt=l("span"),pl=n("Proc\xE9dure d'entra\xEEnement"),Ht=p(),Ae=l("p"),cl=n("Dans cette section, vous devez d\xE9crire tous les aspects pertinents de l\u2019entra\xEEnement qui sont utiles du point de vue de la reproductibilit\xE9. Cela inclut tout pr\xE9traitement et post-traitement effectu\xE9 sur les donn\xE9es, ainsi que des d\xE9tails tels que le nombre d\u2019\xE9poques pour lesquelles le mod\xE8le a \xE9t\xE9 entra\xEEn\xE9, la taille du batch, le taux d\u2019apprentissage, etc."),Rt=p(),L=l("h3"),B=l("a"),st=l("span"),v(ne.$$.fragment),ml=p(),lt=l("span"),fl=n("Variable et m\xE9triques"),Vt=p(),ke=l("p"),vl=n("D\xE9crivez ici les m\xE9triques que vous utilisez pour l\u2019\xE9valuation et les diff\xE9rents facteurs que vous mesurez. En mentionnant la ou les m\xE9triques utilis\xE9es, sur quel jeu de donn\xE9es et quelle division du jeu de donn\xE9es, il est plus facile de comparer les performances de votre mod\xE8le \xE0 celles d\u2019autres mod\xE8les. Les sections pr\xE9c\xE9dentes, telles que les utilisateurs pr\xE9vus et les cas d\u2019utilisation, doivent \xEAtre prises en compte."),Ot=p(),N=l("h3"),G=l("a"),it=l("span"),v(ue.$$.fragment),hl=p(),rt=l("span"),bl=n("R\xE9sultats de l'\xE9valuation"),Ut=p(),ge=l("p"),El=n("Enfin, fournissez une indication de la performance du mod\xE8le sur l\u2019ensemble de donn\xE9es d\u2019\xE9valuation. Si le mod\xE8le utilise un seuil de d\xE9cision, indiquez le seuil de d\xE9cision utilis\xE9 dans l\u2019\xE9valuation ou fournissez des d\xE9tails sur l\u2019\xE9valuation \xE0 diff\xE9rents seuils pour les utilisations pr\xE9vues."),Tt=p(),S=l("h2"),J=l("a"),at=l("span"),v(de.$$.fragment),_l=p(),ot=l("span"),ql=n("Exemple"),Ft=p(),ze=l("p"),$l=n("Voici quelques exemples de cartes de mod\xE8les bien con\xE7ues :"),Bt=p(),x=l("ul"),nt=l("li"),pe=l("a"),ut=l("code"),wl=n("bert-base-case"),xl=p(),dt=l("li"),ce=l("a"),pt=l("code"),Pl=n("gpt2"),yl=p(),ct=l("li"),me=l("a"),mt=l("code"),Al=n("distilbert"),Gt=p(),K=l("p"),kl=n("D\u2019autres exemples provenant de diff\xE9rentes organisations et entreprises sont disponibles "),fe=l("a"),gl=n("ici"),zl=n("."),Jt=p(),j=l("h2"),Q=l("a"),ft=l("span"),v(ve.$$.fragment),Cl=p(),vt=l("span"),Ll=n("Note"),Kt=p(),Ce=l("p"),Nl=n("Les fiches de mod\xE8le ne sont pas une exigence lors de la publication de mod\xE8les, et vous n\u2019avez pas besoin d\u2019inclure toutes les sections d\xE9crites ci-dessus lorsque vous en faites une. Cependant, une documentation explicite du mod\xE8le ne peut qu\u2019\xEAtre b\xE9n\xE9fique aux futurs utilisateurs. Nous vous recommandons donc de remplir autant de sections que possible, au mieux de vos connaissances et de vos capacit\xE9s."),Qt=p(),D=l("h2"),W=l("a"),ht=l("span"),v(he.$$.fragment),Sl=p(),bt=l("span"),jl=n("M\xE9tadonn\xE9es de la carte de mod\xE8le"),Wt=p(),X=l("p"),Dl=n("Si vous avez explor\xE9 un peu le "),Et=l("em"),Ml=n("Hub"),Il=n(", vous devriez avoir vu que certains mod\xE8les appartiennent \xE0 certaines cat\xE9gories : vous pouvez les filtrer par t\xE2ches, langues, biblioth\xE8ques, et plus encore. Les cat\xE9gories auxquelles appartient un mod\xE8le sont identifi\xE9es en fonction des m\xE9tadonn\xE9es que vous ajoutez dans l\u2019en-t\xEAte de la fiche du mod\xE8le."),Xt=p(),Y=l("p"),Hl=n("Par exemple, si vous regardez la fiche de mod\xE8le de "),be=l("a"),_t=l("code"),Rl=n("camembert-base"),Vl=n(", vous devriez voir les lignes suivantes dans l\u2019en-t\xEAte de la fiche de mod\xE8le :"),Yt=p(),v(Ee.$$.fragment),Zt=p(),Z=l("p"),Ol=n("Ces m\xE9tadonn\xE9es sont analys\xE9es par le "),qt=l("em"),Ul=n("Hub"),Tl=n(" qui identifie alors ce mod\xE8le comme \xE9tant un mod\xE8le fran\xE7ais, avec une licence MIT, entra\xEEn\xE9 sur le jeu de donn\xE9es Oscar."),es=p(),ee=l("p"),Fl=n("La "),_e=l("a"),Bl=n("sp\xE9cification compl\xE8te de la carte du mod\xE8le"),Gl=n(" permet de sp\xE9cifier les langues, les licences, les balises, les jeux de donn\xE9es, les mesures, ainsi que les r\xE9sultats d\u2019\xE9valuation obtenus par le mod\xE8le lors de l\u2019entra\xEEnement."),this.h()},l(e){const a=fr('[data-svelte="svelte-1phssyn"]',document.head);P=i(a,"META",{name:!0,content:!0}),a.forEach(t),$t=c(e),y=i(e,"H1",{class:!0});var ss=r(y);M=i(ss,"A",{id:!0,class:!0,href:!0});var Kl=r(M);Se=i(Kl,"SPAN",{});var Ql=r(Se);h(te.$$.fragment,Ql),Ql.forEach(t),Kl.forEach(t),$s=c(ss),je=i(ss,"SPAN",{});var Wl=r(je);ws=u(Wl,"Construire une carte de mod\xE8le"),Wl.forEach(t),ss.forEach(t),wt=c(e),I=i(e,"P",{});var ls=r(I);xs=u(ls,"La carte de mod\xE8le est un fichier qui est sans doute aussi important que les fichiers du mod\xE8le et du "),De=i(ls,"EM",{});var Xl=r(De);Ps=u(Xl,"tokenizer"),Xl.forEach(t),ys=u(ls," dans un d\xE9p\xF4t de mod\xE8les. Il s\u2019agit de la d\xE9finition centrale du mod\xE8le, qui garantit la r\xE9utilisation par les autres membres de la communaut\xE9, la reproductibilit\xE9 des r\xE9sultats, et une plateforme sur laquelle les autres membres peuvent construire leurs artefacts."),ls.forEach(t),xt=c(e),qe=i(e,"P",{});var Yl=r(qe);As=u(Yl,"Documenter le processus d\u2019entra\xEEnement et d\u2019\xE9valuation aide les autres \xE0 comprendre ce qu\u2019ils peuvent attendre d\u2019un mod\xE8le. Fournir suffisamment d\u2019informations concernant les donn\xE9es utilis\xE9es, les pr\xE9traitements et post-traitements effectu\xE9s permet d\u2019identifier et de comprendre les limites, les biais et les contextes dans lesquels le mod\xE8le est ou n\u2019est pas utile."),Yl.forEach(t),Pt=c(e),H=i(e,"P",{});var is=r(H);ks=u(is,"Par cons\xE9quent, la cr\xE9ation d\u2019une carte de mod\xE8le d\xE9finissant clairement votre mod\xE8le est une \xE9tape tr\xE8s importante. Nous vous donnons ici quelques conseils qui vous aideront \xE0 le faire. La cr\xE9ation de la fiche de mod\xE8le se fait par le biais du fichier "),Me=i(is,"EM",{});var Zl=r(Me);gs=u(Zl,"README.md"),Zl.forEach(t),zs=u(is," que vous avez vu pr\xE9c\xE9demment, qui est un fichier Markdown."),is.forEach(t),yt=c(e),R=i(e,"P",{});var rs=r(R);Cs=u(rs,"Le concept de carte de mod\xE8le provient d\u2019une direction de recherche de Google, partag\xE9e pour la premi\xE8re fois dans l\u2019article "),se=i(rs,"A",{href:!0,rel:!0});var ei=r(se);Ls=u(ei,"\u201CModel Cards for Model Reporting\u201D"),ei.forEach(t),Ns=u(rs," par Margaret Mitchell et al. De nombreuses informations contenues dans ce document sont bas\xE9es sur cet article et nous vous recommandons d\u2019y jeter un coup d\u2019\u0153il pour comprendre pourquoi les cartes de mod\xE8les sont si importantes dans un monde qui valorise la reproductibilit\xE9, la r\xE9utilisation et l\u2019\xE9quit\xE9."),rs.forEach(t),At=c(e),$e=i(e,"P",{});var ti=r($e);Ss=u(ti,"La carte de mod\xE8le commence g\xE9n\xE9ralement par une tr\xE8s br\xE8ve pr\xE9sentation de haut niveau de l\u2019objet du mod\xE8le, suivie de d\xE9tails suppl\xE9mentaires dans les sections suivantes :"),ti.forEach(t),kt=c(e),m=i(e,"UL",{});var f=r(m);Ie=i(f,"LI",{});var si=r(Ie);js=u(si,"description du mod\xE8le"),si.forEach(t),Ds=c(f),He=i(f,"LI",{});var li=r(He);Ms=u(li,"utilisations et limites pr\xE9vues"),li.forEach(t),Is=c(f),Re=i(f,"LI",{});var ii=r(Re);Hs=u(ii,"comment utiliser le mod\xE8le"),ii.forEach(t),Rs=c(f),Ve=i(f,"LI",{});var ri=r(Ve);Vs=u(ri,"limites et biais"),ri.forEach(t),Os=c(f),Oe=i(f,"LI",{});var ai=r(Oe);Us=u(ai,"donn\xE9es d\u2019entra\xEEnement"),ai.forEach(t),Ts=c(f),Ue=i(f,"LI",{});var oi=r(Ue);Fs=u(oi,"proc\xE9dure d\u2019entra\xEEnement"),oi.forEach(t),Bs=c(f),Te=i(f,"LI",{});var ni=r(Te);Gs=u(ni,"r\xE9sultats de l\u2019\xE9valuation"),ni.forEach(t),f.forEach(t),gt=c(e),we=i(e,"P",{});var ui=r(we);Js=u(ui,"Voyons ce que chacune de ces sections doit contenir."),ui.forEach(t),zt=c(e),A=i(e,"H3",{class:!0});var as=r(A);V=i(as,"A",{id:!0,class:!0,href:!0});var di=r(V);Fe=i(di,"SPAN",{});var pi=r(Fe);h(le.$$.fragment,pi),pi.forEach(t),di.forEach(t),Ks=c(as),Be=i(as,"SPAN",{});var ci=r(Be);Qs=u(ci,"Description du mod\xE8le"),ci.forEach(t),as.forEach(t),Ct=c(e),xe=i(e,"P",{});var mi=r(xe);Ws=u(mi,"La description du mod\xE8le fournit des d\xE9tails de base sur le mod\xE8le. Cela inclut l\u2019architecture, la version, s\u2019il a \xE9t\xE9 pr\xE9sent\xE9 dans un article, si une impl\xE9mentation originale est disponible, l\u2019auteur et des informations g\xE9n\xE9rales sur le mod\xE8le. Tout droit d\u2019auteur doit \xEAtre attribu\xE9 ici. Des informations g\xE9n\xE9rales sur les proc\xE9dures d\u2019entra\xEEnement, les param\xE8tres et les avertissements importants peuvent \xE9galement \xEAtre mentionn\xE9s dans cette section."),mi.forEach(t),Lt=c(e),k=i(e,"H3",{class:!0});var os=r(k);O=i(os,"A",{id:!0,class:!0,href:!0});var fi=r(O);Ge=i(fi,"SPAN",{});var vi=r(Ge);h(ie.$$.fragment,vi),vi.forEach(t),fi.forEach(t),Xs=c(os),Je=i(os,"SPAN",{});var hi=r(Je);Ys=u(hi,"Utilisations et limitations pr\xE9vues"),hi.forEach(t),os.forEach(t),Nt=c(e),Pe=i(e,"P",{});var bi=r(Pe);Zs=u(bi,"Vous d\xE9crivez ici les cas d\u2019utilisation auxquels le mod\xE8le est destin\xE9, y compris les langues, les domaines et les champs o\xF9 il peut \xEAtre appliqu\xE9. Cette section de la fiche de mod\xE8le peut \xE9galement documenter les domaines qui sont connus pour \xEAtre hors de port\xE9e du mod\xE8le, ou dans lesquels il est susceptible de fonctionner de mani\xE8re sous-optimale."),bi.forEach(t),St=c(e),g=i(e,"H3",{class:!0});var ns=r(g);U=i(ns,"A",{id:!0,class:!0,href:!0});var Ei=r(U);Ke=i(Ei,"SPAN",{});var _i=r(Ke);h(re.$$.fragment,_i),_i.forEach(t),Ei.forEach(t),el=c(ns),Qe=i(ns,"SPAN",{});var qi=r(Qe);tl=u(qi,"Comment utiliser"),qi.forEach(t),ns.forEach(t),jt=c(e),w=i(e,"P",{});var Le=r(w);sl=u(Le,"Cette section doit inclure des exemples d\u2019utilisation du mod\xE8le. Cela peut montrer l\u2019utilisation de la fonction "),We=i(Le,"CODE",{});var $i=r(We);ll=u($i,"pipeline()"),$i.forEach(t),il=u(Le,", l\u2019utilisation des classes du mod\xE8le et du "),Xe=i(Le,"EM",{});var wi=r(Xe);rl=u(wi,"tokenizer"),wi.forEach(t),al=u(Le,", et tout autre code que vous pensez \xEAtre utile."),Le.forEach(t),Dt=c(e),z=i(e,"H3",{class:!0});var us=r(z);T=i(us,"A",{id:!0,class:!0,href:!0});var xi=r(T);Ye=i(xi,"SPAN",{});var Pi=r(Ye);h(ae.$$.fragment,Pi),Pi.forEach(t),xi.forEach(t),ol=c(us),Ze=i(us,"SPAN",{});var yi=r(Ze);nl=u(yi,"Donn\xE9es d'entra\xEEnement"),yi.forEach(t),us.forEach(t),Mt=c(e),ye=i(e,"P",{});var Ai=r(ye);ul=u(Ai,"Cette partie doit indiquer sur quel(s) jeu(x) de donn\xE9es le mod\xE8le a \xE9t\xE9 entra\xEEn\xE9. Une br\xE8ve description du ou des jeux de donn\xE9es est \xE9galement la bienvenue."),Ai.forEach(t),It=c(e),C=i(e,"H3",{class:!0});var ds=r(C);F=i(ds,"A",{id:!0,class:!0,href:!0});var ki=r(F);et=i(ki,"SPAN",{});var gi=r(et);h(oe.$$.fragment,gi),gi.forEach(t),ki.forEach(t),dl=c(ds),tt=i(ds,"SPAN",{});var zi=r(tt);pl=u(zi,"Proc\xE9dure d'entra\xEEnement"),zi.forEach(t),ds.forEach(t),Ht=c(e),Ae=i(e,"P",{});var Ci=r(Ae);cl=u(Ci,"Dans cette section, vous devez d\xE9crire tous les aspects pertinents de l\u2019entra\xEEnement qui sont utiles du point de vue de la reproductibilit\xE9. Cela inclut tout pr\xE9traitement et post-traitement effectu\xE9 sur les donn\xE9es, ainsi que des d\xE9tails tels que le nombre d\u2019\xE9poques pour lesquelles le mod\xE8le a \xE9t\xE9 entra\xEEn\xE9, la taille du batch, le taux d\u2019apprentissage, etc."),Ci.forEach(t),Rt=c(e),L=i(e,"H3",{class:!0});var ps=r(L);B=i(ps,"A",{id:!0,class:!0,href:!0});var Li=r(B);st=i(Li,"SPAN",{});var Ni=r(st);h(ne.$$.fragment,Ni),Ni.forEach(t),Li.forEach(t),ml=c(ps),lt=i(ps,"SPAN",{});var Si=r(lt);fl=u(Si,"Variable et m\xE9triques"),Si.forEach(t),ps.forEach(t),Vt=c(e),ke=i(e,"P",{});var ji=r(ke);vl=u(ji,"D\xE9crivez ici les m\xE9triques que vous utilisez pour l\u2019\xE9valuation et les diff\xE9rents facteurs que vous mesurez. En mentionnant la ou les m\xE9triques utilis\xE9es, sur quel jeu de donn\xE9es et quelle division du jeu de donn\xE9es, il est plus facile de comparer les performances de votre mod\xE8le \xE0 celles d\u2019autres mod\xE8les. Les sections pr\xE9c\xE9dentes, telles que les utilisateurs pr\xE9vus et les cas d\u2019utilisation, doivent \xEAtre prises en compte."),ji.forEach(t),Ot=c(e),N=i(e,"H3",{class:!0});var cs=r(N);G=i(cs,"A",{id:!0,class:!0,href:!0});var Di=r(G);it=i(Di,"SPAN",{});var Mi=r(it);h(ue.$$.fragment,Mi),Mi.forEach(t),Di.forEach(t),hl=c(cs),rt=i(cs,"SPAN",{});var Ii=r(rt);bl=u(Ii,"R\xE9sultats de l'\xE9valuation"),Ii.forEach(t),cs.forEach(t),Ut=c(e),ge=i(e,"P",{});var Hi=r(ge);El=u(Hi,"Enfin, fournissez une indication de la performance du mod\xE8le sur l\u2019ensemble de donn\xE9es d\u2019\xE9valuation. Si le mod\xE8le utilise un seuil de d\xE9cision, indiquez le seuil de d\xE9cision utilis\xE9 dans l\u2019\xE9valuation ou fournissez des d\xE9tails sur l\u2019\xE9valuation \xE0 diff\xE9rents seuils pour les utilisations pr\xE9vues."),Hi.forEach(t),Tt=c(e),S=i(e,"H2",{class:!0});var ms=r(S);J=i(ms,"A",{id:!0,class:!0,href:!0});var Ri=r(J);at=i(Ri,"SPAN",{});var Vi=r(at);h(de.$$.fragment,Vi),Vi.forEach(t),Ri.forEach(t),_l=c(ms),ot=i(ms,"SPAN",{});var Oi=r(ot);ql=u(Oi,"Exemple"),Oi.forEach(t),ms.forEach(t),Ft=c(e),ze=i(e,"P",{});var Ui=r(ze);$l=u(Ui,"Voici quelques exemples de cartes de mod\xE8les bien con\xE7ues :"),Ui.forEach(t),Bt=c(e),x=i(e,"UL",{});var Ne=r(x);nt=i(Ne,"LI",{});var Ti=r(nt);pe=i(Ti,"A",{href:!0,rel:!0});var Fi=r(pe);ut=i(Fi,"CODE",{});var Bi=r(ut);wl=u(Bi,"bert-base-case"),Bi.forEach(t),Fi.forEach(t),Ti.forEach(t),xl=c(Ne),dt=i(Ne,"LI",{});var Gi=r(dt);ce=i(Gi,"A",{href:!0,rel:!0});var Ji=r(ce);pt=i(Ji,"CODE",{});var Ki=r(pt);Pl=u(Ki,"gpt2"),Ki.forEach(t),Ji.forEach(t),Gi.forEach(t),yl=c(Ne),ct=i(Ne,"LI",{});var Qi=r(ct);me=i(Qi,"A",{href:!0,rel:!0});var Wi=r(me);mt=i(Wi,"CODE",{});var Xi=r(mt);Al=u(Xi,"distilbert"),Xi.forEach(t),Wi.forEach(t),Qi.forEach(t),Ne.forEach(t),Gt=c(e),K=i(e,"P",{});var fs=r(K);kl=u(fs,"D\u2019autres exemples provenant de diff\xE9rentes organisations et entreprises sont disponibles "),fe=i(fs,"A",{href:!0,rel:!0});var Yi=r(fe);gl=u(Yi,"ici"),Yi.forEach(t),zl=u(fs,"."),fs.forEach(t),Jt=c(e),j=i(e,"H2",{class:!0});var vs=r(j);Q=i(vs,"A",{id:!0,class:!0,href:!0});var Zi=r(Q);ft=i(Zi,"SPAN",{});var er=r(ft);h(ve.$$.fragment,er),er.forEach(t),Zi.forEach(t),Cl=c(vs),vt=i(vs,"SPAN",{});var tr=r(vt);Ll=u(tr,"Note"),tr.forEach(t),vs.forEach(t),Kt=c(e),Ce=i(e,"P",{});var sr=r(Ce);Nl=u(sr,"Les fiches de mod\xE8le ne sont pas une exigence lors de la publication de mod\xE8les, et vous n\u2019avez pas besoin d\u2019inclure toutes les sections d\xE9crites ci-dessus lorsque vous en faites une. Cependant, une documentation explicite du mod\xE8le ne peut qu\u2019\xEAtre b\xE9n\xE9fique aux futurs utilisateurs. Nous vous recommandons donc de remplir autant de sections que possible, au mieux de vos connaissances et de vos capacit\xE9s."),sr.forEach(t),Qt=c(e),D=i(e,"H2",{class:!0});var hs=r(D);W=i(hs,"A",{id:!0,class:!0,href:!0});var lr=r(W);ht=i(lr,"SPAN",{});var ir=r(ht);h(he.$$.fragment,ir),ir.forEach(t),lr.forEach(t),Sl=c(hs),bt=i(hs,"SPAN",{});var rr=r(bt);jl=u(rr,"M\xE9tadonn\xE9es de la carte de mod\xE8le"),rr.forEach(t),hs.forEach(t),Wt=c(e),X=i(e,"P",{});var bs=r(X);Dl=u(bs,"Si vous avez explor\xE9 un peu le "),Et=i(bs,"EM",{});var ar=r(Et);Ml=u(ar,"Hub"),ar.forEach(t),Il=u(bs,", vous devriez avoir vu que certains mod\xE8les appartiennent \xE0 certaines cat\xE9gories : vous pouvez les filtrer par t\xE2ches, langues, biblioth\xE8ques, et plus encore. Les cat\xE9gories auxquelles appartient un mod\xE8le sont identifi\xE9es en fonction des m\xE9tadonn\xE9es que vous ajoutez dans l\u2019en-t\xEAte de la fiche du mod\xE8le."),bs.forEach(t),Xt=c(e),Y=i(e,"P",{});var Es=r(Y);Hl=u(Es,"Par exemple, si vous regardez la fiche de mod\xE8le de "),be=i(Es,"A",{href:!0,rel:!0});var or=r(be);_t=i(or,"CODE",{});var nr=r(_t);Rl=u(nr,"camembert-base"),nr.forEach(t),or.forEach(t),Vl=u(Es,", vous devriez voir les lignes suivantes dans l\u2019en-t\xEAte de la fiche de mod\xE8le :"),Es.forEach(t),Yt=c(e),h(Ee.$$.fragment,e),Zt=c(e),Z=i(e,"P",{});var _s=r(Z);Ol=u(_s,"Ces m\xE9tadonn\xE9es sont analys\xE9es par le "),qt=i(_s,"EM",{});var ur=r(qt);Ul=u(ur,"Hub"),ur.forEach(t),Tl=u(_s," qui identifie alors ce mod\xE8le comme \xE9tant un mod\xE8le fran\xE7ais, avec une licence MIT, entra\xEEn\xE9 sur le jeu de donn\xE9es Oscar."),_s.forEach(t),es=c(e),ee=i(e,"P",{});var qs=r(ee);Fl=u(qs,"La "),_e=i(qs,"A",{href:!0,rel:!0});var dr=r(_e);Bl=u(dr,"sp\xE9cification compl\xE8te de la carte du mod\xE8le"),dr.forEach(t),Gl=u(qs," permet de sp\xE9cifier les langues, les licences, les balises, les jeux de donn\xE9es, les mesures, ainsi que les r\xE9sultats d\u2019\xE9valuation obtenus par le mod\xE8le lors de l\u2019entra\xEEnement."),qs.forEach(t),this.h()},h(){d(P,"name","hf:doc:metadata"),d(P,"content",JSON.stringify(_r)),d(M,"id","construire-une-carte-de-modle"),d(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(M,"href","#construire-une-carte-de-modle"),d(y,"class","relative group"),d(se,"href","https://arxiv.org/abs/1810.03993"),d(se,"rel","nofollow"),d(V,"id","description-du-modle"),d(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(V,"href","#description-du-modle"),d(A,"class","relative group"),d(O,"id","utilisations-et-limitations-prvues"),d(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(O,"href","#utilisations-et-limitations-prvues"),d(k,"class","relative group"),d(U,"id","comment-utiliser"),d(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(U,"href","#comment-utiliser"),d(g,"class","relative group"),d(T,"id","donnes-dentranement"),d(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(T,"href","#donnes-dentranement"),d(z,"class","relative group"),d(F,"id","procdure-dentranement"),d(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(F,"href","#procdure-dentranement"),d(C,"class","relative group"),d(B,"id","variable-et-mtriques"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#variable-et-mtriques"),d(L,"class","relative group"),d(G,"id","rsultats-de-lvaluation"),d(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(G,"href","#rsultats-de-lvaluation"),d(N,"class","relative group"),d(J,"id","exemple"),d(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(J,"href","#exemple"),d(S,"class","relative group"),d(pe,"href","https://huggingface.co/bert-base-cased"),d(pe,"rel","nofollow"),d(ce,"href","https://huggingface.co/gpt2"),d(ce,"rel","nofollow"),d(me,"href","https://huggingface.co/distilbert-base-uncased"),d(me,"rel","nofollow"),d(fe,"href","https://github.com/huggingface/model_card/blob/master/examples.md"),d(fe,"rel","nofollow"),d(Q,"id","note"),d(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Q,"href","#note"),d(j,"class","relative group"),d(W,"id","mtadonnes-de-la-carte-de-modle"),d(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(W,"href","#mtadonnes-de-la-carte-de-modle"),d(D,"class","relative group"),d(be,"href","https://huggingface.co/camembert-base/blob/main/README.md"),d(be,"rel","nofollow"),d(_e,"href","https://github.com/huggingface/hub-docs/blame/main/modelcard.md"),d(_e,"rel","nofollow")},m(e,a){s(document.head,P),o(e,$t,a),o(e,y,a),s(y,M),s(M,Se),b(te,Se,null),s(y,$s),s(y,je),s(je,ws),o(e,wt,a),o(e,I,a),s(I,xs),s(I,De),s(De,Ps),s(I,ys),o(e,xt,a),o(e,qe,a),s(qe,As),o(e,Pt,a),o(e,H,a),s(H,ks),s(H,Me),s(Me,gs),s(H,zs),o(e,yt,a),o(e,R,a),s(R,Cs),s(R,se),s(se,Ls),s(R,Ns),o(e,At,a),o(e,$e,a),s($e,Ss),o(e,kt,a),o(e,m,a),s(m,Ie),s(Ie,js),s(m,Ds),s(m,He),s(He,Ms),s(m,Is),s(m,Re),s(Re,Hs),s(m,Rs),s(m,Ve),s(Ve,Vs),s(m,Os),s(m,Oe),s(Oe,Us),s(m,Ts),s(m,Ue),s(Ue,Fs),s(m,Bs),s(m,Te),s(Te,Gs),o(e,gt,a),o(e,we,a),s(we,Js),o(e,zt,a),o(e,A,a),s(A,V),s(V,Fe),b(le,Fe,null),s(A,Ks),s(A,Be),s(Be,Qs),o(e,Ct,a),o(e,xe,a),s(xe,Ws),o(e,Lt,a),o(e,k,a),s(k,O),s(O,Ge),b(ie,Ge,null),s(k,Xs),s(k,Je),s(Je,Ys),o(e,Nt,a),o(e,Pe,a),s(Pe,Zs),o(e,St,a),o(e,g,a),s(g,U),s(U,Ke),b(re,Ke,null),s(g,el),s(g,Qe),s(Qe,tl),o(e,jt,a),o(e,w,a),s(w,sl),s(w,We),s(We,ll),s(w,il),s(w,Xe),s(Xe,rl),s(w,al),o(e,Dt,a),o(e,z,a),s(z,T),s(T,Ye),b(ae,Ye,null),s(z,ol),s(z,Ze),s(Ze,nl),o(e,Mt,a),o(e,ye,a),s(ye,ul),o(e,It,a),o(e,C,a),s(C,F),s(F,et),b(oe,et,null),s(C,dl),s(C,tt),s(tt,pl),o(e,Ht,a),o(e,Ae,a),s(Ae,cl),o(e,Rt,a),o(e,L,a),s(L,B),s(B,st),b(ne,st,null),s(L,ml),s(L,lt),s(lt,fl),o(e,Vt,a),o(e,ke,a),s(ke,vl),o(e,Ot,a),o(e,N,a),s(N,G),s(G,it),b(ue,it,null),s(N,hl),s(N,rt),s(rt,bl),o(e,Ut,a),o(e,ge,a),s(ge,El),o(e,Tt,a),o(e,S,a),s(S,J),s(J,at),b(de,at,null),s(S,_l),s(S,ot),s(ot,ql),o(e,Ft,a),o(e,ze,a),s(ze,$l),o(e,Bt,a),o(e,x,a),s(x,nt),s(nt,pe),s(pe,ut),s(ut,wl),s(x,xl),s(x,dt),s(dt,ce),s(ce,pt),s(pt,Pl),s(x,yl),s(x,ct),s(ct,me),s(me,mt),s(mt,Al),o(e,Gt,a),o(e,K,a),s(K,kl),s(K,fe),s(fe,gl),s(K,zl),o(e,Jt,a),o(e,j,a),s(j,Q),s(Q,ft),b(ve,ft,null),s(j,Cl),s(j,vt),s(vt,Ll),o(e,Kt,a),o(e,Ce,a),s(Ce,Nl),o(e,Qt,a),o(e,D,a),s(D,W),s(W,ht),b(he,ht,null),s(D,Sl),s(D,bt),s(bt,jl),o(e,Wt,a),o(e,X,a),s(X,Dl),s(X,Et),s(Et,Ml),s(X,Il),o(e,Xt,a),o(e,Y,a),s(Y,Hl),s(Y,be),s(be,_t),s(_t,Rl),s(Y,Vl),o(e,Yt,a),b(Ee,e,a),o(e,Zt,a),o(e,Z,a),s(Z,Ol),s(Z,qt),s(qt,Ul),s(Z,Tl),o(e,es,a),o(e,ee,a),s(ee,Fl),s(ee,_e),s(_e,Bl),s(ee,Gl),ts=!0},p:vr,i(e){ts||(E(te.$$.fragment,e),E(le.$$.fragment,e),E(ie.$$.fragment,e),E(re.$$.fragment,e),E(ae.$$.fragment,e),E(oe.$$.fragment,e),E(ne.$$.fragment,e),E(ue.$$.fragment,e),E(de.$$.fragment,e),E(ve.$$.fragment,e),E(he.$$.fragment,e),E(Ee.$$.fragment,e),ts=!0)},o(e){_(te.$$.fragment,e),_(le.$$.fragment,e),_(ie.$$.fragment,e),_(re.$$.fragment,e),_(ae.$$.fragment,e),_(oe.$$.fragment,e),_(ne.$$.fragment,e),_(ue.$$.fragment,e),_(de.$$.fragment,e),_(ve.$$.fragment,e),_(he.$$.fragment,e),_(Ee.$$.fragment,e),ts=!1},d(e){t(P),e&&t($t),e&&t(y),q(te),e&&t(wt),e&&t(I),e&&t(xt),e&&t(qe),e&&t(Pt),e&&t(H),e&&t(yt),e&&t(R),e&&t(At),e&&t($e),e&&t(kt),e&&t(m),e&&t(gt),e&&t(we),e&&t(zt),e&&t(A),q(le),e&&t(Ct),e&&t(xe),e&&t(Lt),e&&t(k),q(ie),e&&t(Nt),e&&t(Pe),e&&t(St),e&&t(g),q(re),e&&t(jt),e&&t(w),e&&t(Dt),e&&t(z),q(ae),e&&t(Mt),e&&t(ye),e&&t(It),e&&t(C),q(oe),e&&t(Ht),e&&t(Ae),e&&t(Rt),e&&t(L),q(ne),e&&t(Vt),e&&t(ke),e&&t(Ot),e&&t(N),q(ue),e&&t(Ut),e&&t(ge),e&&t(Tt),e&&t(S),q(de),e&&t(Ft),e&&t(ze),e&&t(Bt),e&&t(x),e&&t(Gt),e&&t(K),e&&t(Jt),e&&t(j),q(ve),e&&t(Kt),e&&t(Ce),e&&t(Qt),e&&t(D),q(he),e&&t(Wt),e&&t(X),e&&t(Xt),e&&t(Y),e&&t(Yt),q(Ee,e),e&&t(Zt),e&&t(Z),e&&t(es),e&&t(ee)}}}const _r={local:"construire-une-carte-de-modle",sections:[{local:null,sections:[{local:"description-du-modle",title:"Description du mod\xE8le"},{local:"utilisations-et-limitations-prvues",title:"Utilisations et limitations pr\xE9vues"},{local:"comment-utiliser",title:"Comment utiliser"},{local:"donnes-dentranement",title:"Donn\xE9es d'entra\xEEnement"},{local:"procdure-dentranement",title:"Proc\xE9dure d'entra\xEEnement"},{local:"variable-et-mtriques",title:"Variable et m\xE9triques"},{local:"rsultats-de-lvaluation",title:"R\xE9sultats de l'\xE9valuation"}],title:null},{local:"exemple",title:"Exemple"},{local:"note",title:"Note"},{local:"mtadonnes-de-la-carte-de-modle",title:"M\xE9tadonn\xE9es de la carte de mod\xE8le"}],title:"Construire une carte de mod\xE8le"};function qr(Jl){return hr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pr extends pr{constructor(P){super();cr(this,P,qr,Er,mr,{})}}export{Pr as default,_r as metadata};
