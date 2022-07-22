import{S as ir,i as nr,s as cr,e as i,k as u,w as m,t as o,M as ur,c as n,d as t,m as p,a as c,x as d,h as l,b as _,G as a,g as s,y,q as g,o as $,B as w,v as pr}from"../../chunks/vendor-hf-doc-builder.js";import{T as sr}from"../../chunks/Tip-hf-doc-builder.js";import{I as xa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as I}from"../../chunks/CodeBlock-hf-doc-builder.js";function fr(ee){let f;return{c(){f=o("If you are familiar with launching scripts in PyTorch yourself such as with `torchrun`, you can still do this. It is not required to use `accelerate launch`")},l(h){f=l(h,"If you are familiar with launching scripts in PyTorch yourself such as with `torchrun`, you can still do this. It is not required to use `accelerate launch`")},m(h,v){s(h,f,v)},d(h){h&&t(f)}}}function hr(ee){let f;return{c(){f=o("Even if you are not using \u{1F917} Accelerate in your code, you can still use the launcher for starting your scripts!")},l(h){f=l(h,"Even if you are not using \u{1F917} Accelerate in your code, you can still use the launcher for starting your scripts!")},m(h,v){s(h,f,v)},d(h){h&&t(f)}}}function mr(ee){let f,h,v,O,_e,q,vt,ye,Et,Ge,te,bt,Fe,M,qe,ae,kt,Me,re,At,Ne,N,Be,D,Ct,ge,xt,Pt,Ve,C,z,$e,B,jt,oe,It,we,Ot,Ye,T,Dt,ve,zt,Tt,Je,L,Xe,le,Lt,Re,V,Ke,U,Ut,Ee,St,Ht,Qe,S,Gt,be,Ft,qt,We,Y,Ze,b,Mt,ke,Nt,Bt,Ae,Vt,Yt,et,J,tt,se,Jt,at,X,rt,ie,Xt,ot,R,lt,H,st,x,G,Ce,K,Rt,xe,Kt,it,E,Qt,Pe,Wt,Zt,je,ea,ta,Ie,aa,ra,nt,k,P,oa,Oe,la,sa,De,ia,na,ca,j,ua,ze,pa,fa,Te,ha,ma,da,ne,_a,Le,ya,ct,A,ga,Ue,$a,wa,Se,va,Ea,ut,ce,ba,pt,Q,ft,ue,ka,ht,W,mt;return q=new xa({}),M=new I({props:{code:`from accelerate import Accelerator

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
<span class="hljs-addition">+   main()</span>`}}),B=new xa({}),L=new sr({props:{$$slots:{default:[fr]},$$scope:{ctx:ee}}}),V=new I({props:{code:"accelerate launch {script_name.py} --arg1 --arg2 ...",highlighted:"accelerate launch {script_name.py} --arg1 --arg2 ..."}}),Y=new I({props:{code:'CUDA_VISIBLE_DEVICES="0" accelerate launch {script_name.py} --arg1 --arg2 ...',highlighted:'CUDA_VISIBLE_DEVICES=<span class="hljs-string">&quot;0&quot;</span> accelerate launch {script_name.py} --arg1 --arg2 ...'}}),J=new I({props:{code:"accelerate launch --multi_gpu {script_name.py} --arg1 --arg2 ...",highlighted:"accelerate launch --multi_gpu {script_name.py} --arg1 --arg2 ..."}}),X=new I({props:{code:"accelerate launch --multi_gpu --mixed_precision=fp16 --num_processes=2 {script_name.py} --arg1 --arg2 ...",highlighted:"accelerate launch --multi_gpu --mixed_precision=fp16 --num_processes=2 {script_name.py} --arg1 --arg2 ..."}}),R=new I({props:{code:"accelerate launch -h",highlighted:"accelerate launch -h"}}),H=new sr({props:{$$slots:{default:[hr]},$$scope:{ctx:ee}}}),K=new xa({}),Q=new I({props:{code:`compute_environment: LOCAL_MACHINE
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
<span class="hljs-attr">use_cpu:</span> <span class="hljs-literal">false</span>`}}),W=new I({props:{code:"accelerate launch --config_file path/to/config/my_config_file.yaml path_to_script.py --args_for_the_script",highlighted:"accelerate launch --config_file path/to/config/my_config_file.yaml path_to_script.py --args_for_the_script"}}),{c(){f=i("meta"),h=u(),v=i("h1"),O=i("a"),_e=i("span"),m(q.$$.fragment),vt=u(),ye=i("span"),Et=o("Launching your \u{1F917} Accelerate scripts"),Ge=u(),te=i("p"),bt=o(`In the previous tutorial you were introduced with how to modify your current training script to use \u{1F917} Accelerate.
The final version of that code is shown below:`),Fe=u(),m(M.$$.fragment),qe=u(),ae=i("p"),kt=o("But how do you run this code and have it utilize the special hardware available to it?"),Me=u(),re=i("p"),At=o("First you should rewrite the above code into a function, and make it callable as a script. For example:"),Ne=u(),m(N.$$.fragment),Be=u(),D=i("p"),Ct=o("Next you need to launch it with "),ge=i("code"),xt=o("accelerate launch"),Pt=o("."),Ve=u(),C=i("h2"),z=i("a"),$e=i("span"),m(B.$$.fragment),jt=u(),oe=i("span"),It=o("Using "),we=i("code"),Ot=o("accelerate launch"),Ye=u(),T=i("p"),Dt=o("\u{1F917} Accelerate has a special CLI command to help you launch your code in your system through "),ve=i("code"),zt=o("accelerate launch"),Tt=o(`.
This command wraps around all of the different commands needed to launch your script on various platforms, without you
having to remember what each of them are.`),Je=u(),m(L.$$.fragment),Xe=u(),le=i("p"),Lt=o("You can launch your script quickly by using:"),Re=u(),m(V.$$.fragment),Ke=u(),U=i("p"),Ut=o("Just put "),Ee=i("code"),St=o("accelerate launch"),Ht=o(" at the start of your command, and pass in additional arguments and parameters to your script afterwards like normal!"),Qe=u(),S=i("p"),Gt=o(`Since this runs the various different torch spawn methods, all of the environmental variables that would be expected for them can be modified here as well.
For example, here is how to use `),be=i("code"),Ft=o("accelerate launch"),qt=o(" but only use a single GPU:"),We=u(),m(Y.$$.fragment),Ze=u(),b=i("p"),Mt=o("You can also use "),ke=i("code"),Nt=o("accelerate launch"),Bt=o(" without performing "),Ae=i("code"),Vt=o("accelerate config"),Yt=o(` first, but you may need to manually pass in the right configuration parameters.
Accelerate can take some liberties towards a few hyperparameters, such as if a GPU is available it will use all of them by default, and no mixed precision will be used.
Here is how you would use all GPUs and train on no mixed precision:`),et=u(),m(J.$$.fragment),tt=u(),se=i("p"),Jt=o(`To get more specific you should pass in the needed parameters yourself. For instance, here is how you
would also launch that same script on two GPUs using mixed precision, but also avoiding all of the warnings:`),at=u(),m(X.$$.fragment),rt=u(),ie=i("p"),Xt=o("For a full list of all parameters you can pass in, run:"),ot=u(),m(R.$$.fragment),lt=u(),m(H.$$.fragment),st=u(),x=i("h2"),G=i("a"),Ce=i("span"),m(K.$$.fragment),Rt=u(),xe=i("span"),Kt=o("Custom Configurations"),it=u(),E=i("p"),Qt=o("As briefly mentioned earlier, "),Pe=i("code"),Wt=o("accelerate launch"),Zt=o(` should be mostly used through combining set configurations
made with the `),je=i("code"),ea=o("accelerate config"),ta=o(" command. These configs are saved to a "),Ie=i("code"),aa=o("default_config.yaml"),ra=o(` file in your cache folder for \u{1F917} Accelerate.
This cache folder is located at (with decreasing order of priority):`),nt=u(),k=i("ul"),P=i("li"),oa=o("The content of your environment variable "),Oe=i("code"),la=o("HF_HOME"),sa=o(" suffixed with "),De=i("code"),ia=o("accelerate"),na=o("."),ca=u(),j=i("li"),ua=o("If it does not exist, the content of your environment variable "),ze=i("code"),pa=o("XDG_CACHE_HOME"),fa=o(` suffixed with
`),Te=i("code"),ha=o("huggingface/accelerate"),ma=o("."),da=u(),ne=i("li"),_a=o("If this does not exist either, the folder "),Le=i("code"),ya=o("~/.cache/huggingface/accelerate"),ct=u(),A=i("p"),ga=o("To have multiple configurations, the flag "),Ue=i("code"),$a=o("--config_file"),wa=o(" can be passed to the "),Se=i("code"),va=o("accelerate launch"),Ea=o(` command paired
with the location of the custom yaml.`),ut=u(),ce=i("p"),ba=o("An example yaml may look something like the following:"),pt=u(),m(Q.$$.fragment),ft=u(),ue=i("p"),ka=o("An example of launching a script with a yaml located in a custom location would look something like so:"),ht=u(),m(W.$$.fragment),this.h()},l(e){const r=ur('[data-svelte="svelte-1phssyn"]',document.head);f=n(r,"META",{name:!0,content:!0}),r.forEach(t),h=p(e),v=n(e,"H1",{class:!0});var Z=c(v);O=n(Z,"A",{id:!0,class:!0,href:!0});var He=c(O);_e=n(He,"SPAN",{});var Pa=c(_e);d(q.$$.fragment,Pa),Pa.forEach(t),He.forEach(t),vt=p(Z),ye=n(Z,"SPAN",{});var ja=c(ye);Et=l(ja,"Launching your \u{1F917} Accelerate scripts"),ja.forEach(t),Z.forEach(t),Ge=p(e),te=n(e,"P",{});var Ia=c(te);bt=l(Ia,`In the previous tutorial you were introduced with how to modify your current training script to use \u{1F917} Accelerate.
The final version of that code is shown below:`),Ia.forEach(t),Fe=p(e),d(M.$$.fragment,e),qe=p(e),ae=n(e,"P",{});var Oa=c(ae);kt=l(Oa,"But how do you run this code and have it utilize the special hardware available to it?"),Oa.forEach(t),Me=p(e),re=n(e,"P",{});var Da=c(re);At=l(Da,"First you should rewrite the above code into a function, and make it callable as a script. For example:"),Da.forEach(t),Ne=p(e),d(N.$$.fragment,e),Be=p(e),D=n(e,"P",{});var dt=c(D);Ct=l(dt,"Next you need to launch it with "),ge=n(dt,"CODE",{});var za=c(ge);xt=l(za,"accelerate launch"),za.forEach(t),Pt=l(dt,"."),dt.forEach(t),Ve=p(e),C=n(e,"H2",{class:!0});var _t=c(C);z=n(_t,"A",{id:!0,class:!0,href:!0});var Ta=c(z);$e=n(Ta,"SPAN",{});var La=c($e);d(B.$$.fragment,La),La.forEach(t),Ta.forEach(t),jt=p(_t),oe=n(_t,"SPAN",{});var Aa=c(oe);It=l(Aa,"Using "),we=n(Aa,"CODE",{});var Ua=c(we);Ot=l(Ua,"accelerate launch"),Ua.forEach(t),Aa.forEach(t),_t.forEach(t),Ye=p(e),T=n(e,"P",{});var yt=c(T);Dt=l(yt,"\u{1F917} Accelerate has a special CLI command to help you launch your code in your system through "),ve=n(yt,"CODE",{});var Sa=c(ve);zt=l(Sa,"accelerate launch"),Sa.forEach(t),Tt=l(yt,`.
This command wraps around all of the different commands needed to launch your script on various platforms, without you
having to remember what each of them are.`),yt.forEach(t),Je=p(e),d(L.$$.fragment,e),Xe=p(e),le=n(e,"P",{});var Ha=c(le);Lt=l(Ha,"You can launch your script quickly by using:"),Ha.forEach(t),Re=p(e),d(V.$$.fragment,e),Ke=p(e),U=n(e,"P",{});var gt=c(U);Ut=l(gt,"Just put "),Ee=n(gt,"CODE",{});var Ga=c(Ee);St=l(Ga,"accelerate launch"),Ga.forEach(t),Ht=l(gt," at the start of your command, and pass in additional arguments and parameters to your script afterwards like normal!"),gt.forEach(t),Qe=p(e),S=n(e,"P",{});var $t=c(S);Gt=l($t,`Since this runs the various different torch spawn methods, all of the environmental variables that would be expected for them can be modified here as well.
For example, here is how to use `),be=n($t,"CODE",{});var Fa=c(be);Ft=l(Fa,"accelerate launch"),Fa.forEach(t),qt=l($t," but only use a single GPU:"),$t.forEach(t),We=p(e),d(Y.$$.fragment,e),Ze=p(e),b=n(e,"P",{});var pe=c(b);Mt=l(pe,"You can also use "),ke=n(pe,"CODE",{});var qa=c(ke);Nt=l(qa,"accelerate launch"),qa.forEach(t),Bt=l(pe," without performing "),Ae=n(pe,"CODE",{});var Ma=c(Ae);Vt=l(Ma,"accelerate config"),Ma.forEach(t),Yt=l(pe,` first, but you may need to manually pass in the right configuration parameters.
Accelerate can take some liberties towards a few hyperparameters, such as if a GPU is available it will use all of them by default, and no mixed precision will be used.
Here is how you would use all GPUs and train on no mixed precision:`),pe.forEach(t),et=p(e),d(J.$$.fragment,e),tt=p(e),se=n(e,"P",{});var Na=c(se);Jt=l(Na,`To get more specific you should pass in the needed parameters yourself. For instance, here is how you
would also launch that same script on two GPUs using mixed precision, but also avoiding all of the warnings:`),Na.forEach(t),at=p(e),d(X.$$.fragment,e),rt=p(e),ie=n(e,"P",{});var Ba=c(ie);Xt=l(Ba,"For a full list of all parameters you can pass in, run:"),Ba.forEach(t),ot=p(e),d(R.$$.fragment,e),lt=p(e),d(H.$$.fragment,e),st=p(e),x=n(e,"H2",{class:!0});var wt=c(x);G=n(wt,"A",{id:!0,class:!0,href:!0});var Va=c(G);Ce=n(Va,"SPAN",{});var Ya=c(Ce);d(K.$$.fragment,Ya),Ya.forEach(t),Va.forEach(t),Rt=p(wt),xe=n(wt,"SPAN",{});var Ja=c(xe);Kt=l(Ja,"Custom Configurations"),Ja.forEach(t),wt.forEach(t),it=p(e),E=n(e,"P",{});var F=c(E);Qt=l(F,"As briefly mentioned earlier, "),Pe=n(F,"CODE",{});var Xa=c(Pe);Wt=l(Xa,"accelerate launch"),Xa.forEach(t),Zt=l(F,` should be mostly used through combining set configurations
made with the `),je=n(F,"CODE",{});var Ra=c(je);ea=l(Ra,"accelerate config"),Ra.forEach(t),ta=l(F," command. These configs are saved to a "),Ie=n(F,"CODE",{});var Ka=c(Ie);aa=l(Ka,"default_config.yaml"),Ka.forEach(t),ra=l(F,` file in your cache folder for \u{1F917} Accelerate.
This cache folder is located at (with decreasing order of priority):`),F.forEach(t),nt=p(e),k=n(e,"UL",{});var fe=c(k);P=n(fe,"LI",{});var he=c(P);oa=l(he,"The content of your environment variable "),Oe=n(he,"CODE",{});var Qa=c(Oe);la=l(Qa,"HF_HOME"),Qa.forEach(t),sa=l(he," suffixed with "),De=n(he,"CODE",{});var Wa=c(De);ia=l(Wa,"accelerate"),Wa.forEach(t),na=l(he,"."),he.forEach(t),ca=p(fe),j=n(fe,"LI",{});var me=c(j);ua=l(me,"If it does not exist, the content of your environment variable "),ze=n(me,"CODE",{});var Za=c(ze);pa=l(Za,"XDG_CACHE_HOME"),Za.forEach(t),fa=l(me,` suffixed with
`),Te=n(me,"CODE",{});var er=c(Te);ha=l(er,"huggingface/accelerate"),er.forEach(t),ma=l(me,"."),me.forEach(t),da=p(fe),ne=n(fe,"LI",{});var Ca=c(ne);_a=l(Ca,"If this does not exist either, the folder "),Le=n(Ca,"CODE",{});var tr=c(Le);ya=l(tr,"~/.cache/huggingface/accelerate"),tr.forEach(t),Ca.forEach(t),fe.forEach(t),ct=p(e),A=n(e,"P",{});var de=c(A);ga=l(de,"To have multiple configurations, the flag "),Ue=n(de,"CODE",{});var ar=c(Ue);$a=l(ar,"--config_file"),ar.forEach(t),wa=l(de," can be passed to the "),Se=n(de,"CODE",{});var rr=c(Se);va=l(rr,"accelerate launch"),rr.forEach(t),Ea=l(de,` command paired
with the location of the custom yaml.`),de.forEach(t),ut=p(e),ce=n(e,"P",{});var or=c(ce);ba=l(or,"An example yaml may look something like the following:"),or.forEach(t),pt=p(e),d(Q.$$.fragment,e),ft=p(e),ue=n(e,"P",{});var lr=c(ue);ka=l(lr,"An example of launching a script with a yaml located in a custom location would look something like so:"),lr.forEach(t),ht=p(e),d(W.$$.fragment,e),this.h()},h(){_(f,"name","hf:doc:metadata"),_(f,"content",JSON.stringify(dr)),_(O,"id","launching-your-accelerate-scripts"),_(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(O,"href","#launching-your-accelerate-scripts"),_(v,"class","relative group"),_(z,"id","using-accelerate-launch"),_(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(z,"href","#using-accelerate-launch"),_(C,"class","relative group"),_(G,"id","custom-configurations"),_(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(G,"href","#custom-configurations"),_(x,"class","relative group")},m(e,r){a(document.head,f),s(e,h,r),s(e,v,r),a(v,O),a(O,_e),y(q,_e,null),a(v,vt),a(v,ye),a(ye,Et),s(e,Ge,r),s(e,te,r),a(te,bt),s(e,Fe,r),y(M,e,r),s(e,qe,r),s(e,ae,r),a(ae,kt),s(e,Me,r),s(e,re,r),a(re,At),s(e,Ne,r),y(N,e,r),s(e,Be,r),s(e,D,r),a(D,Ct),a(D,ge),a(ge,xt),a(D,Pt),s(e,Ve,r),s(e,C,r),a(C,z),a(z,$e),y(B,$e,null),a(C,jt),a(C,oe),a(oe,It),a(oe,we),a(we,Ot),s(e,Ye,r),s(e,T,r),a(T,Dt),a(T,ve),a(ve,zt),a(T,Tt),s(e,Je,r),y(L,e,r),s(e,Xe,r),s(e,le,r),a(le,Lt),s(e,Re,r),y(V,e,r),s(e,Ke,r),s(e,U,r),a(U,Ut),a(U,Ee),a(Ee,St),a(U,Ht),s(e,Qe,r),s(e,S,r),a(S,Gt),a(S,be),a(be,Ft),a(S,qt),s(e,We,r),y(Y,e,r),s(e,Ze,r),s(e,b,r),a(b,Mt),a(b,ke),a(ke,Nt),a(b,Bt),a(b,Ae),a(Ae,Vt),a(b,Yt),s(e,et,r),y(J,e,r),s(e,tt,r),s(e,se,r),a(se,Jt),s(e,at,r),y(X,e,r),s(e,rt,r),s(e,ie,r),a(ie,Xt),s(e,ot,r),y(R,e,r),s(e,lt,r),y(H,e,r),s(e,st,r),s(e,x,r),a(x,G),a(G,Ce),y(K,Ce,null),a(x,Rt),a(x,xe),a(xe,Kt),s(e,it,r),s(e,E,r),a(E,Qt),a(E,Pe),a(Pe,Wt),a(E,Zt),a(E,je),a(je,ea),a(E,ta),a(E,Ie),a(Ie,aa),a(E,ra),s(e,nt,r),s(e,k,r),a(k,P),a(P,oa),a(P,Oe),a(Oe,la),a(P,sa),a(P,De),a(De,ia),a(P,na),a(k,ca),a(k,j),a(j,ua),a(j,ze),a(ze,pa),a(j,fa),a(j,Te),a(Te,ha),a(j,ma),a(k,da),a(k,ne),a(ne,_a),a(ne,Le),a(Le,ya),s(e,ct,r),s(e,A,r),a(A,ga),a(A,Ue),a(Ue,$a),a(A,wa),a(A,Se),a(Se,va),a(A,Ea),s(e,ut,r),s(e,ce,r),a(ce,ba),s(e,pt,r),y(Q,e,r),s(e,ft,r),s(e,ue,r),a(ue,ka),s(e,ht,r),y(W,e,r),mt=!0},p(e,[r]){const Z={};r&2&&(Z.$$scope={dirty:r,ctx:e}),L.$set(Z);const He={};r&2&&(He.$$scope={dirty:r,ctx:e}),H.$set(He)},i(e){mt||(g(q.$$.fragment,e),g(M.$$.fragment,e),g(N.$$.fragment,e),g(B.$$.fragment,e),g(L.$$.fragment,e),g(V.$$.fragment,e),g(Y.$$.fragment,e),g(J.$$.fragment,e),g(X.$$.fragment,e),g(R.$$.fragment,e),g(H.$$.fragment,e),g(K.$$.fragment,e),g(Q.$$.fragment,e),g(W.$$.fragment,e),mt=!0)},o(e){$(q.$$.fragment,e),$(M.$$.fragment,e),$(N.$$.fragment,e),$(B.$$.fragment,e),$(L.$$.fragment,e),$(V.$$.fragment,e),$(Y.$$.fragment,e),$(J.$$.fragment,e),$(X.$$.fragment,e),$(R.$$.fragment,e),$(H.$$.fragment,e),$(K.$$.fragment,e),$(Q.$$.fragment,e),$(W.$$.fragment,e),mt=!1},d(e){t(f),e&&t(h),e&&t(v),w(q),e&&t(Ge),e&&t(te),e&&t(Fe),w(M,e),e&&t(qe),e&&t(ae),e&&t(Me),e&&t(re),e&&t(Ne),w(N,e),e&&t(Be),e&&t(D),e&&t(Ve),e&&t(C),w(B),e&&t(Ye),e&&t(T),e&&t(Je),w(L,e),e&&t(Xe),e&&t(le),e&&t(Re),w(V,e),e&&t(Ke),e&&t(U),e&&t(Qe),e&&t(S),e&&t(We),w(Y,e),e&&t(Ze),e&&t(b),e&&t(et),w(J,e),e&&t(tt),e&&t(se),e&&t(at),w(X,e),e&&t(rt),e&&t(ie),e&&t(ot),w(R,e),e&&t(lt),w(H,e),e&&t(st),e&&t(x),w(K),e&&t(it),e&&t(E),e&&t(nt),e&&t(k),e&&t(ct),e&&t(A),e&&t(ut),e&&t(ce),e&&t(pt),w(Q,e),e&&t(ft),e&&t(ue),e&&t(ht),w(W,e)}}}const dr={local:"launching-your-accelerate-scripts",sections:[{local:"using-accelerate-launch",title:"Using `accelerate launch`"},{local:"custom-configurations",title:"Custom Configurations"}],title:"Launching your \u{1F917} Accelerate scripts"};function _r(ee){return pr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vr extends ir{constructor(f){super();nr(this,f,_r,mr,cr,{})}}export{vr as default,dr as metadata};
