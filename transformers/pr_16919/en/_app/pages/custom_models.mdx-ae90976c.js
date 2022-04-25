import{S as Si,i as Bi,s as Hi,e as r,k as c,w as p,t as o,M as Wi,c as l,d as s,m as d,a as i,x as _,h as a,b as h,F as t,g as f,y as g,q as y,o as w,B as b,v as Li}from"../chunks/vendor-6b77c823.js";import{T as nl}from"../chunks/Tip-39098574.js";import{I as Nt}from"../chunks/IconCopyLink-7a11ce68.js";import{C as k}from"../chunks/CodeBlock-3a8b25a8.js";function zi(Z){let m,E;return{c(){m=r("p"),E=o("If your model is very similar to a model inside the library, you can re-use the same configuration as this model.")},l(u){m=l(u,"P",{});var v=i(m);E=a(v,"If your model is very similar to a model inside the library, you can re-use the same configuration as this model."),v.forEach(s)},m(u,v){f(u,m,v),t(m,E)},d(u){u&&s(m)}}}function Yi(Z){let m,E;return{c(){m=r("p"),E=o("This API is experimental and may have some slight breaking changes in the next releases.")},l(u){m=l(u,"P",{});var v=i(m);E=a(v,"This API is experimental and may have some slight breaking changes in the next releases."),v.forEach(s)},m(u,v){f(u,m,v),t(m,E)},d(u){u&&s(m)}}}function Ui(Z){let m,E,u,v,Y;return{c(){m=r("p"),E=o(`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),u=r("code"),v=o("transformers"),Y=o(" package.")},l(P){m=l(P,"P",{});var I=i(m);E=a(I,`If copying a modeling files from the library, you will need to replace all the relative imports at the top of the file
to import from the `),u=l(I,"CODE",{});var ee=i(u);v=a(ee,"transformers"),ee.forEach(s),Y=a(I," package."),I.forEach(s)},m(P,I){f(P,m,I),t(m,E),t(m,u),t(u,v),t(m,Y)},d(P){P&&s(m)}}}function Gi(Z){let m,E,u,v,Y,P,I,ee,sa,qs,Ge,oa,Is,Ke,aa,Ns,N,na,be,ra,la,Ve,ia,fa,xs,U,te,xt,ve,ca,Ot,da,Os,se,ha,Dt,ma,ua,Ds,Je,pa,Fs,$e,Ss,Qe,_a,Bs,x,ke,ga,Ft,ya,wa,ba,G,va,St,$a,ka,Bt,Ea,ja,Ca,K,Pa,Ht,Aa,Ta,Wt,Ma,Ra,Hs,O,qa,Lt,Ia,Na,zt,xa,Oa,Ws,D,Da,Yt,Fa,Sa,Ut,Ba,Ha,Ls,Xe,Wa,zs,Ee,Ys,A,La,Gt,za,Ya,Kt,Ua,Ga,Vt,Ka,Va,Us,je,Gs,F,Ja,Ze,Qa,Xa,et,Za,en,Ks,V,oe,Jt,Ce,tn,Qt,sn,Vs,S,on,tt,an,nn,Xt,rn,ln,Js,ae,fn,Zt,cn,dn,Qs,Pe,Xs,st,hn,Zs,Ae,eo,C,mn,es,un,pn,ts,_n,gn,ss,yn,wn,os,bn,vn,to,ne,so,B,$n,as,kn,En,ot,jn,Cn,oo,at,Pn,ao,Te,no,T,An,nt,Tn,Mn,rt,Rn,qn,lt,In,Nn,ro,it,xn,lo,Me,io,H,On,ft,Dn,Fn,ct,Sn,Bn,fo,J,re,ns,Re,Hn,rs,Wn,co,le,ho,$,Ln,ls,zn,Yn,is,Un,Gn,fs,Kn,Vn,cs,Jn,Qn,ds,Xn,Zn,hs,er,tr,ms,sr,or,mo,qe,uo,W,ar,us,nr,rr,ps,lr,ir,po,ie,_o,dt,fr,go,ht,cr,yo,Ie,wo,fe,dr,_s,hr,mr,bo,Ne,vo,ce,ur,mt,pr,_r,$o,ut,gr,ko,xe,Eo,pt,yr,jo,Oe,Co,_t,wr,Po,De,Ao,gt,br,To,Fe,Mo,M,vr,gs,$r,kr,ys,Er,jr,Se,Cr,Pr,Ro,de,Ar,yt,Tr,Mr,qo,Q,he,ws,Be,Rr,bs,qr,Io,R,Ir,vs,Nr,xr,He,Or,Dr,$s,Fr,Sr,No,We,xo,me,Br,ks,Hr,Wr,Oo,Le,Do,wt,Lr,Fo,X,ue,Es,ze,zr,js,Yr,So,bt,Ur,Bo,L,Gr,Cs,Kr,Vr,Ps,Jr,Qr,Ho,Ye,Wo,q,Xr,vt,Zr,el,As,tl,sl,Ts,ol,al,Lo;return P=new Nt({}),ve=new Nt({}),$e=new k({props:{code:`from transformers import PretrainedConfig
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
        super().__init__(**kwargs)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PretrainedConfig
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
        <span class="hljs-built_in">super</span>().__init__(**kwargs)`}}),Ee=new k({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d_config.save_pretrained("custom-resnet")`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d_config.save_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)`}}),je=new k({props:{code:'resnet50d_config = ResnetConfig.from_pretrained("custom-resnet")',highlighted:'resnet50d_config = ResnetConfig.from_pretrained(<span class="hljs-string">&quot;custom-resnet&quot;</span>)'}}),Ce=new Nt({}),Pe=new k({props:{code:`from transformers import PreTrainedModel
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
        return self.model.forward_features(tensor)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PreTrainedModel
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
        <span class="hljs-keyword">return</span> self.model.forward_features(tensor)`}}),Ae=new k({props:{code:`class ResnetModelForImageClassification(PreTrainedModel):
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
        return {"logits": logits}`,highlighted:`<span class="hljs-keyword">class</span> <span class="hljs-title class_">ResnetModelForImageClassification</span>(<span class="hljs-title class_ inherited__">PreTrainedModel</span>):
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
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;logits&quot;</span>: logits}`}}),ne=new nl({props:{$$slots:{default:[zi]},$$scope:{ctx:Z}}}),Te=new k({props:{code:"resnet50d = ResnetModelForImageClassification(resnet50d_config)",highlighted:"resnet50d = ResnetModelForImageClassification(resnet50d_config)"}}),Me=new k({props:{code:`import timm

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`,highlighted:`<span class="hljs-keyword">import</span> timm

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Re=new Nt({}),le=new nl({props:{warning:!0,$$slots:{default:[Yi]},$$scope:{ctx:Z}}}),qe=new k({props:{code:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.py
    \u251C\u2500\u2500 configuration_resnet.py
    \u2514\u2500\u2500 modeling_resnet.py`,highlighted:`.
\u2514\u2500\u2500 resnet_model
    \u251C\u2500\u2500 __init__.<span class="hljs-keyword">py</span>
    \u251C\u2500\u2500 configuration_resnet.<span class="hljs-keyword">py</span>
    \u2514\u2500\u2500 modeling_resnet.<span class="hljs-keyword">py</span>`}}),ie=new nl({props:{warning:!0,$$slots:{default:[Ui]},$$scope:{ctx:Z}}}),Ie=new k({props:{code:`from resnet_model.configuration_resnet import ResnetConfig
from resnet_model.modeling_resnet import ResnetModel, ResnetModelForImageClassification`,highlighted:`<span class="hljs-keyword">from</span> resnet_model.configuration_resnet <span class="hljs-keyword">import</span> ResnetConfig
<span class="hljs-keyword">from</span> resnet_model.modeling_resnet <span class="hljs-keyword">import</span> ResnetModel, ResnetModelForImageClassification`}}),Ne=new k({props:{code:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class("AutoModel")
ResnetModelForImageClassification.register_for_auto_class("AutoModelForImageClassification")`,highlighted:`ResnetConfig.register_for_auto_class()
ResnetModel.register_for_auto_class(<span class="hljs-string">&quot;AutoModel&quot;</span>)
ResnetModelForImageClassification.register_for_auto_class(<span class="hljs-string">&quot;AutoModelForImageClassification&quot;</span>)`}}),xe=new k({props:{code:`resnet50d_config = ResnetConfig(block_type="bottleneck", stem_width=32, stem_type="deep", avg_down=True)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model("resnet50d", pretrained=True)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`,highlighted:`resnet50d_config = ResnetConfig(block_type=<span class="hljs-string">&quot;bottleneck&quot;</span>, stem_width=<span class="hljs-number">32</span>, stem_type=<span class="hljs-string">&quot;deep&quot;</span>, avg_down=<span class="hljs-literal">True</span>)
resnet50d = ResnetModelForImageClassification(resnet50d_config)

pretrained_model = timm.create_model(<span class="hljs-string">&quot;resnet50d&quot;</span>, pretrained=<span class="hljs-literal">True</span>)
resnet50d.model.load_state_dict(pretrained_model.state_dict())`}}),Oe=new k({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}}),De=new k({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Fe=new k({props:{code:'resnet50d.push_to_hub("custom-resnet50d")',highlighted:'resnet50d.push_to_hub(<span class="hljs-string">&quot;custom-resnet50d&quot;</span>)'}}),Be=new Nt({}),We=new k({props:{code:`from transformers import AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained("sgugger/custom-resnet50d", trust_remote_code=True)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification

model = AutoModelForImageClassification.from_pretrained(<span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`}}),Le=new k({props:{code:`commit_hash = "ed94a7c6247d8aedce4647f00f20de6875b5b292"
model = AutoModelForImageClassification.from_pretrained(
    "sgugger/custom-resnet50d", trust_remote_code=True, revision=commit_hash
)`,highlighted:`commit_hash = <span class="hljs-string">&quot;ed94a7c6247d8aedce4647f00f20de6875b5b292&quot;</span>
model = AutoModelForImageClassification.from_pretrained(
    <span class="hljs-string">&quot;sgugger/custom-resnet50d&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>, revision=commit_hash
)`}}),ze=new Nt({}),Ye=new k({props:{code:`from transformers import AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register("resnet", ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig, AutoModel, AutoModelForImageClassification

AutoConfig.register(<span class="hljs-string">&quot;resnet&quot;</span>, ResnetConfig)
AutoModel.register(ResnetConfig, ResnetModel)
AutoModelForImageClassification.register(ResnetConfig, ResnetModelForImageClassification)`}}),{c(){m=r("meta"),E=c(),u=r("h1"),v=r("a"),Y=r("span"),p(P.$$.fragment),I=c(),ee=r("span"),sa=o("Sharing custom models"),qs=c(),Ge=r("p"),oa=o(`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),Is=c(),Ke=r("p"),aa=o(`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),Ns=c(),N=r("p"),na=o(`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),be=r("a"),ra=o("timm library"),la=o(" into a "),Ve=r("a"),ia=o("PreTrainedModel"),fa=o("."),xs=c(),U=r("h2"),te=r("a"),xt=r("span"),p(ve.$$.fragment),ca=c(),Ot=r("span"),da=o("Writing a custom configuration"),Os=c(),se=r("p"),ha=o(`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),Dt=r("code"),ma=o("config"),ua=o(" to be initialized, so we really need that object to be as complete as possible."),Ds=c(),Je=r("p"),pa=o(`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),Fs=c(),p($e.$$.fragment),Ss=c(),Qe=r("p"),_a=o("The three important things to remember when writing you own configuration are the following:"),Bs=c(),x=r("ul"),ke=r("li"),ga=o("you have to inherit from "),Ft=r("code"),ya=o("PretrainedConfig"),wa=o(","),ba=c(),G=r("li"),va=o("the "),St=r("code"),$a=o("__init__"),ka=o(" of your "),Bt=r("code"),Ea=o("PretrainedConfig"),ja=o(" must accept any kwargs,"),Ca=c(),K=r("li"),Pa=o("those "),Ht=r("code"),Aa=o("kwargs"),Ta=o(" need to be passed to the superclass "),Wt=r("code"),Ma=o("__init__"),Ra=o("."),Hs=c(),O=r("p"),qa=o(`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),Lt=r("code"),Ia=o("PretrainedConfig"),Na=o(` has more fields than the ones you are setting. When reloading a
config with the `),zt=r("code"),xa=o("from_pretrained"),Oa=o(` method, those fields need to be accepted by your config and then sent to the
superclass.`),Ws=c(),D=r("p"),Da=o("Defining a "),Yt=r("code"),Fa=o("model_type"),Sa=o(" for your configuration (here "),Ut=r("code"),Ba=o('model_type="resnet"'),Ha=o(`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),Ls=c(),Xe=r("p"),Wa=o(`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),zs=c(),p(Ee.$$.fragment),Ys=c(),A=r("p"),La=o("This will save a file named "),Gt=r("code"),za=o("config.json"),Ya=o(" inside the folder "),Kt=r("code"),Ua=o("custom-resnet"),Ga=o(`. You can then reload your config with the
`),Vt=r("code"),Ka=o("from_pretrained"),Va=o(" method:"),Us=c(),p(je.$$.fragment),Gs=c(),F=r("p"),Ja=o("You can also use any other method of the "),Ze=r("a"),Qa=o("PretrainedConfig"),Xa=o(" class, like "),et=r("a"),Za=o("push_to_hub()"),en=o(` to
directly upload your config to the Hub.`),Ks=c(),V=r("h2"),oe=r("a"),Jt=r("span"),p(Ce.$$.fragment),tn=c(),Qt=r("span"),sn=o("Writing a custom model"),Vs=c(),S=r("p"),on=o(`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),tt=r("a"),an=o("BertModel"),nn=o(`) and one that is suitable for image
classification (like `),Xt=r("code"),rn=o("BertModelForSequenceClassification"),ln=o(")."),Js=c(),ae=r("p"),fn=o(`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Zt=r("code"),cn=o("ResNet"),dn=o(" class:"),Qs=c(),p(Pe.$$.fragment),Xs=c(),st=r("p"),hn=o("For the model that will classify images, we just change the forward method:"),Zs=c(),p(Ae.$$.fragment),eo=c(),C=r("p"),mn=o("In both cases, notice how we inherit from "),es=r("code"),un=o("PreTrainedModel"),pn=o(" and call the superclass initialization with the "),ts=r("code"),_n=o("config"),gn=o(`
(a bit like when you write a regular `),ss=r("code"),yn=o("torch.nn.Module"),wn=o("). The line that sets the "),os=r("code"),bn=o("config_class"),vn=o(` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),to=c(),p(ne.$$.fragment),so=c(),B=r("p"),$n=o(`You can have your model return anything you want, but returning a dictionary like we did for
`),as=r("code"),kn=o("ResnetModelForImageClassification"),En=o(`, with the loss included when labels are passed, will make your model directly
usable inside the `),ot=r("a"),jn=o("Trainer"),Cn=o(` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),oo=c(),at=r("p"),Pn=o("Now that we have our model class, let\u2019s create one:"),ao=c(),p(Te.$$.fragment),no=c(),T=r("p"),An=o("Again, you can use any of the methods of "),nt=r("a"),Tn=o("PreTrainedModel"),Mn=o(", like "),rt=r("a"),Rn=o("save_pretrained()"),qn=o(` or
`),lt=r("a"),In=o("push_to_hub()"),Nn=o(`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),ro=c(),it=r("p"),xn=o(`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),lo=c(),p(Me.$$.fragment),io=c(),H=r("p"),On=o("Now let\u2019s see how to make sure that when we do "),ft=r("a"),Dn=o("save_pretrained()"),Fn=o(" or "),ct=r("a"),Sn=o("push_to_hub()"),Bn=o(`, the
code of the model is saved.`),fo=c(),J=r("h2"),re=r("a"),ns=r("span"),p(Re.$$.fragment),Hn=c(),rs=r("span"),Wn=o("Sending the code to the Hub"),co=c(),p(le.$$.fragment),ho=c(),$=r("p"),Ln=o("First, make sure your model is fully defined in a "),ls=r("code"),zn=o(".py"),Yn=o(` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),is=r("code"),Un=o("modeling_resnet.py"),Gn=o(" file and a "),fs=r("code"),Kn=o("configuration_resnet.py"),Vn=o(` file in a folder of the current working
directory named `),cs=r("code"),Jn=o("resnet_model"),Qn=o(". The configuration file contains the code for "),ds=r("code"),Xn=o("ResnetConfig"),Zn=o(` and the modeling file
contains the code of `),hs=r("code"),er=o("ResnetModel"),tr=o(" and "),ms=r("code"),sr=o("ResnetModelForImageClassification"),or=o("."),mo=c(),p(qe.$$.fragment),uo=c(),W=r("p"),ar=o("The "),us=r("code"),nr=o("__init__.py"),rr=o(" can be empty, it\u2019s just there so that Python detects "),ps=r("code"),lr=o("resnet_model"),ir=o(" can be use as a module."),po=c(),p(ie.$$.fragment),_o=c(),dt=r("p"),fr=o("Note that you can re-use (or subclass) an existing configuration/model."),go=c(),ht=r("p"),cr=o(`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),yo=c(),p(Ie.$$.fragment),wo=c(),fe=r("p"),dr=o("Then you have to tell the library you want to copy the code files of those objects when using the "),_s=r("code"),hr=o("save_pretrained"),mr=o(`
method and properly register them with a given Auto class (especially for models), just run:`),bo=c(),p(Ne.$$.fragment),vo=c(),ce=r("p"),ur=o(`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),mt=r("a"),pr=o("AutoConfig"),_r=o(`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),$o=c(),ut=r("p"),gr=o("Next, let\u2019s create the config and models as we did before:"),ko=c(),p(xe.$$.fragment),Eo=c(),pt=r("p"),yr=o("Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),jo=c(),p(Oe.$$.fragment),Co=c(),_t=r("p"),wr=o("or from a notebook:"),Po=c(),p(De.$$.fragment),Ao=c(),gt=r("p"),br=o("You can then push to to your own namespace (or an organization you are a member of) like this:"),To=c(),p(Fe.$$.fragment),Mo=c(),M=r("p"),vr=o(`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),gs=r("code"),$r=o(".py"),kr=o(" files in the folder "),ys=r("code"),Er=o("custom-resnet50d"),jr=o(` and uploaded the result to the Hub. You can check the result
in this `),Se=r("a"),Cr=o("model repo"),Pr=o("."),Ro=c(),de=r("p"),Ar=o("See the "),yt=r("a"),Tr=o("sharing tutorial"),Mr=o(" for more information on the push to Hub method."),qo=c(),Q=r("h2"),he=r("a"),ws=r("span"),p(Be.$$.fragment),Rr=c(),bs=r("span"),qr=o("Using a model with custom code"),Io=c(),R=r("p"),Ir=o(`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),vs=r("code"),Nr=o("from_pretrained"),xr=o(" method. All files and code uploaded to the Hub are scanned for malware (refer to the "),He=r("a"),Or=o("Hub security"),Dr=o(` documentation for more information), but you should still
review the model code and author to avoid executing malicious code on your machine. Set `),$s=r("code"),Fr=o("trust_remote_code=True"),Sr=o(` to use
a model with custom code:`),No=c(),p(We.$$.fragment),xo=c(),me=r("p"),Br=o("It is also strongly encouraged to pass a commit hash as a "),ks=r("code"),Hr=o("revision"),Wr=o(` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),Oo=c(),p(Le.$$.fragment),Do=c(),wt=r("p"),Lr=o(`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),Fo=c(),X=r("h2"),ue=r("a"),Es=r("span"),p(ze.$$.fragment),zr=c(),js=r("span"),Yr=o("Registering a model with custom code to the auto classes"),So=c(),bt=r("p"),Ur=o(`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),Bo=c(),L=r("p"),Gr=o("As long as your config has a "),Cs=r("code"),Kr=o("model_type"),Vr=o(` attribute that is different from existing model types, and that your model
classes have the right `),Ps=r("code"),Jr=o("config_class"),Qr=o(" attributes, you can just add them to the auto classes likes this:"),Ho=c(),p(Ye.$$.fragment),Wo=c(),q=r("p"),Xr=o("Note that the first argument used when registering your custom config to "),vt=r("a"),Zr=o("AutoConfig"),el=o(" needs to match the "),As=r("code"),tl=o("model_type"),sl=o(`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Ts=r("code"),ol=o("config_class"),al=o(" of those models."),this.h()},l(e){const n=Wi('[data-svelte="svelte-1phssyn"]',document.head);m=l(n,"META",{name:!0,content:!0}),n.forEach(s),E=d(e),u=l(e,"H1",{class:!0});var Ue=i(u);v=l(Ue,"A",{id:!0,class:!0,href:!0});var Ms=i(v);Y=l(Ms,"SPAN",{});var Rs=i(Y);_(P.$$.fragment,Rs),Rs.forEach(s),Ms.forEach(s),I=d(Ue),ee=l(Ue,"SPAN",{});var rl=i(ee);sa=a(rl,"Sharing custom models"),rl.forEach(s),Ue.forEach(s),qs=d(e),Ge=l(e,"P",{});var ll=i(Ge);oa=a(ll,`The \u{1F917} Transformers library is designed to be easily extensible. Every model is fully coded in a given subfolder
of the repository with no abstraction, so you can easily copy a modeling file and tweak it to your needs.`),ll.forEach(s),Is=d(e),Ke=l(e,"P",{});var il=i(Ke);aa=a(il,`If you are writing a brand new model, it might be easier to start from scratch. In this tutorial, we will show you
how to write a custom model and its configuration so it can be used inside Transformers, and how you can share it
with the community (with the code it relies on) so that anyone can use it, even if it\u2019s not present in the \u{1F917}
Transformers library.`),il.forEach(s),Ns=d(e),N=l(e,"P",{});var $t=i(N);na=a($t,`We will illustrate all of this on a ResNet model, by wrapping the ResNet class of the
`),be=l($t,"A",{href:!0,rel:!0});var fl=i(be);ra=a(fl,"timm library"),fl.forEach(s),la=a($t," into a "),Ve=l($t,"A",{href:!0});var cl=i(Ve);ia=a(cl,"PreTrainedModel"),cl.forEach(s),fa=a($t,"."),$t.forEach(s),xs=d(e),U=l(e,"H2",{class:!0});var zo=i(U);te=l(zo,"A",{id:!0,class:!0,href:!0});var dl=i(te);xt=l(dl,"SPAN",{});var hl=i(xt);_(ve.$$.fragment,hl),hl.forEach(s),dl.forEach(s),ca=d(zo),Ot=l(zo,"SPAN",{});var ml=i(Ot);da=a(ml,"Writing a custom configuration"),ml.forEach(s),zo.forEach(s),Os=d(e),se=l(e,"P",{});var Yo=i(se);ha=a(Yo,`Before we dive into the model, let\u2019s first write its configuration. The configuration of a model is an object that
will contain all the necessary information to build the model. As we will see in the next section, the model can only
take a `),Dt=l(Yo,"CODE",{});var ul=i(Dt);ma=a(ul,"config"),ul.forEach(s),ua=a(Yo," to be initialized, so we really need that object to be as complete as possible."),Yo.forEach(s),Ds=d(e),Je=l(e,"P",{});var pl=i(Je);pa=a(pl,`In our example, we will take a couple of arguments of the ResNet class that we might want to tweak. Different
configurations will then give us the different types of ResNets that are possible. We then just store those arguments,
after checking the validity of a few of them.`),pl.forEach(s),Fs=d(e),_($e.$$.fragment,e),Ss=d(e),Qe=l(e,"P",{});var _l=i(Qe);_a=a(_l,"The three important things to remember when writing you own configuration are the following:"),_l.forEach(s),Bs=d(e),x=l(e,"UL",{});var kt=i(x);ke=l(kt,"LI",{});var Uo=i(ke);ga=a(Uo,"you have to inherit from "),Ft=l(Uo,"CODE",{});var gl=i(Ft);ya=a(gl,"PretrainedConfig"),gl.forEach(s),wa=a(Uo,","),Uo.forEach(s),ba=d(kt),G=l(kt,"LI",{});var Et=i(G);va=a(Et,"the "),St=l(Et,"CODE",{});var yl=i(St);$a=a(yl,"__init__"),yl.forEach(s),ka=a(Et," of your "),Bt=l(Et,"CODE",{});var wl=i(Bt);Ea=a(wl,"PretrainedConfig"),wl.forEach(s),ja=a(Et," must accept any kwargs,"),Et.forEach(s),Ca=d(kt),K=l(kt,"LI",{});var jt=i(K);Pa=a(jt,"those "),Ht=l(jt,"CODE",{});var bl=i(Ht);Aa=a(bl,"kwargs"),bl.forEach(s),Ta=a(jt," need to be passed to the superclass "),Wt=l(jt,"CODE",{});var vl=i(Wt);Ma=a(vl,"__init__"),vl.forEach(s),Ra=a(jt,"."),jt.forEach(s),kt.forEach(s),Hs=d(e),O=l(e,"P",{});var Ct=i(O);qa=a(Ct,`The inheritance is to make sure you get all the functionality from the \u{1F917} Transformers library, while the two other
constraints come from the fact a `),Lt=l(Ct,"CODE",{});var $l=i(Lt);Ia=a($l,"PretrainedConfig"),$l.forEach(s),Na=a(Ct,` has more fields than the ones you are setting. When reloading a
config with the `),zt=l(Ct,"CODE",{});var kl=i(zt);xa=a(kl,"from_pretrained"),kl.forEach(s),Oa=a(Ct,` method, those fields need to be accepted by your config and then sent to the
superclass.`),Ct.forEach(s),Ws=d(e),D=l(e,"P",{});var Pt=i(D);Da=a(Pt,"Defining a "),Yt=l(Pt,"CODE",{});var El=i(Yt);Fa=a(El,"model_type"),El.forEach(s),Sa=a(Pt," for your configuration (here "),Ut=l(Pt,"CODE",{});var jl=i(Ut);Ba=a(jl,'model_type="resnet"'),jl.forEach(s),Ha=a(Pt,`) is not mandatory, unless you want to
register your model with the auto classes (see last section).`),Pt.forEach(s),Ls=d(e),Xe=l(e,"P",{});var Cl=i(Xe);Wa=a(Cl,`With this done, you can easily create and save your configuration like you would do with any other model config of the
library. Here is how we can create a resnet50d config and save it:`),Cl.forEach(s),zs=d(e),_(Ee.$$.fragment,e),Ys=d(e),A=l(e,"P",{});var pe=i(A);La=a(pe,"This will save a file named "),Gt=l(pe,"CODE",{});var Pl=i(Gt);za=a(Pl,"config.json"),Pl.forEach(s),Ya=a(pe," inside the folder "),Kt=l(pe,"CODE",{});var Al=i(Kt);Ua=a(Al,"custom-resnet"),Al.forEach(s),Ga=a(pe,`. You can then reload your config with the
`),Vt=l(pe,"CODE",{});var Tl=i(Vt);Ka=a(Tl,"from_pretrained"),Tl.forEach(s),Va=a(pe," method:"),pe.forEach(s),Us=d(e),_(je.$$.fragment,e),Gs=d(e),F=l(e,"P",{});var At=i(F);Ja=a(At,"You can also use any other method of the "),Ze=l(At,"A",{href:!0});var Ml=i(Ze);Qa=a(Ml,"PretrainedConfig"),Ml.forEach(s),Xa=a(At," class, like "),et=l(At,"A",{href:!0});var Rl=i(et);Za=a(Rl,"push_to_hub()"),Rl.forEach(s),en=a(At,` to
directly upload your config to the Hub.`),At.forEach(s),Ks=d(e),V=l(e,"H2",{class:!0});var Go=i(V);oe=l(Go,"A",{id:!0,class:!0,href:!0});var ql=i(oe);Jt=l(ql,"SPAN",{});var Il=i(Jt);_(Ce.$$.fragment,Il),Il.forEach(s),ql.forEach(s),tn=d(Go),Qt=l(Go,"SPAN",{});var Nl=i(Qt);sn=a(Nl,"Writing a custom model"),Nl.forEach(s),Go.forEach(s),Vs=d(e),S=l(e,"P",{});var Tt=i(S);on=a(Tt,`Now that we have our ResNet configuration, we can go on writing the model. We will actually write two: one that
extracts the hidden features from a batch of images (like `),tt=l(Tt,"A",{href:!0});var xl=i(tt);an=a(xl,"BertModel"),xl.forEach(s),nn=a(Tt,`) and one that is suitable for image
classification (like `),Xt=l(Tt,"CODE",{});var Ol=i(Xt);rn=a(Ol,"BertModelForSequenceClassification"),Ol.forEach(s),ln=a(Tt,")."),Tt.forEach(s),Js=d(e),ae=l(e,"P",{});var Ko=i(ae);fn=a(Ko,`As we mentioned before, we\u2019ll only write a loose wrapper of the model to keep it simple for this example. The only
thing we need to do before writing this class is a map between the block types and actual block classes. Then the
model is defined from the configuration by passing everything to the `),Zt=l(Ko,"CODE",{});var Dl=i(Zt);cn=a(Dl,"ResNet"),Dl.forEach(s),dn=a(Ko," class:"),Ko.forEach(s),Qs=d(e),_(Pe.$$.fragment,e),Xs=d(e),st=l(e,"P",{});var Fl=i(st);hn=a(Fl,"For the model that will classify images, we just change the forward method:"),Fl.forEach(s),Zs=d(e),_(Ae.$$.fragment,e),eo=d(e),C=l(e,"P",{});var z=i(C);mn=a(z,"In both cases, notice how we inherit from "),es=l(z,"CODE",{});var Sl=i(es);un=a(Sl,"PreTrainedModel"),Sl.forEach(s),pn=a(z," and call the superclass initialization with the "),ts=l(z,"CODE",{});var Bl=i(ts);_n=a(Bl,"config"),Bl.forEach(s),gn=a(z,`
(a bit like when you write a regular `),ss=l(z,"CODE",{});var Hl=i(ss);yn=a(Hl,"torch.nn.Module"),Hl.forEach(s),wn=a(z,"). The line that sets the "),os=l(z,"CODE",{});var Wl=i(os);bn=a(Wl,"config_class"),Wl.forEach(s),vn=a(z,` is not mandatory, unless
you want to register your model with the auto classes (see last section).`),z.forEach(s),to=d(e),_(ne.$$.fragment,e),so=d(e),B=l(e,"P",{});var Mt=i(B);$n=a(Mt,`You can have your model return anything you want, but returning a dictionary like we did for
`),as=l(Mt,"CODE",{});var Ll=i(as);kn=a(Ll,"ResnetModelForImageClassification"),Ll.forEach(s),En=a(Mt,`, with the loss included when labels are passed, will make your model directly
usable inside the `),ot=l(Mt,"A",{href:!0});var zl=i(ot);jn=a(zl,"Trainer"),zl.forEach(s),Cn=a(Mt,` class. Using another output format is fine as long as you are planning on using your own
training loop or another library for training.`),Mt.forEach(s),oo=d(e),at=l(e,"P",{});var Yl=i(at);Pn=a(Yl,"Now that we have our model class, let\u2019s create one:"),Yl.forEach(s),ao=d(e),_(Te.$$.fragment,e),no=d(e),T=l(e,"P",{});var _e=i(T);An=a(_e,"Again, you can use any of the methods of "),nt=l(_e,"A",{href:!0});var Ul=i(nt);Tn=a(Ul,"PreTrainedModel"),Ul.forEach(s),Mn=a(_e,", like "),rt=l(_e,"A",{href:!0});var Gl=i(rt);Rn=a(Gl,"save_pretrained()"),Gl.forEach(s),qn=a(_e,` or
`),lt=l(_e,"A",{href:!0});var Kl=i(lt);In=a(Kl,"push_to_hub()"),Kl.forEach(s),Nn=a(_e,`. We will use the second in the next section, and see how to push the model weights
with the code of our model. But first, let\u2019s load some pretrained weights inside our model.`),_e.forEach(s),ro=d(e),it=l(e,"P",{});var Vl=i(it);xn=a(Vl,`In your own use case, you will probably be training your custom model on your own data. To go fast for this tutorial,
we will use the pretrained version of the resnet50d. Since our model is just a wrapper around it, it\u2019s going to be
easy to transfer those weights:`),Vl.forEach(s),lo=d(e),_(Me.$$.fragment,e),io=d(e),H=l(e,"P",{});var Rt=i(H);On=a(Rt,"Now let\u2019s see how to make sure that when we do "),ft=l(Rt,"A",{href:!0});var Jl=i(ft);Dn=a(Jl,"save_pretrained()"),Jl.forEach(s),Fn=a(Rt," or "),ct=l(Rt,"A",{href:!0});var Ql=i(ct);Sn=a(Ql,"push_to_hub()"),Ql.forEach(s),Bn=a(Rt,`, the
code of the model is saved.`),Rt.forEach(s),fo=d(e),J=l(e,"H2",{class:!0});var Vo=i(J);re=l(Vo,"A",{id:!0,class:!0,href:!0});var Xl=i(re);ns=l(Xl,"SPAN",{});var Zl=i(ns);_(Re.$$.fragment,Zl),Zl.forEach(s),Xl.forEach(s),Hn=d(Vo),rs=l(Vo,"SPAN",{});var ei=i(rs);Wn=a(ei,"Sending the code to the Hub"),ei.forEach(s),Vo.forEach(s),co=d(e),_(le.$$.fragment,e),ho=d(e),$=l(e,"P",{});var j=i($);Ln=a(j,"First, make sure your model is fully defined in a "),ls=l(j,"CODE",{});var ti=i(ls);zn=a(ti,".py"),ti.forEach(s),Yn=a(j,` file. It can rely on relative imports to some other files as
long as all the files are in the same directory (we don\u2019t support submodules for this feature yet). For our example,
we\u2019ll define a `),is=l(j,"CODE",{});var si=i(is);Un=a(si,"modeling_resnet.py"),si.forEach(s),Gn=a(j," file and a "),fs=l(j,"CODE",{});var oi=i(fs);Kn=a(oi,"configuration_resnet.py"),oi.forEach(s),Vn=a(j,` file in a folder of the current working
directory named `),cs=l(j,"CODE",{});var ai=i(cs);Jn=a(ai,"resnet_model"),ai.forEach(s),Qn=a(j,". The configuration file contains the code for "),ds=l(j,"CODE",{});var ni=i(ds);Xn=a(ni,"ResnetConfig"),ni.forEach(s),Zn=a(j,` and the modeling file
contains the code of `),hs=l(j,"CODE",{});var ri=i(hs);er=a(ri,"ResnetModel"),ri.forEach(s),tr=a(j," and "),ms=l(j,"CODE",{});var li=i(ms);sr=a(li,"ResnetModelForImageClassification"),li.forEach(s),or=a(j,"."),j.forEach(s),mo=d(e),_(qe.$$.fragment,e),uo=d(e),W=l(e,"P",{});var qt=i(W);ar=a(qt,"The "),us=l(qt,"CODE",{});var ii=i(us);nr=a(ii,"__init__.py"),ii.forEach(s),rr=a(qt," can be empty, it\u2019s just there so that Python detects "),ps=l(qt,"CODE",{});var fi=i(ps);lr=a(fi,"resnet_model"),fi.forEach(s),ir=a(qt," can be use as a module."),qt.forEach(s),po=d(e),_(ie.$$.fragment,e),_o=d(e),dt=l(e,"P",{});var ci=i(dt);fr=a(ci,"Note that you can re-use (or subclass) an existing configuration/model."),ci.forEach(s),go=d(e),ht=l(e,"P",{});var di=i(ht);cr=a(di,`To share your model with the community, follow those steps: first import the ResNet model and config from the newly
created files:`),di.forEach(s),yo=d(e),_(Ie.$$.fragment,e),wo=d(e),fe=l(e,"P",{});var Jo=i(fe);dr=a(Jo,"Then you have to tell the library you want to copy the code files of those objects when using the "),_s=l(Jo,"CODE",{});var hi=i(_s);hr=a(hi,"save_pretrained"),hi.forEach(s),mr=a(Jo,`
method and properly register them with a given Auto class (especially for models), just run:`),Jo.forEach(s),bo=d(e),_(Ne.$$.fragment,e),vo=d(e),ce=l(e,"P",{});var Qo=i(ce);ur=a(Qo,`Note that there is no need to specify an auto class for the configuration (there is only one auto class for them,
`),mt=l(Qo,"A",{href:!0});var mi=i(mt);pr=a(mi,"AutoConfig"),mi.forEach(s),_r=a(Qo,`) but it\u2019s different for models. Your custom model could be suitable for many different tasks, so you
have to specify which one of the auto classes is the correct one for your model.`),Qo.forEach(s),$o=d(e),ut=l(e,"P",{});var ui=i(ut);gr=a(ui,"Next, let\u2019s create the config and models as we did before:"),ui.forEach(s),ko=d(e),_(xe.$$.fragment,e),Eo=d(e),pt=l(e,"P",{});var pi=i(pt);yr=a(pi,"Now to send the model to the Hub, make sure you are logged in. Either run in your terminal:"),pi.forEach(s),jo=d(e),_(Oe.$$.fragment,e),Co=d(e),_t=l(e,"P",{});var _i=i(_t);wr=a(_i,"or from a notebook:"),_i.forEach(s),Po=d(e),_(De.$$.fragment,e),Ao=d(e),gt=l(e,"P",{});var gi=i(gt);br=a(gi,"You can then push to to your own namespace (or an organization you are a member of) like this:"),gi.forEach(s),To=d(e),_(Fe.$$.fragment,e),Mo=d(e),M=l(e,"P",{});var ge=i(M);vr=a(ge,`On top of the modeling weights and the configuration in json format, this also copied the modeling and
configuration `),gs=l(ge,"CODE",{});var yi=i(gs);$r=a(yi,".py"),yi.forEach(s),kr=a(ge," files in the folder "),ys=l(ge,"CODE",{});var wi=i(ys);Er=a(wi,"custom-resnet50d"),wi.forEach(s),jr=a(ge,` and uploaded the result to the Hub. You can check the result
in this `),Se=l(ge,"A",{href:!0,rel:!0});var bi=i(Se);Cr=a(bi,"model repo"),bi.forEach(s),Pr=a(ge,"."),ge.forEach(s),Ro=d(e),de=l(e,"P",{});var Xo=i(de);Ar=a(Xo,"See the "),yt=l(Xo,"A",{href:!0});var vi=i(yt);Tr=a(vi,"sharing tutorial"),vi.forEach(s),Mr=a(Xo," for more information on the push to Hub method."),Xo.forEach(s),qo=d(e),Q=l(e,"H2",{class:!0});var Zo=i(Q);he=l(Zo,"A",{id:!0,class:!0,href:!0});var $i=i(he);ws=l($i,"SPAN",{});var ki=i(ws);_(Be.$$.fragment,ki),ki.forEach(s),$i.forEach(s),Rr=d(Zo),bs=l(Zo,"SPAN",{});var Ei=i(bs);qr=a(Ei,"Using a model with custom code"),Ei.forEach(s),Zo.forEach(s),Io=d(e),R=l(e,"P",{});var ye=i(R);Ir=a(ye,`You can use any configuration, model or tokenizer with custom code files in its repository with the auto-classes and
the `),vs=l(ye,"CODE",{});var ji=i(vs);Nr=a(ji,"from_pretrained"),ji.forEach(s),xr=a(ye," method. All files and code uploaded to the Hub are scanned for malware (refer to the "),He=l(ye,"A",{href:!0,rel:!0});var Ci=i(He);Or=a(Ci,"Hub security"),Ci.forEach(s),Dr=a(ye,` documentation for more information), but you should still
review the model code and author to avoid executing malicious code on your machine. Set `),$s=l(ye,"CODE",{});var Pi=i($s);Fr=a(Pi,"trust_remote_code=True"),Pi.forEach(s),Sr=a(ye,` to use
a model with custom code:`),ye.forEach(s),No=d(e),_(We.$$.fragment,e),xo=d(e),me=l(e,"P",{});var ea=i(me);Br=a(ea,"It is also strongly encouraged to pass a commit hash as a "),ks=l(ea,"CODE",{});var Ai=i(ks);Hr=a(Ai,"revision"),Ai.forEach(s),Wr=a(ea,` to make sure the author of the models did not
update the code with some malicious new lines (unless you fully trust the authors of the models).`),ea.forEach(s),Oo=d(e),_(Le.$$.fragment,e),Do=d(e),wt=l(e,"P",{});var Ti=i(wt);Lr=a(Ti,`Note that when browsing the commit history of the model repo on the Hub, there is a button to easily copy the commit
hash of any commit.`),Ti.forEach(s),Fo=d(e),X=l(e,"H2",{class:!0});var ta=i(X);ue=l(ta,"A",{id:!0,class:!0,href:!0});var Mi=i(ue);Es=l(Mi,"SPAN",{});var Ri=i(Es);_(ze.$$.fragment,Ri),Ri.forEach(s),Mi.forEach(s),zr=d(ta),js=l(ta,"SPAN",{});var qi=i(js);Yr=a(qi,"Registering a model with custom code to the auto classes"),qi.forEach(s),ta.forEach(s),So=d(e),bt=l(e,"P",{});var Ii=i(bt);Ur=a(Ii,`If you are writing a library that extends \u{1F917} Transformers, you may want to extend the auto classes to include your own
model. This is different from pushing the code to the Hub in the sense that users will need to import your library to
get the custom models (contrarily to automatically downloading the model code from the Hub).`),Ii.forEach(s),Bo=d(e),L=l(e,"P",{});var It=i(L);Gr=a(It,"As long as your config has a "),Cs=l(It,"CODE",{});var Ni=i(Cs);Kr=a(Ni,"model_type"),Ni.forEach(s),Vr=a(It,` attribute that is different from existing model types, and that your model
classes have the right `),Ps=l(It,"CODE",{});var xi=i(Ps);Jr=a(xi,"config_class"),xi.forEach(s),Qr=a(It," attributes, you can just add them to the auto classes likes this:"),It.forEach(s),Ho=d(e),_(Ye.$$.fragment,e),Wo=d(e),q=l(e,"P",{});var we=i(q);Xr=a(we,"Note that the first argument used when registering your custom config to "),vt=l(we,"A",{href:!0});var Oi=i(vt);Zr=a(Oi,"AutoConfig"),Oi.forEach(s),el=a(we," needs to match the "),As=l(we,"CODE",{});var Di=i(As);tl=a(Di,"model_type"),Di.forEach(s),sl=a(we,`
of your custom config, and the first argument used when registering your custom models to any auto model class needs
to match the `),Ts=l(we,"CODE",{});var Fi=i(Ts);ol=a(Fi,"config_class"),Fi.forEach(s),al=a(we," of those models."),we.forEach(s),this.h()},h(){h(m,"name","hf:doc:metadata"),h(m,"content",JSON.stringify(Ki)),h(v,"id","sharing-custom-models"),h(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(v,"href","#sharing-custom-models"),h(u,"class","relative group"),h(be,"href","https://github.com/rwightman/pytorch-image-models/tree/master/timm"),h(be,"rel","nofollow"),h(Ve,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),h(te,"id","writing-a-custom-configuration"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#writing-a-custom-configuration"),h(U,"class","relative group"),h(Ze,"href","/docs/transformers/pr_16919/en/main_classes/configuration#transformers.PretrainedConfig"),h(et,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.push_to_hub"),h(oe,"id","writing-a-custom-model"),h(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oe,"href","#writing-a-custom-model"),h(V,"class","relative group"),h(tt,"href","/docs/transformers/pr_16919/en/model_doc/bert#transformers.BertModel"),h(ot,"href","/docs/transformers/pr_16919/en/main_classes/trainer#transformers.Trainer"),h(nt,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel"),h(rt,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(lt,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.push_to_hub"),h(ft,"href","/docs/transformers/pr_16919/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),h(ct,"href","/docs/transformers/pr_16919/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.push_to_hub"),h(re,"id","sending-the-code-to-the-hub"),h(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(re,"href","#sending-the-code-to-the-hub"),h(J,"class","relative group"),h(mt,"href","/docs/transformers/pr_16919/en/model_doc/auto#transformers.AutoConfig"),h(Se,"href","https://huggingface.co/sgugger/custom-resnet50d"),h(Se,"rel","nofollow"),h(yt,"href","model_sharing"),h(he,"id","using-a-model-with-custom-code"),h(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(he,"href","#using-a-model-with-custom-code"),h(Q,"class","relative group"),h(He,"href","https://huggingface.co/docs/hub/security#malware-scanning"),h(He,"rel","nofollow"),h(ue,"id","registering-a-model-with-custom-code-to-the-auto-classes"),h(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ue,"href","#registering-a-model-with-custom-code-to-the-auto-classes"),h(X,"class","relative group"),h(vt,"href","/docs/transformers/pr_16919/en/model_doc/auto#transformers.AutoConfig")},m(e,n){t(document.head,m),f(e,E,n),f(e,u,n),t(u,v),t(v,Y),g(P,Y,null),t(u,I),t(u,ee),t(ee,sa),f(e,qs,n),f(e,Ge,n),t(Ge,oa),f(e,Is,n),f(e,Ke,n),t(Ke,aa),f(e,Ns,n),f(e,N,n),t(N,na),t(N,be),t(be,ra),t(N,la),t(N,Ve),t(Ve,ia),t(N,fa),f(e,xs,n),f(e,U,n),t(U,te),t(te,xt),g(ve,xt,null),t(U,ca),t(U,Ot),t(Ot,da),f(e,Os,n),f(e,se,n),t(se,ha),t(se,Dt),t(Dt,ma),t(se,ua),f(e,Ds,n),f(e,Je,n),t(Je,pa),f(e,Fs,n),g($e,e,n),f(e,Ss,n),f(e,Qe,n),t(Qe,_a),f(e,Bs,n),f(e,x,n),t(x,ke),t(ke,ga),t(ke,Ft),t(Ft,ya),t(ke,wa),t(x,ba),t(x,G),t(G,va),t(G,St),t(St,$a),t(G,ka),t(G,Bt),t(Bt,Ea),t(G,ja),t(x,Ca),t(x,K),t(K,Pa),t(K,Ht),t(Ht,Aa),t(K,Ta),t(K,Wt),t(Wt,Ma),t(K,Ra),f(e,Hs,n),f(e,O,n),t(O,qa),t(O,Lt),t(Lt,Ia),t(O,Na),t(O,zt),t(zt,xa),t(O,Oa),f(e,Ws,n),f(e,D,n),t(D,Da),t(D,Yt),t(Yt,Fa),t(D,Sa),t(D,Ut),t(Ut,Ba),t(D,Ha),f(e,Ls,n),f(e,Xe,n),t(Xe,Wa),f(e,zs,n),g(Ee,e,n),f(e,Ys,n),f(e,A,n),t(A,La),t(A,Gt),t(Gt,za),t(A,Ya),t(A,Kt),t(Kt,Ua),t(A,Ga),t(A,Vt),t(Vt,Ka),t(A,Va),f(e,Us,n),g(je,e,n),f(e,Gs,n),f(e,F,n),t(F,Ja),t(F,Ze),t(Ze,Qa),t(F,Xa),t(F,et),t(et,Za),t(F,en),f(e,Ks,n),f(e,V,n),t(V,oe),t(oe,Jt),g(Ce,Jt,null),t(V,tn),t(V,Qt),t(Qt,sn),f(e,Vs,n),f(e,S,n),t(S,on),t(S,tt),t(tt,an),t(S,nn),t(S,Xt),t(Xt,rn),t(S,ln),f(e,Js,n),f(e,ae,n),t(ae,fn),t(ae,Zt),t(Zt,cn),t(ae,dn),f(e,Qs,n),g(Pe,e,n),f(e,Xs,n),f(e,st,n),t(st,hn),f(e,Zs,n),g(Ae,e,n),f(e,eo,n),f(e,C,n),t(C,mn),t(C,es),t(es,un),t(C,pn),t(C,ts),t(ts,_n),t(C,gn),t(C,ss),t(ss,yn),t(C,wn),t(C,os),t(os,bn),t(C,vn),f(e,to,n),g(ne,e,n),f(e,so,n),f(e,B,n),t(B,$n),t(B,as),t(as,kn),t(B,En),t(B,ot),t(ot,jn),t(B,Cn),f(e,oo,n),f(e,at,n),t(at,Pn),f(e,ao,n),g(Te,e,n),f(e,no,n),f(e,T,n),t(T,An),t(T,nt),t(nt,Tn),t(T,Mn),t(T,rt),t(rt,Rn),t(T,qn),t(T,lt),t(lt,In),t(T,Nn),f(e,ro,n),f(e,it,n),t(it,xn),f(e,lo,n),g(Me,e,n),f(e,io,n),f(e,H,n),t(H,On),t(H,ft),t(ft,Dn),t(H,Fn),t(H,ct),t(ct,Sn),t(H,Bn),f(e,fo,n),f(e,J,n),t(J,re),t(re,ns),g(Re,ns,null),t(J,Hn),t(J,rs),t(rs,Wn),f(e,co,n),g(le,e,n),f(e,ho,n),f(e,$,n),t($,Ln),t($,ls),t(ls,zn),t($,Yn),t($,is),t(is,Un),t($,Gn),t($,fs),t(fs,Kn),t($,Vn),t($,cs),t(cs,Jn),t($,Qn),t($,ds),t(ds,Xn),t($,Zn),t($,hs),t(hs,er),t($,tr),t($,ms),t(ms,sr),t($,or),f(e,mo,n),g(qe,e,n),f(e,uo,n),f(e,W,n),t(W,ar),t(W,us),t(us,nr),t(W,rr),t(W,ps),t(ps,lr),t(W,ir),f(e,po,n),g(ie,e,n),f(e,_o,n),f(e,dt,n),t(dt,fr),f(e,go,n),f(e,ht,n),t(ht,cr),f(e,yo,n),g(Ie,e,n),f(e,wo,n),f(e,fe,n),t(fe,dr),t(fe,_s),t(_s,hr),t(fe,mr),f(e,bo,n),g(Ne,e,n),f(e,vo,n),f(e,ce,n),t(ce,ur),t(ce,mt),t(mt,pr),t(ce,_r),f(e,$o,n),f(e,ut,n),t(ut,gr),f(e,ko,n),g(xe,e,n),f(e,Eo,n),f(e,pt,n),t(pt,yr),f(e,jo,n),g(Oe,e,n),f(e,Co,n),f(e,_t,n),t(_t,wr),f(e,Po,n),g(De,e,n),f(e,Ao,n),f(e,gt,n),t(gt,br),f(e,To,n),g(Fe,e,n),f(e,Mo,n),f(e,M,n),t(M,vr),t(M,gs),t(gs,$r),t(M,kr),t(M,ys),t(ys,Er),t(M,jr),t(M,Se),t(Se,Cr),t(M,Pr),f(e,Ro,n),f(e,de,n),t(de,Ar),t(de,yt),t(yt,Tr),t(de,Mr),f(e,qo,n),f(e,Q,n),t(Q,he),t(he,ws),g(Be,ws,null),t(Q,Rr),t(Q,bs),t(bs,qr),f(e,Io,n),f(e,R,n),t(R,Ir),t(R,vs),t(vs,Nr),t(R,xr),t(R,He),t(He,Or),t(R,Dr),t(R,$s),t($s,Fr),t(R,Sr),f(e,No,n),g(We,e,n),f(e,xo,n),f(e,me,n),t(me,Br),t(me,ks),t(ks,Hr),t(me,Wr),f(e,Oo,n),g(Le,e,n),f(e,Do,n),f(e,wt,n),t(wt,Lr),f(e,Fo,n),f(e,X,n),t(X,ue),t(ue,Es),g(ze,Es,null),t(X,zr),t(X,js),t(js,Yr),f(e,So,n),f(e,bt,n),t(bt,Ur),f(e,Bo,n),f(e,L,n),t(L,Gr),t(L,Cs),t(Cs,Kr),t(L,Vr),t(L,Ps),t(Ps,Jr),t(L,Qr),f(e,Ho,n),g(Ye,e,n),f(e,Wo,n),f(e,q,n),t(q,Xr),t(q,vt),t(vt,Zr),t(q,el),t(q,As),t(As,tl),t(q,sl),t(q,Ts),t(Ts,ol),t(q,al),Lo=!0},p(e,[n]){const Ue={};n&2&&(Ue.$$scope={dirty:n,ctx:e}),ne.$set(Ue);const Ms={};n&2&&(Ms.$$scope={dirty:n,ctx:e}),le.$set(Ms);const Rs={};n&2&&(Rs.$$scope={dirty:n,ctx:e}),ie.$set(Rs)},i(e){Lo||(y(P.$$.fragment,e),y(ve.$$.fragment,e),y($e.$$.fragment,e),y(Ee.$$.fragment,e),y(je.$$.fragment,e),y(Ce.$$.fragment,e),y(Pe.$$.fragment,e),y(Ae.$$.fragment,e),y(ne.$$.fragment,e),y(Te.$$.fragment,e),y(Me.$$.fragment,e),y(Re.$$.fragment,e),y(le.$$.fragment,e),y(qe.$$.fragment,e),y(ie.$$.fragment,e),y(Ie.$$.fragment,e),y(Ne.$$.fragment,e),y(xe.$$.fragment,e),y(Oe.$$.fragment,e),y(De.$$.fragment,e),y(Fe.$$.fragment,e),y(Be.$$.fragment,e),y(We.$$.fragment,e),y(Le.$$.fragment,e),y(ze.$$.fragment,e),y(Ye.$$.fragment,e),Lo=!0)},o(e){w(P.$$.fragment,e),w(ve.$$.fragment,e),w($e.$$.fragment,e),w(Ee.$$.fragment,e),w(je.$$.fragment,e),w(Ce.$$.fragment,e),w(Pe.$$.fragment,e),w(Ae.$$.fragment,e),w(ne.$$.fragment,e),w(Te.$$.fragment,e),w(Me.$$.fragment,e),w(Re.$$.fragment,e),w(le.$$.fragment,e),w(qe.$$.fragment,e),w(ie.$$.fragment,e),w(Ie.$$.fragment,e),w(Ne.$$.fragment,e),w(xe.$$.fragment,e),w(Oe.$$.fragment,e),w(De.$$.fragment,e),w(Fe.$$.fragment,e),w(Be.$$.fragment,e),w(We.$$.fragment,e),w(Le.$$.fragment,e),w(ze.$$.fragment,e),w(Ye.$$.fragment,e),Lo=!1},d(e){s(m),e&&s(E),e&&s(u),b(P),e&&s(qs),e&&s(Ge),e&&s(Is),e&&s(Ke),e&&s(Ns),e&&s(N),e&&s(xs),e&&s(U),b(ve),e&&s(Os),e&&s(se),e&&s(Ds),e&&s(Je),e&&s(Fs),b($e,e),e&&s(Ss),e&&s(Qe),e&&s(Bs),e&&s(x),e&&s(Hs),e&&s(O),e&&s(Ws),e&&s(D),e&&s(Ls),e&&s(Xe),e&&s(zs),b(Ee,e),e&&s(Ys),e&&s(A),e&&s(Us),b(je,e),e&&s(Gs),e&&s(F),e&&s(Ks),e&&s(V),b(Ce),e&&s(Vs),e&&s(S),e&&s(Js),e&&s(ae),e&&s(Qs),b(Pe,e),e&&s(Xs),e&&s(st),e&&s(Zs),b(Ae,e),e&&s(eo),e&&s(C),e&&s(to),b(ne,e),e&&s(so),e&&s(B),e&&s(oo),e&&s(at),e&&s(ao),b(Te,e),e&&s(no),e&&s(T),e&&s(ro),e&&s(it),e&&s(lo),b(Me,e),e&&s(io),e&&s(H),e&&s(fo),e&&s(J),b(Re),e&&s(co),b(le,e),e&&s(ho),e&&s($),e&&s(mo),b(qe,e),e&&s(uo),e&&s(W),e&&s(po),b(ie,e),e&&s(_o),e&&s(dt),e&&s(go),e&&s(ht),e&&s(yo),b(Ie,e),e&&s(wo),e&&s(fe),e&&s(bo),b(Ne,e),e&&s(vo),e&&s(ce),e&&s($o),e&&s(ut),e&&s(ko),b(xe,e),e&&s(Eo),e&&s(pt),e&&s(jo),b(Oe,e),e&&s(Co),e&&s(_t),e&&s(Po),b(De,e),e&&s(Ao),e&&s(gt),e&&s(To),b(Fe,e),e&&s(Mo),e&&s(M),e&&s(Ro),e&&s(de),e&&s(qo),e&&s(Q),b(Be),e&&s(Io),e&&s(R),e&&s(No),b(We,e),e&&s(xo),e&&s(me),e&&s(Oo),b(Le,e),e&&s(Do),e&&s(wt),e&&s(Fo),e&&s(X),b(ze),e&&s(So),e&&s(bt),e&&s(Bo),e&&s(L),e&&s(Ho),b(Ye,e),e&&s(Wo),e&&s(q)}}}const Ki={local:"sharing-custom-models",sections:[{local:"writing-a-custom-configuration",title:"Writing a custom configuration"},{local:"writing-a-custom-model",title:"Writing a custom model"},{local:"sending-the-code-to-the-hub",title:"Sending the code to the Hub"},{local:"using-a-model-with-custom-code",title:"Using a model with custom code"},{local:"registering-a-model-with-custom-code-to-the-auto-classes",title:"Registering a model with custom code to the auto classes"}],title:"Sharing custom models"};function Vi(Z){return Li(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ef extends Si{constructor(m){super();Bi(this,m,Vi,Gi,Hi,{})}}export{ef as default,Ki as metadata};
