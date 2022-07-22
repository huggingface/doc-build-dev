import{S as so,i as lo,s as io,e as l,k as p,w as d,t as r,M as no,c as i,d as t,m as u,a as c,x as _,h as s,b as y,G as a,g as n,y as g,q as $,o as v,B as w,v as co}from"../../chunks/vendor-hf-doc-builder.js";import{T as ro}from"../../chunks/Tip-hf-doc-builder.js";import{I as Aa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as U}from"../../chunks/CodeBlock-hf-doc-builder.js";function po(ie){let f,b,h,m,I,E,Y;return{c(){f=l("p"),b=r("If you are familiar with launching scripts in PyTorch yourself such as with "),h=l("code"),m=r("torchrun"),I=r(", you can still do this. It is not required to use "),E=l("code"),Y=r("accelerate launch")},l(A){f=i(A,"P",{});var C=c(f);b=s(C,"If you are familiar with launching scripts in PyTorch yourself such as with "),h=i(C,"CODE",{});var J=c(h);m=s(J,"torchrun"),J.forEach(t),I=s(C,", you can still do this. It is not required to use "),E=i(C,"CODE",{});var O=c(E);Y=s(O,"accelerate launch"),O.forEach(t),C.forEach(t)},m(A,C){n(A,f,C),a(f,b),a(f,h),a(h,m),a(f,I),a(f,E),a(E,Y)},d(A){A&&t(f)}}}function uo(ie){let f,b;return{c(){f=l("p"),b=r("Even if you are not using \u{1F917} Accelerate in your code, you can still use the launcher for starting your scripts!")},l(h){f=i(h,"P",{});var m=c(f);b=s(m,"Even if you are not using \u{1F917} Accelerate in your code, you can still use the launcher for starting your scripts!"),m.forEach(t)},m(h,m){n(h,f,m),a(f,b)},d(h){h&&t(f)}}}function fo(ie){let f,b,h,m,I,E,Y,A,C,J,O,bt,qe,X,Me,ne,kt,Ne,ce,At,Be,R,Ve,S,Ct,ve,xt,Pt,Ye,D,H,we,K,jt,Ee,It,Je,G,Ot,be,Dt,zt,Xe,F,Re,pe,Tt,Ke,Q,Qe,q,Lt,ke,Ut,St,We,M,Ht,Ae,Gt,Ft,Ze,W,et,x,qt,Ce,Mt,Nt,xe,Bt,Vt,tt,Z,at,ue,Yt,ot,ee,rt,fe,Jt,st,te,lt,N,it,z,B,Pe,ae,Xt,je,Rt,nt,k,Kt,Ie,Qt,Wt,Oe,Zt,ea,De,ta,aa,ct,P,T,oa,ze,ra,sa,Te,la,ia,na,L,ca,Le,pa,ua,Ue,fa,ha,ma,oe,da,Se,_a,ya,pt,j,ga,He,$a,va,Ge,wa,Ea,ut,he,ba,ft,re,ht,me,ka,mt,se,dt;return E=new Aa({}),X=new U({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()

model, optimizer, training_dataloader, scheduler = accelerator.prepare(
    model, optimizer, training_dataloader, scheduler
)

for batch in training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    accelerator.backward(loss)
    optimizer.step()
    scheduler.step()`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator()

model, optimizer, training_dataloader, scheduler = accelerator.prepare(
    model, optimizer, training_dataloader, scheduler
)

<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    accelerator.backward(loss)
    optimizer.step()
    scheduler.step()`}}),R=new U({props:{code:`  from accelerate import Accelerator
  
+ def main():

    accelerator = Accelerator()

    model, optimizer, training_dataloader, scheduler = accelerator.prepare(
        model, optimizer, training_dataloader, scheduler
    )

    for batch in training_dataloader:
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)
        loss = loss_function(outputs, targets)
        accelerator.backward(loss)
        optimizer.step()
        scheduler.step()

+ if __name__ == "__main__":
+   main()`,highlighted:`  from accelerate import Accelerator
  
<span class="hljs-addition">+ def main():</span>

    accelerator = Accelerator()

    model, optimizer, training_dataloader, scheduler = accelerator.prepare(
        model, optimizer, training_dataloader, scheduler
    )

    for batch in training_dataloader:
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)
        loss = loss_function(outputs, targets)
        accelerator.backward(loss)
        optimizer.step()
        scheduler.step()

<span class="hljs-addition">+ if __name__ == &quot;__main__&quot;:</span>
<span class="hljs-addition">+   main()</span>`}}),K=new Aa({}),F=new ro({props:{$$slots:{default:[po]},$$scope:{ctx:ie}}}),Q=new U({props:{code:"accelerate launch {script_name.py} --arg1 --arg2 ...",highlighted:"accelerate launch {script_name.py} --arg1 --arg2 ..."}}),W=new U({props:{code:'CUDA_VISIBLE_DEVICES="0" accelerate launch {script_name.py} --arg1 --arg2 ...',highlighted:'CUDA_VISIBLE_DEVICES=<span class="hljs-string">&quot;0&quot;</span> accelerate launch {script_name.py} --arg1 --arg2 ...'}}),Z=new U({props:{code:"accelerate launch --multi_gpu {script_name.py} --arg1 --arg2 ...",highlighted:"accelerate launch --multi_gpu {script_name.py} --arg1 --arg2 ..."}}),ee=new U({props:{code:"accelerate launch --multi_gpu --mixed_precision=fp16 --num_processes=2 {script_name.py} --arg1 --arg2 ...",highlighted:"accelerate launch --multi_gpu --mixed_precision=fp16 --num_processes=2 {script_name.py} --arg1 --arg2 ..."}}),te=new U({props:{code:"accelerate launch -h",highlighted:"accelerate launch -h"}}),N=new ro({props:{$$slots:{default:[uo]},$$scope:{ctx:ie}}}),ae=new Aa({}),re=new U({props:{code:`compute_environment: LOCAL_MACHINE
deepspeed_config: {}
distributed_type: MULTI_GPU
fsdp_config: {}
machine_rank: 0
main_process_ip: null
main_process_port: null
main_training_function: main
mixed_precision: fp16
num_machines: 1
num_processes: 1
use_cpu: false`,highlighted:`<span class="hljs-attr">compute_environment:</span> <span class="hljs-string">LOCAL_MACHINE</span>
<span class="hljs-attr">deepspeed_config:</span> {}
<span class="hljs-attr">distributed_type:</span> <span class="hljs-string">MULTI_GPU</span>
<span class="hljs-attr">fsdp_config:</span> {}
<span class="hljs-attr">machine_rank:</span> <span class="hljs-number">0</span>
<span class="hljs-attr">main_process_ip:</span> <span class="hljs-literal">null</span>
<span class="hljs-attr">main_process_port:</span> <span class="hljs-literal">null</span>
<span class="hljs-attr">main_training_function:</span> <span class="hljs-string">main</span>
<span class="hljs-attr">mixed_precision:</span> <span class="hljs-string">fp16</span>
<span class="hljs-attr">num_machines:</span> <span class="hljs-number">1</span>
<span class="hljs-attr">num_processes:</span> <span class="hljs-number">1</span>
<span class="hljs-attr">use_cpu:</span> <span class="hljs-literal">false</span>`}}),se=new U({props:{code:"accelerate launch --config_file path/to/config/my_config_file.yaml path_to_script.py --args_for_the_script",highlighted:"accelerate launch --config_file path/to/config/my_config_file.yaml path_to_script.py --args_for_the_script"}}),{c(){f=l("meta"),b=p(),h=l("h1"),m=l("a"),I=l("span"),d(E.$$.fragment),Y=p(),A=l("span"),C=r("Launching your \u{1F917} Accelerate scripts"),J=p(),O=l("p"),bt=r(`In the previous tutorial, you were introduced to how to modify your current training script to use \u{1F917} Accelerate.
The final version of that code is shown below:`),qe=p(),d(X.$$.fragment),Me=p(),ne=l("p"),kt=r("But how do you run this code and have it utilize the special hardware available to it?"),Ne=p(),ce=l("p"),At=r("First you should rewrite the above code into a function, and make it callable as a script. For example:"),Be=p(),d(R.$$.fragment),Ve=p(),S=l("p"),Ct=r("Next you need to launch it with "),ve=l("code"),xt=r("accelerate launch"),Pt=r("."),Ye=p(),D=l("h2"),H=l("a"),we=l("span"),d(K.$$.fragment),jt=p(),Ee=l("span"),It=r("Using accelerate launch"),Je=p(),G=l("p"),Ot=r("\u{1F917} Accelerate has a special CLI command to help you launch your code in your system through "),be=l("code"),Dt=r("accelerate launch"),zt=r(`.
This command wraps around all of the different commands needed to launch your script on various platforms, without you
having to remember what each of them are.`),Xe=p(),d(F.$$.fragment),Re=p(),pe=l("p"),Tt=r("You can launch your script quickly by using:"),Ke=p(),d(Q.$$.fragment),Qe=p(),q=l("p"),Lt=r("Just put "),ke=l("code"),Ut=r("accelerate launch"),St=r(" at the start of your command, and pass in additional arguments and parameters to your script afterwards like normal!"),We=p(),M=l("p"),Ht=r(`Since this runs the various torch spawn methods, all of the expected environment variables can be modified here as well.
For example, here is how to use `),Ae=l("code"),Gt=r("accelerate launch"),Ft=r(" with a single GPU:"),Ze=p(),d(W.$$.fragment),et=p(),x=l("p"),qt=r("You can also use "),Ce=l("code"),Mt=r("accelerate launch"),Nt=r(" without performing "),xe=l("code"),Bt=r("accelerate config"),Vt=r(` first, but you may need to manually pass in the right configuration parameters.
In this case, \u{1F917} Accelerate will make some hyperparameter decisions for you, such as if a GPU is available, it will use all of them by default, and no mixed precision will be used.
Here is how you would use all GPUs and train on no mixed precision:`),tt=p(),d(Z.$$.fragment),at=p(),ue=l("p"),Yt=r(`To get more specific you should pass in the needed parameters yourself. For instance, here is how you
would also launch that same script on two GPUs using mixed precision while avoiding all of the warnings:`),ot=p(),d(ee.$$.fragment),rt=p(),fe=l("p"),Jt=r("For a complete list of parameters you can pass in, run:"),st=p(),d(te.$$.fragment),lt=p(),d(N.$$.fragment),it=p(),z=l("h2"),B=l("a"),Pe=l("span"),d(ae.$$.fragment),Xt=p(),je=l("span"),Rt=r("Custom Configurations"),nt=p(),k=l("p"),Kt=r("As briefly mentioned earlier, "),Ie=l("code"),Qt=r("accelerate launch"),Wt=r(` should be mostly used through combining set configurations
made with the `),Oe=l("code"),Zt=r("accelerate config"),ea=r(" command. These configs are saved to a "),De=l("code"),ta=r("default_config.yaml"),aa=r(` file in your cache folder for \u{1F917} Accelerate.
This cache folder is located at (with decreasing order of priority):`),ct=p(),P=l("ul"),T=l("li"),oa=r("The content of your environment variable "),ze=l("code"),ra=r("HF_HOME"),sa=r(" suffixed with "),Te=l("code"),la=r("accelerate"),ia=r("."),na=p(),L=l("li"),ca=r("If it does not exist, the content of your environment variable "),Le=l("code"),pa=r("XDG_CACHE_HOME"),ua=r(` suffixed with
`),Ue=l("code"),fa=r("huggingface/accelerate"),ha=r("."),ma=p(),oe=l("li"),da=r("If this does not exist either, the folder "),Se=l("code"),_a=r("~/.cache/huggingface/accelerate"),ya=r("."),pt=p(),j=l("p"),ga=r("To have multiple configurations, the flag "),He=l("code"),$a=r("--config_file"),va=r(" can be passed to the "),Ge=l("code"),wa=r("accelerate launch"),Ea=r(` command paired
with the location of the custom yaml.`),ut=p(),he=l("p"),ba=r("An example yaml may look something like the following:"),ft=p(),d(re.$$.fragment),ht=p(),me=l("p"),ka=r("An example of launching a script with a yaml located in a custom location would look something like so:"),mt=p(),d(se.$$.fragment),this.h()},l(e){const o=no('[data-svelte="svelte-1phssyn"]',document.head);f=i(o,"META",{name:!0,content:!0}),o.forEach(t),b=u(e),h=i(e,"H1",{class:!0});var le=c(h);m=i(le,"A",{id:!0,class:!0,href:!0});var Fe=c(m);I=i(Fe,"SPAN",{});var Ca=c(I);_(E.$$.fragment,Ca),Ca.forEach(t),Fe.forEach(t),Y=u(le),A=i(le,"SPAN",{});var xa=c(A);C=s(xa,"Launching your \u{1F917} Accelerate scripts"),xa.forEach(t),le.forEach(t),J=u(e),O=i(e,"P",{});var Pa=c(O);bt=s(Pa,`In the previous tutorial, you were introduced to how to modify your current training script to use \u{1F917} Accelerate.
The final version of that code is shown below:`),Pa.forEach(t),qe=u(e),_(X.$$.fragment,e),Me=u(e),ne=i(e,"P",{});var ja=c(ne);kt=s(ja,"But how do you run this code and have it utilize the special hardware available to it?"),ja.forEach(t),Ne=u(e),ce=i(e,"P",{});var Ia=c(ce);At=s(Ia,"First you should rewrite the above code into a function, and make it callable as a script. For example:"),Ia.forEach(t),Be=u(e),_(R.$$.fragment,e),Ve=u(e),S=i(e,"P",{});var _t=c(S);Ct=s(_t,"Next you need to launch it with "),ve=i(_t,"CODE",{});var Oa=c(ve);xt=s(Oa,"accelerate launch"),Oa.forEach(t),Pt=s(_t,"."),_t.forEach(t),Ye=u(e),D=i(e,"H2",{class:!0});var yt=c(D);H=i(yt,"A",{id:!0,class:!0,href:!0});var Da=c(H);we=i(Da,"SPAN",{});var za=c(we);_(K.$$.fragment,za),za.forEach(t),Da.forEach(t),jt=u(yt),Ee=i(yt,"SPAN",{});var Ta=c(Ee);It=s(Ta,"Using accelerate launch"),Ta.forEach(t),yt.forEach(t),Je=u(e),G=i(e,"P",{});var gt=c(G);Ot=s(gt,"\u{1F917} Accelerate has a special CLI command to help you launch your code in your system through "),be=i(gt,"CODE",{});var La=c(be);Dt=s(La,"accelerate launch"),La.forEach(t),zt=s(gt,`.
This command wraps around all of the different commands needed to launch your script on various platforms, without you
having to remember what each of them are.`),gt.forEach(t),Xe=u(e),_(F.$$.fragment,e),Re=u(e),pe=i(e,"P",{});var Ua=c(pe);Tt=s(Ua,"You can launch your script quickly by using:"),Ua.forEach(t),Ke=u(e),_(Q.$$.fragment,e),Qe=u(e),q=i(e,"P",{});var $t=c(q);Lt=s($t,"Just put "),ke=i($t,"CODE",{});var Sa=c(ke);Ut=s(Sa,"accelerate launch"),Sa.forEach(t),St=s($t," at the start of your command, and pass in additional arguments and parameters to your script afterwards like normal!"),$t.forEach(t),We=u(e),M=i(e,"P",{});var vt=c(M);Ht=s(vt,`Since this runs the various torch spawn methods, all of the expected environment variables can be modified here as well.
For example, here is how to use `),Ae=i(vt,"CODE",{});var Ha=c(Ae);Gt=s(Ha,"accelerate launch"),Ha.forEach(t),Ft=s(vt," with a single GPU:"),vt.forEach(t),Ze=u(e),_(W.$$.fragment,e),et=u(e),x=i(e,"P",{});var de=c(x);qt=s(de,"You can also use "),Ce=i(de,"CODE",{});var Ga=c(Ce);Mt=s(Ga,"accelerate launch"),Ga.forEach(t),Nt=s(de," without performing "),xe=i(de,"CODE",{});var Fa=c(xe);Bt=s(Fa,"accelerate config"),Fa.forEach(t),Vt=s(de,` first, but you may need to manually pass in the right configuration parameters.
In this case, \u{1F917} Accelerate will make some hyperparameter decisions for you, such as if a GPU is available, it will use all of them by default, and no mixed precision will be used.
Here is how you would use all GPUs and train on no mixed precision:`),de.forEach(t),tt=u(e),_(Z.$$.fragment,e),at=u(e),ue=i(e,"P",{});var qa=c(ue);Yt=s(qa,`To get more specific you should pass in the needed parameters yourself. For instance, here is how you
would also launch that same script on two GPUs using mixed precision while avoiding all of the warnings:`),qa.forEach(t),ot=u(e),_(ee.$$.fragment,e),rt=u(e),fe=i(e,"P",{});var Ma=c(fe);Jt=s(Ma,"For a complete list of parameters you can pass in, run:"),Ma.forEach(t),st=u(e),_(te.$$.fragment,e),lt=u(e),_(N.$$.fragment,e),it=u(e),z=i(e,"H2",{class:!0});var wt=c(z);B=i(wt,"A",{id:!0,class:!0,href:!0});var Na=c(B);Pe=i(Na,"SPAN",{});var Ba=c(Pe);_(ae.$$.fragment,Ba),Ba.forEach(t),Na.forEach(t),Xt=u(wt),je=i(wt,"SPAN",{});var Va=c(je);Rt=s(Va,"Custom Configurations"),Va.forEach(t),wt.forEach(t),nt=u(e),k=i(e,"P",{});var V=c(k);Kt=s(V,"As briefly mentioned earlier, "),Ie=i(V,"CODE",{});var Ya=c(Ie);Qt=s(Ya,"accelerate launch"),Ya.forEach(t),Wt=s(V,` should be mostly used through combining set configurations
made with the `),Oe=i(V,"CODE",{});var Ja=c(Oe);Zt=s(Ja,"accelerate config"),Ja.forEach(t),ea=s(V," command. These configs are saved to a "),De=i(V,"CODE",{});var Xa=c(De);ta=s(Xa,"default_config.yaml"),Xa.forEach(t),aa=s(V,` file in your cache folder for \u{1F917} Accelerate.
This cache folder is located at (with decreasing order of priority):`),V.forEach(t),ct=u(e),P=i(e,"UL",{});var _e=c(P);T=i(_e,"LI",{});var ye=c(T);oa=s(ye,"The content of your environment variable "),ze=i(ye,"CODE",{});var Ra=c(ze);ra=s(Ra,"HF_HOME"),Ra.forEach(t),sa=s(ye," suffixed with "),Te=i(ye,"CODE",{});var Ka=c(Te);la=s(Ka,"accelerate"),Ka.forEach(t),ia=s(ye,"."),ye.forEach(t),na=u(_e),L=i(_e,"LI",{});var ge=c(L);ca=s(ge,"If it does not exist, the content of your environment variable "),Le=i(ge,"CODE",{});var Qa=c(Le);pa=s(Qa,"XDG_CACHE_HOME"),Qa.forEach(t),ua=s(ge,` suffixed with
`),Ue=i(ge,"CODE",{});var Wa=c(Ue);fa=s(Wa,"huggingface/accelerate"),Wa.forEach(t),ha=s(ge,"."),ge.forEach(t),ma=u(_e),oe=i(_e,"LI",{});var Et=c(oe);da=s(Et,"If this does not exist either, the folder "),Se=i(Et,"CODE",{});var Za=c(Se);_a=s(Za,"~/.cache/huggingface/accelerate"),Za.forEach(t),ya=s(Et,"."),Et.forEach(t),_e.forEach(t),pt=u(e),j=i(e,"P",{});var $e=c(j);ga=s($e,"To have multiple configurations, the flag "),He=i($e,"CODE",{});var eo=c(He);$a=s(eo,"--config_file"),eo.forEach(t),va=s($e," can be passed to the "),Ge=i($e,"CODE",{});var to=c(Ge);wa=s(to,"accelerate launch"),to.forEach(t),Ea=s($e,` command paired
with the location of the custom yaml.`),$e.forEach(t),ut=u(e),he=i(e,"P",{});var ao=c(he);ba=s(ao,"An example yaml may look something like the following:"),ao.forEach(t),ft=u(e),_(re.$$.fragment,e),ht=u(e),me=i(e,"P",{});var oo=c(me);ka=s(oo,"An example of launching a script with a yaml located in a custom location would look something like so:"),oo.forEach(t),mt=u(e),_(se.$$.fragment,e),this.h()},h(){y(f,"name","hf:doc:metadata"),y(f,"content",JSON.stringify(ho)),y(m,"id","launching-your-accelerate-scripts"),y(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(m,"href","#launching-your-accelerate-scripts"),y(h,"class","relative group"),y(H,"id","using-accelerate-launch"),y(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(H,"href","#using-accelerate-launch"),y(D,"class","relative group"),y(B,"id","custom-configurations"),y(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),y(B,"href","#custom-configurations"),y(z,"class","relative group")},m(e,o){a(document.head,f),n(e,b,o),n(e,h,o),a(h,m),a(m,I),g(E,I,null),a(h,Y),a(h,A),a(A,C),n(e,J,o),n(e,O,o),a(O,bt),n(e,qe,o),g(X,e,o),n(e,Me,o),n(e,ne,o),a(ne,kt),n(e,Ne,o),n(e,ce,o),a(ce,At),n(e,Be,o),g(R,e,o),n(e,Ve,o),n(e,S,o),a(S,Ct),a(S,ve),a(ve,xt),a(S,Pt),n(e,Ye,o),n(e,D,o),a(D,H),a(H,we),g(K,we,null),a(D,jt),a(D,Ee),a(Ee,It),n(e,Je,o),n(e,G,o),a(G,Ot),a(G,be),a(be,Dt),a(G,zt),n(e,Xe,o),g(F,e,o),n(e,Re,o),n(e,pe,o),a(pe,Tt),n(e,Ke,o),g(Q,e,o),n(e,Qe,o),n(e,q,o),a(q,Lt),a(q,ke),a(ke,Ut),a(q,St),n(e,We,o),n(e,M,o),a(M,Ht),a(M,Ae),a(Ae,Gt),a(M,Ft),n(e,Ze,o),g(W,e,o),n(e,et,o),n(e,x,o),a(x,qt),a(x,Ce),a(Ce,Mt),a(x,Nt),a(x,xe),a(xe,Bt),a(x,Vt),n(e,tt,o),g(Z,e,o),n(e,at,o),n(e,ue,o),a(ue,Yt),n(e,ot,o),g(ee,e,o),n(e,rt,o),n(e,fe,o),a(fe,Jt),n(e,st,o),g(te,e,o),n(e,lt,o),g(N,e,o),n(e,it,o),n(e,z,o),a(z,B),a(B,Pe),g(ae,Pe,null),a(z,Xt),a(z,je),a(je,Rt),n(e,nt,o),n(e,k,o),a(k,Kt),a(k,Ie),a(Ie,Qt),a(k,Wt),a(k,Oe),a(Oe,Zt),a(k,ea),a(k,De),a(De,ta),a(k,aa),n(e,ct,o),n(e,P,o),a(P,T),a(T,oa),a(T,ze),a(ze,ra),a(T,sa),a(T,Te),a(Te,la),a(T,ia),a(P,na),a(P,L),a(L,ca),a(L,Le),a(Le,pa),a(L,ua),a(L,Ue),a(Ue,fa),a(L,ha),a(P,ma),a(P,oe),a(oe,da),a(oe,Se),a(Se,_a),a(oe,ya),n(e,pt,o),n(e,j,o),a(j,ga),a(j,He),a(He,$a),a(j,va),a(j,Ge),a(Ge,wa),a(j,Ea),n(e,ut,o),n(e,he,o),a(he,ba),n(e,ft,o),g(re,e,o),n(e,ht,o),n(e,me,o),a(me,ka),n(e,mt,o),g(se,e,o),dt=!0},p(e,[o]){const le={};o&2&&(le.$$scope={dirty:o,ctx:e}),F.$set(le);const Fe={};o&2&&(Fe.$$scope={dirty:o,ctx:e}),N.$set(Fe)},i(e){dt||($(E.$$.fragment,e),$(X.$$.fragment,e),$(R.$$.fragment,e),$(K.$$.fragment,e),$(F.$$.fragment,e),$(Q.$$.fragment,e),$(W.$$.fragment,e),$(Z.$$.fragment,e),$(ee.$$.fragment,e),$(te.$$.fragment,e),$(N.$$.fragment,e),$(ae.$$.fragment,e),$(re.$$.fragment,e),$(se.$$.fragment,e),dt=!0)},o(e){v(E.$$.fragment,e),v(X.$$.fragment,e),v(R.$$.fragment,e),v(K.$$.fragment,e),v(F.$$.fragment,e),v(Q.$$.fragment,e),v(W.$$.fragment,e),v(Z.$$.fragment,e),v(ee.$$.fragment,e),v(te.$$.fragment,e),v(N.$$.fragment,e),v(ae.$$.fragment,e),v(re.$$.fragment,e),v(se.$$.fragment,e),dt=!1},d(e){t(f),e&&t(b),e&&t(h),w(E),e&&t(J),e&&t(O),e&&t(qe),w(X,e),e&&t(Me),e&&t(ne),e&&t(Ne),e&&t(ce),e&&t(Be),w(R,e),e&&t(Ve),e&&t(S),e&&t(Ye),e&&t(D),w(K),e&&t(Je),e&&t(G),e&&t(Xe),w(F,e),e&&t(Re),e&&t(pe),e&&t(Ke),w(Q,e),e&&t(Qe),e&&t(q),e&&t(We),e&&t(M),e&&t(Ze),w(W,e),e&&t(et),e&&t(x),e&&t(tt),w(Z,e),e&&t(at),e&&t(ue),e&&t(ot),w(ee,e),e&&t(rt),e&&t(fe),e&&t(st),w(te,e),e&&t(lt),w(N,e),e&&t(it),e&&t(z),w(ae),e&&t(nt),e&&t(k),e&&t(ct),e&&t(P),e&&t(pt),e&&t(j),e&&t(ut),e&&t(he),e&&t(ft),w(re,e),e&&t(ht),e&&t(me),e&&t(mt),w(se,e)}}}const ho={local:"launching-your-accelerate-scripts",sections:[{local:"using-accelerate-launch",title:"Using accelerate launch"},{local:"custom-configurations",title:"Custom Configurations"}],title:"Launching your \u{1F917} Accelerate scripts"};function mo(ie){return co(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vo extends so{constructor(f){super();lo(this,f,mo,fo,io,{})}}export{vo as default,ho as metadata};
