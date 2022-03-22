import{S as Rn,i as Jn,s as Kn,e as n,k as i,w as c,t as l,M as Qn,c as o,d as r,m as f,a,x as d,h as m,b as s,F as t,g as h,y as g,L as Yn,q as u,o as _,B as v}from"../../chunks/vendor-6b77c823.js";import{D as w}from"../../chunks/Docstring-abef54e3.js";import{I as be}from"../../chunks/IconCopyLink-7a11ce68.js";function Zn(jt){let C,Ee,y,E,De,ee,Gt,Me,Ut,ft,D,Rt,We,Jt,Kt,lt,M,Qt,Oe,Yt,Zt,mt,N,W,Ie,te,er,Le,tr,pt,Ce,rr,ht,P,Pe,nr,ke,or,ar,Ne,sr,Te,ir,fr,Se,lr,qe,mr,ct,T,I,Xe,re,pr,Ve,hr,dt,x,ne,cr,ze,dr,gr,L,oe,ur,He,_r,vr,X,ae,xr,Be,$r,wr,V,se,yr,je,br,Er,z,ie,Or,Ge,Cr,gt,S,H,Ue,fe,Pr,Re,kr,ut,O,le,Nr,B,me,Tr,Je,Sr,qr,j,pe,Fr,he,Ar,Ke,Dr,Mr,_t,q,G,Qe,ce,Wr,Ye,Ir,vt,de,ge,xt,F,U,Ze,ue,Lr,et,Xr,$t,R,Vr,tt,zr,Hr,wt,A,J,rt,_e,Br,nt,jr,yt,$,ve,Gr,K,xe,Ur,ot,Rr,Jr,Q,$e,Kr,at,Qr,Yr,Y,we,Zr,st,en,tn,Z,ye,rn,it,nn,bt;return ee=new be({}),te=new be({}),re=new be({}),ne=new w({props:{name:"class transformers.onnx.OnnxConfig",anchor:"transformers.onnx.OnnxConfig",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/config.py#L68"}}),oe=new w({props:{name:"flatten_output_collection_property",anchor:"transformers.onnx.OnnxConfig.flatten_output_collection_property",parameters:[{name:"name",val:": str"},{name:"field",val:": typing.Iterable[typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/config.py#L320",returnDescription:`
<p>Outputs with flattened structure and key mapping this new structure.</p>
`,returnType:`
<p>(Dict[str, Any])</p>
`}}),ae=new w({props:{name:"from_model_config",anchor:"transformers.onnx.OnnxConfig.from_model_config",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/config.py#L109",returnDescription:`
<p>OnnxConfig for this model</p>
`}}),se=new w({props:{name:"generate_dummy_inputs",anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs",parameters:[{name:"preprocessor",val:": typing.Union[ForwardRef('PreTrainedTokenizerBase'), ForwardRef('FeatureExtractionMixin')]"},{name:"batch_size",val:": int = -1"},{name:"seq_length",val:": int = -1"},{name:"is_pair",val:": bool = False"},{name:"framework",val:": typing.Optional[transformers.file_utils.TensorType] = None"},{name:"num_channels",val:": int = 3"},{name:"image_width",val:": int = 40"},{name:"image_height",val:": int = 40"},{name:"tokenizer",val:": PreTrainedTokenizerBase = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/config.py#L239",parametersDescription:[{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The batch size to export the model for (-1 means dynamic axis).`,name:"batch_size"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.seq_length",description:`<strong>seq_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The sequence length to export the model for (-1 means dynamic axis).`,name:"seq_length"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.is_pair",description:`<strong>is_pair</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Indicate if the input is a pair (sentence 1, sentence 2)`,name:"is_pair"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.framework",description:`<strong>framework</strong> (<code>TensorType</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The framework (PyTorch or TensorFlow) that the tokenizer will generate tensors for.`,name:"framework"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of channels of the generated images.`,name:"num_channels"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.image_width",description:`<strong>image_width</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The width of the generated images.`,name:"image_width"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.image_height",description:`<strong>image_height</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The height of the generated images.`,name:"image_height"}],returnDescription:`
<p>Mapping[str, Tensor] holding the kwargs to provide to the model\u2019s forward function</p>
`}}),ie=new w({props:{name:"use_external_data_format",anchor:"transformers.onnx.OnnxConfig.use_external_data_format",parameters:[{name:"num_parameters",val:": int"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/config.py#L213",returnDescription:`
<p>True if model.num_parameters() * size_of(float32) >= 2Gb False otherwise</p>
`}}),fe=new be({}),le=new w({props:{name:"class transformers.onnx.OnnxConfigWithPast",anchor:"transformers.onnx.OnnxConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/config.py#L339"}}),me=new w({props:{name:"fill_with_past_key_values_",anchor:"transformers.onnx.OnnxConfigWithPast.fill_with_past_key_values_",parameters:[{name:"inputs_or_outputs",val:": typing.Mapping[str, typing.Mapping[int, str]]"},{name:"direction",val:": str"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/config.py#L441"}}),pe=new w({props:{name:"with_past",anchor:"transformers.onnx.OnnxConfigWithPast.with_past",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/config.py#L350",returnDescription:`
<p>OnnxConfig with <code>.use_past = True</code></p>
`}}),ce=new be({}),ge=new w({props:{name:"class transformers.onnx.OnnxSeq2SeqConfigWithPast",anchor:"transformers.onnx.OnnxSeq2SeqConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/config.py#L474"}}),ue=new be({}),_e=new be({}),ve=new w({props:{name:"class transformers.onnx.FeaturesManager",anchor:"transformers.onnx.FeaturesManager",parameters:[],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/features.py#L85"}}),xe=new w({props:{name:"check_supported_model_or_raise",anchor:"transformers.onnx.FeaturesManager.check_supported_model_or_raise",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, transformers.modeling_tf_utils.TFPreTrainedModel]"},{name:"feature",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/features.py#L365",returnDescription:`
<p>(str) The type of the model (OnnxConfig) The OnnxConfig instance holding the model export properties.</p>
`}}),$e=new w({props:{name:"get_model_class_for_feature",anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature",parameters:[{name:"feature",val:": str"},{name:"framework",val:": str = 'pt'"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/features.py#L310",parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
The feature required.`,name:"feature"},{anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature.framework",description:`<strong>framework</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The framework to use for the export.`,name:"framework"}],returnDescription:`
<p>The AutoModel class corresponding to the feature.</p>
`}}),we=new w({props:{name:"get_model_from_feature",anchor:"transformers.onnx.FeaturesManager.get_model_from_feature",parameters:[{name:"feature",val:": str"},{name:"model",val:": str"},{name:"framework",val:": str = 'pt'"},{name:"cache_dir",val:": str = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/features.py#L337",parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
The feature required.`,name:"feature"},{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.model",description:`<strong>model</strong> (<code>str</code>) &#x2014;
The name of the model to export.`,name:"model"},{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.framework",description:`<strong>framework</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The framework to use for the export.`,name:"framework"}],returnDescription:`
<p>The instance of the model.</p>
`}}),ye=new w({props:{name:"get_supported_features_for_model_type",anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type",parameters:[{name:"model_type",val:": str"},{name:"model_name",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/pr_16345/src/transformers/onnx/features.py#L265",parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type.model_type",description:`<strong>model_type</strong> (<code>str</code>) &#x2014;
The model type to retrieve the supported features for.`,name:"model_type"},{anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type.model_name",description:`<strong>model_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name attribute of the model object, only used for the exception message.`,name:"model_name"}],returnDescription:`
<p>The dictionary mapping each feature to a corresponding OnnxConfig constructor.</p>
`}}),{c(){C=n("meta"),Ee=i(),y=n("h1"),E=n("a"),De=n("span"),c(ee.$$.fragment),Gt=i(),Me=n("span"),Ut=l("Exporting \u{1F917} Transformers models to ONNX"),ft=i(),D=n("p"),Rt=l("\u{1F917} Transformers provides a "),We=n("code"),Jt=l("transformers.onnx"),Kt=l(` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),lt=i(),M=n("p"),Qt=l("See the "),Oe=n("a"),Yt=l("guide"),Zt=l(` on exporting \u{1F917} Transformers models for more
details.`),mt=i(),N=n("h2"),W=n("a"),Ie=n("span"),c(te.$$.fragment),er=i(),Le=n("span"),tr=l("ONNX Configurations"),pt=i(),Ce=n("p"),rr=l(`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),ht=i(),P=n("ul"),Pe=n("li"),nr=l("Encoder-based models inherit from "),ke=n("a"),or=l("OnnxConfig"),ar=i(),Ne=n("li"),sr=l("Decoder-based models inherit from "),Te=n("a"),ir=l("OnnxConfigWithPast"),fr=i(),Se=n("li"),lr=l("Encoder-decoder models inherit from "),qe=n("a"),mr=l("OnnxSeq2SeqConfigWithPast"),ct=i(),T=n("h3"),I=n("a"),Xe=n("span"),c(re.$$.fragment),pr=i(),Ve=n("span"),hr=l("OnnxConfig"),dt=i(),x=n("div"),c(ne.$$.fragment),cr=i(),ze=n("p"),dr=l("Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),gr=i(),L=n("div"),c(oe.$$.fragment),ur=i(),He=n("p"),_r=l(`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),vr=i(),X=n("div"),c(ae.$$.fragment),xr=i(),Be=n("p"),$r=l("Instantiate a OnnxConfig for a specific model"),wr=i(),V=n("div"),c(se.$$.fragment),yr=i(),je=n("p"),br=l("Generate inputs to provide to the ONNX exporter for the specific framework"),Er=i(),z=n("div"),c(ie.$$.fragment),Or=i(),Ge=n("p"),Cr=l("Flag indicating if the model requires using external data format"),gt=i(),S=n("h3"),H=n("a"),Ue=n("span"),c(fe.$$.fragment),Pr=i(),Re=n("span"),kr=l("OnnxConfigWithPast"),ut=i(),O=n("div"),c(le.$$.fragment),Nr=i(),B=n("div"),c(me.$$.fragment),Tr=i(),Je=n("p"),Sr=l("Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),qr=i(),j=n("div"),c(pe.$$.fragment),Fr=i(),he=n("p"),Ar=l("Instantiate a OnnxConfig with "),Ke=n("code"),Dr=l("use_past"),Mr=l(" attribute set to True"),_t=i(),q=n("h3"),G=n("a"),Qe=n("span"),c(ce.$$.fragment),Wr=i(),Ye=n("span"),Ir=l("OnnxSeq2SeqConfigWithPast"),vt=i(),de=n("div"),c(ge.$$.fragment),xt=i(),F=n("h2"),U=n("a"),Ze=n("span"),c(ue.$$.fragment),Lr=i(),et=n("span"),Xr=l("ONNX Features"),$t=i(),R=n("p"),Vr=l("Each ONNX configuration is associated with a set of "),tt=n("em"),zr=l("features"),Hr=l(` that enable you
to export models for different types of topologies or tasks.`),wt=i(),A=n("h3"),J=n("a"),rt=n("span"),c(_e.$$.fragment),Br=i(),nt=n("span"),jr=l("FeaturesManager"),yt=i(),$=n("div"),c(ve.$$.fragment),Gr=i(),K=n("div"),c(xe.$$.fragment),Ur=i(),ot=n("p"),Rr=l("Check whether or not the model has the requested features."),Jr=i(),Q=n("div"),c($e.$$.fragment),Kr=i(),at=n("p"),Qr=l("Attempts to retrieve an AutoModel class from a feature name."),Yr=i(),Y=n("div"),c(we.$$.fragment),Zr=i(),st=n("p"),en=l("Attempts to retrieve a model from a model\u2019s name and the feature to be enabled."),tn=i(),Z=n("div"),c(ye.$$.fragment),rn=i(),it=n("p"),nn=l("Tries to retrieve the feature -> OnnxConfig constructor map from the model type."),this.h()},l(e){const p=Qn('[data-svelte="svelte-1phssyn"]',document.head);C=o(p,"META",{name:!0,content:!0}),p.forEach(r),Ee=f(e),y=o(e,"H1",{class:!0});var Et=a(y);E=o(Et,"A",{id:!0,class:!0,href:!0});var fn=a(E);De=o(fn,"SPAN",{});var ln=a(De);d(ee.$$.fragment,ln),ln.forEach(r),fn.forEach(r),Gt=f(Et),Me=o(Et,"SPAN",{});var mn=a(Me);Ut=m(mn,"Exporting \u{1F917} Transformers models to ONNX"),mn.forEach(r),Et.forEach(r),ft=f(e),D=o(e,"P",{});var Ot=a(D);Rt=m(Ot,"\u{1F917} Transformers provides a "),We=o(Ot,"CODE",{});var pn=a(We);Jt=m(pn,"transformers.onnx"),pn.forEach(r),Kt=m(Ot,` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),Ot.forEach(r),lt=f(e),M=o(e,"P",{});var Ct=a(M);Qt=m(Ct,"See the "),Oe=o(Ct,"A",{href:!0});var hn=a(Oe);Yt=m(hn,"guide"),hn.forEach(r),Zt=m(Ct,` on exporting \u{1F917} Transformers models for more
details.`),Ct.forEach(r),mt=f(e),N=o(e,"H2",{class:!0});var Pt=a(N);W=o(Pt,"A",{id:!0,class:!0,href:!0});var cn=a(W);Ie=o(cn,"SPAN",{});var dn=a(Ie);d(te.$$.fragment,dn),dn.forEach(r),cn.forEach(r),er=f(Pt),Le=o(Pt,"SPAN",{});var gn=a(Le);tr=m(gn,"ONNX Configurations"),gn.forEach(r),Pt.forEach(r),pt=f(e),Ce=o(e,"P",{});var un=a(Ce);rr=m(un,`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),un.forEach(r),ht=f(e),P=o(e,"UL",{});var Fe=a(P);Pe=o(Fe,"LI",{});var on=a(Pe);nr=m(on,"Encoder-based models inherit from "),ke=o(on,"A",{href:!0});var _n=a(ke);or=m(_n,"OnnxConfig"),_n.forEach(r),on.forEach(r),ar=f(Fe),Ne=o(Fe,"LI",{});var an=a(Ne);sr=m(an,"Decoder-based models inherit from "),Te=o(an,"A",{href:!0});var vn=a(Te);ir=m(vn,"OnnxConfigWithPast"),vn.forEach(r),an.forEach(r),fr=f(Fe),Se=o(Fe,"LI",{});var sn=a(Se);lr=m(sn,"Encoder-decoder models inherit from "),qe=o(sn,"A",{href:!0});var xn=a(qe);mr=m(xn,"OnnxSeq2SeqConfigWithPast"),xn.forEach(r),sn.forEach(r),Fe.forEach(r),ct=f(e),T=o(e,"H3",{class:!0});var kt=a(T);I=o(kt,"A",{id:!0,class:!0,href:!0});var $n=a(I);Xe=o($n,"SPAN",{});var wn=a(Xe);d(re.$$.fragment,wn),wn.forEach(r),$n.forEach(r),pr=f(kt),Ve=o(kt,"SPAN",{});var yn=a(Ve);hr=m(yn,"OnnxConfig"),yn.forEach(r),kt.forEach(r),dt=f(e),x=o(e,"DIV",{class:!0});var b=a(x);d(ne.$$.fragment,b),cr=f(b),ze=o(b,"P",{});var bn=a(ze);dr=m(bn,"Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),bn.forEach(r),gr=f(b),L=o(b,"DIV",{class:!0});var Nt=a(L);d(oe.$$.fragment,Nt),ur=f(Nt),He=o(Nt,"P",{});var En=a(He);_r=m(En,`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),En.forEach(r),Nt.forEach(r),vr=f(b),X=o(b,"DIV",{class:!0});var Tt=a(X);d(ae.$$.fragment,Tt),xr=f(Tt),Be=o(Tt,"P",{});var On=a(Be);$r=m(On,"Instantiate a OnnxConfig for a specific model"),On.forEach(r),Tt.forEach(r),wr=f(b),V=o(b,"DIV",{class:!0});var St=a(V);d(se.$$.fragment,St),yr=f(St),je=o(St,"P",{});var Cn=a(je);br=m(Cn,"Generate inputs to provide to the ONNX exporter for the specific framework"),Cn.forEach(r),St.forEach(r),Er=f(b),z=o(b,"DIV",{class:!0});var qt=a(z);d(ie.$$.fragment,qt),Or=f(qt),Ge=o(qt,"P",{});var Pn=a(Ge);Cr=m(Pn,"Flag indicating if the model requires using external data format"),Pn.forEach(r),qt.forEach(r),b.forEach(r),gt=f(e),S=o(e,"H3",{class:!0});var Ft=a(S);H=o(Ft,"A",{id:!0,class:!0,href:!0});var kn=a(H);Ue=o(kn,"SPAN",{});var Nn=a(Ue);d(fe.$$.fragment,Nn),Nn.forEach(r),kn.forEach(r),Pr=f(Ft),Re=o(Ft,"SPAN",{});var Tn=a(Re);kr=m(Tn,"OnnxConfigWithPast"),Tn.forEach(r),Ft.forEach(r),ut=f(e),O=o(e,"DIV",{class:!0});var Ae=a(O);d(le.$$.fragment,Ae),Nr=f(Ae),B=o(Ae,"DIV",{class:!0});var At=a(B);d(me.$$.fragment,At),Tr=f(At),Je=o(At,"P",{});var Sn=a(Je);Sr=m(Sn,"Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),Sn.forEach(r),At.forEach(r),qr=f(Ae),j=o(Ae,"DIV",{class:!0});var Dt=a(j);d(pe.$$.fragment,Dt),Fr=f(Dt),he=o(Dt,"P",{});var Mt=a(he);Ar=m(Mt,"Instantiate a OnnxConfig with "),Ke=o(Mt,"CODE",{});var qn=a(Ke);Dr=m(qn,"use_past"),qn.forEach(r),Mr=m(Mt," attribute set to True"),Mt.forEach(r),Dt.forEach(r),Ae.forEach(r),_t=f(e),q=o(e,"H3",{class:!0});var Wt=a(q);G=o(Wt,"A",{id:!0,class:!0,href:!0});var Fn=a(G);Qe=o(Fn,"SPAN",{});var An=a(Qe);d(ce.$$.fragment,An),An.forEach(r),Fn.forEach(r),Wr=f(Wt),Ye=o(Wt,"SPAN",{});var Dn=a(Ye);Ir=m(Dn,"OnnxSeq2SeqConfigWithPast"),Dn.forEach(r),Wt.forEach(r),vt=f(e),de=o(e,"DIV",{class:!0});var Mn=a(de);d(ge.$$.fragment,Mn),Mn.forEach(r),xt=f(e),F=o(e,"H2",{class:!0});var It=a(F);U=o(It,"A",{id:!0,class:!0,href:!0});var Wn=a(U);Ze=o(Wn,"SPAN",{});var In=a(Ze);d(ue.$$.fragment,In),In.forEach(r),Wn.forEach(r),Lr=f(It),et=o(It,"SPAN",{});var Ln=a(et);Xr=m(Ln,"ONNX Features"),Ln.forEach(r),It.forEach(r),$t=f(e),R=o(e,"P",{});var Lt=a(R);Vr=m(Lt,"Each ONNX configuration is associated with a set of "),tt=o(Lt,"EM",{});var Xn=a(tt);zr=m(Xn,"features"),Xn.forEach(r),Hr=m(Lt,` that enable you
to export models for different types of topologies or tasks.`),Lt.forEach(r),wt=f(e),A=o(e,"H3",{class:!0});var Xt=a(A);J=o(Xt,"A",{id:!0,class:!0,href:!0});var Vn=a(J);rt=o(Vn,"SPAN",{});var zn=a(rt);d(_e.$$.fragment,zn),zn.forEach(r),Vn.forEach(r),Br=f(Xt),nt=o(Xt,"SPAN",{});var Hn=a(nt);jr=m(Hn,"FeaturesManager"),Hn.forEach(r),Xt.forEach(r),yt=f(e),$=o(e,"DIV",{class:!0});var k=a($);d(ve.$$.fragment,k),Gr=f(k),K=o(k,"DIV",{class:!0});var Vt=a(K);d(xe.$$.fragment,Vt),Ur=f(Vt),ot=o(Vt,"P",{});var Bn=a(ot);Rr=m(Bn,"Check whether or not the model has the requested features."),Bn.forEach(r),Vt.forEach(r),Jr=f(k),Q=o(k,"DIV",{class:!0});var zt=a(Q);d($e.$$.fragment,zt),Kr=f(zt),at=o(zt,"P",{});var jn=a(at);Qr=m(jn,"Attempts to retrieve an AutoModel class from a feature name."),jn.forEach(r),zt.forEach(r),Yr=f(k),Y=o(k,"DIV",{class:!0});var Ht=a(Y);d(we.$$.fragment,Ht),Zr=f(Ht),st=o(Ht,"P",{});var Gn=a(st);en=m(Gn,"Attempts to retrieve a model from a model\u2019s name and the feature to be enabled."),Gn.forEach(r),Ht.forEach(r),tn=f(k),Z=o(k,"DIV",{class:!0});var Bt=a(Z);d(ye.$$.fragment,Bt),rn=f(Bt),it=o(Bt,"P",{});var Un=a(it);nn=m(Un,"Tries to retrieve the feature -> OnnxConfig constructor map from the model type."),Un.forEach(r),Bt.forEach(r),k.forEach(r),this.h()},h(){s(C,"name","hf:doc:metadata"),s(C,"content",JSON.stringify(eo)),s(E,"id","exporting-transformers-models-to-onnx"),s(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(E,"href","#exporting-transformers-models-to-onnx"),s(y,"class","relative group"),s(Oe,"href","../serialization"),s(W,"id","onnx-configurations"),s(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(W,"href","#onnx-configurations"),s(N,"class","relative group"),s(ke,"href","/docs/transformers/pr_16345/en/main_classes/onnx#transformers.onnx.OnnxConfig"),s(Te,"href","/docs/transformers/pr_16345/en/main_classes/onnx#transformers.onnx.OnnxConfigWithPast"),s(qe,"href","/docs/transformers/pr_16345/en/main_classes/onnx#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(I,"id","transformers.onnx.OnnxConfig"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#transformers.onnx.OnnxConfig"),s(T,"class","relative group"),s(L,"class","docstring"),s(X,"class","docstring"),s(V,"class","docstring"),s(z,"class","docstring"),s(x,"class","docstring"),s(H,"id","transformers.onnx.OnnxConfigWithPast"),s(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(H,"href","#transformers.onnx.OnnxConfigWithPast"),s(S,"class","relative group"),s(B,"class","docstring"),s(j,"class","docstring"),s(O,"class","docstring"),s(G,"id","transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(G,"href","#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(q,"class","relative group"),s(de,"class","docstring"),s(U,"id","onnx-features"),s(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(U,"href","#onnx-features"),s(F,"class","relative group"),s(J,"id","transformers.onnx.FeaturesManager"),s(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(J,"href","#transformers.onnx.FeaturesManager"),s(A,"class","relative group"),s(K,"class","docstring"),s(Q,"class","docstring"),s(Y,"class","docstring"),s(Z,"class","docstring"),s($,"class","docstring")},m(e,p){t(document.head,C),h(e,Ee,p),h(e,y,p),t(y,E),t(E,De),g(ee,De,null),t(y,Gt),t(y,Me),t(Me,Ut),h(e,ft,p),h(e,D,p),t(D,Rt),t(D,We),t(We,Jt),t(D,Kt),h(e,lt,p),h(e,M,p),t(M,Qt),t(M,Oe),t(Oe,Yt),t(M,Zt),h(e,mt,p),h(e,N,p),t(N,W),t(W,Ie),g(te,Ie,null),t(N,er),t(N,Le),t(Le,tr),h(e,pt,p),h(e,Ce,p),t(Ce,rr),h(e,ht,p),h(e,P,p),t(P,Pe),t(Pe,nr),t(Pe,ke),t(ke,or),t(P,ar),t(P,Ne),t(Ne,sr),t(Ne,Te),t(Te,ir),t(P,fr),t(P,Se),t(Se,lr),t(Se,qe),t(qe,mr),h(e,ct,p),h(e,T,p),t(T,I),t(I,Xe),g(re,Xe,null),t(T,pr),t(T,Ve),t(Ve,hr),h(e,dt,p),h(e,x,p),g(ne,x,null),t(x,cr),t(x,ze),t(ze,dr),t(x,gr),t(x,L),g(oe,L,null),t(L,ur),t(L,He),t(He,_r),t(x,vr),t(x,X),g(ae,X,null),t(X,xr),t(X,Be),t(Be,$r),t(x,wr),t(x,V),g(se,V,null),t(V,yr),t(V,je),t(je,br),t(x,Er),t(x,z),g(ie,z,null),t(z,Or),t(z,Ge),t(Ge,Cr),h(e,gt,p),h(e,S,p),t(S,H),t(H,Ue),g(fe,Ue,null),t(S,Pr),t(S,Re),t(Re,kr),h(e,ut,p),h(e,O,p),g(le,O,null),t(O,Nr),t(O,B),g(me,B,null),t(B,Tr),t(B,Je),t(Je,Sr),t(O,qr),t(O,j),g(pe,j,null),t(j,Fr),t(j,he),t(he,Ar),t(he,Ke),t(Ke,Dr),t(he,Mr),h(e,_t,p),h(e,q,p),t(q,G),t(G,Qe),g(ce,Qe,null),t(q,Wr),t(q,Ye),t(Ye,Ir),h(e,vt,p),h(e,de,p),g(ge,de,null),h(e,xt,p),h(e,F,p),t(F,U),t(U,Ze),g(ue,Ze,null),t(F,Lr),t(F,et),t(et,Xr),h(e,$t,p),h(e,R,p),t(R,Vr),t(R,tt),t(tt,zr),t(R,Hr),h(e,wt,p),h(e,A,p),t(A,J),t(J,rt),g(_e,rt,null),t(A,Br),t(A,nt),t(nt,jr),h(e,yt,p),h(e,$,p),g(ve,$,null),t($,Gr),t($,K),g(xe,K,null),t(K,Ur),t(K,ot),t(ot,Rr),t($,Jr),t($,Q),g($e,Q,null),t(Q,Kr),t(Q,at),t(at,Qr),t($,Yr),t($,Y),g(we,Y,null),t(Y,Zr),t(Y,st),t(st,en),t($,tn),t($,Z),g(ye,Z,null),t(Z,rn),t(Z,it),t(it,nn),bt=!0},p:Yn,i(e){bt||(u(ee.$$.fragment,e),u(te.$$.fragment,e),u(re.$$.fragment,e),u(ne.$$.fragment,e),u(oe.$$.fragment,e),u(ae.$$.fragment,e),u(se.$$.fragment,e),u(ie.$$.fragment,e),u(fe.$$.fragment,e),u(le.$$.fragment,e),u(me.$$.fragment,e),u(pe.$$.fragment,e),u(ce.$$.fragment,e),u(ge.$$.fragment,e),u(ue.$$.fragment,e),u(_e.$$.fragment,e),u(ve.$$.fragment,e),u(xe.$$.fragment,e),u($e.$$.fragment,e),u(we.$$.fragment,e),u(ye.$$.fragment,e),bt=!0)},o(e){_(ee.$$.fragment,e),_(te.$$.fragment,e),_(re.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_(ae.$$.fragment,e),_(se.$$.fragment,e),_(ie.$$.fragment,e),_(fe.$$.fragment,e),_(le.$$.fragment,e),_(me.$$.fragment,e),_(pe.$$.fragment,e),_(ce.$$.fragment,e),_(ge.$$.fragment,e),_(ue.$$.fragment,e),_(_e.$$.fragment,e),_(ve.$$.fragment,e),_(xe.$$.fragment,e),_($e.$$.fragment,e),_(we.$$.fragment,e),_(ye.$$.fragment,e),bt=!1},d(e){r(C),e&&r(Ee),e&&r(y),v(ee),e&&r(ft),e&&r(D),e&&r(lt),e&&r(M),e&&r(mt),e&&r(N),v(te),e&&r(pt),e&&r(Ce),e&&r(ht),e&&r(P),e&&r(ct),e&&r(T),v(re),e&&r(dt),e&&r(x),v(ne),v(oe),v(ae),v(se),v(ie),e&&r(gt),e&&r(S),v(fe),e&&r(ut),e&&r(O),v(le),v(me),v(pe),e&&r(_t),e&&r(q),v(ce),e&&r(vt),e&&r(de),v(ge),e&&r(xt),e&&r(F),v(ue),e&&r($t),e&&r(R),e&&r(wt),e&&r(A),v(_e),e&&r(yt),e&&r($),v(ve),v(xe),v($e),v(we),v(ye)}}}const eo={local:"exporting-transformers-models-to-onnx",sections:[{local:"onnx-configurations",sections:[{local:"transformers.onnx.OnnxConfig",title:"OnnxConfig"},{local:"transformers.onnx.OnnxConfigWithPast",title:"OnnxConfigWithPast"},{local:"transformers.onnx.OnnxSeq2SeqConfigWithPast",title:"OnnxSeq2SeqConfigWithPast"}],title:"ONNX Configurations"},{local:"onnx-features",sections:[{local:"transformers.onnx.FeaturesManager",title:"FeaturesManager"}],title:"ONNX Features"}],title:"Exporting \u{1F917} Transformers models to ONNX"};function to(jt,C,Ee){let{fw:y}=C;return jt.$$set=E=>{"fw"in E&&Ee(0,y=E.fw)},[y]}class ao extends Rn{constructor(C){super();Jn(this,C,to,Zn,Kn,{fw:0})}}export{ao as default,eo as metadata};
