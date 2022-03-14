import{S as hl,i as gl,s as _l,e as a,k as d,w as u,t as n,M as ul,c as l,d as e,m as c,a as o,x as v,h as i,b as f,F as t,g as p,y,q as S,o as $,B as w}from"../chunks/vendor-e67aec41.js";import{T as vl}from"../chunks/Tip-76459d1c.js";import{I as ft}from"../chunks/IconCopyLink-ffd7f84e.js";import{C as G}from"../chunks/CodeBlock-e2bcf023.js";function yl(Cs){let m,x,h,g,F,k,K,T;return{c(){m=a("p"),x=n("Remember to include your "),h=a("code"),g=n("aws_access_key_id"),F=n(" and "),k=a("code"),K=n("aws_secret_access_key"),T=n(" whenever you are interacting with a private S3 bucket.")},l(D){m=l(D,"P",{});var b=o(m);x=i(b,"Remember to include your "),h=l(b,"CODE",{});var E=o(h);g=i(E,"aws_access_key_id"),E.forEach(e),F=i(b," and "),k=l(b,"CODE",{});var js=o(k);K=i(js,"aws_secret_access_key"),js.forEach(e),T=i(b," whenever you are interacting with a private S3 bucket."),b.forEach(e)},m(D,b){p(D,m,b),t(m,x),t(m,h),t(h,g),t(m,F),t(m,k),t(k,K),t(m,T)},d(D){D&&e(m)}}}function Sl(Cs){let m,x,h,g,F,k,K,T,D,b,E,js,Es,oe,re,mt,N,Ls,Q,Ps,ne,ie,Os,pe,de,_,U,Gs,ce,fe,Ns,V,me,he,X,Is,ge,_e,Rs,Z,ue,ve,ss,zs,ye,Se,Hs,ts,$e,we,es,Ws,ke,be,Bs,as,je,Ee,ls,qs,xe,Ae,Ms,os,Fe,Te,rs,Ys,De,Ce,Js,ns,Le,ht,I,Pe,Ks,Oe,Ge,gt,C,R,Qs,is,Ne,Us,Ie,_t,xs,Vs,Re,ut,ps,vt,ds,cs,ze,Xs,He,We,yt,fs,St,A,Be,Zs,qe,Me,st,Ye,Je,$t,ms,wt,L,z,tt,hs,Ke,et,Qe,kt,As,Ue,bt,Fs,at,Ve,jt,gs,Et,_s,lt,Xe,xt,us,At,P,H,ot,vs,Ze,rt,sa,Ft,W,ta,Ts,ea,aa,Tt,ys,Dt,B,Ct,q,la,nt,oa,ra,Lt,Ss,Pt,O,M,it,$s,na,pt,ia,Ot,Y,pa,dt,da,ca,Gt,ws,Nt,J,fa,ct,ma,ha,It,ks,Rt;return k=new ft({}),is=new ft({}),ps=new G({props:{code:"pip install datasets[s3]",highlighted:'&gt;&gt;&gt; pip <span class="hljs-keyword">install </span>datasets[<span class="hljs-built_in">s3</span>]'}}),fs=new G({props:{code:`import datasets
s3 = datasets.filesystems.S3FileSystem(anon=True)  
s3.ls('public-datasets/imdb/train')`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> datasets
<span class="hljs-meta">&gt;&gt;&gt; </span>s3 = datasets.filesystems.S3FileSystem(anon=<span class="hljs-literal">True</span>)  
<span class="hljs-meta">&gt;&gt;&gt; </span>s3.ls(<span class="hljs-string">&#x27;public-datasets/imdb/train&#x27;</span>)
[<span class="hljs-string">&#x27;dataset_info.json.json&#x27;</span>,<span class="hljs-string">&#x27;dataset.arrow&#x27;</span>,<span class="hljs-string">&#x27;state.json&#x27;</span>]`}}),ms=new G({props:{code:`import datasets
s3 = datasets.filesystems.S3FileSystem(key=aws_access_key_id, secret=aws_secret_access_key)  
s3.ls('my-private-datasets/imdb/train')  `,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> datasets
<span class="hljs-meta">&gt;&gt;&gt; </span>s3 = datasets.filesystems.S3FileSystem(key=aws_access_key_id, secret=aws_secret_access_key)  
<span class="hljs-meta">&gt;&gt;&gt; </span>s3.ls(<span class="hljs-string">&#x27;my-private-datasets/imdb/train&#x27;</span>)  
[<span class="hljs-string">&#x27;dataset_info.json.json&#x27;</span>,<span class="hljs-string">&#x27;dataset.arrow&#x27;</span>,<span class="hljs-string">&#x27;state.json&#x27;</span>]`}}),hs=new ft({}),gs=new G({props:{code:`conda install -c conda-forge gcsfs
pip install gcsfs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">conda install -c conda-forge gcsfs</span>
# or install with pip
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">pip install gcsfs</span>`}}),us=new G({props:{code:`import gcsfs
gcs = gcsfs.GCSFileSystem(project='my-google-project') 

# saves encoded_dataset to your s3 bucket
encoded_dataset.save_to_disk('gcs://my-private-datasets/imdb/train', fs=gcs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> gcsfs
<span class="hljs-meta">&gt;&gt;&gt; </span>gcs = gcsfs.GCSFileSystem(project=<span class="hljs-string">&#x27;my-google-project&#x27;</span>) 

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saves encoded_dataset to your s3 bucket</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_dataset.save_to_disk(<span class="hljs-string">&#x27;gcs://my-private-datasets/imdb/train&#x27;</span>, fs=gcs)`}}),vs=new ft({}),ys=new G({props:{code:`from datasets.filesystems import S3FileSystem

# create S3FileSystem instance
s3 = S3FileSystem(anon=True)  

# saves encoded_dataset to your s3 bucket
encoded_dataset.save_to_disk('s3://my-private-datasets/imdb/train', fs=s3)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets.filesystems <span class="hljs-keyword">import</span> S3FileSystem

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create S3FileSystem instance</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>s3 = S3FileSystem(anon=<span class="hljs-literal">True</span>)  

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saves encoded_dataset to your s3 bucket</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_dataset.save_to_disk(<span class="hljs-string">&#x27;s3://my-private-datasets/imdb/train&#x27;</span>, fs=s3)`}}),B=new vl({props:{$$slots:{default:[yl]},$$scope:{ctx:Cs}}}),Ss=new G({props:{code:`import botocore
from datasets.filesystems import S3FileSystem

# creates a botocore session with the provided AWS profile
s3_session = botocore.session.Session(profile='my_profile_name')

# create S3FileSystem instance with s3_session
s3 = S3FileSystem(session=s3_session)  

# saves encoded_dataset to your s3 bucket
encoded_dataset.save_to_disk('s3://my-private-datasets/imdb/train',fs=s3)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> botocore
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets.filesystems <span class="hljs-keyword">import</span> S3FileSystem

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># creates a botocore session with the provided AWS profile</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>s3_session = botocore.session.Session(profile=<span class="hljs-string">&#x27;my_profile_name&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create S3FileSystem instance with s3_session</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>s3 = S3FileSystem(session=s3_session)  

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># saves encoded_dataset to your s3 bucket</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_dataset.save_to_disk(<span class="hljs-string">&#x27;s3://my-private-datasets/imdb/train&#x27;</span>,fs=s3)`}}),$s=new ft({}),ws=new G({props:{code:`from datasets import load_from_disk
from datasets.filesystems import S3FileSystem

# create S3FileSystem without credentials
s3 = S3FileSystem(anon=True)  

# load encoded_dataset to from s3 bucket
dataset = load_from_disk('s3://a-public-datasets/imdb/train',fs=s3)  

print(len(dataset))
# 25000`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_from_disk
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets.filesystems <span class="hljs-keyword">import</span> S3FileSystem

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create S3FileSystem without credentials</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>s3 = S3FileSystem(anon=<span class="hljs-literal">True</span>)  

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load encoded_dataset to from s3 bucket</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_from_disk(<span class="hljs-string">&#x27;s3://a-public-datasets/imdb/train&#x27;</span>,fs=s3)  

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-built_in">len</span>(dataset))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 25000</span>`}}),ks=new G({props:{code:`import botocore
from datasets.filesystems import S3FileSystem

# create S3FileSystem instance with aws_access_key_id and aws_secret_access_key
s3_session = botocore.session.Session(profile='my_profile_name')

# create S3FileSystem instance with s3_session
s3 = S3FileSystem(session=s3_session)

# load encoded_dataset to from s3 bucket
dataset = load_from_disk('s3://my-private-datasets/imdb/train',fs=s3)  

print(len(dataset))
# 25000`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> botocore
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets.filesystems <span class="hljs-keyword">import</span> S3FileSystem

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create S3FileSystem instance with aws_access_key_id and aws_secret_access_key</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>s3_session = botocore.session.Session(profile=<span class="hljs-string">&#x27;my_profile_name&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create S3FileSystem instance with s3_session</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>s3 = S3FileSystem(session=s3_session)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load encoded_dataset to from s3 bucket</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_from_disk(<span class="hljs-string">&#x27;s3://my-private-datasets/imdb/train&#x27;</span>,fs=s3)  

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-built_in">len</span>(dataset))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 25000</span>`}}),{c(){m=a("meta"),x=d(),h=a("h1"),g=a("a"),F=a("span"),u(k.$$.fragment),K=d(),T=a("span"),D=n("Cloud storage"),b=d(),E=a("p"),js=n("\u{1F917} Datasets supports access to cloud storage providers through a S3 filesystem implementation: "),Es=a("a"),oe=n("datasets.filesystems.S3FileSystem"),re=n(". You can save and load datasets from your Amazon S3 bucket in a Pythonic way. Take a look at the following table for other supported cloud storage providers:"),mt=d(),N=a("table"),Ls=a("thead"),Q=a("tr"),Ps=a("th"),ne=n("Storage provider"),ie=d(),Os=a("th"),pe=n("Filesystem implementation"),de=d(),_=a("tbody"),U=a("tr"),Gs=a("td"),ce=n("Amazon S3"),fe=d(),Ns=a("td"),V=a("a"),me=n("s3fs"),he=d(),X=a("tr"),Is=a("td"),ge=n("Google Cloud Storage"),_e=d(),Rs=a("td"),Z=a("a"),ue=n("gcsfs"),ve=d(),ss=a("tr"),zs=a("td"),ye=n("Azure DataLake"),Se=d(),Hs=a("td"),ts=a("a"),$e=n("adl"),we=d(),es=a("tr"),Ws=a("td"),ke=n("Azure Blob"),be=d(),Bs=a("td"),as=a("a"),je=n("abfs"),Ee=d(),ls=a("tr"),qs=a("td"),xe=n("Dropbox"),Ae=d(),Ms=a("td"),os=a("a"),Fe=n("dropboxdrivefs"),Te=d(),rs=a("tr"),Ys=a("td"),De=n("Google Drive"),Ce=d(),Js=a("td"),ns=a("a"),Le=n("gdrivefs"),ht=d(),I=a("p"),Pe=n("This guide will show you how to save and load datasets with "),Ks=a("strong"),Oe=n("s3fs"),Ge=n(" to a S3 bucket, but other filesystem implementations can be used similarly."),gt=d(),C=a("h2"),R=a("a"),Qs=a("span"),u(is.$$.fragment),Ne=d(),Us=a("span"),Ie=n("Listing datasets"),_t=d(),xs=a("ol"),Vs=a("li"),Re=n("Install the S3 dependency with \u{1F917} Datasets:"),ut=d(),u(ps.$$.fragment),vt=d(),ds=a("ol"),cs=a("li"),ze=n("List files from a public S3 bucket with "),Xs=a("code"),He=n("s3.ls"),We=n(":"),yt=d(),u(fs.$$.fragment),St=d(),A=a("p"),Be=n("Access a private S3 bucket by entering your "),Zs=a("code"),qe=n("aws_access_key_id"),Me=n(" and "),st=a("code"),Ye=n("aws_secret_access_key"),Je=n(":"),$t=d(),u(ms.$$.fragment),wt=d(),L=a("h3"),z=a("a"),tt=a("span"),u(hs.$$.fragment),Ke=d(),et=a("span"),Qe=n("Google Cloud Storage"),kt=d(),As=a("p"),Ue=n("Other filesystem implementations, like Google Cloud Storage, are used similarly:"),bt=d(),Fs=a("ol"),at=a("li"),Ve=n("Install the Google Cloud Storage implementation:"),jt=d(),u(gs.$$.fragment),Et=d(),_s=a("ol"),lt=a("li"),Xe=n("Load your dataset:"),xt=d(),u(us.$$.fragment),At=d(),P=a("h2"),H=a("a"),ot=a("span"),u(vs.$$.fragment),Ze=d(),rt=a("span"),sa=n("Saving datasets"),Ft=d(),W=a("p"),ta=n("After you have processed your dataset, you can save it to S3 with "),Ts=a("a"),ea=n("datasets.Dataset.save_to_disk()"),aa=n(":"),Tt=d(),u(ys.$$.fragment),Dt=d(),u(B.$$.fragment),Ct=d(),q=a("p"),la=n("Save your dataset with "),nt=a("code"),oa=n("botocore.session.Session"),ra=n(" and a custom AWS profile:"),Lt=d(),u(Ss.$$.fragment),Pt=d(),O=a("h2"),M=a("a"),it=a("span"),u($s.$$.fragment),na=d(),pt=a("span"),ia=n("Loading datasets"),Ot=d(),Y=a("p"),pa=n("When you are ready to use your dataset again, reload it with "),dt=a("code"),da=n("datasets.load_from_disk"),ca=n(":"),Gt=d(),u(ws.$$.fragment),Nt=d(),J=a("p"),fa=n("Load with "),ct=a("code"),ma=n("botocore.session.Session"),ha=n(" and custom AWS profile:"),It=d(),u(ks.$$.fragment),this.h()},l(s){const r=ul('[data-svelte="svelte-1phssyn"]',document.head);m=l(r,"META",{name:!0,content:!0}),r.forEach(e),x=c(s),h=l(s,"H1",{class:!0});var bs=o(h);g=l(bs,"A",{id:!0,class:!0,href:!0});var ga=o(g);F=l(ga,"SPAN",{});var _a=o(F);v(k.$$.fragment,_a),_a.forEach(e),ga.forEach(e),K=c(bs),T=l(bs,"SPAN",{});var ua=o(T);D=i(ua,"Cloud storage"),ua.forEach(e),bs.forEach(e),b=c(s),E=l(s,"P",{});var zt=o(E);js=i(zt,"\u{1F917} Datasets supports access to cloud storage providers through a S3 filesystem implementation: "),Es=l(zt,"A",{href:!0});var va=o(Es);oe=i(va,"datasets.filesystems.S3FileSystem"),va.forEach(e),re=i(zt,". You can save and load datasets from your Amazon S3 bucket in a Pythonic way. Take a look at the following table for other supported cloud storage providers:"),zt.forEach(e),mt=c(s),N=l(s,"TABLE",{});var Ht=o(N);Ls=l(Ht,"THEAD",{});var ya=o(Ls);Q=l(ya,"TR",{});var Wt=o(Q);Ps=l(Wt,"TH",{});var Sa=o(Ps);ne=i(Sa,"Storage provider"),Sa.forEach(e),ie=c(Wt),Os=l(Wt,"TH",{});var $a=o(Os);pe=i($a,"Filesystem implementation"),$a.forEach(e),Wt.forEach(e),ya.forEach(e),de=c(Ht),_=l(Ht,"TBODY",{});var j=o(_);U=l(j,"TR",{});var Bt=o(U);Gs=l(Bt,"TD",{});var wa=o(Gs);ce=i(wa,"Amazon S3"),wa.forEach(e),fe=c(Bt),Ns=l(Bt,"TD",{});var ka=o(Ns);V=l(ka,"A",{href:!0,rel:!0});var ba=o(V);me=i(ba,"s3fs"),ba.forEach(e),ka.forEach(e),Bt.forEach(e),he=c(j),X=l(j,"TR",{});var qt=o(X);Is=l(qt,"TD",{});var ja=o(Is);ge=i(ja,"Google Cloud Storage"),ja.forEach(e),_e=c(qt),Rs=l(qt,"TD",{});var Ea=o(Rs);Z=l(Ea,"A",{href:!0,rel:!0});var xa=o(Z);ue=i(xa,"gcsfs"),xa.forEach(e),Ea.forEach(e),qt.forEach(e),ve=c(j),ss=l(j,"TR",{});var Mt=o(ss);zs=l(Mt,"TD",{});var Aa=o(zs);ye=i(Aa,"Azure DataLake"),Aa.forEach(e),Se=c(Mt),Hs=l(Mt,"TD",{});var Fa=o(Hs);ts=l(Fa,"A",{href:!0,rel:!0});var Ta=o(ts);$e=i(Ta,"adl"),Ta.forEach(e),Fa.forEach(e),Mt.forEach(e),we=c(j),es=l(j,"TR",{});var Yt=o(es);Ws=l(Yt,"TD",{});var Da=o(Ws);ke=i(Da,"Azure Blob"),Da.forEach(e),be=c(Yt),Bs=l(Yt,"TD",{});var Ca=o(Bs);as=l(Ca,"A",{href:!0,rel:!0});var La=o(as);je=i(La,"abfs"),La.forEach(e),Ca.forEach(e),Yt.forEach(e),Ee=c(j),ls=l(j,"TR",{});var Jt=o(ls);qs=l(Jt,"TD",{});var Pa=o(qs);xe=i(Pa,"Dropbox"),Pa.forEach(e),Ae=c(Jt),Ms=l(Jt,"TD",{});var Oa=o(Ms);os=l(Oa,"A",{href:!0,rel:!0});var Ga=o(os);Fe=i(Ga,"dropboxdrivefs"),Ga.forEach(e),Oa.forEach(e),Jt.forEach(e),Te=c(j),rs=l(j,"TR",{});var Kt=o(rs);Ys=l(Kt,"TD",{});var Na=o(Ys);De=i(Na,"Google Drive"),Na.forEach(e),Ce=c(Kt),Js=l(Kt,"TD",{});var Ia=o(Js);ns=l(Ia,"A",{href:!0,rel:!0});var Ra=o(ns);Le=i(Ra,"gdrivefs"),Ra.forEach(e),Ia.forEach(e),Kt.forEach(e),j.forEach(e),Ht.forEach(e),ht=c(s),I=l(s,"P",{});var Qt=o(I);Pe=i(Qt,"This guide will show you how to save and load datasets with "),Ks=l(Qt,"STRONG",{});var za=o(Ks);Oe=i(za,"s3fs"),za.forEach(e),Ge=i(Qt," to a S3 bucket, but other filesystem implementations can be used similarly."),Qt.forEach(e),gt=c(s),C=l(s,"H2",{class:!0});var Ut=o(C);R=l(Ut,"A",{id:!0,class:!0,href:!0});var Ha=o(R);Qs=l(Ha,"SPAN",{});var Wa=o(Qs);v(is.$$.fragment,Wa),Wa.forEach(e),Ha.forEach(e),Ne=c(Ut),Us=l(Ut,"SPAN",{});var Ba=o(Us);Ie=i(Ba,"Listing datasets"),Ba.forEach(e),Ut.forEach(e),_t=c(s),xs=l(s,"OL",{});var qa=o(xs);Vs=l(qa,"LI",{});var Ma=o(Vs);Re=i(Ma,"Install the S3 dependency with \u{1F917} Datasets:"),Ma.forEach(e),qa.forEach(e),ut=c(s),v(ps.$$.fragment,s),vt=c(s),ds=l(s,"OL",{start:!0});var Ya=o(ds);cs=l(Ya,"LI",{});var Vt=o(cs);ze=i(Vt,"List files from a public S3 bucket with "),Xs=l(Vt,"CODE",{});var Ja=o(Xs);He=i(Ja,"s3.ls"),Ja.forEach(e),We=i(Vt,":"),Vt.forEach(e),Ya.forEach(e),yt=c(s),v(fs.$$.fragment,s),St=c(s),A=l(s,"P",{});var Ds=o(A);Be=i(Ds,"Access a private S3 bucket by entering your "),Zs=l(Ds,"CODE",{});var Ka=o(Zs);qe=i(Ka,"aws_access_key_id"),Ka.forEach(e),Me=i(Ds," and "),st=l(Ds,"CODE",{});var Qa=o(st);Ye=i(Qa,"aws_secret_access_key"),Qa.forEach(e),Je=i(Ds,":"),Ds.forEach(e),$t=c(s),v(ms.$$.fragment,s),wt=c(s),L=l(s,"H3",{class:!0});var Xt=o(L);z=l(Xt,"A",{id:!0,class:!0,href:!0});var Ua=o(z);tt=l(Ua,"SPAN",{});var Va=o(tt);v(hs.$$.fragment,Va),Va.forEach(e),Ua.forEach(e),Ke=c(Xt),et=l(Xt,"SPAN",{});var Xa=o(et);Qe=i(Xa,"Google Cloud Storage"),Xa.forEach(e),Xt.forEach(e),kt=c(s),As=l(s,"P",{});var Za=o(As);Ue=i(Za,"Other filesystem implementations, like Google Cloud Storage, are used similarly:"),Za.forEach(e),bt=c(s),Fs=l(s,"OL",{});var sl=o(Fs);at=l(sl,"LI",{});var tl=o(at);Ve=i(tl,"Install the Google Cloud Storage implementation:"),tl.forEach(e),sl.forEach(e),jt=c(s),v(gs.$$.fragment,s),Et=c(s),_s=l(s,"OL",{start:!0});var el=o(_s);lt=l(el,"LI",{});var al=o(lt);Xe=i(al,"Load your dataset:"),al.forEach(e),el.forEach(e),xt=c(s),v(us.$$.fragment,s),At=c(s),P=l(s,"H2",{class:!0});var Zt=o(P);H=l(Zt,"A",{id:!0,class:!0,href:!0});var ll=o(H);ot=l(ll,"SPAN",{});var ol=o(ot);v(vs.$$.fragment,ol),ol.forEach(e),ll.forEach(e),Ze=c(Zt),rt=l(Zt,"SPAN",{});var rl=o(rt);sa=i(rl,"Saving datasets"),rl.forEach(e),Zt.forEach(e),Ft=c(s),W=l(s,"P",{});var se=o(W);ta=i(se,"After you have processed your dataset, you can save it to S3 with "),Ts=l(se,"A",{href:!0});var nl=o(Ts);ea=i(nl,"datasets.Dataset.save_to_disk()"),nl.forEach(e),aa=i(se,":"),se.forEach(e),Tt=c(s),v(ys.$$.fragment,s),Dt=c(s),v(B.$$.fragment,s),Ct=c(s),q=l(s,"P",{});var te=o(q);la=i(te,"Save your dataset with "),nt=l(te,"CODE",{});var il=o(nt);oa=i(il,"botocore.session.Session"),il.forEach(e),ra=i(te," and a custom AWS profile:"),te.forEach(e),Lt=c(s),v(Ss.$$.fragment,s),Pt=c(s),O=l(s,"H2",{class:!0});var ee=o(O);M=l(ee,"A",{id:!0,class:!0,href:!0});var pl=o(M);it=l(pl,"SPAN",{});var dl=o(it);v($s.$$.fragment,dl),dl.forEach(e),pl.forEach(e),na=c(ee),pt=l(ee,"SPAN",{});var cl=o(pt);ia=i(cl,"Loading datasets"),cl.forEach(e),ee.forEach(e),Ot=c(s),Y=l(s,"P",{});var ae=o(Y);pa=i(ae,"When you are ready to use your dataset again, reload it with "),dt=l(ae,"CODE",{});var fl=o(dt);da=i(fl,"datasets.load_from_disk"),fl.forEach(e),ca=i(ae,":"),ae.forEach(e),Gt=c(s),v(ws.$$.fragment,s),Nt=c(s),J=l(s,"P",{});var le=o(J);fa=i(le,"Load with "),ct=l(le,"CODE",{});var ml=o(ct);ma=i(ml,"botocore.session.Session"),ml.forEach(e),ha=i(le," and custom AWS profile:"),le.forEach(e),It=c(s),v(ks.$$.fragment,s),this.h()},h(){f(m,"name","hf:doc:metadata"),f(m,"content",JSON.stringify($l)),f(g,"id","cloud-storage"),f(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(g,"href","#cloud-storage"),f(h,"class","relative group"),f(Es,"href","/docs/datasets/pr_3908/en/package_reference/main_classes#datasets.filesystems.S3FileSystem"),f(V,"href","https://s3fs.readthedocs.io/en/latest/"),f(V,"rel","nofollow"),f(Z,"href","https://gcsfs.readthedocs.io/en/latest/"),f(Z,"rel","nofollow"),f(ts,"href","https://github.com/dask/adlfs"),f(ts,"rel","nofollow"),f(as,"href","https://github.com/dask/adlfs"),f(as,"rel","nofollow"),f(os,"href","https://github.com/MarineChap/dropboxdrivefs"),f(os,"rel","nofollow"),f(ns,"href","https://github.com/intake/gdrivefs"),f(ns,"rel","nofollow"),f(R,"id","listing-datasets"),f(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(R,"href","#listing-datasets"),f(C,"class","relative group"),f(ds,"start","2"),f(z,"id","google-cloud-storage"),f(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(z,"href","#google-cloud-storage"),f(L,"class","relative group"),f(_s,"start","2"),f(H,"id","saving-datasets"),f(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(H,"href","#saving-datasets"),f(P,"class","relative group"),f(Ts,"href","/docs/datasets/pr_3908/en/package_reference/main_classes#datasets.Dataset.save_to_disk"),f(M,"id","loading-datasets"),f(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(M,"href","#loading-datasets"),f(O,"class","relative group")},m(s,r){t(document.head,m),p(s,x,r),p(s,h,r),t(h,g),t(g,F),y(k,F,null),t(h,K),t(h,T),t(T,D),p(s,b,r),p(s,E,r),t(E,js),t(E,Es),t(Es,oe),t(E,re),p(s,mt,r),p(s,N,r),t(N,Ls),t(Ls,Q),t(Q,Ps),t(Ps,ne),t(Q,ie),t(Q,Os),t(Os,pe),t(N,de),t(N,_),t(_,U),t(U,Gs),t(Gs,ce),t(U,fe),t(U,Ns),t(Ns,V),t(V,me),t(_,he),t(_,X),t(X,Is),t(Is,ge),t(X,_e),t(X,Rs),t(Rs,Z),t(Z,ue),t(_,ve),t(_,ss),t(ss,zs),t(zs,ye),t(ss,Se),t(ss,Hs),t(Hs,ts),t(ts,$e),t(_,we),t(_,es),t(es,Ws),t(Ws,ke),t(es,be),t(es,Bs),t(Bs,as),t(as,je),t(_,Ee),t(_,ls),t(ls,qs),t(qs,xe),t(ls,Ae),t(ls,Ms),t(Ms,os),t(os,Fe),t(_,Te),t(_,rs),t(rs,Ys),t(Ys,De),t(rs,Ce),t(rs,Js),t(Js,ns),t(ns,Le),p(s,ht,r),p(s,I,r),t(I,Pe),t(I,Ks),t(Ks,Oe),t(I,Ge),p(s,gt,r),p(s,C,r),t(C,R),t(R,Qs),y(is,Qs,null),t(C,Ne),t(C,Us),t(Us,Ie),p(s,_t,r),p(s,xs,r),t(xs,Vs),t(Vs,Re),p(s,ut,r),y(ps,s,r),p(s,vt,r),p(s,ds,r),t(ds,cs),t(cs,ze),t(cs,Xs),t(Xs,He),t(cs,We),p(s,yt,r),y(fs,s,r),p(s,St,r),p(s,A,r),t(A,Be),t(A,Zs),t(Zs,qe),t(A,Me),t(A,st),t(st,Ye),t(A,Je),p(s,$t,r),y(ms,s,r),p(s,wt,r),p(s,L,r),t(L,z),t(z,tt),y(hs,tt,null),t(L,Ke),t(L,et),t(et,Qe),p(s,kt,r),p(s,As,r),t(As,Ue),p(s,bt,r),p(s,Fs,r),t(Fs,at),t(at,Ve),p(s,jt,r),y(gs,s,r),p(s,Et,r),p(s,_s,r),t(_s,lt),t(lt,Xe),p(s,xt,r),y(us,s,r),p(s,At,r),p(s,P,r),t(P,H),t(H,ot),y(vs,ot,null),t(P,Ze),t(P,rt),t(rt,sa),p(s,Ft,r),p(s,W,r),t(W,ta),t(W,Ts),t(Ts,ea),t(W,aa),p(s,Tt,r),y(ys,s,r),p(s,Dt,r),y(B,s,r),p(s,Ct,r),p(s,q,r),t(q,la),t(q,nt),t(nt,oa),t(q,ra),p(s,Lt,r),y(Ss,s,r),p(s,Pt,r),p(s,O,r),t(O,M),t(M,it),y($s,it,null),t(O,na),t(O,pt),t(pt,ia),p(s,Ot,r),p(s,Y,r),t(Y,pa),t(Y,dt),t(dt,da),t(Y,ca),p(s,Gt,r),y(ws,s,r),p(s,Nt,r),p(s,J,r),t(J,fa),t(J,ct),t(ct,ma),t(J,ha),p(s,It,r),y(ks,s,r),Rt=!0},p(s,[r]){const bs={};r&2&&(bs.$$scope={dirty:r,ctx:s}),B.$set(bs)},i(s){Rt||(S(k.$$.fragment,s),S(is.$$.fragment,s),S(ps.$$.fragment,s),S(fs.$$.fragment,s),S(ms.$$.fragment,s),S(hs.$$.fragment,s),S(gs.$$.fragment,s),S(us.$$.fragment,s),S(vs.$$.fragment,s),S(ys.$$.fragment,s),S(B.$$.fragment,s),S(Ss.$$.fragment,s),S($s.$$.fragment,s),S(ws.$$.fragment,s),S(ks.$$.fragment,s),Rt=!0)},o(s){$(k.$$.fragment,s),$(is.$$.fragment,s),$(ps.$$.fragment,s),$(fs.$$.fragment,s),$(ms.$$.fragment,s),$(hs.$$.fragment,s),$(gs.$$.fragment,s),$(us.$$.fragment,s),$(vs.$$.fragment,s),$(ys.$$.fragment,s),$(B.$$.fragment,s),$(Ss.$$.fragment,s),$($s.$$.fragment,s),$(ws.$$.fragment,s),$(ks.$$.fragment,s),Rt=!1},d(s){e(m),s&&e(x),s&&e(h),w(k),s&&e(b),s&&e(E),s&&e(mt),s&&e(N),s&&e(ht),s&&e(I),s&&e(gt),s&&e(C),w(is),s&&e(_t),s&&e(xs),s&&e(ut),w(ps,s),s&&e(vt),s&&e(ds),s&&e(yt),w(fs,s),s&&e(St),s&&e(A),s&&e($t),w(ms,s),s&&e(wt),s&&e(L),w(hs),s&&e(kt),s&&e(As),s&&e(bt),s&&e(Fs),s&&e(jt),w(gs,s),s&&e(Et),s&&e(_s),s&&e(xt),w(us,s),s&&e(At),s&&e(P),w(vs),s&&e(Ft),s&&e(W),s&&e(Tt),w(ys,s),s&&e(Dt),w(B,s),s&&e(Ct),s&&e(q),s&&e(Lt),w(Ss,s),s&&e(Pt),s&&e(O),w($s),s&&e(Ot),s&&e(Y),s&&e(Gt),w(ws,s),s&&e(Nt),s&&e(J),s&&e(It),w(ks,s)}}}const $l={local:"cloud-storage",sections:[{local:"listing-datasets",sections:[{local:"google-cloud-storage",title:"Google Cloud Storage"}],title:"Listing datasets"},{local:"saving-datasets",title:"Saving datasets"},{local:"loading-datasets",title:"Loading datasets"}],title:"Cloud storage"};function wl(Cs,m,x){let{fw:h}=m;return Cs.$$set=g=>{"fw"in g&&x(0,h=g.fw)},[h]}class xl extends hl{constructor(m){super();gl(this,m,wl,Sl,_l,{fw:0})}}export{xl as default,$l as metadata};
