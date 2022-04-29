import{S as xt,i as kt,s as St,e as a,k as m,w as u,t as c,M as Dt,c as s,d as r,m as f,a as o,x as d,h as p,b as l,F as t,g as i,y as v,L as Tt,q as h,o as _,B as g,v as At}from"../../chunks/vendor-6b77c823.js";import{D as b}from"../../chunks/Docstring-1088f2fb.js";import{I as Ae}from"../../chunks/IconCopyLink-7a11ce68.js";function Lt(Jr){let y,Le,E,I,ce,j,ir,pe,mr,Ie,M,fr,ue,cr,pr,Me,ie,ur,Ve,w,V,de,G,dr,ve,vr,ze,N,H,hr,he,_r,Ue,P,F,gr,x,$r,_e,br,yr,z,Er,ge,wr,Nr,Pr,qe,k,R,xr,S,kr,$e,Sr,Dr,U,Tr,be,Ar,Lr,Ir,Ce,D,q,ye,W,Mr,Ee,Vr,Oe,J,K,Be,Q,X,je,Y,Z,Ge,ee,re,He,te,ae,Fe,T,C,we,se,zr,Ne,Ur,Re,$,oe,qr,Pe,Cr,Or,xe,Br,jr,ke,Gr,We,A,O,Se,ne,Hr,De,Fr,Je,L,le,Rr,Te,Wr,Ke;return j=new Ae({}),G=new Ae({}),H=new b({props:{name:"class transformers.utils.ExplicitEnum",anchor:"transformers.utils.ExplicitEnum",parameters:[{name:"value",val:""},{name:"names",val:" = None"},{name:"module",val:" = None"},{name:"qualname",val:" = None"},{name:"type",val:" = None"},{name:"start",val:" = 1"}],source:"https://github.com/huggingface/transformers/blob/vr_17012/src/transformers/utils/generic.py#L242"}}),F=new b({props:{name:"class transformers.utils.PaddingStrategy",anchor:"transformers.utils.PaddingStrategy",parameters:[{name:"value",val:""},{name:"names",val:" = None"},{name:"module",val:" = None"},{name:"qualname",val:" = None"},{name:"type",val:" = None"},{name:"start",val:" = 1"}],source:"https://github.com/huggingface/transformers/blob/vr_17012/src/transformers/utils/generic.py#L254"}}),R=new b({props:{name:"class transformers.TensorType",anchor:"transformers.TensorType",parameters:[{name:"value",val:""},{name:"names",val:" = None"},{name:"module",val:" = None"},{name:"qualname",val:" = None"},{name:"type",val:" = None"},{name:"start",val:" = 1"}],source:"https://github.com/huggingface/transformers/blob/vr_17012/src/transformers/utils/generic.py#L265"}}),W=new Ae({}),K=new b({props:{name:"transformers.add_start_docstrings",anchor:"transformers.add_start_docstrings",parameters:[{name:"*docstr",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17012/src/transformers/utils/doc.py#L23"}}),X=new b({props:{name:"transformers.utils.add_start_docstrings_to_model_forward",anchor:"transformers.utils.add_start_docstrings_to_model_forward",parameters:[{name:"*docstr",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17012/src/transformers/utils/doc.py#L31"}}),Z=new b({props:{name:"transformers.add_end_docstrings",anchor:"transformers.add_end_docstrings",parameters:[{name:"*docstr",val:""}],source:"https://github.com/huggingface/transformers/blob/vr_17012/src/transformers/utils/doc.py#L53"}}),re=new b({props:{name:"transformers.utils.add_code_sample_docstrings",anchor:"transformers.utils.add_code_sample_docstrings",parameters:[{name:"*docstr",val:""},{name:"processor_class",val:" = None"},{name:"checkpoint",val:" = None"},{name:"output_type",val:" = None"},{name:"config_class",val:" = None"},{name:"mask",val:" = '[MASK]'"},{name:"qa_target_start_index",val:" = 14"},{name:"qa_target_end_index",val:" = 15"},{name:"model_cls",val:" = None"},{name:"modality",val:" = None"},{name:"expected_output",val:" = ''"},{name:"expected_loss",val:" = ''"}],source:"https://github.com/huggingface/transformers/blob/vr_17012/src/transformers/utils/doc.py#L1053"}}),ae=new b({props:{name:"transformers.utils.replace_return_docstrings",anchor:"transformers.utils.replace_return_docstrings",parameters:[{name:"output_type",val:" = None"},{name:"config_class",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17012/src/transformers/utils/doc.py#L1132"}}),se=new Ae({}),oe=new b({props:{name:"class transformers.utils.cached_property",anchor:"transformers.utils.cached_property",parameters:[{name:"fget",val:" = None"},{name:"fset",val:" = None"},{name:"fdel",val:" = None"},{name:"doc",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17012/src/transformers/utils/generic.py#L30"}}),ne=new Ae({}),le=new b({props:{name:"class transformers._LazyModule",anchor:"transformers._LazyModule",parameters:[{name:"name",val:""},{name:"module_file",val:""},{name:"import_structure",val:""},{name:"module_spec",val:" = None"},{name:"extra_objects",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17012/src/transformers/utils/import_utils.py#L812"}}),{c(){y=a("meta"),Le=m(),E=a("h1"),I=a("a"),ce=a("span"),u(j.$$.fragment),ir=m(),pe=a("span"),mr=c("General Utilities"),Ie=m(),M=a("p"),fr=c("This page lists all of Transformers general utility functions that are found in the file "),ue=a("code"),cr=c("utils.py"),pr=c("."),Me=m(),ie=a("p"),ur=c("Most of those are only useful if you are studying the general code in the library."),Ve=m(),w=a("h2"),V=a("a"),de=a("span"),u(G.$$.fragment),dr=m(),ve=a("span"),vr=c("Enums and namedtuples"),ze=m(),N=a("div"),u(H.$$.fragment),hr=m(),he=a("p"),_r=c("Enum with more explicit error message for missing values."),Ue=m(),P=a("div"),u(F.$$.fragment),gr=m(),x=a("p"),$r=c("Possible values for the "),_e=a("code"),br=c("padding"),yr=c(" argument in "),z=a("a"),Er=c("PreTrainedTokenizerBase."),ge=a("strong"),wr=c("call"),Nr=c("()"),Pr=c(`. Useful for tab-completion in an
IDE.`),qe=m(),k=a("div"),u(R.$$.fragment),xr=m(),S=a("p"),kr=c("Possible values for the "),$e=a("code"),Sr=c("return_tensors"),Dr=c(" argument in "),U=a("a"),Tr=c("PreTrainedTokenizerBase."),be=a("strong"),Ar=c("call"),Lr=c("()"),Ir=c(`. Useful for
tab-completion in an IDE.`),Ce=m(),D=a("h2"),q=a("a"),ye=a("span"),u(W.$$.fragment),Mr=m(),Ee=a("span"),Vr=c("Special Decorators"),Oe=m(),J=a("div"),u(K.$$.fragment),Be=m(),Q=a("div"),u(X.$$.fragment),je=m(),Y=a("div"),u(Z.$$.fragment),Ge=m(),ee=a("div"),u(re.$$.fragment),He=m(),te=a("div"),u(ae.$$.fragment),Fe=m(),T=a("h2"),C=a("a"),we=a("span"),u(se.$$.fragment),zr=m(),Ne=a("span"),Ur=c("Special Properties"),Re=m(),$=a("div"),u(oe.$$.fragment),qr=m(),Pe=a("p"),Cr=c("Descriptor that mimics @property but caches output in member variable."),Or=m(),xe=a("p"),Br=c("From tensorflow_datasets"),jr=m(),ke=a("p"),Gr=c("Built-in in functools from Python 3.8."),We=m(),A=a("h2"),O=a("a"),Se=a("span"),u(ne.$$.fragment),Hr=m(),De=a("span"),Fr=c("Other Utilities"),Je=m(),L=a("div"),u(le.$$.fragment),Rr=m(),Te=a("p"),Wr=c("Module class that surfaces all objects but only performs associated imports when the objects are requested."),this.h()},l(e){const n=Dt('[data-svelte="svelte-1phssyn"]',document.head);y=s(n,"META",{name:!0,content:!0}),n.forEach(r),Le=f(e),E=s(e,"H1",{class:!0});var Qe=o(E);I=s(Qe,"A",{id:!0,class:!0,href:!0});var Kr=o(I);ce=s(Kr,"SPAN",{});var Qr=o(ce);d(j.$$.fragment,Qr),Qr.forEach(r),Kr.forEach(r),ir=f(Qe),pe=s(Qe,"SPAN",{});var Xr=o(pe);mr=p(Xr,"General Utilities"),Xr.forEach(r),Qe.forEach(r),Ie=f(e),M=s(e,"P",{});var Xe=o(M);fr=p(Xe,"This page lists all of Transformers general utility functions that are found in the file "),ue=s(Xe,"CODE",{});var Yr=o(ue);cr=p(Yr,"utils.py"),Yr.forEach(r),pr=p(Xe,"."),Xe.forEach(r),Me=f(e),ie=s(e,"P",{});var Zr=o(ie);ur=p(Zr,"Most of those are only useful if you are studying the general code in the library."),Zr.forEach(r),Ve=f(e),w=s(e,"H2",{class:!0});var Ye=o(w);V=s(Ye,"A",{id:!0,class:!0,href:!0});var et=o(V);de=s(et,"SPAN",{});var rt=o(de);d(G.$$.fragment,rt),rt.forEach(r),et.forEach(r),dr=f(Ye),ve=s(Ye,"SPAN",{});var tt=o(ve);vr=p(tt,"Enums and namedtuples"),tt.forEach(r),Ye.forEach(r),ze=f(e),N=s(e,"DIV",{class:!0});var Ze=o(N);d(H.$$.fragment,Ze),hr=f(Ze),he=s(Ze,"P",{});var at=o(he);_r=p(at,"Enum with more explicit error message for missing values."),at.forEach(r),Ze.forEach(r),Ue=f(e),P=s(e,"DIV",{class:!0});var er=o(P);d(F.$$.fragment,er),gr=f(er),x=s(er,"P",{});var me=o(x);$r=p(me,"Possible values for the "),_e=s(me,"CODE",{});var st=o(_e);br=p(st,"padding"),st.forEach(r),yr=p(me," argument in "),z=s(me,"A",{href:!0});var rr=o(z);Er=p(rr,"PreTrainedTokenizerBase."),ge=s(rr,"STRONG",{});var ot=o(ge);wr=p(ot,"call"),ot.forEach(r),Nr=p(rr,"()"),rr.forEach(r),Pr=p(me,`. Useful for tab-completion in an
IDE.`),me.forEach(r),er.forEach(r),qe=f(e),k=s(e,"DIV",{class:!0});var tr=o(k);d(R.$$.fragment,tr),xr=f(tr),S=s(tr,"P",{});var fe=o(S);kr=p(fe,"Possible values for the "),$e=s(fe,"CODE",{});var nt=o($e);Sr=p(nt,"return_tensors"),nt.forEach(r),Dr=p(fe," argument in "),U=s(fe,"A",{href:!0});var ar=o(U);Tr=p(ar,"PreTrainedTokenizerBase."),be=s(ar,"STRONG",{});var lt=o(be);Ar=p(lt,"call"),lt.forEach(r),Lr=p(ar,"()"),ar.forEach(r),Ir=p(fe,`. Useful for
tab-completion in an IDE.`),fe.forEach(r),tr.forEach(r),Ce=f(e),D=s(e,"H2",{class:!0});var sr=o(D);q=s(sr,"A",{id:!0,class:!0,href:!0});var it=o(q);ye=s(it,"SPAN",{});var mt=o(ye);d(W.$$.fragment,mt),mt.forEach(r),it.forEach(r),Mr=f(sr),Ee=s(sr,"SPAN",{});var ft=o(Ee);Vr=p(ft,"Special Decorators"),ft.forEach(r),sr.forEach(r),Oe=f(e),J=s(e,"DIV",{class:!0});var ct=o(J);d(K.$$.fragment,ct),ct.forEach(r),Be=f(e),Q=s(e,"DIV",{class:!0});var pt=o(Q);d(X.$$.fragment,pt),pt.forEach(r),je=f(e),Y=s(e,"DIV",{class:!0});var ut=o(Y);d(Z.$$.fragment,ut),ut.forEach(r),Ge=f(e),ee=s(e,"DIV",{class:!0});var dt=o(ee);d(re.$$.fragment,dt),dt.forEach(r),He=f(e),te=s(e,"DIV",{class:!0});var vt=o(te);d(ae.$$.fragment,vt),vt.forEach(r),Fe=f(e),T=s(e,"H2",{class:!0});var or=o(T);C=s(or,"A",{id:!0,class:!0,href:!0});var ht=o(C);we=s(ht,"SPAN",{});var _t=o(we);d(se.$$.fragment,_t),_t.forEach(r),ht.forEach(r),zr=f(or),Ne=s(or,"SPAN",{});var gt=o(Ne);Ur=p(gt,"Special Properties"),gt.forEach(r),or.forEach(r),Re=f(e),$=s(e,"DIV",{class:!0});var B=o($);d(oe.$$.fragment,B),qr=f(B),Pe=s(B,"P",{});var $t=o(Pe);Cr=p($t,"Descriptor that mimics @property but caches output in member variable."),$t.forEach(r),Or=f(B),xe=s(B,"P",{});var bt=o(xe);Br=p(bt,"From tensorflow_datasets"),bt.forEach(r),jr=f(B),ke=s(B,"P",{});var yt=o(ke);Gr=p(yt,"Built-in in functools from Python 3.8."),yt.forEach(r),B.forEach(r),We=f(e),A=s(e,"H2",{class:!0});var nr=o(A);O=s(nr,"A",{id:!0,class:!0,href:!0});var Et=o(O);Se=s(Et,"SPAN",{});var wt=o(Se);d(ne.$$.fragment,wt),wt.forEach(r),Et.forEach(r),Hr=f(nr),De=s(nr,"SPAN",{});var Nt=o(De);Fr=p(Nt,"Other Utilities"),Nt.forEach(r),nr.forEach(r),Je=f(e),L=s(e,"DIV",{class:!0});var lr=o(L);d(le.$$.fragment,lr),Rr=f(lr),Te=s(lr,"P",{});var Pt=o(Te);Wr=p(Pt,"Module class that surfaces all objects but only performs associated imports when the objects are requested."),Pt.forEach(r),lr.forEach(r),this.h()},h(){l(y,"name","hf:doc:metadata"),l(y,"content",JSON.stringify(It)),l(I,"id","general-utilities"),l(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(I,"href","#general-utilities"),l(E,"class","relative group"),l(V,"id","transformers.utils.ExplicitEnum"),l(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(V,"href","#transformers.utils.ExplicitEnum"),l(w,"class","relative group"),l(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(z,"href","/docs/transformers/pr_17012/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),l(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(U,"href","/docs/transformers/pr_17012/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),l(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(q,"id","transformers.add_start_docstrings"),l(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(q,"href","#transformers.add_start_docstrings"),l(D,"class","relative group"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(C,"id","transformers.utils.cached_property"),l(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(C,"href","#transformers.utils.cached_property"),l(T,"class","relative group"),l($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(O,"id","transformers._LazyModule"),l(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(O,"href","#transformers._LazyModule"),l(A,"class","relative group"),l(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){t(document.head,y),i(e,Le,n),i(e,E,n),t(E,I),t(I,ce),v(j,ce,null),t(E,ir),t(E,pe),t(pe,mr),i(e,Ie,n),i(e,M,n),t(M,fr),t(M,ue),t(ue,cr),t(M,pr),i(e,Me,n),i(e,ie,n),t(ie,ur),i(e,Ve,n),i(e,w,n),t(w,V),t(V,de),v(G,de,null),t(w,dr),t(w,ve),t(ve,vr),i(e,ze,n),i(e,N,n),v(H,N,null),t(N,hr),t(N,he),t(he,_r),i(e,Ue,n),i(e,P,n),v(F,P,null),t(P,gr),t(P,x),t(x,$r),t(x,_e),t(_e,br),t(x,yr),t(x,z),t(z,Er),t(z,ge),t(ge,wr),t(z,Nr),t(x,Pr),i(e,qe,n),i(e,k,n),v(R,k,null),t(k,xr),t(k,S),t(S,kr),t(S,$e),t($e,Sr),t(S,Dr),t(S,U),t(U,Tr),t(U,be),t(be,Ar),t(U,Lr),t(S,Ir),i(e,Ce,n),i(e,D,n),t(D,q),t(q,ye),v(W,ye,null),t(D,Mr),t(D,Ee),t(Ee,Vr),i(e,Oe,n),i(e,J,n),v(K,J,null),i(e,Be,n),i(e,Q,n),v(X,Q,null),i(e,je,n),i(e,Y,n),v(Z,Y,null),i(e,Ge,n),i(e,ee,n),v(re,ee,null),i(e,He,n),i(e,te,n),v(ae,te,null),i(e,Fe,n),i(e,T,n),t(T,C),t(C,we),v(se,we,null),t(T,zr),t(T,Ne),t(Ne,Ur),i(e,Re,n),i(e,$,n),v(oe,$,null),t($,qr),t($,Pe),t(Pe,Cr),t($,Or),t($,xe),t(xe,Br),t($,jr),t($,ke),t(ke,Gr),i(e,We,n),i(e,A,n),t(A,O),t(O,Se),v(ne,Se,null),t(A,Hr),t(A,De),t(De,Fr),i(e,Je,n),i(e,L,n),v(le,L,null),t(L,Rr),t(L,Te),t(Te,Wr),Ke=!0},p:Tt,i(e){Ke||(h(j.$$.fragment,e),h(G.$$.fragment,e),h(H.$$.fragment,e),h(F.$$.fragment,e),h(R.$$.fragment,e),h(W.$$.fragment,e),h(K.$$.fragment,e),h(X.$$.fragment,e),h(Z.$$.fragment,e),h(re.$$.fragment,e),h(ae.$$.fragment,e),h(se.$$.fragment,e),h(oe.$$.fragment,e),h(ne.$$.fragment,e),h(le.$$.fragment,e),Ke=!0)},o(e){_(j.$$.fragment,e),_(G.$$.fragment,e),_(H.$$.fragment,e),_(F.$$.fragment,e),_(R.$$.fragment,e),_(W.$$.fragment,e),_(K.$$.fragment,e),_(X.$$.fragment,e),_(Z.$$.fragment,e),_(re.$$.fragment,e),_(ae.$$.fragment,e),_(se.$$.fragment,e),_(oe.$$.fragment,e),_(ne.$$.fragment,e),_(le.$$.fragment,e),Ke=!1},d(e){r(y),e&&r(Le),e&&r(E),g(j),e&&r(Ie),e&&r(M),e&&r(Me),e&&r(ie),e&&r(Ve),e&&r(w),g(G),e&&r(ze),e&&r(N),g(H),e&&r(Ue),e&&r(P),g(F),e&&r(qe),e&&r(k),g(R),e&&r(Ce),e&&r(D),g(W),e&&r(Oe),e&&r(J),g(K),e&&r(Be),e&&r(Q),g(X),e&&r(je),e&&r(Y),g(Z),e&&r(Ge),e&&r(ee),g(re),e&&r(He),e&&r(te),g(ae),e&&r(Fe),e&&r(T),g(se),e&&r(Re),e&&r($),g(oe),e&&r(We),e&&r(A),g(ne),e&&r(Je),e&&r(L),g(le)}}}const It={local:"general-utilities",sections:[{local:"transformers.utils.ExplicitEnum",title:"Enums and namedtuples"},{local:"transformers.add_start_docstrings",title:"Special Decorators"},{local:"transformers.utils.cached_property",title:"Special Properties"},{local:"transformers._LazyModule",title:"Other Utilities"}],title:"General Utilities"};function Mt(Jr){return At(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qt extends xt{constructor(y){super();kt(this,y,Mt,Lt,St,{})}}export{qt as default,It as metadata};
