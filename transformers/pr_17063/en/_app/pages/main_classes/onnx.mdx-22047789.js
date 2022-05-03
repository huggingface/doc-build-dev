import{S as Rn,i as Jn,s as Kn,e as n,k as i,w as c,t as f,M as Qn,c as o,d as r,m as l,a,x as h,h as m,b as s,F as t,g as d,y as g,L as Yn,q as u,o as _,B as v,v as Zn}from"../../chunks/vendor-6b77c823.js";import{D as b}from"../../chunks/Docstring-1088f2fb.js";import{I as we}from"../../chunks/IconCopyLink-7a11ce68.js";function eo(sn){let C,it,P,A,Ae,ee,Ut,De,jt,lt,D,Gt,Me,Rt,Jt,ft,M,Kt,Oe,Qt,Yt,mt,k,W,We,te,Zt,Ie,er,pt,Ee,tr,dt,O,Ce,rr,Pe,nr,or,ke,ar,Ne,sr,ir,Te,lr,Se,fr,ct,N,I,Le,re,mr,Xe,pr,ht,x,ne,dr,Ve,cr,hr,L,oe,gr,ze,ur,_r,X,ae,vr,He,xr,$r,V,se,br,Be,yr,wr,z,ie,Or,Ue,Er,gt,T,H,je,le,Cr,Ge,Pr,ut,w,fe,kr,B,me,Nr,Re,Tr,Sr,U,pe,qr,de,Fr,Je,Ar,Dr,_t,S,j,Ke,ce,Mr,Qe,Wr,vt,he,ge,xt,q,G,Ye,ue,Ir,Ze,Lr,$t,R,Xr,et,Vr,zr,bt,F,J,tt,_e,Hr,rt,Br,yt,$,ve,Ur,K,xe,jr,nt,Gr,Rr,Q,$e,Jr,ot,Kr,Qr,Y,be,Yr,at,Zr,en,Z,ye,tn,st,rn,wt;return ee=new we({}),te=new we({}),re=new we({}),ne=new b({props:{name:"class transformers.onnx.OnnxConfig",anchor:"transformers.onnx.OnnxConfig",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/config.py#L67"}}),oe=new b({props:{name:"flatten_output_collection_property",anchor:"transformers.onnx.OnnxConfig.flatten_output_collection_property",parameters:[{name:"name",val:": str"},{name:"field",val:": typing.Iterable[typing.Any]"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/config.py#L346",returnDescription:`
<p>Outputs with flattened structure and key mapping this new structure.</p>
`,returnType:`
<p>(Dict[str, Any])</p>
`}}),ae=new b({props:{name:"from_model_config",anchor:"transformers.onnx.OnnxConfig.from_model_config",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/config.py#L109",returnDescription:`
<p>OnnxConfig for this model</p>
`}}),se=new b({props:{name:"generate_dummy_inputs",anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs",parameters:[{name:"preprocessor",val:": typing.Union[ForwardRef('PreTrainedTokenizerBase'), ForwardRef('FeatureExtractionMixin')]"},{name:"batch_size",val:": int = -1"},{name:"seq_length",val:": int = -1"},{name:"num_choices",val:": int = -1"},{name:"is_pair",val:": bool = False"},{name:"framework",val:": typing.Optional[transformers.utils.generic.TensorType] = None"},{name:"num_channels",val:": int = 3"},{name:"image_width",val:": int = 40"},{name:"image_height",val:": int = 40"},{name:"tokenizer",val:": PreTrainedTokenizerBase = None"}],parametersDescription:[{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The batch size to export the model for (-1 means dynamic axis).`,name:"batch_size"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.num_choices",description:`<strong>num_choices</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The number of candidate answers provided for multiple choice task (-1 means dynamic axis).`,name:"num_choices"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.seq_length",description:`<strong>seq_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The sequence length to export the model for (-1 means dynamic axis).`,name:"seq_length"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.is_pair",description:`<strong>is_pair</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Indicate if the input is a pair (sentence 1, sentence 2)`,name:"is_pair"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.framework",description:`<strong>framework</strong> (<code>TensorType</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The framework (PyTorch or TensorFlow) that the tokenizer will generate tensors for.`,name:"framework"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of channels of the generated images.`,name:"num_channels"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.image_width",description:`<strong>image_width</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The width of the generated images.`,name:"image_width"},{anchor:"transformers.onnx.OnnxConfig.generate_dummy_inputs.image_height",description:`<strong>image_height</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The height of the generated images.`,name:"image_height"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/config.py#L249",returnDescription:`
<p>Mapping[str, Tensor] holding the kwargs to provide to the model\u2019s forward function</p>
`}}),ie=new b({props:{name:"use_external_data_format",anchor:"transformers.onnx.OnnxConfig.use_external_data_format",parameters:[{name:"num_parameters",val:": int"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/config.py#L223",returnDescription:`
<p>True if model.num_parameters() * size_of(float32) >= 2Gb False otherwise</p>
`}}),le=new we({}),fe=new b({props:{name:"class transformers.onnx.OnnxConfigWithPast",anchor:"transformers.onnx.OnnxConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/config.py#L365"}}),me=new b({props:{name:"fill_with_past_key_values_",anchor:"transformers.onnx.OnnxConfigWithPast.fill_with_past_key_values_",parameters:[{name:"inputs_or_outputs",val:": typing.Mapping[str, typing.Mapping[int, str]]"},{name:"direction",val:": str"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/config.py#L469"}}),pe=new b({props:{name:"with_past",anchor:"transformers.onnx.OnnxConfigWithPast.with_past",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/config.py#L376",returnDescription:`
<p>OnnxConfig with <code>.use_past = True</code></p>
`}}),ce=new we({}),ge=new b({props:{name:"class transformers.onnx.OnnxSeq2SeqConfigWithPast",anchor:"transformers.onnx.OnnxSeq2SeqConfigWithPast",parameters:[{name:"config",val:": PretrainedConfig"},{name:"task",val:": str = 'default'"},{name:"patching_specs",val:": typing.List[transformers.onnx.config.PatchingSpec] = None"},{name:"use_past",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/config.py#L502"}}),ue=new we({}),_e=new we({}),ve=new b({props:{name:"class transformers.onnx.FeaturesManager",anchor:"transformers.onnx.FeaturesManager",parameters:[],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/features.py#L95"}}),xe=new b({props:{name:"check_supported_model_or_raise",anchor:"transformers.onnx.FeaturesManager.check_supported_model_or_raise",parameters:[{name:"model",val:": typing.Union[transformers.modeling_utils.PreTrainedModel, transformers.modeling_tf_utils.TFPreTrainedModel]"},{name:"feature",val:": str = 'default'"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/features.py#L453",returnDescription:`
<p>(str) The type of the model (OnnxConfig) The OnnxConfig instance holding the model export properties.</p>
`}}),$e=new b({props:{name:"get_model_class_for_feature",anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature",parameters:[{name:"feature",val:": str"},{name:"framework",val:": str = 'pt'"}],parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
The feature required.`,name:"feature"},{anchor:"transformers.onnx.FeaturesManager.get_model_class_for_feature.framework",description:`<strong>framework</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The framework to use for the export.`,name:"framework"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/features.py#L397",returnDescription:`
<p>The AutoModel class corresponding to the feature.</p>
`}}),be=new b({props:{name:"get_model_from_feature",anchor:"transformers.onnx.FeaturesManager.get_model_from_feature",parameters:[{name:"feature",val:": str"},{name:"model",val:": str"},{name:"framework",val:": str = 'pt'"},{name:"cache_dir",val:": str = None"}],parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.feature",description:`<strong>feature</strong> (<code>str</code>) &#x2014;
The feature required.`,name:"feature"},{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.model",description:`<strong>model</strong> (<code>str</code>) &#x2014;
The name of the model to export.`,name:"model"},{anchor:"transformers.onnx.FeaturesManager.get_model_from_feature.framework",description:`<strong>framework</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The framework to use for the export.`,name:"framework"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/features.py#L424",returnDescription:`
<p>The instance of the model.</p>
`}}),ye=new b({props:{name:"get_supported_features_for_model_type",anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type",parameters:[{name:"model_type",val:": str"},{name:"model_name",val:": typing.Optional[str] = None"}],parametersDescription:[{anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type.model_type",description:`<strong>model_type</strong> (<code>str</code>) &#x2014;
The model type to retrieve the supported features for.`,name:"model_type"},{anchor:"transformers.onnx.FeaturesManager.get_supported_features_for_model_type.model_name",description:`<strong>model_name</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name attribute of the model object, only used for the exception message.`,name:"model_name"}],source:"https://github.com/huggingface/transformers/blob/vr_17063/src/transformers/onnx/features.py#L352",returnDescription:`
<p>The dictionary mapping each feature to a corresponding OnnxConfig constructor.</p>
`}}),{c(){C=n("meta"),it=i(),P=n("h1"),A=n("a"),Ae=n("span"),c(ee.$$.fragment),Ut=i(),De=n("span"),jt=f("Exporting \u{1F917} Transformers models to ONNX"),lt=i(),D=n("p"),Gt=f("\u{1F917} Transformers provides a "),Me=n("code"),Rt=f("transformers.onnx"),Jt=f(` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),ft=i(),M=n("p"),Kt=f("See the "),Oe=n("a"),Qt=f("guide"),Yt=f(` on exporting \u{1F917} Transformers models for more
details.`),mt=i(),k=n("h2"),W=n("a"),We=n("span"),c(te.$$.fragment),Zt=i(),Ie=n("span"),er=f("ONNX Configurations"),pt=i(),Ee=n("p"),tr=f(`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),dt=i(),O=n("ul"),Ce=n("li"),rr=f("Encoder-based models inherit from "),Pe=n("a"),nr=f("OnnxConfig"),or=i(),ke=n("li"),ar=f("Decoder-based models inherit from "),Ne=n("a"),sr=f("OnnxConfigWithPast"),ir=i(),Te=n("li"),lr=f("Encoder-decoder models inherit from "),Se=n("a"),fr=f("OnnxSeq2SeqConfigWithPast"),ct=i(),N=n("h3"),I=n("a"),Le=n("span"),c(re.$$.fragment),mr=i(),Xe=n("span"),pr=f("OnnxConfig"),ht=i(),x=n("div"),c(ne.$$.fragment),dr=i(),Ve=n("p"),cr=f("Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),hr=i(),L=n("div"),c(oe.$$.fragment),gr=i(),ze=n("p"),ur=f(`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),_r=i(),X=n("div"),c(ae.$$.fragment),vr=i(),He=n("p"),xr=f("Instantiate a OnnxConfig for a specific model"),$r=i(),V=n("div"),c(se.$$.fragment),br=i(),Be=n("p"),yr=f("Generate inputs to provide to the ONNX exporter for the specific framework"),wr=i(),z=n("div"),c(ie.$$.fragment),Or=i(),Ue=n("p"),Er=f("Flag indicating if the model requires using external data format"),gt=i(),T=n("h3"),H=n("a"),je=n("span"),c(le.$$.fragment),Cr=i(),Ge=n("span"),Pr=f("OnnxConfigWithPast"),ut=i(),w=n("div"),c(fe.$$.fragment),kr=i(),B=n("div"),c(me.$$.fragment),Nr=i(),Re=n("p"),Tr=f("Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),Sr=i(),U=n("div"),c(pe.$$.fragment),qr=i(),de=n("p"),Fr=f("Instantiate a OnnxConfig with "),Je=n("code"),Ar=f("use_past"),Dr=f(" attribute set to True"),_t=i(),S=n("h3"),j=n("a"),Ke=n("span"),c(ce.$$.fragment),Mr=i(),Qe=n("span"),Wr=f("OnnxSeq2SeqConfigWithPast"),vt=i(),he=n("div"),c(ge.$$.fragment),xt=i(),q=n("h2"),G=n("a"),Ye=n("span"),c(ue.$$.fragment),Ir=i(),Ze=n("span"),Lr=f("ONNX Features"),$t=i(),R=n("p"),Xr=f("Each ONNX configuration is associated with a set of "),et=n("em"),Vr=f("features"),zr=f(` that enable you
to export models for different types of topologies or tasks.`),bt=i(),F=n("h3"),J=n("a"),tt=n("span"),c(_e.$$.fragment),Hr=i(),rt=n("span"),Br=f("FeaturesManager"),yt=i(),$=n("div"),c(ve.$$.fragment),Ur=i(),K=n("div"),c(xe.$$.fragment),jr=i(),nt=n("p"),Gr=f("Check whether or not the model has the requested features."),Rr=i(),Q=n("div"),c($e.$$.fragment),Jr=i(),ot=n("p"),Kr=f("Attempts to retrieve an AutoModel class from a feature name."),Qr=i(),Y=n("div"),c(be.$$.fragment),Yr=i(),at=n("p"),Zr=f("Attempts to retrieve a model from a model\u2019s name and the feature to be enabled."),en=i(),Z=n("div"),c(ye.$$.fragment),tn=i(),st=n("p"),rn=f("Tries to retrieve the feature -> OnnxConfig constructor map from the model type."),this.h()},l(e){const p=Qn('[data-svelte="svelte-1phssyn"]',document.head);C=o(p,"META",{name:!0,content:!0}),p.forEach(r),it=l(e),P=o(e,"H1",{class:!0});var Ot=a(P);A=o(Ot,"A",{id:!0,class:!0,href:!0});var ln=a(A);Ae=o(ln,"SPAN",{});var fn=a(Ae);h(ee.$$.fragment,fn),fn.forEach(r),ln.forEach(r),Ut=l(Ot),De=o(Ot,"SPAN",{});var mn=a(De);jt=m(mn,"Exporting \u{1F917} Transformers models to ONNX"),mn.forEach(r),Ot.forEach(r),lt=l(e),D=o(e,"P",{});var Et=a(D);Gt=m(Et,"\u{1F917} Transformers provides a "),Me=o(Et,"CODE",{});var pn=a(Me);Rt=m(pn,"transformers.onnx"),pn.forEach(r),Jt=m(Et,` package that enables you to
convert model checkpoints to an ONNX graph by leveraging configuration objects.`),Et.forEach(r),ft=l(e),M=o(e,"P",{});var Ct=a(M);Kt=m(Ct,"See the "),Oe=o(Ct,"A",{href:!0});var dn=a(Oe);Qt=m(dn,"guide"),dn.forEach(r),Yt=m(Ct,` on exporting \u{1F917} Transformers models for more
details.`),Ct.forEach(r),mt=l(e),k=o(e,"H2",{class:!0});var Pt=a(k);W=o(Pt,"A",{id:!0,class:!0,href:!0});var cn=a(W);We=o(cn,"SPAN",{});var hn=a(We);h(te.$$.fragment,hn),hn.forEach(r),cn.forEach(r),Zt=l(Pt),Ie=o(Pt,"SPAN",{});var gn=a(Ie);er=m(gn,"ONNX Configurations"),gn.forEach(r),Pt.forEach(r),pt=l(e),Ee=o(e,"P",{});var un=a(Ee);tr=m(un,`We provide three abstract classes that you should inherit from, depending on the
type of model architecture you wish to export:`),un.forEach(r),dt=l(e),O=o(e,"UL",{});var qe=a(O);Ce=o(qe,"LI",{});var nn=a(Ce);rr=m(nn,"Encoder-based models inherit from "),Pe=o(nn,"A",{href:!0});var _n=a(Pe);nr=m(_n,"OnnxConfig"),_n.forEach(r),nn.forEach(r),or=l(qe),ke=o(qe,"LI",{});var on=a(ke);ar=m(on,"Decoder-based models inherit from "),Ne=o(on,"A",{href:!0});var vn=a(Ne);sr=m(vn,"OnnxConfigWithPast"),vn.forEach(r),on.forEach(r),ir=l(qe),Te=o(qe,"LI",{});var an=a(Te);lr=m(an,"Encoder-decoder models inherit from "),Se=o(an,"A",{href:!0});var xn=a(Se);fr=m(xn,"OnnxSeq2SeqConfigWithPast"),xn.forEach(r),an.forEach(r),qe.forEach(r),ct=l(e),N=o(e,"H3",{class:!0});var kt=a(N);I=o(kt,"A",{id:!0,class:!0,href:!0});var $n=a(I);Le=o($n,"SPAN",{});var bn=a(Le);h(re.$$.fragment,bn),bn.forEach(r),$n.forEach(r),mr=l(kt),Xe=o(kt,"SPAN",{});var yn=a(Xe);pr=m(yn,"OnnxConfig"),yn.forEach(r),kt.forEach(r),ht=l(e),x=o(e,"DIV",{class:!0});var y=a(x);h(ne.$$.fragment,y),dr=l(y),Ve=o(y,"P",{});var wn=a(Ve);cr=m(wn,"Base class for ONNX exportable model describing metadata on how to export the model through the ONNX format."),wn.forEach(r),hr=l(y),L=o(y,"DIV",{class:!0});var Nt=a(L);h(oe.$$.fragment,Nt),gr=l(Nt),ze=o(Nt,"P",{});var On=a(ze);ur=m(On,`Flatten any potential nested structure expanding the name of the field with the index of the element within the
structure.`),On.forEach(r),Nt.forEach(r),_r=l(y),X=o(y,"DIV",{class:!0});var Tt=a(X);h(ae.$$.fragment,Tt),vr=l(Tt),He=o(Tt,"P",{});var En=a(He);xr=m(En,"Instantiate a OnnxConfig for a specific model"),En.forEach(r),Tt.forEach(r),$r=l(y),V=o(y,"DIV",{class:!0});var St=a(V);h(se.$$.fragment,St),br=l(St),Be=o(St,"P",{});var Cn=a(Be);yr=m(Cn,"Generate inputs to provide to the ONNX exporter for the specific framework"),Cn.forEach(r),St.forEach(r),wr=l(y),z=o(y,"DIV",{class:!0});var qt=a(z);h(ie.$$.fragment,qt),Or=l(qt),Ue=o(qt,"P",{});var Pn=a(Ue);Er=m(Pn,"Flag indicating if the model requires using external data format"),Pn.forEach(r),qt.forEach(r),y.forEach(r),gt=l(e),T=o(e,"H3",{class:!0});var Ft=a(T);H=o(Ft,"A",{id:!0,class:!0,href:!0});var kn=a(H);je=o(kn,"SPAN",{});var Nn=a(je);h(le.$$.fragment,Nn),Nn.forEach(r),kn.forEach(r),Cr=l(Ft),Ge=o(Ft,"SPAN",{});var Tn=a(Ge);Pr=m(Tn,"OnnxConfigWithPast"),Tn.forEach(r),Ft.forEach(r),ut=l(e),w=o(e,"DIV",{class:!0});var Fe=a(w);h(fe.$$.fragment,Fe),kr=l(Fe),B=o(Fe,"DIV",{class:!0});var At=a(B);h(me.$$.fragment,At),Nr=l(At),Re=o(At,"P",{});var Sn=a(Re);Tr=m(Sn,"Fill the input_or_ouputs mapping with past_key_values dynamic axes considering."),Sn.forEach(r),At.forEach(r),Sr=l(Fe),U=o(Fe,"DIV",{class:!0});var Dt=a(U);h(pe.$$.fragment,Dt),qr=l(Dt),de=o(Dt,"P",{});var Mt=a(de);Fr=m(Mt,"Instantiate a OnnxConfig with "),Je=o(Mt,"CODE",{});var qn=a(Je);Ar=m(qn,"use_past"),qn.forEach(r),Dr=m(Mt," attribute set to True"),Mt.forEach(r),Dt.forEach(r),Fe.forEach(r),_t=l(e),S=o(e,"H3",{class:!0});var Wt=a(S);j=o(Wt,"A",{id:!0,class:!0,href:!0});var Fn=a(j);Ke=o(Fn,"SPAN",{});var An=a(Ke);h(ce.$$.fragment,An),An.forEach(r),Fn.forEach(r),Mr=l(Wt),Qe=o(Wt,"SPAN",{});var Dn=a(Qe);Wr=m(Dn,"OnnxSeq2SeqConfigWithPast"),Dn.forEach(r),Wt.forEach(r),vt=l(e),he=o(e,"DIV",{class:!0});var Mn=a(he);h(ge.$$.fragment,Mn),Mn.forEach(r),xt=l(e),q=o(e,"H2",{class:!0});var It=a(q);G=o(It,"A",{id:!0,class:!0,href:!0});var Wn=a(G);Ye=o(Wn,"SPAN",{});var In=a(Ye);h(ue.$$.fragment,In),In.forEach(r),Wn.forEach(r),Ir=l(It),Ze=o(It,"SPAN",{});var Ln=a(Ze);Lr=m(Ln,"ONNX Features"),Ln.forEach(r),It.forEach(r),$t=l(e),R=o(e,"P",{});var Lt=a(R);Xr=m(Lt,"Each ONNX configuration is associated with a set of "),et=o(Lt,"EM",{});var Xn=a(et);Vr=m(Xn,"features"),Xn.forEach(r),zr=m(Lt,` that enable you
to export models for different types of topologies or tasks.`),Lt.forEach(r),bt=l(e),F=o(e,"H3",{class:!0});var Xt=a(F);J=o(Xt,"A",{id:!0,class:!0,href:!0});var Vn=a(J);tt=o(Vn,"SPAN",{});var zn=a(tt);h(_e.$$.fragment,zn),zn.forEach(r),Vn.forEach(r),Hr=l(Xt),rt=o(Xt,"SPAN",{});var Hn=a(rt);Br=m(Hn,"FeaturesManager"),Hn.forEach(r),Xt.forEach(r),yt=l(e),$=o(e,"DIV",{class:!0});var E=a($);h(ve.$$.fragment,E),Ur=l(E),K=o(E,"DIV",{class:!0});var Vt=a(K);h(xe.$$.fragment,Vt),jr=l(Vt),nt=o(Vt,"P",{});var Bn=a(nt);Gr=m(Bn,"Check whether or not the model has the requested features."),Bn.forEach(r),Vt.forEach(r),Rr=l(E),Q=o(E,"DIV",{class:!0});var zt=a(Q);h($e.$$.fragment,zt),Jr=l(zt),ot=o(zt,"P",{});var Un=a(ot);Kr=m(Un,"Attempts to retrieve an AutoModel class from a feature name."),Un.forEach(r),zt.forEach(r),Qr=l(E),Y=o(E,"DIV",{class:!0});var Ht=a(Y);h(be.$$.fragment,Ht),Yr=l(Ht),at=o(Ht,"P",{});var jn=a(at);Zr=m(jn,"Attempts to retrieve a model from a model\u2019s name and the feature to be enabled."),jn.forEach(r),Ht.forEach(r),en=l(E),Z=o(E,"DIV",{class:!0});var Bt=a(Z);h(ye.$$.fragment,Bt),tn=l(Bt),st=o(Bt,"P",{});var Gn=a(st);rn=m(Gn,"Tries to retrieve the feature -> OnnxConfig constructor map from the model type."),Gn.forEach(r),Bt.forEach(r),E.forEach(r),this.h()},h(){s(C,"name","hf:doc:metadata"),s(C,"content",JSON.stringify(to)),s(A,"id","exporting-transformers-models-to-onnx"),s(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(A,"href","#exporting-transformers-models-to-onnx"),s(P,"class","relative group"),s(Oe,"href","../serialization"),s(W,"id","onnx-configurations"),s(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(W,"href","#onnx-configurations"),s(k,"class","relative group"),s(Pe,"href","/docs/transformers/pr_17063/en/main_classes/onnx#transformers.onnx.OnnxConfig"),s(Ne,"href","/docs/transformers/pr_17063/en/main_classes/onnx#transformers.onnx.OnnxConfigWithPast"),s(Se,"href","/docs/transformers/pr_17063/en/main_classes/onnx#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(I,"id","transformers.onnx.OnnxConfig"),s(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(I,"href","#transformers.onnx.OnnxConfig"),s(N,"class","relative group"),s(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(H,"id","transformers.onnx.OnnxConfigWithPast"),s(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(H,"href","#transformers.onnx.OnnxConfigWithPast"),s(T,"class","relative group"),s(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(j,"id","transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(j,"href","#transformers.onnx.OnnxSeq2SeqConfigWithPast"),s(S,"class","relative group"),s(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(G,"id","onnx-features"),s(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(G,"href","#onnx-features"),s(q,"class","relative group"),s(J,"id","transformers.onnx.FeaturesManager"),s(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),s(J,"href","#transformers.onnx.FeaturesManager"),s(F,"class","relative group"),s(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),s($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,p){t(document.head,C),d(e,it,p),d(e,P,p),t(P,A),t(A,Ae),g(ee,Ae,null),t(P,Ut),t(P,De),t(De,jt),d(e,lt,p),d(e,D,p),t(D,Gt),t(D,Me),t(Me,Rt),t(D,Jt),d(e,ft,p),d(e,M,p),t(M,Kt),t(M,Oe),t(Oe,Qt),t(M,Yt),d(e,mt,p),d(e,k,p),t(k,W),t(W,We),g(te,We,null),t(k,Zt),t(k,Ie),t(Ie,er),d(e,pt,p),d(e,Ee,p),t(Ee,tr),d(e,dt,p),d(e,O,p),t(O,Ce),t(Ce,rr),t(Ce,Pe),t(Pe,nr),t(O,or),t(O,ke),t(ke,ar),t(ke,Ne),t(Ne,sr),t(O,ir),t(O,Te),t(Te,lr),t(Te,Se),t(Se,fr),d(e,ct,p),d(e,N,p),t(N,I),t(I,Le),g(re,Le,null),t(N,mr),t(N,Xe),t(Xe,pr),d(e,ht,p),d(e,x,p),g(ne,x,null),t(x,dr),t(x,Ve),t(Ve,cr),t(x,hr),t(x,L),g(oe,L,null),t(L,gr),t(L,ze),t(ze,ur),t(x,_r),t(x,X),g(ae,X,null),t(X,vr),t(X,He),t(He,xr),t(x,$r),t(x,V),g(se,V,null),t(V,br),t(V,Be),t(Be,yr),t(x,wr),t(x,z),g(ie,z,null),t(z,Or),t(z,Ue),t(Ue,Er),d(e,gt,p),d(e,T,p),t(T,H),t(H,je),g(le,je,null),t(T,Cr),t(T,Ge),t(Ge,Pr),d(e,ut,p),d(e,w,p),g(fe,w,null),t(w,kr),t(w,B),g(me,B,null),t(B,Nr),t(B,Re),t(Re,Tr),t(w,Sr),t(w,U),g(pe,U,null),t(U,qr),t(U,de),t(de,Fr),t(de,Je),t(Je,Ar),t(de,Dr),d(e,_t,p),d(e,S,p),t(S,j),t(j,Ke),g(ce,Ke,null),t(S,Mr),t(S,Qe),t(Qe,Wr),d(e,vt,p),d(e,he,p),g(ge,he,null),d(e,xt,p),d(e,q,p),t(q,G),t(G,Ye),g(ue,Ye,null),t(q,Ir),t(q,Ze),t(Ze,Lr),d(e,$t,p),d(e,R,p),t(R,Xr),t(R,et),t(et,Vr),t(R,zr),d(e,bt,p),d(e,F,p),t(F,J),t(J,tt),g(_e,tt,null),t(F,Hr),t(F,rt),t(rt,Br),d(e,yt,p),d(e,$,p),g(ve,$,null),t($,Ur),t($,K),g(xe,K,null),t(K,jr),t(K,nt),t(nt,Gr),t($,Rr),t($,Q),g($e,Q,null),t(Q,Jr),t(Q,ot),t(ot,Kr),t($,Qr),t($,Y),g(be,Y,null),t(Y,Yr),t(Y,at),t(at,Zr),t($,en),t($,Z),g(ye,Z,null),t(Z,tn),t(Z,st),t(st,rn),wt=!0},p:Yn,i(e){wt||(u(ee.$$.fragment,e),u(te.$$.fragment,e),u(re.$$.fragment,e),u(ne.$$.fragment,e),u(oe.$$.fragment,e),u(ae.$$.fragment,e),u(se.$$.fragment,e),u(ie.$$.fragment,e),u(le.$$.fragment,e),u(fe.$$.fragment,e),u(me.$$.fragment,e),u(pe.$$.fragment,e),u(ce.$$.fragment,e),u(ge.$$.fragment,e),u(ue.$$.fragment,e),u(_e.$$.fragment,e),u(ve.$$.fragment,e),u(xe.$$.fragment,e),u($e.$$.fragment,e),u(be.$$.fragment,e),u(ye.$$.fragment,e),wt=!0)},o(e){_(ee.$$.fragment,e),_(te.$$.fragment,e),_(re.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_(ae.$$.fragment,e),_(se.$$.fragment,e),_(ie.$$.fragment,e),_(le.$$.fragment,e),_(fe.$$.fragment,e),_(me.$$.fragment,e),_(pe.$$.fragment,e),_(ce.$$.fragment,e),_(ge.$$.fragment,e),_(ue.$$.fragment,e),_(_e.$$.fragment,e),_(ve.$$.fragment,e),_(xe.$$.fragment,e),_($e.$$.fragment,e),_(be.$$.fragment,e),_(ye.$$.fragment,e),wt=!1},d(e){r(C),e&&r(it),e&&r(P),v(ee),e&&r(lt),e&&r(D),e&&r(ft),e&&r(M),e&&r(mt),e&&r(k),v(te),e&&r(pt),e&&r(Ee),e&&r(dt),e&&r(O),e&&r(ct),e&&r(N),v(re),e&&r(ht),e&&r(x),v(ne),v(oe),v(ae),v(se),v(ie),e&&r(gt),e&&r(T),v(le),e&&r(ut),e&&r(w),v(fe),v(me),v(pe),e&&r(_t),e&&r(S),v(ce),e&&r(vt),e&&r(he),v(ge),e&&r(xt),e&&r(q),v(ue),e&&r($t),e&&r(R),e&&r(bt),e&&r(F),v(_e),e&&r(yt),e&&r($),v(ve),v(xe),v($e),v(be),v(ye)}}}const to={local:"exporting-transformers-models-to-onnx",sections:[{local:"onnx-configurations",sections:[{local:"transformers.onnx.OnnxConfig",title:"OnnxConfig"},{local:"transformers.onnx.OnnxConfigWithPast",title:"OnnxConfigWithPast"},{local:"transformers.onnx.OnnxSeq2SeqConfigWithPast",title:"OnnxSeq2SeqConfigWithPast"}],title:"ONNX Configurations"},{local:"onnx-features",sections:[{local:"transformers.onnx.FeaturesManager",title:"FeaturesManager"}],title:"ONNX Features"}],title:"Exporting \u{1F917} Transformers models to ONNX"};function ro(sn){return Zn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class so extends Rn{constructor(C){super();Jn(this,C,ro,eo,Kn,{})}}export{so as default,to as metadata};
