import{S as Yn,i as Gn,s as Hn,e as a,k as u,w as j,t as n,M as zn,c as s,d as o,m as h,a as l,x as $,h as i,b as c,N as Jt,F as t,g as p,y as T,L as Un,q as I,o as B,B as P,v as Wn}from"../../chunks/vendor-1e8b365d.js";import{I as Ie}from"../../chunks/IconCopyLink-483c28ba.js";import{C as Kt}from"../../chunks/CodeBlock-e5764662.js";function Jn(fl){let L,Qt,F,W,He,pe,Xo,ze,Zo,Vt,b,ea,Ue,ta,oa,We,aa,sa,Je,la,na,Xt,q,ia,Ke,ra,pa,Qe,ca,ua,Zt,J,Ve,ce,ha,Xe,da,fa,ma,Ze,O,wa,et,ga,va,tt,ba,ya,eo,N,K,ot,ue,xa,at,_a,to,y,ka,st,Ea,ja,lt,$a,Ta,nt,Ia,Ba,oo,x,it,Pa,qa,rt,Aa,Ca,pt,Sa,Da,ct,La,ao,M,Q,ut,he,Fa,ht,Oa,so,Be,Na,lo,de,no,f,ml,io,Pe,Ma,ro,_,dt,fe,Ra,ft,Ya,Ga,Ha,mt,wt,za,Ua,R,gt,Wa,Ja,Y,Ka,vt,Qa,Va,bt,Xa,Za,es,me,ts,we,os,as,ss,yt,ge,ls,xt,ns,is,po,G,V,_t,ve,rs,kt,ps,co,A,cs,Et,us,hs,jt,ds,fs,uo,X,ms,be,ws,gs,ho,k,vs,$t,bs,ys,Tt,xs,_s,It,ks,Es,fo,Z,js,Bt,$s,Ts,mo,ye,wo,m,wl,go,qe,Is,vo,H,ee,Pt,xe,Bs,qt,Ps,bo,Ae,qs,yo,C,As,At,Cs,Ss,Ct,Ds,Ls,xo,S,Fs,St,Os,Ns,Dt,Ms,Rs,_o,D,Lt,Ys,Gs,Ft,Hs,zs,Ot,Us,ko,Ce,Ws,Eo,_e,jo,w,gl,$o,z,te,Nt,ke,Js,Mt,Ks,To,Se,Qs,Io,Ee,Bo,g,vl,Po,U,oe,Rt,je,Vs,Yt,Xs,qo,ae,Zs,Gt,el,tl,Ao,De,ol,Co,$e,So,v,bl,Do,d,al,Ht,sl,ll,zt,nl,il,Ut,rl,pl,Wt,cl,ul,Te,hl,dl,Lo;return pe=new Ie({}),ue=new Ie({}),he=new Ie({}),de=new Kt({props:{code:`import gradio as gr


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

demo.launch()`}}),ve=new Ie({}),ye=new Kt({props:{code:`import numpy as np
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

demo.launch()`}}),xe=new Ie({}),_e=new Kt({props:{code:`import gradio as gr

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

demo.launch()`}}),ke=new Ie({}),Ee=new Kt({props:{code:`from transformers import pipeline

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

demo.launch()`}}),je=new Ie({}),$e=new Kt({props:{code:`import gradio as gr


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
    block.launch()`}}),{c(){L=a("meta"),Qt=u(),F=a("h1"),W=a("a"),He=a("span"),j(pe.$$.fragment),Xo=u(),ze=a("span"),Zo=n("Introduction to Gradio Blocks"),Vt=u(),b=a("p"),ea=n("In the previous sections we have explored and created demos using the "),Ue=a("code"),ta=n("Interface"),oa=n(" class. In this section we will introduce our "),We=a("strong"),aa=n("newly developed"),sa=n(" low-level API called "),Je=a("code"),la=n("gradio.Blocks"),na=n("."),Xt=u(),q=a("p"),ia=n("Now, what\u2019s the difference between "),Ke=a("code"),ra=n("Interface"),pa=n(" and "),Qe=a("code"),ca=n("Blocks"),ua=n("?"),Zt=u(),J=a("ul"),Ve=a("li"),ce=a("p"),ha=n("\u26A1 "),Xe=a("code"),da=n("Interface"),fa=n(": a high-level API that allows you to create a full machine learning demo simply by providing a list of inputs and outputs."),ma=u(),Ze=a("li"),O=a("p"),wa=n("\u{1F9F1} "),et=a("code"),ga=n("Blocks"),va=n(": a low-level API that allows you to have full control over the data flows and layout of your application. You can build very complex, multi-step applications using "),tt=a("code"),ba=n("Blocks"),ya=n(" (as in \u201Cbuilding blocks\u201D)."),eo=u(),N=a("h3"),K=a("a"),ot=a("span"),j(ue.$$.fragment),xa=u(),at=a("span"),_a=n("Why Blocks \u{1F9F1}?"),to=u(),y=a("p"),ka=n("As we saw in the previous sections, the "),st=a("code"),Ea=n("Interface"),ja=n(" class allows you to easily create full-fledged machine learning demos with just a few lines of code. The "),lt=a("code"),$a=n("Interface"),Ta=n(" API is extremely easy to use but lacks the flexibility that the "),nt=a("code"),Ia=n("Blocks"),Ba=n(" API provides. For example, you might want to:"),oo=u(),x=a("ul"),it=a("li"),Pa=n("Group together related demos as multiple tabs in one web app"),qa=u(),rt=a("li"),Aa=n("Change the layout of your demo instead of having all of the inputs on the left and outputs on the right"),Ca=u(),pt=a("li"),Sa=n("Have multi-step interfaces, in which the output of one model becomes the input to the next model, or have more flexible data flows in general"),Da=u(),ct=a("li"),La=n("Change a component\u2019s properties (for example, the choices in a Dropdown) or its visibilty based on user input"),ao=u(),M=a("h3"),Q=a("a"),ut=a("span"),j(he.$$.fragment),Fa=u(),ht=a("span"),Oa=n("Let's start by creating a simple example using Blocks:"),so=u(),Be=a("p"),Na=n("After you have installed Gradio, run the code below as a Python script, in a Python notebook, or in a colab notebook."),lo=u(),j(de.$$.fragment),no=u(),f=a("iframe"),io=u(),Pe=a("p"),Ma=n("This simple example above introduces 4 concepts that underlie Blocks:"),ro=u(),_=a("ol"),dt=a("li"),fe=a("p"),Ra=n("Blocks allow you to build web applications that combine markdown, HTML, buttons, and interactive components simply by instantiating objects in Python inside of a "),ft=a("code"),Ya=n("with gradio.Blocks"),Ga=n(" context. The order in which you instantiate components matters as each element gets rendered into the web app in the order it was created. (More complex layouts are discussed below)"),Ha=u(),mt=a("li"),wt=a("p"),za=n("You can define regular Python functions anywhere in your code and run them with user input using Blocks. In our example, we have a simple function that \u201Cflips\u201D the input text, but you can write any Python function, from a simple calculation to large machine learning model\u2019s inference."),Ua=u(),R=a("li"),gt=a("p"),Wa=n("You can assign events to any Blocks component. This will run your function when the component is clicked/changed/etc. When you assign an event, you pass in three parameters: fn: the function that should be called, inputs: the (list) of input component(s), and outputs: the (list) of output components that should be called."),Ja=u(),Y=a("p"),Ka=n("In the example above, we run the "),vt=a("code"),Qa=n("flip_text()"),Va=n(" function when the value in the Textbox named inp changes. The event reads the value in inp, passes it as the name parameter to "),bt=a("code"),Xa=n("flip_text()"),Za=n(", which then returns a value that gets assigned to our second Textbox named out."),es=u(),me=a("p"),ts=n("To see a list of events that each component supports, see the "),we=a("a"),os=n("documentation"),as=n("."),ss=u(),yt=a("li"),ge=a("p"),ls=n("Blocks automatically figures out whether a component should be interactive (accept user input) or not, based on the event triggers you define. In our example, the first textbox is interactive, since its value is used by the "),xt=a("code"),ns=n("flip_text()"),is=n(" function. The second textbox is not interactive, since its value is never used as an input. In some cases, you might want to override this, which you can do by passing the appropriate boolean to interactive, a parameter that every component accepts."),po=u(),G=a("h3"),V=a("a"),_t=a("span"),j(ve.$$.fragment),rs=u(),kt=a("span"),ps=n("Let's explore layouts:"),co=u(),A=a("p"),cs=n("How can we use Blocks to customize the layout of our demo? By default, Blocks renders the components that you create vertically in one column. You can change that by creating additional columns "),Et=a("code"),us=n("with gradio.Column():"),hs=n(" or rows "),jt=a("code"),ds=n("with gradio.Row():"),fs=n(" and creating components within those contexts."),uo=u(),X=a("p"),ms=n("Here\u2019s what you should keep in mind: any components created under a Column (this is also the default) will be laid out vertically. Any component created under a Row will be laid out horizontally, similar to the "),be=a("a"),ws=n("flexbox model in web development"),gs=n("."),ho=u(),k=a("p"),vs=n("Finally, you can also create a "),$t=a("code"),bs=n("with gradio.Tabs():"),ys=n(" and within it create multiple "),Tt=a("code"),xs=n("with gradio.TabItem(name_of_tab):"),_s=n(" children. Any component created inside of a "),It=a("code"),ks=n("with gradio.TabItem(name_of_tab):"),Es=n(" context appears in that tab."),fo=u(),Z=a("p"),js=n("Now let\u2019s add to our original "),Bt=a("code"),$s=n("flip_text"),Ts=n(" demo and add a new tab that flips images. Below is an example with 2 tabs and also uses a Row:"),mo=u(),j(ye.$$.fragment),wo=u(),m=a("iframe"),go=u(),qe=a("p"),Is=n("You\u2019ll notice that in this example, we\u2019ve also created a Button component in each tab, and we\u2019ve assigned a click event to each button, which is what actually runs the function."),vo=u(),H=a("h3"),ee=a("a"),Pt=a("span"),j(xe.$$.fragment),Bs=u(),qt=a("span"),Ps=n("Let's explore events:"),bo=u(),Ae=a("p"),qs=n("Just as you can control the layout, Blocks gives you fine-grained control over what events trigger function calls. Each component and many layouts have specific events that they support."),yo=u(),C=a("p"),As=n("For example, the Textbox component has 2 events: "),At=a("code"),Cs=n("change()"),Ss=n(" (when the value inside of the textbox changes), and "),Ct=a("code"),Ds=n("submit()"),Ls=n(" (when a user presses the enter key while focused on the textbox). More complex components can have even more events: for example, the Audio component also has separate events for when the audio file is played, cleared, paused, etc. See the documentation for the events each component supports."),xo=u(),S=a("p"),Fs=n("You can attach event trigger to none, one, or more of these events. You create an event trigger by calling the name of the event on the component instance as a function \u2014 e.g. "),St=a("code"),Os=n("textbox.change(...)"),Ns=n(" or "),Dt=a("code"),Ms=n("btn.click(...)"),Rs=n(". The function takes in three parameters, as discussed above:"),_o=u(),D=a("ul"),Lt=a("li"),Ys=n("fn: the function to run"),Gs=u(),Ft=a("li"),Hs=n("inputs: a (list of) component(s) whose values should supplied as the input parameters to the function. Each component\u2019s value gets mapped to the corresponding function parameter, in order. This parameter can be None if the function does not take any parameters."),zs=u(),Ot=a("li"),Us=n("outputs: a (list of) component(s) whose values should be updated based on the values returned by the function. Each return value gets sets the corresponding component\u2019s value, in order. This parameter can be None if the function does not return anything."),ko=u(),Ce=a("p"),Ws=n("You can even make the input and output component be the same component, as we do in this example that uses a GPT model to do text completion:"),Eo=u(),j(_e.$$.fragment),jo=u(),w=a("iframe"),$o=u(),z=a("h3"),te=a("a"),Nt=a("span"),j(ke.$$.fragment),Js=u(),Mt=a("span"),Ks=n("Multistep Demos:"),To=u(),Se=a("p"),Qs=n("In some cases, you might want want a \u201Cmulti-step\u201D demo, in which you reuse the output of one function as the input to the next. This is really easy to do with Blocks, as you can use a component for the input of one event trigger but the output of another. Take a look at the text component in the example below, its value is the result of a speech-to-text model, but also gets passed into a sentiment analysis model:"),Io=u(),j(Ee.$$.fragment),Bo=u(),g=a("iframe"),Po=u(),U=a("h3"),oe=a("a"),Rt=a("span"),j(je.$$.fragment),Vs=u(),Yt=a("span"),Xs=n("Updating Component Properties"),qo=u(),ae=a("p"),Zs=n("So far, we have seen how to create events to update the value of another component. But what happens if you want to change other properties of a component, like the visibility of a textbox or the choices in a radio button group? You can do this by returning a component class\u2019s "),Gt=a("code"),el=n("update()"),tl=n(" method instead of a regular return value from your function."),Ao=u(),De=a("p"),ol=n("This is most easily illustrated with an example:"),Co=u(),j($e.$$.fragment),So=u(),v=a("iframe"),Do=u(),d=a("p"),al=n("We just explored all the core concepts of "),Ht=a("code"),sl=n("Blocks"),ll=n("! Just like with "),zt=a("code"),nl=n("Interfaces"),il=n(", you can create cool demos that can be shared by using "),Ut=a("code"),rl=n("share=True"),pl=n(" in the "),Wt=a("code"),cl=n("launch()"),ul=n(" method or deployed on "),Te=a("a"),hl=n("Hugging Face Spaces"),dl=n("."),this.h()},l(e){const r=zn('[data-svelte="svelte-1phssyn"]',document.head);L=s(r,"META",{name:!0,content:!0}),r.forEach(o),Qt=h(e),F=s(e,"H1",{class:!0});var Fo=l(F);W=s(Fo,"A",{id:!0,class:!0,href:!0});var yl=l(W);He=s(yl,"SPAN",{});var xl=l(He);$(pe.$$.fragment,xl),xl.forEach(o),yl.forEach(o),Xo=h(Fo),ze=s(Fo,"SPAN",{});var _l=l(ze);Zo=i(_l,"Introduction to Gradio Blocks"),_l.forEach(o),Fo.forEach(o),Vt=h(e),b=s(e,"P",{});var se=l(b);ea=i(se,"In the previous sections we have explored and created demos using the "),Ue=s(se,"CODE",{});var kl=l(Ue);ta=i(kl,"Interface"),kl.forEach(o),oa=i(se," class. In this section we will introduce our "),We=s(se,"STRONG",{});var El=l(We);aa=i(El,"newly developed"),El.forEach(o),sa=i(se," low-level API called "),Je=s(se,"CODE",{});var jl=l(Je);la=i(jl,"gradio.Blocks"),jl.forEach(o),na=i(se,"."),se.forEach(o),Xt=h(e),q=s(e,"P",{});var Le=l(q);ia=i(Le,"Now, what\u2019s the difference between "),Ke=s(Le,"CODE",{});var $l=l(Ke);ra=i($l,"Interface"),$l.forEach(o),pa=i(Le," and "),Qe=s(Le,"CODE",{});var Tl=l(Qe);ca=i(Tl,"Blocks"),Tl.forEach(o),ua=i(Le,"?"),Le.forEach(o),Zt=h(e),J=s(e,"UL",{});var Oo=l(J);Ve=s(Oo,"LI",{});var Il=l(Ve);ce=s(Il,"P",{});var No=l(ce);ha=i(No,"\u26A1 "),Xe=s(No,"CODE",{});var Bl=l(Xe);da=i(Bl,"Interface"),Bl.forEach(o),fa=i(No,": a high-level API that allows you to create a full machine learning demo simply by providing a list of inputs and outputs."),No.forEach(o),Il.forEach(o),ma=h(Oo),Ze=s(Oo,"LI",{});var Pl=l(Ze);O=s(Pl,"P",{});var Fe=l(O);wa=i(Fe,"\u{1F9F1} "),et=s(Fe,"CODE",{});var ql=l(et);ga=i(ql,"Blocks"),ql.forEach(o),va=i(Fe,": a low-level API that allows you to have full control over the data flows and layout of your application. You can build very complex, multi-step applications using "),tt=s(Fe,"CODE",{});var Al=l(tt);ba=i(Al,"Blocks"),Al.forEach(o),ya=i(Fe," (as in \u201Cbuilding blocks\u201D)."),Fe.forEach(o),Pl.forEach(o),Oo.forEach(o),eo=h(e),N=s(e,"H3",{class:!0});var Mo=l(N);K=s(Mo,"A",{id:!0,class:!0,href:!0});var Cl=l(K);ot=s(Cl,"SPAN",{});var Sl=l(ot);$(ue.$$.fragment,Sl),Sl.forEach(o),Cl.forEach(o),xa=h(Mo),at=s(Mo,"SPAN",{});var Dl=l(at);_a=i(Dl,"Why Blocks \u{1F9F1}?"),Dl.forEach(o),Mo.forEach(o),to=h(e),y=s(e,"P",{});var le=l(y);ka=i(le,"As we saw in the previous sections, the "),st=s(le,"CODE",{});var Ll=l(st);Ea=i(Ll,"Interface"),Ll.forEach(o),ja=i(le," class allows you to easily create full-fledged machine learning demos with just a few lines of code. The "),lt=s(le,"CODE",{});var Fl=l(lt);$a=i(Fl,"Interface"),Fl.forEach(o),Ta=i(le," API is extremely easy to use but lacks the flexibility that the "),nt=s(le,"CODE",{});var Ol=l(nt);Ia=i(Ol,"Blocks"),Ol.forEach(o),Ba=i(le," API provides. For example, you might want to:"),le.forEach(o),oo=h(e),x=s(e,"UL",{});var ne=l(x);it=s(ne,"LI",{});var Nl=l(it);Pa=i(Nl,"Group together related demos as multiple tabs in one web app"),Nl.forEach(o),qa=h(ne),rt=s(ne,"LI",{});var Ml=l(rt);Aa=i(Ml,"Change the layout of your demo instead of having all of the inputs on the left and outputs on the right"),Ml.forEach(o),Ca=h(ne),pt=s(ne,"LI",{});var Rl=l(pt);Sa=i(Rl,"Have multi-step interfaces, in which the output of one model becomes the input to the next model, or have more flexible data flows in general"),Rl.forEach(o),Da=h(ne),ct=s(ne,"LI",{});var Yl=l(ct);La=i(Yl,"Change a component\u2019s properties (for example, the choices in a Dropdown) or its visibilty based on user input"),Yl.forEach(o),ne.forEach(o),ao=h(e),M=s(e,"H3",{class:!0});var Ro=l(M);Q=s(Ro,"A",{id:!0,class:!0,href:!0});var Gl=l(Q);ut=s(Gl,"SPAN",{});var Hl=l(ut);$(he.$$.fragment,Hl),Hl.forEach(o),Gl.forEach(o),Fa=h(Ro),ht=s(Ro,"SPAN",{});var zl=l(ht);Oa=i(zl,"Let's start by creating a simple example using Blocks:"),zl.forEach(o),Ro.forEach(o),so=h(e),Be=s(e,"P",{});var Ul=l(Be);Na=i(Ul,"After you have installed Gradio, run the code below as a Python script, in a Python notebook, or in a colab notebook."),Ul.forEach(o),lo=h(e),$(de.$$.fragment,e),no=h(e),f=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(f).forEach(o),io=h(e),Pe=s(e,"P",{});var Wl=l(Pe);Ma=i(Wl,"This simple example above introduces 4 concepts that underlie Blocks:"),Wl.forEach(o),ro=h(e),_=s(e,"OL",{});var ie=l(_);dt=s(ie,"LI",{});var Jl=l(dt);fe=s(Jl,"P",{});var Yo=l(fe);Ra=i(Yo,"Blocks allow you to build web applications that combine markdown, HTML, buttons, and interactive components simply by instantiating objects in Python inside of a "),ft=s(Yo,"CODE",{});var Kl=l(ft);Ya=i(Kl,"with gradio.Blocks"),Kl.forEach(o),Ga=i(Yo," context. The order in which you instantiate components matters as each element gets rendered into the web app in the order it was created. (More complex layouts are discussed below)"),Yo.forEach(o),Jl.forEach(o),Ha=h(ie),mt=s(ie,"LI",{});var Ql=l(mt);wt=s(Ql,"P",{});var Vl=l(wt);za=i(Vl,"You can define regular Python functions anywhere in your code and run them with user input using Blocks. In our example, we have a simple function that \u201Cflips\u201D the input text, but you can write any Python function, from a simple calculation to large machine learning model\u2019s inference."),Vl.forEach(o),Ql.forEach(o),Ua=h(ie),R=s(ie,"LI",{});var Oe=l(R);gt=s(Oe,"P",{});var Xl=l(gt);Wa=i(Xl,"You can assign events to any Blocks component. This will run your function when the component is clicked/changed/etc. When you assign an event, you pass in three parameters: fn: the function that should be called, inputs: the (list) of input component(s), and outputs: the (list) of output components that should be called."),Xl.forEach(o),Ja=h(Oe),Y=s(Oe,"P",{});var Ne=l(Y);Ka=i(Ne,"In the example above, we run the "),vt=s(Ne,"CODE",{});var Zl=l(vt);Qa=i(Zl,"flip_text()"),Zl.forEach(o),Va=i(Ne," function when the value in the Textbox named inp changes. The event reads the value in inp, passes it as the name parameter to "),bt=s(Ne,"CODE",{});var en=l(bt);Xa=i(en,"flip_text()"),en.forEach(o),Za=i(Ne,", which then returns a value that gets assigned to our second Textbox named out."),Ne.forEach(o),es=h(Oe),me=s(Oe,"P",{});var Go=l(me);ts=i(Go,"To see a list of events that each component supports, see the "),we=s(Go,"A",{href:!0,rel:!0});var tn=l(we);os=i(tn,"documentation"),tn.forEach(o),as=i(Go,"."),Go.forEach(o),Oe.forEach(o),ss=h(ie),yt=s(ie,"LI",{});var on=l(yt);ge=s(on,"P",{});var Ho=l(ge);ls=i(Ho,"Blocks automatically figures out whether a component should be interactive (accept user input) or not, based on the event triggers you define. In our example, the first textbox is interactive, since its value is used by the "),xt=s(Ho,"CODE",{});var an=l(xt);ns=i(an,"flip_text()"),an.forEach(o),is=i(Ho," function. The second textbox is not interactive, since its value is never used as an input. In some cases, you might want to override this, which you can do by passing the appropriate boolean to interactive, a parameter that every component accepts."),Ho.forEach(o),on.forEach(o),ie.forEach(o),po=h(e),G=s(e,"H3",{class:!0});var zo=l(G);V=s(zo,"A",{id:!0,class:!0,href:!0});var sn=l(V);_t=s(sn,"SPAN",{});var ln=l(_t);$(ve.$$.fragment,ln),ln.forEach(o),sn.forEach(o),rs=h(zo),kt=s(zo,"SPAN",{});var nn=l(kt);ps=i(nn,"Let's explore layouts:"),nn.forEach(o),zo.forEach(o),co=h(e),A=s(e,"P",{});var Me=l(A);cs=i(Me,"How can we use Blocks to customize the layout of our demo? By default, Blocks renders the components that you create vertically in one column. You can change that by creating additional columns "),Et=s(Me,"CODE",{});var rn=l(Et);us=i(rn,"with gradio.Column():"),rn.forEach(o),hs=i(Me," or rows "),jt=s(Me,"CODE",{});var pn=l(jt);ds=i(pn,"with gradio.Row():"),pn.forEach(o),fs=i(Me," and creating components within those contexts."),Me.forEach(o),uo=h(e),X=s(e,"P",{});var Uo=l(X);ms=i(Uo,"Here\u2019s what you should keep in mind: any components created under a Column (this is also the default) will be laid out vertically. Any component created under a Row will be laid out horizontally, similar to the "),be=s(Uo,"A",{href:!0,rel:!0});var cn=l(be);ws=i(cn,"flexbox model in web development"),cn.forEach(o),gs=i(Uo,"."),Uo.forEach(o),ho=h(e),k=s(e,"P",{});var re=l(k);vs=i(re,"Finally, you can also create a "),$t=s(re,"CODE",{});var un=l($t);bs=i(un,"with gradio.Tabs():"),un.forEach(o),ys=i(re," and within it create multiple "),Tt=s(re,"CODE",{});var hn=l(Tt);xs=i(hn,"with gradio.TabItem(name_of_tab):"),hn.forEach(o),_s=i(re," children. Any component created inside of a "),It=s(re,"CODE",{});var dn=l(It);ks=i(dn,"with gradio.TabItem(name_of_tab):"),dn.forEach(o),Es=i(re," context appears in that tab."),re.forEach(o),fo=h(e),Z=s(e,"P",{});var Wo=l(Z);js=i(Wo,"Now let\u2019s add to our original "),Bt=s(Wo,"CODE",{});var fn=l(Bt);$s=i(fn,"flip_text"),fn.forEach(o),Ts=i(Wo," demo and add a new tab that flips images. Below is an example with 2 tabs and also uses a Row:"),Wo.forEach(o),mo=h(e),$(ye.$$.fragment,e),wo=h(e),m=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(m).forEach(o),go=h(e),qe=s(e,"P",{});var mn=l(qe);Is=i(mn,"You\u2019ll notice that in this example, we\u2019ve also created a Button component in each tab, and we\u2019ve assigned a click event to each button, which is what actually runs the function."),mn.forEach(o),vo=h(e),H=s(e,"H3",{class:!0});var Jo=l(H);ee=s(Jo,"A",{id:!0,class:!0,href:!0});var wn=l(ee);Pt=s(wn,"SPAN",{});var gn=l(Pt);$(xe.$$.fragment,gn),gn.forEach(o),wn.forEach(o),Bs=h(Jo),qt=s(Jo,"SPAN",{});var vn=l(qt);Ps=i(vn,"Let's explore events:"),vn.forEach(o),Jo.forEach(o),bo=h(e),Ae=s(e,"P",{});var bn=l(Ae);qs=i(bn,"Just as you can control the layout, Blocks gives you fine-grained control over what events trigger function calls. Each component and many layouts have specific events that they support."),bn.forEach(o),yo=h(e),C=s(e,"P",{});var Re=l(C);As=i(Re,"For example, the Textbox component has 2 events: "),At=s(Re,"CODE",{});var yn=l(At);Cs=i(yn,"change()"),yn.forEach(o),Ss=i(Re," (when the value inside of the textbox changes), and "),Ct=s(Re,"CODE",{});var xn=l(Ct);Ds=i(xn,"submit()"),xn.forEach(o),Ls=i(Re," (when a user presses the enter key while focused on the textbox). More complex components can have even more events: for example, the Audio component also has separate events for when the audio file is played, cleared, paused, etc. See the documentation for the events each component supports."),Re.forEach(o),xo=h(e),S=s(e,"P",{});var Ye=l(S);Fs=i(Ye,"You can attach event trigger to none, one, or more of these events. You create an event trigger by calling the name of the event on the component instance as a function \u2014 e.g. "),St=s(Ye,"CODE",{});var _n=l(St);Os=i(_n,"textbox.change(...)"),_n.forEach(o),Ns=i(Ye," or "),Dt=s(Ye,"CODE",{});var kn=l(Dt);Ms=i(kn,"btn.click(...)"),kn.forEach(o),Rs=i(Ye,". The function takes in three parameters, as discussed above:"),Ye.forEach(o),_o=h(e),D=s(e,"UL",{});var Ge=l(D);Lt=s(Ge,"LI",{});var En=l(Lt);Ys=i(En,"fn: the function to run"),En.forEach(o),Gs=h(Ge),Ft=s(Ge,"LI",{});var jn=l(Ft);Hs=i(jn,"inputs: a (list of) component(s) whose values should supplied as the input parameters to the function. Each component\u2019s value gets mapped to the corresponding function parameter, in order. This parameter can be None if the function does not take any parameters."),jn.forEach(o),zs=h(Ge),Ot=s(Ge,"LI",{});var $n=l(Ot);Us=i($n,"outputs: a (list of) component(s) whose values should be updated based on the values returned by the function. Each return value gets sets the corresponding component\u2019s value, in order. This parameter can be None if the function does not return anything."),$n.forEach(o),Ge.forEach(o),ko=h(e),Ce=s(e,"P",{});var Tn=l(Ce);Ws=i(Tn,"You can even make the input and output component be the same component, as we do in this example that uses a GPT model to do text completion:"),Tn.forEach(o),Eo=h(e),$(_e.$$.fragment,e),jo=h(e),w=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(w).forEach(o),$o=h(e),z=s(e,"H3",{class:!0});var Ko=l(z);te=s(Ko,"A",{id:!0,class:!0,href:!0});var In=l(te);Nt=s(In,"SPAN",{});var Bn=l(Nt);$(ke.$$.fragment,Bn),Bn.forEach(o),In.forEach(o),Js=h(Ko),Mt=s(Ko,"SPAN",{});var Pn=l(Mt);Ks=i(Pn,"Multistep Demos:"),Pn.forEach(o),Ko.forEach(o),To=h(e),Se=s(e,"P",{});var qn=l(Se);Qs=i(qn,"In some cases, you might want want a \u201Cmulti-step\u201D demo, in which you reuse the output of one function as the input to the next. This is really easy to do with Blocks, as you can use a component for the input of one event trigger but the output of another. Take a look at the text component in the example below, its value is the result of a speech-to-text model, but also gets passed into a sentiment analysis model:"),qn.forEach(o),Io=h(e),$(Ee.$$.fragment,e),Bo=h(e),g=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(g).forEach(o),Po=h(e),U=s(e,"H3",{class:!0});var Qo=l(U);oe=s(Qo,"A",{id:!0,class:!0,href:!0});var An=l(oe);Rt=s(An,"SPAN",{});var Cn=l(Rt);$(je.$$.fragment,Cn),Cn.forEach(o),An.forEach(o),Vs=h(Qo),Yt=s(Qo,"SPAN",{});var Sn=l(Yt);Xs=i(Sn,"Updating Component Properties"),Sn.forEach(o),Qo.forEach(o),qo=h(e),ae=s(e,"P",{});var Vo=l(ae);Zs=i(Vo,"So far, we have seen how to create events to update the value of another component. But what happens if you want to change other properties of a component, like the visibility of a textbox or the choices in a radio button group? You can do this by returning a component class\u2019s "),Gt=s(Vo,"CODE",{});var Dn=l(Gt);el=i(Dn,"update()"),Dn.forEach(o),tl=i(Vo," method instead of a regular return value from your function."),Vo.forEach(o),Ao=h(e),De=s(e,"P",{});var Ln=l(De);ol=i(Ln,"This is most easily illustrated with an example:"),Ln.forEach(o),Co=h(e),$($e.$$.fragment,e),So=h(e),v=s(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),l(v).forEach(o),Do=h(e),d=s(e,"P",{});var E=l(d);al=i(E,"We just explored all the core concepts of "),Ht=s(E,"CODE",{});var Fn=l(Ht);sl=i(Fn,"Blocks"),Fn.forEach(o),ll=i(E,"! Just like with "),zt=s(E,"CODE",{});var On=l(zt);nl=i(On,"Interfaces"),On.forEach(o),il=i(E,", you can create cool demos that can be shared by using "),Ut=s(E,"CODE",{});var Nn=l(Ut);rl=i(Nn,"share=True"),Nn.forEach(o),pl=i(E," in the "),Wt=s(E,"CODE",{});var Mn=l(Wt);cl=i(Mn,"launch()"),Mn.forEach(o),ul=i(E," method or deployed on "),Te=s(E,"A",{href:!0,rel:!0});var Rn=l(Te);hl=i(Rn,"Hugging Face Spaces"),Rn.forEach(o),dl=i(E,"."),E.forEach(o),this.h()},h(){c(L,"name","hf:doc:metadata"),c(L,"content",JSON.stringify(Kn)),c(W,"id","introduction-to-gradio-blocks"),c(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(W,"href","#introduction-to-gradio-blocks"),c(F,"class","relative group"),c(K,"id","why-blocks"),c(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(K,"href","#why-blocks"),c(N,"class","relative group"),c(Q,"id","lets-start-by-creating-a-simple-example-using-blocks"),c(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Q,"href","#lets-start-by-creating-a-simple-example-using-blocks"),c(M,"class","relative group"),Jt(f.src,ml="https://hf.space/gradioiframe/course-demos/flip_text/+")||c(f,"src",ml),c(f,"frameborder","0"),c(f,"height","400"),c(f,"title","Gradio app"),c(f,"class","container p-0 flex-grow space-iframe"),c(f,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(f,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(we,"href","https://www.gradio.app/docs/"),c(we,"rel","nofollow"),c(V,"id","lets-explore-layouts"),c(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(V,"href","#lets-explore-layouts"),c(G,"class","relative group"),c(be,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"),c(be,"rel","nofollow"),Jt(m.src,wl="https://hf.space/gradioiframe/course-demos/flip_text_image/+")||c(m,"src",wl),c(m,"frameborder","0"),c(m,"height","450"),c(m,"title","Gradio app"),c(m,"class","container p-0 flex-grow space-iframe"),c(m,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(m,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(ee,"id","lets-explore-events"),c(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ee,"href","#lets-explore-events"),c(H,"class","relative group"),Jt(w.src,gl="https://hf.space/gradioiframe/course-demos/blocks_gpt/+")||c(w,"src",gl),c(w,"frameborder","0"),c(w,"height","300"),c(w,"title","Gradio app"),c(w,"class","container p-0 flex-grow space-iframe"),c(w,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(w,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(te,"id","multistep-demos"),c(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(te,"href","#multistep-demos"),c(z,"class","relative group"),Jt(g.src,vl="https://hf.space/gradioiframe/course-demos/blocks_multi_step/+")||c(g,"src",vl),c(g,"frameborder","0"),c(g,"height","550"),c(g,"title","Gradio app"),c(g,"class","container p-0 flex-grow space-iframe"),c(g,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(g,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(oe,"id","updating-component-properties"),c(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oe,"href","#updating-component-properties"),c(U,"class","relative group"),Jt(v.src,bl="https://hf.space/gradioiframe/course-demos/blocks_update_component_properties/+")||c(v,"src",bl),c(v,"frameborder","0"),c(v,"height","300"),c(v,"title","Gradio app"),c(v,"class","container p-0 flex-grow space-iframe"),c(v,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),c(v,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),c(Te,"href","https://huggingface.co/spaces"),c(Te,"rel","nofollow")},m(e,r){t(document.head,L),p(e,Qt,r),p(e,F,r),t(F,W),t(W,He),T(pe,He,null),t(F,Xo),t(F,ze),t(ze,Zo),p(e,Vt,r),p(e,b,r),t(b,ea),t(b,Ue),t(Ue,ta),t(b,oa),t(b,We),t(We,aa),t(b,sa),t(b,Je),t(Je,la),t(b,na),p(e,Xt,r),p(e,q,r),t(q,ia),t(q,Ke),t(Ke,ra),t(q,pa),t(q,Qe),t(Qe,ca),t(q,ua),p(e,Zt,r),p(e,J,r),t(J,Ve),t(Ve,ce),t(ce,ha),t(ce,Xe),t(Xe,da),t(ce,fa),t(J,ma),t(J,Ze),t(Ze,O),t(O,wa),t(O,et),t(et,ga),t(O,va),t(O,tt),t(tt,ba),t(O,ya),p(e,eo,r),p(e,N,r),t(N,K),t(K,ot),T(ue,ot,null),t(N,xa),t(N,at),t(at,_a),p(e,to,r),p(e,y,r),t(y,ka),t(y,st),t(st,Ea),t(y,ja),t(y,lt),t(lt,$a),t(y,Ta),t(y,nt),t(nt,Ia),t(y,Ba),p(e,oo,r),p(e,x,r),t(x,it),t(it,Pa),t(x,qa),t(x,rt),t(rt,Aa),t(x,Ca),t(x,pt),t(pt,Sa),t(x,Da),t(x,ct),t(ct,La),p(e,ao,r),p(e,M,r),t(M,Q),t(Q,ut),T(he,ut,null),t(M,Fa),t(M,ht),t(ht,Oa),p(e,so,r),p(e,Be,r),t(Be,Na),p(e,lo,r),T(de,e,r),p(e,no,r),p(e,f,r),p(e,io,r),p(e,Pe,r),t(Pe,Ma),p(e,ro,r),p(e,_,r),t(_,dt),t(dt,fe),t(fe,Ra),t(fe,ft),t(ft,Ya),t(fe,Ga),t(_,Ha),t(_,mt),t(mt,wt),t(wt,za),t(_,Ua),t(_,R),t(R,gt),t(gt,Wa),t(R,Ja),t(R,Y),t(Y,Ka),t(Y,vt),t(vt,Qa),t(Y,Va),t(Y,bt),t(bt,Xa),t(Y,Za),t(R,es),t(R,me),t(me,ts),t(me,we),t(we,os),t(me,as),t(_,ss),t(_,yt),t(yt,ge),t(ge,ls),t(ge,xt),t(xt,ns),t(ge,is),p(e,po,r),p(e,G,r),t(G,V),t(V,_t),T(ve,_t,null),t(G,rs),t(G,kt),t(kt,ps),p(e,co,r),p(e,A,r),t(A,cs),t(A,Et),t(Et,us),t(A,hs),t(A,jt),t(jt,ds),t(A,fs),p(e,uo,r),p(e,X,r),t(X,ms),t(X,be),t(be,ws),t(X,gs),p(e,ho,r),p(e,k,r),t(k,vs),t(k,$t),t($t,bs),t(k,ys),t(k,Tt),t(Tt,xs),t(k,_s),t(k,It),t(It,ks),t(k,Es),p(e,fo,r),p(e,Z,r),t(Z,js),t(Z,Bt),t(Bt,$s),t(Z,Ts),p(e,mo,r),T(ye,e,r),p(e,wo,r),p(e,m,r),p(e,go,r),p(e,qe,r),t(qe,Is),p(e,vo,r),p(e,H,r),t(H,ee),t(ee,Pt),T(xe,Pt,null),t(H,Bs),t(H,qt),t(qt,Ps),p(e,bo,r),p(e,Ae,r),t(Ae,qs),p(e,yo,r),p(e,C,r),t(C,As),t(C,At),t(At,Cs),t(C,Ss),t(C,Ct),t(Ct,Ds),t(C,Ls),p(e,xo,r),p(e,S,r),t(S,Fs),t(S,St),t(St,Os),t(S,Ns),t(S,Dt),t(Dt,Ms),t(S,Rs),p(e,_o,r),p(e,D,r),t(D,Lt),t(Lt,Ys),t(D,Gs),t(D,Ft),t(Ft,Hs),t(D,zs),t(D,Ot),t(Ot,Us),p(e,ko,r),p(e,Ce,r),t(Ce,Ws),p(e,Eo,r),T(_e,e,r),p(e,jo,r),p(e,w,r),p(e,$o,r),p(e,z,r),t(z,te),t(te,Nt),T(ke,Nt,null),t(z,Js),t(z,Mt),t(Mt,Ks),p(e,To,r),p(e,Se,r),t(Se,Qs),p(e,Io,r),T(Ee,e,r),p(e,Bo,r),p(e,g,r),p(e,Po,r),p(e,U,r),t(U,oe),t(oe,Rt),T(je,Rt,null),t(U,Vs),t(U,Yt),t(Yt,Xs),p(e,qo,r),p(e,ae,r),t(ae,Zs),t(ae,Gt),t(Gt,el),t(ae,tl),p(e,Ao,r),p(e,De,r),t(De,ol),p(e,Co,r),T($e,e,r),p(e,So,r),p(e,v,r),p(e,Do,r),p(e,d,r),t(d,al),t(d,Ht),t(Ht,sl),t(d,ll),t(d,zt),t(zt,nl),t(d,il),t(d,Ut),t(Ut,rl),t(d,pl),t(d,Wt),t(Wt,cl),t(d,ul),t(d,Te),t(Te,hl),t(d,dl),Lo=!0},p:Un,i(e){Lo||(I(pe.$$.fragment,e),I(ue.$$.fragment,e),I(he.$$.fragment,e),I(de.$$.fragment,e),I(ve.$$.fragment,e),I(ye.$$.fragment,e),I(xe.$$.fragment,e),I(_e.$$.fragment,e),I(ke.$$.fragment,e),I(Ee.$$.fragment,e),I(je.$$.fragment,e),I($e.$$.fragment,e),Lo=!0)},o(e){B(pe.$$.fragment,e),B(ue.$$.fragment,e),B(he.$$.fragment,e),B(de.$$.fragment,e),B(ve.$$.fragment,e),B(ye.$$.fragment,e),B(xe.$$.fragment,e),B(_e.$$.fragment,e),B(ke.$$.fragment,e),B(Ee.$$.fragment,e),B(je.$$.fragment,e),B($e.$$.fragment,e),Lo=!1},d(e){o(L),e&&o(Qt),e&&o(F),P(pe),e&&o(Vt),e&&o(b),e&&o(Xt),e&&o(q),e&&o(Zt),e&&o(J),e&&o(eo),e&&o(N),P(ue),e&&o(to),e&&o(y),e&&o(oo),e&&o(x),e&&o(ao),e&&o(M),P(he),e&&o(so),e&&o(Be),e&&o(lo),P(de,e),e&&o(no),e&&o(f),e&&o(io),e&&o(Pe),e&&o(ro),e&&o(_),e&&o(po),e&&o(G),P(ve),e&&o(co),e&&o(A),e&&o(uo),e&&o(X),e&&o(ho),e&&o(k),e&&o(fo),e&&o(Z),e&&o(mo),P(ye,e),e&&o(wo),e&&o(m),e&&o(go),e&&o(qe),e&&o(vo),e&&o(H),P(xe),e&&o(bo),e&&o(Ae),e&&o(yo),e&&o(C),e&&o(xo),e&&o(S),e&&o(_o),e&&o(D),e&&o(ko),e&&o(Ce),e&&o(Eo),P(_e,e),e&&o(jo),e&&o(w),e&&o($o),e&&o(z),P(ke),e&&o(To),e&&o(Se),e&&o(Io),P(Ee,e),e&&o(Bo),e&&o(g),e&&o(Po),e&&o(U),P(je),e&&o(qo),e&&o(ae),e&&o(Ao),e&&o(De),e&&o(Co),P($e,e),e&&o(So),e&&o(v),e&&o(Do),e&&o(d)}}}const Kn={local:"introduction-to-gradio-blocks",sections:[{local:"why-blocks",title:"Why Blocks \u{1F9F1}?"},{local:"lets-start-by-creating-a-simple-example-using-blocks",title:"Let's start by creating a simple example using Blocks:"},{local:"lets-explore-layouts",title:"Let's explore layouts:"},{local:"lets-explore-events",title:"Let's explore events:"},{local:"multistep-demos",title:"Multistep Demos:"},{local:"updating-component-properties",title:"Updating Component Properties"}],title:"Introduction to Gradio Blocks"};function Qn(fl){return Wn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ei extends Yn{constructor(L){super();Gn(this,L,Qn,Jn,Hn,{})}}export{ei as default,Kn as metadata};
