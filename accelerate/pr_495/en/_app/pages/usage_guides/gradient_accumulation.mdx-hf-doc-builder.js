import{S as Rt,i as Yt,s as Jt,e as s,k as p,w as _,t as l,M as Ut,c as i,d as t,m as u,a as n,x as w,h as c,b as d,G as r,g as o,y as $,q as v,o as b,B as y,v as Kt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Mt}from"../../chunks/Tip-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";function Qt(Y){let h;return{c(){h=l("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},l(m){h=c(m,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},m(m,g){o(m,h,g)},d(m){m&&t(h)}}}function Vt(Y){let h;return{c(){h=l("Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},l(m){h=c(m,"Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},m(m,g){o(m,h,g)},d(m){m&&t(h)}}}function Xt(Y){let h,m,g,E,oe,L,Me,se,Re,ge,J,Ye,_e,U,Je,we,K,Ue,$e,Q,Ke,ve,G,be,A,x,ie,I,Qe,ne,Ve,ye,V,Xe,ke,D,Ae,P,je,j,C,le,B,Ze,ce,et,ze,f,tt,pe,at,rt,ue,ot,st,de,it,nt,X,lt,ct,Ee,F,xe,S,pt,Z,ut,dt,Pe,H,Ce,ee,ht,Se,O,Te,T,mt,te,ft,gt,Ne,N,qe,z,q,he,W,_t,me,wt,Le,ae,$t,Ge,M,Ie;return L=new We({}),G=new re({props:{code:`device = 'cuda'
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
        scheduler.<span class="hljs-built_in">step</span>()`}}),I=new We({}),D=new re({props:{code:`+from accelerate import Accelerator
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
        scheduler.step()`}}),P=new Mt({props:{warning:!0,$$slots:{default:[Qt]},$$scope:{ctx:Y}}}),B=new We({}),F=new re({props:{code:`from accelerate import Accelerator
-accelerator = Accelerator()
+accelerator = Accelerator(gradient_accumulation_steps=2)`,highlighted:`from accelerate import Accelerator
<span class="hljs-deletion">-accelerator = Accelerator()</span>
<span class="hljs-addition">+accelerator = Accelerator(gradient_accumulation_steps=2)</span>`}}),H=new re({props:{code:`-for index, batch in enumerate(training_dataloader):
+for batch in training_dataloader:
+   with accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)`,highlighted:`<span class="hljs-deletion">-for index, batch in enumerate(training_dataloader):</span>
<span class="hljs-addition">+for batch in training_dataloader:</span>
<span class="hljs-addition">+   with accelerator.accumulate(model):</span>
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)`}}),O=new re({props:{code:`-loss = loss / gradient_accumulation_steps
accelerator.backward(loss)
-if (index+1) % gradient_accumulation_steps == 0:
optimizer.step()
scheduler.step()`,highlighted:`<span class="hljs-deletion">-loss = loss / gradient_accumulation_steps</span>
accelerator.backward(loss)
<span class="hljs-deletion">-if (index+1) % gradient_accumulation_steps == 0:</span>
optimizer.step()
scheduler.step()`}}),N=new Mt({props:{warning:!0,$$slots:{default:[Vt]},$$scope:{ctx:Y}}}),W=new We({}),M=new re({props:{code:`for batch in training_dataloader:
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
        scheduler.step()`}}),{c(){h=s("meta"),m=p(),g=s("h1"),E=s("a"),oe=s("span"),_(L.$$.fragment),Me=p(),se=s("span"),Re=l("Performing gradient accumulation with \u{1F917} Accelerate"),ge=p(),J=s("p"),Ye=l(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),_e=p(),U=s("p"),Je=l(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),we=p(),K=s("p"),Ue=l(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilities provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),$e=p(),Q=s("p"),Ke=l("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),ve=p(),_(G.$$.fragment),be=p(),A=s("h2"),x=s("a"),ie=s("span"),_(I.$$.fragment),Qe=p(),ne=s("span"),Ve=l("Converting it to \u{1F917} Accelerate"),ye=p(),V=s("p"),Xe=l("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),ke=p(),_(D.$$.fragment),Ae=p(),_(P.$$.fragment),je=p(),j=s("h2"),C=s("a"),le=s("span"),_(B.$$.fragment),Ze=p(),ce=s("span"),et=l("Letting \u{1F917} Accelerate handle gradient accumulation"),ze=p(),f=s("p"),tt=l("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),pe=s("code"),at=l("gradient_accumulation_steps"),rt=l(" parameter to "),ue=s("code"),ot=l("Accelerator"),st=l(`, dictating the number
of steps to perform before each call to `),de=s("code"),it=l("step()"),nt=l(" and how to automatically adjust the loss during the call to "),X=s("a"),lt=l("Accelerator.backward()"),ct=l(":"),Ee=p(),_(F.$$.fragment),xe=p(),S=s("p"),pt=l("From here you can use the "),Z=s("a"),ut=l("Accelerator.accumulate()"),dt=l(` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Pe=p(),_(H.$$.fragment),Ce=p(),ee=s("p"),ht=l("and you can remove all the special checks for the step number and the loss adjustment:"),Se=p(),_(O.$$.fragment),Te=p(),T=s("p"),mt=l("As you can see the "),te=s("a"),ft=l("Accelerator"),gt=l(" is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Ne=p(),_(N.$$.fragment),qe=p(),z=s("h2"),q=s("a"),he=s("span"),_(W.$$.fragment),_t=p(),me=s("span"),wt=l("The finished code"),Le=p(),ae=s("p"),$t=l("Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Ge=p(),_(M.$$.fragment),this.h()},l(e){const a=Ut('[data-svelte="svelte-1phssyn"]',document.head);h=i(a,"META",{name:!0,content:!0}),a.forEach(t),m=u(e),g=i(e,"H1",{class:!0});var R=n(g);E=i(R,"A",{id:!0,class:!0,href:!0});var fe=n(E);oe=i(fe,"SPAN",{});var vt=n(oe);w(L.$$.fragment,vt),vt.forEach(t),fe.forEach(t),Me=u(R),se=i(R,"SPAN",{});var bt=n(se);Re=c(bt,"Performing gradient accumulation with \u{1F917} Accelerate"),bt.forEach(t),R.forEach(t),ge=u(e),J=i(e,"P",{});var yt=n(J);Ye=c(yt,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),yt.forEach(t),_e=u(e),U=i(e,"P",{});var kt=n(U);Je=c(kt,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),kt.forEach(t),we=u(e),K=i(e,"P",{});var At=n(K);Ue=c(At,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilities provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),At.forEach(t),$e=u(e),Q=i(e,"P",{});var jt=n(Q);Ke=c(jt,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),jt.forEach(t),ve=u(e),w(G.$$.fragment,e),be=u(e),A=i(e,"H2",{class:!0});var De=n(A);x=i(De,"A",{id:!0,class:!0,href:!0});var zt=n(x);ie=i(zt,"SPAN",{});var Et=n(ie);w(I.$$.fragment,Et),Et.forEach(t),zt.forEach(t),Qe=u(De),ne=i(De,"SPAN",{});var xt=n(ne);Ve=c(xt,"Converting it to \u{1F917} Accelerate"),xt.forEach(t),De.forEach(t),ye=u(e),V=i(e,"P",{});var Pt=n(V);Xe=c(Pt,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),Pt.forEach(t),ke=u(e),w(D.$$.fragment,e),Ae=u(e),w(P.$$.fragment,e),je=u(e),j=i(e,"H2",{class:!0});var Be=n(j);C=i(Be,"A",{id:!0,class:!0,href:!0});var Ct=n(C);le=i(Ct,"SPAN",{});var St=n(le);w(B.$$.fragment,St),St.forEach(t),Ct.forEach(t),Ze=u(Be),ce=i(Be,"SPAN",{});var Tt=n(ce);et=c(Tt,"Letting \u{1F917} Accelerate handle gradient accumulation"),Tt.forEach(t),Be.forEach(t),ze=u(e),f=i(e,"P",{});var k=n(f);tt=c(k,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),pe=i(k,"CODE",{});var Nt=n(pe);at=c(Nt,"gradient_accumulation_steps"),Nt.forEach(t),rt=c(k," parameter to "),ue=i(k,"CODE",{});var qt=n(ue);ot=c(qt,"Accelerator"),qt.forEach(t),st=c(k,`, dictating the number
of steps to perform before each call to `),de=i(k,"CODE",{});var Lt=n(de);it=c(Lt,"step()"),Lt.forEach(t),nt=c(k," and how to automatically adjust the loss during the call to "),X=i(k,"A",{href:!0});var Gt=n(X);lt=c(Gt,"Accelerator.backward()"),Gt.forEach(t),ct=c(k,":"),k.forEach(t),Ee=u(e),w(F.$$.fragment,e),xe=u(e),S=i(e,"P",{});var Fe=n(S);pt=c(Fe,"From here you can use the "),Z=i(Fe,"A",{href:!0});var It=n(Z);ut=c(It,"Accelerator.accumulate()"),It.forEach(t),dt=c(Fe,` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Fe.forEach(t),Pe=u(e),w(H.$$.fragment,e),Ce=u(e),ee=i(e,"P",{});var Dt=n(ee);ht=c(Dt,"and you can remove all the special checks for the step number and the loss adjustment:"),Dt.forEach(t),Se=u(e),w(O.$$.fragment,e),Te=u(e),T=i(e,"P",{});var He=n(T);mt=c(He,"As you can see the "),te=i(He,"A",{href:!0});var Bt=n(te);ft=c(Bt,"Accelerator"),Bt.forEach(t),gt=c(He," is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),He.forEach(t),Ne=u(e),w(N.$$.fragment,e),qe=u(e),z=i(e,"H2",{class:!0});var Oe=n(z);q=i(Oe,"A",{id:!0,class:!0,href:!0});var Ft=n(q);he=i(Ft,"SPAN",{});var Ht=n(he);w(W.$$.fragment,Ht),Ht.forEach(t),Ft.forEach(t),_t=u(Oe),me=i(Oe,"SPAN",{});var Ot=n(me);wt=c(Ot,"The finished code"),Ot.forEach(t),Oe.forEach(t),Le=u(e),ae=i(e,"P",{});var Wt=n(ae);$t=c(Wt,"Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Wt.forEach(t),Ge=u(e),w(M.$$.fragment,e),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Zt)),d(E,"id","performing-gradient-accumulation-with-accelerate"),d(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(E,"href","#performing-gradient-accumulation-with-accelerate"),d(g,"class","relative group"),d(x,"id","converting-it-to-accelerate"),d(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(x,"href","#converting-it-to-accelerate"),d(A,"class","relative group"),d(C,"id","letting-accelerate-handle-gradient-accumulation"),d(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(C,"href","#letting-accelerate-handle-gradient-accumulation"),d(j,"class","relative group"),d(X,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.backward"),d(Z,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.accumulate"),d(te,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),d(q,"id","the-finished-code"),d(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(q,"href","#the-finished-code"),d(z,"class","relative group")},m(e,a){r(document.head,h),o(e,m,a),o(e,g,a),r(g,E),r(E,oe),$(L,oe,null),r(g,Me),r(g,se),r(se,Re),o(e,ge,a),o(e,J,a),r(J,Ye),o(e,_e,a),o(e,U,a),r(U,Je),o(e,we,a),o(e,K,a),r(K,Ue),o(e,$e,a),o(e,Q,a),r(Q,Ke),o(e,ve,a),$(G,e,a),o(e,be,a),o(e,A,a),r(A,x),r(x,ie),$(I,ie,null),r(A,Qe),r(A,ne),r(ne,Ve),o(e,ye,a),o(e,V,a),r(V,Xe),o(e,ke,a),$(D,e,a),o(e,Ae,a),$(P,e,a),o(e,je,a),o(e,j,a),r(j,C),r(C,le),$(B,le,null),r(j,Ze),r(j,ce),r(ce,et),o(e,ze,a),o(e,f,a),r(f,tt),r(f,pe),r(pe,at),r(f,rt),r(f,ue),r(ue,ot),r(f,st),r(f,de),r(de,it),r(f,nt),r(f,X),r(X,lt),r(f,ct),o(e,Ee,a),$(F,e,a),o(e,xe,a),o(e,S,a),r(S,pt),r(S,Z),r(Z,ut),r(S,dt),o(e,Pe,a),$(H,e,a),o(e,Ce,a),o(e,ee,a),r(ee,ht),o(e,Se,a),$(O,e,a),o(e,Te,a),o(e,T,a),r(T,mt),r(T,te),r(te,ft),r(T,gt),o(e,Ne,a),$(N,e,a),o(e,qe,a),o(e,z,a),r(z,q),r(q,he),$(W,he,null),r(z,_t),r(z,me),r(me,wt),o(e,Le,a),o(e,ae,a),r(ae,$t),o(e,Ge,a),$(M,e,a),Ie=!0},p(e,[a]){const R={};a&2&&(R.$$scope={dirty:a,ctx:e}),P.$set(R);const fe={};a&2&&(fe.$$scope={dirty:a,ctx:e}),N.$set(fe)},i(e){Ie||(v(L.$$.fragment,e),v(G.$$.fragment,e),v(I.$$.fragment,e),v(D.$$.fragment,e),v(P.$$.fragment,e),v(B.$$.fragment,e),v(F.$$.fragment,e),v(H.$$.fragment,e),v(O.$$.fragment,e),v(N.$$.fragment,e),v(W.$$.fragment,e),v(M.$$.fragment,e),Ie=!0)},o(e){b(L.$$.fragment,e),b(G.$$.fragment,e),b(I.$$.fragment,e),b(D.$$.fragment,e),b(P.$$.fragment,e),b(B.$$.fragment,e),b(F.$$.fragment,e),b(H.$$.fragment,e),b(O.$$.fragment,e),b(N.$$.fragment,e),b(W.$$.fragment,e),b(M.$$.fragment,e),Ie=!1},d(e){t(h),e&&t(m),e&&t(g),y(L),e&&t(ge),e&&t(J),e&&t(_e),e&&t(U),e&&t(we),e&&t(K),e&&t($e),e&&t(Q),e&&t(ve),y(G,e),e&&t(be),e&&t(A),y(I),e&&t(ye),e&&t(V),e&&t(ke),y(D,e),e&&t(Ae),y(P,e),e&&t(je),e&&t(j),y(B),e&&t(ze),e&&t(f),e&&t(Ee),y(F,e),e&&t(xe),e&&t(S),e&&t(Pe),y(H,e),e&&t(Ce),e&&t(ee),e&&t(Se),y(O,e),e&&t(Te),e&&t(T),e&&t(Ne),y(N,e),e&&t(qe),e&&t(z),y(W),e&&t(Le),e&&t(ae),e&&t(Ge),y(M,e)}}}const Zt={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"},{local:"the-finished-code",title:"The finished code"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function ea(Y){return Kt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sa extends Rt{constructor(h){super();Yt(this,h,ea,Xt,Jt,{})}}export{sa as default,Zt as metadata};
