import{S as vn,i as bn,s as yn,e as a,k as u,w as k,t as n,M as xn,c as s,d as t,m as h,a as l,x as E,h as i,b as c,N as Ot,F as o,g as p,y as j,L as _n,q as $,o as I,B as T,v as kn}from"../../chunks/vendor-1e8b365d.js";import{I as je}from"../../chunks/IconCopyLink-483c28ba.js";import{C as Mt}from"../../chunks/CodeBlock-e5764662.js";function En(Js){let S,Yt,L,G,He,le,zo,Ge,Wo,Ht,v,Uo,ze,Jo,Ko,We,Qo,Vo,Ue,Xo,Zo,Gt,B,ea,Je,ta,oa,Ke,aa,sa,zt,z,Qe,ne,la,Ve,na,ia,ra,Xe,ie,pa,Ze,ca,ua,Wt,$e,ha,Ut,F,W,et,re,da,tt,fa,Jt,Ie,ma,Kt,b,ot,wa,ga,at,va,ba,st,ya,xa,lt,_a,Qt,D,U,nt,pe,ka,it,Ea,Vt,Te,ja,Xt,ce,Zt,d,Ks,eo,Be,$a,to,y,rt,ue,Ia,pt,Ta,Ba,Pa,ct,ut,qa,Aa,R,ht,Ca,Sa,N,La,dt,Fa,Da,ft,Ra,Na,Oa,he,Ma,de,Ya,Ha,Ga,mt,fe,za,wt,Wa,Ua,oo,O,J,gt,me,Ja,vt,Ka,ao,P,Qa,bt,Va,Xa,yt,Za,es,so,K,ts,we,os,as,lo,x,ss,xt,ls,ns,_t,is,rs,kt,ps,cs,no,Q,us,Et,hs,ds,io,ge,ro,f,Qs,po,Pe,fs,co,M,V,jt,ve,ms,$t,ws,uo,qe,gs,ho,q,vs,It,bs,ys,Tt,xs,_s,fo,A,ks,Bt,Es,js,Pt,$s,Is,mo,C,qt,Ts,Bs,At,Ps,qs,Ct,As,wo,Ae,Cs,go,be,vo,m,Vs,bo,Y,X,St,ye,Ss,Lt,Ls,yo,Ce,Fs,xo,xe,_o,w,Xs,ko,H,Z,Ft,_e,Ds,Dt,Rs,Eo,Se,Ns,jo,Le,Os,$o,ke,Io,g,Zs,To,_,Ms,Rt,Ys,Hs,Nt,Gs,zs,Ee,Ws,Us,Bo;return le=new je({}),re=new je({}),pe=new je({}),ce=new Mt({props:{code:`import gradio as gr


def flip_text(x):
    return x[::-1]


demo = gr.Blocks()

with demo:
    gr.Markdown(
        """
    # Flip Text!
    Start typing below to see the output.
    """
    )
    inp = gr.Textbox(placeholder="Flip this text")
    out = gr.Textbox()

    inp.change(fn=flip_text, inputs=inp, outputs=out)

demo.launch()`,highlighted:`<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr


<span class="hljs-keyword">def</span> <span class="hljs-title function_">flip_text</span>(<span class="hljs-params">x</span>):
    <span class="hljs-keyword">return</span> x[::-<span class="hljs-number">1</span>]


demo = gr.Blocks()

<span class="hljs-keyword">with</span> demo:
    gr.Markdown(
        <span class="hljs-string">&quot;&quot;&quot;
    # Flip Text!
    Start typing below to see the output.
    &quot;&quot;&quot;</span>
    )
    inp = gr.Textbox(placeholder=<span class="hljs-string">&quot;Flip this text&quot;</span>)
    out = gr.Textbox()

    inp.change(fn=flip_text, inputs=inp, outputs=out)

demo.launch()`}}),me=new je({}),ge=new Mt({props:{code:`import numpy as np
import gradio as gr

demo = gr.Blocks()


def flip_text(x):
    return x[::-1]


def flip_image(x):
    return np.fliplr(x)


with demo:
    gr.Markdown("Flip text or image files using this demo.")
    with gr.Tabs():
        with gr.TabItem("Flip Text"):
            with gr.Row():
                text_input = gr.Textbox()
                text_output = gr.Textbox()
            text_button = gr.Button("Flip")
        with gr.TabItem("Flip Image"):
            with gr.Row():
                image_input = gr.Image()
                image_output = gr.Image()
            image_button = gr.Button("Flip")

    text_button.click(flip_text, inputs=text_input, outputs=text_output)
    image_button.click(flip_image, inputs=image_input, outputs=image_output)

demo.launch()`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

demo = gr.Blocks()


<span class="hljs-keyword">def</span> <span class="hljs-title function_">flip_text</span>(<span class="hljs-params">x</span>):
    <span class="hljs-keyword">return</span> x[::-<span class="hljs-number">1</span>]


<span class="hljs-keyword">def</span> <span class="hljs-title function_">flip_image</span>(<span class="hljs-params">x</span>):
    <span class="hljs-keyword">return</span> np.fliplr(x)


<span class="hljs-keyword">with</span> demo:
    gr.Markdown(<span class="hljs-string">&quot;Flip text or image files using this demo.&quot;</span>)
    <span class="hljs-keyword">with</span> gr.Tabs():
        <span class="hljs-keyword">with</span> gr.TabItem(<span class="hljs-string">&quot;Flip Text&quot;</span>):
            <span class="hljs-keyword">with</span> gr.Row():
                text_input = gr.Textbox()
                text_output = gr.Textbox()
            text_button = gr.Button(<span class="hljs-string">&quot;Flip&quot;</span>)
        <span class="hljs-keyword">with</span> gr.TabItem(<span class="hljs-string">&quot;Flip Image&quot;</span>):
            <span class="hljs-keyword">with</span> gr.Row():
                image_input = gr.Image()
                image_output = gr.Image()
            image_button = gr.Button(<span class="hljs-string">&quot;Flip&quot;</span>)

    text_button.click(flip_text, inputs=text_input, outputs=text_output)
    image_button.click(flip_image, inputs=image_input, outputs=image_output)

demo.launch()`}}),ve=new je({}),be=new Mt({props:{code:`import gradio as gr

api = gr.Interface.load("huggingface/EleutherAI/gpt-j-6B")


def complete_with_gpt(text):
    # Use the last 50 characters of the text as context
    return text[:-50] + api(text[-50:])


with gr.Blocks() as demo:
    textbox = gr.Textbox(placeholder="Type here and press enter...", lines=4)
    btn = gr.Button("Generate")

    btn.click(complete_with_gpt, textbox, textbox)

demo.launch()`,highlighted:`<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

api = gr.Interface.load(<span class="hljs-string">&quot;huggingface/EleutherAI/gpt-j-6B&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">complete_with_gpt</span>(<span class="hljs-params">text</span>):
    <span class="hljs-comment"># Use the last 50 characters of the text as context</span>
    <span class="hljs-keyword">return</span> text[:-<span class="hljs-number">50</span>] + api(text[-<span class="hljs-number">50</span>:])


<span class="hljs-keyword">with</span> gr.Blocks() <span class="hljs-keyword">as</span> demo:
    textbox = gr.Textbox(placeholder=<span class="hljs-string">&quot;Type here and press enter...&quot;</span>, lines=<span class="hljs-number">4</span>)
    btn = gr.Button(<span class="hljs-string">&quot;Generate&quot;</span>)

    btn.click(complete_with_gpt, textbox, textbox)

demo.launch()`}}),ye=new je({}),xe=new Mt({props:{code:`from transformers import pipeline

import gradio as gr

asr = pipeline("automatic-speech-recognition", "facebook/wav2vec2-base-960h")
classifier = pipeline("text-classification")


def speech_to_text(speech):
    text = asr(speech)["text"]
    return text


def text_to_sentiment(text):
    return classifier(text)[0]["label"]


demo = gr.Blocks()

with demo:
    audio_file = gr.Audio(type="filepath")
    text = gr.Textbox()
    label = gr.Label()

    b1 = gr.Button("Recognize Speech")
    b2 = gr.Button("Classify Sentiment")

    b1.click(speech_to_text, inputs=audio_file, outputs=text)
    b2.click(text_to_sentiment, inputs=text, outputs=label)

demo.launch()`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr

asr = pipeline(<span class="hljs-string">&quot;automatic-speech-recognition&quot;</span>, <span class="hljs-string">&quot;facebook/wav2vec2-base-960h&quot;</span>)
classifier = pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">speech_to_text</span>(<span class="hljs-params">speech</span>):
    text = asr(speech)[<span class="hljs-string">&quot;text&quot;</span>]
    <span class="hljs-keyword">return</span> text


<span class="hljs-keyword">def</span> <span class="hljs-title function_">text_to_sentiment</span>(<span class="hljs-params">text</span>):
    <span class="hljs-keyword">return</span> classifier(text)[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;label&quot;</span>]


demo = gr.Blocks()

<span class="hljs-keyword">with</span> demo:
    audio_file = gr.Audio(<span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;filepath&quot;</span>)
    text = gr.Textbox()
    label = gr.Label()

    b1 = gr.Button(<span class="hljs-string">&quot;Recognize Speech&quot;</span>)
    b2 = gr.Button(<span class="hljs-string">&quot;Classify Sentiment&quot;</span>)

    b1.click(speech_to_text, inputs=audio_file, outputs=text)
    b2.click(text_to_sentiment, inputs=text, outputs=label)

demo.launch()`}}),_e=new je({}),ke=new Mt({props:{code:`import gradio as gr


def change_textbox(choice):
    if choice == "short":
        return gr.Radio.update(lines=2, visible=True)
    elif choice == "long":
        return gr.Radio.update(lines=8, visible=True)
    else:
        return gr.Radio.update(visible=False)


with gr.Blocks() as block:
    radio = gr.Radio(
        ["short", "long", "none"], label="What kind of essay would you like to write?"
    )
    text = gr.Textbox(lines=2, interactive=True)

    radio.change(fn=change_textbox, inputs=radio, outputs=text)
    block.launch()`,highlighted:`<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr


<span class="hljs-keyword">def</span> <span class="hljs-title function_">change_textbox</span>(<span class="hljs-params">choice</span>):
    <span class="hljs-keyword">if</span> choice == <span class="hljs-string">&quot;short&quot;</span>:
        <span class="hljs-keyword">return</span> gr.Radio.update(lines=<span class="hljs-number">2</span>, visible=<span class="hljs-literal">True</span>)
    <span class="hljs-keyword">elif</span> choice == <span class="hljs-string">&quot;long&quot;</span>:
        <span class="hljs-keyword">return</span> gr.Radio.update(lines=<span class="hljs-number">8</span>, visible=<span class="hljs-literal">True</span>)
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">return</span> gr.Radio.update(visible=<span class="hljs-literal">False</span>)


<span class="hljs-keyword">with</span> gr.Blocks() <span class="hljs-keyword">as</span> block:
    radio = gr.Radio(
        [<span class="hljs-string">&quot;short&quot;</span>, <span class="hljs-string">&quot;long&quot;</span>, <span class="hljs-string">&quot;none&quot;</span>], label=<span class="hljs-string">&quot;What kind of essay would you like to write?&quot;</span>
    )
    text = gr.Textbox(lines=<span class="hljs-number">2</span>, interactive=<span class="hljs-literal">True</span>)

    radio.change(fn=change_textbox, inputs=radio, outputs=text)
    block.launch()`}}),{c(){S=a("meta"),Yt=u(),L=a("h1"),G=a("a"),He=a("span"),k(le.$$.fragment),zo=u(),Ge=a("span"),Wo=n("Introduction to Blocks"),Ht=u(),v=a("p"),Uo=n("So far, in the previous sections we have explored and created demos using "),ze=a("code"),Jo=n("gradio.Interface"),Ko=n(". In this section we will introduce our "),We=a("strong"),Qo=n("newly developed"),Vo=n(" low-level API called "),Ue=a("code"),Xo=n("gradio.Blocks"),Zo=n("."),Gt=u(),B=a("p"),ea=n("What\u2019s the difference between "),Je=a("code"),ta=n("Interface"),oa=n(" and "),Ke=a("code"),aa=n("Blocks"),sa=n("?"),zt=u(),z=a("ul"),Qe=a("li"),ne=a("p"),la=n("\u26A1 "),Ve=a("code"),na=n("gradio.Interface"),ia=n(": a high-level API that allows you to create a full machine learning demo simply by providing a list of inputs and outputs."),ra=u(),Xe=a("li"),ie=a("p"),pa=n("\u{1F9F1} "),Ze=a("code"),ca=n("gradio.Blocks"),ua=n(": a low-level API that allows you to have full control over the data flows and layout of your application. You can build very complex, multi-step applications using Blocks (as in \u201Cbuilding blocks\u201D)."),Wt=u(),$e=a("p"),ha=n("Note: It will be helpful to understand the Interface API and the basics of creating a Gradio demo before moving forward."),Ut=u(),F=a("h3"),W=a("a"),et=a("span"),k(re.$$.fragment),da=u(),tt=a("span"),fa=n("Why Blocks \u{1F9F1}?"),Jt=u(),Ie=a("p"),ma=n("As shown in previous sections, by using gradio.Interface, you can easily create full-fledged machine learning demos with just a few lines of code. The Interface API is extremely easy to use but lacks the flexibility the Blocks API provides. For example, you might want to:"),Kt=u(),b=a("ul"),ot=a("li"),wa=n("Group together related demos as multiple tabs in one web app"),ga=u(),at=a("li"),va=n("Change the layout of your demo instead of having all of the inputs on the left and outputs on the right"),ba=u(),st=a("li"),ya=n("Have multi-step interfaces, in which the output of one model becomes the input to the next model, or have more flexible data flows in general"),xa=u(),lt=a("li"),_a=n("Change a component\u2019s properties (for example, the choices in a Dropdown) or its visibilty based on user input"),Qt=u(),D=a("h3"),U=a("a"),nt=a("span"),k(pe.$$.fragment),ka=u(),it=a("span"),Ea=n("Let's start by creating a simple example using Blocks:"),Vt=u(),Te=a("p"),ja=n("After you have installed Gradio, run the code below as a Python script, in a Python notebook, or in a colab notebook."),Xt=u(),k(ce.$$.fragment),Zt=u(),d=a("iframe"),eo=u(),Be=a("p"),$a=n("This simple example above introduces 4 concepts that underlie Blocks:"),to=u(),y=a("ol"),rt=a("li"),ue=a("p"),Ia=n("Blocks allow you to build web applications that combine markdown, HTML, buttons, and interactive components simply by instantiating objects in Python inside of a "),pt=a("code"),Ta=n("with gradio.Blocks"),Ba=n(" context. The order in which you instantiate components matters as each element gets rendered into the web app in the order it was created. (More complex layouts are discussed below)"),Pa=u(),ct=a("li"),ut=a("p"),qa=n("You can define regular Python functions anywhere in your code and run them with user input using Blocks. In our example, we have a simple function that \u201Cflips\u201D the input text, but you can write any Python function, from a simple calculation to large machine learning model\u2019s inference."),Aa=u(),R=a("li"),ht=a("p"),Ca=n("You can assign events to any Blocks component. This will run your function when the component is clicked/changed/etc. When you assign an event, you pass in three parameters: fn: the function that should be called, inputs: the (list) of input component(s), and outputs: the (list) of output components that should be called."),Sa=u(),N=a("p"),La=n("In the example above, we run the "),dt=a("code"),Fa=n("flip_text()"),Da=n(" function when the value in the Textbox named inp changes. The event reads the value in inp, passes it as the name parameter to "),ft=a("code"),Ra=n("flip_text()"),Na=n(", which then returns a value that gets assigned to our second Textbox named out."),Oa=u(),he=a("p"),Ma=n("To see a list of events that each component supports, see the "),de=a("a"),Ya=n("documentation"),Ha=n("."),Ga=u(),mt=a("li"),fe=a("p"),za=n("Blocks automatically figures out whether a component should be interactive (accept user input) or not, based on the event triggers you define. In our example, the first textbox is interactive, since its value is used by the "),wt=a("code"),Wa=n("flip_text()"),Ua=n(" function. The second textbox is not interactive, since its value is never used as an input. In some cases, you might want to override this, which you can do by passing the appropriate boolean to interactive, a parameter that every component accepts."),oo=u(),O=a("h3"),J=a("a"),gt=a("span"),k(me.$$.fragment),Ja=u(),vt=a("span"),Ka=n("Let's explore layouts:"),ao=u(),P=a("p"),Qa=n("How can we use Blocks to customize the layout of our demo? By default, Blocks renders the components that you create vertically in one column. You can change that by creating additional columns "),bt=a("code"),Va=n("with gradio.Column():"),Xa=n(" or rows "),yt=a("code"),Za=n("with gradio.Row():"),es=n(" and creating components within those contexts."),so=u(),K=a("p"),ts=n("Here\u2019s what you should keep in mind: any components created under a Column (this is also the default) will be laid out vertically. Any component created under a Row will be laid out horizontally, similar to the "),we=a("a"),os=n("flexbox model in web development"),as=n("."),lo=u(),x=a("p"),ss=n("Finally, you can also create a "),xt=a("code"),ls=n("with gradio.Tabs():"),ns=n(" and within it create multiple "),_t=a("code"),is=n("with gradio.TabItem(name_of_tab):"),rs=n(" children. Any component created inside of a "),kt=a("code"),ps=n("with gradio.TabItem(name_of_tab):"),cs=n(" context appears in that tab."),no=u(),Q=a("p"),us=n("Now let\u2019s add to our original "),Et=a("code"),hs=n("flip_text"),ds=n(" demo and add a new tab that flips images. Below is an example with 2 tabs and also uses a Row:"),io=u(),k(ge.$$.fragment),ro=u(),f=a("iframe"),po=u(),Pe=a("p"),fs=n("You\u2019ll notice that in this example, we\u2019ve also created a Button component in each tab, and we\u2019ve assigned a click event to each button, which is what actually runs the function."),co=u(),M=a("h3"),V=a("a"),jt=a("span"),k(ve.$$.fragment),ms=u(),$t=a("span"),ws=n("Let's explore events:"),uo=u(),qe=a("p"),gs=n("Just as you can control the layout, Blocks gives you fine-grained control over what events trigger function calls. Each component and many layouts have specific events that they support."),ho=u(),q=a("p"),vs=n("For example, the Textbox component has 2 events: "),It=a("code"),bs=n("change()"),ys=n(" (when the value inside of the textbox changes), and "),Tt=a("code"),xs=n("submit()"),_s=n(" (when a user presses the enter key while focused on the textbox). More complex components can have even more events: for example, the Audio component also has separate events for when the audio file is played, cleared, paused, etc. See the documentation for the events each component supports."),fo=u(),A=a("p"),ks=n("You can attach event trigger to none, one, or more of these events. You create an event trigger by calling the name of the event on the component instance as a function \u2014 e.g. "),Bt=a("code"),Es=n("textbox.change(...)"),js=n(" or "),Pt=a("code"),$s=n("btn.click(...)"),Is=n(". The function takes in three parameters, as discussed above:"),mo=u(),C=a("ul"),qt=a("li"),Ts=n("fn: the function to run"),Bs=u(),At=a("li"),Ps=n("inputs: a (list of) component(s) whose values should supplied as the input parameters to the function. Each component\u2019s value gets mapped to the corresponding function parameter, in order. This parameter can be None if the function does not take any parameters."),qs=u(),Ct=a("li"),As=n("outputs: a (list of) component(s) whose values should be updated based on the values returned by the function. Each return value gets sets the corresponding component\u2019s value, in order. This parameter can be None if the function does not return anything."),wo=u(),Ae=a("p"),Cs=n("You can even make the input and output component be the same component, as we do in this example that uses a GPT model to do text completion:"),go=u(),k(be.$$.fragment),vo=u(),m=a("iframe"),bo=u(),Y=a("h3"),X=a("a"),St=a("span"),k(ye.$$.fragment),Ss=u(),Lt=a("span"),Ls=n("Multistep Demos:"),yo=u(),Ce=a("p"),Fs=n("In some cases, you might want want a \u201Cmulti-step\u201D demo, in which you reuse the output of one function as the input to the next. This is really easy to do with Blocks, as you can use a component for the input of one event trigger but the output of another. Take a look at the text component in the example below, its value is the result of a speech-to-text model, but also gets passed into a sentiment analysis model:"),xo=u(),k(xe.$$.fragment),_o=u(),w=a("iframe"),ko=u(),H=a("h3"),Z=a("a"),Ft=a("span"),k(_e.$$.fragment),Ds=u(),Dt=a("span"),Rs=n("Updating Component Properties:"),Eo=u(),Se=a("p"),Ns=n("So far, we have seen how to create events to update the value of another component. But if you want to change other properties of a component (like the visibility of a textbox or the choices in a radio button group)? You can do this by returning a component class\u2019s update() method instead of a regular return value from your function."),jo=u(),Le=a("p"),Os=n("This is perhaps most easily illustrated with an example:"),$o=u(),k(ke.$$.fragment),Io=u(),g=a("iframe"),To=u(),_=a("p"),Ms=n("We just explored all the core concepts of Blocks! Just like with Interfaces, you can create cool demos that can be shared by using "),Rt=a("code"),Ys=n("share=True"),Hs=n(" in the "),Nt=a("code"),Gs=n("launch()"),zs=n(" method or deployed on "),Ee=a("a"),Ws=n("Hugging Face Spaces"),Us=n("."),this.h()},l(e){const r=xn('[data-svelte="svelte-1phssyn"]',document.head);S=s(r,"META",{name:!0,content:!0}),r.forEach(t),Yt=h(e),L=s(e,"H1",{class:!0});var Po=l(L);G=s(Po,"A",{id:!0,class:!0,href:!0});var el=l(G);He=s(el,"SPAN",{});var tl=l(He);E(le.$$.fragment,tl),tl.forEach(t),el.forEach(t),zo=h(Po),Ge=s(Po,"SPAN",{});var ol=l(Ge);Wo=i(ol,"Introduction to Blocks"),ol.forEach(t),Po.forEach(t),Ht=h(e),v=s(e,"P",{});var ee=l(v);Uo=i(ee,"So far, in the previous sections we have explored and created demos using "),ze=s(ee,"CODE",{});var al=l(ze);Jo=i(al,"gradio.Interface"),al.forEach(t),Ko=i(ee,". In this section we will introduce our "),We=s(ee,"STRONG",{});var sl=l(We);Qo=i(sl,"newly developed"),sl.forEach(t),Vo=i(ee," low-level API called "),Ue=s(ee,"CODE",{});var ll=l(Ue);Xo=i(ll,"gradio.Blocks"),ll.forEach(t),Zo=i(ee,"."),ee.forEach(t),Gt=h(e),B=s(e,"P",{});var Fe=l(B);ea=i(Fe,"What\u2019s the difference between "),Je=s(Fe,"CODE",{});var nl=l(Je);ta=i(nl,"Interface"),nl.forEach(t),oa=i(Fe," and "),Ke=s(Fe,"CODE",{});var il=l(Ke);aa=i(il,"Blocks"),il.forEach(t),sa=i(Fe,"?"),Fe.forEach(t),zt=h(e),z=s(e,"UL",{});var qo=l(z);Qe=s(qo,"LI",{});var rl=l(Qe);ne=s(rl,"P",{});var Ao=l(ne);la=i(Ao,"\u26A1 "),Ve=s(Ao,"CODE",{});var pl=l(Ve);na=i(pl,"gradio.Interface"),pl.forEach(t),ia=i(Ao,": a high-level API that allows you to create a full machine learning demo simply by providing a list of inputs and outputs."),Ao.forEach(t),rl.forEach(t),ra=h(qo),Xe=s(qo,"LI",{});var cl=l(Xe);ie=s(cl,"P",{});var Co=l(ie);pa=i(Co,"\u{1F9F1} "),Ze=s(Co,"CODE",{});var ul=l(Ze);ca=i(ul,"gradio.Blocks"),ul.forEach(t),ua=i(Co,": a low-level API that allows you to have full control over the data flows and layout of your application. You can build very complex, multi-step applications using Blocks (as in \u201Cbuilding blocks\u201D)."),Co.forEach(t),cl.forEach(t),qo.forEach(t),Wt=h(e),$e=s(e,"P",{});var hl=l($e);ha=i(hl,"Note: It will be helpful to understand the Interface API and the basics of creating a Gradio demo before moving forward."),hl.forEach(t),Ut=h(e),F=s(e,"H3",{class:!0});var So=l(F);W=s(So,"A",{id:!0,class:!0,href:!0});var dl=l(W);et=s(dl,"SPAN",{});var fl=l(et);E(re.$$.fragment,fl),fl.forEach(t),dl.forEach(t),da=h(So),tt=s(So,"SPAN",{});var ml=l(tt);fa=i(ml,"Why Blocks \u{1F9F1}?"),ml.forEach(t),So.forEach(t),Jt=h(e),Ie=s(e,"P",{});var wl=l(Ie);ma=i(wl,"As shown in previous sections, by using gradio.Interface, you can easily create full-fledged machine learning demos with just a few lines of code. The Interface API is extremely easy to use but lacks the flexibility the Blocks API provides. For example, you might want to:"),wl.forEach(t),Kt=h(e),b=s(e,"UL",{});var te=l(b);ot=s(te,"LI",{});var gl=l(ot);wa=i(gl,"Group together related demos as multiple tabs in one web app"),gl.forEach(t),ga=h(te),at=s(te,"LI",{});var vl=l(at);va=i(vl,"Change the layout of your demo instead of having all of the inputs on the left and outputs on the right"),vl.forEach(t),ba=h(te),st=s(te,"LI",{});var bl=l(st);ya=i(bl,"Have multi-step interfaces, in which the output of one model becomes the input to the next model, or have more flexible data flows in general"),bl.forEach(t),xa=h(te),lt=s(te,"LI",{});var yl=l(lt);_a=i(yl,"Change a component\u2019s properties (for example, the choices in a Dropdown) or its visibilty based on user input"),yl.forEach(t),te.forEach(t),Qt=h(e),D=s(e,"H3",{class:!0});var Lo=l(D);U=s(Lo,"A",{id:!0,class:!0,href:!0});var xl=l(U);nt=s(xl,"SPAN",{});var _l=l(nt);E(pe.$$.fragment,_l),_l.forEach(t),xl.forEach(t),ka=h(Lo),it=s(Lo,"SPAN",{});var kl=l(it);Ea=i(kl,"Let's start by creating a simple example using Blocks:"),kl.forEach(t),Lo.forEach(t),Vt=h(e),Te=s(e,"P",{});var El=l(Te);ja=i(El,"After you have installed Gradio, run the code below as a Python script, in a Python notebook, or in a colab notebook."),El.forEach(t),Xt=h(e),E(ce.$$.fragment,e),Zt=h(e),d=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(d).forEach(t),eo=h(e),Be=s(e,"P",{});var jl=l(Be);$a=i(jl,"This simple example above introduces 4 concepts that underlie Blocks:"),jl.forEach(t),to=h(e),y=s(e,"OL",{});var oe=l(y);rt=s(oe,"LI",{});var $l=l(rt);ue=s($l,"P",{});var Fo=l(ue);Ia=i(Fo,"Blocks allow you to build web applications that combine markdown, HTML, buttons, and interactive components simply by instantiating objects in Python inside of a "),pt=s(Fo,"CODE",{});var Il=l(pt);Ta=i(Il,"with gradio.Blocks"),Il.forEach(t),Ba=i(Fo," context. The order in which you instantiate components matters as each element gets rendered into the web app in the order it was created. (More complex layouts are discussed below)"),Fo.forEach(t),$l.forEach(t),Pa=h(oe),ct=s(oe,"LI",{});var Tl=l(ct);ut=s(Tl,"P",{});var Bl=l(ut);qa=i(Bl,"You can define regular Python functions anywhere in your code and run them with user input using Blocks. In our example, we have a simple function that \u201Cflips\u201D the input text, but you can write any Python function, from a simple calculation to large machine learning model\u2019s inference."),Bl.forEach(t),Tl.forEach(t),Aa=h(oe),R=s(oe,"LI",{});var De=l(R);ht=s(De,"P",{});var Pl=l(ht);Ca=i(Pl,"You can assign events to any Blocks component. This will run your function when the component is clicked/changed/etc. When you assign an event, you pass in three parameters: fn: the function that should be called, inputs: the (list) of input component(s), and outputs: the (list) of output components that should be called."),Pl.forEach(t),Sa=h(De),N=s(De,"P",{});var Re=l(N);La=i(Re,"In the example above, we run the "),dt=s(Re,"CODE",{});var ql=l(dt);Fa=i(ql,"flip_text()"),ql.forEach(t),Da=i(Re," function when the value in the Textbox named inp changes. The event reads the value in inp, passes it as the name parameter to "),ft=s(Re,"CODE",{});var Al=l(ft);Ra=i(Al,"flip_text()"),Al.forEach(t),Na=i(Re,", which then returns a value that gets assigned to our second Textbox named out."),Re.forEach(t),Oa=h(De),he=s(De,"P",{});var Do=l(he);Ma=i(Do,"To see a list of events that each component supports, see the "),de=s(Do,"A",{href:!0,rel:!0});var Cl=l(de);Ya=i(Cl,"documentation"),Cl.forEach(t),Ha=i(Do,"."),Do.forEach(t),De.forEach(t),Ga=h(oe),mt=s(oe,"LI",{});var Sl=l(mt);fe=s(Sl,"P",{});var Ro=l(fe);za=i(Ro,"Blocks automatically figures out whether a component should be interactive (accept user input) or not, based on the event triggers you define. In our example, the first textbox is interactive, since its value is used by the "),wt=s(Ro,"CODE",{});var Ll=l(wt);Wa=i(Ll,"flip_text()"),Ll.forEach(t),Ua=i(Ro," function. The second textbox is not interactive, since its value is never used as an input. In some cases, you might want to override this, which you can do by passing the appropriate boolean to interactive, a parameter that every component accepts."),Ro.forEach(t),Sl.forEach(t),oe.forEach(t),oo=h(e),O=s(e,"H3",{class:!0});var No=l(O);J=s(No,"A",{id:!0,class:!0,href:!0});var Fl=l(J);gt=s(Fl,"SPAN",{});var Dl=l(gt);E(me.$$.fragment,Dl),Dl.forEach(t),Fl.forEach(t),Ja=h(No),vt=s(No,"SPAN",{});var Rl=l(vt);Ka=i(Rl,"Let's explore layouts:"),Rl.forEach(t),No.forEach(t),ao=h(e),P=s(e,"P",{});var Ne=l(P);Qa=i(Ne,"How can we use Blocks to customize the layout of our demo? By default, Blocks renders the components that you create vertically in one column. You can change that by creating additional columns "),bt=s(Ne,"CODE",{});var Nl=l(bt);Va=i(Nl,"with gradio.Column():"),Nl.forEach(t),Xa=i(Ne," or rows "),yt=s(Ne,"CODE",{});var Ol=l(yt);Za=i(Ol,"with gradio.Row():"),Ol.forEach(t),es=i(Ne," and creating components within those contexts."),Ne.forEach(t),so=h(e),K=s(e,"P",{});var Oo=l(K);ts=i(Oo,"Here\u2019s what you should keep in mind: any components created under a Column (this is also the default) will be laid out vertically. Any component created under a Row will be laid out horizontally, similar to the "),we=s(Oo,"A",{href:!0,rel:!0});var Ml=l(we);os=i(Ml,"flexbox model in web development"),Ml.forEach(t),as=i(Oo,"."),Oo.forEach(t),lo=h(e),x=s(e,"P",{});var ae=l(x);ss=i(ae,"Finally, you can also create a "),xt=s(ae,"CODE",{});var Yl=l(xt);ls=i(Yl,"with gradio.Tabs():"),Yl.forEach(t),ns=i(ae," and within it create multiple "),_t=s(ae,"CODE",{});var Hl=l(_t);is=i(Hl,"with gradio.TabItem(name_of_tab):"),Hl.forEach(t),rs=i(ae," children. Any component created inside of a "),kt=s(ae,"CODE",{});var Gl=l(kt);ps=i(Gl,"with gradio.TabItem(name_of_tab):"),Gl.forEach(t),cs=i(ae," context appears in that tab."),ae.forEach(t),no=h(e),Q=s(e,"P",{});var Mo=l(Q);us=i(Mo,"Now let\u2019s add to our original "),Et=s(Mo,"CODE",{});var zl=l(Et);hs=i(zl,"flip_text"),zl.forEach(t),ds=i(Mo," demo and add a new tab that flips images. Below is an example with 2 tabs and also uses a Row:"),Mo.forEach(t),io=h(e),E(ge.$$.fragment,e),ro=h(e),f=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(f).forEach(t),po=h(e),Pe=s(e,"P",{});var Wl=l(Pe);fs=i(Wl,"You\u2019ll notice that in this example, we\u2019ve also created a Button component in each tab, and we\u2019ve assigned a click event to each button, which is what actually runs the function."),Wl.forEach(t),co=h(e),M=s(e,"H3",{class:!0});var Yo=l(M);V=s(Yo,"A",{id:!0,class:!0,href:!0});var Ul=l(V);jt=s(Ul,"SPAN",{});var Jl=l(jt);E(ve.$$.fragment,Jl),Jl.forEach(t),Ul.forEach(t),ms=h(Yo),$t=s(Yo,"SPAN",{});var Kl=l($t);ws=i(Kl,"Let's explore events:"),Kl.forEach(t),Yo.forEach(t),uo=h(e),qe=s(e,"P",{});var Ql=l(qe);gs=i(Ql,"Just as you can control the layout, Blocks gives you fine-grained control over what events trigger function calls. Each component and many layouts have specific events that they support."),Ql.forEach(t),ho=h(e),q=s(e,"P",{});var Oe=l(q);vs=i(Oe,"For example, the Textbox component has 2 events: "),It=s(Oe,"CODE",{});var Vl=l(It);bs=i(Vl,"change()"),Vl.forEach(t),ys=i(Oe," (when the value inside of the textbox changes), and "),Tt=s(Oe,"CODE",{});var Xl=l(Tt);xs=i(Xl,"submit()"),Xl.forEach(t),_s=i(Oe," (when a user presses the enter key while focused on the textbox). More complex components can have even more events: for example, the Audio component also has separate events for when the audio file is played, cleared, paused, etc. See the documentation for the events each component supports."),Oe.forEach(t),fo=h(e),A=s(e,"P",{});var Me=l(A);ks=i(Me,"You can attach event trigger to none, one, or more of these events. You create an event trigger by calling the name of the event on the component instance as a function \u2014 e.g. "),Bt=s(Me,"CODE",{});var Zl=l(Bt);Es=i(Zl,"textbox.change(...)"),Zl.forEach(t),js=i(Me," or "),Pt=s(Me,"CODE",{});var en=l(Pt);$s=i(en,"btn.click(...)"),en.forEach(t),Is=i(Me,". The function takes in three parameters, as discussed above:"),Me.forEach(t),mo=h(e),C=s(e,"UL",{});var Ye=l(C);qt=s(Ye,"LI",{});var tn=l(qt);Ts=i(tn,"fn: the function to run"),tn.forEach(t),Bs=h(Ye),At=s(Ye,"LI",{});var on=l(At);Ps=i(on,"inputs: a (list of) component(s) whose values should supplied as the input parameters to the function. Each component\u2019s value gets mapped to the corresponding function parameter, in order. This parameter can be None if the function does not take any parameters."),on.forEach(t),qs=h(Ye),Ct=s(Ye,"LI",{});var an=l(Ct);As=i(an,"outputs: a (list of) component(s) whose values should be updated based on the values returned by the function. Each return value gets sets the corresponding component\u2019s value, in order. This parameter can be None if the function does not return anything."),an.forEach(t),Ye.forEach(t),wo=h(e),Ae=s(e,"P",{});var sn=l(Ae);Cs=i(sn,"You can even make the input and output component be the same component, as we do in this example that uses a GPT model to do text completion:"),sn.forEach(t),go=h(e),E(be.$$.fragment,e),vo=h(e),m=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(m).forEach(t),bo=h(e),Y=s(e,"H3",{class:!0});var Ho=l(Y);X=s(Ho,"A",{id:!0,class:!0,href:!0});var ln=l(X);St=s(ln,"SPAN",{});var nn=l(St);E(ye.$$.fragment,nn),nn.forEach(t),ln.forEach(t),Ss=h(Ho),Lt=s(Ho,"SPAN",{});var rn=l(Lt);Ls=i(rn,"Multistep Demos:"),rn.forEach(t),Ho.forEach(t),yo=h(e),Ce=s(e,"P",{});var pn=l(Ce);Fs=i(pn,"In some cases, you might want want a \u201Cmulti-step\u201D demo, in which you reuse the output of one function as the input to the next. This is really easy to do with Blocks, as you can use a component for the input of one event trigger but the output of another. Take a look at the text component in the example below, its value is the result of a speech-to-text model, but also gets passed into a sentiment analysis model:"),pn.forEach(t),xo=h(e),E(xe.$$.fragment,e),_o=h(e),w=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(w).forEach(t),ko=h(e),H=s(e,"H3",{class:!0});var Go=l(H);Z=s(Go,"A",{id:!0,class:!0,href:!0});var cn=l(Z);Ft=s(cn,"SPAN",{});var un=l(Ft);E(_e.$$.fragment,un),un.forEach(t),cn.forEach(t),Ds=h(Go),Dt=s(Go,"SPAN",{});var hn=l(Dt);Rs=i(hn,"Updating Component Properties:"),hn.forEach(t),Go.forEach(t),Eo=h(e),Se=s(e,"P",{});var dn=l(Se);Ns=i(dn,"So far, we have seen how to create events to update the value of another component. But if you want to change other properties of a component (like the visibility of a textbox or the choices in a radio button group)? You can do this by returning a component class\u2019s update() method instead of a regular return value from your function."),dn.forEach(t),jo=h(e),Le=s(e,"P",{});var fn=l(Le);Os=i(fn,"This is perhaps most easily illustrated with an example:"),fn.forEach(t),$o=h(e),E(ke.$$.fragment,e),Io=h(e),g=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(g).forEach(t),To=h(e),_=s(e,"P",{});var se=l(_);Ms=i(se,"We just explored all the core concepts of Blocks! Just like with Interfaces, you can create cool demos that can be shared by using "),Rt=s(se,"CODE",{});var mn=l(Rt);Ys=i(mn,"share=True"),mn.forEach(t),Hs=i(se," in the "),Nt=s(se,"CODE",{});var wn=l(Nt);Gs=i(wn,"launch()"),wn.forEach(t),zs=i(se," method or deployed on "),Ee=s(se,"A",{href:!0,rel:!0});var gn=l(Ee);Ws=i(gn,"Hugging Face Spaces"),gn.forEach(t),Us=i(se,"."),se.forEach(t),this.h()},h(){c(S,"name","hf:doc:metadata"),c(S,"content",JSON.stringify(jn)),c(G,"id","introduction-to-blocks"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#introduction-to-blocks"),c(L,"class","relative group"),c(W,"id","why-blocks"),c(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(W,"href","#why-blocks"),c(F,"class","relative group"),c(U,"id","lets-start-by-creating-a-simple-example-using-blocks"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#lets-start-by-creating-a-simple-example-using-blocks"),c(D,"class","relative group"),Ot(d.src,Ks="https://hf.space/gradioiframe/course-demos/flip_text/+")||c(d,"src",Ks),c(d,"frameborder","0"),c(d,"height","400"),c(d,"title","Gradio app"),c(d,"class","container p-0 flex-grow space-iframe"),c(d,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(d,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(de,"href","https://www.gradio.app/docs/"),c(de,"rel","nofollow"),c(J,"id","lets-explore-layouts"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#lets-explore-layouts"),c(O,"class","relative group"),c(we,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"),c(we,"rel","nofollow"),Ot(f.src,Qs="https://hf.space/gradioiframe/course-demos/flip_text_image/+")||c(f,"src",Qs),c(f,"frameborder","0"),c(f,"height","450"),c(f,"title","Gradio app"),c(f,"class","container p-0 flex-grow space-iframe"),c(f,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(f,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(V,"id","lets-explore-events"),c(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(V,"href","#lets-explore-events"),c(M,"class","relative group"),Ot(m.src,Vs="https://hf.space/gradioiframe/course-demos/blocks_gpt/+")||c(m,"src",Vs),c(m,"frameborder","0"),c(m,"height","300"),c(m,"title","Gradio app"),c(m,"class","container p-0 flex-grow space-iframe"),c(m,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(m,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(X,"id","multistep-demos"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#multistep-demos"),c(Y,"class","relative group"),Ot(w.src,Xs="https://hf.space/gradioiframe/course-demos/blocks_multi_step/+")||c(w,"src",Xs),c(w,"frameborder","0"),c(w,"height","550"),c(w,"title","Gradio app"),c(w,"class","container p-0 flex-grow space-iframe"),c(w,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(w,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(Z,"id","updating-component-properties"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#updating-component-properties"),c(H,"class","relative group"),Ot(g.src,Zs="https://hf.space/gradioiframe/course-demos/blocks_update_component_properties/+")||c(g,"src",Zs),c(g,"frameborder","0"),c(g,"height","300"),c(g,"title","Gradio app"),c(g,"class","container p-0 flex-grow space-iframe"),c(g,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(g,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(Ee,"href","https://huggingface.co/spaces"),c(Ee,"rel","nofollow")},m(e,r){o(document.head,S),p(e,Yt,r),p(e,L,r),o(L,G),o(G,He),j(le,He,null),o(L,zo),o(L,Ge),o(Ge,Wo),p(e,Ht,r),p(e,v,r),o(v,Uo),o(v,ze),o(ze,Jo),o(v,Ko),o(v,We),o(We,Qo),o(v,Vo),o(v,Ue),o(Ue,Xo),o(v,Zo),p(e,Gt,r),p(e,B,r),o(B,ea),o(B,Je),o(Je,ta),o(B,oa),o(B,Ke),o(Ke,aa),o(B,sa),p(e,zt,r),p(e,z,r),o(z,Qe),o(Qe,ne),o(ne,la),o(ne,Ve),o(Ve,na),o(ne,ia),o(z,ra),o(z,Xe),o(Xe,ie),o(ie,pa),o(ie,Ze),o(Ze,ca),o(ie,ua),p(e,Wt,r),p(e,$e,r),o($e,ha),p(e,Ut,r),p(e,F,r),o(F,W),o(W,et),j(re,et,null),o(F,da),o(F,tt),o(tt,fa),p(e,Jt,r),p(e,Ie,r),o(Ie,ma),p(e,Kt,r),p(e,b,r),o(b,ot),o(ot,wa),o(b,ga),o(b,at),o(at,va),o(b,ba),o(b,st),o(st,ya),o(b,xa),o(b,lt),o(lt,_a),p(e,Qt,r),p(e,D,r),o(D,U),o(U,nt),j(pe,nt,null),o(D,ka),o(D,it),o(it,Ea),p(e,Vt,r),p(e,Te,r),o(Te,ja),p(e,Xt,r),j(ce,e,r),p(e,Zt,r),p(e,d,r),p(e,eo,r),p(e,Be,r),o(Be,$a),p(e,to,r),p(e,y,r),o(y,rt),o(rt,ue),o(ue,Ia),o(ue,pt),o(pt,Ta),o(ue,Ba),o(y,Pa),o(y,ct),o(ct,ut),o(ut,qa),o(y,Aa),o(y,R),o(R,ht),o(ht,Ca),o(R,Sa),o(R,N),o(N,La),o(N,dt),o(dt,Fa),o(N,Da),o(N,ft),o(ft,Ra),o(N,Na),o(R,Oa),o(R,he),o(he,Ma),o(he,de),o(de,Ya),o(he,Ha),o(y,Ga),o(y,mt),o(mt,fe),o(fe,za),o(fe,wt),o(wt,Wa),o(fe,Ua),p(e,oo,r),p(e,O,r),o(O,J),o(J,gt),j(me,gt,null),o(O,Ja),o(O,vt),o(vt,Ka),p(e,ao,r),p(e,P,r),o(P,Qa),o(P,bt),o(bt,Va),o(P,Xa),o(P,yt),o(yt,Za),o(P,es),p(e,so,r),p(e,K,r),o(K,ts),o(K,we),o(we,os),o(K,as),p(e,lo,r),p(e,x,r),o(x,ss),o(x,xt),o(xt,ls),o(x,ns),o(x,_t),o(_t,is),o(x,rs),o(x,kt),o(kt,ps),o(x,cs),p(e,no,r),p(e,Q,r),o(Q,us),o(Q,Et),o(Et,hs),o(Q,ds),p(e,io,r),j(ge,e,r),p(e,ro,r),p(e,f,r),p(e,po,r),p(e,Pe,r),o(Pe,fs),p(e,co,r),p(e,M,r),o(M,V),o(V,jt),j(ve,jt,null),o(M,ms),o(M,$t),o($t,ws),p(e,uo,r),p(e,qe,r),o(qe,gs),p(e,ho,r),p(e,q,r),o(q,vs),o(q,It),o(It,bs),o(q,ys),o(q,Tt),o(Tt,xs),o(q,_s),p(e,fo,r),p(e,A,r),o(A,ks),o(A,Bt),o(Bt,Es),o(A,js),o(A,Pt),o(Pt,$s),o(A,Is),p(e,mo,r),p(e,C,r),o(C,qt),o(qt,Ts),o(C,Bs),o(C,At),o(At,Ps),o(C,qs),o(C,Ct),o(Ct,As),p(e,wo,r),p(e,Ae,r),o(Ae,Cs),p(e,go,r),j(be,e,r),p(e,vo,r),p(e,m,r),p(e,bo,r),p(e,Y,r),o(Y,X),o(X,St),j(ye,St,null),o(Y,Ss),o(Y,Lt),o(Lt,Ls),p(e,yo,r),p(e,Ce,r),o(Ce,Fs),p(e,xo,r),j(xe,e,r),p(e,_o,r),p(e,w,r),p(e,ko,r),p(e,H,r),o(H,Z),o(Z,Ft),j(_e,Ft,null),o(H,Ds),o(H,Dt),o(Dt,Rs),p(e,Eo,r),p(e,Se,r),o(Se,Ns),p(e,jo,r),p(e,Le,r),o(Le,Os),p(e,$o,r),j(ke,e,r),p(e,Io,r),p(e,g,r),p(e,To,r),p(e,_,r),o(_,Ms),o(_,Rt),o(Rt,Ys),o(_,Hs),o(_,Nt),o(Nt,Gs),o(_,zs),o(_,Ee),o(Ee,Ws),o(_,Us),Bo=!0},p:_n,i(e){Bo||($(le.$$.fragment,e),$(re.$$.fragment,e),$(pe.$$.fragment,e),$(ce.$$.fragment,e),$(me.$$.fragment,e),$(ge.$$.fragment,e),$(ve.$$.fragment,e),$(be.$$.fragment,e),$(ye.$$.fragment,e),$(xe.$$.fragment,e),$(_e.$$.fragment,e),$(ke.$$.fragment,e),Bo=!0)},o(e){I(le.$$.fragment,e),I(re.$$.fragment,e),I(pe.$$.fragment,e),I(ce.$$.fragment,e),I(me.$$.fragment,e),I(ge.$$.fragment,e),I(ve.$$.fragment,e),I(be.$$.fragment,e),I(ye.$$.fragment,e),I(xe.$$.fragment,e),I(_e.$$.fragment,e),I(ke.$$.fragment,e),Bo=!1},d(e){t(S),e&&t(Yt),e&&t(L),T(le),e&&t(Ht),e&&t(v),e&&t(Gt),e&&t(B),e&&t(zt),e&&t(z),e&&t(Wt),e&&t($e),e&&t(Ut),e&&t(F),T(re),e&&t(Jt),e&&t(Ie),e&&t(Kt),e&&t(b),e&&t(Qt),e&&t(D),T(pe),e&&t(Vt),e&&t(Te),e&&t(Xt),T(ce,e),e&&t(Zt),e&&t(d),e&&t(eo),e&&t(Be),e&&t(to),e&&t(y),e&&t(oo),e&&t(O),T(me),e&&t(ao),e&&t(P),e&&t(so),e&&t(K),e&&t(lo),e&&t(x),e&&t(no),e&&t(Q),e&&t(io),T(ge,e),e&&t(ro),e&&t(f),e&&t(po),e&&t(Pe),e&&t(co),e&&t(M),T(ve),e&&t(uo),e&&t(qe),e&&t(ho),e&&t(q),e&&t(fo),e&&t(A),e&&t(mo),e&&t(C),e&&t(wo),e&&t(Ae),e&&t(go),T(be,e),e&&t(vo),e&&t(m),e&&t(bo),e&&t(Y),T(ye),e&&t(yo),e&&t(Ce),e&&t(xo),T(xe,e),e&&t(_o),e&&t(w),e&&t(ko),e&&t(H),T(_e),e&&t(Eo),e&&t(Se),e&&t(jo),e&&t(Le),e&&t($o),T(ke,e),e&&t(Io),e&&t(g),e&&t(To),e&&t(_)}}}const jn={local:"introduction-to-blocks",sections:[{local:"why-blocks",title:"Why Blocks \u{1F9F1}?"},{local:"lets-start-by-creating-a-simple-example-using-blocks",title:"Let's start by creating a simple example using Blocks:"},{local:"lets-explore-layouts",title:"Let's explore layouts:"},{local:"lets-explore-events",title:"Let's explore events:"},{local:"multistep-demos",title:"Multistep Demos:"},{local:"updating-component-properties",title:"Updating Component Properties:"}],title:"Introduction to Blocks"};function $n(Js){return kn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pn extends vn{constructor(S){super();bn(this,S,$n,En,yn,{})}}export{Pn as default,jn as metadata};
