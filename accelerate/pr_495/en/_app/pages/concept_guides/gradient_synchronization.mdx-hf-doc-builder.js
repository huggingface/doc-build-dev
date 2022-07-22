import{S as kt,i as $t,s as Et,e as r,k as c,w as z,t as o,M as Pt,c as l,d as t,m as h,a as s,x as S,h as n,b as p,G as a,g as d,y as C,L as Dt,q as O,o as G,B as I,v as At}from"../../chunks/vendor-hf-doc-builder.js";import{I as Ja}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ve}from"../../chunks/CodeBlock-hf-doc-builder.js";function xt(Ra){let g,ke,v,E,ee,L,Fe,ae,Ke,$e,P,Qe,te,Ve,We,Ee,u,Xe,oe,Ze,ea,ne,aa,ta,re,oa,na,Pe,N,De,D,ra,R,la,sa,Ae,B,xe,k,A,le,H,ia,se,da,Te,f,ca,ie,ha,pa,de,ma,ua,je,F,fa,ze,m,wa,ce,ya,ba,he,_a,ga,pe,va,ka,me,$a,Ea,Se,$,x,ue,U,Pa,fe,Da,Ce,w,Aa,we,xa,Ta,q,ye,ja,za,Oe,y,Sa,be,Ca,Oa,_e,Ga,Ia,Ge,M,Ie,b,La,ge,Na,Ba,K,Ha,Ua,Le,Y,Ne,T,qa,Q,Ma,Ya,Be,J,He;return L=new Ja({}),N=new ve({props:{code:`import torch.nn as nn
from torch.nn.parallel import DistributedDataParallel

model = nn.Linear(10, 10)
ddp_model = DistributedDataParallel(model)`,highlighted:`<span class="hljs-keyword">import</span> torch.nn <span class="hljs-keyword">as</span> nn
<span class="hljs-keyword">from</span> torch.nn.parallel <span class="hljs-keyword">import</span> DistributedDataParallel

model = nn.Linear(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>)
ddp_model = DistributedDataParallel(model)`}}),B=new ve({props:{code:`+from accelerate import Accelerator
+accelerator = Accelerator()
import torch.nn as nn
-from torch.nn.parallel import DistributedDataParallel

model = nn.Linear(10,10)
+model = accelerator.prepare(model)`,highlighted:`<span class="hljs-addition">+from accelerate import Accelerator</span>
<span class="hljs-addition">+accelerator = Accelerator()</span>
import torch.nn as nn
<span class="hljs-deletion">-from torch.nn.parallel import DistributedDataParallel</span>

model = nn.Linear(10,10)
<span class="hljs-addition">+model = accelerator.prepare(model)</span>`}}),H=new Ja({}),U=new Ja({}),M=new ve({props:{code:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

for index, batch in enumerate(dataloader):
    input, target = batch
    # Trigger gradient synchronization on the last batch
    if index != (len(dataloader) - 1):
        with ddp_model.no_sync():
            # Gradients only accumulate
            ddp_model(input).backward()
    else:
        # Gradients finally sync
        ddp_model(input).backward()`,highlighted:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

<span class="hljs-keyword">for</span> index, batch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(dataloader):
    <span class="hljs-built_in">input</span>, target = batch
    <span class="hljs-comment"># Trigger gradient synchronization on the last batch</span>
    <span class="hljs-keyword">if</span> index != (<span class="hljs-built_in">len</span>(dataloader) - <span class="hljs-number">1</span>):
        <span class="hljs-keyword">with</span> ddp_model.no_sync():
            <span class="hljs-comment"># Gradients only accumulate</span>
            ddp_model(<span class="hljs-built_in">input</span>).backward()
    <span class="hljs-keyword">else</span>:
        <span class="hljs-comment"># Gradients finally sync</span>
        ddp_model(<span class="hljs-built_in">input</span>).backward()`}}),Y=new ve({props:{code:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

for index, batch in enumerate(dataloader):
    input, target = batch
    # Trigger gradient synchronization on the last batch
    if index != (len(dataloader)-1):
-       with ddp_model.no_sync():
+       with accelerator.no_sync(model):
            # Gradients only accumulate
            ddp_model(input).backward()
    else:
        # Gradients finally sync
        ddp_model(input).backward()`,highlighted:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

for index, batch in enumerate(dataloader):
    input, target = batch
    # Trigger gradient synchronization on the last batch
    if index != (len(dataloader)-1):
<span class="hljs-deletion">-       with ddp_model.no_sync():</span>
<span class="hljs-addition">+       with accelerator.no_sync(model):</span>
            # Gradients only accumulate
            ddp_model(input).backward()
    else:
        # Gradients finally sync
        ddp_model(input).backward()`}}),J=new ve({props:{code:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

for batch in dataloader:
    with accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)
        loss = loss_function(outputs, targets)
        accelerator.backward(loss)`,highlighted:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> dataloader:
    <span class="hljs-keyword">with</span> accelerator.accumulate(model):
        optimizer.zero_grad()
        inputs, targets = batch
        outputs = model(inputs)
        loss = loss_function(outputs, targets)
        accelerator.backward(loss)`}}),{c(){g=r("meta"),ke=c(),v=r("h1"),E=r("a"),ee=r("span"),z(L.$$.fragment),Fe=c(),ae=r("span"),Ke=o("Gradient Synchronization"),$e=c(),P=r("p"),Qe=o(`PyTorch\u2019s distributed module operates by communicating back and forth between all of the GPUs in your system.
This communication takes time, and ensuring all processes know the states of each other happens at particular triggerpoints
when using the `),te=r("code"),Ve=o("ddp"),We=o(" module."),Ee=c(),u=r("p"),Xe=o("These triggerpoints are added to the PyTorch model, specifically their "),oe=r("code"),Ze=o("forward()"),ea=o(" and "),ne=r("code"),aa=o("backward()"),ta=o(` methods.
This happens when the model is wrapped with `),re=r("code"),oa=o("DistributedDataParallel"),na=o(":"),Pe=c(),z(N.$$.fragment),De=c(),D=r("p"),ra=o("In \u{1F917} Accelerate this conversion happens automatically when calling "),R=r("a"),la=o("Accelerator.prepare()"),sa=o(" and passing in your model."),Ae=c(),z(B.$$.fragment),xe=c(),k=r("h2"),A=r("a"),le=r("span"),z(H.$$.fragment),ia=c(),se=r("span"),da=o("The slowdown in gradient accumulation"),Te=c(),f=r("p"),ca=o("You now understand that PyTorch adds hooks to the "),ie=r("code"),ha=o("forward"),pa=o(" and "),de=r("code"),ma=o("backward"),ua=o(` method of your PyTorch model when
training in a distributed setup. But how does this risk slowing down your code?`),je=c(),F=r("p"),fa=o(`In DDP (distributed data parallel), the specific order in which processes are performed and ran are expected
at specific points and these must also occur at roughly the same time before moving on.`),ze=c(),m=r("p"),wa=o("The most direct example is when you update all of the parameters in a model through "),ce=r("code"),ya=o(".backward()"),ba=o(`. All instances of the model
need to have updated their gradients, collated, and updated again before moving onto the next batch of data. But when performing
gradient accumulation, you accumulate `),he=r("code"),_a=o("n"),ga=o(" losses and skip "),pe=r("code"),va=o(".backward()"),ka=o(" until "),me=r("code"),$a=o("n"),Ea=o(` batches have been reached. This
can cause a significant slowdown since all the processes need to communicate with them more times than needed. How
can you avoid this overhead?`),Se=c(),$=r("h2"),x=r("a"),ue=r("span"),z(U.$$.fragment),Pa=c(),fe=r("span"),Da=o("Solving the slowdown problem"),Ce=c(),w=r("p"),Aa=o("Since you are skipping these batches, their gradients do not need to be synchronized until the point where "),we=r("code"),xa=o(".backward()"),Ta=o(` is actually called.
PyTorch cannot automagically tell when you need to do this, but they do provide a tool to help through the `),q=r("a"),ye=r("code"),ja=o("no_sync"),za=o(` context manager
that is added to your model after converting it to DDP.`),Oe=c(),y=r("p"),Sa=o("Under this context manager, PyTorch will skip synchronizing the gradients when "),be=r("code"),Ca=o(".backward()"),Oa=o(" is called, and the first call to "),_e=r("code"),Ga=o(".backward()"),Ia=o(` outside this
context manager will trigger the synchronization. See an example below:`),Ge=c(),z(M.$$.fragment),Ie=c(),b=r("p"),La=o(`In \u{1F917} Accelerate to make this an API that can be called no matter the training device (though it may not do anything if you are not in a distributed system!),
`),ge=r("code"),Na=o("ddp_model.no_sync"),Ba=o(" gets replaced with "),K=r("a"),Ha=o("Accelerator.no_sync()"),Ua=o(" and operates the same way:"),Le=c(),z(Y.$$.fragment),Ne=c(),T=r("p"),qa=o("As you may expect, the "),Q=r("a"),Ma=o("Accelerator.accumulate()"),Ya=o(` function wraps around this conditional check by keeping track of the current batch number, leaving you with the final
gradient accumulation API:`),Be=c(),z(J.$$.fragment),this.h()},l(e){const i=Pt('[data-svelte="svelte-1phssyn"]',document.head);g=l(i,"META",{name:!0,content:!0}),i.forEach(t),ke=h(e),v=l(e,"H1",{class:!0});var Ue=s(v);E=l(Ue,"A",{id:!0,class:!0,href:!0});var Fa=s(E);ee=l(Fa,"SPAN",{});var Ka=s(ee);S(L.$$.fragment,Ka),Ka.forEach(t),Fa.forEach(t),Fe=h(Ue),ae=l(Ue,"SPAN",{});var Qa=s(ae);Ke=n(Qa,"Gradient Synchronization"),Qa.forEach(t),Ue.forEach(t),$e=h(e),P=l(e,"P",{});var qe=s(P);Qe=n(qe,`PyTorch\u2019s distributed module operates by communicating back and forth between all of the GPUs in your system.
This communication takes time, and ensuring all processes know the states of each other happens at particular triggerpoints
when using the `),te=l(qe,"CODE",{});var Va=s(te);Ve=n(Va,"ddp"),Va.forEach(t),We=n(qe," module."),qe.forEach(t),Ee=h(e),u=l(e,"P",{});var j=s(u);Xe=n(j,"These triggerpoints are added to the PyTorch model, specifically their "),oe=l(j,"CODE",{});var Wa=s(oe);Ze=n(Wa,"forward()"),Wa.forEach(t),ea=n(j," and "),ne=l(j,"CODE",{});var Xa=s(ne);aa=n(Xa,"backward()"),Xa.forEach(t),ta=n(j,` methods.
This happens when the model is wrapped with `),re=l(j,"CODE",{});var Za=s(re);oa=n(Za,"DistributedDataParallel"),Za.forEach(t),na=n(j,":"),j.forEach(t),Pe=h(e),S(N.$$.fragment,e),De=h(e),D=l(e,"P",{});var Me=s(D);ra=n(Me,"In \u{1F917} Accelerate this conversion happens automatically when calling "),R=l(Me,"A",{href:!0});var et=s(R);la=n(et,"Accelerator.prepare()"),et.forEach(t),sa=n(Me," and passing in your model."),Me.forEach(t),Ae=h(e),S(B.$$.fragment,e),xe=h(e),k=l(e,"H2",{class:!0});var Ye=s(k);A=l(Ye,"A",{id:!0,class:!0,href:!0});var at=s(A);le=l(at,"SPAN",{});var tt=s(le);S(H.$$.fragment,tt),tt.forEach(t),at.forEach(t),ia=h(Ye),se=l(Ye,"SPAN",{});var ot=s(se);da=n(ot,"The slowdown in gradient accumulation"),ot.forEach(t),Ye.forEach(t),Te=h(e),f=l(e,"P",{});var V=s(f);ca=n(V,"You now understand that PyTorch adds hooks to the "),ie=l(V,"CODE",{});var nt=s(ie);ha=n(nt,"forward"),nt.forEach(t),pa=n(V," and "),de=l(V,"CODE",{});var rt=s(de);ma=n(rt,"backward"),rt.forEach(t),ua=n(V,` method of your PyTorch model when
training in a distributed setup. But how does this risk slowing down your code?`),V.forEach(t),je=h(e),F=l(e,"P",{});var lt=s(F);fa=n(lt,`In DDP (distributed data parallel), the specific order in which processes are performed and ran are expected
at specific points and these must also occur at roughly the same time before moving on.`),lt.forEach(t),ze=h(e),m=l(e,"P",{});var _=s(m);wa=n(_,"The most direct example is when you update all of the parameters in a model through "),ce=l(_,"CODE",{});var st=s(ce);ya=n(st,".backward()"),st.forEach(t),ba=n(_,`. All instances of the model
need to have updated their gradients, collated, and updated again before moving onto the next batch of data. But when performing
gradient accumulation, you accumulate `),he=l(_,"CODE",{});var it=s(he);_a=n(it,"n"),it.forEach(t),ga=n(_," losses and skip "),pe=l(_,"CODE",{});var dt=s(pe);va=n(dt,".backward()"),dt.forEach(t),ka=n(_," until "),me=l(_,"CODE",{});var ct=s(me);$a=n(ct,"n"),ct.forEach(t),Ea=n(_,` batches have been reached. This
can cause a significant slowdown since all the processes need to communicate with them more times than needed. How
can you avoid this overhead?`),_.forEach(t),Se=h(e),$=l(e,"H2",{class:!0});var Je=s($);x=l(Je,"A",{id:!0,class:!0,href:!0});var ht=s(x);ue=l(ht,"SPAN",{});var pt=s(ue);S(U.$$.fragment,pt),pt.forEach(t),ht.forEach(t),Pa=h(Je),fe=l(Je,"SPAN",{});var mt=s(fe);Da=n(mt,"Solving the slowdown problem"),mt.forEach(t),Je.forEach(t),Ce=h(e),w=l(e,"P",{});var W=s(w);Aa=n(W,"Since you are skipping these batches, their gradients do not need to be synchronized until the point where "),we=l(W,"CODE",{});var ut=s(we);xa=n(ut,".backward()"),ut.forEach(t),Ta=n(W,` is actually called.
PyTorch cannot automagically tell when you need to do this, but they do provide a tool to help through the `),q=l(W,"A",{href:!0,rel:!0});var ft=s(q);ye=l(ft,"CODE",{});var wt=s(ye);ja=n(wt,"no_sync"),wt.forEach(t),ft.forEach(t),za=n(W,` context manager
that is added to your model after converting it to DDP.`),W.forEach(t),Oe=h(e),y=l(e,"P",{});var X=s(y);Sa=n(X,"Under this context manager, PyTorch will skip synchronizing the gradients when "),be=l(X,"CODE",{});var yt=s(be);Ca=n(yt,".backward()"),yt.forEach(t),Oa=n(X," is called, and the first call to "),_e=l(X,"CODE",{});var bt=s(_e);Ga=n(bt,".backward()"),bt.forEach(t),Ia=n(X,` outside this
context manager will trigger the synchronization. See an example below:`),X.forEach(t),Ge=h(e),S(M.$$.fragment,e),Ie=h(e),b=l(e,"P",{});var Z=s(b);La=n(Z,`In \u{1F917} Accelerate to make this an API that can be called no matter the training device (though it may not do anything if you are not in a distributed system!),
`),ge=l(Z,"CODE",{});var _t=s(ge);Na=n(_t,"ddp_model.no_sync"),_t.forEach(t),Ba=n(Z," gets replaced with "),K=l(Z,"A",{href:!0});var gt=s(K);Ha=n(gt,"Accelerator.no_sync()"),gt.forEach(t),Ua=n(Z," and operates the same way:"),Z.forEach(t),Le=h(e),S(Y.$$.fragment,e),Ne=h(e),T=l(e,"P",{});var Re=s(T);qa=n(Re,"As you may expect, the "),Q=l(Re,"A",{href:!0});var vt=s(Q);Ma=n(vt,"Accelerator.accumulate()"),vt.forEach(t),Ya=n(Re,` function wraps around this conditional check by keeping track of the current batch number, leaving you with the final
gradient accumulation API:`),Re.forEach(t),Be=h(e),S(J.$$.fragment,e),this.h()},h(){p(g,"name","hf:doc:metadata"),p(g,"content",JSON.stringify(Tt)),p(E,"id","gradient-synchronization"),p(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(E,"href","#gradient-synchronization"),p(v,"class","relative group"),p(R,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.prepare"),p(A,"id","the-slowdown-in-gradient-accumulation"),p(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(A,"href","#the-slowdown-in-gradient-accumulation"),p(k,"class","relative group"),p(x,"id","solving-the-slowdown-problem"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#solving-the-slowdown-problem"),p($,"class","relative group"),p(q,"href","https://pytorch.org/docs/stable/generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel.no_sync"),p(q,"rel","nofollow"),p(K,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.no_sync"),p(Q,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.accumulate")},m(e,i){a(document.head,g),d(e,ke,i),d(e,v,i),a(v,E),a(E,ee),C(L,ee,null),a(v,Fe),a(v,ae),a(ae,Ke),d(e,$e,i),d(e,P,i),a(P,Qe),a(P,te),a(te,Ve),a(P,We),d(e,Ee,i),d(e,u,i),a(u,Xe),a(u,oe),a(oe,Ze),a(u,ea),a(u,ne),a(ne,aa),a(u,ta),a(u,re),a(re,oa),a(u,na),d(e,Pe,i),C(N,e,i),d(e,De,i),d(e,D,i),a(D,ra),a(D,R),a(R,la),a(D,sa),d(e,Ae,i),C(B,e,i),d(e,xe,i),d(e,k,i),a(k,A),a(A,le),C(H,le,null),a(k,ia),a(k,se),a(se,da),d(e,Te,i),d(e,f,i),a(f,ca),a(f,ie),a(ie,ha),a(f,pa),a(f,de),a(de,ma),a(f,ua),d(e,je,i),d(e,F,i),a(F,fa),d(e,ze,i),d(e,m,i),a(m,wa),a(m,ce),a(ce,ya),a(m,ba),a(m,he),a(he,_a),a(m,ga),a(m,pe),a(pe,va),a(m,ka),a(m,me),a(me,$a),a(m,Ea),d(e,Se,i),d(e,$,i),a($,x),a(x,ue),C(U,ue,null),a($,Pa),a($,fe),a(fe,Da),d(e,Ce,i),d(e,w,i),a(w,Aa),a(w,we),a(we,xa),a(w,Ta),a(w,q),a(q,ye),a(ye,ja),a(w,za),d(e,Oe,i),d(e,y,i),a(y,Sa),a(y,be),a(be,Ca),a(y,Oa),a(y,_e),a(_e,Ga),a(y,Ia),d(e,Ge,i),C(M,e,i),d(e,Ie,i),d(e,b,i),a(b,La),a(b,ge),a(ge,Na),a(b,Ba),a(b,K),a(K,Ha),a(b,Ua),d(e,Le,i),C(Y,e,i),d(e,Ne,i),d(e,T,i),a(T,qa),a(T,Q),a(Q,Ma),a(T,Ya),d(e,Be,i),C(J,e,i),He=!0},p:Dt,i(e){He||(O(L.$$.fragment,e),O(N.$$.fragment,e),O(B.$$.fragment,e),O(H.$$.fragment,e),O(U.$$.fragment,e),O(M.$$.fragment,e),O(Y.$$.fragment,e),O(J.$$.fragment,e),He=!0)},o(e){G(L.$$.fragment,e),G(N.$$.fragment,e),G(B.$$.fragment,e),G(H.$$.fragment,e),G(U.$$.fragment,e),G(M.$$.fragment,e),G(Y.$$.fragment,e),G(J.$$.fragment,e),He=!1},d(e){t(g),e&&t(ke),e&&t(v),I(L),e&&t($e),e&&t(P),e&&t(Ee),e&&t(u),e&&t(Pe),I(N,e),e&&t(De),e&&t(D),e&&t(Ae),I(B,e),e&&t(xe),e&&t(k),I(H),e&&t(Te),e&&t(f),e&&t(je),e&&t(F),e&&t(ze),e&&t(m),e&&t(Se),e&&t($),I(U),e&&t(Ce),e&&t(w),e&&t(Oe),e&&t(y),e&&t(Ge),I(M,e),e&&t(Ie),e&&t(b),e&&t(Le),I(Y,e),e&&t(Ne),e&&t(T),e&&t(Be),I(J,e)}}}const Tt={local:"gradient-synchronization",sections:[{local:"the-slowdown-in-gradient-accumulation",title:"The slowdown in gradient accumulation"},{local:"solving-the-slowdown-problem",title:"Solving the slowdown problem"}],title:"Gradient Synchronization"};function jt(Ra){return At(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ot extends kt{constructor(g){super();$t(this,g,jt,xt,Et,{})}}export{Ot as default,Tt as metadata};
