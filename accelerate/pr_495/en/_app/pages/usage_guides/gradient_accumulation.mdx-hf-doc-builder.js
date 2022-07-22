import{S as Mt,i as Ot,s as Rt,e as s,k as p,w,t as n,M as Dt,c as i,d as t,m as u,a as l,x as v,h as c,b as d,G as a,g as o,y as $,q as b,o as y,B as A,v as Wt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Jt}from"../../chunks/Tip-hf-doc-builder.js";import{I as Ye}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as se}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ut(me){let h,T,m,_,z;return{c(){h=s("p"),T=n("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the "),m=s("a"),_=n("Concepts tutorial"),z=n("!"),this.h()},l(g){h=i(g,"P",{});var k=l(h);T=c(k,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the "),m=i(k,"A",{href:!0,rel:!0});var S=l(m);_=c(S,"Concepts tutorial"),S.forEach(t),z=c(k,"!"),k.forEach(t),this.h()},h(){d(m,"href","https://huggingface.co/docs/accelerate/concept_guides/gradient_synchronization"),d(m,"rel","nofollow")},m(g,k){o(g,h,k),a(h,T),a(h,m),a(m,_),a(h,z)},d(g){g&&t(h)}}}function Kt(me){let h,T,m,_,z,g,k,S,Me,fe,U,Oe,ge,K,Re,_e,Q,De,we,V,We,ve,F,$e,E,C,ie,G,Je,le,Ue,be,X,Ke,ye,H,Ae,N,ke,x,q,ne,Y,Qe,ce,Ve,je,f,Xe,pe,Ze,et,Z,tt,at,ue,rt,ot,ee,st,it,ze,M,Ee,I,lt,te,nt,ct,xe,O,Pe,ae,pt,Te,R,Se,L,ut,re,dt,ht,Ce,P,B,de,D,mt,he,ft,Ne,oe,gt,qe,W,Ie;return g=new Ye({}),F=new se({props:{code:`device = 'cuda'
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
        scheduler.<span class="hljs-built_in">step</span>()`}}),G=new Ye({}),H=new se({props:{code:`+ from accelerate import Accelerator
+ accelerator = Accelerator()

+ model, optimizer, training_dataloader, scheduler = accelerator.prepare(
+     model, optimizer, training_dataloader, scheduler
+ )

  for index, batch in enumerate(training_dataloader):
      optimizer.zero_grad()
      inputs, targets = batch
-     inputs = inputs.to(device)
-     targets = targets.to(device)
      outputs = model(inputs)
      loss = loss_function(outputs, targets)
      loss = loss / gradient_accumulation_steps
+     accelerator.backward(loss)
      if (index+1) % gradient_accumulation_steps == 0:
        optimizer.step()
        scheduler.step()`,highlighted:`<span class="hljs-addition">+ from accelerate import Accelerator</span>
<span class="hljs-addition">+ accelerator = Accelerator()</span>

<span class="hljs-addition">+ model, optimizer, training_dataloader, scheduler = accelerator.prepare(</span>
<span class="hljs-addition">+     model, optimizer, training_dataloader, scheduler</span>
<span class="hljs-addition">+ )</span>

  for index, batch in enumerate(training_dataloader):
      optimizer.zero_grad()
      inputs, targets = batch
<span class="hljs-deletion">-     inputs = inputs.to(device)</span>
<span class="hljs-deletion">-     targets = targets.to(device)</span>
      outputs = model(inputs)
      loss = loss_function(outputs, targets)
      loss = loss / gradient_accumulation_steps
<span class="hljs-addition">+     accelerator.backward(loss)</span>
      if (index+1) % gradient_accumulation_steps == 0:
        optimizer.step()
        scheduler.step()`}}),N=new Jt({props:{warning:!0,$$slots:{default:[Ut]},$$scope:{ctx:me}}}),Y=new Ye({}),M=new se({props:{code:`  from accelerate import Accelerator
- accelerator = Accelerator()
+ accelerator = Accelerator(gradient_accumulation_steps=2)`,highlighted:`  from accelerate import Accelerator
<span class="hljs-deletion">- accelerator = Accelerator()</span>
<span class="hljs-addition">+ accelerator = Accelerator(gradient_accumulation_steps=2)</span>`}}),O=new se({props:{code:`- for index, batch in enumerate(training_dataloader):
+ for batch in training_dataloader:
+    with accelerator.accumulate(model):
       optimizer.zero_grad()
       inputs, targets = batch
       outputs = model(inputs)`,highlighted:`<span class="hljs-deletion">- for index, batch in enumerate(training_dataloader):</span>
<span class="hljs-addition">+ for batch in training_dataloader:</span>
<span class="hljs-addition">+    with accelerator.accumulate(model):</span>
       optimizer.zero_grad()
       inputs, targets = batch
       outputs = model(inputs)`}}),R=new se({props:{code:`- loss = loss / gradient_accumulation_steps
  accelerator.backward(loss)
- if (index+1) % gradient_accumulation_steps == 0:
  optimizer.step()
  scheduler.step()`,highlighted:`<span class="hljs-deletion">- loss = loss / gradient_accumulation_steps</span>
  accelerator.backward(loss)
<span class="hljs-deletion">- if (index+1) % gradient_accumulation_steps == 0:</span>
  optimizer.step()
  scheduler.step()`}}),D=new Ye({}),W=new se({props:{code:`for batch in training_dataloader:
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
        scheduler.step()`}}),{c(){h=s("meta"),T=p(),m=s("h1"),_=s("a"),z=s("span"),w(g.$$.fragment),k=p(),S=s("span"),Me=n("Performing gradient accumulation with \u{1F917} Accelerate"),fe=p(),U=s("p"),Oe=n(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),ge=p(),K=s("p"),Re=n(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),_e=p(),Q=s("p"),De=n(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilities provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),we=p(),V=s("p"),We=n("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),ve=p(),w(F.$$.fragment),$e=p(),E=s("h2"),C=s("a"),ie=s("span"),w(G.$$.fragment),Je=p(),le=s("span"),Ue=n("Converting it to \u{1F917} Accelerate"),be=p(),X=s("p"),Ke=n("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),ye=p(),w(H.$$.fragment),Ae=p(),w(N.$$.fragment),ke=p(),x=s("h2"),q=s("a"),ne=s("span"),w(Y.$$.fragment),Qe=p(),ce=s("span"),Ve=n("Letting \u{1F917} Accelerate handle gradient accumulation"),je=p(),f=s("p"),Xe=n("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),pe=s("code"),Ze=n("gradient_accumulation_steps"),et=n(" parameter to "),Z=s("a"),tt=n("Accelerator"),at=n(`, dictating the number
of steps to perform before each call to `),ue=s("code"),rt=n("step()"),ot=n(" and how to automatically adjust the loss during the call to "),ee=s("a"),st=n("Accelerator.backward()"),it=n(":"),ze=p(),w(M.$$.fragment),Ee=p(),I=s("p"),lt=n("From here you can use the "),te=s("a"),nt=n("Accelerator.accumulate()"),ct=n(` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),xe=p(),w(O.$$.fragment),Pe=p(),ae=s("p"),pt=n("You can remove all the special checks for the step number and the loss adjustment:"),Te=p(),w(R.$$.fragment),Se=p(),L=s("p"),ut=n("As you can see the "),re=s("a"),dt=n("Accelerator"),ht=n(" is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Ce=p(),P=s("h2"),B=s("a"),de=s("span"),w(D.$$.fragment),mt=p(),he=s("span"),ft=n("The finished code"),Ne=p(),oe=s("p"),gt=n("Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),qe=p(),w(W.$$.fragment),this.h()},l(e){const r=Dt('[data-svelte="svelte-1phssyn"]',document.head);h=i(r,"META",{name:!0,content:!0}),r.forEach(t),T=u(e),m=i(e,"H1",{class:!0});var J=l(m);_=i(J,"A",{id:!0,class:!0,href:!0});var _t=l(_);z=i(_t,"SPAN",{});var wt=l(z);v(g.$$.fragment,wt),wt.forEach(t),_t.forEach(t),k=u(J),S=i(J,"SPAN",{});var vt=l(S);Me=c(vt,"Performing gradient accumulation with \u{1F917} Accelerate"),vt.forEach(t),J.forEach(t),fe=u(e),U=i(e,"P",{});var $t=l(U);Oe=c($t,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),$t.forEach(t),ge=u(e),K=i(e,"P",{});var bt=l(K);Re=c(bt,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),bt.forEach(t),_e=u(e),Q=i(e,"P",{});var yt=l(Q);De=c(yt,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilities provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),yt.forEach(t),we=u(e),V=i(e,"P",{});var At=l(V);We=c(At,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),At.forEach(t),ve=u(e),v(F.$$.fragment,e),$e=u(e),E=i(e,"H2",{class:!0});var Le=l(E);C=i(Le,"A",{id:!0,class:!0,href:!0});var kt=l(C);ie=i(kt,"SPAN",{});var jt=l(ie);v(G.$$.fragment,jt),jt.forEach(t),kt.forEach(t),Je=u(Le),le=i(Le,"SPAN",{});var zt=l(le);Ue=c(zt,"Converting it to \u{1F917} Accelerate"),zt.forEach(t),Le.forEach(t),be=u(e),X=i(e,"P",{});var Et=l(X);Ke=c(Et,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),Et.forEach(t),ye=u(e),v(H.$$.fragment,e),Ae=u(e),v(N.$$.fragment,e),ke=u(e),x=i(e,"H2",{class:!0});var Be=l(x);q=i(Be,"A",{id:!0,class:!0,href:!0});var xt=l(q);ne=i(xt,"SPAN",{});var Pt=l(ne);v(Y.$$.fragment,Pt),Pt.forEach(t),xt.forEach(t),Qe=u(Be),ce=i(Be,"SPAN",{});var Tt=l(ce);Ve=c(Tt,"Letting \u{1F917} Accelerate handle gradient accumulation"),Tt.forEach(t),Be.forEach(t),je=u(e),f=i(e,"P",{});var j=l(f);Xe=c(j,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),pe=i(j,"CODE",{});var St=l(pe);Ze=c(St,"gradient_accumulation_steps"),St.forEach(t),et=c(j," parameter to "),Z=i(j,"A",{href:!0});var Ct=l(Z);tt=c(Ct,"Accelerator"),Ct.forEach(t),at=c(j,`, dictating the number
of steps to perform before each call to `),ue=i(j,"CODE",{});var Nt=l(ue);rt=c(Nt,"step()"),Nt.forEach(t),ot=c(j," and how to automatically adjust the loss during the call to "),ee=i(j,"A",{href:!0});var qt=l(ee);st=c(qt,"Accelerator.backward()"),qt.forEach(t),it=c(j,":"),j.forEach(t),ze=u(e),v(M.$$.fragment,e),Ee=u(e),I=i(e,"P",{});var Fe=l(I);lt=c(Fe,"From here you can use the "),te=i(Fe,"A",{href:!0});var It=l(te);nt=c(It,"Accelerator.accumulate()"),It.forEach(t),ct=c(Fe,` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Fe.forEach(t),xe=u(e),v(O.$$.fragment,e),Pe=u(e),ae=i(e,"P",{});var Lt=l(ae);pt=c(Lt,"You can remove all the special checks for the step number and the loss adjustment:"),Lt.forEach(t),Te=u(e),v(R.$$.fragment,e),Se=u(e),L=i(e,"P",{});var Ge=l(L);ut=c(Ge,"As you can see the "),re=i(Ge,"A",{href:!0});var Bt=l(re);dt=c(Bt,"Accelerator"),Bt.forEach(t),ht=c(Ge," is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Ge.forEach(t),Ce=u(e),P=i(e,"H2",{class:!0});var He=l(P);B=i(He,"A",{id:!0,class:!0,href:!0});var Ft=l(B);de=i(Ft,"SPAN",{});var Gt=l(de);v(D.$$.fragment,Gt),Gt.forEach(t),Ft.forEach(t),mt=u(He),he=i(He,"SPAN",{});var Ht=l(he);ft=c(Ht,"The finished code"),Ht.forEach(t),He.forEach(t),Ne=u(e),oe=i(e,"P",{});var Yt=l(oe);gt=c(Yt,"Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Yt.forEach(t),qe=u(e),v(W.$$.fragment,e),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Qt)),d(_,"id","performing-gradient-accumulation-with-accelerate"),d(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_,"href","#performing-gradient-accumulation-with-accelerate"),d(m,"class","relative group"),d(C,"id","converting-it-to-accelerate"),d(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(C,"href","#converting-it-to-accelerate"),d(E,"class","relative group"),d(q,"id","letting-accelerate-handle-gradient-accumulation"),d(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(q,"href","#letting-accelerate-handle-gradient-accumulation"),d(x,"class","relative group"),d(Z,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),d(ee,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.backward"),d(te,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.accumulate"),d(re,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),d(B,"id","the-finished-code"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#the-finished-code"),d(P,"class","relative group")},m(e,r){a(document.head,h),o(e,T,r),o(e,m,r),a(m,_),a(_,z),$(g,z,null),a(m,k),a(m,S),a(S,Me),o(e,fe,r),o(e,U,r),a(U,Oe),o(e,ge,r),o(e,K,r),a(K,Re),o(e,_e,r),o(e,Q,r),a(Q,De),o(e,we,r),o(e,V,r),a(V,We),o(e,ve,r),$(F,e,r),o(e,$e,r),o(e,E,r),a(E,C),a(C,ie),$(G,ie,null),a(E,Je),a(E,le),a(le,Ue),o(e,be,r),o(e,X,r),a(X,Ke),o(e,ye,r),$(H,e,r),o(e,Ae,r),$(N,e,r),o(e,ke,r),o(e,x,r),a(x,q),a(q,ne),$(Y,ne,null),a(x,Qe),a(x,ce),a(ce,Ve),o(e,je,r),o(e,f,r),a(f,Xe),a(f,pe),a(pe,Ze),a(f,et),a(f,Z),a(Z,tt),a(f,at),a(f,ue),a(ue,rt),a(f,ot),a(f,ee),a(ee,st),a(f,it),o(e,ze,r),$(M,e,r),o(e,Ee,r),o(e,I,r),a(I,lt),a(I,te),a(te,nt),a(I,ct),o(e,xe,r),$(O,e,r),o(e,Pe,r),o(e,ae,r),a(ae,pt),o(e,Te,r),$(R,e,r),o(e,Se,r),o(e,L,r),a(L,ut),a(L,re),a(re,dt),a(L,ht),o(e,Ce,r),o(e,P,r),a(P,B),a(B,de),$(D,de,null),a(P,mt),a(P,he),a(he,ft),o(e,Ne,r),o(e,oe,r),a(oe,gt),o(e,qe,r),$(W,e,r),Ie=!0},p(e,[r]){const J={};r&2&&(J.$$scope={dirty:r,ctx:e}),N.$set(J)},i(e){Ie||(b(g.$$.fragment,e),b(F.$$.fragment,e),b(G.$$.fragment,e),b(H.$$.fragment,e),b(N.$$.fragment,e),b(Y.$$.fragment,e),b(M.$$.fragment,e),b(O.$$.fragment,e),b(R.$$.fragment,e),b(D.$$.fragment,e),b(W.$$.fragment,e),Ie=!0)},o(e){y(g.$$.fragment,e),y(F.$$.fragment,e),y(G.$$.fragment,e),y(H.$$.fragment,e),y(N.$$.fragment,e),y(Y.$$.fragment,e),y(M.$$.fragment,e),y(O.$$.fragment,e),y(R.$$.fragment,e),y(D.$$.fragment,e),y(W.$$.fragment,e),Ie=!1},d(e){t(h),e&&t(T),e&&t(m),A(g),e&&t(fe),e&&t(U),e&&t(ge),e&&t(K),e&&t(_e),e&&t(Q),e&&t(we),e&&t(V),e&&t(ve),A(F,e),e&&t($e),e&&t(E),A(G),e&&t(be),e&&t(X),e&&t(ye),A(H,e),e&&t(Ae),A(N,e),e&&t(ke),e&&t(x),A(Y),e&&t(je),e&&t(f),e&&t(ze),A(M,e),e&&t(Ee),e&&t(I),e&&t(xe),A(O,e),e&&t(Pe),e&&t(ae),e&&t(Te),A(R,e),e&&t(Se),e&&t(L),e&&t(Ce),e&&t(P),A(D),e&&t(Ne),e&&t(oe),e&&t(qe),A(W,e)}}}const Qt={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"},{local:"the-finished-code",title:"The finished code"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function Vt(me){return Wt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aa extends Mt{constructor(h){super();Ot(this,h,Vt,Kt,Rt,{})}}export{aa as default,Qt as metadata};
