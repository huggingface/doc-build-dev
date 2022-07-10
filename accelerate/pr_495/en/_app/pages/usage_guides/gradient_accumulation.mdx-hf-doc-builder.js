import{S as Rt,i as Yt,s as Jt,e as o,k as p,w as _,t as l,M as Ut,c as i,d as t,m as u,a as n,x as w,h as c,b as h,G as r,g as s,y as $,q as b,o as v,B as y,v as Kt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Mt}from"../../chunks/Tip-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as re}from"../../chunks/CodeBlock-hf-doc-builder.js";function Qt(Y){let d;return{c(){d=l("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},l(m){d=c(m,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},m(m,g){s(m,d,g)},d(m){m&&t(d)}}}function Vt(Y){let d;return{c(){d=l("Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},l(m){d=c(m,"Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},m(m,g){s(m,d,g)},d(m){m&&t(d)}}}function Xt(Y){let d,m,g,E,se,L,Me,oe,Re,ge,J,Ye,_e,U,Je,we,K,Ue,$e,Q,Ke,be,G,ve,A,x,ie,I,Qe,ne,Ve,ye,V,Xe,ke,D,Ae,P,je,j,C,le,B,Ze,ce,et,ze,f,tt,pe,at,rt,ue,st,ot,he,it,nt,X,lt,ct,Ee,F,xe,S,pt,Z,ut,ht,Pe,H,Ce,ee,dt,Se,O,Te,T,mt,te,ft,gt,Ne,N,qe,z,q,de,W,_t,me,wt,Le,ae,$t,Ge,M,Ie;return L=new We({}),G=new re({props:{code:`device = 'cuda'
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
        scheduler.<span class="hljs-built_in">step</span>()`}}),I=new We({}),D=new re({props:{code:`from accelerate import Accelerator
accelerator = Accelerator()

model, optimizer, training_dataloader, scheduler = accelerator.prepare(
    model, optimizer, training_dataloader, scheduler
)

for index, batch in enumerate(training_dataloader):
    optimizer.zero_grad()
    inputs, targets = batch
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss = loss / gradient_accumulation_steps
    accelerator.backward(loss)
    if (index+1) % gradient_accumulation_steps == 0:
        optimizer.step()
        scheduler.step()`,highlighted:`from accelerate <span class="hljs-built_in">import</span> Accelerator
<span class="hljs-attr">accelerator</span> = Accelerator()

model, optimizer, training_dataloader, <span class="hljs-attr">scheduler</span> = accelerator.prepare(
    model, optimizer, training_dataloader, scheduler
)

for index, batch <span class="hljs-keyword">in</span> enumerate(training_dataloader):
    optimizer.zero_grad()
    inputs, <span class="hljs-attr">targets</span> = batch
    <span class="hljs-attr">outputs</span> = model(inputs)
    <span class="hljs-attr">loss</span> = loss_function(outputs, targets)
    <span class="hljs-attr">loss</span> = loss / gradient_accumulation_steps
    accelerator.backward(loss)
    <span class="hljs-keyword">if</span> (index+<span class="hljs-number">1</span>) % <span class="hljs-attr">gradient_accumulation_steps</span> == <span class="hljs-number">0</span>:
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
        scheduler.step()`,highlighted:`for batch in training_dataloader:
    with accelerator.<span class="hljs-built_in">accumulate</span>(model):
        optimizer.<span class="hljs-built_in">zero_grad</span>()
        inputs, targets = batch
        outputs = <span class="hljs-built_in">model</span>(inputs)
        loss = <span class="hljs-built_in">loss_function</span>(outputs, targets)
        accelerator.<span class="hljs-built_in">backward</span>(loss)
        optimizer.<span class="hljs-built_in">step</span>()
        scheduler.<span class="hljs-built_in">step</span>()`}}),{c(){d=o("meta"),m=p(),g=o("h1"),E=o("a"),se=o("span"),_(L.$$.fragment),Me=p(),oe=o("span"),Re=l("Performing gradient accumulation with \u{1F917} Accelerate"),ge=p(),J=o("p"),Ye=l(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),_e=p(),U=o("p"),Je=l(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),we=p(),K=o("p"),Ue=l(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),$e=p(),Q=o("p"),Ke=l("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),be=p(),_(G.$$.fragment),ve=p(),A=o("h2"),x=o("a"),ie=o("span"),_(I.$$.fragment),Qe=p(),ne=o("span"),Ve=l("Converting it to \u{1F917} Accelerate"),ye=p(),V=o("p"),Xe=l("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),ke=p(),_(D.$$.fragment),Ae=p(),_(P.$$.fragment),je=p(),j=o("h2"),C=o("a"),le=o("span"),_(B.$$.fragment),Ze=p(),ce=o("span"),et=l("Letting \u{1F917} Accelerate handle gradient accumulation"),ze=p(),f=o("p"),tt=l("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),pe=o("code"),at=l("gradient_accumulation_steps"),rt=l(" parameter to "),ue=o("code"),st=l("Accelerator"),ot=l(`, dictating the number
of steps to perform before each call to `),he=o("code"),it=l("step()"),nt=l(" and how to automatically adjust the loss during the call to "),X=o("a"),lt=l("Accelerator.backward()"),ct=l(":"),Ee=p(),_(F.$$.fragment),xe=p(),S=o("p"),pt=l("From here you can use the "),Z=o("a"),ut=l("Accelerator.accumulate()"),ht=l(` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Pe=p(),_(H.$$.fragment),Ce=p(),ee=o("p"),dt=l("and you can remove all the special checks for the step number and the loss adjustment:"),Se=p(),_(O.$$.fragment),Te=p(),T=o("p"),mt=l("As you can see the "),te=o("a"),ft=l("Accelerator"),gt=l(" is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Ne=p(),_(N.$$.fragment),qe=p(),z=o("h2"),q=o("a"),de=o("span"),_(W.$$.fragment),_t=p(),me=o("span"),wt=l("The finished code"),Le=p(),ae=o("p"),$t=l("Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Ge=p(),_(M.$$.fragment),this.h()},l(e){const a=Ut('[data-svelte="svelte-1phssyn"]',document.head);d=i(a,"META",{name:!0,content:!0}),a.forEach(t),m=u(e),g=i(e,"H1",{class:!0});var R=n(g);E=i(R,"A",{id:!0,class:!0,href:!0});var fe=n(E);se=i(fe,"SPAN",{});var bt=n(se);w(L.$$.fragment,bt),bt.forEach(t),fe.forEach(t),Me=u(R),oe=i(R,"SPAN",{});var vt=n(oe);Re=c(vt,"Performing gradient accumulation with \u{1F917} Accelerate"),vt.forEach(t),R.forEach(t),ge=u(e),J=i(e,"P",{});var yt=n(J);Ye=c(yt,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),yt.forEach(t),_e=u(e),U=i(e,"P",{});var kt=n(U);Je=c(kt,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),kt.forEach(t),we=u(e),K=i(e,"P",{});var At=n(K);Ue=c(At,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),At.forEach(t),$e=u(e),Q=i(e,"P",{});var jt=n(Q);Ke=c(jt,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),jt.forEach(t),be=u(e),w(G.$$.fragment,e),ve=u(e),A=i(e,"H2",{class:!0});var De=n(A);x=i(De,"A",{id:!0,class:!0,href:!0});var zt=n(x);ie=i(zt,"SPAN",{});var Et=n(ie);w(I.$$.fragment,Et),Et.forEach(t),zt.forEach(t),Qe=u(De),ne=i(De,"SPAN",{});var xt=n(ne);Ve=c(xt,"Converting it to \u{1F917} Accelerate"),xt.forEach(t),De.forEach(t),ye=u(e),V=i(e,"P",{});var Pt=n(V);Xe=c(Pt,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),Pt.forEach(t),ke=u(e),w(D.$$.fragment,e),Ae=u(e),w(P.$$.fragment,e),je=u(e),j=i(e,"H2",{class:!0});var Be=n(j);C=i(Be,"A",{id:!0,class:!0,href:!0});var Ct=n(C);le=i(Ct,"SPAN",{});var St=n(le);w(B.$$.fragment,St),St.forEach(t),Ct.forEach(t),Ze=u(Be),ce=i(Be,"SPAN",{});var Tt=n(ce);et=c(Tt,"Letting \u{1F917} Accelerate handle gradient accumulation"),Tt.forEach(t),Be.forEach(t),ze=u(e),f=i(e,"P",{});var k=n(f);tt=c(k,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),pe=i(k,"CODE",{});var Nt=n(pe);at=c(Nt,"gradient_accumulation_steps"),Nt.forEach(t),rt=c(k," parameter to "),ue=i(k,"CODE",{});var qt=n(ue);st=c(qt,"Accelerator"),qt.forEach(t),ot=c(k,`, dictating the number
of steps to perform before each call to `),he=i(k,"CODE",{});var Lt=n(he);it=c(Lt,"step()"),Lt.forEach(t),nt=c(k," and how to automatically adjust the loss during the call to "),X=i(k,"A",{href:!0});var Gt=n(X);lt=c(Gt,"Accelerator.backward()"),Gt.forEach(t),ct=c(k,":"),k.forEach(t),Ee=u(e),w(F.$$.fragment,e),xe=u(e),S=i(e,"P",{});var Fe=n(S);pt=c(Fe,"From here you can use the "),Z=i(Fe,"A",{href:!0});var It=n(Z);ut=c(It,"Accelerator.accumulate()"),It.forEach(t),ht=c(Fe,` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Fe.forEach(t),Pe=u(e),w(H.$$.fragment,e),Ce=u(e),ee=i(e,"P",{});var Dt=n(ee);dt=c(Dt,"and you can remove all the special checks for the step number and the loss adjustment:"),Dt.forEach(t),Se=u(e),w(O.$$.fragment,e),Te=u(e),T=i(e,"P",{});var He=n(T);mt=c(He,"As you can see the "),te=i(He,"A",{href:!0});var Bt=n(te);ft=c(Bt,"Accelerator"),Bt.forEach(t),gt=c(He," is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),He.forEach(t),Ne=u(e),w(N.$$.fragment,e),qe=u(e),z=i(e,"H2",{class:!0});var Oe=n(z);q=i(Oe,"A",{id:!0,class:!0,href:!0});var Ft=n(q);de=i(Ft,"SPAN",{});var Ht=n(de);w(W.$$.fragment,Ht),Ht.forEach(t),Ft.forEach(t),_t=u(Oe),me=i(Oe,"SPAN",{});var Ot=n(me);wt=c(Ot,"The finished code"),Ot.forEach(t),Oe.forEach(t),Le=u(e),ae=i(e,"P",{});var Wt=n(ae);$t=c(Wt,"Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Wt.forEach(t),Ge=u(e),w(M.$$.fragment,e),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Zt)),h(E,"id","performing-gradient-accumulation-with-accelerate"),h(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(E,"href","#performing-gradient-accumulation-with-accelerate"),h(g,"class","relative group"),h(x,"id","converting-it-to-accelerate"),h(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(x,"href","#converting-it-to-accelerate"),h(A,"class","relative group"),h(C,"id","letting-accelerate-handle-gradient-accumulation"),h(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(C,"href","#letting-accelerate-handle-gradient-accumulation"),h(j,"class","relative group"),h(X,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.backward"),h(Z,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.accumulate"),h(te,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),h(q,"id","the-finished-code"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#the-finished-code"),h(z,"class","relative group")},m(e,a){r(document.head,d),s(e,m,a),s(e,g,a),r(g,E),r(E,se),$(L,se,null),r(g,Me),r(g,oe),r(oe,Re),s(e,ge,a),s(e,J,a),r(J,Ye),s(e,_e,a),s(e,U,a),r(U,Je),s(e,we,a),s(e,K,a),r(K,Ue),s(e,$e,a),s(e,Q,a),r(Q,Ke),s(e,be,a),$(G,e,a),s(e,ve,a),s(e,A,a),r(A,x),r(x,ie),$(I,ie,null),r(A,Qe),r(A,ne),r(ne,Ve),s(e,ye,a),s(e,V,a),r(V,Xe),s(e,ke,a),$(D,e,a),s(e,Ae,a),$(P,e,a),s(e,je,a),s(e,j,a),r(j,C),r(C,le),$(B,le,null),r(j,Ze),r(j,ce),r(ce,et),s(e,ze,a),s(e,f,a),r(f,tt),r(f,pe),r(pe,at),r(f,rt),r(f,ue),r(ue,st),r(f,ot),r(f,he),r(he,it),r(f,nt),r(f,X),r(X,lt),r(f,ct),s(e,Ee,a),$(F,e,a),s(e,xe,a),s(e,S,a),r(S,pt),r(S,Z),r(Z,ut),r(S,ht),s(e,Pe,a),$(H,e,a),s(e,Ce,a),s(e,ee,a),r(ee,dt),s(e,Se,a),$(O,e,a),s(e,Te,a),s(e,T,a),r(T,mt),r(T,te),r(te,ft),r(T,gt),s(e,Ne,a),$(N,e,a),s(e,qe,a),s(e,z,a),r(z,q),r(q,de),$(W,de,null),r(z,_t),r(z,me),r(me,wt),s(e,Le,a),s(e,ae,a),r(ae,$t),s(e,Ge,a),$(M,e,a),Ie=!0},p(e,[a]){const R={};a&2&&(R.$$scope={dirty:a,ctx:e}),P.$set(R);const fe={};a&2&&(fe.$$scope={dirty:a,ctx:e}),N.$set(fe)},i(e){Ie||(b(L.$$.fragment,e),b(G.$$.fragment,e),b(I.$$.fragment,e),b(D.$$.fragment,e),b(P.$$.fragment,e),b(B.$$.fragment,e),b(F.$$.fragment,e),b(H.$$.fragment,e),b(O.$$.fragment,e),b(N.$$.fragment,e),b(W.$$.fragment,e),b(M.$$.fragment,e),Ie=!0)},o(e){v(L.$$.fragment,e),v(G.$$.fragment,e),v(I.$$.fragment,e),v(D.$$.fragment,e),v(P.$$.fragment,e),v(B.$$.fragment,e),v(F.$$.fragment,e),v(H.$$.fragment,e),v(O.$$.fragment,e),v(N.$$.fragment,e),v(W.$$.fragment,e),v(M.$$.fragment,e),Ie=!1},d(e){t(d),e&&t(m),e&&t(g),y(L),e&&t(ge),e&&t(J),e&&t(_e),e&&t(U),e&&t(we),e&&t(K),e&&t($e),e&&t(Q),e&&t(be),y(G,e),e&&t(ve),e&&t(A),y(I),e&&t(ye),e&&t(V),e&&t(ke),y(D,e),e&&t(Ae),y(P,e),e&&t(je),e&&t(j),y(B),e&&t(ze),e&&t(f),e&&t(Ee),y(F,e),e&&t(xe),e&&t(S),e&&t(Pe),y(H,e),e&&t(Ce),e&&t(ee),e&&t(Se),y(O,e),e&&t(Te),e&&t(T),e&&t(Ne),y(N,e),e&&t(qe),e&&t(z),y(W),e&&t(Le),e&&t(ae),e&&t(Ge),y(M,e)}}}const Zt={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"},{local:"the-finished-code",title:"The finished code"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function ea(Y){return Kt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class oa extends Rt{constructor(d){super();Yt(this,d,ea,Xt,Jt,{})}}export{oa as default,Zt as metadata};
