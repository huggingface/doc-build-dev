import{S as Gn,i as zn,s as Xn,e as i,k as s,w as _,t as f,M as Jn,c as a,d as n,m as p,a as r,x as h,h as c,b as u,G as o,g as l,y as m,L as Qn,q as d,o as b,B as v,v as Vn}from"../chunks/vendor-hf-doc-builder.js";import{I as We}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ne}from"../chunks/CodeBlock-hf-doc-builder.js";function Yn(vn){let x,ce,$,C,te,A,Fe,oe,Be,ue,B,Ke,_e,w,g,le,R,Ge,ie,ze,he,K,Xe,me,G,Je,de,E,Qe,U,Ve,Ye,be,P,T,ae,L,Ze,re,en,ve,z,nn,xe,X,tn,$e,M,we,J,on,Pe,N,ye,Q,ln,Ce,O,ge,k,an,S,rn,sn,Ee,y,D,se,q,pn,pe,fn,Te,I,cn,j,un,ke,V,fe,_n,De,Y,hn,Ae,H,Re,Z,mn,Ue,ee,dn,Le,W,Me,F,Ne;return A=new We({}),R=new We({}),L=new We({}),M=new ne({props:{code:"pip install oneccl_bind_pt==1.10.0 -f https://software.intel.com/ipex-whl-stable",highlighted:'<span class="hljs-attribute">pip</span> install oneccl_bind_pt==<span class="hljs-number">1</span>.<span class="hljs-number">10</span>.<span class="hljs-number">0</span> -f https://software.intel.com/ipex-whl-stable'}}),N=new ne({props:{code:"pip install oneccl_bind_pt==1.11.0 -f https://software.intel.com/ipex-whl-stable",highlighted:'<span class="hljs-attribute">pip</span> install oneccl_bind_pt==<span class="hljs-number">1</span>.<span class="hljs-number">11</span>.<span class="hljs-number">0</span> -f https://software.intel.com/ipex-whl-stable'}}),O=new ne({props:{code:"pip install oneccl_bind_pt==1.12.0 -f https://software.intel.com/ipex-whl-stable",highlighted:'<span class="hljs-attribute">pip</span> install oneccl_bind_pt==<span class="hljs-number">1</span>.<span class="hljs-number">12</span>.<span class="hljs-number">0</span> -f https://software.intel.com/ipex-whl-stable'}}),q=new We({}),H=new ne({props:{code:` export CCL_WORKER_COUNT=1
 export MASTER_ADDR=127.0.0.1
 mpirun -n 2 -genv OMP_NUM_THREADS=23 \\
 python3 run_qa.py \\
 --model_name_or_path bert-large-uncased \\
 --dataset_name squad \\
 --do_train \\
 --do_eval \\
 --per_device_train_batch_size 12  \\
 --learning_rate 3e-5  \\
 --num_train_epochs 2  \\
 --max_seq_length 384 \\
 --doc_stride 128  \\
 --output_dir /tmp/debug_squad/ \\
 --no_cuda \\
 --xpu_backend ccl`,highlighted:` export CCL_WORKER_COUNT=1
 export MASTER_ADDR=127.0.0.1
 mpirun -n 2 -genv OMP_NUM_THREADS=23 \\
 python3 run_qa.py \\
 --model_name_or_path bert-large-uncased \\
 --dataset_name squad \\
 --do_train \\
 --do_eval \\
 --per_device_train_batch_size 12  \\
 --learning_rate 3e-5  \\
 --num_train_epochs 2  \\
 --max_seq_length 384 \\
 --doc_stride 128  \\
 --output_dir /tmp/debug_squad/ \\
 --no_cuda \\
 --xpu_backend ccl`}}),W=new ne({props:{code:`cat hostfile:
xxx.xxx.xxx.xxx //node0 ip
xxx.xxx.xxx.xxx //node1 ip`,highlighted:`cat hostfile:
xxx.xxx.xxx.xxx //node0 ip
xxx.xxx.xxx.xxx //node1 ip`}}),F=new ne({props:{code:` export CCL_WORKER_COUNT=1
 export MASTER_ADDR=node0 ip
 mpirun -f hostfile -n 4 -ppn 2 \\
 -genv OMP_NUM_THREADS=23 \\
 python3 run_qa.py \\
 --model_name_or_path bert-large-uncased \\
 --dataset_name squad \\
 --do_train \\
 --do_eval \\
 --per_device_train_batch_size 12  \\
 --learning_rate 3e-5  \\
 --num_train_epochs 2  \\
 --max_seq_length 384 \\
 --doc_stride 128  \\
 --output_dir /tmp/debug_squad/ \\
 --no_cuda \\
 --xpu_backend ccl`,highlighted:` export CCL_WORKER_COUNT=1
 export MASTER_ADDR=node0 ip
 mpirun -f hostfile -n 4 -ppn 2 \\
 -genv OMP_NUM_THREADS=23 \\
 python3 run_qa.py \\
 --model_name_or_path bert-large-uncased \\
 --dataset_name squad \\
 --do_train \\
 --do_eval \\
 --per_device_train_batch_size 12  \\
 --learning_rate 3e-5  \\
 --num_train_epochs 2  \\
 --max_seq_length 384 \\
 --doc_stride 128  \\
 --output_dir /tmp/debug_squad/ \\
 --no_cuda \\
 --xpu_backend ccl`}}),{c(){x=i("meta"),ce=s(),$=i("h1"),C=i("a"),te=i("span"),_(A.$$.fragment),Fe=s(),oe=i("span"),Be=f("Efficient Training on Multiple CPUs"),ue=s(),B=i("p"),Ke=f("When training on a single CPU is too slow, we will use multiple CPUs, This guide focuses on PyTorch-based DDP enabling and how to do it Efficiently."),_e=s(),w=i("h2"),g=i("a"),le=i("span"),_(R.$$.fragment),Ge=s(),ie=i("span"),ze=f("Intel\xAE oneCCL Bindings for PyTorch"),he=s(),K=i("p"),Xe=f("Intel\xAE oneCCL (collective communications library) is a library for efficient distributed deep learning training implementing such collectives like allreduce, allgather, alltoall. For more information on oneCCL, please refer to the oneCCL documentation and oneCCL specification."),me=s(),G=i("p"),Je=f("oneccl_bindings_for_pytorch module implements PyTorch C10D ProcessGroup API and can be dynamically loaded as external ProcessGroup and only works on Linux platform now"),de=s(),E=i("p"),Qe=f("Check more detailed information for "),U=i("a"),Ve=f("oneccl_bind_pt"),Ye=f("."),be=s(),P=i("h3"),T=i("a"),ae=i("span"),_(L.$$.fragment),Ze=s(),re=i("span"),en=f("Intel\xAE oneCCL Bindings for PyTorch installation:"),ve=s(),z=i("p"),nn=f("Wheel files are avaiable for the following Python versions:"),xe=s(),X=i("p"),tn=f("For PyTorch-1.10:"),$e=s(),_(M.$$.fragment),we=s(),J=i("p"),on=f("For PyTorch-1.11:"),Pe=s(),_(N.$$.fragment),ye=s(),Q=i("p"),ln=f("For PyTorch-1.12:"),Ce=s(),_(O.$$.fragment),ge=s(),k=i("p"),an=f("Check more approaches for "),S=i("a"),rn=f("oneccl_bind_pt installation"),sn=f("."),Ee=s(),y=i("h3"),D=i("a"),se=i("span"),_(q.$$.fragment),pn=s(),pe=i("span"),fn=f("Usage in Trainer"),Te=f(`

To enable DDP in Trainer with ccl backend, users should add \`--xpu_backend ccl\` in training command arguments.
`),I=i("p"),cn=f("Take an example of the use cases on "),j=i("a"),un=f("Transformers question-answering"),ke=s(),V=i("ul"),fe=i("li"),_n=f("Enable Finetune with DDP enabled on CPUs:"),De=s(),Y=i("p"),hn=f("following command runs 2DDP in one Xeon, with each process running on one socket, you could tun OMP_NUM_THREADS/CCL_WORKER_COUNT for performance"),Ae=s(),_(H.$$.fragment),Re=s(),Z=i("p"),mn=f("following command runs 4DDP in two Xeons (node0, node1, taking node0 as the Master), processes per node is set to 2, with each process running on one socket, you could tun OMP_NUM_THREADS/CCL_WORKER_COUNT for performance"),Ue=s(),ee=i("p"),dn=f("in node0, you need to create a config(hostfile) and pass to mpirun as a argument"),Le=s(),_(W.$$.fragment),Me=s(),_(F.$$.fragment),this.h()},l(e){const t=Jn('[data-svelte="svelte-1phssyn"]',document.head);x=a(t,"META",{name:!0,content:!0}),t.forEach(n),ce=p(e),$=a(e,"H1",{class:!0});var Oe=r($);C=a(Oe,"A",{id:!0,class:!0,href:!0});var xn=r(C);te=a(xn,"SPAN",{});var $n=r(te);h(A.$$.fragment,$n),$n.forEach(n),xn.forEach(n),Fe=p(Oe),oe=a(Oe,"SPAN",{});var wn=r(oe);Be=c(wn,"Efficient Training on Multiple CPUs"),wn.forEach(n),Oe.forEach(n),ue=p(e),B=a(e,"P",{});var Pn=r(B);Ke=c(Pn,"When training on a single CPU is too slow, we will use multiple CPUs, This guide focuses on PyTorch-based DDP enabling and how to do it Efficiently."),Pn.forEach(n),_e=p(e),w=a(e,"H2",{class:!0});var Se=r(w);g=a(Se,"A",{id:!0,class:!0,href:!0});var yn=r(g);le=a(yn,"SPAN",{});var Cn=r(le);h(R.$$.fragment,Cn),Cn.forEach(n),yn.forEach(n),Ge=p(Se),ie=a(Se,"SPAN",{});var gn=r(ie);ze=c(gn,"Intel\xAE oneCCL Bindings for PyTorch"),gn.forEach(n),Se.forEach(n),he=p(e),K=a(e,"P",{});var En=r(K);Xe=c(En,"Intel\xAE oneCCL (collective communications library) is a library for efficient distributed deep learning training implementing such collectives like allreduce, allgather, alltoall. For more information on oneCCL, please refer to the oneCCL documentation and oneCCL specification."),En.forEach(n),me=p(e),G=a(e,"P",{});var Tn=r(G);Je=c(Tn,"oneccl_bindings_for_pytorch module implements PyTorch C10D ProcessGroup API and can be dynamically loaded as external ProcessGroup and only works on Linux platform now"),Tn.forEach(n),de=p(e),E=a(e,"P",{});var qe=r(E);Qe=c(qe,"Check more detailed information for "),U=a(qe,"A",{href:!0,rel:!0});var kn=r(U);Ve=c(kn,"oneccl_bind_pt"),kn.forEach(n),Ye=c(qe,"."),qe.forEach(n),be=p(e),P=a(e,"H3",{class:!0});var Ie=r(P);T=a(Ie,"A",{id:!0,class:!0,href:!0});var Dn=r(T);ae=a(Dn,"SPAN",{});var An=r(ae);h(L.$$.fragment,An),An.forEach(n),Dn.forEach(n),Ze=p(Ie),re=a(Ie,"SPAN",{});var Rn=r(re);en=c(Rn,"Intel\xAE oneCCL Bindings for PyTorch installation:"),Rn.forEach(n),Ie.forEach(n),ve=p(e),z=a(e,"P",{});var Un=r(z);nn=c(Un,"Wheel files are avaiable for the following Python versions:"),Un.forEach(n),xe=p(e),X=a(e,"P",{});var Ln=r(X);tn=c(Ln,"For PyTorch-1.10:"),Ln.forEach(n),$e=p(e),h(M.$$.fragment,e),we=p(e),J=a(e,"P",{});var Mn=r(J);on=c(Mn,"For PyTorch-1.11:"),Mn.forEach(n),Pe=p(e),h(N.$$.fragment,e),ye=p(e),Q=a(e,"P",{});var Nn=r(Q);ln=c(Nn,"For PyTorch-1.12:"),Nn.forEach(n),Ce=p(e),h(O.$$.fragment,e),ge=p(e),k=a(e,"P",{});var je=r(k);an=c(je,"Check more approaches for "),S=a(je,"A",{href:!0,rel:!0});var On=r(S);rn=c(On,"oneccl_bind_pt installation"),On.forEach(n),sn=c(je,"."),je.forEach(n),Ee=p(e),y=a(e,"H3",{class:!0});var He=r(y);D=a(He,"A",{id:!0,class:!0,href:!0});var Sn=r(D);se=a(Sn,"SPAN",{});var qn=r(se);h(q.$$.fragment,qn),qn.forEach(n),Sn.forEach(n),pn=p(He),pe=a(He,"SPAN",{});var In=r(pe);fn=c(In,"Usage in Trainer"),In.forEach(n),He.forEach(n),Te=c(e,`

To enable DDP in Trainer with ccl backend, users should add \`--xpu_backend ccl\` in training command arguments.
`),I=a(e,"P",{});var bn=r(I);cn=c(bn,"Take an example of the use cases on "),j=a(bn,"A",{href:!0,rel:!0});var jn=r(j);un=c(jn,"Transformers question-answering"),jn.forEach(n),bn.forEach(n),ke=p(e),V=a(e,"UL",{});var Hn=r(V);fe=a(Hn,"LI",{});var Wn=r(fe);_n=c(Wn,"Enable Finetune with DDP enabled on CPUs:"),Wn.forEach(n),Hn.forEach(n),De=p(e),Y=a(e,"P",{});var Fn=r(Y);hn=c(Fn,"following command runs 2DDP in one Xeon, with each process running on one socket, you could tun OMP_NUM_THREADS/CCL_WORKER_COUNT for performance"),Fn.forEach(n),Ae=p(e),h(H.$$.fragment,e),Re=p(e),Z=a(e,"P",{});var Bn=r(Z);mn=c(Bn,"following command runs 4DDP in two Xeons (node0, node1, taking node0 as the Master), processes per node is set to 2, with each process running on one socket, you could tun OMP_NUM_THREADS/CCL_WORKER_COUNT for performance"),Bn.forEach(n),Ue=p(e),ee=a(e,"P",{});var Kn=r(ee);dn=c(Kn,"in node0, you need to create a config(hostfile) and pass to mpirun as a argument"),Kn.forEach(n),Le=p(e),h(W.$$.fragment,e),Me=p(e),h(F.$$.fragment,e),this.h()},h(){u(x,"name","hf:doc:metadata"),u(x,"content",JSON.stringify(Zn)),u(C,"id","efficient-training-on-multiple-cpus"),u(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(C,"href","#efficient-training-on-multiple-cpus"),u($,"class","relative group"),u(g,"id","intel-oneccl-bindings-for-pytorch"),u(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(g,"href","#intel-oneccl-bindings-for-pytorch"),u(w,"class","relative group"),u(U,"href","https://github.com/intel/torch-ccl"),u(U,"rel","nofollow"),u(T,"id","intel-oneccl-bindings-for-pytorch-installation"),u(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(T,"href","#intel-oneccl-bindings-for-pytorch-installation"),u(P,"class","relative group"),u(S,"href","https://github.com/intel/torch-ccl"),u(S,"rel","nofollow"),u(D,"id","usage-in-trainer"),u(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(D,"href","#usage-in-trainer"),u(y,"class","relative group"),u(j,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/question-answering"),u(j,"rel","nofollow")},m(e,t){o(document.head,x),l(e,ce,t),l(e,$,t),o($,C),o(C,te),m(A,te,null),o($,Fe),o($,oe),o(oe,Be),l(e,ue,t),l(e,B,t),o(B,Ke),l(e,_e,t),l(e,w,t),o(w,g),o(g,le),m(R,le,null),o(w,Ge),o(w,ie),o(ie,ze),l(e,he,t),l(e,K,t),o(K,Xe),l(e,me,t),l(e,G,t),o(G,Je),l(e,de,t),l(e,E,t),o(E,Qe),o(E,U),o(U,Ve),o(E,Ye),l(e,be,t),l(e,P,t),o(P,T),o(T,ae),m(L,ae,null),o(P,Ze),o(P,re),o(re,en),l(e,ve,t),l(e,z,t),o(z,nn),l(e,xe,t),l(e,X,t),o(X,tn),l(e,$e,t),m(M,e,t),l(e,we,t),l(e,J,t),o(J,on),l(e,Pe,t),m(N,e,t),l(e,ye,t),l(e,Q,t),o(Q,ln),l(e,Ce,t),m(O,e,t),l(e,ge,t),l(e,k,t),o(k,an),o(k,S),o(S,rn),o(k,sn),l(e,Ee,t),l(e,y,t),o(y,D),o(D,se),m(q,se,null),o(y,pn),o(y,pe),o(pe,fn),l(e,Te,t),l(e,I,t),o(I,cn),o(I,j),o(j,un),l(e,ke,t),l(e,V,t),o(V,fe),o(fe,_n),l(e,De,t),l(e,Y,t),o(Y,hn),l(e,Ae,t),m(H,e,t),l(e,Re,t),l(e,Z,t),o(Z,mn),l(e,Ue,t),l(e,ee,t),o(ee,dn),l(e,Le,t),m(W,e,t),l(e,Me,t),m(F,e,t),Ne=!0},p:Qn,i(e){Ne||(d(A.$$.fragment,e),d(R.$$.fragment,e),d(L.$$.fragment,e),d(M.$$.fragment,e),d(N.$$.fragment,e),d(O.$$.fragment,e),d(q.$$.fragment,e),d(H.$$.fragment,e),d(W.$$.fragment,e),d(F.$$.fragment,e),Ne=!0)},o(e){b(A.$$.fragment,e),b(R.$$.fragment,e),b(L.$$.fragment,e),b(M.$$.fragment,e),b(N.$$.fragment,e),b(O.$$.fragment,e),b(q.$$.fragment,e),b(H.$$.fragment,e),b(W.$$.fragment,e),b(F.$$.fragment,e),Ne=!1},d(e){n(x),e&&n(ce),e&&n($),v(A),e&&n(ue),e&&n(B),e&&n(_e),e&&n(w),v(R),e&&n(he),e&&n(K),e&&n(me),e&&n(G),e&&n(de),e&&n(E),e&&n(be),e&&n(P),v(L),e&&n(ve),e&&n(z),e&&n(xe),e&&n(X),e&&n($e),v(M,e),e&&n(we),e&&n(J),e&&n(Pe),v(N,e),e&&n(ye),e&&n(Q),e&&n(Ce),v(O,e),e&&n(ge),e&&n(k),e&&n(Ee),e&&n(y),v(q),e&&n(Te),e&&n(I),e&&n(ke),e&&n(V),e&&n(De),e&&n(Y),e&&n(Ae),v(H,e),e&&n(Re),e&&n(Z),e&&n(Ue),e&&n(ee),e&&n(Le),v(W,e),e&&n(Me),v(F,e)}}}const Zn={local:"efficient-training-on-multiple-cpus",sections:[{local:"intel-oneccl-bindings-for-pytorch",sections:[{local:"intel-oneccl-bindings-for-pytorch-installation",title:"Intel\xAE oneCCL Bindings for PyTorch installation:"},{local:"usage-in-trainer",title:"Usage in Trainer"}],title:"Intel\xAE oneCCL Bindings for PyTorch"}],title:"Efficient Training on Multiple CPUs"};function et(vn){return Vn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class lt extends Gn{constructor(x){super();zn(this,x,et,Yn,Xn,{})}}export{lt as default,Zn as metadata};
