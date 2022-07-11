import{S as Rt,i as Yt,s as Jt,e as o,k as p,w as _,t as l,M as Ut,c as i,d as t,m as u,a as n,x as w,h as c,b as d,G as s,g as r,y as $,q as b,o as v,B as y,v as Kt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Mt}from"../../chunks/Tip-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ee}from"../../chunks/CodeBlock-hf-doc-builder.js";function Qt(Y){let h;return{c(){h=l("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},l(m){h=c(m,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},m(m,g){r(m,h,g)},d(m){m&&t(h)}}}function Vt(Y){let h;return{c(){h=l("Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},l(m){h=c(m,"Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},m(m,g){r(m,h,g)},d(m){m&&t(h)}}}function Xt(Y){let h,m,g,E,te,q,Me,ae,Re,ge,J,Ye,_e,U,Je,we,K,Ue,$e,Q,Ke,be,L,ve,j,x,se,O,Qe,re,Ve,ye,V,Xe,ke,G,je,P,Ae,A,C,oe,I,Ze,ie,et,ze,f,tt,ne,at,st,le,rt,ot,ce,it,nt,pe,lt,ct,Ee,B,xe,S,pt,ue,ut,ht,Pe,F,Ce,X,dt,Se,H,Te,T,mt,he,ft,gt,Ne,N,De,z,D,de,W,_t,me,wt,qe,Z,$t,Le,M,Oe;return q=new We({}),L=new ee({props:{code:`device = 'cuda'
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
        scheduler.<span class="hljs-built_in">step</span>()`}}),O=new We({}),G=new ee({props:{code:`from accelerate import Accelerator
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
        scheduler.step()`}}),P=new Mt({props:{warning:!0,$$slots:{default:[Qt]},$$scope:{ctx:Y}}}),I=new We({}),B=new ee({props:{code:`from accelerate import Accelerator
-accelerator = Accelerator()
+accelerator = Accelerator(gradient_accumulation_steps=2)`,highlighted:`from accelerate import Accelerator
<span class="hljs-deletion">-accelerator = Accelerator()</span>
<span class="hljs-addition">+accelerator = Accelerator(gradient_accumulation_steps=2)</span>`}}),F=new ee({props:{code:`-for index, batch in enumerate(training_dataloader):
+for batch in training_dataloader:
+   with accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)`,highlighted:`<span class="hljs-deletion">-for index, batch in enumerate(training_dataloader):</span>
<span class="hljs-addition">+for batch in training_dataloader:</span>
<span class="hljs-addition">+   with accelerator.accumulate(model):</span>
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)`}}),H=new ee({props:{code:`-loss = loss / gradient_accumulation_steps
accelerator.backward(loss)
-if (index+1) % gradient_accumulation_steps == 0:
optimizer.step()
scheduler.step()`,highlighted:`<span class="hljs-deletion">-loss = loss / gradient_accumulation_steps</span>
accelerator.backward(loss)
<span class="hljs-deletion">-if (index+1) % gradient_accumulation_steps == 0:</span>
optimizer.step()
scheduler.step()`}}),N=new Mt({props:{warning:!0,$$slots:{default:[Vt]},$$scope:{ctx:Y}}}),W=new We({}),M=new ee({props:{code:`for batch in training_dataloader:
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
        scheduler.<span class="hljs-built_in">step</span>()`}}),{c(){h=o("meta"),m=p(),g=o("h1"),E=o("a"),te=o("span"),_(q.$$.fragment),Me=p(),ae=o("span"),Re=l("Performing gradient accumulation with \u{1F917} Accelerate"),ge=p(),J=o("p"),Ye=l(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),_e=p(),U=o("p"),Je=l(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),we=p(),K=o("p"),Ue=l(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),$e=p(),Q=o("p"),Ke=l("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),be=p(),_(L.$$.fragment),ve=p(),j=o("h2"),x=o("a"),se=o("span"),_(O.$$.fragment),Qe=p(),re=o("span"),Ve=l("Converting it to \u{1F917} Accelerate"),ye=p(),V=o("p"),Xe=l("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),ke=p(),_(G.$$.fragment),je=p(),_(P.$$.fragment),Ae=p(),A=o("h2"),C=o("a"),oe=o("span"),_(I.$$.fragment),Ze=p(),ie=o("span"),et=l("Letting \u{1F917} Accelerate handle gradient accumulation"),ze=p(),f=o("p"),tt=l("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ne=o("code"),at=l("gradient_accumulation_steps"),st=l(" parameter to "),le=o("code"),rt=l("Accelerator"),ot=l(`, dictating the number
of steps to perform before each call to `),ce=o("code"),it=l("step()"),nt=l(" and how to automatically adjust the loss during the call to "),pe=o("code"),lt=l("Accelerator.backward"),ct=l(":"),Ee=p(),_(B.$$.fragment),xe=p(),S=o("p"),pt=l("From here you can use the "),ue=o("code"),ut=l("Accelerator.accumulate"),ht=l(` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Pe=p(),_(F.$$.fragment),Ce=p(),X=o("p"),dt=l("and you can remove all the special checks for the step number and the loss adjustment:"),Se=p(),_(H.$$.fragment),Te=p(),T=o("p"),mt=l("As you can see the "),he=o("code"),ft=l("Accelerator"),gt=l(" is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Ne=p(),_(N.$$.fragment),De=p(),z=o("h2"),D=o("a"),de=o("span"),_(W.$$.fragment),_t=p(),me=o("span"),wt=l("The finished code"),qe=p(),Z=o("p"),$t=l("Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Le=p(),_(M.$$.fragment),this.h()},l(e){const a=Ut('[data-svelte="svelte-1phssyn"]',document.head);h=i(a,"META",{name:!0,content:!0}),a.forEach(t),m=u(e),g=i(e,"H1",{class:!0});var R=n(g);E=i(R,"A",{id:!0,class:!0,href:!0});var fe=n(E);te=i(fe,"SPAN",{});var bt=n(te);w(q.$$.fragment,bt),bt.forEach(t),fe.forEach(t),Me=u(R),ae=i(R,"SPAN",{});var vt=n(ae);Re=c(vt,"Performing gradient accumulation with \u{1F917} Accelerate"),vt.forEach(t),R.forEach(t),ge=u(e),J=i(e,"P",{});var yt=n(J);Ye=c(yt,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),yt.forEach(t),_e=u(e),U=i(e,"P",{});var kt=n(U);Je=c(kt,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),kt.forEach(t),we=u(e),K=i(e,"P",{});var jt=n(K);Ue=c(jt,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),jt.forEach(t),$e=u(e),Q=i(e,"P",{});var At=n(Q);Ke=c(At,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),At.forEach(t),be=u(e),w(L.$$.fragment,e),ve=u(e),j=i(e,"H2",{class:!0});var Ge=n(j);x=i(Ge,"A",{id:!0,class:!0,href:!0});var zt=n(x);se=i(zt,"SPAN",{});var Et=n(se);w(O.$$.fragment,Et),Et.forEach(t),zt.forEach(t),Qe=u(Ge),re=i(Ge,"SPAN",{});var xt=n(re);Ve=c(xt,"Converting it to \u{1F917} Accelerate"),xt.forEach(t),Ge.forEach(t),ye=u(e),V=i(e,"P",{});var Pt=n(V);Xe=c(Pt,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),Pt.forEach(t),ke=u(e),w(G.$$.fragment,e),je=u(e),w(P.$$.fragment,e),Ae=u(e),A=i(e,"H2",{class:!0});var Ie=n(A);C=i(Ie,"A",{id:!0,class:!0,href:!0});var Ct=n(C);oe=i(Ct,"SPAN",{});var St=n(oe);w(I.$$.fragment,St),St.forEach(t),Ct.forEach(t),Ze=u(Ie),ie=i(Ie,"SPAN",{});var Tt=n(ie);et=c(Tt,"Letting \u{1F917} Accelerate handle gradient accumulation"),Tt.forEach(t),Ie.forEach(t),ze=u(e),f=i(e,"P",{});var k=n(f);tt=c(k,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ne=i(k,"CODE",{});var Nt=n(ne);at=c(Nt,"gradient_accumulation_steps"),Nt.forEach(t),st=c(k," parameter to "),le=i(k,"CODE",{});var Dt=n(le);rt=c(Dt,"Accelerator"),Dt.forEach(t),ot=c(k,`, dictating the number
of steps to perform before each call to `),ce=i(k,"CODE",{});var qt=n(ce);it=c(qt,"step()"),qt.forEach(t),nt=c(k," and how to automatically adjust the loss during the call to "),pe=i(k,"CODE",{});var Lt=n(pe);lt=c(Lt,"Accelerator.backward"),Lt.forEach(t),ct=c(k,":"),k.forEach(t),Ee=u(e),w(B.$$.fragment,e),xe=u(e),S=i(e,"P",{});var Be=n(S);pt=c(Be,"From here you can use the "),ue=i(Be,"CODE",{});var Ot=n(ue);ut=c(Ot,"Accelerator.accumulate"),Ot.forEach(t),ht=c(Be,` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Be.forEach(t),Pe=u(e),w(F.$$.fragment,e),Ce=u(e),X=i(e,"P",{});var Gt=n(X);dt=c(Gt,"and you can remove all the special checks for the step number and the loss adjustment:"),Gt.forEach(t),Se=u(e),w(H.$$.fragment,e),Te=u(e),T=i(e,"P",{});var Fe=n(T);mt=c(Fe,"As you can see the "),he=i(Fe,"CODE",{});var It=n(he);ft=c(It,"Accelerator"),It.forEach(t),gt=c(Fe," is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Fe.forEach(t),Ne=u(e),w(N.$$.fragment,e),De=u(e),z=i(e,"H2",{class:!0});var He=n(z);D=i(He,"A",{id:!0,class:!0,href:!0});var Bt=n(D);de=i(Bt,"SPAN",{});var Ft=n(de);w(W.$$.fragment,Ft),Ft.forEach(t),Bt.forEach(t),_t=u(He),me=i(He,"SPAN",{});var Ht=n(me);wt=c(Ht,"The finished code"),Ht.forEach(t),He.forEach(t),qe=u(e),Z=i(e,"P",{});var Wt=n(Z);$t=c(Wt,"Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Wt.forEach(t),Le=u(e),w(M.$$.fragment,e),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Zt)),d(E,"id","performing-gradient-accumulation-with-accelerate"),d(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(E,"href","#performing-gradient-accumulation-with-accelerate"),d(g,"class","relative group"),d(x,"id","converting-it-to-accelerate"),d(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(x,"href","#converting-it-to-accelerate"),d(j,"class","relative group"),d(C,"id","letting-accelerate-handle-gradient-accumulation"),d(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(C,"href","#letting-accelerate-handle-gradient-accumulation"),d(A,"class","relative group"),d(D,"id","the-finished-code"),d(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(D,"href","#the-finished-code"),d(z,"class","relative group")},m(e,a){s(document.head,h),r(e,m,a),r(e,g,a),s(g,E),s(E,te),$(q,te,null),s(g,Me),s(g,ae),s(ae,Re),r(e,ge,a),r(e,J,a),s(J,Ye),r(e,_e,a),r(e,U,a),s(U,Je),r(e,we,a),r(e,K,a),s(K,Ue),r(e,$e,a),r(e,Q,a),s(Q,Ke),r(e,be,a),$(L,e,a),r(e,ve,a),r(e,j,a),s(j,x),s(x,se),$(O,se,null),s(j,Qe),s(j,re),s(re,Ve),r(e,ye,a),r(e,V,a),s(V,Xe),r(e,ke,a),$(G,e,a),r(e,je,a),$(P,e,a),r(e,Ae,a),r(e,A,a),s(A,C),s(C,oe),$(I,oe,null),s(A,Ze),s(A,ie),s(ie,et),r(e,ze,a),r(e,f,a),s(f,tt),s(f,ne),s(ne,at),s(f,st),s(f,le),s(le,rt),s(f,ot),s(f,ce),s(ce,it),s(f,nt),s(f,pe),s(pe,lt),s(f,ct),r(e,Ee,a),$(B,e,a),r(e,xe,a),r(e,S,a),s(S,pt),s(S,ue),s(ue,ut),s(S,ht),r(e,Pe,a),$(F,e,a),r(e,Ce,a),r(e,X,a),s(X,dt),r(e,Se,a),$(H,e,a),r(e,Te,a),r(e,T,a),s(T,mt),s(T,he),s(he,ft),s(T,gt),r(e,Ne,a),$(N,e,a),r(e,De,a),r(e,z,a),s(z,D),s(D,de),$(W,de,null),s(z,_t),s(z,me),s(me,wt),r(e,qe,a),r(e,Z,a),s(Z,$t),r(e,Le,a),$(M,e,a),Oe=!0},p(e,[a]){const R={};a&2&&(R.$$scope={dirty:a,ctx:e}),P.$set(R);const fe={};a&2&&(fe.$$scope={dirty:a,ctx:e}),N.$set(fe)},i(e){Oe||(b(q.$$.fragment,e),b(L.$$.fragment,e),b(O.$$.fragment,e),b(G.$$.fragment,e),b(P.$$.fragment,e),b(I.$$.fragment,e),b(B.$$.fragment,e),b(F.$$.fragment,e),b(H.$$.fragment,e),b(N.$$.fragment,e),b(W.$$.fragment,e),b(M.$$.fragment,e),Oe=!0)},o(e){v(q.$$.fragment,e),v(L.$$.fragment,e),v(O.$$.fragment,e),v(G.$$.fragment,e),v(P.$$.fragment,e),v(I.$$.fragment,e),v(B.$$.fragment,e),v(F.$$.fragment,e),v(H.$$.fragment,e),v(N.$$.fragment,e),v(W.$$.fragment,e),v(M.$$.fragment,e),Oe=!1},d(e){t(h),e&&t(m),e&&t(g),y(q),e&&t(ge),e&&t(J),e&&t(_e),e&&t(U),e&&t(we),e&&t(K),e&&t($e),e&&t(Q),e&&t(be),y(L,e),e&&t(ve),e&&t(j),y(O),e&&t(ye),e&&t(V),e&&t(ke),y(G,e),e&&t(je),y(P,e),e&&t(Ae),e&&t(A),y(I),e&&t(ze),e&&t(f),e&&t(Ee),y(B,e),e&&t(xe),e&&t(S),e&&t(Pe),y(F,e),e&&t(Ce),e&&t(X),e&&t(Se),y(H,e),e&&t(Te),e&&t(T),e&&t(Ne),y(N,e),e&&t(De),e&&t(z),y(W),e&&t(qe),e&&t(Z),e&&t(Le),y(M,e)}}}const Zt={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"},{local:"the-finished-code",title:"The finished code"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function ea(Y){return Kt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class oa extends Rt{constructor(h){super();Yt(this,h,ea,Xt,Jt,{})}}export{oa as default,Zt as metadata};
