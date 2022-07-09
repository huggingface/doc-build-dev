import{S as Rt,i as Yt,s as Jt,e as s,k as u,w as _,t as l,M as Ut,c as i,d as t,m as p,a as n,x as w,h as c,b as d,G as r,g as o,y as $,q as v,o as b,B as y,v as Kt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Mt}from"../../chunks/Tip-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ae}from"../../chunks/CodeBlock-hf-doc-builder.js";function Qt(Y){let h;return{c(){h=l("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},l(m){h=c(m,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},m(m,g){o(m,h,g)},d(m){m&&t(h)}}}function Vt(Y){let h;return{c(){h=l("Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},l(m){h=c(m,"Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},m(m,g){o(m,h,g)},d(m){m&&t(h)}}}function Xt(Y){let h,m,g,j,re,L,Me,oe,Re,ge,J,Ye,_e,U,Je,we,K,Ue,$e,Q,Ke,ve,D,be,A,x,se,G,Qe,ie,Ve,ye,V,Xe,ke,I,Ae,P,ze,z,C,ne,O,Ze,le,et,Ee,f,tt,ce,at,rt,ue,ot,st,pe,it,nt,de,lt,ct,je,B,xe,S,ut,X,pt,dt,Pe,F,Ce,Z,ht,Se,H,Te,T,mt,ee,ft,gt,Ne,N,qe,E,q,he,W,_t,me,wt,Le,te,$t,De,M,Ge;return L=new We({}),D=new ae({props:{code:`device = 'cuda'
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
model.to(device)

gradient_accumulation_steps = <span class="hljs-number">2</span>

<span class="hljs-keyword">for</span> index, batch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(training_dataloader):
    optimizer.zero_grad()
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss = loss / gradient_accumulation_steps
    loss.backward()
    <span class="hljs-keyword">if</span> (index+<span class="hljs-number">1</span>) % gradient_accumulation_steps == <span class="hljs-number">0</span>:
        optimizer.step()
        scheduler.step()`}}),G=new We({}),I=new ae({props:{code:`from accelerate import Accelerator
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
        scheduler.step()`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator
accelerator = Accelerator()

model, optimizer, training_dataloader, scheduler = accelerator.prepare(
    model, optimizer, training_dataloader, scheduler
)

<span class="hljs-keyword">for</span> index, batch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(training_dataloader):
    optimizer.zero_grad()
    inputs, targets = batch
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss = loss / gradient_accumulation_steps
    accelerator.backward(loss)
    <span class="hljs-keyword">if</span> (index+<span class="hljs-number">1</span>) % gradient_accumulation_steps == <span class="hljs-number">0</span>:
        optimizer.step()
        scheduler.step()`}}),P=new Mt({props:{warning:!0,$$slots:{default:[Qt]},$$scope:{ctx:Y}}}),O=new We({}),B=new ae({props:{code:`from accelerate import Accelerator
-accelerator = Accelerator()
+accelerator = Accelerator(gradient_accumulation_steps=2)`,highlighted:`from accelerate import Accelerator
<span class="hljs-deletion">-accelerator = Accelerator()</span>
<span class="hljs-addition">+accelerator = Accelerator(gradient_accumulation_steps=2)</span>`}}),F=new ae({props:{code:`-for index, batch in enumerate(training_dataloader):
+for batch in training_dataloader:
+   with accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)`,highlighted:`<span class="hljs-deletion">-for index, batch in enumerate(training_dataloader):</span>
<span class="hljs-addition">+for batch in training_dataloader:</span>
<span class="hljs-addition">+   with accelerator.accumulate(model):</span>
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)`}}),H=new ae({props:{code:`-loss = loss / gradient_accumulation_steps
accelerator.backward(loss)
-if (index+1) % gradient_accumulation_steps == 0:
optimizer.step()
scheduler.step()`,highlighted:`<span class="hljs-deletion">-loss = loss / gradient_accumulation_steps</span>
accelerator.backward(loss)
<span class="hljs-deletion">-if (index+1) % gradient_accumulation_steps == 0:</span>
optimizer.step()
scheduler.step()`}}),N=new Mt({props:{warning:!0,$$slots:{default:[Vt]},$$scope:{ctx:Y}}}),W=new We({}),M=new ae({props:{code:`for batch in training_dataloader:
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
        scheduler.step()`}}),{c(){h=s("meta"),m=u(),g=s("h1"),j=s("a"),re=s("span"),_(L.$$.fragment),Me=u(),oe=s("span"),Re=l("Performing gradient accumulation with \u{1F917} Accelerate"),ge=u(),J=s("p"),Ye=l(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only performing the step through the optimizer after a certain number of batches have been performed.`),_e=u(),U=s("p"),Je=l(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),we=u(),K=s("p"),Ue=l(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one line of code!`),$e=u(),Q=s("p"),Ke=l("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),ve=u(),_(D.$$.fragment),be=u(),A=s("h2"),x=s("a"),se=s("span"),_(G.$$.fragment),Qe=u(),ie=s("span"),Ve=l("Converting it to \u{1F917} Accelerate"),ye=u(),V=s("p"),Xe=l("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),ke=u(),_(I.$$.fragment),Ae=u(),_(P.$$.fragment),ze=u(),z=s("h2"),C=s("a"),ne=s("span"),_(O.$$.fragment),Ze=u(),le=s("span"),et=l("Letting \u{1F917} Accelerate handle gradient accumulation"),Ee=u(),f=s("p"),tt=l("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ce=s("code"),at=l("gradient_accumulation_steps"),rt=l(" parameter to "),ue=s("code"),ot=l("Accelerator"),st=l(`, dictating the number
of steps to perform before each call to `),pe=s("code"),it=l("step()"),nt=l(" and how to automatically adjust the loss during the call to "),de=s("code"),lt=l("backward()"),ct=l(":"),je=u(),_(B.$$.fragment),xe=u(),S=s("p"),ut=l("From here you can use the "),X=s("a"),pt=l("Accelerator.accumulate()"),dt=l(` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Pe=u(),_(F.$$.fragment),Ce=u(),Z=s("p"),ht=l("and you can remove all the special checks for the step number and the loss adjustment:"),Se=u(),_(H.$$.fragment),Te=u(),T=s("p"),mt=l("As you can see the "),ee=s("a"),ft=l("Accelerator"),gt=l(` is able to keep track of the batch number you are on and it will automatically know whether to actually perform the backward pass
and step through the prepared schedulers and optimizers.`),Ne=u(),_(N.$$.fragment),qe=u(),E=s("h2"),q=s("a"),he=s("span"),_(W.$$.fragment),_t=u(),me=s("span"),wt=l("The finished code"),Le=u(),te=s("p"),$t=l("Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),De=u(),_(M.$$.fragment),this.h()},l(e){const a=Ut('[data-svelte="svelte-1phssyn"]',document.head);h=i(a,"META",{name:!0,content:!0}),a.forEach(t),m=p(e),g=i(e,"H1",{class:!0});var R=n(g);j=i(R,"A",{id:!0,class:!0,href:!0});var fe=n(j);re=i(fe,"SPAN",{});var vt=n(re);w(L.$$.fragment,vt),vt.forEach(t),fe.forEach(t),Me=p(R),oe=i(R,"SPAN",{});var bt=n(oe);Re=c(bt,"Performing gradient accumulation with \u{1F917} Accelerate"),bt.forEach(t),R.forEach(t),ge=p(e),J=i(e,"P",{});var yt=n(J);Ye=c(yt,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only performing the step through the optimizer after a certain number of batches have been performed.`),yt.forEach(t),_e=p(e),U=i(e,"P",{});var kt=n(U);Je=c(kt,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),kt.forEach(t),we=p(e),K=i(e,"P",{});var At=n(K);Ue=c(At,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one line of code!`),At.forEach(t),$e=p(e),Q=i(e,"P",{});var zt=n(Q);Ke=c(zt,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),zt.forEach(t),ve=p(e),w(D.$$.fragment,e),be=p(e),A=i(e,"H2",{class:!0});var Ie=n(A);x=i(Ie,"A",{id:!0,class:!0,href:!0});var Et=n(x);se=i(Et,"SPAN",{});var jt=n(se);w(G.$$.fragment,jt),jt.forEach(t),Et.forEach(t),Qe=p(Ie),ie=i(Ie,"SPAN",{});var xt=n(ie);Ve=c(xt,"Converting it to \u{1F917} Accelerate"),xt.forEach(t),Ie.forEach(t),ye=p(e),V=i(e,"P",{});var Pt=n(V);Xe=c(Pt,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),Pt.forEach(t),ke=p(e),w(I.$$.fragment,e),Ae=p(e),w(P.$$.fragment,e),ze=p(e),z=i(e,"H2",{class:!0});var Oe=n(z);C=i(Oe,"A",{id:!0,class:!0,href:!0});var Ct=n(C);ne=i(Ct,"SPAN",{});var St=n(ne);w(O.$$.fragment,St),St.forEach(t),Ct.forEach(t),Ze=p(Oe),le=i(Oe,"SPAN",{});var Tt=n(le);et=c(Tt,"Letting \u{1F917} Accelerate handle gradient accumulation"),Tt.forEach(t),Oe.forEach(t),Ee=p(e),f=i(e,"P",{});var k=n(f);tt=c(k,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ce=i(k,"CODE",{});var Nt=n(ce);at=c(Nt,"gradient_accumulation_steps"),Nt.forEach(t),rt=c(k," parameter to "),ue=i(k,"CODE",{});var qt=n(ue);ot=c(qt,"Accelerator"),qt.forEach(t),st=c(k,`, dictating the number
of steps to perform before each call to `),pe=i(k,"CODE",{});var Lt=n(pe);it=c(Lt,"step()"),Lt.forEach(t),nt=c(k," and how to automatically adjust the loss during the call to "),de=i(k,"CODE",{});var Dt=n(de);lt=c(Dt,"backward()"),Dt.forEach(t),ct=c(k,":"),k.forEach(t),je=p(e),w(B.$$.fragment,e),xe=p(e),S=i(e,"P",{});var Be=n(S);ut=c(Be,"From here you can use the "),X=i(Be,"A",{href:!0});var Gt=n(X);pt=c(Gt,"Accelerator.accumulate()"),Gt.forEach(t),dt=c(Be,` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Be.forEach(t),Pe=p(e),w(F.$$.fragment,e),Ce=p(e),Z=i(e,"P",{});var It=n(Z);ht=c(It,"and you can remove all the special checks for the step number and the loss adjustment:"),It.forEach(t),Se=p(e),w(H.$$.fragment,e),Te=p(e),T=i(e,"P",{});var Fe=n(T);mt=c(Fe,"As you can see the "),ee=i(Fe,"A",{href:!0});var Ot=n(ee);ft=c(Ot,"Accelerator"),Ot.forEach(t),gt=c(Fe,` is able to keep track of the batch number you are on and it will automatically know whether to actually perform the backward pass
and step through the prepared schedulers and optimizers.`),Fe.forEach(t),Ne=p(e),w(N.$$.fragment,e),qe=p(e),E=i(e,"H2",{class:!0});var He=n(E);q=i(He,"A",{id:!0,class:!0,href:!0});var Bt=n(q);he=i(Bt,"SPAN",{});var Ft=n(he);w(W.$$.fragment,Ft),Ft.forEach(t),Bt.forEach(t),_t=p(He),me=i(He,"SPAN",{});var Ht=n(me);wt=c(Ht,"The finished code"),Ht.forEach(t),He.forEach(t),Le=p(e),te=i(e,"P",{});var Wt=n(te);$t=c(Wt,"Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Wt.forEach(t),De=p(e),w(M.$$.fragment,e),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Zt)),d(j,"id","performing-gradient-accumulation-with-accelerate"),d(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(j,"href","#performing-gradient-accumulation-with-accelerate"),d(g,"class","relative group"),d(x,"id","converting-it-to-accelerate"),d(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(x,"href","#converting-it-to-accelerate"),d(A,"class","relative group"),d(C,"id","letting-accelerate-handle-gradient-accumulation"),d(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(C,"href","#letting-accelerate-handle-gradient-accumulation"),d(z,"class","relative group"),d(X,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.accumulate"),d(ee,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),d(q,"id","the-finished-code"),d(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(q,"href","#the-finished-code"),d(E,"class","relative group")},m(e,a){r(document.head,h),o(e,m,a),o(e,g,a),r(g,j),r(j,re),$(L,re,null),r(g,Me),r(g,oe),r(oe,Re),o(e,ge,a),o(e,J,a),r(J,Ye),o(e,_e,a),o(e,U,a),r(U,Je),o(e,we,a),o(e,K,a),r(K,Ue),o(e,$e,a),o(e,Q,a),r(Q,Ke),o(e,ve,a),$(D,e,a),o(e,be,a),o(e,A,a),r(A,x),r(x,se),$(G,se,null),r(A,Qe),r(A,ie),r(ie,Ve),o(e,ye,a),o(e,V,a),r(V,Xe),o(e,ke,a),$(I,e,a),o(e,Ae,a),$(P,e,a),o(e,ze,a),o(e,z,a),r(z,C),r(C,ne),$(O,ne,null),r(z,Ze),r(z,le),r(le,et),o(e,Ee,a),o(e,f,a),r(f,tt),r(f,ce),r(ce,at),r(f,rt),r(f,ue),r(ue,ot),r(f,st),r(f,pe),r(pe,it),r(f,nt),r(f,de),r(de,lt),r(f,ct),o(e,je,a),$(B,e,a),o(e,xe,a),o(e,S,a),r(S,ut),r(S,X),r(X,pt),r(S,dt),o(e,Pe,a),$(F,e,a),o(e,Ce,a),o(e,Z,a),r(Z,ht),o(e,Se,a),$(H,e,a),o(e,Te,a),o(e,T,a),r(T,mt),r(T,ee),r(ee,ft),r(T,gt),o(e,Ne,a),$(N,e,a),o(e,qe,a),o(e,E,a),r(E,q),r(q,he),$(W,he,null),r(E,_t),r(E,me),r(me,wt),o(e,Le,a),o(e,te,a),r(te,$t),o(e,De,a),$(M,e,a),Ge=!0},p(e,[a]){const R={};a&2&&(R.$$scope={dirty:a,ctx:e}),P.$set(R);const fe={};a&2&&(fe.$$scope={dirty:a,ctx:e}),N.$set(fe)},i(e){Ge||(v(L.$$.fragment,e),v(D.$$.fragment,e),v(G.$$.fragment,e),v(I.$$.fragment,e),v(P.$$.fragment,e),v(O.$$.fragment,e),v(B.$$.fragment,e),v(F.$$.fragment,e),v(H.$$.fragment,e),v(N.$$.fragment,e),v(W.$$.fragment,e),v(M.$$.fragment,e),Ge=!0)},o(e){b(L.$$.fragment,e),b(D.$$.fragment,e),b(G.$$.fragment,e),b(I.$$.fragment,e),b(P.$$.fragment,e),b(O.$$.fragment,e),b(B.$$.fragment,e),b(F.$$.fragment,e),b(H.$$.fragment,e),b(N.$$.fragment,e),b(W.$$.fragment,e),b(M.$$.fragment,e),Ge=!1},d(e){t(h),e&&t(m),e&&t(g),y(L),e&&t(ge),e&&t(J),e&&t(_e),e&&t(U),e&&t(we),e&&t(K),e&&t($e),e&&t(Q),e&&t(ve),y(D,e),e&&t(be),e&&t(A),y(G),e&&t(ye),e&&t(V),e&&t(ke),y(I,e),e&&t(Ae),y(P,e),e&&t(ze),e&&t(z),y(O),e&&t(Ee),e&&t(f),e&&t(je),y(B,e),e&&t(xe),e&&t(S),e&&t(Pe),y(F,e),e&&t(Ce),e&&t(Z),e&&t(Se),y(H,e),e&&t(Te),e&&t(T),e&&t(Ne),y(N,e),e&&t(qe),e&&t(E),y(W),e&&t(Le),e&&t(te),e&&t(De),y(M,e)}}}const Zt={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"},{local:"the-finished-code",title:"The finished code"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function ea(Y){return Kt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sa extends Rt{constructor(h){super();Yt(this,h,ea,Xt,Jt,{})}}export{sa as default,Zt as metadata};
