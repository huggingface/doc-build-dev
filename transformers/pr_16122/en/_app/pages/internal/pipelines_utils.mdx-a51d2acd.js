import{S as Qa,i as Ba,s as Ra,e as a,k as p,w as h,t as s,M as Ma,c as o,d as r,m as l,a as n,x as u,h as i,b as m,F as e,g as d,y as g,L as za,q as v,o as _,B as $}from"../../chunks/vendor-4833417e.js";import{D as b}from"../../chunks/Docstring-4f315ed9.js";import{I as Vt}from"../../chunks/IconCopyLink-4b81c553.js";function Za(Ht){let S,ve,D,y,Oe,Z,Nt,Ce,Wt,nt,_e,Jt,st,$e,qt,it,A,N,Ie,G,jt,Te,Ut,pt,k,K,Qt,X,Bt,Pe,Rt,Mt,lt,L,Y,zt,Ve,Zt,mt,E,ee,Gt,be,Kt,He,Xt,Yt,te,er,Ne,tr,rr,ct,O,W,We,re,ar,Je,or,dt,f,ae,nr,qe,sr,ir,C,je,pr,lr,Ue,mr,cr,Qe,dr,fr,J,Be,hr,ur,Re,gr,vr,_r,q,oe,$r,I,Pr,we,br,wr,Me,Dr,yr,Er,j,ne,Fr,se,xr,De,Sr,Ar,kr,U,ie,Lr,ze,Or,ft,F,pe,Cr,Ze,Ir,Tr,Q,le,Vr,me,Hr,ye,Nr,Wr,ht,x,ce,Jr,Ge,qr,jr,B,de,Ur,Ke,Qr,ut,w,fe,Br,Xe,Rr,Mr,Ye,zr,Zr,R,he,Gr,et,Kr,gt,T,M,tt,ue,Xr,rt,Yr,vt,V,ge,ea,H,ta,Ee,ra,aa,at,oa,na,_t;return Z=new Vt({}),G=new Vt({}),K=new b({props:{name:"class transformers.pipelines.ArgumentHandler",anchor:"transformers.pipelines.ArgumentHandler",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/base.py#L394"}}),Y=new b({props:{name:"class transformers.pipelines.ZeroShotClassificationArgumentHandler",anchor:"transformers.pipelines.ZeroShotClassificationArgumentHandler",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/zero_shot_classification.py#L14"}}),ee=new b({props:{name:"class transformers.pipelines.QuestionAnsweringArgumentHandler",anchor:"transformers.pipelines.QuestionAnsweringArgumentHandler",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/question_answering.py#L32"}}),re=new Vt({}),ae=new b({props:{name:"class transformers.PipelineDataFormat",anchor:"transformers.PipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/base.py#L404",parametersDescription:[{anchor:"transformers.PipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.PipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.PipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.PipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}]}}),oe=new b({props:{name:"from_str",anchor:"transformers.PipelineDataFormat.from_str",parameters:[{name:"format",val:": str"},{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/base.py#L481",parametersDescription:[{anchor:"transformers.PipelineDataFormat.from_str.output_path",description:`<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Where to save the outgoing data.`,name:"output_path"},{anchor:"transformers.PipelineDataFormat.from_str.input_path",description:`<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Where to look for the input data.`,name:"input_path"},{anchor:"transformers.PipelineDataFormat.from_str.column",description:`<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The column to read.`,name:"column"},{anchor:"transformers.PipelineDataFormat.from_str.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}],returnDescription:`
<p>The proper data format.</p>
`,returnType:`
<p><a
  href="/docs/transformers/pr_16122/en/internal/pipelines_utils#transformers.PipelineDataFormat"
>PipelineDataFormat</a></p>
`}}),ne=new b({props:{name:"save",anchor:"transformers.PipelineDataFormat.save",parameters:[{name:"data",val:": typing.Union[dict, typing.List[dict]]"}],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/base.py#L453",parametersDescription:[{anchor:"transformers.PipelineDataFormat.save.data",description:"<strong>data</strong> (<code>dict</code> or list of <code>dict</code>) &#x2014; The data to store.",name:"data"}]}}),ie=new b({props:{name:"save_binary",anchor:"transformers.PipelineDataFormat.save_binary",parameters:[{name:"data",val:": typing.Union[dict, typing.List[dict]]"}],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/base.py#L463",parametersDescription:[{anchor:"transformers.PipelineDataFormat.save_binary.data",description:"<strong>data</strong> (<code>dict</code> or list of <code>dict</code>) &#x2014; The data to store.",name:"data"}],returnDescription:`
<p>Path where the data has been saved.</p>
`,returnType:`
<p><code>str</code></p>
`}}),pe=new b({props:{name:"class transformers.CsvPipelineDataFormat",anchor:"transformers.CsvPipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/base.py#L517",parametersDescription:[{anchor:"transformers.CsvPipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.CsvPipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.CsvPipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.CsvPipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}]}}),le=new b({props:{name:"save",anchor:"transformers.CsvPipelineDataFormat.save",parameters:[{name:"data",val:": typing.List[dict]"}],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/base.py#L547",parametersDescription:[{anchor:"transformers.CsvPipelineDataFormat.save.data",description:"<strong>data</strong> (<code>List[dict]</code>) &#x2014; The data to store.",name:"data"}]}}),ce=new b({props:{name:"class transformers.JsonPipelineDataFormat",anchor:"transformers.JsonPipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/base.py#L561",parametersDescription:[{anchor:"transformers.JsonPipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.JsonPipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.JsonPipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.JsonPipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}]}}),de=new b({props:{name:"save",anchor:"transformers.JsonPipelineDataFormat.save",parameters:[{name:"data",val:": dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/base.py#L592",parametersDescription:[{anchor:"transformers.JsonPipelineDataFormat.save.data",description:"<strong>data</strong> (<code>dict</code>) &#x2014; The data to store.",name:"data"}]}}),fe=new b({props:{name:"class transformers.PipedPipelineDataFormat",anchor:"transformers.PipedPipelineDataFormat",parameters:[{name:"output_path",val:": typing.Optional[str]"},{name:"input_path",val:": typing.Optional[str]"},{name:"column",val:": typing.Optional[str]"},{name:"overwrite",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/base.py#L603",parametersDescription:[{anchor:"transformers.PipedPipelineDataFormat.output_path",description:"<strong>output_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to save the outgoing data.",name:"output_path"},{anchor:"transformers.PipedPipelineDataFormat.input_path",description:"<strong>input_path</strong> (<code>str</code>, <em>optional</em>) &#x2014; Where to look for the input data.",name:"input_path"},{anchor:"transformers.PipedPipelineDataFormat.column",description:"<strong>column</strong> (<code>str</code>, <em>optional</em>) &#x2014; The column to read.",name:"column"},{anchor:"transformers.PipedPipelineDataFormat.overwrite",description:`<strong>overwrite</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to overwrite the <code>output_path</code>.`,name:"overwrite"}]}}),he=new b({props:{name:"save",anchor:"transformers.PipedPipelineDataFormat.save",parameters:[{name:"data",val:": dict"}],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/base.py#L633",parametersDescription:[{anchor:"transformers.PipedPipelineDataFormat.save.data",description:"<strong>data</strong> (<code>dict</code>) &#x2014; The data to store.",name:"data"}]}}),ue=new Vt({}),ge=new b({props:{name:"class transformers.pipelines.PipelineException",anchor:"transformers.pipelines.PipelineException",parameters:[{name:"task",val:": str"},{name:"model",val:": str"},{name:"reason",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16122/src/transformers/pipelines/base.py#L377",parametersDescription:[{anchor:"transformers.pipelines.PipelineException.task",description:"<strong>task</strong> (<code>str</code>) &#x2014; The task of the pipeline.",name:"task"},{anchor:"transformers.pipelines.PipelineException.model",description:"<strong>model</strong> (<code>str</code>) &#x2014; The model used by the pipeline.",name:"model"},{anchor:"transformers.pipelines.PipelineException.reason",description:"<strong>reason</strong> (<code>str</code>) &#x2014; The error message to display.",name:"reason"}]}}),{c(){S=a("meta"),ve=p(),D=a("h1"),y=a("a"),Oe=a("span"),h(Z.$$.fragment),Nt=p(),Ce=a("span"),Wt=s("Utilities for pipelines"),nt=p(),_e=a("p"),Jt=s("This page lists all the utility functions the library provides for pipelines."),st=p(),$e=a("p"),qt=s("Most of those are only useful if you are studying the code of the models in the library."),it=p(),A=a("h2"),N=a("a"),Ie=a("span"),h(G.$$.fragment),jt=p(),Te=a("span"),Ut=s("Argument handling"),pt=p(),k=a("div"),h(K.$$.fragment),Qt=p(),X=a("p"),Bt=s("Base interface for handling arguments for each "),Pe=a("a"),Rt=s("Pipeline"),Mt=s("."),lt=p(),L=a("div"),h(Y.$$.fragment),zt=p(),Ve=a("p"),Zt=s(`Handles arguments for zero-shot for text classification by turning each possible label into an NLI
premise/hypothesis pair.`),mt=p(),E=a("div"),h(ee.$$.fragment),Gt=p(),be=a("p"),Kt=s(`QuestionAnsweringPipeline requires the user to provide multiple arguments (i.e. question & context) to be mapped to
internal `),He=a("code"),Xt=s("SquadExample"),Yt=p(),te=a("p"),er=s("QuestionAnsweringArgumentHandler manages all the possible to create a "),Ne=a("code"),tr=s("SquadExample"),rr=s(`from the command-line
supplied arguments.`),ct=p(),O=a("h2"),W=a("a"),We=a("span"),h(re.$$.fragment),ar=p(),Je=a("span"),or=s("Data format"),dt=p(),f=a("div"),h(ae.$$.fragment),nr=p(),qe=a("p"),sr=s(`Base class for all the pipeline supported data format both for reading and writing. Supported data formats
currently includes:`),ir=p(),C=a("ul"),je=a("li"),pr=s("JSON"),lr=p(),Ue=a("li"),mr=s("CSV"),cr=p(),Qe=a("li"),dr=s("stdin/stdout (pipe)"),fr=p(),J=a("p"),Be=a("code"),hr=s("PipelineDataFormat"),ur=s(` also includes some utilities to work with multi-columns like mapping from datasets columns to
pipelines keyword arguments through the `),Re=a("code"),gr=s("dataset_kwarg_1=dataset_column_1"),vr=s(" format."),_r=p(),q=a("div"),h(oe.$$.fragment),$r=p(),I=a("p"),Pr=s("Creates an instance of the right subclass of "),we=a("a"),br=s("PipelineDataFormat"),wr=s(" depending on "),Me=a("code"),Dr=s("format"),yr=s("."),Er=p(),j=a("div"),h(ne.$$.fragment),Fr=p(),se=a("p"),xr=s("Save the provided data object with the representation for the current "),De=a("a"),Sr=s("PipelineDataFormat"),Ar=s("."),kr=p(),U=a("div"),h(ie.$$.fragment),Lr=p(),ze=a("p"),Or=s("Save the provided data object as a pickle-formatted binary data on the disk."),ft=p(),F=a("div"),h(pe.$$.fragment),Cr=p(),Ze=a("p"),Ir=s("Support for pipelines using CSV data format."),Tr=p(),Q=a("div"),h(le.$$.fragment),Vr=p(),me=a("p"),Hr=s("Save the provided data object with the representation for the current "),ye=a("a"),Nr=s("PipelineDataFormat"),Wr=s("."),ht=p(),x=a("div"),h(ce.$$.fragment),Jr=p(),Ge=a("p"),qr=s("Support for pipelines using JSON file format."),jr=p(),B=a("div"),h(de.$$.fragment),Ur=p(),Ke=a("p"),Qr=s("Save the provided data object in a json file."),ut=p(),w=a("div"),h(fe.$$.fragment),Br=p(),Xe=a("p"),Rr=s("Read data from piped input to the python process. For multi columns data, columns should separated by"),Mr=p(),Ye=a("p"),zr=s("If columns are provided, then the output will be a dictionary with {column_x: value_x}"),Zr=p(),R=a("div"),h(he.$$.fragment),Gr=p(),et=a("p"),Kr=s("Print the data."),gt=p(),T=a("h2"),M=a("a"),tt=a("span"),h(ue.$$.fragment),Xr=p(),rt=a("span"),Yr=s("Utilities"),vt=p(),V=a("div"),h(ge.$$.fragment),ea=p(),H=a("p"),ta=s("Raised by a "),Ee=a("a"),ra=s("Pipeline"),aa=s(" when handling "),at=a("strong"),oa=s("call"),na=s("."),this.h()},l(t){const c=Ma('[data-svelte="svelte-1phssyn"]',document.head);S=o(c,"META",{name:!0,content:!0}),c.forEach(r),ve=l(t),D=o(t,"H1",{class:!0});var $t=n(D);y=o($t,"A",{id:!0,class:!0,href:!0});var ia=n(y);Oe=o(ia,"SPAN",{});var pa=n(Oe);u(Z.$$.fragment,pa),pa.forEach(r),ia.forEach(r),Nt=l($t),Ce=o($t,"SPAN",{});var la=n(Ce);Wt=i(la,"Utilities for pipelines"),la.forEach(r),$t.forEach(r),nt=l(t),_e=o(t,"P",{});var ma=n(_e);Jt=i(ma,"This page lists all the utility functions the library provides for pipelines."),ma.forEach(r),st=l(t),$e=o(t,"P",{});var ca=n($e);qt=i(ca,"Most of those are only useful if you are studying the code of the models in the library."),ca.forEach(r),it=l(t),A=o(t,"H2",{class:!0});var Pt=n(A);N=o(Pt,"A",{id:!0,class:!0,href:!0});var da=n(N);Ie=o(da,"SPAN",{});var fa=n(Ie);u(G.$$.fragment,fa),fa.forEach(r),da.forEach(r),jt=l(Pt),Te=o(Pt,"SPAN",{});var ha=n(Te);Ut=i(ha,"Argument handling"),ha.forEach(r),Pt.forEach(r),pt=l(t),k=o(t,"DIV",{class:!0});var bt=n(k);u(K.$$.fragment,bt),Qt=l(bt),X=o(bt,"P",{});var wt=n(X);Bt=i(wt,"Base interface for handling arguments for each "),Pe=o(wt,"A",{href:!0});var ua=n(Pe);Rt=i(ua,"Pipeline"),ua.forEach(r),Mt=i(wt,"."),wt.forEach(r),bt.forEach(r),lt=l(t),L=o(t,"DIV",{class:!0});var Dt=n(L);u(Y.$$.fragment,Dt),zt=l(Dt),Ve=o(Dt,"P",{});var ga=n(Ve);Zt=i(ga,`Handles arguments for zero-shot for text classification by turning each possible label into an NLI
premise/hypothesis pair.`),ga.forEach(r),Dt.forEach(r),mt=l(t),E=o(t,"DIV",{class:!0});var Fe=n(E);u(ee.$$.fragment,Fe),Gt=l(Fe),be=o(Fe,"P",{});var sa=n(be);Kt=i(sa,`QuestionAnsweringPipeline requires the user to provide multiple arguments (i.e. question & context) to be mapped to
internal `),He=o(sa,"CODE",{});var va=n(He);Xt=i(va,"SquadExample"),va.forEach(r),sa.forEach(r),Yt=l(Fe),te=o(Fe,"P",{});var yt=n(te);er=i(yt,"QuestionAnsweringArgumentHandler manages all the possible to create a "),Ne=o(yt,"CODE",{});var _a=n(Ne);tr=i(_a,"SquadExample"),_a.forEach(r),rr=i(yt,`from the command-line
supplied arguments.`),yt.forEach(r),Fe.forEach(r),ct=l(t),O=o(t,"H2",{class:!0});var Et=n(O);W=o(Et,"A",{id:!0,class:!0,href:!0});var $a=n(W);We=o($a,"SPAN",{});var Pa=n(We);u(re.$$.fragment,Pa),Pa.forEach(r),$a.forEach(r),ar=l(Et),Je=o(Et,"SPAN",{});var ba=n(Je);or=i(ba,"Data format"),ba.forEach(r),Et.forEach(r),dt=l(t),f=o(t,"DIV",{class:!0});var P=n(f);u(ae.$$.fragment,P),nr=l(P),qe=o(P,"P",{});var wa=n(qe);sr=i(wa,`Base class for all the pipeline supported data format both for reading and writing. Supported data formats
currently includes:`),wa.forEach(r),ir=l(P),C=o(P,"UL",{});var xe=n(C);je=o(xe,"LI",{});var Da=n(je);pr=i(Da,"JSON"),Da.forEach(r),lr=l(xe),Ue=o(xe,"LI",{});var ya=n(Ue);mr=i(ya,"CSV"),ya.forEach(r),cr=l(xe),Qe=o(xe,"LI",{});var Ea=n(Qe);dr=i(Ea,"stdin/stdout (pipe)"),Ea.forEach(r),xe.forEach(r),fr=l(P),J=o(P,"P",{});var ot=n(J);Be=o(ot,"CODE",{});var Fa=n(Be);hr=i(Fa,"PipelineDataFormat"),Fa.forEach(r),ur=i(ot,` also includes some utilities to work with multi-columns like mapping from datasets columns to
pipelines keyword arguments through the `),Re=o(ot,"CODE",{});var xa=n(Re);gr=i(xa,"dataset_kwarg_1=dataset_column_1"),xa.forEach(r),vr=i(ot," format."),ot.forEach(r),_r=l(P),q=o(P,"DIV",{class:!0});var Ft=n(q);u(oe.$$.fragment,Ft),$r=l(Ft),I=o(Ft,"P",{});var Se=n(I);Pr=i(Se,"Creates an instance of the right subclass of "),we=o(Se,"A",{href:!0});var Sa=n(we);br=i(Sa,"PipelineDataFormat"),Sa.forEach(r),wr=i(Se," depending on "),Me=o(Se,"CODE",{});var Aa=n(Me);Dr=i(Aa,"format"),Aa.forEach(r),yr=i(Se,"."),Se.forEach(r),Ft.forEach(r),Er=l(P),j=o(P,"DIV",{class:!0});var xt=n(j);u(ne.$$.fragment,xt),Fr=l(xt),se=o(xt,"P",{});var St=n(se);xr=i(St,"Save the provided data object with the representation for the current "),De=o(St,"A",{href:!0});var ka=n(De);Sr=i(ka,"PipelineDataFormat"),ka.forEach(r),Ar=i(St,"."),St.forEach(r),xt.forEach(r),kr=l(P),U=o(P,"DIV",{class:!0});var At=n(U);u(ie.$$.fragment,At),Lr=l(At),ze=o(At,"P",{});var La=n(ze);Or=i(La,"Save the provided data object as a pickle-formatted binary data on the disk."),La.forEach(r),At.forEach(r),P.forEach(r),ft=l(t),F=o(t,"DIV",{class:!0});var Ae=n(F);u(pe.$$.fragment,Ae),Cr=l(Ae),Ze=o(Ae,"P",{});var Oa=n(Ze);Ir=i(Oa,"Support for pipelines using CSV data format."),Oa.forEach(r),Tr=l(Ae),Q=o(Ae,"DIV",{class:!0});var kt=n(Q);u(le.$$.fragment,kt),Vr=l(kt),me=o(kt,"P",{});var Lt=n(me);Hr=i(Lt,"Save the provided data object with the representation for the current "),ye=o(Lt,"A",{href:!0});var Ca=n(ye);Nr=i(Ca,"PipelineDataFormat"),Ca.forEach(r),Wr=i(Lt,"."),Lt.forEach(r),kt.forEach(r),Ae.forEach(r),ht=l(t),x=o(t,"DIV",{class:!0});var ke=n(x);u(ce.$$.fragment,ke),Jr=l(ke),Ge=o(ke,"P",{});var Ia=n(Ge);qr=i(Ia,"Support for pipelines using JSON file format."),Ia.forEach(r),jr=l(ke),B=o(ke,"DIV",{class:!0});var Ot=n(B);u(de.$$.fragment,Ot),Ur=l(Ot),Ke=o(Ot,"P",{});var Ta=n(Ke);Qr=i(Ta,"Save the provided data object in a json file."),Ta.forEach(r),Ot.forEach(r),ke.forEach(r),ut=l(t),w=o(t,"DIV",{class:!0});var z=n(w);u(fe.$$.fragment,z),Br=l(z),Xe=o(z,"P",{});var Va=n(Xe);Rr=i(Va,"Read data from piped input to the python process. For multi columns data, columns should separated by"),Va.forEach(r),Mr=l(z),Ye=o(z,"P",{});var Ha=n(Ye);zr=i(Ha,"If columns are provided, then the output will be a dictionary with {column_x: value_x}"),Ha.forEach(r),Zr=l(z),R=o(z,"DIV",{class:!0});var Ct=n(R);u(he.$$.fragment,Ct),Gr=l(Ct),et=o(Ct,"P",{});var Na=n(et);Kr=i(Na,"Print the data."),Na.forEach(r),Ct.forEach(r),z.forEach(r),gt=l(t),T=o(t,"H2",{class:!0});var It=n(T);M=o(It,"A",{id:!0,class:!0,href:!0});var Wa=n(M);tt=o(Wa,"SPAN",{});var Ja=n(tt);u(ue.$$.fragment,Ja),Ja.forEach(r),Wa.forEach(r),Xr=l(It),rt=o(It,"SPAN",{});var qa=n(rt);Yr=i(qa,"Utilities"),qa.forEach(r),It.forEach(r),vt=l(t),V=o(t,"DIV",{class:!0});var Tt=n(V);u(ge.$$.fragment,Tt),ea=l(Tt),H=o(Tt,"P",{});var Le=n(H);ta=i(Le,"Raised by a "),Ee=o(Le,"A",{href:!0});var ja=n(Ee);ra=i(ja,"Pipeline"),ja.forEach(r),aa=i(Le," when handling "),at=o(Le,"STRONG",{});var Ua=n(at);oa=i(Ua,"call"),Ua.forEach(r),na=i(Le,"."),Le.forEach(r),Tt.forEach(r),this.h()},h(){m(S,"name","hf:doc:metadata"),m(S,"content",JSON.stringify(Ga)),m(y,"id","utilities-for-pipelines"),m(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(y,"href","#utilities-for-pipelines"),m(D,"class","relative group"),m(N,"id","transformers.pipelines.ArgumentHandler"),m(N,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(N,"href","#transformers.pipelines.ArgumentHandler"),m(A,"class","relative group"),m(Pe,"href","/docs/transformers/pr_16122/en/main_classes/pipelines#transformers.Pipeline"),m(k,"class","docstring"),m(L,"class","docstring"),m(E,"class","docstring"),m(W,"id","transformers.PipelineDataFormat"),m(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(W,"href","#transformers.PipelineDataFormat"),m(O,"class","relative group"),m(we,"href","/docs/transformers/pr_16122/en/internal/pipelines_utils#transformers.PipelineDataFormat"),m(q,"class","docstring"),m(De,"href","/docs/transformers/pr_16122/en/internal/pipelines_utils#transformers.PipelineDataFormat"),m(j,"class","docstring"),m(U,"class","docstring"),m(f,"class","docstring"),m(ye,"href","/docs/transformers/pr_16122/en/internal/pipelines_utils#transformers.PipelineDataFormat"),m(Q,"class","docstring"),m(F,"class","docstring"),m(B,"class","docstring"),m(x,"class","docstring"),m(R,"class","docstring"),m(w,"class","docstring"),m(M,"id","transformers.pipelines.PipelineException"),m(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(M,"href","#transformers.pipelines.PipelineException"),m(T,"class","relative group"),m(Ee,"href","/docs/transformers/pr_16122/en/main_classes/pipelines#transformers.Pipeline"),m(V,"class","docstring")},m(t,c){e(document.head,S),d(t,ve,c),d(t,D,c),e(D,y),e(y,Oe),g(Z,Oe,null),e(D,Nt),e(D,Ce),e(Ce,Wt),d(t,nt,c),d(t,_e,c),e(_e,Jt),d(t,st,c),d(t,$e,c),e($e,qt),d(t,it,c),d(t,A,c),e(A,N),e(N,Ie),g(G,Ie,null),e(A,jt),e(A,Te),e(Te,Ut),d(t,pt,c),d(t,k,c),g(K,k,null),e(k,Qt),e(k,X),e(X,Bt),e(X,Pe),e(Pe,Rt),e(X,Mt),d(t,lt,c),d(t,L,c),g(Y,L,null),e(L,zt),e(L,Ve),e(Ve,Zt),d(t,mt,c),d(t,E,c),g(ee,E,null),e(E,Gt),e(E,be),e(be,Kt),e(be,He),e(He,Xt),e(E,Yt),e(E,te),e(te,er),e(te,Ne),e(Ne,tr),e(te,rr),d(t,ct,c),d(t,O,c),e(O,W),e(W,We),g(re,We,null),e(O,ar),e(O,Je),e(Je,or),d(t,dt,c),d(t,f,c),g(ae,f,null),e(f,nr),e(f,qe),e(qe,sr),e(f,ir),e(f,C),e(C,je),e(je,pr),e(C,lr),e(C,Ue),e(Ue,mr),e(C,cr),e(C,Qe),e(Qe,dr),e(f,fr),e(f,J),e(J,Be),e(Be,hr),e(J,ur),e(J,Re),e(Re,gr),e(J,vr),e(f,_r),e(f,q),g(oe,q,null),e(q,$r),e(q,I),e(I,Pr),e(I,we),e(we,br),e(I,wr),e(I,Me),e(Me,Dr),e(I,yr),e(f,Er),e(f,j),g(ne,j,null),e(j,Fr),e(j,se),e(se,xr),e(se,De),e(De,Sr),e(se,Ar),e(f,kr),e(f,U),g(ie,U,null),e(U,Lr),e(U,ze),e(ze,Or),d(t,ft,c),d(t,F,c),g(pe,F,null),e(F,Cr),e(F,Ze),e(Ze,Ir),e(F,Tr),e(F,Q),g(le,Q,null),e(Q,Vr),e(Q,me),e(me,Hr),e(me,ye),e(ye,Nr),e(me,Wr),d(t,ht,c),d(t,x,c),g(ce,x,null),e(x,Jr),e(x,Ge),e(Ge,qr),e(x,jr),e(x,B),g(de,B,null),e(B,Ur),e(B,Ke),e(Ke,Qr),d(t,ut,c),d(t,w,c),g(fe,w,null),e(w,Br),e(w,Xe),e(Xe,Rr),e(w,Mr),e(w,Ye),e(Ye,zr),e(w,Zr),e(w,R),g(he,R,null),e(R,Gr),e(R,et),e(et,Kr),d(t,gt,c),d(t,T,c),e(T,M),e(M,tt),g(ue,tt,null),e(T,Xr),e(T,rt),e(rt,Yr),d(t,vt,c),d(t,V,c),g(ge,V,null),e(V,ea),e(V,H),e(H,ta),e(H,Ee),e(Ee,ra),e(H,aa),e(H,at),e(at,oa),e(H,na),_t=!0},p:za,i(t){_t||(v(Z.$$.fragment,t),v(G.$$.fragment,t),v(K.$$.fragment,t),v(Y.$$.fragment,t),v(ee.$$.fragment,t),v(re.$$.fragment,t),v(ae.$$.fragment,t),v(oe.$$.fragment,t),v(ne.$$.fragment,t),v(ie.$$.fragment,t),v(pe.$$.fragment,t),v(le.$$.fragment,t),v(ce.$$.fragment,t),v(de.$$.fragment,t),v(fe.$$.fragment,t),v(he.$$.fragment,t),v(ue.$$.fragment,t),v(ge.$$.fragment,t),_t=!0)},o(t){_(Z.$$.fragment,t),_(G.$$.fragment,t),_(K.$$.fragment,t),_(Y.$$.fragment,t),_(ee.$$.fragment,t),_(re.$$.fragment,t),_(ae.$$.fragment,t),_(oe.$$.fragment,t),_(ne.$$.fragment,t),_(ie.$$.fragment,t),_(pe.$$.fragment,t),_(le.$$.fragment,t),_(ce.$$.fragment,t),_(de.$$.fragment,t),_(fe.$$.fragment,t),_(he.$$.fragment,t),_(ue.$$.fragment,t),_(ge.$$.fragment,t),_t=!1},d(t){r(S),t&&r(ve),t&&r(D),$(Z),t&&r(nt),t&&r(_e),t&&r(st),t&&r($e),t&&r(it),t&&r(A),$(G),t&&r(pt),t&&r(k),$(K),t&&r(lt),t&&r(L),$(Y),t&&r(mt),t&&r(E),$(ee),t&&r(ct),t&&r(O),$(re),t&&r(dt),t&&r(f),$(ae),$(oe),$(ne),$(ie),t&&r(ft),t&&r(F),$(pe),$(le),t&&r(ht),t&&r(x),$(ce),$(de),t&&r(ut),t&&r(w),$(fe),$(he),t&&r(gt),t&&r(T),$(ue),t&&r(vt),t&&r(V),$(ge)}}}const Ga={local:"utilities-for-pipelines",sections:[{local:"transformers.pipelines.ArgumentHandler",title:"Argument handling"},{local:"transformers.PipelineDataFormat",title:"Data format"},{local:"transformers.pipelines.PipelineException",title:"Utilities"}],title:"Utilities for pipelines"};function Ka(Ht,S,ve){let{fw:D}=S;return Ht.$$set=y=>{"fw"in y&&ve(0,D=y.fw)},[D]}class to extends Qa{constructor(S){super();Ba(this,S,Ka,Za,Ra,{fw:0})}}export{to as default,Ga as metadata};
