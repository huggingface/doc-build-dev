import{S as Ls,i as Rs,s as qs,e as s,k as h,w as m,t as l,M as Ss,c as a,d as o,m as f,a as r,x as y,h as i,b as d,F as t,g as c,y as v,L as Ns,q as _,o as b,B as k,v as js}from"../chunks/vendor-6b77c823.js";import{I as $t}from"../chunks/IconCopyLink-7a11ce68.js";import{C}from"../chunks/CodeBlock-3a8b25a8.js";function Ms(Ai){let x,Et,D,S,Le,z,Ao,Re,Po,wt,me,To,gt,w,qe,Co,xo,Se,Do,Io,Ne,Oo,Lo,je,Ro,At,ye,qo,Pt,ve,So,Tt,G,Ct,_e,No,xt,Y,Dt,be,jo,It,I,N,Me,K,Mo,Be,Bo,Ot,A,Fo,Fe,Ho,Wo,He,Uo,Jo,Lt,ke,zo,Rt,Q,qt,$e,Go,St,g,We,Yo,Ko,Ue,Qo,Vo,Je,Xo,Zo,ze,el,Nt,j,tl,Ge,ol,ll,jt,V,Mt,Ee,il,Bt,O,M,Ye,X,sl,Ke,al,Ft,P,rl,Qe,nl,cl,Ve,hl,fl,Ht,Z,Wt,we,dl,Ut,L,B,Xe,ee,pl,Ze,ul,Jt,p,ml,et,yl,vl,tt,_l,bl,ot,kl,$l,lt,El,wl,it,gl,Al,st,Pl,Tl,zt,te,Gt,T,Cl,at,xl,Dl,rt,Il,Ol,Yt,oe,Kt,ge,Ll,Qt,le,Vt,Ae,Rl,Xt,R,F,nt,ie,ql,ct,Sl,Zt,H,Nl,ht,jl,Ml,eo,se,to,Pe,Bl,oo,u,ae,Fl,ft,Hl,Wl,Ul,q,Jl,dt,zl,Gl,pt,Yl,Kl,Ql,re,Vl,ut,Xl,Zl,ei,ne,ti,mt,oi,li,ii,ce,si,yt,ai,ri,ni,he,ci,vt,hi,fi,di,fe,pi,_t,ui,mi,lo,Te,yi,io,de,so,Ce,vi,ao,W,pe,_i,bt,bi,ki,$i,ue,Ei,kt,wi,gi,ro;return z=new $t({}),G=new C({props:{code:"pip install transformers[dev]",highlighted:"pip install transformers[dev]"}}),Y=new C({props:{code:"pip install -e .[dev]",highlighted:"pip install -e .[dev]"}}),K=new $t({}),Q=new C({props:{code:"python utils/tests_fetcher.py",highlighted:"python utils/tests_fetcher.py"}}),V=new C({props:{code:"python -m pytest -n 8 --dist=loadfile -rA -s $(cat test_list.txt)",highlighted:'python -m pytest -n 8 --dist=loadfile -rA -s $(<span class="hljs-built_in">cat</span> test_list.txt)'}}),X=new $t({}),Z=new C({props:{code:"make html",highlighted:"make html"}}),ee=new $t({}),te=new C({props:{code:"make style",highlighted:"make style"}}),oe=new C({props:{code:"make quality",highlighted:"make quality"}}),le=new C({props:{code:"make fixup",highlighted:"make fixup"}}),ie=new $t({}),se=new C({props:{code:"make repo-consistency",highlighted:"make repo-consistency"}}),de=new C({props:{code:"make fix-copies",highlighted:"make fix-copies"}}),{c(){x=s("meta"),Et=h(),D=s("h1"),S=s("a"),Le=s("span"),m(z.$$.fragment),Ao=h(),Re=s("span"),Po=l("Checks on a Pull Request"),wt=h(),me=s("p"),To=l("When you open a pull request on \u{1F917} Transformers, a fair number of checks will be run to make sure the patch you are adding is not breaking anything existing. Those checks are of four types:"),gt=h(),w=s("ul"),qe=s("li"),Co=l("regular tests"),xo=h(),Se=s("li"),Do=l("documentation build"),Io=h(),Ne=s("li"),Oo=l("code and documentation style"),Lo=h(),je=s("li"),Ro=l("general repository consistency"),At=h(),ye=s("p"),qo=l("In this document, we will take a stab at explaining what those various checks are and the reason behind them, as well as how to debug them locally if one of them fails on your PR."),Pt=h(),ve=s("p"),So=l("Note that they all require you to have a dev install:"),Tt=h(),m(G.$$.fragment),Ct=h(),_e=s("p"),No=l("or for an editable install:"),xt=h(),m(Y.$$.fragment),Dt=h(),be=s("p"),jo=l("inside the Transformers repo."),It=h(),I=s("h2"),N=s("a"),Me=s("span"),m(K.$$.fragment),Mo=h(),Be=s("span"),Bo=l("Tests"),Ot=h(),A=s("p"),Fo=l("All the jobs that begin with "),Fe=s("code"),Ho=l("ci/circleci: run_tests_"),Wo=l(" run parts of the Transformers testing suite. Each of those jobs focuses on a part of the library in a certain environment: for instance "),He=s("code"),Uo=l("ci/circleci: run_tests_pipelines_tf"),Jo=l(" runs the pipelines test in an environment where TensorFlow only is installed."),Lt=h(),ke=s("p"),zo=l("Note that to avoid running tests when there is no real change in the modules they are testing, only part of the test suite is run each time: a utility is run to determine the differences in the library between before and after the PR (what GitHub shows you in the \u201CFiles changes\u201D tab) and picks the tests impacted by that diff. That utility can be run locally with:"),Rt=h(),m(Q.$$.fragment),qt=h(),$e=s("p"),Go=l("from the root of the Transformers repo. It will:"),St=h(),g=s("ol"),We=s("li"),Yo=l("Check for each file in the diff if the changes are in the code or only in comments or docstrings. Only the files with real code changes are kept."),Ko=h(),Ue=s("li"),Qo=l("Build an internal map that gives for each file of the source code of the library all the files it recursively impacts. Module A is said to impact module B if module B imports module A. For the recursive impact, we need a chain of modules going from module A to module B in which each module imports the previous one."),Vo=h(),Je=s("li"),Xo=l("Apply this map on the files gathered in step 1, which  gives us the list of model files impacted by the PR."),Zo=h(),ze=s("li"),el=l("Map each of those files to their corresponding test file(s) and get the list of tests to run."),Nt=h(),j=s("p"),tl=l("When executing the script locally, you should get the results of step 1, 3 and 4 printed and thus know which tests are run. The script will also create a file named "),Ge=s("code"),ol=l("test_list.txt"),ll=l(" which contains the list of tests to run, and you can run them locally with the following command:"),jt=h(),m(V.$$.fragment),Mt=h(),Ee=s("p"),il=l("Just in case anything slipped through the cracks, the full test suite is also run daily."),Bt=h(),O=s("h2"),M=s("a"),Ye=s("span"),m(X.$$.fragment),sl=h(),Ke=s("span"),al=l("Documentation build"),Ft=h(),P=s("p"),rl=l("The job "),Qe=s("code"),nl=l("ci/circleci: build_doc"),cl=l(" runs a build of the documentation just to make sure everything will be okay once your PR is merged. If that steps fails, you can inspect it locally by going into the "),Ve=s("code"),hl=l("docs"),fl=l(" folder of the Transformers repo and then typing"),Ht=h(),m(Z.$$.fragment),Wt=h(),we=s("p"),dl=l("Sphinx is not known for its helpful error messages, so you might have to try a few things to really find the source of the error."),Ut=h(),L=s("h2"),B=s("a"),Xe=s("span"),m(ee.$$.fragment),pl=h(),Ze=s("span"),ul=l("Code and documentation style"),Jt=h(),p=s("p"),ml=l("Code formatting is applied to all the source files, the examples and the tests using "),et=s("code"),yl=l("black"),vl=l(" and "),tt=s("code"),_l=l("isort"),bl=l(". We also have a custom tool taking care of the formatting of docstrings and "),ot=s("code"),kl=l("rst"),$l=l(" files ("),lt=s("code"),El=l("utils/style_doc.py"),wl=l("), as well as the order of the lazy imports performed in the Transformers "),it=s("code"),gl=l("__init__.py"),Al=l(" files ("),st=s("code"),Pl=l("utils/custom_init_isort.py"),Tl=l("). All of this can be launched by executing"),zt=h(),m(te.$$.fragment),Gt=h(),T=s("p"),Cl=l("The CI checks those have been applied inside the "),at=s("code"),xl=l("ci/circleci: check_code_quality"),Dl=l(" check. It also runs "),rt=s("code"),Il=l("flake8"),Ol=l(", that will have a basic look at your code and will complain if it finds an undefined variable, or one that is not used. To run that check locally, use"),Yt=h(),m(oe.$$.fragment),Kt=h(),ge=s("p"),Ll=l("This can take a lot of time, so to run the same thing on only the files you modified in the current branch, run"),Qt=h(),m(le.$$.fragment),Vt=h(),Ae=s("p"),Rl=l("This last command will also run all the additional checks for the repository consistency. Let\u2019s have a look at them."),Xt=h(),R=s("h2"),F=s("a"),nt=s("span"),m(ie.$$.fragment),ql=h(),ct=s("span"),Sl=l("Repository consistency"),Zt=h(),H=s("p"),Nl=l("This regroups all the tests to make sure your PR leaves the repository in a good state, and is performed by the "),ht=s("code"),jl=l("ci/circleci: check_repository_consistency"),Ml=l(" check. You can locally run that check by executing the following:"),eo=h(),m(se.$$.fragment),to=h(),Pe=s("p"),Bl=l("This checks that:"),oo=h(),u=s("ul"),ae=s("li"),Fl=l("All objects added to the init are documented (performed by "),ft=s("code"),Hl=l("utils/check_repo.py"),Wl=l(")"),Ul=h(),q=s("li"),Jl=l("All "),dt=s("code"),zl=l("__init__.py"),Gl=l(" files have the same content in their two sections (performed by "),pt=s("code"),Yl=l("utils/check_inits.py"),Kl=l(")"),Ql=h(),re=s("li"),Vl=l("All code identified as a copy from another module is consistent with the original (performed by "),ut=s("code"),Xl=l("utils/check_copies.py"),Zl=l(")"),ei=h(),ne=s("li"),ti=l("All configuration classes have at least one valid checkpoint mentioned in their docstrings (performed by "),mt=s("code"),oi=l("utils/check_config_docstrings.py"),li=l(")"),ii=h(),ce=s("li"),si=l("The translations of the READMEs and the index of the doc have the same model list as the main README (performed by "),yt=s("code"),ai=l("utils/check_copies.py"),ri=l(")"),ni=h(),he=s("li"),ci=l("The auto-generated tables in the documentation are up to date (performed by "),vt=s("code"),hi=l("utils/check_table.py"),fi=l(")"),di=h(),fe=s("li"),pi=l("The library has all objects available even if not all optional dependencies are installed (performed by "),_t=s("code"),ui=l("utils/check_dummies.py"),mi=l(")"),lo=h(),Te=s("p"),yi=l("Should this check fail, the first two items require manual fixing, the last four can be fixed automatically for you by running the command"),io=h(),m(de.$$.fragment),so=h(),Ce=s("p"),vi=l("Additional checks concern PRs that add new models, mainly that:"),ao=h(),W=s("ul"),pe=s("li"),_i=l("All models added are in an Auto-mapping (performed by "),bt=s("code"),bi=l("utils/check_repo.py"),ki=l(")"),$i=h(),ue=s("li"),Ei=l("All models are properly tested (performed by "),kt=s("code"),wi=l("utils/check_repo.py"),gi=l(")"),this.h()},l(e){const n=Ss('[data-svelte="svelte-1phssyn"]',document.head);x=a(n,"META",{name:!0,content:!0}),n.forEach(o),Et=f(e),D=a(e,"H1",{class:!0});var no=r(D);S=a(no,"A",{id:!0,class:!0,href:!0});var Pi=r(S);Le=a(Pi,"SPAN",{});var Ti=r(Le);y(z.$$.fragment,Ti),Ti.forEach(o),Pi.forEach(o),Ao=f(no),Re=a(no,"SPAN",{});var Ci=r(Re);Po=i(Ci,"Checks on a Pull Request"),Ci.forEach(o),no.forEach(o),wt=f(e),me=a(e,"P",{});var xi=r(me);To=i(xi,"When you open a pull request on \u{1F917} Transformers, a fair number of checks will be run to make sure the patch you are adding is not breaking anything existing. Those checks are of four types:"),xi.forEach(o),gt=f(e),w=a(e,"UL",{});var U=r(w);qe=a(U,"LI",{});var Di=r(qe);Co=i(Di,"regular tests"),Di.forEach(o),xo=f(U),Se=a(U,"LI",{});var Ii=r(Se);Do=i(Ii,"documentation build"),Ii.forEach(o),Io=f(U),Ne=a(U,"LI",{});var Oi=r(Ne);Oo=i(Oi,"code and documentation style"),Oi.forEach(o),Lo=f(U),je=a(U,"LI",{});var Li=r(je);Ro=i(Li,"general repository consistency"),Li.forEach(o),U.forEach(o),At=f(e),ye=a(e,"P",{});var Ri=r(ye);qo=i(Ri,"In this document, we will take a stab at explaining what those various checks are and the reason behind them, as well as how to debug them locally if one of them fails on your PR."),Ri.forEach(o),Pt=f(e),ve=a(e,"P",{});var qi=r(ve);So=i(qi,"Note that they all require you to have a dev install:"),qi.forEach(o),Tt=f(e),y(G.$$.fragment,e),Ct=f(e),_e=a(e,"P",{});var Si=r(_e);No=i(Si,"or for an editable install:"),Si.forEach(o),xt=f(e),y(Y.$$.fragment,e),Dt=f(e),be=a(e,"P",{});var Ni=r(be);jo=i(Ni,"inside the Transformers repo."),Ni.forEach(o),It=f(e),I=a(e,"H2",{class:!0});var co=r(I);N=a(co,"A",{id:!0,class:!0,href:!0});var ji=r(N);Me=a(ji,"SPAN",{});var Mi=r(Me);y(K.$$.fragment,Mi),Mi.forEach(o),ji.forEach(o),Mo=f(co),Be=a(co,"SPAN",{});var Bi=r(Be);Bo=i(Bi,"Tests"),Bi.forEach(o),co.forEach(o),Ot=f(e),A=a(e,"P",{});var xe=r(A);Fo=i(xe,"All the jobs that begin with "),Fe=a(xe,"CODE",{});var Fi=r(Fe);Ho=i(Fi,"ci/circleci: run_tests_"),Fi.forEach(o),Wo=i(xe," run parts of the Transformers testing suite. Each of those jobs focuses on a part of the library in a certain environment: for instance "),He=a(xe,"CODE",{});var Hi=r(He);Uo=i(Hi,"ci/circleci: run_tests_pipelines_tf"),Hi.forEach(o),Jo=i(xe," runs the pipelines test in an environment where TensorFlow only is installed."),xe.forEach(o),Lt=f(e),ke=a(e,"P",{});var Wi=r(ke);zo=i(Wi,"Note that to avoid running tests when there is no real change in the modules they are testing, only part of the test suite is run each time: a utility is run to determine the differences in the library between before and after the PR (what GitHub shows you in the \u201CFiles changes\u201D tab) and picks the tests impacted by that diff. That utility can be run locally with:"),Wi.forEach(o),Rt=f(e),y(Q.$$.fragment,e),qt=f(e),$e=a(e,"P",{});var Ui=r($e);Go=i(Ui,"from the root of the Transformers repo. It will:"),Ui.forEach(o),St=f(e),g=a(e,"OL",{});var J=r(g);We=a(J,"LI",{});var Ji=r(We);Yo=i(Ji,"Check for each file in the diff if the changes are in the code or only in comments or docstrings. Only the files with real code changes are kept."),Ji.forEach(o),Ko=f(J),Ue=a(J,"LI",{});var zi=r(Ue);Qo=i(zi,"Build an internal map that gives for each file of the source code of the library all the files it recursively impacts. Module A is said to impact module B if module B imports module A. For the recursive impact, we need a chain of modules going from module A to module B in which each module imports the previous one."),zi.forEach(o),Vo=f(J),Je=a(J,"LI",{});var Gi=r(Je);Xo=i(Gi,"Apply this map on the files gathered in step 1, which  gives us the list of model files impacted by the PR."),Gi.forEach(o),Zo=f(J),ze=a(J,"LI",{});var Yi=r(ze);el=i(Yi,"Map each of those files to their corresponding test file(s) and get the list of tests to run."),Yi.forEach(o),J.forEach(o),Nt=f(e),j=a(e,"P",{});var ho=r(j);tl=i(ho,"When executing the script locally, you should get the results of step 1, 3 and 4 printed and thus know which tests are run. The script will also create a file named "),Ge=a(ho,"CODE",{});var Ki=r(Ge);ol=i(Ki,"test_list.txt"),Ki.forEach(o),ll=i(ho," which contains the list of tests to run, and you can run them locally with the following command:"),ho.forEach(o),jt=f(e),y(V.$$.fragment,e),Mt=f(e),Ee=a(e,"P",{});var Qi=r(Ee);il=i(Qi,"Just in case anything slipped through the cracks, the full test suite is also run daily."),Qi.forEach(o),Bt=f(e),O=a(e,"H2",{class:!0});var fo=r(O);M=a(fo,"A",{id:!0,class:!0,href:!0});var Vi=r(M);Ye=a(Vi,"SPAN",{});var Xi=r(Ye);y(X.$$.fragment,Xi),Xi.forEach(o),Vi.forEach(o),sl=f(fo),Ke=a(fo,"SPAN",{});var Zi=r(Ke);al=i(Zi,"Documentation build"),Zi.forEach(o),fo.forEach(o),Ft=f(e),P=a(e,"P",{});var De=r(P);rl=i(De,"The job "),Qe=a(De,"CODE",{});var es=r(Qe);nl=i(es,"ci/circleci: build_doc"),es.forEach(o),cl=i(De," runs a build of the documentation just to make sure everything will be okay once your PR is merged. If that steps fails, you can inspect it locally by going into the "),Ve=a(De,"CODE",{});var ts=r(Ve);hl=i(ts,"docs"),ts.forEach(o),fl=i(De," folder of the Transformers repo and then typing"),De.forEach(o),Ht=f(e),y(Z.$$.fragment,e),Wt=f(e),we=a(e,"P",{});var os=r(we);dl=i(os,"Sphinx is not known for its helpful error messages, so you might have to try a few things to really find the source of the error."),os.forEach(o),Ut=f(e),L=a(e,"H2",{class:!0});var po=r(L);B=a(po,"A",{id:!0,class:!0,href:!0});var ls=r(B);Xe=a(ls,"SPAN",{});var is=r(Xe);y(ee.$$.fragment,is),is.forEach(o),ls.forEach(o),pl=f(po),Ze=a(po,"SPAN",{});var ss=r(Ze);ul=i(ss,"Code and documentation style"),ss.forEach(o),po.forEach(o),Jt=f(e),p=a(e,"P",{});var $=r(p);ml=i($,"Code formatting is applied to all the source files, the examples and the tests using "),et=a($,"CODE",{});var as=r(et);yl=i(as,"black"),as.forEach(o),vl=i($," and "),tt=a($,"CODE",{});var rs=r(tt);_l=i(rs,"isort"),rs.forEach(o),bl=i($,". We also have a custom tool taking care of the formatting of docstrings and "),ot=a($,"CODE",{});var ns=r(ot);kl=i(ns,"rst"),ns.forEach(o),$l=i($," files ("),lt=a($,"CODE",{});var cs=r(lt);El=i(cs,"utils/style_doc.py"),cs.forEach(o),wl=i($,"), as well as the order of the lazy imports performed in the Transformers "),it=a($,"CODE",{});var hs=r(it);gl=i(hs,"__init__.py"),hs.forEach(o),Al=i($," files ("),st=a($,"CODE",{});var fs=r(st);Pl=i(fs,"utils/custom_init_isort.py"),fs.forEach(o),Tl=i($,"). All of this can be launched by executing"),$.forEach(o),zt=f(e),y(te.$$.fragment,e),Gt=f(e),T=a(e,"P",{});var Ie=r(T);Cl=i(Ie,"The CI checks those have been applied inside the "),at=a(Ie,"CODE",{});var ds=r(at);xl=i(ds,"ci/circleci: check_code_quality"),ds.forEach(o),Dl=i(Ie," check. It also runs "),rt=a(Ie,"CODE",{});var ps=r(rt);Il=i(ps,"flake8"),ps.forEach(o),Ol=i(Ie,", that will have a basic look at your code and will complain if it finds an undefined variable, or one that is not used. To run that check locally, use"),Ie.forEach(o),Yt=f(e),y(oe.$$.fragment,e),Kt=f(e),ge=a(e,"P",{});var us=r(ge);Ll=i(us,"This can take a lot of time, so to run the same thing on only the files you modified in the current branch, run"),us.forEach(o),Qt=f(e),y(le.$$.fragment,e),Vt=f(e),Ae=a(e,"P",{});var ms=r(Ae);Rl=i(ms,"This last command will also run all the additional checks for the repository consistency. Let\u2019s have a look at them."),ms.forEach(o),Xt=f(e),R=a(e,"H2",{class:!0});var uo=r(R);F=a(uo,"A",{id:!0,class:!0,href:!0});var ys=r(F);nt=a(ys,"SPAN",{});var vs=r(nt);y(ie.$$.fragment,vs),vs.forEach(o),ys.forEach(o),ql=f(uo),ct=a(uo,"SPAN",{});var _s=r(ct);Sl=i(_s,"Repository consistency"),_s.forEach(o),uo.forEach(o),Zt=f(e),H=a(e,"P",{});var mo=r(H);Nl=i(mo,"This regroups all the tests to make sure your PR leaves the repository in a good state, and is performed by the "),ht=a(mo,"CODE",{});var bs=r(ht);jl=i(bs,"ci/circleci: check_repository_consistency"),bs.forEach(o),Ml=i(mo," check. You can locally run that check by executing the following:"),mo.forEach(o),eo=f(e),y(se.$$.fragment,e),to=f(e),Pe=a(e,"P",{});var ks=r(Pe);Bl=i(ks,"This checks that:"),ks.forEach(o),oo=f(e),u=a(e,"UL",{});var E=r(u);ae=a(E,"LI",{});var yo=r(ae);Fl=i(yo,"All objects added to the init are documented (performed by "),ft=a(yo,"CODE",{});var $s=r(ft);Hl=i($s,"utils/check_repo.py"),$s.forEach(o),Wl=i(yo,")"),yo.forEach(o),Ul=f(E),q=a(E,"LI",{});var Oe=r(q);Jl=i(Oe,"All "),dt=a(Oe,"CODE",{});var Es=r(dt);zl=i(Es,"__init__.py"),Es.forEach(o),Gl=i(Oe," files have the same content in their two sections (performed by "),pt=a(Oe,"CODE",{});var ws=r(pt);Yl=i(ws,"utils/check_inits.py"),ws.forEach(o),Kl=i(Oe,")"),Oe.forEach(o),Ql=f(E),re=a(E,"LI",{});var vo=r(re);Vl=i(vo,"All code identified as a copy from another module is consistent with the original (performed by "),ut=a(vo,"CODE",{});var gs=r(ut);Xl=i(gs,"utils/check_copies.py"),gs.forEach(o),Zl=i(vo,")"),vo.forEach(o),ei=f(E),ne=a(E,"LI",{});var _o=r(ne);ti=i(_o,"All configuration classes have at least one valid checkpoint mentioned in their docstrings (performed by "),mt=a(_o,"CODE",{});var As=r(mt);oi=i(As,"utils/check_config_docstrings.py"),As.forEach(o),li=i(_o,")"),_o.forEach(o),ii=f(E),ce=a(E,"LI",{});var bo=r(ce);si=i(bo,"The translations of the READMEs and the index of the doc have the same model list as the main README (performed by "),yt=a(bo,"CODE",{});var Ps=r(yt);ai=i(Ps,"utils/check_copies.py"),Ps.forEach(o),ri=i(bo,")"),bo.forEach(o),ni=f(E),he=a(E,"LI",{});var ko=r(he);ci=i(ko,"The auto-generated tables in the documentation are up to date (performed by "),vt=a(ko,"CODE",{});var Ts=r(vt);hi=i(Ts,"utils/check_table.py"),Ts.forEach(o),fi=i(ko,")"),ko.forEach(o),di=f(E),fe=a(E,"LI",{});var $o=r(fe);pi=i($o,"The library has all objects available even if not all optional dependencies are installed (performed by "),_t=a($o,"CODE",{});var Cs=r(_t);ui=i(Cs,"utils/check_dummies.py"),Cs.forEach(o),mi=i($o,")"),$o.forEach(o),E.forEach(o),lo=f(e),Te=a(e,"P",{});var xs=r(Te);yi=i(xs,"Should this check fail, the first two items require manual fixing, the last four can be fixed automatically for you by running the command"),xs.forEach(o),io=f(e),y(de.$$.fragment,e),so=f(e),Ce=a(e,"P",{});var Ds=r(Ce);vi=i(Ds,"Additional checks concern PRs that add new models, mainly that:"),Ds.forEach(o),ao=f(e),W=a(e,"UL",{});var Eo=r(W);pe=a(Eo,"LI",{});var wo=r(pe);_i=i(wo,"All models added are in an Auto-mapping (performed by "),bt=a(wo,"CODE",{});var Is=r(bt);bi=i(Is,"utils/check_repo.py"),Is.forEach(o),ki=i(wo,")"),wo.forEach(o),$i=f(Eo),ue=a(Eo,"LI",{});var go=r(ue);Ei=i(go,"All models are properly tested (performed by "),kt=a(go,"CODE",{});var Os=r(kt);wi=i(Os,"utils/check_repo.py"),Os.forEach(o),gi=i(go,")"),go.forEach(o),Eo.forEach(o),this.h()},h(){d(x,"name","hf:doc:metadata"),d(x,"content",JSON.stringify(Bs)),d(S,"id","checks-on-a-pull-request"),d(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(S,"href","#checks-on-a-pull-request"),d(D,"class","relative group"),d(N,"id","tests"),d(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(N,"href","#tests"),d(I,"class","relative group"),d(M,"id","documentation-build"),d(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(M,"href","#documentation-build"),d(O,"class","relative group"),d(B,"id","code-and-documentation-style"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#code-and-documentation-style"),d(L,"class","relative group"),d(F,"id","repository-consistency"),d(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(F,"href","#repository-consistency"),d(R,"class","relative group")},m(e,n){t(document.head,x),c(e,Et,n),c(e,D,n),t(D,S),t(S,Le),v(z,Le,null),t(D,Ao),t(D,Re),t(Re,Po),c(e,wt,n),c(e,me,n),t(me,To),c(e,gt,n),c(e,w,n),t(w,qe),t(qe,Co),t(w,xo),t(w,Se),t(Se,Do),t(w,Io),t(w,Ne),t(Ne,Oo),t(w,Lo),t(w,je),t(je,Ro),c(e,At,n),c(e,ye,n),t(ye,qo),c(e,Pt,n),c(e,ve,n),t(ve,So),c(e,Tt,n),v(G,e,n),c(e,Ct,n),c(e,_e,n),t(_e,No),c(e,xt,n),v(Y,e,n),c(e,Dt,n),c(e,be,n),t(be,jo),c(e,It,n),c(e,I,n),t(I,N),t(N,Me),v(K,Me,null),t(I,Mo),t(I,Be),t(Be,Bo),c(e,Ot,n),c(e,A,n),t(A,Fo),t(A,Fe),t(Fe,Ho),t(A,Wo),t(A,He),t(He,Uo),t(A,Jo),c(e,Lt,n),c(e,ke,n),t(ke,zo),c(e,Rt,n),v(Q,e,n),c(e,qt,n),c(e,$e,n),t($e,Go),c(e,St,n),c(e,g,n),t(g,We),t(We,Yo),t(g,Ko),t(g,Ue),t(Ue,Qo),t(g,Vo),t(g,Je),t(Je,Xo),t(g,Zo),t(g,ze),t(ze,el),c(e,Nt,n),c(e,j,n),t(j,tl),t(j,Ge),t(Ge,ol),t(j,ll),c(e,jt,n),v(V,e,n),c(e,Mt,n),c(e,Ee,n),t(Ee,il),c(e,Bt,n),c(e,O,n),t(O,M),t(M,Ye),v(X,Ye,null),t(O,sl),t(O,Ke),t(Ke,al),c(e,Ft,n),c(e,P,n),t(P,rl),t(P,Qe),t(Qe,nl),t(P,cl),t(P,Ve),t(Ve,hl),t(P,fl),c(e,Ht,n),v(Z,e,n),c(e,Wt,n),c(e,we,n),t(we,dl),c(e,Ut,n),c(e,L,n),t(L,B),t(B,Xe),v(ee,Xe,null),t(L,pl),t(L,Ze),t(Ze,ul),c(e,Jt,n),c(e,p,n),t(p,ml),t(p,et),t(et,yl),t(p,vl),t(p,tt),t(tt,_l),t(p,bl),t(p,ot),t(ot,kl),t(p,$l),t(p,lt),t(lt,El),t(p,wl),t(p,it),t(it,gl),t(p,Al),t(p,st),t(st,Pl),t(p,Tl),c(e,zt,n),v(te,e,n),c(e,Gt,n),c(e,T,n),t(T,Cl),t(T,at),t(at,xl),t(T,Dl),t(T,rt),t(rt,Il),t(T,Ol),c(e,Yt,n),v(oe,e,n),c(e,Kt,n),c(e,ge,n),t(ge,Ll),c(e,Qt,n),v(le,e,n),c(e,Vt,n),c(e,Ae,n),t(Ae,Rl),c(e,Xt,n),c(e,R,n),t(R,F),t(F,nt),v(ie,nt,null),t(R,ql),t(R,ct),t(ct,Sl),c(e,Zt,n),c(e,H,n),t(H,Nl),t(H,ht),t(ht,jl),t(H,Ml),c(e,eo,n),v(se,e,n),c(e,to,n),c(e,Pe,n),t(Pe,Bl),c(e,oo,n),c(e,u,n),t(u,ae),t(ae,Fl),t(ae,ft),t(ft,Hl),t(ae,Wl),t(u,Ul),t(u,q),t(q,Jl),t(q,dt),t(dt,zl),t(q,Gl),t(q,pt),t(pt,Yl),t(q,Kl),t(u,Ql),t(u,re),t(re,Vl),t(re,ut),t(ut,Xl),t(re,Zl),t(u,ei),t(u,ne),t(ne,ti),t(ne,mt),t(mt,oi),t(ne,li),t(u,ii),t(u,ce),t(ce,si),t(ce,yt),t(yt,ai),t(ce,ri),t(u,ni),t(u,he),t(he,ci),t(he,vt),t(vt,hi),t(he,fi),t(u,di),t(u,fe),t(fe,pi),t(fe,_t),t(_t,ui),t(fe,mi),c(e,lo,n),c(e,Te,n),t(Te,yi),c(e,io,n),v(de,e,n),c(e,so,n),c(e,Ce,n),t(Ce,vi),c(e,ao,n),c(e,W,n),t(W,pe),t(pe,_i),t(pe,bt),t(bt,bi),t(pe,ki),t(W,$i),t(W,ue),t(ue,Ei),t(ue,kt),t(kt,wi),t(ue,gi),ro=!0},p:Ns,i(e){ro||(_(z.$$.fragment,e),_(G.$$.fragment,e),_(Y.$$.fragment,e),_(K.$$.fragment,e),_(Q.$$.fragment,e),_(V.$$.fragment,e),_(X.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(te.$$.fragment,e),_(oe.$$.fragment,e),_(le.$$.fragment,e),_(ie.$$.fragment,e),_(se.$$.fragment,e),_(de.$$.fragment,e),ro=!0)},o(e){b(z.$$.fragment,e),b(G.$$.fragment,e),b(Y.$$.fragment,e),b(K.$$.fragment,e),b(Q.$$.fragment,e),b(V.$$.fragment,e),b(X.$$.fragment,e),b(Z.$$.fragment,e),b(ee.$$.fragment,e),b(te.$$.fragment,e),b(oe.$$.fragment,e),b(le.$$.fragment,e),b(ie.$$.fragment,e),b(se.$$.fragment,e),b(de.$$.fragment,e),ro=!1},d(e){o(x),e&&o(Et),e&&o(D),k(z),e&&o(wt),e&&o(me),e&&o(gt),e&&o(w),e&&o(At),e&&o(ye),e&&o(Pt),e&&o(ve),e&&o(Tt),k(G,e),e&&o(Ct),e&&o(_e),e&&o(xt),k(Y,e),e&&o(Dt),e&&o(be),e&&o(It),e&&o(I),k(K),e&&o(Ot),e&&o(A),e&&o(Lt),e&&o(ke),e&&o(Rt),k(Q,e),e&&o(qt),e&&o($e),e&&o(St),e&&o(g),e&&o(Nt),e&&o(j),e&&o(jt),k(V,e),e&&o(Mt),e&&o(Ee),e&&o(Bt),e&&o(O),k(X),e&&o(Ft),e&&o(P),e&&o(Ht),k(Z,e),e&&o(Wt),e&&o(we),e&&o(Ut),e&&o(L),k(ee),e&&o(Jt),e&&o(p),e&&o(zt),k(te,e),e&&o(Gt),e&&o(T),e&&o(Yt),k(oe,e),e&&o(Kt),e&&o(ge),e&&o(Qt),k(le,e),e&&o(Vt),e&&o(Ae),e&&o(Xt),e&&o(R),k(ie),e&&o(Zt),e&&o(H),e&&o(eo),k(se,e),e&&o(to),e&&o(Pe),e&&o(oo),e&&o(u),e&&o(lo),e&&o(Te),e&&o(io),k(de,e),e&&o(so),e&&o(Ce),e&&o(ao),e&&o(W)}}}const Bs={local:"checks-on-a-pull-request",sections:[{local:"tests",title:"Tests"},{local:"documentation-build",title:"Documentation build"},{local:"code-and-documentation-style",title:"Code and documentation style"},{local:"repository-consistency",title:"Repository consistency"}],title:"Checks on a Pull Request"};function Fs(Ai){return js(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Js extends Ls{constructor(x){super();Rs(this,x,Fs,Ms,qs,{})}}export{Js as default,Bs as metadata};
