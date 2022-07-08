import{S as vt,i as yt,s as kt,e as s,k as u,w as b,t as l,M as At,c as i,d as t,m as p,a as n,x as v,h as c,b as m,G as r,g as o,y,q as k,o as A,B as z,v as zt}from"../../chunks/vendor-hf-doc-builder.js";import{T as bt}from"../../chunks/Tip-hf-doc-builder.js";import{I as et}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as je}from"../../chunks/CodeBlock-hf-doc-builder.js";function Et(W){let d;return{c(){d=l("In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},l(h){d=c(h,"In its current state, this code is not going to perform gradient accumulation efficiently due to a process called gradient synchronization. Read more about that in the Concepts tutorial!")},m(h,g){o(h,d,g)},d(h){h&&t(d)}}}function jt(W){let d;return{c(){d=l("Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},l(h){d=c(h,"Currently this method only works with non-streaming datasets (`DataLoaders` that have a length). While support for this is being worked on, you can check out the Gradient Synchronization concept tutorial to see how to do this yourself!")},m(h,g){o(h,d,g)},d(h){h&&t(d)}}}function xt(W){let d,h,g,E,Q,q,xe,V,Pe,ie,H,Ce,ne,M,Se,le,R,Te,ce,B,qe,ue,L,pe,_,j,X,N,Le,Y,Ne,de,J,De,he,D,me,x,fe,$,P,Z,G,Ge,ee,Ie,ge,f,Oe,te,Fe,We,ae,He,Me,re,Re,Be,oe,Je,Ue,we,I,_e,C,Ke,U,Qe,Ve,$e,O,be,S,Xe,K,Ye,Ze,ve,T,ye;return q=new et({}),L=new je({props:{code:`device = 'cuda'
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
        scheduler.step()`}}),N=new et({}),D=new je({props:{code:`from accelerate import Accelerator
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
        scheduler.step()`}}),x=new bt({props:{warning:!0,$$slots:{default:[Et]},$$scope:{ctx:W}}}),G=new et({}),I=new je({props:{code:`from accelerate import Accelerator
-accelerator = Accelerator()
+accelerator = Accelerator(gradient_accumulation_steps=2)`,highlighted:`from accelerate import Accelerator
<span class="hljs-deletion">-accelerator = Accelerator()</span>
<span class="hljs-addition">+accelerator = Accelerator(gradient_accumulation_steps=2)</span>`}}),O=new je({props:{code:`-for index, batch in enumerate(training_dataloader):
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
<span class="hljs-addition">+   scheduler.step()</span>`}}),T=new bt({props:{warning:!0,$$slots:{default:[jt]},$$scope:{ctx:W}}}),{c(){d=s("meta"),h=u(),g=s("h1"),E=s("a"),Q=s("span"),b(q.$$.fragment),xe=u(),V=s("span"),Pe=l("Performing gradient accumulation with \u{1F917} Accelerate"),ie=u(),H=s("p"),Ce=l(`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only performing the backward pass after a certain number of batches have been performed.`),ne=u(),M=s("p"),Se=l(`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),le=u(),R=s("p"),Te=l(`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one line of code!`),ce=u(),B=s("p"),qe=l("This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),ue=u(),b(L.$$.fragment),pe=u(),_=s("h2"),j=s("a"),X=s("span"),b(N.$$.fragment),Le=u(),Y=s("span"),Ne=l("Converting it to \u{1F917} Accelerate"),de=u(),J=s("p"),De=l("First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),he=u(),b(D.$$.fragment),me=u(),b(x.$$.fragment),fe=u(),$=s("h2"),P=s("a"),Z=s("span"),b(G.$$.fragment),Ge=u(),ee=s("span"),Ie=l("Letting \u{1F917} Accelerate handle gradient accumulation"),ge=u(),f=s("p"),Oe=l("All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),te=s("code"),Fe=l("gradient_accumulation_steps"),We=l(" parameter to "),ae=s("code"),He=l("Accelerator"),Me=l(`, dictating the number
of steps to perform before each call to `),re=s("code"),Re=l("step()"),Be=l(" and "),oe=s("code"),Je=l("backward()"),Ue=l(":"),we=u(),b(I.$$.fragment),_e=u(),C=s("p"),Ke=l("From here you can use the "),U=s("a"),Qe=l("Accelerator.accumulate()"),Ve=l(" context manager from inside your training loop to automatically perform the gradient accumulation for you!"),$e=u(),b(O.$$.fragment),be=u(),S=s("p"),Xe=l("As you can see the "),K=s("a"),Ye=l("Accelerator"),Ze=l(` is able to keep track of the batch number you are on and it will automatically know whether to actually perform the backward pass
and step through the prepared schedulers and optimizers.`),ve=u(),b(T.$$.fragment),this.h()},l(e){const a=At('[data-svelte="svelte-1phssyn"]',document.head);d=i(a,"META",{name:!0,content:!0}),a.forEach(t),h=p(e),g=i(e,"H1",{class:!0});var F=n(g);E=i(F,"A",{id:!0,class:!0,href:!0});var se=n(E);Q=i(se,"SPAN",{});var tt=n(Q);v(q.$$.fragment,tt),tt.forEach(t),se.forEach(t),xe=p(F),V=i(F,"SPAN",{});var at=n(V);Pe=c(at,"Performing gradient accumulation with \u{1F917} Accelerate"),at.forEach(t),F.forEach(t),ie=p(e),H=i(e,"P",{});var rt=n(H);Ce=c(rt,`Gradient accumulation is a technique where you can train on bigger batch sizes than
your machine would normally be able to fit into memory. This is done by accumulating gradients over
several batches, and only performing the backward pass after a certain number of batches have been performed.`),rt.forEach(t),ne=p(e),M=i(e,"P",{});var ot=n(M);Se=c(ot,`While technically standard gradient accumulation code would work fine in a distributed setup, it is not the most efficient
method for doing so and you may experience considerable slowdowns!`),ot.forEach(t),le=p(e),R=i(e,"P",{});var st=n(R);Te=c(st,`In this tutorial you will see how to quickly setup gradient accumulation and perform it with the utilties provided in \u{1F917} Accelerate,
which can total to adding just one line of code!`),st.forEach(t),ce=p(e),B=i(e,"P",{});var it=n(B);qe=c(it,"This example will use a very simplistic PyTorch training loop that performs gradient accumulation every two batches:"),it.forEach(t),ue=p(e),v(L.$$.fragment,e),pe=p(e),_=i(e,"H2",{class:!0});var ke=n(_);j=i(ke,"A",{id:!0,class:!0,href:!0});var nt=n(j);X=i(nt,"SPAN",{});var lt=n(X);v(N.$$.fragment,lt),lt.forEach(t),nt.forEach(t),Le=p(ke),Y=i(ke,"SPAN",{});var ct=n(Y);Ne=c(ct,"Converting it to \u{1F917} Accelerate"),ct.forEach(t),ke.forEach(t),de=p(e),J=i(e,"P",{});var ut=n(J);De=c(ut,"First the code shown earlier will be converted to utilize \u{1F917} Accelerate without the special gradient accumulation helper:"),ut.forEach(t),he=p(e),v(D.$$.fragment,e),me=p(e),v(x.$$.fragment,e),fe=p(e),$=i(e,"H2",{class:!0});var Ae=n($);P=i(Ae,"A",{id:!0,class:!0,href:!0});var pt=n(P);Z=i(pt,"SPAN",{});var dt=n(Z);v(G.$$.fragment,dt),dt.forEach(t),pt.forEach(t),Ge=p(Ae),ee=i(Ae,"SPAN",{});var ht=n(ee);Ie=c(ht,"Letting \u{1F917} Accelerate handle gradient accumulation"),ht.forEach(t),Ae.forEach(t),ge=p(e),f=i(e,"P",{});var w=n(f);Oe=c(w,"All that is left now is to let \u{1F917} Accelerate handle the gradient accumulation for us. To do so you should pass in a "),te=i(w,"CODE",{});var mt=n(te);Fe=c(mt,"gradient_accumulation_steps"),mt.forEach(t),We=c(w," parameter to "),ae=i(w,"CODE",{});var ft=n(ae);He=c(ft,"Accelerator"),ft.forEach(t),Me=c(w,`, dictating the number
of steps to perform before each call to `),re=i(w,"CODE",{});var gt=n(re);Re=c(gt,"step()"),gt.forEach(t),Be=c(w," and "),oe=i(w,"CODE",{});var wt=n(oe);Je=c(wt,"backward()"),wt.forEach(t),Ue=c(w,":"),w.forEach(t),we=p(e),v(I.$$.fragment,e),_e=p(e),C=i(e,"P",{});var ze=n(C);Ke=c(ze,"From here you can use the "),U=i(ze,"A",{href:!0});var _t=n(U);Qe=c(_t,"Accelerator.accumulate()"),_t.forEach(t),Ve=c(ze," context manager from inside your training loop to automatically perform the gradient accumulation for you!"),ze.forEach(t),$e=p(e),v(O.$$.fragment,e),be=p(e),S=i(e,"P",{});var Ee=n(S);Xe=c(Ee,"As you can see the "),K=i(Ee,"A",{href:!0});var $t=n(K);Ye=c($t,"Accelerator"),$t.forEach(t),Ze=c(Ee,` is able to keep track of the batch number you are on and it will automatically know whether to actually perform the backward pass
and step through the prepared schedulers and optimizers.`),Ee.forEach(t),ve=p(e),v(T.$$.fragment,e),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(Pt)),m(E,"id","performing-gradient-accumulation-with-accelerate"),m(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(E,"href","#performing-gradient-accumulation-with-accelerate"),m(g,"class","relative group"),m(j,"id","converting-it-to-accelerate"),m(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(j,"href","#converting-it-to-accelerate"),m(_,"class","relative group"),m(P,"id","letting-accelerate-handle-gradient-accumulation"),m(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(P,"href","#letting-accelerate-handle-gradient-accumulation"),m($,"class","relative group"),m(U,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.accumulate"),m(K,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator")},m(e,a){r(document.head,d),o(e,h,a),o(e,g,a),r(g,E),r(E,Q),y(q,Q,null),r(g,xe),r(g,V),r(V,Pe),o(e,ie,a),o(e,H,a),r(H,Ce),o(e,ne,a),o(e,M,a),r(M,Se),o(e,le,a),o(e,R,a),r(R,Te),o(e,ce,a),o(e,B,a),r(B,qe),o(e,ue,a),y(L,e,a),o(e,pe,a),o(e,_,a),r(_,j),r(j,X),y(N,X,null),r(_,Le),r(_,Y),r(Y,Ne),o(e,de,a),o(e,J,a),r(J,De),o(e,he,a),y(D,e,a),o(e,me,a),y(x,e,a),o(e,fe,a),o(e,$,a),r($,P),r(P,Z),y(G,Z,null),r($,Ge),r($,ee),r(ee,Ie),o(e,ge,a),o(e,f,a),r(f,Oe),r(f,te),r(te,Fe),r(f,We),r(f,ae),r(ae,He),r(f,Me),r(f,re),r(re,Re),r(f,Be),r(f,oe),r(oe,Je),r(f,Ue),o(e,we,a),y(I,e,a),o(e,_e,a),o(e,C,a),r(C,Ke),r(C,U),r(U,Qe),r(C,Ve),o(e,$e,a),y(O,e,a),o(e,be,a),o(e,S,a),r(S,Xe),r(S,K),r(K,Ye),r(S,Ze),o(e,ve,a),y(T,e,a),ye=!0},p(e,[a]){const F={};a&2&&(F.$$scope={dirty:a,ctx:e}),x.$set(F);const se={};a&2&&(se.$$scope={dirty:a,ctx:e}),T.$set(se)},i(e){ye||(k(q.$$.fragment,e),k(L.$$.fragment,e),k(N.$$.fragment,e),k(D.$$.fragment,e),k(x.$$.fragment,e),k(G.$$.fragment,e),k(I.$$.fragment,e),k(O.$$.fragment,e),k(T.$$.fragment,e),ye=!0)},o(e){A(q.$$.fragment,e),A(L.$$.fragment,e),A(N.$$.fragment,e),A(D.$$.fragment,e),A(x.$$.fragment,e),A(G.$$.fragment,e),A(I.$$.fragment,e),A(O.$$.fragment,e),A(T.$$.fragment,e),ye=!1},d(e){t(d),e&&t(h),e&&t(g),z(q),e&&t(ie),e&&t(H),e&&t(ne),e&&t(M),e&&t(le),e&&t(R),e&&t(ce),e&&t(B),e&&t(ue),z(L,e),e&&t(pe),e&&t(_),z(N),e&&t(de),e&&t(J),e&&t(he),z(D,e),e&&t(me),z(x,e),e&&t(fe),e&&t($),z(G),e&&t(ge),e&&t(f),e&&t(we),z(I,e),e&&t(_e),e&&t(C),e&&t($e),z(O,e),e&&t(be),e&&t(S),e&&t(ve),z(T,e)}}}const Pt={local:"performing-gradient-accumulation-with-accelerate",sections:[{local:"converting-it-to-accelerate",title:"Converting it to \u{1F917} Accelerate"},{local:"letting-accelerate-handle-gradient-accumulation",title:"Letting \u{1F917} Accelerate handle gradient accumulation"}],title:"Performing gradient accumulation with \u{1F917} Accelerate"};function Ct(W){return zt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nt extends vt{constructor(d){super();yt(this,d,Ct,xt,kt,{})}}export{Nt as default,Pt as metadata};
