import{S as Rt,i as Yt,s as Jt,e as o,k as p,w as _,t as n,M as Ut,c as i,d as t,m as u,a as l,x as w,h as c,b as h,G as r,g as s,y as $,q as b,o as v,B as y,v as Kt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ot}from"../../chunks/Tip-hf-doc-builder.js";import{I as Me}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as se}from"../../chunks/CodeBlock-hf-doc-builder.js";function Qt(Y){let d;return{c(){d=n("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},l(m){d=c(m,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},m(m,g){s(m,d,g)},d(m){m&&t(d)}}}function Vt(Y){let d;return{c(){d=n("Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},l(m){d=c(m,"Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},m(m,g){s(m,d,g)},d(m){m&&t(d)}}}function Xt(Y){let d,m,g,E,oe,L,Oe,ie,Re,ge,J,Ye,_e,U,Je,we,K,Ue,$e,Q,Ke,be,G,ve,A,P,le,I,Qe,ne,Ve,ye,V,Xe,ke,B,Ae,x,je,j,S,ce,D,Ze,pe,et,ze,f,tt,ue,at,rt,X,st,ot,he,it,lt,Z,nt,ct,Ee,F,Pe,T,pt,ee,ut,ht,xe,H,Se,te,dt,Te,W,Ce,C,mt,ae,ft,gt,Ne,N,qe,z,q,de,M,_t,me,wt,Le,re,$t,Ge,O,Ie;return L=new Me({}),G=new se({props:{code:`device = 'cuda'
model.to(device)

gradient_accumulation_steps = 2

for index, batch in enumerate(training_dataloader):
    optimizer.zero_grad()
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
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
    loss.backward()
    <span class="hljs-keyword">if</span> (index+<span class="hljs-number">1</span>) % gradient_accumulation_steps == <span class="hljs-number">0</span>:
        optimizer.<span class="hljs-built_in">step</span>()
        scheduler.<span class="hljs-built_in">step</span>()`}}),I=new Me({}),B=new se({props:{code:`from accelerate import Accelerator
accelerator = Accelerator()

model, optimizer, training_dataloader, scheduler = accelerator.prepare(
    model, optimizer, training_dataloader, scheduler
)

for index, batch in enumerate(training_dataloader):
    optimizer.zero_grad()
    inputs, targets = batch
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    if (index+1) % gradient_accumulation_steps == 0:
        accelerator.backward(loss)
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
    <span class="hljs-keyword">if</span> (index+<span class="hljs-number">1</span>) % <span class="hljs-attr">gradient_accumulation_steps</span> == <span class="hljs-number">0</span>:
        accelerator.backward(loss)
        optimizer.step()
        scheduler.step()`}}),x=new Ot({props:{warning:!0,$$slots:{default:[Qt]},$$scope:{ctx:Y}}}),D=new Me({}),F=new se({props:{code:`from accelerate import Accelerator
-accelerator = Accelerator()
+accelerator = Accelerator(gradient_accumulation_steps=2)`,highlighted:`from accelerate import Accelerator
<span class="hljs-deletion">-accelerator = Accelerator()</span>
<span class="hljs-addition">+accelerator = Accelerator(gradient_accumulation_steps=2)</span>`}}),H=new se({props:{code:`for batch in training_dataloader:
    with accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)`,highlighted:`for batch in training_dataloader:
    with accelerator.<span class="hljs-built_in">accumulate</span>(model):
        optimizer.<span class="hljs-built_in">zero_grad</span>()
        inputs, targets = batch
        outputs = <span class="hljs-built_in">model</span>(inputs)`}}),W=new se({props:{code:`accelerator.backward(loss)
optimizer.step()
scheduler.step()`,highlighted:`accelerator.backward<span class="hljs-comment">(loss)</span>
optimizer.step<span class="hljs-comment">()</span>
scheduler.step<span class="hljs-comment">()</span>`}}),N=new Ot({props:{warning:!0,$$slots:{default:[Vt]},$$scope:{ctx:Y}}}),M=new Me({}),O=new se({props:{code:`for batch in training_dataloader:
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
        scheduler.<span class="hljs-built_in">step</span>()`}}),{c(){d=o("meta"),m=p(),g=o("h1"),E=o("a"),oe=o("span"),_(L.$$.fragment),Oe=p(),ie=o("span"),Re=n("Performing gradient accumulation with \u{1F917} Accelerate"),ge=p(),J=o("p"),Ye=n(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),_e=p(),U=o("p"),Je=n(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),we=p(),K=o("p"),Ue=n(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),$e=p(),Q=o("p"),Ke=n("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),be=p(),_(G.$$.fragment),ve=p(),A=o("h2"),P=o("a"),le=o("span"),_(I.$$.fragment),Qe=p(),ne=o("span"),Ve=n("Converting it to \u{1F917} Accelerate"),ye=p(),V=o("p"),Xe=n("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),ke=p(),_(B.$$.fragment),Ae=p(),_(x.$$.fragment),je=p(),j=o("h2"),S=o("a"),ce=o("span"),_(D.$$.fragment),Ze=p(),pe=o("span"),et=n("Letting \u{1F917} Accelerate handle gradient accumulation"),ze=p(),f=o("p"),tt=n("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ue=o("code"),at=n("gradient_accumulation_steps"),rt=n(" parameter to "),X=o("a"),st=n("Accelerator"),ot=n(`, dictating the number
of steps to perform before each call to `),he=o("code"),it=n("step()"),lt=n(" and how to automatically adjust the loss during the call to "),Z=o("a"),nt=n("Accelerator.backward()"),ct=n(":"),Ee=p(),_(F.$$.fragment),Pe=p(),T=o("p"),pt=n("From here you can use the "),ee=o("a"),ut=n("Accelerator.accumulate()"),ht=n(` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),xe=p(),_(H.$$.fragment),Se=p(),te=o("p"),dt=n("and you can remove all the special checks for the step number and the loss adjustment:"),Te=p(),_(W.$$.fragment),Ce=p(),C=o("p"),mt=n("As you can see the "),ae=o("a"),ft=n("Accelerator"),gt=n(" is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),Ne=p(),_(N.$$.fragment),qe=p(),z=o("h2"),q=o("a"),de=o("span"),_(M.$$.fragment),_t=p(),me=o("span"),wt=n("The finished code"),Le=p(),re=o("p"),$t=n("Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Ge=p(),_(O.$$.fragment),this.h()},l(e){const a=Ut('[data-svelte="svelte-1phssyn"]',document.head);d=i(a,"META",{name:!0,content:!0}),a.forEach(t),m=u(e),g=i(e,"H1",{class:!0});var R=l(g);E=i(R,"A",{id:!0,class:!0,href:!0});var fe=l(E);oe=i(fe,"SPAN",{});var bt=l(oe);w(L.$$.fragment,bt),bt.forEach(t),fe.forEach(t),Oe=u(R),ie=i(R,"SPAN",{});var vt=l(ie);Re=c(vt,"Performing gradient accumulation with \u{1F917} Accelerate"),vt.forEach(t),R.forEach(t),ge=u(e),J=i(e,"P",{});var yt=l(J);Ye=c(yt,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only stepping the optimizer after a certain number of batches have been performed.`),yt.forEach(t),_e=u(e),U=i(e,"P",{});var kt=l(U);Je=c(kt,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),kt.forEach(t),we=u(e),K=i(e,"P",{});var At=l(K);Ue=c(At,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one new line of code!`),At.forEach(t),$e=u(e),Q=i(e,"P",{});var jt=l(Q);Ke=c(jt,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),jt.forEach(t),be=u(e),w(G.$$.fragment,e),ve=u(e),A=i(e,"H2",{class:!0});var Be=l(A);P=i(Be,"A",{id:!0,class:!0,href:!0});var zt=l(P);le=i(zt,"SPAN",{});var Et=l(le);w(I.$$.fragment,Et),Et.forEach(t),zt.forEach(t),Qe=u(Be),ne=i(Be,"SPAN",{});var Pt=l(ne);Ve=c(Pt,"Converting it to \u{1F917} Accelerate"),Pt.forEach(t),Be.forEach(t),ye=u(e),V=i(e,"P",{});var xt=l(V);Xe=c(xt,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),xt.forEach(t),ke=u(e),w(B.$$.fragment,e),Ae=u(e),w(x.$$.fragment,e),je=u(e),j=i(e,"H2",{class:!0});var De=l(j);S=i(De,"A",{id:!0,class:!0,href:!0});var St=l(S);ce=i(St,"SPAN",{});var Tt=l(ce);w(D.$$.fragment,Tt),Tt.forEach(t),St.forEach(t),Ze=u(De),pe=i(De,"SPAN",{});var Ct=l(pe);et=c(Ct,"Letting \u{1F917} Accelerate handle gradient accumulation"),Ct.forEach(t),De.forEach(t),ze=u(e),f=i(e,"P",{});var k=l(f);tt=c(k,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ue=i(k,"CODE",{});var Nt=l(ue);at=c(Nt,"gradient_accumulation_steps"),Nt.forEach(t),rt=c(k," parameter to "),X=i(k,"A",{href:!0});var qt=l(X);st=c(qt,"Accelerator"),qt.forEach(t),ot=c(k,`, dictating the number
of steps to perform before each call to `),he=i(k,"CODE",{});var Lt=l(he);it=c(Lt,"step()"),Lt.forEach(t),lt=c(k," and how to automatically adjust the loss during the call to "),Z=i(k,"A",{href:!0});var Gt=l(Z);nt=c(Gt,"Accelerator.backward()"),Gt.forEach(t),ct=c(k,":"),k.forEach(t),Ee=u(e),w(F.$$.fragment,e),Pe=u(e),T=i(e,"P",{});var Fe=l(T);pt=c(Fe,"From here you can use the "),ee=i(Fe,"A",{href:!0});var It=l(ee);ut=c(It,"Accelerator.accumulate()"),It.forEach(t),ht=c(Fe,` context manager from inside your training loop to automatically perform the gradient accumulation for you!
You just wrap it around the entire training part of our code:`),Fe.forEach(t),xe=u(e),w(H.$$.fragment,e),Se=u(e),te=i(e,"P",{});var Bt=l(te);dt=c(Bt,"and you can remove all the special checks for the step number and the loss adjustment:"),Bt.forEach(t),Te=u(e),w(W.$$.fragment,e),Ce=u(e),C=i(e,"P",{});var He=l(C);mt=c(He,"As you can see the "),ae=i(He,"A",{href:!0});var Dt=l(ae);ft=c(Dt,"Accelerator"),Dt.forEach(t),gt=c(He," is able to keep track of the batch number you are on and it will automatically know whether to step through the prepared optimizer and how to adjust the loss."),He.forEach(t),Ne=u(e),w(N.$$.fragment,e),qe=u(e),z=i(e,"H2",{class:!0});var We=l(z);q=i(We,"A",{id:!0,class:!0,href:!0});var Ft=l(q);de=i(Ft,"SPAN",{});var Ht=l(de);w(M.$$.fragment,Ht),Ht.forEach(t),Ft.forEach(t),_t=u(We),me=i(We,"SPAN",{});var Wt=l(me);wt=c(Wt,"The finished code"),Wt.forEach(t),We.forEach(t),Le=u(e),re=i(e,"P",{});var Mt=l(re);$t=c(Mt,"Below is the finished implementation for performing gradient accumulation with \u{1F917} Accelerate"),Mt.forEach(t),Ge=u(e),w(O.$$.fragment,e),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Zt)),h(E,"id","performing-gradient-accumulation-with-accelerate"),h(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(E,"href","#performing-gradient-accumulation-with-accelerate"),h(g,"class","relative group"),h(P,"id","converting-it-to-accelerate"),h(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(P,"href","#converting-it-to-accelerate"),h(A,"class","relative group"),h(S,"id","letting-accelerate-handle-gradient-accumulation"),h(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(S,"href","#letting-accelerate-handle-gradient-accumulation"),h(j,"class","relative group"),h(X,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),h(Z,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.backward"),h(ee,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.accumulate"),h(ae,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),h(q,"id","the-finished-code"),h(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(q,"href","#the-finished-code"),h(z,"class","relative group")},m(e,a){r(document.head,d),s(e,m,a),s(e,g,a),r(g,E),r(E,oe),$(L,oe,null),r(g,Oe),r(g,ie),r(ie,Re),s(e,ge,a),s(e,J,a),r(J,Ye),s(e,_e,a),s(e,U,a),r(U,Je),s(e,we,a),s(e,K,a),r(K,Ue),s(e,$e,a),s(e,Q,a),r(Q,Ke),s(e,be,a),$(G,e,a),s(e,ve,a),s(e,A,a),r(A,P),r(P,le),$(I,le,null),r(A,Qe),r(A,ne),r(ne,Ve),s(e,ye,a),s(e,V,a),r(V,Xe),s(e,ke,a),$(B,e,a),s(e,Ae,a),$(x,e,a),s(e,je,a),s(e,j,a),r(j,S),r(S,ce),$(D,ce,null),r(j,Ze),r(j,pe),r(pe,et),s(e,ze,a),s(e,f,a),r(f,tt),r(f,ue),r(ue,at),r(f,rt),r(f,X),r(X,st),r(f,ot),r(f,he),r(he,it),r(f,lt),r(f,Z),r(Z,nt),r(f,ct),s(e,Ee,a),$(F,e,a),s(e,Pe,a),s(e,T,a),r(T,pt),r(T,ee),r(ee,ut),r(T,ht),s(e,xe,a),$(H,e,a),s(e,Se,a),s(e,te,a),r(te,dt),s(e,Te,a),$(W,e,a),s(e,Ce,a),s(e,C,a),r(C,mt),r(C,ae),r(ae,ft),r(C,gt),s(e,Ne,a),$(N,e,a),s(e,qe,a),s(e,z,a),r(z,q),r(q,de),$(M,de,null),r(z,_t),r(z,me),r(me,wt),s(e,Le,a),s(e,re,a),r(re,$t),s(e,Ge,a),$(O,e,a),Ie=!0},p(e,[a]){const R={};a&2&&(R.$$scope={dirty:a,ctx:e}),x.$set(R);const fe={};a&2&&(fe.$$scope={dirty:a,ctx:e}),N.$set(fe)},i(e){Ie||(b(L.$$.fragment,e),b(G.$$.fragment,e),b(I.$$.fragment,e),b(B.$$.fragment,e),b(x.$$.fragment,e),b(D.$$.fragment,e),b(F.$$.fragment,e),b(H.$$.fragment,e),b(W.$$.fragment,e),b(N.$$.fragment,e),b(M.$$.fragment,e),b(O.$$.fragment,e),Ie=!0)},o(e){v(L.$$.fragment,e),v(G.$$.fragment,e),v(I.$$.fragment,e),v(B.$$.fragment,e),v(x.$$.fragment,e),v(D.$$.fragment,e),v(F.$$.fragment,e),v(H.$$.fragment,e),v(W.$$.fragment,e),v(N.$$.fragment,e),v(M.$$.fragment,e),v(O.$$.fragment,e),Ie=!1},d(e){t(d),e&&t(m),e&&t(g),y(L),e&&t(ge),e&&t(J),e&&t(_e),e&&t(U),e&&t(we),e&&t(K),e&&t($e),e&&t(Q),e&&t(be),y(G,e),e&&t(ve),e&&t(A),y(I),e&&t(ye),e&&t(V),e&&t(ke),y(B,e),e&&t(Ae),y(x,e),e&&t(je),e&&t(j),y(D),e&&t(ze),e&&t(f),e&&t(Ee),y(F,e),e&&t(Pe),e&&t(T),e&&t(xe),y(H,e),e&&t(Se),e&&t(te),e&&t(Te),y(W,e),e&&t(Ce),e&&t(C),e&&t(Ne),y(N,e),e&&t(qe),e&&t(z),y(M),e&&t(Le),e&&t(re),e&&t(Ge),y(O,e)}}}const Zt={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"},{local:"the-finished-code",title:"The finished code"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function ea(Y){return Kt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class oa extends Rt{constructor(d){super();Yt(this,d,ea,Xt,Jt,{})}}export{oa as default,Zt as metadata};
