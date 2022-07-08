import{S as dr,i as fr,s as ur,e as r,k as h,w as u,t as i,M as mr,c as o,d as t,m as d,a as l,x as m,h as n,b as p,G as a,g as c,y as v,L as vr,q as g,o as y,B as _,v as gr}from"../../chunks/vendor-hf-doc-builder.js";import{I as ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ve}from"../../chunks/CodeBlock-hf-doc-builder.js";function yr(Aa){let A,Be,E,x,ge,U,At,ye,Et,Ie,re,kt,Ue,k,N,_e,F,jt,we,Pt,Fe,oe,zt,Ke,le,f,Tt,$e,St,xt,be,Nt,Ot,Ae,Ct,Dt,Ee,Mt,qt,ke,Ht,Lt,Qe,K,We,j,O,je,Q,Bt,Pe,It,Ye,C,Ut,se,Ft,Kt,Ge,W,Je,ie,Qt,Re,P,D,ze,Y,Wt,Te,Yt,Ve,w,Gt,ne,Jt,Rt,Se,Vt,Xt,ce,Zt,ea,Xe,G,Ze,z,M,xe,J,ta,Ne,aa,et,q,ra,pe,oa,la,tt,R,at,b,sa,Oe,ia,na,he,ca,pa,rt,de,V,ha,Ce,da,fa,ot,T,H,De,X,ua,Me,ma,lt,L,va,qe,ga,ya,st,Z,it,fe,_a,nt,S,B,He,ee,wa,Le,$a,ct,ue,ba,pt,te,ht;return U=new ae({}),F=new ae({}),K=new ve({props:{code:`device = 'cuda'
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
    scheduler.step()`}}),Q=new ae({}),W=new ve({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator()`}}),Y=new ae({}),G=new ve({props:{code:`-device = 'cuda'
+device = accelerator.device
model.to(device)`,highlighted:`<span class="hljs-deletion">-device = &#x27;cuda&#x27;</span>
<span class="hljs-addition">+device = accelerator.device</span>
model.to(device)`}}),J=new ae({}),R=new ve({props:{code:`model, optimizer, training_dataloader, scheduler = accelerator.prepare(
    model, optimizer, training_dataloader, scheduler
)`,highlighted:`<span class="hljs-built_in">model,</span> optimizer, training_dataloader, scheduler = accelerator.prepare(
<span class="hljs-built_in">    model,</span> optimizer, training_dataloader, scheduler
)`}}),X=new ae({}),Z=new ve({props:{code:`-    inputs = inputs.to(device)
-    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
-    loss.backward()
+    accelerator.backward(loss)`,highlighted:`<span class="hljs-deletion">-    inputs = inputs.to(device)</span>
<span class="hljs-deletion">-    targets = targets.to(device)</span>
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
<span class="hljs-deletion">-    loss.backward()</span>
<span class="hljs-addition">+    accelerator.backward(loss)</span>`}}),ee=new ae({}),te=new ve({props:{code:`+from accelerate import Accelerator

+accelerator = Accelerator()

-device = 'cuda'
-model.to(device)
+model, optimizer, training_dataloader, scheduler = accelerator.prepare(
+    model, optimizer, training_dataloader, scheduler
+)

for batch in training_dataloader:
    optimizer.zero_grad()
    inputs, targets = batch
-    inputs = inputs.to(device)
-    targets = targets.to(device)
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
-    loss.backward()
+    accelerator.backward(loss)
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
<span class="hljs-deletion">-    inputs = inputs.to(device)</span>
<span class="hljs-deletion">-    targets = targets.to(device)</span>
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
<span class="hljs-deletion">-    loss.backward()</span>
<span class="hljs-addition">+    accelerator.backward(loss)</span>
    optimizer.step()
    scheduler.step()`}}),{c(){A=r("meta"),Be=h(),E=r("h1"),x=r("a"),ge=r("span"),u(U.$$.fragment),At=h(),ye=r("span"),Et=i("Migrating your code to \u{1F917} Accelerate"),Ie=h(),re=r("p"),kt=i(`This tutorial will detail how to easily convert existing PyTorch code into utilizing \u{1F917} Accelerate!
You\u2019ll be able to see that by just changing a few lines of code, \u{1F917} Accelerate can perform its magic and get you on
your way towards running your code on distributed systems with ease!`),Ue=h(),k=r("h2"),N=r("a"),_e=r("span"),u(F.$$.fragment),jt=h(),we=r("span"),Pt=i("The base training loop"),Fe=h(),oe=r("p"),zt=i("To begin, first write out a very basic PyTorch training loop."),Ke=h(),le=r("blockquote"),f=r("p"),Tt=i("Note: We are under the presumpiton that "),$e=r("code"),St=i("training_dataloader"),xt=i(", "),be=r("code"),Nt=i("model"),Ot=i(", "),Ae=r("code"),Ct=i("optimizer"),Dt=i(", "),Ee=r("code"),Mt=i("scheduler"),qt=i(", and "),ke=r("code"),Ht=i("loss_function"),Lt=i(" have been defined beforehand"),Qe=h(),u(K.$$.fragment),We=h(),j=r("h2"),O=r("a"),je=r("span"),u(Q.$$.fragment),Bt=h(),Pe=r("span"),It=i("Add in \u{1F917} Accelerate"),Ye=h(),C=r("p"),Ut=i("To start using \u{1F917} Accelerate, first import and create an "),se=r("a"),Ft=i("Accelerator"),Kt=i(" instance:"),Ge=h(),u(W.$$.fragment),Je=h(),ie=r("p"),Qt=i("This class will be the main force helping you with utilizing everything possible for distributed training!"),Re=h(),P=r("h3"),D=r("a"),ze=r("span"),u(Y.$$.fragment),Wt=h(),Te=r("span"),Yt=i("Setting the right device"),Ve=h(),w=r("p"),Gt=i("The "),ne=r("a"),Jt=i("Accelerator"),Rt=i(` class knows the right device to move any PyTorch object to at any time, so you should
change the definition of `),Se=r("code"),Vt=i("device"),Xt=i(" to come from "),ce=r("a"),Zt=i("Accelerator"),ea=i(":"),Xe=h(),u(G.$$.fragment),Ze=h(),z=r("h3"),M=r("a"),xe=r("span"),u(J.$$.fragment),ta=h(),Ne=r("span"),aa=i("Preparing your objects"),et=h(),q=r("p"),ra=i("Next you need to pass all of the important objects related to training into "),pe=r("a"),oa=i("Accelerator.prepare()"),la=i(`. \u{1F917} Accelerate will
then make sure that everything is setup for the environment you are currently in to start your training:`),tt=h(),u(R.$$.fragment),at=h(),b=r("p"),sa=i("These objects are returned in the same order they were sent in as. If "),Oe=r("code"),ia=i("device_placement=True"),na=i(" is passed into the "),he=r("a"),ca=i("Accelerator"),pa=i(` object (the default),
performing this action will also automatically move your model to the proper device as well.`),rt=h(),de=r("blockquote"),V=r("p"),ha=i("Important: Accelerate will only prepare objects that inherit from their respective PyTorch classes (such as "),Ce=r("code"),da=i("torch.optim.Optimizer"),fa=i(")"),ot=h(),T=r("h3"),H=r("a"),De=r("span"),u(X.$$.fragment),ua=h(),Me=r("span"),ma=i("Modifying the training loop"),lt=h(),L=r("p"),va=i(`Finally, three lines of code need changing in our training loop. \u{1F917} Accelerate\u2019s DataLoader classes will automatically handle the device placement by default,
and the `),qe=r("code"),ga=i("accelerator"),ya=i(" should be used for performing the backward pass:"),st=h(),u(Z.$$.fragment),it=h(),fe=r("p"),_a=i("And with that, your training loop is now ready to use \u{1F917} Accelerate!"),nt=h(),S=r("h2"),B=r("a"),He=r("span"),u(ee.$$.fragment),wa=h(),Le=r("span"),$a=i("Summary of the changes"),ct=h(),ue=r("p"),ba=i("Below is the final overview of all the changes we made earlier:"),pt=h(),u(te.$$.fragment),this.h()},l(e){const s=mr('[data-svelte="svelte-1phssyn"]',document.head);A=o(s,"META",{name:!0,content:!0}),s.forEach(t),Be=d(e),E=o(e,"H1",{class:!0});var dt=l(E);x=o(dt,"A",{id:!0,class:!0,href:!0});var Ea=l(x);ge=o(Ea,"SPAN",{});var ka=l(ge);m(U.$$.fragment,ka),ka.forEach(t),Ea.forEach(t),At=d(dt),ye=o(dt,"SPAN",{});var ja=l(ye);Et=n(ja,"Migrating your code to \u{1F917} Accelerate"),ja.forEach(t),dt.forEach(t),Ie=d(e),re=o(e,"P",{});var Pa=l(re);kt=n(Pa,`This tutorial will detail how to easily convert existing PyTorch code into utilizing \u{1F917} Accelerate!
You\u2019ll be able to see that by just changing a few lines of code, \u{1F917} Accelerate can perform its magic and get you on
your way towards running your code on distributed systems with ease!`),Pa.forEach(t),Ue=d(e),k=o(e,"H2",{class:!0});var ft=l(k);N=o(ft,"A",{id:!0,class:!0,href:!0});var za=l(N);_e=o(za,"SPAN",{});var Ta=l(_e);m(F.$$.fragment,Ta),Ta.forEach(t),za.forEach(t),jt=d(ft),we=o(ft,"SPAN",{});var Sa=l(we);Pt=n(Sa,"The base training loop"),Sa.forEach(t),ft.forEach(t),Fe=d(e),oe=o(e,"P",{});var xa=l(oe);zt=n(xa,"To begin, first write out a very basic PyTorch training loop."),xa.forEach(t),Ke=d(e),le=o(e,"BLOCKQUOTE",{});var Na=l(le);f=o(Na,"P",{});var $=l(f);Tt=n($,"Note: We are under the presumpiton that "),$e=o($,"CODE",{});var Oa=l($e);St=n(Oa,"training_dataloader"),Oa.forEach(t),xt=n($,", "),be=o($,"CODE",{});var Ca=l(be);Nt=n(Ca,"model"),Ca.forEach(t),Ot=n($,", "),Ae=o($,"CODE",{});var Da=l(Ae);Ct=n(Da,"optimizer"),Da.forEach(t),Dt=n($,", "),Ee=o($,"CODE",{});var Ma=l(Ee);Mt=n(Ma,"scheduler"),Ma.forEach(t),qt=n($,", and "),ke=o($,"CODE",{});var qa=l(ke);Ht=n(qa,"loss_function"),qa.forEach(t),Lt=n($," have been defined beforehand"),$.forEach(t),Na.forEach(t),Qe=d(e),m(K.$$.fragment,e),We=d(e),j=o(e,"H2",{class:!0});var ut=l(j);O=o(ut,"A",{id:!0,class:!0,href:!0});var Ha=l(O);je=o(Ha,"SPAN",{});var La=l(je);m(Q.$$.fragment,La),La.forEach(t),Ha.forEach(t),Bt=d(ut),Pe=o(ut,"SPAN",{});var Ba=l(Pe);It=n(Ba,"Add in \u{1F917} Accelerate"),Ba.forEach(t),ut.forEach(t),Ye=d(e),C=o(e,"P",{});var mt=l(C);Ut=n(mt,"To start using \u{1F917} Accelerate, first import and create an "),se=o(mt,"A",{href:!0});var Ia=l(se);Ft=n(Ia,"Accelerator"),Ia.forEach(t),Kt=n(mt," instance:"),mt.forEach(t),Ge=d(e),m(W.$$.fragment,e),Je=d(e),ie=o(e,"P",{});var Ua=l(ie);Qt=n(Ua,"This class will be the main force helping you with utilizing everything possible for distributed training!"),Ua.forEach(t),Re=d(e),P=o(e,"H3",{class:!0});var vt=l(P);D=o(vt,"A",{id:!0,class:!0,href:!0});var Fa=l(D);ze=o(Fa,"SPAN",{});var Ka=l(ze);m(Y.$$.fragment,Ka),Ka.forEach(t),Fa.forEach(t),Wt=d(vt),Te=o(vt,"SPAN",{});var Qa=l(Te);Yt=n(Qa,"Setting the right device"),Qa.forEach(t),vt.forEach(t),Ve=d(e),w=o(e,"P",{});var I=l(w);Gt=n(I,"The "),ne=o(I,"A",{href:!0});var Wa=l(ne);Jt=n(Wa,"Accelerator"),Wa.forEach(t),Rt=n(I,` class knows the right device to move any PyTorch object to at any time, so you should
change the definition of `),Se=o(I,"CODE",{});var Ya=l(Se);Vt=n(Ya,"device"),Ya.forEach(t),Xt=n(I," to come from "),ce=o(I,"A",{href:!0});var Ga=l(ce);Zt=n(Ga,"Accelerator"),Ga.forEach(t),ea=n(I,":"),I.forEach(t),Xe=d(e),m(G.$$.fragment,e),Ze=d(e),z=o(e,"H3",{class:!0});var gt=l(z);M=o(gt,"A",{id:!0,class:!0,href:!0});var Ja=l(M);xe=o(Ja,"SPAN",{});var Ra=l(xe);m(J.$$.fragment,Ra),Ra.forEach(t),Ja.forEach(t),ta=d(gt),Ne=o(gt,"SPAN",{});var Va=l(Ne);aa=n(Va,"Preparing your objects"),Va.forEach(t),gt.forEach(t),et=d(e),q=o(e,"P",{});var yt=l(q);ra=n(yt,"Next you need to pass all of the important objects related to training into "),pe=o(yt,"A",{href:!0});var Xa=l(pe);oa=n(Xa,"Accelerator.prepare()"),Xa.forEach(t),la=n(yt,`. \u{1F917} Accelerate will
then make sure that everything is setup for the environment you are currently in to start your training:`),yt.forEach(t),tt=d(e),m(R.$$.fragment,e),at=d(e),b=o(e,"P",{});var me=l(b);sa=n(me,"These objects are returned in the same order they were sent in as. If "),Oe=o(me,"CODE",{});var Za=l(Oe);ia=n(Za,"device_placement=True"),Za.forEach(t),na=n(me," is passed into the "),he=o(me,"A",{href:!0});var er=l(he);ca=n(er,"Accelerator"),er.forEach(t),pa=n(me,` object (the default),
performing this action will also automatically move your model to the proper device as well.`),me.forEach(t),rt=d(e),de=o(e,"BLOCKQUOTE",{});var tr=l(de);V=o(tr,"P",{});var _t=l(V);ha=n(_t,"Important: Accelerate will only prepare objects that inherit from their respective PyTorch classes (such as "),Ce=o(_t,"CODE",{});var ar=l(Ce);da=n(ar,"torch.optim.Optimizer"),ar.forEach(t),fa=n(_t,")"),_t.forEach(t),tr.forEach(t),ot=d(e),T=o(e,"H3",{class:!0});var wt=l(T);H=o(wt,"A",{id:!0,class:!0,href:!0});var rr=l(H);De=o(rr,"SPAN",{});var or=l(De);m(X.$$.fragment,or),or.forEach(t),rr.forEach(t),ua=d(wt),Me=o(wt,"SPAN",{});var lr=l(Me);ma=n(lr,"Modifying the training loop"),lr.forEach(t),wt.forEach(t),lt=d(e),L=o(e,"P",{});var $t=l(L);va=n($t,`Finally, three lines of code need changing in our training loop. \u{1F917} Accelerate\u2019s DataLoader classes will automatically handle the device placement by default,
and the `),qe=o($t,"CODE",{});var sr=l(qe);ga=n(sr,"accelerator"),sr.forEach(t),ya=n($t," should be used for performing the backward pass:"),$t.forEach(t),st=d(e),m(Z.$$.fragment,e),it=d(e),fe=o(e,"P",{});var ir=l(fe);_a=n(ir,"And with that, your training loop is now ready to use \u{1F917} Accelerate!"),ir.forEach(t),nt=d(e),S=o(e,"H2",{class:!0});var bt=l(S);B=o(bt,"A",{id:!0,class:!0,href:!0});var nr=l(B);He=o(nr,"SPAN",{});var cr=l(He);m(ee.$$.fragment,cr),cr.forEach(t),nr.forEach(t),wa=d(bt),Le=o(bt,"SPAN",{});var pr=l(Le);$a=n(pr,"Summary of the changes"),pr.forEach(t),bt.forEach(t),ct=d(e),ue=o(e,"P",{});var hr=l(ue);ba=n(hr,"Below is the final overview of all the changes we made earlier:"),hr.forEach(t),pt=d(e),m(te.$$.fragment,e),this.h()},h(){p(A,"name","hf:doc:metadata"),p(A,"content",JSON.stringify(_r)),p(x,"id","migrating-your-code-to-accelerate"),p(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(x,"href","#migrating-your-code-to-accelerate"),p(E,"class","relative group"),p(N,"id","the-base-training-loop"),p(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(N,"href","#the-base-training-loop"),p(k,"class","relative group"),p(O,"id","add-in-accelerate"),p(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(O,"href","#add-in-accelerate"),p(j,"class","relative group"),p(se,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),p(D,"id","setting-the-right-device"),p(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(D,"href","#setting-the-right-device"),p(P,"class","relative group"),p(ne,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),p(ce,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),p(M,"id","preparing-your-objects"),p(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(M,"href","#preparing-your-objects"),p(z,"class","relative group"),p(pe,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator.prepare"),p(he,"href","/docs/accelerate/pr_495/en/package_reference/accelerator#accelerate.Accelerator"),p(H,"id","modifying-the-training-loop"),p(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(H,"href","#modifying-the-training-loop"),p(T,"class","relative group"),p(B,"id","summary-of-the-changes"),p(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(B,"href","#summary-of-the-changes"),p(S,"class","relative group")},m(e,s){a(document.head,A),c(e,Be,s),c(e,E,s),a(E,x),a(x,ge),v(U,ge,null),a(E,At),a(E,ye),a(ye,Et),c(e,Ie,s),c(e,re,s),a(re,kt),c(e,Ue,s),c(e,k,s),a(k,N),a(N,_e),v(F,_e,null),a(k,jt),a(k,we),a(we,Pt),c(e,Fe,s),c(e,oe,s),a(oe,zt),c(e,Ke,s),c(e,le,s),a(le,f),a(f,Tt),a(f,$e),a($e,St),a(f,xt),a(f,be),a(be,Nt),a(f,Ot),a(f,Ae),a(Ae,Ct),a(f,Dt),a(f,Ee),a(Ee,Mt),a(f,qt),a(f,ke),a(ke,Ht),a(f,Lt),c(e,Qe,s),v(K,e,s),c(e,We,s),c(e,j,s),a(j,O),a(O,je),v(Q,je,null),a(j,Bt),a(j,Pe),a(Pe,It),c(e,Ye,s),c(e,C,s),a(C,Ut),a(C,se),a(se,Ft),a(C,Kt),c(e,Ge,s),v(W,e,s),c(e,Je,s),c(e,ie,s),a(ie,Qt),c(e,Re,s),c(e,P,s),a(P,D),a(D,ze),v(Y,ze,null),a(P,Wt),a(P,Te),a(Te,Yt),c(e,Ve,s),c(e,w,s),a(w,Gt),a(w,ne),a(ne,Jt),a(w,Rt),a(w,Se),a(Se,Vt),a(w,Xt),a(w,ce),a(ce,Zt),a(w,ea),c(e,Xe,s),v(G,e,s),c(e,Ze,s),c(e,z,s),a(z,M),a(M,xe),v(J,xe,null),a(z,ta),a(z,Ne),a(Ne,aa),c(e,et,s),c(e,q,s),a(q,ra),a(q,pe),a(pe,oa),a(q,la),c(e,tt,s),v(R,e,s),c(e,at,s),c(e,b,s),a(b,sa),a(b,Oe),a(Oe,ia),a(b,na),a(b,he),a(he,ca),a(b,pa),c(e,rt,s),c(e,de,s),a(de,V),a(V,ha),a(V,Ce),a(Ce,da),a(V,fa),c(e,ot,s),c(e,T,s),a(T,H),a(H,De),v(X,De,null),a(T,ua),a(T,Me),a(Me,ma),c(e,lt,s),c(e,L,s),a(L,va),a(L,qe),a(qe,ga),a(L,ya),c(e,st,s),v(Z,e,s),c(e,it,s),c(e,fe,s),a(fe,_a),c(e,nt,s),c(e,S,s),a(S,B),a(B,He),v(ee,He,null),a(S,wa),a(S,Le),a(Le,$a),c(e,ct,s),c(e,ue,s),a(ue,ba),c(e,pt,s),v(te,e,s),ht=!0},p:vr,i(e){ht||(g(U.$$.fragment,e),g(F.$$.fragment,e),g(K.$$.fragment,e),g(Q.$$.fragment,e),g(W.$$.fragment,e),g(Y.$$.fragment,e),g(G.$$.fragment,e),g(J.$$.fragment,e),g(R.$$.fragment,e),g(X.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(te.$$.fragment,e),ht=!0)},o(e){y(U.$$.fragment,e),y(F.$$.fragment,e),y(K.$$.fragment,e),y(Q.$$.fragment,e),y(W.$$.fragment,e),y(Y.$$.fragment,e),y(G.$$.fragment,e),y(J.$$.fragment,e),y(R.$$.fragment,e),y(X.$$.fragment,e),y(Z.$$.fragment,e),y(ee.$$.fragment,e),y(te.$$.fragment,e),ht=!1},d(e){t(A),e&&t(Be),e&&t(E),_(U),e&&t(Ie),e&&t(re),e&&t(Ue),e&&t(k),_(F),e&&t(Fe),e&&t(oe),e&&t(Ke),e&&t(le),e&&t(Qe),_(K,e),e&&t(We),e&&t(j),_(Q),e&&t(Ye),e&&t(C),e&&t(Ge),_(W,e),e&&t(Je),e&&t(ie),e&&t(Re),e&&t(P),_(Y),e&&t(Ve),e&&t(w),e&&t(Xe),_(G,e),e&&t(Ze),e&&t(z),_(J),e&&t(et),e&&t(q),e&&t(tt),_(R,e),e&&t(at),e&&t(b),e&&t(rt),e&&t(de),e&&t(ot),e&&t(T),_(X),e&&t(lt),e&&t(L),e&&t(st),_(Z,e),e&&t(it),e&&t(fe),e&&t(nt),e&&t(S),_(ee),e&&t(ct),e&&t(ue),e&&t(pt),_(te,e)}}}const _r={local:"migrating-your-code-to-accelerate",sections:[{local:"the-base-training-loop",title:"The base training loop"},{local:"add-in-accelerate",sections:[{local:"setting-the-right-device",title:"Setting the right device"},{local:"preparing-your-objects",title:"Preparing your objects"},{local:"modifying-the-training-loop",title:"Modifying the training loop"}],title:"Add in \u{1F917} Accelerate"},{local:"summary-of-the-changes",title:"Summary of the changes"}],title:"Migrating your code to \u{1F917} Accelerate"};function wr(Aa){return gr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Er extends dr{constructor(A){super();fr(this,A,wr,yr,ur,{})}}export{Er as default,_r as metadata};
