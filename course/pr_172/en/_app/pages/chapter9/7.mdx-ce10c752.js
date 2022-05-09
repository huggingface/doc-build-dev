import{S as mn,i as fn,s as wn,e as a,k as u,w as k,t as n,M as gn,c as s,d as o,m as h,a as l,x as E,h as i,b as c,N as Nt,F as t,g as p,y as j,L as vn,q as $,o as T,B,v as bn}from"../../chunks/vendor-1e8b365d.js";import{I as je}from"../../chunks/IconCopyLink-483c28ba.js";import{C as Mt}from"../../chunks/CodeBlock-e5764662.js";function yn(zs){let S,Rt,L,H,Ye,le,Go,Ge,Ho,Yt,v,zo,He,Wo,Uo,ze,Jo,Ko,We,Qo,Vo,Gt,I,Xo,Ue,Zo,ea,Je,ta,oa,Ht,z,Ke,ne,aa,Qe,sa,la,na,Ve,ie,ia,Xe,ra,pa,zt,F,W,Ze,re,ca,et,ua,Wt,$e,ha,Ut,b,tt,da,ma,ot,fa,wa,at,ga,va,st,ba,Jt,D,U,lt,pe,ya,nt,xa,Kt,Te,_a,Qt,ce,Vt,d,Ws,Xt,Be,ka,Zt,y,it,ue,Ea,rt,ja,$a,Ta,pt,ct,Ba,Ia,O,ut,Pa,qa,N,Aa,ht,Ca,Sa,dt,La,Fa,Da,he,Oa,de,Na,Ma,Ra,mt,me,Ya,ft,Ga,Ha,eo,M,J,wt,fe,za,gt,Wa,to,P,Ua,vt,Ja,Ka,bt,Qa,Va,oo,K,Xa,we,Za,es,ao,x,ts,yt,os,as,xt,ss,ls,_t,ns,is,so,Q,rs,kt,ps,cs,lo,ge,no,m,Us,io,Ie,us,ro,R,V,Et,ve,hs,jt,ds,po,Pe,ms,co,q,fs,$t,ws,gs,Tt,vs,bs,uo,A,ys,Bt,xs,_s,It,ks,Es,ho,C,Pt,js,$s,qt,Ts,Bs,At,Is,mo,qe,Ps,fo,be,wo,f,Js,go,Y,X,Ct,ye,qs,St,As,vo,Ae,Cs,bo,xe,yo,w,Ks,xo,G,Z,Lt,_e,Ss,Ft,Ls,_o,Ce,Fs,ko,Se,Ds,Eo,ke,jo,g,Qs,$o,_,Os,Dt,Ns,Ms,Ot,Rs,Ys,Ee,Gs,Hs,To;return le=new je({}),re=new je({}),pe=new je({}),ce=new Mt({props:{code:`import gradio as gr


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

demo.launch()`}}),fe=new je({}),ge=new Mt({props:{code:`import numpy as np
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
        return gr.Textbox.update(lines=2, visible=True)
    elif choice == "long":
        return gr.Textbox.update(lines=8, visible=True)
    else:
        return gr.Textbox.update(visible=False)


with gr.Blocks() as block:
    radio = gr.Radio(
        ["short", "long", "none"], label="What kind of essay would you like to write?"
    )
    text = gr.Textbox(lines=2, interactive=True)

    radio.change(fn=change_textbox, inputs=radio, outputs=text)
    block.launch()`,highlighted:`<span class="hljs-keyword">import</span> gradio <span class="hljs-keyword">as</span> gr


<span class="hljs-keyword">def</span> <span class="hljs-title function_">change_textbox</span>(<span class="hljs-params">choice</span>):
    <span class="hljs-keyword">if</span> choice == <span class="hljs-string">&quot;short&quot;</span>:
        <span class="hljs-keyword">return</span> gr.Textbox.update(lines=<span class="hljs-number">2</span>, visible=<span class="hljs-literal">True</span>)
    <span class="hljs-keyword">elif</span> choice == <span class="hljs-string">&quot;long&quot;</span>:
        <span class="hljs-keyword">return</span> gr.Textbox.update(lines=<span class="hljs-number">8</span>, visible=<span class="hljs-literal">True</span>)
    <span class="hljs-keyword">else</span>:
        <span class="hljs-keyword">return</span> gr.Textbox.update(visible=<span class="hljs-literal">False</span>)


<span class="hljs-keyword">with</span> gr.Blocks() <span class="hljs-keyword">as</span> block:
    radio = gr.Radio(
        [<span class="hljs-string">&quot;short&quot;</span>, <span class="hljs-string">&quot;long&quot;</span>, <span class="hljs-string">&quot;none&quot;</span>], label=<span class="hljs-string">&quot;What kind of essay would you like to write?&quot;</span>
    )
    text = gr.Textbox(lines=<span class="hljs-number">2</span>, interactive=<span class="hljs-literal">True</span>)

    radio.change(fn=change_textbox, inputs=radio, outputs=text)
    block.launch()`}}),{c(){S=a("meta"),Rt=u(),L=a("h1"),H=a("a"),Ye=a("span"),k(le.$$.fragment),Go=u(),Ge=a("span"),Ho=n("Introduction to Gradio Blocks"),Yt=u(),v=a("p"),zo=n("So far, in the previous sections we have explored and created demos using "),He=a("code"),Wo=n("gradio.Interface"),Uo=n(". In this section we will introduce our "),ze=a("strong"),Jo=n("newly developed"),Ko=n(" low-level API called "),We=a("code"),Qo=n("gradio.Blocks"),Vo=n("."),Gt=u(),I=a("p"),Xo=n("What\u2019s the difference between "),Ue=a("code"),Zo=n("Interface"),ea=n(" and "),Je=a("code"),ta=n("Blocks"),oa=n("?"),Ht=u(),z=a("ul"),Ke=a("li"),ne=a("p"),aa=n("\u26A1 "),Qe=a("code"),sa=n("gradio.Interface"),la=n(": a high-level API that allows you to create a full machine learning demo simply by providing a list of inputs and outputs."),na=u(),Ve=a("li"),ie=a("p"),ia=n("\u{1F9F1} "),Xe=a("code"),ra=n("gradio.Blocks"),pa=n(": a low-level API that allows you to have full control over the data flows and layout of your application. You can build very complex, multi-step applications using Blocks (as in \u201Cbuilding blocks\u201D)."),zt=u(),F=a("h3"),W=a("a"),Ze=a("span"),k(re.$$.fragment),ca=u(),et=a("span"),ua=n("Why Blocks \u{1F9F1}?"),Wt=u(),$e=a("p"),ha=n("As shown in previous sections, by using gradio.Interface, you can easily create full-fledged machine learning demos with just a few lines of code. The Interface API is extremely easy to use but lacks the flexibility the Blocks API provides. For example, you might want to:"),Ut=u(),b=a("ul"),tt=a("li"),da=n("Group together related demos as multiple tabs in one web app"),ma=u(),ot=a("li"),fa=n("Change the layout of your demo instead of having all of the inputs on the left and outputs on the right"),wa=u(),at=a("li"),ga=n("Have multi-step interfaces, in which the output of one model becomes the input to the next model, or have more flexible data flows in general"),va=u(),st=a("li"),ba=n("Change a component\u2019s properties (for example, the choices in a Dropdown) or its visibilty based on user input"),Jt=u(),D=a("h3"),U=a("a"),lt=a("span"),k(pe.$$.fragment),ya=u(),nt=a("span"),xa=n("Let's start by creating a simple example using Blocks:"),Kt=u(),Te=a("p"),_a=n("After you have installed Gradio, run the code below as a Python script, in a Python notebook, or in a colab notebook."),Qt=u(),k(ce.$$.fragment),Vt=u(),d=a("iframe"),Xt=u(),Be=a("p"),ka=n("This simple example above introduces 4 concepts that underlie Blocks:"),Zt=u(),y=a("ol"),it=a("li"),ue=a("p"),Ea=n("Blocks allow you to build web applications that combine markdown, HTML, buttons, and interactive components simply by instantiating objects in Python inside of a "),rt=a("code"),ja=n("with gradio.Blocks"),$a=n(" context. The order in which you instantiate components matters as each element gets rendered into the web app in the order it was created. (More complex layouts are discussed below)"),Ta=u(),pt=a("li"),ct=a("p"),Ba=n("You can define regular Python functions anywhere in your code and run them with user input using Blocks. In our example, we have a simple function that \u201Cflips\u201D the input text, but you can write any Python function, from a simple calculation to large machine learning model\u2019s inference."),Ia=u(),O=a("li"),ut=a("p"),Pa=n("You can assign events to any Blocks component. This will run your function when the component is clicked/changed/etc. When you assign an event, you pass in three parameters: fn: the function that should be called, inputs: the (list) of input component(s), and outputs: the (list) of output components that should be called."),qa=u(),N=a("p"),Aa=n("In the example above, we run the "),ht=a("code"),Ca=n("flip_text()"),Sa=n(" function when the value in the Textbox named inp changes. The event reads the value in inp, passes it as the name parameter to "),dt=a("code"),La=n("flip_text()"),Fa=n(", which then returns a value that gets assigned to our second Textbox named out."),Da=u(),he=a("p"),Oa=n("To see a list of events that each component supports, see the "),de=a("a"),Na=n("documentation"),Ma=n("."),Ra=u(),mt=a("li"),me=a("p"),Ya=n("Blocks automatically figures out whether a component should be interactive (accept user input) or not, based on the event triggers you define. In our example, the first textbox is interactive, since its value is used by the "),ft=a("code"),Ga=n("flip_text()"),Ha=n(" function. The second textbox is not interactive, since its value is never used as an input. In some cases, you might want to override this, which you can do by passing the appropriate boolean to interactive, a parameter that every component accepts."),eo=u(),M=a("h3"),J=a("a"),wt=a("span"),k(fe.$$.fragment),za=u(),gt=a("span"),Wa=n("Let's explore layouts:"),to=u(),P=a("p"),Ua=n("How can we use Blocks to customize the layout of our demo? By default, Blocks renders the components that you create vertically in one column. You can change that by creating additional columns "),vt=a("code"),Ja=n("with gradio.Column():"),Ka=n(" or rows "),bt=a("code"),Qa=n("with gradio.Row():"),Va=n(" and creating components within those contexts."),oo=u(),K=a("p"),Xa=n("Here\u2019s what you should keep in mind: any components created under a Column (this is also the default) will be laid out vertically. Any component created under a Row will be laid out horizontally, similar to the "),we=a("a"),Za=n("flexbox model in web development"),es=n("."),ao=u(),x=a("p"),ts=n("Finally, you can also create a "),yt=a("code"),os=n("with gradio.Tabs():"),as=n(" and within it create multiple "),xt=a("code"),ss=n("with gradio.TabItem(name_of_tab):"),ls=n(" children. Any component created inside of a "),_t=a("code"),ns=n("with gradio.TabItem(name_of_tab):"),is=n(" context appears in that tab."),so=u(),Q=a("p"),rs=n("Now let\u2019s add to our original "),kt=a("code"),ps=n("flip_text"),cs=n(" demo and add a new tab that flips images. Below is an example with 2 tabs and also uses a Row:"),lo=u(),k(ge.$$.fragment),no=u(),m=a("iframe"),io=u(),Ie=a("p"),us=n("You\u2019ll notice that in this example, we\u2019ve also created a Button component in each tab, and we\u2019ve assigned a click event to each button, which is what actually runs the function."),ro=u(),R=a("h3"),V=a("a"),Et=a("span"),k(ve.$$.fragment),hs=u(),jt=a("span"),ds=n("Let's explore events:"),po=u(),Pe=a("p"),ms=n("Just as you can control the layout, Blocks gives you fine-grained control over what events trigger function calls. Each component and many layouts have specific events that they support."),co=u(),q=a("p"),fs=n("For example, the Textbox component has 2 events: "),$t=a("code"),ws=n("change()"),gs=n(" (when the value inside of the textbox changes), and "),Tt=a("code"),vs=n("submit()"),bs=n(" (when a user presses the enter key while focused on the textbox). More complex components can have even more events: for example, the Audio component also has separate events for when the audio file is played, cleared, paused, etc. See the documentation for the events each component supports."),uo=u(),A=a("p"),ys=n("You can attach event trigger to none, one, or more of these events. You create an event trigger by calling the name of the event on the component instance as a function \u2014 e.g. "),Bt=a("code"),xs=n("textbox.change(...)"),_s=n(" or "),It=a("code"),ks=n("btn.click(...)"),Es=n(". The function takes in three parameters, as discussed above:"),ho=u(),C=a("ul"),Pt=a("li"),js=n("fn: the function to run"),$s=u(),qt=a("li"),Ts=n("inputs: a (list of) component(s) whose values should supplied as the input parameters to the function. Each component\u2019s value gets mapped to the corresponding function parameter, in order. This parameter can be None if the function does not take any parameters."),Bs=u(),At=a("li"),Is=n("outputs: a (list of) component(s) whose values should be updated based on the values returned by the function. Each return value gets sets the corresponding component\u2019s value, in order. This parameter can be None if the function does not return anything."),mo=u(),qe=a("p"),Ps=n("You can even make the input and output component be the same component, as we do in this example that uses a GPT model to do text completion:"),fo=u(),k(be.$$.fragment),wo=u(),f=a("iframe"),go=u(),Y=a("h3"),X=a("a"),Ct=a("span"),k(ye.$$.fragment),qs=u(),St=a("span"),As=n("Multistep Demos:"),vo=u(),Ae=a("p"),Cs=n("In some cases, you might want want a \u201Cmulti-step\u201D demo, in which you reuse the output of one function as the input to the next. This is really easy to do with Blocks, as you can use a component for the input of one event trigger but the output of another. Take a look at the text component in the example below, its value is the result of a speech-to-text model, but also gets passed into a sentiment analysis model:"),bo=u(),k(xe.$$.fragment),yo=u(),w=a("iframe"),xo=u(),G=a("h3"),Z=a("a"),Lt=a("span"),k(_e.$$.fragment),Ss=u(),Ft=a("span"),Ls=n("Updating Component Properties:"),_o=u(),Ce=a("p"),Fs=n("So far, we have seen how to create events to update the value of another component. But if you want to change other properties of a component (like the visibility of a textbox or the choices in a radio button group)? You can do this by returning a component class\u2019s update() method instead of a regular return value from your function."),ko=u(),Se=a("p"),Ds=n("This is perhaps most easily illustrated with an example:"),Eo=u(),k(ke.$$.fragment),jo=u(),g=a("iframe"),$o=u(),_=a("p"),Os=n("We just explored all the core concepts of Blocks! Just like with Interfaces, you can create cool demos that can be shared by using "),Dt=a("code"),Ns=n("share=True"),Ms=n(" in the "),Ot=a("code"),Rs=n("launch()"),Ys=n(" method or deployed on "),Ee=a("a"),Gs=n("Hugging Face Spaces"),Hs=n("."),this.h()},l(e){const r=gn('[data-svelte="svelte-1phssyn"]',document.head);S=s(r,"META",{name:!0,content:!0}),r.forEach(o),Rt=h(e),L=s(e,"H1",{class:!0});var Bo=l(L);H=s(Bo,"A",{id:!0,class:!0,href:!0});var Vs=l(H);Ye=s(Vs,"SPAN",{});var Xs=l(Ye);E(le.$$.fragment,Xs),Xs.forEach(o),Vs.forEach(o),Go=h(Bo),Ge=s(Bo,"SPAN",{});var Zs=l(Ge);Ho=i(Zs,"Introduction to Gradio Blocks"),Zs.forEach(o),Bo.forEach(o),Yt=h(e),v=s(e,"P",{});var ee=l(v);zo=i(ee,"So far, in the previous sections we have explored and created demos using "),He=s(ee,"CODE",{});var el=l(He);Wo=i(el,"gradio.Interface"),el.forEach(o),Uo=i(ee,". In this section we will introduce our "),ze=s(ee,"STRONG",{});var tl=l(ze);Jo=i(tl,"newly developed"),tl.forEach(o),Ko=i(ee," low-level API called "),We=s(ee,"CODE",{});var ol=l(We);Qo=i(ol,"gradio.Blocks"),ol.forEach(o),Vo=i(ee,"."),ee.forEach(o),Gt=h(e),I=s(e,"P",{});var Le=l(I);Xo=i(Le,"What\u2019s the difference between "),Ue=s(Le,"CODE",{});var al=l(Ue);Zo=i(al,"Interface"),al.forEach(o),ea=i(Le," and "),Je=s(Le,"CODE",{});var sl=l(Je);ta=i(sl,"Blocks"),sl.forEach(o),oa=i(Le,"?"),Le.forEach(o),Ht=h(e),z=s(e,"UL",{});var Io=l(z);Ke=s(Io,"LI",{});var ll=l(Ke);ne=s(ll,"P",{});var Po=l(ne);aa=i(Po,"\u26A1 "),Qe=s(Po,"CODE",{});var nl=l(Qe);sa=i(nl,"gradio.Interface"),nl.forEach(o),la=i(Po,": a high-level API that allows you to create a full machine learning demo simply by providing a list of inputs and outputs."),Po.forEach(o),ll.forEach(o),na=h(Io),Ve=s(Io,"LI",{});var il=l(Ve);ie=s(il,"P",{});var qo=l(ie);ia=i(qo,"\u{1F9F1} "),Xe=s(qo,"CODE",{});var rl=l(Xe);ra=i(rl,"gradio.Blocks"),rl.forEach(o),pa=i(qo,": a low-level API that allows you to have full control over the data flows and layout of your application. You can build very complex, multi-step applications using Blocks (as in \u201Cbuilding blocks\u201D)."),qo.forEach(o),il.forEach(o),Io.forEach(o),zt=h(e),F=s(e,"H3",{class:!0});var Ao=l(F);W=s(Ao,"A",{id:!0,class:!0,href:!0});var pl=l(W);Ze=s(pl,"SPAN",{});var cl=l(Ze);E(re.$$.fragment,cl),cl.forEach(o),pl.forEach(o),ca=h(Ao),et=s(Ao,"SPAN",{});var ul=l(et);ua=i(ul,"Why Blocks \u{1F9F1}?"),ul.forEach(o),Ao.forEach(o),Wt=h(e),$e=s(e,"P",{});var hl=l($e);ha=i(hl,"As shown in previous sections, by using gradio.Interface, you can easily create full-fledged machine learning demos with just a few lines of code. The Interface API is extremely easy to use but lacks the flexibility the Blocks API provides. For example, you might want to:"),hl.forEach(o),Ut=h(e),b=s(e,"UL",{});var te=l(b);tt=s(te,"LI",{});var dl=l(tt);da=i(dl,"Group together related demos as multiple tabs in one web app"),dl.forEach(o),ma=h(te),ot=s(te,"LI",{});var ml=l(ot);fa=i(ml,"Change the layout of your demo instead of having all of the inputs on the left and outputs on the right"),ml.forEach(o),wa=h(te),at=s(te,"LI",{});var fl=l(at);ga=i(fl,"Have multi-step interfaces, in which the output of one model becomes the input to the next model, or have more flexible data flows in general"),fl.forEach(o),va=h(te),st=s(te,"LI",{});var wl=l(st);ba=i(wl,"Change a component\u2019s properties (for example, the choices in a Dropdown) or its visibilty based on user input"),wl.forEach(o),te.forEach(o),Jt=h(e),D=s(e,"H3",{class:!0});var Co=l(D);U=s(Co,"A",{id:!0,class:!0,href:!0});var gl=l(U);lt=s(gl,"SPAN",{});var vl=l(lt);E(pe.$$.fragment,vl),vl.forEach(o),gl.forEach(o),ya=h(Co),nt=s(Co,"SPAN",{});var bl=l(nt);xa=i(bl,"Let's start by creating a simple example using Blocks:"),bl.forEach(o),Co.forEach(o),Kt=h(e),Te=s(e,"P",{});var yl=l(Te);_a=i(yl,"After you have installed Gradio, run the code below as a Python script, in a Python notebook, or in a colab notebook."),yl.forEach(o),Qt=h(e),E(ce.$$.fragment,e),Vt=h(e),d=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(d).forEach(o),Xt=h(e),Be=s(e,"P",{});var xl=l(Be);ka=i(xl,"This simple example above introduces 4 concepts that underlie Blocks:"),xl.forEach(o),Zt=h(e),y=s(e,"OL",{});var oe=l(y);it=s(oe,"LI",{});var _l=l(it);ue=s(_l,"P",{});var So=l(ue);Ea=i(So,"Blocks allow you to build web applications that combine markdown, HTML, buttons, and interactive components simply by instantiating objects in Python inside of a "),rt=s(So,"CODE",{});var kl=l(rt);ja=i(kl,"with gradio.Blocks"),kl.forEach(o),$a=i(So," context. The order in which you instantiate components matters as each element gets rendered into the web app in the order it was created. (More complex layouts are discussed below)"),So.forEach(o),_l.forEach(o),Ta=h(oe),pt=s(oe,"LI",{});var El=l(pt);ct=s(El,"P",{});var jl=l(ct);Ba=i(jl,"You can define regular Python functions anywhere in your code and run them with user input using Blocks. In our example, we have a simple function that \u201Cflips\u201D the input text, but you can write any Python function, from a simple calculation to large machine learning model\u2019s inference."),jl.forEach(o),El.forEach(o),Ia=h(oe),O=s(oe,"LI",{});var Fe=l(O);ut=s(Fe,"P",{});var $l=l(ut);Pa=i($l,"You can assign events to any Blocks component. This will run your function when the component is clicked/changed/etc. When you assign an event, you pass in three parameters: fn: the function that should be called, inputs: the (list) of input component(s), and outputs: the (list) of output components that should be called."),$l.forEach(o),qa=h(Fe),N=s(Fe,"P",{});var De=l(N);Aa=i(De,"In the example above, we run the "),ht=s(De,"CODE",{});var Tl=l(ht);Ca=i(Tl,"flip_text()"),Tl.forEach(o),Sa=i(De," function when the value in the Textbox named inp changes. The event reads the value in inp, passes it as the name parameter to "),dt=s(De,"CODE",{});var Bl=l(dt);La=i(Bl,"flip_text()"),Bl.forEach(o),Fa=i(De,", which then returns a value that gets assigned to our second Textbox named out."),De.forEach(o),Da=h(Fe),he=s(Fe,"P",{});var Lo=l(he);Oa=i(Lo,"To see a list of events that each component supports, see the "),de=s(Lo,"A",{href:!0,rel:!0});var Il=l(de);Na=i(Il,"documentation"),Il.forEach(o),Ma=i(Lo,"."),Lo.forEach(o),Fe.forEach(o),Ra=h(oe),mt=s(oe,"LI",{});var Pl=l(mt);me=s(Pl,"P",{});var Fo=l(me);Ya=i(Fo,"Blocks automatically figures out whether a component should be interactive (accept user input) or not, based on the event triggers you define. In our example, the first textbox is interactive, since its value is used by the "),ft=s(Fo,"CODE",{});var ql=l(ft);Ga=i(ql,"flip_text()"),ql.forEach(o),Ha=i(Fo," function. The second textbox is not interactive, since its value is never used as an input. In some cases, you might want to override this, which you can do by passing the appropriate boolean to interactive, a parameter that every component accepts."),Fo.forEach(o),Pl.forEach(o),oe.forEach(o),eo=h(e),M=s(e,"H3",{class:!0});var Do=l(M);J=s(Do,"A",{id:!0,class:!0,href:!0});var Al=l(J);wt=s(Al,"SPAN",{});var Cl=l(wt);E(fe.$$.fragment,Cl),Cl.forEach(o),Al.forEach(o),za=h(Do),gt=s(Do,"SPAN",{});var Sl=l(gt);Wa=i(Sl,"Let's explore layouts:"),Sl.forEach(o),Do.forEach(o),to=h(e),P=s(e,"P",{});var Oe=l(P);Ua=i(Oe,"How can we use Blocks to customize the layout of our demo? By default, Blocks renders the components that you create vertically in one column. You can change that by creating additional columns "),vt=s(Oe,"CODE",{});var Ll=l(vt);Ja=i(Ll,"with gradio.Column():"),Ll.forEach(o),Ka=i(Oe," or rows "),bt=s(Oe,"CODE",{});var Fl=l(bt);Qa=i(Fl,"with gradio.Row():"),Fl.forEach(o),Va=i(Oe," and creating components within those contexts."),Oe.forEach(o),oo=h(e),K=s(e,"P",{});var Oo=l(K);Xa=i(Oo,"Here\u2019s what you should keep in mind: any components created under a Column (this is also the default) will be laid out vertically. Any component created under a Row will be laid out horizontally, similar to the "),we=s(Oo,"A",{href:!0,rel:!0});var Dl=l(we);Za=i(Dl,"flexbox model in web development"),Dl.forEach(o),es=i(Oo,"."),Oo.forEach(o),ao=h(e),x=s(e,"P",{});var ae=l(x);ts=i(ae,"Finally, you can also create a "),yt=s(ae,"CODE",{});var Ol=l(yt);os=i(Ol,"with gradio.Tabs():"),Ol.forEach(o),as=i(ae," and within it create multiple "),xt=s(ae,"CODE",{});var Nl=l(xt);ss=i(Nl,"with gradio.TabItem(name_of_tab):"),Nl.forEach(o),ls=i(ae," children. Any component created inside of a "),_t=s(ae,"CODE",{});var Ml=l(_t);ns=i(Ml,"with gradio.TabItem(name_of_tab):"),Ml.forEach(o),is=i(ae," context appears in that tab."),ae.forEach(o),so=h(e),Q=s(e,"P",{});var No=l(Q);rs=i(No,"Now let\u2019s add to our original "),kt=s(No,"CODE",{});var Rl=l(kt);ps=i(Rl,"flip_text"),Rl.forEach(o),cs=i(No," demo and add a new tab that flips images. Below is an example with 2 tabs and also uses a Row:"),No.forEach(o),lo=h(e),E(ge.$$.fragment,e),no=h(e),m=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(m).forEach(o),io=h(e),Ie=s(e,"P",{});var Yl=l(Ie);us=i(Yl,"You\u2019ll notice that in this example, we\u2019ve also created a Button component in each tab, and we\u2019ve assigned a click event to each button, which is what actually runs the function."),Yl.forEach(o),ro=h(e),R=s(e,"H3",{class:!0});var Mo=l(R);V=s(Mo,"A",{id:!0,class:!0,href:!0});var Gl=l(V);Et=s(Gl,"SPAN",{});var Hl=l(Et);E(ve.$$.fragment,Hl),Hl.forEach(o),Gl.forEach(o),hs=h(Mo),jt=s(Mo,"SPAN",{});var zl=l(jt);ds=i(zl,"Let's explore events:"),zl.forEach(o),Mo.forEach(o),po=h(e),Pe=s(e,"P",{});var Wl=l(Pe);ms=i(Wl,"Just as you can control the layout, Blocks gives you fine-grained control over what events trigger function calls. Each component and many layouts have specific events that they support."),Wl.forEach(o),co=h(e),q=s(e,"P",{});var Ne=l(q);fs=i(Ne,"For example, the Textbox component has 2 events: "),$t=s(Ne,"CODE",{});var Ul=l($t);ws=i(Ul,"change()"),Ul.forEach(o),gs=i(Ne," (when the value inside of the textbox changes), and "),Tt=s(Ne,"CODE",{});var Jl=l(Tt);vs=i(Jl,"submit()"),Jl.forEach(o),bs=i(Ne," (when a user presses the enter key while focused on the textbox). More complex components can have even more events: for example, the Audio component also has separate events for when the audio file is played, cleared, paused, etc. See the documentation for the events each component supports."),Ne.forEach(o),uo=h(e),A=s(e,"P",{});var Me=l(A);ys=i(Me,"You can attach event trigger to none, one, or more of these events. You create an event trigger by calling the name of the event on the component instance as a function \u2014 e.g. "),Bt=s(Me,"CODE",{});var Kl=l(Bt);xs=i(Kl,"textbox.change(...)"),Kl.forEach(o),_s=i(Me," or "),It=s(Me,"CODE",{});var Ql=l(It);ks=i(Ql,"btn.click(...)"),Ql.forEach(o),Es=i(Me,". The function takes in three parameters, as discussed above:"),Me.forEach(o),ho=h(e),C=s(e,"UL",{});var Re=l(C);Pt=s(Re,"LI",{});var Vl=l(Pt);js=i(Vl,"fn: the function to run"),Vl.forEach(o),$s=h(Re),qt=s(Re,"LI",{});var Xl=l(qt);Ts=i(Xl,"inputs: a (list of) component(s) whose values should supplied as the input parameters to the function. Each component\u2019s value gets mapped to the corresponding function parameter, in order. This parameter can be None if the function does not take any parameters."),Xl.forEach(o),Bs=h(Re),At=s(Re,"LI",{});var Zl=l(At);Is=i(Zl,"outputs: a (list of) component(s) whose values should be updated based on the values returned by the function. Each return value gets sets the corresponding component\u2019s value, in order. This parameter can be None if the function does not return anything."),Zl.forEach(o),Re.forEach(o),mo=h(e),qe=s(e,"P",{});var en=l(qe);Ps=i(en,"You can even make the input and output component be the same component, as we do in this example that uses a GPT model to do text completion:"),en.forEach(o),fo=h(e),E(be.$$.fragment,e),wo=h(e),f=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(f).forEach(o),go=h(e),Y=s(e,"H3",{class:!0});var Ro=l(Y);X=s(Ro,"A",{id:!0,class:!0,href:!0});var tn=l(X);Ct=s(tn,"SPAN",{});var on=l(Ct);E(ye.$$.fragment,on),on.forEach(o),tn.forEach(o),qs=h(Ro),St=s(Ro,"SPAN",{});var an=l(St);As=i(an,"Multistep Demos:"),an.forEach(o),Ro.forEach(o),vo=h(e),Ae=s(e,"P",{});var sn=l(Ae);Cs=i(sn,"In some cases, you might want want a \u201Cmulti-step\u201D demo, in which you reuse the output of one function as the input to the next. This is really easy to do with Blocks, as you can use a component for the input of one event trigger but the output of another. Take a look at the text component in the example below, its value is the result of a speech-to-text model, but also gets passed into a sentiment analysis model:"),sn.forEach(o),bo=h(e),E(xe.$$.fragment,e),yo=h(e),w=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(w).forEach(o),xo=h(e),G=s(e,"H3",{class:!0});var Yo=l(G);Z=s(Yo,"A",{id:!0,class:!0,href:!0});var ln=l(Z);Lt=s(ln,"SPAN",{});var nn=l(Lt);E(_e.$$.fragment,nn),nn.forEach(o),ln.forEach(o),Ss=h(Yo),Ft=s(Yo,"SPAN",{});var rn=l(Ft);Ls=i(rn,"Updating Component Properties:"),rn.forEach(o),Yo.forEach(o),_o=h(e),Ce=s(e,"P",{});var pn=l(Ce);Fs=i(pn,"So far, we have seen how to create events to update the value of another component. But if you want to change other properties of a component (like the visibility of a textbox or the choices in a radio button group)? You can do this by returning a component class\u2019s update() method instead of a regular return value from your function."),pn.forEach(o),ko=h(e),Se=s(e,"P",{});var cn=l(Se);Ds=i(cn,"This is perhaps most easily illustrated with an example:"),cn.forEach(o),Eo=h(e),E(ke.$$.fragment,e),jo=h(e),g=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(g).forEach(o),$o=h(e),_=s(e,"P",{});var se=l(_);Os=i(se,"We just explored all the core concepts of Blocks! Just like with Interfaces, you can create cool demos that can be shared by using "),Dt=s(se,"CODE",{});var un=l(Dt);Ns=i(un,"share=True"),un.forEach(o),Ms=i(se," in the "),Ot=s(se,"CODE",{});var hn=l(Ot);Rs=i(hn,"launch()"),hn.forEach(o),Ys=i(se," method or deployed on "),Ee=s(se,"A",{href:!0,rel:!0});var dn=l(Ee);Gs=i(dn,"Hugging Face Spaces"),dn.forEach(o),Hs=i(se,"."),se.forEach(o),this.h()},h(){c(S,"name","hf:doc:metadata"),c(S,"content",JSON.stringify(xn)),c(H,"id","introduction-to-gradio-blocks"),c(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(H,"href","#introduction-to-gradio-blocks"),c(L,"class","relative group"),c(W,"id","why-blocks"),c(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(W,"href","#why-blocks"),c(F,"class","relative group"),c(U,"id","lets-start-by-creating-a-simple-example-using-blocks"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#lets-start-by-creating-a-simple-example-using-blocks"),c(D,"class","relative group"),Nt(d.src,Ws="https://hf.space/gradioiframe/course-demos/flip_text/+")||c(d,"src",Ws),c(d,"frameborder","0"),c(d,"height","400"),c(d,"title","Gradio app"),c(d,"class","container p-0 flex-grow space-iframe"),c(d,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(d,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(de,"href","https://www.gradio.app/docs/"),c(de,"rel","nofollow"),c(J,"id","lets-explore-layouts"),c(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(J,"href","#lets-explore-layouts"),c(M,"class","relative group"),c(we,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"),c(we,"rel","nofollow"),Nt(m.src,Us="https://hf.space/gradioiframe/course-demos/flip_text_image/+")||c(m,"src",Us),c(m,"frameborder","0"),c(m,"height","450"),c(m,"title","Gradio app"),c(m,"class","container p-0 flex-grow space-iframe"),c(m,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(m,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(V,"id","lets-explore-events"),c(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(V,"href","#lets-explore-events"),c(R,"class","relative group"),Nt(f.src,Js="https://hf.space/gradioiframe/course-demos/blocks_gpt/+")||c(f,"src",Js),c(f,"frameborder","0"),c(f,"height","300"),c(f,"title","Gradio app"),c(f,"class","container p-0 flex-grow space-iframe"),c(f,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(f,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(X,"id","multistep-demos"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#multistep-demos"),c(Y,"class","relative group"),Nt(w.src,Ks="https://hf.space/gradioiframe/course-demos/blocks_multi_step/+")||c(w,"src",Ks),c(w,"frameborder","0"),c(w,"height","550"),c(w,"title","Gradio app"),c(w,"class","container p-0 flex-grow space-iframe"),c(w,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(w,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(Z,"id","updating-component-properties"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#updating-component-properties"),c(G,"class","relative group"),Nt(g.src,Qs="https://hf.space/gradioiframe/course-demos/blocks_update_component_properties/+")||c(g,"src",Qs),c(g,"frameborder","0"),c(g,"height","300"),c(g,"title","Gradio app"),c(g,"class","container p-0 flex-grow space-iframe"),c(g,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(g,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(Ee,"href","https://huggingface.co/spaces"),c(Ee,"rel","nofollow")},m(e,r){t(document.head,S),p(e,Rt,r),p(e,L,r),t(L,H),t(H,Ye),j(le,Ye,null),t(L,Go),t(L,Ge),t(Ge,Ho),p(e,Yt,r),p(e,v,r),t(v,zo),t(v,He),t(He,Wo),t(v,Uo),t(v,ze),t(ze,Jo),t(v,Ko),t(v,We),t(We,Qo),t(v,Vo),p(e,Gt,r),p(e,I,r),t(I,Xo),t(I,Ue),t(Ue,Zo),t(I,ea),t(I,Je),t(Je,ta),t(I,oa),p(e,Ht,r),p(e,z,r),t(z,Ke),t(Ke,ne),t(ne,aa),t(ne,Qe),t(Qe,sa),t(ne,la),t(z,na),t(z,Ve),t(Ve,ie),t(ie,ia),t(ie,Xe),t(Xe,ra),t(ie,pa),p(e,zt,r),p(e,F,r),t(F,W),t(W,Ze),j(re,Ze,null),t(F,ca),t(F,et),t(et,ua),p(e,Wt,r),p(e,$e,r),t($e,ha),p(e,Ut,r),p(e,b,r),t(b,tt),t(tt,da),t(b,ma),t(b,ot),t(ot,fa),t(b,wa),t(b,at),t(at,ga),t(b,va),t(b,st),t(st,ba),p(e,Jt,r),p(e,D,r),t(D,U),t(U,lt),j(pe,lt,null),t(D,ya),t(D,nt),t(nt,xa),p(e,Kt,r),p(e,Te,r),t(Te,_a),p(e,Qt,r),j(ce,e,r),p(e,Vt,r),p(e,d,r),p(e,Xt,r),p(e,Be,r),t(Be,ka),p(e,Zt,r),p(e,y,r),t(y,it),t(it,ue),t(ue,Ea),t(ue,rt),t(rt,ja),t(ue,$a),t(y,Ta),t(y,pt),t(pt,ct),t(ct,Ba),t(y,Ia),t(y,O),t(O,ut),t(ut,Pa),t(O,qa),t(O,N),t(N,Aa),t(N,ht),t(ht,Ca),t(N,Sa),t(N,dt),t(dt,La),t(N,Fa),t(O,Da),t(O,he),t(he,Oa),t(he,de),t(de,Na),t(he,Ma),t(y,Ra),t(y,mt),t(mt,me),t(me,Ya),t(me,ft),t(ft,Ga),t(me,Ha),p(e,eo,r),p(e,M,r),t(M,J),t(J,wt),j(fe,wt,null),t(M,za),t(M,gt),t(gt,Wa),p(e,to,r),p(e,P,r),t(P,Ua),t(P,vt),t(vt,Ja),t(P,Ka),t(P,bt),t(bt,Qa),t(P,Va),p(e,oo,r),p(e,K,r),t(K,Xa),t(K,we),t(we,Za),t(K,es),p(e,ao,r),p(e,x,r),t(x,ts),t(x,yt),t(yt,os),t(x,as),t(x,xt),t(xt,ss),t(x,ls),t(x,_t),t(_t,ns),t(x,is),p(e,so,r),p(e,Q,r),t(Q,rs),t(Q,kt),t(kt,ps),t(Q,cs),p(e,lo,r),j(ge,e,r),p(e,no,r),p(e,m,r),p(e,io,r),p(e,Ie,r),t(Ie,us),p(e,ro,r),p(e,R,r),t(R,V),t(V,Et),j(ve,Et,null),t(R,hs),t(R,jt),t(jt,ds),p(e,po,r),p(e,Pe,r),t(Pe,ms),p(e,co,r),p(e,q,r),t(q,fs),t(q,$t),t($t,ws),t(q,gs),t(q,Tt),t(Tt,vs),t(q,bs),p(e,uo,r),p(e,A,r),t(A,ys),t(A,Bt),t(Bt,xs),t(A,_s),t(A,It),t(It,ks),t(A,Es),p(e,ho,r),p(e,C,r),t(C,Pt),t(Pt,js),t(C,$s),t(C,qt),t(qt,Ts),t(C,Bs),t(C,At),t(At,Is),p(e,mo,r),p(e,qe,r),t(qe,Ps),p(e,fo,r),j(be,e,r),p(e,wo,r),p(e,f,r),p(e,go,r),p(e,Y,r),t(Y,X),t(X,Ct),j(ye,Ct,null),t(Y,qs),t(Y,St),t(St,As),p(e,vo,r),p(e,Ae,r),t(Ae,Cs),p(e,bo,r),j(xe,e,r),p(e,yo,r),p(e,w,r),p(e,xo,r),p(e,G,r),t(G,Z),t(Z,Lt),j(_e,Lt,null),t(G,Ss),t(G,Ft),t(Ft,Ls),p(e,_o,r),p(e,Ce,r),t(Ce,Fs),p(e,ko,r),p(e,Se,r),t(Se,Ds),p(e,Eo,r),j(ke,e,r),p(e,jo,r),p(e,g,r),p(e,$o,r),p(e,_,r),t(_,Os),t(_,Dt),t(Dt,Ns),t(_,Ms),t(_,Ot),t(Ot,Rs),t(_,Ys),t(_,Ee),t(Ee,Gs),t(_,Hs),To=!0},p:vn,i(e){To||($(le.$$.fragment,e),$(re.$$.fragment,e),$(pe.$$.fragment,e),$(ce.$$.fragment,e),$(fe.$$.fragment,e),$(ge.$$.fragment,e),$(ve.$$.fragment,e),$(be.$$.fragment,e),$(ye.$$.fragment,e),$(xe.$$.fragment,e),$(_e.$$.fragment,e),$(ke.$$.fragment,e),To=!0)},o(e){T(le.$$.fragment,e),T(re.$$.fragment,e),T(pe.$$.fragment,e),T(ce.$$.fragment,e),T(fe.$$.fragment,e),T(ge.$$.fragment,e),T(ve.$$.fragment,e),T(be.$$.fragment,e),T(ye.$$.fragment,e),T(xe.$$.fragment,e),T(_e.$$.fragment,e),T(ke.$$.fragment,e),To=!1},d(e){o(S),e&&o(Rt),e&&o(L),B(le),e&&o(Yt),e&&o(v),e&&o(Gt),e&&o(I),e&&o(Ht),e&&o(z),e&&o(zt),e&&o(F),B(re),e&&o(Wt),e&&o($e),e&&o(Ut),e&&o(b),e&&o(Jt),e&&o(D),B(pe),e&&o(Kt),e&&o(Te),e&&o(Qt),B(ce,e),e&&o(Vt),e&&o(d),e&&o(Xt),e&&o(Be),e&&o(Zt),e&&o(y),e&&o(eo),e&&o(M),B(fe),e&&o(to),e&&o(P),e&&o(oo),e&&o(K),e&&o(ao),e&&o(x),e&&o(so),e&&o(Q),e&&o(lo),B(ge,e),e&&o(no),e&&o(m),e&&o(io),e&&o(Ie),e&&o(ro),e&&o(R),B(ve),e&&o(po),e&&o(Pe),e&&o(co),e&&o(q),e&&o(uo),e&&o(A),e&&o(ho),e&&o(C),e&&o(mo),e&&o(qe),e&&o(fo),B(be,e),e&&o(wo),e&&o(f),e&&o(go),e&&o(Y),B(ye),e&&o(vo),e&&o(Ae),e&&o(bo),B(xe,e),e&&o(yo),e&&o(w),e&&o(xo),e&&o(G),B(_e),e&&o(_o),e&&o(Ce),e&&o(ko),e&&o(Se),e&&o(Eo),B(ke,e),e&&o(jo),e&&o(g),e&&o($o),e&&o(_)}}}const xn={local:"introduction-to-gradio-blocks",sections:[{local:"why-blocks",title:"Why Blocks \u{1F9F1}?"},{local:"lets-start-by-creating-a-simple-example-using-blocks",title:"Let's start by creating a simple example using Blocks:"},{local:"lets-explore-layouts",title:"Let's explore layouts:"},{local:"lets-explore-events",title:"Let's explore events:"},{local:"multistep-demos",title:"Multistep Demos:"},{local:"updating-component-properties",title:"Updating Component Properties:"}],title:"Introduction to Gradio Blocks"};function _n(zs){return bn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $n extends mn{constructor(S){super();fn(this,S,_n,yn,wn,{})}}export{$n as default,xn as metadata};
