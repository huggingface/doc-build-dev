import{S as lo,i as so,s as io,e as s,k as p,w as _,t as r,M as no,c as i,d as t,m as u,a as n,x as g,h as l,b as m,G as a,g as c,y,q as $,o as v,B as w,v as co}from"../../chunks/vendor-hf-doc-builder.js";import{T as ro}from"../../chunks/Tip-hf-doc-builder.js";import{I as Aa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as M}from"../../chunks/CodeBlock-hf-doc-builder.js";function po(ee){let f;return{c(){f=r("If you are familiar with launching scripts in PyTorch yourself such as with `torchrun`, you can still do this. It is not required to use `accelerate launch`")},l(h){f=l(h,"If you are familiar with launching scripts in PyTorch yourself such as with `torchrun`, you can still do this. It is not required to use `accelerate launch`")},m(h,d){c(h,f,d)},d(h){h&&t(f)}}}function uo(ee){let f;return{c(){f=r("Even if you are not using \u{1F917} Accelerate in your code, you can still use the launcher for starting your scripts!")},l(h){f=l(h,"Even if you are not using \u{1F917} Accelerate in your code, you can still use the launcher for starting your scripts!")},m(h,d){c(h,f,d)},d(h){h&&t(f)}}}function fo(ee){let f,h,d,I,me,N,yt,de,$t,He,te,vt,Fe,G,qe,ae,wt,Me,oe,Et,Ne,B,Ge,O,bt,_e,kt,At,Be,C,D,ge,V,Ct,re,xt,ye,Pt,Ve,z,jt,$e,It,Ot,Ye,L,Je,le,Dt,Xe,Y,Re,T,zt,ve,Lt,Tt,Ke,S,St,we,Ut,Ht,Qe,J,We,E,Ft,Ee,qt,Mt,be,Nt,Gt,ke,Bt,Vt,Ze,X,et,se,Yt,tt,R,at,U,ot,x,H,Ae,K,Jt,Ce,Xt,rt,b,Rt,xe,Kt,Qt,Pe,Wt,Zt,je,ea,ta,lt,k,P,aa,Ie,oa,ra,Oe,la,sa,ia,j,na,De,ca,pa,ze,ua,fa,ha,ie,ma,Le,da,st,A,_a,Te,ga,ya,Se,$a,va,it,ne,wa,nt,Q,ct,ce,Ea,pt,W,ut;return N=new Aa({}),G=new M({props:{code:`from accelerate import Accelerator

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
    scheduler.step()`}}),B=new M({props:{code:`  from accelerate import Accelerator
  
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
<span class="hljs-addition">+   main()</span>`}}),V=new Aa({}),L=new ro({props:{$$slots:{default:[po]},$$scope:{ctx:ee}}}),Y=new M({props:{code:"accelerate launch {script_name.py} --arg1 --arg2 ...",highlighted:"accelerate launch {script_name.py} --arg1 --arg2 ..."}}),J=new M({props:{code:'CUDA_VISIBLE_DEVICES="0" accelerate launch {script_name.py} --arg1 --arg2 ...',highlighted:'CUDA_VISIBLE_DEVICES=<span class="hljs-string">&quot;0&quot;</span> accelerate launch {script_name.py} --arg1 --arg2 ...'}}),X=new M({props:{code:"accelerate launch --multi_gpu --mixed_precision=fp16 --num_processes=2 {script_name.py} --arg1 --arg2 ...",highlighted:"accelerate launch --multi_gpu --mixed_precision=fp16 --num_processes=2 {script_name.py} --arg1 --arg2 ..."}}),R=new M({props:{code:"accelerate launch -h",highlighted:"accelerate launch -h"}}),U=new ro({props:{$$slots:{default:[uo]},$$scope:{ctx:ee}}}),K=new Aa({}),Q=new M({props:{code:`compute_environment: LOCAL_MACHINE
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
<span class="hljs-attr">use_cpu:</span> <span class="hljs-literal">false</span>`}}),W=new M({props:{code:"accelerate launch --config_file path/to/config/my_config_file.yaml path_to_script.py --args_for_the_script",highlighted:"accelerate launch --config_file path/to/config/my_config_file.yaml path_to_script.py --args_for_the_script"}}),{c(){f=s("meta"),h=p(),d=s("h1"),I=s("a"),me=s("span"),_(N.$$.fragment),yt=p(),de=s("span"),$t=r("Launching your \u{1F917} Accelerate scripts"),He=p(),te=s("p"),vt=r(`In the previous tutorial you were introduced with how to modify your current training script to use \u{1F917} Accelerate.
The final version of that code is shown below:`),Fe=p(),_(G.$$.fragment),qe=p(),ae=s("p"),wt=r("But how do you run this code and have it utilize the special hardware available to it?"),Me=p(),oe=s("p"),Et=r("First you should rewrite the above code into a function, and make it callable as a script. For example:"),Ne=p(),_(B.$$.fragment),Ge=p(),O=s("p"),bt=r("Next you need to launch it with "),_e=s("code"),kt=r("accelerate launch"),At=r("."),Be=p(),C=s("h2"),D=s("a"),ge=s("span"),_(V.$$.fragment),Ct=p(),re=s("span"),xt=r("Using "),ye=s("code"),Pt=r("accelerate launch"),Ve=p(),z=s("p"),jt=r("\u{1F917} Accelerate has a special CLI command to help you launch your code in your system through "),$e=s("code"),It=r("accelerate launch"),Ot=r(`.
This command wraps around all of the different commands needed to launch your script on various platforms, without you
having to remember what each of them are.`),Ye=p(),_(L.$$.fragment),Je=p(),le=s("p"),Dt=r("You can launch your script quickly by using:"),Xe=p(),_(Y.$$.fragment),Re=p(),T=s("p"),zt=r("Just put "),ve=s("code"),Lt=r("accelerate launch"),Tt=r(" at the start of your command, and pass in additional arguments and parameters to your script afterwards like normal!"),Ke=p(),S=s("p"),St=r(`Since this runs the various different torch spawn methods, all of the environmental variables that would be expected for them can be modified here as well.
For example, here is how to use `),we=s("code"),Ut=r("accelerate launch"),Ht=r(" but only use a single GPU:"),Qe=p(),_(J.$$.fragment),We=p(),E=s("p"),Ft=r("You can also use "),Ee=s("code"),qt=r("accelerate launch"),Mt=r(" without performing "),be=s("code"),Nt=r("accelerate config"),Gt=r(` first, but you will need to manually pass in all of the right configuration parameters.
For example here is how you would launch a script on two GPUs with mixed precision, without doing `),ke=s("code"),Bt=r("accelerate config"),Vt=r(" first:"),Ze=p(),_(X.$$.fragment),et=p(),se=s("p"),Yt=r("For a full list of all parameters you can pass in, run:"),tt=p(),_(R.$$.fragment),at=p(),_(U.$$.fragment),ot=p(),x=s("h2"),H=s("a"),Ae=s("span"),_(K.$$.fragment),Jt=p(),Ce=s("span"),Xt=r("Custom Configurations"),rt=p(),b=s("p"),Rt=r("As briefly mentioned earlier, "),xe=s("code"),Kt=r("accelerate launch"),Qt=r(` should be mostly used through combining set configurations
made with the `),Pe=s("code"),Wt=r("accelerate config"),Zt=r(" command. These configs are saved to a "),je=s("code"),ea=r("default_config.yaml"),ta=r(` file in your cache folder for \u{1F917} Accelerate.
This cache folder is located at (with decreasing order of priority):`),lt=p(),k=s("ul"),P=s("li"),aa=r("The content of your environment variable "),Ie=s("code"),oa=r("HF_HOME"),ra=r(" suffixed with "),Oe=s("code"),la=r("accelerate"),sa=r("."),ia=p(),j=s("li"),na=r("If it does not exist, the content of your environment variable "),De=s("code"),ca=r("XDG_CACHE_HOME"),pa=r(` suffixed with
`),ze=s("code"),ua=r("huggingface/accelerate"),fa=r("."),ha=p(),ie=s("li"),ma=r("If this does not exist either, the folder "),Le=s("code"),da=r("~/.cache/huggingface/accelerate"),st=p(),A=s("p"),_a=r("To have multiple configurations, the flag "),Te=s("code"),ga=r("--config_file"),ya=r(" can be passed to the "),Se=s("code"),$a=r("accelerate launch"),va=r(` command paired
with the location of the custom yaml.`),it=p(),ne=s("p"),wa=r("An example yaml may look something like the following:"),nt=p(),_(Q.$$.fragment),ct=p(),ce=s("p"),Ea=r("An example of launching a script with a yaml located in a custom location would look something like so:"),pt=p(),_(W.$$.fragment),this.h()},l(e){const o=no('[data-svelte="svelte-1phssyn"]',document.head);f=i(o,"META",{name:!0,content:!0}),o.forEach(t),h=u(e),d=i(e,"H1",{class:!0});var Z=n(d);I=i(Z,"A",{id:!0,class:!0,href:!0});var Ue=n(I);me=i(Ue,"SPAN",{});var Ca=n(me);g(N.$$.fragment,Ca),Ca.forEach(t),Ue.forEach(t),yt=u(Z),de=i(Z,"SPAN",{});var xa=n(de);$t=l(xa,"Launching your \u{1F917} Accelerate scripts"),xa.forEach(t),Z.forEach(t),He=u(e),te=i(e,"P",{});var Pa=n(te);vt=l(Pa,`In the previous tutorial you were introduced with how to modify your current training script to use \u{1F917} Accelerate.
The final version of that code is shown below:`),Pa.forEach(t),Fe=u(e),g(G.$$.fragment,e),qe=u(e),ae=i(e,"P",{});var ja=n(ae);wt=l(ja,"But how do you run this code and have it utilize the special hardware available to it?"),ja.forEach(t),Me=u(e),oe=i(e,"P",{});var Ia=n(oe);Et=l(Ia,"First you should rewrite the above code into a function, and make it callable as a script. For example:"),Ia.forEach(t),Ne=u(e),g(B.$$.fragment,e),Ge=u(e),O=i(e,"P",{});var ft=n(O);bt=l(ft,"Next you need to launch it with "),_e=i(ft,"CODE",{});var Oa=n(_e);kt=l(Oa,"accelerate launch"),Oa.forEach(t),At=l(ft,"."),ft.forEach(t),Be=u(e),C=i(e,"H2",{class:!0});var ht=n(C);D=i(ht,"A",{id:!0,class:!0,href:!0});var Da=n(D);ge=i(Da,"SPAN",{});var za=n(ge);g(V.$$.fragment,za),za.forEach(t),Da.forEach(t),Ct=u(ht),re=i(ht,"SPAN",{});var ba=n(re);xt=l(ba,"Using "),ye=i(ba,"CODE",{});var La=n(ye);Pt=l(La,"accelerate launch"),La.forEach(t),ba.forEach(t),ht.forEach(t),Ve=u(e),z=i(e,"P",{});var mt=n(z);jt=l(mt,"\u{1F917} Accelerate has a special CLI command to help you launch your code in your system through "),$e=i(mt,"CODE",{});var Ta=n($e);It=l(Ta,"accelerate launch"),Ta.forEach(t),Ot=l(mt,`.
This command wraps around all of the different commands needed to launch your script on various platforms, without you
having to remember what each of them are.`),mt.forEach(t),Ye=u(e),g(L.$$.fragment,e),Je=u(e),le=i(e,"P",{});var Sa=n(le);Dt=l(Sa,"You can launch your script quickly by using:"),Sa.forEach(t),Xe=u(e),g(Y.$$.fragment,e),Re=u(e),T=i(e,"P",{});var dt=n(T);zt=l(dt,"Just put "),ve=i(dt,"CODE",{});var Ua=n(ve);Lt=l(Ua,"accelerate launch"),Ua.forEach(t),Tt=l(dt," at the start of your command, and pass in additional arguments and parameters to your script afterwards like normal!"),dt.forEach(t),Ke=u(e),S=i(e,"P",{});var _t=n(S);St=l(_t,`Since this runs the various different torch spawn methods, all of the environmental variables that would be expected for them can be modified here as well.
For example, here is how to use `),we=i(_t,"CODE",{});var Ha=n(we);Ut=l(Ha,"accelerate launch"),Ha.forEach(t),Ht=l(_t," but only use a single GPU:"),_t.forEach(t),Qe=u(e),g(J.$$.fragment,e),We=u(e),E=i(e,"P",{});var F=n(E);Ft=l(F,"You can also use "),Ee=i(F,"CODE",{});var Fa=n(Ee);qt=l(Fa,"accelerate launch"),Fa.forEach(t),Mt=l(F," without performing "),be=i(F,"CODE",{});var qa=n(be);Nt=l(qa,"accelerate config"),qa.forEach(t),Gt=l(F,` first, but you will need to manually pass in all of the right configuration parameters.
For example here is how you would launch a script on two GPUs with mixed precision, without doing `),ke=i(F,"CODE",{});var Ma=n(ke);Bt=l(Ma,"accelerate config"),Ma.forEach(t),Vt=l(F," first:"),F.forEach(t),Ze=u(e),g(X.$$.fragment,e),et=u(e),se=i(e,"P",{});var Na=n(se);Yt=l(Na,"For a full list of all parameters you can pass in, run:"),Na.forEach(t),tt=u(e),g(R.$$.fragment,e),at=u(e),g(U.$$.fragment,e),ot=u(e),x=i(e,"H2",{class:!0});var gt=n(x);H=i(gt,"A",{id:!0,class:!0,href:!0});var Ga=n(H);Ae=i(Ga,"SPAN",{});var Ba=n(Ae);g(K.$$.fragment,Ba),Ba.forEach(t),Ga.forEach(t),Jt=u(gt),Ce=i(gt,"SPAN",{});var Va=n(Ce);Xt=l(Va,"Custom Configurations"),Va.forEach(t),gt.forEach(t),rt=u(e),b=i(e,"P",{});var q=n(b);Rt=l(q,"As briefly mentioned earlier, "),xe=i(q,"CODE",{});var Ya=n(xe);Kt=l(Ya,"accelerate launch"),Ya.forEach(t),Qt=l(q,` should be mostly used through combining set configurations
made with the `),Pe=i(q,"CODE",{});var Ja=n(Pe);Wt=l(Ja,"accelerate config"),Ja.forEach(t),Zt=l(q," command. These configs are saved to a "),je=i(q,"CODE",{});var Xa=n(je);ea=l(Xa,"default_config.yaml"),Xa.forEach(t),ta=l(q,` file in your cache folder for \u{1F917} Accelerate.
This cache folder is located at (with decreasing order of priority):`),q.forEach(t),lt=u(e),k=i(e,"UL",{});var pe=n(k);P=i(pe,"LI",{});var ue=n(P);aa=l(ue,"The content of your environment variable "),Ie=i(ue,"CODE",{});var Ra=n(Ie);oa=l(Ra,"HF_HOME"),Ra.forEach(t),ra=l(ue," suffixed with "),Oe=i(ue,"CODE",{});var Ka=n(Oe);la=l(Ka,"accelerate"),Ka.forEach(t),sa=l(ue,"."),ue.forEach(t),ia=u(pe),j=i(pe,"LI",{});var fe=n(j);na=l(fe,"If it does not exist, the content of your environment variable "),De=i(fe,"CODE",{});var Qa=n(De);ca=l(Qa,"XDG_CACHE_HOME"),Qa.forEach(t),pa=l(fe,` suffixed with
`),ze=i(fe,"CODE",{});var Wa=n(ze);ua=l(Wa,"huggingface/accelerate"),Wa.forEach(t),fa=l(fe,"."),fe.forEach(t),ha=u(pe),ie=i(pe,"LI",{});var ka=n(ie);ma=l(ka,"If this does not exist either, the folder "),Le=i(ka,"CODE",{});var Za=n(Le);da=l(Za,"~/.cache/huggingface/accelerate"),Za.forEach(t),ka.forEach(t),pe.forEach(t),st=u(e),A=i(e,"P",{});var he=n(A);_a=l(he,"To have multiple configurations, the flag "),Te=i(he,"CODE",{});var eo=n(Te);ga=l(eo,"--config_file"),eo.forEach(t),ya=l(he," can be passed to the "),Se=i(he,"CODE",{});var to=n(Se);$a=l(to,"accelerate launch"),to.forEach(t),va=l(he,` command paired
with the location of the custom yaml.`),he.forEach(t),it=u(e),ne=i(e,"P",{});var ao=n(ne);wa=l(ao,"An example yaml may look something like the following:"),ao.forEach(t),nt=u(e),g(Q.$$.fragment,e),ct=u(e),ce=i(e,"P",{});var oo=n(ce);Ea=l(oo,"An example of launching a script with a yaml located in a custom location would look something like so:"),oo.forEach(t),pt=u(e),g(W.$$.fragment,e),this.h()},h(){m(f,"name","hf:doc:metadata"),m(f,"content",JSON.stringify(ho)),m(I,"id","launching-your-accelerate-scripts"),m(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(I,"href","#launching-your-accelerate-scripts"),m(d,"class","relative group"),m(D,"id","using-accelerate-launch"),m(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(D,"href","#using-accelerate-launch"),m(C,"class","relative group"),m(H,"id","custom-configurations"),m(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(H,"href","#custom-configurations"),m(x,"class","relative group")},m(e,o){a(document.head,f),c(e,h,o),c(e,d,o),a(d,I),a(I,me),y(N,me,null),a(d,yt),a(d,de),a(de,$t),c(e,He,o),c(e,te,o),a(te,vt),c(e,Fe,o),y(G,e,o),c(e,qe,o),c(e,ae,o),a(ae,wt),c(e,Me,o),c(e,oe,o),a(oe,Et),c(e,Ne,o),y(B,e,o),c(e,Ge,o),c(e,O,o),a(O,bt),a(O,_e),a(_e,kt),a(O,At),c(e,Be,o),c(e,C,o),a(C,D),a(D,ge),y(V,ge,null),a(C,Ct),a(C,re),a(re,xt),a(re,ye),a(ye,Pt),c(e,Ve,o),c(e,z,o),a(z,jt),a(z,$e),a($e,It),a(z,Ot),c(e,Ye,o),y(L,e,o),c(e,Je,o),c(e,le,o),a(le,Dt),c(e,Xe,o),y(Y,e,o),c(e,Re,o),c(e,T,o),a(T,zt),a(T,ve),a(ve,Lt),a(T,Tt),c(e,Ke,o),c(e,S,o),a(S,St),a(S,we),a(we,Ut),a(S,Ht),c(e,Qe,o),y(J,e,o),c(e,We,o),c(e,E,o),a(E,Ft),a(E,Ee),a(Ee,qt),a(E,Mt),a(E,be),a(be,Nt),a(E,Gt),a(E,ke),a(ke,Bt),a(E,Vt),c(e,Ze,o),y(X,e,o),c(e,et,o),c(e,se,o),a(se,Yt),c(e,tt,o),y(R,e,o),c(e,at,o),y(U,e,o),c(e,ot,o),c(e,x,o),a(x,H),a(H,Ae),y(K,Ae,null),a(x,Jt),a(x,Ce),a(Ce,Xt),c(e,rt,o),c(e,b,o),a(b,Rt),a(b,xe),a(xe,Kt),a(b,Qt),a(b,Pe),a(Pe,Wt),a(b,Zt),a(b,je),a(je,ea),a(b,ta),c(e,lt,o),c(e,k,o),a(k,P),a(P,aa),a(P,Ie),a(Ie,oa),a(P,ra),a(P,Oe),a(Oe,la),a(P,sa),a(k,ia),a(k,j),a(j,na),a(j,De),a(De,ca),a(j,pa),a(j,ze),a(ze,ua),a(j,fa),a(k,ha),a(k,ie),a(ie,ma),a(ie,Le),a(Le,da),c(e,st,o),c(e,A,o),a(A,_a),a(A,Te),a(Te,ga),a(A,ya),a(A,Se),a(Se,$a),a(A,va),c(e,it,o),c(e,ne,o),a(ne,wa),c(e,nt,o),y(Q,e,o),c(e,ct,o),c(e,ce,o),a(ce,Ea),c(e,pt,o),y(W,e,o),ut=!0},p(e,[o]){const Z={};o&2&&(Z.$$scope={dirty:o,ctx:e}),L.$set(Z);const Ue={};o&2&&(Ue.$$scope={dirty:o,ctx:e}),U.$set(Ue)},i(e){ut||($(N.$$.fragment,e),$(G.$$.fragment,e),$(B.$$.fragment,e),$(V.$$.fragment,e),$(L.$$.fragment,e),$(Y.$$.fragment,e),$(J.$$.fragment,e),$(X.$$.fragment,e),$(R.$$.fragment,e),$(U.$$.fragment,e),$(K.$$.fragment,e),$(Q.$$.fragment,e),$(W.$$.fragment,e),ut=!0)},o(e){v(N.$$.fragment,e),v(G.$$.fragment,e),v(B.$$.fragment,e),v(V.$$.fragment,e),v(L.$$.fragment,e),v(Y.$$.fragment,e),v(J.$$.fragment,e),v(X.$$.fragment,e),v(R.$$.fragment,e),v(U.$$.fragment,e),v(K.$$.fragment,e),v(Q.$$.fragment,e),v(W.$$.fragment,e),ut=!1},d(e){t(f),e&&t(h),e&&t(d),w(N),e&&t(He),e&&t(te),e&&t(Fe),w(G,e),e&&t(qe),e&&t(ae),e&&t(Me),e&&t(oe),e&&t(Ne),w(B,e),e&&t(Ge),e&&t(O),e&&t(Be),e&&t(C),w(V),e&&t(Ve),e&&t(z),e&&t(Ye),w(L,e),e&&t(Je),e&&t(le),e&&t(Xe),w(Y,e),e&&t(Re),e&&t(T),e&&t(Ke),e&&t(S),e&&t(Qe),w(J,e),e&&t(We),e&&t(E),e&&t(Ze),w(X,e),e&&t(et),e&&t(se),e&&t(tt),w(R,e),e&&t(at),w(U,e),e&&t(ot),e&&t(x),w(K),e&&t(rt),e&&t(b),e&&t(lt),e&&t(k),e&&t(st),e&&t(A),e&&t(it),e&&t(ne),e&&t(nt),w(Q,e),e&&t(ct),e&&t(ce),e&&t(pt),w(W,e)}}}const ho={local:"launching-your-accelerate-scripts",sections:[{local:"using-accelerate-launch",title:"Using `accelerate launch`"},{local:"custom-configurations",title:"Custom Configurations"}],title:"Launching your \u{1F917} Accelerate scripts"};function mo(ee){return co(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vo extends lo{constructor(f){super();so(this,f,mo,fo,io,{})}}export{vo as default,ho as metadata};
