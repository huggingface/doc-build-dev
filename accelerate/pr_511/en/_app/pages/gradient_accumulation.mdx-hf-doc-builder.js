import{S as Dt,i as Mt,s as Rt,e as s,k as p,w as g,t as n,M as Wt,c as i,d as t,m as u,a as l,x as _,h as c,b as d,G as a,g as o,y as w,q as v,o as $,B as b,v as Yt}from"../chunks/vendor-hf-doc-builder.js";import{T as Jt}from"../chunks/Tip-hf-doc-builder.js";import{I as He}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as te}from"../chunks/CodeBlock-hf-doc-builder.js";function Ut(he){let h;return{c(){h=n("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},l(y){h=c(y,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},m(y,f){o(y,h,f)},d(y){y&&t(h)}}}function Kt(he){let h,y,f,E,ae,q,Oe,re,De,me,W,Me,fe,Y,Re,ge,J,We,_e,U,Ye,we,I,ve,k,x,oe,L,Je,se,Ue,$e,K,Ke,be,B,ye,P,Ae,j,T,ie,F,Qe,le,Ve,ke,m,Xe,ne,Ze,et,ce,tt,at,pe,rt,ot,Q,st,it,je,G,ze,C,lt,V,nt,ct,Ee,H,xe,X,pt,Pe,O,Te,S,ut,Z,dt,ht,Ce,z,N,ue,D,mt,de,ft,Se,ee,gt,Ne,M,qe;return q=new He({}),I=new te({props:{code:`device = 'cuda'
model.to(device)

gradient_accumulation_steps = 2

for index, batch in enumerate(training_dataloader):
    optimizer.zero_grad()
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss = loss / gradient_accumulation_steps
    loss.backward()
    if (index+1) % gradient_accumulation_steps == 0:
        optimizer.step()
        scheduler.step()`,highlighted:`device = <span class="hljs-string">&#x27;cuda&#x27;</span>
model.<span class="hljs-keyword">to</span>(device)

gradient_accumulation_steps = <span class="hljs-number">2</span>

<span class="hljs-keyword">for</span> index, batch <span class="hljs-built_in">in</span> enumerate(training_dataloader):
    optimizer.zero_grad()
    inputs, <span class="hljs-built_in">targets</span> = batch
    inputs = inputs.<span class="hljs-keyword">to</span>(device)
    <span class="hljs-built_in">targets</span> = <span class="hljs-built_in">targets</span>.<span class="hljs-keyword">to</span>(device)
    outputs = model(inputs)
    loss = loss_function(outputs, <span class="hljs-built_in">targets</span>)
    loss = loss / gradient_accumulation_steps
    loss.backward()
    <span class="hljs-keyword">if</span> (index+<span class="hljs-number">1</span>) % gradient_accumulation_steps == <span class="hljs-number">0</span>:
        optimizer.<span class="hljs-built_in">step</span>()
        scheduler.<span class="hljs-built_in">step</span>()`}}),L=new He({}),B=new te({props:{code:`+from accelerate import Accelerator
+accelerator = Accelerator()

+model, optimizer, training_dataloader, scheduler = accelerator.prepare(
+    model, optimizer, training_dataloader, scheduler
+)

for index, batch in enumerate(training_dataloader):
    optimizer.zero_grad()
    inputs, targets = batch
-    inputs = inputs.to(device)
-    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss = loss / gradient_accumulation_steps
+    accelerator.backward(loss)
    if (index+1) % gradient_accumulation_steps == 0:
        optimizer.step()
        scheduler.step()`,highlighted:`<span class="hljs-addition">+from accelerate import Accelerator</span>
<span class="hljs-addition">+accelerator = Accelerator()</span>

<span class="hljs-addition">+model, optimizer, training_dataloader, scheduler = accelerator.prepare(</span>
<span class="hljs-addition">+    model, optimizer, training_dataloader, scheduler</span>
<span class="hljs-addition">+)</span>

for index, batch in enumerate(training_dataloader):
    optimizer.zero_grad()
    inputs, targets = batch
<span class="hljs-deletion">-    inputs = inputs.to(device)</span>
<span class="hljs-deletion">-    targets = targets.to(device)</span>
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss = loss / gradient_accumulation_steps
<span class="hljs-addition">+    accelerator.backward(loss)</span>
    if (index+1) % gradient_accumulation_steps == 0:
        optimizer.step()
        scheduler.step()`}}),P=new Jt({props:{warning:!0,$$slots:{default:[Ut]},$$scope:{ctx:he}}}),F=new He({}),G=new te({props:{code:`from accelerate import Accelerator
-accelerator = Accelerator()
+accelerator = Accelerator(gradient_accumulation_steps=2)`,highlighted:`from accelerate import Accelerator
<span class="hljs-deletion">-accelerator = Accelerator()</span>
<span class="hljs-addition">+accelerator = Accelerator(gradient_accumulation_steps=2)</span>`}}),H=new te({props:{code:`-for index, batch in enumerate(training_dataloader):
+for batch in training_dataloader:
+   with accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)`,highlighted:`<span class="hljs-deletion">-for index, batch in enumerate(training_dataloader):</span>
<span class="hljs-addition">+for batch in training_dataloader:</span>
<span class="hljs-addition">+   with accelerator.accumulate(model):</span>
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)`}}),O=new te({props:{code:`-loss = loss / gradient_accumulation_steps
accelerator.backward(loss)
-if (index+1) % gradient_accumulation_steps == 0:
optimizer.step()
scheduler.step()`,highlighted:`<span class="hljs-deletion">-loss = loss / gradient_accumulation_steps</span>
accelerator.backward(loss)
<span class="hljs-deletion">-if (index+1) % gradient_accumulation_steps == 0:</span>
optimizer.step()
scheduler.step()`}}),D=new He({}),M=new te({props:{code:`for batch in training_dataloader:
    with accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)
        loss = loss_function(outputs, targets)
        accelerator.backward(loss)
        optimizer.step()
        scheduler.step()`,highlighted:`<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> training_dataloader:
    <span class="hljs-keyword">with</span> accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)
        loss = loss_function(outputs, targets)
        accelerator.backward(loss)
        optimizer.step()
        scheduler.step()`}}),{c(){h=s("meta"),y=p(),f=s("h1"),E=s("a"),ae=s("span"),g(q.$$.fragment),Oe=p(),re=s("span"),De=n("Performing gradient accumulation with \u{1F917} Accelerate"),me=p(),W=s("p"),Me=n(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),fe=p(),Y=s("p"),Re=n(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),ge=p(),J=s("p"),We=n(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilities provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),_e=p(),U=s("p"),Ye=n("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),we=p(),g(I.$$.fragment),ve=p(),k=s("h2"),x=s("a"),oe=s("span"),g(L.$$.fragment),Je=p(),se=s("span"),Ue=n("Converting it to \u{1F917} Accelerate"),$e=p(),K=s("p"),Ke=n("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),be=p(),g(B.$$.fragment),ye=p(),g(P.$$.fragment),Ae=p(),j=s("h2"),T=s("a"),ie=s("span"),g(F.$$.fragment),Qe=p(),le=s("span"),Ve=n("Letting \u{1F917} Accelerate handle gradient accumulation"),ke=p(),m=s("p"),Xe=n("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ne=s("code"),Ze=n("gradient_accumulation_steps"),et=n(" parameter to "),ce=s("code"),tt=n("Accelerator"),at=n(`, dictating the number
