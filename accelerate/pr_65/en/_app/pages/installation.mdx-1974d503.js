import{S as zl,i as Gl,s as Kl,e as i,k as f,w as d,t as r,M as Ql,c as n,d as t,m as h,a as s,x as m,h as p,b as c,F as l,g as a,y,L as Rl,q as v,o as w,B as $}from"../chunks/vendor-19e06bd2.js";import{I as mt}from"../chunks/IconCopyLink-3c713d38.js";import{C as H}from"../chunks/CodeBlock-9dd1fdfb.js";function Vl(yt){let g,ee,u,b,ue,W,vt,de,wt,Ie,te,$t,Oe,_,bt,Y,gt,_t,F,Et,kt,Ce,le,Pt,Ne,P,x,me,B,At,ye,Tt,Se,I,xt,L,It,Ot,De,oe,Ct,je,M,qe,ae,Nt,He,U,We,ie,St,Ye,J,Fe,A,O,ve,z,Dt,we,jt,Be,C,qt,$e,Ht,Wt,Le,G,Me,N,Yt,be,Ft,Bt,Ue,E,Lt,ge,Mt,Ut,K,Jt,zt,Je,ne,Gt,ze,Q,Ge,re,Kt,Ke,T,S,_e,R,Qt,Ee,Rt,Qe,D,Vt,ke,Xt,Zt,Re,V,Ve,se,el,Xe,X,Ze,j,tl,Pe,ll,ol,et,q,al,Ae,il,nl,tt,k,rl,Te,sl,pl,xe,fl,hl,lt,Z,ot,pe,cl,at;return W=new mt({}),B=new mt({}),M=new H({props:{code:"pip install accelerate",highlighted:"pip install accelerate"}}),U=new H({props:{code:"pip install accelerate[torch]",highlighted:"pip install accelerate[torch]"}}),J=new H({props:{code:'python -c "TODO write"',highlighted:'python -c <span class="hljs-string">&quot;TODO write&quot;</span>'}}),z=new mt({}),G=new H({props:{code:"pip install git+https://github.com/huggingface/accelerate",highlighted:"pip install git+https://github.com/huggingface/accelerate"}}),Q=new H({props:{code:'python -c "TODO write"',highlighted:'python -c <span class="hljs-string">&quot;TODO write&quot;</span>'}}),R=new mt({}),V=new H({props:{code:`git clone https://github.com/huggingface/accelerate.git
cd accelerate
pip install -e .`,highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/huggingface/accelerate.git
<span class="hljs-built_in">cd</span> accelerate
pip install -e .`}}),X=new H({props:{code:"~/anaconda3/envs/main/lib/python3.7/site-packages/",highlighted:'~<span class="hljs-regexp">/anaconda3/</span>envs<span class="hljs-regexp">/main/</span>lib<span class="hljs-regexp">/python3.7/</span>site-packages/'}}),Z=new H({props:{code:`cd ~/accelerate/
git pull`,highlighted:`<span class="hljs-built_in">cd</span> ~/accelerate/
git pull`}}),{c(){g=i("meta"),ee=f(),u=i("h1"),b=i("a"),ue=i("span"),d(W.$$.fragment),vt=f(),de=i("span"),wt=r("Installation"),Ie=f(),te=i("p"),$t=r("\u{1F917} Accelerate is tested on Python 3.6+, and PyTorch 1.6.0+."),Oe=f(),_=i("p"),bt=r("You should install \u{1F917} Accelerate in a "),Y=i("a"),gt=r("virtual environment"),_t=r(`. If you\u2019re
unfamiliar with Python virtual environments, check out the `),F=i("a"),Et=r("user guide"),kt=r(`. Create a virtual environment with the version of Python you\u2019re going
to use and activate it.`),Ce=f(),le=i("p"),Pt=r("Now, if you want to use \u{1F917} Accelerate, you can install it with pip."),Ne=f(),P=i("h2"),x=i("a"),me=i("span"),d(B.$$.fragment),At=f(),ye=i("span"),Tt=r("Installation with pip"),Se=f(),I=i("p"),xt=r(`First you need to install PyTorch. Please refer to the
`),L=i("a"),It=r("PyTorch installation page"),Ot=r(" regarding the specific install command for your platform."),De=f(),oe=i("p"),Ct=r("When PyTorch has been installed, \u{1F917} Accelerate can be installed using pip as follows:"),je=f(),d(M.$$.fragment),qe=f(),ae=i("p"),Nt=r("Alternatively, for CPU-support only, you can install \u{1F917} Accelerate and PyTorch in one line with:"),He=f(),d(U.$$.fragment),We=f(),ie=i("p"),St=r("To check \u{1F917} Accelerate is properly installed, run the following command:"),Ye=f(),d(J.$$.fragment),Fe=f(),A=i("h2"),O=i("a"),ve=i("span"),d(z.$$.fragment),Dt=f(),we=i("span"),jt=r("Installing from source"),Be=f(),C=i("p"),qt=r("Here is how to quickly install "),$e=i("code"),Ht=r("accelerate"),Wt=r(" from source:"),Le=f(),d(G.$$.fragment),Me=f(),N=i("p"),Yt=r("Note that this will install not the latest released version, but the bleeding edge "),be=i("code"),Ft=r("master"),Bt=r(" version, which you may want to use in case a bug has been fixed since the last official release and a new release hasn\u2019t  been yet rolled out."),Ue=f(),E=i("p"),Lt=r("While we strive to keep "),ge=i("code"),Mt=r("master"),Ut=r(" operational at all times, if you notice some issues, they usually get fixed within a few hours or a day and and you\u2019re more than welcome to help us detect any problems by opening an "),K=i("a"),Jt=r("Issue"),zt=r(" and this way, things will get fixed even sooner."),Je=f(),ne=i("p"),Gt=r("Again, you can run:"),ze=f(),d(Q.$$.fragment),Ge=f(),re=i("p"),Kt=r("to check \u{1F917} Accelerate is properly installed."),Ke=f(),T=i("h2"),S=i("a"),_e=i("span"),d(R.$$.fragment),Qt=f(),Ee=i("span"),Rt=r("Editable install"),Qe=f(),D=i("p"),Vt=r("If you want to constantly use the bleeding edge "),ke=i("code"),Xt=r("master"),Zt=r(" version of the source code, or if you want to contribute to the library and need to test the changes in the code you\u2019re making, you will need an editable install. This is done by cloning the repository and installing with the following commands:"),Re=f(),d(V.$$.fragment),Ve=f(),se=i("p"),el=r("This command performs a magical link between the folder you cloned the repository to and your python library paths, and it\u2019ll look inside this folder in addition to the normal library-wide paths. So if normally your python packages get installed into:"),Xe=f(),d(X.$$.fragment),Ze=f(),j=i("p"),tl=r("now this editable install will reside where you clone the folder to, e.g. "),Pe=i("code"),ll=r("~/accelerate/"),ol=r(" and python will search it too."),et=f(),q=i("p"),al=r("Do note that you have to keep that "),Ae=i("code"),il=r("accelerate"),nl=r(" folder around and not delete it to continue using the \u{1F917} Accelerate library."),tt=f(),k=i("p"),rl=r("Now, let\u2019s get to the real benefit of this installation approach. Say, you saw some new feature has been just committed into "),Te=i("code"),sl=r("master"),pl=r(". If you have already performed all the steps above, to update your accelerate repo to include all the latest commits, all you need to do is to "),xe=i("code"),fl=r("cd"),hl=r(" into that cloned repository folder and update the clone to the latest version:"),lt=f(),d(Z.$$.fragment),ot=f(),pe=i("p"),cl=r("There is nothing else to do. Your python environment will find the bleeding edge version of \u{1F917} Accelerate on the next run."),this.h()},l(e){const o=Ql('[data-svelte="svelte-1phssyn"]',document.head);g=n(o,"META",{name:!0,content:!0}),o.forEach(t),ee=h(e),u=n(e,"H1",{class:!0});var it=s(u);b=n(it,"A",{id:!0,class:!0,href:!0});var ul=s(b);ue=n(ul,"SPAN",{});var dl=s(ue);m(W.$$.fragment,dl),dl.forEach(t),ul.forEach(t),vt=h(it),de=n(it,"SPAN",{});var ml=s(de);wt=p(ml,"Installation"),ml.forEach(t),it.forEach(t),Ie=h(e),te=n(e,"P",{});var yl=s(te);$t=p(yl,"\u{1F917} Accelerate is tested on Python 3.6+, and PyTorch 1.6.0+."),yl.forEach(t),Oe=h(e),_=n(e,"P",{});var fe=s(_);bt=p(fe,"You should install \u{1F917} Accelerate in a "),Y=n(fe,"A",{href:!0,rel:!0});var vl=s(Y);gt=p(vl,"virtual environment"),vl.forEach(t),_t=p(fe,`. If you\u2019re
unfamiliar with Python virtual environments, check out the `),F=n(fe,"A",{href:!0,rel:!0});var wl=s(F);Et=p(wl,"user guide"),wl.forEach(t),kt=p(fe,`. Create a virtual environment with the version of Python you\u2019re going
to use and activate it.`),fe.forEach(t),Ce=h(e),le=n(e,"P",{});var $l=s(le);Pt=p($l,"Now, if you want to use \u{1F917} Accelerate, you can install it with pip."),$l.forEach(t),Ne=h(e),P=n(e,"H2",{class:!0});var nt=s(P);x=n(nt,"A",{id:!0,class:!0,href:!0});var bl=s(x);me=n(bl,"SPAN",{});var gl=s(me);m(B.$$.fragment,gl),gl.forEach(t),bl.forEach(t),At=h(nt),ye=n(nt,"SPAN",{});var _l=s(ye);Tt=p(_l,"Installation with pip"),_l.forEach(t),nt.forEach(t),Se=h(e),I=n(e,"P",{});var rt=s(I);xt=p(rt,`First you need to install PyTorch. Please refer to the
`),L=n(rt,"A",{href:!0,rel:!0});var El=s(L);It=p(El,"PyTorch installation page"),El.forEach(t),Ot=p(rt," regarding the specific install command for your platform."),rt.forEach(t),De=h(e),oe=n(e,"P",{});var kl=s(oe);Ct=p(kl,"When PyTorch has been installed, \u{1F917} Accelerate can be installed using pip as follows:"),kl.forEach(t),je=h(e),m(M.$$.fragment,e),qe=h(e),ae=n(e,"P",{});var Pl=s(ae);Nt=p(Pl,"Alternatively, for CPU-support only, you can install \u{1F917} Accelerate and PyTorch in one line with:"),Pl.forEach(t),He=h(e),m(U.$$.fragment,e),We=h(e),ie=n(e,"P",{});var Al=s(ie);St=p(Al,"To check \u{1F917} Accelerate is properly installed, run the following command:"),Al.forEach(t),Ye=h(e),m(J.$$.fragment,e),Fe=h(e),A=n(e,"H2",{class:!0});var st=s(A);O=n(st,"A",{id:!0,class:!0,href:!0});var Tl=s(O);ve=n(Tl,"SPAN",{});var xl=s(ve);m(z.$$.fragment,xl),xl.forEach(t),Tl.forEach(t),Dt=h(st),we=n(st,"SPAN",{});var Il=s(we);jt=p(Il,"Installing from source"),Il.forEach(t),st.forEach(t),Be=h(e),C=n(e,"P",{});var pt=s(C);qt=p(pt,"Here is how to quickly install "),$e=n(pt,"CODE",{});var Ol=s($e);Ht=p(Ol,"accelerate"),Ol.forEach(t),Wt=p(pt," from source:"),pt.forEach(t),Le=h(e),m(G.$$.fragment,e),Me=h(e),N=n(e,"P",{});var ft=s(N);Yt=p(ft,"Note that this will install not the latest released version, but the bleeding edge "),be=n(ft,"CODE",{});var Cl=s(be);Ft=p(Cl,"master"),Cl.forEach(t),Bt=p(ft," version, which you may want to use in case a bug has been fixed since the last official release and a new release hasn\u2019t  been yet rolled out."),ft.forEach(t),Ue=h(e),E=n(e,"P",{});var he=s(E);Lt=p(he,"While we strive to keep "),ge=n(he,"CODE",{});var Nl=s(ge);Mt=p(Nl,"master"),Nl.forEach(t),Ut=p(he," operational at all times, if you notice some issues, they usually get fixed within a few hours or a day and and you\u2019re more than welcome to help us detect any problems by opening an "),K=n(he,"A",{href:!0,rel:!0});var Sl=s(K);Jt=p(Sl,"Issue"),Sl.forEach(t),zt=p(he," and this way, things will get fixed even sooner."),he.forEach(t),Je=h(e),ne=n(e,"P",{});var Dl=s(ne);Gt=p(Dl,"Again, you can run:"),Dl.forEach(t),ze=h(e),m(Q.$$.fragment,e),Ge=h(e),re=n(e,"P",{});var jl=s(re);Kt=p(jl,"to check \u{1F917} Accelerate is properly installed."),jl.forEach(t),Ke=h(e),T=n(e,"H2",{class:!0});var ht=s(T);S=n(ht,"A",{id:!0,class:!0,href:!0});var ql=s(S);_e=n(ql,"SPAN",{});var Hl=s(_e);m(R.$$.fragment,Hl),Hl.forEach(t),ql.forEach(t),Qt=h(ht),Ee=n(ht,"SPAN",{});var Wl=s(Ee);Rt=p(Wl,"Editable install"),Wl.forEach(t),ht.forEach(t),Qe=h(e),D=n(e,"P",{});var ct=s(D);Vt=p(ct,"If you want to constantly use the bleeding edge "),ke=n(ct,"CODE",{});var Yl=s(ke);Xt=p(Yl,"master"),Yl.forEach(t),Zt=p(ct," version of the source code, or if you want to contribute to the library and need to test the changes in the code you\u2019re making, you will need an editable install. This is done by cloning the repository and installing with the following commands:"),ct.forEach(t),Re=h(e),m(V.$$.fragment,e),Ve=h(e),se=n(e,"P",{});var Fl=s(se);el=p(Fl,"This command performs a magical link between the folder you cloned the repository to and your python library paths, and it\u2019ll look inside this folder in addition to the normal library-wide paths. So if normally your python packages get installed into:"),Fl.forEach(t),Xe=h(e),m(X.$$.fragment,e),Ze=h(e),j=n(e,"P",{});var ut=s(j);tl=p(ut,"now this editable install will reside where you clone the folder to, e.g. "),Pe=n(ut,"CODE",{});var Bl=s(Pe);ll=p(Bl,"~/accelerate/"),Bl.forEach(t),ol=p(ut," and python will search it too."),ut.forEach(t),et=h(e),q=n(e,"P",{});var dt=s(q);al=p(dt,"Do note that you have to keep that "),Ae=n(dt,"CODE",{});var Ll=s(Ae);il=p(Ll,"accelerate"),Ll.forEach(t),nl=p(dt," folder around and not delete it to continue using the \u{1F917} Accelerate library."),dt.forEach(t),tt=h(e),k=n(e,"P",{});var ce=s(k);rl=p(ce,"Now, let\u2019s get to the real benefit of this installation approach. Say, you saw some new feature has been just committed into "),Te=n(ce,"CODE",{});var Ml=s(Te);sl=p(Ml,"master"),Ml.forEach(t),pl=p(ce,". If you have already performed all the steps above, to update your accelerate repo to include all the latest commits, all you need to do is to "),xe=n(ce,"CODE",{});var Ul=s(xe);fl=p(Ul,"cd"),Ul.forEach(t),hl=p(ce," into that cloned repository folder and update the clone to the latest version:"),ce.forEach(t),lt=h(e),m(Z.$$.fragment,e),ot=h(e),pe=n(e,"P",{});var Jl=s(pe);cl=p(Jl,"There is nothing else to do. Your python environment will find the bleeding edge version of \u{1F917} Accelerate on the next run."),Jl.forEach(t),this.h()},h(){c(g,"name","hf:doc:metadata"),c(g,"content",JSON.stringify(Xl)),c(b,"id","installation"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#installation"),c(u,"class","relative group"),c(Y,"href","https://docs.python.org/3/library/venv.html"),c(Y,"rel","nofollow"),c(F,"href","https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/"),c(F,"rel","nofollow"),c(x,"id","installation-with-pip"),c(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(x,"href","#installation-with-pip"),c(P,"class","relative group"),c(L,"href","https://pytorch.org/get-started/locally/#start-locally"),c(L,"rel","nofollow"),c(O,"id","installing-from-source"),c(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(O,"href","#installing-from-source"),c(A,"class","relative group"),c(K,"href","https://github.com/huggingface/accelerate/issues"),c(K,"rel","nofollow"),c(S,"id","editable-install"),c(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(S,"href","#editable-install"),c(T,"class","relative group")},m(e,o){l(document.head,g),a(e,ee,o),a(e,u,o),l(u,b),l(b,ue),y(W,ue,null),l(u,vt),l(u,de),l(de,wt),a(e,Ie,o),a(e,te,o),l(te,$t),a(e,Oe,o),a(e,_,o),l(_,bt),l(_,Y),l(Y,gt),l(_,_t),l(_,F),l(F,Et),l(_,kt),a(e,Ce,o),a(e,le,o),l(le,Pt),a(e,Ne,o),a(e,P,o),l(P,x),l(x,me),y(B,me,null),l(P,At),l(P,ye),l(ye,Tt),a(e,Se,o),a(e,I,o),l(I,xt),l(I,L),l(L,It),l(I,Ot),a(e,De,o),a(e,oe,o),l(oe,Ct),a(e,je,o),y(M,e,o),a(e,qe,o),a(e,ae,o),l(ae,Nt),a(e,He,o),y(U,e,o),a(e,We,o),a(e,ie,o),l(ie,St),a(e,Ye,o),y(J,e,o),a(e,Fe,o),a(e,A,o),l(A,O),l(O,ve),y(z,ve,null),l(A,Dt),l(A,we),l(we,jt),a(e,Be,o),a(e,C,o),l(C,qt),l(C,$e),l($e,Ht),l(C,Wt),a(e,Le,o),y(G,e,o),a(e,Me,o),a(e,N,o),l(N,Yt),l(N,be),l(be,Ft),l(N,Bt),a(e,Ue,o),a(e,E,o),l(E,Lt),l(E,ge),l(ge,Mt),l(E,Ut),l(E,K),l(K,Jt),l(E,zt),a(e,Je,o),a(e,ne,o),l(ne,Gt),a(e,ze,o),y(Q,e,o),a(e,Ge,o),a(e,re,o),l(re,Kt),a(e,Ke,o),a(e,T,o),l(T,S),l(S,_e),y(R,_e,null),l(T,Qt),l(T,Ee),l(Ee,Rt),a(e,Qe,o),a(e,D,o),l(D,Vt),l(D,ke),l(ke,Xt),l(D,Zt),a(e,Re,o),y(V,e,o),a(e,Ve,o),a(e,se,o),l(se,el),a(e,Xe,o),y(X,e,o),a(e,Ze,o),a(e,j,o),l(j,tl),l(j,Pe),l(Pe,ll),l(j,ol),a(e,et,o),a(e,q,o),l(q,al),l(q,Ae),l(Ae,il),l(q,nl),a(e,tt,o),a(e,k,o),l(k,rl),l(k,Te),l(Te,sl),l(k,pl),l(k,xe),l(xe,fl),l(k,hl),a(e,lt,o),y(Z,e,o),a(e,ot,o),a(e,pe,o),l(pe,cl),at=!0},p:Rl,i(e){at||(v(W.$$.fragment,e),v(B.$$.fragment,e),v(M.$$.fragment,e),v(U.$$.fragment,e),v(J.$$.fragment,e),v(z.$$.fragment,e),v(G.$$.fragment,e),v(Q.$$.fragment,e),v(R.$$.fragment,e),v(V.$$.fragment,e),v(X.$$.fragment,e),v(Z.$$.fragment,e),at=!0)},o(e){w(W.$$.fragment,e),w(B.$$.fragment,e),w(M.$$.fragment,e),w(U.$$.fragment,e),w(J.$$.fragment,e),w(z.$$.fragment,e),w(G.$$.fragment,e),w(Q.$$.fragment,e),w(R.$$.fragment,e),w(V.$$.fragment,e),w(X.$$.fragment,e),w(Z.$$.fragment,e),at=!1},d(e){t(g),e&&t(ee),e&&t(u),$(W),e&&t(Ie),e&&t(te),e&&t(Oe),e&&t(_),e&&t(Ce),e&&t(le),e&&t(Ne),e&&t(P),$(B),e&&t(Se),e&&t(I),e&&t(De),e&&t(oe),e&&t(je),$(M,e),e&&t(qe),e&&t(ae),e&&t(He),$(U,e),e&&t(We),e&&t(ie),e&&t(Ye),$(J,e),e&&t(Fe),e&&t(A),$(z),e&&t(Be),e&&t(C),e&&t(Le),$(G,e),e&&t(Me),e&&t(N),e&&t(Ue),e&&t(E),e&&t(Je),e&&t(ne),e&&t(ze),$(Q,e),e&&t(Ge),e&&t(re),e&&t(Ke),e&&t(T),$(R),e&&t(Qe),e&&t(D),e&&t(Re),$(V,e),e&&t(Ve),e&&t(se),e&&t(Xe),$(X,e),e&&t(Ze),e&&t(j),e&&t(et),e&&t(q),e&&t(tt),e&&t(k),e&&t(lt),$(Z,e),e&&t(ot),e&&t(pe)}}}const Xl={local:"installation",sections:[{local:"installation-with-pip",title:"Installation with pip"},{local:"installing-from-source",title:"Installing from source"},{local:"editable-install",title:"Editable install"}],title:"Installation"};function Zl(yt,g,ee){let{fw:u}=g;return yt.$$set=b=>{"fw"in b&&ee(0,u=b.fw)},[u]}class oo extends zl{constructor(g){super();Gl(this,g,Zl,Vl,Kl,{fw:0})}}export{oo as default,Xl as metadata};
