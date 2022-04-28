import{S as sn,i as rn,s as nn,e as s,k as u,w as d,t as i,M as ln,c as r,d as a,m as h,a as n,x as g,h as p,b as c,F as t,g as o,y as v,q as $,o as y,B as b,v as on}from"../chunks/vendor-4918fc3c.js";import{T as Gs}from"../chunks/Tip-3d800dd6.js";import{I as P}from"../chunks/IconCopyLink-21d338b1.js";import{C as De}from"../chunks/CodeBlock-99419108.js";function pn(Y){let f,k;return{c(){f=s("p"),k=i("\u{1F917} Accelerate is not saving any of your credentials.")},l(m){f=r(m,"P",{});var w=n(f);k=p(w,"\u{1F917} Accelerate is not saving any of your credentials."),w.forEach(a)},m(m,w){o(m,f,w),t(f,k)},d(m){m&&a(f)}}}function cn(Y){let f,k,m,w,S;return{c(){f=s("p"),k=i(`SageMaker doesn\u2019t support argparse actions. If you want to use, for example, boolean hyperparameters, you need to
specify type as bool in your script and provide an explicit True or False value for this hyperparameter. `),m=s("a"),w=i("[REF]"),S=i("."),this.h()},l(_){f=r(_,"P",{});var E=n(f);k=p(E,`SageMaker doesn\u2019t support argparse actions. If you want to use, for example, boolean hyperparameters, you need to
specify type as bool in your script and provide an explicit True or False value for this hyperparameter. `),m=r(E,"A",{href:!0,rel:!0});var x=n(m);w=p(x,"[REF]"),x.forEach(a),S=p(E,"."),E.forEach(a),this.h()},h(){c(m,"href","https://sagemaker.readthedocs.io/en/stable/frameworks/pytorch/using_pytorch.html#prepare-a-pytorch-training-script"),c(m,"rel","nofollow")},m(_,E){o(_,f,E),t(f,k),t(f,m),t(m,w),t(f,S)},d(_){_&&a(f)}}}function un(Y){let f,k,m,w,S;return{c(){f=s("p"),k=i("If you run one of the example scripts, don\u2019t forget to add "),m=s("code"),w=i("accelerator.save('/opt/ml/model')"),S=i(" to it.")},l(_){f=r(_,"P",{});var E=n(f);k=p(E,"If you run one of the example scripts, don\u2019t forget to add "),m=r(E,"CODE",{});var x=n(m);w=p(x,"accelerator.save('/opt/ml/model')"),x.forEach(a),S=p(E," to it."),E.forEach(a)},m(_,E){o(_,f,E),t(f,k),t(f,m),t(m,w),t(f,S)},d(_){_&&a(f)}}}function hn(Y){let f,k,m,w,S,_,E,x,Ct,Da,C,Dt,pe,Mt,Tt,ce,zt,It,Ma,z,G,We,ue,Nt,Ye,Lt,Ta,I,B,Ge,he,Ht,Be,Ot,za,J,qt,fe,Ft,Rt,Ia,K,Ut,Je,Wt,Yt,Na,me,La,A,Gt,Ke,Bt,Jt,Qe,Kt,Qt,Ve,Vt,Xt,Xe,Zt,es,Ha,de,Oa,Q,as,Ze,ts,ss,qa,N,V,ea,ge,rs,aa,ns,Fa,Me,ls,Ra,ve,Ua,Te,os,Wa,X,Ya,L,Z,ta,$e,is,sa,ps,Ga,D,cs,ra,us,hs,na,fs,ms,Ba,ye,Ja,ee,Ka,H,ae,la,be,ds,oa,gs,Qa,ze,vs,Va,we,Xa,Ie,$s,Za,Ne,ia,ys,et,te,at,_e,tt,Le,bs,st,Ee,rt,O,se,pa,ke,ws,ca,_s,nt,q,re,ua,Ae,Es,ha,ks,lt,He,fa,As,ot,F,ne,ma,je,js,da,Ss,it,Oe,ga,Ps,pt,R,le,va,Se,xs,$a,Cs,ct,j,Ds,ya,Ms,Ts,ba,zs,Is,wa,Ns,Ls,_a,Hs,Os,ut,U,oe,Ea,Pe,qs,ka,Fs,ht,qe,Aa,Rs,ft,W,ie,ja,xe,Us,Sa,Ws,mt,Fe,Pa,Ys,dt;return _=new P({}),ue=new P({}),he=new P({}),me=new De({props:{code:'pip install "accelerate[sagemaker]" --upgrade',highlighted:'pip install <span class="hljs-string">&quot;accelerate[sagemaker]&quot;</span> --upgrade'}}),de=new De({props:{code:"accelerate",highlighted:'<span class="hljs-attribute">accelerate</span>'}}),ge=new P({}),ve=new De({props:{code:`accelerate config
# In which compute environment are you running? ([0] This machine, [1] AWS (Amazon SageMaker)): 1`,highlighted:`accelerate config
<span class="hljs-comment"># In which compute environment are you running? ([0] This machine, [1] AWS (Amazon SageMaker)): 1</span>`}}),X=new Gs({props:{$$slots:{default:[pn]},$$scope:{ctx:Y}}}),$e=new P({}),ye=new De({props:{code:"- torch.save('/opt/ml/model`)\n+ accelerator.save('/opt/ml/model')",highlighted:'<span class="hljs-deletion">- torch.save(&#x27;/opt/ml/model`)</span>\n<span class="hljs-addition">+ accelerator.save(&#x27;/opt/ml/model&#x27;)</span>'}}),ee=new Gs({props:{warning:!0,$$slots:{default:[cn]},$$scope:{ctx:Y}}}),be=new P({}),we=new De({props:{code:"accelerate launch path_to_script.py --args_to_the_script",highlighted:'accelerate <span class="hljs-built_in">launch</span> path_to_script.py <span class="hljs-comment">--args_to_the_script</span>'}}),te=new Gs({props:{$$slots:{default:[un]},$$scope:{ctx:Y}}}),_e=new De({props:{code:"accelerate launch ./examples/sagemaker_example.py",highlighted:"accelerate launch ./examples/sagemaker_example.py"}}),Ee=new De({props:{code:`Configuring Amazon SageMaker environment
Converting Arguments to Hyperparameters
Creating Estimator
2021-04-08 11:56:50 Starting - Starting the training job...
2021-04-08 11:57:13 Starting - Launching requested ML instancesProfilerReport-1617883008: InProgress
.........
2021-04-08 11:58:54 Starting - Preparing the instances for training.........
2021-04-08 12:00:24 Downloading - Downloading input data
2021-04-08 12:00:24 Training - Downloading the training image..................
2021-04-08 12:03:39 Training - Training image download completed. Training in progress..
........
epoch 0: {'accuracy': 0.7598039215686274, 'f1': 0.8178438661710037}
epoch 1: {'accuracy': 0.8357843137254902, 'f1': 0.882249560632689}
epoch 2: {'accuracy': 0.8406862745098039, 'f1': 0.8869565217391304}
........
2021-04-08 12:05:40 Uploading - Uploading generated training model
2021-04-08 12:05:40 Completed - Training job completed
Training seconds: 331
Billable seconds: 331
You can find your model data at: s3://your-bucket/accelerate-sagemaker-1-2021-04-08-11-56-47-108/output/model.tar.gz`,highlighted:`Configuring Amazon SageMaker environment
Converting Arguments <span class="hljs-keyword">to</span> Hyperparameters
Creating Estimator
<span class="hljs-number">2021</span><span class="hljs-number">-04</span><span class="hljs-number">-08</span> <span class="hljs-number">11</span>:<span class="hljs-number">56</span>:<span class="hljs-number">50</span> Starting - Starting the training job<span class="hljs-params">...</span>
<span class="hljs-number">2021</span><span class="hljs-number">-04</span><span class="hljs-number">-08</span> <span class="hljs-number">11</span>:<span class="hljs-number">57</span>:<span class="hljs-number">13</span> Starting - Launching requested ML instancesProfilerReport<span class="hljs-number">-1617883008</span>: InProgress
<span class="hljs-params">...</span><span class="hljs-params">...</span><span class="hljs-params">...</span>
<span class="hljs-number">2021</span><span class="hljs-number">-04</span><span class="hljs-number">-08</span> <span class="hljs-number">11</span>:<span class="hljs-number">58</span>:<span class="hljs-number">54</span> Starting - Preparing the instances for training<span class="hljs-params">...</span><span class="hljs-params">...</span><span class="hljs-params">...</span>
<span class="hljs-number">2021</span><span class="hljs-number">-04</span><span class="hljs-number">-08</span> <span class="hljs-number">12</span>:<span class="hljs-number">00</span>:<span class="hljs-number">24</span> Downloading - Downloading input <span class="hljs-built_in">data</span>
<span class="hljs-number">2021</span><span class="hljs-number">-04</span><span class="hljs-number">-08</span> <span class="hljs-number">12</span>:<span class="hljs-number">00</span>:<span class="hljs-number">24</span> Training - Downloading the training image<span class="hljs-params">...</span><span class="hljs-params">...</span><span class="hljs-params">...</span><span class="hljs-params">...</span><span class="hljs-params">...</span><span class="hljs-params">...</span>
<span class="hljs-number">2021</span><span class="hljs-number">-04</span><span class="hljs-number">-08</span> <span class="hljs-number">12</span>:<span class="hljs-number">03</span>:<span class="hljs-number">39</span> Training - Training image download completed. Training <span class="hljs-keyword">in</span> progress..
<span class="hljs-params">...</span><span class="hljs-params">...</span>..
epoch <span class="hljs-number">0</span>: {<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.7598039215686274</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8178438661710037</span>}
epoch <span class="hljs-number">1</span>: {<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8357843137254902</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.882249560632689</span>}
epoch <span class="hljs-number">2</span>: {<span class="hljs-string">&#x27;accuracy&#x27;</span>: <span class="hljs-number">0.8406862745098039</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">0.8869565217391304</span>}
<span class="hljs-params">...</span><span class="hljs-params">...</span>..
<span class="hljs-number">2021</span><span class="hljs-number">-04</span><span class="hljs-number">-08</span> <span class="hljs-number">12</span>:<span class="hljs-number">05</span>:<span class="hljs-number">40</span> Uploading - Uploading generated training model
<span class="hljs-number">2021</span><span class="hljs-number">-04</span><span class="hljs-number">-08</span> <span class="hljs-number">12</span>:<span class="hljs-number">05</span>:<span class="hljs-number">40</span> Completed - Training job completed
Training seconds: <span class="hljs-number">331</span>
Billable seconds: <span class="hljs-number">331</span>
You can find your model <span class="hljs-built_in">data</span> at: s3:<span class="hljs-comment">//your-bucket/accelerate-sagemaker-1-2021-04-08-11-56-47-108/output/model.tar.gz</span>`}}),ke=new P({}),Ae=new P({}),je=new P({}),Se=new P({}),Pe=new P({}),xe=new P({}),{c(){f=s("meta"),k=u(),m=s("h1"),w=s("a"),S=s("span"),d(_.$$.fragment),E=u(),x=s("span"),Ct=i("Amazon SageMaker"),Da=u(),C=s("p"),Dt=i("Hugging Face and Amazon introduced new "),pe=s("a"),Mt=i("Hugging Face Deep Learning Containers (DLCs)"),Tt=i(` to
make it easier than ever to train Hugging Face Transformer models in `),ce=s("a"),zt=i("Amazon SageMaker"),It=i("."),Ma=u(),z=s("h2"),G=s("a"),We=s("span"),d(ue.$$.fragment),Nt=u(),Ye=s("span"),Lt=i("Getting Started"),Ta=u(),I=s("h3"),B=s("a"),Ge=s("span"),d(he.$$.fragment),Ht=u(),Be=s("span"),Ot=i("Setup & Installation"),za=u(),J=s("p"),qt=i(`Before you can run your \u{1F917} Accelerate scripts on Amazon SageMaker you need to sign up for an AWS account. If you do not
have an AWS account yet learn more `),fe=s("a"),Ft=i("here"),Rt=i("."),Ia=u(),K=s("p"),Ut=i("After you have your AWS Account you need to install the "),Je=s("code"),Wt=i("sagemaker"),Yt=i(" sdk for \u{1F917} Accelerate with."),Na=u(),d(me.$$.fragment),La=u(),A=s("p"),Gt=i("\u{1F917} Accelerate currently uses the \u{1F917} DLCs, with "),Ke=s("code"),Bt=i("transformers"),Jt=i(", "),Qe=s("code"),Kt=i("datasets"),Qt=i(" and "),Ve=s("code"),Vt=i("tokenizers"),Xt=i(` pre-installed. \u{1F917}
Accelerate is not in the DLC yet (will soon be added!) so to use it within Amazon SageMaker you need to create a
`),Xe=s("code"),Zt=i("requirements.txt"),es=i(" in the same directory where your training script is located and add it as dependency."),Ha=u(),d(de.$$.fragment),Oa=u(),Q=s("p"),as=i("You should also add any other dependencies you have to this "),Ze=s("code"),ts=i("requirements.txt"),ss=i("."),qa=u(),N=s("h3"),V=s("a"),ea=s("span"),d(ge.$$.fragment),rs=u(),aa=s("span"),ns=i("Configure \u{1F917} Accelerate"),Fa=u(),Me=s("p"),ls=i(`You can configure the launch configuration for Amazon SageMaker the same as you do for non SageMaker training jobs with
the \u{1F917} Accelerate CLI.`),Ra=u(),d(ve.$$.fragment),Ua=u(),Te=s("p"),os=i("\u{1F917} Accelerate will go through a questionnaire about your Amazon SageMaker setup and create a config file you can edit."),Wa=u(),d(X.$$.fragment),Ya=u(),L=s("h3"),Z=s("a"),ta=s("span"),d($e.$$.fragment),is=u(),sa=s("span"),ps=i("Prepare a \u{1F917} Accelerate fine-tuning script"),Ga=u(),D=s("p"),cs=i(`The training script is very similar to a training script you might run outside of SageMaker, but to save your model
after training you need to specify either `),ra=s("code"),us=i("/opt/ml/model"),hs=i(" or use "),na=s("code"),fs=i('os.environ["SM_MODEL_DIR"]'),ms=i(` as your save
directory. After training, artifacts in this directory are uploaded to S3.`),Ba=u(),d(ye.$$.fragment),Ja=u(),d(ee.$$.fragment),Ka=u(),H=s("h3"),ae=s("a"),la=s("span"),d(be.$$.fragment),ds=u(),oa=s("span"),gs=i("Launch Training"),Qa=u(),ze=s("p"),vs=i("You can launch your training with \u{1F917} Accelerate CLI with"),Va=u(),d(we.$$.fragment),Xa=u(),Ie=s("p"),$s=i(`This will launch your training script using your configuration. The only thing you have to do is provide all the
arguments needed by your training script as named arguments.`),Za=u(),Ne=s("p"),ia=s("strong"),ys=i("Examples"),et=u(),d(te.$$.fragment),at=u(),d(_e.$$.fragment),tt=u(),Le=s("p"),bs=i("Outputs:"),st=u(),d(Ee.$$.fragment),rt=u(),O=s("h2"),se=s("a"),pa=s("span"),d(ke.$$.fragment),ws=u(),ca=s("span"),_s=i("Advanced Features"),nt=u(),q=s("h3"),re=s("a"),ua=s("span"),d(Ae.$$.fragment),Es=u(),ha=s("span"),ks=i("Distributed Training: Data Parallelism"),lt=u(),He=s("p"),fa=s("em"),As=i("currently in development, will be supported soon."),ot=u(),F=s("h3"),ne=s("a"),ma=s("span"),d(je.$$.fragment),js=u(),da=s("span"),Ss=i("Distributed Training: Model Parallelism"),it=u(),Oe=s("p"),ga=s("em"),Ps=i("currently in development, will be supported soon."),pt=u(),R=s("h3"),le=s("a"),va=s("span"),d(Se.$$.fragment),xs=u(),$a=s("span"),Cs=i("Python packages and dependencies"),ct=u(),j=s("p"),Ds=i("\u{1F917} Accelerate currently uses the \u{1F917} DLCs, with "),ya=s("code"),Ms=i("transformers"),Ts=i(", "),ba=s("code"),zs=i("datasets"),Is=i(" and "),wa=s("code"),Ns=i("tokenizers"),Ls=i(` pre-installed. If you
want to use different/other Python packages you can do this by adding them to the `),_a=s("code"),Hs=i("requirements.txt"),Os=i(`. These packages
will be installed before your training script is started.`),ut=u(),U=s("h3"),oe=s("a"),Ea=s("span"),d(Pe.$$.fragment),qs=u(),ka=s("span"),Fs=i("Remote scripts: Use scripts located on Github"),ht=u(),qe=s("p"),Aa=s("em"),Rs=i("undecided if feature is needed. Contact us if you would like this feature."),ft=u(),W=s("h3"),ie=s("a"),ja=s("span"),d(xe.$$.fragment),Us=u(),Sa=s("span"),Ws=i("Use Spot Instances"),mt=u(),Fe=s("p"),Pa=s("em"),Ys=i("undecided if feature is needed. Contact us if you would like this feature."),this.h()},l(e){const l=ln('[data-svelte="svelte-1phssyn"]',document.head);f=r(l,"META",{name:!0,content:!0}),l.forEach(a),k=h(e),m=r(e,"H1",{class:!0});var Ce=n(m);w=r(Ce,"A",{id:!0,class:!0,href:!0});var xa=n(w);S=r(xa,"SPAN",{});var Ca=n(S);g(_.$$.fragment,Ca),Ca.forEach(a),xa.forEach(a),E=h(Ce),x=r(Ce,"SPAN",{});var Bs=n(x);Ct=p(Bs,"Amazon SageMaker"),Bs.forEach(a),Ce.forEach(a),Da=h(e),C=r(e,"P",{});var Re=n(C);Dt=p(Re,"Hugging Face and Amazon introduced new "),pe=r(Re,"A",{href:!0,rel:!0});var Js=n(pe);Mt=p(Js,"Hugging Face Deep Learning Containers (DLCs)"),Js.forEach(a),Tt=p(Re,` to
make it easier than ever to train Hugging Face Transformer models in `),ce=r(Re,"A",{href:!0,rel:!0});var Ks=n(ce);zt=p(Ks,"Amazon SageMaker"),Ks.forEach(a),It=p(Re,"."),Re.forEach(a),Ma=h(e),z=r(e,"H2",{class:!0});var gt=n(z);G=r(gt,"A",{id:!0,class:!0,href:!0});var Qs=n(G);We=r(Qs,"SPAN",{});var Vs=n(We);g(ue.$$.fragment,Vs),Vs.forEach(a),Qs.forEach(a),Nt=h(gt),Ye=r(gt,"SPAN",{});var Xs=n(Ye);Lt=p(Xs,"Getting Started"),Xs.forEach(a),gt.forEach(a),Ta=h(e),I=r(e,"H3",{class:!0});var vt=n(I);B=r(vt,"A",{id:!0,class:!0,href:!0});var Zs=n(B);Ge=r(Zs,"SPAN",{});var er=n(Ge);g(he.$$.fragment,er),er.forEach(a),Zs.forEach(a),Ht=h(vt),Be=r(vt,"SPAN",{});var ar=n(Be);Ot=p(ar,"Setup & Installation"),ar.forEach(a),vt.forEach(a),za=h(e),J=r(e,"P",{});var $t=n(J);qt=p($t,`Before you can run your \u{1F917} Accelerate scripts on Amazon SageMaker you need to sign up for an AWS account. If you do not
have an AWS account yet learn more `),fe=r($t,"A",{href:!0,rel:!0});var tr=n(fe);Ft=p(tr,"here"),tr.forEach(a),Rt=p($t,"."),$t.forEach(a),Ia=h(e),K=r(e,"P",{});var yt=n(K);Ut=p(yt,"After you have your AWS Account you need to install the "),Je=r(yt,"CODE",{});var sr=n(Je);Wt=p(sr,"sagemaker"),sr.forEach(a),Yt=p(yt," sdk for \u{1F917} Accelerate with."),yt.forEach(a),Na=h(e),g(me.$$.fragment,e),La=h(e),A=r(e,"P",{});var M=n(A);Gt=p(M,"\u{1F917} Accelerate currently uses the \u{1F917} DLCs, with "),Ke=r(M,"CODE",{});var rr=n(Ke);Bt=p(rr,"transformers"),rr.forEach(a),Jt=p(M,", "),Qe=r(M,"CODE",{});var nr=n(Qe);Kt=p(nr,"datasets"),nr.forEach(a),Qt=p(M," and "),Ve=r(M,"CODE",{});var lr=n(Ve);Vt=p(lr,"tokenizers"),lr.forEach(a),Xt=p(M,` pre-installed. \u{1F917}
Accelerate is not in the DLC yet (will soon be added!) so to use it within Amazon SageMaker you need to create a
`),Xe=r(M,"CODE",{});var or=n(Xe);Zt=p(or,"requirements.txt"),or.forEach(a),es=p(M," in the same directory where your training script is located and add it as dependency."),M.forEach(a),Ha=h(e),g(de.$$.fragment,e),Oa=h(e),Q=r(e,"P",{});var bt=n(Q);as=p(bt,"You should also add any other dependencies you have to this "),Ze=r(bt,"CODE",{});var ir=n(Ze);ts=p(ir,"requirements.txt"),ir.forEach(a),ss=p(bt,"."),bt.forEach(a),qa=h(e),N=r(e,"H3",{class:!0});var wt=n(N);V=r(wt,"A",{id:!0,class:!0,href:!0});var pr=n(V);ea=r(pr,"SPAN",{});var cr=n(ea);g(ge.$$.fragment,cr),cr.forEach(a),pr.forEach(a),rs=h(wt),aa=r(wt,"SPAN",{});var ur=n(aa);ns=p(ur,"Configure \u{1F917} Accelerate"),ur.forEach(a),wt.forEach(a),Fa=h(e),Me=r(e,"P",{});var hr=n(Me);ls=p(hr,`You can configure the launch configuration for Amazon SageMaker the same as you do for non SageMaker training jobs with
the \u{1F917} Accelerate CLI.`),hr.forEach(a),Ra=h(e),g(ve.$$.fragment,e),Ua=h(e),Te=r(e,"P",{});var fr=n(Te);os=p(fr,"\u{1F917} Accelerate will go through a questionnaire about your Amazon SageMaker setup and create a config file you can edit."),fr.forEach(a),Wa=h(e),g(X.$$.fragment,e),Ya=h(e),L=r(e,"H3",{class:!0});var _t=n(L);Z=r(_t,"A",{id:!0,class:!0,href:!0});var mr=n(Z);ta=r(mr,"SPAN",{});var dr=n(ta);g($e.$$.fragment,dr),dr.forEach(a),mr.forEach(a),is=h(_t),sa=r(_t,"SPAN",{});var gr=n(sa);ps=p(gr,"Prepare a \u{1F917} Accelerate fine-tuning script"),gr.forEach(a),_t.forEach(a),Ga=h(e),D=r(e,"P",{});var Ue=n(D);cs=p(Ue,`The training script is very similar to a training script you might run outside of SageMaker, but to save your model
after training you need to specify either `),ra=r(Ue,"CODE",{});var vr=n(ra);us=p(vr,"/opt/ml/model"),vr.forEach(a),hs=p(Ue," or use "),na=r(Ue,"CODE",{});var $r=n(na);fs=p($r,'os.environ["SM_MODEL_DIR"]'),$r.forEach(a),ms=p(Ue,` as your save
directory. After training, artifacts in this directory are uploaded to S3.`),Ue.forEach(a),Ba=h(e),g(ye.$$.fragment,e),Ja=h(e),g(ee.$$.fragment,e),Ka=h(e),H=r(e,"H3",{class:!0});var Et=n(H);ae=r(Et,"A",{id:!0,class:!0,href:!0});var yr=n(ae);la=r(yr,"SPAN",{});var br=n(la);g(be.$$.fragment,br),br.forEach(a),yr.forEach(a),ds=h(Et),oa=r(Et,"SPAN",{});var wr=n(oa);gs=p(wr,"Launch Training"),wr.forEach(a),Et.forEach(a),Qa=h(e),ze=r(e,"P",{});var _r=n(ze);vs=p(_r,"You can launch your training with \u{1F917} Accelerate CLI with"),_r.forEach(a),Va=h(e),g(we.$$.fragment,e),Xa=h(e),Ie=r(e,"P",{});var Er=n(Ie);$s=p(Er,`This will launch your training script using your configuration. The only thing you have to do is provide all the
arguments needed by your training script as named arguments.`),Er.forEach(a),Za=h(e),Ne=r(e,"P",{});var kr=n(Ne);ia=r(kr,"STRONG",{});var Ar=n(ia);ys=p(Ar,"Examples"),Ar.forEach(a),kr.forEach(a),et=h(e),g(te.$$.fragment,e),at=h(e),g(_e.$$.fragment,e),tt=h(e),Le=r(e,"P",{});var jr=n(Le);bs=p(jr,"Outputs:"),jr.forEach(a),st=h(e),g(Ee.$$.fragment,e),rt=h(e),O=r(e,"H2",{class:!0});var kt=n(O);se=r(kt,"A",{id:!0,class:!0,href:!0});var Sr=n(se);pa=r(Sr,"SPAN",{});var Pr=n(pa);g(ke.$$.fragment,Pr),Pr.forEach(a),Sr.forEach(a),ws=h(kt),ca=r(kt,"SPAN",{});var xr=n(ca);_s=p(xr,"Advanced Features"),xr.forEach(a),kt.forEach(a),nt=h(e),q=r(e,"H3",{class:!0});var At=n(q);re=r(At,"A",{id:!0,class:!0,href:!0});var Cr=n(re);ua=r(Cr,"SPAN",{});var Dr=n(ua);g(Ae.$$.fragment,Dr),Dr.forEach(a),Cr.forEach(a),Es=h(At),ha=r(At,"SPAN",{});var Mr=n(ha);ks=p(Mr,"Distributed Training: Data Parallelism"),Mr.forEach(a),At.forEach(a),lt=h(e),He=r(e,"P",{});var Tr=n(He);fa=r(Tr,"EM",{});var zr=n(fa);As=p(zr,"currently in development, will be supported soon."),zr.forEach(a),Tr.forEach(a),ot=h(e),F=r(e,"H3",{class:!0});var jt=n(F);ne=r(jt,"A",{id:!0,class:!0,href:!0});var Ir=n(ne);ma=r(Ir,"SPAN",{});var Nr=n(ma);g(je.$$.fragment,Nr),Nr.forEach(a),Ir.forEach(a),js=h(jt),da=r(jt,"SPAN",{});var Lr=n(da);Ss=p(Lr,"Distributed Training: Model Parallelism"),Lr.forEach(a),jt.forEach(a),it=h(e),Oe=r(e,"P",{});var Hr=n(Oe);ga=r(Hr,"EM",{});var Or=n(ga);Ps=p(Or,"currently in development, will be supported soon."),Or.forEach(a),Hr.forEach(a),pt=h(e),R=r(e,"H3",{class:!0});var St=n(R);le=r(St,"A",{id:!0,class:!0,href:!0});var qr=n(le);va=r(qr,"SPAN",{});var Fr=n(va);g(Se.$$.fragment,Fr),Fr.forEach(a),qr.forEach(a),xs=h(St),$a=r(St,"SPAN",{});var Rr=n($a);Cs=p(Rr,"Python packages and dependencies"),Rr.forEach(a),St.forEach(a),ct=h(e),j=r(e,"P",{});var T=n(j);Ds=p(T,"\u{1F917} Accelerate currently uses the \u{1F917} DLCs, with "),ya=r(T,"CODE",{});var Ur=n(ya);Ms=p(Ur,"transformers"),Ur.forEach(a),Ts=p(T,", "),ba=r(T,"CODE",{});var Wr=n(ba);zs=p(Wr,"datasets"),Wr.forEach(a),Is=p(T," and "),wa=r(T,"CODE",{});var Yr=n(wa);Ns=p(Yr,"tokenizers"),Yr.forEach(a),Ls=p(T,` pre-installed. If you
want to use different/other Python packages you can do this by adding them to the `),_a=r(T,"CODE",{});var Gr=n(_a);Hs=p(Gr,"requirements.txt"),Gr.forEach(a),Os=p(T,`. These packages
will be installed before your training script is started.`),T.forEach(a),ut=h(e),U=r(e,"H3",{class:!0});var Pt=n(U);oe=r(Pt,"A",{id:!0,class:!0,href:!0});var Br=n(oe);Ea=r(Br,"SPAN",{});var Jr=n(Ea);g(Pe.$$.fragment,Jr),Jr.forEach(a),Br.forEach(a),qs=h(Pt),ka=r(Pt,"SPAN",{});var Kr=n(ka);Fs=p(Kr,"Remote scripts: Use scripts located on Github"),Kr.forEach(a),Pt.forEach(a),ht=h(e),qe=r(e,"P",{});var Qr=n(qe);Aa=r(Qr,"EM",{});var Vr=n(Aa);Rs=p(Vr,"undecided if feature is needed. Contact us if you would like this feature."),Vr.forEach(a),Qr.forEach(a),ft=h(e),W=r(e,"H3",{class:!0});var xt=n(W);ie=r(xt,"A",{id:!0,class:!0,href:!0});var Xr=n(ie);ja=r(Xr,"SPAN",{});var Zr=n(ja);g(xe.$$.fragment,Zr),Zr.forEach(a),Xr.forEach(a),Us=h(xt),Sa=r(xt,"SPAN",{});var en=n(Sa);Ws=p(en,"Use Spot Instances"),en.forEach(a),xt.forEach(a),mt=h(e),Fe=r(e,"P",{});var an=n(Fe);Pa=r(an,"EM",{});var tn=n(Pa);Ys=p(tn,"undecided if feature is needed. Contact us if you would like this feature."),tn.forEach(a),an.forEach(a),this.h()},h(){c(f,"name","hf:doc:metadata"),c(f,"content",JSON.stringify(fn)),c(w,"id","amazon-sagemaker"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#amazon-sagemaker"),c(m,"class","relative group"),c(pe,"href","https://github.com/aws/deep-learning-containers/blob/master/available_images.md#huggingface-training-containers"),c(pe,"rel","nofollow"),c(ce,"href","https://aws.amazon.com/sagemaker/"),c(ce,"rel","nofollow"),c(G,"id","getting-started"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#getting-started"),c(z,"class","relative group"),c(B,"id","setup-installation"),c(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(B,"href","#setup-installation"),c(I,"class","relative group"),c(fe,"href","https://docs.aws.amazon.com/sagemaker/latest/dg/gs-set-up.html"),c(fe,"rel","nofollow"),c(V,"id","configure-accelerate"),c(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(V,"href","#configure-accelerate"),c(N,"class","relative group"),c(Z,"id","prepare-a-accelerate-finetuning-script"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#prepare-a-accelerate-finetuning-script"),c(L,"class","relative group"),c(ae,"id","launch-training"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#launch-training"),c(H,"class","relative group"),c(se,"id","advanced-features"),c(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(se,"href","#advanced-features"),c(O,"class","relative group"),c(re,"id","distributed-training-data-parallelism"),c(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(re,"href","#distributed-training-data-parallelism"),c(q,"class","relative group"),c(ne,"id","distributed-training-model-parallelism"),c(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ne,"href","#distributed-training-model-parallelism"),c(F,"class","relative group"),c(le,"id","python-packages-and-dependencies"),c(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(le,"href","#python-packages-and-dependencies"),c(R,"class","relative group"),c(oe,"id","remote-scripts-use-scripts-located-on-github"),c(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oe,"href","#remote-scripts-use-scripts-located-on-github"),c(U,"class","relative group"),c(ie,"id","use-spot-instances"),c(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ie,"href","#use-spot-instances"),c(W,"class","relative group")},m(e,l){t(document.head,f),o(e,k,l),o(e,m,l),t(m,w),t(w,S),v(_,S,null),t(m,E),t(m,x),t(x,Ct),o(e,Da,l),o(e,C,l),t(C,Dt),t(C,pe),t(pe,Mt),t(C,Tt),t(C,ce),t(ce,zt),t(C,It),o(e,Ma,l),o(e,z,l),t(z,G),t(G,We),v(ue,We,null),t(z,Nt),t(z,Ye),t(Ye,Lt),o(e,Ta,l),o(e,I,l),t(I,B),t(B,Ge),v(he,Ge,null),t(I,Ht),t(I,Be),t(Be,Ot),o(e,za,l),o(e,J,l),t(J,qt),t(J,fe),t(fe,Ft),t(J,Rt),o(e,Ia,l),o(e,K,l),t(K,Ut),t(K,Je),t(Je,Wt),t(K,Yt),o(e,Na,l),v(me,e,l),o(e,La,l),o(e,A,l),t(A,Gt),t(A,Ke),t(Ke,Bt),t(A,Jt),t(A,Qe),t(Qe,Kt),t(A,Qt),t(A,Ve),t(Ve,Vt),t(A,Xt),t(A,Xe),t(Xe,Zt),t(A,es),o(e,Ha,l),v(de,e,l),o(e,Oa,l),o(e,Q,l),t(Q,as),t(Q,Ze),t(Ze,ts),t(Q,ss),o(e,qa,l),o(e,N,l),t(N,V),t(V,ea),v(ge,ea,null),t(N,rs),t(N,aa),t(aa,ns),o(e,Fa,l),o(e,Me,l),t(Me,ls),o(e,Ra,l),v(ve,e,l),o(e,Ua,l),o(e,Te,l),t(Te,os),o(e,Wa,l),v(X,e,l),o(e,Ya,l),o(e,L,l),t(L,Z),t(Z,ta),v($e,ta,null),t(L,is),t(L,sa),t(sa,ps),o(e,Ga,l),o(e,D,l),t(D,cs),t(D,ra),t(ra,us),t(D,hs),t(D,na),t(na,fs),t(D,ms),o(e,Ba,l),v(ye,e,l),o(e,Ja,l),v(ee,e,l),o(e,Ka,l),o(e,H,l),t(H,ae),t(ae,la),v(be,la,null),t(H,ds),t(H,oa),t(oa,gs),o(e,Qa,l),o(e,ze,l),t(ze,vs),o(e,Va,l),v(we,e,l),o(e,Xa,l),o(e,Ie,l),t(Ie,$s),o(e,Za,l),o(e,Ne,l),t(Ne,ia),t(ia,ys),o(e,et,l),v(te,e,l),o(e,at,l),v(_e,e,l),o(e,tt,l),o(e,Le,l),t(Le,bs),o(e,st,l),v(Ee,e,l),o(e,rt,l),o(e,O,l),t(O,se),t(se,pa),v(ke,pa,null),t(O,ws),t(O,ca),t(ca,_s),o(e,nt,l),o(e,q,l),t(q,re),t(re,ua),v(Ae,ua,null),t(q,Es),t(q,ha),t(ha,ks),o(e,lt,l),o(e,He,l),t(He,fa),t(fa,As),o(e,ot,l),o(e,F,l),t(F,ne),t(ne,ma),v(je,ma,null),t(F,js),t(F,da),t(da,Ss),o(e,it,l),o(e,Oe,l),t(Oe,ga),t(ga,Ps),o(e,pt,l),o(e,R,l),t(R,le),t(le,va),v(Se,va,null),t(R,xs),t(R,$a),t($a,Cs),o(e,ct,l),o(e,j,l),t(j,Ds),t(j,ya),t(ya,Ms),t(j,Ts),t(j,ba),t(ba,zs),t(j,Is),t(j,wa),t(wa,Ns),t(j,Ls),t(j,_a),t(_a,Hs),t(j,Os),o(e,ut,l),o(e,U,l),t(U,oe),t(oe,Ea),v(Pe,Ea,null),t(U,qs),t(U,ka),t(ka,Fs),o(e,ht,l),o(e,qe,l),t(qe,Aa),t(Aa,Rs),o(e,ft,l),o(e,W,l),t(W,ie),t(ie,ja),v(xe,ja,null),t(W,Us),t(W,Sa),t(Sa,Ws),o(e,mt,l),o(e,Fe,l),t(Fe,Pa),t(Pa,Ys),dt=!0},p(e,[l]){const Ce={};l&2&&(Ce.$$scope={dirty:l,ctx:e}),X.$set(Ce);const xa={};l&2&&(xa.$$scope={dirty:l,ctx:e}),ee.$set(xa);const Ca={};l&2&&(Ca.$$scope={dirty:l,ctx:e}),te.$set(Ca)},i(e){dt||($(_.$$.fragment,e),$(ue.$$.fragment,e),$(he.$$.fragment,e),$(me.$$.fragment,e),$(de.$$.fragment,e),$(ge.$$.fragment,e),$(ve.$$.fragment,e),$(X.$$.fragment,e),$($e.$$.fragment,e),$(ye.$$.fragment,e),$(ee.$$.fragment,e),$(be.$$.fragment,e),$(we.$$.fragment,e),$(te.$$.fragment,e),$(_e.$$.fragment,e),$(Ee.$$.fragment,e),$(ke.$$.fragment,e),$(Ae.$$.fragment,e),$(je.$$.fragment,e),$(Se.$$.fragment,e),$(Pe.$$.fragment,e),$(xe.$$.fragment,e),dt=!0)},o(e){y(_.$$.fragment,e),y(ue.$$.fragment,e),y(he.$$.fragment,e),y(me.$$.fragment,e),y(de.$$.fragment,e),y(ge.$$.fragment,e),y(ve.$$.fragment,e),y(X.$$.fragment,e),y($e.$$.fragment,e),y(ye.$$.fragment,e),y(ee.$$.fragment,e),y(be.$$.fragment,e),y(we.$$.fragment,e),y(te.$$.fragment,e),y(_e.$$.fragment,e),y(Ee.$$.fragment,e),y(ke.$$.fragment,e),y(Ae.$$.fragment,e),y(je.$$.fragment,e),y(Se.$$.fragment,e),y(Pe.$$.fragment,e),y(xe.$$.fragment,e),dt=!1},d(e){a(f),e&&a(k),e&&a(m),b(_),e&&a(Da),e&&a(C),e&&a(Ma),e&&a(z),b(ue),e&&a(Ta),e&&a(I),b(he),e&&a(za),e&&a(J),e&&a(Ia),e&&a(K),e&&a(Na),b(me,e),e&&a(La),e&&a(A),e&&a(Ha),b(de,e),e&&a(Oa),e&&a(Q),e&&a(qa),e&&a(N),b(ge),e&&a(Fa),e&&a(Me),e&&a(Ra),b(ve,e),e&&a(Ua),e&&a(Te),e&&a(Wa),b(X,e),e&&a(Ya),e&&a(L),b($e),e&&a(Ga),e&&a(D),e&&a(Ba),b(ye,e),e&&a(Ja),b(ee,e),e&&a(Ka),e&&a(H),b(be),e&&a(Qa),e&&a(ze),e&&a(Va),b(we,e),e&&a(Xa),e&&a(Ie),e&&a(Za),e&&a(Ne),e&&a(et),b(te,e),e&&a(at),b(_e,e),e&&a(tt),e&&a(Le),e&&a(st),b(Ee,e),e&&a(rt),e&&a(O),b(ke),e&&a(nt),e&&a(q),b(Ae),e&&a(lt),e&&a(He),e&&a(ot),e&&a(F),b(je),e&&a(it),e&&a(Oe),e&&a(pt),e&&a(R),b(Se),e&&a(ct),e&&a(j),e&&a(ut),e&&a(U),b(Pe),e&&a(ht),e&&a(qe),e&&a(ft),e&&a(W),b(xe),e&&a(mt),e&&a(Fe)}}}const fn={local:"amazon-sagemaker",sections:[{local:"getting-started",sections:[{local:"setup-installation",title:"Setup & Installation"},{local:"configure-accelerate",title:"Configure \u{1F917} Accelerate"},{local:"prepare-a-accelerate-finetuning-script",title:"Prepare a \u{1F917} Accelerate fine-tuning script"},{local:"launch-training",title:"Launch Training"}],title:"Getting Started"},{local:"advanced-features",sections:[{local:"distributed-training-data-parallelism",title:"Distributed Training: Data Parallelism"},{local:"distributed-training-model-parallelism",title:"Distributed Training: Model Parallelism"},{local:"python-packages-and-dependencies",title:"Python packages and dependencies"},{local:"remote-scripts-use-scripts-located-on-github",title:"Remote scripts: Use scripts located on Github"},{local:"use-spot-instances",title:"Use Spot Instances"}],title:"Advanced Features"}],title:"Amazon SageMaker"};function mn(Y){return on(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class yn extends sn{constructor(f){super();rn(this,f,mn,hn,nn,{})}}export{yn as default,fn as metadata};