of steps to perform before each call to `),pe=s("code"),rt=n("step()"),ot=n(" and how to automatically adjust the loss during the call to "),Q=s("a"),st=n("Accelerator.backward()"),it=n(":"),je=p(),g(G.$$.fragment),ze=p(),C=s("p"),lt=n("From here you can use the "),V=s("a"),nt=n("Accelerator.accumulate()"),ct=n(` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Ee=p(),g(H.$$.fragment),xe=p(),X=s("p"),pt=n("and you can remove all the special checks for the step number and the loss adjustment:"),Pe=p(),g(O.$$.fragment),Te=p(),S=s("p"),ut=n("As you can see the "),Z=s("a"),dt=n("Accelerator"),ht=n(" is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Ce=p(),z=s("h2"),N=s("a"),ue=s("span"),g(D.$$.fragment),mt=p(),de=s("span"),ft=n("The finished code"),Se=p(),ee=s("p"),gt=n("Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Ne=p(),g(M.$$.fragment),this.h()},l(e){const r=Wt('[data-svelte="svelte-1phssyn"]',document.head);h=i(r,"META",{name:!0,content:!0}),r.forEach(t),y=u(e),f=i(e,"H1",{class:!0});var R=l(f);E=i(R,"A",{id:!0,class:!0,href:!0});var _t=l(E);ae=i(_t,"SPAN",{});var wt=l(ae);_(q.$$.fragment,wt),wt.forEach(t),_t.forEach(t),Oe=u(R),re=i(R,"SPAN",{});var vt=l(re);De=c(vt,"Performing gradient accumulation with \u{1F917} Accelerate"),vt.forEach(t),R.forEach(t),me=u(e),W=i(e,"P",{});var $t=l(W);Me=c($t,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),$t.forEach(t),fe=u(e),Y=i(e,"P",{});var bt=l(Y);Re=c(bt,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),bt.forEach(t),ge=u(e),J=i(e,"P",{});var yt=l(J);We=c(yt,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilities provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),yt.forEach(t),_e=u(e),U=i(e,"P",{});var At=l(U);Ye=c(At,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),At.forEach(t),we=u(e),_(I.$$.fragment,e),ve=u(e),k=i(e,"H2",{class:!0});var Ie=l(k);x=i(Ie,"A",{id:!0,class:!0,href:!0});var kt=l(x);oe=i(kt,"SPAN",{});var jt=l(oe);_(L.$$.fragment,jt),jt.forEach(t),kt.forEach(t),Je=u(Ie),se=i(Ie,"SPAN",{});var zt=l(se);Ue=c(zt,"Converting it to \u{1F917} Accelerate"),zt.forEach(t),Ie.forEach(t),$e=u(e),K=i(e,"P",{});var Et=l(K);Ke=c(Et,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),Et.forEach(t),be=u(e),_(B.$$.fragment,e),ye=u(e),_(P.$$.fragment,e),Ae=u(e),j=i(e,"H2",{class:!0});var Le=l(j);T=i(Le,"A",{id:!0,class:!0,href:!0});var xt=l(T);ie=i(xt,"SPAN",{});var Pt=l(ie);_(F.$$.fragment,Pt),Pt.forEach(t),xt.forEach(t),Qe=u(Le),le=i(Le,"SPAN",{});var Tt=l(le);Ve=c(Tt,"Letting \u{1F917} Accelerate handle gradient accumulation"),Tt.forEach(t),Le.forEach(t),ke=u(e),m=i(e,"P",{});var A=l(m);Xe=c(A,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ne=i(A,"CODE",{});var Ct=l(ne);Ze=c(Ct,"gradient_accumulation_steps"),Ct.forEach(t),et=c(A," parameter to "),ce=i(A,"CODE",{});var St=l(ce);tt=c(St,"Accelerator"),St.forEach(t),at=c(A,`, dictating the number
of steps to perform before each call to `),pe=i(A,"CODE",{});var Nt=l(pe);rt=c(Nt,"step()"),Nt.forEach(t),ot=c(A," and how to automatically adjust the loss during the call to "),Q=i(A,"A",{href:!0});var qt=l(Q);st=c(qt,"Accelerator.backward()"),qt.forEach(t),it=c(A,":"),A.forEach(t),je=u(e),_(G.$$.fragment,e),ze=u(e),C=i(e,"P",{});var Be=l(C);lt=c(Be,"From here you can use the "),V=i(Be,"A",{href:!0});var It=l(V);nt=c(It,"Accelerator.accumulate()"),It.forEach(t),ct=c(Be,` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Be.forEach(t),Ee=u(e),_(H.$$.fragment,e),xe=u(e),X=i(e,"P",{});var Lt=l(X);pt=c(Lt,"and you can remove all the special checks for the step number and the loss adjustment:"),Lt.forEach(t),Pe=u(e),_(O.$$.fragment,e),Te=u(e),S=i(e,"P",{});var Fe=l(S);ut=c(Fe,"As you can see the "),Z=i(Fe,"A",{href:!0});var Bt=l(Z);dt=c(Bt,"Accelerator"),Bt.forEach(t),ht=c(Fe," is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Fe.forEach(t),Ce=u(e),z=i(e,"H2",{class:!0});var Ge=l(z);N=i(Ge,"A",{id:!0,class:!0,href:!0});var Ft=l(N);ue=i(Ft,"SPAN",{});var Gt=l(ue);_(D.$$.fragment,Gt),Gt.forEach(t),Ft.forEach(t),mt=u(Ge),de=i(Ge,"SPAN",{});var Ht=l(de);ft=c(Ht,"The finished code"),Ht.forEach(t),Ge.forEach(t),Se=u(e),ee=i(e,"P",{});var Ot=l(ee);gt=c(Ot,"Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Ot.forEach(t),Ne=u(e),_(M.$$.fragment,e),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Qt)),d(E,"id","performing-gradient-accumulation-with-accelerate"),d(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(E,"href","#performing-gradient-accumulation-with-accelerate"),d(f,"class","relative group"),d(x,"id","converting-it-to-accelerate"),d(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(x,"href","#converting-it-to-accelerate"),d(k,"class","relative group"),d(T,"id","letting-accelerate-handle-gradient-accumulation"),d(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(T,"href","#letting-accelerate-handle-gradient-accumulation"),d(j,"class","relative group"),d(Q,"href","/docs/accelerate/pr_511/en/accelerator#accelerate.Accelerator.backward"),d(V,"href","/docs/accelerate/pr_511/en/accelerator#accelerate.Accelerator.accumulate"),d(Z,"href","/docs/accelerate/pr_511/en/accelerator#accelerate.Accelerator"),d(N,"id","the-finished-code"),d(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(N,"href","#the-finished-code"),d(z,"class","relative group")},m(e,r){a(document.head,h),o(e,y,r),o(e,f,r),a(f,E),a(E,ae),w(q,ae,null),a(f,Oe),a(f,re),a(re,De),o(e,me,r),o(e,W,r),a(W,Me),o(e,fe,r),o(e,Y,r),a(Y,Re),o(e,ge,r),o(e,J,r),a(J,We),o(e,_e,r),o(e,U,r),a(U,Ye),o(e,we,r),w(I,e,r),o(e,ve,r),o(e,k,r),a(k,x),a(x,oe),w(L,oe,null),a(k,Je),a(k,se),a(se,Ue),o(e,$e,r),o(e,K,r),a(K,Ke),o(e,be,r),w(B,e,r),o(e,ye,r),w(P,e,r),o(e,Ae,r),o(e,j,r),a(j,T),a(T,ie),w(F,ie,null),a(j,Qe),a(j,le),a(le,Ve),o(e,ke,r),o(e,m,r),a(m,Xe),a(m,ne),a(ne,Ze),a(m,et),a(m,ce),a(ce,tt),a(m,at),a(m,pe),a(pe,rt),a(m,ot),a(m,Q),a(Q,st),a(m,it),o(e,je,r),w(G,e,r),o(e,ze,r),o(e,C,r),a(C,lt),a(C,V),a(V,nt),a(C,ct),o(e,Ee,r),w(H,e,r),o(e,xe,r),o(e,X,r),a(X,pt),o(e,Pe,r),w(O,e,r),o(e,Te,r),o(e,S,r),a(S,ut),a(S,Z),a(Z,dt),a(S,ht),o(e,Ce,r),o(e,z,r),a(z,N),a(N,ue),w(D,ue,null),a(z,mt),a(z,de),a(de,ft),o(e,Se,r),o(e,ee,r),a(ee,gt),o(e,Ne,r),w(M,e,r),qe=!0},p(e,[r]){const R={};r&2&&(R.$$scope={dirty:r,ctx:e}),P.$set(R)},i(e){qe||(v(q.$$.fragment,e),v(I.$$.fragment,e),v(L.$$.fragment,e),v(B.$$.fragment,e),v(P.$$.fragment,e),v(F.$$.fragment,e),v(G.$$.fragment,e),v(H.$$.fragment,e),v(O.$$.fragment,e),v(D.$$.fragment,e),v(M.$$.fragment,e),qe=!0)},o(e){$(q.$$.fragment,e),$(I.$$.fragment,e),$(L.$$.fragment,e),$(B.$$.fragment,e),$(P.$$.fragment,e),$(F.$$.fragment,e),$(G.$$.fragment,e),$(H.$$.fragment,e),$(O.$$.fragment,e),$(D.$$.fragment,e),$(M.$$.fragment,e),qe=!1},d(e){t(h),e&&t(y),e&&t(f),b(q),e&&t(me),e&&t(W),e&&t(fe),e&&t(Y),e&&t(ge),e&&t(J),e&&t(_e),e&&t(U),e&&t(we),b(I,e),e&&t(ve),e&&t(k),b(L),e&&t($e),e&&t(K),e&&t(be),b(B,e),e&&t(ye),b(P,e),e&&t(Ae),e&&t(j),b(F),e&&t(ke),e&&t(m),e&&t(je),b(G,e),e&&t(ze),e&&t(C),e&&t(Ee),b(H,e),e&&t(xe),e&&t(X),e&&t(Pe),b(O,e),e&&t(Te),e&&t(S),e&&t(Ce),e&&t(z),b(D),e&&t(Se),e&&t(ee),e&&t(Ne),b(M,e)}}}const Qt={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"},{local:"the-finished-code",title:"The finished code"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function Vt(he){return Yt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aa extends Dt{constructor(h){super();Mt(this,h,Vt,Kt,Rt,{})}}export{aa as default,Qt as metadata};
