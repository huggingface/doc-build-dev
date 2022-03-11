import{S as Rr,i as Jr,s as Kr,e as r,k as i,w as c,t as l,M as Qr,c as o,d as n,m as f,a,x as g,h as m,b as s,F as t,g as h,y as d,L as Yr,q as u,o as _,B as v}from"../../chunks/vendor-4833417e.js";import{D as y}from"../../chunks/Docstring-4f315ed9.js";import{I as be}from"../../chunks/IconCopyLink-4b81c553.js";function Zr(Gt){let C,Ee,w,E,De,ee,Ut,We,jt,ft,D,Rt,Ie,Jt,Kt,lt,W,Qt,Oe,Yt,Zt,mt,k,I,Me,te,en,Le,tn,pt,Ce,nn,ht,P,Pe,rn,Ne,on,an,ke,sn,Se,fn,ln,Te,mn,Ae,pn,ct,S,M,Xe,ne,hn,Ve,cn,gt,x,re,gn,ze,dn,un,L,oe,_n,He,vn,xn,X,ae,$n,Be,yn,wn,V,se,bn,Ge,En,On,z,ie,Cn,Ue,Pn,dt,T,H,je,fe,Nn,Re,kn,ut,O,le,Sn,B,me,Tn,Je,An,qn,G,pe,Fn,he,Dn,Ke,Wn,In,_t,A,U,Qe,ce,Mn,Ye,Ln,vt,ge,de,xt,q,j,Ze,ue,Xn,et,Vn,$t,R,zn,tt,Hn,Bn,yt,F,J,nt,_e,Gn,rt,Un,wt,$,ve,jn,K,xe,Rn,ot,Jn,Kn,Q,$e,Qn,at,Yn,Zn,Y,ye,er,st,tr,nr,Z,we,rr,it,or,bt;return ee=new be({}),te=new be({}),ne=new be({}),re=new y({props:{name:"class transformers.onnx.OnnxConfig",anchor:"transformers.onnx.OnnxConfig",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/config.py#L68"}}),oe=new y({props:{name:"flatten_output_collection_property",anchor:"transformers.onnx.OnnxConfig.flatten_output_collection_property",parameters:[{name:"name",val:": str"},{name:"field",val:": typing.Iterable[typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/config.py#L320",returnDescription:`
<p>Outputs with flattened structure and key mapping this new structure.</p>
`,returnType:`
<p>(Dict[str, Any])</p>
`}}),ae=new y({props:{name:"from_model_config",anchor:"transformers.onnx.OnnxConfig.from_model_config",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/config.py#L109",returnDescription:`
<p>OnnxConfig for this model</p>
`}}),se=new y({props:{name:"generate_dummy_inputs",anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs",parameters:[{name:"preprocessor",val:": typing.Union[ForwardRef('PreTrainedTokenizerBase'), ForwardRef('FeatureExtractionMixin')]"},{name:"batch_size",val:": int = -1"},{name:"seq_length",val:": int = -1"},{name:"is_pair",val:": bool = False"},{name:"framework",val:": typing.Optional[transformers.file_utils.TensorType] = None"},{name:"num_channels",val:": int = 3"},{name:"image_width",val:": int = 40"},{name:"image_height",val:": int = 40"},{name:"tokenizer",val:": PreTrainedTokenizerBase = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/config.py#L239",parametersDescription:[{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The batch size to export the model for (-1 means dynamic axis).`,name:"batch_size"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.seq_length",description:`<strong>seq_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The sequence length to export the model for (-1 means dynamic axis).`,name:"seq_length"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.is_pair",description:`<strong>is_pair</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Indicate if the input is a pair (sentence 1, sentence 2)`,name:"is_pair"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.framework",description:`<strong>framework</strong> (<code>TensorType</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The framework (PyTorch or TensorFlow) that the tokenizer will generate tensors for.`,name:"framework"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of channels of the generated images.`,name:"num_channels"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.image_width",description:`<strong>image_width</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The width of the generated images.`,name:"image_width"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.image_height",description:`<strong>image_height</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The height of the generated images.`,name:"image_height"}],returnDescription:`
<p>Mapping[str, Tensor] holding the kwargs to provide to the model\u2019s forward function</p>
`}}),ie=new y({props:{name:"use_external_data_format",anchor:"transformers.onnx.OnnxConfig.use_external_data_format",parameters:[{name:"num_parameters",val:": int"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/config.py#L213",returnDescription:`
<p>True if model.num_parameters() * size_of(float32) >= 2Gb False otherwise</p>
`}}),fe=new be({}),le=new y({props:{name:"class transformers.onnx.OnnxConfigWithPast",anchor:"transformers.onnx.OnnxConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/config.py#L339"}}),me=new y({props:{name:"fill_with_past_key_values_",anchor:"transformers.onnx.OnnxConfigWithPast.fill_with_past_key_values_",parameters:[{name:"inputs_or_outputs",val:": typing.Mapping[str, typing.Mapping[int, str]]"},{name:"direction",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/config.py#L441"}}),pe=new y({props:{name:"with_past",anchor:"transformers.onnx.OnnxConfigWithPast.with_past",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/config.py#L350",returnDescription:`
<p>OnnxConfig with <code>.use_past = True</code></p>
`}}),ce=new be({}),de=new y({props:{name:"class transformers.onnx.OnnxSeq2SeqConfigWithPast",anchor:"transformers.onnx.OnnxSeq2SeqConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/config.py#L474"}}),ue=new be({}),_e=new be({}),ve=new y({props:{name:"class transformers.onnx.FeaturesManager",anchor:"transformers.onnx.FeaturesManager",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/features.py#L84"}}),xe=new y({props:{name:"check_supported_model_or_raise",anchor:"transformers.onnx.FeaturesManager.check_supported_model_or_raise",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, transformers.modeling_tf_utils.TFPreTrainedModel]"},{name:"feature",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/features.py#L325",returnDescription:`
<p>(str) The type of the model (OnnxConfig) The OnnxConfig instance holding the model export properties.</p>
`}}),$e=new y({props:{name:"get_model_class_for_feature",anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature",parameters:[{name:"feature",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/features.py#L283",returnDescription:`
<p>The AutoModel class corresponding to the feature.</p>
`}}),ye=new y({props:{name:"get_model_from_feature",anchor:"transformers.onnx.FeaturesManager.get_model_from_feature",parameters:[{name:"feature",val:": str"},{name:"model",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/features.py#L302",returnDescription:`
<p>The instance of the model.</p>
`}}),we=new y({props:{name:"get_supported_features_for_model_type",anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type",parameters:[{name:"model_type",val:": str"},{name:"model_name",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16083/src/transformers/onnx/features.py#L255",returnDescription:`
<p>The dictionary mapping each feature to a corresponding OnnxConfig constructor.</p>
`}}),{c(){C=r("meta"),Ee=i(),w=r("h1"),E=r("a"),De=r("span"),c(ee.$$.fragment),Ut=i(),We=r("span"),jt=l("Exporting \u{1F917} Transformers models to ONNX"),ft=i(),D=r("p"),Rt=l("\u{1F917} Transformers provides a "),Ie=r("code"),Jt=l("transformers.onnx"),Kt=l(` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),lt=i(),W=r("p"),Qt=l("See the "),Oe=r("a"),Yt=l("guide"),Zt=l(` on exporting \u{1F917} Transformers models for more
details.`),mt=i(),k=r("h2"),I=r("a"),Me=r("span"),c(te.$$.fragment),en=i(),Le=r("span"),tn=l("ONNX Configurations"),pt=i(),Ce=r("p"),nn=l(`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),ht=i(),P=r("ul"),Pe=r("li"),rn=l("Encoder-based models inherit from "),Ne=r("a"),on=l("OnnxConfig"),an=i(),ke=r("li"),sn=l("Decoder-based models inherit from "),Se=r("a"),fn=l("OnnxConfigWithPast"),ln=i(),Te=r("li"),mn=l("Encoder-decoder models inherit from "),Ae=r("a"),pn=l("OnnxSeq2SeqConfigWithPast"),ct=i(),S=r("h3"),M=r("a"),Xe=r("span"),c(ne.$$.fragment),hn=i(),Ve=r("span"),cn=l("OnnxConfig"),gt=i(),x=r("div"),c(re.$$.fragment),gn=i(),ze=r("p"),dn=l("Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),un=i(),L=r("div"),c(oe.$$.fragment),_n=i(),He=r("p"),vn=l(`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),xn=i(),X=r("div"),c(ae.$$.fragment),$n=i(),Be=r("p"),yn=l("Instantiate a OnnxConfig for a specific model"),wn=i(),V=r("div"),c(se.$$.fragment),bn=i(),Ge=r("p"),En=l("Generate inputs to provide to the ONNX exporter for the specific framework"),On=i(),z=r("div"),c(ie.$$.fragment),Cn=i(),Ue=r("p"),Pn=l("Flag indicating if the model requires using external data format"),dt=i(),T=r("h3"),H=r("a"),je=r("span"),c(fe.$$.fragment),Nn=i(),Re=r("span"),kn=l("OnnxConfigWithPast"),ut=i(),O=r("div"),c(le.$$.fragment),Sn=i(),B=r("div"),c(me.$$.fragment),Tn=i(),Je=r("p"),An=l("Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),qn=i(),G=r("div"),c(pe.$$.fragment),Fn=i(),he=r("p"),Dn=l("Instantiate a OnnxConfig with "),Ke=r("code"),Wn=l("use_past"),In=l(" attribute set to True"),_t=i(),A=r("h3"),U=r("a"),Qe=r("span"),c(ce.$$.fragment),Mn=i(),Ye=r("span"),Ln=l("OnnxSeq2SeqConfigWithPast"),vt=i(),ge=r("div"),c(de.$$.fragment),xt=i(),q=r("h2"),j=r("a"),Ze=r("span"),c(ue.$$.fragment),Xn=i(),et=r("span"),Vn=l("ONNX Features"),$t=i(),R=r("p"),zn=l("Each ONNX configuration is associated with a set of "),tt=r("em"),Hn=l("features"),Bn=l(` that enable you
to export models for different types of topologies or tasks.`),yt=i(),F=r("h3"),J=r("a"),nt=r("span"),c(_e.$$.fragment),Gn=i(),rt=r("span"),Un=l("FeaturesManager"),wt=i(),$=r("div"),c(ve.$$.fragment),jn=i(),K=r("div"),c(xe.$$.fragment),Rn=i(),ot=r("p"),Jn=l("Check whether or not the model has the requested features."),Kn=i(),Q=r("div"),c($e.$$.fragment),Qn=i(),at=r("p"),Yn=l("Attempt to retrieve an AutoModel class from a feature name."),Zn=i(),Y=r("div"),c(ye.$$.fragment),er=i(),st=r("p"),tr=l("Attempt to retrieve a model from a model\u2019s name and the feature to be enabled."),nr=i(),Z=r("div"),c(we.$$.fragment),rr=i(),it=r("p"),or=l("Try to retrieve the feature -> OnnxConfig constructor map from the model type."),this.h()},l(e){const p=Qr('[data-svelte="svelte-1phssyn"]',document.head);C=o(p,"META",{name:!0,content:!0}),p.forEach(n),Ee=f(e),w=o(e,"H1",{class:!0});var Et=a(w);E=o(Et,"A",{id:!0,class:!0,href:!0});var fr=a(E);De=o(fr,"SPAN",{});var lr=a(De);g(ee.$$.fragment,lr),lr.forEach(n),fr.forEach(n),Ut=f(Et),We=o(Et,"SPAN",{});var mr=a(We);jt=m(mr,"Exporting \u{1F917} Transformers models to ONNX"),mr.forEach(n),Et.forEach(n),ft=f(e),D=o(e,"P",{});var Ot=a(D);Rt=m(Ot,"\u{1F917} Transformers provides a "),Ie=o(Ot,"CODE",{});var pr=a(Ie);Jt=m(pr,"transformers.onnx"),pr.forEach(n),Kt=m(Ot,` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),Ot.forEach(n),lt=f(e),W=o(e,"P",{});var Ct=a(W);Qt=m(Ct,"See the "),Oe=o(Ct,"A",{href:!0});var hr=a(Oe);Yt=m(hr,"guide"),hr.forEach(n),Zt=m(Ct,` on exporting \u{1F917} Transformers models for more
details.`),Ct.forEach(n),mt=f(e),k=o(e,"H2",{class:!0});var Pt=a(k);I=o(Pt,"A",{id:!0,class:!0,href:!0});var cr=a(I);Me=o(cr,"SPAN",{});var gr=a(Me);g(te.$$.fragment,gr),gr.forEach(n),cr.forEach(n),en=f(Pt),Le=o(Pt,"SPAN",{});var dr=a(Le);tn=m(dr,"ONNX Configurations"),dr.forEach(n),Pt.forEach(n),pt=f(e),Ce=o(e,"P",{});var ur=a(Ce);nn=m(ur,`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),ur.forEach(n),ht=f(e),P=o(e,"UL",{});var qe=a(P);Pe=o(qe,"LI",{});var ar=a(Pe);rn=m(ar,"Encoder-based models inherit from "),Ne=o(ar,"A",{href:!0});var _r=a(Ne);on=m(_r,"OnnxConfig"),_r.forEach(n),ar.forEach(n),an=f(qe),ke=o(qe,"LI",{});var sr=a(ke);sn=m(sr,"Decoder-based models inherit from "),Se=o(sr,"A",{href:!0});var vr=a(Se);fn=m(vr,"OnnxConfigWithPast"),vr.forEach(n),sr.forEach(n),ln=f(qe),Te=o(qe,"LI",{});var ir=a(Te);mn=m(ir,"Encoder-decoder models inherit from "),Ae=o(ir,"A",{href:!0});var xr=a(Ae);pn=m(xr,"OnnxSeq2SeqConfigWithPast"),xr.forEach(n),ir.forEach(n),qe.forEach(n),ct=f(e),S=o(e,"H3",{class:!0});var Nt=a(S);M=o(Nt,"A",{id:!0,class:!0,href:!0});var $r=a(M);Xe=o($r,"SPAN",{});var yr=a(Xe);g(ne.$$.fragment,yr),yr.forEach(n),$r.forEach(n),hn=f(Nt),Ve=o(Nt,"SPAN",{});var wr=a(Ve);cn=m(wr,"OnnxConfig"),wr.forEach(n),Nt.forEach(n),gt=f(e),x=o(e,"DIV",{class:!0});var b=a(x);g(re.$$.fragment,b),gn=f(b),ze=o(b,"P",{});var br=a(ze);dn=m(br,"Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),br.forEach(n),un=f(b),L=o(b,"DIV",{class:!0});var kt=a(L);g(oe.$$.fragment,kt),_n=f(kt),He=o(kt,"P",{});var Er=a(He);vn=m(Er,`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),Er.forEach(n),kt.forEach(n),xn=f(b),X=o(b,"DIV",{class:!0});var St=a(X);g(ae.$$.fragment,St),$n=f(St),Be=o(St,"P",{});var Or=a(Be);yn=m(Or,"Instantiate a OnnxConfig for a specific model"),Or.forEach(n),St.forEach(n),wn=f(b),V=o(b,"DIV",{class:!0});var Tt=a(V);g(se.$$.fragment,Tt),bn=f(Tt),Ge=o(Tt,"P",{});var Cr=a(Ge);En=m(Cr,"Generate inputs to provide to the ONNX exporter for the specific framework"),Cr.forEach(n),Tt.forEach(n),On=f(b),z=o(b,"DIV",{class:!0});var At=a(z);g(ie.$$.fragment,At),Cn=f(At),Ue=o(At,"P",{});var Pr=a(Ue);Pn=m(Pr,"Flag indicating if the model requires using external data format"),Pr.forEach(n),At.forEach(n),b.forEach(n),dt=f(e),T=o(e,"H3",{class:!0});var qt=a(T);H=o(qt,"A",{id:!0,class:!0,href:!0});var Nr=a(H);je=o(Nr,"SPAN",{});var kr=a(je);g(fe.$$.fragment,kr),kr.forEach(n),Nr.forEach(n),Nn=f(qt),Re=o(qt,"SPAN",{});var Sr=a(Re);kn=m(Sr,"OnnxConfigWithPast"),Sr.forEach(n),qt.forEach(n),ut=f(e),O=o(e,"DIV",{class:!0});var Fe=a(O);g(le.$$.fragment,Fe),Sn=f(Fe),B=o(Fe,"DIV",{class:!0});var Ft=a(B);g(me.$$.fragment,Ft),Tn=f(Ft),Je=o(Ft,"P",{});var Tr=a(Je);An=m(Tr,"Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),Tr.forEach(n),Ft.forEach(n),qn=f(Fe),G=o(Fe,"DIV",{class:!0});var Dt=a(G);g(pe.$$.fragment,Dt),Fn=f(Dt),he=o(Dt,"P",{});var Wt=a(he);Dn=m(Wt,"Instantiate a OnnxConfig with "),Ke=o(Wt,"CODE",{});var Ar=a(Ke);Wn=m(Ar,"use_past"),Ar.forEach(n),In=m(Wt," attribute set to True"),Wt.forEach(n),Dt.forEach(n),Fe.forEach(n),_t=f(e),A=o(e,"H3",{class:!0});var It=a(A);U=o(It,"A",{id:!0,class:!0,href:!0});var qr=a(U);Qe=o(qr,"SPAN",{});var Fr=a(Qe);g(ce.$$.fragment,Fr),Fr.forEach(n),qr.forEach(n),Mn=f(It),Ye=o(It,"SPAN",{});var Dr=a(Ye);Ln=m(Dr,"OnnxSeq2SeqConfigWithPast"),Dr.forEach(n),It.forEach(n),vt=f(e),ge=o(e,"DIV",{class:!0});var Wr=a(ge);g(de.$$.fragment,Wr),Wr.forEach(n),xt=f(e),q=o(e,"H2",{class:!0});var Mt=a(q);j=o(Mt,"A",{id:!0,class:!0,href:!0});var Ir=a(j);Ze=o(Ir,"SPAN",{});var Mr=a(Ze);g(ue.$$.fragment,Mr),Mr.forEach(n),Ir.forEach(n),Xn=f(Mt),et=o(Mt,"SPAN",{});var Lr=a(et);Vn=m(Lr,"ONNX Features"),Lr.forEach(n),Mt.forEach(n),$t=f(e),R=o(e,"P",{});var Lt=a(R);zn=m(Lt,"Each ONNX configuration is associated with a set of "),tt=o(Lt,"EM",{});var Xr=a(tt);Hn=m(Xr,"features"),Xr.forEach(n),Bn=m(Lt,` that enable you
to export models for different types of topologies or tasks.`),Lt.forEach(n),yt=f(e),F=o(e,"H3",{class:!0});var Xt=a(F);J=o(Xt,"A",{id:!0,class:!0,href:!0});var Vr=a(J);nt=o(Vr,"SPAN",{});var zr=a(nt);g(_e.$$.fragment,zr),zr.forEach(n),Vr.forEach(n),Gn=f(Xt),rt=o(Xt,"SPAN",{});var Hr=a(rt);Un=m(Hr,"FeaturesManager"),Hr.forEach(n),Xt.forEach(n),wt=f(e),$=o(e,"DIV",{class:!0});var N=a($);g(ve.$$.fragment,N),jn=f(N),K=o(N,"DIV",{class:!0});var Vt=a(K);g(xe.$$.fragment,Vt),Rn=f(Vt),ot=o(Vt,"P",{});var Br=a(ot);Jn=m(Br,"Check whether or not the model has the requested features."),Br.forEach(n),Vt.forEach(n),Kn=f(N),Q=o(N,"DIV",{class:!0});var zt=a(Q);g($e.$$.fragment,zt),Qn=f(zt),at=o(zt,"P",{});var Gr=a(at);Yn=m(Gr,"Attempt to retrieve an AutoModel class from a feature name."),Gr.forEach(n),zt.forEach(n),Zn=f(N),Y=o(N,"DIV",{class:!0});var Ht=a(Y);g(ye.$$.fragment,Ht),er=f(Ht),st=o(Ht,"P",{});var Ur=a(st);tr=m(Ur,"Attempt to retrieve a model from a model\u2019s name and the feature to be enabled."),Ur.forEach(n),Ht.forEach(n),nr=f(N),Z=o(N,"DIV",{class:!0});var Bt=a(Z);g(we.$$.fragment,Bt),rr=f(Bt),it=o(Bt,"P",{});var jr=a(it);or=m(jr,"Try to retrieve the feature -> OnnxConfig constructor map from the model type."),jr.forEach(n),Bt.forEach(n),N.forEach(n),this.h()},h(){s(C,"name","hf:doc:metadata"),s(C,"content",JSON.stringify(eo)),s(E,"id","exporting-transformers-models-to-onnx"),s(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(E,"href","#exporting-transformers-models-to-onnx"),s(w,"class","relative group"),s(Oe,"href","../serialization"),s(I,"id","onnx-configurations"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#onnx-configurations"),s(k,"class","relative group"),s(Ne,"href","/docs/transformers/pr_16083/en/main_classes/onnx#transformers.onnx.OnnxConfig"),s(Se,"href","/docs/transformers/pr_16083/en/main_classes/onnx#transformers.onnx.OnnxConfigWithPast"),s(Ae,"href","/docs/transformers/pr_16083/en/main_classes/onnx#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(M,"id","transformers.onnx.OnnxConfig"),s(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(M,"href","#transformers.onnx.OnnxConfig"),s(S,"class","relative group"),s(L,"class","docstring"),s(X,"class","docstring"),s(V,"class","docstring"),s(z,"class","docstring"),s(x,"class","docstring"),s(H,"id","transformers.onnx.OnnxConfigWithPast"),s(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(H,"href","#transformers.onnx.OnnxConfigWithPast"),s(T,"class","relative group"),s(B,"class","docstring"),s(G,"class","docstring"),s(O,"class","docstring"),s(U,"id","transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(U,"href","#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(A,"class","relative group"),s(ge,"class","docstring"),s(j,"id","onnx-features"),s(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(j,"href","#onnx-features"),s(q,"class","relative group"),s(J,"id","transformers.onnx.FeaturesManager"),s(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(J,"href","#transformers.onnx.FeaturesManager"),s(F,"class","relative group"),s(K,"class","docstring"),s(Q,"class","docstring"),s(Y,"class","docstring"),s(Z,"class","docstring"),s($,"class","docstring")},m(e,p){t(document.head,C),h(e,Ee,p),h(e,w,p),t(w,E),t(E,De),d(ee,De,null),t(w,Ut),t(w,We),t(We,jt),h(e,ft,p),h(e,D,p),t(D,Rt),t(D,Ie),t(Ie,Jt),t(D,Kt),h(e,lt,p),h(e,W,p),t(W,Qt),t(W,Oe),t(Oe,Yt),t(W,Zt),h(e,mt,p),h(e,k,p),t(k,I),t(I,Me),d(te,Me,null),t(k,en),t(k,Le),t(Le,tn),h(e,pt,p),h(e,Ce,p),t(Ce,nn),h(e,ht,p),h(e,P,p),t(P,Pe),t(Pe,rn),t(Pe,Ne),t(Ne,on),t(P,an),t(P,ke),t(ke,sn),t(ke,Se),t(Se,fn),t(P,ln),t(P,Te),t(Te,mn),t(Te,Ae),t(Ae,pn),h(e,ct,p),h(e,S,p),t(S,M),t(M,Xe),d(ne,Xe,null),t(S,hn),t(S,Ve),t(Ve,cn),h(e,gt,p),h(e,x,p),d(re,x,null),t(x,gn),t(x,ze),t(ze,dn),t(x,un),t(x,L),d(oe,L,null),t(L,_n),t(L,He),t(He,vn),t(x,xn),t(x,X),d(ae,X,null),t(X,$n),t(X,Be),t(Be,yn),t(x,wn),t(x,V),d(se,V,null),t(V,bn),t(V,Ge),t(Ge,En),t(x,On),t(x,z),d(ie,z,null),t(z,Cn),t(z,Ue),t(Ue,Pn),h(e,dt,p),h(e,T,p),t(T,H),t(H,je),d(fe,je,null),t(T,Nn),t(T,Re),t(Re,kn),h(e,ut,p),h(e,O,p),d(le,O,null),t(O,Sn),t(O,B),d(me,B,null),t(B,Tn),t(B,Je),t(Je,An),t(O,qn),t(O,G),d(pe,G,null),t(G,Fn),t(G,he),t(he,Dn),t(he,Ke),t(Ke,Wn),t(he,In),h(e,_t,p),h(e,A,p),t(A,U),t(U,Qe),d(ce,Qe,null),t(A,Mn),t(A,Ye),t(Ye,Ln),h(e,vt,p),h(e,ge,p),d(de,ge,null),h(e,xt,p),h(e,q,p),t(q,j),t(j,Ze),d(ue,Ze,null),t(q,Xn),t(q,et),t(et,Vn),h(e,$t,p),h(e,R,p),t(R,zn),t(R,tt),t(tt,Hn),t(R,Bn),h(e,yt,p),h(e,F,p),t(F,J),t(J,nt),d(_e,nt,null),t(F,Gn),t(F,rt),t(rt,Un),h(e,wt,p),h(e,$,p),d(ve,$,null),t($,jn),t($,K),d(xe,K,null),t(K,Rn),t(K,ot),t(ot,Jn),t($,Kn),t($,Q),d($e,Q,null),t(Q,Qn),t(Q,at),t(at,Yn),t($,Zn),t($,Y),d(ye,Y,null),t(Y,er),t(Y,st),t(st,tr),t($,nr),t($,Z),d(we,Z,null),t(Z,rr),t(Z,it),t(it,or),bt=!0},p:Yr,i(e){bt||(u(ee.$$.fragment,e),u(te.$$.fragment,e),u(ne.$$.fragment,e),u(re.$$.fragment,e),u(oe.$$.fragment,e),u(ae.$$.fragment,e),u(se.$$.fragment,e),u(ie.$$.fragment,e),u(fe.$$.fragment,e),u(le.$$.fragment,e),u(me.$$.fragment,e),u(pe.$$.fragment,e),u(ce.$$.fragment,e),u(de.$$.fragment,e),u(ue.$$.fragment,e),u(_e.$$.fragment,e),u(ve.$$.fragment,e),u(xe.$$.fragment,e),u($e.$$.fragment,e),u(ye.$$.fragment,e),u(we.$$.fragment,e),bt=!0)},o(e){_(ee.$$.fragment,e),_(te.$$.fragment,e),_(ne.$$.fragment,e),_(re.$$.fragment,e),_(oe.$$.fragment,e),_(ae.$$.fragment,e),_(se.$$.fragment,e),_(ie.$$.fragment,e),_(fe.$$.fragment,e),_(le.$$.fragment,e),_(me.$$.fragment,e),_(pe.$$.fragment,e),_(ce.$$.fragment,e),_(de.$$.fragment,e),_(ue.$$.fragment,e),_(_e.$$.fragment,e),_(ve.$$.fragment,e),_(xe.$$.fragment,e),_($e.$$.fragment,e),_(ye.$$.fragment,e),_(we.$$.fragment,e),bt=!1},d(e){n(C),e&&n(Ee),e&&n(w),v(ee),e&&n(ft),e&&n(D),e&&n(lt),e&&n(W),e&&n(mt),e&&n(k),v(te),e&&n(pt),e&&n(Ce),e&&n(ht),e&&n(P),e&&n(ct),e&&n(S),v(ne),e&&n(gt),e&&n(x),v(re),v(oe),v(ae),v(se),v(ie),e&&n(dt),e&&n(T),v(fe),e&&n(ut),e&&n(O),v(le),v(me),v(pe),e&&n(_t),e&&n(A),v(ce),e&&n(vt),e&&n(ge),v(de),e&&n(xt),e&&n(q),v(ue),e&&n($t),e&&n(R),e&&n(yt),e&&n(F),v(_e),e&&n(wt),e&&n($),v(ve),v(xe),v($e),v(ye),v(we)}}}const eo={local:"exporting-transformers-models-to-onnx",sections:[{local:"onnx-configurations",sections:[{local:"transformers.onnx.OnnxConfig",title:"OnnxConfig"},{local:"transformers.onnx.OnnxConfigWithPast",title:"OnnxConfigWithPast"},{local:"transformers.onnx.OnnxSeq2SeqConfigWithPast",title:"OnnxSeq2SeqConfigWithPast"}],title:"ONNX Configurations"},{local:"onnx-features",sections:[{local:"transformers.onnx.FeaturesManager",title:"FeaturesManager"}],title:"ONNX Features"}],title:"Exporting \u{1F917} Transformers models to ONNX"};function to(Gt,C,Ee){let{fw:w}=C;return Gt.$$set=E=>{"fw"in E&&Ee(0,w=E.fw)},[w]}class ao extends Rr{constructor(C){super();Jr(this,C,to,Zr,Kr,{fw:0})}}export{ao as default,eo as metadata};
