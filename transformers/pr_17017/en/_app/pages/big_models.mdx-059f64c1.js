import{S as Us,i as Ks,s as Qs,e as n,k as d,w as _,t as i,M as Vs,c as l,d as t,m as h,a as p,x as w,h as r,b as m,F as s,g as o,y as g,q as y,o as v,B as $,v as Xs}from"../chunks/vendor-6b77c823.js";import{T as Zs}from"../chunks/Tip-39098574.js";import{I as us}from"../chunks/IconCopyLink-7a11ce68.js";import{C as z}from"../chunks/CodeBlock-3a8b25a8.js";function ea(Me){let f,P;return{c(){f=n("p"),P=i("Note that the randomly created model is initialized with \u201Cempty\u201D tensors, which take the space in memory without filling it (thus the random values are whatever was in this chunk of memory at a given time). The random initialization following the appropriate distribution for the kind of model/parameters instatiated (like a normal distribution for instance) is only performed after step 3 on the non-initialized weights, to be as fast as possible!")},l(c){f=l(c,"P",{});var u=p(f);P=r(u,"Note that the randomly created model is initialized with \u201Cempty\u201D tensors, which take the space in memory without filling it (thus the random values are whatever was in this chunk of memory at a given time). The random initialization following the appropriate distribution for the kind of model/parameters instatiated (like a normal distribution for instance) is only performed after step 3 on the non-initialized weights, to be as fast as possible!"),u.forEach(t)},m(c,u){o(c,f,u),s(f,P)},d(c){c&&t(f)}}}function ta(Me){let f,P,c,u,ce,O,_t,ue,wt,qe,Z,gt,Be,j,_e,yt,vt,we,$t,kt,ge,jt,Se,A,bt,ye,xt,Et,Ie,M,De,ee,Tt,Ce,E,q,ve,R,zt,$e,Pt,Ne,B,At,ke,Mt,qt,Le,S,Bt,je,St,It,Oe,G,Re,I,Dt,te,Ct,Nt,Ge,W,We,se,Lt,Fe,F,He,b,Ot,be,Rt,Gt,ae,Wt,Ft,Ye,H,Je,oe,Ht,Ue,ie,Yt,Ke,Y,Qe,re,Jt,Ve,J,Xe,D,Ut,xe,Kt,Qt,Ze,U,et,k,Vt,ne,Xt,Zt,Ee,es,ts,le,ss,as,tt,K,st,T,C,Te,Q,os,ze,is,at,N,rs,Pe,ns,ls,ot,x,ps,Ae,ds,hs,pe,ms,fs,it,V,rt,de,cs,nt;return O=new us({}),M=new Zs({props:{$$slots:{default:[ea]},$$scope:{ctx:Me}}}),R=new us({}),G=new z({props:{code:`from transformers import AutoModel

model = AutoModel.from_pretrained("bert-base-cased")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel

model = AutoModel.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)`}}),W=new z({props:{code:`import os
import tempfile

with tempfile.TemporaryDirectory() as tmp_dir:
    model.save_pretrained(tmp_dir)
    print(sorted(os.listdir(tmp_dir)))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> os
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tempfile

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir)
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-built_in">sorted</span>(os.listdir(tmp_dir)))
[<span class="hljs-string">&#x27;config.json&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model.bin&#x27;</span>]`}}),F=new z({props:{code:`with tempfile.TemporaryDirectory() as tmp_dir:
    model.save_pretrained(tmp_dir, max_shard_size="200MB")
    print(sorted(os.listdir(tmp_dir)))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir, max_shard_size=<span class="hljs-string">&quot;200MB&quot;</span>)
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-built_in">sorted</span>(os.listdir(tmp_dir)))
[<span class="hljs-string">&#x27;config.json&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model-00001-of-00003.bin&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model-00002-of-00003.bin&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model-00003-of-00003.bin&#x27;</span>, <span class="hljs-string">&#x27;pytorch_model.bin.index.json&#x27;</span>]`}}),H=new z({props:{code:`with tempfile.TemporaryDirectory() as tmp_dir:
    model.save_pretrained(tmp_dir, max_shard_size="200MB")
    new_model = AutoModel.from_pretrained(tmp_dir)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir, max_shard_size=<span class="hljs-string">&quot;200MB&quot;</span>)
<span class="hljs-meta">... </span>    new_model = AutoModel.from_pretrained(tmp_dir)`}}),Y=new z({props:{code:`import json

with tempfile.TemporaryDirectory() as tmp_dir:
    model.save_pretrained(tmp_dir, max_shard_size="200MB")
    with open(os.path.join(tmp_dir, "pytorch_model.bin.index.json"), "r") as f:
        index = json.load(f)

print(index.keys())`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> json

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir, max_shard_size=<span class="hljs-string">&quot;200MB&quot;</span>)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">with</span> <span class="hljs-built_in">open</span>(os.path.join(tmp_dir, <span class="hljs-string">&quot;pytorch_model.bin.index.json&quot;</span>), <span class="hljs-string">&quot;r&quot;</span>) <span class="hljs-keyword">as</span> f:
<span class="hljs-meta">... </span>        index = json.load(f)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(index.keys())
dict_keys([<span class="hljs-string">&#x27;metadata&#x27;</span>, <span class="hljs-string">&#x27;weight_map&#x27;</span>])`}}),J=new z({props:{code:'index["metadata"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>index[<span class="hljs-string">&quot;metadata&quot;</span>]
{<span class="hljs-string">&#x27;total_size&#x27;</span>: <span class="hljs-number">433245184</span>}`}}),U=new z({props:{code:'index["weight_map"]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>index[<span class="hljs-string">&quot;weight_map&quot;</span>]
{<span class="hljs-string">&#x27;embeddings.LayerNorm.bias&#x27;</span>: <span class="hljs-string">&#x27;pytorch_model-00001-of-00003.bin&#x27;</span>,
 <span class="hljs-string">&#x27;embeddings.LayerNorm.weight&#x27;</span>: <span class="hljs-string">&#x27;pytorch_model-00001-of-00003.bin&#x27;</span>,
 ...`}}),K=new z({props:{code:`from transformers.modeling_utils import load_sharded_checkpoint

with tempfile.TemporaryDirectory() as tmp_dir:
    model.save_pretrained(tmp_dir, max_shard_size="200MB")
    load_sharded_checkpoint(model, tmp_dir)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.modeling_utils <span class="hljs-keyword">import</span> load_sharded_checkpoint

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> tempfile.TemporaryDirectory() <span class="hljs-keyword">as</span> tmp_dir:
<span class="hljs-meta">... </span>    model.save_pretrained(tmp_dir, max_shard_size=<span class="hljs-string">&quot;200MB&quot;</span>)
<span class="hljs-meta">... </span>    load_sharded_checkpoint(model, tmp_dir)`}}),Q=new us({}),V=new z({props:{code:`from transformers import AutoModelForSequenceClas

model = AutoModel.from_pretrained("bert-base-cased", low_cpu_mem_usage=True)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClas

model = AutoModel.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, low_cpu_mem_usage=<span class="hljs-literal">True</span>)`}}),{c(){f=n("meta"),P=d(),c=n("h1"),u=n("a"),ce=n("span"),_(O.$$.fragment),_t=d(),ue=n("span"),wt=i("Instantiating a big model"),qe=d(),Z=n("p"),gt=i(`When you want to use a very big pretrained model, one challenge is to minimize the use of the RAM. The usual workflow
from PyTorch is:`),Be=d(),j=n("ol"),_e=n("li"),yt=i("Create your model with random weights."),vt=d(),we=n("li"),$t=i("Load your pretrained weights."),kt=d(),ge=n("li"),jt=i("Put those pretrained weights in your random model."),Se=d(),A=n("p"),bt=i("Step 1 and 2 both require a full version of the model in memory, which is not a problem in most cases, but if your model starts weighing several GigaBytes, those two copies can make you got our of RAM. Even worse, if you are using "),ye=n("code"),xt=i("torch.distributed"),Et=i(" to launch a distributed training, each process will load the pretrained model and store these two copies in RAM."),Ie=d(),_(M.$$.fragment),De=d(),ee=n("p"),Tt=i("In this guide, we explore the solutions Transformers offer to deal with this issue. Note that this is an area of active development, so the APIs explained here may change slightly in the future."),Ce=d(),E=n("h2"),q=n("a"),ve=n("span"),_(R.$$.fragment),zt=d(),$e=n("span"),Pt=i("Sharded checkpoints"),Ne=d(),B=n("p"),At=i("Since version 4.18.0, model checkpoints that end up taking more than 10GB of space are automatically sharded in smaller pieces. In terms of having one single checkpoint when you do "),ke=n("code"),Mt=i("model.save_pretrained(save_dir)"),qt=i(", you will end up with several partial checkpoints (each of which being of size < 10GB) and an index that maps parameter names to the files they are stored in."),Le=d(),S=n("p"),Bt=i("You can control the maximum size before sharding with the "),je=n("code"),St=i("max_shard_size"),It=i(" parameter, so for the sake of an example, we\u2019ll use a normal-size models with a small shard size: let\u2019s take a traditional BERT model."),Oe=d(),_(G.$$.fragment),Re=d(),I=n("p"),Dt=i("If you save it using "),te=n("a"),Ct=i("save_pretrained()"),Nt=i(", you will get a new folder with two files: the config of the model and its weights:"),Ge=d(),_(W.$$.fragment),We=d(),se=n("p"),Lt=i("Now let\u2019s use a maximum shard size of 200MB:"),Fe=d(),_(F.$$.fragment),He=d(),b=n("p"),Ot=i("On top of the configuration of the model, we see three different weights files, and an "),be=n("code"),Rt=i("index.json"),Gt=i(" file which is our index. A checkpoint like this can be fully reloaded using the "),ae=n("a"),Wt=i("from_pretrained()"),Ft=i(" method:"),Ye=d(),_(H.$$.fragment),Je=d(),oe=n("p"),Ht=i("The main advantage of doing this for big models is that during step 2 of the workflow shown above, each shard of the checkpoint is loaded after the previous one, capping the memory usage in RAM to the model size plus the size of the biggest shard."),Ue=d(),ie=n("p"),Yt=i("Beind the scenes, the index file is used to determine which keys are in the checkpoint, and where the corresponding weights are stored. We can load that index like any json and get a dictionary:"),Ke=d(),_(Y.$$.fragment),Qe=d(),re=n("p"),Jt=i("The metadata just consists of the total size of the model for now. We plan to add several other informations in the future:"),Ve=d(),_(J.$$.fragment),Xe=d(),D=n("p"),Ut=i("The weights map is the main part of this index, which maps each parameter name (as usually found in a PyTorch model "),xe=n("code"),Kt=i("state_dict"),Qt=i(") to the file it\u2019s stored in:"),Ze=d(),_(U.$$.fragment),et=d(),k=n("p"),Vt=i("If you want to directly load such a sharded checkpoint inside a model without using "),ne=n("a"),Xt=i("from_pretrained()"),Zt=i(" (like you would do "),Ee=n("code"),es=i("model.load_state_dict()"),ts=i(" for a full checkpoint) you should use "),le=n("a"),ss=i("load_sharded_checkpoint()"),as=i(":"),tt=d(),_(K.$$.fragment),st=d(),T=n("h2"),C=n("a"),Te=n("span"),_(Q.$$.fragment),os=d(),ze=n("span"),is=i("Low memory loading"),at=d(),N=n("p"),rs=i("Sharded checkpoints reduce the memory usage during step 2 of the worflow mentioned above, but when loadin a pretrained model, why keep the random weights in memory? The option "),Pe=n("code"),ns=i("low_cpu_mem_usage"),ls=i(" will destroy the weights of the randomly initialized model, then progressively load the weights inside, then perform a random initialization for potential missing weights (if you are loadding a model with a newly initialized head for a fine-tuning task for instance)."),ot=d(),x=n("p"),ps=i("It\u2019s very easy to use, just add "),Ae=n("code"),ds=i("low_cpu_mem_usage=True"),hs=i(" to your call to "),pe=n("a"),ms=i("from_pretrained()"),fs=i(":"),it=d(),_(V.$$.fragment),rt=d(),de=n("p"),cs=i("This can be used in conjunction with a sharded checkpoint."),this.h()},l(e){const a=Vs('[data-svelte="svelte-1phssyn"]',document.head);f=l(a,"META",{name:!0,content:!0}),a.forEach(t),P=h(e),c=l(e,"H1",{class:!0});var X=p(c);u=l(X,"A",{id:!0,class:!0,href:!0});var _s=p(u);ce=l(_s,"SPAN",{});var ws=p(ce);w(O.$$.fragment,ws),ws.forEach(t),_s.forEach(t),_t=h(X),ue=l(X,"SPAN",{});var gs=p(ue);wt=r(gs,"Instantiating a big model"),gs.forEach(t),X.forEach(t),qe=h(e),Z=l(e,"P",{});var ys=p(Z);gt=r(ys,`When you want to use a very big pretrained model, one challenge is to minimize the use of the RAM. The usual workflow
from PyTorch is:`),ys.forEach(t),Be=h(e),j=l(e,"OL",{});var he=p(j);_e=l(he,"LI",{});var vs=p(_e);yt=r(vs,"Create your model with random weights."),vs.forEach(t),vt=h(he),we=l(he,"LI",{});var $s=p(we);$t=r($s,"Load your pretrained weights."),$s.forEach(t),kt=h(he),ge=l(he,"LI",{});var ks=p(ge);jt=r(ks,"Put those pretrained weights in your random model."),ks.forEach(t),he.forEach(t),Se=h(e),A=l(e,"P",{});var lt=p(A);bt=r(lt,"Step 1 and 2 both require a full version of the model in memory, which is not a problem in most cases, but if your model starts weighing several GigaBytes, those two copies can make you got our of RAM. Even worse, if you are using "),ye=l(lt,"CODE",{});var js=p(ye);xt=r(js,"torch.distributed"),js.forEach(t),Et=r(lt," to launch a distributed training, each process will load the pretrained model and store these two copies in RAM."),lt.forEach(t),Ie=h(e),w(M.$$.fragment,e),De=h(e),ee=l(e,"P",{});var bs=p(ee);Tt=r(bs,"In this guide, we explore the solutions Transformers offer to deal with this issue. Note that this is an area of active development, so the APIs explained here may change slightly in the future."),bs.forEach(t),Ce=h(e),E=l(e,"H2",{class:!0});var pt=p(E);q=l(pt,"A",{id:!0,class:!0,href:!0});var xs=p(q);ve=l(xs,"SPAN",{});var Es=p(ve);w(R.$$.fragment,Es),Es.forEach(t),xs.forEach(t),zt=h(pt),$e=l(pt,"SPAN",{});var Ts=p($e);Pt=r(Ts,"Sharded checkpoints"),Ts.forEach(t),pt.forEach(t),Ne=h(e),B=l(e,"P",{});var dt=p(B);At=r(dt,"Since version 4.18.0, model checkpoints that end up taking more than 10GB of space are automatically sharded in smaller pieces. In terms of having one single checkpoint when you do "),ke=l(dt,"CODE",{});var zs=p(ke);Mt=r(zs,"model.save_pretrained(save_dir)"),zs.forEach(t),qt=r(dt,", you will end up with several partial checkpoints (each of which being of size < 10GB) and an index that maps parameter names to the files they are stored in."),dt.forEach(t),Le=h(e),S=l(e,"P",{});var ht=p(S);Bt=r(ht,"You can control the maximum size before sharding with the "),je=l(ht,"CODE",{});var Ps=p(je);St=r(Ps,"max_shard_size"),Ps.forEach(t),It=r(ht," parameter, so for the sake of an example, we\u2019ll use a normal-size models with a small shard size: let\u2019s take a traditional BERT model."),ht.forEach(t),Oe=h(e),w(G.$$.fragment,e),Re=h(e),I=l(e,"P",{});var mt=p(I);Dt=r(mt,"If you save it using "),te=l(mt,"A",{href:!0});var As=p(te);Ct=r(As,"save_pretrained()"),As.forEach(t),Nt=r(mt,", you will get a new folder with two files: the config of the model and its weights:"),mt.forEach(t),Ge=h(e),w(W.$$.fragment,e),We=h(e),se=l(e,"P",{});var Ms=p(se);Lt=r(Ms,"Now let\u2019s use a maximum shard size of 200MB:"),Ms.forEach(t),Fe=h(e),w(F.$$.fragment,e),He=h(e),b=l(e,"P",{});var me=p(b);Ot=r(me,"On top of the configuration of the model, we see three different weights files, and an "),be=l(me,"CODE",{});var qs=p(be);Rt=r(qs,"index.json"),qs.forEach(t),Gt=r(me," file which is our index. A checkpoint like this can be fully reloaded using the "),ae=l(me,"A",{href:!0});var Bs=p(ae);Wt=r(Bs,"from_pretrained()"),Bs.forEach(t),Ft=r(me," method:"),me.forEach(t),Ye=h(e),w(H.$$.fragment,e),Je=h(e),oe=l(e,"P",{});var Ss=p(oe);Ht=r(Ss,"The main advantage of doing this for big models is that during step 2 of the workflow shown above, each shard of the checkpoint is loaded after the previous one, capping the memory usage in RAM to the model size plus the size of the biggest shard."),Ss.forEach(t),Ue=h(e),ie=l(e,"P",{});var Is=p(ie);Yt=r(Is,"Beind the scenes, the index file is used to determine which keys are in the checkpoint, and where the corresponding weights are stored. We can load that index like any json and get a dictionary:"),Is.forEach(t),Ke=h(e),w(Y.$$.fragment,e),Qe=h(e),re=l(e,"P",{});var Ds=p(re);Jt=r(Ds,"The metadata just consists of the total size of the model for now. We plan to add several other informations in the future:"),Ds.forEach(t),Ve=h(e),w(J.$$.fragment,e),Xe=h(e),D=l(e,"P",{});var ft=p(D);Ut=r(ft,"The weights map is the main part of this index, which maps each parameter name (as usually found in a PyTorch model "),xe=l(ft,"CODE",{});var Cs=p(xe);Kt=r(Cs,"state_dict"),Cs.forEach(t),Qt=r(ft,") to the file it\u2019s stored in:"),ft.forEach(t),Ze=h(e),w(U.$$.fragment,e),et=h(e),k=l(e,"P",{});var L=p(k);Vt=r(L,"If you want to directly load such a sharded checkpoint inside a model without using "),ne=l(L,"A",{href:!0});var Ns=p(ne);Xt=r(Ns,"from_pretrained()"),Ns.forEach(t),Zt=r(L," (like you would do "),Ee=l(L,"CODE",{});var Ls=p(Ee);es=r(Ls,"model.load_state_dict()"),Ls.forEach(t),ts=r(L," for a full checkpoint) you should use "),le=l(L,"A",{href:!0});var Os=p(le);ss=r(Os,"load_sharded_checkpoint()"),Os.forEach(t),as=r(L,":"),L.forEach(t),tt=h(e),w(K.$$.fragment,e),st=h(e),T=l(e,"H2",{class:!0});var ct=p(T);C=l(ct,"A",{id:!0,class:!0,href:!0});var Rs=p(C);Te=l(Rs,"SPAN",{});var Gs=p(Te);w(Q.$$.fragment,Gs),Gs.forEach(t),Rs.forEach(t),os=h(ct),ze=l(ct,"SPAN",{});var Ws=p(ze);is=r(Ws,"Low memory loading"),Ws.forEach(t),ct.forEach(t),at=h(e),N=l(e,"P",{});var ut=p(N);rs=r(ut,"Sharded checkpoints reduce the memory usage during step 2 of the worflow mentioned above, but when loadin a pretrained model, why keep the random weights in memory? The option "),Pe=l(ut,"CODE",{});var Fs=p(Pe);ns=r(Fs,"low_cpu_mem_usage"),Fs.forEach(t),ls=r(ut," will destroy the weights of the randomly initialized model, then progressively load the weights inside, then perform a random initialization for potential missing weights (if you are loadding a model with a newly initialized head for a fine-tuning task for instance)."),ut.forEach(t),ot=h(e),x=l(e,"P",{});var fe=p(x);ps=r(fe,"It\u2019s very easy to use, just add "),Ae=l(fe,"CODE",{});var Hs=p(Ae);ds=r(Hs,"low_cpu_mem_usage=True"),Hs.forEach(t),hs=r(fe," to your call to "),pe=l(fe,"A",{href:!0});var Ys=p(pe);ms=r(Ys,"from_pretrained()"),Ys.forEach(t),fs=r(fe,":"),fe.forEach(t),it=h(e),w(V.$$.fragment,e),rt=h(e),de=l(e,"P",{});var Js=p(de);cs=r(Js,"This can be used in conjunction with a sharded checkpoint."),Js.forEach(t),this.h()},h(){m(f,"name","hf:doc:metadata"),m(f,"content",JSON.stringify(sa)),m(u,"id","instantiating-a-big-model"),m(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(u,"href","#instantiating-a-big-model"),m(c,"class","relative group"),m(q,"id","sharded-checkpoints"),m(q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(q,"href","#sharded-checkpoints"),m(E,"class","relative group"),m(te,"href","/docs/transformers/pr_17017/en/main_classes/model#transformers.PreTrainedModel.save_pretrained"),m(ae,"href","/docs/transformers/pr_17017/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),m(ne,"href","/docs/transformers/pr_17017/en/main_classes/model#transformers.PreTrainedModel.from_pretrained"),m(le,"href","/docs/transformers/pr_17017/en/main_classes/model#transformers.modeling_utils.load_sharded_checkpoint"),m(C,"id","low-memory-loading"),m(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(C,"href","#low-memory-loading"),m(T,"class","relative group"),m(pe,"href","/docs/transformers/pr_17017/en/main_classes/model#transformers.PreTrainedModel.from_pretrained")},m(e,a){s(document.head,f),o(e,P,a),o(e,c,a),s(c,u),s(u,ce),g(O,ce,null),s(c,_t),s(c,ue),s(ue,wt),o(e,qe,a),o(e,Z,a),s(Z,gt),o(e,Be,a),o(e,j,a),s(j,_e),s(_e,yt),s(j,vt),s(j,we),s(we,$t),s(j,kt),s(j,ge),s(ge,jt),o(e,Se,a),o(e,A,a),s(A,bt),s(A,ye),s(ye,xt),s(A,Et),o(e,Ie,a),g(M,e,a),o(e,De,a),o(e,ee,a),s(ee,Tt),o(e,Ce,a),o(e,E,a),s(E,q),s(q,ve),g(R,ve,null),s(E,zt),s(E,$e),s($e,Pt),o(e,Ne,a),o(e,B,a),s(B,At),s(B,ke),s(ke,Mt),s(B,qt),o(e,Le,a),o(e,S,a),s(S,Bt),s(S,je),s(je,St),s(S,It),o(e,Oe,a),g(G,e,a),o(e,Re,a),o(e,I,a),s(I,Dt),s(I,te),s(te,Ct),s(I,Nt),o(e,Ge,a),g(W,e,a),o(e,We,a),o(e,se,a),s(se,Lt),o(e,Fe,a),g(F,e,a),o(e,He,a),o(e,b,a),s(b,Ot),s(b,be),s(be,Rt),s(b,Gt),s(b,ae),s(ae,Wt),s(b,Ft),o(e,Ye,a),g(H,e,a),o(e,Je,a),o(e,oe,a),s(oe,Ht),o(e,Ue,a),o(e,ie,a),s(ie,Yt),o(e,Ke,a),g(Y,e,a),o(e,Qe,a),o(e,re,a),s(re,Jt),o(e,Ve,a),g(J,e,a),o(e,Xe,a),o(e,D,a),s(D,Ut),s(D,xe),s(xe,Kt),s(D,Qt),o(e,Ze,a),g(U,e,a),o(e,et,a),o(e,k,a),s(k,Vt),s(k,ne),s(ne,Xt),s(k,Zt),s(k,Ee),s(Ee,es),s(k,ts),s(k,le),s(le,ss),s(k,as),o(e,tt,a),g(K,e,a),o(e,st,a),o(e,T,a),s(T,C),s(C,Te),g(Q,Te,null),s(T,os),s(T,ze),s(ze,is),o(e,at,a),o(e,N,a),s(N,rs),s(N,Pe),s(Pe,ns),s(N,ls),o(e,ot,a),o(e,x,a),s(x,ps),s(x,Ae),s(Ae,ds),s(x,hs),s(x,pe),s(pe,ms),s(x,fs),o(e,it,a),g(V,e,a),o(e,rt,a),o(e,de,a),s(de,cs),nt=!0},p(e,[a]){const X={};a&2&&(X.$$scope={dirty:a,ctx:e}),M.$set(X)},i(e){nt||(y(O.$$.fragment,e),y(M.$$.fragment,e),y(R.$$.fragment,e),y(G.$$.fragment,e),y(W.$$.fragment,e),y(F.$$.fragment,e),y(H.$$.fragment,e),y(Y.$$.fragment,e),y(J.$$.fragment,e),y(U.$$.fragment,e),y(K.$$.fragment,e),y(Q.$$.fragment,e),y(V.$$.fragment,e),nt=!0)},o(e){v(O.$$.fragment,e),v(M.$$.fragment,e),v(R.$$.fragment,e),v(G.$$.fragment,e),v(W.$$.fragment,e),v(F.$$.fragment,e),v(H.$$.fragment,e),v(Y.$$.fragment,e),v(J.$$.fragment,e),v(U.$$.fragment,e),v(K.$$.fragment,e),v(Q.$$.fragment,e),v(V.$$.fragment,e),nt=!1},d(e){t(f),e&&t(P),e&&t(c),$(O),e&&t(qe),e&&t(Z),e&&t(Be),e&&t(j),e&&t(Se),e&&t(A),e&&t(Ie),$(M,e),e&&t(De),e&&t(ee),e&&t(Ce),e&&t(E),$(R),e&&t(Ne),e&&t(B),e&&t(Le),e&&t(S),e&&t(Oe),$(G,e),e&&t(Re),e&&t(I),e&&t(Ge),$(W,e),e&&t(We),e&&t(se),e&&t(Fe),$(F,e),e&&t(He),e&&t(b),e&&t(Ye),$(H,e),e&&t(Je),e&&t(oe),e&&t(Ue),e&&t(ie),e&&t(Ke),$(Y,e),e&&t(Qe),e&&t(re),e&&t(Ve),$(J,e),e&&t(Xe),e&&t(D),e&&t(Ze),$(U,e),e&&t(et),e&&t(k),e&&t(tt),$(K,e),e&&t(st),e&&t(T),$(Q),e&&t(at),e&&t(N),e&&t(ot),e&&t(x),e&&t(it),$(V,e),e&&t(rt),e&&t(de)}}}const sa={local:"instantiating-a-big-model",sections:[{local:"sharded-checkpoints",title:"Sharded checkpoints"},{local:"low-memory-loading",title:"Low memory loading"}],title:"Instantiating a big model"};function aa(Me){return Xs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class la extends Us{constructor(f){super();Ks(this,f,aa,ta,Qs,{})}}export{la as default,sa as metadata};
