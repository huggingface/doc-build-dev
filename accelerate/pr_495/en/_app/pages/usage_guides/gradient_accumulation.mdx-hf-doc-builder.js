import{S as Wt,i as Ot,s as Bt,e as s,k as p,w as _,t as l,M as Ft,c as i,d as t,m as u,a as n,x as w,h as c,b as d,G as r,g as o,y as $,q as v,o as b,B as y,v as Ht}from"../../chunks/vendor-hf-doc-builder.js";import{T as It}from"../../chunks/Tip-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as he}from"../../chunks/CodeBlock-hf-doc-builder.js";function Mt(R){let h;return{c(){h=l("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},l(m){h=c(m,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},m(m,g){o(m,h,g)},d(m){m&&t(h)}}}function Rt(R){let h;return{c(){h=l("Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},l(m){h=c(m,"Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},m(m,g){o(m,h,g)},d(m){m&&t(h)}}}function Jt(R){let h,m,g,E,ee,L,Oe,te,Be,me,J,Fe,fe,U,He,ge,K,Me,_e,Q,Re,we,D,$e,A,x,ae,G,Je,re,Ue,ve,V,Ke,be,I,ye,P,ke,j,C,oe,W,Qe,se,Ve,Ae,f,Xe,ie,Ye,Ze,ne,et,tt,le,at,rt,ce,ot,st,je,O,ze,S,it,X,nt,lt,Ee,B,xe,T,ct,Y,pt,ut,Pe,N,Ce,z,q,pe,F,dt,ue,ht,Se,Z,mt,Te,H,Ne;return L=new We({}),D=new he({props:{code:`device = 'cuda'
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
        scheduler.step()`}}),G=new We({}),I=new he({props:{code:`from accelerate import Accelerator
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
        scheduler.step()`}}),P=new It({props:{warning:!0,$$slots:{default:[Mt]},$$scope:{ctx:R}}}),W=new We({}),O=new he({props:{code:`from accelerate import Accelerator
-accelerator = Accelerator()
+accelerator = Accelerator(gradient_accumulation_steps=2)`,highlighted:`from accelerate import Accelerator
<span class="hljs-deletion">-accelerator = Accelerator()</span>
<span class="hljs-addition">+accelerator = Accelerator(gradient_accumulation_steps=2)</span>`}}),B=new he({props:{code:`-for index, batch in enumerate(training_dataloader):
+for batch in training_dataloader:
+   with accelerator.accumulate(model):
+       optimizer.zero_grad()
+       inputs, targets = batch
+       outputs = model(inputs)
+       loss = loss_function(outputs, targets)
-   loss = loss / gradient_accumulation_steps
-   accelerator.backward(loss)
+       accelerator.backward(loss)
-    if (index+1) % gradient_accumulation_steps == 0:
-        optimizer.step()
-        scheduler.step()
+       optimizer.step()
+       scheduler.step()`,highlighted:`<span class="hljs-deletion">-for index, batch in enumerate(training_dataloader):</span>
<span class="hljs-addition">+for batch in training_dataloader:</span>
<span class="hljs-addition">+   with accelerator.accumulate(model):</span>
<span class="hljs-addition">+       optimizer.zero_grad()</span>
<span class="hljs-addition">+       inputs, targets = batch</span>
<span class="hljs-addition">+       outputs = model(inputs)</span>
<span class="hljs-addition">+       loss = loss_function(outputs, targets)</span>
<span class="hljs-deletion">-   loss = loss / gradient_accumulation_steps</span>
<span class="hljs-deletion">-   accelerator.backward(loss)</span>
<span class="hljs-addition">+       accelerator.backward(loss)</span>
<span class="hljs-deletion">-    if (index+1) % gradient_accumulation_steps == 0:</span>
<span class="hljs-deletion">-        optimizer.step()</span>
<span class="hljs-deletion">-        scheduler.step()</span>
<span class="hljs-addition">+       optimizer.step()</span>
<span class="hljs-addition">+       scheduler.step()</span>`}}),N=new It({props:{warning:!0,$$slots:{default:[Rt]},$$scope:{ctx:R}}}),F=new We({}),H=new he({props:{code:`for batch in training_dataloader:
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
        scheduler.step()`}}),{c(){h=s("meta"),m=p(),g=s("h1"),E=s("a"),ee=s("span"),_(L.$$.fragment),Oe=p(),te=s("span"),Be=l("Performing gradient accumulation with \u{1F917} Accelerate"),me=p(),J=s("p"),Fe=l(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only performing the step through the optimizer after a certain number of batches have been performed.`),fe=p(),U=s("p"),He=l(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),ge=p(),K=s("p"),Me=l(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one line of code!`),_e=p(),Q=s("p"),Re=l("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),we=p(),_(D.$$.fragment),$e=p(),A=s("h2"),x=s("a"),ae=s("span"),_(G.$$.fragment),Je=p(),re=s("span"),Ue=l("Converting it to \u{1F917} Accelerate"),ve=p(),V=s("p"),Ke=l("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),be=p(),_(I.$$.fragment),ye=p(),_(P.$$.fragment),ke=p(),j=s("h2"),C=s("a"),oe=s("span"),_(W.$$.fragment),Qe=p(),se=s("span"),Ve=l("Letting \u{1F917} Accelerate handle gradient accumulation"),Ae=p(),f=s("p"),Xe=l("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ie=s("code"),Ye=l("gradient_accumulation_steps"),Ze=l(" parameter to "),ne=s("code"),et=l("Accelerator"),tt=l(`, dictating the number
of steps to perform before each call to `),le=s("code"),at=l("step()"),rt=l(" and how to automatically adjust the loss during the call to "),ce=s("code"),ot=l("backward()"),st=l(":"),je=p(),_(O.$$.fragment),ze=p(),S=s("p"),it=l("From here you can use the "),X=s("a"),nt=l("Accelerator.accumulate()"),lt=l(` context manager from inside your training loop to automatically perform the gradient accumulation for you!
We just wrap it around the entire training part of our code:`),Ee=p(),_(B.$$.fragment),xe=p(),T=s("p"),ct=l("As you can see the "),Y=s("a"),pt=l("Accelerator"),ut=l(` is able to keep track of the batch number you are on and it will automatically know whether to actually perform the backward pass
and step through the prepared schedulers and optimizers.`),Pe=p(),_(N.$$.fragment),Ce=p(),z=s("h2"),q=s("a"),pe=s("span"),_(F.$$.fragment),dt=p(),ue=s("span"),ht=l("The finished code"),Se=p(),Z=s("p"),mt=l("Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Te=p(),_(H.$$.fragment),this.h()},l(e){const a=Ft('[data-svelte="svelte-1phssyn"]',document.head);h=i(a,"META",{name:!0,content:!0}),a.forEach(t),m=u(e),g=i(e,"H1",{class:!0});var M=n(g);E=i(M,"A",{id:!0,class:!0,href:!0});var de=n(E);ee=i(de,"SPAN",{});var ft=n(ee);w(L.$$.fragment,ft),ft.forEach(t),de.forEach(t),Oe=u(M),te=i(M,"SPAN",{});var gt=n(te);Be=c(gt,"Performing gradient accumulation with \u{1F917} Accelerate"),gt.forEach(t),M.forEach(t),me=u(e),J=i(e,"P",{});var _t=n(J);Fe=c(_t,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only performing the step through the optimizer after a certain number of batches have been performed.`),_t.forEach(t),fe=u(e),U=i(e,"P",{});var wt=n(U);He=c(wt,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),wt.forEach(t),ge=u(e),K=i(e,"P",{});var $t=n(K);Me=c($t,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one line of code!`),$t.forEach(t),_e=u(e),Q=i(e,"P",{});var vt=n(Q);Re=c(vt,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),vt.forEach(t),we=u(e),w(D.$$.fragment,e),$e=u(e),A=i(e,"H2",{class:!0});var qe=n(A);x=i(qe,"A",{id:!0,class:!0,href:!0});var bt=n(x);ae=i(bt,"SPAN",{});var yt=n(ae);w(G.$$.fragment,yt),yt.forEach(t),bt.forEach(t),Je=u(qe),re=i(qe,"SPAN",{});var kt=n(re);Ue=c(kt,"Converting it to \u{1F917} Accelerate"),kt.forEach(t),qe.forEach(t),ve=u(e),V=i(e,"P",{});var At=n(V);Ke=c(At,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),At.forEach(t),be=u(e),w(I.$$.fragment,e),ye=u(e),w(P.$$.fragment,e),ke=u(e),j=i(e,"H2",{class:!0});var Le=n(j);C=i(Le,"A",{id:!0,class:!0,href:!0});var jt=n(C);oe=i(jt,"SPAN",{});var zt=n(oe);w(W.$$.fragment,zt),zt.forEach(t),jt.forEach(t),Qe=u(Le),se=i(Le,"SPAN",{});var Et=n(se);Ve=c(Et,"Letting \u{1F917} Accelerate handle gradient accumulation"),Et.forEach(t),Le.forEach(t),Ae=u(e),f=i(e,"P",{});var k=n(f);Xe=c(k,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ie=i(k,"CODE",{});var xt=n(ie);Ye=c(xt,"gradient_accumulation_steps"),xt.forEach(t),Ze=c(k," parameter to "),ne=i(k,"CODE",{});var Pt=n(ne);et=c(Pt,"Accelerator"),Pt.forEach(t),tt=c(k,`, dictating the number
of steps to perform before each call to `),le=i(k,"CODE",{});var Ct=n(le);at=c(Ct,"step()"),Ct.forEach(t),rt=c(k," and how to automatically adjust the loss during the call to "),ce=i(k,"CODE",{});var St=n(ce);ot=c(St,"backward()"),St.forEach(t),st=c(k,":"),k.forEach(t),je=u(e),w(O.$$.fragment,e),ze=u(e),S=i(e,"P",{});var De=n(S);it=c(De,"From here you can use the "),X=i(De,"A",{href:!0});var Tt=n(X);nt=c(Tt,"Accelerator.accumulate()"),Tt.forEach(t),lt=c(De,` context manager from inside your training loop to automatically perform the gradient accumulation for you!
We just wrap it around the entire training part of our code:`),De.forEach(t),Ee=u(e),w(B.$$.fragment,e),xe=u(e),T=i(e,"P",{});var Ge=n(T);ct=c(Ge,"As you can see the "),Y=i(Ge,"A",{href:!0});var Nt=n(Y);pt=c(Nt,"Accelerator"),Nt.forEach(t),ut=c(Ge,` is able to keep track of the batch number you are on and it will automatically know whether to actually perform the backward pass
and step through the prepared schedulers and optimizers.`),Ge.forEach(t),Pe=u(e),w(N.$$.fragment,e),Ce=u(e),z=i(e,"H2",{class:!0});var Ie=n(z);q=i(Ie,"A",{id:!0,class:!0,href:!0});var qt=n(q);pe=i(qt,"SPAN",{});var Lt=n(pe);w(F.$$.fragment,Lt),Lt.forEach(t),qt.forEach(t),dt=u(Ie),ue=i(Ie,"SPAN",{});var Dt=n(ue);ht=c(Dt,"The finished code"),Dt.forEach(t),Ie.forEach(t),Se=u(e),Z=i(e,"P",{});var Gt=n(Z);mt=c(Gt,"Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Gt.forEach(t),Te=u(e),w(H.$$.fragment,e),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Ut)),d(E,"id","performing-gradient-accumulation-with-accelerate"),d(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(E,"href","#performing-gradient-accumulation-with-accelerate"),d(g,"class","relative group"),d(x,"id","converting-it-to-accelerate"),d(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(x,"href","#converting-it-to-accelerate"),d(A,"class","relative group"),d(C,"id","letting-accelerate-handle-gradient-accumulation"),d(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(C,"href","#letting-accelerate-handle-gradient-accumulation"),d(j,"class","relative group"),d(X,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.accumulate"),d(Y,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),d(q,"id","the-finished-code"),d(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(q,"href","#the-finished-code"),d(z,"class","relative group")},m(e,a){r(document.head,h),o(e,m,a),o(e,g,a),r(g,E),r(E,ee),$(L,ee,null),r(g,Oe),r(g,te),r(te,Be),o(e,me,a),o(e,J,a),r(J,Fe),o(e,fe,a),o(e,U,a),r(U,He),o(e,ge,a),o(e,K,a),r(K,Me),o(e,_e,a),o(e,Q,a),r(Q,Re),o(e,we,a),$(D,e,a),o(e,$e,a),o(e,A,a),r(A,x),r(x,ae),$(G,ae,null),r(A,Je),r(A,re),r(re,Ue),o(e,ve,a),o(e,V,a),r(V,Ke),o(e,be,a),$(I,e,a),o(e,ye,a),$(P,e,a),o(e,ke,a),o(e,j,a),r(j,C),r(C,oe),$(W,oe,null),r(j,Qe),r(j,se),r(se,Ve),o(e,Ae,a),o(e,f,a),r(f,Xe),r(f,ie),r(ie,Ye),r(f,Ze),r(f,ne),r(ne,et),r(f,tt),r(f,le),r(le,at),r(f,rt),r(f,ce),r(ce,ot),r(f,st),o(e,je,a),$(O,e,a),o(e,ze,a),o(e,S,a),r(S,it),r(S,X),r(X,nt),r(S,lt),o(e,Ee,a),$(B,e,a),o(e,xe,a),o(e,T,a),r(T,ct),r(T,Y),r(Y,pt),r(T,ut),o(e,Pe,a),$(N,e,a),o(e,Ce,a),o(e,z,a),r(z,q),r(q,pe),$(F,pe,null),r(z,dt),r(z,ue),r(ue,ht),o(e,Se,a),o(e,Z,a),r(Z,mt),o(e,Te,a),$(H,e,a),Ne=!0},p(e,[a]){const M={};a&2&&(M.$$scope={dirty:a,ctx:e}),P.$set(M);const de={};a&2&&(de.$$scope={dirty:a,ctx:e}),N.$set(de)},i(e){Ne||(v(L.$$.fragment,e),v(D.$$.fragment,e),v(G.$$.fragment,e),v(I.$$.fragment,e),v(P.$$.fragment,e),v(W.$$.fragment,e),v(O.$$.fragment,e),v(B.$$.fragment,e),v(N.$$.fragment,e),v(F.$$.fragment,e),v(H.$$.fragment,e),Ne=!0)},o(e){b(L.$$.fragment,e),b(D.$$.fragment,e),b(G.$$.fragment,e),b(I.$$.fragment,e),b(P.$$.fragment,e),b(W.$$.fragment,e),b(O.$$.fragment,e),b(B.$$.fragment,e),b(N.$$.fragment,e),b(F.$$.fragment,e),b(H.$$.fragment,e),Ne=!1},d(e){t(h),e&&t(m),e&&t(g),y(L),e&&t(me),e&&t(J),e&&t(fe),e&&t(U),e&&t(ge),e&&t(K),e&&t(_e),e&&t(Q),e&&t(we),y(D,e),e&&t($e),e&&t(A),y(G),e&&t(ve),e&&t(V),e&&t(be),y(I,e),e&&t(ye),y(P,e),e&&t(ke),e&&t(j),y(W),e&&t(Ae),e&&t(f),e&&t(je),y(O,e),e&&t(ze),e&&t(S),e&&t(Ee),y(B,e),e&&t(xe),e&&t(T),e&&t(Pe),y(N,e),e&&t(Ce),e&&t(z),y(F),e&&t(Se),e&&t(Z),e&&t(Te),y(H,e)}}}const Ut={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"},{local:"the-finished-code",title:"The finished code"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function Kt(R){return Ht(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Zt extends Wt{constructor(h){super();Ot(this,h,Kt,Jt,Bt,{})}}export{Zt as default,Ut as metadata};
