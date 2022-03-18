import{S as fr,i as cr,s as dr,e as o,k as m,w as u,t as s,M as hr,c as r,d as t,m as f,a as p,x as g,h as l,b as c,N as mr,F as a,g as i,y as _,q as v,o as $,B as y}from"../chunks/vendor-aa873a46.js";import{T as ur}from"../chunks/Tip-f7f252ab.js";import{I as Ba}from"../chunks/IconCopyLink-d0ca3106.js";import{C as b}from"../chunks/CodeBlock-1f14baf3.js";function gr(oa){let h,q,d,w,T;return{c(){h=o("p"),q=s("Feel free to use other data augmentation libraries like "),d=o("a"),w=s("Albumentations"),T=s(". \u{1F917} Datasets can apply any custom function and transforms to an entire dataset!"),this.h()},l(E){h=r(E,"P",{});var I=p(h);q=l(I,"Feel free to use other data augmentation libraries like "),d=r(I,"A",{href:!0,rel:!0});var N=p(d);w=l(N,"Albumentations"),N.forEach(t),T=l(I,". \u{1F917} Datasets can apply any custom function and transforms to an entire dataset!"),I.forEach(t),this.h()},h(){c(d,"href","https://albumentations.ai/docs/"),c(d,"rel","nofollow")},m(E,I){i(E,h,I),a(h,q),a(h,d),a(d,w),a(h,T)},d(E){E&&t(h)}}}function _r(oa){let h,q,d,w,T,E,I,N,Xt,Na,J,Zt,Le,es,as,Ja,k,ra,ts,ss,ne,ls,na,os,rs,ns,pe,ps,Oe,is,ms,fs,ie,cs,ze,ds,hs,Sa,F,S,pa,me,us,ia,gs,Ra,Be,_s,Ua,R,fe,vs,ma,$s,ys,ws,fa,js,Ga,U,Es,ce,bs,ks,Ya,de,Ma,x,xs,Ne,qs,Is,ca,Cs,Ds,da,Ps,As,Ha,he,Ka,Je,Se,to,Qa,C,Ts,Re,Fs,Ls,Ue,Os,zs,Va,ue,Wa,D,Bs,ha,Ns,Js,ua,Ss,Rs,Xa,ge,Za,L,G,ga,_e,Us,_a,Gs,et,Y,Ys,va,Ms,Hs,at,ve,tt,P,Ks,$a,Qs,Vs,ya,Ws,Xs,st,$e,lt,M,Zs,wa,el,al,ot,ye,rt,O,ja,tl,sl,Ea,ll,ol,nt,z,H,ba,we,rl,ka,nl,pt,je,Ge,pl,il,it,K,ml,Ee,xa,fl,cl,mt,be,ft,j,dl,Ye,hl,ul,qa,gl,_l,Ia,vl,$l,Ca,yl,wl,ct,ke,dt,Q,jl,Me,El,bl,ht,xe,He,kl,xl,ut,V,Ke,Qe,Da,ql,Il,Cl,Ve,We,Pa,Dl,Pl,gt,W,Al,Xe,Tl,Fl,_t,B,X,Aa,qe,Ll,Ta,Ol,vt,Z,zl,Ie,Bl,Nl,$t,ee,yt,ae,Jl,Ce,Fa,Sl,Rl,wt,De,jt,te,Ul,La,Gl,Yl,Et,Pe,bt,se,Ml,Ze,Hl,Kl,kt,Ae,xt,le,Ql,Oa,Vl,Wl,qt,Te,It,ea,aa,so,Ct;return E=new Ba({}),me=new Ba({}),de=new b({props:{code:`from datasets import load_dataset, Image

dataset = load_dataset("food101", split="train[:100]")
dataset[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Image

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;food101&quot;</span>, split=<span class="hljs-string">&quot;train[:100]&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;image&#x27;</span>: &lt;PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=384x512 at <span class="hljs-number">0x7FC45AB5C590</span>&gt;,
 <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">6</span>}`}}),he=new b({props:{code:`from datasets import load_dataset, Image

dataset = load_dataset("food101", split="train[100:200]")
dataset[0]["image"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Image

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;food101&quot;</span>, split=<span class="hljs-string">&quot;train[100:200]&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]`}}),ue=new b({props:{code:`from datasets import load_dataset, Image

dataset = Dataset.from_dict({"image": ["path/to/image_1", "path/to/image_2", ..., "path/to/image_n"]}).cast_column("image", Image())
dataset[0]["image"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Image

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = Dataset.from_dict({<span class="hljs-string">&quot;image&quot;</span>: [<span class="hljs-string">&quot;path/to/image_1&quot;</span>, <span class="hljs-string">&quot;path/to/image_2&quot;</span>, ..., <span class="hljs-string">&quot;path/to/image_n&quot;</span>]}).cast_column(<span class="hljs-string">&quot;image&quot;</span>, Image())
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]`}}),ge=new b({props:{code:`dataset = load_dataset("food101", split="train[:100]").cast_column('image', Image(decode=False))`,highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;food101&quot;</span>, split=<span class="hljs-string">&quot;train[:100]&quot;</span>).cast_column(<span class="hljs-string">&#x27;image&#x27;</span>, Image(decode=<span class="hljs-literal">False</span>))'}}),_e=new Ba({}),ve=new b({props:{code:`folder/dog/golden_retriever.png
folder/dog/german_shepherd.png
folder/dog/chihuahua.png

folder/cat/maine_coon.png
folder/cat/bengal.png
folder/cat/birman.png`,highlighted:`folder<span class="hljs-regexp">/dog/g</span>olden_retriever.png
folder<span class="hljs-regexp">/dog/g</span>erman_shepherd.png
folder<span class="hljs-regexp">/dog/</span>chihuahua.png

folder<span class="hljs-regexp">/cat/m</span>aine_coon.png
folder<span class="hljs-regexp">/cat/</span>bengal.png
folder<span class="hljs-regexp">/cat/</span>birman.png`}}),$e=new b({props:{code:`from datasets import load_dataset
dataset = load_dataset("imagefolder", data_dir="/path/to/folder")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;imagefolder&quot;</span>, data_dir=<span class="hljs-string">&quot;/path/to/folder&quot;</span>)`}}),ye=new b({props:{code:'dataset = load_dataset("imagefolder", data_files="https://download.microsoft.com/download/3/E/1/3E1C3F21-ECDB-4869-8368-6DEBA77B919F/kagglecatsanddogs_3367a.zip", split="train")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;imagefolder&quot;</span>, data_files=<span class="hljs-string">&quot;https://download.microsoft.com/download/3/E/1/3E1C3F21-ECDB-4869-8368-6DEBA77B919F/kagglecatsanddogs_3367a.zip&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)'}}),we=new Ba({}),be=new b({props:{code:`def transforms(examples):
    examples["pixel_values"] = [image.convert("RGB").resize((100,100)) for image in examples["image"]]
    return examples`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;pixel_values&quot;</span>] = [image.convert(<span class="hljs-string">&quot;RGB&quot;</span>).resize((<span class="hljs-number">100</span>,<span class="hljs-number">100</span>)) <span class="hljs-keyword">for</span> image <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;image&quot;</span>]]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> examples`}}),ke=new b({props:{code:`dataset = dataset.map(transforms, remove_columns=["image"], batched=True)
dataset[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.<span class="hljs-built_in">map</span>(transforms, remove_columns=[<span class="hljs-string">&quot;image&quot;</span>], batched=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">6</span>,
 <span class="hljs-string">&#x27;pixel_values&#x27;</span>: &lt;PIL.PngImagePlugin.PngImageFile image mode=RGB size=100x100 at <span class="hljs-number">0x7F058237BB10</span>&gt;}`}}),qe=new Ba({}),ee=new ur({props:{$$slots:{default:[gr]},$$scope:{ctx:oa}}}),De=new b({props:{code:`from torchvision.transforms import Compose, ColorJitter, ToTensor

jitter = Compose(
    [
         ColorJitter(brightness=0.25, contrast=0.25, saturation=0.25, hue=0.7),
         ToTensor(),
    ]
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> torchvision.transforms <span class="hljs-keyword">import</span> Compose, ColorJitter, ToTensor

<span class="hljs-meta">&gt;&gt;&gt; </span>jitter = Compose(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>         ColorJitter(brightness=<span class="hljs-number">0.25</span>, contrast=<span class="hljs-number">0.25</span>, saturation=<span class="hljs-number">0.25</span>, hue=<span class="hljs-number">0.7</span>),
<span class="hljs-meta">... </span>         ToTensor(),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)`}}),Pe=new b({props:{code:`def transforms(examples):
    examples["pixel_values"] = [jitter(image.convert("RGB")) for image in examples["image"]]
    return examples`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;pixel_values&quot;</span>] = [jitter(image.convert(<span class="hljs-string">&quot;RGB&quot;</span>)) <span class="hljs-keyword">for</span> image <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;image&quot;</span>]]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> examples`}}),Ae=new b({props:{code:"dataset.set_transform(transforms)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.set_transform(transforms)'}}),Te=new b({props:{code:`import numpy as np
import matplotlib.pyplot as plt

img = dataset[0]["pixel_values"]
plt.imshow(img.permute(1, 2, 0))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> matplotlib.pyplot <span class="hljs-keyword">as</span> plt

<span class="hljs-meta">&gt;&gt;&gt; </span>img = dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;pixel_values&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>plt.imshow(img.permute(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">0</span>))`}}),{c(){h=o("meta"),q=m(),d=o("h1"),w=o("a"),T=o("span"),u(E.$$.fragment),I=m(),N=o("span"),Xt=s("Process image data"),Na=m(),J=o("p"),Zt=s("\u{1F917} Datasets support loading and processing images with the "),Le=o("a"),es=s("Image"),as=s(" feature. This guide will show you how to:"),Ja=m(),k=o("ul"),ra=o("li"),ts=s("Load an image dataset."),ss=m(),ne=o("li"),ls=s("Load a generic image dataset with "),na=o("code"),os=s("ImageFolder"),rs=s("."),ns=m(),pe=o("li"),ps=s("Use "),Oe=o("a"),is=s("map()"),ms=s(" to quickly apply transforms to an entire dataset."),fs=m(),ie=o("li"),cs=s("Add data augmentations to your images with "),ze=o("a"),ds=s("Dataset.set_transform()"),hs=s("."),Sa=m(),F=o("h2"),S=o("a"),pa=o("span"),u(me.$$.fragment),us=m(),ia=o("span"),gs=s("Image datasets"),Ra=m(),Be=o("p"),_s=s("The images in an image dataset are typically either a:"),Ua=m(),R=o("ul"),fe=o("li"),vs=s("PIL "),ma=o("code"),$s=s("image"),ys=s("."),ws=m(),fa=o("li"),js=s("Path to an image file you can load."),Ga=m(),U=o("p"),Es=s("For example, load the "),ce=o("a"),bs=s("Food-101"),ks=s(" dataset and take a look:"),Ya=m(),u(de.$$.fragment),Ma=m(),x=o("p"),xs=s("The "),Ne=o("a"),qs=s("Image"),Is=s(" feature automatically decodes the data from the "),ca=o("code"),Cs=s("image"),Ds=s(" column to return an image object. Now try and call the "),da=o("code"),Ps=s("image"),As=s(" column to see what the image is:"),Ha=m(),u(he.$$.fragment),Ka=m(),Je=o("p"),Se=o("img"),Qa=m(),C=o("p"),Ts=s("To load an image from its path, use the "),Re=o("a"),Fs=s("cast_column()"),Ls=s(" method. The "),Ue=o("a"),Os=s("Image"),zs=s(" feature will decode the data at the path to return an image object:"),Va=m(),u(ue.$$.fragment),Wa=m(),D=o("p"),Bs=s("You can also access the path and bytes of an image file by setting "),ha=o("code"),Ns=s("decode=False"),Js=s(" when you load a dataset. In this case, you will need to cast the "),ua=o("code"),Ss=s("image"),Rs=s(" column:"),Xa=m(),u(ge.$$.fragment),Za=m(),L=o("h2"),G=o("a"),ga=o("span"),u(_e.$$.fragment),Us=m(),_a=o("span"),Gs=s("ImageFolder"),et=m(),Y=o("p"),Ys=s("You can also load your image dataset with a "),va=o("code"),Ms=s("ImageFolder"),Hs=s(" dataset builder without writing a custom dataloader. Your image dataset structure should look like this:"),at=m(),u(ve.$$.fragment),tt=m(),P=o("p"),Ks=s("Then load your dataset by specifying "),$a=o("code"),Qs=s("imagefolder"),Vs=s(" and the directory of your dataset in "),ya=o("code"),Ws=s("data_dir"),Xs=s(":"),st=m(),u($e.$$.fragment),lt=m(),M=o("p"),Zs=s("Load remote datasets from their URLs with the "),wa=o("code"),el=s("data_files"),al=s(" parameter:"),ot=m(),u(ye.$$.fragment),rt=m(),O=o("p"),ja=o("code"),tl=s("ImageFolder"),sl=s(" will create a "),Ea=o("code"),ll=s("label"),ol=s(" column, and the label name is based on the directory name."),nt=m(),z=o("h2"),H=o("a"),ba=o("span"),u(we.$$.fragment),rl=m(),ka=o("span"),nl=s("Map"),pt=m(),je=o("p"),Ge=o("a"),pl=s("map()"),il=s(" can apply transforms over an entire dataset and it also generates a cache file."),it=m(),K=o("p"),ml=s("Create a simple "),Ee=o("a"),xa=o("code"),fl=s("Resize"),cl=s(" function:"),mt=m(),u(be.$$.fragment),ft=m(),j=o("p"),dl=s("Now "),Ye=o("a"),hl=s("map()"),ul=s(" the function over the entire dataset and set "),qa=o("code"),gl=s("batched=True"),_l=s(". The transform returns "),Ia=o("code"),vl=s("pixel_values"),$l=s(" as a cacheable "),Ca=o("code"),yl=s("PIL.Image"),wl=s(" object:"),ct=m(),u(ke.$$.fragment),dt=m(),Q=o("p"),jl=s("This saves time because you don\u2019t have to execute the same transform twice. It is best to use "),Me=o("a"),El=s("map()"),bl=s(" for operations you only run once per training - like resizing an image - instead of using it for operations executed for each epoch, like data augmentations."),ht=m(),xe=o("p"),He=o("a"),kl=s("map()"),xl=s(" takes up some memory, but you can reduce its memory requirements with the following parameters:"),ut=m(),V=o("ul"),Ke=o("li"),Qe=o("a"),Da=o("code"),ql=s("batch_size"),Il=s(" determines the number of examples that are processed in one call to the transform function."),Cl=m(),Ve=o("li"),We=o("a"),Pa=o("code"),Dl=s("writer_batch_size"),Pl=s(" determines the number of processed examples that are kept in memory before they are stored away."),gt=m(),W=o("p"),Al=s("Both parameter values default to 1000, which can be expensive if you are storing images. Lower the value to use less memory when calling "),Xe=o("a"),Tl=s("map()"),Fl=s("."),_t=m(),B=o("h2"),X=o("a"),Aa=o("span"),u(qe.$$.fragment),Ll=m(),Ta=o("span"),Ol=s("Data augmentation"),vt=m(),Z=o("p"),zl=s("Adding data augmentations to a dataset is common to prevent overfitting and achieve better performance. You can use any library or package you want to apply the augmentations. This guide will use the transforms from "),Ie=o("a"),Bl=s("torchvision"),Nl=s("."),$t=m(),u(ee.$$.fragment),yt=m(),ae=o("p"),Jl=s("Add the "),Ce=o("a"),Fa=o("code"),Sl=s("ColorJitter"),Rl=s(" transform to change the color properties of the image randomly:"),wt=m(),u(De.$$.fragment),jt=m(),te=o("p"),Ul=s("Create a function to apply the "),La=o("code"),Gl=s("ColorJitter"),Yl=s(" transform to an image:"),Et=m(),u(Pe.$$.fragment),bt=m(),se=o("p"),Ml=s("Then you can use the "),Ze=o("a"),Hl=s("set_transform()"),Kl=s(" function to apply the transform on-the-fly to consume less disk space. Use this function if you only need to access the examples once:"),kt=m(),u(Ae.$$.fragment),xt=m(),le=o("p"),Ql=s("Now visualize the results of the "),Oa=o("code"),Vl=s("ColorJitter"),Wl=s(" transform:"),qt=m(),u(Te.$$.fragment),It=m(),ea=o("p"),aa=o("img"),this.h()},l(e){const n=hr('[data-svelte="svelte-1phssyn"]',document.head);h=r(n,"META",{name:!0,content:!0}),n.forEach(t),q=f(e),d=r(e,"H1",{class:!0});var Fe=p(d);w=r(Fe,"A",{id:!0,class:!0,href:!0});var lo=p(w);T=r(lo,"SPAN",{});var oo=p(T);g(E.$$.fragment,oo),oo.forEach(t),lo.forEach(t),I=f(Fe),N=r(Fe,"SPAN",{});var ro=p(N);Xt=l(ro,"Process image data"),ro.forEach(t),Fe.forEach(t),Na=f(e),J=r(e,"P",{});var Dt=p(J);Zt=l(Dt,"\u{1F917} Datasets support loading and processing images with the "),Le=r(Dt,"A",{href:!0});var no=p(Le);es=l(no,"Image"),no.forEach(t),as=l(Dt," feature. This guide will show you how to:"),Dt.forEach(t),Ja=f(e),k=r(e,"UL",{});var oe=p(k);ra=r(oe,"LI",{});var po=p(ra);ts=l(po,"Load an image dataset."),po.forEach(t),ss=f(oe),ne=r(oe,"LI",{});var Pt=p(ne);ls=l(Pt,"Load a generic image dataset with "),na=r(Pt,"CODE",{});var io=p(na);os=l(io,"ImageFolder"),io.forEach(t),rs=l(Pt,"."),Pt.forEach(t),ns=f(oe),pe=r(oe,"LI",{});var At=p(pe);ps=l(At,"Use "),Oe=r(At,"A",{href:!0});var mo=p(Oe);is=l(mo,"map()"),mo.forEach(t),ms=l(At," to quickly apply transforms to an entire dataset."),At.forEach(t),fs=f(oe),ie=r(oe,"LI",{});var Tt=p(ie);cs=l(Tt,"Add data augmentations to your images with "),ze=r(Tt,"A",{href:!0});var fo=p(ze);ds=l(fo,"Dataset.set_transform()"),fo.forEach(t),hs=l(Tt,"."),Tt.forEach(t),oe.forEach(t),Sa=f(e),F=r(e,"H2",{class:!0});var Ft=p(F);S=r(Ft,"A",{id:!0,class:!0,href:!0});var co=p(S);pa=r(co,"SPAN",{});var ho=p(pa);g(me.$$.fragment,ho),ho.forEach(t),co.forEach(t),us=f(Ft),ia=r(Ft,"SPAN",{});var uo=p(ia);gs=l(uo,"Image datasets"),uo.forEach(t),Ft.forEach(t),Ra=f(e),Be=r(e,"P",{});var go=p(Be);_s=l(go,"The images in an image dataset are typically either a:"),go.forEach(t),Ua=f(e),R=r(e,"UL",{});var Lt=p(R);fe=r(Lt,"LI",{});var Ot=p(fe);vs=l(Ot,"PIL "),ma=r(Ot,"CODE",{});var _o=p(ma);$s=l(_o,"image"),_o.forEach(t),ys=l(Ot,"."),Ot.forEach(t),ws=f(Lt),fa=r(Lt,"LI",{});var vo=p(fa);js=l(vo,"Path to an image file you can load."),vo.forEach(t),Lt.forEach(t),Ga=f(e),U=r(e,"P",{});var zt=p(U);Es=l(zt,"For example, load the "),ce=r(zt,"A",{href:!0,rel:!0});var $o=p(ce);bs=l($o,"Food-101"),$o.forEach(t),ks=l(zt," dataset and take a look:"),zt.forEach(t),Ya=f(e),g(de.$$.fragment,e),Ma=f(e),x=r(e,"P",{});var re=p(x);xs=l(re,"The "),Ne=r(re,"A",{href:!0});var yo=p(Ne);qs=l(yo,"Image"),yo.forEach(t),Is=l(re," feature automatically decodes the data from the "),ca=r(re,"CODE",{});var wo=p(ca);Cs=l(wo,"image"),wo.forEach(t),Ds=l(re," column to return an image object. Now try and call the "),da=r(re,"CODE",{});var jo=p(da);Ps=l(jo,"image"),jo.forEach(t),As=l(re," column to see what the image is:"),re.forEach(t),Ha=f(e),g(he.$$.fragment,e),Ka=f(e),Je=r(e,"P",{});var Eo=p(Je);Se=r(Eo,"IMG",{src:!0,alt:!0}),Eo.forEach(t),Qa=f(e),C=r(e,"P",{});var ta=p(C);Ts=l(ta,"To load an image from its path, use the "),Re=r(ta,"A",{href:!0});var bo=p(Re);Fs=l(bo,"cast_column()"),bo.forEach(t),Ls=l(ta," method. The "),Ue=r(ta,"A",{href:!0});var ko=p(Ue);Os=l(ko,"Image"),ko.forEach(t),zs=l(ta," feature will decode the data at the path to return an image object:"),ta.forEach(t),Va=f(e),g(ue.$$.fragment,e),Wa=f(e),D=r(e,"P",{});var sa=p(D);Bs=l(sa,"You can also access the path and bytes of an image file by setting "),ha=r(sa,"CODE",{});var xo=p(ha);Ns=l(xo,"decode=False"),xo.forEach(t),Js=l(sa," when you load a dataset. In this case, you will need to cast the "),ua=r(sa,"CODE",{});var qo=p(ua);Ss=l(qo,"image"),qo.forEach(t),Rs=l(sa," column:"),sa.forEach(t),Xa=f(e),g(ge.$$.fragment,e),Za=f(e),L=r(e,"H2",{class:!0});var Bt=p(L);G=r(Bt,"A",{id:!0,class:!0,href:!0});var Io=p(G);ga=r(Io,"SPAN",{});var Co=p(ga);g(_e.$$.fragment,Co),Co.forEach(t),Io.forEach(t),Us=f(Bt),_a=r(Bt,"SPAN",{});var Do=p(_a);Gs=l(Do,"ImageFolder"),Do.forEach(t),Bt.forEach(t),et=f(e),Y=r(e,"P",{});var Nt=p(Y);Ys=l(Nt,"You can also load your image dataset with a "),va=r(Nt,"CODE",{});var Po=p(va);Ms=l(Po,"ImageFolder"),Po.forEach(t),Hs=l(Nt," dataset builder without writing a custom dataloader. Your image dataset structure should look like this:"),Nt.forEach(t),at=f(e),g(ve.$$.fragment,e),tt=f(e),P=r(e,"P",{});var la=p(P);Ks=l(la,"Then load your dataset by specifying "),$a=r(la,"CODE",{});var Ao=p($a);Qs=l(Ao,"imagefolder"),Ao.forEach(t),Vs=l(la," and the directory of your dataset in "),ya=r(la,"CODE",{});var To=p(ya);Ws=l(To,"data_dir"),To.forEach(t),Xs=l(la,":"),la.forEach(t),st=f(e),g($e.$$.fragment,e),lt=f(e),M=r(e,"P",{});var Jt=p(M);Zs=l(Jt,"Load remote datasets from their URLs with the "),wa=r(Jt,"CODE",{});var Fo=p(wa);el=l(Fo,"data_files"),Fo.forEach(t),al=l(Jt," parameter:"),Jt.forEach(t),ot=f(e),g(ye.$$.fragment,e),rt=f(e),O=r(e,"P",{});var za=p(O);ja=r(za,"CODE",{});var Lo=p(ja);tl=l(Lo,"ImageFolder"),Lo.forEach(t),sl=l(za," will create a "),Ea=r(za,"CODE",{});var Oo=p(Ea);ll=l(Oo,"label"),Oo.forEach(t),ol=l(za," column, and the label name is based on the directory name."),za.forEach(t),nt=f(e),z=r(e,"H2",{class:!0});var St=p(z);H=r(St,"A",{id:!0,class:!0,href:!0});var zo=p(H);ba=r(zo,"SPAN",{});var Bo=p(ba);g(we.$$.fragment,Bo),Bo.forEach(t),zo.forEach(t),rl=f(St),ka=r(St,"SPAN",{});var No=p(ka);nl=l(No,"Map"),No.forEach(t),St.forEach(t),pt=f(e),je=r(e,"P",{});var Xl=p(je);Ge=r(Xl,"A",{href:!0});var Jo=p(Ge);pl=l(Jo,"map()"),Jo.forEach(t),il=l(Xl," can apply transforms over an entire dataset and it also generates a cache file."),Xl.forEach(t),it=f(e),K=r(e,"P",{});var Rt=p(K);ml=l(Rt,"Create a simple "),Ee=r(Rt,"A",{href:!0,rel:!0});var So=p(Ee);xa=r(So,"CODE",{});var Ro=p(xa);fl=l(Ro,"Resize"),Ro.forEach(t),So.forEach(t),cl=l(Rt," function:"),Rt.forEach(t),mt=f(e),g(be.$$.fragment,e),ft=f(e),j=r(e,"P",{});var A=p(j);dl=l(A,"Now "),Ye=r(A,"A",{href:!0});var Uo=p(Ye);hl=l(Uo,"map()"),Uo.forEach(t),ul=l(A," the function over the entire dataset and set "),qa=r(A,"CODE",{});var Go=p(qa);gl=l(Go,"batched=True"),Go.forEach(t),_l=l(A,". The transform returns "),Ia=r(A,"CODE",{});var Yo=p(Ia);vl=l(Yo,"pixel_values"),Yo.forEach(t),$l=l(A," as a cacheable "),Ca=r(A,"CODE",{});var Mo=p(Ca);yl=l(Mo,"PIL.Image"),Mo.forEach(t),wl=l(A," object:"),A.forEach(t),ct=f(e),g(ke.$$.fragment,e),dt=f(e),Q=r(e,"P",{});var Ut=p(Q);jl=l(Ut,"This saves time because you don\u2019t have to execute the same transform twice. It is best to use "),Me=r(Ut,"A",{href:!0});var Ho=p(Me);El=l(Ho,"map()"),Ho.forEach(t),bl=l(Ut," for operations you only run once per training - like resizing an image - instead of using it for operations executed for each epoch, like data augmentations."),Ut.forEach(t),ht=f(e),xe=r(e,"P",{});var Zl=p(xe);He=r(Zl,"A",{href:!0});var Ko=p(He);kl=l(Ko,"map()"),Ko.forEach(t),xl=l(Zl," takes up some memory, but you can reduce its memory requirements with the following parameters:"),Zl.forEach(t),ut=f(e),V=r(e,"UL",{});var Gt=p(V);Ke=r(Gt,"LI",{});var eo=p(Ke);Qe=r(eo,"A",{href:!0});var Qo=p(Qe);Da=r(Qo,"CODE",{});var Vo=p(Da);ql=l(Vo,"batch_size"),Vo.forEach(t),Qo.forEach(t),Il=l(eo," determines the number of examples that are processed in one call to the transform function."),eo.forEach(t),Cl=f(Gt),Ve=r(Gt,"LI",{});var ao=p(Ve);We=r(ao,"A",{href:!0});var Wo=p(We);Pa=r(Wo,"CODE",{});var Xo=p(Pa);Dl=l(Xo,"writer_batch_size"),Xo.forEach(t),Wo.forEach(t),Pl=l(ao," determines the number of processed examples that are kept in memory before they are stored away."),ao.forEach(t),Gt.forEach(t),gt=f(e),W=r(e,"P",{});var Yt=p(W);Al=l(Yt,"Both parameter values default to 1000, which can be expensive if you are storing images. Lower the value to use less memory when calling "),Xe=r(Yt,"A",{href:!0});var Zo=p(Xe);Tl=l(Zo,"map()"),Zo.forEach(t),Fl=l(Yt,"."),Yt.forEach(t),_t=f(e),B=r(e,"H2",{class:!0});var Mt=p(B);X=r(Mt,"A",{id:!0,class:!0,href:!0});var er=p(X);Aa=r(er,"SPAN",{});var ar=p(Aa);g(qe.$$.fragment,ar),ar.forEach(t),er.forEach(t),Ll=f(Mt),Ta=r(Mt,"SPAN",{});var tr=p(Ta);Ol=l(tr,"Data augmentation"),tr.forEach(t),Mt.forEach(t),vt=f(e),Z=r(e,"P",{});var Ht=p(Z);zl=l(Ht,"Adding data augmentations to a dataset is common to prevent overfitting and achieve better performance. You can use any library or package you want to apply the augmentations. This guide will use the transforms from "),Ie=r(Ht,"A",{href:!0,rel:!0});var sr=p(Ie);Bl=l(sr,"torchvision"),sr.forEach(t),Nl=l(Ht,"."),Ht.forEach(t),$t=f(e),g(ee.$$.fragment,e),yt=f(e),ae=r(e,"P",{});var Kt=p(ae);Jl=l(Kt,"Add the "),Ce=r(Kt,"A",{href:!0,rel:!0});var lr=p(Ce);Fa=r(lr,"CODE",{});var or=p(Fa);Sl=l(or,"ColorJitter"),or.forEach(t),lr.forEach(t),Rl=l(Kt," transform to change the color properties of the image randomly:"),Kt.forEach(t),wt=f(e),g(De.$$.fragment,e),jt=f(e),te=r(e,"P",{});var Qt=p(te);Ul=l(Qt,"Create a function to apply the "),La=r(Qt,"CODE",{});var rr=p(La);Gl=l(rr,"ColorJitter"),rr.forEach(t),Yl=l(Qt," transform to an image:"),Qt.forEach(t),Et=f(e),g(Pe.$$.fragment,e),bt=f(e),se=r(e,"P",{});var Vt=p(se);Ml=l(Vt,"Then you can use the "),Ze=r(Vt,"A",{href:!0});var nr=p(Ze);Hl=l(nr,"set_transform()"),nr.forEach(t),Kl=l(Vt," function to apply the transform on-the-fly to consume less disk space. Use this function if you only need to access the examples once:"),Vt.forEach(t),kt=f(e),g(Ae.$$.fragment,e),xt=f(e),le=r(e,"P",{});var Wt=p(le);Ql=l(Wt,"Now visualize the results of the "),Oa=r(Wt,"CODE",{});var pr=p(Oa);Vl=l(pr,"ColorJitter"),pr.forEach(t),Wl=l(Wt," transform:"),Wt.forEach(t),qt=f(e),g(Te.$$.fragment,e),It=f(e),ea=r(e,"P",{});var ir=p(ea);aa=r(ir,"IMG",{src:!0,alt:!0}),ir.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(vr)),c(w,"id","process-image-data"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#process-image-data"),c(d,"class","relative group"),c(Le,"href","/docs/datasets/pr_3934/en/package_reference/main_classes#datasets.Image"),c(Oe,"href","/docs/datasets/pr_3934/en/package_reference/main_classes#datasets.Dataset.map"),c(ze,"href","/docs/datasets/pr_3934/en/package_reference/main_classes#datasets.Dataset.set_transform"),c(S,"id","image-datasets"),c(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(S,"href","#image-datasets"),c(F,"class","relative group"),c(ce,"href","https://huggingface.co/datasets/food101"),c(ce,"rel","nofollow"),c(Ne,"href","/docs/datasets/pr_3934/en/package_reference/main_classes#datasets.Image"),mr(Se.src,to="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/image_process_beignet.png")||c(Se,"src",to),c(Se,"alt","image_process_beignet"),c(Re,"href","/docs/datasets/pr_3934/en/package_reference/main_classes#datasets.Dataset.cast_column"),c(Ue,"href","/docs/datasets/pr_3934/en/package_reference/main_classes#datasets.Image"),c(G,"id","imagefolder"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#imagefolder"),c(L,"class","relative group"),c(H,"id","map"),c(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(H,"href","#map"),c(z,"class","relative group"),c(Ge,"href","/docs/datasets/pr_3934/en/package_reference/main_classes#datasets.Dataset.map"),c(Ee,"href","https://pytorch.org/vision/stable/generated/torchvision.transforms.Resize.html"),c(Ee,"rel","nofollow"),c(Ye,"href","/docs/datasets/pr_3934/en/package_reference/main_classes#datasets.Dataset.map"),c(Me,"href","/docs/datasets/pr_3934/en/package_reference/main_classes#datasets.Dataset.map"),c(He,"href","/docs/datasets/pr_3934/en/package_reference/main_classes#datasets.Dataset.map"),c(Qe,"href","./package_reference/main_classes#datasets.DatasetDict.map.batch_size"),c(We,"href","./package_reference/main_classes#datasets.DatasetDict.map.writer_batch_size"),c(Xe,"href","/docs/datasets/pr_3934/en/package_reference/main_classes#datasets.Dataset.map"),c(X,"id","data-augmentation"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#data-augmentation"),c(B,"class","relative group"),c(Ie,"href","https://pytorch.org/vision/stable/transforms.html"),c(Ie,"rel","nofollow"),c(Ce,"href","https://pytorch.org/vision/stable/transforms.html#torchvision.transforms.ColorJitter"),c(Ce,"rel","nofollow"),c(Ze,"href","/docs/datasets/pr_3934/en/package_reference/main_classes#datasets.Dataset.set_transform"),mr(aa.src,so="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/image_process_jitter.png")||c(aa,"src",so),c(aa,"alt","image_process_jitter")},m(e,n){a(document.head,h),i(e,q,n),i(e,d,n),a(d,w),a(w,T),_(E,T,null),a(d,I),a(d,N),a(N,Xt),i(e,Na,n),i(e,J,n),a(J,Zt),a(J,Le),a(Le,es),a(J,as),i(e,Ja,n),i(e,k,n),a(k,ra),a(ra,ts),a(k,ss),a(k,ne),a(ne,ls),a(ne,na),a(na,os),a(ne,rs),a(k,ns),a(k,pe),a(pe,ps),a(pe,Oe),a(Oe,is),a(pe,ms),a(k,fs),a(k,ie),a(ie,cs),a(ie,ze),a(ze,ds),a(ie,hs),i(e,Sa,n),i(e,F,n),a(F,S),a(S,pa),_(me,pa,null),a(F,us),a(F,ia),a(ia,gs),i(e,Ra,n),i(e,Be,n),a(Be,_s),i(e,Ua,n),i(e,R,n),a(R,fe),a(fe,vs),a(fe,ma),a(ma,$s),a(fe,ys),a(R,ws),a(R,fa),a(fa,js),i(e,Ga,n),i(e,U,n),a(U,Es),a(U,ce),a(ce,bs),a(U,ks),i(e,Ya,n),_(de,e,n),i(e,Ma,n),i(e,x,n),a(x,xs),a(x,Ne),a(Ne,qs),a(x,Is),a(x,ca),a(ca,Cs),a(x,Ds),a(x,da),a(da,Ps),a(x,As),i(e,Ha,n),_(he,e,n),i(e,Ka,n),i(e,Je,n),a(Je,Se),i(e,Qa,n),i(e,C,n),a(C,Ts),a(C,Re),a(Re,Fs),a(C,Ls),a(C,Ue),a(Ue,Os),a(C,zs),i(e,Va,n),_(ue,e,n),i(e,Wa,n),i(e,D,n),a(D,Bs),a(D,ha),a(ha,Ns),a(D,Js),a(D,ua),a(ua,Ss),a(D,Rs),i(e,Xa,n),_(ge,e,n),i(e,Za,n),i(e,L,n),a(L,G),a(G,ga),_(_e,ga,null),a(L,Us),a(L,_a),a(_a,Gs),i(e,et,n),i(e,Y,n),a(Y,Ys),a(Y,va),a(va,Ms),a(Y,Hs),i(e,at,n),_(ve,e,n),i(e,tt,n),i(e,P,n),a(P,Ks),a(P,$a),a($a,Qs),a(P,Vs),a(P,ya),a(ya,Ws),a(P,Xs),i(e,st,n),_($e,e,n),i(e,lt,n),i(e,M,n),a(M,Zs),a(M,wa),a(wa,el),a(M,al),i(e,ot,n),_(ye,e,n),i(e,rt,n),i(e,O,n),a(O,ja),a(ja,tl),a(O,sl),a(O,Ea),a(Ea,ll),a(O,ol),i(e,nt,n),i(e,z,n),a(z,H),a(H,ba),_(we,ba,null),a(z,rl),a(z,ka),a(ka,nl),i(e,pt,n),i(e,je,n),a(je,Ge),a(Ge,pl),a(je,il),i(e,it,n),i(e,K,n),a(K,ml),a(K,Ee),a(Ee,xa),a(xa,fl),a(K,cl),i(e,mt,n),_(be,e,n),i(e,ft,n),i(e,j,n),a(j,dl),a(j,Ye),a(Ye,hl),a(j,ul),a(j,qa),a(qa,gl),a(j,_l),a(j,Ia),a(Ia,vl),a(j,$l),a(j,Ca),a(Ca,yl),a(j,wl),i(e,ct,n),_(ke,e,n),i(e,dt,n),i(e,Q,n),a(Q,jl),a(Q,Me),a(Me,El),a(Q,bl),i(e,ht,n),i(e,xe,n),a(xe,He),a(He,kl),a(xe,xl),i(e,ut,n),i(e,V,n),a(V,Ke),a(Ke,Qe),a(Qe,Da),a(Da,ql),a(Ke,Il),a(V,Cl),a(V,Ve),a(Ve,We),a(We,Pa),a(Pa,Dl),a(Ve,Pl),i(e,gt,n),i(e,W,n),a(W,Al),a(W,Xe),a(Xe,Tl),a(W,Fl),i(e,_t,n),i(e,B,n),a(B,X),a(X,Aa),_(qe,Aa,null),a(B,Ll),a(B,Ta),a(Ta,Ol),i(e,vt,n),i(e,Z,n),a(Z,zl),a(Z,Ie),a(Ie,Bl),a(Z,Nl),i(e,$t,n),_(ee,e,n),i(e,yt,n),i(e,ae,n),a(ae,Jl),a(ae,Ce),a(Ce,Fa),a(Fa,Sl),a(ae,Rl),i(e,wt,n),_(De,e,n),i(e,jt,n),i(e,te,n),a(te,Ul),a(te,La),a(La,Gl),a(te,Yl),i(e,Et,n),_(Pe,e,n),i(e,bt,n),i(e,se,n),a(se,Ml),a(se,Ze),a(Ze,Hl),a(se,Kl),i(e,kt,n),_(Ae,e,n),i(e,xt,n),i(e,le,n),a(le,Ql),a(le,Oa),a(Oa,Vl),a(le,Wl),i(e,qt,n),_(Te,e,n),i(e,It,n),i(e,ea,n),a(ea,aa),Ct=!0},p(e,[n]){const Fe={};n&2&&(Fe.$$scope={dirty:n,ctx:e}),ee.$set(Fe)},i(e){Ct||(v(E.$$.fragment,e),v(me.$$.fragment,e),v(de.$$.fragment,e),v(he.$$.fragment,e),v(ue.$$.fragment,e),v(ge.$$.fragment,e),v(_e.$$.fragment,e),v(ve.$$.fragment,e),v($e.$$.fragment,e),v(ye.$$.fragment,e),v(we.$$.fragment,e),v(be.$$.fragment,e),v(ke.$$.fragment,e),v(qe.$$.fragment,e),v(ee.$$.fragment,e),v(De.$$.fragment,e),v(Pe.$$.fragment,e),v(Ae.$$.fragment,e),v(Te.$$.fragment,e),Ct=!0)},o(e){$(E.$$.fragment,e),$(me.$$.fragment,e),$(de.$$.fragment,e),$(he.$$.fragment,e),$(ue.$$.fragment,e),$(ge.$$.fragment,e),$(_e.$$.fragment,e),$(ve.$$.fragment,e),$($e.$$.fragment,e),$(ye.$$.fragment,e),$(we.$$.fragment,e),$(be.$$.fragment,e),$(ke.$$.fragment,e),$(qe.$$.fragment,e),$(ee.$$.fragment,e),$(De.$$.fragment,e),$(Pe.$$.fragment,e),$(Ae.$$.fragment,e),$(Te.$$.fragment,e),Ct=!1},d(e){t(h),e&&t(q),e&&t(d),y(E),e&&t(Na),e&&t(J),e&&t(Ja),e&&t(k),e&&t(Sa),e&&t(F),y(me),e&&t(Ra),e&&t(Be),e&&t(Ua),e&&t(R),e&&t(Ga),e&&t(U),e&&t(Ya),y(de,e),e&&t(Ma),e&&t(x),e&&t(Ha),y(he,e),e&&t(Ka),e&&t(Je),e&&t(Qa),e&&t(C),e&&t(Va),y(ue,e),e&&t(Wa),e&&t(D),e&&t(Xa),y(ge,e),e&&t(Za),e&&t(L),y(_e),e&&t(et),e&&t(Y),e&&t(at),y(ve,e),e&&t(tt),e&&t(P),e&&t(st),y($e,e),e&&t(lt),e&&t(M),e&&t(ot),y(ye,e),e&&t(rt),e&&t(O),e&&t(nt),e&&t(z),y(we),e&&t(pt),e&&t(je),e&&t(it),e&&t(K),e&&t(mt),y(be,e),e&&t(ft),e&&t(j),e&&t(ct),y(ke,e),e&&t(dt),e&&t(Q),e&&t(ht),e&&t(xe),e&&t(ut),e&&t(V),e&&t(gt),e&&t(W),e&&t(_t),e&&t(B),y(qe),e&&t(vt),e&&t(Z),e&&t($t),y(ee,e),e&&t(yt),e&&t(ae),e&&t(wt),y(De,e),e&&t(jt),e&&t(te),e&&t(Et),y(Pe,e),e&&t(bt),e&&t(se),e&&t(kt),y(Ae,e),e&&t(xt),e&&t(le),e&&t(qt),y(Te,e),e&&t(It),e&&t(ea)}}}const vr={local:"process-image-data",sections:[{local:"image-datasets",title:"Image datasets"},{local:"imagefolder",title:"ImageFolder"},{local:"map",title:"Map"},{local:"data-augmentation",title:"Data augmentation"}],title:"Process image data"};function $r(oa,h,q){let{fw:d}=h;return oa.$$set=w=>{"fw"in w&&q(0,d=w.fw)},[d]}class br extends fr{constructor(h){super();cr(this,h,$r,_r,dr,{fw:0})}}export{br as default,vr as metadata};
