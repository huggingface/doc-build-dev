import{S as Oa,i as Ga,s as Ia,e as n,k as c,w as P,t as o,M as Ba,c as l,d as a,m as h,a as s,x as D,h as r,b as p,G as t,g as d,y as A,L as Na,q as x,o as T,B as j,v as La}from"../../chunks/vendor-hf-doc-builder.js";import{I as et}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as De}from"../../chunks/CodeBlock-hf-doc-builder.js";function Ua(ta){let _,Ae,v,S,oe,L,tt,re,at,xe,k,z,ne,U,ot,le,rt,Te,C,nt,se,lt,st,je,m,it,ie,dt,ct,de,ht,pt,ce,ut,mt,Se,H,ze,O,ft,Q,wt,yt,Ce,q,Oe,$,G,he,M,bt,pe,gt,Ge,f,_t,ue,vt,kt,me,$t,Et,Ie,V,Pt,Be,u,Dt,fe,At,xt,we,Tt,jt,ye,St,zt,be,Ct,Ot,Ne,E,I,ge,Y,Gt,_e,It,Le,w,Bt,ve,Nt,Lt,J,ke,Ut,Ht,Ue,y,qt,$e,Mt,Yt,Ee,Jt,Rt,He,R,qe,b,Ft,Pe,Kt,Qt,W,Vt,Wt,Me,F,Ye,B,Xt,X,Zt,ea,Je,K,Re;return L=new et({}),U=new et({}),H=new De({props:{code:`import torch.nn as nn
from torch.nn.parallel import DistributedDataParallel

model = nn.Linear(10, 10)
ddp_model = DistributedDataParallel(model)`,highlighted:`<span class="hljs-keyword">import</span> torch.nn <span class="hljs-keyword">as</span> nn
<span class="hljs-keyword">from</span> torch.nn.parallel <span class="hljs-keyword">import</span> DistributedDataParallel

model = nn.Linear(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>)
ddp_model = DistributedDataParallel(model)`}}),q=new De({props:{code:`+from accelerate import Accelerator
+accelerator = Accelerator()
import torch.nn as nn
-from torch.nn.parallel import DistributedDataParallel

model = nn.Linear(10,10)
+model = accelerator.prepare(model)`,highlighted:`<span class="hljs-addition">+from accelerate import Accelerator</span>
<span class="hljs-addition">+accelerator = Accelerator()</span>
import torch.nn as nn
<span class="hljs-deletion">-from torch.nn.parallel import DistributedDataParallel</span>

model = nn.Linear(10,10)
<span class="hljs-addition">+model = accelerator.prepare(model)</span>`}}),M=new et({}),Y=new et({}),R=new De({props:{code:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

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
        ddp_model(<span class="hljs-built_in">input</span>).backward()`}}),F=new De({props:{code:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

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
        ddp_model(input).backward()`}}),K=new De({props:{code:`ddp_model, dataloader = accelerator.prepare(model, dataloader)

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
        accelerator.backward(loss)`}}),{c(){_=n("meta"),Ae=c(),v=n("h1"),S=n("a"),oe=n("span"),P(L.$$.fragment),tt=c(),re=n("span"),at=o("Gradient Synchronization"),xe=c(),k=n("h2"),z=n("a"),ne=n("span"),P(U.$$.fragment),ot=c(),le=n("span"),rt=o("Background into PyTorch distributed"),Te=c(),C=n("p"),nt=o(`PyTorch\u2019s distributed module operates by communicating back and forth between all of the GPUs in your system.
This communication takes time, and ensuring all processes know the states of each other happens at particular triggerpoints
when using the `),se=n("code"),lt=o("ddp"),st=o(" module."),je=c(),m=n("p"),it=o("These triggerpoints are added to the PyTorch model, specifically their "),ie=n("code"),dt=o("forward()"),ct=o(" and "),de=n("code"),ht=o("backward()"),pt=o(` methods.
This happens when the model is wrapped with `),ce=n("code"),ut=o("DistributedDataParallel"),mt=o(":"),Se=c(),P(H.$$.fragment),ze=c(),O=n("p"),ft=o("In \u{1F917} Accelerate this conversion happens automatically when calling "),Q=n("a"),wt=o("Accelerator.prepare()"),yt=o(" and passing in your model."),Ce=c(),P(q.$$.fragment),Oe=c(),$=n("h2"),G=n("a"),he=n("span"),P(M.$$.fragment),bt=c(),pe=n("span"),gt=o("The slowdown in gradient accumulation"),Ge=c(),f=n("p"),_t=o("You now understand that PyTorch adds hooks to the "),ue=n("code"),vt=o("forward"),kt=o(" and "),me=n("code"),$t=o("backward"),Et=o(` method of your PyTorch model when
training in a distributed setup. But how does this automatically cause a risk of slowing down your code?`),Ie=c(),V=n("p"),Pt=o(`In DDP (distributed data parallel), the specific order in which processes are performed and ran are expected
at specific points and these must also occur at roughly the same time before moving on.`),Be=c(),u=n("p"),Dt=o("The most direct example is when you update all of the parameters in a model through "),fe=n("code"),At=o(".backward()"),xt=o(`, all instances of the model
need to have updated their gradients collated and updated before moving onto the next batch of data. But when performing
gradient accumulation, you accumulate `),we=n("code"),Tt=o("n"),jt=o(" losses and skipping "),ye=n("code"),St=o(".backward()"),zt=o(" until "),be=n("code"),Ct=o("n"),Ot=o(` batches has been reached. This
can cause a significant slowdown since all the processes need to communicate with them more times than needed. But how
can you avoid this overhead?`),Ne=c(),E=n("h2"),I=n("a"),ge=n("span"),P(Y.$$.fragment),Gt=c(),_e=n("span"),It=o("Solving the slowdown problem"),Le=c(),w=n("p"),Bt=o("Since you are skipping these batches, their gradients do not need to be synchronized until the point where "),ve=n("code"),Nt=o(".backward()"),Lt=o(` is actually called.
PyTorch cannot automagically tell when you need to do this, but they do provide a tool to help through the `),J=n("a"),ke=n("code"),Ut=o("no_sync"),Ht=o(` context manager
that is added to your model after converting it to DDP.`),Ue=c(),y=n("p"),qt=o("Under this context manager, PyTorch will skip synchronizing the gradients when "),$e=n("code"),Mt=o(".backward()"),Yt=o(" is called, and the first call to "),Ee=n("code"),Jt=o(".backward()"),Rt=o(` outside this
context manager will trigger the synchronization. See an example below:`),He=c(),P(R.$$.fragment),qe=c(),b=n("p"),Ft=o(`In \u{1F917} Accelerate to make this an API that can be called no matter the training device (though it may not do anything if you are not in a distributed system!),
`),Pe=n("code"),Kt=o("ddp_model.no_sync"),Qt=o(" gets replaced with "),W=n("a"),Vt=o("Accelerator.no_sync()"),Wt=o(" and operates the same way:"),Me=c(),P(F.$$.fragment),Ye=c(),B=n("p"),Xt=o("As you may expect, the "),X=n("a"),Zt=o("Accelerator.accumulate()"),ea=o(` function wraps around this conditional check by keeping track of the current batch number, leaving you with the final
gradient accumulation API:`),Je=c(),P(K.$$.fragment),this.h()},l(e){const i=Ba('[data-svelte="svelte-1phssyn"]',document.head);_=l(i,"META",{name:!0,content:!0}),i.forEach(a),Ae=h(e),v=l(e,"H1",{class:!0});var Fe=s(v);S=l(Fe,"A",{id:!0,class:!0,href:!0});var aa=s(S);oe=l(aa,"SPAN",{});var oa=s(oe);D(L.$$.fragment,oa),oa.forEach(a),aa.forEach(a),tt=h(Fe),re=l(Fe,"SPAN",{});var ra=s(re);at=r(ra,"Gradient Synchronization"),ra.forEach(a),Fe.forEach(a),xe=h(e),k=l(e,"H2",{class:!0});var Ke=s(k);z=l(Ke,"A",{id:!0,class:!0,href:!0});var na=s(z);ne=l(na,"SPAN",{});var la=s(ne);D(U.$$.fragment,la),la.forEach(a),na.forEach(a),ot=h(Ke),le=l(Ke,"SPAN",{});var sa=s(le);rt=r(sa,"Background into PyTorch distributed"),sa.forEach(a),Ke.forEach(a),Te=h(e),C=l(e,"P",{});var Qe=s(C);nt=r(Qe,`PyTorch\u2019s distributed module operates by communicating back and forth between all of the GPUs in your system.
This communication takes time, and ensuring all processes know the states of each other happens at particular triggerpoints
when using the `),se=l(Qe,"CODE",{});var ia=s(se);lt=r(ia,"ddp"),ia.forEach(a),st=r(Qe," module."),Qe.forEach(a),je=h(e),m=l(e,"P",{});var N=s(m);it=r(N,"These triggerpoints are added to the PyTorch model, specifically their "),ie=l(N,"CODE",{});var da=s(ie);dt=r(da,"forward()"),da.forEach(a),ct=r(N," and "),de=l(N,"CODE",{});var ca=s(de);ht=r(ca,"backward()"),ca.forEach(a),pt=r(N,` methods.
This happens when the model is wrapped with `),ce=l(N,"CODE",{});var ha=s(ce);ut=r(ha,"DistributedDataParallel"),ha.forEach(a),mt=r(N,":"),N.forEach(a),Se=h(e),D(H.$$.fragment,e),ze=h(e),O=l(e,"P",{});var Ve=s(O);ft=r(Ve,"In \u{1F917} Accelerate this conversion happens automatically when calling "),Q=l(Ve,"A",{href:!0});var pa=s(Q);wt=r(pa,"Accelerator.prepare()"),pa.forEach(a),yt=r(Ve," and passing in your model."),Ve.forEach(a),Ce=h(e),D(q.$$.fragment,e),Oe=h(e),$=l(e,"H2",{class:!0});var We=s($);G=l(We,"A",{id:!0,class:!0,href:!0});var ua=s(G);he=l(ua,"SPAN",{});var ma=s(he);D(M.$$.fragment,ma),ma.forEach(a),ua.forEach(a),bt=h(We),pe=l(We,"SPAN",{});var fa=s(pe);gt=r(fa,"The slowdown in gradient accumulation"),fa.forEach(a),We.forEach(a),Ge=h(e),f=l(e,"P",{});var Z=s(f);_t=r(Z,"You now understand that PyTorch adds hooks to the "),ue=l(Z,"CODE",{});var wa=s(ue);vt=r(wa,"forward"),wa.forEach(a),kt=r(Z," and "),me=l(Z,"CODE",{});var ya=s(me);$t=r(ya,"backward"),ya.forEach(a),Et=r(Z,` method of your PyTorch model when
training in a distributed setup. But how does this automatically cause a risk of slowing down your code?`),Z.forEach(a),Ie=h(e),V=l(e,"P",{});var ba=s(V);Pt=r(ba,`In DDP (distributed data parallel), the specific order in which processes are performed and ran are expected
at specific points and these must also occur at roughly the same time before moving on.`),ba.forEach(a),Be=h(e),u=l(e,"P",{});var g=s(u);Dt=r(g,"The most direct example is when you update all of the parameters in a model through "),fe=l(g,"CODE",{});var ga=s(fe);At=r(ga,".backward()"),ga.forEach(a),xt=r(g,`, all instances of the model
need to have updated their gradients collated and updated before moving onto the next batch of data. But when performing
gradient accumulation, you accumulate `),we=l(g,"CODE",{});var _a=s(we);Tt=r(_a,"n"),_a.forEach(a),jt=r(g," losses and skipping "),ye=l(g,"CODE",{});var va=s(ye);St=r(va,".backward()"),va.forEach(a),zt=r(g," until "),be=l(g,"CODE",{});var ka=s(be);Ct=r(ka,"n"),ka.forEach(a),Ot=r(g,` batches has been reached. This
can cause a significant slowdown since all the processes need to communicate with them more times than needed. But how
can you avoid this overhead?`),g.forEach(a),Ne=h(e),E=l(e,"H2",{class:!0});var Xe=s(E);I=l(Xe,"A",{id:!0,class:!0,href:!0});var $a=s(I);ge=l($a,"SPAN",{});var Ea=s(ge);D(Y.$$.fragment,Ea),Ea.forEach(a),$a.forEach(a),Gt=h(Xe),_e=l(Xe,"SPAN",{});var Pa=s(_e);It=r(Pa,"Solving the slowdown problem"),Pa.forEach(a),Xe.forEach(a),Le=h(e),w=l(e,"P",{});var ee=s(w);Bt=r(ee,"Since you are skipping these batches, their gradients do not need to be synchronized until the point where "),ve=l(ee,"CODE",{});var Da=s(ve);Nt=r(Da,".backward()"),Da.forEach(a),Lt=r(ee,` is actually called.
PyTorch cannot automagically tell when you need to do this, but they do provide a tool to help through the `),J=l(ee,"A",{href:!0,rel:!0});var Aa=s(J);ke=l(Aa,"CODE",{});var xa=s(ke);Ut=r(xa,"no_sync"),xa.forEach(a),Aa.forEach(a),Ht=r(ee,` context manager
that is added to your model after converting it to DDP.`),ee.forEach(a),Ue=h(e),y=l(e,"P",{});var te=s(y);qt=r(te,"Under this context manager, PyTorch will skip synchronizing the gradients when "),$e=l(te,"CODE",{});var Ta=s($e);Mt=r(Ta,".backward()"),Ta.forEach(a),Yt=r(te," is called, and the first call to "),Ee=l(te,"CODE",{});var ja=s(Ee);Jt=r(ja,".backward()"),ja.forEach(a),Rt=r(te,` outside this
context manager will trigger the synchronization. See an example below:`),te.forEach(a),He=h(e),D(R.$$.fragment,e),qe=h(e),b=l(e,"P",{});var ae=s(b);Ft=r(ae,`In \u{1F917} Accelerate to make this an API that can be called no matter the training device (though it may not do anything if you are not in a distributed system!),
`),Pe=l(ae,"CODE",{});var Sa=s(Pe);Kt=r(Sa,"ddp_model.no_sync"),Sa.forEach(a),Qt=r(ae," gets replaced with "),W=l(ae,"A",{href:!0});var za=s(W);Vt=r(za,"Accelerator.no_sync()"),za.forEach(a),Wt=r(ae," and operates the same way:"),ae.forEach(a),Me=h(e),D(F.$$.fragment,e),Ye=h(e),B=l(e,"P",{});var Ze=s(B);Xt=r(Ze,"As you may expect, the "),X=l(Ze,"A",{href:!0});var Ca=s(X);Zt=r(Ca,"Accelerator.accumulate()"),Ca.forEach(a),ea=r(Ze,` function wraps around this conditional check by keeping track of the current batch number, leaving you with the final
gradient accumulation API:`),Ze.forEach(a),Je=h(e),D(K.$$.fragment,e),this.h()},h(){p(_,"name","hf:doc:metadata"),p(_,"content",JSON.stringify(Ha)),p(S,"id","gradient-synchronization"),p(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(S,"href","#gradient-synchronization"),p(v,"class","relative group"),p(z,"id","background-into-pytorch-distributed"),p(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(z,"href","#background-into-pytorch-distributed"),p(k,"class","relative group"),p(Q,"href","/docs/accelerate/pr_/en/package_reference/accelerator#accelerate.Accelerator.prepare"),p(G,"id","the-slowdown-in-gradient-accumulation"),p(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(G,"href","#the-slowdown-in-gradient-accumulation"),p($,"class","relative group"),p(I,"id","solving-the-slowdown-problem"),p(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(I,"href","#solving-the-slowdown-problem"),p(E,"class","relative group"),p(J,"href","https://pytorch.org/docs/stable/generated/torch.nn.parallel.DistributedDataParallel.html#torch.nn.parallel.DistributedDataParallel.no_sync"),p(J,"rel","nofollow"),p(W,"href","/docs/accelerate/pr_/en/package_reference/accelerator#accelerate.Accelerator.no_sync"),p(X,"href","/docs/accelerate/pr_/en/package_reference/accelerator#accelerate.Accelerator.accumulate")},m(e,i){t(document.head,_),d(e,Ae,i),d(e,v,i),t(v,S),t(S,oe),A(L,oe,null),t(v,tt),t(v,re),t(re,at),d(e,xe,i),d(e,k,i),t(k,z),t(z,ne),A(U,ne,null),t(k,ot),t(k,le),t(le,rt),d(e,Te,i),d(e,C,i),t(C,nt),t(C,se),t(se,lt),t(C,st),d(e,je,i),d(e,m,i),t(m,it),t(m,ie),t(ie,dt),t(m,ct),t(m,de),t(de,ht),t(m,pt),t(m,ce),t(ce,ut),t(m,mt),d(e,Se,i),A(H,e,i),d(e,ze,i),d(e,O,i),t(O,ft),t(O,Q),t(Q,wt),t(O,yt),d(e,Ce,i),A(q,e,i),d(e,Oe,i),d(e,$,i),t($,G),t(G,he),A(M,he,null),t($,bt),t($,pe),t(pe,gt),d(e,Ge,i),d(e,f,i),t(f,_t),t(f,ue),t(ue,vt),t(f,kt),t(f,me),t(me,$t),t(f,Et),d(e,Ie,i),d(e,V,i),t(V,Pt),d(e,Be,i),d(e,u,i),t(u,Dt),t(u,fe),t(fe,At),t(u,xt),t(u,we),t(we,Tt),t(u,jt),t(u,ye),t(ye,St),t(u,zt),t(u,be),t(be,Ct),t(u,Ot),d(e,Ne,i),d(e,E,i),t(E,I),t(I,ge),A(Y,ge,null),t(E,Gt),t(E,_e),t(_e,It),d(e,Le,i),d(e,w,i),t(w,Bt),t(w,ve),t(ve,Nt),t(w,Lt),t(w,J),t(J,ke),t(ke,Ut),t(w,Ht),d(e,Ue,i),d(e,y,i),t(y,qt),t(y,$e),t($e,Mt),t(y,Yt),t(y,Ee),t(Ee,Jt),t(y,Rt),d(e,He,i),A(R,e,i),d(e,qe,i),d(e,b,i),t(b,Ft),t(b,Pe),t(Pe,Kt),t(b,Qt),t(b,W),t(W,Vt),t(b,Wt),d(e,Me,i),A(F,e,i),d(e,Ye,i),d(e,B,i),t(B,Xt),t(B,X),t(X,Zt),t(B,ea),d(e,Je,i),A(K,e,i),Re=!0},p:Na,i(e){Re||(x(L.$$.fragment,e),x(U.$$.fragment,e),x(H.$$.fragment,e),x(q.$$.fragment,e),x(M.$$.fragment,e),x(Y.$$.fragment,e),x(R.$$.fragment,e),x(F.$$.fragment,e),x(K.$$.fragment,e),Re=!0)},o(e){T(L.$$.fragment,e),T(U.$$.fragment,e),T(H.$$.fragment,e),T(q.$$.fragment,e),T(M.$$.fragment,e),T(Y.$$.fragment,e),T(R.$$.fragment,e),T(F.$$.fragment,e),T(K.$$.fragment,e),Re=!1},d(e){a(_),e&&a(Ae),e&&a(v),j(L),e&&a(xe),e&&a(k),j(U),e&&a(Te),e&&a(C),e&&a(je),e&&a(m),e&&a(Se),j(H,e),e&&a(ze),e&&a(O),e&&a(Ce),j(q,e),e&&a(Oe),e&&a($),j(M),e&&a(Ge),e&&a(f),e&&a(Ie),e&&a(V),e&&a(Be),e&&a(u),e&&a(Ne),e&&a(E),j(Y),e&&a(Le),e&&a(w),e&&a(Ue),e&&a(y),e&&a(He),j(R,e),e&&a(qe),e&&a(b),e&&a(Me),j(F,e),e&&a(Ye),e&&a(B),e&&a(Je),j(K,e)}}}const Ha={local:"gradient-synchronization",sections:[{local:"background-into-pytorch-distributed",title:"Background into PyTorch distributed"},{local:"the-slowdown-in-gradient-accumulation",title:"The slowdown in gradient accumulation"},{local:"solving-the-slowdown-problem",title:"Solving the slowdown problem"}],title:"Gradient Synchronization"};function qa(ta){return La(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ra extends Oa{constructor(_){super();Ga(this,_,qa,Ua,Ia,{})}}export{Ra as default,Ha as metadata};
