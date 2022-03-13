import{S as Xs,i as Zs,s as Gs,e as l,k as h,w as u,t as i,M as Ks,c as o,d as t,m as p,a as r,x as v,h as n,b as d,F as a,g as c,y as $,q as w,o as y,B as g}from"../chunks/vendor-e67aec41.js";import{T as zs}from"../chunks/Tip-76459d1c.js";import{I as Ie}from"../chunks/IconCopyLink-ffd7f84e.js";import{C as V}from"../chunks/CodeBlock-e2bcf023.js";function Js(ee){let f,E,m,_,S,b,te,P;return{c(){f=l("p"),E=i("If you want to reuse a dataset from scratch, try setting the "),m=l("code"),_=i("download_mode"),S=i(" parameter in "),b=l("a"),te=i("datasets.load_dataset()"),P=i(" instead."),this.h()},l(x){f=o(x,"P",{});var A=r(f);E=n(A,"If you want to reuse a dataset from scratch, try setting the "),m=o(A,"CODE",{});var I=r(m);_=n(I,"download_mode"),I.forEach(t),S=n(A," parameter in "),b=o(A,"A",{href:!0});var $e=r(b);te=n($e,"datasets.load_dataset()"),$e.forEach(t),P=n(A," instead."),A.forEach(t),this.h()},h(){d(b,"href","/docs/datasets/pr_3903/en/package_reference/loading_methods#datasets.load_dataset")},m(x,A){c(x,f,A),a(f,E),a(f,m),a(m,_),a(f,S),a(f,b),a(b,te),a(f,P)},d(x){x&&t(f)}}}function Qs(ee){let f,E;return{c(){f=l("p"),E=i("Keeping the predictions in-memory is not possible in a distributed setting since the CPU memory spaces of the various processes are not shared.")},l(m){f=o(m,"P",{});var _=r(f);E=n(_,"Keeping the predictions in-memory is not possible in a distributed setting since the CPU memory spaces of the various processes are not shared."),_.forEach(t)},m(m,_){c(m,f,_),a(f,E)},d(m){m&&t(f)}}}function Vs(ee){let f,E,m,_,S,b,te,P,x,A,I,$e,ot,we,Jt,rt,C,Te,Qt,Vt,Me,ea,ta,He,aa,sa,Oe,la,it,T,R,Ne,ae,oa,Re,ra,nt,k,ia,Fe,na,ca,Ye,ha,pa,ct,se,ht,F,da,qe,fa,ma,pt,le,dt,Y,_a,Le,ua,va,ft,oe,mt,M,q,Be,re,$a,We,wa,_t,D,ya,ye,ga,Ea,Ue,ba,Aa,ut,ie,vt,L,Ca,ge,ka,Da,$t,H,B,ze,ne,ja,Xe,Sa,wt,W,Pa,Ee,xa,Ia,yt,ce,gt,O,U,Ze,he,Ta,Ge,Ma,Et,j,Ha,Ke,Oa,Na,be,Ra,Fa,bt,pe,At,z,Ya,Je,qa,La,Ct,X,Ba,Ae,Wa,Ua,kt,de,Dt,Ce,za,jt,Z,St,ke,Xa,Pt,fe,xt,G,It,De,Tt,N,K,Qe,me,Za,Ve,Ga,Mt,je,Ka,Ht,J,et,_e,Ja,tt,Qa,Va,es,at,ue,ts,st,as,ss,Ot;return b=new Ie({}),ae=new Ie({}),se=new V({props:{code:'$ export HF_DATASETS_CACHE="/path/to/another/directory"',highlighted:'$ <span class="hljs-built_in">export</span> <span class="hljs-attribute">HF_DATASETS_CACHE</span>=<span class="hljs-string">&quot;/path/to/another/directory&quot;</span>'}}),le=new V({props:{code:`from datasets import load_dataset
dataset = load_dataset('LOADING_SCRIPT', cache_dir="PATH/TO/MY/CACHE/DIR")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;LOADING_SCRIPT&#x27;</span>, cache_dir=<span class="hljs-string">&quot;PATH/TO/MY/CACHE/DIR&quot;</span>)`}}),oe=new V({props:{code:`from datasets import load_metric
metric = load_metric('glue', 'mrpc', cache_dir="MY/CACHE/DIRECTORY")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric
<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, cache_dir=<span class="hljs-string">&quot;MY/CACHE/DIRECTORY&quot;</span>)`}}),re=new Ie({}),ie=new V({props:{code:`from datasets import load_dataset
dataset = load_dataset('squad', download_mode='force_redownload')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, download_mode=<span class="hljs-string">&#x27;force_redownload&#x27;</span>)`}}),ne=new Ie({}),ce=new V({props:{code:`#Returns the number of removed cache files
>>> dataset.cleanup_cache_files()
2`,highlighted:`<span class="hljs-comment">#Returns the number of removed cache files</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.cleanup_cache_files()
<span class="hljs-number">2</span>`}}),he=new Ie({}),pe=new V({props:{code:"updated_dataset = small_dataset.map(add_prefix, load_from_cache=False)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>updated_dataset = small_dataset.<span class="hljs-built_in">map</span>(add_prefix, load_from_cache=<span class="hljs-literal">False</span>)'}}),de=new V({props:{code:`from datasets import set_caching_enabled
set_caching_enabled(False)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> set_caching_enabled
<span class="hljs-meta">&gt;&gt;&gt; </span>set_caching_enabled(<span class="hljs-literal">False</span>)`}}),Z=new zs({props:{$$slots:{default:[Js]},$$scope:{ctx:ee}}}),fe=new V({props:{code:`from datasets import load_metric
metric = load_metric('glue', 'mrpc', keep_in_memory=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric
<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, keep_in_memory=<span class="hljs-literal">True</span>)`}}),G=new zs({props:{warning:"&lcub;true}",$$slots:{default:[Qs]},$$scope:{ctx:ee}}}),me=new Ie({}),{c(){f=l("meta"),E=h(),m=l("h1"),_=l("a"),S=l("span"),u(b.$$.fragment),te=h(),P=l("span"),x=i("Cache management"),A=h(),I=l("p"),$e=i("When you download a dataset, the processing scripts and data are stored locally on your computer. The cache allows \u{1F917} Datasets to avoid re-downloading or processing the entire dataset every time you use it."),ot=h(),we=l("p"),Jt=i("This guide will show you how to:"),rt=h(),C=l("ul"),Te=l("li"),Qt=i("Change the cache directory."),Vt=h(),Me=l("li"),ea=i("Control how a dataset is loaded from the cache."),ta=h(),He=l("li"),aa=i("Clean up cache files in the directory."),sa=h(),Oe=l("li"),la=i("Enable or disable caching."),it=h(),T=l("h2"),R=l("a"),Ne=l("span"),u(ae.$$.fragment),oa=h(),Re=l("span"),ra=i("Cache directory"),nt=h(),k=l("p"),ia=i("The default cache directory is "),Fe=l("code"),na=i("~/.cache/huggingface/datasets"),ca=i(". Change the cache location by setting the shell environment variable, "),Ye=l("code"),ha=i("HF_DATASETS_CACHE"),pa=i(" to another directory:"),ct=h(),u(se.$$.fragment),ht=h(),F=l("p"),da=i("When you load a dataset, you also have the option to change where the data is cached. Change the "),qe=l("code"),fa=i("cache_dir"),ma=i(" parameter to the path you want:"),pt=h(),u(le.$$.fragment),dt=h(),Y=l("p"),_a=i("Similarly, you can change where a metric is cached with the "),Le=l("code"),ua=i("cache_dir"),va=i(" parameter:"),ft=h(),u(oe.$$.fragment),mt=h(),M=l("h2"),q=l("a"),Be=l("span"),u(re.$$.fragment),$a=h(),We=l("span"),wa=i("Download mode"),_t=h(),D=l("p"),ya=i("After you download a dataset, control how it is loaded by "),ye=l("a"),ga=i("datasets.load_dataset()"),Ea=i(" with the "),Ue=l("code"),ba=i("download_mode"),Aa=i(" parameter. By default, \u{1F917} Datasets will reuse a dataset if it exists. But if you need the original dataset without any processing functions applied, re-download the files as shown below:"),ut=h(),u(ie.$$.fragment),vt=h(),L=l("p"),Ca=i("Refer to "),ge=l("a"),ka=i("datasets.DownloadMode"),Da=i(" for a full list of download modes."),$t=h(),H=l("h2"),B=l("a"),ze=l("span"),u(ne.$$.fragment),ja=h(),Xe=l("span"),Sa=i("Cache files"),wt=h(),W=l("p"),Pa=i("Clean up the cache files in the directory with "),Ee=l("a"),xa=i("datasets.Dataset.cleanup_cache_files()"),Ia=i(":"),yt=h(),u(ce.$$.fragment),gt=h(),O=l("h2"),U=l("a"),Ze=l("span"),u(he.$$.fragment),Ta=h(),Ge=l("span"),Ma=i("Enable or disable caching"),Et=h(),j=l("p"),Ha=i("If you\u2019re using a cached file locally, it will automatically reload the dataset with any previous transforms you applied to the dataset. Disable this behavior by setting the argument "),Ke=l("code"),Oa=i("load_from_cache=False"),Na=i(" in "),be=l("a"),Ra=i("datasets.Dataset.map()"),Fa=i(":"),bt=h(),u(pe.$$.fragment),At=h(),z=l("p"),Ya=i("In the example above, \u{1F917} Datasets will execute the function "),Je=l("code"),qa=i("add_prefix"),La=i(" over the entire dataset again instead of loading the dataset from its previous state."),Ct=h(),X=l("p"),Ba=i("Disable caching on a global scale with "),Ae=l("a"),Wa=i("datasets.set_caching_enabled()"),Ua=i(":"),kt=h(),u(de.$$.fragment),Dt=h(),Ce=l("p"),za=i("When you disable caching, \u{1F917} Datasets will no longer reload cached files when applying transforms to datasets. Any transform you apply on your dataset will be need to be reapplied."),jt=h(),u(Z.$$.fragment),St=h(),ke=l("p"),Xa=i("You can also avoid caching your metric entirely, and keep it in CPU memory instead:"),Pt=h(),u(fe.$$.fragment),xt=h(),u(G.$$.fragment),It=h(),De=l("a"),Tt=h(),N=l("h2"),K=l("a"),Qe=l("span"),u(me.$$.fragment),Za=h(),Ve=l("span"),Ga=i("Improve performance"),Mt=h(),je=l("p"),Ka=i("Disabling the cache and copying the dataset in-memory will speed up dataset operations. There are two options for copying the dataset in-memory:"),Ht=h(),J=l("ol"),et=l("li"),_e=l("p"),Ja=i("Set "),tt=l("code"),Qa=i("datasets.config.IN_MEMORY_MAX_SIZE"),Va=i(" to a nonzero value (in bytes) that fits in your RAM memory."),es=h(),at=l("li"),ue=l("p"),ts=i("Set the environment variable "),st=l("code"),as=i("HF_DATASETS_IN_MEMORY_MAX_SIZE"),ss=i(" to a nonzero value. Note that the first method takes higher precedence."),this.h()},l(e){const s=Ks('[data-svelte="svelte-1phssyn"]',document.head);f=o(s,"META",{name:!0,content:!0}),s.forEach(t),E=p(e),m=o(e,"H1",{class:!0});var ve=r(m);_=o(ve,"A",{id:!0,class:!0,href:!0});var lt=r(_);S=o(lt,"SPAN",{});var ls=r(S);v(b.$$.fragment,ls),ls.forEach(t),lt.forEach(t),te=p(ve),P=o(ve,"SPAN",{});var os=r(P);x=n(os,"Cache management"),os.forEach(t),ve.forEach(t),A=p(e),I=o(e,"P",{});var rs=r(I);$e=n(rs,"When you download a dataset, the processing scripts and data are stored locally on your computer. The cache allows \u{1F917} Datasets to avoid re-downloading or processing the entire dataset every time you use it."),rs.forEach(t),ot=p(e),we=o(e,"P",{});var is=r(we);Jt=n(is,"This guide will show you how to:"),is.forEach(t),rt=p(e),C=o(e,"UL",{});var Q=r(C);Te=o(Q,"LI",{});var ns=r(Te);Qt=n(ns,"Change the cache directory."),ns.forEach(t),Vt=p(Q),Me=o(Q,"LI",{});var cs=r(Me);ea=n(cs,"Control how a dataset is loaded from the cache."),cs.forEach(t),ta=p(Q),He=o(Q,"LI",{});var hs=r(He);aa=n(hs,"Clean up cache files in the directory."),hs.forEach(t),sa=p(Q),Oe=o(Q,"LI",{});var ps=r(Oe);la=n(ps,"Enable or disable caching."),ps.forEach(t),Q.forEach(t),it=p(e),T=o(e,"H2",{class:!0});var Nt=r(T);R=o(Nt,"A",{id:!0,class:!0,href:!0});var ds=r(R);Ne=o(ds,"SPAN",{});var fs=r(Ne);v(ae.$$.fragment,fs),fs.forEach(t),ds.forEach(t),oa=p(Nt),Re=o(Nt,"SPAN",{});var ms=r(Re);ra=n(ms,"Cache directory"),ms.forEach(t),Nt.forEach(t),nt=p(e),k=o(e,"P",{});var Se=r(k);ia=n(Se,"The default cache directory is "),Fe=o(Se,"CODE",{});var _s=r(Fe);na=n(_s,"~/.cache/huggingface/datasets"),_s.forEach(t),ca=n(Se,". Change the cache location by setting the shell environment variable, "),Ye=o(Se,"CODE",{});var us=r(Ye);ha=n(us,"HF_DATASETS_CACHE"),us.forEach(t),pa=n(Se," to another directory:"),Se.forEach(t),ct=p(e),v(se.$$.fragment,e),ht=p(e),F=o(e,"P",{});var Rt=r(F);da=n(Rt,"When you load a dataset, you also have the option to change where the data is cached. Change the "),qe=o(Rt,"CODE",{});var vs=r(qe);fa=n(vs,"cache_dir"),vs.forEach(t),ma=n(Rt," parameter to the path you want:"),Rt.forEach(t),pt=p(e),v(le.$$.fragment,e),dt=p(e),Y=o(e,"P",{});var Ft=r(Y);_a=n(Ft,"Similarly, you can change where a metric is cached with the "),Le=o(Ft,"CODE",{});var $s=r(Le);ua=n($s,"cache_dir"),$s.forEach(t),va=n(Ft," parameter:"),Ft.forEach(t),ft=p(e),v(oe.$$.fragment,e),mt=p(e),M=o(e,"H2",{class:!0});var Yt=r(M);q=o(Yt,"A",{id:!0,class:!0,href:!0});var ws=r(q);Be=o(ws,"SPAN",{});var ys=r(Be);v(re.$$.fragment,ys),ys.forEach(t),ws.forEach(t),$a=p(Yt),We=o(Yt,"SPAN",{});var gs=r(We);wa=n(gs,"Download mode"),gs.forEach(t),Yt.forEach(t),_t=p(e),D=o(e,"P",{});var Pe=r(D);ya=n(Pe,"After you download a dataset, control how it is loaded by "),ye=o(Pe,"A",{href:!0});var Es=r(ye);ga=n(Es,"datasets.load_dataset()"),Es.forEach(t),Ea=n(Pe," with the "),Ue=o(Pe,"CODE",{});var bs=r(Ue);ba=n(bs,"download_mode"),bs.forEach(t),Aa=n(Pe," parameter. By default, \u{1F917} Datasets will reuse a dataset if it exists. But if you need the original dataset without any processing functions applied, re-download the files as shown below:"),Pe.forEach(t),ut=p(e),v(ie.$$.fragment,e),vt=p(e),L=o(e,"P",{});var qt=r(L);Ca=n(qt,"Refer to "),ge=o(qt,"A",{href:!0});var As=r(ge);ka=n(As,"datasets.DownloadMode"),As.forEach(t),Da=n(qt," for a full list of download modes."),qt.forEach(t),$t=p(e),H=o(e,"H2",{class:!0});var Lt=r(H);B=o(Lt,"A",{id:!0,class:!0,href:!0});var Cs=r(B);ze=o(Cs,"SPAN",{});var ks=r(ze);v(ne.$$.fragment,ks),ks.forEach(t),Cs.forEach(t),ja=p(Lt),Xe=o(Lt,"SPAN",{});var Ds=r(Xe);Sa=n(Ds,"Cache files"),Ds.forEach(t),Lt.forEach(t),wt=p(e),W=o(e,"P",{});var Bt=r(W);Pa=n(Bt,"Clean up the cache files in the directory with "),Ee=o(Bt,"A",{href:!0});var js=r(Ee);xa=n(js,"datasets.Dataset.cleanup_cache_files()"),js.forEach(t),Ia=n(Bt,":"),Bt.forEach(t),yt=p(e),v(ce.$$.fragment,e),gt=p(e),O=o(e,"H2",{class:!0});var Wt=r(O);U=o(Wt,"A",{id:!0,class:!0,href:!0});var Ss=r(U);Ze=o(Ss,"SPAN",{});var Ps=r(Ze);v(he.$$.fragment,Ps),Ps.forEach(t),Ss.forEach(t),Ta=p(Wt),Ge=o(Wt,"SPAN",{});var xs=r(Ge);Ma=n(xs,"Enable or disable caching"),xs.forEach(t),Wt.forEach(t),Et=p(e),j=o(e,"P",{});var xe=r(j);Ha=n(xe,"If you\u2019re using a cached file locally, it will automatically reload the dataset with any previous transforms you applied to the dataset. Disable this behavior by setting the argument "),Ke=o(xe,"CODE",{});var Is=r(Ke);Oa=n(Is,"load_from_cache=False"),Is.forEach(t),Na=n(xe," in "),be=o(xe,"A",{href:!0});var Ts=r(be);Ra=n(Ts,"datasets.Dataset.map()"),Ts.forEach(t),Fa=n(xe,":"),xe.forEach(t),bt=p(e),v(pe.$$.fragment,e),At=p(e),z=o(e,"P",{});var Ut=r(z);Ya=n(Ut,"In the example above, \u{1F917} Datasets will execute the function "),Je=o(Ut,"CODE",{});var Ms=r(Je);qa=n(Ms,"add_prefix"),Ms.forEach(t),La=n(Ut," over the entire dataset again instead of loading the dataset from its previous state."),Ut.forEach(t),Ct=p(e),X=o(e,"P",{});var zt=r(X);Ba=n(zt,"Disable caching on a global scale with "),Ae=o(zt,"A",{href:!0});var Hs=r(Ae);Wa=n(Hs,"datasets.set_caching_enabled()"),Hs.forEach(t),Ua=n(zt,":"),zt.forEach(t),kt=p(e),v(de.$$.fragment,e),Dt=p(e),Ce=o(e,"P",{});var Os=r(Ce);za=n(Os,"When you disable caching, \u{1F917} Datasets will no longer reload cached files when applying transforms to datasets. Any transform you apply on your dataset will be need to be reapplied."),Os.forEach(t),jt=p(e),v(Z.$$.fragment,e),St=p(e),ke=o(e,"P",{});var Ns=r(ke);Xa=n(Ns,"You can also avoid caching your metric entirely, and keep it in CPU memory instead:"),Ns.forEach(t),Pt=p(e),v(fe.$$.fragment,e),xt=p(e),v(G.$$.fragment,e),It=p(e),De=o(e,"A",{id:!0}),r(De).forEach(t),Tt=p(e),N=o(e,"H2",{class:!0});var Xt=r(N);K=o(Xt,"A",{id:!0,class:!0,href:!0});var Rs=r(K);Qe=o(Rs,"SPAN",{});var Fs=r(Qe);v(me.$$.fragment,Fs),Fs.forEach(t),Rs.forEach(t),Za=p(Xt),Ve=o(Xt,"SPAN",{});var Ys=r(Ve);Ga=n(Ys,"Improve performance"),Ys.forEach(t),Xt.forEach(t),Mt=p(e),je=o(e,"P",{});var qs=r(je);Ka=n(qs,"Disabling the cache and copying the dataset in-memory will speed up dataset operations. There are two options for copying the dataset in-memory:"),qs.forEach(t),Ht=p(e),J=o(e,"OL",{});var Zt=r(J);et=o(Zt,"LI",{});var Ls=r(et);_e=o(Ls,"P",{});var Gt=r(_e);Ja=n(Gt,"Set "),tt=o(Gt,"CODE",{});var Bs=r(tt);Qa=n(Bs,"datasets.config.IN_MEMORY_MAX_SIZE"),Bs.forEach(t),Va=n(Gt," to a nonzero value (in bytes) that fits in your RAM memory."),Gt.forEach(t),Ls.forEach(t),es=p(Zt),at=o(Zt,"LI",{});var Ws=r(at);ue=o(Ws,"P",{});var Kt=r(ue);ts=n(Kt,"Set the environment variable "),st=o(Kt,"CODE",{});var Us=r(st);as=n(Us,"HF_DATASETS_IN_MEMORY_MAX_SIZE"),Us.forEach(t),ss=n(Kt," to a nonzero value. Note that the first method takes higher precedence."),Kt.forEach(t),Ws.forEach(t),Zt.forEach(t),this.h()},h(){d(f,"name","hf:doc:metadata"),d(f,"content",JSON.stringify(el)),d(_,"id","cache-management"),d(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_,"href","#cache-management"),d(m,"class","relative group"),d(R,"id","cache-directory"),d(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(R,"href","#cache-directory"),d(T,"class","relative group"),d(q,"id","download-mode"),d(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(q,"href","#download-mode"),d(M,"class","relative group"),d(ye,"href","/docs/datasets/pr_3903/en/package_reference/loading_methods#datasets.load_dataset"),d(ge,"href","/docs/datasets/pr_3903/en/package_reference/builder_classes#datasets.DownloadMode"),d(B,"id","cache-files"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#cache-files"),d(H,"class","relative group"),d(Ee,"href","/docs/datasets/pr_3903/en/package_reference/main_classes#datasets.Dataset.cleanup_cache_files"),d(U,"id","enable-or-disable-caching"),d(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(U,"href","#enable-or-disable-caching"),d(O,"class","relative group"),d(be,"href","/docs/datasets/pr_3903/en/package_reference/main_classes#datasets.Dataset.map"),d(Ae,"href","/docs/datasets/pr_3903/en/package_reference/main_classes#datasets.set_caching_enabled"),d(De,"id","load_dataset_enhancing_performance"),d(K,"id","improve-performance"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#improve-performance"),d(N,"class","relative group")},m(e,s){a(document.head,f),c(e,E,s),c(e,m,s),a(m,_),a(_,S),$(b,S,null),a(m,te),a(m,P),a(P,x),c(e,A,s),c(e,I,s),a(I,$e),c(e,ot,s),c(e,we,s),a(we,Jt),c(e,rt,s),c(e,C,s),a(C,Te),a(Te,Qt),a(C,Vt),a(C,Me),a(Me,ea),a(C,ta),a(C,He),a(He,aa),a(C,sa),a(C,Oe),a(Oe,la),c(e,it,s),c(e,T,s),a(T,R),a(R,Ne),$(ae,Ne,null),a(T,oa),a(T,Re),a(Re,ra),c(e,nt,s),c(e,k,s),a(k,ia),a(k,Fe),a(Fe,na),a(k,ca),a(k,Ye),a(Ye,ha),a(k,pa),c(e,ct,s),$(se,e,s),c(e,ht,s),c(e,F,s),a(F,da),a(F,qe),a(qe,fa),a(F,ma),c(e,pt,s),$(le,e,s),c(e,dt,s),c(e,Y,s),a(Y,_a),a(Y,Le),a(Le,ua),a(Y,va),c(e,ft,s),$(oe,e,s),c(e,mt,s),c(e,M,s),a(M,q),a(q,Be),$(re,Be,null),a(M,$a),a(M,We),a(We,wa),c(e,_t,s),c(e,D,s),a(D,ya),a(D,ye),a(ye,ga),a(D,Ea),a(D,Ue),a(Ue,ba),a(D,Aa),c(e,ut,s),$(ie,e,s),c(e,vt,s),c(e,L,s),a(L,Ca),a(L,ge),a(ge,ka),a(L,Da),c(e,$t,s),c(e,H,s),a(H,B),a(B,ze),$(ne,ze,null),a(H,ja),a(H,Xe),a(Xe,Sa),c(e,wt,s),c(e,W,s),a(W,Pa),a(W,Ee),a(Ee,xa),a(W,Ia),c(e,yt,s),$(ce,e,s),c(e,gt,s),c(e,O,s),a(O,U),a(U,Ze),$(he,Ze,null),a(O,Ta),a(O,Ge),a(Ge,Ma),c(e,Et,s),c(e,j,s),a(j,Ha),a(j,Ke),a(Ke,Oa),a(j,Na),a(j,be),a(be,Ra),a(j,Fa),c(e,bt,s),$(pe,e,s),c(e,At,s),c(e,z,s),a(z,Ya),a(z,Je),a(Je,qa),a(z,La),c(e,Ct,s),c(e,X,s),a(X,Ba),a(X,Ae),a(Ae,Wa),a(X,Ua),c(e,kt,s),$(de,e,s),c(e,Dt,s),c(e,Ce,s),a(Ce,za),c(e,jt,s),$(Z,e,s),c(e,St,s),c(e,ke,s),a(ke,Xa),c(e,Pt,s),$(fe,e,s),c(e,xt,s),$(G,e,s),c(e,It,s),c(e,De,s),c(e,Tt,s),c(e,N,s),a(N,K),a(K,Qe),$(me,Qe,null),a(N,Za),a(N,Ve),a(Ve,Ga),c(e,Mt,s),c(e,je,s),a(je,Ka),c(e,Ht,s),c(e,J,s),a(J,et),a(et,_e),a(_e,Ja),a(_e,tt),a(tt,Qa),a(_e,Va),a(J,es),a(J,at),a(at,ue),a(ue,ts),a(ue,st),a(st,as),a(ue,ss),Ot=!0},p(e,[s]){const ve={};s&2&&(ve.$$scope={dirty:s,ctx:e}),Z.$set(ve);const lt={};s&2&&(lt.$$scope={dirty:s,ctx:e}),G.$set(lt)},i(e){Ot||(w(b.$$.fragment,e),w(ae.$$.fragment,e),w(se.$$.fragment,e),w(le.$$.fragment,e),w(oe.$$.fragment,e),w(re.$$.fragment,e),w(ie.$$.fragment,e),w(ne.$$.fragment,e),w(ce.$$.fragment,e),w(he.$$.fragment,e),w(pe.$$.fragment,e),w(de.$$.fragment,e),w(Z.$$.fragment,e),w(fe.$$.fragment,e),w(G.$$.fragment,e),w(me.$$.fragment,e),Ot=!0)},o(e){y(b.$$.fragment,e),y(ae.$$.fragment,e),y(se.$$.fragment,e),y(le.$$.fragment,e),y(oe.$$.fragment,e),y(re.$$.fragment,e),y(ie.$$.fragment,e),y(ne.$$.fragment,e),y(ce.$$.fragment,e),y(he.$$.fragment,e),y(pe.$$.fragment,e),y(de.$$.fragment,e),y(Z.$$.fragment,e),y(fe.$$.fragment,e),y(G.$$.fragment,e),y(me.$$.fragment,e),Ot=!1},d(e){t(f),e&&t(E),e&&t(m),g(b),e&&t(A),e&&t(I),e&&t(ot),e&&t(we),e&&t(rt),e&&t(C),e&&t(it),e&&t(T),g(ae),e&&t(nt),e&&t(k),e&&t(ct),g(se,e),e&&t(ht),e&&t(F),e&&t(pt),g(le,e),e&&t(dt),e&&t(Y),e&&t(ft),g(oe,e),e&&t(mt),e&&t(M),g(re),e&&t(_t),e&&t(D),e&&t(ut),g(ie,e),e&&t(vt),e&&t(L),e&&t($t),e&&t(H),g(ne),e&&t(wt),e&&t(W),e&&t(yt),g(ce,e),e&&t(gt),e&&t(O),g(he),e&&t(Et),e&&t(j),e&&t(bt),g(pe,e),e&&t(At),e&&t(z),e&&t(Ct),e&&t(X),e&&t(kt),g(de,e),e&&t(Dt),e&&t(Ce),e&&t(jt),g(Z,e),e&&t(St),e&&t(ke),e&&t(Pt),g(fe,e),e&&t(xt),g(G,e),e&&t(It),e&&t(De),e&&t(Tt),e&&t(N),g(me),e&&t(Mt),e&&t(je),e&&t(Ht),e&&t(J)}}}const el={local:"cache-management",sections:[{local:"cache-directory",title:"Cache directory"},{local:"download-mode",title:"Download mode"},{local:"cache-files",title:"Cache files"},{local:"enable-or-disable-caching",title:"Enable or disable caching"},{local:"improve-performance",title:"Improve performance"}],title:"Cache management"};function tl(ee,f,E){let{fw:m}=f;return ee.$$set=_=>{"fw"in _&&E(0,m=_.fw)},[m]}class rl extends Xs{constructor(f){super();Zs(this,f,tl,Vs,Gs,{fw:0})}}export{rl as default,el as metadata};
