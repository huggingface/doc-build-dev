import{S as en,i as nn,s as tn,M as it,N as rt,a as l,d as n,b as u,g as s,F as t,L as Xe,e as a,k as c,t as d,c as o,m as p,h,f as tr,j as rr,w as z,x as $,y as A,O as Ye,q as C,o as N,B as D,P as sr,Q as lr,R as ar,T as ir,v as or}from"../../chunks/vendor-f4a867ed.js";import{I as st}from"../../chunks/IconCopyLink-d27af064.js";function ur(v){const i=document.createElement("textarea");document.body.appendChild(i),i.value=v,i.select(),document.execCommand("copy"),document.body.removeChild(i)}function dr(v){let i,f,g,b;return{c(){i=it("svg"),f=it("path"),g=it("path"),b=it("rect"),this.h()},l(k){i=rt(k,"svg",{class:!0,xmlns:!0,"aria-hidden":!0,fill:!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var m=l(i);f=rt(m,"path",{d:!0,transform:!0}),l(f).forEach(n),g=rt(m,"path",{d:!0,transform:!0}),l(g).forEach(n),b=rt(m,"rect",{fill:!0,width:!0,height:!0}),l(b).forEach(n),m.forEach(n),this.h()},h(){u(f,"d","M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"),u(f,"transform","translate(0)"),u(g,"d","M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"),u(g,"transform","translate(0)"),u(b,"fill","none"),u(b,"width","32"),u(b,"height","32"),u(i,"class",v[0]),u(i,"xmlns","http://www.w3.org/2000/svg"),u(i,"aria-hidden","true"),u(i,"fill","currentColor"),u(i,"focusable","false"),u(i,"role","img"),u(i,"width","1em"),u(i,"height","1em"),u(i,"preserveAspectRatio","xMidYMid meet"),u(i,"viewBox","0 0 32 32")},m(k,m){s(k,i,m),t(i,f),t(i,g),t(i,b)},p(k,[m]){m&1&&u(i,"class",k[0])},i:Xe,o:Xe,d(k){k&&n(i)}}}function hr(v,i,f){let{classNames:g=""}=i;return v.$$set=b=>{"classNames"in b&&f(0,g=b.classNames)},[g]}class fr extends en{constructor(i){super();nn(this,i,hr,dr,tn,{classNames:0})}}function mr(v){let i,f,g,b,k;return{c(){i=a("div"),f=a("div"),g=c(),b=d(v[1]),this.h()},l(m){i=o(m,"DIV",{class:!0});var _=l(i);f=o(_,"DIV",{class:!0,style:!0}),l(f).forEach(n),g=p(_),b=h(_,v[1]),_.forEach(n),this.h()},h(){u(f,"class","absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-black border-4 border-t-0"),tr(f,"border-left-color","transparent"),tr(f,"border-right-color","transparent"),u(i,"class",k="absolute pointer-events-none transition-opacity bg-black text-white py-1 px-2 leading-tight rounded font-normal shadow "+v[2]+" "+v[0])},m(m,_){s(m,i,_),t(i,f),t(i,g),t(i,b)},p(m,[_]){_&2&&rr(b,m[1]),_&5&&k!==(k="absolute pointer-events-none transition-opacity bg-black text-white py-1 px-2 leading-tight rounded font-normal shadow "+m[2]+" "+m[0])&&u(i,"class",k)},i:Xe,o:Xe,d(m){m&&n(i)}}}function cr(v,i,f){let{classNames:g=""}=i,{label:b="Copied"}=i,{position:k="left-1/2 top-full transform -translate-x-1/2 translate-y-2"}=i;return v.$$set=m=>{"classNames"in m&&f(0,g=m.classNames),"label"in m&&f(1,b=m.label),"position"in m&&f(2,k=m.position)},[g,b,k]}class pr extends en{constructor(i){super();nn(this,i,cr,mr,tn,{classNames:0,label:1,position:2})}}function gr(v){let i,f,g,b,k,m,_,P,E;return f=new fr({}),b=new pr({props:{classNames:v[4]?"opacity-100":"opacity-0"}}),{c(){i=a("button"),z(f.$$.fragment),g=c(),z(b.$$.fragment),this.h()},l(w){i=o(w,"BUTTON",{class:!0,title:!0,type:!0});var y=l(i);$(f.$$.fragment,y),g=p(y),$(b.$$.fragment,y),y.forEach(n),this.h()},h(){u(i,"class",k="inline-flex items-center relative text-sm focus:text-green-500 cursor-pointer focus:outline-none "+v[0]+" "+(v[2]==="text"?"mx-0.5":"")+" "+(v[2]==="button"?"btn":"")+" "+(v[2]==="button-clear"?"py-1 px-2 border rounded-lg shadow-sm":"")+" "+(!v[4]&&["button-clear","text"].includes(v[2])?"text-gray-600":"")+" "+(v[4]?"text-green-500":"")),u(i,"title",m=v[3]||v[1]||"Copy to clipboard"),u(i,"type","button")},m(w,y){s(w,i,y),A(f,i,null),t(i,g),A(b,i,null),_=!0,P||(E=Ye(i,"click",v[5]),P=!0)},p(w,[y]){const T={};y&16&&(T.classNames=w[4]?"opacity-100":"opacity-0"),b.$set(T),(!_||y&21&&k!==(k="inline-flex items-center relative text-sm focus:text-green-500 cursor-pointer focus:outline-none "+w[0]+" "+(w[2]==="text"?"mx-0.5":"")+" "+(w[2]==="button"?"btn":"")+" "+(w[2]==="button-clear"?"py-1 px-2 border rounded-lg shadow-sm":"")+" "+(!w[4]&&["button-clear","text"].includes(w[2])?"text-gray-600":"")+" "+(w[4]?"text-green-500":"")))&&u(i,"class",k),(!_||y&10&&m!==(m=w[3]||w[1]||"Copy to clipboard"))&&u(i,"title",m)},i(w){_||(C(f.$$.fragment,w),C(b.$$.fragment,w),_=!0)},o(w){N(f.$$.fragment,w),N(b.$$.fragment,w),_=!1},d(w){w&&n(i),D(f),D(b),P=!1,E()}}}function br(v,i,f){let{classNames:g=""}=i,{label:b=""}=i,{style:k="text"}=i,{title:m=""}=i,{value:_}=i,P=!1,E;sr(()=>{E&&clearTimeout(E)});function w(){ur(_),f(4,P=!0),E&&clearTimeout(E),E=setTimeout(()=>{f(4,P=!1)},1e3)}return v.$$set=y=>{"classNames"in y&&f(0,g=y.classNames),"label"in y&&f(1,b=y.label),"style"in y&&f(2,k=y.style),"title"in y&&f(3,m=y.title),"value"in y&&f(6,_=y.value)},[g,b,k,m,P,w,_]}class vr extends en{constructor(i){super();nn(this,i,br,gr,tn,{classNames:0,label:1,style:2,title:3,value:6})}}function wr(v){let i,f,g,b,k,m,_,P;return g=new vr({props:{classNames:"transition duration-200 ease-in-out "+(v[2]&&"opacity-0"),label:"code excerpt",value:v[0]}}),{c(){i=a("div"),f=a("div"),z(g.$$.fragment),b=c(),k=a("pre"),this.h()},l(E){i=o(E,"DIV",{class:!0});var w=l(i);f=o(w,"DIV",{class:!0});var y=l(f);$(g.$$.fragment,y),y.forEach(n),b=p(w),k=o(w,"PRE",{});var T=l(k);T.forEach(n),w.forEach(n),this.h()},h(){u(f,"class","absolute top-2.5 right-4"),u(i,"class","code-block relative")},m(E,w){s(E,i,w),t(i,f),A(g,f,null),t(i,b),t(i,k),k.innerHTML=v[1],m=!0,_||(P=[Ye(i,"mouseover",v[3]),Ye(i,"focus",v[3]),Ye(i,"mouseout",v[4]),Ye(i,"blur",v[4])],_=!0)},p(E,[w]){const y={};w&4&&(y.classNames="transition duration-200 ease-in-out "+(E[2]&&"opacity-0")),w&1&&(y.value=E[0]),g.$set(y),(!m||w&2)&&(k.innerHTML=E[1])},i(E){m||(C(g.$$.fragment,E),m=!0)},o(E){N(g.$$.fragment,E),m=!1},d(E){E&&n(i),D(g),_=!1,lr(P)}}}function kr(v,i,f){let g=!0,{code:b=""}=i,{highlighted:k=""}=i;function m(){f(2,g=!1)}function _(){f(2,g=!0)}return v.$$set=P=>{"code"in P&&f(0,b=P.code),"highlighted"in P&&f(1,k=P.highlighted)},[b,k,g,m,_]}class V extends en{constructor(i){super();nn(this,i,kr,wr,tn,{code:0,highlighted:1})}}function yr(v){let i,f,g,b,k,m,_,P,E,w,y,T,ke,lt,at,rn,ye,ot,sn,_e,ut,ln,Ee,dt,an,H,ht,Q,ft,mt,on,W,x,je,Y,ct,We,pt,un,Pe,gt,dn,M,bt,X,vt,wt,hn,ze,kt,fn,ee,ne,fi,mn,S,yt,Be,_t,Et,Ie,Pt,zt,cn,te,pn,$e,$t,gn,ie,bn,re,se,mi,vn,Ae,At,wn,le,kn,Ce,Ct,yn,B,F,Te,ae,Nt,He,Dt,_n,K,Vt,oe,St,Ut,En,O,jt,xe,Wt,Bt,Pn,L,It,Me,Tt,Ht,zn,U,xt,ue,Fe,Mt,Ft,de,Ke,Kt,Ot,$n,j,Lt,Oe,Gt,Rt,Le,qt,Zt,An,he,Cn,G,Jt,Ge,Qt,Yt,Nn,fe,Dn,R,Xt,Re,ei,ni,Vn,me,Sn,ce,Un,Ne,ti,jn,pe,Wn,q,ii,qe,ri,si,Bn,ge,In,be,Tn,I,Z,Ze,ve,li,Je,ai,Hn,J,oi,Qe,ui,di,xn,we,Mn,De,hi,Fn;return m=new st({}),Y=new st({}),te=new V({props:{code:"!pip install transformers",highlighted:'!pip <span class="hljs-keyword">install</span> transformers'}}),ie=new V({props:{code:"import transformers",highlighted:'<span class="hljs-keyword">import</span> transformers'}}),le=new V({props:{code:"!pip install transformers[sentencepiece]",highlighted:'!pip <span class="hljs-keyword">install</span> transformers[sentencepiece]'}}),ae=new st({}),he=new V({props:{code:`mkdir ~/transformers-course
cd ~/transformers-course`,highlighted:`<span class="hljs-built_in">mkdir</span> ~/transformers-course
<span class="hljs-built_in">cd</span> ~/transformers-course`}}),fe=new V({props:{code:"python -m venv .env",highlighted:'<span class="hljs-keyword">python</span> -m venv .<span class="hljs-keyword">env</span>'}}),me=new V({props:{code:"ls -a",highlighted:'<span class="hljs-built_in">ls</span> -a'}}),ce=new V({props:{code:".      ..    .env",highlighted:'.      <span class="hljs-string">..</span>    <span class="hljs-string">.env</span>'}}),pe=new V({props:{code:`# Aktivieren der virtuellen Umgebung
source .env/bin/activate

# Deaktivieren der virtuellen Umgebung
source .env/bin/deactivate`,highlighted:`<span class="hljs-comment"># Aktivieren der virtuellen Umgebung</span>
<span class="hljs-built_in">source</span> .<span class="hljs-built_in">env</span>/bin/activate

<span class="hljs-comment"># Deaktivieren der virtuellen Umgebung</span>
<span class="hljs-built_in">source</span> .<span class="hljs-built_in">env</span>/bin/deactivate`}}),ge=new V({props:{code:"which python",highlighted:'<span class="hljs-built_in">which</span> python'}}),be=new V({props:{code:"/home/<user>/transformers-course/.env/bin/python",highlighted:'<span class="hljs-regexp">/home/</span>&lt;user&gt;<span class="hljs-regexp">/transformers-course/</span>.env<span class="hljs-regexp">/bin/</span>python'}}),ve=new st({}),we=new V({props:{code:'pip install "transformers[sentencepiece]"',highlighted:'pip <span class="hljs-keyword">install</span> <span class="hljs-string">&quot;transformers[sentencepiece]&quot;</span>'}}),{c(){i=a("meta"),f=c(),g=a("h1"),b=a("a"),k=a("span"),z(m.$$.fragment),_=c(),P=a("span"),E=d("Einf\xFChrung"),w=c(),y=a("p"),T=d("Willkommen zum Hugging-Face-Kurs! Die vorliegende Einf\xFChrung wird dir dabei helfen, deine Arbeitsumgebung einzurichten. Wenn du den Kurs gerade erst beginnst, empfehlen wir dir, zuerst einen \xDCberblick \xFCber "),ke=a("a"),lt=d("Kapitel 1"),at=d(" zu gewinnen und dann wieder hierher zur\xFCckzukommen und deine Umgebung einzurichten, damit du den Code selbst ausprobieren kannst."),rn=c(),ye=a("p"),ot=d("Alle Bibliotheken, die wir in diesem Kurs verwenden werden, sind als Python-Pakete verf\xFCgbar. Daher zeigen wir dir hier, wie du eine Python-Umgebung einrichtest und die ben\xF6tigten Bibliotheken installierst."),sn=c(),_e=a("p"),ut=d("Wir stellen zwei verschiedene M\xF6glichkeiten vor, wie du deine Arbeitsumgebung einrichten kannst: entweder \xFCber ein Colab-Notebook oder \xFCber eine virtuelle Python-Umgebung. Du kannst dich f\xFCr die Variante entscheiden, die dir am meisten zusagt. Anf\xE4ngern empfehlen wir dringend, mit einem Colab-Notebook zu beginnen."),ln=c(),Ee=a("p"),dt=d("Wir werden nicht auf das Windows-System eingehen. Wenn du auf einem Windows-System arbeitest, empfehlen wir dir, ein Colab-Notebook zu verwenden. Wenn du eine Linux-Distribution oder macOS verwendest, kannst du beide der hier beschriebenen Ans\xE4tze nutzen."),an=c(),H=a("p"),ht=d("F\xFCr den Gro\xDFteil des Kurses ist es erforderlich, dass du ein Konto bei Hugging Face hast. Wir raten dir, am besten gleich eines zu erstellen: "),Q=a("a"),ft=d("Konto erstellen"),mt=d("."),on=c(),W=a("h2"),x=a("a"),je=a("span"),z(Y.$$.fragment),ct=c(),We=a("span"),pt=d("Verwendung eines Google-Colab-Notebooks"),un=c(),Pe=a("p"),gt=d("Ein Colab-Notebook zu verwenden, ist die einfachste L\xF6sung: Starte einfach ein Notebook in deinem Browser und fange direkt an zu programmieren!"),dn=c(),M=a("p"),bt=d("Falls du mit Colab noch nicht vertraut sein solltest, empfehlen wir dir, zun\xE4chst mit der "),X=a("a"),vt=d("bereitstehenden Einf\xFChrung"),wt=d(" zu beginnen. Colab erm\xF6glicht die Verwendung von beschleunigter Hardware, wie GPUs oder TPUs, und ist f\xFCr kleinere Workloads kostenlos."),hn=c(),ze=a("p"),kt=d("Sobald du dich in Colab ausreichend zurechtfindest, kannst du ein neues Notebook anlegen und mit der Einrichtung beginnen:"),fn=c(),ee=a("div"),ne=a("img"),mn=c(),S=a("p"),yt=d("Im n\xE4chsten Schritt installieren wir die Bibliotheken, die wir in diesem Kurs verwenden werden. F\xFCr die Installation werden wir die Paketverwaltung f\xFCr Python, "),Be=a("code"),_t=d("pip"),Et=d(", verwenden. Um Systembefehle in Notebooks ausf\xFChren zu k\xF6nnen, musst du ihnen das Zeichen "),Ie=a("code"),Pt=d("!"),zt=d(" voranstellen. Dementsprechend kannst du die \u{1F917} Transformers-Bibliothek wie folgt installieren:"),cn=c(),z(te.$$.fragment),pn=c(),$e=a("p"),$t=d("Wenn du gleich sicherstellen m\xF6chtest, dass das Paket korrekt installiert wurde, kannst du es einfach in deiner Python-Laufzeitumgebung importieren:"),gn=c(),z(ie.$$.fragment),bn=c(),re=a("div"),se=a("img"),vn=c(),Ae=a("p"),At=d("Damit wird eine sehr abgespeckte Version der \u{1F917} Transformers-Bibliothek installiert. Insbesondere werden keine spezifischen Frameworks f\xFCr maschinelles Lernen (wie PyTorch oder TensorFlow) installiert. Da wir viele verschiedene Funktionen der Bibliothek verwenden werden, empfehlen wir die Installation der Entwicklungs- bzw. Development-Version, die alle erforderlichen Abh\xE4ngigkeiten f\xFCr so ziemlich jeden erdenklichen Anwendungsfall enth\xE4lt:"),wn=c(),z(le.$$.fragment),kn=c(),Ce=a("p"),Ct=d("Dies dauert zwar etwas l\xE4nger, aber anschlie\xDFend bist du bereit f\xFCr den Rest des Kurses!"),yn=c(),B=a("h2"),F=a("a"),Te=a("span"),z(ae.$$.fragment),Nt=c(),He=a("span"),Dt=d("Verwendung einer virtuellen Python-Umgebung"),_n=c(),K=a("p"),Vt=d("Wenn du lieber eine virtuelle Python-Umgebung verwenden m\xF6chtest, musst du zun\xE4chst Python auf deinem System installieren. F\xFCr den Anfang empfehlen wir "),oe=a("a"),St=d("diese Anleitung"),Ut=d("."),En=c(),O=a("p"),jt=d("Sobald du Python installiert hast, solltest du in der Lage sein, Python-Befehle in deinem Terminal auszuf\xFChren. Zun\xE4chst kannst du den folgenden Befehl ausf\xFChren, um sicherzustellen, dass Python korrekt installiert ist, bevor du mit den n\xE4chsten Schritten fortf\xE4hrst: "),xe=a("code"),Wt=d("python --version"),Bt=d(". Dies sollte die Python-Version ausgeben, die jetzt auf deinem System installiert ist."),Pn=c(),L=a("p"),It=d("Wenn du einen Python-Befehl in deinem Terminal ausf\xFChrst, z. B. "),Me=a("code"),Tt=d("python --version"),Ht=d(", solltest du das Programm, das deinen Befehl ausf\xFChrt, als Hauptinstallation von Python auf deinem System betrachten. Wir empfehlen, diese Hauptinstallation frei von Paketen zu halten und f\xFCr jede Anwendung, an der du arbeitest, eine eigene Umgebung zu erstellen. Auf diese Weise kann jede Anwendung ihre eigenen Abh\xE4ngigkeiten und Pakete haben, und du musst dir keine Gedanken \xFCber m\xF6gliche Kompatibilit\xE4tsprobleme mit anderen Anwendungen machen."),zn=c(),U=a("p"),xt=d("In Python wird dies mit "),ue=a("a"),Fe=a("em"),Mt=d("virtuellen Umgebungen"),Ft=d(" bewerkstelligt. Das sind in sich geschlossene Verzeichnisb\xE4ume, die jeweils eine Python-Installation mit einer bestimmten Python-Version sowie alle Pakete enthalten, die die Anwendung ben\xF6tigt. Eine solche virtuelle Umgebung kann mit verschiedenen Werkzeugen erstellt werden. Wir werden daf\xFCr auf das offizielle Python-Paket "),de=a("a"),Ke=a("code"),Kt=d("venv"),Ot=d(" zur\xFCckgreifen."),$n=c(),j=a("p"),Lt=d("Erstelle zun\xE4chst das Verzeichnis, in dem du deine Anwendung unterbringen m\xF6chtest - zum Beispiel k\xF6nntest du ein neues Verzeichnis namens "),Oe=a("em"),Gt=d("transformers-course"),Rt=d(" als Unterverzeichnis deines Hauptverzeichnisses ("),Le=a("em"),qt=d("home"),Zt=d(") anlegen:"),An=c(),z(he.$$.fragment),Cn=c(),G=a("p"),Jt=d("Erstelle nun in diesem Verzeichnis mithilfe des Python-Moduls "),Ge=a("code"),Qt=d("venv"),Yt=d(" eine virtuelle Umgebung:"),Nn=c(),z(fe.$$.fragment),Dn=c(),R=a("p"),Xt=d("Du solltest jetzt ein Verzeichnis namens "),Re=a("em"),ei=d(".env"),ni=d(" in deinem ansonsten leeren Ordner haben:"),Vn=c(),z(me.$$.fragment),Sn=c(),z(ce.$$.fragment),Un=c(),Ne=a("p"),ti=d("Mit den Skripten \u201Cactivate\u201D und \u201Cdeactivate\u201D kannst du in deine virtuelle Umgebung hinein- und herauswechseln:"),jn=c(),z(pe.$$.fragment),Wn=c(),q=a("p"),ii=d("Du kannst dich vergewissern, dass die Umgebung aktiviert ist, indem du den Befehl "),qe=a("code"),ri=d("which python"),si=d(" ausf\xFChrst: Wenn er auf die virtuelle Umgebung verweist, dann hast du sie erfolgreich aktiviert!"),Bn=c(),z(ge.$$.fragment),In=c(),z(be.$$.fragment),Tn=c(),I=a("h3"),Z=a("a"),Ze=a("span"),z(ve.$$.fragment),li=c(),Je=a("span"),ai=d("Installieren von Abh\xE4ngigkeiten"),Hn=c(),J=a("p"),oi=d("Wie im vorherigen Abschnitt zur Verwendung von Google-Colab-Instanzen musst du nun noch die Pakete installieren, die du zum Fortfahren ben\xF6tigst. Auch hier empfehlen wir, die Entwicklungsversion von \u{1F917} Transformers mithilfe des Paketverwaltungsprogramm "),Qe=a("code"),ui=d("pip"),di=d(" zu installieren:"),xn=c(),z(we.$$.fragment),Mn=c(),De=a("p"),hi=d("So, nun bist du startklar und kannst loslegen!"),this.h()},l(e){const r=ar('[data-svelte="svelte-1phssyn"]',document.head);i=o(r,"META",{name:!0,content:!0}),r.forEach(n),f=p(e),g=o(e,"H1",{class:!0});var Kn=l(g);b=o(Kn,"A",{id:!0,class:!0,href:!0});var ci=l(b);k=o(ci,"SPAN",{});var pi=l(k);$(m.$$.fragment,pi),pi.forEach(n),ci.forEach(n),_=p(Kn),P=o(Kn,"SPAN",{});var gi=l(P);E=h(gi,"Einf\xFChrung"),gi.forEach(n),Kn.forEach(n),w=p(e),y=o(e,"P",{});var On=l(y);T=h(On,"Willkommen zum Hugging-Face-Kurs! Die vorliegende Einf\xFChrung wird dir dabei helfen, deine Arbeitsumgebung einzurichten. Wenn du den Kurs gerade erst beginnst, empfehlen wir dir, zuerst einen \xDCberblick \xFCber "),ke=o(On,"A",{href:!0});var bi=l(ke);lt=h(bi,"Kapitel 1"),bi.forEach(n),at=h(On," zu gewinnen und dann wieder hierher zur\xFCckzukommen und deine Umgebung einzurichten, damit du den Code selbst ausprobieren kannst."),On.forEach(n),rn=p(e),ye=o(e,"P",{});var vi=l(ye);ot=h(vi,"Alle Bibliotheken, die wir in diesem Kurs verwenden werden, sind als Python-Pakete verf\xFCgbar. Daher zeigen wir dir hier, wie du eine Python-Umgebung einrichtest und die ben\xF6tigten Bibliotheken installierst."),vi.forEach(n),sn=p(e),_e=o(e,"P",{});var wi=l(_e);ut=h(wi,"Wir stellen zwei verschiedene M\xF6glichkeiten vor, wie du deine Arbeitsumgebung einrichten kannst: entweder \xFCber ein Colab-Notebook oder \xFCber eine virtuelle Python-Umgebung. Du kannst dich f\xFCr die Variante entscheiden, die dir am meisten zusagt. Anf\xE4ngern empfehlen wir dringend, mit einem Colab-Notebook zu beginnen."),wi.forEach(n),ln=p(e),Ee=o(e,"P",{});var ki=l(Ee);dt=h(ki,"Wir werden nicht auf das Windows-System eingehen. Wenn du auf einem Windows-System arbeitest, empfehlen wir dir, ein Colab-Notebook zu verwenden. Wenn du eine Linux-Distribution oder macOS verwendest, kannst du beide der hier beschriebenen Ans\xE4tze nutzen."),ki.forEach(n),an=p(e),H=o(e,"P",{});var Ln=l(H);ht=h(Ln,"F\xFCr den Gro\xDFteil des Kurses ist es erforderlich, dass du ein Konto bei Hugging Face hast. Wir raten dir, am besten gleich eines zu erstellen: "),Q=o(Ln,"A",{href:!0,rel:!0});var yi=l(Q);ft=h(yi,"Konto erstellen"),yi.forEach(n),mt=h(Ln,"."),Ln.forEach(n),on=p(e),W=o(e,"H2",{class:!0});var Gn=l(W);x=o(Gn,"A",{id:!0,class:!0,href:!0});var _i=l(x);je=o(_i,"SPAN",{});var Ei=l(je);$(Y.$$.fragment,Ei),Ei.forEach(n),_i.forEach(n),ct=p(Gn),We=o(Gn,"SPAN",{});var Pi=l(We);pt=h(Pi,"Verwendung eines Google-Colab-Notebooks"),Pi.forEach(n),Gn.forEach(n),un=p(e),Pe=o(e,"P",{});var zi=l(Pe);gt=h(zi,"Ein Colab-Notebook zu verwenden, ist die einfachste L\xF6sung: Starte einfach ein Notebook in deinem Browser und fange direkt an zu programmieren!"),zi.forEach(n),dn=p(e),M=o(e,"P",{});var Rn=l(M);bt=h(Rn,"Falls du mit Colab noch nicht vertraut sein solltest, empfehlen wir dir, zun\xE4chst mit der "),X=o(Rn,"A",{href:!0,rel:!0});var $i=l(X);vt=h($i,"bereitstehenden Einf\xFChrung"),$i.forEach(n),wt=h(Rn," zu beginnen. Colab erm\xF6glicht die Verwendung von beschleunigter Hardware, wie GPUs oder TPUs, und ist f\xFCr kleinere Workloads kostenlos."),Rn.forEach(n),hn=p(e),ze=o(e,"P",{});var Ai=l(ze);kt=h(Ai,"Sobald du dich in Colab ausreichend zurechtfindest, kannst du ein neues Notebook anlegen und mit der Einrichtung beginnen:"),Ai.forEach(n),fn=p(e),ee=o(e,"DIV",{class:!0});var Ci=l(ee);ne=o(Ci,"IMG",{src:!0,alt:!0,width:!0}),Ci.forEach(n),mn=p(e),S=o(e,"P",{});var Ve=l(S);yt=h(Ve,"Im n\xE4chsten Schritt installieren wir die Bibliotheken, die wir in diesem Kurs verwenden werden. F\xFCr die Installation werden wir die Paketverwaltung f\xFCr Python, "),Be=o(Ve,"CODE",{});var Ni=l(Be);_t=h(Ni,"pip"),Ni.forEach(n),Et=h(Ve,", verwenden. Um Systembefehle in Notebooks ausf\xFChren zu k\xF6nnen, musst du ihnen das Zeichen "),Ie=o(Ve,"CODE",{});var Di=l(Ie);Pt=h(Di,"!"),Di.forEach(n),zt=h(Ve," voranstellen. Dementsprechend kannst du die \u{1F917} Transformers-Bibliothek wie folgt installieren:"),Ve.forEach(n),cn=p(e),$(te.$$.fragment,e),pn=p(e),$e=o(e,"P",{});var Vi=l($e);$t=h(Vi,"Wenn du gleich sicherstellen m\xF6chtest, dass das Paket korrekt installiert wurde, kannst du es einfach in deiner Python-Laufzeitumgebung importieren:"),Vi.forEach(n),gn=p(e),$(ie.$$.fragment,e),bn=p(e),re=o(e,"DIV",{class:!0});var Si=l(re);se=o(Si,"IMG",{src:!0,alt:!0,width:!0}),Si.forEach(n),vn=p(e),Ae=o(e,"P",{});var Ui=l(Ae);At=h(Ui,"Damit wird eine sehr abgespeckte Version der \u{1F917} Transformers-Bibliothek installiert. Insbesondere werden keine spezifischen Frameworks f\xFCr maschinelles Lernen (wie PyTorch oder TensorFlow) installiert. Da wir viele verschiedene Funktionen der Bibliothek verwenden werden, empfehlen wir die Installation der Entwicklungs- bzw. Development-Version, die alle erforderlichen Abh\xE4ngigkeiten f\xFCr so ziemlich jeden erdenklichen Anwendungsfall enth\xE4lt:"),Ui.forEach(n),wn=p(e),$(le.$$.fragment,e),kn=p(e),Ce=o(e,"P",{});var ji=l(Ce);Ct=h(ji,"Dies dauert zwar etwas l\xE4nger, aber anschlie\xDFend bist du bereit f\xFCr den Rest des Kurses!"),ji.forEach(n),yn=p(e),B=o(e,"H2",{class:!0});var qn=l(B);F=o(qn,"A",{id:!0,class:!0,href:!0});var Wi=l(F);Te=o(Wi,"SPAN",{});var Bi=l(Te);$(ae.$$.fragment,Bi),Bi.forEach(n),Wi.forEach(n),Nt=p(qn),He=o(qn,"SPAN",{});var Ii=l(He);Dt=h(Ii,"Verwendung einer virtuellen Python-Umgebung"),Ii.forEach(n),qn.forEach(n),_n=p(e),K=o(e,"P",{});var Zn=l(K);Vt=h(Zn,"Wenn du lieber eine virtuelle Python-Umgebung verwenden m\xF6chtest, musst du zun\xE4chst Python auf deinem System installieren. F\xFCr den Anfang empfehlen wir "),oe=o(Zn,"A",{href:!0,rel:!0});var Ti=l(oe);St=h(Ti,"diese Anleitung"),Ti.forEach(n),Ut=h(Zn,"."),Zn.forEach(n),En=p(e),O=o(e,"P",{});var Jn=l(O);jt=h(Jn,"Sobald du Python installiert hast, solltest du in der Lage sein, Python-Befehle in deinem Terminal auszuf\xFChren. Zun\xE4chst kannst du den folgenden Befehl ausf\xFChren, um sicherzustellen, dass Python korrekt installiert ist, bevor du mit den n\xE4chsten Schritten fortf\xE4hrst: "),xe=o(Jn,"CODE",{});var Hi=l(xe);Wt=h(Hi,"python --version"),Hi.forEach(n),Bt=h(Jn,". Dies sollte die Python-Version ausgeben, die jetzt auf deinem System installiert ist."),Jn.forEach(n),Pn=p(e),L=o(e,"P",{});var Qn=l(L);It=h(Qn,"Wenn du einen Python-Befehl in deinem Terminal ausf\xFChrst, z. B. "),Me=o(Qn,"CODE",{});var xi=l(Me);Tt=h(xi,"python --version"),xi.forEach(n),Ht=h(Qn,", solltest du das Programm, das deinen Befehl ausf\xFChrt, als Hauptinstallation von Python auf deinem System betrachten. Wir empfehlen, diese Hauptinstallation frei von Paketen zu halten und f\xFCr jede Anwendung, an der du arbeitest, eine eigene Umgebung zu erstellen. Auf diese Weise kann jede Anwendung ihre eigenen Abh\xE4ngigkeiten und Pakete haben, und du musst dir keine Gedanken \xFCber m\xF6gliche Kompatibilit\xE4tsprobleme mit anderen Anwendungen machen."),Qn.forEach(n),zn=p(e),U=o(e,"P",{});var Se=l(U);xt=h(Se,"In Python wird dies mit "),ue=o(Se,"A",{href:!0,rel:!0});var Mi=l(ue);Fe=o(Mi,"EM",{});var Fi=l(Fe);Mt=h(Fi,"virtuellen Umgebungen"),Fi.forEach(n),Mi.forEach(n),Ft=h(Se," bewerkstelligt. Das sind in sich geschlossene Verzeichnisb\xE4ume, die jeweils eine Python-Installation mit einer bestimmten Python-Version sowie alle Pakete enthalten, die die Anwendung ben\xF6tigt. Eine solche virtuelle Umgebung kann mit verschiedenen Werkzeugen erstellt werden. Wir werden daf\xFCr auf das offizielle Python-Paket "),de=o(Se,"A",{href:!0,rel:!0});var Ki=l(de);Ke=o(Ki,"CODE",{});var Oi=l(Ke);Kt=h(Oi,"venv"),Oi.forEach(n),Ki.forEach(n),Ot=h(Se," zur\xFCckgreifen."),Se.forEach(n),$n=p(e),j=o(e,"P",{});var Ue=l(j);Lt=h(Ue,"Erstelle zun\xE4chst das Verzeichnis, in dem du deine Anwendung unterbringen m\xF6chtest - zum Beispiel k\xF6nntest du ein neues Verzeichnis namens "),Oe=o(Ue,"EM",{});var Li=l(Oe);Gt=h(Li,"transformers-course"),Li.forEach(n),Rt=h(Ue," als Unterverzeichnis deines Hauptverzeichnisses ("),Le=o(Ue,"EM",{});var Gi=l(Le);qt=h(Gi,"home"),Gi.forEach(n),Zt=h(Ue,") anlegen:"),Ue.forEach(n),An=p(e),$(he.$$.fragment,e),Cn=p(e),G=o(e,"P",{});var Yn=l(G);Jt=h(Yn,"Erstelle nun in diesem Verzeichnis mithilfe des Python-Moduls "),Ge=o(Yn,"CODE",{});var Ri=l(Ge);Qt=h(Ri,"venv"),Ri.forEach(n),Yt=h(Yn," eine virtuelle Umgebung:"),Yn.forEach(n),Nn=p(e),$(fe.$$.fragment,e),Dn=p(e),R=o(e,"P",{});var Xn=l(R);Xt=h(Xn,"Du solltest jetzt ein Verzeichnis namens "),Re=o(Xn,"EM",{});var qi=l(Re);ei=h(qi,".env"),qi.forEach(n),ni=h(Xn," in deinem ansonsten leeren Ordner haben:"),Xn.forEach(n),Vn=p(e),$(me.$$.fragment,e),Sn=p(e),$(ce.$$.fragment,e),Un=p(e),Ne=o(e,"P",{});var Zi=l(Ne);ti=h(Zi,"Mit den Skripten \u201Cactivate\u201D und \u201Cdeactivate\u201D kannst du in deine virtuelle Umgebung hinein- und herauswechseln:"),Zi.forEach(n),jn=p(e),$(pe.$$.fragment,e),Wn=p(e),q=o(e,"P",{});var et=l(q);ii=h(et,"Du kannst dich vergewissern, dass die Umgebung aktiviert ist, indem du den Befehl "),qe=o(et,"CODE",{});var Ji=l(qe);ri=h(Ji,"which python"),Ji.forEach(n),si=h(et," ausf\xFChrst: Wenn er auf die virtuelle Umgebung verweist, dann hast du sie erfolgreich aktiviert!"),et.forEach(n),Bn=p(e),$(ge.$$.fragment,e),In=p(e),$(be.$$.fragment,e),Tn=p(e),I=o(e,"H3",{class:!0});var nt=l(I);Z=o(nt,"A",{id:!0,class:!0,href:!0});var Qi=l(Z);Ze=o(Qi,"SPAN",{});var Yi=l(Ze);$(ve.$$.fragment,Yi),Yi.forEach(n),Qi.forEach(n),li=p(nt),Je=o(nt,"SPAN",{});var Xi=l(Je);ai=h(Xi,"Installieren von Abh\xE4ngigkeiten"),Xi.forEach(n),nt.forEach(n),Hn=p(e),J=o(e,"P",{});var tt=l(J);oi=h(tt,"Wie im vorherigen Abschnitt zur Verwendung von Google-Colab-Instanzen musst du nun noch die Pakete installieren, die du zum Fortfahren ben\xF6tigst. Auch hier empfehlen wir, die Entwicklungsversion von \u{1F917} Transformers mithilfe des Paketverwaltungsprogramm "),Qe=o(tt,"CODE",{});var er=l(Qe);ui=h(er,"pip"),er.forEach(n),di=h(tt," zu installieren:"),tt.forEach(n),xn=p(e),$(we.$$.fragment,e),Mn=p(e),De=o(e,"P",{});var nr=l(De);hi=h(nr,"So, nun bist du startklar und kannst loslegen!"),nr.forEach(n),this.h()},h(){u(i,"name","hf:doc:metadata"),u(i,"content",JSON.stringify(_r)),u(b,"id","einfhrung"),u(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(b,"href","#einfhrung"),u(g,"class","relative group"),u(ke,"href","/course/chapter1"),u(Q,"href","https://huggingface.co/join"),u(Q,"rel","nofollow"),u(x,"id","verwendung-eines-googlecolabnotebooks"),u(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(x,"href","#verwendung-eines-googlecolabnotebooks"),u(W,"class","relative group"),u(X,"href","https://colab.research.google.com/notebooks/intro.ipynb"),u(X,"rel","nofollow"),ir(ne.src,fi="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter0/new_colab.png")||u(ne,"src",fi),u(ne,"alt","An empty colab notebook"),u(ne,"width","80%"),u(ee,"class","flex justify-center"),ir(se.src,mi="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter0/install.gif")||u(se,"src",mi),u(se,"alt","A gif showing the result of the two commands above: installation and import"),u(se,"width","80%"),u(re,"class","flex justify-center"),u(F,"id","verwendung-einer-virtuellen-pythonumgebung"),u(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(F,"href","#verwendung-einer-virtuellen-pythonumgebung"),u(B,"class","relative group"),u(oe,"href","https://realpython.com/installing-python/"),u(oe,"rel","nofollow"),u(ue,"href","https://docs.python.org/3/tutorial/venv.html"),u(ue,"rel","nofollow"),u(de,"href","https://docs.python.org/3/library/venv.html#module-venv"),u(de,"rel","nofollow"),u(Z,"id","installieren-von-abhngigkeiten"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#installieren-von-abhngigkeiten"),u(I,"class","relative group")},m(e,r){t(document.head,i),s(e,f,r),s(e,g,r),t(g,b),t(b,k),A(m,k,null),t(g,_),t(g,P),t(P,E),s(e,w,r),s(e,y,r),t(y,T),t(y,ke),t(ke,lt),t(y,at),s(e,rn,r),s(e,ye,r),t(ye,ot),s(e,sn,r),s(e,_e,r),t(_e,ut),s(e,ln,r),s(e,Ee,r),t(Ee,dt),s(e,an,r),s(e,H,r),t(H,ht),t(H,Q),t(Q,ft),t(H,mt),s(e,on,r),s(e,W,r),t(W,x),t(x,je),A(Y,je,null),t(W,ct),t(W,We),t(We,pt),s(e,un,r),s(e,Pe,r),t(Pe,gt),s(e,dn,r),s(e,M,r),t(M,bt),t(M,X),t(X,vt),t(M,wt),s(e,hn,r),s(e,ze,r),t(ze,kt),s(e,fn,r),s(e,ee,r),t(ee,ne),s(e,mn,r),s(e,S,r),t(S,yt),t(S,Be),t(Be,_t),t(S,Et),t(S,Ie),t(Ie,Pt),t(S,zt),s(e,cn,r),A(te,e,r),s(e,pn,r),s(e,$e,r),t($e,$t),s(e,gn,r),A(ie,e,r),s(e,bn,r),s(e,re,r),t(re,se),s(e,vn,r),s(e,Ae,r),t(Ae,At),s(e,wn,r),A(le,e,r),s(e,kn,r),s(e,Ce,r),t(Ce,Ct),s(e,yn,r),s(e,B,r),t(B,F),t(F,Te),A(ae,Te,null),t(B,Nt),t(B,He),t(He,Dt),s(e,_n,r),s(e,K,r),t(K,Vt),t(K,oe),t(oe,St),t(K,Ut),s(e,En,r),s(e,O,r),t(O,jt),t(O,xe),t(xe,Wt),t(O,Bt),s(e,Pn,r),s(e,L,r),t(L,It),t(L,Me),t(Me,Tt),t(L,Ht),s(e,zn,r),s(e,U,r),t(U,xt),t(U,ue),t(ue,Fe),t(Fe,Mt),t(U,Ft),t(U,de),t(de,Ke),t(Ke,Kt),t(U,Ot),s(e,$n,r),s(e,j,r),t(j,Lt),t(j,Oe),t(Oe,Gt),t(j,Rt),t(j,Le),t(Le,qt),t(j,Zt),s(e,An,r),A(he,e,r),s(e,Cn,r),s(e,G,r),t(G,Jt),t(G,Ge),t(Ge,Qt),t(G,Yt),s(e,Nn,r),A(fe,e,r),s(e,Dn,r),s(e,R,r),t(R,Xt),t(R,Re),t(Re,ei),t(R,ni),s(e,Vn,r),A(me,e,r),s(e,Sn,r),A(ce,e,r),s(e,Un,r),s(e,Ne,r),t(Ne,ti),s(e,jn,r),A(pe,e,r),s(e,Wn,r),s(e,q,r),t(q,ii),t(q,qe),t(qe,ri),t(q,si),s(e,Bn,r),A(ge,e,r),s(e,In,r),A(be,e,r),s(e,Tn,r),s(e,I,r),t(I,Z),t(Z,Ze),A(ve,Ze,null),t(I,li),t(I,Je),t(Je,ai),s(e,Hn,r),s(e,J,r),t(J,oi),t(J,Qe),t(Qe,ui),t(J,di),s(e,xn,r),A(we,e,r),s(e,Mn,r),s(e,De,r),t(De,hi),Fn=!0},p:Xe,i(e){Fn||(C(m.$$.fragment,e),C(Y.$$.fragment,e),C(te.$$.fragment,e),C(ie.$$.fragment,e),C(le.$$.fragment,e),C(ae.$$.fragment,e),C(he.$$.fragment,e),C(fe.$$.fragment,e),C(me.$$.fragment,e),C(ce.$$.fragment,e),C(pe.$$.fragment,e),C(ge.$$.fragment,e),C(be.$$.fragment,e),C(ve.$$.fragment,e),C(we.$$.fragment,e),Fn=!0)},o(e){N(m.$$.fragment,e),N(Y.$$.fragment,e),N(te.$$.fragment,e),N(ie.$$.fragment,e),N(le.$$.fragment,e),N(ae.$$.fragment,e),N(he.$$.fragment,e),N(fe.$$.fragment,e),N(me.$$.fragment,e),N(ce.$$.fragment,e),N(pe.$$.fragment,e),N(ge.$$.fragment,e),N(be.$$.fragment,e),N(ve.$$.fragment,e),N(we.$$.fragment,e),Fn=!1},d(e){n(i),e&&n(f),e&&n(g),D(m),e&&n(w),e&&n(y),e&&n(rn),e&&n(ye),e&&n(sn),e&&n(_e),e&&n(ln),e&&n(Ee),e&&n(an),e&&n(H),e&&n(on),e&&n(W),D(Y),e&&n(un),e&&n(Pe),e&&n(dn),e&&n(M),e&&n(hn),e&&n(ze),e&&n(fn),e&&n(ee),e&&n(mn),e&&n(S),e&&n(cn),D(te,e),e&&n(pn),e&&n($e),e&&n(gn),D(ie,e),e&&n(bn),e&&n(re),e&&n(vn),e&&n(Ae),e&&n(wn),D(le,e),e&&n(kn),e&&n(Ce),e&&n(yn),e&&n(B),D(ae),e&&n(_n),e&&n(K),e&&n(En),e&&n(O),e&&n(Pn),e&&n(L),e&&n(zn),e&&n(U),e&&n($n),e&&n(j),e&&n(An),D(he,e),e&&n(Cn),e&&n(G),e&&n(Nn),D(fe,e),e&&n(Dn),e&&n(R),e&&n(Vn),D(me,e),e&&n(Sn),D(ce,e),e&&n(Un),e&&n(Ne),e&&n(jn),D(pe,e),e&&n(Wn),e&&n(q),e&&n(Bn),D(ge,e),e&&n(In),D(be,e),e&&n(Tn),e&&n(I),D(ve),e&&n(Hn),e&&n(J),e&&n(xn),D(we,e),e&&n(Mn),e&&n(De)}}}const _r={local:"einfhrung",sections:[{local:"verwendung-eines-googlecolabnotebooks",title:"Verwendung eines Google-Colab-Notebooks"},{local:"verwendung-einer-virtuellen-pythonumgebung",sections:[{local:"installieren-von-abhngigkeiten",title:"Installieren von Abh\xE4ngigkeiten"}],title:"Verwendung einer virtuellen Python-Umgebung"}],title:"Einf\xFChrung"};function Er(v){return or(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $r extends en{constructor(i){super();nn(this,i,Er,yr,tn,{})}}export{$r as default,_r as metadata};
