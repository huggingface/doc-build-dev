import{S as Ba,i as Ya,s as Ra,e as s,k as u,w as U,t as i,M as Va,c as n,d as t,m as h,a as r,x as B,h as l,b as p,N as sa,F as a,g as c,y as Y,L as za,q as R,o as V,B as z,v as Wa}from"../../chunks/vendor-1e8b365d.js";import{I as st}from"../../chunks/IconCopyLink-483c28ba.js";import{C as na}from"../../chunks/CodeBlock-e5764662.js";function Ka(oa){let _,qe,k,$,oe,P,nt,re,ot,$e,W,rt,xe,j,x,ie,S,it,le,lt,Ie,I,pt,pe,ct,ut,Ae,K,ht,Ne,Q,dt,Pe,b,C,ft,ce,mt,wt,gt,T,yt,ue,bt,vt,_t,G,kt,he,jt,Et,Se,X,qt,Ce,L,Te,w,ra,Ge,Z,$t,Le,E,A,de,M,xt,fe,It,Me,ee,At,De,D,Oe,te,Nt,Fe,g,ia,He,d,Pt,me,St,Ct,we,Tt,Gt,ge,Lt,Mt,O,Dt,Ot,ye,Ft,Ht,F,Jt,Ut,Je,q,N,be,H,Bt,ve,Yt,Ue,ae,Rt,Be,f,Vt,_e,zt,Wt,ke,Kt,Qt,je,Xt,Zt,Ee,ea,ta,Ye,se,aa,Re,J,Ve,y,la,ze;return P=new st({}),S=new st({}),L=new na({props:{code:`import random

import gradio as gr


def chat(message, history):
    history = history or []
    if message.startswith("How many"):
        response = random.randint(1, 10)
    elif message.startswith("How"):
        response = random.choice(["Great", "Good", "Okay", "Bad"])
    elif message.startswith("Where"):
        response = random.choice(["Here", "There", "Somewhere"])
    else:
        response = "I don't know"
    history.append((message, response))
    return history, history


iface = gr.Interface(
    chat,
    ["text", "state"],
    ["chatbot", "state"],
    allow_screenshot=False,
    allow_flagging="never",
)
iface.launch()`,highlighted:`<span class="hljs-keyword">import</span> random

<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr


<span class="hljs-keyword">def</span> <span class="hljs-title function_">chat</span>(<span class="hljs-params">message, history</span>):
    history = history <span class="hljs-keyword">or</span> []
    <span class="hljs-keyword">if</span> message.startswith(<span class="hljs-string">&quot;How many&quot;</span>):
        response = random.randint(<span class="hljs-number">1</span>, <span class="hljs-number">10</span>)
    <span class="hljs-keyword">elif</span> message.startswith(<span class="hljs-string">&quot;How&quot;</span>):
        response = random.choice([<span class="hljs-string">&quot;Great&quot;</span>, <span class="hljs-string">&quot;Good&quot;</span>, <span class="hljs-string">&quot;Okay&quot;</span>, <span class="hljs-string">&quot;Bad&quot;</span>])
    <span class="hljs-keyword">elif</span> message.startswith(<span class="hljs-string">&quot;Where&quot;</span>):
        response = random.choice([<span class="hljs-string">&quot;Here&quot;</span>, <span class="hljs-string">&quot;There&quot;</span>, <span class="hljs-string">&quot;Somewhere&quot;</span>])
    <span class="hljs-keyword">else</span>:
        response = <span class="hljs-string">&quot;I don&#x27;t know&quot;</span>
    history.append((message, response))
    <span class="hljs-keyword">return</span> history, history


iface = gr.Interface(
    chat,
    [<span class="hljs-string">&quot;text&quot;</span>, <span class="hljs-string">&quot;state&quot;</span>],
    [<span class="hljs-string">&quot;chatbot&quot;</span>, <span class="hljs-string">&quot;state&quot;</span>],
    allow_screenshot=<span class="hljs-literal">False</span>,
    allow_flagging=<span class="hljs-string">&quot;never&quot;</span>,
)
iface.launch()`}}),M=new st({}),D=new na({props:{code:`import requests
import tensorflow as tf

import gradio as gr

inception_net = tf.keras.applications.MobileNetV2()  # load the model

# Download human-readable labels for ImageNet.
response = requests.get("https://git.io/JJkYN")
labels = response.text.split("\\n")


def classify_image(inp):
    inp = inp.reshape((-1, 224, 224, 3))
    inp = tf.keras.applications.mobilenet_v2.preprocess_input(inp)
    prediction = inception_net.predict(inp).flatten()
    return {labels[i]: float(prediction[i]) for i in range(1000)}


image = gr.inputs.Image(shape=(224, 224))
label = gr.outputs.Label(num_top_classes=3)

title = "Gradio Image Classifiction + Interpretation Example"
gr.Interface(
    fn=classify_image, inputs=image, outputs=label, interpretation="default", title=title
).launch()`,highlighted:`<span class="hljs-keyword">import</span> requests
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

inception_net = tf.keras.applications.MobileNetV2()  <span class="hljs-comment"># load the model</span>

<span class="hljs-comment"># Download human-readable labels for ImageNet.</span>
response = requests.get(<span class="hljs-string">&quot;https://git.io/JJkYN&quot;</span>)
labels = response.text.split(<span class="hljs-string">&quot;\\n&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">classify_image</span>(<span class="hljs-params">inp</span>):
    inp = inp.reshape((-<span class="hljs-number">1</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>, <span class="hljs-number">3</span>))
    inp = tf.keras.applications.mobilenet_v2.preprocess_input(inp)
    prediction = inception_net.predict(inp).flatten()
    <span class="hljs-keyword">return</span> {labels[i]: <span class="hljs-built_in">float</span>(prediction[i]) <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">1000</span>)}


image = gr.inputs.Image(shape=(<span class="hljs-number">224</span>, <span class="hljs-number">224</span>))
label = gr.outputs.Label(num_top_classes=<span class="hljs-number">3</span>)

title = <span class="hljs-string">&quot;Gradio Image Classifiction + Interpretation Example&quot;</span>
gr.Interface(
    fn=classify_image, inputs=image, outputs=label, interpretation=<span class="hljs-string">&quot;default&quot;</span>, title=title
).launch()`}}),H=new st({}),J=new na({props:{code:`import requests
import tensorflow as tf

import gradio as gr

inception_net = tf.keras.applications.MobileNetV2()  # load the model

# Download human-readable labels for ImageNet.
response = requests.get("https://git.io/JJkYN")
labels = response.text.split("\\n")


def classify_image(inp):
    inp = inp.reshape((-1, 224, 224, 3))
    inp = tf.keras.applications.mobilenet_v2.preprocess_input(inp)
    prediction = inception_net.predict(inp).flatten()
    return {labels[i]: float(prediction[i]) for i in range(1000)}


image = gr.inputs.Image(shape=(224, 224))
label = gr.outputs.Label(num_top_classes=3)

title = "Gradio Image Classifiction + Interpretation Example"
gr.Interface(
    fn=classify_image, inputs=image, outputs=label, interpretation="default", title=title
).launch(auth=("admin", "pass1234"))`,highlighted:`<span class="hljs-keyword">import</span> requests
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

inception_net = tf.keras.applications.MobileNetV2()  <span class="hljs-comment"># load the model</span>

<span class="hljs-comment"># Download human-readable labels for ImageNet.</span>
response = requests.get(<span class="hljs-string">&quot;https://git.io/JJkYN&quot;</span>)
labels = response.text.split(<span class="hljs-string">&quot;\\n&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">classify_image</span>(<span class="hljs-params">inp</span>):
    inp = inp.reshape((-<span class="hljs-number">1</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>, <span class="hljs-number">3</span>))
    inp = tf.keras.applications.mobilenet_v2.preprocess_input(inp)
    prediction = inception_net.predict(inp).flatten()
    <span class="hljs-keyword">return</span> {labels[i]: <span class="hljs-built_in">float</span>(prediction[i]) <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">1000</span>)}


image = gr.inputs.Image(shape=(<span class="hljs-number">224</span>, <span class="hljs-number">224</span>))
label = gr.outputs.Label(num_top_classes=<span class="hljs-number">3</span>)

title = <span class="hljs-string">&quot;Gradio Image Classifiction + Interpretation Example&quot;</span>
gr.Interface(
    fn=classify_image, inputs=image, outputs=label, interpretation=<span class="hljs-string">&quot;default&quot;</span>, title=title
).launch(auth=(<span class="hljs-string">&quot;admin&quot;</span>, <span class="hljs-string">&quot;pass1234&quot;</span>))`}}),{c(){_=s("meta"),qe=u(),k=s("h1"),$=s("a"),oe=s("span"),U(P.$$.fragment),nt=u(),re=s("span"),ot=i("Advanced features"),$e=u(),W=s("p"),rt=i("Now that we can build and share a basic interface, let\u2019s explore some more advanced features such as state, interpretation and authentication."),xe=u(),j=s("h3"),x=s("a"),ie=s("span"),U(S.$$.fragment),it=u(),le=s("span"),lt=i("Using state to persist data"),Ie=u(),I=s("p"),pt=i("Gradio supports "),pe=s("em"),ct=i("session state"),ut=i(`, where data persists across multiple submits within a
page load. (And data is not shared between different users of your model.)`),Ae=u(),K=s("p"),ht=i(`Session state is useful for building demos of, for example, chatbots where you want to
persist data as the user interacts with the model.`),Ne=u(),Q=s("p"),dt=i("To store data in a session state, you need to do three things:"),Pe=u(),b=s("ol"),C=s("li"),ft=i("Pass in an "),ce=s("em"),mt=i("extra parameter"),wt=i(" into your function, which represents the state of the interface."),gt=u(),T=s("li"),yt=i("At the end of the function, return the updated value of the state as an "),ue=s("em"),bt=i("extra return value"),vt=i("."),_t=u(),G=s("li"),kt=i("Add the \u2018state\u2019 input and \u2018state\u2019 output components when creating your "),he=s("code"),jt=i("Interface"),Et=i("."),Se=u(),X=s("p"),qt=i("See the chatbot example below:"),Ce=u(),U(L.$$.fragment),Te=u(),w=s("iframe"),Ge=u(),Z=s("p"),$t=i(`Notice how the state of the output component persists across submits.
Note: you can pass in a default value to the state parameter,
which is used as the initial value of the state.`),Le=u(),E=s("h3"),A=s("a"),de=s("span"),U(M.$$.fragment),xt=u(),fe=s("span"),It=i("Using interpretation to understand predictions"),Me=u(),ee=s("p"),At=i("Most machine learning models are black boxes and the internal logic of the function is hidden from the end user. To encourage transparency, we\u2019ve made it very easy to add interpretation to your model by simply setting the interpretation keyword in the Interface class to default. This allows your users to understand what parts of the input are responsible for the output. Take a look at the simple interface below which shows an image classifier that also includes interpretation."),De=u(),U(D.$$.fragment),Oe=u(),te=s("p"),Nt=i("Test the interpretation function by submitting an input then clicking Interpret under the output component."),Fe=u(),g=s("iframe"),He=u(),d=s("p"),Pt=i("Besides the default interpretation method gradio provides, you can also specify "),me=s("code"),St=i("shap"),Ct=i(" for the "),we=s("code"),Tt=i("interpretation"),Gt=i(" parameter and set the "),ge=s("code"),Lt=i("num_shap"),Mt=i(" parameter. This uses Shapley-based interpretation; read more "),O=s("a"),Dt=i("here"),Ot=i(`.
Lastly, you can also pass in your own interpretation function into the `),ye=s("code"),Ft=i("interpretation"),Ht=i(" parameter. See an example in Gradio\u2019s getting started page "),F=s("a"),Jt=i("here"),Ut=i("."),Je=u(),q=s("h3"),N=s("a"),be=s("span"),U(H.$$.fragment),Bt=u(),ve=s("span"),Yt=i("Adding authentication"),Ue=u(),ae=s("p"),Rt=i("You may want to authentication to your gradio interface in order to control who can access and use your demo."),Be=u(),f=s("p"),Vt=i("Authentication can be added by provided a list of username/password tuples to the "),_e=s("code"),zt=i("auth"),Wt=i(" parameter in the "),ke=s("code"),Kt=i("launch()"),Qt=i(" method. For more complex authentication handling, you can pass a function that takes a username and password as arguments, and returns "),je=s("code"),Xt=i("True"),Zt=i(" to allow authentication, "),Ee=s("code"),ea=i("False"),ta=i(" otherwise."),Ye=u(),se=s("p"),aa=i("Let\u2019s take the image classification demo above and add authentication:"),Re=u(),U(J.$$.fragment),Ve=u(),y=s("iframe"),this.h()},l(e){const o=Va('[data-svelte="svelte-1phssyn"]',document.head);_=n(o,"META",{name:!0,content:!0}),o.forEach(t),qe=h(e),k=n(e,"H1",{class:!0});var We=r(k);$=n(We,"A",{id:!0,class:!0,href:!0});var pa=r($);oe=n(pa,"SPAN",{});var ca=r(oe);B(P.$$.fragment,ca),ca.forEach(t),pa.forEach(t),nt=h(We),re=n(We,"SPAN",{});var ua=r(re);ot=l(ua,"Advanced features"),ua.forEach(t),We.forEach(t),$e=h(e),W=n(e,"P",{});var ha=r(W);rt=l(ha,"Now that we can build and share a basic interface, let\u2019s explore some more advanced features such as state, interpretation and authentication."),ha.forEach(t),xe=h(e),j=n(e,"H3",{class:!0});var Ke=r(j);x=n(Ke,"A",{id:!0,class:!0,href:!0});var da=r(x);ie=n(da,"SPAN",{});var fa=r(ie);B(S.$$.fragment,fa),fa.forEach(t),da.forEach(t),it=h(Ke),le=n(Ke,"SPAN",{});var ma=r(le);lt=l(ma,"Using state to persist data"),ma.forEach(t),Ke.forEach(t),Ie=h(e),I=n(e,"P",{});var Qe=r(I);pt=l(Qe,"Gradio supports "),pe=n(Qe,"EM",{});var wa=r(pe);ct=l(wa,"session state"),wa.forEach(t),ut=l(Qe,`, where data persists across multiple submits within a
page load. (And data is not shared between different users of your model.)`),Qe.forEach(t),Ae=h(e),K=n(e,"P",{});var ga=r(K);ht=l(ga,`Session state is useful for building demos of, for example, chatbots where you want to
persist data as the user interacts with the model.`),ga.forEach(t),Ne=h(e),Q=n(e,"P",{});var ya=r(Q);dt=l(ya,"To store data in a session state, you need to do three things:"),ya.forEach(t),Pe=h(e),b=n(e,"OL",{});var ne=r(b);C=n(ne,"LI",{});var Xe=r(C);ft=l(Xe,"Pass in an "),ce=n(Xe,"EM",{});var ba=r(ce);mt=l(ba,"extra parameter"),ba.forEach(t),wt=l(Xe," into your function, which represents the state of the interface."),Xe.forEach(t),gt=h(ne),T=n(ne,"LI",{});var Ze=r(T);yt=l(Ze,"At the end of the function, return the updated value of the state as an "),ue=n(Ze,"EM",{});var va=r(ue);bt=l(va,"extra return value"),va.forEach(t),vt=l(Ze,"."),Ze.forEach(t),_t=h(ne),G=n(ne,"LI",{});var et=r(G);kt=l(et,"Add the \u2018state\u2019 input and \u2018state\u2019 output components when creating your "),he=n(et,"CODE",{});var _a=r(he);jt=l(_a,"Interface"),_a.forEach(t),Et=l(et,"."),et.forEach(t),ne.forEach(t),Se=h(e),X=n(e,"P",{});var ka=r(X);qt=l(ka,"See the chatbot example below:"),ka.forEach(t),Ce=h(e),B(L.$$.fragment,e),Te=h(e),w=n(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),r(w).forEach(t),Ge=h(e),Z=n(e,"P",{});var ja=r(Z);$t=l(ja,`Notice how the state of the output component persists across submits.
Note: you can pass in a default value to the state parameter,
which is used as the initial value of the state.`),ja.forEach(t),Le=h(e),E=n(e,"H3",{class:!0});var tt=r(E);A=n(tt,"A",{id:!0,class:!0,href:!0});var Ea=r(A);de=n(Ea,"SPAN",{});var qa=r(de);B(M.$$.fragment,qa),qa.forEach(t),Ea.forEach(t),xt=h(tt),fe=n(tt,"SPAN",{});var $a=r(fe);It=l($a,"Using interpretation to understand predictions"),$a.forEach(t),tt.forEach(t),Me=h(e),ee=n(e,"P",{});var xa=r(ee);At=l(xa,"Most machine learning models are black boxes and the internal logic of the function is hidden from the end user. To encourage transparency, we\u2019ve made it very easy to add interpretation to your model by simply setting the interpretation keyword in the Interface class to default. This allows your users to understand what parts of the input are responsible for the output. Take a look at the simple interface below which shows an image classifier that also includes interpretation."),xa.forEach(t),De=h(e),B(D.$$.fragment,e),Oe=h(e),te=n(e,"P",{});var Ia=r(te);Nt=l(Ia,"Test the interpretation function by submitting an input then clicking Interpret under the output component."),Ia.forEach(t),Fe=h(e),g=n(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),r(g).forEach(t),He=h(e),d=n(e,"P",{});var m=r(d);Pt=l(m,"Besides the default interpretation method gradio provides, you can also specify "),me=n(m,"CODE",{});var Aa=r(me);St=l(Aa,"shap"),Aa.forEach(t),Ct=l(m," for the "),we=n(m,"CODE",{});var Na=r(we);Tt=l(Na,"interpretation"),Na.forEach(t),Gt=l(m," parameter and set the "),ge=n(m,"CODE",{});var Pa=r(ge);Lt=l(Pa,"num_shap"),Pa.forEach(t),Mt=l(m," parameter. This uses Shapley-based interpretation; read more "),O=n(m,"A",{href:!0,rel:!0});var Sa=r(O);Dt=l(Sa,"here"),Sa.forEach(t),Ot=l(m,`.
Lastly, you can also pass in your own interpretation function into the `),ye=n(m,"CODE",{});var Ca=r(ye);Ft=l(Ca,"interpretation"),Ca.forEach(t),Ht=l(m," parameter. See an example in Gradio\u2019s getting started page "),F=n(m,"A",{href:!0,rel:!0});var Ta=r(F);Jt=l(Ta,"here"),Ta.forEach(t),Ut=l(m,"."),m.forEach(t),Je=h(e),q=n(e,"H3",{class:!0});var at=r(q);N=n(at,"A",{id:!0,class:!0,href:!0});var Ga=r(N);be=n(Ga,"SPAN",{});var La=r(be);B(H.$$.fragment,La),La.forEach(t),Ga.forEach(t),Bt=h(at),ve=n(at,"SPAN",{});var Ma=r(ve);Yt=l(Ma,"Adding authentication"),Ma.forEach(t),at.forEach(t),Ue=h(e),ae=n(e,"P",{});var Da=r(ae);Rt=l(Da,"You may want to authentication to your gradio interface in order to control who can access and use your demo."),Da.forEach(t),Be=h(e),f=n(e,"P",{});var v=r(f);Vt=l(v,"Authentication can be added by provided a list of username/password tuples to the "),_e=n(v,"CODE",{});var Oa=r(_e);zt=l(Oa,"auth"),Oa.forEach(t),Wt=l(v," parameter in the "),ke=n(v,"CODE",{});var Fa=r(ke);Kt=l(Fa,"launch()"),Fa.forEach(t),Qt=l(v," method. For more complex authentication handling, you can pass a function that takes a username and password as arguments, and returns "),je=n(v,"CODE",{});var Ha=r(je);Xt=l(Ha,"True"),Ha.forEach(t),Zt=l(v," to allow authentication, "),Ee=n(v,"CODE",{});var Ja=r(Ee);ea=l(Ja,"False"),Ja.forEach(t),ta=l(v," otherwise."),v.forEach(t),Ye=h(e),se=n(e,"P",{});var Ua=r(se);aa=l(Ua,"Let\u2019s take the image classification demo above and add authentication:"),Ua.forEach(t),Re=h(e),B(J.$$.fragment,e),Ve=h(e),y=n(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),r(y).forEach(t),this.h()},h(){p(_,"name","hf:doc:metadata"),p(_,"content",JSON.stringify(Qa)),p($,"id","advanced-features"),p($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p($,"href","#advanced-features"),p(k,"class","relative group"),p(x,"id","using-state-to-persist-data"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#using-state-to-persist-data"),p(j,"class","relative group"),sa(w.src,ra="https://hf.space/gradioiframe/dawood/Chatbot-Demo/+")||p(w,"src",ra),p(w,"frameborder","0"),p(w,"height","350"),p(w,"title","Gradio app"),p(w,"class","container p-0 flex-grow space-iframe"),p(w,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(w,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),p(A,"id","using-interpretation-to-understand-predictions"),p(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(A,"href","#using-interpretation-to-understand-predictions"),p(E,"class","relative group"),sa(g.src,ia="https://hf.space/gradioiframe/akhaliq/gradio-image-interpretation/+")||p(g,"src",ia),p(g,"frameborder","0"),p(g,"height","570"),p(g,"title","Gradio app"),p(g,"class","container p-0 flex-grow space-iframe"),p(g,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(g,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),p(O,"href","https://christophm.github.io/interpretable-ml-book/shap.html"),p(O,"rel","nofollow"),p(F,"href","https://gradio.app/getting_started/"),p(F,"rel","nofollow"),p(N,"id","adding-authentication"),p(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(N,"href","#adding-authentication"),p(q,"class","relative group"),sa(y.src,la="https://hf.space/gradioiframe/dawood/Auth-Image-Classification/+")||p(y,"src",la),p(y,"frameborder","0"),p(y,"height","570"),p(y,"title","Gradio app"),p(y,"class","container p-0 flex-grow space-iframe"),p(y,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),p(y,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads")},m(e,o){a(document.head,_),c(e,qe,o),c(e,k,o),a(k,$),a($,oe),Y(P,oe,null),a(k,nt),a(k,re),a(re,ot),c(e,$e,o),c(e,W,o),a(W,rt),c(e,xe,o),c(e,j,o),a(j,x),a(x,ie),Y(S,ie,null),a(j,it),a(j,le),a(le,lt),c(e,Ie,o),c(e,I,o),a(I,pt),a(I,pe),a(pe,ct),a(I,ut),c(e,Ae,o),c(e,K,o),a(K,ht),c(e,Ne,o),c(e,Q,o),a(Q,dt),c(e,Pe,o),c(e,b,o),a(b,C),a(C,ft),a(C,ce),a(ce,mt),a(C,wt),a(b,gt),a(b,T),a(T,yt),a(T,ue),a(ue,bt),a(T,vt),a(b,_t),a(b,G),a(G,kt),a(G,he),a(he,jt),a(G,Et),c(e,Se,o),c(e,X,o),a(X,qt),c(e,Ce,o),Y(L,e,o),c(e,Te,o),c(e,w,o),c(e,Ge,o),c(e,Z,o),a(Z,$t),c(e,Le,o),c(e,E,o),a(E,A),a(A,de),Y(M,de,null),a(E,xt),a(E,fe),a(fe,It),c(e,Me,o),c(e,ee,o),a(ee,At),c(e,De,o),Y(D,e,o),c(e,Oe,o),c(e,te,o),a(te,Nt),c(e,Fe,o),c(e,g,o),c(e,He,o),c(e,d,o),a(d,Pt),a(d,me),a(me,St),a(d,Ct),a(d,we),a(we,Tt),a(d,Gt),a(d,ge),a(ge,Lt),a(d,Mt),a(d,O),a(O,Dt),a(d,Ot),a(d,ye),a(ye,Ft),a(d,Ht),a(d,F),a(F,Jt),a(d,Ut),c(e,Je,o),c(e,q,o),a(q,N),a(N,be),Y(H,be,null),a(q,Bt),a(q,ve),a(ve,Yt),c(e,Ue,o),c(e,ae,o),a(ae,Rt),c(e,Be,o),c(e,f,o),a(f,Vt),a(f,_e),a(_e,zt),a(f,Wt),a(f,ke),a(ke,Kt),a(f,Qt),a(f,je),a(je,Xt),a(f,Zt),a(f,Ee),a(Ee,ea),a(f,ta),c(e,Ye,o),c(e,se,o),a(se,aa),c(e,Re,o),Y(J,e,o),c(e,Ve,o),c(e,y,o),ze=!0},p:za,i(e){ze||(R(P.$$.fragment,e),R(S.$$.fragment,e),R(L.$$.fragment,e),R(M.$$.fragment,e),R(D.$$.fragment,e),R(H.$$.fragment,e),R(J.$$.fragment,e),ze=!0)},o(e){V(P.$$.fragment,e),V(S.$$.fragment,e),V(L.$$.fragment,e),V(M.$$.fragment,e),V(D.$$.fragment,e),V(H.$$.fragment,e),V(J.$$.fragment,e),ze=!1},d(e){t(_),e&&t(qe),e&&t(k),z(P),e&&t($e),e&&t(W),e&&t(xe),e&&t(j),z(S),e&&t(Ie),e&&t(I),e&&t(Ae),e&&t(K),e&&t(Ne),e&&t(Q),e&&t(Pe),e&&t(b),e&&t(Se),e&&t(X),e&&t(Ce),z(L,e),e&&t(Te),e&&t(w),e&&t(Ge),e&&t(Z),e&&t(Le),e&&t(E),z(M),e&&t(Me),e&&t(ee),e&&t(De),z(D,e),e&&t(Oe),e&&t(te),e&&t(Fe),e&&t(g),e&&t(He),e&&t(d),e&&t(Je),e&&t(q),z(H),e&&t(Ue),e&&t(ae),e&&t(Be),e&&t(f),e&&t(Ye),e&&t(se),e&&t(Re),z(J,e),e&&t(Ve),e&&t(y)}}}const Qa={local:"advanced-features",sections:[{local:"using-state-to-persist-data",title:"Using state to persist data"},{local:"using-interpretation-to-understand-predictions",title:"Using interpretation to understand predictions"},{local:"adding-authentication",title:"Adding authentication"}],title:"Advanced features"};function Xa(oa){return Wa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class as extends Ba{constructor(_){super();Ya(this,_,Xa,Ka,Ra,{})}}export{as as default,Qa as metadata};
