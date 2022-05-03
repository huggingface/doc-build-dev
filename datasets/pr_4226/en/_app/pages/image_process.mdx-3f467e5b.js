import{S as Nr,i as zr,s as Br,e as o,k as m,w as d,t as s,M as Sr,c as r,d as t,m as f,a as i,x as h,h as l,b as c,N as Or,F as a,g as p,y as u,q as g,o as _,B as v,v as Jr}from"../chunks/vendor-8138ceec.js";import{T as Rr}from"../chunks/Tip-12722dfc.js";import{I as da}from"../chunks/IconCopyLink-2dd3a6ac.js";import{C as E}from"../chunks/CodeBlock-fc89709f.js";function Ur(Ka){let $,S,w,b,T;return{c(){$=o("p"),S=s("Feel free to use other data augmentation libraries like "),w=o("a"),b=s("Albumentations"),T=s(". \u{1F917} Datasets can apply any custom function and transforms to an entire dataset!"),this.h()},l(j){$=r(j,"P",{});var I=i($);S=l(I,"Feel free to use other data augmentation libraries like "),w=r(I,"A",{href:!0,rel:!0});var J=i(w);b=l(J,"Albumentations"),J.forEach(t),T=l(I,". \u{1F917} Datasets can apply any custom function and transforms to an entire dataset!"),I.forEach(t),this.h()},h(){c(w,"href","https://albumentations.ai/docs/"),c(w,"rel","nofollow")},m(j,I){p(j,$,I),a($,S),a($,w),a(w,b),a($,T)},d(j){j&&t($)}}}function Gr(Ka){let $,S,w,b,T,j,I,J,cs,Qa,R,ds,Se,hs,us,Va,k,ha,gs,_s,me,vs,ua,$s,ws,ys,fe,Es,Je,js,bs,ks,ce,xs,Re,Is,Ds,Wa,L,U,ga,de,qs,_a,Ps,Xa,D,As,Ue,Cs,Ts,Ge,Ls,Fs,Za,he,et,F,G,va,ue,Os,$a,Ns,at,Me,zs,tt,M,ge,Bs,wa,Ss,Js,Rs,ya,Us,st,Y,Gs,_e,Ms,Ys,lt,ve,ot,x,Hs,Ye,Ks,Qs,Ea,Vs,Ws,ja,Xs,Zs,rt,$e,nt,He,Ke,bo,it,q,el,Qe,al,tl,Ve,sl,ll,pt,we,mt,P,ol,ba,rl,nl,ka,il,pl,ft,ye,ct,O,H,xa,Ee,ml,Ia,fl,dt,K,cl,Da,dl,hl,ht,je,ut,A,ul,qa,gl,_l,Pa,vl,$l,gt,be,_t,Q,wl,Aa,yl,El,vt,ke,$t,N,Ca,jl,bl,Ta,kl,xl,wt,z,V,La,xe,Il,Fa,Dl,yt,Ie,We,ql,Pl,Et,W,Al,De,Oa,Cl,Tl,jt,qe,bt,y,Ll,Xe,Fl,Ol,Na,Nl,zl,za,Bl,Sl,Ba,Jl,Rl,kt,Pe,xt,X,Ul,Ze,Gl,Ml,It,Ae,ea,Yl,Hl,Dt,Z,aa,ta,Sa,Kl,Ql,Vl,sa,la,Ja,Wl,Xl,qt,ee,Zl,oa,eo,ao,Pt,B,ae,Ra,Ce,to,Ua,so,At,te,lo,Te,oo,ro,Ct,se,Tt,le,no,Le,Ga,io,po,Lt,Fe,Ft,oe,mo,Ma,fo,co,Ot,Oe,Nt,re,ho,ra,uo,go,zt,Ne,Bt,ne,_o,Ya,vo,$o,St,ze,Jt,na,ia,ko,Rt;return j=new da({}),de=new da({}),he=new E({props:{code:"pip install datasets[vision]",highlighted:"pip install datasets[vision]"}}),ue=new da({}),ve=new E({props:{code:`from datasets import load_dataset, Image

dataset = load_dataset("food101", split="train[:100]")
dataset[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Image

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;food101&quot;</span>, split=<span class="hljs-string">&quot;train[:100]&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;image&#x27;</span>: &lt;PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=384x512 at <span class="hljs-number">0x7FC45AB5C590</span>&gt;,
 <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">6</span>}`}}),$e=new E({props:{code:`from datasets import load_dataset, Image

dataset = load_dataset("food101", split="train[100:200]")
dataset[0]["image"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Image

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;food101&quot;</span>, split=<span class="hljs-string">&quot;train[100:200]&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]`}}),we=new E({props:{code:`from datasets import load_dataset, Image

dataset = Dataset.from_dict({"image": ["path/to/image_1", "path/to/image_2", ..., "path/to/image_n"]}).cast_column("image", Image())
dataset[0]["image"]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset, Image

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = Dataset.from_dict({<span class="hljs-string">&quot;image&quot;</span>: [<span class="hljs-string">&quot;path/to/image_1&quot;</span>, <span class="hljs-string">&quot;path/to/image_2&quot;</span>, ..., <span class="hljs-string">&quot;path/to/image_n&quot;</span>]}).cast_column(<span class="hljs-string">&quot;image&quot;</span>, Image())
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;image&quot;</span>]`}}),ye=new E({props:{code:`dataset = load_dataset("food101", split="train[:100]").cast_column('image', Image(decode=False))`,highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;food101&quot;</span>, split=<span class="hljs-string">&quot;train[:100]&quot;</span>).cast_column(<span class="hljs-string">&#x27;image&#x27;</span>, Image(decode=<span class="hljs-literal">False</span>))'}}),Ee=new da({}),je=new E({props:{code:`folder/dog/golden_retriever.png
folder/dog/german_shepherd.png
folder/dog/chihuahua.png

folder/cat/maine_coon.png
folder/cat/bengal.png
folder/cat/birman.png`,highlighted:`folder<span class="hljs-regexp">/dog/g</span>olden_retriever.png
folder<span class="hljs-regexp">/dog/g</span>erman_shepherd.png
folder<span class="hljs-regexp">/dog/</span>chihuahua.png

folder<span class="hljs-regexp">/cat/m</span>aine_coon.png
folder<span class="hljs-regexp">/cat/</span>bengal.png
folder<span class="hljs-regexp">/cat/</span>birman.png`}}),be=new E({props:{code:`from datasets import load_dataset
dataset = load_dataset("imagefolder", data_dir="/path/to/folder")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;imagefolder&quot;</span>, data_dir=<span class="hljs-string">&quot;/path/to/folder&quot;</span>)`}}),ke=new E({props:{code:'dataset = load_dataset("imagefolder", data_files="https://download.microsoft.com/download/3/E/1/3E1C3F21-ECDB-4869-8368-6DEBA77B919F/kagglecatsanddogs_3367a.zip", split="train")',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;imagefolder&quot;</span>, data_files=<span class="hljs-string">&quot;https://download.microsoft.com/download/3/E/1/3E1C3F21-ECDB-4869-8368-6DEBA77B919F/kagglecatsanddogs_3367a.zip&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)'}}),xe=new da({}),qe=new E({props:{code:`def transforms(examples):
    examples["pixel_values"] = [image.convert("RGB").resize((100,100)) for image in examples["image"]]
    return examples`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;pixel_values&quot;</span>] = [image.convert(<span class="hljs-string">&quot;RGB&quot;</span>).resize((<span class="hljs-number">100</span>,<span class="hljs-number">100</span>)) <span class="hljs-keyword">for</span> image <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;image&quot;</span>]]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> examples`}}),Pe=new E({props:{code:`dataset = dataset.map(transforms, remove_columns=["image"], batched=True)
dataset[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.<span class="hljs-built_in">map</span>(transforms, remove_columns=[<span class="hljs-string">&quot;image&quot;</span>], batched=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset[<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">6</span>,
 <span class="hljs-string">&#x27;pixel_values&#x27;</span>: &lt;PIL.PngImagePlugin.PngImageFile image mode=RGB size=100x100 at <span class="hljs-number">0x7F058237BB10</span>&gt;}`}}),Ce=new da({}),se=new Rr({props:{$$slots:{default:[Ur]},$$scope:{ctx:Ka}}}),Fe=new E({props:{code:`from torchvision.transforms import Compose, ColorJitter, ToTensor

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
<span class="hljs-meta">... </span>)`}}),Oe=new E({props:{code:`def transforms(examples):
    examples["pixel_values"] = [jitter(image.convert("RGB")) for image in examples["image"]]
    return examples`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">transforms</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    examples[<span class="hljs-string">&quot;pixel_values&quot;</span>] = [jitter(image.convert(<span class="hljs-string">&quot;RGB&quot;</span>)) <span class="hljs-keyword">for</span> image <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;image&quot;</span>]]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> examples`}}),Ne=new E({props:{code:"dataset.set_transform(transforms)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>dataset.set_transform(transforms)'}}),ze=new E({props:{code:`import numpy as np
import matplotlib.pyplot as plt

img = dataset[0]["pixel_values"]
plt.imshow(img.permute(1, 2, 0))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> matplotlib.pyplot <span class="hljs-keyword">as</span> plt

<span class="hljs-meta">&gt;&gt;&gt; </span>img = dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;pixel_values&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>plt.imshow(img.permute(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">0</span>))`}}),{c(){$=o("meta"),S=m(),w=o("h1"),b=o("a"),T=o("span"),d(j.$$.fragment),I=m(),J=o("span"),cs=s("Process image data"),Qa=m(),R=o("p"),ds=s("\u{1F917} Datasets support loading and processing images with the "),Se=o("a"),hs=s("Image"),us=s(" feature. This guide will show you how to:"),Va=m(),k=o("ul"),ha=o("li"),gs=s("Load an image dataset."),_s=m(),me=o("li"),vs=s("Load a generic image dataset with "),ua=o("code"),$s=s("ImageFolder"),ws=s("."),ys=m(),fe=o("li"),Es=s("Use "),Je=o("a"),js=s("Dataset.map()"),bs=s(" to quickly apply transforms to an entire dataset."),ks=m(),ce=o("li"),xs=s("Add data augmentations to your images with "),Re=o("a"),Is=s("Dataset.set_transform()"),Ds=s("."),Wa=m(),L=o("h2"),U=o("a"),ga=o("span"),d(de.$$.fragment),qs=m(),_a=o("span"),Ps=s("Installation"),Xa=m(),D=o("p"),As=s("The "),Ue=o("a"),Cs=s("Image"),Ts=s(" feature should be installed as an extra dependency in \u{1F917} Datasets. Install the "),Ge=o("a"),Ls=s("Image"),Fs=s(" feature (and its dependencies) with pip:"),Za=m(),d(he.$$.fragment),et=m(),F=o("h2"),G=o("a"),va=o("span"),d(ue.$$.fragment),Os=m(),$a=o("span"),Ns=s("Image datasets"),at=m(),Me=o("p"),zs=s("The images in an image dataset are typically either a:"),tt=m(),M=o("ul"),ge=o("li"),Bs=s("PIL "),wa=o("code"),Ss=s("image"),Js=s("."),Rs=m(),ya=o("li"),Us=s("Path to an image file you can load."),st=m(),Y=o("p"),Gs=s("For example, load the "),_e=o("a"),Ms=s("Food-101"),Ys=s(" dataset and take a look:"),lt=m(),d(ve.$$.fragment),ot=m(),x=o("p"),Hs=s("The "),Ye=o("a"),Ks=s("Image"),Qs=s(" feature automatically decodes the data from the "),Ea=o("code"),Vs=s("image"),Ws=s(" column to return an image object. Now try and call the "),ja=o("code"),Xs=s("image"),Zs=s(" column to see what the image is:"),rt=m(),d($e.$$.fragment),nt=m(),He=o("p"),Ke=o("img"),it=m(),q=o("p"),el=s("To load an image from its path, use the "),Qe=o("a"),al=s("Dataset.cast_column()"),tl=s(" method. The "),Ve=o("a"),sl=s("Image"),ll=s(" feature will decode the data at the path to return an image object:"),pt=m(),d(we.$$.fragment),mt=m(),P=o("p"),ol=s("You can also access the path and bytes of an image file by setting "),ba=o("code"),rl=s("decode=False"),nl=s(" when you load a dataset. In this case, you will need to cast the "),ka=o("code"),il=s("image"),pl=s(" column:"),ft=m(),d(ye.$$.fragment),ct=m(),O=o("h2"),H=o("a"),xa=o("span"),d(Ee.$$.fragment),ml=m(),Ia=o("span"),fl=s("ImageFolder"),dt=m(),K=o("p"),cl=s("You can also load your image dataset with a "),Da=o("code"),dl=s("ImageFolder"),hl=s(" dataset builder without writing a custom dataloader. Your image dataset structure should look like this:"),ht=m(),d(je.$$.fragment),ut=m(),A=o("p"),ul=s("Then load your dataset by specifying "),qa=o("code"),gl=s("imagefolder"),_l=s(" and the directory of your dataset in "),Pa=o("code"),vl=s("data_dir"),$l=s(":"),gt=m(),d(be.$$.fragment),_t=m(),Q=o("p"),wl=s("Load remote datasets from their URLs with the "),Aa=o("code"),yl=s("data_files"),El=s(" parameter:"),vt=m(),d(ke.$$.fragment),$t=m(),N=o("p"),Ca=o("code"),jl=s("ImageFolder"),bl=s(" will create a "),Ta=o("code"),kl=s("label"),xl=s(" column, and the label name is based on the directory name."),wt=m(),z=o("h2"),V=o("a"),La=o("span"),d(xe.$$.fragment),Il=m(),Fa=o("span"),Dl=s("Map"),yt=m(),Ie=o("p"),We=o("a"),ql=s("Dataset.map()"),Pl=s(" can apply transforms over an entire dataset and it also generates a cache file."),Et=m(),W=o("p"),Al=s("Create a simple "),De=o("a"),Oa=o("code"),Cl=s("Resize"),Tl=s(" function:"),jt=m(),d(qe.$$.fragment),bt=m(),y=o("p"),Ll=s("Now "),Xe=o("a"),Fl=s("Dataset.map()"),Ol=s(" the function over the entire dataset and set "),Na=o("code"),Nl=s("batched=True"),zl=s(". The transform returns "),za=o("code"),Bl=s("pixel_values"),Sl=s(" as a cacheable "),Ba=o("code"),Jl=s("PIL.Image"),Rl=s(" object:"),kt=m(),d(Pe.$$.fragment),xt=m(),X=o("p"),Ul=s("This saves time because you don\u2019t have to execute the same transform twice. It is best to use "),Ze=o("a"),Gl=s("Dataset.map()"),Ml=s(" for operations you only run once per training - like resizing an image - instead of using it for operations executed for each epoch, like data augmentations."),It=m(),Ae=o("p"),ea=o("a"),Yl=s("Dataset.map()"),Hl=s(" takes up some memory, but you can reduce its memory requirements with the following parameters:"),Dt=m(),Z=o("ul"),aa=o("li"),ta=o("a"),Sa=o("code"),Kl=s("batch_size"),Ql=s(" determines the number of examples that are processed in one call to the transform function."),Vl=m(),sa=o("li"),la=o("a"),Ja=o("code"),Wl=s("writer_batch_size"),Xl=s(" determines the number of processed examples that are kept in memory before they are stored away."),qt=m(),ee=o("p"),Zl=s("Both parameter values default to 1000, which can be expensive if you are storing images. Lower the value to use less memory when calling "),oa=o("a"),eo=s("Dataset.map()"),ao=s("."),Pt=m(),B=o("h2"),ae=o("a"),Ra=o("span"),d(Ce.$$.fragment),to=m(),Ua=o("span"),so=s("Data augmentation"),At=m(),te=o("p"),lo=s("Adding data augmentations to a dataset is common to prevent overfitting and achieve better performance. You can use any library or package you want to apply the augmentations. This guide will use the transforms from "),Te=o("a"),oo=s("torchvision"),ro=s("."),Ct=m(),d(se.$$.fragment),Tt=m(),le=o("p"),no=s("Add the "),Le=o("a"),Ga=o("code"),io=s("ColorJitter"),po=s(" transform to change the color properties of the image randomly:"),Lt=m(),d(Fe.$$.fragment),Ft=m(),oe=o("p"),mo=s("Create a function to apply the "),Ma=o("code"),fo=s("ColorJitter"),co=s(" transform to an image:"),Ot=m(),d(Oe.$$.fragment),Nt=m(),re=o("p"),ho=s("Then you can use the "),ra=o("a"),uo=s("Dataset.set_transform()"),go=s(" function to apply the transform on-the-fly to consume less disk space. Use this function if you only need to access the examples once:"),zt=m(),d(Ne.$$.fragment),Bt=m(),ne=o("p"),_o=s("Now visualize the results of the "),Ya=o("code"),vo=s("ColorJitter"),$o=s(" transform:"),St=m(),d(ze.$$.fragment),Jt=m(),na=o("p"),ia=o("img"),this.h()},l(e){const n=Sr('[data-svelte="svelte-1phssyn"]',document.head);$=r(n,"META",{name:!0,content:!0}),n.forEach(t),S=f(e),w=r(e,"H1",{class:!0});var Be=i(w);b=r(Be,"A",{id:!0,class:!0,href:!0});var xo=i(b);T=r(xo,"SPAN",{});var Io=i(T);h(j.$$.fragment,Io),Io.forEach(t),xo.forEach(t),I=f(Be),J=r(Be,"SPAN",{});var Do=i(J);cs=l(Do,"Process image data"),Do.forEach(t),Be.forEach(t),Qa=f(e),R=r(e,"P",{});var Ut=i(R);ds=l(Ut,"\u{1F917} Datasets support loading and processing images with the "),Se=r(Ut,"A",{href:!0});var qo=i(Se);hs=l(qo,"Image"),qo.forEach(t),us=l(Ut," feature. This guide will show you how to:"),Ut.forEach(t),Va=f(e),k=r(e,"UL",{});var ie=i(k);ha=r(ie,"LI",{});var Po=i(ha);gs=l(Po,"Load an image dataset."),Po.forEach(t),_s=f(ie),me=r(ie,"LI",{});var Gt=i(me);vs=l(Gt,"Load a generic image dataset with "),ua=r(Gt,"CODE",{});var Ao=i(ua);$s=l(Ao,"ImageFolder"),Ao.forEach(t),ws=l(Gt,"."),Gt.forEach(t),ys=f(ie),fe=r(ie,"LI",{});var Mt=i(fe);Es=l(Mt,"Use "),Je=r(Mt,"A",{href:!0});var Co=i(Je);js=l(Co,"Dataset.map()"),Co.forEach(t),bs=l(Mt," to quickly apply transforms to an entire dataset."),Mt.forEach(t),ks=f(ie),ce=r(ie,"LI",{});var Yt=i(ce);xs=l(Yt,"Add data augmentations to your images with "),Re=r(Yt,"A",{href:!0});var To=i(Re);Is=l(To,"Dataset.set_transform()"),To.forEach(t),Ds=l(Yt,"."),Yt.forEach(t),ie.forEach(t),Wa=f(e),L=r(e,"H2",{class:!0});var Ht=i(L);U=r(Ht,"A",{id:!0,class:!0,href:!0});var Lo=i(U);ga=r(Lo,"SPAN",{});var Fo=i(ga);h(de.$$.fragment,Fo),Fo.forEach(t),Lo.forEach(t),qs=f(Ht),_a=r(Ht,"SPAN",{});var Oo=i(_a);Ps=l(Oo,"Installation"),Oo.forEach(t),Ht.forEach(t),Xa=f(e),D=r(e,"P",{});var pa=i(D);As=l(pa,"The "),Ue=r(pa,"A",{href:!0});var No=i(Ue);Cs=l(No,"Image"),No.forEach(t),Ts=l(pa," feature should be installed as an extra dependency in \u{1F917} Datasets. Install the "),Ge=r(pa,"A",{href:!0});var zo=i(Ge);Ls=l(zo,"Image"),zo.forEach(t),Fs=l(pa," feature (and its dependencies) with pip:"),pa.forEach(t),Za=f(e),h(he.$$.fragment,e),et=f(e),F=r(e,"H2",{class:!0});var Kt=i(F);G=r(Kt,"A",{id:!0,class:!0,href:!0});var Bo=i(G);va=r(Bo,"SPAN",{});var So=i(va);h(ue.$$.fragment,So),So.forEach(t),Bo.forEach(t),Os=f(Kt),$a=r(Kt,"SPAN",{});var Jo=i($a);Ns=l(Jo,"Image datasets"),Jo.forEach(t),Kt.forEach(t),at=f(e),Me=r(e,"P",{});var Ro=i(Me);zs=l(Ro,"The images in an image dataset are typically either a:"),Ro.forEach(t),tt=f(e),M=r(e,"UL",{});var Qt=i(M);ge=r(Qt,"LI",{});var Vt=i(ge);Bs=l(Vt,"PIL "),wa=r(Vt,"CODE",{});var Uo=i(wa);Ss=l(Uo,"image"),Uo.forEach(t),Js=l(Vt,"."),Vt.forEach(t),Rs=f(Qt),ya=r(Qt,"LI",{});var Go=i(ya);Us=l(Go,"Path to an image file you can load."),Go.forEach(t),Qt.forEach(t),st=f(e),Y=r(e,"P",{});var Wt=i(Y);Gs=l(Wt,"For example, load the "),_e=r(Wt,"A",{href:!0,rel:!0});var Mo=i(_e);Ms=l(Mo,"Food-101"),Mo.forEach(t),Ys=l(Wt," dataset and take a look:"),Wt.forEach(t),lt=f(e),h(ve.$$.fragment,e),ot=f(e),x=r(e,"P",{});var pe=i(x);Hs=l(pe,"The "),Ye=r(pe,"A",{href:!0});var Yo=i(Ye);Ks=l(Yo,"Image"),Yo.forEach(t),Qs=l(pe," feature automatically decodes the data from the "),Ea=r(pe,"CODE",{});var Ho=i(Ea);Vs=l(Ho,"image"),Ho.forEach(t),Ws=l(pe," column to return an image object. Now try and call the "),ja=r(pe,"CODE",{});var Ko=i(ja);Xs=l(Ko,"image"),Ko.forEach(t),Zs=l(pe," column to see what the image is:"),pe.forEach(t),rt=f(e),h($e.$$.fragment,e),nt=f(e),He=r(e,"P",{});var Qo=i(He);Ke=r(Qo,"IMG",{src:!0,alt:!0}),Qo.forEach(t),it=f(e),q=r(e,"P",{});var ma=i(q);el=l(ma,"To load an image from its path, use the "),Qe=r(ma,"A",{href:!0});var Vo=i(Qe);al=l(Vo,"Dataset.cast_column()"),Vo.forEach(t),tl=l(ma," method. The "),Ve=r(ma,"A",{href:!0});var Wo=i(Ve);sl=l(Wo,"Image"),Wo.forEach(t),ll=l(ma," feature will decode the data at the path to return an image object:"),ma.forEach(t),pt=f(e),h(we.$$.fragment,e),mt=f(e),P=r(e,"P",{});var fa=i(P);ol=l(fa,"You can also access the path and bytes of an image file by setting "),ba=r(fa,"CODE",{});var Xo=i(ba);rl=l(Xo,"decode=False"),Xo.forEach(t),nl=l(fa," when you load a dataset. In this case, you will need to cast the "),ka=r(fa,"CODE",{});var Zo=i(ka);il=l(Zo,"image"),Zo.forEach(t),pl=l(fa," column:"),fa.forEach(t),ft=f(e),h(ye.$$.fragment,e),ct=f(e),O=r(e,"H2",{class:!0});var Xt=i(O);H=r(Xt,"A",{id:!0,class:!0,href:!0});var er=i(H);xa=r(er,"SPAN",{});var ar=i(xa);h(Ee.$$.fragment,ar),ar.forEach(t),er.forEach(t),ml=f(Xt),Ia=r(Xt,"SPAN",{});var tr=i(Ia);fl=l(tr,"ImageFolder"),tr.forEach(t),Xt.forEach(t),dt=f(e),K=r(e,"P",{});var Zt=i(K);cl=l(Zt,"You can also load your image dataset with a "),Da=r(Zt,"CODE",{});var sr=i(Da);dl=l(sr,"ImageFolder"),sr.forEach(t),hl=l(Zt," dataset builder without writing a custom dataloader. Your image dataset structure should look like this:"),Zt.forEach(t),ht=f(e),h(je.$$.fragment,e),ut=f(e),A=r(e,"P",{});var ca=i(A);ul=l(ca,"Then load your dataset by specifying "),qa=r(ca,"CODE",{});var lr=i(qa);gl=l(lr,"imagefolder"),lr.forEach(t),_l=l(ca," and the directory of your dataset in "),Pa=r(ca,"CODE",{});var or=i(Pa);vl=l(or,"data_dir"),or.forEach(t),$l=l(ca,":"),ca.forEach(t),gt=f(e),h(be.$$.fragment,e),_t=f(e),Q=r(e,"P",{});var es=i(Q);wl=l(es,"Load remote datasets from their URLs with the "),Aa=r(es,"CODE",{});var rr=i(Aa);yl=l(rr,"data_files"),rr.forEach(t),El=l(es," parameter:"),es.forEach(t),vt=f(e),h(ke.$$.fragment,e),$t=f(e),N=r(e,"P",{});var Ha=i(N);Ca=r(Ha,"CODE",{});var nr=i(Ca);jl=l(nr,"ImageFolder"),nr.forEach(t),bl=l(Ha," will create a "),Ta=r(Ha,"CODE",{});var ir=i(Ta);kl=l(ir,"label"),ir.forEach(t),xl=l(Ha," column, and the label name is based on the directory name."),Ha.forEach(t),wt=f(e),z=r(e,"H2",{class:!0});var as=i(z);V=r(as,"A",{id:!0,class:!0,href:!0});var pr=i(V);La=r(pr,"SPAN",{});var mr=i(La);h(xe.$$.fragment,mr),mr.forEach(t),pr.forEach(t),Il=f(as),Fa=r(as,"SPAN",{});var fr=i(Fa);Dl=l(fr,"Map"),fr.forEach(t),as.forEach(t),yt=f(e),Ie=r(e,"P",{});var wo=i(Ie);We=r(wo,"A",{href:!0});var cr=i(We);ql=l(cr,"Dataset.map()"),cr.forEach(t),Pl=l(wo," can apply transforms over an entire dataset and it also generates a cache file."),wo.forEach(t),Et=f(e),W=r(e,"P",{});var ts=i(W);Al=l(ts,"Create a simple "),De=r(ts,"A",{href:!0,rel:!0});var dr=i(De);Oa=r(dr,"CODE",{});var hr=i(Oa);Cl=l(hr,"Resize"),hr.forEach(t),dr.forEach(t),Tl=l(ts," function:"),ts.forEach(t),jt=f(e),h(qe.$$.fragment,e),bt=f(e),y=r(e,"P",{});var C=i(y);Ll=l(C,"Now "),Xe=r(C,"A",{href:!0});var ur=i(Xe);Fl=l(ur,"Dataset.map()"),ur.forEach(t),Ol=l(C," the function over the entire dataset and set "),Na=r(C,"CODE",{});var gr=i(Na);Nl=l(gr,"batched=True"),gr.forEach(t),zl=l(C,". The transform returns "),za=r(C,"CODE",{});var _r=i(za);Bl=l(_r,"pixel_values"),_r.forEach(t),Sl=l(C," as a cacheable "),Ba=r(C,"CODE",{});var vr=i(Ba);Jl=l(vr,"PIL.Image"),vr.forEach(t),Rl=l(C," object:"),C.forEach(t),kt=f(e),h(Pe.$$.fragment,e),xt=f(e),X=r(e,"P",{});var ss=i(X);Ul=l(ss,"This saves time because you don\u2019t have to execute the same transform twice. It is best to use "),Ze=r(ss,"A",{href:!0});var $r=i(Ze);Gl=l($r,"Dataset.map()"),$r.forEach(t),Ml=l(ss," for operations you only run once per training - like resizing an image - instead of using it for operations executed for each epoch, like data augmentations."),ss.forEach(t),It=f(e),Ae=r(e,"P",{});var yo=i(Ae);ea=r(yo,"A",{href:!0});var wr=i(ea);Yl=l(wr,"Dataset.map()"),wr.forEach(t),Hl=l(yo," takes up some memory, but you can reduce its memory requirements with the following parameters:"),yo.forEach(t),Dt=f(e),Z=r(e,"UL",{});var ls=i(Z);aa=r(ls,"LI",{});var Eo=i(aa);ta=r(Eo,"A",{href:!0});var yr=i(ta);Sa=r(yr,"CODE",{});var Er=i(Sa);Kl=l(Er,"batch_size"),Er.forEach(t),yr.forEach(t),Ql=l(Eo," determines the number of examples that are processed in one call to the transform function."),Eo.forEach(t),Vl=f(ls),sa=r(ls,"LI",{});var jo=i(sa);la=r(jo,"A",{href:!0});var jr=i(la);Ja=r(jr,"CODE",{});var br=i(Ja);Wl=l(br,"writer_batch_size"),br.forEach(t),jr.forEach(t),Xl=l(jo," determines the number of processed examples that are kept in memory before they are stored away."),jo.forEach(t),ls.forEach(t),qt=f(e),ee=r(e,"P",{});var os=i(ee);Zl=l(os,"Both parameter values default to 1000, which can be expensive if you are storing images. Lower the value to use less memory when calling "),oa=r(os,"A",{href:!0});var kr=i(oa);eo=l(kr,"Dataset.map()"),kr.forEach(t),ao=l(os,"."),os.forEach(t),Pt=f(e),B=r(e,"H2",{class:!0});var rs=i(B);ae=r(rs,"A",{id:!0,class:!0,href:!0});var xr=i(ae);Ra=r(xr,"SPAN",{});var Ir=i(Ra);h(Ce.$$.fragment,Ir),Ir.forEach(t),xr.forEach(t),to=f(rs),Ua=r(rs,"SPAN",{});var Dr=i(Ua);so=l(Dr,"Data augmentation"),Dr.forEach(t),rs.forEach(t),At=f(e),te=r(e,"P",{});var ns=i(te);lo=l(ns,"Adding data augmentations to a dataset is common to prevent overfitting and achieve better performance. You can use any library or package you want to apply the augmentations. This guide will use the transforms from "),Te=r(ns,"A",{href:!0,rel:!0});var qr=i(Te);oo=l(qr,"torchvision"),qr.forEach(t),ro=l(ns,"."),ns.forEach(t),Ct=f(e),h(se.$$.fragment,e),Tt=f(e),le=r(e,"P",{});var is=i(le);no=l(is,"Add the "),Le=r(is,"A",{href:!0,rel:!0});var Pr=i(Le);Ga=r(Pr,"CODE",{});var Ar=i(Ga);io=l(Ar,"ColorJitter"),Ar.forEach(t),Pr.forEach(t),po=l(is," transform to change the color properties of the image randomly:"),is.forEach(t),Lt=f(e),h(Fe.$$.fragment,e),Ft=f(e),oe=r(e,"P",{});var ps=i(oe);mo=l(ps,"Create a function to apply the "),Ma=r(ps,"CODE",{});var Cr=i(Ma);fo=l(Cr,"ColorJitter"),Cr.forEach(t),co=l(ps," transform to an image:"),ps.forEach(t),Ot=f(e),h(Oe.$$.fragment,e),Nt=f(e),re=r(e,"P",{});var ms=i(re);ho=l(ms,"Then you can use the "),ra=r(ms,"A",{href:!0});var Tr=i(ra);uo=l(Tr,"Dataset.set_transform()"),Tr.forEach(t),go=l(ms," function to apply the transform on-the-fly to consume less disk space. Use this function if you only need to access the examples once:"),ms.forEach(t),zt=f(e),h(Ne.$$.fragment,e),Bt=f(e),ne=r(e,"P",{});var fs=i(ne);_o=l(fs,"Now visualize the results of the "),Ya=r(fs,"CODE",{});var Lr=i(Ya);vo=l(Lr,"ColorJitter"),Lr.forEach(t),$o=l(fs," transform:"),fs.forEach(t),St=f(e),h(ze.$$.fragment,e),Jt=f(e),na=r(e,"P",{});var Fr=i(na);ia=r(Fr,"IMG",{src:!0,alt:!0}),Fr.forEach(t),this.h()},h(){c($,"name","hf:doc:metadata"),c($,"content",JSON.stringify(Mr)),c(b,"id","process-image-data"),c(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(b,"href","#process-image-data"),c(w,"class","relative group"),c(Se,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Image"),c(Je,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Dataset.map"),c(Re,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Dataset.set_transform"),c(U,"id","installation"),c(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(U,"href","#installation"),c(L,"class","relative group"),c(Ue,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Image"),c(Ge,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Image"),c(G,"id","image-datasets"),c(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(G,"href","#image-datasets"),c(F,"class","relative group"),c(_e,"href","https://huggingface.co/datasets/food101"),c(_e,"rel","nofollow"),c(Ye,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Image"),Or(Ke.src,bo="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/image_process_beignet.png")||c(Ke,"src",bo),c(Ke,"alt","image_process_beignet"),c(Qe,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Dataset.cast_column"),c(Ve,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Image"),c(H,"id","imagefolder"),c(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(H,"href","#imagefolder"),c(O,"class","relative group"),c(V,"id","map"),c(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(V,"href","#map"),c(z,"class","relative group"),c(We,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Dataset.map"),c(De,"href","https://pytorch.org/vision/stable/generated/torchvision.transforms.Resize.html"),c(De,"rel","nofollow"),c(Xe,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Dataset.map"),c(Ze,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Dataset.map"),c(ea,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Dataset.map"),c(ta,"href","./package_reference/main_classes#datasets.DatasetDict.map.batch_size"),c(la,"href","./package_reference/main_classes#datasets.DatasetDict.map.writer_batch_size"),c(oa,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Dataset.map"),c(ae,"id","data-augmentation"),c(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ae,"href","#data-augmentation"),c(B,"class","relative group"),c(Te,"href","https://pytorch.org/vision/stable/transforms.html"),c(Te,"rel","nofollow"),c(Le,"href","https://pytorch.org/vision/stable/transforms.html#torchvision.transforms.ColorJitter"),c(Le,"rel","nofollow"),c(ra,"href","/docs/datasets/pr_4226/en/package_reference/main_classes#datasets.Dataset.set_transform"),Or(ia.src,ko="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/image_process_jitter.png")||c(ia,"src",ko),c(ia,"alt","image_process_jitter")},m(e,n){a(document.head,$),p(e,S,n),p(e,w,n),a(w,b),a(b,T),u(j,T,null),a(w,I),a(w,J),a(J,cs),p(e,Qa,n),p(e,R,n),a(R,ds),a(R,Se),a(Se,hs),a(R,us),p(e,Va,n),p(e,k,n),a(k,ha),a(ha,gs),a(k,_s),a(k,me),a(me,vs),a(me,ua),a(ua,$s),a(me,ws),a(k,ys),a(k,fe),a(fe,Es),a(fe,Je),a(Je,js),a(fe,bs),a(k,ks),a(k,ce),a(ce,xs),a(ce,Re),a(Re,Is),a(ce,Ds),p(e,Wa,n),p(e,L,n),a(L,U),a(U,ga),u(de,ga,null),a(L,qs),a(L,_a),a(_a,Ps),p(e,Xa,n),p(e,D,n),a(D,As),a(D,Ue),a(Ue,Cs),a(D,Ts),a(D,Ge),a(Ge,Ls),a(D,Fs),p(e,Za,n),u(he,e,n),p(e,et,n),p(e,F,n),a(F,G),a(G,va),u(ue,va,null),a(F,Os),a(F,$a),a($a,Ns),p(e,at,n),p(e,Me,n),a(Me,zs),p(e,tt,n),p(e,M,n),a(M,ge),a(ge,Bs),a(ge,wa),a(wa,Ss),a(ge,Js),a(M,Rs),a(M,ya),a(ya,Us),p(e,st,n),p(e,Y,n),a(Y,Gs),a(Y,_e),a(_e,Ms),a(Y,Ys),p(e,lt,n),u(ve,e,n),p(e,ot,n),p(e,x,n),a(x,Hs),a(x,Ye),a(Ye,Ks),a(x,Qs),a(x,Ea),a(Ea,Vs),a(x,Ws),a(x,ja),a(ja,Xs),a(x,Zs),p(e,rt,n),u($e,e,n),p(e,nt,n),p(e,He,n),a(He,Ke),p(e,it,n),p(e,q,n),a(q,el),a(q,Qe),a(Qe,al),a(q,tl),a(q,Ve),a(Ve,sl),a(q,ll),p(e,pt,n),u(we,e,n),p(e,mt,n),p(e,P,n),a(P,ol),a(P,ba),a(ba,rl),a(P,nl),a(P,ka),a(ka,il),a(P,pl),p(e,ft,n),u(ye,e,n),p(e,ct,n),p(e,O,n),a(O,H),a(H,xa),u(Ee,xa,null),a(O,ml),a(O,Ia),a(Ia,fl),p(e,dt,n),p(e,K,n),a(K,cl),a(K,Da),a(Da,dl),a(K,hl),p(e,ht,n),u(je,e,n),p(e,ut,n),p(e,A,n),a(A,ul),a(A,qa),a(qa,gl),a(A,_l),a(A,Pa),a(Pa,vl),a(A,$l),p(e,gt,n),u(be,e,n),p(e,_t,n),p(e,Q,n),a(Q,wl),a(Q,Aa),a(Aa,yl),a(Q,El),p(e,vt,n),u(ke,e,n),p(e,$t,n),p(e,N,n),a(N,Ca),a(Ca,jl),a(N,bl),a(N,Ta),a(Ta,kl),a(N,xl),p(e,wt,n),p(e,z,n),a(z,V),a(V,La),u(xe,La,null),a(z,Il),a(z,Fa),a(Fa,Dl),p(e,yt,n),p(e,Ie,n),a(Ie,We),a(We,ql),a(Ie,Pl),p(e,Et,n),p(e,W,n),a(W,Al),a(W,De),a(De,Oa),a(Oa,Cl),a(W,Tl),p(e,jt,n),u(qe,e,n),p(e,bt,n),p(e,y,n),a(y,Ll),a(y,Xe),a(Xe,Fl),a(y,Ol),a(y,Na),a(Na,Nl),a(y,zl),a(y,za),a(za,Bl),a(y,Sl),a(y,Ba),a(Ba,Jl),a(y,Rl),p(e,kt,n),u(Pe,e,n),p(e,xt,n),p(e,X,n),a(X,Ul),a(X,Ze),a(Ze,Gl),a(X,Ml),p(e,It,n),p(e,Ae,n),a(Ae,ea),a(ea,Yl),a(Ae,Hl),p(e,Dt,n),p(e,Z,n),a(Z,aa),a(aa,ta),a(ta,Sa),a(Sa,Kl),a(aa,Ql),a(Z,Vl),a(Z,sa),a(sa,la),a(la,Ja),a(Ja,Wl),a(sa,Xl),p(e,qt,n),p(e,ee,n),a(ee,Zl),a(ee,oa),a(oa,eo),a(ee,ao),p(e,Pt,n),p(e,B,n),a(B,ae),a(ae,Ra),u(Ce,Ra,null),a(B,to),a(B,Ua),a(Ua,so),p(e,At,n),p(e,te,n),a(te,lo),a(te,Te),a(Te,oo),a(te,ro),p(e,Ct,n),u(se,e,n),p(e,Tt,n),p(e,le,n),a(le,no),a(le,Le),a(Le,Ga),a(Ga,io),a(le,po),p(e,Lt,n),u(Fe,e,n),p(e,Ft,n),p(e,oe,n),a(oe,mo),a(oe,Ma),a(Ma,fo),a(oe,co),p(e,Ot,n),u(Oe,e,n),p(e,Nt,n),p(e,re,n),a(re,ho),a(re,ra),a(ra,uo),a(re,go),p(e,zt,n),u(Ne,e,n),p(e,Bt,n),p(e,ne,n),a(ne,_o),a(ne,Ya),a(Ya,vo),a(ne,$o),p(e,St,n),u(ze,e,n),p(e,Jt,n),p(e,na,n),a(na,ia),Rt=!0},p(e,[n]){const Be={};n&2&&(Be.$$scope={dirty:n,ctx:e}),se.$set(Be)},i(e){Rt||(g(j.$$.fragment,e),g(de.$$.fragment,e),g(he.$$.fragment,e),g(ue.$$.fragment,e),g(ve.$$.fragment,e),g($e.$$.fragment,e),g(we.$$.fragment,e),g(ye.$$.fragment,e),g(Ee.$$.fragment,e),g(je.$$.fragment,e),g(be.$$.fragment,e),g(ke.$$.fragment,e),g(xe.$$.fragment,e),g(qe.$$.fragment,e),g(Pe.$$.fragment,e),g(Ce.$$.fragment,e),g(se.$$.fragment,e),g(Fe.$$.fragment,e),g(Oe.$$.fragment,e),g(Ne.$$.fragment,e),g(ze.$$.fragment,e),Rt=!0)},o(e){_(j.$$.fragment,e),_(de.$$.fragment,e),_(he.$$.fragment,e),_(ue.$$.fragment,e),_(ve.$$.fragment,e),_($e.$$.fragment,e),_(we.$$.fragment,e),_(ye.$$.fragment,e),_(Ee.$$.fragment,e),_(je.$$.fragment,e),_(be.$$.fragment,e),_(ke.$$.fragment,e),_(xe.$$.fragment,e),_(qe.$$.fragment,e),_(Pe.$$.fragment,e),_(Ce.$$.fragment,e),_(se.$$.fragment,e),_(Fe.$$.fragment,e),_(Oe.$$.fragment,e),_(Ne.$$.fragment,e),_(ze.$$.fragment,e),Rt=!1},d(e){t($),e&&t(S),e&&t(w),v(j),e&&t(Qa),e&&t(R),e&&t(Va),e&&t(k),e&&t(Wa),e&&t(L),v(de),e&&t(Xa),e&&t(D),e&&t(Za),v(he,e),e&&t(et),e&&t(F),v(ue),e&&t(at),e&&t(Me),e&&t(tt),e&&t(M),e&&t(st),e&&t(Y),e&&t(lt),v(ve,e),e&&t(ot),e&&t(x),e&&t(rt),v($e,e),e&&t(nt),e&&t(He),e&&t(it),e&&t(q),e&&t(pt),v(we,e),e&&t(mt),e&&t(P),e&&t(ft),v(ye,e),e&&t(ct),e&&t(O),v(Ee),e&&t(dt),e&&t(K),e&&t(ht),v(je,e),e&&t(ut),e&&t(A),e&&t(gt),v(be,e),e&&t(_t),e&&t(Q),e&&t(vt),v(ke,e),e&&t($t),e&&t(N),e&&t(wt),e&&t(z),v(xe),e&&t(yt),e&&t(Ie),e&&t(Et),e&&t(W),e&&t(jt),v(qe,e),e&&t(bt),e&&t(y),e&&t(kt),v(Pe,e),e&&t(xt),e&&t(X),e&&t(It),e&&t(Ae),e&&t(Dt),e&&t(Z),e&&t(qt),e&&t(ee),e&&t(Pt),e&&t(B),v(Ce),e&&t(At),e&&t(te),e&&t(Ct),v(se,e),e&&t(Tt),e&&t(le),e&&t(Lt),v(Fe,e),e&&t(Ft),e&&t(oe),e&&t(Ot),v(Oe,e),e&&t(Nt),e&&t(re),e&&t(zt),v(Ne,e),e&&t(Bt),e&&t(ne),e&&t(St),v(ze,e),e&&t(Jt),e&&t(na)}}}const Mr={local:"process-image-data",sections:[{local:"installation",title:"Installation"},{local:"image-datasets",title:"Image datasets"},{local:"imagefolder",title:"ImageFolder"},{local:"map",title:"Map"},{local:"data-augmentation",title:"Data augmentation"}],title:"Process image data"};function Yr(Ka){return Jr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Wr extends Nr{constructor($){super();zr(this,$,Yr,Gr,Br,{})}}export{Wr as default,Mr as metadata};
