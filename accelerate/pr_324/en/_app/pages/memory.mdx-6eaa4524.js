import{S as We,i as Xe,s as Ye,e as r,k as m,w as re,t as s,M as Ze,c as i,d as t,m as h,a as o,x as ie,h as l,b as d,F as a,g as c,y as oe,L as et,q as ne,o as se,B as le,v as tt}from"../chunks/vendor-4918fc3c.js";import{D as at}from"../chunks/Docstring-02f0cd65.js";import{C as rt}from"../chunks/CodeBlock-99419108.js";import{I as Ge}from"../chunks/IconCopyLink-21d338b1.js";function it(Oe){let p,K,_,v,O,w,ce,T,de,Q,C,me,R,f,M,he,ue,E,pe,_e,V,b,g,U,$,fe,S,be,G,u,x,ve,y,ge,q,ye,ze,I,we,Ee,z,L,$e,xe,j,ke,Ae,W,D,Ce,X,P,k,De,B,Pe,Ne,Y,A,Z;return w=new Ge({}),$=new Ge({}),x=new at({props:{name:"accelerate.memory_utils.find_executable_batch_size",anchor:"accelerate.memory_utils.find_executable_batch_size",parameters:[{name:"function",val:": callable = None"},{name:"starting_batch_size",val:": int = 128"}],parametersDescription:[{anchor:"accelerate.memory_utils.find_executable_batch_size.function",description:`<strong>function</strong> (<code>callable</code>, <em>optional</em>) &#x2014;
A function to wrap`,name:"function"},{anchor:"accelerate.memory_utils.find_executable_batch_size.starting_batch_size",description:`<strong>starting_batch_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The batch size to try and fit into memory`,name:"starting_batch_size"}],source:"https://github.com/huggingface/accelerate/blob/pr_324/src/accelerate/memory_utils.py#L45"}}),A=new rt({props:{code:`def training_function(args):
    accelerator = Accelerator()
    model = get_model()
    model.to(accelerator.device)
    optimizer = get_optimizer()

+   @memory_aware(starting_batch_size=args.batch_size)
+   def inner_training_loop(batch_size):
+       nonlocal model, optimizer # Ensure they can be used in our context
        train_dataloader, eval_dataloader = get_dataloaders(accelerator, batch_size)
        lr_scheduler = get_scheduler(
            optimizer, 
            num_training_steps=len(train_dataloader)*num_epochs
        )
        model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(
            model, optimizer, train_dataloader, eval_dataloader, lr_scheduler
        )
        train(model, optimizer, train_dataloader, lr_scheduler)
        validate(model, eval_dataloader)
+   inner_training_loop()`,highlighted:`def training_function(args):
    accelerator = Accelerator()
    model = get_model()
    model.to(accelerator.device)
    optimizer = get_optimizer()

<span class="hljs-addition">+   @memory_aware(starting_batch_size=args.batch_size)</span>
<span class="hljs-addition">+   def inner_training_loop(batch_size):</span>
<span class="hljs-addition">+       nonlocal model, optimizer # Ensure they can be used in our context</span>
        train_dataloader, eval_dataloader = get_dataloaders(accelerator, batch_size)
        lr_scheduler = get_scheduler(
            optimizer, 
            num_training_steps=len(train_dataloader)*num_epochs
        )
        model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(
            model, optimizer, train_dataloader, eval_dataloader, lr_scheduler
        )
        train(model, optimizer, train_dataloader, lr_scheduler)
        validate(model, eval_dataloader)
<span class="hljs-addition">+   inner_training_loop()</span>`}}),{c(){p=r("meta"),K=m(),_=r("h1"),v=r("a"),O=r("span"),re(w.$$.fragment),ce=m(),T=r("span"),de=s("Memory Utilities"),Q=m(),C=r("p"),me=s(`One of the most frustrating errors when it comes to running training scripts is hitting \u201CCUDA Out-of-Memory\u201D,
as the entire script needs to be restarted, progress is lost, and typically a developer would want to simply
start their script and let it run.`),R=m(),f=r("p"),M=r("code"),he=s("Accelerate"),ue=s(" provides a utility heavily based on "),E=r("a"),pe=s("toma"),_e=s(" to give this capability."),V=m(),b=r("h2"),g=r("a"),U=r("span"),re($.$$.fragment),fe=m(),S=r("span"),be=s("find_executable_batch_size"),G=m(),u=r("div"),re(x.$$.fragment),ve=m(),y=r("p"),ge=s("A basic decorator that will try to execute "),q=r("code"),ye=s("function"),ze=s(`. If it fails from exceptions related to out-of-memory or
CUDNN, the batch size is cut in half and passed to `),I=r("code"),we=s("function"),Ee=m(),z=r("p"),L=r("code"),$e=s("function"),xe=s(" must take in a "),j=r("code"),ke=s("batch_size"),Ae=s(" parameter as its first argument."),W=m(),D=r("p"),Ce=s(`This algorithm operates with exponential decay, decreasing the batch size in half after each failed run on some
training script. To use it, restructure your training function to include an inner function that includes this wrapper,
and build your dataloaders inside it. At a minimum, this could look like 4 new lines of code.`),X=m(),P=r("blockquote"),k=r("p"),De=s("Note: The inner function "),B=r("em"),Pe=s("must"),Ne=s(" take in the batch size as the first parameter, but we do not pass one to it when called. The wrapper handles this for us"),Y=m(),re(A.$$.fragment),this.h()},l(e){const n=Ze('[data-svelte="svelte-1phssyn"]',document.head);p=i(n,"META",{name:!0,content:!0}),n.forEach(t),K=h(e),_=i(e,"H1",{class:!0});var ee=o(_);v=i(ee,"A",{id:!0,class:!0,href:!0});var Te=o(v);O=i(Te,"SPAN",{});var Me=o(O);ie(w.$$.fragment,Me),Me.forEach(t),Te.forEach(t),ce=h(ee),T=i(ee,"SPAN",{});var Ue=o(T);de=l(Ue,"Memory Utilities"),Ue.forEach(t),ee.forEach(t),Q=h(e),C=i(e,"P",{});var Se=o(C);me=l(Se,`One of the most frustrating errors when it comes to running training scripts is hitting \u201CCUDA Out-of-Memory\u201D,
as the entire script needs to be restarted, progress is lost, and typically a developer would want to simply
start their script and let it run.`),Se.forEach(t),R=h(e),f=i(e,"P",{});var H=o(f);M=i(H,"CODE",{});var qe=o(M);he=l(qe,"Accelerate"),qe.forEach(t),ue=l(H," provides a utility heavily based on "),E=i(H,"A",{href:!0,rel:!0});var Ie=o(E);pe=l(Ie,"toma"),Ie.forEach(t),_e=l(H," to give this capability."),H.forEach(t),V=h(e),b=i(e,"H2",{class:!0});var te=o(b);g=i(te,"A",{id:!0,class:!0,href:!0});var Le=o(g);U=i(Le,"SPAN",{});var je=o(U);ie($.$$.fragment,je),je.forEach(t),Le.forEach(t),fe=h(te),S=i(te,"SPAN",{});var Be=o(S);be=l(Be,"find_executable_batch_size"),Be.forEach(t),te.forEach(t),G=h(e),u=i(e,"DIV",{class:!0});var N=o(u);ie(x.$$.fragment,N),ve=h(N),y=i(N,"P",{});var F=o(y);ge=l(F,"A basic decorator that will try to execute "),q=i(F,"CODE",{});var He=o(q);ye=l(He,"function"),He.forEach(t),ze=l(F,`. If it fails from exceptions related to out-of-memory or
CUDNN, the batch size is cut in half and passed to `),I=i(F,"CODE",{});var Fe=o(I);we=l(Fe,"function"),Fe.forEach(t),F.forEach(t),Ee=h(N),z=i(N,"P",{});var J=o(z);L=i(J,"CODE",{});var Je=o(L);$e=l(Je,"function"),Je.forEach(t),xe=l(J," must take in a "),j=i(J,"CODE",{});var Ke=o(j);ke=l(Ke,"batch_size"),Ke.forEach(t),Ae=l(J," parameter as its first argument."),J.forEach(t),N.forEach(t),W=h(e),D=i(e,"P",{});var Qe=o(D);Ce=l(Qe,`This algorithm operates with exponential decay, decreasing the batch size in half after each failed run on some
training script. To use it, restructure your training function to include an inner function that includes this wrapper,
and build your dataloaders inside it. At a minimum, this could look like 4 new lines of code.`),Qe.forEach(t),X=h(e),P=i(e,"BLOCKQUOTE",{});var Re=o(P);k=i(Re,"P",{});var ae=o(k);De=l(ae,"Note: The inner function "),B=i(ae,"EM",{});var Ve=o(B);Pe=l(Ve,"must"),Ve.forEach(t),Ne=l(ae," take in the batch size as the first parameter, but we do not pass one to it when called. The wrapper handles this for us"),ae.forEach(t),Re.forEach(t),Y=h(e),ie(A.$$.fragment,e),this.h()},h(){d(p,"name","hf:doc:metadata"),d(p,"content",JSON.stringify(ot)),d(v,"id","memory-utilities"),d(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(v,"href","#memory-utilities"),d(_,"class","relative group"),d(E,"href","https://github.com/BlackHC/toma"),d(E,"rel","nofollow"),d(g,"id","accelerate.memory_utils.find_executable_batch_size"),d(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(g,"href","#accelerate.memory_utils.find_executable_batch_size"),d(b,"class","relative group"),d(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){a(document.head,p),c(e,K,n),c(e,_,n),a(_,v),a(v,O),oe(w,O,null),a(_,ce),a(_,T),a(T,de),c(e,Q,n),c(e,C,n),a(C,me),c(e,R,n),c(e,f,n),a(f,M),a(M,he),a(f,ue),a(f,E),a(E,pe),a(f,_e),c(e,V,n),c(e,b,n),a(b,g),a(g,U),oe($,U,null),a(b,fe),a(b,S),a(S,be),c(e,G,n),c(e,u,n),oe(x,u,null),a(u,ve),a(u,y),a(y,ge),a(y,q),a(q,ye),a(y,ze),a(y,I),a(I,we),a(u,Ee),a(u,z),a(z,L),a(L,$e),a(z,xe),a(z,j),a(j,ke),a(z,Ae),c(e,W,n),c(e,D,n),a(D,Ce),c(e,X,n),c(e,P,n),a(P,k),a(k,De),a(k,B),a(B,Pe),a(k,Ne),c(e,Y,n),oe(A,e,n),Z=!0},p:et,i(e){Z||(ne(w.$$.fragment,e),ne($.$$.fragment,e),ne(x.$$.fragment,e),ne(A.$$.fragment,e),Z=!0)},o(e){se(w.$$.fragment,e),se($.$$.fragment,e),se(x.$$.fragment,e),se(A.$$.fragment,e),Z=!1},d(e){t(p),e&&t(K),e&&t(_),le(w),e&&t(Q),e&&t(C),e&&t(R),e&&t(f),e&&t(V),e&&t(b),le($),e&&t(G),e&&t(u),le(x),e&&t(W),e&&t(D),e&&t(X),e&&t(P),e&&t(Y),le(A,e)}}}const ot={local:"memory-utilities",sections:[{local:"accelerate.memory_utils.find_executable_batch_size",title:"find_executable_batch_size"}],title:"Memory Utilities"};function nt(Oe){return tt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mt extends We{constructor(p){super();Xe(this,p,nt,it,Ye,{})}}export{mt as default,ot as metadata};
