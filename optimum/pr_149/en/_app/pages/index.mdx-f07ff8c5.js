import{S as _o,i as Eo,s as yo,e as a,k as f,w as et,t as n,M as $o,c as o,d as r,m as p,a as l,x as rt,h as s,b as i,F as t,g as m,y as at,L as bo,q as ot,o as lt,B as it,v as To}from"../chunks/vendor-4918fc3c.js";import{I as Me}from"../chunks/IconCopyLink-21d338b1.js";import{C as ma}from"../chunks/CodeBlock-99419108.js";function Ao(ca){let v,se,g,P,Ft,H,Be,Gt,Xe,fe,nt,Fe,pe,st,Ge,he,w,N,Wt,R,We,Yt,Ye,me,ft,je,ce,pt,Je,de,O,L,Q,Ke,Ve,U,Ze,tr,jt,er,ue,_,k,Jt,q,rr,Kt,ar,ve,ht,or,ge,d,lr,M,ir,nr,B,sr,fr,we,D,Vt,E,mt,pr,hr,ct,mr,cr,dt,dr,ur,c,y,ut,vr,gr,vt,wr,_r,gt,Er,yr,$,wt,$r,br,_t,Tr,Ar,Et,Ir,Pr,b,yt,Nr,Or,$t,kr,Dr,bt,xr,zr,T,Tt,Cr,Sr,At,Hr,Rr,It,Lr,_e,A,x,Zt,X,Qr,te,Ur,Ee,z,qr,ee,Mr,Br,ye,F,$e,Pt,Xr,be,C,re,G,Nt,Fr,Gr,Ot,Wr,Yr,I,W,kt,Y,jr,Jr,Dt,ae,Kr,Vr,j,xt,J,Zr,ta,zt,oe,ea,ra,K,Ct,V,aa,oa,St,le,la,Te,Ht,ia,Ae,Z,Ie,u,na,ie,sa,fa,ne,pa,ha,Pe,tt,Ne;return H=new Me({}),R=new Me({}),q=new Me({}),X=new Me({}),F=new ma({props:{code:"python -m pip install optimum",highlighted:"python -m pip install optimum"}}),Z=new ma({props:{code:"python -m pip install git+https://github.com/huggingface/optimum.git",highlighted:"python -m pip install git+https://github.com/huggingface/optimum.git"}}),tt=new ma({props:{code:"python -m pip install git+https://github.com/huggingface/optimum.git#egg=optimum[onnxruntime]",highlighted:'python -m pip install git+https://github.com/huggingface/optimum.git<span class="hljs-comment">#egg=optimum[onnxruntime]</span>'}}),{c(){v=a("meta"),se=f(),g=a("h1"),P=a("a"),Ft=a("span"),et(H.$$.fragment),Be=f(),Gt=a("span"),Xe=n("\u{1F917} Optimum"),fe=f(),nt=a("p"),Fe=n("\u{1F917} Optimum is an extension of \u{1F917} Transformers, providing a set of performance optimization tools enabling maximum efficiency to train and run models on targeted hardware."),pe=f(),st=a("p"),Ge=n(`The AI ecosystem evolves quickly and more and more specialized hardware along with their own optimizations are emerging every day.
As such, Optimum enables users to efficiently use any of these platforms with the same ease inherent to transformers.`),he=f(),w=a("h2"),N=a("a"),Wt=a("span"),et(R.$$.fragment),We=f(),Yt=a("span"),Ye=n("Integration with Hardware Partners"),me=f(),ft=a("p"),je=n("\u{1F917} Optimum aims at providing more diversity towards the kind of hardware users can target to train and finetune their models."),ce=f(),pt=a("p"),Je=n("To achieve this, we are collaborating with the following hardware manufacturers in order to provide the best transformers integration:"),de=f(),O=a("ul"),L=a("li"),Q=a("a"),Ke=n("Graphcore IPUs"),Ve=n(" - IPUs are a completely new kind of massively parallel processor to accelerate machine intelligence. "),U=a("a"),Ze=n("More information here"),tr=f(),jt=a("li"),er=n("More to come soon! :star:"),ue=f(),_=a("h2"),k=a("a"),Jt=a("span"),et(q.$$.fragment),rr=f(),Kt=a("span"),ar=n("Optimizing models towards inference"),ve=f(),ht=a("p"),or=n(`Along with supporting dedicated AI hardware for training, Optimum also provides inference optimizations towards various frameworks and
platforms.`),ge=f(),d=a("p"),lr=n("We currently support "),M=a("a"),ir=n("ONNX runtime"),nr=n(" along with "),B=a("a"),sr=n("Intel Neural Compressor (INC)"),fr=n("."),we=f(),D=a("table"),Vt=a("thead"),E=a("tr"),mt=a("th"),pr=n("Features"),hr=f(),ct=a("th"),mr=n("ONNX Runtime"),cr=f(),dt=a("th"),dr=n("Intel Neural Compressor"),ur=f(),c=a("tbody"),y=a("tr"),ut=a("td"),vr=n("Post-training Dynamic Quantization"),gr=f(),vt=a("td"),wr=n("\u2705"),_r=f(),gt=a("td"),Er=n("\u2705"),yr=f(),$=a("tr"),wt=a("td"),$r=n("Post-training Static Quantization"),br=f(),_t=a("td"),Tr=n("\u2705"),Ar=f(),Et=a("td"),Ir=n("\u2705"),Pr=f(),b=a("tr"),yt=a("td"),Nr=n("Quantization Aware Training (QAT)"),Or=f(),$t=a("td"),kr=n("Stay tuned! \u2B50"),Dr=f(),bt=a("td"),xr=n("\u2705"),zr=f(),T=a("tr"),Tt=a("td"),Cr=n("Pruning"),Sr=f(),At=a("td"),Hr=n("N/A"),Rr=f(),It=a("td"),Lr=n("\u2705"),_e=f(),A=a("h2"),x=a("a"),Zt=a("span"),et(X.$$.fragment),Qr=f(),te=a("span"),Ur=n("Installation"),Ee=f(),z=a("p"),qr=n("\u{1F917} Optimum can be installed using "),ee=a("code"),Mr=n("pip"),Br=n(" as follows:"),ye=f(),et(F.$$.fragment),$e=f(),Pt=a("p"),Xr=n("If you\u2019d like to use the accelerator-specific features of \u{1F917} Optimum, you can install the required dependencies according to the table below:"),be=f(),C=a("table"),re=a("thead"),G=a("tr"),Nt=a("th"),Fr=n("Accelerator"),Gr=f(),Ot=a("th"),Wr=n("Installation"),Yr=f(),I=a("tbody"),W=a("tr"),kt=a("td"),Y=a("a"),jr=n("ONNX runtime"),Jr=f(),Dt=a("td"),ae=a("code"),Kr=n("python -m pip install optimum[onnxruntime]"),Vr=f(),j=a("tr"),xt=a("td"),J=a("a"),Zr=n("Intel Neural Compressor (INC)"),ta=f(),zt=a("td"),oe=a("code"),ea=n("python -m pip install optimum[intel]"),ra=f(),K=a("tr"),Ct=a("td"),V=a("a"),aa=n("Graphcore IPU"),oa=f(),St=a("td"),le=a("code"),la=n("python -m pip install optimum[graphcore]"),Te=f(),Ht=a("p"),ia=n("If you\u2019d like to play with the examples or need the bleeding edge of the code and can\u2019t wait for a new release, you can install the base library from source as follows:"),Ae=f(),et(Z.$$.fragment),Ie=f(),u=a("p"),na=n("For the acclerator-specific features, you can install them by appending "),ie=a("code"),sa=n("#egg=optimum[accelerator_type]"),fa=n(" to the "),ne=a("code"),pa=n("pip"),ha=n(" command, e.g."),Pe=f(),et(tt.$$.fragment),this.h()},l(e){const h=$o('[data-svelte="svelte-1phssyn"]',document.head);v=o(h,"META",{name:!0,content:!0}),h.forEach(r),se=p(e),g=o(e,"H1",{class:!0});var Oe=l(g);P=o(Oe,"A",{id:!0,class:!0,href:!0});var da=l(P);Ft=o(da,"SPAN",{});var ua=l(Ft);rt(H.$$.fragment,ua),ua.forEach(r),da.forEach(r),Be=p(Oe),Gt=o(Oe,"SPAN",{});var va=l(Gt);Xe=s(va,"\u{1F917} Optimum"),va.forEach(r),Oe.forEach(r),fe=p(e),nt=o(e,"P",{});var ga=l(nt);Fe=s(ga,"\u{1F917} Optimum is an extension of \u{1F917} Transformers, providing a set of performance optimization tools enabling maximum efficiency to train and run models on targeted hardware."),ga.forEach(r),pe=p(e),st=o(e,"P",{});var wa=l(st);Ge=s(wa,`The AI ecosystem evolves quickly and more and more specialized hardware along with their own optimizations are emerging every day.
As such, Optimum enables users to efficiently use any of these platforms with the same ease inherent to transformers.`),wa.forEach(r),he=p(e),w=o(e,"H2",{class:!0});var ke=l(w);N=o(ke,"A",{id:!0,class:!0,href:!0});var _a=l(N);Wt=o(_a,"SPAN",{});var Ea=l(Wt);rt(R.$$.fragment,Ea),Ea.forEach(r),_a.forEach(r),We=p(ke),Yt=o(ke,"SPAN",{});var ya=l(Yt);Ye=s(ya,"Integration with Hardware Partners"),ya.forEach(r),ke.forEach(r),me=p(e),ft=o(e,"P",{});var $a=l(ft);je=s($a,"\u{1F917} Optimum aims at providing more diversity towards the kind of hardware users can target to train and finetune their models."),$a.forEach(r),ce=p(e),pt=o(e,"P",{});var ba=l(pt);Je=s(ba,"To achieve this, we are collaborating with the following hardware manufacturers in order to provide the best transformers integration:"),ba.forEach(r),de=p(e),O=o(e,"UL",{});var De=l(O);L=o(De,"LI",{});var xe=l(L);Q=o(xe,"A",{href:!0,rel:!0});var Ta=l(Q);Ke=s(Ta,"Graphcore IPUs"),Ta.forEach(r),Ve=s(xe," - IPUs are a completely new kind of massively parallel processor to accelerate machine intelligence. "),U=o(xe,"A",{href:!0,rel:!0});var Aa=l(U);Ze=s(Aa,"More information here"),Aa.forEach(r),xe.forEach(r),tr=p(De),jt=o(De,"LI",{});var Ia=l(jt);er=s(Ia,"More to come soon! :star:"),Ia.forEach(r),De.forEach(r),ue=p(e),_=o(e,"H2",{class:!0});var ze=l(_);k=o(ze,"A",{id:!0,class:!0,href:!0});var Pa=l(k);Jt=o(Pa,"SPAN",{});var Na=l(Jt);rt(q.$$.fragment,Na),Na.forEach(r),Pa.forEach(r),rr=p(ze),Kt=o(ze,"SPAN",{});var Oa=l(Kt);ar=s(Oa,"Optimizing models towards inference"),Oa.forEach(r),ze.forEach(r),ve=p(e),ht=o(e,"P",{});var ka=l(ht);or=s(ka,`Along with supporting dedicated AI hardware for training, Optimum also provides inference optimizations towards various frameworks and
platforms.`),ka.forEach(r),ge=p(e),d=o(e,"P",{});var Rt=l(d);lr=s(Rt,"We currently support "),M=o(Rt,"A",{href:!0,rel:!0});var Da=l(M);ir=s(Da,"ONNX runtime"),Da.forEach(r),nr=s(Rt," along with "),B=o(Rt,"A",{href:!0,rel:!0});var xa=l(B);sr=s(xa,"Intel Neural Compressor (INC)"),xa.forEach(r),fr=s(Rt,"."),Rt.forEach(r),we=p(e),D=o(e,"TABLE",{});var Ce=l(D);Vt=o(Ce,"THEAD",{});var za=l(Vt);E=o(za,"TR",{});var Lt=l(E);mt=o(Lt,"TH",{align:!0});var Ca=l(mt);pr=s(Ca,"Features"),Ca.forEach(r),hr=p(Lt),ct=o(Lt,"TH",{align:!0});var Sa=l(ct);mr=s(Sa,"ONNX Runtime"),Sa.forEach(r),cr=p(Lt),dt=o(Lt,"TH",{align:!0});var Ha=l(dt);dr=s(Ha,"Intel Neural Compressor"),Ha.forEach(r),Lt.forEach(r),za.forEach(r),ur=p(Ce),c=o(Ce,"TBODY",{});var S=l(c);y=o(S,"TR",{});var Qt=l(y);ut=o(Qt,"TD",{align:!0});var Ra=l(ut);vr=s(Ra,"Post-training Dynamic Quantization"),Ra.forEach(r),gr=p(Qt),vt=o(Qt,"TD",{align:!0});var La=l(vt);wr=s(La,"\u2705"),La.forEach(r),_r=p(Qt),gt=o(Qt,"TD",{align:!0});var Qa=l(gt);Er=s(Qa,"\u2705"),Qa.forEach(r),Qt.forEach(r),yr=p(S),$=o(S,"TR",{});var Ut=l($);wt=o(Ut,"TD",{align:!0});var Ua=l(wt);$r=s(Ua,"Post-training Static Quantization"),Ua.forEach(r),br=p(Ut),_t=o(Ut,"TD",{align:!0});var qa=l(_t);Tr=s(qa,"\u2705"),qa.forEach(r),Ar=p(Ut),Et=o(Ut,"TD",{align:!0});var Ma=l(Et);Ir=s(Ma,"\u2705"),Ma.forEach(r),Ut.forEach(r),Pr=p(S),b=o(S,"TR",{});var qt=l(b);yt=o(qt,"TD",{align:!0});var Ba=l(yt);Nr=s(Ba,"Quantization Aware Training (QAT)"),Ba.forEach(r),Or=p(qt),$t=o(qt,"TD",{align:!0});var Xa=l($t);kr=s(Xa,"Stay tuned! \u2B50"),Xa.forEach(r),Dr=p(qt),bt=o(qt,"TD",{align:!0});var Fa=l(bt);xr=s(Fa,"\u2705"),Fa.forEach(r),qt.forEach(r),zr=p(S),T=o(S,"TR",{});var Mt=l(T);Tt=o(Mt,"TD",{align:!0});var Ga=l(Tt);Cr=s(Ga,"Pruning"),Ga.forEach(r),Sr=p(Mt),At=o(Mt,"TD",{align:!0});var Wa=l(At);Hr=s(Wa,"N/A"),Wa.forEach(r),Rr=p(Mt),It=o(Mt,"TD",{align:!0});var Ya=l(It);Lr=s(Ya,"\u2705"),Ya.forEach(r),Mt.forEach(r),S.forEach(r),Ce.forEach(r),_e=p(e),A=o(e,"H2",{class:!0});var Se=l(A);x=o(Se,"A",{id:!0,class:!0,href:!0});var ja=l(x);Zt=o(ja,"SPAN",{});var Ja=l(Zt);rt(X.$$.fragment,Ja),Ja.forEach(r),ja.forEach(r),Qr=p(Se),te=o(Se,"SPAN",{});var Ka=l(te);Ur=s(Ka,"Installation"),Ka.forEach(r),Se.forEach(r),Ee=p(e),z=o(e,"P",{});var He=l(z);qr=s(He,"\u{1F917} Optimum can be installed using "),ee=o(He,"CODE",{});var Va=l(ee);Mr=s(Va,"pip"),Va.forEach(r),Br=s(He," as follows:"),He.forEach(r),ye=p(e),rt(F.$$.fragment,e),$e=p(e),Pt=o(e,"P",{});var Za=l(Pt);Xr=s(Za,"If you\u2019d like to use the accelerator-specific features of \u{1F917} Optimum, you can install the required dependencies according to the table below:"),Za.forEach(r),be=p(e),C=o(e,"TABLE",{});var Re=l(C);re=o(Re,"THEAD",{});var to=l(re);G=o(to,"TR",{});var Le=l(G);Nt=o(Le,"TH",{align:!0});var eo=l(Nt);Fr=s(eo,"Accelerator"),eo.forEach(r),Gr=p(Le),Ot=o(Le,"TH",{align:!0});var ro=l(Ot);Wr=s(ro,"Installation"),ro.forEach(r),Le.forEach(r),to.forEach(r),Yr=p(Re),I=o(Re,"TBODY",{});var Bt=l(I);W=o(Bt,"TR",{});var Qe=l(W);kt=o(Qe,"TD",{align:!0});var ao=l(kt);Y=o(ao,"A",{href:!0,rel:!0});var oo=l(Y);jr=s(oo,"ONNX runtime"),oo.forEach(r),ao.forEach(r),Jr=p(Qe),Dt=o(Qe,"TD",{align:!0});var lo=l(Dt);ae=o(lo,"CODE",{});var io=l(ae);Kr=s(io,"python -m pip install optimum[onnxruntime]"),io.forEach(r),lo.forEach(r),Qe.forEach(r),Vr=p(Bt),j=o(Bt,"TR",{});var Ue=l(j);xt=o(Ue,"TD",{align:!0});var no=l(xt);J=o(no,"A",{href:!0,rel:!0});var so=l(J);Zr=s(so,"Intel Neural Compressor (INC)"),so.forEach(r),no.forEach(r),ta=p(Ue),zt=o(Ue,"TD",{align:!0});var fo=l(zt);oe=o(fo,"CODE",{});var po=l(oe);ea=s(po,"python -m pip install optimum[intel]"),po.forEach(r),fo.forEach(r),Ue.forEach(r),ra=p(Bt),K=o(Bt,"TR",{});var qe=l(K);Ct=o(qe,"TD",{align:!0});var ho=l(Ct);V=o(ho,"A",{href:!0,rel:!0});var mo=l(V);aa=s(mo,"Graphcore IPU"),mo.forEach(r),ho.forEach(r),oa=p(qe),St=o(qe,"TD",{align:!0});var co=l(St);le=o(co,"CODE",{});var uo=l(le);la=s(uo,"python -m pip install optimum[graphcore]"),uo.forEach(r),co.forEach(r),qe.forEach(r),Bt.forEach(r),Re.forEach(r),Te=p(e),Ht=o(e,"P",{});var vo=l(Ht);ia=s(vo,"If you\u2019d like to play with the examples or need the bleeding edge of the code and can\u2019t wait for a new release, you can install the base library from source as follows:"),vo.forEach(r),Ae=p(e),rt(Z.$$.fragment,e),Ie=p(e),u=o(e,"P",{});var Xt=l(u);na=s(Xt,"For the acclerator-specific features, you can install them by appending "),ie=o(Xt,"CODE",{});var go=l(ie);sa=s(go,"#egg=optimum[accelerator_type]"),go.forEach(r),fa=s(Xt," to the "),ne=o(Xt,"CODE",{});var wo=l(ne);pa=s(wo,"pip"),wo.forEach(r),ha=s(Xt," command, e.g."),Xt.forEach(r),Pe=p(e),rt(tt.$$.fragment,e),this.h()},h(){i(v,"name","hf:doc:metadata"),i(v,"content",JSON.stringify(Io)),i(P,"id","optimum"),i(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(P,"href","#optimum"),i(g,"class","relative group"),i(N,"id","integration-with-hardware-partners"),i(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(N,"href","#integration-with-hardware-partners"),i(w,"class","relative group"),i(Q,"href","https://github.com/huggingface/optimum-graphcore"),i(Q,"rel","nofollow"),i(U,"href","https://www.graphcore.ai/products/ipu"),i(U,"rel","nofollow"),i(k,"id","optimizing-models-towards-inference"),i(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(k,"href","#optimizing-models-towards-inference"),i(_,"class","relative group"),i(M,"href","https://github.com/microsoft/onnxruntime"),i(M,"rel","nofollow"),i(B,"href","https://github.com/intel/neural-compressor"),i(B,"rel","nofollow"),i(mt,"align","center"),i(ct,"align","center"),i(dt,"align","center"),i(ut,"align","center"),i(vt,"align","center"),i(gt,"align","center"),i(wt,"align","center"),i(_t,"align","center"),i(Et,"align","center"),i(yt,"align","center"),i($t,"align","center"),i(bt,"align","center"),i(Tt,"align","center"),i(At,"align","center"),i(It,"align","center"),i(x,"id","installation"),i(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(x,"href","#installation"),i(A,"class","relative group"),i(Nt,"align","left"),i(Ot,"align","left"),i(Y,"href","https://github.com/microsoft/onnxruntime"),i(Y,"rel","nofollow"),i(kt,"align","left"),i(Dt,"align","left"),i(J,"href","https://github.com/intel/neural-compressor"),i(J,"rel","nofollow"),i(xt,"align","left"),i(zt,"align","left"),i(V,"href","https://www.graphcore.ai/products/ipu"),i(V,"rel","nofollow"),i(Ct,"align","left"),i(St,"align","left")},m(e,h){t(document.head,v),m(e,se,h),m(e,g,h),t(g,P),t(P,Ft),at(H,Ft,null),t(g,Be),t(g,Gt),t(Gt,Xe),m(e,fe,h),m(e,nt,h),t(nt,Fe),m(e,pe,h),m(e,st,h),t(st,Ge),m(e,he,h),m(e,w,h),t(w,N),t(N,Wt),at(R,Wt,null),t(w,We),t(w,Yt),t(Yt,Ye),m(e,me,h),m(e,ft,h),t(ft,je),m(e,ce,h),m(e,pt,h),t(pt,Je),m(e,de,h),m(e,O,h),t(O,L),t(L,Q),t(Q,Ke),t(L,Ve),t(L,U),t(U,Ze),t(O,tr),t(O,jt),t(jt,er),m(e,ue,h),m(e,_,h),t(_,k),t(k,Jt),at(q,Jt,null),t(_,rr),t(_,Kt),t(Kt,ar),m(e,ve,h),m(e,ht,h),t(ht,or),m(e,ge,h),m(e,d,h),t(d,lr),t(d,M),t(M,ir),t(d,nr),t(d,B),t(B,sr),t(d,fr),m(e,we,h),m(e,D,h),t(D,Vt),t(Vt,E),t(E,mt),t(mt,pr),t(E,hr),t(E,ct),t(ct,mr),t(E,cr),t(E,dt),t(dt,dr),t(D,ur),t(D,c),t(c,y),t(y,ut),t(ut,vr),t(y,gr),t(y,vt),t(vt,wr),t(y,_r),t(y,gt),t(gt,Er),t(c,yr),t(c,$),t($,wt),t(wt,$r),t($,br),t($,_t),t(_t,Tr),t($,Ar),t($,Et),t(Et,Ir),t(c,Pr),t(c,b),t(b,yt),t(yt,Nr),t(b,Or),t(b,$t),t($t,kr),t(b,Dr),t(b,bt),t(bt,xr),t(c,zr),t(c,T),t(T,Tt),t(Tt,Cr),t(T,Sr),t(T,At),t(At,Hr),t(T,Rr),t(T,It),t(It,Lr),m(e,_e,h),m(e,A,h),t(A,x),t(x,Zt),at(X,Zt,null),t(A,Qr),t(A,te),t(te,Ur),m(e,Ee,h),m(e,z,h),t(z,qr),t(z,ee),t(ee,Mr),t(z,Br),m(e,ye,h),at(F,e,h),m(e,$e,h),m(e,Pt,h),t(Pt,Xr),m(e,be,h),m(e,C,h),t(C,re),t(re,G),t(G,Nt),t(Nt,Fr),t(G,Gr),t(G,Ot),t(Ot,Wr),t(C,Yr),t(C,I),t(I,W),t(W,kt),t(kt,Y),t(Y,jr),t(W,Jr),t(W,Dt),t(Dt,ae),t(ae,Kr),t(I,Vr),t(I,j),t(j,xt),t(xt,J),t(J,Zr),t(j,ta),t(j,zt),t(zt,oe),t(oe,ea),t(I,ra),t(I,K),t(K,Ct),t(Ct,V),t(V,aa),t(K,oa),t(K,St),t(St,le),t(le,la),m(e,Te,h),m(e,Ht,h),t(Ht,ia),m(e,Ae,h),at(Z,e,h),m(e,Ie,h),m(e,u,h),t(u,na),t(u,ie),t(ie,sa),t(u,fa),t(u,ne),t(ne,pa),t(u,ha),m(e,Pe,h),at(tt,e,h),Ne=!0},p:bo,i(e){Ne||(ot(H.$$.fragment,e),ot(R.$$.fragment,e),ot(q.$$.fragment,e),ot(X.$$.fragment,e),ot(F.$$.fragment,e),ot(Z.$$.fragment,e),ot(tt.$$.fragment,e),Ne=!0)},o(e){lt(H.$$.fragment,e),lt(R.$$.fragment,e),lt(q.$$.fragment,e),lt(X.$$.fragment,e),lt(F.$$.fragment,e),lt(Z.$$.fragment,e),lt(tt.$$.fragment,e),Ne=!1},d(e){r(v),e&&r(se),e&&r(g),it(H),e&&r(fe),e&&r(nt),e&&r(pe),e&&r(st),e&&r(he),e&&r(w),it(R),e&&r(me),e&&r(ft),e&&r(ce),e&&r(pt),e&&r(de),e&&r(O),e&&r(ue),e&&r(_),it(q),e&&r(ve),e&&r(ht),e&&r(ge),e&&r(d),e&&r(we),e&&r(D),e&&r(_e),e&&r(A),it(X),e&&r(Ee),e&&r(z),e&&r(ye),it(F,e),e&&r($e),e&&r(Pt),e&&r(be),e&&r(C),e&&r(Te),e&&r(Ht),e&&r(Ae),it(Z,e),e&&r(Ie),e&&r(u),e&&r(Pe),it(tt,e)}}}const Io={local:"optimum",sections:[{local:"integration-with-hardware-partners",title:"Integration with Hardware Partners"},{local:"optimizing-models-towards-inference",title:"Optimizing models towards inference"},{local:"installation",title:"Installation"}],title:"\u{1F917} Optimum"};function Po(ca){return To(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Do extends _o{constructor(v){super();Eo(this,v,Po,Ao,yo,{})}}export{Do as default,Io as metadata};
