import{S as dl,i as ul,s as fl,e as o,k as c,w as m,t,M as ml,c as i,d as s,m as d,a as r,x as h,h as l,b as u,N as hl,F as a,g as p,y as g,q as v,o as $,B as _,v as gl}from"../chunks/vendor-c570b7f7.js";import{T as vl}from"../chunks/Tip-4965f0b6.js";import{I as ta,C as A}from"../chunks/CodeBlock-8a2530c2.js";function $l(la){let f,T,j,w,D;return{c(){f=o("p"),T=t("Echa un vistazo a la documentaci\xF3n de "),j=o("code"),w=t("pipeline()"),D=t(" para obtener una lista completa de tareas admitidas.")},l(k){f=i(k,"P",{});var q=r(f);T=l(q,"Echa un vistazo a la documentaci\xF3n de "),j=i(q,"CODE",{});var H=r(j);w=l(H,"pipeline()"),H.forEach(s),D=l(q," para obtener una lista completa de tareas admitidas."),q.forEach(s)},m(k,q){p(k,f,q),a(f,T),a(f,j),a(j,w),a(f,D)},d(k){k&&s(f)}}}function _l(la){let f,T,j,w,D,k,q,H,Xa,na,U,Ya,Y,Za,es,oa,P,Z,as,Pe,ss,ts,ls,ze,ns,os,ee,is,Ce,rs,ps,ia,F,ra,M,N,Ae,ae,cs,De,ds,pa,y,us,Me,fs,ms,Se,hs,gs,Oe,vs,$s,ca,xe,se,_s,Le,js,Es,da,te,ua,le,ne,xs,Te,ks,ws,fa,oe,ma,ke,ys,ha,ie,ga,E,bs,He,qs,Ps,Ue,zs,Cs,Fe,As,Ds,Ne,Ms,Ss,va,re,$a,S,I,Ie,pe,Os,Re,Ls,_a,x,Ts,Je,Hs,Us,ce,Fs,Ns,Ke,Is,Rs,We,Js,Ks,ja,de,Ea,R,Ws,Be,Bs,Gs,xa,ue,ka,J,Qs,Ge,Vs,Xs,wa,fe,ya,O,K,Qe,me,Ys,Ve,Zs,ba,W,et,Xe,at,st,qa,b,tt,he,lt,nt,ge,ot,it,Ye,rt,pt,Pa,ve,za,B,ct,Ze,dt,ut,Ca,$e,Aa,L,G,ea,_e,ft,aa,mt,Da,Q,ht,sa,gt,vt,Ma,we,$t,Sa,ye,be,_t,Oa,je,La;return k=new ta({}),F=new vl({props:{$$slots:{default:[$l]},$$scope:{ctx:la}}}),ae=new ta({}),te=new A({props:{code:`from transformers import pipeline

generator = pipeline(task="text-generation")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = pipeline(task=<span class="hljs-string">&quot;text-generation&quot;</span>)`}}),oe=new A({props:{code:'generator("Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(<span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>)
[{<span class="hljs-string">&#x27;generated_text&#x27;</span>: <span class="hljs-string">&#x27;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Seven for the Iron-priests at the door to the east, and thirteen for the Lord Kings at the end of the mountain&#x27;</span>}]`}}),ie=new A({props:{code:`generator(
    [
        "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone",
        "Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne",
    ]
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throne&quot;</span>,
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)`}}),re=new A({props:{code:`generator(
    "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone",
    num_return_sequences=2,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>,
<span class="hljs-meta">... </span>    num_return_sequences=<span class="hljs-number">2</span>,
<span class="hljs-meta">... </span>)`}}),pe=new ta({}),de=new A({props:{code:`from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("distilgpt2")
model = AutoModelForCausalLM.from_pretrained("distilgpt2")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;distilgpt2&quot;</span>)`}}),ue=new A({props:{code:`from transformers import pipeline

generator = pipeline(task="text-generation", model=model, tokenizer=tokenizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>generator = pipeline(task=<span class="hljs-string">&quot;text-generation&quot;</span>, model=model, tokenizer=tokenizer)`}}),fe=new A({props:{code:'generator("Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>generator(<span class="hljs-string">&quot;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone&quot;</span>)
[{<span class="hljs-string">&#x27;generated_text&#x27;</span>: <span class="hljs-string">&#x27;Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone, Seven for the Dragon-lords (for them to rule in a world ruled by their rulers, and all who live within the realm&#x27;</span>}]`}}),me=new ta({}),ve=new A({props:{code:`from transformers import pipeline

audio_classifier = pipeline(
    task="audio-classification", model="ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>audio_classifier = pipeline(
<span class="hljs-meta">... </span>    task=<span class="hljs-string">&quot;audio-classification&quot;</span>, model=<span class="hljs-string">&quot;ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition&quot;</span>
<span class="hljs-meta">... </span>)`}}),$e=new A({props:{code:'audio_classifier("jfk_moon_speech.wav")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>audio_classifier(<span class="hljs-string">&quot;jfk_moon_speech.wav&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;calm&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.13856211304664612</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;disgust&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.13148026168346405</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;happy&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12635163962841034</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;angry&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12439591437578201</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;fearful&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.12404385954141617</span>}]`}}),_e=new ta({}),je=new A({props:{code:`from transformers import pipeline

vision_classifier = pipeline(task="image-classification")
vision_classifier(
    images="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg"
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>vision_classifier = pipeline(task=<span class="hljs-string">&quot;image-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>vision_classifier(
<span class="hljs-meta">... </span>    images=<span class="hljs-string">&quot;https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg&quot;</span>
<span class="hljs-meta">... </span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;lynx, catamount&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.4403027892112732</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;cougar, puma, catamount, mountain lion, painter, panther, Felis concolor&#x27;</span>,
  <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.03433405980467796</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;snow leopard, ounce, Panthera uncia&#x27;</span>,
  <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.032148055732250214</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;Egyptian cat&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.02353910356760025</span>},
 {<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;tiger cat&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.023034192621707916</span>}]`}}),{c(){f=o("meta"),T=c(),j=o("h1"),w=o("a"),D=o("span"),m(k.$$.fragment),q=c(),H=o("span"),Xa=t("Pipelines para inferencia"),na=c(),U=o("p"),Ya=t("Un [pipeline] simplifica el uso de cualquier modelo del "),Y=o("a"),Za=t("Model Hub"),es=t(" para la inferencia en una variedad de tareas como la generaci\xF3n de texto, la segmentaci\xF3n de im\xE1genes y la clasificaci\xF3n de audio. Incluso si no tienes experiencia con una modalidad espec\xEDfica o no comprendes el c\xF3digo que alimenta los modelos, \xA1a\xFAn puedes usarlos con el [pipeline]! Este tutorial te ense\xF1ar\xE1 a:"),oa=c(),P=o("ul"),Z=o("li"),as=t("Utilizar un "),Pe=o("code"),ss=t("pipeline()"),ts=t(" para inferencia."),ls=c(),ze=o("li"),ns=t("Utilizar un tokenizador o modelo espec\xEDfico."),os=c(),ee=o("li"),is=t("Utilizar un "),Ce=o("code"),rs=t("pipeline()"),ps=t(" para tareas de audio y visi\xF3n."),ia=c(),m(F.$$.fragment),ra=c(),M=o("h2"),N=o("a"),Ae=o("span"),m(ae.$$.fragment),cs=c(),De=o("span"),ds=t("Uso del pipeline"),pa=c(),y=o("p"),us=t("Si bien cada tarea tiene un "),Me=o("code"),fs=t("pipeline()"),ms=t(" asociado, es m\xE1s sencillo usar la abstracci\xF3n general "),Se=o("code"),hs=t("pipeline()"),gs=t(" que contiene todos los pipelines de tareas espec\xEDficas. El "),Oe=o("code"),vs=t("pipeline()"),$s=t(" carga autom\xE1ticamente un modelo predeterminado y un tokenizador con capacidad de inferencia para tu tarea."),ca=c(),xe=o("ol"),se=o("li"),_s=t("Comienza creando un "),Le=o("code"),js=t("pipeline()"),Es=t(" y espec\xEDfica una tarea de inferencia:"),da=c(),m(te.$$.fragment),ua=c(),le=o("ol"),ne=o("li"),xs=t("Pasa tu texto de entrada al "),Te=o("code"),ks=t("pipeline()"),ws=t(":"),fa=c(),m(oe.$$.fragment),ma=c(),ke=o("p"),ys=t("Si tienes m\xE1s de una entrada, p\xE1sala como una lista:"),ha=c(),m(ie.$$.fragment),ga=c(),E=o("p"),bs=t("Cualquier par\xE1metro adicional para tu tarea tambi\xE9n se puede incluir en el "),He=o("code"),qs=t("pipeline()"),Ps=t(". La tarea "),Ue=o("code"),zs=t("text-generation"),Cs=t(" tiene un m\xE9todo "),Fe=o("code"),As=t("generate()"),Ds=t(" con varios par\xE1metros para controlar la salida. Por ejemplo, si deseas generar m\xE1s de una salida, def\xEDnelo en el par\xE1metro "),Ne=o("code"),Ms=t("num_return_sequences"),Ss=t(":"),va=c(),m(re.$$.fragment),$a=c(),S=o("h3"),I=o("a"),Ie=o("span"),m(pe.$$.fragment),Os=c(),Re=o("span"),Ls=t("Selecciona un modelo y un tokenizador"),_a=c(),x=o("p"),Ts=t("El "),Je=o("code"),Hs=t("pipeline()"),Us=t(" acepta cualquier modelo del "),ce=o("a"),Fs=t("Model Hub"),Ns=t(". Hay etiquetas en el Model Hub que te permiten filtrar por el modelo que te gustar\xEDa utilizar para tu tarea. Una vez que hayas elegido un modelo apropiado, c\xE1rgalo con la clase "),Ke=o("code"),Is=t("AutoModelFor"),Rs=t(" y [`AutoTokenizer\u2019] correspondientes. Por ejemplo, carga la clase "),We=o("code"),Js=t("AutoModelForCausalLM"),Ks=t(" para una tarea de modelado de lenguaje causal:"),ja=c(),m(de.$$.fragment),Ea=c(),R=o("p"),Ws=t("Crea un "),Be=o("code"),Bs=t("pipeline()"),Gs=t(" para tu tarea y espec\xEDfica el modelo y el tokenizador que cargaste:"),xa=c(),m(ue.$$.fragment),ka=c(),J=o("p"),Qs=t("Pasa tu texto de entrada a "),Ge=o("code"),Vs=t("pipeline()"),Xs=t(" para generar algo de texto:"),wa=c(),m(fe.$$.fragment),ya=c(),O=o("h2"),K=o("a"),Qe=o("span"),m(me.$$.fragment),Ys=c(),Ve=o("span"),Zs=t("Pipeline de audio"),ba=c(),W=o("p"),et=t("La flexibilidad de "),Xe=o("code"),at=t("pipeline()"),st=t(" significa que tambi\xE9n se puede extender a tareas de audio."),qa=c(),b=o("p"),tt=t("Por ejemplo, clasifiquemos la emoci\xF3n de un breve fragmento del famoso discurso de John F. Kennedy "),he=o("a"),lt=t("\u201CWe choose to go to the Moon\u201D"),nt=t(". Encuentra un modelo de "),ge=o("a"),ot=t("audio classification"),it=t(" para reconocimiento de emociones en el Model Hub y c\xE1rgalo en el "),Ye=o("code"),rt=t("pipeline()"),pt=t(":"),Pa=c(),m(ve.$$.fragment),za=c(),B=o("p"),ct=t("Pasa el archivo de audio al "),Ze=o("code"),dt=t("pipeline()"),ut=t(":"),Ca=c(),m($e.$$.fragment),Aa=c(),L=o("h2"),G=o("a"),ea=o("span"),m(_e.$$.fragment),ft=c(),aa=o("span"),mt=t("Pipeline de visi\xF3n"),Da=c(),Q=o("p"),ht=t("Finalmente, utilizar un "),sa=o("code"),gt=t("pipeline()"),vt=t(" para tareas de visi\xF3n es pr\xE1cticamente id\xE9ntico."),Ma=c(),we=o("p"),$t=t("Espec\xEDfica tu tarea de visi\xF3n y pasa tu imagen al clasificador. La imagen puede ser un enlace o una ruta local a la imagen. Por ejemplo, \xBFqu\xE9 especie de gato se muestra a continuaci\xF3n?"),Sa=c(),ye=o("p"),be=o("img"),Oa=c(),m(je.$$.fragment),this.h()},l(e){const n=ml('[data-svelte="svelte-1phssyn"]',document.head);f=i(n,"META",{name:!0,content:!0}),n.forEach(s),T=d(e),j=i(e,"H1",{class:!0});var Ee=r(j);w=i(Ee,"A",{id:!0,class:!0,href:!0});var jt=r(w);D=i(jt,"SPAN",{});var Et=r(D);h(k.$$.fragment,Et),Et.forEach(s),jt.forEach(s),q=d(Ee),H=i(Ee,"SPAN",{});var xt=r(H);Xa=l(xt,"Pipelines para inferencia"),xt.forEach(s),Ee.forEach(s),na=d(e),U=i(e,"P",{});var Ta=r(U);Ya=l(Ta,"Un [pipeline] simplifica el uso de cualquier modelo del "),Y=i(Ta,"A",{href:!0,rel:!0});var kt=r(Y);Za=l(kt,"Model Hub"),kt.forEach(s),es=l(Ta," para la inferencia en una variedad de tareas como la generaci\xF3n de texto, la segmentaci\xF3n de im\xE1genes y la clasificaci\xF3n de audio. Incluso si no tienes experiencia con una modalidad espec\xEDfica o no comprendes el c\xF3digo que alimenta los modelos, \xA1a\xFAn puedes usarlos con el [pipeline]! Este tutorial te ense\xF1ar\xE1 a:"),Ta.forEach(s),oa=d(e),P=i(e,"UL",{});var qe=r(P);Z=i(qe,"LI",{});var Ha=r(Z);as=l(Ha,"Utilizar un "),Pe=i(Ha,"CODE",{});var wt=r(Pe);ss=l(wt,"pipeline()"),wt.forEach(s),ts=l(Ha," para inferencia."),Ha.forEach(s),ls=d(qe),ze=i(qe,"LI",{});var yt=r(ze);ns=l(yt,"Utilizar un tokenizador o modelo espec\xEDfico."),yt.forEach(s),os=d(qe),ee=i(qe,"LI",{});var Ua=r(ee);is=l(Ua,"Utilizar un "),Ce=i(Ua,"CODE",{});var bt=r(Ce);rs=l(bt,"pipeline()"),bt.forEach(s),ps=l(Ua," para tareas de audio y visi\xF3n."),Ua.forEach(s),qe.forEach(s),ia=d(e),h(F.$$.fragment,e),ra=d(e),M=i(e,"H2",{class:!0});var Fa=r(M);N=i(Fa,"A",{id:!0,class:!0,href:!0});var qt=r(N);Ae=i(qt,"SPAN",{});var Pt=r(Ae);h(ae.$$.fragment,Pt),Pt.forEach(s),qt.forEach(s),cs=d(Fa),De=i(Fa,"SPAN",{});var zt=r(De);ds=l(zt,"Uso del pipeline"),zt.forEach(s),Fa.forEach(s),pa=d(e),y=i(e,"P",{});var V=r(y);us=l(V,"Si bien cada tarea tiene un "),Me=i(V,"CODE",{});var Ct=r(Me);fs=l(Ct,"pipeline()"),Ct.forEach(s),ms=l(V," asociado, es m\xE1s sencillo usar la abstracci\xF3n general "),Se=i(V,"CODE",{});var At=r(Se);hs=l(At,"pipeline()"),At.forEach(s),gs=l(V," que contiene todos los pipelines de tareas espec\xEDficas. El "),Oe=i(V,"CODE",{});var Dt=r(Oe);vs=l(Dt,"pipeline()"),Dt.forEach(s),$s=l(V," carga autom\xE1ticamente un modelo predeterminado y un tokenizador con capacidad de inferencia para tu tarea."),V.forEach(s),ca=d(e),xe=i(e,"OL",{});var Mt=r(xe);se=i(Mt,"LI",{});var Na=r(se);_s=l(Na,"Comienza creando un "),Le=i(Na,"CODE",{});var St=r(Le);js=l(St,"pipeline()"),St.forEach(s),Es=l(Na," y espec\xEDfica una tarea de inferencia:"),Na.forEach(s),Mt.forEach(s),da=d(e),h(te.$$.fragment,e),ua=d(e),le=i(e,"OL",{start:!0});var Ot=r(le);ne=i(Ot,"LI",{});var Ia=r(ne);xs=l(Ia,"Pasa tu texto de entrada al "),Te=i(Ia,"CODE",{});var Lt=r(Te);ks=l(Lt,"pipeline()"),Lt.forEach(s),ws=l(Ia,":"),Ia.forEach(s),Ot.forEach(s),fa=d(e),h(oe.$$.fragment,e),ma=d(e),ke=i(e,"P",{});var Tt=r(ke);ys=l(Tt,"Si tienes m\xE1s de una entrada, p\xE1sala como una lista:"),Tt.forEach(s),ha=d(e),h(ie.$$.fragment,e),ga=d(e),E=i(e,"P",{});var z=r(E);bs=l(z,"Cualquier par\xE1metro adicional para tu tarea tambi\xE9n se puede incluir en el "),He=i(z,"CODE",{});var Ht=r(He);qs=l(Ht,"pipeline()"),Ht.forEach(s),Ps=l(z,". La tarea "),Ue=i(z,"CODE",{});var Ut=r(Ue);zs=l(Ut,"text-generation"),Ut.forEach(s),Cs=l(z," tiene un m\xE9todo "),Fe=i(z,"CODE",{});var Ft=r(Fe);As=l(Ft,"generate()"),Ft.forEach(s),Ds=l(z," con varios par\xE1metros para controlar la salida. Por ejemplo, si deseas generar m\xE1s de una salida, def\xEDnelo en el par\xE1metro "),Ne=i(z,"CODE",{});var Nt=r(Ne);Ms=l(Nt,"num_return_sequences"),Nt.forEach(s),Ss=l(z,":"),z.forEach(s),va=d(e),h(re.$$.fragment,e),$a=d(e),S=i(e,"H3",{class:!0});var Ra=r(S);I=i(Ra,"A",{id:!0,class:!0,href:!0});var It=r(I);Ie=i(It,"SPAN",{});var Rt=r(Ie);h(pe.$$.fragment,Rt),Rt.forEach(s),It.forEach(s),Os=d(Ra),Re=i(Ra,"SPAN",{});var Jt=r(Re);Ls=l(Jt,"Selecciona un modelo y un tokenizador"),Jt.forEach(s),Ra.forEach(s),_a=d(e),x=i(e,"P",{});var C=r(x);Ts=l(C,"El "),Je=i(C,"CODE",{});var Kt=r(Je);Hs=l(Kt,"pipeline()"),Kt.forEach(s),Us=l(C," acepta cualquier modelo del "),ce=i(C,"A",{href:!0,rel:!0});var Wt=r(ce);Fs=l(Wt,"Model Hub"),Wt.forEach(s),Ns=l(C,". Hay etiquetas en el Model Hub que te permiten filtrar por el modelo que te gustar\xEDa utilizar para tu tarea. Una vez que hayas elegido un modelo apropiado, c\xE1rgalo con la clase "),Ke=i(C,"CODE",{});var Bt=r(Ke);Is=l(Bt,"AutoModelFor"),Bt.forEach(s),Rs=l(C," y [`AutoTokenizer\u2019] correspondientes. Por ejemplo, carga la clase "),We=i(C,"CODE",{});var Gt=r(We);Js=l(Gt,"AutoModelForCausalLM"),Gt.forEach(s),Ks=l(C," para una tarea de modelado de lenguaje causal:"),C.forEach(s),ja=d(e),h(de.$$.fragment,e),Ea=d(e),R=i(e,"P",{});var Ja=r(R);Ws=l(Ja,"Crea un "),Be=i(Ja,"CODE",{});var Qt=r(Be);Bs=l(Qt,"pipeline()"),Qt.forEach(s),Gs=l(Ja," para tu tarea y espec\xEDfica el modelo y el tokenizador que cargaste:"),Ja.forEach(s),xa=d(e),h(ue.$$.fragment,e),ka=d(e),J=i(e,"P",{});var Ka=r(J);Qs=l(Ka,"Pasa tu texto de entrada a "),Ge=i(Ka,"CODE",{});var Vt=r(Ge);Vs=l(Vt,"pipeline()"),Vt.forEach(s),Xs=l(Ka," para generar algo de texto:"),Ka.forEach(s),wa=d(e),h(fe.$$.fragment,e),ya=d(e),O=i(e,"H2",{class:!0});var Wa=r(O);K=i(Wa,"A",{id:!0,class:!0,href:!0});var Xt=r(K);Qe=i(Xt,"SPAN",{});var Yt=r(Qe);h(me.$$.fragment,Yt),Yt.forEach(s),Xt.forEach(s),Ys=d(Wa),Ve=i(Wa,"SPAN",{});var Zt=r(Ve);Zs=l(Zt,"Pipeline de audio"),Zt.forEach(s),Wa.forEach(s),ba=d(e),W=i(e,"P",{});var Ba=r(W);et=l(Ba,"La flexibilidad de "),Xe=i(Ba,"CODE",{});var el=r(Xe);at=l(el,"pipeline()"),el.forEach(s),st=l(Ba," significa que tambi\xE9n se puede extender a tareas de audio."),Ba.forEach(s),qa=d(e),b=i(e,"P",{});var X=r(b);tt=l(X,"Por ejemplo, clasifiquemos la emoci\xF3n de un breve fragmento del famoso discurso de John F. Kennedy "),he=i(X,"A",{href:!0,rel:!0});var al=r(he);lt=l(al,"\u201CWe choose to go to the Moon\u201D"),al.forEach(s),nt=l(X,". Encuentra un modelo de "),ge=i(X,"A",{href:!0,rel:!0});var sl=r(ge);ot=l(sl,"audio classification"),sl.forEach(s),it=l(X," para reconocimiento de emociones en el Model Hub y c\xE1rgalo en el "),Ye=i(X,"CODE",{});var tl=r(Ye);rt=l(tl,"pipeline()"),tl.forEach(s),pt=l(X,":"),X.forEach(s),Pa=d(e),h(ve.$$.fragment,e),za=d(e),B=i(e,"P",{});var Ga=r(B);ct=l(Ga,"Pasa el archivo de audio al "),Ze=i(Ga,"CODE",{});var ll=r(Ze);dt=l(ll,"pipeline()"),ll.forEach(s),ut=l(Ga,":"),Ga.forEach(s),Ca=d(e),h($e.$$.fragment,e),Aa=d(e),L=i(e,"H2",{class:!0});var Qa=r(L);G=i(Qa,"A",{id:!0,class:!0,href:!0});var nl=r(G);ea=i(nl,"SPAN",{});var ol=r(ea);h(_e.$$.fragment,ol),ol.forEach(s),nl.forEach(s),ft=d(Qa),aa=i(Qa,"SPAN",{});var il=r(aa);mt=l(il,"Pipeline de visi\xF3n"),il.forEach(s),Qa.forEach(s),Da=d(e),Q=i(e,"P",{});var Va=r(Q);ht=l(Va,"Finalmente, utilizar un "),sa=i(Va,"CODE",{});var rl=r(sa);gt=l(rl,"pipeline()"),rl.forEach(s),vt=l(Va," para tareas de visi\xF3n es pr\xE1cticamente id\xE9ntico."),Va.forEach(s),Ma=d(e),we=i(e,"P",{});var pl=r(we);$t=l(pl,"Espec\xEDfica tu tarea de visi\xF3n y pasa tu imagen al clasificador. La imagen puede ser un enlace o una ruta local a la imagen. Por ejemplo, \xBFqu\xE9 especie de gato se muestra a continuaci\xF3n?"),pl.forEach(s),Sa=d(e),ye=i(e,"P",{});var cl=r(ye);be=i(cl,"IMG",{src:!0,alt:!0}),cl.forEach(s),Oa=d(e),h(je.$$.fragment,e),this.h()},h(){u(f,"name","hf:doc:metadata"),u(f,"content",JSON.stringify(jl)),u(w,"id","pipelines-para-inferencia"),u(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(w,"href","#pipelines-para-inferencia"),u(j,"class","relative group"),u(Y,"href","https://huggingface.co/models"),u(Y,"rel","nofollow"),u(N,"id","uso-del-pipeline"),u(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(N,"href","#uso-del-pipeline"),u(M,"class","relative group"),u(le,"start","2"),u(I,"id","selecciona-un-modelo-y-un-tokenizador"),u(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(I,"href","#selecciona-un-modelo-y-un-tokenizador"),u(S,"class","relative group"),u(ce,"href","https://huggingface.co/models"),u(ce,"rel","nofollow"),u(K,"id","pipeline-de-audio"),u(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(K,"href","#pipeline-de-audio"),u(O,"class","relative group"),u(he,"href","https://en.wikipedia.org/wiki/We_choose_to_go_to_the_Moon"),u(he,"rel","nofollow"),u(ge,"href","https://huggingface.co/models?pipeline_tag=audio-classification"),u(ge,"rel","nofollow"),u(G,"id","pipeline-de-visin"),u(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(G,"href","#pipeline-de-visin"),u(L,"class","relative group"),hl(be.src,_t="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/pipeline-cat-chonk.jpeg")||u(be,"src",_t),u(be,"alt","pipeline-cat-chonk")},m(e,n){a(document.head,f),p(e,T,n),p(e,j,n),a(j,w),a(w,D),g(k,D,null),a(j,q),a(j,H),a(H,Xa),p(e,na,n),p(e,U,n),a(U,Ya),a(U,Y),a(Y,Za),a(U,es),p(e,oa,n),p(e,P,n),a(P,Z),a(Z,as),a(Z,Pe),a(Pe,ss),a(Z,ts),a(P,ls),a(P,ze),a(ze,ns),a(P,os),a(P,ee),a(ee,is),a(ee,Ce),a(Ce,rs),a(ee,ps),p(e,ia,n),g(F,e,n),p(e,ra,n),p(e,M,n),a(M,N),a(N,Ae),g(ae,Ae,null),a(M,cs),a(M,De),a(De,ds),p(e,pa,n),p(e,y,n),a(y,us),a(y,Me),a(Me,fs),a(y,ms),a(y,Se),a(Se,hs),a(y,gs),a(y,Oe),a(Oe,vs),a(y,$s),p(e,ca,n),p(e,xe,n),a(xe,se),a(se,_s),a(se,Le),a(Le,js),a(se,Es),p(e,da,n),g(te,e,n),p(e,ua,n),p(e,le,n),a(le,ne),a(ne,xs),a(ne,Te),a(Te,ks),a(ne,ws),p(e,fa,n),g(oe,e,n),p(e,ma,n),p(e,ke,n),a(ke,ys),p(e,ha,n),g(ie,e,n),p(e,ga,n),p(e,E,n),a(E,bs),a(E,He),a(He,qs),a(E,Ps),a(E,Ue),a(Ue,zs),a(E,Cs),a(E,Fe),a(Fe,As),a(E,Ds),a(E,Ne),a(Ne,Ms),a(E,Ss),p(e,va,n),g(re,e,n),p(e,$a,n),p(e,S,n),a(S,I),a(I,Ie),g(pe,Ie,null),a(S,Os),a(S,Re),a(Re,Ls),p(e,_a,n),p(e,x,n),a(x,Ts),a(x,Je),a(Je,Hs),a(x,Us),a(x,ce),a(ce,Fs),a(x,Ns),a(x,Ke),a(Ke,Is),a(x,Rs),a(x,We),a(We,Js),a(x,Ks),p(e,ja,n),g(de,e,n),p(e,Ea,n),p(e,R,n),a(R,Ws),a(R,Be),a(Be,Bs),a(R,Gs),p(e,xa,n),g(ue,e,n),p(e,ka,n),p(e,J,n),a(J,Qs),a(J,Ge),a(Ge,Vs),a(J,Xs),p(e,wa,n),g(fe,e,n),p(e,ya,n),p(e,O,n),a(O,K),a(K,Qe),g(me,Qe,null),a(O,Ys),a(O,Ve),a(Ve,Zs),p(e,ba,n),p(e,W,n),a(W,et),a(W,Xe),a(Xe,at),a(W,st),p(e,qa,n),p(e,b,n),a(b,tt),a(b,he),a(he,lt),a(b,nt),a(b,ge),a(ge,ot),a(b,it),a(b,Ye),a(Ye,rt),a(b,pt),p(e,Pa,n),g(ve,e,n),p(e,za,n),p(e,B,n),a(B,ct),a(B,Ze),a(Ze,dt),a(B,ut),p(e,Ca,n),g($e,e,n),p(e,Aa,n),p(e,L,n),a(L,G),a(G,ea),g(_e,ea,null),a(L,ft),a(L,aa),a(aa,mt),p(e,Da,n),p(e,Q,n),a(Q,ht),a(Q,sa),a(sa,gt),a(Q,vt),p(e,Ma,n),p(e,we,n),a(we,$t),p(e,Sa,n),p(e,ye,n),a(ye,be),p(e,Oa,n),g(je,e,n),La=!0},p(e,[n]){const Ee={};n&2&&(Ee.$$scope={dirty:n,ctx:e}),F.$set(Ee)},i(e){La||(v(k.$$.fragment,e),v(F.$$.fragment,e),v(ae.$$.fragment,e),v(te.$$.fragment,e),v(oe.$$.fragment,e),v(ie.$$.fragment,e),v(re.$$.fragment,e),v(pe.$$.fragment,e),v(de.$$.fragment,e),v(ue.$$.fragment,e),v(fe.$$.fragment,e),v(me.$$.fragment,e),v(ve.$$.fragment,e),v($e.$$.fragment,e),v(_e.$$.fragment,e),v(je.$$.fragment,e),La=!0)},o(e){$(k.$$.fragment,e),$(F.$$.fragment,e),$(ae.$$.fragment,e),$(te.$$.fragment,e),$(oe.$$.fragment,e),$(ie.$$.fragment,e),$(re.$$.fragment,e),$(pe.$$.fragment,e),$(de.$$.fragment,e),$(ue.$$.fragment,e),$(fe.$$.fragment,e),$(me.$$.fragment,e),$(ve.$$.fragment,e),$($e.$$.fragment,e),$(_e.$$.fragment,e),$(je.$$.fragment,e),La=!1},d(e){s(f),e&&s(T),e&&s(j),_(k),e&&s(na),e&&s(U),e&&s(oa),e&&s(P),e&&s(ia),_(F,e),e&&s(ra),e&&s(M),_(ae),e&&s(pa),e&&s(y),e&&s(ca),e&&s(xe),e&&s(da),_(te,e),e&&s(ua),e&&s(le),e&&s(fa),_(oe,e),e&&s(ma),e&&s(ke),e&&s(ha),_(ie,e),e&&s(ga),e&&s(E),e&&s(va),_(re,e),e&&s($a),e&&s(S),_(pe),e&&s(_a),e&&s(x),e&&s(ja),_(de,e),e&&s(Ea),e&&s(R),e&&s(xa),_(ue,e),e&&s(ka),e&&s(J),e&&s(wa),_(fe,e),e&&s(ya),e&&s(O),_(me),e&&s(ba),e&&s(W),e&&s(qa),e&&s(b),e&&s(Pa),_(ve,e),e&&s(za),e&&s(B),e&&s(Ca),_($e,e),e&&s(Aa),e&&s(L),_(_e),e&&s(Da),e&&s(Q),e&&s(Ma),e&&s(we),e&&s(Sa),e&&s(ye),e&&s(Oa),_(je,e)}}}const jl={local:"pipelines-para-inferencia",sections:[{local:"uso-del-pipeline",sections:[{local:"selecciona-un-modelo-y-un-tokenizador",title:"Selecciona un modelo y un tokenizador"}],title:"Uso del pipeline"},{local:"pipeline-de-audio",title:"Pipeline de audio"},{local:"pipeline-de-visin",title:"Pipeline de visi\xF3n"}],title:"Pipelines para inferencia"};function El(la){return gl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class yl extends dl{constructor(f){super();ul(this,f,El,_l,fl,{})}}export{yl as default,jl as metadata};
