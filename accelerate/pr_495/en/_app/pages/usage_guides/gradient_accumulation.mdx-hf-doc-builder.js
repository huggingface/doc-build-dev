import{S as zt,i as Et,s as xt,e as s,k as p,w as b,t as l,M as jt,c as i,d as t,m as u,a as n,x as v,h as c,b as m,G as r,g as o,y,q as k,o as A,B as z,v as Pt}from"../../chunks/vendor-hf-doc-builder.js";import{T as At}from"../../chunks/Tip-hf-doc-builder.js";import{I as rt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Pe}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ct(W){let d;return{c(){d=l("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},l(h){d=c(h,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},m(h,g){o(h,d,g)},d(h){h&&t(d)}}}function Tt(W){let d;return{c(){d=l("Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},l(h){d=c(h,"Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},m(h,g){o(h,d,g)},d(h){h&&t(d)}}}function St(W){let d,h,g,E,V,q,Ce,X,Te,ne,H,Se,le,M,qe,ce,R,Le,pe,B,Ne,ue,L,de,w,x,Y,N,De,Z,Ge,he,J,Ie,me,D,fe,j,ge,$,P,ee,G,Oe,te,Fe,_e,f,We,ae,He,Me,re,Re,Be,oe,Je,Ue,se,Ke,Qe,we,I,$e,C,Ve,U,Xe,Ye,be,O,ve,T,Ze,K,et,tt,ye,S,ke,Q,at,Ae;return q=new rt({}),L=new Pe({props:{code:`device = 'cuda'
model.to(device)

gradient_accumulation_steps = 2

for index, batch in enumerate(training_dataloader):
    optimizer.zero_grad()
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    if (index+1) % gradient_accumulation_steps == 0:
        loss.backward()
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
    <span class="hljs-keyword">if</span> (index+<span class="hljs-number">1</span>) % gradient_accumulation_steps == <span class="hljs-number">0</span>:
        loss.backward()
        optimizer.step()
        scheduler.step()`}}),N=new rt({}),D=new Pe({props:{code:`from accelerate import Accelerator
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
    <span class="hljs-keyword">if</span> (index+<span class="hljs-number">1</span>) % gradient_accumulation_steps == <span class="hljs-number">0</span>:
        accelerator.backward(loss)
        optimizer.step()
        scheduler.step()`}}),j=new At({props:{warning:!0,$$slots:{default:[Ct]},$$scope:{ctx:W}}}),G=new rt({}),I=new Pe({props:{code:`from accelerate import Accelerator
-accelerator = Accelerator()
+accelerator = Accelerator(gradient_accumulation_steps=2)`,highlighted:`from accelerate import Accelerator
<span class="hljs-deletion">-accelerator = Accelerator()</span>
<span class="hljs-addition">+accelerator = Accelerator(gradient_accumulation_steps=2)</span>`}}),O=new Pe({props:{code:`-for index, batch in enumerate(training_dataloader):
for batch in training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
-    if (index+1) % gradient_accumulation_steps == 0:
-        accelerator.backward(loss)
-        optimizer.step()
-        scheduler.step()
+   accelerator.backward(loss)
+   optimizer.step()
+   scheduler.step()`,highlighted:`<span class="hljs-deletion">-for index, batch in enumerate(training_dataloader):</span>
for batch in training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
<span class="hljs-deletion">-    if (index+1) % gradient_accumulation_steps == 0:</span>
<span class="hljs-deletion">-        accelerator.backward(loss)</span>
<span class="hljs-deletion">-        optimizer.step()</span>
<span class="hljs-deletion">-        scheduler.step()</span>
<span class="hljs-addition">+   accelerator.backward(loss)</span>
<span class="hljs-addition">+   optimizer.step()</span>
<span class="hljs-addition">+   scheduler.step()</span>`}}),S=new At({props:{warning:!0,$$slots:{default:[Tt]},$$scope:{ctx:W}}}),{c(){d=s("meta"),h=p(),g=s("h1"),E=s("a"),V=s("span"),b(q.$$.fragment),Ce=p(),X=s("span"),Te=l("Performing gradient accumulation with \u{1F917} Accelerate"),ne=p(),H=s("p"),Se=l(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only performing the backward pass after a certain number of batches have been performed.`),le=p(),M=s("p"),qe=l(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),ce=p(),R=s("p"),Le=l(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one line of code!`),pe=p(),B=s("p"),Ne=l("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),ue=p(),b(L.$$.fragment),de=p(),w=s("h2"),x=s("a"),Y=s("span"),b(N.$$.fragment),De=p(),Z=s("span"),Ge=l("Converting it to \u{1F917} Accelerate"),he=p(),J=s("p"),Ie=l("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),me=p(),b(D.$$.fragment),fe=p(),b(j.$$.fragment),ge=p(),$=s("h2"),P=s("a"),ee=s("span"),b(G.$$.fragment),Oe=p(),te=s("span"),Fe=l("Letting \u{1F917} Accelerate handle gradient accumulation"),_e=p(),f=s("p"),We=l("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ae=s("code"),He=l("gradient_accumulation_steps"),Me=l(" parameter to "),re=s("code"),Re=l("Accelerator"),Be=l(`, dictating the number
of steps to perform before each call to `),oe=s("code"),Je=l("step()"),Ue=l(" and "),se=s("code"),Ke=l("backward()"),Qe=l(":"),we=p(),b(I.$$.fragment),$e=p(),C=s("p"),Ve=l("From here you can use the "),U=s("a"),Xe=l("Accelerator.accumulate()"),Ye=l(" context manager from inside your training loop to automatically perform the gradient accumulation for you!"),be=p(),b(O.$$.fragment),ve=p(),T=s("p"),Ze=l("As you can see the "),K=s("a"),et=l("Accelerator"),tt=l(` is able to keep track of the batch number you are on and it will automatically know whether to actually perform the backward pass
and step through the prepared schedulers and optimizers.`),ye=p(),b(S.$$.fragment),ke=p(),Q=s("p"),at=l("This is some test text"),this.h()},l(e){const a=jt('[data-svelte="svelte-1phssyn"]',document.head);d=i(a,"META",{name:!0,content:!0}),a.forEach(t),h=u(e),g=i(e,"H1",{class:!0});var F=n(g);E=i(F,"A",{id:!0,class:!0,href:!0});var ie=n(E);V=i(ie,"SPAN",{});var ot=n(V);v(q.$$.fragment,ot),ot.forEach(t),ie.forEach(t),Ce=u(F),X=i(F,"SPAN",{});var st=n(X);Te=c(st,"Performing gradient accumulation with \u{1F917} Accelerate"),st.forEach(t),F.forEach(t),ne=u(e),H=i(e,"P",{});var it=n(H);Se=c(it,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only performing the backward pass after a certain number of batches have been performed.`),it.forEach(t),le=u(e),M=i(e,"P",{});var nt=n(M);qe=c(nt,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),nt.forEach(t),ce=u(e),R=i(e,"P",{});var lt=n(R);Le=c(lt,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one line of code!`),lt.forEach(t),pe=u(e),B=i(e,"P",{});var ct=n(B);Ne=c(ct,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),ct.forEach(t),ue=u(e),v(L.$$.fragment,e),de=u(e),w=i(e,"H2",{class:!0});var ze=n(w);x=i(ze,"A",{id:!0,class:!0,href:!0});var pt=n(x);Y=i(pt,"SPAN",{});var ut=n(Y);v(N.$$.fragment,ut),ut.forEach(t),pt.forEach(t),De=u(ze),Z=i(ze,"SPAN",{});var dt=n(Z);Ge=c(dt,"Converting it to \u{1F917} Accelerate"),dt.forEach(t),ze.forEach(t),he=u(e),J=i(e,"P",{});var ht=n(J);Ie=c(ht,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),ht.forEach(t),me=u(e),v(D.$$.fragment,e),fe=u(e),v(j.$$.fragment,e),ge=u(e),$=i(e,"H2",{class:!0});var Ee=n($);P=i(Ee,"A",{id:!0,class:!0,href:!0});var mt=n(P);ee=i(mt,"SPAN",{});var ft=n(ee);v(G.$$.fragment,ft),ft.forEach(t),mt.forEach(t),Oe=u(Ee),te=i(Ee,"SPAN",{});var gt=n(te);Fe=c(gt,"Letting \u{1F917} Accelerate handle gradient accumulation"),gt.forEach(t),Ee.forEach(t),_e=u(e),f=i(e,"P",{});var _=n(f);We=c(_,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),ae=i(_,"CODE",{});var _t=n(ae);He=c(_t,"gradient_accumulation_steps"),_t.forEach(t),Me=c(_," parameter to "),re=i(_,"CODE",{});var wt=n(re);Re=c(wt,"Accelerator"),wt.forEach(t),Be=c(_,`, dictating the number
of steps to perform before each call to `),oe=i(_,"CODE",{});var $t=n(oe);Je=c($t,"step()"),$t.forEach(t),Ue=c(_," and "),se=i(_,"CODE",{});var bt=n(se);Ke=c(bt,"backward()"),bt.forEach(t),Qe=c(_,":"),_.forEach(t),we=u(e),v(I.$$.fragment,e),$e=u(e),C=i(e,"P",{});var xe=n(C);Ve=c(xe,"From here you can use the "),U=i(xe,"A",{href:!0});var vt=n(U);Xe=c(vt,"Accelerator.accumulate()"),vt.forEach(t),Ye=c(xe," context manager from inside your training loop to automatically perform the gradient accumulation for you!"),xe.forEach(t),be=u(e),v(O.$$.fragment,e),ve=u(e),T=i(e,"P",{});var je=n(T);Ze=c(je,"As you can see the "),K=i(je,"A",{href:!0});var yt=n(K);et=c(yt,"Accelerator"),yt.forEach(t),tt=c(je,` is able to keep track of the batch number you are on and it will automatically know whether to actually perform the backward pass
and step through the prepared schedulers and optimizers.`),je.forEach(t),ye=u(e),v(S.$$.fragment,e),ke=u(e),Q=i(e,"P",{});var kt=n(Q);at=c(kt,"This is some test text"),kt.forEach(t),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(qt)),m(E,"id","performing-gradient-accumulation-with-accelerate"),m(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(E,"href","#performing-gradient-accumulation-with-accelerate"),m(g,"class","relative group"),m(x,"id","converting-it-to-accelerate"),m(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(x,"href","#converting-it-to-accelerate"),m(w,"class","relative group"),m(P,"id","letting-accelerate-handle-gradient-accumulation"),m(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(P,"href","#letting-accelerate-handle-gradient-accumulation"),m($,"class","relative group"),m(U,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.accumulate"),m(K,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator")},m(e,a){r(document.head,d),o(e,h,a),o(e,g,a),r(g,E),r(E,V),y(q,V,null),r(g,Ce),r(g,X),r(X,Te),o(e,ne,a),o(e,H,a),r(H,Se),o(e,le,a),o(e,M,a),r(M,qe),o(e,ce,a),o(e,R,a),r(R,Le),o(e,pe,a),o(e,B,a),r(B,Ne),o(e,ue,a),y(L,e,a),o(e,de,a),o(e,w,a),r(w,x),r(x,Y),y(N,Y,null),r(w,De),r(w,Z),r(Z,Ge),o(e,he,a),o(e,J,a),r(J,Ie),o(e,me,a),y(D,e,a),o(e,fe,a),y(j,e,a),o(e,ge,a),o(e,$,a),r($,P),r(P,ee),y(G,ee,null),r($,Oe),r($,te),r(te,Fe),o(e,_e,a),o(e,f,a),r(f,We),r(f,ae),r(ae,He),r(f,Me),r(f,re),r(re,Re),r(f,Be),r(f,oe),r(oe,Je),r(f,Ue),r(f,se),r(se,Ke),r(f,Qe),o(e,we,a),y(I,e,a),o(e,$e,a),o(e,C,a),r(C,Ve),r(C,U),r(U,Xe),r(C,Ye),o(e,be,a),y(O,e,a),o(e,ve,a),o(e,T,a),r(T,Ze),r(T,K),r(K,et),r(T,tt),o(e,ye,a),y(S,e,a),o(e,ke,a),o(e,Q,a),r(Q,at),Ae=!0},p(e,[a]){const F={};a&2&&(F.$$scope={dirty:a,ctx:e}),j.$set(F);const ie={};a&2&&(ie.$$scope={dirty:a,ctx:e}),S.$set(ie)},i(e){Ae||(k(q.$$.fragment,e),k(L.$$.fragment,e),k(N.$$.fragment,e),k(D.$$.fragment,e),k(j.$$.fragment,e),k(G.$$.fragment,e),k(I.$$.fragment,e),k(O.$$.fragment,e),k(S.$$.fragment,e),Ae=!0)},o(e){A(q.$$.fragment,e),A(L.$$.fragment,e),A(N.$$.fragment,e),A(D.$$.fragment,e),A(j.$$.fragment,e),A(G.$$.fragment,e),A(I.$$.fragment,e),A(O.$$.fragment,e),A(S.$$.fragment,e),Ae=!1},d(e){t(d),e&&t(h),e&&t(g),z(q),e&&t(ne),e&&t(H),e&&t(le),e&&t(M),e&&t(ce),e&&t(R),e&&t(pe),e&&t(B),e&&t(ue),z(L,e),e&&t(de),e&&t(w),z(N),e&&t(he),e&&t(J),e&&t(me),z(D,e),e&&t(fe),z(j,e),e&&t(ge),e&&t($),z(G),e&&t(_e),e&&t(f),e&&t(we),z(I,e),e&&t($e),e&&t(C),e&&t(be),z(O,e),e&&t(ve),e&&t(T),e&&t(ye),z(S,e),e&&t(ke),e&&t(Q)}}}const qt={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function Lt(W){return Pt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ot extends zt{constructor(d){super();Et(this,d,Lt,St,xt,{})}}export{Ot as default,qt as metadata};
