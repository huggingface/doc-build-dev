import{S as Ve,i as Xe,s as Ze,e as r,k as _,w as R,t as n,M as ea,c as o,d as a,m as d,a as i,x as G,h as p,b as l,F as t,g as u,y as F,q as L,o as U,B as K,v as aa}from"../chunks/vendor-8138ceec.js";import{T as ta}from"../chunks/Tip-12722dfc.js";import{I as sa}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as ue}from"../chunks/CodeBlock-fc89709f.js";function ra(V){let c,E;return{c(){c=r("p"),E=n("When you run your pipeline, you can adjust the parameters to change the runner (Flink or Spark), output location (S3 bucket or HDFS), and the number of workers.")},l(f){c=o(f,"P",{});var h=i(c);E=p(h,"When you run your pipeline, you can adjust the parameters to change the runner (Flink or Spark), output location (S3 bucket or HDFS), and the number of workers."),h.forEach(a)},m(f,h){u(f,c,h),t(c,E)},d(f){f&&a(c)}}}function oa(V){let c,E,f,h,J,y,ce,W,fe,X,m,me,v,he,_e,k,de,$e,A,ge,Ee,j,be,we,Z,$,ye,T,ve,ke,S,Ae,je,P,Te,Se,ee,M,H,Ce,ae,C,te,q,Y,qe,se,B,re,x,z,Be,oe,N,le,I,Q,xe,ne,D,ie,b,pe;return y=new sa({}),C=new ue({props:{code:`DATASET_NAME=your_dataset_name  # ex: wikipedia
CONFIG_NAME=your_config_name    # ex: 20220301.en`,highlighted:`<span class="hljs-attr">DATASET_NAME</span>=your_dataset_name  <span class="hljs-comment"># ex: wikipedia</span>
<span class="hljs-attr">CONFIG_NAME</span>=your_config_name    <span class="hljs-comment"># ex: 20220301.en</span>`}}),B=new ue({props:{code:`PROJECT=your_project
BUCKET=your_bucket
REGION=your_region`,highlighted:`<span class="hljs-attribute">PROJECT</span><span class="hljs-operator">=</span>your_project
<span class="hljs-attribute">BUCKET</span><span class="hljs-operator">=</span>your_bucket
<span class="hljs-attribute">REGION</span><span class="hljs-operator">=</span>your_region`}}),N=new ue({props:{code:`echo "datasets" > /tmp/beam_requirements.txt
echo "apache_beam" >> /tmp/beam_requirements.txt`,highlighted:`echo <span class="hljs-string">&quot;datasets&quot;</span> &gt; <span class="hljs-regexp">/tmp/</span>beam_requirements.txt
echo <span class="hljs-string">&quot;apache_beam&quot;</span> &gt;&gt; <span class="hljs-regexp">/tmp/</span>beam_requirements.txt`}}),D=new ue({props:{code:`datasets-cli run_beam datasets/$DATASET_NAME \\
--name $CONFIG_NAME \\
--save_infos \\
--cache_dir gs://$BUCKET/cache/datasets \\
--beam_pipeline_options=\\
"runner=DataflowRunner,project=$PROJECT,job_name=$DATASET_NAME-gen,"\\
"staging_location=gs://$BUCKET/binaries,temp_location=gs://$BUCKET/temp,"\\
"region=$REGION,requirements_file=/tmp/beam_requirements.txt"`,highlighted:`datasets-cli run_beam datasets/<span class="hljs-variable">$DATASET_NAME</span> \\
--name <span class="hljs-variable">$CONFIG_NAME</span> \\
--save_infos \\
--cache_dir gs://<span class="hljs-variable">$BUCKET</span>/cache/datasets \\
--beam_pipeline_options=\\
<span class="hljs-string">&quot;runner=DataflowRunner,project=<span class="hljs-variable">$PROJECT</span>,job_name=<span class="hljs-variable">$DATASET_NAME</span>-gen,&quot;</span>\\
<span class="hljs-string">&quot;staging_location=gs://<span class="hljs-variable">$BUCKET</span>/binaries,temp_location=gs://<span class="hljs-variable">$BUCKET</span>/temp,&quot;</span>\\
<span class="hljs-string">&quot;region=<span class="hljs-variable">$REGION</span>,requirements_file=/tmp/beam_requirements.txt&quot;</span>`}}),b=new ta({props:{$$slots:{default:[ra]},$$scope:{ctx:V}}}),{c(){c=r("meta"),E=_(),f=r("h1"),h=r("a"),J=r("span"),R(y.$$.fragment),ce=_(),W=r("span"),fe=n("Beam Datasets"),X=_(),m=r("p"),me=n("Some datasets are too large to be processed on a single machine. Instead, you can process them with "),v=r("a"),he=n("Apache Beam"),_e=n(", a library for parallel data processing. The processing pipeline is executed on a distributed processing backend such as "),k=r("a"),de=n("Apache Flink"),$e=n(", "),A=r("a"),ge=n("Apache Spark"),Ee=n(", or "),j=r("a"),be=n("Google Cloud Dataflow"),we=n("."),Z=_(),$=r("p"),ye=n("We have already created Beam pipelines for some of the larger datasets like "),T=r("a"),ve=n("wikipedia"),ke=n(", and "),S=r("a"),Ae=n("wiki40b"),je=n(". You can load these normally with "),P=r("a"),Te=n("load_dataset()"),Se=n(". But if you want to run your own Beam pipeline with Dataflow, here is how:"),ee=_(),M=r("ol"),H=r("li"),Ce=n("Specify the dataset and configuration you want to process:"),ae=_(),R(C.$$.fragment),te=_(),q=r("ol"),Y=r("li"),qe=n("Input your Google Cloud Platform information:"),se=_(),R(B.$$.fragment),re=_(),x=r("ol"),z=r("li"),Be=n("Specify your Python requirements:"),oe=_(),R(N.$$.fragment),le=_(),I=r("ol"),Q=r("li"),xe=n("Run the pipeline:"),ne=_(),R(D.$$.fragment),ie=_(),R(b.$$.fragment),this.h()},l(e){const s=ea('[data-svelte="svelte-1phssyn"]',document.head);c=o(s,"META",{name:!0,content:!0}),s.forEach(a),E=d(e),f=o(e,"H1",{class:!0});var O=i(f);h=o(O,"A",{id:!0,class:!0,href:!0});var Ne=i(h);J=o(Ne,"SPAN",{});var Ie=i(J);G(y.$$.fragment,Ie),Ie.forEach(a),Ne.forEach(a),ce=d(O),W=o(O,"SPAN",{});var De=i(W);fe=p(De,"Beam Datasets"),De.forEach(a),O.forEach(a),X=d(e),m=o(e,"P",{});var g=i(m);me=p(g,"Some datasets are too large to be processed on a single machine. Instead, you can process them with "),v=o(g,"A",{href:!0,rel:!0});var Oe=i(v);he=p(Oe,"Apache Beam"),Oe.forEach(a),_e=p(g,", a library for parallel data processing. The processing pipeline is executed on a distributed processing backend such as "),k=o(g,"A",{href:!0,rel:!0});var Pe=i(k);de=p(Pe,"Apache Flink"),Pe.forEach(a),$e=p(g,", "),A=o(g,"A",{href:!0,rel:!0});var Me=i(A);ge=p(Me,"Apache Spark"),Me.forEach(a),Ee=p(g,", or "),j=o(g,"A",{href:!0,rel:!0});var Re=i(j);be=p(Re,"Google Cloud Dataflow"),Re.forEach(a),we=p(g,"."),g.forEach(a),Z=d(e),$=o(e,"P",{});var w=i($);ye=p(w,"We have already created Beam pipelines for some of the larger datasets like "),T=o(w,"A",{href:!0,rel:!0});var Ge=i(T);ve=p(Ge,"wikipedia"),Ge.forEach(a),ke=p(w,", and "),S=o(w,"A",{href:!0,rel:!0});var Fe=i(S);Ae=p(Fe,"wiki40b"),Fe.forEach(a),je=p(w,". You can load these normally with "),P=o(w,"A",{href:!0});var Le=i(P);Te=p(Le,"load_dataset()"),Le.forEach(a),Se=p(w,". But if you want to run your own Beam pipeline with Dataflow, here is how:"),w.forEach(a),ee=d(e),M=o(e,"OL",{});var Ue=i(M);H=o(Ue,"LI",{});var Ke=i(H);Ce=p(Ke,"Specify the dataset and configuration you want to process:"),Ke.forEach(a),Ue.forEach(a),ae=d(e),G(C.$$.fragment,e),te=d(e),q=o(e,"OL",{start:!0});var Je=i(q);Y=o(Je,"LI",{});var We=i(Y);qe=p(We,"Input your Google Cloud Platform information:"),We.forEach(a),Je.forEach(a),se=d(e),G(B.$$.fragment,e),re=d(e),x=o(e,"OL",{start:!0});var He=i(x);z=o(He,"LI",{});var Ye=i(z);Be=p(Ye,"Specify your Python requirements:"),Ye.forEach(a),He.forEach(a),oe=d(e),G(N.$$.fragment,e),le=d(e),I=o(e,"OL",{start:!0});var ze=i(I);Q=o(ze,"LI",{});var Qe=i(Q);xe=p(Qe,"Run the pipeline:"),Qe.forEach(a),ze.forEach(a),ne=d(e),G(D.$$.fragment,e),ie=d(e),G(b.$$.fragment,e),this.h()},h(){l(c,"name","hf:doc:metadata"),l(c,"content",JSON.stringify(la)),l(h,"id","beam-datasets"),l(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(h,"href","#beam-datasets"),l(f,"class","relative group"),l(v,"href","https://beam.apache.org/"),l(v,"rel","nofollow"),l(k,"href","https://flink.apache.org/"),l(k,"rel","nofollow"),l(A,"href","https://spark.apache.org/"),l(A,"rel","nofollow"),l(j,"href","https://cloud.google.com/dataflow"),l(j,"rel","nofollow"),l(T,"href","https://huggingface.co/datasets/wikipedia"),l(T,"rel","nofollow"),l(S,"href","https://huggingface.co/datasets/wiki40b"),l(S,"rel","nofollow"),l(P,"href","/docs/datasets/pr_4226/en/package_reference/loading_methods#datasets.load_dataset"),l(q,"start","2"),l(x,"start","3"),l(I,"start","4")},m(e,s){t(document.head,c),u(e,E,s),u(e,f,s),t(f,h),t(h,J),F(y,J,null),t(f,ce),t(f,W),t(W,fe),u(e,X,s),u(e,m,s),t(m,me),t(m,v),t(v,he),t(m,_e),t(m,k),t(k,de),t(m,$e),t(m,A),t(A,ge),t(m,Ee),t(m,j),t(j,be),t(m,we),u(e,Z,s),u(e,$,s),t($,ye),t($,T),t(T,ve),t($,ke),t($,S),t(S,Ae),t($,je),t($,P),t(P,Te),t($,Se),u(e,ee,s),u(e,M,s),t(M,H),t(H,Ce),u(e,ae,s),F(C,e,s),u(e,te,s),u(e,q,s),t(q,Y),t(Y,qe),u(e,se,s),F(B,e,s),u(e,re,s),u(e,x,s),t(x,z),t(z,Be),u(e,oe,s),F(N,e,s),u(e,le,s),u(e,I,s),t(I,Q),t(Q,xe),u(e,ne,s),F(D,e,s),u(e,ie,s),F(b,e,s),pe=!0},p(e,[s]){const O={};s&2&&(O.$$scope={dirty:s,ctx:e}),b.$set(O)},i(e){pe||(L(y.$$.fragment,e),L(C.$$.fragment,e),L(B.$$.fragment,e),L(N.$$.fragment,e),L(D.$$.fragment,e),L(b.$$.fragment,e),pe=!0)},o(e){U(y.$$.fragment,e),U(C.$$.fragment,e),U(B.$$.fragment,e),U(N.$$.fragment,e),U(D.$$.fragment,e),U(b.$$.fragment,e),pe=!1},d(e){a(c),e&&a(E),e&&a(f),K(y),e&&a(X),e&&a(m),e&&a(Z),e&&a($),e&&a(ee),e&&a(M),e&&a(ae),K(C,e),e&&a(te),e&&a(q),e&&a(se),K(B,e),e&&a(re),e&&a(x),e&&a(oe),K(N,e),e&&a(le),e&&a(I),e&&a(ne),K(D,e),e&&a(ie),K(b,e)}}}const la={local:"beam-datasets",title:"Beam Datasets"};function na(V){return aa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fa extends Ve{constructor(c){super();Xe(this,c,na,oa,Ze,{})}}export{fa as default,la as metadata};
