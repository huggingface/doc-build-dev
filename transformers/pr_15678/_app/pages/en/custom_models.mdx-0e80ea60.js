import{S as Ri,i as qi,s as Ii,e as l,k as c,w as p,t as o,L as Ni,c as r,d as s,m as d,a as i,x as _,h as n,b as h,J as t,g as f,y as g,q as y,o as w,B as b}from"../../chunks/vendor-9e2b328e.js";import{T as Zl}from"../../chunks/Tip-76f97a76.js";import{I as qt}from"../../chunks/IconCopyLink-fd0e58fd.js";import{C as E}from"../../chunks/CodeBlock-b9ff96e9.js";import"../../chunks/CopyButton-4b97cbf7.js";function xi(Y){let m,k;return{c(){m=l("p"),k=o("If your model is very similar to a model inside the library, you can re-use the same configuration as this model.")},l(u){m=r(u,"P",{});var v=i(m);k=n(v,"If your model is very similar to a model inside the library, you can re-use the same configuration as this model."),v.forEach(s)},m(u,v){f(u,m,v),t(m,k)},d(u){u&&s(m)}}}function Oi(Y){let m,k;return{c(){m=l("p"),k=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(u){m=r(u,"P",{});var v=i(m);k=n(v,"This API is experimental and may have some slight breaking changes in the next releases."),v.forEach(s)},m(u,v){f(u,m,v),t(m,k)},d(u){u&&s(m)}}}function Di(Y){let m,k,u,v,z;return{c(){m=l("p"),k=o(`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),u=l("code"),v=o("transformers"),z=o(" package.")},l(P){m=r(P,"P",{});var q=i(m);k=n(q,`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),u=r(q,"CODE",{});var Z=i(u);v=n(Z,"transformers"),Z.forEach(s),z=n(q," package."),q.forEach(s)},m(P,q){f(P,m,q),t(m,k),t(m,u),t(u,v),t(m,z)},d(P){P&&s(m)}}}function Fi(Y){let m,k,u,v,z,P,q,Z,en,Ts,ze,tn,Ms,Ge,sn,Rs,I,on,we,nn,an,Ke,ln,rn,qs,G,ee,It,be,fn,Nt,cn,Is,te,dn,xt,hn,mn,Ns,Ue,un,xs,ve,Os,Ve,pn,Ds,N,$e,_n,Ot,gn,yn,wn,K,bn,Dt,vn,$n,Ft,kn,En,jn,U,Cn,Bt,Pn,An,Ht,Tn,Mn,Fs,x,Rn,St,qn,In,Wt,Nn,xn,Bs,O,On,Lt,Dn,Fn,Yt,Bn,Hn,Hs,Je,Sn,Ss,ke,Ws,A,Wn,zt,Ln,Yn,Gt,zn,Gn,Kt,Kn,Un,Ls,Ee,Ys,D,Vn,Qe,Jn,Qn,Xe,Xn,Zn,zs,V,se,Ut,je,ea,Vt,ta,Gs,F,sa,Ze,oa,na,Jt,aa,la,Ks,oe,ra,Qt,ia,fa,Us,Ce,Vs,et,ca,Js,Pe,Qs,C,da,Xt,ha,ma,Zt,ua,pa,es,_a,ga,ts,ya,wa,Xs,ne,Zs,B,ba,ss,va,$a,tt,ka,Ea,eo,st,ja,to,Ae,so,T,Ca,ot,Pa,Aa,nt,Ta,Ma,at,Ra,qa,oo,lt,Ia,no,Te,ao,H,Na,rt,xa,Oa,it,Da,Fa,lo,J,ae,os,Me,Ba,ns,Ha,ro,le,io,$,Sa,as,Wa,La,ls,Ya,za,rs,Ga,Ka,is,Ua,Va,fs,Ja,Qa,cs,Xa,Za,ds,el,tl,fo,Re,co,S,sl,hs,ol,nl,ms,al,ll,ho,re,mo,ft,rl,uo,ct,il,po,qe,_o,ie,fl,us,cl,dl,go,Ie,yo,fe,hl,dt,ml,ul,wo,ht,pl,bo,Ne,vo,mt,_l,$o,xe,ko,ut,gl,Eo,Oe,jo,pt,yl,Co,De,Po,M,wl,ps,bl,vl,_s,$l,kl,Fe,El,jl,Ao,ce,Cl,_t,Pl,Al,To,Q,de,gs,Be,Tl,ys,Ml,Mo,he,Rl,ws,ql,Il,Ro,He,qo,me,Nl,bs,xl,Ol,Io,Se,No,gt,Dl,xo,X,ue,vs,We,Fl,$s,Bl,Oo,yt,Hl,Do,W,Sl,ks,Wl,Ll,Es,Yl,zl,Fo,Le,Bo,R,Gl,wt,Kl,Ul,js,Vl,Jl,Cs,Ql,Xl,Ho;return P=new qt({}),be=new qt({}),ve=new E({props:{code:`from transformers import PretrainedConfig
from typing import List


class ResnetConfig(PretrainedConfig):
    model_type = "resnet"

    def __init__(
        self,
        block_type="bottleneck",
        layers: List[int] = [3, 4, 6, 3],
        num_classes: int = 1000,
        input_channels: int = 3,
        cardinality: int = 1,
        base_width: int = 64,
        stem_width: int = 64,
        stem_type: str = "",
        avg_down: bool = False,
        **kwargs,
    ):
        if block_type not in ["basic", "bottleneck"]:
            raise ValueError(f"\`block\` must be 'basic' or bottleneck', got {block}.")
        if stem_type not in ["", "deep", "deep-tiered"]:
            raise ValueError(f"\`stem_type\` must be '', 'deep' or 'deep-tiered', got {block}.")

        self.block_type = block_type
        self.layers = layers
        self.num_classes = num_classes
        self.input_channels = input_channels
        self.cardinality = cardinality
        self.base_width = base_width
        self.stem_width = stem_width
        self.stem_type = stem_type
        self.avg_down = avg_down
        super().__init__(**kwargs),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PretrainedConfig
<span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">List</span>


<span class="hljs-keyword">class</span> <span class="hljs-title class_">ResnetConfig</span>(<span class="hljs-title class_ inherited__">PretrainedConfig</span>):
    model_type = <span class="hljs-string">&quot;resnet&quot;</span>

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">
        self,
        block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>,
        layers: <span class="hljs-type">List</span>[<span class="hljs-built_in">int</span>] = [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>, <span class="hljs-number">3</span>],
        num_classes: <span class="hljs-built_in">int</span> = <span class="hljs-number">1000</span>,
        input_channels: <span class="hljs-built_in">int</span> = <span class="hljs-number">3</span>,
        cardinality: <span class="hljs-built_in">int</span> = <span class="hljs-number">1</span>,
        base_width: <span class="hljs-built_in">int</span> = <span class="hljs-number">64</span>,
        stem_width: <span class="hljs-built_in">int</span> = <span class="hljs-number">64</span>,
        stem_type: <span class="hljs-built_in">str</span> = <span class="hljs-string">&quot;&quot;</span>,
        avg_down: <span class="hljs-built_in">bool</span> = <span class="hljs-literal">False</span>,
        **kwargs,
    </span>):
        <span class="hljs-keyword">if</span> block_type <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> [<span class="hljs-string">&quot;basic&quot;</span>, <span class="hljs-string">&quot;bottleneck&quot;</span>]:
            <span class="hljs-keyword">raise</span> ValueError(<span class="hljs-string">f&quot;\`block\` must be &#x27;basic&#x27; or bottleneck&#x27;, got <span class="hljs-subst">{block}</span>.&quot;</span>)
        <span class="hljs-keyword">if</span> stem_type <span class="hljs-keyword">not</span> <span class="hljs-keyword">in</span> [<span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;deep&quot;</span>, <span class="hljs-string">&quot;deep-tiered&quot;</span>]:
            <span class="hljs-keyword">raise</span> ValueError(<span class="hljs-string">f&quot;\`stem_type\` must be &#x27;&#x27;, &#x27;deep&#x27; or &#x27;deep-tiered&#x27;, got <span class="hljs-subst">{block}</span>.&quot;</span>)

        self.block_type = block_type
        self.layers = layers
        self.num_classes = num_classes
        self.input_channels = input_channels
        self.cardinality = cardinality
        self.base_width = base_width
        self.stem_width = stem_width
        self.stem_type = stem_type
        self.avg_down = avg_down
        <span class="hljs-built_in">super</span>().__init__(**kwargs)`}}),ke=new E({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d_config.save_pretrained("custom-resnet"),`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d_config.save_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)`}}),Ee=new E({props:{code:'resnet50d_config = ResnetConfig.from_pretrained("custom-resnet"),',highlighted:'resnet50d_config = ResnetConfig.from_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)'}}),je=new qt({}),Ce=new E({props:{code:`from transformers import PreTrainedModel
from timm.models.resnet import BasicBlock, Bottleneck, ResNet
from .configuration_resnet import ResnetConfig


BLOCK_MAPPING = {"basic": BasicBlock, "bottleneck": Bottleneck}


class ResnetModel(PreTrainedModel):
    config_class = ResnetConfig

    def __init__(self, config):
        super().__init__(config)
        block_layer = BLOCK_MAPPING[config.block_type]
        self.model = ResNet(
            block_layer,
            config.layers,
            num_classes=config.num_classes,
            in_chans=config.input_channels,
            cardinality=config.cardinality,
            base_width=config.base_width,
            stem_width=config.stem_width,
            stem_type=config.stem_type,
            avg_down=config.avg_down,
        )

    def forward(self, tensor):
        return self.model.forward_features(tensor),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PreTrainedModel
<span class="hljs-keyword">from</span> timm.models.resnet <span class="hljs-keyword">import</span> BasicBlock, Bottleneck, ResNet
<span class="hljs-keyword">from</span> .configuration_resnet <span class="hljs-keyword">import</span> ResnetConfig


BLOCK_MAPPING = {<span class="hljs-string">&quot;basic&quot;</span>: BasicBlock, <span class="hljs-string">&quot;bottleneck&quot;</span>: Bottleneck}


<span class="hljs-keyword">class</span> <span class="hljs-title class_">ResnetModel</span>(<span class="hljs-title class_ inherited__">PreTrainedModel</span>):
    config_class = ResnetConfig

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, config</span>):
        <span class="hljs-built_in">super</span>().__init__(config)
        block_layer = BLOCK_MAPPING[config.block_type]
        self.model = ResNet(
            block_layer,
            config.layers,
            num_classes=config.num_classes,
            in_chans=config.input_channels,
            cardinality=config.cardinality,
            base_width=config.base_width,
            stem_width=config.stem_width,
            stem_type=config.stem_type,
            avg_down=config.avg_down,
        )

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, tensor</span>):
        <span class="hljs-keyword">return</span> self.model.forward_features(tensor)`}}),Pe=new E({props:{code:`class ResnetModelForImageClassification(PreTrainedModel):
    config_class = ResnetConfig

    def __init__(self, config):
        super().__init__(config)
        block_layer = BLOCK_MAPPING[config.block_type]
        self.model = ResNet(
            block_layer,
            config.layers,
            num_classes=config.num_classes,
            in_chans=config.input_channels,
            cardinality=config.cardinality,
            base_width=config.base_width,
            stem_width=config.stem_width,
            stem_type=config.stem_type,
            avg_down=config.avg_down,
        )

    def forward(self, tensor, labels=None):
        logits = self.model(tensor)
        if labels is not None:
            loss = torch.nn.cross_entropy(logits, labels)
            return {"loss": loss, "logits": logits}
        return {"logits": logits},`,highlighted:`<span class="hljs-keyword">class</span> <span class="hljs-title class_">ResnetModelForImageClassification</span>(<span class="hljs-title class_ inherited__">PreTrainedModel</span>):
    config_class = ResnetConfig

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, config</span>):
        <span class="hljs-built_in">super</span>().__init__(config)
        block_layer = BLOCK_MAPPING[config.block_type]
        self.model = ResNet(
            block_layer,
            config.layers,
            num_classes=config.num_classes,
            in_chans=config.input_channels,
            cardinality=config.cardinality,
            base_width=config.base_width,
            stem_width=config.stem_width,
            stem_type=config.stem_type,
            avg_down=config.avg_down,
        )

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">forward</span>(<span class="hljs-params">self, tensor, labels=<span class="hljs-literal">None</span></span>):
        logits = self.model(tensor)
        <span class="hljs-keyword">if</span> labels <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span>:
            loss = torch.nn.cross_entropy(logits, labels)
            <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;loss&quot;</span>: loss, <span class="hljs-string">&quot;logits&quot;</span>: logits}
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),ne=new Zl({props:{$$slots:{default:[xi]},$$scope:{ctx:Y}}}),Ae=new E({props:{code:"resnet50d = ResnetModelForImageClassification(resnet50d_config),",highlighted:"resnet50d = ResnetModelForImageClassification(resnet50d_config)"}}),Te=new E({props:{code:`import timm

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict()),`,highlighted:`<span class="hljs-keyword">import</span> timm

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Me=new qt({}),le=new Zl({props:{warning:"&lcub;true}",$$slots:{default:[Oi]},$$scope:{ctx:Y}}}),Re=new E({props:{code:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.py
    \u251C\u2500\u2500 configuration_resnet.py
    \u2514\u2500\u2500 modeling_resnet.py,`,highlighted:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.<span class="hljs-keyword">py</span>
    \u251C\u2500\u2500 configuration_resnet.<span class="hljs-keyword">py</span>
    \u2514\u2500\u2500 modeling_resnet.<span class="hljs-keyword">py</span>`}}),re=new Zl({props:{warning:"&lcub;true}",$$slots:{default:[Di]},$$scope:{ctx:Y}}}),qe=new E({props:{code:`from resnet_model.configuration_resnet import ResnetConfig
from resnet_model.modeling_resnet import ResnetModel, ResnetModelForImageClassification,`,highlighted:`<span class="hljs-keyword">from</span> resnet_model.configuration_resnet <span class="hljs-keyword">import</span> ResnetConfig
<span class="hljs-keyword">from</span> resnet_model.modeling_resnet <span class="hljs-keyword">import</span> ResnetModel, ResnetModelForImageClassification`}}),Ie=new E({props:{code:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class("AutoModel")
ResnetModelForImageClassification.register_for_auto_class("AutoModelForImageClassification"),`,highlighted:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class(<span class="hljs-string">&quot;AutoModel&quot;</span>)
ResnetModelForImageClassification.register_for_auto_class(<span class="hljs-string">&quot;AutoModelForImageClassification&quot;</span>)`}}),Ne=new E({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict()),`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),xe=new E({props:{code:"huggingface-cli login,",highlighted:"huggingface-cli login"}}),Oe=new E({props:{code:`from huggingface_hub import notebook_login

notebook_login(),`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),De=new E({props:{code:'resnet50d.push_to_hub("custom-resnet50d"),',highlighted:'resnet50d.push_to_hub(<span class="hljs-string">&quot;custom-resnet50d&quot;</span>)'}}),Be=new qt({}),He=new E({props:{code:`from transformers import AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained("sgugger/custom-resnet50d", trust_remote_code=True),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),Se=new E({props:{code:`commit_hash = "ed94a7c6247d8aedce4647f00f20de6875b5b292"
model = AutoModelForImageClassification.from_pretrained(
    "sgugger/custom-resnet50d", trust_remote_code=True, revision=commit_hash
),`,highlighted:`commit_hash = <span class="hljs-string">&quot;ed94a7c6247d8aedce4647f00f20de6875b5b292&quot;</span>
model = AutoModelForImageClassification.from_pretrained(
    <span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>, revision=commit_hash
)`}}),We=new qt({}),Le=new E({props:{code:`from transformers import AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register("resnet", ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register(<span class="hljs-string">&quot;resnet&quot;</span>, ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`}}),{c(){m=l("meta"),k=c(),u=l("h1"),v=l("a"),z=l("span"),p(P.$$.fragment),q=c(),Z=l("span"),en=o("Sharing custom models"),Ts=c(),ze=l("p"),tn=o(`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),Ms=c(),Ge=l("p"),sn=o(`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),Rs=c(),I=l("p"),on=o(`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),we=l("a"),nn=o("timm library"),an=o(" into a "),Ke=l("a"),ln=o("PreTrainedModel"),rn=o("."),qs=c(),G=l("h2"),ee=l("a"),It=l("span"),p(be.$$.fragment),fn=c(),Nt=l("span"),cn=o("Writing a custom configuration"),Is=c(),te=l("p"),dn=o(`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),xt=l("code"),hn=o("config"),mn=o(" to be initialized, so we really need that object to be as complete as possible."),Ns=c(),Ue=l("p"),un=o(`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),xs=c(),p(ve.$$.fragment),Os=c(),Ve=l("p"),pn=o("The three important things to remember when writing you own configuration are the following:"),Ds=c(),N=l("ul"),$e=l("li"),_n=o("you have to inherit from "),Ot=l("code"),gn=o("PretrainedConfig"),yn=o(","),wn=c(),K=l("li"),bn=o("the "),Dt=l("code"),vn=o("__init__"),$n=o(" of your "),Ft=l("code"),kn=o("PretrainedConfig"),En=o(" must accept any kwargs,"),jn=c(),U=l("li"),Cn=o("those "),Bt=l("code"),Pn=o("kwargs"),An=o(" need to be passed to the superclass "),Ht=l("code"),Tn=o("__init__"),Mn=o("."),Fs=c(),x=l("p"),Rn=o(`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),St=l("code"),qn=o("PretrainedConfig"),In=o(` has more fields than the ones you are setting. When reloading a
config with the `),Wt=l("code"),Nn=o("from_pretrained"),xn=o(` method, those fields need to be accepted by your config and then sent to the
superclass.`),Bs=c(),O=l("p"),On=o("Defining a "),Lt=l("code"),Dn=o("model_type"),Fn=o(" for your configuration (here "),Yt=l("code"),Bn=o('model_type="resnet"'),Hn=o(`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),Hs=c(),Je=l("p"),Sn=o(`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),Ss=c(),p(ke.$$.fragment),Ws=c(),A=l("p"),Wn=o("This will save a file named "),zt=l("code"),Ln=o("config.json"),Yn=o(" inside the folder "),Gt=l("code"),zn=o("custom-resnet"),Gn=o(`. You can then reload your config with the
`),Kt=l("code"),Kn=o("from_pretrained"),Un=o(" method:"),Ls=c(),p(Ee.$$.fragment),Ys=c(),D=l("p"),Vn=o("You can also use any other method of the "),Qe=l("a"),Jn=o("PretrainedConfig"),Qn=o(" class, like "),Xe=l("a"),Xn=o("push_to_hub()"),Zn=o(` to
directly upload your config to the Hub.`),zs=c(),V=l("h2"),se=l("a"),Ut=l("span"),p(je.$$.fragment),ea=c(),Vt=l("span"),ta=o("Writing a custom model"),Gs=c(),F=l("p"),sa=o(`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),Ze=l("a"),oa=o("BertModel"),na=o(`) and one that is suitable for image
classification (like `),Jt=l("code"),aa=o("BertModelForSequenceClassification"),la=o(")."),Ks=c(),oe=l("p"),ra=o(`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Qt=l("code"),ia=o("ResNet"),fa=o(" class:"),Us=c(),p(Ce.$$.fragment),Vs=c(),et=l("p"),ca=o("For the model that will classify images, we just change the forward method:"),Js=c(),p(Pe.$$.fragment),Qs=c(),C=l("p"),da=o("In both cases, notice how we inherit from "),Xt=l("code"),ha=o("PreTrainedModel"),ma=o(" and call the superclass initialization with the "),Zt=l("code"),ua=o("config"),pa=o(`
(a bit like when you write a regular `),es=l("code"),_a=o("torch.nn.Module"),ga=o("). The line that sets the "),ts=l("code"),ya=o("config_class"),wa=o(` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),Xs=c(),p(ne.$$.fragment),Zs=c(),B=l("p"),ba=o(`You can have your model return anything you want, but returning a dictionary like we did for
`),ss=l("code"),va=o("ResnetModelForImageClassification"),$a=o(`, with the loss included when labels are passed, will make your model directly
usable inside the `),tt=l("a"),ka=o("Trainer"),Ea=o(` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),eo=c(),st=l("p"),ja=o("Now that we have our model class, let\u2019s create one:"),to=c(),p(Ae.$$.fragment),so=c(),T=l("p"),Ca=o("Again, you can use any of the methods of "),ot=l("a"),Pa=o("PreTrainedModel"),Aa=o(", like "),nt=l("a"),Ta=o("save_pretrained()"),Ma=o(` or
`),at=l("a"),Ra=o("push_to_hub()"),qa=o(`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),oo=c(),lt=l("p"),Ia=o(`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),no=c(),p(Te.$$.fragment),ao=c(),H=l("p"),Na=o("Now let\u2019s see how to make sure that when we do "),rt=l("a"),xa=o("save_pretrained()"),Oa=o(" or "),it=l("a"),Da=o("push_to_hub()"),Fa=o(`, the
code of the model is saved.`),lo=c(),J=l("h2"),ae=l("a"),os=l("span"),p(Me.$$.fragment),Ba=c(),ns=l("span"),Ha=o("Sending the code to the Hub"),ro=c(),p(le.$$.fragment),io=c(),$=l("p"),Sa=o("First, make sure your model is fully defined in a "),as=l("code"),Wa=o(".py"),La=o(` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),ls=l("code"),Ya=o("modeling_resnet.py"),za=o(" file and a "),rs=l("code"),Ga=o("configuration_resnet.py"),Ka=o(` file in a folder of the current working
directory named `),is=l("code"),Ua=o("resnet_model"),Va=o(". The configuration file contains the code for "),fs=l("code"),Ja=o("ResnetConfig"),Qa=o(` and the modeling file
contains the code of `),cs=l("code"),Xa=o("ResnetModel"),Za=o(" and "),ds=l("code"),el=o("ResnetModelForImageClassification"),tl=o("."),fo=c(),p(Re.$$.fragment),co=c(),S=l("p"),sl=o("The "),hs=l("code"),ol=o("__init__.py"),nl=o(" can be empty, it\u2019s just there so that Python detects "),ms=l("code"),al=o("resnet_model"),ll=o(" can be use as a module."),ho=c(),p(re.$$.fragment),mo=c(),ft=l("p"),rl=o("Note that you can re-use (or subclass) an existing configuration/model."),uo=c(),ct=l("p"),il=o(`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),po=c(),p(qe.$$.fragment),_o=c(),ie=l("p"),fl=o("Then you have to tell the library you want to copy the code files of those objects when using the "),us=l("code"),cl=o("save_pretrained"),dl=o(`
method and properly register them with a given Auto class (especially for models), just run:`),go=c(),p(Ie.$$.fragment),yo=c(),fe=l("p"),hl=o(`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),dt=l("a"),ml=o("AutoConfig"),ul=o(`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),wo=c(),ht=l("p"),pl=o("Next, let\u2019s create the config and models as we did before:"),bo=c(),p(Ne.$$.fragment),vo=c(),mt=l("p"),_l=o("Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),$o=c(),p(xe.$$.fragment),ko=c(),ut=l("p"),gl=o("or from a notebook:"),Eo=c(),p(Oe.$$.fragment),jo=c(),pt=l("p"),yl=o("You can then push to to your own namespace (or an organization you are a member of) like this:"),Co=c(),p(De.$$.fragment),Po=c(),M=l("p"),wl=o(`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),ps=l("code"),bl=o(".py"),vl=o(" files in the folder "),_s=l("code"),$l=o("custom-resnet50d"),kl=o(` and uploaded the result to the Hub. You can check the result
in this `),Fe=l("a"),El=o("model repo"),jl=o("."),Ao=c(),ce=l("p"),Cl=o("See the "),_t=l("a"),Pl=o("sharing tutorial"),Al=o(" for more information on the push to Hub method."),To=c(),Q=l("h2"),de=l("a"),gs=l("span"),p(Be.$$.fragment),Tl=c(),ys=l("span"),Ml=o("Using a model with custom code"),Mo=c(),he=l("p"),Rl=o(`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),ws=l("code"),ql=o("from_pretrained"),Il=o(` method. The only thing is that you have to add an extra argument to make sure you have read the
online code and trust the author of that model, to avoid executing malicious code on your machine:`),Ro=c(),p(He.$$.fragment),qo=c(),me=l("p"),Nl=o("It is also strongly encouraged to pass a commit hash as a "),bs=l("code"),xl=o("revision"),Ol=o(` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),Io=c(),p(Se.$$.fragment),No=c(),gt=l("p"),Dl=o(`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),xo=c(),X=l("h2"),ue=l("a"),vs=l("span"),p(We.$$.fragment),Fl=c(),$s=l("span"),Bl=o("Registering a model with custom code to the auto classes"),Oo=c(),yt=l("p"),Hl=o(`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),Do=c(),W=l("p"),Sl=o("As long as your config has a "),ks=l("code"),Wl=o("model_type"),Ll=o(` attribute that is different from existing model types, and that your model
classes have the right `),Es=l("code"),Yl=o("config_class"),zl=o(" attributes, you can just add them to the auto classes likes this:"),Fo=c(),p(Le.$$.fragment),Bo=c(),R=l("p"),Gl=o("Note that the first argument used when registering your custom config to "),wt=l("a"),Kl=o("AutoConfig"),Ul=o(" needs to match the "),js=l("code"),Vl=o("model_type"),Jl=o(`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Cs=l("code"),Ql=o("config_class"),Xl=o(" of those models."),this.h()},l(e){const a=Ni('[data-svelte="svelte-1phssyn"]',document.head);m=r(a,"META",{name:!0,content:!0}),a.forEach(s),k=d(e),u=r(e,"H1",{class:!0});var Ye=i(u);v=r(Ye,"A",{id:!0,class:!0,href:!0});var Ps=i(v);z=r(Ps,"SPAN",{});var As=i(z);_(P.$$.fragment,As),As.forEach(s),Ps.forEach(s),q=d(Ye),Z=r(Ye,"SPAN",{});var er=i(Z);en=n(er,"Sharing custom models"),er.forEach(s),Ye.forEach(s),Ts=d(e),ze=r(e,"P",{});var tr=i(ze);tn=n(tr,`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),tr.forEach(s),Ms=d(e),Ge=r(e,"P",{});var sr=i(Ge);sn=n(sr,`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),sr.forEach(s),Rs=d(e),I=r(e,"P",{});var bt=i(I);on=n(bt,`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),we=r(bt,"A",{href:!0,rel:!0});var or=i(we);nn=n(or,"timm library"),or.forEach(s),an=n(bt," into a "),Ke=r(bt,"A",{href:!0});var nr=i(Ke);ln=n(nr,"PreTrainedModel"),nr.forEach(s),rn=n(bt,"."),bt.forEach(s),qs=d(e),G=r(e,"H2",{class:!0});var So=i(G);ee=r(So,"A",{id:!0,class:!0,href:!0});var ar=i(ee);It=r(ar,"SPAN",{});var lr=i(It);_(be.$$.fragment,lr),lr.forEach(s),ar.forEach(s),fn=d(So),Nt=r(So,"SPAN",{});var rr=i(Nt);cn=n(rr,"Writing a custom configuration"),rr.forEach(s),So.forEach(s),Is=d(e),te=r(e,"P",{});var Wo=i(te);dn=n(Wo,`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),xt=r(Wo,"CODE",{});var ir=i(xt);hn=n(ir,"config"),ir.forEach(s),mn=n(Wo," to be initialized, so we really need that object to be as complete as possible."),Wo.forEach(s),Ns=d(e),Ue=r(e,"P",{});var fr=i(Ue);un=n(fr,`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),fr.forEach(s),xs=d(e),_(ve.$$.fragment,e),Os=d(e),Ve=r(e,"P",{});var cr=i(Ve);pn=n(cr,"The three important things to remember when writing you own configuration are the following:"),cr.forEach(s),Ds=d(e),N=r(e,"UL",{});var vt=i(N);$e=r(vt,"LI",{});var Lo=i($e);_n=n(Lo,"you have to inherit from "),Ot=r(Lo,"CODE",{});var dr=i(Ot);gn=n(dr,"PretrainedConfig"),dr.forEach(s),yn=n(Lo,","),Lo.forEach(s),wn=d(vt),K=r(vt,"LI",{});var $t=i(K);bn=n($t,"the "),Dt=r($t,"CODE",{});var hr=i(Dt);vn=n(hr,"__init__"),hr.forEach(s),$n=n($t," of your "),Ft=r($t,"CODE",{});var mr=i(Ft);kn=n(mr,"PretrainedConfig"),mr.forEach(s),En=n($t," must accept any kwargs,"),$t.forEach(s),jn=d(vt),U=r(vt,"LI",{});var kt=i(U);Cn=n(kt,"those "),Bt=r(kt,"CODE",{});var ur=i(Bt);Pn=n(ur,"kwargs"),ur.forEach(s),An=n(kt," need to be passed to the superclass "),Ht=r(kt,"CODE",{});var pr=i(Ht);Tn=n(pr,"__init__"),pr.forEach(s),Mn=n(kt,"."),kt.forEach(s),vt.forEach(s),Fs=d(e),x=r(e,"P",{});var Et=i(x);Rn=n(Et,`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),St=r(Et,"CODE",{});var _r=i(St);qn=n(_r,"PretrainedConfig"),_r.forEach(s),In=n(Et,` has more fields than the ones you are setting. When reloading a
config with the `),Wt=r(Et,"CODE",{});var gr=i(Wt);Nn=n(gr,"from_pretrained"),gr.forEach(s),xn=n(Et,` method, those fields need to be accepted by your config and then sent to the
superclass.`),Et.forEach(s),Bs=d(e),O=r(e,"P",{});var jt=i(O);On=n(jt,"Defining a "),Lt=r(jt,"CODE",{});var yr=i(Lt);Dn=n(yr,"model_type"),yr.forEach(s),Fn=n(jt," for your configuration (here "),Yt=r(jt,"CODE",{});var wr=i(Yt);Bn=n(wr,'model_type="resnet"'),wr.forEach(s),Hn=n(jt,`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),jt.forEach(s),Hs=d(e),Je=r(e,"P",{});var br=i(Je);Sn=n(br,`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),br.forEach(s),Ss=d(e),_(ke.$$.fragment,e),Ws=d(e),A=r(e,"P",{});var pe=i(A);Wn=n(pe,"This will save a file named "),zt=r(pe,"CODE",{});var vr=i(zt);Ln=n(vr,"config.json"),vr.forEach(s),Yn=n(pe," inside the folder "),Gt=r(pe,"CODE",{});var $r=i(Gt);zn=n($r,"custom-resnet"),$r.forEach(s),Gn=n(pe,`. You can then reload your config with the
`),Kt=r(pe,"CODE",{});var kr=i(Kt);Kn=n(kr,"from_pretrained"),kr.forEach(s),Un=n(pe," method:"),pe.forEach(s),Ls=d(e),_(Ee.$$.fragment,e),Ys=d(e),D=r(e,"P",{});var Ct=i(D);Vn=n(Ct,"You can also use any other method of the "),Qe=r(Ct,"A",{href:!0});var Er=i(Qe);Jn=n(Er,"PretrainedConfig"),Er.forEach(s),Qn=n(Ct," class, like "),Xe=r(Ct,"A",{href:!0});var jr=i(Xe);Xn=n(jr,"push_to_hub()"),jr.forEach(s),Zn=n(Ct,` to
directly upload your config to the Hub.`),Ct.forEach(s),zs=d(e),V=r(e,"H2",{class:!0});var Yo=i(V);se=r(Yo,"A",{id:!0,class:!0,href:!0});var Cr=i(se);Ut=r(Cr,"SPAN",{});var Pr=i(Ut);_(je.$$.fragment,Pr),Pr.forEach(s),Cr.forEach(s),ea=d(Yo),Vt=r(Yo,"SPAN",{});var Ar=i(Vt);ta=n(Ar,"Writing a custom model"),Ar.forEach(s),Yo.forEach(s),Gs=d(e),F=r(e,"P",{});var Pt=i(F);sa=n(Pt,`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),Ze=r(Pt,"A",{href:!0});var Tr=i(Ze);oa=n(Tr,"BertModel"),Tr.forEach(s),na=n(Pt,`) and one that is suitable for image
classification (like `),Jt=r(Pt,"CODE",{});var Mr=i(Jt);aa=n(Mr,"BertModelForSequenceClassification"),Mr.forEach(s),la=n(Pt,")."),Pt.forEach(s),Ks=d(e),oe=r(e,"P",{});var zo=i(oe);ra=n(zo,`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Qt=r(zo,"CODE",{});var Rr=i(Qt);ia=n(Rr,"ResNet"),Rr.forEach(s),fa=n(zo," class:"),zo.forEach(s),Us=d(e),_(Ce.$$.fragment,e),Vs=d(e),et=r(e,"P",{});var qr=i(et);ca=n(qr,"For the model that will classify images, we just change the forward method:"),qr.forEach(s),Js=d(e),_(Pe.$$.fragment,e),Qs=d(e),C=r(e,"P",{});var L=i(C);da=n(L,"In both cases, notice how we inherit from "),Xt=r(L,"CODE",{});var Ir=i(Xt);ha=n(Ir,"PreTrainedModel"),Ir.forEach(s),ma=n(L," and call the superclass initialization with the "),Zt=r(L,"CODE",{});var Nr=i(Zt);ua=n(Nr,"config"),Nr.forEach(s),pa=n(L,`
(a bit like when you write a regular `),es=r(L,"CODE",{});var xr=i(es);_a=n(xr,"torch.nn.Module"),xr.forEach(s),ga=n(L,"). The line that sets the "),ts=r(L,"CODE",{});var Or=i(ts);ya=n(Or,"config_class"),Or.forEach(s),wa=n(L,` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),L.forEach(s),Xs=d(e),_(ne.$$.fragment,e),Zs=d(e),B=r(e,"P",{});var At=i(B);ba=n(At,`You can have your model return anything you want, but returning a dictionary like we did for
`),ss=r(At,"CODE",{});var Dr=i(ss);va=n(Dr,"ResnetModelForImageClassification"),Dr.forEach(s),$a=n(At,`, with the loss included when labels are passed, will make your model directly
usable inside the `),tt=r(At,"A",{href:!0});var Fr=i(tt);ka=n(Fr,"Trainer"),Fr.forEach(s),Ea=n(At,` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),At.forEach(s),eo=d(e),st=r(e,"P",{});var Br=i(st);ja=n(Br,"Now that we have our model class, let\u2019s create one:"),Br.forEach(s),to=d(e),_(Ae.$$.fragment,e),so=d(e),T=r(e,"P",{});var _e=i(T);Ca=n(_e,"Again, you can use any of the methods of "),ot=r(_e,"A",{href:!0});var Hr=i(ot);Pa=n(Hr,"PreTrainedModel"),Hr.forEach(s),Aa=n(_e,", like "),nt=r(_e,"A",{href:!0});var Sr=i(nt);Ta=n(Sr,"save_pretrained()"),Sr.forEach(s),Ma=n(_e,` or
`),at=r(_e,"A",{href:!0});var Wr=i(at);Ra=n(Wr,"push_to_hub()"),Wr.forEach(s),qa=n(_e,`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),_e.forEach(s),oo=d(e),lt=r(e,"P",{});var Lr=i(lt);Ia=n(Lr,`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),Lr.forEach(s),no=d(e),_(Te.$$.fragment,e),ao=d(e),H=r(e,"P",{});var Tt=i(H);Na=n(Tt,"Now let\u2019s see how to make sure that when we do "),rt=r(Tt,"A",{href:!0});var Yr=i(rt);xa=n(Yr,"save_pretrained()"),Yr.forEach(s),Oa=n(Tt," or "),it=r(Tt,"A",{href:!0});var zr=i(it);Da=n(zr,"push_to_hub()"),zr.forEach(s),Fa=n(Tt,`, the
code of the model is saved.`),Tt.forEach(s),lo=d(e),J=r(e,"H2",{class:!0});var Go=i(J);ae=r(Go,"A",{id:!0,class:!0,href:!0});var Gr=i(ae);os=r(Gr,"SPAN",{});var Kr=i(os);_(Me.$$.fragment,Kr),Kr.forEach(s),Gr.forEach(s),Ba=d(Go),ns=r(Go,"SPAN",{});var Ur=i(ns);Ha=n(Ur,"Sending the code to the Hub"),Ur.forEach(s),Go.forEach(s),ro=d(e),_(le.$$.fragment,e),io=d(e),$=r(e,"P",{});var j=i($);Sa=n(j,"First, make sure your model is fully defined in a "),as=r(j,"CODE",{});var Vr=i(as);Wa=n(Vr,".py"),Vr.forEach(s),La=n(j,` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),ls=r(j,"CODE",{});var Jr=i(ls);Ya=n(Jr,"modeling_resnet.py"),Jr.forEach(s),za=n(j," file and a "),rs=r(j,"CODE",{});var Qr=i(rs);Ga=n(Qr,"configuration_resnet.py"),Qr.forEach(s),Ka=n(j,` file in a folder of the current working
directory named `),is=r(j,"CODE",{});var Xr=i(is);Ua=n(Xr,"resnet_model"),Xr.forEach(s),Va=n(j,". The configuration file contains the code for "),fs=r(j,"CODE",{});var Zr=i(fs);Ja=n(Zr,"ResnetConfig"),Zr.forEach(s),Qa=n(j,` and the modeling file
contains the code of `),cs=r(j,"CODE",{});var ei=i(cs);Xa=n(ei,"ResnetModel"),ei.forEach(s),Za=n(j," and "),ds=r(j,"CODE",{});var ti=i(ds);el=n(ti,"ResnetModelForImageClassification"),ti.forEach(s),tl=n(j,"."),j.forEach(s),fo=d(e),_(Re.$$.fragment,e),co=d(e),S=r(e,"P",{});var Mt=i(S);sl=n(Mt,"The "),hs=r(Mt,"CODE",{});var si=i(hs);ol=n(si,"__init__.py"),si.forEach(s),nl=n(Mt," can be empty, it\u2019s just there so that Python detects "),ms=r(Mt,"CODE",{});var oi=i(ms);al=n(oi,"resnet_model"),oi.forEach(s),ll=n(Mt," can be use as a module."),Mt.forEach(s),ho=d(e),_(re.$$.fragment,e),mo=d(e),ft=r(e,"P",{});var ni=i(ft);rl=n(ni,"Note that you can re-use (or subclass) an existing configuration/model."),ni.forEach(s),uo=d(e),ct=r(e,"P",{});var ai=i(ct);il=n(ai,`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),ai.forEach(s),po=d(e),_(qe.$$.fragment,e),_o=d(e),ie=r(e,"P",{});var Ko=i(ie);fl=n(Ko,"Then you have to tell the library you want to copy the code files of those objects when using the "),us=r(Ko,"CODE",{});var li=i(us);cl=n(li,"save_pretrained"),li.forEach(s),dl=n(Ko,`
method and properly register them with a given Auto class (especially for models), just run:`),Ko.forEach(s),go=d(e),_(Ie.$$.fragment,e),yo=d(e),fe=r(e,"P",{});var Uo=i(fe);hl=n(Uo,`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),dt=r(Uo,"A",{href:!0});var ri=i(dt);ml=n(ri,"AutoConfig"),ri.forEach(s),ul=n(Uo,`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),Uo.forEach(s),wo=d(e),ht=r(e,"P",{});var ii=i(ht);pl=n(ii,"Next, let\u2019s create the config and models as we did before:"),ii.forEach(s),bo=d(e),_(Ne.$$.fragment,e),vo=d(e),mt=r(e,"P",{});var fi=i(mt);_l=n(fi,"Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),fi.forEach(s),$o=d(e),_(xe.$$.fragment,e),ko=d(e),ut=r(e,"P",{});var ci=i(ut);gl=n(ci,"or from a notebook:"),ci.forEach(s),Eo=d(e),_(Oe.$$.fragment,e),jo=d(e),pt=r(e,"P",{});var di=i(pt);yl=n(di,"You can then push to to your own namespace (or an organization you are a member of) like this:"),di.forEach(s),Co=d(e),_(De.$$.fragment,e),Po=d(e),M=r(e,"P",{});var ge=i(M);wl=n(ge,`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),ps=r(ge,"CODE",{});var hi=i(ps);bl=n(hi,".py"),hi.forEach(s),vl=n(ge," files in the folder "),_s=r(ge,"CODE",{});var mi=i(_s);$l=n(mi,"custom-resnet50d"),mi.forEach(s),kl=n(ge,` and uploaded the result to the Hub. You can check the result
in this `),Fe=r(ge,"A",{href:!0,rel:!0});var ui=i(Fe);El=n(ui,"model repo"),ui.forEach(s),jl=n(ge,"."),ge.forEach(s),Ao=d(e),ce=r(e,"P",{});var Vo=i(ce);Cl=n(Vo,"See the "),_t=r(Vo,"A",{href:!0});var pi=i(_t);Pl=n(pi,"sharing tutorial"),pi.forEach(s),Al=n(Vo," for more information on the push to Hub method."),Vo.forEach(s),To=d(e),Q=r(e,"H2",{class:!0});var Jo=i(Q);de=r(Jo,"A",{id:!0,class:!0,href:!0});var _i=i(de);gs=r(_i,"SPAN",{});var gi=i(gs);_(Be.$$.fragment,gi),gi.forEach(s),_i.forEach(s),Tl=d(Jo),ys=r(Jo,"SPAN",{});var yi=i(ys);Ml=n(yi,"Using a model with custom code"),yi.forEach(s),Jo.forEach(s),Mo=d(e),he=r(e,"P",{});var Qo=i(he);Rl=n(Qo,`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),ws=r(Qo,"CODE",{});var wi=i(ws);ql=n(wi,"from_pretrained"),wi.forEach(s),Il=n(Qo,` method. The only thing is that you have to add an extra argument to make sure you have read the
online code and trust the author of that model, to avoid executing malicious code on your machine:`),Qo.forEach(s),Ro=d(e),_(He.$$.fragment,e),qo=d(e),me=r(e,"P",{});var Xo=i(me);Nl=n(Xo,"It is also strongly encouraged to pass a commit hash as a "),bs=r(Xo,"CODE",{});var bi=i(bs);xl=n(bi,"revision"),bi.forEach(s),Ol=n(Xo,` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),Xo.forEach(s),Io=d(e),_(Se.$$.fragment,e),No=d(e),gt=r(e,"P",{});var vi=i(gt);Dl=n(vi,`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),vi.forEach(s),xo=d(e),X=r(e,"H2",{class:!0});var Zo=i(X);ue=r(Zo,"A",{id:!0,class:!0,href:!0});var $i=i(ue);vs=r($i,"SPAN",{});var ki=i(vs);_(We.$$.fragment,ki),ki.forEach(s),$i.forEach(s),Fl=d(Zo),$s=r(Zo,"SPAN",{});var Ei=i($s);Bl=n(Ei,"Registering a model with custom code to the auto classes"),Ei.forEach(s),Zo.forEach(s),Oo=d(e),yt=r(e,"P",{});var ji=i(yt);Hl=n(ji,`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),ji.forEach(s),Do=d(e),W=r(e,"P",{});var Rt=i(W);Sl=n(Rt,"As long as your config has a "),ks=r(Rt,"CODE",{});var Ci=i(ks);Wl=n(Ci,"model_type"),Ci.forEach(s),Ll=n(Rt,` attribute that is different from existing model types, and that your model
classes have the right `),Es=r(Rt,"CODE",{});var Pi=i(Es);Yl=n(Pi,"config_class"),Pi.forEach(s),zl=n(Rt," attributes, you can just add them to the auto classes likes this:"),Rt.forEach(s),Fo=d(e),_(Le.$$.fragment,e),Bo=d(e),R=r(e,"P",{});var ye=i(R);Gl=n(ye,"Note that the first argument used when registering your custom config to "),wt=r(ye,"A",{href:!0});var Ai=i(wt);Kl=n(Ai,"AutoConfig"),Ai.forEach(s),Ul=n(ye," needs to match the "),js=r(ye,"CODE",{});var Ti=i(js);Vl=n(Ti,"model_type"),Ti.forEach(s),Jl=n(ye,`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Cs=r(ye,"CODE",{});var Mi=i(Cs);Ql=n(Mi,"config_class"),Mi.forEach(s),Xl=n(ye," of those models."),ye.forEach(s),this.h()},h(){h(m,"name","hf:doc:metadata"),h(m,"content",JSON.stringify(Bi)),h(v,"id","sharing-custom-models"),h(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(v,"href","#sharing-custom-models"),h(u,"class","relative group"),h(we,"href","https://github.com/rwightman/pytorch-image-models/tree/master/timm"),h(we,"rel","nofollow"),h(Ke,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.PreTrainedModel"),h(ee,"id","writing-a-custom-configuration"),h(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ee,"href","#writing-a-custom-configuration"),h(G,"class","relative group"),h(Qe,"href","/docs/transformers/pr_15678/en/main_classes/configuration#transformers.PretrainedConfig"),h(Xe,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub"),h(se,"id","writing-a-custom-model"),h(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(se,"href","#writing-a-custom-model"),h(V,"class","relative group"),h(Ze,"href","/docs/transformers/pr_15678/en/model_doc/bert#transformers.BertModel"),h(tt,"href","/docs/transformers/pr_15678/en/main_classes/trainer#transformers.Trainer"),h(ot,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.PreTrainedModel"),h(nt,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(at,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub"),h(rt,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(it,"href","/docs/transformers/pr_15678/en/main_classes/model#transformers.file_utils.PushToHubMixin.push_to_hub"),h(ae,"id","sending-the-code-to-the-hub"),h(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ae,"href","#sending-the-code-to-the-hub"),h(J,"class","relative group"),h(dt,"href","/docs/transformers/pr_15678/en/model_doc/auto#transformers.AutoConfig"),h(Fe,"href","https://huggingface.co/sgugger/custom-resnet50d"),h(Fe,"rel","nofollow"),h(_t,"href","model_sharing"),h(de,"id","using-a-model-with-custom-code"),h(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(de,"href","#using-a-model-with-custom-code"),h(Q,"class","relative group"),h(ue,"id","registering-a-model-with-custom-code-to-the-auto-classes"),h(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ue,"href","#registering-a-model-with-custom-code-to-the-auto-classes"),h(X,"class","relative group"),h(wt,"href","/docs/transformers/pr_15678/en/model_doc/auto#transformers.AutoConfig")},m(e,a){t(document.head,m),f(e,k,a),f(e,u,a),t(u,v),t(v,z),g(P,z,null),t(u,q),t(u,Z),t(Z,en),f(e,Ts,a),f(e,ze,a),t(ze,tn),f(e,Ms,a),f(e,Ge,a),t(Ge,sn),f(e,Rs,a),f(e,I,a),t(I,on),t(I,we),t(we,nn),t(I,an),t(I,Ke),t(Ke,ln),t(I,rn),f(e,qs,a),f(e,G,a),t(G,ee),t(ee,It),g(be,It,null),t(G,fn),t(G,Nt),t(Nt,cn),f(e,Is,a),f(e,te,a),t(te,dn),t(te,xt),t(xt,hn),t(te,mn),f(e,Ns,a),f(e,Ue,a),t(Ue,un),f(e,xs,a),g(ve,e,a),f(e,Os,a),f(e,Ve,a),t(Ve,pn),f(e,Ds,a),f(e,N,a),t(N,$e),t($e,_n),t($e,Ot),t(Ot,gn),t($e,yn),t(N,wn),t(N,K),t(K,bn),t(K,Dt),t(Dt,vn),t(K,$n),t(K,Ft),t(Ft,kn),t(K,En),t(N,jn),t(N,U),t(U,Cn),t(U,Bt),t(Bt,Pn),t(U,An),t(U,Ht),t(Ht,Tn),t(U,Mn),f(e,Fs,a),f(e,x,a),t(x,Rn),t(x,St),t(St,qn),t(x,In),t(x,Wt),t(Wt,Nn),t(x,xn),f(e,Bs,a),f(e,O,a),t(O,On),t(O,Lt),t(Lt,Dn),t(O,Fn),t(O,Yt),t(Yt,Bn),t(O,Hn),f(e,Hs,a),f(e,Je,a),t(Je,Sn),f(e,Ss,a),g(ke,e,a),f(e,Ws,a),f(e,A,a),t(A,Wn),t(A,zt),t(zt,Ln),t(A,Yn),t(A,Gt),t(Gt,zn),t(A,Gn),t(A,Kt),t(Kt,Kn),t(A,Un),f(e,Ls,a),g(Ee,e,a),f(e,Ys,a),f(e,D,a),t(D,Vn),t(D,Qe),t(Qe,Jn),t(D,Qn),t(D,Xe),t(Xe,Xn),t(D,Zn),f(e,zs,a),f(e,V,a),t(V,se),t(se,Ut),g(je,Ut,null),t(V,ea),t(V,Vt),t(Vt,ta),f(e,Gs,a),f(e,F,a),t(F,sa),t(F,Ze),t(Ze,oa),t(F,na),t(F,Jt),t(Jt,aa),t(F,la),f(e,Ks,a),f(e,oe,a),t(oe,ra),t(oe,Qt),t(Qt,ia),t(oe,fa),f(e,Us,a),g(Ce,e,a),f(e,Vs,a),f(e,et,a),t(et,ca),f(e,Js,a),g(Pe,e,a),f(e,Qs,a),f(e,C,a),t(C,da),t(C,Xt),t(Xt,ha),t(C,ma),t(C,Zt),t(Zt,ua),t(C,pa),t(C,es),t(es,_a),t(C,ga),t(C,ts),t(ts,ya),t(C,wa),f(e,Xs,a),g(ne,e,a),f(e,Zs,a),f(e,B,a),t(B,ba),t(B,ss),t(ss,va),t(B,$a),t(B,tt),t(tt,ka),t(B,Ea),f(e,eo,a),f(e,st,a),t(st,ja),f(e,to,a),g(Ae,e,a),f(e,so,a),f(e,T,a),t(T,Ca),t(T,ot),t(ot,Pa),t(T,Aa),t(T,nt),t(nt,Ta),t(T,Ma),t(T,at),t(at,Ra),t(T,qa),f(e,oo,a),f(e,lt,a),t(lt,Ia),f(e,no,a),g(Te,e,a),f(e,ao,a),f(e,H,a),t(H,Na),t(H,rt),t(rt,xa),t(H,Oa),t(H,it),t(it,Da),t(H,Fa),f(e,lo,a),f(e,J,a),t(J,ae),t(ae,os),g(Me,os,null),t(J,Ba),t(J,ns),t(ns,Ha),f(e,ro,a),g(le,e,a),f(e,io,a),f(e,$,a),t($,Sa),t($,as),t(as,Wa),t($,La),t($,ls),t(ls,Ya),t($,za),t($,rs),t(rs,Ga),t($,Ka),t($,is),t(is,Ua),t($,Va),t($,fs),t(fs,Ja),t($,Qa),t($,cs),t(cs,Xa),t($,Za),t($,ds),t(ds,el),t($,tl),f(e,fo,a),g(Re,e,a),f(e,co,a),f(e,S,a),t(S,sl),t(S,hs),t(hs,ol),t(S,nl),t(S,ms),t(ms,al),t(S,ll),f(e,ho,a),g(re,e,a),f(e,mo,a),f(e,ft,a),t(ft,rl),f(e,uo,a),f(e,ct,a),t(ct,il),f(e,po,a),g(qe,e,a),f(e,_o,a),f(e,ie,a),t(ie,fl),t(ie,us),t(us,cl),t(ie,dl),f(e,go,a),g(Ie,e,a),f(e,yo,a),f(e,fe,a),t(fe,hl),t(fe,dt),t(dt,ml),t(fe,ul),f(e,wo,a),f(e,ht,a),t(ht,pl),f(e,bo,a),g(Ne,e,a),f(e,vo,a),f(e,mt,a),t(mt,_l),f(e,$o,a),g(xe,e,a),f(e,ko,a),f(e,ut,a),t(ut,gl),f(e,Eo,a),g(Oe,e,a),f(e,jo,a),f(e,pt,a),t(pt,yl),f(e,Co,a),g(De,e,a),f(e,Po,a),f(e,M,a),t(M,wl),t(M,ps),t(ps,bl),t(M,vl),t(M,_s),t(_s,$l),t(M,kl),t(M,Fe),t(Fe,El),t(M,jl),f(e,Ao,a),f(e,ce,a),t(ce,Cl),t(ce,_t),t(_t,Pl),t(ce,Al),f(e,To,a),f(e,Q,a),t(Q,de),t(de,gs),g(Be,gs,null),t(Q,Tl),t(Q,ys),t(ys,Ml),f(e,Mo,a),f(e,he,a),t(he,Rl),t(he,ws),t(ws,ql),t(he,Il),f(e,Ro,a),g(He,e,a),f(e,qo,a),f(e,me,a),t(me,Nl),t(me,bs),t(bs,xl),t(me,Ol),f(e,Io,a),g(Se,e,a),f(e,No,a),f(e,gt,a),t(gt,Dl),f(e,xo,a),f(e,X,a),t(X,ue),t(ue,vs),g(We,vs,null),t(X,Fl),t(X,$s),t($s,Bl),f(e,Oo,a),f(e,yt,a),t(yt,Hl),f(e,Do,a),f(e,W,a),t(W,Sl),t(W,ks),t(ks,Wl),t(W,Ll),t(W,Es),t(Es,Yl),t(W,zl),f(e,Fo,a),g(Le,e,a),f(e,Bo,a),f(e,R,a),t(R,Gl),t(R,wt),t(wt,Kl),t(R,Ul),t(R,js),t(js,Vl),t(R,Jl),t(R,Cs),t(Cs,Ql),t(R,Xl),Ho=!0},p(e,[a]){const Ye={};a&2&&(Ye.$$scope={dirty:a,ctx:e}),ne.$set(Ye);const Ps={};a&2&&(Ps.$$scope={dirty:a,ctx:e}),le.$set(Ps);const As={};a&2&&(As.$$scope={dirty:a,ctx:e}),re.$set(As)},i(e){Ho||(y(P.$$.fragment,e),y(be.$$.fragment,e),y(ve.$$.fragment,e),y(ke.$$.fragment,e),y(Ee.$$.fragment,e),y(je.$$.fragment,e),y(Ce.$$.fragment,e),y(Pe.$$.fragment,e),y(ne.$$.fragment,e),y(Ae.$$.fragment,e),y(Te.$$.fragment,e),y(Me.$$.fragment,e),y(le.$$.fragment,e),y(Re.$$.fragment,e),y(re.$$.fragment,e),y(qe.$$.fragment,e),y(Ie.$$.fragment,e),y(Ne.$$.fragment,e),y(xe.$$.fragment,e),y(Oe.$$.fragment,e),y(De.$$.fragment,e),y(Be.$$.fragment,e),y(He.$$.fragment,e),y(Se.$$.fragment,e),y(We.$$.fragment,e),y(Le.$$.fragment,e),Ho=!0)},o(e){w(P.$$.fragment,e),w(be.$$.fragment,e),w(ve.$$.fragment,e),w(ke.$$.fragment,e),w(Ee.$$.fragment,e),w(je.$$.fragment,e),w(Ce.$$.fragment,e),w(Pe.$$.fragment,e),w(ne.$$.fragment,e),w(Ae.$$.fragment,e),w(Te.$$.fragment,e),w(Me.$$.fragment,e),w(le.$$.fragment,e),w(Re.$$.fragment,e),w(re.$$.fragment,e),w(qe.$$.fragment,e),w(Ie.$$.fragment,e),w(Ne.$$.fragment,e),w(xe.$$.fragment,e),w(Oe.$$.fragment,e),w(De.$$.fragment,e),w(Be.$$.fragment,e),w(He.$$.fragment,e),w(Se.$$.fragment,e),w(We.$$.fragment,e),w(Le.$$.fragment,e),Ho=!1},d(e){s(m),e&&s(k),e&&s(u),b(P),e&&s(Ts),e&&s(ze),e&&s(Ms),e&&s(Ge),e&&s(Rs),e&&s(I),e&&s(qs),e&&s(G),b(be),e&&s(Is),e&&s(te),e&&s(Ns),e&&s(Ue),e&&s(xs),b(ve,e),e&&s(Os),e&&s(Ve),e&&s(Ds),e&&s(N),e&&s(Fs),e&&s(x),e&&s(Bs),e&&s(O),e&&s(Hs),e&&s(Je),e&&s(Ss),b(ke,e),e&&s(Ws),e&&s(A),e&&s(Ls),b(Ee,e),e&&s(Ys),e&&s(D),e&&s(zs),e&&s(V),b(je),e&&s(Gs),e&&s(F),e&&s(Ks),e&&s(oe),e&&s(Us),b(Ce,e),e&&s(Vs),e&&s(et),e&&s(Js),b(Pe,e),e&&s(Qs),e&&s(C),e&&s(Xs),b(ne,e),e&&s(Zs),e&&s(B),e&&s(eo),e&&s(st),e&&s(to),b(Ae,e),e&&s(so),e&&s(T),e&&s(oo),e&&s(lt),e&&s(no),b(Te,e),e&&s(ao),e&&s(H),e&&s(lo),e&&s(J),b(Me),e&&s(ro),b(le,e),e&&s(io),e&&s($),e&&s(fo),b(Re,e),e&&s(co),e&&s(S),e&&s(ho),b(re,e),e&&s(mo),e&&s(ft),e&&s(uo),e&&s(ct),e&&s(po),b(qe,e),e&&s(_o),e&&s(ie),e&&s(go),b(Ie,e),e&&s(yo),e&&s(fe),e&&s(wo),e&&s(ht),e&&s(bo),b(Ne,e),e&&s(vo),e&&s(mt),e&&s($o),b(xe,e),e&&s(ko),e&&s(ut),e&&s(Eo),b(Oe,e),e&&s(jo),e&&s(pt),e&&s(Co),b(De,e),e&&s(Po),e&&s(M),e&&s(Ao),e&&s(ce),e&&s(To),e&&s(Q),b(Be),e&&s(Mo),e&&s(he),e&&s(Ro),b(He,e),e&&s(qo),e&&s(me),e&&s(Io),b(Se,e),e&&s(No),e&&s(gt),e&&s(xo),e&&s(X),b(We),e&&s(Oo),e&&s(yt),e&&s(Do),e&&s(W),e&&s(Fo),b(Le,e),e&&s(Bo),e&&s(R)}}}const Bi={local:"sharing-custom-models",sections:[{local:"writing-a-custom-configuration",title:"Writing a custom configuration"},{local:"writing-a-custom-model",title:"Writing a custom model"},{local:"sending-the-code-to-the-hub",title:"Sending the code to the Hub"},{local:"using-a-model-with-custom-code",title:"Using a model with custom code"},{local:"registering-a-model-with-custom-code-to-the-auto-classes",title:"Registering a model with custom code to the auto classes"}],title:"Sharing custom models"};function Hi(Y,m,k){let{fw:u}=m;return Y.$$set=v=>{"fw"in v&&k(0,u=v.fw)},[u]}class Gi extends Ri{constructor(m){super();qi(this,m,Hi,Fi,Ii,{fw:0})}}export{Gi as default,Bi as metadata};
