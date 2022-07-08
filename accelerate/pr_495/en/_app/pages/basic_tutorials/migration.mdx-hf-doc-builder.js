import{S as Ha,i as Oa,s as Da,e as o,k as h,w as m,t as c,M as Ba,c as s,d as t,m as d,a as i,x as v,h as p,b as n,G as a,g as l,y as g,q as $,o as y,B as w,v as Ia}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ca}from"../../chunks/Tip-hf-doc-builder.js";import{I as re}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ve}from"../../chunks/CodeBlock-hf-doc-builder.js";function La(oe){let f;return{c(){f=c("We are under the presumpiton that `training_dataloader`, `model`, `optimizer`, `scheduler`, and `loss_function` have been defined beforehand")},l(u){f=p(u,"We are under the presumpiton that `training_dataloader`, `model`, `optimizer`, `scheduler`, and `loss_function` have been defined beforehand")},m(u,_){l(u,f,_)},d(u){u&&t(f)}}}function qa(oe){let f;return{c(){f=c("Accelerate will only prepare objects that inherit from their respective PyTorch classes (such as `torch.optim.Optimizer`)")},l(u){f=p(u,"Accelerate will only prepare objects that inherit from their respective PyTorch classes (such as `torch.optim.Optimizer`)")},m(u,_){l(u,f,_)},d(u){u&&t(f)}}}function Fa(oe){let f,u,_,S,ge,W,mt,$e,vt,He,se,gt,Oe,k,x,ye,Y,$t,we,yt,De,ie,wt,Be,N,Ie,G,Le,E,M,_e,J,_t,be,bt,qe,C,At,le,kt,Et,Fe,R,We,ne,jt,Ye,j,H,Ae,U,Pt,ke,zt,Ge,b,Tt,ce,St,xt,Ee,Nt,Mt,pe,Ct,Ht,Je,K,Re,P,O,je,Q,Ot,Pe,Dt,Ue,D,Bt,he,It,Lt,Ke,V,Qe,A,qt,ze,Ft,Wt,de,Yt,Gt,Ve,B,Xe,z,I,Te,X,Jt,Se,Rt,Ze,L,Ut,xe,Kt,Qt,et,Z,tt,fe,Vt,at,T,q,Ne,ee,Xt,Me,Zt,rt,ue,ea,ot,te,st;return W=new re({}),Y=new re({}),N=new Ca({props:{$$slots:{default:[La]},$$scope:{ctx:oe}}}),G=new ve({props:{code:`device = 'cuda'
model.to(device)

for batch in training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss.backward()
    optimizer.step()
    scheduler.step()`,highlighted:`device = <span class="hljs-string">&#x27;cuda&#x27;</span>
model.to(device)

<span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
    inputs = inputs.to(device)
    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    loss.backward()
    optimizer.step()
    scheduler.step()`}}),J=new re({}),R=new ve({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator()`}}),U=new re({}),K=new ve({props:{code:`-device = 'cuda'
+device = accelerator.device
model.to(device)`,highlighted:`<span class="hljs-deletion">-device = &#x27;cuda&#x27;</span>
<span class="hljs-addition">+device = accelerator.device</span>
model.to(device)`}}),Q=new re({}),V=new ve({props:{code:`model, optimizer, training_dataloader, scheduler = accelerator.prepare(
    model, optimizer, training_dataloader, scheduler
)`,highlighted:`<span class="hljs-built_in">model,</span> optimizer, training_dataloader, scheduler = accelerator.prepare(
<span class="hljs-built_in">    model,</span> optimizer, training_dataloader, scheduler
)`}}),B=new Ca({props:{warning:!0,$$slots:{default:[qa]},$$scope:{ctx:oe}}}),X=new re({}),Z=new ve({props:{code:`-   inputs = inputs.to(device)
-   targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
-   loss.backward()
+   accelerator.backward(loss)`,highlighted:`<span class="hljs-deletion">-   inputs = inputs.to(device)</span>
<span class="hljs-deletion">-   targets = targets.to(device)</span>
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
<span class="hljs-deletion">-   loss.backward()</span>
<span class="hljs-addition">+   accelerator.backward(loss)</span>`}}),ee=new re({}),te=new ve({props:{code:`+from accelerate import Accelerator

+accelerator = Accelerator()

-device = 'cuda'
-model.to(device)
+model, optimizer, training_dataloader, scheduler = accelerator.prepare(
+    model, optimizer, training_dataloader, scheduler
+)

for batch in training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
-   inputs = inputs.to(device)
-   targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
-   loss.backward()
+   accelerator.backward(loss)
    optimizer.step()
    scheduler.step()`,highlighted:`<span class="hljs-addition">+from accelerate import Accelerator</span>

<span class="hljs-addition">+accelerator = Accelerator()</span>

<span class="hljs-deletion">-device = &#x27;cuda&#x27;</span>
<span class="hljs-deletion">-model.to(device)</span>
<span class="hljs-addition">+model, optimizer, training_dataloader, scheduler = accelerator.prepare(</span>
<span class="hljs-addition">+    model, optimizer, training_dataloader, scheduler</span>
<span class="hljs-addition">+)</span>

for batch in training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
<span class="hljs-deletion">-   inputs = inputs.to(device)</span>
<span class="hljs-deletion">-   targets = targets.to(device)</span>
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
<span class="hljs-deletion">-   loss.backward()</span>
<span class="hljs-addition">+   accelerator.backward(loss)</span>
    optimizer.step()
    scheduler.step()`}}),{c(){f=o("meta"),u=h(),_=o("h1"),S=o("a"),ge=o("span"),m(W.$$.fragment),mt=h(),$e=o("span"),vt=c("Migrating your code to \u{1F917} Accelerate"),He=h(),se=o("p"),gt=c(`This tutorial will detail how to easily convert existing PyTorch code into utilizing \u{1F917} Accelerate!
You\u2019ll be able to see that by just changing a few lines of code, \u{1F917} Accelerate can perform its magic and get you on
your way towards running your code on distributed systems with ease!`),Oe=h(),k=o("h2"),x=o("a"),ye=o("span"),m(Y.$$.fragment),$t=h(),we=o("span"),yt=c("The base training loop"),De=h(),ie=o("p"),wt=c("To begin, first write out a very basic PyTorch training loop."),Be=h(),m(N.$$.fragment),Ie=h(),m(G.$$.fragment),Le=h(),E=o("h2"),M=o("a"),_e=o("span"),m(J.$$.fragment),_t=h(),be=o("span"),bt=c("Add in \u{1F917} Accelerate"),qe=h(),C=o("p"),At=c("To start using \u{1F917} Accelerate, first import and create an "),le=o("a"),kt=c("Accelerator"),Et=c(" instance:"),Fe=h(),m(R.$$.fragment),We=h(),ne=o("p"),jt=c("This class will be the main force helping you with utilizing everything possible for distributed training!"),Ye=h(),j=o("h3"),H=o("a"),Ae=o("span"),m(U.$$.fragment),Pt=h(),ke=o("span"),zt=c("Setting the right device"),Ge=h(),b=o("p"),Tt=c("The "),ce=o("a"),St=c("Accelerator"),xt=c(` class knows the right device to move any PyTorch object to at any time, so you should
change the definition of `),Ee=o("code"),Nt=c("device"),Mt=c(" to come from "),pe=o("a"),Ct=c("Accelerator"),Ht=c(":"),Je=h(),m(K.$$.fragment),Re=h(),P=o("h3"),O=o("a"),je=o("span"),m(Q.$$.fragment),Ot=h(),Pe=o("span"),Dt=c("Preparing your objects"),Ue=h(),D=o("p"),Bt=c("Next you need to pass all of the important objects related to training into "),he=o("a"),It=c("Accelerator.prepare()"),Lt=c(`. \u{1F917} Accelerate will
then make sure that everything is setup for the environment you are currently in to start your training:`),Ke=h(),m(V.$$.fragment),Qe=h(),A=o("p"),qt=c("These objects are returned in the same order they were sent in as. If "),ze=o("code"),Ft=c("device_placement=True"),Wt=c(" is passed into the "),de=o("a"),Yt=c("Accelerator"),Gt=c(` object (the default),
performing this action will also automatically move your model to the proper device as well.`),Ve=h(),m(B.$$.fragment),Xe=h(),z=o("h3"),I=o("a"),Te=o("span"),m(X.$$.fragment),Jt=h(),Se=o("span"),Rt=c("Modifying the training loop"),Ze=h(),L=o("p"),Ut=c(`Finally, three lines of code need changing in our training loop. \u{1F917} Accelerate\u2019s DataLoader classes will automatically handle the device placement by default,
and the `),xe=o("code"),Kt=c("accelerator"),Qt=c(" should be used for performing the backward pass:"),et=h(),m(Z.$$.fragment),tt=h(),fe=o("p"),Vt=c("And with that, your training loop is now ready to use \u{1F917} Accelerate!"),at=h(),T=o("h2"),q=o("a"),Ne=o("span"),m(ee.$$.fragment),Xt=h(),Me=o("span"),Zt=c("Summary of the changes"),rt=h(),ue=o("p"),ea=c("Below is the final overview of all the changes we made earlier:"),ot=h(),m(te.$$.fragment),this.h()},l(e){const r=Ba('[data-svelte="svelte-1phssyn"]',document.head);f=s(r,"META",{name:!0,content:!0}),r.forEach(t),u=d(e),_=s(e,"H1",{class:!0});var ae=i(_);S=s(ae,"A",{id:!0,class:!0,href:!0});var Ce=i(S);ge=s(Ce,"SPAN",{});var ta=i(ge);v(W.$$.fragment,ta),ta.forEach(t),Ce.forEach(t),mt=d(ae),$e=s(ae,"SPAN",{});var aa=i($e);vt=p(aa,"Migrating your code to \u{1F917} Accelerate"),aa.forEach(t),ae.forEach(t),He=d(e),se=s(e,"P",{});var ra=i(se);gt=p(ra,`This tutorial will detail how to easily convert existing PyTorch code into utilizing \u{1F917} Accelerate!
You\u2019ll be able to see that by just changing a few lines of code, \u{1F917} Accelerate can perform its magic and get you on
your way towards running your code on distributed systems with ease!`),ra.forEach(t),Oe=d(e),k=s(e,"H2",{class:!0});var it=i(k);x=s(it,"A",{id:!0,class:!0,href:!0});var oa=i(x);ye=s(oa,"SPAN",{});var sa=i(ye);v(Y.$$.fragment,sa),sa.forEach(t),oa.forEach(t),$t=d(it),we=s(it,"SPAN",{});var ia=i(we);yt=p(ia,"The base training loop"),ia.forEach(t),it.forEach(t),De=d(e),ie=s(e,"P",{});var la=i(ie);wt=p(la,"To begin, first write out a very basic PyTorch training loop."),la.forEach(t),Be=d(e),v(N.$$.fragment,e),Ie=d(e),v(G.$$.fragment,e),Le=d(e),E=s(e,"H2",{class:!0});var lt=i(E);M=s(lt,"A",{id:!0,class:!0,href:!0});var na=i(M);_e=s(na,"SPAN",{});var ca=i(_e);v(J.$$.fragment,ca),ca.forEach(t),na.forEach(t),_t=d(lt),be=s(lt,"SPAN",{});var pa=i(be);bt=p(pa,"Add in \u{1F917} Accelerate"),pa.forEach(t),lt.forEach(t),qe=d(e),C=s(e,"P",{});var nt=i(C);At=p(nt,"To start using \u{1F917} Accelerate, first import and create an "),le=s(nt,"A",{href:!0});var ha=i(le);kt=p(ha,"Accelerator"),ha.forEach(t),Et=p(nt," instance:"),nt.forEach(t),Fe=d(e),v(R.$$.fragment,e),We=d(e),ne=s(e,"P",{});var da=i(ne);jt=p(da,"This class will be the main force helping you with utilizing everything possible for distributed training!"),da.forEach(t),Ye=d(e),j=s(e,"H3",{class:!0});var ct=i(j);H=s(ct,"A",{id:!0,class:!0,href:!0});var fa=i(H);Ae=s(fa,"SPAN",{});var ua=i(Ae);v(U.$$.fragment,ua),ua.forEach(t),fa.forEach(t),Pt=d(ct),ke=s(ct,"SPAN",{});var ma=i(ke);zt=p(ma,"Setting the right device"),ma.forEach(t),ct.forEach(t),Ge=d(e),b=s(e,"P",{});var F=i(b);Tt=p(F,"The "),ce=s(F,"A",{href:!0});var va=i(ce);St=p(va,"Accelerator"),va.forEach(t),xt=p(F,` class knows the right device to move any PyTorch object to at any time, so you should
change the definition of `),Ee=s(F,"CODE",{});var ga=i(Ee);Nt=p(ga,"device"),ga.forEach(t),Mt=p(F," to come from "),pe=s(F,"A",{href:!0});var $a=i(pe);Ct=p($a,"Accelerator"),$a.forEach(t),Ht=p(F,":"),F.forEach(t),Je=d(e),v(K.$$.fragment,e),Re=d(e),P=s(e,"H3",{class:!0});var pt=i(P);O=s(pt,"A",{id:!0,class:!0,href:!0});var ya=i(O);je=s(ya,"SPAN",{});var wa=i(je);v(Q.$$.fragment,wa),wa.forEach(t),ya.forEach(t),Ot=d(pt),Pe=s(pt,"SPAN",{});var _a=i(Pe);Dt=p(_a,"Preparing your objects"),_a.forEach(t),pt.forEach(t),Ue=d(e),D=s(e,"P",{});var ht=i(D);Bt=p(ht,"Next you need to pass all of the important objects related to training into "),he=s(ht,"A",{href:!0});var ba=i(he);It=p(ba,"Accelerator.prepare()"),ba.forEach(t),Lt=p(ht,`. \u{1F917} Accelerate will
then make sure that everything is setup for the environment you are currently in to start your training:`),ht.forEach(t),Ke=d(e),v(V.$$.fragment,e),Qe=d(e),A=s(e,"P",{});var me=i(A);qt=p(me,"These objects are returned in the same order they were sent in as. If "),ze=s(me,"CODE",{});var Aa=i(ze);Ft=p(Aa,"device_placement=True"),Aa.forEach(t),Wt=p(me," is passed into the "),de=s(me,"A",{href:!0});var ka=i(de);Yt=p(ka,"Accelerator"),ka.forEach(t),Gt=p(me,` object (the default),
performing this action will also automatically move your model to the proper device as well.`),me.forEach(t),Ve=d(e),v(B.$$.fragment,e),Xe=d(e),z=s(e,"H3",{class:!0});var dt=i(z);I=s(dt,"A",{id:!0,class:!0,href:!0});var Ea=i(I);Te=s(Ea,"SPAN",{});var ja=i(Te);v(X.$$.fragment,ja),ja.forEach(t),Ea.forEach(t),Jt=d(dt),Se=s(dt,"SPAN",{});var Pa=i(Se);Rt=p(Pa,"Modifying the training loop"),Pa.forEach(t),dt.forEach(t),Ze=d(e),L=s(e,"P",{});var ft=i(L);Ut=p(ft,`Finally, three lines of code need changing in our training loop. \u{1F917} Accelerate\u2019s DataLoader classes will automatically handle the device placement by default,
and the `),xe=s(ft,"CODE",{});var za=i(xe);Kt=p(za,"accelerator"),za.forEach(t),Qt=p(ft," should be used for performing the backward pass:"),ft.forEach(t),et=d(e),v(Z.$$.fragment,e),tt=d(e),fe=s(e,"P",{});var Ta=i(fe);Vt=p(Ta,"And with that, your training loop is now ready to use \u{1F917} Accelerate!"),Ta.forEach(t),at=d(e),T=s(e,"H2",{class:!0});var ut=i(T);q=s(ut,"A",{id:!0,class:!0,href:!0});var Sa=i(q);Ne=s(Sa,"SPAN",{});var xa=i(Ne);v(ee.$$.fragment,xa),xa.forEach(t),Sa.forEach(t),Xt=d(ut),Me=s(ut,"SPAN",{});var Na=i(Me);Zt=p(Na,"Summary of the changes"),Na.forEach(t),ut.forEach(t),rt=d(e),ue=s(e,"P",{});var Ma=i(ue);ea=p(Ma,"Below is the final overview of all the changes we made earlier:"),Ma.forEach(t),ot=d(e),v(te.$$.fragment,e),this.h()},h(){n(f,"name","hf:doc:metadata"),n(f,"content",JSON.stringify(Wa)),n(S,"id","migrating-your-code-to-accelerate"),n(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(S,"href","#migrating-your-code-to-accelerate"),n(_,"class","relative group"),n(x,"id","the-base-training-loop"),n(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(x,"href","#the-base-training-loop"),n(k,"class","relative group"),n(M,"id","add-in-accelerate"),n(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(M,"href","#add-in-accelerate"),n(E,"class","relative group"),n(le,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),n(H,"id","setting-the-right-device"),n(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(H,"href","#setting-the-right-device"),n(j,"class","relative group"),n(ce,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),n(pe,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),n(O,"id","preparing-your-objects"),n(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(O,"href","#preparing-your-objects"),n(P,"class","relative group"),n(he,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.prepare"),n(de,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),n(I,"id","modifying-the-training-loop"),n(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(I,"href","#modifying-the-training-loop"),n(z,"class","relative group"),n(q,"id","summary-of-the-changes"),n(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),n(q,"href","#summary-of-the-changes"),n(T,"class","relative group")},m(e,r){a(document.head,f),l(e,u,r),l(e,_,r),a(_,S),a(S,ge),g(W,ge,null),a(_,mt),a(_,$e),a($e,vt),l(e,He,r),l(e,se,r),a(se,gt),l(e,Oe,r),l(e,k,r),a(k,x),a(x,ye),g(Y,ye,null),a(k,$t),a(k,we),a(we,yt),l(e,De,r),l(e,ie,r),a(ie,wt),l(e,Be,r),g(N,e,r),l(e,Ie,r),g(G,e,r),l(e,Le,r),l(e,E,r),a(E,M),a(M,_e),g(J,_e,null),a(E,_t),a(E,be),a(be,bt),l(e,qe,r),l(e,C,r),a(C,At),a(C,le),a(le,kt),a(C,Et),l(e,Fe,r),g(R,e,r),l(e,We,r),l(e,ne,r),a(ne,jt),l(e,Ye,r),l(e,j,r),a(j,H),a(H,Ae),g(U,Ae,null),a(j,Pt),a(j,ke),a(ke,zt),l(e,Ge,r),l(e,b,r),a(b,Tt),a(b,ce),a(ce,St),a(b,xt),a(b,Ee),a(Ee,Nt),a(b,Mt),a(b,pe),a(pe,Ct),a(b,Ht),l(e,Je,r),g(K,e,r),l(e,Re,r),l(e,P,r),a(P,O),a(O,je),g(Q,je,null),a(P,Ot),a(P,Pe),a(Pe,Dt),l(e,Ue,r),l(e,D,r),a(D,Bt),a(D,he),a(he,It),a(D,Lt),l(e,Ke,r),g(V,e,r),l(e,Qe,r),l(e,A,r),a(A,qt),a(A,ze),a(ze,Ft),a(A,Wt),a(A,de),a(de,Yt),a(A,Gt),l(e,Ve,r),g(B,e,r),l(e,Xe,r),l(e,z,r),a(z,I),a(I,Te),g(X,Te,null),a(z,Jt),a(z,Se),a(Se,Rt),l(e,Ze,r),l(e,L,r),a(L,Ut),a(L,xe),a(xe,Kt),a(L,Qt),l(e,et,r),g(Z,e,r),l(e,tt,r),l(e,fe,r),a(fe,Vt),l(e,at,r),l(e,T,r),a(T,q),a(q,Ne),g(ee,Ne,null),a(T,Xt),a(T,Me),a(Me,Zt),l(e,rt,r),l(e,ue,r),a(ue,ea),l(e,ot,r),g(te,e,r),st=!0},p(e,[r]){const ae={};r&2&&(ae.$$scope={dirty:r,ctx:e}),N.$set(ae);const Ce={};r&2&&(Ce.$$scope={dirty:r,ctx:e}),B.$set(Ce)},i(e){st||($(W.$$.fragment,e),$(Y.$$.fragment,e),$(N.$$.fragment,e),$(G.$$.fragment,e),$(J.$$.fragment,e),$(R.$$.fragment,e),$(U.$$.fragment,e),$(K.$$.fragment,e),$(Q.$$.fragment,e),$(V.$$.fragment,e),$(B.$$.fragment,e),$(X.$$.fragment,e),$(Z.$$.fragment,e),$(ee.$$.fragment,e),$(te.$$.fragment,e),st=!0)},o(e){y(W.$$.fragment,e),y(Y.$$.fragment,e),y(N.$$.fragment,e),y(G.$$.fragment,e),y(J.$$.fragment,e),y(R.$$.fragment,e),y(U.$$.fragment,e),y(K.$$.fragment,e),y(Q.$$.fragment,e),y(V.$$.fragment,e),y(B.$$.fragment,e),y(X.$$.fragment,e),y(Z.$$.fragment,e),y(ee.$$.fragment,e),y(te.$$.fragment,e),st=!1},d(e){t(f),e&&t(u),e&&t(_),w(W),e&&t(He),e&&t(se),e&&t(Oe),e&&t(k),w(Y),e&&t(De),e&&t(ie),e&&t(Be),w(N,e),e&&t(Ie),w(G,e),e&&t(Le),e&&t(E),w(J),e&&t(qe),e&&t(C),e&&t(Fe),w(R,e),e&&t(We),e&&t(ne),e&&t(Ye),e&&t(j),w(U),e&&t(Ge),e&&t(b),e&&t(Je),w(K,e),e&&t(Re),e&&t(P),w(Q),e&&t(Ue),e&&t(D),e&&t(Ke),w(V,e),e&&t(Qe),e&&t(A),e&&t(Ve),w(B,e),e&&t(Xe),e&&t(z),w(X),e&&t(Ze),e&&t(L),e&&t(et),w(Z,e),e&&t(tt),e&&t(fe),e&&t(at),e&&t(T),w(ee),e&&t(rt),e&&t(ue),e&&t(ot),w(te,e)}}}const Wa={local:"migrating-your-code-to-accelerate",sections:[{local:"the-base-training-loop",title:"The base training loop"},{local:"add-in-accelerate",sections:[{local:"setting-the-right-device",title:"Setting the right device"},{local:"preparing-your-objects",title:"Preparing your objects"},{local:"modifying-the-training-loop",title:"Modifying the training loop"}],title:"Add in \u{1F917} Accelerate"},{local:"summary-of-the-changes",title:"Summary of the changes"}],title:"Migrating your code to \u{1F917} Accelerate"};function Ya(oe){return Ia(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ka extends Ha{constructor(f){super();Oa(this,f,Ya,Fa,Da,{})}}export{Ka as default,Wa as metadata};
