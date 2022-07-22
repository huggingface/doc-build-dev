import{S as so,i as lo,s as io,e as i,k as p,w as m,t as r,M as no,c as n,d as t,m as u,a as c,x as d,h as s,b as _,G as a,g as l,y,q as g,o as $,B as w,v as co}from"../../chunks/vendor-hf-doc-builder.js";import{T as ro}from"../../chunks/Tip-hf-doc-builder.js";import{I as Aa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as I}from"../../chunks/CodeBlock-hf-doc-builder.js";function po(te){let f;return{c(){f=r("If you are familiar with launching scripts in PyTorch yourself such as with `torchrun`, you can still do this. It is not required to use `accelerate launch`")},l(h){f=s(h,"If you are familiar with launching scripts in PyTorch yourself such as with `torchrun`, you can still do this. It is not required to use `accelerate launch`")},m(h,v){l(h,f,v)},d(h){h&&t(f)}}}function uo(te){let f;return{c(){f=r("Even if you are not using \u{1F917} Accelerate in your code, you can still use the launcher for starting your scripts!")},l(h){f=s(h,"Even if you are not using \u{1F917} Accelerate in your code, you can still use the launcher for starting your scripts!")},m(h,v){l(h,f,v)},d(h){h&&t(f)}}}function fo(te){let f,h,v,O,de,q,vt,_e,Et,He,ae,bt,Ge,M,Fe,oe,kt,qe,re,At,Me,N,Ne,z,Ct,ye,xt,Pt,Be,C,D,ge,B,jt,$e,It,Ve,T,Ot,we,zt,Dt,Ye,L,Je,se,Tt,Xe,V,Re,U,Lt,ve,Ut,St,Ke,S,Ht,Ee,Gt,Ft,Qe,Y,We,b,qt,be,Mt,Nt,ke,Bt,Vt,Ze,J,et,le,Yt,tt,X,at,ie,Jt,ot,R,rt,H,st,x,G,Ae,K,Xt,Ce,Rt,lt,E,Kt,xe,Qt,Wt,Pe,Zt,ea,je,ta,aa,it,k,P,oa,Ie,ra,sa,Oe,la,ia,na,j,ca,ze,pa,ua,De,fa,ha,ma,Q,da,Te,_a,ya,nt,A,ga,Le,$a,wa,Ue,va,Ea,ct,ne,ba,pt,W,ut,ce,ka,ft,Z,ht;return q=new Aa({}),M=new I({props:{code:`from accelerate import Accelerator

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
    scheduler.step()`}}),N=new I({props:{code:`  from accelerate import Accelerator
  
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
<span class="hljs-addition">+   main()</span>`}}),B=new Aa({}),L=new ro({props:{$$slots:{default:[po]},$$scope:{ctx:te}}}),V=new I({props:{code:"accelerate launch {script_name.py} --arg1 --arg2 ...",highlighted:"accelerate launch {script_name.py} --arg1 --arg2 ..."}}),Y=new I({props:{code:'CUDA_VISIBLE_DEVICES="0" accelerate launch {script_name.py} --arg1 --arg2 ...',highlighted:'CUDA_VISIBLE_DEVICES=<span class="hljs-string">&quot;0&quot;</span> accelerate launch {script_name.py} --arg1 --arg2 ...'}}),J=new I({props:{code:"accelerate launch --multi_gpu {script_name.py} --arg1 --arg2 ...",highlighted:"accelerate launch --multi_gpu {script_name.py} --arg1 --arg2 ..."}}),X=new I({props:{code:"accelerate launch --multi_gpu --mixed_precision=fp16 --num_processes=2 {script_name.py} --arg1 --arg2 ...",highlighted:"accelerate launch --multi_gpu --mixed_precision=fp16 --num_processes=2 {script_name.py} --arg1 --arg2 ..."}}),R=new I({props:{code:"accelerate launch -h",highlighted:"accelerate launch -h"}}),H=new ro({props:{$$slots:{default:[uo]},$$scope:{ctx:te}}}),K=new Aa({}),W=new I({props:{code:`compute_environment: LOCAL_MACHINE
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
<span class="hljs-attr">use_cpu:</span> <span class="hljs-literal">false</span>`}}),Z=new I({props:{code:"accelerate launch --config_file path/to/config/my_config_file.yaml path_to_script.py --args_for_the_script",highlighted:"accelerate launch --config_file path/to/config/my_config_file.yaml path_to_script.py --args_for_the_script"}}),{c(){f=i("meta"),h=p(),v=i("h1"),O=i("a"),de=i("span"),m(q.$$.fragment),vt=p(),_e=i("span"),Et=r("Launching your \u{1F917} Accelerate scripts"),He=p(),ae=i("p"),bt=r(`In the previous tutorial, you were introduced to how to modify your current training script to use \u{1F917} Accelerate.
The final version of that code is shown below:`),Ge=p(),m(M.$$.fragment),Fe=p(),oe=i("p"),kt=r("But how do you run this code and have it utilize the special hardware available to it?"),qe=p(),re=i("p"),At=r("First you should rewrite the above code into a function, and make it callable as a script. For example:"),Me=p(),m(N.$$.fragment),Ne=p(),z=i("p"),Ct=r("Next you need to launch it with "),ye=i("code"),xt=r("accelerate launch"),Pt=r("."),Be=p(),C=i("h2"),D=i("a"),ge=i("span"),m(B.$$.fragment),jt=p(),$e=i("span"),It=r("Using accelerate launch"),Ve=p(),T=i("p"),Ot=r("\u{1F917} Accelerate has a special CLI command to help you launch your code in your system through "),we=i("code"),zt=r("accelerate launch"),Dt=r(`.
This command wraps around all of the different commands needed to launch your script on various platforms, without you
having to remember what each of them are.`),Ye=p(),m(L.$$.fragment),Je=p(),se=i("p"),Tt=r("You can launch your script quickly by using:"),Xe=p(),m(V.$$.fragment),Re=p(),U=i("p"),Lt=r("Just put "),ve=i("code"),Ut=r("accelerate launch"),St=r(" at the start of your command, and pass in additional arguments and parameters to your script afterwards like normal!"),Ke=p(),S=i("p"),Ht=r(`Since this runs the various torch spawn methods, all of the expected environment variables can be modified here as well.
For example, here is how to use `),Ee=i("code"),Gt=r("accelerate launch"),Ft=r(" with a single GPU:"),Qe=p(),m(Y.$$.fragment),We=p(),b=i("p"),qt=r("You can also use "),be=i("code"),Mt=r("accelerate launch"),Nt=r(" without performing "),ke=i("code"),Bt=r("accelerate config"),Vt=r(` first, but you may need to manually pass in the right configuration parameters.
In this case, \u{1F917} Accelerate will make some hyperparameter decisions for you, such as if a GPU is available, it will use all of them by default, and no mixed precision will be used.
Here is how you would use all GPUs and train on no mixed precision:`),Ze=p(),m(J.$$.fragment),et=p(),le=i("p"),Yt=r(`To get more specific you should pass in the needed parameters yourself. For instance, here is how you
would also launch that same script on two GPUs using mixed precision while avoiding all of the warnings:`),tt=p(),m(X.$$.fragment),at=p(),ie=i("p"),Jt=r("For a complete list of parameters you can pass in, run:"),ot=p(),m(R.$$.fragment),rt=p(),m(H.$$.fragment),st=p(),x=i("h2"),G=i("a"),Ae=i("span"),m(K.$$.fragment),Xt=p(),Ce=i("span"),Rt=r("Custom Configurations"),lt=p(),E=i("p"),Kt=r("As briefly mentioned earlier, "),xe=i("code"),Qt=r("accelerate launch"),Wt=r(` should be mostly used through combining set configurations
made with the `),Pe=i("code"),Zt=r("accelerate config"),ea=r(" command. These configs are saved to a "),je=i("code"),ta=r("default_config.yaml"),aa=r(` file in your cache folder for \u{1F917} Accelerate.
This cache folder is located at (with decreasing order of priority):`),it=p(),k=i("ul"),P=i("li"),oa=r("The content of your environment variable "),Ie=i("code"),ra=r("HF_HOME"),sa=r(" suffixed with "),Oe=i("code"),la=r("accelerate"),ia=r("."),na=p(),j=i("li"),ca=r("If it does not exist, the content of your environment variable "),ze=i("code"),pa=r("XDG_CACHE_HOME"),ua=r(` suffixed with
`),De=i("code"),fa=r("huggingface/accelerate"),ha=r("."),ma=p(),Q=i("li"),da=r("If this does not exist either, the folder "),Te=i("code"),_a=r("~/.cache/huggingface/accelerate"),ya=r("."),nt=p(),A=i("p"),ga=r("To have multiple configurations, the flag "),Le=i("code"),$a=r("--config_file"),wa=r(" can be passed to the "),Ue=i("code"),va=r("accelerate launch"),Ea=r(` command paired
with the location of the custom yaml.`),ct=p(),ne=i("p"),ba=r("An example yaml may look something like the following:"),pt=p(),m(W.$$.fragment),ut=p(),ce=i("p"),ka=r("An example of launching a script with a yaml located in a custom location would look something like so:"),ft=p(),m(Z.$$.fragment),this.h()},l(e){const o=no('[data-svelte="svelte-1phssyn"]',document.head);f=n(o,"META",{name:!0,content:!0}),o.forEach(t),h=u(e),v=n(e,"H1",{class:!0});var ee=c(v);O=n(ee,"A",{id:!0,class:!0,href:!0});var Se=c(O);de=n(Se,"SPAN",{});var Ca=c(de);d(q.$$.fragment,Ca),Ca.forEach(t),Se.forEach(t),vt=u(ee),_e=n(ee,"SPAN",{});var xa=c(_e);Et=s(xa,"Launching your \u{1F917} Accelerate scripts"),xa.forEach(t),ee.forEach(t),He=u(e),ae=n(e,"P",{});var Pa=c(ae);bt=s(Pa,`In the previous tutorial, you were introduced to how to modify your current training script to use \u{1F917} Accelerate.
The final version of that code is shown below:`),Pa.forEach(t),Ge=u(e),d(M.$$.fragment,e),Fe=u(e),oe=n(e,"P",{});var ja=c(oe);kt=s(ja,"But how do you run this code and have it utilize the special hardware available to it?"),ja.forEach(t),qe=u(e),re=n(e,"P",{});var Ia=c(re);At=s(Ia,"First you should rewrite the above code into a function, and make it callable as a script. For example:"),Ia.forEach(t),Me=u(e),d(N.$$.fragment,e),Ne=u(e),z=n(e,"P",{});var mt=c(z);Ct=s(mt,"Next you need to launch it with "),ye=n(mt,"CODE",{});var Oa=c(ye);xt=s(Oa,"accelerate launch"),Oa.forEach(t),Pt=s(mt,"."),mt.forEach(t),Be=u(e),C=n(e,"H2",{class:!0});var dt=c(C);D=n(dt,"A",{id:!0,class:!0,href:!0});var za=c(D);ge=n(za,"SPAN",{});var Da=c(ge);d(B.$$.fragment,Da),Da.forEach(t),za.forEach(t),jt=u(dt),$e=n(dt,"SPAN",{});var Ta=c($e);It=s(Ta,"Using accelerate launch"),Ta.forEach(t),dt.forEach(t),Ve=u(e),T=n(e,"P",{});var _t=c(T);Ot=s(_t,"\u{1F917} Accelerate has a special CLI command to help you launch your code in your system through "),we=n(_t,"CODE",{});var La=c(we);zt=s(La,"accelerate launch"),La.forEach(t),Dt=s(_t,`.
This command wraps around all of the different commands needed to launch your script on various platforms, without you
having to remember what each of them are.`),_t.forEach(t),Ye=u(e),d(L.$$.fragment,e),Je=u(e),se=n(e,"P",{});var Ua=c(se);Tt=s(Ua,"You can launch your script quickly by using:"),Ua.forEach(t),Xe=u(e),d(V.$$.fragment,e),Re=u(e),U=n(e,"P",{});var yt=c(U);Lt=s(yt,"Just put "),ve=n(yt,"CODE",{});var Sa=c(ve);Ut=s(Sa,"accelerate launch"),Sa.forEach(t),St=s(yt," at the start of your command, and pass in additional arguments and parameters to your script afterwards like normal!"),yt.forEach(t),Ke=u(e),S=n(e,"P",{});var gt=c(S);Ht=s(gt,`Since this runs the various torch spawn methods, all of the expected environment variables can be modified here as well.
For example, here is how to use `),Ee=n(gt,"CODE",{});var Ha=c(Ee);Gt=s(Ha,"accelerate launch"),Ha.forEach(t),Ft=s(gt," with a single GPU:"),gt.forEach(t),Qe=u(e),d(Y.$$.fragment,e),We=u(e),b=n(e,"P",{});var pe=c(b);qt=s(pe,"You can also use "),be=n(pe,"CODE",{});var Ga=c(be);Mt=s(Ga,"accelerate launch"),Ga.forEach(t),Nt=s(pe," without performing "),ke=n(pe,"CODE",{});var Fa=c(ke);Bt=s(Fa,"accelerate config"),Fa.forEach(t),Vt=s(pe,` first, but you may need to manually pass in the right configuration parameters.
In this case, \u{1F917} Accelerate will make some hyperparameter decisions for you, such as if a GPU is available, it will use all of them by default, and no mixed precision will be used.
Here is how you would use all GPUs and train on no mixed precision:`),pe.forEach(t),Ze=u(e),d(J.$$.fragment,e),et=u(e),le=n(e,"P",{});var qa=c(le);Yt=s(qa,`To get more specific you should pass in the needed parameters yourself. For instance, here is how you
would also launch that same script on two GPUs using mixed precision while avoiding all of the warnings:`),qa.forEach(t),tt=u(e),d(X.$$.fragment,e),at=u(e),ie=n(e,"P",{});var Ma=c(ie);Jt=s(Ma,"For a complete list of parameters you can pass in, run:"),Ma.forEach(t),ot=u(e),d(R.$$.fragment,e),rt=u(e),d(H.$$.fragment,e),st=u(e),x=n(e,"H2",{class:!0});var $t=c(x);G=n($t,"A",{id:!0,class:!0,href:!0});var Na=c(G);Ae=n(Na,"SPAN",{});var Ba=c(Ae);d(K.$$.fragment,Ba),Ba.forEach(t),Na.forEach(t),Xt=u($t),Ce=n($t,"SPAN",{});var Va=c(Ce);Rt=s(Va,"Custom Configurations"),Va.forEach(t),$t.forEach(t),lt=u(e),E=n(e,"P",{});var F=c(E);Kt=s(F,"As briefly mentioned earlier, "),xe=n(F,"CODE",{});var Ya=c(xe);Qt=s(Ya,"accelerate launch"),Ya.forEach(t),Wt=s(F,` should be mostly used through combining set configurations
made with the `),Pe=n(F,"CODE",{});var Ja=c(Pe);Zt=s(Ja,"accelerate config"),Ja.forEach(t),ea=s(F," command. These configs are saved to a "),je=n(F,"CODE",{});var Xa=c(je);ta=s(Xa,"default_config.yaml"),Xa.forEach(t),aa=s(F,` file in your cache folder for \u{1F917} Accelerate.
This cache folder is located at (with decreasing order of priority):`),F.forEach(t),it=u(e),k=n(e,"UL",{});var ue=c(k);P=n(ue,"LI",{});var fe=c(P);oa=s(fe,"The content of your environment variable "),Ie=n(fe,"CODE",{});var Ra=c(Ie);ra=s(Ra,"HF_HOME"),Ra.forEach(t),sa=s(fe," suffixed with "),Oe=n(fe,"CODE",{});var Ka=c(Oe);la=s(Ka,"accelerate"),Ka.forEach(t),ia=s(fe,"."),fe.forEach(t),na=u(ue),j=n(ue,"LI",{});var he=c(j);ca=s(he,"If it does not exist, the content of your environment variable "),ze=n(he,"CODE",{});var Qa=c(ze);pa=s(Qa,"XDG_CACHE_HOME"),Qa.forEach(t),ua=s(he,` suffixed with
`),De=n(he,"CODE",{});var Wa=c(De);fa=s(Wa,"huggingface/accelerate"),Wa.forEach(t),ha=s(he,"."),he.forEach(t),ma=u(ue),Q=n(ue,"LI",{});var wt=c(Q);da=s(wt,"If this does not exist either, the folder "),Te=n(wt,"CODE",{});var Za=c(Te);_a=s(Za,"~/.cache/huggingface/accelerate"),Za.forEach(t),ya=s(wt,"."),wt.forEach(t),ue.forEach(t),nt=u(e),A=n(e,"P",{});var me=c(A);ga=s(me,"To have multiple configurations, the flag "),Le=n(me,"CODE",{});var eo=c(Le);$a=s(eo,"--config_file"),eo.forEach(t),wa=s(me," can be passed to the "),Ue=n(me,"CODE",{});var to=c(Ue);va=s(to,"accelerate launch"),to.forEach(t),Ea=s(me,` command paired
with the location of the custom yaml.`),me.forEach(t),ct=u(e),ne=n(e,"P",{});var ao=c(ne);ba=s(ao,"An example yaml may look something like the following:"),ao.forEach(t),pt=u(e),d(W.$$.fragment,e),ut=u(e),ce=n(e,"P",{});var oo=c(ce);ka=s(oo,"An example of launching a script with a yaml located in a custom location would look something like so:"),oo.forEach(t),ft=u(e),d(Z.$$.fragment,e),this.h()},h(){_(f,"name","hf:doc:metadata"),_(f,"content",JSON.stringify(ho)),_(O,"id","launching-your-accelerate-scripts"),_(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(O,"href","#launching-your-accelerate-scripts"),_(v,"class","relative group"),_(D,"id","using-accelerate-launch"),_(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(D,"href","#using-accelerate-launch"),_(C,"class","relative group"),_(G,"id","custom-configurations"),_(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(G,"href","#custom-configurations"),_(x,"class","relative group")},m(e,o){a(document.head,f),l(e,h,o),l(e,v,o),a(v,O),a(O,de),y(q,de,null),a(v,vt),a(v,_e),a(_e,Et),l(e,He,o),l(e,ae,o),a(ae,bt),l(e,Ge,o),y(M,e,o),l(e,Fe,o),l(e,oe,o),a(oe,kt),l(e,qe,o),l(e,re,o),a(re,At),l(e,Me,o),y(N,e,o),l(e,Ne,o),l(e,z,o),a(z,Ct),a(z,ye),a(ye,xt),a(z,Pt),l(e,Be,o),l(e,C,o),a(C,D),a(D,ge),y(B,ge,null),a(C,jt),a(C,$e),a($e,It),l(e,Ve,o),l(e,T,o),a(T,Ot),a(T,we),a(we,zt),a(T,Dt),l(e,Ye,o),y(L,e,o),l(e,Je,o),l(e,se,o),a(se,Tt),l(e,Xe,o),y(V,e,o),l(e,Re,o),l(e,U,o),a(U,Lt),a(U,ve),a(ve,Ut),a(U,St),l(e,Ke,o),l(e,S,o),a(S,Ht),a(S,Ee),a(Ee,Gt),a(S,Ft),l(e,Qe,o),y(Y,e,o),l(e,We,o),l(e,b,o),a(b,qt),a(b,be),a(be,Mt),a(b,Nt),a(b,ke),a(ke,Bt),a(b,Vt),l(e,Ze,o),y(J,e,o),l(e,et,o),l(e,le,o),a(le,Yt),l(e,tt,o),y(X,e,o),l(e,at,o),l(e,ie,o),a(ie,Jt),l(e,ot,o),y(R,e,o),l(e,rt,o),y(H,e,o),l(e,st,o),l(e,x,o),a(x,G),a(G,Ae),y(K,Ae,null),a(x,Xt),a(x,Ce),a(Ce,Rt),l(e,lt,o),l(e,E,o),a(E,Kt),a(E,xe),a(xe,Qt),a(E,Wt),a(E,Pe),a(Pe,Zt),a(E,ea),a(E,je),a(je,ta),a(E,aa),l(e,it,o),l(e,k,o),a(k,P),a(P,oa),a(P,Ie),a(Ie,ra),a(P,sa),a(P,Oe),a(Oe,la),a(P,ia),a(k,na),a(k,j),a(j,ca),a(j,ze),a(ze,pa),a(j,ua),a(j,De),a(De,fa),a(j,ha),a(k,ma),a(k,Q),a(Q,da),a(Q,Te),a(Te,_a),a(Q,ya),l(e,nt,o),l(e,A,o),a(A,ga),a(A,Le),a(Le,$a),a(A,wa),a(A,Ue),a(Ue,va),a(A,Ea),l(e,ct,o),l(e,ne,o),a(ne,ba),l(e,pt,o),y(W,e,o),l(e,ut,o),l(e,ce,o),a(ce,ka),l(e,ft,o),y(Z,e,o),ht=!0},p(e,[o]){const ee={};o&2&&(ee.$$scope={dirty:o,ctx:e}),L.$set(ee);const Se={};o&2&&(Se.$$scope={dirty:o,ctx:e}),H.$set(Se)},i(e){ht||(g(q.$$.fragment,e),g(M.$$.fragment,e),g(N.$$.fragment,e),g(B.$$.fragment,e),g(L.$$.fragment,e),g(V.$$.fragment,e),g(Y.$$.fragment,e),g(J.$$.fragment,e),g(X.$$.fragment,e),g(R.$$.fragment,e),g(H.$$.fragment,e),g(K.$$.fragment,e),g(W.$$.fragment,e),g(Z.$$.fragment,e),ht=!0)},o(e){$(q.$$.fragment,e),$(M.$$.fragment,e),$(N.$$.fragment,e),$(B.$$.fragment,e),$(L.$$.fragment,e),$(V.$$.fragment,e),$(Y.$$.fragment,e),$(J.$$.fragment,e),$(X.$$.fragment,e),$(R.$$.fragment,e),$(H.$$.fragment,e),$(K.$$.fragment,e),$(W.$$.fragment,e),$(Z.$$.fragment,e),ht=!1},d(e){t(f),e&&t(h),e&&t(v),w(q),e&&t(He),e&&t(ae),e&&t(Ge),w(M,e),e&&t(Fe),e&&t(oe),e&&t(qe),e&&t(re),e&&t(Me),w(N,e),e&&t(Ne),e&&t(z),e&&t(Be),e&&t(C),w(B),e&&t(Ve),e&&t(T),e&&t(Ye),w(L,e),e&&t(Je),e&&t(se),e&&t(Xe),w(V,e),e&&t(Re),e&&t(U),e&&t(Ke),e&&t(S),e&&t(Qe),w(Y,e),e&&t(We),e&&t(b),e&&t(Ze),w(J,e),e&&t(et),e&&t(le),e&&t(tt),w(X,e),e&&t(at),e&&t(ie),e&&t(ot),w(R,e),e&&t(rt),w(H,e),e&&t(st),e&&t(x),w(K),e&&t(lt),e&&t(E),e&&t(it),e&&t(k),e&&t(nt),e&&t(A),e&&t(ct),e&&t(ne),e&&t(pt),w(W,e),e&&t(ut),e&&t(ce),e&&t(ft),w(Z,e)}}}const ho={local:"launching-your-accelerate-scripts",sections:[{local:"using-accelerate-launch",title:"Using accelerate launch"},{local:"custom-configurations",title:"Custom Configurations"}],title:"Launching your \u{1F917} Accelerate scripts"};function mo(te){return co(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wo extends so{constructor(f){super();lo(this,f,mo,fo,io,{})}}export{wo as default,ho as metadata};
