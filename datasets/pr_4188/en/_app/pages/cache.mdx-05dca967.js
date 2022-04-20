import{S as Xs,i as Zs,s as Gs,e as o,k as h,w as _,t as i,M as Ks,c as l,d as t,m as p,a as r,x as v,h as n,b as d,F as a,g as c,y as $,q as w,o as y,B as g,v as Js}from"../chunks/vendor-8138ceec.js";import{T as zs}from"../chunks/Tip-12722dfc.js";import{I as Ie}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as V}from"../chunks/CodeBlock-fc89709f.js";function Qs(ve){let f,A,m,u,S,E,ee,j;return{c(){f=o("p"),A=i("If you want to reuse a dataset from scratch, try setting the "),m=o("code"),u=i("download_mode"),S=i(" parameter in "),E=o("a"),ee=i("load_dataset()"),j=i(" instead."),this.h()},l(x){f=l(x,"P",{});var b=r(f);A=n(b,"If you want to reuse a dataset from scratch, try setting the "),m=l(b,"CODE",{});var I=r(m);u=n(I,"download_mode"),I.forEach(t),S=n(b," parameter in "),E=l(b,"A",{href:!0});var $e=r(E);ee=n($e,"load_dataset()"),$e.forEach(t),j=n(b," instead."),b.forEach(t),this.h()},h(){d(E,"href","/docs/datasets/pr_4188/en/package_reference/loading_methods#datasets.load_dataset")},m(x,b){c(x,f,b),a(f,A),a(f,m),a(m,u),a(f,S),a(f,E),a(E,ee),a(f,j)},d(x){x&&t(f)}}}function Vs(ve){let f,A;return{c(){f=o("p"),A=i("Keeping the predictions in-memory is not possible in a distributed setting since the CPU memory spaces of the various processes are not shared.")},l(m){f=l(m,"P",{});var u=r(f);A=n(u,"Keeping the predictions in-memory is not possible in a distributed setting since the CPU memory spaces of the various processes are not shared."),u.forEach(t)},m(m,u){c(m,f,u),a(f,A)},d(m){m&&t(f)}}}function eo(ve){let f,A,m,u,S,E,ee,j,x,b,I,$e,lt,we,Jt,rt,C,Te,Qt,Vt,Me,ea,ta,He,aa,sa,Oe,oa,it,T,R,Ne,te,la,Re,ra,nt,k,ia,Le,na,ca,Ye,ha,pa,ct,ae,ht,L,da,qe,fa,ma,pt,se,dt,Y,ua,Fe,_a,va,ft,oe,mt,M,q,Be,le,$a,Ue,wa,ut,D,ya,ye,ga,Ea,We,ba,Aa,_t,re,vt,F,Ca,ge,ka,Da,$t,H,B,ze,ie,Pa,Xe,Sa,wt,U,ja,Ee,xa,Ia,yt,ne,gt,O,W,Ze,ce,Ta,Ge,Ma,Et,P,Ha,Ke,Oa,Na,be,Ra,La,bt,he,At,z,Ya,Je,qa,Fa,Ct,X,Ba,Ae,Ua,Wa,kt,pe,Dt,Ce,za,Pt,Z,St,ke,Xa,jt,de,xt,G,It,De,Tt,N,K,Qe,fe,Za,Ve,Ga,Mt,Pe,Ka,Ht,J,et,me,Ja,tt,Qa,Va,es,at,ue,ts,st,as,ss,Ot;return E=new Ie({}),te=new Ie({}),ae=new V({props:{code:'$ export HF_DATASETS_CACHE="/path/to/another/directory"',highlighted:'$ <span class="hljs-built_in">export</span> <span class="hljs-attribute">HF_DATASETS_CACHE</span>=<span class="hljs-string">&quot;/path/to/another/directory&quot;</span>'}}),se=new V({props:{code:`from datasets import load_dataset
dataset = load_dataset('LOADING_SCRIPT', cache_dir="PATH/TO/MY/CACHE/DIR")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;LOADING_SCRIPT&#x27;</span>, cache_dir=<span class="hljs-string">&quot;PATH/TO/MY/CACHE/DIR&quot;</span>)`}}),oe=new V({props:{code:`from datasets import load_metric
metric = load_metric('glue', 'mrpc', cache_dir="MY/CACHE/DIRECTORY")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric
<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, cache_dir=<span class="hljs-string">&quot;MY/CACHE/DIRECTORY&quot;</span>)`}}),le=new Ie({}),re=new V({props:{code:`from datasets import load_dataset
dataset = load_dataset('squad', download_mode='force_redownload')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&#x27;squad&#x27;</span>, download_mode=<span class="hljs-string">&#x27;force_redownload&#x27;</span>)`}}),ie=new Ie({}),ne=new V({props:{code:`# Returns the number of removed cache files
>>> dataset.cleanup_cache_files()
2`,highlighted:`<span class="hljs-comment"># Returns the number of removed cache files</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.cleanup_cache_files()
<span class="hljs-number">2</span>`}}),ce=new Ie({}),he=new V({props:{code:"updated_dataset = small_dataset.map(add_prefix, load_from_cache=False)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>updated_dataset = small_dataset.<span class="hljs-built_in">map</span>(add_prefix, load_from_cache=<span class="hljs-literal">False</span>)'}}),pe=new V({props:{code:`from datasets import disable_caching
disable_caching()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> disable_caching
<span class="hljs-meta">&gt;&gt;&gt; </span>disable_caching()`}}),Z=new zs({props:{$$slots:{default:[Qs]},$$scope:{ctx:ve}}}),de=new V({props:{code:`from datasets import load_metric
metric = load_metric('glue', 'mrpc', keep_in_memory=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric
<span class="hljs-meta">&gt;&gt;&gt; </span>metric = load_metric(<span class="hljs-string">&#x27;glue&#x27;</span>, <span class="hljs-string">&#x27;mrpc&#x27;</span>, keep_in_memory=<span class="hljs-literal">True</span>)`}}),G=new zs({props:{warning:!0,$$slots:{default:[Vs]},$$scope:{ctx:ve}}}),fe=new Ie({}),{c(){f=o("meta"),A=h(),m=o("h1"),u=o("a"),S=o("span"),_(E.$$.fragment),ee=h(),j=o("span"),x=i("Cache management"),b=h(),I=o("p"),$e=i("When you download a dataset, the processing scripts and data are stored locally on your computer. The cache allows \u{1F917} Datasets to avoid re-downloading or processing the entire dataset every time you use it."),lt=h(),we=o("p"),Jt=i("This guide will show you how to:"),rt=h(),C=o("ul"),Te=o("li"),Qt=i("Change the cache directory."),Vt=h(),Me=o("li"),ea=i("Control how a dataset is loaded from the cache."),ta=h(),He=o("li"),aa=i("Clean up cache files in the directory."),sa=h(),Oe=o("li"),oa=i("Enable or disable caching."),it=h(),T=o("h2"),R=o("a"),Ne=o("span"),_(te.$$.fragment),la=h(),Re=o("span"),ra=i("Cache directory"),nt=h(),k=o("p"),ia=i("The default cache directory is "),Le=o("code"),na=i("~/.cache/huggingface/datasets"),ca=i(". Change the cache location by setting the shell environment variable, "),Ye=o("code"),ha=i("HF_DATASETS_CACHE"),pa=i(" to another directory:"),ct=h(),_(ae.$$.fragment),ht=h(),L=o("p"),da=i("When you load a dataset, you also have the option to change where the data is cached. Change the "),qe=o("code"),fa=i("cache_dir"),ma=i(" parameter to the path you want:"),pt=h(),_(se.$$.fragment),dt=h(),Y=o("p"),ua=i("Similarly, you can change where a metric is cached with the "),Fe=o("code"),_a=i("cache_dir"),va=i(" parameter:"),ft=h(),_(oe.$$.fragment),mt=h(),M=o("h2"),q=o("a"),Be=o("span"),_(le.$$.fragment),$a=h(),Ue=o("span"),wa=i("Download mode"),ut=h(),D=o("p"),ya=i("After you download a dataset, control how it is loaded by "),ye=o("a"),ga=i("load_dataset()"),Ea=i(" with the "),We=o("code"),ba=i("download_mode"),Aa=i(" parameter. By default, \u{1F917} Datasets will reuse a dataset if it exists. But if you need the original dataset without any processing functions applied, re-download the files as shown below:"),_t=h(),_(re.$$.fragment),vt=h(),F=o("p"),Ca=i("Refer to "),ge=o("a"),ka=i("DownloadMode"),Da=i(" for a full list of download modes."),$t=h(),H=o("h2"),B=o("a"),ze=o("span"),_(ie.$$.fragment),Pa=h(),Xe=o("span"),Sa=i("Cache files"),wt=h(),U=o("p"),ja=i("Clean up the cache files in the directory with "),Ee=o("a"),xa=i("Dataset.cleanup_cache_files()"),Ia=i(":"),yt=h(),_(ne.$$.fragment),gt=h(),O=o("h2"),W=o("a"),Ze=o("span"),_(ce.$$.fragment),Ta=h(),Ge=o("span"),Ma=i("Enable or disable caching"),Et=h(),P=o("p"),Ha=i("If you\u2019re using a cached file locally, it will automatically reload the dataset with any previous transforms you applied to the dataset. Disable this behavior by setting the argument "),Ke=o("code"),Oa=i("load_from_cache=False"),Na=i(" in "),be=o("a"),Ra=i("Dataset.map()"),La=i(":"),bt=h(),_(he.$$.fragment),At=h(),z=o("p"),Ya=i("In the example above, \u{1F917} Datasets will execute the function "),Je=o("code"),qa=i("add_prefix"),Fa=i(" over the entire dataset again instead of loading the dataset from its previous state."),Ct=h(),X=o("p"),Ba=i("Disable caching on a global scale with "),Ae=o("a"),Ua=i("disable_caching()"),Wa=i(":"),kt=h(),_(pe.$$.fragment),Dt=h(),Ce=o("p"),za=i("When you disable caching, \u{1F917} Datasets will no longer reload cached files when applying transforms to datasets. Any transform you apply on your dataset will be need to be reapplied."),Pt=h(),_(Z.$$.fragment),St=h(),ke=o("p"),Xa=i("You can also avoid caching your metric entirely, and keep it in CPU memory instead:"),jt=h(),_(de.$$.fragment),xt=h(),_(G.$$.fragment),It=h(),De=o("a"),Tt=h(),N=o("h2"),K=o("a"),Qe=o("span"),_(fe.$$.fragment),Za=h(),Ve=o("span"),Ga=i("Improve performance"),Mt=h(),Pe=o("p"),Ka=i("Disabling the cache and copying the dataset in-memory will speed up dataset operations. There are two options for copying the dataset in-memory:"),Ht=h(),J=o("ol"),et=o("li"),me=o("p"),Ja=i("Set "),tt=o("code"),Qa=i("datasets.config.IN_MEMORY_MAX_SIZE"),Va=i(" to a nonzero value (in bytes) that fits in your RAM memory."),es=h(),at=o("li"),ue=o("p"),ts=i("Set the environment variable "),st=o("code"),as=i("HF_DATASETS_IN_MEMORY_MAX_SIZE"),ss=i(" to a nonzero value. Note that the first method takes higher precedence."),this.h()},l(e){const s=Ks('[data-svelte="svelte-1phssyn"]',document.head);f=l(s,"META",{name:!0,content:!0}),s.forEach(t),A=p(e),m=l(e,"H1",{class:!0});var _e=r(m);u=l(_e,"A",{id:!0,class:!0,href:!0});var ot=r(u);S=l(ot,"SPAN",{});var os=r(S);v(E.$$.fragment,os),os.forEach(t),ot.forEach(t),ee=p(_e),j=l(_e,"SPAN",{});var ls=r(j);x=n(ls,"Cache management"),ls.forEach(t),_e.forEach(t),b=p(e),I=l(e,"P",{});var rs=r(I);$e=n(rs,"When you download a dataset, the processing scripts and data are stored locally on your computer. The cache allows \u{1F917} Datasets to avoid re-downloading or processing the entire dataset every time you use it."),rs.forEach(t),lt=p(e),we=l(e,"P",{});var is=r(we);Jt=n(is,"This guide will show you how to:"),is.forEach(t),rt=p(e),C=l(e,"UL",{});var Q=r(C);Te=l(Q,"LI",{});var ns=r(Te);Qt=n(ns,"Change the cache directory."),ns.forEach(t),Vt=p(Q),Me=l(Q,"LI",{});var cs=r(Me);ea=n(cs,"Control how a dataset is loaded from the cache."),cs.forEach(t),ta=p(Q),He=l(Q,"LI",{});var hs=r(He);aa=n(hs,"Clean up cache files in the directory."),hs.forEach(t),sa=p(Q),Oe=l(Q,"LI",{});var ps=r(Oe);oa=n(ps,"Enable or disable caching."),ps.forEach(t),Q.forEach(t),it=p(e),T=l(e,"H2",{class:!0});var Nt=r(T);R=l(Nt,"A",{id:!0,class:!0,href:!0});var ds=r(R);Ne=l(ds,"SPAN",{});var fs=r(Ne);v(te.$$.fragment,fs),fs.forEach(t),ds.forEach(t),la=p(Nt),Re=l(Nt,"SPAN",{});var ms=r(Re);ra=n(ms,"Cache directory"),ms.forEach(t),Nt.forEach(t),nt=p(e),k=l(e,"P",{});var Se=r(k);ia=n(Se,"The default cache directory is "),Le=l(Se,"CODE",{});var us=r(Le);na=n(us,"~/.cache/huggingface/datasets"),us.forEach(t),ca=n(Se,". Change the cache location by setting the shell environment variable, "),Ye=l(Se,"CODE",{});var _s=r(Ye);ha=n(_s,"HF_DATASETS_CACHE"),_s.forEach(t),pa=n(Se," to another directory:"),Se.forEach(t),ct=p(e),v(ae.$$.fragment,e),ht=p(e),L=l(e,"P",{});var Rt=r(L);da=n(Rt,"When you load a dataset, you also have the option to change where the data is cached. Change the "),qe=l(Rt,"CODE",{});var vs=r(qe);fa=n(vs,"cache_dir"),vs.forEach(t),ma=n(Rt," parameter to the path you want:"),Rt.forEach(t),pt=p(e),v(se.$$.fragment,e),dt=p(e),Y=l(e,"P",{});var Lt=r(Y);ua=n(Lt,"Similarly, you can change where a metric is cached with the "),Fe=l(Lt,"CODE",{});var $s=r(Fe);_a=n($s,"cache_dir"),$s.forEach(t),va=n(Lt," parameter:"),Lt.forEach(t),ft=p(e),v(oe.$$.fragment,e),mt=p(e),M=l(e,"H2",{class:!0});var Yt=r(M);q=l(Yt,"A",{id:!0,class:!0,href:!0});var ws=r(q);Be=l(ws,"SPAN",{});var ys=r(Be);v(le.$$.fragment,ys),ys.forEach(t),ws.forEach(t),$a=p(Yt),Ue=l(Yt,"SPAN",{});var gs=r(Ue);wa=n(gs,"Download mode"),gs.forEach(t),Yt.forEach(t),ut=p(e),D=l(e,"P",{});var je=r(D);ya=n(je,"After you download a dataset, control how it is loaded by "),ye=l(je,"A",{href:!0});var Es=r(ye);ga=n(Es,"load_dataset()"),Es.forEach(t),Ea=n(je," with the "),We=l(je,"CODE",{});var bs=r(We);ba=n(bs,"download_mode"),bs.forEach(t),Aa=n(je," parameter. By default, \u{1F917} Datasets will reuse a dataset if it exists. But if you need the original dataset without any processing functions applied, re-download the files as shown below:"),je.forEach(t),_t=p(e),v(re.$$.fragment,e),vt=p(e),F=l(e,"P",{});var qt=r(F);Ca=n(qt,"Refer to "),ge=l(qt,"A",{href:!0});var As=r(ge);ka=n(As,"DownloadMode"),As.forEach(t),Da=n(qt," for a full list of download modes."),qt.forEach(t),$t=p(e),H=l(e,"H2",{class:!0});var Ft=r(H);B=l(Ft,"A",{id:!0,class:!0,href:!0});var Cs=r(B);ze=l(Cs,"SPAN",{});var ks=r(ze);v(ie.$$.fragment,ks),ks.forEach(t),Cs.forEach(t),Pa=p(Ft),Xe=l(Ft,"SPAN",{});var Ds=r(Xe);Sa=n(Ds,"Cache files"),Ds.forEach(t),Ft.forEach(t),wt=p(e),U=l(e,"P",{});var Bt=r(U);ja=n(Bt,"Clean up the cache files in the directory with "),Ee=l(Bt,"A",{href:!0});var Ps=r(Ee);xa=n(Ps,"Dataset.cleanup_cache_files()"),Ps.forEach(t),Ia=n(Bt,":"),Bt.forEach(t),yt=p(e),v(ne.$$.fragment,e),gt=p(e),O=l(e,"H2",{class:!0});var Ut=r(O);W=l(Ut,"A",{id:!0,class:!0,href:!0});var Ss=r(W);Ze=l(Ss,"SPAN",{});var js=r(Ze);v(ce.$$.fragment,js),js.forEach(t),Ss.forEach(t),Ta=p(Ut),Ge=l(Ut,"SPAN",{});var xs=r(Ge);Ma=n(xs,"Enable or disable caching"),xs.forEach(t),Ut.forEach(t),Et=p(e),P=l(e,"P",{});var xe=r(P);Ha=n(xe,"If you\u2019re using a cached file locally, it will automatically reload the dataset with any previous transforms you applied to the dataset. Disable this behavior by setting the argument "),Ke=l(xe,"CODE",{});var Is=r(Ke);Oa=n(Is,"load_from_cache=False"),Is.forEach(t),Na=n(xe," in "),be=l(xe,"A",{href:!0});var Ts=r(be);Ra=n(Ts,"Dataset.map()"),Ts.forEach(t),La=n(xe,":"),xe.forEach(t),bt=p(e),v(he.$$.fragment,e),At=p(e),z=l(e,"P",{});var Wt=r(z);Ya=n(Wt,"In the example above, \u{1F917} Datasets will execute the function "),Je=l(Wt,"CODE",{});var Ms=r(Je);qa=n(Ms,"add_prefix"),Ms.forEach(t),Fa=n(Wt," over the entire dataset again instead of loading the dataset from its previous state."),Wt.forEach(t),Ct=p(e),X=l(e,"P",{});var zt=r(X);Ba=n(zt,"Disable caching on a global scale with "),Ae=l(zt,"A",{href:!0});var Hs=r(Ae);Ua=n(Hs,"disable_caching()"),Hs.forEach(t),Wa=n(zt,":"),zt.forEach(t),kt=p(e),v(pe.$$.fragment,e),Dt=p(e),Ce=l(e,"P",{});var Os=r(Ce);za=n(Os,"When you disable caching, \u{1F917} Datasets will no longer reload cached files when applying transforms to datasets. Any transform you apply on your dataset will be need to be reapplied."),Os.forEach(t),Pt=p(e),v(Z.$$.fragment,e),St=p(e),ke=l(e,"P",{});var Ns=r(ke);Xa=n(Ns,"You can also avoid caching your metric entirely, and keep it in CPU memory instead:"),Ns.forEach(t),jt=p(e),v(de.$$.fragment,e),xt=p(e),v(G.$$.fragment,e),It=p(e),De=l(e,"A",{id:!0}),r(De).forEach(t),Tt=p(e),N=l(e,"H2",{class:!0});var Xt=r(N);K=l(Xt,"A",{id:!0,class:!0,href:!0});var Rs=r(K);Qe=l(Rs,"SPAN",{});var Ls=r(Qe);v(fe.$$.fragment,Ls),Ls.forEach(t),Rs.forEach(t),Za=p(Xt),Ve=l(Xt,"SPAN",{});var Ys=r(Ve);Ga=n(Ys,"Improve performance"),Ys.forEach(t),Xt.forEach(t),Mt=p(e),Pe=l(e,"P",{});var qs=r(Pe);Ka=n(qs,"Disabling the cache and copying the dataset in-memory will speed up dataset operations. There are two options for copying the dataset in-memory:"),qs.forEach(t),Ht=p(e),J=l(e,"OL",{});var Zt=r(J);et=l(Zt,"LI",{});var Fs=r(et);me=l(Fs,"P",{});var Gt=r(me);Ja=n(Gt,"Set "),tt=l(Gt,"CODE",{});var Bs=r(tt);Qa=n(Bs,"datasets.config.IN_MEMORY_MAX_SIZE"),Bs.forEach(t),Va=n(Gt," to a nonzero value (in bytes) that fits in your RAM memory."),Gt.forEach(t),Fs.forEach(t),es=p(Zt),at=l(Zt,"LI",{});var Us=r(at);ue=l(Us,"P",{});var Kt=r(ue);ts=n(Kt,"Set the environment variable "),st=l(Kt,"CODE",{});var Ws=r(st);as=n(Ws,"HF_DATASETS_IN_MEMORY_MAX_SIZE"),Ws.forEach(t),ss=n(Kt," to a nonzero value. Note that the first method takes higher precedence."),Kt.forEach(t),Us.forEach(t),Zt.forEach(t),this.h()},h(){d(f,"name","hf:doc:metadata"),d(f,"content",JSON.stringify(to)),d(u,"id","cache-management"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#cache-management"),d(m,"class","relative group"),d(R,"id","cache-directory"),d(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(R,"href","#cache-directory"),d(T,"class","relative group"),d(q,"id","download-mode"),d(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(q,"href","#download-mode"),d(M,"class","relative group"),d(ye,"href","/docs/datasets/pr_4188/en/package_reference/loading_methods#datasets.load_dataset"),d(ge,"href","/docs/datasets/pr_4188/en/package_reference/builder_classes#datasets.DownloadMode"),d(B,"id","cache-files"),d(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(B,"href","#cache-files"),d(H,"class","relative group"),d(Ee,"href","/docs/datasets/pr_4188/en/package_reference/main_classes#datasets.Dataset.cleanup_cache_files"),d(W,"id","enable-or-disable-caching"),d(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(W,"href","#enable-or-disable-caching"),d(O,"class","relative group"),d(be,"href","/docs/datasets/pr_4188/en/package_reference/main_classes#datasets.Dataset.map"),d(Ae,"href","/docs/datasets/pr_4188/en/package_reference/main_classes#datasets.disable_caching"),d(De,"id","load_dataset_enhancing_performance"),d(K,"id","improve-performance"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#improve-performance"),d(N,"class","relative group")},m(e,s){a(document.head,f),c(e,A,s),c(e,m,s),a(m,u),a(u,S),$(E,S,null),a(m,ee),a(m,j),a(j,x),c(e,b,s),c(e,I,s),a(I,$e),c(e,lt,s),c(e,we,s),a(we,Jt),c(e,rt,s),c(e,C,s),a(C,Te),a(Te,Qt),a(C,Vt),a(C,Me),a(Me,ea),a(C,ta),a(C,He),a(He,aa),a(C,sa),a(C,Oe),a(Oe,oa),c(e,it,s),c(e,T,s),a(T,R),a(R,Ne),$(te,Ne,null),a(T,la),a(T,Re),a(Re,ra),c(e,nt,s),c(e,k,s),a(k,ia),a(k,Le),a(Le,na),a(k,ca),a(k,Ye),a(Ye,ha),a(k,pa),c(e,ct,s),$(ae,e,s),c(e,ht,s),c(e,L,s),a(L,da),a(L,qe),a(qe,fa),a(L,ma),c(e,pt,s),$(se,e,s),c(e,dt,s),c(e,Y,s),a(Y,ua),a(Y,Fe),a(Fe,_a),a(Y,va),c(e,ft,s),$(oe,e,s),c(e,mt,s),c(e,M,s),a(M,q),a(q,Be),$(le,Be,null),a(M,$a),a(M,Ue),a(Ue,wa),c(e,ut,s),c(e,D,s),a(D,ya),a(D,ye),a(ye,ga),a(D,Ea),a(D,We),a(We,ba),a(D,Aa),c(e,_t,s),$(re,e,s),c(e,vt,s),c(e,F,s),a(F,Ca),a(F,ge),a(ge,ka),a(F,Da),c(e,$t,s),c(e,H,s),a(H,B),a(B,ze),$(ie,ze,null),a(H,Pa),a(H,Xe),a(Xe,Sa),c(e,wt,s),c(e,U,s),a(U,ja),a(U,Ee),a(Ee,xa),a(U,Ia),c(e,yt,s),$(ne,e,s),c(e,gt,s),c(e,O,s),a(O,W),a(W,Ze),$(ce,Ze,null),a(O,Ta),a(O,Ge),a(Ge,Ma),c(e,Et,s),c(e,P,s),a(P,Ha),a(P,Ke),a(Ke,Oa),a(P,Na),a(P,be),a(be,Ra),a(P,La),c(e,bt,s),$(he,e,s),c(e,At,s),c(e,z,s),a(z,Ya),a(z,Je),a(Je,qa),a(z,Fa),c(e,Ct,s),c(e,X,s),a(X,Ba),a(X,Ae),a(Ae,Ua),a(X,Wa),c(e,kt,s),$(pe,e,s),c(e,Dt,s),c(e,Ce,s),a(Ce,za),c(e,Pt,s),$(Z,e,s),c(e,St,s),c(e,ke,s),a(ke,Xa),c(e,jt,s),$(de,e,s),c(e,xt,s),$(G,e,s),c(e,It,s),c(e,De,s),c(e,Tt,s),c(e,N,s),a(N,K),a(K,Qe),$(fe,Qe,null),a(N,Za),a(N,Ve),a(Ve,Ga),c(e,Mt,s),c(e,Pe,s),a(Pe,Ka),c(e,Ht,s),c(e,J,s),a(J,et),a(et,me),a(me,Ja),a(me,tt),a(tt,Qa),a(me,Va),a(J,es),a(J,at),a(at,ue),a(ue,ts),a(ue,st),a(st,as),a(ue,ss),Ot=!0},p(e,[s]){const _e={};s&2&&(_e.$$scope={dirty:s,ctx:e}),Z.$set(_e);const ot={};s&2&&(ot.$$scope={dirty:s,ctx:e}),G.$set(ot)},i(e){Ot||(w(E.$$.fragment,e),w(te.$$.fragment,e),w(ae.$$.fragment,e),w(se.$$.fragment,e),w(oe.$$.fragment,e),w(le.$$.fragment,e),w(re.$$.fragment,e),w(ie.$$.fragment,e),w(ne.$$.fragment,e),w(ce.$$.fragment,e),w(he.$$.fragment,e),w(pe.$$.fragment,e),w(Z.$$.fragment,e),w(de.$$.fragment,e),w(G.$$.fragment,e),w(fe.$$.fragment,e),Ot=!0)},o(e){y(E.$$.fragment,e),y(te.$$.fragment,e),y(ae.$$.fragment,e),y(se.$$.fragment,e),y(oe.$$.fragment,e),y(le.$$.fragment,e),y(re.$$.fragment,e),y(ie.$$.fragment,e),y(ne.$$.fragment,e),y(ce.$$.fragment,e),y(he.$$.fragment,e),y(pe.$$.fragment,e),y(Z.$$.fragment,e),y(de.$$.fragment,e),y(G.$$.fragment,e),y(fe.$$.fragment,e),Ot=!1},d(e){t(f),e&&t(A),e&&t(m),g(E),e&&t(b),e&&t(I),e&&t(lt),e&&t(we),e&&t(rt),e&&t(C),e&&t(it),e&&t(T),g(te),e&&t(nt),e&&t(k),e&&t(ct),g(ae,e),e&&t(ht),e&&t(L),e&&t(pt),g(se,e),e&&t(dt),e&&t(Y),e&&t(ft),g(oe,e),e&&t(mt),e&&t(M),g(le),e&&t(ut),e&&t(D),e&&t(_t),g(re,e),e&&t(vt),e&&t(F),e&&t($t),e&&t(H),g(ie),e&&t(wt),e&&t(U),e&&t(yt),g(ne,e),e&&t(gt),e&&t(O),g(ce),e&&t(Et),e&&t(P),e&&t(bt),g(he,e),e&&t(At),e&&t(z),e&&t(Ct),e&&t(X),e&&t(kt),g(pe,e),e&&t(Dt),e&&t(Ce),e&&t(Pt),g(Z,e),e&&t(St),e&&t(ke),e&&t(jt),g(de,e),e&&t(xt),g(G,e),e&&t(It),e&&t(De),e&&t(Tt),e&&t(N),g(fe),e&&t(Mt),e&&t(Pe),e&&t(Ht),e&&t(J)}}}const to={local:"cache-management",sections:[{local:"cache-directory",title:"Cache directory"},{local:"download-mode",title:"Download mode"},{local:"cache-files",title:"Cache files"},{local:"enable-or-disable-caching",title:"Enable or disable caching"},{local:"improve-performance",title:"Improve performance"}],title:"Cache management"};function ao(ve){return Js(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class io extends Xs{constructor(f){super();Zs(this,f,ao,eo,Gs,{})}}export{io as default,to as metadata};
